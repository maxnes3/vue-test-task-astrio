<template>
  <aside>
    <h2>Brands</h2>
    <ul>
      <li @click="handleSetFilter('all')">All Brands</li>
      <li
        v-for="brand in brandStore.brands"
        :key="brand.id"
        @click="handleSetFilter(Number(brand.id))"
      >
        {{ brand.title }}
      </li>
    </ul>
  </aside>
</template>

<script lang="ts" setup>
import { useBrandStore, useProductStore } from '@/store';
import { onMounted } from 'vue';

const brandStore = useBrandStore();
const productStore = useProductStore();

const handleSetFilter = (brandId: number | 'all') => {
  productStore.handleFilterProductsByBrand(brandId);
};

onMounted(() => {
  brandStore.handleGetAllBrands();
});
</script>

<style module lang="scss">
@import './styles.module.scss';
</style>
