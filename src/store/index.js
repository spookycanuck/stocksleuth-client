import { createStore } from 'vuex'
import searches from './modules/searches/index.js'

export default createStore({
  modules: {
    searches: searches
  }
})
