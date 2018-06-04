<template>
  <div id="app">
    <h2>{{ msg }}</h2>
    <v-home></v-home>
    <br><hr>
    <v-news></v-news>
    <br>
  </div>
</template>

<script>
import Home from './components/Home.vue';
import News from './components/News.vue';
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