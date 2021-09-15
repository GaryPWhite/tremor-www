"use strict";(self.webpackChunknew_tremor_website=self.webpackChunknew_tremor_website||[]).push([[9742],{3905:function(e,r,t){t.d(r,{Zo:function(){return u},kt:function(){return d}});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=n.createContext({}),l=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},u=function(e){var r=l(e.components);return n.createElement(s.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=l(t),d=o,f=m["".concat(s,".").concat(d)]||m[d]||p[d]||i;return t?n.createElement(f,a(a({ref:r},u),{},{components:t})):n.createElement(f,a({ref:r},u))}));function d(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=m;var c={};for(var s in r)hasOwnProperty.call(r,s)&&(c[s]=r[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var l=2;l<i;l++)a[l]=t[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},44889:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return c},metadata:function(){return s},toc:function(){return l},default:function(){return p}});var n=t(87462),o=t(63366),i=(t(67294),t(3905)),a=["components"],c={},s={unversionedId:"tremor-script/stdlib/std/range",id:"tremor-script/stdlib/std/range",isDocsHomePage:!1,title:"range",description:"The range module contains functions for common range generator operations.",source:"@site/docs/tremor-script/stdlib/std/range.md",sourceDirName:"tremor-script/stdlib/std",slug:"/tremor-script/stdlib/std/range",permalink:"/tremor-new-website/docs/tremor-script/stdlib/std/range",editUrl:"https://github.com/tremor-rs/tremor-new-website/tree/main/docs/tremor-script/stdlib/std/range.md",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"random",permalink:"/tremor-new-website/docs/tremor-script/stdlib/std/random"},next:{title:"re",permalink:"/tremor-new-website/docs/tremor-script/stdlib/std/re"}},l=[{value:"Functions",id:"functions",children:[{value:"range(a, b)",id:"rangea-b",children:[]},{value:"contains(r, n)",id:"containsr-n",children:[]}]}],u={toc:l};function p(e){var r=e.components,t=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The range module contains functions for common range generator operations."),(0,i.kt)("h2",{id:"functions"},"Functions"),(0,i.kt)("h3",{id:"rangea-b"},"range(a, b)"),(0,i.kt)("p",null,"Returns an array from a min-inclusive to b max-inclusive."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tremor"},"range::range(0, 3) == [0, 1, 2]\n")),(0,i.kt)("p",null,"Returns ",(0,i.kt)("inlineCode",{parentName:"p"},"[integer]")),(0,i.kt)("h3",{id:"containsr-n"},"contains(r, n)"),(0,i.kt)("p",null,"Checks if an element is within a range."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tremor"},"range::contains(range::range(0, 3), 2) == true\n")),(0,i.kt)("p",null,"Returns ",(0,i.kt)("inlineCode",{parentName:"p"},"[integer]")))}p.isMDXComponent=!0}}]);