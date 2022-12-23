<script setup lang="ts">
import { hrefs } from "../../constants"
// Components
import Header from "@components/home-section/Header.vue"
</script>

<template>
  <section
    :id="hrefs.home"
    class="home w-full h-full overflow-hidden grid grid-rows-[auto_1fr_auto] items-center bg-no-repeat"
  >
    <Header />
  </section>
</template>
