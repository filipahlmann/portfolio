import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';
import VideoBackground from 'vue-responsive-video-background-player'
import AOS from 'aos'
import 'aos/dist/aos.css'

Vue.config.productionTip = false

new Vue({
  created () {
    AOS.init()
    Vue.component('video-background', VideoBackground);

  },
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
