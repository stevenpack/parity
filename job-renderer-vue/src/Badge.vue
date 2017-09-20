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

</style>
