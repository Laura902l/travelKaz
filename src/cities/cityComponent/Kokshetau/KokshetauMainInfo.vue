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
        img-src="https://lh5.googleusercontent.com/p/AF1QipO1QR2mlS_ZLgWDOgNZfs74jDkU5Qoa6es1kAh3=w1080-h624-n-k-no"
      >
        <div class="absolute-bottom custom-caption"></div>
      </q-carousel-slide>

      <q-carousel-slide
        :key="'duplicate-' + slideCount"
        :name="'duplicate-' + slideCount"
        img-src="https://kartinki.pics/pics/uploads/posts/2022-08/thumbs/1661391415_3-kartinkin-net-p-oboi-russkaya-priroda-krasivo-4.jpg"
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
          text: "Kokshetau is a small, green and soulful city, which is famous for its picturesque surroundings. This area has everything from endless plains to forested hills. In the city itself there is a hill, which offers a gorgeous view of the entire city, and Lake Kopa, on the shore of which you can admire the most beautiful sunsets.",
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
