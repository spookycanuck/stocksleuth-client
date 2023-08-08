<template>
  <div>
    <h3>Summary Data for {{ search.id }}</h3><br />
    <v-table class="vtable" v-if="search">
      <tr>
        <td>Ticker</td>
        <td>{{ search.id }}</td>
      </tr>
      <tr>
        <td>Company Name</td>
        <td v-if="search.name">{{ search.name }}</td>
        <td v-else>N/A</td>
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
  width:50%;
  margin:auto;
}
tr:nth-of-type(even) {
    /* 'teal lighten-5' basides on material design color */
    background-color: #e6f0ef;
}
h3 {
  text-align: center;
}
</style>
