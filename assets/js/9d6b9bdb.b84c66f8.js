"use strict";(self.webpackChunknew_tremor_website=self.webpackChunknew_tremor_website||[]).push([[599],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return d}});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),c=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=c(e.components);return a.createElement(s.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(t),d=r,h=u["".concat(s,".").concat(d)]||u[d]||m[d]||o;return t?a.createElement(h,l(l({ref:n},p),{},{components:t})):a.createElement(h,l({ref:n},p))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,l=new Array(o);l[0]=u;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=t[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},24070:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return i},metadata:function(){return s},toc:function(){return c},default:function(){return m}});var a=t(87462),r=t(63366),o=(t(67294),t(3905)),l=["components"],i={},s={unversionedId:"benchmarking",id:"benchmarking",isDocsHomePage:!1,title:"Benchmarking",description:"This is a short synopsis of benchmarking in tremor",source:"@site/docs/benchmarking.md",sourceDirName:".",slug:"/benchmarking",permalink:"/tremor-new-website/docs/benchmarking",editUrl:"https://github.com/tremor-rs/tremor-new-website/tree/main/docs/benchmarking.md",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"CNCF OpenTelemetry Elastic APM Interworking",permalink:"/tremor-new-website/docs/Workshop/examples/otel_elastic_apm/README"},next:{title:"History",permalink:"/tremor-new-website/docs/history"}},c=[{value:"Scope",id:"scope",children:[{value:"Run all benchmarks",id:"run-all-benchmarks",children:[]},{value:"Run individual benchmarks",id:"run-individual-benchmarks",children:[]}]},{value:"Anatomy of a benchmark",id:"anatomy-of-a-benchmark",children:[{value:"Example blaster onramp configuration",id:"example-blaster-onramp-configuration",children:[]},{value:"Example blackhole offramp configuration",id:"example-blackhole-offramp-configuration",children:[]}]},{value:"Other",id:"other",children:[]},{value:"Recommendations",id:"recommendations",children:[]}],p={toc:c};function m(e){var n=e.components,t=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This is a short synopsis of benchmarking in tremor"),(0,o.kt)("h2",{id:"scope"},"Scope"),(0,o.kt)("p",null,"How to run individual benchmarks comprising the benchmark suite in tremor."),(0,o.kt)("h3",{id:"run-all-benchmarks"},"Run all benchmarks"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"make bench\n")),(0,o.kt)("h3",{id:"run-individual-benchmarks"},"Run individual benchmarks"),(0,o.kt)("p",null,"In order to run individual benchmarks, issue a command of the form:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"./bench/run <name-of-benchmark>\n")),(0,o.kt)("p",null,"Where:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"variable"),(0,o.kt)("th",{parentName:"tr",align:null},"value"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"name-of-benchmark"),(0,o.kt)("td",{parentName:"tr",align:null},"Should be replaced with the basename of the yaml file for that benchmark's pipeline")))),(0,o.kt)("p",null,"For example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"./bench/run real-workflow-throughput-json\n")),(0,o.kt)("p",null,"Will run the 'real-workflow-throughput-json' benchmark and publish a HDR histogram to standard output\nupon completion. it takes about 1 minute to run."),(0,o.kt)("h2",{id:"anatomy-of-a-benchmark"},"Anatomy of a benchmark"),(0,o.kt)("p",null,"Tremor benchmarks composed of:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"An impossibly fast source of data - using the blaster onramp"),(0,o.kt)("li",{parentName:"ul"},"An impossibly fast sink of data - using the blackhole offramp"),(0,o.kt)("li",{parentName:"ul"},"A pipeline that is representative of the workload under measurement")),(0,o.kt)("h3",{id:"example-blaster-onramp-configuration"},"Example blaster onramp configuration"),(0,o.kt)("p",null,"Blaster loads data from a compressed archive and reads json source data line by line into memory. The in memory cached copy is replayed repeatedly forever."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"---\nonramp:\n  - id: blaster\n    type: blaster\n    codec: json\n    config:\n      source: ./demo/data/data.json.xz\n")),(0,o.kt)("h3",{id:"example-blackhole-offramp-configuration"},"Example blackhole offramp configuration"),(0,o.kt)("p",null,"Blackhole is a null sink for received data. It also records the latency from ingest time ( created and enqueued in blaster ) to egress ( when it hits the blackhole ) of an event."),(0,o.kt)("p",null,"As such, blaster and blackhole are biased 'unreasonably fast' and they capture intrinsic performance - or, the best case performance that tremor can sustain for the representative workload."),(0,o.kt)("p",null,"Blackhole uses high dynamic range histograms to record performance data ( latency measurements )."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"offramp:\n  - id: blackhole\n    type: blackhole\n    codec: json\n    config:\n      warmup_secs: 10\n      stop_after_secs: 100\n      significant_figures: 2\n")),(0,o.kt)("p",null,"The pipeline and binding configuration will vary by benchmark, for the real world throughput benchmark they are structured as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'pipeline:\n  - id: main\n    interface:\n      inputs:\n        - in\n      outputs:\n        - out\n    nodes:\n      - id: runtime\n        op: runtime::tremor\n        config:\n          script: |\n            match event.application of\n              case "app1" => let $class = "applog_app1",  let $rate = 1250, let $dimension = event.application, emit event\n              case "app2" => let $class = "applog_app1",  let $rate = 2500, let $dimension = event.application, emit event\n              case "app3" => let $class = "applog_app1",  let $rate = 18750, let $dimension = event.application, emit event\n              case "app4" => let $class = "applog_app1",  let $rate = 750, let $dimension = event.application, emit event\n              case "app5" => let $class = "applog_app1",  let $rate = 18750, let $dimension = event.application, emit event\n              default => null\n            end;\n            match event.index_type of\n              case "applog_app6" => let $class = "applog_app6", let $rate = 4500, let $dimensions = event.logger_name, emit event\n              case "syslog_app1" => let $class = "syslog_app1", let $rate = 2500, let $dimensions = event.syslog_hostname, emit event\n              default => null\n            end;\n            match array::contains(event.tags, "tag1") of\n              case true => let $class = "syslog_app2", let $rate = 125, let $dimensions = event.syslog_hostname, emit event\n              default => null\n            end;\n            match event.index_type of\n              case "syslog_app3" => let $class = "syslog_app3", let $rate = 1750, let $dimensions = event.syslog_hostname\n              case "syslog_app4" => let $class = "syslog_app4", let $rate = 7500, let $dimensions = event.syslog_hostname\n              case "syslog_app5" => let $class = "syslog_app5", let $rate = 125, let $dimensions = event.syslog_hostname\n              case "syslog_app6" => let $class = "syslog_app6", let $rate = 3750, let $dimensions = event.syslog_hostname\n              default => let $class = "default", let $rate = 250\n            end;\n            event;\n      - id: group\n        op: grouper::bucket\n    links:\n      in: [runtime]\n      runtime: [group]\n      group: [out]\n      group/overflow: [out]\n')),(0,o.kt)("h2",{id:"other"},"Other"),(0,o.kt)("p",null,"All the above configuration are provided in a single yaml file and evaluated through the ",(0,o.kt)("inlineCode",{parentName:"p"},"run")," script. The make target ",(0,o.kt)("inlineCode",{parentName:"p"},"bench")," calls the run script for each known benchmark file and redirects test / benchmark output into a file."),(0,o.kt)("h2",{id:"recommendations"},"Recommendations"),(0,o.kt)("p",null,"To account for run-on-run variance ( difference in measured or recorded performance from one run to another ) we typically run benchmarks repeatedly on development machines with non-essential services such as docker or other services not engaged in the benchmark such as IDEs shut down during benchmarking."),(0,o.kt)("p",null,"Even then, development laptops are not lab quality environments so results should be taken as indicative and with a grain of salt."))}m.isMDXComponent=!0}}]);