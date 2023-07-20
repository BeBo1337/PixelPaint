import { FC, useState, useEffect } from 'react'
import styles from './styles.module.scss'

interface TimerCountdownProps {
    time: number
    score: number
    onTimeOver: Function
    timeToAdd: number
}

const TimerCountdown: FC<TimerCountdownProps> = ({
    time,
    score,
    onTimeOver,
    timeToAdd
}: TimerCountdownProps) => {
    const [extraTime, setExtraTime] = useState(0)
    const [timeLeft, setTime] = useState(time)
    const [warning, setWarning] = useState(false)
    const [prevScore, setPrevScore] = useState(score)

    useEffect(() => {
        setTimeout(() => {
            if (timeLeft === 0) onTimeOver()
            else setTime(timeLeft - 1)
            if (timeLeft <= 10) setWarning(true)
            else setWarning(false)
        }, 1000)
        if (prevScore < score) {
            if (extraTime >= 3) setTime(timeLeft + 3 + 1)
            else setTime(timeLeft + extraTime + 1)
            setPrevScore(score)
        }
    }, [timeLeft])

    useEffect(() => {
        setExtraTime(timeToAdd)
    }, [prevScore])

    const calculateTime = (time: number) => {
        let mins = Math.floor(time / 60)
        let secs = time % 60
        let res: string =
            mins.toString().padStart(2, '0') +
            ':' +
            secs.toString().padStart(2, '0')
        return res
    }

    return (
        <div
            className={
                warning
                    ? `${styles.timeContainerBlink}`
                    : `${styles.timeContainer}`
            }
        >
            {calculateTime(timeLeft)}
        </div>
    )
}

export default TimerCountdown
