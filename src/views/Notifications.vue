<template>
  <h2>Notifications Page for {{ name }}</h2>
</template>

<script>
export default {
  name: "Notifications",
  data() {
    return {
      name: "",
    };
  },
  methods: {
    async loadData() {
      let user = this.$store.getters["auth/auth"];
      if (!user) {
        this.$router.push({ name: "SignUp" });
      } else {
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
