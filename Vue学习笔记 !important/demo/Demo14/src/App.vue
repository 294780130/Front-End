<template>
  <div id="app">
    <h2>{{ msg }}</h2>
    <v-home></v-home>
    <br>
  </div>
</template>

<script>
import Home from './components/Home.vue';
export default {
  name: 'app',
  data () {
    return {
      msg: '这是一个根组件'
    }
  },
  components:{
    'v-home' : Home
  }
}
</script>

<style lang="scss">

</style>
