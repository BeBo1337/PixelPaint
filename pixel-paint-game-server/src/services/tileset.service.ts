import { getNumberInRange } from '../utils'
import { colorizePreset } from '../utils/GameLogic'
import { byDifficulty, Modes, Preset } from '../models'

export const getNextPreset = (
    difficulty: number,
    gameMode: number,
    score: number,
    GameData?: {
        usedPresets: string[]
    }
): Preset => {

    if (!(difficulty in byDifficulty)) {
        throw new Error(`Invalid difficulty: ${difficulty}`)
    }

    let presetsList: Preset[] = byDifficulty[difficulty]
    if (GameData) {
        presetsList = presetsList.filter((preset) => {
            return !GameData.usedPresets.includes(preset.name)
        })
    }

    let numInRange: number = getNumberInRange(0, presetsList.length - 1)
    let res: Preset = presetsList[numInRange]
    if (gameMode === Modes.PAINT) {
        colorizePreset(res, score)
    }

    presetsList.splice(numInRange, 1)

    return res
}