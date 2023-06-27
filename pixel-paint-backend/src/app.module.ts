import { Module } from '@nestjs/common'
import { ScoreModule } from './database/score.module'
import { ScoreController } from './database/score.controller'
import { ConfigModule } from '@nestjs/config'
import * as Joi from 'joi'

@Module({
    imports: [
        ScoreModule,
        ConfigModule.forRoot({
            envFilePath: `.env.${process.env.ENVIRONMENT || 'development'}`,
            validationSchema: Joi.object({
                FIREBASE_API_KEY: Joi.string().required(),
                FIREBASE_AUTH_DOMAIN: Joi.string().required(),
                FIREBASE_PROJECT_ID: Joi.string().required(),
                FIREBASE_STORAGE_BUCKET: Joi.string().required(),
                FIREBASE_MESSAGING_SENDER_ID: Joi.string().required(),
                FIREBASE_APP_ID: Joi.string().required(),
                FIREBASE_MEASURMENT_ID: Joi.string().required(),
                PORT: Joi.number().required()
            })
        })
    ],

    controllers: [ScoreController],
    providers: []
})
export class AppModule {}
