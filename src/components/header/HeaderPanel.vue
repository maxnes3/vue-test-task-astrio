<template>
  <header :class="$style.header">
    <div :class="$style.logo" @click="handleNavigateToCatalog">
      <Vue />
      <img :src="Astrio" alt="Logo" />
    </div>
    <button :class="$style.basket" @click="handleNavigateToBasket">
      <Basket />
      <span>{{ count }}</span>
    </button>
  </header>
</template>

<script setup lang="ts">
import Vue from '@assets/icons/vue.svg';
import Astrio from '@assets/images/logo.png';
import Basket from '@assets/icons/basket.svg';
import { useBasketStore } from '@store/useBasketStore';
import { computed, onMounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const basketStore = useBasketStore();
const count = computed(() => basketStore.basketItems.length);

const handleNavigateToCatalog = () => router.push({ name: 'catalog' });

const handleNavigateToBasket = () => router.push({ name: 'basket' });

onMounted(() => {
  basketStore.getAllBasketItems();
});
</script>

<style module lang="scss">
@import './styles.module.scss';
</style>
