import ScoreDto from './score.dto'
import {
    IsNotEmpty,
    IsNotEmptyObject,
    IsString,
    ValidateNested
} from 'class-validator'
import { Type } from 'class-transformer'

// Data-Transfer-Object for creating a score in the database.
export default class CreateScoreDto {
    // Validate the its a non-empty string.
    @IsString()
    @IsNotEmpty()
    collectionName: string

    // Validate that the inner dto is not empty, and transform it into
    // a ScoreDto to enable inner validation.
    @IsNotEmptyObject({ nullable: false })
    @ValidateNested({ each: true })
    @Type(() => ScoreDto)
    score: ScoreDto
}
