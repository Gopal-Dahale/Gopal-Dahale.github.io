(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{94279:function(e,t,n){"use strict";n.d(t,{Z:function(){return d}});var r=n(26265),o=n(85893),i=n(38347),a=n(48017),c=(n(67294),function(e){return(0,o.jsxs)(a.xu,{as:"span",display:"inline-block",position:"relative",children:[e.children,(0,o.jsx)(a.xu,{as:"span",display:"block",position:"absolute",bg:"gray.200",w:"100%",h:e.h||"1px",bottom:-2})]})});function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var d=function(e){var t=e.children,n=e.underlineColor,r=e.emoji,u=(0,i.Z)(e,["children","underlineColor","emoji"]);return(0,o.jsxs)(a.xu,s(s({as:"h1",mt:10,mb:6,fontSize:"3xl",lineHeight:"shorter",fontWeight:"bold"},u),{},{textAlign:"left",children:[(0,o.jsx)(c,{color:n,children:t}),r?" "+r:""]}))}},15311:function(e,t,n){"use strict";var r=n(85893),o=n(9008),i=function(e){var t=e.title,n=e.keywords,i=e.description;return(0,r.jsxs)(o.default,{children:[(0,r.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,r.jsx)("meta",{charSet:"utf-8"}),(0,r.jsx)("meta",{name:"keywords",content:n}),(0,r.jsx)("meta",{name:"description",content:i}),(0,r.jsx)("title",{children:t})]})};i.defaultProps={title:"Muhammad Ahmad - Full Stack Developer",keywords:"web development, programming, web design",description:"Software Engineer. Lover of web and opensource."},t.Z=i},32307:function(e,t,n){"use strict";var r=n(85893),o=n(67294),i=n(69535),a=n(15311),c={hidden:{opacity:0,x:-200,y:0},enter:{opacity:1,x:0,y:0},exit:{opacity:0,x:0,y:-100}};t.Z=function(e){var t=e.children,n=e.title,u=e.description,s=e.keywords;return(0,r.jsxs)(o.Fragment,{children:[(0,r.jsx)(a.Z,{title:n,description:u,keywords:s}),(0,r.jsx)(i.E.main,{initial:"hidden",animate:"enter",exit:"exit",variants:c,transition:{type:"linear"},children:t})]})}},3042:function(e,t,n){"use strict";var r=n(85893),o=(n(67294),n(289)),i=n(74221),a=n(40123);t.Z=function(e){var t=e.src,n=e.blurHash,c=e.width,u=e.height,s=e.size,d=e.layout,f=e.rounded;return(0,r.jsx)(o.Z,{delay:500,src:t,placeholder:"/assets/images/placeholder.png",children:function(e,t){return t?(0,r.jsx)(i.c,{hash:n,width:c,height:u,punch:1,style:{borderRadius:f?"5px":""}}):(0,r.jsx)(a.E,{src:e,objectFit:"cover",alt:"cover image",width:c,height:u,size:s,layout:d,rounded:f})}})}},23398:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var o=((r=n(67294))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=o},76393:function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=a,t.useAmp=function(){return a(o.default.useContext(i.AmpStateContext))};var r,o=(r=n(67294))&&r.__esModule?r:{default:r},i=n(23398);function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,o=void 0!==r&&r,i=e.hasQuery,a=void 0!==i&&i;return n||o&&a}},92775:function(e,t,n){"use strict";var r=n(61682);function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}t.__esModule=!0,t.defaultHead=l,t.default=void 0;var i,a=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=f();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var i=r?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(n,o,i):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(n(67294)),c=(i=n(73244))&&i.__esModule?i:{default:i},u=n(23398),s=n(41165),d=n(76393);function f(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return f=function(){return e},e}function l(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[a.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(a.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function p(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===a.default.Fragment?e.concat(a.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var h=["name","httpEquiv","charSet","itemProp"];function y(e,t){return e.reduce((function(e,t){var n=a.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(p,[]).reverse().concat(l(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(o){var i=!0,a=!1;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){a=!0;var c=o.key.slice(o.key.indexOf("$")+1);e.has(c)?i=!1:e.add(c)}switch(o.type){case"title":case"base":t.has(o.type)?i=!1:t.add(o.type);break;case"meta":for(var u=0,s=h.length;u<s;u++){var d=h[u];if(o.props.hasOwnProperty(d))if("charSet"===d)n.has(d)?i=!1:n.add(d);else{var f=o.props[d],l=r[d]||new Set;"name"===d&&a||!l.has(f)?(l.add(f),r[d]=l):i=!1}}}return i}}()).reverse().map((function(e,n){var i=e.key||n;if(!t.inAmpMode&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some((function(t){return e.props.href.startsWith(t)}))){var c=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e.props||{});return c["data-href"]=c.href,c.href=void 0,c["data-optimized-fonts"]=!0,a.default.cloneElement(e,c)}return a.default.cloneElement(e,{key:i})}))}var v=function(e){var t=e.children,n=(0,a.useContext)(u.AmpStateContext),r=(0,a.useContext)(s.HeadManagerContext);return a.default.createElement(c.default,{reduceComponentsToState:y,headManager:r,inAmpMode:(0,d.isInAmpMode)(n)},t)};t.default=v},73244:function(e,t,n){"use strict";var r=n(83115),o=n(2553),i=n(62012),a=(n(50450),n(9807)),c=n(27690),u=n(99828);function s(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=u(e);if(t){var o=u(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return c(this,n)}}t.__esModule=!0,t.default=void 0;var d=n(67294),f=function(e){a(n,e);var t=s(n);function n(e){var i;return o(this,n),(i=t.call(this,e))._hasHeadManager=void 0,i.emitChange=function(){i._hasHeadManager&&i.props.headManager.updateHead(i.props.reduceComponentsToState(r(i.props.headManager.mountedInstances),i.props))},i._hasHeadManager=i.props.headManager&&i.props.headManager.mountedInstances,i}return i(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(d.Component);t.default=f},55468:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return i},default:function(){return a}});var r=n(85893),o=(n(79953),n(94279),n(67294),n(69857),n(3042),n(35063),n(32307)),i=!0;function a(e){e.projects;return(0,r.jsx)(o.Z,{title:"Gopal Dahale - Full Stack Developer/ Machine Learning Developer",children:"Under Construction"})}},78581:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(55468)}])},9008:function(e,t,n){e.exports=n(92775)},38164:function(e,t,n){var r=n(54360);e.exports=function(e){if(Array.isArray(e))return r(e)}},61682:function(e){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},27381:function(e){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},95725:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},83115:function(e,t,n){var r=n(38164),o=n(27381),i=n(73585),a=n(95725);e.exports=function(e){return r(e)||o(e)||i(e)||a()}}},function(e){e.O(0,[900,774,888,179],(function(){return t=78581,e(e.s=t);var t}));var t=e.O();_N_E=t}]);