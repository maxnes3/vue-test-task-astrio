<template>
  <header :class="$style.header">
    <div :class="$style.logo">
      <Vue />
      <img :src="Astrio" alt="Logo" />
    </div>
  </header>
</template>

<script setup lang="ts">
import Vue from '@assets/icons/vue.svg';
import Astrio from '@assets/images/logo.png';
</script>

<style module lang="scss">
@import './styles.module.scss';
</style>
