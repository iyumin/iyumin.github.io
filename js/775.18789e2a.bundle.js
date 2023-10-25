(self.webpackChunkkevinjobs=self.webpackChunkkevinjobs||[]).push([[775],{8392:(t,e,n)=>{"use strict";n.d(e,{Z:()=>r});var i=n(959);const r=(0,n(7166).a1)("menu-fold",!0,(function(t){return i.createElement("svg",{width:t.size,height:t.size,viewBox:"0 0 48 48",fill:"none"},i.createElement("path",{d:"M8 11H40",stroke:t.colors[0],strokeWidth:t.strokeWidth,strokeLinecap:t.strokeLinecap,strokeLinejoin:t.strokeLinejoin}),i.createElement("path",{d:"M8 24H40",stroke:t.colors[0],strokeWidth:t.strokeWidth,strokeLinecap:t.strokeLinecap,strokeLinejoin:t.strokeLinejoin}),i.createElement("path",{d:"M8 37H40",stroke:t.colors[0],strokeWidth:t.strokeWidth,strokeLinecap:t.strokeLinecap,strokeLinejoin:t.strokeLinejoin}),i.createElement("path",{d:"M13.6568 29.6568L8 23.9999L13.6568 18.343",stroke:t.colors[0],strokeWidth:t.strokeWidth,strokeLinecap:t.strokeLinecap,strokeLinejoin:t.strokeLinejoin}))}))},3298:(t,e,n)=>{"use strict";n.d(e,{Z:()=>r});var i=n(959);const r=(0,n(7166).a1)("menu-unfold",!0,(function(t){return i.createElement("svg",{width:t.size,height:t.size,viewBox:"0 0 48 48",fill:"none"},i.createElement("path",{d:"M8 11H40",stroke:t.colors[0],strokeWidth:t.strokeWidth,strokeLinecap:t.strokeLinecap,strokeLinejoin:t.strokeLinejoin}),i.createElement("path",{d:"M8 24H42",stroke:t.colors[0],strokeWidth:t.strokeWidth,strokeLinecap:t.strokeLinecap,strokeLinejoin:t.strokeLinejoin}),i.createElement("path",{d:"M8 37H40",stroke:t.colors[0],strokeWidth:t.strokeWidth,strokeLinecap:t.strokeLinecap,strokeLinejoin:t.strokeLinejoin}),i.createElement("path",{d:"M36.3433 29.6568L42.0001 23.9999L36.3433 18.343",stroke:t.colors[0],strokeWidth:t.strokeWidth,strokeLinecap:t.strokeLinecap,strokeLinejoin:t.strokeLinejoin}))}))},5726:function(t){t.exports=function(){"use strict";var t=6e4,e=36e5,n="millisecond",i="second",r="minute",o="hour",a="day",s="week",c="month",u="quarter",d="year",l="date",h="Invalid Date",f=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,p=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,m={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var e=["th","st","nd","rd"],n=t%100;return"["+t+(e[(n-20)%10]||e[n]||e[0])+"]"}},v=function(t,e,n){var i=String(t);return!i||i.length>=e?t:""+Array(e+1-i.length).join(n)+t},k={s:v,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),i=Math.floor(n/60),r=n%60;return(e<=0?"+":"-")+v(i,2,"0")+":"+v(r,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var i=12*(n.year()-e.year())+(n.month()-e.month()),r=e.clone().add(i,c),o=n-r<0,a=e.clone().add(i+(o?-1:1),c);return+(-(i+(n-r)/(o?r-a:a-r))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:c,y:d,w:s,d:a,D:l,h:o,m:r,s:i,ms:n,Q:u}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},g="en",$={};$[g]=m;var y="$isDayjsObject",w=function(t){return t instanceof M||!(!t||!t[y])},x=function t(e,n,i){var r;if(!e)return g;if("string"==typeof e){var o=e.toLowerCase();$[o]&&(r=o),n&&($[o]=n,r=o);var a=e.split("-");if(!r&&a.length>1)return t(a[0])}else{var s=e.name;$[s]=e,r=s}return!i&&r&&(g=r),r||!i&&g},E=function(t,e){if(w(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new M(n)},b=k;b.l=x,b.i=w,b.w=function(t,e){return E(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var M=function(){function m(t){this.$L=x(t.locale,null,!0),this.parse(t),this.$x=this.$x||t.x||{},this[y]=!0}var v=m.prototype;return v.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(b.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var i=e.match(f);if(i){var r=i[2]-1||0,o=(i[7]||"0").substring(0,3);return n?new Date(Date.UTC(i[1],r,i[3]||1,i[4]||0,i[5]||0,i[6]||0,o)):new Date(i[1],r,i[3]||1,i[4]||0,i[5]||0,i[6]||0,o)}}return new Date(e)}(t),this.init()},v.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},v.$utils=function(){return b},v.isValid=function(){return!(this.$d.toString()===h)},v.isSame=function(t,e){var n=E(t);return this.startOf(e)<=n&&n<=this.endOf(e)},v.isAfter=function(t,e){return E(t)<this.startOf(e)},v.isBefore=function(t,e){return this.endOf(e)<E(t)},v.$g=function(t,e,n){return b.u(t)?this[e]:this.set(n,t)},v.unix=function(){return Math.floor(this.valueOf()/1e3)},v.valueOf=function(){return this.$d.getTime()},v.startOf=function(t,e){var n=this,u=!!b.u(e)||e,h=b.p(t),f=function(t,e){var i=b.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return u?i:i.endOf(a)},p=function(t,e){return b.w(n.toDate()[t].apply(n.toDate("s"),(u?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},m=this.$W,v=this.$M,k=this.$D,g="set"+(this.$u?"UTC":"");switch(h){case d:return u?f(1,0):f(31,11);case c:return u?f(1,v):f(0,v+1);case s:var $=this.$locale().weekStart||0,y=(m<$?m+7:m)-$;return f(u?k-y:k+(6-y),v);case a:case l:return p(g+"Hours",0);case o:return p(g+"Minutes",1);case r:return p(g+"Seconds",2);case i:return p(g+"Milliseconds",3);default:return this.clone()}},v.endOf=function(t){return this.startOf(t,!1)},v.$set=function(t,e){var s,u=b.p(t),h="set"+(this.$u?"UTC":""),f=(s={},s[a]=h+"Date",s[l]=h+"Date",s[c]=h+"Month",s[d]=h+"FullYear",s[o]=h+"Hours",s[r]=h+"Minutes",s[i]=h+"Seconds",s[n]=h+"Milliseconds",s)[u],p=u===a?this.$D+(e-this.$W):e;if(u===c||u===d){var m=this.clone().set(l,1);m.$d[f](p),m.init(),this.$d=m.set(l,Math.min(this.$D,m.daysInMonth())).$d}else f&&this.$d[f](p);return this.init(),this},v.set=function(t,e){return this.clone().$set(t,e)},v.get=function(t){return this[b.p(t)]()},v.add=function(n,u){var l,h=this;n=Number(n);var f=b.p(u),p=function(t){var e=E(h);return b.w(e.date(e.date()+Math.round(t*n)),h)};if(f===c)return this.set(c,this.$M+n);if(f===d)return this.set(d,this.$y+n);if(f===a)return p(1);if(f===s)return p(7);var m=(l={},l[r]=t,l[o]=e,l[i]=1e3,l)[f]||1,v=this.$d.getTime()+n*m;return b.w(v,this)},v.subtract=function(t,e){return this.add(-1*t,e)},v.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||h;var i=t||"YYYY-MM-DDTHH:mm:ssZ",r=b.z(this),o=this.$H,a=this.$m,s=this.$M,c=n.weekdays,u=n.months,d=n.meridiem,l=function(t,n,r,o){return t&&(t[n]||t(e,i))||r[n].slice(0,o)},f=function(t){return b.s(o%12||12,t,"0")},m=d||function(t,e,n){var i=t<12?"AM":"PM";return n?i.toLowerCase():i};return i.replace(p,(function(t,i){return i||function(t){switch(t){case"YY":return String(e.$y).slice(-2);case"YYYY":return b.s(e.$y,4,"0");case"M":return s+1;case"MM":return b.s(s+1,2,"0");case"MMM":return l(n.monthsShort,s,u,3);case"MMMM":return l(u,s);case"D":return e.$D;case"DD":return b.s(e.$D,2,"0");case"d":return String(e.$W);case"dd":return l(n.weekdaysMin,e.$W,c,2);case"ddd":return l(n.weekdaysShort,e.$W,c,3);case"dddd":return c[e.$W];case"H":return String(o);case"HH":return b.s(o,2,"0");case"h":return f(1);case"hh":return f(2);case"a":return m(o,a,!0);case"A":return m(o,a,!1);case"m":return String(a);case"mm":return b.s(a,2,"0");case"s":return String(e.$s);case"ss":return b.s(e.$s,2,"0");case"SSS":return b.s(e.$ms,3,"0");case"Z":return r}return null}(t)||r.replace(":","")}))},v.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},v.diff=function(n,l,h){var f,p=this,m=b.p(l),v=E(n),k=(v.utcOffset()-this.utcOffset())*t,g=this-v,$=function(){return b.m(p,v)};switch(m){case d:f=$()/12;break;case c:f=$();break;case u:f=$()/3;break;case s:f=(g-k)/6048e5;break;case a:f=(g-k)/864e5;break;case o:f=g/e;break;case r:f=g/t;break;case i:f=g/1e3;break;default:f=g}return h?f:b.a(f)},v.daysInMonth=function(){return this.endOf(c).$D},v.$locale=function(){return $[this.$L]},v.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),i=x(t,e,!0);return i&&(n.$L=i),n},v.clone=function(){return b.w(this.$d,this)},v.toDate=function(){return new Date(this.valueOf())},v.toJSON=function(){return this.isValid()?this.toISOString():null},v.toISOString=function(){return this.$d.toISOString()},v.toString=function(){return this.$d.toUTCString()},m}(),L=M.prototype;return E.prototype=L,[["$ms",n],["$s",i],["$m",r],["$H",o],["$W",a],["$M",c],["$y",d],["$D",l]].forEach((function(t){L[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),E.extend=function(t,e){return t.$i||(t(e,M,E),t.$i=!0),E},E.locale=x,E.isDayjs=w,E.unix=function(t){return E(1e3*t)},E.en=$[g],E.Ls=$,E.p={},E}()},8385:(t,e,n)=>{"use strict";n.d(e,{q2:()=>m,fR:()=>f,Zt:()=>l,ms:()=>h,SD:()=>v,T6:()=>d,x4:()=>u,CP:()=>p});var i=n(120),r=n.n(i),o=n(7573);const a=r().create();a.defaults.baseURL=o._,a.interceptors.request.use((t=>(t.data=JSON.stringify(t.data),t.headers={"content-type":"application/json",Authorization:`Bearer ${localStorage.getItem("token")}`},t)));const s=a;var c=function(t,e,n,i){return new(n||(n=Promise))((function(r,o){function a(t){try{c(i.next(t))}catch(t){o(t)}}function s(t){try{c(i.throw(t))}catch(t){o(t)}}function c(t){var e;t.done?r(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(a,s)}c((i=i.apply(t,e||[])).next())}))};function u(t){return c(this,void 0,void 0,(function*(){const e=o._+"/token",n=yield s.post(e,t);if(0===n.data.code)return n.data.data}))}function d(t,e){return c(this,void 0,void 0,(function*(){const n=o._+"/post/list",i={offset:t,limit:e},r=yield s.get(n,{params:i});if(0===r.data.code)return r.data.data}))}function l(t,e){return c(this,void 0,void 0,(function*(){const n=o._+"/post/list",i={offset:t,limit:e,type:"article"},r=yield s.get(n,{params:i});if(0===r.data.code)return r.data.data}))}function h(t,e){return c(this,void 0,void 0,(function*(){const n=o._+"/post/list",i={offset:t,limit:e,type:"photo"},r=yield s.get(n,{params:i});if(0===r.data.code)return r.data.data}))}function f(t){return c(this,void 0,void 0,(function*(){const e=o._+"/p?uid="+t;return 0===(yield s.delete(e)).data.code}))}function p(t,e){return c(this,void 0,void 0,(function*(){const n=o._+"/p?uid="+t,i=yield s.put(n,e);if(0===i.data.code)return i.data.msg}))}function m(t){return c(this,void 0,void 0,(function*(){const e=o._+"/p",n=yield s.post(e,t);if(0===n.data.code)return n.data.msg}))}function v(t){return c(this,void 0,void 0,(function*(){const e=o._+"/p?uid="+t,n=yield s.get(e);if(0===n.data.code)return n.data.data.post}))}},7573:(t,e,n)=>{"use strict";n.d(e,{_:()=>i});const i="https://api.kevinjobs.com:5000"},3944:(t,e,n)=>{"use strict";n.d(e,{sv:()=>u,$Y:()=>v});var i=n(959),r=n(3103),o=n(274);const a=r.ZP.div`
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
`;function u(){const[t,e]=i.useState([]);return i.createElement(a,null,i.createElement("div",null,i.createElement("h3",null,"评论")),i.createElement(s,null,i.createElement("div",{contentEditable:!0,onKeyDown:n=>{const i=n.target;"Enter"===n.key&&(n.preventDefault(),e(t.concat([{createAt:0,updateAt:0,content:i.innerText,id:void 0,uid:void 0,author:"匿名"}])))},style:{margin:8,height:84}})),i.createElement("div",{style:{marginTop:16,textAlign:"right",width:"100%"}},i.createElement(o.zx,{onClick:t=>t.preventDefault()},"提交"),i.createElement(o.zx,{onClick:t=>t.preventDefault(),danger:!0},"清空")),i.createElement("div",null,i.createElement("h4",null,"热门评论")),i.createElement("div",null,t.length?t.map((t=>i.createElement(c,{key:t.uid},i.createElement("div",{style:{color:"#777"}},t.author),i.createElement("div",null,t.content)))):"还没有评论"))}r.ZP.div`
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
`,p=r.ZP.div`
  transition: all .5s ease-in-out;
  position: fixed;
  top: 0;
  height: 100vh;
  padding: 8px 0;
  z-index: 999;
`,m=r.ZP.div`
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
`;function v(t){const{isOpen:e,onClick:n,menus:r}=t,o=(0,h.TH)(),a=t=>t.paths.join("/")===o.pathname&&e?"right-navi-menu-item actived":"right-navi-menu-item",s=t=>"hash"===t.type?"/#"+t.paths.join("/"):t.paths.join("/");return i.useEffect((()=>{const t=t=>{e&&t.preventDefault()};return window.addEventListener("wheel",t,{passive:!1}),()=>{window.removeEventListener("wheel",t)}}),[e]),i.createElement(i.Fragment,null,i.createElement(p,{className:"page-article-right-navi",style:{width:300,right:e?0:-256,backgroundColor:e?"#fff":"transparent"}},i.createElement("div",{style:{marginLeft:e?16:0,transition:"all .5s ease-in-out",cursor:"pointer"}},e?i.createElement(d.Z,{theme:"outline",size:"32",fill:"#555555",strokeWidth:2,onClick:n}):i.createElement(l.Z,{theme:"outline",size:"32",fill:"#d1d1d1",strokeWidth:2,onClick:n})),i.createElement(m,{style:{visibility:e?"visible":"hidden"}},r.map((t=>{if(2===t.paths.length&&!1!==t.show)return i.createElement("div",{className:a(t),key:t.key},i.createElement("a",{href:s(t)},t.title))})))),e&&i.createElement(f,{style:{zIndex:998}}))}},6775:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>x});var i=n(959),r=n(3103),o=n(8903),a=n(5726),s=n.n(a),c=n(4563),u=n(274),d=n(3944),l=n(7247),h=n(7573),f=n(8385),p=function(t,e,n,i){return new(n||(n=Promise))((function(r,o){function a(t){try{c(i.next(t))}catch(t){o(t)}}function s(t){try{c(i.throw(t))}catch(t){o(t)}}function c(t){var e;t.done?r(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(a,s)}c((i=i.apply(t,e||[])).next())}))};const m=r.ZP.div`
  padding: 48px 0;
`,v=r.ZP.div`
  margin: 0 auto;
  max-width: 820px;
`,k=r.ZP.div`
  width: 100%;
  margin: 16px 0;
  border-radius: 4px;
  position: relative;
  transition: all .3s ease-in-out;
  display: flex;
  &:hover {
    .cover {
      width: 46%;
    }
  }
`,g=r.ZP.div`
  width: 44%;
  min-height: 160px;
  max-height: 300px;
  transition: width .2s ease-in-out;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    cursor: pointer;
    border-radius: 4px 0 0 4px;
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
  background-color: #fff;
  cursor: pointer;
  border-radius: 4px;
`;function w(t){const e=[];for(let n=0;n<(null==t?void 0:t.length);n++){const i=t[n];i.url=h._+i.url.replace("static/","static/thumb-"),e.push(i)}return e}const x=function(){const[t,e]=i.useState(!1),[n,r]=i.useState(),[a,h]=i.useState(0),[x,E]=i.useState(!0),b=(0,o.k6)(),M=t=>{b.push(`/article/${t.uid}`)};return i.useEffect((()=>{(()=>{p(this,void 0,void 0,(function*(){const t=yield(0,f.Zt)(a,5);r(w(null==t?void 0:t.posts)),(null==t?void 0:t.amount)<5&&E(!1)}))})()}),[]),i.createElement(m,null,i.createElement(v,null,n?n.map((t=>i.createElement(k,{key:t.uid},i.createElement(g,{onClick:()=>M(t),className:"cover"},i.createElement("img",{src:t.url,alt:t.title})),i.createElement($,null,i.createElement("div",{style:{margin:16}},i.createElement("h3",{className:"info-item",onClick:()=>M(t)},t.title),i.createElement("div",{className:"info-item",style:{color:c.Z.white7}},t.excerpt),i.createElement("div",{className:"info-author-date info-item"},i.createElement("div",{className:"info-author"},t.author),i.createElement("div",{className:"info-date"},s().unix(t.updateAt).format("YYYY年M月D日")))))))):i.createElement(u.gb,null)),x&&i.createElement(y,{role:"button",onClick:()=>p(this,void 0,void 0,(function*(){const t=yield(0,f.Zt)(a+5,5);t?(r(n.concat(w(t.posts))),h(a+5)):E(!1)}))},"Load More"),i.createElement(d.$Y,{isOpen:t,onClick:()=>e(!t),menus:l.ps}))}}}]);