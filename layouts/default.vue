<template>
  <v-app>
      <app-navigation/>
      <nuxt/>
  </v-app>
</template>

<script>
import AppNavigation from '~/components/main/Navigation'

export default {
  components: {AppNavigation}
}
</script>