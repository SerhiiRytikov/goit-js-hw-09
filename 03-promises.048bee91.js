!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},t={},i=n.parcelRequired7c6;null==i&&((i=function(e){if(e in o)return o[e].exports;if(e in t){var n=t[e];delete t[e];var i={id:e,exports:{}};return o[e]=i,n.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,n){t[e]=n},n.parcelRequired7c6=i);var r=i("6JpON"),a=document.querySelector("form"),u=0,l=0,f=0;function d(e,n){var o=Math.random()>.3;return new Promise((function(t,i){setTimeout((function(){o?t({position:e,delay:n}):i({position:e,delay:n})}),u)}))}a.addEventListener("submit",(function(n){n.preventDefault();var o=n.target.elements,t=o.delay,i=o.step,a=o.amount;u=Number(t.value),l=Number(i.value),f=Number(a.value);for(var c=1;c<=f;c+=1)d(c,u).then((function(n){var o=n.position,t=n.delay;e(r).Notify.info("✅ Fulfilled promise ".concat(o," in ").concat(t,"ms"))})).catch((function(n){var o=n.position,t=n.delay;e(r).Notify.info("❌ Rejected promise ".concat(o," in ").concat(t,"ms"))})),u+=l}))}();
//# sourceMappingURL=03-promises.048bee91.js.map
