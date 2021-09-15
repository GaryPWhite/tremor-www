"use strict";(self.webpackChunknew_tremor_website=self.webpackChunknew_tremor_website||[]).push([[5936],{3905:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return m}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=p(r),m=o,f=c["".concat(s,".").concat(m)]||c[m]||u[m]||a;return r?n.createElement(f,l(l({ref:t},d),{},{components:r})):n.createElement(f,l({ref:t},d))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var p=2;p<a;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},66964:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},metadata:function(){return s},toc:function(){return p},default:function(){return u}});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),l=["components"],i={},s={unversionedId:"tremor-script/modules",id:"tremor-script/modules",isDocsHomePage:!1,title:"Modules",description:"Tremor-script supports nested namespaces or modules.",source:"@site/docs/tremor-script/modules.md",sourceDirName:"tremor-script",slug:"/tremor-script/modules",permalink:"/tremor-new-website/docs/tremor-script/modules",editUrl:"https://github.com/tremor-rs/tremor-new-website/tree/main/docs/tremor-script/modules.md",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Tremor-Script",permalink:"/tremor-new-website/docs/tremor-script/index"},next:{title:"pp",permalink:"/tremor-new-website/docs/tremor-script/pp"}},p=[{value:"Defaults",id:"defaults",children:[]},{value:"Referencing Modules with <code>use</code>",id:"referencing-modules-with-use",children:[]}],d={toc:p};function u(e){var t=e.components,i=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,n.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Tremor-script supports nested namespaces or modules."),(0,a.kt)("p",null,"Modules in tremor are the lowest unit of compilation available to developers\nto modularise tremor logic across multiple logical namespaces. On the filesystem,\nmodules are rooted at a base path and are nested with folders.\npng)"),(0,a.kt)("p",null,"Modules can define ",(0,a.kt)("inlineCode",{parentName:"p"},"const")," constants, ",(0,a.kt)("inlineCode",{parentName:"p"},"fn")," functions, or\nnested ",(0,a.kt)("inlineCode",{parentName:"p"},"mod")," sub-modules."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("img",{alt:"module grammar",src:r(56471).Z}))),(0,a.kt)("h1",{id:"module-path"},"Module Path"),(0,a.kt)("p",null,"Modules can be defined physically on the file system. For example given the following modular hierarchy\non the file system, relative to a root module path: Nested modules can be defined as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"  +-- foo\n    +-- bar\n      +-- snot.tremor\n    +-- baz\n      +-- badger.tremor\n")),(0,a.kt)("p",null,"The same modular hierarchy can be defined as nested module declarations as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tremor"},'mod foo with\n  mod bar with\n    const snot = "beep";\n  end;\n  mod baz with\n    const badger = "boop";\n  end;\nend;\n\nlet snot = foo::bar::snot;\nlet badger = foo::baz::badger;\n\n"#{snot}-#{badger}";\n')),(0,a.kt)("p",null,"Assuming this module hierarchy is rooted at ",(0,a.kt)("inlineCode",{parentName:"p"},"/opt/my-project/lib")," they can be registered with tremor\nby prepending this folder to the ",(0,a.kt)("inlineCode",{parentName:"p"},"TREMOR_PATH")," environment variable"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'export TREMOR_PATH="/opt/my-project/lib:$TREMOR_PATH"\n')),(0,a.kt)("h2",{id:"defaults"},"Defaults"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"TREMOR_PATH")," uses ':' on linux/unix to separate multiple module paths."),(0,a.kt)("p",null,"The default places to look for your modules is ",(0,a.kt)("inlineCode",{parentName:"p"},"/usr/local/share/tremor")," if ",(0,a.kt)("inlineCode",{parentName:"p"},"TREMOR_PATH")," is not provided."),(0,a.kt)("p",null,"The default place for the ",(0,a.kt)("em",{parentName:"p"},"tremor standard library")," is ",(0,a.kt)("inlineCode",{parentName:"p"},"/usr/share/tremor/lib"),", so the full ",(0,a.kt)("inlineCode",{parentName:"p"},"TREMOR_PATH")," default is"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"/usr/local/share/tremor")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"/usr/share/tremor/lib"))),(0,a.kt)("h2",{id:"referencing-modules-with-use"},"Referencing Modules with ",(0,a.kt)("inlineCode",{parentName:"h2"},"use")),(0,a.kt)("p",null,"The modules can be used using the ",(0,a.kt)("inlineCode",{parentName:"p"},"use")," clause as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tremor"},"use foo::bar::snot; # snot is a ref to 'foo/bar/snot.tremor'\nuse foo::baz::badger; # badger is a ref to 'foo/bar/badger.tremor'\n\n\"#{snot::snot}#{badger::badger}\"; # emits an interpolated string\n")),(0,a.kt)("p",null,"Modules can be loaded via the ",(0,a.kt)("inlineCode",{parentName:"p"},"use")," clause which in turn loads a module from the physical file system via the module path."),(0,a.kt)("p",null,"Inline and externalized modules can be used separately or together as appropriate."),(0,a.kt)("p",null,"Where there are existing references a module can be aliased to avoid clashes in the local scope:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tremor"},'use foo::bar as fleek;\n\n"Hello #{fleek::snot}"\n')),(0,a.kt)("p",null,"It is to be noted that inclusion via use will prevent circular inclusion as in file ",(0,a.kt)("inlineCode",{parentName:"p"},"a.tremor")," can use ",(0,a.kt)("inlineCode",{parentName:"p"},"b.tremor")," but beyond\nthat point ",(0,a.kt)("inlineCode",{parentName:"p"},"b.tremor")," can no longer use ",(0,a.kt)("inlineCode",{parentName:"p"},"a.tremor")," as this would create a dependency cycle. This is a restriction of the\ncurrent implementation and may or may not be relaxed in the future."))}u.isMDXComponent=!0},56471:function(e,t){t.Z="data:image/png;base64,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"}}]);