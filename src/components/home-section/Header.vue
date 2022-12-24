<script setup lang="ts">
import Logo from "./Logo.vue"
import NavLists from "./NavLists.vue"
</script>

<template>
  <div
    class="header relative px-[100px] bg-primary h-[100px] grid grid-flow-col justify-between items-center border-b-[0.3px] solid border-white"
  >
    <Logo />

    <NavLists />
  </div>
</template>
