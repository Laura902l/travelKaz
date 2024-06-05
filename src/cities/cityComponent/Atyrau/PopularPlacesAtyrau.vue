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
        It’s not for nothing that Atyrau is called the “Oil Capital of
        Kazakhstan” - after all, The Kazakh Caspian region is an analogue of our
        Ugra. The most powerful oil deposits, including the supergiants Tengiz
        and Kashagan (included in ten largest in the world) are just beginning
        to develop, and by 2020 it is planned to bring Kazakhstan into the top 5
        leaders in oil production. with their own Kazakhstan owes its renowned
        economic successes not only Nazarbayev’s competent policy (although this
        too), but also oil reserves, which the Kazakh Khan managed to properly
        dispose of (which, by the standards of former USSR, very, very many!).
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
          place: "Attractions",
          description:
            "Atyrau is known as the oil capital of Kazakhstan. Oil, gas, mining and fishing are the main industries of Atyrau. In the Atyrau region there is a unique Tengiz oil field, the development of which began in the 90s. The Ural River divides Atyrau into two parts: European and Asian. In Atyrau there is the longest pedestrian bridge listed in the Guinness Book of Records.",
          img: "https://f.azh.kz/news/089/969/717464119ecb16343.jpg",
        },
        {
          id: 2,

          description:
            "In April-May 2010, an expedition of the Russian Geographical Society came to the conclusion that the border of Europe should be drawn along the Mugodzhary, along the edge of the Caspian lowland, where the East European Plain ends and the western ledges of the Ustyurt plateau pass[6], that is even further south than is now commonly believed. To date, the opinion of a group of scientists from the Russian Geographical Society has not been assessed by such an international organization as the International Geographical Union. Thus, the Atyrau region of Kazakhstan (using the traditional border between Asia and Europe) is almost entirely located in Europe.",
          img: "https://www.advantour.com/img/kazakhstan/images/atyrau.jpg",
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
