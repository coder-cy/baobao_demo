import Vuex from 'vuex';
import Vue from 'vue';
Vue.use(Vuex);


export default new Vuex.Store({
  state: {
    aaaaaa: "",
    bbbbbb: {
      x: 1,
      y: 2,
    },
    userName: "",
  },
  mutations: {
    setAAAAAAA(state, val) {
      state.aaaaaa = val;
    },
    setUserName(state, val) {
      state.userName = val;
    }
  },
  actions: {
    saveUserName(context, val) {
      context.commit("setUserName", val);
    }
  },
  modules: {
    
  }
})
