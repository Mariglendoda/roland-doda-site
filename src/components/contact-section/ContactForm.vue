<template>
  <form class="grid content-center justify-center gap-[24px]">
    <div class="flex gap-[14px]">
      <input
        class="rgba w-[350px] h-[60px] outline-none accent-[rgba(255, 255, 255, 0.1)] p-3 subtitle rounded-10 bg-transparent text-white border-2 border-white"
        type="text"
        placeholder="Your Name"
      />

      <input
        class="rgba w-[350px] h-[60px] outline-none accent-[rgba(255, 255, 255, 0.1)] p-3 subtitle rounded-10 bg-transparent text-white border-2 border-white"
        type="email"
        required
        placeholder="Your Email Address"
      />
    </div>

    <input
      class="rgba w-[714px] h-[60px] outline-none accent-[rgba(255, 255, 255, 0.1)] p-3 subtitle rounded-10 bg-transparent text-white border-2 border-white"
      type="text"
      placeholder="Your Subject"
    />

    <textarea
      class="rgba w-[714px] h-[173px] max-h-[173px] outline-none accent-[rgba(255, 255, 255, 0.1)] p-3 subtitle rounded-10 bg-transparent text-white border-2 border-white"
      type="text"
      placeholder="Your Message..."
    />

    <button class="bg-white text-primary rounded-10 text-center px-8 w-[220px]">
      <a href="#contact" class="w-[159px] h-[60px] grid justify-center items-center font-medium">Send Message</a>
    </button>
  </form>
</template>
