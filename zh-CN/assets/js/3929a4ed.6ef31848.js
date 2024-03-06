"use strict";(self.webpackChunkadguard_knowledge_base=self.webpackChunkadguard_knowledge_base||[]).push([[9789],{4137:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),c=u(n),m=a,k=c["".concat(p,".").concat(m)]||c[m]||d[m]||l;return n?r.createElement(k,o(o({ref:t},s),{},{components:n})):r.createElement(k,o({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=c;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},1223:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var r=n(7462),a=(n(7294),n(4137));const l={title:"\u590d\u6570\u5f62\u5f0f",sidebar_position:4},o=void 0,i={unversionedId:"miscellaneous/contribute/translate/plural-forms",id:"miscellaneous/contribute/translate/plural-forms",title:"\u590d\u6570\u5f62\u5f0f",description:"\u4f17\u6240\u5468\u77e5\uff0c\u4e16\u754c\u4e0a\u7684\u8bed\u8a00\u4e4b\u95f4\u5b58\u5728\u5f88\u591a\u5dee\u5f02\u3002 \u5176\u4e2d\u4e00\u4e2a\u662f\u4f7f\u7528\u590d\u6570\u5f62\u5f0f\uff0c\u7ffb\u8bd1\u6210\u4e0d\u540c\u8bed\u8a00\u53ef\u80fd\u4f1a\u9020\u6210\u5f88\u5927\u56f0\u96be\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/miscellaneous/contribute/translate/plural-forms.md",sourceDirName:"miscellaneous/contribute/translate",slug:"/miscellaneous/contribute/translate/plural-forms",permalink:"/KnowledgeBase/zh-CN/miscellaneous/contribute/translate/plural-forms",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBase/edit/master/docs/miscellaneous/contribute/translate/plural-forms.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"\u590d\u6570\u5f62\u5f0f",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"\u6307\u5bfc\u4e0e\u5efa\u8bae",permalink:"/KnowledgeBase/zh-CN/miscellaneous/contribute/translate/guidelines"},next:{title:"AdGuard Crowdin\uff1a\u5148\u7ffb\u8bd1\u4ec0\u4e48\u6587\u4ef6",permalink:"/KnowledgeBase/zh-CN/miscellaneous/contribute/translate/translation-priority"}},p={},u=[{value:"\u590d\u6570\u5f62\u5f0f\u662f\u4ec0\u4e48\u610f\u601d\uff1f",id:"plurals",level:2},{value:"\u5728\u54ea\u91cc\u53ef\u4ee5\u4e86\u89e3\u590d\u6570\u5f62\u5f0f\u7684\u53d8\u4f53\u6570\u91cf\uff1f",id:"where-to-learn",level:2},{value:"AdGuard \u7ffb\u8bd1\u4e2d\u7684\u590d\u6570\u5f62\u5f0f",id:"translations",level:2},{value:"1. \u5e26\u6709 <code>.singular</code>\u3001<code>.dual</code>\u3001<code>.plural</code> \u4f5c\u4e3a\u7ed3\u5c3e\u7684\u5b57\u7b26\u4e32\u952e\u7684\u77ed\u8bed",id:"1type",level:3},{value:"2. \u5355\u6570\u548c\u590d\u6570\u540d\u8bcd\u5b57\u7b26\u4e32\u4ee5\u9017\u53f7\u5206\u9694",id:"2type",level:3},{value:"3. \u4f7f\u7528 Crowdin \u53d1\u5c55\u6a21\u5f0f\u7684\u5b57\u7b26\u4e32",id:"3type",level:3},{value:"4. \u5e26\u6709\u7528\u7ad6\u7ebf\u5206\u9694\u6a21\u677f\u7684\u5b57\u7b26\u4e32",id:"4type",level:3},{value:"\u7b80\u77ed\u7684\u6458\u8981",id:"summury",level:3}],s={toc:u};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u4f17\u6240\u5468\u77e5\uff0c\u4e16\u754c\u4e0a\u7684\u8bed\u8a00\u4e4b\u95f4\u5b58\u5728\u5f88\u591a\u5dee\u5f02\u3002 \u5176\u4e2d\u4e00\u4e2a\u662f\u4f7f\u7528\u590d\u6570\u5f62\u5f0f\uff0c\u7ffb\u8bd1\u6210\u4e0d\u540c\u8bed\u8a00\u53ef\u80fd\u4f1a\u9020\u6210\u5f88\u5927\u56f0\u96be\u3002"),(0,a.kt)("p",null,"\u56e0\u6b64\uff0c\u6211\u4eec\u5f3a\u70c8\u5efa\u8bae\u60a8\u597d\u597d\u9605\u8bfb\u672c\u6587\uff0c\u4ee5\u8be6\u7ec6\u4e86\u89e3\u590d\u6570\u5f62\u5f0f\u4ee5\u53ca\u7ffb\u8bd1 AdGuard \u65f6\u5982\u4f55\u4f7f\u7528\u5b83\u4eec\u3002"),(0,a.kt)("h2",{id:"plurals"},"\u590d\u6570\u5f62\u5f0f\u662f\u4ec0\u4e48\u610f\u601d\uff1f"),(0,a.kt)("p",null,"\u4e0d\u540c\u8bed\u8a00\u7684\u540d\u8bcd\u53ef\u4ee5\u6709\u51e0\u79cd\u590d\u6570\u5f62\u5f0f\u3002 \u5b83\u4eec\u7684\u7528\u6cd5\u53d6\u51b3\u4e8e\u5355\u8bcd\u524d\u9762\u7684\u7279\u5b9a\u6570\u5b57\uff0c\u4ee5\u6307\u793a\u8be5\u5355\u8bcd\u8868\u793a\u7684\u6570\u76ee\u3002"),(0,a.kt)("p",null,"For instance, English words have two word forms when speaking about something in the singular, like ",(0,a.kt)("em",{parentName:"p"},"'one star'"),", and in the plural \u2014 ",(0,a.kt)("em",{parentName:"p"},"'two stars'"),". It doesn\u2019t matter if you say five, twenty six or even five hundred thirty two stars \u2014 the ending 's' will remain the same. \u4f46\u662f\u6709\u4e9b\u8bed\u8a00\u53ea\u6709\u4e00\u79cd\u5f62\u5f0f\uff0c\u53cd\u4e4b\uff0c\u6709\u4e9b\u8bed\u8a00\u4e5f\u53ef\u4ee5\u6709\u66f4\u591a\u79cd\u590d\u6570\u5f62\u5f0f\u3002"),(0,a.kt)("p",null,"\u4e0e\u82f1\u8bed\u76f8\u6bd4\uff0c\u6ce2\u5170\u8bed\u91cc\u7684\u540d\u8bcd\u5177\u6709\u4e09\u79cd\u590d\u6570\u5f62\u5f0f\u3002 One of them is used when speaking about something in the singular, another form is used in the plural but with numbers ending in 2\u20134, excluding 12\u201314, and the third form \u2014 for words with other numbers in front of them."),(0,a.kt)("p",null,"Let\u2019s take a look at this picture. \u5728\u8fd9\u91cc\uff0c\u53ef\u4ee5\u770b\u5230\u4e00\u7ec4\u6570\u5b57\u3002\u6309\u8fd9\u4e9b\u6570\u5b57\u8981\u9009\u62e9\u6570\u5b57\u540e\u9762\u7684\u5355\u8bcd\u5f62\u5f0f\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/Kb/ad_blocker/miscellaneous/adguard_translations/polish.png",alt:"\u6ce2\u5170\u8bed"})),(0,a.kt)("p",null,"\u6211\u4eec\u6765\u5728\u82f1\u8bed\u548c\u6ce2\u5170\u8bed\u4e4b\u95f4\u505a\u4e2a\u5c0f\u6bd4\u8f83\uff0c\u4ee5\u4fbf\u66f4\u597d\u7406\u89e3\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"  \u82f1\u6587\u7248\uff1a                                                  \u6ce2\u5170\u8bed\u7b49\u6548\uff1a\n\n  1. form \u2014 It takes one hour.                                     1. form \u2014 Zajmuje to godzin\u0119.\n  2. form \u2014 It takes two hours.                                    2. form \u2014 Zajmuje to dwie godziny.\n  3. form \u2014 It takes five hours.                                   3. form \u2014 Zajmuje to pi\u0119\u0107 godzin.\n")),(0,a.kt)("p",null,"\u73b0\u5728\u5f88\u660e\u663e\u7684\u662f\uff0c\u6ce2\u5170\u8bed ",(0,a.kt)("em",{parentName:"p"},"'godzin\u0119'"),"\uff08\u5c0f\u65f6\uff09\u5177\u6709\u4e09\u79cd\u4e0d\u540c\u7684\u5f62\u5f0f\uff0c\u800c\u82f1\u8bed\u5355\u8bcd\u4ec5\u66f4\u6539\u4e24\u6b21\u5355\u8bcd\u5f62\u5f0f\u3002"),(0,a.kt)("p",null,"\u9664\u6ce2\u5170\u8bed\u4e4b\u5916\uff0c\u4e16\u754c\u4e0a\u8fd8\u6709\u8bb8\u591a\u5176\u4ed6\u5177\u6709\u4e09\u79cd\u590d\u6570\u5f62\u5f0f\u7684\u8bed\u8a00\uff0c\u5305\u62ec\u4fc4\u8bed\uff0c\u585e\u5c14\u7ef4\u4e9a\u8bed\uff0c\u65af\u6d1b\u4f10\u514b\u8bed\uff0c\u6377\u514b\u8bed\u7b49\u8bed\u8a00\u3002 \u4f46\u5e76\u975e\u6240\u6709\u8bed\u8a00\u90fd\u9075\u5faa\u76f8\u540c\u8bed\u6cd5\u89c4\u5219\u3002 That's why it's so important to know how many plurals your language has, and how to use them correctly."),(0,a.kt)("h2",{id:"where-to-learn"},"\u5728\u54ea\u91cc\u53ef\u4ee5\u4e86\u89e3\u590d\u6570\u5f62\u5f0f\u7684\u53d8\u4f53\u6570\u91cf\uff1f"),(0,a.kt)("p",null,"\u5f53\u60a8\u9700\u8981\u4f7f\u7528\u590d\u6570\u5f62\u5f0f\u7684\u7ffb\u8bd1\u65f6\uff0c\u60a8\u5f88\u53ef\u80fd\u65e0\u6cd5\u7acb\u5373\u610f\u8bc6\u5230\u67d0\u4e9b\u8bed\u8a00\u7684\u5355\u8bcd\u5f62\u5f0f\u7684\u6570\u91cf\u3002"),(0,a.kt)("p",null,"\u4ee5\u4e0b\u662f\u60a8\u53ef\u4ee5\u4f7f\u7528\u7684\u4e00\u4e9b\u4fe1\u606f\u6765\u6e90\u3002"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"http://docs.translatehouse.org/projects/localization-guide/en/latest/l10n/pluralforms.html"},"\u672c\u5730\u5316\u6307\u5357")," \u5305\u542b\u5e7f\u6cdb\u7684\u8bed\u8a00\u5217\u8868\u3002 \u4e0d\u540c\u8bed\u8a00\u590d\u6570\u5f62\u5f0f\u7684\u6570\u91cf\u4ee5\u8fd9\u79cd\u65b9\u5f0f\u663e\u793a\uff1a 'nplurals=2', 'nplurals=4' \uff0c\u4f9d\u6b64\u7c7b\u63a8\u3002 '=' \u7b49\u53f7\u540e\u7684\u6570\u5b57\u8868\u793a\u76f8\u5e94\u8bed\u8a00\u7684\u5f62\u5f0f\u6570\u91cf\u3002"),(0,a.kt)("p",null,"\u6b64\u5916\uff0c\u60a8\u8fd8\u53ef\u4ee5\u5728 ",(0,a.kt)("a",{parentName:"p",href:"http://www.unicode.org/cldr/charts/latest/supplemental/language_plural_rules.html#rules"},"Unicode \u901a\u7528\u8bed\u8a00\u73af\u5883\u6570\u636e\u5b58\u50a8\u5e93"),"\uff08CLDR\uff09\u4e2d\u83b7\u53d6\u6709\u5173\u590d\u6570\u5f62\u5f0f\u7684\u76f8\u5173\u4fe1\u606f\u3002 CLDR \u590d\u6570\u89c4\u5219\uff0c\u5373\u6307\u5341\u8fdb\u5236\u6570\u5b57\uff081.5; 2.3; 100.1\u2026\uff09\u7684\u5176\u4ed6\u8bcd\u5f62\u5f0f\u3002\u4f46\u5728 AdGuard \u7ffb\u8bd1\u4e2d\u6211\u4eec\u4e0d\u4f7f\u7528\u5b83\u4eec\u3002"),(0,a.kt)("h2",{id:"translations"},"AdGuard \u7ffb\u8bd1\u4e2d\u7684\u590d\u6570\u5f62\u5f0f"),(0,a.kt)("p",null,"\u9996\u5148\uff0c\u60a8\u5f97\u660e\u767d\u5e76\u975e\u6bcf\u4e2a AdGuard \u8bd1\u6587\u90fd\u9700\u8981\u4f7f\u7528\u590d\u6570\u5f62\u5f0f\u3002"),(0,a.kt)("p",null,"\u5f53\u524d\uff0c\u6211\u4eec\u5728 Crowdin \u4e0a\u6709\u56db\u79cd\u4f7f\u7528\u590d\u6570\u5f62\u5f0f\u5b57\u7b26\u4e32\u7684\u7c7b\u578b\u3002"),(0,a.kt)("p",null,"\u6211\u4eec\u6765\u4ed4\u7ec6\u770b\u770b\u5b83\u4eec\u3002"),(0,a.kt)("h3",{id:"1type"},"1. \u5e26\u6709 ",(0,a.kt)("inlineCode",{parentName:"h3"},".singular"),"\u3001",(0,a.kt)("inlineCode",{parentName:"h3"},".dual"),"\u3001",(0,a.kt)("inlineCode",{parentName:"h3"},".plural")," \u4f5c\u4e3a\u7ed3\u5c3e\u7684\u5b57\u7b26\u4e32\u952e\u7684\u77ed\u8bed"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/public/Adguard/kb/en/plurals/dual_it.png",alt:"crowdin *border"})),(0,a.kt)("p",null,"\u5176\u4e2d\u5927\u591a\u6570\u5c5e\u4e8e ",(0,a.kt)("inlineCode",{parentName:"p"},"AdGuard for Windows")," \u9879\u76ee\u4e2d\uff0c\u4ec5\u5305\u542b\u4e00\u4e24\u4e2a\u5355\u8bcd\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"days\uff1b")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"extensions\uff1b")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"hours"))),(0,a.kt)("p",null,'\u8bf7\u6ce8\u610f\u5b57\u7b26\u4e32\u952e\uff0c\u5728 "Context" \u5b57\u6bb5\u4e2d\u60a8\u4f1a\u770b\u5230\u4e00\u4e9b\u5173\u4e8e\u590d\u6570\u5f62\u5f0f\u7684\u91cd\u8981\u6ce8\u89e3\u3002 \u5b57\u7b26\u4e32\u952e\u53ef\u80fd\u5305\u542b ',(0,a.kt)("inlineCode",{parentName:"p"},"Singular"),"\u3001 ",(0,a.kt)("inlineCode",{parentName:"p"},"Dual"),"\u3001 ",(0,a.kt)("inlineCode",{parentName:"p"},"Plural")," \u5355\u8bcd\uff08\u4f8b\u5982",(0,a.kt)("inlineCode",{parentName:"p"},"FormatDayDeclensionDual"),"\uff09\u3002 \u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u60a8\u5e94\u8be5\u4fdd\u7559\u952e\u4e2d\u6307\u5b9a\u7684\u9002\u5f53\u590d\u6570\u5f62\u5f0f\u3002"),(0,a.kt)("h3",{id:"2type"},"2. \u5355\u6570\u548c\u590d\u6570\u540d\u8bcd\u5b57\u7b26\u4e32\u4ee5\u9017\u53f7\u5206\u9694"),(0,a.kt)("p",null,"\u8fd9\u79cd\u5b57\u7b26\u4e32\u4e3b\u8981\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"AdGuard for Android")," \u9879\u76ee\u4e2d\u3002"),(0,a.kt)("p",null,"\u8bf7\u770b\u793a\u4f8b\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/public/Adguard/kb/en/plurals/android_fr.png",alt:"crowdin *border"})),(0,a.kt)("p",null,"\u5982\u679c\u60a8\u7684\u8bed\u8a00\u540d\u8bcd\u5177\u6709\u4e09\u79cd\u590d\u6570\u5f62\u5f0f\uff08\u6b63\u5982\u6ce2\u5170\u8bed)\uff0c\u8bf7\u7528\u9017\u53f7\u5206\u9694\u6bcf\u4e00\u4e2a\u590d\u6570\u5f62\u5f0f\u3002"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"hour, hours \u2014 godzin\u0119, godziny, godzin")),(0,a.kt)("p",null,"\u5982\u679c\u4e00\u4e2a\u540d\u8bcd\u53ea\u6709\u4e24\u79cd\u5f62\u5f0f\uff0c\u5219\u65e0\u9700\u91cd\u590d\u5199\u540c\u4e00\u5f62\u5f0f\uff08",(0,a.kt)("em",{parentName:"p"},"\u901a\u5e38\u4ec5\u9002\u7528\u4e8e\u8fd9\u79cd\u5e26\u6709\u590d\u6570\u5f62\u5f0f\u7684\u5b57\u7b26\u4e32\uff01"),"\uff09\u3002 \u4f46\u662f\uff0c\u5982\u679c\u60a8\u628a\u540c\u4e00\u4e2a\u5f62\u5f0f\u91cd\u5199\u4e24\u6b21\u4e5f\u4e0d\u4f1a\u51fa\u9519\u3002"),(0,a.kt)("h3",{id:"3type"},"3. \u4f7f\u7528 Crowdin \u53d1\u5c55\u6a21\u5f0f\u7684\u5b57\u7b26\u4e32"),(0,a.kt)("p",null,"\u8fd9\u662f\u8fdb\u884c\u590d\u6570\u5b57\u7b26\u4e32\u7ffb\u8bd1\u7684\u6700\u4f73\u7528\u6237\u53cb\u597d\u7684\u65b9\u6848\u3002"),(0,a.kt)("p",null,"Crowdin \u4e3a\u7528\u6237\u63d0\u4f9b\u7ffb\u8bd1\u4e00\u5b9a\u6570\u91cf\u5177\u6709\u4e0d\u540c\u590d\u6570\u5f62\u5f0f\u7684\u77ed\u8bed\u7684\u529f\u80fd\u3002"),(0,a.kt)("p",null,"\u5982\u679c\u60a8\u7684\u8bed\u8a00\u4ec5\u6709\u4e00\u79cd\u590d\u6570\u5f62\u5f0f\uff0c\u5219\u60a8\u53ea\u4f1a\u770b\u5230\u4e00\u4e2a\u8981\u7ffb\u8bd1\u7684\u77ed\u8bed\u3002 \u5982\u679c\u8bed\u8a00\u5177\u6709\u4e09\u79cd\u5f62\u5f0f\uff0cCrowdin \u5c06\u4e3a\u60a8\u63d0\u4f9b\u88ab\u5206\u51fa\u53e6\u5916\u4e24\u5230\u4e09\u90e8\u5206\u7684\u5b57\u7b26\u4e32\u8fdb\u884c\u7ffb\u8bd1\u3002"),(0,a.kt)("p",null,"\u4f8b\u5982\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/public/Adguard/kb/en/plurals/crowdin_scheme.png",alt:"crowdin *border"})),(0,a.kt)("p",null,"\u5728\u7ffb\u8bd1\u548c\u6279\u51c6\u8fd9\u4e9b\u5b57\u7b26\u4e32\u65f6\uff0c\u8bf7\u6ce8\u610f\u4e00\u4e0b\uff0c \u5982\u679c\u60a8\u4e0d\u77e5\u9053 \u201cOther\u201d \u5b57\u6bb5\u7684\u542b\u4e49\uff0c\u5219\u53ea\u9700\u7c98\u8d34\u4e0e \u201c Many\u201d \u5b57\u6bb5\u4e2d\u76f8\u540c\u7684\u8868\u5355\u5373\u53ef\u3002 \u201cMany\u201d \u548c \u201cOther\u201d \u5b57\u6bb5\u7684\u5185\u5bb9\u53ef\u4ee5\u76f8\u540c\u3002"),(0,a.kt)("h3",{id:"4type"},"4. \u5e26\u6709\u7528\u7ad6\u7ebf\u5206\u9694\u6a21\u677f\u7684\u5b57\u7b26\u4e32"),(0,a.kt)("p",null,"This is the most complicated type of AdGuard strings which is mostly used in the ",(0,a.kt)("inlineCode",{parentName:"p"},"AdGuard Websites")," project."),(0,a.kt)("p",null,"Pay close attention to a vertical bar sign between the sentences and ",(0,a.kt)("strong",{parentName:"p"},"%count%")," placeholders in original phrases \u2014 this will help you identify phrases where translations require the use of plural forms."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/public/Adguard/kb/en/plurals/plurals_site.png",alt:"crowdin *border"})),(0,a.kt)("p",null,"\u73b0\u5728\uff0c\u6211\u4eec\u6765\u60f3\u8c61\u4e00\u4e0b\u3002\u60a8\u5c06\u9762\u4e34\u8fd9\u6837\u7684\u77ed\u8bed\uff1a",(0,a.kt)("inlineCode",{parentName:"p"},'"Standard license for %count% computer | Standard license for %count% computers"'),"\u3002"),(0,a.kt)("p",null,"\u60a8\u5e94\u8be5\u77e5\u9053\u54ea\u4e9b\u4fe1\u606f\u624d\u80fd\u6b63\u786e\u7ffb\u8bd1\u5b83\uff1f"),(0,a.kt)("p",null,"\u8fd9\u4e9b\u7528\u7ad6\u7ebf\u7b26\u53f7\u7684\u53e5\u5b50\u79f0\u4e3a",(0,a.kt)("strong",{parentName:"p"},"\u201c templates\u201d"),"\uff0c\u56e0\u4e3a\u5b83\u4eec\u88ab\u7528\u4f5c\u5177\u6709\u4e0d\u540c\u6570\u5b57\u7684\u77ed\u8bed\u7684\u6a21\u677f\u3002"),(0,a.kt)("p",null,"\u56de\u5230\u793a\u4f8b\uff0c\u7531\u4e8e\u82f1\u8bed\u4ec5\u5305\u542b\u4e24\u79cd\u590d\u6570\u5f62\u5f0f\uff0c\u56e0\u6b64\u5e94\u5206\u522b\u6709\u4e24\u4e2a\u6a21\u677f\uff1a"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Standard license for *%count%* computer | Standard license for *%count%* computers")),(0,a.kt)("p",null,"where ",(0,a.kt)("strong",{parentName:"p"},"template 1")," is Standard license for ",(0,a.kt)("em",{parentName:"p"},"%count%")," computer,"),(0,a.kt)("p",null,"and ",(0,a.kt)("strong",{parentName:"p"},"template 2")," is Standard license for ",(0,a.kt)("em",{parentName:"p"},"%count%")," computers"),(0,a.kt)("p",null,"\u60a8\u5e94\u6ce8\u610f\u7684\u53e6\u4e00\u91cd\u8981\u4e8b\u9879\u662f ",(0,a.kt)("strong",{parentName:"p"},"\uff05count\uff05")," \u5360\u4f4d\u7b26\uff0c\u901a\u5e38\u5728\u5176\u5b9a\u4e49\u7684\u5355\u8bcd\u524d\u51fa\u73b0\u3002 \u6839\u636e\u9009\u62e9\u7684\u6a21\u677f\uff0c\u6b64\u5904\u5c06\u663e\u793a\u4e0d\u540c\u7684\u6570\u5b57\uff0c\u800c\u4e0d\u662f ",(0,a.kt)("strong",{parentName:"p"},"\uff05count\uff05")," \u3002"),(0,a.kt)("p",null,"\u5728\u53e6\u4e00\u79cd\u8bed\u8a00\u5177\u6709\u4e09\u79cd\u590d\u6570\u5f62\u5f0f\u7684\u60c5\u51b5\u4e0b\uff0c\u5e94\u8be5\u6709\u4e09\u4e2a\u6a21\u677f\uff0c\u5373\u4e24\u4e2a\u7ad6\u7ebf\u7b26\u53f7\u3002"),(0,a.kt)("p",null,"\u4f8b\u5982\uff0c\u5f53\u6211\u4eec\u5c06\u4e0a\u9762\u63d0\u5230\u7684\u77ed\u8bed\u7ffb\u8bd1\u6210\u65af\u6d1b\u4f10\u514b\u8bed\u65f6\uff0c\u6839\u636e ",(0,a.kt)("a",{parentName:"p",href:"http://docs.translatehouse.org/projects/localization-guide/en/latest/l10n/pluralforms.html"},"Localization Guide")," \u7684\u89c4\u5219\uff0c\u5b83\u5177\u6709\u4e09\u79cd\u8bcd\u5f62\uff0c\u6b63\u786e\u7684\u7ffb\u8bd1\u5e94\u8be5\u662f\u8fd9\u6837\u7684\uff1a"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"**\u0160tandartn\xe1 licencia pre *%count%* po\u010d\xedta\u010d | \u0160tandartn\xe1 licencia pre *%count%* po\u010d\xedta\u010de | \u0160tandartn\xe1 licencia pre *%count%* po\u010d\xedta\u010dov**")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/Kb/ad_blocker/miscellaneous/adguard_translations/slovak.png",alt:"\u65af\u6d1b\u4f10\u514b\u8bed"})),(0,a.kt)("p",null,"\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u6211\u4eec\u770b\u5230\u4e09\u4e2a\u6a21\u677f\uff0c\u5176\u4e2d\u5305\u542b\u65af\u6d1b\u4f10\u514b\u8bed\u4e2d\u5355\u8bcd ",(0,a.kt)("em",{parentName:"p"},'"po\u010d\xedta\u010d"')," \uff08\u8ba1\u7b97\u673a\uff09\u7684\u4e09\u79cd\u5f62\u5f0f\u3002"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"\u5982\u679c\u6211\u4eec\u5ffd\u7565\u5176\u4e2d\u4e00\u79cd\u5f62\u5f0f\uff0c\u800c\u53ea\u4e3a\u65af\u6d1b\u4f10\u514b\u8bed\u4f7f\u7528\u4e24\u4e2a\uff0c\u800c\u4e0d\u662f\u4e09\u4e2a\u6a21\u677f\uff0c\u5219\u7cfb\u7edf\u5c06\u65e0\u6cd5\u4e3a\u67d0\u4e9b\u6570\u5b57\u91c7\u7528\u9002\u5f53\u7684\u6a21\u677f"),"\u3002\u7ed3\u679c\u662f\uff0c\u53e5\u5b50\u4e2d\u5c06\u51fa\u73b0\u8bed\u6cd5\u9519\u8bef\uff0c\u4f8b\u5982\u82f1\u8bed\uff1a",(0,a.kt)("em",{parentName:"p"},"Standard license for 5 computer\uff08\u6b63\u786e\u5e94\u662f\uff1aStandard license for 5 computers\uff09"),"\u3002"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Always use as many forms as there are in your language, even when the word itself has fewer word forms."))),(0,a.kt)("p",null,"\u4f8b\u5982\uff0c\u585e\u5c14\u7ef4\u4e9a\u5355\u8bcd ",(0,a.kt)("em",{parentName:"p"},"'ra\u010dunar'"),"\uff08\u8ba1\u7b97\u673a\uff08computer\uff09\uff09\u53ea\u6709\u4e24\u79cd\u5f62\u5f0f\u3002 \u4f46\u662f\u585e\u5c14\u7ef4\u4e9a\u8bed\u6709 3 \u79cd\u590d\u6570\u5f62\u5f0f\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/Kb/ad_blocker/miscellaneous/adguard_translations/serbian.png",alt:"\u585e\u5c14\u7ef4\u4e9a\u8bed"})),(0,a.kt)("p",null,"\u56e0\u6b64\uff0c\u82f1\u8bed\u7ffb\u8bd1\u6210\u585e\u5c14\u7ef4\u4e9a\u8bed\u662f\uff1a"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"**Standardna licenca za *%count%* ra\u010dunar | Standardna licenca za *%count%* ra\u010dunara | Standardna licenca za *%count%* ra\u010dunara**")),(0,a.kt)("p",null,"\u5c3d\u7ba1\u5f88\u660e\u663e\uff0c\u6700\u540e\u4e24\u4e2a\u6a21\u677f\u6ca1\u6709\u533a\u522b\uff0c\u4f46\u4fdd\u6301\u89c4\u5219\u975e\u5e38\u91cd\u8981\uff1a",(0,a.kt)("strong",{parentName:"p"},"\u6a21\u677f\u7684\u6570\u91cf\u5e94\u53cd\u6620\u76f8\u5e94\u8bed\u8a00\u7684\u590d\u6570\u5f62\u5f0f")," (\u901a\u5e38\u9488\u5bf9\u8fd9\u79cd\u5e26\u590d\u6570\u7684\u5b57\u7b26\u4e32)\u3002"),(0,a.kt)("h3",{id:"summury"},"\u7b80\u77ed\u7684\u6458\u8981"),(0,a.kt)("p",null,"\u5728\u7ffb\u8bd1 AdGuard \u9879\u76ee\u65f6\uff0c\u8bf7\u5bc6\u5207\u6ce8\u610f\u9700\u8981\u4f7f\u7528\u590d\u6570\u5f62\u5f0f\u7684\u77ed\u8bed\u3002"),(0,a.kt)("p",null,"\u5c3d\u7ba1\u524d\u4e09\u79cd\u7c7b\u578b\u7684\u5b57\u7b26\u4e32\u6216\u591a\u6216\u5c11\u5bb9\u6613\u6267\u884c\uff0c\u4f46\u7b2c\u56db\u7c7b\u8981\u6c42\u66f4\u9ad8\u7684\u8b66\u60d5\u6027\u3002"),(0,a.kt)("p",null,"\u91cd\u7533\u4e00\u6b21\uff1a\u5982\u679c\u60a8\u9047\u5230\u5305\u542b\u4e24\u4e2a\u91cd\u8981\u5143\u7d20\u7684\u539f\u59cb\u8bcd\u7ec4\uff1a",(0,a.kt)("strong",{parentName:"p"},"\u7ad6\u7ebf\u7b26\u53f7"),"\u548c ",(0,a.kt)("strong",{parentName:"p"},"\uff05count\uff05")," \u5360\u4f4d\u7b26\uff0c\u8bf7\u6267\u884c\u4ee5\u4e0b\u64cd\u4f5c\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u6307\u7ffb\u8bd1\u6210\u4e00\u79cd\u8bed\u8a00\u7684\u590d\u6570\u89c4\u5219\uff1b")),(0,a.kt)("p",null,"The number of your templates should be consistent with the number of plural forms your language includes, even in cases some words have fewer forms themselves. Two plural forms \u2014 two templates in translations; five plural forms \u2014 five templates, etc."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u4e0d\u8981\u5fd8\u8bb0\u5728\u6a21\u677f\u4e4b\u95f4\u4f7f\u7528\u7ad6\u7ebf\u7b26\u53f7\uff1b")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u8bf7\u52ff\u7ffb\u8bd1\uff0c\u586b\u5199\u6216\u5220\u9664 ",(0,a.kt)("strong",{parentName:"p"},"\uff05count\uff05")," \u5360\u4f4d\u7b26\u3002"))),(0,a.kt)("p",null,"By following these simple rules you will help AdGuard developers avoid a lot of unnecessary complications during the localization process."))}d.isMDXComponent=!0}}]);