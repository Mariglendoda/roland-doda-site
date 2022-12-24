<script setup lang="ts">
import { hrefs } from "../../constants"
// Components
import Header from "@components/home-section/Header.vue"
import Content from "./Content.vue";
</script>

<template>
  <section
    :id="hrefs.home"
    class="home w-full h-full overflow-hidden grid grid-rows-[auto_1fr_auto] items-center bg-no-repeat"
  >
    <Header />

    <!-- <div class="px-[100px]">
      <div class="text-24">Hi 👋 my name is Roland Doda.</div>
      <div class="w-[510px] h1">I’m a Professional Frontend Developer</div>
    </div> -->

    <Content/>
  </section>
</template>
