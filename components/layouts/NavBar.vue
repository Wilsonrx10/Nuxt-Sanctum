<template>
   <div class="navBar">
      <div class="menu">
         <div v-for="item,idx in menu" :key="idx">{{item.title}}</div>
      </div>
   </div>
</template>

<script setup>
const menu = ref([
   {
      title:'Home',
      icon:''
   },
   {
      title:'Contatos',
      icon:''
   },
   {
      title:'Serviços',
      icon:''
   },
   {
      title:'Sair',
      icon:''
   },
])
</script>

<style lang="scss" scoped>
@import 'assets/layout/nav';
</style>