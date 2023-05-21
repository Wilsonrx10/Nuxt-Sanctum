<template>
  <div>
     <h1>Nuxt 3 é poderoso pra caralho</h1>
     <h2>{{user}}</h2>
  </div>
</template>

<script setup>
useHead({
    title: 'Dashboard'
});
const user = ref([]);
const {fecthGET} = useFetch()

onMounted(async () => {
  user.value = await fecthGET('user');
})
</script>

<style>

</style>