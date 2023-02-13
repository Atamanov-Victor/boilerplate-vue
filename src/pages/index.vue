<template>
  <div class="w-ab-100 fd-c ai-c">
    There should be sections of main page
  </div>
</template>

<script setup>
// Init
onMounted(() => {
  useHead({
    title: 'M.A.D. Lab',
  });
  document.getElementById('scroll').scrollTo({
    top: 0,
    behavior: 'smooth'
  })
})
</script>

<style lang="scss" scoped>
.partnerHeader {
  margin-top: -13vw;
}
@media (max-width: 768px) {
  .partnerHeader {
    margin-top: -5vw;
  }
}
</style>
