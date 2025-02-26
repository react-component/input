(self.webpackChunk_rc_component_input=self.webpackChunk_rc_component_input||[]).push([[904],{10763:function(u,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=e;function e(){return!!(typeof window!="undefined"&&window.document&&window.document.createElement)}},82925:function(u,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var c=i(e(67294));function r(a){if(typeof WeakMap!="function")return null;var m=new WeakMap,s=new WeakMap;return(r=function(d){return d?s:m})(a)}function i(a,m){if(!m&&a&&a.__esModule)return a;if(a===null||typeof a!="object"&&typeof a!="function")return{default:a};var s=r(m);if(s&&s.has(a))return s.get(a);var d={__proto__:null},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var p in a)if(p!=="default"&&Object.prototype.hasOwnProperty.call(a,p)){var _=o?Object.getOwnPropertyDescriptor(a,p):null;_&&(_.get||_.set)?Object.defineProperty(d,p,_):d[p]=a[p]}return d.default=a,s&&s.set(a,d),d}function f(a){const m=c.useRef();return m.current=a,c.useCallback((...d)=>{var o;return(o=m.current)==null?void 0:o.call(m,...d)},[])}var l=n.default=f},19831:function(u,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.useLayoutUpdateEffect=n.default=void 0;var c=l(e(67294)),r=i(e(10763));function i(o){return o&&o.__esModule?o:{default:o}}function f(o){if(typeof WeakMap!="function")return null;var p=new WeakMap,_=new WeakMap;return(f=function(E){return E?_:p})(o)}function l(o,p){if(!p&&o&&o.__esModule)return o;if(o===null||typeof o!="object"&&typeof o!="function")return{default:o};var _=f(p);if(_&&_.has(o))return _.get(o);var E={__proto__:null},g=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var I in o)if(I!=="default"&&Object.prototype.hasOwnProperty.call(o,I)){var U=g?Object.getOwnPropertyDescriptor(o,I):null;U&&(U.get||U.set)?Object.defineProperty(E,I,U):E[I]=o[I]}return E.default=o,_&&_.set(o,E),E}const a=(0,r.default)()?c.useLayoutEffect:c.useEffect,m=(o,p)=>{const _=c.useRef(!0);a(()=>o(_.current),p),a(()=>(_.current=!1,()=>{_.current=!0}),[])},s=(o,p)=>{m(_=>{if(!_)return o()},p)};n.useLayoutUpdateEffect=s;var d=n.default=m},27848:function(u,n,e){"use strict";var c;c={value:!0},n.Z=m;var r=l(e(82925)),i=e(19831),f=l(e(35226));function l(s){return s&&s.__esModule?s:{default:s}}function a(s){return s!==void 0}function m(s,d){const{defaultValue:o,value:p,onChange:_,postState:E}=d||{},[g,I]=(0,f.default)(()=>a(p)?p:a(o)?typeof o=="function"?o():o:typeof s=="function"?s():s),U=p!==void 0?p:g,v=E?E(U):U,Oe=(0,r.default)(_),[Ie,Me]=(0,f.default)([U]);(0,i.useLayoutUpdateEffect)(()=>{const Q=Ie[0];g!==Q&&Oe(g,Q)},[Ie]),(0,i.useLayoutUpdateEffect)(()=>{a(p)||I(p)},[p]);const ae=(0,r.default)((Q,re)=>{I(Q,re),Me([U],re)});return[v,ae]}},35226:function(u,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=f;var c=i(e(67294));function r(l){if(typeof WeakMap!="function")return null;var a=new WeakMap,m=new WeakMap;return(r=function(s){return s?m:a})(l)}function i(l,a){if(!a&&l&&l.__esModule)return l;if(l===null||typeof l!="object"&&typeof l!="function")return{default:l};var m=r(a);if(m&&m.has(l))return m.get(l);var s={__proto__:null},d=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in l)if(o!=="default"&&Object.prototype.hasOwnProperty.call(l,o)){var p=d?Object.getOwnPropertyDescriptor(l,o):null;p&&(p.get||p.set)?Object.defineProperty(s,o,p):s[o]=l[o]}return s.default=l,m&&m.set(l,s),s}function f(l){const a=c.useRef(!1),[m,s]=c.useState(l);c.useEffect(()=>(a.current=!1,()=>{a.current=!0}),[]);function d(o,p){p&&a.current||s(o)}return[m,d]}},74531:function(u,n){"use strict";var e;e={value:!0},n.Z=c;function c(r,i){const f=Object.assign({},r);return Array.isArray(i)&&i.forEach(l=>{delete f[l]}),f}},91678:function(u,n,e){"use strict";var c;e.r(n),e.d(n,{demos:function(){return o}});var r=e(15009),i=e.n(r),f=e(99289),l=e.n(f),a=e(67294),m=e(67253),s=e(43712),d=e(69945),o={"docs-demo-addon-demo-addon":{component:a.memo(a.lazy(function(){return e.e(433).then(e.bind(e,99355))})),asset:{type:"BLOCK",id:"docs-demo-addon-demo-addon",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(70042).Z},"@rc-component/input":{type:"NPM",value:"1.0.1"},react:{type:"NPM",value:"18.3.1"},"../../assets/index.less":{type:"FILE",value:e(86834).Z}},entry:"index.tsx"},context:{"../../assets/index.less":d,"@rc-component/input":s,react:c||(c=e.t(a,2)),"/Users/afc163/Projects/input/assets/index.less":d},renderOpts:{compile:function(){var p=l()(i()().mark(function E(){var g,I=arguments;return i()().wrap(function(v){for(;;)switch(v.prev=v.next){case 0:return v.next=2,e.e(19).then(e.bind(e,4019));case 2:return v.abrupt("return",(g=v.sent).default.apply(g,I));case 3:case"end":return v.stop()}},E)}));function _(){return p.apply(this,arguments)}return _}()}}}},24703:function(u,n,e){"use strict";var c;e.r(n),e.d(n,{demos:function(){return o}});var r=e(15009),i=e.n(r),f=e(99289),l=e.n(f),a=e(67294),m=e(82532),s=e(43712),d=e(69945),o={"docs-demo-allow-clear-demo-allow-clear":{component:a.memo(a.lazy(function(){return e.e(433).then(e.bind(e,52710))})),asset:{type:"BLOCK",id:"docs-demo-allow-clear-demo-allow-clear",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(94533).Z},react:{type:"NPM",value:"18.3.1"},"@rc-component/input":{type:"NPM",value:"1.0.1"},"../../assets/index.less":{type:"FILE",value:e(86834).Z}},entry:"index.tsx"},context:{"../../assets/index.less":d,react:c||(c=e.t(a,2)),"@rc-component/input":s,"/Users/afc163/Projects/input/assets/index.less":d},renderOpts:{compile:function(){var p=l()(i()().mark(function E(){var g,I=arguments;return i()().wrap(function(v){for(;;)switch(v.prev=v.next){case 0:return v.next=2,e.e(19).then(e.bind(e,4019));case 2:return v.abrupt("return",(g=v.sent).default.apply(g,I));case 3:case"end":return v.stop()}},E)}));function _(){return p.apply(this,arguments)}return _}()}}}},33147:function(u,n,e){"use strict";var c;e.r(n),e.d(n,{demos:function(){return o}});var r=e(15009),i=e.n(r),f=e(99289),l=e.n(f),a=e(67294),m=e(81935),s=e(43712),d=e(69945),o={"docs-demo-basic-demo-basic":{component:a.memo(a.lazy(function(){return e.e(433).then(e.bind(e,6536))})),asset:{type:"BLOCK",id:"docs-demo-basic-demo-basic",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(99306).Z},react:{type:"NPM",value:"18.3.1"},"@rc-component/input":{type:"NPM",value:"1.0.1"},"../../assets/index.less":{type:"FILE",value:e(86834).Z}},entry:"index.tsx"},context:{"../../assets/index.less":d,react:c||(c=e.t(a,2)),"@rc-component/input":s,"/Users/afc163/Projects/input/assets/index.less":d},renderOpts:{compile:function(){var p=l()(i()().mark(function E(){var g,I=arguments;return i()().wrap(function(v){for(;;)switch(v.prev=v.next){case 0:return v.next=2,e.e(19).then(e.bind(e,4019));case 2:return v.abrupt("return",(g=v.sent).default.apply(g,I));case 3:case"end":return v.stop()}},E)}));function _(){return p.apply(this,arguments)}return _}()}}}},64165:function(u,n,e){"use strict";var c;e.r(n),e.d(n,{demos:function(){return o}});var r=e(15009),i=e.n(r),f=e(99289),l=e.n(f),a=e(67294),m=e(15907),s=e(43712),d=e(69945),o={"docs-demo-prefix-suffix-demo-prefix-suffix":{component:a.memo(a.lazy(function(){return e.e(433).then(e.bind(e,59409))})),asset:{type:"BLOCK",id:"docs-demo-prefix-suffix-demo-prefix-suffix",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(43920).Z},"@rc-component/input":{type:"NPM",value:"1.0.1"},react:{type:"NPM",value:"18.3.1"},"../../assets/index.less":{type:"FILE",value:e(86834).Z}},entry:"index.tsx"},context:{"../../assets/index.less":d,"@rc-component/input":s,react:c||(c=e.t(a,2)),"/Users/afc163/Projects/input/assets/index.less":d},renderOpts:{compile:function(){var p=l()(i()().mark(function E(){var g,I=arguments;return i()().wrap(function(v){for(;;)switch(v.prev=v.next){case 0:return v.next=2,e.e(19).then(e.bind(e,4019));case 2:return v.abrupt("return",(g=v.sent).default.apply(g,I));case 3:case"end":return v.stop()}},E)}));function _(){return p.apply(this,arguments)}return _}()}}}},94793:function(u,n,e){"use strict";var c;e.r(n),e.d(n,{demos:function(){return o}});var r=e(15009),i=e.n(r),f=e(99289),l=e.n(f),a=e(67294),m=e(24060),s=e(43712),d=e(69945),o={"docs-demo-show-count-demo-show-count":{component:a.memo(a.lazy(function(){return e.e(433).then(e.bind(e,66744))})),asset:{type:"BLOCK",id:"docs-demo-show-count-demo-show-count",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(5280).Z},"@rc-component/input":{type:"NPM",value:"1.0.1"},react:{type:"NPM",value:"18.3.1"},"../../assets/index.less":{type:"FILE",value:e(86834).Z}},entry:"index.tsx"},context:{"../../assets/index.less":d,"@rc-component/input":s,react:c||(c=e.t(a,2)),"/Users/afc163/Projects/input/assets/index.less":d},renderOpts:{compile:function(){var p=l()(i()().mark(function E(){var g,I=arguments;return i()().wrap(function(v){for(;;)switch(v.prev=v.next){case 0:return v.next=2,e.e(19).then(e.bind(e,4019));case 2:return v.abrupt("return",(g=v.sent).default.apply(g,I));case 3:case"end":return v.stop()}},E)}));function _(){return p.apply(this,arguments)}return _}()}}}},11171:function(u,n,e){"use strict";e.r(n),e.d(n,{demos:function(){return i}});var c=e(67294),r=e(68537),i={}},43712:function(u,n,e){"use strict";e.r(n),e.d(n,{BaseInput:function(){return v},default:function(){return Ne}});var c=e(97857),r=e.n(c),i=e(9783),f=e.n(i),l=e(52677),a=e.n(l),m=e(93967),s=e.n(m),d=e(67294);function o(t){return!!(t.addonBefore||t.addonAfter)}function p(t){return!!(t.prefix||t.suffix||t.allowClear)}function _(t,x,C){var O=x.cloneNode(!0),P=Object.create(t,{target:{value:O},currentTarget:{value:O}});return O.value=C,typeof x.selectionStart=="number"&&typeof x.selectionEnd=="number"&&(O.selectionStart=x.selectionStart,O.selectionEnd=x.selectionEnd),O.setSelectionRange=function(){x.setSelectionRange.apply(x,arguments)},P}function E(t,x,C,O){if(C){var P=x;if(x.type==="click"){P=_(x,t,""),C(P);return}if(t.type!=="file"&&O!==void 0){P=_(x,t,O),C(P);return}C(P)}}function g(t,x){if(t){t.focus(x);var C=x||{},O=C.cursor;if(O){var P=t.value.length;switch(O){case"start":t.setSelectionRange(0,0);break;case"end":t.setSelectionRange(P,P);break;default:t.setSelectionRange(0,P)}}}}var I=e(85893),U=d.forwardRef(function(t,x){var C,O,P,w=t.inputElement,V=t.children,b=t.prefixCls,X=t.prefix,z=t.suffix,K=t.addonBefore,G=t.addonAfter,Ce=t.className,De=t.style,Y=t.disabled,k=t.readOnly,je=t.focused,oe=t.triggerFocus,A=t.allowClear,se=t.value,ue=t.handleReset,S=t.hidden,j=t.classes,y=t.classNames,H=t.dataAttrs,W=t.styles,L=t.components,q=t.onClear,xe=V!=null?V:w,le=(L==null?void 0:L.affixWrapper)||"span",de=(L==null?void 0:L.groupWrapper)||"span",N=(L==null?void 0:L.wrapper)||"span",D=(L==null?void 0:L.groupAddon)||"span",ce=(0,d.useRef)(null),ie=function($){var me;(me=ce.current)!==null&&me!==void 0&&me.contains($.target)&&(oe==null||oe())},he=p(t),B=(0,d.cloneElement)(xe,{value:se,className:s()((C=xe.props)===null||C===void 0?void 0:C.className,!he&&(y==null?void 0:y.variant))||null}),ee=(0,d.useRef)(null);if(d.useImperativeHandle(x,function(){return{nativeElement:ee.current||ce.current}}),he){var fe=null;if(A){var pe=!Y&&!k&&se,ve="".concat(b,"-clear-icon"),ye=a()(A)==="object"&&A!==null&&A!==void 0&&A.clearIcon?A.clearIcon:"\u2716";fe=(0,I.jsx)("button",{type:"button",tabIndex:-1,onClick:function($){ue==null||ue($),q==null||q()},onMouseDown:function($){return $.preventDefault()},className:s()(ve,f()(f()({},"".concat(ve,"-hidden"),!pe),"".concat(ve,"-has-suffix"),!!z)),children:ye})}var F="".concat(b,"-affix-wrapper"),Re=s()(F,f()(f()(f()(f()(f()({},"".concat(b,"-disabled"),Y),"".concat(F,"-disabled"),Y),"".concat(F,"-focused"),je),"".concat(F,"-readonly"),k),"".concat(F,"-input-with-clear-btn"),z&&A&&se),j==null?void 0:j.affixWrapper,y==null?void 0:y.affixWrapper,y==null?void 0:y.variant),T=(z||A)&&(0,I.jsxs)("span",{className:s()("".concat(b,"-suffix"),y==null?void 0:y.suffix),style:W==null?void 0:W.suffix,children:[fe,z]});B=(0,I.jsxs)(le,r()(r()({className:Re,style:W==null?void 0:W.affixWrapper,onClick:ie},H==null?void 0:H.affixWrapper),{},{ref:ce,children:[X&&(0,I.jsx)("span",{className:s()("".concat(b,"-prefix"),y==null?void 0:y.prefix),style:W==null?void 0:W.prefix,children:X}),B,T]}))}if(o(t)){var Z="".concat(b,"-group"),ne="".concat(Z,"-addon"),Ee="".concat(Z,"-wrapper"),Pe=s()("".concat(b,"-wrapper"),Z,j==null?void 0:j.wrapper,y==null?void 0:y.wrapper),Ue=s()(Ee,f()({},"".concat(Ee,"-disabled"),Y),j==null?void 0:j.group,y==null?void 0:y.groupWrapper);B=(0,I.jsx)(de,{className:Ue,ref:ee,children:(0,I.jsxs)(N,{className:Pe,children:[K&&(0,I.jsx)(D,{className:ne,children:K}),B,G&&(0,I.jsx)(D,{className:ne,children:G})]})})}return d.cloneElement(B,{className:s()((O=B.props)===null||O===void 0?void 0:O.className,Ce)||null,style:r()(r()({},(P=B.props)===null||P===void 0?void 0:P.style),De),hidden:S})}),v=U,Oe=e(19632),Ie=e.n(Oe),Me=e(5574),ae=e.n(Me),Q=e(13769),re=e.n(Q),Te=e(27848),be=e(74531),Ae=["show"];function He(t,x){if(!x.max)return!0;var C=x.strategy(t);return C<=x.max}function We(t,x){return d.useMemo(function(){var C={};x&&(C.show=a()(x)==="object"&&x.formatter?x.formatter:!!x),C=r()(r()({},C),t);var O=C,P=O.show,w=re()(O,Ae);return r()(r()({},w),{},{show:!!P,showFormatter:typeof P=="function"?P:void 0,strategy:w.strategy||function(V){return V.length}})},[t,x])}var Be=["autoComplete","onChange","onFocus","onBlur","onPressEnter","onKeyDown","onKeyUp","prefixCls","disabled","htmlSize","className","maxLength","suffix","showCount","count","type","classes","classNames","styles","onCompositionStart","onCompositionEnd"],Ke=(0,d.forwardRef)(function(t,x){var C=t.autoComplete,O=t.onChange,P=t.onFocus,w=t.onBlur,V=t.onPressEnter,b=t.onKeyDown,X=t.onKeyUp,z=t.prefixCls,K=z===void 0?"rc-input":z,G=t.disabled,Ce=t.htmlSize,De=t.className,Y=t.maxLength,k=t.suffix,je=t.showCount,oe=t.count,A=t.type,se=A===void 0?"text":A,ue=t.classes,S=t.classNames,j=t.styles,y=t.onCompositionStart,H=t.onCompositionEnd,W=re()(t,Be),L=(0,d.useState)(!1),q=ae()(L,2),xe=q[0],le=q[1],de=(0,d.useRef)(!1),N=(0,d.useRef)(!1),D=(0,d.useRef)(null),ce=(0,d.useRef)(null),ie=function(h){D.current&&g(D.current,h)},he=(0,Te.Z)(t.defaultValue,{value:t.value}),B=ae()(he,2),ee=B[0],fe=B[1],pe=ee==null?"":String(ee),ve=(0,d.useState)(null),ye=ae()(ve,2),F=ye[0],Re=ye[1],T=We(oe,je),Z=T.max||Y,ne=T.strategy(pe),Ee=!!Z&&ne>Z;(0,d.useImperativeHandle)(x,function(){var M;return{focus:ie,blur:function(){var R;(R=D.current)===null||R===void 0||R.blur()},setSelectionRange:function(R,_e,te){var J;(J=D.current)===null||J===void 0||J.setSelectionRange(R,_e,te)},select:function(){var R;(R=D.current)===null||R===void 0||R.select()},input:D.current,nativeElement:((M=ce.current)===null||M===void 0?void 0:M.nativeElement)||D.current}}),(0,d.useEffect)(function(){N.current&&(N.current=!1),le(function(M){return M&&G?!1:M})},[G]);var Pe=function(h,R,_e){var te=R;if(!de.current&&T.exceedFormatter&&T.max&&T.strategy(R)>T.max){if(te=T.exceedFormatter(R,{max:T.max}),R!==te){var J,Le;Re([((J=D.current)===null||J===void 0?void 0:J.selectionStart)||0,((Le=D.current)===null||Le===void 0?void 0:Le.selectionEnd)||0])}}else if(_e.source==="compositionEnd")return;fe(te),D.current&&E(D.current,h,O,te)};(0,d.useEffect)(function(){if(F){var M;(M=D.current)===null||M===void 0||M.setSelectionRange.apply(M,Ie()(F))}},[F]);var Ue=function(h){Pe(h,h.target.value,{source:"change"})},ge=function(h){de.current=!1,Pe(h,h.currentTarget.value,{source:"compositionEnd"}),H==null||H(h)},$=function(h){V&&h.key==="Enter"&&!N.current&&(N.current=!0,V(h)),b==null||b(h)},me=function(h){h.key==="Enter"&&(N.current=!1),X==null||X(h)},Fe=function(h){le(!0),P==null||P(h)},Ze=function(h){N.current&&(N.current=!1),le(!1),w==null||w(h)},we=function(h){fe(""),ie(),D.current&&E(D.current,h,O)},Ve=Ee&&"".concat(K,"-out-of-range"),ze=function(){var h=(0,be.Z)(t,["prefixCls","onPressEnter","addonBefore","addonAfter","prefix","suffix","allowClear","defaultValue","showCount","count","classes","htmlSize","styles","classNames","onClear"]);return(0,I.jsx)("input",r()(r()({autoComplete:C},h),{},{onChange:Ue,onFocus:Fe,onBlur:Ze,onKeyDown:$,onKeyUp:me,className:s()(K,f()({},"".concat(K,"-disabled"),G),S==null?void 0:S.input),style:j==null?void 0:j.input,ref:D,size:Ce,type:se,onCompositionStart:function(_e){de.current=!0,y==null||y(_e)},onCompositionEnd:ge}))},Ge=function(){var h=Number(Z)>0;if(k||T.show){var R=T.showFormatter?T.showFormatter({value:pe,count:ne,maxLength:Z}):"".concat(ne).concat(h?" / ".concat(Z):"");return(0,I.jsxs)(I.Fragment,{children:[T.show&&(0,I.jsx)("span",{className:s()("".concat(K,"-show-count-suffix"),f()({},"".concat(K,"-show-count-has-suffix"),!!k),S==null?void 0:S.count),style:r()({},j==null?void 0:j.count),children:R}),k]})}return null};return(0,I.jsx)(v,r()(r()({},W),{},{prefixCls:K,className:s()(De,Ve),handleReset:we,value:pe,focused:xe,triggerFocus:ie,suffix:Ge(),disabled:G,classes:ue,classNames:S,styles:j,children:ze()}))}),Se=Ke,Ne=Se},69945:function(u,n,e){"use strict";e.r(n)},45705:function(u,n,e){"use strict";e.r(n),e.d(n,{texts:function(){return r}});var c=e(67253);const r=[]},52916:function(u,n,e){"use strict";e.r(n),e.d(n,{texts:function(){return r}});var c=e(82532);const r=[]},55469:function(u,n,e){"use strict";e.r(n),e.d(n,{texts:function(){return r}});var c=e(81935);const r=[]},74344:function(u,n,e){"use strict";e.r(n),e.d(n,{texts:function(){return r}});var c=e(15907);const r=[]},11040:function(u,n,e){"use strict";e.r(n),e.d(n,{texts:function(){return r}});var c=e(24060);const r=[]},51446:function(u,n,e){"use strict";e.r(n),e.d(n,{texts:function(){return r}});var c=e(68537);const r=[{value:`import Input from 'rc-input';
import { render } from 'react-dom';

render(<Input placeholder="input" allowClear />, mountNode);
`,paraId:0,tocIndex:2},{value:"Property",paraId:1,tocIndex:3},{value:"Type",paraId:1,tocIndex:3},{value:"Default",paraId:1,tocIndex:3},{value:"Description",paraId:1,tocIndex:3},{value:"prefixCls",paraId:1,tocIndex:3},{value:"string",paraId:1,tocIndex:3},{value:"rc-input",paraId:1,tocIndex:3},{value:"className",paraId:1,tocIndex:3},{value:"string",paraId:1,tocIndex:3},{value:"''",paraId:1,tocIndex:3},{value:"additional class name of input",paraId:1,tocIndex:3},{value:"style",paraId:1,tocIndex:3},{value:"React.CSSProperties",paraId:1,tocIndex:3},{value:"style properties of input",paraId:1,tocIndex:3},{value:"affixWrapperClassName",paraId:1,tocIndex:3},{value:"string",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"className with 'rc-input-affix-wrapper'",paraId:1,tocIndex:3},{value:"groupClassName",paraId:1,tocIndex:3},{value:"string",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"className with 'rc-input-group-wrapper'",paraId:1,tocIndex:3},{value:"wrapperClassName",paraId:1,tocIndex:3},{value:"string",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"className with 'rc-input-wrapper'",paraId:1,tocIndex:3},{value:"addonAfter",paraId:1,tocIndex:3},{value:"ReactNode",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"The label text displayed after (on the right side of) the input field",paraId:1,tocIndex:3},{value:"addonBefore",paraId:1,tocIndex:3},{value:"ReactNode",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"The label text displayed before (on the left side of) the input field",paraId:1,tocIndex:3},{value:"allowClear",paraId:1,tocIndex:3},{value:"boolean | { clearIcon: ReactNode }",paraId:1,tocIndex:3},{value:"false",paraId:1,tocIndex:3},{value:"If allow to remove input content with clear icon",paraId:1,tocIndex:3},{value:"bordered",paraId:1,tocIndex:3},{value:"boolean",paraId:1,tocIndex:3},{value:"true",paraId:1,tocIndex:3},{value:"Whether has border style",paraId:1,tocIndex:3},{value:"defaultValue",paraId:1,tocIndex:3},{value:"string",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"The initial input content",paraId:1,tocIndex:3},{value:"disabled",paraId:1,tocIndex:3},{value:"boolean",paraId:1,tocIndex:3},{value:"false",paraId:1,tocIndex:3},{value:"Whether the input is disabled",paraId:1,tocIndex:3},{value:"id",paraId:1,tocIndex:3},{value:"string",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"The ID for input",paraId:1,tocIndex:3},{value:"maxLength",paraId:1,tocIndex:3},{value:"number",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"The max length",paraId:1,tocIndex:3},{value:"showCount",paraId:1,tocIndex:3},{value:"boolean | { formatter: ({ value: string, count: number, maxLength?: number }) => ReactNode }",paraId:1,tocIndex:3},{value:"false",paraId:1,tocIndex:3},{value:"Whether show text count",paraId:1,tocIndex:3},{value:"prefix",paraId:1,tocIndex:3},{value:"ReactNode",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"The prefix icon for the Input",paraId:1,tocIndex:3},{value:"suffix",paraId:1,tocIndex:3},{value:"ReactNode",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"The suffix icon for the Input",paraId:1,tocIndex:3},{value:"type",paraId:1,tocIndex:3},{value:"string",paraId:1,tocIndex:3},{value:"text",paraId:1,tocIndex:3},{value:"The type of input, see: ",paraId:1,tocIndex:3},{value:"MDN",paraId:1,tocIndex:3},{value:"( use ",paraId:1,tocIndex:3},{value:"Input.TextArea",paraId:1,tocIndex:3},{value:" instead of ",paraId:1,tocIndex:3},{value:'type="textarea"',paraId:1,tocIndex:3},{value:")",paraId:1,tocIndex:3},{value:"value",paraId:1,tocIndex:3},{value:"string",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"The input content value",paraId:1,tocIndex:3},{value:"onChange",paraId:1,tocIndex:3},{value:"function(e)",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"Callback when user input",paraId:1,tocIndex:3},{value:"onPressEnter",paraId:1,tocIndex:3},{value:"function(e)",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"The callback function that is triggered when Enter key is pressed",paraId:1,tocIndex:3},{value:`const inputRef = useRef(null);

useEffect(() => {
  inputRef.current.focus();// the input will get focus
  inputRef.current.blur();// the input will lose focus
  console.log(inputRef.current.input);// The origin input element
}, []);
// ....
<Input ref={inputRef} />
`,paraId:2,tocIndex:4},{value:"Property",paraId:3,tocIndex:4},{value:"Type",paraId:3,tocIndex:4},{value:"Description",paraId:3,tocIndex:4},{value:"focus",paraId:3,tocIndex:4},{value:"(options?: InputFocusOptions) => void",paraId:3,tocIndex:4},{value:"The input get focus when called",paraId:3,tocIndex:4},{value:"blur",paraId:3,tocIndex:4},{value:"() => void",paraId:3,tocIndex:4},{value:"The input loses focus when called",paraId:3,tocIndex:4},{value:"input",paraId:3,tocIndex:4},{value:"HTMLInputElement | null",paraId:3,tocIndex:4},{value:"The origin input element",paraId:3,tocIndex:4},{value:`npm install
npm start
`,paraId:4,tocIndex:5},{value:"rc-input is released under the MIT license.",paraId:5,tocIndex:6}]},86834:function(u,n){"use strict";n.Z=`.rc-input {
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
`},70042:function(u,n){"use strict";n.Z=`import Input from '@rc-component/input';
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
`},94533:function(u,n){"use strict";n.Z=`import type { ChangeEvent, FC } from 'react';
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
`},99306:function(u,n){"use strict";n.Z=`import type { FC } from 'react';
import React from 'react';
import '../../assets/index.less';
import Input from '@rc-component/input';

const Demo: FC = () => (
  <Input prefixCls="rc-input" style={{ marginLeft: 200 }} />
);

export default Demo;
`},43920:function(u,n){"use strict";n.Z=`import Input from '@rc-component/input';
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
`},5280:function(u,n){"use strict";n.Z=`import Input from '@rc-component/input';
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
`},96446:function(u,n,e){var c=e(37923);function r(i){if(Array.isArray(i))return c(i)}u.exports=r,u.exports.__esModule=!0,u.exports.default=u.exports},96936:function(u){function n(e){if(typeof Symbol!="undefined"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}u.exports=n,u.exports.__esModule=!0,u.exports.default=u.exports},88619:function(u){function n(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}u.exports=n,u.exports.__esModule=!0,u.exports.default=u.exports},13769:function(u,n,e){var c=e(48541);function r(i,f){if(i==null)return{};var l=c(i,f),a,m;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(i);for(m=0;m<s.length;m++)a=s[m],!(f.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(i,a)&&(l[a]=i[a])}return l}u.exports=r,u.exports.__esModule=!0,u.exports.default=u.exports},48541:function(u){function n(e,c){if(e==null)return{};var r={},i=Object.keys(e),f,l;for(l=0;l<i.length;l++)f=i[l],!(c.indexOf(f)>=0)&&(r[f]=e[f]);return r}u.exports=n,u.exports.__esModule=!0,u.exports.default=u.exports},19632:function(u,n,e){var c=e(96446),r=e(96936),i=e(96263),f=e(88619);function l(a){return c(a)||r(a)||i(a)||f()}u.exports=l,u.exports.__esModule=!0,u.exports.default=u.exports}}]);
