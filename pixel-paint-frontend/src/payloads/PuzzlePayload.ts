import { Tile } from '../models'

export interface PuzzlePayload {
    name: string
    tiles: Tile[]
    amount: number
    difficulty: number
}
