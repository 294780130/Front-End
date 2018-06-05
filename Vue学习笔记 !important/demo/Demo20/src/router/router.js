import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter);

//1.创建组件
import Home from '../components/Home.vue';
import News from '../components/News.vue';
import User from '../components/user.vue'; 
//2.配置路由
const routes = [
  { path: '/home', component: Home },
  { path: '/news', component: News,name:'news' },
  { path: '/user', component: User },
  { path: '*', redirect: '/home' }   /*默认跳转路由*/
]
//3.实例化VueRouter
const router = new VueRouter({
  mode: 'history',
  routes // （缩写）相当于 routes: routes
})

export default router;