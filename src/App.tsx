import { useState, useEffect, FC } from 'react'
import { Routes, Route, useOutletContext } from 'react-router-dom'
import NotFound from './components/NotFound'
import GameManager from './components/GameManager'
import MainMenu from './components/MainMenu'

const App: FC<{}> = () => {
    const [gameMode, setGameMode] = useState(3)

    const setMode = (mode: number) => {
        setGameMode(mode)
    }

    return (
        <Routes>
            <Route path="/" element={<MainMenu chooseGameMode={setMode} />} />
            <Route path="/game" element={<GameManager gameMode={gameMode} />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}

export default App
