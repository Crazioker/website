// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app:{
    baseURL: '/website'
  },
  runtimeConfig:{
    proxyApiUrl: 'https://zlab.zlgcloud.com/v1/'
  },
  nitro:{
    devProxy:{
        '/website/api/':{
            target: 'https://zlab.zlgcloud.com/v1',
            changeOrigin: true,
            prependPath: true
        }
    },
    // routeRules:{
    //     '/api/**':{
    //         proxy:{
    //             to: 'https://zlab.zlgcloud.com/v1/**'
    //         }
    //     }
    // }
  },
  
})
