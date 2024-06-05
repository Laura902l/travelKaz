<template>
  <div class="shymkentIntroContainer">
    <div
      class="wrapper"
      :class="[$q.screen.width < 600 ? 'mobileVersion' : 'desktopVersion']"
    >
      <img
        class="fit"
        src="https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcQQOMNr8wCqKK8bOq89zY_BWMO8G8aNPlRsh8PRWHn2bYWRr-af-lTAAUmXU49a6O3gGGByQOhKWk5FurRN-gE1DtJmOl33rlC0e19TDg"
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
        Shymkent is the cultural capital of the CIS
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
          color="grey-10"
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
      city: "Shymkent",

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
