<template>
  <div>
    <form @submit.prevent.stop="FormSubmit">
      <input type="text" v-model="form.email" placeholder="digita seu email" />
      <input
        type="text"
        v-model="form.password"
        placeholder="digita sua senha"
      />
      <button type="submit">login</button>
    </form>
  </div>
</template>

<script setup>
import nuxtStorage from 'nuxt-storage';
useHead({
  title: "Login Sanctum",
});

definePageMeta({
  middleware: ['autenticated'],
});

const form = ref({});
const respond = ref();
const {fecthPOST} = useFetch(respond)

const FormSubmit = async () => {
  await sanctum();
  await fecthPOST('login',form.value)
  if (respond.value.error) return console.log('erro ao autenticar')
  nuxtStorage.localStorage.setData('token', respond.value, 1, 'h');
  await navigateTo('/Home');
};

async function sanctum() {
  await $fetch("http://127.0.0.1:8000/sanctum/csrf-cookie", {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    credentials: "include",
  });
}
</script>

<style>
</style>