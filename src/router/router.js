/**
 * Created by zhouhangfeng on 2019/8/22.
 */
import Vue from 'vue'
import VueRouter from 'vue-router';
Vue.use(VueRouter);
//创建组件
import Home from '../components/Home.vue';
import News from '../components/News.vue';
import Content from '../components/Content.vue';
import Pcontent from '../components/Pcontent.vue';
import User from '../components/User.vue';
import UserAdd from '../components/User/UserAdd.vue';
import UserList from '../components/User/UserList.vue';

//配置路由
const routes = [
  {path:'/home',component:Home},
  {path:'/news',component:News,name:'news'},
  {path:'/content/:aid',component:Content},
  {path:'/pcontent',component:Pcontent},
  {
    path:'/user',
    component:User,
    children:[
      {path:'userAdd',component:UserAdd},
      {path:'userList',component:UserList}
    ]
  },
  {path:'*',redirect:'./home'}
]
//实例化vueRouter
const router = new VueRouter({
  mode:'history',
  routes
});
export default  router
