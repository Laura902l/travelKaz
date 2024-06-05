<template>
  <div class="registrationContainer text-center">
    <div class="registrationWrapper q-gutter-y-md column">
      <h3>Registration</h3>

      <p>
        If you already have an account,
        <span class="register-link" @click="navigateToLogin">log in </span>here
      </p>

      <form @submit.prevent="register">
        <q-input
          type="text"
          @keyup="checkUserName"
          name="user_name"
          v-model="name"
          label="Specify the user name"
          hint="The user name must contain 3 characters"
        ></q-input>
        <q-input
          :type="isPwd ? 'password' : 'text'"
          @keyup="checkPassword"
          name="password"
          v-model="password"
          label="Enter the password"
          hint="The user's password must contain 8 characters"
        >
          <template v-slot:prepend>
            <q-icon
              :name="isPwd ? 'visibility_off' : 'visibility'"
              class="cursor-pointer"
              @click="togglePasswordVisibility"
            />
          </template>
        </q-input>
        <br />
        <q-btn
          class="clickBtn"
          size="16px"
          rounded
          label="Submit"
          type="submit"
        />
      </form>
    </div>
  </div>
</template>

<script>
import api from "../api";
import { Notify } from "quasar";

export default {
  name: "UserRegistration",
  data() {
    return {
      name: "",
      password: "",
      isPwd: true,
    };
  },
  methods: {
    togglePasswordVisibility() {
      this.isPwd = !this.isPwd;
    },
    async register() {
      const data = {
        user_name: this.name,
        password: this.password,
      };

      try {
        const response = await api.registerUser(data);

        if (response.status == 200) {
          Notify.create("The user has been successfully registered!");
          this.$router.push({ path: `/login` });
        } else if (response.status === 400) {
          Notify.create("A user with the same name already exists!");
        } else {
          Notify.create("There was an error during registration!");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        Notify.create(
          "An error occurred during registration or the user already exists!"
        );
      }
    },
    navigateToLogin() {
      this.$router.push({ path: "/login" });
    },
  },
};
</script>

<style>
.clickBtn {
  width: auto;
}
.registrationContainer {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
}

.registrationWrapper {
  max-width: 400px;
  width: 900px;
}
.register-link {
  color: blue;
  cursor: pointer;
  text-decoration: underline;
}
</style>
