import './components/styles.module.scss'
import { useState, useEffect, FC } from 'react'
import { Routes, Route, useOutletContext } from 'react-router-dom'
import NotFound from './components/NotFound'
import GameManager from './components/GameManager'
import MainMenu from './components/MainMenu'
import GameOverPage from './components/GameOverPage'
import { useNavigate } from 'react-router-dom'

const App: FC<{}> = () => {
    const [gameMode, setGameMode] = useState(3)
    const [score, setScore] = useState(0)
    /* just single player currently */
    const [playerNamesArr, setplayerNamesArr] = useState<string[]>([])
    const [flag, setFlag] = useState(false)
    const setMode = (mode: number) => setGameMode(mode)
    const navigate = useNavigate()
    const handleGameOver = (score: number) => setFlag(true)

    useEffect(() => {
        if (flag) navigate('/gameover')
    }, [flag])

    const setPlayers = (playerName: string) => {
        setplayerNamesArr((playerNamesArr) => [...playerNamesArr, playerName])
    }

    const resetScore = () => {
        setScore(0)

        setFlag(false)
    }

    return (
        <Routes>
            <Route path="/" element={<MainMenu chooseGameMode={setMode} setPlayersName={setPlayers}/>} />
            <Route
                path="/game"
                element={
                    <GameManager
                        score={score}
                        setScore={setScore}
                        gameMode={gameMode}
                        handleGameOver={handleGameOver}
                    />
                }
            />
            <Route path="*" element={<NotFound />} />
            <Route
                path="/gameover"
                element={
                    <GameOverPage
                        score={score}
                        resetScore={resetScore}
                        playerNamesArr={playerNamesArr}
                    />
                }
            />
        </Routes>
    )
}

export default App
