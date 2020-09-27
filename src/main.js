import "@babel/polyfill";
import "mutationobserver-shim";
import Vue from "vue";
import "./plugins/bootstrap-vue";
import VueChatScroll from "vue-chat-scroll";
import App from "./App.vue";
import router from "./router";

import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

Vue.config.productionTip = false;
Vue.use(VueChatScroll);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
