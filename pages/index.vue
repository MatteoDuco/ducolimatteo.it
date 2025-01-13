<script lang="ts" setup>
import * as THREE from 'three'
import { onMounted, ref } from 'vue'
import useMarioObject from '~/composables/useMarioObject'
import useThreeCamera from '~/composables/useThreeCamera'
import useThreeLights from '~/composables/useThreeLights'
import useThreeObjects from '~/composables/useThreeObjects'
import useThreeRenderer from '~/composables/useThreeRenderer'
import useThreeScene from '~/composables/useThreeScene'

const { config } = useAppConfig()
definePageMeta({ layout: 'page' })
useHead({ titleTemplate: '', title: config?.name || 'Nuxt 3 Awesome Starter' })

const threeCanvas = ref() as Ref<HTMLDivElement>

onMounted(async () => {
  const scene = useThreeScene()
  const camera = useThreeCamera()
  const renderer = useThreeRenderer(threeCanvas.value)
  useThreeLights(scene)
  const { cube } = useThreeObjects()
  scene.add(cube)
  // mario è nero
  const mario = await useMarioObject()
  scene.add(mario)
  mario.scale.set(0.5, 0.5, 0.5)

  // Animation loop
  const animate = () => {
    requestAnimationFrame(animate)
    cube.rotation.x += 0.01
    cube.rotation.y += 0.01
    mario.rotation.x += 0.01
    mario.rotation.y += 0.01
    renderer.render(scene, camera)
  }
  animate()
})
</script>

<template>
  <div>
    <div class="h-screen flex flex-col xl:flex-row items-center justify-start pt-16 xl:pl-16 xl:pt-0">
      <div class="text-center xl:text-left space-y-5">
        <h1 class="text-6xl font-bold text-cyan-300 mb-2 tracking-wide">
          Matteo Ducoli
        </h1>
        <h2 class="text-l text-blue-200 tracking-wide uppercase">
          Freelance full stack developer and software engineer
        </h2>
      </div>
      <div ref="threeCanvas" class="fixed" />
    </div>
  </div>
</template>

  <style>
  </style>
