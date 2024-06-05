<template>
  <div class="infoContainer">
    <div class="fullWidthContainer">
      <h4 class="headerText">Aktau is a port city in southwest Kazakhstan</h4>
      <br />
      <q-row class="row">
        <q-col v-for="item in items" :key="item.id" :span="item.span">
          <span :class="adaptFontSize(item.text)">{{ item.text }}</span>
        </q-col>
      </q-row>
    </div>

    <q-carousel
      arrows
      animated
      v-model="slide"
      height="500px"
      autoplay
      autoplay-speed="1000"
      infinite
    >
      <q-carousel-slide
        name="first"
        img-src="https://lifehacker.ru/wp-content/uploads/2022/06/Na-more-v-Kazahstan-6-idej-kak-sdelat-otpusk-v-Aktau-nezabyvaemym_1655736162.jpg"
      >
        <div class="absolute-bottom custom-caption"></div>
      </q-carousel-slide>

      <q-carousel-slide
        :key="'duplicate-' + slideCount"
        :name="'duplicate-' + slideCount"
        img-src="https://cdn.lifehacker.ru/wp-content/uploads/2022/06/kurak_1655736800-1280x640.jpg"
      >
      </q-carousel-slide>
    </q-carousel>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slide: "first",
      items: [
        {
          id: 1,
          text: "Summers are very hot here and there is practically no greenery. Few people went here out of idle interest, but recently the tourism sector has begun to actively develop, which is greatly facilitated by the rapid development of oil production enterprises. Aktau is interesting primarily because the city was founded after the discovery of uranium ore deposits here. There is no natural fresh water here; drinking water is obtained by desalinating salt water from the Caspian Sea. At the same time, skyscrapers with 30 floors are a common occurrence here, and a huge number of business travelers are gradually being replaced by tourists.",
          span: 3,
        },
      ],
    };
  },
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
</script>

<style scoped>
.infoContainer {
  background-color: rgb(37, 37, 37);
  color: white;
}

.fullWidthContainer {
  width: 90%;
  margin: 0 auto;
  padding-bottom: 95px;
  padding-top: 95px;
}

.headerText {
  font-size: 24px;
  color: #c2b938;
}

.largeText {
  font-size: 20px;
}

.mediumText {
  font-size: 14px;
}
</style>
