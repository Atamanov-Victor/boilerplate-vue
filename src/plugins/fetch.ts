// Fetch Plugin
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.provide('fetch', (url: any, options: any) => {
    return new Promise (async (resolve, reject) => {
      try {
        const response = await fetch(nuxtApp.$config.public.backend + url, options);
        if (response.status === 200) {
          resolve(await response.json());
        } else {
          throw 'error';
        }
      } catch (e) {
        reject(e);
      }
    })
  });
});
