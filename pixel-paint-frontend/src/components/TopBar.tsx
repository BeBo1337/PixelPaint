import React, { FC, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './styles.module.scss'
import TimerCountdown from './TimerCountdown'
import EventsManager from '../services/EventsManager'
import { SocketEvents } from '../services/SocketEvents.model'
import SocketManager from '../services/SocketManager'

interface TopBarProps {
    timeOverFunction: Function
    score: number
    gameMode: number
    handleBack: Function
}

const TopBar: FC<TopBarProps> = ({
    timeOverFunction,
    score,
    gameMode,
    handleBack
}: TopBarProps) => {
    const navigate = useNavigate()

    const handleClick = () => {
        EventsManager.instance.trigger(
            SocketEvents.ON_GAME_LEAVE,
            SocketManager.instance.playerId
        )
    }

    const handleTimeOver = () => {
        timeOverFunction()
    }

    const disbandGameHandler = (playerId: string) => {
        handleBack(playerId)
    }

    useEffect(() => {
        EventsManager.instance.on(
            SocketEvents.DISBAND_GAME,
            'TopBar',
            disbandGameHandler
        )
    }, [])

    // onBeforeDestroy
    useEffect(
        () => () => {
            EventsManager.instance.off(SocketEvents.DISBAND_GAME, 'TopBar')
        },
        []
    )

    return (
        <section className={`${styles.topBarContainer}`}>
            <div className={`${styles.topBarContent}`}>
                <button className={`${styles.backBtn}`} onClick={handleClick}>
                    LEAVE
                </button>
                <TimerCountdown
                    time={120}
                    score={score}
                    gameMode={gameMode}
                    onTimeOver={handleTimeOver}
                />
                <h1>SCORE: {score}</h1>
            </div>
        </section>
    )
}

export default TopBar
