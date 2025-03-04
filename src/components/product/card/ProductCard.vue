<template>
  <div :class="$style.product">
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

const { product } = defineProps<{ product: ProductType }>();
const brandStore = useBrandStore();

const brandName = computed(() => {
  const brand = brandStore.brands.find(
    (brand) => product.brand === Number(brand.id),
  );
  return brand ? brand.title : 'Unknown';
});
</script>

<style module lang="scss">
@import './styles.module.scss';
</style>
