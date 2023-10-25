(self.webpackChunkkevinjobs=self.webpackChunkkevinjobs||[]).push([[569],{8392:(t,e,n)=>{"use strict";n.d(e,{Z:()=>i});var r=n(959);const i=(0,n(7166).a1)("menu-fold",!0,(function(t){return r.createElement("svg",{width:t.size,height:t.size,viewBox:"0 0 48 48",fill:"none"},r.createElement("path",{d:"M8 11H40",stroke:t.colors[0],strokeWidth:t.strokeWidth,strokeLinecap:t.strokeLinecap,strokeLinejoin:t.strokeLinejoin}),r.createElement("path",{d:"M8 24H40",stroke:t.colors[0],strokeWidth:t.strokeWidth,strokeLinecap:t.strokeLinecap,strokeLinejoin:t.strokeLinejoin}),r.createElement("path",{d:"M8 37H40",stroke:t.colors[0],strokeWidth:t.strokeWidth,strokeLinecap:t.strokeLinecap,strokeLinejoin:t.strokeLinejoin}),r.createElement("path",{d:"M13.6568 29.6568L8 23.9999L13.6568 18.343",stroke:t.colors[0],strokeWidth:t.strokeWidth,strokeLinecap:t.strokeLinecap,strokeLinejoin:t.strokeLinejoin}))}))},3298:(t,e,n)=>{"use strict";n.d(e,{Z:()=>i});var r=n(959);const i=(0,n(7166).a1)("menu-unfold",!0,(function(t){return r.createElement("svg",{width:t.size,height:t.size,viewBox:"0 0 48 48",fill:"none"},r.createElement("path",{d:"M8 11H40",stroke:t.colors[0],strokeWidth:t.strokeWidth,strokeLinecap:t.strokeLinecap,strokeLinejoin:t.strokeLinejoin}),r.createElement("path",{d:"M8 24H42",stroke:t.colors[0],strokeWidth:t.strokeWidth,strokeLinecap:t.strokeLinecap,strokeLinejoin:t.strokeLinejoin}),r.createElement("path",{d:"M8 37H40",stroke:t.colors[0],strokeWidth:t.strokeWidth,strokeLinecap:t.strokeLinecap,strokeLinejoin:t.strokeLinejoin}),r.createElement("path",{d:"M36.3433 29.6568L42.0001 23.9999L36.3433 18.343",stroke:t.colors[0],strokeWidth:t.strokeWidth,strokeLinecap:t.strokeLinecap,strokeLinejoin:t.strokeLinejoin}))}))},5726:function(t){t.exports=function(){"use strict";var t=6e4,e=36e5,n="millisecond",r="second",i="minute",o="hour",a="day",s="week",c="month",u="quarter",d="year",l="date",h="Invalid Date",f=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,p=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,m={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var e=["th","st","nd","rd"],n=t%100;return"["+t+(e[(n-20)%10]||e[n]||e[0])+"]"}},v=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},k={s:v,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return(e<=0?"+":"-")+v(r,2,"0")+":"+v(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,c),o=n-i<0,a=e.clone().add(r+(o?-1:1),c);return+(-(r+(n-i)/(o?i-a:a-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:c,y:d,w:s,d:a,D:l,h:o,m:i,s:r,ms:n,Q:u}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},g="en",$={};$[g]=m;var y="$isDayjsObject",w=function(t){return t instanceof L||!(!t||!t[y])},x=function t(e,n,r){var i;if(!e)return g;if("string"==typeof e){var o=e.toLowerCase();$[o]&&(i=o),n&&($[o]=n,i=o);var a=e.split("-");if(!i&&a.length>1)return t(a[0])}else{var s=e.name;$[s]=e,i=s}return!r&&i&&(g=i),i||!r&&g},M=function(t,e){if(w(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new L(n)},E=k;E.l=x,E.i=w,E.w=function(t,e){return M(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var L=function(){function m(t){this.$L=x(t.locale,null,!0),this.parse(t),this.$x=this.$x||t.x||{},this[y]=!0}var v=m.prototype;return v.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(E.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(f);if(r){var i=r[2]-1||0,o=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,o)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,o)}}return new Date(e)}(t),this.init()},v.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},v.$utils=function(){return E},v.isValid=function(){return!(this.$d.toString()===h)},v.isSame=function(t,e){var n=M(t);return this.startOf(e)<=n&&n<=this.endOf(e)},v.isAfter=function(t,e){return M(t)<this.startOf(e)},v.isBefore=function(t,e){return this.endOf(e)<M(t)},v.$g=function(t,e,n){return E.u(t)?this[e]:this.set(n,t)},v.unix=function(){return Math.floor(this.valueOf()/1e3)},v.valueOf=function(){return this.$d.getTime()},v.startOf=function(t,e){var n=this,u=!!E.u(e)||e,h=E.p(t),f=function(t,e){var r=E.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return u?r:r.endOf(a)},p=function(t,e){return E.w(n.toDate()[t].apply(n.toDate("s"),(u?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},m=this.$W,v=this.$M,k=this.$D,g="set"+(this.$u?"UTC":"");switch(h){case d:return u?f(1,0):f(31,11);case c:return u?f(1,v):f(0,v+1);case s:var $=this.$locale().weekStart||0,y=(m<$?m+7:m)-$;return f(u?k-y:k+(6-y),v);case a:case l:return p(g+"Hours",0);case o:return p(g+"Minutes",1);case i:return p(g+"Seconds",2);case r:return p(g+"Milliseconds",3);default:return this.clone()}},v.endOf=function(t){return this.startOf(t,!1)},v.$set=function(t,e){var s,u=E.p(t),h="set"+(this.$u?"UTC":""),f=(s={},s[a]=h+"Date",s[l]=h+"Date",s[c]=h+"Month",s[d]=h+"FullYear",s[o]=h+"Hours",s[i]=h+"Minutes",s[r]=h+"Seconds",s[n]=h+"Milliseconds",s)[u],p=u===a?this.$D+(e-this.$W):e;if(u===c||u===d){var m=this.clone().set(l,1);m.$d[f](p),m.init(),this.$d=m.set(l,Math.min(this.$D,m.daysInMonth())).$d}else f&&this.$d[f](p);return this.init(),this},v.set=function(t,e){return this.clone().$set(t,e)},v.get=function(t){return this[E.p(t)]()},v.add=function(n,u){var l,h=this;n=Number(n);var f=E.p(u),p=function(t){var e=M(h);return E.w(e.date(e.date()+Math.round(t*n)),h)};if(f===c)return this.set(c,this.$M+n);if(f===d)return this.set(d,this.$y+n);if(f===a)return p(1);if(f===s)return p(7);var m=(l={},l[i]=t,l[o]=e,l[r]=1e3,l)[f]||1,v=this.$d.getTime()+n*m;return E.w(v,this)},v.subtract=function(t,e){return this.add(-1*t,e)},v.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||h;var r=t||"YYYY-MM-DDTHH:mm:ssZ",i=E.z(this),o=this.$H,a=this.$m,s=this.$M,c=n.weekdays,u=n.months,d=n.meridiem,l=function(t,n,i,o){return t&&(t[n]||t(e,r))||i[n].slice(0,o)},f=function(t){return E.s(o%12||12,t,"0")},m=d||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r};return r.replace(p,(function(t,r){return r||function(t){switch(t){case"YY":return String(e.$y).slice(-2);case"YYYY":return E.s(e.$y,4,"0");case"M":return s+1;case"MM":return E.s(s+1,2,"0");case"MMM":return l(n.monthsShort,s,u,3);case"MMMM":return l(u,s);case"D":return e.$D;case"DD":return E.s(e.$D,2,"0");case"d":return String(e.$W);case"dd":return l(n.weekdaysMin,e.$W,c,2);case"ddd":return l(n.weekdaysShort,e.$W,c,3);case"dddd":return c[e.$W];case"H":return String(o);case"HH":return E.s(o,2,"0");case"h":return f(1);case"hh":return f(2);case"a":return m(o,a,!0);case"A":return m(o,a,!1);case"m":return String(a);case"mm":return E.s(a,2,"0");case"s":return String(e.$s);case"ss":return E.s(e.$s,2,"0");case"SSS":return E.s(e.$ms,3,"0");case"Z":return i}return null}(t)||i.replace(":","")}))},v.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},v.diff=function(n,l,h){var f,p=this,m=E.p(l),v=M(n),k=(v.utcOffset()-this.utcOffset())*t,g=this-v,$=function(){return E.m(p,v)};switch(m){case d:f=$()/12;break;case c:f=$();break;case u:f=$()/3;break;case s:f=(g-k)/6048e5;break;case a:f=(g-k)/864e5;break;case o:f=g/e;break;case i:f=g/t;break;case r:f=g/1e3;break;default:f=g}return h?f:E.a(f)},v.daysInMonth=function(){return this.endOf(c).$D},v.$locale=function(){return $[this.$L]},v.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=x(t,e,!0);return r&&(n.$L=r),n},v.clone=function(){return E.w(this.$d,this)},v.toDate=function(){return new Date(this.valueOf())},v.toJSON=function(){return this.isValid()?this.toISOString():null},v.toISOString=function(){return this.$d.toISOString()},v.toString=function(){return this.$d.toUTCString()},m}(),b=L.prototype;return M.prototype=b,[["$ms",n],["$s",r],["$m",i],["$H",o],["$W",a],["$M",c],["$y",d],["$D",l]].forEach((function(t){b[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),M.extend=function(t,e){return t.$i||(t(e,L,M),t.$i=!0),M},M.locale=x,M.isDayjs=w,M.unix=function(t){return M(1e3*t)},M.en=$[g],M.Ls=$,M.p={},M}()},1918:(t,e,n)=>{"use strict";n.d(e,{q2:()=>k,fR:()=>m,Zt:()=>f,ms:()=>p,SD:()=>g,T6:()=>h,x4:()=>l,CP:()=>v});var r=n(1240),i=n(120),o=n.n(i),a=n(8586);const s=o().create();let c;c=r.V.production.api.baseUrl,s.defaults.baseURL=c,s.interceptors.request.use((t=>(t.data=JSON.stringify(t.data),t.headers={"content-type":"application/json",Authorization:`Bearer ${localStorage.getItem("token")}`},t))),(0,a.ZP)(s,{retries:3});const u=s;var d=function(t,e,n,r){return new(n||(n=Promise))((function(i,o){function a(t){try{c(r.next(t))}catch(t){o(t)}}function s(t){try{c(r.throw(t))}catch(t){o(t)}}function c(t){var e;t.done?i(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(a,s)}c((r=r.apply(t,e||[])).next())}))};function l(t){return d(this,void 0,void 0,(function*(){const e=r._+"/token",n=yield u.post(e,t);if(0===n.data.code)return n.data.data}))}function h(t,e){return d(this,void 0,void 0,(function*(){const n=r._+"/post/list",i={offset:t,limit:e},o=yield u.get(n,{params:i});if(0===o.data.code)return o.data.data}))}function f(t,e){return d(this,void 0,void 0,(function*(){const n=r._+"/post/list",i={offset:t,limit:e,type:"article"},o=yield u.get(n,{params:i});if(0===o.data.code)return o.data.data}))}function p(t,e){return d(this,void 0,void 0,(function*(){const n=r._+"/post/list",i={offset:t,limit:e,type:"photo"},o=yield u.get(n,{params:i});if(0===o.data.code)return o.data.data}))}function m(t){return d(this,void 0,void 0,(function*(){const e=r._+"/p?uid="+t;return 0===(yield u.delete(e)).data.code}))}function v(t,e){return d(this,void 0,void 0,(function*(){const n=r._+"/p?uid="+t,i=yield u.put(n,e);if(0===i.data.code)return i.data.msg}))}function k(t){return d(this,void 0,void 0,(function*(){const e=r._+"/p",n=yield u.post(e,t);if(0===n.data.code)return n.data.msg}))}function g(t){return d(this,void 0,void 0,(function*(){const e=r._+"/p?uid="+t,n=yield u.get(e);if(0===n.data.code)return n.data.data.post}))}},1240:(t,e,n)=>{"use strict";n.d(e,{V:()=>r,_:()=>i});const r={develop:{api:{baseUrl:"http://localhost:5000"}},production:{api:{baseUrl:"https://api.kevinjobs.com:5000"}}},i="https://api.kevinjobs.com:5000"},3944:(t,e,n)=>{"use strict";n.d(e,{sv:()=>u,$Y:()=>v});var r=n(959),i=n(3103),o=n(274);const a=i.ZP.div`
  width: 100%;
`,s=i.ZP.div`
  width: 100%;
  height: 100px;
  border: 1px solid #999;
  border-radius: 4px;
  div {
    outline: none;
  }
`,c=i.ZP.div`
  max-width: 100%;
  border-top: 1px solid #d1d1d1;
  padding: 16px;
  div {
    padding: 4px 0;
  }
`;function u(){const[t,e]=r.useState([]);return r.createElement(a,null,r.createElement("div",null,r.createElement("h3",null,"评论")),r.createElement(s,null,r.createElement("div",{contentEditable:!0,onKeyDown:n=>{const r=n.target;"Enter"===n.key&&(n.preventDefault(),e(t.concat([{createAt:0,updateAt:0,content:r.innerText,id:void 0,uid:void 0,author:"匿名"}])))},style:{margin:8,height:84}})),r.createElement("div",{style:{marginTop:16,textAlign:"right",width:"100%"}},r.createElement(o.zx,{onClick:t=>t.preventDefault()},"提交"),r.createElement(o.zx,{onClick:t=>t.preventDefault(),danger:!0},"清空")),r.createElement("div",null,r.createElement("h4",null,"热门评论")),r.createElement("div",null,t.length?t.map((t=>r.createElement(c,{key:t.uid},r.createElement("div",{style:{color:"#777"}},t.author),r.createElement("div",null,t.content)))):"还没有评论"))}i.ZP.div`
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
`;var d=n(3298),l=n(8392),h=n(8903);const f=i.ZP.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0,0,0,0.75);
`,p=i.ZP.div`
  transition: all .5s ease-in-out;
  position: fixed;
  top: 0;
  height: 100vh;
  padding: 8px 0;
  z-index: 999;
`,m=i.ZP.div`
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
`;function v(t){const{isOpen:e,onClick:n,menus:i}=t,o=(0,h.TH)(),a=t=>t.paths.join("/")===o.pathname&&e?"right-navi-menu-item actived":"right-navi-menu-item",s=t=>"hash"===t.type?"/#"+t.paths.join("/"):t.paths.join("/");return r.useEffect((()=>{const t=t=>{e&&t.preventDefault()};return window.addEventListener("wheel",t,{passive:!1}),()=>{window.removeEventListener("wheel",t)}}),[e]),r.createElement(r.Fragment,null,r.createElement(p,{className:"page-article-right-navi",style:{width:300,right:e?0:-256,backgroundColor:e?"#fff":"transparent"}},r.createElement("div",{style:{marginLeft:e?16:0,transition:"all .5s ease-in-out",cursor:"pointer"}},e?r.createElement(d.Z,{theme:"outline",size:"32",fill:"#555555",strokeWidth:2,onClick:n}):r.createElement(l.Z,{theme:"outline",size:"32",fill:"#d1d1d1",strokeWidth:2,onClick:n})),r.createElement(m,{style:{visibility:e?"visible":"hidden"}},i.map((t=>{if(2===t.paths.length&&!1!==t.show)return r.createElement("div",{className:a(t),key:t.key},r.createElement("a",{href:s(t)},t.title))})))),e&&r.createElement(f,{style:{zIndex:998}}))}},1569:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>k});var r=n(959),i=n(3103),o=n(5726),a=n.n(o),s=n(8903),c=n(274),u=n(1918),d=n(3944),l=n(7247),h=n(4563),f=function(t,e,n,r){return new(n||(n=Promise))((function(i,o){function a(t){try{c(r.next(t))}catch(t){o(t)}}function s(t){try{c(r.throw(t))}catch(t){o(t)}}function c(t){var e;t.done?i(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(a,s)}c((r=r.apply(t,e||[])).next())}))};const p=i.ZP.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 32px 16px;
  background-color: #fff;
`,m=i.ZP.div`
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
    color: ${h.Z.white7};
    font-size: 0.9rem;
  }
  .date {
    padding: 16px 16px 0 16px;
    color: ${h.Z.white7};
    font-size: 0.9rem;
  }
`,v=i.ZP.div`
  line-height: 1.8;
  padding: 0 16px 32px 16px;
`;function k(){const[t,e]=r.useState(),[n,i]=r.useState(!1),o=(0,s.UO)();return r.useEffect((()=>{const{uid:t}=o;(()=>{f(this,void 0,void 0,(function*(){const n=yield(0,u.SD)(t);e(n)}))})()}),[]),r.createElement(p,null,t?g(t):r.createElement(c.gb,null),r.createElement("div",{style:{marginTop:64,maxWidth:1e3,padding:16}},r.createElement(d.sv,null)),r.createElement(d.$Y,{menus:l.ps,isOpen:n,onClick:t=>{t.preventDefault(),i(!n)}}))}const g=t=>r.createElement("div",{className:"article-content"},r.createElement(m,{className:"article-page-header"},r.createElement("h2",null,t.title),r.createElement("div",{className:"author"},t.author),r.createElement("div",{className:"date"},a().unix(Number(String(t.createAt).slice(0,10))).format("YYYY年M月D日"))),r.createElement(v,null,r.createElement("div",{dangerouslySetInnerHTML:{__html:t.content}})))}}]);