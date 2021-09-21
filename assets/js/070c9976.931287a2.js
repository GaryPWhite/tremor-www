"use strict";(self.webpackChunknew_tremor_website=self.webpackChunknew_tremor_website||[]).push([[8018],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var a=r.createContext({}),u=function(e){var t=r.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(a.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=u(n),m=o,f=d["".concat(a,".").concat(m)]||d[m]||p[m]||i;return n?r.createElement(f,c(c({ref:t},l),{},{components:n})):r.createElement(f,c({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,c=new Array(i);c[0]=d;var s={};for(var a in t)hasOwnProperty.call(t,a)&&(s[a]=t[a]);s.originalType=e,s.mdxType="string"==typeof e?e:o,c[1]=s;for(var u=2;u<i;u++)c[u]=n[u];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},53906:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return a},metadata:function(){return u},toc:function(){return l},default:function(){return d}});var r=n(87462),o=n(63366),i=(n(67294),n(3905)),c=["components"],s={},a="json",u={unversionedId:"scripting/tremor-script/stdlib/std/json",id:"scripting/tremor-script/stdlib/std/json",isDocsHomePage:!1,title:"json",description:"The json module contains functions that work with son structures.",source:"@site/docs/scripting/tremor-script/stdlib/std/json.md",sourceDirName:"scripting/tremor-script/stdlib/std",slug:"/scripting/tremor-script/stdlib/std/json",permalink:"/docs/next/scripting/tremor-script/stdlib/std/json",editUrl:"https://github.com/tremor-rs/tremor-www/tree/main/docs/scripting/tremor-script/stdlib/std/json.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"integer",permalink:"/docs/next/scripting/tremor-script/stdlib/std/integer"},next:{title:"math",permalink:"/docs/next/scripting/tremor-script/stdlib/std/math"}},l=[{value:"Functions",id:"functions",children:[{value:"decode(string)",id:"decodestring",children:[]},{value:"encode(any)",id:"encodeany",children:[]},{value:"encode_pretty(any)",id:"encode_prettyany",children:[]}]}],p={toc:l};function d(e){var t=e.components,n=(0,o.Z)(e,c);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"json"},"json"),(0,i.kt)("p",null,"The json module contains functions that work with son structures."),(0,i.kt)("h2",{id:"functions"},"Functions"),(0,i.kt)("h3",{id:"decodestring"},"decode(string)"),(0,i.kt)("p",null,"Decodes a string containing a JSON structure."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tremor"},'json::decode("[1, 2, 3, 4]") => [1, 2, 3, 4]\n')),(0,i.kt)("p",null,"Returns any type"),(0,i.kt)("h3",{id:"encodeany"},"encode(any)"),(0,i.kt)("p",null,"Encodes a data structure into a json string using minimal encoding."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tremor"},'json::encode([1, 2, 3, 4]) = "[1,2,3,4]"\n')),(0,i.kt)("p",null,"Returns a ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("h3",{id:"encode_prettyany"},"encode_pretty(any)"),(0,i.kt)("p",null,"Encodes a data structure into a prettified json string."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tremor"},'json::encode_pretty([1, 2, 3, 4]) =\n"[\n1,\n2,\n3,\n4\n]"\n')),(0,i.kt)("p",null,"Returns a ",(0,i.kt)("inlineCode",{parentName:"p"},"string")))}d.isMDXComponent=!0}}]);