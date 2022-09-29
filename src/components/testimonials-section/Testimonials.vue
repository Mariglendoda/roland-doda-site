<script setup lang="ts">
import { ref } from "vue"

const recommendations = ref([
  {
    image:
      "https://media-exp1.licdn.com/dms/image/D4D03AQETng5FkapCTw/profile-displayphoto-shrink_200_200/0/1661540780094?e=1669852800&v=beta&t=hF-1YC8Pef4xnQVUB29S4E-IBrvGRKuCd_NpN4fUrZs",
    fullName: "Mariglen Doda",
    job: "Developer & UX UI Designer",
    description:
      "Over a couple of years, Roland created and maintained the Frontend of one of our main services, so he knows how to manage projects from overall structure to the tiniest details. As an expert in Vue.js, he is on top of the latest developments in his field and takes pride in always doing his best possible work. As a person, Roland can be counted on, and trusted to manage his time efficiently, even if working remotely. On a more personal note, he has a good personality and is easy to get along with. I have enjoyed working with Roland and will recommend him for all front-end projects, big or small.",
    date: {
      day: "29",
      month: "September",
      year: "2022",
      clock: "12:42",
      periodTime: "PM",
    },
  },

  {
    image:
      "https://media-exp1.licdn.com/dms/image/C4E03AQGo6MLJw7NxBQ/profile-displayphoto-shrink_200_200/0/1653314535634?e=1669852800&v=beta&t=4483BPWxK14E7BER0cjcb1FHzqpOZ8AusNmS1DRnLrc",
    fullName: "Fation Curo",
    job: "UX UI Designer",
    description:
      "Over a couple of years, Roland created and maintained the Frontend of one of our main services, so he knows how to manage projects from overall structure to the tiniest details. As an expert in Vue.js, he is on top of the latest developments in his field and takes pride in always doing his best possible work.",
    date: {
      day: "30",
      month: "June",
      year: "2022",
      clock: "09:00",
      periodTime: "PM",
    },
  },

  {
    image:
      "https://media-exp1.licdn.com/dms/image/C5603AQGBhZra6-lYOg/profile-displayphoto-shrink_100_100/0/1516435380525?e=1669852800&v=beta&t=RaDt2X9jyCPTlg4H2lcvc9Uf-GZbieyisy56okuVwms",
    fullName: "Aleksandar Mitrovski",
    job: "Managed Roland directly",
    description:
      "Roland is an excellent engineer, expert in his field, always following the latest trends and using the latest tools. He is very knowledgeable and very approachable and easy to collaborate with. It is a pleasure to have him as a colleague",
    date: {
      day: "26",
      month: "September",
      year: "2022",
      clock: "08:13",
      periodTime: "AM",
    },
  },

  {
    image:
      "https://media-exp1.licdn.com/dms/image/C4D03AQEMPblckYhgzA/profile-displayphoto-shrink_200_200/0/1608546220310?e=1669852800&v=beta&t=lcdSBAd5s-ouridkrxQnXxKedZT_-6TrKOCfUcEyCMQ",
    fullName: "C. Engin BİLİCİ",
    job: "Full Stack Developer",
    description:
      "Roland is not only a very technical developer but also a good learner and a person who doesn't stop improving his skills. He always keeps himself updated with the latest tech stack and helps his team updated. For the limited time we worked together, we helped each other a lot and learnt much together.",
    date: {
      day: "26",
      month: "September",
      year: "2022",
      clock: "08:13",
      periodTime: "AM",
    },
  },
])
</script>

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
      <div class="grid grid-cols-3 items-start">
        <div class="grid gap-[10px] w-[400px] bg-glassmorphism p-4 rounded-[20px]" v-for="reco in recommendations">
          <div class="flex items-center gap-[15px]">
            <div
              class="img w-[50px] h-[50px] rounded-full bg-cover"
              :style="{ backgroundImage: ` url(${reco.image})` }"
            ></div>

            <div>
              <div class="description">{{ reco.fullName }}</div>
              <div class="subtitle">{{ reco.job }}</div>
            </div>
          </div>

          <div class="subtitle">
            {{ reco.description }}
          </div>

          <div class="grid grid-flow-col justify-start items-center gap-[8px] subtitle">
            <div class="date">{{ reco.date.day }} {{ reco.date.month }} {{ reco.date.year }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
