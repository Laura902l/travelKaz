<template>
  <div>
    <div class="popularContainer">
      <p class="headline text-center q-pa-md">Popular places</p>

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

    <!-- Map container -->
    <div id="map" class="mapContainer"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      popularPlaces: [
        {
          id: 1,
          place: "Rixos Khadisha Shymkent",
          description:
            "The first international five-star hotel Rixos Khadisha Shymkent, located in the heart of Shymkent, a sultry and beautiful city in Southern Kazakhstan, combines history, culture and a high level of service quality. Immerse yourself in a unique world that embodies comfort and pleasure by taking advantage of the hotel's rooms, restaurants, SPA and conference rooms. Rixos Khadisha Shymkent Hotel has the largest and most diverse room stock in South Kazakhstan. It offers 177 spacious rooms, decorated in a classic style using modern technology. The rooms at the hotel vary in size and layout, emphasizing its classic style and reflecting the rich architectural heritage. Each room consists of a dressing room, a luxurious bedroom and a bathroom.",

          img: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/38760953.jpg?k=9735da3bcb16fb515180c9b97115ea3892b2318cbc73ef581c3fae291b9b7e30&o=&hp=1",
        },
        {
          id: 2,
          place: "Old Town",
          description:
            "The old city of Shymkent is the only place in the whole of Kazakhstan that has preserved its historical core",
          img: "https://avatars.mds.yandex.net/get-altay/6406681/2a00000180be405aa5aca890ab8bb0a83bb8/orig",
        },
        {
          id: 3,
          place: "The Central Mosque of the South Kazakhstan region",
          description:
            "A bright religious landmark of Shymkent is the Central Mosque. It is located in the western part of the city. It was built with the financial support of the President of the UAE.",

          img: "https://www.muftyat.kz/media/muftyat/73496_1391241190.jpg",
        },
        {
          id: 4,
          place: "Shymkent Arbat ",
          description:
            "The most attractive cultural and entertainment center of the city is Arbat. It is located in the very center of Shymkent. The arbat is decorated with 12 luminous angels hovering over the recreation area.",
          img: "https://upload.wikimedia.org/wikipedia/commons/9/9e/Light-montage-Arbat-Shymkent-Kazakhstan.jpg",
        },
      ],
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
            Notify.create("Вы находитесь в этом городе!");
          } else {
            Notify.create("Подождите!");
            this.isCity = true;
            localStorage.setItem("flightCity", this.city);
          }
        },
        initMap() {
          DG.then(() => {
            const map = DG.map("map", {
              center: [42.3417, 69.5901],
              zoom: 13,
            });

            const marker = DG.marker([42.3417, 69.5901]).addTo(map);
            marker.bindPopup("Шымкент - город в Казахстане");
          });
        },
      },
    };
  },
};
</script>

<style>
:root {
  --color: #c2b938;
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
