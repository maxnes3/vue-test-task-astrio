import { ProductService } from '@/helpers/api';
import type { ProductType } from '@helpers/types';
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useProductStore = defineStore('product', () => {
  const products = ref<ProductType[]>([]);

  const handleGetAllProducts = async () => {
    const response = await ProductService.getAllProductsQueryFn();
    products.value = response;
  };

  const handleFilterProductsByBrand = async (brandId: number | 'all') => {
    const response = await ProductService.getAllProductsQueryFn();
    products.value =
      brandId === 'all'
        ? response
        : response.filter((product) => product.brand === brandId);
  };

  return { products, handleGetAllProducts, handleFilterProductsByBrand };
});
