<template>
  <div class="container">
    <v-card elevation="4" tag="section" class="signup fitVert">
      <v-card-title>
        <img class="logo img" :src="img" />
        <h3>Notifcations Page for {{ user.firstName }}</h3>
      </v-card-title>
      <v-divider></v-divider>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      img: require("@/assets/logo.png"),
    };
  },
  computed: {
    user() {
      return this.$store.getters["auth/user"];
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
.signup h3,
p {
  text-align: center;
}
.v-btn {
  width: 200px;
  border-radius: 4px;
  margin: auto;
}
</style>
