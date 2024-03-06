"use strict";(self.webpackChunkadguard_knowledge_base=self.webpackChunkadguard_knowledge_base||[]).push([[6364],{4137:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>v});var l=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function n(e,t){if(null==e)return{};var a,l,r=function(e,t){if(null==e)return{};var a,l,r={},i=Object.keys(e);for(l=0;l<i.length;l++)a=i[l],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(l=0;l<i.length;l++)a=i[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=l.createContext({}),d=function(e){var t=l.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=d(e.components);return l.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},c=l.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=n(e,["components","mdxType","originalType","parentName"]),c=d(a),v=r,h=c["".concat(s,".").concat(v)]||c[v]||p[v]||i;return a?l.createElement(h,o(o({ref:t},u),{},{components:a})):l.createElement(h,o({ref:t},u))}));function v(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=c;var n={};for(var s in t)hasOwnProperty.call(t,s)&&(n[s]=t[s]);n.originalType=e,n.mdxType="string"==typeof e?e:r,o[1]=n;for(var d=2;d<i;d++)o[d]=a[d];return l.createElement.apply(null,o)}return l.createElement.apply(null,a)}c.displayName="MDXCreateElement"},8565:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>n,toc:()=>d});var l=a(7462),r=(a(7294),a(4137));const i={title:"Low-level settings guide",sidebar_position:6},o=void 0,n={unversionedId:"adguard-for-android/solving-problems/low-level-settings",id:"adguard-for-android/solving-problems/low-level-settings",title:"Low-level settings guide",description:"Este art\xedculo trata sobre AdGuard para Android, un bloqueador de anuncios multifuncional que protege tu dispositivo a nivel de sistema. To see how it works, download the AdGuard app",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/adguard-for-android/solving-problems/low-level-settings.md",sourceDirName:"adguard-for-android/solving-problems",slug:"/adguard-for-android/solving-problems/low-level-settings",permalink:"/KnowledgeBase/es/adguard-for-android/solving-problems/low-level-settings",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBase/edit/master/docs/adguard-for-android/solving-problems/low-level-settings.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"Low-level settings guide",sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"How to get HAR files",permalink:"/KnowledgeBase/es/adguard-for-android/solving-problems/har"},next:{title:"How to block ads in the YouTube app",permalink:"/KnowledgeBase/es/adguard-for-android/solving-problems/youtube-ads"}},s={},d=[{value:"How to reach Low-level settings",id:"how-to-reach-low-level-settings",level:2},{value:"Low-level settings",id:"low-level-settings",level:2},{value:"DNS protection",id:"dns-protection",level:3},{value:"Fallback upstreams",id:"fallback-upstreams",level:4},{value:"Fallback domains",id:"fallback-domains",level:4},{value:"Detect search domains",id:"detect-search-domains",level:4},{value:"Bootstrap upstreams",id:"bootstrap-upstreams",level:4},{value:"Modo de bloqueo para reglas de estilo adblock",id:"modo-de-bloqueo-para-reglas-de-estilo-adblock",level:4},{value:"Modo de bloqueo para reglas de hosts",id:"modo-de-bloqueo-para-reglas-de-hosts",level:4},{value:"DNS request timeout",id:"dns-request-timeout",level:4},{value:"Blocked response TTL",id:"blocked-response-ttl",level:4},{value:"DNS cache size",id:"dns-cache-size",level:4},{value:"ECH blocking",id:"ech-blocking",level:4},{value:"Ignore unavailable outbound proxy",id:"ignore-unavailable-outbound-proxy",level:4},{value:"Try HTTP/3 for DNS-over-HTTPS upstreams",id:"try-http3-for-dns-over-https-upstreams",level:4},{value:"SERVFAIL failure response",id:"servfail-failure-response",level:4},{value:"Use fallback for non-fallback domains",id:"use-fallback-for-non-fallback-domains",level:4},{value:"Validate DNS upstreams",id:"validate-dns-upstreams",level:4},{value:"Filtering",id:"filtering",level:3},{value:"Capture HAR",id:"capture-har",level:4},{value:"Filtrado HTTPS",id:"filtrado-https",level:3},{value:"Encrypted Client Hello",id:"encrypted-client-hello",level:4},{value:"OCSP checking",id:"ocsp-checking",level:4},{value:"Redirect DNS-over-HTTPS requests",id:"redirect-dns-over-https-requests",level:4},{value:"Filter HTTP/3",id:"filter-http3",level:4},{value:"Outbound proxy",id:"outbound-proxy",level:3},{value:"Show the Filter DNS requests setting",id:"show-the-filter-dns-requests-setting",level:4},{value:"Protection",id:"protection",level:3},{value:"Port ranges",id:"port-ranges",level:4},{value:"Log removed HTML events",id:"log-removed-html-events",level:4},{value:"Scriplet debugging",id:"scriplet-debugging",level:4},{value:"Excluded apps",id:"excluded-apps",level:4},{value:"QUIC bypass packages",id:"quic-bypass-packages",level:4},{value:"Reconfigure Automatic proxy when network changes",id:"reconfigure-automatic-proxy-when-network-changes",level:4},{value:"IPv6 filtering",id:"ipv6-filtering",level:4},{value:"IPv4 ranges excluded from filtering",id:"ipv4-ranges-excluded-from-filtering",level:4},{value:"IPv6 ranges excluded from filtering",id:"ipv6-ranges-excluded-from-filtering",level:4},{value:"TCP keepalive for outgoing sockets",id:"tcp-keepalive-for-outgoing-sockets",level:4},{value:"Local VPN settings",id:"local-vpn-settings",level:3},{value:"Recovery delay for revoked VPN",id:"recovery-delay-for-revoked-vpn",level:4},{value:"Reschedule delay for revoked VPN recovery",id:"reschedule-delay-for-revoked-vpn-recovery",level:4},{value:"MTU",id:"mtu",level:4},{value:"Restore VPN automatically",id:"restore-vpn-automatically",level:4},{value:"Packet capture (PCAP)",id:"packet-capture-pcap",level:4},{value:"Include Wi-Fi gateway in VPN routes",id:"include-wi-fi-gateway-in-vpn-routes",level:4},{value:"IPv4 address",id:"ipv4-address",level:4},{value:"Forcibly route LAN IPv4",id:"forcibly-route-lan-ipv4",level:4},{value:"Route all LAN IPv4 connections",id:"route-all-lan-ipv4-connections",level:4},{value:"IPv6 address",id:"ipv6-address",level:4},{value:"Miscel\xe1neo",id:"miscel\xe1neo",level:3},{value:"Detect Samsung Pay",id:"detect-samsung-pay",level:4}],u={toc:d};function p(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,l.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Este art\xedculo trata sobre AdGuard para Android, un bloqueador de anuncios multifuncional que protege tu dispositivo a nivel de sistema. To see how it works, ",(0,r.kt)("a",{parentName:"p",href:"https://agrd.io/download-kb-adblock"},"download the AdGuard app"))),(0,r.kt)("h2",{id:"how-to-reach-low-level-settings"},"How to reach Low-level settings"),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Changing ",(0,r.kt)("em",{parentName:"p"},"Low-level settings")," can cause problems with the performance of AdGuard, may break the Internet connection or compromise your security and privacy. This section should only be opened if you know what you are doing, or you were asked to do so by our support team.")),(0,r.kt)("p",null,"To go to ",(0,r.kt)("em",{parentName:"p"},"Low-level settings"),", open the AdGuard app and tap the gear icon in the lower right corner of the screen. Then choose ",(0,r.kt)("em",{parentName:"p"},"General \u2192 Advanced \u2192 Low-level settings"),"."),(0,r.kt)("h2",{id:"low-level-settings"},"Low-level settings"),(0,r.kt)("p",null,"For AdGuard v4.0 for Android we've completely redesigned the low-level settings: divided them into thematic blocks, made them clearer, added validation of entered values and other safety valves, got rid of some settings, and added others."),(0,r.kt)("h3",{id:"dns-protection"},"DNS protection"),(0,r.kt)("h4",{id:"fallback-upstreams"},"Fallback upstreams"),(0,r.kt)("p",null,"Here you can specify the fallback DNS resolver(s) to be used if the configured server is unavailable. There are three options: ",(0,r.kt)("em",{parentName:"p"},"Automatic DNS"),", ",(0,r.kt)("em",{parentName:"p"},"None"),", and ",(0,r.kt)("em",{parentName:"p"},"Custom DNS"),". If no fallback server is specified, the ",(0,r.kt)("em",{parentName:"p"},"Automatic DNS")," \u2014 the system DNS or AdGuard DNS \u2014 will be used. ",(0,r.kt)("em",{parentName:"p"},"None")," means no fallback at all. Selecting ",(0,r.kt)("em",{parentName:"p"},"Custom DNS")," allows you to list IPv4 and IPv6 server addresses to use as upstreams."),(0,r.kt)("h4",{id:"fallback-domains"},"Fallback domains"),(0,r.kt)("p",null,"Here you can list domains that will be forwarded directly to fallback upstreams if they exist."),(0,r.kt)("h4",{id:"detect-search-domains"},"Detect search domains"),(0,r.kt)("p",null,"If this setting is enabled, AdGuard will detect search domains and automatically forward them to fallback upstreams."),(0,r.kt)("h4",{id:"bootstrap-upstreams"},"Bootstrap upstreams"),(0,r.kt)("p",null,"Bootstrap DNS for DoH, DoT, and DoQ servers. The ",(0,r.kt)("em",{parentName:"p"},"Automatic DNS")," \u2014 the system DNS or AdGuard DNS \u2014 is used by default. By selecting ",(0,r.kt)("em",{parentName:"p"},"Custom DNS"),", you can list IPv4 and IPv6 server addresses to use as bootstrap upstreams."),(0,r.kt)("h4",{id:"modo-de-bloqueo-para-reglas-de-estilo-adblock"},"Modo de bloqueo para reglas de estilo adblock"),(0,r.kt)("p",null,"Here you can specify the response type for domains blocked by DNS rules based on adblock rule syntax (for instance, ",(0,r.kt)("inlineCode",{parentName:"p"},"||example.org^"),")."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Respond with REFUSED"),(0,r.kt)("li",{parentName:"ul"},"Respond with NXDOMAIN"),(0,r.kt)("li",{parentName:"ul"},"Respond with Custom IP address (IPv4 and IPv6 addresses can be specified here)")),(0,r.kt)("h4",{id:"modo-de-bloqueo-para-reglas-de-hosts"},"Modo de bloqueo para reglas de hosts"),(0,r.kt)("p",null,"Here you can specify the response type for domains blocked by DNS rules based on hosts rule syntax (for instance, ",(0,r.kt)("inlineCode",{parentName:"p"},"<ip> <domain> 0.0.0.0 example.com"),")."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Respond with REFUSED"),(0,r.kt)("li",{parentName:"ul"},"Respond with NXDOMAIN"),(0,r.kt)("li",{parentName:"ul"},"Respond with Custom IP address (IPv4 and IPv6 addresses can be specified here)")),(0,r.kt)("h4",{id:"dns-request-timeout"},"DNS request timeout"),(0,r.kt)("p",null,"Aqu\xed puedes especificar el tiempo en milisegundos que AdGuard esperar\xe1 la respuesta del servidor DNS seleccionado antes de recurrir al fallback. Si no completas este campo o ingresas un valor no v\xe1lido, se utilizar\xe1 el valor de 5000."),(0,r.kt)("h4",{id:"blocked-response-ttl"},"Blocked response TTL"),(0,r.kt)("p",null,"Here you can specify the TTL (time to live) value that will be returned in response to a blocked request."),(0,r.kt)("h4",{id:"dns-cache-size"},"DNS cache size"),(0,r.kt)("p",null,"Here you can specify the maximum number of cached responses. Default value is 1000."),(0,r.kt)("h4",{id:"ech-blocking"},"ECH blocking"),(0,r.kt)("p",null,"If enabled, AdGuard strips Encrypted Client Hello parameters from DNS responses."),(0,r.kt)("h4",{id:"ignore-unavailable-outbound-proxy"},"Ignore unavailable outbound proxy"),(0,r.kt)("p",null,"If this setting is enabled, AdGuard will send DNS requests directly when the outbound proxy is unavailable."),(0,r.kt)("h4",{id:"try-http3-for-dns-over-https-upstreams"},"Try HTTP/3 for DNS-over-HTTPS upstreams"),(0,r.kt)("p",null,"If this setting is enabled, AdGuard will use HTTP/3 to speed up DNS query resolution for DoH upstreams. Otherwise, AdGuard will revert to its default behavior and use HTTP/2 to send all DNS requests for DNS-over-HTTPS."),(0,r.kt)("h4",{id:"servfail-failure-response"},"SERVFAIL failure response"),(0,r.kt)("p",null,"If this setting is enabled and all upstreams, including fallback ones, fail to respond, AdGuard will send a SERVFAIL response to the client."),(0,r.kt)("h4",{id:"use-fallback-for-non-fallback-domains"},"Use fallback for non-fallback domains"),(0,r.kt)("p",null,"If this setting is enabled, AdGuard will use fallback upstreams for all domains. Otherwise, fallback upstreams will only be used for fallback domains and search domains if the corresponding option is enabled."),(0,r.kt)("h4",{id:"validate-dns-upstreams"},"Validate DNS upstreams"),(0,r.kt)("p",null,"If this setting is enabled, AdGuard will test DNS upstreams before adding or updating custom DNS servers."),(0,r.kt)("h3",{id:"filtering"},"Filtering"),(0,r.kt)("h4",{id:"capture-har"},"Capture HAR"),(0,r.kt)("p",null,'If this setting is enabled, AdGuard will capture HAR files. It will create a directory named "har" inside the app cache directory and add there information about all filtered HTTP requests in HAR 1.2 format that can be analyzed with the Fiddler program.'),(0,r.kt)("p",null,"Use it only for debugging purposes!"),(0,r.kt)("h3",{id:"filtrado-https"},"Filtrado HTTPS"),(0,r.kt)("h4",{id:"encrypted-client-hello"},"Encrypted Client Hello"),(0,r.kt)("p",null,"Toda conexi\xf3n a Internet cifrada tiene una parte no cifrada. Este es el primer paquete que contiene el nombre del servidor al que te est\xe1s conectando. La tecnolog\xeda Encrypted Client Hello resuelve este problema y cifra la \xfaltima parte de la informaci\xf3n no cifrada. To benefit from it, enable the ",(0,r.kt)("em",{parentName:"p"},"Encrypted Client Hello")," option. It uses a local DNS proxy to look for the ECH configuration for the domain. Si se encuentra, el paquete ClientHello se cifrar\xe1."),(0,r.kt)("h4",{id:"ocsp-checking"},"OCSP checking"),(0,r.kt)("p",null,"If this setting is enabled, AdGuard will perform asynchronous OCSP checks to get the revocation status of a website's SSL certificate."),(0,r.kt)("p",null,"If an OCSP check is completed within the required timeout, AdGuard will immediately block the connection if the certificate is revoked or establish the connection if the certificate is valid."),(0,r.kt)("p",null,"If the verification takes too long, AdGuard will allow the connection while continuing to check the certificate status in the background. Si se revoca el certificado, se bloquear\xe1n las conexiones actuales y futuras al dominio."),(0,r.kt)("h4",{id:"redirect-dns-over-https-requests"},"Redirect DNS-over-HTTPS requests"),(0,r.kt)("p",null,"If this setting is enabled, AdGuard will redirect DNS-over-HTTPS requests to the local DNS proxy in addition to plain DNS requests. We recommend disabling fallback upstreams and using only encrypted DNS servers to maintain privacy."),(0,r.kt)("h4",{id:"filter-http3"},"Filter HTTP/3"),(0,r.kt)("p",null,"If this setting is enabled, AdGuard will filter requests sent over HTTP/3 in addition to other request types."),(0,r.kt)("h3",{id:"outbound-proxy"},"Outbound proxy"),(0,r.kt)("h4",{id:"show-the-filter-dns-requests-setting"},"Show the Filter DNS requests setting"),(0,r.kt)("p",null,"If this is enabled, the ",(0,r.kt)("em",{parentName:"p"},"Filter DNS requests")," switch will be displayed in the ",(0,r.kt)("em",{parentName:"p"},"Add proxy server")," dialog. Use it to enable filtering of DNS requests passing through the specified proxy."),(0,r.kt)("h3",{id:"protection"},"Protection"),(0,r.kt)("h4",{id:"port-ranges"},"Port ranges"),(0,r.kt)("p",null,"Here you can specify port ranges that should be filtered."),(0,r.kt)("h4",{id:"log-removed-html-events"},"Log removed HTML events"),(0,r.kt)("p",null,"If this setting is enabled, AdGuard will record blocked HTML elements in ",(0,r.kt)("em",{parentName:"p"},"Recent activity"),"."),(0,r.kt)("h4",{id:"scriplet-debugging"},"Scriplet debugging"),(0,r.kt)("p",null,"If this setting is enabled, debugging in scriptlets will be activated, and the browser log will record when scriptlet rules are applied."),(0,r.kt)("h4",{id:"excluded-apps"},"Excluded apps"),(0,r.kt)("p",null,"Here you can list package names and UIDs that you want to exclude from AdGuard protection."),(0,r.kt)("h4",{id:"quic-bypass-packages"},"QUIC bypass packages"),(0,r.kt)("p",null,"Here you can specify package names for which AdGuard should bypass QUIC traffic."),(0,r.kt)("h4",{id:"reconfigure-automatic-proxy-when-network-changes"},"Reconfigure Automatic proxy when network changes"),(0,r.kt)("p",null,"If this setting is enabled, the AdGuard protection will restart to reconfigure the automatic proxy settings when your device connects to another network. This setting only applies if ",(0,r.kt)("em",{parentName:"p"},"Routing mode")," is set to ",(0,r.kt)("em",{parentName:"p"},"Automatic proxy"),"."),(0,r.kt)("h4",{id:"ipv6-filtering"},"IPv6 filtering"),(0,r.kt)("p",null,"If this setting is enabled, AdGuard will filter IPv6 networks if an IPv6 network interface is available."),(0,r.kt)("h4",{id:"ipv4-ranges-excluded-from-filtering"},"IPv4 ranges excluded from filtering"),(0,r.kt)("p",null,"Filtering for the IPv4 ranges listed in this section is disabled."),(0,r.kt)("h4",{id:"ipv6-ranges-excluded-from-filtering"},"IPv6 ranges excluded from filtering"),(0,r.kt)("p",null,"Filtering for the IPv6 ranges listed in this section is disabled."),(0,r.kt)("h4",{id:"tcp-keepalive-for-outgoing-sockets"},"TCP keepalive for outgoing sockets"),(0,r.kt)("p",null,"If this setting is enabled, AdGuard will send a keepalive probe after the specified time period to ensure that the TCP connection is alive. Here, you can specify the idle time before starting keepalive probes and the time between keepalive probes for an unresponsive peer."),(0,r.kt)("p",null,"After a system-defined number of unsuccessful attempts to get a response from the server, the system automatically closes the TCP connection."),(0,r.kt)("h3",{id:"local-vpn-settings"},"Local VPN settings"),(0,r.kt)("h4",{id:"recovery-delay-for-revoked-vpn"},"Recovery delay for revoked VPN"),(0,r.kt)("p",null,"Here you can set the time of a delay in milliseconds before AdGuard tries to restore VPN protection after it has been revoked by a third-party VPN app or by deleting the VPN profile. The default value is 5000 ms."),(0,r.kt)("h4",{id:"reschedule-delay-for-revoked-vpn-recovery"},"Reschedule delay for revoked VPN recovery"),(0,r.kt)("p",null,"Here you can set the time of a delay in milliseconds before AdGuard reschedules the restoration of VPN protection after it has been revoked by a third-party VPN app or by deleting the VPN profile. The default value is 5000 ms."),(0,r.kt)("h4",{id:"mtu"},"MTU"),(0,r.kt)("p",null,"Here you can set the maximum transmission unit (MTU) of the VPN interface. The recommended range is 1500-1900 bytes."),(0,r.kt)("h4",{id:"restore-vpn-automatically"},"Restore VPN automatically"),(0,r.kt)("p",null,"If this setting is enabled, AdGuard\u2019s local VPN will be automatically re-enabled after being turned off due to network absence, tethering, or low-power mode."),(0,r.kt)("h4",{id:"packet-capture-pcap"},"Packet capture (PCAP)"),(0,r.kt)("p",null,"If this setting is enabled, AdGuard will create a file ",(0,r.kt)("inlineCode",{parentName:"p"},"timestamp.pcap")," (for instance, 1682599851461.pcap) in the app cache directory. This file lists all network packets transferred through the VPN and can be analyzed with the Wireshark program."),(0,r.kt)("h4",{id:"include-wi-fi-gateway-in-vpn-routes"},"Include Wi-Fi gateway in VPN routes"),(0,r.kt)("p",null,"If this setting is enabled, the gateway IP addresses will be added to VPN routes when on Wi-Fi."),(0,r.kt)("h4",{id:"ipv4-address"},"IPv4 address"),(0,r.kt)("p",null,"Here you can enter the IP address that will be used to create a TUN interface. By default, it is ",(0,r.kt)("inlineCode",{parentName:"p"},"172.18.11.218"),"."),(0,r.kt)("h4",{id:"forcibly-route-lan-ipv4"},"Forcibly route LAN IPv4"),(0,r.kt)("p",null,"If this setting is enabled, AdGuard will filter all LAN connections, including local IPv4 network traffic, even if the ",(0,r.kt)("em",{parentName:"p"},"Route all LAN IPv4 connections")," option is enabled."),(0,r.kt)("h4",{id:"route-all-lan-ipv4-connections"},"Route all LAN IPv4 connections"),(0,r.kt)("p",null,"If this setting is enabled, AdGuard will exclude LAN connections from filtering for simple networks. This may not work for complex networks. This setting only applies if ",(0,r.kt)("em",{parentName:"p"},"Forcibly route LAN IPv4")," is disabled."),(0,r.kt)("h4",{id:"ipv6-address"},"IPv6 address"),(0,r.kt)("p",null,"Here you can enter the IP address that will be used to create a TUN interface. By default, it is ",(0,r.kt)("inlineCode",{parentName:"p"},"2001:db8:ad:0:ff::"),"."),(0,r.kt)("h3",{id:"miscel\xe1neo"},"Miscel\xe1neo"),(0,r.kt)("h4",{id:"detect-samsung-pay"},"Detect Samsung Pay"),(0,r.kt)("p",null,"If this setting is enabled, AdGuard protection will be paused while Samsung Pay is in use. Korean users require this feature as they experience ",(0,r.kt)("a",{parentName:"p",href:"/adguard-for-android/solving-problems/samsungpay-with-adguard-in-south-korea"},"issues with Samsung Pay")," when AdGuard is enabled."))}p.isMDXComponent=!0}}]);