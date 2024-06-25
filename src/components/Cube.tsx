// src/components/Cube.tsx
import React from 'react'
import Face from './Face'
import { CubeState } from '../hooks/useCube'
import styles from './Cube.module.css'

interface CubeProps {
    cube: CubeState
}

const Cube: React.FC<CubeProps> = ({ cube }) => {

    return (
        <div className={styles.cube}>
            <div className={styles.row}>
                <div className={styles.spacer}></div>
                <Face squares={cube.U} faceLabel="U" />
            </div>
            <div className={styles.row}>
                <Face squares={cube.L} faceLabel="L" />
                <Face squares={cube.F} faceLabel="F" />
                <Face squares={cube.R} faceLabel="R" />
                <Face squares={cube.B} faceLabel="B" />
            </div>
            <div className={styles.row}>
                <div className={styles.spacer}></div>
                <Face squares={cube.D} faceLabel="D" />
            </div>
        </div>
    )
}

export default Cube