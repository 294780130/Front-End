<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h2>{{ msg }}</h2>
    <v-home></v-home>
    <hr><br>
    <v-news></v-news>
  </div>
</template>

<script>
import News from './components/News.vue';
import Home from './components/Home.vue';
export default {
  name: 'app',
  data () {
    return {
      msg: '这是一个根组件'
    }
  },
  components:{
    'v-home' : Home,
    'v-news' : News
  }
}
</script>

<style lang="scss">

</style>
