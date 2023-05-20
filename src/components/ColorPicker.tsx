import { useState, useEffect, FC, useMemo } from 'react'
import { Button } from 'rsuite'
import { Modes } from '../utils/GameConstants'
import { GlobalHotKeys } from 'react-hotkeys'
import { Colors } from '../utils/ColorsConstants'

interface ColorPickerProps {
    color?: string
    gameMode?: number
    changeColor: Function
}

const keyMap = {
    ONE: '1',
    TWO: '2',
    THREE: '3',
    FOUR: '4',
    FIVE: '5',
    SIX: '6'
}

const ColorPicker: FC<ColorPickerProps> = ({
    color,
    gameMode,
    changeColor
}: ColorPickerProps) => {
    const handleColorChange = (colorToChange: string) => {
        changeColor(colorToChange)
    }

    const handlers = {
        ONE: () => {
            handleColorChange(Colors.TILE_COLOR_A)
        },
        TWO: () => {
            handleColorChange(Colors.TILE_COLOR_B)
        },
        THREE: () => {
            handleColorChange(Colors.TILE_COLOR_C)
        },
        FOUR: () => {
            handleColorChange(Colors.TILE_COLOR_D)
        },
        FIVE: () => {
            handleColorChange(Colors.TILE_COLOR_E)
        },
        SIX: () => {
            handleColorChange(Colors.TILE_COLOR_F)
        }
    }

    return (
        <GlobalHotKeys keyMap={keyMap} handlers={handlers}>
            <div>
                <Button
                    appearance="primary"
                    color="blue"
                    onClick={() => handleColorChange(Colors.TILE_COLOR_A)}
                >
                    BLUE
                </Button>
                <Button
                    appearance="primary"
                    color="green"
                    onClick={() => handleColorChange(Colors.TILE_COLOR_B)}
                >
                    GREEN
                </Button>
                <Button
                    appearance="primary"
                    color="red"
                    onClick={() => handleColorChange(Colors.TILE_COLOR_C)}
                >
                    RED
                </Button>
                <Button
                    appearance="primary"
                    color="yellow"
                    onClick={() => handleColorChange(Colors.TILE_COLOR_D)}
                >
                    YELLOW
                </Button>
                <Button
                    appearance="primary"
                    color="yellow"
                    onClick={() => handleColorChange(Colors.TILE_COLOR_E)}
                >
                    PINK
                </Button>
                <Button
                    appearance="primary"
                    color="yellow"
                    onClick={() => handleColorChange(Colors.TILE_COLOR_F)}
                >
                    WHITE
                </Button>
            </div>
        </GlobalHotKeys>
    )
}

export default ColorPicker
