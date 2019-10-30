import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);


export default new Vuex.Store({
    state: {
        aaaaaa: 111,
        bbbbbb: {
            x: 1,
            y: 2,
        }
    },
    mutations: {
        setAAAAAAA(state, val) {
            state.aaaaaa = val;
        }
    },
    actions: {

    },
    modules: {

    }
})