import { useState, useEffect, FC, ChangeEvent, useRef } from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import styles from './styles.module.scss'
import MsgModal from './MsgModal'
import svgLogo from '../../public/PixelPaintLogo.png'
import EventsManager from '../services/EventsManager'
import { SocketEvents } from '../services/SocketEvents.model'
import { JoinRoomPayload } from '../payloads/JoinRoomPayload'
import { Errors } from '../utils/CommonErrors'
import SocketManager from '../services/SocketManager'
import { toast } from 'react-toastify'

interface PreGameScreenProps {
    host: string | null
    setPlayerID: Function
}

function PreGameScreen({ host, setPlayerID }: PreGameScreenProps) {
    const [modalMsg, setModalMsg] = useState<string>('')
    const [showModal, setShowModal] = useState(false)
    const [canStart, setCanStart] = useState(false)
    const navigate = useNavigate()
    const stateRef = useRef<any>()
    stateRef.current = canStart

    if (!SocketManager.instance.roomId) {
        navigate('/')
        // FUCK ME
        // NAVIGATE OUT OF HERE TO MAIN SCREEN
        // SHOW ERROR TOAST
        // CLEAN STATE
    }

    const handleCloseModal = () => {
        setShowModal(false)
        setModalMsg('')
    }

    const onRoomJoined = (p: JoinRoomPayload) => {
        if (p.host !== host || host === null) {
            setModalMsg('Something Went Wrong...Open a new lobby')
            setShowModal(true)
        } else {
            setCanStart(true)
        }
    }

    const onGameStarted = () => {
        if (stateRef.current) {
            navigate('/game')
        }
    }

    useEffect(() => {
        if (!SocketManager.instance.roomId) {
            toast.error('Please create/join a room to enter a game', {
                position: toast.POSITION.BOTTOM_CENTER,
                autoClose: 1500
            })
            navigate('/')
        }

        EventsManager.instance.on(
            SocketEvents.ROOM_JOINED,
            'PregameScreen',
            onRoomJoined
        )

        EventsManager.instance.on(
            SocketEvents.GAME_STARTED,
            'PregameScreen',
            onGameStarted
        )
    }, [])

    // onBeforeDestroy
    useEffect(
        () => () => {
            EventsManager.instance.off(
                SocketEvents.ROOM_JOINED,
                'PregameScreen'
            )

            EventsManager.instance.off(
                SocketEvents.GAME_STARTED,
                'PregameScreen'
            )
        },
        []
    )

    const handleClick = () => {
        EventsManager.instance.trigger(SocketEvents.START_GAME, {
            roomId: SocketManager.instance.roomId,
            playerId: host
        })
    }

    const handleLinkClick = () => {
        navigator.clipboard.writeText(
            'http://localhost:5173' +
                '/join?roomId=' +
                SocketManager.instance.roomId
        )

        toast.success('Successfully copied game link to clipboard', {
            position: toast.POSITION.BOTTOM_CENTER,
            toastId: 'copyToast',
            autoClose: 1500
        })
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
                {!canStart ? (
                    <div className={styles.waitingContainer}>
                        <div className={styles.loadingAnimation}></div>
                        <h2>Waiting for player...</h2>
                    </div>
                ) : (
                    <div className={styles.waitingContainer}>
                        <p>Player Joined!</p>
                    </div>
                )}
                <button
                    onClick={handleClick}
                    disabled={!canStart}
                    className={canStart ? '' : styles.buttonDisabled}
                >
                    Start Game
                </button>
                <button onClick={handleLinkClick}>Invite Link</button>
            </section>
        </>
    )
}

export default PreGameScreen
