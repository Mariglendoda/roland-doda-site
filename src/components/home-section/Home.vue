<script setup lang="ts">
import { hrefs } from "../../constants"
// Components
import Header from "@components/Header.vue"
import LeftSection from "./Left.vue"
import RightSection from "./Right.vue"
import SocialMedia from "./SocialMedia.vue"

// social media links
</script>

<template>
  <section :id="hrefs.home" class="grid grid-rows-[auto_1fr_auto] items-center relative bg-secondary">
    <div class="absolute w-[500px] h-full asd -z-0"></div>

    <Header />

    <div class="grid grid-cols-[2fr,1fr] items-center">
      <LeftSection />

      <RightSection />
    </div>

    <SocialMedia />
  </section>
</template>

<style>
.asd {
  opacity: 0;
  transform: scale(0) rotateX(90deg);
  background: linear-gradient(90deg, #0fffc5 0%, rgba(15, 255, 197, 0.283189) 43.23%, rgba(15, 255, 197, 0) 69.27%);
  filter: blur(250px);
  animation: animateBlur 1.5s ease-in-out forwards 0.5s;
}

@keyframes animateBlur {
  to {
    opacity: 1;
    transform: scale(1) rotateX(0deg);
  }
}
</style>
