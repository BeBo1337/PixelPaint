import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../assets/Scoreboard.scss'
import '../assets/GameOverPage.scss'

const playersData = [
    { name: 'Koko Gamba', score: 200 },
    { name: 'Kushi Nigga', score: 300 },
    { name: 'Temani Gazoor', score: 100 },
    { name: 'Quit Gg', score: 100 },
    { name: 'Mia Johnson', score: 150 },
    { name: 'Alex Thompson', score: 50 },
    { name: 'Sophia Lee', score: 80 },
    { name: 'Ethan Wilson', score: 75 },
    { name: 'Olivia Davis', score: 120 },
    { name: 'Omer Zevel', score: 20 },
    { name: 'Omer Zevel', score: 20 },
]

export default function Scoreboard() {
    const navigate = useNavigate()

    const handleBackToMenuClick = () => {
        navigate('/')
    }

    const getPlayerColor = (idx: number) => {
        switch (idx) {
            case 0:
                return 'gold'
            case 1:
                return 'silver'
            case 2:
                return 'bronze'
            default:
                return 'white'
        }
    }

    const sortedPlayersData = playersData.sort((a, b) => b.score - a.score)

    return (
        <>
            <section className="scoreboard-container">
                <h1 className="leaderboards-header">Leader-boards</h1>
                <div className="gamemodes-container">
                    <div className="classic">Classic</div>
                    <div className="memory">Memory</div>
                    <div className="paint">Paint</div>
                    <div className="co-op">CO-OP</div>
                </div>
                <div className="players-stats-container">
                    {sortedPlayersData.map((player, idx) => (
                        <>
                            <div className={`player-stats`} key={idx}>
                                <h1>
                                    <div className="left-content">
                                        <span className={getPlayerColor(idx)}>
                                            {idx + 1}
                                        </span>
                                        <span>{`${player.name}`}</span>
                                    </div>
                                    <p>{`${player.score} pts`}</p>
                                </h1>
                            </div>
                        </>
                    ))}
                </div>
                <button className="menu-btn" onClick={handleBackToMenuClick}>
                    BACK TO MENU
                </button>
            </section>
        </>
    )
}
