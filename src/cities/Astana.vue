<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <div>
      <AstanaIntro />
    </div>
    <div>
      <MainInfo />
    </div>
    <div>
      <PopularPlaces />
    </div>
    <!-- <q-video :ratio="16/9" src="https://www.youtube.com/embed/xuQbkZjf_aw" /> -->
  </div>
</template>

<script>
import AstanaIntro from "../cities/cityComponent/Astana/AstanaIntro.vue";
import MainInfo from "../cities/cityComponent/Astana/AstanaMainInfo.vue";
import PopularPlaces from "../cities/cityComponent/Astana/PopularPlacesAstana.vue";


export default {
  components: {
    AstanaIntro, MainInfo,
    PopularPlaces
  }
}
</script>

<style>
</style>