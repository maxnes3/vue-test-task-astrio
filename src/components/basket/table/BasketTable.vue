<template>
  <div :class="$style.basket">
    <h2>Shopping Cart</h2>
    <table>
      <thead>
        <tr>
          <th v-for="column in columns" :key="column.name">
            {{ column.name }}
          </th>
        </tr>
      </thead>
      <tbody>
        <BasketRow
          v-for="item in store.basketItems"
          :key="item.product"
          :item="item"
        />
      </tbody>
    </table>
    <h2 :class="$style.subtotal">Subtotal: ${{ Math.round(subtotal) }}</h2>
    <button :class="$style.submitButton">Checkout</button>
  </div>
</template>

<script setup lang="ts">
import { BasketRow } from '../row';
import { useBasketStore } from '@store/useBasketStore';
import { computed, onMounted } from 'vue';

const store = useBasketStore();
const subtotal = computed(() =>
  store.basketItems.reduce((acc, item) => acc + item.total_value, 0),
);
const columns = [
  { name: 'Item' },
  { name: 'Price' },
  { name: 'Qty' },
  { name: 'Total' },
  { name: '' },
];

onMounted(() => {
  store.getAllBasketItems();
});
</script>

<style module lang="scss">
@import './styles.module.scss';
</style>
