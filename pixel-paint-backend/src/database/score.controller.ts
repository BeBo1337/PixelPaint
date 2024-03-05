import {
    Body,
    Controller,
    Get,
    Header,
    Logger,
    Post,
    Query
} from '@nestjs/common'
import { ScoreService } from './score.service'
import CreateScoreDto from './dto/createScore.dto'
import ScoreQueryDto from './dto/scoreQuery.dto'

/**
 * Controller for creating/retrieving score results from the database.
 * The base route for this controller is /score.
 */
@Controller('score')
export class ScoreController {
    constructor(private readonly scoreService: ScoreService) {}

    /**
     * Retrieves scores from the database.
     *
     * @param limit The number of scores to retrieve from the database.
     * @param name The name of the collection to retrieve scores from.
     * @example http://localhost:3000/score?limit=5&name=ScorePaint
     * @returns A sorted array of ScoreDto objects with a size specified by 'limit', from the collection specified by 'name'.
     */
    @Get()
    @Header('Cache-Control', 'max-age=10')
    public async getScore(@Query() { limit, name }: ScoreQueryDto) {
        Logger.log(`limit=${limit}, name=${name}`)
        return this.scoreService.getScore(name, Number(limit))
    }

    /**
     * Posts a score to the database.
     *
     * @param score The score to be posted to the database.
     * The score object must follow the following syntax:
     *
     * @example
     * {
     *   "collectionName": 'ScorePaint',
     *   "score": {
     *     "name": 'BeBo',
     *     "score": 25
     *   }
     * }
     *
     * @returns Promise<ScoreDto>
     */
    @Post()
    public async createScore(@Body() score: CreateScoreDto) {
        Logger.log(score.score)
        return this.scoreService.createScore(score)
    }
}
