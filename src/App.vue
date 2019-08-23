<template>
  <div id="app">
    <div class="header">
      <router-link to="/home">go home</router-link>
      <router-link to="/news">go news</router-link>
      <router-link to="/user/userAdd">newsCenter</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>


export default {
  name: 'app',
  data () {
    return {

    }
  },
  mounted(){
      console.log('我是一个生命周期函数');
  },
  methods:{

  }
}
</script>

<style>
  .header{
    background: #000;
    padding:10px 0px;
    text-align: center;
  }
  .header a{
    color: white;
  }

</style>
