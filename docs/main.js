!function(t,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define([],n):"object"==typeof exports?exports.Switch=n():t.Switch=n()}(window,(function(){return function(t){var n={};function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}return e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)e.d(r,o,function(n){return t[n]}.bind(null,o));return r},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=110)}([function(t,n,e){(function(n){var e=function(t){return t&&t.Math==Math&&t};t.exports=e("object"==typeof globalThis&&globalThis)||e("object"==typeof window&&window)||e("object"==typeof self&&self)||e("object"==typeof n&&n)||Function("return this")()}).call(this,e(65))},function(t,n,e){var r=e(0),o=e(39),i=e(4),u=e(25),c=e(44),f=e(66),a=o("wks"),s=r.Symbol,l=f?s:s&&s.withoutSetter||u;t.exports=function(t){return i(a,t)||(c&&i(s,t)?a[t]=s[t]:a[t]=l("Symbol."+t)),a[t]}},function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,n){var e={}.hasOwnProperty;t.exports=function(t,n){return e.call(t,n)}},function(t,n,e){var r=e(3);t.exports=function(t){if(!r(t))throw TypeError(String(t)+" is not an object");return t}},function(t,n,e){var r=e(7),o=e(8),i=e(24);t.exports=r?function(t,n,e){return o.f(t,n,i(1,e))}:function(t,n,e){return t[n]=e,t}},function(t,n,e){var r=e(2);t.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},function(t,n,e){var r=e(7),o=e(41),i=e(5),u=e(43),c=Object.defineProperty;n.f=r?c:function(t,n,e){if(i(t),n=u(n,!0),i(e),o)try{return c(t,n,e)}catch(t){}if("get"in e||"set"in e)throw TypeError("Accessors not supported");return"value"in e&&(t[n]=e.value),t}},function(t,n,e){var r=e(0),o=e(6),i=e(4),u=e(23),c=e(45),f=e(11),a=f.get,s=f.enforce,l=String(String).split("String");(t.exports=function(t,n,e,c){var f=!!c&&!!c.unsafe,a=!!c&&!!c.enumerable,p=!!c&&!!c.noTargetGet;"function"==typeof e&&("string"!=typeof n||i(e,"name")||o(e,"name",n),s(e).source=l.join("string"==typeof n?n:"")),t!==r?(f?!p&&t[n]&&(a=!0):delete t[n],a?t[n]=e:o(t,n,e)):a?t[n]=e:u(n,e)})(Function.prototype,"toString",(function(){return"function"==typeof this&&a(this).source||c(this)}))},function(t,n){t.exports={}},function(t,n,e){var r,o,i,u=e(67),c=e(0),f=e(3),a=e(6),s=e(4),l=e(26),p=e(12),v=c.WeakMap;if(u){var y=new v,h=y.get,d=y.has,g=y.set;r=function(t,n){return g.call(y,t,n),n},o=function(t){return h.call(y,t)||{}},i=function(t){return d.call(y,t)}}else{var x=l("state");p[x]=!0,r=function(t,n){return a(t,x,n),n},o=function(t){return s(t,x)?t[x]:{}},i=function(t){return s(t,x)}}t.exports={set:r,get:o,has:i,enforce:function(t){return i(t)?o(t):r(t,{})},getterFor:function(t){return function(n){var e;if(!f(n)||(e=o(n)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return e}}}},function(t,n){t.exports={}},function(t,n,e){var r=e(0),o=e(47).f,i=e(6),u=e(9),c=e(23),f=e(71),a=e(50);t.exports=function(t,n){var e,s,l,p,v,y=t.target,h=t.global,d=t.stat;if(e=h?r:d?r[y]||c(y,{}):(r[y]||{}).prototype)for(s in n){if(p=n[s],l=t.noTargetGet?(v=o(e,s))&&v.value:e[s],!a(h?s:y+(d?".":"#")+s,t.forced)&&void 0!==l){if(typeof p==typeof l)continue;f(p,l)}(t.sham||l&&l.sham)&&i(p,"sham",!0),u(e,s,p,t)}}},function(t,n,e){var r=e(48),o=e(28);t.exports=function(t){return r(o(t))}},function(t,n,e){var r=e(73),o=e(0),i=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,n){return arguments.length<2?i(r[t])||i(o[t]):r[t]&&r[t][n]||o[t]&&o[t][n]}},function(t,n,e){var r,o=e(5),i=e(78),u=e(31),c=e(12),f=e(80),a=e(42),s=e(26),l=s("IE_PROTO"),p=function(){},v=function(t){return"<script>"+t+"<\/script>"},y=function(){try{r=document.domain&&new ActiveXObject("htmlfile")}catch(t){}var t,n;y=r?function(t){t.write(v("")),t.close();var n=t.parentWindow.Object;return t=null,n}(r):((n=a("iframe")).style.display="none",f.appendChild(n),n.src=String("javascript:"),(t=n.contentWindow.document).open(),t.write(v("document.F=Object")),t.close(),t.F);for(var e=u.length;e--;)delete y.prototype[u[e]];return y()};c[l]=!0,t.exports=Object.create||function(t,n){var e;return null!==t?(p.prototype=o(t),e=new p,p.prototype=null,e[l]=t):e=y(),void 0===n?e:i(e,n)}},function(t,n){t.exports=function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}},function(t,n){function e(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}t.exports=function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}},function(t,n){t.exports=function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}},function(t,n){t.exports=function(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}},function(t,n,e){var r={};r[e(1)("toStringTag")]="z",t.exports="[object z]"===String(r)},function(t,n){t.exports=!1},function(t,n,e){var r=e(0),o=e(6);t.exports=function(t,n){try{o(r,t,n)}catch(e){r[t]=n}return n}},function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},function(t,n){var e=0,r=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++e+r).toString(36)}},function(t,n,e){var r=e(39),o=e(25),i=r("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},function(t,n){var e={}.toString;t.exports=function(t){return e.call(t).slice(8,-1)}},function(t,n){t.exports=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}},function(t,n,e){var r=e(30),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,n){var e=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:e)(t)}},function(t,n){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t}},function(t,n,e){var r=e(32);t.exports=function(t,n,e){if(r(t),void 0===n)return t;switch(e){case 0:return function(){return t.call(n)};case 1:return function(e){return t.call(n,e)};case 2:return function(e,r){return t.call(n,e,r)};case 3:return function(e,r,o){return t.call(n,e,r,o)}}return function(){return t.apply(n,arguments)}}},function(t,n,e){"use strict";var r=e(13),o=e(93),i=e(55),u=e(56),c=e(35),f=e(6),a=e(9),s=e(1),l=e(22),p=e(10),v=e(54),y=v.IteratorPrototype,h=v.BUGGY_SAFARI_ITERATORS,d=s("iterator"),g=function(){return this};t.exports=function(t,n,e,s,v,x,b){o(e,n,s);var S,m,O,w=function(t){if(t===v&&P)return P;if(!h&&t in k)return k[t];switch(t){case"keys":case"values":case"entries":return function(){return new e(this,t)}}return function(){return new e(this)}},E=n+" Iterator",j=!1,k=t.prototype,A=k[d]||k["@@iterator"]||v&&k[v],P=!h&&A||w(v),_="Array"==n&&k.entries||A;if(_&&(S=i(_.call(new t)),y!==Object.prototype&&S.next&&(l||i(S)===y||(u?u(S,y):"function"!=typeof S[d]&&f(S,d,g)),c(S,E,!0,!0),l&&(p[E]=g))),"values"==v&&A&&"values"!==A.name&&(j=!0,P=function(){return A.call(this)}),l&&!b||k[d]===P||f(k,d,P),p[n]=P,v)if(m={values:w("values"),keys:x?P:w("keys"),entries:w("entries")},b)for(O in m)(h||j||!(O in k))&&a(k,O,m[O]);else r({target:n,proto:!0,forced:h||j},m);return m}},function(t,n,e){var r=e(8).f,o=e(4),i=e(1)("toStringTag");t.exports=function(t,n,e){t&&!o(t=e?t:t.prototype,i)&&r(t,i,{configurable:!0,value:n})}},function(t,n){function e(n){return t.exports=e=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},e(n)}t.exports=e},function(t,n,e){window,t.exports=function(t){var n={};function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}return e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)e.d(r,o,function(n){return t[n]}.bind(null,o));return r},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=0)}([function(t,n,e){"use strict";e.r(n),e.d(n,"BACKSPACE",(function(){return r})),e.d(n,"TAB",(function(){return o})),e.d(n,"ENTER",(function(){return i})),e.d(n,"SHIFT",(function(){return u})),e.d(n,"ESCAPE",(function(){return c})),e.d(n,"SPACE",(function(){return f})),e.d(n,"PAGE_UP",(function(){return a})),e.d(n,"PAGE_DOWN",(function(){return s})),e.d(n,"END",(function(){return l})),e.d(n,"HOME",(function(){return p})),e.d(n,"ARROW_LEFT",(function(){return v})),e.d(n,"ARROW_UP",(function(){return y})),e.d(n,"ARROW_RIGHT",(function(){return h})),e.d(n,"ARROW_DOWN",(function(){return d})),e.d(n,"DELETE",(function(){return g}));var r=8,o=9,i=13,u=16,c=27,f=32,a=33,s=34,l=35,p=36,v=37,y=38,h=39,d=40,g=46}])},function(t,n,e){var r=e(21),o=e(9),i=e(68);r||o(Object.prototype,"toString",i,{unsafe:!0})},function(t,n,e){var r=e(22),o=e(40);(t.exports=function(t,n){return o[t]||(o[t]=void 0!==n?n:{})})("versions",[]).push({version:"3.6.5",mode:r?"pure":"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})},function(t,n,e){var r=e(0),o=e(23),i=r["__core-js_shared__"]||o("__core-js_shared__",{});t.exports=i},function(t,n,e){var r=e(7),o=e(2),i=e(42);t.exports=!r&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},function(t,n,e){var r=e(0),o=e(3),i=r.document,u=o(i)&&o(i.createElement);t.exports=function(t){return u?i.createElement(t):{}}},function(t,n,e){var r=e(3);t.exports=function(t,n){if(!r(t))return t;var e,o;if(n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;if("function"==typeof(e=t.valueOf)&&!r(o=e.call(t)))return o;if(!n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,n,e){var r=e(2);t.exports=!!Object.getOwnPropertySymbols&&!r((function(){return!String(Symbol())}))},function(t,n,e){var r=e(40),o=Function.toString;"function"!=typeof r.inspectSource&&(r.inspectSource=function(t){return o.call(t)}),t.exports=r.inspectSource},function(t,n,e){var r=e(21),o=e(27),i=e(1)("toStringTag"),u="Arguments"==o(function(){return arguments}());t.exports=r?o:function(t){var n,e,r;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(e=function(t,n){try{return t[n]}catch(t){}}(n=Object(t),i))?e:u?o(n):"Object"==(r=o(n))&&"function"==typeof n.callee?"Arguments":r}},function(t,n,e){var r=e(7),o=e(70),i=e(24),u=e(14),c=e(43),f=e(4),a=e(41),s=Object.getOwnPropertyDescriptor;n.f=r?s:function(t,n){if(t=u(t),n=c(n,!0),a)try{return s(t,n)}catch(t){}if(f(t,n))return i(!o.f.call(t,n),t[n])}},function(t,n,e){var r=e(2),o=e(27),i="".split;t.exports=r((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?i.call(t,""):Object(t)}:Object},function(t,n,e){var r=e(4),o=e(14),i=e(75).indexOf,u=e(12);t.exports=function(t,n){var e,c=o(t),f=0,a=[];for(e in c)!r(u,e)&&r(c,e)&&a.push(e);for(;n.length>f;)r(c,e=n[f++])&&(~i(a,e)||a.push(e));return a}},function(t,n,e){var r=e(2),o=/#|\.prototype\./,i=function(t,n){var e=c[u(t)];return e==a||e!=f&&("function"==typeof n?r(n):!!n)},u=i.normalize=function(t){return String(t).replace(o,".").toLowerCase()},c=i.data={},f=i.NATIVE="N",a=i.POLYFILL="P";t.exports=i},function(t,n,e){"use strict";var r=e(87).forEach,o=e(90),i=e(91),u=o("forEach"),c=i("forEach");t.exports=u&&c?[].forEach:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}},function(t,n,e){var r=e(28);t.exports=function(t){return Object(r(t))}},function(t,n,e){"use strict";var r=e(14),o=e(92),i=e(10),u=e(11),c=e(34),f=u.set,a=u.getterFor("Array Iterator");t.exports=c(Array,"Array",(function(t,n){f(this,{type:"Array Iterator",target:r(t),index:0,kind:n})}),(function(){var t=a(this),n=t.target,e=t.kind,r=t.index++;return!n||r>=n.length?(t.target=void 0,{value:void 0,done:!0}):"keys"==e?{value:r,done:!1}:"values"==e?{value:n[r],done:!1}:{value:[r,n[r]],done:!1}}),"values"),i.Arguments=i.Array,o("keys"),o("values"),o("entries")},function(t,n,e){"use strict";var r,o,i,u=e(55),c=e(6),f=e(4),a=e(1),s=e(22),l=a("iterator"),p=!1;[].keys&&("next"in(i=[].keys())?(o=u(u(i)))!==Object.prototype&&(r=o):p=!0),null==r&&(r={}),s||f(r,l)||c(r,l,(function(){return this})),t.exports={IteratorPrototype:r,BUGGY_SAFARI_ITERATORS:p}},function(t,n,e){var r=e(4),o=e(52),i=e(26),u=e(94),c=i("IE_PROTO"),f=Object.prototype;t.exports=u?Object.getPrototypeOf:function(t){return t=o(t),r(t,c)?t[c]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?f:null}},function(t,n,e){var r=e(5),o=e(95);t.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var t,n=!1,e={};try{(t=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set).call(e,[]),n=e instanceof Array}catch(t){}return function(e,i){return r(e),o(i),n?t.call(e,i):e.__proto__=i,e}}():void 0)},function(t,n,e){"use strict";var r=e(13),o=e(0),i=e(50),u=e(9),c=e(58),f=e(59),a=e(60),s=e(3),l=e(2),p=e(101),v=e(35),y=e(102);t.exports=function(t,n,e){var h=-1!==t.indexOf("Map"),d=-1!==t.indexOf("Weak"),g=h?"set":"add",x=o[t],b=x&&x.prototype,S=x,m={},O=function(t){var n=b[t];u(b,t,"add"==t?function(t){return n.call(this,0===t?0:t),this}:"delete"==t?function(t){return!(d&&!s(t))&&n.call(this,0===t?0:t)}:"get"==t?function(t){return d&&!s(t)?void 0:n.call(this,0===t?0:t)}:"has"==t?function(t){return!(d&&!s(t))&&n.call(this,0===t?0:t)}:function(t,e){return n.call(this,0===t?0:t,e),this})};if(i(t,"function"!=typeof x||!(d||b.forEach&&!l((function(){(new x).entries().next()})))))S=e.getConstructor(n,t,h,g),c.REQUIRED=!0;else if(i(t,!0)){var w=new S,E=w[g](d?{}:-0,1)!=w,j=l((function(){w.has(1)})),k=p((function(t){new x(t)})),A=!d&&l((function(){for(var t=new x,n=5;n--;)t[g](n,n);return!t.has(-0)}));k||((S=n((function(n,e){a(n,S,t);var r=y(new x,n,S);return null!=e&&f(e,r[g],r,h),r}))).prototype=b,b.constructor=S),(j||A)&&(O("delete"),O("has"),h&&O("get")),(A||E)&&O(g),d&&b.clear&&delete b.clear}return m[t]=S,r({global:!0,forced:S!=x},m),v(S,t),d||e.setStrong(S,t,h),S}},function(t,n,e){var r=e(12),o=e(3),i=e(4),u=e(8).f,c=e(25),f=e(97),a=c("meta"),s=0,l=Object.isExtensible||function(){return!0},p=function(t){u(t,a,{value:{objectID:"O"+ ++s,weakData:{}}})},v=t.exports={REQUIRED:!1,fastKey:function(t,n){if(!o(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!i(t,a)){if(!l(t))return"F";if(!n)return"E";p(t)}return t[a].objectID},getWeakData:function(t,n){if(!i(t,a)){if(!l(t))return!0;if(!n)return!1;p(t)}return t[a].weakData},onFreeze:function(t){return f&&v.REQUIRED&&l(t)&&!i(t,a)&&p(t),t}};r[a]=!0},function(t,n,e){var r=e(5),o=e(98),i=e(29),u=e(33),c=e(99),f=e(100),a=function(t,n){this.stopped=t,this.result=n};(t.exports=function(t,n,e,s,l){var p,v,y,h,d,g,x,b=u(n,e,s?2:1);if(l)p=t;else{if("function"!=typeof(v=c(t)))throw TypeError("Target is not iterable");if(o(v)){for(y=0,h=i(t.length);h>y;y++)if((d=s?b(r(x=t[y])[0],x[1]):b(t[y]))&&d instanceof a)return d;return new a(!1)}p=v.call(t)}for(g=p.next;!(x=g.call(p)).done;)if("object"==typeof(d=f(p,b,x.value,s))&&d&&d instanceof a)return d;return new a(!1)}).stop=function(t){return new a(!0,t)}},function(t,n){t.exports=function(t,n,e){if(!(t instanceof n))throw TypeError("Incorrect "+(e?e+" ":"")+"invocation");return t}},function(t,n,e){"use strict";var r=e(8).f,o=e(16),i=e(103),u=e(33),c=e(60),f=e(59),a=e(34),s=e(104),l=e(7),p=e(58).fastKey,v=e(11),y=v.set,h=v.getterFor;t.exports={getConstructor:function(t,n,e,a){var s=t((function(t,r){c(t,s,n),y(t,{type:n,index:o(null),first:void 0,last:void 0,size:0}),l||(t.size=0),null!=r&&f(r,t[a],t,e)})),v=h(n),d=function(t,n,e){var r,o,i=v(t),u=g(t,n);return u?u.value=e:(i.last=u={index:o=p(n,!0),key:n,value:e,previous:r=i.last,next:void 0,removed:!1},i.first||(i.first=u),r&&(r.next=u),l?i.size++:t.size++,"F"!==o&&(i.index[o]=u)),t},g=function(t,n){var e,r=v(t),o=p(n);if("F"!==o)return r.index[o];for(e=r.first;e;e=e.next)if(e.key==n)return e};return i(s.prototype,{clear:function(){for(var t=v(this),n=t.index,e=t.first;e;)e.removed=!0,e.previous&&(e.previous=e.previous.next=void 0),delete n[e.index],e=e.next;t.first=t.last=void 0,l?t.size=0:this.size=0},delete:function(t){var n=v(this),e=g(this,t);if(e){var r=e.next,o=e.previous;delete n.index[e.index],e.removed=!0,o&&(o.next=r),r&&(r.previous=o),n.first==e&&(n.first=r),n.last==e&&(n.last=o),l?n.size--:this.size--}return!!e},forEach:function(t){for(var n,e=v(this),r=u(t,arguments.length>1?arguments[1]:void 0,3);n=n?n.next:e.first;)for(r(n.value,n.key,this);n&&n.removed;)n=n.previous},has:function(t){return!!g(this,t)}}),i(s.prototype,e?{get:function(t){var n=g(this,t);return n&&n.value},set:function(t,n){return d(this,0===t?0:t,n)}}:{add:function(t){return d(this,t=0===t?0:t,t)}}),l&&r(s.prototype,"size",{get:function(){return v(this).size}}),s},setStrong:function(t,n,e){var r=n+" Iterator",o=h(n),i=h(r);a(t,n,(function(t,n){y(this,{type:r,target:t,state:o(t),kind:n,last:void 0})}),(function(){for(var t=i(this),n=t.kind,e=t.last;e&&e.removed;)e=e.previous;return t.target&&(t.last=e=e?e.next:t.state.first)?"keys"==n?{value:e.key,done:!1}:"values"==n?{value:e.value,done:!1}:{value:[e.key,e.value],done:!1}:(t.target=void 0,{value:void 0,done:!0})}),e?"entries":"values",!e,!0),s(n)}}},function(t,n){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},function(t,n,e){var r=e(84);t.exports=function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&r(t,n)}},function(t,n,e){var r=e(85),o=e(19);t.exports=function(t,n){return!n||"object"!==r(n)&&"function"!=typeof n?o(t):n}},function(t,n){var e;e=function(){return this}();try{e=e||new Function("return this")()}catch(t){"object"==typeof window&&(e=window)}t.exports=e},function(t,n,e){var r=e(44);t.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},function(t,n,e){var r=e(0),o=e(45),i=r.WeakMap;t.exports="function"==typeof i&&/native code/.test(o(i))},function(t,n,e){"use strict";var r=e(21),o=e(46);t.exports=r?{}.toString:function(){return"[object "+o(this)+"]"}},function(t,n,e){var r=e(13),o=e(15),i=e(32),u=e(5),c=e(3),f=e(16),a=e(81),s=e(2),l=o("Reflect","construct"),p=s((function(){function t(){}return!(l((function(){}),[],t)instanceof t)})),v=!s((function(){l((function(){}))})),y=p||v;r({target:"Reflect",stat:!0,forced:y,sham:y},{construct:function(t,n){i(t),u(n);var e=arguments.length<3?t:i(arguments[2]);if(v&&!p)return l(t,n,e);if(t==e){switch(n.length){case 0:return new t;case 1:return new t(n[0]);case 2:return new t(n[0],n[1]);case 3:return new t(n[0],n[1],n[2]);case 4:return new t(n[0],n[1],n[2],n[3])}var r=[null];return r.push.apply(r,n),new(a.apply(t,r))}var o=e.prototype,s=f(c(o)?o:Object.prototype),y=Function.apply.call(t,s,n);return c(y)?y:s}})},function(t,n,e){"use strict";var r={}.propertyIsEnumerable,o=Object.getOwnPropertyDescriptor,i=o&&!r.call({1:2},1);n.f=i?function(t){var n=o(this,t);return!!n&&n.enumerable}:r},function(t,n,e){var r=e(4),o=e(72),i=e(47),u=e(8);t.exports=function(t,n){for(var e=o(n),c=u.f,f=i.f,a=0;a<e.length;a++){var s=e[a];r(t,s)||c(t,s,f(n,s))}}},function(t,n,e){var r=e(15),o=e(74),i=e(77),u=e(5);t.exports=r("Reflect","ownKeys")||function(t){var n=o.f(u(t)),e=i.f;return e?n.concat(e(t)):n}},function(t,n,e){var r=e(0);t.exports=r},function(t,n,e){var r=e(49),o=e(31).concat("length","prototype");n.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},function(t,n,e){var r=e(14),o=e(29),i=e(76),u=function(t){return function(n,e,u){var c,f=r(n),a=o(f.length),s=i(u,a);if(t&&e!=e){for(;a>s;)if((c=f[s++])!=c)return!0}else for(;a>s;s++)if((t||s in f)&&f[s]===e)return t||s||0;return!t&&-1}};t.exports={includes:u(!0),indexOf:u(!1)}},function(t,n,e){var r=e(30),o=Math.max,i=Math.min;t.exports=function(t,n){var e=r(t);return e<0?o(e+n,0):i(e,n)}},function(t,n){n.f=Object.getOwnPropertySymbols},function(t,n,e){var r=e(7),o=e(8),i=e(5),u=e(79);t.exports=r?Object.defineProperties:function(t,n){i(t);for(var e,r=u(n),c=r.length,f=0;c>f;)o.f(t,e=r[f++],n[e]);return t}},function(t,n,e){var r=e(49),o=e(31);t.exports=Object.keys||function(t){return r(t,o)}},function(t,n,e){var r=e(15);t.exports=r("document","documentElement")},function(t,n,e){"use strict";var r=e(32),o=e(3),i=[].slice,u={},c=function(t,n,e){if(!(n in u)){for(var r=[],o=0;o<n;o++)r[o]="a["+o+"]";u[n]=Function("C,a","return new C("+r.join(",")+")")}return u[n](t,e)};t.exports=Function.bind||function(t){var n=r(this),e=i.call(arguments,1),u=function(){var r=e.concat(i.call(arguments));return this instanceof u?c(n,r.length,r):n.apply(t,r)};return o(n.prototype)&&(u.prototype=n.prototype),u}},function(t,n,e){"use strict";var r=e(9),o=e(5),i=e(2),u=e(83),c=RegExp.prototype,f=c.toString,a=i((function(){return"/a/b"!=f.call({source:"a",flags:"b"})})),s="toString"!=f.name;(a||s)&&r(RegExp.prototype,"toString",(function(){var t=o(this),n=String(t.source),e=t.flags;return"/"+n+"/"+String(void 0===e&&t instanceof RegExp&&!("flags"in c)?u.call(t):e)}),{unsafe:!0})},function(t,n,e){"use strict";var r=e(5);t.exports=function(){var t=r(this),n="";return t.global&&(n+="g"),t.ignoreCase&&(n+="i"),t.multiline&&(n+="m"),t.dotAll&&(n+="s"),t.unicode&&(n+="u"),t.sticky&&(n+="y"),n}},function(t,n){function e(n,r){return t.exports=e=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t},e(n,r)}t.exports=e},function(t,n){function e(n){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?t.exports=e=function(t){return typeof t}:t.exports=e=function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},e(n)}t.exports=e},function(t,n,e){"use strict";var r=e(13),o=e(51);r({target:"Array",proto:!0,forced:[].forEach!=o},{forEach:o})},function(t,n,e){var r=e(33),o=e(48),i=e(52),u=e(29),c=e(88),f=[].push,a=function(t){var n=1==t,e=2==t,a=3==t,s=4==t,l=6==t,p=5==t||l;return function(v,y,h,d){for(var g,x,b=i(v),S=o(b),m=r(y,h,3),O=u(S.length),w=0,E=d||c,j=n?E(v,O):e?E(v,0):void 0;O>w;w++)if((p||w in S)&&(x=m(g=S[w],w,b),t))if(n)j[w]=x;else if(x)switch(t){case 3:return!0;case 5:return g;case 6:return w;case 2:f.call(j,g)}else if(s)return!1;return l?-1:a||s?s:j}};t.exports={forEach:a(0),map:a(1),filter:a(2),some:a(3),every:a(4),find:a(5),findIndex:a(6)}},function(t,n,e){var r=e(3),o=e(89),i=e(1)("species");t.exports=function(t,n){var e;return o(t)&&("function"!=typeof(e=t.constructor)||e!==Array&&!o(e.prototype)?r(e)&&null===(e=e[i])&&(e=void 0):e=void 0),new(void 0===e?Array:e)(0===n?0:n)}},function(t,n,e){var r=e(27);t.exports=Array.isArray||function(t){return"Array"==r(t)}},function(t,n,e){"use strict";var r=e(2);t.exports=function(t,n){var e=[][t];return!!e&&r((function(){e.call(null,n||function(){throw 1},1)}))}},function(t,n,e){var r=e(7),o=e(2),i=e(4),u=Object.defineProperty,c={},f=function(t){throw t};t.exports=function(t,n){if(i(c,t))return c[t];n||(n={});var e=[][t],a=!!i(n,"ACCESSORS")&&n.ACCESSORS,s=i(n,0)?n[0]:f,l=i(n,1)?n[1]:void 0;return c[t]=!!e&&!o((function(){if(a&&!r)return!0;var t={length:-1};a?u(t,1,{enumerable:!0,get:f}):t[1]=1,e.call(t,s,l)}))}},function(t,n,e){var r=e(1),o=e(16),i=e(8),u=r("unscopables"),c=Array.prototype;null==c[u]&&i.f(c,u,{configurable:!0,value:o(null)}),t.exports=function(t){c[u][t]=!0}},function(t,n,e){"use strict";var r=e(54).IteratorPrototype,o=e(16),i=e(24),u=e(35),c=e(10),f=function(){return this};t.exports=function(t,n,e){var a=n+" Iterator";return t.prototype=o(r,{next:i(1,e)}),u(t,a,!1,!0),c[a]=f,t}},function(t,n,e){var r=e(2);t.exports=!r((function(){function t(){}return t.prototype.constructor=null,Object.getPrototypeOf(new t)!==t.prototype}))},function(t,n,e){var r=e(3);t.exports=function(t){if(!r(t)&&null!==t)throw TypeError("Can't set "+String(t)+" as a prototype");return t}},function(t,n,e){"use strict";var r=e(57),o=e(61);t.exports=r("Map",(function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}}),o)},function(t,n,e){var r=e(2);t.exports=!r((function(){return Object.isExtensible(Object.preventExtensions({}))}))},function(t,n,e){var r=e(1),o=e(10),i=r("iterator"),u=Array.prototype;t.exports=function(t){return void 0!==t&&(o.Array===t||u[i]===t)}},function(t,n,e){var r=e(46),o=e(10),i=e(1)("iterator");t.exports=function(t){if(null!=t)return t[i]||t["@@iterator"]||o[r(t)]}},function(t,n,e){var r=e(5);t.exports=function(t,n,e,o){try{return o?n(r(e)[0],e[1]):n(e)}catch(n){var i=t.return;throw void 0!==i&&r(i.call(t)),n}}},function(t,n,e){var r=e(1)("iterator"),o=!1;try{var i=0,u={next:function(){return{done:!!i++}},return:function(){o=!0}};u[r]=function(){return this},Array.from(u,(function(){throw 2}))}catch(t){}t.exports=function(t,n){if(!n&&!o)return!1;var e=!1;try{var i={};i[r]=function(){return{next:function(){return{done:e=!0}}}},t(i)}catch(t){}return e}},function(t,n,e){var r=e(3),o=e(56);t.exports=function(t,n,e){var i,u;return o&&"function"==typeof(i=n.constructor)&&i!==e&&r(u=i.prototype)&&u!==e.prototype&&o(t,u),t}},function(t,n,e){var r=e(9);t.exports=function(t,n,e){for(var o in n)r(t,o,n[o],e);return t}},function(t,n,e){"use strict";var r=e(15),o=e(8),i=e(1),u=e(7),c=i("species");t.exports=function(t){var n=r(t),e=o.f;u&&n&&!n[c]&&e(n,c,{configurable:!0,get:function(){return this}})}},function(t,n,e){"use strict";var r=e(57),o=e(61);t.exports=r("Set",(function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}}),o)},function(t,n,e){"use strict";var r=e(107).charAt,o=e(11),i=e(34),u=o.set,c=o.getterFor("String Iterator");i(String,"String",(function(t){u(this,{type:"String Iterator",string:String(t),index:0})}),(function(){var t,n=c(this),e=n.string,o=n.index;return o>=e.length?{value:void 0,done:!0}:(t=r(e,o),n.index+=t.length,{value:t,done:!1})}))},function(t,n,e){var r=e(30),o=e(28),i=function(t){return function(n,e){var i,u,c=String(o(n)),f=r(e),a=c.length;return f<0||f>=a?t?"":void 0:(i=c.charCodeAt(f))<55296||i>56319||f+1===a||(u=c.charCodeAt(f+1))<56320||u>57343?t?c.charAt(f):i:t?c.slice(f,f+2):u-56320+(i-55296<<10)+65536}};t.exports={codeAt:i(!1),charAt:i(!0)}},function(t,n,e){var r=e(0),o=e(62),i=e(51),u=e(6);for(var c in o){var f=r[c],a=f&&f.prototype;if(a&&a.forEach!==i)try{u(a,"forEach",i)}catch(t){a.forEach=i}}},function(t,n,e){var r=e(0),o=e(62),i=e(53),u=e(6),c=e(1),f=c("iterator"),a=c("toStringTag"),s=i.values;for(var l in o){var p=r[l],v=p&&p.prototype;if(v){if(v[f]!==s)try{u(v,f,s)}catch(t){v[f]=s}if(v[a]||u(v,a,l),o[l])for(var y in i)if(v[y]!==i[y])try{u(v,y,i[y])}catch(t){v[y]=i[y]}}}},function(t,n,e){"use strict";e.r(n),e.d(n,"default",(function(){return b}));e(38),e(69),e(82);var r=e(20),o=e.n(r),i=e(17),u=e.n(i),c=e(18),f=e.n(c),a=e(19),s=e.n(a),l=e(63),p=e.n(l),v=e(64),y=e.n(v),h=e(36),d=e.n(h),g=e(37);e(86),e(53),e(96),e(105),e(106),e(108),e(109);function x(t){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var e,r=d()(t);if(n){var o=d()(this).constructor;e=Reflect.construct(r,arguments,o)}else e=r.apply(this,arguments);return y()(this,e)}}var b=function(t){p()(e,t);var n=x(e);function e(t){var r;return u()(this,e),(r=n.call(this,["Switch.activate","Switch.deactivate"])).rootElement=t,r.$input=r.rootElement.querySelector('input[type="checkbox"]'),r.checked=!1,r.toggle=r.toggle.bind(s()(r)),r.onKeydown=r.onKeydown.bind(s()(r)),r}return f()(e,[{key:"init",value:function(){this.initEvents()}},{key:"initEvents",value:function(){this.rootElement.addEventListener("click",this.toggle),this.rootElement.addEventListener("keydown",this.onKeydown)}},{key:"onKeydown",value:function(t){var n,e=this,r=t.keyCode||t.which,i=function(){e.toggle(),t.preventDefault()},u=(n={},o()(n,g.SPACE,i),o()(n,g.ENTER,i),o()(n,"default",(function(){return!1})),n);return(u[r]||u.default)()}},{key:"toggle",value:function(){return this.checked?this.deactivate():this.activate()}},{key:"activate",value:function(){return!this.checked&&(this.checked=!0,this.$input.checked=!0,this.$input.setAttribute("checked",!0),this.rootElement.setAttribute("aria-checked",!0),this.emit("Switch.activate",this.rootElement))}},{key:"deactivate",value:function(){return!!this.checked&&(this.checked=!1,this.$input.checked=!1,this.$input.setAttribute("checked",!1),this.rootElement.setAttribute("aria-checked",!1),this.emit("Switch.deactivate",this.rootElement))}}]),e}(function(){function t(n){u()(this,t),this.listeners=new Map,this.events=n}return f()(t,[{key:"on",value:function(t,n){var e=this.listeners.get(t);e||(e=new Set,this.listeners.set(t,e)),e.add(n)}},{key:"once",value:function(t,n){var e=this,r=function r(o){e.off(t,r),n.call(e,o)};this.on(t,r)}},{key:"off",value:function(t,n){var e=this.listeners.get(t);e&&(e.delete(n),e.size||this.listeners.delete(t))}},{key:"offAll",value:function(t){if(void 0===t)return this.listeners.clear();var n=this.listeners.get(t);return!!n&&(n.clear(),this.listeners.delete(t))}},{key:"hasListeners",value:function(t){return this.listeners.has(t)}},{key:"emit",value:function(t,n){var e=this,r=this.listeners.get(t);r&&r.forEach((function(t){return t.call(e,n)}))}}]),t}())}])}));