<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <div>
      <KokshetauIntro />
    </div>
    <div>
      <KokshetauMainInfo />
    </div>
    <div>
      <PopularPlaces />
    </div>
  </div>
</template>

<script>
import KokshetauIntro from "../cities/cityComponent/Kokshetau/KokshetauIntro.vue";
import KokshetauMainInfo from "../cities/cityComponent/Kokshetau/KokshetauMainInfo.vue";
import PopularPlaces from "../cities/cityComponent/Kokshetau/PopularPlacesKokshetau.vue";
export default {
  components: {
    KokshetauIntro,
    KokshetauMainInfo,
    PopularPlaces,
  },
  data() {},
};
</script>

<style></style>
