<script setup lang="ts">
import { ref } from "vue"
import Recommendation from "./Recommendation.vue"

const recommendations = ref([
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
    },
  },

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
    },
  },

  {
    image:
      "https://media-exp1.licdn.com/dms/image/C5603AQHj-QNGp7_Cwg/profile-displayphoto-shrink_100_100/0/1516244961518?e=1669852800&v=beta&t=9U9-xAXpiCtURIlMSZDgvMHkDo48eIGmn8uHOgWTlKQ",
    fullName: "Nels Rune Jensen",
    job: "Co-founder of ConsortiaManager",
    description:
      "Over a couple of years, Roland created and maintained the Frontend of one of our main services, so he knows how to manage projects from overall structure to the tiniest details. As an expert in Vue.js, he is on top of the latest developments in his field and takes pride in always doing his best possible work. As a person, Roland can be counted on, and trusted to manage his time efficiently, even if working remotely. On a more personal note, he has a good personality and is easy to get along with. I have enjoyed working with Roland and will recommend him for all front-end projects, big or small.",
    date: {
      day: "09",
      month: "May",
      year: "2022",
    },
  },

  {
    image:
      "https://media-exp1.licdn.com/dms/image/C5603AQHzGby02WH59A/profile-displayphoto-shrink_100_100/0/1595320720588?e=1669852800&v=beta&t=-NtAgbFlhxXNCB-132CFACSIGMvpwzDQdSssAwGuI1k",
    fullName: "Urs Renke",
    job: "You’ve got questions, we’ve got answers.",
    description:
      "Roland does not only work according to the project plan but also thinks along with the project and does everything to reach the project goals and deadlines. He has overcome some difficult technical challenges and has been able to implement new features that were unknown to him in a neat and clean way. Furthermore, despite stressful work, he is always in a good mood and has an open ear for any requests.",
    date: {
      day: "06",
      month: "May",
      year: "2022",
    },
  },

  {
    image:
      "https://media-exp1.licdn.com/dms/image/C5603AQFjI_laIvzy3Q/profile-displayphoto-shrink_100_100/0/1516871033807?e=1669852800&v=beta&t=qYZzo5HnONtGYvV1tj7NfvgY4OCNxlwFb8sCBOSx38Q",
    fullName: "Denitsa M.",
    job: "Software Engineer at Trustpilot",
    description:
      "I had the great pleasure of working with Roland for 2 years while at ConsortiaManager.I found him to be incredibly devoted to his work and always eager to take in new knowledge. And he probably knows Vue.js better than the creator himself! :) Roland is patient and loves helping others, which you can also tell by his Stack Overflow profile.Him working on frontend and me on backend, with no other developers around us, we developed this habit of complimenting and praising each other's work. It might've seemed awkward to an observer but it was our funny way of appreciating each other's work and I miss it! :) Roland is a great team mate that anyone will be lucky to have!",
    date: {
      day: "09",
      month: "February",
      year: "2022",
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
    },
  },

  {
    image:
      "https://media-exp1.licdn.com/dms/image/C5603AQEXzCQ49bKOwQ/profile-displayphoto-shrink_100_100/0/1522321482653?e=1669852800&v=beta&t=UkVcaFSH8_5eBLLbkEUmprLRKaYtP8b29AUlMVv1rBA",
    fullName: "Tejs Grevstad",
    job: "Co-Founder at ConsortiaManager",
    description:
      "Roland is not only a great Vue developer but always keen to learn and be up to date with the most recent developments. He is very independent and self-motivated. He has managed many difficult technical challenges in a good spirit and with well-proven results. On top of that he is a great guy - very kind and liked by all colleagues.",
    date: {
      day: "30",
      month: "March",
      year: "2022",
    },
  },

  {
    image:
      "https://media-exp1.licdn.com/dms/image/C4D03AQGltbmnkvu34Q/profile-displayphoto-shrink_100_100/0/1659043027952?e=1669852800&v=beta&t=LBIDy3C7n7EysOxfQu4JAT4INqAdkEnr5_sIu1AJnkc",
    fullName: "Klodia Shaba",
    job: "Frontend Angular Developer",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    date: {
      day: "22",
      month: "january",
      year: "2022",
    },
  },
])
</script>

<template>
  <div id="testimonials">
    <div class="relative grid gap-[30px] max-h-[1240px] overflow-hidden">
      <div class="grid content-center w-[400px]">
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

      <div class="grid grid-cols-3 gap-[20px]">
        <Recommendation :data="recommendations.slice(0, 4)" />

        <Recommendation :data="recommendations.slice(4, 7)" />

        <Recommendation :data="recommendations.slice(7)" />
      </div>

      <div class="absolute bottom-0 w-full grid justify-center content-center">
        <div class="absolute bottom-0 w-full h-[250px] bg-testimonial"></div>
        <button class="mb-16 bg-primary w-[159px] z-10 rounded-10 h-[60px]">Show more</button>
      </div>
    </div>
  </div>
</template>
