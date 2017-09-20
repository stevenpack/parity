<template>
  <div id="attribute-list">

      <h5 class="small-title">{{title}}</h5>



      <ul class="customlist">
          <li v-for="key in keys()">{{decorateKey(key)}} {{list[key]}}</li>
      </ul>
  </div>
</template>

<script>
export default {
    name: 'attribute-list',
    props: [
        'title',
        'list',
    ],
    data () {
        return {
            keys: function() {
                return Object.keys(this.list).filter(key => this.list.hasOwnProperty(key))
            },
            decorateKey: function(key) {
                let termEntry = this.termsMap[key];
                if (termEntry && termEntry.nice) {
                    return termEntry.nice;
                }
                return key;
            },
            termsMap: {
                codereviews: {nice: "Code Reviews"}
            }
        }
    }
}
</script>

<style>

</style>
