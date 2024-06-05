<template>
  <div>
    <div class="bg slide5"></div>
    <h1>
      <q-toolbar class="welcomeText column text-center">
        <transition appear @before-enter="beforeEnterText" @enter="enterText">
          <p class="description col">Travel to Central Asia</p>
        </transition>
        <transition appear @before-enter="beforeEnter" @enter="enter">
          <p
            class="text-center"
            :class="[$q.screen.width < 600 ? 'fontMobile' : 'fontDesktop']"
          >
            Kazakhstan
          </p>
        </transition>
        <div class="col">
          <p class="population"><span ref="populationSpan">0</span></p>
        </div>
      </q-toolbar>
    </h1>
  </div>
</template>

<script>
import { ref } from "vue";
import gsap from "gsap";
export default {
  setup() {
    const drawer = ref(false);
    const fabLeft = ref(false);

    const closeDrawer = () => {
      drawer.value = false;
    };

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
      closeDrawer,
      fabLeft,
      drawer,
      beforeEnter,
      enter,
      beforeEnterText,
      enterText,
    };
  },
  data() {
    return {
      population: null,
    };
  },
  created() {
    this.fetchPopulation();
  },
  methods: {
    async fetchPopulation() {
      try {
        const response = await fetch(
          "https://api.worldbank.org/v2/country/KZ/indicator/SP.POP.TOTL?format=json"
        );

        const data = await response.json();
        const targetPopulation = data[1][1].value;
        this.animatePopulation(targetPopulation);
      } catch (error) {
        console.error("Error loading population data:", error);
      }
    },
    animatePopulation(targetPopulation) {
      const startPopulation = 0;
      const duration = 2000;

      const interval = 50;
      const increment = targetPopulation / (duration / interval);
      let currentPopulation = startPopulation;

      const timer = setInterval(() => {
        currentPopulation += increment;
        if (currentPopulation >= targetPopulation) {
          clearInterval(timer);
          currentPopulation = targetPopulation;
        }

        this.$refs.populationSpan.textContent = `Rs. ${Math.round(
          currentPopulation
        )}`;
      }, interval);
    },
  },
};
</script>

<style>
.slide5 {
  background-image: url("https://celes.club/uploads/posts/2022-05/1651714304_27-celes-club-p-kazakhstan-priroda-krasivo-foto-27.jpg");
}

.headerImg {
  color: #ffffff;

  font-size: 24px;
}
.welcomeText {
  position: relative;
  margin-top: 45px;
}
.welcomeText .description {
  font-size: 28px;
  font-family: Montserrat_italic;
}
.welcomeText .fontMobile {
  font-size: 50px;
  font-weight: 600;
}
.fontDesktop {
  font-size: 50px;
  font-weight: 600;
}
#populationSpan {
  display: inline-block;
  width: 40px;

  text-align: right;
}
.population {
  align-items: flex-end;
  font-size: 36px;
}
</style>
