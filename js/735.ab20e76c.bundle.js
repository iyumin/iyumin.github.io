(self.webpackChunkkevinjobs=self.webpackChunkkevinjobs||[]).push([[735],{5726:function(t){t.exports=function(){"use strict";var t=1e3,e=6e4,n=36e5,r="millisecond",i="second",a="minute",s="hour",o="day",u="week",c="month",d="quarter",l="year",h="date",f="Invalid Date",m=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,p=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,v={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var e=["th","st","nd","rd"],n=t%100;return"["+t+(e[(n-20)%10]||e[n]||e[0])+"]"}},$=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},g={s:$,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return(e<=0?"+":"-")+$(r,2,"0")+":"+$(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,c),a=n-i<0,s=e.clone().add(r+(a?-1:1),c);return+(-(r+(n-i)/(a?i-s:s-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:c,y:l,w:u,d:o,D:h,h:s,m:a,s:i,ms:r,Q:d}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},y="en",w={};w[y]=v;var b="$isDayjsObject",S=function(t){return t instanceof k||!(!t||!t[b])},x=function t(e,n,r){var i;if(!e)return y;if("string"==typeof e){var a=e.toLowerCase();w[a]&&(i=a),n&&(w[a]=n,i=a);var s=e.split("-");if(!i&&s.length>1)return t(s[0])}else{var o=e.name;w[o]=e,i=o}return!r&&i&&(y=i),i||!r&&y},M=function(t,e){if(S(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new k(n)},D=g;D.l=x,D.i=S,D.w=function(t,e){return M(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var k=function(){function v(t){this.$L=x(t.locale,null,!0),this.parse(t),this.$x=this.$x||t.x||{},this[b]=!0}var $=v.prototype;return $.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(D.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(m);if(r){var i=r[2]-1||0,a=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,a)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,a)}}return new Date(e)}(t),this.init()},$.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},$.$utils=function(){return D},$.isValid=function(){return!(this.$d.toString()===f)},$.isSame=function(t,e){var n=M(t);return this.startOf(e)<=n&&n<=this.endOf(e)},$.isAfter=function(t,e){return M(t)<this.startOf(e)},$.isBefore=function(t,e){return this.endOf(e)<M(t)},$.$g=function(t,e,n){return D.u(t)?this[e]:this.set(n,t)},$.unix=function(){return Math.floor(this.valueOf()/1e3)},$.valueOf=function(){return this.$d.getTime()},$.startOf=function(t,e){var n=this,r=!!D.u(e)||e,d=D.p(t),f=function(t,e){var i=D.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return r?i:i.endOf(o)},m=function(t,e){return D.w(n.toDate()[t].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},p=this.$W,v=this.$M,$=this.$D,g="set"+(this.$u?"UTC":"");switch(d){case l:return r?f(1,0):f(31,11);case c:return r?f(1,v):f(0,v+1);case u:var y=this.$locale().weekStart||0,w=(p<y?p+7:p)-y;return f(r?$-w:$+(6-w),v);case o:case h:return m(g+"Hours",0);case s:return m(g+"Minutes",1);case a:return m(g+"Seconds",2);case i:return m(g+"Milliseconds",3);default:return this.clone()}},$.endOf=function(t){return this.startOf(t,!1)},$.$set=function(t,e){var n,u=D.p(t),d="set"+(this.$u?"UTC":""),f=(n={},n[o]=d+"Date",n[h]=d+"Date",n[c]=d+"Month",n[l]=d+"FullYear",n[s]=d+"Hours",n[a]=d+"Minutes",n[i]=d+"Seconds",n[r]=d+"Milliseconds",n)[u],m=u===o?this.$D+(e-this.$W):e;if(u===c||u===l){var p=this.clone().set(h,1);p.$d[f](m),p.init(),this.$d=p.set(h,Math.min(this.$D,p.daysInMonth())).$d}else f&&this.$d[f](m);return this.init(),this},$.set=function(t,e){return this.clone().$set(t,e)},$.get=function(t){return this[D.p(t)]()},$.add=function(r,d){var h,f=this;r=Number(r);var m=D.p(d),p=function(t){var e=M(f);return D.w(e.date(e.date()+Math.round(t*r)),f)};if(m===c)return this.set(c,this.$M+r);if(m===l)return this.set(l,this.$y+r);if(m===o)return p(1);if(m===u)return p(7);var v=(h={},h[a]=e,h[s]=n,h[i]=t,h)[m]||1,$=this.$d.getTime()+r*v;return D.w($,this)},$.subtract=function(t,e){return this.add(-1*t,e)},$.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||f;var r=t||"YYYY-MM-DDTHH:mm:ssZ",i=D.z(this),a=this.$H,s=this.$m,o=this.$M,u=n.weekdays,c=n.months,d=n.meridiem,l=function(t,n,i,a){return t&&(t[n]||t(e,r))||i[n].slice(0,a)},h=function(t){return D.s(a%12||12,t,"0")},m=d||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r};return r.replace(p,(function(t,r){return r||function(t){switch(t){case"YY":return String(e.$y).slice(-2);case"YYYY":return D.s(e.$y,4,"0");case"M":return o+1;case"MM":return D.s(o+1,2,"0");case"MMM":return l(n.monthsShort,o,c,3);case"MMMM":return l(c,o);case"D":return e.$D;case"DD":return D.s(e.$D,2,"0");case"d":return String(e.$W);case"dd":return l(n.weekdaysMin,e.$W,u,2);case"ddd":return l(n.weekdaysShort,e.$W,u,3);case"dddd":return u[e.$W];case"H":return String(a);case"HH":return D.s(a,2,"0");case"h":return h(1);case"hh":return h(2);case"a":return m(a,s,!0);case"A":return m(a,s,!1);case"m":return String(s);case"mm":return D.s(s,2,"0");case"s":return String(e.$s);case"ss":return D.s(e.$s,2,"0");case"SSS":return D.s(e.$ms,3,"0");case"Z":return i}return null}(t)||i.replace(":","")}))},$.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},$.diff=function(r,h,f){var m,p=this,v=D.p(h),$=M(r),g=($.utcOffset()-this.utcOffset())*e,y=this-$,w=function(){return D.m(p,$)};switch(v){case l:m=w()/12;break;case c:m=w();break;case d:m=w()/3;break;case u:m=(y-g)/6048e5;break;case o:m=(y-g)/864e5;break;case s:m=y/n;break;case a:m=y/e;break;case i:m=y/t;break;default:m=y}return f?m:D.a(m)},$.daysInMonth=function(){return this.endOf(c).$D},$.$locale=function(){return w[this.$L]},$.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=x(t,e,!0);return r&&(n.$L=r),n},$.clone=function(){return D.w(this.$d,this)},$.toDate=function(){return new Date(this.valueOf())},$.toJSON=function(){return this.isValid()?this.toISOString():null},$.toISOString=function(){return this.$d.toISOString()},$.toString=function(){return this.$d.toUTCString()},v}(),O=k.prototype;return M.prototype=O,[["$ms",r],["$s",i],["$m",a],["$H",s],["$W",o],["$M",c],["$y",l],["$D",h]].forEach((function(t){O[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),M.extend=function(t,e){return t.$i||(t(e,k,M),t.$i=!0),M},M.locale=x,M.isDayjs=S,M.unix=function(t){return M(1e3*t)},M.en=w[y],M.Ls=w,M.p={},M}()},7964:(t,e,n)=>{"use strict";n.d(e,{Gm:()=>o,ZE:()=>i,fo:()=>a,mS:()=>s,uh:()=>u});var r=n(1104);const i=r._+"/token",a=r._+"/post/list",s=r._+"/p",o=r._+"/user/list",u=r._+"/user"},8519:(t,e,n)=>{"use strict";n.d(e,{CP:()=>c,SD:()=>l,T6:()=>o,fR:()=>u,q2:()=>d});var r=n(891),i=n(7964),a=function(t,e,n,r){return new(n||(n=Promise))((function(i,a){function s(t){try{u(r.next(t))}catch(t){a(t)}}function o(t){try{u(r.throw(t))}catch(t){a(t)}}function u(t){var e;t.done?i(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(s,o)}u((r=r.apply(t,e||[])).next())}))};const s=t=>Number(String(t).slice(0,10));function o(t,e,n){return a(this,void 0,void 0,(function*(){let a={offset:t,limit:e,status:"publish"};n&&(a=Object.assign(Object.assign({},a),n));const o=yield r.Z.get(i.fo,{params:a});if(0===o.data.code){const t=o.data,e=t.data.posts;return t.data.posts=e.map((t=>(t.createAt=s(t.createAt),t.updateAt=s(t.updateAt),t.publishAt=s(t.publishAt),t))),t}return o.data.msg}))}function u(t){return a(this,void 0,void 0,(function*(){const e=yield r.Z.delete(i.mS,{params:{uid:t}});return 0===e.data.code?e.data:e.data.msg}))}function c(t,e){return a(this,void 0,void 0,(function*(){const n=yield r.Z.put(i.mS,e,{params:{uid:t}});return 0===n.data.code?n.data:n.data.msg}))}function d(t){return a(this,void 0,void 0,(function*(){const e=yield r.Z.post(i.mS,t);return 0===e.data.code?e.data:e.data.msg}))}function l(t){return a(this,void 0,void 0,(function*(){const e=yield r.Z.get(i.mS,{params:{uid:t}});if(0===e.data.code){const t=e.data;return t.data.post.updateAt=s(t.data.post.updateAt),t.data.post.createAt=s(t.data.post.createAt),t.data.post.publishAt=s(t.data.post.publishAt),t}return e.data.msg}))}},6395:(t,e,n)=>{"use strict";n.d(e,{O:()=>o});var r=n(959),i=n(3103),a=n(6824);const s=i.ZP.div`
  position: relative;
  background-color: ${a.Z.white3};
  overflow: hidden;
  &::after {
    display: block;
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    transform: translateX(-100%);
    background: linear-gradient(90deg, transparent, rgba(216, 216, 216, 0.253), transparent);
    animation: loading 1.5s infinite;
  }
  @keyframes loading {
    from { left: -100%; }
    to { left: 120%; }
  }
`;function o({width:t="100%",height:e=16}){return r.createElement(s,{className:"component-skeleton",style:{width:t,height:e}})}},1104:(t,e,n)=>{"use strict";n.d(e,{_:()=>r});const r="https://api.kevinjobs.com:5000"},4735:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>b});var r=n(959),i=n(3103),a=n(1298),s=n(5726),o=n.n(s),u=n(6824),c=n(6395),d=n(1104),l=n(8519),h=function(t,e,n,r){return new(n||(n=Promise))((function(i,a){function s(t){try{u(r.next(t))}catch(t){a(t)}}function o(t){try{u(r.throw(t))}catch(t){a(t)}}function u(t){var e;t.done?i(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(s,o)}u((r=r.apply(t,e||[])).next())}))};const f=i.ZP.div`
  padding: 48px 0;
  background-color: ${u.Z.white};
`,m=i.ZP.div`
  margin: 0 auto;
  max-width: 820px;
`,p=i.ZP.div`
  width: 100%;
  margin: 16px 0;
  border-radius: 5px;
  position: relative;
  transition: all .3s ease-in-out;
  display: flex;
  border: 1px solid ${u.Z.white4};
  &:hover {
    border-color: ${u.Z.primary};
  }
`,v=i.ZP.div`
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
`,$=i.ZP.div`
  position: relative;
  width: 56%;
  color: ${u.Z.dark};
  border-radius: 0 4px 4px 0;
  flex-grow: 1;
  h3.info-item {
    cursor: pointer;
    &:hover {
      color: ${u.Z.blue};
    }
  }
  .info-author-date {
    position: absolute;
    left: 16px;
    bottom: 16px;
    font-size: 12px;
    color: ${u.Z.dark};
    .info-author,.info-date {
      display: inline-block;
      margin-right: 16px;
    }
    .info-date {
      color: ${u.Z.white6};
    }
  }
`,g=i.ZP.div`
  max-width: 820px;
  margin: 0 auto;
  padding: 16px 0;
  text-align: center;
  border: 1px solid ${u.Z.white4};
  cursor: pointer;
  border-radius: 4px;
  &:hover {
    border-color: ${u.Z.primary};
  }
`,y=i.ZP.div`
  background-color: ${u.Z.white1};
  margin: 8px 0;
  display: flex;
  .right {
    margin-left: 16px;
  }
  .item {
    margin: 0 0 20px 0;
  }
`;function w(t){const e=[];for(let n=0;n<(null==t?void 0:t.length);n++){const r=t[n];r.url=d._+r.url.replace("static/","static/thumb-"),e.push(r)}return e}function b(){const[t,e]=r.useState(),[n,i]=r.useState(0),[s,c]=r.useState(!0),d=(0,a.s0)(),y=t=>{d(`/article/${t.uid}`)};return r.useEffect((()=>{(()=>{h(this,void 0,void 0,(function*(){const t=yield(0,l.T6)(n,5,{type:"article"});"string"!=typeof t&&(e(w(t.data.posts)),t.data.amount<5&&c(!1))}))})()}),[]),r.createElement(f,null,r.createElement(m,null,t?t.map((t=>r.createElement(p,{key:t.uid},r.createElement(v,{onClick:()=>y(t),className:"cover"},r.createElement("img",{src:t.url,alt:t.title})),r.createElement($,null,r.createElement("div",{style:{margin:16}},r.createElement("h3",{className:"info-item",onClick:()=>y(t)},t.title),r.createElement("div",{className:"info-item",style:{color:u.Z.white7}},t.excerpt),r.createElement("div",{className:"info-author-date info-item"},r.createElement("div",{className:"info-author"},t.author),r.createElement("div",{className:"info-date"},o().unix(t.updateAt).format("YYYY年M月D日")))))))):S()),s&&r.createElement(g,{role:"button",onClick:()=>h(this,void 0,void 0,(function*(){const r=yield(0,l.T6)(n+5,5,{type:"article"});"string"!=typeof r?(e(t.concat(w(r.data.posts))),i(n+5)):c(!1)}))},"点击加载更多"))}const S=()=>{const t=[];for(let e=0;e<6;e++)t.push(r.createElement(y,{className:"wait"},r.createElement("div",{className:"left"},r.createElement(c.O,{height:200,width:320})),r.createElement("div",{className:"right"},r.createElement("div",{className:"item"},r.createElement(c.O,{height:20,width:460})),r.createElement("div",{className:"item"},r.createElement(c.O,{height:16,width:260})),r.createElement("div",{className:"item"},r.createElement(c.O,{height:16,width:180})),r.createElement("div",{className:"item"},r.createElement(c.O,{height:16,width:240})),r.createElement("div",{className:"item"},r.createElement(c.O,{height:16,width:300})),r.createElement("div",{className:"item"},r.createElement(c.O,{height:12,width:380})))));return t}},891:(t,e,n)=>{"use strict";n.d(e,{Z:()=>o});var r=n(120),i=n.n(r),a=n(1104);const s=i().create();s.defaults.baseURL=a._,s.interceptors.request.use((t=>(t.data=JSON.stringify(t.data),t.headers={"content-type":"application/json",Authorization:`Bearer ${localStorage.getItem("token")}`},t)));const o=s}}]);