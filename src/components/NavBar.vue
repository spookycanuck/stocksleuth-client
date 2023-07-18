<template>
  <v-navigation-drawer expand-on-hover rail>
    <v-list>
      <v-list-item prepend-icon="mdi-home" title="Home" @click="$router.push('/')">
      </v-list-item>
      <v-list-item prepend-icon="mdi-account" title="Account" @click="$router.push('login')"></v-list-item>
      <v-list-item prepend-icon="mdi-bell" title="Notifications" value="z"></v-list-item>
    </v-list>
    <v-divider />
    <v-list>
      <v-list-item
        prepend-avatar="https://randomuser.me/api/portraits/women/85.jpg"
        title="Sandra Adams"
        subtitle="sandra_a88@gmailcom"
      >
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>
