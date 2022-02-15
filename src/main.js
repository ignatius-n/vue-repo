import Vue from "vue";
import App from "./App.vue";
import ProblemInfo from "./components/ProblemInfo.vue";

Vue.config.productionTip = false;

Vue.component(ProblemInfo.name, ProblemInfo);

new Vue({
  render: (h) => h(App)
}).$mount("#app");
