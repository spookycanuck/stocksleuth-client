import actions from './actions'
import getters from './getters'
import mutations from './mutations'

export default {
    namespaced: true,
    state() {
        return {
            auth: false, //Set to true for dev. Set to false for testing user workflow.
            user: '' // Need to change this to a list and manipulate the payload
                        // in the actions.js to pull from the API
                        // also build out the dropbox for image and
                        // add custom image to API
        }
    },
    actions,
    getters,
    mutations
}