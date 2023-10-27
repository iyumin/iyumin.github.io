"use strict";(self.webpackChunkkevinjobs=self.webpackChunkkevinjobs||[]).push([[754,350],{8519:(e,t,n)=>{n.d(t,{CP:()=>s,SD:()=>m,T6:()=>o,fR:()=>c,q2:()=>d});var a=n(891),l=n(7964),i=function(e,t,n,a){return new(n||(n=Promise))((function(l,i){function r(e){try{c(a.next(e))}catch(e){i(e)}}function o(e){try{c(a.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?l(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(r,o)}c((a=a.apply(e,t||[])).next())}))};const r=e=>Number(String(e).slice(0,10));function o(e,t,n){return i(this,void 0,void 0,(function*(){let i={offset:e,limit:t,status:"publish"};n&&(i=Object.assign(Object.assign({},i),n));const o=yield a.Z.get(l.fo,{params:i});if(0===o.data.code){const e=o.data,t=e.data.posts;return e.data.posts=t.map((e=>(e.createAt=r(e.createAt),e.updateAt=r(e.updateAt),e.publishAt=r(e.publishAt),e))),e}return o.data.msg}))}function c(e){return i(this,void 0,void 0,(function*(){const t=yield a.Z.delete(l.mS,{params:{uid:e}});return 0===t.data.code?t.data:t.data.msg}))}function s(e,t){return i(this,void 0,void 0,(function*(){const n=yield a.Z.put(l.mS,t,{params:{uid:e}});return 0===n.data.code?n.data:n.data.msg}))}function d(e){return i(this,void 0,void 0,(function*(){const t=yield a.Z.post(l.mS,e);return 0===t.data.code?t.data:t.data.msg}))}function m(e){return i(this,void 0,void 0,(function*(){const t=yield a.Z.get(l.mS,{params:{uid:e}});if(0===t.data.code){const e=t.data;return e.data.post.updateAt=r(e.data.post.updateAt),e.data.post.createAt=r(e.data.post.createAt),e.data.post.publishAt=r(e.data.post.publishAt),e}return t.data.msg}))}},8716:(e,t,n)=>{n.r(t),n.d(t,{default:()=>f});var a=n(959),l=n(3103),i=n(8914),r=n(7221),o=n(1104),c=n(8519),s=n(1754),d=n(291),m=function(e,t,n,a){return new(n||(n=Promise))((function(l,i){function r(e){try{c(a.next(e))}catch(e){i(e)}}function o(e){try{c(a.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?l(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(r,o)}c((a=a.apply(e,t||[])).next())}))};const u=l.ZP.div``,p=l.ZP.div`
  display: flex;
  .main {
    margin: 0 auto;
    
    .upload {
      width: 300px;
    }
    .uploaded {
      margin-top: 32px;
      width: 300px;
    }
  }
  .preview {
    margin-left: 32px;
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    flex-grow: 1;
    .preview-item {
      margin: 0 8px 16px 8px;
      height: 200px;
      width: 300px;
      position: relative;
      .del {
        position: absolute;
        right: -10px;
        top: -10px;
      }
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
`;function f(){const[e,t]=a.useState(null),[n,l]=a.useState(),d=()=>{(()=>{m(this,void 0,void 0,(function*(){const e=yield(0,c.T6)(0,100,{type:"cover"});"string"!=typeof e&&l(e.data.posts.map((e=>(e.url=e.url.replace("static/","static/thumb-"),e))))}))})()},f=()=>{d()};return a.useEffect((()=>{d()}),[]),a.createElement(u,null,a.createElement(i.h4,null,a.createElement(i.h4.Title,null,"画廊封面编辑")),a.createElement(p,null,a.createElement("div",{className:"main"},a.createElement("div",{className:"upload"},a.createElement(r.g,{url:o._+"/upload",onFinish:e=>{e&&(t(e.url),(()=>{m(this,void 0,void 0,(function*(){(yield(0,c.q2)({title:`gallery-cover-${(new Date).valueOf()}`,author:(0,s.getLocalStorage)().name,type:"cover",url:e.url,exif:JSON.stringify({width:e.width,height:e.height}),format:e.ext,category:"cover",excerpt:"用于首页封面",status:"publish"}))?(window.alert("添加封面成功"),d()):window.alert("添加失败")}))})())},allowExtensions:["jpg","jpeg","webp","png"]}))),a.createElement("div",{className:"preview"},n&&n.map((e=>h(e,f))))))}const h=(e,t)=>a.createElement("div",{className:"preview-item",key:e.uid},a.createElement("div",{className:"del",onClick:()=>{const n=e.uid;window.confirm("确定删除吗")&&m(void 0,void 0,void 0,(function*(){const e=yield(0,c.fR)(n);"string"!=typeof e?(window.alert("删除成功"),t&&t()):window.alert(e)}))}},a.createElement(d.Z,{theme:"outline",size:"24",fill:"#d0021b"})),a.createElement("img",{src:o._+e.url,alt:e.title}))},905:(e,t,n)=>{n.r(t),n.d(t,{default:()=>I});var a=n(959),l=n(3103),i=n(9019),r=n.n(i),o=n(8991),c=n.n(o),s=n(5726),d=n.n(s),m=n(1298),u=n(6175),p=n(1614),f=n(7221),h=n(8519),g=n(1104);const v=l.ZP.div`
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
`,E=e=>{const{name:t,label:n,children:l,style:i}=e;return a.createElement(v,{className:"edit-item","data-name":t,style:Object.assign({},i)},a.createElement("div",{className:"edit-item-label"},n),a.createElement("div",{className:"edit-item-children"},l))};var y=n(1275),x=n(1754),w=n(7521),b=n.n(w);n(8149);function k(e){const{state:t,setValue:n,setPostValue:l}=e;return a.createElement("div",{className:"more-info"},a.createElement(E,{name:"status",label:"状态"},a.createElement(y.P,{onChange:e=>l("status",e),defaultValue:null==t?void 0:t.status},a.createElement(y.W,{value:"publish",name:"已发表"}),a.createElement(y.W,{value:"draft",name:"草稿"}),a.createElement(y.W,{value:"private",name:"隐私"}))),a.createElement(E,{name:"type",label:"类型"},a.createElement(y.P,{onChange:e=>l("type",e),defaultValue:null==t?void 0:t.type},a.createElement(y.W,{value:"article",name:"文章"}),a.createElement(y.W,{value:"photo",name:"照片"}),a.createElement(y.W,{value:"cover",name:"封面"}),a.createElement(y.W,{value:"avatar",name:"头像"}))),a.createElement(E,{name:"author",label:"作者"},a.createElement(p.I,{"data-name":"author",defaultValue:(null==t?void 0:t.author)||(0,x.getLocalStorage)().name,onChange:n})),a.createElement(E,{name:"createAt",label:"创建"},a.createElement(b(),{selected:d().unix(null==t?void 0:t.createAt).toDate(),onChange:e=>l("createAt",d()(e).unix()),dateFormat:"yyyy-MM-dd"})),a.createElement(E,{name:"updateAt",label:"更新"},a.createElement(b(),{selected:(null==t?void 0:t.updateAt)&&d().unix(null==t?void 0:t.updateAt).toDate(),onChange:e=>l("updateAt",d()(e).unix()),dateFormat:"yyyy-MM-dd"})),a.createElement(E,{name:"exceprt",label:"简介"},a.createElement(p.I,{"data-name":"excerpt",defaultValue:null==t?void 0:t.excerpt,onChange:n})),a.createElement(E,{name:"format",label:"格式"},a.createElement(y.P,{onChange:e=>l("format",e),defaultValue:null==t?void 0:t.format},a.createElement(y.W,{value:"default",name:"默认格式"}),a.createElement(y.W,{value:"html",name:"网页"}),a.createElement(y.W,{value:"markdown",name:"MD文档"}),a.createElement(y.W,{value:"txt",name:"文本"}),a.createElement(y.W,{value:"jpg",name:"图片(JPG)"}),a.createElement(y.W,{value:"png",name:"图片(PNG)"}),a.createElement(y.W,{value:"jpeg",name:"图片(JPEG)"}),a.createElement(y.W,{value:"gif",name:"图片(GIF)"}))),a.createElement(E,{name:"category",label:"分类"},a.createElement(y.P,{onChange:e=>l("category",e),defaultValue:null==t?void 0:t.category},a.createElement(y.W,{value:"default",name:"默认分类"}),a.createElement(y.W,{value:"life",name:"生活"}),a.createElement(y.W,{value:"fiction",name:"科幻"}),a.createElement(y.W,{value:"dairy",name:"日志"}),a.createElement(y.W,{value:"travel",name:"旅行"}))),a.createElement(E,{label:"标签"},a.createElement(p.I,{"data-name":"tags",defaultValue:null==t?void 0:t.tags,onChange:n})),a.createElement(E,{label:"说明"},a.createElement(p.I,{"data-name":"description",defaultValue:null==t?void 0:t.description,onChange:n})),a.createElement(E,{label:"EXIF"},a.createElement(p.I,{"data-name":"exif",defaultValue:null==t?void 0:t.exif,onChange:n})))}var Z=n(6824),O=function(e,t,n,a){return new(n||(n=Promise))((function(l,i){function r(e){try{c(a.next(e))}catch(e){i(e)}}function o(e){try{c(a.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?l(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(r,o)}c((a=a.apply(e,t||[])).next())}))};const P={image:(e,t,n)=>`\n      <div style="display:flex;justify-content:center;flex-wrap:wrap;">\n        <img src="${e}" alt="${n||t}" style="width:80%;" />\n        <div style="width:100%;text-align:center;color:#777777;">${n}</div>\n      </div>\n    `},N=l.ZP.div`
  display: flex;
  height: 880px;
  justify-content: center;
  border: 1px solid ${Z.Z.white6};
  border-radius: 5px;
  .inner {
    max-width: 1440px;
  }
`,S=l.ZP.div`
  width: 100%;
  height: 40px;
  display: flex;
  background-color: ${Z.Z.white1};
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
  background-color: ${Z.Z.white};
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
`,j=l.ZP.div`
  padding: 0 0 8px 0;
  input {
    display: inline-block;
    width: 100%;
    margin: 0;
    height: 44px;
    font-weight: 600;
    font-size: 20px;
  }
`,A=l.ZP.div``,$=l.ZP.div`
  line-height: 1.5;
`;function I(){const e=(0,m.TH)(),t=(0,m.s0)(),n=e.pathname.split("/")[3],l=e.pathname.split("/")[4],i=e.pathname.split("/")[5],o={title:"",author:"",updateAt:d()().unix(),createAt:d()().unix(),content:"",uid:"",id:0,excerpt:"",tags:"",format:"default",status:"draft",type:l,category:"default"};r().use({renderer:P});const s=a.useRef(null),[f,g]=a.useReducer(((e,t)=>Object.assign(Object.assign({},e),t.payload)),o),v=(e,t)=>{g({type:"",payload:{[e]:t}})},E=e=>{const t=e.target.dataset.name,n=e.target.value;g({type:"",payload:{[t]:n}})};return a.useEffect((()=>{"update"===n&&(()=>{O(this,void 0,void 0,(function*(){var e;const t=yield(0,h.SD)(i);"string"!=typeof t&&(console.log(t),g({type:"",payload:t.data.post}),null===(e=s.current)||void 0===e||e.txt.html(t.data.post.content))}))})()}),[]),a.useEffect((()=>(document.querySelector("#article-editor")&&(s.current=new(c())("#article-editor"),s.current.config.height=660,s.current.config.onchange=e=>v("content",e),s.current.create(),s.current.txt.html(f.content)),()=>{var e;return null===(e=s.current)||void 0===e?void 0:e.destroy()})),[]),a.createElement(N,{className:"edit-page"},a.createElement("div",{className:"inner"},a.createElement(S,{className:"header"},a.createElement("div",{className:"title"},a.createElement("h2",{style:{color:Z.Z.dark2}},"update"===n&&"更新","add"===n&&"新增","article"===l&&"文章","photo"===l&&"照片","cover"===l&&"封面"))),a.createElement(C,{className:"main"},a.createElement(j,{className:"left"},a.createElement("div",{className:"post-title"},a.createElement(p.I,{"data-name":"title",placeholder:"请输入标题",defaultValue:null==f?void 0:f.title,onChange:E})),a.createElement("div",{className:"content"},"article"===l&&a.createElement($,{id:"article-editor"}),"photo"===l&&a.createElement(W,{setPostValue:v,defaultImage:null==f?void 0:f.url}),"cover"===l&&a.createElement(W,{setPostValue:v,defaultImage:null==f?void 0:f.url}))),a.createElement(A,{className:"right"},"article"===l&&a.createElement(z,{onFinish:e=>{v("url",e.url)},defaultImage:null==f?void 0:f.url}),a.createElement(k,{state:f,setValue:E,setPostValue:v}),a.createElement("div",{className:"submit-cancel"},a.createElement(u.z,{onClick:()=>{(()=>{O(this,void 0,void 0,(function*(){const e=f;if("update"===n){const t=yield(0,h.CP)(i,e);t?window.alert("更新成功"+t):window.alert("更新失败")}else if("add"===n){(yield(0,h.q2)(e))?window.alert("添加成功"):window.alert("新增失败")}}))})()},type:"primary"},"提交"),a.createElement(u.z,{onClick:()=>{confirm("确定返回？")&&t(-1)},danger:!0},"取消"))))))}const W=({setPostValue:e,defaultImage:t})=>a.createElement("div",{style:{height:600,width:900}},a.createElement(f.g,{allowExtensions:["jpg","jpeg"],url:g._+"/upload",onFinish:t=>{e("url",t.url);const n=t.width,a=t.height;e("exif",JSON.stringify({width:n,height:a})),e("format",t.ext)},defaultImage:t})),z=({onFinish:e,defaultImage:t})=>a.createElement(E,{label:"封面",style:{width:230}},a.createElement(f.g,{onFinish:e,url:g._+"/upload",allowExtensions:["jpg","png"],defaultImage:t}))},5350:(e,t,n)=>{n.r(t),n.d(t,{default:()=>i});var a=n(959);const l=n(3103).ZP.div``;function i(){return a.createElement(l,{className:"admin-home-container"},a.createElement("div",null,a.createElement("h1",null,"Welcome!")))}},1754:(e,t,n)=>{n.r(t),n.d(t,{default:()=>Q,getLocalStorage:()=>K});var a=n(959),l=n(1298),i=n(3103),r=n(891),o=n(7964),c=function(e,t,n,a){return new(n||(n=Promise))((function(l,i){function r(e){try{c(a.next(e))}catch(e){i(e)}}function o(e){try{c(a.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?l(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(r,o)}c((a=a.apply(e,t||[])).next())}))};var s=n(1614),d=n(6175),m=n(6824),u=n(5802),p=n(9251);const f=(0,i.ZP)(u.q.div)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
  background-color: ${m.Z.white};
  // min-width: 400px;
  min-height: 300px;
  max-height: 95vh;
  margin: 0 auto;
  border: 1px solid ${m.Z.white4};
  border-radius: 4px;
  overflow: hidden;
  box-shadow: 4px 4px 4px 4px rgba(0,0,0,0.1);
  z-index: 999;
`,h=i.ZP.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${m.Z.white4};
`,g=i.ZP.div`
  overflow-y: auto;
`;function v(e){const{title:t,visible:n,width:l,height:i,animation:r="zoom-in-out",onCancel:o,children:c}=e,s=(0,u.q_)({from:{top:"-50%"},to:{top:n?"50%":"-50%"}}),d={"zoom-in-out":(0,u.q_)({from:{transform:"translateY(-50%) translateX(-50%) scale3d(0, 0, 0)"},to:{transform:n?"translateY(-50%) translateX(-50%) scale3d(1, 1, 1)":"translateY(-50%) translateX(-50%) scale3d(0, 0, 0)"}}),"slide-top-down":s};return a.createElement(f,{style:d[r]},a.createElement(h,null,a.createElement("h3",{style:{textAlign:"center",flexGrow:1}},t),a.createElement(p.Z,{theme:"outline",size:"20",fill:"#333",strokeWidth:2,onClick:o,style:{display:"flex",alignItems:"center",cursor:"pointer",position:"absolute",right:8,top:8}})),a.createElement(g,{style:{width:l,height:i}},c))}var E=n(2349),y=n(1104),x=function(e,t,n,a){return new(n||(n=Promise))((function(l,i){function r(e){try{c(a.next(e))}catch(e){i(e)}}function o(e){try{c(a.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?l(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(r,o)}c((a=a.apply(e,t||[])).next())}))};const w=i.ZP.div`
  width: 100%;
  height: 60px;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 60px 0 0;
  .logo {
    padding-left: 48px;
    display: flex;
    align-items: center;
    .version {
      position: relative;
      top: 4px;
      margin-left: 16px;
      color: ${m.Z.white7};
    }
  }
  .container {
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    .user-status {
      .user {
        display: flex;
        align-items: center;
        margin-left: 32px;
        .name {
          margin: 0 8px;
        }
        .avatar {
          width: 44px;
          height: 44px;
          border-radius: 7px;
          img {
            width: 100%;
            height: 100%;
            border-radius: inherit;
          }
        }
      }
    }
  }
`,b=i.ZP.div`
  width: 100%;
  margin-top: 32px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  label {
    width: 50px;
    text-align: right;
  }
`;function k(e){const{isLogin:t,isLoginDialogVisible:n,onSubmit:l,onCancel:i,onLogin:r,onLogout:o}=e,[c,m]=a.useState(""),[u,p]=a.useState(""),[f,h]=a.useState(""),[g,k]=a.useState(),Z=e=>{e.preventDefault(),window.confirm("确定要登出吗？")&&o(e)};return a.useEffect((()=>{(()=>{x(this,void 0,void 0,(function*(){const e=yield(0,E.BT)(K().name);"string"!=typeof e&&k(e.data.users[0])}))})()}),[u]),a.createElement(w,{className:"admin-navbar"},a.createElement("div",{className:"logo"},a.createElement("span",null,a.createElement("h2",null,"后台管理系统")),a.createElement("span",{className:"version"},"v2.0.0-20231027")),a.createElement("div",{className:"container"},a.createElement("div",{className:"search"},a.createElement(s.I,{value:c,onChange:e=>m(e.target.value)})),a.createElement("div",{className:"user-status"},t?a.createElement("div",{className:"user"},a.createElement("div",{className:"avatar"},a.createElement("img",{src:y._+(null==g?void 0:g.avatar),alt:null==g?void 0:g.username})),a.createElement("div",{className:"name"},K().name),a.createElement("div",{className:"level"}),a.createElement("div",{className:"logout"},a.createElement(d.z,{onClick:Z,type:"light"},"登出"))):a.createElement(d.z,{className:"login",type:"primary",onClick:r},"登录"))),a.createElement(v,{title:"登录界面",visible:n,onCancel:i,animation:"slide-top-down",width:400,height:400},a.createElement(b,null,a.createElement("div",{style:{width:250}},a.createElement("form",null,a.createElement(s.I,{label:"账号",value:u,name:"username",onChange:e=>p(e.target.value)}),a.createElement(s.I,{type:"password",label:"密码",value:f,name:"password",onChange:e=>h(e.target.value),autoComplete:"on"}))),a.createElement("div",{style:{width:"100%",textAlign:"center",marginTop:24}},a.createElement(d.z,{type:"primary",onClick:e=>((e,t)=>{e.preventDefault(),l(e,t)})(e,{username:u,password:f})},"登录"),a.createElement(d.z,{onClick:i},"取消")))))}var Z=n(7863),O=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var l=0;for(a=Object.getOwnPropertySymbols(e);l<a.length;l++)t.indexOf(a[l])<0&&Object.prototype.propertyIsEnumerable.call(e,a[l])&&(n[a[l]]=e[a[l]])}return n};const P=i.ZP.div`
  cursor: pointer;
`;function N(e){const{children:t}=e,n=O(e,["children"]);return a.createElement(P,Object.assign({},n),t)}const S=i.ZP.div`
  padding: ${12}px 0px ${12}px ${48}px;;
  font-size: ${16};
  display: flex;
  align-items: center;
  &:hover {
    color: ${m.Z.blue}
  }
  &:nth-child(1) {
    padding-top: ${20}px;
  }
  &:last-child {
    padding-bottom: ${20}px;
  }
`;const C=function(e){const{children:t,icon:n}=e;return a.createElement(S,{className:"menu-item"},n,a.createElement("span",{style:{marginLeft:8}},t))};var j=n(2253),A=n(7188);const $=i.ZP.div`
  user-select: none;
  .title {
    padding: 16px ${48}px;
    display: flex;
    align-items: center;
  }
  .items {
    background-color: ${m.Z.white2};
  }
`,I=i.ZP.div`
  display: flex;
  align-items: center;
  height: ${40}px;
  padding: ${4}px 0;
  padding-left: ${52}px;
  &:hover {
    background-color: ${m.Z.white4};
  }
`;var W=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var l=0;for(a=Object.getOwnPropertySymbols(e);l<a.length;l++)t.indexOf(a[l])<0&&Object.prototype.propertyIsEnumerable.call(e,a[l])&&(n[a[l]]=e[a[l]])}return n};const z=i.ZP.div``;function D(e){const{mode:t}=e,n=W(e,["mode"]);return"inline"===t?a.createElement(N,Object.assign({},n)):a.createElement(z,null)}D.Item=C,D.SubMenu=function(e){const{children:t,title:n,icon:l,isOpen:i=!1}=e,[r,o]=a.useState(i),[c,s]=a.useState(0),d=a.useRef(),{x:m}=(0,u.q_)({from:{x:0,p:0},x:r?40*c+8*c:0});return a.useEffect((()=>{if(d.current){const e=d.current.querySelectorAll("#submenu-item");s(e.length)}}),[d.current]),a.createElement($,null,a.createElement("div",{className:"title",role:"button",onClick:()=>{o(!r)}},l,a.createElement("span",{style:{marginLeft:8}},n),r?a.createElement(j.Z,{theme:"outline",size:"16",fill:"#333",strokeWidth:2}):a.createElement(A.Z,{theme:"outline",size:"16",fill:"#333",strokeWidth:2})),a.createElement(u.q.div,{ref:d,className:"items",style:{height:m,overflow:"hidden"}},t))},D.SubMenuItem=({children:e})=>a.createElement(I,{id:"submenu-item"},e);var V=n(1908),L=n(5418),M=n(8124),Y=n(7685),q=n(9168);const F=i.ZP.div`
  margin-top: 10px;
  height: calc(100vh - 70px);
  width: 250px;
  min-width: 250px;
  background-color: ${m.Z.white};
  a.active {
    color: ${m.Z.blue};
  }
`,_=i.ZP.div`
  display: flex;
  align-items: center;
  position: relative;
  a {
    color: ${m.Z.dark};
    text-decoration: none;
  }
  .icon {
    margin-right: 8px;
    position: relative;
    top: 1px;
  }
`;function T(){return a.createElement(F,{className:"admin-navigator"},a.createElement(D,{mode:"inline"},a.createElement(D.Item,null,a.createElement(_,null,a.createElement("div",{className:"link"},a.createElement(Z.OL,{to:"/admin/home"},"后台首页")))),a.createElement(D.SubMenu,{title:"内容管理",isOpen:!0,icon:a.createElement(V.Z,{theme:"outline",size:"20",fill:"#333",strokeWidth:2})},a.createElement(D.SubMenuItem,null,a.createElement(_,null,a.createElement("div",{className:"icon"},a.createElement(L.Z,{theme:"outline",size:"16",fill:"#4a4a4a"})),a.createElement("div",{className:"link"},a.createElement(Z.OL,{to:"/admin/post"},"所有内容")))),a.createElement(D.SubMenuItem,null,a.createElement(_,null,a.createElement("div",{className:"icon"},a.createElement(M.Z,{theme:"outline",size:"16",fill:"#4a4a4a"})),a.createElement("div",{className:"link"},a.createElement(Z.OL,{to:"/admin/cover"},"画册封面"))))),a.createElement(D.SubMenu,{title:"系统管理",isOpen:!0,icon:a.createElement(Y.Z,{theme:"outline",size:"20",fill:"#333",strokeWidth:2})},a.createElement(D.SubMenuItem,null,a.createElement(_,null,a.createElement("div",{className:"icon"},a.createElement(q.Z,{theme:"outline",size:"16",fill:"#4a4a4a"})),a.createElement("div",{className:"link"},a.createElement(Z.OL,{to:"/admin/user"},"用户")))))))}var R=n(4026),G=n(8008),X=n(5350),J=n(8716),B=n(905),H=function(e,t,n,a){return new(n||(n=Promise))((function(l,i){function r(e){try{c(a.next(e))}catch(e){i(e)}}function o(e){try{c(a.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?l(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(r,o)}c((a=a.apply(e,t||[])).next())}))};const U=i.ZP.div`
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
`,K=()=>({token:localStorage.getItem("token"),name:localStorage.getItem("name")});function Q(){const[e,t]=a.useState(!1),[n,i]=a.useState(!1),s=(e,n)=>{(()=>{H(this,void 0,void 0,(function*(){const e=yield function(e){return c(this,void 0,void 0,(function*(){const t=yield r.Z.post(o.ZE,e);return 0===t.data.code?t.data:t.data.msg}))}(n);var a,l;"string"!=typeof e?(a=e.data.token,l=n.username,localStorage.setItem("token",a),localStorage.setItem("name",l),i(!1),t(!0),history.go(0)):window.alert("登录失败")}))})()};return a.useEffect((()=>{const{token:e,name:n}=K();e&&n&&t(!0)}),[]),a.createElement(U,{className:"admin"},a.createElement(k,{isLogin:e,isLoginDialogVisible:n,onSubmit:(e,t)=>s(0,t),onLogin:e=>{e.preventDefault(),i(!0)},onLogout:e=>{e.preventDefault(),t(!1),localStorage.removeItem("token"),localStorage.removeItem("name"),history.go(0)},onCancel:e=>{e.preventDefault(),i(!1)}}),a.createElement("div",{className:"main-container"},a.createElement("div",{className:"menu-content"},a.createElement(T,null)),a.createElement("div",{className:"admin-content"},a.createElement(l.Z5,null,a.createElement(l.AW,{path:"home",element:a.createElement(X.default,null)}),a.createElement(l.AW,{path:"post",element:a.createElement(R.default,null)}),a.createElement(l.AW,{path:"user",element:a.createElement(G.default,null)}),a.createElement(l.AW,{path:"cover",element:a.createElement(J.default,null)}),a.createElement(l.AW,{path:"edit/:mode/:typ/:uid",element:a.createElement(B.default,null)})))))}},4026:(e,t,n)=>{n.r(t),n.d(t,{default:()=>j});var a=n(959),l=n(3103),i=n(1298),r=n(6175),o=n(8519),c=n(8914),s=n(5726),d=n.n(s),m=n(1754),u=n(1104),p=n(6395),f=n(6824),h=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var l=0;for(a=Object.getOwnPropertySymbols(e);l<a.length;l++)t.indexOf(a[l])<0&&Object.prototype.propertyIsEnumerable.call(e,a[l])&&(n[a[l]]=e[a[l]])}return n};const g=l.ZP.span`
  display: inline-block;
  color: ${f.Z.white};
  padding: 2px 4px;
  margin: 4px 2px;
  font-size: 0.8rem;
  border-radius: 4px;
  display: flex;
  align-items: center;
  line-height: 0.8rem;
  cursor: default;
`;function v(e){const{children:t,color:n="blue"}=e,l=h(e,["children","color"]);return a.createElement(g,Object.assign({},l,{style:{backgroundColor:f.Z[n]}}),t)}const E=l.ZP.div`
  width: fit-content;
  background-color: #fff;
  border: 1px solid ${f.Z.white4};
  tbody,thead {
    td,th {
      padding: 8px;
      border-bottom: 1px solid ${f.Z.white4};
      overflow-x: hidden;
    }
  }
  thead {
    position: sticky;
    top: -16px;
    background-color: ${f.Z.white4};
    z-index: 2;
  }
  tbody {
    tr {
      td {
        text-align: center;
        span {
          overflow: hidden;
          display: inline-block;
          height: 100%;
          line-height: normal;
          text-overflow: ellipsis;
        }
      }
    }
    tr:hover {
      background-color: ${f.Z.white3};
    }
  }
`;function y(e){const{heads:t,data:n}=e,[l,i]=a.useState(),[r,o]=a.useState(),c=[],s=[];return a.useEffect((()=>{c.length===t.length&&(i(c),o(s))}),[c.length]),a.createElement(E,{className:"mint-table"},a.createElement("table",{cellSpacing:0,cellPadding:0},a.createElement("thead",null,a.createElement("tr",null,t.map((e=>{const t=e.width,n=e.height;return null!==t&&c.push(t),null!==n&&s.push(n),a.createElement("th",{key:e.field,style:{display:0!==t?"":"none"}},a.createElement("span",{style:{width:t}},e.name))})))),a.createElement("tbody",null,l&&n.map(((e,n)=>{const i=t.map((e=>e.field)),o=[];for(const t in e){const n=i.indexOf(t);-1!==n?o[n]=e[t]:o[0]="数据错误请仔细检查"}return a.createElement("tr",{key:n,"data-key":n},o.map(((e,t)=>a.createElement("td",{key:t,"data-key":t,style:{display:0!==l[t]?"":"none"}},a.createElement("span",{style:{width:l[t],height:r[t]}},e)))))})))))}const x=[{field:"id",name:"ID"},{field:"uid",name:"UID",width:60},{field:"createAt",name:"创建日期",width:100},{field:"updateAt",name:"更新日期",width:100},{field:"type",name:"类型"},{field:"title",name:"标题"},{field:"author",name:"作者"},{field:"sumary",name:"摘要",width:200},{field:"preview",name:"预览",width:100},{field:"status",name:"状态"},{field:"tags",name:"标签"},{field:"category",name:"分类"},{field:"format",name:"格式"},{field:"edit",name:"编辑",width:120}],w=e=>{const{posts:t,onEdit:n,onDel:l,onView:i}=e;return a.createElement("div",{className:"post-table"},a.createElement(y,{data:b(t,(e=>{n&&n(e)}),(e=>{l&&l(e)}),(e=>{i&&i(e)})),heads:x}))};function b(e,t,n,l){if(!e){const e={id:a.createElement(p.O,{width:20}),uid:a.createElement(p.O,null),createAt:a.createElement(p.O,null),updateAt:a.createElement(p.O,null),type:a.createElement(p.O,{width:40}),title:a.createElement(p.O,{width:140}),author:a.createElement(p.O,{width:60}),sumary:a.createElement(p.O,null),preview:a.createElement(p.O,{height:80}),status:a.createElement(p.O,{width:40}),tags:a.createElement(p.O,{width:40}),category:a.createElement(p.O,{width:40}),format:a.createElement(p.O,{width:40}),edit:a.createElement(p.O,null)},t=[];for(let n=0;n<6;n++)t.push(e);return t}return e.map((e=>({id:a.createElement("span",{style:{fontSize:14}},e.id),uid:a.createElement("span",{style:{fontSize:12}},e.uid.slice(0,10)+"..."),createAt:a.createElement("span",null,d().unix(Number(String(e.createAt).slice(0,10))).format("YYYY-MM-DD")),updateAt:a.createElement("span",null,d().unix(Number(String(e.updateAt).slice(0,10))).format("YYYY-MM-DD")),type:a.createElement("span",null,e.type),title:a.createElement("span",{onClick:()=>l(e),style:{cursor:"pointer",color:f.Z.primary}},e.title),author:a.createElement("span",null,e.author),sumary:a.createElement("span",null,e.excerpt||e.description),preview:Z(e.url.replace("static/","static/thumb-"),e.title),status:O(e.status),tags:k(e.tags),category:k(e.category),format:a.createElement("span",null,e.format),edit:P(e,t,n)})))}const k=e=>e?a.createElement("span",null,e.split("|").map(((e,t)=>a.createElement(v,{key:t},e)))):a.createElement("span",null),Z=(e,t)=>a.createElement("img",{src:u._+e,alt:t,style:{width:100,height:80,objectFit:"cover"}}),O=e=>{let t="";return"publish"===e?t="已发表":"draft"===e&&(t="草稿"),a.createElement("span",null,t)},P=(e,t,n)=>{const{token:l}=(0,m.getLocalStorage)(),i=null!==l;return a.createElement("span",null,a.createElement(r.z,{onClick:()=>t(e),disabled:!i},"编辑"),a.createElement(r.z,{onClick:()=>n(e),danger:!0,disabled:!i},"删除"))};var N=function(e,t,n,a){return new(n||(n=Promise))((function(l,i){function r(e){try{c(a.next(e))}catch(e){i(e)}}function o(e){try{c(a.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?l(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(r,o)}c((a=a.apply(e,t||[])).next())}))};const S=l.ZP.div`
  .options {
    display: flex;
    align-items: center;
  }
`,C=l.ZP.div`
  margin-top: 16px;
  width: 90%;
  .table {
    text-align: center;
  }
  .prev-next {
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 16px 0;
  }
`;function j(){const e=(0,i.s0)(),[t,n]=a.useState(null),[l,s]=a.useState(0),[d,m]=a.useState(!1),[u,p]=a.useState(!0),f=t=>{e(`/admin/edit/add/${t}/0`)},h=(e=0,t=6)=>N(this,void 0,void 0,(function*(){const a=yield(0,o.T6)(e,t,{status:"all"});"string"!=typeof a&&(m(!(e<=0)),a.data.amount<t?p(!1):p(!0),n(a.data.posts))}));return a.useEffect((()=>{h(l,6)}),[l]),a.createElement(S,null,a.createElement(c.h4,null,a.createElement(c.h4.Title,null,"文章管理"),a.createElement(c.h4.Add,null,a.createElement(r.z,{onClick:()=>f("article")},"新增文章"),a.createElement(r.z,{onClick:()=>f("photo")},"添加图片"))),a.createElement(C,null,a.createElement("div",{className:"table"},a.createElement(w,{posts:t,onEdit:t=>{e(`/admin/edit/update/${t.type}/${t.uid}`)},onDel:e=>{const t=e.uid;confirm("确定要删除？")&&(()=>{N(this,void 0,void 0,(function*(){const e=yield(0,o.fR)(t);"string"!=typeof e?(window.alert("删除成功"),h()):window.alert(e)}))})()},onView:t=>{e(`/${t.type}/${t.uid}`)}})),a.createElement("div",{className:"prev-next"},a.createElement(r.z,{onClick:()=>{n(null),s(l-6)},disabled:!d},"Prev"),a.createElement(r.z,{onClick:()=>{n(null),s(l+6)},disabled:!u},"Next"))))}}}]);