import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource';
import MintUi from 'mint-ui';
import 'mint-ui/lib/style.css';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import { Button, Select ,Input} from 'element-ui';
import router from './router/router';


Vue.use(VueResource);
Vue.use(MintUi);
Vue.use(Button);
Vue.use(Select);
Vue.use(Input)
// Vue.use(ElementUI);




//挂载路由



new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

//router-view 放在app.vue
