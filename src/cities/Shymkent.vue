<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <div>
      <ShymkentIntro />
    </div>

    <div>
      <ShymkentMainInfo />
    </div>

    <div>
      <PopularPlacesShymkent />
    </div>
  </div>
</template>

<script>
import ShymkentIntro from "./cityComponent/Shymkent/ShymkentIntro.vue";
import ShymkentMainInfo from "./cityComponent/Shymkent/ShymkentMainInfo.vue";
import PopularPlacesShymkent from "./cityComponent/Shymkent/PopularPlacesShymkent.vue";
export default {
  components: {
    ShymkentIntro,
    ShymkentMainInfo,
    PopularPlacesShymkent,
  },
};
</script>

<style></style>
