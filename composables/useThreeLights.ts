import type { PerspectiveCamera, Scene } from 'three'
import { AmbientLight, PointLight } from 'three'

export default function useThreeLights(
  scene: Scene,
  camera: PerspectiveCamera,
) {
  const ambientLight = new AmbientLight(0xFFFFFF)
  scene.add(ambientLight)

  const pointLight = new PointLight(0xFFFFFF, 15)
  camera.add(pointLight)
  scene.add(camera)

  scene.add(ambientLight)
  scene.add(pointLight)
}
