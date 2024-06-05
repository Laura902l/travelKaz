<template>
  <div>
    <div class="popularContainer">
      <p class="headline q-pa-md text-center">Popular places</p>

      <div class="q-pa-md">
        <div
          style="align-items: flex-start"
          v-for="places in popularPlaces"
          :key="places.id"
          class="img"
          :class="[
            $q.screen.width < 850
              ? 'column mobileVersionPopular'
              : 'row desktopVersionPopular q-gutter-md q-pt-lg',
          ]"
        >
          <img class="col fit placesAlmaty" :src="places.img" />
          <div class="col">
            <p
              class="q-pt-md placesheadline"
              :class="[
                $q.screen.width < 850
                  ? 'headlinePlacesMobile'
                  : 'headlinePlacesDesktop',
              ]"
            >
              {{ places.place }}
            </p>
            <p
              :class="[
                $q.screen.width < 850
                  ? 'descPlacesMobile'
                  : 'descPlacesDesktop',
              ]"
            >
              {{ places.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      popularPlaces: [
        {
          id: 1,
          place: "Big Almaty Lake",
          description:
            "A high-mountain reservoir in the Trans-Ili Alatau at an altitude of 2510 meters above sea level, 15 kilometers south of the city of Almaty",
          img: "https://images.unsplash.com/photo-1572940734104-684309ed7ac9?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          id: 2,
          place: "Shymbulak",
          description:
            "A popular ski resort in Kazakhstan, near Alma-Ata, located on the Zailiysky Alatau ridge a little above the Medeo alpine skating rink.",
          img: "https://images.unsplash.com/photo-1523125231080-51ceb791c0ab?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          id: 3,
          place: "Alma-Arasan",
          description:
            "A picturesque mountain gorge, located in the south-west of Alma-Ata. It is located at an altitude of 1780 m on the northern slope of the Trans-Ili Alatau.",
          img: "https://images.unsplash.com/photo-1603454211489-162865d96cc6?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fGFsbWF0eXxlbnwwfHwwfHx8MA%3D%3D",
        },
      ],
    };
  },
};
</script>

<style>
:root {
  --color: #ec7636;
}
.popularContainer {
  height: auto;
  color: #ffffff;
  background-color: #000;
}

.popularContainer .headline {
  font-size: 24px;
  font-weight: bold;
  color: var(--color);
}

.placesheadline {
  color: var(--color);
  font-weight: bold;
}

.headlinePlacesDesktop {
  font-size: 30px;
}

.descPlacesDesktop {
  font-size: 20px;
}

.desktopVersionPopular img {
  max-height: 450px;
}

.mobileVersionPopular img {
  height: 50px;
}
</style>
