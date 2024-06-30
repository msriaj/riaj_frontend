<template>
  <div>
    <Preloader />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
const { locomotiveInit } = useLocomotive();

onMounted(() => {
  locomotiveInit();
});
</script>

<style lang="scss" scoped>
.loader {
  position: fixed;
  width: 100vw;
  height: 100vh;
  z-index: 9999;
  background-color: $grey-800;
}
</style>
