var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},r=e.parcelRequire2f39;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in n){var r=n[e];delete n[e];var i={id:e,exports:{}};return t[e]=i,r.call(i.exports,i,i.exports),i.exports}var o=Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){n[e]=t},e.parcelRequire2f39=r),(0,r.register)("9OeKo",function(t,n){var r="Expected a function",i=0/0,o=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,f=/^0o[0-7]+$/i,l=parseInt,c="object"==typeof e&&e&&e.Object===Object&&e,s="object"==typeof self&&self&&self.Object===Object&&self,d=c||s||Function("return this")(),p=Object.prototype.toString,v=Math.max,m=Math.min,g=function(){return d.Date.now()};function b(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function y(e){if("number"==typeof e)return e;if("symbol"==typeof(t=e)||t&&"object"==typeof t&&"[object Symbol]"==p.call(t))return i;if(b(e)){var t,n="function"==typeof e.valueOf?e.valueOf():e;e=b(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var r=u.test(e);return r||f.test(e)?l(e.slice(2),r?2:8):a.test(e)?i:+e}t.exports=function(e,t,n){var i=!0,o=!0;if("function"!=typeof e)throw TypeError(r);return b(n)&&(i="leading"in n?!!n.leading:i,o="trailing"in n?!!n.trailing:o),function(e,t,n){var i,o,a,u,f,l,c=0,s=!1,d=!1,p=!0;if("function"!=typeof e)throw TypeError(r);function O(t){var n=i,r=o;return i=o=void 0,c=t,u=e.apply(r,n)}function x(e){var n=e-l,r=e-c;return void 0===l||n>=t||n<0||d&&r>=a}function h(){var e,n,r,i=g();if(x(i))return j(i);f=setTimeout(h,(e=i-l,n=i-c,r=t-e,d?m(r,a-n):r))}function j(e){return(f=void 0,p&&i)?O(e):(i=o=void 0,u)}function S(){var e,n=g(),r=x(n);if(i=arguments,o=this,l=n,r){if(void 0===f)return c=e=l,f=setTimeout(h,t),s?O(e):u;if(d)return f=setTimeout(h,t),O(l)}return void 0===f&&(f=setTimeout(h,t)),u}return t=y(t)||0,b(n)&&(s=!!n.leading,a=(d="maxWait"in n)?v(y(n.maxWait)||0,t):a,p="trailing"in n?!!n.trailing:p),S.cancel=function(){void 0!==f&&clearTimeout(f),c=0,i=l=o=f=void 0},S.flush=function(){return void 0===f?u:j(g())},S}(e,t,{leading:i,maxWait:t,trailing:o})}});var i=r("9OeKo");const o=document.querySelector("form.feedback-form"),a=document.querySelector('label [name="email"]'),u=document.querySelector('label [name="message"]'),f="feedback-form-state";!function(){let e=JSON.parse(localStorage.getItem("feedback-form-state"));e&&(a.value=e.email,u.value=e.message)}(),o.addEventListener("input",(i&&i.__esModule?i.default:i)(function(){let e=a.value,t=u.value;localStorage.setItem(f,JSON.stringify({email:e,message:t}))},500)),o.addEventListener("submit",function(e){e.preventDefault();let t=a.value,n=u.value;if(""===t||""===n){alert("Enter both input parameters"),o.reset();return}o.reset(),localStorage.removeItem(f)});
//# sourceMappingURL=03-feedback.973d223e.js.map
