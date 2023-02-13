<template>
  <main class="w-ab-100 h-ab-100 p-f l-0 t-0 of-h">
    <Scroll>
      <article class="w-ab-100 fd-c page">
<!--        <LayoutHeader class="p-a l-0 t-0 z-10" />-->
        <NuxtPage />
<!--        <LayoutFooter />-->
      </article>
    </Scroll>
  </main>
</template>

<script setup>
// Store
import { indexStore } from '~/store';
// State
const storeIndex = indexStore();
</script>
