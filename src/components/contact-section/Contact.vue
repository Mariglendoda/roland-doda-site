<script setup lang="ts"></script>

<template>
  <div id="contact" class="grid content-center items-center gap-[20px]">
    <form class="grid justify-end gap-[24px]">
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
</template>
