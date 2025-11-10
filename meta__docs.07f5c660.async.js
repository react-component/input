(self.webpackChunk_rc_component_input=self.webpackChunk_rc_component_input||[]).push([[904],{10763:function(o,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=e;function e(){return!!(typeof window!="undefined"&&window.document&&window.document.createElement)}},56640:function(o,t,e){"use strict";var a;a={value:!0},a=b,a=v,a=x,a=r,a=E,t.nH=C;var l=i(e(21904));function i(s){return s&&s.__esModule?s:{default:s}}function c(s,f=!1){if((0,l.default)(s)){const y=s.nodeName.toLowerCase(),m=["input","select","textarea","button"].includes(y)||s.isContentEditable||y==="a"&&!!s.getAttribute("href"),d=s.getAttribute("tabindex"),Q=Number(d);let B=null;return d&&!Number.isNaN(Q)?B=Q:m&&B===null&&(B=0),m&&s.disabled&&(B=null),B!==null&&(B>=0||f&&B<0)}return!1}function x(s,f=!1){const y=[...s.querySelectorAll("*")].filter(m=>c(m,f));return c(s,f)&&y.unshift(s),y}let u=null;function E(){u=document.activeElement}function v(){u=null}function b(){if(u)try{u.focus()}catch(s){}}function r(s,f){if(f.keyCode===9){const y=x(s);(y[f.shiftKey?0:y.length-1]===document.activeElement||s===document.activeElement)&&(y[f.shiftKey?y.length-1:0].focus(),f.preventDefault())}}function C(s,f){if(!s)return;s.focus(f);const{cursor:y}=f||{};if(y&&(s instanceof HTMLInputElement||s instanceof HTMLTextAreaElement)){const m=s.value.length;switch(y){case"start":s.setSelectionRange(0,0);break;case"end":s.setSelectionRange(m,m);break;default:s.setSelectionRange(0,m)}}}},21904:function(o,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e=a=>{if(!a)return!1;if(a instanceof Element){if(a.offsetParent)return!0;if(a.getBBox){const{width:l,height:i}=a.getBBox();if(l||i)return!0}if(a.getBoundingClientRect){const{width:l,height:i}=a.getBoundingClientRect();if(l||i)return!0}}return!1};t.default=e},96607:function(o,t,e){"use strict";var a;a={value:!0},t.Z=x;var l=e(67294),i=c(e(19831));function c(u){return u&&u.__esModule?u:{default:u}}function x(u,E){const[v,b]=(0,l.useState)(u),r=E!==void 0?E:v;return(0,i.default)(C=>{C||b(E)},[E]),[r,b]}},19831:function(o,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useLayoutUpdateEffect=t.default=void 0;var a=x(e(67294)),l=i(e(10763));function i(r){return r&&r.__esModule?r:{default:r}}function c(r){if(typeof WeakMap!="function")return null;var C=new WeakMap,s=new WeakMap;return(c=function(f){return f?s:C})(r)}function x(r,C){if(!C&&r&&r.__esModule)return r;if(r===null||typeof r!="object"&&typeof r!="function")return{default:r};var s=c(C);if(s&&s.has(r))return s.get(r);var f={__proto__:null},y=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var m in r)if(m!=="default"&&Object.prototype.hasOwnProperty.call(r,m)){var d=y?Object.getOwnPropertyDescriptor(r,m):null;d&&(d.get||d.set)?Object.defineProperty(f,m,d):f[m]=r[m]}return f.default=r,s&&s.set(r,f),f}const u=(0,l.default)()?a.useLayoutEffect:a.useEffect,E=(r,C)=>{const s=a.useRef(!0);u(()=>r(s.current),C),u(()=>(s.current=!1,()=>{s.current=!0}),[])},v=(r,C)=>{E(s=>{if(!s)return r()},C)};t.useLayoutUpdateEffect=v;var b=t.default=E},74531:function(o,t){"use strict";var e;e={value:!0},t.Z=a;function a(l,i){const c=Object.assign({},l);return Array.isArray(i)&&i.forEach(x=>{delete c[x]}),c}},91678:function(o,t,e){"use strict";var a;e.r(t),e.d(t,{demos:function(){return b}});var l=e(15009),i=e.n(l),c=e(99289),x=e.n(c),u=e(67294),E=e(28976),v=e(69945),b={"docs-demo-addon-demo-addon":{component:u.memo(u.lazy(function(){return e.e(433).then(e.bind(e,99355))})),asset:{type:"BLOCK",id:"docs-demo-addon-demo-addon",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(70042).Z},"@rc-component/input":{type:"NPM",value:"1.1.2"},react:{type:"NPM",value:"18.3.1"},"../../assets/index.less":{type:"FILE",value:e(86834).Z}},entry:"index.tsx"},context:{"../../assets/index.less":v,"@rc-component/input":E,react:a||(a=e.t(u,2)),"/Users/jilin/projects/antd/rc-input/assets/index.less":v},renderOpts:{compile:function(){var r=x()(i()().mark(function s(){var f,y=arguments;return i()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,e.e(862).then(e.bind(e,16862));case 2:return d.abrupt("return",(f=d.sent).default.apply(f,y));case 3:case"end":return d.stop()}},s)}));function C(){return r.apply(this,arguments)}return C}()}}}},24703:function(o,t,e){"use strict";var a;e.r(t),e.d(t,{demos:function(){return b}});var l=e(15009),i=e.n(l),c=e(99289),x=e.n(c),u=e(67294),E=e(28976),v=e(69945),b={"docs-demo-allow-clear-demo-allow-clear":{component:u.memo(u.lazy(function(){return e.e(433).then(e.bind(e,52710))})),asset:{type:"BLOCK",id:"docs-demo-allow-clear-demo-allow-clear",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(94533).Z},react:{type:"NPM",value:"18.3.1"},"@rc-component/input":{type:"NPM",value:"1.1.2"},"../../assets/index.less":{type:"FILE",value:e(86834).Z}},entry:"index.tsx"},context:{"../../assets/index.less":v,react:a||(a=e.t(u,2)),"@rc-component/input":E,"/Users/jilin/projects/antd/rc-input/assets/index.less":v},renderOpts:{compile:function(){var r=x()(i()().mark(function s(){var f,y=arguments;return i()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,e.e(862).then(e.bind(e,16862));case 2:return d.abrupt("return",(f=d.sent).default.apply(f,y));case 3:case"end":return d.stop()}},s)}));function C(){return r.apply(this,arguments)}return C}()}}}},33147:function(o,t,e){"use strict";var a;e.r(t),e.d(t,{demos:function(){return b}});var l=e(15009),i=e.n(l),c=e(99289),x=e.n(c),u=e(67294),E=e(28976),v=e(69945),b={"docs-demo-basic-demo-basic":{component:u.memo(u.lazy(function(){return e.e(433).then(e.bind(e,6536))})),asset:{type:"BLOCK",id:"docs-demo-basic-demo-basic",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(99306).Z},react:{type:"NPM",value:"18.3.1"},"@rc-component/input":{type:"NPM",value:"1.1.2"},"../../assets/index.less":{type:"FILE",value:e(86834).Z}},entry:"index.tsx"},context:{"../../assets/index.less":v,react:a||(a=e.t(u,2)),"@rc-component/input":E,"/Users/jilin/projects/antd/rc-input/assets/index.less":v},renderOpts:{compile:function(){var r=x()(i()().mark(function s(){var f,y=arguments;return i()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,e.e(862).then(e.bind(e,16862));case 2:return d.abrupt("return",(f=d.sent).default.apply(f,y));case 3:case"end":return d.stop()}},s)}));function C(){return r.apply(this,arguments)}return C}()}}}},64165:function(o,t,e){"use strict";var a;e.r(t),e.d(t,{demos:function(){return b}});var l=e(15009),i=e.n(l),c=e(99289),x=e.n(c),u=e(67294),E=e(28976),v=e(69945),b={"docs-demo-prefix-suffix-demo-prefix-suffix":{component:u.memo(u.lazy(function(){return e.e(433).then(e.bind(e,59409))})),asset:{type:"BLOCK",id:"docs-demo-prefix-suffix-demo-prefix-suffix",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(43920).Z},"@rc-component/input":{type:"NPM",value:"1.1.2"},react:{type:"NPM",value:"18.3.1"},"../../assets/index.less":{type:"FILE",value:e(86834).Z}},entry:"index.tsx"},context:{"../../assets/index.less":v,"@rc-component/input":E,react:a||(a=e.t(u,2)),"/Users/jilin/projects/antd/rc-input/assets/index.less":v},renderOpts:{compile:function(){var r=x()(i()().mark(function s(){var f,y=arguments;return i()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,e.e(862).then(e.bind(e,16862));case 2:return d.abrupt("return",(f=d.sent).default.apply(f,y));case 3:case"end":return d.stop()}},s)}));function C(){return r.apply(this,arguments)}return C}()}}}},94793:function(o,t,e){"use strict";var a;e.r(t),e.d(t,{demos:function(){return b}});var l=e(15009),i=e.n(l),c=e(99289),x=e.n(c),u=e(67294),E=e(28976),v=e(69945),b={"docs-demo-show-count-demo-show-count":{component:u.memo(u.lazy(function(){return e.e(433).then(e.bind(e,66744))})),asset:{type:"BLOCK",id:"docs-demo-show-count-demo-show-count",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(5280).Z},"@rc-component/input":{type:"NPM",value:"1.1.2"},react:{type:"NPM",value:"18.3.1"},"../../assets/index.less":{type:"FILE",value:e(86834).Z}},entry:"index.tsx"},context:{"../../assets/index.less":v,"@rc-component/input":E,react:a||(a=e.t(u,2)),"/Users/jilin/projects/antd/rc-input/assets/index.less":v},renderOpts:{compile:function(){var r=x()(i()().mark(function s(){var f,y=arguments;return i()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,e.e(862).then(e.bind(e,16862));case 2:return d.abrupt("return",(f=d.sent).default.apply(f,y));case 3:case"end":return d.stop()}},s)}));function C(){return r.apply(this,arguments)}return C}()}}}},11171:function(o,t,e){"use strict";e.r(t),e.d(t,{demos:function(){return l}});var a=e(67294),l={}},28976:function(o,t,e){"use strict";e.r(t),e.d(t,{BaseInput:function(){return Q},default:function(){return Fe}});var a=e(97857),l=e.n(a),i=e(9783),c=e.n(i),x=e(52677),u=e.n(x);function E(n){var p,h,I="";if(typeof n=="string"||typeof n=="number")I+=n;else if(typeof n=="object")if(Array.isArray(n)){var j=n.length;for(p=0;p<j;p++)n[p]&&(h=E(n[p]))&&(I&&(I+=" "),I+=h)}else for(h in n)n[h]&&(I&&(I+=" "),I+=h);return I}function v(){for(var n,p,h=0,I="",j=arguments.length;h<j;h++)(n=arguments[h])&&(p=E(n))&&(I&&(I+=" "),I+=p);return I}var b=null,r=e(67294);function C(n){return!!(n.addonBefore||n.addonAfter)}function s(n){return!!(n.prefix||n.suffix||n.allowClear)}function f(n,p,h){var I=p.cloneNode(!0),j=Object.create(n,{target:{value:I},currentTarget:{value:I}});return I.value=h,typeof p.selectionStart=="number"&&typeof p.selectionEnd=="number"&&(I.selectionStart=p.selectionStart,I.selectionEnd=p.selectionEnd),I.setSelectionRange=function(){p.setSelectionRange.apply(p,arguments)},j}function y(n,p,h,I){if(h){var j=p;if(p.type==="click"){j=f(p,n,""),h(j);return}if(n.type!=="file"&&I!==void 0){j=f(p,n,I),h(j);return}h(j)}}var m=e(85893),d=r.forwardRef(function(n,p){var h,I,j,H=n.inputElement,z=n.children,L=n.prefixCls,X=n.prefix,V=n.suffix,W=n.addonBefore,G=n.addonAfter,ge=n.className,Ce=n.style,Y=n.disabled,k=n.readOnly,je=n.focused,re=n.triggerFocus,U=n.allowClear,oe=n.value,se=n.handleReset,S=n.hidden,D=n.classes,g=n.classNames,$=n.dataAttrs,A=n.styles,R=n.components,q=n.onClear,me=z!=null?z:H,ue=(R==null?void 0:R.affixWrapper)||"span",le=(R==null?void 0:R.groupWrapper)||"span",K=(R==null?void 0:R.wrapper)||"span",O=(R==null?void 0:R.groupAddon)||"span",ee=(0,r.useRef)(null),de=function(w){var pe;(pe=ee.current)!==null&&pe!==void 0&&pe.contains(w.target)&&(re==null||re())},Ie=s(n),N=(0,r.cloneElement)(me,{value:oe,className:v((h=me.props)===null||h===void 0?void 0:h.className,!Ie&&(g==null?void 0:g.variant))||null}),ne=(0,r.useRef)(null);if(r.useImperativeHandle(p,function(){return{nativeElement:ne.current||ee.current}}),Ie){var ie=null;if(U){var ce=!Y&&!k&&oe,fe="".concat(L,"-clear-icon"),_e=u()(U)==="object"&&U!==null&&U!==void 0&&U.clearIcon?U.clearIcon:"\u2716";ie=(0,m.jsx)("button",{type:"button",tabIndex:-1,onClick:function(w){se==null||se(w),q==null||q()},onMouseDown:function(w){return w.preventDefault()},className:v(fe,c()(c()({},"".concat(fe,"-hidden"),!ce),"".concat(fe,"-has-suffix"),!!V)),children:_e})}var F="".concat(L,"-affix-wrapper"),Me=v(F,c()(c()(c()(c()(c()({},"".concat(L,"-disabled"),Y),"".concat(F,"-disabled"),Y),"".concat(F,"-focused"),je),"".concat(F,"-readonly"),k),"".concat(F,"-input-with-clear-btn"),V&&U&&oe),D==null?void 0:D.affixWrapper,g==null?void 0:g.affixWrapper,g==null?void 0:g.variant),T=(V||U)&&(0,m.jsxs)("span",{className:v("".concat(L,"-suffix"),g==null?void 0:g.suffix),style:A==null?void 0:A.suffix,children:[ie,V]});N=(0,m.jsxs)(ue,l()(l()({className:Me,style:A==null?void 0:A.affixWrapper,onClick:de},$==null?void 0:$.affixWrapper),{},{ref:ee,children:[X&&(0,m.jsx)("span",{className:v("".concat(L,"-prefix"),g==null?void 0:g.prefix),style:A==null?void 0:A.prefix,children:X}),N,T]}))}if(C(n)){var Z="".concat(L,"-group"),te="".concat(Z,"-addon"),xe="".concat(Z,"-wrapper"),he=v("".concat(L,"-wrapper"),Z,D==null?void 0:D.wrapper,g==null?void 0:g.wrapper),Oe=v(xe,c()({},"".concat(xe,"-disabled"),Y),D==null?void 0:D.group,g==null?void 0:g.groupWrapper);N=(0,m.jsx)(le,{className:Oe,ref:ne,children:(0,m.jsxs)(K,{className:he,children:[W&&(0,m.jsx)(O,{className:te,children:W}),N,G&&(0,m.jsx)(O,{className:te,children:G})]})})}return r.cloneElement(N,{className:v((I=N.props)===null||I===void 0?void 0:I.className,ge)||null,style:l()(l()({},(j=N.props)===null||j===void 0?void 0:j.style),Ce),hidden:S})}),Q=d,B=e(19632),be=e.n(B),Re=e(5574),Ee=e.n(Re),Te=e(13769),Pe=e.n(Te),Le=e(96607),Ue=e(74531),Ae=["show"];function we(n,p){if(!p.max)return!0;var h=p.strategy(n);return h<=p.max}function Ne(n,p){return r.useMemo(function(){var h={};p&&(h.show=u()(p)==="object"&&p.formatter?p.formatter:!!p),h=l()(l()({},h),n);var I=h,j=I.show,H=Pe()(I,Ae);return l()(l()({},H),{},{show:!!j,showFormatter:typeof j=="function"?j:void 0,strategy:H.strategy||function(z){return z.length}})},[n,p])}var Be=e(56640),We=["autoComplete","onChange","onFocus","onBlur","onPressEnter","onKeyDown","onKeyUp","prefixCls","disabled","htmlSize","className","maxLength","suffix","showCount","count","type","classes","classNames","styles","onCompositionStart","onCompositionEnd"],Se=(0,r.forwardRef)(function(n,p){var h=n.autoComplete,I=n.onChange,j=n.onFocus,H=n.onBlur,z=n.onPressEnter,L=n.onKeyDown,X=n.onKeyUp,V=n.prefixCls,W=V===void 0?"rc-input":V,G=n.disabled,ge=n.htmlSize,Ce=n.className,Y=n.maxLength,k=n.suffix,je=n.showCount,re=n.count,U=n.type,oe=U===void 0?"text":U,se=n.classes,S=n.classNames,D=n.styles,g=n.onCompositionStart,$=n.onCompositionEnd,A=Pe()(n,We),R=(0,r.useState)(!1),q=Ee()(R,2),me=q[0],ue=q[1],le=(0,r.useRef)(!1),K=(0,r.useRef)(!1),O=(0,r.useRef)(null),ee=(0,r.useRef)(null),de=function(_){O.current&&(0,Be.nH)(O.current,_)},Ie=(0,Le.Z)(n.defaultValue,n.value),N=Ee()(Ie,2),ne=N[0],ie=N[1],ce=ne==null?"":String(ne),fe=(0,r.useState)(null),_e=Ee()(fe,2),F=_e[0],Me=_e[1],T=Ne(re,je),Z=T.max||Y,te=T.strategy(ce),xe=!!Z&&te>Z;(0,r.useImperativeHandle)(p,function(){var M;return{focus:de,blur:function(){var P;(P=O.current)===null||P===void 0||P.blur()},setSelectionRange:function(P,ve,ae){var J;(J=O.current)===null||J===void 0||J.setSelectionRange(P,ve,ae)},select:function(){var P;(P=O.current)===null||P===void 0||P.select()},input:O.current,nativeElement:((M=ee.current)===null||M===void 0?void 0:M.nativeElement)||O.current}}),(0,r.useEffect)(function(){K.current&&(K.current=!1),ue(function(M){return M&&G?!1:M})},[G]);var he=function(_,P,ve){var ae=P;if(!le.current&&T.exceedFormatter&&T.max&&T.strategy(P)>T.max){if(ae=T.exceedFormatter(P,{max:T.max}),P!==ae){var J,De;Me([((J=O.current)===null||J===void 0?void 0:J.selectionStart)||0,((De=O.current)===null||De===void 0?void 0:De.selectionEnd)||0])}}else if(ve.source==="compositionEnd")return;ie(ae),O.current&&y(O.current,_,I,ae)};(0,r.useEffect)(function(){if(F){var M;(M=O.current)===null||M===void 0||M.setSelectionRange.apply(M,be()(F))}},[F]);var Oe=function(_){he(_,_.target.value,{source:"change"})},ye=function(_){le.current=!1,he(_,_.currentTarget.value,{source:"compositionEnd"}),$==null||$(_)},w=function(_){z&&_.key==="Enter"&&!K.current&&!_.nativeEvent.isComposing&&(K.current=!0,z(_)),L==null||L(_)},pe=function(_){_.key==="Enter"&&(K.current=!1),X==null||X(_)},Ze=function(_){ue(!0),j==null||j(_)},He=function(_){K.current&&(K.current=!1),ue(!1),H==null||H(_)},ze=function(_){ie(""),de(),O.current&&y(O.current,_,I)},Ve=xe&&"".concat(W,"-out-of-range"),Ge=function(){var _=(0,Ue.Z)(n,["prefixCls","onPressEnter","addonBefore","addonAfter","prefix","suffix","allowClear","defaultValue","showCount","count","classes","htmlSize","styles","classNames","onClear"]);return(0,m.jsx)("input",l()(l()({autoComplete:h},_),{},{onChange:Oe,onFocus:Ze,onBlur:He,onKeyDown:w,onKeyUp:pe,className:v(W,c()({},"".concat(W,"-disabled"),G),S==null?void 0:S.input),style:D==null?void 0:D.input,ref:O,size:ge,type:oe,onCompositionStart:function(ve){le.current=!0,g==null||g(ve)},onCompositionEnd:ye}))},$e=function(){var _=Number(Z)>0;if(k||T.show){var P=T.showFormatter?T.showFormatter({value:ce,count:te,maxLength:Z}):"".concat(te).concat(_?" / ".concat(Z):"");return(0,m.jsxs)(m.Fragment,{children:[T.show&&(0,m.jsx)("span",{className:v("".concat(W,"-show-count-suffix"),c()({},"".concat(W,"-show-count-has-suffix"),!!k),S==null?void 0:S.count),style:l()({},D==null?void 0:D.count),children:P}),k]})}return null};return(0,m.jsx)(Q,l()(l()({},A),{},{prefixCls:W,className:v(Ce,Ve),handleReset:ze,value:ce,focused:me,triggerFocus:de,suffix:$e(),disabled:G,classes:se,classNames:S,styles:D,ref:ee,children:Ge()}))}),Ke=Se,Fe=Ke},69945:function(o,t,e){"use strict";e.r(t)},45705:function(o,t,e){"use strict";e.r(t),e.d(t,{texts:function(){return a}});const a=[]},52916:function(o,t,e){"use strict";e.r(t),e.d(t,{texts:function(){return a}});const a=[]},55469:function(o,t,e){"use strict";e.r(t),e.d(t,{texts:function(){return a}});const a=[]},74344:function(o,t,e){"use strict";e.r(t),e.d(t,{texts:function(){return a}});const a=[]},11040:function(o,t,e){"use strict";e.r(t),e.d(t,{texts:function(){return a}});const a=[]},51446:function(o,t,e){"use strict";e.r(t),e.d(t,{texts:function(){return a}});const a=[{value:`import Input from 'rc-input';
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
`,paraId:4,tocIndex:5},{value:"rc-input is released under the MIT license.",paraId:5,tocIndex:6}]},86834:function(o,t){"use strict";t.Z=`.rc-input {
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
`},70042:function(o,t){"use strict";t.Z=`import Input from '@rc-component/input';
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
`},94533:function(o,t){"use strict";t.Z=`import type { ChangeEvent, FC } from 'react';
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
`},99306:function(o,t){"use strict";t.Z=`import type { FC } from 'react';
import React from 'react';
import '../../assets/index.less';
import Input from '@rc-component/input';

const Demo: FC = () => (
  <Input prefixCls="rc-input" style={{ marginLeft: 200 }} />
);

export default Demo;
`},43920:function(o,t){"use strict";t.Z=`import Input from '@rc-component/input';
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
`},5280:function(o,t){"use strict";t.Z=`import Input from '@rc-component/input';
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
`},96446:function(o,t,e){var a=e(37923);function l(i){if(Array.isArray(i))return a(i)}o.exports=l,o.exports.__esModule=!0,o.exports.default=o.exports},96936:function(o){function t(e){if(typeof Symbol!="undefined"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}o.exports=t,o.exports.__esModule=!0,o.exports.default=o.exports},88619:function(o){function t(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}o.exports=t,o.exports.__esModule=!0,o.exports.default=o.exports},13769:function(o,t,e){var a=e(48541);function l(i,c){if(i==null)return{};var x=a(i,c),u,E;if(Object.getOwnPropertySymbols){var v=Object.getOwnPropertySymbols(i);for(E=0;E<v.length;E++)u=v[E],!(c.indexOf(u)>=0)&&Object.prototype.propertyIsEnumerable.call(i,u)&&(x[u]=i[u])}return x}o.exports=l,o.exports.__esModule=!0,o.exports.default=o.exports},48541:function(o){function t(e,a){if(e==null)return{};var l={},i=Object.keys(e),c,x;for(x=0;x<i.length;x++)c=i[x],!(a.indexOf(c)>=0)&&(l[c]=e[c]);return l}o.exports=t,o.exports.__esModule=!0,o.exports.default=o.exports},19632:function(o,t,e){var a=e(96446),l=e(96936),i=e(96263),c=e(88619);function x(u){return a(u)||l(u)||i(u)||c()}o.exports=x,o.exports.__esModule=!0,o.exports.default=o.exports}}]);
