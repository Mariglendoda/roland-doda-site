<script setup lang="ts">
import SocialsMedia from "./SocialsMedia.vue"
</script>

<template>
  <div class="grid grid-flow-col items-center gap-6">
    <div class="navigation-list grid grid-flow-col justify-end items-center bg-secondary rounded-[30px] w-full p-2">
      <div class="nav-item bg-white px-[39px] py-[13px] rounded-[30px] text-primary">
        <a href="#">Home</a>
      </div>

      <div class="nav-item px-[39px] py-[13px]">
        <a href="#">About</a>
      </div>

      <div class="nav-item px-[39px] py-[13px]">
        <a href="#">Works</a>
      </div>

      <div class="nav-item px-[39px] py-[13px]">
        <a href="#">Blog</a>
      </div>

      <div class="nav-item px-[39px] py-[13px]">
        <a href="#">Contact</a>
      </div>
    </div>

    <SocialsMedia />
  </div>
</template>
