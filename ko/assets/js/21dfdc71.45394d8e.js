"use strict";(self.webpackChunkadguard_knowledge_base=self.webpackChunkadguard_knowledge_base||[]).push([[6683],{4137:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>c});var o=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,o,a=function(e,t){if(null==e)return{};var r,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=o.createContext({}),d=function(e){var t=o.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=d(e.components);return o.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=d(r),c=a,g=m["".concat(i,".").concat(c)]||m[c]||u[c]||n;return r?o.createElement(g,l(l({ref:t},s),{},{components:r})):o.createElement(g,l({ref:t},s))}));function c(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,l=new Array(n);l[0]=m;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:a,l[1]=p;for(var d=2;d<n;d++)l[d]=r[d];return o.createElement.apply(null,l)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},6577:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>u,frontMatter:()=>n,metadata:()=>p,toc:()=>d});var o=r(7462),a=(r(7294),r(4137));const n={title:"How to get system logs",sidebar_position:4},l=void 0,p={unversionedId:"adguard-for-android/solving-problems/logcat",id:"adguard-for-android/solving-problems/logcat",title:"How to get system logs",description:"\uc774 \ubb38\uc11c\ub294 \uc2dc\uc2a4\ud15c \uc218\uc900\uc5d0\uc11c \uae30\uae30\ub97c \ubcf4\ud638\ud558\ub294 \ub2e4\uae30\ub2a5 \uad11\uace0 \ucc28\ub2e8\uae30\uc778 Android\uc6a9 AdGuard\uc5d0 \ub300\ud574 \ub2e4\ub8f9\ub2c8\ub2e4. \uc5b4\ub5bb\uac8c \ub3d9\uc791\ud558\ub294\uc9c0 \uc54c\uace0 \uc2f6\uc73c\uc2dc\ub2e4\uba74 AdGuard \uc571\uc744 \ub2e4\uc6b4\ub85c\ub4dc \ud574 \ubcf4\uc138\uc694.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/adguard-for-android/solving-problems/logcat.md",sourceDirName:"adguard-for-android/solving-problems",slug:"/adguard-for-android/solving-problems/logcat",permalink:"/KnowledgeBase/ko/adguard-for-android/solving-problems/logcat",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBase/edit/master/docs/adguard-for-android/solving-problems/logcat.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"How to get system logs",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"How to automate AdGuard for Android",permalink:"/KnowledgeBase/ko/adguard-for-android/solving-problems/tasker"},next:{title:"HAR \ud30c\uc77c \uc218\uc9d1 \ubc29\ubc95",permalink:"/KnowledgeBase/ko/adguard-for-android/solving-problems/har"}},i={},d=[{value:"\uae30\uae30\uc5d0\uc11c \ubc84\uadf8 \ubcf4\uace0\uc11c \ubc1b\uae30",id:"\uae30\uae30\uc5d0\uc11c-\ubc84\uadf8-\ubcf4\uace0\uc11c-\ubc1b\uae30",level:2},{value:"Capture a bug report via Logcat",id:"capture-a-bug-report-via-logcat",level:2},{value:"ROOT \uc0ac\uc6a9\uc790\ub97c \uc704\ud55c \ub300\uccb4 \ubc29\ubc95",id:"root-\uc0ac\uc6a9\uc790\ub97c-\uc704\ud55c-\ub300\uccb4-\ubc29\ubc95",level:3}],s={toc:d};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,o.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"\uc774 \ubb38\uc11c\ub294 \uc2dc\uc2a4\ud15c \uc218\uc900\uc5d0\uc11c \uae30\uae30\ub97c \ubcf4\ud638\ud558\ub294 \ub2e4\uae30\ub2a5 \uad11\uace0 \ucc28\ub2e8\uae30\uc778 Android\uc6a9 AdGuard\uc5d0 \ub300\ud574 \ub2e4\ub8f9\ub2c8\ub2e4. \uc5b4\ub5bb\uac8c \ub3d9\uc791\ud558\ub294\uc9c0 \uc54c\uace0 \uc2f6\uc73c\uc2dc\ub2e4\uba74 ",(0,a.kt)("a",{parentName:"p",href:"https://adguard.com/download.html?auto=true"},"AdGuard \uc571\uc744 \ub2e4\uc6b4\ub85c\ub4dc")," \ud574 \ubcf4\uc138\uc694.")),(0,a.kt)("p",null,"Sometimes a regular log may not be sufficient to identify the origin of the problem. In such cases a system log is needed. Below are instructions on how to collect and get it: via Developer options and Logcat."),(0,a.kt)("h2",{id:"\uae30\uae30\uc5d0\uc11c-\ubc84\uadf8-\ubcf4\uace0\uc11c-\ubc1b\uae30"},"\uae30\uae30\uc5d0\uc11c \ubc84\uadf8 \ubcf4\uace0\uc11c \ubc1b\uae30"),(0,a.kt)("p",null,"\uae30\uae30\uc5d0\uc11c \uc9c1\uc811 \ubc84\uadf8 \ubcf4\uace0\uc11c\ub97c \ubc1b\uc73c\ub824\uba74 \ub2e4\uc74c\uc744 \uc218\ud589\ud558\uc2ed\uc2dc\uc624."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Be sure you have ",(0,a.kt)("a",{parentName:"p",href:"https://developer.android.com/studio/run/device.html#developer-device-options"},"Developer options")," enabled.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"\uac1c\ubc1c\uc790 \uc635\uc158"),"\uc5d0\uc11c ",(0,a.kt)("strong",{parentName:"p"},"\ubc84\uadf8 \uc2e0\uace0"),"\ub97c \ud0ed\ud569\ub2c8\ub2e4."))),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/public/Adguard/kb/newscreenshots/En/Android3.1/bugreporten.png",alt:"\ubc84\uadf8 \uc2e0\uace0 *mobile"})),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Select the type of bug report you want and tap ",(0,a.kt)("strong",{parentName:"li"},"Report"),".")),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"After a moment, you will see a notification that the bug report is ready (see Figure 2).")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/public/Adguard/kb/newscreenshots/En/Android3.1/bugreporteen.png",alt:"\ubc84\uadf8 \uc2e0\uace0 *mobile"})),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},"\uc54c\ub9bc\uc744 \ub204\ub985\ub2c8\ub2e4.")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/public/Adguard/kb/newscreenshots/En/Android3.1/bugreport3en.png",alt:"\ubc84\uadf8 \uc2e0\uace0 *mobile_border"})),(0,a.kt)("ol",{start:5},(0,a.kt)("li",{parentName:"ol"},"\uc774 \ub85c\uadf8\ub97c \uc9c0\uc6d0 \ud300\uc5d0 \ubcf4\ub0c5\ub2c8\ub2e4.")),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Our support team will process your ticket much faster if you specify the HelpDesk ticket number or the GitHub issue number in your message to support.")),(0,a.kt)("h2",{id:"capture-a-bug-report-via-logcat"},"Capture a bug report via Logcat"),(0,a.kt)("p",null,"On devices with Android 7 and below, it is not possible to send a bug report automatically. Then you can capture it manually via Logcat \u2014 a standard Android command-line tool that dumps a log of system messages."),(0,a.kt)("p",null,"Follow this instruction:"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"1\ub2e8\uacc4: \uae30\uae30 \uc900\ube44")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\uae30\uae30\ub97c \uac1c\ubc1c\uc790 \ubaa8\ub4dc\ub85c \uc804\ud658\ud558\uae30 \uc704\ud574 To do this: go to ",(0,a.kt)("strong",{parentName:"p"},"Settings")," \u2192 ",(0,a.kt)("strong",{parentName:"p"},"About")," \u2192 tap ",(0,a.kt)("strong",{parentName:"p"},"Build Number")," 7 times.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"\uac1c\ubc1c\uc790 \uc635\uc158"),"\uc73c\ub85c \uc774\ub3d9\ud569\ub2c8\ub2e4.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"USB \ub514\ubc84\uae45"),"\uc744 \ud65c\uc131\ud654\ud569\ub2c8\ub2e4.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Increase ",(0,a.kt)("strong",{parentName:"p"},"Logger buffer")," sizes to 4 MB per log buffer."))),(0,a.kt)("p",null,"4 MB should be enough for storing the logs we need until you're able to do the second part (getting the log from the device);"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Part #2: reproduce the problem")),(0,a.kt)("p",null,"It is important to reproduce the problem after you're done with the first part."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\ubb38\uc81c\ub97c \uc7ac\ud604\ud569\ub2c8\ub2e4.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Remember/write down the date and time of reproduction and include it in the email to our support later."))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Part #3: get the log")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Connect your device to a PC with a USB cable.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Download ",(0,a.kt)("a",{parentName:"p",href:"https://developer.android.com/studio/releases/platform-tools#downloads"},"Android SDK Platform Tools"),". Choose the appropriate download link for your OS from the Downloads section. Once you tap the link, a ZIP file will be downloaded. You can extract the ADB (Android Debug Bridge) files from the ZIP file and store them wherever you want.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Test whether ADB is working properly: connect your Android device to your computer using a USB cable, open the Command Prompt, PowerShell or Terminal and run the following command:"))),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"adb devices")),(0,a.kt)("p",null,"An example of a successful result:"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/kb/ad_blocker/android/logcat/logcat_step-3.png",alt:"Step 3"})),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},"Then run the following command (insert the relevant path):")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"adb logcat -v threadtime -d > C:\\Program Files\\platform-tools\\logs.txt")),(0,a.kt)("p",null,"Email the created ",(0,a.kt)("inlineCode",{parentName:"p"},"txt")," file as well as the time the problem was reproduced (from part #2) to our support team at ",(0,a.kt)("a",{parentName:"p",href:"mailto:support@adguard.com"},"support@adguard.com"),"."),(0,a.kt)("h3",{id:"root-\uc0ac\uc6a9\uc790\ub97c-\uc704\ud55c-\ub300\uccb4-\ubc29\ubc95"},"ROOT \uc0ac\uc6a9\uc790\ub97c \uc704\ud55c \ub300\uccb4 \ubc29\ubc95"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Download and run ",(0,a.kt)("a",{parentName:"p",href:"https://play.google.com/store/apps/details?id=com.pluscubed.matlog"},"Logcat"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\uba54\ub274\uc5d0\uc11c ",(0,a.kt)("strong",{parentName:"p"},"\ub179\uc74c"),"\uc744 \uc120\ud0dd\ud569\ub2c8\ub2e4. \ub85c\uadf8 \ud30c\uc77c\uc758 \uc774\ub984\uc744 \uc785\ub825\ud558\uac70\ub098 ",(0,a.kt)("strong",{parentName:"p"},"\ud655\uc778"),"\uc744 \ub204\ub985\ub2c8\ub2e4. \uc774\uc81c ",(0,a.kt)("strong",{parentName:"p"},"\ud648")," \ubc84\ud2bc\uc744 \ub204\ub974\uba74 CatLog\uac00 \ub85c\uadf8\uc778 \ubc30\uacbd\uc744 \uacc4\uc18d \uae30\ub85d\ud569\ub2c8\ub2e4.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\ubb38\uc81c\ub97c \uc7ac\ud604\ud569\ub2c8\ub2e4.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"CatLog\ub97c \uc5f4\uace0 \uba54\ub274\uc5d0\uc11c ",(0,a.kt)("strong",{parentName:"p"},"\uae30\ub85d \uc911\uc9c0"),"\ub97c \ub204\ub985\ub2c8\ub2e4.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\uc774 \ub85c\uadf8\ub97c \uc9c0\uc6d0 \ud300\uc5d0 \ubcf4\ub0c5\ub2c8\ub2e4."))),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Our support team will process your ticket much faster if you specify the HelpDesk ticket number or the GitHub issue number in your message to support.")))}u.isMDXComponent=!0}}]);