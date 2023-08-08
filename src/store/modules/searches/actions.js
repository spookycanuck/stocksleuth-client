import axios from "axios";

export default {
  async newSearch(context, payload) {
    const ticker = payload.toUpperCase();
    context.commit("setTicker", payload);
    let recentData;
    let graphData;
    let res;

    //let res = await axios.get(`http://localhost:3000/tickers?ticker=${ticker}`);
    try {
      res = await axios
        .get(`http://localhost:5000/api/v1/price?ticker=${ticker}`)
        .catch((e) => {
          // console.log(e)
          context.commit("failed", true);
          return;
        });
      if (res.status == 200 && res.data.length > 0) {
        let x = res.data[0];
        graphData = res.data;
        // TODO: Map entire ticker history -- X will only return the latest date
        //    graphData is the entire API data call, and sends it to another action
        recentData = {
          id: ticker,
          adjClose: x.adjClose,
          change: x.change,
          changeOverTime: x.changeOverTime,
          changePercent: x.changePercent,
          close: x.close,
          date: x.date,
          high: x.high,
          label: x.label.slice(0, -2) + "20" + x.label.slice(-2),
          low: x.low,
          open: x.open,
          unadjustedVolume: x.unadjustedVolume,
          volume: x.volume,
          vwap: x.vwap,
        };
      }
      context.commit("addSearch", recentData);
      context.dispatch("buildGraph", graphData);
      context.commit("failed", null);
      if (context.getters.currentSearch == null) {
        context.commit("currentSearch", recentData);
      }
    } catch (e) {
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
