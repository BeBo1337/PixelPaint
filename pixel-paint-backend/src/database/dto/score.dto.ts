import { IsNotEmpty, IsPositive, IsString } from 'class-validator'

// Data-Transfer-Object representation of a score.
export default class ScoreDto {
    // Validate positive number.
    @IsPositive()
    score: number

    // Validate non-empty string
    @IsString()
    @IsNotEmpty()
    name: string
}
