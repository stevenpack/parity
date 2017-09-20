<template>
  <div id="app">

      <parallax></parallax>
      <div class="col-md-8 col-sm-7 col-xs-12">
          <single-job v-bind:job="job"></single-job>
      </div>
      <div class="col-md-2 col-sm-2 col-xs-12">
          <div class="job-meta m45">
              <p>Employer</p>
              <small>Parity Technology</small>
              <ul class="company-links clearfix">
                  <li><a href="https://parity.io"><i class="fa fa-link"></i> Website</a></li>
                  <li><a href="#"><i class="fa fa-google-plus"></i> Google+</a></li>
                  <li><a href="#"><i class="fa fa-twitter"></i> Twitter</a></li>
                  <li><a href="#"><i class="fa fa-facebook"></i> Facebook</a></li>
                  <li><a href="#"><i class="fa fa-linkedin"></i> Linkedin</a></li>
              </ul>
          </div>
      </div>
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


</style>
