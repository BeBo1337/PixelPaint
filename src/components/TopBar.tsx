import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './styles.module.scss'
import TimerCountdown from './TimerCountdown'

interface TopBarProps {
    timeOverFunction: Function
    score: number
}

const TopBar: FC<TopBarProps> = ({ timeOverFunction, score }: TopBarProps) => {
    const navigate = useNavigate()

    const handleClick = () => {
        navigate('/')
    }

    return (
        <section className={`${styles.topBarContainer}`}>
            <button
                className={`${styles.clearBtn} ${styles.backBtn}`}
                onClick={handleClick}
            >
                BACK
            </button>
            <TimerCountdown
                time={600}
                isWarning={false}
                score={score}
                onTimeOver={timeOverFunction}
            />
            <h1>SCORE: {score}</h1>
        </section>
    )
}

export default TopBar
