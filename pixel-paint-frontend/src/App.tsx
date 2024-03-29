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
import PreGameScreen from './components/PregameScreen'
import MsgModal from './components/MsgModal'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const App: FC<{}> = () => {
    const [gameMode, setGameMode] = useState(1)
    const [score, setScore] = useState(0)

    const [modalMsg, setModalMsg] = useState<string>('')
    const [showModal, setShowModal] = useState(false)
    const [playerName, setPlayerName] = useState<string | null>(null)
    const setMode = (mode: number) => setGameMode(mode)
    const navigate = useNavigate()

    useEffect(() => {
        const eventManager = EventsManager.instance

        eventManager.on(SocketEvents.PONG, 'app', () => {
            console.log('WE PONGED')
        })

        eventManager.on(SocketEvents.CONNECTED, 'app', () => {
            console.log('connected')
            eventManager.trigger(SocketEvents.PING, 'ping')
        })

        SocketManager.newInstance()
    }, [])

    useEffect(
        () => () => {
            const eventManager = EventsManager.instance
            eventManager.off(SocketEvents.PONG, 'app')
            eventManager.off(SocketEvents.CONNECTED, 'app')
        },
        []
    )

    const resetGame = () => {
        setScore(0)
        setPlayerName(null)
    }

    const goBack = (playerId: string) => {
        navigate('/')
        resetGame()
        if (playerName !== playerId) {
            setModalMsg('player disconnected')
            setShowModal(true)
        }
    }

    const handleCloseModal = () => {
        setShowModal(false)
        setModalMsg('')
    }

    return (
        <>
            {showModal && (
                <MsgModal onClose={handleCloseModal} msg={modalMsg} />
            )}
            <Routes>
                <Route
                    path="/create/*"
                    element={<PreGameScreen host={playerName} />}
                />
                <Route
                    path="/join/*"
                    element={
                        <JoinGameScreen
                            setGameMode={setGameMode}
                            setPlayerID={setPlayerName}
                        />
                    }
                />
                <Route
                    path="/"
                    element={
                        <MainMenu
                            setGameMode={setMode}
                            setPlayerID={setPlayerName}
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
                            goBack={goBack}
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
                        />
                    }
                />
            </Routes>
            <ToastContainer />
        </>
    )
}

export default App
