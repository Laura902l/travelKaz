<template>
  <div class="q-pa-md text-center justify-center q-gutter-md same-height">
    <h3 style="font-weight: bold">Contact Us</h3>
    <p style="font-size: 20px">
      Do you want to cooperate with us? Just leave your details!
    </p>
  </div>
  <q-container class="q-pa-md row justify-center q-gutter-md same-height">
    <q-card bordered class="my-card custom-shadow">
      <q-card-section class="row items-center justify-center">
        <!-- Contact Information Card -->
        <q-card
          bordered
          class="contact-info-card custom-shadow black-bg q-pa-md"
        >
          <q-card-section>
            <h4 style="font-weight: bold">Contact Information</h4>
            <p style="font-size: 17px">Say something to start a live chat!</p>
            <p class="spacer"></p>
            <p><q-icon name="phone" /> +7 123 456 789</p>
            <p><q-icon name="email" /> kaztravel@gmail.com</p>
            <p>Astana city, Bukar Zhyrau street 55</p>
            <p class="spacer"></p>
            <div class="row"></div>
            <div class="row">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-envelope"
                viewBox="0 0 16 16"
              >
                <path
                  d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"
                />
              </svg>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-instagram"
                viewBox="0 0 16 16"
              >
                <path
                  d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"
                />
              </svg>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-cursor-fill"
                viewBox="0 0 16 16"
              >
                <path
                  d="M14.082 2.182a.5.5 0 0 1 .103.557L8.528 15.467a.5.5 0 0 1-.917-.007L5.57 10.694.803 8.652a.5.5 0 0 1-.006-.916l12.728-5.657a.5.5 0 0 1 .556.103z"
                />
              </svg>
            </div>
          </q-card-section>
        </q-card>

        <div class="form-section white-bg">
          <q-container class="row">
            <div class="col">
              <label>First Name</label>
              <q-input
                v-model="firstName"
                stack-label
                :dense="dense"
                required
              />
            </div>
            <div class="col"></div>
            <div class="col">
              <label>Last Name</label>
              <q-input v-model="lastName" stack-label :dense="dense" required />
            </div>
          </q-container>
          <br />
          <q-container class="row">
            <div class="col">
              <label>Email</label>
              <q-input v-model="email" stack-label :dense="dense" required />
            </div>
            <div class="col"></div>
            <div class="col">
              <label>Phone Number</label>
              <q-input
                v-model="phoneNumber"
                stack-label
                :dense="dense"
                required
              />
            </div>
          </q-container>
          <br />
          <label>Type of cooperation</label>
          <div class="subject-selection q-mt-md q-mb-md">
            <q-option-group
              v-model="selectedSubject"
              :options="subjects"
              type="radio"
              inline
              class="custom-radio"
            />
          </div>

          <q-btn
            label="Send"
            color="black"
            class="q-mt-md q-btn-small q-ml-auto"
            @click="handleSubmit"
          />
        </div>
      </q-card-section>
    </q-card>
  </q-container>
</template>

<script>
import { Notify } from "quasar";
export default {
  data() {
    return {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      dense: true,
      subjects: [
        {
          label: "Employment contract",
          value: "Employment contract",
          color: "black",
        },
        {
          label: "Civil law agreement",
          value: "Civil law agreement",
          color: "black",
        },
        { label: "Freelance", value: "Freelance", color: "black" },
        {
          label: "Individual entrepreneurship",
          value: "Individual entrepreneurship",
          color: "black",
        },
        { label: "Outsourcing", value: "Outsourcing", color: "black" },
      ],
      selectedSubject: "General Inquiry",
    };
  },
  methods: {
    handleSubmit() {
      if (this.firstName && this.lastName && this.email && this.phoneNumber) {
        Notify.create("Thank you! Your message has been received.");
        this.$router.push({ path: "/" });
      } else {
        Notify.create("Please fill out all fields.");
      }
    },
  },
};
</script>

<style scoped>
.my-card {
  width: 100%;
  max-width: 1200px;
  border-radius: 10px;
}

.form-section {
  width: 100%;
  max-width: 600px;
  margin: 20px auto;
  border-radius: 10px;
}

.contact-info-card {
  max-width: 500px;
  border-radius: 10px;
  color: white;
  margin: 20px;
}

.black-bg {
  background-color: rgb(37, 37, 37);
}

.spacer {
  height: 30px;
}

.contact-info-card .row svg {
  margin-right: 40px;
  margin-top: 100px;
}
</style>
