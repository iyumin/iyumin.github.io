"use strict";(self.webpackChunkkevinjobs=self.webpackChunkkevinjobs||[]).push([[994],{4144:(t,e,n)=>{n.d(e,{CP:()=>f,DN:()=>s,SD:()=>p,T6:()=>l,Zt:()=>c,fR:()=>u,ms:()=>d,q2:()=>h,uh:()=>m,x4:()=>r});var i=n(8838),o=n(7573),a=function(t,e,n,i){return new(n||(n=Promise))((function(o,a){function r(t){try{c(i.next(t))}catch(t){a(t)}}function l(t){try{c(i.throw(t))}catch(t){a(t)}}function c(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(r,l)}c((i=i.apply(t,e||[])).next())}))};function r(t){return a(this,void 0,void 0,(function*(){const e=o._+"/token",n=yield i.Z.post(e,t);if(0===n.data.code)return n.data.data}))}function l(t,e,n=null){return a(this,void 0,void 0,(function*(){const a=o._+"/post/list";let r={offset:t,limit:e,status:"publish"};n&&(r=Object.assign(Object.assign({},r),n));const l=yield i.Z.get(a,{params:r});if(0===l.data.code)return l.data.data}))}function c(t,e){return a(this,void 0,void 0,(function*(){return yield l(t,e,{type:"article"})}))}function s(t=0,e=20){return a(this,void 0,void 0,(function*(){return yield l(t,e,{type:"cover",status:"all"})}))}function d(t,e){return a(this,void 0,void 0,(function*(){return yield l(t,e,{type:"photo"})}))}function u(t){return a(this,void 0,void 0,(function*(){const e=o._+"/p?uid="+t;return 0===(yield i.Z.delete(e)).data.code}))}function f(t,e){return a(this,void 0,void 0,(function*(){const n=o._+"/p?uid="+t,a=yield i.Z.put(n,e);if(0===a.data.code)return a.data.msg}))}function h(t){return a(this,void 0,void 0,(function*(){const e=o._+"/p",n=yield i.Z.post(e,t);if(0===n.data.code)return n.data.msg}))}function p(t){return a(this,void 0,void 0,(function*(){const e=o._+"/p?uid="+t,n=yield i.Z.get(e);if(0===n.data.code)return n.data.data.post}))}function m(t){return a(this,void 0,void 0,(function*(){const e=o._+"/user",n=yield i.Z.get(e,{params:t});if(0===n.data.code)return n.data.data}))}},7573:(t,e,n)=>{n.d(e,{_:()=>i});const i="https://api.kevinjobs.com:5000"},4994:(t,e,n)=>{n.r(e),n.d(e,{default:()=>H});var i=n(959),o=n(2699),a=n.n(o);const r=i.createContext({width:0,height:0,toTop:0,toBottom:0}),l=t=>{const{children:e}=t,[n,o]=i.useState(window.innerWidth),[l,c]=i.useState(window.innerHeight),[s,d]=i.useState(0),[u,f]=i.useState(0);function h(){o(window.innerWidth),c(window.innerHeight)}let p;return p=()=>{const t=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0,e=document.documentElement.clientHeight||document.body.clientHeight||0,n=(document.documentElement.scrollHeight||document.body.scrollHeight||0)-t-e;d(t),f(n)},i.useEffect((()=>(window.addEventListener("resize",h),window.addEventListener("scroll",a().debounce(p,500)),()=>{window.removeEventListener("resize",h),window.removeEventListener("scroll",a().debounce(p,500))})),[]),i.createElement(r.Provider,{value:{width:n,height:l,toTop:s,toBottom:u}},e)},c=()=>{let t="desktop";const{width:e,height:n}=i.useContext(r);t=e<1080?"mobile":"desktop";return{device:t,clientWidth:e,clientHeight:n}},s=()=>{const{toTop:t,toBottom:e}=i.useContext(r);return{toTop:t,toBottom:e}};var d=n(7573),u=n(4144);function f(t,e){return Math.floor(Math.random()*(e-t))+t}var h=n(4563),p=n(3103);const m=p.ZP.div`
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
`;function v(t){const{cover:e,verse:n}=t;return i.createElement(m,{style:{backgroundImage:`url(${e})`},className:"gallery-cover"},i.createElement(g,null,n&&n.content.map(((t,e)=>i.createElement("p",{key:e},t)))))}var y=n(5726),w=n.n(y),x=n(8459),b=n(6055),E=n(274),k=function(t,e,n,i){return new(n||(n=Promise))((function(o,a){function r(t){try{c(i.next(t))}catch(t){a(t)}}function l(t){try{c(i.throw(t))}catch(t){a(t)}}function c(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(r,l)}c((i=i.apply(t,e||[])).next())}))};const A=p.ZP.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  background-color: rgba(255, 255, 255, 0.9);
  z-index: 1;
  position: relative;
`,Z=p.ZP.div`
  margin: 48px 0;
`,S=p.ZP.div``,C=p.ZP.div`
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
`,P={position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(255,249,247,1)",zIndex:10,transition:"all .3s ease-in-out",filter:"opacity(98%)"},N=(t,e,n)=>{const i=t.width/t.height;let o;const a=.8*n;o=t.height>a?a:t.height;let r=o*i;r>e&&(r=e,o=e/i);return{finalWidth:r,finalHeight:o,finalTop:50,finalLeft:(e-r)/2}};function T(){const[t,e]=i.useState(0),[n,o]=i.useState([]),[a,r]=i.useState(!1),[l,d]=i.useState(),[f,h]=i.useState(),[p,m]=i.useState(0),{clientWidth:g,clientHeight:v,device:y}=c(),{toBottom:w}=s(),x=i.useRef(),b=(t,e=12)=>k(this,void 0,void 0,(function*(){const i=yield(0,u.ms)(t,e);i&&(o(n.concat(_(i.posts))),i.amount<12?r(!1):r(!0))}));i.useEffect((()=>{b(t,12)}),[]),i.useEffect((()=>{a&&w<500&&(b(t+12,12),e(t+12))}),[w]);const T=t=>{f&&t.preventDefault(f)};return i.useEffect((()=>(window.addEventListener("wheel",T,{passive:!1}),()=>{window.removeEventListener("wheel",T)})),[f]),i.createElement(A,null,i.createElement(Z,null,0!==n.length?i.createElement(E.Rk,{data:n,cols:"mobile"===y?2:4,colWidth:"mobile"===y?(g-12)/2:320,gutter:"mobile"===y?4:24,onPreview:(t,e)=>{t.preventDefault();const n=x.current,i=t.target.parentNode.dataset.index,o=void 0!==n?n.children[i]:"",a=o.cloneNode(!0),r=o.getBoundingClientRect().width,l=o.getBoundingClientRect().height,c=o.getBoundingClientRect().top,s=o.getBoundingClientRect().left,{finalWidth:u,finalHeight:f,finalTop:p,finalLeft:y}=N(e,g,v);a.style.transition="all 0.4s ease-in-out",a.style.position="fixed",a.style.boxShadow="4px 4px 16px 8px rgba(0,0,0,0.35)",a.style.zIndex=999999,a.style.width=r+"px",a.style.height=l+"px",a.style.left=s+"px",a.style.top=c+"px",o.style.display="none",n.append(a),d(e),h(i),m(f+p),setTimeout((()=>{a.style.width=u+"px",a.style.height=f+"px",a.style.left=y+"px",a.style.top=p+"px"}),20),a.onclick=t=>{t.preventDefault(),a.style.width=r+"px",a.style.height=l+"px",a.style.left=s+"px",a.style.top=c+"px",setTimeout((()=>{n.removeChild(a),o.style.display="block"}),400),h(void 0),d(void 0)}},ref:x,shadow:!0}):i.createElement(E.gb,null),i.createElement(S,{style:f&&P},i.createElement(C,{style:{visibility:f?"visible":"hidden",position:"absolute",top:p+8,left:"50%",transform:"translateX(-50%)",flexWrap:"wrap"}},l&&z(l)))),a&&i.createElement(E.gb,null))}const _=t=>t.map(((t,e)=>{let n;try{n=JSON.parse(t.exif)}catch(t){console.log(t)}const o=d._+t.url;return{id:t.id,uid:t.uid,source:o,key:t.uid,createAt:Number(String(t.createAt).slice(0,10)),updateAt:Number(String(t.updateAt).slice(0,10)),description:t.excerpt,title:t.title,child:i.createElement("img",{src:o,"data-index":e,alt:t.title,style:{width:"100%",height:"100%"}}),width:null==n?void 0:n.width,height:null==n?void 0:n.height}})),z=t=>i.createElement(i.Fragment,null,i.createElement("div",{style:{width:"100%",textAlign:"center"}},i.createElement("h3",null,t.title)),i.createElement("span",{className:"mask-desc-item"},i.createElement(x.Z,{theme:"outline",size:"20",fill:"#333",strokeWidth:2}),i.createElement("span",{style:{margin:"0 8px"}},w().unix(t.createAt).format("YYYY-MM-DD"))),i.createElement("span",{className:"mask-desc-item"},i.createElement(b.Z,{theme:"outline",size:"20",fill:"#333",strokeWidth:2}),i.createElement("span",{style:{margin:"0 8px"}},t.description||"还没有图片说明")));var B=function(t,e,n,i){return new(n||(n=Promise))((function(o,a){function r(t){try{c(i.next(t))}catch(t){a(t)}}function l(t){try{c(i.throw(t))}catch(t){a(t)}}function c(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(r,l)}c((i=i.apply(t,e||[])).next())}))};function H(){const[t,e]=i.useState(),n=[{createAt:"2021-08-02",updateAt:"2023-10-25",id:1,uid:"4646aeraedfladlfhadiofag",title:"soso",author:"yiming",content:["来自星辰","归于星辰"]},{createAt:"2023-10-25",updateAt:"2023-10-25",id:1,uid:"daadsgasdfafa",title:"soso",author:"yiming",content:["须知少时凌云志","曾许人间第一流"]},{createAt:"2023-10-25",updateAt:"2023-10-25",id:1,uid:"4646aeraedfladlfdasfhadiofag",title:"soso",author:"yiming",content:["醉后不知天在水","满床清梦压星河"]},{createAt:"2023-10-25",updateAt:"2023-10-25",id:1,uid:"4646aeraedflad3asdfla34asfhadiofag",title:"soso",author:"yiming",content:["久雨寒蝉少","空山落叶深"]},{createAt:"2023-10-25",updateAt:"2023-10-25",id:1,uid:"4646aeraedflad3asdfla34asfhadiofag",title:"soso",author:"yiming",content:["梦里寻欢终是客","客醒五更空愁眠"]},{createAt:"2023-10-25",updateAt:"2023-10-25",id:1,uid:"4646aeraedflad3asdfla34asfhadiofag",title:"soso",author:"yiming",content:["氤氲旧时江上","曾是照影惊鸿"]}];return i.useEffect((()=>{(()=>{B(this,void 0,void 0,(function*(){const t=yield(0,u.DN)();if(t){const n=f(0,t.amount);e(t.posts[n].url)}}))})()}),[]),i.createElement(l,null,i.createElement(v,{cover:d._+t,verse:n[f(0,n.length)]}),i.createElement(T,null))}},8838:(t,e,n)=>{n.d(e,{Z:()=>l});var i=n(120),o=n.n(i),a=n(7573);const r=o().create();r.defaults.baseURL=a._,r.interceptors.request.use((t=>(t.data=JSON.stringify(t.data),t.headers={"content-type":"application/json",Authorization:`Bearer ${localStorage.getItem("token")}`},t)));const l=r}}]);