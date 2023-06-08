import { Test } from '@nestjs/testing'
import ScoreDto from '../../../src/database/dto/score.dto'
import CreateScoreDto from '../../../src/database/dto/createScore.dto'
import { ScoreService } from '../../../src/database/score.service'
import ScoreRepositoryMock from './score.repository.mock'
import { HttpException } from '@nestjs/common'

describe('ScoreService', () => {
    let scoreService: ScoreService

    beforeEach(async () => {
        const moduleRef = await Test.createTestingModule({
            providers: [
                ScoreService,
                ScoreRepositoryMock,
                { provide: 'REPO_TOKEN', useClass: ScoreRepositoryMock }
            ]
        }).compile()

        scoreService = moduleRef.get<ScoreService>(ScoreService)
    })

    test('[createScore]: Should add the score to the db and return the score that was created.', async () => {
        const expectedScore: ScoreDto = { name: 'Jane Smith', score: 100 }
        const createScoreDto: CreateScoreDto = {
            collectionName: 'ScorePaint',
            score: expectedScore
        }

        const res = await scoreService.createScore(createScoreDto)
        expect(res).toEqual(expectedScore)
    })

    test('[getScore]: Should get the top 5 scores in "ScoreClassic"', async () => {
        const expectedScore: ScoreDto[] = [
            { name: 'Jane Smith', score: 100 },
            { name: 'Nigel Harrison', score: 10 },
            { name: 'Hop Dillon', score: 8 },
            { name: 'Yuli Mullins', score: 8 },
            { name: 'Xyla Oneal', score: 8 }
        ]

        const res = await scoreService.getScore('ScoreClassic', 5)
        expect(res).toEqual(expectedScore)
    })

    test('[createScore]: Should fail with status BAD_REQUEST', async () => {
        const data: CreateScoreDto = {
            collectionName: 'ScorePaint',
            score: {
                name: 'Test',
                score: -1
            }
        }

        try {
            expect(await scoreService.createScore(data)).toThrow(HttpException)
        } catch (error) {
            console.log(error)
        }
    })
})
