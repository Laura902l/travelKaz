<template>
  <div class="shymkentIntroContainer">
    <div
      class="wrapper"
      :class="[$q.screen.width < 600 ? 'mobileVersion' : 'desktopVersion']"
    >
      <img
        class="fit"
        src="https://1366x768.ru/nature/279/nature-wallpaper-1366x768.jpg"
        alt=""
      />
      <p
        class="q-pt-lg headerIntro"
        :class="[
          $q.screen.width < 600
            ? 'headerMobileVersion'
            : 'headerDesktopVersion q-pt-xl',
        ]"
      >
        Atyrau - green city
      </p>

      <center>
        <q-btn
          rounded
          dense
          class="btn q-pa-sm q-ma-sm shadow-2"
          :class="[
            $q.screen.width < 600 ? 'btnIntroMobile' : 'btnIntroDesktop',
          ]"
          :to="isCity ? '/air/city' : ''"
          @click="clickBtn"
          color="grey-9"
          >Weather in {{ city }}</q-btn
        >
      </center>
    </div>
    <div id="map" style="height: 400px"></div>
  </div>
</template>

<script>
console.clear();
import { Notify } from "quasar";
export default {
  data() {
    return {
      city: "Atyrau",
      isCity: "",
    };
  },
  mounted() {
    const script = document.createElement("script");
    script.src = "https://maps.api.2gis.ru/2.0/loader.js";
    script.async = true;
    script.onload = this.initMap;
    document.head.appendChild(script);
  },
  methods: {
    clickBtn() {
      let currentCity = localStorage.getItem("currentCity");
      if (currentCity === this.city) {
        Notify.create("You are in this city!");
      } else {
        Notify.create("Wait!");
        this.isCity = true;
        localStorage.setItem("flightCity", this.city);
      }
    },
    initMap() {
      DG.then(() => {
        const map = DG.map("map", {
          center: [47.1167, 51.8833],
          zoom: 13,
          fullscreenControl: false,
        });
      });
    },
  },
};
</script>

<style>
.wrapper {
  position: relative;
}
.mobileVersion {
  height: 500px;
}

.desktopVersion {
  height: 750px;
}

.wrapper img {
  position: absolute;
}

.wrapper p {
  color: #ffffff;
  position: relative;
  text-align: center;
}
.headerIntro {
  font-weight: bold;
}
.headerMobileVersion {
  font-size: 30px;
}

.desktopVersion {
  font-size: 64px;
}

.descriptionDesktopVersion {
  font-size: 50px;
}

.descriptionMobileVersion {
  font-size: 20px;
}

.wrapper .btn {
  color: #ffffff;
}

.btnIntroDesktop {
  font-size: 24px;
}
</style>
