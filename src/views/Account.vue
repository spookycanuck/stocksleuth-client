<template>
  <div class="container">
    <v-card elevation="4" tag="section" class="signup fitVert">
      <v-card-title>
        <img class="logo img" :src="img" />
        <h3>Account Page for {{ user.firstName }}</h3>
      </v-card-title>
      <v-divider></v-divider>
      <v-form v-model="user">
        <v-container>
          <div class="d-flex align-center justify-space-around">
            <v-avatar color="light-blue-darken-1" size="125px">
              <v-icon icon="mdi-account-circle" size="100px"></v-icon>
            </v-avatar>
          </div>
          <div class="d-flex align-center justify-space-around mt-3">
            <v-btn
              color="light-blue-darken-1"
              class="text-none"
              round
              @click="imgUpload"
            >
              {{ buttonText }}
            </v-btn>
            <input
              ref="uploader"
              class="d-none"
              type="file"
              accept="image/*"
              @change="onFileChanged"
            />
          </div>
          <v-row class="mt-6 mx-1">
            <v-text-field
              v-model="firstname"
              class="mx-1"
              :value="user.firstName ? user.firstName : null"
              :label="user.firstName ? null : 'First Name'"
            >
            </v-text-field>
            <v-text-field
              v-model="lastname"
              class="mx-1"
              :value="user.lastName ? user.lastName : null"
              :label="user.lastName ? null : 'Last Name'"
            >
            </v-text-field>
          </v-row>
          <v-text-field
            v-model="prefname"
            class="mx-2 mt-3"
            label="Preferred Name"
          >
          </v-text-field>
          <v-text-field
            v-model="email"
            class="mx-2"
            :value="user.email ? user.email : null"
            :label="user.email ? null : 'Email'"
          >
          </v-text-field>
          <v-text-field
            v-model="password"
            :append-icon="show ? 'mdi-eye-off' : 'mdi-eye'"
            :type="show ? 'text' : 'password'"
            class="mx-2"
            :value="user.password ? user.password : null"
            :label="user.password ? null : 'Password'"
            @click:append="show = !show"
          >
          </v-text-field>
          <v-row class="mb-4 mx-2">
            <v-btn class="my-3">Edit Profile</v-btn>
            <v-btn class="my-3">Reset Password</v-btn>
          </v-row>
          <v-divider />
          <v-btn class="delete mt-4">Delete Account</v-btn>
        </v-container>
      </v-form>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      img: require("@/assets/logo.png"),
      defaultButtonText: "Change Avatar",
      selectedFile: null,
      isSelecting: false,
      show: false,
    };
  },
  methods: {
    imgUpload() {
      this.isSelecting = true;
      window.addEventListener(
        "focus",
        () => {
          this.isSelecting = false;
        },
        { once: true }
      );

      this.$refs.uploader.click();
    },
    onFileChanged(image) {
      this.selectedFile = image.target.files[0];

      // do something
    },
  },
  computed: {
    user() {
      return this.$store.getters["auth/user"];
    },
    buttonText() {
      return this.selectedFile
        ? this.selectedFile.name
        : this.defaultButtonText;
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  margin-top: 150px;
}
.signup h3,
p {
  text-align: center;
}
.v-btn {
  width: 200px;
  border-radius: 4px;
  margin: auto;
  display: flex;
  justify-content: center;
  background-color: whitesmoke;
}
.v-btn:hover {
  background-color: darkred;
  color: whitesmoke;
}
.delete {
  display: flex;
  justify-content: center;
  width: 200px;
  border-radius: 4px;
  background-color: #b71c1c;
  color: whitesmoke;
}
.delete:hover {
  color: whitesmoke;
  background-color: #d50000;
}
</style>
