<script setup lang="ts">
import Logo from "public/assets/svg/Logo.vue"
</script>

<template>
  <section class="py-[50px] text-center bg-secondary">
    <div class="grid gap-[30px] px-[100px]">
      <Logo class="m-auto" />

      <p class="description text-lightBlue">Experienced and enthusiast Vue.js Frontend Developer</p>

      <div class="navLinks grid grid-flow-col justify-center gap-6">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#projects">Projects</a>
        <a href="#testimonials">Testimonials</a>
        <a href="#contact-me">Contact Me</a>
      </div>

      <div class="socialMedia grid grid-flow-col justify-center items-center gap-8">
        <a href="https://www.facebook.com/Roland.Dorina">
          <img src="/assets/svg/facebook.svg" alt="" />
        </a>

        <a href="#">
          <img src="/assets/svg/instagram.svg" alt="" />
        </a>

        <a href="https://twitter.com/dev_rolandi">
          <img src="/assets/svg//twitter.svg" alt="" />
        </a>

        <a href="https://www.linkedin.com/in/roland-doda/">
          <img src="/assets/svg//linkedin.svg" alt="" />
        </a>

        <a href="https://github.com/Rolanddoda">
          <img src="/assets/svg/github.svg" alt="" />
        </a>

        <a href="https://stackoverflow.com/users/6385184/roland?tab=profile">
          <img src="/assets/svg//stackoverflow.svg" alt="" />
        </a>
      </div>

      <div class="bg-gray h-[1px] byline"></div>

      <p class="copyright">© Copyright Roland Doda. All Right Reserved.</p>
    </div>
  </section>
</template>
