import actions from './actions'
import getters from './getters'
import mutations from './mutations'

export default {
    namespaced: true,
    state() {
        return {
            ticker: null,
            currentSearch: null,
            searchList: [],
            savedList: [],
            searchFail: null
        }
    },
    actions,
    getters,
    mutations
}