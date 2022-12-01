<script setup lang="ts">
import Slack from "./svg/Slack.vue"
import Google from "./svg/Google.vue"
import LinkedIn from "./svg/LinkedIn.vue"
import Dribbble from "./svg/Dribbble.vue"
import Dropbox from "./svg/Dropbox.vue"
import Spotify from "./svg/Spotify.vue"
import Medium from "./svg/Medium.vue"
import Tesla from "./svg/Tesla.vue"
import Amazon from "./svg/Amazon.vue"

// social media links
</script>

<template>
  <div class="bg-secondary px-[100px] h-[178px] grid grid-flow-col content-center">
    <div class="cards overflow-x-auto hide-scrollbar">
      <div class="slide grid grid-flow-col gap-24 items-center">
        <Slack />

        <Google />

        <LinkedIn />

        <Dribbble />

        <Dropbox />

        <Spotify />

        <Medium />

        <Tesla />

        <Amazon />
      </div>
    </div>
  </div>
</template>
