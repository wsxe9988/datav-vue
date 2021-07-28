import{d as e,a$ as o,J as n,b0 as c,aq as t,aI as i,P as l,Q as m,o as s,c as a,a as u,F as d,b as v,R as C,A as x}from"./index.3afedbee.js";import{o as k,b as p}from"./dom.97cd863c.js";import{u as r}from"./index.5f6fcff7.js";var y=e({name:"EditorContextMenu",setup(){const{contextMenu:e,selectedCom:l,isLocked:m,isHided:s,contextMenuStyle:a}=r(),u=e=>{l.value&&i.moveCom({id:l.value.id,moveType:e})},d=e=>e.preventDefault();return o((()=>{k(document,"contextmenu",d)})),n((()=>{p(document,"contextmenu",d)})),{contextMenu:e,isLocked:m,isHided:s,contextMenuStyle:a,moveUp:()=>u(c.up),moveDown:()=>u(c.down),moveTop:()=>u(c.top),moveBottom:()=>u(c.bottom),lockCom:()=>{l.value&&(l.value.locked=!l.value.locked)},hideCom:()=>{l.value&&(l.value.hided=!l.value.hided)},toDeleteCom:()=>{const e=l.value;e&&t.confirmAsync("是否删除选中的1个组件",(()=>i.deleteCom(e)))},renameCom:()=>{l.value&&(l.value.renameing=!0)},toCopyCom:()=>{l.value&&i.copyCom(l.value.id)}}}});const f=C();l("data-v-8de6c736");const h=u("i",{class:"menu-icon v-icon-move-top"},null,-1),w=x("置顶 "),D=u("i",{class:"menu-icon v-icon-move-bottom"},null,-1),M=x("置底 "),b=u("i",{class:"menu-icon v-icon-move-up"},null,-1),T=x("上移一层 "),j=u("i",{class:"menu-icon v-icon-move-down"},null,-1),B=x("下移一层 "),H=u("div",{class:"context-menu-divider"},null,-1),L=u("i",{class:"menu-icon v-icon-unlock"},null,-1),S=x("解锁 "),U=u("i",{class:"menu-icon v-icon-lock"},null,-1),A=x("锁定 "),I=u("i",{class:"menu-icon v-icon-show"},null,-1),_=x("显示 "),g=u("i",{class:"menu-icon v-icon-hide"},null,-1),q=x("隐藏 "),E=u("div",{class:"context-menu-divider"},null,-1),F=u("i",{class:"menu-icon v-icon-edit"},null,-1),J=x("重命名 "),P=u("i",{class:"menu-icon v-icon-copy"},null,-1),Q=x("复制 "),R=u("i",{class:"menu-icon v-icon-delete"},null,-1),$=x("删除 "),z=u("div",{class:"context-menu-divider"},null,-1);m();const G=f(((e,o,n,c,t,i)=>e.contextMenu.show?(s(),a("div",{key:0,class:"context-menu-wrap",style:e.contextMenuStyle},[u("div",{class:"context-menu-item",onClick:o[1]||(o[1]=(...o)=>e.moveTop&&e.moveTop(...o))},[h,w]),u("div",{class:"context-menu-item",onClick:o[2]||(o[2]=(...o)=>e.moveBottom&&e.moveBottom(...o))},[D,M]),u("div",{class:"context-menu-item",onClick:o[3]||(o[3]=(...o)=>e.moveUp&&e.moveUp(...o))},[b,T]),u("div",{class:"context-menu-item",onClick:o[4]||(o[4]=(...o)=>e.moveDown&&e.moveDown(...o))},[j,B]),H,u("div",{class:"context-menu-item",onClick:o[5]||(o[5]=(...o)=>e.lockCom&&e.lockCom(...o))},[e.isLocked?(s(),a(d,{key:0},[L,S],64)):(s(),a(d,{key:1},[U,A],64))]),u("div",{class:"context-menu-item",onClick:o[6]||(o[6]=(...o)=>e.hideCom&&e.hideCom(...o))},[e.isHided?(s(),a(d,{key:0},[I,_],64)):(s(),a(d,{key:1},[g,q],64))]),E,u("div",{class:"context-menu-item",onClick:o[7]||(o[7]=(...o)=>e.renameCom&&e.renameCom(...o))},[F,J]),u("div",{class:"context-menu-item",onClick:o[8]||(o[8]=(...o)=>e.toCopyCom&&e.toCopyCom(...o))},[P,Q]),u("div",{class:"context-menu-item",onClick:o[9]||(o[9]=(...o)=>e.toDeleteCom&&e.toDeleteCom(...o))},[R,$]),z],4)):v("",!0)));y.render=G,y.__scopeId="data-v-8de6c736";export default y;