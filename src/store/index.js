import { createStore } from 'vuex'
import searches from './modules/searches/index.js'
import auth from './modules/auth/index.js'

export default createStore({
  modules: {
    searches: searches,
    auth: auth
  }
})
