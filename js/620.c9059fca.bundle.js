"use strict";(self.webpackChunkkevinjobs=self.webpackChunkkevinjobs||[]).push([[620],{8385:(e,t,n)=>{n.d(t,{q2:()=>f,fR:()=>p,Zt:()=>s,ms:()=>m,SD:()=>v,T6:()=>u,x4:()=>d,CP:()=>h});var a=n(120),l=n.n(a),i=n(7573);const o=l().create();o.defaults.baseURL=i._,o.interceptors.request.use((e=>(e.data=JSON.stringify(e.data),e.headers={"content-type":"application/json",Authorization:`Bearer ${localStorage.getItem("token")}`},e)));const r=o;var c=function(e,t,n,a){return new(n||(n=Promise))((function(l,i){function o(e){try{c(a.next(e))}catch(e){i(e)}}function r(e){try{c(a.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?l(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,r)}c((a=a.apply(e,t||[])).next())}))};function d(e){return c(this,void 0,void 0,(function*(){const t=i._+"/token",n=yield r.post(t,e);if(0===n.data.code)return n.data.data}))}function u(e,t){return c(this,void 0,void 0,(function*(){const n=i._+"/post/list",a={offset:e,limit:t},l=yield r.get(n,{params:a});if(0===l.data.code)return l.data.data}))}function s(e,t){return c(this,void 0,void 0,(function*(){const n=i._+"/post/list",a={offset:e,limit:t,type:"article"},l=yield r.get(n,{params:a});if(0===l.data.code)return l.data.data}))}function m(e,t){return c(this,void 0,void 0,(function*(){const n=i._+"/post/list",a={offset:e,limit:t,type:"photo"},l=yield r.get(n,{params:a});if(0===l.data.code)return l.data.data}))}function p(e){return c(this,void 0,void 0,(function*(){const t=i._+"/p?uid="+e;return 0===(yield r.delete(t)).data.code}))}function h(e,t){return c(this,void 0,void 0,(function*(){const n=i._+"/p?uid="+e,a=yield r.put(n,t);if(0===a.data.code)return a.data.msg}))}function f(e){return c(this,void 0,void 0,(function*(){const t=i._+"/p",n=yield r.post(t,e);if(0===n.data.code)return n.data.msg}))}function v(e){return c(this,void 0,void 0,(function*(){const t=i._+"/p?uid="+e,n=yield r.get(t);if(0===n.data.code)return n.data.data.post}))}},7573:(e,t,n)=>{n.d(t,{_:()=>a});const a="https://api.kevinjobs.com:5000"},4620:(e,t,n)=>{n.r(t),n.d(t,{default:()=>U});var a=n(959),l=n(3103),i=n(9019),o=n.n(i),r=n(8991),c=n.n(r),d=n(5726),u=n.n(d),s=n(8903),m=n(1340),p=n(274),h=n(120),f=n.n(h),v=n(2497),g=n(4563),x=function(e,t,n,a){return new(n||(n=Promise))((function(l,i){function o(e){try{c(a.next(e))}catch(e){i(e)}}function r(e){try{c(a.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?l(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,r)}c((a=a.apply(e,t||[])).next())}))};const y=l.ZP.div`
  position: relative;
  width: 100%;
  border-radius: 4px;
  background-color: ${g.Z.white4};
  min-height: 80px;
  cursor: pointer;
  display: flex;
  justify-content: center;
`,E=l.ZP.div`
  position: absolute;
  top: 0;
  left: 0;
  background-color: ${g.Z.primary};
  height: 100%;
  border-radius: 8px;
  z-index: 1;
`;function b(e){const{url:t,onFinish:n,onFailed:l,allowExtensions:i}=e,[o,r]=a.useState(null),[c,d]=a.useState(0),[u,s]=a.useState(null),m=a.useRef(null),p=a.useRef(null),h="上传成功",b="失败";return a.createElement(y,{className:"component-upload",ref:m,onClick:()=>{p.current&&(p.current.click(),d(0),r(null),s(null))}},a.createElement(E,{style:{width:c,backgroundColor:o===b?g.Z.red:o===h?g.Z.green:g.Z.primary}}),a.createElement("input",{type:"file",onChange:e=>{const a=e.target.files[0],o=null==a?void 0:a.name.split(".").pop();if(!(null==i?void 0:i.includes(o)))return d("100%"),s("不被允许的格式"),void r(b);const c=new FormData;c.append("file",a),(()=>{x(this,void 0,void 0,(function*(){const e={method:"post",data:c,url:t,headers:{"content-type":"multipart/form-data",Authorization:`Bearer ${localStorage.getItem("token")}`},onUploadProgress(e){const t=Number((e.loaded/e.total).toFixed(1));m.current&&d(m.current.offsetWidth*t)}},a=yield f()(e);0===a.data.code?(r(h),n&&(n(a.data.data),s(a.data.data.origin))):(r(b),l&&l())}))})()},style:{width:1,height:1},ref:p}),a.createElement("div",{style:{zIndex:2,color:g.Z.white,top:16,position:"absolute"}},o||a.createElement(v.Z,{theme:"outline",size:"24",fill:"#333"})),a.createElement("span",{style:{position:"absolute",bottom:8,zIndex:2,color:g.Z.white}},u&&(null==u?void 0:u.slice(0,8))+"..."+(null==u?void 0:u.split(".").pop())))}var w=n(8385),Z=n(7573);const k=l.ZP.div`
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
`,P=e=>{const{name:t,label:n,children:l,style:i}=e;return a.createElement(k,{className:"edit-item","data-name":t,style:Object.assign({},i)},a.createElement("div",{className:"edit-item-label"},n),a.createElement("div",{className:"edit-item-children"},l))};var j=n(7188),C=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var l=0;for(a=Object.getOwnPropertySymbols(e);l<a.length;l++)t.indexOf(a[l])<0&&Object.prototype.propertyIsEnumerable.call(e,a[l])&&(n[a[l]]=e[a[l]])}return n};const N=l.ZP.div`
  height: 24px;
  border: 1px solid ${g.Z.white6};
  position: relative;
  background-color: ${g.Z.white};
  &:focus {
    border: 1px solid ${g.Z.blue};
    .children-option {
      border: 1px solid ${g.Z.blue};
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
`,I=l.ZP.div`
  height: 24px;
  width: 100%;
  user-select: none;
  display: flex;
  align-items: center;
  background-color: ${g.Z.white};
  padding: 0 4px;
  &:hover {
    background-color: ${g.Z.primary};
    color: ${g.Z.white}
  }
`,O=e=>{const{children:t,defaultValue:n,onChange:l}=e,i=C(e,["children","defaultValue","onChange"]),[o,r]=a.useState(null),[c,d]=a.useState(0),u=a.useRef(null);return a.useEffect((()=>{var e;if(n)r(n);else{const t=(null===(e=null==u?void 0:u.current)||void 0===e?void 0:e.children)[0];r(t.dataset.value)}}),[n]),a.createElement(N,Object.assign({},i,{onClick:e=>{var t;const n=e.target;if("default-option"===n.className){if(c>0)return void d(0);const e=null===(t=null==u?void 0:u.current)||void 0===t?void 0:t.children.length;return void d(24*e)}const a=n.dataset.value;r(a),d(0),l&&l(a)},onBlur:()=>d(0),tabIndex:0}),a.createElement("div",{className:"default-option"},(e=>{var t;const n=null===(t=null==u?void 0:u.current)||void 0===t?void 0:t.children;if(n)for(const t of n){const n=t;if(n.dataset.value===e)return n.dataset.name}})(o),a.createElement("span",{className:"arrow",onClick:e=>e.stopPropagation()},a.createElement(j.Z,{theme:"outline",size:"24",fill:"#333"}))),a.createElement("div",{className:"children-option",ref:u,style:{height:c}},t))},V=e=>{const{name:t,value:n}=e,l=C(e,["name","value"]);return a.createElement(I,Object.assign({},l,{"data-name":t,"data-value":n}),t)};function $(e){const{state:t,setValue:n,setPostValue:l}=e;return a.createElement("div",{className:"more-info"},a.createElement(P,{name:"status",label:"状态"},a.createElement(O,{onChange:e=>l("status",e),defaultValue:null==t?void 0:t.status},a.createElement(V,{value:"publish",name:"已发表"}),a.createElement(V,{value:"draft",name:"草稿"}),a.createElement(V,{value:"private",name:"隐私"}))),a.createElement(P,{name:"category",label:"分类"},a.createElement(O,{onChange:e=>l("category",e),defaultValue:null==t?void 0:t.category},a.createElement(V,{value:"life",name:"生活"}),a.createElement(V,{value:"fiction",name:"科幻"}),a.createElement(V,{value:"dairy",name:"日志"}),a.createElement(V,{value:"travel",name:"旅行"}))),a.createElement(P,{name:"author",label:"作者"},a.createElement(p.II,{"data-name":"author",defaultValue:null==t?void 0:t.author,onChange:n})),a.createElement(P,{name:"createAt",label:"创建"},a.createElement(p.II,{"data-name":"createAt",defaultValue:null==t?void 0:t.createAt,onChange:n})),a.createElement(P,{name:"updateAt",label:"更新"},a.createElement(p.II,{"data-name":"updateAt",defaultValue:null==t?void 0:t.updateAt,onChange:n})),a.createElement(P,{name:"exceprt",label:"简介"},a.createElement(p.II,{"data-name":"excerpt",defaultValue:null==t?void 0:t.excerpt,onChange:n})),a.createElement(P,{name:"format",label:"格式"},a.createElement(O,{onChange:e=>l("format",e),defaultValue:null==t?void 0:t.format},a.createElement(V,{value:"html",name:"网页"}),a.createElement(V,{value:"markdown",name:"MD文档"}),a.createElement(V,{value:"txt",name:"文本"}),a.createElement(V,{value:"jpg",name:"图片(JPG)"}),a.createElement(V,{value:"png",name:"图片(PNG)"}),a.createElement(V,{value:"jpeg",name:"图片(JPEG)"}),a.createElement(V,{value:"gif",name:"图片(GIF)"}))),a.createElement(P,{label:"标签"},a.createElement(p.II,{"data-name":"tags",defaultValue:null==t?void 0:t.tags,onChange:n})),a.createElement(P,{label:"说明"},a.createElement(p.II,{"data-name":"description",defaultValue:null==t?void 0:t.description,onChange:n})),a.createElement(P,{label:"EXIF"},a.createElement(p.II,{"data-name":"exif",defaultValue:null==t?void 0:t.exif,onChange:n})),a.createElement(P,{name:"type",label:"类型"},a.createElement(O,{onChange:e=>l("type",e),defaultValue:null==t?void 0:t.type},a.createElement(V,{value:"article",name:"文章"}),a.createElement(V,{value:"photo",name:"照片"}))))}const S=l.ZP.div`
  height: 150px;
  width: 100%;
  align-items: center;
  display: flex;
`;function _({state:e,onFinish:t}){const[n,l]=a.useState(!1);return a.createElement(P,{name:"preview",label:"上传图片"},a.createElement(S,{className:"preview-inner"},!n&&!(null==e?void 0:e.url)&&a.createElement(b,{url:Z._+"/upload",onFinish:e=>{e&&l(!0),t&&t(e)},allowExtensions:["jpg","png","gif","jpeg"]}),(null==e?void 0:e.url)&&a.createElement("img",{alt:null==e?void 0:e.title,src:Z._+e.url.replace("static/","static/thumb-"),style:{width:"100%",height:"100%",objectFit:"cover"}})))}var z=function(e,t,n,a){return new(n||(n=Promise))((function(l,i){function o(e){try{c(a.next(e))}catch(e){i(e)}}function r(e){try{c(a.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?l(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,r)}c((a=a.apply(e,t||[])).next())}))};const F={image:(e,t,n)=>`\n      <div style="display:flex;justify-content:center;flex-wrap:wrap;">\n        <img src="${e}" alt="${n||t}" style="width:80%;" />\n        <div style="width:100%;text-align:center;color:#777777;">${n}</div>\n      </div>\n    `},A=l.ZP.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  .inner {
    max-width: 1440px;
  }
`,R=l.ZP.div`
  width: 100%;
  height: 80px;
  display: flex;
  background-color: ${g.Z.white1};
  align-items: center;
  margin-bottom: 8px;
  .back-icon {
    margin-left: 24px;
  }
  .title {
    flex-grow: 1;
    text-align: center;
  }
`,q=l.ZP.div`
  width: 100%;
  display: flex;
  background-color: ${g.Z.white};
  .left {
    flex-grow: 1;
    margin: 8px 24px 0 16px;
    min-width: 800px;
    .content {
      display: flex;
      justify-content: center;
      height: 600px;
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
`,D=l.ZP.div`
  padding: 0 0 8px 0;
  input {
    display: inline-block;
    width: 100%;
    margin: 0;
    height: 44px;
    font-weight: 600;
    font-size: 20px;
  }
`,G=l.ZP.div``,J=l.ZP.div`
  line-height: 1.5;
`,B=l.ZP.div`
  width: 900px;
  min-height: 600px;
  display: flex;
  justify-content: center;
  img {
    object-fit: contain;
    max-width: 100%;
    max-height: 100%;
  }
`,T={title:"",author:"",updateAt:u()().valueOf(),createAt:u()().valueOf(),content:"",uid:"",id:0,excerpt:"",tags:"",format:"html",status:"draft"};function U(){o().use({renderer:F});const e=a.useRef(null),[t,n]=a.useReducer(((e,t)=>Object.assign(Object.assign({},e),t.payload)),T),l=(e,t)=>{n({type:"",payload:{[e]:t}})},i=e=>{const t=e.target.dataset.name,a=e.target.value;n({type:"",payload:{[t]:a}})},r=(0,s.TH)(),d=(0,s.k6)(),u=r.pathname.split("/")[1],h=r.pathname.split("/")[2],f=r.pathname.split("/")[3];return a.useEffect((()=>{"update"===u&&(()=>{z(this,void 0,void 0,(function*(){var t;const a=yield(0,w.SD)(f);a&&(n({type:"",payload:a}),null===(t=e.current)||void 0===t||t.txt.html(a.content))}))})()}),[]),a.useEffect((()=>(document.querySelector("#article-editor")&&(e.current=new(c())("#article-editor"),e.current.config.height=500,e.current.config.onchange=e=>l("content",e),e.current.create(),e.current.txt.html(t.content)),()=>{var t;return null===(t=e.current)||void 0===t?void 0:t.destroy()})),[]),a.createElement(A,{className:"edit-page"},a.createElement("div",{className:"inner"},a.createElement(R,{className:"header"},a.createElement("div",{className:"back-icon",onClick:()=>d.go(-1)},a.createElement(m.Z,{theme:"outline",size:"28",fill:"#333"})),a.createElement("div",{className:"title"},a.createElement("h1",{style:{color:g.Z.dark2}},"编辑页面"))),a.createElement(q,{className:"main"},a.createElement(D,{className:"left"},a.createElement("div",{className:"post-title"},a.createElement(p.II,{"data-name":"title",placeholder:"请输入标题",defaultValue:null==t?void 0:t.title,onChange:i})),a.createElement("div",{className:"content"},"article"===h&&a.createElement(J,{id:"article-editor"}),"photo"===h&&(null==t?void 0:t.url)&&a.createElement(B,null,a.createElement("img",{src:Z._+(null==t?void 0:t.url),alt:null==t?void 0:t.title})),"photo"===h&&!(null==t?void 0:t.url)&&a.createElement("div",{style:{height:120,width:200}},a.createElement(b,{allowExtensions:["jpg","jpeg"],url:Z._+"/upload",onFinish:e=>{l("url",e.url);const t=e.width,n=e.height;l("exif",JSON.stringify({width:t,height:n})),l("format",e.ext)}})))),a.createElement(G,{className:"right"},"article"===h&&a.createElement(_,{onFinish:e=>{l("url",e.url)},state:t}),a.createElement($,{state:t,setValue:i,setPostValue:l}),a.createElement("div",{className:"submit-cancel"},a.createElement(p.zx,{onClick:()=>{(()=>{z(this,void 0,void 0,(function*(){const e=t;if("update"===u){const t=yield(0,w.CP)(f,e);t?window.alert("更新成功"+t):window.alert("更新失败")}else"add"===u&&((yield(0,w.q2)(e))?window.alert("添加成功"):window.alert("新增失败"))}))})()},type:"primary"},"提交"),a.createElement(p.zx,{onClick:()=>{confirm("确定返回？")&&d.go(-1)},danger:!0},"取消"))))))}}}]);