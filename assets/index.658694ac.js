import{_ as e}from"./config-title.b7b77716.js";import{_ as a}from"./empty-panel.67d16b3d.js";import{d as t,a5 as s,a4 as n,p as o,k as c,r as m,o as i,c as r,a as l,l as d}from"./index.ecb37744.js";import"./index.bf43271e.js";import"./dom.1228cadc.js";import"./editor.worker.3eb73e22.js";var p=t({name:"InteractionPanel",components:{ConfigTitle:e,EmptyPanel:a},setup(){const e=s("com"),a=n((()=>Object.keys(e.value.events)));return{com:e,eventKeys:a}}});const v=d();o("data-v-6feeada4");const f={class:"interaction-panle"},y={key:0},b=l("div",{class:"com-events"},null,-1);c();const j=v(((e,a,t,s,n,o)=>{const c=m("config-title"),d=m("empty-panel");return i(),r("div",f,[l(c,{"com-name":e.com.name,"com-alias":e.com.alias},null,8,["com-name","com-alias"]),e.eventKeys.length>0?(i(),r("div",y,[b])):(i(),r(d,{key:1,content:"该组件没有交互事件"}))])}));p.render=j,p.__scopeId="data-v-6feeada4";export default p;