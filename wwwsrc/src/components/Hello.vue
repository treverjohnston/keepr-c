<template>
  <div class="hello">
    <div v-masonry transition-duration="0.3s" item-selector=".item" class="hellocards ">
      <v-layout row justify-space-around>
          <v-flex xs12 sm3 md2 v-masonry-tile fit-width="true" class="item" v-for="item in blocks">
            <hellocard :item="item"></hellocard>
          </v-flex>
      </v-layout>
    </div>
  </div>
</template>

<script>
  import Hellocard from './HelloCard'
  export default {
    name: 'hello',
    data() {
      return {
        weird: true
      }
    },
    components: {
      Hellocard
    },
    computed: {
      blocks() {
        return this.$store.state.dummy
      }
    },
    methods: {
      refresh() {
        this.$redrawVueMasonry();
        // console.log("refreshing")
        setTimeout(this.refresh, 500);
      },
    },
    mounted() {
      this.refresh();
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .item {
    /* margin: 0 .5vw 0 0; */
    padding: 0 .5vw 0 .5vw;
    /* max-width: 50%; */
    /* min-width: 20vw; */
    /* max-width: 90%; */
    /* max-width: 23vw; */
    /* width: 23vw; */
    margin: 0 auto;
    /* min-width: 90vw; */

  }

  .hellocards {
    max-width: 95vw;
    margin: 0 auto;
  }
</style>