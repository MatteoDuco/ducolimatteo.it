import { PerspectiveCamera } from 'three'

export default function useThreeCamera() {
  const camera = new PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000)
  camera.position.z = 5

  return camera
}
