"use strict";(self.webpackChunkkevinjobs=self.webpackChunkkevinjobs||[]).push([[872],{1918:(e,t,n)=>{n.d(t,{q2:()=>g,fR:()=>h,Zt:()=>p,ms:()=>f,SD:()=>k,T6:()=>u,x4:()=>m,CP:()=>v});var o=n(1240),a=n(120),i=n.n(a),r=n(8586);const l=i().create();let c;c=o.V.production.api.baseUrl,l.defaults.baseURL=c,l.interceptors.request.use((e=>(e.data=JSON.stringify(e.data),e.headers={"content-type":"application/json",Authorization:`Bearer ${localStorage.getItem("token")}`},e))),(0,r.ZP)(l,{retries:3});const s=l;var d=function(e,t,n,o){return new(n||(n=Promise))((function(a,i){function r(e){try{c(o.next(e))}catch(e){i(e)}}function l(e){try{c(o.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(r,l)}c((o=o.apply(e,t||[])).next())}))};function m(e){return d(this,void 0,void 0,(function*(){const t=o._+"/token",n=yield s.post(t,e);if(0===n.data.code)return n.data.data}))}function u(e,t){return d(this,void 0,void 0,(function*(){const n=o._+"/post/list",a={offset:e,limit:t},i=yield s.get(n,{params:a});if(0===i.data.code)return i.data.data}))}function p(e,t){return d(this,void 0,void 0,(function*(){const n=o._+"/post/list",a={offset:e,limit:t,type:"article"},i=yield s.get(n,{params:a});if(0===i.data.code)return i.data.data}))}function f(e,t){return d(this,void 0,void 0,(function*(){const n=o._+"/post/list",a={offset:e,limit:t,type:"photo"},i=yield s.get(n,{params:a});if(0===i.data.code)return i.data.data}))}function h(e){return d(this,void 0,void 0,(function*(){const t=o._+"/p?uid="+e;return 0===(yield s.delete(t)).data.code}))}function v(e,t){return d(this,void 0,void 0,(function*(){const n=o._+"/p?uid="+e,a=yield s.put(n,t);if(0===a.data.code)return a.data.msg}))}function g(e){return d(this,void 0,void 0,(function*(){const t=o._+"/p",n=yield s.post(t,e);if(0===n.data.code)return n.data.msg}))}function k(e){return d(this,void 0,void 0,(function*(){const t=o._+"/p?uid="+e,n=yield s.get(t);if(0===n.data.code)return n.data.data.post}))}},1240:(e,t,n)=>{n.d(t,{V:()=>o,_:()=>a});const o={develop:{api:{baseUrl:"http://localhost:5000"}},production:{api:{baseUrl:"https://api.kevinjobs.com:5000"}}},a="https://api.kevinjobs.com:5000"},5872:(e,t,n)=>{n.r(t),n.d(t,{default:()=>y,getLocalStorage:()=>x});var o=n(959),a=n(8903),i=n(3103),r=n(274),l=n(1918);const c=i.ZP.div`
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
`;function d(e){const{isLogin:t,isLoginDialogVisible:n,onSubmit:a,onCancel:i,onLogin:l,onLogout:d}=e,[m,u]=o.useState(""),[p,f]=o.useState(""),[h,v]=o.useState("");return o.createElement(c,{className:"admin-navbar"},o.createElement("div",{className:"logo"},o.createElement("h2",null,"后台管理系统")),o.createElement("div",{className:"container"},o.createElement("div",{className:"version"},"v1.1.0"),o.createElement("div",{className:"search"},o.createElement(r.II,{value:m,onChange:e=>u(e.target.value)})),o.createElement("div",{className:"user-status"},t?o.createElement("div",{className:"user"},o.createElement("div",{className:"avatar"}),o.createElement("div",{className:"name"}),o.createElement("div",{className:"level"}),o.createElement("div",{className:"logout"},o.createElement(r.zx,{onClick:e=>{e.preventDefault(),window.confirm("确定要登出吗？")&&d(e)},type:"light"},"登出"))):o.createElement(r.zx,{className:"login",type:"primary",onClick:l},"登录"))),o.createElement(r.Vq,{title:"登录界面",visible:n,onCancel:i,animation:"slide-top-down",width:400,height:400},o.createElement(s,null,o.createElement("div",{style:{width:250}},o.createElement("form",null,o.createElement(r.II,{label:"账号",value:p,name:"username",onChange:e=>f(e.target.value)}),o.createElement(r.II,{type:"password",label:"密码",value:h,name:"password",onChange:e=>v(e.target.value),autoComplete:"on"}))),o.createElement("div",{style:{width:"100%",textAlign:"center",marginTop:24}},o.createElement(r.zx,{type:"primary",onClick:e=>((e,t)=>{e.preventDefault(),a(e,t)})(e,{username:p,password:h})},"登录"),o.createElement(r.zx,{onClick:i},"取消")))))}var m=n(4563),u=n(7166);const p=(0,u.a1)("blocks-and-arrows",!0,(function(e){return o.createElement("svg",{width:e.size,height:e.size,viewBox:"0 0 48 48",fill:"none"},o.createElement("path",{d:"M20 6H6V20H20V6Z",fill:e.colors[1],stroke:e.colors[0],strokeWidth:e.strokeWidth,strokeLinecap:e.strokeLinecap,strokeLinejoin:e.strokeLinejoin}),o.createElement("path",{d:"M20 28H6V42H20V28Z",fill:e.colors[1],stroke:e.colors[0],strokeWidth:e.strokeWidth,strokeLinecap:e.strokeLinecap,strokeLinejoin:e.strokeLinejoin}),o.createElement("path",{d:"M42 6H28V20H42V6Z",fill:e.colors[1],stroke:e.colors[0],strokeWidth:e.strokeWidth,strokeLinecap:e.strokeLinecap,strokeLinejoin:e.strokeLinejoin}),o.createElement("path",{d:"M28 28L42 42M28 28H42H28ZM28 28V42V28Z",stroke:e.colors[0],strokeWidth:e.strokeWidth,strokeLinecap:e.strokeLinecap,strokeLinejoin:e.strokeLinejoin}))})),f=(0,u.a1)("config",!1,(function(e){return o.createElement("svg",{width:e.size,height:e.size,viewBox:"0 0 48 48",fill:"none"},o.createElement("path",{d:"M24 4L18 10H10V18L4 24L10 30V38H18L24 44L30 38H38V30L44 24L38 18V10H30L24 4Z",fill:e.colors[1],stroke:e.colors[0],strokeWidth:e.strokeWidth,strokeLinejoin:e.strokeLinejoin}),o.createElement("path",{d:"M24 30C27.3137 30 30 27.3137 30 24C30 20.6863 27.3137 18 24 18C20.6863 18 18 20.6863 18 24C18 27.3137 20.6863 30 24 30Z",fill:e.colors[3],stroke:e.colors[2],strokeWidth:e.strokeWidth,strokeLinejoin:e.strokeLinejoin}))}));var h=n(7247);const v=i.ZP.div`
  margin-top: 10px;
  height: calc(100vh - 70px);
  width: 250px;
  min-width: 250px;
  background-color: ${m.Z.white};
  a.active {
    color: ${m.Z.blue};
  }
`;function g(){const e=e=>o.createElement(r.v2.Item,{icon:e.icon,key:e.key},o.createElement(r.rU,{to:e.paths.join("/")},e.title));return o.createElement(v,{className:"admin-navigator"},o.createElement(r.v2,{mode:"inline"},o.createElement(r.v2.Item,{icon:h.Ge.icon},o.createElement(r.rU,{to:h.Ge.paths.join("/")},h.Ge.title)),o.createElement(r.v2.SubMenu,{title:"内容管理",isOpen:!0,icon:o.createElement(p,{theme:"outline",size:"20",fill:"#333",strokeWidth:2})},h._J.map(e)),o.createElement(r.v2.SubMenu,{title:"系统管理",isOpen:!0,icon:o.createElement(f,{theme:"outline",size:"20",fill:"#333",strokeWidth:2})},h.Ih.map(e))))}var k=function(e,t,n,o){return new(n||(n=Promise))((function(a,i){function r(e){try{c(o.next(e))}catch(e){i(e)}}function l(e){try{c(o.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(r,l)}c((o=o.apply(e,t||[])).next())}))};const E=h._J.concat(h.Ge).concat(h.Ih),w=i.ZP.div`
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
`,x=()=>({token:localStorage.getItem("token"),name:localStorage.getItem("name")});function y(){const[e,t]=o.useState(!1),[n,i]=o.useState(!1),c=(0,a.k6)(),s=(e,n)=>{(()=>{k(this,void 0,void 0,(function*(){const e=yield(0,l.x4)(n);var o,a;e?(o=e.token,a=n.username,localStorage.setItem("token",o),localStorage.setItem("name",a),i(!1),t(!0),c.go(0)):window.alert("登录失败")}))})()};return o.useEffect((()=>{const{token:e,name:n}=x();e&&n&&t(!0)}),[]),o.createElement(w,{className:"admin"},o.createElement(d,{isLogin:e,isLoginDialogVisible:n,onSubmit:(e,t)=>s(0,t),onLogin:e=>{e.preventDefault(),i(!0)},onLogout:e=>{e.preventDefault(),t(!1),localStorage.removeItem("token"),localStorage.removeItem("name"),c.go(0)},onCancel:e=>{e.preventDefault(),i(!1)}}),o.createElement("div",{className:"main-container"},o.createElement(g,null),o.createElement("div",{className:"admin-content"},o.createElement(o.Suspense,{fallback:o.createElement(r.gb,null)},o.createElement(a.rs,null,E.map((e=>o.createElement(a.AW,{exact:e.exact,path:e.paths.join("/"),component:e.component,key:e.key}))),o.createElement(a.l_,{from:"/admin",to:"/admin/home"}))))))}}}]);