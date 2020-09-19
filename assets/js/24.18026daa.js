(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{375:function(s,e,t){"use strict";t.r(e);var a=t(42),r=Object(a.a)({},(function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"troubleshooting"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#troubleshooting"}},[s._v("#")]),s._v(" Troubleshooting")]),s._v(" "),t("p",[s._v("Troubleshooting a Kernel Extension might not be straight forward, here are some tactics:")]),s._v(" "),t("h2",{attrs:{id:"checking-whether-a-kernel-extension-has-loaded-successfully"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#checking-whether-a-kernel-extension-has-loaded-successfully"}},[s._v("#")]),s._v(" Checking whether a Kernel Extension has loaded successfully")]),s._v(" "),t("p",[s._v("Run the following command in terminal:")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("kextstat "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" -i "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"KEXT\'S_NAME"')]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("For example:")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("$ kextstat "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" -i "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"itlwm"')]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("70")]),s._v("    "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" 0xffffff7f84126000 0xf86000   0xf86000   com.zxystd.itlwm "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" 10EA7641-BDCB-3820-9AF7-4C773FD9953E "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("33")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("13")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[t("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("1")]),s._v(">")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("ul",[t("li",[s._v("If a new line with the kext's name appears, it means the kext has successfully loaded.")]),s._v(" "),t("li",[s._v("If you get nothing, please recheck your bootloader's configuration.")])]),s._v(" "),t("h2",{attrs:{id:"resetting-system-preferences-network"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#resetting-system-preferences-network"}},[s._v("#")]),s._v(" Resetting System Preferences - Network")]),s._v(" "),t("p",[s._v("If you've tried other network-related Kernel Extensions before, it's possible that some system configurations were corrupted.")]),s._v(" "),t("p",[t("strong",[s._v("WARNING:")]),s._v(" The following procedures will completely reset your network preferences, including proxies, dns, etc. The deleted files will be automatically created. "),t("em",[t("strong",[s._v("But make sure you have made a proper backup.")])])]),s._v(" "),t("ol",[t("li",[t("p",[s._v("Open System Preferences → Network, delete all ports, click on apply at the bottom right corner")])]),s._v(" "),t("li",[t("p",[s._v("Open Terminal, run:")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("open")]),s._v(" /Library/Preferences/SystemConfiguration\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])])]),s._v(" "),t("li",[t("p",[s._v("Then Delete")]),s._v(" "),t("ul",[t("li",[t("strong",[t("code",[s._v("com.apple.airport.preferences.plist")])])]),s._v(" "),t("li",[t("strong",[t("code",[s._v("preferences.plist")])])]),s._v(" "),t("li",[t("strong",[t("code",[s._v("NetworkInterfaces.plist")])])]),s._v(" "),t("li",[t("strong",[t("code",[s._v("com.apple.network.identification.plist")])])]),s._v(" "),t("li",[t("strong",[t("code",[s._v("com.apple.wifi.message-tracer.plist")])])]),s._v(" "),t("li",[s._v("And all files containing "),t("code",[s._v("enX")]),s._v(", ("),t("code",[s._v("X")]),s._v(" as an integer)")])]),s._v(" "),t("blockquote",[t("p",[s._v("If you've changed your SMBIOS before, you must also delete files with names that contain your current and previous models.")])])]),s._v(" "),t("li",[t("p",[s._v("Reboot")])])]),s._v(" "),t("h2",{attrs:{id:"getting-kext-logs-for-runtime-issues"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#getting-kext-logs-for-runtime-issues"}},[s._v("#")]),s._v(" Getting Kext Logs For Runtime Issues")]),s._v(" "),t("h3",{attrs:{id:"manually-for-airportitlwm"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#manually-for-airportitlwm"}},[s._v("#")]),s._v(" Manually for AirportItlwm")]),s._v(" "),t("blockquote",[t("p",[s._v("Credit "),t("a",{attrs:{href:"https://github.com/usr-sse2",target:"_blank",rel:"noopener noreferrer"}},[s._v("usr-sse2"),t("OutboundLink")],1)])]),s._v(" "),t("p",[t("strong",[s._v("History Logs:")])]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("dmesg")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"AirportItlwm"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" ~/Desktop/AirportItlwm.log\n\nlog show --last boot --predicate "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'sender=\"IO80211Family\"'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" ~/Desktop/AirportItlwm.log\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[t("strong",[s._v("Real-Time Airport Logs:")])]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" /System/Library/PrivateFrameworks/Apple80211.framework/Versions/A/Resources/airport debug +AllUserland +AllDriver +AllVendor\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" /System/Library/PrivateFrameworks/Apple80211.framework/Versions/A/Resources/airport logger\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("h3",{attrs:{id:"using-heliport"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#using-heliport"}},[s._v("#")]),s._v(" Using HeliPort")]),s._v(" "),t("p",[t("RouterLink",{attrs:{to:"/HeliPort/Troubleshooting.html"}},[s._v("Use HeliPort to create a diagnostic report")])],1),s._v(" "),t("h3",{attrs:{id:"manually-for-itlwm"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#manually-for-itlwm"}},[s._v("#")]),s._v(" Manually for itlwm")]),s._v(" "),t("ol",[t("li",[t("p",[s._v("Run the following command in terminal:")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("log show --last boot "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" -i "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"itlwm"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" ~/Desktop/Log_"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("date")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'+%Y-%m-%d_%H-%M-%S'")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v('"')]),s._v(".log\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])])]),s._v(" "),t("li",[t("p",[s._v("A log file will then be created on your Desktop.")])])]),s._v(" "),t("h2",{attrs:{id:"getting-kext-logs-for-loading-failures"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#getting-kext-logs-for-loading-failures"}},[s._v("#")]),s._v(" Getting Kext Logs For Loading Failures")]),s._v(" "),t("p",[s._v("The "),t("code",[s._v("log")]),s._v(" command in macOS is ridiculously unreliable for identifying Kext loading issues when Kexts are injected by bootloaders. Fortunately, we can use "),t("code",[s._v("msgbuf")]),s._v(" or load the Kext manually after booting into the system to solve this issue.")]),s._v(" "),t("h3",{attrs:{id:"using-dmesg"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#using-dmesg"}},[s._v("#")]),s._v(" Using "),t("code",[s._v("dmesg")])]),s._v(" "),t("blockquote",[t("p",[s._v("Credit "),t("a",{attrs:{href:"https://github.com/lvs1974",target:"_blank",rel:"noopener noreferrer"}},[s._v("lvs1974"),t("OutboundLink")],1)])]),s._v(" "),t("ol",[t("li",[t("p",[s._v("Add "),t("code",[s._v("msgbuf=1048576")]),s._v(" into "),t("code",[s._v("boot-args")]),s._v(" using either nvram or your bootloader's config")])]),s._v(" "),t("li",[t("p",[s._v("Run the following command in terminal:")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("dmesg")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" -i "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"itlwm"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" ~/Desktop/Log_"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("date")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'+%Y-%m-%d_%H-%M-%S'")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v('"')]),s._v(".log\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])])]),s._v(" "),t("li",[t("p",[s._v("A log file will then be created on your Desktop.")])])]),s._v(" "),t("h3",{attrs:{id:"loading-the-kext-manually-only-works-for-itlwm"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#loading-the-kext-manually-only-works-for-itlwm"}},[s._v("#")]),s._v(" Loading the kext manually only works for "),t("code",[s._v("itlwm")])]),s._v(" "),t("ol",[t("li",[t("p",[s._v("Download the latest version of "),t("strong",[s._v("itlwm")]),s._v(", unzip")])]),s._v(" "),t("li",[t("p",[s._v("Remove itlwm from your EFI")])]),s._v(" "),t("li",[t("p",[s._v("Disable System Integrity Protection")])]),s._v(" "),t("li",[t("p",[s._v("Restart your computer")])]),s._v(" "),t("li",[t("p",[s._v("Run the following commands in Terminal:")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" -R itlwm.kext /tmp\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("chown")]),s._v(" -R root:wheel /tmp/*.kext\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" kextutil -v /tmp/*.kext\nlog show --last boot "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" -i "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"itlwm"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" ~/Desktop/Log_"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("date")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'+%Y-%m-%d_%H-%M-%S'")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v('"')]),s._v(".log\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])])]),s._v(" "),t("li",[t("p",[s._v("A log file will then be created on your Desktop.")])])])])}),[],!1,null,null,null);e.default=r.exports}}]);