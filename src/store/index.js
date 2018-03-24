import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutation'

Vue.use(Vuex);

const state={
    login:false,  //is login
    userInfo:null,
    videoList:[]
}

export default new Vuex.Store({
    state,
    mutations
})