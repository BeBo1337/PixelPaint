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
import ScoreDto from './dto/score.dto'
import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
import { v4 as uuidv4 } from 'uuid'
import CreateScoreDto from './dto/createScore.dto'
import IScoreRepository from './scoreRepository.interface'
import CollectionNotFound from './exceptions/collectionNotFound.exception'
import { ConfigService } from '@nestjs/config'
import {
    SORT_FASHION,
    SORT_PARAM,
    GET_NAME,
    GET_SCORE
} from './constants/constants'

@Injectable()
export default class ScoreRepository implements IScoreRepository {
    private app: FirebaseApp
    private db: Firestore

    constructor(private readonly configService: ConfigService) {
        this.app = initializeApp(this.getConfigObject())
        this.db = getFirestore(this.app)
    }

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

    private getConfigObject() {
        return {
            apiKey: this.configService.get('FIREBASE_API_KEY'),
            authDomain: this.configService.get('FIREBASE_AUTH_DOMAIN'),
            projectId: this.configService.get('FIREBASE_PROJECT_ID'),
            storageBucket: this.configService.get('FIREBASE_STORAGE_BUCKET'),
            messagingSenderId: this.configService.get(
                'FIREBASE_MESSAGING_SENDER_ID'
            ),
            appId: this.configService.get('FIREBASE_APP_ID'),
            measurementId: this.configService.get('FIREBASE_MEASURMENT_ID')
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
