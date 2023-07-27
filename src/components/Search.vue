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
      v-for="ticker in tickerDict"
      :key="ticker"
    >
      <v-expansion-panel-title> {{ ticker.id }}</v-expansion-panel-title>
      <v-expansion-panel-text>
        <p>
          Name:
          {{ ticker.name }}
        </p>
        <p>
          Current Price:
          {{ ticker.current }}
        </p>
        <p>
          24hr High:
          {{ ticker.priceHigh }}
        </p>
        <p>
          24hr Low:
          {{ ticker.priceLow }}
        </p>
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

  <div style="margin-top: 17px" v-if="tickerDict.length > 0">
    <v-divider />
    <div class="clear">
      <v-btn class="clear-btn" @click="clearList"> Clear List </v-btn>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "search",
  data: () => ({
    ticker: "",
    name: "**TEST**",
    currentPrice: 6969,
    recentHigh: 420.69,
    recentLow: 69.42,
    tickerDict: [],
    validSearch: true,
    inList: false,
  }),
  methods: {
    async search() {
      /*
        Checks conditions & populates side bar with searches. Currently only test
        data exists. API calls should call back to searches/actions.js
      */

      if (this.ticker == null || this.ticker.length == 0) {
        this.inList = false;
        this.validSearch = false;
      } else if (this.ticker.length > 0) {
        this.validSearch = true;
        this.inList = false;
        var target = this.tickerDict.find(
          (x) => x.id === this.ticker.toUpperCase()
        );
        if (target) {
          this.inList = true;
          return;
        }
      }
      this.currentSearch(); // can be removed later
    },
    async currentSearch() {
      // -------------------------------
      // currentSearch actions
      let payload = {};
      let res = await axios.get(
        `http://localhost:3000/tickers?ticker=${this.ticker.toUpperCase()}`
      );
      if (res.status == 200 && res.data.length > 0) {
        let x = res.data[0];
        payload = {
          id: this.ticker.toUpperCase(),
          name: x.name,
          current: x.currentPrice,
          priceHigh: x.recentHigh,
          priceLow: x.recentLow,
        };
      }
      // -------------------------------
      else {
        // poor error handling for testing. Please remove when smart
        let x = this;
        payload = {
          id: this.ticker.toUpperCase(),
          name: x.name,
          current: x.currentPrice,
          priceHigh: x.recentHigh,
          priceLow: x.recentLow,
        };
      }
      this.searchList(payload);
    },
    searchList(payload) {
      // -------------------------------
      // searchList actions
      this.tickerDict.push(payload);
      this.ticker = "";
      // -------------------------------
    },
    deleteTicker(currentTicker) {
      let x = this.tickerDict.indexOf(currentTicker);
      this.tickerDict.splice(x, 1);
    },
    graphTicker(currentTicker) {
      console.log("graph " + currentTicker.id);
      console.log(currentTicker);
    },
    clearList() {
      this.tickerDict = [];
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
