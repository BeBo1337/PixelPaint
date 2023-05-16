import { useState, useEffect, FC } from 'react'
import { Button } from 'rsuite'
import { Modes } from '../utils/GameConstants'

interface ColorPickerProps {
    color?: string
    gameMode?: number
    changeColor: Function
}

const ColorPicker: FC<ColorPickerProps> = ({
    color,
    gameMode,
    changeColor
}: ColorPickerProps) => {
    const handleColorChange = (colorToChange: string) => {
        changeColor(colorToChange)
    }

    return (
        <div>
            <Button
                appearance="primary"
                color="blue"
                onClick={() => handleColorChange('blue')}
            >
                BLUE
            </Button>
            <Button
                appearance="primary"
                color="green"
                onClick={() => handleColorChange('green')}
            >
                GREEN
            </Button>
            <Button
                appearance="primary"
                color="red"
                onClick={() => handleColorChange('red')}
            >
                RED
            </Button>
            <Button
                appearance="primary"
                color="yellow"
                onClick={() => handleColorChange('yellow')}
            >
                YELLOW
            </Button>
        </div>
    )
}

export default ColorPicker
