import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

import { useState, useEffect, FC } from 'react'
import GameManager from './components/GameManager'

const App: FC<{}> = () => {
    return (
        <div className="App">
            <GameManager />
        </div>
    )
}

export default App
