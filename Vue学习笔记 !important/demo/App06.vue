<template>
  <div id="app">
    <input type="text" v-model='todo'>
    <button @click="addItem()">+增加</button><br><hr>
    <ul>
      <li v-for="(item,key) in list">
        {{item}} ---- <button @click="removeItem(key)">删除</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      todo: '',
      list:[]
    }
  },
  methods:{
    addItem(){
      this.list.push(this.todo);
      this.todo = '';
    },
    removeItem(key){
      this.list.splice(key,1);
      // splice删除数组中key的元素
    }
  }
}
</script>

<style lang="scss">

</style>
