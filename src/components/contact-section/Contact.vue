<script setup lang="ts"></script>

<template>
  <div id="contact" class="grid content-start items-center gap-[20px]">
    <div class="grid content-center w-[400px]">
      <div class="relative grid content-center items-center w-[100px]">
        <div class="absolute right-[0] box w-[63px] h-[42px] bg-graystarry -z-10 skew-x-[30deg]"></div>
        <div class="subtitle text-orange">Contact Info</div>
      </div>

      <div class="h1">Contact Me</div>

      <div class="description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu donec dui massa scelerisque felis consectetur.
        Duis vel urna ut ullamcorper velit non non. A purus faucibus velit ac natoque.
      </div>
    </div>

    <div class="grid gap-[10px]">
      <img src="../../../public/assets/images/notifications.png" alt="" />

      <div class="grid grid-flow-col">
        <div class="grid align-center justify-start align-center relative">
          <div class="circle w-[30px] h-[30px] bg-[#D36A6B] blur-[20px] rounded-full"></div>
          <img class="absolute" src="../../../public/assets/images/notification.png" alt="" />
        </div>

        <div class="grid align-center justify-start align-center relative">
          <div class="circle w-[30px] h-[30px] bg-[#F7FBFF] blur-[20px] rounded-full"></div>
          <img class="absolute" src="../../../public/assets/images/comments.png" alt="" />
        </div>
      </div>

      <img class="absolute" src="../../../public/assets/images/ilustration.png" alt="" />
    </div>
  </div>
</template>
