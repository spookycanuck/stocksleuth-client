<template>
  <div>
    <h1 v-if="saved.length > 0 && search.id === saved[0].id">There are no saved graphs, either</h1>
    <h2>This is where my {{ search.id }} graph would go</h2>
    <img class="dinkleImg" :src="img" />
  </div>
</template>

<script>
export default {
  data: () => ({
    img: require("@/assets/dinkleberg.png"),
  }),
  computed: {
    search() {
      return this.$store.getters["searches/currentSearch"];
    },
    saved() {
      return this.$store.getters["searches/savedList"];
    },
  },
};
</script>

<style scoped>
h2, h1 {
  text-align: center;
  margin-top: 10%;
  margin-bottom: 15px;
}
.dinkleImg {
  display: block;
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 30%;
}
</style>
