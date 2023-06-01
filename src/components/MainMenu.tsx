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
}

const MainMenu: FC<MainMenuProps> = ({ chooseGameMode }: MainMenuProps) => {
    const [mode, setMode] = useState(0)
    const [name, setName] = useState('')
    const [errorMessage, setErrorMessage] = useState('')
    const [showMsgModal, setShowMsgModal] = useState(false)

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
    }

    const handleClick = () => {
        if (!name && !mode) {
            setErrorMessage('Please enter your name and choose a game mode.')
        } else if (!name) {
            setErrorMessage('Please enter your name.')
        } else if (!mode) {
            setErrorMessage('Please choose a game mode.')
        } else {
            chooseGameMode(mode)
            setTimeout(() => {
                navigate('/game')
            }, 1000)
            return
        }

        setShowMsgModal(true)
    }

    const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value)
    }

    const handleCloseMsgModal = () => {
        setShowMsgModal(false)
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
                        name="players-name"
                        type="text"
                        placeholder="Enter your name..."
                        value={name}
                        onChange={handleNameChange}
                    ></input>
                </form>
                <button onClick={handleClick}>Start Game</button>
                <DropdownMenu onSelectOption={handleChange} />
            </section>
            {showMsgModal && (
                <MsgModal msg={errorMessage} onClose={handleCloseMsgModal}>
                    <p>{errorMessage}</p>
                </MsgModal>
            )}
        </>
    )
}

export default MainMenu
