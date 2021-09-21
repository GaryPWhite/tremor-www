"use strict";(self.webpackChunknew_tremor_website=self.webpackChunknew_tremor_website||[]).push([[2805],{3905:function(t,e,r){r.d(e,{Zo:function(){return u},kt:function(){return m}});var n=r(67294);function i(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function a(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){i(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function c(t,e){if(null==t)return{};var r,n,i=function(t,e){if(null==t)return{};var r,n,i={},o=Object.keys(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||(i[r]=t[r]);return i}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}var l=n.createContext({}),s=function(t){var e=n.useContext(l),r=e;return t&&(r="function"==typeof t?t(e):a(a({},e),t)),r},u=function(t){var e=s(t.components);return n.createElement(l.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},f=n.forwardRef((function(t,e){var r=t.components,i=t.mdxType,o=t.originalType,l=t.parentName,u=c(t,["components","mdxType","originalType","parentName"]),f=s(r),m=i,d=f["".concat(l,".").concat(m)]||f[m]||p[m]||o;return r?n.createElement(d,a(a({ref:e},u),{},{components:r})):n.createElement(d,a({ref:e},u))}));function m(t,e){var r=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var o=r.length,a=new Array(o);a[0]=f;var c={};for(var l in e)hasOwnProperty.call(e,l)&&(c[l]=e[l]);c.originalType=t,c.mdxType="string"==typeof t?t:i,a[1]=c;for(var s=2;s<o;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},96276:function(t,e,r){r.r(e),r.d(e,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return u},default:function(){return f}});var n=r(87462),i=r(63366),o=(r(67294),r(3905)),a=["components"],c={},l="Influx",s={unversionedId:"scripting/tremor-script/extractors/influx",id:"scripting/tremor-script/extractors/influx",isDocsHomePage:!1,title:"Influx",description:"Influx extrector matches data from the string that uses the Influx Line Protocol. It will fail if the input isn't a valid string.",source:"@site/docs/scripting/tremor-script/extractors/influx.md",sourceDirName:"scripting/tremor-script/extractors",slug:"/scripting/tremor-script/extractors/influx",permalink:"/docs/next/scripting/tremor-script/extractors/influx",editUrl:"https://github.com/tremor-rs/tremor-www/tree/main/docs/scripting/tremor-script/extractors/influx.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Grok",permalink:"/docs/next/scripting/tremor-script/extractors/grok"},next:{title:"JSON",permalink:"/docs/next/scripting/tremor-script/extractors/json"}},u=[{value:"Predicate",id:"predicate",children:[]},{value:"Extraction",id:"extraction",children:[]}],p={toc:u};function f(t){var e=t.components,r=(0,i.Z)(t,a);return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"influx"},"Influx"),(0,o.kt)("p",null,"Influx extrector matches data from the string that uses the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.influxdata.com/influxdb/v1.7/write_protocols/line_protocol_tutorial/"},"Influx Line Protocol"),". It will fail if the input isn't a valid string."),(0,o.kt)("h2",{id:"predicate"},"Predicate"),(0,o.kt)("p",null,"When used as a predicate with ",(0,o.kt)("inlineCode",{parentName:"p"},"~"),", the predicate will pass if the target conforms to the influx line protocol."),(0,o.kt)("h2",{id:"extraction"},"Extraction"),(0,o.kt)("p",null,"The extractor will return a record with the measurement, fields, tags and the timestamp extracted from the input."),(0,o.kt)("p",null,"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tremor"},'match { "meta" :  "wea\\\\ ther,location=us-midwest temperature=82 1465839830100400200" } of\n  case rp = %{ meta ~= influx||} => rp\n  default => "no match"\nend;\n')),(0,o.kt)("p",null,"This will return:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'"meta": {\n          "measurement": "wea ther",\n           "tags": {\n               "location": "us-midwest"\n             },\n             "fields": {\n              "temperature": 82.0\n            },\n            "timestamp": 1465839830100400200\n        }\n')))}f.isMDXComponent=!0}}]);