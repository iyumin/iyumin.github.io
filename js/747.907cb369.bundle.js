"use strict";(self.webpackChunkkevinjobs=self.webpackChunkkevinjobs||[]).push([[747],{4144:(e,t,n)=>{n.d(t,{CP:()=>m,DN:()=>s,SD:()=>f,T6:()=>o,Zt:()=>c,fR:()=>u,ms:()=>d,q2:()=>p,uh:()=>h,x4:()=>r});var a=n(8838),l=n(7573),i=function(e,t,n,a){return new(n||(n=Promise))((function(l,i){function r(e){try{c(a.next(e))}catch(e){i(e)}}function o(e){try{c(a.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?l(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(r,o)}c((a=a.apply(e,t||[])).next())}))};function r(e){return i(this,void 0,void 0,(function*(){const t=l._+"/token",n=yield a.Z.post(t,e);if(0===n.data.code)return n.data.data}))}function o(e,t,n=null){return i(this,void 0,void 0,(function*(){const i=l._+"/post/list";let r={offset:e,limit:t,status:"publish"};n&&(r=Object.assign(Object.assign({},r),n));const o=yield a.Z.get(i,{params:r});if(0===o.data.code)return o.data.data}))}function c(e,t){return i(this,void 0,void 0,(function*(){return yield o(e,t,{type:"article"})}))}function s(e=0,t=20){return i(this,void 0,void 0,(function*(){return yield o(e,t,{type:"cover",status:"all"})}))}function d(e,t){return i(this,void 0,void 0,(function*(){return yield o(e,t,{type:"photo"})}))}function u(e){return i(this,void 0,void 0,(function*(){const t=l._+"/p?uid="+e;return 0===(yield a.Z.delete(t)).data.code}))}function m(e,t){return i(this,void 0,void 0,(function*(){const n=l._+"/p?uid="+e,i=yield a.Z.put(n,t);if(0===i.data.code)return i.data.msg}))}function p(e){return i(this,void 0,void 0,(function*(){const t=l._+"/p",n=yield a.Z.post(t,e);if(0===n.data.code)return n.data.msg}))}function f(e){return i(this,void 0,void 0,(function*(){const t=l._+"/p?uid="+e,n=yield a.Z.get(t);if(0===n.data.code)return n.data.data.post}))}function h(e){return i(this,void 0,void 0,(function*(){const t=l._+"/user",n=yield a.Z.get(t,{params:e});if(0===n.data.code)return n.data.data}))}},6831:(e,t,n)=>{n.d(t,{P:()=>d,W:()=>u});var a=n(959),l=n(3103),i=n(4563),r=n(7188),o=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var l=0;for(a=Object.getOwnPropertySymbols(e);l<a.length;l++)t.indexOf(a[l])<0&&Object.prototype.propertyIsEnumerable.call(e,a[l])&&(n[a[l]]=e[a[l]])}return n};const c=l.ZP.div`
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
`,d=e=>{const{children:t,defaultValue:n,onChange:l}=e,i=o(e,["children","defaultValue","onChange"]),[s,d]=a.useState(null),[u,m]=a.useState(0),p=a.useRef(null);return a.useEffect((()=>{var e;if(n)d(n);else{const t=(null===(e=null==p?void 0:p.current)||void 0===e?void 0:e.children)[0];d(t.dataset.value)}}),[n]),a.createElement(c,Object.assign({},i,{onClick:e=>{var t;const n=e.target;if("default-option"===n.className){if(u>0)return void m(0);const e=null===(t=null==p?void 0:p.current)||void 0===t?void 0:t.children.length;return void m(24*e)}const a=n.dataset.value;d(a),m(0),l&&l(a)},onBlur:()=>m(0),tabIndex:0}),a.createElement("div",{className:"default-option"},(e=>{var t;const n=null===(t=null==p?void 0:p.current)||void 0===t?void 0:t.children;if(n)for(const t of n){const n=t;if(n.dataset.value===e)return n.dataset.name}})(s),a.createElement("span",{className:"arrow",onClick:e=>e.stopPropagation()},a.createElement(r.Z,{theme:"outline",size:"24",fill:"#333"}))),a.createElement("div",{className:"children-option",ref:p,style:{height:u}},t))},u=e=>{const{name:t,value:n}=e,l=o(e,["name","value"]);return a.createElement(s,Object.assign({},l,{"data-name":t,"data-value":n}),t)}},793:(e,t,n)=>{n.d(t,{Z:()=>h});var a=n(959),l=n(120),i=n.n(l),r=n(3103),o=n(2497),c=n(4563),s=n(7573),d=function(e,t,n,a){return new(n||(n=Promise))((function(l,i){function r(e){try{c(a.next(e))}catch(e){i(e)}}function o(e){try{c(a.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?l(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(r,o)}c((a=a.apply(e,t||[])).next())}))};const u=r.ZP.div`
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
`,f=r.ZP.div`
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
`;function h(e){const{url:t,onFinish:n,onFailed:l,allowExtensions:r}=e,[o,s]=a.useState(null),[p,f]=a.useState(0),[h,E]=a.useState(null),x=a.useRef(null),y=a.useRef(null),w="上传成功",b=null===o?c.Z.green:o===w?"transparent":c.Z.red,Z=null===o?c.Z.primary:o===w?c.Z.green:c.Z.red;return a.createElement(u,{className:"component-upload",ref:x,onClick:()=>{y.current&&(y.current.click(),f(0),s(null))},style:{borderColor:Z}},a.createElement("input",{type:"file",onChange:e=>{const a=e.target.files[0],o=null==a?void 0:a.name.split(".").pop();if(!(null==r?void 0:r.includes(o)))return f("100%"),void s("不支持的格式");const c=new FormData;c.append("file",a),(()=>{d(this,void 0,void 0,(function*(){const e={method:"post",data:c,url:t,headers:{"content-type":"multipart/form-data",Authorization:`Bearer ${localStorage.getItem("token")}`},onUploadProgress(e){const t=Number((e.loaded/e.total).toFixed(1));x.current&&f(x.current.offsetWidth*t)}},a=yield i()(e);0===a.data.code?(s(w),n&&(n(a.data.data),E(a.data.data))):(s("上传失败"),l&&l())}))})()},style:{width:1,height:1,position:"absolute"},ref:y}),o===w?a.createElement(v,{result:h}):a.createElement(a.Fragment,null,a.createElement(m,{style:{width:p,backgroundColor:b}}),a.createElement(g,{txt:o})))}const v=({result:e})=>a.createElement(p,null,a.createElement("img",{src:s._+(null==e?void 0:e.url),alt:null==e?void 0:e.filename})),g=({txt:e})=>a.createElement(f,null,e?a.createElement("span",{style:{color:c.Z.white2}},e):a.createElement(a.Fragment,null,a.createElement(o.Z,{theme:"outline",size:"24",fill:"#333"}),a.createElement("span",null,"点击上传")))},7573:(e,t,n)=>{n.d(t,{_:()=>a});const a="https://api.kevinjobs.com:5000"},6747:(e,t,n)=>{n.r(t),n.d(t,{default:()=>W});var a=n(959),l=n(3103),i=n(9019),r=n.n(i),o=n(8991),c=n.n(o),s=n(5726),d=n.n(s),u=n(8903),m=n(1340),p=n(274),f=n(793),h=n(4144),v=n(7573);const g=l.ZP.div`
  display: flex;
  align-items: center;
  margin: 8px 0;
  .edit-item-label {
    margin: 0 8px 0 0;
    min-width: 32px;
    width: 32px;
    text-align: right;
  }
  .edit-item-children {
    flex-grow: 1;
  }
`,E=e=>{const{name:t,label:n,children:l,style:i}=e;return a.createElement(g,{className:"edit-item","data-name":t,style:Object.assign({},i)},a.createElement("div",{className:"edit-item-label"},n),a.createElement("div",{className:"edit-item-children"},l))};var x=n(6831),y=n(5111);function w(e){const{state:t,setValue:n,setPostValue:l}=e;return a.createElement("div",{className:"more-info"},a.createElement(E,{name:"status",label:"状态"},a.createElement(x.P,{onChange:e=>l("status",e),defaultValue:null==t?void 0:t.status},a.createElement(x.W,{value:"publish",name:"已发表"}),a.createElement(x.W,{value:"draft",name:"草稿"}),a.createElement(x.W,{value:"private",name:"隐私"}))),a.createElement(E,{name:"category",label:"分类"},a.createElement(x.P,{onChange:e=>l("category",e),defaultValue:null==t?void 0:t.category},a.createElement(x.W,{value:"default",name:"默认分类"}),a.createElement(x.W,{value:"life",name:"生活"}),a.createElement(x.W,{value:"fiction",name:"科幻"}),a.createElement(x.W,{value:"dairy",name:"日志"}),a.createElement(x.W,{value:"travel",name:"旅行"}))),a.createElement(E,{name:"author",label:"作者"},a.createElement(p.II,{"data-name":"author",defaultValue:(null==t?void 0:t.author)||(0,y.getLocalStorage)().name,onChange:n})),a.createElement(E,{name:"createAt",label:"创建"},a.createElement(p.II,{"data-name":"createAt",defaultValue:null==t?void 0:t.createAt,onChange:n})),a.createElement(E,{name:"updateAt",label:"更新"},a.createElement(p.II,{"data-name":"updateAt",defaultValue:null==t?void 0:t.updateAt,onChange:n})),a.createElement(E,{name:"exceprt",label:"简介"},a.createElement(p.II,{"data-name":"excerpt",defaultValue:null==t?void 0:t.excerpt,onChange:n})),a.createElement(E,{name:"format",label:"格式"},a.createElement(x.P,{onChange:e=>l("format",e),defaultValue:null==t?void 0:t.format},a.createElement(x.W,{value:"default",name:"默认格式"}),a.createElement(x.W,{value:"html",name:"网页"}),a.createElement(x.W,{value:"markdown",name:"MD文档"}),a.createElement(x.W,{value:"txt",name:"文本"}),a.createElement(x.W,{value:"jpg",name:"图片(JPG)"}),a.createElement(x.W,{value:"png",name:"图片(PNG)"}),a.createElement(x.W,{value:"jpeg",name:"图片(JPEG)"}),a.createElement(x.W,{value:"gif",name:"图片(GIF)"}))),a.createElement(E,{label:"标签"},a.createElement(p.II,{"data-name":"tags",defaultValue:null==t?void 0:t.tags,onChange:n})),a.createElement(E,{label:"说明"},a.createElement(p.II,{"data-name":"description",defaultValue:null==t?void 0:t.description,onChange:n})),a.createElement(E,{label:"EXIF"},a.createElement(p.II,{"data-name":"exif",defaultValue:null==t?void 0:t.exif,onChange:n})),a.createElement(E,{name:"type",label:"类型"},a.createElement(x.P,{onChange:e=>l("type",e),defaultValue:null==t?void 0:t.type},a.createElement(x.W,{value:"article",name:"文章"}),a.createElement(x.W,{value:"photo",name:"照片"}),a.createElement(x.W,{value:"cover",name:"封面"}),a.createElement(x.W,{value:"avatar",name:"头像"}))))}var b=n(4563),Z=function(e,t,n,a){return new(n||(n=Promise))((function(l,i){function r(e){try{c(a.next(e))}catch(e){i(e)}}function o(e){try{c(a.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?l(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(r,o)}c((a=a.apply(e,t||[])).next())}))};const k={image:(e,t,n)=>`\n      <div style="display:flex;justify-content:center;flex-wrap:wrap;">\n        <img src="${e}" alt="${n||t}" style="width:80%;" />\n        <div style="width:100%;text-align:center;color:#777777;">${n}</div>\n      </div>\n    `},N=l.ZP.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  .inner {
    max-width: 1440px;
  }
`,P=l.ZP.div`
  width: 100%;
  height: 80px;
  display: flex;
  background-color: ${b.Z.white1};
  align-items: center;
  margin-bottom: 8px;
  .back-icon {
    margin-left: 24px;
  }
  .title {
    flex-grow: 1;
    text-align: center;
  }
`,C=l.ZP.div`
  width: 100%;
  display: flex;
  background-color: ${b.Z.white};
  .left {
    flex-grow: 1;
    margin: 8px 24px 0 16px;
    min-width: 800px;
    .content {
      display: flex;
      justify-content: center;
      margin-top: 8px;
      margin-bottom: 8px;
    }
  }
  .right {
    padding-right: 16px;
    label {
      width: 36px;
      text-align: right;
    }
    .submit-cancel {
      margin-top: 32px;
      display: flex;
      justify-content: center;
      button {
        width: 90%;
        height: 32px;
      }
    }
  }
`,I=l.ZP.div`
  padding: 0 0 8px 0;
  input {
    display: inline-block;
    width: 100%;
    margin: 0;
    height: 44px;
    font-weight: 600;
    font-size: 20px;
  }
`,j=l.ZP.div``,S=l.ZP.div`
  line-height: 1.5;
`;function W(){const e=(0,u.TH)(),t=(0,u.k6)(),n=e.pathname.split("/")[1],l=e.pathname.split("/")[2],i=e.pathname.split("/")[3],o={title:"",author:"",updateAt:d()().valueOf(),createAt:d()().valueOf(),content:"",uid:"",id:0,excerpt:"",tags:"",format:"default",status:"draft",type:l,category:"default"};r().use({renderer:k});const s=a.useRef(null),[f,v]=a.useReducer(((e,t)=>Object.assign(Object.assign({},e),t.payload)),o),g=(e,t)=>{v({type:"",payload:{[e]:t}})},E=e=>{const t=e.target.dataset.name,n=e.target.value;v({type:"",payload:{[t]:n}})};return a.useEffect((()=>{"update"===n&&(()=>{Z(this,void 0,void 0,(function*(){var e;const t=yield(0,h.SD)(i);t&&(v({type:"",payload:t}),null===(e=s.current)||void 0===e||e.txt.html(t.content))}))})()}),[]),a.useEffect((()=>(document.querySelector("#article-editor")&&(s.current=new(c())("#article-editor"),s.current.config.height=700,s.current.config.onchange=e=>g("content",e),s.current.create(),s.current.txt.html(f.content)),()=>{var e;return null===(e=s.current)||void 0===e?void 0:e.destroy()})),[]),a.createElement(N,{className:"edit-page"},a.createElement("div",{className:"inner"},a.createElement(P,{className:"header"},a.createElement("div",{className:"back-icon",onClick:()=>t.go(-1)},a.createElement(m.Z,{theme:"outline",size:"28",fill:"#333"})),a.createElement("div",{className:"title"},a.createElement("h1",{style:{color:b.Z.dark2}},"update"===n&&"上传","add"===n&&"新增","article"===l&&"文章","photo"===l&&"照片"))),a.createElement(C,{className:"main"},a.createElement(I,{className:"left"},a.createElement("div",{className:"post-title"},a.createElement(p.II,{"data-name":"title",placeholder:"请输入标题",defaultValue:null==f?void 0:f.title,onChange:E})),a.createElement("div",{className:"content"},"article"===l&&a.createElement(S,{id:"article-editor"}),"photo"===l&&a.createElement(V,{setPostValue:g}))),a.createElement(j,{className:"right"},"article"===l&&a.createElement(O,{onFinish:e=>{g("url",e.url)}}),a.createElement(w,{state:f,setValue:E,setPostValue:g}),a.createElement("div",{className:"submit-cancel"},a.createElement(p.zx,{onClick:()=>{(()=>{Z(this,void 0,void 0,(function*(){const e=f;if("update"===n){const t=yield(0,h.CP)(i,e);t?window.alert("更新成功"+t):window.alert("更新失败")}else if("add"===n){(yield(0,h.q2)(e))?window.alert("添加成功"):window.alert("新增失败")}}))})()},type:"primary"},"提交"),a.createElement(p.zx,{onClick:()=>{confirm("确定返回？")&&t.go(-1)},danger:!0},"取消"))))))}const V=({setPostValue:e})=>a.createElement("div",{style:{height:600,width:900}},a.createElement(f.Z,{allowExtensions:["jpg","jpeg"],url:v._+"/upload",onFinish:t=>{e("url",t.url);const n=t.width,a=t.height;e("exif",JSON.stringify({width:n,height:a})),e("format",t.ext)}})),O=({onFinish:e})=>a.createElement(E,{label:"封面",style:{width:230}},a.createElement(f.Z,{onFinish:e,url:v._+"/upload",allowExtensions:["jpg","png"]}))},5111:(e,t,n)=>{n.r(t),n.d(t,{default:()=>w,getLocalStorage:()=>y});var a=n(959),l=n(8903),i=n(3103),r=n(274),o=n(4144);const c=i.ZP.div`
  width: 100%;
  height: 60px;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 60px 0 0;
  .container {
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    .version {
      margin-right: 16px;
    }
    .user-status {
      .user {
        display: flex;
        align-items: center;
        .name {
          margin: 0 8px;
        }
      }
    }
  }
`,s=i.ZP.div`
  width: 100%;
  margin-top: 32px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  label {
    width: 50px;
    text-align: right;
  }
`;function d(e){const{isLogin:t,isLoginDialogVisible:n,onSubmit:l,onCancel:i,onLogin:o,onLogout:d}=e,[u,m]=a.useState(""),[p,f]=a.useState(""),[h,v]=a.useState(""),g=e=>{e.preventDefault(),window.confirm("确定要登出吗？")&&d(e)};return a.createElement(c,{className:"admin-navbar"},a.createElement("div",{className:"logo"},a.createElement("h2",null,"后台管理系统")),a.createElement("div",{className:"container"},a.createElement("div",{className:"version"},"v1.1.0"),a.createElement("div",{className:"search"},a.createElement(r.II,{value:u,onChange:e=>m(e.target.value)})),a.createElement("div",{className:"user-status"},t?a.createElement("div",{className:"user"},a.createElement("div",{className:"avatar"}),a.createElement("div",{className:"name"},y().name),a.createElement("div",{className:"level"}),a.createElement("div",{className:"logout"},a.createElement(r.zx,{onClick:g,type:"light"},"登出"))):a.createElement(r.zx,{className:"login",type:"primary",onClick:o},"登录"))),a.createElement(r.Vq,{title:"登录界面",visible:n,onCancel:i,animation:"slide-top-down",width:400,height:400},a.createElement(s,null,a.createElement("div",{style:{width:250}},a.createElement("form",null,a.createElement(r.II,{label:"账号",value:p,name:"username",onChange:e=>f(e.target.value)}),a.createElement(r.II,{type:"password",label:"密码",value:h,name:"password",onChange:e=>v(e.target.value),autoComplete:"on"}))),a.createElement("div",{style:{width:"100%",textAlign:"center",marginTop:24}},a.createElement(r.zx,{type:"primary",onClick:e=>((e,t)=>{e.preventDefault(),l(e,t)})(e,{username:p,password:h})},"登录"),a.createElement(r.zx,{onClick:i},"取消")))))}var u=n(4563),m=n(1908),p=n(7685),f=n(7247);const h=i.ZP.div`
  margin-top: 10px;
  height: calc(100vh - 70px);
  width: 250px;
  min-width: 250px;
  background-color: ${u.Z.white};
  a.active {
    color: ${u.Z.blue};
  }
`;function v(){const e=e=>a.createElement(r.v2.Item,{icon:e.icon,key:e.key},a.createElement(r.rU,{to:e.paths.join("/")},e.title));return a.createElement(h,{className:"admin-navigator"},a.createElement(r.v2,{mode:"inline"},a.createElement(r.v2.Item,{icon:f.Ge.icon},a.createElement(r.rU,{to:f.Ge.paths.join("/")},f.Ge.title)),a.createElement(r.v2.SubMenu,{title:"内容管理",isOpen:!0,icon:a.createElement(m.Z,{theme:"outline",size:"20",fill:"#333",strokeWidth:2})},f._J.map(e)),a.createElement(r.v2.SubMenu,{title:"系统管理",isOpen:!0,icon:a.createElement(p.Z,{theme:"outline",size:"20",fill:"#333",strokeWidth:2})},f.Ih.map(e))))}var g=function(e,t,n,a){return new(n||(n=Promise))((function(l,i){function r(e){try{c(a.next(e))}catch(e){i(e)}}function o(e){try{c(a.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?l(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(r,o)}c((a=a.apply(e,t||[])).next())}))};const E=f._J.concat(f.Ge).concat(f.Ih),x=i.ZP.div`
  height: 100vh;
  display: flex;
  flex-wrap: wrap;
  overflow: hidden;
  .main-container {
    width: 100vw;
    display: flex;
    .admin-content {
      background-color: #ffffff;
      margin: 10px 0 0 10px;
      padding: 16px 32px;
      height: calc(100vh - 70px);
      overflow-y: scroll;
      flex-grow: 1;
    }
  }
`,y=()=>({token:localStorage.getItem("token"),name:localStorage.getItem("name")});function w(){const[e,t]=a.useState(!1),[n,i]=a.useState(!1),c=(0,l.k6)(),s=(e,n)=>{(()=>{g(this,void 0,void 0,(function*(){const e=yield(0,o.x4)(n);var a,l;e?(a=e.token,l=n.username,localStorage.setItem("token",a),localStorage.setItem("name",l),i(!1),t(!0),c.go(0)):window.alert("登录失败")}))})()};return a.useEffect((()=>{const{token:e,name:n}=y();e&&n&&t(!0)}),[]),a.createElement(x,{className:"admin"},a.createElement(d,{isLogin:e,isLoginDialogVisible:n,onSubmit:(e,t)=>s(0,t),onLogin:e=>{e.preventDefault(),i(!0)},onLogout:e=>{e.preventDefault(),t(!1),localStorage.removeItem("token"),localStorage.removeItem("name"),c.go(0)},onCancel:e=>{e.preventDefault(),i(!1)}}),a.createElement("div",{className:"main-container"},a.createElement(v,null),a.createElement("div",{className:"admin-content"},a.createElement(a.Suspense,{fallback:a.createElement(r.gb,null)},a.createElement(l.rs,null,E.map((e=>a.createElement(l.AW,{exact:e.exact,path:e.paths.join("/"),component:e.component,key:e.key}))),a.createElement(l.l_,{from:"/admin",to:"/admin/home"}))))))}},8838:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(120),l=n.n(a),i=n(7573);const r=l().create();r.defaults.baseURL=i._,r.interceptors.request.use((e=>(e.data=JSON.stringify(e.data),e.headers={"content-type":"application/json",Authorization:`Bearer ${localStorage.getItem("token")}`},e)));const o=r}}]);