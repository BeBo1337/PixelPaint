import { useState, useEffect, FC, useRef } from 'react'
import { Tile } from '../models'
import styles from './styles.module.scss'
import { clone, cloneDeep } from 'lodash'
import { Modes } from '../utils/GameConstants'
import { Colors } from '../utils/ColorsConstants'
import ColorPicker from './ColorPicker'


interface GridLayoutProps {
    rows: number
    columns: number
    picture?: boolean
    showPicture?: boolean
    score?: number
    clickableCanvas?: boolean
    puzzle: Tile[]
    gameMode?: number
    onTileClicked?: Function
    onClearClicked?: Function
}

const GridLayout: FC<GridLayoutProps> = ({
    rows,
    columns,
    picture,
    showPicture,
    score,
    clickableCanvas,
    puzzle,
    onTileClicked,
    onClearClicked,
    gameMode
}: GridLayoutProps) => {
    var prevColor = ''
    const [canvas, setCanvas] = useState(cloneDeep(puzzle))
    const [tempColor, setTempColor] = useState(Colors.TILE_COLOR_A)
    const [color, setColor] = useState(Colors.TILE_COLOR_A)
    const [tileSize, setTileSize] = useState(getTileSize())
    const [picTileSize, setPicTileSize] = useState(getPicTileSize())

    useEffect(() => {
        const newCanvas = cloneDeep(puzzle)
        if (!picture) {
            for (const tile of newCanvas) {
                tile.highlighted = false
            }
        }
        setCanvas(newCanvas)
    }, [puzzle])

    useEffect(() => {
        function handleResize() {
            setTileSize(getTileSize())
            setPicTileSize(getPicTileSize())
        }

        const handleColorChange = ({ detail: color }: any) => {
            changeColor(color)
        }

        window.addEventListener('resize', handleResize)
        window.addEventListener('color-change' as any, handleColorChange)

        return () => {
            window.removeEventListener('resize', handleResize)
            window.removeEventListener('color-change' as any, handleColorChange)
        }
    }, [])

    function getTileSize() {
        const screenWidth = window.innerWidth
        if (screenWidth <= 1600) {
            return '3em'
        } else {
            return '4em'
        }
    }

    function getPicTileSize() {
        const screenWidth = window.innerWidth
        if (screenWidth <= 768) {
            return '25px'
        } else if (screenWidth <= 1600) {
            return '20px'
        } else {
            return '25px'
        }
    }

    const handleMouseUp = (index: number) => {
        if (clickableCanvas) {
            if (gameMode === Modes.PAINT) {
                if (!canvas[index].highlighted) {
                    canvas[index].highlighted = true
                    canvas[index].color = ''
                } else if (
                    canvas[index].highlighted &&
                    canvas[index].color === color
                ) {
                    canvas[index].highlighted = false
                    canvas[index].color = ''
                } else {
                    if (canvas[index].color !== color)
                        canvas[index].highlighted = true
                }
                prevColor = canvas[index].color || ''
                canvas[index].color = color
            } else canvas[index].highlighted = !canvas[index].highlighted
            if (onTileClicked) {
                onTileClicked(
                    index,
                    canvas[index].highlighted,
                    color,
                    prevColor
                )
            }
            setCanvas(cloneDeep(canvas))
        }
    }

    const changeColor = (color: string) => {
        if (clickableCanvas) {
            setTempColor(color)
        }
    }

    useEffect(() => {
        if (
            score !== undefined &&
            score < 3 &&
            (tempColor === Colors.TILE_COLOR_D ||
                tempColor === Colors.TILE_COLOR_E ||
                tempColor === Colors.TILE_COLOR_F)
        )
            return
        if (
            score !== undefined &&
            score < 10 &&
            (tempColor === Colors.TILE_COLOR_E ||
                tempColor === Colors.TILE_COLOR_F)
        )
            return
        if (
            score !== undefined &&
            score < 20 &&
            tempColor === Colors.TILE_COLOR_F
        )
            return
        setColor(tempColor)
    }, [tempColor])

    const handleMouseDown = (
        event: React.MouseEvent<HTMLDivElement, MouseEvent>
    ) => {
        event.preventDefault()
    }

    const clearHighlightedTiles = () => {
        const newCanvas = cloneDeep(canvas)
        for (const tile of newCanvas) {
            tile.highlighted = false
        }
        setCanvas(newCanvas)
        if (onClearClicked) {
            onClearClicked()
        }
    }

    return (
        <div
            className={
                picture ? `${styles.pictureContainer} ` : 'container-fluid'
            }
        >
            {picture && gameMode === Modes.PAINT && (
                <ColorPicker score={score} />
            )}
            <div className={`${styles.rowsContainer}`}>
                {Array.from({ length: rows }, (_, i) => {
                    return (
                        <div
                            className={`row justify-content-center ${styles.tileRow}`}
                            key={i}
                        >
                            {Array.from({ length: columns }, (_, j) => {
                                const index = i * columns + j
                                const currTile = canvas[index]
                                const isHighlighted = currTile?.highlighted
                                return (
                                    <div
                                        className={`${
                                            picture ? '' : styles.tile
                                        }`}
                                        key={`${i}-${j}`}
                                        style={{
                                            backgroundColor: isHighlighted
                                                ? currTile.color
                                                    ? currTile.color
                                                    : Colors.TILE_COLOR_HIGHLIGHTED
                                                : Colors.TILE_COLOR_DEFAULT,
                                            margin: picture
                                                ? '-2.5px 2.5px'
                                                : '0px 5px',
                                            width: picture
                                                ? picTileSize
                                                : tileSize,
                                            height: picture
                                                ? picTileSize
                                                : tileSize,
                                            visibility: showPicture
                                                ? 'visible'
                                                : 'hidden'
                                        }}
                                        onMouseDown={handleMouseDown}
                                        onMouseUp={() => handleMouseUp(index)}
                                    ></div>
                                )
                            })}
                        </div>
                    )
                })}
            </div>
            {!picture && (
                <div className={`${styles.gameBtns}`}>
                    <button onClick={clearHighlightedTiles}>
                        <h1>CLEAR</h1>
                    </button>
                </div>
            )}
        </div>
    )
}

export default GridLayout
