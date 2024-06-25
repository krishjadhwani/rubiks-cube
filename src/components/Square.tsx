import React from 'react'
import styles from './Square.module.css'

interface SquareProps {
    color: string
    label: string
}

const Square: React.FC<SquareProps> = ({ color, label }) => {
    return (
        <div className={styles.square} style={{ backgroundColor: color }}>
            <span className={styles.label}>{label}</span>
        </div>
    )
}

export default Square