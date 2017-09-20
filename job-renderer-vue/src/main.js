import Vue from 'vue'
import App from './App.vue'
import Badge from "./Badge.vue"
import Parallax from "./Parallax.vue"

Vue.component('badge', Badge);
Vue.component('parallax', Parallax);

new Vue({
  el: '#app',
  render: h => h(App)
})
