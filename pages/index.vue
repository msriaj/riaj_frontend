<template>
  <div>
    <Hero />
    <What />
    <FeaturedProjects />
    <AboutMe />
    <Footer />
  </div>
</template>

<script setup>
import { ScrollTrigger } from "gsap/ScrollTrigger";

onMounted(() => {
  ScrollTrigger.normalizeScroll(true);
});
</script>
