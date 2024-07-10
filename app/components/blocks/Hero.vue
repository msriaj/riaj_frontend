<template>
  <div class="body_wrapper hero_section">
    <div class="image-and-brief">
      <div class="left-image">
        <WGImg :image="compData.header_image" />
      </div>
      <div class="blank"></div>

      <div class="right-text">
        <div class="upper-text">
          <div v-html="compData.text"></div>
        </div>
      </div>
    </div>
    <div class="developer-name">
      <div class="title">
        {{ compData.title }}
      </div>
    </div>
    <div class="circle-shape"></div>
    <div class="location body_wrapper">
      <p class="small">Location</p>
      <p>Dhaka, Bangladesh</p>
    </div>
  </div>
</template>

<script setup>
// const { $gsap, $ScrollTrigger } = useNuxtApp();
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const { compData, pageData } = defineProps(["compData", "pageData"]);

gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
  const tl = gsap.timeline();

  tl.from(".title", {
    duration: 1.3,
    // yPercent: 100,
    clipPath: "inset(100% 0 0 0)",
    delay: 0.5,
  });

  // left-image clip-path fromt
  tl.from(
    ".left-image img",
    {
      duration: 1.3,
      clipPath: "inset(0 0 100% 0)",
    },
    "<"
  );
  tl.from(
    ".right-text",
    {
      duration: 1.3,
      xPercent: 50,
      opacity: 0,
    },
    "<"
  );

  tl.from(
    ".location",
    {
      duration: 1.3,
      clipPath: "inset(0 0 100% 0)",
    },
    "<"
  );

  tl.from(
    ".circle-shape",
    {
      duration: 1.3,
      // width: 0,
      opacity: 0,
    },
    "<"
  );

  let st = ScrollTrigger.create({
    trigger: ".hero_section",
    pin: ".hero_section",
    start: "top top",
    pinSpacing: false,
    end: () => "+=" + document.querySelector(".hero_section").clientHeight,

    animation: gsap.timeline().to(".hero_section", {
      yPercent: -10,
      scale: 0.9,
      scrollTrigger: {
        trigger: ".hero_section",
        start: "top top",
        end: () => "+=" + document.querySelector(".hero_section").clientHeight,
        scrub: 2,
      },
    }),
  });
});
</script>

<style lang="scss" scoped>
.hero_section {
  .image-and-brief {
    margin-bottom: 15rem;
    height: 100vh;
    display: grid;
    grid-template-columns: 1.3fr 2fr 2fr;
    align-items: center;
    padding-bottom: 10rem;

    .left-image {
      &:deep(img) {
        // relative col-span-3 hidden aspect-[3/3.5] h-full w-full  overflow-clip rounded-lg md:block
        width: 100%;
        aspect-ratio: 3/3.5;
        border-radius: 1rem;
        filter: grayscale(100%);
        object-fit: cover;
      }
    }

    .right-text {
      display: flex;
      flex-direction: column;
      justify-content: center;
      position: relative;
      .upper-text {
        &:deep(p) {
          font-size: 2.5rem;
          font-weight: 400;
          color: rgb(107, 100, 92);
          font-family: "CustomFont";
          font-feature-settings: "ss03";
        }
      }
    }
  }
  .circle-shape {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 50vw;
    aspect-ratio: 1 / 1;
    border-radius: 50%;
    z-index: -1;
    background-color: #3936321c;
  }

  .location {
    position: absolute;
    bottom: 3rem;
    right: 0;
    .small {
      font-size: 1rem;
      font-weight: 300;
      color: rgb(107, 100, 92);
    }
    p {
      text-align: right;
      font-size: 1.5rem;
      font-weight: 300;
      color: rgb(107, 100, 92);
    }
  }

  .developer-name {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
    overflow: hidden;
    .title {
      // fit into full width
      font-size: 20vw;
      font-weight: 700;
      color: #393632;
      font-family: "CustomFont";
      font-feature-settings: "ss03";
      line-height: 0.9;
    }
    .subtitle {
      p {
        font-size: 3rem;
        color: #00000068;
        // text-transform: uppercase;
        font-weight: 300;
        line-height: 1.5;
      }
    }
  }
}
</style>
