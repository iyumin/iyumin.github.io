"use strict";(self.webpackChunklumie=self.webpackChunklumie||[]).push([[509],{8890:(e,t,a)=>{a.d(t,{k:()=>i});var n=a(6433);const l="https://api.kertennet.com/geography/locationInfo";async function i(e,t){try{const a=await n.Z.get(l,{params:{lat:e,lng:t}});return 200===a.data.code?a.data.data:void 0}catch(e){return}}},2384:(e,t,a)=>{a.d(t,{BT:()=>o,Nq:()=>r,cn:()=>c,uh:()=>i});var n=a(6433),l=a(8432);async function i(e){const t=await n.Z.get(l.Gm,{params:e});return 0===t.data.code?(t.data.data.users.forEach((e=>{e.avatar=l._n+e.avatar})),t.data):t.data.msg}async function r(e,t){t.avatar=t.avatar.replaceAll(l._n,"");const a=await n.Z.put(l.uh,t,{params:{uid:e}});return 0===a.data.code?a.data:a.data.msg}async function c(e){const t=await n.Z.post(l.uh,e);return 0===t.data.code?t.data:t.data.msg}async function o(e){const t=await n.Z.get(l.uh,{params:{username:e}});return 0===t.data.code?(t.data.data.users[0].avatar=l._n+t.data.data.users[0].avatar.replace("static/","static/thumb-"),t.data.data.users[0].birthday=Number(String(t.data.data.users[0].birthday).slice(0,11)),t.data):t.data.msg}},4653:(e,t,a)=>{a.d(t,{z:()=>c});var n=a(2983),l=a(9606),i=a(7952);const r=l.ZP.button`
  height: 24px;
  padding: 0px 8px;
  margin: 0px 4px;
  border: none;
  &:hover {
    opacity: 0.8;
  }
`;function c(e){const{type:t,children:a,danger:l,disabled:c=!1,onClick:o,style:s,...m}=e;let d="";const u=i.Z.white1;switch(t){case"primary":d=i.Z.blue;break;case"success":d=i.Z.green;break;case"light":d=i.Z.white4;break;default:d=i.Z.dark}return l&&(d=i.Z.red),n.createElement(r,{...m,style:{backgroundColor:c?i.Z.white6:d,color:u,cursor:c?"not-allowed":"pointer",...s},onClick:e=>{c?(e.preventDefault(),e.stopPropagation()):o(e)}},a)}},9287:(e,t,a)=>{a.d(t,{I:()=>c});var n=a(2983),l=a(9606),i=a(7952);const r=l.ZP.div`
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
`;function c(e){const{label:t,name:a,style:l,...i}=e;return n.createElement(r,{style:l},t&&n.createElement("label",null,t),n.createElement("input",{"data-label":t,"data-name":a,...i}))}},5511:(e,t,a)=>{a.d(t,{W:()=>m,P:()=>s});var n=a(2983),l=a(9606),i=a(7952),r=a(7645);const c=l.ZP.div`
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
`,o=l.ZP.div`
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
`,s=e=>{const{children:t,defaultValue:a,onChange:l,...i}=e,[o,s]=n.useState(null),[m,d]=n.useState(0),u=n.useRef(null);return n.useEffect((()=>{if(a)s(a);else{const e=u?.current?.children,t=e[0];s(t.dataset.value)}}),[a]),n.createElement(c,{...i,onClick:e=>{const t=e.target;if("default-option"===t.className){if(m>0)return void d(0);const e=u?.current?.children.length;return void d(24*e)}const a=t.dataset.value;s(a),d(0),l&&l(a)},onBlur:()=>d(0),tabIndex:0},n.createElement("div",{className:"default-option"},(e=>{const t=u?.current?.children;if(t)for(const a of t){const t=a;if(t.dataset.value===e)return t.dataset.name}})(o),n.createElement("span",{className:"arrow",onClick:e=>{e.stopPropagation(),e.preventDefault()}},n.createElement(r.Z,{theme:"outline",size:"24",fill:"#333"}))),n.createElement("div",{className:"children-option",ref:u,style:{height:m}},t))},m=e=>{const{name:t,value:a,...l}=e;return n.createElement(o,{...l,"data-name":t,"data-value":a},t)}},9805:(e,t,a)=>{a.d(t,{O:()=>c});var n=a(2983),l=a(9606),i=a(7952);const r=l.ZP.div`
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
`;function c({width:e="100%",height:t=16}){return n.createElement(r,{className:"component-skeleton",style:{width:e,height:t}})}},3729:(e,t,a)=>{a.d(t,{g:()=>h});var n=a(2983),l=a(5326),i=a.n(l),r=a(9606),c=a(2670),o=a(7952),s=a(538);const m=r.ZP.div`
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
`,d=r.ZP.div`
  position: absolute;
  top: 0;
  left: 0;
  background-color: ${o.Z.primary};
  height: 100%;
  border-radius: 5px;
  z-index: 1;
`,u=r.ZP.div`
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
`,p=r.ZP.div`
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
`;function h(e){const{url:t,onFinish:a,onFailed:l,allowExtensions:r,defaultImage:c,urlPrefix:u}=e,[p,h]=n.useState(null),[v,f]=n.useState(0),[b,x]=n.useState(null),w=n.useRef(null),y=n.useRef(null),Z="上传成功",N=null===p?o.Z.green:p===Z?"transparent":o.Z.red,k=null===p?o.Z.primary:p===Z?o.Z.green:o.Z.red;return n.createElement(m,{className:"component-upload",ref:w,onClick:()=>{y.current&&(y.current.click(),f(0),h(null))},style:{borderColor:k}},n.createElement("input",{type:"file",onChange:e=>{const n=e.target.files[0],c=n?.name.split(".").pop();if(!r?.includes(c))return f("100%"),void h("不支持的格式");const o=new FormData;o.append("file",n),(async()=>{const e=await s.ZP.load(n),r={method:"post",data:o,url:t,headers:{"content-type":"multipart/form-data",Authorization:`Bearer ${localStorage.getItem("token")}`},onUploadProgress(e){const t=Number((e.loaded/e.total).toFixed(1));w.current&&f(w.current.offsetWidth*t)}},c=await i()(r);if(0===c.data.code){if(h(Z),a){const t=c.data.data;a(t,e),x(t)}}else h("上传失败"),l&&l()})()},style:{width:1,height:1,position:"absolute"},ref:y}),p===Z||c?n.createElement(g,{url:b?.url?u+b.url:c,title:b?.filename}):n.createElement(n.Fragment,null,n.createElement(d,{style:{width:v,backgroundColor:N}}),n.createElement(E,{txt:p})))}const g=({url:e,title:t})=>n.createElement(u,{className:"preview",title:"点击更换图片"},n.createElement("img",{src:e,alt:t||"pic"})),E=({txt:e})=>n.createElement(p,null,e?n.createElement("span",{style:{color:o.Z.white2}},e):n.createElement(n.Fragment,null,n.createElement(c.Z,{theme:"outline",size:"24",fill:"#333"}),n.createElement("span",null,"点击上传")))},4509:(e,t,a)=>{a.r(t),a.d(t,{default:()=>_});var n=a(2983),l=a(2384),i=a(9606),r=a(9805),c=a(7952),o=a(7860),s=a.n(o),m=a(8890),d=a(8134),u=a(2760),p=a(3e3),h=a(5176),g=a(3251),E=a(2695),v=a(2339);const f=i.ZP.div`
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
`;function b({user:e,onClick:t}){const[a,l]=n.useState(null);return n.useEffect((()=>{(async()=>{const t=e?.location.split(","),a=await(0,m.k)(Number(t[0]),Number(t[1]));a&&l(a.address)})()}),[]),n.createElement(f,{onClick:()=>t(e)},n.createElement("div",{className:"left"},n.createElement("div",{className:"avatar"},e.avatar?n.createElement("img",{src:e.avatar,alt:e.username}):n.createElement(d.Z,{theme:"outline",size:"48",fill:"#9b9b9b",strokeWidth:1}))),n.createElement("div",{className:"right"},n.createElement("div",{className:"nickname"},n.createElement("span",{id:"name"},e.nickname),n.createElement("span",{id:"gender"},"male"===e.gender&&n.createElement(u.Z,{theme:"outline",size:"14",fill:"#4a90e2"}),"female"===e.gender&&n.createElement(p.Z,{theme:"outline",size:"14",fill:"#bd10e0"}))),n.createElement("div",{className:"username"},n.createElement("span",{className:"icon"},n.createElement(h.Z,{theme:"outline",size:"14"})),n.createElement("span",null,e.username)),n.createElement("div",{className:"uid"},n.createElement("span",{className:"icon"},n.createElement(g.Z,{theme:"outline",size:"14"})),n.createElement("span",null,e.uid)),n.createElement("div",{className:"birthday"},n.createElement("span",{className:"icon"},n.createElement(E.Z,{theme:"outline",size:"14"})),n.createElement("span",null,e.birthday?s().unix(Number(String(e.birthday).slice(0,10))).format("YYYY-MM-DD"):"未知生日")),n.createElement("div",{className:"location"},n.createElement("span",{className:"icon"},n.createElement(v.Z,{theme:"outline",size:"14"})),n.createElement("span",null,a||e.location.slice(0,20)+"..."||0))))}function x(){return n.createElement(f,null,n.createElement("div",{className:"left"},n.createElement(r.O,{width:108,height:108})),n.createElement("div",{className:"right"},n.createElement(r.O,{width:170,height:12}),n.createElement(r.O,{width:40,height:12}),n.createElement(r.O,{width:60,height:12}),n.createElement(r.O,{width:80,height:12}),n.createElement(r.O,{width:100,height:12})))}var w=a(3255),y=a(9287),Z=a(4653),N=a(5511),k=a(3729),C=a(8432),z=a(5667),P=a.n(z);a(8765);const $=i.ZP.div`
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
`,I=(e,t)=>({...e,...t.payload});function S({user:e,onSuccess:t}){const[a,i]=n.useReducer(I,e),r=e=>{const t=e.target.dataset.name,a=e.target.value;i({type:"",payload:{[t]:a}})};return n.createElement("div",{tabIndex:0},n.createElement($,null,n.createElement("div",{className:"edit-form"},n.createElement("div",{className:"item"},n.createElement("label",null,"头像"),n.createElement("div",{className:"upload-avatar"},n.createElement("div",{style:{position:"relative"}},n.createElement("div",{style:{position:"absolute",zIndex:1}},a.avatar&&n.createElement("img",{src:a.avatar,alt:a.username})),n.createElement("div",{style:{position:"absolute",zIndex:2}},n.createElement(k.g,{url:C.IW,urlPrefix:C._n,onFinish:e=>i({type:"",payload:{avatar:e.url}}),allowExtensions:["jpg","png","jpeg","gif","webp"]}))))),n.createElement("div",{className:"item"},n.createElement("label",null,"用户编码"),n.createElement(y.I,{"data-name":"uid",value:a.uid,onChange:r,disabled:!0})),n.createElement("div",{className:"item"},n.createElement("label",null,"邀请码"),n.createElement(y.I,{"data-name":"invitation",value:a.invitation,onChange:r,disabled:Boolean(a.uid)})),n.createElement("div",{className:"item"},n.createElement("label",null,"用户名"),n.createElement(y.I,{"data-name":"username",value:a.username,onChange:r})),n.createElement("div",{className:"item"},n.createElement("label",null,"密码"),n.createElement(y.I,{"data-name":"password",value:a.password,onChange:r})),n.createElement("div",{className:"item"},n.createElement("label",null,"昵称"),n.createElement(y.I,{"data-name":"nickname",value:a.nickname,onChange:r})),n.createElement("div",{className:"item"},n.createElement("label",null,"性别"),n.createElement("div",{style:{width:188}},n.createElement(N.P,{defaultValue:e.gender,onChange:e=>i({type:"",payload:{gender:e}})},n.createElement(N.W,{value:"",name:"未知性别"}),n.createElement(N.W,{value:"male",name:"男性"}),n.createElement(N.W,{value:"female",name:"女性"})))),n.createElement("div",{className:"item"},n.createElement("label",null,"生日"),n.createElement(P(),{dateFormat:"yyyy/MM/dd",selected:s().unix(a.birthday).toDate(),onChange:e=>i({type:"",payload:{birthday:s()(e).unix()}})})),n.createElement("div",{className:"item"},n.createElement("label",null,"所在地"),n.createElement(y.I,{"data-name":"location",value:a.location,onChange:r})),n.createElement("div",{className:"item"},n.createElement("label",null,"用户描述"),n.createElement(y.I,{"data-name":"description",value:a.description,onChange:r})),n.createElement("div",{className:"item"},n.createElement("label",null,"格言"),n.createElement(y.I,{"data-name":"motto",value:a.motto,onChange:r})),n.createElement("div",{className:"item"},n.createElement("label",null,"角色"),n.createElement(y.I,{"data-name":"role",value:a.role,onChange:r})),n.createElement("div",{className:"item"},n.createElement("label",null,"用户组"),n.createElement(y.I,{"data-name":"group",value:a.group,onChange:r}))),n.createElement("div",{className:"submit"},n.createElement(Z.z,{type:"primary",style:{width:200,height:40},onClick:()=>{a.uid?(async()=>{"string"!=typeof await(0,l.Nq)(a.uid,a)?(window.alert("更新成功"),t&&t()):window.alert("添加失败")})():(async()=>{"string"!=typeof await(0,l.cn)(a)?(window.alert("添加成功"),t&&t()):window.alert("添加失败")})()}},a.uid?"更新":"注册"))))}var j=a(5703);const F=i.ZP.div``,O=i.ZP.div`
  display: flex;
  align-items: flex-start;
  .preview {
    .item {
      display: inline-block;
      vertical-align: top;
    }
  }
`,W={uid:"",avatar:"",invitation:"",username:"",nickname:"",password:"",gender:"",birthday:0,location:"",description:"",motto:"",role:"",group:""};function _(){const[e,t]=n.useState(),[a,i]=n.useState(null),r=()=>{(async()=>{const e=await(0,l.uh)();"string"!=typeof e?t(e.data.users):window.alert(e)})()};n.useEffect((()=>r()),[]);const c=e=>{i(null),setTimeout((()=>i(e)),100)};return n.createElement(F,null,n.createElement(w.h4,null,n.createElement(w.h4.Title,null,"用户管理"),n.createElement(w.h4.Add,null,n.createElement(j.HS,{onClick:()=>{i(null),setTimeout((()=>i(W)),100)}},"新增用户"))),n.createElement(O,null,n.createElement("div",{className:"preview"},e?e.map((e=>n.createElement("div",{key:e.uid,className:"item"},n.createElement(b,{user:e,onClick:c})))):n.createElement(n.Fragment,null,n.createElement("div",{className:"item"},n.createElement(x,null)),n.createElement("div",{className:"item"},n.createElement(x,null)),n.createElement("div",{className:"item"},n.createElement(x,null)),n.createElement("div",{className:"item"},n.createElement(x,null)))),n.createElement("div",{className:"edit-area"},n.createElement(j.u_,{visible:Boolean(a),onClose:()=>i(null)},n.createElement(j.u_.Header,null,n.createElement("h2",null,a?.uid?"编辑":"新增","用户")),n.createElement(j.u_.Content,null,a&&n.createElement(S,{user:a,onSuccess:r,onBlur:()=>i(null)}))))))}}}]);