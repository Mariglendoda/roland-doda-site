<script setup lang="ts"></script>

<template>
  <div id="testimonials">
    <div class="grid content-center gap-1 w-[400px] mt-[100px]">
      <div class="relative grid content-center items-center w-[100px]">
        <div class="absolute right-2 w-[63px] h-[42px] bg-graystarry -z-10 skew-x-[30deg]"></div>
        <div class="subtitle text-orange">Testimonials</div>
      </div>

      <div class="h1">What people say about me</div>

      <div class="description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu donec dui massa scelerisque felis consectetur.
        Duis vel urna ut ullamcorper velit non non. A purus faucibus velit ac natoque.
      </div>
    </div>

    <div class="mt-[30px]">
      <div class="cards grid grid-cols-3 items-start">
        <div class="grid gap-[10px] w-[400px] bg-glassmorphism p-4 rounded-[20px]">
          <div class="flex items-center gap-[15px]">
            <div class="img w-[50px] h-[50px] rounded-full bg-white"></div>

            <div>
              <div class="description">Nels Rune Jensen</div>
              <div class="subtitle">Co-founder of ConsortiaManager</div>
            </div>
          </div>

          <div class="subtitle">
            Over a couple of years, Roland created and maintained the Frontend of one of our main services, so he knows
            how to manage projects from overall structure to the tiniest details. As an expert in Vue.js, he is on top
            of the latest developments in his field and takes pride in always doing his best possible work. As a person,
            Roland can be counted on, and trusted to manage his time efficiently, even if working remotely. On a more
            personal note, he has a good personality and is easy to get along with. I have enjoyed working with Roland
            and will recommend him for all front-end projects, big or small.
          </div>

          <div class="grid grid-flow-col justify-start items-center gap-[8px] subtitle">
            <div class="date">09 May, 2022</div>
            <div class="w-[8px] h-[8px] rounded-full bg-white"></div>
            <div>08:13 AM</div>
          </div>
        </div>

        <div class="grid gap-[10px] w-[400px] bg-glassmorphism p-4 rounded-[20px]">
          <div class="flex items-center gap-[15px]">
            <div class="img w-[50px] h-[50px] rounded-full bg-white"></div>

            <div>
              <div class="description">Mariglen Doda</div>
              <div class="subtitle">Developer & UX UI Designer</div>
            </div>
          </div>

          <div class="subtitle">
            Over a couple of years, Roland created and maintained the Frontend of one of our main services, so he knows
            how to manage projects from overall structure to the tiniest details. As an expert in Vue.js, he is on top
            of the latest developments in his field and takes pride in always doing his best possible work.
          </div>

          <div class="grid grid-flow-col justify-start items-center gap-[8px] subtitle">
            <div class="date">30 Jun, 2022</div>
            <div class="w-[8px] h-[8px] rounded-full bg-white"></div>
            <div>04:15 AM</div>
          </div>
        </div>

        <div class="grid gap-[10px] w-[400px] bg-glassmorphism p-4 rounded-[20px]">
          <div class="flex items-center gap-[15px]">
            <div class="img w-[50px] h-[50px] rounded-full bg-white"></div>

            <div>
              <div class="description">Urs Renke</div>
              <div class="subtitle">Web Designer</div>
            </div>
          </div>

          <div class="subtitle">
            Roland does not only work according to the project plan but also thinks along with the project and does
            everything to reach the project goals and deadlines. He has overcome some difficult technical challenges and
            has been able to implement new features that were unknown to him in a neat and clean way. Furthermore,
            despite stressful work, he is always in a good mood and has an open ear for any requests.
          </div>

          <div class="grid grid-flow-col justify-start items-center gap-[8px] subtitle">
            <div class="date">06 May, 2022</div>
            <div class="w-[8px] h-[8px] rounded-full bg-white"></div>
            <div>08:13 AM</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
