import { HttpException, HttpStatus } from '@nestjs/common'
import { readFile, writeFile } from 'fs/promises'
import CreateScoreDto from 'src/database/dto/createScore.dto'
import ScoreDto from 'src/database/dto/score.dto'
import IScoreRepository from 'src/database/iscoreRepository.interface'

export default class ScoreRepositoryMock implements IScoreRepository {
    private db: Record<string, ScoreDto[]>
    private readonly dbFilePath: string

    constructor() {
        this.dbFilePath = './test/modules/score/dummy.data.json'
        this.db = {}
    }

    public async createScore(scoreData: CreateScoreDto): Promise<ScoreDto> {
        if (Object.keys(this.db).length === 0) await this.initDb()

        if (Object.keys(scoreData).length === 0) {
            throw new HttpException(
                'scoreData is empty',
                HttpStatus.BAD_REQUEST
            )
        }

        if (scoreData.score.score < 0)
            throw new HttpException(
                `Invalid score:${scoreData.score}`,
                HttpStatus.BAD_REQUEST
            )
        if (scoreData.score.name === '')
            throw new HttpException(
                'Name cannot be blank',
                HttpStatus.BAD_REQUEST
            )

        const { collectionName, score } = scoreData
        this.db[collectionName] = this.db[collectionName] || []
        this.db[collectionName].push(score)
        this.saveData()
        return score
    }

    public async getScore(
        collectionName: string,
        amount: number
    ): Promise<ScoreDto[]> {
        if (Object.keys(this.db).length === 0) await this.initDb()

        const content = this.db[collectionName] || []
        const sorted = content.sort(
            (entry1, entry2) => entry2.score - entry1.score
        )

        return sorted.slice(0, amount)
    }

    private async initDb() {
        const content = await this.getData()
        this.db = content
    }

    private async getData(): Promise<any> {
        try {
            const content = await readFile(this.dbFilePath, {
                encoding: 'utf8'
            })
            return JSON.parse(content)
        } catch (error) {
            console.error('Error initializing DB:', error)
        }
    }

    private async saveData(): Promise<void> {
        try {
            await writeFile(this.dbFilePath, JSON.stringify(this.db), {
                encoding: 'utf8'
            })
        } catch (error) {
            console.error('Error saving DB:', error)
        }
    }
}
