import { useEffect, useState, FC } from 'react'
import { useNavigate } from 'react-router-dom'
import TopBar from './TopBar'
import GridLayout from './gridLayout'
import { generateTiles, isCorrectTile } from '../utils/GameFuncs'
import { max } from 'lodash'
import { Tile, MapData, Preset } from '../models'
import { Constants, Modes } from '../utils/GameConstants'
import { PuzzlePayload } from '../payloads/PuzzlePayload'
import styles from './styles.module.scss'
import EventsManager from '../services/EventsManager'
import { SocketEvents } from '../services/SocketEvents.model'
import { TileSelectedPayload } from '../payloads/TileSelectedPayload'
import SocketManager from '../services/SocketManager'
import { toast } from 'react-toastify'

interface GameManagerProps {
    gameMode: number
    score: number
    setScore: Function
    goBack: Function
}

const GameManager: FC<GameManagerProps> = ({
    gameMode,
    score,
    setScore,
    goBack
}: GameManagerProps) => {
    const navigate = useNavigate()
    const [gameOver, setGameOver] = useState<boolean>(false)
    const [rows, setRows] = useState(Constants.START_DIMENSIONS)
    const [columns, setColums] = useState(Constants.START_DIMENSIONS)
    const [tilesToGen, setTilesToGeN] = useState(Constants.START_RANDOM_TILES)
    const [puzzlePayload, setPayload] = useState<PuzzlePayload | null>(
        () => null
    )
    const [coloredObjectiveTiles, setColoredObjectiveTiles] =
        useState<number>(0)
    const [coloredRegularTiles, setCurrentColored] = useState<number>(0)
    const [clickable, setClickable] = useState<boolean>(true)
    const [puzzle, setPuzzle] = useState<Tile[]>(puzzlePayload?.tiles ?? [])
    const [amount, setAmount] = useState<number>(puzzlePayload?.amount ?? 0)
    const [difficulty, setDifficulty] = useState<number>(
        puzzlePayload?.difficulty ?? 0
    )
    const [showPic, setShowPic] = useState<boolean>(true)

    const onTileClicked = (
        tileIndex: number,
        highlighted: boolean,
        color: string,
        prevColor: string
    ) => {
        EventsManager.instance.trigger(SocketEvents.SELECT_TILE, {
            tileIndex,
            highlighted,
            color,
            prevColor
        } as TileSelectedPayload)
    }

    useEffect(() => {
        const onTileSelected = (tileSelected: TileSelectedPayload) => {
            const { tileIndex, highlighted, color } = tileSelected
            const objectiveTile: boolean = puzzle[tileIndex].highlighted
            if (gameMode === Modes.PAINT) onTileClickedPaint(tileSelected)
            else {
                if (objectiveTile) {
                    if (highlighted) {
                        setColoredObjectiveTiles(
                            (ColoredObjectiveTiles) => ColoredObjectiveTiles + 1
                        )
                    } else {
                        setColoredObjectiveTiles(
                            (ColoredObjectiveTiles) => ColoredObjectiveTiles - 1
                        )
                    }
                } else {
                    if (highlighted) {
                        setCurrentColored(
                            (ColoredRegularTiles) => ColoredRegularTiles + 1
                        )
                    } else
                        setCurrentColored(
                            (ColoredRegularTiles) => ColoredRegularTiles - 1
                        )
                }
            }
        }

        const onTileClickedPaint = (tileSelected: TileSelectedPayload) => {
            const { tileIndex, highlighted, color, prevColor } = tileSelected
            const objectiveTile: boolean = puzzle[tileIndex].highlighted
            if (objectiveTile) {
                setColoredObjectiveTiles(
                    (coloredObjectiveTiles) =>
                        coloredObjectiveTiles +
                        isCorrectTile(
                            puzzle[tileIndex],
                            highlighted,
                            color,
                            prevColor
                        )
                )
            } else {
                if (highlighted) {
                    if (prevColor === '')
                        setCurrentColored(
                            (ColoredRegularTiles) => ColoredRegularTiles + 1
                        )
                } else
                    setCurrentColored(
                        (ColoredRegularTiles) => ColoredRegularTiles - 1
                    )
            }
        }
        // Attach the event listener
        EventsManager.instance.on(
            SocketEvents.TILE_SELECTED,
            'GameManager',
            onTileSelected
        )

        // Cleanup the event listener
        return () => {
            EventsManager.instance.off(
                SocketEvents.TILE_SELECTED,
                'GameManager'
            )
        }
    }, [puzzle])

    const onClearClicked = () => {
        setColoredObjectiveTiles(0)
        setCurrentColored(0)
        setShowPic(true)
    }

    useEffect(() => {
        if (gameMode === Modes.MEMORY) {
            if (coloredObjectiveTiles + coloredRegularTiles === 3)
                setShowPic(false)
        }
        if (
            coloredObjectiveTiles !== 0 &&
            coloredObjectiveTiles === amount &&
            coloredRegularTiles === 0
        ) {
            setScore(score + 1)
            if (score === Constants.CHECKPOINT_8X8) {
                setRows((rows) => rows + 1)
                setColums((columns) => columns + 1)
            }
        }
    }, [coloredObjectiveTiles, coloredRegularTiles])

    useEffect(() => {
        if (SocketManager.instance.isHost && score !== 0) {
            const mapData: MapData = {
                rows,
                columns,
                tilesToGen,
                score,
                gameMode,
                difficulty
            }
            EventsManager.instance.trigger(
                SocketEvents.GENERATE_PRESET,
                mapData
            )
        }
    }, [score])

    const onPresetGenerated = (puzzlePayload: PuzzlePayload) => {
        setPayload(puzzlePayload)
    }

    useEffect(() => {
        setAmount(puzzlePayload?.amount ?? 0)
        setDifficulty(puzzlePayload?.difficulty ?? 0)
        setPuzzle(puzzlePayload?.tiles ?? [])
        setColoredObjectiveTiles(0)
        setCurrentColored(0)
        setShowPic(true)
    }, [puzzlePayload])

    const handleTimeOver = () => {
        setGameOver(true)
        setClickable(!clickable)
        setTimeout(() => {
            navigate('/gameover')
        }, 1000)
    }

    // onMount
    useEffect(() => {
        if (!SocketManager.instance.roomId) {
            toast.error('Please create/join a room to enter a game', {
                position: toast.POSITION.BOTTOM_CENTER,
                autoClose: 1500
            })
            navigate('/')
        } else {
            EventsManager.instance.on(
                SocketEvents.PRESET_GENERATED,
                'GameManager',
                onPresetGenerated
            )

            if (SocketManager.instance.isHost) {
                const mapData: MapData = {
                    rows,
                    columns,
                    tilesToGen,
                    score,
                    gameMode,
                    difficulty
                }
                EventsManager.instance.trigger(
                    SocketEvents.GENERATE_PRESET,
                    mapData
                )
            }
        }
    }, [])

    // onBeforeDestroy
    useEffect(
        () => () => {
            EventsManager.instance.off(
                SocketEvents.PRESET_GENERATED,
                'GameManager'
            )
        },
        []
    )

    const handleBackClick = (playerId: string) => {
        goBack(playerId)
    }

    return (
        <div className="App">
            <div>
                <TopBar
                    timeOverFunction={handleTimeOver}
                    score={score}
                    gameMode={gameMode}
                    handleBack={handleBackClick}
                />
                <div className={`${styles.gameContainer}`}>
                    <GridLayout
                        rows={rows}
                        columns={columns}
                        picture={true}
                        showPicture={showPic}
                        puzzle={puzzle}
                        gameMode={gameMode}
                        score={score}
                    />
                    <GridLayout
                        rows={rows}
                        columns={columns}
                        showPicture={true}
                        picture={false}
                        score={score}
                        clickableCanvas={clickable}
                        puzzle={puzzle}
                        gameMode={gameMode}
                        onTileClicked={onTileClicked}
                        onClearClicked={onClearClicked}
                    />
                </div>
            </div>
        </div>
    )
}

export default GameManager
