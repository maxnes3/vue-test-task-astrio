import type { ProductType } from '@helpers/types';
import axios from 'axios';

const BASE_URL = `${import.meta.env.VITE_BACK_URL}/products`;

export const ProductService = {
  getProductByIdQueryFn: async (id: string): Promise<ProductType> => {
    try {
      const { data } = await axios.get<ProductType>(`${BASE_URL}/${id}`);
      return data;
    } catch (error) {
      throw new Error(`Failed to fetch product by id: ${error}`);
    }
  },
  getAllProductsQueryFn: async (): Promise<ProductType[]> => {
    try {
      const { data } = await axios.get<ProductType[]>(BASE_URL);
      return data;
    } catch (error) {
      throw new Error(`Failed to fetch products: ${error}`);
    }
  },
  getProductsByBrandQueryFn: async (
    brandId: number,
  ): Promise<ProductType[]> => {
    try {
      const { data } = await axios.get<ProductType[]>(
        `${BASE_URL}?brand=${brandId}`,
      );
      return data;
    } catch (error) {
      throw new Error(`Failed to fetch products by brand: ${error}`);
    }
  },
};
