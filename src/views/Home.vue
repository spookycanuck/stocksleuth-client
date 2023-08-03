<template>
  <div class="container">
    <div class="search">
      <Search />
    </div>
    <div class="home">
      <h2 style="display: auto; margin-top:30px">Welcome Back, {{ user.firstName }}</h2>
      <div v-if="!currentSearch" class="noChart" style="margin-bottom: 34%;">
        <h2>No recent charts to display!</h2>
        <h2>Search for a Ticker to continue</h2>
      </div>
      <v-card class="v-card" v-if="currentSearch">
        <v-tabs v-model="tab" bg-color="error" align-tabs="center">
          <v-tab value="graph">Graph</v-tab>
          <v-tab value="summary">Summary</v-tab>
          <v-tab value="price">Price</v-tab>
          <v-tab value="articles">Articles</v-tab>
        </v-tabs>
        <v-card-text>
          <v-window v-model="tab">
            <v-window-item value="graph">
              <Graph />
            </v-window-item>
            <v-window-item value="summary">
              <Summary />
            </v-window-item>
            <v-window-item value="price">
              <Price />
            </v-window-item>
            <v-window-item value="articles">
              <Articles />
            </v-window-item>
          </v-window>
        </v-card-text>
        <v-divider></v-divider>
      </v-card>
    </div>
  </div>
</template>

<script>
import Summary from "@/components/Summary.vue";
import Price from "@/components/Price.vue";
import Articles from "@/components/Articles.vue";
import Search from "@/components/Search.vue";
import Graph from "@/components/Graph.vue"

export default {
  components: {
    Summary,
    Price,
    Articles,
    Search,
    Graph
  },
  data() {
    return {
      tab: "summary",
    };
  },
  computed: {
    auth() {
      return this.$store.getters["auth/auth"];
    },
    currentSearch() {
      return this.$store.getters["searches/currentSearch"]
    },
    user() {
      return this.$store.getters["auth/user"];
    },
  },
};
</script>

<style scoped>
.home {
  display: block;
  margin: auto;
  height: 100%;
  width: 85%;
}
.container {
  display: flex;
  height: 100%;
  width: 100%;
  background-color: lightgray;
}
.v-card {
  background-color: whitesmoke;
  margin: auto;
  width: 80vw;
  height: 80vh;
}
.search {
  background-color: whitesmoke;
}
.noChart {
margin-top:10%

}
</style>