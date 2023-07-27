<template>
  <v-app>
    <v-app-bar class="bg-blue">
      <v-img
        class="mx-2 head"
        :src="img"
        max-height="40"
        max-width="40"
        contain
        @click="this.$router.push('/home')"
      ></v-img>
      <v-toolbar-title class="ml-2 head" @click="this.$router.push('/home')">
        Stock Sleuth
      </v-toolbar-title>
      <v-list-item
        prepend-icon="mdi-facebook"
        target="__blank"
        href="https://www.facebook.com"
      ></v-list-item>
      <v-list-item
        prepend-icon="mdi-reddit"
        target="__blank"
        href="https://www.reddit.com"
      ></v-list-item>
      <v-list-item
        prepend-icon="mdi-twitter"
        target="__blank"
        href="https://www.twitter.com"
      ></v-list-item>
      <v-list-item
        prepend-icon="mdi-logout"
        v-if="auth"
        @click="logout"
      ></v-list-item>
      <v-list-item
        prepend-icon="mdi-login"
        v-if="!auth"
        @click="this.$router.push({ name: 'Login' })"
      ></v-list-item>
    </v-app-bar>

    <v-main>
      <NavBar />
      <router-view />
    </v-main>

    <v-footer class="bg-blue">
      <v-row justify="center" no-gutters>
        <v-btn
          v-for="link in links"
          :key="link"
          color="white"
          variant="text"
          class="mx-2"
          rounded="xl"
          @click="
            $router.push(link.split(' ').join('-'))
              ? $router.push(link.split(' ').join('-'))
              : $router.push('/')
          "
        >
          {{ link }}
        </v-btn>
        <v-col class="text-center mt-4" cols="12">
          <v-icon size="small" icon="mdi-copyright"></v-icon>
          {{ new Date().getFullYear() }} — <strong>StockSleuth, LLC.</strong>
        </v-col>
      </v-row>
    </v-footer>
  </v-app>
</template>

<script>
import NavBar from "@/components/NavBar.vue";

export default {
  name: "App",
  components: {
    NavBar,
  },
  data: () => ({
    links: [
      "home",
      "about",
      "terms of service",
      "privacy policy",
      "help",
      "contact",
    ],
    local: false,
    img: require("@/assets/logo.png"),
  }),
  methods: {
    logout() {
      if (localStorage.getItem("user-info")) {
        localStorage.clear();
        this.$store.dispatch("auth/logout");
        this.$router.push({ name: "Login" });
      } else {
        this.$router.push({ name: "SignUp" });
      }
    },
  },
  computed: {
    auth() {
      return this.$store.getters["auth/auth"];
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
}
body {
  padding: 0;
  margin: 0;
}
.container {
  display: flex;
  height: 100%;
  width: 100%;
  background-color: lightgray;
}
.logo {
  width: 35px;
  height: 50px;
  display: block;
  margin-left: auto;
  margin-right: auto;
}
.head:hover {
  cursor: pointer;
}
h2 {
  text-align: center;
  margin-top: 15px;
}
</style>
