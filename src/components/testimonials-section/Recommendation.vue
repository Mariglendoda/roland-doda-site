<script setup lang="ts">
const props = defineProps(["data"])
</script>

<template>
  <div class="grid gap-[20px] content-start max-w-[400px]">
    <div class="grid gap-[10px] bg-glassmorphism p-4 rounded-[20px]" v-for="recommendation of props.data">
      <div class="flex items-center gap-[15px]">
        <div
          class="img w-[50px] h-[50px] rounded-full bg-cover"
          :style="{ backgroundImage: ` url(${recommendation.image})` }"
        ></div>

        <div>
          <div class="description">{{ props.data.fullName }}</div>
          <div class="subtitle">{{ recommendation.job }}</div>
        </div>
      </div>

      <div class="subtitle">
        {{ recommendation.description }}
      </div>

      <div class="subtitle">
        <div class="date">
          {{ recommendation.date.day }} {{ recommendation.date.month }} {{ recommendation.date.year }}
        </div>
      </div>
    </div>
  </div>
</template>
