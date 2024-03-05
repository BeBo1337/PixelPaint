import {
    collection,
    setDoc,
    doc,
    limit,
    orderBy,
    query,
    getDocs,
    DocumentData,
    Firestore,
    deleteDoc
} from 'firebase/firestore'
import ScoreDto from '../dto/score.dto'
import {
    Injectable,
    InternalServerErrorException,
    NotFoundException
} from '@nestjs/common'
import { v4 as uuidv4 } from 'uuid'
import CreateScoreDto from '../dto/createScore.dto'
import IScoreRepository from '../interfaces/scoreRepository.interface'
import {
    SORT_FASHION,
    SORT_PARAM,
    GET_NAME,
    GET_SCORE,
    GET_UUID,
    GET_CCODE
} from '../constants/constants'
import { ALL_SCORES } from 'src/common/constants'
import { rankScore } from 'src/utils/rank-score.helper'
import { HttpService } from '@nestjs/axios'
import { AxiosError } from 'axios'
import { ConfigService } from '@nestjs/config'
import { firstValueFrom } from 'rxjs'

@Injectable()
export default class ScoreRepository implements IScoreRepository {
    constructor(
        private readonly configService: ConfigService,
        private readonly db: Firestore,
        private readonly httpService: HttpService
    ) {}

    public async createScore(scoreData: CreateScoreDto): Promise<ScoreDto> {
        try {
            const scores = await this.getScore(
                scoreData.collectionName,
                ALL_SCORES
            )

            await this.insertScoreToDb(scores, scoreData)
        } catch (error) {
            throw new InternalServerErrorException()
        }

        return scoreData.score
    }

    private async insertScoreToDb(
        scores: ScoreDto[],
        scoreData: CreateScoreDto
    ) {
        try {
            const rank = rankScore(scores, scoreData.score)
            const res$ = this.httpService.get(
                `https://api.ipgeolocation.io/ipgeo?ip=${
                    scoreData.ipAddr
                }&apiKey=${this.configService.get<string>('GEO_LOC_API_KEY')}`
            )

            const { country_code3 } = await (await firstValueFrom(res$)).data
            console.log(rank)
            if (rank != -1) {
                const scoreToInsert = {
                    uuid: uuidv4(),
                    countryCode: country_code3,
                    ...scoreData.score
                } satisfies ScoreDto
                await setDoc(
                    doc(this.db, scoreData.collectionName, scoreToInsert.uuid),
                    scoreToInsert
                )
                if (scores.length >= 100)
                    await deleteDoc(
                        doc(
                            this.db,
                            scoreData.collectionName,
                            scores[scores.length - 1].uuid
                        )
                    )
            }
        } catch (error) {
            if (error instanceof AxiosError) {
                console.log(error.message)
            }
            throw new InternalServerErrorException()
        }
    }

    public async getScore(
        collectionName: string,
        amount: number
    ): Promise<ScoreDto[]> {
        try {
            const docs = await getDocs(
                query(
                    collection(this.db, collectionName),
                    limit(amount),
                    orderBy(SORT_PARAM, SORT_FASHION)
                )
            )

            // If doc doesnt exist yet
            if (docs.empty)
                throw new NotFoundException(
                    `Collection with name=${collectionName} was not found`
                )

            const data = []

            docs.forEach((doc: DocumentData) =>
                data.push({
                    uuid: doc.get(GET_UUID),
                    name: doc.get(GET_NAME),
                    score: doc.get(GET_SCORE),
                    countryCode: doc.get(GET_CCODE)
                })
            )

            return data
        } catch (error) {
            // Propagate error
            throw error
        }
    }
}
