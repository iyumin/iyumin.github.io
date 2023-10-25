"use strict";(self.webpackChunkkevinjobs=self.webpackChunkkevinjobs||[]).push([[620],{1918:(e,t,n)=>{n.d(t,{q2:()=>g,fR:()=>h,Zt:()=>p,ms:()=>f,SD:()=>y,T6:()=>m,x4:()=>s,CP:()=>v});var a=n(1240),l=n(120),i=n.n(l),o=n(8586);const r=i().create();let c;c=a.V.production.api.baseUrl,r.defaults.baseURL=c,r.interceptors.request.use((e=>(e.data=JSON.stringify(e.data),e.headers={"content-type":"application/json",Authorization:`Bearer ${localStorage.getItem("token")}`},e))),(0,o.ZP)(r,{retries:3});const d=r;var u=function(e,t,n,a){return new(n||(n=Promise))((function(l,i){function o(e){try{c(a.next(e))}catch(e){i(e)}}function r(e){try{c(a.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?l(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,r)}c((a=a.apply(e,t||[])).next())}))};function s(e){return u(this,void 0,void 0,(function*(){const t=a._+"/token",n=yield d.post(t,e);if(0===n.data.code)return n.data.data}))}function m(e,t){return u(this,void 0,void 0,(function*(){const n=a._+"/post/list",l={offset:e,limit:t},i=yield d.get(n,{params:l});if(0===i.data.code)return i.data.data}))}function p(e,t){return u(this,void 0,void 0,(function*(){const n=a._+"/post/list",l={offset:e,limit:t,type:"article"},i=yield d.get(n,{params:l});if(0===i.data.code)return i.data.data}))}function f(e,t){return u(this,void 0,void 0,(function*(){const n=a._+"/post/list",l={offset:e,limit:t,type:"photo"},i=yield d.get(n,{params:l});if(0===i.data.code)return i.data.data}))}function h(e){return u(this,void 0,void 0,(function*(){const t=a._+"/p?uid="+e;return 0===(yield d.delete(t)).data.code}))}function v(e,t){return u(this,void 0,void 0,(function*(){const n=a._+"/p?uid="+e,l=yield d.put(n,t);if(0===l.data.code)return l.data.msg}))}function g(e){return u(this,void 0,void 0,(function*(){const t=a._+"/p",n=yield d.post(t,e);if(0===n.data.code)return n.data.msg}))}function y(e){return u(this,void 0,void 0,(function*(){const t=a._+"/p?uid="+e,n=yield d.get(t);if(0===n.data.code)return n.data.data.post}))}},1240:(e,t,n)=>{n.d(t,{V:()=>a,_:()=>l});const a={develop:{api:{baseUrl:"http://localhost:5000"}},production:{api:{baseUrl:"https://api.kevinjobs.com:5000"}}},l="https://api.kevinjobs.com:5000"},4620:(e,t,n)=>{n.r(t),n.d(t,{default:()=>q});var a=n(959),l=n(3103),i=n(9019),o=n.n(i),r=n(8991),c=n.n(r),d=n(5726),u=n.n(d),s=n(8903),m=n(274),p=n(1918),f=n(1240);const h=l.ZP.div`
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
`,v=e=>{const{name:t,label:n,children:l,style:i}=e;return a.createElement(h,{className:"edit-item","data-name":t,style:Object.assign({},i)},a.createElement("div",{className:"edit-item-label"},n),a.createElement("div",{className:"edit-item-children"},l))};var g=n(4563),y=n(7188),E=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var l=0;for(a=Object.getOwnPropertySymbols(e);l<a.length;l++)t.indexOf(a[l])<0&&Object.prototype.propertyIsEnumerable.call(e,a[l])&&(n[a[l]]=e[a[l]])}return n};const x=l.ZP.div`
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
`,b=l.ZP.div`
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
`,w=e=>{const{children:t,defaultValue:n,onChange:l}=e,i=E(e,["children","defaultValue","onChange"]),[o,r]=a.useState(null),[c,d]=a.useState(0),u=a.useRef(null);return a.useEffect((()=>{var e;if(n)r(n);else{const t=(null===(e=null==u?void 0:u.current)||void 0===e?void 0:e.children)[0];r(t.dataset.value)}}),[n]),a.createElement(x,Object.assign({},i,{onClick:e=>{var t;const n=e.target;if("default-option"===n.className){if(c>0)return void d(0);const e=null===(t=null==u?void 0:u.current)||void 0===t?void 0:t.children.length;return void d(24*e)}const a=n.dataset.value;r(a),d(0),l&&l(a)},onBlur:()=>d(0),tabIndex:0}),a.createElement("div",{className:"default-option"},(e=>{var t;const n=null===(t=null==u?void 0:u.current)||void 0===t?void 0:t.children;if(n)for(const t of n){const n=t;if(n.dataset.value===e)return n.dataset.name}})(o),a.createElement("span",{className:"arrow",onClick:e=>e.stopPropagation()},a.createElement(y.Z,{theme:"outline",size:"24",fill:"#333"}))),a.createElement("div",{className:"children-option",ref:u,style:{height:c}},t))},Z=e=>{const{name:t,value:n}=e,l=E(e,["name","value"]);return a.createElement(b,Object.assign({},l,{"data-name":t,"data-value":n}),t)};function k(e){const{state:t,setValue:n,setPostValue:l}=e;return a.createElement("div",{className:"more-info"},a.createElement(v,{name:"status",label:"状态"},a.createElement(w,{onChange:e=>l("status",e),defaultValue:null==t?void 0:t.status},a.createElement(Z,{value:"publish",name:"已发表"}),a.createElement(Z,{value:"draft",name:"草稿"}),a.createElement(Z,{value:"private",name:"隐私"}))),a.createElement(v,{name:"category",label:"分类"},a.createElement(w,{onChange:e=>l("category",e),defaultValue:null==t?void 0:t.category},a.createElement(Z,{value:"fiction",name:"科幻"}),a.createElement(Z,{value:"dairy",name:"日志"}),a.createElement(Z,{value:"life",name:"生活"}),a.createElement(Z,{value:"travel",name:"旅行"}))),a.createElement(v,{name:"author",label:"作者"},a.createElement(m.II,{"data-name":"author",defaultValue:null==t?void 0:t.author,onChange:n})),a.createElement(v,{name:"createAt",label:"创建"},a.createElement(m.II,{"data-name":"createAt",defaultValue:null==t?void 0:t.createAt,onChange:n})),a.createElement(v,{name:"updateAt",label:"更新"},a.createElement(m.II,{"data-name":"updateAt",defaultValue:null==t?void 0:t.updateAt,onChange:n})),a.createElement(v,{name:"exceprt",label:"简介"},a.createElement(m.II,{"data-name":"excerpt",defaultValue:null==t?void 0:t.excerpt,onChange:n})),a.createElement(v,{name:"format",label:"格式"},a.createElement(w,{onChange:e=>l("format",e),defaultValue:null==t?void 0:t.format},a.createElement(Z,{value:"html",name:"网页"}),a.createElement(Z,{value:"markdown",name:"MD文档"}),a.createElement(Z,{value:"txt",name:"文本"}),a.createElement(Z,{value:"jpg",name:"图片(JPG)"}),a.createElement(Z,{value:"png",name:"图片(PNG)"}),a.createElement(Z,{value:"jpeg",name:"图片(JPEG)"}),a.createElement(Z,{value:"gif",name:"图片(GIF)"}))),a.createElement(v,{label:"标签"},a.createElement(m.II,{"data-name":"tags",defaultValue:null==t?void 0:t.tags,onChange:n})),a.createElement(v,{label:"说明"},a.createElement(m.II,{"data-name":"description",defaultValue:null==t?void 0:t.description,onChange:n})),a.createElement(v,{label:"EXIF"},a.createElement(m.II,{"data-name":"exif",defaultValue:null==t?void 0:t.exif,onChange:n})),a.createElement(v,{name:"type",label:"类型"},a.createElement(w,{onChange:e=>l("type",e),defaultValue:null==t?void 0:t.type},a.createElement(Z,{value:"article",name:"文章"}),a.createElement(Z,{value:"photo",name:"照片"}))))}var C=n(120),P=n.n(C),j=n(2497),I=function(e,t,n,a){return new(n||(n=Promise))((function(l,i){function o(e){try{c(a.next(e))}catch(e){i(e)}}function r(e){try{c(a.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?l(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,r)}c((a=a.apply(e,t||[])).next())}))};const V=l.ZP.div`
  position: relative;
  border-radius: 4px;
  background-color: ${g.Z.white4};
  min-height: 80px;
  cursor: pointer;
  display: flex;
  justify-content: center;
`,O=l.ZP.div`
  position: absolute;
  top: 0;
  left: 0;
  background-color: ${g.Z.primary};
  height: 100%;
  border-radius: 8px;
  z-index: 1;
`;function N(e){const{url:t,onFinish:n,onFailed:l,allowExtensions:i}=e,[o,r]=a.useState(null),[c,d]=a.useState(0),[u,s]=a.useState(null),m=a.useRef(null),p=a.useRef(null),f="上传成功",h="失败";return a.createElement(V,{className:"component-upload",ref:m,onClick:()=>{p.current&&(p.current.click(),d(0),r(null),s(null))}},a.createElement(O,{style:{width:c,backgroundColor:o===h?g.Z.red:o===f?g.Z.green:g.Z.primary}}),a.createElement("input",{type:"file",onChange:e=>{const a=e.target.files[0],o=null==a?void 0:a.name.split(".").pop();if(!(null==i?void 0:i.includes(o)))return d("100%"),s("不被允许的格式"),void r(h);const c=new FormData;c.append("file",a),(()=>{I(this,void 0,void 0,(function*(){const e={method:"post",data:c,url:t,headers:{"content-type":"multipart/form-data",Authorization:`Bearer ${localStorage.getItem("token")}`},onUploadProgress(e){const t=Number((e.loaded/e.total).toFixed(1));m.current&&d(m.current.offsetWidth*t)}},a=yield P()(e);0===a.data.code?(r(f),n&&(n(a.data.data),s(a.data.data.origin))):(r(h),l&&l())}))})()},style:{width:1,height:1},ref:p}),a.createElement("div",{style:{zIndex:2,color:g.Z.white,top:16,position:"absolute"}},o||a.createElement(j.Z,{theme:"outline",size:"24",fill:"#333"})),a.createElement("span",{style:{position:"absolute",bottom:8,zIndex:2,color:g.Z.white}},u&&(null==u?void 0:u.slice(0,8))+"..."+(null==u?void 0:u.split(".").pop())))}function $({state:e,onFinish:t}){return a.createElement(a.Fragment,null,a.createElement(v,{name:"preview",label:"上传图片"},a.createElement(N,{url:f._+"/upload",onFinish:t,allowExtensions:["jpg","png","gif","jpeg"]})),a.createElement(v,{name:"preview",label:"预览",style:{height:200,width:300,overflow:"hidden"}},(null==e?void 0:e.url)&&a.createElement("img",{alt:null==e?void 0:e.title,src:f._+e.url.replace("static/","static/thumb-"),style:{width:"100%",height:"100%",objectFit:"cover"}})))}var S=function(e,t,n,a){return new(n||(n=Promise))((function(l,i){function o(e){try{c(a.next(e))}catch(e){i(e)}}function r(e){try{c(a.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?l(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,r)}c((a=a.apply(e,t||[])).next())}))};const _={image:(e,t,n)=>`\n      <div style="display:flex;justify-content:center;flex-wrap:wrap;">\n        <img src="${e}" alt="${n||t}" style="width:80%;" />\n        <div style="width:100%;text-align:center;color:#777777;">${n}</div>\n      </div>\n    `},z=l.ZP.div`
  display: flex;
  padding: 16px 0 0 0;
  .left {
    padding: 0 32px;
  }
  .right {
    padding: 0 32px 0 0;
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
`,F=l.ZP.div`
  padding: 0 0 8px 0;
  input {
    display: inline-block;
    width: 100%;
    margin: 0;
    height: 44px;
    font-weight: 600;
    font-size: 20px;
  }
`,A=l.ZP.div`
  line-height: 1.5;
`,R=l.ZP.div`
  width: 900px;
  height: 800px;
  display: flex;
  justify-content: center;
  img {
    object-fit: contain;
    max-width: 100%;
    max-height: 100%;
  }
`,U={title:"",author:"",updateAt:u()().valueOf(),createAt:u()().valueOf(),content:"",uid:"",id:0,excerpt:"",tags:"",format:"html",status:"draft"};function q(){o().use({renderer:_});const e=a.useRef(null),[t,n]=a.useReducer(((e,t)=>Object.assign(Object.assign({},e),t.payload)),U),l=(e,t)=>{n({type:"",payload:{[e]:t}})},i=e=>{const t=e.target.dataset.name,a=e.target.value;n({type:"",payload:{[t]:a}})},r=(0,s.TH)(),d=(0,s.k6)(),u=r.pathname.split("/")[1],h=r.pathname.split("/")[2],v=r.pathname.split("/")[3];return a.useEffect((()=>{"update"===u&&(()=>{S(this,void 0,void 0,(function*(){var t;const a=yield(0,p.SD)(v);a&&(n({type:"",payload:a}),null===(t=e.current)||void 0===t||t.txt.html(a.content))}))})()}),[]),a.useEffect((()=>(document.querySelector("#article-editor")&&(e.current=new(c())("#article-editor"),e.current.config.height=500,e.current.config.onchange=e=>l("content",e),e.current.create(),e.current.txt.html(t.content)),()=>{var t;return null===(t=e.current)||void 0===t?void 0:t.destroy()})),[]),a.createElement(z,null,a.createElement("div",{className:"left"},a.createElement(F,null,a.createElement(m.II,{"data-name":"title",placeholder:"请输入标题",defaultValue:null==t?void 0:t.title,onChange:i})),"article"===h&&a.createElement(A,{id:"article-editor"}),"photo"===h&&a.createElement(R,null,a.createElement("img",{src:f._+(null==t?void 0:t.url),alt:null==t?void 0:t.title}))),a.createElement("div",{className:"right",style:{width:300}},a.createElement($,{onFinish:e=>{l("url",e.url)},state:t}),a.createElement(k,{state:t,setValue:i,setPostValue:l}),a.createElement("div",{className:"submit-cancel"},a.createElement(m.zx,{onClick:()=>{(()=>{S(this,void 0,void 0,(function*(){const e=t;if("update"===u){const t=yield(0,p.CP)(v,e);t?window.alert("更新成功"+t):window.alert("更新失败")}else"add"===u&&((yield(0,p.q2)(e))?window.alert("添加成功"):window.alert("新增失败"))}))})()},type:"primary"},"提交"),a.createElement(m.zx,{onClick:()=>{confirm("确定返回？")&&d.go(-1)},danger:!0},"取消"))))}}}]);