"use strict";(self.webpackChunklumie=self.webpackChunklumie||[]).push([[104],{273:(e,t,n)=>{n.d(t,{Gm:()=>l,ZE:()=>i,fo:()=>o,mS:()=>s,uh:()=>r});var a=n(7755);const i=a._+"/token",o=a._+"/post/list",s=a._+"/p",l=a._+"/user/list",r=a._+"/user"},5577:(e,t,n)=>{n.d(t,{CP:()=>c,SD:()=>u,T6:()=>l,fR:()=>r,q2:()=>d});var a=n(6433),i=n(273),o=function(e,t,n,a){return new(n||(n=Promise))((function(i,o){function s(e){try{r(a.next(e))}catch(e){o(e)}}function l(e){try{r(a.throw(e))}catch(e){o(e)}}function r(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,l)}r((a=a.apply(e,t||[])).next())}))};const s=e=>Number(String(e).slice(0,10));function l(e,t,n){return o(this,void 0,void 0,(function*(){let o={offset:e,limit:t,status:"publish"};n&&(o=Object.assign(Object.assign({},o),n));const l=yield a.Z.get(i.fo,{params:o});if(0===l.data.code){const e=l.data,t=e.data.posts;return e.data.posts=t.map((e=>(e.createAt=s(e.createAt),e.updateAt=s(e.updateAt),e.publishAt=s(e.publishAt),e))),e}return l.data.msg}))}function r(e){return o(this,void 0,void 0,(function*(){const t=yield a.Z.delete(i.mS,{params:{uid:e}});return 0===t.data.code?t.data:t.data.msg}))}function c(e,t){return o(this,void 0,void 0,(function*(){const n=yield a.Z.put(i.mS,t,{params:{uid:e}});return 0===n.data.code?n.data:n.data.msg}))}function d(e){return o(this,void 0,void 0,(function*(){const t=yield a.Z.post(i.mS,e);return 0===t.data.code?t.data:t.data.msg}))}function u(e){return o(this,void 0,void 0,(function*(){const t=yield a.Z.get(i.mS,{params:{uid:e}});if(0===t.data.code){const e=t.data;return e.data.post.updateAt=s(e.data.post.updateAt),e.data.post.createAt=s(e.data.post.createAt),e.data.post.publishAt=s(e.data.post.publishAt),e}return t.data.msg}))}},3555:(e,t,n)=>{n.d(t,{E:()=>s});var a=n(2983),i=n(5163),o=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(a=Object.getOwnPropertySymbols(e);i<a.length;i++)t.indexOf(a[i])<0&&Object.prototype.propertyIsEnumerable.call(e,a[i])&&(n[a[i]]=e[a[i]])}return n};function s(e){const{style:t}=e,n=o(e,["style"]),[s,l]=a.useState(!1);return a.createElement(a.Fragment,null,a.createElement("img",Object.assign({},n,{onLoad:()=>{l(!0)},style:Object.assign(Object.assign({},t),{display:s?"block":"none"})})),s&&a.createElement(i.g,{type:"2"}))}},5163:(e,t,n)=>{n.d(t,{g:()=>c});var a=n(2983),i=n(9606);const o=i.ZP.div`
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
`;function s(){return a.createElement(o,null,a.createElement("div",{className:"sk-chase"},a.createElement("div",{className:"sk-chase-dot"}),a.createElement("div",{className:"sk-chase-dot"}),a.createElement("div",{className:"sk-chase-dot"}),a.createElement("div",{className:"sk-chase-dot"}),a.createElement("div",{className:"sk-chase-dot"}),a.createElement("div",{className:"sk-chase-dot"})))}function l(){return a.createElement("div",{className:"loading2"},a.createElement("div",null),a.createElement("div",null),a.createElement("div",null),a.createElement("div",null),a.createElement("div",null),a.createElement("div",null),a.createElement("div",null),a.createElement("div",null),a.createElement("div",null))}const r=i.ZP.div`
  width: 100%;
  height: 100%;
  text-align: center;
`;function c(e){const{type:t="dot-circle"}=e;return a.createElement(r,null,(e=>{let t;switch(e){case"dot-circle":default:t=a.createElement(s,null);break;case"2":t=a.createElement(l,null)}return t})(t))}},7755:(e,t,n)=>{n.d(t,{_:()=>a});const a="https://api.kevinjobs.com:5000"},8104:(e,t,n)=>{n.r(t),n.d(t,{default:()=>_});var a=n(2983),i=n(9378),o=n.n(i);const s=a.createContext({width:0,height:0,toTop:0,toBottom:0}),l=e=>{const{children:t}=e,[n,i]=a.useState(window.innerWidth),[l,r]=a.useState(window.innerHeight),[c,d]=a.useState(0),[u,h]=a.useState(0);function m(){i(window.innerWidth),r(window.innerHeight)}let p;return p=()=>{const e=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0,t=document.documentElement.clientHeight||document.body.clientHeight||0,n=(document.documentElement.scrollHeight||document.body.scrollHeight||0)-e-t;d(e),h(n)},a.useEffect((()=>(window.addEventListener("resize",m),window.addEventListener("scroll",o().debounce(p,500)),()=>{window.removeEventListener("resize",m),window.removeEventListener("scroll",o().debounce(p,500))})),[]),a.createElement(s.Provider,{value:{width:n,height:l,toTop:c,toBottom:u}},t)},r=()=>{let e="desktop";const{width:t,height:n}=a.useContext(s);e=t<1080?"mobile":"desktop";return{device:e,clientWidth:t,clientHeight:n}},c=()=>{const{toTop:e,toBottom:t}=a.useContext(s);return{toTop:e,toBottom:t}};var d=n(7755),u=n(5577);function h(e,t){return Math.floor(Math.random()*(t-e))+e}var m=n(7952),p=n(9606);const f=p.ZP.div`
  width: 100%;
  height: 100vh;
  background-size: cover;
  background-position: center center;
  position: sticky;
  top: 0;
`,g=p.ZP.div`
  position: absolute;
  font-size: 48px;
  top: 10%;
  right: 5%;
  color: ${m.Z.white1};
  opacity: 0.7;
  writing-mode: vertical-rl;
  line-height: 1;
  letter-spacing: 16px;
  // background-color: ${m.Z.white2};
  p {
    &:nth-child(1) {
      margin-top: 0;
    }
    &:nth-child(2) {
      margin-top: 64px;
    }
  }
`;function y(e){const{cover:t,verse:n}=e;return a.createElement(f,{style:{backgroundImage:`url(${t})`},className:"gallery-cover"},a.createElement(g,null,n&&n.content.map(((e,t)=>a.createElement("p",{key:t},e)))))}var v=n(7860),w=n.n(v),b=n(8085),E=n(4557);const x=p.ZP.div`
  position: relative;
`,k=p.ZP.div``,A=a.forwardRef(((e,t)=>{const[n,i]=a.useState(0),{cols:o=3,colWidth:s=320,gutter:l=8,data:r,onPreview:c,shadow:d=!1}=e,u=Array.from({length:o},(()=>0));let h=0;const m=(e,t)=>{const n=(()=>{const e=Math.min(...u);return u.indexOf(e)})(),a=(s+l)*n,i=u[n],o=s/e.width*e.height;return u[n]+=o+l,t===r.length-1&&(h=Math.max(...u)),{left:a,top:i,position:"absolute",width:s,height:o,cursor:"pointer",boxShadow:d?"4px 4px 4px rgba(0,0,0,0.35)":""}};return a.useEffect((()=>{i(h)}),[...u,r.length]),a.createElement(x,{style:{width:(s+l)*o-l,height:n},ref:t},r&&r.map(((e,t)=>{const{key:n,child:i}=e,o=m(e,t);return a.createElement(k,{style:Object.assign({},o),key:n,"data-key":n,"data-index":t,onClick:t=>((e,t)=>{c(e,t)})(t,e)},i)})))}));A.displayName="Masonry";var S=n(3555),Z=n(5163),P=function(e,t,n,a){return new(n||(n=Promise))((function(i,o){function s(e){try{r(a.next(e))}catch(e){o(e)}}function l(e){try{r(a.throw(e))}catch(e){o(e)}}function r(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,l)}r((a=a.apply(e,t||[])).next())}))};const N=p.ZP.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  background-color: rgba(255, 255, 255, 0.9);
  z-index: 1;
  position: relative;
`,O=p.ZP.div`
  margin: 48px 0;
`,j=p.ZP.div``,C=p.ZP.div`
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
`,T={position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(255,249,247,1)",zIndex:10,transition:"all .3s ease-in-out",filter:"opacity(98%)"},W=(e,t,n)=>{const a=e.width/e.height;let i;const o=.8*n;i=e.height>o?o:e.height;let s=i*a;s>t&&(s=t,i=t/a);return{finalWidth:s,finalHeight:i,finalTop:50,finalLeft:(t-s)/2}};function z(){const[e,t]=a.useState(0),[n,i]=a.useState([]),[o,s]=a.useState(!1),[l,d]=a.useState(),[h,m]=a.useState(),[p,f]=a.useState(0),{clientWidth:g,clientHeight:y,device:v}=r(),{toBottom:w}=c(),b=a.useRef(),E=(a,o=12)=>P(this,void 0,void 0,(function*(){const l=yield(0,u.T6)(a,o,{type:"photo"});"string"!=typeof l&&(i(n.concat(B(l.data.posts))),12+e>=l.data.totals?s(!1):(s(!0),t(e+12)))}));a.useEffect((()=>{E(e,12)}),[]),a.useEffect((()=>{o&&w<500&&E(e,12),console.log(o,e)}),[w]);const x=e=>{h&&e.preventDefault(h)};return a.useEffect((()=>(window.addEventListener("wheel",x,{passive:!1}),()=>{window.removeEventListener("wheel",x)})),[h]),a.createElement(N,null,a.createElement(O,null,0!==n.length?a.createElement(A,{data:n,cols:"mobile"===v?2:4,colWidth:"mobile"===v?(g-12)/2:320,gutter:"mobile"===v?4:24,onPreview:(e,t)=>{e.preventDefault();const n=b.current,a=e.target.parentNode.dataset.index,i=void 0!==n?n.children[a]:"",o=i.cloneNode(!0),s=i.getBoundingClientRect().width,l=i.getBoundingClientRect().height,r=i.getBoundingClientRect().top,c=i.getBoundingClientRect().left,{finalWidth:u,finalHeight:h,finalTop:p,finalLeft:v}=W(t,g,y);o.style.transition="all 0.4s ease-in-out",o.style.position="fixed",o.style.boxShadow="4px 4px 16px 8px rgba(0,0,0,0.35)",o.style.zIndex=999999,o.style.width=s+"px",o.style.height=l+"px",o.style.left=c+"px",o.style.top=r+"px",i.style.display="none",n.append(o),d(t),m(a),f(h+p),setTimeout((()=>{o.style.width=u+"px",o.style.height=h+"px",o.style.left=v+"px",o.style.top=p+"px"}),20),o.onclick=e=>{e.preventDefault(),o.style.width=s+"px",o.style.height=l+"px",o.style.left=c+"px",o.style.top=r+"px",setTimeout((()=>{n.removeChild(o),i.style.display="block"}),400),m(void 0),d(void 0)}},ref:b,shadow:!0}):a.createElement(Z.g,null),a.createElement(j,{style:h&&T},a.createElement(C,{style:{visibility:h?"visible":"hidden",position:"absolute",top:p+8,left:"50%",transform:"translateX(-50%)",flexWrap:"wrap"}},l&&H(l)))),o&&a.createElement(Z.g,null))}const B=e=>e.map(((e,t)=>{let n;try{n=JSON.parse(e.exif)}catch(e){console.log(e)}const i=d._+e.url;return{id:e.id,uid:e.uid,source:i,key:e.uid,createAt:Number(String(e.createAt).slice(0,10)),updateAt:Number(String(e.updateAt).slice(0,10)),description:e.excerpt,title:e.title,child:a.createElement(S.E,{src:i,"data-index":t,alt:e.title,style:{width:"100%",height:"100%"}}),width:null==n?void 0:n.width,height:null==n?void 0:n.height}})),H=e=>a.createElement(a.Fragment,null,a.createElement("div",{style:{width:"100%",textAlign:"center"}},a.createElement("h3",null,e.title)),a.createElement("span",{className:"mask-desc-item"},a.createElement(b.Z,{theme:"outline",size:"20",fill:"#333",strokeWidth:2}),a.createElement("span",{style:{margin:"0 8px"}},w().unix(e.createAt).format("YYYY-MM-DD"))),a.createElement("span",{className:"mask-desc-item"},a.createElement(E.Z,{theme:"outline",size:"20",fill:"#333",strokeWidth:2}),a.createElement("span",{style:{margin:"0 8px"}},e.description||"还没有图片说明")));var L=function(e,t,n,a){return new(n||(n=Promise))((function(i,o){function s(e){try{r(a.next(e))}catch(e){o(e)}}function l(e){try{r(a.throw(e))}catch(e){o(e)}}function r(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,l)}r((a=a.apply(e,t||[])).next())}))};function _(){const[e,t]=a.useState(),n=[{createAt:"2021-08-02",updateAt:"2023-10-25",id:1,uid:"4646aeraedfladlfhadiofag",title:"soso",author:"yiming",content:["来自星辰","归于星辰"]},{createAt:"2023-10-25",updateAt:"2023-10-25",id:1,uid:"daadsgasdfafa",title:"soso",author:"yiming",content:["须知少时凌云志","曾许人间第一流"]},{createAt:"2023-10-25",updateAt:"2023-10-25",id:1,uid:"4646aeraedfladlfdasfhadiofag",title:"soso",author:"yiming",content:["醉后不知天在水","满床清梦压星河"]},{createAt:"2023-10-25",updateAt:"2023-10-25",id:1,uid:"4646aeraedflad3asdfla34asfhadiofag",title:"soso",author:"yiming",content:["久雨寒蝉少","空山落叶深"]},{createAt:"2023-10-25",updateAt:"2023-10-25",id:1,uid:"4646aeraedflad3asdfla34asfhadiofag",title:"soso",author:"yiming",content:["梦里寻欢终是客","客醒五更空愁眠"]},{createAt:"2023-10-25",updateAt:"2023-10-25",id:1,uid:"4646aeraedflad3asdfla34asfhadiofag",title:"soso",author:"yiming",content:["氤氲旧时江上","曾是照影惊鸿"]}];return a.useEffect((()=>{(()=>{L(this,void 0,void 0,(function*(){const e=yield(0,u.T6)(0,10,{type:"cover"});if("string"!=typeof e){const n=h(0,e.data.amount);t(e.data.posts[n].url)}}))})()}),[]),a.createElement(l,null,a.createElement(y,{cover:d._+e,verse:n[h(0,n.length)]}),a.createElement(z,null))}},6433:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(5326),i=n.n(a),o=n(7755);const s=i().create();s.defaults.baseURL=o._,s.interceptors.request.use((e=>(e.data=JSON.stringify(e.data),e.headers={"content-type":"application/json",Authorization:`Bearer ${localStorage.getItem("token")}`},e)));const l=s}}]);