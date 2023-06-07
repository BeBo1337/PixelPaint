import { Module } from '@nestjs/common'
import { ScoreModule } from './database/score.module'
import { ScoreController } from './database/score.controller'

@Module({
    imports: [ScoreModule],
    controllers: [ScoreController],
    providers: []
})
export class AppModule {}
