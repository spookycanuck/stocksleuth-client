<template>
  <v-navigation-drawer expand-on-hover rail>
    <v-list>
      <v-list-item
        prepend-icon="mdi-home"
        title="Home"
        @click="$router.push('/')"
      >
      </v-list-item>
      <v-list-item
        v-if="!auth"
        prepend-icon="mdi-login"
        title="Login"
        @click="$router.push('login')"
      ></v-list-item>
      <v-list-item
        v-if="auth"
        prepend-icon="mdi-account"
        title="Account"
        @click="$router.push('account')"
      >
      </v-list-item>
      <v-list-item
        v-if="auth"
        prepend-icon="mdi-bell"
        title="Notifications"
        @click="$router.push('notifications')"
      ></v-list-item>
      <v-list-item
        v-if="auth"
        prepend-icon="mdi-logout"
        title="Logout"
        @click="logout"
      ></v-list-item>
    </v-list>
    <v-divider />
    <v-list>
      <v-list-item
        v-if="auth"
        prepend-avatar="https://randomuser.me/api/portraits/women/85.jpg"
      >
        <v-list-item-title>{{ user.firstName }} {{ user.lastName }}</v-list-item-title>
        <v-list-item-content class="scroll">
          {{ user.email }}
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  methods: {
    logout() {
      let auth = this.$store.getters["auth/auth"];
      if (auth) {
        localStorage.clear();
        this.$router.push({ name: "Login" });
        this.$store.dispatch("auth/logout");
      } else {
        this.$router.push({ name: "SignUp" });
      }
    },
  },
  computed: {
    auth() {
      return this.$store.getters["auth/auth"];
    },
    user() {
      return this.$store.getters["auth/user"];
    },
  },
};
</script>

<style scoped>
.scroll {
  color: gray;
  display: inline-block;
  overflow: hidden;
  text-overflow: ellipsis;
  transform: translateX(0);
  transition: 1s;
}
.scroll:hover {
  transform: translateX(calc(255px - 150%));
  transition: 3s;
}
</style>
