<script setup lang="ts">
import VueIcon from "./svg/VueIcon.vue"
import TypescriptIcon from "./svg/TypescriptIcon.vue"
import FigmaIcon from "./svg/FigmaIcon.vue"
</script>

<template>
  <div class="right-section grid justify-center items-center relative">
    <div class="w-[406px] h-[406px] border border-white rounded-full absolute left-0 right-0 m-auto">
      <VueIcon />

      <FigmaIcon />
    </div>

    <div class="w-[314px] h-[314px] border border-white rounded-full absolute left-0 right-0 m-auto">
      <TypescriptIcon />
    </div>
  </div>
</template>
