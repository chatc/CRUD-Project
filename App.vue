<template>
  <NavbarComp />
  <router-view />
</template>

<script>
import NavbarComp from "./components/NavbarComp.vue";


export default {
  name: "App",

  components: {
    NavbarComp,
    
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
</style>
