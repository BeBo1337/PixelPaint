import { useState, useEffect, FC, ChangeEvent, useRef } from 'react'
import { Link, Outlet, useNavigate, useSearchParams } from 'react-router-dom'
import styles from './styles.module.scss'
import MsgModal from './MsgModal'
import svgLogo from '../../public/PixelPaintLogo.png'
import EventsManager from '../services/EventsManager'
import { SocketEvents } from '../services/SocketEvents.model'
import { JoinRoomPayload } from '../payloads/JoinRoomPayload'
import { Errors } from '../utils/CommonErrors'
import { Modes } from '../utils/GameConstants'
import SocketManager from '../services/SocketManager'

interface JoinGameScreenProps {
    setGameMode: Function
    setPlayerID: Function
}
function JoinGameScreen({ setGameMode, setPlayerID }: JoinGameScreenProps) {
    const [modalMsg, setModalMsg] = useState<string>('')
    const [showModal, setShowModal] = useState(false)
    const [searchParams, setSearchParams] = useSearchParams()

    const [roomToJoin, setRoomToJoin] = useState<string>(
        searchParams.get('roomId') ?? ''
    )
    const navigate = useNavigate()
    const [name, setName] = useState('')
    const [isNameError, setIsNameError] = useState(false)
    const [roomJoined, setRoomJoined] = useState(false)

    const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value)
    }

    const handleClick = () => {
        if (!name) {
            setIsNameError(true)
        } else if (!checkName(name)) {
            setShowModal(true)
            setModalMsg(Errors.INVALID_NAME)
            setIsNameError(true)
        } else if (name.length < 3) {
            setModalMsg(Errors.SHORT_NAME)
            setShowModal(true)
            setIsNameError(true)
        } else if (name.length > 8) {
            setModalMsg(Errors.LONG_NAME)
            setShowModal(true)
            setIsNameError(true)
        } else if (!roomToJoin) {
            setModalMsg(Errors.INVALID_ROOM)
            setShowModal(true)
        } else if (!isNameError && roomToJoin) {
            EventsManager.instance.trigger(SocketEvents.JOIN_ROOM, {
                roomId: roomToJoin,
                playerId: name
            })
        }

        setTimeout(() => {
            setIsNameError(false)
        }, 1000)
    }

    const checkName = (name: string): boolean => {
        const englishAndNumbersRegex = /^[A-Za-z0-9]+$/

        return englishAndNumbersRegex.test(name)
    }

    const onRoomJoined = (p: JoinRoomPayload) => {
        if (p && p.playerJoined) {
            setGameMode(p.gameMode)
            setPlayerID(p.players[p.players.length - 1])
            setRoomJoined(true)
        } else if (
            p.players[p.players.length - 1] !== SocketManager.instance.playerId
        ) {
            EventsManager.instance.trigger(SocketEvents.LEAVE_ROOM, {})
            setModalMsg(Errors.BAD_FULL)
            setShowModal(true)
        }
    }

    const onDisbandGame = () => {
        setModalMsg(Errors.ROOM_DISBANDED)
        setShowModal(true)
        setTimeout(() => {
            navigate('/')
        }, 2000)
    }

    const onGameStarted = () => {
        navigate('/game')
    }

    const handleBeforeUnload = () => {
        EventsManager.instance.trigger(SocketEvents.LEAVE_ROOM, {})
    }
    // onMount
    useEffect(() => {
        EventsManager.instance.on(
            SocketEvents.ROOM_JOINED,
            'JoinGameScreen',
            onRoomJoined
        )

        EventsManager.instance.on(
            SocketEvents.GAME_STARTED,
            'JoinGameScreen',
            onGameStarted
        )

        EventsManager.instance.on(
            SocketEvents.DISBAND_GAME,
            'PregameScreen',
            onDisbandGame
        )

        window.addEventListener('beforeunload', handleBeforeUnload)

        const roomId = searchParams.get('roomId')
        if (roomId) {
            setRoomToJoin(roomId)
        }
    }, [])

    // onBeforeDestroy
    useEffect(
        () => () => {
            EventsManager.instance.off(
                SocketEvents.ROOM_JOINED,
                'JoinGameScreen'
            )

            EventsManager.instance.off(
                SocketEvents.GAME_STARTED,
                'JoinGameScreen'
            )

            EventsManager.instance.off(
                SocketEvents.DISBAND_GAME,
                'PregameScreen'
            )

            window.removeEventListener('beforeunload', handleBeforeUnload)
        },
        []
    )

    const handleCloseModal = () => {
        setShowModal(false)
        setModalMsg('')
    }

    return (
        <>
            {showModal && (
                <MsgModal onClose={handleCloseModal} msg={modalMsg} />
            )}
            <section className={`${styles.mainMenuContainer}`}>
                <div className={`${styles.logoContainer}`}>
                    <img src={svgLogo} alt="Logo" className={styles.logo} />
                </div>

                <h1>
                    Welcome to <span>Pixel</span>Paint
                </h1>
                {roomJoined ? (
                    <div className={styles.waitingContainer}>
                        <p>Joined! Waiting...</p>
                    </div>
                ) : (
                    ''
                )}
                <form>
                    <input
                        className={isNameError ? styles.inputError : ''}
                        name="players-name"
                        type="text"
                        placeholder="Enter your name..."
                        value={name}
                        maxLength={8}
                        minLength={3}
                        disabled={roomJoined}
                        onChange={handleNameChange}
                    ></input>
                </form>
                <button
                    className={roomJoined ? styles.buttonDisabled : ''}
                    onClick={handleClick}
                    disabled={roomJoined}
                >
                    Join Game
                </button>
            </section>
        </>
    )
}

export default JoinGameScreen
