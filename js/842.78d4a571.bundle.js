"use strict";(self.webpackChunklumie=self.webpackChunklumie||[]).push([[842],{4842:(e,t,n)=>{n.r(t),n.d(t,{default:()=>E});var l=n(2983),a=n(9606),i=n(2384),c=n(3891),r=n(7952),s=n(7860),o=n.n(s),m=n(2760),u=n(3e3),d=n(8890),p=n(4653),v=n(4033),f=function(e,t,n,l){return new(n||(n=Promise))((function(a,i){function c(e){try{s(l.next(e))}catch(e){i(e)}}function r(e){try{s(l.throw(e))}catch(e){i(e)}}function s(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(c,r)}s((l=l.apply(e,t||[])).next())}))};const h=a.ZP.div`
  padding: 32px 0;
  background-color: ${r.Z.white};
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
      color: ${r.Z.white8};
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
`;function E(){const e=(0,c.UO)(),t=(0,c.s0)(),n=e.username,[a,s]=l.useState(null),[E,g]=l.useState(null);return l.useEffect((()=>{(()=>{f(this,void 0,void 0,(function*(){const e=yield(0,i.BT)(n);"string"!=typeof e?s(e.data.users[0]):window.alert("无法获取用户信息")}))})()}),[]),l.useEffect((()=>{(()=>{f(this,void 0,void 0,(function*(){if(null==a?void 0:a.location){const e=null==a?void 0:a.location.split(","),t=yield(0,d.k)(Number(e[0]),Number(e[1]));t&&g(t.address)}}))})()}),[]),l.createElement(h,null,l.createElement("div",{className:"avatar"},l.createElement("img",{src:null==a?void 0:a.avatar,alt:n})),l.createElement("div",{className:"nickname"},l.createElement("h3",null,null==a?void 0:a.nickname),l.createElement("span",null,"male"===(null==a?void 0:a.gender)?l.createElement(m.Z,{fill:r.Z.blue}):l.createElement(u.Z,{fill:r.Z.purple}))),l.createElement("div",{className:"infos"},l.createElement("div",{className:"uid item"},l.createElement("span",null,"用户编号 "),l.createElement("span",null,null==a?void 0:a.uid)),l.createElement("div",{className:"username item"},l.createElement("span",null,"用户名 "),l.createElement("span",null,n)),l.createElement("div",{className:"birthday item"},l.createElement("span",null,"出生于 "),l.createElement("span",null,o()(null==a?void 0:a.birthday).format("YYYY年M月d日"))),l.createElement("div",{className:"location item"},l.createElement("span",null,"居住于 "),l.createElement("span",null,E||(null==a?void 0:a.location))),l.createElement("div",{className:"description item"},l.createElement("span",null,"其他说明"),l.createElement("span",null,(null==a?void 0:a.description)||"还没有说明")),l.createElement("div",{className:"motto item"},l.createElement("span",null,"用户格言"),l.createElement("span",null,(null==a?void 0:a.motto)||"还没有想说的"))),l.createElement("div",{className:"more"},l.createElement(p.z,{type:"primary",onClick:e=>e.preventDefault()},"编辑用户"),l.createElement(p.z,{danger:!0,onClick:()=>{(0,v.clearLocalStorage)(),window.alert("退出登录 即将跳转"),setTimeout((()=>t(`/mobile?time=${o()().unix()}`)),500)}},"退出登录")))}}}]);