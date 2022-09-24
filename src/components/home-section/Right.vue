<script setup lang="ts">
import VueIcon from "@icons/Vue.vue"
import ViteIcon from "@icons/Vite.vue"
import NuxtIcon from "@icons/Nuxt.vue"
import SvelteIcon from "@icons/Svelte.vue"
import TailwindIcon from "@icons/Tailwind.vue"
</script>

<template>
  <div class="right-section grid justify-center">
    <div class="relative">
      <img src="/assets/svg/img.png" alt="" />

      <VueIcon />

      <ViteIcon />

      <NuxtIcon />

      <SvelteIcon />

      <TailwindIcon />

      <svg
        class="absolute top-[123px] left-[-37px]"
        width="625"
        height="145"
        viewBox="0 0 625 145"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M95 29C28.3567 47.9113 -74.3572 101.499 87.6026 134.127C155.352 146.123 338.867 157.311 530.929 106.095C692.471 55.3502 610.048 11.4098 537.046 1.4647"
          stroke="url(#paint0_linear_1544_1145)"
          stroke-width="1.10545"
        ></path>
        <defs>
          <linearGradient
            id="paint0_linear_1544_1145"
            x1="516.292"
            y1="26.1523"
            x2="204.524"
            y2="12.8164"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#1099FD"></stop>
            <stop offset="0.303206" stop-color="#0FCFFE"></stop>
            <stop offset="1" stop-color="#0FFFC5"></stop>
          </linearGradient>
        </defs>
      </svg>
    </div>
  </div>
</template>
