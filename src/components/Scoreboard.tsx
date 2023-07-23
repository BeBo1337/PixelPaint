import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import '../assets/Scoreboard.scss'
import '../assets/GameOverPage.scss'
import { random, toInteger } from 'lodash'
import { getNumberInRange } from '../utils/GenericFuncs'
function Scoreboard() {
    interface ScoreResult {
        name: string
        score: number
        nationality: string
    }

    const navigate = useNavigate()
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

    const getRandomCountry = () => {
        const countries = [
            'IL',
            'AR',
            'FR',
            'BS',
            'GH',
            'GB',
            'KP',
            'LB',
            ''
        ]
        const randomNum = getNumberInRange(0, countries.length - 1)
        console.log(randomNum)
        return countries[randomNum]
    }

    const GetPlayerFromDbFormatted = async (collectionName: string) => {
        const result = await GetPlayersFromDb(collectionName)

        return result.map((player, index) => (
            <div className="player-stats" key={index}>
                {/* The way it should be after the users nation is written in DB */}
                <img
                    src={`https://flagsapi.com/${
                        player.nationality
                            ? player.nationality
                            : getRandomCountry()
                    }/shiny/64.png`}
                    className="flag-icon"
                />
                {/* <img src={`https://flagsapi.com/IL/shiny/64.png`} className='flag-icon'/> */}
                <h1>
                    <div className="left-content">
                        <span className={getPlayerColor(index)}>
                            {index + 1}
                        </span>
                        <span>{`${player.name}`}</span>
                    </div>
                    <p>{`${player.score} pts`}</p>
                </h1>
            </div>
        ))
    }

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
                <h1 className="leaderboards-header">Leaderboards</h1>
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
