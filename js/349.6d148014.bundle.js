"use strict";(self.webpackChunkkevinjobs=self.webpackChunkkevinjobs||[]).push([[349],{7964:(e,t,a)=>{a.d(t,{Gm:()=>r,ZE:()=>i,fo:()=>o,mS:()=>s,uh:()=>c});var n=a(1104);const i=n._+"/token",o=n._+"/post/list",s=n._+"/p",r=n._+"/user/list",c=n._+"/user"},8519:(e,t,a)=>{a.d(t,{CP:()=>l,SD:()=>u,T6:()=>r,fR:()=>c,q2:()=>d});var n=a(891),i=a(7964),o=function(e,t,a,n){return new(a||(a=Promise))((function(i,o){function s(e){try{c(n.next(e))}catch(e){o(e)}}function r(e){try{c(n.throw(e))}catch(e){o(e)}}function c(e){var t;e.done?i(e.value):(t=e.value,t instanceof a?t:new a((function(e){e(t)}))).then(s,r)}c((n=n.apply(e,t||[])).next())}))};const s=e=>Number(String(e).slice(0,10));function r(e,t,a){return o(this,void 0,void 0,(function*(){let o={offset:e,limit:t,status:"publish"};a&&(o=Object.assign(Object.assign({},o),a));const r=yield n.Z.get(i.fo,{params:o});if(0===r.data.code){const e=r.data,t=e.data.posts;return e.data.posts=t.map((e=>(e.createAt=s(e.createAt),e.updateAt=s(e.updateAt),e.publishAt=s(e.publishAt),e))),e}return r.data.msg}))}function c(e){return o(this,void 0,void 0,(function*(){const t=yield n.Z.delete(i.mS,{params:{uid:e}});return 0===t.data.code?t.data:t.data.msg}))}function l(e,t){return o(this,void 0,void 0,(function*(){const a=yield n.Z.put(i.mS,t,{params:{uid:e}});return 0===a.data.code?a.data:a.data.msg}))}function d(e){return o(this,void 0,void 0,(function*(){const t=yield n.Z.post(i.mS,e);return 0===t.data.code?t.data:t.data.msg}))}function u(e){return o(this,void 0,void 0,(function*(){const t=yield n.Z.get(i.mS,{params:{uid:e}});if(0===t.data.code){const e=t.data;return e.data.post.updateAt=s(e.data.post.updateAt),e.data.post.createAt=s(e.data.post.createAt),e.data.post.publishAt=s(e.data.post.publishAt),e}return t.data.msg}))}},6175:(e,t,a)=>{a.d(t,{z:()=>c});var n=a(959),i=a(3103),o=a(6824),s=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(a[n[i]]=e[n[i]])}return a};const r=i.ZP.button`
  height: 24px;
  padding: 0px 8px;
  margin: 0px 4px;
  border: none;
  &:hover {
    opacity: 0.8;
  }
`;function c(e){const{type:t,children:a,danger:i,disabled:c=!1,onClick:l,style:d}=e,u=s(e,["type","children","danger","disabled","onClick","style"]);let h="";const p=o.Z.white1;switch(t){case"primary":h=o.Z.blue;break;case"success":h=o.Z.green;break;case"light":h=o.Z.white4;break;default:h=o.Z.dark}return i&&(h=o.Z.red),n.createElement(r,Object.assign({},u,{style:Object.assign({backgroundColor:c?o.Z.white6:h,color:p,cursor:c?"not-allowed":"pointer"},d),onClick:e=>{c?(e.preventDefault(),e.stopPropagation()):l(e)}}),a)}},5159:(e,t,a)=>{a.d(t,{E:()=>s});var n=a(959),i=a(5008),o=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(a[n[i]]=e[n[i]])}return a};function s(e){const{style:t}=e,a=o(e,["style"]),[s,r]=n.useState(!1);return n.createElement(n.Fragment,null,n.createElement("img",Object.assign({},a,{onLoad:()=>{r(!0)},style:Object.assign(Object.assign({},t),{display:s?"block":"none"})})),s&&n.createElement(i.g,{type:"2"}))}},5008:(e,t,a)=>{a.d(t,{g:()=>l});var n=a(959),i=a(3103);const o=i.ZP.div`
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
`;function s(){return n.createElement(o,null,n.createElement("div",{className:"sk-chase"},n.createElement("div",{className:"sk-chase-dot"}),n.createElement("div",{className:"sk-chase-dot"}),n.createElement("div",{className:"sk-chase-dot"}),n.createElement("div",{className:"sk-chase-dot"}),n.createElement("div",{className:"sk-chase-dot"}),n.createElement("div",{className:"sk-chase-dot"})))}function r(){return n.createElement("div",{className:"loading2"},n.createElement("div",null),n.createElement("div",null),n.createElement("div",null),n.createElement("div",null),n.createElement("div",null),n.createElement("div",null),n.createElement("div",null),n.createElement("div",null),n.createElement("div",null))}const c=i.ZP.div`
  width: 100%;
  height: 100%;
  text-align: center;
`;function l(e){const{type:t="dot-circle"}=e;return n.createElement(c,null,(e=>{let t;switch(e){case"dot-circle":default:t=n.createElement(s,null);break;case"2":t=n.createElement(r,null)}return t})(t))}},1104:(e,t,a)=>{a.d(t,{_:()=>n});const n="https://api.kevinjobs.com:5000"},6277:(e,t,a)=>{a.r(t),a.d(t,{default:()=>p});var n=a(959),i=a(8519),o=a(3103),s=a(1104),r=a(1298),c=a(6175),l=a(5159),d=function(e,t,a,n){return new(a||(a=Promise))((function(i,o){function s(e){try{c(n.next(e))}catch(e){o(e)}}function r(e){try{c(n.throw(e))}catch(e){o(e)}}function c(e){var t;e.done?i(e.value):(t=e.value,t instanceof a?t:new a((function(e){e(t)}))).then(s,r)}c((n=n.apply(e,t||[])).next())}))};const u=o.ZP.div`
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
`,h=o.ZP.div`
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
`;function p(){const e=(0,r.s0)(),[t,a]=n.useState(null),[o,p]=n.useState(0),[m,f]=n.useState(!1),b=({p:t})=>n.createElement(h,{onClick:()=>e(`/mobile/photo/${t.uid}`)},n.createElement(l.E,{src:s._+t.url.replace("static/","static/thumb-"),alt:t.title})),y=(e,t=8)=>{(()=>{d(this,void 0,void 0,(function*(){const n=yield(0,i.T6)(e,t,{type:"photo"});"string"!=typeof n?(a(n.data.posts),n.data.amount>=t?f(!0):f(!1)):window.alert(n)}))})()};return n.useEffect((()=>y(0)),[]),n.createElement(u,null,n.createElement("div",{className:"add-photo"},n.createElement(c.z,{type:"primary",onClick:()=>e("/mobile/photo/0")},"添加图片")),n.createElement("div",{className:"photos"},null==t?void 0:t.map((e=>n.createElement(b,{key:e.uid,p:e})))),n.createElement("div",{className:"prev-next"},n.createElement(c.z,{disabled:0===o,onClick:()=>{o>=0&&(y(o-8),p(o-8))}},"Prev"),n.createElement(c.z,{disabled:!m,onClick:()=>{m&&(y(o+8),p(o+8))}},"Next")))}},891:(e,t,a)=>{a.d(t,{Z:()=>r});var n=a(120),i=a.n(n),o=a(1104);const s=i().create();s.defaults.baseURL=o._,s.interceptors.request.use((e=>(e.data=JSON.stringify(e.data),e.headers={"content-type":"application/json",Authorization:`Bearer ${localStorage.getItem("token")}`},e)));const r=s}}]);