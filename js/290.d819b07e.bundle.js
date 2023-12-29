"use strict";(self.webpackChunklumie=self.webpackChunklumie||[]).push([[290],{5577:(e,t,i)=>{i.d(t,{CP:()=>c,SD:()=>d,T6:()=>s,fR:()=>l,q2:()=>r});var n=i(6433),a=i(8432),o=i(9647);async function s(e,t,i){let s={offset:e,limit:t,status:"publish"};i&&(s={...s,...i});const l=await n.Z.get(a.fo,{params:s});if(0===l.data.code){const e=l.data,t=e.data.posts;return e.data.posts=t.map((e=>(h(e),e.createAt=(0,o.TH)(e.createAt),e.updateAt=(0,o.TH)(e.updateAt),e.publishAt=(0,o.TH)(e.publishAt),e))),e}return l.data.msg}async function l(e){const t=await n.Z.delete(a.mS,{params:{uid:e}});return 0===t.data.code?t.data:t.data.msg}async function c(e,t){u(t);const i=await n.Z.put(a.mS,t,{params:{uid:e}});return 0===i.data.code?i.data:i.data.msg}async function r(e){u(e);const t=await n.Z.post(a.mS,e);return 0===t.data.code?t.data:t.data.msg}async function d(e){const t=await n.Z.get(a.mS,{params:{uid:e}});if(0===t.data.code){const e=t.data;return h(e.data.post),e.data.post.updateAt=(0,o.TH)(e.data.post.updateAt),e.data.post.createAt=(0,o.TH)(e.data.post.createAt),e.data.post.publishAt=(0,o.TH)(e.data.post.publishAt),e}return t.data.msg}const h=e=>e.url=a._n+e.url,u=e=>e.url=e.url?.replace(a._n,"")},5163:(e,t,i)=>{i.d(t,{g:()=>r});var n=i(2983),a=i(9606);const o=a.ZP.div`
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
`;function s(){return n.createElement(o,null,n.createElement("div",{className:"sk-chase"},n.createElement("div",{className:"sk-chase-dot"}),n.createElement("div",{className:"sk-chase-dot"}),n.createElement("div",{className:"sk-chase-dot"}),n.createElement("div",{className:"sk-chase-dot"}),n.createElement("div",{className:"sk-chase-dot"}),n.createElement("div",{className:"sk-chase-dot"})))}function l(){return n.createElement("div",{className:"loading2"},n.createElement("div",null),n.createElement("div",null),n.createElement("div",null),n.createElement("div",null),n.createElement("div",null),n.createElement("div",null),n.createElement("div",null),n.createElement("div",null),n.createElement("div",null))}const c=a.ZP.div`
  width: 100%;
  height: 100%;
  text-align: center;
`;function r(e){const{type:t="dot-circle"}=e;return n.createElement(c,null,(e=>{let t;switch(e){case"dot-circle":default:t=n.createElement(s,null);break;case"2":t=n.createElement(l,null)}return t})(t))}},4716:(e,t,i)=>{i.d(t,{z:()=>l});var n=i(9606),a=i(3730),o=i(2983);const s=n.ZP.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0,0,0,0.75);
`;function l(){const e="mask-container";return(0,o.useEffect)((()=>{let t=document.getElementById(e);t||(t=document.createElement("div"),t.id=e,document.body.appendChild(t))}),[]),document.getElementById(e)?a.createPortal(o.createElement(s,null),document.getElementById(e)):o.createElement("div",null)}},8432:(e,t,i)=>{i.d(t,{Gm:()=>c,IW:()=>a,N7:()=>d,ZE:()=>o,_n:()=>n,fo:()=>s,mS:()=>l,uh:()=>r});const n="https://api.kevinjobs.com:5000",a=n+"/upload",o=n+"/token",s=n+"/post/list",l=n+"/p",c=n+"/user/list",r=n+"/user",d=n+"/invitation/list"},5290:(e,t,i)=>{i.r(t),i.d(t,{default:()=>H});var n=i(2983),a=i(9378),o=i.n(a);const s=n.createContext({width:0,height:0,toTop:0,toBottom:0}),l=e=>{const{children:t}=e,[i,a]=n.useState(window.innerWidth),[l,c]=n.useState(window.innerHeight),[r,d]=n.useState(0),[h,u]=n.useState(0);function m(){a(window.innerWidth),c(window.innerHeight)}let p;return p=()=>{const e=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0,t=document.documentElement.clientHeight||document.body.clientHeight||0,i=(document.documentElement.scrollHeight||document.body.scrollHeight||0)-e-t;d(e),u(i)},n.useEffect((()=>(window.addEventListener("resize",m),window.addEventListener("scroll",o().debounce(p,500)),()=>{window.removeEventListener("resize",m),window.removeEventListener("scroll",o().debounce(p,500))})),[]),n.createElement(s.Provider,{value:{width:i,height:l,toTop:r,toBottom:h}},t)},c=()=>{let e="desktop";const{width:t,height:i}=n.useContext(s);e=t<1080?"mobile":"desktop";return{device:e,clientWidth:t,clientHeight:i}};var r=i(5577),d=i(9647),h=i(7952),u=i(9606);const m=u.ZP.div`
  width: 100%;
  height: 100vh;
  background-size: cover;
  background-position: center center;
  position: sticky;
  top: 0;
`,p=u.ZP.div`
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
`;const f=n.memo((function(e){const{cover:t,verse:i}=e;return n.createElement(m,{style:{backgroundImage:`url(${t})`},className:"gallery-cover"},n.createElement(p,null,i&&i.content.split("|").map(((e,t)=>n.createElement("p",{key:t},e)))))}));var g=i(2437),v=i(4716);const y=e=>{const{width:t,height:i,top:a,left:o,finalLeft:s,finalHeight:l,finalWidth:c,finalTop:r,index:d}=e,[h,u]=n.useState(!1),m=n.useRef(),[p,f]=(0,g.q_)((()=>({left:0,top:0,width:t,height:i,position:"absolute",zIndex:1,visibility:"hidden"})),[]);return n.createElement("div",{key:e.title,ref:m,onClick:e=>{e.preventDefault(),e.stopPropagation();const n=m?.current?.getBoundingClientRect();h?(u(!1),f.start({from:{position:"fixed",width:c,height:l,left:s,top:r,zIndex:999,visibility:"visible"},to:{position:"fixed",width:t,height:i,left:n.left,top:n.top,zIndex:1,visibility:"visible"},config:{mass:.8,tension:280,friction:26}}),setTimeout((()=>{f.set({position:"absolute",left:0,top:0,zIndex:1,visibility:"hidden"})}),250)):(f.start({from:{position:"fixed",width:t,height:i,left:n.left,top:n.top,zIndex:999,visibility:"visible"},to:{position:"fixed",width:c,height:l,left:s,top:r,zIndex:999,visibility:"visible"},config:{mass:.5,tension:270,friction:16}}),u(!0))},className:"masonry-item",style:{width:t,height:i,top:a,left:o}},n.createElement("div",null,n.createElement("img",{src:e.src,alt:e.title})),n.createElement(g.q.div,{style:{...p}},n.createElement("img",{src:e.src,alt:e.title})),h&&n.createElement(v.z,null))},w=u.ZP.div`
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
`,b=e=>{const[t,i]=n.useState(0),{clientWidth:a,clientHeight:o}=c(),s=n.useRef(),{cols:l=3,colWidth:r=320,gutter:d=8,items:h}=e,u=Array.from({length:l},(()=>0));let m=0;const p=(e,t,i)=>{const n=(()=>{const e=Math.min(...u);return u.indexOf(e)})(),a=(r+d)*n,o=u[n],s=r/e*t;return u[n]+=s+d,i===h.length-1&&(m=Math.max(...u)),{left:a,top:o,width:r,height:s}};return n.useEffect((()=>{i(m)}),[...u,h.length]),n.createElement(w,{style:{width:(r+d)*l-d,height:t},ref:s},h&&h.map(((e,t)=>{const{left:i,top:s,width:l,height:c}=p(e.width,e.height,t),{finalWidth:r,finalHeight:d,finalLeft:h,finalTop:u}=((e,t,i,n)=>{const a=e/t;let o;const s=.9*n;o=t>s?s:t;let l=o*a;return l>i&&(l=i,o=i/a),{finalWidth:l,finalHeight:o,finalTop:(n-o)/2,finalLeft:(i-l)/2}})(e.width,e.height,a,o);return n.createElement(y,{key:e.src,title:e.title,src:e.src,left:i,top:s,width:l,height:c,index:t,finalWidth:r,finalHeight:d,finalLeft:h,finalTop:u,originHeight:e.height,originWidth:e.width})})))};b.displayName="Masonry";var E=i(5163);const k=u.ZP.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  background-color: rgba(255, 255, 255, 0.9);
  z-index: 1;
  position: relative;
`,x=u.ZP.div`
  margin: 48px 0;
`;u.ZP.div``,u.ZP.div`
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
`;const T=e=>e.map((e=>{let t;try{t=JSON.parse(e.exif)}catch(e){console.log(e)}return{src:e.url,width:t?.width,height:t?.height}})),S=n.memo((function(){const[e,t]=n.useState(0),[i,a]=n.useState([]),[o,l]=n.useState(!1),{clientWidth:d,device:h}=c(),{toBottom:u}=(()=>{const{toTop:e,toBottom:t}=n.useContext(s);return{toTop:e,toBottom:t}})(),m=async(n,o=12)=>{const s=await(0,r.T6)(n,o,{type:"photo"});"string"!=typeof s&&(a(i.concat(T(s.data.posts))),12+e>=s.data.totals?l(!1):(l(!0),t(e+12)))};return n.useEffect((()=>{m(e,12)}),[]),n.useEffect((()=>{o&&u<500&&m(e,12)}),[u]),n.createElement(k,null,n.createElement(x,null,0!==i.length?n.createElement(b,{items:i,cols:"mobile"===h?2:4,colWidth:"mobile"===h?(d-12)/2:320,gutter:"mobile"===h?4:24,shadow:!0}):n.createElement(E.g,null)),o&&n.createElement(E.g,null))}));function H(){const[e,t]=n.useState(),[i,a]=n.useState([]);return n.useEffect((()=>{(async()=>{const e=await(0,r.T6)(0,10,{type:"cover"});if("string"!=typeof e){const i=e.data.amount,n=(0,d.gX)(0,i);t(e.data.posts[n].url)}})()}),[]),n.useEffect((()=>{(async()=>{const e=await(0,r.T6)(0,999,{type:"verse"});"string"!=typeof e&&a(e.data.posts)})()}),[]),n.createElement(l,null,n.createElement(f,{cover:e,verse:i[(0,d.gX)(0,i.length)]}),n.createElement(S,null))}},6433:(e,t,i)=>{i.d(t,{Z:()=>l});var n=i(5326),a=i.n(n),o=i(8432);const s=a().create();s.defaults.baseURL=o._n,s.interceptors.request.use((e=>(e.data=JSON.stringify(e.data),e.headers={"content-type":"application/json",Authorization:`Bearer ${localStorage.getItem("token")}`},e)));const l=s},9647:(e,t,i)=>{i.d(t,{TH:()=>l,gX:()=>o,iX:()=>s});var n=i(7860),a=i.n(n);function o(e,t){return Math.floor(Math.random()*(t-e))+e}const s=e=>{const t=a()(e.CreateDate?.value).unix(),i=a()(e.ModifyDate?.value).unix(),n=e.FileType?.value,o=e.ISOSpeedRatings?.value,s=e["Image Width"]?.value|e.ImageWidth?.value,l=e["Image Height"]?.value|e.ImageHeight?.value,c=e.Lens?.value,r=e.FocalLength?.description,d=e.FNumber?.description,h=e.ExposureTime?.description,u=e.Model?.description;return{createDate:t,modifyDate:i,fileType:n,iso:o,width:s,height:l,lens:c,focal:r,focalNumber:d,exposure:h,model:u}},l=e=>Number(String(e).slice(0,10))}}]);