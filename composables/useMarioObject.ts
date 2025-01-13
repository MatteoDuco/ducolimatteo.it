import type { Object3D, Object3DEventMap, Scene } from 'three'
import { BoxGeometry, Mesh, MeshStandardMaterial } from 'three'
import { MTLLoader, OBJLoader } from 'three/examples/jsm/Addons.js'

export default function useMarioObjects(): Promise<Object3D<Object3DEventMap>> {
  return new Promise((resolve) => {
    const mtlLoader = new MTLLoader()
    mtlLoader.load('/mario/mariohead.mtl', (mtl) => {
      mtl.preload()
      const objLoader = new OBJLoader()
      objLoader.setMaterials(mtl)
      objLoader.load('/mario/mariohead.obj', (root) => {
        root.updateMatrixWorld()
        resolve(root)
      })
    })
  })
}
