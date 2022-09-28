<script setup lang="ts">
import { hrefs } from "../../constants"
// Components
import LeftSection from "./Left.vue"
import RightSection from "./Right.vue"
import Header from "@components/Header.vue"
import Chart from "./Chart.vue"
</script>

<template>
  <section :id="hrefs.home" class="grid grid-rows-[auto_1fr_auto] items-center">
    <Header />

    <div class="grid grid-cols-2 items-center">
      <LeftSection />
      <RightSection />
    </div>

    <Chart />
  </section>
</template>
