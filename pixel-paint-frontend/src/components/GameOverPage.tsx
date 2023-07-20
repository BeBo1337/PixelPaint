import React, { FC, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Scoreboard from './Scoreboard'
import { Modes } from '../utils/GameConstants'
import axios from 'axios'

import '../assets/GameOverPage.scss'

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

    useEffect(() => {
        resetGame()
        axios
            .post(`${import.meta.env.VITE_API_URL}/score`, result())
            .catch((error) => console.log(error))
    }, [])

    const result = () => {
        let collection: String
        switch (gameMode) {
            case Modes.CLASSIC:
                collection = 'ScoreClassic'
                break
            case Modes.MEMORY:
                collection = 'ScoreMemory'
                break
            case Modes.PAINT:
                collection = 'ScorePaint'
                break
            default:
                collection = 'NA'
        }
        return {
            collectionName: collection,
            score: {
                name: displayNames.toString(),
                score: displayScore
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
