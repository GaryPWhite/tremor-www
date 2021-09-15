"use strict";(self.webpackChunknew_tremor_website=self.webpackChunknew_tremor_website||[]).push([[5318],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(r),m=i,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||a;return r?n.createElement(f,o(o({ref:t},p),{},{components:r})):n.createElement(f,o({ref:t},p))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var s=2;s<a;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},89114:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},metadata:function(){return l},toc:function(){return s},default:function(){return d}});var n=r(87462),i=r(63366),a=(r(67294),r(3905)),o=["components"],c={},l={unversionedId:"tremor-script/stdlib/cncf/otel",id:"tremor-script/stdlib/cncf/otel",isDocsHomePage:!1,title:"otel",description:"* spanid - OpenTelemetry Span Id utilities",source:"@site/docs/tremor-script/stdlib/cncf/otel.md",sourceDirName:"tremor-script/stdlib/cncf",slug:"/tremor-script/stdlib/cncf/otel",permalink:"/tremor-new-website/docs/tremor-script/stdlib/cncf/otel",editUrl:"https://github.com/tremor-rs/tremor-new-website/tree/main/docs/tremor-script/stdlib/cncf/otel.md",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"cncf",permalink:"/tremor-new-website/docs/tremor-script/stdlib/cncf"},next:{title:"logs",permalink:"/tremor-new-website/docs/tremor-script/stdlib/cncf/otel/logs"}},s=[{value:"Functions",id:"functions",children:[{value:"gen_span_id_string()",id:"gen_span_id_string",children:[]},{value:"gen_span_id_bytes()",id:"gen_span_id_bytes",children:[]},{value:"gen_span_id_array()",id:"gen_span_id_array",children:[]},{value:"gen_trace_id_string()",id:"gen_trace_id_string",children:[]},{value:"gen_trace_id_bytes()",id:"gen_trace_id_bytes",children:[]},{value:"gen_trace_id_array()",id:"gen_trace_id_array",children:[]}]}],p={toc:s};function d(e){var t=e.components,r=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",{align:"center"},(0,a.kt)("img",{src:"https://raw.githubusercontent.com/cncf/artwork/master/projects/opentelemetry/horizontal/color/opentelemetry-horizontal-color.png",width:"35%"})),(0,a.kt)("hr",null),(0,a.kt)("h1",{id:"cncf-opentelemetry-utility-functions"},(0,a.kt)("inlineCode",{parentName:"h1"},"CNCF OpenTelemetry")," utility functions"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/tremor-new-website/docs/tremor-script/stdlib/cncf/otel/span_id"},"span_id")," - OpenTelemetry Span Id utilities"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/tremor-new-website/docs/tremor-script/stdlib/cncf/otel/trace_id"},"trace_id")," - OpenTelemetry Trace Id utilities"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/tremor-new-website/docs/tremor-script/stdlib/cncf/otel/logs"},"logs")," - OpenTelemetry log event utilities"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/tremor-new-website/docs/tremor-script/stdlib/cncf/otel/metrics"},"metrics")," - OpenTelemetry metrics event utilities"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/tremor-new-website/docs/tremor-script/stdlib/cncf/otel/trace"},"trace")," - OpenTelemetry trace event utilities")),(0,a.kt)("h2",{id:"functions"},"Functions"),(0,a.kt)("h3",{id:"gen_span_id_string"},"gen_span_id_string()"),(0,a.kt)("p",null,"Generate a random span id using the hex string representation"),(0,a.kt)("p",null,"Returns a ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("h3",{id:"gen_span_id_bytes"},"gen_span_id_bytes()"),(0,a.kt)("p",null,"Generate a random span id using the binary representation"),(0,a.kt)("p",null,"Returns a ",(0,a.kt)("inlineCode",{parentName:"p"},"binary")),(0,a.kt)("h3",{id:"gen_span_id_array"},"gen_span_id_array()"),(0,a.kt)("p",null,"Generate a random span id using the int array representation"),(0,a.kt)("p",null,"Returns a ",(0,a.kt)("inlineCode",{parentName:"p"},"array")," of ",(0,a.kt)("inlineCode",{parentName:"p"},"int")),(0,a.kt)("h3",{id:"gen_trace_id_string"},"gen_trace_id_string()"),(0,a.kt)("p",null,"Generate a random trace id using the hex string representation"),(0,a.kt)("p",null,"Returns a ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("h3",{id:"gen_trace_id_bytes"},"gen_trace_id_bytes()"),(0,a.kt)("p",null,"Generate a random trace id using the binary representation"),(0,a.kt)("p",null,"Returns a ",(0,a.kt)("inlineCode",{parentName:"p"},"binary")),(0,a.kt)("h3",{id:"gen_trace_id_array"},"gen_trace_id_array()"),(0,a.kt)("p",null,"Generate a random trace id using the binary representation"),(0,a.kt)("p",null,"Returns a ",(0,a.kt)("inlineCode",{parentName:"p"},"array")," of ",(0,a.kt)("inlineCode",{parentName:"p"},"int")))}d.isMDXComponent=!0}}]);