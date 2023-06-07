import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../assets/Scoreboard.scss'
import '../assets/GameOverPage.scss'
export default function Scoreboard() {
    const navigate = useNavigate()
    const handleBackToMenuClick = () => {
        navigate('/')
    }
    return (
        <>
            <section className="scoreboard-container">
                <div className="gamemodes-container">
                    <div className="classic">Classic</div>
                    <div className="memory">Memory</div>
                    <div className="paint">Paint</div>
                    <div className="co-op">CO-OP</div>
                </div>
                <div className="players-stats-container">
                    <div className="player-stats">
                        <h1>
                            <span>1.</span> <span>Ori Teicher - 200</span>
                        </h1>
                    </div>
                    <div className="player-stats">
                        <h1>
                            <span>2.</span> <span>Idan Shalom - 0</span>
                        </h1>
                    </div>
                    <div className="player-stats">
                        <h1>
                            <span>3.</span> Tomer Abukarat - Banned forever
                        </h1>
                    </div>
                </div>
                <button className="menu-btn" onClick={handleBackToMenuClick}>
                    BACK TO MENU
                </button>
            </section>
        </>
    )
}
