import { Module } from '@nestjs/common'
import { ScoreService } from './score.service'
import { ScoreController } from './score.controller'
import ScoreRepository from './score.repository'

@Module({
    providers: [
        ScoreService,
        ScoreRepository,
        { provide: 'REPO_TOKEN', useClass: ScoreRepository }
    ],
    controllers: [ScoreController],
    exports: [ScoreService, ScoreRepository],
    imports: []
})
export class ScoreModule {}
