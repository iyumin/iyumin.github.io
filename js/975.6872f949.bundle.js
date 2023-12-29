"use strict";(self.webpackChunklumie=self.webpackChunklumie||[]).push([[975],{3975:(e,t,n)=>{n.r(t),n.d(t,{default:()=>s});var i=n(2983),o=n(9606);const r=(0,n(87).a1)("plus",!1,(function(e){return i.createElement("svg",{width:e.size,height:e.size,viewBox:"0 0 48 48",fill:"none"},i.createElement("path",{d:"M24.0605 10L24.0239 38",stroke:e.colors[0],strokeWidth:e.strokeWidth,strokeLinecap:e.strokeLinecap,strokeLinejoin:e.strokeLinejoin}),i.createElement("path",{d:"M10 24L38 24",stroke:e.colors[0],strokeWidth:e.strokeWidth,strokeLinecap:e.strokeLinecap,strokeLinejoin:e.strokeLinejoin}))})),a=o.ZP.div`
  height: 100vh;
  display: flex;
  padding: 0 32px;
  align-items: center;
  justify-content: center;
  .container {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    .go-search {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0 12px 32px 12px;
      background-color: #fff;
      border-radius: 8px;
      input {
        height: 48px;
        width: 100%;
        padding: 0 16px;
        border: none;
        border-radius: 8px;
        background-color: transparent;
        &:focus {
          outline: none;
        }
      }
      button {
        height: 48px;
        width: 84px;
        border: none;
        background-color: #229453;
        border-radius: 0 8px 8px 0;
        color: #fff;
      }
    }
  }
`,c=o.ZP.div`
  width: 64px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 8px;
  .go-item__icon {
    height: 64px;
    width: 64px;
    background-color: rgba(0,0,0,.1);
    border-radius: 8px;
    a {
      display: block;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    img {
      width: 70%;
      height: 70%;
    }
  }
  .go-item__title {
    margin: 4px 0;
  }
`,l=[{title:"百度",link:"https://baidu.com"},{title:"必应",link:"https://bing.com"},{title:"爱范",link:"https://ifanr.com"},{title:"摸摸鱼",link:"https://momoyu.cc",icon:"https://momoyu.cc/img/logo-1.4a8f7d71.png"}];function s(){const[e,t]=i.useState(l);return i.useEffect((()=>{const e=localStorage.getItem("go-items");e&&t(JSON.parse(e))}),[]),i.createElement(a,{className:"go-page"},i.createElement("div",{className:"container"},i.createElement(p,null),e.map((e=>i.createElement(m,{...e}))),i.createElement(m,{title:"增加",link:"/#/go",icon:i.createElement(r,{theme:"outline",size:"24",fill:"#333"})})))}function p(){const[e,t]=i.useState("");return i.createElement("div",{className:"go-search"},i.createElement("input",{value:e,onChange:e=>t(e.target.value)}),i.createElement("button",{onClick:()=>{const n="https://cn.bing.com/search?q="+e;window.open(n),t("")}},"搜索"))}function m({link:e,title:t,icon:n}){let o=i.createElement("img",{src:e+"/favicon.ico",alt:t});return"string"==typeof n?o=i.createElement("img",{src:n,alt:t}):n instanceof Object&&(o=n),i.createElement(c,{className:"go-item"},i.createElement("div",{className:"go-item__icon"},i.createElement("a",{href:e},o)),i.createElement("div",{className:"go-item__title"},t))}}}]);