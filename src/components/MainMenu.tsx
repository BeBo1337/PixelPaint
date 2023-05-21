import { useState, FC, ChangeEvent } from 'react'
import { Button } from 'rsuite'
import { Modes } from '../utils/GameConstants'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import styles from './styles.module.scss'
import DropdownMenu from './GameModeMenu'

interface MainMenuProps {
    chooseGameMode: Function
}

const MainMenu: FC<MainMenuProps> = ({ chooseGameMode }: MainMenuProps) => {
    const [mode, setMode] = useState(1)
    const navigate = useNavigate()

    const handleChange = (selectedOption: string) => {
        console.log(selectedOption)
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
        chooseGameMode(mode)
        console.log(mode)
        setTimeout(() => {
            navigate('/game')
        }, 1000)
    }

    return (
        <>
            <section className={`${styles.mainMenuContainer}`}>
                <h1>
                    Welcome to <span>Pixel</span>Paint
                </h1>
                <form>
                    <input
                        name="players-name"
                        type="text"
                        placeholder="Enter painter's name"
                    ></input>
                </form>
                <button onClick={handleClick}>Start Game</button>
                <DropdownMenu onSelectOption={handleChange} />
            </section>
        </>
    )
}

export default MainMenu
