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
  <section :id="hrefs.home" class="home grid grid-rows-[auto_1fr_auto] items-center relative">
    <Header />

    <div class="grid grid-cols-[2fr,1fr] items-center">
      <LeftSection />

      <RightSection />
    </div>

    <SocialMedia class="social-media" />
  </section>
</template>

<style>
.home {
  padding: 0 100px;
  overflow: hidden;
  position: absolute;
  width: 100%;
  height: 100vh;
  left: 0px;
  top: 0px;

  background: linear-gradient(0deg, rgba(9, 20, 39, 0.8), rgba(9, 20, 39, 0.8)),
    url("/assets/images/office-bg.png") no-repeat center center;
  background-size: cover;
}

@media only screen and (min-width: 2000px) {
  .home > div {
    max-width: 1440px;
    width: 1440px;
    margin: 0 auto;
    transition: all 0.5s ease-in-out;
  }

  .home > .social-media {
    margin-bottom: 30px;
  }
}
</style>
