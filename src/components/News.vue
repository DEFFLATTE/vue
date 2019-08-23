<template>
  <div>
    <v-header></v-header>
    <h2>这是一个新闻组件----{{this.$store.state.count}}</h2>
    <button @click="incCount">增加数量</button>
    <el-input placeholder="请输入内容"></el-input>
    <ul>
      <li v-for="(item,key) in list">
        <router-link :to="'/content/'+item.aid">{{key}}----{{item.title}}</router-link>
      </li>
    </ul>
    <button @click="reqData">请求数据</button>
    <br>
    <!--<ul class="page-infinite-list" v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="50">-->
      <!--<li v-for="item in list2" class="page-infinite-listitem">{{ item.title }}</li>-->
    <!--</ul>-->

    <p v-if="loading&&end" class="page-infinite-loading">
      加载完毕...
    </p>
    <p v-else class="page-infinite-loading">
      <mt-spinner type="fading-circle"></mt-spinner>
      加载中...
    </p>
  </div>
</template>
<script>
  //http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1

  //http://www.phonegap100.com/appapi.php?a=getPortalList&aid=489
  import Header from './Header.vue';
  import VueEvent from '../model/vueEvent';
  import store from '../vuex/store';
  export default{
    data(){
        return{
            msg:'我是一个新闻组件',
            list:[],
            list2: [],
            loading: false,
            page:1,
            end:false
        }
    },
    store,
    components:{
      'v-header':Header
    },
    mounted(){
        console.log(this.$store.state.list)
        if(this.$store.state.list.length>0){
            this.list = this.$store.state.list
        }else{
          this.reqData();
        }

      VueEvent.$on('to-news',function (data) {
        console.log(data)
      })
    },
    methods:{
      emitHome(){
        VueEvent.$emit("to-home",this.msg)
      },
      reqData(){
          var api = "http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1";
          this.$http.get(api).then((res)=>{
              console.log(res);
              this.list =res.data.result;
              console.log(res.data.result)
              this.$store.commit('addList',res.data.result)

          }),(err)=>{
              console.log(err)
          }
      },
      loadMore(){

        this.reqData2();

      },
      reqData2(){
        this.loading = true;
        var api = "http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page="+this.page;
        this.$http.get(api).then((res)=>{
          console.log(res);
          this.list2 = this.list2.concat(res.data.result);
          ++this.page;
          if(res.data.result.length<20){
            this.loading = true;
            this.end = true
          }else{
            this.loading = false;
          }
        }),(err)=>{
          console.log(err)
        }
      },
      incCount(){
          this.$store.commit('incCount')
      }
    }
  }
</script>
<style>

</style>
