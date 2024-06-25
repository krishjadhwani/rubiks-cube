import React from 'react'
import Cube from './components/Cube'
import Controls from './components/Controls'
import useCube from './hooks/useCube'

const App: React.FC = () => {
  const { rotateFace, cube } = useCube()

  return (
    <div className="App">
      <h1>Rubiks Cube</h1>
      <Cube cube={cube} />
      <Controls onRotate={rotateFace} />
    </div>
  )
}

export default App