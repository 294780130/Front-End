# vue学习笔记汇总

## 02-vue环境搭建

+ Vue和Angular、React都是前端框架
  + 单页面框架
  + 基于模块化组件化的开发模式
+ cnpm的安装（淘宝镜像）
  + 地址：http://npm.taobao.org/
  + `npm install -g cnpm --registry=https://registry.npm.taobao.org`
+ vue环境搭建
  + 必须先安装node.js
  + 搭建vue的开发环境 ，安装vue的脚手架工具   官方命令行工具
    + `npm install --global vue-cli`  /   `cnpm install --global vue-cli`
  + 创建项目（项目根目录执行）
    + 方法一：适用于大型项目
      + `vue init webpack vue-demo01`  //然后都回车，除了ESlink选择no（代码纠错） YN回车……
      + `cd  vue-demo01`
      + `cnpm install`   /  `npm install`  如果创建项目的时候没有报错，这一步可以省略。如果报错了  cd到项目里面运行
      + `npm run dev`
    + 方法二：适用于中小型项目
      + `vue init webpack-simple vuedemo02`
      + `cd  vuedemo02`
      + `cnpm install`  /  `npm install`
      + `npm run dev`

## 03-数据绑定和数据渲染（vue-for）

+ 当拿到一个不包含`node-modules`名字的文件夹的时候，需要运行`npm install` / `cnpm install` 程序会根据`package.json`文件中的依赖包加载文件
+ `npm run dev` 即可把项目跑起来了



+ 文件用途说明

  + node_modules → 项目依赖包文件
  + src
    + assets → 项目静态资源文件
    + App.vue → 根组件
      + template → html代码
      + script → 业务逻辑，js代码
      + style → css代码
    + main.js
  + .babelrc → 配置文件（不重要）
  + .editorconfig → 编辑器的配置文件（不重要）
  + .gitignore → 忽略的文件（不重要）
  + index.html → html入口文件，但基本不用加东西
  + package.json → 项目配置文件（重要）
  + README.md → 项目说明文件
  + webpack.config.js → webpack配置文件（模块化打包）把.vue文件打包成可以被浏览器解析的文件

+ vue数据绑定和数据渲染

  ```html
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
  ```

  ```javascript
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
  ```

## 04-绑定属性（v-bind、v-html、v-text）

+ 绑定到标签中的属性——v-bind（可省略写）
  + 将变量作为属性绑定到html中，可使用`v-bind:title="title"`，其中`v-bind`可省略，写成`:title="title"`，引号中的内容即为变量名
+ 绑定html标签代码，并被解析——v-html
  + `<div v-html="h"></div>`，其中h为被绑定的变量，内含html代码
+ 绑定数据，除了`{{变量}}`还有一种方法——v-text
  + `<div v-text="msg"></div>`同`{{msg}}`
+ 绑定class——v-bind:class（可省略写）
  + `v-bind:class="{'class类名': true/false }"`true或false可以用表达式
  + v-for可以写成`v-for="(item,key) in list"`，key即为循环索引值，可以用`key==0`判断是否为第一个元素
+ 绑定style——v-bind:style（可省略写）
  + `<div class="box" v-bind:style="{width:boxWidth+'px'}"></div>`宽度要加px，字符拼接

```html
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
```

```javascript
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
```

## 05-双向数据绑定 事件 获取dom节点

### 双向数据绑定（MVVM）

+ Vue就是一个MVVM框架

  + M-model
  + V-view

+ model改变影响view，view改变影响model

+ 双向数据绑定必须在表单中使用

+ 双向数据绑定的实现——v-model

  + `<input type="text" v-model='msg' />`input表单即可改变msg变量的值，同时反馈到使用msg变量渲染的其他地方

+ 使用vue事件验证双向数据绑定

  + 用button获取/设置变量的值

    ```html
    <h1>{{ msg }}</h1>
        <input type="text" v-model='msg' />
        <button v-on:click="getMsg()">获取表单里的数据</button>
        <button v-on:click="setMsg()">设置表单里的数据</button>
    ```

+ 用处理函数（写在data函数外，methods）

  ```javascript
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
      }
    }
  }
  ```

+ 获取dom节点——ref

  ```html
  <input type="text" ref="user">
  <div ref="box">box</div>
  <button v-on:click="getInputValue()">获取第二个表单的数据</button>
  ```

  ```javascript
  getInputValue(){
      this.$refs.box.style.background='red';
      console.log(this.$refs.user);
      alert(this.$refs.user.value);
  }
  ```

## 06-事件（获取、改变数据，传值，事件对象）

+ `v-on:click=“fun()”`处理事件

  + 可以简写成`@click="fun()"`
  + 同`v-bind:src='url'`可以简写成`:src='url'`

+ 获取数据和改变数据

  + 获取数据：`this.msg`

  + 改变数据：`this.msg='新的msg'`

  + 数组循环加入值

    ```javascript
    for(var i=0;i<10;i++){
        this.list.push('我是No.'+i+'条数据');
    }
    ```

+ 方法的传值

  + 传入具体值

    ```html
    <button @click="deleteData('111')">执行方法传值</button>
    ```

    ```javascript
    deleteData(val){
        alert(val);
    }
    ```

  + 传入事件对象

    ```html
    <button data-aid='123' @click="eventFun($event)">事件对象</button>
    ```

    ```javascript
    eventFun(e){
        console.log(e);
        e.srcElement.style.background='red';
        // 获取当前dom结点
        console.log(e.srcElement.dataset.aid);
        // 获取自定义属性
    }
    ```

## 07-事件+双向数据绑定实现todolist

+ 实际操作为主

+ 用到的新的函数——删除数组中的某个元素

  `this.list.splice(key,1); `

+ `arrayObject.splice(index,howmany,item1,.....,itemX)`

  + index：必须，整数，删除的元素的起始下标
  + howmany：必须，删除元素的数量，可以为0，表示不删除
  + item：可选，向数组添加新的项目

