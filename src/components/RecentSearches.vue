<template>
  <v-expansion-panels style="max-width: 295px; margin: 0px 0px 0px 2.5%">
    <p v-if="allSearches.length > 0">Recent Searches</p>
    <v-expansion-panel
      style="margin-top: 7px"
      v-for="search in allSearches"
      :key="search"
    >
      <v-expansion-panel-title>{{ search.id }}</v-expansion-panel-title>
      <v-expansion-panel-text>
        <p>
          Name:
          {{ search.name }}
        </p>
        <p>
          Current Price:
          {{ search.close }}
        </p>
        <p>
          24hr High:
          {{ search.high }}
        </p>
        <p>
          24hr Low:
          {{ search.low }}
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
      <v-btn class="clear-btn" @click="clearList">Clear List</v-btn>
    </div>
    <div class="clear">
      <v-btn class="clear-btn" @click="saveList">Save List</v-btn>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    deleteTicker(currentTicker) {
      this.$store.dispatch("searches/removeOne", currentTicker);
    },
    graphTicker(currentTicker) {
      this.$store.dispatch("searches/currentSearch", currentTicker);
    },
    clearList() {
      this.$store.dispatch("searches/clearSearches");
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
  },
};
</script>

<style>
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
