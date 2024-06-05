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
      <div class="textAndVideoContainer">
        <div class="textContainer mediumText">
          The city consists of three districts - Almaty, Saryarka and Yesil.
          Today the city of Astana is a city of new opportunities and a center
          of attraction active, talented and purposeful youth. Capital of
          Kazakhstan is the main educational and scientific platform of the
          country and strives to become a regional hub of knowledge, science and
          innovation. City Astana received capital status in 1997, and within 22
          years it became the largest modern metropolis with developed
          infrastructure, transport network and social life.
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
          place: "Baiterek",
          description:
            "According to the legends of the Kazakh people, on the banks of the World River there grows the Tree of Life, which is called Baiterek. Samruk, the sacred bird of happiness, flies to this tree to lay a golden egg in the nest on its top. The egg symbolizes the Sun, which gives life and hope. But below, between the roots, hides Aidahar, an evil dragon who wants to eat the egg. This is what the Kazakh version of the universe looks like. And more recently, Baiterek has turned from a folklore symbol into a beautiful tower, reminiscent of the struggle between good and evil. In 2002, in the very center of the capital of Kazakhstan, the monumental structure of Baiterek was opened. It marked a new stage in the life of the people, and became a symbol not only of Astana, but of the entire country.",
          img: "https://images.unsplash.com/photo-1641990306910-7080cae8daa5?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          id: 2,
          place: "Expo 2017",
          description:
            "Expo 2017 was held in the capital of Kazakhstan, Astana, from June 10 to September 10, 2017. 115 states and 22 international organizations took part in it. The exhibition was visited by more than 3 million people. During the EXPO, the capital of Kazakhstan was filled with the sounds of different cultures from all over the world. Every day, concerts, shows, National Days and other entertainment events took place on the exhibition grounds. EXPO was visited by millions of tourists, and therefore each country sought to create a unique pavilion that could express the national identity of its culture and demonstrate to the world the level of its economic and technological development.",
          img: "https://images.unsplash.com/photo-1588085350422-200b573baedc?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
  font-size: 18px;
}
</style>
