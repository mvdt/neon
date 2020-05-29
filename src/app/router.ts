import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import { Menu } from './Menu';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ './views/home/Home.vue'),
  },
  ...Menu.menu.flatMap((item) =>
    item.children
      ? item.children.map(
          (child) =>
            ({
              path: `/${item.path}/${child.path}`,
              name: child.name || child.page,
              component: () => import(`./views/${item.path}/${child.path}/${child.page}.vue`),
            } as RouteConfig),
        )
      : [],
  ),
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;