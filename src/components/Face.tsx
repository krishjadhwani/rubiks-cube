import React from 'react'
import Square from './Square'
import styles from './Face.module.css'

interface SquareData {
    color: string
    label: string
}

interface FaceProps {
    squares: SquareData[]
}

const Face: React.FC<FaceProps> = ({ squares }) => {
    return (
        <div className={styles.face}>
            {squares.map((square, index) => (
                <Square
                    key={index}
                    color={square.color}
                    label={square.label}
                />
            ))}
        </div>
    )
}

export default Face