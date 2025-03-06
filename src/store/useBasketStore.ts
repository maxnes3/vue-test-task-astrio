import { BasketService } from '@helpers/api';
import type { BasketItemType, ProductType } from '@/helpers/types';
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useBasketStore = defineStore('basket', () => {
  const basketItems = ref<BasketItemType[]>([]);

  const handleGetAllBasketItems = async () => {
    const response = await BasketService.getAllBasketItemsQueryFn();
    basketItems.value = response;
  };

  const handleAddProductToBasket = async (product: ProductType) => {
    const response = await BasketService.postItemToBasketQueryFn(product);
    if (!response) return;
    handleGetAllBasketItems();
  };

  const handleUpdateBasketItem = async (basketItem: BasketItemType) => {
    const response = await BasketService.putToBasketItemQueryFn(basketItem);
    if (!response) return;
    handleGetAllBasketItems();
  };

  const handleRemoveItemFromBasket = async (id: string) => {
    await BasketService.deleteItemFromBasketQueryFn(id);
    handleGetAllBasketItems();
  };

  return {
    basketItems,
    handleGetAllBasketItems,
    handleAddProductToBasket,
    handleUpdateBasketItem,
    handleRemoveItemFromBasket,
  };
});
