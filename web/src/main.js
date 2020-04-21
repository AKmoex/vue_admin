import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import VueAwesomeSwiper from "vue-awesome-swiper";

// import style
import "swiper/css/swiper.css";

Vue.use(VueAwesomeSwiper /* { default options with global component } */);

import "./assets/scss/style.scss";
import "./assets/iconfont/iconfont.css";

import Card from "./components/Card.vue";
Vue.component("m-card", Card);

import ListCard from "./components/ListCard.vue";
Vue.component("m-list-card", ListCard);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
