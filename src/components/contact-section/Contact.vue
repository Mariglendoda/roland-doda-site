<script setup lang="ts"></script>

<template>
  <div id="contact" class="grid grid-cols-[auto_1fr] items-start content-center">
    <div class="grid content-center gap-[20px]">
      <div>
        <div class="relative grid content-center items-center w-[100px]">
          <div class="absolute right-0 w-[63px] h-[42px] bg-graystarry -z-10 skew-x-[30deg]"></div>
          <div class="subtitle text-orange">Contact Info</div>
        </div>

        <div class="h1">Contact Me</div>

        <div class="description w-[400px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu donec dui massa scelerisque felis consectetur.
          Duis vel urna ut ullamcorper velit non non. A purus faucibus velit ac natoque.
        </div>
      </div>

      <div class="grid justify-start gap-[10px]">
        <img src="/assets/images/notifications.png" alt="" />

        <div class="grid">
          <div class="grid align-center justify-start align-center relative left-12 top-10">
            <div class="circle w-[30px] h-[30px] bg-[#D36A6B] blur-[20px] rounded-full"></div>
            <img class="absolute" src="/assets/images/notification.png" alt="" />
          </div>

          <div class="grid align-center justify-start align-center relative -top-10 left-[370px]">
            <div class="circle w-[30px] h-[30px] bg-[#F7FBFF] blur-[20px] rounded-full"></div>
            <img class="absolute" src="/assets/images/comments.png" alt="" />
          </div>
        </div>

        <img class="absolute" src="/assets/images/ilustration.png" alt="" />
      </div>
    </div>

    <div class="grid justify-end gap-[20px]">
      <div class="grid grid-cols-[auto,auto,auto] justify-center gap-[120px]">
        <div class="grid justify-items-center gap-[10px]">
          <img src="/assets/images/phone.png" alt="" />
          <div>+355676457173</div>
        </div>

        <div class="grid justify-items-center gap-[10px]">
          <img src="/assets/images/gmail.png" alt="" />
          <div>rolanddoda2014@gmail.com</div>
        </div>

        <div class="grid justify-items-center gap-[10px]">
          <img src="/assets/images/location.png" alt="" />
          <div>Tirana, Albania</div>
        </div>
      </div>

      <form class="grid content-center justify-center gap-[24px]">
        <div class="flex gap-[14px]">
          <input
            class="rgba w-[350px] h-[60px] outline-none accent-[rgba(255, 255, 255, 0.1)] p-3 rounded-10 bg-[rgba(255, 255, 255, 0.1)]"
            type="text"
            placeholder="Your Name"
          />
          <input
            class="rgba w-[350px] h-[60px] outline-none accent-[rgba(255, 255, 255, 0.1)] p-3 rounded-10"
            type="text"
            placeholder="Your Email Address"
          />
        </div>

        <input
          class="rgba w-[714px] h-[60px] outline-none accent-[rgba(255, 255, 255, 0.1)] p-3 rounded-10"
          type="text"
          placeholder="Your Subject"
        />
        <input
          class="rgba w-[714px] pb-[173px] grid content-start outline-none accent-[rgba(255, 255, 255, 0.1)] p-3 rounded-10"
          type="text"
          placeholder="Your Message..."
        />

        <button class="bg-glassmorphism rounded-10 w-[159px] h-[60px]">Send Message</button>
      </form>
    </div>
  </div>
</template>
