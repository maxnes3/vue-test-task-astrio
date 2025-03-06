<template>
  <main>
    <h2>Catalog</h2>
    <div :class="$style.grid">
      <ProductCard
        v-for="product in store.products"
        :key="product.id"
        :product="product"
      />
    </div>
  </main>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue';
import { ProductCard } from '../card';
import { useProductStore } from '@/store';

const store = useProductStore();

onMounted(() => {
  store.handleGetAllProducts();
});
</script>

<style module lang="scss">
@import './styles.module.scss';
</style>
