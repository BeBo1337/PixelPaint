import React, { FC, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Scoreboard from './Scoreboard'
import { GameOverPayload } from '../payloads/GameOverPayload'
import { Modes } from '../utils/GameConstants'
import { Collection } from '../utils/CollectionsConstants'
import axios from 'axios'
import EventsManager from '../services/EventsManager'
import SocketManager from '../services/SocketManager'
import { SocketEvents } from '../services/SocketEvents.model'
import { toast } from 'react-toastify'
import '../assets/GameOverPage.scss'
import Confetti from './Confetti'

interface GameOverPageProps {
    score: number
    resetGame: Function
    gameMode: number
}

const GameOverPage: FC<GameOverPageProps> = ({
    score,
    resetGame,
    gameMode
}: GameOverPageProps) => {
    const [isConffetiOn, setIsConfettiOn] = useState<boolean>(false)
    const [displayNames, setDisplayNames] = useState<string[]>([])
    const [displayScore, setDisplayScore] = useState(score)
    const [showScoreboard, setShowScoreboard] = useState(false)
    const navigate = useNavigate()

    const handleBackToMenuClick = () => {
        navigate('/')
    }

    const handleScoreboardClick = () => {
        setShowScoreboard(true)
    }

    const handleGameOver = (p: GameOverPayload) => {
        console.log(p)
        if (p) {
            setDisplayScore(p.score)
            setDisplayNames(p.players)
        }
    }

    // onMount
    useEffect(() => {
        setIsConfettiOn(true)
        if (!SocketManager.instance.roomId) {
            toast.error('Please create/join a room to enter a game', {
                position: toast.POSITION.BOTTOM_CENTER,
                autoClose: 1500
            })
            navigate('/')
        }

        EventsManager.instance.on(
            SocketEvents.GAMEOVER_RET,
            'GameOverPage',
            handleGameOver
        )

        if (SocketManager.instance.isHost) {
            EventsManager.instance.trigger(SocketEvents.GAMEOVER, {})
        }
        setTimeout(() => {
            setIsConfettiOn(false)
        }, 5000)

        resetGame()
    }, [])

    // onBeforeDestroy
    useEffect(
        () => () => {
            EventsManager.instance.off(
                SocketEvents.GAMEOVER_RET,
                'GameOverPage'
            )
        },
        []
    )

    useEffect(() => {
        if (displayNames.length > 0) {
            if (SocketManager.instance.isHost) {
                axios
                    .post(`${import.meta.env.VITE_API_URL}/score`, result())
                    .catch((error) => console.log(error))
            }
        }
    }, [displayNames])

    const result = () => {
        let collection: String
        switch (gameMode) {
            case Modes.CLASSIC:
                collection = Collection.CLASSIC
                break
            case Modes.MEMORY:
                collection = Collection.MEMORY
                break
            case Modes.PAINT:
                collection = Collection.PAINT
                break
            case Modes.CO_OP:
                collection = Collection.CO_OP
                break
            default:
                collection = 'NA'
        }
        if (collection !== 'NA') {
            console.log(SocketManager.instance.getRemoteAddress())
            return {
                collectionName: collection,
                ipAddr: SocketManager.instance.getRemoteAddress(),
                score: {
                    name: displayNames.toString(),
                    score: displayScore
                }
            }
        }
    }

    if (showScoreboard) {
        return <Scoreboard />
    }

    return (
        <section className="game-over-container">
            <h1>
                Game <span>Over!</span>
            </h1>
            <Confetti isRecycleOn={isConffetiOn} />
            <div className="player-cred-container">
                <h2>
                    Players : <span>{displayNames?.toString()}</span>
                </h2>
                <h2>
                    Score : <span className="score">{displayScore}</span>
                </h2>
            </div>
            <div className="game-btns">
                <button className="menu-btn" onClick={handleBackToMenuClick}>
                    BACK TO MENU
                </button>
                <button
                    className="scoreboard-btn"
                    onClick={handleScoreboardClick}
                >
                    SCOREBOARD
                </button>
            </div>
        </section>
    )
}

export default GameOverPage
