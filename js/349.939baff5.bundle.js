"use strict";(self.webpackChunkkevinjobs=self.webpackChunkkevinjobs||[]).push([[349],{7964:(t,e,a)=>{a.d(e,{Gm:()=>r,ZE:()=>o,fo:()=>i,mS:()=>s,uh:()=>c});var n=a(1104);const o=n._+"/token",i=n._+"/post/list",s=n._+"/p",r=n._+"/user/list",c=n._+"/user"},8519:(t,e,a)=>{a.d(e,{CP:()=>d,SD:()=>h,T6:()=>r,fR:()=>c,q2:()=>l});var n=a(891),o=a(7964),i=function(t,e,a,n){return new(a||(a=Promise))((function(o,i){function s(t){try{c(n.next(t))}catch(t){i(t)}}function r(t){try{c(n.throw(t))}catch(t){i(t)}}function c(t){var e;t.done?o(t.value):(e=t.value,e instanceof a?e:new a((function(t){t(e)}))).then(s,r)}c((n=n.apply(t,e||[])).next())}))};const s=t=>Number(String(t).slice(0,10));function r(t,e,a){return i(this,void 0,void 0,(function*(){let i={offset:t,limit:e,status:"publish"};a&&(i=Object.assign(Object.assign({},i),a));const r=yield n.Z.get(o.fo,{params:i});if(0===r.data.code){const t=r.data,e=t.data.posts;return t.data.posts=e.map((t=>(t.createAt=s(t.createAt),t.updateAt=s(t.updateAt),t.publishAt=s(t.publishAt),t))),t}return r.data.msg}))}function c(t){return i(this,void 0,void 0,(function*(){const e=yield n.Z.delete(o.mS,{params:{uid:t}});return 0===e.data.code?e.data:e.data.msg}))}function d(t,e){return i(this,void 0,void 0,(function*(){const a=yield n.Z.put(o.mS,e,{params:{uid:t}});return 0===a.data.code?a.data:a.data.msg}))}function l(t){return i(this,void 0,void 0,(function*(){const e=yield n.Z.post(o.mS,t);return 0===e.data.code?e.data:e.data.msg}))}function h(t){return i(this,void 0,void 0,(function*(){const e=yield n.Z.get(o.mS,{params:{uid:t}});if(0===e.data.code){const t=e.data;return t.data.post.updateAt=s(t.data.post.updateAt),t.data.post.createAt=s(t.data.post.createAt),t.data.post.publishAt=s(t.data.post.publishAt),t}return e.data.msg}))}},6175:(t,e,a)=>{a.d(e,{z:()=>c});var n=a(959),o=a(3103),i=a(6824),s=function(t,e){var a={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(a[n]=t[n]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(t);o<n.length;o++)e.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(t,n[o])&&(a[n[o]]=t[n[o]])}return a};const r=o.ZP.button`
  height: 24px;
  padding: 0px 8px;
  margin: 0px 4px;
  border: none;
  &:hover {
    opacity: 0.8;
  }
`;function c(t){const{type:e,children:a,danger:o,disabled:c=!1,onClick:d,style:l}=t,h=s(t,["type","children","danger","disabled","onClick","style"]);let u="";const p=i.Z.white1;switch(e){case"primary":u=i.Z.blue;break;case"success":u=i.Z.green;break;case"light":u=i.Z.white4;break;default:u=i.Z.dark}return o&&(u=i.Z.red),n.createElement(r,Object.assign({},h,{style:Object.assign({backgroundColor:c?i.Z.white6:u,color:p,cursor:c?"not-allowed":"pointer"},l),onClick:t=>{c?(t.preventDefault(),t.stopPropagation()):d(t)}}),a)}},5159:(t,e,a)=>{a.d(e,{E:()=>s});var n=a(959),o=a(541),i=function(t,e){var a={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(a[n]=t[n]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(t);o<n.length;o++)e.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(t,n[o])&&(a[n[o]]=t[n[o]])}return a};function s(t){const{style:e}=t,a=i(t,["style"]),[s,r]=n.useState(!1);return n.createElement(n.Fragment,null,n.createElement("img",Object.assign({},a,{onLoad:()=>{r(!0)},style:Object.assign(Object.assign({},e),{display:s?"block":"none"})})),!s&&n.createElement(o.g,null))}},541:(t,e,a)=>{a.d(e,{g:()=>c});var n=a(959),o=a(3103);const i=o.ZP.div`
  display: inline-block;
  width: 44px;
  height: 44px;
  .sk-chase {
    width: 40px;
    height: 40px;
    position: relative;
    animation: sk-chase 2.5s infinite linear both; 
  }
  .sk-chase-dot {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0; 
    animation: sk-chase-dot 2.0s infinite ease-in-out both; 
  }
  .sk-chase-dot:before {
    content: '';
    display: block;
    width: 25%;
    height: 25%;
    background-color: #333;
    border-radius: 100%;
    animation: sk-chase-dot-before 2.0s infinite ease-in-out both; 
  }
  .sk-chase-dot:nth-child(1) { animation-delay: -1.1s; }
  .sk-chase-dot:nth-child(2) { animation-delay: -1.0s; }
  .sk-chase-dot:nth-child(3) { animation-delay: -0.9s; }
  .sk-chase-dot:nth-child(4) { animation-delay: -0.8s; }
  .sk-chase-dot:nth-child(5) { animation-delay: -0.7s; }
  .sk-chase-dot:nth-child(6) { animation-delay: -0.6s; }
  .sk-chase-dot:nth-child(1):before { animation-delay: -1.1s; }
  .sk-chase-dot:nth-child(2):before { animation-delay: -1.0s; }
  .sk-chase-dot:nth-child(3):before { animation-delay: -0.9s; }
  .sk-chase-dot:nth-child(4):before { animation-delay: -0.8s; }
  .sk-chase-dot:nth-child(5):before { animation-delay: -0.7s; }
  .sk-chase-dot:nth-child(6):before { animation-delay: -0.6s; }
  @keyframes sk-chase {
    100% { transform: rotate(360deg); } 
  }
  @keyframes sk-chase-dot {
    80%, 100% { transform: rotate(360deg); } 
  }
  @keyframes sk-chase-dot-before {
    50% {
      transform: scale(0.4); 
    } 100%, 0% {
      transform: scale(1.0); 
    } 
  }
`;function s(){return n.createElement(i,null,n.createElement("div",{className:"sk-chase"},n.createElement("div",{className:"sk-chase-dot"}),n.createElement("div",{className:"sk-chase-dot"}),n.createElement("div",{className:"sk-chase-dot"}),n.createElement("div",{className:"sk-chase-dot"}),n.createElement("div",{className:"sk-chase-dot"}),n.createElement("div",{className:"sk-chase-dot"})))}const r=o.ZP.div`
  width: 100%;
  height: 100%;
  text-align: center;
`;function c(t){const{type:e="dot-circle"}=t;return n.createElement(r,null,(t=>{let e;return e=n.createElement(s,null),e})())}},1104:(t,e,a)=>{a.d(e,{_:()=>n});const n="https://api.kevinjobs.com:5000"},6277:(t,e,a)=>{a.r(e),a.d(e,{default:()=>p});var n=a(959),o=a(8519),i=a(3103),s=a(1104),r=a(1298),c=a(6175),d=a(5159),l=function(t,e,a,n){return new(a||(a=Promise))((function(o,i){function s(t){try{c(n.next(t))}catch(t){i(t)}}function r(t){try{c(n.throw(t))}catch(t){i(t)}}function c(t){var e;t.done?o(t.value):(e=t.value,e instanceof a?e:new a((function(t){t(e)}))).then(s,r)}c((n=n.apply(t,e||[])).next())}))};const h=i.ZP.div`
  display: flex;
  flex-wrap: wrap;
  padding: 0 8px;
  .add-photo {
    width: 100%;
    display: flex;
    justify-content: center;
    margin: 8px 0;
    button {
      width: 280px;
      height: 36px;
      border-radius: 5px;
    }
  }
  .photos {
    width: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
  .prev-next {
    width: 100%;
    text-align: center;
    margin: 16px auto;
    button {
      height: 36px;
      width: 120px;
      border-radius: 5px;
    }
  }
`,u=i.ZP.div`
  display: inline-block;
  margin: 8px;
  width: 180px;
  height: 120px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 5px;
  }
`;function p(){const t=(0,r.s0)(),[e,a]=n.useState(null),[i,p]=n.useState(0),[m,f]=n.useState(!1),b=({p:e})=>n.createElement(u,{onClick:()=>t(`/mobile/photo/${e.uid}`)},n.createElement(d.E,{src:s._+e.url.replace("static/","static/thumb-"),alt:e.title})),y=(t,e=10)=>{(()=>{l(this,void 0,void 0,(function*(){const n=yield(0,o.T6)(t,e,{type:"photo"});"string"!=typeof n?(a(n.data.posts),n.data.amount>=e?f(!0):f(!1)):window.alert(n)}))})()};return n.useEffect((()=>y(0)),[]),n.createElement(h,null,n.createElement("div",{className:"add-photo"},n.createElement(c.z,{type:"primary",onClick:()=>t("/mobile/photo/0")},"添加图片")),n.createElement("div",{className:"photos"},null==e?void 0:e.map((t=>n.createElement(b,{p:t})))),n.createElement("div",{className:"prev-next"},n.createElement(c.z,{disabled:0===i,onClick:()=>{i>=0&&(y(i-10),p(i-10))}},"Prev"),n.createElement(c.z,{disabled:!m,onClick:()=>{m&&(y(i+10),p(i+10))}},"Next")))}},891:(t,e,a)=>{a.d(e,{Z:()=>r});var n=a(120),o=a.n(n),i=a(1104);const s=o().create();s.defaults.baseURL=i._,s.interceptors.request.use((t=>(t.data=JSON.stringify(t.data),t.headers={"content-type":"application/json",Authorization:`Bearer ${localStorage.getItem("token")}`},t)));const r=s}}]);