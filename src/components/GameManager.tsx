import { useEffect, useState, FC } from 'react'
import GridLayout from './GridLayout'
import { generateRandomTiles } from '../utils/GameFuncs'
import { max } from 'lodash'
import { Tile } from '../models'

interface GameManagerProps {
    rows: number
    columns: number
    maxColored: number
}

const GameManager: FC<GameManagerProps> = ({
    rows,
    columns,
    maxColored
}: GameManagerProps) => {
    const [coloredObjectiveTiles, setColoredObjectiveTiles] =
        useState<number>(0)
    const [currentColored, setCurrentColored] = useState<number>(0)
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
                setCurrentColored(currentColored + 1)
            } else setCurrentColored(currentColored - 1)
        }
    }

    useEffect(() => {
        if (coloredObjectiveTiles === maxColored && currentColored == 0) {
            alert('Game over')
            setPuzzle(generateRandomTiles(rows, columns, maxColored))
            setColoredObjectiveTiles(0)
            setCurrentColored(0)
        }
    }, [coloredObjectiveTiles, currentColored])

    return (
        <div className="App">
            <GridLayout
                rows={rows}
                columns={columns}
                color={true}
                puzzle={puzzle}
            />
            <GridLayout
                rows={rows}
                columns={columns}
                puzzle={puzzle}
                onTileClicked={onTileClicked}
            />
        </div>
    )
}

export default GameManager
