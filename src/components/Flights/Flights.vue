<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <div>
      <FlightsTime />
    </div>
  </div>
</template>

<script>
import FlightsTime from "./FlightsTime.vue";

export default {
  components: {
    FlightsTime,
  },
  data() {
    return {
      city: localStorage.getItem("flightCity"),

      currentCity: null,
    };
  },
  mounted() {
    this.getCurrentCity();
  },
  methods: {
    getCurrentCity() {
      if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            this.fetchCityFromCoordinates(latitude, longitude);
          },

          (error) => {
            console.error("Error when getting geolocation:", error);
          }
        );
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
        console.error("Error when receiving city", error);
      }
    },
  },
};
</script>

<style></style>
