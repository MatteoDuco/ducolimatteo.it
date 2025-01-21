import type { Object3D, Object3DEventMap, Scene } from 'three'
// import { BoxGeometry, Mesh, MeshStandardMaterial } from 'three'
import { MTLLoader, OBJLoader } from 'three/examples/jsm/Addons.js'

const MARIO_MTL = '/mario/mariohead.mtl'
const MARIO_OBJ = '/mario/mariohead.OBJ'

export default function useMarioObjects(): Promise<Object3D<Object3DEventMap>> {
  return new Promise((resolve) => {
    const mtlLoader = new MTLLoader()
    mtlLoader.load(MARIO_MTL, (mtl) => {
      mtl.preload()
      const objLoader = new OBJLoader()
      objLoader.setMaterials(mtl)
      objLoader.load(MARIO_OBJ, (root) => {
        /* root.updateMatrixWorld() */
        resolve(root)
      })
    })
  })
}
