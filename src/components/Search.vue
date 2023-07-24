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
  <v-divider />

  <v-list>
    <v-list-item v-for="ticker in tickerList" :key="ticker">
      {{ ticker }}
    </v-list-item>
  </v-list>
  <div v-if="tickerList.length > 0">
    <v-divider />
    <div class="clear-btn">
      <v-btn @click="clearList" text color="error"> Clear List </v-btn>
    </div>
  </div>
</template>

<script>
export default {
  name: "search",
  data() {
    return {
      ticker: "",
      tickerList: [],
      validSearch: true,
      inList: false,
    };
  },
  methods: {
    search() {
      if (this.ticker.length > 0) {
        this.validSearch = true;
        this.inList = false;
        if (this.tickerList.includes(this.ticker.toUpperCase())) {
          console.log("already in list");
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
}
.fail {
  font-size: 16px;
  color: red;
  font-style: italic;
  display: flex;
  justify-content: center;
}
.clear-btn {
  margin-top: 15px;
  display: flex;
  justify-content: center;
}
</style>
