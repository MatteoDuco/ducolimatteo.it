<script lang="ts" setup>
import { BriefcaseIcon, CpuChipIcon, DocumentTextIcon, EnvelopeIcon } from '@heroicons/vue/20/solid'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { onMounted, ref } from 'vue'
import useMarioObject from '~/composables/useMarioObject'
import useThreeCamera from '~/composables/useThreeCamera'
import useThreeLights from '~/composables/useThreeLights'
import useThreeRenderer from '~/composables/useThreeRenderer'
import useThreeScene from '~/composables/useThreeScene'

const { config } = useAppConfig()
// definePageMeta({ layout: 'page' })

useHead({ titleTemplate: '', title: config?.name || 'Nuxt 3 Awesome Starter' })

const threeCanvas = ref() as Ref<HTMLDivElement>

onMounted(async () => {
  const scene = useThreeScene()

  const camera = useThreeCamera()

  // Handle window resizing
  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
  })

  const renderer = useThreeRenderer(threeCanvas.value)
  useThreeLights(scene, camera)

  // TODO: move to composable
  const mario = await useMarioObject()
  scene.add(mario)
  mario.scale.set(0.5, 0.5, 0.5)

  const controls = new OrbitControls(camera, renderer.domElement)
  controls.minDistance = 2
  controls.maxDistance = 10
  controls.enablePan = false
  controls.autoRotateSpeed = 2
  controls.autoRotate = true
  controls.enableDamping = true

  // Animation loop
  const animate = () => {
    controls.update()
    renderer.render(scene, camera)
  }

  renderer.setAnimationLoop(animate)
})
</script>

<template>
  <div>
    <div class="h-screen flex flex-col xl:flex-row items-center justify-start">
      <div class="text-center xl:text-left space-y-5 z-10 mt-16 xl:ml-16 xl:mt-0">
        <h1 class="text-4xl xl:text-6xl font-bold text-cyan-300 mb-2 tracking-wide">
          Matteo Ducoli
        </h1>
        <h2 class=" text-lg xl:text-l text-blue-200 tracking-wide uppercase">
          Freelance full stack developer and software engineer
        </h2>
        <div class=" flex flex-wrap space-x-4 pt-4 justify-center gap-y-2">
          <LinkBadge url="https://www.linkedin.com/in/matteo-ducoli/" :icon="BriefcaseIcon" title="LinkedIn" />
          <LinkBadge url="https://github.com/MatteoDuco" :icon="CpuChipIcon" title="GitHub" />
          <LinkBadge url="mailto:info@ducolimatteo.it" :icon="EnvelopeIcon" title="Mail" />
          <PDFModal pdf-url="/CV_MatteoDucoli.pdf" :icon="DocumentTextIcon" title="CV" />
        </div>
      </div>
      <div ref="threeCanvas" class="fixed mt-20 xl:mt-0 xl:ml-28" />
    </div>
    <app-footer />
  </div>
</template>

<style></style>
