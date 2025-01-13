import { BoxGeometry, Mesh, MeshStandardMaterial } from 'three'

export default function useThreeObjects() {
  const geometry = new BoxGeometry(2, 2, 2)
  const material = new MeshStandardMaterial({ color: 0x00FF00 })
  const cube = new Mesh(geometry, material)

  return { cube }
}
