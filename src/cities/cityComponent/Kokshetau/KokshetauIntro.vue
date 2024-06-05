<template>
  <div class="shymkentIntroContainer">
    <div
      class="wrapper"
      :class="[$q.screen.width < 600 ? 'mobileVersion' : 'desktopVersion']"
    >
      <img
        class="fit"
        src="https://el.kz/storage/storage/element/2020/01/20/mainphoto/11288/1200xauto_YEBmeY5cvfsZ53VZRmv4WWjEoO9kEmc5gb439Dli.jpg"
        alt=""
      />
      <p
        class="q-pt-lg headerIntro"
        :class="[
          $q.screen.width < 600
            ? 'headerMobileVersion text-dark'
            : 'headerDesktopVersion q-pt-xl text-dark',
        ]"
      >
        Guide to the city of Kokshetau
      </p>
      <p
        :class="[
          $q.screen.width < 600
            ? 'descriptionMobileVersion text-dark'
            : 'descriptionDesktopVersion text-dark',
        ]"
      >
        Travel with us
      </p>
      <center>
        <q-btn
          rounded
          dense
          class="btn q-pa-sm q-ma-sm shadow-2 text-dark"
          :class="[
            $q.screen.width < 600 ? 'btnIntroMobile ' : 'btnIntroDesktop   ',
          ]"
          :to="isCity ? '/air/city' : ''"
          @click="clickBtn"
          color="grey-9"
          >Weather in {{ city }}</q-btn
        >
      </center>
    </div>
    <div id="map" style="height: 400px; max-height: 2000px"></div>
  </div>
</template>

<script>
console.clear();
import { Notify } from "quasar";
export default {
  data() {
    return {
      city: "Kokshetau",
      isCity: "",
    };
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
          center: [53.2833, 69.3833],
          zoom: 13,
          fullscreenControl: false,
        });
      });
    },
  },
  mounted() {
    const script = document.createElement("script");
    script.src = "https://maps.api.2gis.ru/2.0/loader.js";
    script.async = true;
    script.onload = this.initMap;
    document.head.appendChild(script);
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
