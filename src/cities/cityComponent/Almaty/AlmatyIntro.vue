<template>
  <div class="astanaIntroContainer">
    <div
      class="wrapper"
      :class="[$q.screen.width < 600 ? 'mobileVersion' : 'desktopVersion']"
    >
      <img
        class="fit"
        src="https://media.cntravellerme.com/photos/65016eeed1c33603e64ad3ad/16:9/w_2560%2Cc_limit/1310961962"
        alt=""
      />
      <p
        class="q-pt-lg headerIntro text-dark"
        :class="[
          $q.screen.width < 600
            ? 'headerMobileVersion'
            : 'headerDesktopVersion q-pt-xl',
        ]"
      >
        Almaty is the southern capital of Kazakhstan!
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
  </div>
</template>

<script>
console.clear();
import { Notify } from "quasar";
export default {
  data() {
    return {
      city: "Almaty",
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
