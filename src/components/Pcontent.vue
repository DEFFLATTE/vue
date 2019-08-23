<template>
  <div id="content">
    商品详情页面
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
        console.log(this.$route.query)
    }

  }
</script>
<style scoped>

</style>

