<template>
  <div>
    <v-table class="vtable" v-if="search">
      <tr>
        <td>Articles</td>
        <td>{{ search.articles }}</td>
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
