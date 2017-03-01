import Vue from 'vue';
import Router from 'vue-router';

import Home from 'views/home';
import Hero from 'components/hero';
import Hero2 from 'components/hero-2';

Vue.use(Router);

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      component: Home,
      children: [
        { path: '/', component: Hero },
        { path: '/hero-2', component: Hero2 },
      ],
    },
    { path: '*', redirect: '/' },
  ],
});
