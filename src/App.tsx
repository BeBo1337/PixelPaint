import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

import { useState, useEffect, FC } from 'react'
import { Routes, Route, useOutletContext } from 'react-router-dom'
import GameManager from './components/GameManager'
import MainMenu from './components/MainMenu'

const App: FC<{}> = () => {
    const [gameMode, setGameMode] = useState(1)

    const setMode = (mode: number) => {
        setGameMode(mode)
    }

    return (
        <Routes>
            <Route path="/" element={<MainMenu chooseGameMode={setMode} />} />
            <Route path="/game" element={<GameManager gameMode={gameMode} />} />
        </Routes>
    )
}

export default App
