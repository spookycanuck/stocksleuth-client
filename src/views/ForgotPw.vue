<template>
  <div class="container">
    <h1>Forgot Password Page</h1>
    <v-btn><router-link to="/login">Login</router-link></v-btn>
  </div>
</template>


<script>
export default {
  name: "ForgotPw",
};
</script>

<style scoped>
h1 {
  text-align: center;
  margin-top: 200px;
}
button {
  margin-left: 45%;
  width: 150px;
  margin-top: 20px;
}
</style>
