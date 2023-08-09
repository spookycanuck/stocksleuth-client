import axios from "axios";

export default {
  async newSearch(context, payload) {
    const ticker = payload.toUpperCase();
    context.commit("setTicker", payload);
    let recentPriceData;
    let graphData;
    let res;
    let res2;

    try {
      res = await axios
        .get(`http://localhost:5000/api/v1/price?ticker=${ticker}`);
      res2 = await axios
        .get(`http://localhost:5000/api/v1/overview?ticker=${ticker}`);
      if (res.status == 200 && res.data.length > 0) {
        let x = res.data[0];
        let y = res2.data;
        graphData = res.data;
        // TODO: Map entire ticker history -- X will only return the latest date
        //    graphData is the entire API data call, and sends it to another action
        recentPriceData = {
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
          address: y.address,
          beta: y.beta,
          ceo: y.ceo,
          changes: y.changes,
          cik: y.cik,
          city: y.city,
          name: y.companyName,
          country: y.country,
          currency: y.currency,
          cusip: y.cusip,
          dcf: y.dcf,
          dcfDiff: y.dcfDiff,
          defaultImage: y.defaultImage,
          description: y.description,
          exchange: y.exchange,
          exchangeAbbv: y.exchangeShortName,
          employees: y.fullTimeEmployees,
          image: y.image,
          industry: y.industry,
          ipoDate: y.ipoDate,
          isTrading: y.isActivelyTrading,
          isAdr: y.isAdr,
          isEtf: y.isEtf,
          isFund: y.isFund,
          isin: y.isin,
          lastDiv: y.lastDiv,
          mktCap: y.mktCap,
          phone: y.phone,
          priceRange: y.range,
          sector: y.sector,
          state: y.state,
          symbol: y.symbol,
          volAvg: y.volAvg,
          website: y.website,
          zip: y.zip,
        };
      }
      // console.log(Object.keys(recentPriceData).length)
      context.commit("addSearch", recentPriceData);
      context.commit("failed", null);
      context.dispatch("buildGraph", graphData);
      if (context.getters.currentSearch == null) {
        context.commit("currentSearch", recentPriceData);
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
    // console.log("buildGraph: ", payload);
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
