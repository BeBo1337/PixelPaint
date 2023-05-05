import { Preset } from '.'
import { presets as PresetsList } from './presets'
import { GetNumberInRange } from '../utils/GenericFuncs'

interface PresetTable {
    [key: number]: Preset[]
}

var presetTable: PresetTable = {}

export const GetNextPreset = (difficulty: number): Preset => {
    if (Object.keys(presetTable).length === 0) {
        presetTable = GetPresetTable()
    }

    if (!(difficulty in presetTable)) {
        throw new Error(`Invalid difficulty: ${difficulty}`)
    }

    var presetsList: Preset[] = presetTable[difficulty]
    var numInRange: number = GetNumberInRange(0, presetsList.length - 1)
    var res: Preset = presetsList[numInRange]

    presetsList.splice(numInRange, 1)

    return res
}

const GetPresetTable = (): PresetTable => {
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
