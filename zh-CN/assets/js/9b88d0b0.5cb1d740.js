"use strict";(self.webpackChunkadguard_knowledge_base=self.webpackChunkadguard_knowledge_base||[]).push([[8255],{4137:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>m});var o=t(7294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function d(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,o,n=function(e,r){if(null==e)return{};var t,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var s=o.createContext({}),l=function(e){var r=o.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):d(d({},r),e)),t},p=function(e){var r=l(e.components);return o.createElement(s.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},u=o.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=l(t),m=n,b=u["".concat(s,".").concat(m)]||u[m]||c[m]||a;return t?o.createElement(b,d(d({ref:r},p),{},{components:t})):o.createElement(b,d({ref:r},p))}));function m(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,d=new Array(a);d[0]=u;var i={};for(var s in r)hasOwnProperty.call(r,s)&&(i[s]=r[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,d[1]=i;for(var l=2;l<a;l++)d[l]=t[l];return o.createElement.apply(null,d)}return o.createElement.apply(null,t)}u.displayName="MDXCreateElement"},3048:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>d,default:()=>c,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var o=t(7462),n=(t(7294),t(4137));const a={title:"\u5b89\u88c5\u65b9\u5f0f",sidebar_position:2},d=void 0,i={unversionedId:"adguard-browser-extension/installation",id:"adguard-browser-extension/installation",title:"\u5b89\u88c5\u65b9\u5f0f",description:"\u8fd9\u7bc7\u6587\u7ae0\u662f\u5173\u4e8e AdGuard \u6d4f\u89c8\u5668\u6269\u5c55\uff0c\u5b83\u53ea\u80fd\u4fdd\u62a4\u7528\u6237\u7684\u6d4f\u89c8\u5668\u3002 \u5982\u679c\u9700\u8981\u4fdd\u62a4\u6574\u4e2a\u8bbe\u5907\uff0c\u8bf7\u524d\u5f80\u4e0b\u8f7d AdGuard \u5e94\u7528\u7a0b\u5e8f",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/adguard-browser-extension/installation.md",sourceDirName:"adguard-browser-extension",slug:"/adguard-browser-extension/installation",permalink:"/KnowledgeBase/zh-CN/adguard-browser-extension/installation",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBase/edit/master/docs/adguard-browser-extension/installation.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"\u5b89\u88c5\u65b9\u5f0f",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"\u529f\u80fd\u6982\u89c8",permalink:"/KnowledgeBase/zh-CN/adguard-browser-extension/overview"},next:{title:"\u6574\u5408\u6a21\u5f0f\uff08\u65e7\u7248\uff09",permalink:"/KnowledgeBase/zh-CN/adguard-browser-extension/integration-mode"}},s={},l=[{value:"How to install AdGuard Browser Extension for Google Chrome or Chromium browsers",id:"how-to-install-adguard-browser-extension-for-google-chrome-or-chromium-browsers",level:2},{value:"How to install AdGuard Browser Extension for Opera",id:"how-to-install-adguard-browser-extension-for-opera",level:2},{value:"How to install AdGuard Browser Extension for Firefox",id:"how-to-install-adguard-browser-extension-for-firefox",level:2},{value:"How to install AdGuard Browser Extension for Yandex Browser",id:"how-to-install-adguard-browser-extension-for-yandex-browser",level:2},{value:"How to install AdGuard Browser Extension for Microsoft Edge",id:"how-to-install-adguard-browser-extension-for-microsoft-edge",level:2},{value:"How to install AdGuard Browser Extension for Safari",id:"how-to-install-adguard-browser-extension-for-safari",level:2}],p={toc:l};function c(e){let{components:r,...t}=e;return(0,n.kt)("wrapper",(0,o.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"\u8fd9\u7bc7\u6587\u7ae0\u662f\u5173\u4e8e AdGuard \u6d4f\u89c8\u5668\u6269\u5c55\uff0c\u5b83\u53ea\u80fd\u4fdd\u62a4\u7528\u6237\u7684\u6d4f\u89c8\u5668\u3002 \u5982\u679c\u9700\u8981\u4fdd\u62a4\u6574\u4e2a\u8bbe\u5907\uff0c\u8bf7\u524d\u5f80",(0,n.kt)("a",{parentName:"p",href:"https://agrd.io/download-kb-adblock"},"\u4e0b\u8f7d AdGuard \u5e94\u7528\u7a0b\u5e8f"))),(0,n.kt)("h2",{id:"how-to-install-adguard-browser-extension-for-google-chrome-or-chromium-browsers"},"How to install AdGuard Browser Extension for Google Chrome or Chromium browsers"),(0,n.kt)("p",null,"Open the extension's page in ",(0,n.kt)("a",{parentName:"p",href:"https://agrd.io/extension_chrome"},"Chrome Web Store")," and click ",(0,n.kt)("em",{parentName:"p"},"Add to Chrome"),"."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_chrome.png",alt:"AdGuard Browser Extension in Chrome Web Store *border"})),(0,n.kt)("p",null,"In the opened dialog box, click ",(0,n.kt)("em",{parentName:"p"},"Add extension"),"."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_chrome1.png",alt:"Chrome Web Store \u4e2d\u7684\u5bf9\u8bdd\u6846 *border"})),(0,n.kt)("h2",{id:"how-to-install-adguard-browser-extension-for-opera"},"How to install AdGuard Browser Extension for Opera"),(0,n.kt)("p",null,"\u6253\u5f00 ",(0,n.kt)("a",{parentName:"p",href:"https://agrd.io/extension_opera"},"addons.opera.com")," \u9875\u9762\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_opera.png",alt:"AdGuard Browser Extension in Opera addons *border"})),(0,n.kt)("p",null,"Click ",(0,n.kt)("em",{parentName:"p"},"Add to Opera"),"."),(0,n.kt)("h2",{id:"how-to-install-adguard-browser-extension-for-firefox"},"How to install AdGuard Browser Extension for Firefox"),(0,n.kt)("p",null,"\u6253\u5f00 ",(0,n.kt)("a",{parentName:"p",href:"https://agrd.io/extension_firefox"},"addons.mozilla.org")," \u7f51\u9875\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_firefox.png",alt:"AdGuard Browser Extension in Firefox add-ons *border"})),(0,n.kt)("p",null,"Click ",(0,n.kt)("em",{parentName:"p"},"Add to Firefox"),"."),(0,n.kt)("h2",{id:"how-to-install-adguard-browser-extension-for-yandex-browser"},"How to install AdGuard Browser Extension for Yandex Browser"),(0,n.kt)("p",null,"Click the browser settings button in the upper right corner of the browser, then choose ",(0,n.kt)("em",{parentName:"p"},"Add-ons")," in the drop-down menu."),(0,n.kt)("p",null,"Scroll down to find AdGuard, then click ",(0,n.kt)("em",{parentName:"p"},"Install"),"."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_yandex.png",alt:"AdGuard Browser Extension in Yandex Add-ons *border"})),(0,n.kt)("h2",{id:"how-to-install-adguard-browser-extension-for-microsoft-edge"},"How to install AdGuard Browser Extension for Microsoft Edge"),(0,n.kt)("p",null,"Find AdGuard Browser Extension in the ",(0,n.kt)("a",{parentName:"p",href:"https://agrd.io/extension_edge"},"Edge Add-ons store")," and click ",(0,n.kt)("em",{parentName:"p"},"Get"),"."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_edge.png",alt:"AdGuard Browser Extension in Edge Add-ons *border"})),(0,n.kt)("p",null,"In the opened dialog window, press ",(0,n.kt)("em",{parentName:"p"},"Add extension"),"."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_edge1.png",alt:"Edge \u5bf9\u8bdd\u6846\u7a97\u53e3 *border"})),(0,n.kt)("p",null,"Alternatively, you can install AdGuard Browser Extension for Edge from the ",(0,n.kt)("a",{parentName:"p",href:"https://agrd.io/extension_chrome"},"Chrome Web Store"),". \u5728 Edge \u6d4f\u89c8\u5668\u4e2d\u6253\u5f00 Chrome \u7684\u7f51\u9875\uff0c\u5728\u9875\u9762\u9876\u90e8\u7684\u6a2a\u5e45\u4e0a\u9009\u62e9\u300c",(0,n.kt)("em",{parentName:"p"},"\u5141\u8bb8\u6765\u81ea\u5176\u4ed6\u5e94\u7528\u5546\u5e97\u7684\u6269\u5c55\u7a0b\u5e8f"),"\u300d\uff08Allow extensions from other stores\uff09\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/edge_banner.jpg",alt:"\u5728 Chrome Web Store \u4e0a\u7684 Edge \u6a2a\u5e45 *border"})),(0,n.kt)("p",null,"\u5728\u5f39\u51fa\u7684\u5bf9\u8bdd\u6846\u4e2d\uff0c\u70b9\u51fb\u300c",(0,n.kt)("em",{parentName:"p"},"\u5141\u8bb8"),"\u300d\uff08Allow\uff09\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/allow_from_stores.jpg",alt:'Edge \u5bf9\u8bdd\u6846"\u5141\u8bb8\u6765\u81ea\u5176\u4ed6\u5e94\u7528\u5546\u5e97\u7684\u6269\u5c55\u7a0b\u5e8f"'})),(0,n.kt)("p",null,"\u70b9\u51fb\u300c",(0,n.kt)("em",{parentName:"p"},"\u6dfb\u52a0\u5230 Chrome"),"\u300d\uff08Add to Chrome\uff09\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/add_to_chrome.jpg",alt:"\u6dfb\u52a0\u5230 Chrome \u6309\u94ae *border"})),(0,n.kt)("p",null,"In the opened dialog window, click ",(0,n.kt)("em",{parentName:"p"},"Add extension")," to install AdGuard Browser Extension."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/add_to_edge.jpg",alt:"\u6dfb\u52a0\u5230 Edge \u6309\u94ae"})),(0,n.kt)("h2",{id:"how-to-install-adguard-browser-extension-for-safari"},"How to install AdGuard Browser Extension for Safari"),(0,n.kt)("p",null,"\u9002\u7528\u4e8e Safari \u7684 AdGuard \u4e0d\u662f\u4e00\u822c\u610f\u4e49\u4e0a\u7684\u6d4f\u89c8\u5668\u6269\u5c55\u3002 You can read more about it in a ",(0,n.kt)("a",{parentName:"p",href:"/adguard-for-safari/overview"},"dedicated article"),". \u6216\u8005\u60a8\u53ef\u4ee5\u76f4\u63a5\u4ece\u672c\u7f51\u9875",(0,n.kt)("a",{parentName:"p",href:"https://agrd.io/safari_release"},"\u4e0b\u8f7d\u5b89\u88c5\u6587\u4ef6"),"\u3002"))}c.isMDXComponent=!0}}]);