import { padStart } from 'lodash'
import { FC, useState, useEffect } from 'react'
import styles from './styles.module.scss'
import { colors } from '@mui/material'

interface TimerCountdownProps {
    time: number
    isWarning: boolean
    onTimeOver: Function
}

const TimerCountdown: FC<TimerCountdownProps> = ({
    time,
    isWarning,
    onTimeOver
}: TimerCountdownProps) => {
    const [timeLeft, setTime] = useState(time)
    const [warning, setWarning] = useState(isWarning)

    useEffect(() => {
        setTimeout(() => {
            if (timeLeft <= 10) setWarning(true)
            if (timeLeft > 0) setTime(timeLeft - 1)
        }, 1000)
        if (timeLeft === 0) onTimeOver()
    }, [timeLeft])

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
        <div className={`${styles.timeContainer}`}>
            <h1 style={{ color: warning ? 'red' : 'aqua' }}>
                {calculateTime(timeLeft)}
            </h1>
        </div>
    )
}

export default TimerCountdown
