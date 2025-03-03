import { WebGLRenderer } from 'three'

export default function useThreeRenderer(canvas: HTMLElement) {
  const renderer = new WebGLRenderer({
    alpha: true, // Make the renderer transparent
    antialias: true, // Smooth edges
  })
  renderer.setSize(window.innerWidth, window.innerHeight)
  renderer.setPixelRatio(window.devicePixelRatio)

  canvas.appendChild(renderer.domElement)

  // Handle window resizing
  window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight)
  })

  return renderer
}
