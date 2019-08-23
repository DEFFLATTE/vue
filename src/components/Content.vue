<template>
  <div id="content">
    我是详情页面
    <br>
    <div v-html="msg"></div>

  </div>
</template>
<script>

  export default{
    data(){
      return{
        msg:"数据"
      }
    },
    mounted(){
        console.log(this.$route.params)
      this.getDetailData();
    },
    methods:{
        getDetailData(){
            let api = 'http://www.phonegap100.com/appapi.php?a=getPortalArticle&aid='+this.$route.params.aid;
            this.$http.get(api).then((res)=>{
//                console.log(res);
              this.msg = res.data.result[0].content
            }),(err)=>{
                console.log(err)
            }
        }
    }


  }
</script>
<style scoped>

</style>

