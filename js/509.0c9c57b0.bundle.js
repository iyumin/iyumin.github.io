"use strict";(self.webpackChunklumie=self.webpackChunklumie||[]).push([[509],{8890:(e,t,a)=>{a.d(t,{k:()=>i});var n=a(6433);const l="https://api.kertennet.com/geography/locationInfo";async function i(e,t){try{const a=await n.Z.get(l,{params:{lat:e,lng:t}});return 200===a.data.code?a.data.data:void 0}catch(e){return}}},2384:(e,t,a)=>{a.d(t,{BT:()=>s,Nq:()=>r,cn:()=>o,uh:()=>i});var n=a(6433),l=a(8432);async function i(e){const t=await n.Z.get(l.Gm,{params:e});return 0===t.data.code?(t.data.data.users.forEach((e=>{e.avatar=l._n+e.avatar})),t.data):t.data.msg}async function r(e,t){t.avatar=t.avatar.replaceAll(l._n,"");const a=await n.Z.put(l.uh,t,{params:{uid:e}});return 0===a.data.code?a.data:a.data.msg}async function o(e){const t=await n.Z.post(l.uh,e);return 0===t.data.code?t.data:t.data.msg}async function s(e){const t=await n.Z.get(l.uh,{params:{username:e}});return 0===t.data.code?(t.data.data.users[0].avatar=l._n+t.data.data.users[0].avatar.replace("static/","static/thumb-"),t.data.data.users[0].birthday=Number(String(t.data.data.users[0].birthday).slice(0,11)),t.data):t.data.msg}},4653:(e,t,a)=>{a.d(t,{z:()=>o});var n=a(2983),l=a(9606),i=a(7952);const r=l.ZP.button`
  height: 24px;
  padding: 0px 8px;
  margin: 0px 4px;
  border: none;
  &:hover {
    opacity: 0.8;
  }
`;function o(e){const{type:t,children:a,danger:l,disabled:o=!1,onClick:s,style:c,...d}=e;let m="";const u=i.Z.white1;switch(t){case"primary":m=i.Z.blue;break;case"success":m=i.Z.green;break;case"light":m=i.Z.white4;break;default:m=i.Z.dark}return l&&(m=i.Z.red),n.createElement(r,{...d,style:{backgroundColor:o?i.Z.white6:m,color:u,cursor:o?"not-allowed":"pointer",...c},onClick:e=>{o?(e.preventDefault(),e.stopPropagation()):s(e)}},a)}},7532:(e,t,a)=>{a.d(t,{V:()=>u});var n=a(7952),l=a(2983),i=a(9606),r=a(2437),o=a(1410),s=a(4716);const c=(0,i.ZP)(r.q.div)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
  background-color: ${n.Z.white};
  // min-width: 400px;
  min-height: 300px;
  max-height: 95vh;
  margin: 0 auto;
  border: 1px solid ${n.Z.white4};
  border-radius: 4px;
  overflow: hidden;
  box-shadow: 4px 4px 4px 4px rgba(0,0,0,0.1);
  z-index: 999;
`,d=i.ZP.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${n.Z.white4};
`,m=i.ZP.div`
  overflow-y: auto;
`;function u(e){const{title:t,visible:a,width:n,height:i,animation:u="zoom-in-out",onCancel:p,children:h,mask:g=!1}=e,E=(0,r.q_)({from:{top:"-50%"},to:{top:a?"50%":"-50%"}}),f={"zoom-in-out":(0,r.q_)({from:{transform:"translateY(-50%) translateX(-50%) scale3d(0, 0, 0)"},to:{transform:a?"translateY(-50%) translateX(-50%) scale3d(1, 1, 1)":"translateY(-50%) translateX(-50%) scale3d(0, 0, 0)"}}),"slide-top-down":E};return l.createElement(c,{style:f[u]},l.createElement(d,null,l.createElement("h3",{style:{textAlign:"center",flexGrow:1}},t),l.createElement(o.Z,{theme:"outline",size:"20",fill:"#333",strokeWidth:2,onClick:p,style:{display:"flex",alignItems:"center",cursor:"pointer",position:"absolute",right:8,top:8}})),l.createElement(m,{style:{width:n,height:i}},h),g&&a&&l.createElement(s.z,null))}},9287:(e,t,a)=>{a.d(t,{I:()=>o});var n=a(2983),l=a(9606),i=a(7952);const r=l.ZP.div`
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
`;function o(e){const{label:t,name:a,style:l,...i}=e;return n.createElement(r,{style:l},t&&n.createElement("label",null,t),n.createElement("input",{"data-label":t,"data-name":a,...i}))}},4716:(e,t,a)=>{a.d(t,{z:()=>o});var n=a(9606),l=a(3730),i=a(2983);const r=n.ZP.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0,0,0,0.75);
`;function o(){const e="mask-container";return(0,i.useEffect)((()=>{let t=document.getElementById(e);t||(t=document.createElement("div"),t.id=e,document.body.appendChild(t))}),[]),document.getElementById(e)?l.createPortal(i.createElement(r,null),document.getElementById(e)):i.createElement("div",null)}},5511:(e,t,a)=>{a.d(t,{W:()=>d,P:()=>c});var n=a(2983),l=a(9606),i=a(7952),r=a(7645);const o=l.ZP.div`
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
`,c=e=>{const{children:t,defaultValue:a,onChange:l,...i}=e,[s,c]=n.useState(null),[d,m]=n.useState(0),u=n.useRef(null);return n.useEffect((()=>{if(a)c(a);else{const e=u?.current?.children,t=e[0];c(t.dataset.value)}}),[a]),n.createElement(o,{...i,onClick:e=>{const t=e.target;if("default-option"===t.className){if(d>0)return void m(0);const e=u?.current?.children.length;return void m(24*e)}const a=t.dataset.value;c(a),m(0),l&&l(a)},onBlur:()=>m(0),tabIndex:0},n.createElement("div",{className:"default-option"},(e=>{const t=u?.current?.children;if(t)for(const a of t){const t=a;if(t.dataset.value===e)return t.dataset.name}})(s),n.createElement("span",{className:"arrow",onClick:e=>{e.stopPropagation(),e.preventDefault()}},n.createElement(r.Z,{theme:"outline",size:"24",fill:"#333"}))),n.createElement("div",{className:"children-option",ref:u,style:{height:d}},t))},d=e=>{const{name:t,value:a,...l}=e;return n.createElement(s,{...l,"data-name":t,"data-value":a},t)}},9805:(e,t,a)=>{a.d(t,{O:()=>o});var n=a(2983),l=a(9606),i=a(7952);const r=l.ZP.div`
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
`;function o({width:e="100%",height:t=16}){return n.createElement(r,{className:"component-skeleton",style:{width:e,height:t}})}},3729:(e,t,a)=>{a.d(t,{g:()=>h});var n=a(2983),l=a(5326),i=a.n(l),r=a(9606),o=a(2670),s=a(7952),c=a(538);const d=r.ZP.div`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 5px;
  // background-color: ${s.Z.white3};
  min-height: 80px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`,m=r.ZP.div`
  position: absolute;
  top: 0;
  left: 0;
  background-color: ${s.Z.primary};
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
`;function h(e){const{url:t,onFinish:a,onFailed:l,allowExtensions:r,defaultImage:o,urlPrefix:u}=e,[p,h]=n.useState(null),[f,v]=n.useState(0),[x,b]=n.useState(null),w=n.useRef(null),y=n.useRef(null),Z="上传成功",k=null===p?s.Z.green:p===Z?"transparent":s.Z.red,N=null===p?s.Z.primary:p===Z?s.Z.green:s.Z.red;return n.createElement(d,{className:"component-upload",ref:w,onClick:()=>{y.current&&(y.current.click(),v(0),h(null))},style:{borderColor:N}},n.createElement("input",{type:"file",onChange:e=>{const n=e.target.files[0],o=n?.name.split(".").pop();if(!r?.includes(o))return v("100%"),void h("不支持的格式");const s=new FormData;s.append("file",n),(async()=>{const e=await c.ZP.load(n),r={method:"post",data:s,url:t,headers:{"content-type":"multipart/form-data",Authorization:`Bearer ${localStorage.getItem("token")}`},onUploadProgress(e){const t=Number((e.loaded/e.total).toFixed(1));w.current&&v(w.current.offsetWidth*t)}},o=await i()(r);if(0===o.data.code){if(h(Z),a){const t=o.data.data;a(t,e),b(t)}}else h("上传失败"),l&&l()})()},style:{width:1,height:1,position:"absolute"},ref:y}),p===Z||o?n.createElement(g,{url:x?.url?u+x.url:o,title:x?.filename}):n.createElement(n.Fragment,null,n.createElement(m,{style:{width:f,backgroundColor:k}}),n.createElement(E,{txt:p})))}const g=({url:e,title:t})=>n.createElement(u,{className:"preview",title:"点击更换图片"},n.createElement("img",{src:e,alt:t||"pic"})),E=({txt:e})=>n.createElement(p,null,e?n.createElement("span",{style:{color:s.Z.white2}},e):n.createElement(n.Fragment,null,n.createElement(o.Z,{theme:"outline",size:"24",fill:"#333"}),n.createElement("span",null,"点击上传")))},8432:(e,t,a)=>{a.d(t,{Gm:()=>s,IW:()=>l,N7:()=>d,ZE:()=>i,_n:()=>n,fo:()=>r,mS:()=>o,uh:()=>c});const n="https://api.kevinjobs.com:5000",l=n+"/upload",i=n+"/token",r=n+"/post/list",o=n+"/p",s=n+"/user/list",c=n+"/user",d=n+"/invitation/list"},3255:(e,t,a)=>{a.d(t,{h4:()=>d});var n=a(2983),l=a(9606),i=a(7952);const r=l.ZP.div`
  margin: 8px 0 16px 0;
  padding-bottom: 16px;
  border-bottom: 1px solid ${i.Z.white4};
  display: flex;
  align-items: center;
`,o=l.ZP.h3``,s=l.ZP.div``;function c(e){const{children:t}=e;return n.createElement(r,null,t)}c.Title=o,c.Add=s;const d=c,m=l.ZP.div`
  margin: 8px;
  display: inline-block;
  position: relative;
`,u=l.ZP.img`
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
`;function h(e){const[t,a]=n.useState(!1),{width:l=300,height:i=400,p:r,onEdit:o,children:s}=e,c={position:"absolute",top:i/2,left:l/2,transform:"translate(-14px, -14px)",zIndex:999,visibility:t?"visible":"hidden",cursor:"pointer"};return n.createElement(m,{style:{width:l,height:i},onMouseEnter:e=>{e.preventDefault(),a(!0)},onMouseLeave:e=>{e.preventDefault(),a(!1)}},s,n.createElement("div",{style:c,onClick:e=>o(e,r)},n.createElement("svg",{width:"28",height:"28",viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n.createElement("rect",{width:"48",height:"48",fill:"white",fillOpacity:"0.01"}),n.createElement("path",{d:"M7 42H43",stroke:"#e4e4e4",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),n.createElement("path",{d:"M11 26.7199V34H18.3172L39 13.3081L31.6951 6L11 26.7199Z",fill:"none",stroke:"#e4e4e4",strokeWidth:"2",strokeLinejoin:"round"}))),t?n.createElement(p,null):"")}h.Img=u;l.ZP.div`
  padding-bottom: 64px;
`},4509:(e,t,a)=>{a.r(t),a.d(t,{default:()=>O});var n=a(2983),l=a(2384),i=a(9606),r=a(9805),o=a(7952),s=a(7860),c=a.n(s),d=a(8890),m=a(8134),u=a(2760),p=a(3e3),h=a(5176),g=a(3251),E=a(2695),f=a(2339);const v=i.ZP.div`
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
`;function x({user:e,onClick:t}){const[a,l]=n.useState(null);return n.useEffect((()=>{(async()=>{const t=e?.location.split(","),a=await(0,d.k)(Number(t[0]),Number(t[1]));a&&l(a.address)})()}),[]),n.createElement(v,{onClick:()=>t(e)},n.createElement("div",{className:"left"},n.createElement("div",{className:"avatar"},e.avatar?n.createElement("img",{src:e.avatar,alt:e.username}):n.createElement(m.Z,{theme:"outline",size:"48",fill:"#9b9b9b",strokeWidth:1}))),n.createElement("div",{className:"right"},n.createElement("div",{className:"nickname"},n.createElement("span",{id:"name"},e.nickname),n.createElement("span",{id:"gender"},"male"===e.gender&&n.createElement(u.Z,{theme:"outline",size:"14",fill:"#4a90e2"}),"female"===e.gender&&n.createElement(p.Z,{theme:"outline",size:"14",fill:"#bd10e0"}))),n.createElement("div",{className:"username"},n.createElement("span",{className:"icon"},n.createElement(h.Z,{theme:"outline",size:"14"})),n.createElement("span",null,e.username)),n.createElement("div",{className:"uid"},n.createElement("span",{className:"icon"},n.createElement(g.Z,{theme:"outline",size:"14"})),n.createElement("span",null,e.uid)),n.createElement("div",{className:"birthday"},n.createElement("span",{className:"icon"},n.createElement(E.Z,{theme:"outline",size:"14"})),n.createElement("span",null,e.birthday?c().unix(Number(String(e.birthday).slice(0,10))).format("YYYY-MM-DD"):"未知生日")),n.createElement("div",{className:"location"},n.createElement("span",{className:"icon"},n.createElement(f.Z,{theme:"outline",size:"14"})),n.createElement("span",null,a||e.location.slice(0,20)+"..."||0))))}function b(){return n.createElement(v,null,n.createElement("div",{className:"left"},n.createElement(r.O,{width:108,height:108})),n.createElement("div",{className:"right"},n.createElement(r.O,{width:170,height:12}),n.createElement(r.O,{width:40,height:12}),n.createElement(r.O,{width:60,height:12}),n.createElement(r.O,{width:80,height:12}),n.createElement(r.O,{width:100,height:12})))}var w=a(3255),y=a(9287),Z=a(4653),k=a(5511),N=a(3729),C=a(8432),P=a(5667),z=a.n(P);a(8765);const I=i.ZP.div`
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
`,$=(e,t)=>({...e,...t.payload});function j({user:e,onSuccess:t}){const[a,i]=n.useReducer($,e),r=e=>{const t=e.target.dataset.name,a=e.target.value;i({type:"",payload:{[t]:a}})};return n.createElement("div",{tabIndex:0},n.createElement(I,null,n.createElement("div",{className:"edit-form"},n.createElement("div",{className:"item"},n.createElement("label",null,"头像"),n.createElement("div",{className:"upload-avatar"},n.createElement("div",{style:{position:"relative"}},n.createElement("div",{style:{position:"absolute",zIndex:1}},a.avatar&&n.createElement("img",{src:a.avatar,alt:a.username})),n.createElement("div",{style:{position:"absolute",zIndex:2}},n.createElement(N.g,{url:C.IW,urlPrefix:C._n,onFinish:e=>i({type:"",payload:{avatar:e.url}}),allowExtensions:["jpg","png","jpeg","gif","webp"]}))))),n.createElement("div",{className:"item"},n.createElement("label",null,"用户编码"),n.createElement(y.I,{"data-name":"uid",value:a.uid,onChange:r,disabled:!0})),n.createElement("div",{className:"item"},n.createElement("label",null,"邀请码"),n.createElement(y.I,{"data-name":"invitation",value:a.invitation,onChange:r,disabled:Boolean(a.uid)})),n.createElement("div",{className:"item"},n.createElement("label",null,"用户名"),n.createElement(y.I,{"data-name":"username",value:a.username,onChange:r})),n.createElement("div",{className:"item"},n.createElement("label",null,"密码"),n.createElement(y.I,{"data-name":"password",value:a.password,onChange:r})),n.createElement("div",{className:"item"},n.createElement("label",null,"昵称"),n.createElement(y.I,{"data-name":"nickname",value:a.nickname,onChange:r})),n.createElement("div",{className:"item"},n.createElement("label",null,"性别"),n.createElement("div",{style:{width:188}},n.createElement(k.P,{defaultValue:e.gender,onChange:e=>i({type:"",payload:{gender:e}})},n.createElement(k.W,{value:"",name:"未知性别"}),n.createElement(k.W,{value:"male",name:"男性"}),n.createElement(k.W,{value:"female",name:"女性"})))),n.createElement("div",{className:"item"},n.createElement("label",null,"生日"),n.createElement(z(),{dateFormat:"yyyy/MM/dd",selected:c().unix(a.birthday).toDate(),onChange:e=>i({type:"",payload:{birthday:c()(e).unix()}})})),n.createElement("div",{className:"item"},n.createElement("label",null,"所在地"),n.createElement(y.I,{"data-name":"location",value:a.location,onChange:r})),n.createElement("div",{className:"item"},n.createElement("label",null,"用户描述"),n.createElement(y.I,{"data-name":"description",value:a.description,onChange:r})),n.createElement("div",{className:"item"},n.createElement("label",null,"格言"),n.createElement(y.I,{"data-name":"motto",value:a.motto,onChange:r})),n.createElement("div",{className:"item"},n.createElement("label",null,"角色"),n.createElement(y.I,{"data-name":"role",value:a.role,onChange:r})),n.createElement("div",{className:"item"},n.createElement("label",null,"用户组"),n.createElement(y.I,{"data-name":"group",value:a.group,onChange:r}))),n.createElement("div",{className:"submit"},n.createElement(Z.z,{type:"primary",style:{width:200,height:40},onClick:()=>{a.uid?(async()=>{"string"!=typeof await(0,l.Nq)(a.uid,a)?(window.alert("更新成功"),t&&t()):window.alert("添加失败")})():(async()=>{"string"!=typeof await(0,l.cn)(a)?(window.alert("添加成功"),t&&t()):window.alert("添加失败")})()}},a.uid?"更新":"注册"))))}var S=a(7532);const B=i.ZP.div``,W=i.ZP.div`
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
`,F={uid:"",avatar:"",invitation:"",username:"",nickname:"",password:"",gender:"",birthday:0,location:"",description:"",motto:"",role:"",group:""};function O(){const[e,t]=n.useState(),[a,i]=n.useState(null),r=()=>{(async()=>{const e=await(0,l.uh)();"string"!=typeof e?t(e.data.users):window.alert(e)})()};n.useEffect((()=>r()),[]);const o=e=>{i(null),setTimeout((()=>i(e)),100)};return n.createElement(B,null,n.createElement(w.h4,null,n.createElement(w.h4.Title,null,"用户管理"),n.createElement(w.h4.Add,null,n.createElement(Z.z,{onClick:()=>{i(null),setTimeout((()=>i(F)),100)}},"新增用户"))),n.createElement(W,null,n.createElement("div",{className:"preview"},e?e.map((e=>n.createElement("div",{key:e.uid,className:"item"},n.createElement(x,{user:e,onClick:o})))):n.createElement(n.Fragment,null,n.createElement("div",{className:"item"},n.createElement(b,null)),n.createElement("div",{className:"item"},n.createElement(b,null)),n.createElement("div",{className:"item"},n.createElement(b,null)),n.createElement("div",{className:"item"},n.createElement(b,null)))),n.createElement("div",{className:"edit-area"},n.createElement(S.V,{title:"编辑用户",visible:Boolean(a),onCancel:()=>i(null),animation:"slide-top-down",width:560,height:660,mask:!0},a&&n.createElement(j,{user:a,onSuccess:r,onBlur:()=>i(null)})))))}},6433:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(5326),l=a.n(n),i=a(8432);const r=l().create();r.defaults.baseURL=i._n,r.interceptors.request.use((e=>(e.data=JSON.stringify(e.data),e.headers={"content-type":"application/json",Authorization:`Bearer ${localStorage.getItem("token")}`},e)));const o=r}}]);