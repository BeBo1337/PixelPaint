import React, { FC, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './styles.module.scss'
import TimerCountdown from './TimerCountdown'

interface TopBarProps {
    timeOverFunction: Function
    score: number
    timeToAdd: number
    handleBack: Function
}

const TopBar: FC<TopBarProps> = ({
    timeOverFunction,
    score,
    timeToAdd,
    handleBack
}: TopBarProps) => {
    const navigate = useNavigate()

    const handleClick = () => {
        handleBack()
    }

    const handleTimeOver = () => {
        timeOverFunction()
    }

    return (
        <section className={`${styles.topBarContainer}`}>
            <div className={`${styles.topBarContent}`}>
                <button className={`${styles.backBtn}`} onClick={handleClick}>
                    LEAVE
                </button>
                <TimerCountdown
                    time={120}
                    score={score}
                    onTimeOver={handleTimeOver}
                    timeToAdd={timeToAdd}
                />
                <h1>SCORE: {score}</h1>
            </div>
        </section>
    )
}

export default TopBar
