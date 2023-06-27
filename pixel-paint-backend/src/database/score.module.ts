import { Module } from '@nestjs/common'
import { ScoreService } from './score.service'
import { ScoreController } from './score.controller'
import ScoreRepository from './repositories/score.repository'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { Firestore, getFirestore } from 'firebase/firestore'
import { initializeApp } from 'firebase/app'

function getConfigObject(configService: ConfigService) {
    return {
        apiKey: configService.get('FIREBASE_API_KEY'),
        authDomain: configService.get('FIREBASE_AUTH_DOMAIN'),
        projectId: configService.get('FIREBASE_PROJECT_ID'),
        storageBucket: configService.get('FIREBASE_STORAGE_BUCKET'),
        messagingSenderId: configService.get('FIREBASE_MESSAGING_SENDER_ID'),
        appId: configService.get('FIREBASE_APP_ID'),
        measurementId: configService.get('FIREBASE_MEASURMENT_ID')
    }
}

@Module({
    providers: [
        ScoreService,
        { provide: 'REPO_TOKEN', useClass: ScoreRepository },
        {
            provide: Firestore,
            useFactory: async (configService: ConfigService) => {
                const app = initializeApp(getConfigObject(configService))
                return getFirestore(app)
            },
            inject: [ConfigService]
        }
    ],
    controllers: [ScoreController],
    exports: [ScoreService],
    imports: [ConfigModule]
})
export class ScoreModule {}
