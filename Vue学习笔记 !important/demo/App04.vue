<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>{{ msg }}</h1>
    <input type="text" v-model='msg' />
    <button v-on:click="getMsg()">获取表单里的数据</button>
    <button v-on:click="setMsg()">设置表单里的数据</button><br>
    <input type="text" ref="user">
    <div ref="box">box</div>
    <button v-on:click="getInputValue()">获取第二个表单的数据</button>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: '你好，vue'
    }
  }, methods:{ /*放自定义方法的地方*/
    getMsg(){
      alert(this.msg);
    },
    setMsg(){
      this.msg="我是改变后的数据";
    },
    getInputValue(){
      this.$refs.box.style.background='red';
      console.log(this.$refs.user);
      alert(this.$refs.user.value);
    }
  }
}
</script>

<style lang="scss">

</style>
