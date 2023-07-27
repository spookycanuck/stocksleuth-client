<template>
  <div>
    <v-table class="vtable" v-if="search">
      <tr>
        <td>24hr Low Price</td>
        <td>{{ search.priceLow }}</td>
      </tr>
      <tr>
        <td>24hr High Price</td>
        <td>{{ search.priceHigh }}</td>
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
