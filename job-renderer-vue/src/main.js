import Vue from 'vue'
import App from './App.vue'
import Badge from "./Badge.vue"
import Parallax from "./Parallax.vue"
import SingleJob from "./SingleJob.vue"
import AttributeList from "./AttributeList.vue"
import TechTable from "./TechTable.vue"
import Essentials from "./Essentials.vue"

Vue.component('badge', Badge);
Vue.component('parallax', Parallax);
Vue.component('single-job', SingleJob);
Vue.component('attribute-list', AttributeList);
Vue.component('tech-table', TechTable);
Vue.component('essentials', Essentials);

new Vue({
  el: '#app',
  render: h => h(App)
});

if (!job) {
    console.error("No job to render. Check ad-blocker");
}
