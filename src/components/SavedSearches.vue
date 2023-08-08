<template>
  <v-expansion-panels style="max-width: 295px; margin: 0px 0px 0px 2.5%">
    <p v-if="savedSearches.length > 0">Saved Searches</p>
    <v-expansion-panel
      style="margin-top: 7px"
      v-for="search in savedSearches"
      :key="search"
    >
      <v-expansion-panel-title>{{ search.id }}</v-expansion-panel-title>
      <v-expansion-panel-text>
        <p>
          Date:
          {{ search.date }}
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
      <v-btn class="clear-btn" @click="clearSaved"> Clear List </v-btn>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    deleteSaved(currentTicker) {
      this.$store.dispatch("searches/removeSaved", currentTicker);
    },
    graphTicker(currentTicker) {
      this.$store.dispatch("searches/currentSearch", currentTicker);
    },
    clearSaved() {
      this.$store.dispatch("searches/clearSaved");
    },
  },
  computed: {
    savedSearches() {
      const saved = this.$store.getters["searches/savedList"];
      return saved;
    },
  },
};
</script>
