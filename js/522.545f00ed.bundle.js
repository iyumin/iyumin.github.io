"use strict";(self.webpackChunkkevinjobs=self.webpackChunkkevinjobs||[]).push([[522],{9522:(e,t,a)=>{a.r(t),a.d(t,{default:()=>W});var n=a(959),l=a(3103),i=a(7221),m=a(1104),c=a(6824),r=a(1614),s=a(1298),u=a(8519),d=a(5726),o=a.n(d),p=a(1275),E=a(6175),v=a(7521),g=a.n(v),h=(a(8149),a(9465)),f=function(e,t,a,n){return new(a||(a=Promise))((function(l,i){function m(e){try{r(n.next(e))}catch(e){i(e)}}function c(e){try{r(n.throw(e))}catch(e){i(e)}}function r(e){var t;e.done?l(e.value):(t=e.value,t instanceof a?t:new a((function(e){e(t)}))).then(m,c)}r((n=n.apply(e,t||[])).next())}))};const y=l.ZP.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`,N=l.ZP.div`
  width: 100%;
  height: 220px;
  .inner {
    background-color: ${c.Z.white5};
    width: 80%;
    height: 100%;
    margin: 0 auto;
  }
`,b=l.ZP.div`
  margin-top: 16px;
  width: 100%;
`,x=l.ZP.div`
  margin-top: 20px;
  button {
    width: 68px;
  }
`,w=l.ZP.div`
  width: 100%;
  margin: 8px 0;
  .item-inner {
    width: 80%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    .item-label {
      width: 68px;
      text-align: justify;
      text-align-last: justify;
      margin-right: 16px;
    }
    .item-input {
      width: 220px;
      input {
        width: 100%;
      }
      .react-datepicker-wrapper {
        width: 214px;
        margin: 4px 0;
        input {
          height: 20px;
          border: 1px solid ${c.Z.white5};
        }
      }
    }
  }
`,C=(e,t)=>Object.assign(Object.assign({},e),t.payload),P={title:"",author:(0,h.getLocalStorage)().name,updateAt:o()().unix(),createAt:o()().unix(),content:"",uid:"",id:0,excerpt:"",tags:"",format:"default",status:"draft",type:"photo",category:"default",exif:""};function W(){const[e,t]=n.useReducer(C,P),a=(0,s.UO)(),l=(0,s.s0)(),c=a.uid,d=e=>{const a=e.target.dataset.name,n=e.target.value;t({type:"",payload:{[a]:n}})},v=(e,a)=>{t({type:"",payload:{[e]:a}})};return n.useEffect((()=>{"0"!==c&&(()=>{f(this,void 0,void 0,(function*(){const e=yield(0,u.SD)(c);"string"!=typeof e?t({type:"",payload:e.data.post}):window.alert(e)}))})()}),[c]),n.createElement(y,null,n.createElement(N,null,n.createElement("div",{className:"inner"},n.createElement(i.g,{url:m._+"/upload",onFinish:e=>{v("format",e.ext),v("exif",JSON.stringify({width:e.width,height:e.height}))},allowExtensions:["jpg","jpeg","png","gif","webp"],defaultImage:e.url}))),n.createElement(b,null,n.createElement(w,null,n.createElement("div",{className:"item-inner"},n.createElement("label",{className:"item-label"},"标题"),n.createElement("span",{className:"item-input"},n.createElement(r.I,{"data-name":"title",value:e.title,onChange:d})))),n.createElement(w,null,n.createElement("div",{className:"item-inner"},n.createElement("label",{className:"item-label"},"作者"),n.createElement("span",{className:"item-input"},n.createElement(r.I,{"data-name":"author",value:e.author,onChange:d})))),n.createElement(w,null,n.createElement("div",{className:"item-inner"},n.createElement("label",{className:"item-label"},"发布状态"),n.createElement("span",{className:"item-input"},n.createElement(p.P,{onChange:e=>v("status",e),defaultValue:null==e?void 0:e.status},n.createElement(p.W,{value:"publish",name:"已发表"}),n.createElement(p.W,{value:"draft",name:"草稿"}),n.createElement(p.W,{value:"private",name:"隐私"}))))),n.createElement(w,null,n.createElement("div",{className:"item-inner"},n.createElement("label",{className:"item-label"},"图片格式"),n.createElement("span",{className:"item-input"},n.createElement(p.P,{onChange:e=>v("format",e),defaultValue:null==e?void 0:e.format},n.createElement(p.W,{value:"",name:"未知格式"}),n.createElement(p.W,{value:"jpg",name:"JPG"}),n.createElement(p.W,{value:"png",name:"PNG"}),n.createElement(p.W,{value:"jpeg",name:"JPEG"}),n.createElement(p.W,{value:"gif",name:"动图"}),n.createElement(p.W,{value:"webp",name:"WEBP"}))))),n.createElement(w,null,n.createElement("div",{className:"item-inner"},n.createElement("label",{className:"item-label"},"简介"),n.createElement("span",{className:"item-input"},n.createElement(r.I,{"data-name":"excerpt",value:e.excerpt,onChange:d})))),n.createElement(w,null,n.createElement("div",{className:"item-inner"},n.createElement("label",{className:"item-label"},"创建时间"),n.createElement("span",{className:"item-input"},n.createElement(g(),{selected:(null==e?void 0:e.createAt)&&o().unix(null==e?void 0:e.createAt).toDate(),onChange:e=>v("createAt",o()(e).unix()),dateFormat:"yyyy-MM-dd"})))),n.createElement(w,null,n.createElement("div",{className:"item-inner"},n.createElement("label",{className:"item-label"},"更新时间"),n.createElement("span",{className:"item-input"},n.createElement(g(),{selected:(null==e?void 0:e.updateAt)&&o().unix(null==e?void 0:e.updateAt).toDate(),onChange:e=>v("updateAt",o()(e).unix()),dateFormat:"yyyy-MM-dd"})))),n.createElement(w,null,n.createElement("div",{className:"item-inner"},n.createElement("label",{className:"item-label"},"分类"),n.createElement("span",{className:"item-input"},n.createElement(p.P,{onChange:e=>v("category",e),defaultValue:null==e?void 0:e.category},n.createElement(p.W,{value:"default",name:"默认"}),n.createElement(p.W,{value:"life",name:"生活"}),n.createElement(p.W,{value:"travel",name:"旅途"}),n.createElement(p.W,{value:"scenery",name:"风景"}))))),n.createElement(w,null,n.createElement("div",{className:"item-inner"},n.createElement("label",{className:"item-label"},"标签"),n.createElement("span",{className:"item-input"},n.createElement(r.I,{"data-name":"tags",value:e.tags,onChange:d})))),n.createElement(w,null,n.createElement("div",{className:"item-inner"},n.createElement("label",{className:"item-label"},"EXIF信息"),n.createElement("span",{className:"item-input"},n.createElement(r.I,{"data-name":"exif",value:e.exif,onChange:d})))),n.createElement(w,null,n.createElement("div",{className:"item-inner"},n.createElement("label",{className:"item-label"},"更多说明"),n.createElement("span",{className:"item-input"},n.createElement(r.I,{"data-name":"description",value:e.description,onChange:d}))))),n.createElement(x,null,n.createElement(E.z,{onClick:()=>{(()=>{f(this,void 0,void 0,(function*(){const t=yield(0,u.CP)(e.uid,e);"string"!=typeof t?window.alert("更新成功"):window.alert(t)}))})()},type:"primary"},"提交"),n.createElement(E.z,{danger:!0,onClick:()=>l(-1)},"取消")))}}}]);