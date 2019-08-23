<template>
  <div id="home">
    <v-header ref="header"></v-header>
    我是首页组件----{{this.$store.state.count}}--{{this.$store.getters.computedCount}}
    <br>
    <button @click="incCount">增加数量</button>
    <br>

    <br>
    <el-button type="primary">主要按钮</el-button>
    <el-button type="success">成功按钮</el-button>
    <el-button type="info">信息按钮</el-button>
    <el-button type="warning">警告按钮</el-button>
    <el-button type="danger">危险按钮</el-button>
    <span class="head">{{msg}}</span>
    <el-input placeholder="请输入内容"></el-input>

    <br>


    <br>
    <br>
    <br>

    <li v-for="(item,key) in list">
      <router-link :to="'/pcontent?aid='+key">{{key}}----{{item}}</router-link>
    </li>
    <br>
    <br>
    <button @click="goNews()">通过js跳转到新闻页面</button>
    <mt-button type="default">default</mt-button>
    <mt-index-list>
      <mt-index-section index="A">
        <mt-cell title="Aaron"></mt-cell>

        <mt-cell title="Aaron"></mt-cell>
        <mt-cell title="Alden"></mt-cell>
        <mt-cell title="Austin"></mt-cell>
      </mt-index-section>
      <mt-index-section index="B">
        <mt-cell title="Baldwin"></mt-cell>
      </mt-index-section>
      <mt-index-section index="c">
        <mt-cell title="Baldwin"></mt-cell>
        <mt-cell title="Braden"></mt-cell>
      </mt-index-section>
      <mt-index-section index="Z">
        <mt-cell title="Zack"></mt-cell>
        <mt-cell title="Zane"></mt-cell>
      </mt-index-section>
    </mt-index-list>

    <br>
    <!--<v-infinitescroll></v-infinitescroll>-->


  </div>
</template>
<script>
import Header from './Header.vue';
import VueEvent from '../model/vueEvent';
import InfiniteScroll from './infiniteScroll.vue';
import store from '../vuex/store';
console.log(store.state.count)
  export default{
    data(){
      return {
        msg: '我是一个首页组件',
        title: '首页11',
        list: ['商品11111', '商品22222', '商品33333']
      }
    },
    store,
    components: {
      'v-header': Header,
      'v-infinitescroll':InfiniteScroll
    },
    mounted(){
      VueEvent.$on('to-home', function (data) {
        console.log(data)
      })
    },

    methods: {
      emitNews(){
        VueEvent.$emit("to-news", this.msg)
      },
      goNews(){
//        this.$router.push('/news');
//        this.$router.push({path:'/content/495'})
        this.$router.push({name:'news'})
      },
      incCount(){
//          this.$store.commit('incCount');
        this.$store.dispatch('incMutationsCount')
      }
    }
  }
</script>
<style scoped lang="scss">
   h2{
      color: red;
    }
  #home{
    background: yellow;
    .head{
      color: red;
    }
  }
</style>

