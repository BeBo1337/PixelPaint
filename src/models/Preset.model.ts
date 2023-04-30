import { Tile } from './Tile.model'

export interface Coordinate{
    i: number
    j: number
}

export interface Preset {
    difficulty: number
    name: string
    picture: Tile[]
    amount: number
    size: number
}
