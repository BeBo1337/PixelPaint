import React from 'react'

const Timer: React.FC<{ max: number }> = ({ max }) => {
    const [counter, setCounter] = React.useState(max);

    React.useEffect(() => {
        if (counter > 0) {
            setTimeout(() => setCounter(counter - 1), 1000);
        }
    }, [counter]);

    return (
        <span>
            {counter}
        </span>
    )
}

export default Timer;