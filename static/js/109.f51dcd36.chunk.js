(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[109],{7757:function(t,r,e){t.exports=e(9727)},9109:function(t,r,e){"use strict";e.r(r),e.d(r,{default:function(){return w}});var n=e(2982);function o(t,r,e,n,o,i,a){try{var c=t[i](a),u=c.value}catch(s){return void e(s)}c.done?r(u):Promise.resolve(u).then(n,o)}var i,a,c=e(885),u=e(7757),s=e.n(u),f=e(4635),l=e(2791),h=e(6871),p=e(8647),v=e(168),d=e(6444),y=d.ZP.div(i||(i=(0,v.Z)(["\n  padding: 20px;\n"]))),m=d.ZP.h2(a||(a=(0,v.Z)(["\n  margin-bottom: 20px;\n"]))),g=e(184);function w(){var t=(0,l.useState)([]),r=(0,c.Z)(t,2),e=r[0],i=r[1],a=(0,h.TH)();return(0,l.useEffect)((function(){var t=function(){var t,r=(t=s().mark((function t(){var r;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f.Z.api(a.pathname,null);case 2:r=t.sent,i((0,n.Z)(r.data.results));case 4:case"end":return t.stop()}}),t)})),function(){var r=this,e=arguments;return new Promise((function(n,i){var a=t.apply(r,e);function c(t){o(a,n,i,c,u,"next",t)}function u(t){o(a,n,i,c,u,"throw",t)}c(void 0)}))});return function(){return r.apply(this,arguments)}}();t()}),[a.pathname]),(0,g.jsxs)(y,{children:[(0,g.jsx)(m,{children:"Trending today"}),e.length?(0,g.jsx)(p.Z,{data:e}):(0,g.jsx)("p",{children:"\u043d\u0435\u0442 \u0442\u0430\u043a\u043e\u0433\u043e \u0432 \u043f\u043e\u0438\u0441\u043a\u0435"})]})}},8647:function(t,r,e){"use strict";e.d(r,{Z:function(){return v}});var n,o,i,a=e(3504),c=e(6871),u=e(168),s=e(6444),f=s.ZP.p(n||(n=(0,u.Z)(["\n  color: #000;\n  font-size: larger;\n\n  :hover {\n    color: green;\n    text-decoration: underline;\n  }\n"]))),l=s.ZP.ul(o||(o=(0,u.Z)(["\n  margin-left: 20px;\n"]))),h=s.ZP.li(i||(i=(0,u.Z)(["\n  :not(:last-child) {\n    margin-bottom: 5px;\n  }\n"]))),p=e(184);function v(t){var r=t.data,e=(0,c.TH)();return(0,p.jsx)(l,{children:r.map((function(t){return(0,p.jsx)(h,{children:(0,p.jsx)(a.rU,{to:"/movies/".concat(t.id),state:{movie_id:t.id,from:e},children:(0,p.jsx)(f,{children:t.title})})},t.id)}))})}},4635:function(t,r,e){"use strict";var n=e(4569),o="f3d33ff00cd7667f5ad243a04605493c";n.defaults.baseURL="https://api.themoviedb.org/3/";var i={api:function(t,r){var e=!1;switch(t){case"/":e="trending/movie/day?api_key=".concat(o);break;case"/movies":e="search/movie?api_key=".concat(o,"&language=en-US&query=").concat(r,"&page=1&include_adult=true");break;case"/movies/":e="movie/".concat(r,"?api_key=").concat(o);break;case"/movies/".concat(r,"/review"):e="movie/".concat(r,"/reviews?api_key=").concat(o);break;case"/movies/".concat(r,"/cast"):e="movie/".concat(r,"/credits?api_key=").concat(o);break;default:return void console.log("NOT")}if(e)return n.get("".concat(e)).then((function(t){return t}))}};r.Z=i},9727:function(t){var r=function(t){"use strict";var r,e=Object.prototype,n=e.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{u({},"")}catch(S){u=function(t,r,e){return t[r]=e}}function s(t,r,e,n){var o=r&&r.prototype instanceof y?r:y,i=Object.create(o.prototype),a=new O(n||[]);return i._invoke=function(t,r,e){var n=l;return function(o,i){if(n===p)throw new Error("Generator is already running");if(n===v){if("throw"===o)throw i;return T()}for(e.method=o,e.arg=i;;){var a=e.delegate;if(a){var c=E(a,e);if(c){if(c===d)continue;return c}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if(n===l)throw n=v,e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);n=p;var u=f(t,r,e);if("normal"===u.type){if(n=e.done?v:h,u.arg===d)continue;return{value:u.arg,done:e.done}}"throw"===u.type&&(n=v,e.method="throw",e.arg=u.arg)}}}(t,e,a),i}function f(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(S){return{type:"throw",arg:S}}}t.wrap=s;var l="suspendedStart",h="suspendedYield",p="executing",v="completed",d={};function y(){}function m(){}function g(){}var w={};u(w,i,(function(){return this}));var x=Object.getPrototypeOf,b=x&&x(x(P([])));b&&b!==e&&n.call(b,i)&&(w=b);var L=g.prototype=y.prototype=Object.create(w);function _(t){["next","throw","return"].forEach((function(r){u(t,r,(function(t){return this._invoke(r,t)}))}))}function k(t,r){function e(o,i,a,c){var u=f(t[o],t,i);if("throw"!==u.type){var s=u.arg,l=s.value;return l&&"object"===typeof l&&n.call(l,"__await")?r.resolve(l.__await).then((function(t){e("next",t,a,c)}),(function(t){e("throw",t,a,c)})):r.resolve(l).then((function(t){s.value=t,a(s)}),(function(t){return e("throw",t,a,c)}))}c(u.arg)}var o;this._invoke=function(t,n){function i(){return new r((function(r,o){e(t,n,r,o)}))}return o=o?o.then(i,i):i()}}function E(t,e){var n=t.iterator[e.method];if(n===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=r,E(t,e),"throw"===e.method))return d;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var o=f(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,d;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,d):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,d)}function j(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function Z(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function P(t){if(t){var e=t[i];if(e)return e.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function e(){for(;++o<t.length;)if(n.call(t,o))return e.value=t[o],e.done=!1,e;return e.value=r,e.done=!0,e};return a.next=a}}return{next:T}}function T(){return{value:r,done:!0}}return m.prototype=g,u(L,"constructor",g),u(g,"constructor",m),m.displayName=u(g,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var r="function"===typeof t&&t.constructor;return!!r&&(r===m||"GeneratorFunction"===(r.displayName||r.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,u(t,c,"GeneratorFunction")),t.prototype=Object.create(L),t},t.awrap=function(t){return{__await:t}},_(k.prototype),u(k.prototype,a,(function(){return this})),t.AsyncIterator=k,t.async=function(r,e,n,o,i){void 0===i&&(i=Promise);var a=new k(s(r,e,n,o),i);return t.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},_(L),u(L,c,"Generator"),u(L,i,(function(){return this})),u(L,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var r=[];for(var e in t)r.push(e);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},t.values=P,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(Z),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function o(n,o){return c.type="throw",c.arg=t,e.next=n,o&&(e.method="next",e.arg=r),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),s=n.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=r&&r<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=r,i?(this.method="next",this.next=i.finallyLoc,d):this.complete(a)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),d},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),Z(e),d}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;Z(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:P(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),d}},t}(t.exports);try{regeneratorRuntime=r}catch(e){"object"===typeof globalThis?globalThis.regeneratorRuntime=r:Function("r","regeneratorRuntime = r")(r)}},2982:function(t,r,e){"use strict";e.d(r,{Z:function(){return i}});var n=e(907);var o=e(181);function i(t){return function(t){if(Array.isArray(t))return(0,n.Z)(t)}(t)||function(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||(0,o.Z)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}}]);
//# sourceMappingURL=109.f51dcd36.chunk.js.map