"use strict";(self.webpackChunkadguard_knowledge_base=self.webpackChunkadguard_knowledge_base||[]).push([[8038],{4137:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>k});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=a.createContext({}),s=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),d=s(n),k=o,v=d["".concat(i,".").concat(k)]||d[k]||u[k]||r;return n?a.createElement(v,l(l({ref:t},m),{},{components:n})):a.createElement(v,l({ref:t},m))}));function k(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=d;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:o,l[1]=p;for(var s=2;s<r;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4773:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>p,toc:()=>s});var a=n(7462),o=(n(7294),n(4137));const r={title:"Probl\xe9my zp\u016fsoben\xe9 v\xedce u\u017eivatelsk\xfdmi profily",sidebar_position:10},l=void 0,p={unversionedId:"adguard-for-android/solving-problems/multiple-user-profiles",id:"adguard-for-android/solving-problems/multiple-user-profiles",title:"Probl\xe9my zp\u016fsoben\xe9 v\xedce u\u017eivatelsk\xfdmi profily",description:"Tento \u010dl\xe1nek popisuje AdGuard pro Android, multifunk\u010dn\xed blok\xe1tor reklam, kter\xfd chr\xe1n\xed va\u0161e za\u0159\xedzen\xed na \xfarovni syst\xe9mu. Chcete-li zjistit, jak funguje, st\xe1hn\u011bte si aplikaci AdGuard",source:"@site/i18n/cs/docusaurus-plugin-content-docs/current/adguard-for-android/solving-problems/multiple-user-profiles.md",sourceDirName:"adguard-for-android/solving-problems",slug:"/adguard-for-android/solving-problems/multiple-user-profiles",permalink:"/KnowledgeBase/cs/adguard-for-android/solving-problems/multiple-user-profiles",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBase/edit/master/docs/adguard-for-android/solving-problems/multiple-user-profiles.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{title:"Probl\xe9my zp\u016fsoben\xe9 v\xedce u\u017eivatelsk\xfdmi profily",sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"Jak chr\xe1nit AdGuard p\u0159ed ukon\u010den\xedm syst\xe9mem",permalink:"/KnowledgeBase/cs/adguard-for-android/solving-problems/background-work"},next:{title:"Ru\u010dn\xed instalace bezpe\u010dnostn\xedho certifik\xe1tu do prohl\xed\u017ee\u010de Firefox",permalink:"/KnowledgeBase/cs/adguard-for-android/solving-problems/firefox-certificates"}},i={},s=[{value:"Probl\xe9my zp\u016fsoben\xe9 v\xedce u\u017eivatelsk\xfdmi profily",id:"probl\xe9my-zp\u016fsoben\xe9-v\xedce-u\u017eivatelsk\xfdmi-profily",level:2},{value:"Probl\xe9my zp\u016fsoben\xe9 pou\u017e\xedv\xe1n\xedm profilu s omezen\xfdm re\u017eimem",id:"probl\xe9my-zp\u016fsoben\xe9-pou\u017e\xedv\xe1n\xedm-profilu-s-omezen\xfdm-re\u017eimem",level:2},{value:"\u0158e\u0161en\xed",id:"\u0159e\u0161en\xed",level:3},{value:"Mo\u017enost 1: Ud\u011blen\xed opr\xe1vn\u011bn\xed aplikaci AdGuard pomoc\xed ADB",id:"mo\u017enost-1-ud\u011blen\xed-opr\xe1vn\u011bn\xed-aplikaci-adguard-pomoc\xed-adb",level:3},{value:"Mo\u017enost 2: Odebr\xe1n\xed <em>U\u017eivatelsk\xe9ho \xfa\u010dtu s omezen\xfdm p\u0159\xedstupem</em>",id:"mo\u017enost-2-odebr\xe1n\xed-u\u017eivatelsk\xe9ho-\xfa\u010dtu-s-omezen\xfdm-p\u0159\xedstupem",level:3},{value:"Mo\u017enost 3: Pou\u017eit\xed AdGuardu v <em>re\u017eimu m\xedstn\xedho HTTP proxy</em> (vy\u017eaduje root)",id:"mo\u017enost-3-pou\u017eit\xed-adguardu-v-re\u017eimu-m\xedstn\xedho-http-proxy-vy\u017eaduje-root",level:3},{value:"Za\u0159\xedzen\xed LG a Samsung",id:"za\u0159\xedzen\xed-lg-a-samsung",level:3},{value:"Samsung",id:"samsung",level:3},{value:"LG",id:"lg",level:3}],m={toc:s};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Tento \u010dl\xe1nek popisuje AdGuard pro Android, multifunk\u010dn\xed blok\xe1tor reklam, kter\xfd chr\xe1n\xed va\u0161e za\u0159\xedzen\xed na \xfarovni syst\xe9mu. Chcete-li zjistit, jak funguje, ",(0,o.kt)("a",{parentName:"p",href:"https://adguard.com/download.html?auto=true"},"st\xe1hn\u011bte si aplikaci AdGuard"))),(0,o.kt)("p",null,"V tomto \u010dl\xe1nku najdete zp\u016fsoby, jak vy\u0159e\u0161it probl\xe9my s AdGuardem, kdy\u017e na sv\xfdch za\u0159\xedzen\xedch Android nastav\xedte ",(0,o.kt)("em",{parentName:"p"},"v\xedce \xfa\u010dt\u016f")," nebo ",(0,o.kt)("em",{parentName:"p"},"omezen\xe9 profily"),"."),(0,o.kt)("h2",{id:"probl\xe9my-zp\u016fsoben\xe9-v\xedce-u\u017eivatelsk\xfdmi-profily"},"Probl\xe9my zp\u016fsoben\xe9 v\xedce u\u017eivatelsk\xfdmi profily"),(0,o.kt)("p",null,"Pokud je v syst\xe9mu Android 9 a nov\u011bj\u0161\xedm nainstalov\xe1na aplikace AdGuard pro v\xedce ne\u017e jeden u\u017eivatelsk\xfd profil v za\u0159\xedzen\xed, mohou se p\u0159i odinstalov\xe1n\xed aplikace vyskytnout probl\xe9my. Po odinstalov\xe1n\xed aplikace AdGuard z jednoho u\u017eivatelsk\xe9ho profilu se aplikace st\xe1le zobraz\xed v seznamu aplikac\xed, ale nebude mo\u017en\xe9 ji odinstalovat nebo znovu nainstalovat. K tomu doch\xe1z\xed, proto\u017ee AdGuard je v za\u0159\xedzen\xed nainstalov\xe1n pro jin\xfd u\u017eivatelsk\xfd profil."),(0,o.kt)("p",null,'Pokud se po ne\xfasp\u011b\u0161n\xe9m pokusu o odstran\u011bn\xed pokus\xedte aplikaci AdGuard znovu nainstalovat, zobraz\xed se chybov\xe1 zpr\xe1va "Aplikaci nelze do za\u0159\xedzen\xed nainstalovat".'),(0,o.kt)("p",null,"Chcete-li tento probl\xe9m vy\u0159e\u0161it, mus\xedte aplikaci odinstalovat pro v\u0161echny u\u017eivatele: p\u0159ejd\u011bte do Nastaven\xed \u2192 V\u0161echny aplikace \u2192 AdGuard. Klepn\u011bte na t\u0159i te\u010dky v prav\xe9m horn\xedm rohu a vyberte ",(0,o.kt)("em",{parentName:"p"},"Odinstalovat pro v\u0161echny u\u017eivatele"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/blog/new/tu49hmultiple_users.png",alt:"Odinstalovat *mobile_border"})),(0,o.kt)("h2",{id:"probl\xe9my-zp\u016fsoben\xe9-pou\u017e\xedv\xe1n\xedm-profilu-s-omezen\xfdm-re\u017eimem"},"Probl\xe9my zp\u016fsoben\xe9 pou\u017e\xedv\xe1n\xedm profilu s omezen\xfdm re\u017eimem"),(0,o.kt)("p",null,"Majitel\xe9 telefon\u016f a tablet\u016f nebo TV s opera\u010dn\xedm syst\xe9mem Android 7+ se mohou pot\xfdkat s probl\xe9mem zp\u016fsoben\xfdm pou\u017e\xedv\xe1n\xedm ",(0,o.kt)("strong",{parentName:"p"},"profilu s Omezen\xfdm re\u017eimem"),". Pokud m\xe1te takov\xfd profil, ",(0,o.kt)("strong",{parentName:"p"},"AdGuard"),", stejn\u011b jako ostatn\xed aplikace vyu\u017e\xedvaj\xedc\xed VPN, z\xedsk\xe1 omezen\xed pro selektivn\xed filtrov\xe1n\xed provozu VPN. V d\u016fsledku toho nem\u016f\u017ee AdGuard spustit ochranu v ",(0,o.kt)("strong",{parentName:"p"},"re\u017eimu lok\xe1ln\xed VPN"),". Jednou z p\u0159\xed\u010din t\xe9to situace m\u016f\u017ee b\xfdt tak\xe9 pou\u017e\xedv\xe1n\xed profilu ",(0,o.kt)("strong",{parentName:"p"},"Du\xe1ln\xed aplikace/Du\xe1ln\xed Messenger")," ve va\u0161em za\u0159\xedzen\xed. N\xed\u017ee jsou pops\xe1na doporu\u010den\xed, kter\xe1 m\u016f\u017eete pou\u017e\xedt v p\u0159\xedpad\u011b v\xfdskytu tohoto probl\xe9mu."),(0,o.kt)("h3",{id:"\u0159e\u0161en\xed"},"\u0158e\u0161en\xed"),(0,o.kt)("p",null,"Probl\xe9m m\u016f\u017eete vy\u0159e\u0161it t\u0159emi zp\u016fsoby:"),(0,o.kt)("h3",{id:"mo\u017enost-1-ud\u011blen\xed-opr\xe1vn\u011bn\xed-aplikaci-adguard-pomoc\xed-adb"},"Mo\u017enost 1: Ud\u011blen\xed opr\xe1vn\u011bn\xed aplikaci AdGuard pomoc\xed ADB"),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Tento p\u0159\xedstup je k dispozici od verze ",(0,o.kt)("strong",{parentName:"p"},"AdGuardu v3.5 nightly 6"),". Pokud pou\u017e\xedv\xe1te star\u0161\xed verzi, m\u016f\u017eete z\xedskat nejnov\u011bj\u0161\xed aktualizace ",(0,o.kt)("a",{parentName:"p",href:"https://adguard.com/adguard-android/overview.html"},"zde"),".")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Aktivace ",(0,o.kt)("strong",{parentName:"li"},"Re\u017eimu pro v\xfdvoj\xe1\u0159e")," a povolen\xed ",(0,o.kt)("strong",{parentName:"li"},"USB lad\u011bn\xed"),":")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"V telefonu otev\u0159ete ",(0,o.kt)("strong",{parentName:"li"},"Nastaven\xed"),";"),(0,o.kt)("li",{parentName:"ul"},"P\u0159ejd\u011bte do sekce ",(0,o.kt)("strong",{parentName:"li"},"Syst\xe9m")," (posledn\xed polo\u017eka v nab\xeddce). V t\xe9to sekci vyhledejte podpolo\u017eku ",(0,o.kt)("strong",{parentName:"li"},"Informace o telefonu"),";"),(0,o.kt)("li",{parentName:"ul"},"Sedmkr\xe1t klepn\u011bte na \u0159\xe1dek ",(0,o.kt)("strong",{parentName:"li"},"\u010c\xedslo sestaven\xed"),". Pot\xe9 se zobraz\xed ozn\xe1men\xed ",(0,o.kt)("strong",{parentName:"li"},"Nyn\xed jste v\xfdvoj\xe1\u0159em")," (v p\u0159\xedpad\u011b pot\u0159eby zadejte k\xf3d pro odem\u010den\xed za\u0159\xedzen\xed);"),(0,o.kt)("li",{parentName:"ul"},"Otev\u0159ete ",(0,o.kt)("strong",{parentName:"li"},"Nastaven\xed syst\xe9mu")," \u2192 ",(0,o.kt)("strong",{parentName:"li"},"Mo\u017enosti pro v\xfdvoj\xe1\u0159e")," \u2192 p\u0159eje\u010fte dol\u016f a zapn\u011bte ",(0,o.kt)("strong",{parentName:"li"},"USB lad\u011bn\xed")," \u2192 po pe\u010dliv\xe9m p\u0159e\u010dten\xed varov\xe1n\xed potvr\u010fte, \u017ee je lad\u011bn\xed povoleno v okn\u011b ",(0,o.kt)("strong",{parentName:"li"},"Povolit lad\u011bn\xed USB"),".")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Pokud m\xe1te n\u011bjak\xe9 pot\xed\u017ee nebo ot\xe1zky, \xfapln\xe9 pokyny naleznete ",(0,o.kt)("a",{parentName:"p",href:"https://developer.android.com/studio/debug/dev-options"},"zde"),".")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://www.xda-developers.com/install-adb-windows-macos-linux/"},"Instalace a konfigurace")," adb; Na platform\u011b Windows mohou majitel\xe9 za\u0159\xedzen\xed ",(0,o.kt)("strong",{parentName:"li"},"Samsung")," pot\u0159ebovat nainstalovat ",(0,o.kt)("a",{parentName:"li",href:"https://developer.samsung.com/mobile/android-usb-driver.html"},"tento n\xe1stroj"),"."),(0,o.kt)("li",{parentName:"ol"},"P\u0159ipojte za\u0159\xedzen\xed pomoc\xed ",(0,o.kt)("strong",{parentName:"li"},"USB kabelu")," k po\u010d\xedta\u010di nebo notebooku, na kter\xfd jste nainstalovali ",(0,o.kt)("strong",{parentName:"li"},"ADB"),";"),(0,o.kt)("li",{parentName:"ol"},"Otev\u0159ete ",(0,o.kt)("strong",{parentName:"li"},"p\u0159\xedkazov\xfd \u0159\xe1dek")," v po\u010d\xedta\u010di:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Cmd.exe"),", pokud pou\u017e\xedv\xe1te ",(0,o.kt)("strong",{parentName:"li"},"Windows"),";"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Terminal"),", pokud pou\u017e\xedv\xe1te ",(0,o.kt)("strong",{parentName:"li"},"macOS"),";")),(0,o.kt)("ol",{start:5},(0,o.kt)("li",{parentName:"ol"},"Zadejet p\u0159\xedkaz ",(0,o.kt)("inlineCode",{parentName:"li"},"adb shell pm grant com.adguard.android android.permission.INTERACT_ACROSS_USERS")," a stiskn\u011bte ",(0,o.kt)("strong",{parentName:"li"},"Enter"),".")),(0,o.kt)("h3",{id:"mo\u017enost-2-odebr\xe1n\xed-u\u017eivatelsk\xe9ho-\xfa\u010dtu-s-omezen\xfdm-p\u0159\xedstupem"},"Mo\u017enost 2: Odebr\xe1n\xed ",(0,o.kt)("em",{parentName:"h3"},"U\u017eivatelsk\xe9ho \xfa\u010dtu s omezen\xfdm p\u0159\xedstupem")),(0,o.kt)("p",null,"Informace o tom, jak spravovat u\u017eivatelsk\xe9 \xfa\u010dty ze za\u0159\xedzen\xed s Androidem, ",(0,o.kt)("a",{parentName:"p",href:"https://support.google.com/a/answer/6223444?hl=en"},"naleznete zde"),"."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},":::note")),(0,o.kt)("p",null,"V n\u011bkter\xfdch p\u0159\xedpadech jsou u\u017eivatelsk\xe9 \xfa\u010dty s omezen\xfdm p\u0159\xedstupem vytvo\u0159eny implicitn\u011b a nelze je odstranit. Nap\u0159\xedklad p\u0159i pou\u017e\xedv\xe1n\xed funkc\xed Du\xe1ln\xed Messenger nebo Du\xe1ln\xed aplikace na za\u0159\xedzen\xedch ",(0,o.kt)("strong",{parentName:"p"},"Samsung")," nebo ",(0,o.kt)("strong",{parentName:"p"},"LG"),". N\xed\u017ee si p\u0159e\u010dt\u011bte, jak v t\u011bchto p\u0159\xedpadech probl\xe9m vy\u0159e\u0161it."),(0,o.kt)("p",null,":::"),(0,o.kt)("h3",{id:"mo\u017enost-3-pou\u017eit\xed-adguardu-v-re\u017eimu-m\xedstn\xedho-http-proxy-vy\u017eaduje-root"},"Mo\u017enost 3: Pou\u017eit\xed AdGuardu v ",(0,o.kt)("em",{parentName:"h3"},"re\u017eimu m\xedstn\xedho HTTP proxy")," (vy\u017eaduje root)"),(0,o.kt)("p",null,"Chcete-li tento re\u017eim povolit, otev\u0159ete ",(0,o.kt)("strong",{parentName:"p"},"Nastaven\xed AdGuardu")," \u2192 ",(0,o.kt)("strong",{parentName:"p"},"S\xed\u0165")," \u2192 ",(0,o.kt)("strong",{parentName:"p"},"Metoda filtrov\xe1n\xed")," \u2192 ",(0,o.kt)("strong",{parentName:"p"},"Lok\xe1ln\xed HTTP proxy")),(0,o.kt)("h3",{id:"za\u0159\xedzen\xed-lg-a-samsung"},"Za\u0159\xedzen\xed LG a Samsung"),(0,o.kt)("p",null,"S podobn\xfdm probl\xe9mem se mohou setkat tak\xe9 majitel\xe9 telefon\u016f ",(0,o.kt)("strong",{parentName:"p"},"LG")," nebo ",(0,o.kt)("strong",{parentName:"p"},"Samsung"),". M\u016f\u017ee to b\xfdt zp\u016fsobeno pou\u017eit\xedm funkce ",(0,o.kt)("strong",{parentName:"p"},"Du\xe1ln\xed aplikace/Du\xe1ln\xed Messenger")," (kter\xe1 automaticky vytvo\u0159\xed omezen\xfd profil). Chcete-li tento probl\xe9m vy\u0159e\u0161it, mus\xedte tuto funkci vypnout."),(0,o.kt)("h3",{id:"samsung"},"Samsung"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Otev\u0159ete ",(0,o.kt)("strong",{parentName:"li"},"Nastaven\xed"),";"),(0,o.kt)("li",{parentName:"ul"},"Stiskn\u011bte ",(0,o.kt)("strong",{parentName:"li"},"Pokro\u010dil\xe9"),";"),(0,o.kt)("li",{parentName:"ul"},"P\u0159eje\u010fte dol\u016f a stiskn\u011bte ",(0,o.kt)("strong",{parentName:"li"},"Du\xe1ln\xed Messenger"),";"),(0,o.kt)("li",{parentName:"ul"},"Zaka\u017ete ",(0,o.kt)("strong",{parentName:"li"},"Du\xe1ln\xed Messenger")," pro v\u0161echny aplikace;"),(0,o.kt)("li",{parentName:"ul"},"Uzamkn\u011bte za\u0159\xedzen\xed na 5 minut;"),(0,o.kt)("li",{parentName:"ul"},"Odemkn\u011bte obrazovku a zkuste profil VPN vytvo\u0159it znovu.")),(0,o.kt)("h3",{id:"lg"},"LG"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Otev\u0159ete ",(0,o.kt)("strong",{parentName:"li"},"Nastaven\xed"),";"),(0,o.kt)("li",{parentName:"ul"},"Vyberte kartu ",(0,o.kt)("strong",{parentName:"li"},"Obecn\xe9"),";"),(0,o.kt)("li",{parentName:"ul"},"P\u0159eje\u010fte dol\u016f a stiskn\u011bte ",(0,o.kt)("strong",{parentName:"li"},"Du\xe1ln\xed aplikace"),";"),(0,o.kt)("li",{parentName:"ul"},"Odeberte v\u0161echny aplikace ze seznamu;"),(0,o.kt)("li",{parentName:"ul"},"Restartujte za\u0159\xedzen\xed.")))}u.isMDXComponent=!0}}]);