import React, { useState, FC, MouseEvent } from 'react'
import styles from './styles.module.scss'
interface DropdownProps {
    onSelectOption: (option: string) => void
}

const DropdownMenu: FC<DropdownProps> = ({ onSelectOption }: DropdownProps) => {
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
        <section className={`${styles.dropdown}`}>

            <p className={`${styles.dropdownToggle}`} onClick={handleToggle}>
                {selectedOption}
            </p>
            <ul className={`${styles.dropdownMenu} ${isOpen && styles.fadeIn}`}>
                <li onClick={() => handleOptionSelect('Classic')}>Classic</li>
                <li onClick={() => handleOptionSelect('Memory')}>Memory</li>
                <li onClick={() => handleOptionSelect('Paint')}>Paint</li>
            </ul>
        </section>
    )
}

export default DropdownMenu
