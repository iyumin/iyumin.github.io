"use strict";(self.webpackChunkkevinjobs=self.webpackChunkkevinjobs||[]).push([[63],{588:(e,t,i)=>{i.d(t,{h4:()=>c});var n=i(959),o=i(3103),l=i(4563);const r=o.ZP.div`
  margin: 8px 0 16px 0;
  padding-bottom: 16px;
  border-bottom: 1px solid ${l.Z.white4};
  display: flex;
  align-items: center;
`,a=o.ZP.h3``,s=o.ZP.div``;function d(e){const{children:t}=e;return n.createElement(r,null,t)}d.Title=a,d.Add=s;const c=d,h=o.ZP.div`
  margin: 8px;
  display: inline-block;
  position: relative;
`,p=o.ZP.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`,u=o.ZP.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #000;
  opacity: 0.45;
`;function m(e){const[t,i]=n.useState(!1),{width:o=300,height:l=400,p:r,onEdit:a,children:s}=e,d={position:"absolute",top:l/2,left:o/2,transform:"translate(-14px, -14px)",zIndex:999,visibility:t?"visible":"hidden",cursor:"pointer"};return n.createElement(h,{style:{width:o,height:l},onMouseEnter:e=>{e.preventDefault(),i(!0)},onMouseLeave:e=>{e.preventDefault(),i(!1)}},s,n.createElement("div",{style:d,onClick:e=>a(e,r)},n.createElement("svg",{width:"28",height:"28",viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n.createElement("rect",{width:"48",height:"48",fill:"white",fillOpacity:"0.01"}),n.createElement("path",{d:"M7 42H43",stroke:"#e4e4e4",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),n.createElement("path",{d:"M11 26.7199V34H18.3172L39 13.3081L31.6951 6L11 26.7199Z",fill:"none",stroke:"#e4e4e4",strokeWidth:"2",strokeLinejoin:"round"}))),t?n.createElement(u,null):"")}m.Img=p;o.ZP.div`
  padding-bottom: 64px;
`},8063:(e,t,i)=>{i.r(t),i.d(t,{default:()=>a});var n=i(959),o=i(3103),l=i(588);const r=o.ZP.div`
  padding-bottom: 64px;
`;const a=function(){return n.createElement(r,{className:"admin-log-viewer-container"},n.createElement(l.h4,null,n.createElement(l.h4.Title,null,"Log Viewer")),n.createElement("h1",null,"Welcome to view logs."))}}}]);