<template>
  <div class="q-px-lg q-py-md">
    <q-timeline color="secondary">
      <transition appear @before-enter="beforeEnterText" @enter="enterText">
        <q-timeline-entry
          class="text-center"
          heading
          body="Welcome to our tourism website!"
        />
      </transition>
      <div class="row">
        <div v-for="img in image" :key="img.id" class="col">
          <img class="imgSource" :src="img.src" alt="" />
        </div>
      </div>
      <q-timeline-entry class="text-center" heading body="Our history" />
      <q-timeline-entry
        v-for="historyText in history"
        :key="historyText.date"
        :title="historyText.title"
        :subtitle="historyText.date"
        :avatar="historyText.avatar"
        :body="historyText.body"
        :icon="historyText.icon"
        :color="historyText.color"
      />
    </q-timeline>
    <!-- FAQ -->
    <div>
      <FAQ />
    </div>
  </div>
</template>

<script>
import FAQ from "../components/FAQ.vue";
import profile from "../assets/profile.jpg";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
export default {
  components: {
    FAQ,
  },
  data() {
    return {
      history: [
        {
          date: "May 01, 2024",
          title: "Start of the project",
          avatar:
            "https://upload.wikimedia.org/wikipedia/commons/6/6a/Logo_astana_it_university.png",
          body: "From the moment the idea of ​​creating a website about tourism was born, a fascinating journey into the world of web development began.",
        },
        {
          date: "May 05, 2024",
          title: "Development",
          body: `In the process of developing a tourism website, we paid special attention to expanding its functionality and increasing its attractiveness for users. We aimed to create an interactive space that not only provides information about various tourist destinations, but also inspires travel.
          As the project progressed, we constantly introduced new functionality, enriching the user experience.`,
        },
        {
          date: "May 10, 2024",
          title: "Team",
          body: "Our team has also worked to improve the design and user interface to make the site more attractive and easy to use. We have used modern technology and design techniques to create an aesthetically pleasing and functional space for our users.",
        },
        {
          date: "June 1, 2024",
          title: "Completion",
          icon: "done_all",
          body: "We, Astana IT University students, are proud to present our trial version of our work. The embodiment of our ideas and efforts, this site about tourism is our contribution to the world of the Internet and an invitation to new discoveries. Authors: Students of Astana IT University",
          color: "orange",
        },
      ],
      image: [
        {
          id: 1,
          src: "https://images.unsplash.com/photo-1569521490126-e643824699a4?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          id: 2,
          src: "https://images.unsplash.com/photo-1600255531489-761f242f8672?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          id: 3,
          src: "https://plus.unsplash.com/premium_photo-1669377175101-c4b272e611a6?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
      ],
    };
  },
  setup() {
    const beforeEnter = (el) => {
      el.style.transform = "translateY(-100px)";
      el.style.opacity = 0;
    };

    const enter = (el, done) => {
      gsap.to(el, {
        duration: 2,
        y: 0,
        opacity: 1,
        ease: "bounce.out",
        onComplete: done,
      });
    };

    const beforeEnterText = async (el) => {
      el.style.transform = "translateY(-100px)";
      el.style.opacity = 0;
    };

    const enterText = async (el, done) => {
      gsap.to(el, {
        duration: 1.8,
        y: 0,
        opacity: 1,
        ease: "back.inOut",
        onComplete: done,
      });
    };

    return {
      beforeEnter,
      enter,
      beforeEnterText,
      enterText,
    };
  },
};
</script>

<style>
.imgSource {
  height: 35vh;
  width: 90%;
  border-radius: 15px;
}
</style>
