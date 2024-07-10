<template>
  <div>
    <Navbar :isNavbarDark="!pageData.is_navbar_dark" />

    <component
      v-if="!pending"
      :key="'page' + (pageData ? pageData.id : 'none')"
      :is="resolveComponent(pageType)"
      :pageData="pageData"
    />
  </div>
</template>

<script setup>
import { ScrollTrigger } from "gsap/ScrollTrigger";
const { locomotiveInit } = useLocomotive();

const route = useRoute();
const apiFetchConfig = useBackendAPI();
let pageUrl = route.fullPath.split("?")[0];

if (pageUrl === "/") {
  pageUrl = "/md-riaj";
}

const { data, error, pending } = await useAsyncData(route.fullPath, () =>
  $fetch(
    `/api/v2/pages/find/?format=json&redirect=false&html_path=${pageUrl}`,
    apiFetchConfig
  )
);

if (error.value || data.value == null) {
  throw createError({
    statusCode: 404,
    statusMessage: "Page Not Found?",
  });
}

const pageData = data.value;
const pageType = pageData.meta.type.split(".")[1];

const title =
  pageData.meta.seo_title ||
  `${pageData.title} | ${pageData?.meta?.parent?.title || "Mavi"}`;

const og_image =
  pageData.opengraph_image || pageData?.meta?.parent?.opengraph_image || false;

const ogFB = og_image ? og_image.renditions.facebook : false;
const ogTW = og_image ? og_image.renditions.twitter : false;

const logoSD = {
  "@context": "https://schema.org",
  "@type": "Organization",
  url: "https://shantaholdings.com/",
  logo: "https://shantaholdings.com/logo.png",
};

useHead({
  title,
  meta: [
    { property: "og:title", content: title },
    { name: "description", content: pageData.meta.search_description },
    { property: "og:description", content: pageData.meta.search_description },
    { property: "og:image", content: apiFetchConfig.baseURL + ogFB },
    { property: "og:image:width", content: og_image?.facebook?.width },
    { property: "og:image:height", content: og_image?.facebook?.height },
    { property: "twitter:card", content: "summary_large_image" },
    { property: "twitter:title", content: title },
    {
      property: "twitter:description",
      content: pageData.meta.search_description,
    },
    { property: "twitter:image", content: apiFetchConfig.baseURL + ogTW },
    { property: "twitter:image:width", content: og_image?.twitter?.width },
    { property: "twitter:image:height", content: og_image?.twitter?.height },
  ],
  script: [
    {
      type: "application/ld+json",
      vmid: "org-logo",
      json: logoSD,
    },
  ],
});

onMounted(() => {
  ScrollTrigger.normalizeScroll(true);
});
</script>
