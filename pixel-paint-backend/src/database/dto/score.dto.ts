import { Exclude, Expose } from 'class-transformer'
import {
    IsNotEmpty,
    IsNumber,
    IsOptional,
    IsString,
    IsUUID,
    Min
} from 'class-validator'

// Data-Transfer-Object representation of a score.
@Expose()
export default class ScoreDto {
    @IsOptional()
    @IsUUID()
    @Exclude()
    uuid: string

    // Validate positive number.
    @IsNumber()
    @Min(0)
    score: number

    // Validate non-empty string
    @IsString()
    @IsNotEmpty()
    name: string
}
