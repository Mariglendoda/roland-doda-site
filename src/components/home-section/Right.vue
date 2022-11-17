<script setup lang="ts">
import VueIcon from "./svg/VueIcon.vue"
import FigmaIcon from "./svg/FigmaIcon.vue"
import GithubIcon from "./svg/GithubIcon.vue"
import JavascriptIcon from "./svg/JavascriptIcon.vue"
import TypescriptIcon from "./svg/TypescriptIcon.vue"
import SvelteIcon from "./svg/SvelteIcon.vue"
import VisualStudioIcon from "./svg/VisualStudioIcon.vue"
import TailwindIcon from "./svg/TailwindIcon.vue"
import AvatarIcon from "./svg/AvatarIcon.vue"
import StarIcon from "./svg/StarIcon.vue"
</script>

<template>
  <div class="relative">
    <div class="right-section grid justify-center items-center relative">
      <div class="w-[406px] h-[406px] border border-white rounded-full absolute left-0 right-0 m-auto circle-one">
        <VueIcon class="show-one-svg" />
        <FigmaIcon class="show-one-svg" />
        <GithubIcon class="show-one-svg" />
        <JavascriptIcon class="show-one-svg" />
        <AvatarIcon class="show-one-svg" />
        <StarIcon class="show-one-svg" />
      </div>

      <div class="w-[314px] h-[314px] border border-white rounded-full absolute left-0 right-0 m-auto circle-two">
        <TypescriptIcon class="show-one-svg" />
        <SvelteIcon class="show-one-svg" />
        <VisualStudioIcon class="show-one-svg" />
        <TailwindIcon class="show-one-svg" />
      </div>
    </div>

    <div class="about grid grid-flow-col gap-[25px] absolute top-[250px] right-[-15px] animate-about">
      <div class="grid text-center justify-items-center">
        <h1 class="text-4xl font-bold text-white">6Y.</h1>
        <p class="text-[#80A4C2] mt-4">💻 Experience</p>
      </div>

      <div class="grid text-center justify-items-center">
        <h1 class="text-4xl font-bold text-white">250+</h1>
        <p class="text-[#80A4C2] mt-4">✅ Project Completed</p>
      </div>

      <div class="grid text-center justify-items-center">
        <h1 class="text-4xl font-bold text-white">10</h1>
        <p class="text-[#80A4C2] mt-4">🏆 Awards</p>
      </div>
    </div>
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
