<template>
  <!-- <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to our Vue.js App" />
  </div> -->
  <v-app>
    <router-view></router-view>
  </v-app>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  mounted() {
    // HelloWorld
  }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: hsl(210, 29%, 24%);
  margin-top: 0px;
  max-width: 100vw;
  overflow-y: hidden;
}
</style>
