<template>
  <div class="container">
    <v-card width="100%" height="100%">
      <v-tabs v-model="tab" bg-color="red">
        <v-tab value="summary">Summary</v-tab>
        <v-tab value="price">Price</v-tab>
        <v-tab value="articles">Articles</v-tab>
      </v-tabs>
      <v-card-text>
        <v-window v-model="tab">
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
      <v-card-actions>
        <v-btn block @click="search">Search</v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<style scoped>
.container {
  background-color: beige;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
}
</style>

<script>
import Summary from "@/components/Summary.vue";
import Price from "@/components/Price.vue";
import Articles from "@/components/Articles.vue"

export default {
  components: {
    Summary,
    Price,
    Articles
  },

  data() {
    return {
      tab: "summary",
    };
  },
  methods: {
    search() {
      var a = this.$store._state.data.searches.search.ticker // This seems like the wrong way to call on a state
      var payload = {}
      var x = {
        ticker: "MSFT",
        price: "$300",
        articles: "goodbye world",
      }
      var y = {
        ticker: 'AAPL',
        price: '$157',
        articles: 'hello world'
      }

      if (a == 'MSFT') {
        payload = y
      }
      else {
        payload = x
      }

      // console.log(a)
      // console.log(payload)

      this.$store.dispatch("searches/newSearch", payload);
    },
  },
};
</script>
