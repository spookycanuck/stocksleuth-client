<template>
  <div class="container">
    <v-card elevation="4" tag="section">
      <v-card-title>
        <h3>Stock Sleuth Login</h3>
      </v-card-title>
      <v-divider></v-divider>
      <v-card-text>
        <p>Sign in with your username and password</p>
        <v-form>
          <v-text-field outline label="Username" type="text" v-model="username">
          </v-text-field>
          <v-text-field
            outline
            hide-details
            label="Password"
            type="password"
            v-model="password"
          >
          </v-text-field>
        </v-form>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-actions>
        <v-btn color="blue" class="fpw">Forgot Password?</v-btn>
        <v-spacer></v-spacer>
        <v-btn size="x-large" color="blue">Login</v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
   name: 'Login',
   props: {
      source: String,
   },
};
</script>


<style scoped>
.container {
  display: flex;
  justify-content: center;
  margin-top: 200px;
}
.v-btn {
  border-radius: 4px;
}
.v-card {
  border-radius: 4px;
  width: 400px;
}
.v-card__title {
  text-transform: uppercase;
}
.fpw {
  font-size: 12px;
}
</style>
