import React, { useCallback } from 'react'
import Cube from './components/Cube'
import Controls, { FaceName } from './components/Controls'
import useCube from './hooks/useCube'
import styles from './App.module.css'

const App: React.FC = React.memo(() => {
  const { cube, rotateFace, resetCube } = useCube()

  const handleRotate = useCallback((face: FaceName, isClockwise: boolean) => {
    rotateFace(face, isClockwise)
  }, [rotateFace])

  const handleReset = useCallback(() => {
    resetCube()
  }, [resetCube])

  return (
    <div className={styles.app}>
      <h1 className={styles.title}>Rubiks Cube</h1>
      <div className={styles.cubeContainer}>
        <Cube cube={cube} />
      </div>
      <div className={styles.controlsContainer}>
        <Controls onRotate={handleRotate} resetCube={handleReset} />
      </div>
      <p className={styles.instruction}>
        Click on the buttons to rotate the cube faces. Use the Reset button to return to the initial state.
      </p>
    </div>
  )
})

App.displayName = 'App'

export default App