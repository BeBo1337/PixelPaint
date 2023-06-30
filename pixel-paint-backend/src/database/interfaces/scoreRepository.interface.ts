import CreateScoreDto from '../dto/createScore.dto'
import ScoreDto from '../dto/score.dto'

export default interface IScoreRepository {
    createScore(scoreData: CreateScoreDto): Promise<ScoreDto>
    getScore(collectionName: string, amount: number): Promise<ScoreDto[]>
}
