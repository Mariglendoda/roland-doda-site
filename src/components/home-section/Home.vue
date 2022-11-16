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
  <section :id="hrefs.home" class="grid grid-rows-[auto_1fr_auto] items-center">
    <Header />

    <div class="grid grid-cols-[2fr,1fr] items-center">
      <LeftSection />

      <RightSection />
    </div>

    <SocialMedia />
  </section>
</template>
