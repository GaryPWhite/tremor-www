"use strict";(self.webpackChunknew_tremor_website=self.webpackChunknew_tremor_website||[]).push([[9969],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return d}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=p(r),d=a,f=m["".concat(c,".").concat(d)]||m[d]||u[d]||i;return r?n.createElement(f,o(o({ref:t},s),{},{components:r})):n.createElement(f,o({ref:t},s))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},90760:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return u}});var n=r(87462),a=r(63366),i=(r(67294),r(3905)),o=["components"],l={},c={unversionedId:"tremor-script/extractors/glob",id:"tremor-script/extractors/glob",isDocsHomePage:!1,title:"Glob",description:"Glob is an extractor that checks if the input string matches the specified Unix shell-style pattern#Unix-like). The extractor fails if an pattern is specified that is not valid or the string doesn't match the pattern.",source:"@site/docs/tremor-script/extractors/glob.md",sourceDirName:"tremor-script/extractors",slug:"/tremor-script/extractors/glob",permalink:"/tremor-new-website/docs/tremor-script/extractors/glob",editUrl:"https://github.com/tremor-rs/tremor-new-website/tree/main/docs/tremor-script/extractors/glob.md",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Dissect",permalink:"/tremor-new-website/docs/tremor-script/extractors/dissect"},next:{title:"Grok",permalink:"/tremor-new-website/docs/tremor-script/extractors/grok"}},p=[{value:"Predicate",id:"predicate",children:[]},{value:"Extraction",id:"extraction",children:[]},{value:"Patterns",id:"patterns",children:[]}],s={toc:p};function u(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Glob is an extractor that checks if the input string matches the specified ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Glob_(programming)#Unix-like"},"Unix shell-style pattern"),". The extractor fails if an pattern is specified that is not valid or the string doesn't match the pattern."),(0,i.kt)("h2",{id:"predicate"},"Predicate"),(0,i.kt)("p",null,"When used as a predicate with ",(0,i.kt)("inlineCode",{parentName:"p"},"~"),", the predicate will pass if the input matches the glob pattern passed as the parameter to the extractor."),(0,i.kt)("h2",{id:"extraction"},"Extraction"),(0,i.kt)("p",null,"The extractor returns true if the predicate passes else returns an error"),(0,i.kt)("h2",{id:"patterns"},"Patterns"),(0,i.kt)("p",null,"Patterns can be of the following types:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Pattern"),(0,i.kt)("th",{parentName:"tr",align:null},"Matches"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"?")),(0,i.kt)("td",{parentName:"tr",align:null},"Single character")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"*")),(0,i.kt)("td",{parentName:"tr",align:null},"any (0 or more) sequence or characters")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"[\u2026]")),(0,i.kt)("td",{parentName:"tr",align:null},"any character inside the bracket. Supports ranges (e,g. ",(0,i.kt)("inlineCode",{parentName:"td"},"[0-9]")," will match any digit)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"[!\u2026]")),(0,i.kt)("td",{parentName:"tr",align:null},"negation of ",(0,i.kt)("inlineCode",{parentName:"td"},"[\u2026]"))))),(0,i.kt)("p",null,"Meta characters (e..g ",(0,i.kt)("inlineCode",{parentName:"p"},"*"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"?")," ) can be matched by using ",(0,i.kt)("inlineCode",{parentName:"p"},"[ ]"),". (e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},"[ * ]")," will match a string that contains ",(0,i.kt)("inlineCode",{parentName:"p"},"*"),")."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tremor"},'match { "test" : "INFO" } of\n  case foo = %{ test ~= glob|INFO*| } => foo\n  default => "ko"\nend;\n## will output true\n')))}u.isMDXComponent=!0}}]);