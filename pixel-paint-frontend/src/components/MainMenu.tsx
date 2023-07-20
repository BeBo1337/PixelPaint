import { useState, useEffect, FC, ChangeEvent } from 'react'
import { Modes } from '../utils/GameConstants'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import styles from './styles.module.scss'
import DropdownMenu from './GameModeMenu'
import MsgModal from './MsgModal'
import svgLogo from '../../public/PixelPaintLogo.png'
import EventsManager from '../services/EventsManager'
import { SocketEvents } from '../services/SocketEvents.model'
import { CreateRoomPayload } from '../payloads/CreateRoomPayload.model'

interface MainMenuProps {
    chooseGameMode: Function
    setPlayersName: Function
    setPlayerID: Function
}

const MainMenu: FC<MainMenuProps> = ({
    chooseGameMode,
    setPlayersName,
    setPlayerID
}: MainMenuProps) => {
    const [mode, setMode] = useState(0)
    const [name, setName] = useState('')

    const [isNameError, setIsNameError] = useState(false)
    const [isModeError, setIsModeError] = useState(false)

    const navigate = useNavigate()

    const handleChange = (selectedOption: string) => {
        switch (selectedOption) {
            case 'Classic':
                setMode(Modes.CLASSIC)
                break
            case 'Memory':
                setMode(Modes.MEMORY)
                break
            case 'Paint':
                setMode(Modes.PAINT)
                break
            case 'CO-OP':
                setMode(Modes.CO_OP)
                break
        }
    }

    const handleClick = () => {
        if (!name && !mode) {
            setIsNameError(true)
            setIsModeError(true)
        } else if (name.length < 3) {
            setIsNameError(true)
            setIsModeError(false)
        } else if (!mode) {
            setIsNameError(false)
            setIsModeError(true)
        } else if (!isModeError && !isNameError) {
            EventsManager.instance.trigger(SocketEvents.CREATE_ROOM, {
                playerId: name,
                gameMode: mode
            })
        }

        setTimeout(() => {
            setIsNameError(false)
            setIsModeError(false)
        }, 1000)
    }

    const onRoomCreated = (p: CreateRoomPayload) => {
        console.log(p)
        chooseGameMode(p.gameMode)
        setPlayersName(p.host)
        setPlayerID(p.host)

        setTimeout(() => {
            navigate('/game')
        }, 1000)
    }

    // onMount
    useEffect(() => {
        EventsManager.instance.on(
            SocketEvents.ROOM_CREATED,
            'MainMenu',
            onRoomCreated
        )
    }, [])

    // onBeforeDestroy
    useEffect(
        () => () => {
            EventsManager.instance.on(
                SocketEvents.ROOM_CREATED,
                'MainMenu',
                onRoomCreated
            )
        },
        []
    )

    const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value)
    }

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
                        placeholder="Enter your name..."
                        value={name}
                        maxLength={8}
                        minLength={3}
                        onChange={handleNameChange}
                    ></input>
                </form>
                <button onClick={handleClick}>
                    {mode !== Modes.CO_OP ? 'Start Game' : 'Create Game'}
                </button>
                <DropdownMenu
                    onSelectOption={handleChange}
                    isModeSelected={isModeError}
                />
            </section>
        </>
    )
}

export default MainMenu
