<template>
  <div>
    <v-table class="vtable" v-if="search">
      <tr>
        <td>Ticker</td>
        <td>{{ search.id }}</td>
      </tr>
      <tr>
        <td>Company Name</td>
        <td>{{ search.name }}</td>
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

<style>
.vtable {
  background-color: whitesmoke;
}
</style>
