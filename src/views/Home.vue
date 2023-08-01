<template>
  <div class="container">
    <div class="search">
      <Search />
    </div>
    <div class="home">
      <h2 style="display: auto; margin-top:30px">Welcome Back, {{ name }}</h2>
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

<style scoped>
.home {
  display: block;
  margin: auto;
  height: 100%;
  width: 85%;
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
      name: "",
      tab: "graph",
    };
  },
  computed: {
    auth() {
      return this.$store.getters["auth/auth"];
    },
    currentSearch() {
      return this.$store.getters["searches/currentSearch"]
    }
  },
  methods: {
    async loadData() {
      // If user info is not in local storage, user will not be
      //   able to go to this page & redirect to sign up
      let user = localStorage.getItem("user-info");
      if (user) {
        let data = JSON.parse(localStorage.getItem("user-info"));
        this.name = data.charAt(0).toUpperCase() + data.slice(1);
      }
    },
  },
  async mounted() {
    this.loadData();
  },
};
</script>
