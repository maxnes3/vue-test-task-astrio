import { ProductService } from '@/helpers/api';
import type { ProductType } from '@helpers/types';
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useProductStore = defineStore('product', () => {
  const products = ref<ProductType[]>([]);

  const handleGetProductById = async (id: string) => {
    const response = await ProductService.getProductByIdQueryFn(id);
    return response;
  };

  const handleGetAllProducts = async () => {
    const response = await ProductService.getAllProductsQueryFn();
    products.value = response;
  };

  const handleFilterProductsByBrand = async (brandId: number | 'all') => {
    const queryFn =
      brandId === 'all'
        ? ProductService.getAllProductsQueryFn
        : () => ProductService.getProductsByBrandQueryFn(brandId);

    const response = await queryFn();
    products.value = response;
  };

  return {
    products,
    handleGetProductById,
    handleGetAllProducts,
    handleFilterProductsByBrand,
  };
});
