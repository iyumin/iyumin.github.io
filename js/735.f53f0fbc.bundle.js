"use strict";(self.webpackChunkkevinjobs=self.webpackChunkkevinjobs||[]).push([[735],{7964:(t,e,a)=>{a.d(e,{Gm:()=>s,ZE:()=>n,fo:()=>o,mS:()=>r,uh:()=>c});var i=a(1104);const n=i._+"/token",o=i._+"/post/list",r=i._+"/p",s=i._+"/user/list",c=i._+"/user"},8519:(t,e,a)=>{a.d(e,{CP:()=>d,SD:()=>u,T6:()=>s,fR:()=>c,q2:()=>l});var i=a(891),n=a(7964),o=function(t,e,a,i){return new(a||(a=Promise))((function(n,o){function r(t){try{c(i.next(t))}catch(t){o(t)}}function s(t){try{c(i.throw(t))}catch(t){o(t)}}function c(t){var e;t.done?n(t.value):(e=t.value,e instanceof a?e:new a((function(t){t(e)}))).then(r,s)}c((i=i.apply(t,e||[])).next())}))};const r=t=>Number(String(t).slice(0,10));function s(t,e,a){return o(this,void 0,void 0,(function*(){let o={offset:t,limit:e,status:"publish"};a&&(o=Object.assign(Object.assign({},o),a));const s=yield i.Z.get(n.fo,{params:o});if(0===s.data.code){const t=s.data,e=t.data.posts;return t.data.posts=e.map((t=>(t.createAt=r(t.createAt),t.updateAt=r(t.updateAt),t.publishAt=r(t.publishAt),t))),t}return s.data.msg}))}function c(t){return o(this,void 0,void 0,(function*(){const e=yield i.Z.delete(n.mS,{params:{uid:t}});return 0===e.data.code?e.data:e.data.msg}))}function d(t,e){return o(this,void 0,void 0,(function*(){const a=yield i.Z.put(n.mS,e,{params:{uid:t}});return 0===a.data.code?a.data:a.data.msg}))}function l(t){return o(this,void 0,void 0,(function*(){const e=yield i.Z.post(n.mS,t);return 0===e.data.code?e.data:e.data.msg}))}function u(t){return o(this,void 0,void 0,(function*(){const e=yield i.Z.get(n.mS,{params:{uid:t}});if(0===e.data.code){const t=e.data;return t.data.post.updateAt=r(t.data.post.updateAt),t.data.post.createAt=r(t.data.post.createAt),t.data.post.publishAt=r(t.data.post.publishAt),t}return e.data.msg}))}},6395:(t,e,a)=>{a.d(e,{O:()=>s});var i=a(959),n=a(3103),o=a(6824);const r=n.ZP.div`
  position: relative;
  background-color: ${o.Z.white3};
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
`;function s({width:t="100%",height:e=16}){return i.createElement(r,{className:"component-skeleton",style:{width:t,height:e}})}},1104:(t,e,a)=>{a.d(e,{_:()=>i});const i="https://api.kevinjobs.com:5000"},4735:(t,e,a)=>{a.r(e),a.d(e,{default:()=>E});var i=a(959),n=a(3103),o=a(1298),r=a(5726),s=a.n(r),c=a(6824),d=a(6395),l=a(1104),u=a(8519),m=function(t,e,a,i){return new(a||(a=Promise))((function(n,o){function r(t){try{c(i.next(t))}catch(t){o(t)}}function s(t){try{c(i.throw(t))}catch(t){o(t)}}function c(t){var e;t.done?n(t.value):(e=t.value,e instanceof a?e:new a((function(t){t(e)}))).then(r,s)}c((i=i.apply(t,e||[])).next())}))};const h=n.ZP.div`
  padding: 48px 0;
  background-color: ${c.Z.white};
`,p=n.ZP.div`
  margin: 0 auto;
  max-width: 820px;
`,f=n.ZP.div`
  width: 100%;
  margin: 16px 0;
  border-radius: 5px;
  position: relative;
  transition: all .3s ease-in-out;
  display: flex;
  border: 1px solid ${c.Z.white4};
  &:hover {
    border-color: ${c.Z.primary};
  }
`,v=n.ZP.div`
  width: 44%;
  min-height: 160px;
  max-height: 300px;
  transition: width .2s ease-in-out;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    cursor: pointer;
    border-radius: 5px 0 0 5px;
  }
`,g=n.ZP.div`
  position: relative;
  width: 56%;
  color: ${c.Z.dark};
  border-radius: 0 4px 4px 0;
  flex-grow: 1;
  h3.info-item {
    cursor: pointer;
    &:hover {
      color: ${c.Z.blue};
    }
  }
  .info-author-date {
    position: absolute;
    left: 16px;
    bottom: 16px;
    font-size: 12px;
    color: ${c.Z.dark};
    .info-author,.info-date {
      display: inline-block;
      margin-right: 16px;
    }
    .info-date {
      color: ${c.Z.white6};
    }
  }
`,b=n.ZP.div`
  max-width: 820px;
  margin: 0 auto;
  padding: 16px 0;
  text-align: center;
  border: 1px solid ${c.Z.white4};
  cursor: pointer;
  border-radius: 4px;
  &:hover {
    border-color: ${c.Z.primary};
  }
`,w=n.ZP.div`
  background-color: ${c.Z.white1};
  margin: 8px 0;
  display: flex;
  .right {
    margin-left: 16px;
  }
  .item {
    margin: 0 0 20px 0;
  }
`;function x(t){const e=[];for(let a=0;a<(null==t?void 0:t.length);a++){const i=t[a];i.url=l._+i.url.replace("static/","static/thumb-"),e.push(i)}return e}function E(){const[t,e]=i.useState(),[a,n]=i.useState(0),[r,d]=i.useState(!0),l=(0,o.s0)(),w=t=>{l(`/article/${t.uid}`)};return i.useEffect((()=>{(()=>{m(this,void 0,void 0,(function*(){const t=yield(0,u.T6)(a,5,{type:"article"});"string"!=typeof t&&(e(x(t.data.posts)),t.data.amount<5&&d(!1))}))})()}),[]),i.createElement(h,null,i.createElement(p,null,t?t.map((t=>i.createElement(f,{key:t.uid},i.createElement(v,{onClick:()=>w(t),className:"cover"},i.createElement("img",{src:t.url,alt:t.title})),i.createElement(g,null,i.createElement("div",{style:{margin:16}},i.createElement("h3",{className:"info-item",onClick:()=>w(t)},t.title),i.createElement("div",{className:"info-item",style:{color:c.Z.white7}},t.excerpt),i.createElement("div",{className:"info-author-date info-item"},i.createElement("div",{className:"info-author"},t.author),i.createElement("div",{className:"info-date"},s().unix(t.updateAt).format("YYYY年M月D日")))))))):y()),r&&i.createElement(b,{role:"button",onClick:()=>m(this,void 0,void 0,(function*(){const i=yield(0,u.T6)(a+5,5,{type:"article"});"string"!=typeof i?(e(t.concat(x(i.data.posts))),n(a+5)):d(!1)}))},"点击加载更多"))}const y=()=>{const t=[];for(let e=0;e<6;e++)t.push(i.createElement(w,{className:"wait"},i.createElement("div",{className:"left"},i.createElement(d.O,{height:200,width:320})),i.createElement("div",{className:"right"},i.createElement("div",{className:"item"},i.createElement(d.O,{height:20,width:460})),i.createElement("div",{className:"item"},i.createElement(d.O,{height:16,width:260})),i.createElement("div",{className:"item"},i.createElement(d.O,{height:16,width:180})),i.createElement("div",{className:"item"},i.createElement(d.O,{height:16,width:240})),i.createElement("div",{className:"item"},i.createElement(d.O,{height:16,width:300})),i.createElement("div",{className:"item"},i.createElement(d.O,{height:12,width:380})))));return t}},891:(t,e,a)=>{a.d(e,{Z:()=>s});var i=a(120),n=a.n(i),o=a(1104);const r=n().create();r.defaults.baseURL=o._,r.interceptors.request.use((t=>(t.data=JSON.stringify(t.data),t.headers={"content-type":"application/json",Authorization:`Bearer ${localStorage.getItem("token")}`},t)));const s=r}}]);