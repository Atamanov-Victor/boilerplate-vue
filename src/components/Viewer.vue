<template>
  <div class="w-ab-100 viewer" v-html="getText" />
</template>

<script setup>
// Props
const props = defineProps({
  text: String
});
// Computed
const getText = computed(() => {
  return props.text ? props.text
      .replace(/(?:>>)(.+?)(\n|$)/g, '<blockquote>$1</blockquote>')
      .replace(/(?:```\n)([^```<\n]+)(?:\n```)/g, '<tt>$1</tt>')
      .replace(/\!\[(.+?)\]\((.+?)\)/g, '<img src="$2" alt="$1" />')
      .replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2" target="_blank">$1</a>')
      .replace(/(?:\*{1,3})([^*<\n]+)(?:\*{1,3})/g, '<strong>$1</strong>')
      .replace(/(?:\s_)([^_<\n]+)(?:_)/g, ' <i>$1</i>')
      .replace(/(?:~{1,3}\s)([^~<\n]+)(?:~{1,3})/g, '<s>$1</s>')
      .replace(/(?:#{6,6}\s)(.+?)(\n|$)/g, '<h6>$1</h6>')
      .replace(/(?:#{5,5}\s)(.+?)(\n|$)/g, '<h5>$1</h5>')
      .replace(/(?:#{4,4}\s)(.+?)(\n|$)/g, '<h4>$1</h4>')
      .replace(/(?:#{3,3}\s)(.+?)(\n|$)/g, '<h3>$1</h3>')
      .replace(/(?:#{2,2}\s)(.+?)(\n|$)/g, '<h2>$1</h2>')
      .replace(/(?:#{1,1}\s)(.+?)(\n|$)/g, '<h1>$1</h1>')
      .replace(/(?:-{1,1}\s)([^<\n]+)(\n|$)/g, '<li>$1</li>')
      .replace(/\n/g, '<br/>') : null;
})
</script>

<style lang="scss">
.viewer {
  font-weight: 300;
  strong {
    font-weight: 900;
  }
  li.decimal {
    list-style-type: decimal;
  }
  tt {
    background: rgba(0, 0, 0, 0.8);
    padding: 0.3vw 0.5vw;
    border: 0.04vw solid rgba(255, 255, 255, 0.2);
    font-size: 80%;
    color: var(--orange-100);
    border-radius: 0.3vw;
  }
  img {
    width: 100%;
    border-radius: 0.5vw;
  }
  blockquote {
    border-left: 0.2vw solid rgba(255, 255, 255, 0.1);
    padding: 0.5vw 1vw;
    background: rgba(0, 0, 0, 0.4);
    border-radius: 0.3vw;
  }
}
</style>
