import React, { FC, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './styles.module.scss'
import TimerCountdown from './TimerCountdown'

interface TopBarProps {
    timeOverFunction: Function
    score: number
    timeToAdd: number
}

const TopBar: FC<TopBarProps> = ({
    timeOverFunction,
    score,
    timeToAdd
}: TopBarProps) => {
    const navigate = useNavigate()

    const handleClick = () => {
        navigate('/')
    }

    const handleTimeOver = () => {
        timeOverFunction()
    }

    return (
        <section className={`${styles.topBarContainer}`}>
            <div className={`${styles.topBarContent}`}>
                <button className={`${styles.backBtn}`} onClick={handleClick}>
                    BACK
                </button>
                <TimerCountdown
                    time={10000}
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
