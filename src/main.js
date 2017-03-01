import Vue from 'vue';
import router from 'router';
import App from 'layouts/app';

const app = new Vue({
  router,
  ...App,
});
app.$mount('#app');
