import { useState } from 'react'

type FaceName = 'U' | 'F' | 'R' | 'B' | 'L' | 'D'

interface Square {
    color: string
    label: string
}

export type CubeState = Record<FaceName, Square[]>

const initialState: CubeState = {
    U: Array(9).fill(null).map((_, i) => ({ color: 'white', label: `U${i + 1}` })),
    F: Array(9).fill(null).map((_, i) => ({ color: 'green', label: `F${i + 1}` })),
    R: Array(9).fill(null).map((_, i) => ({ color: 'red', label: `R${i + 1}` })),
    B: Array(9).fill(null).map((_, i) => ({ color: 'blue', label: `B${i + 1}` })),
    L: Array(9).fill(null).map((_, i) => ({ color: 'orange', label: `L${i + 1}` })),
    D: Array(9).fill(null).map((_, i) => ({ color: 'yellow', label: `D${i + 1}` })),
}

type AdjacentFaces = [FaceName, number[], FaceName, number[], FaceName, number[], FaceName, number[]]

const adjacentFacesMap: Record<FaceName, AdjacentFaces> = {
    U: ['F', [0, 1, 2], 'R', [0, 1, 2], 'B', [0, 1, 2], 'L', [0, 1, 2]],
    F: ['U', [6, 7, 8], 'R', [0, 3, 6], 'D', [2, 1, 0], 'L', [8, 5, 2]],
    R: ['U', [8, 5, 2], 'B', [0, 3, 6], 'D', [8, 5, 2], 'F', [8, 5, 2]],
    B: ['U', [2, 1, 0], 'L', [0, 3, 6], 'D', [6, 7, 8], 'R', [8, 5, 2]],
    L: ['U', [0, 3, 6], 'F', [0, 3, 6], 'D', [0, 3, 6], 'B', [8, 5, 2]],
    D: ['F', [6, 7, 8], 'L', [6, 7, 8], 'B', [6, 7, 8], 'R', [6, 7, 8]],
}

const useCube = () => {
    const [cube, setCube] = useState<CubeState>(initialState)

    const rotateFace = (face: FaceName, isClockwise: boolean) => {
        setCube(prevCube => {
            const newCube = { ...prevCube }

            // Rotate the face itself
            newCube[face] = rotateFaceArray(newCube[face], isClockwise)

            // Rotate adjacent faces
            rotateAdjacentFaces(newCube, face, isClockwise)

            return newCube
        })
    }

    return { cube, rotateFace }
}

const rotateFaceArray = (face: Square[], isClockwise: boolean): Square[] => {
    const newFace = [...face]
    if (isClockwise) {
        return [newFace[6], newFace[3], newFace[0], newFace[7], newFace[4], newFace[1], newFace[8], newFace[5], newFace[2]]
    } else {
        return [newFace[2], newFace[5], newFace[8], newFace[1], newFace[4], newFace[7], newFace[0], newFace[3], newFace[6]]
    }
}

const rotateAdjacentFaces = (cube: CubeState, face: FaceName, isClockwise: boolean) => {
    const adjacentFaces = adjacentFacesMap[face]

    const [face1, indices1, face2, indices2, face3, indices3, face4, indices4] = adjacentFaces

    if (isClockwise) {
        const temp = indices1.map(i => cube[face1][i])
        indices1.forEach((i, idx) => { cube[face1][i] = cube[face4][indices4[idx]] })
        indices4.forEach((i, idx) => { cube[face4][i] = cube[face3][indices3[idx]] })
        indices3.forEach((i, idx) => { cube[face3][i] = cube[face2][indices2[idx]] })
        indices2.forEach((i, idx) => { cube[face2][i] = temp[idx] })
    } else {
        const temp = indices1.map(i => cube[face1][i])
        indices1.forEach((i, idx) => { cube[face1][i] = cube[face2][indices2[idx]] })
        indices2.forEach((i, idx) => { cube[face2][i] = cube[face3][indices3[idx]] })
        indices3.forEach((i, idx) => { cube[face3][i] = cube[face4][indices4[idx]] })
        indices4.forEach((i, idx) => { cube[face4][i] = temp[idx] })
    }
}

export default useCube