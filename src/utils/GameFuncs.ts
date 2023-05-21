import { Tile } from '../models'
import { Preset } from '../models'
import { presets } from '../models/presets'
import { Coordinate } from '../models'
import { PuzzlePayload } from '../payloads/PuzzlePayload'
import { getNextPreset } from '../models/PresetTable'
import { getNumberInRange } from '../utils/GenericFuncs'
import { Constants, Modes } from '../utils/GameConstants'
import { Colors } from './ColorsConstants'

var colors: string[] = [
    Colors.TILE_COLOR_A,
    Colors.TILE_COLOR_B,
    Colors.TILE_COLOR_C,
    Colors.TILE_COLOR_D,
    Colors.TILE_COLOR_E,
    Colors.TILE_COLOR_F
]

var presetsAvailable = presets.length

export const generateTiles = (
    rows: number,
    columns: number,
    maxCount: number,
    score: number,
    gameMode: number
): PuzzlePayload => {
    let n: number = Constants.SHOULD_GENERATE_RANDOM

    if (score >= Constants.SCORE_CHECKPOINT) {
        n = getNumberInRange(1, 3)
    }

    if (presetsAvailable > 0 && n === Constants.SHOULD_GENERATE_RANDOM) {
        return generatePresetTiles(rows, score, gameMode)
    }

    return generateRandomTiles(rows, columns, maxCount, score, gameMode)
}

const generatePresetTiles = (
    size: number,
    score: number,
    gameMode: number
): PuzzlePayload => {
    let randomPreset = {} as Preset
    if (size === 7)
        randomPreset = getNextPreset(getNumberInRange(1, 3), gameMode, score)
    if (size === 8)
        randomPreset = getNextPreset(getNumberInRange(4, 5), gameMode, score)

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
    maxCount: number,
    score: number,
    gameMode: number
): PuzzlePayload => {
    const randomTilesPreset: Preset = {
        picture: [],
        name: 'random',
        amount: maxCount,
        difficulty: 1,
        size: columns * rows
    }
    const toColor: Coordinate[] = []

    //Checks if tile coordinates are already in the puzzle
    const findColored = (c: Coordinate) =>
        toColor.find((e) => e.i === c.i && e.j === c.j)

    while (toColor.length < maxCount) {
        const i = getNumberInRange(0, rows - 1)
        const j = getNumberInRange(0, columns - 1)

        if (!findColored({ i, j })) {
            toColor.push({ i, j })
        }
    }

    for (let i = 0; i < rows; ++i) {
        for (let j = 0; j < columns; ++j) {
            randomTilesPreset.picture.push({
                i,
                j,
                highlighted: !!findColored({ i, j })
            })
        }
    }
    if (gameMode == Modes.PAINT) colorizePreset(randomTilesPreset, score)

    return { tiles: randomTilesPreset.picture, amount: maxCount, difficulty: 1 }
}

//Relevant in PAINT mode

export const colorizePreset = (p: Preset, score: number) => {
    p.picture.forEach((tile: Tile) => {
        if (tile.highlighted) {
            tile.color = colors[getColorIndex(score)]
        }
    })
}

const getColorIndex = (score: number): number => {
    var n: number
    if (score >= 0 && score < 3) n = getNumberInRange(0, 2)
    else if (score >= 3 && score < 10) n = getNumberInRange(0, 3)
    else if (score >= 10 && score < 20) n = getNumberInRange(0, 4)
    else n = getNumberInRange(0, 5)
    return n
}

//Relevant in PAINT mode, updates coloredObjectiveTiles amount correctly according to the state
export const isCorrectTile = (
    tile: Tile,
    highlighted: boolean,
    color?: string,
    prevColor?: string
): number => {
    if (highlighted && tile.color === color) return 1
    if (highlighted && tile.color !== color && prevColor === tile.color)
        return -1
    if (!highlighted && tile.color === color) return -1
    if (highlighted && tile.color !== color) return 0
    else return 0
}
