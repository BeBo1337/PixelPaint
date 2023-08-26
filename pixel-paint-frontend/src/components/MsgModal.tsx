import React, { FC } from 'react'
import '../assets/MsgModal.scss'

interface ModalProps {
    onClose: () => void
    msg: string
    children?: React.ReactNode
}

const MsgModal: FC<ModalProps> = ({ onClose, msg }: ModalProps) => {
    const handleOverlayClick = () => {
        onClose()
    }

    const handleModalClick = (event: React.MouseEvent<HTMLDivElement>) => {
        event.stopPropagation()
    }

    return (
        <div className="modalOverlay" onClick={handleOverlayClick}>
            <div className="modalContent">
                <div className="modalHeader">
                    <h2>Error</h2>
                    <button className="closeBtn" onClick={onClose}>
                        x
                    </button>
                </div>
                <div className="modalBody">
                    <p> {msg}</p>
                </div>
            </div>
        </div>
    )
}

export default MsgModal
