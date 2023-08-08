export default {
  setSearch(state, payload) {
    state.search = payload;
  },
  addSearch(state, payload) {
    state.searchList.unshift(payload);
    state.currentSearch = payload
    localStorage.setItem("searchList", JSON.stringify(state.searchList));
  },
  buildGraph(state, payload) {
    state.graphData.push(payload);
  },
  currentSearch(state, payload) {
    state.currentSearch = payload;
  },
  setTicker(state, payload) {
    state.ticker = payload;
  },
  clearSearches(state) {
    state.searchList = [];
    state.currentSearch = null;
    localStorage.removeItem("searchList");
  },
  clearSaved(state) {
    state.savedList = [];
    if (state.searchList.length > 0) {
      state.currentSearch = state.searchList[0];
    } else {
      state.currentSearch = null;
    }
    localStorage.removeItem("savedList");
  },
  saveSearches(state) {
    localStorage.setItem("savedList", JSON.stringify(state.searchList));
    state.savedList = [...state.searchList];
    state.searchList = [];
    localStorage.removeItem("searchList");
  },
  removeOne(state, payload) {
    state.searchList = state.searchList.filter((a) => a.id != payload.id);
    state.currentSearch = state.searchList[0];
    localStorage.setItem("searchList", JSON.stringify(state.searchList));
  },
  removeSaved(state, payload) {
    state.savedList = state.savedList.filter((a) => a.id != payload.id);
    if (state.searchList.length > 0) {
      state.currentSearch = state.searchList[0];
    } else {
      state.currentSearch = state.savedList[0];
    }
    localStorage.setItem("savedList", JSON.stringify(state.savedList));
  },
  failed(state, payload) {
    state.searchFail = payload
  }
};
