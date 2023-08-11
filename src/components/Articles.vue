<template>
  <div>
    <h3>Recent Articles about {{ search.symbol }}</h3><br />
    <v-table class="vtable" v-if="search">
      <tr>
        <td>Articles</td>
        <td>No Articles Available</td>
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
