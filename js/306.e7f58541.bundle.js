"use strict";(self.webpackChunklumie=self.webpackChunklumie||[]).push([[306],{5577:(t,e,i)=>{i.d(e,{CP:()=>r,SD:()=>u,T6:()=>s,fR:()=>d,q2:()=>c});var n=i(6433),o=i(8432),a=i(9647),l=function(t,e,i,n){return new(i||(i=Promise))((function(o,a){function l(t){try{d(n.next(t))}catch(t){a(t)}}function s(t){try{d(n.throw(t))}catch(t){a(t)}}function d(t){var e;t.done?o(t.value):(e=t.value,e instanceof i?e:new i((function(t){t(e)}))).then(l,s)}d((n=n.apply(t,e||[])).next())}))};function s(t,e,i){return l(this,void 0,void 0,(function*(){let l={offset:t,limit:e,status:"publish"};i&&(l=Object.assign(Object.assign({},l),i));const s=yield n.Z.get(o.fo,{params:l});if(0===s.data.code){const t=s.data,e=t.data.posts;return t.data.posts=e.map((t=>(h(t),t.createAt=(0,a.TH)(t.createAt),t.updateAt=(0,a.TH)(t.updateAt),t.publishAt=(0,a.TH)(t.publishAt),t))),t}return s.data.msg}))}function d(t){return l(this,void 0,void 0,(function*(){const e=yield n.Z.delete(o.mS,{params:{uid:t}});return 0===e.data.code?e.data:e.data.msg}))}function r(t,e){return l(this,void 0,void 0,(function*(){f(e);const i=yield n.Z.put(o.mS,e,{params:{uid:t}});return 0===i.data.code?i.data:i.data.msg}))}function c(t){return l(this,void 0,void 0,(function*(){f(t);const e=yield n.Z.post(o.mS,t);return 0===e.data.code?e.data:e.data.msg}))}function u(t){return l(this,void 0,void 0,(function*(){const e=yield n.Z.get(o.mS,{params:{uid:t}});if(0===e.data.code){const t=e.data;return h(t.data.post),t.data.post.updateAt=(0,a.TH)(t.data.post.updateAt),t.data.post.createAt=(0,a.TH)(t.data.post.createAt),t.data.post.publishAt=(0,a.TH)(t.data.post.publishAt),t}return e.data.msg}))}const h=t=>t.url=o._n+t.url,f=t=>t.url=t.url.replace(o._n,"")},5163:(t,e,i)=>{i.d(e,{g:()=>r});var n=i(2983),o=i(9606);const a=o.ZP.div`
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
`;function l(){return n.createElement(a,null,n.createElement("div",{className:"sk-chase"},n.createElement("div",{className:"sk-chase-dot"}),n.createElement("div",{className:"sk-chase-dot"}),n.createElement("div",{className:"sk-chase-dot"}),n.createElement("div",{className:"sk-chase-dot"}),n.createElement("div",{className:"sk-chase-dot"}),n.createElement("div",{className:"sk-chase-dot"})))}function s(){return n.createElement("div",{className:"loading2"},n.createElement("div",null),n.createElement("div",null),n.createElement("div",null),n.createElement("div",null),n.createElement("div",null),n.createElement("div",null),n.createElement("div",null),n.createElement("div",null),n.createElement("div",null))}const d=o.ZP.div`
  width: 100%;
  height: 100%;
  text-align: center;
`;function r(t){const{type:e="dot-circle"}=t;return n.createElement(d,null,(t=>{let e;switch(t){case"dot-circle":default:e=n.createElement(l,null);break;case"2":e=n.createElement(s,null)}return e})(e))}},8432:(t,e,i)=>{i.d(e,{Gm:()=>d,IW:()=>o,ZE:()=>a,_n:()=>n,fo:()=>l,mS:()=>s,uh:()=>r});const n="https://api.kevinjobs.com:5000",o=n+"/upload",a=n+"/token",l=n+"/post/list",s=n+"/p",d=n+"/user/list",r=n+"/user"},9306:(t,e,i)=>{i.r(e),i.d(e,{default:()=>N});var n=i(2983),o=i(9378),a=i.n(o);const l=n.createContext({width:0,height:0,toTop:0,toBottom:0}),s=t=>{const{children:e}=t,[i,o]=n.useState(window.innerWidth),[s,d]=n.useState(window.innerHeight),[r,c]=n.useState(0),[u,h]=n.useState(0);function f(){o(window.innerWidth),d(window.innerHeight)}let m;return m=()=>{const t=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0,e=document.documentElement.clientHeight||document.body.clientHeight||0,i=(document.documentElement.scrollHeight||document.body.scrollHeight||0)-t-e;c(t),h(i)},n.useEffect((()=>(window.addEventListener("resize",f),window.addEventListener("scroll",a().debounce(m,500)),()=>{window.removeEventListener("resize",f),window.removeEventListener("scroll",a().debounce(m,500))})),[]),n.createElement(l.Provider,{value:{width:i,height:s,toTop:r,toBottom:u}},e)},d=()=>{let t="desktop";const{width:e,height:i}=n.useContext(l);t=e<1080?"mobile":"desktop";return{device:t,clientWidth:e,clientHeight:i}},r=()=>{const{toTop:t,toBottom:e}=n.useContext(l);return{toTop:t,toBottom:e}};var c=i(5577),u=i(9647),h=i(7952),f=i(9606);const m=f.ZP.div`
  width: 100%;
  height: 100vh;
  background-size: cover;
  background-position: center center;
  position: sticky;
  top: 0;
`,p=f.ZP.div`
  position: absolute;
  font-size: 48px;
  top: 10%;
  right: 5%;
  color: ${h.Z.white1};
  opacity: 0.7;
  writing-mode: vertical-rl;
  line-height: 1;
  letter-spacing: 16px;
  // background-color: ${h.Z.white2};
  p {
    &:nth-child(1) {
      margin-top: 0;
    }
    &:nth-child(2) {
      margin-top: 64px;
    }
  }
`;function v(t){const{cover:e,verse:i}=t;return n.createElement(m,{style:{backgroundImage:`url(${e})`},className:"gallery-cover"},n.createElement(p,null,i&&i.content.map(((t,e)=>n.createElement("p",{key:e},t)))))}var g=i(2437);const y=f.ZP.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0,0,0,0.98);
`,w=t=>{const{width:e,height:i,top:o,left:a,finalLeft:l,finalHeight:s,finalWidth:d,finalTop:r,index:c}=t,[u,h]=n.useState(!1),f=n.useRef(),[m,p]=(0,g.q_)((()=>({left:0,top:0,width:e,height:i,position:"absolute",zIndex:1,visibility:"hidden"})),[]);return n.createElement("div",{key:t.title,ref:f,onClick:t=>{var n;t.preventDefault(),t.stopPropagation();const o=null===(n=null==f?void 0:f.current)||void 0===n?void 0:n.getBoundingClientRect();u?(h(!1),p.start({from:{position:"fixed",width:d,height:s,left:l,top:r,zIndex:999,visibility:"visible"},to:{position:"fixed",width:e,height:i,left:o.left,top:o.top,zIndex:1,visibility:"visible"},config:{mass:.8,tension:280,friction:26}}),setTimeout((()=>{p.set({position:"absolute",left:0,top:0,zIndex:1,visibility:"hidden"})}),250)):(p.start({from:{position:"fixed",width:e,height:i,left:o.left,top:o.top,zIndex:999,visibility:"visible"},to:{position:"fixed",width:d,height:s,left:l,top:r,zIndex:999,visibility:"visible"},config:{mass:.5,tension:270,friction:16}}),h(!0))},className:"masonry-item",style:{width:e,height:i,top:o,left:a}},n.createElement("div",null,n.createElement("img",{src:t.src,alt:t.title})),n.createElement(g.q.div,{style:Object.assign({},m)},n.createElement("img",{src:t.src,alt:t.title})),u&&n.createElement(y,{style:{zIndex:998}}))},b=f.ZP.div`
  position: relative;
  .masonry-item {
    position: absolute;
    cursor: pointer;
    box-shadow: 4px 4px 4px rgba(0,0,0,0.35);
    img {
      width: 100%;
      height: 100%;
    }
  }
`,k=t=>{const[e,i]=n.useState(0),{clientWidth:o,clientHeight:a}=d(),l=n.useRef(),{cols:s=3,colWidth:r=320,gutter:c=8,items:u}=t,h=Array.from({length:s},(()=>0));let f=0;const m=(t,e,i)=>{const n=(()=>{const t=Math.min(...h);return h.indexOf(t)})(),o=(r+c)*n,a=h[n],l=r/t*e;return h[n]+=l+c,i===u.length-1&&(f=Math.max(...h)),{left:o,top:a,width:r,height:l}};return n.useEffect((()=>{i(f)}),[...h,u.length]),n.createElement(b,{style:{width:(r+c)*s-c,height:e},ref:l},u&&u.map(((t,e)=>{const{left:i,top:l,width:s,height:d}=m(t.width,t.height,e),{finalWidth:r,finalHeight:c,finalLeft:u,finalTop:h}=((t,e,i,n)=>{const o=t/e;let a;const l=.9*n;a=e>l?l:e;let s=a*o;return s>i&&(s=i,a=i/o),{finalWidth:s,finalHeight:a,finalTop:(n-a)/2,finalLeft:(i-s)/2}})(t.width,t.height,o,a);return n.createElement(w,{key:t.src,title:t.title,src:t.src,left:i,top:l,width:s,height:d,index:e,finalWidth:r,finalHeight:c,finalLeft:u,finalTop:h,originHeight:t.height,originWidth:t.width})})))};k.displayName="Masonry";var E=i(5163),x=function(t,e,i,n){return new(i||(i=Promise))((function(o,a){function l(t){try{d(n.next(t))}catch(t){a(t)}}function s(t){try{d(n.throw(t))}catch(t){a(t)}}function d(t){var e;t.done?o(t.value):(e=t.value,e instanceof i?e:new i((function(t){t(e)}))).then(l,s)}d((n=n.apply(t,e||[])).next())}))};const A=f.ZP.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  background-color: rgba(255, 255, 255, 0.9);
  z-index: 1;
  position: relative;
`,T=f.ZP.div`
  margin: 48px 0;
`;f.ZP.div``,f.ZP.div`
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
`;function H(){const[t,e]=n.useState(0),[i,o]=n.useState([]),[a,l]=n.useState(!1),{clientWidth:s,device:u}=d(),{toBottom:h}=r(),f=(n,a=12)=>x(this,void 0,void 0,(function*(){const s=yield(0,c.T6)(n,a,{type:"photo"});"string"!=typeof s&&(o(i.concat(S(s.data.posts))),12+t>=s.data.totals?l(!1):(l(!0),e(t+12)))}));return n.useEffect((()=>{f(t,12)}),[]),n.useEffect((()=>{a&&h<500&&f(t,12)}),[h]),n.createElement(A,null,n.createElement(T,null,0!==i.length?n.createElement(k,{items:i,cols:"mobile"===u?2:4,colWidth:"mobile"===u?(s-12)/2:320,gutter:"mobile"===u?4:24,shadow:!0}):n.createElement(E.g,null)),a&&n.createElement(E.g,null))}const S=t=>t.map((t=>{let e;try{e=JSON.parse(t.exif)}catch(t){console.log(t)}return{src:t.url,width:null==e?void 0:e.width,height:null==e?void 0:e.height}}));var Z=function(t,e,i,n){return new(i||(i=Promise))((function(o,a){function l(t){try{d(n.next(t))}catch(t){a(t)}}function s(t){try{d(n.throw(t))}catch(t){a(t)}}function d(t){var e;t.done?o(t.value):(e=t.value,e instanceof i?e:new i((function(t){t(e)}))).then(l,s)}d((n=n.apply(t,e||[])).next())}))};function N(){const[t,e]=n.useState(),i=[{createAt:"2021-08-02",updateAt:"2023-10-25",id:1,uid:"4646aeraedfladlfhadiofag",title:"soso",author:"yiming",content:["来自星辰","归于星辰"]},{createAt:"2023-10-25",updateAt:"2023-10-25",id:1,uid:"daadsgasdfafa",title:"soso",author:"yiming",content:["须知少时凌云志","曾许人间第一流"]},{createAt:"2023-10-25",updateAt:"2023-10-25",id:1,uid:"4646aeraedfladlfdasfhadiofag",title:"soso",author:"yiming",content:["醉后不知天在水","满床清梦压星河"]},{createAt:"2023-10-25",updateAt:"2023-10-25",id:1,uid:"4646aeraedflad3asdfla34asfhadiofag",title:"soso",author:"yiming",content:["久雨寒蝉少","空山落叶深"]},{createAt:"2023-10-25",updateAt:"2023-10-25",id:1,uid:"4646aeraedflad3asdfla34asfhadiofag",title:"soso",author:"yiming",content:["梦里寻欢终是客","客醒五更空愁眠"]},{createAt:"2023-10-25",updateAt:"2023-10-25",id:1,uid:"4646aeraedflad3asdfla34asfhadiofag",title:"soso",author:"yiming",content:["氤氲旧时江上","曾是照影惊鸿"]}];return n.useEffect((()=>{(()=>{Z(this,void 0,void 0,(function*(){const t=yield(0,c.T6)(0,10,{type:"cover"});if("string"!=typeof t){const i=t.data.amount,n=(0,u.gX)(0,i);e(t.data.posts[n].url)}}))})()}),[]),n.createElement(s,null,n.createElement(v,{cover:t,verse:i[(0,u.gX)(0,i.length)]}),n.createElement(H,null))}},6433:(t,e,i)=>{i.d(e,{Z:()=>s});var n=i(5326),o=i.n(n),a=i(8432);const l=o().create();l.defaults.baseURL=a._n,l.interceptors.request.use((t=>(t.data=JSON.stringify(t.data),t.headers={"content-type":"application/json",Authorization:`Bearer ${localStorage.getItem("token")}`},t)));const s=l},9647:(t,e,i)=>{i.d(e,{TH:()=>s,gX:()=>a,iX:()=>l});var n=i(7860),o=i.n(n);function a(t,e){return Math.floor(Math.random()*(e-t))+t}const l=t=>{var e,i,n,a,l,s,d,r,c,u,h,f,m;return{createDate:o()(null===(e=t.CreateDate)||void 0===e?void 0:e.value).unix(),modifyDate:o()(null===(i=t.ModifyDate)||void 0===i?void 0:i.value).unix(),fileType:null===(n=t.FileType)||void 0===n?void 0:n.value,iso:null===(a=t.ISOSpeedRatings)||void 0===a?void 0:a.value,width:(null===(l=t["Image Width"])||void 0===l?void 0:l.value)|(null===(s=t.ImageWidth)||void 0===s?void 0:s.value),height:(null===(d=t["Image Height"])||void 0===d?void 0:d.value)|(null===(r=t.ImageHeight)||void 0===r?void 0:r.value),lens:null===(c=t.Lens)||void 0===c?void 0:c.value,focal:null===(u=t.FocalLength)||void 0===u?void 0:u.description,focalNumber:null===(h=t.FNumber)||void 0===h?void 0:h.description,exposure:null===(f=t.ExposureTime)||void 0===f?void 0:f.description,model:null===(m=t.Model)||void 0===m?void 0:m.description}},s=t=>Number(String(t).slice(0,10))}}]);