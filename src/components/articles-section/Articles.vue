<script setup lang="ts">
import { ref } from "vue"

const articles = ref([
  {
    title: "🔙 🤔 I remember a few years...",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et faucibus viverraasdasasd...",
    href: "",
    img: "assets/images/img1.png",
  },
  {
    title: "🍍 Pinia! The recommended...",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et faucibus viverraasdasasd...",
    href: "",
    img: "assets/images/img2.png",
  },
  {
    title: "🥳 Let's build an interactive...",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et faucibus viverraasdasasd...",
    href: "",
    img: "assets/images/img3.png",
  },
  {
    title: "🚀 Deploy to Github Pages...",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et faucibus viverraasdasasd...",
    href: "",
    img: "assets/images/img4.png",
  },
])
</script>

<template>
  <section id="articles" class="px-[100px] grid gap-7 mt-24 relative">
    <div>
      <p class="text-24 font-bold text-yellow">My projects</p>
      <div class="h1">Recent’s Works</div>
    </div>

    <div class="cards overflow-x-auto hide-scrollbar">
      <div class="slide grid grid-flow-col justify-start gap-6 items-center">
        <div class="card-work" v-for="(article, index) of articles" :key="index">
          <div class="card-work__image w-[380px] h-[283px]">
            <img class="rounded-t-[12px]" :src="article.img" :alt="article.title" />
          </div>

          <div class="card">
            <div class="card-work__title h3">{{ article.title }}</div>

            <div class="card-work__description w-[332px] h-[48px] ellipsis-3 subtitle text-[#80A4C2]">
              {{ article.description }}
            </div>

            <div class="footer-work__card grid grid-cols-[auto,1fr] items-center w-[100%] gap-1">
              <button
                class="grid grid-flow-col items-center content-center p-3 rounded-[6px] subtitle bg-white text-primary"
              >
                <p>Read Article</p>

                <svg width="24" height="24" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M8.59 16.59L13.17 12L8.59 7.41L10 6l6 6l-6 6l-1.41-1.41z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
.card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 20px 24px;
  gap: 10px;
  width: 380px;
  background: linear-gradient(180.67deg, rgba(255, 255, 255, 0.4) -136.79%, rgba(255, 255, 255, 0.1) 49.83%);
  backdrop-filter: blur(45px);
  border-radius: 0px 0px 12px 12px;
}
</style>
