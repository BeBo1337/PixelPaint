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
            `http://localhost:3000/score?limit=100&name=${collectionName}`
        )
        return response.data
    } catch (error) {
        if (axios.isAxiosError(error)) {
            const { response } = error
            console.log(response?.data)
        }
        return []
    }
}

const GetPlayerFromDbFormatted = async (collectionName: string) => {
    const result = await GetPlayersFromDb(collectionName)

    return result.map((elem, index) => (
        <div className="player-stats" key={index}>
            <h1>
                <span>{index}</span>
                <span>
                    {elem.name} - {elem.score}
                </span>
            </h1>
        </div>
    ))
}

const Scoreboard = () => {
    const navigate = useNavigate()
    const handleBackToMenuClick = () => {
        navigate('/')
    }

    const [stats, setPlayerStats] = useState<JSX.Element[]>([])

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
                <div className="players-stats-container">{stats}</div>
                <button className="menu-btn" onClick={handleBackToMenuClick}>
                    BACK TO MENU
                </button>
            </section>
        </>
    )
}

export default Scoreboard
