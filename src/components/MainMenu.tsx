import { useState, useEffect, FC, ChangeEvent } from 'react'
import { Button } from 'rsuite'
import { Modes } from '../utils/GameConstants'
import { Link, Outlet, useNavigate } from 'react-router-dom'

interface MainMenuProps {
    chooseGameMode: Function
}

const MainMenu: FC<MainMenuProps> = ({ chooseGameMode }: MainMenuProps) => {
    const [mode, setMode] = useState(1)
    const navigate = useNavigate()

    const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
        console.log(e.target.value)
        switch (e.target.value) {
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
        setTimeout(() => {
            navigate('/game')
        }, 1000)
    }

    return (
        <>
            <select id="mode" onChange={handleChange}>
                <option value="Classic">Classic</option>

                <option value="Memory">Memory</option>

                <option value="Paint">Paint</option>
            </select>

            <Button color="yellow" appearance="ghost" onClick={handleClick}>
                START!
            </Button>
        </>
    )
}

export default MainMenu
