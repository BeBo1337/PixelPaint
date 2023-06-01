import { useState, useEffect, FC, useMemo } from 'react'
import { Constants, Modes } from '../utils/GameConstants'
import { GlobalHotKeys } from 'react-hotkeys'
import { Colors } from '../utils/ColorsConstants'
import '../assets/ColorPicker.scss'
interface ColorPickerProps {
    gameMode?: number
    score?: number
}

const ColorPicker: FC<ColorPickerProps & any> = ({
    score
}: ColorPickerProps) => {
    const [color, setColor] = useState(Colors.TILE_COLOR_A)

    const colorOptions = [
        { color: Colors.TILE_COLOR_A, label: '1' },
        { color: Colors.TILE_COLOR_B, label: '2' },
        { color: Colors.TILE_COLOR_C, label: '3' },
        { color: Colors.TILE_COLOR_D, label: '4' },
        { color: Colors.TILE_COLOR_E, label: '5' },
        { color: Colors.TILE_COLOR_F, label: '6' }
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
        setColor(color)
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

    useEffect(() => {
        window.addEventListener('resize', () => {})
        return () => window.removeEventListener('resize', () => {})
    }, [])

    const visibleHandler = (color: string): Boolean => {
        if (
            score !== undefined &&
            score < 1 &&
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
        <div className="colorPickerContainer">
            {colorOptions.map((option) => {
                const isBelow768px = window.innerWidth >= 768
                const displayOrVisibility = isBelow768px
                    ? 'display'
                    : 'visibility'
                const displayOptions = isBelow768px
                    ? ['flex', 'none']
                    : ['visible', 'hidden']

                return (
                    <div
                        key={option.color}
                        className={`colorItem colorItem${option.label} ${
                            color === option.color ? 'selected' : ''
                        } `}
                        style={{
                            backgroundColor: option.color,
                            [displayOrVisibility]: visibleHandler(option.color)
                                ? displayOptions[0]
                                : displayOptions[1]
                        }}
                        onClick={() => dispatchColorEvent(option.color)}
                    >
                        <h3>{option.label}</h3>
                    </div>
                )
            })}
        </div>
    )
}

export default ColorPicker
