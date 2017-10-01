<template>
  <div class="hellocard">
    <v-card hover @click="setZoom(item)">
        <router-link :to="`zoom`">
      <img :src="item.url" class="media">
    </router-link>    
      <v-card-title>
        <div>
          <p class="grey--text">{{item.author}}</p>
        </div>
        <v-spacer></v-spacer>
        <v-icon small>play_for_work</v-icon>
        <p>{{item.keeps}}</p>
        <v-icon small>visibility</v-icon>
        <p>{{item.views}}</p>
      </v-card-title>
      <v-slide-y-transition>
        <v-card-text v-if="show">
          <div v-for="tag in item.tags">
            <p>{{tag}}</p>
          </div>
        </v-card-text>
      </v-slide-y-transition>
      <v-card-actions class="white">
        <v-spacer></v-spacer>
        <v-btn icon @click="redraw">
            <v-icon>{{ show ? 'keyboard_arrow_up' : 'keyboard_arrow_down' }}</v-icon>
          </v-btn>
        <v-btn icon>
          <v-icon>library_add</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>share</v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
  export default {
    name: 'hellocard',
    props: ["item"],
    data() {
      return {
        msg: 'Welcome to Your Vue.js App',
        show: false
      }
    },
    methods: {
      redraw() {
        this.show = !this.show
        this.$redrawVueMasonry();
      },
      setZoom(item){
        this.$store.commit('setZoom', item)
      }
    },
    mounted() {
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .media {
    /* padding-top: 15rem; */
    width: 100%;
    min-height: 5rem;
    max-height: 30rem;
  }

  .hellocard {
    padding-bottom: 1vh;
    margin: 0 auto;
  }
</style>