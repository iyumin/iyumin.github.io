"use strict";(self.webpackChunklumie=self.webpackChunklumie||[]).push([[972,208],{6196:(e,t,a)=>{a.r(t),a.d(t,{default:()=>P});var l=a(2983),n=a(9606),m=a(3729),i=a(8432),r=a(7952),c=a(9287),s=a(3891),u=a(5577),p=a(7860),d=a.n(p),E=a(5511),o=a(4653),g=a(5667),v=a.n(g),h=(a(8765),a(6742)),f=a(9647);const N=n.ZP.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`,y=n.ZP.div`
  width: 100%;
  height: 220px;
  .inner {
    background-color: ${r.Z.white5};
    width: 80%;
    height: 100%;
    margin: 0 auto;
  }
`,w=n.ZP.div`
  margin-top: 16px;
  width: 100%;
`,x=n.ZP.div`
  margin-top: 20px;
  button {
    width: 68px;
  }
`,b=n.ZP.div`
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
          border: 1px solid ${r.Z.white5};
        }
      }
    }
  }
`,C=(e,t)=>({...e,...t.payload}),W={title:"",author:(0,h.getLocalStorage)().name,updateAt:d()().unix(),createAt:d()().unix(),content:"",uid:"",id:0,excerpt:"",tags:"",format:"default",status:"draft",type:"photo",category:"default",exif:"",description:""};function P(){const[e,t]=l.useReducer(C,W),a=(0,s.UO)(),n=(0,s.s0)(),r=a.uid,p=e=>{const a=e.target.dataset.name,l=e.target.value;t({type:"",payload:{[a]:l}})},g=(e,a)=>{t({type:"",payload:{[e]:a}})};return l.useEffect((()=>{"0"!==r&&(async()=>{const e=await(0,u.SD)(r);"string"!=typeof e?t({type:"",payload:e.data.post}):window.alert(e)})()}),[r]),l.createElement(N,null,l.createElement(y,null,l.createElement("div",{className:"inner"},l.createElement(m.g,{url:i.IW,urlPrefix:i._n,onFinish:(e,t)=>{g("url",e.url),g("format",e.ext),g("exif",JSON.stringify((0,f.iX)(t)))},allowExtensions:["jpg","jpeg","png","gif","webp"],defaultImage:e.url}))),l.createElement(w,null,l.createElement(b,null,l.createElement("div",{className:"item-inner"},l.createElement("label",{className:"item-label"},"标题"),l.createElement("span",{className:"item-input"},l.createElement(c.I,{"data-name":"title",value:e.title,onChange:p})))),l.createElement(b,null,l.createElement("div",{className:"item-inner"},l.createElement("label",{className:"item-label"},"作者"),l.createElement("span",{className:"item-input"},l.createElement(c.I,{"data-name":"author",value:e.author,onChange:p})))),l.createElement(b,null,l.createElement("div",{className:"item-inner"},l.createElement("label",{className:"item-label"},"发布状态"),l.createElement("span",{className:"item-input"},l.createElement(E.P,{onChange:e=>g("status",e),defaultValue:e?.status},l.createElement(E.W,{value:"publish",name:"已发表"}),l.createElement(E.W,{value:"draft",name:"草稿"}),l.createElement(E.W,{value:"private",name:"隐私"}))))),l.createElement(b,null,l.createElement("div",{className:"item-inner"},l.createElement("label",{className:"item-label"},"图片格式"),l.createElement("span",{className:"item-input"},l.createElement(E.P,{onChange:e=>g("format",e),defaultValue:e?.format},l.createElement(E.W,{value:"",name:"未知格式"}),l.createElement(E.W,{value:"jpg",name:"JPG"}),l.createElement(E.W,{value:"png",name:"PNG"}),l.createElement(E.W,{value:"jpeg",name:"JPEG"}),l.createElement(E.W,{value:"gif",name:"动图"}),l.createElement(E.W,{value:"webp",name:"WEBP"}))))),l.createElement(b,null,l.createElement("div",{className:"item-inner"},l.createElement("label",{className:"item-label"},"简介"),l.createElement("span",{className:"item-input"},l.createElement(c.I,{"data-name":"excerpt",value:e.excerpt,onChange:p})))),l.createElement(b,null,l.createElement("div",{className:"item-inner"},l.createElement("label",{className:"item-label"},"创建时间"),l.createElement("span",{className:"item-input"},l.createElement(v(),{selected:e?.createAt&&d().unix(e?.createAt).toDate(),onChange:e=>g("createAt",d()(e).unix()),dateFormat:"yyyy-MM-dd"})))),l.createElement(b,null,l.createElement("div",{className:"item-inner"},l.createElement("label",{className:"item-label"},"更新时间"),l.createElement("span",{className:"item-input"},l.createElement(v(),{selected:e?.updateAt&&d().unix(e?.updateAt).toDate(),onChange:e=>g("updateAt",d()(e).unix()),dateFormat:"yyyy-MM-dd"})))),l.createElement(b,null,l.createElement("div",{className:"item-inner"},l.createElement("label",{className:"item-label"},"分类"),l.createElement("span",{className:"item-input"},l.createElement(E.P,{onChange:e=>g("category",e),defaultValue:e?.category},l.createElement(E.W,{value:"default",name:"默认"}),l.createElement(E.W,{value:"life",name:"生活"}),l.createElement(E.W,{value:"travel",name:"旅途"}),l.createElement(E.W,{value:"scenery",name:"风景"}))))),l.createElement(b,null,l.createElement("div",{className:"item-inner"},l.createElement("label",{className:"item-label"},"标签"),l.createElement("span",{className:"item-input"},l.createElement(c.I,{"data-name":"tags",value:e.tags,onChange:p})))),l.createElement(b,null,l.createElement("div",{className:"item-inner"},l.createElement("label",{className:"item-label"},"EXIF信息"),l.createElement("span",{className:"item-input"},l.createElement(c.I,{"data-name":"exif",value:e.exif,onChange:p})))),l.createElement(b,null,l.createElement("div",{className:"item-inner"},l.createElement("label",{className:"item-label"},"更多说明"),l.createElement("span",{className:"item-input"},l.createElement(c.I,{"data-name":"description",value:e.description,onChange:p}))))),l.createElement(x,null,l.createElement(o.z,{onClick:()=>{"0"===r?(async()=>{const t=await(0,u.q2)(e);"string"!=typeof t?(window.alert("添加成功"),n(-1)):window.alert(t)})():(async()=>{const t=await(0,u.CP)(e.uid,e);"string"!=typeof t?(window.alert("更新成功"),n(-1)):window.alert(t)})()},type:"primary"},"提交"),l.createElement(o.z,{danger:!0,onClick:()=>n(-1)},"取消")))}}}]);