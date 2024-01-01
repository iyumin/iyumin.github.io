"use strict";(self.webpackChunklumie=self.webpackChunklumie||[]).push([[509],{8890:(e,t,a)=>{a.d(t,{k:()=>n});async function n(e,t){}},2384:(e,t,a)=>{a.d(t,{BT:()=>o,Nq:()=>i,cn:()=>c,uh:()=>r});var n=a(6433),l=a(8432);async function r(e){const t=await n.Z.get(l.Gm,{params:e});return 0===t.data.code?(t.data.data.users.forEach((e=>{e.avatar=l._n+e.avatar})),t.data):t.data.msg}async function i(e,t){t.avatar=t.avatar.replaceAll(l._n,"");const a=await n.Z.put(l.uh,t,{params:{uid:e}});return 0===a.data.code?a.data:a.data.msg}async function c(e){const t=await n.Z.post(l.uh,e);return 0===t.data.code?t.data:t.data.msg}async function o(e){const t=await n.Z.get(l.uh,{params:{username:e}});return 0===t.data.code?(t.data.data.users[0].avatar=l._n+t.data.data.users[0].avatar.replace("static/","static/thumb-"),t.data.data.users[0].birthday=Number(String(t.data.data.users[0].birthday).slice(0,11)),t.data):t.data.msg}},4653:(e,t,a)=>{a.d(t,{z:()=>c});var n=a(2983),l=a(9606),r=a(7952);const i=l.ZP.button`
  height: 24px;
  padding: 0px 8px;
  margin: 0px 4px;
  border: none;
  &:hover {
    opacity: 0.8;
  }
`;function c(e){const{type:t,children:a,danger:l,disabled:c=!1,onClick:o,style:s,...m}=e;let d="";const u=r.Z.white1;switch(t){case"primary":d=r.Z.blue;break;case"success":d=r.Z.green;break;case"light":d=r.Z.white4;break;default:d=r.Z.dark}return l&&(d=r.Z.red),n.createElement(i,{...m,style:{backgroundColor:c?r.Z.white6:d,color:u,cursor:c?"not-allowed":"pointer",...s},onClick:e=>{c?(e.preventDefault(),e.stopPropagation()):o(e)}},a)}},9287:(e,t,a)=>{a.d(t,{I:()=>c});var n=a(2983),l=a(9606),r=a(7952);const i=l.ZP.div`
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
    border: 1px solid ${r.Z.white5};
    border-radius: 0;
    flex-grow: 1;
    :focus {
      border-color: ${r.Z.blue};
      outline: none;
    }
  }
`;function c(e){const{label:t,name:a,style:l,...r}=e;return n.createElement(i,{style:l},t&&n.createElement("label",null,t),n.createElement("input",{"data-label":t,"data-name":a,...r}))}},5511:(e,t,a)=>{a.d(t,{W:()=>m,P:()=>s});var n=a(2983),l=a(9606),r=a(7952),i=a(7645);const c=l.ZP.div`
  height: 24px;
  border: 1px solid ${r.Z.white6};
  position: relative;
  background-color: ${r.Z.white};
  &:focus {
    border: 1px solid ${r.Z.blue};
    .children-option {
      border: 1px solid ${r.Z.blue};
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
`,o=l.ZP.div`
  height: 24px;
  width: 100%;
  user-select: none;
  display: flex;
  align-items: center;
  background-color: ${r.Z.white};
  padding: 0 4px;
  &:hover {
    background-color: ${r.Z.primary};
    color: ${r.Z.white}
  }
`,s=e=>{const{children:t,defaultValue:a,onChange:l,...r}=e,[o,s]=n.useState(null),[m,d]=n.useState(0),u=n.useRef(null);return n.useEffect((()=>{if(a)s(a);else{const e=u?.current?.children,t=e[0];s(t.dataset.value)}}),[a]),n.createElement(c,{...r,onClick:e=>{const t=e.target;if("default-option"===t.className){if(m>0)return void d(0);const e=u?.current?.children.length;return void d(24*e)}const a=t.dataset.value;s(a),d(0),l&&l(a)},onBlur:()=>d(0),tabIndex:0},n.createElement("div",{className:"default-option"},(e=>{const t=u?.current?.children;if(t)for(const a of t){const t=a;if(t.dataset.value===e)return t.dataset.name}})(o),n.createElement("span",{className:"arrow",onClick:e=>{e.stopPropagation(),e.preventDefault()}},n.createElement(i.Z,{theme:"outline",size:"24",fill:"#333"}))),n.createElement("div",{className:"children-option",ref:u,style:{height:m}},t))},m=e=>{const{name:t,value:a,...l}=e;return n.createElement(o,{...l,"data-name":t,"data-value":a},t)}},9805:(e,t,a)=>{a.d(t,{O:()=>c});var n=a(2983),l=a(9606),r=a(7952);const i=l.ZP.div`
  position: relative;
  background-color: ${r.Z.white3};
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
`;function c({width:e="100%",height:t=16}){return n.createElement(i,{className:"component-skeleton",style:{width:e,height:t}})}},5693:(e,t,a)=>{a.d(t,{G:()=>g,g:()=>p});var n=a(2983),l=a(5326),r=a.n(l),i=a(9606),c=a(5619),o=a(7952),s=a(538);const m=i.ZP.div`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 5px;
  // background-color: ${o.Z.white3};
  min-height: 80px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`,d=i.ZP.div`
  position: absolute;
  top: 0;
  left: 0;
  background-color: ${o.Z.primary};
  height: 100%;
  border-radius: 5px;
  z-index: 1;
`,u=i.ZP.div`
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
`;i.ZP.div`
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
`;function p(e){const{url:t,onFinish:a,onFailed:l,allowExtensions:i,defaultImage:u,urlPrefix:p}=e,[g,E]=n.useState(null),[v,f]=n.useState(0),[b,w]=n.useState(null),x=n.useRef(null),y=n.useRef(null),Z="上传成功",N=null===g?o.Z.green:g===Z?"transparent":o.Z.red,k=null===g?o.Z.primary:g===Z?o.Z.green:o.Z.red;return n.createElement(m,{className:"component-upload",ref:x,onClick:()=>{y.current&&(y.current.click(),f(0),E(null))},style:{borderColor:k}},n.createElement(c.pF,{onChange:e=>{const n=e.target.files[0],c=n?.name.split(".").pop();if(!i?.includes(c))return f("100%"),void E("不支持的格式");const o=new FormData;o.append("file",n),(async()=>{const e=await s.ZP.load(n),i={method:"post",data:o,url:t,headers:{"content-type":"multipart/form-data",Authorization:`Bearer ${localStorage.getItem("token")}`},onUploadProgress(e){const t=Number((e.loaded/e.total).toFixed(1));x.current&&f(x.current.offsetWidth*t)}},c=await r()(i);if(0===c.data.code){if(E(Z),a){const t=c.data.data;a(t,e),w(t)}}else E("上传失败"),l&&l()})()},name:"upload"}),g===Z||u?n.createElement(h,{url:b?.url?p+b.url:u,title:b?.filename}):n.createElement(n.Fragment,null,n.createElement(d,{style:{width:v,backgroundColor:N}})))}const h=({url:e,title:t})=>n.createElement(u,{className:"preview",title:"点击更换图片"},n.createElement("img",{src:e,alt:t||"pic"}));function g(e){const{url:t,defaultValue:a,onSuccess:l,onFailed:i}=e,[o,s]=(0,n.useState)(),[m,d]=(0,n.useState)(""),[u,p]=(0,n.useState)("100%"),h="success",g="failed";return n.createElement("div",{className:"component-avatar-upload"},n.createElement("div",{className:"avatar-preview"},o?.length>0?n.createElement("img",{src:v(o),alt:"avatar-preview"}):a&&n.createElement("img",{src:a,alt:"avatar-preview"}),n.createElement("div",{className:"avatar-status-mask",style:{width:u}}),n.createElement("div",{className:"avatar-status"},m===h&&n.createElement(c.JO,{name:"correct"}),m===g&&n.createElement(c.JO,{name:"error"}))),n.createElement(c.pF,{name:"avatar-upload",onChange:(e,a)=>{s(a),(async()=>{await async function({file:e,url:t,onProgress:a,onSuccess:n,onFailed:l}){const i=new FormData;i.append("file",e);const c={method:"post",data:i,url:t,headers:{"content-type":"multipart/form-data",Authorization:`Bearer ${localStorage.getItem("token")}`},onUploadProgress(e){const t=Number((e.loaded/e.total).toFixed(1));a(t)}},o=await r()(c);0===o.data.code?n(o.data.data):l(o.data.msg)}({url:t,file:E(a),onProgress:e=>{d("uploading"),p(100*e+"%")},onSuccess:e=>{d(h),l&&l(e)},onFailed:()=>{d(g),i&&i()}})})()},multiple:!1,value:o}))}const E=e=>[...e].reverse()[0],v=e=>{const t=E(e);if(t)return window.webkitURL.createObjectURL(t)}},4509:(e,t,a)=>{a.r(t),a.d(t,{default:()=>D});var n=a(2983),l=a(2384),r=a(9606),i=a(9805),c=a(7952),o=a(7860),s=a.n(o),m=a(8890),d=a(8134),u=a(2760),p=a(3e3),h=a(5176),g=a(3251),E=a(2695),v=a(2339);const f=r.ZP.div`
  border: 1px solid ${c.Z.white6};
  display: flex;
  margin: 8px;
  padding: 4px;
  width: 320px;
  flex-wrap: wrap;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    border-color: ${c.Z.blue};
  }
  .left {
    .avatar {
      width: 108px;
      height: 108px;
      background-color: ${c.Z.white3};
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
      color: ${c.Z.white8};
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
      color: ${c.Z.white7};
    }
    .uid {
      font-size: 12px;
      margin: 4px 0;
      color: ${c.Z.white7};
    }
    .birthday {
      font-size: 12px;
      margin: 4px 0;
      color: ${c.Z.white7};
    }
    .location {
      font-size: 12px;
      margin: 4px 0;
      color: ${c.Z.white7};
    }
  }
`;function b({user:e,onClick:t}){const[a,l]=n.useState(null);return n.useEffect((()=>{(async()=>{const t=e?.location.split(","),a=await(0,m.k)(Number(t[0]),Number(t[1]));a&&l(a.address)})()}),[]),n.createElement(f,{onClick:()=>t(e)},n.createElement("div",{className:"left"},n.createElement("div",{className:"avatar"},e.avatar?n.createElement("img",{src:e.avatar,alt:e.username}):n.createElement(d.Z,{theme:"outline",size:"48",fill:"#9b9b9b",strokeWidth:1}))),n.createElement("div",{className:"right"},n.createElement("div",{className:"nickname"},n.createElement("span",{id:"name"},e.nickname),n.createElement("span",{id:"gender"},"male"===e.gender&&n.createElement(u.Z,{theme:"outline",size:"14",fill:"#4a90e2"}),"female"===e.gender&&n.createElement(p.Z,{theme:"outline",size:"14",fill:"#bd10e0"}))),n.createElement("div",{className:"username"},n.createElement("span",{className:"icon"},n.createElement(h.Z,{theme:"outline",size:"14"})),n.createElement("span",null,e.username)),n.createElement("div",{className:"uid"},n.createElement("span",{className:"icon"},n.createElement(g.Z,{theme:"outline",size:"14"})),n.createElement("span",null,e.uid)),n.createElement("div",{className:"birthday"},n.createElement("span",{className:"icon"},n.createElement(E.Z,{theme:"outline",size:"14"})),n.createElement("span",null,e.birthday?s().unix(Number(String(e.birthday).slice(0,10))).format("YYYY-MM-DD"):"未知生日")),n.createElement("div",{className:"location"},n.createElement("span",{className:"icon"},n.createElement(v.Z,{theme:"outline",size:"14"})),n.createElement("span",null,a||e.location.slice(0,20)+"..."||0))))}function w(){return n.createElement(f,null,n.createElement("div",{className:"left"},n.createElement(i.O,{width:108,height:108})),n.createElement("div",{className:"right"},n.createElement(i.O,{width:170,height:12}),n.createElement(i.O,{width:40,height:12}),n.createElement(i.O,{width:60,height:12}),n.createElement(i.O,{width:80,height:12}),n.createElement(i.O,{width:100,height:12})))}var x=a(3255),y=a(9287),Z=a(4653),N=a(5511),k=a(5693),C=a(8432),P=a(5667),S=a.n(P);a(8765);const $=r.ZP.div`
  display: flex;
  flex-wrap: wrap;
  padding: 8px 16px;
  justify-content: center;
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
`,z=(e,t)=>({...e,...t.payload});function I({user:e,onSuccess:t}){const[a,r]=n.useReducer(z,e),i=e=>{const t=e.target.dataset.name,a=e.target.value;r({type:"",payload:{[t]:a}})};return n.createElement("div",{tabIndex:0},n.createElement($,null,n.createElement("div",{className:"edit-form"},n.createElement("div",{className:"item"},n.createElement("label",null,"头像"),n.createElement(k.G,{defaultValue:a.avatar,url:C.IW,onSuccess:e=>r({type:"",payload:{avatar:e.url}})})),n.createElement("div",{className:"item"},n.createElement("label",null,"用户编码"),n.createElement(y.I,{"data-name":"uid",value:a.uid,onChange:i,disabled:!0})),n.createElement("div",{className:"item"},n.createElement("label",null,"邀请码"),n.createElement(y.I,{"data-name":"invitation",value:a.invitation,onChange:i,disabled:Boolean(a.uid)})),n.createElement("div",{className:"item"},n.createElement("label",null,"用户名"),n.createElement(y.I,{"data-name":"username",value:a.username,onChange:i})),n.createElement("div",{className:"item"},n.createElement("label",null,"密码"),n.createElement(y.I,{"data-name":"password",value:a.password,onChange:i})),n.createElement("div",{className:"item"},n.createElement("label",null,"昵称"),n.createElement(y.I,{"data-name":"nickname",value:a.nickname,onChange:i})),n.createElement("div",{className:"item"},n.createElement("label",null,"性别"),n.createElement("div",{style:{width:188}},n.createElement(N.P,{defaultValue:e.gender,onChange:e=>r({type:"",payload:{gender:e}})},n.createElement(N.W,{value:"",name:"未知性别"}),n.createElement(N.W,{value:"male",name:"男性"}),n.createElement(N.W,{value:"female",name:"女性"})))),n.createElement("div",{className:"item"},n.createElement("label",null,"生日"),n.createElement(S(),{dateFormat:"yyyy/MM/dd",selected:s().unix(a.birthday).toDate(),onChange:e=>r({type:"",payload:{birthday:s()(e).unix()}})})),n.createElement("div",{className:"item"},n.createElement("label",null,"所在地"),n.createElement(y.I,{"data-name":"location",value:a.location,onChange:i})),n.createElement("div",{className:"item"},n.createElement("label",null,"用户描述"),n.createElement(y.I,{"data-name":"description",value:a.description,onChange:i})),n.createElement("div",{className:"item"},n.createElement("label",null,"格言"),n.createElement(y.I,{"data-name":"motto",value:a.motto,onChange:i})),n.createElement("div",{className:"item"},n.createElement("label",null,"角色"),n.createElement(y.I,{"data-name":"role",value:a.role,onChange:i})),n.createElement("div",{className:"item"},n.createElement("label",null,"用户组"),n.createElement(y.I,{"data-name":"group",value:a.group,onChange:i}))),n.createElement("div",{className:"submit"},n.createElement(Z.z,{type:"primary",style:{width:200,height:40},onClick:()=>{a.uid?(async()=>{"string"!=typeof await(0,l.Nq)(a.uid,a)?(window.alert("更新成功"),t&&t()):window.alert("添加失败")})():(async()=>{"string"!=typeof await(0,l.cn)(a)?(window.alert("添加成功"),t&&t()):window.alert("添加失败")})()}},a.uid?"更新":"注册"))))}var F=a(5619);const j=r.ZP.div``,O=r.ZP.div`
  display: flex;
  align-items: flex-start;
  .preview {
    .item {
      display: inline-block;
      vertical-align: top;
    }
  }
`,B={uid:"",avatar:"",invitation:"",username:"",nickname:"",password:"",gender:"",birthday:0,location:"",description:"",motto:"",role:"",group:""};function D(){const[e,t]=n.useState(),[a,r]=n.useState(null),i=()=>{(async()=>{const e=await(0,l.uh)();"string"!=typeof e?t(e.data.users):window.alert(e)})()};n.useEffect((()=>i()),[]);const c=e=>{r(null),setTimeout((()=>r(e)),100)};return n.createElement(j,null,n.createElement(x.h4,null,n.createElement(x.h4.Title,null,"用户管理"),n.createElement(x.h4.Add,null,n.createElement(F.HS,{onClick:()=>{r(null),setTimeout((()=>r(B)),100)}},"新增用户"))),n.createElement(O,null,n.createElement("div",{className:"preview"},e?e.map((e=>n.createElement("div",{key:e.uid,className:"item"},n.createElement(b,{user:e,onClick:c})))):n.createElement(n.Fragment,null,n.createElement("div",{className:"item"},n.createElement(w,null)),n.createElement("div",{className:"item"},n.createElement(w,null)),n.createElement("div",{className:"item"},n.createElement(w,null)),n.createElement("div",{className:"item"},n.createElement(w,null)))),n.createElement("div",{className:"edit-area"},n.createElement(F.u_,{visible:Boolean(a),onClose:()=>r(null)},n.createElement(F.u_.Header,null,n.createElement("h2",null,a?.uid?"编辑":"新增","用户")),n.createElement(F.u_.Content,null,a&&n.createElement(I,{user:a,onSuccess:i,onBlur:()=>r(null)}))))))}}}]);