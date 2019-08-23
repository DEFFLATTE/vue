/**
 * Created by zhouhangfeng on 2019/8/22.
 */
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

    var state = {
      count:1,
      list:[]
    };
    var mutations={
      incCount(){
        ++state.count;
      },
      addList(state,list){
        state.list=list
      }
    };
    var getters={
      computedCount:(state)=>{
        return state.count*2
      }
    };
    var actions={
      incMutationsCount (context) {
        context.commit('incCount');
      }
    }
    const store = new Vuex.Store({
      state,
      mutations,
      getters,
      actions
    })
    export default store;



