import { useState, useEffect, FC, ChangeEvent } from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import styles from './styles.module.scss'
import MsgModal from './MsgModal'
import svgLogo from '../../public/PixelPaintLogo.png'
import EventsManager from '../services/EventsManager'
import { SocketEvents } from '../services/SocketEvents.model'
import { JoinRoomPayload } from '../payloads/JoinRoomPayload.model'
import { Errors } from '../utils/CommonErrors'

interface PreGameScreenProps {
    host: string
    setPlayersNames: Function
}
function PreGameScreen({ host, setPlayersNames }: PreGameScreenProps) {
    const [modalMsg, setModalMsg] = useState<string>('')
    const [showModal, setShowModal] = useState(false)
    const [canStart, setCanStart] = useState(false)
    const navigate = useNavigate()

    const handleCloseModal = () => {
        setShowModal(false)
        setModalMsg('')
    }

    const onRoomJoined = (p: JoinRoomPayload) => {
        if (p.host !== host) {
            setModalMsg('Something Went Wrong...Open a new lobby')
            setShowModal(true)
        } else {
            setPlayersNames(p.players[p.players.length - 1])
            setCanStart(true)
            //navigate to room game
        }
    }

    useEffect(() => {
        EventsManager.instance.on(
            SocketEvents.ROOM_JOINED,
            'MainMenu',
            onRoomJoined
        )
    }, [])

    // onBeforeDestroy
    useEffect(
        () => () => {
            EventsManager.instance.on(
                SocketEvents.ROOM_JOINED,
                'MainMenu',
                onRoomJoined
            )
        },
        []
    )

    const handleClick = () => {
        //start game
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
            </section>
        </>
    )
}

export default PreGameScreen
