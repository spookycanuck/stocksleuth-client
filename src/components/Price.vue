<template>
  <div>
    <h3>Most Recent Price Data for {{ search.id }}</h3>
    <br />
    <v-table class="vtable" v-if="search">
      <tr>
        <td>Latest Data</td>
        <td>{{ search.label }}</td>
      </tr>
      <tr>
        <td>Price Range</td>
        <td>{{ search.priceRange }}</td>
      </tr>
      <tr>
        <td>24hr Low Price</td>
        <td>${{ search.low }}</td>
      </tr>
      <tr>
        <td>24hr High Price</td>
        <td>${{ search.high }}</td>
      </tr>
      <tr>
        <td>24hr Change</td>
        <td
          :style="[search.change > 0 ? { color: 'black' } : { color: 'red' }]"
        >
          {{
            search.change > 0
              ? "$" + search.change
              : String(search.change).slice(0, 1) +
                "$" +
                String(search.change).slice(1)
          }}
        </td>
      </tr>
      <tr>
        <td>Latest Close</td>
        <td>${{ search.close }}</td>
      </tr>
      <tr>
        <td>Adjusted Close</td>
        <td>${{ search.adjClose }}</td>
      </tr>
      <tr>
        <td>Change Over Time</td>
        <td
          :style="[
            search.changeOverTime > 0 ? { color: 'black' } : { color: 'red' },
          ]"
        >
          {{ search.changeOverTime }}
        </td>
      </tr>
      <tr>
        <td>Change Rate</td>
        <td
          :style="[
            search.changePercent > 0 ? { color: 'black' } : { color: 'red' },
          ]"
        >
          {{ search.changePercent }}
        </td>
      </tr>
      <tr>
        <td>Discounted Cash Flow</td>
        <td>{{ search.dcf }}</td>
      </tr>
      <tr>
        <td>Discounted Cash Flow Differential</td>
        <td>{{ search.dcfDiff }}</td>
      </tr>
      <tr>
        <td>Volume</td>
        <td>{{ search.volume }}</td>
      </tr>
      <tr>
        <td>Volume Average</td>
        <td>{{ search.volAvg }}</td>
      </tr>
      <tr>
        <td>Unadjusted Volume</td>
        <td>{{ search.unadjustedVolume }}</td>
      </tr>
      <tr>
        <td>Volume-Weighted Average Price</td>
        <td>${{ search.vwap }}</td>
      </tr>
      <tr>
        <td>Last Dividend</td>
        <td>${{ search.lastDiv }}</td>
      </tr>
      <tr>
        <td>Beta</td>
        <td>{{ search.beta }}</td>
      </tr>
      <tr>
        <td>Currently Trading?</td>
        <td>{{ search.isTrading == true ? "Yes" : "No" }}</td>
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
