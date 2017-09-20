<template>
  <div id="badge">

      <div class="badge freelancer-badge">{{label}}</div>
  </div>
</template>

<script>
export default {
  name: 'badge',
    props: ['label'],

    data () {
    return {
      x: "hello"
    }
  }
}
</script>

<style>

    <!-- Example of breaking stye out to a reusable ComponentTransfer
         Rest of app just uses style from the template.
    -->

    .badge {
        font-family: 'poppinslight';
        font-weight: normal !important;
    }

    .freelancer-badge {
        color: #ffffff !important;
        background-color: #7fb13d !important;
        border-color: #76a833 !important;
    }
</style>
