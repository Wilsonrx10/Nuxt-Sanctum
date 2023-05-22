<template>
  <div>
    <NuxtLayout name="custom">
       <Dashboard/>
    </NuxtLayout>
  </div>
</template>

<script setup>
definePageMeta({ 
  layout: 'custom',
  middleware: ['autenticated'],
})
useHead({title: 'Dashboard'})

const user = ref([]);
const {fecthGET} = useFetch()

onMounted(async () => {
  user.value = await fecthGET('user');
})
</script>

<style scoped lang="scss">
div {
  width: 100%;
  height: 100%;
}
</style>