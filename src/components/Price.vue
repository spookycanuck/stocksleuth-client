<template>
  <div>
    <h3>Most Recent Price Data for {{ search.id }}</h3><br />
    <v-table class="vtable" v-if="search">
      <tr>
        <td>Latest Data</td>
        <td>{{ search.label }}</td>
      </tr>
      <tr>
        <td>24hr Low Price</td>
        <td>{{ search.low }}</td>
      </tr>
      <tr>
        <td>24hr High Price</td>
        <td>{{ search.high }}</td>
      </tr>
      <tr>
        <td>24hr Change</td>
        <td>{{ search.change }}</td>
      </tr>
      <tr>
        <td>Latest Close</td>
        <td>{{ search.close }}</td>
      </tr>
      <tr>
        <td>Adjusted Close</td>
        <td>{{ search.adjClose }}</td>
      </tr>
      <tr>
        <td>Change Over Time</td>
        <td>{{ search.changeOverTime }}</td>
      </tr>
      <tr>
        <td>Change Rate</td>
        <td>{{ search.changePercent }}</td>
      </tr>
      <tr>
        <td>Volume</td>
        <td>{{ search.volume }}</td>
      </tr>
      <tr>
        <td>Unadjusted Volume</td>
        <td>{{ search.unadjustedVolume }}</td>
      </tr>
      <tr>
        <td>Volume-Weighted Average Price</td>
        <td>{{ search.vwap }}</td>
      </tr>
    </v-table>
  </div>
</template>

<script>
export default {
  computed: {
    search() {
      return this.$store.getters["searches/currentSearch"];
    },
  },
};
</script>
