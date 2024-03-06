"use strict";(self.webpackChunkadguard_knowledge_base=self.webpackChunkadguard_knowledge_base||[]).push([[333],{4137:(e,r,n)=>{n.d(r,{Zo:()=>u,kt:()=>f});var t=n(7294);function i(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function a(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function o(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?a(Object(n),!0).forEach((function(r){i(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function l(e,r){if(null==e)return{};var n,t,i=function(e,r){if(null==e)return{};var n,t,i={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(i[n]=e[n]);return i}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var d=t.createContext({}),s=function(e){var r=t.useContext(d),n=r;return e&&(n="function"==typeof e?e(r):o(o({},r),e)),n},u=function(e){var r=s(e.components);return t.createElement(d.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},p=t.forwardRef((function(e,r){var n=e.components,i=e.mdxType,a=e.originalType,d=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(n),f=i,m=p["".concat(d,".").concat(f)]||p[f]||c[f]||a;return n?t.createElement(m,o(o({ref:r},u),{},{components:n})):t.createElement(m,o({ref:r},u))}));function f(e,r){var n=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=p;var l={};for(var d in r)hasOwnProperty.call(r,d)&&(l[d]=r[d]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var s=2;s<a;s++)o[s]=n[s];return t.createElement.apply(null,o)}return t.createElement.apply(null,n)}p.displayName="MDXCreateElement"},2208:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>d,contentTitle:()=>o,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var t=n(7462),i=(n(7294),n(4137));const a={title:"Filterung im Tor-Browser einrichten",sidebar_position:10},o=void 0,l={unversionedId:"adguard-for-mac/solving-problems/tor-filtering",id:"adguard-for-mac/solving-problems/tor-filtering",title:"Filterung im Tor-Browser einrichten",description:"Dieser Artikel behandelt AdGuard f\xfcr Mac, einen multifunktionalen Werbeblocker, der Ihr Ger\xe4t auf Systemebene sch\xfctzt. Um zu sehen, wie die App funktioniert, laden Sie AdGuard f\xfcr Mac herunter",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/adguard-for-mac/solving-problems/tor-filtering.md",sourceDirName:"adguard-for-mac/solving-problems",slug:"/adguard-for-mac/solving-problems/tor-filtering",permalink:"/KnowledgeBase/de/adguard-for-mac/solving-problems/tor-filtering",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBase/edit/master/docs/adguard-for-mac/solving-problems/tor-filtering.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{title:"Filterung im Tor-Browser einrichten",sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"Erweiterte Einstellungen",permalink:"/KnowledgeBase/de/adguard-for-mac/solving-problems/advanced-settings"},next:{title:"Funktions\xfcbersicht",permalink:"/KnowledgeBase/de/adguard-for-android/overview"}},d={},s=[],u={toc:s};function c(e){let{components:r,...n}=e;return(0,i.kt)("wrapper",(0,t.Z)({},u,n,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Dieser Artikel behandelt AdGuard f\xfcr Mac, einen multifunktionalen Werbeblocker, der Ihr Ger\xe4t auf Systemebene sch\xfctzt. Um zu sehen, wie die App funktioniert, ",(0,i.kt)("a",{parentName:"p",href:"https://agrd.io/download-kb-adblock"},"laden Sie AdGuard f\xfcr Mac herunter"))),(0,i.kt)("p",null,"Standardm\xe4\xdfig ist der Tor-Browser in der Liste der von AdGuard gefilterten Apps enthalten. Um es zu filtern, muss AdGuard jedoch die Sicherheitseinstellungen von Tor \xe4ndern. Dadurch vertraut Tor dem CA-Zertifikat von AdGuard."),(0,i.kt)("p",null,"Wenn Sie sich entscheiden, den Tor-Browser zu filtern, und ihn in ",(0,i.kt)("em",{parentName:"p"},"Preferences")," \u2192 ",(0,i.kt)("em",{parentName:"p"},"Netzwerk")," \u2192 ",(0,i.kt)("em",{parentName:"p"},"Anwendungen")," aktivieren, wird Ihnen AdGuard dieses Dialogfeld zeigen:"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/kb/ad_blocker/mac/tor-setup.png",alt:"AdGuard-Dialogfeld"})),(0,i.kt)("p",null,"Durch die Aktualisierung der Tor-Einstellungen stellt AdGuard Folgendes ein:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"security.enterprise_roots.enabled"),": true"),(0,i.kt)("p",null,"Dadurch wird Tor Stammzertifikate vertrauen. ",(0,i.kt)("a",{parentName:"p",href:"https://support.mozilla.org/en-US/kb/setting-certificate-authorities-firefox"},"Mehr erfahren")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"security.cert_pinning.enforcement_level"),": 1"),(0,i.kt)("p",null,"Public Key Pinning ist eine Sicherheitsma\xdfnahme, mit der Websites sicherstellen k\xf6nnen, dass die Verbindung zwischen einer Website und einem Benutzer authentisch ist. Dabei ver\xf6ffentlicht die Website eine Liste mit \xf6ffentlichen Schl\xfcsseln oder Pins, denen sie vertraut. Wenn die Erzwingungsebene auf 1 festgelegt ist, wird das Anheften f\xfcr benutzerdefinierte Zertifizierungsstellen nicht erzwungen. ",(0,i.kt)("a",{parentName:"p",href:"https://wiki.mozilla.org/SecurityEngineering/Public_Key_Pinning"},"Mehr erfahren")),(0,i.kt)("p",null,"Um die \xc4nderungen zu \xfcbernehmen, m\xfcssen Sie den Tor-Browser neu starten."),(0,i.kt)("p",null,"Wenn Sie diese Einstellungen manuell \xe4ndern, wird die Tor-Filterung gestoppt."))}c.isMDXComponent=!0}}]);