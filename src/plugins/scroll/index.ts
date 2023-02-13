// Scroll Plugin

import { App, Plugin } from 'vue';
import Component from './Component.vue';

const scrollPlugin: Plugin = {

  install: (app: App) => {
    app.component('Scroll', Component);
  }

};

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.vueApp.use(scrollPlugin);
});
