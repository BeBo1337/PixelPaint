import { useState, useEffect, FC, ChangeEvent } from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import styles from './styles.module.scss'
import MsgModal from './MsgModal'
import svgLogo from '../../public/PixelPaintLogo.png'
import EventsManager from '../services/EventsManager'
import { SocketEvents } from '../services/SocketEvents.model'
import { JoinRoomPayload } from '../payloads/JoinRoomPayload.model'
import { Errors } from '../utils/CommonErrors'

interface JoinGameScreenProps {
    setPlayersNames: Function
}
function JoinGameScreen({ setPlayersNames }: JoinGameScreenProps) {
    const [modalMsg, setModalMsg] = useState<string>('')
    const [showModal, setShowModal] = useState(false)

    const [roomToJoin, setRoomToJoin] = useState<string>()
    const navigate = useNavigate()
    const [name, setName] = useState('')
    const [isNameError, setIsNameError] = useState(false)

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
        //navigate to room game
    }

    useEffect(() => {
        //setRoomToJoin(link/url/roomid/combination of all???)
    }, [])
    // onMount
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
                <form>
                    <input
                        className={isNameError ? styles.inputError : ''}
                        name="players-name"
                        type="text"
                        placeholder="Enter your name..."
                        value={name}
                        maxLength={8}
                        minLength={3}
                        onChange={handleNameChange}
                    ></input>
                </form>
                <button onClick={handleClick}>Join Game</button>
            </section>
        </>
    )
}

export default JoinGameScreen
