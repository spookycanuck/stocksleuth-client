export default {
    setSearch(state, payload) {
        state.search = payload;
    },
    addSearch(state, payload) {
        state.searchList.push(payload);
        localStorage.setItem('searchList', JSON.stringify(state.searchList));
    },
    currentSearch(state, payload) {
        state.currentSearch = payload;
        // console.log(state.currentSearch)
    },
    setTicker(state, payload) {
        state.ticker = payload;
    },
    clearSearches(state) {
        state.searchList = [];
        state.currentSearch = null;
        localStorage.removeItem('searchList');
    },
    removeOne(state, payload) {
        state.searchList = state.searchList.filter(a => a.id != payload.id)
        state.currentSearch = state.searchList[0];
        localStorage.setItem('searchList', JSON.stringify(state.searchList));
    },
}