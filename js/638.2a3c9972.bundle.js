"use strict";(self.webpackChunkkevinjobs=self.webpackChunkkevinjobs||[]).push([[638,872],{2497:(e,t,n)=>{n.d(t,{Z:()=>o});var i=n(959);const o=(0,n(7166).a1)("upload",!1,(function(e){return i.createElement("svg",{width:e.size,height:e.size,viewBox:"0 0 48 48",fill:"none"},i.createElement("mask",{id:e.id+"7070702c",maskUnits:"userSpaceOnUse",x:"0",y:"0",width:"48",height:"48",style:{maskType:"alpha"}},i.createElement("path",{d:"M48 0H0V48H48V0Z",fill:e.colors[2]})),i.createElement("g",{mask:"url(#"+e.id+"7070702c)"},i.createElement("path",{d:"M6 24.0083V42H42V24",stroke:e.colors[0],strokeWidth:e.strokeWidth,strokeLinecap:e.strokeLinecap,strokeLinejoin:e.strokeLinejoin}),i.createElement("path",{d:"M33 15L24 6L15 15",stroke:e.colors[0],strokeWidth:e.strokeWidth,strokeLinecap:e.strokeLinecap,strokeLinejoin:e.strokeLinejoin}),i.createElement("path",{d:"M23.9917 32V6",stroke:e.colors[0],strokeWidth:e.strokeWidth,strokeLinecap:e.strokeLinecap,strokeLinejoin:e.strokeLinejoin})))}))},8385:(e,t,n)=>{n.d(t,{q2:()=>v,fR:()=>h,Zt:()=>u,DN:()=>m,ms:()=>p,SD:()=>k,T6:()=>d,x4:()=>c,CP:()=>f});var i=n(120),o=n.n(i),a=n(7573);const r=o().create();r.defaults.baseURL=a._,r.interceptors.request.use((e=>(e.data=JSON.stringify(e.data),e.headers={"content-type":"application/json",Authorization:`Bearer ${localStorage.getItem("token")}`},e)));const l=r;var s=function(e,t,n,i){return new(n||(n=Promise))((function(o,a){function r(e){try{s(i.next(e))}catch(e){a(e)}}function l(e){try{s(i.throw(e))}catch(e){a(e)}}function s(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(r,l)}s((i=i.apply(e,t||[])).next())}))};function c(e){return s(this,void 0,void 0,(function*(){const t=a._+"/token",n=yield l.post(t,e);if(0===n.data.code)return n.data.data}))}function d(e,t,n=null){return s(this,void 0,void 0,(function*(){const i=a._+"/post/list";let o={offset:e,limit:t,status:"publish"};n&&(o=Object.assign(Object.assign({},o),n));const r=yield l.get(i,{params:o});if(0===r.data.code)return r.data.data}))}function u(e,t){return s(this,void 0,void 0,(function*(){return yield d(e,t,{type:"article"})}))}function m(e=0,t=20){return s(this,void 0,void 0,(function*(){return yield d(e,t,{type:"cover",status:"all"})}))}function p(e,t){return s(this,void 0,void 0,(function*(){return yield d(e,t,{type:"photo"})}))}function h(e){return s(this,void 0,void 0,(function*(){const t=a._+"/p?uid="+e;return 0===(yield l.delete(t)).data.code}))}function f(e,t){return s(this,void 0,void 0,(function*(){const n=a._+"/p?uid="+e,i=yield l.put(n,t);if(0===i.data.code)return i.data.msg}))}function v(e){return s(this,void 0,void 0,(function*(){const t=a._+"/p",n=yield l.post(t,e);if(0===n.data.code)return n.data.msg}))}function k(e){return s(this,void 0,void 0,(function*(){const t=a._+"/p?uid="+e,n=yield l.get(t);if(0===n.data.code)return n.data.data.post}))}},793:(e,t,n)=>{n.d(t,{Z:()=>m});var i=n(959),o=n(120),a=n.n(o),r=n(3103),l=n(2497),s=n(4563),c=function(e,t,n,i){return new(n||(n=Promise))((function(o,a){function r(e){try{s(i.next(e))}catch(e){a(e)}}function l(e){try{s(i.throw(e))}catch(e){a(e)}}function s(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(r,l)}s((i=i.apply(e,t||[])).next())}))};const d=r.ZP.div`
  position: relative;
  width: 100%;
  border-radius: 4px;
  background-color: ${s.Z.white4};
  min-height: 80px;
  cursor: pointer;
  display: flex;
  justify-content: center;
`,u=r.ZP.div`
  position: absolute;
  top: 0;
  left: 0;
  background-color: ${s.Z.primary};
  height: 100%;
  border-radius: 8px;
  z-index: 1;
`;function m(e){const{url:t,onFinish:n,onFailed:o,allowExtensions:r}=e,[m,p]=i.useState(null),[h,f]=i.useState(0),[v,k]=i.useState(null),g=i.useRef(null),w=i.useRef(null),E="上传成功",x="失败";return i.createElement(d,{className:"component-upload",ref:g,onClick:()=>{w.current&&(w.current.click(),f(0),p(null),k(null))}},i.createElement(u,{style:{width:h,backgroundColor:m===x?s.Z.red:m===E?s.Z.green:s.Z.primary}}),i.createElement("input",{type:"file",onChange:e=>{const i=e.target.files[0],l=null==i?void 0:i.name.split(".").pop();if(!(null==r?void 0:r.includes(l)))return f("100%"),k("不被允许的格式"),void p(x);const s=new FormData;s.append("file",i),(()=>{c(this,void 0,void 0,(function*(){const e={method:"post",data:s,url:t,headers:{"content-type":"multipart/form-data",Authorization:`Bearer ${localStorage.getItem("token")}`},onUploadProgress(e){const t=Number((e.loaded/e.total).toFixed(1));g.current&&f(g.current.offsetWidth*t)}},i=yield a()(e);0===i.data.code?(p(E),n&&(n(i.data.data),k(i.data.data.origin))):(p(x),o&&o())}))})()},style:{width:1,height:1},ref:w}),i.createElement("div",{style:{zIndex:2,color:s.Z.white,top:16,position:"absolute"}},m||i.createElement(l.Z,{theme:"outline",size:"24",fill:"#333"})),i.createElement("span",{style:{position:"absolute",bottom:8,zIndex:2,color:s.Z.white}},v&&(null==v?void 0:v.slice(0,8))+"..."+(null==v?void 0:v.split(".").pop())))}},7573:(e,t,n)=>{n.d(t,{_:()=>i});const i="https://api.kevinjobs.com:5000"},588:(e,t,n)=>{n.d(t,{h4:()=>d});var i=n(959),o=n(3103),a=n(4563);const r=o.ZP.div`
  margin: 8px 0 16px 0;
  padding-bottom: 16px;
  border-bottom: 1px solid ${a.Z.white4};
  display: flex;
  align-items: center;
`,l=o.ZP.h3``,s=o.ZP.div``;function c(e){const{children:t}=e;return i.createElement(r,null,t)}c.Title=l,c.Add=s;const d=c,u=o.ZP.div`
  margin: 8px;
  display: inline-block;
  position: relative;
`,m=o.ZP.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`,p=o.ZP.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #000;
  opacity: 0.45;
`;function h(e){const[t,n]=i.useState(!1),{width:o=300,height:a=400,p:r,onEdit:l,children:s}=e,c={position:"absolute",top:a/2,left:o/2,transform:"translate(-14px, -14px)",zIndex:999,visibility:t?"visible":"hidden",cursor:"pointer"};return i.createElement(u,{style:{width:o,height:a},onMouseEnter:e=>{e.preventDefault(),n(!0)},onMouseLeave:e=>{e.preventDefault(),n(!1)}},s,i.createElement("div",{style:c,onClick:e=>l(e,r)},i.createElement("svg",{width:"28",height:"28",viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i.createElement("rect",{width:"48",height:"48",fill:"white",fillOpacity:"0.01"}),i.createElement("path",{d:"M7 42H43",stroke:"#e4e4e4",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),i.createElement("path",{d:"M11 26.7199V34H18.3172L39 13.3081L31.6951 6L11 26.7199Z",fill:"none",stroke:"#e4e4e4",strokeWidth:"2",strokeLinejoin:"round"}))),t?i.createElement(p,null):"")}h.Img=m;o.ZP.div`
  padding-bottom: 64px;
`},9475:(e,t,n)=>{n.r(t),n.d(t,{default:()=>h});var i=n(959),o=n(3103),a=n(588),r=n(793),l=n(7573),s=n(8385),c=n(5872);const d=(0,n(7166).a1)("close-one",!1,(function(e){return i.createElement("svg",{width:e.size,height:e.size,viewBox:"0 0 48 48",fill:"none"},i.createElement("path",{d:"M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z",fill:e.colors[1],stroke:e.colors[0],strokeWidth:e.strokeWidth,strokeLinejoin:e.strokeLinejoin}),i.createElement("path",{d:"M29.6567 18.3432L18.343 29.6569",stroke:e.colors[2],strokeWidth:e.strokeWidth,strokeLinecap:e.strokeLinecap,strokeLinejoin:e.strokeLinejoin}),i.createElement("path",{d:"M18.3433 18.3432L29.657 29.6569",stroke:e.colors[2],strokeWidth:e.strokeWidth,strokeLinecap:e.strokeLinecap,strokeLinejoin:e.strokeLinejoin}))}));var u=function(e,t,n,i){return new(n||(n=Promise))((function(o,a){function r(e){try{s(i.next(e))}catch(e){a(e)}}function l(e){try{s(i.throw(e))}catch(e){a(e)}}function s(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(r,l)}s((i=i.apply(e,t||[])).next())}))};const m=o.ZP.div``,p=o.ZP.div`
  display: flex;
  .main {
    margin: 0 auto;
    
    .upload {
      width: 300px;
    }
    .uploaded {
      margin-top: 32px;
      width: 300px;
    }
  }
  .preview {
    margin-left: 32px;
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    flex-grow: 1;
    .preview-item {
      margin: 0 8px 16px 8px;
      height: 200px;
      width: 300px;
      position: relative;
      .del {
        position: absolute;
        right: -10px;
        top: -10px;
      }
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
`;function h(){const[e,t]=i.useState(null),[n,o]=i.useState(),d=()=>{(()=>{u(this,void 0,void 0,(function*(){const e=yield(0,s.DN)();e&&o(e.posts.map((e=>(e.url=e.url.replace("static/","static/thumb-"),e))))}))})()},h=()=>{d()};return i.useEffect((()=>{d()}),[]),i.createElement(m,null,i.createElement(a.h4,null,i.createElement(a.h4.Title,null,"画廊封面编辑")),i.createElement(p,null,i.createElement("div",{className:"main"},i.createElement("div",{className:"upload"},i.createElement(r.Z,{url:l._+"/upload",onFinish:e=>{e&&(t(e.url),(()=>{u(this,void 0,void 0,(function*(){(yield(0,s.q2)({title:`gallery-cover-${(new Date).valueOf()}`,author:(0,c.getLocalStorage)().name,type:"cover",url:e.url,exif:JSON.stringify({width:e.width,height:e.height})}))?(window.alert("添加封面成功"),d()):window.alert("添加失败")}))})())},allowExtensions:["jpg","jpeg","webp","png"]})),i.createElement("div",{className:"uploaded"},e&&i.createElement("img",{src:l._+e,title:"gallery-cover",style:{width:"100%",height:"100%",objectFit:"cover"}}))),i.createElement("div",{className:"preview"},n&&n.map((e=>f(e,h))))))}const f=(e,t)=>i.createElement("div",{className:"preview-item"},i.createElement("div",{className:"del",onClick:()=>{const n=e.uid;window.confirm("确定删除吗")&&u(void 0,void 0,void 0,(function*(){(yield(0,s.fR)(n))?(window.alert("删除成功"),t&&t()):window.alert("删除失败")}))}},i.createElement(d,{theme:"outline",size:"24",fill:"#d0021b"})),i.createElement("img",{src:l._+e.url,alt:e.title}))},5872:(e,t,n)=>{n.r(t),n.d(t,{default:()=>y,getLocalStorage:()=>x});var i=n(959),o=n(8903),a=n(3103),r=n(274),l=n(8385);const s=a.ZP.div`
  width: 100%;
  height: 60px;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 48px;
  .container {
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    .version {
      margin-right: 16px;
    }
  }
`,c=a.ZP.div`
  width: 100%;
  margin-top: 32px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  label {
    width: 50px;
    text-align: right;
  }
`;function d(e){const{isLogin:t,isLoginDialogVisible:n,onSubmit:o,onCancel:a,onLogin:l,onLogout:d}=e,[u,m]=i.useState(""),[p,h]=i.useState(""),[f,v]=i.useState(""),k=e=>{e.preventDefault(),window.confirm("确定要登出吗？")&&d(e)};return i.createElement(s,{className:"admin-navbar"},i.createElement("div",{className:"logo"},i.createElement("h2",null,"后台管理系统")),i.createElement("div",{className:"container"},i.createElement("div",{className:"version"},"v1.1.0"),i.createElement("div",{className:"search"},i.createElement(r.II,{value:u,onChange:e=>m(e.target.value)})),i.createElement("div",{className:"user-status"},t?i.createElement("div",{className:"user"},i.createElement("div",{className:"avatar"}),i.createElement("div",{className:"name"}),i.createElement("div",{className:"level"}),i.createElement("div",{className:"logout"},i.createElement(r.zx,{onClick:k,type:"light"},"登出"))):i.createElement(r.zx,{className:"login",type:"primary",onClick:l},"登录"))),i.createElement(r.Vq,{title:"登录界面",visible:n,onCancel:a,animation:"slide-top-down",width:400,height:400},i.createElement(c,null,i.createElement("div",{style:{width:250}},i.createElement("form",null,i.createElement(r.II,{label:"账号",value:p,name:"username",onChange:e=>h(e.target.value)}),i.createElement(r.II,{type:"password",label:"密码",value:f,name:"password",onChange:e=>v(e.target.value),autoComplete:"on"}))),i.createElement("div",{style:{width:"100%",textAlign:"center",marginTop:24}},i.createElement(r.zx,{type:"primary",onClick:e=>((e,t)=>{e.preventDefault(),o(e,t)})(e,{username:p,password:f})},"登录"),i.createElement(r.zx,{onClick:a},"取消")))))}var u=n(4563),m=n(7166);const p=(0,m.a1)("blocks-and-arrows",!0,(function(e){return i.createElement("svg",{width:e.size,height:e.size,viewBox:"0 0 48 48",fill:"none"},i.createElement("path",{d:"M20 6H6V20H20V6Z",fill:e.colors[1],stroke:e.colors[0],strokeWidth:e.strokeWidth,strokeLinecap:e.strokeLinecap,strokeLinejoin:e.strokeLinejoin}),i.createElement("path",{d:"M20 28H6V42H20V28Z",fill:e.colors[1],stroke:e.colors[0],strokeWidth:e.strokeWidth,strokeLinecap:e.strokeLinecap,strokeLinejoin:e.strokeLinejoin}),i.createElement("path",{d:"M42 6H28V20H42V6Z",fill:e.colors[1],stroke:e.colors[0],strokeWidth:e.strokeWidth,strokeLinecap:e.strokeLinecap,strokeLinejoin:e.strokeLinejoin}),i.createElement("path",{d:"M28 28L42 42M28 28H42H28ZM28 28V42V28Z",stroke:e.colors[0],strokeWidth:e.strokeWidth,strokeLinecap:e.strokeLinecap,strokeLinejoin:e.strokeLinejoin}))})),h=(0,m.a1)("config",!1,(function(e){return i.createElement("svg",{width:e.size,height:e.size,viewBox:"0 0 48 48",fill:"none"},i.createElement("path",{d:"M24 4L18 10H10V18L4 24L10 30V38H18L24 44L30 38H38V30L44 24L38 18V10H30L24 4Z",fill:e.colors[1],stroke:e.colors[0],strokeWidth:e.strokeWidth,strokeLinejoin:e.strokeLinejoin}),i.createElement("path",{d:"M24 30C27.3137 30 30 27.3137 30 24C30 20.6863 27.3137 18 24 18C20.6863 18 18 20.6863 18 24C18 27.3137 20.6863 30 24 30Z",fill:e.colors[3],stroke:e.colors[2],strokeWidth:e.strokeWidth,strokeLinejoin:e.strokeLinejoin}))}));var f=n(7247);const v=a.ZP.div`
  margin-top: 10px;
  height: calc(100vh - 70px);
  width: 250px;
  min-width: 250px;
  background-color: ${u.Z.white};
  a.active {
    color: ${u.Z.blue};
  }
`;function k(){const e=e=>i.createElement(r.v2.Item,{icon:e.icon,key:e.key},i.createElement(r.rU,{to:e.paths.join("/")},e.title));return i.createElement(v,{className:"admin-navigator"},i.createElement(r.v2,{mode:"inline"},i.createElement(r.v2.Item,{icon:f.Ge.icon},i.createElement(r.rU,{to:f.Ge.paths.join("/")},f.Ge.title)),i.createElement(r.v2.SubMenu,{title:"内容管理",isOpen:!0,icon:i.createElement(p,{theme:"outline",size:"20",fill:"#333",strokeWidth:2})},f._J.map(e)),i.createElement(r.v2.SubMenu,{title:"系统管理",isOpen:!0,icon:i.createElement(h,{theme:"outline",size:"20",fill:"#333",strokeWidth:2})},f.Ih.map(e))))}var g=function(e,t,n,i){return new(n||(n=Promise))((function(o,a){function r(e){try{s(i.next(e))}catch(e){a(e)}}function l(e){try{s(i.throw(e))}catch(e){a(e)}}function s(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(r,l)}s((i=i.apply(e,t||[])).next())}))};const w=f._J.concat(f.Ge).concat(f.Ih),E=a.ZP.div`
  height: 100vh;
  display: flex;
  flex-wrap: wrap;
  overflow: hidden;
  .main-container {
    width: 100vw;
    display: flex;
    .admin-content {
      background-color: #ffffff;
      margin: 10px 0 0 10px;
      padding: 16px 32px;
      height: calc(100vh - 70px);
      overflow-y: scroll;
      flex-grow: 1;
    }
  }
`,x=()=>({token:localStorage.getItem("token"),name:localStorage.getItem("name")});function y(){const[e,t]=i.useState(!1),[n,a]=i.useState(!1),s=(0,o.k6)(),c=(e,n)=>{(()=>{g(this,void 0,void 0,(function*(){const e=yield(0,l.x4)(n);var i,o;e?(i=e.token,o=n.username,localStorage.setItem("token",i),localStorage.setItem("name",o),a(!1),t(!0),s.go(0)):window.alert("登录失败")}))})()};return i.useEffect((()=>{const{token:e,name:n}=x();e&&n&&t(!0)}),[]),i.createElement(E,{className:"admin"},i.createElement(d,{isLogin:e,isLoginDialogVisible:n,onSubmit:(e,t)=>c(0,t),onLogin:e=>{e.preventDefault(),a(!0)},onLogout:e=>{e.preventDefault(),t(!1),localStorage.removeItem("token"),localStorage.removeItem("name"),s.go(0)},onCancel:e=>{e.preventDefault(),a(!1)}}),i.createElement("div",{className:"main-container"},i.createElement(k,null),i.createElement("div",{className:"admin-content"},i.createElement(i.Suspense,{fallback:i.createElement(r.gb,null)},i.createElement(o.rs,null,w.map((e=>i.createElement(o.AW,{exact:e.exact,path:e.paths.join("/"),component:e.component,key:e.key}))),i.createElement(o.l_,{from:"/admin",to:"/admin/home"}))))))}}}]);