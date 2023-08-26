import { useEffect } from 'react'
import Confetti from 'react-confetti'
interface ConfettiProps {
    isRecycleOn: boolean
}

export default (props: ConfettiProps) => {
    const { width, height } = {
        width: window.outerWidth,
        height: window.outerHeight
    }
    return (
        <Confetti
            width={width}
            height={height}
            tweenDuration={5000}
            numberOfPieces={500}
            recycle={props.isRecycleOn}
            onConfettiComplete={() => console.log('hello')}
        />
    )
}
