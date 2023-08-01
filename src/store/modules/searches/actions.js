import axios from "axios";

export default {
  async newSearch(context, payload) {
    const ticker = payload.toUpperCase();
    context.commit("setTicker", payload);
    let data;

    let res = await axios.get(`http://localhost:3000/tickers?ticker=${ticker}`);
    if (res.status == 200 && res.data.length > 0) {
      let x = res.data[0];
      data = {
        id: ticker,
        name: x.name,
        current: x.currentPrice,
        priceHigh: x.recentHigh,
        priceLow: x.recentLow,
        articles: x.articles,
      };
    }
    // -------------------------------
    else {
      // poor error handling for testing. Please remove when smart
      data = {
        id: ticker,
        name: "**TEST**",
        current: 6969,
        priceHigh: 420.69,
        priceLow: 69.42,
        articles: "EXAMPLE ARTICLE",
      };
    }
    context.commit("addSearch", data);
    if (context.getters.currentSearch == null) {
      context.commit("currentSearch", data);
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
