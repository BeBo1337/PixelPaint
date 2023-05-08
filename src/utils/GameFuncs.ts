import { Tile } from '../models'
import { Preset } from '../models'
import { presets } from '../models/presets'
import { Coordinate } from '../models'
import { PuzzlePayload } from '../payloads/PuzzlePayload'
import { GetNextPreset } from '../models/PresetTable'
import { GetNumberInRange } from '../utils/GenericFuncs'
import Constants from '../utils/GameConstants'

let presetsAvailable = presets.length

export const generateTiles = (
    rows: number,
    columns: number,
    maxCount: number,
    score: number
): PuzzlePayload => {
    let n: number = Constants.SHOULD_GENERATE_RANDOM

    if (score >= Constants.SCORE_CHECKPOINT) {
        n = GetNumberInRange(1, 3)
    }

    if (presetsAvailable > 0 && n === Constants.SHOULD_GENERATE_RANDOM) {
        return generatePresetTiles(rows)
    }

    return generateRandomTiles(rows, columns, maxCount)
}

const generatePresetTiles = (size: number): PuzzlePayload => {
    let randomPreset = {} as Preset
    if (size === 7) randomPreset = GetNextPreset(GetNumberInRange(1, 3))
    if (size === 8) randomPreset = GetNextPreset(GetNumberInRange(4, 4))
    return {
        tiles: randomPreset.picture,
        amount: randomPreset.amount,
        difficulty: randomPreset.difficulty
    }
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
        const i = GetNumberInRange(0, rows - 1)
        const j = GetNumberInRange(0, columns - 1)

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
    return { tiles: tiles, amount: maxCount, difficulty: 1 }
}
