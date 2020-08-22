<template>
    <v-main>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col class="text-center">

            <div v-if="!$auth.loggedIn">
              <h1>Добро пожаловать!</h1>
              <v-btn rounded color="success" dark to="/auth/login">Войдите</v-btn>
              <span>или</span>
              <v-btn rounded color="primary" dark to="/auth/registration">Зарегистрируйтесь</v-btn>
            </div>

            <div v-else>
              <v-card class="mx-auto" max-width="434" tile>
                <v-img height="100%" src="https://image.freepik.com/free-vector/3d_117739-1294.jpg">
                  <v-row align="end" class="fill-height">
                    <v-col align-self="start" class="pa-0" cols="12">
                      <v-avatar class="profile" color="grey" size="164" tile>
                        <v-img :src="loggedInUser.photo"></v-img>
                      </v-avatar>
                    </v-col>
                    <v-col class="py-0">
                      <v-list-item color="rgba(0, 0, 0, .4)" dark>
                        <v-list-item-content>
                          <v-list-item-title class="title">{{ loggedInUser.username }}</v-list-item-title>
                          <v-list-item-subtitle>{{ loggedInUser.email }}</v-list-item-subtitle>
                          <v-list-item-subtitle>{{ new Date(loggedInUser.timestamp).toLocaleString() }}</v-list-item-subtitle>
                        </v-list-item-content>
                      </v-list-item>
                    </v-col>
                  </v-row>
                </v-img>
              </v-card>          
            </div> 
          </v-col>
        </v-row>
      </v-container>
      <nuxt/>
    </v-main>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  computed: {
    ...mapGetters(['loggedInUser'])
  },
}
</script>

<style scoped>
  h1 {
    padding-bottom: 1rem;
  }
</style>