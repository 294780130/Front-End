<template>
  <div id="app">
    <header class="header">
      <router-link to="/home">首页</router-link>
      <router-link to="/news">新闻</router-link>
      <router-link to="/user/useradd">用户</router-link>
    </header>
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
*{
  margin: 0;
  padding: 0;
}
header{
  background-color: black;
  a{
    display: inline-block;
    height: 40px;
    line-height: 40px;
    color: white;
    width: 30%;
    text-align: center;
    text-decoration: none;

  }
}
</style>