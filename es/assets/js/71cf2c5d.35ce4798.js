"use strict";(self.webpackChunkadguard_knowledge_base=self.webpackChunkadguard_knowledge_base||[]).push([[286],{4137:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),d=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(r),f=n,m=p["".concat(s,".").concat(f)]||p[f]||u[f]||o;return r?a.createElement(m,i(i({ref:t},c),{},{components:r})):a.createElement(m,i({ref:t},c))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var d=2;d<o;d++)i[d]=r[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},8111:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var a=r(7462),n=(r(7294),r(4137));const o={title:"\u0421ertificate installation issues on devices with Android 11+",sidebar_position:12},i=void 0,l={unversionedId:"adguard-for-android/solving-problems/manual-certificate",id:"adguard-for-android/solving-problems/manual-certificate",title:"\u0421ertificate installation issues on devices with Android 11+",description:"Este art\xedculo trata sobre AdGuard para Android, un bloqueador de anuncios multifuncional que protege tu dispositivo a nivel de sistema. Para ver c\xf3mo funciona, descarga la aplicaci\xf3n AdGuard",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/adguard-for-android/solving-problems/manual-certificate.md",sourceDirName:"adguard-for-android/solving-problems",slug:"/adguard-for-android/solving-problems/manual-certificate",permalink:"/KnowledgeBase/es/adguard-for-android/solving-problems/manual-certificate",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBase/edit/master/docs/adguard-for-android/solving-problems/manual-certificate.md",tags:[],version:"current",sidebarPosition:12,frontMatter:{title:"\u0421ertificate installation issues on devices with Android 11+",sidebar_position:12},sidebar:"tutorialSidebar",previous:{title:"Manual installation of the security certificate into the Firefox browser",permalink:"/KnowledgeBase/es/adguard-for-android/solving-problems/firefox-certificates"},next:{title:"Certificate installation in a Secure folder",permalink:"/KnowledgeBase/es/adguard-for-android/solving-problems/secure-folder"}},s={},d=[],c={toc:d};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"Este art\xedculo trata sobre AdGuard para Android, un bloqueador de anuncios multifuncional que protege tu dispositivo a nivel de sistema. Para ver c\xf3mo funciona, ",(0,n.kt)("a",{parentName:"p",href:"https://adguard.com/download.html?auto=true"},"descarga la aplicaci\xf3n AdGuard"))),(0,n.kt)("p",null,"To be able to filter HTTPS traffic (which is extremely important as most ads use HTTPS), AdGuard needs to install a certificate into your device's user storage. On older versions of Android OS this was done automatically, but on Android 11 and later users have to ",(0,n.kt)("a",{parentName:"p",href:"../../overview#https-filtering"},"install it manually"),"."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/public/Adguard/Blog/Android/3-5/cert-en.gif",alt:"Certificate *mobile_border"})),(0,n.kt)("p",null,"If you experience issues during the manual certificate installation (for example, you installed the certificate, but the application keeps ignoring it), you can follow one of the solutions below."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Restart AdGuard."),(0,n.kt)("li",{parentName:"ol"},"Try to install the correct certificate (AdGuard Personal CA) one more time.")),(0,n.kt)("p",null,"If you still encounter a problem and can't install the certificate, please contact our support team at ",(0,n.kt)("a",{parentName:"p",href:"mailto:support@adguard.com"},"support@adguard.com"),"."))}u.isMDXComponent=!0}}]);