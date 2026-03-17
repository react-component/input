!(function(){var Xe=Object.defineProperty;var Be=Object.getOwnPropertySymbols;var Ye=Object.prototype.hasOwnProperty,ke=Object.prototype.propertyIsEnumerable;var We=(r,n,e)=>n in r?Xe(r,n,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[n]=e,Se=(r,n)=>{for(var e in n||(n={}))Ye.call(n,e)&&We(r,e,n[e]);if(Be)for(var e of Be(n))ke.call(n,e)&&We(r,e,n[e]);return r};(self.webpackChunk_rc_component_input=self.webpackChunk_rc_component_input||[]).push([[904],{10763:function(r,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=e;function e(){return!!(typeof window!="undefined"&&window.document&&window.document.createElement)}},56640:function(r,n,e){"use strict";var o;o={value:!0},o=y,o=Ee,n.nH=m,o=De;var l=e(67294),i=x(e(21904)),c=x(e(63052));function x(u){return u&&u.__esModule?u:{default:u}}function d(u,g=!1){if((0,i.default)(u)){const M=u.nodeName.toLowerCase(),O=["input","select","textarea","button"].includes(M)||u.isContentEditable||M==="a"&&!!u.getAttribute("href"),A=u.getAttribute("tabindex"),ee=Number(A);let w=null;return A&&!Number.isNaN(ee)?w=ee:O&&w===null&&(w=0),O&&u.disabled&&(w=null),w!==null&&(w>=0||g&&w<0)}return!1}function y(u,g=!1){const M=[...u.querySelectorAll("*")].filter(O=>d(O,g));return d(u,g)&&M.unshift(u),M}function m(u,g){if(!u)return;u.focus(g);const{cursor:M}=g||{};if(M&&(u instanceof HTMLInputElement||u instanceof HTMLTextAreaElement)){const O=u.value.length;switch(M){case"start":u.setSelectionRange(0,0);break;case"end":u.setSelectionRange(O,O);break;default:u.setSelectionRange(0,O)}}}let D=null,t=[];const v=new Map,f=new Map;function p(){return t[t.length-1]}function R(u){const g=p();if(u&&g){let M;for(const[A,ee]of v.entries())if(ee===g){M=A;break}const O=f.get(M);return!!O&&(O===u||O.contains(u))}return!1}function _(u){const{activeElement:g}=document;return u===g||u.contains(g)}function s(){const u=p(),{activeElement:g}=document;if(!R(g))if(u&&!_(u)){const M=y(u),O=M.includes(D)?D:M[0];O==null||O.focus({preventScroll:!0})}else D=g}function de(u){if(u.key==="Tab"){const{activeElement:g}=document,M=p(),O=y(M),A=O[O.length-1];u.shiftKey&&g===O[0]?D=A:!u.shiftKey&&g===A&&(D=O[0])}}function Ee(u,g){return u&&(v.set(g,u),t=t.filter(M=>M!==u),t.push(u),window.addEventListener("focusin",s),window.addEventListener("keydown",de,!0),s()),()=>{D=null,t=t.filter(M=>M!==u),v.delete(g),f.delete(g),t.length===0&&(window.removeEventListener("focusin",s),window.removeEventListener("keydown",de,!0))}}function De(u,g){const M=(0,c.default)();return(0,l.useEffect)(()=>{if(u){const A=g();if(A)return Ee(A,M)}},[u,M]),[A=>{A&&f.set(M,A)}]}},21904:function(r,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e=o=>{if(!o)return!1;if(o instanceof Element){if(o.offsetParent)return!0;if(o.getBBox){const{width:l,height:i}=o.getBBox();if(l||i)return!0}if(o.getBoundingClientRect){const{width:l,height:i}=o.getBoundingClientRect();if(l||i)return!0}}return!1};n.default=e},96607:function(r,n,e){"use strict";var o;o={value:!0},n.Z=x;var l=e(67294),i=c(e(19831));function c(d){return d&&d.__esModule?d:{default:d}}function x(d,y){const[m,D]=(0,l.useState)(d),t=y!==void 0?y:m;return(0,i.default)(v=>{v||D(y)},[y]),[t,D]}},63052:function(r,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0,n.getId=y,n.resetUuid=d;var o=i(e(67294));function l(t){if(typeof WeakMap!="function")return null;var v=new WeakMap,f=new WeakMap;return(l=function(p){return p?f:v})(t)}function i(t,v){if(!v&&t&&t.__esModule)return t;if(t===null||typeof t!="object"&&typeof t!="function")return{default:t};var f=l(v);if(f&&f.has(t))return f.get(t);var p={__proto__:null},R=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var _ in t)if(_!=="default"&&Object.prototype.hasOwnProperty.call(t,_)){var s=R?Object.getOwnPropertyDescriptor(t,_):null;s&&(s.get||s.set)?Object.defineProperty(p,_,s):p[_]=t[_]}return p.default=t,f&&f.set(t,p),p}function c(){return Se({},o).useId}let x=0;function d(){}function y(t,v){const p=String(v).replace(/[^a-zA-Z0-9_.:-]/g,"-");return`${t}-${p}`}const m=c();var D=n.default=m?function(v){const f=m();return v||f}:function(v){const[f,p]=o.useState("ssr-id");return o.useEffect(()=>{const R=x;x+=1,p(`rc_unique_${R}`)},[]),v||f}},19831:function(r,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.useLayoutUpdateEffect=n.default=void 0;var o=x(e(67294)),l=i(e(10763));function i(t){return t&&t.__esModule?t:{default:t}}function c(t){if(typeof WeakMap!="function")return null;var v=new WeakMap,f=new WeakMap;return(c=function(p){return p?f:v})(t)}function x(t,v){if(!v&&t&&t.__esModule)return t;if(t===null||typeof t!="object"&&typeof t!="function")return{default:t};var f=c(v);if(f&&f.has(t))return f.get(t);var p={__proto__:null},R=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var _ in t)if(_!=="default"&&Object.prototype.hasOwnProperty.call(t,_)){var s=R?Object.getOwnPropertyDescriptor(t,_):null;s&&(s.get||s.set)?Object.defineProperty(p,_,s):p[_]=t[_]}return p.default=t,f&&f.set(t,p),p}const d=(0,l.default)()?o.useLayoutEffect:o.useEffect,y=(t,v)=>{const f=o.useRef(!0);d(()=>t(f.current),v),d(()=>(f.current=!1,()=>{f.current=!0}),[])},m=(t,v)=>{y(f=>{if(!f)return t()},v)};n.useLayoutUpdateEffect=m;var D=n.default=y},74531:function(r,n){"use strict";var e;e={value:!0},n.Z=o;function o(l,i){const c=Object.assign({},l);return Array.isArray(i)&&i.forEach(x=>{delete c[x]}),c}},91678:function(r,n,e){"use strict";var o;e.r(n),e.d(n,{demos:function(){return D}});var l=e(15009),i=e.n(l),c=e(99289),x=e.n(c),d=e(67294),y=e(28976),m=e(69945),D={"docs-demo-addon-demo-addon":{component:d.memo(d.lazy(function(){return e.e(433).then(e.bind(e,99355))})),asset:{type:"BLOCK",id:"docs-demo-addon-demo-addon",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(70042).Z},"@rc-component/input":{type:"NPM",value:"1.2.1"},react:{type:"NPM",value:"18.3.1"},"../../assets/index.less":{type:"FILE",value:e(86834).Z}},entry:"index.tsx"},context:{"../../assets/index.less":m,"@rc-component/input":y,react:o||(o=e.t(d,2)),"/Users/jilin/projects/antd/rc-input/assets/index.less":m},renderOpts:{compile:function(){var t=x()(i()().mark(function f(){var p,R=arguments;return i()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,e.e(862).then(e.bind(e,16862));case 2:return s.abrupt("return",(p=s.sent).default.apply(p,R));case 3:case"end":return s.stop()}},f)}));function v(){return t.apply(this,arguments)}return v}()}}}},24703:function(r,n,e){"use strict";var o;e.r(n),e.d(n,{demos:function(){return D}});var l=e(15009),i=e.n(l),c=e(99289),x=e.n(c),d=e(67294),y=e(28976),m=e(69945),D={"docs-demo-allow-clear-demo-allow-clear":{component:d.memo(d.lazy(function(){return e.e(433).then(e.bind(e,52710))})),asset:{type:"BLOCK",id:"docs-demo-allow-clear-demo-allow-clear",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(94533).Z},react:{type:"NPM",value:"18.3.1"},"@rc-component/input":{type:"NPM",value:"1.2.1"},"../../assets/index.less":{type:"FILE",value:e(86834).Z}},entry:"index.tsx"},context:{"../../assets/index.less":m,react:o||(o=e.t(d,2)),"@rc-component/input":y,"/Users/jilin/projects/antd/rc-input/assets/index.less":m},renderOpts:{compile:function(){var t=x()(i()().mark(function f(){var p,R=arguments;return i()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,e.e(862).then(e.bind(e,16862));case 2:return s.abrupt("return",(p=s.sent).default.apply(p,R));case 3:case"end":return s.stop()}},f)}));function v(){return t.apply(this,arguments)}return v}()}}}},33147:function(r,n,e){"use strict";var o;e.r(n),e.d(n,{demos:function(){return D}});var l=e(15009),i=e.n(l),c=e(99289),x=e.n(c),d=e(67294),y=e(28976),m=e(69945),D={"docs-demo-basic-demo-basic":{component:d.memo(d.lazy(function(){return e.e(433).then(e.bind(e,6536))})),asset:{type:"BLOCK",id:"docs-demo-basic-demo-basic",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(99306).Z},react:{type:"NPM",value:"18.3.1"},"@rc-component/input":{type:"NPM",value:"1.2.1"},"../../assets/index.less":{type:"FILE",value:e(86834).Z}},entry:"index.tsx"},context:{"../../assets/index.less":m,react:o||(o=e.t(d,2)),"@rc-component/input":y,"/Users/jilin/projects/antd/rc-input/assets/index.less":m},renderOpts:{compile:function(){var t=x()(i()().mark(function f(){var p,R=arguments;return i()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,e.e(862).then(e.bind(e,16862));case 2:return s.abrupt("return",(p=s.sent).default.apply(p,R));case 3:case"end":return s.stop()}},f)}));function v(){return t.apply(this,arguments)}return v}()}}}},64165:function(r,n,e){"use strict";var o;e.r(n),e.d(n,{demos:function(){return D}});var l=e(15009),i=e.n(l),c=e(99289),x=e.n(c),d=e(67294),y=e(28976),m=e(69945),D={"docs-demo-prefix-suffix-demo-prefix-suffix":{component:d.memo(d.lazy(function(){return e.e(433).then(e.bind(e,59409))})),asset:{type:"BLOCK",id:"docs-demo-prefix-suffix-demo-prefix-suffix",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(43920).Z},"@rc-component/input":{type:"NPM",value:"1.2.1"},react:{type:"NPM",value:"18.3.1"},"../../assets/index.less":{type:"FILE",value:e(86834).Z}},entry:"index.tsx"},context:{"../../assets/index.less":m,"@rc-component/input":y,react:o||(o=e.t(d,2)),"/Users/jilin/projects/antd/rc-input/assets/index.less":m},renderOpts:{compile:function(){var t=x()(i()().mark(function f(){var p,R=arguments;return i()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,e.e(862).then(e.bind(e,16862));case 2:return s.abrupt("return",(p=s.sent).default.apply(p,R));case 3:case"end":return s.stop()}},f)}));function v(){return t.apply(this,arguments)}return v}()}}}},94793:function(r,n,e){"use strict";var o;e.r(n),e.d(n,{demos:function(){return D}});var l=e(15009),i=e.n(l),c=e(99289),x=e.n(c),d=e(67294),y=e(28976),m=e(69945),D={"docs-demo-show-count-demo-show-count":{component:d.memo(d.lazy(function(){return e.e(433).then(e.bind(e,66744))})),asset:{type:"BLOCK",id:"docs-demo-show-count-demo-show-count",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(5280).Z},"@rc-component/input":{type:"NPM",value:"1.2.1"},react:{type:"NPM",value:"18.3.1"},"../../assets/index.less":{type:"FILE",value:e(86834).Z}},entry:"index.tsx"},context:{"../../assets/index.less":m,"@rc-component/input":y,react:o||(o=e.t(d,2)),"/Users/jilin/projects/antd/rc-input/assets/index.less":m},renderOpts:{compile:function(){var t=x()(i()().mark(function f(){var p,R=arguments;return i()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,e.e(862).then(e.bind(e,16862));case 2:return s.abrupt("return",(p=s.sent).default.apply(p,R));case 3:case"end":return s.stop()}},f)}));function v(){return t.apply(this,arguments)}return v}()}}}},11171:function(r,n,e){"use strict";e.r(n),e.d(n,{demos:function(){return l}});var o=e(67294),l={}},28976:function(r,n,e){"use strict";e.r(n),e.d(n,{BaseInput:function(){return de},default:function(){return He}});var o=e(97857),l=e.n(o),i=e(9783),c=e.n(i),x=e(52677),d=e.n(x);function y(a){var I,C,h="";if(typeof a=="string"||typeof a=="number")h+=a;else if(typeof a=="object")if(Array.isArray(a)){var P=a.length;for(I=0;I<P;I++)a[I]&&(C=y(a[I]))&&(h&&(h+=" "),h+=C)}else for(C in a)a[C]&&(h&&(h+=" "),h+=C);return h}function m(){for(var a,I,C=0,h="",P=arguments.length;C<P;C++)(a=arguments[C])&&(I=y(a))&&(h&&(h+=" "),h+=I);return h}var D=null,t=e(67294);function v(a){return!!(a.addonBefore||a.addonAfter)}function f(a){return!!(a.prefix||a.suffix||a.allowClear)}function p(a,I,C){var h=I.cloneNode(!0),P=Object.create(a,{target:{value:h},currentTarget:{value:h}});return h.value=C,typeof I.selectionStart=="number"&&typeof I.selectionEnd=="number"&&(h.selectionStart=I.selectionStart,h.selectionEnd=I.selectionEnd),h.setSelectionRange=function(){I.setSelectionRange.apply(I,arguments)},P}function R(a,I,C,h){if(C){var P=I;if(I.type==="click"){P=p(I,a,""),C(P);return}if(a.type!=="file"&&h!==void 0){P=p(I,a,h),C(P);return}C(P)}}var _=e(85893),s=t.forwardRef(function(a,I){var C,h,P,G=a.inputElement,J=a.children,K=a.prefixCls,ne=a.prefix,Q=a.suffix,Z=a.addonBefore,X=a.addonAfter,be=a.className,Re=a.style,te=a.disabled,ae=a.readOnly,Le=a.focused,ie=a.triggerFocus,N=a.allowClear,ce=a.value,fe=a.handleReset,H=a.hidden,T=a.classes,j=a.classNames,Y=a.dataAttrs,B=a.styles,W=a.components,re=a.onClear,ge=J!=null?J:G,pe=(W==null?void 0:W.affixWrapper)||"span",ve=(W==null?void 0:W.groupWrapper)||"span",z=(W==null?void 0:W.wrapper)||"span",L=(W==null?void 0:W.groupAddon)||"span",oe=(0,t.useRef)(null),me=function(k){var he;(he=oe.current)!==null&&he!==void 0&&he.contains(k.target)&&(ie==null||ie())},Ce=f(a),F=(0,t.cloneElement)(ge,{value:ce,className:m((C=ge.props)===null||C===void 0?void 0:C.className,!Ce&&(j==null?void 0:j.variant))||null}),se=(0,t.useRef)(null);if(t.useImperativeHandle(I,function(){return{nativeElement:se.current||oe.current}}),Ce){var Ie=null;if(N){var _e=!te&&!ae&&ce&&!(d()(N)==="object"&&N.disabled),xe="".concat(K,"-clear-icon"),je=d()(N)==="object"&&N!==null&&N!==void 0&&N.clearIcon?N.clearIcon:"\u2716";Ie=(0,_.jsx)("button",{type:"button",tabIndex:-1,onClick:function(k){fe==null||fe(k),re==null||re()},onMouseDown:function(k){return k.preventDefault()},className:m(xe,c()(c()({},"".concat(xe,"-hidden"),!_e),"".concat(xe,"-has-suffix"),!!Q),j==null?void 0:j.clear),style:B==null?void 0:B.clear,children:je})}var V="".concat(K,"-affix-wrapper"),Te=m(V,c()(c()(c()(c()(c()({},"".concat(K,"-disabled"),te),"".concat(V,"-disabled"),te),"".concat(V,"-focused"),Le),"".concat(V,"-readonly"),ae),"".concat(V,"-input-with-clear-btn"),Q&&N&&ce),T==null?void 0:T.affixWrapper,j==null?void 0:j.affixWrapper,j==null?void 0:j.variant),S=(Q||N)&&(0,_.jsxs)("span",{className:m("".concat(K,"-suffix"),j==null?void 0:j.suffix),style:B==null?void 0:B.suffix,children:[Ie,Q]});F=(0,_.jsxs)(pe,l()(l()({className:Te,style:B==null?void 0:B.affixWrapper,onClick:me},Y==null?void 0:Y.affixWrapper),{},{ref:oe,children:[ne&&(0,_.jsx)("span",{className:m("".concat(K,"-prefix"),j==null?void 0:j.prefix),style:B==null?void 0:B.prefix,children:ne}),F,S]}))}if(v(a)){var $="".concat(K,"-group"),ue="".concat($,"-addon"),Me="".concat($,"-wrapper"),Oe=m("".concat(K,"-wrapper"),$,T==null?void 0:T.wrapper,j==null?void 0:j.wrapper),Ue=m(Me,c()({},"".concat(Me,"-disabled"),te),T==null?void 0:T.group,j==null?void 0:j.groupWrapper);F=(0,_.jsx)(ve,{className:Ue,ref:se,children:(0,_.jsxs)(z,{className:Oe,children:[Z&&(0,_.jsx)(L,{className:ue,children:Z}),F,X&&(0,_.jsx)(L,{className:ue,children:X})]})})}return t.cloneElement(F,{className:m((h=F.props)===null||h===void 0?void 0:h.className,be)||null,style:l()(l()({},(P=F.props)===null||P===void 0?void 0:P.style),Re),hidden:H})}),de=s,Ee=e(19632),De=e.n(Ee),u=e(5574),g=e.n(u),M=e(13769),O=e.n(M),A=e(96607),ee=e(74531),w=["show"];function qe(a,I){if(!I.max)return!0;var C=I.strategy(a);return C<=I.max}function Ne(a,I){return t.useMemo(function(){var C={};I&&(C.show=d()(I)==="object"&&I.formatter?I.formatter:!!I),C=l()(l()({},C),a);var h=C,P=h.show,G=O()(h,w);return l()(l()({},G),{},{show:!!P,showFormatter:typeof P=="function"?P:void 0,strategy:G.strategy||function(J){return J.length}})},[a,I])}var Ke=e(56640),Fe=["autoComplete","onChange","onFocus","onBlur","onPressEnter","onKeyDown","onKeyUp","prefixCls","disabled","htmlSize","className","maxLength","suffix","showCount","count","type","classes","classNames","styles","onCompositionStart","onCompositionEnd"],we=(0,t.forwardRef)(function(a,I){var C=a.autoComplete,h=a.onChange,P=a.onFocus,G=a.onBlur,J=a.onPressEnter,K=a.onKeyDown,ne=a.onKeyUp,Q=a.prefixCls,Z=Q===void 0?"rc-input":Q,X=a.disabled,be=a.htmlSize,Re=a.className,te=a.maxLength,ae=a.suffix,Le=a.showCount,ie=a.count,N=a.type,ce=N===void 0?"text":N,fe=a.classes,H=a.classNames,T=a.styles,j=a.onCompositionStart,Y=a.onCompositionEnd,B=O()(a,Fe),W=(0,t.useState)(!1),re=g()(W,2),ge=re[0],pe=re[1],ve=(0,t.useRef)(!1),z=(0,t.useRef)(!1),L=(0,t.useRef)(null),oe=(0,t.useRef)(null),me=function(E){L.current&&(0,Ke.nH)(L.current,E)},Ce=(0,A.Z)(a.defaultValue,a.value),F=g()(Ce,2),se=F[0],Ie=F[1],_e=se==null?"":String(se),xe=(0,t.useState)(null),je=g()(xe,2),V=je[0],Te=je[1],S=Ne(ie,Le),$=S.max||te,ue=S.strategy(_e),Me=!!$&&ue>$;(0,t.useImperativeHandle)(I,function(){var b;return{focus:me,blur:function(){var U;(U=L.current)===null||U===void 0||U.blur()},setSelectionRange:function(U,ye,le){var q;(q=L.current)===null||q===void 0||q.setSelectionRange(U,ye,le)},select:function(){var U;(U=L.current)===null||U===void 0||U.select()},input:L.current,nativeElement:((b=oe.current)===null||b===void 0?void 0:b.nativeElement)||L.current}}),(0,t.useEffect)(function(){z.current&&(z.current=!1),pe(function(b){return b&&X?!1:b})},[X]);var Oe=function(E,U,ye){var le=U;if(!ve.current&&S.exceedFormatter&&S.max&&S.strategy(U)>S.max){if(le=S.exceedFormatter(U,{max:S.max}),U!==le){var q,Ae;Te([((q=L.current)===null||q===void 0?void 0:q.selectionStart)||0,((Ae=L.current)===null||Ae===void 0?void 0:Ae.selectionEnd)||0])}}else if(ye.source==="compositionEnd")return;Ie(le),L.current&&R(L.current,E,h,le)};(0,t.useEffect)(function(){if(V){var b;(b=L.current)===null||b===void 0||b.setSelectionRange.apply(b,De()(V))}},[V]);var Ue=function(E){Oe(E,E.target.value,{source:"change"})},Pe=function(E){ve.current=!1,Oe(E,E.currentTarget.value,{source:"compositionEnd"}),Y==null||Y(E)},k=function(E){J&&E.key==="Enter"&&!z.current&&!E.nativeEvent.isComposing&&(z.current=!0,J(E)),K==null||K(E)},he=function(E){E.key==="Enter"&&(z.current=!1),ne==null||ne(E)},ze=function(E){pe(!0),P==null||P(E)},Ve=function(E){z.current&&(z.current=!1),pe(!1),G==null||G(E)},$e=function(E){Ie(""),me(),L.current&&R(L.current,E,h)},Ge=Me&&"".concat(Z,"-out-of-range"),Je=function(){var E=(0,ee.Z)(a,["prefixCls","onPressEnter","addonBefore","addonAfter","prefix","suffix","allowClear","defaultValue","showCount","count","classes","htmlSize","styles","classNames","onClear"]);return(0,_.jsx)("input",l()(l()({autoComplete:C},E),{},{onChange:Ue,onFocus:ze,onBlur:Ve,onKeyDown:k,onKeyUp:he,className:m(Z,c()({},"".concat(Z,"-disabled"),X),H==null?void 0:H.input),style:T==null?void 0:T.input,ref:L,size:be,type:ce,onCompositionStart:function(ye){ve.current=!0,j==null||j(ye)},onCompositionEnd:Pe}))},Qe=function(){var E=Number($)>0;if(ae||S.show){var U=S.showFormatter?S.showFormatter({value:_e,count:ue,maxLength:$}):"".concat(ue).concat(E?" / ".concat($):"");return(0,_.jsxs)(_.Fragment,{children:[S.show&&(0,_.jsx)("span",{className:m("".concat(Z,"-show-count-suffix"),c()({},"".concat(Z,"-show-count-has-suffix"),!!ae),H==null?void 0:H.count),style:l()({},T==null?void 0:T.count),children:U}),ae]})}return null};return(0,_.jsx)(de,l()(l()({},B),{},{prefixCls:Z,className:m(Re,Ge),handleReset:$e,value:_e,focused:ge,triggerFocus:me,suffix:Qe(),disabled:X,classes:fe,classNames:H,styles:T,ref:oe,children:Je()}))}),Ze=we,He=Ze},69945:function(r,n,e){"use strict";e.r(n)},45705:function(r,n,e){"use strict";e.r(n),e.d(n,{texts:function(){return o}});const o=[]},52916:function(r,n,e){"use strict";e.r(n),e.d(n,{texts:function(){return o}});const o=[]},55469:function(r,n,e){"use strict";e.r(n),e.d(n,{texts:function(){return o}});const o=[]},74344:function(r,n,e){"use strict";e.r(n),e.d(n,{texts:function(){return o}});const o=[]},11040:function(r,n,e){"use strict";e.r(n),e.d(n,{texts:function(){return o}});const o=[]},51446:function(r,n,e){"use strict";e.r(n),e.d(n,{texts:function(){return o}});const o=[{value:`import Input from '@rc-component/input';
import { render } from 'react-dom';

render(<Input placeholder="input" allowClear />, mountNode);
`,paraId:0,tocIndex:2},{value:"Property",paraId:1,tocIndex:3},{value:"Type",paraId:1,tocIndex:3},{value:"Default",paraId:1,tocIndex:3},{value:"Description",paraId:1,tocIndex:3},{value:"prefixCls",paraId:1,tocIndex:3},{value:"string",paraId:1,tocIndex:3},{value:"rc-input",paraId:1,tocIndex:3},{value:"className",paraId:1,tocIndex:3},{value:"string",paraId:1,tocIndex:3},{value:"''",paraId:1,tocIndex:3},{value:"additional class name of input",paraId:1,tocIndex:3},{value:"style",paraId:1,tocIndex:3},{value:"React.CSSProperties",paraId:1,tocIndex:3},{value:"style properties of input",paraId:1,tocIndex:3},{value:"affixWrapperClassName",paraId:1,tocIndex:3},{value:"string",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"className with '@rc-component/input-affix-wrapper'",paraId:1,tocIndex:3},{value:"groupClassName",paraId:1,tocIndex:3},{value:"string",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"className with '@rc-component/input-group-wrapper'",paraId:1,tocIndex:3},{value:"wrapperClassName",paraId:1,tocIndex:3},{value:"string",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"className with '@rc-component/input-wrapper'",paraId:1,tocIndex:3},{value:"addonAfter",paraId:1,tocIndex:3},{value:"ReactNode",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"The label text displayed after (on the right side of) the input field",paraId:1,tocIndex:3},{value:"addonBefore",paraId:1,tocIndex:3},{value:"ReactNode",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"The label text displayed before (on the left side of) the input field",paraId:1,tocIndex:3},{value:"allowClear",paraId:1,tocIndex:3},{value:"boolean | { clearIcon: ReactNode }",paraId:1,tocIndex:3},{value:"false",paraId:1,tocIndex:3},{value:"If allow to remove input content with clear icon",paraId:1,tocIndex:3},{value:"bordered",paraId:1,tocIndex:3},{value:"boolean",paraId:1,tocIndex:3},{value:"true",paraId:1,tocIndex:3},{value:"Whether has border style",paraId:1,tocIndex:3},{value:"defaultValue",paraId:1,tocIndex:3},{value:"string",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"The initial input content",paraId:1,tocIndex:3},{value:"disabled",paraId:1,tocIndex:3},{value:"boolean",paraId:1,tocIndex:3},{value:"false",paraId:1,tocIndex:3},{value:"Whether the input is disabled",paraId:1,tocIndex:3},{value:"id",paraId:1,tocIndex:3},{value:"string",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"The ID for input",paraId:1,tocIndex:3},{value:"maxLength",paraId:1,tocIndex:3},{value:"number",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"The max length",paraId:1,tocIndex:3},{value:"showCount",paraId:1,tocIndex:3},{value:"boolean | { formatter: ({ value: string, count: number, maxLength?: number }) => ReactNode }",paraId:1,tocIndex:3},{value:"false",paraId:1,tocIndex:3},{value:"Whether show text count",paraId:1,tocIndex:3},{value:"prefix",paraId:1,tocIndex:3},{value:"ReactNode",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"The prefix icon for the Input",paraId:1,tocIndex:3},{value:"suffix",paraId:1,tocIndex:3},{value:"ReactNode",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"The suffix icon for the Input",paraId:1,tocIndex:3},{value:"type",paraId:1,tocIndex:3},{value:"string",paraId:1,tocIndex:3},{value:"text",paraId:1,tocIndex:3},{value:"The type of input, see: ",paraId:1,tocIndex:3},{value:"MDN",paraId:1,tocIndex:3},{value:"( use ",paraId:1,tocIndex:3},{value:"Input.TextArea",paraId:1,tocIndex:3},{value:" instead of ",paraId:1,tocIndex:3},{value:'type="textarea"',paraId:1,tocIndex:3},{value:")",paraId:1,tocIndex:3},{value:"value",paraId:1,tocIndex:3},{value:"string",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"The input content value",paraId:1,tocIndex:3},{value:"onChange",paraId:1,tocIndex:3},{value:"function(e)",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"Callback when user input",paraId:1,tocIndex:3},{value:"onPressEnter",paraId:1,tocIndex:3},{value:"function(e)",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"The callback function that is triggered when Enter key is pressed",paraId:1,tocIndex:3},{value:`const inputRef = useRef(null);

useEffect(() => {
  inputRef.current.focus();// the input will get focus
  inputRef.current.blur();// the input will lose focus
  console.log(inputRef.current.input);// The origin input element
}, []);
// ....
<Input ref={inputRef} />
`,paraId:2,tocIndex:4},{value:"Property",paraId:3,tocIndex:4},{value:"Type",paraId:3,tocIndex:4},{value:"Description",paraId:3,tocIndex:4},{value:"focus",paraId:3,tocIndex:4},{value:"(options?: InputFocusOptions) => void",paraId:3,tocIndex:4},{value:"The input get focus when called",paraId:3,tocIndex:4},{value:"blur",paraId:3,tocIndex:4},{value:"() => void",paraId:3,tocIndex:4},{value:"The input loses focus when called",paraId:3,tocIndex:4},{value:"input",paraId:3,tocIndex:4},{value:"HTMLInputElement | null",paraId:3,tocIndex:4},{value:"The origin input element",paraId:3,tocIndex:4},{value:`npm install
npm start
`,paraId:4,tocIndex:5},{value:"@rc-component/input is released under the MIT license.",paraId:5,tocIndex:6}]},86834:function(r,n){"use strict";n.Z=`.rc-input {
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
`},70042:function(r,n){"use strict";n.Z=`import Input from '@rc-component/input';
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
`},94533:function(r,n){"use strict";n.Z=`import type { ChangeEvent, FC } from 'react';
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
`},99306:function(r,n){"use strict";n.Z=`import type { FC } from 'react';
import React from 'react';
import '../../assets/index.less';
import Input from '@rc-component/input';

const Demo: FC = () => (
  <Input prefixCls="rc-input" style={{ marginLeft: 200 }} />
);

export default Demo;
`},43920:function(r,n){"use strict";n.Z=`import Input from '@rc-component/input';
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
`},5280:function(r,n){"use strict";n.Z=`import Input from '@rc-component/input';
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
`},96446:function(r,n,e){var o=e(37923);function l(i){if(Array.isArray(i))return o(i)}r.exports=l,r.exports.__esModule=!0,r.exports.default=r.exports},96936:function(r){function n(e){if(typeof Symbol!="undefined"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}r.exports=n,r.exports.__esModule=!0,r.exports.default=r.exports},88619:function(r){function n(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}r.exports=n,r.exports.__esModule=!0,r.exports.default=r.exports},13769:function(r,n,e){var o=e(48541);function l(i,c){if(i==null)return{};var x=o(i,c),d,y;if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(i);for(y=0;y<m.length;y++)d=m[y],!(c.indexOf(d)>=0)&&Object.prototype.propertyIsEnumerable.call(i,d)&&(x[d]=i[d])}return x}r.exports=l,r.exports.__esModule=!0,r.exports.default=r.exports},48541:function(r){function n(e,o){if(e==null)return{};var l={},i=Object.keys(e),c,x;for(x=0;x<i.length;x++)c=i[x],!(o.indexOf(c)>=0)&&(l[c]=e[c]);return l}r.exports=n,r.exports.__esModule=!0,r.exports.default=r.exports},19632:function(r,n,e){var o=e(96446),l=e(96936),i=e(96263),c=e(88619);function x(d){return o(d)||l(d)||i(d)||c()}r.exports=x,r.exports.__esModule=!0,r.exports.default=r.exports}}]);
}());