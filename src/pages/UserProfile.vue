<template>
  <div class="container">
    <q-carousel
      arrows
      animated
      v-model="slide"
      height="700px"
      autoplay
      autoplay-speed="1000"
      infinite
    >
      <q-carousel-slide
        name="first"
        img-src="https://aboutkazakhstan.com/blog/wp-content/uploads/2011/09/almaty-oblast-kazakhstan-beauty-1.jpg"
      >
        <div class="absolute-bottom custom-caption"></div>
      </q-carousel-slide>
      <q-carousel-slide
        name="second"
        img-src="https://www.travelseewrite.com/wp-content/uploads/2023/07/Bolshoye-Almatinskoye-Ozero-Almaty-Kazakhstan.jpeg"
      >
        <div class="absolute-bottom custom-caption"></div>
      </q-carousel-slide>
      <q-carousel-slide
        :key="'duplicate-' + slideCount"
        :name="'duplicate-' + slideCount"
        img-src="../assets/man.avif"
      >
      </q-carousel-slide>
    </q-carousel>

    <div class="card-container">
      <q-card bordered class="my-card custom-shadow transparent-card">
        <q-card-section class="text-center">
          <img
            src="../assets/profile.webp"
            alt="User Photo"
            class="profile-img"
          />
          <q-container class="text-subtitle">
            <div class="text1">Hello {{ username || "Loading..." }}</div>
            <p style="font-weight: bold; font-size: 20px">
              Get ready for an unforgettable trip to <br />
              Kazakhstan with KazTravel.
            </p>
          </q-container>
          <q-btn
            class="logout-btn"
            size="16px"
            rounded
            color="secondary"
            label="Logout"
            @click="logout"
          />
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserProfile",
  props: {
    username: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      slide: "first",
    };
  },
  methods: {
    logout() {
      sessionStorage.removeItem("user");
      this.$router.push("/login");
      this.checkLogin();
    },
  },
};
</script>

<style scoped>
.container {
  position: relative;
  height: 700px;
}

.card-container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.my-card {
  width: 100%;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.profile-img {
  width: 250px;
  height: 250px;
  border-radius: 50%;
}

.text1 {
  font-size: 30px;
  margin-bottom: 0.9em;
  font-weight: bold;
}

.transparent-card {
  background-color: rgba(255, 255, 255, 0.5);
}

.logout-btn {
  margin-top: 20px;
}
</style>
