import Vue from 'vue'
import App from './App.vue'
import Badge from "./Badge.vue"
import Parallax from "./Parallax.vue"
import SingleJob from "./SingleJob.vue"
import AttributeList from "./AttributeList.vue"

Vue.component('badge', Badge);
Vue.component('parallax', Parallax);
Vue.component('single-job', SingleJob);
Vue.component('attribute-list', AttributeList);

new Vue({
  el: '#app',
  render: h => h(App)
});

//TODO: test code. delete
console.log(typeof job.methodology.buildserver);
