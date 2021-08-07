(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[492],{70058:function(t,e,n){"use strict";n.d(e,{J:function(){return u}});var i=n(90063),r=n(90227),s=n(84461),a=n(73808),c=n(67294);function o(){return(o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t}).apply(this,arguments)}var l={path:c.createElement("g",{stroke:"currentColor",strokeWidth:"1.5"},c.createElement("path",{strokeLinecap:"round",fill:"none",d:"M9,9a3,3,0,1,1,4,2.829,1.5,1.5,0,0,0-1,1.415V14.25"}),c.createElement("path",{fill:"currentColor",strokeLinecap:"round",d:"M12,17.25a.375.375,0,1,0,.375.375A.375.375,0,0,0,12,17.25h0"}),c.createElement("circle",{fill:"none",strokeMiterlimit:"10",cx:"12",cy:"12",r:"11.25"})),viewBox:"0 0 24 24"},u=(0,i.G)(((t,e)=>{var{as:n,viewBox:i,color:a="currentColor",focusable:u=!1,children:d,className:h,__css:f}=t,m=function(t,e){if(null==t)return{};var n,i,r={},s=Object.keys(t);for(i=0;i<s.length;i++)n=s[i],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,["as","viewBox","color","focusable","children","className","__css"]),v={ref:e,focusable:u,className:(0,s.cx)("chakra-icon",h),__css:o({w:"1em",h:"1em",display:"inline-block",lineHeight:"1em",flexShrink:0,color:a},f)},p=null!=i?i:l.viewBox;if(n&&"string"!==typeof n)return c.createElement(r.m$.svg,o({as:n},v,m));var g=null!=d?d:l.path;return c.createElement(r.m$.svg,o({verticalAlign:"middle",viewBox:p},v,m),g)}));a.Ts&&(u.displayName="Icon")},336:function(t,e,n){"use strict";n.d(e,{X:function(){return d}});var i=n(90063),r=n(2326),s=n(55284),a=n(90227),c=n(84461),o=n(73808),l=n(67294);function u(){return(u=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t}).apply(this,arguments)}var d=(0,i.G)(((t,e)=>{var n=(0,r.m)("Heading",t),i=function(t,e){if(null==t)return{};var n,i,r={},s=Object.keys(t);for(i=0;i<s.length;i++)n=s[i],e.indexOf(n)>=0||(r[n]=t[n]);return r}((0,s.Lr)(t),["className"]);return l.createElement(a.m$.h2,u({ref:e,className:(0,c.cx)("chakra-heading",t.className)},i,{__css:n}))}));o.Ts&&(d.displayName="Heading")},35528:function(t,e,n){"use strict";n.d(e,{Vp:function(){return h}});var i=n(70058),r=n(90063),s=n(2326),a=n(55284),c=n(29676),o=n(90227),l=n(73808),u=n(67294);function d(){return(d=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t}).apply(this,arguments)}var h=(0,r.G)(((t,e)=>{var n=(0,s.j)("Tag",t),i=(0,a.Lr)(t),r=d({display:"inline-flex",verticalAlign:"top",alignItems:"center",maxWidth:"100%"},n.container);return u.createElement(c.Fo,{value:n},u.createElement(o.m$.span,d({ref:e},i,{__css:r})))}));l.Ts&&(h.displayName="Tag");var f=(0,r.G)(((t,e)=>{var n=(0,c.yK)();return u.createElement(o.m$.span,d({ref:e,isTruncated:!0},t,{__css:n.label}))}));l.Ts&&(f.displayName="TagLabel");var m=(0,r.G)(((t,e)=>u.createElement(i.J,d({ref:e,verticalAlign:"top",marginEnd:"0.5rem"},t))));l.Ts&&(m.displayName="TagLeftIcon");var v=(0,r.G)(((t,e)=>u.createElement(i.J,d({ref:e,verticalAlign:"top",marginStart:"0.5rem"},t))));l.Ts&&(v.displayName="TagRightIcon");var p=t=>u.createElement(i.J,d({verticalAlign:"inherit",viewBox:"0 0 512 512"},t),u.createElement("path",{fill:"currentColor",d:"M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z"}));l.Ts&&(p.displayName="TagCloseIcon");l.Ts},27484:function(t){t.exports=function(){"use strict";var t=1e3,e=6e4,n=36e5,i="millisecond",r="second",s="minute",a="hour",c="day",o="week",l="month",u="quarter",d="year",h="date",f="Invalid Date",m=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,v=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,p={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},g=function(t,e,n){var i=String(t);return!i||i.length>=e?t:""+Array(e+1-i.length).join(n)+t},x={s:g,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),i=Math.floor(n/60),r=n%60;return(e<=0?"+":"-")+g(i,2,"0")+":"+g(r,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var i=12*(n.year()-e.year())+(n.month()-e.month()),r=e.clone().add(i,l),s=n-r<0,a=e.clone().add(i+(s?-1:1),l);return+(-(i+(n-r)/(s?r-a:a-r))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:l,y:d,w:o,d:c,D:h,h:a,m:s,s:r,ms:i,Q:u}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},y="en",$={};$[y]=p;var j=function(t){return t instanceof b},w=function(t,e,n){var i;if(!t)return y;if("string"==typeof t)$[t]&&(i=t),e&&($[t]=e,i=t);else{var r=t.name;$[r]=t,i=r}return!n&&i&&(y=i),i||!n&&y},M=function(t,e){if(j(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new b(n)},_=x;_.l=w,_.i=j,_.w=function(t,e){return M(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var b=function(){function p(t){this.$L=w(t.locale,null,!0),this.parse(t)}var g=p.prototype;return g.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(_.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var i=e.match(m);if(i){var r=i[2]-1||0,s=(i[7]||"0").substring(0,3);return n?new Date(Date.UTC(i[1],r,i[3]||1,i[4]||0,i[5]||0,i[6]||0,s)):new Date(i[1],r,i[3]||1,i[4]||0,i[5]||0,i[6]||0,s)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},g.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},g.$utils=function(){return _},g.isValid=function(){return!(this.$d.toString()===f)},g.isSame=function(t,e){var n=M(t);return this.startOf(e)<=n&&n<=this.endOf(e)},g.isAfter=function(t,e){return M(t)<this.startOf(e)},g.isBefore=function(t,e){return this.endOf(e)<M(t)},g.$g=function(t,e,n){return _.u(t)?this[e]:this.set(n,t)},g.unix=function(){return Math.floor(this.valueOf()/1e3)},g.valueOf=function(){return this.$d.getTime()},g.startOf=function(t,e){var n=this,i=!!_.u(e)||e,u=_.p(t),f=function(t,e){var r=_.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return i?r:r.endOf(c)},m=function(t,e){return _.w(n.toDate()[t].apply(n.toDate("s"),(i?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},v=this.$W,p=this.$M,g=this.$D,x="set"+(this.$u?"UTC":"");switch(u){case d:return i?f(1,0):f(31,11);case l:return i?f(1,p):f(0,p+1);case o:var y=this.$locale().weekStart||0,$=(v<y?v+7:v)-y;return f(i?g-$:g+(6-$),p);case c:case h:return m(x+"Hours",0);case a:return m(x+"Minutes",1);case s:return m(x+"Seconds",2);case r:return m(x+"Milliseconds",3);default:return this.clone()}},g.endOf=function(t){return this.startOf(t,!1)},g.$set=function(t,e){var n,o=_.p(t),u="set"+(this.$u?"UTC":""),f=(n={},n[c]=u+"Date",n[h]=u+"Date",n[l]=u+"Month",n[d]=u+"FullYear",n[a]=u+"Hours",n[s]=u+"Minutes",n[r]=u+"Seconds",n[i]=u+"Milliseconds",n)[o],m=o===c?this.$D+(e-this.$W):e;if(o===l||o===d){var v=this.clone().set(h,1);v.$d[f](m),v.init(),this.$d=v.set(h,Math.min(this.$D,v.daysInMonth())).$d}else f&&this.$d[f](m);return this.init(),this},g.set=function(t,e){return this.clone().$set(t,e)},g.get=function(t){return this[_.p(t)]()},g.add=function(i,u){var h,f=this;i=Number(i);var m=_.p(u),v=function(t){var e=M(f);return _.w(e.date(e.date()+Math.round(t*i)),f)};if(m===l)return this.set(l,this.$M+i);if(m===d)return this.set(d,this.$y+i);if(m===c)return v(1);if(m===o)return v(7);var p=(h={},h[s]=e,h[a]=n,h[r]=t,h)[m]||1,g=this.$d.getTime()+i*p;return _.w(g,this)},g.subtract=function(t,e){return this.add(-1*t,e)},g.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||f;var i=t||"YYYY-MM-DDTHH:mm:ssZ",r=_.z(this),s=this.$H,a=this.$m,c=this.$M,o=n.weekdays,l=n.months,u=function(t,n,r,s){return t&&(t[n]||t(e,i))||r[n].substr(0,s)},d=function(t){return _.s(s%12||12,t,"0")},h=n.meridiem||function(t,e,n){var i=t<12?"AM":"PM";return n?i.toLowerCase():i},m={YY:String(this.$y).slice(-2),YYYY:this.$y,M:c+1,MM:_.s(c+1,2,"0"),MMM:u(n.monthsShort,c,l,3),MMMM:u(l,c),D:this.$D,DD:_.s(this.$D,2,"0"),d:String(this.$W),dd:u(n.weekdaysMin,this.$W,o,2),ddd:u(n.weekdaysShort,this.$W,o,3),dddd:o[this.$W],H:String(s),HH:_.s(s,2,"0"),h:d(1),hh:d(2),a:h(s,a,!0),A:h(s,a,!1),m:String(a),mm:_.s(a,2,"0"),s:String(this.$s),ss:_.s(this.$s,2,"0"),SSS:_.s(this.$ms,3,"0"),Z:r};return i.replace(v,(function(t,e){return e||m[t]||r.replace(":","")}))},g.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},g.diff=function(i,h,f){var m,v=_.p(h),p=M(i),g=(p.utcOffset()-this.utcOffset())*e,x=this-p,y=_.m(this,p);return y=(m={},m[d]=y/12,m[l]=y,m[u]=y/3,m[o]=(x-g)/6048e5,m[c]=(x-g)/864e5,m[a]=x/n,m[s]=x/e,m[r]=x/t,m)[v]||x,f?y:_.a(y)},g.daysInMonth=function(){return this.endOf(l).$D},g.$locale=function(){return $[this.$L]},g.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),i=w(t,e,!0);return i&&(n.$L=i),n},g.clone=function(){return _.w(this.$d,this)},g.toDate=function(){return new Date(this.valueOf())},g.toJSON=function(){return this.isValid()?this.toISOString():null},g.toISOString=function(){return this.$d.toISOString()},g.toString=function(){return this.$d.toUTCString()},p}(),D=b.prototype;return M.prototype=D,[["$ms",i],["$s",r],["$m",s],["$H",a],["$W",c],["$M",l],["$y",d],["$D",h]].forEach((function(t){D[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),M.extend=function(t,e){return t.$i||(t(e,b,M),t.$i=!0),M},M.locale=w,M.isDayjs=j,M.unix=function(t){return M(1e3*t)},M.en=$[y],M.Ls=$,M.p={},M}()},56176:function(t){t.exports=function(){"use strict";var t={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"};return function(e,n,i){var r=n.prototype,s=r.format;i.en.formats=t,r.format=function(e){void 0===e&&(e="YYYY-MM-DDTHH:mm:ssZ");var n=this.$locale().formats,i=function(e,n){return e.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(e,i,r){var s=r&&r.toUpperCase();return i||n[r]||t[r]||n[s].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(t,e,n){return e||n.slice(1)}))}))}(e,void 0===n?{}:n);return s.call(this,i)}}}()},15311:function(t,e,n){"use strict";var i=n(85893),r=n(9008),s=function(t){var e=t.title,n=t.keywords,s=t.description;return(0,i.jsxs)(r.default,{children:[(0,i.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,i.jsx)("meta",{charSet:"utf-8"}),(0,i.jsx)("meta",{name:"keywords",content:n}),(0,i.jsx)("meta",{name:"description",content:s}),(0,i.jsx)("title",{children:e})]})};s.defaultProps={title:"Muhammad Ahmad - Full Stack Developer",keywords:"web development, programming, web design",description:"Software Engineer. Lover of web and opensource."},e.Z=s},32307:function(t,e,n){"use strict";var i=n(85893),r=n(67294),s=n(69535),a=n(15311),c={hidden:{opacity:0,x:-200,y:0},enter:{opacity:1,x:0,y:0},exit:{opacity:0,x:0,y:-100}};e.Z=function(t){var e=t.children,n=t.title,o=t.description,l=t.keywords;return(0,i.jsxs)(r.Fragment,{children:[(0,i.jsx)(a.Z,{title:n,description:o,keywords:l}),(0,i.jsx)(s.E.main,{initial:"hidden",animate:"enter",exit:"exit",variants:c,transition:{type:"linear"},children:e})]})}},26111:function(t,e,n){"use strict";n.d(e,{EY:function(){return l},eu:function(){return u},nC:function(){return d},wc:function(){return h},f6:function(){return f},eF:function(){return m},xp:function(){return v}});var i=n(85893),r=n(90454),s=n(79953),a={initial:{opacity:0,translateY:-20},enter:{transition:{staggerChildren:.15,delayChildren:.4}},exit:{transition:{staggerChildren:.05,staggerDirection:-1}}},c={initial:{opacity:0,translateY:-20},enter:{y:0,opacity:1,transition:{y:{stiffness:1e3,velocity:-100}}},exit:{y:50,opacity:0,transition:{y:{stiffness:1e3}}}},o=[.6,-.05,.01,.99],l={animate:{transition:{staggerChildren:.1}}},u={initial:{y:60,opacity:0,transition:{duration:.6,ease:o}},animate:{y:0,opacity:1,transition:{duration:.6,ease:o}}},d={hidden:{opacity:1,scale:0},visible:{opacity:1,scale:1,transition:{delayChildren:.3,staggerChildren:.2}}},h={hidden:{y:20,opacity:0},visible:{y:0,opacity:1}},f=function(t){var e=t.children;return(0,i.jsx)(r.R,{in:!0,children:e})},m=function(t){var e=t.children;return(0,i.jsx)(s.uH,{animate:{opacity:1,translateY:0},variants:a,children:e})},v=function(t){var e=t.children;return(0,i.jsx)(s.uH,{variants:c,children:e})}},47301:function(t,e,n){"use strict";n.r(e),n.d(e,{__N_SSG:function(){return _},default:function(){return b}});var i=n(85893),r=n(40980),s=n(86034),a=n(336),c=n(35528),o=n(94096),l=n(64115),u=n(48017),d=n(69857),h=n(27484),f=n.n(h),m=n(56176),v=n.n(m),p=n(32307),g=n(79953),x=n(49444),y=n(70058),$=n(89583),j=function(t){var e=t.href;return(0,i.jsx)(o.k,{justifyContent:"center",marginTop:"7",children:(0,i.jsxs)(x.r,{href:e,isExternal:!0,children:[(0,i.jsx)(l.x,{marginBottom:"2",fontSize:"2xl",fontWeight:"400",children:"React, comment and follow on"}),(0,i.jsx)(y.J,{as:$.CUm,w:12,h:12})]})})},w=n(26111),M=n(69535);f().extend(v());var _=!0,b=function(t){var e=t.articleContent,n=t.blogDetails,h=(0,r.useColorModeValue)("gray.500","gray.200");return(0,i.jsx)(p.Z,{title:null===n||void 0===n?void 0:n.title,description:null===n||void 0===n?void 0:n.description,children:(0,i.jsxs)(M.E.div,{initial:"initial",animate:"animate",variants:w.EY,children:[(0,i.jsxs)(s.gC,{marginBottom:"5",alignItems:"left",textAlign:"left",children:[null!==n&&void 0!==n&&n.cover_image?(0,i.jsx)(g.Jd,{src:n.cover_image,variants:w.eu,layout:"fixed",rounded:"md"}):"",(0,i.jsx)(M.E.div,{variants:w.eu,children:(0,i.jsx)(a.X,{as:"h1",size:"lg",children:null===n||void 0===n?void 0:n.title})}),(0,i.jsx)(M.E.div,{variants:w.eu,children:(0,i.jsxs)(s.Ug,{justifyContent:"space-between",isInline:!0,flexDirection:["column","row","row"],children:[(0,i.jsx)(s.Ug,{spacing:1,alignItems:"center",children:null===n||void 0===n?void 0:n.tags.map((function(t){return(0,i.jsx)(c.Vp,{size:"md",padding:"0 3px",colorScheme:(0,d.v)(t),children:t},t)}))}),(0,i.jsxs)(s.Ug,{spacing:2,isInline:!0,pt:["0.5rem","0","0"],children:[null!==n&&void 0!==n&&n.public_reactions_count?(0,i.jsxs)(o.k,{alignItems:"center",children:[(0,i.jsx)(l.x,{fontSize:"sm",noOfLines:1,fontWeight:"400",align:"left",color:h,children:n.public_reactions_count}),"\xa0",(0,i.jsx)("svg",{id:"Capa_1",enableBackground:"new 0 0 512 512",height:"20px",viewBox:"0 0 512 512",width:"20px",xmlns:"http://www.w3.org/2000/svg",children:(0,i.jsxs)("g",{children:[(0,i.jsx)("path",{d:"m445.936 20.657h-379.872c-19.731 0-37.443 8.649-49.548 22.364l-6.403 43.701v239.535c0 36.486 19.465 66.064 55.951 66.064h89.427c6.57 0 12.872 10.817 17.518 15.463l77.704 77.704 16.721 2.268c.95-.664 1.856-1.42 2.704-2.268l77.704-77.704c4.646-4.646 10.948-7.256 17.518-7.256h80.577c36.486 0 66.064-29.578 66.064-66.064v-247.742c-.001-36.487-29.579-66.065-66.065-66.065z",fill:"#ff7e92"}),(0,i.jsx)("path",{d:"m164.159 407.784 77.704 77.704c6.959 6.959 17.774 7.714 25.57 2.268l-91.595-91.65c-7.685-7.685-18.323-12.093-29.194-12.093h-80.579c-27.323 0-49.548-22.226-49.548-49.548v-291.444c-10.25 11.639-16.517 26.973-16.517 43.701v247.742c0 36.486 29.578 66.065 66.065 66.065h80.577c6.57-.001 12.872 2.609 17.517 7.255z",fill:"#ff5f7a"}),(0,i.jsx)("path",{d:"m387.626 177.951c-4.003-35.677-34.163-63.99-69.988-66.315-21.701-1.408-41.538 6.405-56.107 19.853-3.135 2.894-7.926 2.894-11.062 0-14.569-13.448-34.406-21.261-56.107-19.853-8.653.562-16.976 2.639-24.679 5.971-24.19 10.461-40.655 60.344-40.655 60.344-8.486 75.632 93.735 136.686 124.126 154.751l21.005-.808c37.878-23.988 121.196-85.05 113.467-153.943z",fill:"#fff"}),(0,i.jsx)("path",{d:"m142.235 167.09c2.224-19.818 12.594-37.402 27.447-49.483-24.153 10.475-42.275 33.311-45.309 60.344-8.485 75.632 92.757 141.829 123.148 159.894 5.245 3.117 11.712 3.117 16.957 0 2.702-1.606 5.985-3.61 9.68-5.95-19.374-10.919-141.105-82.962-131.923-164.805z",fill:"#ffdbde"})]})})]}):"",null!==n&&void 0!==n&&n.comments_count?(0,i.jsxs)(o.k,{alignItems:"center",children:[(0,i.jsx)(l.x,{fontSize:"sm",noOfLines:1,fontWeight:"400",align:"left",color:h,children:n.comments_count}),"\xa0",(0,i.jsxs)("svg",{id:"Capa_1",enableBackground:"new 0 0 512 512",height:"20px",viewBox:"0 0 512 512",width:"20px",xmlns:"http://www.w3.org/2000/svg",children:[(0,i.jsx)("path",{d:"m438.983 11.549h-276.72c-36.094 0-65.625 29.531-65.625 65.625v22.33h250.317c36.094 0 65.625 29.531 65.625 65.625v163.609h26.404c36.094 0 65.625-29.531 65.625-65.625v-185.939c0-36.094-29.532-65.625-65.626-65.625z",fill:"#6c7ed6"}),(0,i.jsx)("path",{d:"m392.454 96.504h-276.72c-6.636 0-13.047 1.006-19.096 2.86v.14h250.317c36.094 0 65.625 29.531 65.625 65.625v163.609h26.404c6.636 0 13.047-1.006 19.096-2.86v-163.748c0-36.094-29.532-65.626-65.626-65.626z",fill:"#4f67d2"}),(0,i.jsx)("path",{d:"m349.954 96.504h-276.72c-36.094 0-65.625 29.531-65.625 65.625v185.939c0 36.094 29.531 65.625 65.625 65.625h166.083c7.12 0 12.435 6.626 10.807 13.557-4.404 18.751-11.144 38.581-21.107 58.908-4.474 9.129 5.704 18.41 14.349 13.06 24.997-15.47 60.562-41.362 90.512-77.964 3.937-4.811 9.858-7.561 16.075-7.561 36.094 0 65.625-29.531 65.625-65.625v-185.938c.002-36.094-29.53-65.626-65.624-65.626z",fill:"#60b8fe"}),(0,i.jsx)("path",{d:"m292.624 427.25c1.628-6.932-3.687-13.557-10.807-13.557h-42.5c7.12 0 12.435 6.625 10.807 13.557-4.404 18.751-11.144 38.581-21.107 58.908-4.474 9.129 5.704 18.41 14.349 13.06 9.591-5.936 20.74-13.411 32.527-22.431 7.603-17.049 13.007-33.679 16.731-49.537z",fill:"#23a8fe"}),(0,i.jsx)("path",{d:"m50.109 348.068v-185.938c0-36.094 29.531-65.625 65.625-65.625h-42.5c-36.094 0-65.625 29.531-65.625 65.625v185.938c0 36.094 29.531 65.625 65.625 65.625h42.5c-36.094 0-65.625-29.531-65.625-65.625z",fill:"#23a8fe"}),(0,i.jsxs)("g",{fill:"#dfebfa",children:[(0,i.jsx)("circle",{cx:"98.577",cy:"260.439",r:"21.777"}),(0,i.jsx)("circle",{cx:"168.914",cy:"260.439",r:"21.777"}),(0,i.jsx)("circle",{cx:"239.251",cy:"260.439",r:"21.777"}),(0,i.jsx)("circle",{cx:"309.588",cy:"260.439",r:"21.777"})]}),(0,i.jsx)("path",{d:"m98.577 260.439c0-8.059 4.381-15.091 10.888-18.856-3.204-1.854-6.92-2.921-10.888-2.921-12.027 0-21.777 9.75-21.777 21.777s9.75 21.777 21.777 21.777c3.968 0 7.685-1.066 10.888-2.92-6.507-3.767-10.888-10.798-10.888-18.857z",fill:"#b1dbfc"}),(0,i.jsx)("path",{d:"m168.914 260.439c0-8.059 4.381-15.091 10.888-18.856-3.204-1.854-6.92-2.921-10.888-2.921-12.027 0-21.777 9.75-21.777 21.777s9.75 21.777 21.777 21.777c3.968 0 7.685-1.066 10.888-2.92-6.507-3.767-10.888-10.798-10.888-18.857z",fill:"#b1dbfc"}),(0,i.jsx)("path",{d:"m239.251 260.439c0-8.059 4.381-15.091 10.888-18.856-3.204-1.854-6.921-2.921-10.888-2.921-12.027 0-21.777 9.75-21.777 21.777s9.75 21.777 21.777 21.777c3.968 0 7.685-1.066 10.888-2.92-6.507-3.767-10.888-10.798-10.888-18.857z",fill:"#b1dbfc"}),(0,i.jsx)("path",{d:"m309.588 260.439c0-8.059 4.381-15.091 10.888-18.856-3.204-1.854-6.921-2.921-10.888-2.921-12.027 0-21.777 9.75-21.777 21.777s9.75 21.777 21.777 21.777c3.968 0 7.685-1.066 10.888-2.92-6.507-3.767-10.888-10.798-10.888-18.857z",fill:"#b1dbfc"}),(0,i.jsx)("path",{d:"m69.191 260.253c0 16.144 13.134 29.277 29.276 29.277 16.144 0 29.277-13.133 29.277-29.277 0-16.143-13.134-29.276-29.277-29.276-16.142 0-29.276 13.133-29.276 29.276zm43.554 0c0 7.872-6.405 14.277-14.277 14.277s-14.276-6.405-14.276-14.277 6.404-14.276 14.276-14.276 14.277 6.404 14.277 14.276z"}),(0,i.jsx)("path",{d:"m198.082 260.253c0-16.143-13.134-29.276-29.277-29.276s-29.276 13.133-29.276 29.276c0 16.144 13.134 29.277 29.276 29.277 16.143 0 29.277-13.133 29.277-29.277zm-43.554 0c0-7.872 6.404-14.276 14.276-14.276s14.277 6.404 14.277 14.276-6.405 14.277-14.277 14.277-14.276-6.405-14.276-14.277z"}),(0,i.jsx)("path",{d:"m268.419 260.253c0-16.143-13.134-29.276-29.277-29.276s-29.276 13.133-29.276 29.276c0 16.144 13.134 29.277 29.276 29.277 16.143 0 29.277-13.133 29.277-29.277zm-43.554 0c0-7.872 6.404-14.276 14.276-14.276s14.277 6.404 14.277 14.276-6.405 14.277-14.277 14.277-14.276-6.405-14.276-14.277z"}),(0,i.jsx)("path",{d:"m338.756 260.253c0-16.143-13.134-29.276-29.277-29.276s-29.276 13.133-29.276 29.276c0 16.144 13.134 29.277 29.276 29.277 16.143 0 29.277-13.133 29.277-29.277zm-43.554 0c0-7.872 6.404-14.276 14.276-14.276s14.277 6.404 14.277 14.276-6.405 14.277-14.277 14.277-14.276-6.405-14.276-14.277z"}),(0,i.jsx)("path",{d:"m438.874 3.863h-276.72c-40.321 0-73.126 32.804-73.126 73.125v11.83h-15.903c-40.321.001-73.125 32.805-73.125 73.126v185.938c0 40.322 32.804 73.125 73.125 73.125h78.18c4.143 0 7.5-3.358 7.5-7.5s-3.357-7.5-7.5-7.5h-78.18c-32.05 0-58.125-26.075-58.125-58.125v-185.938c0-32.05 26.075-58.125 58.125-58.125h276.721c32.05 0 58.125 26.075 58.125 58.125v185.938c0 32.05-26.075 58.125-58.125 58.125-8.543 0-16.518 3.758-21.881 10.312-29.417 35.95-64.447 61.355-88.653 76.336-2.257 1.393-4.855-.96-3.669-3.382 9.512-19.408 16.805-39.761 21.675-60.494 2.728-11.618-6.129-22.772-18.109-22.772h-52.903c-4.143 0-7.5 3.358-7.5 7.5s3.357 7.5 7.5 7.5h52.903c2.301 0 4.027 2.128 3.506 4.342-4.612 19.638-11.523 38.924-20.541 57.323-7.776 15.872 10.025 32.025 25.032 22.738 25.178-15.583 61.642-42.04 92.368-79.591 2.503-3.058 6.247-4.812 10.272-4.812 40.321 0 73.125-32.804 73.125-73.125v-11.83h15.903c40.322 0 73.126-32.804 73.126-73.125v-75.469c0-4.142-3.357-7.5-7.5-7.5s-7.5 3.358-7.5 7.5v75.469c0 32.05-26.075 58.125-58.126 58.125h-15.903v-159.108c0-40.321-32.804-73.125-73.125-73.125h-245.818v-11.83c0-32.05 26.075-58.125 58.126-58.125h276.72c32.051 0 58.126 26.075 58.126 58.125v75.469c0 4.142 3.357 7.5 7.5 7.5s7.5-3.358 7.5-7.5v-75.469c0-40.322-32.804-73.126-73.126-73.126z"})]})]}):""]})]})}),(0,i.jsx)(M.E.div,{variants:w.eu,children:(0,i.jsxs)(s.Ug,{spacing:2,alignItems:"left",justifyContent:["center","left","left"],children:[(0,i.jsx)(l.x,{fontSize:"xs",children:"Published on"}),(0,i.jsx)(l.x,{fontSize:"xs",fontWeight:"bold",children:f()(null===n||void 0===n?void 0:n.published_at).format("LL")})]})})]}),(0,i.jsx)(M.E.div,{variants:w.eu,children:(0,i.jsx)(u.xu,{className:"article",children:(0,i.jsx)("div",{dangerouslySetInnerHTML:{__html:e}})})}),null!==n&&void 0!==n&&n.url?(0,i.jsx)(j,{href:n.url}):""]})})}},14163:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/[slug]",function(){return n(47301)}])}},function(t){t.O(0,[656,774,888,179],(function(){return e=14163,t(t.s=e);var e}));var e=t.O();_N_E=e}]);