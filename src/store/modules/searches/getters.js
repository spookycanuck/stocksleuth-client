export default {
    search(state) {
        return state.search;
    },
    searchList(state) {
        return state.searchList;
    },
    savedList(state) {
        return state.savedList;
    },
    currentSearch(state) {
        return state.currentSearch;
    },
    failed(state) {
        return state.searchFail;
    }
}