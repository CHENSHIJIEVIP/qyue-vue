import Vue from 'vue'

// 导入Vuex
import Vuex from 'vuex'
import sport from "./modules/sport"
import travel from "./modules/travel"
import detail from "./modules/detail"
import com from "./modules/com"
import runOrWalk from "./modules/runOrWalk" 
import user from "./modules/user"

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    sport,
    travel,
    detail,
    com,
    runOrWalk,
    user
  }
})
