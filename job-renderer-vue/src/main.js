import Vue from 'vue'
import App from './App.vue'
import Badge from "./Badge.vue"

Vue.component('badge', Badge);

new Vue({
  el: '#app',
  render: h => h(App)
})
