import React from 'react'

type FaceName = 'U' | 'F' | 'R' | 'B' | 'L' | 'D'

interface ControlsProps {
    onRotate: (face: FaceName, isClockwise: boolean) => void
}

const Controls: React.FC<ControlsProps> = ({ onRotate }) => {
    const faces: FaceName[] = ['U', 'F', 'R', 'B', 'L', 'D']

    return (
        <div>
            {faces.map(face => (
                <div key={face}>
                    <button onClick={() => onRotate(face, true)}>{face} CW</button>
                    <button onClick={() => onRotate(face, false)}>{face} CCW</button>
                </div>
            ))}
        </div>
    )
}

export default Controls