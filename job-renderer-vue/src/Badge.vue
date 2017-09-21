<template>
  <div id="badge">

      <div :class="divClass()">{{label}}</div>
  </div>
</template>

<script>
export default {
  name: 'badge',
    props: ['label', 'employment'],

    data () {
        return {
          divClass() {return 'badge ' + this.label.toLowerCase() + '-badge';}
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

    .permanent-badge {
        color: #ffffff !important;
        background-color: #7fb13d !important;
        border-color: #76a833 !important;
    }

    .contract-badge {
        color: #ffffff !important;
        background-color: blue !important;
        border-color: blue !important;
    }
</style>
