<template>
  <div class="container">
    <v-card elevation="4" tag="section" class="login">
      <v-card-title>
        <h3>Stock Sleuth Login</h3>
      </v-card-title>
      <v-divider></v-divider>
      <v-card-text>
        <p>Sign in with your username and password</p>
        <v-form ref='login'>
          <v-text-field
            class="field"
            color="blue"
            label="Username"
            type="text"
            v-model="name"
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
      </v-card-text>
      <v-divider style="margin-top: 20px"></v-divider>
      <v-card-actions>
        <v-btn class="fpw" v-on:click="resetPw">Forgot Password?</v-btn>
        <v-spacer></v-spacer>
        <v-btn size="x-large" v-on:click="login">Login</v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "Login",
  data: () => ({
    name: null,
    password: null,
    nameRules: [(v) => !!v || "Username is required"],
    pwRules: [
      (x) => !!x || "Password is required",
      //x => /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/.test(x) || 'Password must be at least 6 characters.\nPassword must contain at least one number, lowercase letter, and uppercase letter',
    ],
  }),
  methods: {
    login() {
      let result = {
        name: this.name,
        password: this.password,
      };
      console.log("login info:", this.name, this.password);
      this.$refs.login.reset();
    },
    resetPw() {
      this.$router.push({ name: "forgot password" });
    },
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
.fpw {
  font-size: 12px;
}
</style>
