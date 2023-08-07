export default {
    login(context) {
        context.commit('setAuth', true)
    },
    logout(context) {
        context.commit('setAuth', false)
    },
    user(context, payload) {
        context.commit("setUser", payload);
    }
}