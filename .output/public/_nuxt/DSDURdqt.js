import n from"./DYagoVJO.js";import{_ as r,a2 as a,S as i,o as l,t as d,v as _,x as t,z as p,y as h,C as m,D as g}from"./DDLOKn-s.js";const s=e=>(m("data-v-a3c1fca2"),e=e(),g(),e),u={class:"body_wrapper hero_section"},f={class:"image-and-brief"},v={class:"left-image"},S=s(()=>t("div",{class:"blank"},null,-1)),x={class:"right-text"},y={class:"upper-text"},D=["innerHTML"],H={class:"developer-name"},P={class:"title"},b=s(()=>t("div",{class:"circle-shape"},null,-1)),I=s(()=>t("div",{class:"location body_wrapper"},[t("p",{class:"small"},"Location"),t("p",null,"Dhaka, Bangladesh")],-1)),k={__name:"Hero",props:["compData","pageData"],setup(e){return a.registerPlugin(i),l(()=>{const o=a.timeline();o.from(".title",{duration:1.3,clipPath:"inset(100% 0 0 0)",delay:.5}),o.from(".left-image img",{duration:1.3,clipPath:"inset(0 0 100% 0)"},"<"),o.from(".right-text",{duration:1.3,xPercent:50,opacity:0},"<"),o.from(".location",{duration:1.3,clipPath:"inset(0 0 100% 0)"},"<"),o.from(".circle-shape",{duration:1.3,opacity:0},"<"),i.create({trigger:".hero_section",pin:".hero_section",start:"top top",pinSpacing:!1,end:()=>"+="+document.querySelector(".hero_section").clientHeight,animation:a.timeline().to(".hero_section",{yPercent:-10,scale:.9,scrollTrigger:{trigger:".hero_section",start:"top top",end:()=>"+="+document.querySelector(".hero_section").clientHeight,scrub:2}})})}),(o,B)=>{const c=n;return d(),_("div",u,[t("div",f,[t("div",v,[p(c,{image:e.compData.header_image},null,8,["image"])]),S,t("div",x,[t("div",y,[t("div",{innerHTML:e.compData.text},null,8,D)])])]),t("div",H,[t("div",P,h(e.compData.title),1)]),b,I])}}},L=r(k,[["__scopeId","data-v-a3c1fca2"]]);export{L as default};