import type { ProductType } from '@helpers/types';
import axios from 'axios';

const BASE_URL = `${import.meta.env.VITE_BACK_URL}/products`;

export const ProductService = {
  getAllProductsQueryFn: async (): Promise<ProductType[]> => {
    try {
      const { data } = await axios.get<ProductType[]>(BASE_URL);
      return data;
    } catch (error) {
      throw new Error(`Failed to fetch products: ${error}`);
    }
  },
};
