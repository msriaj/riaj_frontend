import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { CustomEase } from "gsap/CustomEase";

export default defineNuxtPlugin({
  //   parallel: true,
  //   order: -1,
  setup() {
    gsap.registerPlugin(ScrollToPlugin, ScrollTrigger, CustomEase);
    return { provide: { gsap, ScrollToPlugin, ScrollTrigger, CustomEase } };
  },
});
