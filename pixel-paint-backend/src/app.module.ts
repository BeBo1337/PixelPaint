import { Module } from '@nestjs/common'
import { ScoreModule } from './database/score.module'
import { ScoreController } from './database/score.controller'
import { ConfigModule } from '@nestjs/config'

@Module({
    imports: [ScoreModule , ConfigModule.forRoot(
        {envFilePath: `.env.${process.env.ENVIRONMENT || 'development'}`})],
    controllers: [ScoreController],
    providers: []
})
export class AppModule {}
