<template>
  <div class="popularContainer">
    <br />
    <p class="headline text-center q-pa-md">Popular places</p>

    <div class="q-pa-md">
      <q-row class="row" justify="around" align="start">
        <q-col
          v-for="(place, index) in popularPlaces"
          :key="index"
          cols="12"
          md="6"
          class="col-12 col-md-6 q-mb-md"
        >
          <div class="place">
            <img class="fit" :src="place.img" />
            <p class="placeDescription mediumText">{{ place.description }}</p>
          </div>
        </q-col>
      </q-row>
    </div>
    <div class="fullWidthContaine1">
      <div class="textContainer mediumText">
        If you only have 1 day to explore Aktau, you can distribute it as
        follows. In the morning, set aside 2 hours for independent inspection of
        city monuments, including the Alley glory, Airplane MIG-21, Engine,
        monument to Akyn Kashagan, monument musician and composer Kurmangazy, or
        book a sightseeing tour of city. Then we suggest having lunch in a cafe,
        there are enough of them in the city many - from budget Burger King and
        Napoli to expensive restaurants Georgian and Asian cuisine. According to
        tourists, there is food everywhere tasty. After lunch you can go outside
        the city and see one of local attractions, including Lake Saura (92 km),
        Valley of the Torysh balls (100 km), Karagiye depression (50 km),
        necropolis Beket-Ata (280 km), Fort Shevchenko (143 km).
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

          description:
            "Mangistau Regional History and Local Lore Museum. Founded in 1975, the museum's holdings include more than 57 thousand exhibits. There are 8 exhibition halls. The museum is located at: 9 microdistrict, building 23a. Opening hours: 9 a.m. to 6 p.m., break from 12 p.m. to 2 p.m. Museum design website for three years.",
          img: "https://cdn2.tu-tu.ru/image/pagetree_node_data/1/b4ded712115f0c2a89f74ab5779d9691/",
        },
        {
          id: 2,

          description:
            "Mangistau State Historical and Cultural Reserve. It was created in 1980 with the aim of preserving historical monuments and natural landscapes. Two stationary exhibitions are open for tourists, and traveling thematic exhibitions are also organized here. In total, 449 monuments are protected by the reserve. Located in microdistrict 3, building 66.",
          img: "https://cdn2.tu-tu.ru/image/pagetree_node_data/1/b5de3a80b5b3230bd225e3361de117c0/",
        },
      ],
      methods: {
        adaptFontSize(text) {
          if (this.$q.screen.width > 600) {
            return "largeText";
          } else {
            return "mediumText";
          }
        },
      },
    };
  },
};
</script>

<style>
.popularContainer {
  height: auto;
  color: #ffffff;
  background-color: rgb(37, 37, 37);
}

.fullWidthContaine1 {
  background-color: #f5f4ec;
  width: 100%;
  margin: 0 auto;
  padding-bottom: 75px;
  padding-top: 75px;
}

.textContainer {
  font-size: 16px;
  line-height: 1.5;
  color: #ffffff;
  padding: 30px;
  color: black;
  font-size: 16px;
}

.popularContainer .headline {
  font-size: 24px;
  font-weight: bold;
  color: #bbac1f;
}

.place {
  padding: 20px;
  border-radius: 8px;
}

.place img {
  width: 100%;
  border-radius: 8px;
}

.placeTitle {
  font-size: 18px;
  font-weight: bold;
  color: #bbac1f;
  margin-top: 10px;
}
.largeText {
  font-size: 20px;
}

.mediumText {
  font-size: 16px;
}
</style>
