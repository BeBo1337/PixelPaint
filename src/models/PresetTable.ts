import { Preset } from '.'
import { Tile } from './Tile.model'
import { presets as PresetsList } from './presets'
import { getNumberInRange } from '../utils/GenericFuncs'
import { Modes } from '../utils/GameConstants'
import { each } from 'lodash'
import { color } from 'framer-motion'

interface PresetTable {
    [key: number]: Preset[]
}

var colors: string[] = ['red', 'green', 'blue', 'yellow', 'pink']

var presetTable: PresetTable = {}

export const getNextPreset = (difficulty: number, gameMode: number): Preset => {
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
        colorizePreset(res)
    }

    presetsList.splice(numInRange, 1)

    return res
}

const colorizePreset = (p: Preset) => {
    p.picture.forEach((tile: Tile) => {
        if (tile.highlighted) {
            tile.color = colors[getNumberInRange(0, 2)]
        }
    })
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
