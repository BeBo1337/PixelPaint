import { useState, FC, ChangeEvent } from 'react'
import { Button } from 'rsuite'
import { Modes } from '../utils/GameConstants'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import styles from './styles.module.scss'
import DropdownMenu from './GameModeMenu'
import MsgModal from './MsgModal'
import svgLogo from '../../public/PixelPaintLogo.png'

interface MainMenuProps {
    chooseGameMode: Function
    setPlayersName: Function
}

const MainMenu: FC<MainMenuProps> = ({
    chooseGameMode,
    setPlayersName
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
        }
        setIsModeError(false)
        setTimeout(() => {
            setIsModeError(false)
        }, 2000)
    }

    const handleClick = () => {
        if (!name && !mode) {
            setIsNameError(true)
            setIsModeError(true)
        } else if (!name) {
            setIsNameError(true)
            setIsModeError(false)
        } else if (!mode) {
            setIsNameError(false)
            setIsModeError(true)
        } else {
            chooseGameMode(mode)
            setPlayersName(name)
            setTimeout(() => {
                navigate('/game')
            }, 1000)
            return
        }
        setTimeout(() => {
            setIsNameError(false)
            setIsModeError(false)
        }, 1000)
    }

    const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value)
        setIsNameError(false)
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
                <button onClick={handleClick}>Start Game</button>
                <DropdownMenu
                    onSelectOption={handleChange}
                    isModeSelected={isModeError}
                />
            </section>
        </>
    )
}

export default MainMenu
