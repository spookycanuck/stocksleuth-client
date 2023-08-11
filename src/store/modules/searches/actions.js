import axios from "axios";

export default {
  async getStockList(context) {
    let res;
    var stockList = JSON.parse(localStorage.getItem('stockList'))
    if (!stockList) {
      res = await axios
      .get(`http://localhost:5000/api/v1/stock-list`);
      if (res.status === 200 ) {
        stockList = res.data
      }
    }
    context.commit("setStockList", stockList)
  },
  async newSearch(context, payload) {
    const ticker = payload.toUpperCase();
    context.commit("setTicker", payload);
    let search;
    let price;
    let overview;

    try {
      price = await axios
        .get(`http://localhost:5000/api/v1/price?ticker=${ticker}`);
      overview = await axios
        .get(`http://localhost:5000/api/v1/overview?ticker=${ticker}`);
      if (price.status == 200 && price.data.length > 0) {
        search = {
          ...price.data[0],
          ...overview.data,
          data: price.data
        }
      }
      context.commit("addSearch", search);
      context.commit("failed", null);
      if (context.getters.currentSearch == null) {
        context.commit("currentSearch", search);
      }
    } catch (e) {
      context.commit("failed", true);
      return;
    }
  },
  buildGraph(context, payload) {
    // TODO: finish building the graph
    //    buildGraph takes the API data from newSearch and should structure the data
    //    appropriately for the graph in Graph.vue
    context.commit("buildGraph", payload);
    console.log("buildGraph: ", payload);
  },
  currentSearch(context, payload) {
    context.commit("currentSearch", payload);
  },
  clearSearches(context) {
    context.commit("clearSearches");
  },
  clearSaved(context) {
    context.commit("clearSaved");
  },
  saveSearches(context) {
    context.commit("saveSearches");
  },
  removeOne(context, payload) {
    context.commit("removeOne", payload);
  },
  removeSaved(context, payload) {
    context.commit("removeSaved", payload);
  },
};
