<script setup lang="ts">
import ServiceItem from "./ServiceItem.vue"
</script>

<template>
  <section id="services" class="grid gap-6 place-content-center">
    <div class="grid gap-2 content-center">
      <div class="relative grid content-center items-center w-[100px]">
        <div class="absolute right-2 w-[63px] h-[42px] bg-graystarry -z-10 skew-x-[30deg]"></div>
        <div class="subtitle text-orange">My Services</div>
      </div>

      <div class="h1">What i do</div>

      <div class="description text-[#80A4C2] w-[400px]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu donec dui massa scelerisque felis consectetur.
        Duis vel urna ut ullamcorper velit non non. A purus faucibus velit ac natoque.
      </div>
    </div>

    <div class="grid grid-cols-3 grid-rows-[1fr,1fr] gap-[60px]">
      <ServiceItem />
    </div>
  </section>
</template>
