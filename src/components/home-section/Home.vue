<script setup lang="ts">
import { hrefs } from "../../constants"
// Components
import LeftSection from "./Left.vue"
import RightSection from "./Right.vue"
import Header from "@components/Header.vue"
</script>

<template>
  <section :id="hrefs.home" class="grid grid-rows-[auto_1fr_auto] items-center">
    <Header class="w-full" />

    <div class="grid grid-cols-2 items-center">
      <LeftSection />
      <RightSection />
    </div>

    <svg width="100%" height="186" viewBox="0 0 1440 186" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M0 185C0 185 83.0351 123.632 155 110.892C259.999 92.3032 313.419 165.103 422 162.968C544.577 160.557 593.164 101.565 713 84.1864C804.147 70.9682 860.481 85.8514 951 70.8336C1047.9 54.7579 1086.28 -7.89316 1185 2.06676C1254.07 9.03523 1269.37 66.6061 1339 62.822C1382.7 60.4471 1440 30.1076 1440 30.1076"
        stroke="url(#paint0_linear_1544_1173)"
        stroke-width="2"
      ></path>
      <defs>
        <linearGradient
          id="paint0_linear_1544_1173"
          x1="1187.57"
          y1="30.7513"
          x2="463.376"
          y2="38.1861"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#1099FD"></stop>
          <stop offset="0.303206" stop-color="#0FCFFE"></stop>
          <stop offset="1" stop-color="#0FFFC5"></stop>
        </linearGradient>
      </defs>

      <path
        d="M155 108.585C83.0351 121.174 0 181.812 0 181.812V239H1440V28.7615C1440 28.7615 1382.7 58.7402 1339 61.0868C1269.37 64.826 1254.07 7.93967 1185 1.05407C1086.28 -8.7874 1047.9 53.1186 951 69.0032C860.481 83.8423 804.147 69.1362 713 82.1972C593.164 99.3692 544.577 157.66 422 160.042C313.419 162.152 259.999 90.2174 155 108.585Z"
        fill="url(#paint0_linear_1544_1174)"
        fill-opacity="0.25"
      ></path>
      <defs>
        <linearGradient
          id="paint0_linear_1544_1174"
          x1="720"
          y1="6.18129e-07"
          x2="721.479"
          y2="238.991"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#1D3B53"></stop>
          <stop offset="1" stop-color="#1D3B53" stop-opacity="0"></stop>
        </linearGradient>
      </defs>
    </svg>
  </section>
</template>
