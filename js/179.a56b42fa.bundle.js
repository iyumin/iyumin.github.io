"use strict";(self.webpackChunklumie=self.webpackChunklumie||[]).push([[179,288],{9206:(e,t,a)=>{a.r(t),a.d(t,{default:()=>x});var l=a(6760),n=a(6497),i=a(2983),r=a(9606),s=a(1988),m=a(3361),c=a(5892),o=a(3891),u=a(7860),p=a.n(u),d=a(6264);const g=r.ZP.div`
  display: flex;
  justify-content: center;
  .login-form {
    background-color: ${n.Z.white};
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
`;function x(){const[e,t]=i.useState(""),[a,n]=i.useState(""),r=(0,o.s0)();return i.createElement(g,null,i.createElement("div",{className:"login-form"},i.createElement("div",{className:"title"},i.createElement("h2",null,"用户登录")),i.createElement("div",{className:"item"},i.createElement("label",null,"用户名"),i.createElement(l.I,{value:e,onChange:e=>t(e.target.value)})),i.createElement("div",{className:"item"},i.createElement("label",null,"密码"),i.createElement(l.I,{type:"password",value:a,onChange:e=>n(e.target.value)})),i.createElement("div",{className:"submit"},i.createElement(s.z,{type:"primary",onClick:()=>{(async()=>{const t=await(0,m.x)({username:e,password:a});"string"!=typeof t?((0,c.setLocalStorage)(t.data.token,e),d.N.show({type:"success",message:"登录成功 马上跳转"}),setTimeout((()=>r(`/mobile?time=${p()().unix()}`)),500)):d.N.show({type:"error",message:"登录失败"})})()}},"登录"),i.createElement(s.z,{danger:!0,onClick:()=>r(-1)},"取消"))))}}}]);