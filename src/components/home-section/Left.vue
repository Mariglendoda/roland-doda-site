<script setup lang="ts">
import LineIcon from "./svg/Line.vue"

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
    <div class="grid grid-rows-[auto,1fr,auto] gap-2">
      <div class="h2 animate-one bg-white w-[237px] text-[#D35A5E] px-[10px] py-[5px] rounded-[3px]">
        Personal Portfolio
      </div>

      <div class="relative grid gap-1">
        <div class="animate-two">
          <div class="h1 w-[540px]">I'm a Professional Frontend Developer</div>
          <LineIcon class="absolute top-[62px] left-[140px]" />
        </div>

        <p class="w-[540px] text-[#96999F] animate-three">
          Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you
          live.
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
            class="bg-white text-[#D35A5E] description outline-none rounded-[30px] grid justify-center items-center capitalize w-[270px] h-[54px] px-[30px]"
          >
            send me a message
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
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
