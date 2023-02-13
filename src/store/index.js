// Import Pinia
import { defineStore } from 'pinia';

// Routers Store
export const indexStore = defineStore('index', {
  state: () => ({
    modal: { name: null },
    modalForm: true,
  }),
  getters: {
    // Is Mobile
    isMobile: () => {
      return window.innerWidth < 768 || false;
    },
    // Is Modal Name
  },
  actions: {
    setModalForm(value) {
      this.modalForm = value
    },
  }
});
