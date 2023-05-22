<template>
  <div id="app-layout">
    <div class="grid">
      <layouts-NavBar/>
      <layouts-Header/>
      <slot />
      <layouts-Footer/>
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped lang="scss">
@import 'assets/layout/custom';
</style>