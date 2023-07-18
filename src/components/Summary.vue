<template>
  <div>
    <v-table>
      <tr>
        <td>Ticker</td>
        <td>{{ search.ticker }}</td>
      </tr>
    </v-table>
  </div>
</template>

<script>
export default {
  computed: {
    search() {
      return this.$store.getters["searches/search"];
    },
  },
};
</script>
