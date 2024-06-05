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
            <p class="placeTitle largeText">{{ place.place }}</p>
            <p class="placeDescription mediumText">{{ place.description }}</p>
          </div>
        </q-col>
      </q-row>
    </div>
    <div class="fullWidthContaine1">
      <div class="textContainer mediumText">
        Kokshetau is a small city in northern Kazakhstan, whose name translates
        as “Blue Mountain”. In 1824, the military fortification of Kokchetav was
        founded here, 120 years later everything changed, and the Kokchetav
        region appeared in this place. Since 1999, Kokshetau has been the
        regional center of the Akmola region. Currently, 150 thousand people
        live in Kokshetau
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
            "The most famous symbol of Kokshetau is a large inscription with the name of the city on the slope of the Bukpa hill, which resembles the popular letters “Hollywood” in California. The length of the Kokshetau inscription is 67 meters, and the height is 10 meters. This hill can be reached quite quickly; it is only a 30-minute walk from the central park. There is also an observation deck on this hill, which offers a magnificent view of the entire city. To get there, you need to climb up the steps specially leading to it",
          img: "https://www.global.shokan.edu.kz/media/images/99999.width-800.jpg",
        },
        {
          id: 2,
          place:
            "Lay carnations on the Eternal Flame memorial complex and walk along the Walk of Military Glory",
          description:
            "This monument was built and opened on November 5, 1977. In the center is the figure of a warrior in a raincoat, holding a machine gun, frozen in mournful silence. As a symbol of memory of the heroism of our fellow countrymen, the Eternal Flame does not go out. ",
          img: "https://www.global.shokan.edu.kz/media/images/5555.width-800.jpg",
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
  font-size: 20px;
  color: #ffffff;
  padding: 20px;
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
  font-size: 24px;
  font-weight: bold;
  color: #bbac1f;
  margin-top: 10px;
}
.largeText {
  font-size: 20px;
}

.mediumText {
  font-size: 18px;
}
</style>
