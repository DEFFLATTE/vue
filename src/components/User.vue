<template>
  <div id="user">
    <h2>用户中心</h2>
    <br>
    <div class="user">
      <div class="left">
        <ul>
          <li><router-link to="/user/userAdd">增加用户</router-link></li>
          <li><router-link to="/user/userList">用户列表</router-link></li>
        </ul>
      </div>
      <div class="right">
          <router-view></router-view>
      </div>
      <br>
      <mt-button @click.native="flag=true" size="large">选择用户头像</mt-button>
      <mt-actionsheet :actions="actions" v-model="flag"></mt-actionsheet>
    </div>



  </div>
</template>
<script>
import Header from './Header.vue';
import VueEvent from '../model/vueEvent';
import ActionSheet from './actionSheet.vue'

  export default{
    data(){
      return {
        msg: '我是一个用户组件',
        flag:false,
        actions:[]
      }
    },
    components: {
      'v-header': Header,
      'v-actionsheet':ActionSheet
    },
    mounted() {
      this.actions = [{
        name: '拍照',
        method: this.takePhoto
      }, {
        name: '从相册中选择',
        method: this.openAlbum
      }];
      this.actions2 = [{
        name: '确定'
      }, {
        name: '返回上一步',
        method: this.goBack
      }];
    },
    methods: {
      takePhoto(){
          alert("拍照")
      },
      openAlbum(){
          alert('从相册中 选择')
      },
      goBack(){
          alert('返回')
      }
    }
  }
</script>
<style scoped>
    .user{
      display: flex;
    }
  .left{
    width:200px;
    min-height: 400px;
    border-right: 1px solid #eee;
  }
</style>

