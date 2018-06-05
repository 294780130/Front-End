import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css';
Vue.use(Mint);
Vue.use(VueRouter);
Vue.use(VueResource);
//1.创建组件
import Home from './components/Home.vue';
import News from './components/News.vue';
import Content from './components/Content.vue';
import Pcontent from './components/Pcontent.vue'; 
import User from './components/user.vue'; 
import UserAdd from './components/User/UserAdd.vue'; 
import UserList from './components/User/UserList.vue'; 
//2.配置路由
const routes = [
  { path: '/home', component: Home },
  { path: '/news', component: News,name:'news' },
  { 
    path: '/user', 
    component: User,
    children:[
      {path:'useradd',component:UserAdd},
      {path:'userlist',component:UserList}
    ] 
  },
  { path: '/content/:aid', component: Content },
  { path: '/pcontent', component: Pcontent },
  { path: '*', redirect: '/home' }   /*默认跳转路由*/
]
//3.实例化VueRouter
const router = new VueRouter({
  mode: 'history',
  routes // （缩写）相当于 routes: routes
})

//4.挂载路由
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})