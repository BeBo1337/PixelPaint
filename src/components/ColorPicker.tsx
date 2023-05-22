import { useState, useEffect, FC, useMemo } from 'react'
import { Constants, Modes } from '../utils/GameConstants'
import { GlobalHotKeys } from 'react-hotkeys'
import { Colors } from '../utils/ColorsConstants'
import styles from './styles.module.scss'

interface ColorPickerProps {
    color?: string
    gameMode?: number
    score?: number
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
    score,
    changeColor
}: ColorPickerProps) => {
    const colorOptions = [
        { color: Colors.TILE_COLOR_A, label: 'blue' },
        { color: Colors.TILE_COLOR_B, label: 'green' },
        { color: Colors.TILE_COLOR_C, label: 'red' },
        { color: Colors.TILE_COLOR_D, label: 'yellow' },
        { color: Colors.TILE_COLOR_E, label: 'white' },
        { color: Colors.TILE_COLOR_F, label: 'pink' }
    ];

    const [selectedColor, setSelectedColor] = useState<string>(
        color || colorOptions[0].color
    )

    const handleColorChange = (colorToChange: string) => {
        setSelectedColor(colorToChange)
        changeColor(colorToChange)
    }

    const handlers = useMemo(() => ({
        ONE: () => {
            handleColorChange(colorOptions[0].color)
        },
        TWO: () => {
            handleColorChange(colorOptions[1].color)
        },
        THREE: () => {
            handleColorChange(colorOptions[2].color)
        },
        FOUR: () => {
            handleColorChange(colorOptions[3].color)
        },
        FIVE: () => {
            handleColorChange(colorOptions[4].color)
        },
        SIX: () => {
            handleColorChange(colorOptions[5].color)
        }
    }), [colorOptions]);

    return (
        <GlobalHotKeys keyMap={keyMap} handlers={handlers}>
            <section className={`${styles.colorPickerContainer}`}>
                {colorOptions.map(option => (
                    <div
                        key={option.color}
                        className={`${styles.colorItem} ${
                            selectedColor === option.color
                                ? styles.selected
                                : ''
                        }`}
                        style={{ backgroundColor: option.color }}
                        onClick={() => handleColorChange(option.color)}
                    ></div>
                ))}
            </section>
        </GlobalHotKeys>
    )
}

export default ColorPicker
