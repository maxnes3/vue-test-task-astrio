<template>
  <div :class="$style.catalog">
    <aside>
      <h2>Brands</h2>
      <ul>
        <li @click="handleGetProductsByBrandId('all')">All Brands</li>
        <li
          v-for="brand in brands"
          :key="brand.id"
          @click="handleGetProductsByBrandId(brand.id)"
        >
          {{ brand.title }}
        </li>
      </ul>
    </aside>
    <main>
      <h2>Catalog</h2>
      <div :class="$style.grid">
        <div
          v-for="product in products"
          :key="product.id"
          :class="$style.product"
        >
          <img :src="product.image" :alt="product.title" />
          <h3>{{ product.title }}</h3>
          <p>Brand: {{ getBrandName(product.brand) }}</p>
          <p>${{ product.regular_price.value }}</p>
        </div>
      </div>
    </main>
  </div>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue';
import { useBrandStore, useProductStore } from '@/store';

const { brands, handleGetAllBrands } = useBrandStore();
const { products, handleGetAllProducts, handleGetProductsByBrandId } =
  useProductStore();

onMounted(() => {
  handleGetAllBrands();
  handleGetAllProducts();
});

const getBrandName = (brandId: number) =>
  brands.find((brand) => brand.id === brandId)?.title;
</script>

<style module lang="scss">
@import './styles.module.scss';
</style>
