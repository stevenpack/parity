<template>
  <div id="badge">

    badge

    <h3>{{label}}</h3>

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
