"use strict";(self.webpackChunknew_tremor_website=self.webpackChunknew_tremor_website||[]).push([[7064],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return u}});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),p=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=p(r),u=n,d=m["".concat(l,".").concat(u)]||m[u]||f[u]||o;return r?a.createElement(d,s(s({ref:t},c),{},{components:r})):a.createElement(d,s({ref:t},c))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,s=new Array(o);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var p=2;p<o;p++)s[p]=r[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},80346:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},metadata:function(){return l},toc:function(){return p},default:function(){return f}});var a=r(87462),n=r(63366),o=(r(67294),r(3905)),s=["components"],i={title:"Connectivity",description:"Talking to other systems- Connecting different systems is an integral part of Tremor.",hide_table_of_contents:!1},l={type:"mdx",permalink:"/tremor-new-website/getting-started/connectivity",source:"@site/src/pages/getting-started/connectivity.md"},p=[{value:"Concept",id:"concept",children:[]},{value:"Onramps",id:"onramps",children:[]},{value:"Offramps",id:"offramps",children:[]}],c={toc:p};function f(e){var t=e.components,r=(0,n.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"concept"},"Concept"),(0,o.kt)("p",null,"In order to provide a general-purpose event processing facility to a broad base\nof applications, Tremor separates processing from connectivity and distribution."),(0,o.kt)("p",null,"Tremor further separates the syntax of external formats from the implied value type semantics that are useful for filtering, processing, transforming, aggregating or otherwise deriving synthetic events from streams of data ingested by Tremor processes."),(0,o.kt)("p",null,"As Tremor is primarily an event-processing system, we refer to connections to external systems that are logically upstream of Tremor as ",(0,o.kt)("a",{parentName:"p",href:"#h-onramps"},(0,o.kt)("inlineCode",{parentName:"a"},"Onramps")),"."),(0,o.kt)("p",null,"We refer to connections to external systems that are logically downstream of Tremor as ",(0,o.kt)("a",{parentName:"p",href:"#h-offramps"},(0,o.kt)("inlineCode",{parentName:"a"},"Offramps")),"."),(0,o.kt)("p",null,"For example, the Kafka onramp subscribes to topics in a Kafka cluster and consumes event data from those topics; the Kafka offramp publishes to topics in a Kafka cluster and contributes event data to topics."),(0,o.kt)("p",null,"Application logic in Tremor can be connected to multiple onramps and/or offramps originating from or contributing to disparate systems. A basic passthrough application could enable bridging a Kafka system with websockets. It could preserve or transform the external wire-form. It could filter and partition event data using content based routing."),(0,o.kt)("p",null,"The application logic is always based on Tremor-internal representation of the data, never on the external wire-format. This is by design."),(0,o.kt)("p",null,"Tremor has built-in support for metrics capture of data ingested and distributed (metrics) and also for communicating back-pressure events to application logic so that quality-of-service can be tuned adaptively."),(0,o.kt)("h3",{id:"onramps"},"Onramps"),(0,o.kt)("p",null,"Tremor supports a number of stable general purpose onramps:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/Artefacts/onramps/#kafka"},"Kafka")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/Artefacts/onramps/#TCP"},"TCP")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/Artefacts/onramps/#udp"},"UDP")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/Artefacts/onramps/#WS"},"WS")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/Artefacts/onramps/#File"},"File"),"- reads a singular file."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/Artefacts/onramps/#metronome"},"Metronome"),"- periodic tick events."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/Artefacts/onramps/#crononome"},"Crononome"),"- cron based tick events."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/Artefacts/onramps/#blaster"},"Blaster"),"- Benchmarking onramp.")),(0,o.kt)("p",null,"And some early-access evolving production-grade onramps:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/Artefacts/onramps/#REST"},"REST"))),(0,o.kt)("h3",{id:"offramps"},"Offramps"),(0,o.kt)("p",null,"Tremor supports a number of stable general purpose offramps:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/Artefacts/offramps/#File"},"File")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/Artefacts/offramps/#Kafka"},"Kafka")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/Artefacts/offramps/#REST"},"REST")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/Artefacts/offramps/#TCP"},"TCP")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/Artefacts/offramps/#UDP"},"UDP")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/Artefacts/offramps/#WS"},"WS")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/Artefacts/offramps/#REST"},"BlackHole"),"- benchmarking offramp."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/Artefacts/offramps/#elastic"},"elastic"),"- ElasticSearch client"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/Artefacts/offramps/#REST"},"debug"),"- tremor internal use for debugging."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/Artefacts/offramps/#stdout"},"stdout"))))}f.isMDXComponent=!0}}]);