import { useState, useEffect, FC } from 'react'
import { Tile } from '../models'
import styles from './styles.module.scss'
import { clone, cloneDeep } from 'lodash'

interface GridLayoutProps {
    rows: number
    columns: number
    color?: boolean
    puzzle: Tile[]
    onTileClicked?: Function
}

const GridLayout: FC<GridLayoutProps> = ({
    color,
    puzzle,
    rows,
    columns,
    onTileClicked
}: GridLayoutProps) => {
    const [canvas, setCanvas] = useState(cloneDeep(puzzle))

    useEffect(() => {
        setCanvas(cloneDeep(puzzle))
        if (!color) {
            for (const tile of canvas) {
                tile.highlighted = false
            }
            setCanvas(cloneDeep(canvas))
        }
    }, [puzzle])

    const onClick = (index: number) => {
        canvas[index].highlighted = !canvas[index].highlighted
        if (onTileClicked) {
            onTileClicked(index, canvas[index].highlighted)
        }
        setCanvas(cloneDeep(canvas))
    }

    return (
        <div className={`container-fluid ${styles.gridContainer}`}>
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
                                        margin: color
                                            ? '-2.5px 2.5px'
                                            : '0px 5px',
                                        width: color ? '40px' : '100px', //was width: random ? "2vw" : "4vw"
                                        height: color ? '40px' : '100px' //was height: random ? "2vw" : "4vw"
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
