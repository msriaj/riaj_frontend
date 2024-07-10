<template>
  <div class="home-page" ref="indexPage">
    <NuxtLazyHydrate
      when-idle
      v-for="(block, idx) in pageData.body"
      :key="'comp-' + block.id"
    >
      <component
        :id="'comp-' + block.id"
        :is="resolveComponent('Lazy' + componentLookup[block.type])"
        :compData="block.value"
        :compId="block.id"
        :sectionNo="idx"
      />
    </NuxtLazyHydrate>
  </div>
</template>

<script setup>
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const emitter = ref(null);
const indexPage = ref(null);

const componentLookup = {
  header_content: "Hero",
  services: "What",
  recent_work: "FeaturedProjects",
  about: "AboutMe",
};

const { pageData, pageType } = defineProps({
  pageData: {
    type: Object,
    required: true,
  },
});
</script>

<style lang="scss" scoped></style>
