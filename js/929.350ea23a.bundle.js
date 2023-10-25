"use strict";(self.webpackChunkkevinjobs=self.webpackChunkkevinjobs||[]).push([[929],{1918:(e,t,n)=>{n.d(t,{q2:()=>g,fR:()=>f,Zt:()=>h,ms:()=>m,SD:()=>y,T6:()=>p,x4:()=>u,CP:()=>v});var i=n(1240),o=n(120),a=n.n(o),l=n(8586);const r=a().create();let s;s=i.V.production.api.baseUrl,r.defaults.baseURL=s,r.interceptors.request.use((e=>(e.data=JSON.stringify(e.data),e.headers={"content-type":"application/json",Authorization:`Bearer ${localStorage.getItem("token")}`},e))),(0,l.ZP)(r,{retries:3});const c=r;var d=function(e,t,n,i){return new(n||(n=Promise))((function(o,a){function l(e){try{s(i.next(e))}catch(e){a(e)}}function r(e){try{s(i.throw(e))}catch(e){a(e)}}function s(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(l,r)}s((i=i.apply(e,t||[])).next())}))};function u(e){return d(this,void 0,void 0,(function*(){const t=i._+"/token",n=yield c.post(t,e);if(0===n.data.code)return n.data.data}))}function p(e,t){return d(this,void 0,void 0,(function*(){const n=i._+"/post/list",o={offset:e,limit:t},a=yield c.get(n,{params:o});if(0===a.data.code)return a.data.data}))}function h(e,t){return d(this,void 0,void 0,(function*(){const n=i._+"/post/list",o={offset:e,limit:t,type:"article"},a=yield c.get(n,{params:o});if(0===a.data.code)return a.data.data}))}function m(e,t){return d(this,void 0,void 0,(function*(){const n=i._+"/post/list",o={offset:e,limit:t,type:"photo"},a=yield c.get(n,{params:o});if(0===a.data.code)return a.data.data}))}function f(e){return d(this,void 0,void 0,(function*(){const t=i._+"/p?uid="+e;return 0===(yield c.delete(t)).data.code}))}function v(e,t){return d(this,void 0,void 0,(function*(){const n=i._+"/p?uid="+e,o=yield c.put(n,t);if(0===o.data.code)return o.data.msg}))}function g(e){return d(this,void 0,void 0,(function*(){const t=i._+"/p",n=yield c.post(t,e);if(0===n.data.code)return n.data.msg}))}function y(e){return d(this,void 0,void 0,(function*(){const t=i._+"/p?uid="+e,n=yield c.get(t);if(0===n.data.code)return n.data.data.post}))}},1240:(e,t,n)=>{n.d(t,{V:()=>i,_:()=>o});const i={develop:{api:{baseUrl:"http://localhost:5000"}},production:{api:{baseUrl:"https://api.kevinjobs.com:5000"}}},o="https://api.kevinjobs.com:5000"},3944:(e,t,n)=>{n.d(t,{sv:()=>c,$Y:()=>v});var i=n(959),o=n(3103),a=n(274);const l=o.ZP.div`
  width: 100%;
`,r=o.ZP.div`
  width: 100%;
  height: 100px;
  border: 1px solid #999;
  border-radius: 4px;
  div {
    outline: none;
  }
`,s=o.ZP.div`
  max-width: 100%;
  border-top: 1px solid #d1d1d1;
  padding: 16px;
  div {
    padding: 4px 0;
  }
`;function c(){const[e,t]=i.useState([]);return i.createElement(l,null,i.createElement("div",null,i.createElement("h3",null,"评论")),i.createElement(r,null,i.createElement("div",{contentEditable:!0,onKeyDown:n=>{const i=n.target;"Enter"===n.key&&(n.preventDefault(),t(e.concat([{createAt:0,updateAt:0,content:i.innerText,id:void 0,uid:void 0,author:"匿名"}])))},style:{margin:8,height:84}})),i.createElement("div",{style:{marginTop:16,textAlign:"right",width:"100%"}},i.createElement(a.zx,{onClick:e=>e.preventDefault()},"提交"),i.createElement(a.zx,{onClick:e=>e.preventDefault(),danger:!0},"清空")),i.createElement("div",null,i.createElement("h4",null,"热门评论")),i.createElement("div",null,e.length?e.map((e=>i.createElement(s,{key:e.uid},i.createElement("div",{style:{color:"#777"}},e.author),i.createElement("div",null,e.content)))):"还没有评论"))}o.ZP.div`
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
`;var d=n(3298),u=n(8392),p=n(8903);const h=o.ZP.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0,0,0,0.75);
`,m=o.ZP.div`
  transition: all .5s ease-in-out;
  position: fixed;
  top: 0;
  height: 100vh;
  padding: 8px 0;
  z-index: 999;
`,f=o.ZP.div`
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
`;function v(e){const{isOpen:t,onClick:n,menus:o}=e,a=(0,p.TH)(),l=e=>e.paths.join("/")===a.pathname&&t?"right-navi-menu-item actived":"right-navi-menu-item",r=e=>"hash"===e.type?"/#"+e.paths.join("/"):e.paths.join("/");return i.useEffect((()=>{const e=e=>{t&&e.preventDefault()};return window.addEventListener("wheel",e,{passive:!1}),()=>{window.removeEventListener("wheel",e)}}),[t]),i.createElement(i.Fragment,null,i.createElement(m,{className:"page-article-right-navi",style:{width:300,right:t?0:-256,backgroundColor:t?"#fff":"transparent"}},i.createElement("div",{style:{marginLeft:t?16:0,transition:"all .5s ease-in-out",cursor:"pointer"}},t?i.createElement(d.Z,{theme:"outline",size:"32",fill:"#555555",strokeWidth:2,onClick:n}):i.createElement(u.Z,{theme:"outline",size:"32",fill:"#d1d1d1",strokeWidth:2,onClick:n})),i.createElement(f,{style:{visibility:t?"visible":"hidden"}},o.map((e=>{if(2===e.paths.length&&!1!==e.show)return i.createElement("div",{className:l(e),key:e.key},i.createElement("a",{href:r(e)},e.title))})))),t&&i.createElement(h,{style:{zIndex:998}}))}},9929:(e,t,n)=>{n.r(t),n.d(t,{default:()=>W});var i=n(959),o=n(7247),a=n(2699),l=n.n(a);const r=i.createContext({width:0,height:0,toTop:0,toBottom:0}),s=e=>{const{children:t}=e,[n,o]=i.useState(window.innerWidth),[a,s]=i.useState(window.innerHeight),[c,d]=i.useState(0),[u,p]=i.useState(0);function h(){o(window.innerWidth),s(window.innerHeight)}let m;return m=()=>{const e=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0,t=document.documentElement.clientHeight||document.body.clientHeight||0,n=(document.documentElement.scrollHeight||document.body.scrollHeight||0)-e-t;d(e),p(n)},i.useEffect((()=>(window.addEventListener("resize",h),window.addEventListener("scroll",l().debounce(m,500)),()=>{window.removeEventListener("resize",h),window.removeEventListener("scroll",l().debounce(m,500))})),[]),i.createElement(r.Provider,{value:{width:n,height:a,toTop:c,toBottom:u}},t)},c=()=>{let e="desktop";const{width:t,height:n}=i.useContext(r);return e=t<1080?"mobile":"desktop",{device:e,clientWidth:t,clientHeight:n}},d=()=>{const{toTop:e,toBottom:t}=i.useContext(r);return{toTop:e,toBottom:t}};var u=n(3944),p=n(4563),h=n(3103);const m=h.ZP.div`
  width: 100%;
  height: 100vh;
  background-size: cover;
  background-position: center center;
  position: sticky;
  top: 0;
`,f=h.ZP.div`
  position: absolute;
  font-size: 48px;
  top: 10%;
  right: 5%;
  color: ${p.Z.white1};
  opacity: 0.25;
  writing-mode: vertical-rl;
  line-height: 1;
  letter-spacing: 16px;
  p {
    &:nth-child(1) {
      margin-top: 0;
    }
    &:nth-child(2) {
      margin-top: 64px;
    }
  }
`;function v(e){const{cover:t,verse:n}=e;return i.createElement(m,{style:{backgroundImage:`url(${t})`},className:"gallery-cover"},i.createElement(f,null,n&&n.content.map(((e,t)=>i.createElement("p",{key:t},e)))))}var g=n(5726),y=n.n(g),w=n(8459),x=n(6055),E=n(1918),b=n(274),k=n(1240),Z=function(e,t,n,i){return new(n||(n=Promise))((function(o,a){function l(e){try{s(i.next(e))}catch(e){a(e)}}function r(e){try{s(i.throw(e))}catch(e){a(e)}}function s(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(l,r)}s((i=i.apply(e,t||[])).next())}))};const C=h.ZP.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  background-color: rgba(255, 255, 255, 0.9);
  z-index: 1;
  position: relative;
`,P=h.ZP.div`
  margin: 48px 0;
`,S=h.ZP.div``,z=h.ZP.div`
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
`,T={position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(255,249,247,1)",zIndex:10,transition:"all .3s ease-in-out",filter:"opacity(98%)"},j=(e,t,n)=>{const i=e.width/e.height;let o;const a=.8*n;o=e.height>a?a:e.height;let l=o*i;return l>t&&(l=t,o=t/i),{finalWidth:l,finalHeight:o,finalTop:50,finalLeft:(t-l)/2}};function A(){const[e,t]=i.useState(0),[n,o]=i.useState([]),[a,l]=i.useState(!1),[r,s]=i.useState(),[u,p]=i.useState(),[h,m]=i.useState(0),{clientWidth:f,clientHeight:v,device:g}=c(),{toBottom:y}=d(),w=i.useRef(),x=(e,t=12)=>Z(this,void 0,void 0,(function*(){const i=yield(0,E.ms)(e,t);i&&(o(n.concat(D(i.posts))),i.amount<12?l(!1):l(!0))}));i.useEffect((()=>{x(e,12)}),[]),i.useEffect((()=>{a&&y<500&&(x(e+12,12),t(e+12))}),[y]);const k=e=>{u&&e.preventDefault(u)};return i.useEffect((()=>(window.addEventListener("wheel",k,{passive:!1}),()=>{window.removeEventListener("wheel",k)})),[u]),i.createElement(C,null,i.createElement(P,null,0!==n.length?i.createElement(b.Rk,{data:n,cols:"mobile"===g?2:4,colWidth:"mobile"===g?(f-12)/2:320,gutter:"mobile"===g?4:24,onPreview:(e,t)=>{e.preventDefault();const n=w.current,i=e.target.parentNode.dataset.index,o=void 0!==n?n.children[i]:"",a=o.cloneNode(!0),l=o.getBoundingClientRect().width,r=o.getBoundingClientRect().height,c=o.getBoundingClientRect().top,d=o.getBoundingClientRect().left,{finalWidth:u,finalHeight:h,finalTop:g,finalLeft:y}=j(t,f,v);a.style.transition="all 0.4s ease-in-out",a.style.position="fixed",a.style.boxShadow="4px 4px 16px 8px rgba(0,0,0,0.35)",a.style.zIndex=999999,a.style.width=l+"px",a.style.height=r+"px",a.style.left=d+"px",a.style.top=c+"px",o.style.display="none",n.append(a),s(t),p(i),m(h+g),setTimeout((()=>{a.style.width=u+"px",a.style.height=h+"px",a.style.left=y+"px",a.style.top=g+"px"}),20),a.onclick=e=>{e.preventDefault(),a.style.width=l+"px",a.style.height=r+"px",a.style.left=d+"px",a.style.top=c+"px",setTimeout((()=>{n.removeChild(a),o.style.display="block"}),400),p(void 0),s(void 0)}},ref:w,shadow:!0}):i.createElement(b.gb,null),i.createElement(S,{style:u&&T},i.createElement(z,{style:{visibility:u?"visible":"hidden",position:"absolute",top:h+8,left:"50%",transform:"translateX(-50%)",flexWrap:"wrap"}},r&&L(r)))),a&&i.createElement(b.gb,null))}const D=e=>e.map(((e,t)=>{let n;try{n=JSON.parse(e.exif)}catch(e){console.log(e)}const o=k._+e.url;return{id:e.id,uid:e.uid,source:o,key:e.uid,createAt:Number(String(e.createAt).slice(0,10)),updateAt:Number(String(e.updateAt).slice(0,10)),description:e.excerpt,title:e.title,child:i.createElement("img",{src:o,"data-index":t,alt:e.title,style:{width:"100%",height:"100%"}}),width:null==n?void 0:n.width,height:null==n?void 0:n.height}})),L=e=>i.createElement(i.Fragment,null,i.createElement("div",{style:{width:"100%",textAlign:"center"}},i.createElement("h3",null,e.title)),i.createElement("span",{className:"mask-desc-item"},i.createElement(w.Z,{theme:"outline",size:"20",fill:"#333",strokeWidth:2}),i.createElement("span",{style:{margin:"0 8px"}},y().unix(e.createAt).format("YYYY-MM-DD"))),i.createElement("span",{className:"mask-desc-item"},i.createElement(x.Z,{theme:"outline",size:"20",fill:"#333",strokeWidth:2}),i.createElement("span",{style:{margin:"0 8px"}},e.description||"还没有图片说明")));function W(){const[e,t]=i.useState(!1);return i.createElement(s,null,i.createElement(v,{cover:"\n    https://mintforge-1252473272.cos.ap-nanjing.myqcloud.com/background/kayle-kaupanger.jpg\n  ",verse:{createAt:"2021-08-02",updateAt:"2021-02-02",id:1,uid:"4646aeraedfladlfhadiofag",title:"soso",author:"yiming",content:["纵潮望海阔","一览似无余"]}}),i.createElement(A,null),i.createElement(u.$Y,{isOpen:e,onClick:n=>{n.preventDefault(),t(!e)},menus:o.ps}))}}}]);