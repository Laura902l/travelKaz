<template>
<div class="homePage text-center">
  <section>
    <InfoParallax />
</section>
  <section>
    <firstParallax />
</section>
<section>
  <secondParallax />
</section>
<section>
  <historyParallax />
</section>
<section>
  <registrantionParallax />
</section>


</div>
</template>

<script>
import { gsap } from 'gsap'; 
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import firstParallax from '../components/ParallaxHome.vue';
import secondParallax from '../components/Parallaxnature.vue';
import historyParallax from '../components/ParallaxHistory.vue';
import registrantionParallax from '../components/ParallaxRegistration.vue';
import InfoParallax from '../components/ParallaxInfo.vue';
export default {
  components: {
    firstParallax, secondParallax, historyParallax, registrantionParallax,
    InfoParallax
  },
  mounted() {
    gsap.registerPlugin(ScrollTrigger);

  let getRatio = el => window.innerHeight / (window.innerHeight + el.offsetHeight);

gsap.utils.toArray("section").forEach((section, i) => {
  section.bg = section.querySelector(".bg"); 

  // section.bg.style.backgroundImage = `url(https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmF0dXJlfGVufDB8fDB8fHww)`;
  
  gsap.fromTo(section.bg, {
    backgroundPosition: () => i ? `50% ${-window.innerHeight * getRatio(section)}px` : "50% 0px"
  }, {
    backgroundPosition: () => `50% ${window.innerHeight * (1 - getRatio(section))}px`,
    ease: "none",
    scrollTrigger: {
      trigger: section,
      start: () => i ? "top bottom" : "top top", 
      end: "bottom top",
      scrub: true,
      invalidateOnRefresh: true
    }
  });

});
  }
};
</script>

<style>
.homePage section {
  position: relative;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
.bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: -1;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.homePage h1 {
  color: white;
  text-shadow: 1px 1px 3px black;
  z-index: 1;
  font-size: 3em;
  font-weight: 400;
}

.btn{
    color: white;
    box-shadow: 0px 0px 2px 1px;
    margin-bottom: 1rem;
    z-index: 1;
  }
</style>
