(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[229],{34941:function(e,t,r){"use strict";r.d(t,{O:function(){return i}});var n=r(80658),o=r(67294),a=r(10762);function i(e,t,r,i){var s=(0,a.W)(t);return o.useEffect((()=>{var t,o=null!=(t=(0,n.Pu)(r))?t:document;return o.addEventListener(e,s,i),()=>{o.removeEventListener(e,s,i)}}),[e,r,i,s]),()=>{var t;(null!=(t=(0,n.Pu)(r))?t:document).removeEventListener(e,s,i)}}},70058:function(e,t,r){"use strict";r.d(t,{J:function(){return p}});var n=r(90063),o=r(90227),a=r(84461),i=r(73808),s=r(67294);function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var c={path:s.createElement("g",{stroke:"currentColor",strokeWidth:"1.5"},s.createElement("path",{strokeLinecap:"round",fill:"none",d:"M9,9a3,3,0,1,1,4,2.829,1.5,1.5,0,0,0-1,1.415V14.25"}),s.createElement("path",{fill:"currentColor",strokeLinecap:"round",d:"M12,17.25a.375.375,0,1,0,.375.375A.375.375,0,0,0,12,17.25h0"}),s.createElement("circle",{fill:"none",strokeMiterlimit:"10",cx:"12",cy:"12",r:"11.25"})),viewBox:"0 0 24 24"},p=(0,n.G)(((e,t)=>{var{as:r,viewBox:n,color:i="currentColor",focusable:p=!1,children:l,className:u,__css:d}=e,m=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,["as","viewBox","color","focusable","children","className","__css"]),h={ref:t,focusable:p,className:(0,a.cx)("chakra-icon",u),__css:f({w:"1em",h:"1em",display:"inline-block",lineHeight:"1em",flexShrink:0,color:i},d)},v=null!=n?n:c.viewBox;if(r&&"string"!==typeof r)return s.createElement(o.m$.svg,f({as:r},h,m));var g=null!=l?l:c.path;return s.createElement(o.m$.svg,f({verticalAlign:"middle",viewBox:v},h,m),g)}));i.Ts&&(p.displayName="Icon")},8931:function(e,t,r){"use strict";r.d(t,{D:function(){return ye}});var n=r(72947);function o(e){var t=e.getBoundingClientRect();return{width:t.width,height:t.height,top:t.top,right:t.right,bottom:t.bottom,left:t.left,x:t.left,y:t.top}}function a(e){if("[object Window]"!==e.toString()){var t=e.ownerDocument;return t?t.defaultView:window}return e}function i(e){var t=a(e);return{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function s(e){return e instanceof a(e).Element||e instanceof Element}function f(e){return e instanceof a(e).HTMLElement||e instanceof HTMLElement}function c(e){return e?(e.nodeName||"").toLowerCase():null}function p(e){return(s(e)?e.ownerDocument:e.document).documentElement}function l(e){return o(p(e)).left+i(e).scrollLeft}function u(e){return a(e).getComputedStyle(e)}function d(e){var t=u(e),r=t.overflow,n=t.overflowX,o=t.overflowY;return/auto|scroll|overlay|hidden/.test(r+o+n)}function m(e,t,r){void 0===r&&(r=!1);var n=p(t),s=o(e),u=f(t),m={scrollLeft:0,scrollTop:0},h={x:0,y:0};return(u||!u&&!r)&&(("body"!==c(t)||d(n))&&(m=function(e){return e!==a(e)&&f(e)?{scrollLeft:(t=e).scrollLeft,scrollTop:t.scrollTop}:i(e);var t}(t)),f(t)?((h=o(t)).x+=t.clientLeft,h.y+=t.clientTop):n&&(h.x=l(n))),{x:s.left+m.scrollLeft-h.x,y:s.top+m.scrollTop-h.y,width:s.width,height:s.height}}function h(e){return{x:e.offsetLeft,y:e.offsetTop,width:e.offsetWidth,height:e.offsetHeight}}function v(e){return"html"===c(e)?e:e.assignedSlot||e.parentNode||e.host||p(e)}function g(e){return["html","body","#document"].indexOf(c(e))>=0?e.ownerDocument.body:f(e)&&d(e)?e:g(v(e))}function b(e,t){void 0===t&&(t=[]);var r=g(e),n="body"===c(r),o=a(r),i=n?[o].concat(o.visualViewport||[],d(r)?r:[]):r,s=t.concat(i);return n?s:s.concat(b(v(i)))}function y(e){return["table","td","th"].indexOf(c(e))>=0}function w(e){if(!f(e)||"fixed"===u(e).position)return null;var t=e.offsetParent;if(t){var r=p(t);if("body"===c(t)&&"static"===u(t).position&&"static"!==u(r).position)return r}return t}function O(e){for(var t=a(e),r=w(e);r&&y(r)&&"static"===u(r).position;)r=w(r);return r&&"body"===c(r)&&"static"===u(r).position?t:r||function(e){for(var t=v(e);f(t)&&["html","body"].indexOf(c(t))<0;){var r=u(t);if("none"!==r.transform||"none"!==r.perspective||r.willChange&&"auto"!==r.willChange)return t;t=t.parentNode}return null}(e)||t}var x="top",j="bottom",E="right",D="left",k="auto",P=[x,j,E,D],M="start",R="end",W="viewport",q="popper",L=P.reduce((function(e,t){return e.concat([t+"-"+M,t+"-"+R])}),[]),B=[].concat(P,[k]).reduce((function(e,t){return e.concat([t,t+"-"+M,t+"-"+R])}),[]),C=["beforeRead","read","afterRead","beforeMain","main","afterMain","beforeWrite","write","afterWrite"];function S(e){var t=new Map,r=new Set,n=[];function o(e){r.add(e.name),[].concat(e.requires||[],e.requiresIfExists||[]).forEach((function(e){if(!r.has(e)){var n=t.get(e);n&&o(n)}})),n.push(e)}return e.forEach((function(e){t.set(e.name,e)})),e.forEach((function(e){r.has(e.name)||o(e)})),n}function A(e){var t;return function(){return t||(t=new Promise((function(r){Promise.resolve().then((function(){t=void 0,r(e())}))}))),t}}var z={placement:"bottom",modifiers:[],strategy:"absolute"};function H(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return!t.some((function(e){return!(e&&"function"===typeof e.getBoundingClientRect)}))}function T(e){void 0===e&&(e={});var t=e,r=t.defaultModifiers,n=void 0===r?[]:r,o=t.defaultOptions,a=void 0===o?z:o;return function(e,t,r){void 0===r&&(r=a);var o={placement:"bottom",orderedModifiers:[],options:Object.assign(Object.assign({},z),a),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}},i=[],f=!1,c={state:o,setOptions:function(r){p(),o.options=Object.assign(Object.assign(Object.assign({},a),o.options),r),o.scrollParents={reference:s(e)?b(e):e.contextElement?b(e.contextElement):[],popper:b(t)};var f=function(e){var t=S(e);return C.reduce((function(e,r){return e.concat(t.filter((function(e){return e.phase===r})))}),[])}(function(e){var t=e.reduce((function(e,t){var r=e[t.name];return e[t.name]=r?Object.assign(Object.assign(Object.assign({},r),t),{},{options:Object.assign(Object.assign({},r.options),t.options),data:Object.assign(Object.assign({},r.data),t.data)}):t,e}),{});return Object.keys(t).map((function(e){return t[e]}))}([].concat(n,o.options.modifiers)));return o.orderedModifiers=f.filter((function(e){return e.enabled})),o.orderedModifiers.forEach((function(e){var t=e.name,r=e.options,n=void 0===r?{}:r,a=e.effect;if("function"===typeof a){var s=a({state:o,name:t,instance:c,options:n}),f=function(){};i.push(s||f)}})),c.update()},forceUpdate:function(){if(!f){var e=o.elements,t=e.reference,r=e.popper;if(H(t,r)){o.rects={reference:m(t,O(r),"fixed"===o.options.strategy),popper:h(r)},o.reset=!1,o.placement=o.options.placement,o.orderedModifiers.forEach((function(e){return o.modifiersData[e.name]=Object.assign({},e.data)}));for(var n=0;n<o.orderedModifiers.length;n++)if(!0!==o.reset){var a=o.orderedModifiers[n],i=a.fn,s=a.options,p=void 0===s?{}:s,l=a.name;"function"===typeof i&&(o=i({state:o,options:p,name:l,instance:c})||o)}else o.reset=!1,n=-1}}},update:A((function(){return new Promise((function(e){c.forceUpdate(),e(o)}))})),destroy:function(){p(),f=!0}};if(!H(e,t))return c;function p(){i.forEach((function(e){return e()})),i=[]}return c.setOptions(r).then((function(e){!f&&r.onFirstUpdate&&r.onFirstUpdate(e)})),c}}var N={passive:!0};function _(e){return e.split("-")[0]}function I(e){return e.split("-")[1]}function U(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function V(e){var t,r=e.reference,n=e.element,o=e.placement,a=o?_(o):null,i=o?I(o):null,s=r.x+r.width/2-n.width/2,f=r.y+r.height/2-n.height/2;switch(a){case x:t={x:s,y:r.y-n.height};break;case j:t={x:s,y:r.y+r.height};break;case E:t={x:r.x+r.width,y:f};break;case D:t={x:r.x-n.width,y:f};break;default:t={x:r.x,y:r.y}}var c=a?U(a):null;if(null!=c){var p="y"===c?"height":"width";switch(i){case M:t[c]=Math.floor(t[c])-Math.floor(r[p]/2-n[p]/2);break;case R:t[c]=Math.floor(t[c])+Math.ceil(r[p]/2-n[p]/2)}}return t}var $={top:"auto",right:"auto",bottom:"auto",left:"auto"};function F(e){var t,r=e.popper,n=e.popperRect,o=e.placement,i=e.offsets,s=e.position,f=e.gpuAcceleration,c=e.adaptive,l=function(e){var t=e.x,r=e.y,n=window.devicePixelRatio||1;return{x:Math.round(t*n)/n||0,y:Math.round(r*n)/n||0}}(i),u=l.x,d=l.y,m=i.hasOwnProperty("x"),h=i.hasOwnProperty("y"),v=D,g=x,b=window;if(c){var y=O(r);y===a(r)&&(y=p(r)),o===x&&(g=j,d-=y.clientHeight-n.height,d*=f?1:-1),o===D&&(v=E,u-=y.clientWidth-n.width,u*=f?1:-1)}var w,k=Object.assign({position:s},c&&$);return f?Object.assign(Object.assign({},k),{},((w={})[g]=h?"0":"",w[v]=m?"0":"",w.transform=(b.devicePixelRatio||1)<2?"translate("+u+"px, "+d+"px)":"translate3d("+u+"px, "+d+"px, 0)",w)):Object.assign(Object.assign({},k),{},((t={})[g]=h?d+"px":"",t[v]=m?u+"px":"",t.transform="",t))}var K={left:"right",right:"left",bottom:"top",top:"bottom"};function X(e){return e.replace(/left|right|bottom|top/g,(function(e){return K[e]}))}var Y={start:"end",end:"start"};function G(e){return e.replace(/start|end/g,(function(e){return Y[e]}))}function J(e,t){var r=Boolean(t.getRootNode&&t.getRootNode().host);if(e.contains(t))return!0;if(r){var n=t;do{if(n&&e.isSameNode(n))return!0;n=n.parentNode||n.host}while(n)}return!1}function Z(e){return Object.assign(Object.assign({},e),{},{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function Q(e,t){return t===W?Z(function(e){var t=a(e),r=p(e),n=t.visualViewport,o=r.clientWidth,i=r.clientHeight,s=0,f=0;return n&&(o=n.width,i=n.height,/^((?!chrome|android).)*safari/i.test(navigator.userAgent)||(s=n.offsetLeft,f=n.offsetTop)),{width:o,height:i,x:s+l(e),y:f}}(e)):f(t)?function(e){var t=o(e);return t.top=t.top+e.clientTop,t.left=t.left+e.clientLeft,t.bottom=t.top+e.clientHeight,t.right=t.left+e.clientWidth,t.width=e.clientWidth,t.height=e.clientHeight,t.x=t.left,t.y=t.top,t}(t):Z(function(e){var t=p(e),r=i(e),n=e.ownerDocument.body,o=Math.max(t.scrollWidth,t.clientWidth,n?n.scrollWidth:0,n?n.clientWidth:0),a=Math.max(t.scrollHeight,t.clientHeight,n?n.scrollHeight:0,n?n.clientHeight:0),s=-r.scrollLeft+l(e),f=-r.scrollTop;return"rtl"===u(n||t).direction&&(s+=Math.max(t.clientWidth,n?n.clientWidth:0)-o),{width:o,height:a,x:s,y:f}}(p(e)))}function ee(e,t,r){var n="clippingParents"===t?function(e){var t=b(v(e)),r=["absolute","fixed"].indexOf(u(e).position)>=0&&f(e)?O(e):e;return s(r)?t.filter((function(e){return s(e)&&J(e,r)&&"body"!==c(e)})):[]}(e):[].concat(t),o=[].concat(n,[r]),a=o[0],i=o.reduce((function(t,r){var n=Q(e,r);return t.top=Math.max(n.top,t.top),t.right=Math.min(n.right,t.right),t.bottom=Math.min(n.bottom,t.bottom),t.left=Math.max(n.left,t.left),t}),Q(e,a));return i.width=i.right-i.left,i.height=i.bottom-i.top,i.x=i.left,i.y=i.top,i}function te(e){return Object.assign(Object.assign({},{top:0,right:0,bottom:0,left:0}),e)}function re(e,t){return t.reduce((function(t,r){return t[r]=e,t}),{})}function ne(e,t){void 0===t&&(t={});var r=t,n=r.placement,a=void 0===n?e.placement:n,i=r.boundary,f=void 0===i?"clippingParents":i,c=r.rootBoundary,l=void 0===c?W:c,u=r.elementContext,d=void 0===u?q:u,m=r.altBoundary,h=void 0!==m&&m,v=r.padding,g=void 0===v?0:v,b=te("number"!==typeof g?g:re(g,P)),y=d===q?"reference":q,w=e.elements.reference,O=e.rects.popper,D=e.elements[h?y:d],k=ee(s(D)?D:D.contextElement||p(e.elements.popper),f,l),M=o(w),R=V({reference:M,element:O,strategy:"absolute",placement:a}),L=Z(Object.assign(Object.assign({},O),R)),B=d===q?L:M,C={top:k.top-B.top+b.top,bottom:B.bottom-k.bottom+b.bottom,left:k.left-B.left+b.left,right:B.right-k.right+b.right},S=e.modifiersData.offset;if(d===q&&S){var A=S[a];Object.keys(C).forEach((function(e){var t=[E,j].indexOf(e)>=0?1:-1,r=[x,j].indexOf(e)>=0?"y":"x";C[e]+=A[r]*t}))}return C}function oe(e,t,r){return Math.max(e,Math.min(t,r))}function ae(e,t,r){return void 0===r&&(r={x:0,y:0}),{top:e.top-t.height-r.y,right:e.right-t.width+r.x,bottom:e.bottom-t.height+r.y,left:e.left-t.width-r.x}}function ie(e){return[x,E,j,D].some((function(t){return e[t]>=0}))}var se=T({defaultModifiers:[{name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(e){var t=e.state,r=e.instance,n=e.options,o=n.scroll,i=void 0===o||o,s=n.resize,f=void 0===s||s,c=a(t.elements.popper),p=[].concat(t.scrollParents.reference,t.scrollParents.popper);return i&&p.forEach((function(e){e.addEventListener("scroll",r.update,N)})),f&&c.addEventListener("resize",r.update,N),function(){i&&p.forEach((function(e){e.removeEventListener("scroll",r.update,N)})),f&&c.removeEventListener("resize",r.update,N)}},data:{}},{name:"popperOffsets",enabled:!0,phase:"read",fn:function(e){var t=e.state,r=e.name;t.modifiersData[r]=V({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})},data:{}},{name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(e){var t=e.state,r=e.options,n=r.gpuAcceleration,o=void 0===n||n,a=r.adaptive,i=void 0===a||a,s={placement:_(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:o};null!=t.modifiersData.popperOffsets&&(t.styles.popper=Object.assign(Object.assign({},t.styles.popper),F(Object.assign(Object.assign({},s),{},{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:i})))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign(Object.assign({},t.styles.arrow),F(Object.assign(Object.assign({},s),{},{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1})))),t.attributes.popper=Object.assign(Object.assign({},t.attributes.popper),{},{"data-popper-placement":t.placement})},data:{}},{name:"applyStyles",enabled:!0,phase:"write",fn:function(e){var t=e.state;Object.keys(t.elements).forEach((function(e){var r=t.styles[e]||{},n=t.attributes[e]||{},o=t.elements[e];f(o)&&c(o)&&(Object.assign(o.style,r),Object.keys(n).forEach((function(e){var t=n[e];!1===t?o.removeAttribute(e):o.setAttribute(e,!0===t?"":t)})))}))},effect:function(e){var t=e.state,r={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,r.popper),t.elements.arrow&&Object.assign(t.elements.arrow.style,r.arrow),function(){Object.keys(t.elements).forEach((function(e){var n=t.elements[e],o=t.attributes[e]||{},a=Object.keys(t.styles.hasOwnProperty(e)?t.styles[e]:r[e]).reduce((function(e,t){return e[t]="",e}),{});f(n)&&c(n)&&(Object.assign(n.style,a),Object.keys(o).forEach((function(e){n.removeAttribute(e)})))}))}},requires:["computeStyles"]},{name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(e){var t=e.state,r=e.options,n=e.name,o=r.offset,a=void 0===o?[0,0]:o,i=B.reduce((function(e,r){return e[r]=function(e,t,r){var n=_(e),o=[D,x].indexOf(n)>=0?-1:1,a="function"===typeof r?r(Object.assign(Object.assign({},t),{},{placement:e})):r,i=a[0],s=a[1];return i=i||0,s=(s||0)*o,[D,E].indexOf(n)>=0?{x:s,y:i}:{x:i,y:s}}(r,t.rects,a),e}),{}),s=i[t.placement],f=s.x,c=s.y;null!=t.modifiersData.popperOffsets&&(t.modifiersData.popperOffsets.x+=f,t.modifiersData.popperOffsets.y+=c),t.modifiersData[n]=i}},{name:"flip",enabled:!0,phase:"main",fn:function(e){var t=e.state,r=e.options,n=e.name;if(!t.modifiersData[n]._skip){for(var o=r.mainAxis,a=void 0===o||o,i=r.altAxis,s=void 0===i||i,f=r.fallbackPlacements,c=r.padding,p=r.boundary,l=r.rootBoundary,u=r.altBoundary,d=r.flipVariations,m=void 0===d||d,h=r.allowedAutoPlacements,v=t.options.placement,g=_(v),b=f||(g===v||!m?[X(v)]:function(e){if(_(e)===k)return[];var t=X(e);return[G(e),t,G(t)]}(v)),y=[v].concat(b).reduce((function(e,r){return e.concat(_(r)===k?function(e,t){void 0===t&&(t={});var r=t,n=r.placement,o=r.boundary,a=r.rootBoundary,i=r.padding,s=r.flipVariations,f=r.allowedAutoPlacements,c=void 0===f?B:f,p=I(n),l=p?s?L:L.filter((function(e){return I(e)===p})):P,u=l.filter((function(e){return c.indexOf(e)>=0}));0===u.length&&(u=l);var d=u.reduce((function(t,r){return t[r]=ne(e,{placement:r,boundary:o,rootBoundary:a,padding:i})[_(r)],t}),{});return Object.keys(d).sort((function(e,t){return d[e]-d[t]}))}(t,{placement:r,boundary:p,rootBoundary:l,padding:c,flipVariations:m,allowedAutoPlacements:h}):r)}),[]),w=t.rects.reference,O=t.rects.popper,R=new Map,W=!0,q=y[0],C=0;C<y.length;C++){var S=y[C],A=_(S),z=I(S)===M,H=[x,j].indexOf(A)>=0,T=H?"width":"height",N=ne(t,{placement:S,boundary:p,rootBoundary:l,altBoundary:u,padding:c}),U=H?z?E:D:z?j:x;w[T]>O[T]&&(U=X(U));var V=X(U),$=[];if(a&&$.push(N[A]<=0),s&&$.push(N[U]<=0,N[V]<=0),$.every((function(e){return e}))){q=S,W=!1;break}R.set(S,$)}if(W)for(var F=function(e){var t=y.find((function(t){var r=R.get(t);if(r)return r.slice(0,e).every((function(e){return e}))}));if(t)return q=t,"break"},K=m?3:1;K>0;K--){if("break"===F(K))break}t.placement!==q&&(t.modifiersData[n]._skip=!0,t.placement=q,t.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}},{name:"preventOverflow",enabled:!0,phase:"main",fn:function(e){var t=e.state,r=e.options,n=e.name,o=r.mainAxis,a=void 0===o||o,i=r.altAxis,s=void 0!==i&&i,f=r.boundary,c=r.rootBoundary,p=r.altBoundary,l=r.padding,u=r.tether,d=void 0===u||u,m=r.tetherOffset,v=void 0===m?0:m,g=ne(t,{boundary:f,rootBoundary:c,padding:l,altBoundary:p}),b=_(t.placement),y=I(t.placement),w=!y,k=U(b),P="x"===k?"y":"x",R=t.modifiersData.popperOffsets,W=t.rects.reference,q=t.rects.popper,L="function"===typeof v?v(Object.assign(Object.assign({},t.rects),{},{placement:t.placement})):v,B={x:0,y:0};if(R){if(a){var C="y"===k?x:D,S="y"===k?j:E,A="y"===k?"height":"width",z=R[k],H=R[k]+g[C],T=R[k]-g[S],N=d?-q[A]/2:0,V=y===M?W[A]:q[A],$=y===M?-q[A]:-W[A],F=t.elements.arrow,K=d&&F?h(F):{width:0,height:0},X=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},Y=X[C],G=X[S],J=oe(0,W[A],K[A]),Z=w?W[A]/2-N-J-Y-L:V-J-Y-L,Q=w?-W[A]/2+N+J+G+L:$+J+G+L,ee=t.elements.arrow&&O(t.elements.arrow),te=ee?"y"===k?ee.clientTop||0:ee.clientLeft||0:0,re=t.modifiersData.offset?t.modifiersData.offset[t.placement][k]:0,ae=R[k]+Z-re-te,ie=R[k]+Q-re,se=oe(d?Math.min(H,ae):H,z,d?Math.max(T,ie):T);R[k]=se,B[k]=se-z}if(s){var fe="x"===k?x:D,ce="x"===k?j:E,pe=R[P],le=oe(pe+g[fe],pe,pe-g[ce]);R[P]=le,B[P]=le-pe}t.modifiersData[n]=B}},requiresIfExists:["offset"]},{name:"arrow",enabled:!0,phase:"main",fn:function(e){var t,r=e.state,n=e.name,o=r.elements.arrow,a=r.modifiersData.popperOffsets,i=_(r.placement),s=U(i),f=[D,E].indexOf(i)>=0?"height":"width";if(o&&a){var c=r.modifiersData[n+"#persistent"].padding,p=h(o),l="y"===s?x:D,u="y"===s?j:E,d=r.rects.reference[f]+r.rects.reference[s]-a[s]-r.rects.popper[f],m=a[s]-r.rects.reference[s],v=O(o),g=v?"y"===s?v.clientHeight||0:v.clientWidth||0:0,b=d/2-m/2,y=c[l],w=g-p[f]-c[u],k=g/2-p[f]/2+b,P=oe(y,k,w),M=s;r.modifiersData[n]=((t={})[M]=P,t.centerOffset=P-k,t)}},effect:function(e){var t=e.state,r=e.options,n=e.name,o=r.element,a=void 0===o?"[data-popper-arrow]":o,i=r.padding,s=void 0===i?0:i;null!=a&&("string"!==typeof a||(a=t.elements.popper.querySelector(a)))&&J(t.elements.popper,a)&&(t.elements.arrow=a,t.modifiersData[n+"#persistent"]={padding:te("number"!==typeof s?s:re(s,P))})},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]},{name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(e){var t=e.state,r=e.name,n=t.rects.reference,o=t.rects.popper,a=t.modifiersData.preventOverflow,i=ne(t,{elementContext:"reference"}),s=ne(t,{altBoundary:!0}),f=ae(i,n),c=ae(s,o,a),p=ie(f),l=ie(c);t.modifiersData[r]={referenceClippingOffsets:f,popperEscapeOffsets:c,isReferenceHidden:p,hasPopperEscaped:l},t.attributes.popper=Object.assign(Object.assign({},t.attributes.popper),{},{"data-popper-reference-hidden":p,"data-popper-escaped":l})}}]}),fe=r(67294),ce=r(23459),pe={name:"matchWidth",enabled:!0,phase:"beforeWrite",requires:["computeStyles"],fn:e=>{var{state:t}=e;t.styles.popper.width=t.rects.reference.width+"px"},effect:e=>{var{state:t}=e;return()=>{var e=t.elements.reference;t.elements.popper.style.width=e.offsetWidth+"px"}}},le={name:"transformOrigin",enabled:!0,phase:"write",fn:e=>{var{state:t}=e;ue(t)},effect:e=>{var{state:t}=e;return()=>{ue(t)}}},ue=e=>{e.elements.popper.style.setProperty(ce.Dq.transformOrigin.var,(0,ce.mv)(e.placement))},de={name:"positionArrow",enabled:!0,phase:"afterWrite",fn:e=>{var{state:t}=e;me(t)}},me=e=>{var t;if(e.placement){var r=he(e.placement);if(null!=(t=e.elements)&&t.arrow&&r){Object.assign(e.elements.arrow.style,{[r.property]:r.value,width:ce.Dq.arrowSize.varRef,height:ce.Dq.arrowSize.varRef,zIndex:-1});var n={[ce.Dq.arrowSizeHalf.var]:"calc("+ce.Dq.arrowSize.varRef+" / 2)",[ce.Dq.arrowOffset.var]:"calc("+ce.Dq.arrowSizeHalf.varRef+" * -1)"};for(var o in n)e.elements.arrow.style.setProperty(o,n[o])}}},he=e=>e.startsWith("top")?{property:"bottom",value:ce.Dq.arrowOffset.varRef}:e.startsWith("bottom")?{property:"top",value:ce.Dq.arrowOffset.varRef}:e.startsWith("left")?{property:"right",value:ce.Dq.arrowOffset.varRef}:e.startsWith("right")?{property:"left",value:ce.Dq.arrowOffset.varRef}:void 0,ve={name:"innerArrow",enabled:!0,phase:"main",requires:["arrow"],fn:e=>{var{state:t}=e;ge(t)},effect:e=>{var{state:t}=e;return()=>{ge(t)}}},ge=e=>{if(e.elements.arrow){var t=e.elements.arrow.querySelector("[data-popper-arrow-inner]");t&&Object.assign(t.style,{transform:"rotate(45deg)",background:ce.Dq.arrowBg.varRef,top:0,left:0,width:"100%",height:"100%",position:"absolute",zIndex:"inherit",boxShadow:(0,ce.Ke)(e.placement)})}};function be(){return(be=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function ye(e){void 0===e&&(e={});var{enabled:t=!0,modifiers:r=[],placement:o="bottom",strategy:a="absolute",arrowPadding:i=8,eventListeners:s=!0,offset:f,gutter:c=8,flip:p=!0,boundary:l="clippingParents",preventOverflow:u=!0,matchWidth:d}=e,m=(0,fe.useRef)(null),h=(0,fe.useRef)(null),v=(0,fe.useRef)(null),g=(0,fe.useRef)((()=>{})),b=(0,fe.useCallback)((()=>{t&&m.current&&h.current&&(null==g.current||g.current(),v.current=se(m.current,h.current,{placement:o,modifiers:[ve,de,le,be({},pe,{enabled:!!d}),be({name:"eventListeners"},(0,ce.$B)(s)),{name:"arrow",options:{padding:i}},{name:"offset",options:{offset:null!=f?f:[0,c]}},{name:"flip",enabled:!!p,options:{padding:8}},{name:"preventOverflow",enabled:!!u,options:{boundary:l}},...r],strategy:a}),v.current.forceUpdate(),g.current=v.current.destroy)}),[t,o,r,d,s,i,f,c,p,u,l,a]);(0,fe.useEffect)((()=>()=>{var e;m.current||h.current||(null==(e=v.current)||e.destroy(),v.current=null)}),[]);var y=(0,fe.useCallback)((e=>{m.current=e,b()}),[b]),w=(0,fe.useCallback)((function(e,t){return void 0===e&&(e={}),void 0===t&&(t=null),be({},e,{ref:(0,n.l)(y,t)})}),[y]),O=(0,fe.useCallback)((e=>{h.current=e,b()}),[b]),x=(0,fe.useCallback)((function(e,t){return void 0===e&&(e={}),void 0===t&&(t=null),be({},e,{ref:(0,n.l)(O,t),style:be({},e.style,{position:a,minWidth:"max-content",inset:"0 auto auto 0"})})}),[a,O]),j=(0,fe.useCallback)((function(e,t){return void 0===e&&(e={}),void 0===t&&(t=null),be({},function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,["size","shadowColor","bg","style"]),{ref:t,"data-popper-arrow":"",style:we(e)})}),[]),E=(0,fe.useCallback)((function(e,t){return void 0===e&&(e={}),void 0===t&&(t=null),be({},e,{ref:t,"data-popper-arrow-inner":""})}),[]);return{update(){var e;null==(e=v.current)||e.update()},forceUpdate(){var e;null==(e=v.current)||e.forceUpdate()},transformOrigin:ce.Dq.transformOrigin.varRef,referenceRef:y,popperRef:O,getPopperProps:x,getArrowProps:j,getArrowInnerProps:E,getReferenceProps:w}}function we(e){var{size:t,shadowColor:r,bg:n,style:o}=e,a=be({},o,{position:"absolute"});return t&&(a["--popper-arrow-size"]=t),r&&(a["--popper-arrow-shadow-color"]=r),n&&(a["--popper-arrow-bg"]=n),a}},23459:function(e,t,r){"use strict";function n(){return(n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}r.d(t,{Dq:function(){return a},Ke:function(){return i},mv:function(){return f},$B:function(){return p}});var o=(e,t)=>({var:e,varRef:t?"var("+e+", "+t+")":"var("+e+")"}),a={arrowShadowColor:o("--popper-arrow-shadow-color"),arrowSize:o("--popper-arrow-size","8px"),arrowSizeHalf:o("--popper-arrow-size-half"),arrowBg:o("--popper-arrow-bg"),transformOrigin:o("--popper-transform-origin"),arrowOffset:o("--popper-arrow-offset")};function i(e){return e.includes("top")?"1px 1px 1px 0 var(--popper-arrow-shadow-color)":e.includes("bottom")?"-1px -1px 1px 0 var(--popper-arrow-shadow-color)":e.includes("right")?"-1px 1px 1px 0 var(--popper-arrow-shadow-color)":e.includes("left")?"1px -1px 1px 0 var(--popper-arrow-shadow-color)":void 0}var s={top:"bottom center","top-start":"bottom left","top-end":"bottom right",bottom:"top center","bottom-start":"top left","bottom-end":"top right",left:"right center","left-start":"right top","left-end":"right bottom",right:"left center","right-start":"left top","right-end":"left bottom"},f=e=>s[e],c={scroll:!0,resize:!0};function p(e){return"object"===typeof e?{enabled:!0,options:n({},c,e)}:{enabled:e,options:c}}},38347:function(e,t,r){"use strict";function n(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}r.d(t,{Z:function(){return n}})}}]);