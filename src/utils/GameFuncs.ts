import { Tile } from '../models'
import { Preset } from '../models'
import { presets } from '../models/presets'
import { Coordinate } from '../models'
import { PuzzlePayload } from '../payloads/PuzzlePayload'

let presetsAvailable = presets.length

export const generateTiles = (
    rows: number,
    columns: number,
    maxCount: number
): PuzzlePayload => {
    if (presetsAvailable > 0) {
        return generatePresetTiles()
    }
    return generateRandomTiles(rows, columns, maxCount)
}

const generatePresetTiles = (): PuzzlePayload => {
    let randomPreset: Preset
    presetsAvailable = presetsAvailable - 1
    randomPreset = presets[presetsAvailable]
    return { tiles: randomPreset.picture, amount: randomPreset.amount }
}

//Generates maxCount number of tiles to highlight in the grid
const generateRandomTiles = (
    rows: number,
    columns: number,
    maxCount: number
): PuzzlePayload => {
    const tiles: Tile[] = []
    const toColor: Coordinate[] = []

    //Checks if tile coordinates are already in the puzzle
    const findColored = (c: Coordinate) =>
        toColor.find((e) => e.i === c.i && e.j === c.j)

    while (toColor.length < maxCount) {
        const i = Math.floor(Math.random() * rows)
        const j = Math.floor(Math.random() * columns)
        if (!findColored({ i, j })) {
            toColor.push({ i, j })
        }
    }

    for (let i = 0; i < rows; ++i) {
        for (let j = 0; j < columns; ++j) {
            tiles.push({
                i,
                j,
                highlighted: !!findColored({ i, j })
            })
        }
    }
    return { tiles: tiles, amount: maxCount }
}
