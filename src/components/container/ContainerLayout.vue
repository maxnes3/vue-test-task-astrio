<template>
  <div :class="$style.container">
    <HeaderPanel />
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
import { HeaderPanel } from '@components/header';
</script>

<style module lang="scss">
@import './styles.module.scss';
</style>
