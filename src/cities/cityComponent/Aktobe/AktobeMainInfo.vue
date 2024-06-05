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
        img-src="https://tengrinews.kz/userdata/article/2023/article_2143/resize/photo_3132.jpeg"
      >
        <div class="absolute-bottom custom-caption"></div>
      </q-carousel-slide>

      <q-carousel-slide
        :key="'duplicate-' + slideCount"
        :name="'duplicate-' + slideCount"
        img-src="https://kartinki.pics/pics/uploads/posts/2022-08/thumbs/1660078744_27-kartinkin-net-p-aktobe-kazakhstan-dostoprimechatelnosti-kr-27.jpg"
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
          text: " Aktobe is the only city in Kazakhstan that is divided into old and new parts. Representatives of two faiths - Islam and Christianity - get along well here, and the number of mosques and Orthodox churches is approximately the same.",
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
