"use strict";(self.webpackChunkadguard_knowledge_base=self.webpackChunkadguard_knowledge_base||[]).push([[4604],{4137:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(r),m=o,f=c["".concat(s,".").concat(m)]||c[m]||u[m]||a;return r?n.createElement(f,i(i({ref:t},d),{},{components:r})):n.createElement(f,i({ref:t},d))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},6058:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var n=r(7462),o=(r(7294),r(4137));const a={title:"How to create a dump file",sidebar_position:8},i=void 0,l={unversionedId:"adguard-for-windows/solving-problems/dump-file",id:"adguard-for-windows/solving-problems/dump-file",title:"How to create a dump file",description:"\u3053\u306e\u8a18\u4e8b\u3067\u306f\u3001\u30b7\u30b9\u30c6\u30e0\u30ec\u30d9\u30eb\u3067\u304a\u4f7f\u3044\u306e\u30c7\u30d0\u30a4\u30b9\u3092\u4fdd\u8b77\u3059\u308b\u591a\u6a5f\u80fd\u5e83\u544a\u30d6\u30ed\u30c3\u30ab\u30fc\u3001\u300cAdGuard for Windows\u300d\u306b\u3064\u3044\u3066\u66f8\u3044\u3066\u3044\u307e\u3059\u3002 \u5b9f\u969b\u306b\u4f7f\u3063\u3066\u307f\u308b\u306b\u306f\u3001AdGuard\u30a2\u30d7\u30ea\u3092\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u3057\u3066\u304f\u3060\u3055\u3044\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/adguard-for-windows/solving-problems/dump-file.md",sourceDirName:"adguard-for-windows/solving-problems",slug:"/adguard-for-windows/solving-problems/dump-file",permalink:"/KnowledgeBase/ja/adguard-for-windows/solving-problems/dump-file",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBase/edit/master/docs/adguard-for-windows/solving-problems/dump-file.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{title:"How to create a dump file",sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"Advanced (low-level) Settings guide",permalink:"/KnowledgeBase/ja/adguard-for-windows/solving-problems/low-level-settings"},next:{title:"Possible DNS leaks",permalink:"/KnowledgeBase/ja/adguard-for-windows/solving-problems/dns-leaks"}},s={},p=[],d={toc:p};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"\u3053\u306e\u8a18\u4e8b\u3067\u306f\u3001\u30b7\u30b9\u30c6\u30e0\u30ec\u30d9\u30eb\u3067\u304a\u4f7f\u3044\u306e\u30c7\u30d0\u30a4\u30b9\u3092\u4fdd\u8b77\u3059\u308b\u591a\u6a5f\u80fd\u5e83\u544a\u30d6\u30ed\u30c3\u30ab\u30fc\u3001\u300cAdGuard for Windows\u300d\u306b\u3064\u3044\u3066\u66f8\u3044\u3066\u3044\u307e\u3059\u3002 \u5b9f\u969b\u306b\u4f7f\u3063\u3066\u307f\u308b\u306b\u306f\u3001",(0,o.kt)("a",{parentName:"p",href:"https://adguard.com/download.html?auto=true"},"AdGuard\u30a2\u30d7\u30ea\u3092\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9"),"\u3057\u3066\u304f\u3060\u3055\u3044\u3002")),(0,o.kt)("p",null,"To diagnose the reasons for potential problems that users might encounter while using AdGuard, the support team might need the process dump file. The dump file helps developers to see the processes that were executed in the application over a given period of time. Below you can check on the instructions of how to collect the dump file on your PC."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Press ",(0,o.kt)("strong",{parentName:"li"},"Ctrl + Shift + Esc")," and click ",(0,o.kt)("strong",{parentName:"li"},"Task Manager")),(0,o.kt)("li",{parentName:"ol"},"In the upper menu bar select ",(0,o.kt)("strong",{parentName:"li"},"Details"))),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/public/Adguard/kb/Windows_dump/details_en.png",alt:"Task Manager details"})),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Right-click the process that you want to create the dump file for (for example, the support team may ask you to create a dump for ",(0,o.kt)("inlineCode",{parentName:"li"},"Adguard.exe"),")"),(0,o.kt)("li",{parentName:"ol"},"In the drop-down menu click ",(0,o.kt)("strong",{parentName:"li"},"Create dump file")),(0,o.kt)("li",{parentName:"ol"},"The file was created successfully!")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/public/Adguard/kb/Windows_dump/create_dump_file_en.png",alt:"Create dump file"})),(0,o.kt)("p",null,"After you\u2019ve created the dump file, please navigate to the file location. You should be prompted to open the folder containing the dump file right after its creation. Otherwise, you will be able to find it inside the ",(0,o.kt)("strong",{parentName:"p"},"%tmp%")," folder. The created dump file (",(0,o.kt)("inlineCode",{parentName:"p"},".DMP"),") has the same name as the name of the process you chose in the previous steps. The file is quite large, so please compress it into an archive before sending to support."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"AdGuard for Windows has two running processes (",(0,o.kt)("inlineCode",{parentName:"p"},"Adguard.exe")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"AdguardSvc.exe"),"). So you need to create the dump file separately for each process.")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/public/Adguard/kb/Windows_dump/processes_en.png",alt:"AdGuard processes"})),(0,o.kt)("p",null,"When you send the dump files to the support team, please also attach the AdGuard application logs so we have a better chance at solving the problem. ",(0,o.kt)("a",{parentName:"p",href:"../adguard-logs"},"Here")," you can check the instructions on how to collect the log file."))}u.isMDXComponent=!0}}]);