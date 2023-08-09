<template>
  <div>
    <h3>Summary Data for {{ search.id }}</h3><br />
    <img class="companyLogo" :src="search.image" />
    <v-table class="vtable" v-if="search">
      <tr>
        <th>Ticker</th>
        <td>{{ search.id }}</td>
      </tr>
      <tr>
        <th>Company Name</th>
        <td >{{ search.name }}</td>
      </tr>
      <tr>
        <th>Market Cap</th>
        <td >{{ search.mktCap }}</td>
      </tr>
      <tr>
        <th>CEO</th>
        <td >{{ search.ceo }}</td>
      </tr>
      <tr>
        <th>Address</th>
        <td >{{ search.address }}</td>
      </tr>
      <tr>
        <th>City</th>
        <td >{{ search.name }}</td>
      </tr>
      <tr>
        <th>State</th>
        <td >{{ search.state }}</td>
      </tr>
      <tr>
        <th>Zip Code</th>
        <td >{{ search.zip }}</td>
      </tr>
      <tr>
        <th>Country</th>
        <td >{{ search.country }}</td>
      </tr>
      <tr>
        <th>Phone</th>
        <td >{{ search.phone }}</td>
      </tr>
      <tr>
        <th>CIK</th>
        <td >{{ search.cik }}</td>
      </tr>
      <tr>
        <th>CUSIP</th>
        <td >{{ search.cusip }}</td>
      </tr>
      <tr>
        <th>ISIN</th>
        <td >{{ search.isin }}</td>
      </tr>
      <tr>
        <th>Full Time Employees</th>
        <td >{{ String(search.employees).replace(/\B(?=(\d{3})+(?!\d))/g, ",") }}</td>
      </tr>
      <tr>
        <th>Exchange</th>
        <td >{{ search.exchange }} ({{ search.exchangeAbbv }})</td>
      </tr>
      <tr>
        <th>Industry</th>
        <td >{{ search.industry }}</td>
      </tr>
      <tr>
        <th>Sector</th>
        <td >{{ search.sector }}</td>
      </tr>
      <tr>
        <th>IPO Date</th>
        <td >{{ search.ipoDate }}</td>
      </tr>
      <tr>
        <th>Website</th>
        <td>{{ search.website }}</td>
      </tr>
      <tr>
        <th>Company Description</th>
        <td >{{ search.description }}</td>
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
td {
  padding:7px;
  min-width: 200px;
}
th {
  padding:7px;
  min-width: 175px;
  max-width: 250px;
}
h3 {
  text-align: center;
}
.companyLogo {
  max-width: 5%;
  max-height: 3%;
  display: block;
  margin-left: auto;
  margin-right: auto;
}
</style>
