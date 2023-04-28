import { Tile } from '../models'

//Generates maxCount number of tiles to highlight in the grid
export const generateRandomTiles = (
    rows: number,
    columns: number,
    maxCount: number
): Tile[] => {
    const tiles: Tile[] = []
    const toColor: { i: number; j: number }[] = []
    const findColored = (i: number, j: number) =>
        toColor.find((e) => e.i === i && e.j === j)

    while (toColor.length < maxCount) {
        const i = Math.floor(Math.random() * rows)
        const j = Math.floor(Math.random() * columns)
        if (!findColored(i, j)) {
            toColor.push({ i, j })
        }
    }

    for (let i = 0; i < rows; ++i) {
        for (let j = 0; j < columns; ++j) {
            tiles.push({
                i,
                j,
                highlighted: !!findColored(i, j)
            })
        }
    }
    return tiles
}
