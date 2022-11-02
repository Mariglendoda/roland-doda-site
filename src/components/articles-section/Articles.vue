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

    <div class="relative overflow-x-auto hide-scrollbar grid grid-flow-col justify-start gap-6 items-center">
      <div class="grid grid-flow-col justify-start gap-6 items-center">
        <div v-for="article of articles">
          <div class="w-[380px] h-[283px] rounded-t-[12px]">
            <img class="rounded-t-[12px]" :src="article.img" :alt="article.title" />
          </div>

          <div class="card">
            <div class="h3">{{ article.title }}</div>

            <div class="w-[332px] h-[48px] ellipsis-3 subtitle text-[#80A4C2]">
              {{ article.description }}
            </div>

            <div class="footer-work__card grid grid-cols-[auto,1fr] items-center w-[100%] gap-1">
              <button class="btn">
                <p>Read Article</p>

                <svg width="24" height="24" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M8.59 16.59L13.17 12L8.59 7.41L10 6l6 6l-6 6l-1.41-1.41z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div class="grid absolute right-0 w-[100px] h-[100%] bg-linear-card"></div>
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

.btn {
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  align-content: center;
  padding: 12px;
  width: 100%;
  height: 41px;
  background: linear-gradient(168deg, rgba(255, 255, 255, 0.4) 7.84%, rgba(255, 255, 255, 0.1) 92.16%);
  border-radius: 6px;
  font-size: 14px;
}
</style>
