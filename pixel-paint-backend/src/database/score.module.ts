import { Module } from '@nestjs/common'
import { ScoreService } from './score.service'
import { ScoreController } from './score.controller'
import ScoreRepository from './score.repository'
import { ConfigModule } from '@nestjs/config'

@Module({
    providers: [
        ScoreService,
        { provide: 'REPO_TOKEN', useClass: ScoreRepository }
    ],
    controllers: [ScoreController],
    exports: [ScoreService],
    imports: [ConfigModule]
})
export class ScoreModule {}
