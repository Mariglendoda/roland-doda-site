<script setup lang="ts">
import VueIcon from "./svg/VueIcon.vue"
import FigmaIcon from "./svg/FigmaIcon.vue"
import GithubIcon from "./svg/GithubIcon.vue"
import JavascriptIcon from "./svg/JavascriptIcon.vue"
import TypescriptIcon from "./svg/TypescriptIcon.vue"
import SvelteIcon from "./svg/SvelteIcon.vue"
import VisualStudioIcon from "./svg/VisualStudioIcon.vue"
import TailwindIcon from "./svg/TailwindIcon.vue"
import AvatarIcon from "./svg/AvatarIcon.vue"
import StarIcon from "./svg/StarIcon.vue"
</script>

<template>
  <div class="relative">
    <div class="right-section grid justify-center items-center relative">
      <div class="w-[406px] h-[406px] border border-white rounded-full absolute left-0 right-0 m-auto">
        <VueIcon />

        <FigmaIcon />
        <GithubIcon />
        <JavascriptIcon />
        <AvatarIcon />
        <StarIcon />
      </div>

      <div class="w-[314px] h-[314px] border border-white rounded-full absolute left-0 right-0 m-auto">
        <TypescriptIcon />
        <SvelteIcon />
        <VisualStudioIcon />
        <TailwindIcon />
      </div>
    </div>

    <div class="about grid grid-flow-col gap-[25px] absolute top-[250px] right-[-15px]">
      <div class="grid text-center justify-items-center">
        <h1 class="text-4xl font-bold text-white">6Y.</h1>
        <p class="text-[#80A4C2] mt-4">💻 Experience</p>
      </div>

      <div class="grid text-center justify-items-center">
        <h1 class="text-4xl font-bold text-white">250+</h1>
        <p class="text-[#80A4C2] mt-4">✅ Project Completed</p>
      </div>

      <div class="grid text-center justify-items-center">
        <h1 class="text-4xl font-bold text-white">10</h1>
        <p class="text-[#80A4C2] mt-4">🏆 Awards</p>
      </div>
    </div>
  </div>
</template>
