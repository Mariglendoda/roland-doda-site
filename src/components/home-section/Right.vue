<script setup lang="ts">
import QrCode from "./svg/QrCode.vue"
import LogoWithoutUnderline from "./svg/LogoWithoutUnderline.vue"
</script>

<template>
  <div class="grid justify-end">
    <QrCode class="animate-about" />

    <LogoWithoutUnderline class="circle-two" />

    <p class="w-[174px] text-center m-auto text-[#96999F] animate-about">💻 Master for VueJs & Svelte 💖</p>
  </div>
</template>

<style>
.circle-one {
  opacity: 0;
  transform: rotateY(90deg);
  animation: circleOne 2s ease-in-out forwards 0.5s;
}

@keyframes circleOne {
  from {
    opacity: 0;
    transform: rotateY(90deg);
  }

  to {
    opacity: 1;
    transform: rotateY(0deg);
  }
}

.circle-two {
  opacity: 0;
  transform: rotateY(90deg);
  animation: circleOne 1.5s ease-in-out forwards 1s;
}

@keyframes circleOne {
  from {
    opacity: 0;
    transform: rotateY(90deg);
  }

  to {
    opacity: 1;
    transform: rotateY(0deg);
  }
}

.show-one-svg {
  opacity: 0;
  animation: showOneSvg 0.5s ease-in-out forwards 1.5s;
}

@keyframes showOneSvg {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

.animate-about {
  opacity: 0;
  animation: animateAbout 2s ease-in-out forwards 1s;
}

@keyframes animateAbout {
  to {
    opacity: 1;
  }
}
</style>
