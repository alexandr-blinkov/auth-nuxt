<template>
  <v-card color="grey lighten-4" flat tile>
    <v-toolbar dense>
      <v-spacer></v-spacer>

      <v-btn icon to="/">
        <v-icon>mdi-home</v-icon>
      </v-btn>

      <v-btn v-if="!$auth.loggedIn" icon to="/auth/login">
        <v-icon>mdi-account</v-icon>
      </v-btn>

      <v-btn v-if="!$auth.loggedIn" icon to="/auth/registration">
        <v-icon>mdi-account-plus</v-icon>
      </v-btn>

      <v-btn v-else icon @click="$auth.logout()">
        <v-icon>mdi-exit-to-app</v-icon>
      </v-btn>

    </v-toolbar>
  </v-card>
</template>



