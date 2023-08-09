<template>
  <div>
    <h3>Summary Data for {{ search.id }}</h3><br />
    <v-table class="vtable" v-if="search">
      <tr>
        <td>Ticker</td>
        <td>{{ search.id }}</td>
      </tr>
      <tr>
        <td>Company Name</td>
        <td >{{ search.name }}</td>
      </tr>
      <tr>
        <td>Market Cap</td>
        <td >{{ search.mktCap }}</td>
      </tr>
      <tr>
        <td>CEO</td>
        <td >{{ search.ceo }}</td>
      </tr>
      <tr>
        <td>Address</td>
        <td >{{ search.address }}</td>
      </tr>
      <tr>
        <td>City</td>
        <td >{{ search.name }}</td>
      </tr>
      <tr>
        <td>State</td>
        <td >{{ search.state }}</td>
      </tr>
      <tr>
        <td>Zip Code</td>
        <td >{{ search.zip }}</td>
      </tr>
      <tr>
        <td>Country</td>
        <td >{{ search.country }}</td>
      </tr>
      <tr>
        <td>Phone</td>
        <td >{{ search.phone }}</td>
      </tr>
      <tr>
        <td>Company Description</td>
        <td >{{ search.description }}</td>
      </tr>
      <tr>
        <td>CIK</td>
        <td >{{ search.cik }}</td>
      </tr>
      <tr>
        <td>CUSIP</td>
        <td >{{ search.cusip }}</td>
      </tr>
      <tr>
        <td>ISIN</td>
        <td >{{ search.isin }}</td>
      </tr>
      <tr>
        <td>Full Time Employees</td>
        <td >{{ search.employees }}</td>
      </tr>
      <tr>
        <td>Exchange</td>
        <td >{{ search.exchange }} ({{ search.exchangeAbbv }})</td>
      </tr>
      <tr>
        <td>Industry</td>
        <td >{{ search.industry }}</td>
      </tr>
      <tr>
        <td>Sector</td>
        <td >{{ search.sector }}</td>
      </tr>
      <tr>
        <td>IPO Date</td>
        <td >{{ search.ipoDate }}</td>
      </tr>
      <tr>
        <td>Website</td>
        <td>{{ search.website }}</td>
      </tr>
    </v-table>
  </div>
</template>

<script>
export default {
  computed: {
    search() {
      return this.$store.getters["searches/currentSearch"];
    },
  },
};
</script>

<style>
.vtable {
  background-color: whitesmoke;
  width:50%;
  margin:auto;
}
tr:nth-of-type(even) {
    /* 'teal lighten-5' basides on material design color */
    background-color: #e6f0ef;
}
h3 {
  text-align: center;
}
</style>
