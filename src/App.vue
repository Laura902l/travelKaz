<!-- App.vue -->
<template>
  <div>
    <headerComponent />
    <router-view />
    <bot />
    <footerComponent />
  </div>
</template>

<script>
import headerComponent from "../src/pages/Header.vue";
import bot from "./bot/botFront/botContainer.vue";
import footerComponent from "../src/pages/Footer.vue";

export default {
  components: {
    headerComponent,
    bot,
    footerComponent,
  },
};
</script>
