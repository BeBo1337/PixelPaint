export interface Tile {
    i: number
    j: number
    highlighted: boolean
    color?: string
}

export interface PuzzlePayload {
    tiles: Tile[]
    amount: number
    difficulty: number
}