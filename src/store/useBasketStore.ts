import { BasketService } from '@helpers/api';
import type { BasketItemType, ProductType } from '@/helpers/types';
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useBasketStore = defineStore('basket', () => {
  const basketItems = ref<BasketItemType[]>([]);

  const getAllBasketItems = async () => {
    const response = await BasketService.getAllBasketItemsQueryFn();
    basketItems.value = response;
  };

  const addProductToBasket = async (product: ProductType) => {
    const response = await BasketService.postItemToBasketQueryFn(product);
    if (!response) return;
    getAllBasketItems();
  };

  const updateBasketItem = async (basketItem: BasketItemType) => {
    const response = await BasketService.putToBasketItemQueryFn(basketItem);
    if (!response) return;
    getAllBasketItems();
  };

  const deleteItemFromBasket = async (id: string) => {
    await BasketService.deleteItemFromBasketQueryFn(id);
    getAllBasketItems();
  };

  return {
    basketItems,
    getAllBasketItems,
    addProductToBasket,
    updateBasketItem,
    deleteItemFromBasket,
  };
});
