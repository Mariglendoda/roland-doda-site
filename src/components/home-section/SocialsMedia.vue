<script setup lang="ts">
import LinkedinSvg from "./svg/LinkedinSvg.vue"
import TwitterSvg from "./svg/TwitterSvg.vue"
import GithubSvg from "./svg/GithubSvg.vue"
</script>

<template>
  <div class="grid grid-flow-col gap-5 items-center">
    <a href="https://github.com/Rolanddoda">
      <GithubSvg />
    </a>

    <a href="https://twitter.com/DodaMariglen">
      <TwitterSvg />
    </a>

    <a href="https://www.linkedin.com/in/roland-doda/">
      <LinkedinSvg />
    </a>
  </div>
</template>
