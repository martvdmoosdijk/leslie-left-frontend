"use strict";(self.webpackChunkleslie_left_frontend=self.webpackChunkleslie_left_frontend||[]).push([[589],{1589:function(t,e,n){n.r(e),n.d(e,{getCLS:function(){return f},getFCP:function(){return l},getFID:function(){return v},getLCP:function(){return p},getTTFB:function(){return h}});var i=function(t,e){return{name:t,value:void 0===e?-1:e,delta:0,entries:[],id:"v1-".concat(Date.now(),"-").concat(Math.floor(8999999999999*Math.random())+1e12)}},a=function(t,e){try{if(PerformanceObserver.supportedEntryTypes.includes(t)){if("first-input"===t&&!("PerformanceEventTiming"in self))return;var n=new PerformanceObserver((function(t){return t.getEntries().map(e)}));return n.observe({type:t,buffered:!0}),n}}catch(t){}},r=function(t,e){var n=function n(i){"pagehide"!==i.type&&"hidden"!==document.visibilityState||(t(i),e&&(removeEventListener("visibilitychange",n,!0),removeEventListener("pagehide",n,!0)))};addEventListener("visibilitychange",n,!0),addEventListener("pagehide",n,!0)},o=function(t){addEventListener("pageshow",(function(e){e.persisted&&t(e)}),!0)},u="function"==typeof WeakSet?new WeakSet:new Set,c=function(t,e,n){var i;return function(){e.value>=0&&(n||u.has(e)||"hidden"===document.visibilityState)&&(e.delta=e.value-(i||0),(e.delta||void 0===i)&&(i=e.value,t(e)))}},f=function(t,e){var n,u=i("CLS",0),f=function(t){t.hadRecentInput||(u.value+=t.value,u.entries.push(t),n())},s=a("layout-shift",f);s&&(n=c(t,u,e),r((function(){s.takeRecords().map(f),n()})),o((function(){u=i("CLS",0),n=c(t,u,e)})))},s=-1,d=function(){r((function(t){var e=t.timeStamp;s=e}),!0)},m=function(){return s<0&&((s=self.webVitals.firstHiddenTime)===1/0&&d(),o((function(){setTimeout((function(){s="hidden"===document.visibilityState?0:1/0,d()}),0)}))),{get timeStamp(){return s}}},l=function(t,e){var n,r=m(),f=i("FCP"),s=function(t){"first-contentful-paint"===t.name&&(l&&l.disconnect(),t.startTime<r.timeStamp&&(f.value=t.startTime,f.entries.push(t),u.add(f),n()))},d=performance.getEntriesByName("first-contentful-paint")[0],l=d?null:a("paint",s);(d||l)&&(n=c(t,f,e),d&&s(d),o((function(a){f=i("FCP"),n=c(t,f,e),requestAnimationFrame((function(){requestAnimationFrame((function(){f.value=performance.now()-a.timeStamp,u.add(f),n()}))}))})))},v=function(t,e){var n,f=m(),s=i("FID"),d=function(t){t.startTime<f.timeStamp&&(s.value=t.processingStart-t.startTime,s.entries.push(t),u.add(s),n())},l=a("first-input",d);n=c(t,s,e),l&&r((function(){l.takeRecords().map(d),l.disconnect()}),!0),l||window.webVitals.firstInputPolyfill(d),o((function(){s=i("FID"),n=c(t,s,e),window.webVitals.resetFirstInputPolyfill(),window.webVitals.firstInputPolyfill(d)}))},p=function(t,e){var n,f=m(),s=i("LCP"),d=function(t){var e=t.startTime;e<f.timeStamp&&(s.value=e,s.entries.push(t)),n()},l=a("largest-contentful-paint",d);if(l){n=c(t,s,e);var v=function(){u.has(s)||(l.takeRecords().map(d),l.disconnect(),u.add(s),n())};["keydown","click"].forEach((function(t){addEventListener(t,v,{once:!0,capture:!0})})),r(v,!0),o((function(a){s=i("LCP"),n=c(t,s,e),requestAnimationFrame((function(){requestAnimationFrame((function(){s.value=performance.now()-a.timeStamp,u.add(s),n()}))}))}))}},h=function(t){var e,n=i("TTFB");e=function(){try{var e=performance.getEntriesByType("navigation")[0]||function(){var t=performance.timing,e={entryType:"navigation",startTime:0};for(var n in t)"navigationStart"!==n&&"toJSON"!==n&&(e[n]=Math.max(t[n]-t.navigationStart,0));return e}();if(n.value=n.delta=e.responseStart,n.value<0)return;n.entries=[e],t(n)}catch(e){}},"complete"===document.readyState?setTimeout(e,0):addEventListener("pageshow",e)}}}]);
//# sourceMappingURL=589-7169676ffbf812369607.js.map