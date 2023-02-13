<template>
  <header class="w-ab-100 px-25-S px-30 fd-r ai-c header">
    <section class="w-ab-100 fd-r ai-c brb-3-S brsb-s-S br-white-200 py-5-S py-20">
      <NuxtLink to="/" class="link z-12 w-a-S w-ab-50">
        <UiPicture src="footer" class="w-45-S w-ab-100" />
      </NuxtLink>
    </section>
  </header>
</template>

<script setup>
// Store
import { indexStore } from "@/store/index";
// State
const storeIndex = indexStore();
</script>

<style lang="scss" scoped>
.link {
  transition: 300ms;
  &:hover {
    transform: scale(0.98);
    opacity: 0.8;
  }
}
@media (max-width: 768px) {
  .header {
    background: var(--black-100);
  }
}
</style>
