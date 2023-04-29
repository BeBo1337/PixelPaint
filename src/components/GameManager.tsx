import { useEffect, useState, FC } from 'react'
import GridLayout from './GridLayout'
import { generateRandomTiles } from '../utils/GameFuncs'
import TimerCountdown from './TimerCountdown'
import { max } from 'lodash'
import { Tile } from '../models'

interface GameManagerProps {
    rows: number
    columns: number
    maxColored: number
    gameOver?: boolean
}

const GameManager: FC<GameManagerProps> = ({
    rows,
    columns,
    maxColored,
    gameOver
}: GameManagerProps) => {
    const [coloredObjectiveTiles, setColoredObjectiveTiles] =
        useState<number>(0)
    const [coloredRegularTiles, setCurrentColored] = useState<number>(0)
    const [clickable, setClickable] = useState<boolean>(true)
    const [puzzle, setPuzzle] = useState<Tile[]>(
        generateRandomTiles(rows, columns, maxColored)
    )

    const onTileClicked = (tileIndex: number, highlighted: boolean) => {
        const objectiveTile: boolean = puzzle[tileIndex].highlighted
        if (objectiveTile) {
            if (highlighted) {
                setColoredObjectiveTiles(coloredObjectiveTiles + 1)
            } else {
                setColoredObjectiveTiles(coloredObjectiveTiles - 1)
            }
        } else {
            if (highlighted) {
                setCurrentColored(coloredRegularTiles + 1)
            } else setCurrentColored(coloredRegularTiles - 1)
        }
    }

    useEffect(() => {
        if (coloredObjectiveTiles === maxColored && coloredRegularTiles == 0) {
            setPuzzle(generateRandomTiles(rows, columns, maxColored))
            setColoredObjectiveTiles(0)
            setCurrentColored(0)
        }
    }, [coloredObjectiveTiles, coloredRegularTiles])

    const handleTimeOver = () => {
        gameOver = true
        alert('gameover')
        setClickable(!clickable)
    }

    return (
        <div className="App">
            <TimerCountdown
                time={20}
                isWarning={false}
                onTimeOver={handleTimeOver}
            />
            <GridLayout
                rows={rows}
                columns={columns}
                picture={true}
                puzzle={puzzle}
            />
            <GridLayout
                rows={rows}
                columns={columns}
                clickableCanvas={clickable}
                puzzle={puzzle}
                onTileClicked={onTileClicked}
            />
        </div>
    )
}

export default GameManager
