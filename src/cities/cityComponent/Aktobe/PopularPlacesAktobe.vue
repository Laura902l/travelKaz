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
        In summer, there are many places to relax along the coast of Kargal,
        where you can sunbathe and swim, barbecue, play volleyball. Here they
        also offer to ride on a catamaran, jump off bungees. Entrance to such
        bases is paid, the cost is the equivalent of 2 - 3 US dollars per
        person. From places closer to the city you can recommend the Aktobe Sea,
        also known as the Sazda Reservoir. Participation in local football games
        is considered a special event in the city.
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
          place: "Central mosque of Aktobe city",
          description:
            "Regional Museum of History and Local Lore. Opened in 1929. Of particular interest to visitors are exhibitions on the history of the Kazakh Khanate and Aktobe of the 19th century. The departments of nature, archeology, and ethnography are open to the public. The museum is located on Oraza Tateuly Street, building 3.",
          img: "https://kartinki.pics/pics/uploads/posts/2022-08/1660078681_21-kartinkin-net-p-aktobe-kazakhstan-dostoprimechatelnosti-kr-21.jpg",
        },
        {
          id: 2,
          place: "Tourist centre",
          description:
            "As such, there are no tourist streets in Aktobe, but there are places loved by the townspeople. Guests of the city also enjoy visiting them. Abulkhair Khan Avenue. It is better to start your walk from a small park near the regional philharmonic. The street leads to the city akimat, where a monument to Abulkhair Khan is erected. Nearby is Oktyabrsky Square with a fountain. Second place - Aliya Moldagulova Avenue. In this case, you need to walk along the street on one side, and then return back along the other. Along the avenue there are squares and parks with places to relax; at the end of the street there is the Eternal Flame memorial.",
          img: "https://5q.media/wp-content/uploads/2022/11/0522649-1.jpg",
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
  line-height: 1.5;
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
