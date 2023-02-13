<template>
  <div class="w-ab-100" :class="{'h-ab-100 of-h p-a l-0 t-0': isScroll}">
    <div class="w-ab-100 scroll_body" @scroll="scroll" id="scroll" ref="body" :class="{'h-ab-100 p-a l-0 t-0': isScroll}">
      <div class="w-ab-100" ref="slot">
        <slot />
      </div>
    </div>
    <div class="h-ab-100 p-a t-0 r-0 fd-r ai-t rail_layout" v-show="isRail && isScroll">
      <div class="w-ab-100 h-ab-100" @mousedown="start" ref="rail">
        <div class="w-ab-100 cr-p bar" :style="{height: `${height}%`, top: `${top}%`}"/>
      </div>
    </div>
  </div>
</template>

<script setup>
// Props
const props = defineProps({
  isScroll: {type: Boolean, default: true}
})
// State
const body = ref(null);
const rail = ref(null);
const slot = ref(null);
const isRail = ref(false);
const height = ref(0);
const top = ref(0);
const move = ref(null);
const temp = ref(null);
// Methods
const resize = () => {
  if (body.value) {
    if (window.innerWidth > 768) {
      body.value.style.width = `${(100 + ((body.value.offsetWidth - body.value.clientWidth + 1) * 100) / body.value.offsetWidth)}%`;
      height.value = (body.value.clientHeight * 100) / body.value.scrollHeight;
      isRail.value = body.value.scrollHeight > body.value.clientHeight;
      scroll()
    } else {
      body.value.style.width = '100%';
      isRail.value = false;
    }
  }
};
// Scroll Event
const scroll = (e) => {
  if (body.value) {
    top.value = ((e ? e.target.scrollTop : body.value.scrollTop) * 100) / body.value.scrollHeight;
  }
};
// Drag Start
const start = (e) => {
  move.value = e.pageY;
  temp.value = top.value;
  document.addEventListener('mousemove', drag);
  document.addEventListener('mouseup', stop);
};
// Drag Move
const drag = (e) => {
  if (move.value) {
    body.value.scrollTo({
      top: (body.value.scrollHeight / 100) * (temp.value + ((e.pageY - move.value) * 100) / body.value.clientHeight),
    });
  }
};
// Drag Stop
const stop = (e) => {
  move.value = null;
  temp.value = null;
  document.removeEventListener('mousemove', drag);
  document.removeEventListener('mouseup', stop)
};
// Init
onMounted(() => {
  // Watch Resize
  new ResizeObserver(() => {
    resize();
  }).observe(slot.value);
})
</script>

<style lang="scss" scoped>
.scroll_body {
  overflow-y: auto;
  overflow-x: hidden;
}
.rail_layout {
  width: 0.2vw;
  background-color: rgba(222, 239, 255, 0.1);
  transition: opacity 300ms;
  user-select: none;
  z-index: 30;
  .bar {
    background-color: rgba(222, 239, 255, 1);
  }
}
</style>
