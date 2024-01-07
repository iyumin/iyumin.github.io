"use strict";(self.webpackChunklumie=self.webpackChunklumie||[]).push([[791,288],{2503:(e,t,a)=>{a.r(t),a.d(t,{default:()=>g});var n=a(2983),l=a(9606),i=a(8693),r=a(3891),c=a(6497),s=a(7860),m=a.n(s),o=a(2760),p=a(3e3),d=a(5573),u=a(1988),E=a(5892),h=a(6264);const f=l.ZP.div`
  padding: 32px 0;
  background-color: ${c.Z.white};
  margin: 0 8px;
  text-align: center;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  .avatar {
    width: 128px;
    height: 128px;
    margin: 0 auto;
    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }
  .nickname {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    > span {
      position: relative;
      top: 2px;
      left: 2px;
    }
  }
  .item {
    text-align: left;
    margin: 16px 0;
    span:nth-child(1) {
      vertical-align: middle;
      display: inline-block;
      width: 84px;
      text-align: justify;
      text-align-last: justify;
      margin-right: 16px;
    }
    span:nth-child(2) {
      vertical-align: middle;
      display: inline-block;
      color: ${c.Z.white8};
      overflow: hidden;
    }
  }
  .uid {
    span:nth-child(2) {
      font-size: 10px;
    }
  }
  .more {
    width: 100%;
    margin-top: 32px;
    button {
      height: 40px;
      width: 100px;
      border-radius: 5px;
    }
  }
`;function g(){const e=(0,r.UO)(),t=(0,r.s0)(),a=e.username,[l,s]=n.useState(null),[g,x]=n.useState(null);return n.useEffect((()=>{(async()=>{const e=await(0,i.BT)(a);"string"!=typeof e?s(e.data.users[0]):h.N.show({type:"error",message:"无法获取用户信息"})})()}),[]),n.useEffect((()=>{(async()=>{if(l?.location){const e=l?.location.split(","),t=await(0,d.k)(Number(e[0]),Number(e[1]));t&&x(t.address)}})()}),[]),n.createElement(f,null,n.createElement("div",{className:"avatar"},n.createElement("img",{src:l?.avatar,alt:a})),n.createElement("div",{className:"nickname"},n.createElement("h3",null,l?.nickname),n.createElement("span",null,"male"===l?.gender?n.createElement(o.Z,{fill:c.Z.blue}):n.createElement(p.Z,{fill:c.Z.purple}))),n.createElement("div",{className:"infos"},n.createElement("div",{className:"uid item"},n.createElement("span",null,"用户编号 "),n.createElement("span",null,l?.uid)),n.createElement("div",{className:"username item"},n.createElement("span",null,"用户名 "),n.createElement("span",null,a)),n.createElement("div",{className:"birthday item"},n.createElement("span",null,"出生于 "),n.createElement("span",null,m()(l?.birthday).format("YYYY年M月d日"))),n.createElement("div",{className:"location item"},n.createElement("span",null,"居住于 "),n.createElement("span",null,g||l?.location)),n.createElement("div",{className:"description item"},n.createElement("span",null,"其他说明"),n.createElement("span",null,l?.description||"还没有说明")),n.createElement("div",{className:"motto item"},n.createElement("span",null,"用户格言"),n.createElement("span",null,l?.motto||"还没有想说的"))),n.createElement("div",{className:"more"},n.createElement(u.z,{type:"primary",onClick:e=>e.preventDefault()},"编辑用户"),n.createElement(u.z,{danger:!0,onClick:()=>{window.confirm("确定注销？")&&((0,E.clearLocalStorage)(),h.N.show({message:"退出登录 立即跳转"}),setTimeout((()=>t(`/mobile?time=${m()().unix()}`)),1500))}},"退出登录")))}}}]);