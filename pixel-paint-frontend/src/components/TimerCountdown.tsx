import { FC, useState, useEffect } from 'react'
import styles from './styles.module.scss'
import { Modes } from '../utils/GameConstants'
import EventsManager from '../services/EventsManager'
import { SocketEvents } from '../services/SocketEvents.model'
import SocketManager from '../services/SocketManager'

interface TimerCountdownProps {
    time: number
    score: number
    gameMode: number
    onTimeOver: Function
}

const TimerCountdown: FC<TimerCountdownProps> = ({
    time,
    score,
    gameMode,
    onTimeOver
}: TimerCountdownProps) => {
    const [timeLeft, setTime] = useState<number>(
        gameMode === Modes.CO_OP ? 120 : 150
    )
    const [count, setCount] = useState<number>(0)
    const [warning, setWarning] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            if (timeLeft === 0) onTimeOver()
            else if (SocketManager.instance.isHost) {
                setCount((prevCount) => prevCount + 1)
                EventsManager.instance.trigger(SocketEvents.TIME, {})
            }
            if (timeLeft <= 10) setWarning(true)
            else setWarning(false)
        }, 1000)
    }, [count])

    const calculateTime = (time: number) => {
        let mins = Math.floor(time / 60)
        let secs = time % 60
        let res: string =
            mins.toString().padStart(2, '0') +
            ':' +
            secs.toString().padStart(2, '0')
        return res
    }

    const timeRet = (time: number) => {
        setTime(time)
    }

    useEffect(() => {
        EventsManager.instance.on(
            SocketEvents.TIME_RET,
            'TimerCountdown',
            timeRet
        )
    }, [])

    // onBeforeDestroy
    useEffect(
        () => () => {
            EventsManager.instance.off(SocketEvents.TIME_RET, 'TimerCountdown')
        },
        []
    )

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
