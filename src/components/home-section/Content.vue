<script setup lang="ts">
import LineSvg from "./svg/LineSvg.vue"
import WinSvg from "./svg/WinSvg.vue"
import VerticalText from "./svg/VerticalText.vue"
</script>

<template>
  <div class="content px-[100px] grid grid-cols-[auto,1fr] gap-3">
    <div class="grid justify-center justify-items-center gap-3">
      <div class="w-[4px] h-[120px] bg-white"></div>

      <VerticalText />
    </div>

    <div>
      <div class="relative ml-[-19px] grid grid-flow-col justify-start gap-3 items-center animate-one">
        <div class="h2 bg-secondary w-[237px] text-white px-[10px] py-[5px] rounded-tr-[3px] rounded-br-[3px]">
          Personal Portfolio
        </div>

        <div class="flex gap-2 items-center">
          <WinSvg />
          <p class="text-[#CF8F00] capitalize text-18 font-bold">top 0.2% this year</p>
        </div>
      </div>

      <div>
        <div class="relative grid">
          <div class="animate-two">
            <div class="h1 w-[540px] bg-gradient bg-clip-text text-transparent">
              I'm a Professional Frontend Developer
            </div>
            <LineSvg class="absolute top-[62px] left-[140px]" />
          </div>

          <p class="w-[540px] text-white animate-three">
            Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you
            live. I ❤ Js & Vue.
          </p>

          <div
            class="flex items-center w-[540px] h-[64px] bg-glassmorphism rounded-[30px] p-[5px] backdrop-blur-[20px] mt-3 animate-three"
          >
            <input
              class="w-[290px] ml-[25px] bg-transparent subtitle outline-none text-align-start placeholder:text-[white]"
              type="text"
              placeholder="Your Email Address"
            />

            <button
              class="bg-secondary text-white description outline-none rounded-[30px] grid justify-center items-center capitalize w-[270px] h-[54px] px-[30px]"
            >
              send me a message
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
