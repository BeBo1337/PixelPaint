import { useState, useEffect, FC } from 'react'
import { Tile } from '../models'
import styles from './styles.module.scss'
import { clone, cloneDeep } from 'lodash'

interface GridLayoutProps {
    rows: number
    columns: number
    picture?: boolean
    showPicture?: boolean
    score?: number
    clickableCanvas?: boolean
    puzzle: Tile[]
    onTileClicked?: Function
}

const GridLayout: FC<GridLayoutProps> = ({
    rows,
    columns,
    picture,
    showPicture,
    score,
    clickableCanvas,
    puzzle,
    onTileClicked
}: GridLayoutProps) => {
    const [canvas, setCanvas] = useState(cloneDeep(puzzle))

    useEffect(() => {
        const newCanvas = cloneDeep(puzzle)
        if (!picture) {
            for (const tile of newCanvas) {
                tile.highlighted = false
            }
        }
        setCanvas(newCanvas)
    }, [puzzle])

    const onClick = (index: number) => {
        if (clickableCanvas) {
            canvas[index].highlighted = !canvas[index].highlighted
            if (onTileClicked) {
                onTileClicked(index, canvas[index].highlighted)
            }
            setCanvas(cloneDeep(canvas))
        }
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
                            const isHighlighted = canvas[index]?.highlighted
                            return (
                                <div
                                    className={`${styles.tile}`}
                                    key={`${i}-${j}`}
                                    style={{
                                        backgroundColor: isHighlighted
                                            ? 'red'
                                            : 'black',
                                        margin: picture
                                            ? '-2.5px 2.5px'
                                            : '0px 5px',
                                        width: picture ? '40px' : '100px', //was width: random ? "2vw" : "4vw"
                                        height: picture ? '40px' : '100px', //was height: random ? "2vw" : "4vw"
                                        visibility: showPicture
                                            ? 'visible'
                                            : 'hidden'
                                    }}
                                    onClick={() => onClick(index)}
                                ></div>
                            )
                        })}
                    </div>
                )
            })}
        </div>
    )
}

export default GridLayout
