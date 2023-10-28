"use strict";(self.webpackChunkkevinjobs=self.webpackChunkkevinjobs||[]).push([[313],{7964:(t,e,n)=>{n.d(e,{Gm:()=>r,ZE:()=>i,fo:()=>o,mS:()=>s,uh:()=>l});var a=n(1104);const i=a._+"/token",o=a._+"/post/list",s=a._+"/p",r=a._+"/user/list",l=a._+"/user"},8519:(t,e,n)=>{n.d(e,{CP:()=>c,SD:()=>h,T6:()=>r,fR:()=>l,q2:()=>d});var a=n(891),i=n(7964),o=function(t,e,n,a){return new(n||(n=Promise))((function(i,o){function s(t){try{l(a.next(t))}catch(t){o(t)}}function r(t){try{l(a.throw(t))}catch(t){o(t)}}function l(t){var e;t.done?i(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(s,r)}l((a=a.apply(t,e||[])).next())}))};const s=t=>Number(String(t).slice(0,10));function r(t,e,n){return o(this,void 0,void 0,(function*(){let o={offset:t,limit:e,status:"publish"};n&&(o=Object.assign(Object.assign({},o),n));const r=yield a.Z.get(i.fo,{params:o});if(0===r.data.code){const t=r.data,e=t.data.posts;return t.data.posts=e.map((t=>(t.createAt=s(t.createAt),t.updateAt=s(t.updateAt),t.publishAt=s(t.publishAt),t))),t}return r.data.msg}))}function l(t){return o(this,void 0,void 0,(function*(){const e=yield a.Z.delete(i.mS,{params:{uid:t}});return 0===e.data.code?e.data:e.data.msg}))}function c(t,e){return o(this,void 0,void 0,(function*(){const n=yield a.Z.put(i.mS,e,{params:{uid:t}});return 0===n.data.code?n.data:n.data.msg}))}function d(t){return o(this,void 0,void 0,(function*(){const e=yield a.Z.post(i.mS,t);return 0===e.data.code?e.data:e.data.msg}))}function h(t){return o(this,void 0,void 0,(function*(){const e=yield a.Z.get(i.mS,{params:{uid:t}});if(0===e.data.code){const t=e.data;return t.data.post.updateAt=s(t.data.post.updateAt),t.data.post.createAt=s(t.data.post.createAt),t.data.post.publishAt=s(t.data.post.publishAt),t}return e.data.msg}))}},5159:(t,e,n)=>{n.d(e,{E:()=>s});var a=n(959),i=n(541),o=function(t,e){var n={};for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&e.indexOf(a)<0&&(n[a]=t[a]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(a=Object.getOwnPropertySymbols(t);i<a.length;i++)e.indexOf(a[i])<0&&Object.prototype.propertyIsEnumerable.call(t,a[i])&&(n[a[i]]=t[a[i]])}return n};function s(t){const{style:e}=t,n=o(t,["style"]),[s,r]=a.useState(!1);return a.createElement(a.Fragment,null,a.createElement("img",Object.assign({},n,{onLoad:()=>{r(!0)},style:Object.assign(Object.assign({},e),{display:s?"block":"none"})})),!s&&a.createElement(i.g,null))}},541:(t,e,n)=>{n.d(e,{g:()=>l});var a=n(959),i=n(3103);const o=i.ZP.div`
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
`;function s(){return a.createElement(o,null,a.createElement("div",{className:"sk-chase"},a.createElement("div",{className:"sk-chase-dot"}),a.createElement("div",{className:"sk-chase-dot"}),a.createElement("div",{className:"sk-chase-dot"}),a.createElement("div",{className:"sk-chase-dot"}),a.createElement("div",{className:"sk-chase-dot"}),a.createElement("div",{className:"sk-chase-dot"})))}const r=i.ZP.div`
  width: 100%;
  height: 100%;
  text-align: center;
`;function l(t){const{type:e="dot-circle"}=t;return a.createElement(r,null,(t=>{let e;return e=a.createElement(s,null),e})())}},1104:(t,e,n)=>{n.d(e,{_:()=>a});const a="https://api.kevinjobs.com:5000"},7313:(t,e,n)=>{n.r(e),n.d(e,{default:()=>_});var a=n(959),i=n(2699),o=n.n(i);const s=a.createContext({width:0,height:0,toTop:0,toBottom:0}),r=t=>{const{children:e}=t,[n,i]=a.useState(window.innerWidth),[r,l]=a.useState(window.innerHeight),[c,d]=a.useState(0),[h,u]=a.useState(0);function p(){i(window.innerWidth),l(window.innerHeight)}let f;return f=()=>{const t=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0,e=document.documentElement.clientHeight||document.body.clientHeight||0,n=(document.documentElement.scrollHeight||document.body.scrollHeight||0)-t-e;d(t),u(n)},a.useEffect((()=>(window.addEventListener("resize",p),window.addEventListener("scroll",o().debounce(f,500)),()=>{window.removeEventListener("resize",p),window.removeEventListener("scroll",o().debounce(f,500))})),[]),a.createElement(s.Provider,{value:{width:n,height:r,toTop:c,toBottom:h}},e)},l=()=>{let t="desktop";const{width:e,height:n}=a.useContext(s);t=e<1080?"mobile":"desktop";return{device:t,clientWidth:e,clientHeight:n}},c=()=>{const{toTop:t,toBottom:e}=a.useContext(s);return{toTop:t,toBottom:e}};var d=n(1104),h=n(8519);function u(t,e){return Math.floor(Math.random()*(e-t))+t}var p=n(6824),f=n(3103);const m=f.ZP.div`
  width: 100%;
  height: 100vh;
  background-size: cover;
  background-position: center center;
  position: sticky;
  top: 0;
`,g=f.ZP.div`
  position: absolute;
  font-size: 48px;
  top: 10%;
  right: 5%;
  color: ${p.Z.white1};
  opacity: 0.7;
  writing-mode: vertical-rl;
  line-height: 1;
  letter-spacing: 16px;
  // background-color: ${p.Z.white2};
  p {
    &:nth-child(1) {
      margin-top: 0;
    }
    &:nth-child(2) {
      margin-top: 64px;
    }
  }
`;function y(t){const{cover:e,verse:n}=t;return a.createElement(m,{style:{backgroundImage:`url(${e})`},className:"gallery-cover"},a.createElement(g,null,n&&n.content.map(((t,e)=>a.createElement("p",{key:e},t)))))}var v=n(5726),w=n.n(v),b=n(8459),x=n(6055);const k=f.ZP.div`
  position: relative;
`,E=f.ZP.div``,A=a.forwardRef(((t,e)=>{const[n,i]=a.useState(0),{cols:o=3,colWidth:s=320,gutter:r=8,data:l,onPreview:c,shadow:d=!1}=t,h=Array.from({length:o},(()=>0));let u=0;const p=(t,e)=>{const n=(()=>{const t=Math.min(...h);return h.indexOf(t)})(),a=(s+r)*n,i=h[n],o=s/t.width*t.height;return h[n]+=o+r,e===l.length-1&&(u=Math.max(...h)),{left:a,top:i,position:"absolute",width:s,height:o,cursor:"pointer",boxShadow:d?"4px 4px 4px rgba(0,0,0,0.35)":""}};return a.useEffect((()=>{i(u)}),[...h,l.length]),a.createElement(k,{style:{width:(s+r)*o-r,height:n},ref:e},l&&l.map(((t,e)=>{const{key:n,child:i}=t,o=p(t,e);return a.createElement(E,{style:Object.assign({},o),key:n,"data-key":n,"data-index":e,onClick:e=>((t,e)=>{c(t,e)})(e,t)},i)})))}));A.displayName="Masonry";var S=n(5159),Z=n(541),P=function(t,e,n,a){return new(n||(n=Promise))((function(i,o){function s(t){try{l(a.next(t))}catch(t){o(t)}}function r(t){try{l(a.throw(t))}catch(t){o(t)}}function l(t){var e;t.done?i(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(s,r)}l((a=a.apply(t,e||[])).next())}))};const O=f.ZP.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  background-color: rgba(255, 255, 255, 0.9);
  z-index: 1;
  position: relative;
`,N=f.ZP.div`
  margin: 48px 0;
`,j=f.ZP.div``,C=f.ZP.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  .mask-desc-item {
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
    margin: 8px;
  }
  .i-icon {
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
  }
`,T={position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(255,249,247,1)",zIndex:10,transition:"all .3s ease-in-out",filter:"opacity(98%)"},W=(t,e,n)=>{const a=t.width/t.height;let i;const o=.8*n;i=t.height>o?o:t.height;let s=i*a;s>e&&(s=e,i=e/a);return{finalWidth:s,finalHeight:i,finalTop:50,finalLeft:(e-s)/2}};function z(){const[t,e]=a.useState(0),[n,i]=a.useState([]),[o,s]=a.useState(!1),[r,d]=a.useState(),[u,p]=a.useState(),[f,m]=a.useState(0),{clientWidth:g,clientHeight:y,device:v}=l(),{toBottom:w}=c(),b=a.useRef(),x=(t,e=12)=>P(this,void 0,void 0,(function*(){const a=yield(0,h.T6)(t,e,{type:"photo"});"string"!=typeof a&&(i(n.concat(B(a.data.posts))),a.data.amount<12?s(!1):s(!0))}));a.useEffect((()=>{x(t,12)}),[]),a.useEffect((()=>{o&&w<500&&(x(t+12,12),e(t+12))}),[w]);const k=t=>{u&&t.preventDefault(u)};return a.useEffect((()=>(window.addEventListener("wheel",k,{passive:!1}),()=>{window.removeEventListener("wheel",k)})),[u]),a.createElement(O,null,a.createElement(N,null,0!==n.length?a.createElement(A,{data:n,cols:"mobile"===v?2:4,colWidth:"mobile"===v?(g-12)/2:320,gutter:"mobile"===v?4:24,onPreview:(t,e)=>{t.preventDefault();const n=b.current,a=t.target.parentNode.dataset.index,i=void 0!==n?n.children[a]:"",o=i.cloneNode(!0),s=i.getBoundingClientRect().width,r=i.getBoundingClientRect().height,l=i.getBoundingClientRect().top,c=i.getBoundingClientRect().left,{finalWidth:h,finalHeight:u,finalTop:f,finalLeft:v}=W(e,g,y);o.style.transition="all 0.4s ease-in-out",o.style.position="fixed",o.style.boxShadow="4px 4px 16px 8px rgba(0,0,0,0.35)",o.style.zIndex=999999,o.style.width=s+"px",o.style.height=r+"px",o.style.left=c+"px",o.style.top=l+"px",i.style.display="none",n.append(o),d(e),p(a),m(u+f),setTimeout((()=>{o.style.width=h+"px",o.style.height=u+"px",o.style.left=v+"px",o.style.top=f+"px"}),20),o.onclick=t=>{t.preventDefault(),o.style.width=s+"px",o.style.height=r+"px",o.style.left=c+"px",o.style.top=l+"px",setTimeout((()=>{n.removeChild(o),i.style.display="block"}),400),p(void 0),d(void 0)}},ref:b,shadow:!0}):a.createElement(Z.g,null),a.createElement(j,{style:u&&T},a.createElement(C,{style:{visibility:u?"visible":"hidden",position:"absolute",top:f+8,left:"50%",transform:"translateX(-50%)",flexWrap:"wrap"}},r&&H(r)))),o&&a.createElement(Z.g,null))}const B=t=>t.map(((t,e)=>{let n;try{n=JSON.parse(t.exif)}catch(t){console.log(t)}const i=d._+t.url;return{id:t.id,uid:t.uid,source:i,key:t.uid,createAt:Number(String(t.createAt).slice(0,10)),updateAt:Number(String(t.updateAt).slice(0,10)),description:t.excerpt,title:t.title,child:a.createElement(S.E,{src:i,"data-index":e,alt:t.title,style:{width:"100%",height:"100%"}}),width:null==n?void 0:n.width,height:null==n?void 0:n.height}})),H=t=>a.createElement(a.Fragment,null,a.createElement("div",{style:{width:"100%",textAlign:"center"}},a.createElement("h3",null,t.title)),a.createElement("span",{className:"mask-desc-item"},a.createElement(b.Z,{theme:"outline",size:"20",fill:"#333",strokeWidth:2}),a.createElement("span",{style:{margin:"0 8px"}},w().unix(t.createAt).format("YYYY-MM-DD"))),a.createElement("span",{className:"mask-desc-item"},a.createElement(x.Z,{theme:"outline",size:"20",fill:"#333",strokeWidth:2}),a.createElement("span",{style:{margin:"0 8px"}},t.description||"还没有图片说明")));var L=function(t,e,n,a){return new(n||(n=Promise))((function(i,o){function s(t){try{l(a.next(t))}catch(t){o(t)}}function r(t){try{l(a.throw(t))}catch(t){o(t)}}function l(t){var e;t.done?i(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(s,r)}l((a=a.apply(t,e||[])).next())}))};function _(){const[t,e]=a.useState(),n=[{createAt:"2021-08-02",updateAt:"2023-10-25",id:1,uid:"4646aeraedfladlfhadiofag",title:"soso",author:"yiming",content:["来自星辰","归于星辰"]},{createAt:"2023-10-25",updateAt:"2023-10-25",id:1,uid:"daadsgasdfafa",title:"soso",author:"yiming",content:["须知少时凌云志","曾许人间第一流"]},{createAt:"2023-10-25",updateAt:"2023-10-25",id:1,uid:"4646aeraedfladlfdasfhadiofag",title:"soso",author:"yiming",content:["醉后不知天在水","满床清梦压星河"]},{createAt:"2023-10-25",updateAt:"2023-10-25",id:1,uid:"4646aeraedflad3asdfla34asfhadiofag",title:"soso",author:"yiming",content:["久雨寒蝉少","空山落叶深"]},{createAt:"2023-10-25",updateAt:"2023-10-25",id:1,uid:"4646aeraedflad3asdfla34asfhadiofag",title:"soso",author:"yiming",content:["梦里寻欢终是客","客醒五更空愁眠"]},{createAt:"2023-10-25",updateAt:"2023-10-25",id:1,uid:"4646aeraedflad3asdfla34asfhadiofag",title:"soso",author:"yiming",content:["氤氲旧时江上","曾是照影惊鸿"]}];return a.useEffect((()=>{(()=>{L(this,void 0,void 0,(function*(){const t=yield(0,h.T6)(0,10,{type:"cover"});if("string"!=typeof t){const n=u(0,t.data.amount);e(t.data.posts[n].url)}}))})()}),[]),a.createElement(r,null,a.createElement(y,{cover:d._+t,verse:n[u(0,n.length)]}),a.createElement(z,null))}},891:(t,e,n)=>{n.d(e,{Z:()=>r});var a=n(120),i=n.n(a),o=n(1104);const s=i().create();s.defaults.baseURL=o._,s.interceptors.request.use((t=>(t.data=JSON.stringify(t.data),t.headers={"content-type":"application/json",Authorization:`Bearer ${localStorage.getItem("token")}`},t)));const r=s}}]);