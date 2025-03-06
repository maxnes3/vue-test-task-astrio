<template>
  <aside>
    <h2>Brands</h2>
    <ul>
      <li
        :class="{ [$style.active]: selectedBrand === 'all' }"
        @click="handleSetFilter('all')"
      >
        All Brands
      </li>
      <li
        v-for="brand in brandStore.brands"
        :key="brand.id"
        :class="{ [$style.active]: selectedBrand === Number(brand.id) }"
        @click="handleSetFilter(Number(brand.id))"
      >
        {{ brand.title }}
      </li>
    </ul>
  </aside>
</template>

<script lang="ts" setup>
import { useBrandStore, useProductStore } from '@/store';
import { onMounted, ref } from 'vue';

const selectedBrand = ref<number | 'all'>('all');

const brandStore = useBrandStore();
const productStore = useProductStore();

const handleSetFilter = (brandId: number | 'all') => {
  selectedBrand.value = brandId;
  productStore.filterProductsByBrand(brandId);
};

onMounted(() => {
  brandStore.getAllBrands();
});
</script>

<style module lang="scss">
@import './styles.module.scss';

.active {
  display: flex;
  font-weight: bold;
  color: white;
  background-color: #42b883aa;
  align-items: center;
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
