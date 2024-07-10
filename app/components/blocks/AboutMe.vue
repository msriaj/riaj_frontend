<template>
  <div class="body_wrapper" id="about-me">
    <div class="about-me-section">
      <div class="about-me-section__title">
        <h2 class="section_title">
          {{ compData.title }}<br />{{ compData.title2 }}
        </h2>
      </div>
      <div class="about-me-section__image">
        <WGImg :image="compData.image" />
        <div class="half-circle-shape"></div>
      </div>
      <div class="about-me-section__content">
        <div v-html="compData.description"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const { compData, compId } = defineProps(["compData", "compId"]);

const aboutMeAnimation = () => {
  gsap.to("#about-me", {
    scrollTrigger: {
      trigger: "#about-me",
      start: "bottom 100%",
      end: "bottom center",
      scrub: 1,
    },

    scaleX: 0.98,
  });
};

onMounted(() => {
  aboutMeAnimation();
});
</script>

<style lang="scss" scoped>
.body_wrapper {
  background: rgb(8, 8, 7);
  @include res-padding("-block", 30, 100);
  color: rgb(191, 191, 177);
  z-index: 3;
  position: relative;
  border-radius: 0rem 0rem 2rem 2rem;
  .about-me-section {
    position: relative;
    .about-me-section__title {
      font-size: clamp(3.5rem, 2.3571rem + 5.5143vi, 10.5rem);
      font-weight: 700;
      position: relative;
      mix-blend-mode: difference;
    }
    .about-me-section__image {
      margin-top: -50px;
      margin-bottom: -50px;
      max-width: 40%;
      margin-inline: auto;
      &:deep(img) {
        border-radius: 2%;
      }
    }
    .about-me-section__content {
      max-width: 45%;
      margin-inline: auto 0;
      &:deep(p) {
        font-size: 2rem;
        line-height: 1.5;
        mix-blend-mode: difference;
      }
    }
    .half-circle-shape {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      height: 100%;
      aspect-ratio: 1 / 1;
      border-radius: 50%;
      z-index: 1;
      background-color: #39363245;
      mix-blend-mode: difference;
    }
  }
}
</style>
