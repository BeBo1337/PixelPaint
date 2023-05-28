import { useState, useEffect, FC, useMemo } from 'react'
import { Constants, Modes } from '../utils/GameConstants'
import { GlobalHotKeys } from 'react-hotkeys'
import { Colors } from '../utils/ColorsConstants'
import '../assets/ColorPicker.scss'
interface ColorPickerProps {
    color?: string
    gameMode?: number
    score?: number
    changeColor: Function
}

const ColorPicker: FC<ColorPickerProps & any> = ({
    color,
    score
}: ColorPickerProps) => {
    const colorOptions = [
        { color: Colors.TILE_COLOR_A, label: 'blue' },
        { color: Colors.TILE_COLOR_B, label: 'green' },
        { color: Colors.TILE_COLOR_C, label: 'red' },
        { color: Colors.TILE_COLOR_D, label: 'yellow' },
        { color: Colors.TILE_COLOR_E, label: 'white' },
        { color: Colors.TILE_COLOR_F, label: 'pink' }
    ]

    const handleKeyPress = (e: KeyboardEvent) => {
        if (!e) {
            return
        }
        switch (e.key) {
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
                const index = parseInt(e.key) - 1
                dispatchColorEvent(colorOptions[index].color)
                break
        }
    }

    const dispatchColorEvent = (color: string) => {
        window.dispatchEvent(
            new CustomEvent('color-change', {
                bubbles: true,
                detail: color
            })
        )
    }

    useEffect(() => {
        window.addEventListener('keypress', handleKeyPress)
        return () => window.removeEventListener('keypress', handleKeyPress)
    }, [])

    const visibleHandler = (color: string): Boolean => {
        if (
            score !== undefined &&
            score < 3 &&
            (color === Colors.TILE_COLOR_D ||
                color === Colors.TILE_COLOR_E ||
                color === Colors.TILE_COLOR_F)
        )
            return false
        if (
            score !== undefined &&
            score < 10 &&
            (color === Colors.TILE_COLOR_E || color === Colors.TILE_COLOR_F)
        )
            return false
        if (score !== undefined && score < 20 && color === Colors.TILE_COLOR_F)
            return false
        return true
    }

    return (
        <section className="colorPickerContainer">
            {colorOptions.map((option) => (
                <div
                    key={option.color}
                    className={`colorItem ${
                        color === option.color ? 'selected' : ''
                    }`}
                    style={{
                        backgroundColor: option.color,
                        display: visibleHandler(option.color)
                            ? 'visible'
                            : 'none'
                    }}
                    onClick={() => dispatchColorEvent(option.color)}
                ></div>
            ))}
        </section>
    )
}

export default ColorPicker
