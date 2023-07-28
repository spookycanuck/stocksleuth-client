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

  <v-expansion-panels style="max-width: 330px; margin: 10px 0px 0px 2.5%">
    <p v-if="allSearches.length > 0">Recent Searches</p>
    <v-expansion-panel
      style="margin-top: 7px"
      v-for="search in allSearches"
      :key="search"
    >
      <v-expansion-panel-title> {{ search.id }}</v-expansion-panel-title>
      <v-expansion-panel-text>
        <p>
          Name:
          {{ search.name }}
        </p>
        <p>
          Current Price:
          {{ search.current }}
        </p>
        <p>
          24hr High:
          {{ search.priceHigh }}
        </p>
        <p>
          24hr Low:
          {{ search.priceLow }}
        </p>
        <v-divider />
        <div style="display: flex; margin-top: 10px">
          <v-list-item
            prepend-icon="mdi-close-thick"
            @click="deleteTicker(search)"
          ></v-list-item>
          <v-spacer />
          <v-list-item
            prepend-icon="mdi-chart-line"
            @click="graphTicker(search)"
          ></v-list-item>
        </div>
      </v-expansion-panel-text>
    </v-expansion-panel>
  </v-expansion-panels>

  <div style="margin-top: 17px" v-if="allSearches.length > 0">
    <div class="clear">
      <v-btn class="clear-btn" @click="clearList"> Clear List </v-btn>
    </div>
    <div class="clear">
      <v-btn class="clear-btn" @click="saveList"> Save List </v-btn>
    </div>
    <v-divider />
  </div>

  <v-expansion-panels style="max-width: 330px; margin: 10px 0px 0px 2.5%">
    <p v-if="savedSearches.length > 0">Saved Searches</p>
    <v-expansion-panel
      style="margin-top: 7px"
      v-for="search in savedSearches"
      :key="search"
    >
      <v-expansion-panel-title> {{ search.id }}</v-expansion-panel-title>
      <v-expansion-panel-text>
        <p>
          Name:
          {{ search.name }}
        </p>
        <p>
          Current Price:
          {{ search.current }}
        </p>
        <p>
          24hr High:
          {{ search.priceHigh }}
        </p>
        <p>
          24hr Low:
          {{ search.priceLow }}
        </p>
        <v-divider />
        <div style="display: flex; margin-top: 10px">
          <v-list-item
            prepend-icon="mdi-close-thick"
            @click="deleteSaved(search)"
          ></v-list-item>
          <v-spacer />
          <v-list-item
            prepend-icon="mdi-chart-line"
            @click="graphTicker(search)"
          ></v-list-item>
        </div>
      </v-expansion-panel-text>
    </v-expansion-panel>
  </v-expansion-panels>

  <div style="margin-top: 17px" v-if="savedSearches.length > 0">
    <div class="clear">
      <v-btn class="clear-btn" @click="clearSaved"> Clear Saved List </v-btn>
    </div>
  </div>
</template>

<script>
// import axios from "axios";

export default {
  name: "search",
  data: () => ({
    ticker: "",
    searchList: [],
    validSearch: true,
    inList: false,
  }),
  methods: {
    search() {
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
          this.$store.dispatch("searches/newSearch", ticker);
        }
      }
      this.ticker = "";
    },
    deleteTicker(currentTicker) {
      this.$store.dispatch("searches/removeOne", currentTicker);
    },
    deleteSaved(currentTicker) {
      this.$store.dispatch("searches/removeSaved", currentTicker);
    },
    graphTicker(currentTicker) {
      this.$store.dispatch("searches/currentSearch", currentTicker);
    },
    clearList() {
      this.$store.dispatch("searches/clearSearches");
    },
    clearSaved() {
      this.$store.dispatch("searches/clearSaved");
    },
    saveList() {
      this.$store.dispatch("searches/saveSearches");
    },
  },
  computed: {
    allSearches() {
      const searches = this.$store.getters["searches/searchList"];
      return searches;
    },
    savedSearches() {
      const saved = this.$store.getters["searches/savedList"];
      return saved;
    },
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
.clear {
  margin-top: 15px;
  display: flex;
  justify-content: center;
  margin-bottom: 15px;
}
.clear-btn:hover {
  background-color: darkred;
  color: whitesmoke;
}
.clear-btn {
  background-color: whitesmoke;
  color: darkred;
}
</style>
