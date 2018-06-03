<template>
  <div id="app">
    <input type="text" v-model='todo' @keydown="addItem($event)">
    <!-- <button @click="addItem()">+增加</button><br> -->
    <hr>
    <h2>进行中</h2>
    <ul>
      <li v-for="(item,key) in list" v-if='!item.checked'>
        <input type="checkbox" v-model='item.checked' @change='saveList()'>{{item.title}} ---- <button @click="removeItem(key)">删除</button>
      </li>
    </ul><br>
    <h2>已完成</h2>
    <ul class="finish">
      <li v-for="(item,key) in list" v-if='item.checked'>
        <input type="checkbox" v-model='item.checked' @change='saveList()'>{{item.title}} ---- <button @click="removeItem(key)">删除</button>
      </li>
    </ul>
  </div>
</template>

<script>
import storage from './model/storage.js';
console.log(storage);
export default {
  name: 'app',
  data () {
    return {
      todo: '',
      list:[]
    }
  },
  methods:{
    addItem(e){
      if(e.keyCode==13){
        this.list.push({
          title:this.todo,
          checked:false
        });
        this.todo='';
      }
      storage.set('list',this.list);
    },
    removeItem(key){
      this.list.splice(key,1);
      // splice删除数组中key的元素
      storage.set('list',this.list);
    },
    saveList(){
      storage.set('list',this.list);
    }
  },
  mounted(){ /*生命周期函数，vue页面刷新就会触发，和method同级*/
    var list = storage.get('list');
    if(list){  /*若不判断空，空赋值循环会报错*/
      this.list = list;
    }
  }
}
</script>

<style lang="scss">

</style>
