<template>
  <div class="infoContainer">
    <div class="fullWidthContainer">
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
        img-src="https://upload.wikimedia.org/wikipedia/commons/6/68/%D0%A3%D1%80%D0%B0%D0%BB_%D1%80%D0%B5%D0%BA%D0%B0.jpg"
      >
        <div class="absolute-bottom custom-caption"></div>
      </q-carousel-slide>

      <q-carousel-slide
        :key="'duplicate-' + slideCount"
        :name="'duplicate-' + slideCount"
        img-src="https://images.adsttc.com/media/images/6113/37b5/a82b/eb01/6510/e2f5/large_jpg/a-36.jpg?1628649430"
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
          text: "At the end of the last century, the city played the role of a transport artery with Astrakhan. With the independence of the Republic of Kazakhstan, a lot has changed in the names of places and cities. Guryev was also renamed, which became known as Atyrau. The modern architecture of the city is typical for cities in Kazakhstan; there is a new and old part of the city. Atyrau is a green city, although its landscaping is associated with difficulties - the city is located on salt marshes.",
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
