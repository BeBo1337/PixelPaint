import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

import { useState, useEffect, FC } from 'react'
import GameManager from './components/GameManager'

const App: FC<{}> = () => {
    const [rows, setRows] = useState(7)
    const [colums, setColums] = useState(7)
    const [maxColored, setMaxColored] = useState(5)
    return (
        <div className="App">
            <GameManager rows={rows} columns={colums} maxColored={maxColored} />
        </div>
    )
}

export default App
