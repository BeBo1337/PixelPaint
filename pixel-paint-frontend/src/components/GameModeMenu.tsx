import React, { useState, FC } from 'react'
import styles from './styles.module.scss'

interface DropdownProps {
    onSelectOption: (option: string) => void
    isModeSelected: boolean
}

const DropdownMenu: FC<DropdownProps> = ({
    onSelectOption,
    isModeSelected
}: DropdownProps) => {
    const [isOpen, setIsOpen] = useState(true)
    const [selectedOption, setSelectedOption] = useState('Select Game Mode')

    const handleToggle = () => {}

    const selectedStyle = {
        color: 'white',
        background: 'lightcoral',
        outline: '2.5px solid black'
    }

    const options = [
        'Classic',
        'CO-OP Classic',
        'Paint',
        'CO-OP Paint',
        'Memory',
        'CO-OP Memory'
    ]

    const handleOptionSelect = (option: string) => {
        setSelectedOption(option)
        onSelectOption(option)
    }

    return (
        <>
            <p
                className={`${styles.dropdownToggle} ${
                    isModeSelected ? styles.modeError : ''
                }`}
                onClick={handleToggle}
            >
                {selectedOption}
            </p>
            <ul
                className={`${styles.dropdownMenu} ${
                    isOpen ? styles.fadeIn : ''
                }`}
            >
                {options.map((option) => (
                    <li
                        key={option}
                        style={
                            selectedOption === option
                                ? selectedStyle
                                : undefined
                        }
                        onClick={() => handleOptionSelect(option)}
                    >
                        {option}
                    </li>
                ))}
            </ul>
        </>
    )
}

export default DropdownMenu
