import { Preset } from '../models'
import { presets as PresetsList } from '../models/presets'

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
    PresetsList.splice(numInRange, 1)

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

    console.log(presetTable)

    return presetTable
}

const GetNumberInRange = (start: number, end: number): number => {
    return Math.floor(Math.random() * (end - start + 1))
}
