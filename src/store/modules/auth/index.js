import actions from './actions'
import getters from './getters'
import mutations from './mutations'

export default {
    namespaced: true,
    state() {
        return {
            auth: true, //Set to true for dev. Set to false for testing user workflow.
            user: ''
        }
    },
    actions,
    getters,
    mutations
}