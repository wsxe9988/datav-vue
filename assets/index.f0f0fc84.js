import{_ as e}from"./config-title.17d90fa1.js";import{_ as a}from"./empty-panel.0dd4868d.js";import{d as t,a5 as s,a4 as n,p as o,k as c,r as m,o as i,c as r,a as d,l}from"./index.20452c9e.js";import"./index.3b7b4d01.js";import"./dom.1228cadc.js";import"./editor.worker.3eb73e22.js";var p=t({name:"InteractionPanel",components:{ConfigTitle:e,EmptyPanel:a},setup(){const e=s("com"),a=n((()=>Object.keys(e.value.events)));return{com:e,eventKeys:a}}});const v=l();o("data-v-6feeada4");const f={class:"interaction-panle"},y={key:0},j=d("div",{class:"com-events"},null,-1);c();const u=v(((e,a,t,s,n,o)=>{const c=m("config-title"),l=m("empty-panel");return i(),r("div",f,[d(c,{"com-name":e.com.name,"com-alias":e.com.alias},null,8,["com-name","com-alias"]),e.eventKeys.length>0?(i(),r("div",y,[j])):(i(),r(l,{key:1,content:"该组件没有交互事件"}))])}));p.render=u,p.__scopeId="data-v-6feeada4";export default p;