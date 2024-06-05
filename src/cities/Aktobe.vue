<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <div>
      <AktobeIntro />
    </div>
    <div>
      <AktobeMainInfo />
    </div>
    <div>
      <PopularPlaces />
    </div>
  </div>
</template>

<script>
import AktobeIntro from "../cities/cityComponent/Aktobe/AktobeIntro.vue";
import AktobeMainInfo from "../cities/cityComponent/Aktobe/AktobeMainInfo.vue";
import PopularPlaces from "../cities/cityComponent/Aktobe/PopularPlacesAktobe.vue";
export default {
  components: {
    AktobeIntro,
    AktobeMainInfo,
    PopularPlaces,
  },
  data() {},
};
</script>

<style></style>
