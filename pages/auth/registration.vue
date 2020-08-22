<template>
    <v-main>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="4">
            <v-card class="elevation-12">

              <v-toolbar color="primary" dark flat>
                <v-toolbar-title>Регистрация</v-toolbar-title>              
              </v-toolbar>

              <v-card-text>
                <v-form v-model="valid" ref="form" validation>
                <v-text-field
                    prepend-icon="mdi-account"
                    label="Имя"
                    name="username"
                    type="text"
                    :counter="2"
                    v-model.trim="username"
                    :rules="rules.username"
                ></v-text-field>

                <v-text-field
                    prepend-icon="mdi-camera"
                    label="Фото (URL)"
                    name="photo"
                    type="text"
                    v-model.trim="photo"
                    :rules="rules.photo"
                ></v-text-field>

                  <v-text-field
                    prepend-icon="mdi-at"
                    label="E-mail"
                    name="email"
                    type="email"
                    v-model.trim="email"
                    :rules="rules.email"
                  ></v-text-field>

                  <v-text-field
                    prepend-icon="mdi-lock"
                    label="Пароль"
                    name="password"
                    type="password"
                    :counter="6"
                    v-model.trim="password"
                    :rules="rules.password"
                  ></v-text-field>

                  <v-text-field
                    prepend-icon="mdi-lock"
                    label="Подтверждение пароля"
                    name="confirm-password"
                    type="password"
                    :counter="6"
                    v-model.trim="confirmPassword"
                    :rules="rules.confirmPassword"
                  ></v-text-field>
                </v-form>
              </v-card-text>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                  color="primary"
                  @click="registerUser"
                  :disabled="!valid"
                  :loading="loading"
                >Создать аккаунт</v-btn>
              </v-card-actions>

            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
</template>

<script>
import { mapActions } from 'vuex'

  export default {
    middleware: 'auth',
    auth: 'guest',
    data () {
      return {
        loading: false,
        valid: false,
        isSaving: false,
        username: null,
        email: null,
        password: null,
        confirmPassword: null,
        photo: null,
        rules: {
            username: [
                v => !!v || 'Поле не может быть пустым',
                v => (v && v.length >= 2) || 'Имя должно содержать не менее 2 символов'
            ],
            email: [
                v => !!v || 'Поле не может быть пустым',
                v => /.+@.+\..+/.test(v) || 'Введите корректный электронный адрес'
            ],
            password: [
                v => !!v || 'Поле не может быть пустым',
                v => (v && v.length >= 6) || 'Пароль должен содержать не менее 6 символов'
            ],
            confirmPassword: [
                v => !!v || 'Поле не может быть пустым',
                v => v === this.password || 'Пароли не совпадают'
            ],
            photo: [
                v => !!v || 'Поле не может быть пустым'
                // v => (http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png).test(v) || 'Введите корректную ссылку'
            ]
        }
      }
    },
    methods: {
    ...mapActions(['saveUser']),
    async registerUser() {
      this.isSaving = true
      await this.saveUser({
        username: this.username,
        email: this.email,
        password: this.password,
        photo: this.photo
      })
      this.$auth.login({
        data: {
          email: this.email,
          password: this.password
        }
      })
      this.$router.push('/')
    }
  }
                  
    //вытащил с кнопки :disabled="!valid"
  }
</script>

<style scoped>
  .snackbar-text {
    display: flex;
    justify-content: center;
  }
</style>
