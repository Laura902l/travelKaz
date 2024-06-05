<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <div>
      <AlmatyIntro />
    </div>
    <div>
      <AlmatyMainInfo />
    </div>
    <div>
      <PopularPlaces />
    </div>
  </div>
</template>

<script>
import AlmatyIntro from "../cities/cityComponent/Almaty/AlmatyIntro.vue";
import AlmatyMainInfo from "../cities/cityComponent/Almaty/AlmatyMainInfo.vue";
import PopularPlaces from "../cities/cityComponent/Almaty/PopularPlacesAlmaty.vue";
export default {
  components: {
    AlmatyIntro,AlmatyMainInfo, PopularPlaces

  },
  data() {
    
  }
}
</script>

<style>

</style>