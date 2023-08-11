<template>
  <h3>Graph Data for {{ search.symbol }}</h3>
  <div class="doody" ref="chart"></div>
</template>

<script>
import Plotly from "plotly.js-dist-min";

export default {
  data() {
    return {
      config: { responsive: true },
    };
  },
  props: {
    data: Object,
    layout: Object,
  },
  methods: {
    plot() {
      var chart = this.$refs.chart;
      Plotly.newPlot(chart, this.data, this.chartLayout, this.config);
    },
  },
  computed: {
    chartLayout() {
      return {
        ...this.layout,
      };
    },
    search() {
      return this.$store.getters["searches/currentSearch"];
    },
  },
  watch: {
    data: {
      handler() {
        this.plot();
      },
      deep: true,
    },
  },
  mounted() {
    if (this.data) {
      this.plot();
    }
  },
};
</script>

<style scoped>
.doody {
  width: 70%;
  margin: auto;
  margin-top: 50px;
  background-color: whitesmoke;
}
</style>
