<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="loginContainer col text-center" style="min-width: 300px">
    <div class="loginWrapper q-gutter-y-md column">
      <h3>Login</h3>
      <p>
        Do you have an account? If not,
        <span class="register-link" @click="navigateToRegistration">
          register
        </span>
        here
      </p>

      <form>
        <q-input
          type="text"
          name="login_name"
          v-model="log_name"
          label="Specify the user name"
        ></q-input>
        <q-input
          :type="isPwd ? 'password' : 'text'"
          name="login_pass"
          v-model="log_pass"
          label="Enter the password"
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
          class="logBtn"
          size="16px"
          rounded
          label="Log in to
        your account"
          @click="login"
        />
      </form>
    </div>
  </div>
</template>

<script>
import api from "../api";
import { Notify } from "quasar";

export default {
  name: "LoginComponent",
  data() {
    return {
      log_name: "",
      log_pass: "",
      isPwd: true,
    };
  },
  mounted() {
    const user = sessionStorage.getItem("user");
    if (user) {
      this.$router.push({ path: `/profile/${user}` });
    }
  },
  methods: {
    togglePasswordVisibility() {
      this.isPwd = !this.isPwd;
    },
    async login() {
      const data = {
        username: this.log_name,
        password: this.log_pass,
      };

      try {
        const response = await api.loginUser(data);
        if (response.status === 200) {
          Notify.create("The login was completed successfully!");
          sessionStorage.setItem("user", this.log_name);
          this.$router.push({ path: `/profile/${this.log_name}` });
        } else {
          Notify.create("Invalid credentials!");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        if (error.response && error.response.status === 401) {
          Notify.create("Invalid credentials!");
        } else {
          Notify.create("An error occurred while logging in!");
        }
      }
    },

    navigateToRegistration() {
      this.$router.push({ path: "/registration" });
    },
  },
};
</script>

<style>
.logBtn {
  width: auto;
}
.loginContainer {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
}

.loginWrapper {
  max-width: 400px;
  width: 900px;
}
.register-link {
  color: blue;
  cursor: pointer;
  text-decoration: underline;
}
</style>
