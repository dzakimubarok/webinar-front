import Vue from 'vue'
import Vuex from 'vuex'
import events from '../store/module/Data';



Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    events,
  }
})
