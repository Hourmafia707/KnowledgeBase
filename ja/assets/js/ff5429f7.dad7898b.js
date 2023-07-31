"use strict";(self.webpackChunkadguard_knowledge_base=self.webpackChunkadguard_knowledge_base||[]).push([[9584],{4137:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),d=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=d(r),m=a,f=u["".concat(l,".").concat(m)]||u[m]||p[m]||o;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var d=2;d<o;d++)i[d]=r[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},5813:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var n=r(7462),a=(r(7294),r(4137));const o={title:"Certificate-related issues",sidebar_position:2},i=void 0,s={unversionedId:"adguard-for-windows/solving-problems/connection-not-trusted",id:"adguard-for-windows/solving-problems/connection-not-trusted",title:"Certificate-related issues",description:"\u3053\u306e\u8a18\u4e8b\u3067\u306f\u3001\u30b7\u30b9\u30c6\u30e0\u30ec\u30d9\u30eb\u3067\u304a\u4f7f\u3044\u306e\u30c7\u30d0\u30a4\u30b9\u3092\u4fdd\u8b77\u3059\u308b\u591a\u6a5f\u80fd\u5e83\u544a\u30d6\u30ed\u30c3\u30ab\u30fc\u3001\u300cAdGuard for Windows\u300d\u306b\u3064\u3044\u3066\u66f8\u3044\u3066\u3044\u307e\u3059\u3002 \u5b9f\u969b\u306b\u4f7f\u3063\u3066\u307f\u308b\u306b\u306f\u3001AdGuard\u30a2\u30d7\u30ea\u3092\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u3057\u3066\u304f\u3060\u3055\u3044\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/adguard-for-windows/solving-problems/connection-not-trusted.md",sourceDirName:"adguard-for-windows/solving-problems",slug:"/adguard-for-windows/solving-problems/connection-not-trusted",permalink:"/KnowledgeBase/ja/adguard-for-windows/solving-problems/connection-not-trusted",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBase/edit/master/docs/adguard-for-windows/solving-problems/connection-not-trusted.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Certificate-related issues",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"WFP driver",permalink:"/KnowledgeBase/ja/adguard-for-windows/solving-problems/wfp-driver"},next:{title:"How to collect AdGuard logs",permalink:"/KnowledgeBase/ja/adguard-for-windows/solving-problems/adguard-logs"}},l={},d=[{value:"<em>Potential Security Risk</em> error in Firefox-based browsers",id:"potential-security-risk-error-in-firefox-based-browsers",level:2},{value:"Yandex.Browser certificate warning",id:"yandexbrowser-certificate-warning",level:2},{value:"Why is this happening",id:"why-is-this-happening",level:3},{value:"How to solve the problem",id:"how-to-solve-the-problem",level:3}],c={toc:d};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"\u3053\u306e\u8a18\u4e8b\u3067\u306f\u3001\u30b7\u30b9\u30c6\u30e0\u30ec\u30d9\u30eb\u3067\u304a\u4f7f\u3044\u306e\u30c7\u30d0\u30a4\u30b9\u3092\u4fdd\u8b77\u3059\u308b\u591a\u6a5f\u80fd\u5e83\u544a\u30d6\u30ed\u30c3\u30ab\u30fc\u3001\u300cAdGuard for Windows\u300d\u306b\u3064\u3044\u3066\u66f8\u3044\u3066\u3044\u307e\u3059\u3002 \u5b9f\u969b\u306b\u4f7f\u3063\u3066\u307f\u308b\u306b\u306f\u3001",(0,a.kt)("a",{parentName:"p",href:"https://adguard.com/download.html?auto=true"},"AdGuard\u30a2\u30d7\u30ea\u3092\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9"),"\u3057\u3066\u304f\u3060\u3055\u3044\u3002")),(0,a.kt)("p",null,"To be able to filter HTTPS-traffic and efficiently block ads and trackers, AdGuard generates a special (and unique) root certificate and installs it into the system storage. You can learn more about why a certificate is required by reading ",(0,a.kt)("a",{parentName:"p",href:"/general/https-filtering/what-is-https-filtering"},"this article"),"."),(0,a.kt)("p",null,"Normally browsers trust the AdGuard certificate once it's added to the system certificate storage during the installation process. But in some cases this is not enough and you may come across warnings or errors. This happens most often in Firefox-based browsers like Mozilla Firefox, PaleMoon, Waterfox, etc., or in Yandex.Browser."),(0,a.kt)("h2",{id:"potential-security-risk-error-in-firefox-based-browsers"},(0,a.kt)("em",{parentName:"h2"},"Potential Security Risk")," error in Firefox-based browsers"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/public/Adguard/kb/en/certificate/cert_error_en.png",alt:"Security risk error"})),(0,a.kt)("p",null,'Old FireFox versions, as well as browsers based on them, do not trust certificates from the system storage, but only those from their local storage. Since v68, FireFox trusts the system certificates, but you still can face the "Connection is untrusted" error. If something like this happens, first try to click the ',(0,a.kt)("em",{parentName:"p"},"Reinstall Certificate")," button \u2014 you will find it in the ",(0,a.kt)("em",{parentName:"p"},"Network")," tab."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/reinstall.jpg",alt:"Reinstall Certificate"})),(0,a.kt)("p",null,"If that doesn't help, follow the instructions for manually adding the AdGuard certificate to the FireFox storage."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"This instruction is for Firefox browser. Names of buttons and menu items may differ in other Firefox-based browsers.")),(0,a.kt)("p",null,"1) Run AdGuard."),(0,a.kt)("p",null,"2) Go to ",(0,a.kt)("a",{parentName:"p",href:"http://local.adguard.org/cert"},"http://local.adguard.org/cert")," and click the ",(0,a.kt)("em",{parentName:"p"},"Download")," button. The browser should start downloading ",(0,a.kt)("strong",{parentName:"p"},"cert.cer")," file."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"You can also open the download page by clicking on the link via the AdGuard app at ",(0,a.kt)("em",{parentName:"p"},"Settings \u2192 Network \u2192 HTTPS filtering"),".")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/link.jpeg",alt:"Certificate settings"})),(0,a.kt)("p",null,"3) Open your browser and then open ",(0,a.kt)("em",{parentName:"p"},"Settings"),"."),(0,a.kt)("p",null,"4) Go to ",(0,a.kt)("em",{parentName:"p"},"Privacy & Security")," tab."),(0,a.kt)("p",null,"5) Scroll down to ",(0,a.kt)("em",{parentName:"p"},"Certificates")," and click the ",(0,a.kt)("em",{parentName:"p"},"View Certificates")," button."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/import1.jpeg",alt:"View certificates window"})),(0,a.kt)("p",null,"6) Select ",(0,a.kt)("em",{parentName:"p"},"Authorities")," tab."),(0,a.kt)("p",null,"7) Click ",(0,a.kt)("em",{parentName:"p"},"Import..."),"."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/import2.jpeg",alt:"Certificate settings \u2014 import"})),(0,a.kt)("p",null,"8) Browse the downloaded ",(0,a.kt)("strong",{parentName:"p"},"cert.cer")," file and click ",(0,a.kt)("em",{parentName:"p"},"Open"),"."),(0,a.kt)("p",null,"9) Check the ",(0,a.kt)("em",{parentName:"p"},"Trust this CA to identify websites")," box and then lick ",(0,a.kt)("em",{parentName:"p"},"OK"),"."),(0,a.kt)("p",null,"You've successfully installed AdGuard certificate. Restart the browser and the error should go away."),(0,a.kt)("h2",{id:"yandexbrowser-certificate-warning"},"Yandex.Browser certificate warning"),(0,a.kt)("p",null,"If you are a user of both AdGuard for Windows and Yandex.Browser you may have come across this warning:"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/yandex-cert.png",alt:"Yandex certificate warning"})),(0,a.kt)("h3",{id:"why-is-this-happening"},"Why is this happening"),(0,a.kt)("p",null,"Both AdGuard and Yandex take users' security on the Internet very seriously. Current Yandex policy is to warn their users about any certificate that is not recognized by the browser. This is not unsubstantiated, because sometimes malicious apps can inject their own certificates and use this to harm the system and steal private data."),(0,a.kt)("p",null,"However, AdGuard also adds its certificate to the trusted ones. This leads to the warning message you have encountered."),(0,a.kt)("h3",{id:"how-to-solve-the-problem"},"How to solve the problem"),(0,a.kt)("p",null,"The easiest way is to click the ",(0,a.kt)("strong",{parentName:"p"},"Go to site")," button. This will tell Yandex.Browser to remember AdGuard certificate as a trusted one, at least for a while. Normally, you won't have to see this message anymore, but it is not beyond the realm of possibility for it to appear occasionally, for whatever reasons. In such cases, simply press the same button again ",(0,a.kt)("em",{parentName:"p"},"(make sure it is AdGuard's certificate!)"),"."),(0,a.kt)("p",null,"Disabling the HTTPS filtering in AdGuard will also prevent Yandex.Browser from showing this message again, but it comes with a big price: all ads that are loaded by HTTPS (including ",(0,a.kt)("strong",{parentName:"p"},"Yandex's own ads"),") will show up \u2014 on such websites as YouTube, Facebook, Instagram, and many more. We strongly advise against it if you want to keep the quality of ad blocking high."))}p.isMDXComponent=!0}}]);