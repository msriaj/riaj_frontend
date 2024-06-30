<template>
  <div class="body_wrapper what-i-do">
    <div class="what-i-do__header">
      <h2>What I DO /</h2>
      <div class="what-i-do__header__brief">
        I create impactful digital experiences that not only serve a purpose,
        but also provide businesses with a clear competitive advantage.
      </div>
    </div>
    <div class="what-i-do__services">
      <div class="what-i-do__services__single" v-for="i in 3" :key="i">
        <div class="what-i-do__services__single__title">
          <h2>Web Development</h2>
        </div>
        <div class="bottom-area">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis
            quae veniam dolores, corrupti voluptate, tempore iusto quasi quidem
            repudiandae, similique alias nam fugiat ullam ea nulla nesciunt?
            Veritatis, recusandae voluptatem.
          </p>
          <div class="what-i-do__services__single__sub">
            <div class="what-i-do__services__single__sub_item">
              CMS Integration
            </div>
            <div class="what-i-do__services__single__sub_item">
              CMS Integration
            </div>
            <div class="what-i-do__services__single__sub_item">
              CMS Integration
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const { $ScrollTrigger } = useNuxtApp();

onMounted(() => {
  const items = document.querySelectorAll(".what-i-do__services__single");

  // for and pin item
  items.forEach((item, index) => {
    $ScrollTrigger.create({
      trigger: item,
      start: `top center`,
      end: `bottom center`,
      toggleClass: "active",
    });
  });
});
</script>

<style lang="scss" scoped>
.what-i-do {
  background: rgb(8, 8, 7);
  min-height: 100vh;
  border-radius: 2rem 2rem 0rem 0rem;
  color: rgb(191, 191, 177);
  padding-block: 10rem;
  position: relative;
  transition: all 0.5s ease-in-out;

  &__header {
    h2 {
      font-size: 9rem;
      font-weight: 700;
      text-transform: uppercase;
    }
    &__brief {
      font-size: 2rem;
      width: 30%;
      line-height: 1.3;
      margin-inline-start: auto;
    }
  }
  &__services {
    padding-top: 10rem;
    &__single {
      border-top: 1px solid #ffffff64;
      padding-block: 3rem;

      background: rgb(8, 8, 7);

      &__title {
        max-width: 60%;
        h2 {
          font-size: 3.5rem;
          font-weight: 700;
        }
        p {
          max-width: 30%;
        }
      }

      .bottom-area {
        display: grid;
        gap: 10%;
        grid-template-columns: 1fr 1fr;
        // height: 0px;
        overflow: hidden;
        p {
          padding-block: 3rem;
          width: 50%;
        }
      }

      &__sub {
        overflow: hidden;

        font-size: 2.5rem;
        font-weight: 700;
        transition: height 0.5s ease-in-out;

        &_item {
          padding-block: 1rem;
          border-bottom: 1px solid #ffffff62;
          &:last-child {
            border: none;
          }
        }
      }
    }
  }
}
</style>
