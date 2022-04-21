import Vue from 'vue'
import Vuex from 'vuex'
import { Interviews } from '@/store/vue-interview';

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    Interviews,
  }
})
