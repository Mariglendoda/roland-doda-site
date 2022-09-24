<script setup lang="ts">
import { hrefs } from "../constants"

const links = [
  { name: "Home", href: hrefs.home },
  { name: "About", href: hrefs.about },
  { name: "Services", href: hrefs.services },
  { name: "Projects", href: hrefs.projects },
  { name: "Testimonials", href: hrefs.testimonials },
]
</script>

<template>
  <header class="grid grid-cols-[auto,1fr,auto] items-center gap-6 pt-6">
    <img src="/assets/svg/logo.svg" alt="" />

    <nav class="description grid grid-flow-col justify-end gap-6">
      <a v-for="link of links" :key="link.name" :href="link.href">{{ link.name }}</a>
    </nav>

    <button class="bg-glassmorphism rounded-10">
      <a :href="hrefs.contact" class="w-[159px] h-[60px] grid justify-center items-center">Contact Me</a>
    </button>
  </header>
</template>
