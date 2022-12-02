<script setup lang="ts">
import { hrefs } from "../constants"

const links = [
  { name: "Home", href: hrefs.home },
  { name: "About", href: hrefs.about },
  { name: "Projects", href: hrefs.projects },
  { name: "Services", href: hrefs.services },
  { name: "Articles", href: hrefs.articles },
  { name: "Testimonials", href: hrefs.testimonials },
]
</script>

<template>
  <div class="grid grid-cols-[auto,1fr,auto] items-center gap-6 animate-header">
    <div class="relative w-[165px] h-[110px]">
      <img class="absolute top-[30px]" src="/assets/svg/logo.svg" alt="Roland's logo" />
    </div>

    <nav class="nav__links description grid grid-flow-col justify-end gap-6">
      <a class="nav__link" v-for="link of links" :key="link.name" :href="link.href">{{ link.name }}</a>
    </nav>

    <button class="bg-white text-primary rounded-10">
      <a :href="hrefs.contact" class="w-[159px] h-[60px] grid justify-center items-center font-medium">Contact Me</a>
    </button>
  </div>
</template>

<style>
.animate-header {
  opacity: 0;
  animation: animateHeader 2s ease-in-out forwards 1s;
}

@keyframes animateHeader {
  to {
    opacity: 1;
  }
}
</style>
