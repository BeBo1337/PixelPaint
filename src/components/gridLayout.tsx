import { useState, useEffect, FC } from 'react'
import { Tile } from '../models'
import styles from './styles.module.scss'
import { clone, cloneDeep } from 'lodash'
import { Modes } from '../utils/GameConstants'
import { Colors } from '../utils/ColorsConstants'
import ColorPicker from './ColorPicker'
import { Button } from '@mui/material'

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
    const [color, setColor] = useState('blue')

    useEffect(() => {
        const newCanvas = cloneDeep(puzzle)
        if (!picture) {
            for (const tile of newCanvas) {
                tile.highlighted = false
            }
        }
        setCanvas(newCanvas)
    }, [puzzle])

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

    const changeColor = (color: string) => {
        setColor(color)
    }

    return (
        <div
            className={`container-fluid ${styles.gridContainer}`}
            style={{ paddingTop: '10px' }}
        >
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
                                    className={`${picture ? '' : styles.tile}`}
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
                                        width: picture ? '1.5em' : '4.7em',
                                        height: picture ? '1.5em' : '4.7em',
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
            <div>
                {!picture && (
                    <div className={`${styles.gameBtns}`}>
                        <button
                            className="clear-btn"
                            onClick={clearHighlightedTiles}
                        >
                            <h1>CLEAR</h1>
                        </button>
                    </div>
                )}
            </div>
            <div>
                {!picture && gameMode === Modes.PAINT && (
                    <ColorPicker changeColor={changeColor} />
                )}
            </div>
        </div>
    )
}

export default GridLayout
