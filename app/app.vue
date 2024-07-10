<template>
  <div>
    <svg class="flitter">
      <filter id="grainy">
        <feTurbulence type="turbulence" baseFrequency="0.5"></feTurbulence>
        <feColorMatrix type="saturate" values="0"></feColorMatrix>
      </filter>
    </svg>

    <Preloader />
    <div>
      <NuxtLayout>
        <div>
          <NuxtPage />
        </div>
      </NuxtLayout>
    </div>
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

.flitter {
  position: absolute;
  inset: 0;
}
</style>
