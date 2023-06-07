import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import '../assets/Scoreboard.scss'
import '../assets/GameOverPage.scss'

interface ScoreResult {
    name: string
    score: number
}

const GetPlayersFromDb = async (
    collectionName: string
): Promise<ScoreResult[]> => {
    try {
        const response = await axios.get(
            `http://localhost:3000/scores?limit=100&name=${collectionName}`
        )
        return response.data
    } catch (error) {
        console.log(error)
        return []
    }
}

const GetPlayerFromDbFormatted = async (collectionName: string) => {
    const result = await GetPlayersFromDb(collectionName)

    return result.map((elem, index) => (
        <div className="player-stats">
            <h1>
                <span>{index}</span> <span>{elem.name}</span>
            </h1>
        </div>
    ))
}

const Scoreboard: React.FC = () => {
    const navigate = useNavigate()
    const handleBackToMenuClick = () => {
        navigate('/')
    }

    const [playerStats, setPlayerStats] = useState<JSX.Element[]>([])

    useEffect(() => {
        const fetchPlayerStats = async () => {
            const formattedPlayerStats = await GetPlayerFromDbFormatted(
                'ScoreClassic'
            )
            setPlayerStats(formattedPlayerStats)
        }

        fetchPlayerStats()
    }, [])

    return (
        <>
            <section className="scoreboard-container">
                <div className="gamemodes-container">
                    <div className="classic">Classic</div>
                    <div className="memory">Memory</div>
                    <div className="paint">Paint</div>
                    <div className="co-op">CO-OP</div>
                </div>
                <div className="players-stats-container">{playerStats}</div>
                <button className="menu-btn" onClick={handleBackToMenuClick}>
                    BACK TO MENU
                </button>
            </section>
        </>
    )
}

export default Scoreboard
