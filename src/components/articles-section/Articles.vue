<script setup lang="ts">
import { ref } from "vue"

const articles = ref([
  {
    title: "🔙 🤔 I remember a few years...",
    description:
      "Despite all these opinions and my colleagues trying to push me into Angular and React, I bet 100% on Vue.",
    href: "",
    img: "assets/images/vite.png",
  },
  {
    title: "🍍 Pinia! The recommended...",
    description:
      "In this article, we are going to learn how to reset stores that use function/setup syntax by creating a Pinia plugin!.",
    href: "",
    img: "assets/images/pinia.png",
  },
  {
    title: "🥳 Let's build an interactive...",
    description:
      "For the best experience reading and following the article, each heading has a branch on Github and can be seen online on Stackblitz. 💯",
    href: "",
    img: "assets/images/svg.png",
  },
  {
    title: "🚀 Deploy to Github Pages...",
    description:
      "Despite all these opinions and my colleagues trying to push me into Angular and React, I bet 100% on Vue.",
    href: "",
    img: "assets/images/githubpage.png",
  },
])
</script>

<template>
  <section id="articles" class="grid gap-6 place-content-center">
    <div class="grid grid-cols-[1fr,auto] items-center">
      <div class="grid content-center pt-[10px]">
        <div class="relative grid content-center items-center w-[100px]">
          <div class="absolute right-2 w-[63px] h-[42px] bg-graystarry -z-10 skew-x-[30deg]"></div>
          <div class="subtitle text-orange">My Articles</div>
        </div>

        <div class="h1">latest Post</div>

        <div class="grid grid-flow-col items-center justify-between">
          <div class="description text-[#80A4C2] w-[400px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu donec dui massa scelerisque felis consectetur.
            Duis vel urna ut ullamcorper velit non non. A purus faucibus velit ac natoque.
          </div>

          <button class="text-btn bg-glassmorphism rounded-10">
            <a class="w-[230px] h-[60px] grid justify-center items-center">Explore More Articles</a>
          </button>
        </div>
      </div>
    </div>

    <div class="overflow-x-auto hide-scrollbar grid grid-flow-col justify-start gap-6 items-center">
      <div class="grid gap-[10px] w-[350px]" v-for="article of articles">
        <img :src="article.img" alt="" />

        <div class="h3">{{ article.title }}</div>

        <div class="ellipsis-3">{{ article.description }}</div>
      </div>
    </div>
  </section>
</template>
