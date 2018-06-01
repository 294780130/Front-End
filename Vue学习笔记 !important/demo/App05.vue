<template>
  <div id="app">
    {{msg}}<br>
    <!-- <img v-bind:src='url' />
    <img :src='url' /> -->
    <button v-on:click="run1()">执行事件方法一</button>
    <button @click="run2()">执行事件方法二</button>
    <button @click="getMsg()">获取data中的msg</button>
    <button @click="setMsg()">改变data中的msg</button>
    <button @click="reqData()">请求数据</button><br>
    <ul>
      <li v-for="item in list">
        {{item}}
      </li>
    </ul>
    <br>
    <ul>
        <li v-for="(item,key) in list">
            {{key}} --- {{item}}
        </li>
      </ul>
      <button @click="deleteData('111')">执行方法传值</button><br>
      <button data-aid='123' @click="eventFun($event)">事件对象</button><br>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      list:[]
    }
  },
  methods:{
    run1(){
      alert('第一种方式');
    },
    run2(){
      alert('第二种方式');
    },
    getMsg(){
      alert(this.msg);
    },
    setMsg(){
      this.msg = '改变后的msg';
    },
    reqData(){
      for(var i=0;i<10;i++){
        this.list.push('我是No.'+i+'条数据');
      }
    },
    deleteData(val){
      alert(val);
    },
    eventFun(e){
        console.log(e);
        e.srcElement.style.background='red';
        // 获取当前dom结点
        console.log(e.srcElement.dataset.aid);
        // 获取自定义属性
    }
  }
}
</script>

<style lang="scss">

</style>
