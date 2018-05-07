import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'
Vue.use(Vuex)


export  const store = new Vuex.Store({
    plugins: [createLogger()],
    state: {
        language:'zh',
        lon:-0.12563,
        lat:51.50568
    }
})