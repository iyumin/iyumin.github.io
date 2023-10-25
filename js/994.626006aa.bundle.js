"use strict";(self.webpackChunkkevinjobs=self.webpackChunkkevinjobs||[]).push([[994],{8385:(e,t,n)=>{n.d(t,{q2:()=>v,fR:()=>f,Zt:()=>u,DN:()=>h,ms:()=>p,SD:()=>g,T6:()=>s,x4:()=>c,CP:()=>m});var i=n(120),o=n.n(i),a=n(7573);const l=o().create();l.defaults.baseURL=a._,l.interceptors.request.use((e=>(e.data=JSON.stringify(e.data),e.headers={"content-type":"application/json",Authorization:`Bearer ${localStorage.getItem("token")}`},e)));const r=l;var d=function(e,t,n,i){return new(n||(n=Promise))((function(o,a){function l(e){try{d(i.next(e))}catch(e){a(e)}}function r(e){try{d(i.throw(e))}catch(e){a(e)}}function d(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(l,r)}d((i=i.apply(e,t||[])).next())}))};function c(e){return d(this,void 0,void 0,(function*(){const t=a._+"/token",n=yield r.post(t,e);if(0===n.data.code)return n.data.data}))}function s(e,t,n=null){return d(this,void 0,void 0,(function*(){const i=a._+"/post/list";let o={offset:e,limit:t,status:"publish"};n&&(o=Object.assign(Object.assign({},o),n));const l=yield r.get(i,{params:o});if(0===l.data.code)return l.data.data}))}function u(e,t){return d(this,void 0,void 0,(function*(){return yield s(e,t,{type:"article"})}))}function h(e=0,t=20){return d(this,void 0,void 0,(function*(){return yield s(e,t,{type:"cover",status:"all"})}))}function p(e,t){return d(this,void 0,void 0,(function*(){return yield s(e,t,{type:"photo"})}))}function f(e){return d(this,void 0,void 0,(function*(){const t=a._+"/p?uid="+e;return 0===(yield r.delete(t)).data.code}))}function m(e,t){return d(this,void 0,void 0,(function*(){const n=a._+"/p?uid="+e,i=yield r.put(n,t);if(0===i.data.code)return i.data.msg}))}function v(e){return d(this,void 0,void 0,(function*(){const t=a._+"/p",n=yield r.post(t,e);if(0===n.data.code)return n.data.msg}))}function g(e){return d(this,void 0,void 0,(function*(){const t=a._+"/p?uid="+e,n=yield r.get(t);if(0===n.data.code)return n.data.data.post}))}},7573:(e,t,n)=>{n.d(t,{_:()=>i});const i="https://api.kevinjobs.com:5000"},3944:(e,t,n)=>{n.d(t,{sv:()=>c,$Y:()=>v});var i=n(959),o=n(3103),a=n(274);const l=o.ZP.div`
  width: 100%;
`,r=o.ZP.div`
  width: 100%;
  height: 100px;
  border: 1px solid #999;
  border-radius: 4px;
  div {
    outline: none;
  }
`,d=o.ZP.div`
  max-width: 100%;
  border-top: 1px solid #d1d1d1;
  padding: 16px;
  div {
    padding: 4px 0;
  }
`;function c(){const[e,t]=i.useState([]);return i.createElement(l,null,i.createElement("div",null,i.createElement("h3",null,"评论")),i.createElement(r,null,i.createElement("div",{contentEditable:!0,onKeyDown:n=>{const i=n.target;"Enter"===n.key&&(n.preventDefault(),t(e.concat([{createAt:0,updateAt:0,content:i.innerText,id:void 0,uid:void 0,author:"匿名"}])))},style:{margin:8,height:84}})),i.createElement("div",{style:{marginTop:16,textAlign:"right",width:"100%"}},i.createElement(a.zx,{onClick:e=>e.preventDefault()},"提交"),i.createElement(a.zx,{onClick:e=>e.preventDefault(),danger:!0},"清空")),i.createElement("div",null,i.createElement("h4",null,"热门评论")),i.createElement("div",null,e.length?e.map((e=>i.createElement(d,{key:e.uid},i.createElement("div",{style:{color:"#777"}},e.author),i.createElement("div",null,e.content)))):"还没有评论"))}o.ZP.div`
position: relative;
  display: inline-block;
  cursor: pointer;
  width: 44px;
  height: 44px;
  //overflow: hidden;
  .triple-menu-line {
    position: absolute;
    width: 88px;
    left: 0;
    top: 0;
    border: none;
    border-top: 2px solid #000;
  }
`;var s=n(3298),u=n(8392),h=n(8903);const p=o.ZP.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0,0,0,0.75);
`,f=o.ZP.div`
  transition: all .5s ease-in-out;
  position: fixed;
  top: 0;
  height: 100vh;
  padding: 8px 0;
  z-index: 999;
`,m=o.ZP.div`
  padding: 32px 0;
  text-align: center;
  .right-navi-menu-item {
    padding: 16px 0;
    transition: all .1s ease-in-out;
    &.actived {
      background-color: #777;
      a { color: #f1f1f1; }
    }
    &:hover {
      background-color: #333;
      a { color: #f1f1f1; }
    }
    a {
      text-decoration: none;
      color: #000;
    }
  }
`;function v(e){const{isOpen:t,onClick:n,menus:o}=e,a=(0,h.TH)(),l=e=>e.paths.join("/")===a.pathname&&t?"right-navi-menu-item actived":"right-navi-menu-item",r=e=>"hash"===e.type?"/#"+e.paths.join("/"):e.paths.join("/");return i.useEffect((()=>{const e=e=>{t&&e.preventDefault()};return window.addEventListener("wheel",e,{passive:!1}),()=>{window.removeEventListener("wheel",e)}}),[t]),i.createElement(i.Fragment,null,i.createElement(f,{className:"page-article-right-navi",style:{width:300,right:t?0:-256,backgroundColor:t?"#fff":"transparent"}},i.createElement("div",{style:{marginLeft:t?16:0,transition:"all .5s ease-in-out",cursor:"pointer"}},t?i.createElement(s.Z,{theme:"outline",size:"32",fill:"#555555",strokeWidth:2,onClick:n}):i.createElement(u.Z,{theme:"outline",size:"32",fill:"#d1d1d1",strokeWidth:2,onClick:n})),i.createElement(m,{style:{visibility:t?"visible":"hidden"}},o.map((e=>{if(2===e.paths.length&&!1!==e.show)return i.createElement("div",{className:l(e),key:e.key},i.createElement("a",{href:r(e)},e.title))})))),t&&i.createElement(p,{style:{zIndex:998}}))}},4994:(e,t,n)=>{n.r(t),n.d(t,{default:()=>H});var i=n(959),o=n(7247),a=n(2699),l=n.n(a);const r=i.createContext({width:0,height:0,toTop:0,toBottom:0}),d=e=>{const{children:t}=e,[n,o]=i.useState(window.innerWidth),[a,d]=i.useState(window.innerHeight),[c,s]=i.useState(0),[u,h]=i.useState(0);function p(){o(window.innerWidth),d(window.innerHeight)}let f;return f=()=>{const e=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0,t=document.documentElement.clientHeight||document.body.clientHeight||0,n=(document.documentElement.scrollHeight||document.body.scrollHeight||0)-e-t;s(e),h(n)},i.useEffect((()=>(window.addEventListener("resize",p),window.addEventListener("scroll",l().debounce(f,500)),()=>{window.removeEventListener("resize",p),window.removeEventListener("scroll",l().debounce(f,500))})),[]),i.createElement(r.Provider,{value:{width:n,height:a,toTop:c,toBottom:u}},t)},c=()=>{let e="desktop";const{width:t,height:n}=i.useContext(r);return e=t<1080?"mobile":"desktop",{device:e,clientWidth:t,clientHeight:n}},s=()=>{const{toTop:e,toBottom:t}=i.useContext(r);return{toTop:e,toBottom:t}};var u=n(3944),h=n(7573),p=n(8385);function f(e,t){return Math.floor(Math.random()*(t-e))+e}var m=n(4563),v=n(3103);const g=v.ZP.div`
  width: 100%;
  height: 100vh;
  background-size: cover;
  background-position: center center;
  position: sticky;
  top: 0;
`,y=v.ZP.div`
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
`;function w(e){const{cover:t,verse:n}=e;return i.createElement(g,{style:{backgroundImage:`url(${t})`},className:"gallery-cover"},i.createElement(y,null,n&&n.content.map(((e,t)=>i.createElement("p",{key:t},e)))))}var x=n(5726),E=n.n(x),b=n(8459),k=n(6055),A=n(274),S=function(e,t,n,i){return new(n||(n=Promise))((function(o,a){function l(e){try{d(i.next(e))}catch(e){a(e)}}function r(e){try{d(i.throw(e))}catch(e){a(e)}}function d(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(l,r)}d((i=i.apply(e,t||[])).next())}))};const Z=v.ZP.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  background-color: rgba(255, 255, 255, 0.9);
  z-index: 1;
  position: relative;
`,C=v.ZP.div`
  margin: 48px 0;
`,P=v.ZP.div``,z=v.ZP.div`
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
`,D={position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(255,249,247,1)",zIndex:10,transition:"all .3s ease-in-out",filter:"opacity(98%)"},T=(e,t,n)=>{const i=e.width/e.height;let o;const a=.8*n;o=e.height>a?a:e.height;let l=o*i;return l>t&&(l=t,o=t/i),{finalWidth:l,finalHeight:o,finalTop:50,finalLeft:(t-l)/2}};function N(){const[e,t]=i.useState(0),[n,o]=i.useState([]),[a,l]=i.useState(!1),[r,d]=i.useState(),[u,h]=i.useState(),[f,m]=i.useState(0),{clientWidth:v,clientHeight:g,device:y}=c(),{toBottom:w}=s(),x=i.useRef(),E=(e,t=12)=>S(this,void 0,void 0,(function*(){const i=yield(0,p.ms)(e,t);i&&(o(n.concat(L(i.posts))),i.amount<12?l(!1):l(!0))}));i.useEffect((()=>{E(e,12)}),[]),i.useEffect((()=>{a&&w<500&&(E(e+12,12),t(e+12))}),[w]);const b=e=>{u&&e.preventDefault(u)};return i.useEffect((()=>(window.addEventListener("wheel",b,{passive:!1}),()=>{window.removeEventListener("wheel",b)})),[u]),i.createElement(Z,null,i.createElement(C,null,0!==n.length?i.createElement(A.Rk,{data:n,cols:"mobile"===y?2:4,colWidth:"mobile"===y?(v-12)/2:320,gutter:"mobile"===y?4:24,onPreview:(e,t)=>{e.preventDefault();const n=x.current,i=e.target.parentNode.dataset.index,o=void 0!==n?n.children[i]:"",a=o.cloneNode(!0),l=o.getBoundingClientRect().width,r=o.getBoundingClientRect().height,c=o.getBoundingClientRect().top,s=o.getBoundingClientRect().left,{finalWidth:u,finalHeight:p,finalTop:f,finalLeft:y}=T(t,v,g);a.style.transition="all 0.4s ease-in-out",a.style.position="fixed",a.style.boxShadow="4px 4px 16px 8px rgba(0,0,0,0.35)",a.style.zIndex=999999,a.style.width=l+"px",a.style.height=r+"px",a.style.left=s+"px",a.style.top=c+"px",o.style.display="none",n.append(a),d(t),h(i),m(p+f),setTimeout((()=>{a.style.width=u+"px",a.style.height=p+"px",a.style.left=y+"px",a.style.top=f+"px"}),20),a.onclick=e=>{e.preventDefault(),a.style.width=l+"px",a.style.height=r+"px",a.style.left=s+"px",a.style.top=c+"px",setTimeout((()=>{n.removeChild(a),o.style.display="block"}),400),h(void 0),d(void 0)}},ref:x,shadow:!0}):i.createElement(A.gb,null),i.createElement(P,{style:u&&D},i.createElement(z,{style:{visibility:u?"visible":"hidden",position:"absolute",top:f+8,left:"50%",transform:"translateX(-50%)",flexWrap:"wrap"}},r&&W(r)))),a&&i.createElement(A.gb,null))}const L=e=>e.map(((e,t)=>{let n;try{n=JSON.parse(e.exif)}catch(e){console.log(e)}const o=h._+e.url;return{id:e.id,uid:e.uid,source:o,key:e.uid,createAt:Number(String(e.createAt).slice(0,10)),updateAt:Number(String(e.updateAt).slice(0,10)),description:e.excerpt,title:e.title,child:i.createElement("img",{src:o,"data-index":t,alt:e.title,style:{width:"100%",height:"100%"}}),width:null==n?void 0:n.width,height:null==n?void 0:n.height}})),W=e=>i.createElement(i.Fragment,null,i.createElement("div",{style:{width:"100%",textAlign:"center"}},i.createElement("h3",null,e.title)),i.createElement("span",{className:"mask-desc-item"},i.createElement(b.Z,{theme:"outline",size:"20",fill:"#333",strokeWidth:2}),i.createElement("span",{style:{margin:"0 8px"}},E().unix(e.createAt).format("YYYY-MM-DD"))),i.createElement("span",{className:"mask-desc-item"},i.createElement(k.Z,{theme:"outline",size:"20",fill:"#333",strokeWidth:2}),i.createElement("span",{style:{margin:"0 8px"}},e.description||"还没有图片说明")));var j=function(e,t,n,i){return new(n||(n=Promise))((function(o,a){function l(e){try{d(i.next(e))}catch(e){a(e)}}function r(e){try{d(i.throw(e))}catch(e){a(e)}}function d(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(l,r)}d((i=i.apply(e,t||[])).next())}))};function H(){const[e,t]=i.useState(!1),[n,a]=i.useState(),l=[{createAt:"2021-08-02",updateAt:"2023-10-25",id:1,uid:"4646aeraedfladlfhadiofag",title:"soso",author:"yiming",content:["来自星辰","归于星辰"]},{createAt:"2023-10-25",updateAt:"2023-10-25",id:1,uid:"daadsgasdfafa",title:"soso",author:"yiming",content:["须知少时凌云志","曾许人间第一流"]},{createAt:"2023-10-25",updateAt:"2023-10-25",id:1,uid:"4646aeraedfladlfdasfhadiofag",title:"soso",author:"yiming",content:["醉后不知天在水","满床清梦压星河"]},{createAt:"2023-10-25",updateAt:"2023-10-25",id:1,uid:"4646aeraedflad3asdfla34asfhadiofag",title:"soso",author:"yiming",content:["久雨寒蝉少","空山落叶深"]},{createAt:"2023-10-25",updateAt:"2023-10-25",id:1,uid:"4646aeraedflad3asdfla34asfhadiofag",title:"soso",author:"yiming",content:["梦里寻欢终是客","客醒五更空愁眠"]},{createAt:"2023-10-25",updateAt:"2023-10-25",id:1,uid:"4646aeraedflad3asdfla34asfhadiofag",title:"soso",author:"yiming",content:["氤氲旧时江上","曾是照影惊鸿"]}];return i.useEffect((()=>{(()=>{j(this,void 0,void 0,(function*(){const e=yield(0,p.DN)();if(e){const t=f(0,e.amount);a(e.posts[t].url)}}))})()}),[]),i.createElement(d,null,i.createElement(w,{cover:h._+n,verse:l[f(0,l.length)]}),i.createElement(N,null),i.createElement(u.$Y,{isOpen:e,onClick:n=>{n.preventDefault(),t(!e)},menus:o.ps}))}}}]);