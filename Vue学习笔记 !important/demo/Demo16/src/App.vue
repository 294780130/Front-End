<template>
  <div id="app">
    <router-link to="/home">首页</router-link>
    <router-link to="/news">新闻</router-link>
    <hr>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app',
  data () {
    return {
      msg: '这是一个根组件'
    }
  }
}
</script>

<style lang="scss">

</style>