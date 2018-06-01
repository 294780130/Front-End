<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    你好{{obj.name}}
    <ul>
      <li v-for="array in arr">
          {{array}}
      </li>
    </ul>
    <ul>
      <li v-for="array2 in arr2">
          Title:{{array2.title}}
      </li>
    </ul>
    <ul>
      <li v-for="array3 in arr3">
          {{array3.part}}
          <ol>
            <li v-for="list3 in array3.list">
              {{list3.title}}
            </li>
          </ol>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  // name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      obj:{
        name:"Vue"
      },
      arr:[
        "1",
        "2",
        "3"
      ],
      arr2:[
        {'title':'title1'},
        {'title':'title2'},
        {'title':'title3'},
        {'title':'title4'}
      ],
      arr3:[
        {
          'part':'国内新闻',
          'list':[
            {'title':'国内新闻1'},
            {'title':'国内新闻2'},
            {'title':'国内新闻3'}
          ]
        },
        {
          'part':'国际新闻',
          'list':[
            {'title':'国际新闻1'},
            {'title':'国际新闻2'},
            {'title':'国际新闻3'}
          ]
        }
      ]
    }
  }
}
</script>

<style lang="scss">
/*  #app {
   font-family: 'Avenir', Helvetica, Arial, sans-serif;
   -webkit-font-smoothing: antialiased;
   -moz-osx-font-smoothing: grayscale;
   text-align: center;
   color: #2c3e50;
   margin-top: 60px;
 }
 h1, h2 {
   font-weight: normal;
 }
 ul {
   list-style-type: none;
   padding: 0;
 }
 li {
   display: inline-block;
   margin: 0 10px;
 }
 a {
   color: #42b983;
 } */
</style>
