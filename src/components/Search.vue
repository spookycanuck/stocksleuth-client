<template>
  <div class="searchContainer">
    <div class="searchBar" @keyup.enter="search">
      <v-text-field
        class="searchField"
        type="text"
        label="Search Tickers"
        v-model="ticker"
        clearable
      />
      <v-btn class="search-btn" variant="outlined" @click="search"
        >Search</v-btn
      >
    </div>
  </div>
  <p class="fail" v-if="!validSearch">Please enter a valid Ticker ID</p>
  <p class="fail" v-if="inList">Ticker ID is already in the list below</p>
  <v-divider style="margin-top: 17px" />

  <v-tabs v-model="tab" bg-color="error" align-tabs="center">
    <v-tab value="recent">Recent</v-tab>
    <v-tab value="saved">Saved</v-tab>
  </v-tabs>
  <v-card-text>
    <v-window v-model="tab">
      <v-window-item value="recent">
        <RecentSearches />
      </v-window-item>
      <v-window-item value="saved">
        <SavedSearches />
      </v-window-item>
      <v-progress-circular
        v-if="isLoading"
        style="margin: auto"
        color="error"
        model-value="20"
        :size="45"
        :width="7"
        indeterminate
      ></v-progress-circular>
    </v-window>
  </v-card-text>
</template>

<script>
import RecentSearches from "./RecentSearches.vue";
import SavedSearches from "./SavedSearches.vue";

export default {
  components: {
    RecentSearches,
    SavedSearches,
  },
  name: "search",
  data: () => ({
    tab: "recent",
    ticker: "",
    searchList: [],
    validSearch: true,
    inList: false,
    isLoading: false,
  }),
  methods: {
    async search() {
      /*
        Checks conditions & populates side bar with searches. Currently only test
        data exists. API calls should call back to searches/actions.js
      */
      let ticker = this.ticker.replace(/\s/g, "");
      if (ticker === null || ticker.length === 0) {
        this.inList = false;
        this.validSearch = false;
      } else if (ticker.length > 0) {
        this.validSearch = true;
        this.inList = false;
        var target = this.allSearches.find(
          (x) => x.id === ticker.toUpperCase()
        );
        if (target) {
          this.inList = true;
        } else {
          this.isLoading = true;
          await this.$store.dispatch("searches/newSearch", ticker);
          this.isLoading = false;
        }
      }
      this.ticker = "";
      if (this.searchFail === true) {
        this.validSearch = false;
      } else {
        this.validSearch = true;
      }
    },
  },
  computed: {
    allSearches() {
      const searches = this.$store.getters["searches/searchList"];
      return searches;
    },
    searchFail() {
      const failed = this.$store.getters["searches/failed"];
      return failed;
    },
    stockList() {
      return this.$store.getters["searches/stockList"][0].map(i => i.symbol)
    },
    // filteredSearch() {
    //   return stockList[0].map(i => i.symbol)
    // }
  },
};
</script>

<style scoped>
.searchContainer {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
  margin-bottom: 5px;
}
.searchField {
  background-color: white;
  margin-top: 15px;
  width: 200px;
}
.searchBar {
  height: 70px;
  margin-left: 10px;
  margin-right: 10px;
  display: flex;
}
.search-btn {
  height: 40px;
  margin-left: 10px;
  margin-top: 25px;
  background-color: whitesmoke;
  color: darkgreen;
}
.search-btn:hover {
  background-color: darkgreen;
  color: whitesmoke;
}
.fail {
  font-size: 16px;
  color: red;
  font-style: italic;
  display: flex;
  justify-content: center;
}
</style>
