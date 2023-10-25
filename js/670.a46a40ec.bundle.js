(self.webpackChunkkevinjobs=self.webpackChunkkevinjobs||[]).push([[670],{8392:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});var i=n(959);const r=(0,n(7166).a1)("menu-fold",!0,(function(e){return i.createElement("svg",{width:e.size,height:e.size,viewBox:"0 0 48 48",fill:"none"},i.createElement("path",{d:"M8 11H40",stroke:e.colors[0],strokeWidth:e.strokeWidth,strokeLinecap:e.strokeLinecap,strokeLinejoin:e.strokeLinejoin}),i.createElement("path",{d:"M8 24H40",stroke:e.colors[0],strokeWidth:e.strokeWidth,strokeLinecap:e.strokeLinecap,strokeLinejoin:e.strokeLinejoin}),i.createElement("path",{d:"M8 37H40",stroke:e.colors[0],strokeWidth:e.strokeWidth,strokeLinecap:e.strokeLinecap,strokeLinejoin:e.strokeLinejoin}),i.createElement("path",{d:"M13.6568 29.6568L8 23.9999L13.6568 18.343",stroke:e.colors[0],strokeWidth:e.strokeWidth,strokeLinecap:e.strokeLinecap,strokeLinejoin:e.strokeLinejoin}))}))},3298:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});var i=n(959);const r=(0,n(7166).a1)("menu-unfold",!0,(function(e){return i.createElement("svg",{width:e.size,height:e.size,viewBox:"0 0 48 48",fill:"none"},i.createElement("path",{d:"M8 11H40",stroke:e.colors[0],strokeWidth:e.strokeWidth,strokeLinecap:e.strokeLinecap,strokeLinejoin:e.strokeLinejoin}),i.createElement("path",{d:"M8 24H42",stroke:e.colors[0],strokeWidth:e.strokeWidth,strokeLinecap:e.strokeLinecap,strokeLinejoin:e.strokeLinejoin}),i.createElement("path",{d:"M8 37H40",stroke:e.colors[0],strokeWidth:e.strokeWidth,strokeLinecap:e.strokeLinecap,strokeLinejoin:e.strokeLinejoin}),i.createElement("path",{d:"M36.3433 29.6568L42.0001 23.9999L36.3433 18.343",stroke:e.colors[0],strokeWidth:e.strokeWidth,strokeLinecap:e.strokeLinecap,strokeLinejoin:e.strokeLinejoin}))}))},5726:function(e){e.exports=function(){"use strict";var e=1e3,t=6e4,n=36e5,i="millisecond",r="second",a="minute",o="hour",s="day",c="week",u="month",d="quarter",l="year",h="date",f="Invalid Date",m=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,p=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,v={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],n=e%100;return"["+e+(t[(n-20)%10]||t[n]||t[0])+"]"}},g=function(e,t,n){var i=String(e);return!i||i.length>=t?e:""+Array(t+1-i.length).join(n)+e},k={s:g,z:function(e){var t=-e.utcOffset(),n=Math.abs(t),i=Math.floor(n/60),r=n%60;return(t<=0?"+":"-")+g(i,2,"0")+":"+g(r,2,"0")},m:function e(t,n){if(t.date()<n.date())return-e(n,t);var i=12*(n.year()-t.year())+(n.month()-t.month()),r=t.clone().add(i,u),a=n-r<0,o=t.clone().add(i+(a?-1:1),u);return+(-(i+(n-r)/(a?r-o:o-r))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:u,y:l,w:c,d:s,D:h,h:o,m:a,s:r,ms:i,Q:d}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},E="en",$={};$[E]=v;var y="$isDayjsObject",w=function(e){return e instanceof b||!(!e||!e[y])},x=function e(t,n,i){var r;if(!t)return E;if("string"==typeof t){var a=t.toLowerCase();$[a]&&(r=a),n&&($[a]=n,r=a);var o=t.split("-");if(!r&&o.length>1)return e(o[0])}else{var s=t.name;$[s]=t,r=s}return!i&&r&&(E=r),r||!i&&E},L=function(e,t){if(w(e))return e.clone();var n="object"==typeof t?t:{};return n.date=e,n.args=arguments,new b(n)},M=k;M.l=x,M.i=w,M.w=function(e,t){return L(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var b=function(){function v(e){this.$L=x(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[y]=!0}var g=v.prototype;return g.parse=function(e){this.$d=function(e){var t=e.date,n=e.utc;if(null===t)return new Date(NaN);if(M.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var i=t.match(m);if(i){var r=i[2]-1||0,a=(i[7]||"0").substring(0,3);return n?new Date(Date.UTC(i[1],r,i[3]||1,i[4]||0,i[5]||0,i[6]||0,a)):new Date(i[1],r,i[3]||1,i[4]||0,i[5]||0,i[6]||0,a)}}return new Date(t)}(e),this.init()},g.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},g.$utils=function(){return M},g.isValid=function(){return!(this.$d.toString()===f)},g.isSame=function(e,t){var n=L(e);return this.startOf(t)<=n&&n<=this.endOf(t)},g.isAfter=function(e,t){return L(e)<this.startOf(t)},g.isBefore=function(e,t){return this.endOf(t)<L(e)},g.$g=function(e,t,n){return M.u(e)?this[t]:this.set(n,e)},g.unix=function(){return Math.floor(this.valueOf()/1e3)},g.valueOf=function(){return this.$d.getTime()},g.startOf=function(e,t){var n=this,i=!!M.u(t)||t,d=M.p(e),f=function(e,t){var r=M.w(n.$u?Date.UTC(n.$y,t,e):new Date(n.$y,t,e),n);return i?r:r.endOf(s)},m=function(e,t){return M.w(n.toDate()[e].apply(n.toDate("s"),(i?[0,0,0,0]:[23,59,59,999]).slice(t)),n)},p=this.$W,v=this.$M,g=this.$D,k="set"+(this.$u?"UTC":"");switch(d){case l:return i?f(1,0):f(31,11);case u:return i?f(1,v):f(0,v+1);case c:var E=this.$locale().weekStart||0,$=(p<E?p+7:p)-E;return f(i?g-$:g+(6-$),v);case s:case h:return m(k+"Hours",0);case o:return m(k+"Minutes",1);case a:return m(k+"Seconds",2);case r:return m(k+"Milliseconds",3);default:return this.clone()}},g.endOf=function(e){return this.startOf(e,!1)},g.$set=function(e,t){var n,c=M.p(e),d="set"+(this.$u?"UTC":""),f=(n={},n[s]=d+"Date",n[h]=d+"Date",n[u]=d+"Month",n[l]=d+"FullYear",n[o]=d+"Hours",n[a]=d+"Minutes",n[r]=d+"Seconds",n[i]=d+"Milliseconds",n)[c],m=c===s?this.$D+(t-this.$W):t;if(c===u||c===l){var p=this.clone().set(h,1);p.$d[f](m),p.init(),this.$d=p.set(h,Math.min(this.$D,p.daysInMonth())).$d}else f&&this.$d[f](m);return this.init(),this},g.set=function(e,t){return this.clone().$set(e,t)},g.get=function(e){return this[M.p(e)]()},g.add=function(i,d){var h,f=this;i=Number(i);var m=M.p(d),p=function(e){var t=L(f);return M.w(t.date(t.date()+Math.round(e*i)),f)};if(m===u)return this.set(u,this.$M+i);if(m===l)return this.set(l,this.$y+i);if(m===s)return p(1);if(m===c)return p(7);var v=(h={},h[a]=t,h[o]=n,h[r]=e,h)[m]||1,g=this.$d.getTime()+i*v;return M.w(g,this)},g.subtract=function(e,t){return this.add(-1*e,t)},g.format=function(e){var t=this,n=this.$locale();if(!this.isValid())return n.invalidDate||f;var i=e||"YYYY-MM-DDTHH:mm:ssZ",r=M.z(this),a=this.$H,o=this.$m,s=this.$M,c=n.weekdays,u=n.months,d=n.meridiem,l=function(e,n,r,a){return e&&(e[n]||e(t,i))||r[n].slice(0,a)},h=function(e){return M.s(a%12||12,e,"0")},m=d||function(e,t,n){var i=e<12?"AM":"PM";return n?i.toLowerCase():i};return i.replace(p,(function(e,i){return i||function(e){switch(e){case"YY":return String(t.$y).slice(-2);case"YYYY":return M.s(t.$y,4,"0");case"M":return s+1;case"MM":return M.s(s+1,2,"0");case"MMM":return l(n.monthsShort,s,u,3);case"MMMM":return l(u,s);case"D":return t.$D;case"DD":return M.s(t.$D,2,"0");case"d":return String(t.$W);case"dd":return l(n.weekdaysMin,t.$W,c,2);case"ddd":return l(n.weekdaysShort,t.$W,c,3);case"dddd":return c[t.$W];case"H":return String(a);case"HH":return M.s(a,2,"0");case"h":return h(1);case"hh":return h(2);case"a":return m(a,o,!0);case"A":return m(a,o,!1);case"m":return String(o);case"mm":return M.s(o,2,"0");case"s":return String(t.$s);case"ss":return M.s(t.$s,2,"0");case"SSS":return M.s(t.$ms,3,"0");case"Z":return r}return null}(e)||r.replace(":","")}))},g.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},g.diff=function(i,h,f){var m,p=this,v=M.p(h),g=L(i),k=(g.utcOffset()-this.utcOffset())*t,E=this-g,$=function(){return M.m(p,g)};switch(v){case l:m=$()/12;break;case u:m=$();break;case d:m=$()/3;break;case c:m=(E-k)/6048e5;break;case s:m=(E-k)/864e5;break;case o:m=E/n;break;case a:m=E/t;break;case r:m=E/e;break;default:m=E}return f?m:M.a(m)},g.daysInMonth=function(){return this.endOf(u).$D},g.$locale=function(){return $[this.$L]},g.locale=function(e,t){if(!e)return this.$L;var n=this.clone(),i=x(e,t,!0);return i&&(n.$L=i),n},g.clone=function(){return M.w(this.$d,this)},g.toDate=function(){return new Date(this.valueOf())},g.toJSON=function(){return this.isValid()?this.toISOString():null},g.toISOString=function(){return this.$d.toISOString()},g.toString=function(){return this.$d.toUTCString()},v}(),D=b.prototype;return L.prototype=D,[["$ms",i],["$s",r],["$m",a],["$H",o],["$W",s],["$M",u],["$y",l],["$D",h]].forEach((function(e){D[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),L.extend=function(e,t){return e.$i||(e(t,b,L),e.$i=!0),L},L.locale=x,L.isDayjs=w,L.unix=function(e){return L(1e3*e)},L.en=$[E],L.Ls=$,L.p={},L}()},8385:(e,t,n)=>{"use strict";n.d(t,{q2:()=>v,fR:()=>m,Zt:()=>l,DN:()=>h,ms:()=>f,SD:()=>g,T6:()=>d,x4:()=>u,CP:()=>p});var i=n(120),r=n.n(i),a=n(7573);const o=r().create();o.defaults.baseURL=a._,o.interceptors.request.use((e=>(e.data=JSON.stringify(e.data),e.headers={"content-type":"application/json",Authorization:`Bearer ${localStorage.getItem("token")}`},e)));const s=o;var c=function(e,t,n,i){return new(n||(n=Promise))((function(r,a){function o(e){try{c(i.next(e))}catch(e){a(e)}}function s(e){try{c(i.throw(e))}catch(e){a(e)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,s)}c((i=i.apply(e,t||[])).next())}))};function u(e){return c(this,void 0,void 0,(function*(){const t=a._+"/token",n=yield s.post(t,e);if(0===n.data.code)return n.data.data}))}function d(e,t,n=null){return c(this,void 0,void 0,(function*(){const i=a._+"/post/list";let r={offset:e,limit:t,status:"publish"};n&&(r=Object.assign(Object.assign({},r),n));const o=yield s.get(i,{params:r});if(0===o.data.code)return o.data.data}))}function l(e,t){return c(this,void 0,void 0,(function*(){return yield d(e,t,{type:"article"})}))}function h(e=0,t=20){return c(this,void 0,void 0,(function*(){return yield d(e,t,{type:"cover",status:"all"})}))}function f(e,t){return c(this,void 0,void 0,(function*(){return yield d(e,t,{type:"photo"})}))}function m(e){return c(this,void 0,void 0,(function*(){const t=a._+"/p?uid="+e;return 0===(yield s.delete(t)).data.code}))}function p(e,t){return c(this,void 0,void 0,(function*(){const n=a._+"/p?uid="+e,i=yield s.put(n,t);if(0===i.data.code)return i.data.msg}))}function v(e){return c(this,void 0,void 0,(function*(){const t=a._+"/p",n=yield s.post(t,e);if(0===n.data.code)return n.data.msg}))}function g(e){return c(this,void 0,void 0,(function*(){const t=a._+"/p?uid="+e,n=yield s.get(t);if(0===n.data.code)return n.data.data.post}))}},7573:(e,t,n)=>{"use strict";n.d(t,{_:()=>i});const i="https://api.kevinjobs.com:5000"},3944:(e,t,n)=>{"use strict";n.d(t,{sv:()=>u,$Y:()=>v});var i=n(959),r=n(3103),a=n(274);const o=r.ZP.div`
  width: 100%;
`,s=r.ZP.div`
  width: 100%;
  height: 100px;
  border: 1px solid #999;
  border-radius: 4px;
  div {
    outline: none;
  }
`,c=r.ZP.div`
  max-width: 100%;
  border-top: 1px solid #d1d1d1;
  padding: 16px;
  div {
    padding: 4px 0;
  }
`;function u(){const[e,t]=i.useState([]);return i.createElement(o,null,i.createElement("div",null,i.createElement("h3",null,"评论")),i.createElement(s,null,i.createElement("div",{contentEditable:!0,onKeyDown:n=>{const i=n.target;"Enter"===n.key&&(n.preventDefault(),t(e.concat([{createAt:0,updateAt:0,content:i.innerText,id:void 0,uid:void 0,author:"匿名"}])))},style:{margin:8,height:84}})),i.createElement("div",{style:{marginTop:16,textAlign:"right",width:"100%"}},i.createElement(a.zx,{onClick:e=>e.preventDefault()},"提交"),i.createElement(a.zx,{onClick:e=>e.preventDefault(),danger:!0},"清空")),i.createElement("div",null,i.createElement("h4",null,"热门评论")),i.createElement("div",null,e.length?e.map((e=>i.createElement(c,{key:e.uid},i.createElement("div",{style:{color:"#777"}},e.author),i.createElement("div",null,e.content)))):"还没有评论"))}r.ZP.div`
position: relative;
  display: inline-block;
  cursor: pointer;
  width: 44px;
  height: 44px;
  //overflow: hidden;
  .triple-menu-line {
    position: absolute;
    width: 88px;
    left: 0;
    top: 0;
    border: none;
    border-top: 2px solid #000;
  }
`;var d=n(3298),l=n(8392),h=n(8903);const f=r.ZP.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0,0,0,0.75);
`,m=r.ZP.div`
  transition: all .5s ease-in-out;
  position: fixed;
  top: 0;
  height: 100vh;
  padding: 8px 0;
  z-index: 999;
`,p=r.ZP.div`
  padding: 32px 0;
  text-align: center;
  .right-navi-menu-item {
    padding: 16px 0;
    transition: all .1s ease-in-out;
    &.actived {
      background-color: #777;
      a { color: #f1f1f1; }
    }
    &:hover {
      background-color: #333;
      a { color: #f1f1f1; }
    }
    a {
      text-decoration: none;
      color: #000;
    }
  }
`;function v(e){const{isOpen:t,onClick:n,menus:r}=e,a=(0,h.TH)(),o=e=>e.paths.join("/")===a.pathname&&t?"right-navi-menu-item actived":"right-navi-menu-item",s=e=>"hash"===e.type?"/#"+e.paths.join("/"):e.paths.join("/");return i.useEffect((()=>{const e=e=>{t&&e.preventDefault()};return window.addEventListener("wheel",e,{passive:!1}),()=>{window.removeEventListener("wheel",e)}}),[t]),i.createElement(i.Fragment,null,i.createElement(m,{className:"page-article-right-navi",style:{width:300,right:t?0:-256,backgroundColor:t?"#fff":"transparent"}},i.createElement("div",{style:{marginLeft:t?16:0,transition:"all .5s ease-in-out",cursor:"pointer"}},t?i.createElement(d.Z,{theme:"outline",size:"32",fill:"#555555",strokeWidth:2,onClick:n}):i.createElement(l.Z,{theme:"outline",size:"32",fill:"#d1d1d1",strokeWidth:2,onClick:n})),i.createElement(p,{style:{visibility:t?"visible":"hidden"}},r.map((e=>{if(2===e.paths.length&&!1!==e.show)return i.createElement("div",{className:o(e),key:e.key},i.createElement("a",{href:s(e)},e.title))})))),t&&i.createElement(f,{style:{zIndex:998}}))}},3670:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>E});var i=n(959),r=n(3103),a=n(5726),o=n.n(a),s=n(8903);const c=(0,n(7166).a1)("left",!0,(function(e){return i.createElement("svg",{width:e.size,height:e.size,viewBox:"0 0 48 48",fill:"none"},i.createElement("path",{d:"M31 36L19 24L31 12",stroke:e.colors[0],strokeWidth:e.strokeWidth,strokeLinecap:e.strokeLinecap,strokeLinejoin:e.strokeLinejoin}))}));var u=n(274),d=n(8385),l=n(3944),h=n(7247),f=n(4563),m=function(e,t,n,i){return new(n||(n=Promise))((function(r,a){function o(e){try{c(i.next(e))}catch(e){a(e)}}function s(e){try{c(i.throw(e))}catch(e){a(e)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,s)}c((i=i.apply(e,t||[])).next())}))};const p=r.ZP.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 32px 16px;
  background-color: #fff;
  .back {
    padding: 0 16px;
    margin-bottom: 24px;
    div.back-txt {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 8px 20px 8px 12px;
      background-color: ${f.Z.white3};
      width: fit-content;
      border-radius: 4px;
      cursor: pointer;
      &:hover {
        background-color: ${f.Z.white4};
      }
    }
  }
`,v=r.ZP.div`
  width: 100%;
  height: fit-content;
  padding: 16px 0;
  h2,.date,.author {
    max-width: 1000px;
    margin: 0 auto;
    padding: 0 16px;
  }
  .author {
    padding: 16px 0 0 16px;
    color: ${f.Z.white7};
    font-size: 0.9rem;
  }
  .date {
    padding: 16px 16px 0 16px;
    color: ${f.Z.white7};
    font-size: 0.9rem;
  }
`,g=r.ZP.div`
  line-height: 1.8;
  padding: 0 16px 32px 16px;
`,k=r.ZP.div`
  .item {
    margin: 16px 0;
  }
  .content {
    margin-top: 60px;
    div {
      margin: 18px 0;
    }
  }
`;function E(){const[e,t]=i.useState(),[n,r]=i.useState(!1),a=(0,s.UO)();return i.useEffect((()=>{const{uid:e}=a;(()=>{m(this,void 0,void 0,(function*(){const n=yield(0,d.SD)(e);t(n)}))})()}),[]),i.createElement(p,null,e?$(e):y(),i.createElement("div",{style:{marginTop:64,maxWidth:1e3,padding:16}},i.createElement(l.sv,null)),i.createElement(l.$Y,{menus:h.ps,isOpen:n,onClick:e=>{e.preventDefault(),r(!n)}}))}const $=e=>{const t=(0,s.k6)();return i.createElement("div",{className:"article-content"},i.createElement("div",{className:"back"},i.createElement("div",{className:"back-txt",onClick:()=>t.go(-1)},i.createElement(c,{theme:"outline",size:"24",fill:"#333"}),i.createElement("span",null,"返回"))),i.createElement(v,{className:"article-page-header"},i.createElement("h2",null,e.title),i.createElement("div",{className:"author"},e.author),i.createElement("div",{className:"date"},o().unix(Number(String(e.createAt).slice(0,10))).format("YYYY年M月D日"))),i.createElement(g,null,i.createElement("div",{dangerouslySetInnerHTML:{__html:e.content}})))},y=()=>i.createElement(k,null,i.createElement("div",{className:"title item"},i.createElement(u.Od,{height:50})),i.createElement("div",{className:"author item"},i.createElement(u.Od,{height:12,width:80})),i.createElement("div",{className:"datetime item"},i.createElement(u.Od,{height:12,width:150})),i.createElement("div",{className:"content item"},i.createElement("div",null,i.createElement(u.Od,{height:16,width:500})),i.createElement("div",null,i.createElement(u.Od,{height:16,width:300})),i.createElement("div",null,i.createElement(u.Od,{height:16,width:200})),i.createElement("div",null,i.createElement(u.Od,{height:16,width:320})),i.createElement("div",null,i.createElement(u.Od,{height:16,width:400})),i.createElement("div",null,i.createElement(u.Od,{height:16})),i.createElement("div",null,i.createElement(u.Od,{height:16,width:210})),i.createElement("div",null,i.createElement(u.Od,{height:16,width:300})),i.createElement("div",null,i.createElement(u.Od,{height:16,width:600})),i.createElement("div",null,i.createElement(u.Od,{height:16,width:80})),i.createElement("div",null,i.createElement(u.Od,{height:16})),i.createElement("div",null,i.createElement(u.Od,{height:16,width:230})),i.createElement("div",null,i.createElement(u.Od,{height:16,width:400}))))}}]);