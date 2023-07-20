<template>
  <div class="container">
    <v-card elevation="4" tag="section" class="signup">
      <v-card-title>
        <img class="logo img" :src="img" />
        <h3>Sign up with StockSleuth!</h3>
      </v-card-title>
      <v-divider></v-divider>
      <v-card-text>
        <p>Enter your info below to start sleuthing</p>
        <v-form ref="signUp" v-model="isFormValid">
          <v-text-field
            class="field"
            color="blue"
            label="First Name"
            type="text"
            v-model="fname"
            :rules="nameRules"
            outline
            clearable
          >
          </v-text-field>
          <v-text-field
            class="field"
            color="blue"
            label="Last Name"
            type="text"
            v-model="lname"
            :rules="nameRules"
            outline
            clearable
          >
          </v-text-field>
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
          <v-checkbox v-model="checkbox" color="blue" :rules="terms">
            <template v-slot:label>
              <div class="signUp">
                I agree to the
                <router-link to="/terms-of-service" target="_blank">
                  Terms of Service
                </router-link>
              </div>
            </template>
          </v-checkbox>
        </v-form>
        <p class="signUp">
          Already have an account? Login
          <router-link to="/login">here</router-link>
        </p>
      </v-card-text>
      <v-divider style="margin-top: 20px"></v-divider>
      <v-card-actions>
        <v-btn size="x-large" v-on:click="signup" :disabled="!isFormValid"
          >Sign Up</v-btn
        >
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "SignUp",
  data: () => ({
    img: require('@/assets/logo.png'),
    fname: null,
    lname: null,
    email: null,
    password: null,
    checkbox: false,
    isFormValid: false,
    nameRules: [(v) => !!v || "This field is required"],
    pwRules: [
      (x) => !!x || "Password is required",
      //x => /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/.test(x) || 'Password must be at least 6 characters.\nPassword must contain at least one number, lowercase letter, and uppercase letter',
    ],
    terms: [(y) => !!y || "Please agree to the terms of service"],
  }),
  methods: {
    async signup() {
      let res = await axios.post("http://localhost:3000/users", {
        firstName: this.fname,
        lastName: this.lname,
        email: this.email,
        password: this.password,
        termsAccepted: this.checkbox,
      });

      if (res.status == 201) {
        localStorage.setItem("user-info", JSON.stringify(res.data.firstName));
        this.$store.dispatch("auth/login")
        this.$router.push({ name: "Home" });
        // this.$refs.signUp.reset();
        // this.checkbox = [];
        // console.log("success!")
      }
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  margin-top: 150px;
}
.v-card {
  border-radius: 4px;
  width: 500px;
}
.signup h3,
p {
  text-align: center;
}
.signup .field {
  margin-top: 10px;
}
.v-btn {
  width: 200px;
  border-radius: 4px;
  margin: auto;
}
.signup button:hover {
  color: whitesmoke;
  background-color: rgb(134, 151, 156);
}
.fpw,
.signUp {
  font-size: 12px;
}
</style>
