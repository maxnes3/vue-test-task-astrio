import type { BasketItemType, ProductType } from '@helpers/types';
import axios from 'axios';

const BASE_URL = `${import.meta.env.VITE_BACK_URL}/basket`;

export const BasketService = {
  getAllBasketItemsQueryFn: async () => {
    try {
      const { data } = await axios.get<BasketItemType[]>(BASE_URL);
      return data;
    } catch (error) {
      throw new Error(`Failed to fetch basket items: ${error}`);
    }
  },
  postItemToBasketQueryFn: async (product: ProductType) => {
    try {
      const { data } = await axios.post<BasketItemType>(BASE_URL, {
        product: product.id,
        count: 1,
        total_value: product.regular_price.value,
      });
      return data;
    } catch (error) {
      throw new Error(`Failed to add item to basket: ${error}`);
    }
  },
  putToBasketItemQueryFn: async (basketItem: BasketItemType) => {
    try {
      const { data } = await axios.put<BasketItemType>(
        `${BASE_URL}/${basketItem.id}`,
        basketItem,
      );
      return data;
    } catch (error) {
      throw new Error(`Failed to update basket item: ${error}`);
    }
  },
  deleteItemFromBasketQueryFn: async (id: string) => {
    try {
      await axios.delete(`${BASE_URL}/${id}`);
    } catch (error) {
      throw new Error(`Failed to delete item from basket: ${error}`);
    }
  },
};
