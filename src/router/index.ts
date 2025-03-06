import { BasketView } from '@views/basket';
import { CatalogView } from '@views/catalog';
import { createRouter, createWebHistory } from 'vue-router';

export const router = createRouter({
  routes: [
    {
      path: '/',
      name: 'catalog',
      component: CatalogView,
    },
    {
      path: '/basket',
      name: 'basket',
      component: BasketView,
    },
  ],
  history: createWebHistory(),
});
