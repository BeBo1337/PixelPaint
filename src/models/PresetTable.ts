import { Preset } from '.'
import { Tile } from './Tile.model'
import { presets as PresetsList } from './presets'
import { getNumberInRange } from '../utils/GenericFuncs'
import { Modes } from '../utils/GameConstants'
import { Colors } from '../utils/ColorsConstants'
import { colorizePreset } from '../utils/GameFuncs'
import { each } from 'lodash'
import { color } from 'framer-motion'

interface PresetTable {
    [key: number]: Preset[]
}

var presetTable: PresetTable = {}

export const getNextPreset = (
    difficulty: number,
    gameMode: number,
    score: number
): Preset => {
    if (Object.keys(presetTable).length === 0) {
        presetTable = getPresetTable()
    }

    if (!(difficulty in presetTable)) {
        throw new Error(`Invalid difficulty: ${difficulty}`)
    }

    var presetsList: Preset[] = presetTable[difficulty]
    var numInRange: number = getNumberInRange(0, presetsList.length - 1)
    var res: Preset = presetsList[numInRange]
    if (gameMode === Modes.PAINT) {
        colorizePreset(res, score)
    }

    presetsList.splice(numInRange, 1)

    return res
}

const getPresetTable = (): PresetTable => {
    if (Object.keys(presetTable).length === 0) {
        PresetsList.forEach((p: Preset) => {
            if (!presetTable[p.difficulty]) {
                presetTable[p.difficulty] = []
            }
            presetTable[p.difficulty].push(p)
        })
    }

    return presetTable
}
