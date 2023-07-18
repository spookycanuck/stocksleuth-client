import actions from './actions'
import getters from './getters'
import mutations from './mutations'

export default {
    namespaced: true,
    state() {
        return {
            search: {ticker: 'AAPL', price: '$157', articles: 'hello world'}
        }
    },
    actions,
    getters,
    mutations
}