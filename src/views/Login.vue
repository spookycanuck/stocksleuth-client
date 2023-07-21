<template>
  <div class="container">
    <v-card elevation="4" tag="section" class="login">
      <v-card-title>
        <img class="logo img" :src="img" />
        <h3>Stock Sleuth Login</h3>
      </v-card-title>
      <v-divider></v-divider>
      <v-card-text>
        <p>Sign in with your username and password</p>
        <v-form ref="login" v-model="isFormValid">
          <v-text-field
            class="field"
            color="blue"
            label="Email"
            type="text"
            v-model="email"
            :rules="nameRules"
            outline
            clearable
          >
          </v-text-field>
          <v-text-field
            class="field"
            color="blue"
            label="Password"
            type="password"
            v-model="password"
            :rules="pwRules"
            outline
            clearable
          >
          </v-text-field>
        </v-form>
        <p class="signUp">
          Don't have an account? Sign up
          <router-link to="/sign-up">here</router-link>
        </p>
      </v-card-text>
      <v-divider style="margin-top: 20px"></v-divider>
      <v-card-actions>
        <v-btn class="fpw" v-on:click="resetPw">Forgot Password?</v-btn>
        <v-spacer></v-spacer>
        <v-btn size="x-large" v-on:click="login" :disabled="!isFormValid"
          >Login</v-btn
        >
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Login",
  data: () => ({
    img: require("@/assets/logo.png"),
    email: null,
    password: null,
    isFormValid: false,
    nameRules: [(v) => !!v || "Email is required"],
    pwRules: [
      (x) => !!x || "Password is required",
      //x => /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/.test(x) || 'Password must be at least 6 characters.\nPassword must contain at least one number, lowercase letter, and uppercase letter',
    ],
  }),
  methods: {
    async login() {
      let res = await axios.get(
        `http://localhost:3000/users?email=${this.email}&password=${this.password}`
      );

      if (res.status == 200 && res.data.length > 0) {
        localStorage.setItem("user-info", JSON.stringify(res.data[0].firstName));
        this.$store.dispatch("auth/login")
        this.$router.push({ name: "Home" });
        // console.log('auth state: ', this.$store.getters['auth/auth'])
      }
    },
    resetPw() {
      this.$router.push({ name: "ForgotPW" });
    },
  },
  computed: {
      auth() {
        return this.$store.getters["auth/auth"];
      },
    },
  mounted() {
    // TODO: Set user session data to save session if user refreshes page
    let user = this.$store.getters["auth/auth"];
    if (user) {
      this.$router.push({ name: "Home" });
    }
  },
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  margin-top: 200px;
}
.v-card {
  border-radius: 4px;
  width: 500px;
}
.login h3,
p {
  text-align: center;
}
.login .field {
  margin-top: 10px;
}
.v-btn {
  width: 200px;
  border-radius: 4px;
}
.login button:hover {
  color: whitesmoke;
  background-color: rgb(134, 151, 156);
}
.fpw,
.signUp {
  font-size: 12px;
}
</style>
