import { BrandService } from '@/helpers/api';
import type { BrandType } from '@/helpers/types';
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useBrandStore = defineStore('brand', () => {
  const brands = ref<BrandType[]>([]);

  const handleGetAllBrands = async () => {
    brands.value = await BrandService.getAllBrandsQueryFn();
  };

  return { brands, handleGetAllBrands };
});
