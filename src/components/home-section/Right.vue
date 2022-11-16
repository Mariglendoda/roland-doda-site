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
</template>
