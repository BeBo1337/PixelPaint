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

    //handle cleartodo
    const handleClearClicked = () => {}

    // onBeforeDestroy
    useEffect(
        () => () => {
            EventsManager.instance.off(SocketEvents.DISBAND_GAME, 'TopBar')
        },
        []
    )

    return (
        <>
            <section className={`${styles.topBarContainer}`}>
                <button className={`${styles.backBtn}`} onClick={handleClick}>
                    LEAVE
                </button>
                <div className={`${styles.gameBtns} clearBtn`}>
                    <button onClick={handleClearClicked}>CLEAR</button>
                </div>
                <div className={`${styles.topBarContent}`}>
                    <TimerCountdown
                        time={120}
                        score={score}
                        gameMode={gameMode}
                        onTimeOver={handleTimeOver}
                    />
                </div>
            </section>
            <footer>
                <span>SCORE:</span>
                <span>{score}</span>
            </footer>
        </>
    )
}

export default TopBar
