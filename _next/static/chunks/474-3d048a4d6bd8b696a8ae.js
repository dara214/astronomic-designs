(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[474],{506:function(e,t,n){"use strict";n.d(t,{L:function(){return ue},Kq:function(){return q},AK:function(){return me},eh:function(){return X},Hf:function(){return ve},xf:function(){return ie},LK:function(){return se},zK:function(){return K},nR:function(){return ce}});var r=n(178),o=n.n(r),i=n(7294),a=n.t(i,2);Math.round(1e10*Math.random());Boolean("undefined"!==typeof window&&window.document&&window.document.createElement);var s=n(3935);"undefined"!==typeof window&&i.useLayoutEffect;new Map;new Set(["id"]),new Set(["aria-label","aria-labelledby","aria-describedby","aria-details"]);let u=new Map,c=new Set;function l(){if("undefined"===typeof window)return;let e=t=>{let n=u.get(t.target);if(n&&(n.delete(t.propertyName),0===n.size&&(t.target.removeEventListener("transitioncancel",e),u.delete(t.target)),0===u.size)){for(let e of c)e();c.clear()}};document.body.addEventListener("transitionrun",(t=>{let n=u.get(t.target);n||(n=new Set,u.set(t.target,n),t.target.addEventListener("transitioncancel",e)),n.add(t.propertyName)})),document.body.addEventListener("transitionend",e)}"undefined"!==typeof document&&("loading"!==document.readyState?l():document.addEventListener("DOMContentLoaded",l));"undefined"!==typeof window&&window.visualViewport;new Map;function f(e){return"undefined"!==typeof window&&null!=window.navigator&&e.test(window.navigator.platform)}function d(){return f(/^Mac/)}function p(e){return!(0!==e.mozInputSource||!e.isTrusted)||0===e.detail&&!e.pointerType}const h=i.createContext(null);h.displayName="PressResponderContext";let v=null,m=new Set,y=!1,g=!1;function w(e,t){for(let n of m)n(e,t)}function b(e){g=!0,function(e){return!(e.metaKey||!d()&&e.altKey||e.ctrlKey)}(e)&&(v="keyboard",w("keyboard",e))}function _(e){v="pointer","mousedown"!==e.type&&"pointerdown"!==e.type||(g=!0,w("pointer",e))}function S(e){p(e)&&(g=!0,v="virtual")}function P(e){e.target!==window&&e.target!==document&&(g||(v="virtual",w("virtual",e)),g=!1)}function k(){g=!1}function j(){if("undefined"===typeof window||y)return;let e=HTMLElement.prototype.focus;HTMLElement.prototype.focus=function(){g=!0,e.apply(this,arguments)},document.addEventListener("keydown",b,!0),document.addEventListener("keyup",b,!0),document.addEventListener("click",S,!0),window.addEventListener("focus",P,!0),window.addEventListener("blur",k,!1),"undefined"!==typeof PointerEvent?(document.addEventListener("pointerdown",_,!0),document.addEventListener("pointermove",_,!0),document.addEventListener("pointerup",_,!0)):(document.addEventListener("mousedown",_,!0),document.addEventListener("mousemove",_,!0),document.addEventListener("mouseup",_,!0)),y=!0}"undefined"!==typeof document&&("loading"!==document.readyState?j():document.addEventListener("DOMContentLoaded",j));new Set;const I=["input:not([disabled]):not([type=hidden])","select:not([disabled])","textarea:not([disabled])","button:not([disabled])","a[href]","area[href]","summary","iframe","object","embed","audio[controls]","video[controls]","[contenteditable]"];I.join(":not([hidden]),");I.push('[tabindex]:not([tabindex="-1"]):not([disabled])');I.join(':not([hidden]):not([tabindex="-1"]),');function F(){return(F=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function O(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}function E(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function C(e,t){var n;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(e){if("string"===typeof e)return E(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?E(e,t):void 0}}(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(n=e[Symbol.iterator]()).next.bind(n)}function Q(e){return null!=e}function A(e){for(var t={},n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];for(var i=0,a=r;i<a.length;i++){var s=a[i];s in e&&(t[s]=e[s])}return t}function Z(e){for(var t={},n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];for(var i=0,a=Object.keys(e);i<a.length;i++){var s=a[i];r.includes(s)||(t[s]=e[s])}return t}function x(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];if(0!==t.length)return function(e){for(var n,r=e,o=C(t);!(n=o()).done;){r=(0,n.value)(r)}return r}}var L="undefined"!==typeof window,R=Symbol("NONE"),M=L?i.useLayoutEffect:i.useEffect;function T(e,t,n){return Array.isArray(n)?i.createElement.apply(i,[e,t].concat(n)):n||"children"in t?i.createElement(e,t,n):i.createElement(e,t)}function U(e){for(var t=F({},e),n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];for(var i=0,a=r;i<a.length;i++)for(var s=a[i],u=0,c=Object.keys(s);u<c.length;u++){var l=c[u];t[l]=B(l,t[l],s[l])}return t}function V(e,t){e&&("function"===typeof e?e(t):Object.isFrozen(e)||(e.current=t))}function z(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){for(var n,r=C(t);!(n=r()).done;){V(n.value,e)}}}function B(e,t,n){return t===R||n===R?null:null==t?n:null==n?t:"className"===e?o()(t,n):"style"===e?F({},t,n):"ref"===e?z(t,n):typeof t!==typeof n?n:e.startsWith("on")&&"function"===typeof t?function(){var e;return"function"===typeof t&&(e=t.apply(void 0,arguments)),"function"===typeof n&&(e=n.apply(void 0,arguments)),e}:n}function N(e,t,n,r){var o=t.children,i=O(t,["children"]),a=W(o,null!=n&&n);return T(e,F({ref:r},i),a)}function H(e,t){var n=e.as,r=e.hasGap;return N(null!=n?n:"div",O(e,["as","hasGap"]),r,t)}var D=(0,i.forwardRef)(H),$=function(e){return(0,i.forwardRef)((function(t,n){var r=t.hasGap,o=O(t,["hasGap"]);return N(e,o,r,n)}))},q=Object.assign(D,{div:$("div"),a:$("a"),button:$("button"),h1:$("h1"),h2:$("h2"),h3:$("h3"),h4:$("h4"),h5:$("h5"),h6:$("h6"),label:$("label"),form:$("form"),section:$("section"),head:$("head"),main:$("main"),nav:$("nav")});function K(e,t,n){if(null==e)return!1;var r=e[t];return null!=r&&(!0===r?n===t:!1!==r&&(Array.isArray(r)?r.includes(n):"string"===typeof r?r===n:void 0!==r[n]&&!1!==r[n]))}function W(e,t){var n=t?"__wab_flex-container":"__wab_passthrough";return e?Array.isArray(e)?i.createElement.apply(a,["div",{className:n}].concat(e)):(0,i.createElement)("div",{className:n},e):null}function G(e,t,n,r){var o=ne(e),a=te(n,o.props);if("render"===o.type)return o.render(a,t);var s=t;"as"===o.type&&o.as&&(t===q?a.as=o.as:s=o.as);var u=a.children;o.wrapChildren&&(u=o.wrapChildren(function(e){return Array.isArray(e)?1===e.length?e[0]:i.createElement.apply(i,[i.Fragment,{}].concat(e)):e}(u))),r&&(u=W(u,!0));var c=T(s,a,u);return o.wrap&&(c=o.wrap(c)),c}var J=new Map;function X(e,t){null==t&&(t={});var n=t["data-plasmic-name"],r=t["data-plasmic-root"],o=t["data-plasmic-for-node"];delete t["data-plasmic-name"],delete t["data-plasmic-root"],delete t["data-plasmic-for-node"];for(var i=arguments.length,a=new Array(i>2?i-2:0),s=2;s<i;s++)a[s-2]=arguments[s];var u=Y.apply(void 0,[e,t].concat(a));if(n&&J.set(n,u),r){var c,l=o?null!=(c=J.get(o))?c:null:u;return J.clear(),l}return u}function Y(e,t){var n,r=t["data-plasmic-override"],o=t["data-plasmic-wrap-flex-child"],i=null!=(n=t["data-plasmic-trigger-props"])?n:[];delete t["data-plasmic-override"],delete t["data-plasmic-wrap-flex-child"],delete t["data-plasmic-trigger-props"];for(var a=arguments.length,s=new Array(a>2?a-2:0),u=2;u<a;u++)s[u-2]=arguments[u];return G(r,e,U.apply(void 0,[t,0===s.length?{}:{children:1===s.length?s[0]:s}].concat(i)),o)}var ee=Symbol("UNSET");function te(e,t){if(!t)return e;for(var n=F({},e),r=0,o=Object.keys(t);r<o.length;r++){var i=o[r],a=e[i],s=t[i];s===ee?delete n[i]:(null!=s||"className"===i||"style"===i||i.startsWith("on")&&"function"===typeof a||(s=R),n[i]=B(i,a,s))}return n}function ne(e){if(!e)return{type:"default",props:{}};if(function(e){return"string"===typeof e||"number"===typeof e||i.isValidElement(e)}(e))return{type:"default",props:{children:e}};if("object"===typeof e)return"as"in e?F({},e,{props:e.props||{},type:"as"}):"render"in e?F({},e,{type:"render"}):"props"in e?F({},e,{props:e.props||{},type:"default"}):(t=Object.keys(e),n=["wrap","wrapChildren"],t.every((function(e){return n.includes(e)}))?F({},e,{props:{},type:"default"}):{type:"default",props:e});if("function"===typeof e)return{type:"render",render:e};var t,n;throw new Error("Unexpected override: "+e)}function re(e,t){for(var n={},r=0,o=Array.from(new Set([].concat(Object.keys(e),Object.keys(t))));r<o.length;r++){var i=o[r];n[i]=oe(e[i],t[i])}return n}function oe(e,t){var n,r;if(!e)return t;if(!t)return e;var o=ne(e),i=ne(t),a=x.apply(void 0,[o.wrap,i.wrap].filter(Q)),s=x.apply(void 0,[o.wrapChildren,i.wrapChildren].filter(Q)),u=te(null!=(n=o.props)?n:{},i.props);if("render"===i.type)return{render:i.render,props:u,wrap:a,wrapChildren:s};if("render"===o.type)return{render:o.render,props:u,wrap:a,wrapChildren:s};var c=null!=(r="as"===i.type?i.as:void 0)?r:"as"===o.type?o.as:void 0;return F({props:u,wrap:a,wrapChildren:s},c?{as:c}:{})}function ie(e,t){var n,r,o,i,a,s,u,c,l=t.name,f=t.descendantNames,d=t.internalVariantPropNames,p=t.internalArgPropNames,h=["variants","args","overrides"],v=(i=Z.apply(void 0,[A.apply(void 0,[e].concat(d))].concat(h)),a=null!=(n=e.variants)?n:{},F({},i,a)),m=(s=Z.apply(void 0,[A.apply(void 0,[e].concat(p))].concat(h)),u=null!=(r=e.args)?r:{},F({},s,u)),y=re(Z.apply(void 0,[A.apply(void 0,[e].concat(f))].concat(p,d,h)),null!=(o=e.overrides)?o:{}),g=Z.apply(void 0,[e,"variants","args","overrides"].concat(f,d,p));Object.keys(g).length>0&&(y=re(y,((c={})[l]={props:g},c)));return{variants:v,args:m,overrides:y}}var ae={};function se(e){return Object.entries(e).filter((function(e){var t=e[1];return"PLEASE_RENDER_INSIDE_PROVIDER"===t})).forEach((function(t){var n=t[0];e[n]=void 0,ae[n]})),e}function ue(e){if("nextjs"===e.platform&&e.href){var t=["href","replace","scroll","shallow","passHref","prefetch","locale"];return i.createElement(e.component,A.apply(void 0,[e].concat(t)),i.createElement("a",Object.assign({},Z.apply(void 0,[e,"component","platform"].concat(t)))))}return"gatsby"===e.platform&&(n=e.href,/^\/(?!\/)/.test(n))?i.createElement(e.component,F({},Z(e,"component","platform","href"),{to:e.href})):i.createElement("a",Object.assign({},Z(e,"component","platform")));var n}function ce(e){var t=e.as,n=e.defaultContents,r=e.value,o=O(e,["as","defaultContents","value"]),a=void 0===r?n:r;if(!a||Array.isArray(a)&&0===a.length)return null;var s=le(a);return s&&(a=(0,i.createElement)("div",{className:"__wab_slot-string-wrapper"},s)),0===Object.keys(o).filter((function(e){return!!o[e]})).length?(0,i.createElement)(i.Fragment,null,a):(0,i.createElement)(t||"div",U({className:"__wab_slot"},o),a)}function le(e){return(0,i.isValidElement)(e)&&e.type===i.Fragment?le(e.props.children):"string"===typeof e?e:Array.isArray(e)&&1===e.length&&"string"===typeof e[0]?e[0]:void 0}var fe=[],de={};function pe(){return L?Object.entries(de).filter((function(e){var t=e[1];return window.matchMedia(t).matches})).map((function(e){return e[0]})):[]}var he=void 0;function ve(e,t){return Object.assign(de,t),he=void 0,function(){var t=(0,i.useState)()[1],n=(0,i.useRef)(he||[]);return M((function(){var e=function(){he&&n.current.join("")!==he.join("")&&(n.current=he,t({}))};return fe.push(e),void 0===he&&(he=pe()),e(),function(){fe.splice(fe.indexOf(e),1)}}),[]),e?he||[]:he?he[he.length-1]:void 0}}L&&window.addEventListener("resize",(function(){var e=pe();he&&e.join("")===he.join("")||(he=e,s.unstable_batchedUpdates((function(){return fe.forEach((function(e){return e()}))})))}));var me=o()},178:function(e,t){var n;!function(){"use strict";var r={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var i=typeof n;if("string"===i||"number"===i)e.push(n);else if(Array.isArray(n)){if(n.length){var a=o.apply(null,n);a&&e.push(a)}}else if("object"===i)if(n.toString===Object.prototype.toString)for(var s in n)r.call(n,s)&&n[s]&&e.push(s);else e.push(n.toString())}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(n=function(){return o}.apply(t,[]))||(e.exports=n)}()},3646:function(e,t,n){var r=n(7228);e.exports=function(e){if(Array.isArray(e))return r(e)}},9713:function(e){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},7375:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}n.d(t,{Z:function(){return r}})},18:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function o(e){return function(e){if(Array.isArray(e))return r(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(e){if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.d(t,{Z:function(){return o}})},6860:function(e){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},8206:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},319:function(e,t,n){var r=n(3646),o=n(6860),i=n(379),a=n(8206);e.exports=function(e){return r(e)||o(e)||i(e)||a()}},110:function(e,t,n){"use strict";n.d(t,{ih:function(){return $},ZP:function(){return W}});var r=n(7294),o=(n(506),n(139)),i=n(4981),a=n(7976),s=n(1758),u=n(5560),c=n(9443),l=n(2303),f=n(7098),d=n(5348),p=n(6600),h=n(1073),v=n(8975),m=n(586),y=n(7211),g=n(3477),w=n(292),b=n(8785),_=n(7068),S=n(1224),P=n(3537),k=n(9116),j=n(8251),I=n(5907),F=n(2918),O=n(534),E=n(2147),C=n(235),Q=n(1949),A=n(3749),Z=n(2179),x=n(5232),L=n(2429),R=n(6073),M=n(6314),T=n(9800),U=n(4364),V=n(8146);const z={Home:o.ZP,Header:i.ZP,Footer:a.ZP,Section:s.ZP,FeatureCard:u.ZP,TopSection:c.ZP,HomeCta:l.ZP,IconLink:f.ZP,LinkButton:d.ZP,Testimonial:p.ZP,Avatar:h.ZP,Pricing:v.ZP,BaseCard:m.ZP,Plan:y.ZP,Bullet:g.ZP,Faq:w.ZP,Features:b.ZP,TwitterIconIcon:_.Z,GithubIconIcon:S.Z,FacebookIconIcon:P.Z,FacebookLogoIcon:k.Z,LogoIcon:j.Z,SphereIcon:I.Z,QuoteDashesIcon:F.Z,TinderLogoIcon:O.Z,AirbnbLogoIcon:E.Z,HubspotLogoIcon:C.Z,AmazonLogoIcon:Q.Z,SwapIcon:A.Z,SlotIcon:Z.Z,CycleIcon:x.Z,HammerIcon:L.Z,PencilIcon:R.Z,LightningIcon:M.Z,RightArrowIcon:T.Z,Done24Pxsvg2Icon:U.Z},B={Screen:{component:V.wd,isContext:!Boolean("ScreenVariantProvider")}},N={Home:{uPotvw1sf6FgsUVg3itkQQ:o.ZP},Header:{uPotvw1sf6FgsUVg3itkQQ:i.ZP},Footer:{uPotvw1sf6FgsUVg3itkQQ:a.ZP},Section:{uPotvw1sf6FgsUVg3itkQQ:s.ZP},FeatureCard:{uPotvw1sf6FgsUVg3itkQQ:u.ZP},TopSection:{uPotvw1sf6FgsUVg3itkQQ:c.ZP},HomeCta:{uPotvw1sf6FgsUVg3itkQQ:l.ZP},IconLink:{uPotvw1sf6FgsUVg3itkQQ:f.ZP},LinkButton:{uPotvw1sf6FgsUVg3itkQQ:d.ZP},Testimonial:{uPotvw1sf6FgsUVg3itkQQ:p.ZP},Avatar:{uPotvw1sf6FgsUVg3itkQQ:h.ZP},Pricing:{uPotvw1sf6FgsUVg3itkQQ:v.ZP},BaseCard:{uPotvw1sf6FgsUVg3itkQQ:m.ZP},Plan:{uPotvw1sf6FgsUVg3itkQQ:y.ZP},Bullet:{uPotvw1sf6FgsUVg3itkQQ:g.ZP},Faq:{uPotvw1sf6FgsUVg3itkQQ:w.ZP},Features:{uPotvw1sf6FgsUVg3itkQQ:b.ZP},TwitterIconIcon:{uPotvw1sf6FgsUVg3itkQQ:_.Z},GithubIconIcon:{uPotvw1sf6FgsUVg3itkQQ:S.Z},FacebookIconIcon:{uPotvw1sf6FgsUVg3itkQQ:P.Z},FacebookLogoIcon:{uPotvw1sf6FgsUVg3itkQQ:k.Z},LogoIcon:{uPotvw1sf6FgsUVg3itkQQ:j.Z},SphereIcon:{uPotvw1sf6FgsUVg3itkQQ:I.Z},QuoteDashesIcon:{uPotvw1sf6FgsUVg3itkQQ:F.Z},TinderLogoIcon:{uPotvw1sf6FgsUVg3itkQQ:O.Z},AirbnbLogoIcon:{uPotvw1sf6FgsUVg3itkQQ:E.Z},HubspotLogoIcon:{uPotvw1sf6FgsUVg3itkQQ:C.Z},AmazonLogoIcon:{uPotvw1sf6FgsUVg3itkQQ:Q.Z},SwapIcon:{uPotvw1sf6FgsUVg3itkQQ:A.Z},SlotIcon:{uPotvw1sf6FgsUVg3itkQQ:Z.Z},CycleIcon:{uPotvw1sf6FgsUVg3itkQQ:x.Z},HammerIcon:{uPotvw1sf6FgsUVg3itkQQ:L.Z},PencilIcon:{uPotvw1sf6FgsUVg3itkQQ:R.Z},LightningIcon:{uPotvw1sf6FgsUVg3itkQQ:M.Z},RightArrowIcon:{uPotvw1sf6FgsUVg3itkQQ:T.Z},Done24Pxsvg2Icon:{uPotvw1sf6FgsUVg3itkQQ:U.Z}},H={Screen:{uPotvw1sf6FgsUVg3itkQQ:{component:V.wd,isContext:!Boolean(void 0)}}},D={"/":{name:"Home",projectId:"uPotvw1sf6FgsUVg3itkQQ"},"/pricing":{name:"Pricing",projectId:"uPotvw1sf6FgsUVg3itkQQ"},"/features":{name:"Features",projectId:"uPotvw1sf6FgsUVg3itkQQ"}};function $(e){return Array.isArray(e)&&(e=e.join("/")),e.startsWith("/")||(e="/"+e),D[e]}function q(e,t){if(z[t])return z[t];if(!N[t])throw new Error(`The component ${t} could not be found.`);if(!N[t][e])throw new Error(`The component ${t} requires a valid projectId. Passed: ${e}. Options: ${Object.keys(N[t])}`);return N[t][e]}function K(e,t,n){const o=Object.entries(n||{}).map((([e,n])=>{if(B[e]){const{component:t,isContext:r}=B[e];return[r?t.Provider:t,n]}if(!H[e])throw new Error(`The provider ${e} could not be found.`);if(!H[e][t])throw new Error(`The provider ${e} requires a valid projectId. Passed: ${t}. Options: ${Object.keys(H[e])}`);const{component:r,isContext:o}=H[e][t];return[o?r.Provider:r,n]}));return o.length?o.reduce(((e,[t,n])=>r.createElement(t,{value:n},e)),e):e}function W({projectId:e,component:t,componentProps:n={},providerProps:o={}}){const i=q(e,t);return K(r.createElement(i,n),e,o)}W.getPlumeType=function({projectId:e,component:t}){return q(e,t).__plumeType}},6071:function(e,t,n){"use strict";var r=n(3038),o=n(862);t.default=void 0;var i=o(n(7294)),a=n(1689),s=n(2441),u=n(5749),c={};function l(e,t,n,r){if(e&&(0,a.isLocalURL)(t)){e.prefetch(t,n,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;c[t+"%"+n+(o?"%"+o:"")]=!0}}var f=function(e){var t=!1!==e.prefetch,n=(0,s.useRouter)(),o=n&&n.asPath||"/",f=i.default.useMemo((function(){var t=(0,a.resolveHref)(o,e.href,!0),n=r(t,2),i=n[0],s=n[1];return{href:i,as:e.as?(0,a.resolveHref)(o,e.as):s||i}}),[o,e.href,e.as]),d=f.href,p=f.as,h=e.children,v=e.replace,m=e.shallow,y=e.scroll,g=e.locale;"string"===typeof h&&(h=i.default.createElement("a",null,h));var w=i.Children.only(h),b=w&&"object"===typeof w&&w.ref,_=(0,u.useIntersection)({rootMargin:"200px"}),S=r(_,2),P=S[0],k=S[1],j=i.default.useCallback((function(e){P(e),b&&("function"===typeof b?b(e):"object"===typeof b&&(b.current=e))}),[b,P]);(0,i.useEffect)((function(){var e=k&&t&&(0,a.isLocalURL)(d),r="undefined"!==typeof g?g:n&&n.locale,o=c[d+"%"+p+(r?"%"+r:"")];e&&!o&&l(n,d,p,{locale:r})}),[p,d,k,g,t,n]);var I={ref:j,onClick:function(e){w.props&&"function"===typeof w.props.onClick&&w.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,i,s,u){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,a.isLocalURL)(n))&&(e.preventDefault(),null==s&&(s=r.indexOf("#")<0),t[o?"replace":"push"](n,r,{shallow:i,locale:u,scroll:s}))}(e,n,d,p,v,m,y,g)},onMouseEnter:function(e){(0,a.isLocalURL)(d)&&(w.props&&"function"===typeof w.props.onMouseEnter&&w.props.onMouseEnter(e),l(n,d,p,{priority:!0}))}};if(e.passHref||"a"===w.type&&!("href"in w.props)){var F="undefined"!==typeof g?g:n&&n.locale,O=n&&n.isLocaleDomain&&(0,a.getDomainLocale)(p,F,n&&n.locales,n&&n.domainLocales);I.href=O||(0,a.addBasePath)((0,a.addLocale)(p,F,n&&n.defaultLocale))}return i.default.cloneElement(w,I)};t.default=f},5749:function(e,t,n){"use strict";var r=n(3038);t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!a,u=(0,o.useRef)(),c=(0,o.useState)(!1),l=r(c,2),f=l[0],d=l[1],p=(0,o.useCallback)((function(e){u.current&&(u.current(),u.current=void 0),n||f||e&&e.tagName&&(u.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=s.get(t);if(n)return n;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return s.set(t,n={id:t,observer:o,elements:r}),n}(n),o=r.id,i=r.observer,a=r.elements;return a.set(e,t),i.observe(e),function(){a.delete(e),i.unobserve(e),0===a.size&&(i.disconnect(),s.delete(o))}}(e,(function(e){return e&&d(e)}),{rootMargin:t}))}),[n,t,f]);return(0,o.useEffect)((function(){if(!a&&!f){var e=(0,i.requestIdleCallback)((function(){return d(!0)}));return function(){return(0,i.cancelIdleCallback)(e)}}}),[f]),[p,f]};var o=n(7294),i=n(8391),a="undefined"!==typeof IntersectionObserver;var s=new Map},3367:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var o=((r=n(7294))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=o},7845:function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=a,t.useAmp=function(){return a(o.default.useContext(i.AmpStateContext))};var r,o=(r=n(7294))&&r.__esModule?r:{default:r},i=n(3367);function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,o=void 0!==r&&r,i=e.hasQuery,a=void 0!==i&&i;return n||o&&a}},7947:function(e,t,n){"use strict";var r=n(9713);function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}t.__esModule=!0,t.defaultHead=d,t.default=void 0;var i,a=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=f();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var i=r?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(n,o,i):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(n(7294)),s=(i=n(617))&&i.__esModule?i:{default:i},u=n(3367),c=n(4287),l=n(7845);function f(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return f=function(){return e},e}function d(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[a.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(a.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function p(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===a.default.Fragment?e.concat(a.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var h=["name","httpEquiv","charSet","itemProp"];function v(e,t){return e.reduce((function(e,t){var n=a.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(p,[]).reverse().concat(d(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(o){var i=!0,a=!1;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){a=!0;var s=o.key.slice(o.key.indexOf("$")+1);e.has(s)?i=!1:e.add(s)}switch(o.type){case"title":case"base":t.has(o.type)?i=!1:t.add(o.type);break;case"meta":for(var u=0,c=h.length;u<c;u++){var l=h[u];if(o.props.hasOwnProperty(l))if("charSet"===l)n.has(l)?i=!1:n.add(l);else{var f=o.props[l],d=r[l]||new Set;"name"===l&&a||!d.has(f)?(d.add(f),r[l]=d):i=!1}}}return i}}()).reverse().map((function(e,n){var i=e.key||n;if(!t.inAmpMode&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some((function(t){return e.props.href.startsWith(t)}))){var s=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e.props||{});return s["data-href"]=s.href,s.href=void 0,s["data-optimized-fonts"]=!0,a.default.cloneElement(e,s)}return a.default.cloneElement(e,{key:i})}))}function m(e){var t=e.children,n=(0,a.useContext)(u.AmpStateContext),r=(0,a.useContext)(c.HeadManagerContext);return a.default.createElement(s.default,{reduceComponentsToState:v,headManager:r,inAmpMode:(0,l.isInAmpMode)(n)},t)}m.rewind=function(){};var y=m;t.default=y},617:function(e,t,n){"use strict";var r=n(319),o=n(4575),i=n(3913),a=(n(1506),n(2205)),s=n(8585),u=n(9754);function c(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=u(e);if(t){var o=u(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return s(this,n)}}t.__esModule=!0,t.default=void 0;var l=n(7294),f=function(e){a(n,e);var t=c(n);function n(e){var i;return o(this,n),(i=t.call(this,e))._hasHeadManager=void 0,i.emitChange=function(){i._hasHeadManager&&i.props.headManager.updateHead(i.props.reduceComponentsToState(r(i.props.headManager.mountedInstances),i.props))},i._hasHeadManager=i.props.headManager&&i.props.headManager.mountedInstances,i}return i(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(l.Component);t.default=f},3179:function(){},9008:function(e,t,n){e.exports=n(7947)},1664:function(e,t,n){e.exports=n(6071)},4155:function(e){var t,n,r=e.exports={};function o(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function a(e){if(t===setTimeout)return setTimeout(e,0);if((t===o||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(n){try{return t.call(null,e,0)}catch(n){return t.call(this,e,0)}}}!function(){try{t="function"===typeof setTimeout?setTimeout:o}catch(e){t=o}try{n="function"===typeof clearTimeout?clearTimeout:i}catch(e){n=i}}();var s,u=[],c=!1,l=-1;function f(){c&&s&&(c=!1,s.length?u=s.concat(u):l=-1,u.length&&d())}function d(){if(!c){var e=a(f);c=!0;for(var t=u.length;t;){for(s=u,u=[];++l<t;)s&&s[l].run();l=-1,t=u.length}s=null,c=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===i||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function p(e,t){this.fun=e,this.array=t}function h(){}r.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];u.push(new p(e,t)),1!==u.length||c||a(d)},p.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={},r.on=h,r.addListener=h,r.once=h,r.off=h,r.removeListener=h,r.removeAllListeners=h,r.emit=h,r.prependListener=h,r.prependOnceListener=h,r.listeners=function(e){return[]},r.binding=function(e){throw new Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(e){throw new Error("process.chdir is not supported")},r.umask=function(){return 0}},9887:function(e){"use strict";e.exports=function(e){for(var t=5381,n=e.length;n;)t=33*t^e.charCodeAt(--n);return t>>>0}},6044:function(e,t,n){"use strict";var r=n(4155);function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}t.__esModule=!0,t.default=void 0;var i="undefined"!==typeof r&&r.env&&!0,a=function(e){return"[object String]"===Object.prototype.toString.call(e)},s=function(){function e(e){var t=void 0===e?{}:e,n=t.name,r=void 0===n?"stylesheet":n,o=t.optimizeForSpeed,s=void 0===o?i:o,c=t.isBrowser,l=void 0===c?"undefined"!==typeof window:c;u(a(r),"`name` must be a string"),this._name=r,this._deletedRulePlaceholder="#"+r+"-deleted-rule____{}",u("boolean"===typeof s,"`optimizeForSpeed` must be a boolean"),this._optimizeForSpeed=s,this._isBrowser=l,this._serverSheet=void 0,this._tags=[],this._injected=!1,this._rulesCount=0;var f=this._isBrowser&&document.querySelector('meta[property="csp-nonce"]');this._nonce=f?f.getAttribute("content"):null}var t,n,r,s=e.prototype;return s.setOptimizeForSpeed=function(e){u("boolean"===typeof e,"`setOptimizeForSpeed` accepts a boolean"),u(0===this._rulesCount,"optimizeForSpeed cannot be when rules have already been inserted"),this.flush(),this._optimizeForSpeed=e,this.inject()},s.isOptimizeForSpeed=function(){return this._optimizeForSpeed},s.inject=function(){var e=this;if(u(!this._injected,"sheet already injected"),this._injected=!0,this._isBrowser&&this._optimizeForSpeed)return this._tags[0]=this.makeStyleTag(this._name),this._optimizeForSpeed="insertRule"in this.getSheet(),void(this._optimizeForSpeed||(i||console.warn("StyleSheet: optimizeForSpeed mode not supported falling back to standard mode."),this.flush(),this._injected=!0));this._serverSheet={cssRules:[],insertRule:function(t,n){return"number"===typeof n?e._serverSheet.cssRules[n]={cssText:t}:e._serverSheet.cssRules.push({cssText:t}),n},deleteRule:function(t){e._serverSheet.cssRules[t]=null}}},s.getSheetForTag=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]},s.getSheet=function(){return this.getSheetForTag(this._tags[this._tags.length-1])},s.insertRule=function(e,t){if(u(a(e),"`insertRule` accepts only strings"),!this._isBrowser)return"number"!==typeof t&&(t=this._serverSheet.cssRules.length),this._serverSheet.insertRule(e,t),this._rulesCount++;if(this._optimizeForSpeed){var n=this.getSheet();"number"!==typeof t&&(t=n.cssRules.length);try{n.insertRule(e,t)}catch(o){return i||console.warn("StyleSheet: illegal rule: \n\n"+e+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),-1}}else{var r=this._tags[t];this._tags.push(this.makeStyleTag(this._name,e,r))}return this._rulesCount++},s.replaceRule=function(e,t){if(this._optimizeForSpeed||!this._isBrowser){var n=this._isBrowser?this.getSheet():this._serverSheet;if(t.trim()||(t=this._deletedRulePlaceholder),!n.cssRules[e])return e;n.deleteRule(e);try{n.insertRule(t,e)}catch(o){i||console.warn("StyleSheet: illegal rule: \n\n"+t+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),n.insertRule(this._deletedRulePlaceholder,e)}}else{var r=this._tags[e];u(r,"old rule at index `"+e+"` not found"),r.textContent=t}return e},s.deleteRule=function(e){if(this._isBrowser)if(this._optimizeForSpeed)this.replaceRule(e,"");else{var t=this._tags[e];u(t,"rule at index `"+e+"` not found"),t.parentNode.removeChild(t),this._tags[e]=null}else this._serverSheet.deleteRule(e)},s.flush=function(){this._injected=!1,this._rulesCount=0,this._isBrowser?(this._tags.forEach((function(e){return e&&e.parentNode.removeChild(e)})),this._tags=[]):this._serverSheet.cssRules=[]},s.cssRules=function(){var e=this;return this._isBrowser?this._tags.reduce((function(t,n){return n?t=t.concat(Array.prototype.map.call(e.getSheetForTag(n).cssRules,(function(t){return t.cssText===e._deletedRulePlaceholder?null:t}))):t.push(null),t}),[]):this._serverSheet.cssRules},s.makeStyleTag=function(e,t,n){t&&u(a(t),"makeStyleTag acceps only strings as second parameter");var r=document.createElement("style");this._nonce&&r.setAttribute("nonce",this._nonce),r.type="text/css",r.setAttribute("data-"+e,""),t&&r.appendChild(document.createTextNode(t));var o=document.head||document.getElementsByTagName("head")[0];return n?o.insertBefore(r,n):o.appendChild(r),r},t=e,(n=[{key:"length",get:function(){return this._rulesCount}}])&&o(t.prototype,n),r&&o(t,r),e}();function u(e,t){if(!e)throw new Error("StyleSheet: "+t+".")}t.default=s},7884:function(e,t,n){"use strict";t.default=void 0;var r,o=n(7294);var i=new(((r=n(8122))&&r.__esModule?r:{default:r}).default),a=function(e){var t,n;function r(t){var n;return(n=e.call(this,t)||this).prevProps={},n}n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,r.dynamic=function(e){return e.map((function(e){var t=e[0],n=e[1];return i.computeId(t,n)})).join(" ")};var o=r.prototype;return o.shouldComponentUpdate=function(e){return this.props.id!==e.id||String(this.props.dynamic)!==String(e.dynamic)},o.componentWillUnmount=function(){i.remove(this.props)},o.render=function(){return this.shouldComponentUpdate(this.prevProps)&&(this.prevProps.id&&i.remove(this.prevProps),i.add(this.props),this.prevProps=this.props),null},r}(o.Component);t.default=a},8122:function(e,t,n){"use strict";t.__esModule=!0,t.default=void 0;var r=i(n(9887)),o=i(n(6044));function i(e){return e&&e.__esModule?e:{default:e}}var a=function(){function e(e){var t=void 0===e?{}:e,n=t.styleSheet,r=void 0===n?null:n,i=t.optimizeForSpeed,a=void 0!==i&&i,s=t.isBrowser,u=void 0===s?"undefined"!==typeof window:s;this._sheet=r||new o.default({name:"styled-jsx",optimizeForSpeed:a}),this._sheet.inject(),r&&"boolean"===typeof a&&(this._sheet.setOptimizeForSpeed(a),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._isBrowser=u,this._fromServer=void 0,this._indices={},this._instancesCounts={},this.computeId=this.createComputeId(),this.computeSelector=this.createComputeSelector()}var t=e.prototype;return t.add=function(e){var t=this;void 0===this._optimizeForSpeed&&(this._optimizeForSpeed=Array.isArray(e.children),this._sheet.setOptimizeForSpeed(this._optimizeForSpeed),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._isBrowser&&!this._fromServer&&(this._fromServer=this.selectFromServer(),this._instancesCounts=Object.keys(this._fromServer).reduce((function(e,t){return e[t]=0,e}),{}));var n=this.getIdAndRules(e),r=n.styleId,o=n.rules;if(r in this._instancesCounts)this._instancesCounts[r]+=1;else{var i=o.map((function(e){return t._sheet.insertRule(e)})).filter((function(e){return-1!==e}));this._indices[r]=i,this._instancesCounts[r]=1}},t.remove=function(e){var t=this,n=this.getIdAndRules(e).styleId;if(function(e,t){if(!e)throw new Error("StyleSheetRegistry: "+t+".")}(n in this._instancesCounts,"styleId: `"+n+"` not found"),this._instancesCounts[n]-=1,this._instancesCounts[n]<1){var r=this._fromServer&&this._fromServer[n];r?(r.parentNode.removeChild(r),delete this._fromServer[n]):(this._indices[n].forEach((function(e){return t._sheet.deleteRule(e)})),delete this._indices[n]),delete this._instancesCounts[n]}},t.update=function(e,t){this.add(t),this.remove(e)},t.flush=function(){this._sheet.flush(),this._sheet.inject(),this._fromServer=void 0,this._indices={},this._instancesCounts={},this.computeId=this.createComputeId(),this.computeSelector=this.createComputeSelector()},t.cssRules=function(){var e=this,t=this._fromServer?Object.keys(this._fromServer).map((function(t){return[t,e._fromServer[t]]})):[],n=this._sheet.cssRules();return t.concat(Object.keys(this._indices).map((function(t){return[t,e._indices[t].map((function(e){return n[e].cssText})).join(e._optimizeForSpeed?"":"\n")]})).filter((function(e){return Boolean(e[1])})))},t.createComputeId=function(){var e={};return function(t,n){if(!n)return"jsx-"+t;var o=String(n),i=t+o;return e[i]||(e[i]="jsx-"+(0,r.default)(t+"-"+o)),e[i]}},t.createComputeSelector=function(e){void 0===e&&(e=/__jsx-style-dynamic-selector/g);var t={};return function(n,r){this._isBrowser||(r=r.replace(/\/style/gi,"\\/style"));var o=n+r;return t[o]||(t[o]=r.replace(e,n)),t[o]}},t.getIdAndRules=function(e){var t=this,n=e.children,r=e.dynamic,o=e.id;if(r){var i=this.computeId(o,r);return{styleId:i,rules:Array.isArray(n)?n.map((function(e){return t.computeSelector(i,e)})):[this.computeSelector(i,n)]}}return{styleId:this.computeId(o),rules:Array.isArray(n)?n:[n]}},t.selectFromServer=function(){return Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]')).reduce((function(e,t){return e[t.id.slice(2)]=t,e}),{})},e}();t.default=a},5988:function(e,t,n){e.exports=n(7884)}}]);