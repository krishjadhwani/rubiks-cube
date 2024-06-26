import React from 'react'
import Face from './Face'
import { CubeState } from '../hooks/useCube'
import styles from './Cube.module.css'

interface CubeProps {
    cube: CubeState
}

const Cube: React.FC<{ cube: CubeState }> = React.memo(({ cube }: CubeProps) => {
    return (
        <div className={styles.cube}>
            <div className={styles.row}>
                <div className={styles.spacer}></div>
                <Face squares={cube.U} />
            </div>
            <div className={styles.row}>
                <Face squares={cube.L} />
                <Face squares={cube.F} />
                <Face squares={cube.R} />
                <Face squares={cube.B} />
            </div>
            <div className={styles.row}>
                <div className={styles.spacer}></div>
                <Face squares={cube.D} />
            </div>
        </div>
    )
})

Cube.displayName = 'Cube'

export default Cube