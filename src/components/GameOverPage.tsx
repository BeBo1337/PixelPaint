import React, { FC, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Scoreboard from './Scoreboard'

import '../assets/GameOverPage.scss'

interface GameOverPageProps {
    score?: number
    playerNamesArr: string[]
    resetGame: Function
}

const GameOverPage: FC<GameOverPageProps> = ({
    score,
    playerNamesArr,
    resetGame
}: GameOverPageProps) => {
    const [displayNames, setDisplayNames] = useState<string[]>(playerNamesArr)
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
    }, [])

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
                    {/* just single player currently */}
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
