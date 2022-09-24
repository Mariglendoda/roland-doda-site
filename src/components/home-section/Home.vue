<script setup lang="ts">
import { hrefs } from "../../constants"
// Components
import LeftSection from "./Left.vue"
import RightSection from "./Right.vue"
</script>

<template>
  <section :id="hrefs.home">
    <LeftSection />
    <RightSection />
  </section>
</template>
