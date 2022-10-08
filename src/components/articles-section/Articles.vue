<script setup lang="ts"></script>

<template>
  <div class="grid grid-cols-[1fr,auto] items-center">
    <div class="grid content-center w-[400px] pt-[10px]">
      <div class="relative grid content-center items-center w-[100px]">
        <div class="absolute right-2 w-[63px] h-[42px] bg-graystarry -z-10 skew-x-[30deg]"></div>
        <div class="subtitle text-orange">My Articles</div>
      </div>

      <div class="h1">latest Post</div>
    </div>

    <div>
      <button class="text-btn bg-glassmorphism rounded-10">
        <a class="w-[230px] h-[60px] grid justify-center items-center">Explore more articles</a>
      </button>
    </div>
  </div>
</template>
