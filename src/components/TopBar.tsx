import { FC, useState, useEffect } from 'react'
import styles from './styles.module.scss'
import TimerCountdown from './TimerCountdown'

interface TopBarProps {
    timeOverFunction: Function
    score: number
}

const TopBar: FC<TopBarProps> = ({ timeOverFunction, score }: TopBarProps) => {
    return (
        <div className={`${styles.topBarContainer}`}>
            <TimerCountdown
                time={30}
                isWarning={false}
                score={score}
                onTimeOver={timeOverFunction}
            />
            <h1>SCORE: {score}</h1>
        </div>
    )
}

export default TopBar
