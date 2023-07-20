import './components/styles.module.scss'
import { useState, useEffect, FC } from 'react'
import { Routes, Route, useOutletContext } from 'react-router-dom'
import NotFound from './components/NotFound'
import GameManager from './components/GameManager'
import MainMenu from './components/MainMenu'
import GameOverPage from './components/GameOverPage'
import { useNavigate } from 'react-router-dom'
import SocketManager from './services/SocketManager'
import EventsManager from './services/EventsManager'
import { SocketEvents } from './services/SocketEvents.model'
import JoinGameScreen from './components/JoinGameScreen'

const App: FC<{}> = () => {
    const [gameMode, setGameMode] = useState(3)
    const [score, setScore] = useState(0)
    /* just single player currently */
    const [playerNamesArr, setplayerNamesArr] = useState<string[]>([])
    const [flag, setFlag] = useState(false)
    const [playerID, setPlayerID] = useState('N/A')
    const setMode = (mode: number) => setGameMode(mode)
    const navigate = useNavigate()
    const handleGameOver = (score: number) => setFlag(true)

    const eventManager = EventsManager.instance
    eventManager.on(SocketEvents.PONG, 'app', () => {
        console.log('WE PONGED')
    })

    eventManager.on(SocketEvents.CONNECTED, 'app', () => {
        console.log('connected')
        eventManager.trigger(SocketEvents.PING, 'ping')
    })

    useEffect(() => {
        if (flag) navigate('/gameover')
    }, [flag])

    useEffect(() => {
        SocketManager.newInstance()
    }, [])

    const setPlayers = (playerName: string) => {
        setplayerNamesArr((playerNamesArr) => [...playerNamesArr, playerName])
    }

    const resetGame = () => {
        setScore(0)
        setplayerNamesArr([])
        setFlag(false)
    }

    return (
        <Routes>
            <Route
                path="/join/*"
                element={<JoinGameScreen setPlayersNames={setPlayers} />}
            />
            <Route
                path="/"
                element={
                    <MainMenu
                        chooseGameMode={setMode}
                        setPlayersName={setPlayers}
                        setPlayerID={setPlayerID}
                    />
                }
            />
            <Route
                path="/game"
                element={
                    <GameManager
                        score={score}
                        setScore={setScore}
                        gameMode={gameMode}
                        handleGameOver={handleGameOver}
                        player={playerID}
                    />
                }
            />
            <Route path="*" element={<NotFound />} />
            <Route
                path="/gameover"
                element={
                    <GameOverPage
                        score={score}
                        resetGame={resetGame}
                        gameMode={gameMode}
                        playerNamesArr={playerNamesArr}
                    />
                }
            />
        </Routes>
    )
}

export default App
