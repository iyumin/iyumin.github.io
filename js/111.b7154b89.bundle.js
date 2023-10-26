"use strict";(self.webpackChunkkevinjobs=self.webpackChunkkevinjobs||[]).push([[111],{1908:(e,t,n)=>{n.d(t,{Z:()=>a});var o=n(959);const a=(0,n(7166).a1)("blocks-and-arrows",!0,(function(e){return o.createElement("svg",{width:e.size,height:e.size,viewBox:"0 0 48 48",fill:"none"},o.createElement("path",{d:"M20 6H6V20H20V6Z",fill:e.colors[1],stroke:e.colors[0],strokeWidth:e.strokeWidth,strokeLinecap:e.strokeLinecap,strokeLinejoin:e.strokeLinejoin}),o.createElement("path",{d:"M20 28H6V42H20V28Z",fill:e.colors[1],stroke:e.colors[0],strokeWidth:e.strokeWidth,strokeLinecap:e.strokeLinecap,strokeLinejoin:e.strokeLinejoin}),o.createElement("path",{d:"M42 6H28V20H42V6Z",fill:e.colors[1],stroke:e.colors[0],strokeWidth:e.strokeWidth,strokeLinecap:e.strokeLinecap,strokeLinejoin:e.strokeLinejoin}),o.createElement("path",{d:"M28 28L42 42M28 28H42H28ZM28 28V42V28Z",stroke:e.colors[0],strokeWidth:e.strokeWidth,strokeLinecap:e.strokeLinecap,strokeLinejoin:e.strokeLinejoin}))}))},7685:(e,t,n)=>{n.d(t,{Z:()=>a});var o=n(959);const a=(0,n(7166).a1)("config",!1,(function(e){return o.createElement("svg",{width:e.size,height:e.size,viewBox:"0 0 48 48",fill:"none"},o.createElement("path",{d:"M24 4L18 10H10V18L4 24L10 30V38H18L24 44L30 38H38V30L44 24L38 18V10H30L24 4Z",fill:e.colors[1],stroke:e.colors[0],strokeWidth:e.strokeWidth,strokeLinejoin:e.strokeLinejoin}),o.createElement("path",{d:"M24 30C27.3137 30 30 27.3137 30 24C30 20.6863 27.3137 18 24 18C20.6863 18 18 20.6863 18 24C18 27.3137 20.6863 30 24 30Z",fill:e.colors[3],stroke:e.colors[2],strokeWidth:e.strokeWidth,strokeLinejoin:e.strokeLinejoin}))}))},4144:(e,t,n)=>{n.d(t,{CP:()=>m,DN:()=>s,SD:()=>f,T6:()=>l,Zt:()=>c,fR:()=>u,ms:()=>d,q2:()=>p,uh:()=>h,x4:()=>r});var o=n(8838),a=n(7573),i=function(e,t,n,o){return new(n||(n=Promise))((function(a,i){function r(e){try{c(o.next(e))}catch(e){i(e)}}function l(e){try{c(o.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(r,l)}c((o=o.apply(e,t||[])).next())}))};function r(e){return i(this,void 0,void 0,(function*(){const t=a._+"/token",n=yield o.Z.post(t,e);if(0===n.data.code)return n.data.data}))}function l(e,t,n=null){return i(this,void 0,void 0,(function*(){const i=a._+"/post/list";let r={offset:e,limit:t,status:"publish"};n&&(r=Object.assign(Object.assign({},r),n));const l=yield o.Z.get(i,{params:r});if(0===l.data.code)return l.data.data}))}function c(e,t){return i(this,void 0,void 0,(function*(){return yield l(e,t,{type:"article"})}))}function s(e=0,t=20){return i(this,void 0,void 0,(function*(){return yield l(e,t,{type:"cover",status:"all"})}))}function d(e,t){return i(this,void 0,void 0,(function*(){return yield l(e,t,{type:"photo"})}))}function u(e){return i(this,void 0,void 0,(function*(){const t=a._+"/p?uid="+e;return 0===(yield o.Z.delete(t)).data.code}))}function m(e,t){return i(this,void 0,void 0,(function*(){const n=a._+"/p?uid="+e,i=yield o.Z.put(n,t);if(0===i.data.code)return i.data.msg}))}function p(e){return i(this,void 0,void 0,(function*(){const t=a._+"/p",n=yield o.Z.post(t,e);if(0===n.data.code)return n.data.msg}))}function f(e){return i(this,void 0,void 0,(function*(){const t=a._+"/p?uid="+e,n=yield o.Z.get(t);if(0===n.data.code)return n.data.data.post}))}function h(e){return i(this,void 0,void 0,(function*(){const t=a._+"/user",n=yield o.Z.get(t,{params:e});if(0===n.data.code)return n.data.data}))}},7573:(e,t,n)=>{n.d(t,{_:()=>o});const o="https://api.kevinjobs.com:5000"},5111:(e,t,n)=>{n.r(t),n.d(t,{default:()=>w,getLocalStorage:()=>y});var o=n(959),a=n(8903),i=n(3103),r=n(274),l=n(4144);const c=i.ZP.div`
  width: 100%;
  height: 60px;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 60px 0 0;
  .container {
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    .version {
      margin-right: 16px;
    }
    .user-status {
      .user {
        display: flex;
        align-items: center;
        .name {
          margin: 0 8px;
        }
      }
    }
  }
`,s=i.ZP.div`
  width: 100%;
  margin-top: 32px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  label {
    width: 50px;
    text-align: right;
  }
`;function d(e){const{isLogin:t,isLoginDialogVisible:n,onSubmit:a,onCancel:i,onLogin:l,onLogout:d}=e,[u,m]=o.useState(""),[p,f]=o.useState(""),[h,v]=o.useState(""),g=e=>{e.preventDefault(),window.confirm("确定要登出吗？")&&d(e)};return o.createElement(c,{className:"admin-navbar"},o.createElement("div",{className:"logo"},o.createElement("h2",null,"后台管理系统")),o.createElement("div",{className:"container"},o.createElement("div",{className:"version"},"v1.1.0"),o.createElement("div",{className:"search"},o.createElement(r.II,{value:u,onChange:e=>m(e.target.value)})),o.createElement("div",{className:"user-status"},t?o.createElement("div",{className:"user"},o.createElement("div",{className:"avatar"}),o.createElement("div",{className:"name"},y().name),o.createElement("div",{className:"level"}),o.createElement("div",{className:"logout"},o.createElement(r.zx,{onClick:g,type:"light"},"登出"))):o.createElement(r.zx,{className:"login",type:"primary",onClick:l},"登录"))),o.createElement(r.Vq,{title:"登录界面",visible:n,onCancel:i,animation:"slide-top-down",width:400,height:400},o.createElement(s,null,o.createElement("div",{style:{width:250}},o.createElement("form",null,o.createElement(r.II,{label:"账号",value:p,name:"username",onChange:e=>f(e.target.value)}),o.createElement(r.II,{type:"password",label:"密码",value:h,name:"password",onChange:e=>v(e.target.value),autoComplete:"on"}))),o.createElement("div",{style:{width:"100%",textAlign:"center",marginTop:24}},o.createElement(r.zx,{type:"primary",onClick:e=>((e,t)=>{e.preventDefault(),a(e,t)})(e,{username:p,password:h})},"登录"),o.createElement(r.zx,{onClick:i},"取消")))))}var u=n(4563),m=n(1908),p=n(7685),f=n(7247);const h=i.ZP.div`
  margin-top: 10px;
  height: calc(100vh - 70px);
  width: 250px;
  min-width: 250px;
  background-color: ${u.Z.white};
  a.active {
    color: ${u.Z.blue};
  }
`;function v(){const e=e=>o.createElement(r.v2.Item,{icon:e.icon,key:e.key},o.createElement(r.rU,{to:e.paths.join("/")},e.title));return o.createElement(h,{className:"admin-navigator"},o.createElement(r.v2,{mode:"inline"},o.createElement(r.v2.Item,{icon:f.Ge.icon},o.createElement(r.rU,{to:f.Ge.paths.join("/")},f.Ge.title)),o.createElement(r.v2.SubMenu,{title:"内容管理",isOpen:!0,icon:o.createElement(m.Z,{theme:"outline",size:"20",fill:"#333",strokeWidth:2})},f._J.map(e)),o.createElement(r.v2.SubMenu,{title:"系统管理",isOpen:!0,icon:o.createElement(p.Z,{theme:"outline",size:"20",fill:"#333",strokeWidth:2})},f.Ih.map(e))))}var g=function(e,t,n,o){return new(n||(n=Promise))((function(a,i){function r(e){try{c(o.next(e))}catch(e){i(e)}}function l(e){try{c(o.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(r,l)}c((o=o.apply(e,t||[])).next())}))};const k=f._J.concat(f.Ge).concat(f.Ih),E=i.ZP.div`
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
`,y=()=>({token:localStorage.getItem("token"),name:localStorage.getItem("name")});function w(){const[e,t]=o.useState(!1),[n,i]=o.useState(!1),c=(0,a.k6)(),s=(e,n)=>{(()=>{g(this,void 0,void 0,(function*(){const e=yield(0,l.x4)(n);var o,a;e?(o=e.token,a=n.username,localStorage.setItem("token",o),localStorage.setItem("name",a),i(!1),t(!0),c.go(0)):window.alert("登录失败")}))})()};return o.useEffect((()=>{const{token:e,name:n}=y();e&&n&&t(!0)}),[]),o.createElement(E,{className:"admin"},o.createElement(d,{isLogin:e,isLoginDialogVisible:n,onSubmit:(e,t)=>s(0,t),onLogin:e=>{e.preventDefault(),i(!0)},onLogout:e=>{e.preventDefault(),t(!1),localStorage.removeItem("token"),localStorage.removeItem("name"),c.go(0)},onCancel:e=>{e.preventDefault(),i(!1)}}),o.createElement("div",{className:"main-container"},o.createElement(v,null),o.createElement("div",{className:"admin-content"},o.createElement(o.Suspense,{fallback:o.createElement(r.gb,null)},o.createElement(a.rs,null,k.map((e=>o.createElement(a.AW,{exact:e.exact,path:e.paths.join("/"),component:e.component,key:e.key}))),o.createElement(a.l_,{from:"/admin",to:"/admin/home"}))))))}},8838:(e,t,n)=>{n.d(t,{Z:()=>l});var o=n(120),a=n.n(o),i=n(7573);const r=a().create();r.defaults.baseURL=i._,r.interceptors.request.use((e=>(e.data=JSON.stringify(e.data),e.headers={"content-type":"application/json",Authorization:`Bearer ${localStorage.getItem("token")}`},e)));const l=r}}]);