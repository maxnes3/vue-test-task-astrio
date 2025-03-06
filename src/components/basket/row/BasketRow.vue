<template>
  <tr>
    <th :class="$style.item">
      <div :class="$style.imgContainer">
        <img :src="product?.image" />
      </div>
      <span> {{ brandName }} / {{ product?.title }} </span>
    </th>
    <th>${{ product?.regular_price.value }}</th>
    <th :class="$style.count">
      <button @click="handleRemoveFromCount">-</button>
      <span>{{ item.count }}</span>
      <button @click="handleAddToCount">+</button>
    </th>
    <th>${{ item.total_value }}</th>
    <th :class="$style.trash" @click="handleRemoveItem"><Trash /></th>
  </tr>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import { useBrandStore, useProductStore, useBasketStore } from '@/store';
import type { BasketItemType, ProductType } from '@helpers/types';
import Trash from '@assets/icons/trash.svg';

const { item } = defineProps<{ item: BasketItemType }>();
const productStore = useProductStore();
const basketStore = useBasketStore();
const brandStore = useBrandStore();
const product = ref<ProductType | null>(null);
const brandName = computed(() => {
  const brand = brandStore.brands.find(
    (brand) => product.value?.brand === Number(brand.id),
  );
  return brand ? brand.title : 'Unknown';
});

const handleRemoveFromCount = async () => {
  if (item.count === 1) return;
  const newCount = item.count - 1;
  basketStore.handleUpdateBasketItem({
    ...item,
    count: newCount,
    total_value: newCount * Number(product.value?.regular_price.value),
  });
};

const handleAddToCount = async () => {
  const newCount = item.count + 1;
  basketStore.handleUpdateBasketItem({
    ...item,
    count: newCount,
    total_value: newCount * Number(product.value?.regular_price.value),
  });
};

const handleRemoveItem = async () => {
  await basketStore.handleRemoveItemFromBasket(item.id);
};

onMounted(async () => {
  brandStore.handleGetAllBrands();
  product.value = await productStore.handleGetProductById(item.product);
});
</script>

<style module lang="scss">
@import './styles.module.scss';
</style>
