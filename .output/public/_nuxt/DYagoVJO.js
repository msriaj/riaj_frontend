import{q as k,_ as S,j as g,t as c,v as o,M as l,V as n,x as y,a4 as p}from"./DDLOKn-s.js";const f=()=>{const r=k();return{staticHost:r.public.staticHost||r.public.publicApiBase||r.apiBase}},m=["srcset"],x=["srcset"],w=["srcset"],B=["srcset"],F=["srcset"],z=["src","alt","width","height","loading"],v={__name:"WGImg",props:{image:{type:Object,required:!0},lazy:{type:Boolean,default:!1},loadingBackground:{type:Boolean,default:!1}},setup(r){const{image:t,lazy:C,loadingBackground:h}=r,_=(a,s)=>{if(!s||!a.palette)return{};switch(a.palette.length){case 0:return{};case 1:return{backgroundColor:a.palette[0].color};default:return{backgroundImage:`linear-gradient(to bottom right, ${a.palette[0]}, ${a.palette[1]})`}}};f();const e=g(()=>{var a,s,i,u,d,b;return{width:t==null?void 0:t.width,height:t==null?void 0:t.height,alternateText:(t==null?void 0:t.alt)||"",originalSrc:(a=t==null?void 0:t.renditions)==null?void 0:a.original,originalFallbackSrc:((s=t==null?void 0:t.renditions)==null?void 0:s.original_fallback)||null,tabSrc:((i=t==null?void 0:t.renditions)==null?void 0:i.tab)||null,tabFallbackSrc:((u=t==null?void 0:t.renditions)==null?void 0:u.tab_fallback)||null,mobileSrc:((d=t==null?void 0:t.renditions)==null?void 0:d.mobile)||null,mobileFallbackSrc:((b=t==null?void 0:t.renditions)==null?void 0:b.mobile_fallback)||null,imageStyles:_(t,h)}});return(a,s)=>(c(),o("picture",{style:p(l(e).imageStyles)},[l(e).mobileSrc?(c(),o("source",{key:0,media:"(max-width:480px)",srcset:l(e).mobileSrc,type:"image/webp"},null,8,m)):n("",!0),l(e).mobileFallbackSrc?(c(),o("source",{key:1,media:"(max-width:480px)",srcset:l(e).mobileFallbackSrc},null,8,x)):n("",!0),l(e).tabSrc?(c(),o("source",{key:2,media:"(max-width:1024px)",srcset:l(e).tabSrc,type:"image/webp"},null,8,w)):n("",!0),l(e).tabFallbackSrc?(c(),o("source",{key:3,media:"(max-width:1024px)",srcset:l(e).tabFallbackSrc},null,8,B)):n("",!0),l(e).originalFallbackSrc?(c(),o("source",{key:4,srcset:l(e).originalSrc},null,8,F)):n("",!0),y("img",{class:"wg-img",src:l(e).originalFallbackSrc?l(e).originalFallbackSrc:l(e).originalSrc,alt:l(e).alternateText,width:l(e).width,height:l(e).height,fit:"cover",style:p(l(e).imageStyles),loading:r.lazy?"lazy":"eager"},null,12,z)],4))}},V=S(v,[["__scopeId","data-v-bfbe8317"]]);export{V as default};