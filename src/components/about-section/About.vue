<script setup lang="ts">
import { ref, computed } from "vue"

import SecuritySvg from "public/assets/svg/SecuritySvg.vue"
import CodingSvg from "public/assets/svg/CodingSvg.vue"
import BracketsSvg from "public/assets/svg/BracketsSvg.vue"
import MenuSvg from "public/assets/svg/MenuSvg.vue"
import CursorSvg from "public/assets/svg/CursorSvg.vue"
import FrameSvg from "public/assets/svg/FrameSvg.vue"
import PenSvg from "public/assets/svg/PenSvg.vue"
import HeartSvg from "public/assets/svg/HeartSvg.vue"

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
  <section id="about" class="grid place-content-center">
    <div class="grid content-center w-[400px]">
      <div class="relative grid content-center items-center w-[100px]">
        <div class="absolute right-1 w-[63px] h-[42px] bg-graystarry -z-10 skew-x-[30deg]"></div>
        <div class="subtitle text-orange">My Intro</div>
      </div>

      <div class="h1">About Me</div>
    </div>

    <div class="grid grid-cols-[1fr,1fr] gap-[100px] mt-[70px]">
      <div class="grid">
        <div class="relative">
          <div class="absolute circle w-[100px] h-[100px] bg-white rounded-full left-[-35px] top-[-35px] -z-10"></div>

          <div class="absolute w-[358px] h-[358px] bg-box -z-10 right-[160px] top-0">
            <div class="grid grid-flow-col justify-center items-center gap-[30px] mt-6">
              <SecuritySvg />

              <CodingSvg />

              <BracketsSvg />

              <MenuSvg />
            </div>

            <div class="grid justify-center absolute mr-5 top-[80px] left-[20px] gap-[30px]">
              <CursorSvg />

              <FrameSvg />

              <PenSvg />

              <HeartSvg />
            </div>
          </div>

          <img class="absolute left-[72px] top-[72px]" src="assets/images/rolanddoda.png" alt="" />
        </div>

        <div v-if="dispplayText" class="grid content-start gap-[20px] mt-[250px] ml-[50px]">
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

      <div class="grid gap-[24px] content-start">
        <div class="grid grid-flow-col justify-start gap-[40px]">
          <div
            class="w-[182px] h-[167px] grid justify-items-center content-center gap-[5px] bg-box"
            v-for="(box, index) of boxes"
            :key="index"
          >
            <div class="box-icon">
              <img :src="box.img" alt="" />
            </div>

            <div class="h3">{{ box.title }}</div>

            <div class="subtitle">{{ box.text }}</div>
          </div>
        </div>

        <div class="about-self relative w-[619px] h-[152px] overflow-hidden">
          <div class="grid gap-[10px] text-[#80A4C2]">
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

          <div class="linear-text absolute w-full h-[104px] bottom-0 bg-hide"></div>
        </div>

        <div>
          <button class="text-btn bg-white text-primary rounded-10">
            <a class="w-[159px] h-[60px] grid justify-center items-center" @click="readMoreBtn">
              {{ dispplayText ? "Show Less" : "Show More" }}
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
