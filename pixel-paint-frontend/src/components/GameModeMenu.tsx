import React, { useState, FC, MouseEvent } from 'react'
import styles from './styles.module.scss'

interface DropdownProps {
    onSelectOption: (option: string) => void
    isModeSelected: boolean
}

const DropdownMenu: FC<DropdownProps> = ({
    onSelectOption,
    isModeSelected
}: DropdownProps) => {
    const [isOpen, setIsOpen] = useState(false)
    const [selectedOption, setSelectedOption] = useState('Select Game Mode')

    const handleToggle = () => {
        setIsOpen(!isOpen)
    }

    const handleOptionSelect = (option: string) => {
        setSelectedOption(option)
        onSelectOption(option)
        setIsOpen(false)
    }

    return (
        <section className={`${styles.dropdown} `}>
            <p
                className={`${styles.dropdownToggle} ${
                    isModeSelected ? styles.modeError : ''
                }`}
                onClick={handleToggle}
            >
                {selectedOption}
            </p>
            <ul className={`${styles.dropdownMenu} ${isOpen && styles.fadeIn}`}>
                <li onClick={() => handleOptionSelect('Classic')}>Classic</li>
                <li onClick={() => handleOptionSelect('CO-OP Classic')}>
                    CO-OP Classic
                </li>
                <li onClick={() => handleOptionSelect('Paint')}>Paint</li>
                <li onClick={() => handleOptionSelect('CO-OP Paint')}>
                    CO-OP Paint
                </li>
                <li onClick={() => handleOptionSelect('Memory')}>Memory</li>
                <li onClick={() => handleOptionSelect('CO-OP Memory')}>
                    CO-OP Memory
                </li>
            </ul>
        </section>
    )
}

export default DropdownMenu
