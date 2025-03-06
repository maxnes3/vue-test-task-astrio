<template>
  <div :class="$style.product" @click="handleAddProduct">
    <img :src="product.image" :alt="product.title" />
    <h3>{{ product.title }}</h3>
    <p>Brand: {{ brandName }}</p>
    <p>${{ product.regular_price.value }}</p>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { useBrandStore } from '@/store';
import type { ProductType } from '@helpers/types';
import { useBasketStore } from '@/store/useBasketStore';

const { product } = defineProps<{ product: ProductType }>();
const brandStore = useBrandStore();
const basketStore = useBasketStore();
const brandName = computed(() => {
  const brand = brandStore.brands.find(
    (brand) => product.brand === Number(brand.id),
  );
  return brand ? brand.title : 'Unknown';
});

const handleAddProduct = async () => {
  await basketStore.addProductToBasket(product);
};
</script>

<style module lang="scss">
@import './styles.module.scss';
</style>
