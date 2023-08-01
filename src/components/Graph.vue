<template>
  <div>
    <h1
      v-if="
        saved.length > 0 &&
        saved.find((x) => x.id === search.id) &&
        searchList.length === 0
      "
    >
      There are no saved graphs, either
    </h1>
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
    searchList() {
      return this.$store.getters["searches/searchList"];
    },
  },
};
</script>

<style scoped>
h2 {
  text-align: center;
  margin-top: 3%;
  margin-bottom: 15px;
}
h1 {
  text-align: center;
  margin-top: 3%;
}
.dinkleImg {
  display: block;
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 30%;
}
</style>
