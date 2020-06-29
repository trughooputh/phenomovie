import Vue from 'vue'
import Vuex from 'vuex'

// Store
import MoviesStore from './MoviesStore'

Vue.use(Vuex)

const store = new Vuex.Store(MoviesStore)

export default store
