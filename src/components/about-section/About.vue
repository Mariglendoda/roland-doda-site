<script setup lang="ts">
import { ref, computed } from "vue"

import DownloadSvg from "public/assets/svg/DownloadSvg.vue"

const boxes = ref([
  { img: "assets/images/stackoverflow.png", title: "Answers", text: "240" },
  { img: "assets/images/dev.png", title: "Views", text: "50.000+" },
  { img: "assets/images/articles.png", title: "Articles", text: "8+ Written" },
])

const interests = ref([
  { img: "assets/images/music.png", text: "music" },
  { img: "assets/images/travel.png", text: "travel" },
  { img: "assets/images/movie.png", text: "movie" },
  { img: "assets/images/photo.png", text: "photo" },
])

const dispplayText = ref(false)

const readMoreBtn = () => {
  dispplayText.value = !dispplayText.value
  document.querySelector(".linear-text").classList.toggle("hidden")
  document.querySelector(".about-self").classList.toggle("showContent")
}
</script>

<template>
  <section id="about" class="grid items-center px-[100px] mt-[100px]">
    <div class="grid grid-flow-col gap-10">
      <div class="grid items-start">
        <img src="../../../public/assets/images/Hero Image.png" alt="" />

        <div v-if="dispplayText" class="grid content-start gap-[20px]">
          <div class="h2">My interests</div>

          <div class="grid grid-flow-col justify-start gap-[24px]">
            <div class="grid grid-flow-col justify-start gap-[5px]" v-for="(interest, index) of interests" :key="index">
              <div class="icon">
                <img :src="interest.img" alt="" />
              </div>
              <div class="description capitalize text-[#80A4C2]">{{ interest.text }}</div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div>
          <p class="text-24 font-bold text-yellow">My Intro</p>
          <div class="h1 leading-[72px]">About Me</div>
        </div>

        <div class="about-self relative h-[213px] overflow-hidden">
          <div class="grid gap-[10px] text-lightBlue">
            <p>
              Hi, my name is Roland Doda and I am from Albania. Even though my programming journey started in 2013 and I
              have experience with Java, PHP, and Laravel, since 2017 I have been focusing only on the Frontend and I
              love it.
            </p>

            <p>
              I love building large-scale, responsive, and high-performance applications following best patterns &
              practices as well as building beautiful user interfaces following a design system.
            </p>

            <p>
              I consider myself highly skilled in Html, CSS, and Javascript. My favorite framework is Vue.js and I like
              writing articles about it as well as helping other developers for example by answering stack Overflow
              questions. In fact, in SO and Pluralsight I am an expert in Vue & Javascript. Some of my greatest
              achievements working for different companies are: Designing and building the frontend architecture from
              scratch Converting an application from Vue 2 to Vue 3 Converting an application from React to Vue
              Analyzing and creating a design-system Figma Code Automating common tasks, refactoring code, and reducing
              app size.
            </p>

            <p>
              I am a person who understands the importance of teamwork, collaboration, and communication and I always
              look forward to learning from my colleagues as well as sharing my knowledge with them. I love helping
              others and that's why on my StackOverflow profile I have more than 240 answers. I also like writing
              articles and I have a few that have reached more than 20,000 views.
            </p>
          </div>

          <div class="linear-text absolute w-full h-[131px] bottom-0 bg-hide"></div>
        </div>

        <div class="grid grid-flow-col justify-start gap-5 mt-[35px]">
          <button class="text-btn bg-white text-primary rounded-10">
            <a class="h-[60px] px-[33px] grid justify-center items-center" @click="readMoreBtn">
              {{ dispplayText ? "Show Less" : "Show More" }}
            </a>
          </button>

          <button class="text-btn border-2 border-white text-white rounded-10">
            <a class="h-[60px] grid grid-flow-col px-[33px] gap-2 justify-center items-center">
              <DownloadSvg />

              Download CV
            </a>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
.showContent {
  overflow: visible;
  height: auto;
}
</style>
