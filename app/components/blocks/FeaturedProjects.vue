<template>
  <div class="body_wrapper works_area">
    <div class="section_title">
      <h2>{{ compData.title }}</h2>
    </div>
    <div class="works-section">
      <div class="project_title_list">
        <div
          class="single-project"
          v-for="(item, index) in compData.content"
          :key="index"
          :class="{ 'single-project--active': currentWork === item.title }"
        >
          {{ item.title }}
        </div>
      </div>

      <div class="works">
        <div
          class="works__card"
          v-for="(item, index) in compData.content"
          :key="index + 'works'"
          :data-color="'black'"
          :data-title="item.title"
        >
          <div class="image-area">
            <WGImg :image="item.image" />

            <a class="btn-link">
              <span> Details</span>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M15.6249 5V13.125C15.6249 13.2908 15.559 13.4497 15.4418 13.5669C15.3246 13.6842 15.1656 13.75 14.9999 13.75C14.8341 13.75 14.6751 13.6842 14.5579 13.5669C14.4407 13.4497 14.3749 13.2908 14.3749 13.125V6.50859L5.44205 15.4422C5.32477 15.5595 5.16571 15.6253 4.99986 15.6253C4.83401 15.6253 4.67495 15.5595 4.55767 15.4422C4.4404 15.3249 4.37451 15.1659 4.37451 15C4.37451 14.8341 4.4404 14.6751 4.55767 14.5578L13.4913 5.625H6.87486C6.7091 5.625 6.55013 5.55915 6.43292 5.44194C6.31571 5.32473 6.24986 5.16576 6.24986 5C6.24986 4.83424 6.31571 4.67527 6.43292 4.55806C6.55013 4.44085 6.7091 4.375 6.87486 4.375H14.9999C15.1656 4.375 15.3246 4.44085 15.4418 4.55806C15.559 4.67527 15.6249 4.83424 15.6249 5Z"
                    fill="black"
                  />
                </svg>
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const { compData, compId } = defineProps(["compData", "compId"]);

// Initialize works data once fetched
const worksList = ref(compData.content);

const currentWork = ref(worksList.value[0]?.title);

onMounted(() => {
  if (process.client) {
    const works = document.querySelectorAll(".works__card");
    const bgArea = document.querySelector(".works_area");
    const project_title_list = document.querySelector(".project_title_list");
    const project_title_list_items =
      project_title_list.querySelectorAll(".single-project");

    ScrollTrigger.create({
      trigger: project_title_list_items[0],
      start: "top 35%",
      pin: ".project_title_list",
      pinSpacing: false,
      // pinSpacer: false,

      endTrigger: bgArea,
      end: "bottom bottom",
    });

    works.forEach((work, index) => {
      ScrollTrigger.create({
        trigger: work,
        start: "top 20%",
        endTrigger: bgArea,
        end: "bottom bottom",
        scrub: 2,
        onEnter: () => {
          currentWork.value = work.getAttribute("data-title");
        },
        onLeave: () => {
          currentWork.value = worksList.value[index - 1]?.title;
        },

        onEnterBack: () => {
          currentWork.value = work.getAttribute("data-title");
        },

        onLeaveBack: () => {
          currentWork.value = worksList.value[index - 1]?.title;
        },
        pin: work,
        pinSpacing: false,
        pinSpacer: false,
        pinType: "transform",
        animation: gsap.timeline().to(works[index - 1], {
          scale: 0.9,
          scaleOrigin: "center",
          scrollTrigger: {
            trigger: work,
            start: "top bottom",
            end: () => "+=" + work.clientHeight,
            scrub: 2,
          },
        }),
      });
    });
  }
});
</script>

<style lang="scss" scoped>
.body_wrapper {
  background: rgb(8, 8, 7);
  transition: all 0.5s ease-in-out;
  @include res-padding("-block", 30, 100);

  .section_title {
    h2 {
      font-weight: 700;
      color: rgb(191, 191, 177);
      @include res-font(30, 140);
      text-transform: uppercase;
    }
  }
  .works-section {
    position: relative;
    // @include res-padding("-inline", 60, 300);
    @include res-padding("-block", 60, 200);
    display: flex;
    justify-content: space-between;
    gap: 5%;
    overflow: hidden;
    .pin-text-area {
      width: 100%;
      position: absolute;
    }

    .title-big {
      position: absolute;
      top: 2rem;
      right: 0;
      // z-index: 1;
      rotate: -90deg;
      transform: translate(-50%, 50%);
      z-index: 9999999;
      h3 {
        font-size: 10rem;
        font-weight: 700;
        color: rgb(191, 191, 177);
        margin-bottom: 1rem;
      }
    }

    .project_title_list {
      // width: 20%;
      position: relative;

      .single-project {
        font-weight: 400;
        opacity: 0.5;
        color: rgb(191, 191, 177);
        @include res-font(18, 40);
        margin-bottom: 0.4rem;
        transition: all 0.3s;

        &--active {
          @include res-font(18, 60);
          font-weight: 700;
          transition: all 0.3s;
          opacity: 1;
        }
      }
    }

    .works {
      position: relative;
      z-index: 1;

      gap: 15rem;
      // width: 50%;
      // padding-right: 10%; // justify-content: center;
      // place-items: center;
      .works__card {
        max-height: 100vh;
        margin-bottom: 20vh;
        // transition: all 0.3s;
        position: relative;

        .image-area {
          position: relative;
          max-height: 80vh;
          height: 50vh;
          aspect-ratio: 1.5/1;
          border-radius: 2em;
          overflow: hidden;

          &:deep(img) {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }

          .btn-link {
            position: absolute;
            bottom: 2rem;
            left: 2rem;
            display: flex;
            align-items: center;
            gap: 1rem;
            background-color: #fff;
            border-radius: 100vw;
            padding: 0.5rem 1rem;
          }
        }
        .works__card__content {
          padding-top: 2rem;

          transform: translateY(20px);
          transition: all 0.3s;
          h3 {
            font-size: 1.5rem;
            font-weight: 700;
            // color: $grey-800;
            color: #fff;
            @include res-font(18, 24);
            margin-bottom: 1rem;
          }
          p {
            font-size: 1rem;
            // color: $grey-800;
            color: #fff;
            @include res-font(14, 16);
          }
        }
      }
    }
  }
}
</style>
