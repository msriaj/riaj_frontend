// import { $gsap, ScrollTrigger } from "$gsap/all";
let scroller;

const useLocomotive = () => {
  const isPageChange = useState("pageChange", () => false);
  const { $LocomotiveScroll, $gsap, $ScrollTrigger } = useNuxtApp();
  const pageChange = (value) => {
    isPageChange.value = value;
  };

  $gsap.registerPlugin($ScrollTrigger);

  // animation functions

  const animationFunctions = {
    revealElement,
    bannerImgAnim,
    headerTitleAnim,
    ParagraphReveal,
    textAndCardAnim,
  };

  function revealElement(el) {
    if (!el) {
      return;
    }
    $gsap.fromTo(
      el,
      {
        autoAlpha: 0,
        y: 100,
      },
      {
        autoAlpha: 1,
        y: 0,
        duration: 1,
        ease: "power4.Out",
        scrollTrigger: {
          trigger: el,
          start: "center bottom-=10%",
        },
      }
    );
  }

  function bannerImgAnim(el) {
    if (!el) {
      console.log("Element not found on bannerImgAnim");
      return;
    }
    $gsap.fromTo(
      el,
      {
        scale: 1,
        transformOrigin: "center center",
      },
      {
        scale: 1.05,
        duration: 1.5,
        ease: "power3.inOut",
        delay: 0.8,
      }
    );
  }

  function headerTitleAnim(el) {
    const title = el.querySelector(".header-title");

    if (!title) {
      console.log("Element not found on headerTitleAnim");
      return;
    }

    $gsap.fromTo(
      title,
      { scale: 0.95, opacity: 0.125, visibility: "hidden" },
      {
        scale: 1,
        delay: 1.5,
        opacity: 1,
        ease: "expo.out",
        visibility: "visible",
        duration: 1.25,
      }
    );
  }

  function ParagraphReveal(el) {
    if (!el) {
      console.log("Element not found on paragraphReveal");
      return;
    }
    $gsap.fromTo(
      el,
      { y: 50, opacity: 0.125, visibility: "hidden" },
      {
        y: 0,
        delay: 2.5,
        opacity: 1,
        ease: "expo.out",
        visibility: "visible",
        duration: 1.25,
      }
    );
  }

  function textAndCardAnim(el) {
    const subText = el.querySelector(".sub-headline");
    const title = el.querySelector(".title-anim");
    const imageCard = el.querySelectorAll(".card-item");

    if (!subText || !title || !imageCard) {
      console.log("one or more elements not found on textAndCardAnim");
      return;
    }

    const tl = $gsap.timeline({});
    tl.fromTo(
      subText,
      { y: 50, opacity: 0, visibility: "hidden" },
      {
        y: 0,
        opacity: 1,
        ease: "expo.out",
        visibility: "visible",
        duration: 1.25,
      },
      "start"
    ).fromTo(
      title,
      { y: 50, opacity: 0, visibility: "hidden" },
      {
        y: 0,
        opacity: 1,
        ease: "expo.out",
        visibility: "visible",
        duration: 1.25,
      },
      "start+=0.25"
    );
    // .fromTo(imageCard, { y: 50, opacity: 0, visibility: 'hidden' }, { y: 0, opacity: 1, ease: 'expo.out', visibility: 'visible', duration: 1.25, stagger: 0.1 }, 'start+=0.5')
  }

  const locomotiveInit = () => {
    if (scroller) {
      scroller.destroy();
    }

    scroller = new $LocomotiveScroll({
      lenisOptions: {
        wrapper: window,
        content: document.documentElement,
        lerp: 0.1,
        duration: 1.2,
        orientation: "vertical",
        gestureOrientation: "vertical",
        smoothWheel: true,
        smoothTouch: false,
        wheelMultiplier: 1,
        touchMultiplier: 2,
        normalizeWheel: true,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
      },
    });

    for (const key in animationFunctions) {
      window.addEventListener(key, (e) => {
        animationFunctions[key](e.detail.target);
      });
    }
  };

  function scrollTo(params) {
    const { target, options } = params;
    scroller.scrollTo(target, options);
  }

  function scrollDisable(isDisabled) {
    if (isDisabled) {
      scroller.stop();
      console.log("scroller stopped");
    } else {
      scroller.start();
      console.log("scroller start");
    }
  }

  return {
    locomotiveInit,
    scrollTo,
    scroller,
    isPageChange,
    pageChange,
    scrollDisable,
  };
};

export default useLocomotive;
