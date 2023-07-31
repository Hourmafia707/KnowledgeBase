"use strict";(self.webpackChunkadguard_knowledge_base=self.webpackChunkadguard_knowledge_base||[]).push([[1843],{4137:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>c});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.createContext({}),d=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=d(e.components);return i.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=d(n),c=r,k=m["".concat(s,".").concat(c)]||m[c]||p[c]||a;return n?i.createElement(k,l(l({ref:t},u),{},{components:n})):i.createElement(k,l({ref:t},u))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var d=2;d<a;d++)l[d]=n[d];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4440:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>o,toc:()=>d});var i=n(7462),r=(n(7294),n(4137));const a={title:"Kompatibilit\xe4tsprobleme mit verschiedenen macOS-Versionen",sidebar_position:4},l=void 0,o={unversionedId:"adguard-for-mac/solving-problems/big-sur-issues",id:"adguard-for-mac/solving-problems/big-sur-issues",title:"Kompatibilit\xe4tsprobleme mit verschiedenen macOS-Versionen",description:"Dieser Artikel behandelt AdGuard f\xfcr Mac, einen multifunktionalen Werbeblocker, der Ihr Ger\xe4t auf Systemebene sch\xfctzt. Um zu sehen, wie es funktioniert, laden Sie die AdGuard-App herunter",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/adguard-for-mac/solving-problems/big-sur-issues.md",sourceDirName:"adguard-for-mac/solving-problems",slug:"/adguard-for-mac/solving-problems/big-sur-issues",permalink:"/KnowledgeBase/de/adguard-for-mac/solving-problems/big-sur-issues",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBase/edit/master/docs/adguard-for-mac/solving-problems/big-sur-issues.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Kompatibilit\xe4tsprobleme mit verschiedenen macOS-Versionen",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"AdGuard auf macOS High Sierra und h\xf6her installieren",permalink:"/KnowledgeBase/de/adguard-for-mac/solving-problems/high-sierra-compatibility"},next:{title:"L\xf6sung von Installationsproblemen",permalink:"/KnowledgeBase/de/adguard-for-mac/solving-problems/installation-issues"}},s={},d=[{value:"Aktuell bestehende Probleme",id:"aktuell-bestehende-probleme",level:2},{value:"Monterey 12: derzeit bestehende Probleme",id:"monterey-12-derzeit-bestehende-probleme",level:3},{value:"Kompatibilit\xe4t mit iCloud Private Relay",id:"kompatibilit\xe4t-mit-icloud-private-relay",level:4},{value:"Kompatibilit\xe4t mit Protect Mail Activity",id:"kompatibilit\xe4t-mit-protect-mail-activity",level:4},{value:"Monterey 12, Big Sur 11.6 und h\xf6her: derzeit bestehende Probleme",id:"monterey-12-big-sur-116-und-h\xf6her-derzeit-bestehende-probleme",level:3},{value:"Kompatibilit\xe4t mit Cisco AnyConnect",id:"kompatibilit\xe4t-mit-cisco-anyconnect",level:4},{value:"Kompatibilit\xe4t mit Flutter",id:"kompatibilit\xe4t-mit-flutter",level:4},{value:"VPN-Apps mit Legacy-API",id:"vpn-apps-mit-legacy-api",level:4},{value:"Bereits behobene Probleme",id:"bereits-behobene-probleme",level:2},{value:"Kompatibilit\xe4t mit Little Snitch 5",id:"kompatibilit\xe4t-mit-little-snitch-5",level:3},{value:"Kompatibilit\xe4t mit lokalen Proxys",id:"kompatibilit\xe4t-mit-lokalen-proxys",level:3},{value:"Beispiel 1: Konfigurieren eines Upstream-Shadowsocks-Proxys",id:"beispiel-1-konfigurieren-eines-upstream-shadowsocks-proxys",level:4},{value:"Beispiel 2: Konfigurieren eines Upstream-Surge-Proxys",id:"beispiel-2-konfigurieren-eines-upstream-surge-proxys",level:4},{value:"Alternativen zur Verwendung einer Netzwerkerweiterung",id:"alternativen-zur-verwendung-einer-netzwerkerweiterung",level:2},{value:"Verwenden des Filtermodus \u201eAutomatischer Proxy\u201c",id:"automatic-proxy",level:3},{value:"Aktivieren der Kernel-Erweiterung in Big Sur und Monterey",id:"kernel-extension",level:3}],u={toc:d};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,":::Info"),(0,r.kt)("p",null,"Dieser Artikel behandelt AdGuard f\xfcr Mac, einen multifunktionalen Werbeblocker, der Ihr Ger\xe4t auf Systemebene sch\xfctzt. Um zu sehen, wie es funktioniert, ",(0,r.kt)("a",{parentName:"p",href:"https://adguard.com/download.html?auto=true"},"laden Sie die AdGuard-App herunter")),(0,r.kt)("p",null,":::"),(0,r.kt)("h2",{id:"aktuell-bestehende-probleme"},"Aktuell bestehende Probleme"),(0,r.kt)("p",null,"Jedes Jahr ver\xf6ffentlicht Apple eine neue Version von macOS, die innovative L\xf6sungen einf\xfchrt und neue n\xfctzliche Funktionen hinzuf\xfcgt. Einige von ihnen, wie Netzwerk-Erweiterungs API (Big Sur) oder iCloud Private Relay (Monterey), verursachen jedoch einige Probleme f\xfcr viele Anwendungen, wobei AdGuard keine Ausnahme bildet. In diesem Artikel betrachten wir die bekannten Probleme, die f\xfcr jede macOS-Version spezifisch sind, und auch die m\xf6glichen L\xf6sungen."),(0,r.kt)("h3",{id:"monterey-12-derzeit-bestehende-probleme"},"Monterey 12: derzeit bestehende Probleme"),(0,r.kt)("p",null,"Diese Probleme wurden von Apple noch nicht oder nur teilweise behoben."),(0,r.kt)("h4",{id:"kompatibilit\xe4t-mit-icloud-private-relay"},"Kompatibilit\xe4t mit iCloud Private Relay"),(0,r.kt)("p",null,"Derzeit k\xf6nnen AdGuard und iCloud Private Relay nicht gleichzeitig funktionieren. AdGuard kann keine Werbung blockieren, da iCloud Private Relay den Datenverkehr verschl\xfcsselt, bevor AdGuard Netzwerkverbindungen filtern kann. Wenn iCloud Private Relay aktiv ist, wird jegliche Filterung (einschlie\xdflich lokaler Filterung) unm\xf6glich. Daher kann AdGuard in Safari keinen Datenverkehr filtern oder eine DNS-Filterung durchf\xfchren. Aus diesem Grund verwendet AdGuard standardm\xe4\xdfig die \u201eStandardroute\u201c, die iCloud Private Relay deaktiviert."),(0,r.kt)("p",null,"F\xfcr ein tieferes Verst\xe4ndnis dieses Problems lesen Sie bitte ",(0,r.kt)("a",{parentName:"p",href:"../icloud-private-relay"},"diesen Artikel"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Empfohlene L\xf6sung")),(0,r.kt)("p",null,"Wir empfehlen die Verwendung von AdGuard zusammen mit einem traditionelleren VPN-Dienst wie ",(0,r.kt)("a",{parentName:"p",href:"https://adguard-vpn.com/"},"AdGuard VPN"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Alternative L\xf6sung")),(0,r.kt)("p",null,"Sie k\xf6nnen verhindern, dass AdGuard die  \u201eStandardroute\u201c verwendet, indem Sie sie deaktivieren. Dies kann \xfcber Erweiterte Einstellungen \u2192 ",(0,r.kt)("inlineCode",{parentName:"p"},"network.extension.monterey.force.split.tunnel")," erfolgen. Beachten Sie, dass die Aktivierung dieser Einstellung zu den oben beschriebenen Problemen f\xfchrt."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/kb/ad_blocker/mac/mac_adguard_advanced_settings.jpg",alt:"Erweiterte Einstellungen *border"})),(0,r.kt)("h4",{id:"kompatibilit\xe4t-mit-protect-mail-activity"},"Kompatibilit\xe4t mit Protect Mail Activity"),(0,r.kt)("p",null,"Die Mail-App von Apple verwendet jetzt einen Proxy, um die IP-Adressen der Nutzer:innen zu verbergen, wenn Bilder aus E-Mails heruntergeladen werden. Es funktioniert jedoch nicht, wenn eine VPN-Verbindung aktiv ist. Da AdGuard als VPN behandelt wird, werden Bilder nicht automatisch vorgeladen."),(0,r.kt)("p",null,"F\xfcr ein tieferes Verst\xe4ndnis dieses Problems lesen Sie bitte ",(0,r.kt)("a",{parentName:"p",href:"../protect-mail-activity"},"diesen Artikel"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Empfohlene L\xf6sung")),(0,r.kt)("p",null,"An dieser Stelle empfehlen wir die Verwendung eines traditionelleren VPN-Dienstes wie AdGuard VPN anstelle der neuen Datenschutzfunktionen von Apple."),(0,r.kt)("h3",{id:"monterey-12-big-sur-116-und-h\xf6her-derzeit-bestehende-probleme"},"Monterey 12, Big Sur 11.6 und h\xf6her: derzeit bestehende Probleme"),(0,r.kt)("p",null,"Diese Probleme wurden von Apple noch nicht oder nur teilweise behoben."),(0,r.kt)("h4",{id:"kompatibilit\xe4t-mit-cisco-anyconnect"},"Kompatibilit\xe4t mit Cisco AnyConnect"),(0,r.kt)("p",null,"AdGuard will not work together with Cisco AnyConnect while in the ",(0,r.kt)("em",{parentName:"p"},"Network Extension")," mode. Sie m\xfcssen AdGuard in den Modus ",(0,r.kt)("em",{parentName:"p"},"Automatischer Proxy")," schalten. Folgen Sie dazu ",(0,r.kt)("a",{parentName:"p",href:"#automatic-proxy"},"dieser Anleitung"),"."),(0,r.kt)("h4",{id:"kompatibilit\xe4t-mit-flutter"},"Kompatibilit\xe4t mit Flutter"),(0,r.kt)("p",null,"This problem is solved in Flutter 2.2, released in June 2021. But to fix it for applications developed in Flutter, you need to wait for updates."),(0,r.kt)("p",null,'If you use Flutter alongside AdGuard in "Network Extension" mode (or any other "Transparent Proxy"-type app) in Monterey or Big Sur, you will run into problems: projects won\'t open and Flutter will be effectively broken. We have already reported this bug to Apple. Meanwhile, you can use these temporary solutions:'),(0,r.kt)("p",null,"1) Use AdGuard in ",(0,r.kt)("a",{parentName:"p",href:"#automatic-proxy"},"Automatic Proxy")," mode."),(0,r.kt)("p",null,"2) Disable SIP and switch AdGuard to Kernel Extension mode as explained ",(0,r.kt)("a",{parentName:"p",href:"#kernel-extension"},"here"),"."),(0,r.kt)("h4",{id:"vpn-apps-mit-legacy-api"},"VPN-Apps mit Legacy-API"),(0,r.kt)("p",null,"Despite AdGuard is displayed as a VPN in system settings, it shouldn't cause any conflicts when working alongside other VPN-based apps. However, if you're using a VPN-based app that was downloaded from outside App Store, there's a chance it uses the old VPN API and you have to exclude it from filtering:"),(0,r.kt)("p",null,"1) Open AdGuard's menu. 2) Select ",(0,r.kt)("em",{parentName:"p"},"Preferences..."),". 3) Switch to the ",(0,r.kt)("em",{parentName:"p"},"Network")," tab. 4) Click the ",(0,r.kt)("em",{parentName:"p"},"Applications...")," button. 5) Find the app you want to exclude and uncheck the checkbox next to it."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/kb/ad_blocker/mac/legacy.jpg",alt:"Filtered applications"})),(0,r.kt)("h2",{id:"bereits-behobene-probleme"},"Bereits behobene Probleme"),(0,r.kt)("p",null,"These problems have been fixed by Apple by now but can be encountered in the older versions of macOS Big Sur."),(0,r.kt)("h3",{id:"kompatibilit\xe4t-mit-little-snitch-5"},"Kompatibilit\xe4t mit Little Snitch 5"),(0,r.kt)("p",null,"At this moment, Network Extension mode in AdGuard isn't compatible with ",(0,r.kt)("a",{parentName:"p",href:"https://obdev.at/products/littlesnitch/index.html"},"Little Snitch 5"),". When both are running, there's a chance to encounter issues with various apps' behavior, even if they aren't filtered by AdGuard. This problem is directly caused by a bug in Big Sur, and we've already informed Apple about it. This leaves us to believe that this issue will get resolved in one of the next updates."),(0,r.kt)("p",null,"It needs to be said that this problem can't be solved by disabling connections monitoring in Little Snitch, because this action doesn't unload Little Snitch's extension from the system. We recommend to switch to ",(0,r.kt)("a",{parentName:"p",href:"#automatic-proxy"},(0,r.kt)("strong",{parentName:"a"},"Automatic Proxy"))," filtering mode when running AdGuard alongside with Little Snitch on Big Sur, at least until Apple fixes the bug."),(0,r.kt)("h3",{id:"kompatibilit\xe4t-mit-lokalen-proxys"},"Kompatibilit\xe4t mit lokalen Proxys"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Now AdGuard can filter local proxies (mostly) without any problems. Wenn Sie in den Betriebssystemversionen 11.1+ auf Probleme sto\xdfen oder wenn Sie Big Sur 11.0 verwenden, entfernen Sie den lokalen Proxy aus den Systemeinstellungen und konfigurieren Sie einen Upstream-Proxy in AdGuard, indem Sie die nachstehenden Anweisungen befolgen.")),(0,r.kt)("p",null,"To configure an upstream proxy in AdGuard for Mac in Big Sur, open AdGuard's settings ",(0,r.kt)("em",{parentName:"p"},"Preferences \u2192 Network \u2192 Outbound proxy"),". Click the ",(0,r.kt)("em",{parentName:"p"},"Value")," area of the ",(0,r.kt)("inlineCode",{parentName:"p"},"upstream.proxy")," setting to configure a proxy."),(0,r.kt)("p",null,"Geben Sie eine Zeichenfolge ein, die wie folgt aussieht: ",(0,r.kt)("inlineCode",{parentName:"p"},"scheme://user:password@host:port"),", wobei"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"scheme")," ist entweder ",(0,r.kt)("inlineCode",{parentName:"li"},"http"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"https"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"socks4")," oder ",(0,r.kt)("inlineCode",{parentName:"li"},"socks5"),", abh\xe4ngig von Ihrem Proxy-Typ,")),(0,r.kt)("p",null,"Wenn Sie den Proxytyp ",(0,r.kt)("inlineCode",{parentName:"p"},"socks5")," verwenden, setzen Sie den Wert der Einstellung ",(0,r.kt)("inlineCode",{parentName:"p"},"upstream.proxy.socks5udp")," auf ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),", damit AdGuard den UDP-Datenverkehr an den Proxyserver weiterleitet."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"user")," und ",(0,r.kt)("inlineCode",{parentName:"li"},"password")," sind der entsprechende Benutzername und das Passwort Ihres Proxys (falls erforderlich). Ignorieren Sie eines oder beide, wenn nicht zutreffend,"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"host")," ist die IP-Adresse Ihres Proxy-Servers,"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"port")," ist die gew\xfcnschte Portnummer, die vom Proxy-Server verwendet werden soll.")),(0,r.kt)("admonition",{title:"Example",type:"note"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"socks5://localhost:6322")," will configure a SOCKS5 local proxy that listens to port 6322 and doesn't require a username or a password.")),(0,r.kt)("p",null,"Klicken Sie auf ",(0,r.kt)("em",{parentName:"p"},"Anwenden")," , damit AdGuard den gesamten Datenverkehr an den konfigurierten Proxy-Server weiterleitet."),(0,r.kt)("p",null,"Wenden Sie sich bei Problemen bitte an unseren technischen Support unter ",(0,r.kt)("a",{parentName:"p",href:"mailto:support@adguard.com"},"support@adguard.com"),"."),(0,r.kt)("h4",{id:"beispiel-1-konfigurieren-eines-upstream-shadowsocks-proxys"},"Beispiel 1: Konfigurieren eines Upstream-Shadowsocks-Proxys"),(0,r.kt)("p",null,"Hier ist ein Beispiel f\xfcr die Konfiguration eines Upstream-Proxys f\xfcr ",(0,r.kt)("a",{parentName:"p",href:"https://shadowsocks.org"},"Shadowsocks"),"."),(0,r.kt)("p",null,"Zun\xe4chst einmal ben\xf6tigen Sie eine funktionierende Serverseite f\xfcr Ihren Proxy. H\xf6chstwahrscheinlich w\xfcrden Sie zum Einrichten eine JSON-Datei wie diese verwenden (",(0,r.kt)("inlineCode",{parentName:"p"},"server")," und ",(0,r.kt)("inlineCode",{parentName:"p"},"password")," Werte wurden hier zuf\xe4llig ausgew\xe4hlt):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{\n   "server":"111.222.333.444",\n   "server_port":8388,\n   "local_port":1080,\n   "password":"barfoo!",\n   "timeout":600,\n   "method":"chacha20-ietf-poly1305"\n}\n')),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Weitere Informationen zu den ersten Schritten finden Sie auf der ",(0,r.kt)("a",{parentName:"p",href:"https://shadowsocks.org/guide/what-is-shadowsocks.html"},"Shadowsocks-Website"),".")),(0,r.kt)("p",null,"Dann m\xfcssten Sie den Shadowsocks-Client auf Ihrem Mac installieren. Stellen Sie sicher, dass Sie in den Einstellungen \u201eManueller Modus\u201c oder \u201eAutomatischer Modus\u201c ausw\xe4hlen! Die Konfiguration funktioniert nicht, wenn Sie \u201eGlobal Mode\u201c (oder \u201eAuto Mode\u201c in Big Sur-Versionen vor 11.1) ausw\xe4hlen."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/kb/ad_blocker/mac/shadowsocks.jpg",alt:"W\xe4hlen Sie den manuellen Modus oder den automatischen Modus in den Einstellungen *mobile"})),(0,r.kt)("p",null,"Gehen Sie nun zu ",(0,r.kt)("em",{parentName:"p"},"AdGuard Men\xfc \u2192 Erweitert \u2192 Erweiterte Einstellungen...")," und setzen Sie den Bereich ",(0,r.kt)("em",{parentName:"p"},"Wert")," der Einstellung ",(0,r.kt)("inlineCode",{parentName:"p"},"upstream.proxy")," auf ",(0,r.kt)("inlineCode",{parentName:"p"},"socks5://localhost:1080"),". Beachten Sie, dass Sie hier den Wert \u201elocal_port\u201c aus der JSON-Datei verwenden m\xfcssen."),(0,r.kt)("p",null,"Da Shadowsocks SOCKS5 verwendet, m\xfcssen Sie auch den Wert der Einstellung ",(0,r.kt)("inlineCode",{parentName:"p"},"upstream.proxy.socks5udp")," in den erweiterten Einstellungen von AdGuard auf ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," setzen, damit AdGuard den UDP-Datenverkehr an den Proxy-Server weiterleitet."),(0,r.kt)("h4",{id:"beispiel-2-konfigurieren-eines-upstream-surge-proxys"},"Beispiel 2: Konfigurieren eines Upstream-Surge-Proxys"),(0,r.kt)("p",null,"In Big Sur v11.1+ gibt es keine bekannten Konflikte zwischen AdGuard und dem Surge-Proxy. Wenn Sie eine \xe4ltere Version von Big Sur (vor 11.1) verwenden, \xfcberpr\xfcfen Sie, ob ",(0,r.kt)("strong",{parentName:"p"},"System Proxy")," in der unteren rechten Ecke deaktiviert ist. Andernfalls funktioniert Surge nicht mit AdGuard. Andererseits kann ",(0,r.kt)("strong",{parentName:"p"},"Enhanced Mode")," aktiviert werden, ohne dass es in einer Big Sur-Version zu Konflikten kommt."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/kb/ad_blocker/mac/surge.jpg",alt:"Konfigurieren eines vorgelagerten Surge-Proxys *border"})),(0,r.kt)("p",null,"Gehen Sie nun zu ",(0,r.kt)("em",{parentName:"p"},"AdGuard Men\xfc \u2192 Erweitert \u2192 Erweiterte Einstellungen...")," und setzen Sie den Bereich ",(0,r.kt)("em",{parentName:"p"},"Wert")," der Einstellung ",(0,r.kt)("inlineCode",{parentName:"p"},"upstream.proxy")," auf ",(0,r.kt)("inlineCode",{parentName:"p"},"socks5://localhost:6153"),". Beachten Sie, dass Sie den Wert ",(0,r.kt)("strong",{parentName:"p"},"port")," verwenden m\xfcssen, der im Bereich ",(0,r.kt)("strong",{parentName:"p"},"Events")," der Registerkarte ",(0,r.kt)("strong",{parentName:"p"},"Activity")," in Ihrem Surge-Client angegeben ist."),(0,r.kt)("p",null,"Wenn Sie das SOCKS5-Protokoll gew\xe4hlt haben, m\xfcssen Sie auch den Wert der Einstellung ",(0,r.kt)("inlineCode",{parentName:"p"},"upstream.proxy.socks5udp")," in den erweiterten Einstellungen von AdGuard auf ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," setzen, damit AdGuard den UDP-Datenverkehr an den Proxy-Server weiterleitet."),(0,r.kt)("h2",{id:"alternativen-zur-verwendung-einer-netzwerkerweiterung"},"Alternativen zur Verwendung einer Netzwerkerweiterung"),(0,r.kt)("p",null,"Es ist unm\xf6glich, jedes m\xf6gliche Problem vorherzusehen, das in Big Sur oder Monterey auftauchen kann, es gibt unz\xe4hlige verschiedene Hardware-/Software- und Einstellungskonfigurationen. Wenn Sie auf Kompatibilit\xe4tsprobleme sto\xdfen, wenden Sie sich bitte an unser Support-Team, aber probieren Sie zuerst eine dieser Problemumgehungen aus."),(0,r.kt)("h3",{id:"automatic-proxy"},"Verwenden des Filtermodus \u201eAutomatischer Proxy\u201c"),(0,r.kt)("p",null,"Wenn Sie in Big Sur oder Monterey auf Probleme sto\xdfen, die mit keiner der oben genannten Methoden gel\xf6st werden k\xf6nnen, k\xf6nnen Sie versuchen, AdGuard in den Modus ",(0,r.kt)("em",{parentName:"p"},"Automatischer Proxy")," zu schalten."),(0,r.kt)("p",null,"1) \xd6ffnen Sie das AdGuard-Men\xfc. 2) W\xe4hlen Sie ",(0,r.kt)("em",{parentName:"p"},"Einstellungen..."),". 3) Wechseln Sie auf die Registerkarte ",(0,r.kt)("em",{parentName:"p"},"Netzwerk"),". 4) Klicken Sie auf die Schaltfl\xe4che ",(0,r.kt)("em",{parentName:"p"},"Modus ausw\xe4hlen..."),". 5) W\xe4hlen Sie ",(0,r.kt)("em",{parentName:"p"},"Automatischer Proxy")," aus."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/kb/ad_blocker/mac/automatic-proxy_en.jpg",alt:"Schalten Sie AdGuard in den automatischen Proxy-Modus"})),(0,r.kt)("p",null,"Jetzt hat AdGuard automatisch eine ",(0,r.kt)("strong",{parentName:"p"},".pac")," -Datei zu den Netzwerkeinstellungen Ihres Mac hinzugef\xfcgt, sodass das System AdGuard als Proxy betrachtet und versucht, den gesamten Datenverkehr \xfcber AdGuard zu senden."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Some apps may ignore this system setting and their traffic will not be filtered.")),(0,r.kt)("h3",{id:"kernel-extension"},"Aktivieren der Kernel-Erweiterung in Big Sur und Monterey"),(0,r.kt)("p",null,"Standardm\xe4\xdfig verwendet AdGuard das Netzwerk-Erweiterungs-Framework in Big Sur und Monterey, da die alte Kernel-Erweiterung dort deaktiviert ist. Dies kann einige Kompatibilit\xe4tsprobleme verursachen, aber um die Kernel-Erweiterung wieder zu aktivieren, m\xfcssen Sie zuerst den Systemintegrit\xe4tsschutz (SIP) deaktivieren. Um SIP zu deaktivieren, folgen Sie dieser Anleitung:"),(0,r.kt)("p",null,"1) Klicken Sie auf das ",(0,r.kt)("em",{parentName:"p"},"Apfelsymbol")," in der Men\xfcleiste. 2) Klicken Sie auf ",(0,r.kt)("em",{parentName:"p"},"Restart\u2026")," 3) Halten Sie ",(0,r.kt)("em",{parentName:"p"},"Command-R")," gedr\xfcckt, um im Wiederherstellungsmodus neu zu starten. 4) Klicken Sie auf ",(0,r.kt)("em",{parentName:"p"},"Utilities"),". 5) W\xe4hlen Sie ",(0,r.kt)("em",{parentName:"p"},"Terminal")," aus. 6) Geben Sie ",(0,r.kt)("inlineCode",{parentName:"p"},"csrutil disable")," ein. 7) Dr\xfccken Sie ",(0,r.kt)("em",{parentName:"p"},"Return")," oder ",(0,r.kt)("em",{parentName:"p"},"Enter")," auf Ihrer Tastatur. 8) Klicken Sie auf das ",(0,r.kt)("em",{parentName:"p"},"Apfelsymbol")," in der Men\xfcleiste. 9) Klicken Sie auf ",(0,r.kt)("em",{parentName:"p"},"Restart\u2026")),(0,r.kt)("p",null,"Nachdem SIP deaktiviert ist, aktivieren Sie die Kernel-Erweiterung folgenderma\xdfen:"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/kb/ad_blocker/mac/kernel_en.jpg",alt:"Kernel-Erweiterung aktivieren"})),(0,r.kt)("p",null,"1) \xd6ffnen Sie das AdGuard-Men\xfc. 2) W\xe4hlen Sie ",(0,r.kt)("em",{parentName:"p"},"Einstellungen..."),". 3) Wechseln Sie auf die Registerkarte ",(0,r.kt)("em",{parentName:"p"},"Netzwerk"),". 4) Klicken Sie auf die Schaltfl\xe4che ",(0,r.kt)("em",{parentName:"p"},"Modus ausw\xe4hlen..."),". 5) W\xe4hlen Sie ",(0,r.kt)("em",{parentName:"p"},"Kernel-Erweiterung")," aus. 6) Best\xe4tigen Sie, dass Sie zur Kernel-Erweiterung wechseln m\xf6chten."),(0,r.kt)("p",null,":::Zur Beachtung"),(0,r.kt)("p",null,"Wir empfehlen jedoch nur, diese Methode zu verwenden, wenn alles andere fehlschl\xe4gt, da dies zu unerwarteten Problemen f\xfchren kann."),(0,r.kt)("p",null,":::"))}p.isMDXComponent=!0}}]);