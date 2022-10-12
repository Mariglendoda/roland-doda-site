<script setup lang="ts">
import { ref } from "vue"

const services = ref([
  {
    title: "Planning",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu donec dui massa scelerisque felis consectetur.",
    img: "assets/images/planning.png",
  },
  {
    title: "Development",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu donec dui massa scelerisque felis consectetur.",
    img: "assets/images/development.png",
  },
  {
    title: "High Quality Code",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu donec dui massa scelerisque felis consectetur.",
    img: "assets/images/high-quality.png",
  },
  {
    title: "The Best Support",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu donec dui massa scelerisque felis consectetur.",
    img: "assets/images/the-best-minds.png",
  },
  {
    title: "UX/UI Design",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu donec dui massa scelerisque felis consectetur.",
    img: "assets/images/ux-ui-design.png",
  },
  {
    title: "Lunch",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu donec dui massa scelerisque felis consectetur.",
    img: "assets/images/lunch.png",
  },
])
</script>

<template>
  <div
    class="hover:service grid justify-items-center text-center gap-[15px] w-[370px] p-10 bg-primary rounded-10"
    v-for="service of services"
    :key="service.title"
  >
    <div class="img">
      <img :src="service.img" alt="" />
    </div>

    <div class="title">{{ service.title }}</div>

    <div class="description">
      {{ service.description }}
    </div>
  </div>
</template>

<style>
/* .service-item:hover {
  background: #011c32;
  box-shadow: 0px 8px 40px rgba(44, 97, 123, 0.25), inset 10px 10px 24px rgba(12, 53, 86, 0.45),
    inset -10px -10px 28px #010e18;
  backdrop-filter: blur(2.5px);
} */
</style>
