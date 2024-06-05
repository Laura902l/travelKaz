<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <div>
      <AktauIntro />
    </div>
    <div>
      <AktauMainInfo />
    </div>
    <div>
      <PopularPlaces />
    </div>
  </div>
</template>

<script>
import AktauIntro from "../cities/cityComponent/Aktau/AktauIntro.vue";
import AktauMainInfo from "../cities/cityComponent/Aktau/AktauMainInfo.vue";
import PopularPlaces from "../cities/cityComponent/Aktau/PopularPlacesAktau.vue";
export default {
  components: {
    AktauIntro,
    AktauMainInfo,
    PopularPlaces,
  },
  data() {},
};
</script>

<style></style>
