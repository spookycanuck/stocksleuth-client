<template>
  <div>
    <h3>Most Recent Price Data for {{ search.id }}</h3>
    <br />
    <v-table class="vtable" v-if="search">
      <tr>
        <th>Latest Data</th>
        <td>{{ search.label }}</td>
      </tr>
      <tr>
        <th>Latest Close</th>
        <td>${{ search.close }}</td>
      </tr>
      <tr>
        <th>Adjusted Close</th>
        <td>${{ search.adjClose }}</td>
      </tr>
      <tr>
        <th>Price Range (52 wk)</th>
        <td>{{ search.priceRange }}</td>
      </tr>
      <tr>
        <th>High Price (24 hr)</th>
        <td>${{ search.high }}</td>
      </tr>
      <tr>
        <th>Low Price (24 hr)</th>
        <td>${{ search.low }}</td>
      </tr>
      <tr>
        <th>24hr Change ($)</th>
        <td
          :style="[search.change > 0 ? { color: 'black' } : { color: 'red' }]"
        >
          {{
            search.change > 0
              ? "$" + search.change
              : "(" + String(search.change).slice(1) + ")"
          }}
          <!-- 
              : String(search.change).slice(0, 1) +
               "$" +
               String(search.change).slice(1)               
            -->
        </td>
      </tr>
      <tr>
        <th>Change Over Time (%)</th>
        <td
          :style="[
            search.changeOverTime > 0 ? { color: 'black' } : { color: 'red' },
          ]"
        >
          {{
            search.changeOverTime > 0
              ? "$" + search.changeOverTime
              : "(" + String(search.changeOverTime).slice(1) + ")"
          }}
        </td>
      </tr>
      <tr>
        <th>Change Rate (%)</th>
        <td
          :style="[
            search.changePercent > 0 ? { color: 'black' } : { color: 'red' },
          ]"
        >
          {{
            search.changePercent > 0
              ? search.changeOverTime
              : "(" + String(search.changePercent).slice(1) + ")"
          }}
        </td>
      </tr>
      <tr>
        <th>Discounted Cash Flow</th>
        <td>{{ search.dcf }}</td>
      </tr>
      <tr>
        <th>Discounted Cash Flow Diff</th>
        <td
          :style="[
            search.dcfDiff > 0 ? { color: 'black' } : { color: 'red' },
          ]"
        >
          ${{ search.dcfDiff }}
        </td>
      </tr>
      <tr>
        <th>Volume</th>
        <td>
          {{ String(search.volume).replace(/\B(?=(\d{3})+(?!\d))/g, ",") }}
        </td>
      </tr>
      <tr>
        <th>Unadjusted Volume</th>
        <td>
          {{
            String(search.unadjustedVolume).replace(
              /\B(?=(\d{3})+(?!\d))/g,
              ","
            )
          }}
        </td>
      </tr>
      <tr>
        <th>Volume Average</th>
        <td>{{ search.volAvg }}</td>
      </tr>
      <tr>
        <th>Volume-Weighted Average Price</th>
        <td>${{ search.vwap }}</td>
      </tr>
      <tr>
        <th>Last Dividend</th>
        <td>${{ search.lastDiv }}</td>
      </tr>
      <tr>
        <th>Beta</th>
        <td>{{ search.beta }}</td>
      </tr>
      <tr>
        <th>Currently Trading?</th>
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
