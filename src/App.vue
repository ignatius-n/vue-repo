<template>
  <div id="app">
    <problem-one />
    <problem-two />
    <problem-three />
  </div>
</template>

<script>
import ProblemOne from "./components/problems/1";
import ProblemTwo from "./components/problems/2";
import ProblemThree from "./components/problems/3";
export default {
  name: "App",
  components: { ProblemOne, ProblemTwo, ProblemThree },
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
