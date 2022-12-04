<script setup lang="ts">
import { ref } from "vue"

import ArrowShowMoreSvg from "public/assets/svg/ArrowShowMoreSvg.vue"

const projects = ref([
  {
    name: "☕ Coffee Street",
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Et faucibus viverraasdasasd...",
    image: "assets/images/card1.png",
    link: "https://google.com",
    views: "28,628",
  },

  {
    name: "🥯 Bakery Website",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et faucibus viverraasdasasd...",
    image: "assets/images/card2.png",
    link: "https://google.com",
    views: "28,628",
  },

  {
    name: "🍔 Need Food",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et faucibus viverraasdasasd...",
    image: "assets/images/card3.png",
    link: "https://google.com",
    views: "28,628",
  },

  {
    name: "✈️ Travel App",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et faucibus viverraasdasasd...",
    image: "assets/images/card4.png",
    link: "https://google.com",
    views: "28,628",
  },

  {
    name: "👟 Shoes Store",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et faucibus viverraasdasasd...",
    image: "assets/images/card5.png",
    link: "https://google.com",
    views: "28,628",
  },

  {
    name: "✅ ClearMix",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et faucibus viverraasdasasd...",
    image: "assets/images/card6.png",
    link: "https://google.com",
    views: "28,628",
  },
])
</script>

<template>
  <section id="projects" class="bg-secondary grid gap-7 my-[100px]">
    <div class="px-[100px] grid gap-7 mt-[100px] mb-[100px]">
      <div>
        <div class="grid grid-flow-col items-center justify-between">
          <p class="text-24 font-bold text-yellow">My projects</p>

          <div class="grid grid-flow-col justify-center gap-6">
            <p class="text-yellow">See All</p>

            <ArrowShowMoreSvg />
          </div>
        </div>

        <div class="h1">Recent’s Works</div>
      </div>

      <div class="w-full grid grid-cols-[auto,auto,auto] justify-between grid-rows-[459px] gap-x-12 gap-y-10">
        <div class="card-work" v-for="(project, index) of projects" :key="index">
          <div class="card-work__image w-[380px] h-[283px]">
            <img class="rounded-t-[12px]" :src="project.image" :alt="project.name" />
          </div>

          <div class="card grid grid-flow-col justify-start items-start w-[380px] bg-glassmorphism">
            <div class="card-work__title h3">{{ project.name }}</div>

            <div class="card-work__description w-[332px] h-[48px] subtitle text-lightBlue">
              {{ project.description }}
            </div>

            <div class="footer-work__card grid grid-cols-[auto,1fr] items-center w-[100%]">
              <button class="bg-white w-[121px] h-[41px] rounded-[6px] subtitle text-primary">View Project</button>

              <div class="grid gap-1 grid-flow-col items-center justify-end">
                <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M21.8662 11.9999C21.2262 10.8899 17.7062 5.31987 11.7262 5.49987C6.19616 5.63987 2.99616 10.4999 2.12616 11.9999C2.03839 12.1519 1.99219 12.3243 1.99219 12.4999C1.99219 12.6754 2.03839 12.8479 2.12616 12.9999C2.75616 14.0899 6.12616 19.4999 12.0162 19.4999H12.2662C17.7962 19.3599 21.0062 14.4999 21.8662 12.9999C21.9539 12.8479 22.0001 12.6754 22.0001 12.4999C22.0001 12.3243 21.9539 12.1519 21.8662 11.9999ZM12.2162 17.4999C7.90616 17.5999 5.09616 13.9099 4.21616 12.4999C5.21616 10.8899 7.82616 7.59987 11.8262 7.49987C16.1162 7.38987 18.9362 11.0899 19.8262 12.4999C18.7962 14.1099 16.2162 17.3999 12.2162 17.4999Z"
                    fill="white"
                  />
                  <path
                    d="M12 8.99976C11.3078 8.99976 10.6311 9.20503 10.0555 9.58961C9.47993 9.9742 9.03133 10.5208 8.76642 11.1604C8.50152 11.7999 8.4322 12.5036 8.56725 13.1826C8.7023 13.8615 9.03564 14.4851 9.52513 14.9746C10.0146 15.4641 10.6383 15.7975 11.3172 15.9325C11.9961 16.0676 12.6999 15.9982 13.3394 15.7333C13.9789 15.4684 14.5256 15.0198 14.9101 14.4443C15.2947 13.8687 15.5 13.192 15.5 12.4998C15.5 11.5715 15.1313 10.6813 14.4749 10.0249C13.8185 9.36851 12.9283 8.99976 12 8.99976ZM12 13.9998C11.7033 13.9998 11.4133 13.9118 11.1666 13.747C10.92 13.5821 10.7277 13.3479 10.6142 13.0738C10.5007 12.7997 10.4709 12.4981 10.5288 12.2071C10.5867 11.9161 10.7296 11.6489 10.9393 11.4391C11.1491 11.2293 11.4164 11.0865 11.7074 11.0286C11.9983 10.9707 12.2999 11.0004 12.574 11.1139C12.8481 11.2275 13.0824 11.4197 13.2472 11.6664C13.412 11.9131 13.5 12.2031 13.5 12.4998C13.5 12.8976 13.342 13.2791 13.0607 13.5604C12.7794 13.8417 12.3978 13.9998 12 13.9998Z"
                    fill="white"
                  />
                </svg>

                <div class="subtitle">{{ project.views }} Views</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
