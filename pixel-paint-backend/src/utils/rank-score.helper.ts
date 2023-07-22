import ScoreDto from 'src/database/dto/score.dto'

export const rankScore = (arr: ScoreDto[], newScore: ScoreDto): number => {
    let l = arr.length - 1

    while (l > 0) {
        if (arr[l].score < newScore.score) return l
        l--
    }

    return l >= 0 ? l : -1
}
