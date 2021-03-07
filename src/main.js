import Vue from "vue";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

import App from "./App.vue";
import router from "./router";
import store from "./store/index.js";

var filter = function(text, length, clamp) {
  clamp = clamp || "...";
  var node = document.createElement("div");
  node.innerHTML = text;
  var content = node.textContent;
  return content.length > length ? content.slice(0, length) + clamp : content;
};

Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.filter("truncate", filter);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
