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
    class="grid justify-items-center text-center gap-[15px] w-[370px] p-10 bg-primary rounded-10"
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
