<script setup lang="ts">
import LineIcon from "./svg/Line.vue"
import GithubIcon from "./svg/Github.vue"
import DevelopingTheFutureIcon from "./svg/DevelopingTheFuture.vue"

const stats = [
  { text: "💻 Experienced Javascript Developer." },
  { text: "💘 VueJs & SvelteKit Lover." },
  { text: "👨‍ Front-end enthusiast" },
  { text: "‍💼 Vue Consultant." },
  { text: "🗃️ Modular and scalable Frontend architectures" },
]
</script>

<template>
  <div class="flex gap-4">
    <DevelopingTheFutureIcon />

    <div class="grid grid-rows-[auto,1fr,1fr,auto] gap-3">
      <div class="h2 text-style w-[380px]">Hi 👋 my name is Roland Doda.</div>

      <div class="relative">
        <div class="h1 text-style w-[510px]">I'm a Professional Frontend Developer</div>
        <LineIcon class="absolute top-[62px] left-[140px]" />
      </div>

      <div class="grid gap-1">
        <div v-for="stat of stats" :key="stat.text" class="flex items-center gap-1">
          <div class="description">{{ stat.text }}</div>
        </div>
      </div>

      <div class="flex gap-4">
        <div
          class="flex flex-row justify-center justify-items-center items-center w-[308px] bg-glassmorphism rounded-[10px]"
        >
          <GithubIcon />

          <button class="p bg-gradient w-[235px] h-[60px] rounded-[10px] text-primary capitalize">
            check out my gitHub
          </button>
        </div>

        <button class="p w-[161px] h-[63px] bg-glassmorphism rounded-[10px] capitalize">download CV</button>
      </div>
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
