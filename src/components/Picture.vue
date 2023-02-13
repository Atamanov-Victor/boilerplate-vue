<template>
  <picture class="fd-r of-h">
    <source :srcset="getSrc(`_mob.webp`)" type="image/webp" media="(max-width: 767px)" v-if="props.webp && props.mob" />
    <source :srcset="getSrc(`.webp`)" type="image/webp" v-if="props.webp" />
    <source :srcset="getSrc(`_mob.png`)" type="image/png" media="(max-width: 767px)" v-if="props.mob" />
    <img :src="getSrc('.png')" :class="{'w-ab-100': width, 'h-ab-100': height}" />
  </picture>
</template>

<script setup lang="ts">
// Props
const props = defineProps({
  url: String,
  src: String,
  mask: String,
  mob: {type: Boolean, default: true},
  webp: {type: Boolean, default: true},
  width: {type: Boolean, default: true},
  height: Boolean
});
// Function
const getSrc = (format) => {
  if (props.url) {
    return props.url;
  };
  return `/${props.src + format}`;
};
</script>
