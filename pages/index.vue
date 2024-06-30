<template>
  <div class="body_wrapper">
    <div class="upper-text">
      <p>
        At the core of frontend development lies the challenge to craft user
        experiences that are both beautiful and functional.
      </p>
    </div>
    <div class="image-and-name">
      <div class="left-image">
        <img src="https://via.placeholder.com/700x400" alt="left-image" />
      </div>
      <div class="developer-name">
        <h1 class="title">Md. Riaj</h1>
      </div>
    </div>
  </div>
</template>

<script setup>
const { $gsap } = useNuxtApp();

onMounted(() => {
  $gsap.from(".title", { duration: 1, x: 100 });
});
</script>

<style lang="scss" scoped>
.upper-text {
  display: flex;
  justify-content: flex-end;
  padding-block: 4rem;
  p {
    max-width: 475px;
    font-style: 1rem;
    font-weight: 300;
    line-height: 1.4;
    text-transform: uppercase;
    color: $grey-800;
  }
}
.image-and-name {
  display: flex;
  //   justify-content: center;
  gap: 3rem;
  .left-image {
    img {
      width: 700px;
      height: 100%;
      object-fit: cover;
    }
  }
  .developer-name {
    .title {
      font-size: 200px;
      font-weight: 700;
      color: $grey-800;
    }
  }
}
</style>
