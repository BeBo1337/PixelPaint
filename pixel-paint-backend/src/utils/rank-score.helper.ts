import { ALL_SCORES } from 'src/common/constants'
import ScoreDto from 'src/database/dto/score.dto'

export const rankScore = (arr: ScoreDto[], newScore: ScoreDto): number => {
    const arrCpy = arr
        .flat()
        .fill(
            { name: null, score: Infinity, uuid: null },
            arr.length,
            ALL_SCORES
        )
    let l = arr.length - 1

    while (l > 0) {
        if (arrCpy[l].score < newScore.score) return l
        l--
    }

    return l > 0 ? l : -1
}
