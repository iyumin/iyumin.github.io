"use strict";(self.webpackChunkkevinjobs=self.webpackChunkkevinjobs||[]).push([[159],{7964:(e,t,n)=>{n.d(t,{Gm:()=>o,ZE:()=>i,fo:()=>r,mS:()=>l,uh:()=>c});var a=n(1104);const i=a._+"/token",r=a._+"/post/list",l=a._+"/p",o=a._+"/user/list",c=a._+"/user"},8519:(e,t,n)=>{n.d(t,{CP:()=>d,SD:()=>u,T6:()=>o,fR:()=>c,q2:()=>s});var a=n(891),i=n(7964),r=function(e,t,n,a){return new(n||(n=Promise))((function(i,r){function l(e){try{c(a.next(e))}catch(e){r(e)}}function o(e){try{c(a.throw(e))}catch(e){r(e)}}function c(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(l,o)}c((a=a.apply(e,t||[])).next())}))};const l=e=>Number(String(e).slice(0,10));function o(e,t,n){return r(this,void 0,void 0,(function*(){let r={offset:e,limit:t,status:"publish"};n&&(r=Object.assign(Object.assign({},r),n));const o=yield a.Z.get(i.fo,{params:r});if(0===o.data.code){const e=o.data,t=e.data.posts;return e.data.posts=t.map((e=>(e.createAt=l(e.createAt),e.updateAt=l(e.updateAt),e.publishAt=l(e.publishAt),e))),e}return o.data.msg}))}function c(e){return r(this,void 0,void 0,(function*(){const t=yield a.Z.delete(i.mS,{params:{uid:e}});return 0===t.data.code?t.data:t.data.msg}))}function d(e,t){return r(this,void 0,void 0,(function*(){const n=yield a.Z.put(i.mS,t,{params:{uid:e}});return 0===n.data.code?n.data:n.data.msg}))}function s(e){return r(this,void 0,void 0,(function*(){const t=yield a.Z.post(i.mS,e);return 0===t.data.code?t.data:t.data.msg}))}function u(e){return r(this,void 0,void 0,(function*(){const t=yield a.Z.get(i.mS,{params:{uid:e}});if(0===t.data.code){const e=t.data;return e.data.post.updateAt=l(e.data.post.updateAt),e.data.post.createAt=l(e.data.post.createAt),e.data.post.publishAt=l(e.data.post.publishAt),e}return t.data.msg}))}},6175:(e,t,n)=>{n.d(t,{z:()=>c});var a=n(959),i=n(3103),r=n(6824),l=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(a=Object.getOwnPropertySymbols(e);i<a.length;i++)t.indexOf(a[i])<0&&Object.prototype.propertyIsEnumerable.call(e,a[i])&&(n[a[i]]=e[a[i]])}return n};const o=i.ZP.button`
  height: 24px;
  padding: 0px 8px;
  margin: 0px 4px;
  border: none;
  &:hover {
    opacity: 0.8;
  }
`;function c(e){const{type:t,children:n,danger:i,disabled:c=!1,onClick:d,style:s}=e,u=l(e,["type","children","danger","disabled","onClick","style"]);let h="";const m=r.Z.white1;switch(t){case"primary":h=r.Z.blue;break;case"success":h=r.Z.green;break;case"light":h=r.Z.white4;break;default:h=r.Z.dark}return i&&(h=r.Z.red),a.createElement(o,Object.assign({},u,{style:Object.assign({backgroundColor:c?r.Z.white6:h,color:m,cursor:c?"not-allowed":"pointer"},s),onClick:e=>{c?(e.preventDefault(),e.stopPropagation()):d(e)}}),n)}},6395:(e,t,n)=>{n.d(t,{O:()=>o});var a=n(959),i=n(3103),r=n(6824);const l=i.ZP.div`
  position: relative;
  background-color: ${r.Z.white3};
  overflow: hidden;
  &::after {
    display: block;
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    transform: translateX(-100%);
    background: linear-gradient(90deg, transparent, rgba(216, 216, 216, 0.253), transparent);
    animation: loading 1.5s infinite;
  }
  @keyframes loading {
    from { left: -100%; }
    to { left: 120%; }
  }
`;function o({width:e="100%",height:t=16}){return a.createElement(l,{className:"component-skeleton",style:{width:e,height:t}})}},1104:(e,t,n)=>{n.d(t,{_:()=>a});const a="https://api.kevinjobs.com:5000"},9159:(e,t,n)=>{n.r(t),n.d(t,{default:()=>y});var a=n(959),i=n(3103),r=n(5726),l=n.n(r),o=n(1298);const c=(0,n(7166).a1)("left",!0,(function(e){return a.createElement("svg",{width:e.size,height:e.size,viewBox:"0 0 48 48",fill:"none"},a.createElement("path",{d:"M31 36L19 24L31 12",stroke:e.colors[0],strokeWidth:e.strokeWidth,strokeLinecap:e.strokeLinecap,strokeLinejoin:e.strokeLinejoin}))}));var d=n(6395),s=n(8519),u=n(6175);const h=i.ZP.div`
  width: 100%;
`,m=i.ZP.div`
  width: 100%;
  height: 100px;
  border: 1px solid #999;
  border-radius: 4px;
  div {
    outline: none;
  }
`,p=i.ZP.div`
  max-width: 100%;
  border-top: 1px solid #d1d1d1;
  padding: 16px;
  div {
    padding: 4px 0;
  }
`;function g(){const[e,t]=a.useState([]);return a.createElement(h,null,a.createElement("div",null,a.createElement("h3",null,"评论")),a.createElement(m,null,a.createElement("div",{contentEditable:!0,onKeyDown:n=>{const a=n.target;"Enter"===n.key&&(n.preventDefault(),t(e.concat([{createAt:0,updateAt:0,content:a.innerText,id:void 0,uid:void 0,author:"匿名"}])))},style:{margin:8,height:84}})),a.createElement("div",{style:{marginTop:16,textAlign:"right",width:"100%"}},a.createElement(u.z,{onClick:e=>e.preventDefault()},"提交"),a.createElement(u.z,{onClick:e=>e.preventDefault(),danger:!0},"清空")),a.createElement("div",null,a.createElement("h4",null,"热门评论")),a.createElement("div",null,e.length?e.map((e=>a.createElement(p,{key:e.uid},a.createElement("div",{style:{color:"#777"}},e.author),a.createElement("div",null,e.content)))):"还没有评论"))}var v=n(6824),f=function(e,t,n,a){return new(n||(n=Promise))((function(i,r){function l(e){try{c(a.next(e))}catch(e){r(e)}}function o(e){try{c(a.throw(e))}catch(e){r(e)}}function c(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(l,o)}c((a=a.apply(e,t||[])).next())}))};const E=i.ZP.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 32px 16px;
  background-color: #fff;
  .back {
    padding: 0 16px;
    margin-bottom: 24px;
    div.back-txt {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 8px 20px 8px 12px;
      background-color: ${v.Z.white3};
      width: fit-content;
      border-radius: 4px;
      cursor: pointer;
      &:hover {
        background-color: ${v.Z.white4};
      }
    }
  }
`,x=i.ZP.div`
  width: 100%;
  height: fit-content;
  padding: 16px 0;
  h2,.date,.author {
    max-width: 1000px;
    margin: 0 auto;
    padding: 0 16px;
  }
  .author {
    padding: 16px 0 0 16px;
    color: ${v.Z.white7};
    font-size: 0.9rem;
  }
  .date {
    padding: 16px 16px 0 16px;
    color: ${v.Z.white7};
    font-size: 0.9rem;
  }
`,b=i.ZP.div`
  line-height: 1.8;
  padding: 0 16px 32px 16px;
`,w=i.ZP.div`
  .item {
    margin: 16px 0;
  }
  .content {
    margin-top: 60px;
    div {
      margin: 18px 0;
    }
  }
`;function y(){const[e,t]=a.useState(),n=(0,o.UO)();return a.useEffect((()=>{const{uid:e}=n;(()=>{f(this,void 0,void 0,(function*(){const n=yield(0,s.SD)(e);"string"!=typeof n&&t(n.data.post)}))})()}),[]),a.createElement(E,null,e?k(e):O(),a.createElement("div",{style:{marginTop:64,maxWidth:1e3,padding:16}},a.createElement(g,null)))}const k=e=>a.createElement("div",{className:"article-content"},a.createElement("div",{className:"back"},a.createElement("div",{className:"back-txt",onClick:()=>history.go(-1)},a.createElement(c,{theme:"outline",size:"24",fill:"#333"}),a.createElement("span",null,"返回"))),a.createElement(x,{className:"article-page-header"},a.createElement("h2",null,e.title),a.createElement("div",{className:"author"},e.author),a.createElement("div",{className:"date"},l().unix(e.createAt).format("YYYY年M月D日"))),a.createElement(b,null,a.createElement("div",{dangerouslySetInnerHTML:{__html:e.content}}))),O=()=>a.createElement(w,null,a.createElement("div",{className:"title item"},a.createElement(d.O,{height:50})),a.createElement("div",{className:"author item"},a.createElement(d.O,{height:12,width:80})),a.createElement("div",{className:"datetime item"},a.createElement(d.O,{height:12,width:150})),a.createElement("div",{className:"content item"},a.createElement("div",null,a.createElement(d.O,{height:16,width:500})),a.createElement("div",null,a.createElement(d.O,{height:16,width:300})),a.createElement("div",null,a.createElement(d.O,{height:16,width:200})),a.createElement("div",null,a.createElement(d.O,{height:16,width:320})),a.createElement("div",null,a.createElement(d.O,{height:16,width:400})),a.createElement("div",null,a.createElement(d.O,{height:16})),a.createElement("div",null,a.createElement(d.O,{height:16,width:210})),a.createElement("div",null,a.createElement(d.O,{height:16,width:300})),a.createElement("div",null,a.createElement(d.O,{height:16,width:600})),a.createElement("div",null,a.createElement(d.O,{height:16,width:80})),a.createElement("div",null,a.createElement(d.O,{height:16})),a.createElement("div",null,a.createElement(d.O,{height:16,width:230})),a.createElement("div",null,a.createElement(d.O,{height:16,width:400}))))},891:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(120),i=n.n(a),r=n(1104);const l=i().create();l.defaults.baseURL=r._,l.interceptors.request.use((e=>(e.data=JSON.stringify(e.data),e.headers={"content-type":"application/json",Authorization:`Bearer ${localStorage.getItem("token")}`},e)));const o=l}}]);