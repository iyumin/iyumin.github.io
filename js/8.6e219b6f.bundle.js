"use strict";(self.webpackChunkkevinjobs=self.webpackChunkkevinjobs||[]).push([[8],{7964:(e,t,n)=>{n.d(t,{Gm:()=>o,ZE:()=>l,fo:()=>i,mS:()=>r,uh:()=>c});var a=n(1104);const l=a._+"/token",i=a._+"/post/list",r=a._+"/p",o=a._+"/user/list",c=a._+"/user"},2349:(e,t,n)=>{n.d(t,{BT:()=>s,Nq:()=>o,cn:()=>c,uh:()=>r});var a=n(891),l=n(7964),i=function(e,t,n,a){return new(n||(n=Promise))((function(l,i){function r(e){try{c(a.next(e))}catch(e){i(e)}}function o(e){try{c(a.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?l(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(r,o)}c((a=a.apply(e,t||[])).next())}))};function r(e){return i(this,void 0,void 0,(function*(){const t=yield a.Z.get(l.Gm,{params:e});return 0===t.data.code?t.data:t.data.msg}))}function o(e,t){return i(this,void 0,void 0,(function*(){const n=yield a.Z.put(l.uh,t,{params:{uid:e}});return 0===n.data.code?n.data:n.data.msg}))}function c(e){return i(this,void 0,void 0,(function*(){const t=yield a.Z.post(l.uh,e);return 0===t.data.code?t.data:t.data.msg}))}function s(e){return i(this,void 0,void 0,(function*(){const t=yield a.Z.get(l.uh,{params:{username:e}});return 0===t.data.code?t.data:t.data.msg}))}},6175:(e,t,n)=>{n.d(t,{z:()=>c});var a=n(959),l=n(3103),i=n(6824),r=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var l=0;for(a=Object.getOwnPropertySymbols(e);l<a.length;l++)t.indexOf(a[l])<0&&Object.prototype.propertyIsEnumerable.call(e,a[l])&&(n[a[l]]=e[a[l]])}return n};const o=l.ZP.button`
  height: 24px;
  padding: 0px 8px;
  margin: 0px 4px;
  border: none;
  &:hover {
    opacity: 0.8;
  }
`;function c(e){const{type:t,children:n,danger:l,disabled:c=!1,onClick:s,style:d}=e,u=r(e,["type","children","danger","disabled","onClick","style"]);let m="";const p=i.Z.white1;switch(t){case"primary":m=i.Z.blue;break;case"success":m=i.Z.green;break;case"light":m=i.Z.white4;break;default:m=i.Z.dark}return l&&(m=i.Z.red),a.createElement(o,Object.assign({},u,{style:Object.assign({backgroundColor:c?i.Z.white6:m,color:p,cursor:c?"not-allowed":"pointer"},d),onClick:e=>{c?(e.preventDefault(),e.stopPropagation()):s(e)}}),n)}},1614:(e,t,n)=>{n.d(t,{I:()=>c});var a=n(959),l=n(3103),i=n(6824),r=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var l=0;for(a=Object.getOwnPropertySymbols(e);l<a.length;l++)t.indexOf(a[l])<0&&Object.prototype.propertyIsEnumerable.call(e,a[l])&&(n[a[l]]=e[a[l]])}return n};const o=l.ZP.div`
  display: flex;
  align-items: center;
  margin: 4px 0px;
  label {
    display: inline-block;
  }
  input {
    display: inline-block;
    height: 22px;
    padding: 0px 4px;
    margin: 0;
    border: 1px solid ${i.Z.white5};
    border-radius: 0;
    flex-grow: 1;
    :focus {
      border-color: ${i.Z.blue};
      outline: none;
    }
  }
`;function c(e){const{label:t,name:n,style:l}=e,i=r(e,["label","name","style"]);return a.createElement(o,{style:l},t&&a.createElement("label",null,t),a.createElement("input",Object.assign({"data-label":t,"data-name":n},i)))}},1275:(e,t,n)=>{n.d(t,{W:()=>u,P:()=>d});var a=n(959),l=n(3103),i=n(6824),r=n(7188),o=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var l=0;for(a=Object.getOwnPropertySymbols(e);l<a.length;l++)t.indexOf(a[l])<0&&Object.prototype.propertyIsEnumerable.call(e,a[l])&&(n[a[l]]=e[a[l]])}return n};const c=l.ZP.div`
  height: 24px;
  border: 1px solid ${i.Z.white6};
  position: relative;
  background-color: ${i.Z.white};
  &:focus {
    border: 1px solid ${i.Z.blue};
    .children-option {
      border: 1px solid ${i.Z.blue};
      border-top: none;
    }
  }
  .default-option {
    height: 24px;
    display: flex;
    align-items: center;
    padding: 0 4px;
    user-select: none;
    position: relative;
    border: none;
    .arrow {
      position: absolute;
      right: 4px;
      top: 1px;
    }
  }
  .children-option {
    overflow: hidden;
    position: absolute;
    left: -1px;
    width: 100%;
    transition: height .1s ease-in-out;
    z-index: 1;
  }
`,s=l.ZP.div`
  height: 24px;
  width: 100%;
  user-select: none;
  display: flex;
  align-items: center;
  background-color: ${i.Z.white};
  padding: 0 4px;
  &:hover {
    background-color: ${i.Z.primary};
    color: ${i.Z.white}
  }
`,d=e=>{const{children:t,defaultValue:n,onChange:l}=e,i=o(e,["children","defaultValue","onChange"]),[s,d]=a.useState(null),[u,m]=a.useState(0),p=a.useRef(null);return a.useEffect((()=>{var e;if(n)d(n);else{const t=(null===(e=null==p?void 0:p.current)||void 0===e?void 0:e.children)[0];d(t.dataset.value)}}),[n]),a.createElement(c,Object.assign({},i,{onClick:e=>{var t;const n=e.target;if("default-option"===n.className){if(u>0)return void m(0);const e=null===(t=null==p?void 0:p.current)||void 0===t?void 0:t.children.length;return void m(24*e)}const a=n.dataset.value;d(a),m(0),l&&l(a)},onBlur:()=>m(0),tabIndex:0}),a.createElement("div",{className:"default-option"},(e=>{var t;const n=null===(t=null==p?void 0:p.current)||void 0===t?void 0:t.children;if(n)for(const t of n){const n=t;if(n.dataset.value===e)return n.dataset.name}})(s),a.createElement("span",{className:"arrow",onClick:e=>e.stopPropagation()},a.createElement(r.Z,{theme:"outline",size:"24",fill:"#333"}))),a.createElement("div",{className:"children-option",ref:p,style:{height:u}},t))},u=e=>{const{name:t,value:n}=e,l=o(e,["name","value"]);return a.createElement(s,Object.assign({},l,{"data-name":t,"data-value":n}),t)}},6395:(e,t,n)=>{n.d(t,{O:()=>o});var a=n(959),l=n(3103),i=n(6824);const r=l.ZP.div`
  position: relative;
  background-color: ${i.Z.white3};
  overflow: hidden;
  &::after {
    display: block;
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    transform: translateX(-100%);
    background: linear-gradient(90deg, transparent, rgba(216, 216, 216, 0.253), transparent);
    animation: loading 1.5s infinite;
  }
  @keyframes loading {
    from { left: -100%; }
    to { left: 120%; }
  }
`;function o({width:e="100%",height:t=16}){return a.createElement(r,{className:"component-skeleton",style:{width:e,height:t}})}},7221:(e,t,n)=>{n.d(t,{g:()=>f});var a=n(959),l=n(120),i=n.n(l),r=n(3103),o=n(2497),c=n(6824),s=n(1104),d=function(e,t,n,a){return new(n||(n=Promise))((function(l,i){function r(e){try{c(a.next(e))}catch(e){i(e)}}function o(e){try{c(a.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?l(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(r,o)}c((a=a.apply(e,t||[])).next())}))};const u=r.ZP.div`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 5px;
  background-color: ${c.Z.white3};
  min-height: 80px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`,m=r.ZP.div`
  position: absolute;
  top: 0;
  left: 0;
  background-color: ${c.Z.primary};
  height: 100%;
  border-radius: 5px;
  z-index: 1;
`,p=r.ZP.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    border-radius: 5px;
  }
`,h=r.ZP.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
  z-index: 2;
  span {
    margin-left: 4px;
  }
`;function f(e){const{url:t,onFinish:n,onFailed:l,allowExtensions:r,defaultImage:o}=e,[s,p]=a.useState(null),[h,f]=a.useState(0),[E,b]=a.useState(null),y=a.useRef(null),x=a.useRef(null),w="上传成功",Z=null===s?c.Z.green:s===w?"transparent":c.Z.red,k=null===s?c.Z.primary:s===w?c.Z.green:c.Z.red;return a.createElement(u,{className:"component-upload",ref:y,onClick:()=>{x.current&&(x.current.click(),f(0),p(null))},style:{borderColor:k}},a.createElement("input",{type:"file",onChange:e=>{const a=e.target.files[0],o=null==a?void 0:a.name.split(".").pop();if(!(null==r?void 0:r.includes(o)))return f("100%"),void p("不支持的格式");const c=new FormData;c.append("file",a),(()=>{d(this,void 0,void 0,(function*(){const e={method:"post",data:c,url:t,headers:{"content-type":"multipart/form-data",Authorization:`Bearer ${localStorage.getItem("token")}`},onUploadProgress(e){const t=Number((e.loaded/e.total).toFixed(1));y.current&&f(y.current.offsetWidth*t)}},a=yield i()(e);0===a.data.code?(p(w),n&&(n(a.data.data),b(a.data.data))):(p("上传失败"),l&&l())}))})()},style:{width:1,height:1,position:"absolute"},ref:x}),s===w||o?a.createElement(v,{url:o,title:null==E?void 0:E.filename}):a.createElement(a.Fragment,null,a.createElement(m,{style:{width:h,backgroundColor:Z}}),a.createElement(g,{txt:s})))}const v=({url:e,title:t})=>a.createElement(p,{className:"preview",title:"点击更换图片"},a.createElement("img",{src:s._+e,alt:t||"pic"})),g=({txt:e})=>a.createElement(h,null,e?a.createElement("span",{style:{color:c.Z.white2}},e):a.createElement(a.Fragment,null,a.createElement(o.Z,{theme:"outline",size:"24",fill:"#333"}),a.createElement("span",null,"点击上传")))},1104:(e,t,n)=>{n.d(t,{_:()=>a});const a="https://api.kevinjobs.com:5000"},8914:(e,t,n)=>{n.d(t,{h4:()=>d});var a=n(959),l=n(3103),i=n(6824);const r=l.ZP.div`
  margin: 8px 0 16px 0;
  padding-bottom: 16px;
  border-bottom: 1px solid ${i.Z.white4};
  display: flex;
  align-items: center;
`,o=l.ZP.h3``,c=l.ZP.div``;function s(e){const{children:t}=e;return a.createElement(r,null,t)}s.Title=o,s.Add=c;const d=s,u=l.ZP.div`
  margin: 8px;
  display: inline-block;
  position: relative;
`,m=l.ZP.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`,p=l.ZP.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #000;
  opacity: 0.45;
`;function h(e){const[t,n]=a.useState(!1),{width:l=300,height:i=400,p:r,onEdit:o,children:c}=e,s={position:"absolute",top:i/2,left:l/2,transform:"translate(-14px, -14px)",zIndex:999,visibility:t?"visible":"hidden",cursor:"pointer"};return a.createElement(u,{style:{width:l,height:i},onMouseEnter:e=>{e.preventDefault(),n(!0)},onMouseLeave:e=>{e.preventDefault(),n(!1)}},c,a.createElement("div",{style:s,onClick:e=>o(e,r)},a.createElement("svg",{width:"28",height:"28",viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg"},a.createElement("rect",{width:"48",height:"48",fill:"white",fillOpacity:"0.01"}),a.createElement("path",{d:"M7 42H43",stroke:"#e4e4e4",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),a.createElement("path",{d:"M11 26.7199V34H18.3172L39 13.3081L31.6951 6L11 26.7199Z",fill:"none",stroke:"#e4e4e4",strokeWidth:"2",strokeLinejoin:"round"}))),t?a.createElement(p,null):"")}h.Img=m;l.ZP.div`
  padding-bottom: 64px;
`},8008:(e,t,n)=>{n.r(t),n.d(t,{default:()=>D});var a=n(959),l=n(2349),i=n(3103),r=n(6395),o=n(6824),c=n(5726),s=n.n(c),d=n(1104),u=n(891),m=function(e,t,n,a){return new(n||(n=Promise))((function(l,i){function r(e){try{c(a.next(e))}catch(e){i(e)}}function o(e){try{c(a.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?l(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(r,o)}c((a=a.apply(e,t||[])).next())}))};const p="https://api.kertennet.com/geography/locationInfo";var h=n(2082),f=n(56),v=n(9029),g=n(9168),E=n(6820),b=n(3925),y=n(6775),x=function(e,t,n,a){return new(n||(n=Promise))((function(l,i){function r(e){try{c(a.next(e))}catch(e){i(e)}}function o(e){try{c(a.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?l(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(r,o)}c((a=a.apply(e,t||[])).next())}))};const w=i.ZP.div`
  border: 1px solid ${o.Z.white6};
  display: flex;
  margin: 8px;
  padding: 4px;
  width: 320px;
  flex-wrap: wrap;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    border-color: ${o.Z.blue};
  }
  .left {
    .avatar {
      width: 108px;
      height: 108px;
      background-color: ${o.Z.white3};
      display: flex;
      align-items: center;
      justify-content: center;
      img {
        height: 100%;
        width: 100%;
        object-fit: cover;
      }
    }
  }
  .right {
    margin-left: 8px;
    .component-skeleton {
      margin: 8px 0;
    }
    .nickname {
      margin: 4px 0;
      display: flex;
      align-items: center;
      font-weight: 600;
      color: ${o.Z.white8};
      #name {
        margin-right: 8px;
      }
      #gender {
        position: relative;
        top: 1px;
      }
    }
    .icon {
      position: relative;
      top: 1px;
      margin-right: 5px;
    }
    .username {
      font-size: 14px;
      margin: 4px 0;
      color: ${o.Z.white7};
    }
    .uid {
      font-size: 12px;
      margin: 4px 0;
      color: ${o.Z.white7};
    }
    .birthday {
      font-size: 12px;
      margin: 4px 0;
      color: ${o.Z.white7};
    }
    .location {
      font-size: 12px;
      margin: 4px 0;
      color: ${o.Z.white7};
    }
  }
`;function Z({user:e,onClick:t}){const[n,l]=a.useState(null);return a.useEffect((()=>{(()=>{x(this,void 0,void 0,(function*(){const t=null==e?void 0:e.location.split(","),n=yield function(e,t){return m(this,void 0,void 0,(function*(){try{const n=yield u.Z.get(p,{params:{lat:e,lng:t}});return 200===n.data.code?n.data.data:void 0}catch(e){return}}))}(Number(t[0]),Number(t[1]));n&&l(n.address)}))})()}),[]),a.createElement(w,{onClick:()=>t(e)},a.createElement("div",{className:"left"},a.createElement("div",{className:"avatar"},e.avatar?a.createElement("img",{src:d._+e.avatar,alt:e.username}):a.createElement(h.Z,{theme:"outline",size:"48",fill:"#9b9b9b",strokeWidth:1}))),a.createElement("div",{className:"right"},a.createElement("div",{className:"nickname"},a.createElement("span",{id:"name"},e.nickname),a.createElement("span",{id:"gender"},"male"===e.gender&&a.createElement(f.Z,{theme:"outline",size:"14",fill:"#4a90e2"}),"female"===e.gender&&a.createElement(v.Z,{theme:"outline",size:"14",fill:"#bd10e0"}))),a.createElement("div",{className:"username"},a.createElement("span",{className:"icon"},a.createElement(g.Z,{theme:"outline",size:"14"})),a.createElement("span",null,e.username)),a.createElement("div",{className:"uid"},a.createElement("span",{className:"icon"},a.createElement(E.Z,{theme:"outline",size:"14"})),a.createElement("span",null,e.uid)),a.createElement("div",{className:"birthday"},a.createElement("span",{className:"icon"},a.createElement(b.Z,{theme:"outline",size:"14"})),a.createElement("span",null,e.birthday?s().unix(Number(String(e.birthday).slice(0,10))).format("YYYY-MM-DD"):"未知生日")),a.createElement("div",{className:"location"},a.createElement("span",{className:"icon"},a.createElement(y.Z,{theme:"outline",size:"14"})),a.createElement("span",null,n||e.location.slice(0,20)+"..."||0))))}function k(){return a.createElement(w,null,a.createElement("div",{className:"left"},a.createElement(r.O,{width:108,height:108})),a.createElement("div",{className:"right"},a.createElement(r.O,{width:170,height:12}),a.createElement(r.O,{width:40,height:12}),a.createElement(r.O,{width:60,height:12}),a.createElement(r.O,{width:80,height:12}),a.createElement(r.O,{width:100,height:12})))}var N=n(8914),O=n(1614),P=n(6175),j=n(1275),C=n(7221),$=n(7521),z=n.n($),I=(n(8149),function(e,t,n,a){return new(n||(n=Promise))((function(l,i){function r(e){try{c(a.next(e))}catch(e){i(e)}}function o(e){try{c(a.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?l(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(r,o)}c((a=a.apply(e,t||[])).next())}))});const S=i.ZP.div`
  display: flex;
  flex-wrap: wrap;
  padding: 8px 16px;
  border-radius: 5px;
  border: 1px solid ${o.Z.blue};
  background-color: ${o.Z.white};
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  .item {
    display: flex;
    align-items: center;
    margin: 4px 0;
    label {
      margin-right: 8px;
      width: 68px;
      text-align: justify;
      text-align-last: justify;
    }
  }
  .submit {
    margin: 8px 0;
    display: flex;
    justify-content: center;
    width: 100%;
  }
  .upload-avatar {
    width: 188px;
    display: flex;
    justify-content: center;
    div {
      width: 152px;
      height: 152px;
    }
    img {
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
  }
`,_=(e,t)=>Object.assign(Object.assign({},e),t.payload);function F({user:e,onSuccess:t}){const[n,i]=a.useReducer(_,e),r=e=>{const t=e.target.dataset.name,n=e.target.value;i({type:"",payload:{[t]:n}})};return a.createElement("div",{tabIndex:0},a.createElement(S,null,a.createElement("div",{className:"edit-form"},a.createElement("div",{className:"item"},a.createElement("label",null,"头像"),a.createElement("div",{className:"upload-avatar"},a.createElement("div",null,n.avatar?a.createElement("img",{src:d._+n.avatar,alt:n.username}):a.createElement(C.g,{url:d._+"/upload",onFinish:e=>i({type:"",payload:{avatar:e.url}}),allowExtensions:["jpg","png","jpeg","gif","webp"]})))),a.createElement("div",{className:"item"},a.createElement("label",null,"用户编码"),a.createElement(O.I,{"data-name":"uid",value:n.uid,onChange:r,disabled:!0})),a.createElement("div",{className:"item"},a.createElement("label",null,"邀请码"),a.createElement(O.I,{"data-name":"invitation",value:n.invitation,onChange:r,disabled:Boolean(n.uid)})),a.createElement("div",{className:"item"},a.createElement("label",null,"用户名"),a.createElement(O.I,{"data-name":"username",value:n.username,onChange:r})),a.createElement("div",{className:"item"},a.createElement("label",null,"密码"),a.createElement(O.I,{"data-name":"password",value:n.password,onChange:r})),a.createElement("div",{className:"item"},a.createElement("label",null,"昵称"),a.createElement(O.I,{"data-name":"nickname",value:n.nickname,onChange:r})),a.createElement("div",{className:"item"},a.createElement("label",null,"性别"),a.createElement("div",{style:{width:188}},a.createElement(j.P,{defaultValue:e.gender,onChange:e=>i({type:"",payload:{gender:e}})},a.createElement(j.W,{value:"",name:"未知性别"}),a.createElement(j.W,{value:"male",name:"男性"}),a.createElement(j.W,{value:"female",name:"女性"})))),a.createElement("div",{className:"item"},a.createElement("label",null,"生日"),a.createElement(z(),{dateFormat:"yyyy/MM/dd",selected:s().unix(n.birthday).toDate(),onChange:e=>i({type:"",payload:{birthday:s()(e).unix()}})})),a.createElement("div",{className:"item"},a.createElement("label",null,"所在地"),a.createElement(O.I,{"data-name":"location",value:n.location,onChange:r})),a.createElement("div",{className:"item"},a.createElement("label",null,"用户描述"),a.createElement(O.I,{"data-name":"description",value:n.description,onChange:r})),a.createElement("div",{className:"item"},a.createElement("label",null,"格言"),a.createElement(O.I,{"data-name":"motto",value:n.motto,onChange:r})),a.createElement("div",{className:"item"},a.createElement("label",null,"角色"),a.createElement(O.I,{"data-name":"role",value:n.role,onChange:r})),a.createElement("div",{className:"item"},a.createElement("label",null,"用户组"),a.createElement(O.I,{"data-name":"group",value:n.group,onChange:r}))),a.createElement("div",{className:"submit"},a.createElement(P.z,{type:"primary",style:{width:200,height:40},onClick:()=>{n.uid?(()=>{I(this,void 0,void 0,(function*(){(yield(0,l.Nq)(n.uid,n))?(window.alert("更新成功"),t&&t()):window.alert("添加失败")}))})():(()=>{I(this,void 0,void 0,(function*(){(yield(0,l.cn)(n))?(window.alert("添加成功"),t&&t()):window.alert("添加失败")}))})()}},n.uid?"更新":"注册"))))}var L=function(e,t,n,a){return new(n||(n=Promise))((function(l,i){function r(e){try{c(a.next(e))}catch(e){i(e)}}function o(e){try{c(a.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?l(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(r,o)}c((a=a.apply(e,t||[])).next())}))};const M=i.ZP.div``,W=i.ZP.div`
  display: flex;
  align-items: flex-start;
  .preview {
    width: 1040px;
    .item {
      display: inline-block;
      vertical-align: top;
    }
  }
  .edit-area {
    width: 300px;
    margin: 12px 32px;
    .user-edit {
      width: 300px;
    }
  }
`,B={uid:"",invitation:"",username:"",nickname:"",password:"",gender:"",birthday:0,location:"",description:"",motto:"",role:"",group:""};function D(){const[e,t]=a.useState(),[n,i]=a.useState(null),r=()=>{(()=>{L(this,void 0,void 0,(function*(){const e=yield(0,l.uh)();"string"!=typeof e?t(e.data.users):window.alert(e)}))})()};a.useEffect((()=>r()),[]);const o=e=>{i(null),setTimeout((()=>i(e)),100)};return a.createElement(M,null,a.createElement(N.h4,null,a.createElement(N.h4.Title,null,"用户管理"),a.createElement(N.h4.Add,null,a.createElement(P.z,{onClick:()=>{i(null),setTimeout((()=>i(B)),100)}},"新增用户"))),a.createElement(W,null,a.createElement("div",{className:"preview"},e?e.map((e=>a.createElement("div",{key:e.uid,className:"item"},a.createElement(Z,{user:e,onClick:o})))):a.createElement(a.Fragment,null,a.createElement("div",{className:"item"},a.createElement(k,null)),a.createElement("div",{className:"item"},a.createElement(k,null)),a.createElement("div",{className:"item"},a.createElement(k,null)),a.createElement("div",{className:"item"},a.createElement(k,null)))),a.createElement("div",{className:"edit-area"},a.createElement("div",{className:"user-edit"},n&&a.createElement(F,{user:n,onSuccess:r,onBlur:()=>i(null)})))))}},891:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(120),l=n.n(a),i=n(1104);const r=l().create();r.defaults.baseURL=i._,r.interceptors.request.use((e=>(e.data=JSON.stringify(e.data),e.headers={"content-type":"application/json",Authorization:`Bearer ${localStorage.getItem("token")}`},e)));const o=r}}]);