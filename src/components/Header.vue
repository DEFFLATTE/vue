<template>
  <div>
    <h2 class="header">这是一个头部组件--</h2>
    <button @click="run('123')">执行</button>
    <br>
    <button @click="getParantData()">获取父组件方法</button>
    <br>
    <router-link to="/home">go home</router-link>
    <router-link to="/news">go news</router-link>
  </div>
</template>
<script>
  export default{

    data(){
      return{
        msg:'子组件的msg'
      }
    },
    methods:{
      run(){
          alert('我是子组件的run方法')
      },
      getParantData(){
        this.$parent.run()
      }
    },

  }
</script>
<style>
.header{
  background: #000;
  color: white;
}
</style>
