<template>
  <h2>Account Page for {{ name }}</h2>
</template>

<script>
export default {
  name: "Account",
  data() {
    return {
      name: "",
    };
  },
  methods: {
    loadData() {
      let user = localStorage.getItem('user-info')
      if (user) {
        let data = JSON.parse(localStorage.getItem("user-info"));
        this.name = data.charAt(0).toUpperCase() + data.slice(1);
      }
    },
  },
  mounted() {
    this.loadData();
  },
};
</script>
