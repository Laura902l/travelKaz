<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="header">
    <q-layout view="lHh lpr lFf" container class="layout bg-transparent">
      <q-header class="bg-transparent headerClass">
        <q-toolbar>
          <q-btn
            @click="drawer = !drawer"
            icon="menu"
            v-model="fabLeft"
            vertical-actions-align="left"
            direction="up"
            round
            flat
            size="24px"
            dense
            class="menuBtn bg-transparent"
          >
            <q-menu>
              <q-list style="min-width: 100px">
                <q-item clickable v-close-popup>
                  <q-btn icon="home" flat to="/">Home</q-btn>
                </q-item>

                <q-item v-if="!loginCheck" clickable v-close-popup>
                  <q-btn icon="style" flat to="/registration"
                    >Registration</q-btn
                  >
                </q-item>
                <q-item clickable v-close-popup>
                  <q-btn icon="style" flat to="/login">
                    {{ loginCheck ? "Profile" : "Login" }}</q-btn
                  >
                </q-item>

                <q-separator />
                <q-item clickable v-close-popup>
                  <q-btn icon="style" flat to="/about">About Us</q-btn>
                </q-item>
                <q-item clickable v-close-popup>
                  <q-btn icon="print" flat to="/contact">Contacts</q-btn>
                </q-item>

                <q-separator />
                <div v-if="loginCheck">
                  <q-item clickable v-close-popup>
                    <q-btn icon="eco" flat to="/city/astana">Astana</q-btn>
                  </q-item>
                  <q-item clickable v-close-popup>
                    <q-btn icon="eco" flat to="/city/almaty">Almaty</q-btn>
                  </q-item>
                  <q-item clickable v-close-popup>
                    <q-btn icon="eco" flat to="/city/atyrau">Atyrau</q-btn>
                  </q-item>
                  <q-item clickable v-close-popup>
                    <q-btn icon="eco" flat to="/city/aktau">Aktau</q-btn>
                  </q-item>
                  <q-item clickable v-close-popup>
                    <q-btn icon="eco" flat to="/city/aktobe">Aktobe</q-btn>
                  </q-item>
                  <q-item clickable v-close-popup>
                    <q-btn icon="eco" flat to="/city/shymkent">Shymkent</q-btn>
                  </q-item>
                  <q-item clickable v-close-popup>
                    <q-btn icon="eco" flat to="/city/kokshetau"
                      >Kokshetau</q-btn
                    >
                  </q-item>
                </div>
              </q-list>
            </q-menu>
          </q-btn>
          <q-toolbar-title class="title">KazTravel</q-toolbar-title>
        </q-toolbar>
      </q-header>
    </q-layout>
  </div>
</template>

<script>
import { ref } from "vue";
import gsap from "gsap";
// import Drawer from '../components/Drawer.vue';
export default {
  data() {
    return {
      drawer: false,
      loginCheck: false,
      currentCity: null,
    };
  },
  mounted() {
    this.checkLogin();
    this.getCurrentCity();
  },
  methods: {
    checkLogin() {
      const user = sessionStorage.getItem("user");

      if (user && user.length > 0) {
        this.loginCheck = true;
      } else {
        this.loginCheck = false;
      }
    },
    getCurrentCity() {
      if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition((position) => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;

          this.fetchCityFromCoordinates(latitude, longitude);
        });
      } else {
        console.error("Geolocation is not supported by your browser");
      }
    },

    async fetchCityFromCoordinates(latitude, longitude) {
      try {
        const response = await fetch(
          `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
        );
        const data = await response.json();
        const address = data.address;
        const city =
          address.city || address.town || address.village || "Unknown city";
        this.currentCity = city;
        localStorage.setItem("currentCity", this.currentCity);
      } catch (error) {
        console.error("Error getting city:", error);
      }
    },
  },
};
</script>

<style>
.header {
  position: relative;
  height: 65px;
}

.menuBtn {
  color: black;
  padding: 10px;
}
.layout img {
  position: absolute;
  height: 750px;
  width: 100%;
}
.title {
  color: black;
  font-size: 26px;
}
</style>
