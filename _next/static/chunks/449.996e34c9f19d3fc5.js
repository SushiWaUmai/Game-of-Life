"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[449],{1449:function(e,t,n){n.r(t),n.d(t,{ReactP5Wrapper:function(){return s}});const r=!0,c={Date:r,RegExp:r,String:r,Number:r};function o(e,t,n={cyclesFix:!0},r=[]){let u=[];const i=Array.isArray(e);for(const l in e){const a=e[l],f=i?+l:l;if(!(l in t)){u.push({type:"REMOVE",path:[f],oldValue:e[l]});continue}const s=t[l],p="object"===typeof a&&"object"===typeof s;if(!(a&&s&&p)||c[Object.getPrototypeOf(a).constructor.name]||n.cyclesFix&&r.includes(a))a===s||p&&(isNaN(a)?a+""===s+"":+a===+s)||u.push({path:[f],type:"CHANGE",value:s,oldValue:a});else{const e=o(a,s,n,n.cyclesFix?r.concat([a]):[]);u.push.apply(u,e.map((e=>(e.path.unshift(f),e))))}}const a=Array.isArray(t);for(const c in t)c in e||u.push({type:"CREATE",path:[a?+c:c],value:t[c]});return u}var u=n(6165),i=n.n(u),a=n(9496),l="undefined"===typeof window?a.useEffect:a.useLayoutEffect;function f(e){var t;null===(t=e.current)||void 0===t||t.remove(),e.current=void 0}var s=(0,a.memo)((function(e){var t=e.sketch,n=e.children,r=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var c=0;for(r=Object.getOwnPropertySymbols(e);c<r.length;c++)t.indexOf(r[c])<0&&Object.prototype.propertyIsEnumerable.call(e,r[c])&&(n[r[c]]=e[r[c]])}return n}(e,["sketch","children"]),c=(0,a.createRef)(),o=(0,a.useRef)();return l((function(){null!==c.current&&(f(o),o.current=function(e,t){return new(i())(e,t)}(t,c.current))}),[t]),l((function(){var e,t;return null===(t=null===(e=o.current)||void 0===e?void 0:e.updateWithProps)||void 0===t?void 0:t.call(e,r)}),[r]),l((function(){return function(){return f(o)}}),[]),a.createElement("div",{ref:c},n)}),(function(e,t){return 0===o(e,t).length}))}}]);