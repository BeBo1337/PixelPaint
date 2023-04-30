import { Tile } from "../models"

export interface PuzzlePayload
{
    tiles: Tile[]
    amount: number
}