"use strict";(self.webpackChunklumie=self.webpackChunklumie||[]).push([[306],{273:(t,e,i)=>{i.d(e,{Gm:()=>s,ZE:()=>o,fo:()=>a,mS:()=>l,uh:()=>d});var n=i(7755);const o=n._+"/token",a=n._+"/post/list",l=n._+"/p",s=n._+"/user/list",d=n._+"/user"},5577:(t,e,i)=>{i.d(e,{CP:()=>c,SD:()=>h,T6:()=>s,fR:()=>d,q2:()=>r});var n=i(6433),o=i(273),a=function(t,e,i,n){return new(i||(i=Promise))((function(o,a){function l(t){try{d(n.next(t))}catch(t){a(t)}}function s(t){try{d(n.throw(t))}catch(t){a(t)}}function d(t){var e;t.done?o(t.value):(e=t.value,e instanceof i?e:new i((function(t){t(e)}))).then(l,s)}d((n=n.apply(t,e||[])).next())}))};const l=t=>Number(String(t).slice(0,10));function s(t,e,i){return a(this,void 0,void 0,(function*(){let a={offset:t,limit:e,status:"publish"};i&&(a=Object.assign(Object.assign({},a),i));const s=yield n.Z.get(o.fo,{params:a});if(0===s.data.code){const t=s.data,e=t.data.posts;return t.data.posts=e.map((t=>(t.createAt=l(t.createAt),t.updateAt=l(t.updateAt),t.publishAt=l(t.publishAt),t))),t}return s.data.msg}))}function d(t){return a(this,void 0,void 0,(function*(){const e=yield n.Z.delete(o.mS,{params:{uid:t}});return 0===e.data.code?e.data:e.data.msg}))}function c(t,e){return a(this,void 0,void 0,(function*(){const i=yield n.Z.put(o.mS,e,{params:{uid:t}});return 0===i.data.code?i.data:i.data.msg}))}function r(t){return a(this,void 0,void 0,(function*(){const e=yield n.Z.post(o.mS,t);return 0===e.data.code?e.data:e.data.msg}))}function h(t){return a(this,void 0,void 0,(function*(){const e=yield n.Z.get(o.mS,{params:{uid:t}});if(0===e.data.code){const t=e.data;return t.data.post.updateAt=l(t.data.post.updateAt),t.data.post.createAt=l(t.data.post.createAt),t.data.post.publishAt=l(t.data.post.publishAt),t}return e.data.msg}))}},5163:(t,e,i)=>{i.d(e,{g:()=>c});var n=i(2983),o=i(9606);const a=o.ZP.div`
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
`;function c(t){const{type:e="dot-circle"}=t;return n.createElement(d,null,(t=>{let e;switch(t){case"dot-circle":default:e=n.createElement(l,null);break;case"2":e=n.createElement(s,null)}return e})(e))}},7755:(t,e,i)=>{i.d(e,{_:()=>n});const n="https://api.kevinjobs.com:5000"},9306:(t,e,i)=>{i.r(e),i.d(e,{default:()=>H});var n=i(2983),o=i(9378),a=i.n(o);const l=n.createContext({width:0,height:0,toTop:0,toBottom:0}),s=t=>{const{children:e}=t,[i,o]=n.useState(window.innerWidth),[s,d]=n.useState(window.innerHeight),[c,r]=n.useState(0),[h,u]=n.useState(0);function f(){o(window.innerWidth),d(window.innerHeight)}let m;return m=()=>{const t=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0,e=document.documentElement.clientHeight||document.body.clientHeight||0,i=(document.documentElement.scrollHeight||document.body.scrollHeight||0)-t-e;r(t),u(i)},n.useEffect((()=>(window.addEventListener("resize",f),window.addEventListener("scroll",a().debounce(m,500)),()=>{window.removeEventListener("resize",f),window.removeEventListener("scroll",a().debounce(m,500))})),[]),n.createElement(l.Provider,{value:{width:i,height:s,toTop:c,toBottom:h}},e)},d=()=>{let t="desktop";const{width:e,height:i}=n.useContext(l);t=e<1080?"mobile":"desktop";return{device:t,clientWidth:e,clientHeight:i}},c=()=>{const{toTop:t,toBottom:e}=n.useContext(l);return{toTop:t,toBottom:e}};var r=i(7755),h=i(5577),u=i(9647),f=i(7952),m=i(9606);const p=m.ZP.div`
  width: 100%;
  height: 100vh;
  background-size: cover;
  background-position: center center;
  position: sticky;
  top: 0;
`,v=m.ZP.div`
  position: absolute;
  font-size: 48px;
  top: 10%;
  right: 5%;
  color: ${f.Z.white1};
  opacity: 0.7;
  writing-mode: vertical-rl;
  line-height: 1;
  letter-spacing: 16px;
  // background-color: ${f.Z.white2};
  p {
    &:nth-child(1) {
      margin-top: 0;
    }
    &:nth-child(2) {
      margin-top: 64px;
    }
  }
`;function g(t){const{cover:e,verse:i}=t;return n.createElement(p,{style:{backgroundImage:`url(${e})`},className:"gallery-cover"},n.createElement(v,null,i&&i.content.map(((t,e)=>n.createElement("p",{key:e},t)))))}var y=i(2437);const w=m.ZP.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0,0,0,0.98);
`,b=t=>{const{width:e,height:i,top:o,left:a,finalLeft:l,finalHeight:s,finalWidth:d,finalTop:c,index:r}=t,[h,u]=n.useState(!1),f=n.useRef(),[m,p]=(0,y.q_)((()=>({left:0,top:0,width:e,height:i,position:"absolute",zIndex:1,visibility:"hidden"})),[]);return n.createElement("div",{key:t.title,ref:f,onClick:t=>{var n;t.preventDefault(),t.stopPropagation();const o=null===(n=null==f?void 0:f.current)||void 0===n?void 0:n.getBoundingClientRect();h?(u(!1),p.start({from:{position:"fixed",width:d,height:s,left:l,top:c,zIndex:999,visibility:"visible"},to:{position:"fixed",width:e,height:i,left:o.left,top:o.top,zIndex:1,visibility:"visible"},config:{mass:.8,tension:280,friction:26}}),setTimeout((()=>{p.set({position:"absolute",left:0,top:0,zIndex:1,visibility:"hidden"})}),250)):(p.start({from:{position:"fixed",width:e,height:i,left:o.left,top:o.top,zIndex:999,visibility:"visible"},to:{position:"fixed",width:d,height:s,left:l,top:c,zIndex:999,visibility:"visible"},config:{mass:.5,tension:270,friction:16}}),u(!0))},className:"masonry-item",style:{width:e,height:i,top:o,left:a}},n.createElement("div",null,n.createElement("img",{src:t.src,alt:t.title})),n.createElement(y.q.div,{style:Object.assign({},m)},n.createElement("img",{src:t.src,alt:t.title})),h&&n.createElement(w,{style:{zIndex:998}}))},k=m.ZP.div`
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
`,E=t=>{const[e,i]=n.useState(0),{clientWidth:o,clientHeight:a}=d(),l=n.useRef(),{cols:s=3,colWidth:c=320,gutter:r=8,items:h}=t,u=Array.from({length:s},(()=>0));let f=0;const m=(t,e,i)=>{const n=(()=>{const t=Math.min(...u);return u.indexOf(t)})(),o=(c+r)*n,a=u[n],l=c/t*e;return u[n]+=l+r,i===h.length-1&&(f=Math.max(...u)),{left:o,top:a,width:c,height:l}};return n.useEffect((()=>{i(f)}),[...u,h.length]),n.createElement(k,{style:{width:(c+r)*s-r,height:e},ref:l},h&&h.map(((t,e)=>{const{left:i,top:l,width:s,height:d}=m(t.width,t.height,e),{finalWidth:c,finalHeight:r,finalLeft:h,finalTop:u}=((t,e,i,n)=>{const o=t/e;let a;const l=.9*n;a=e>l?l:e;let s=a*o;return s>i&&(s=i,a=i/o),{finalWidth:s,finalHeight:a,finalTop:(n-a)/2,finalLeft:(i-s)/2}})(t.width,t.height,o,a);return n.createElement(b,{key:t.src,title:t.title,src:t.src,left:i,top:l,width:s,height:d,index:e,finalWidth:c,finalHeight:r,finalLeft:h,finalTop:u,originHeight:t.height,originWidth:t.width})})))};E.displayName="Masonry";var x=i(5163),A=function(t,e,i,n){return new(i||(i=Promise))((function(o,a){function l(t){try{d(n.next(t))}catch(t){a(t)}}function s(t){try{d(n.throw(t))}catch(t){a(t)}}function d(t){var e;t.done?o(t.value):(e=t.value,e instanceof i?e:new i((function(t){t(e)}))).then(l,s)}d((n=n.apply(t,e||[])).next())}))};const S=m.ZP.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  background-color: rgba(255, 255, 255, 0.9);
  z-index: 1;
  position: relative;
`,Z=m.ZP.div`
  margin: 48px 0;
`;m.ZP.div``,m.ZP.div`
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
`;function T(){const[t,e]=n.useState(0),[i,o]=n.useState([]),[a,l]=n.useState(!1),{clientWidth:s,device:r}=d(),{toBottom:u}=c(),f=(n,a=12)=>A(this,void 0,void 0,(function*(){const s=yield(0,h.T6)(n,a,{type:"photo"});"string"!=typeof s&&(o(i.concat(N(s.data.posts))),12+t>=s.data.totals?l(!1):(l(!0),e(t+12)))}));return n.useEffect((()=>{f(t,12)}),[]),n.useEffect((()=>{a&&u<500&&f(t,12)}),[u]),n.createElement(S,null,n.createElement(Z,null,0!==i.length?n.createElement(E,{items:i,cols:"mobile"===r?2:4,colWidth:"mobile"===r?(s-12)/2:320,gutter:"mobile"===r?4:24,shadow:!0}):n.createElement(x.g,null)),a&&n.createElement(x.g,null))}const N=t=>t.map((t=>{let e;try{e=JSON.parse(t.exif)}catch(t){console.log(t)}return{src:r._+t.url,width:null==e?void 0:e.width,height:null==e?void 0:e.height}}));var P=function(t,e,i,n){return new(i||(i=Promise))((function(o,a){function l(t){try{d(n.next(t))}catch(t){a(t)}}function s(t){try{d(n.throw(t))}catch(t){a(t)}}function d(t){var e;t.done?o(t.value):(e=t.value,e instanceof i?e:new i((function(t){t(e)}))).then(l,s)}d((n=n.apply(t,e||[])).next())}))};function H(){const[t,e]=n.useState(),i=[{createAt:"2021-08-02",updateAt:"2023-10-25",id:1,uid:"4646aeraedfladlfhadiofag",title:"soso",author:"yiming",content:["来自星辰","归于星辰"]},{createAt:"2023-10-25",updateAt:"2023-10-25",id:1,uid:"daadsgasdfafa",title:"soso",author:"yiming",content:["须知少时凌云志","曾许人间第一流"]},{createAt:"2023-10-25",updateAt:"2023-10-25",id:1,uid:"4646aeraedfladlfdasfhadiofag",title:"soso",author:"yiming",content:["醉后不知天在水","满床清梦压星河"]},{createAt:"2023-10-25",updateAt:"2023-10-25",id:1,uid:"4646aeraedflad3asdfla34asfhadiofag",title:"soso",author:"yiming",content:["久雨寒蝉少","空山落叶深"]},{createAt:"2023-10-25",updateAt:"2023-10-25",id:1,uid:"4646aeraedflad3asdfla34asfhadiofag",title:"soso",author:"yiming",content:["梦里寻欢终是客","客醒五更空愁眠"]},{createAt:"2023-10-25",updateAt:"2023-10-25",id:1,uid:"4646aeraedflad3asdfla34asfhadiofag",title:"soso",author:"yiming",content:["氤氲旧时江上","曾是照影惊鸿"]}];return n.useEffect((()=>{(()=>{P(this,void 0,void 0,(function*(){const t=yield(0,h.T6)(0,10,{type:"cover"});if("string"!=typeof t){const i=t.data.amount,n=(0,u.g)(0,i);e(t.data.posts[n].url)}}))})()}),[]),n.createElement(s,null,n.createElement(g,{cover:r._+t,verse:i[(0,u.g)(0,i.length)]}),n.createElement(T,null))}},6433:(t,e,i)=>{i.d(e,{Z:()=>s});var n=i(5326),o=i.n(n),a=i(7755);const l=o().create();l.defaults.baseURL=a._,l.interceptors.request.use((t=>(t.data=JSON.stringify(t.data),t.headers={"content-type":"application/json",Authorization:`Bearer ${localStorage.getItem("token")}`},t)));const s=l},9647:(t,e,i)=>{i.d(e,{g:()=>a,i:()=>l});var n=i(7860),o=i.n(n);function a(t,e){return Math.floor(Math.random()*(e-t))+t}const l=t=>{var e,i,n,a,l,s,d,c,r,h,u,f,m;return{createDate:o()(null===(e=t.CreateDate)||void 0===e?void 0:e.value).unix(),modifyDate:o()(null===(i=t.ModifyDate)||void 0===i?void 0:i.value).unix(),fileType:null===(n=t.FileType)||void 0===n?void 0:n.value,iso:null===(a=t.ISOSpeedRatings)||void 0===a?void 0:a.value,width:(null===(l=t["Image Width"])||void 0===l?void 0:l.value)|(null===(s=t.ImageWidth)||void 0===s?void 0:s.value),height:(null===(d=t["Image Height"])||void 0===d?void 0:d.value)|(null===(c=t.ImageHeight)||void 0===c?void 0:c.value),lens:null===(r=t.Lens)||void 0===r?void 0:r.value,focal:null===(h=t.FocalLength)||void 0===h?void 0:h.description,focalNumber:null===(u=t.FNumber)||void 0===u?void 0:u.description,exposure:null===(f=t.ExposureTime)||void 0===f?void 0:f.description,model:null===(m=t.Model)||void 0===m?void 0:m.description}}}}]);