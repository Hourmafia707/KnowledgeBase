"use strict";(self.webpackChunkadguard_knowledge_base=self.webpackChunkadguard_knowledge_base||[]).push([[5720],{4137:(e,r,a)=>{a.d(r,{Zo:()=>p,kt:()=>g});var i=a(7294);function o(e,r,a){return r in e?Object.defineProperty(e,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[r]=a,e}function t(e,r){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);r&&(i=i.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),a.push.apply(a,i)}return a}function n(e){for(var r=1;r<arguments.length;r++){var a=null!=arguments[r]?arguments[r]:{};r%2?t(Object(a),!0).forEach((function(r){o(e,r,a[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):t(Object(a)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(a,r))}))}return e}function l(e,r){if(null==e)return{};var a,i,o=function(e,r){if(null==e)return{};var a,i,o={},t=Object.keys(e);for(i=0;i<t.length;i++)a=t[i],r.indexOf(a)>=0||(o[a]=e[a]);return o}(e,r);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(i=0;i<t.length;i++)a=t[i],r.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=i.createContext({}),u=function(e){var r=i.useContext(s),a=r;return e&&(a="function"==typeof e?e(r):n(n({},r),e)),a},p=function(e){var r=u(e.components);return i.createElement(s.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return i.createElement(i.Fragment,{},r)}},c=i.forwardRef((function(e,r){var a=e.components,o=e.mdxType,t=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(a),g=o,f=c["".concat(s,".").concat(g)]||c[g]||d[g]||t;return a?i.createElement(f,n(n({ref:r},p),{},{components:a})):i.createElement(f,n({ref:r},p))}));function g(e,r){var a=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var t=a.length,n=new Array(t);n[0]=c;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,n[1]=l;for(var u=2;u<t;u++)n[u]=a[u];return i.createElement.apply(null,n)}return i.createElement.apply(null,a)}c.displayName="MDXCreateElement"},5159:(e,r,a)=>{a.r(r),a.d(r,{assets:()=>s,contentTitle:()=>n,default:()=>d,frontMatter:()=>t,metadata:()=>l,toc:()=>u});var i=a(7462),o=(a(7294),a(4137));const t={title:"Come raccogliere i registri in AdGuard per Safari",sidebar_position:4},n=void 0,l={unversionedId:"adguard-for-safari/solving-problems/logs",id:"adguard-for-safari/solving-problems/logs",title:"Come raccogliere i registri in AdGuard per Safari",description:"Questo articolo riguarda AdGuard per Safari, che protegge solo il tuo browser Safari. Per proteggere l'intero dispositivo, scarica l'app AdGuard",source:"@site/i18n/it/docusaurus-plugin-content-docs/current/adguard-for-safari/solving-problems/logs.md",sourceDirName:"adguard-for-safari/solving-problems",slug:"/adguard-for-safari/solving-problems/logs",permalink:"/KnowledgeBase/it/adguard-for-safari/solving-problems/logs",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBase/edit/master/docs/adguard-for-safari/solving-problems/logs.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Come raccogliere i registri in AdGuard per Safari",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Il filtraggio non si interrompe quando AdGuard per Safari \xe8 disabilitato",permalink:"/KnowledgeBase/it/adguard-for-safari/solving-problems/filters-after-disable"},next:{title:"AdGuard per Safari non funziona nelle schede private su macOS Sonoma",permalink:"/KnowledgeBase/it/adguard-for-safari/solving-problems/private-sonoma"}},s={},u=[{value:"Come raccogliere i registri",id:"come-raccogliere-i-registri",level:3}],p={toc:u};function d(e){let{components:r,...a}=e;return(0,o.kt)("wrapper",(0,i.Z)({},p,a,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Questo articolo riguarda AdGuard per Safari, che protegge solo il tuo browser Safari. Per proteggere l'intero dispositivo, ",(0,o.kt)("a",{parentName:"p",href:"https://agrd.io/download-kb-adblock"},"scarica l'app AdGuard"))),(0,o.kt)("p",null,"Per analizzare e diagnosticare vari problemi che potrebbero verificarsi con AdGuard per Safari, il servizio di supporto AdGuard potrebbe aver bisogno dei suoi file di registro. Questi file contengono registrazioni di errori e altri eventi software. Di seguito sono riportate brevi istruzioni su come raccogliere i registri e inviarli al supporto, se necessario."),(0,o.kt)("h3",{id:"come-raccogliere-i-registri"},"Come raccogliere i registri"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Apri l'app AdGuard per Safari."),(0,o.kt)("li",{parentName:"ol"},"Scorri verso il basso e fai clic su ",(0,o.kt)("em",{parentName:"li"},"Esporta registri"),"."),(0,o.kt)("li",{parentName:"ol"},"Scegli una posizione in cui salvare il file .zip e fai clic su ",(0,o.kt)("em",{parentName:"li"},"Salva"),".")),(0,o.kt)("p",null,"Ora puoi inviare questo file a support\\@adguard.com o allegarlo alla segnalazione di bug su GitHub:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Apri il ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/AdguardTeam/AdGuardForSafari/issues"},"repo GitHub di AdGuard per Safari")," e fai clic su ",(0,o.kt)("em",{parentName:"li"},"Nuovo problema"),"."),(0,o.kt)("li",{parentName:"ol"},"Invia i registri a devteam\\@adguard.com. Includi l'ora del bug e allega un link al tuo problema o il suo numero (appare come #numero accanto al titolo).\nIn alternativa, puoi caricare il file di registro su Google Drive e inviarlo a devteam\\@adguard.com. Aggiungi il link del file al tuo problema su GitHub.")))}d.isMDXComponent=!0}}]);