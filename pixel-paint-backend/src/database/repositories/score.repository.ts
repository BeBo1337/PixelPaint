import { FirebaseApp, initializeApp } from 'firebase/app'
import {
    collection,
    getFirestore,
    setDoc,
    doc,
    limit,
    orderBy,
    query,
    getDocs,
    DocumentData,
    Firestore
} from 'firebase/firestore'
import ScoreDto from '../dto/score.dto'
import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
import { v4 as uuidv4 } from 'uuid'
import CreateScoreDto from '../dto/createScore.dto'
import IScoreRepository from '../interfaces/scoreRepository.interface'
import CollectionNotFound from '../exceptions/collectionNotFound.exception'
import { ConfigService } from '@nestjs/config'
import {
    SORT_FASHION,
    SORT_PARAM,
    GET_NAME,
    GET_SCORE
} from '../constants/constants'

@Injectable()
export default class ScoreRepository implements IScoreRepository {
    constructor(
        private readonly configService: ConfigService,
        private readonly db: Firestore
    ) {}

    public async createScore(scoreData: CreateScoreDto): Promise<ScoreDto> {
        const score = scoreData.score
        const collectionName = scoreData.collectionName

        try {
            await setDoc(doc(this.db, collectionName, uuidv4()), { ...score })
        } catch (error) {
            console.log(error)
            throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR)
        }

        return score
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
            if (docs.empty) throw new CollectionNotFound(collectionName)

            const data = []

            docs.forEach((doc: DocumentData) =>
                data.push({
                    name: doc.get(GET_NAME),
                    score: doc.get(GET_SCORE)
                })
            )

            return data
        } catch (error) {
            // Propagate error
            throw error
        }
    }
}
