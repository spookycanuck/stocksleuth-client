import axios from "axios";

export default {
  async newSearch(context, payload) {
    const ticker = payload.toUpperCase();
    context.commit("setTicker", payload);
    let data;
    let res;

    //let res = await axios.get(`http://localhost:3000/tickers?ticker=${ticker}`);
    try {
      res = await axios.get(
        `http://localhost:5000/api/v1/price?ticker=${ticker}`
      ).catch((e) => {
        // console.log(e)
        context.commit("failed", true)
        return;
      });
      if (res.status == 200 && res.data.length > 0) {
        let x = res.data[0];
        // TODO: Map entire ticker history -- X will only return the latest date
        data = {
          id: ticker,
          adjClose: x.adjClose,
          change: x.change,
          changeOverTime: x.changeOverTime,
          changePercent: x.changePercent,
          close: x.close,
          date: x.date,
          high: x.high,
          label: x.label,
          low: x.low,
          open: x.open,
          unadjustedVolume: x.unadjustedVolume,
          volume: x.volume,
          vwap: x.vwap,
        };
      }
      context.commit("addSearch", data);
      context.commit("failed", null)
      if (context.getters.currentSearch == null) {
        context.commit("currentSearch", data);
      }
    } catch (e) {
      return;
    }
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
