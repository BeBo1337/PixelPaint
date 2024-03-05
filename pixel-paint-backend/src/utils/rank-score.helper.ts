import { ALL_SCORES } from 'src/common/constants'
import ScoreDto from 'src/database/dto/score.dto'

export const rankScore = (arr: ScoreDto[], newScore: ScoreDto): number => {
    let l = arr.length

    while (l > 0) {
        if (arr[l - 1].score < newScore.score) return l
        l--
    }

    return l > 0 ? l : -1
}
