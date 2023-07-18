<template>
  <div>
    <v-table>
      <tr>
        <td>Price</td>
        <td>{{ search.price }}</td>
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
