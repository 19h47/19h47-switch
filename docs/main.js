!function(t,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define([],n):"object"==typeof exports?exports.Switch=n():t.Switch=n()}(window,(function(){return function(t){var n={};function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}return e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)e.d(r,o,function(n){return t[n]}.bind(null,o));return r},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=106)}([function(t,n,e){(function(n){var e=function(t){return t&&t.Math==Math&&t};t.exports=e("object"==typeof globalThis&&globalThis)||e("object"==typeof window&&window)||e("object"==typeof self&&self)||e("object"==typeof n&&n)||Function("return this")()}).call(this,e(66))},function(t,n,e){var r=e(0),o=e(43),i=e(2),u=e(25),c=e(48),f=e(80),a=o("wks"),s=r.Symbol,l=f?s:s&&s.withoutSetter||u;t.exports=function(t){return i(a,t)||(c&&i(s,t)?a[t]=s[t]:a[t]=l("Symbol."+t)),a[t]}},function(t,n){var e={}.hasOwnProperty;t.exports=function(t,n){return e.call(t,n)}},function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,n,e){var r=e(3);t.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},function(t,n,e){var r=e(5),o=e(7),i=e(19);t.exports=r?function(t,n,e){return o.f(t,n,i(1,e))}:function(t,n,e){return t[n]=e,t}},function(t,n,e){var r=e(5),o=e(39),i=e(8),u=e(38),c=Object.defineProperty;n.f=r?c:function(t,n,e){if(i(t),n=u(n,!0),i(e),o)try{return c(t,n,e)}catch(t){}if("get"in e||"set"in e)throw TypeError("Accessors not supported");return"value"in e&&(t[n]=e.value),t}},function(t,n,e){var r=e(4);t.exports=function(t){if(!r(t))throw TypeError(String(t)+" is not an object");return t}},function(t,n,e){var r=e(0),o=e(6),i=e(2),u=e(22),c=e(41),f=e(12),a=f.get,s=f.enforce,l=String(String).split("String");(t.exports=function(t,n,e,c){var f=!!c&&!!c.unsafe,a=!!c&&!!c.enumerable,p=!!c&&!!c.noTargetGet;"function"==typeof e&&("string"!=typeof n||i(e,"name")||o(e,"name",n),s(e).source=l.join("string"==typeof n?n:"")),t!==r?(f?!p&&t[n]&&(a=!0):delete t[n],a?t[n]=e:o(t,n,e)):a?t[n]=e:u(n,e)})(Function.prototype,"toString",(function(){return"function"==typeof this&&a(this).source||c(this)}))},function(t,n){t.exports={}},function(t,n,e){var r=e(37),o=e(21);t.exports=function(t){return r(o(t))}},function(t,n,e){var r,o,i,u=e(68),c=e(0),f=e(4),a=e(6),s=e(2),l=e(23),p=e(13),v=c.WeakMap;if(u){var y=new v,d=y.get,h=y.has,x=y.set;r=function(t,n){return x.call(y,t,n),n},o=function(t){return d.call(y,t)||{}},i=function(t){return h.call(y,t)}}else{var g=l("state");p[g]=!0,r=function(t,n){return a(t,g,n),n},o=function(t){return s(t,g)?t[g]:{}},i=function(t){return s(t,g)}}t.exports={set:r,get:o,has:i,enforce:function(t){return i(t)?o(t):r(t,{})},getterFor:function(t){return function(n){var e;if(!f(n)||(e=o(n)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return e}}}},function(t,n){t.exports={}},function(t,n){t.exports=function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}},function(t,n){function e(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}t.exports=function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}},function(t,n){t.exports=function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}},function(t,n){t.exports=function(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}},function(t,n,e){var r=e(0),o=e(36).f,i=e(6),u=e(9),c=e(22),f=e(69),a=e(45);t.exports=function(t,n){var e,s,l,p,v,y=t.target,d=t.global,h=t.stat;if(e=d?r:h?r[y]||c(y,{}):(r[y]||{}).prototype)for(s in n){if(p=n[s],l=t.noTargetGet?(v=o(e,s))&&v.value:e[s],!a(d?s:y+(h?".":"#")+s,t.forced)&&void 0!==l){if(typeof p==typeof l)continue;f(p,l)}(t.sham||l&&l.sham)&&i(p,"sham",!0),u(e,s,p,t)}}},function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},function(t,n){var e={}.toString;t.exports=function(t){return e.call(t).slice(8,-1)}},function(t,n){t.exports=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}},function(t,n,e){var r=e(0),o=e(6);t.exports=function(t,n){try{o(r,t,n)}catch(e){r[t]=n}return n}},function(t,n,e){var r=e(43),o=e(25),i=r("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},function(t,n){t.exports=!1},function(t,n){var e=0,r=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++e+r).toString(36)}},function(t,n,e){var r=e(71),o=e(0),i=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,n){return arguments.length<2?i(r[t])||i(o[t]):r[t]&&r[t][n]||o[t]&&o[t][n]}},function(t,n,e){var r=e(28),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,n){var e=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:e)(t)}},function(t,n){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},function(t,n,e){var r=e(77);t.exports=function(t,n,e){if(r(t),void 0===n)return t;switch(e){case 0:return function(){return t.call(n)};case 1:return function(e){return t.call(n,e)};case 2:return function(e,r){return t.call(n,e,r)};case 3:return function(e,r,o){return t.call(n,e,r,o)}}return function(){return t.apply(n,arguments)}}},function(t,n,e){var r,o=e(8),i=e(84),u=e(29),c=e(13),f=e(86),a=e(40),s=e(23),l=s("IE_PROTO"),p=function(){},v=function(t){return"<script>"+t+"<\/script>"},y=function(){try{r=document.domain&&new ActiveXObject("htmlfile")}catch(t){}var t,n;y=r?function(t){t.write(v("")),t.close();var n=t.parentWindow.Object;return t=null,n}(r):((n=a("iframe")).style.display="none",f.appendChild(n),n.src=String("javascript:"),(t=n.contentWindow.document).open(),t.write(v("document.F=Object")),t.close(),t.F);for(var e=u.length;e--;)delete y.prototype[u[e]];return y()};c[l]=!0,t.exports=Object.create||function(t,n){var e;return null!==t?(p.prototype=o(t),e=new p,p.prototype=null,e[l]=t):e=y(),void 0===n?e:i(e,n)}},function(t,n,e){"use strict";var r=e(18),o=e(87),i=e(51),u=e(52),c=e(33),f=e(6),a=e(9),s=e(1),l=e(24),p=e(10),v=e(50),y=v.IteratorPrototype,d=v.BUGGY_SAFARI_ITERATORS,h=s("iterator"),x=function(){return this};t.exports=function(t,n,e,s,v,g,b){o(e,n,s);var S,m,O,w=function(t){if(t===v&&P)return P;if(!d&&t in k)return k[t];switch(t){case"keys":case"values":case"entries":return function(){return new e(this,t)}}return function(){return new e(this)}},E=n+" Iterator",j=!1,k=t.prototype,A=k[h]||k["@@iterator"]||v&&k[v],P=!d&&A||w(v),_="Array"==n&&k.entries||A;if(_&&(S=i(_.call(new t)),y!==Object.prototype&&S.next&&(l||i(S)===y||(u?u(S,y):"function"!=typeof S[h]&&f(S,h,x)),c(S,E,!0,!0),l&&(p[E]=x))),"values"==v&&A&&"values"!==A.name&&(j=!0,P=function(){return A.call(this)}),l&&!b||k[h]===P||f(k,h,P),p[n]=P,v)if(m={values:w("values"),keys:g?P:w("keys"),entries:w("entries")},b)for(O in m)!d&&!j&&O in k||a(k,O,m[O]);else r({target:n,proto:!0,forced:d||j},m);return m}},function(t,n,e){var r=e(7).f,o=e(2),i=e(1)("toStringTag");t.exports=function(t,n,e){t&&!o(t=e?t:t.prototype,i)&&r(t,i,{configurable:!0,value:n})}},function(t,n,e){var r={};r[e(1)("toStringTag")]="z",t.exports="[object z]"===String(r)},function(t,n,e){window,t.exports=function(t){var n={};function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}return e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)e.d(r,o,function(n){return t[n]}.bind(null,o));return r},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=0)}([function(t,n,e){"use strict";e.r(n),e.d(n,"BACKSPACE",(function(){return r})),e.d(n,"TAB",(function(){return o})),e.d(n,"ENTER",(function(){return i})),e.d(n,"SHIFT",(function(){return u})),e.d(n,"ESCAPE",(function(){return c})),e.d(n,"SPACE",(function(){return f})),e.d(n,"PAGE_UP",(function(){return a})),e.d(n,"PAGE_DOWN",(function(){return s})),e.d(n,"END",(function(){return l})),e.d(n,"HOME",(function(){return p})),e.d(n,"LEFT",(function(){return v})),e.d(n,"ARROW_UP",(function(){return y})),e.d(n,"RIGHT",(function(){return d})),e.d(n,"ARROW_DOWN",(function(){return h})),e.d(n,"DELETE",(function(){return x}));const r=8,o=9,i=13,u=16,c=27,f=32,a=33,s=34,l=35,p=36,v=37,y=38,d=39,h=40,x=46}])},function(t,n,e){var r=e(5),o=e(67),i=e(19),u=e(11),c=e(38),f=e(2),a=e(39),s=Object.getOwnPropertyDescriptor;n.f=r?s:function(t,n){if(t=u(t),n=c(n,!0),a)try{return s(t,n)}catch(t){}if(f(t,n))return i(!o.f.call(t,n),t[n])}},function(t,n,e){var r=e(3),o=e(20),i="".split;t.exports=r((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?i.call(t,""):Object(t)}:Object},function(t,n,e){var r=e(4);t.exports=function(t,n){if(!r(t))return t;var e,o;if(n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;if("function"==typeof(e=t.valueOf)&&!r(o=e.call(t)))return o;if(!n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,n,e){var r=e(5),o=e(3),i=e(40);t.exports=!r&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},function(t,n,e){var r=e(0),o=e(4),i=r.document,u=o(i)&&o(i.createElement);t.exports=function(t){return u?i.createElement(t):{}}},function(t,n,e){var r=e(42),o=Function.toString;"function"!=typeof r.inspectSource&&(r.inspectSource=function(t){return o.call(t)}),t.exports=r.inspectSource},function(t,n,e){var r=e(0),o=e(22),i=r["__core-js_shared__"]||o("__core-js_shared__",{});t.exports=i},function(t,n,e){var r=e(24),o=e(42);(t.exports=function(t,n){return o[t]||(o[t]=void 0!==n?n:{})})("versions",[]).push({version:"3.6.4",mode:r?"pure":"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})},function(t,n,e){var r=e(2),o=e(11),i=e(73).indexOf,u=e(13);t.exports=function(t,n){var e,c=o(t),f=0,a=[];for(e in c)!r(u,e)&&r(c,e)&&a.push(e);for(;n.length>f;)r(c,e=n[f++])&&(~i(a,e)||a.push(e));return a}},function(t,n,e){var r=e(3),o=/#|\.prototype\./,i=function(t,n){var e=c[u(t)];return e==a||e!=f&&("function"==typeof n?r(n):!!n)},u=i.normalize=function(t){return String(t).replace(o,".").toLowerCase()},c=i.data={},f=i.NATIVE="N",a=i.POLYFILL="P";t.exports=i},function(t,n,e){"use strict";var r=e(76).forEach,o=e(81),i=e(82),u=o("forEach"),c=i("forEach");t.exports=u&&c?[].forEach:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}},function(t,n,e){var r=e(21);t.exports=function(t){return Object(r(t))}},function(t,n,e){var r=e(3);t.exports=!!Object.getOwnPropertySymbols&&!r((function(){return!String(Symbol())}))},function(t,n,e){"use strict";var r=e(11),o=e(83),i=e(10),u=e(12),c=e(32),f=u.set,a=u.getterFor("Array Iterator");t.exports=c(Array,"Array",(function(t,n){f(this,{type:"Array Iterator",target:r(t),index:0,kind:n})}),(function(){var t=a(this),n=t.target,e=t.kind,r=t.index++;return!n||r>=n.length?(t.target=void 0,{value:void 0,done:!0}):"keys"==e?{value:r,done:!1}:"values"==e?{value:n[r],done:!1}:{value:[r,n[r]],done:!1}}),"values"),i.Arguments=i.Array,o("keys"),o("values"),o("entries")},function(t,n,e){"use strict";var r,o,i,u=e(51),c=e(6),f=e(2),a=e(1),s=e(24),l=a("iterator"),p=!1;[].keys&&("next"in(i=[].keys())?(o=u(u(i)))!==Object.prototype&&(r=o):p=!0),null==r&&(r={}),s||f(r,l)||c(r,l,(function(){return this})),t.exports={IteratorPrototype:r,BUGGY_SAFARI_ITERATORS:p}},function(t,n,e){var r=e(2),o=e(47),i=e(23),u=e(88),c=i("IE_PROTO"),f=Object.prototype;t.exports=u?Object.getPrototypeOf:function(t){return t=o(t),r(t,c)?t[c]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?f:null}},function(t,n,e){var r=e(8),o=e(89);t.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var t,n=!1,e={};try{(t=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set).call(e,[]),n=e instanceof Array}catch(t){}return function(e,i){return r(e),o(i),n?t.call(e,i):e.__proto__=i,e}}():void 0)},function(t,n,e){"use strict";var r=e(18),o=e(0),i=e(45),u=e(9),c=e(54),f=e(55),a=e(57),s=e(4),l=e(3),p=e(95),v=e(33),y=e(96);t.exports=function(t,n,e){var d=-1!==t.indexOf("Map"),h=-1!==t.indexOf("Weak"),x=d?"set":"add",g=o[t],b=g&&g.prototype,S=g,m={},O=function(t){var n=b[t];u(b,t,"add"==t?function(t){return n.call(this,0===t?0:t),this}:"delete"==t?function(t){return!(h&&!s(t))&&n.call(this,0===t?0:t)}:"get"==t?function(t){return h&&!s(t)?void 0:n.call(this,0===t?0:t)}:"has"==t?function(t){return!(h&&!s(t))&&n.call(this,0===t?0:t)}:function(t,e){return n.call(this,0===t?0:t,e),this})};if(i(t,"function"!=typeof g||!(h||b.forEach&&!l((function(){(new g).entries().next()})))))S=e.getConstructor(n,t,d,x),c.REQUIRED=!0;else if(i(t,!0)){var w=new S,E=w[x](h?{}:-0,1)!=w,j=l((function(){w.has(1)})),k=p((function(t){new g(t)})),A=!h&&l((function(){for(var t=new g,n=5;n--;)t[x](n,n);return!t.has(-0)}));k||((S=n((function(n,e){a(n,S,t);var r=y(new g,n,S);return null!=e&&f(e,r[x],r,d),r}))).prototype=b,b.constructor=S),(j||A)&&(O("delete"),O("has"),d&&O("get")),(A||E)&&O(x),h&&b.clear&&delete b.clear}return m[t]=S,r({global:!0,forced:S!=g},m),v(S,t),h||e.setStrong(S,t,d),S}},function(t,n,e){var r=e(13),o=e(4),i=e(2),u=e(7).f,c=e(25),f=e(91),a=c("meta"),s=0,l=Object.isExtensible||function(){return!0},p=function(t){u(t,a,{value:{objectID:"O"+ ++s,weakData:{}}})},v=t.exports={REQUIRED:!1,fastKey:function(t,n){if(!o(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!i(t,a)){if(!l(t))return"F";if(!n)return"E";p(t)}return t[a].objectID},getWeakData:function(t,n){if(!i(t,a)){if(!l(t))return!0;if(!n)return!1;p(t)}return t[a].weakData},onFreeze:function(t){return f&&v.REQUIRED&&l(t)&&!i(t,a)&&p(t),t}};r[a]=!0},function(t,n,e){var r=e(8),o=e(92),i=e(27),u=e(30),c=e(93),f=e(94),a=function(t,n){this.stopped=t,this.result=n};(t.exports=function(t,n,e,s,l){var p,v,y,d,h,x,g,b=u(n,e,s?2:1);if(l)p=t;else{if("function"!=typeof(v=c(t)))throw TypeError("Target is not iterable");if(o(v)){for(y=0,d=i(t.length);d>y;y++)if((h=s?b(r(g=t[y])[0],g[1]):b(t[y]))&&h instanceof a)return h;return new a(!1)}p=v.call(t)}for(x=p.next;!(g=x.call(p)).done;)if("object"==typeof(h=f(p,b,g.value,s))&&h&&h instanceof a)return h;return new a(!1)}).stop=function(t){return new a(!0,t)}},function(t,n,e){var r=e(34),o=e(20),i=e(1)("toStringTag"),u="Arguments"==o(function(){return arguments}());t.exports=r?o:function(t){var n,e,r;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(e=function(t,n){try{return t[n]}catch(t){}}(n=Object(t),i))?e:u?o(n):"Object"==(r=o(n))&&"function"==typeof n.callee?"Arguments":r}},function(t,n){t.exports=function(t,n,e){if(!(t instanceof n))throw TypeError("Incorrect "+(e?e+" ":"")+"invocation");return t}},function(t,n,e){"use strict";var r=e(7).f,o=e(31),i=e(97),u=e(30),c=e(57),f=e(55),a=e(32),s=e(98),l=e(5),p=e(54).fastKey,v=e(12),y=v.set,d=v.getterFor;t.exports={getConstructor:function(t,n,e,a){var s=t((function(t,r){c(t,s,n),y(t,{type:n,index:o(null),first:void 0,last:void 0,size:0}),l||(t.size=0),null!=r&&f(r,t[a],t,e)})),v=d(n),h=function(t,n,e){var r,o,i=v(t),u=x(t,n);return u?u.value=e:(i.last=u={index:o=p(n,!0),key:n,value:e,previous:r=i.last,next:void 0,removed:!1},i.first||(i.first=u),r&&(r.next=u),l?i.size++:t.size++,"F"!==o&&(i.index[o]=u)),t},x=function(t,n){var e,r=v(t),o=p(n);if("F"!==o)return r.index[o];for(e=r.first;e;e=e.next)if(e.key==n)return e};return i(s.prototype,{clear:function(){for(var t=v(this),n=t.index,e=t.first;e;)e.removed=!0,e.previous&&(e.previous=e.previous.next=void 0),delete n[e.index],e=e.next;t.first=t.last=void 0,l?t.size=0:this.size=0},delete:function(t){var n=v(this),e=x(this,t);if(e){var r=e.next,o=e.previous;delete n.index[e.index],e.removed=!0,o&&(o.next=r),r&&(r.previous=o),n.first==e&&(n.first=r),n.last==e&&(n.last=o),l?n.size--:this.size--}return!!e},forEach:function(t){for(var n,e=v(this),r=u(t,arguments.length>1?arguments[1]:void 0,3);n=n?n.next:e.first;)for(r(n.value,n.key,this);n&&n.removed;)n=n.previous},has:function(t){return!!x(this,t)}}),i(s.prototype,e?{get:function(t){var n=x(this,t);return n&&n.value},set:function(t,n){return h(this,0===t?0:t,n)}}:{add:function(t){return h(this,t=0===t?0:t,t)}}),l&&r(s.prototype,"size",{get:function(){return v(this).size}}),s},setStrong:function(t,n,e){var r=n+" Iterator",o=d(n),i=d(r);a(t,n,(function(t,n){y(this,{type:r,target:t,state:o(t),kind:n,last:void 0})}),(function(){for(var t=i(this),n=t.kind,e=t.last;e&&e.removed;)e=e.previous;return t.target&&(t.last=e=e?e.next:t.state.first)?"keys"==n?{value:e.key,done:!1}:"values"==n?{value:e.value,done:!1}:{value:[e.key,e.value],done:!1}:(t.target=void 0,{value:void 0,done:!0})}),e?"entries":"values",!e,!0),s(n)}}},function(t,n){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},function(t,n,e){var r=e(63),o=e(16);t.exports=function(t,n){return!n||"object"!==r(n)&&"function"!=typeof n?o(t):n}},function(t,n){function e(n){return t.exports=e=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},e(n)}t.exports=e},function(t,n,e){var r=e(64);t.exports=function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&r(t,n)}},function(t,n){function e(n){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?t.exports=e=function(t){return typeof t}:t.exports=e=function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},e(n)}t.exports=e},function(t,n){function e(n,r){return t.exports=e=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t},e(n,r)}t.exports=e},function(t,n,e){"use strict";var r=e(18),o=e(46);r({target:"Array",proto:!0,forced:[].forEach!=o},{forEach:o})},function(t,n){var e;e=function(){return this}();try{e=e||new Function("return this")()}catch(t){"object"==typeof window&&(e=window)}t.exports=e},function(t,n,e){"use strict";var r={}.propertyIsEnumerable,o=Object.getOwnPropertyDescriptor,i=o&&!r.call({1:2},1);n.f=i?function(t){var n=o(this,t);return!!n&&n.enumerable}:r},function(t,n,e){var r=e(0),o=e(41),i=r.WeakMap;t.exports="function"==typeof i&&/native code/.test(o(i))},function(t,n,e){var r=e(2),o=e(70),i=e(36),u=e(7);t.exports=function(t,n){for(var e=o(n),c=u.f,f=i.f,a=0;a<e.length;a++){var s=e[a];r(t,s)||c(t,s,f(n,s))}}},function(t,n,e){var r=e(26),o=e(72),i=e(75),u=e(8);t.exports=r("Reflect","ownKeys")||function(t){var n=o.f(u(t)),e=i.f;return e?n.concat(e(t)):n}},function(t,n,e){var r=e(0);t.exports=r},function(t,n,e){var r=e(44),o=e(29).concat("length","prototype");n.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},function(t,n,e){var r=e(11),o=e(27),i=e(74),u=function(t){return function(n,e,u){var c,f=r(n),a=o(f.length),s=i(u,a);if(t&&e!=e){for(;a>s;)if((c=f[s++])!=c)return!0}else for(;a>s;s++)if((t||s in f)&&f[s]===e)return t||s||0;return!t&&-1}};t.exports={includes:u(!0),indexOf:u(!1)}},function(t,n,e){var r=e(28),o=Math.max,i=Math.min;t.exports=function(t,n){var e=r(t);return e<0?o(e+n,0):i(e,n)}},function(t,n){n.f=Object.getOwnPropertySymbols},function(t,n,e){var r=e(30),o=e(37),i=e(47),u=e(27),c=e(78),f=[].push,a=function(t){var n=1==t,e=2==t,a=3==t,s=4==t,l=6==t,p=5==t||l;return function(v,y,d,h){for(var x,g,b=i(v),S=o(b),m=r(y,d,3),O=u(S.length),w=0,E=h||c,j=n?E(v,O):e?E(v,0):void 0;O>w;w++)if((p||w in S)&&(g=m(x=S[w],w,b),t))if(n)j[w]=g;else if(g)switch(t){case 3:return!0;case 5:return x;case 6:return w;case 2:f.call(j,x)}else if(s)return!1;return l?-1:a||s?s:j}};t.exports={forEach:a(0),map:a(1),filter:a(2),some:a(3),every:a(4),find:a(5),findIndex:a(6)}},function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t}},function(t,n,e){var r=e(4),o=e(79),i=e(1)("species");t.exports=function(t,n){var e;return o(t)&&("function"!=typeof(e=t.constructor)||e!==Array&&!o(e.prototype)?r(e)&&null===(e=e[i])&&(e=void 0):e=void 0),new(void 0===e?Array:e)(0===n?0:n)}},function(t,n,e){var r=e(20);t.exports=Array.isArray||function(t){return"Array"==r(t)}},function(t,n,e){var r=e(48);t.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},function(t,n,e){"use strict";var r=e(3);t.exports=function(t,n){var e=[][t];return!!e&&r((function(){e.call(null,n||function(){throw 1},1)}))}},function(t,n,e){var r=e(5),o=e(3),i=e(2),u=Object.defineProperty,c={},f=function(t){throw t};t.exports=function(t,n){if(i(c,t))return c[t];n||(n={});var e=[][t],a=!!i(n,"ACCESSORS")&&n.ACCESSORS,s=i(n,0)?n[0]:f,l=i(n,1)?n[1]:void 0;return c[t]=!!e&&!o((function(){if(a&&!r)return!0;var t={length:-1};a?u(t,1,{enumerable:!0,get:f}):t[1]=1,e.call(t,s,l)}))}},function(t,n,e){var r=e(1),o=e(31),i=e(7),u=r("unscopables"),c=Array.prototype;null==c[u]&&i.f(c,u,{configurable:!0,value:o(null)}),t.exports=function(t){c[u][t]=!0}},function(t,n,e){var r=e(5),o=e(7),i=e(8),u=e(85);t.exports=r?Object.defineProperties:function(t,n){i(t);for(var e,r=u(n),c=r.length,f=0;c>f;)o.f(t,e=r[f++],n[e]);return t}},function(t,n,e){var r=e(44),o=e(29);t.exports=Object.keys||function(t){return r(t,o)}},function(t,n,e){var r=e(26);t.exports=r("document","documentElement")},function(t,n,e){"use strict";var r=e(50).IteratorPrototype,o=e(31),i=e(19),u=e(33),c=e(10),f=function(){return this};t.exports=function(t,n,e){var a=n+" Iterator";return t.prototype=o(r,{next:i(1,e)}),u(t,a,!1,!0),c[a]=f,t}},function(t,n,e){var r=e(3);t.exports=!r((function(){function t(){}return t.prototype.constructor=null,Object.getPrototypeOf(new t)!==t.prototype}))},function(t,n,e){var r=e(4);t.exports=function(t){if(!r(t)&&null!==t)throw TypeError("Can't set "+String(t)+" as a prototype");return t}},function(t,n,e){"use strict";var r=e(53),o=e(58);t.exports=r("Map",(function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}}),o)},function(t,n,e){var r=e(3);t.exports=!r((function(){return Object.isExtensible(Object.preventExtensions({}))}))},function(t,n,e){var r=e(1),o=e(10),i=r("iterator"),u=Array.prototype;t.exports=function(t){return void 0!==t&&(o.Array===t||u[i]===t)}},function(t,n,e){var r=e(56),o=e(10),i=e(1)("iterator");t.exports=function(t){if(null!=t)return t[i]||t["@@iterator"]||o[r(t)]}},function(t,n,e){var r=e(8);t.exports=function(t,n,e,o){try{return o?n(r(e)[0],e[1]):n(e)}catch(n){var i=t.return;throw void 0!==i&&r(i.call(t)),n}}},function(t,n,e){var r=e(1)("iterator"),o=!1;try{var i=0,u={next:function(){return{done:!!i++}},return:function(){o=!0}};u[r]=function(){return this},Array.from(u,(function(){throw 2}))}catch(t){}t.exports=function(t,n){if(!n&&!o)return!1;var e=!1;try{var i={};i[r]=function(){return{next:function(){return{done:e=!0}}}},t(i)}catch(t){}return e}},function(t,n,e){var r=e(4),o=e(52);t.exports=function(t,n,e){var i,u;return o&&"function"==typeof(i=n.constructor)&&i!==e&&r(u=i.prototype)&&u!==e.prototype&&o(t,u),t}},function(t,n,e){var r=e(9);t.exports=function(t,n,e){for(var o in n)r(t,o,n[o],e);return t}},function(t,n,e){"use strict";var r=e(26),o=e(7),i=e(1),u=e(5),c=i("species");t.exports=function(t){var n=r(t),e=o.f;u&&n&&!n[c]&&e(n,c,{configurable:!0,get:function(){return this}})}},function(t,n,e){var r=e(34),o=e(9),i=e(100);r||o(Object.prototype,"toString",i,{unsafe:!0})},function(t,n,e){"use strict";var r=e(34),o=e(56);t.exports=r?{}.toString:function(){return"[object "+o(this)+"]"}},function(t,n,e){"use strict";var r=e(53),o=e(58);t.exports=r("Set",(function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}}),o)},function(t,n,e){"use strict";var r=e(103).charAt,o=e(12),i=e(32),u=o.set,c=o.getterFor("String Iterator");i(String,"String",(function(t){u(this,{type:"String Iterator",string:String(t),index:0})}),(function(){var t,n=c(this),e=n.string,o=n.index;return o>=e.length?{value:void 0,done:!0}:(t=r(e,o),n.index+=t.length,{value:t,done:!1})}))},function(t,n,e){var r=e(28),o=e(21),i=function(t){return function(n,e){var i,u,c=String(o(n)),f=r(e),a=c.length;return f<0||f>=a?t?"":void 0:(i=c.charCodeAt(f))<55296||i>56319||f+1===a||(u=c.charCodeAt(f+1))<56320||u>57343?t?c.charAt(f):i:t?c.slice(f,f+2):u-56320+(i-55296<<10)+65536}};t.exports={codeAt:i(!1),charAt:i(!0)}},function(t,n,e){var r=e(0),o=e(59),i=e(46),u=e(6);for(var c in o){var f=r[c],a=f&&f.prototype;if(a&&a.forEach!==i)try{u(a,"forEach",i)}catch(t){a.forEach=i}}},function(t,n,e){var r=e(0),o=e(59),i=e(49),u=e(6),c=e(1),f=c("iterator"),a=c("toStringTag"),s=i.values;for(var l in o){var p=r[l],v=p&&p.prototype;if(v){if(v[f]!==s)try{u(v,f,s)}catch(t){v[f]=s}if(v[a]||u(v,a,l),o[l])for(var y in i)if(v[y]!==i[y])try{u(v,y,i[y])}catch(t){v[y]=i[y]}}}},function(t,n,e){"use strict";e.r(n);var r=e(17),o=e.n(r),i=e(14),u=e.n(i),c=e(15),f=e.n(c),a=e(60),s=e.n(a),l=e(61),p=e.n(l),v=e(16),y=e.n(v),d=e(62),h=e.n(d),x=e(35),g=(e(65),e(49),e(90),e(99),e(101),e(102),e(104),e(105),function(){function t(n){u()(this,t),this.listeners=new Map,this.events=n}return f()(t,[{key:"on",value:function(t,n){var e=this.listeners.get(t);e||(e=new Set,this.listeners.set(t,e)),e.add(n)}},{key:"once",value:function(t,n){var e=this,r=function r(o){e.off(t,r),n.call(e,o)};this.on(t,r)}},{key:"off",value:function(t,n){var e=this.listeners.get(t);e&&(e.delete(n),e.size||this.listeners.delete(t))}},{key:"offAll",value:function(t){if(void 0===t)return this.listeners.clear();var n=this.listeners.get(t);return!!n&&(n.clear(),this.listeners.delete(t))}},{key:"hasListeners",value:function(t){return this.listeners.has(t)}},{key:"emit",value:function(t,n){var e=this,r=this.listeners.get(t);r&&r.forEach((function(t){return t.call(e,n)}))}}]),t}());e.d(n,"default",(function(){return b}));var b=function(t){function n(t){var e;return u()(this,n),(e=s()(this,p()(n).call(this,["Switch.activate","Switch.deactivate"]))).rootElement=t,e.$input=e.rootElement.querySelector('input[type="checkbox"]'),e.checked=!1,e.toggle=e.toggle.bind(y()(e)),e.onKeydown=e.onKeydown.bind(y()(e)),e}return h()(n,t),f()(n,[{key:"init",value:function(){this.initEvents()}},{key:"initEvents",value:function(){this.rootElement.addEventListener("click",this.toggle),this.rootElement.addEventListener("keydown",this.onKeydown)}},{key:"onKeydown",value:function(t){var n,e=this,r=t.keyCode||t.which,i=function(){e.toggle(),t.preventDefault()},u=(n={},o()(n,x.SPACE,i),o()(n,x.ENTER,i),o()(n,"default",(function(){return!1})),n);return(u[r]||u.default)()}},{key:"toggle",value:function(){return this.checked?this.deactivate():this.activate()}},{key:"activate",value:function(){return!this.checked&&(this.checked=!0,this.$input.checked=!0,this.$input.setAttribute("checked",!0),this.rootElement.setAttribute("aria-checked",!0),this.emit("Switch.activate",this.rootElement))}},{key:"deactivate",value:function(){return!!this.checked&&(this.checked=!1,this.$input.checked=!1,this.$input.setAttribute("checked",!1),this.rootElement.setAttribute("aria-checked",!1),this.emit("Switch.deactivate",this.rootElement))}}]),n}(g)}])}));