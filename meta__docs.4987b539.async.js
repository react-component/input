(self.webpackChunk_rc_component_input=self.webpackChunk_rc_component_input||[]).push([[904],{10763:function(s,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=e;function e(){return!!(typeof window!="undefined"&&window.document&&window.document.createElement)}},82925:function(s,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var u=p(e(67294));function d(a){if(typeof WeakMap!="function")return null;var m=new WeakMap,r=new WeakMap;return(d=function(c){return c?r:m})(a)}function p(a,m){if(!m&&a&&a.__esModule)return a;if(a===null||typeof a!="object"&&typeof a!="function")return{default:a};var r=d(m);if(r&&r.has(a))return r.get(a);var c={__proto__:null},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var v in a)if(v!=="default"&&Object.prototype.hasOwnProperty.call(a,v)){var I=o?Object.getOwnPropertyDescriptor(a,v):null;I&&(I.get||I.set)?Object.defineProperty(c,v,I):c[v]=a[v]}return c.default=a,r&&r.set(a,c),c}function f(a){const m=u.useRef();return m.current=a,u.useCallback((...c)=>{var o;return(o=m.current)==null?void 0:o.call(m,...c)},[])}var l=n.default=f},19831:function(s,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.useLayoutUpdateEffect=n.default=void 0;var u=l(e(67294)),d=p(e(10763));function p(o){return o&&o.__esModule?o:{default:o}}function f(o){if(typeof WeakMap!="function")return null;var v=new WeakMap,I=new WeakMap;return(f=function(h){return h?I:v})(o)}function l(o,v){if(!v&&o&&o.__esModule)return o;if(o===null||typeof o!="object"&&typeof o!="function")return{default:o};var I=f(v);if(I&&I.has(o))return I.get(o);var h={__proto__:null},P=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var y in o)if(y!=="default"&&Object.prototype.hasOwnProperty.call(o,y)){var i=P?Object.getOwnPropertyDescriptor(o,y):null;i&&(i.get||i.set)?Object.defineProperty(h,y,i):h[y]=o[y]}return h.default=o,I&&I.set(o,h),h}const a=(0,d.default)()?u.useLayoutEffect:u.useEffect,m=(o,v)=>{const I=u.useRef(!0);a(()=>o(I.current),v),a(()=>(I.current=!1,()=>{I.current=!0}),[])},r=(o,v)=>{m(I=>{if(!I)return o()},v)};n.useLayoutUpdateEffect=r;var c=n.default=m},27848:function(s,n,e){"use strict";var u;u={value:!0},n.Z=m;var d=l(e(82925)),p=e(19831),f=l(e(35226));function l(r){return r&&r.__esModule?r:{default:r}}function a(r){return r!==void 0}function m(r,c){const{defaultValue:o,value:v,onChange:I,postState:h}=c||{},[P,y]=(0,f.default)(()=>a(v)?v:a(o)?typeof o=="function"?o():o:typeof r=="function"?r():r),i=v!==void 0?v:P,Ie=h?h(i):i,Ce=(0,d.default)(I),[_e,Oe]=(0,f.default)([i]);(0,p.useLayoutUpdateEffect)(()=>{const J=_e[0];P!==J&&Ce(P,J)},[_e]),(0,p.useLayoutUpdateEffect)(()=>{a(v)||y(v)},[v]);const ae=(0,d.default)((J,re)=>{y(J,re),Oe([i],re)});return[Ie,ae]}},35226:function(s,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=f;var u=p(e(67294));function d(l){if(typeof WeakMap!="function")return null;var a=new WeakMap,m=new WeakMap;return(d=function(r){return r?m:a})(l)}function p(l,a){if(!a&&l&&l.__esModule)return l;if(l===null||typeof l!="object"&&typeof l!="function")return{default:l};var m=d(a);if(m&&m.has(l))return m.get(l);var r={__proto__:null},c=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in l)if(o!=="default"&&Object.prototype.hasOwnProperty.call(l,o)){var v=c?Object.getOwnPropertyDescriptor(l,o):null;v&&(v.get||v.set)?Object.defineProperty(r,o,v):r[o]=l[o]}return r.default=l,m&&m.set(l,r),r}function f(l){const a=u.useRef(!1),[m,r]=u.useState(l);u.useEffect(()=>(a.current=!1,()=>{a.current=!0}),[]);function c(o,v){v&&a.current||r(o)}return[m,c]}},74531:function(s,n){"use strict";var e;e={value:!0},n.Z=u;function u(d,p){const f=Object.assign({},d);return Array.isArray(p)&&p.forEach(l=>{delete f[l]}),f}},91678:function(s,n,e){"use strict";var u;e.r(n),e.d(n,{demos:function(){return c}});var d=e(15009),p=e.n(d),f=e(99289),l=e.n(f),a=e(67294),m=e(43712),r=e(69945),c={"docs-demo-addon-demo-addon":{component:a.memo(a.lazy(function(){return e.e(433).then(e.bind(e,99355))})),asset:{type:"BLOCK",id:"docs-demo-addon-demo-addon",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(70042).Z},"@rc-component/input":{type:"NPM",value:"1.1.0"},react:{type:"NPM",value:"18.3.1"},"../../assets/index.less":{type:"FILE",value:e(86834).Z}},entry:"index.tsx"},context:{"../../assets/index.less":r,"@rc-component/input":m,react:u||(u=e.t(a,2)),"/Users/jilin/projects/antd/rc-input/assets/index.less":r},renderOpts:{compile:function(){var o=l()(p()().mark(function I(){var h,P=arguments;return p()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,e.e(862).then(e.bind(e,16862));case 2:return i.abrupt("return",(h=i.sent).default.apply(h,P));case 3:case"end":return i.stop()}},I)}));function v(){return o.apply(this,arguments)}return v}()}}}},24703:function(s,n,e){"use strict";var u;e.r(n),e.d(n,{demos:function(){return c}});var d=e(15009),p=e.n(d),f=e(99289),l=e.n(f),a=e(67294),m=e(43712),r=e(69945),c={"docs-demo-allow-clear-demo-allow-clear":{component:a.memo(a.lazy(function(){return e.e(433).then(e.bind(e,52710))})),asset:{type:"BLOCK",id:"docs-demo-allow-clear-demo-allow-clear",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(94533).Z},react:{type:"NPM",value:"18.3.1"},"@rc-component/input":{type:"NPM",value:"1.1.0"},"../../assets/index.less":{type:"FILE",value:e(86834).Z}},entry:"index.tsx"},context:{"../../assets/index.less":r,react:u||(u=e.t(a,2)),"@rc-component/input":m,"/Users/jilin/projects/antd/rc-input/assets/index.less":r},renderOpts:{compile:function(){var o=l()(p()().mark(function I(){var h,P=arguments;return p()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,e.e(862).then(e.bind(e,16862));case 2:return i.abrupt("return",(h=i.sent).default.apply(h,P));case 3:case"end":return i.stop()}},I)}));function v(){return o.apply(this,arguments)}return v}()}}}},33147:function(s,n,e){"use strict";var u;e.r(n),e.d(n,{demos:function(){return c}});var d=e(15009),p=e.n(d),f=e(99289),l=e.n(f),a=e(67294),m=e(43712),r=e(69945),c={"docs-demo-basic-demo-basic":{component:a.memo(a.lazy(function(){return e.e(433).then(e.bind(e,6536))})),asset:{type:"BLOCK",id:"docs-demo-basic-demo-basic",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(99306).Z},react:{type:"NPM",value:"18.3.1"},"@rc-component/input":{type:"NPM",value:"1.1.0"},"../../assets/index.less":{type:"FILE",value:e(86834).Z}},entry:"index.tsx"},context:{"../../assets/index.less":r,react:u||(u=e.t(a,2)),"@rc-component/input":m,"/Users/jilin/projects/antd/rc-input/assets/index.less":r},renderOpts:{compile:function(){var o=l()(p()().mark(function I(){var h,P=arguments;return p()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,e.e(862).then(e.bind(e,16862));case 2:return i.abrupt("return",(h=i.sent).default.apply(h,P));case 3:case"end":return i.stop()}},I)}));function v(){return o.apply(this,arguments)}return v}()}}}},64165:function(s,n,e){"use strict";var u;e.r(n),e.d(n,{demos:function(){return c}});var d=e(15009),p=e.n(d),f=e(99289),l=e.n(f),a=e(67294),m=e(43712),r=e(69945),c={"docs-demo-prefix-suffix-demo-prefix-suffix":{component:a.memo(a.lazy(function(){return e.e(433).then(e.bind(e,59409))})),asset:{type:"BLOCK",id:"docs-demo-prefix-suffix-demo-prefix-suffix",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(43920).Z},"@rc-component/input":{type:"NPM",value:"1.1.0"},react:{type:"NPM",value:"18.3.1"},"../../assets/index.less":{type:"FILE",value:e(86834).Z}},entry:"index.tsx"},context:{"../../assets/index.less":r,"@rc-component/input":m,react:u||(u=e.t(a,2)),"/Users/jilin/projects/antd/rc-input/assets/index.less":r},renderOpts:{compile:function(){var o=l()(p()().mark(function I(){var h,P=arguments;return p()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,e.e(862).then(e.bind(e,16862));case 2:return i.abrupt("return",(h=i.sent).default.apply(h,P));case 3:case"end":return i.stop()}},I)}));function v(){return o.apply(this,arguments)}return v}()}}}},94793:function(s,n,e){"use strict";var u;e.r(n),e.d(n,{demos:function(){return c}});var d=e(15009),p=e.n(d),f=e(99289),l=e.n(f),a=e(67294),m=e(43712),r=e(69945),c={"docs-demo-show-count-demo-show-count":{component:a.memo(a.lazy(function(){return e.e(433).then(e.bind(e,66744))})),asset:{type:"BLOCK",id:"docs-demo-show-count-demo-show-count",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(5280).Z},"@rc-component/input":{type:"NPM",value:"1.1.0"},react:{type:"NPM",value:"18.3.1"},"../../assets/index.less":{type:"FILE",value:e(86834).Z}},entry:"index.tsx"},context:{"../../assets/index.less":r,"@rc-component/input":m,react:u||(u=e.t(a,2)),"/Users/jilin/projects/antd/rc-input/assets/index.less":r},renderOpts:{compile:function(){var o=l()(p()().mark(function I(){var h,P=arguments;return p()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,e.e(862).then(e.bind(e,16862));case 2:return i.abrupt("return",(h=i.sent).default.apply(h,P));case 3:case"end":return i.stop()}},I)}));function v(){return o.apply(this,arguments)}return v}()}}}},11171:function(s,n,e){"use strict";e.r(n),e.d(n,{demos:function(){return d}});var u=e(67294),d={}},43712:function(s,n,e){"use strict";e.r(n),e.d(n,{BaseInput:function(){return Ie},default:function(){return Ne}});var u=e(97857),d=e.n(u),p=e(9783),f=e.n(p),l=e(52677),a=e.n(l),m=e(93967),r=e.n(m),c=e(67294);function o(t){return!!(t.addonBefore||t.addonAfter)}function v(t){return!!(t.prefix||t.suffix||t.allowClear)}function I(t,x,O){var j=x.cloneNode(!0),g=Object.create(t,{target:{value:j},currentTarget:{value:j}});return j.value=O,typeof x.selectionStart=="number"&&typeof x.selectionEnd=="number"&&(j.selectionStart=x.selectionStart,j.selectionEnd=x.selectionEnd),j.setSelectionRange=function(){x.setSelectionRange.apply(x,arguments)},g}function h(t,x,O,j){if(O){var g=x;if(x.type==="click"){g=I(x,t,""),O(g);return}if(t.type!=="file"&&j!==void 0){g=I(x,t,j),O(g);return}O(g)}}function P(t,x){if(t){t.focus(x);var O=x||{},j=O.cursor;if(j){var g=t.value.length;switch(j){case"start":t.setSelectionRange(0,0);break;case"end":t.setSelectionRange(g,g);break;default:t.setSelectionRange(0,g)}}}}var y=e(85893),i=c.forwardRef(function(t,x){var O,j,g,Z=t.inputElement,V=t.children,L=t.prefixCls,Q=t.prefix,w=t.suffix,S=t.addonBefore,z=t.addonAfter,Me=t.className,Pe=t.style,X=t.disabled,Y=t.readOnly,De=t.focused,oe=t.triggerFocus,T=t.allowClear,se=t.value,ue=t.handleReset,B=t.hidden,D=t.classes,E=t.classNames,G=t.dataAttrs,A=t.styles,b=t.components,k=t.onClear,xe=V!=null?V:Z,le=(b==null?void 0:b.affixWrapper)||"span",de=(b==null?void 0:b.groupWrapper)||"span",K=(b==null?void 0:b.wrapper)||"span",M=(b==null?void 0:b.groupAddon)||"span",q=(0,c.useRef)(null),ie=function(H){var ve;(ve=q.current)!==null&&ve!==void 0&&ve.contains(H.target)&&(oe==null||oe())},he=v(t),W=(0,c.cloneElement)(xe,{value:se,className:r()((O=xe.props)===null||O===void 0?void 0:O.className,!he&&(E==null?void 0:E.variant))||null}),ee=(0,c.useRef)(null);if(c.useImperativeHandle(x,function(){return{nativeElement:ee.current||q.current}}),he){var ce=null;if(T){var fe=!X&&!Y&&se,pe="".concat(L,"-clear-icon"),ye=a()(T)==="object"&&T!==null&&T!==void 0&&T.clearIcon?T.clearIcon:"\u2716";ce=(0,y.jsx)("button",{type:"button",tabIndex:-1,onClick:function(H){ue==null||ue(H),k==null||k()},onMouseDown:function(H){return H.preventDefault()},className:r()(pe,f()(f()({},"".concat(pe,"-hidden"),!fe),"".concat(pe,"-has-suffix"),!!w)),children:ye})}var N="".concat(L,"-affix-wrapper"),Re=r()(N,f()(f()(f()(f()(f()({},"".concat(L,"-disabled"),X),"".concat(N,"-disabled"),X),"".concat(N,"-focused"),De),"".concat(N,"-readonly"),Y),"".concat(N,"-input-with-clear-btn"),w&&T&&se),D==null?void 0:D.affixWrapper,E==null?void 0:E.affixWrapper,E==null?void 0:E.variant),U=(w||T)&&(0,y.jsxs)("span",{className:r()("".concat(L,"-suffix"),E==null?void 0:E.suffix),style:A==null?void 0:A.suffix,children:[ce,w]});W=(0,y.jsxs)(le,d()(d()({className:Re,style:A==null?void 0:A.affixWrapper,onClick:ie},G==null?void 0:G.affixWrapper),{},{ref:q,children:[Q&&(0,y.jsx)("span",{className:r()("".concat(L,"-prefix"),E==null?void 0:E.prefix),style:A==null?void 0:A.prefix,children:Q}),W,U]}))}if(o(t)){var F="".concat(L,"-group"),ne="".concat(F,"-addon"),Ee="".concat(F,"-wrapper"),ge=r()("".concat(L,"-wrapper"),F,D==null?void 0:D.wrapper,E==null?void 0:E.wrapper),be=r()(Ee,f()({},"".concat(Ee,"-disabled"),X),D==null?void 0:D.group,E==null?void 0:E.groupWrapper);W=(0,y.jsx)(de,{className:be,ref:ee,children:(0,y.jsxs)(K,{className:ge,children:[S&&(0,y.jsx)(M,{className:ne,children:S}),W,z&&(0,y.jsx)(M,{className:ne,children:z})]})})}return c.cloneElement(W,{className:r()((j=W.props)===null||j===void 0?void 0:j.className,Me)||null,style:d()(d()({},(g=W.props)===null||g===void 0?void 0:g.style),Pe),hidden:B})}),Ie=i,Ce=e(19632),_e=e.n(Ce),Oe=e(5574),ae=e.n(Oe),J=e(13769),re=e.n(J),Le=e(27848),Te=e(74531),Ae=["show"];function He(t,x){if(!x.max)return!0;var O=x.strategy(t);return O<=x.max}function We(t,x){return c.useMemo(function(){var O={};x&&(O.show=a()(x)==="object"&&x.formatter?x.formatter:!!x),O=d()(d()({},O),t);var j=O,g=j.show,Z=re()(j,Ae);return d()(d()({},Z),{},{show:!!g,showFormatter:typeof g=="function"?g:void 0,strategy:Z.strategy||function(V){return V.length}})},[t,x])}var Se=["autoComplete","onChange","onFocus","onBlur","onPressEnter","onKeyDown","onKeyUp","prefixCls","disabled","htmlSize","className","maxLength","suffix","showCount","count","type","classes","classNames","styles","onCompositionStart","onCompositionEnd"],Be=(0,c.forwardRef)(function(t,x){var O=t.autoComplete,j=t.onChange,g=t.onFocus,Z=t.onBlur,V=t.onPressEnter,L=t.onKeyDown,Q=t.onKeyUp,w=t.prefixCls,S=w===void 0?"rc-input":w,z=t.disabled,Me=t.htmlSize,Pe=t.className,X=t.maxLength,Y=t.suffix,De=t.showCount,oe=t.count,T=t.type,se=T===void 0?"text":T,ue=t.classes,B=t.classNames,D=t.styles,E=t.onCompositionStart,G=t.onCompositionEnd,A=re()(t,Se),b=(0,c.useState)(!1),k=ae()(b,2),xe=k[0],le=k[1],de=(0,c.useRef)(!1),K=(0,c.useRef)(!1),M=(0,c.useRef)(null),q=(0,c.useRef)(null),ie=function(_){M.current&&P(M.current,_)},he=(0,Le.Z)(t.defaultValue,{value:t.value}),W=ae()(he,2),ee=W[0],ce=W[1],fe=ee==null?"":String(ee),pe=(0,c.useState)(null),ye=ae()(pe,2),N=ye[0],Re=ye[1],U=We(oe,De),F=U.max||X,ne=U.strategy(fe),Ee=!!F&&ne>F;(0,c.useImperativeHandle)(x,function(){var C;return{focus:ie,blur:function(){var R;(R=M.current)===null||R===void 0||R.blur()},setSelectionRange:function(R,me,te){var $;($=M.current)===null||$===void 0||$.setSelectionRange(R,me,te)},select:function(){var R;(R=M.current)===null||R===void 0||R.select()},input:M.current,nativeElement:((C=q.current)===null||C===void 0?void 0:C.nativeElement)||M.current}}),(0,c.useEffect)(function(){K.current&&(K.current=!1),le(function(C){return C&&z?!1:C})},[z]);var ge=function(_,R,me){var te=R;if(!de.current&&U.exceedFormatter&&U.max&&U.strategy(R)>U.max){if(te=U.exceedFormatter(R,{max:U.max}),R!==te){var $,Ue;Re([(($=M.current)===null||$===void 0?void 0:$.selectionStart)||0,((Ue=M.current)===null||Ue===void 0?void 0:Ue.selectionEnd)||0])}}else if(me.source==="compositionEnd")return;ce(te),M.current&&h(M.current,_,j,te)};(0,c.useEffect)(function(){if(N){var C;(C=M.current)===null||C===void 0||C.setSelectionRange.apply(C,_e()(N))}},[N]);var be=function(_){ge(_,_.target.value,{source:"change"})},je=function(_){de.current=!1,ge(_,_.currentTarget.value,{source:"compositionEnd"}),G==null||G(_)},H=function(_){V&&_.key==="Enter"&&!K.current&&!_.nativeEvent.isComposing&&(K.current=!0,V(_)),L==null||L(_)},ve=function(_){_.key==="Enter"&&(K.current=!1),Q==null||Q(_)},Fe=function(_){le(!0),g==null||g(_)},Ze=function(_){K.current&&(K.current=!1),le(!1),Z==null||Z(_)},Ve=function(_){ce(""),ie(),M.current&&h(M.current,_,j)},we=Ee&&"".concat(S,"-out-of-range"),ze=function(){var _=(0,Te.Z)(t,["prefixCls","onPressEnter","addonBefore","addonAfter","prefix","suffix","allowClear","defaultValue","showCount","count","classes","htmlSize","styles","classNames","onClear"]);return(0,y.jsx)("input",d()(d()({autoComplete:O},_),{},{onChange:be,onFocus:Fe,onBlur:Ze,onKeyDown:H,onKeyUp:ve,className:r()(S,f()({},"".concat(S,"-disabled"),z),B==null?void 0:B.input),style:D==null?void 0:D.input,ref:M,size:Me,type:se,onCompositionStart:function(me){de.current=!0,E==null||E(me)},onCompositionEnd:je}))},Ge=function(){var _=Number(F)>0;if(Y||U.show){var R=U.showFormatter?U.showFormatter({value:fe,count:ne,maxLength:F}):"".concat(ne).concat(_?" / ".concat(F):"");return(0,y.jsxs)(y.Fragment,{children:[U.show&&(0,y.jsx)("span",{className:r()("".concat(S,"-show-count-suffix"),f()({},"".concat(S,"-show-count-has-suffix"),!!Y),B==null?void 0:B.count),style:d()({},D==null?void 0:D.count),children:R}),Y]})}return null};return(0,y.jsx)(Ie,d()(d()({},A),{},{prefixCls:S,className:r()(Pe,we),handleReset:Ve,value:fe,focused:xe,triggerFocus:ie,suffix:Ge(),disabled:z,classes:ue,classNames:B,styles:D,ref:q,children:ze()}))}),Ke=Be,Ne=Ke},69945:function(s,n,e){"use strict";e.r(n)},45705:function(s,n,e){"use strict";e.r(n),e.d(n,{texts:function(){return u}});const u=[]},52916:function(s,n,e){"use strict";e.r(n),e.d(n,{texts:function(){return u}});const u=[]},55469:function(s,n,e){"use strict";e.r(n),e.d(n,{texts:function(){return u}});const u=[]},74344:function(s,n,e){"use strict";e.r(n),e.d(n,{texts:function(){return u}});const u=[]},11040:function(s,n,e){"use strict";e.r(n),e.d(n,{texts:function(){return u}});const u=[]},51446:function(s,n,e){"use strict";e.r(n),e.d(n,{texts:function(){return u}});const u=[{value:`import Input from 'rc-input';
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
`,paraId:4,tocIndex:5},{value:"rc-input is released under the MIT license.",paraId:5,tocIndex:6}]},86834:function(s,n){"use strict";n.Z=`.rc-input {
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
`},70042:function(s,n){"use strict";n.Z=`import Input from '@rc-component/input';
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
`},94533:function(s,n){"use strict";n.Z=`import type { ChangeEvent, FC } from 'react';
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
`},99306:function(s,n){"use strict";n.Z=`import type { FC } from 'react';
import React from 'react';
import '../../assets/index.less';
import Input from '@rc-component/input';

const Demo: FC = () => (
  <Input prefixCls="rc-input" style={{ marginLeft: 200 }} />
);

export default Demo;
`},43920:function(s,n){"use strict";n.Z=`import Input from '@rc-component/input';
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
`},5280:function(s,n){"use strict";n.Z=`import Input from '@rc-component/input';
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
`},96446:function(s,n,e){var u=e(37923);function d(p){if(Array.isArray(p))return u(p)}s.exports=d,s.exports.__esModule=!0,s.exports.default=s.exports},96936:function(s){function n(e){if(typeof Symbol!="undefined"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}s.exports=n,s.exports.__esModule=!0,s.exports.default=s.exports},88619:function(s){function n(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}s.exports=n,s.exports.__esModule=!0,s.exports.default=s.exports},13769:function(s,n,e){var u=e(48541);function d(p,f){if(p==null)return{};var l=u(p,f),a,m;if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(p);for(m=0;m<r.length;m++)a=r[m],!(f.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(p,a)&&(l[a]=p[a])}return l}s.exports=d,s.exports.__esModule=!0,s.exports.default=s.exports},48541:function(s){function n(e,u){if(e==null)return{};var d={},p=Object.keys(e),f,l;for(l=0;l<p.length;l++)f=p[l],!(u.indexOf(f)>=0)&&(d[f]=e[f]);return d}s.exports=n,s.exports.__esModule=!0,s.exports.default=s.exports},19632:function(s,n,e){var u=e(96446),d=e(96936),p=e(96263),f=e(88619);function l(a){return u(a)||d(a)||p(a)||f()}s.exports=l,s.exports.__esModule=!0,s.exports.default=s.exports}}]);
