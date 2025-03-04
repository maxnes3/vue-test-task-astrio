import { ProductService } from "@/helpers/api";
import type { ProductType } from "@helpers/types";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useProductStore = defineStore("product", () => {
  const products = ref<ProductType[]>([]);

  const handleGetAllProducts = async () => {
    products.value = await ProductService.getAllProductsQueryFn();
  };

  const handleGetProductsByBrandId = async (brandId: number | "all") => {
    const response = await ProductService.getAllProductsQueryFn();
    products.value =
      brandId === "all"
        ? response
        : response.filter((p) => p.brand === brandId);
  };

  return { products, handleGetAllProducts, handleGetProductsByBrandId };
});
