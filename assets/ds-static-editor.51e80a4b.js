import{d as a,i as t,f as o,o as e,c as n,a as s}from"./index.3afedbee.js";var i=a({name:"DsStaticEditor",setup(){const a=t("apiDataConfig");return{apiDataConfig:a,updateData:t=>{a.value.config.data=t.value}}}});const r={class:"ds-wrapper ds-static"};i.render=function(a,t,i,d,u,c){const f=o("g-monaco-editor");return e(),n("div",r,[s(f,{language:"json","auto-format":!0,code:a.apiDataConfig.config.data,onBlur:a.updateData},null,8,["code","onBlur"])])};export default i;