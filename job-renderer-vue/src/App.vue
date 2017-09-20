<template>
  <div id="app">
    <h3>{{job.headline}}</h3>
    <badge label="abc"></badge>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      job: job //From global from javascript_advert.js
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}

h1, h2 {
  font-weight: normal;
}

</style>
