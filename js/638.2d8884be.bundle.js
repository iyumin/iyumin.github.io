"use strict";(self.webpackChunkkevinjobs=self.webpackChunkkevinjobs||[]).push([[638,872],{2497:(e,t,n)=>{n.d(t,{Z:()=>i});var o=n(959);const i=(0,n(7166).a1)("upload",!1,(function(e){return o.createElement("svg",{width:e.size,height:e.size,viewBox:"0 0 48 48",fill:"none"},o.createElement("mask",{id:e.id+"7070702c",maskUnits:"userSpaceOnUse",x:"0",y:"0",width:"48",height:"48",style:{maskType:"alpha"}},o.createElement("path",{d:"M48 0H0V48H48V0Z",fill:e.colors[2]})),o.createElement("g",{mask:"url(#"+e.id+"7070702c)"},o.createElement("path",{d:"M6 24.0083V42H42V24",stroke:e.colors[0],strokeWidth:e.strokeWidth,strokeLinecap:e.strokeLinecap,strokeLinejoin:e.strokeLinejoin}),o.createElement("path",{d:"M33 15L24 6L15 15",stroke:e.colors[0],strokeWidth:e.strokeWidth,strokeLinecap:e.strokeLinecap,strokeLinejoin:e.strokeLinejoin}),o.createElement("path",{d:"M23.9917 32V6",stroke:e.colors[0],strokeWidth:e.strokeWidth,strokeLinecap:e.strokeLinecap,strokeLinejoin:e.strokeLinejoin})))}))},8385:(e,t,n)=>{n.d(t,{q2:()=>v,fR:()=>h,Zt:()=>u,DN:()=>m,ms:()=>p,SD:()=>k,T6:()=>d,x4:()=>s,CP:()=>f});var o=n(120),i=n.n(o),a=n(7573);const r=i().create();r.defaults.baseURL=a._,r.interceptors.request.use((e=>(e.data=JSON.stringify(e.data),e.headers={"content-type":"application/json",Authorization:`Bearer ${localStorage.getItem("token")}`},e)));const l=r;var c=function(e,t,n,o){return new(n||(n=Promise))((function(i,a){function r(e){try{c(o.next(e))}catch(e){a(e)}}function l(e){try{c(o.throw(e))}catch(e){a(e)}}function c(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(r,l)}c((o=o.apply(e,t||[])).next())}))};function s(e){return c(this,void 0,void 0,(function*(){const t=a._+"/token",n=yield l.post(t,e);if(0===n.data.code)return n.data.data}))}function d(e,t,n=null){return c(this,void 0,void 0,(function*(){const o=a._+"/post/list";let i={offset:e,limit:t,status:"publish"};n&&(i=Object.assign(Object.assign({},i),n));const r=yield l.get(o,{params:i});if(0===r.data.code)return r.data.data}))}function u(e,t){return c(this,void 0,void 0,(function*(){return yield d(e,t,{type:"article"})}))}function m(e=0,t=20){return c(this,void 0,void 0,(function*(){return yield d(e,t,{type:"cover",status:"all"})}))}function p(e,t){return c(this,void 0,void 0,(function*(){return yield d(e,t,{type:"photo"})}))}function h(e){return c(this,void 0,void 0,(function*(){const t=a._+"/p?uid="+e;return 0===(yield l.delete(t)).data.code}))}function f(e,t){return c(this,void 0,void 0,(function*(){const n=a._+"/p?uid="+e,o=yield l.put(n,t);if(0===o.data.code)return o.data.msg}))}function v(e){return c(this,void 0,void 0,(function*(){const t=a._+"/p",n=yield l.post(t,e);if(0===n.data.code)return n.data.msg}))}function k(e){return c(this,void 0,void 0,(function*(){const t=a._+"/p?uid="+e,n=yield l.get(t);if(0===n.data.code)return n.data.data.post}))}},793:(e,t,n)=>{n.d(t,{Z:()=>m});var o=n(959),i=n(120),a=n.n(i),r=n(3103),l=n(2497),c=n(4563),s=function(e,t,n,o){return new(n||(n=Promise))((function(i,a){function r(e){try{c(o.next(e))}catch(e){a(e)}}function l(e){try{c(o.throw(e))}catch(e){a(e)}}function c(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(r,l)}c((o=o.apply(e,t||[])).next())}))};const d=r.ZP.div`
  position: relative;
  width: 100%;
  border-radius: 4px;
  background-color: ${c.Z.white4};
  min-height: 80px;
  cursor: pointer;
  display: flex;
  justify-content: center;
`,u=r.ZP.div`
  position: absolute;
  top: 0;
  left: 0;
  background-color: ${c.Z.primary};
  height: 100%;
  border-radius: 8px;
  z-index: 1;
`;function m(e){const{url:t,onFinish:n,onFailed:i,allowExtensions:r}=e,[m,p]=o.useState(null),[h,f]=o.useState(0),[v,k]=o.useState(null),g=o.useRef(null),w=o.useRef(null),E="上传成功",x="失败";return o.createElement(d,{className:"component-upload",ref:g,onClick:()=>{w.current&&(w.current.click(),f(0),p(null),k(null))}},o.createElement(u,{style:{width:h,backgroundColor:m===x?c.Z.red:m===E?c.Z.green:c.Z.primary}}),o.createElement("input",{type:"file",onChange:e=>{const o=e.target.files[0],l=null==o?void 0:o.name.split(".").pop();if(!(null==r?void 0:r.includes(l)))return f("100%"),k("不被允许的格式"),void p(x);const c=new FormData;c.append("file",o),(()=>{s(this,void 0,void 0,(function*(){const e={method:"post",data:c,url:t,headers:{"content-type":"multipart/form-data",Authorization:`Bearer ${localStorage.getItem("token")}`},onUploadProgress(e){const t=Number((e.loaded/e.total).toFixed(1));g.current&&f(g.current.offsetWidth*t)}},o=yield a()(e);0===o.data.code?(p(E),n&&(n(o.data.data),k(o.data.data.origin))):(p(x),i&&i())}))})()},style:{width:1,height:1},ref:w}),o.createElement("div",{style:{zIndex:2,color:c.Z.white,top:16,position:"absolute"}},m||o.createElement(l.Z,{theme:"outline",size:"24",fill:"#333"})),o.createElement("span",{style:{position:"absolute",bottom:8,zIndex:2,color:c.Z.white}},v&&(null==v?void 0:v.slice(0,8))+"..."+(null==v?void 0:v.split(".").pop())))}},7573:(e,t,n)=>{n.d(t,{_:()=>o});const o="https://api.kevinjobs.com:5000"},588:(e,t,n)=>{n.d(t,{h4:()=>d});var o=n(959),i=n(3103),a=n(4563);const r=i.ZP.div`
  margin: 8px 0 16px 0;
  padding-bottom: 16px;
  border-bottom: 1px solid ${a.Z.white4};
  display: flex;
  align-items: center;
`,l=i.ZP.h3``,c=i.ZP.div``;function s(e){const{children:t}=e;return o.createElement(r,null,t)}s.Title=l,s.Add=c;const d=s;i.ZP.div`
  margin: 8px;
  display: inline-block;
  position: relative;
`,i.ZP.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`,i.ZP.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #000;
  opacity: 0.45;
`;i.ZP.div`
  padding-bottom: 64px;
`},9475:(e,t,n)=>{n.r(t),n.d(t,{default:()=>h});var o=n(959),i=n(3103),a=n(588),r=n(793),l=n(7573),c=n(8385),s=n(5872);const d=(0,n(7166).a1)("close-one",!1,(function(e){return o.createElement("svg",{width:e.size,height:e.size,viewBox:"0 0 48 48",fill:"none"},o.createElement("path",{d:"M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z",fill:e.colors[1],stroke:e.colors[0],strokeWidth:e.strokeWidth,strokeLinejoin:e.strokeLinejoin}),o.createElement("path",{d:"M29.6567 18.3432L18.343 29.6569",stroke:e.colors[2],strokeWidth:e.strokeWidth,strokeLinecap:e.strokeLinecap,strokeLinejoin:e.strokeLinejoin}),o.createElement("path",{d:"M18.3433 18.3432L29.657 29.6569",stroke:e.colors[2],strokeWidth:e.strokeWidth,strokeLinecap:e.strokeLinecap,strokeLinejoin:e.strokeLinejoin}))}));var u=function(e,t,n,o){return new(n||(n=Promise))((function(i,a){function r(e){try{c(o.next(e))}catch(e){a(e)}}function l(e){try{c(o.throw(e))}catch(e){a(e)}}function c(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(r,l)}c((o=o.apply(e,t||[])).next())}))};const m=i.ZP.div``,p=i.ZP.div`
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
`;function h(){const[e,t]=o.useState(null),[n,i]=o.useState(),d=()=>{(()=>{u(this,void 0,void 0,(function*(){const e=yield(0,c.DN)();e&&i(e.posts.map((e=>(e.url=e.url.replace("static/","static/thumb-"),e))))}))})()},h=()=>{d()};return o.useEffect((()=>{d()}),[]),o.createElement(m,null,o.createElement(a.h4,null,o.createElement(a.h4.Title,null,"画廊封面编辑")),o.createElement(p,null,o.createElement("div",{className:"main"},o.createElement("div",{className:"upload"},o.createElement(r.Z,{url:l._+"/upload",onFinish:e=>{e&&(t(e.url),(()=>{u(this,void 0,void 0,(function*(){(yield(0,c.q2)({title:`gallery-cover-${(new Date).valueOf()}`,author:(0,s.getLocalStorage)().name,type:"cover",url:e.url,exif:JSON.stringify({width:e.width,height:e.height})}))?(window.alert("添加封面成功"),d()):window.alert("添加失败")}))})())},allowExtensions:["jpg","jpeg","webp","png"]})),o.createElement("div",{className:"uploaded"},e&&o.createElement("img",{src:l._+e,title:"gallery-cover",style:{width:"100%",height:"100%",objectFit:"cover"}}))),o.createElement("div",{className:"preview"},n&&n.map((e=>f(e,h))))))}const f=(e,t)=>o.createElement("div",{className:"preview-item"},o.createElement("div",{className:"del",onClick:()=>{const n=e.uid;window.confirm("确定删除吗")&&u(void 0,void 0,void 0,(function*(){(yield(0,c.fR)(n))?(window.alert("删除成功"),t&&t()):window.alert("删除失败")}))}},o.createElement(d,{theme:"outline",size:"24",fill:"#d0021b"})),o.createElement("img",{src:l._+e.url,alt:e.title}))},5872:(e,t,n)=>{n.r(t),n.d(t,{default:()=>y,getLocalStorage:()=>x});var o=n(959),i=n(8903),a=n(3103),r=n(274),l=n(8385);const c=a.ZP.div`
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
`,s=a.ZP.div`
  width: 100%;
  margin-top: 32px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  label {
    width: 50px;
    text-align: right;
  }
`;function d(e){const{isLogin:t,isLoginDialogVisible:n,onSubmit:i,onCancel:a,onLogin:l,onLogout:d}=e,[u,m]=o.useState(""),[p,h]=o.useState(""),[f,v]=o.useState("");return o.createElement(c,{className:"admin-navbar"},o.createElement("div",{className:"logo"},o.createElement("h2",null,"后台管理系统")),o.createElement("div",{className:"container"},o.createElement("div",{className:"version"},"v1.1.0"),o.createElement("div",{className:"search"},o.createElement(r.II,{value:u,onChange:e=>m(e.target.value)})),o.createElement("div",{className:"user-status"},t?o.createElement("div",{className:"user"},o.createElement("div",{className:"avatar"}),o.createElement("div",{className:"name"}),o.createElement("div",{className:"level"}),o.createElement("div",{className:"logout"},o.createElement(r.zx,{onClick:e=>{e.preventDefault(),window.confirm("确定要登出吗？")&&d(e)},type:"light"},"登出"))):o.createElement(r.zx,{className:"login",type:"primary",onClick:l},"登录"))),o.createElement(r.Vq,{title:"登录界面",visible:n,onCancel:a,animation:"slide-top-down",width:400,height:400},o.createElement(s,null,o.createElement("div",{style:{width:250}},o.createElement("form",null,o.createElement(r.II,{label:"账号",value:p,name:"username",onChange:e=>h(e.target.value)}),o.createElement(r.II,{type:"password",label:"密码",value:f,name:"password",onChange:e=>v(e.target.value),autoComplete:"on"}))),o.createElement("div",{style:{width:"100%",textAlign:"center",marginTop:24}},o.createElement(r.zx,{type:"primary",onClick:e=>((e,t)=>{e.preventDefault(),i(e,t)})(e,{username:p,password:f})},"登录"),o.createElement(r.zx,{onClick:a},"取消")))))}var u=n(4563),m=n(7166);const p=(0,m.a1)("blocks-and-arrows",!0,(function(e){return o.createElement("svg",{width:e.size,height:e.size,viewBox:"0 0 48 48",fill:"none"},o.createElement("path",{d:"M20 6H6V20H20V6Z",fill:e.colors[1],stroke:e.colors[0],strokeWidth:e.strokeWidth,strokeLinecap:e.strokeLinecap,strokeLinejoin:e.strokeLinejoin}),o.createElement("path",{d:"M20 28H6V42H20V28Z",fill:e.colors[1],stroke:e.colors[0],strokeWidth:e.strokeWidth,strokeLinecap:e.strokeLinecap,strokeLinejoin:e.strokeLinejoin}),o.createElement("path",{d:"M42 6H28V20H42V6Z",fill:e.colors[1],stroke:e.colors[0],strokeWidth:e.strokeWidth,strokeLinecap:e.strokeLinecap,strokeLinejoin:e.strokeLinejoin}),o.createElement("path",{d:"M28 28L42 42M28 28H42H28ZM28 28V42V28Z",stroke:e.colors[0],strokeWidth:e.strokeWidth,strokeLinecap:e.strokeLinecap,strokeLinejoin:e.strokeLinejoin}))})),h=(0,m.a1)("config",!1,(function(e){return o.createElement("svg",{width:e.size,height:e.size,viewBox:"0 0 48 48",fill:"none"},o.createElement("path",{d:"M24 4L18 10H10V18L4 24L10 30V38H18L24 44L30 38H38V30L44 24L38 18V10H30L24 4Z",fill:e.colors[1],stroke:e.colors[0],strokeWidth:e.strokeWidth,strokeLinejoin:e.strokeLinejoin}),o.createElement("path",{d:"M24 30C27.3137 30 30 27.3137 30 24C30 20.6863 27.3137 18 24 18C20.6863 18 18 20.6863 18 24C18 27.3137 20.6863 30 24 30Z",fill:e.colors[3],stroke:e.colors[2],strokeWidth:e.strokeWidth,strokeLinejoin:e.strokeLinejoin}))}));var f=n(7247);const v=a.ZP.div`
  margin-top: 10px;
  height: calc(100vh - 70px);
  width: 250px;
  min-width: 250px;
  background-color: ${u.Z.white};
  a.active {
    color: ${u.Z.blue};
  }
`;function k(){const e=e=>o.createElement(r.v2.Item,{icon:e.icon,key:e.key},o.createElement(r.rU,{to:e.paths.join("/")},e.title));return o.createElement(v,{className:"admin-navigator"},o.createElement(r.v2,{mode:"inline"},o.createElement(r.v2.Item,{icon:f.Ge.icon},o.createElement(r.rU,{to:f.Ge.paths.join("/")},f.Ge.title)),o.createElement(r.v2.SubMenu,{title:"内容管理",isOpen:!0,icon:o.createElement(p,{theme:"outline",size:"20",fill:"#333",strokeWidth:2})},f._J.map(e)),o.createElement(r.v2.SubMenu,{title:"系统管理",isOpen:!0,icon:o.createElement(h,{theme:"outline",size:"20",fill:"#333",strokeWidth:2})},f.Ih.map(e))))}var g=function(e,t,n,o){return new(n||(n=Promise))((function(i,a){function r(e){try{c(o.next(e))}catch(e){a(e)}}function l(e){try{c(o.throw(e))}catch(e){a(e)}}function c(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(r,l)}c((o=o.apply(e,t||[])).next())}))};const w=f._J.concat(f.Ge).concat(f.Ih),E=a.ZP.div`
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
`,x=()=>({token:localStorage.getItem("token"),name:localStorage.getItem("name")});function y(){const[e,t]=o.useState(!1),[n,a]=o.useState(!1),c=(0,i.k6)(),s=(e,n)=>{(()=>{g(this,void 0,void 0,(function*(){const e=yield(0,l.x4)(n);var o,i;e?(o=e.token,i=n.username,localStorage.setItem("token",o),localStorage.setItem("name",i),a(!1),t(!0),c.go(0)):window.alert("登录失败")}))})()};return o.useEffect((()=>{const{token:e,name:n}=x();e&&n&&t(!0)}),[]),o.createElement(E,{className:"admin"},o.createElement(d,{isLogin:e,isLoginDialogVisible:n,onSubmit:(e,t)=>s(0,t),onLogin:e=>{e.preventDefault(),a(!0)},onLogout:e=>{e.preventDefault(),t(!1),localStorage.removeItem("token"),localStorage.removeItem("name"),c.go(0)},onCancel:e=>{e.preventDefault(),a(!1)}}),o.createElement("div",{className:"main-container"},o.createElement(k,null),o.createElement("div",{className:"admin-content"},o.createElement(o.Suspense,{fallback:o.createElement(r.gb,null)},o.createElement(i.rs,null,w.map((e=>o.createElement(i.AW,{exact:e.exact,path:e.paths.join("/"),component:e.component,key:e.key}))),o.createElement(i.l_,{from:"/admin",to:"/admin/home"}))))))}}}]);