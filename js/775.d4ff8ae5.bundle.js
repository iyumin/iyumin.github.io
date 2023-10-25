(self.webpackChunkkevinjobs=self.webpackChunkkevinjobs||[]).push([[775],{8392:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});var i=n(959);const r=(0,n(7166).a1)("menu-fold",!0,(function(e){return i.createElement("svg",{width:e.size,height:e.size,viewBox:"0 0 48 48",fill:"none"},i.createElement("path",{d:"M8 11H40",stroke:e.colors[0],strokeWidth:e.strokeWidth,strokeLinecap:e.strokeLinecap,strokeLinejoin:e.strokeLinejoin}),i.createElement("path",{d:"M8 24H40",stroke:e.colors[0],strokeWidth:e.strokeWidth,strokeLinecap:e.strokeLinecap,strokeLinejoin:e.strokeLinejoin}),i.createElement("path",{d:"M8 37H40",stroke:e.colors[0],strokeWidth:e.strokeWidth,strokeLinecap:e.strokeLinecap,strokeLinejoin:e.strokeLinejoin}),i.createElement("path",{d:"M13.6568 29.6568L8 23.9999L13.6568 18.343",stroke:e.colors[0],strokeWidth:e.strokeWidth,strokeLinecap:e.strokeLinecap,strokeLinejoin:e.strokeLinejoin}))}))},3298:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});var i=n(959);const r=(0,n(7166).a1)("menu-unfold",!0,(function(e){return i.createElement("svg",{width:e.size,height:e.size,viewBox:"0 0 48 48",fill:"none"},i.createElement("path",{d:"M8 11H40",stroke:e.colors[0],strokeWidth:e.strokeWidth,strokeLinecap:e.strokeLinecap,strokeLinejoin:e.strokeLinejoin}),i.createElement("path",{d:"M8 24H42",stroke:e.colors[0],strokeWidth:e.strokeWidth,strokeLinecap:e.strokeLinecap,strokeLinejoin:e.strokeLinejoin}),i.createElement("path",{d:"M8 37H40",stroke:e.colors[0],strokeWidth:e.strokeWidth,strokeLinecap:e.strokeLinecap,strokeLinejoin:e.strokeLinejoin}),i.createElement("path",{d:"M36.3433 29.6568L42.0001 23.9999L36.3433 18.343",stroke:e.colors[0],strokeWidth:e.strokeWidth,strokeLinecap:e.strokeLinecap,strokeLinejoin:e.strokeLinejoin}))}))},5726:function(e){e.exports=function(){"use strict";var e=6e4,t=36e5,n="millisecond",i="second",r="minute",o="hour",a="day",s="week",c="month",u="quarter",d="year",l="date",h="Invalid Date",f=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,m=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,p={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],n=e%100;return"["+e+(t[(n-20)%10]||t[n]||t[0])+"]"}},v=function(e,t,n){var i=String(e);return!i||i.length>=t?e:""+Array(t+1-i.length).join(n)+e},g={s:v,z:function(e){var t=-e.utcOffset(),n=Math.abs(t),i=Math.floor(n/60),r=n%60;return(t<=0?"+":"-")+v(i,2,"0")+":"+v(r,2,"0")},m:function e(t,n){if(t.date()<n.date())return-e(n,t);var i=12*(n.year()-t.year())+(n.month()-t.month()),r=t.clone().add(i,c),o=n-r<0,a=t.clone().add(i+(o?-1:1),c);return+(-(i+(n-r)/(o?r-a:a-r))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:c,y:d,w:s,d:a,D:l,h:o,m:r,s:i,ms:n,Q:u}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},k="en",$={};$[k]=p;var y="$isDayjsObject",w=function(e){return e instanceof M||!(!e||!e[y])},x=function e(t,n,i){var r;if(!t)return k;if("string"==typeof t){var o=t.toLowerCase();$[o]&&(r=o),n&&($[o]=n,r=o);var a=t.split("-");if(!r&&a.length>1)return e(a[0])}else{var s=t.name;$[s]=t,r=s}return!i&&r&&(k=r),r||!i&&k},E=function(e,t){if(w(e))return e.clone();var n="object"==typeof t?t:{};return n.date=e,n.args=arguments,new M(n)},b=g;b.l=x,b.i=w,b.w=function(e,t){return E(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var M=function(){function p(e){this.$L=x(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[y]=!0}var v=p.prototype;return v.parse=function(e){this.$d=function(e){var t=e.date,n=e.utc;if(null===t)return new Date(NaN);if(b.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var i=t.match(f);if(i){var r=i[2]-1||0,o=(i[7]||"0").substring(0,3);return n?new Date(Date.UTC(i[1],r,i[3]||1,i[4]||0,i[5]||0,i[6]||0,o)):new Date(i[1],r,i[3]||1,i[4]||0,i[5]||0,i[6]||0,o)}}return new Date(t)}(e),this.init()},v.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},v.$utils=function(){return b},v.isValid=function(){return!(this.$d.toString()===h)},v.isSame=function(e,t){var n=E(e);return this.startOf(t)<=n&&n<=this.endOf(t)},v.isAfter=function(e,t){return E(e)<this.startOf(t)},v.isBefore=function(e,t){return this.endOf(t)<E(e)},v.$g=function(e,t,n){return b.u(e)?this[t]:this.set(n,e)},v.unix=function(){return Math.floor(this.valueOf()/1e3)},v.valueOf=function(){return this.$d.getTime()},v.startOf=function(e,t){var n=this,u=!!b.u(t)||t,h=b.p(e),f=function(e,t){var i=b.w(n.$u?Date.UTC(n.$y,t,e):new Date(n.$y,t,e),n);return u?i:i.endOf(a)},m=function(e,t){return b.w(n.toDate()[e].apply(n.toDate("s"),(u?[0,0,0,0]:[23,59,59,999]).slice(t)),n)},p=this.$W,v=this.$M,g=this.$D,k="set"+(this.$u?"UTC":"");switch(h){case d:return u?f(1,0):f(31,11);case c:return u?f(1,v):f(0,v+1);case s:var $=this.$locale().weekStart||0,y=(p<$?p+7:p)-$;return f(u?g-y:g+(6-y),v);case a:case l:return m(k+"Hours",0);case o:return m(k+"Minutes",1);case r:return m(k+"Seconds",2);case i:return m(k+"Milliseconds",3);default:return this.clone()}},v.endOf=function(e){return this.startOf(e,!1)},v.$set=function(e,t){var s,u=b.p(e),h="set"+(this.$u?"UTC":""),f=(s={},s[a]=h+"Date",s[l]=h+"Date",s[c]=h+"Month",s[d]=h+"FullYear",s[o]=h+"Hours",s[r]=h+"Minutes",s[i]=h+"Seconds",s[n]=h+"Milliseconds",s)[u],m=u===a?this.$D+(t-this.$W):t;if(u===c||u===d){var p=this.clone().set(l,1);p.$d[f](m),p.init(),this.$d=p.set(l,Math.min(this.$D,p.daysInMonth())).$d}else f&&this.$d[f](m);return this.init(),this},v.set=function(e,t){return this.clone().$set(e,t)},v.get=function(e){return this[b.p(e)]()},v.add=function(n,u){var l,h=this;n=Number(n);var f=b.p(u),m=function(e){var t=E(h);return b.w(t.date(t.date()+Math.round(e*n)),h)};if(f===c)return this.set(c,this.$M+n);if(f===d)return this.set(d,this.$y+n);if(f===a)return m(1);if(f===s)return m(7);var p=(l={},l[r]=e,l[o]=t,l[i]=1e3,l)[f]||1,v=this.$d.getTime()+n*p;return b.w(v,this)},v.subtract=function(e,t){return this.add(-1*e,t)},v.format=function(e){var t=this,n=this.$locale();if(!this.isValid())return n.invalidDate||h;var i=e||"YYYY-MM-DDTHH:mm:ssZ",r=b.z(this),o=this.$H,a=this.$m,s=this.$M,c=n.weekdays,u=n.months,d=n.meridiem,l=function(e,n,r,o){return e&&(e[n]||e(t,i))||r[n].slice(0,o)},f=function(e){return b.s(o%12||12,e,"0")},p=d||function(e,t,n){var i=e<12?"AM":"PM";return n?i.toLowerCase():i};return i.replace(m,(function(e,i){return i||function(e){switch(e){case"YY":return String(t.$y).slice(-2);case"YYYY":return b.s(t.$y,4,"0");case"M":return s+1;case"MM":return b.s(s+1,2,"0");case"MMM":return l(n.monthsShort,s,u,3);case"MMMM":return l(u,s);case"D":return t.$D;case"DD":return b.s(t.$D,2,"0");case"d":return String(t.$W);case"dd":return l(n.weekdaysMin,t.$W,c,2);case"ddd":return l(n.weekdaysShort,t.$W,c,3);case"dddd":return c[t.$W];case"H":return String(o);case"HH":return b.s(o,2,"0");case"h":return f(1);case"hh":return f(2);case"a":return p(o,a,!0);case"A":return p(o,a,!1);case"m":return String(a);case"mm":return b.s(a,2,"0");case"s":return String(t.$s);case"ss":return b.s(t.$s,2,"0");case"SSS":return b.s(t.$ms,3,"0");case"Z":return r}return null}(e)||r.replace(":","")}))},v.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},v.diff=function(n,l,h){var f,m=this,p=b.p(l),v=E(n),g=(v.utcOffset()-this.utcOffset())*e,k=this-v,$=function(){return b.m(m,v)};switch(p){case d:f=$()/12;break;case c:f=$();break;case u:f=$()/3;break;case s:f=(k-g)/6048e5;break;case a:f=(k-g)/864e5;break;case o:f=k/t;break;case r:f=k/e;break;case i:f=k/1e3;break;default:f=k}return h?f:b.a(f)},v.daysInMonth=function(){return this.endOf(c).$D},v.$locale=function(){return $[this.$L]},v.locale=function(e,t){if(!e)return this.$L;var n=this.clone(),i=x(e,t,!0);return i&&(n.$L=i),n},v.clone=function(){return b.w(this.$d,this)},v.toDate=function(){return new Date(this.valueOf())},v.toJSON=function(){return this.isValid()?this.toISOString():null},v.toISOString=function(){return this.$d.toISOString()},v.toString=function(){return this.$d.toUTCString()},p}(),L=M.prototype;return E.prototype=L,[["$ms",n],["$s",i],["$m",r],["$H",o],["$W",a],["$M",c],["$y",d],["$D",l]].forEach((function(e){L[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),E.extend=function(e,t){return e.$i||(e(t,M,E),e.$i=!0),E},E.locale=x,E.isDayjs=w,E.unix=function(e){return E(1e3*e)},E.en=$[k],E.Ls=$,E.p={},E}()},8385:(e,t,n)=>{"use strict";n.d(t,{q2:()=>v,fR:()=>m,Zt:()=>l,DN:()=>h,ms:()=>f,SD:()=>g,T6:()=>d,x4:()=>u,CP:()=>p});var i=n(120),r=n.n(i),o=n(7573);const a=r().create();a.defaults.baseURL=o._,a.interceptors.request.use((e=>(e.data=JSON.stringify(e.data),e.headers={"content-type":"application/json",Authorization:`Bearer ${localStorage.getItem("token")}`},e)));const s=a;var c=function(e,t,n,i){return new(n||(n=Promise))((function(r,o){function a(e){try{c(i.next(e))}catch(e){o(e)}}function s(e){try{c(i.throw(e))}catch(e){o(e)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,s)}c((i=i.apply(e,t||[])).next())}))};function u(e){return c(this,void 0,void 0,(function*(){const t=o._+"/token",n=yield s.post(t,e);if(0===n.data.code)return n.data.data}))}function d(e,t,n=null){return c(this,void 0,void 0,(function*(){const i=o._+"/post/list";let r={offset:e,limit:t,status:"publish"};n&&(r=Object.assign(Object.assign({},r),n));const a=yield s.get(i,{params:r});if(0===a.data.code)return a.data.data}))}function l(e,t){return c(this,void 0,void 0,(function*(){return yield d(e,t,{type:"article"})}))}function h(e=0,t=20){return c(this,void 0,void 0,(function*(){return yield d(e,t,{type:"cover",status:"all"})}))}function f(e,t){return c(this,void 0,void 0,(function*(){return yield d(e,t,{type:"photo"})}))}function m(e){return c(this,void 0,void 0,(function*(){const t=o._+"/p?uid="+e;return 0===(yield s.delete(t)).data.code}))}function p(e,t){return c(this,void 0,void 0,(function*(){const n=o._+"/p?uid="+e,i=yield s.put(n,t);if(0===i.data.code)return i.data.msg}))}function v(e){return c(this,void 0,void 0,(function*(){const t=o._+"/p",n=yield s.post(t,e);if(0===n.data.code)return n.data.msg}))}function g(e){return c(this,void 0,void 0,(function*(){const t=o._+"/p?uid="+e,n=yield s.get(t);if(0===n.data.code)return n.data.data.post}))}},7573:(e,t,n)=>{"use strict";n.d(t,{_:()=>i});const i="https://api.kevinjobs.com:5000"},3944:(e,t,n)=>{"use strict";n.d(t,{sv:()=>u,$Y:()=>v});var i=n(959),r=n(3103),o=n(274);const a=r.ZP.div`
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
`;function u(){const[e,t]=i.useState([]);return i.createElement(a,null,i.createElement("div",null,i.createElement("h3",null,"评论")),i.createElement(s,null,i.createElement("div",{contentEditable:!0,onKeyDown:n=>{const i=n.target;"Enter"===n.key&&(n.preventDefault(),t(e.concat([{createAt:0,updateAt:0,content:i.innerText,id:void 0,uid:void 0,author:"匿名"}])))},style:{margin:8,height:84}})),i.createElement("div",{style:{marginTop:16,textAlign:"right",width:"100%"}},i.createElement(o.zx,{onClick:e=>e.preventDefault()},"提交"),i.createElement(o.zx,{onClick:e=>e.preventDefault(),danger:!0},"清空")),i.createElement("div",null,i.createElement("h4",null,"热门评论")),i.createElement("div",null,e.length?e.map((e=>i.createElement(c,{key:e.uid},i.createElement("div",{style:{color:"#777"}},e.author),i.createElement("div",null,e.content)))):"还没有评论"))}r.ZP.div`
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
`;function v(e){const{isOpen:t,onClick:n,menus:r}=e,o=(0,h.TH)(),a=e=>e.paths.join("/")===o.pathname&&t?"right-navi-menu-item actived":"right-navi-menu-item",s=e=>"hash"===e.type?"/#"+e.paths.join("/"):e.paths.join("/");return i.useEffect((()=>{const e=e=>{t&&e.preventDefault()};return window.addEventListener("wheel",e,{passive:!1}),()=>{window.removeEventListener("wheel",e)}}),[t]),i.createElement(i.Fragment,null,i.createElement(m,{className:"page-article-right-navi",style:{width:300,right:t?0:-256,backgroundColor:t?"#fff":"transparent"}},i.createElement("div",{style:{marginLeft:t?16:0,transition:"all .5s ease-in-out",cursor:"pointer"}},t?i.createElement(d.Z,{theme:"outline",size:"32",fill:"#555555",strokeWidth:2,onClick:n}):i.createElement(l.Z,{theme:"outline",size:"32",fill:"#d1d1d1",strokeWidth:2,onClick:n})),i.createElement(p,{style:{visibility:t?"visible":"hidden"}},r.map((e=>{if(2===e.paths.length&&!1!==e.show)return i.createElement("div",{className:a(e),key:e.key},i.createElement("a",{href:s(e)},e.title))})))),t&&i.createElement(f,{style:{zIndex:998}}))}},6775:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>E});var i=n(959),r=n(3103),o=n(8903),a=n(5726),s=n.n(a),c=n(4563),u=n(274),d=n(3944),l=n(7247),h=n(7573),f=n(8385),m=function(e,t,n,i){return new(n||(n=Promise))((function(r,o){function a(e){try{c(i.next(e))}catch(e){o(e)}}function s(e){try{c(i.throw(e))}catch(e){o(e)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,s)}c((i=i.apply(e,t||[])).next())}))};const p=r.ZP.div`
  padding: 48px 0;
  background-color: ${c.Z.white};
`,v=r.ZP.div`
  margin: 0 auto;
  max-width: 820px;
`,g=r.ZP.div`
  width: 100%;
  margin: 16px 0;
  border-radius: 5px;
  position: relative;
  transition: all .3s ease-in-out;
  display: flex;
  border: 1px solid ${c.Z.white4};
`,k=r.ZP.div`
  width: 44%;
  min-height: 160px;
  max-height: 300px;
  transition: width .2s ease-in-out;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    cursor: pointer;
    border-radius: 5px 0 0 5px;
  }
`,$=r.ZP.div`
  position: relative;
  width: 56%;
  background-color: #fff;
  color: ${c.Z.dark};
  border-radius: 0 4px 4px 0;
  flex-grow: 1;
  h3.info-item {
    cursor: pointer;
    &:hover {
      color: ${c.Z.blue};
    }
  }
  .info-author-date {
    position: absolute;
    left: 16px;
    bottom: 16px;
    font-size: 12px;
    color: ${c.Z.dark};
    .info-author,.info-date {
      display: inline-block;
      margin-right: 16px;
    }
    .info-date {
      color: ${c.Z.white6};
    }
  }
`,y=r.ZP.div`
  max-width: 820px;
  margin: 0 auto;
  padding: 16px 0;
  text-align: center;
  border: 1px solid ${c.Z.white4};
  cursor: pointer;
  border-radius: 4px;
  &:hover {
    background-color: ${c.Z.white3};
  }
`,w=r.ZP.div`
  background-color: ${c.Z.white1};
  margin: 8px 0;
  display: flex;
  .right {
    margin-left: 16px;
  }
  .item {
    margin: 0 0 20px 0;
  }
`;function x(e){const t=[];for(let n=0;n<(null==e?void 0:e.length);n++){const i=e[n];i.url=h._+i.url.replace("static/","static/thumb-"),t.push(i)}return t}const E=function(){const[e,t]=i.useState(!1),[n,r]=i.useState(),[a,h]=i.useState(0),[E,b]=i.useState(!0),M=(0,o.k6)(),L=e=>{M.push(`/article/${e.uid}`)};return i.useEffect((()=>{(()=>{m(this,void 0,void 0,(function*(){const e=yield(0,f.Zt)(a,5);r(x(null==e?void 0:e.posts)),(null==e?void 0:e.amount)<5&&b(!1)}))})()}),[]),i.createElement(p,null,i.createElement(v,null,n?n.map((e=>i.createElement(g,{key:e.uid},i.createElement(k,{onClick:()=>L(e),className:"cover"},i.createElement("img",{src:e.url,alt:e.title})),i.createElement($,null,i.createElement("div",{style:{margin:16}},i.createElement("h3",{className:"info-item",onClick:()=>L(e)},e.title),i.createElement("div",{className:"info-item",style:{color:c.Z.white7}},e.excerpt),i.createElement("div",{className:"info-author-date info-item"},i.createElement("div",{className:"info-author"},e.author),i.createElement("div",{className:"info-date"},s().unix(e.updateAt).format("YYYY年M月D日")))))))):(()=>{const e=[];for(let t=0;t<6;t++)e.push(i.createElement(w,{className:"wait"},i.createElement("div",{className:"left"},i.createElement(u.Od,{height:200,width:320})),i.createElement("div",{className:"right"},i.createElement("div",{className:"item"},i.createElement(u.Od,{height:20,width:460})),i.createElement("div",{className:"item"},i.createElement(u.Od,{height:16,width:260})),i.createElement("div",{className:"item"},i.createElement(u.Od,{height:16,width:180})),i.createElement("div",{className:"item"},i.createElement(u.Od,{height:16,width:240})),i.createElement("div",{className:"item"},i.createElement(u.Od,{height:16,width:300})),i.createElement("div",{className:"item"},i.createElement(u.Od,{height:12,width:380})))));return e})()),E&&i.createElement(y,{role:"button",onClick:()=>m(this,void 0,void 0,(function*(){const e=yield(0,f.Zt)(a+5,5);e?(r(n.concat(x(e.posts))),h(a+5)):b(!1)}))},"点击加载更多"),i.createElement(d.$Y,{isOpen:e,onClick:()=>t(!e),menus:l.ps}))}}}]);