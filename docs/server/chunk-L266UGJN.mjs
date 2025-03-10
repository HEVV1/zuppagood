import './polyfills.server.mjs';
import{A as de,Aa as Pt,B as st,Ba as St,C as ct,Ea as Et,Fa as xe,K as lt,O as me,U as pe,X as ge,Z as j,_ as x,ba as ft,bb as ut,ea as wt,fa as he,ga as F,gb as Ce,h as le,hb as ke,ia as ye,ja as M,ka as T,la as $,mb as Ie,pa as be,qa as ve,sa as V,t as Q,ta as G,u as fe,w as At,x as ue,xb as Ae,z as P}from"./chunk-7ADU5DQ7.mjs";function Bn(t,n,e){return(n=Un(n))in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function we(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);n&&(a=a.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),e.push.apply(e,a)}return e}function c(t){for(var n=1;n<arguments.length;n++){var e=arguments[n]!=null?arguments[n]:{};n%2?we(Object(e),!0).forEach(function(a){Bn(t,a,e[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):we(Object(e)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))})}return t}function Hn(t,n){if(typeof t!="object"||!t)return t;var e=t[Symbol.toPrimitive];if(e!==void 0){var a=e.call(t,n||"default");if(typeof a!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(t)}function Un(t){var n=Hn(t,"string");return typeof n=="symbol"?n:n+""}var Pe=()=>{},Jt={},Qe={},Ze=null,tn={mark:Pe,measure:Pe};try{typeof window<"u"&&(Jt=window),typeof document<"u"&&(Qe=document),typeof MutationObserver<"u"&&(Ze=MutationObserver),typeof performance<"u"&&(tn=performance)}catch{}var{userAgent:Se=""}=Jt.navigator||{},D=Jt,g=Qe,Ee=Ze,dt=tn,sr=!!D.document,O=!!g.documentElement&&!!g.head&&typeof g.addEventListener=="function"&&typeof g.createElement=="function",en=~Se.indexOf("MSIE")||~Se.indexOf("Trident/"),Yn=/fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,$n=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,nn={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"}},Vn={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},an=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],h="classic",bt="duotone",Gn="sharp",Xn="sharp-duotone",rn=[h,bt,Gn,Xn],Kn={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"}},qn={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"}},Jn=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}]]),Qn={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",brands:"fab"},duotone:{solid:"fad",regular:"fadr",light:"fadl",thin:"fadt"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds",regular:"fasdr",light:"fasdl",thin:"fasdt"}},Zn=["fak","fa-kit","fakd","fa-kit-duotone"],Oe={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},ta=["kit"],ea={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},na=["fak","fakd"],aa={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},_e={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},mt={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},ia=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],ra=["fak","fa-kit","fakd","fa-kit-duotone"],oa={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},sa={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"}},ca={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"]},Nt={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"}},la=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands"],Dt=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt",...ia,...la],fa=["solid","regular","light","thin","duotone","brands"],on=[1,2,3,4,5,6,7,8,9,10],ua=on.concat([11,12,13,14,15,16,17,18,19,20]),da=[...Object.keys(ca),...fa,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",mt.GROUP,mt.SWAP_OPACITY,mt.PRIMARY,mt.SECONDARY].concat(on.map(t=>"".concat(t,"x"))).concat(ua.map(t=>"w-".concat(t))),ma={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},S="___FONT_AWESOME___",zt=16,sn="fa",cn="svg-inline--fa",B="data-fa-i2svg",Lt="data-fa-pseudo-element",pa="data-fa-pseudo-element-pending",Qt="data-prefix",Zt="data-icon",Fe="fontawesome-i2svg",ga="async",ha=["HTML","HEAD","STYLE","SCRIPT"],ln=(()=>{try{return process.env.NODE_ENV==="production"}catch{return!1}})();function it(t){return new Proxy(t,{get(n,e){return e in n?n[e]:n[h]}})}var fn=c({},nn);fn[h]=c(c(c(c({},{"fa-duotone":"duotone"}),nn[h]),Oe.kit),Oe["kit-duotone"]);var ya=it(fn),Rt=c({},Qn);Rt[h]=c(c(c(c({},{duotone:"fad"}),Rt[h]),_e.kit),_e["kit-duotone"]);var Me=it(Rt),jt=c({},Nt);jt[h]=c(c({},jt[h]),aa.kit);var te=it(jt),Wt=c({},sa);Wt[h]=c(c({},Wt[h]),ea.kit);var cr=it(Wt),ba=Yn,un="fa-layers-text",va=$n,xa=c({},Kn),lr=it(xa),Ca=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Ot=Vn,ka=[...ta,...da],tt=D.FontAwesomeConfig||{};function Ia(t){var n=g.querySelector("script["+t+"]");if(n)return n.getAttribute(t)}function Aa(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}g&&typeof g.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(n=>{let[e,a]=n,i=Aa(Ia(e));i!=null&&(tt[a]=i)});var dn={styleDefault:"solid",familyDefault:h,cssPrefix:sn,replacementClass:cn,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};tt.familyPrefix&&(tt.cssPrefix=tt.familyPrefix);var q=c(c({},dn),tt);q.autoReplaceSvg||(q.observeMutations=!1);var l={};Object.keys(dn).forEach(t=>{Object.defineProperty(l,t,{enumerable:!0,set:function(n){q[t]=n,et.forEach(e=>e(l))},get:function(){return q[t]}})});Object.defineProperty(l,"familyPrefix",{enumerable:!0,set:function(t){q.cssPrefix=t,et.forEach(n=>n(l))},get:function(){return q.cssPrefix}});D.FontAwesomeConfig=l;var et=[];function wa(t){return et.push(t),()=>{et.splice(et.indexOf(t),1)}}var N=zt,I={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Pa(t){if(!t||!O)return;let n=g.createElement("style");n.setAttribute("type","text/css"),n.innerHTML=t;let e=g.head.childNodes,a=null;for(let i=e.length-1;i>-1;i--){let r=e[i],o=(r.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(a=r)}return g.head.insertBefore(n,a),t}var Sa="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function nt(){let t=12,n="";for(;t-- >0;)n+=Sa[Math.random()*62|0];return n}function J(t){let n=[];for(let e=(t||[]).length>>>0;e--;)n[e]=t[e];return n}function ee(t){return t.classList?J(t.classList):(t.getAttribute("class")||"").split(" ").filter(n=>n)}function mn(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Ea(t){return Object.keys(t||{}).reduce((n,e)=>n+"".concat(e,'="').concat(mn(t[e]),'" '),"").trim()}function vt(t){return Object.keys(t||{}).reduce((n,e)=>n+"".concat(e,": ").concat(t[e].trim(),";"),"")}function ne(t){return t.size!==I.size||t.x!==I.x||t.y!==I.y||t.rotate!==I.rotate||t.flipX||t.flipY}function Oa(t){let{transform:n,containerWidth:e,iconWidth:a}=t,i={transform:"translate(".concat(e/2," 256)")},r="translate(".concat(n.x*32,", ").concat(n.y*32,") "),o="scale(".concat(n.size/16*(n.flipX?-1:1),", ").concat(n.size/16*(n.flipY?-1:1),") "),s="rotate(".concat(n.rotate," 0 0)"),d={transform:"".concat(r," ").concat(o," ").concat(s)},f={transform:"translate(".concat(a/2*-1," -256)")};return{outer:i,inner:d,path:f}}function _a(t){let{transform:n,width:e=zt,height:a=zt,startCentered:i=!1}=t,r="";return i&&en?r+="translate(".concat(n.x/N-e/2,"em, ").concat(n.y/N-a/2,"em) "):i?r+="translate(calc(-50% + ".concat(n.x/N,"em), calc(-50% + ").concat(n.y/N,"em)) "):r+="translate(".concat(n.x/N,"em, ").concat(n.y/N,"em) "),r+="scale(".concat(n.size/N*(n.flipX?-1:1),", ").concat(n.size/N*(n.flipY?-1:1),") "),r+="rotate(".concat(n.rotate,"deg) "),r}var Fa=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-regular: normal 400 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-light: normal 300 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-thin: normal 100 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-regular: normal 400 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-light: normal 300 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-thin: normal 100 1em/1 "Font Awesome 6 Sharp Duotone";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}`;function pn(){let t=sn,n=cn,e=l.cssPrefix,a=l.replacementClass,i=Fa;if(e!==t||a!==n){let r=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),s=new RegExp("\\.".concat(n),"g");i=i.replace(r,".".concat(e,"-")).replace(o,"--".concat(e,"-")).replace(s,".".concat(a))}return i}var Te=!1;function _t(){l.autoAddCss&&!Te&&(Pa(pn()),Te=!0)}var Ma={mixout(){return{dom:{css:pn,insertCss:_t}}},hooks(){return{beforeDOMElementCreation(){_t()},beforeI2svg(){_t()}}}},E=D||{};E[S]||(E[S]={});E[S].styles||(E[S].styles={});E[S].hooks||(E[S].hooks={});E[S].shims||(E[S].shims=[]);var A=E[S],gn=[],hn=function(){g.removeEventListener("DOMContentLoaded",hn),ht=1,gn.map(t=>t())},ht=!1;O&&(ht=(g.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(g.readyState),ht||g.addEventListener("DOMContentLoaded",hn));function Ta(t){O&&(ht?setTimeout(t,0):gn.push(t))}function rt(t){let{tag:n,attributes:e={},children:a=[]}=t;return typeof t=="string"?mn(t):"<".concat(n," ").concat(Ea(e),">").concat(a.map(rt).join(""),"</").concat(n,">")}function Ne(t,n,e){if(t&&t[n]&&t[n][e])return{prefix:n,iconName:e,icon:t[n][e]}}var Na=function(n,e){return function(a,i,r,o){return n.call(e,a,i,r,o)}},Ft=function(n,e,a,i){var r=Object.keys(n),o=r.length,s=i!==void 0?Na(e,i):e,d,f,u;for(a===void 0?(d=1,u=n[r[0]]):(d=0,u=a);d<o;d++)f=r[d],u=s(u,n[f],f,n);return u};function Da(t){let n=[],e=0,a=t.length;for(;e<a;){let i=t.charCodeAt(e++);if(i>=55296&&i<=56319&&e<a){let r=t.charCodeAt(e++);(r&64512)==56320?n.push(((i&1023)<<10)+(r&1023)+65536):(n.push(i),e--)}else n.push(i)}return n}function Bt(t){let n=Da(t);return n.length===1?n[0].toString(16):null}function za(t,n){let e=t.length,a=t.charCodeAt(n),i;return a>=55296&&a<=56319&&e>n+1&&(i=t.charCodeAt(n+1),i>=56320&&i<=57343)?(a-55296)*1024+i-56320+65536:a}function De(t){return Object.keys(t).reduce((n,e)=>{let a=t[e];return!!a.icon?n[a.iconName]=a.icon:n[e]=a,n},{})}function Ht(t,n){let e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},{skipHooks:a=!1}=e,i=De(n);typeof A.hooks.addPack=="function"&&!a?A.hooks.addPack(t,De(n)):A.styles[t]=c(c({},A.styles[t]||{}),i),t==="fas"&&Ht("fa",n)}var{styles:at,shims:La}=A,yn=Object.keys(te),Ra=yn.reduce((t,n)=>(t[n]=Object.keys(te[n]),t),{}),ae=null,bn={},vn={},xn={},Cn={},kn={};function ja(t){return~ka.indexOf(t)}function Wa(t,n){let e=n.split("-"),a=e[0],i=e.slice(1).join("-");return a===t&&i!==""&&!ja(i)?i:null}var In=()=>{let t=a=>Ft(at,(i,r,o)=>(i[o]=Ft(r,a,{}),i),{});bn=t((a,i,r)=>(i[3]&&(a[i[3]]=r),i[2]&&i[2].filter(s=>typeof s=="number").forEach(s=>{a[s.toString(16)]=r}),a)),vn=t((a,i,r)=>(a[r]=r,i[2]&&i[2].filter(s=>typeof s=="string").forEach(s=>{a[s]=r}),a)),kn=t((a,i,r)=>{let o=i[2];return a[r]=r,o.forEach(s=>{a[s]=r}),a});let n="far"in at||l.autoFetchSvg,e=Ft(La,(a,i)=>{let r=i[0],o=i[1],s=i[2];return o==="far"&&!n&&(o="fas"),typeof r=="string"&&(a.names[r]={prefix:o,iconName:s}),typeof r=="number"&&(a.unicodes[r.toString(16)]={prefix:o,iconName:s}),a},{names:{},unicodes:{}});xn=e.names,Cn=e.unicodes,ae=xt(l.styleDefault,{family:l.familyDefault})};wa(t=>{ae=xt(t.styleDefault,{family:l.familyDefault})});In();function ie(t,n){return(bn[t]||{})[n]}function Ba(t,n){return(vn[t]||{})[n]}function W(t,n){return(kn[t]||{})[n]}function An(t){return xn[t]||{prefix:null,iconName:null}}function Ha(t){let n=Cn[t],e=ie("fas",t);return n||(e?{prefix:"fas",iconName:e}:null)||{prefix:null,iconName:null}}function z(){return ae}var wn=()=>({prefix:null,iconName:null,rest:[]});function Ua(t){let n=h,e=yn.reduce((a,i)=>(a[i]="".concat(l.cssPrefix,"-").concat(i),a),{});return rn.forEach(a=>{(t.includes(e[a])||t.some(i=>Ra[a].includes(i)))&&(n=a)}),n}function xt(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{family:e=h}=n,a=ya[e][t];if(e===bt&&!t)return"fad";let i=Me[e][t]||Me[e][a],r=t in A.styles?t:null;return i||r||null}function Ya(t){let n=[],e=null;return t.forEach(a=>{let i=Wa(l.cssPrefix,a);i?e=i:a&&n.push(a)}),{iconName:e,rest:n}}function ze(t){return t.sort().filter((n,e,a)=>a.indexOf(n)===e)}function Ct(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{skipLookups:e=!1}=n,a=null,i=Dt.concat(ra),r=ze(t.filter(m=>i.includes(m))),o=ze(t.filter(m=>!Dt.includes(m))),s=r.filter(m=>(a=m,!an.includes(m))),[d=null]=s,f=Ua(r),u=c(c({},Ya(o)),{},{prefix:xt(d,{family:f})});return c(c(c({},u),Xa({values:t,family:f,styles:at,config:l,canonical:u,givenPrefix:a})),$a(e,a,u))}function $a(t,n,e){let{prefix:a,iconName:i}=e;if(t||!a||!i)return{prefix:a,iconName:i};let r=n==="fa"?An(i):{},o=W(a,i);return i=r.iconName||o||i,a=r.prefix||a,a==="far"&&!at.far&&at.fas&&!l.autoFetchSvg&&(a="fas"),{prefix:a,iconName:i}}var Va=rn.filter(t=>t!==h||t!==bt),Ga=Object.keys(Nt).filter(t=>t!==h).map(t=>Object.keys(Nt[t])).flat();function Xa(t){let{values:n,family:e,canonical:a,givenPrefix:i="",styles:r={},config:o={}}=t,s=e===bt,d=n.includes("fa-duotone")||n.includes("fad"),f=o.familyDefault==="duotone",u=a.prefix==="fad"||a.prefix==="fa-duotone";if(!s&&(d||f||u)&&(a.prefix="fad"),(n.includes("fa-brands")||n.includes("fab"))&&(a.prefix="fab"),!a.prefix&&Va.includes(e)&&(Object.keys(r).find(p=>Ga.includes(p))||o.autoFetchSvg)){let p=Jn.get(e).defaultShortPrefixId;a.prefix=p,a.iconName=W(a.prefix,a.iconName)||a.iconName}return(a.prefix==="fa"||i==="fa")&&(a.prefix=z()||"fas"),a}var Ut=class{constructor(){this.definitions={}}add(){for(var n=arguments.length,e=new Array(n),a=0;a<n;a++)e[a]=arguments[a];let i=e.reduce(this._pullDefinitions,{});Object.keys(i).forEach(r=>{this.definitions[r]=c(c({},this.definitions[r]||{}),i[r]),Ht(r,i[r]);let o=te[h][r];o&&Ht(o,i[r]),In()})}reset(){this.definitions={}}_pullDefinitions(n,e){let a=e.prefix&&e.iconName&&e.icon?{0:e}:e;return Object.keys(a).map(i=>{let{prefix:r,iconName:o,icon:s}=a[i],d=s[2];n[r]||(n[r]={}),d.length>0&&d.forEach(f=>{typeof f=="string"&&(n[r][f]=s)}),n[r][o]=s}),n}},Le=[],X={},K={},Ka=Object.keys(K);function qa(t,n){let{mixoutsTo:e}=n;return Le=t,X={},Object.keys(K).forEach(a=>{Ka.indexOf(a)===-1&&delete K[a]}),Le.forEach(a=>{let i=a.mixout?a.mixout():{};if(Object.keys(i).forEach(r=>{typeof i[r]=="function"&&(e[r]=i[r]),typeof i[r]=="object"&&Object.keys(i[r]).forEach(o=>{e[r]||(e[r]={}),e[r][o]=i[r][o]})}),a.hooks){let r=a.hooks();Object.keys(r).forEach(o=>{X[o]||(X[o]=[]),X[o].push(r[o])})}a.provides&&a.provides(K)}),e}function Yt(t,n){for(var e=arguments.length,a=new Array(e>2?e-2:0),i=2;i<e;i++)a[i-2]=arguments[i];return(X[t]||[]).forEach(o=>{n=o.apply(null,[n,...a])}),n}function H(t){for(var n=arguments.length,e=new Array(n>1?n-1:0),a=1;a<n;a++)e[a-1]=arguments[a];(X[t]||[]).forEach(r=>{r.apply(null,e)})}function L(){let t=arguments[0],n=Array.prototype.slice.call(arguments,1);return K[t]?K[t].apply(null,n):void 0}function $t(t){t.prefix==="fa"&&(t.prefix="fas");let{iconName:n}=t,e=t.prefix||z();if(n)return n=W(e,n)||n,Ne(Pn.definitions,e,n)||Ne(A.styles,e,n)}var Pn=new Ut,Ja=()=>{l.autoReplaceSvg=!1,l.observeMutations=!1,H("noAuto")},Qa={i2svg:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return O?(H("beforeI2svg",t),L("pseudoElements2svg",t),L("i2svg",t)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},{autoReplaceSvgRoot:n}=t;l.autoReplaceSvg===!1&&(l.autoReplaceSvg=!0),l.observeMutations=!0,Ta(()=>{ti({autoReplaceSvgRoot:n}),H("watch",t)})}},Za={icon:t=>{if(t===null)return null;if(typeof t=="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:W(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){let n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],e=xt(t[0]);return{prefix:e,iconName:W(e,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(l.cssPrefix,"-"))>-1||t.match(ba))){let n=Ct(t.split(" "),{skipLookups:!0});return{prefix:n.prefix||z(),iconName:W(n.prefix,n.iconName)||n.iconName}}if(typeof t=="string"){let n=z();return{prefix:n,iconName:W(n,t)||t}}}},v={noAuto:Ja,config:l,dom:Qa,parse:Za,library:Pn,findIconDefinition:$t,toHtml:rt},ti=function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},{autoReplaceSvgRoot:n=g}=t;(Object.keys(A.styles).length>0||l.autoFetchSvg)&&O&&l.autoReplaceSvg&&v.dom.i2svg({node:n})};function kt(t,n){return Object.defineProperty(t,"abstract",{get:n}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(e=>rt(e))}}),Object.defineProperty(t,"node",{get:function(){if(!O)return;let e=g.createElement("div");return e.innerHTML=t.html,e.children}}),t}function ei(t){let{children:n,main:e,mask:a,attributes:i,styles:r,transform:o}=t;if(ne(o)&&e.found&&!a.found){let{width:s,height:d}=e,f={x:s/d/2,y:.5};i.style=vt(c(c({},r),{},{"transform-origin":"".concat(f.x+o.x/16,"em ").concat(f.y+o.y/16,"em")}))}return[{tag:"svg",attributes:i,children:n}]}function ni(t){let{prefix:n,iconName:e,children:a,attributes:i,symbol:r}=t,o=r===!0?"".concat(n,"-").concat(l.cssPrefix,"-").concat(e):r;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:c(c({},i),{},{id:o}),children:a}]}]}function re(t){let{icons:{main:n,mask:e},prefix:a,iconName:i,transform:r,symbol:o,title:s,maskId:d,titleId:f,extra:u,watchable:m=!1}=t,{width:p,height:y}=e.found?e:n,_=na.includes(a),R=[l.replacementClass,i?"".concat(l.cssPrefix,"-").concat(i):""].filter(Y=>u.classes.indexOf(Y)===-1).filter(Y=>Y!==""||!!Y).concat(u.classes).join(" "),C={children:[],attributes:c(c({},u.attributes),{},{"data-prefix":a,"data-icon":i,class:R,role:u.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(p," ").concat(y)})},w=_&&!~u.classes.indexOf("fa-fw")?{width:"".concat(p/y*16*.0625,"em")}:{};m&&(C.attributes[B]=""),s&&(C.children.push({tag:"title",attributes:{id:C.attributes["aria-labelledby"]||"title-".concat(f||nt())},children:[s]}),delete C.attributes.title);let b=c(c({},C),{},{prefix:a,iconName:i,main:n,mask:e,maskId:d,transform:r,symbol:o,styles:c(c({},w),u.styles)}),{children:k,attributes:U}=e.found&&n.found?L("generateAbstractMask",b)||{children:[],attributes:{}}:L("generateAbstractIcon",b)||{children:[],attributes:{}};return b.children=k,b.attributes=U,o?ni(b):ei(b)}function Re(t){let{content:n,width:e,height:a,transform:i,title:r,extra:o,watchable:s=!1}=t,d=c(c(c({},o.attributes),r?{title:r}:{}),{},{class:o.classes.join(" ")});s&&(d[B]="");let f=c({},o.styles);ne(i)&&(f.transform=_a({transform:i,startCentered:!0,width:e,height:a}),f["-webkit-transform"]=f.transform);let u=vt(f);u.length>0&&(d.style=u);let m=[];return m.push({tag:"span",attributes:d,children:[n]}),r&&m.push({tag:"span",attributes:{class:"sr-only"},children:[r]}),m}function ai(t){let{content:n,title:e,extra:a}=t,i=c(c(c({},a.attributes),e?{title:e}:{}),{},{class:a.classes.join(" ")}),r=vt(a.styles);r.length>0&&(i.style=r);let o=[];return o.push({tag:"span",attributes:i,children:[n]}),e&&o.push({tag:"span",attributes:{class:"sr-only"},children:[e]}),o}var{styles:Mt}=A;function Vt(t){let n=t[0],e=t[1],[a]=t.slice(4),i=null;return Array.isArray(a)?i={tag:"g",attributes:{class:"".concat(l.cssPrefix,"-").concat(Ot.GROUP)},children:[{tag:"path",attributes:{class:"".concat(l.cssPrefix,"-").concat(Ot.SECONDARY),fill:"currentColor",d:a[0]}},{tag:"path",attributes:{class:"".concat(l.cssPrefix,"-").concat(Ot.PRIMARY),fill:"currentColor",d:a[1]}}]}:i={tag:"path",attributes:{fill:"currentColor",d:a}},{found:!0,width:n,height:e,icon:i}}var ii={found:!1,width:512,height:512};function ri(t,n){!ln&&!l.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(n,'" is missing.'))}function Gt(t,n){let e=n;return n==="fa"&&l.styleDefault!==null&&(n=z()),new Promise((a,i)=>{if(e==="fa"){let r=An(t)||{};t=r.iconName||t,n=r.prefix||n}if(t&&n&&Mt[n]&&Mt[n][t]){let r=Mt[n][t];return a(Vt(r))}ri(t,n),a(c(c({},ii),{},{icon:l.showMissingIcons&&t?L("missingIconAbstract")||{}:{}}))})}var je=()=>{},Xt=l.measurePerformance&&dt&&dt.mark&&dt.measure?dt:{mark:je,measure:je},Z='FA "6.7.2"',oi=t=>(Xt.mark("".concat(Z," ").concat(t," begins")),()=>Sn(t)),Sn=t=>{Xt.mark("".concat(Z," ").concat(t," ends")),Xt.measure("".concat(Z," ").concat(t),"".concat(Z," ").concat(t," begins"),"".concat(Z," ").concat(t," ends"))},oe={begin:oi,end:Sn},pt=()=>{};function We(t){return typeof(t.getAttribute?t.getAttribute(B):null)=="string"}function si(t){let n=t.getAttribute?t.getAttribute(Qt):null,e=t.getAttribute?t.getAttribute(Zt):null;return n&&e}function ci(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(l.replacementClass)}function li(){return l.autoReplaceSvg===!0?gt.replace:gt[l.autoReplaceSvg]||gt.replace}function fi(t){return g.createElementNS("http://www.w3.org/2000/svg",t)}function ui(t){return g.createElement(t)}function En(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{ceFn:e=t.tag==="svg"?fi:ui}=n;if(typeof t=="string")return g.createTextNode(t);let a=e(t.tag);return Object.keys(t.attributes||[]).forEach(function(r){a.setAttribute(r,t.attributes[r])}),(t.children||[]).forEach(function(r){a.appendChild(En(r,{ceFn:e}))}),a}function di(t){let n=" ".concat(t.outerHTML," ");return n="".concat(n,"Font Awesome fontawesome.com "),n}var gt={replace:function(t){let n=t[0];if(n.parentNode)if(t[1].forEach(e=>{n.parentNode.insertBefore(En(e),n)}),n.getAttribute(B)===null&&l.keepOriginalSource){let e=g.createComment(di(n));n.parentNode.replaceChild(e,n)}else n.remove()},nest:function(t){let n=t[0],e=t[1];if(~ee(n).indexOf(l.replacementClass))return gt.replace(t);let a=new RegExp("".concat(l.cssPrefix,"-.*"));if(delete e[0].attributes.id,e[0].attributes.class){let r=e[0].attributes.class.split(" ").reduce((o,s)=>(s===l.replacementClass||s.match(a)?o.toSvg.push(s):o.toNode.push(s),o),{toNode:[],toSvg:[]});e[0].attributes.class=r.toSvg.join(" "),r.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",r.toNode.join(" "))}let i=e.map(r=>rt(r)).join(`
`);n.setAttribute(B,""),n.innerHTML=i}};function Be(t){t()}function On(t,n){let e=typeof n=="function"?n:pt;if(t.length===0)e();else{let a=Be;l.mutateApproach===ga&&(a=D.requestAnimationFrame||Be),a(()=>{let i=li(),r=oe.begin("mutate");t.map(i),r(),e()})}}var se=!1;function _n(){se=!0}function Kt(){se=!1}var yt=null;function He(t){if(!Ee||!l.observeMutations)return;let{treeCallback:n=pt,nodeCallback:e=pt,pseudoElementsCallback:a=pt,observeMutationsRoot:i=g}=t;yt=new Ee(r=>{if(se)return;let o=z();J(r).forEach(s=>{if(s.type==="childList"&&s.addedNodes.length>0&&!We(s.addedNodes[0])&&(l.searchPseudoElements&&a(s.target),n(s.target)),s.type==="attributes"&&s.target.parentNode&&l.searchPseudoElements&&a(s.target.parentNode),s.type==="attributes"&&We(s.target)&&~Ca.indexOf(s.attributeName))if(s.attributeName==="class"&&si(s.target)){let{prefix:d,iconName:f}=Ct(ee(s.target));s.target.setAttribute(Qt,d||o),f&&s.target.setAttribute(Zt,f)}else ci(s.target)&&e(s.target)})}),O&&yt.observe(i,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function mi(){yt&&yt.disconnect()}function pi(t){let n=t.getAttribute("style"),e=[];return n&&(e=n.split(";").reduce((a,i)=>{let r=i.split(":"),o=r[0],s=r.slice(1);return o&&s.length>0&&(a[o]=s.join(":").trim()),a},{})),e}function gi(t){let n=t.getAttribute("data-prefix"),e=t.getAttribute("data-icon"),a=t.innerText!==void 0?t.innerText.trim():"",i=Ct(ee(t));return i.prefix||(i.prefix=z()),n&&e&&(i.prefix=n,i.iconName=e),i.iconName&&i.prefix||(i.prefix&&a.length>0&&(i.iconName=Ba(i.prefix,t.innerText)||ie(i.prefix,Bt(t.innerText))),!i.iconName&&l.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=t.firstChild.data)),i}function hi(t){let n=J(t.attributes).reduce((i,r)=>(i.name!=="class"&&i.name!=="style"&&(i[r.name]=r.value),i),{}),e=t.getAttribute("title"),a=t.getAttribute("data-fa-title-id");return l.autoA11y&&(e?n["aria-labelledby"]="".concat(l.replacementClass,"-title-").concat(a||nt()):(n["aria-hidden"]="true",n.focusable="false")),n}function yi(){return{iconName:null,title:null,titleId:null,prefix:null,transform:I,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Ue(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},{iconName:e,prefix:a,rest:i}=gi(t),r=hi(t),o=Yt("parseNodeAttributes",{},t),s=n.styleParser?pi(t):[];return c({iconName:e,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:a,transform:I,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:s,attributes:r}},o)}var{styles:bi}=A;function Fn(t){let n=l.autoReplaceSvg==="nest"?Ue(t,{styleParser:!1}):Ue(t);return~n.extra.classes.indexOf(un)?L("generateLayersText",t,n):L("generateSvgReplacementMutation",t,n)}function vi(){return[...Zn,...Dt]}function Ye(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!O)return Promise.resolve();let e=g.documentElement.classList,a=u=>e.add("".concat(Fe,"-").concat(u)),i=u=>e.remove("".concat(Fe,"-").concat(u)),r=l.autoFetchSvg?vi():an.concat(Object.keys(bi));r.includes("fa")||r.push("fa");let o=[".".concat(un,":not([").concat(B,"])")].concat(r.map(u=>".".concat(u,":not([").concat(B,"])"))).join(", ");if(o.length===0)return Promise.resolve();let s=[];try{s=J(t.querySelectorAll(o))}catch{}if(s.length>0)a("pending"),i("complete");else return Promise.resolve();let d=oe.begin("onTree"),f=s.reduce((u,m)=>{try{let p=Fn(m);p&&u.push(p)}catch(p){ln||p.name==="MissingIcon"&&console.error(p)}return u},[]);return new Promise((u,m)=>{Promise.all(f).then(p=>{On(p,()=>{a("active"),a("complete"),i("pending"),typeof n=="function"&&n(),d(),u()})}).catch(p=>{d(),m(p)})})}function xi(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Fn(t).then(e=>{e&&On([e],n)})}function Ci(t){return function(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=(n||{}).icon?n:$t(n||{}),{mask:i}=e;return i&&(i=(i||{}).icon?i:$t(i||{})),t(a,c(c({},e),{},{mask:i}))}}var ki=function(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{transform:e=I,symbol:a=!1,mask:i=null,maskId:r=null,title:o=null,titleId:s=null,classes:d=[],attributes:f={},styles:u={}}=n;if(!t)return;let{prefix:m,iconName:p,icon:y}=t;return kt(c({type:"icon"},t),()=>(H("beforeDOMElementCreation",{iconDefinition:t,params:n}),l.autoA11y&&(o?f["aria-labelledby"]="".concat(l.replacementClass,"-title-").concat(s||nt()):(f["aria-hidden"]="true",f.focusable="false")),re({icons:{main:Vt(y),mask:i?Vt(i.icon):{found:!1,width:null,height:null,icon:{}}},prefix:m,iconName:p,transform:c(c({},I),e),symbol:a,title:o,maskId:r,titleId:s,extra:{attributes:f,styles:u,classes:d}})))},Ii={mixout(){return{icon:Ci(ki)}},hooks(){return{mutationObserverCallbacks(t){return t.treeCallback=Ye,t.nodeCallback=xi,t}}},provides(t){t.i2svg=function(n){let{node:e=g,callback:a=()=>{}}=n;return Ye(e,a)},t.generateSvgReplacementMutation=function(n,e){let{iconName:a,title:i,titleId:r,prefix:o,transform:s,symbol:d,mask:f,maskId:u,extra:m}=e;return new Promise((p,y)=>{Promise.all([Gt(a,o),f.iconName?Gt(f.iconName,f.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(_=>{let[R,C]=_;p([n,re({icons:{main:R,mask:C},prefix:o,iconName:a,transform:s,symbol:d,maskId:u,title:i,titleId:r,extra:m,watchable:!0})])}).catch(y)})},t.generateAbstractIcon=function(n){let{children:e,attributes:a,main:i,transform:r,styles:o}=n,s=vt(o);s.length>0&&(a.style=s);let d;return ne(r)&&(d=L("generateAbstractTransformGrouping",{main:i,transform:r,containerWidth:i.width,iconWidth:i.width})),e.push(d||i.icon),{children:e,attributes:a}}}},Ai={mixout(){return{layer(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{classes:e=[]}=n;return kt({type:"layer"},()=>{H("beforeDOMElementCreation",{assembler:t,params:n});let a=[];return t(i=>{Array.isArray(i)?i.map(r=>{a=a.concat(r.abstract)}):a=a.concat(i.abstract)}),[{tag:"span",attributes:{class:["".concat(l.cssPrefix,"-layers"),...e].join(" ")},children:a}]})}}}},wi={mixout(){return{counter(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{title:e=null,classes:a=[],attributes:i={},styles:r={}}=n;return kt({type:"counter",content:t},()=>(H("beforeDOMElementCreation",{content:t,params:n}),ai({content:t.toString(),title:e,extra:{attributes:i,styles:r,classes:["".concat(l.cssPrefix,"-layers-counter"),...a]}})))}}}},Pi={mixout(){return{text(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{transform:e=I,title:a=null,classes:i=[],attributes:r={},styles:o={}}=n;return kt({type:"text",content:t},()=>(H("beforeDOMElementCreation",{content:t,params:n}),Re({content:t,transform:c(c({},I),e),title:a,extra:{attributes:r,styles:o,classes:["".concat(l.cssPrefix,"-layers-text"),...i]}})))}}},provides(t){t.generateLayersText=function(n,e){let{title:a,transform:i,extra:r}=e,o=null,s=null;if(en){let d=parseInt(getComputedStyle(n).fontSize,10),f=n.getBoundingClientRect();o=f.width/d,s=f.height/d}return l.autoA11y&&!a&&(r.attributes["aria-hidden"]="true"),Promise.resolve([n,Re({content:n.innerHTML,width:o,height:s,transform:i,title:a,extra:r,watchable:!0})])}}},Si=new RegExp('"',"ug"),$e=[1105920,1112319],Ve=c(c(c(c({},{FontAwesome:{normal:"fas",400:"fas"}}),qn),ma),oa),qt=Object.keys(Ve).reduce((t,n)=>(t[n.toLowerCase()]=Ve[n],t),{}),Ei=Object.keys(qt).reduce((t,n)=>{let e=qt[n];return t[n]=e[900]||[...Object.entries(e)][0][1],t},{});function Oi(t){let n=t.replace(Si,""),e=za(n,0),a=e>=$e[0]&&e<=$e[1],i=n.length===2?n[0]===n[1]:!1;return{value:Bt(i?n[0]:n),isSecondary:a||i}}function _i(t,n){let e=t.replace(/^['"]|['"]$/g,"").toLowerCase(),a=parseInt(n),i=isNaN(a)?"normal":a;return(qt[e]||{})[i]||Ei[e]}function Ge(t,n){let e="".concat(pa).concat(n.replace(":","-"));return new Promise((a,i)=>{if(t.getAttribute(e)!==null)return a();let o=J(t.children).filter(p=>p.getAttribute(Lt)===n)[0],s=D.getComputedStyle(t,n),d=s.getPropertyValue("font-family"),f=d.match(va),u=s.getPropertyValue("font-weight"),m=s.getPropertyValue("content");if(o&&!f)return t.removeChild(o),a();if(f&&m!=="none"&&m!==""){let p=s.getPropertyValue("content"),y=_i(d,u),{value:_,isSecondary:R}=Oi(p),C=f[0].startsWith("FontAwesome"),w=ie(y,_),b=w;if(C){let k=Ha(_);k.iconName&&k.prefix&&(w=k.iconName,y=k.prefix)}if(w&&!R&&(!o||o.getAttribute(Qt)!==y||o.getAttribute(Zt)!==b)){t.setAttribute(e,b),o&&t.removeChild(o);let k=yi(),{extra:U}=k;U.attributes[Lt]=n,Gt(w,y).then(Y=>{let jn=re(c(c({},k),{},{icons:{main:Y,mask:wn()},prefix:y,iconName:b,extra:U,watchable:!0})),It=g.createElementNS("http://www.w3.org/2000/svg","svg");n==="::before"?t.insertBefore(It,t.firstChild):t.appendChild(It),It.outerHTML=jn.map(Wn=>rt(Wn)).join(`
`),t.removeAttribute(e),a()}).catch(i)}else a()}else a()})}function Fi(t){return Promise.all([Ge(t,"::before"),Ge(t,"::after")])}function Mi(t){return t.parentNode!==document.head&&!~ha.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(Lt)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function Xe(t){if(O)return new Promise((n,e)=>{let a=J(t.querySelectorAll("*")).filter(Mi).map(Fi),i=oe.begin("searchPseudoElements");_n(),Promise.all(a).then(()=>{i(),Kt(),n()}).catch(()=>{i(),Kt(),e()})})}var Ti={hooks(){return{mutationObserverCallbacks(t){return t.pseudoElementsCallback=Xe,t}}},provides(t){t.pseudoElements2svg=function(n){let{node:e=g}=n;l.searchPseudoElements&&Xe(e)}}},Ke=!1,Ni={mixout(){return{dom:{unwatch(){_n(),Ke=!0}}}},hooks(){return{bootstrap(){He(Yt("mutationObserverCallbacks",{}))},noAuto(){mi()},watch(t){let{observeMutationsRoot:n}=t;Ke?Kt():He(Yt("mutationObserverCallbacks",{observeMutationsRoot:n}))}}}},qe=t=>{let n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce((e,a)=>{let i=a.toLowerCase().split("-"),r=i[0],o=i.slice(1).join("-");if(r&&o==="h")return e.flipX=!0,e;if(r&&o==="v")return e.flipY=!0,e;if(o=parseFloat(o),isNaN(o))return e;switch(r){case"grow":e.size=e.size+o;break;case"shrink":e.size=e.size-o;break;case"left":e.x=e.x-o;break;case"right":e.x=e.x+o;break;case"up":e.y=e.y-o;break;case"down":e.y=e.y+o;break;case"rotate":e.rotate=e.rotate+o;break}return e},n)},Di={mixout(){return{parse:{transform:t=>qe(t)}}},hooks(){return{parseNodeAttributes(t,n){let e=n.getAttribute("data-fa-transform");return e&&(t.transform=qe(e)),t}}},provides(t){t.generateAbstractTransformGrouping=function(n){let{main:e,transform:a,containerWidth:i,iconWidth:r}=n,o={transform:"translate(".concat(i/2," 256)")},s="translate(".concat(a.x*32,", ").concat(a.y*32,") "),d="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),f="rotate(".concat(a.rotate," 0 0)"),u={transform:"".concat(s," ").concat(d," ").concat(f)},m={transform:"translate(".concat(r/2*-1," -256)")},p={outer:o,inner:u,path:m};return{tag:"g",attributes:c({},p.outer),children:[{tag:"g",attributes:c({},p.inner),children:[{tag:e.icon.tag,children:e.icon.children,attributes:c(c({},e.icon.attributes),p.path)}]}]}}}},Tt={x:0,y:0,width:"100%",height:"100%"};function Je(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||n)&&(t.attributes.fill="black"),t}function zi(t){return t.tag==="g"?t.children:[t]}var Li={hooks(){return{parseNodeAttributes(t,n){let e=n.getAttribute("data-fa-mask"),a=e?Ct(e.split(" ").map(i=>i.trim())):wn();return a.prefix||(a.prefix=z()),t.mask=a,t.maskId=n.getAttribute("data-fa-mask-id"),t}}},provides(t){t.generateAbstractMask=function(n){let{children:e,attributes:a,main:i,mask:r,maskId:o,transform:s}=n,{width:d,icon:f}=i,{width:u,icon:m}=r,p=Oa({transform:s,containerWidth:u,iconWidth:d}),y={tag:"rect",attributes:c(c({},Tt),{},{fill:"white"})},_=f.children?{children:f.children.map(Je)}:{},R={tag:"g",attributes:c({},p.inner),children:[Je(c({tag:f.tag,attributes:c(c({},f.attributes),p.path)},_))]},C={tag:"g",attributes:c({},p.outer),children:[R]},w="mask-".concat(o||nt()),b="clip-".concat(o||nt()),k={tag:"mask",attributes:c(c({},Tt),{},{id:w,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[y,C]},U={tag:"defs",children:[{tag:"clipPath",attributes:{id:b},children:zi(m)},k]};return e.push(U,{tag:"rect",attributes:c({fill:"currentColor","clip-path":"url(#".concat(b,")"),mask:"url(#".concat(w,")")},Tt)}),{children:e,attributes:a}}}},Ri={provides(t){let n=!1;D.matchMedia&&(n=D.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){let e=[],a={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};e.push({tag:"path",attributes:c(c({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});let r=c(c({},i),{},{attributeName:"opacity"}),o={tag:"circle",attributes:c(c({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||o.children.push({tag:"animate",attributes:c(c({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:c(c({},r),{},{values:"1;0;1;1;0;1;"})}),e.push(o),e.push({tag:"path",attributes:c(c({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:c(c({},r),{},{values:"1;0;0;0;0;1;"})}]}),n||e.push({tag:"path",attributes:c(c({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:c(c({},r),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:e}}}},ji={hooks(){return{parseNodeAttributes(t,n){let e=n.getAttribute("data-fa-symbol"),a=e===null?!1:e===""?!0:e;return t.symbol=a,t}}}},Wi=[Ma,Ii,Ai,wi,Pi,Ti,Ni,Di,Li,Ri,ji];qa(Wi,{mixoutsTo:v});var fr=v.noAuto,Mn=v.config,ur=v.library,Tn=v.dom,Nn=v.parse,dr=v.findIconDefinition,mr=v.toHtml,Dn=v.icon,pr=v.layer,Bi=v.text,Hi=v.counter;var Ui=["*"],Yi=t=>{throw new Error(`Could not find icon with iconName=${t.iconName} and prefix=${t.prefix} in the icon library.`)},$i=()=>{throw new Error("Property `icon` is required for `fa-icon`/`fa-duotone-icon` components.")},Vi=t=>{let n={[`fa-${t.animation}`]:t.animation!=null&&!t.animation.startsWith("spin"),"fa-spin":t.animation==="spin"||t.animation==="spin-reverse","fa-spin-pulse":t.animation==="spin-pulse"||t.animation==="spin-pulse-reverse","fa-spin-reverse":t.animation==="spin-reverse"||t.animation==="spin-pulse-reverse","fa-pulse":t.animation==="spin-pulse"||t.animation==="spin-pulse-reverse","fa-fw":t.fixedWidth,"fa-border":t.border,"fa-inverse":t.inverse,"fa-layers-counter":t.counter,"fa-flip-horizontal":t.flip==="horizontal"||t.flip==="both","fa-flip-vertical":t.flip==="vertical"||t.flip==="both",[`fa-${t.size}`]:t.size!==null,[`fa-rotate-${t.rotate}`]:t.rotate!==null,[`fa-pull-${t.pull}`]:t.pull!==null,[`fa-stack-${t.stackItemSize}`]:t.stackItemSize!=null};return Object.keys(n).map(e=>n[e]?e:null).filter(e=>e)},ce=new WeakSet,zn="fa-auto-css";function Gi(t,n){if(!n.autoAddCss||ce.has(t))return;if(t.getElementById(zn)!=null){n.autoAddCss=!1,ce.add(t);return}let e=t.createElement("style");e.setAttribute("type","text/css"),e.setAttribute("id",zn),e.innerHTML=Tn.css();let a=t.head.childNodes,i=null;for(let r=a.length-1;r>-1;r--){let o=a[r],s=o.nodeName.toUpperCase();["STYLE","LINK"].indexOf(s)>-1&&(i=o)}t.head.insertBefore(e,i),n.autoAddCss=!1,ce.add(t)}var Xi=t=>t.prefix!==void 0&&t.iconName!==void 0,Ki=(t,n)=>Xi(t)?t:Array.isArray(t)&&t.length===2?{prefix:t[0],iconName:t[1]}:{prefix:n,iconName:t},qi=(()=>{class t{constructor(){this.defaultPrefix="fas",this.fallbackIcon=null,this._autoAddCss=!0}set autoAddCss(e){Mn.autoAddCss=e,this._autoAddCss=e}get autoAddCss(){return this._autoAddCss}static{this.\u0275fac=function(a){return new(a||t)}}static{this.\u0275prov=Q({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})(),Ji=(()=>{class t{constructor(){this.definitions={}}addIcons(...e){for(let a of e){a.prefix in this.definitions||(this.definitions[a.prefix]={}),this.definitions[a.prefix][a.iconName]=a;for(let i of a.icon[2])typeof i=="string"&&(this.definitions[a.prefix][i]=a)}}addIconPacks(...e){for(let a of e){let i=Object.keys(a).map(r=>a[r]);this.addIcons(...i)}}getIconDefinition(e,a){return e in this.definitions&&a in this.definitions[e]?this.definitions[e][a]:null}static{this.\u0275fac=function(a){return new(a||t)}}static{this.\u0275prov=Q({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})(),Qi=(()=>{class t{constructor(){this.stackItemSize="1x"}ngOnChanges(e){if("size"in e)throw new Error('fa-icon is not allowed to customize size when used inside fa-stack. Set size on the enclosing fa-stack instead: <fa-stack size="4x">...</fa-stack>.')}static{this.\u0275fac=function(a){return new(a||t)}}static{this.\u0275dir=st({type:t,selectors:[["fa-icon","stackItemSize",""],["fa-duotone-icon","stackItemSize",""]],inputs:{stackItemSize:"stackItemSize",size:"size"},standalone:!0,features:[ct]})}}return t})(),Zi=(()=>{class t{constructor(e,a){this.renderer=e,this.elementRef=a}ngOnInit(){this.renderer.addClass(this.elementRef.nativeElement,"fa-stack")}ngOnChanges(e){"size"in e&&(e.size.currentValue!=null&&this.renderer.addClass(this.elementRef.nativeElement,`fa-${e.size.currentValue}`),e.size.previousValue!=null&&this.renderer.removeClass(this.elementRef.nativeElement,`fa-${e.size.previousValue}`))}static{this.\u0275fac=function(a){return new(a||t)(x(ft),x(lt))}}static{this.\u0275cmp=P({type:t,selectors:[["fa-stack"]],inputs:{size:"size"},standalone:!0,features:[ct,Et],ngContentSelectors:Ui,decls:1,vars:0,template:function(a,i){a&1&&(V(),G(0))},encapsulation:2})}}return t})(),Ln=(()=>{class t{constructor(e,a,i,r,o){this.sanitizer=e,this.config=a,this.iconLibrary=i,this.stackItem=r,this.document=ue(ut),o!=null&&r==null&&console.error('FontAwesome: fa-icon and fa-duotone-icon elements must specify stackItemSize attribute when wrapped into fa-stack. Example: <fa-icon stackItemSize="2x"></fa-icon>.')}ngOnChanges(e){if(this.icon==null&&this.config.fallbackIcon==null){$i();return}if(e){let a=this.findIconDefinition(this.icon??this.config.fallbackIcon);if(a!=null){let i=this.buildParams();Gi(this.document,this.config);let r=Dn(a,i);this.renderedIconHTML=this.sanitizer.bypassSecurityTrustHtml(r.html.join(`
`))}}}render(){this.ngOnChanges({})}findIconDefinition(e){let a=Ki(e,this.config.defaultPrefix);if("icon"in a)return a;let i=this.iconLibrary.getIconDefinition(a.prefix,a.iconName);return i??(Yi(a),null)}buildParams(){let e={flip:this.flip,animation:this.animation,border:this.border,inverse:this.inverse,size:this.size||null,pull:this.pull||null,rotate:this.rotate||null,fixedWidth:typeof this.fixedWidth=="boolean"?this.fixedWidth:this.config.fixedWidth,stackItemSize:this.stackItem!=null?this.stackItem.stackItemSize:null},a=typeof this.transform=="string"?Nn.transform(this.transform):this.transform;return{title:this.title,transform:a,classes:Vi(e),mask:this.mask!=null?this.findIconDefinition(this.mask):null,symbol:this.symbol,attributes:{role:this.a11yRole}}}static{this.\u0275fac=function(a){return new(a||t)(x(Ae),x(qi),x(Ji),x(Qi,8),x(Zi,8))}}static{this.\u0275cmp=P({type:t,selectors:[["fa-icon"]],hostAttrs:[1,"ng-fa-icon"],hostVars:2,hostBindings:function(a,i){a&2&&(be("innerHTML",i.renderedIconHTML,pe),he("title",i.title))},inputs:{icon:"icon",title:"title",animation:"animation",mask:"mask",flip:"flip",size:"size",pull:"pull",border:"border",inverse:"inverse",symbol:"symbol",rotate:"rotate",fixedWidth:"fixedWidth",transform:"transform",a11yRole:"a11yRole"},standalone:!0,features:[ct,Et],decls:0,vars:0,template:function(a,i){},encapsulation:2})}}return t})();var _r=(()=>{class t{static{this.\u0275fac=function(a){return new(a||t)}}static{this.\u0275mod=de({type:t})}static{this.\u0275inj=fe({})}}return t})();var er=["*"],nr=t=>({background:t});function ar(t,n){t&1&&$(0,"div",4)}function ir(t,n){t&1&&$(0,"div",5)}var Mr=(()=>{class t{isThereATopImageBorder;isThereABottomImageBorder;imgUrl;backgroundPosition;color="#000";static \u0275fac=function(a){return new(a||t)};static \u0275cmp=P({type:t,selectors:[["zpg-blog-image"]],inputs:{isThereATopImageBorder:"isThereATopImageBorder",isThereABottomImageBorder:"isThereABottomImageBorder",imgUrl:"imgUrl",backgroundPosition:"backgroundPosition"},ngContentSelectors:er,decls:5,vars:5,consts:[[1,"block-blog-image",3,"ngStyle"],[1,"blog-image__background-gradient"],["class","blog-image__top-border",4,"ngIf"],["class","blog-image__bottom-border",4,"ngIf"],[1,"blog-image__top-border"],[1,"blog-image__bottom-border"]],template:function(a,i){a&1&&(V(),M(0,"div",0),$(1,"div",1),wt(2,ar,1,0,"div",2),G(3),wt(4,ir,1,0,"div",3),T()),a&2&&(F("ngStyle",xe(3,nr,"url(/assets/images/blog-background-images/"+i.imgUrl+") no-repeat "+i.backgroundPosition)),j(2),F("ngIf",i.isThereATopImageBorder),j(2),F("ngIf",i.isThereABottomImageBorder))},dependencies:[Ce,ke],styles:[".block-blog-image[_ngcontent-%COMP%]{position:relative;display:flex;align-items:center;justify-content:center;width:100%;min-height:40rem;padding:4rem 0;background-size:cover!important}.block-blog-image[_ngcontent-%COMP%]   .blog-image__background-gradient[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100%;height:100%;background:linear-gradient(#2d3e48cc,#2d3e48)}.block-blog-image[_ngcontent-%COMP%]   .blog-image__top-border[_ngcontent-%COMP%]{display:block;width:100%;height:1.5rem;position:absolute;top:-.2rem;left:0;background:url(/assets/images/overlay-top.png)}.block-blog-image[_ngcontent-%COMP%]   .blog-image__bottom-border[_ngcontent-%COMP%]{display:block;width:100%;height:1.5rem;position:absolute;bottom:-.2rem;left:0;background:url(/assets/images/overlay-bottom.png)}"]})}return t})();var Rn=(()=>{class t{constructor(e,a){this.document=e,this.platformId=a,this.documentIsAccessible=Ie(this.platformId)}static getCookieRegExp(e){let a=e.replace(/([\[\]{}()|=;+?,.*^$])/gi,"\\$1");return new RegExp("(?:^"+a+"|;\\s*"+a+")=(.*?)(?:;|$)","g")}static safeDecodeURIComponent(e){try{return decodeURIComponent(e)}catch{return e}}check(e){return this.documentIsAccessible?(e=encodeURIComponent(e),t.getCookieRegExp(e).test(this.document.cookie)):!1}get(e){if(this.documentIsAccessible&&this.check(e)){e=encodeURIComponent(e);let i=t.getCookieRegExp(e).exec(this.document.cookie);return i[1]?t.safeDecodeURIComponent(i[1]):""}else return""}getAll(){if(!this.documentIsAccessible)return{};let e={},a=this.document;return a.cookie&&a.cookie!==""&&a.cookie.split(";").forEach(i=>{let[r,o]=i.split("=");e[t.safeDecodeURIComponent(r.replace(/^ /,""))]=t.safeDecodeURIComponent(o)}),e}set(e,a,i,r,o,s,d,f){if(!this.documentIsAccessible)return;if(typeof i=="number"||i instanceof Date||r||o||s||d){let p={expires:i,path:r,domain:o,secure:s,sameSite:d||"Lax",partitioned:f};this.set(e,a,p);return}let u=encodeURIComponent(e)+"="+encodeURIComponent(a)+";",m=i||{};if(m.expires)if(typeof m.expires=="number"){let p=new Date(new Date().getTime()+m.expires*1e3*60*60*24);u+="expires="+p.toUTCString()+";"}else u+="expires="+m.expires.toUTCString()+";";m.path&&(u+="path="+m.path+";"),m.domain&&(u+="domain="+m.domain+";"),m.secure===!1&&m.sameSite==="None"&&(m.secure=!0,console.warn(`[ngx-cookie-service] Cookie ${e} was forced with secure flag because sameSite=None.More details : https://github.com/stevermeister/ngx-cookie-service/issues/86#issuecomment-597720130`)),m.secure&&(u+="secure;"),m.sameSite||(m.sameSite="Lax"),u+="sameSite="+m.sameSite+";",m.partitioned&&(u+="Partitioned;"),this.document.cookie=u}delete(e,a,i,r,o="Lax"){if(!this.documentIsAccessible)return;let s=new Date("Thu, 01 Jan 1970 00:00:01 GMT");this.set(e,"",{expires:s,path:a,domain:i,secure:r,sameSite:o})}deleteAll(e,a,i,r="Lax"){if(!this.documentIsAccessible)return;let o=this.getAll();for(let s in o)o.hasOwnProperty(s)&&this.delete(s,e,a,i,r)}static{this.\u0275fac=function(a){return new(a||t)(At(ut),At(me))}}static{this.\u0275prov=Q({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})();var jr=(()=>{class t{renderer2;elementRef;cookieService;customClass;timingMs=0;constructor(e,a,i){this.renderer2=e,this.elementRef=a,this.cookieService=i,this.timingMs=i.get("hasBeenVisited")?this.timingMs:3100}ngAfterViewInit(){this.checkTheElementPosition()&&le(this.timingMs).subscribe(()=>{this.onWindowScroll()})}onWindowScroll(){this.checkTheElementPosition()&&this.renderer2.addClass(this.elementRef.nativeElement,this.customClass)}checkTheElementPosition(){let e=this.elementRef.nativeElement.getBoundingClientRect(),a=window.innerHeight||document.documentElement.clientHeight,i=e.bottom<0,r=e.top>a;return!(i||r)}static \u0275fac=function(a){return new(a||t)(x(ft),x(lt),x(Rn))};static \u0275dir=st({type:t,selectors:[["","appPopup",""]],hostBindings:function(a,i){a&1&&ve("scroll",function(){return i.onWindowScroll()},!1,ge)},inputs:{customClass:"customClass",timingMs:"timingMs"}})}return t})();var or=["*"],Br=(()=>{class t{type="submit";customClass="";isFormValid=!1;static \u0275fac=function(a){return new(a||t)};static \u0275cmp=P({type:t,selectors:[["zpg-button"]],inputs:{type:"type",customClass:"customClass",isFormValid:"isFormValid"},ngContentSelectors:or,decls:2,vars:4,consts:[[1,"block__button--primary",3,"disabled","type"]],template:function(a,i){a&1&&(V(),M(0,"button",0),G(1),T()),a&2&&(ye(i.customClass),F("disabled",i.isFormValid)("type",i.type))}})}return t})();var Ur=(()=>{class t{icon;title="";description="";static \u0275fac=function(a){return new(a||t)};static \u0275cmp=P({type:t,selectors:[["zpg-contact-icon"]],inputs:{icon:"icon",title:"title",description:"description"},decls:10,vars:3,consts:[[1,"block-contact-icon"],[1,"contact-icon__wrapper"],[1,"contact-icon__icon"],[3,"icon"],[1,"contact-icon__title"],[1,"t-contacts-header"],[1,"contact-icon__description"]],template:function(a,i){a&1&&(M(0,"div",0)(1,"div",1)(2,"div",2),$(3,"fa-icon",3),T(),M(4,"div",4)(5,"span",5),Pt(6),T()(),M(7,"div",6)(8,"span"),Pt(9),T()()()()),a&2&&(j(3),F("icon",i.icon),j(3),St(i.title),j(3),St(i.description))},dependencies:[Ln],styles:[".block-contact-icon[_ngcontent-%COMP%]   .contact-icon__wrapper[_ngcontent-%COMP%]{display:flex;flex-flow:column;justify-content:space-between}.block-contact-icon[_ngcontent-%COMP%]   .contact-icon__wrapper[_ngcontent-%COMP%]   .contact-icon__icon[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;text-align:center;margin-bottom:1rem}.block-contact-icon[_ngcontent-%COMP%]   .contact-icon__wrapper[_ngcontent-%COMP%]   .contact-icon__icon[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{display:inline-flex;color:#2d3e48;font-size:3.2rem}.block-contact-icon[_ngcontent-%COMP%]   .contact-icon__wrapper[_ngcontent-%COMP%]   .contact-icon__title[_ngcontent-%COMP%]{margin-bottom:.7rem;text-align:center}.block-contact-icon[_ngcontent-%COMP%]   .contact-icon__wrapper[_ngcontent-%COMP%]   .contact-icon__description[_ngcontent-%COMP%]{text-align:center}"]})}return t})();export{Ln as a,_r as b,Rn as c,Mr as d,jr as e,Br as f,Ur as g};
