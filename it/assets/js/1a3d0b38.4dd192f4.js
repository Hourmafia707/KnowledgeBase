"use strict";(self.webpackChunkadguard_knowledge_base=self.webpackChunkadguard_knowledge_base||[]).push([[7993],{4137:(e,a,t)=>{t.d(a,{Zo:()=>m,kt:()=>d});var r=t(7294);function i(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function n(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){i(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,r,i=function(e,a){if(null==e)return{};var t,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],a.indexOf(t)>=0||(i[t]=e[t]);return i}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=r.createContext({}),s=function(e){var a=r.useContext(p),t=a;return e&&(t="function"==typeof e?e(a):n(n({},a),e)),t},m=function(e){var a=s(e.components);return r.createElement(p.Provider,{value:a},e.children)},u={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},c=r.forwardRef((function(e,a){var t=e.components,i=e.mdxType,l=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=s(t),d=i,k=c["".concat(p,".").concat(d)]||c[d]||u[d]||l;return t?r.createElement(k,n(n({ref:a},m),{},{components:t})):r.createElement(k,n({ref:a},m))}));function d(e,a){var t=arguments,i=a&&a.mdxType;if("string"==typeof e||i){var l=t.length,n=new Array(l);n[0]=c;var o={};for(var p in a)hasOwnProperty.call(a,p)&&(o[p]=a[p]);o.originalType=e,o.mdxType="string"==typeof e?e:i,n[1]=o;for(var s=2;s<l;s++)n[s]=t[s];return r.createElement.apply(null,n)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},3426:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>p,contentTitle:()=>n,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var r=t(7462),i=(t(7294),t(4137));const l={title:"Come raccogliere un file HAR",sidebar_position:1},n=void 0,o={unversionedId:"guides/collect-har-file",id:"guides/collect-har-file",title:"Come raccogliere un file HAR",description:"I file HAR aiutano i nostri team di supporto a risolvere problemi complessi. Per creare questi file, consigliamo di utilizzare Chrome o Firefox. Tuttavia, anche IE 11, Edge e Safari forniscono la funzionalit\xe0 di generazione ed esportazione dei file .har.",source:"@site/i18n/it/docusaurus-plugin-content-docs/current/guides/collect-har-file.md",sourceDirName:"guides",slug:"/guides/collect-har-file",permalink:"/KnowledgeBase/it/guides/collect-har-file",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBase/edit/master/docs/guides/collect-har-file.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Come raccogliere un file HAR",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Credits & Acknowledgements",permalink:"/KnowledgeBase/it/miscellaneous/acknowledgements"},next:{title:"Come installare un certificato proxy",permalink:"/KnowledgeBase/it/guides/proxy-certificate"}},p={},s=[{value:"Chrome",id:"chrome",level:2},{value:"Edge",id:"edge",level:2},{value:"Firefox",id:"firefox",level:2},{value:"Internet Explorer 11",id:"ie11",level:2},{value:"Safari",id:"safari",level:2},{value:"Android",id:"android",level:2},{value:"Windows",id:"windows",level:2}],m={toc:s};function u(e){let{components:a,...t}=e;return(0,i.kt)("wrapper",(0,r.Z)({},m,t,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"I file HAR aiutano i nostri team di supporto a risolvere problemi complessi. Per creare questi file, consigliamo di utilizzare Chrome o Firefox. Tuttavia, anche IE 11, Edge e Safari forniscono la funzionalit\xe0 di generazione ed esportazione dei file ",(0,i.kt)("inlineCode",{parentName:"p"},".har"),"."),(0,i.kt)("h2",{id:"chrome"},"Chrome"),(0,i.kt)("p",null,"Per creare un file HAR in Chrome, segui questi passaggi:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Vai all'URL in cui si verifica il problema. Non riprodurre ancora il problema.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Apri gli ",(0,i.kt)("strong",{parentName:"p"},"Strumenti per sviluppatori"),":"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Dal menu: ",(0,i.kt)("strong",{parentName:"li"},"Menu \u2192 Altri Strumenti \u2192 Strumenti per sviluppatori"),"."),(0,i.kt)("li",{parentName:"ul"},"Tastiera: ",(0,i.kt)("strong",{parentName:"li"},"Ctrl+Shift+C")," o ",(0,i.kt)("strong",{parentName:"li"},"Ctrl+Alt+I"),", o ",(0,i.kt)("strong",{parentName:"li"},"\u2325+\u2318+I per Mac"),"."))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Clicca la ",(0,i.kt)("strong",{parentName:"p"},"scheda Rete"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Individua il pulsante rotondo in alto a sinistra nella scheda Rete e conferma che sia in modalit\xe0 di registrazione (rossa). Se \xe8 grigia, cliccala per farla diventare rossa e avviare la registrazione.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Utilizza il pulsante ",(0,i.kt)("strong",{parentName:"p"},"Cancella")," (il pulsante circolare attraversato da una linea, affianco al pulsante di registrazione), per cancellare tutte le attivit\xe0 precedenti.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Seleziona la casella ",(0,i.kt)("strong",{parentName:"p"},"Conserva registro")," sulla scheda Rete.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Spunta la casella ",(0,i.kt)("strong",{parentName:"p"},"Disabilita cache"),"."),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/Kb/ad_blocker/guides/chrome.png",alt:"Chrome"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Riproduci i passaggi per causare il problema.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Salva la sessione come un file .har cliccando con il destro sulla griglia e selezionando ",(0,i.kt)("strong",{parentName:"p"},"Salva come HAR con contenuti"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Invialo al supporto di AdGuard (",(0,i.kt)("a",{parentName:"p",href:"mailto:support@adguard.com"},"support@adguard.com"),") con una spiegazione dettagliata del problema. Anche degli screenshot di supporto potrebbero essere utili."))),(0,i.kt)("h2",{id:"edge"},"Edge"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Vai all'URL in cui si verifica il problema. Non riprodurre ancora il problema.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Apri gli ",(0,i.kt)("strong",{parentName:"p"},"Strumenti per sviluppatori"),":"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Dal menu: ",(0,i.kt)("strong",{parentName:"li"},"Menu \u2192 Altri Strumenti \u2192 Strumenti per sviluppatori"),"."),(0,i.kt)("li",{parentName:"ul"},"Tastiera: ",(0,i.kt)("strong",{parentName:"li"},"Ctrl+Shift+C")," o ",(0,i.kt)("strong",{parentName:"li"},"Ctrl+Alt+I"),", o ",(0,i.kt)("strong",{parentName:"li"},"\u2325+\u2318+I per Mac"),"."))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Clicca la ",(0,i.kt)("strong",{parentName:"p"},"scheda Rete"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Individua il pulsante rotondo in alto a sinistra nella scheda Rete e conferma che sia in modalit\xe0 di registrazione (rossa). Se \xe8 grigia, cliccala per farla diventare rossa e avviare la registrazione.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Utilizza il pulsante ",(0,i.kt)("strong",{parentName:"p"},"Cancella")," (il pulsante circolare attraversato da una linea, affianco al pulsante di registrazione), per cancellare tutte le attivit\xe0 precedenti.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Seleziona la casella ",(0,i.kt)("strong",{parentName:"p"},"Conserva registro")," sulla scheda Rete.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Spunta la casella ",(0,i.kt)("strong",{parentName:"p"},"Disabilita cache"),"."),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/Kb/ad_blocker/guides/edge.png",alt:"Edge"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Riproduci i passaggi per causare il problema.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Salva la sessione come un file .har cliccando con il destro sulla griglia e selezionando ",(0,i.kt)("strong",{parentName:"p"},"Salva come HAR con contenuti"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Invialo al supporto di AdGuard (",(0,i.kt)("a",{parentName:"p",href:"mailto:support@adguard.com"},"support@adguard.com"),") con una spiegazione dettagliata del problema. Anche degli screenshot di supporto potrebbero essere utili."))),(0,i.kt)("h2",{id:"firefox"},"Firefox"),(0,i.kt)("p",null,"Per creare un file HAR in Firefox, segui questi passaggi:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Vai all'URL in cui si verifica il problema. Non riprodurre ancora il problema.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Apri gli Strumenti per sviluppatori nella modalit\xe0 ",(0,i.kt)("strong",{parentName:"p"},"Rete"),":"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Dal menu: ",(0,i.kt)("strong",{parentName:"li"},"Menu \u2192 Sviluppatore Web \u2192 Rete"),"."),(0,i.kt)("li",{parentName:"ul"},"Tastiera: ",(0,i.kt)("strong",{parentName:"li"},"Ctrl+Shift+C"),", o ",(0,i.kt)("strong",{parentName:"li"},"\u2325+\u2318+E (Mac)"),"."))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Nota il pulsante ",(0,i.kt)("strong",{parentName:"p"},"Riproduci/Pausa")," in alto a sinistra alla scheda di Rete."),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Il pulsante dovrebbe essere in modalit\xe0 riproduzione."))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Se sulla griglia \xe8 correntemente mostrata qualsiasi informazione, cancellala cliccando sul pulsante ",(0,i.kt)("strong",{parentName:"p"},"Svuota cestino"),", affianco al pulsante riproduci/pausa.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Seleziona la casella ",(0,i.kt)("strong",{parentName:"p"},"Conserva Registri"),", sulla scheda Rete.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Spunta la casella ",(0,i.kt)("strong",{parentName:"p"},"Disabilita cache"),"."),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/Kb/ad_blocker/guides/firefox.png",alt:"Firefox"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Riproduci i passaggi per causare il problema.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Salva la sessione come un file .har, cliccando con il destro sulla griglia e selezionando ",(0,i.kt)("strong",{parentName:"p"},"Salva tutto come HAR"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Invialo al supporto di AdGuard (",(0,i.kt)("a",{parentName:"p",href:"mailto:support@adguard.com"},"support@adguard.com"),") con una spiegazione dettagliata del problema. Anche degli screenshot di supporto potrebbero essere utili."))),(0,i.kt)("h2",{id:"ie11"},"Internet Explorer 11"),(0,i.kt)("p",null,"Per creare un file HAR in Internet Explorer 11, segui questi passaggi:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Vai all'URL in cui si verifica il problema. Non riprodurre ancora il problema.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Apri gli Strumenti per sviluppatori nella modalit\xe0 ",(0,i.kt)("strong",{parentName:"p"},"Rete"),":"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Dal menu a ingranaggio degli Strumenti: ",(0,i.kt)("strong",{parentName:"li"},"Strumenti per sviluppatori")," \u2192 ",(0,i.kt)("strong",{parentName:"li"},"scheda Rete"),"."),(0,i.kt)("li",{parentName:"ul"},"Tastiera: ",(0,i.kt)("strong",{parentName:"li"},"F12 \u2192 Rete"),"."))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Nota il pulsante di avvio della sessione di profilazione ",(0,i.kt)("strong",{parentName:"p"},"Riproduci")," e di arresto della profilazione ",(0,i.kt)("strong",{parentName:"p"},"Arresta")," in alto a sinistra, nella scheda Rete."),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},'Il pulsante "Riproduci" sar\xe0 grigio durante la registrazione e il pulsante "Pausa" sar\xe0 rosso. Attiva la modalit\xe0 ',(0,i.kt)("strong",{parentName:"li"},"Riproduci"),"."))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Cancella tutte le informazioni sulla sessione, visualizzate nella griglia inferiore, utilizzando il pulsante ",(0,i.kt)("strong",{parentName:"p"},"Cancella sessione"),", sulla scheda Rete. Passa sulle icone per vederne i nomi."),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Il pulsante ",(0,i.kt)("strong",{parentName:"li"},"Cancella sessione")," \xe8 un'icona a tre linee, con una x sopra di esse."))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Spunta la casella ",(0,i.kt)("strong",{parentName:"p"},"Disabilita cache"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Riproduci i passaggi per causare il problema.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Salva la sessione come un file .har cliccando il pulsante ",(0,i.kt)("strong",{parentName:"p"},"Salva su disco")," (Esporta come HAR), sulla scheda Rete.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Invialo al supporto di AdGuard (",(0,i.kt)("a",{parentName:"p",href:"mailto:support@adguard.com"},"support@adguard.com"),") con una spiegazione dettagliata del problema. Anche degli screenshot di supporto potrebbero essere utili."))),(0,i.kt)("h2",{id:"safari"},"Safari"),(0,i.kt)("p",null,"Per creare un file HAR in Safari, segui questi passaggi:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Cerca il menu ",(0,i.kt)("strong",{parentName:"p"},"Sviluppa")," nella barra dei menu superiore di Safari."),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Se non \xe8 visibile, attivalo andando in ",(0,i.kt)("strong",{parentName:"li"},"Safari \u2192 Impostazioni \u2192 Avanzate"),"."),(0,i.kt)("li",{parentName:"ul"},"Spunta la casella in basso, affianco a ",(0,i.kt)("strong",{parentName:"li"},"Mostra menu Sviluppa nella barra dei menu"),"."))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Vai all'URL in cui si verifica il problema. Non riprodurre ancora il problema.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Apri la scheda ",(0,i.kt)("strong",{parentName:"p"},"Rete")," nel Web Inspector:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Dal menu: ",(0,i.kt)("strong",{parentName:"li"},"Sviluppa \u2192 Mostra Web Inspector \u2192 Rete"),"."),(0,i.kt)("li",{parentName:"ul"},"Tastiera: ",(0,i.kt)("strong",{parentName:"li"},"\u2325+\u2318+I \u2192 Rete")))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Spunta la casella ",(0,i.kt)("strong",{parentName:"p"},"Conserva Registro")," sul lato sinistro della scheda Rete, nel menu ",(0,i.kt)("strong",{parentName:"p"},"Altre opzioni di filtraggio..."),"."),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/kb/ad_blocker/safari/preserve-log.png",alt:"Safari"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Cancella gli elementi correnti di Rete cliccando sull'icona ",(0,i.kt)("strong",{parentName:"p"},"Svuota Cestino"),", all'estrema destra della scheda Rete."),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Tastiera: ",(0,i.kt)("strong",{parentName:"li"},"\u2318+K")))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Spunta la casella ",(0,i.kt)("strong",{parentName:"p"},"Disabilita cache"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Riproduci i passaggi per causare il problema.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Salva la sessione come un file .har, cliccando sull'icona ",(0,i.kt)("strong",{parentName:"p"},"Esporta"),", affianco all'icona ",(0,i.kt)("strong",{parentName:"p"},"Svuota Cestino"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Invialo al supporto di AdGuard (",(0,i.kt)("a",{parentName:"p",href:"mailto:support@adguard.com"},"support@adguard.com"),") con una spiegazione dettagliata del problema. Anche degli screenshot di supporto potrebbero essere utili."))),(0,i.kt)("h2",{id:"android"},"Android"),(0,i.kt)("p",null,"Per creare dei file HAR, segui questi passaggi:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Apri AdGuard e vai in ",(0,i.kt)("strong",{parentName:"p"},"Impostazioni"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Scegli ",(0,i.kt)("strong",{parentName:"p"},"Avanzate")," nel menu.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Scegli ",(0,i.kt)("strong",{parentName:"p"},"Impostazioni di basso livello"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Attiva ",(0,i.kt)("inlineCode",{parentName:"p"},"pref.har.capture")," (dovrai riavviare la protezione).")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Ora, riproduci il problema: apri l'app, compi le azioni necessarie per far apparire l'annuncio.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Ora, disattiva nuovamente ",(0,i.kt)("inlineCode",{parentName:"p"},"pref.har.capture"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Torna indietro e tocca ",(0,i.kt)("strong",{parentName:"p"},"Esporta registri e informazioni di sistema")," \u2192 ",(0,i.kt)("strong",{parentName:"p"},"Salva"),"."))),(0,i.kt)("h2",{id:"windows"},"Windows"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Apri le ",(0,i.kt)("strong",{parentName:"p"},"Impostazioni*")," \u2192 ",(0,i.kt)("strong",{parentName:"p"},"Impostazioni generali")," \u2192 ",(0,i.kt)("strong",{parentName:"p"},"Impostazioni avanzate")," e scorri in basso.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Spunta la casella ",(0,i.kt)("strong",{parentName:"p"},"Abilita scrittura HAR"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Riproduci il problema.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Vai alle ",(0,i.kt)("strong",{parentName:"p"},"Impostazioni generali")," \u2192 Clicca su ",(0,i.kt)("strong",{parentName:"p"},"Esporta registri")," \u2192 ",(0,i.kt)("strong",{parentName:"p"},"Salva"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Disabilita la scrittura HAR deselezionando la casella corrispondente."))))}u.isMDXComponent=!0}}]);