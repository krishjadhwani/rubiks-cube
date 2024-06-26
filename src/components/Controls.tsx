import React from 'react'
import styles from './Controls.module.css'

export type FaceName = 'U' | 'F' | 'R' | 'B' | 'L' | 'D'

interface ControlsProps {
    onRotate: (face: FaceName, isClockwise: boolean) => void
    resetCube: () => void
}

const Controls: React.FC<ControlsProps> = React.memo(({ onRotate, resetCube }: ControlsProps) => {
    const faces: FaceName[] = ['U', 'F', 'R', 'B', 'L', 'D']

    return (
        <div className={styles.controls}>
            {faces.map(face => (
                <div key={face} className={styles.faceControls}>
                    <button onClick={() => onRotate(face, true)}>{face} CW</button>
                    <button onClick={() => onRotate(face, false)}>{face} CCW</button>
                </div>
            ))}
            <div className={styles.resetControl}>
                <button onClick={resetCube}>Reset Cube</button>
            </div>
        </div>
    )
})

Controls.displayName = 'Controls'

export default Controls