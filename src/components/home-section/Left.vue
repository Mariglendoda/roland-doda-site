<script setup lang="ts">
import LineIcon from "./svg/Line.vue"
import Download from "./svg/Download.vue"
import GitHub from "./svg/GitHub.vue"

const stats = [
  { text: "💻 Experienced Javascript Developer." },
  { text: "💘 VueJs & SvelteKit Lover." },
  { text: "👨‍ Front-end enthusiast" },
  { text: "‍💼 Vue Consultant." },
  { text: "🗃️ Modular and scalable Frontend architectures" },
]
</script>

<template>
  <div class="flex gap-4 relative">
    <div class="grid grid-rows-[auto,1fr,auto] gap-3">
      <div class="h2 w-[380px] animate-one">Hi 👋 my name is Roland Doda.</div>

      <div class="relative grid gap-1">
        <div class="animate-two">
          <div class="h1 w-[510px]">I'm a Professional Frontend Developer</div>
          <LineIcon class="absolute top-[62px] left-[140px]" />
        </div>

        <p class="w-[486px] text-[#80A4C2] animate-three">
          Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you
          live.
        </p>

        <div class="flex gap-4 mt-4">
          <div
            class="grid grid-flow-col gap-4 justify-center items-center cta-btn w-[270px] h-[60px] rounded-[10px] animate-four"
          >
            <GitHub />

            <button class="p text-primary capitalize">check out my gitHub</button>
          </div>

          <div
            class="border-white border-2 grid grid-flow-col gap-4 justify-center items-center w-[209px] h-[60px] rounded-[10px] animate-five"
          >
            <Download />

            <button class="p text- capitalize">Download CV</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.cta-btn {
  background: #ecf0f7;
}

.animate-one {
  opacity: 0;
  animation: animateOne 2s ease-in-out forwards 0.5s;
}

@keyframes animateOne {
  to {
    opacity: 1;
  }
}

.animate-two {
  opacity: 0;
  animation: animateTwo 2s ease-in-out forwards 0.6s;
}

@keyframes animateTwo {
  to {
    opacity: 1;
  }
}

.animate-three {
  opacity: 0;
  animation: animateThree 2s ease-in-out forwards 0.7s;
}

@keyframes animateThree {
  to {
    opacity: 1;
  }
}

.animate-four {
  opacity: 0;
  animation: animateThree 2s ease-in-out forwards 0.8s;
}

@keyframes animateThree {
  to {
    opacity: 1;
  }
}

.animate-five {
  opacity: 0;
  animation: animateThree 2s ease-in-out forwards 1s;
}

@keyframes animateFive {
  to {
    opacity: 1;
  }
}
</style>
