"use strict";(self.webpackChunklumie=self.webpackChunklumie||[]).push([[26],{6026:(e,t,n)=>{n.r(t),n.d(t,{default:()=>g});var a=n(9287),i=n(7952),l=n(2983),r=n(9606),c=n(4653),o=n(2559),s=n(4033),u=n(3891),m=n(7860),d=n.n(m),p=function(e,t,n,a){return new(n||(n=Promise))((function(i,l){function r(e){try{o(a.next(e))}catch(e){l(e)}}function c(e){try{o(a.throw(e))}catch(e){l(e)}}function o(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(r,c)}o((a=a.apply(e,t||[])).next())}))};const x=r.ZP.div`
  display: flex;
  justify-content: center;
  .login-form {
    background-color: ${i.Z.white};
    height: 500px;
    width: 320px;
    padding: 32px 16px;
    margin-top: 32px;
    border-radius: 5px;
    .title {
      text-align: center;
      margin-bottom: 48px;
    }
    .item {
      width: 260px;
      margin: 8px auto;
      display: flex;
      align-items: center;
      label {
        width: 60px;
        text-align: justify;
        text-align-last: justify;
        margin-right: 8px;
      }
    }
    .submit {
      width: 100%;
      margin: 32px 0 0 0;
      text-align: center;
      button {
        height: 32px;
        width: 64px;
        border-radius: 5px;
      }
    }
  }
`;function g(){const[e,t]=l.useState(""),[n,i]=l.useState(""),r=(0,u.s0)();return l.createElement(x,null,l.createElement("div",{className:"login-form"},l.createElement("div",{className:"title"},l.createElement("h2",null,"用户登录")),l.createElement("div",{className:"item"},l.createElement("label",null,"用户名"),l.createElement(a.I,{value:e,onChange:e=>t(e.target.value)})),l.createElement("div",{className:"item"},l.createElement("label",null,"密码"),l.createElement(a.I,{type:"password",value:n,onChange:e=>i(e.target.value)})),l.createElement("div",{className:"submit"},l.createElement(c.z,{type:"primary",onClick:()=>{(()=>{p(this,void 0,void 0,(function*(){const t=yield(0,o.x)({username:e,password:n});"string"!=typeof t?((0,s.setLocalStorage)(t.data.token,e),window.alert("登录成功 马上跳转"),setTimeout((()=>r(`/mobile?time=${d()().unix()}`)),500)):window.alert("登录失败")}))})()}},"登录"),l.createElement(c.z,{danger:!0,onClick:()=>r(-1)},"取消"))))}}}]);