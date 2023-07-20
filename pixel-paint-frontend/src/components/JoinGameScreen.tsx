import { useState, useEffect, FC, ChangeEvent } from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import styles from './styles.module.scss'
import MsgModal from './MsgModal'
import svgLogo from '../../public/PixelPaintLogo.png'
import EventsManager from '../services/EventsManager'
import { SocketEvents } from '../services/SocketEvents.model'
import { JoinRoomPayload } from '../payloads/JoinRoomPayload.model'

interface JoinGameScreenProps {
    setPlayersNames: Function
}
function JoinGameScreen({ setPlayersNames }: JoinGameScreenProps) {
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
        } else if (name.length < 3) {
            setIsNameError(true)
        } else if (!isNameError) {
            EventsManager.instance.trigger(SocketEvents.JOIN_ROOM, {
                roomId: roomToJoin,
                playerId: name
            })
        }

        setTimeout(() => {
            setIsNameError(false)
        }, 1000)
    }

    const onRoomJoined = (p: JoinRoomPayload) => {
        setPlayersNames(p.players[p.players.length - 1])
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

    return (
        <>
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
                        placeholder="Enter your name to join..."
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
