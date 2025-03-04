<template>
  <ContainerLayout>
    <div :class="$style.catalog">
      <BrandFilter />
      <ProductGrid />
    </div>
  </ContainerLayout>
</template>

<script lang="ts" setup>
import { ContainerLayout } from '@components/container';
import { BrandFilter } from '@components/brand';
import { ProductGrid } from '@components/product';
</script>

<style module lang="scss">
@import './styles.module.scss';
</style>
