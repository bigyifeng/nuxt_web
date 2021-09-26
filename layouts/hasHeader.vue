<template>
  <div class="page">
    <Header />
    <div class="flex-1">
      <nuxt />
    </div>

  </div>
</template>

<style scoped>
.page {
  display: flex;
  flex-direction: column;
  height: 100%;
}
.flex-1 {
  flex: 1;
  width: 100%;
}
</style>