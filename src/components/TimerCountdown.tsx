import { FC, useState, useEffect } from 'react'
import styles from './styles.module.scss'
import { colors } from '@mui/material'
import { getNumberInRange } from '../utils/GenericFuncs'

interface TimerCountdownProps {
    time: number
    isWarning: boolean
    score: number
    onTimeOver: Function
    timeToAdd: number
}

const TimerCountdown: FC<TimerCountdownProps> = ({
    time,
    isWarning,
    score,
    onTimeOver,
    timeToAdd
}: TimerCountdownProps) => {
    const [extraTime, setExtraTime] = useState(0)
    const [timeLeft, setTime] = useState(time)
    const [warning, setWarning] = useState(isWarning)
    const [prevScore, setPrevScore] = useState(score)

    useEffect(() => {
        setTimeout(() => {
            if (timeLeft === 0) onTimeOver()
            else setTime(timeLeft - 1)
            if (timeLeft <= 10) setWarning(true)
        }, 1000)
        if (prevScore < score) {
            console.log(extraTime)
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
