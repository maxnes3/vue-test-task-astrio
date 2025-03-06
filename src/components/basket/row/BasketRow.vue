<template>
  <tr>
    <th :class="$style.item">
      <div :class="$style.imgContainer">
        <img :src="product?.image" />
      </div>
      <span> {{ brandName }} / {{ product?.title }} </span>
    </th>
    <th>${{ product?.regular_price.value }}</th>
    <th>
      <div :class="$style.count">
        <button @click="handleCountDownBasketItem">-</button>
        <span>{{ item.count }}</span>
        <button @click="handleCountUpBasketItem">+</button>
      </div>
    </th>
    <th>${{ Math.round(item.total_value) }}</th>
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

const handleCountDownBasketItem = async () => {
  if (item.count === 1) return;
  const newCount = item.count - 1;
  basketStore.updateBasketItem({
    ...item,
    count: newCount,
    total_value: newCount * Number(product.value?.regular_price.value),
  });
};

const handleCountUpBasketItem = async () => {
  const newCount = item.count + 1;
  basketStore.updateBasketItem({
    ...item,
    count: newCount,
    total_value: newCount * Number(product.value?.regular_price.value),
  });
};

const handleRemoveItem = async () => {
  await basketStore.deleteItemFromBasket(item.id);
};

onMounted(async () => {
  brandStore.getAllBrands();
  product.value = await productStore.getProductById(item.product);
});
</script>

<style module lang="scss">
@import './styles.module.scss';
</style>
