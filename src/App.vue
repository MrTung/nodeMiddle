<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
  </div>
</template>

<script>
import axios from "axios";

export default {
  mounted: function() {
    axios.get("http://localhost:3000").then(function(val) {
      console.log(val);
    });

    // axios.get("http://localhost:3000/del_user").then(function(val) {
    //   console.log(val);
    // });

    // axios.get("http://localhost:3000/login").then(function(val) {
    //   console.log(val);
    // });
  }
};
</script>


<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
