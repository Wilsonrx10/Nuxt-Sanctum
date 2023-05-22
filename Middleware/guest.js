import nuxtStorage from 'nuxt-storage';
export default defineNuxtRouteMiddleware((to, from) => {
    const token = nuxtStorage.localStorage.getData('token');
    if (token && token != "") {
      return navigateTo('/')
    }
  })