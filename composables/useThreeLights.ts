import type { PerspectiveCamera, Scene } from 'three'
import { AmbientLight, HemisphereLight, PointLight } from 'three'

export default function useThreeLights(scene: Scene, camera: PerspectiveCamera) {
  /* const ambientLight = new AmbientLight(0x404040, 0.5)
  scene.add(ambientLight) */

  /* const pointLight = new PointLight(0xFFFFFF, 1)
  pointLight.position.set(10, 0, 0)
  scene.add(pointLight) */

  const ambientLight = new AmbientLight(0xFFFFFF)
  scene.add(ambientLight)

  const pointLight = new PointLight(0xFFFFFF, 15)
  camera.add(pointLight)
  scene.add(camera)

  /*   const skyColor = 0xB1E1FF // light blue
  const groundColor = 0xB97A20 // brownish orange
  const intensity = 0.6
  const light = new HemisphereLight(skyColor, groundColor, intensity) */

  scene.add(ambientLight)
  scene.add(pointLight)
}
