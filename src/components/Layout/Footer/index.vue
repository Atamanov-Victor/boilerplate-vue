<template>
  <footer class="w-ab-100 fd-r jc-c brt-3 brst-s br-white-200">
    <aside class="w-ab-100 fd-c px-50 pt-40-S pt-100 pb-30-S pb-100">
      <section class="w-ab-100 fd-r-S fd-c ai-c">
        <NuxtLink to="/" class="w-45-S w-ab-50 fsh-0">
          <UiPicture src="footer" class="w-ab-100" />
        </NuxtLink>
        <nav class="w-ab-100 fd-r-S fd-c jc-r ai-c f-white-100 fs-8-S fs-40 tt-u pt-0-S pt-20">
          <NuxtLink :target="link.target ? '_blank' : '_self'" :to="link.to" class="ml-15-S mt-0-S mt-40 link cr-p f-white-100" v-for="link in links" @click="setScroll(link)" :class="{'f-orange-100': link.orange}">
            {{ link.name }}
          </NuxtLink>
        </nav>
      </section>
      <section class="w-ab-100 fd-r-S fd-cr mt-20-S">
        <p class="fs-8-S fs-40 f-white-100 fsh-0 o-5 ta-l-S ta-c mt-0-S mt-70">
          ©AmberCore {{ new Date().getFullYear() }}
        </p>
        <aside class="w-ab-100 fd-r jc-r-S jc-c ai-c fw-w">
          <a class="ml-13-S mr-0-S mx-40 mt-0-S mt-60 link" :href="social.to" target="_blank" v-for="social in socials">
            <img :src="`/social/${social.img}.png`" class="w-7-S w-45" />
          </a>
        </aside>
      </section>
    </aside>
  </footer>
</template>

<script setup>
// Store
import { indexStore } from "~/store";
// State
const storeIndex = indexStore();
// Computed
const links = computed(() => [
  { name: 'About', to: '/about' },
  { name: 'News', to: '/news' },
  { name: 'Contact us', element: 'scroll_7', orange: true }
]);
const socials = computed(() => [
  { name: 'Linkedin', img: 'ln', to: 'https://www.linkedin.com/company/ambercore/' }
]);
// Methods
const setScroll = (link) => {
  if (link.element) {
    storeIndex.set('contactForm')
    // const router = useRouter();
    // router.push('/');
    // setTimeout(() => {
    //   document.getElementById('scroll').scrollTo({
    //     top: document.getElementById(link.element).offsetTop + (window.innerHeight / 50),
    //     behavior: 'smooth'
    //   })
    // }, 200);
  }
};
</script>

<style lang="scss" scoped>
.link {
  transition: 300ms;
  &:hover {
    transform: scale(0.98);
    opacity: 0.8;
  }
}
</style>
