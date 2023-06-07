import { Inject, Injectable } from '@nestjs/common'
import CreateScoreDto from './dto/createScore.dto'
import IScoreRepository from './scoreRepository.interface'

@Injectable()
export class ScoreService {
    constructor(
        @Inject('REPO_TOKEN')
        private readonly scoreRepository: IScoreRepository
    ) {}

    public async getScore(collectionName: string, amount: number) {
        return this.scoreRepository.getScore(collectionName, amount)
    }

    public async createScore(scoreData: CreateScoreDto) {
        return this.scoreRepository.createScore(scoreData)
    }
}
