export default {

  mode: 'universal',

  target: 'server',

  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
 
  css: [
  ],
 
  plugins: [
    '@plugins/vuetify'
  ],

  components: true,
 
  buildModules: [
    // '@nuxtjs/eslint-module'
  ],
 
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth'
  ],

  axios: {
    proxy: true
  },

  proxy: {
    '/api/': { target: 'http://localhost:3001', pathRewrite: { '^/api/': '' } }
  },

  auth: {
    strategies: {
      local: {
        endpoints: {
          login: {
            url: '/api/login',
            method: 'post',
            propertyName: 'accessToken'
          },
          logout: false,
          user: { url: '/api/user', method: 'get' }
        }
      }
    },
  },

  build: {
  }
}
