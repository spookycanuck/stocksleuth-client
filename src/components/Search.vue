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
    <v-expansion-panel
      style="margin-top: 7px"
      v-for="ticker in tickerList"
      :key="ticker"
    >
      <v-expansion-panel-title> {{ ticker }}</v-expansion-panel-title>
      <v-expansion-panel-text>
        Some content
        <v-divider />
        <div style="display: flex; margin-top: 10px">
          <v-list-item
            prepend-icon="mdi-close-thick"
            @click="deleteTicker(ticker)"
          ></v-list-item>
          <v-spacer />
          <v-list-item
            prepend-icon="mdi-chart-line"
            @click="graphTicker(ticker)"
          ></v-list-item>
        </div>
      </v-expansion-panel-text>
    </v-expansion-panel>
  </v-expansion-panels>

  <div style="margin-top: 17px" v-if="tickerList.length > 0">
    <v-divider />
    <div class="clear">
      <v-btn class="clear-btn" @click="clearList"> Clear List </v-btn>
    </div>
  </div>
</template>

<script>
export default {
  name: "search",
  data: () => ({
    ticker: "",
    tickerList: [],
    validSearch: true,
    inList: false,
  }),
  methods: {
    search() {
      if (this.ticker.length > 0) {
        this.validSearch = true;
        this.inList = false;
        if (this.tickerList.includes(this.ticker.toUpperCase())) {
          // console.log("already in list");
          this.inList = true;
          return;
        }
        this.tickerList.push(this.ticker.toUpperCase());
        this.ticker = "";
        // this.inList = false;
      } else {
        this.inList = false;
        this.validSearch = false;
      }
    },
    deleteTicker(currentTicker) {
      let x = this.tickerList.indexOf(currentTicker);
      this.tickerList.splice(x, 1);
    },
    graphTicker(currentTicker) {
      console.log("graph " + currentTicker);
    },
    clearList() {
      this.tickerList = [];
      this.validSearch = true;
      this.inList = false;
      this.ticker = "";
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
