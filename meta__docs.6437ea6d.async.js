!(function(){var It=Object.defineProperty,ht=Object.defineProperties;var gt=Object.getOwnPropertyDescriptors;var gn=Object.getOwnPropertySymbols;var yt=Object.prototype.hasOwnProperty,Et=Object.prototype.propertyIsEnumerable;var yn=(d,u,n)=>u in d?It(d,u,{enumerable:!0,configurable:!0,writable:!0,value:n}):d[u]=n,We=(d,u)=>{for(var n in u||(u={}))yt.call(u,n)&&yn(d,n,u[n]);if(gn)for(var n of gn(u))Et.call(u,n)&&yn(d,n,u[n]);return d},En=(d,u)=>ht(d,gt(u));(self.webpackChunk_rc_component_input=self.webpackChunk_rc_component_input||[]).push([[904],{10763:function(d,u){"use strict";Object.defineProperty(u,"__esModule",{value:!0}),u.default=n;function n(){return!!(typeof window!="undefined"&&window.document&&window.document.createElement)}},56640:function(d,u,n){"use strict";var i;i={value:!0},i=M,i=Ne,u.nH=v,i=fe;var c=n(67294),I=A(n(21904)),E=A(n(63052));function A(C){return C&&C.__esModule?C:{default:C}}function f(C,w=!1){if((0,I.default)(C)){const N=C.nodeName.toLowerCase(),B=["input","select","textarea","button"].includes(N)||C.isContentEditable||N==="a"&&!!C.getAttribute("href"),ne=C.getAttribute("tabindex"),Me=Number(ne);let xe=null;return ne&&!Number.isNaN(Me)?xe=Me:B&&xe===null&&(xe=0),B&&C.disabled&&(xe=null),xe!==null&&(xe>=0||w&&xe<0)}return!1}function M(C,w=!1){const N=[...C.querySelectorAll("*")].filter(B=>f(B,w));return f(C,w)&&N.unshift(C),N}function v(C,w){if(!C)return;C.focus(w);const{cursor:N}=w||{};if(N&&(C instanceof HTMLInputElement||C instanceof HTMLTextAreaElement)){const B=C.value.length;switch(N){case"start":C.setSelectionRange(0,0);break;case"end":C.setSelectionRange(B,B);break;default:C.setSelectionRange(0,B)}}}let U=null,a=[];const _=new Map,g=new Map;function h(){return a[a.length-1]}function L(C){const w=h();if(C&&w){let N;for(const[ne,Me]of _.entries())if(Me===w){N=ne;break}const B=g.get(N);return!!B&&(B===C||B.contains(C))}return!1}function b(C){const{activeElement:w}=document;return C===w||C.contains(w)}function l(){const C=h(),{activeElement:w}=document;if(!L(w))if(C&&!b(C)){const N=M(C),B=N.includes(U)?U:N[0];B==null||B.focus({preventScroll:!0})}else U=w}function De(C){if(C.key==="Tab"){const{activeElement:w}=document,N=h(),B=M(N),ne=B[B.length-1];C.shiftKey&&w===B[0]?U=ne:!C.shiftKey&&w===ne&&(U=B[0])}}function Ne(C,w){return C&&(_.set(w,C),a=a.filter(N=>N!==C),a.push(C),window.addEventListener("focusin",l),window.addEventListener("keydown",De,!0),l()),()=>{U=null,a=a.filter(N=>N!==C),_.delete(w),g.delete(w),a.length===0&&(window.removeEventListener("focusin",l),window.removeEventListener("keydown",De,!0))}}function fe(C,w){const N=(0,E.default)();return(0,c.useEffect)(()=>{if(C){const ne=w();if(ne)return Ne(ne,N)}},[C,N]),[ne=>{ne&&g.set(N,ne)}]}},21904:function(d,u){"use strict";Object.defineProperty(u,"__esModule",{value:!0}),u.default=void 0;var n=i=>{if(!i)return!1;if(i instanceof Element){if(i.offsetParent)return!0;if(i.getBBox){const{width:c,height:I}=i.getBBox();if(c||I)return!0}if(i.getBoundingClientRect){const{width:c,height:I}=i.getBoundingClientRect();if(c||I)return!0}}return!1};u.default=n},96607:function(d,u,n){"use strict";var i;i={value:!0},u.Z=A;var c=n(67294),I=E(n(19831));function E(f){return f&&f.__esModule?f:{default:f}}function A(f,M){const[v,U]=(0,c.useState)(f),a=M!==void 0?M:v;return(0,I.default)(_=>{_||U(M)},[M]),[a,U]}},63052:function(d,u,n){"use strict";Object.defineProperty(u,"__esModule",{value:!0}),u.default=void 0,u.getId=M,u.resetUuid=f;var i=I(n(67294));function c(a){if(typeof WeakMap!="function")return null;var _=new WeakMap,g=new WeakMap;return(c=function(h){return h?g:_})(a)}function I(a,_){if(!_&&a&&a.__esModule)return a;if(a===null||typeof a!="object"&&typeof a!="function")return{default:a};var g=c(_);if(g&&g.has(a))return g.get(a);var h={__proto__:null},L=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var b in a)if(b!=="default"&&Object.prototype.hasOwnProperty.call(a,b)){var l=L?Object.getOwnPropertyDescriptor(a,b):null;l&&(l.get||l.set)?Object.defineProperty(h,b,l):h[b]=a[b]}return h.default=a,g&&g.set(a,h),h}function E(){return We({},i).useId}let A=0;function f(){}function M(a,_){const h=String(_).replace(/[^a-zA-Z0-9_.:-]/g,"-");return`${a}-${h}`}const v=E();var U=u.default=v?function(_){const g=v();return _||g}:function(_){const[g,h]=i.useState("ssr-id");return i.useEffect(()=>{const L=A;A+=1,h(`rc_unique_${L}`)},[]),_||g}},19831:function(d,u,n){"use strict";Object.defineProperty(u,"__esModule",{value:!0}),u.useLayoutUpdateEffect=u.default=void 0;var i=A(n(67294)),c=I(n(10763));function I(a){return a&&a.__esModule?a:{default:a}}function E(a){if(typeof WeakMap!="function")return null;var _=new WeakMap,g=new WeakMap;return(E=function(h){return h?g:_})(a)}function A(a,_){if(!_&&a&&a.__esModule)return a;if(a===null||typeof a!="object"&&typeof a!="function")return{default:a};var g=E(_);if(g&&g.has(a))return g.get(a);var h={__proto__:null},L=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var b in a)if(b!=="default"&&Object.prototype.hasOwnProperty.call(a,b)){var l=L?Object.getOwnPropertyDescriptor(a,b):null;l&&(l.get||l.set)?Object.defineProperty(h,b,l):h[b]=a[b]}return h.default=a,g&&g.set(a,h),h}const f=(0,c.default)()?i.useLayoutEffect:i.useEffect,M=(a,_)=>{const g=i.useRef(!0);f(()=>a(g.current),_),f(()=>(g.current=!1,()=>{g.current=!0}),[])},v=(a,_)=>{M(g=>{if(!g)return a()},_)};u.useLayoutUpdateEffect=v;var U=u.default=M},74531:function(d,u){"use strict";var n;n={value:!0},u.Z=i;function i(c,I){const E=Object.assign({},c);return Array.isArray(I)&&I.forEach(A=>{delete E[A]}),E}},86440:function(d,u){"use strict";var n;n={value:!0},u.Z=void 0;let i=v=>+setTimeout(v,16),c=v=>clearTimeout(v);typeof window!="undefined"&&"requestAnimationFrame"in window&&(i=v=>window.requestAnimationFrame(v),c=v=>window.cancelAnimationFrame(v));let I=0;const E=new Map;function A(v){E.delete(v)}const f=(v,U=1)=>{I+=1;const a=I;function _(g){if(g===0)A(a),v();else{const h=i(()=>{_(g-1)});E.set(a,h)}}return _(U),a};f.cancel=v=>{const U=E.get(v);return A(v),c(U)};var M=u.Z=f},91678:function(d,u,n){"use strict";var i;n.r(u),n.d(u,{demos:function(){return U}});var c=n(15009),I=n.n(c),E=n(99289),A=n.n(E),f=n(67294),M=n(38495),v=n(69945),U={"docs-demo-addon-demo-addon":{component:f.memo(f.lazy(function(){return n.e(433).then(n.bind(n,99355))})),asset:{type:"BLOCK",id:"docs-demo-addon-demo-addon",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:n(70042).Z},"@rc-component/input":{type:"NPM",value:"1.3.0"},react:{type:"NPM",value:"18.3.1"},"../../assets/index.less":{type:"FILE",value:n(86834).Z}},entry:"index.tsx"},context:{"../../assets/index.less":v,"@rc-component/input":M,react:i||(i=n.t(f,2)),"/Users/jilin/projects/antd/rc-input/assets/index.less":v},renderOpts:{compile:function(){var a=A()(I()().mark(function g(){var h,L=arguments;return I()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,n.e(862).then(n.bind(n,16862));case 2:return l.abrupt("return",(h=l.sent).default.apply(h,L));case 3:case"end":return l.stop()}},g)}));function _(){return a.apply(this,arguments)}return _}()}}}},24703:function(d,u,n){"use strict";var i;n.r(u),n.d(u,{demos:function(){return U}});var c=n(15009),I=n.n(c),E=n(99289),A=n.n(E),f=n(67294),M=n(38495),v=n(69945),U={"docs-demo-allow-clear-demo-allow-clear":{component:f.memo(f.lazy(function(){return n.e(433).then(n.bind(n,52710))})),asset:{type:"BLOCK",id:"docs-demo-allow-clear-demo-allow-clear",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:n(94533).Z},react:{type:"NPM",value:"18.3.1"},"@rc-component/input":{type:"NPM",value:"1.3.0"},"../../assets/index.less":{type:"FILE",value:n(86834).Z}},entry:"index.tsx"},context:{"../../assets/index.less":v,react:i||(i=n.t(f,2)),"@rc-component/input":M,"/Users/jilin/projects/antd/rc-input/assets/index.less":v},renderOpts:{compile:function(){var a=A()(I()().mark(function g(){var h,L=arguments;return I()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,n.e(862).then(n.bind(n,16862));case 2:return l.abrupt("return",(h=l.sent).default.apply(h,L));case 3:case"end":return l.stop()}},g)}));function _(){return a.apply(this,arguments)}return _}()}}}},33147:function(d,u,n){"use strict";var i;n.r(u),n.d(u,{demos:function(){return U}});var c=n(15009),I=n.n(c),E=n(99289),A=n.n(E),f=n(67294),M=n(38495),v=n(69945),U={"docs-demo-basic-demo-basic":{component:f.memo(f.lazy(function(){return n.e(433).then(n.bind(n,6536))})),asset:{type:"BLOCK",id:"docs-demo-basic-demo-basic",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:n(99306).Z},react:{type:"NPM",value:"18.3.1"},"@rc-component/input":{type:"NPM",value:"1.3.0"},"../../assets/index.less":{type:"FILE",value:n(86834).Z}},entry:"index.tsx"},context:{"../../assets/index.less":v,react:i||(i=n.t(f,2)),"@rc-component/input":M,"/Users/jilin/projects/antd/rc-input/assets/index.less":v},renderOpts:{compile:function(){var a=A()(I()().mark(function g(){var h,L=arguments;return I()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,n.e(862).then(n.bind(n,16862));case 2:return l.abrupt("return",(h=l.sent).default.apply(h,L));case 3:case"end":return l.stop()}},g)}));function _(){return a.apply(this,arguments)}return _}()}}}},64165:function(d,u,n){"use strict";var i;n.r(u),n.d(u,{demos:function(){return U}});var c=n(15009),I=n.n(c),E=n(99289),A=n.n(E),f=n(67294),M=n(38495),v=n(69945),U={"docs-demo-prefix-suffix-demo-prefix-suffix":{component:f.memo(f.lazy(function(){return n.e(433).then(n.bind(n,59409))})),asset:{type:"BLOCK",id:"docs-demo-prefix-suffix-demo-prefix-suffix",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:n(43920).Z},"@rc-component/input":{type:"NPM",value:"1.3.0"},react:{type:"NPM",value:"18.3.1"},"../../assets/index.less":{type:"FILE",value:n(86834).Z}},entry:"index.tsx"},context:{"../../assets/index.less":v,"@rc-component/input":M,react:i||(i=n.t(f,2)),"/Users/jilin/projects/antd/rc-input/assets/index.less":v},renderOpts:{compile:function(){var a=A()(I()().mark(function g(){var h,L=arguments;return I()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,n.e(862).then(n.bind(n,16862));case 2:return l.abrupt("return",(h=l.sent).default.apply(h,L));case 3:case"end":return l.stop()}},g)}));function _(){return a.apply(this,arguments)}return _}()}}}},94793:function(d,u,n){"use strict";var i;n.r(u),n.d(u,{demos:function(){return U}});var c=n(15009),I=n.n(c),E=n(99289),A=n.n(E),f=n(67294),M=n(38495),v=n(69945),U={"docs-demo-show-count-demo-show-count":{component:f.memo(f.lazy(function(){return n.e(433).then(n.bind(n,66744))})),asset:{type:"BLOCK",id:"docs-demo-show-count-demo-show-count",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:n(5280).Z},"@rc-component/input":{type:"NPM",value:"1.3.0"},react:{type:"NPM",value:"18.3.1"},"../../assets/index.less":{type:"FILE",value:n(86834).Z}},entry:"index.tsx"},context:{"../../assets/index.less":v,"@rc-component/input":M,react:i||(i=n.t(f,2)),"/Users/jilin/projects/antd/rc-input/assets/index.less":v},renderOpts:{compile:function(){var a=A()(I()().mark(function g(){var h,L=arguments;return I()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,n.e(862).then(n.bind(n,16862));case 2:return l.abrupt("return",(h=l.sent).default.apply(h,L));case 3:case"end":return l.stop()}},g)}));function _(){return a.apply(this,arguments)}return _}()}}}},87981:function(d,u,n){"use strict";var i;n.r(u),n.d(u,{demos:function(){return U}});var c=n(15009),I=n.n(c),E=n(99289),A=n.n(E),f=n(67294),M=n(38495),v=n(69945),U={"docs-demo-textarea-demo-textarea-basic":{component:f.memo(f.lazy(function(){return n.e(433).then(n.bind(n,18923))})),asset:{type:"BLOCK",id:"docs-demo-textarea-demo-textarea-basic",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:n(10096).Z},"@rc-component/input":{type:"NPM",value:"1.3.0"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"@rc-component/input":M,react:i||(i=n.t(f,2))},renderOpts:{compile:function(){var a=A()(I()().mark(function g(){var h,L=arguments;return I()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,n.e(862).then(n.bind(n,16862));case 2:return l.abrupt("return",(h=l.sent).default.apply(h,L));case 3:case"end":return l.stop()}},g)}));function _(){return a.apply(this,arguments)}return _}()}},"docs-demo-textarea-demo-textarea-auto-size":{component:f.memo(f.lazy(function(){return n.e(433).then(n.bind(n,2509))})),asset:{type:"BLOCK",id:"docs-demo-textarea-demo-textarea-auto-size",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:n(48359).Z},"@rc-component/input":{type:"NPM",value:"1.3.0"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"@rc-component/input":M,react:i||(i=n.t(f,2))},renderOpts:{compile:function(){var a=A()(I()().mark(function g(){var h,L=arguments;return I()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,n.e(862).then(n.bind(n,16862));case 2:return l.abrupt("return",(h=l.sent).default.apply(h,L));case 3:case"end":return l.stop()}},g)}));function _(){return a.apply(this,arguments)}return _}()}},"docs-demo-textarea-demo-textarea-allow-clear":{component:f.memo(f.lazy(function(){return n.e(433).then(n.bind(n,2006))})),asset:{type:"BLOCK",id:"docs-demo-textarea-demo-textarea-allow-clear",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:n(13839).Z},"@rc-component/input":{type:"NPM",value:"1.3.0"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"@rc-component/input":M,react:i||(i=n.t(f,2))},renderOpts:{compile:function(){var a=A()(I()().mark(function g(){var h,L=arguments;return I()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,n.e(862).then(n.bind(n,16862));case 2:return l.abrupt("return",(h=l.sent).default.apply(h,L));case 3:case"end":return l.stop()}},g)}));function _(){return a.apply(this,arguments)}return _}()}},"docs-demo-textarea-demo-textarea-show-count":{component:f.memo(f.lazy(function(){return n.e(433).then(n.bind(n,13373))})),asset:{type:"BLOCK",id:"docs-demo-textarea-demo-textarea-show-count",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:n(99049).Z},"@rc-component/input":{type:"NPM",value:"1.3.0"},react:{type:"NPM",value:"18.3.1"},"../../assets/index.less":{type:"FILE",value:n(86834).Z}},entry:"index.tsx"},context:{"../../assets/index.less":v,"@rc-component/input":M,react:i||(i=n.t(f,2)),"/Users/jilin/projects/antd/rc-input/assets/index.less":v},renderOpts:{compile:function(){var a=A()(I()().mark(function g(){var h,L=arguments;return I()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,n.e(862).then(n.bind(n,16862));case 2:return l.abrupt("return",(h=l.sent).default.apply(h,L));case 3:case"end":return l.stop()}},g)}));function _(){return a.apply(this,arguments)}return _}()}}}},11171:function(d,u,n){"use strict";n.r(u),n.d(u,{demos:function(){return c}});var i=n(67294),c={}},38495:function(d,u,n){"use strict";n.r(u),n.d(u,{BaseInput:function(){return De},ResizableTextArea:function(){return In},TextArea:function(){return vt},default:function(){return mt}});var i=n(97857),c=n.n(i),I=n(9783),E=n.n(I),A=n(52677),f=n.n(A);function M(e){var t,r,o="";if(typeof e=="string"||typeof e=="number")o+=e;else if(typeof e=="object")if(Array.isArray(e)){var s=e.length;for(t=0;t<s;t++)e[t]&&(r=M(e[t]))&&(o&&(o+=" "),o+=r)}else for(r in e)e[r]&&(o&&(o+=" "),o+=r);return o}function v(){for(var e,t,r=0,o="",s=arguments.length;r<s;r++)(e=arguments[r])&&(t=M(e))&&(o&&(o+=" "),o+=t);return o}var U=null,a=n(67294);function _(e){return!!(e.addonBefore||e.addonAfter)}function g(e){return!!(e.prefix||e.suffix||e.allowClear)}function h(e,t,r){var o=t.cloneNode(!0),s=Object.create(e,{target:{value:o},currentTarget:{value:o}});return o.value=r,typeof t.selectionStart=="number"&&typeof t.selectionEnd=="number"&&(o.selectionStart=t.selectionStart,o.selectionEnd=t.selectionEnd),o.setSelectionRange=function(){t.setSelectionRange.apply(t,arguments)},s}function L(e,t,r,o){if(r){var s=t;if(t.type==="click"){s=h(t,e,""),r(s);return}if(e.type!=="file"&&o!==void 0){s=h(t,e,o),r(s);return}r(s)}}var b=n(85893),l=a.forwardRef(function(e,t){var r,o,s,x=e.inputElement,p=e.children,m=e.prefixCls,O=e.prefix,y=e.suffix,R=e.addonBefore,j=e.addonAfter,S=e.className,z=e.style,W=e.disabled,X=e.readOnly,pe=e.focused,k=e.triggerFocus,$=e.allowClear,ye=e.value,H=e.handleReset,G=e.hidden,K=e.classes,T=e.classNames,re=e.dataAttrs,V=e.styles,Y=e.components,oe=e.onClear,ue=p!=null?p:x,ve=(Y==null?void 0:Y.affixWrapper)||"span",Ie=(Y==null?void 0:Y.groupWrapper)||"span",te=(Y==null?void 0:Y.wrapper)||"span",F=(Y==null?void 0:Y.groupAddon)||"span",le=(0,a.useRef)(null),he=function(_e){var Te;(Te=le.current)!==null&&Te!==void 0&&Te.contains(_e.target)&&(k==null||k())},ie=g(e),q=(0,a.cloneElement)(ue,{value:ye,className:v((r=ue.props)===null||r===void 0?void 0:r.className,!ie&&(T==null?void 0:T.variant))||null}),Ee=(0,a.useRef)(null);if(a.useImperativeHandle(t,function(){return{nativeElement:Ee.current||le.current}}),ie){var de=null;if($){var se=!W&&!X&&ye&&!(f()($)==="object"&&$.disabled),J="".concat(m,"-clear-icon"),me=f()($)==="object"&&$!==null&&$!==void 0&&$.clearIcon?$.clearIcon:"\u2716";de=(0,b.jsx)("button",{type:"button",tabIndex:-1,onClick:function(_e){H==null||H(_e),oe==null||oe()},onMouseDown:function(_e){return _e.preventDefault()},className:v(J,E()(E()({},"".concat(J,"-hidden"),!se),"".concat(J,"-has-suffix"),!!y),T==null?void 0:T.clear),style:V==null?void 0:V.clear,children:me})}var ge="".concat(m,"-affix-wrapper"),Oe=v(ge,E()(E()(E()(E()(E()({},"".concat(m,"-disabled"),W),"".concat(ge,"-disabled"),W),"".concat(ge,"-focused"),pe),"".concat(ge,"-readonly"),X),"".concat(ge,"-input-with-clear-btn"),y&&$&&ye),K==null?void 0:K.affixWrapper,T==null?void 0:T.affixWrapper,T==null?void 0:T.variant),Pe=(y||$)&&(0,b.jsxs)("span",{className:v("".concat(m,"-suffix"),T==null?void 0:T.suffix),style:V==null?void 0:V.suffix,children:[de,y]});q=(0,b.jsxs)(ve,c()(c()({className:Oe,style:V==null?void 0:V.affixWrapper,onClick:he},re==null?void 0:re.affixWrapper),{},{ref:le,children:[O&&(0,b.jsx)("span",{className:v("".concat(m,"-prefix"),T==null?void 0:T.prefix),style:V==null?void 0:V.prefix,children:O}),q,Pe]}))}if(_(e)){var be="".concat(m,"-group"),Le="".concat(be,"-addon"),Ae="".concat(be,"-wrapper"),ze=v("".concat(m,"-wrapper"),be,K==null?void 0:K.wrapper,T==null?void 0:T.wrapper),we=v(Ae,E()({},"".concat(Ae,"-disabled"),W),K==null?void 0:K.group,T==null?void 0:T.groupWrapper);q=(0,b.jsx)(Ie,{className:we,ref:Ee,children:(0,b.jsxs)(te,{className:ze,children:[R&&(0,b.jsx)(F,{className:Le,children:R}),q,j&&(0,b.jsx)(F,{className:Le,children:j})]})})}return a.cloneElement(q,{className:v((o=q.props)===null||o===void 0?void 0:o.className,S)||null,style:c()(c()({},(s=q.props)===null||s===void 0?void 0:s.style),z),hidden:G})}),De=l,Ne=n(5574),fe=n.n(Ne),C=n(13769),w=n.n(C),N=n(74531),B=["show"];function ne(e,t){if(!t.max)return!0;var r=t.strategy(e);return r<=t.max}function Me(e,t){return a.useMemo(function(){var r={};t&&(r.show=f()(t)==="object"&&t.formatter?t.formatter:!!t),r=c()(c()({},r),e);var o=r,s=o.show,x=w()(o,B);return c()(c()({},x),{},{show:!!s,showFormatter:typeof s=="function"?s:void 0,strategy:x.strategy||function(p){return p.length}})},[e,t])}function xe(e){var t=e.countConfig,r=e.value,o=e.maxLength;return a.useMemo(function(){var s,x=(s=t.max)!==null&&s!==void 0?s:o,p=t.strategy(r),m=!!x&&p>x,O=Number(x)>0,y=t.show?t.showFormatter?t.showFormatter({value:r,count:p,maxLength:x}):"".concat(p).concat(O?" / ".concat(x):""):void 0;return{mergedMax:x,isOutOfRange:m,dataCount:y}},[t,o,r])}var _n=n(19632),Cn=n.n(_n);function tn(e){var t=e.countConfig,r=e.getTarget,o=a.useState(null),s=fe()(o,2),x=s[0],p=s[1],m=a.useRef(r);a.useEffect(function(){m.current=r},[r]),a.useEffect(function(){if(x){var y;(y=m.current())===null||y===void 0||y.setSelectionRange.apply(y,Cn()(x)),p(null)}},[x]);var O=a.useCallback(function(y,R){var j=y;if(!R&&t.exceedFormatter&&t.max&&t.strategy(y)>t.max&&(j=t.exceedFormatter(y,{max:t.max}),y!==j)){var S,z;p([((S=m.current())===null||S===void 0?void 0:S.selectionStart)||0,((z=m.current())===null||z===void 0?void 0:z.selectionEnd)||0])}return j},[t]);return O}var an=n(96607);function rn(e,t){var r=(0,an.Z)(e,t),o=fe()(r,2),s=o[0],x=o[1],p=s==null?"":String(s);return{value:s,setValue:x,formatValue:p}}var Rn=n(56640),bn=["autoComplete","onChange","onFocus","onBlur","onPressEnter","onKeyDown","onKeyUp","prefixCls","disabled","htmlSize","className","maxLength","suffix","showCount","count","type","classes","classNames","styles","onCompositionStart","onCompositionEnd"],An=(0,a.forwardRef)(function(e,t){var r=e.autoComplete,o=e.onChange,s=e.onFocus,x=e.onBlur,p=e.onPressEnter,m=e.onKeyDown,O=e.onKeyUp,y=e.prefixCls,R=y===void 0?"rc-input":y,j=e.disabled,S=e.htmlSize,z=e.className,W=e.maxLength,X=e.suffix,pe=e.showCount,k=e.count,$=e.type,ye=$===void 0?"text":$,H=e.classes,G=e.classNames,K=e.styles,T=e.onCompositionStart,re=e.onCompositionEnd,V=w()(e,bn),Y=(0,a.useState)(!1),oe=fe()(Y,2),ue=oe[0],ve=oe[1],Ie=(0,a.useRef)(!1),te=(0,a.useRef)(!1),F=(0,a.useRef)(null),le=(0,a.useRef)(null),he=function(D){F.current&&(0,Rn.nH)(F.current,D)},ie=rn(e.defaultValue,e.value),q=ie.setValue,Ee=ie.formatValue,de=Me(k,pe),se=xe({countConfig:de,value:Ee,maxLength:W}),J=se.isOutOfRange,me=se.dataCount,ge=tn({countConfig:de,getTarget:function(){return F.current}});(0,a.useImperativeHandle)(t,function(){var Z;return{focus:he,blur:function(){var ee;(ee=F.current)===null||ee===void 0||ee.blur()},setSelectionRange:function(ee,Se,Ce){var Ue;(Ue=F.current)===null||Ue===void 0||Ue.setSelectionRange(ee,Se,Ce)},select:function(){var ee;(ee=F.current)===null||ee===void 0||ee.select()},input:F.current,nativeElement:((Z=le.current)===null||Z===void 0?void 0:Z.nativeElement)||F.current}}),(0,a.useEffect)(function(){te.current&&(te.current=!1),ve(function(Z){return Z&&j?!1:Z})},[j]);var Oe=function(D,ee,Se){var Ce=ge(ee,Ie.current);Se.source==="compositionEnd"&&ee===Ce||(q(Ce),F.current&&L(F.current,D,o,Ce))},Pe=function(D){Oe(D,D.target.value,{source:"change"})},be=function(D){Ie.current=!1,Oe(D,D.currentTarget.value,{source:"compositionEnd"}),re==null||re(D)},Le=function(D){p&&D.key==="Enter"&&!te.current&&!D.nativeEvent.isComposing&&(te.current=!0,p(D)),m==null||m(D)},Ae=function(D){D.key==="Enter"&&(te.current=!1),O==null||O(D)},ze=function(D){ve(!0),s==null||s(D)},we=function(D){te.current&&(te.current=!1),ve(!1),x==null||x(D)},je=function(D){q(""),he(),F.current&&L(F.current,D,o)},_e=J&&"".concat(R,"-out-of-range"),Te=function(){var D=(0,N.Z)(e,["prefixCls","onPressEnter","addonBefore","addonAfter","prefix","suffix","allowClear","defaultValue","showCount","count","classes","htmlSize","styles","classNames","onClear"]);return(0,b.jsx)("input",c()(c()({autoComplete:r},D),{},{onChange:Pe,onFocus:ze,onBlur:we,onKeyDown:Le,onKeyUp:Ae,className:v(R,E()({},"".concat(R,"-disabled"),j),G==null?void 0:G.input),style:K==null?void 0:K.input,ref:F,size:S,type:ye,onCompositionStart:function(Se){Ie.current=!0,T==null||T(Se)},onCompositionEnd:be}))},nn=function(){return X||de.show?(0,b.jsxs)(b.Fragment,{children:[de.show&&(0,b.jsx)("span",{className:v("".concat(R,"-show-count-suffix"),E()({},"".concat(R,"-show-count-has-suffix"),!!X),G==null?void 0:G.count),style:c()({},K==null?void 0:K.count),children:me}),X]}):null};return(0,b.jsx)(De,c()(c()({},V),{},{prefixCls:R,className:v(z,_e),handleReset:je,value:Ee,focused:ue,triggerFocus:he,suffix:nn(),disabled:j,classes:H,classNames:G,styles:K,ref:le,children:Te()}))}),Mn=An;const On=Symbol.for("react.element"),Pn=Symbol.for("react.transitional.element"),jn=Symbol.for("react.fragment");function on(e){return e&&typeof e=="object"&&(e.$$typeof===On||e.$$typeof===Pn)&&e.type===jn}function Be(e,t={}){let r=[];return a.Children.forEach(e,o=>{o==null&&!t.keepEmpty||(Array.isArray(o)?r=r.concat(Be(o)):on(o)&&o.props?r=r.concat(Be(o.props.children,t)):r.push(o))}),r}let Ke={};const Tn=[],Sn=e=>{Tn.push(e)};function Dn(e,t){}function Ln(e,t){}function wn(){Ke={}}function un(e,t,r){!t&&!Ke[r]&&(e(!1,r),Ke[r]=!0)}function Fe(e,t){un(Dn,e,t)}function zn(e,t){un(Ln,e,t)}Fe.preMessage=Sn,Fe.resetWarned=wn,Fe.noteOnce=zn;var _t=null;function sn(e){return e instanceof HTMLElement||e instanceof SVGElement}function Ve(e){return e&&typeof e=="object"&&sn(e.nativeElement)?e.nativeElement:sn(e)?e:null}function Ct(e){const t=Ve(e);if(t)return t;if(e&&typeof e=="object"&&"current"in e){const r=Ve(e.current);if(r)return r}return null}var $e=n(59864);function Un(e,t,r){const o=a.useRef({});return(!("value"in o.current)||r(o.current.condition,t))&&(o.current.value=e(),o.current.condition=t),o.current.value}const Nn=Number(a.version.split(".")[0]),Wn=(e,t)=>{typeof e=="function"?e(t):typeof e=="object"&&e&&"current"in e&&(e.current=t)},Bn=(...e)=>{const t=e.filter(Boolean);return t.length<=1?t[0]:r=>{e.forEach(o=>{Wn(o,r)})}},Kn=(...e)=>Un(()=>Bn(...e),e,(t,r)=>t.length!==r.length||t.every((o,s)=>o!==r[s])),ln=e=>{var r,o;if(!e)return!1;if(He(e)&&Nn>=19)return!0;const t=(0,$e.isMemo)(e)?e.type.type:e.type;return!(typeof t=="function"&&!((r=t.prototype)!=null&&r.render)&&t.$$typeof!==$e.ForwardRef||typeof e=="function"&&!((o=e.prototype)!=null&&o.render)&&e.$$typeof!==$e.ForwardRef)};function He(e){return(0,a.isValidElement)(e)&&!on(e)}const Rt=e=>He(e)&&ln(e),Fn=e=>{if(e&&He(e)){const t=e;return t.props.propertyIsEnumerable("ref")?t.props.ref:t.ref}return null},Ze=a.createContext(null);function Vn({children:e,onBatchResize:t}){const r=a.useRef(0),o=a.useRef([]),s=a.useContext(Ze),x=a.useCallback((p,m,O)=>{r.current+=1;const y=r.current;o.current.push({size:p,element:m,data:O}),Promise.resolve().then(()=>{y===r.current&&(t==null||t(o.current),o.current=[])}),s==null||s(p,m,O)},[t,s]);return a.createElement(Ze.Provider,{value:x},e)}const Re=new Map;function $n(e){e.forEach(t=>{var o;const{target:r}=t;(o=Re.get(r))==null||o.forEach(s=>s(r))})}let Ge;function dn(){return Ge||(Ge=new ResizeObserver($n)),Ge}const bt=null,At=null;function Hn(e,t){Re.has(e)||(Re.set(e,new Set),dn().observe(e)),Re.get(e).add(t)}function Zn(e,t){Re.has(e)&&(Re.get(e).delete(t),Re.get(e).size||(dn().unobserve(e),Re.delete(e)))}function Gn(e){const t=a.useRef(e);return t.current=e,a.useCallback((...o)=>{var s;return(s=t.current)==null?void 0:s.call(t,...o)},[])}var Yn=Gn;function Xn(){return!!(typeof window!="undefined"&&window.document&&window.document.createElement)}const cn=Xn()?a.useLayoutEffect:a.useEffect,Jn=(e,t)=>{const r=React.useRef(!0);cn(()=>e(r.current),t),cn(()=>(r.current=!1,()=>{r.current=!0}),[])},Mt=(e,t)=>{Jn(r=>{if(!r)return e()},t)};var Ot=null;const Pt=e=>{const t=React.useRef(!1),[r,o]=React.useState(e);React.useEffect(()=>(t.current=!1,()=>{t.current=!0}),[]);function s(x,p){p&&t.current||o(x)}return[r,s]};var jt=null;function Ye(e){return e!==void 0}function Tt(e,t){const{defaultValue:r,value:o,onChange:s,postState:x}=t||{},[p,m]=useState(()=>Ye(o)?o:Ye(r)?typeof r=="function"?r():r:typeof e=="function"?e():e),O=o!==void 0?o:p,y=x?x(O):O,R=useEvent(s),[j,S]=useState([O]);useLayoutUpdateEffect(()=>{const W=j[0];p!==W&&R(p,W)},[j]),useLayoutUpdateEffect(()=>{Ye(o)||m(o)},[o]);const z=useEvent((W,X)=>{m(W,X),S([O],X)});return[y,z]}function St(e,t){const[r,o]=useState(e),s=t!==void 0?t:r;return useLayoutEffect(x=>{x||o(t)},[t]),[s,o]}function fn(e,t,r,o){if(!t.length)return r;const[s,...x]=t;let p;return!e&&typeof s=="number"?p=[]:Array.isArray(e)?p=[...e]:p=We({},e),o&&r===void 0&&x.length===1?delete p[s][x[0]]:p[s]=fn(p[s],x,r,o),p}function Xe(e,t,r,o=!1){return t.length&&o&&r===void 0&&!get(e,t.slice(0,-1))?e:fn(e,t,r,o)}function Qn(e){return typeof e=="object"&&e!==null&&Object.getPrototypeOf(e)===Object.prototype}function pn(e){return Array.isArray(e)?[]:{}}const kn=typeof Reflect=="undefined"?Object.keys:Reflect.ownKeys;function qn(e,t={}){const{prepareArray:r}=t,o=r||(()=>[]);let s=pn(e[0]);return e.forEach(x=>{function p(m,O){const y=new Set(O),R=get(x,m),j=Array.isArray(R);if(j||Qn(R)){if(!y.has(R)){y.add(R);const S=get(s,m);j?s=Xe(s,m,o(S,R)):(!S||typeof S!="object")&&(s=Xe(s,m,pn(R))),kn(R).forEach(z=>{Object.getOwnPropertyDescriptor(R,z).enumerable&&p([...m,z],y)})}}else s=Xe(s,m,R)}p([])}),s}function Dt(...e){return qn(e)}function et(e,t,r,o){const s=a.useRef({width:-1,height:-1,offsetWidth:-1,offsetHeight:-1}),x=Yn(m=>{const{width:O,height:y}=m.getBoundingClientRect(),{offsetWidth:R,offsetHeight:j}=m,S=Math.floor(O),z=Math.floor(y);if(s.current.width!==S||s.current.height!==z||s.current.offsetWidth!==R||s.current.offsetHeight!==j){const W={width:S,height:z,offsetWidth:R,offsetHeight:j};s.current=W;const X=R===Math.round(O)?O:R,pe=j===Math.round(y)?y:j,k=En(We({},W),{offsetWidth:X,offsetHeight:pe});o==null||o(k,m),Promise.resolve().then(()=>{r==null||r(k,m)})}}),p=typeof t=="function";a.useEffect(()=>{const m=p?t():t;return m&&e&&Hn(m,x),()=>{m&&Zn(m,x)}},[e,p?0:t])}function nt(e,t){const{children:r,disabled:o,onResize:s,data:x}=e,p=a.useRef(null),m=a.useContext(Ze),O=typeof r=="function",y=O?r(p):r,R=!O&&a.isValidElement(y)&&ln(y),j=R?Fn(y):null,S=Kn(j,p),z=()=>Ve(p.current);return a.useImperativeHandle(t,()=>z()),et(!o,z,s,(W,X)=>{m==null||m(W,X,x)}),R?a.cloneElement(y,{ref:S}):y}var tt=a.forwardRef(nt);function Je(){return Je=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},Je.apply(this,arguments)}const at="rc-observer-key";function rt(e,t){const{children:r}=e;return(typeof r=="function"?[r]:Be(r)).map((s,x)=>{const p=(s==null?void 0:s.key)||`${at}-${x}`;return a.createElement(tt,Je({},e,{key:p,ref:x===0?t:void 0}),s)})}const vn=a.forwardRef(rt);vn.Collection=Vn;var ot=vn,mn=n(19831),xn=n(86440),ut=`
  min-height:0 !important;
  max-height:none !important;
  height:0 !important;
  visibility:hidden !important;
  overflow:hidden !important;
  position:absolute !important;
  z-index:-1000 !important;
  top:0 !important;
  right:0 !important;
  pointer-events: none !important;
`,st=["letter-spacing","line-height","padding-top","padding-bottom","font-family","font-weight","font-size","font-variant","text-rendering","text-transform","width","text-indent","padding-left","padding-right","border-width","box-sizing","word-break","white-space"],Qe={},ae;function lt(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,r=e.getAttribute("id")||e.getAttribute("data-reactid")||e.getAttribute("name");if(t&&Qe[r])return Qe[r];var o=window.getComputedStyle(e),s=o.getPropertyValue("box-sizing")||o.getPropertyValue("-moz-box-sizing")||o.getPropertyValue("-webkit-box-sizing"),x=parseFloat(o.getPropertyValue("padding-bottom"))+parseFloat(o.getPropertyValue("padding-top")),p=parseFloat(o.getPropertyValue("border-bottom-width"))+parseFloat(o.getPropertyValue("border-top-width")),m=st.map(function(y){return"".concat(y,":").concat(o.getPropertyValue(y))}).join(";"),O={sizingStyle:m,paddingSize:x,borderSize:p,boxSizing:s};return t&&r&&(Qe[r]=O),O}function it(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:null,o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:null;ae||(ae=document.createElement("textarea"),ae.setAttribute("tab-index","-1"),ae.setAttribute("aria-hidden","true"),ae.setAttribute("name","hiddenTextarea"),document.body.appendChild(ae)),e.getAttribute("wrap")?ae.setAttribute("wrap",e.getAttribute("wrap")):ae.removeAttribute("wrap");var s=lt(e,t),x=s.paddingSize,p=s.borderSize,m=s.boxSizing,O=s.sizingStyle;ae.setAttribute("style","".concat(O,";").concat(ut)),ae.value=e.value||e.placeholder||"";var y,R,j,S=ae.scrollHeight;if(m==="border-box"?S+=p:m==="content-box"&&(S-=x),r!==null||o!==null){ae.value=" ";var z=ae.scrollHeight-x;r!==null&&(y=z*r,m==="border-box"&&(y=y+x+p),S=Math.max(y,S)),o!==null&&(R=z*o,m==="border-box"&&(R=R+x+p),j=S>R?void 0:"hidden",S=Math.min(R,S))}var W={height:S,overflowY:j,resize:"none"};return y&&(W.minHeight=y),R&&(W.maxHeight=R),W}var dt=["prefixCls","defaultValue","value","autoSize","onResize","className","style","disabled","onChange","onInternalAutoSize"],ke=0,qe=1,en=2,ct=a.forwardRef(function(e,t){var r=e,o=r.prefixCls,s=r.defaultValue,x=r.value,p=r.autoSize,m=r.onResize,O=r.className,y=r.style,R=r.disabled,j=r.onChange,S=r.onInternalAutoSize,z=w()(r,dt),W=(0,an.Z)(s,x),X=fe()(W,2),pe=X[0],k=X[1],$=pe!=null?pe:"",ye=function(me){k(me.target.value),j==null||j(me)},H=a.useRef(null);a.useImperativeHandle(t,function(){return{textArea:H.current}});var G=a.useMemo(function(){return p&&f()(p)==="object"?[p.minRows,p.maxRows]:[]},[p]),K=fe()(G,2),T=K[0],re=K[1],V=!!p,Y=a.useState(en),oe=fe()(Y,2),ue=oe[0],ve=oe[1],Ie=a.useState(),te=fe()(Ie,2),F=te[0],le=te[1],he=function(){ve(ke)};(0,mn.default)(function(){V&&he()},[x,T,re,V]),(0,mn.default)(function(){if(ue===ke)ve(qe);else if(ue===qe){var J=it(H.current,!1,T,re);ve(en),le(J)}},[ue]);var ie=a.useRef(void 0),q=function(){ie.current!==void 0&&xn.Z.cancel(ie.current)},Ee=function(me){ue===en&&(m==null||m(me),p&&(q(),ie.current=(0,xn.Z)(function(){he()})))};a.useEffect(function(){return q},[]);var de=V?F:null,se=c()(c()({},y),de);return(ue===ke||ue===qe)&&(se.overflowY="hidden",se.overflowX="hidden"),(0,b.jsx)(ot,{onResize:Ee,disabled:!(p||m),children:(0,b.jsx)("textarea",c()(c()({},z),{},{ref:H,style:se,className:v(o,O,E()({},"".concat(o,"-disabled"),R)),disabled:R,value:$,onChange:ye}))})}),In=ct,ft=["defaultValue","value","onFocus","onBlur","onChange","allowClear","maxLength","onCompositionStart","onCompositionEnd","suffix","prefixCls","showCount","count","className","style","disabled","hidden","classNames","styles","onResize","onClear","onPressEnter","readOnly","autoSize","onKeyDown"],pt=a.forwardRef(function(e,t){var r=e.defaultValue,o=e.value,s=e.onFocus,x=e.onBlur,p=e.onChange,m=e.allowClear,O=e.maxLength,y=e.onCompositionStart,R=e.onCompositionEnd,j=e.suffix,S=e.prefixCls,z=S===void 0?"rc-textarea":S,W=e.showCount,X=e.count,pe=e.className,k=e.style,$=e.disabled,ye=e.hidden,H=e.classNames,G=e.styles,K=e.onResize,T=e.onClear,re=e.onPressEnter,V=e.readOnly,Y=e.autoSize,oe=e.onKeyDown,ue=w()(e,ft),ve=a.useState(!1),Ie=fe()(ve,2),te=Ie[0],F=Ie[1],le=a.useRef(!1),he=a.useState(null),ie=fe()(he,2),q=ie[0],Ee=ie[1],de=(0,a.useRef)(null),se=(0,a.useRef)(null),J=function(){var P;return((P=se.current)===null||P===void 0?void 0:P.textArea)||null},me=rn(r,o),ge=me.setValue,Oe=me.formatValue,Pe=Me(X,W),be=xe({countConfig:Pe,value:Oe,maxLength:O}),Le=be.isOutOfRange,Ae=be.dataCount,ze=tn({countConfig:Pe,getTarget:function(){var P;return((P=se.current)===null||P===void 0?void 0:P.textArea)||null}}),we=function(){var P;(P=J())===null||P===void 0||P.focus()};(0,a.useImperativeHandle)(t,function(){var Q;return{resizableTextArea:se.current,focus:we,blur:function(){var ce;(ce=J())===null||ce===void 0||ce.blur()},nativeElement:((Q=de.current)===null||Q===void 0?void 0:Q.nativeElement)||J()}}),(0,a.useEffect)(function(){F(function(Q){return!$&&Q})},[$]);var je=function(P,ce){var hn=ze(ce,le.current);ge(hn),L(P.currentTarget,P,p,hn)},_e=function(P){le.current=!0,y==null||y(P)},Te=function(P){le.current=!1,je(P,P.currentTarget.value),R==null||R(P)},nn=function(P){je(P,P.target.value)},Z=function(P){P.key==="Enter"&&re&&!P.nativeEvent.isComposing&&re(P),oe==null||oe(P)},D=function(P){F(!0),s==null||s(P)},ee=function(P){F(!1),x==null||x(P)},Se=function(P){ge(""),we();var ce=J();ce&&L(ce,P,p)},Ce=j;Pe.show&&(Ce=(0,b.jsxs)(b.Fragment,{children:[Ce,(0,b.jsx)("span",{className:v("".concat(z,"-data-count"),H==null?void 0:H.count),style:G==null?void 0:G.count,children:Ae})]}));var Ue=function(P){var ce;K==null||K(P),(ce=J())!==null&&ce!==void 0&&ce.style.height&&Ee(!0)},xt=!Y&&!W&&!m;return(0,b.jsx)(De,{ref:de,value:Oe,allowClear:m,handleReset:Se,suffix:Ce,prefixCls:z,classNames:c()(c()({},H),{},{affixWrapper:v(H==null?void 0:H.affixWrapper,E()(E()({},"".concat(z,"-show-count"),W),"".concat(z,"-textarea-allow-clear"),m))}),disabled:$,focused:te,className:v(pe,Le&&"".concat(z,"-out-of-range")),style:c()(c()({},k),q&&!xt?{height:"auto"}:{}),dataAttrs:typeof Ae=="string"?{affixWrapper:{"data-count":Ae}}:void 0,styles:G,hidden:ye,readOnly:V,onClear:T,children:(0,b.jsx)(In,c()(c()({},ue),{},{autoSize:Y,maxLength:O,onKeyDown:Z,onChange:nn,onFocus:D,onBlur:ee,onCompositionStart:_e,onCompositionEnd:Te,className:v(H==null?void 0:H.textarea),style:c()({resize:k==null?void 0:k.resize},G==null?void 0:G.textarea),disabled:$,prefixCls:z,onResize:Ue,ref:se,readOnly:V}))})}),vt=pt,mt=Mn},69945:function(d,u,n){"use strict";n.r(u)},45705:function(d,u,n){"use strict";n.r(u),n.d(u,{texts:function(){return i}});const i=[]},52916:function(d,u,n){"use strict";n.r(u),n.d(u,{texts:function(){return i}});const i=[]},55469:function(d,u,n){"use strict";n.r(u),n.d(u,{texts:function(){return i}});const i=[]},74344:function(d,u,n){"use strict";n.r(u),n.d(u,{texts:function(){return i}});const i=[]},11040:function(d,u,n){"use strict";n.r(u),n.d(u,{texts:function(){return i}});const i=[]},88998:function(d,u,n){"use strict";n.r(u),n.d(u,{texts:function(){return i}});const i=[]},51446:function(d,u,n){"use strict";n.r(u),n.d(u,{texts:function(){return i}});const i=[{value:`import Input from '@rc-component/input';
import { render } from 'react-dom';

render(<Input placeholder="input" allowClear />, mountNode);
`,paraId:0,tocIndex:2},{value:`import Input from '@rc-component/input';
import { render } from 'react-dom';

render(<Input.TextArea autoSize showCount />, mountNode);
`,paraId:1,tocIndex:2},{value:"Property",paraId:2,tocIndex:3},{value:"Type",paraId:2,tocIndex:3},{value:"Default",paraId:2,tocIndex:3},{value:"Description",paraId:2,tocIndex:3},{value:"prefixCls",paraId:2,tocIndex:3},{value:"string",paraId:2,tocIndex:3},{value:"rc-input",paraId:2,tocIndex:3},{value:"className",paraId:2,tocIndex:3},{value:"string",paraId:2,tocIndex:3},{value:"''",paraId:2,tocIndex:3},{value:"additional class name of input",paraId:2,tocIndex:3},{value:"style",paraId:2,tocIndex:3},{value:"React.CSSProperties",paraId:2,tocIndex:3},{value:"style properties of input",paraId:2,tocIndex:3},{value:"affixWrapperClassName",paraId:2,tocIndex:3},{value:"string",paraId:2,tocIndex:3},{value:"-",paraId:2,tocIndex:3},{value:"className with '@rc-component/input-affix-wrapper'",paraId:2,tocIndex:3},{value:"groupClassName",paraId:2,tocIndex:3},{value:"string",paraId:2,tocIndex:3},{value:"-",paraId:2,tocIndex:3},{value:"className with '@rc-component/input-group-wrapper'",paraId:2,tocIndex:3},{value:"wrapperClassName",paraId:2,tocIndex:3},{value:"string",paraId:2,tocIndex:3},{value:"-",paraId:2,tocIndex:3},{value:"className with '@rc-component/input-wrapper'",paraId:2,tocIndex:3},{value:"addonAfter",paraId:2,tocIndex:3},{value:"ReactNode",paraId:2,tocIndex:3},{value:"-",paraId:2,tocIndex:3},{value:"The label text displayed after (on the right side of) the input field",paraId:2,tocIndex:3},{value:"addonBefore",paraId:2,tocIndex:3},{value:"ReactNode",paraId:2,tocIndex:3},{value:"-",paraId:2,tocIndex:3},{value:"The label text displayed before (on the left side of) the input field",paraId:2,tocIndex:3},{value:"allowClear",paraId:2,tocIndex:3},{value:"boolean | { clearIcon: ReactNode }",paraId:2,tocIndex:3},{value:"false",paraId:2,tocIndex:3},{value:"If allow to remove input content with clear icon",paraId:2,tocIndex:3},{value:"bordered",paraId:2,tocIndex:3},{value:"boolean",paraId:2,tocIndex:3},{value:"true",paraId:2,tocIndex:3},{value:"Whether has border style",paraId:2,tocIndex:3},{value:"defaultValue",paraId:2,tocIndex:3},{value:"string",paraId:2,tocIndex:3},{value:"-",paraId:2,tocIndex:3},{value:"The initial input content",paraId:2,tocIndex:3},{value:"disabled",paraId:2,tocIndex:3},{value:"boolean",paraId:2,tocIndex:3},{value:"false",paraId:2,tocIndex:3},{value:"Whether the input is disabled",paraId:2,tocIndex:3},{value:"id",paraId:2,tocIndex:3},{value:"string",paraId:2,tocIndex:3},{value:"-",paraId:2,tocIndex:3},{value:"The ID for input",paraId:2,tocIndex:3},{value:"maxLength",paraId:2,tocIndex:3},{value:"number",paraId:2,tocIndex:3},{value:"-",paraId:2,tocIndex:3},{value:"The max length",paraId:2,tocIndex:3},{value:"showCount",paraId:2,tocIndex:3},{value:"boolean | { formatter: ({ value: string, count: number, maxLength?: number }) => ReactNode }",paraId:2,tocIndex:3},{value:"false",paraId:2,tocIndex:3},{value:"Whether show text count",paraId:2,tocIndex:3},{value:"prefix",paraId:2,tocIndex:3},{value:"ReactNode",paraId:2,tocIndex:3},{value:"-",paraId:2,tocIndex:3},{value:"The prefix icon for the Input",paraId:2,tocIndex:3},{value:"suffix",paraId:2,tocIndex:3},{value:"ReactNode",paraId:2,tocIndex:3},{value:"-",paraId:2,tocIndex:3},{value:"The suffix icon for the Input",paraId:2,tocIndex:3},{value:"type",paraId:2,tocIndex:3},{value:"string",paraId:2,tocIndex:3},{value:"text",paraId:2,tocIndex:3},{value:"The type of input, see: ",paraId:2,tocIndex:3},{value:"MDN",paraId:2,tocIndex:3},{value:"( use ",paraId:2,tocIndex:3},{value:"Input.TextArea",paraId:2,tocIndex:3},{value:" instead of ",paraId:2,tocIndex:3},{value:'type="textarea"',paraId:2,tocIndex:3},{value:")",paraId:2,tocIndex:3},{value:"value",paraId:2,tocIndex:3},{value:"string",paraId:2,tocIndex:3},{value:"-",paraId:2,tocIndex:3},{value:"The input content value",paraId:2,tocIndex:3},{value:"onChange",paraId:2,tocIndex:3},{value:"function(e)",paraId:2,tocIndex:3},{value:"-",paraId:2,tocIndex:3},{value:"Callback when user input",paraId:2,tocIndex:3},{value:"onPressEnter",paraId:2,tocIndex:3},{value:"function(e)",paraId:2,tocIndex:3},{value:"-",paraId:2,tocIndex:3},{value:"The callback function that is triggered when Enter key is pressed",paraId:2,tocIndex:3},{value:"rc-textarea",paraId:3,tocIndex:4},{value:" has been migrated into ",paraId:3,tocIndex:4},{value:"@rc-component/input",paraId:3,tocIndex:4},{value:". Use ",paraId:3,tocIndex:4},{value:"Input.TextArea",paraId:3,tocIndex:4},{value:" or the named ",paraId:3,tocIndex:4},{value:"TextArea",paraId:3,tocIndex:4},{value:" export for all textarea-related features.",paraId:3,tocIndex:4},{value:`import Input, { TextArea } from '@rc-component/input';

<Input.TextArea allowClear autoSize />;
<TextArea showCount maxLength={100} />;
`,paraId:4,tocIndex:4},{value:"Property",paraId:5,tocIndex:4},{value:"Type",paraId:5,tocIndex:4},{value:"Default",paraId:5,tocIndex:4},{value:"Description",paraId:5,tocIndex:4},{value:"prefixCls",paraId:5,tocIndex:4},{value:"string",paraId:5,tocIndex:4},{value:"rc-textarea",paraId:5,tocIndex:4},{value:"className",paraId:5,tocIndex:4},{value:"string",paraId:5,tocIndex:4},{value:"''",paraId:5,tocIndex:4},{value:"additional class name of textarea",paraId:5,tocIndex:4},{value:"style",paraId:5,tocIndex:4},{value:"React.CSSProperties",paraId:5,tocIndex:4},{value:"-",paraId:5,tocIndex:4},{value:"style properties of textarea",paraId:5,tocIndex:4},{value:"autoSize",paraId:5,tocIndex:4},{value:"boolean | object",paraId:5,tocIndex:4},{value:"-",paraId:5,tocIndex:4},{value:"Height autosize feature, can be set to ",paraId:5,tocIndex:4},{value:"true|false",paraId:5,tocIndex:4},{value:" or an object ",paraId:5,tocIndex:4},{value:"{ minRows: 2, maxRows: 6 }",paraId:5,tocIndex:4},{value:"allowClear",paraId:5,tocIndex:4},{value:"boolean | { clearIcon }",paraId:5,tocIndex:4},{value:"false",paraId:5,tocIndex:4},{value:"If allow to remove textarea content with clear icon",paraId:5,tocIndex:4},{value:"showCount",paraId:5,tocIndex:4},{value:"boolean | { formatter }",paraId:5,tocIndex:4},{value:"false",paraId:5,tocIndex:4},{value:"Whether show text count",paraId:5,tocIndex:4},{value:"count",paraId:5,tocIndex:4},{value:"CountConfig",paraId:5,tocIndex:4},{value:"-",paraId:5,tocIndex:4},{value:"Custom count strategy / max / exceed formatter",paraId:5,tocIndex:4},{value:"onPressEnter",paraId:5,tocIndex:4},{value:"function(e)",paraId:5,tocIndex:4},{value:"-",paraId:5,tocIndex:4},{value:"The callback function that is triggered when Enter key is pressed",paraId:5,tocIndex:4},{value:"onResize",paraId:5,tocIndex:4},{value:"function({ width, height })",paraId:5,tocIndex:4},{value:"-",paraId:5,tocIndex:4},{value:"The callback function that is triggered when resize",paraId:5,tocIndex:4},{value:`const inputRef = useRef(null);

useEffect(() => {
  inputRef.current.focus(); // the input will get focus
  inputRef.current.blur(); // the input will lose focus
  console.log(inputRef.current.input); // The origin input element
}, []);
// ....
<Input ref={inputRef} />;
`,paraId:6,tocIndex:5},{value:"Property",paraId:7,tocIndex:5},{value:"Type",paraId:7,tocIndex:5},{value:"Description",paraId:7,tocIndex:5},{value:"focus",paraId:7,tocIndex:5},{value:"(options?: InputFocusOptions) => void",paraId:7,tocIndex:5},{value:"The input get focus when called",paraId:7,tocIndex:5},{value:"blur",paraId:7,tocIndex:5},{value:"() => void",paraId:7,tocIndex:5},{value:"The input loses focus when called",paraId:7,tocIndex:5},{value:"input",paraId:7,tocIndex:5},{value:"HTMLInputElement | null",paraId:7,tocIndex:5},{value:"The origin input element",paraId:7,tocIndex:5},{value:`const textareaRef = useRef(null);

useEffect(() => {
  textareaRef.current.focus();
  textareaRef.current.blur();
  console.log(textareaRef.current.resizableTextArea);
}, []);

<Input.TextArea ref={textareaRef} />;
`,paraId:8,tocIndex:6},{value:"Property",paraId:9,tocIndex:6},{value:"Type",paraId:9,tocIndex:6},{value:"Description",paraId:9,tocIndex:6},{value:"focus",paraId:9,tocIndex:6},{value:"() => void",paraId:9,tocIndex:6},{value:"The textarea get focus when called",paraId:9,tocIndex:6},{value:"blur",paraId:9,tocIndex:6},{value:"() => void",paraId:9,tocIndex:6},{value:"The textarea loses focus when called",paraId:9,tocIndex:6},{value:"resizableTextArea",paraId:9,tocIndex:6},{value:"ResizableTextAreaRef",paraId:9,tocIndex:6},{value:"Wrapped resizable textarea instance",paraId:9,tocIndex:6},{value:"nativeElement",paraId:9,tocIndex:6},{value:"HTMLElement | null",paraId:9,tocIndex:6},{value:"The outer holder element or textarea DOM",paraId:9,tocIndex:6},{value:`npm install
npm start
`,paraId:10,tocIndex:7},{value:"@rc-component/input is released under the MIT license.",paraId:11,tocIndex:8}]},86834:function(d,u){"use strict";u.Z=`.rc-input {
  &-out-of-range {
    color: red;
  }

  &-affix-wrapper {
    padding: 2px 8px;
    overflow: hidden;
    border: 1px solid lightgray;
    border-radius: 2px;

    &:hover,
    &:focus-within {
      border-color: #000;
    }

    input {
      padding: 0;
      border: none;
      outline: none;
    }
  }

  &-clear-icon {
    padding: 0;
    font-size: 12px;
    background: none;
    border: none;

    &-hidden {
      display: none;
    }
  }
}

@textarea-prefix-cls: rc-textarea;

.rc-textarea-affix-wrapper {
  display: inline-block;
  box-sizing: border-box;

  textarea {
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    padding: 0;
    border: 1px solid #1677ff;
  }
}

.@{textarea-prefix-cls}-out-of-range {
  &,
  & textarea {
    color: red;
  }
}
`},70042:function(d,u){"use strict";u.Z=`import Input from '@rc-component/input';
import type { FC } from 'react';
import React from 'react';
import '../../assets/index.less';

const Demo: FC = () => {
  return (
    <div>
      <Input prefixCls="rc-input" addonBefore="http://" />
      <br />
      <br />
      <Input prefixCls="rc-input" addonAfter="MB" />
    </div>
  );
};

export default Demo;
`},94533:function(d,u){"use strict";u.Z=`import type { ChangeEvent, FC } from 'react';
import React, { useState } from 'react';
import '../../assets/index.less';
import Input from '@rc-component/input';

const Demo: FC = () => {
  const [value, setValue] = useState<string>('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <div>
      <Input prefixCls="rc-input" allowClear placeholder="uncontrolled" />
      <br />
      <br />
      <Input
        prefixCls="rc-input"
        allowClear={{ clearIcon: '\u2716' }}
        onChange={handleChange}
        value={value}
        placeholder="controlled"
      />
    </div>
  );
};

export default Demo;
`},99306:function(d,u){"use strict";u.Z=`import type { FC } from 'react';
import React from 'react';
import '../../assets/index.less';
import Input from '@rc-component/input';

const Demo: FC = () => (
  <Input prefixCls="rc-input" style={{ marginLeft: 200 }} />
);

export default Demo;
`},43920:function(d,u){"use strict";u.Z=`import Input from '@rc-component/input';
import type { FC } from 'react';
import React from 'react';
import '../../assets/index.less';

const Demo: FC = () => {
  return (
    <div>
      <Input prefixCls="rc-input" prefix="prefix" />
      <br />
      <br />
      <Input prefixCls="rc-input" suffix="suffix" />
    </div>
  );
};

export default Demo;
`},5280:function(d,u){"use strict";u.Z=`import Input from '@rc-component/input';
import type { FC } from 'react';
import React from 'react';
import '../../assets/index.less';

const sharedHeadStyle: React.CSSProperties = {
  margin: 0,
  padding: 0,
};

const Demo: FC = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 16,
        alignItems: 'start',
      }}
    >
      <h3 style={sharedHeadStyle}>Native</h3>
      <Input prefixCls="rc-input" showCount defaultValue="\u{1F468}\u200D\u{1F469}\u200D\u{1F467}\u200D\u{1F466}" />
      <Input prefixCls="rc-input" showCount defaultValue="\u{1F468}\u200D\u{1F469}\u200D\u{1F467}\u200D\u{1F466}" maxLength={20} />
      <h3 style={sharedHeadStyle}>Count</h3>
      <h4 style={sharedHeadStyle}>Only Max</h4>
      <Input
        placeholder="count.max"
        prefixCls="rc-input"
        defaultValue="\u{1F525}"
        count={{
          show: true,
          max: 5,
        }}
      />
      <h4 style={sharedHeadStyle}>Customize strategy</h4>
      <Input
        placeholder="Emoji count 1"
        prefixCls="rc-input"
        defaultValue="\u{1F525}"
        count={{
          show: true,
          max: 5,
          strategy: (val) => [...new Intl.Segmenter().segment(val)].length,
        }}
      />
      <h4 style={sharedHeadStyle}>Customize exceedFormatter</h4>
      <Input
        placeholder="Emoji count 1"
        prefixCls="rc-input"
        defaultValue="\u{1F525}"
        count={{
          show: true,
          max: 5,
          exceedFormatter: (val, { max }) => {
            const segments = [...new Intl.Segmenter().segment(val)];

            return segments
              .filter((seg) => seg.index + seg.segment.length <= max)
              .map((seg) => seg.segment)
              .join('');
          },
        }}
      />
    </div>
  );
};

export default Demo;
`},13839:function(d,u){"use strict";u.Z=`/* eslint-disable no-console */
import Input from '@rc-component/input';
import React, { useState, type ChangeEvent } from 'react';

const TextArea = Input.TextArea;

export default function App() {
  const [value, setValue] = useState('hello\\nworld');

  const onChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const {
      target: { value: currentValue },
    } = e;
    setValue(currentValue);
  };

  return (
    <div>
      <p>Uncontrolled</p>
      <TextArea autoSize allowClear />
      <p>controlled</p>
      <TextArea value={value} onChange={onChange} allowClear />
    </div>
  );
}
`},48359:function(d,u){"use strict";u.Z=`/* eslint-disable no-console */
import Input, { type TextAreaProps } from '@rc-component/input';
import React, { useState, type ChangeEvent } from 'react';

const TextArea = Input.TextArea;

export default function App() {
  const [value, setValue] = useState('hello\\nworld');

  const onChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const {
      target: { value: currentValue },
    } = e;
    setValue(currentValue);
  };

  const onResize: TextAreaProps['onResize'] = ({ width, height }) => {
    console.log(\`size is changed, width:\${width} height:\${height}\`);
  };

  return (
    <div>
      <p>when set to true</p>
      <TextArea
        autoSize
        onResize={onResize}
        value={value}
        onChange={onChange}
      />
      <p>when set to object of minRows and maxRows</p>
      <TextArea
        autoSize={{ minRows: 5, maxRows: 15 }}
        onResize={onResize}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
`},10096:function(d,u){"use strict";u.Z=`/* eslint-disable no-console */
import Input, { type TextAreaProps } from '@rc-component/input';
import React, { useState, type ChangeEvent, type KeyboardEvent } from 'react';

const TextArea = Input.TextArea;

export default function App() {
  const [value, setValue] = useState('');

  const onChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const {
      target: { value: currentValue },
    } = e;
    console.log(e.target.value);
    setValue(currentValue);
  };

  const onResize: TextAreaProps['onResize'] = ({ width, height }) => {
    console.log(\`size is changed, width:\${width} height:\${height}\`);
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const onPressEnter = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    console.log(\`enter key is pressed\`);
  };

  return (
    <div>
      <TextArea
        prefixCls="custom-textarea"
        onPressEnter={onPressEnter}
        onResize={onResize}
        value={value}
        onChange={onChange}
        autoFocus
        onFocus={() => console.log('focus')}
      />
    </div>
  );
}
`},99049:function(d,u){"use strict";u.Z=`/* eslint-disable no-console */
import Input from '@rc-component/input';
import React, { useState, type ChangeEvent } from 'react';
import '../../assets/index.less';

const TextArea = Input.TextArea;

export default function App() {
  const [value, setValue] = useState('hello\\nworld');

  const onChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const {
      target: { value: currentValue },
    } = e;
    setValue(currentValue);
  };

  return (
    <div>
      <p>Uncontrolled</p>
      <TextArea autoSize showCount />
      <p>controlled</p>
      <TextArea value={value} onChange={onChange} showCount maxLength={100} />
      <p>with height</p>
      <TextArea
        value={value}
        onChange={onChange}
        showCount
        style={{ height: 200, width: '100%', resize: 'vertical' }}
      />
      <hr />
      <p>Count.exceedFormatter</p>
      <TextArea
        defaultValue="\u{1F468}\u200D\u{1F468}\u200D\u{1F467}\u200D\u{1F466}"
        count={{
          show: true,
          max: 5,
        }}
      />
      <TextArea
        defaultValue="\u{1F525}"
        count={{
          show: true,
          max: 5,
          exceedFormatter: (val, { max }) => {
            const segments = [...new Intl.Segmenter().segment(val)];

            return segments
              .filter((seg) => seg.index + seg.segment.length <= max)
              .map((seg) => seg.segment)
              .join('');
          },
        }}
      />
    </div>
  );
}
`},96446:function(d,u,n){var i=n(37923);function c(I){if(Array.isArray(I))return i(I)}d.exports=c,d.exports.__esModule=!0,d.exports.default=d.exports},96936:function(d){function u(n){if(typeof Symbol!="undefined"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}d.exports=u,d.exports.__esModule=!0,d.exports.default=d.exports},88619:function(d){function u(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}d.exports=u,d.exports.__esModule=!0,d.exports.default=d.exports},13769:function(d,u,n){var i=n(48541);function c(I,E){if(I==null)return{};var A=i(I,E),f,M;if(Object.getOwnPropertySymbols){var v=Object.getOwnPropertySymbols(I);for(M=0;M<v.length;M++)f=v[M],!(E.indexOf(f)>=0)&&Object.prototype.propertyIsEnumerable.call(I,f)&&(A[f]=I[f])}return A}d.exports=c,d.exports.__esModule=!0,d.exports.default=d.exports},48541:function(d){function u(n,i){if(n==null)return{};var c={},I=Object.keys(n),E,A;for(A=0;A<I.length;A++)E=I[A],!(i.indexOf(E)>=0)&&(c[E]=n[E]);return c}d.exports=u,d.exports.__esModule=!0,d.exports.default=d.exports},19632:function(d,u,n){var i=n(96446),c=n(96936),I=n(96263),E=n(88619);function A(f){return i(f)||c(f)||I(f)||E()}d.exports=A,d.exports.__esModule=!0,d.exports.default=d.exports}}]);
}());