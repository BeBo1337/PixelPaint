import { Exclude, Expose } from 'class-transformer'
import {
    IsNotEmpty,
    IsOptional,
    IsPositive,
    IsString,
    IsUUID
} from 'class-validator'

// Data-Transfer-Object representation of a score.
@Expose()
export default class ScoreDto {
    @IsOptional()
    @IsUUID()
    @Exclude()
    uuid: string

    // Validate positive number.
    @IsPositive()
    score: number

    @IsString()
    @IsOptional()
    countryCode: string

    // Validate non-empty string
    @IsString()
    @IsNotEmpty()
    name: string
}
