<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>{{ msg }}</h1>
    <br>
    <div v-bind:title="title">鼠标移上去看一下</div> 
    <!--1.0的版本可以使用title="{{title}}"-->
    <img v-bind:src="url" alt="百度一下">
    <img :src="url" alt="百度一下">
    <div v-html="h"></div>
    <div v-text="msg"></div>
    <!-- 循环数据，第一个数据高亮 -->
    <ul>
      <li v-for="(item,key) in list" >
        {{item}}----{{key}}
      </li>
    </ul>
    <ul>
        <li v-for="(item,key) in list" :class="{'red':key==0,'blue':key==1}">
          {{item}}----{{key}}
        </li>
      </ul>
    <div v-bind:class="{'red':flag}">
      我是第一个div
    </div>
    <div v-bind:class="{'red':flag,'blue':!flag}">
      我是第二个div
    </div>

    <div class="box" v-bind:style="{width:boxWidth+'px'}"></div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      title: '我是一个title',
      url:'https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo_top_ca79a146.png',
      h:'<h2>我是h2</h2>',
      list:['1','2','3','4','5'],
      flag:false,
      boxWidth:300
    }
  }
}
</script>

<style lang="scss">
  .red{
    color: red;
  }
  .blue{
    color: blue;
  }
  .box{
    width: 100px;
    height: 100px;
    background-color: red;
  }
</style>
