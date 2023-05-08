import { useEffect, useState, FC } from 'react'
import TopBar from './TopBar'
import GridLayout from './gridLayout'
import { generateTiles } from '../utils/GameFuncs'
import { max } from 'lodash'
import { Tile } from '../models'
import Constants from '../utils/GameConstants'
import { PuzzlePayload } from '../payloads/PuzzlePayload'

interface GameManagerProps {
    gameOver?: boolean
}

const GameManager: FC<GameManagerProps> = ({ gameOver }: GameManagerProps) => {
    const [rows, setRows] = useState(Constants.START_DIMENSIONS)
    const [columns, setColums] = useState(Constants.START_DIMENSIONS)
    const [tilesToGen, setTilesToGeN] = useState(Constants.START_RANDOM_TILES)
    const [score, setScore] = useState<number>(0)
    const [puzzlePayload, setPayload] = useState<PuzzlePayload>(() =>
        generateTiles(rows, columns, tilesToGen, score)
    )
    const [coloredObjectiveTiles, setColoredObjectiveTiles] =
        useState<number>(0)
    const [coloredRegularTiles, setCurrentColored] = useState<number>(0)
    const [clickable, setClickable] = useState<boolean>(true)
    const [puzzle, setPuzzle] = useState<Tile[]>(puzzlePayload.tiles)
    const [amount, setAmount] = useState<number>(puzzlePayload.amount)
    const [showPic, setShowPic] = useState<boolean>(true)

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
        //for other game mode, maybe this wont be here
        //if(coloredObjectiveTiles + coloredRegularTiles === 2)
        //setShowPic(false);
    }

    useEffect(() => {
        if (coloredObjectiveTiles === amount && coloredRegularTiles === 0) {
            setScore((score) => score + 1)
            if (
                score === Constants.CHECKPOINT_8X8 ||
                score === Constants.CHECKPOINT_9X9
            ) {
                setRows((rows) => rows + 1)
                setColums((columns) => columns + 1)
            }
        }
    }, [coloredObjectiveTiles, coloredRegularTiles])

    useEffect(() => {
        if (score !== 0)
            setPayload(generateTiles(rows, columns, tilesToGen, score))
    }, [score])

    useEffect(() => {
        setAmount(puzzlePayload.amount)
        setPuzzle(puzzlePayload.tiles)
        setColoredObjectiveTiles(0)
        setCurrentColored(0)
        setShowPic(true)
    }, [puzzlePayload])

    const handleTimeOver = () => {
        gameOver = true
        alert('gameover')
        setClickable(!clickable)
    }

    return (
        <div className="App">
            <TopBar timeOverFunction={handleTimeOver} score={score} />
            <GridLayout
                rows={rows}
                columns={columns}
                picture={true}
                showPicture={showPic}
                puzzle={puzzle}
            />
            <GridLayout
                rows={rows}
                columns={columns}
                showPicture={true}
                clickableCanvas={clickable}
                puzzle={puzzle}
                onTileClicked={onTileClicked}
            />
        </div>
    )
}

export default GameManager
