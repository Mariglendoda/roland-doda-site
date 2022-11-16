<script setup lang="ts">
import { hrefs } from "../../constants"
// Components

// social media links
import CardGithub from "./svg/CardGithub.vue"
import CardTwitter from "./svg/CardTwitter.vue"
import CardLinkedin from "./svg/CardLinkedin.vue"
import CardStackoverflow from "./svg/CardStackoverflow.vue"
import CardDevTo from "./svg/CardDevTo.vue"
</script>

<template>
  <div class="mb-[30px] socials flex gap-6 items-center">
    <a href="https://github.com/Rolanddoda">
      <CardGithub />
    </a>

    <a href="https://twitter.com/dev_rolandi">
      <CardTwitter />
    </a>

    <a href="https://www.linkedin.com/in/roland-doda/">
      <CardLinkedin />
    </a>
    <a href="https://stackoverflow.com/users/6385184/roland">
      <CardStackoverflow />
    </a>

    <a href="https://dev.to/the_one">
      <CardDevTo />
    </a>
  </div>
</template>
