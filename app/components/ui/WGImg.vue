<script setup>
const { image, lazy, loadingBackground } = defineProps({
  image: {
    type: Object,
    required: true,
  },
  lazy: {
    type: Boolean,
    default: false,
  },
  loadingBackground: {
    type: Boolean,
    default: false,
  },
});
const config = useRuntimeConfig();

const getBackgroundStyles = (image, flag) => {
  if (!flag || !image.palette) return {};
  switch (image.palette.length) {
    case 0:
      return {};
    case 1:
      return {
        backgroundColor: image.palette[0].color,
      };
    default:
      return {
        backgroundImage: `linear-gradient(to bottom right, ${image.palette[0]}, ${image.palette[1]})`,
      };
  }
};

const { staticHost: HOST } = useResolvedConfig();
const options = computed(() => {
  return {
    width: image?.width,
    height: image?.height,
    alternateText: image?.alt || "",
    originalSrc: image?.renditions?.original,
    originalFallbackSrc: image?.renditions?.original_fallback || null,
    tabSrc: image?.renditions?.tab || null,
    tabFallbackSrc: image?.renditions?.tab_fallback || null,
    mobileSrc: image?.renditions?.mobile || null,
    mobileFallbackSrc: image?.renditions?.mobile_fallback || null,
    imageStyles: getBackgroundStyles(image, loadingBackground),
  };
});
</script>
<template>
  <picture :style="options.imageStyles">
    <source
      v-if="options.mobileSrc"
      media="(max-width:480px)"
      :srcset="options.mobileSrc"
      type="image/webp"
    />
    <source
      v-if="options.mobileFallbackSrc"
      media="(max-width:480px)"
      :srcset="options.mobileFallbackSrc"
    />
    <source
      v-if="options.tabSrc"
      media="(max-width:1024px)"
      :srcset="options.tabSrc"
      type="image/webp"
    />
    <source
      v-if="options.tabFallbackSrc"
      media="(max-width:1024px)"
      :srcset="options.tabFallbackSrc"
    />

    <source v-if="options.originalFallbackSrc" :srcset="options.originalSrc" />
    <img
      class="wg-img"
      :src="
        options.originalFallbackSrc
          ? options.originalFallbackSrc
          : options.originalSrc
      "
      :alt="options.alternateText"
      :width="options.width"
      :height="options.height"
      fit="cover"
      :style="options.imageStyles"
      :loading="lazy ? 'lazy' : 'eager'"
    />
  </picture>
</template>

<style scoped>
img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
