"use strict";(self.webpackChunkadguard_knowledge_base=self.webpackChunkadguard_knowledge_base||[]).push([[7185],{4137:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>c});var i=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,i,o=function(e,t){if(null==e)return{};var r,i,o={},n=Object.keys(e);for(i=0;i<n.length;i++)r=n[i],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)r=n[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=i.createContext({}),d=function(e){var t=i.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=d(e.components);return i.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=d(r),c=o,f=u["".concat(s,".").concat(c)]||u[c]||m[c]||n;return r?i.createElement(f,a(a({ref:t},p),{},{components:r})):i.createElement(f,a({ref:t},p))}));function c(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,a=new Array(n);a[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var d=2;d<n;d++)a[d]=r[d];return i.createElement.apply(null,a)}return i.createElement.apply(null,r)}u.displayName="MDXCreateElement"},2831:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>m,frontMatter:()=>n,metadata:()=>l,toc:()=>d});var i=r(7462),o=(r(7294),r(4137));const n={title:"How to enable system-wide filtering in AdGuard for iOS",sidebar_position:2},a=void 0,l={unversionedId:"adguard-for-ios/solving-problems/system-wide-filtering",id:"adguard-for-ios/solving-problems/system-wide-filtering",title:"How to enable system-wide filtering in AdGuard for iOS",description:"This article covers AdGuard for iOS, a multifunctional ad blocker that protects your device at the system level. To see how it works firsthand, download the AdGuard app",source:"@site/i18n/it/docusaurus-plugin-content-docs/current/adguard-for-ios/solving-problems/system-wide-filtering.md",sourceDirName:"adguard-for-ios/solving-problems",slug:"/adguard-for-ios/solving-problems/system-wide-filtering",permalink:"/KnowledgeBase/it/adguard-for-ios/solving-problems/system-wide-filtering",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBase/edit/master/docs/adguard-for-ios/solving-problems/system-wide-filtering.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"How to enable system-wide filtering in AdGuard for iOS",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"How to activate premium features",permalink:"/KnowledgeBase/it/adguard-for-ios/solving-problems/premium-activation"},next:{title:"How to avoid compatibility problem with FaceTime",permalink:"/KnowledgeBase/it/adguard-for-ios/solving-problems/facetime-compatibility-issues"}},s={},d=[{value:"About system-wide filtering",id:"about-system-wide-filtering",level:2},{value:"How to add custom DNS filter/hosts file",id:"how-to-add-custom-dns-filterhosts-file",level:2}],p={toc:d};function m(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,i.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"This article covers AdGuard for iOS, a multifunctional ad blocker that protects your device at the system level. To see how it works firsthand, ",(0,o.kt)("a",{parentName:"p",href:"https://adguard.com/download.html?auto=true"},"download the AdGuard app"))),(0,o.kt)("h2",{id:"about-system-wide-filtering"},"About system-wide filtering"),(0,o.kt)("p",null,"System-wide filtering means blocking ads and trackers beyond the Safari browser, i.e. in other apps and browsers. This article will tell you how to enable it on your iOS device."),(0,o.kt)("p",null,"On iOS, the only way to block ads and trackers system-wide is to use ",(0,o.kt)("a",{parentName:"p",href:"https://adguard-dns.io/kb/general/dns-filtering/"},"DNS filtering"),"."),(0,o.kt)("p",null,"First, you have to enable DNS protection. To do so:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Open ",(0,o.kt)("em",{parentName:"li"},"AdGuard for iOS"),"."),(0,o.kt)("li",{parentName:"ol"},"Tap ",(0,o.kt)("em",{parentName:"li"},"Protection")," icon (the second icon in the bottom menu bar)."),(0,o.kt)("li",{parentName:"ol"},"Turn ",(0,o.kt)("em",{parentName:"li"},"DNS protection")," switch on.")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/public/Adguard/Blog/ios_dns_protection.PNG",alt:"DNS protection screen *mobile_border"})),(0,o.kt)("p",null,"Now, if your purpose is to block ads and trackers system-wide, you have three options:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Use AdGuard DNS filter (",(0,o.kt)("em",{parentName:"li"},"Protection")," (the shield icon in the bottom menu) \u2192 ",(0,o.kt)("em",{parentName:"li"},"DNS protection")," \u2192 ",(0,o.kt)("em",{parentName:"li"},"DNS filtering")," \u2192 ",(0,o.kt)("em",{parentName:"li"},"DNS filters")," \u2192 ",(0,o.kt)("em",{parentName:"li"},"AdGuard DNS filter"),")."),(0,o.kt)("li",{parentName:"ol"},"Use AdGuard DNS server (",(0,o.kt)("em",{parentName:"li"},"Protection")," (the shield icon in the bottom menu) \u2192 ",(0,o.kt)("em",{parentName:"li"},"DNS protection")," \u2192 ",(0,o.kt)("em",{parentName:"li"},"DNS server")," \u2192 ",(0,o.kt)("em",{parentName:"li"},"AdGuard DNS"),") or another blocking DNS server to your liking."),(0,o.kt)("li",{parentName:"ol"},"Add a custom DNS filter/hosts file to your liking.")),(0,o.kt)("p",null,"The first and third option have several advantages:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"You can use any DNS server at your discretion and you are not tied up to a specific blocking server, because the filter does the blocking."),(0,o.kt)("li",{parentName:"ul"},"You can add multiple DNS filters and/or hosts files (although using too many might slow down AdGuard).")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/public/Adguard/kb/DNS_filtering/how_dns_filtering_works_en.png",alt:"How DNS filtering works"})),(0,o.kt)("h2",{id:"how-to-add-custom-dns-filterhosts-file"},"How to add custom DNS filter/hosts file"),(0,o.kt)("p",null,"You can add any DNS filter or hosts file you like."),(0,o.kt)("p",null,"For the sake of the example, let's add ",(0,o.kt)("a",{parentName:"p",href:"https://oisd.nl/"},"OISD Blocklist Big"),"."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Copy this link: ",(0,o.kt)("inlineCode",{parentName:"li"},"https://big.oisd.nl")," (it's a link for OISD Blocklist Big filter)"),(0,o.kt)("li",{parentName:"ol"},"Open ",(0,o.kt)("em",{parentName:"li"},"Protection")," (the shield icon in the bottom menu) \u2192 ",(0,o.kt)("em",{parentName:"li"},"DNS protection")," \u2192 ",(0,o.kt)("em",{parentName:"li"},"DNS filtering")," \u2192 ",(0,o.kt)("em",{parentName:"li"},"DNS filters"),"."),(0,o.kt)("li",{parentName:"ol"},"Tap ",(0,o.kt)("em",{parentName:"li"},"Add a filter"),"."),(0,o.kt)("li",{parentName:"ol"},"Paste the link into the filter URL field."),(0,o.kt)("li",{parentName:"ol"},"Tap ",(0,o.kt)("em",{parentName:"li"},"Next")," \u2192 ",(0,o.kt)("em",{parentName:"li"},"Add"),".")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/blog/new/ot4okIMGD236EB8905471.jpeg",alt:"Adding a DNS filter screen *mobile_border"})),(0,o.kt)("p",null,"Add any number of other DNS filters the same way by pasting a different URL at step 4. You can find various filters and links to them ",(0,o.kt)("a",{parentName:"p",href:"https://filterlists.com"},"here"),"."))}m.isMDXComponent=!0}}]);