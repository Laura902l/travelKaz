<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <div>
      <AtyrauIntro />
    </div>
    <div>
      <AtyrauMainInfo />
    </div>
    <div>
      <PopularPlaces />
    </div>
  </div>
</template>

<script>
import AtyrauIntro from "../cities/cityComponent/Atyrau/AtyrauIntro.vue";
import AtyrauMainInfo from "../cities/cityComponent/Atyrau/AtyrauMainInfo.vue";
import PopularPlaces from "../cities/cityComponent/Atyrau/PopularPlacesAtyrau.vue";
export default {
  components: {
    AtyrauIntro,
    AtyrauMainInfo,
    PopularPlaces,
  },
  data() {},
};
</script>

<style></style>
