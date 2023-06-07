import { Transform, Type } from 'class-transformer'
import { IsNotEmpty, IsPositive, IsString } from 'class-validator'
import { toTrim } from 'src/utils/cast.helper'

export default class ScoreQueryDto {
    @Transform(({ value }) => toTrim(value))
    @IsString({ message: 'name must be a string' })
    @IsNotEmpty({ message: 'name cannot be empty' })
    name: string

    @Type(() => Number)
    @IsPositive({ message: 'limit must be a positive integer' })
    @IsNotEmpty({ message: 'limit cannot be empty' })
    limit: number
}
