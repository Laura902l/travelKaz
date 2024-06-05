<template>
  <div class="infoContainer">
    <div class="fullWidthContainer">
      <h4 class="headerText">
        Discover Astana: The Capital of Kazakhstan and the Heart of Modernity
      </h4>
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
        img-src="../../../assets/astana-avtor-evgenykz.webp"
      >
        <div class="absolute-bottom custom-caption"></div>
      </q-carousel-slide>
      <q-carousel-slide name="second" img-src="../../../assets/астана.jpeg">
        <div class="absolute-bottom custom-caption"></div>
      </q-carousel-slide>

      <q-carousel-slide
        :key="'duplicate-' + slideCount"
        :name="'duplicate-' + slideCount"
        img-src="../../../assets/Astana-1920x720_tcm10-5921.avif"
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
          text: " This is a young, modern, comfortable and dynamic city in which every person will feel the hospitality and cordiality of the capital. The city is located on the Ishim River, which divides it into right and left banks. The left bank is more beautiful - this is where all the unusual buildings are located. Gradually, the head offices of banks and other significant organizations are moving from Almaty (the former capital of Kazakhstan) to Astana. During the cold season, it is better not to go to Astana for tourism purposes.",
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
