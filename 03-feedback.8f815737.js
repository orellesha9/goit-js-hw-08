function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,f=/^0o[0-7]+$/i,a=parseInt,u="object"==typeof n&&n&&n.Object===Object&&n,l="object"==typeof self&&self&&self.Object===Object&&self,c=u||l||Function("return this")(),s=Object.prototype.toString,m=Math.max,d=Math.min,v=function(){return c.Date.now()};function p(e,t,n){var o,i,r,f,a,u,l=0,c=!1,s=!1,p=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function b(t){var n=o,r=i;return o=i=void 0,l=t,f=e.apply(r,n)}function E(e){return l=e,a=setTimeout(j,t),c?b(e):f}function h(e){var n=e-u;return void 0===u||n>=t||n<0||s&&e-l>=r}function j(){var e=v();if(h(e))return w(e);a=setTimeout(j,function(e){var n=t-(e-u);return s?d(n,r-(e-l)):n}(e))}function w(e){return a=void 0,p&&o?b(e):(o=i=void 0,f)}function O(){var e=v(),n=h(e);if(o=arguments,i=this,u=e,n){if(void 0===a)return E(u);if(s)return a=setTimeout(j,t),b(u)}return void 0===a&&(a=setTimeout(j,t)),f}return t=y(t)||0,g(n)&&(c=!!n.leading,r=(s="maxWait"in n)?m(y(n.maxWait)||0,t):r,p="trailing"in n?!!n.trailing:p),O.cancel=function(){void 0!==a&&clearTimeout(a),l=0,o=u=i=a=void 0},O.flush=function(){return void 0===a?f:w(v())},O}function g(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function y(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(g(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=g(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var n=r.test(e);return n||f.test(e)?a(e.slice(2),n?2:8):i.test(e)?NaN:+e}t=function(e,t,n){var o=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return g(n)&&(o="leading"in n?!!n.leading:o,i="trailing"in n?!!n.trailing:i),p(e,t,{leading:o,maxWait:t,trailing:i})};const b={formElement:document.querySelector(".feedback-form")},E=e(t)((function(e){const t=e.target.name,n=e.target.value;h[t]=n,localStorage.setItem("feedback-form-state",JSON.stringify(h))}),300);let h;b.formElement.addEventListener("input",E);try{h=JSON.parse(localStorage.getItem("feedback-form-state"))||{}}catch(e){h={}}b.formElement.addEventListener("submit",(function(e){e.preventDefault(),console.log(h),localStorage.clear()})),function(){const e=h.message,t=h.email;
//! Обробляємо значення undefined
b.formElement.elements.message.value=null!=e?e:"",b.formElement.elements.email.value=void 0!==t?t:""}();
//# sourceMappingURL=03-feedback.8f815737.js.map