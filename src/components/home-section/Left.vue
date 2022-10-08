<script setup lang="ts">
import LineIcon from "./svg/Line.vue"
import StackOverflowIcon from "./svg/StackOverflow.vue"
import GithubIcon from "./svg/Github.vue"
import DevtoIcon from "./svg/Devto.vue"
import Github2Icon from "./svg/Github2.vue"

const stats = [
  { iconComponent: StackOverflowIcon, text: "~21,000 reputation" },
  { iconComponent: GithubIcon, text: "47 followers" },
  { iconComponent: DevtoIcon, text: "50,000+ total post views" },
]
</script>

<template>
  <div class="grid content-center">
    <div class="h2 text-style w-[380px]">Hi 👋 my name is Roland Doda.</div>

    <div class="relative">
      <div class="h1 text-style w-[510px]">A Professional Frontend Developer</div>
      <LineIcon class="absolute top-[62px] left-[100px]" />
    </div>

    <div class="grid gap-1">
      <div v-for="stat of stats" :key="stat.text" class="flex items-center gap-1">
        <component :is="stat.iconComponent" />
        <div>{{ stat.text }}</div>
      </div>
    </div>

    <div class="flex gap-4 mt-3">
      <div
        class="flex flex-row justify-center justify-items-center items-center w-[308px] bg-glassmorphism rounded-[10px]"
      >
        <Github2Icon />

        <button class="p bg-gradient w-[235px] h-[60px] rounded-[10px] text-primary capitalize">
          check out my gitHub
        </button>
      </div>

      <button class="p w-[161px] h-[63px] bg-glassmorphism rounded-[10px] capitalize">download CV</button>
    </div>
  </div>
</template>

<style>
.text-style {
  background: linear-gradient(269.92deg, #1099fd 17.53%, #0fcffe 32.76%, #0fffc5 67.76%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
