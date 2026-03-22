var e=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var t=e((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.portal`),r=Symbol.for(`react.fragment`),i=Symbol.for(`react.strict_mode`),a=Symbol.for(`react.profiler`),o=Symbol.for(`react.consumer`),s=Symbol.for(`react.context`),c=Symbol.for(`react.forward_ref`),l=Symbol.for(`react.suspense`),u=Symbol.for(`react.memo`),d=Symbol.for(`react.lazy`),f=Symbol.for(`react.activity`),p=Symbol.iterator;function m(e){return typeof e!=`object`||!e?null:(e=p&&e[p]||e[`@@iterator`],typeof e==`function`?e:null)}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,_={};function v(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if(typeof e!=`object`&&typeof e!=`function`&&e!=null)throw Error(`takes an object of state variables to update or a function which returns an object of state variables.`);this.updater.enqueueSetState(this,e,t,`setState`)},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,`forceUpdate`)};function y(){}y.prototype=v.prototype;function b(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}var x=b.prototype=new y;x.constructor=b,g(x,v.prototype),x.isPureReactComponent=!0;var ee=Array.isArray;function S(){}var C={H:null,A:null,T:null,S:null},te=Object.prototype.hasOwnProperty;function ne(e,n,r){var i=r.ref;return{$$typeof:t,type:e,key:n,ref:i===void 0?null:i,props:r}}function re(e,t){return ne(e.type,t,e.props)}function ie(e){return typeof e==`object`&&!!e&&e.$$typeof===t}function ae(e){var t={"=":`=0`,":":`=2`};return`$`+e.replace(/[=:]/g,function(e){return t[e]})}var oe=/\/+/g;function se(e,t){return typeof e==`object`&&e&&e.key!=null?ae(``+e.key):t.toString(36)}function ce(e){switch(e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason;default:switch(typeof e.status==`string`?e.then(S,S):(e.status=`pending`,e.then(function(t){e.status===`pending`&&(e.status=`fulfilled`,e.value=t)},function(t){e.status===`pending`&&(e.status=`rejected`,e.reason=t)})),e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason}}throw e}function le(e,r,i,a,o){var s=typeof e;(s===`undefined`||s===`boolean`)&&(e=null);var c=!1;if(e===null)c=!0;else switch(s){case`bigint`:case`string`:case`number`:c=!0;break;case`object`:switch(e.$$typeof){case t:case n:c=!0;break;case d:return c=e._init,le(c(e._payload),r,i,a,o)}}if(c)return o=o(e),c=a===``?`.`+se(e,0):a,ee(o)?(i=``,c!=null&&(i=c.replace(oe,`$&/`)+`/`),le(o,r,i,``,function(e){return e})):o!=null&&(ie(o)&&(o=re(o,i+(o.key==null||e&&e.key===o.key?``:(``+o.key).replace(oe,`$&/`)+`/`)+c)),r.push(o)),1;c=0;var l=a===``?`.`:a+`:`;if(ee(e))for(var u=0;u<e.length;u++)a=e[u],s=l+se(a,u),c+=le(a,r,i,s,o);else if(u=m(e),typeof u==`function`)for(e=u.call(e),u=0;!(a=e.next()).done;)a=a.value,s=l+se(a,u++),c+=le(a,r,i,s,o);else if(s===`object`){if(typeof e.then==`function`)return le(ce(e),r,i,a,o);throw r=String(e),Error(`Objects are not valid as a React child (found: `+(r===`[object Object]`?`object with keys {`+Object.keys(e).join(`, `)+`}`:r)+`). If you meant to render a collection of children, use an array instead.`)}return c}function ue(e,t,n){if(e==null)return e;var r=[],i=0;return le(e,r,``,``,function(e){return t.call(n,e,i++)}),r}function de(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var w=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},T={map:ue,forEach:function(e,t,n){ue(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ue(e,function(){t++}),t},toArray:function(e){return ue(e,function(e){return e})||[]},only:function(e){if(!ie(e))throw Error(`React.Children.only expected to receive a single React element child.`);return e}};e.Activity=f,e.Children=T,e.Component=v,e.Fragment=r,e.Profiler=a,e.PureComponent=b,e.StrictMode=i,e.Suspense=l,e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=C,e.__COMPILER_RUNTIME={__proto__:null,c:function(e){return C.H.useMemoCache(e)}},e.cache=function(e){return function(){return e.apply(null,arguments)}},e.cacheSignal=function(){return null},e.cloneElement=function(e,t,n){if(e==null)throw Error(`The argument must be a React element, but you passed `+e+`.`);var r=g({},e.props),i=e.key;if(t!=null)for(a in t.key!==void 0&&(i=``+t.key),t)!te.call(t,a)||a===`key`||a===`__self`||a===`__source`||a===`ref`&&t.ref===void 0||(r[a]=t[a]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var o=Array(a),s=0;s<a;s++)o[s]=arguments[s+2];r.children=o}return ne(e.type,i,r)},e.createContext=function(e){return e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:o,_context:e},e},e.createElement=function(e,t,n){var r,i={},a=null;if(t!=null)for(r in t.key!==void 0&&(a=``+t.key),t)te.call(t,r)&&r!==`key`&&r!==`__self`&&r!==`__source`&&(i[r]=t[r]);var o=arguments.length-2;if(o===1)i.children=n;else if(1<o){for(var s=Array(o),c=0;c<o;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)i[r]===void 0&&(i[r]=o[r]);return ne(e,a,i)},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:c,render:e}},e.isValidElement=ie,e.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:de}},e.memo=function(e,t){return{$$typeof:u,type:e,compare:t===void 0?null:t}},e.startTransition=function(e){var t=C.T,n={};C.T=n;try{var r=e(),i=C.S;i!==null&&i(n,r),typeof r==`object`&&r&&typeof r.then==`function`&&r.then(S,w)}catch(e){w(e)}finally{t!==null&&n.types!==null&&(t.types=n.types),C.T=t}},e.unstable_useCacheRefresh=function(){return C.H.useCacheRefresh()},e.use=function(e){return C.H.use(e)},e.useActionState=function(e,t,n){return C.H.useActionState(e,t,n)},e.useCallback=function(e,t){return C.H.useCallback(e,t)},e.useContext=function(e){return C.H.useContext(e)},e.useDebugValue=function(){},e.useDeferredValue=function(e,t){return C.H.useDeferredValue(e,t)},e.useEffect=function(e,t){return C.H.useEffect(e,t)},e.useEffectEvent=function(e){return C.H.useEffectEvent(e)},e.useId=function(){return C.H.useId()},e.useImperativeHandle=function(e,t,n){return C.H.useImperativeHandle(e,t,n)},e.useInsertionEffect=function(e,t){return C.H.useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return C.H.useLayoutEffect(e,t)},e.useMemo=function(e,t){return C.H.useMemo(e,t)},e.useOptimistic=function(e,t){return C.H.useOptimistic(e,t)},e.useReducer=function(e,t,n){return C.H.useReducer(e,t,n)},e.useRef=function(e){return C.H.useRef(e)},e.useState=function(e){return C.H.useState(e)},e.useSyncExternalStore=function(e,t,n){return C.H.useSyncExternalStore(e,t,n)},e.useTransition=function(){return C.H.useTransition()},e.version=`19.2.4`})),n=e(((e,n)=>{n.exports=t()})),r=e((e=>{function t(e,t){var n=e.length;e.push(t);a:for(;0<n;){var r=n-1>>>1,a=e[r];if(0<i(a,t))e[r]=t,e[n]=a,n=r;else break a}}function n(e){return e.length===0?null:e[0]}function r(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;a:for(var r=0,a=e.length,o=a>>>1;r<o;){var s=2*(r+1)-1,c=e[s],l=s+1,u=e[l];if(0>i(c,n))l<a&&0>i(u,c)?(e[r]=u,e[l]=n,r=l):(e[r]=c,e[s]=n,r=s);else if(l<a&&0>i(u,n))e[r]=u,e[l]=n,r=l;else break a}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return n===0?e.id-t.id:n}if(e.unstable_now=void 0,typeof performance==`object`&&typeof performance.now==`function`){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var c=[],l=[],u=1,d=null,f=3,p=!1,m=!1,h=!1,g=!1,_=typeof setTimeout==`function`?setTimeout:null,v=typeof clearTimeout==`function`?clearTimeout:null,y=typeof setImmediate<`u`?setImmediate:null;function b(e){for(var i=n(l);i!==null;){if(i.callback===null)r(l);else if(i.startTime<=e)r(l),i.sortIndex=i.expirationTime,t(c,i);else break;i=n(l)}}function x(e){if(h=!1,b(e),!m)if(n(c)!==null)m=!0,ee||(ee=!0,ie());else{var t=n(l);t!==null&&se(x,t.startTime-e)}}var ee=!1,S=-1,C=5,te=-1;function ne(){return g?!0:!(e.unstable_now()-te<C)}function re(){if(g=!1,ee){var t=e.unstable_now();te=t;var i=!0;try{a:{m=!1,h&&(h=!1,v(S),S=-1),p=!0;var a=f;try{b:{for(b(t),d=n(c);d!==null&&!(d.expirationTime>t&&ne());){var o=d.callback;if(typeof o==`function`){d.callback=null,f=d.priorityLevel;var s=o(d.expirationTime<=t);if(t=e.unstable_now(),typeof s==`function`){d.callback=s,b(t),i=!0;break b}d===n(c)&&r(c),b(t)}else r(c);d=n(c)}if(d!==null)i=!0;else{var u=n(l);u!==null&&se(x,u.startTime-t),i=!1}}break a}finally{d=null,f=a,p=!1}i=void 0}}finally{i?ie():ee=!1}}}var ie;if(typeof y==`function`)ie=function(){y(re)};else if(typeof MessageChannel<`u`){var ae=new MessageChannel,oe=ae.port2;ae.port1.onmessage=re,ie=function(){oe.postMessage(null)}}else ie=function(){_(re,0)};function se(t,n){S=_(function(){t(e.unstable_now())},n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`):C=0<e?Math.floor(1e3/e):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},e.unstable_requestPaint=function(){g=!0},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},e.unstable_scheduleCallback=function(r,i,a){var o=e.unstable_now();switch(typeof a==`object`&&a?(a=a.delay,a=typeof a==`number`&&0<a?o+a:o):a=o,r){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=a+s,r={id:u++,callback:i,priorityLevel:r,startTime:a,expirationTime:s,sortIndex:-1},a>o?(r.sortIndex=a,t(l,r),n(c)===null&&r===n(l)&&(h?(v(S),S=-1):h=!0,se(x,a-o))):(r.sortIndex=s,t(c,r),m||p||(m=!0,ee||(ee=!0,ie()))),r},e.unstable_shouldYield=ne,e.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}})),i=e(((e,t)=>{t.exports=r()})),a=e((e=>{var t=n();function r(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function i(){}var a={d:{f:i,r:function(){throw Error(r(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},o=Symbol.for(`react.portal`);function s(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:r==null?null:``+r,children:e,containerInfo:t,implementation:n}}var c=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function l(e,t){if(e===`font`)return``;if(typeof t==`string`)return t===`use-credentials`?t:``}e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,e.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(r(299));return s(e,t,null,n)},e.flushSync=function(e){var t=c.T,n=a.p;try{if(c.T=null,a.p=2,e)return e()}finally{c.T=t,a.p=n,a.d.f()}},e.preconnect=function(e,t){typeof e==`string`&&(t?(t=t.crossOrigin,t=typeof t==`string`?t===`use-credentials`?t:``:void 0):t=null,a.d.C(e,t))},e.prefetchDNS=function(e){typeof e==`string`&&a.d.D(e)},e.preinit=function(e,t){if(typeof e==`string`&&t&&typeof t.as==`string`){var n=t.as,r=l(n,t.crossOrigin),i=typeof t.integrity==`string`?t.integrity:void 0,o=typeof t.fetchPriority==`string`?t.fetchPriority:void 0;n===`style`?a.d.S(e,typeof t.precedence==`string`?t.precedence:void 0,{crossOrigin:r,integrity:i,fetchPriority:o}):n===`script`&&a.d.X(e,{crossOrigin:r,integrity:i,fetchPriority:o,nonce:typeof t.nonce==`string`?t.nonce:void 0})}},e.preinitModule=function(e,t){if(typeof e==`string`)if(typeof t==`object`&&t){if(t.as==null||t.as===`script`){var n=l(t.as,t.crossOrigin);a.d.M(e,{crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0})}}else t??a.d.M(e)},e.preload=function(e,t){if(typeof e==`string`&&typeof t==`object`&&t&&typeof t.as==`string`){var n=t.as,r=l(n,t.crossOrigin);a.d.L(e,n,{crossOrigin:r,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,type:typeof t.type==`string`?t.type:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy==`string`?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet==`string`?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes==`string`?t.imageSizes:void 0,media:typeof t.media==`string`?t.media:void 0})}},e.preloadModule=function(e,t){if(typeof e==`string`)if(t){var n=l(t.as,t.crossOrigin);a.d.m(e,{as:typeof t.as==`string`&&t.as!==`script`?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0})}else a.d.m(e)},e.requestFormReset=function(e){a.d.r(e)},e.unstable_batchedUpdates=function(e,t){return e(t)},e.useFormState=function(e,t,n){return c.H.useFormState(e,t,n)},e.useFormStatus=function(){return c.H.useHostTransitionStatus()},e.version=`19.2.4`})),o=e(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=a()})),s=e((e=>{var t=i(),r=n(),a=o();function s(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function c(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function l(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function u(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function d(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function f(e){if(l(e)!==e)throw Error(s(188))}function p(e){var t=e.alternate;if(!t){if(t=l(e),t===null)throw Error(s(188));return t===e?e:null}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var a=i.alternate;if(a===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===a.child){for(a=i.child;a;){if(a===n)return f(i),e;if(a===r)return f(i),t;a=a.sibling}throw Error(s(188))}if(n.return!==r.return)n=i,r=a;else{for(var o=!1,c=i.child;c;){if(c===n){o=!0,n=i,r=a;break}if(c===r){o=!0,r=i,n=a;break}c=c.sibling}if(!o){for(c=a.child;c;){if(c===n){o=!0,n=a,r=i;break}if(c===r){o=!0,r=a,n=i;break}c=c.sibling}if(!o)throw Error(s(189))}}if(n.alternate!==r)throw Error(s(190))}if(n.tag!==3)throw Error(s(188));return n.stateNode.current===n?e:t}function m(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=m(e),t!==null)return t;e=e.sibling}return null}var h=Object.assign,g=Symbol.for(`react.element`),_=Symbol.for(`react.transitional.element`),v=Symbol.for(`react.portal`),y=Symbol.for(`react.fragment`),b=Symbol.for(`react.strict_mode`),x=Symbol.for(`react.profiler`),ee=Symbol.for(`react.consumer`),S=Symbol.for(`react.context`),C=Symbol.for(`react.forward_ref`),te=Symbol.for(`react.suspense`),ne=Symbol.for(`react.suspense_list`),re=Symbol.for(`react.memo`),ie=Symbol.for(`react.lazy`),ae=Symbol.for(`react.activity`),oe=Symbol.for(`react.memo_cache_sentinel`),se=Symbol.iterator;function ce(e){return typeof e!=`object`||!e?null:(e=se&&e[se]||e[`@@iterator`],typeof e==`function`?e:null)}var le=Symbol.for(`react.client.reference`);function ue(e){if(e==null)return null;if(typeof e==`function`)return e.$$typeof===le?null:e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case y:return`Fragment`;case x:return`Profiler`;case b:return`StrictMode`;case te:return`Suspense`;case ne:return`SuspenseList`;case ae:return`Activity`}if(typeof e==`object`)switch(e.$$typeof){case v:return`Portal`;case S:return e.displayName||`Context`;case ee:return(e._context.displayName||`Context`)+`.Consumer`;case C:var t=e.render;return e=e.displayName,e||=(e=t.displayName||t.name||``,e===``?`ForwardRef`:`ForwardRef(`+e+`)`),e;case re:return t=e.displayName||null,t===null?ue(e.type)||`Memo`:t;case ie:t=e._payload,e=e._init;try{return ue(e(t))}catch{}}return null}var de=Array.isArray,w=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,T=a.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,fe={pending:!1,data:null,method:null,action:null},pe=[],me=-1;function he(e){return{current:e}}function E(e){0>me||(e.current=pe[me],pe[me]=null,me--)}function D(e,t){me++,pe[me]=e.current,e.current=t}var ge=he(null),_e=he(null),ve=he(null),ye=he(null);function be(e,t){switch(D(ve,t),D(_e,e),D(ge,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Vd(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Vd(t),e=Hd(t,e);else switch(e){case`svg`:e=1;break;case`math`:e=2;break;default:e=0}}E(ge),D(ge,e)}function xe(){E(ge),E(_e),E(ve)}function Se(e){e.memoizedState!==null&&D(ye,e);var t=ge.current,n=Hd(t,e.type);t!==n&&(D(_e,e),D(ge,n))}function Ce(e){_e.current===e&&(E(ge),E(_e)),ye.current===e&&(E(ye),Qf._currentValue=fe)}var we,Te;function Ee(e){if(we===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);we=t&&t[1]||``,Te=-1<e.stack.indexOf(`
    at`)?` (<anonymous>)`:-1<e.stack.indexOf(`@`)?`@unknown:0:0`:``}return`
`+we+e+Te}var O=!1;function De(e,t){if(!e||O)return``;O=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()};if(Object.defineProperty(n.prototype,`props`,{set:function(){throw Error()}}),typeof Reflect==`object`&&Reflect.construct){try{Reflect.construct(n,[])}catch(e){var r=e}Reflect.construct(e,[],n)}else{try{n.call()}catch(e){r=e}e.call(n.prototype)}}else{try{throw Error()}catch(e){r=e}(n=e())&&typeof n.catch==`function`&&n.catch(function(){})}}catch(e){if(e&&r&&typeof e.stack==`string`)return[e.stack,r.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName=`DetermineComponentFrameRoot`;var i=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,`name`);i&&i.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,`name`,{value:`DetermineComponentFrameRoot`});var a=r.DetermineComponentFrameRoot(),o=a[0],s=a[1];if(o&&s){var c=o.split(`
`),l=s.split(`
`);for(i=r=0;r<c.length&&!c[r].includes(`DetermineComponentFrameRoot`);)r++;for(;i<l.length&&!l[i].includes(`DetermineComponentFrameRoot`);)i++;if(r===c.length||i===l.length)for(r=c.length-1,i=l.length-1;1<=r&&0<=i&&c[r]!==l[i];)i--;for(;1<=r&&0<=i;r--,i--)if(c[r]!==l[i]){if(r!==1||i!==1)do if(r--,i--,0>i||c[r]!==l[i]){var u=`
`+c[r].replace(` at new `,` at `);return e.displayName&&u.includes(`<anonymous>`)&&(u=u.replace(`<anonymous>`,e.displayName)),u}while(1<=r&&0<=i);break}}}finally{O=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:``)?Ee(n):``}function Oe(e,t){switch(e.tag){case 26:case 27:case 5:return Ee(e.type);case 16:return Ee(`Lazy`);case 13:return e.child!==t&&t!==null?Ee(`Suspense Fallback`):Ee(`Suspense`);case 19:return Ee(`SuspenseList`);case 0:case 15:return De(e.type,!1);case 11:return De(e.type.render,!1);case 1:return De(e.type,!0);case 31:return Ee(`Activity`);default:return``}}function ke(e){try{var t=``,n=null;do t+=Oe(e,n),n=e,e=e.return;while(e);return t}catch(e){return`
Error generating stack: `+e.message+`
`+e.stack}}var Ae=Object.prototype.hasOwnProperty,je=t.unstable_scheduleCallback,Me=t.unstable_cancelCallback,Ne=t.unstable_shouldYield,Pe=t.unstable_requestPaint,Fe=t.unstable_now,Ie=t.unstable_getCurrentPriorityLevel,Le=t.unstable_ImmediatePriority,Re=t.unstable_UserBlockingPriority,ze=t.unstable_NormalPriority,Be=t.unstable_LowPriority,Ve=t.unstable_IdlePriority,He=t.log,Ue=t.unstable_setDisableYieldValue,We=null,Ge=null;function Ke(e){if(typeof He==`function`&&Ue(e),Ge&&typeof Ge.setStrictMode==`function`)try{Ge.setStrictMode(We,e)}catch{}}var qe=Math.clz32?Math.clz32:Xe,Je=Math.log,Ye=Math.LN2;function Xe(e){return e>>>=0,e===0?32:31-(Je(e)/Ye|0)|0}var Ze=256,Qe=262144,$e=4194304;function et(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function tt(e,t,n){var r=e.pendingLanes;if(r===0)return 0;var i=0,a=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var s=r&134217727;return s===0?(s=r&~a,s===0?o===0?n||(n=r&~e,n!==0&&(i=et(n))):i=et(o):i=et(s)):(r=s&~a,r===0?(o&=s,o===0?n||(n=s&~e,n!==0&&(i=et(n))):i=et(o)):i=et(r)),i===0?0:t!==0&&t!==i&&(t&a)===0&&(a=i&-i,n=t&-t,a>=n||a===32&&n&4194048)?t:i}function nt(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function rt(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function it(){var e=$e;return $e<<=1,!($e&62914560)&&($e=4194304),e}function at(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function ot(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function st(e,t,n,r,i,a){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var s=e.entanglements,c=e.expirationTimes,l=e.hiddenUpdates;for(n=o&~n;0<n;){var u=31-qe(n),d=1<<u;s[u]=0,c[u]=-1;var f=l[u];if(f!==null)for(l[u]=null,u=0;u<f.length;u++){var p=f[u];p!==null&&(p.lane&=-536870913)}n&=~d}r!==0&&ct(e,r,0),a!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=a&~(o&~t))}function ct(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-qe(t);e.entangledLanes|=t,e.entanglements[r]=e.entanglements[r]|1073741824|n&261930}function lt(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-qe(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}function ut(e,t){var n=t&-t;return n=n&42?1:dt(n),(n&(e.suspendedLanes|t))===0?n:0}function dt(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function ft(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function pt(){var e=T.p;return e===0?(e=window.event,e===void 0?32:mp(e.type)):e}function mt(e,t){var n=T.p;try{return T.p=e,t()}finally{T.p=n}}var ht=Math.random().toString(36).slice(2),gt=`__reactFiber$`+ht,_t=`__reactProps$`+ht,vt=`__reactContainer$`+ht,yt=`__reactEvents$`+ht,bt=`__reactListeners$`+ht,xt=`__reactHandles$`+ht,St=`__reactResources$`+ht,Ct=`__reactMarker$`+ht;function wt(e){delete e[gt],delete e[_t],delete e[yt],delete e[bt],delete e[xt]}function Tt(e){var t=e[gt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[vt]||n[gt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=df(e);e!==null;){if(n=e[gt])return n;e=df(e)}return t}e=n,n=e.parentNode}return null}function Et(e){if(e=e[gt]||e[vt]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Dt(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(s(33))}function Ot(e){var t=e[St];return t||=e[St]={hoistableStyles:new Map,hoistableScripts:new Map},t}function kt(e){e[Ct]=!0}var At=new Set,jt={};function Mt(e,t){Nt(e,t),Nt(e+`Capture`,t)}function Nt(e,t){for(jt[e]=t,e=0;e<t.length;e++)At.add(t[e])}var Pt=RegExp(`^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`),Ft={},It={};function Lt(e){return Ae.call(It,e)?!0:Ae.call(Ft,e)?!1:Pt.test(e)?It[e]=!0:(Ft[e]=!0,!1)}function Rt(e,t,n){if(Lt(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:e.removeAttribute(t);return;case`boolean`:var r=t.toLowerCase().slice(0,5);if(r!==`data-`&&r!==`aria-`){e.removeAttribute(t);return}}e.setAttribute(t,``+n)}}function zt(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(t);return}e.setAttribute(t,``+n)}}function Bt(e,t,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(n);return}e.setAttributeNS(t,n,``+r)}}function Vt(e){switch(typeof e){case`bigint`:case`boolean`:case`number`:case`string`:case`undefined`:return e;case`object`:return e;default:return``}}function Ht(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()===`input`&&(t===`checkbox`||t===`radio`)}function Ut(e,t,n){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&r!==void 0&&typeof r.get==`function`&&typeof r.set==`function`){var i=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){n=``+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(e){n=``+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Wt(e){if(!e._valueTracker){var t=Ht(e)?`checked`:`value`;e._valueTracker=Ut(e,t,``+e[t])}}function Gt(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r=``;return e&&(r=Ht(e)?e.checked?`true`:`false`:e.value),e=r,e===n?!1:(t.setValue(e),!0)}function Kt(e){if(e||=typeof document<`u`?document:void 0,e===void 0)return null;try{return e.activeElement||e.body}catch{return e.body}}var qt=/[\n"\\]/g;function k(e){return e.replace(qt,function(e){return`\\`+e.charCodeAt(0).toString(16)+` `})}function Jt(e,t,n,r,i,a,o,s){e.name=``,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`?e.type=o:e.removeAttribute(`type`),t==null?o!==`submit`&&o!==`reset`||e.removeAttribute(`value`):o===`number`?(t===0&&e.value===``||e.value!=t)&&(e.value=``+Vt(t)):e.value!==``+Vt(t)&&(e.value=``+Vt(t)),t==null?n==null?r!=null&&e.removeAttribute(`value`):A(e,o,Vt(n)):A(e,o,Vt(t)),i==null&&a!=null&&(e.defaultChecked=!!a),i!=null&&(e.checked=i&&typeof i!=`function`&&typeof i!=`symbol`),s!=null&&typeof s!=`function`&&typeof s!=`symbol`&&typeof s!=`boolean`?e.name=``+Vt(s):e.removeAttribute(`name`)}function Yt(e,t,n,r,i,a,o,s){if(a!=null&&typeof a!=`function`&&typeof a!=`symbol`&&typeof a!=`boolean`&&(e.type=a),t!=null||n!=null){if(!(a!==`submit`&&a!==`reset`||t!=null)){Wt(e);return}n=n==null?``:``+Vt(n),t=t==null?n:``+Vt(t),s||t===e.value||(e.value=t),e.defaultValue=t}r??=i,r=typeof r!=`function`&&typeof r!=`symbol`&&!!r,e.checked=s?e.checked:!!r,e.defaultChecked=!!r,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`&&(e.name=o),Wt(e)}function A(e,t,n){t===`number`&&Kt(e.ownerDocument)===e||e.defaultValue===``+n||(e.defaultValue=``+n)}function Xt(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t[`$`+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty(`$`+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=``+Vt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Zt(e,t,n){if(t!=null&&(t=``+Vt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n==null?``:``+Vt(n)}function Qt(e,t,n,r){if(t==null){if(r!=null){if(n!=null)throw Error(s(92));if(de(r)){if(1<r.length)throw Error(s(93));r=r[0]}n=r}n??=``,t=n}n=Vt(t),e.defaultValue=n,r=e.textContent,r===n&&r!==``&&r!==null&&(e.value=r),Wt(e)}function $t(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var en=new Set(`animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(` `));function tn(e,t,n){var r=t.indexOf(`--`)===0;n==null||typeof n==`boolean`||n===``?r?e.setProperty(t,``):t===`float`?e.cssFloat=``:e[t]=``:r?e.setProperty(t,n):typeof n!=`number`||n===0||en.has(t)?t===`float`?e.cssFloat=n:e[t]=(``+n).trim():e[t]=n+`px`}function nn(e,t,n){if(t!=null&&typeof t!=`object`)throw Error(s(62));if(e=e.style,n!=null){for(var r in n)!n.hasOwnProperty(r)||t!=null&&t.hasOwnProperty(r)||(r.indexOf(`--`)===0?e.setProperty(r,``):r===`float`?e.cssFloat=``:e[r]=``);for(var i in t)r=t[i],t.hasOwnProperty(i)&&n[i]!==r&&tn(e,i,r)}else for(var a in t)t.hasOwnProperty(a)&&tn(e,a,t[a])}function rn(e){if(e.indexOf(`-`)===-1)return!1;switch(e){case`annotation-xml`:case`color-profile`:case`font-face`:case`font-face-src`:case`font-face-uri`:case`font-face-format`:case`font-face-name`:case`missing-glyph`:return!1;default:return!0}}var an=new Map([[`acceptCharset`,`accept-charset`],[`htmlFor`,`for`],[`httpEquiv`,`http-equiv`],[`crossOrigin`,`crossorigin`],[`accentHeight`,`accent-height`],[`alignmentBaseline`,`alignment-baseline`],[`arabicForm`,`arabic-form`],[`baselineShift`,`baseline-shift`],[`capHeight`,`cap-height`],[`clipPath`,`clip-path`],[`clipRule`,`clip-rule`],[`colorInterpolation`,`color-interpolation`],[`colorInterpolationFilters`,`color-interpolation-filters`],[`colorProfile`,`color-profile`],[`colorRendering`,`color-rendering`],[`dominantBaseline`,`dominant-baseline`],[`enableBackground`,`enable-background`],[`fillOpacity`,`fill-opacity`],[`fillRule`,`fill-rule`],[`floodColor`,`flood-color`],[`floodOpacity`,`flood-opacity`],[`fontFamily`,`font-family`],[`fontSize`,`font-size`],[`fontSizeAdjust`,`font-size-adjust`],[`fontStretch`,`font-stretch`],[`fontStyle`,`font-style`],[`fontVariant`,`font-variant`],[`fontWeight`,`font-weight`],[`glyphName`,`glyph-name`],[`glyphOrientationHorizontal`,`glyph-orientation-horizontal`],[`glyphOrientationVertical`,`glyph-orientation-vertical`],[`horizAdvX`,`horiz-adv-x`],[`horizOriginX`,`horiz-origin-x`],[`imageRendering`,`image-rendering`],[`letterSpacing`,`letter-spacing`],[`lightingColor`,`lighting-color`],[`markerEnd`,`marker-end`],[`markerMid`,`marker-mid`],[`markerStart`,`marker-start`],[`overlinePosition`,`overline-position`],[`overlineThickness`,`overline-thickness`],[`paintOrder`,`paint-order`],[`panose-1`,`panose-1`],[`pointerEvents`,`pointer-events`],[`renderingIntent`,`rendering-intent`],[`shapeRendering`,`shape-rendering`],[`stopColor`,`stop-color`],[`stopOpacity`,`stop-opacity`],[`strikethroughPosition`,`strikethrough-position`],[`strikethroughThickness`,`strikethrough-thickness`],[`strokeDasharray`,`stroke-dasharray`],[`strokeDashoffset`,`stroke-dashoffset`],[`strokeLinecap`,`stroke-linecap`],[`strokeLinejoin`,`stroke-linejoin`],[`strokeMiterlimit`,`stroke-miterlimit`],[`strokeOpacity`,`stroke-opacity`],[`strokeWidth`,`stroke-width`],[`textAnchor`,`text-anchor`],[`textDecoration`,`text-decoration`],[`textRendering`,`text-rendering`],[`transformOrigin`,`transform-origin`],[`underlinePosition`,`underline-position`],[`underlineThickness`,`underline-thickness`],[`unicodeBidi`,`unicode-bidi`],[`unicodeRange`,`unicode-range`],[`unitsPerEm`,`units-per-em`],[`vAlphabetic`,`v-alphabetic`],[`vHanging`,`v-hanging`],[`vIdeographic`,`v-ideographic`],[`vMathematical`,`v-mathematical`],[`vectorEffect`,`vector-effect`],[`vertAdvY`,`vert-adv-y`],[`vertOriginX`,`vert-origin-x`],[`vertOriginY`,`vert-origin-y`],[`wordSpacing`,`word-spacing`],[`writingMode`,`writing-mode`],[`xmlnsXlink`,`xmlns:xlink`],[`xHeight`,`x-height`]]),on=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function sn(e){return on.test(``+e)?`javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')`:e}function cn(){}var ln=null;function un(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var dn=null,fn=null;function pn(e){var t=Et(e);if(t&&(e=t.stateNode)){var n=e[_t]||null;a:switch(e=t.stateNode,t.type){case`input`:if(Jt(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type===`radio`&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll(`input[name="`+k(``+t)+`"][type="radio"]`),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=r[_t]||null;if(!i)throw Error(s(90));Jt(r,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name)}}for(t=0;t<n.length;t++)r=n[t],r.form===e.form&&Gt(r)}break a;case`textarea`:Zt(e,n.value,n.defaultValue);break a;case`select`:t=n.value,t!=null&&Xt(e,!!n.multiple,t,!1)}}}var mn=!1;function hn(e,t,n){if(mn)return e(t,n);mn=!0;try{return e(t)}finally{if(mn=!1,(dn!==null||fn!==null)&&(bu(),dn&&(t=dn,e=fn,fn=dn=null,pn(t),e)))for(t=0;t<e.length;t++)pn(e[t])}}function gn(e,t){var n=e.stateNode;if(n===null)return null;var r=n[_t]||null;if(r===null)return null;n=r[t];a:switch(t){case`onClick`:case`onClickCapture`:case`onDoubleClick`:case`onDoubleClickCapture`:case`onMouseDown`:case`onMouseDownCapture`:case`onMouseMove`:case`onMouseMoveCapture`:case`onMouseUp`:case`onMouseUpCapture`:case`onMouseEnter`:(r=!r.disabled)||(e=e.type,r=!(e===`button`||e===`input`||e===`select`||e===`textarea`)),e=!r;break a;default:e=!1}if(e)return null;if(n&&typeof n!=`function`)throw Error(s(231,t,typeof n));return n}var _n=!(typeof window>`u`||window.document===void 0||window.document.createElement===void 0),vn=!1;if(_n)try{var yn={};Object.defineProperty(yn,`passive`,{get:function(){vn=!0}}),window.addEventListener(`test`,yn,yn),window.removeEventListener(`test`,yn,yn)}catch{vn=!1}var bn=null,xn=null,Sn=null;function Cn(){if(Sn)return Sn;var e,t=xn,n=t.length,r,i=`value`in bn?bn.value:bn.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return Sn=i.slice(e,1<r?1-r:void 0)}function wn(e){var t=e.keyCode;return`charCode`in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Tn(){return!0}function En(){return!1}function Dn(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented==null?!1===i.returnValue:i.defaultPrevented)?Tn:En,this.isPropagationStopped=En,this}return h(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!=`unknown`&&(e.returnValue=!1),this.isDefaultPrevented=Tn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!=`unknown`&&(e.cancelBubble=!0),this.isPropagationStopped=Tn)},persist:function(){},isPersistent:Tn}),t}var On={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},kn=Dn(On),An=h({},On,{view:0,detail:0}),jn=Dn(An),Mn,Nn,Pn,Fn=h({},An,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Kn,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return`movementX`in e?e.movementX:(e!==Pn&&(Pn&&e.type===`mousemove`?(Mn=e.screenX-Pn.screenX,Nn=e.screenY-Pn.screenY):Nn=Mn=0,Pn=e),Mn)},movementY:function(e){return`movementY`in e?e.movementY:Nn}}),In=Dn(Fn),Ln=Dn(h({},Fn,{dataTransfer:0})),Rn=Dn(h({},An,{relatedTarget:0})),zn=Dn(h({},On,{animationName:0,elapsedTime:0,pseudoElement:0})),Bn=Dn(h({},On,{clipboardData:function(e){return`clipboardData`in e?e.clipboardData:window.clipboardData}})),Vn=Dn(h({},On,{data:0})),Hn={Esc:`Escape`,Spacebar:` `,Left:`ArrowLeft`,Up:`ArrowUp`,Right:`ArrowRight`,Down:`ArrowDown`,Del:`Delete`,Win:`OS`,Menu:`ContextMenu`,Apps:`ContextMenu`,Scroll:`ScrollLock`,MozPrintableKey:`Unidentified`},Un={8:`Backspace`,9:`Tab`,12:`Clear`,13:`Enter`,16:`Shift`,17:`Control`,18:`Alt`,19:`Pause`,20:`CapsLock`,27:`Escape`,32:` `,33:`PageUp`,34:`PageDown`,35:`End`,36:`Home`,37:`ArrowLeft`,38:`ArrowUp`,39:`ArrowRight`,40:`ArrowDown`,45:`Insert`,46:`Delete`,112:`F1`,113:`F2`,114:`F3`,115:`F4`,116:`F5`,117:`F6`,118:`F7`,119:`F8`,120:`F9`,121:`F10`,122:`F11`,123:`F12`,144:`NumLock`,145:`ScrollLock`,224:`Meta`},Wn={Alt:`altKey`,Control:`ctrlKey`,Meta:`metaKey`,Shift:`shiftKey`};function Gn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Wn[e])?!!t[e]:!1}function Kn(){return Gn}var qn=Dn(h({},An,{key:function(e){if(e.key){var t=Hn[e.key]||e.key;if(t!==`Unidentified`)return t}return e.type===`keypress`?(e=wn(e),e===13?`Enter`:String.fromCharCode(e)):e.type===`keydown`||e.type===`keyup`?Un[e.keyCode]||`Unidentified`:``},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Kn,charCode:function(e){return e.type===`keypress`?wn(e):0},keyCode:function(e){return e.type===`keydown`||e.type===`keyup`?e.keyCode:0},which:function(e){return e.type===`keypress`?wn(e):e.type===`keydown`||e.type===`keyup`?e.keyCode:0}})),Jn=Dn(h({},Fn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),Yn=Dn(h({},An,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Kn})),Xn=Dn(h({},On,{propertyName:0,elapsedTime:0,pseudoElement:0})),Zn=Dn(h({},Fn,{deltaX:function(e){return`deltaX`in e?e.deltaX:`wheelDeltaX`in e?-e.wheelDeltaX:0},deltaY:function(e){return`deltaY`in e?e.deltaY:`wheelDeltaY`in e?-e.wheelDeltaY:`wheelDelta`in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),Qn=Dn(h({},On,{newState:0,oldState:0})),$n=[9,13,27,32],er=_n&&`CompositionEvent`in window,tr=null;_n&&`documentMode`in document&&(tr=document.documentMode);var nr=_n&&`TextEvent`in window&&!tr,rr=_n&&(!er||tr&&8<tr&&11>=tr),ir=` `,ar=!1;function or(e,t){switch(e){case`keyup`:return $n.indexOf(t.keyCode)!==-1;case`keydown`:return t.keyCode!==229;case`keypress`:case`mousedown`:case`focusout`:return!0;default:return!1}}function sr(e){return e=e.detail,typeof e==`object`&&`data`in e?e.data:null}var cr=!1;function lr(e,t){switch(e){case`compositionend`:return sr(t);case`keypress`:return t.which===32?(ar=!0,ir):null;case`textInput`:return e=t.data,e===ir&&ar?null:e;default:return null}}function ur(e,t){if(cr)return e===`compositionend`||!er&&or(e,t)?(e=Cn(),Sn=xn=bn=null,cr=!1,e):null;switch(e){case`paste`:return null;case`keypress`:if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case`compositionend`:return rr&&t.locale!==`ko`?null:t.data;default:return null}}var dr={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function fr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t===`input`?!!dr[e.type]:t===`textarea`}function pr(e,t,n,r){dn?fn?fn.push(r):fn=[r]:dn=r,t=Ed(t,`onChange`),0<t.length&&(n=new kn(`onChange`,`change`,null,n,r),e.push({event:n,listeners:t}))}var mr=null,hr=null;function gr(e){yd(e,0)}function _r(e){if(Gt(Dt(e)))return e}function vr(e,t){if(e===`change`)return t}var yr=!1;if(_n){var br;if(_n){var xr=`oninput`in document;if(!xr){var Sr=document.createElement(`div`);Sr.setAttribute(`oninput`,`return;`),xr=typeof Sr.oninput==`function`}br=xr}else br=!1;yr=br&&(!document.documentMode||9<document.documentMode)}function Cr(){mr&&(mr.detachEvent(`onpropertychange`,wr),hr=mr=null)}function wr(e){if(e.propertyName===`value`&&_r(hr)){var t=[];pr(t,hr,e,un(e)),hn(gr,t)}}function Tr(e,t,n){e===`focusin`?(Cr(),mr=t,hr=n,mr.attachEvent(`onpropertychange`,wr)):e===`focusout`&&Cr()}function Er(e){if(e===`selectionchange`||e===`keyup`||e===`keydown`)return _r(hr)}function Dr(e,t){if(e===`click`)return _r(t)}function Or(e,t){if(e===`input`||e===`change`)return _r(t)}function kr(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var Ar=typeof Object.is==`function`?Object.is:kr;function jr(e,t){if(Ar(e,t))return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Ae.call(t,i)||!Ar(e[i],t[i]))return!1}return!0}function Mr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Nr(e,t){var n=Mr(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}a:{for(;n;){if(n.nextSibling){n=n.nextSibling;break a}n=n.parentNode}n=void 0}n=Mr(n)}}function Pr(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Pr(e,t.parentNode):`contains`in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Fr(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Kt(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href==`string`}catch{n=!1}if(n)e=t.contentWindow;else break;t=Kt(e.document)}return t}function Ir(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t===`input`&&(e.type===`text`||e.type===`search`||e.type===`tel`||e.type===`url`||e.type===`password`)||t===`textarea`||e.contentEditable===`true`)}var Lr=_n&&`documentMode`in document&&11>=document.documentMode,Rr=null,zr=null,Br=null,Vr=!1;function Hr(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Vr||Rr==null||Rr!==Kt(r)||(r=Rr,`selectionStart`in r&&Ir(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Br&&jr(Br,r)||(Br=r,r=Ed(zr,`onSelect`),0<r.length&&(t=new kn(`onSelect`,`select`,null,t,n),e.push({event:t,listeners:r}),t.target=Rr)))}function Ur(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n[`Webkit`+e]=`webkit`+t,n[`Moz`+e]=`moz`+t,n}var Wr={animationend:Ur(`Animation`,`AnimationEnd`),animationiteration:Ur(`Animation`,`AnimationIteration`),animationstart:Ur(`Animation`,`AnimationStart`),transitionrun:Ur(`Transition`,`TransitionRun`),transitionstart:Ur(`Transition`,`TransitionStart`),transitioncancel:Ur(`Transition`,`TransitionCancel`),transitionend:Ur(`Transition`,`TransitionEnd`)},Gr={},Kr={};_n&&(Kr=document.createElement(`div`).style,`AnimationEvent`in window||(delete Wr.animationend.animation,delete Wr.animationiteration.animation,delete Wr.animationstart.animation),`TransitionEvent`in window||delete Wr.transitionend.transition);function qr(e){if(Gr[e])return Gr[e];if(!Wr[e])return e;var t=Wr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Kr)return Gr[e]=t[n];return e}var Jr=qr(`animationend`),Yr=qr(`animationiteration`),Xr=qr(`animationstart`),Zr=qr(`transitionrun`),Qr=qr(`transitionstart`),$r=qr(`transitioncancel`),ei=qr(`transitionend`),ti=new Map,ni=`abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);ni.push(`scrollEnd`);function ri(e,t){ti.set(e,t),Mt(t,[e])}var ii=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},ai=[],oi=0,si=0;function ci(){for(var e=oi,t=si=oi=0;t<e;){var n=ai[t];ai[t++]=null;var r=ai[t];ai[t++]=null;var i=ai[t];ai[t++]=null;var a=ai[t];if(ai[t++]=null,r!==null&&i!==null){var o=r.pending;o===null?i.next=i:(i.next=o.next,o.next=i),r.pending=i}a!==0&&fi(n,i,a)}}function li(e,t,n,r){ai[oi++]=e,ai[oi++]=t,ai[oi++]=n,ai[oi++]=r,si|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function ui(e,t,n,r){return li(e,t,n,r),pi(e)}function di(e,t){return li(e,null,null,t),pi(e)}function fi(e,t,n){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n);for(var i=!1,a=e.return;a!==null;)a.childLanes|=n,r=a.alternate,r!==null&&(r.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(i=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,i&&t!==null&&(i=31-qe(n),e=a.hiddenUpdates,r=e[i],r===null?e[i]=[t]:r.push(t),t.lane=n|536870912),a):null}function pi(e){if(50<du)throw du=0,fu=null,Error(s(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var mi={};function hi(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function gi(e,t,n,r){return new hi(e,t,n,r)}function _i(e){return e=e.prototype,!(!e||!e.isReactComponent)}function vi(e,t){var n=e.alternate;return n===null?(n=gi(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function yi(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function bi(e,t,n,r,i,a){var o=0;if(r=e,typeof e==`function`)_i(e)&&(o=1);else if(typeof e==`string`)o=Uf(e,n,ge.current)?26:e===`html`||e===`head`||e===`body`?27:5;else a:switch(e){case ae:return e=gi(31,n,t,i),e.elementType=ae,e.lanes=a,e;case y:return xi(n.children,i,a,t);case b:o=8,i|=24;break;case x:return e=gi(12,n,t,i|2),e.elementType=x,e.lanes=a,e;case te:return e=gi(13,n,t,i),e.elementType=te,e.lanes=a,e;case ne:return e=gi(19,n,t,i),e.elementType=ne,e.lanes=a,e;default:if(typeof e==`object`&&e)switch(e.$$typeof){case S:o=10;break a;case ee:o=9;break a;case C:o=11;break a;case re:o=14;break a;case ie:o=16,r=null;break a}o=29,n=Error(s(130,e===null?`null`:typeof e,``)),r=null}return t=gi(o,n,t,i),t.elementType=e,t.type=r,t.lanes=a,t}function xi(e,t,n,r){return e=gi(7,e,r,t),e.lanes=n,e}function Si(e,t,n){return e=gi(6,e,null,t),e.lanes=n,e}function Ci(e){var t=gi(18,null,null,0);return t.stateNode=e,t}function wi(e,t,n){return t=gi(4,e.children===null?[]:e.children,e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Ti=new WeakMap;function Ei(e,t){if(typeof e==`object`&&e){var n=Ti.get(e);return n===void 0?(t={value:e,source:t,stack:ke(t)},Ti.set(e,t),t):n}return{value:e,source:t,stack:ke(t)}}var Di=[],Oi=0,ki=null,Ai=0,ji=[],Mi=0,Ni=null,Pi=1,Fi=``;function Ii(e,t){Di[Oi++]=Ai,Di[Oi++]=ki,ki=e,Ai=t}function Li(e,t,n){ji[Mi++]=Pi,ji[Mi++]=Fi,ji[Mi++]=Ni,Ni=e;var r=Pi;e=Fi;var i=32-qe(r)-1;r&=~(1<<i),n+=1;var a=32-qe(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Pi=1<<32-qe(t)+i|n<<i|r,Fi=a+e}else Pi=1<<a|n<<i|r,Fi=e}function Ri(e){e.return!==null&&(Ii(e,1),Li(e,1,0))}function zi(e){for(;e===ki;)ki=Di[--Oi],Di[Oi]=null,Ai=Di[--Oi],Di[Oi]=null;for(;e===Ni;)Ni=ji[--Mi],ji[Mi]=null,Fi=ji[--Mi],ji[Mi]=null,Pi=ji[--Mi],ji[Mi]=null}function Bi(e,t){ji[Mi++]=Pi,ji[Mi++]=Fi,ji[Mi++]=Ni,Pi=t.id,Fi=t.overflow,Ni=e}var Vi=null,j=null,M=!1,Hi=null,Ui=!1,Wi=Error(s(519));function Gi(e){throw Zi(Ei(Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?`text`:`HTML`,``)),e)),Wi}function Ki(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[gt]=e,t[_t]=r,n){case`dialog`:Q(`cancel`,t),Q(`close`,t);break;case`iframe`:case`object`:case`embed`:Q(`load`,t);break;case`video`:case`audio`:for(n=0;n<_d.length;n++)Q(_d[n],t);break;case`source`:Q(`error`,t);break;case`img`:case`image`:case`link`:Q(`error`,t),Q(`load`,t);break;case`details`:Q(`toggle`,t);break;case`input`:Q(`invalid`,t),Yt(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case`select`:Q(`invalid`,t);break;case`textarea`:Q(`invalid`,t),Qt(t,r.value,r.defaultValue,r.children)}n=r.children,typeof n!=`string`&&typeof n!=`number`&&typeof n!=`bigint`||t.textContent===``+n||!0===r.suppressHydrationWarning||Md(t.textContent,n)?(r.popover!=null&&(Q(`beforetoggle`,t),Q(`toggle`,t)),r.onScroll!=null&&Q(`scroll`,t),r.onScrollEnd!=null&&Q(`scrollend`,t),r.onClick!=null&&(t.onclick=cn),t=!0):t=!1,t||Gi(e,!0)}function qi(e){for(Vi=e.return;Vi;)switch(Vi.tag){case 5:case 31:case 13:Ui=!1;return;case 27:case 3:Ui=!0;return;default:Vi=Vi.return}}function Ji(e){if(e!==Vi)return!1;if(!M)return qi(e),M=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!==`form`&&n!==`button`)||Ud(e.type,e.memoizedProps)),n=!n),n&&j&&Gi(e),qi(e),t===13){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(s(317));j=uf(e)}else if(t===31){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(s(317));j=uf(e)}else t===27?(t=j,Zd(e.type)?(e=lf,lf=null,j=e):j=t):j=Vi?cf(e.stateNode.nextSibling):null;return!0}function Yi(){j=Vi=null,M=!1}function Xi(){var e=Hi;return e!==null&&(Ql===null?Ql=e:Ql.push.apply(Ql,e),Hi=null),e}function Zi(e){Hi===null?Hi=[e]:Hi.push(e)}var Qi=he(null),$i=null,ea=null;function ta(e,t,n){D(Qi,t._currentValue),t._currentValue=n}function na(e){e._currentValue=Qi.current,E(Qi)}function ra(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)===t?r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t):(e.childLanes|=t,r!==null&&(r.childLanes|=t)),e===n)break;e=e.return}}function ia(e,t,n,r){var i=e.child;for(i!==null&&(i.return=e);i!==null;){var a=i.dependencies;if(a!==null){var o=i.child;a=a.firstContext;a:for(;a!==null;){var c=a;a=i;for(var l=0;l<t.length;l++)if(c.context===t[l]){a.lanes|=n,c=a.alternate,c!==null&&(c.lanes|=n),ra(a.return,n,e),r||(o=null);break a}a=c.next}}else if(i.tag===18){if(o=i.return,o===null)throw Error(s(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),ra(o,n,e),o=null}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===e){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}}function aa(e,t,n,r){e=null;for(var i=t,a=!1;i!==null;){if(!a){if(i.flags&524288)a=!0;else if(i.flags&262144)break}if(i.tag===10){var o=i.alternate;if(o===null)throw Error(s(387));if(o=o.memoizedProps,o!==null){var c=i.type;Ar(i.pendingProps.value,o.value)||(e===null?e=[c]:e.push(c))}}else if(i===ye.current){if(o=i.alternate,o===null)throw Error(s(387));o.memoizedState.memoizedState!==i.memoizedState.memoizedState&&(e===null?e=[Qf]:e.push(Qf))}i=i.return}e!==null&&ia(t,e,n,r),t.flags|=262144}function oa(e){for(e=e.firstContext;e!==null;){if(!Ar(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function sa(e){$i=e,ea=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function ca(e){return ua($i,e)}function la(e,t){return $i===null&&sa(e),ua(e,t)}function ua(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},ea===null){if(e===null)throw Error(s(308));ea=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else ea=ea.next=t;return n}var da=typeof AbortController<`u`?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(e){return e()})}},fa=t.unstable_scheduleCallback,pa=t.unstable_NormalPriority,N={$$typeof:S,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ma(){return{controller:new da,data:new Map,refCount:0}}function ha(e){e.refCount--,e.refCount===0&&fa(pa,function(){e.controller.abort()})}var ga=null,_a=0,va=0,ya=null;function ba(e,t){if(ga===null){var n=ga=[];_a=0,va=dd(),ya={status:`pending`,value:void 0,then:function(e){n.push(e)}}}return _a++,t.then(xa,xa),t}function xa(){if(--_a===0&&ga!==null){ya!==null&&(ya.status=`fulfilled`);var e=ga;ga=null,va=0,ya=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Sa(e,t){var n=[],r={status:`pending`,value:null,reason:null,then:function(e){n.push(e)}};return e.then(function(){r.status=`fulfilled`,r.value=t;for(var e=0;e<n.length;e++)(0,n[e])(t)},function(e){for(r.status=`rejected`,r.reason=e,e=0;e<n.length;e++)(0,n[e])(void 0)}),r}var Ca=w.S;w.S=function(e,t){tu=Fe(),typeof t==`object`&&t&&typeof t.then==`function`&&ba(e,t),Ca!==null&&Ca(e,t)};var wa=he(null);function Ta(){var e=wa.current;return e===null?G.pooledCache:e}function Ea(e,t){t===null?D(wa,wa.current):D(wa,t.pool)}function Da(){var e=Ta();return e===null?null:{parent:N._currentValue,pool:e}}var Oa=Error(s(460)),ka=Error(s(474)),Aa=Error(s(542)),ja={then:function(){}};function Ma(e){return e=e.status,e===`fulfilled`||e===`rejected`}function Na(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(cn,cn),t=n),t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,La(e),e;default:if(typeof t.status==`string`)t.then(cn,cn);else{if(e=G,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=t,e.status=`pending`,e.then(function(e){if(t.status===`pending`){var n=t;n.status=`fulfilled`,n.value=e}},function(e){if(t.status===`pending`){var n=t;n.status=`rejected`,n.reason=e}})}switch(t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,La(e),e}throw Fa=t,Oa}}function Pa(e){try{var t=e._init;return t(e._payload)}catch(e){throw typeof e==`object`&&e&&typeof e.then==`function`?(Fa=e,Oa):e}}var Fa=null;function Ia(){if(Fa===null)throw Error(s(459));var e=Fa;return Fa=null,e}function La(e){if(e===Oa||e===Aa)throw Error(s(483))}var Ra=null,za=0;function Ba(e){var t=za;return za+=1,Ra===null&&(Ra=[]),Na(Ra,e,t)}function Va(e,t){t=t.props.ref,e.ref=t===void 0?null:t}function Ha(e,t){throw t.$$typeof===g?Error(s(525)):(e=Object.prototype.toString.call(t),Error(s(31,e===`[object Object]`?`object with keys {`+Object.keys(t).join(`, `)+`}`:e)))}function Ua(e){function t(t,n){if(e){var r=t.deletions;r===null?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;r!==null;)t(n,r),r=r.sibling;return null}function r(e){for(var t=new Map;e!==null;)e.key===null?t.set(e.index,e):t.set(e.key,e),e=e.sibling;return t}function i(e,t){return e=vi(e,t),e.index=0,e.sibling=null,e}function a(t,n,r){return t.index=r,e?(r=t.alternate,r===null?(t.flags|=67108866,n):(r=r.index,r<n?(t.flags|=67108866,n):r)):(t.flags|=1048576,n)}function o(t){return e&&t.alternate===null&&(t.flags|=67108866),t}function c(e,t,n,r){return t===null||t.tag!==6?(t=Si(n,e.mode,r),t.return=e,t):(t=i(t,n),t.return=e,t)}function l(e,t,n,r){var a=n.type;return a===y?d(e,t,n.props.children,r,n.key):t!==null&&(t.elementType===a||typeof a==`object`&&a&&a.$$typeof===ie&&Pa(a)===t.type)?(t=i(t,n.props),Va(t,n),t.return=e,t):(t=bi(n.type,n.key,n.props,null,e.mode,r),Va(t,n),t.return=e,t)}function u(e,t,n,r){return t===null||t.tag!==4||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=wi(n,e.mode,r),t.return=e,t):(t=i(t,n.children||[]),t.return=e,t)}function d(e,t,n,r,a){return t===null||t.tag!==7?(t=xi(n,e.mode,r,a),t.return=e,t):(t=i(t,n),t.return=e,t)}function f(e,t,n){if(typeof t==`string`&&t!==``||typeof t==`number`||typeof t==`bigint`)return t=Si(``+t,e.mode,n),t.return=e,t;if(typeof t==`object`&&t){switch(t.$$typeof){case _:return n=bi(t.type,t.key,t.props,null,e.mode,n),Va(n,t),n.return=e,n;case v:return t=wi(t,e.mode,n),t.return=e,t;case ie:return t=Pa(t),f(e,t,n)}if(de(t)||ce(t))return t=xi(t,e.mode,n,null),t.return=e,t;if(typeof t.then==`function`)return f(e,Ba(t),n);if(t.$$typeof===S)return f(e,la(e,t),n);Ha(e,t)}return null}function p(e,t,n,r){var i=t===null?null:t.key;if(typeof n==`string`&&n!==``||typeof n==`number`||typeof n==`bigint`)return i===null?c(e,t,``+n,r):null;if(typeof n==`object`&&n){switch(n.$$typeof){case _:return n.key===i?l(e,t,n,r):null;case v:return n.key===i?u(e,t,n,r):null;case ie:return n=Pa(n),p(e,t,n,r)}if(de(n)||ce(n))return i===null?d(e,t,n,r,null):null;if(typeof n.then==`function`)return p(e,t,Ba(n),r);if(n.$$typeof===S)return p(e,t,la(e,n),r);Ha(e,n)}return null}function m(e,t,n,r,i){if(typeof r==`string`&&r!==``||typeof r==`number`||typeof r==`bigint`)return e=e.get(n)||null,c(t,e,``+r,i);if(typeof r==`object`&&r){switch(r.$$typeof){case _:return e=e.get(r.key===null?n:r.key)||null,l(t,e,r,i);case v:return e=e.get(r.key===null?n:r.key)||null,u(t,e,r,i);case ie:return r=Pa(r),m(e,t,n,r,i)}if(de(r)||ce(r))return e=e.get(n)||null,d(t,e,r,i,null);if(typeof r.then==`function`)return m(e,t,n,Ba(r),i);if(r.$$typeof===S)return m(e,t,n,la(t,r),i);Ha(t,r)}return null}function h(i,o,s,c){for(var l=null,u=null,d=o,h=o=0,g=null;d!==null&&h<s.length;h++){d.index>h?(g=d,d=null):g=d.sibling;var _=p(i,d,s[h],c);if(_===null){d===null&&(d=g);break}e&&d&&_.alternate===null&&t(i,d),o=a(_,o,h),u===null?l=_:u.sibling=_,u=_,d=g}if(h===s.length)return n(i,d),M&&Ii(i,h),l;if(d===null){for(;h<s.length;h++)d=f(i,s[h],c),d!==null&&(o=a(d,o,h),u===null?l=d:u.sibling=d,u=d);return M&&Ii(i,h),l}for(d=r(d);h<s.length;h++)g=m(d,i,h,s[h],c),g!==null&&(e&&g.alternate!==null&&d.delete(g.key===null?h:g.key),o=a(g,o,h),u===null?l=g:u.sibling=g,u=g);return e&&d.forEach(function(e){return t(i,e)}),M&&Ii(i,h),l}function g(i,o,c,l){if(c==null)throw Error(s(151));for(var u=null,d=null,h=o,g=o=0,_=null,v=c.next();h!==null&&!v.done;g++,v=c.next()){h.index>g?(_=h,h=null):_=h.sibling;var y=p(i,h,v.value,l);if(y===null){h===null&&(h=_);break}e&&h&&y.alternate===null&&t(i,h),o=a(y,o,g),d===null?u=y:d.sibling=y,d=y,h=_}if(v.done)return n(i,h),M&&Ii(i,g),u;if(h===null){for(;!v.done;g++,v=c.next())v=f(i,v.value,l),v!==null&&(o=a(v,o,g),d===null?u=v:d.sibling=v,d=v);return M&&Ii(i,g),u}for(h=r(h);!v.done;g++,v=c.next())v=m(h,i,g,v.value,l),v!==null&&(e&&v.alternate!==null&&h.delete(v.key===null?g:v.key),o=a(v,o,g),d===null?u=v:d.sibling=v,d=v);return e&&h.forEach(function(e){return t(i,e)}),M&&Ii(i,g),u}function b(e,r,a,c){if(typeof a==`object`&&a&&a.type===y&&a.key===null&&(a=a.props.children),typeof a==`object`&&a){switch(a.$$typeof){case _:a:{for(var l=a.key;r!==null;){if(r.key===l){if(l=a.type,l===y){if(r.tag===7){n(e,r.sibling),c=i(r,a.props.children),c.return=e,e=c;break a}}else if(r.elementType===l||typeof l==`object`&&l&&l.$$typeof===ie&&Pa(l)===r.type){n(e,r.sibling),c=i(r,a.props),Va(c,a),c.return=e,e=c;break a}n(e,r);break}else t(e,r);r=r.sibling}a.type===y?(c=xi(a.props.children,e.mode,c,a.key),c.return=e,e=c):(c=bi(a.type,a.key,a.props,null,e.mode,c),Va(c,a),c.return=e,e=c)}return o(e);case v:a:{for(l=a.key;r!==null;){if(r.key===l)if(r.tag===4&&r.stateNode.containerInfo===a.containerInfo&&r.stateNode.implementation===a.implementation){n(e,r.sibling),c=i(r,a.children||[]),c.return=e,e=c;break a}else{n(e,r);break}else t(e,r);r=r.sibling}c=wi(a,e.mode,c),c.return=e,e=c}return o(e);case ie:return a=Pa(a),b(e,r,a,c)}if(de(a))return h(e,r,a,c);if(ce(a)){if(l=ce(a),typeof l!=`function`)throw Error(s(150));return a=l.call(a),g(e,r,a,c)}if(typeof a.then==`function`)return b(e,r,Ba(a),c);if(a.$$typeof===S)return b(e,r,la(e,a),c);Ha(e,a)}return typeof a==`string`&&a!==``||typeof a==`number`||typeof a==`bigint`?(a=``+a,r!==null&&r.tag===6?(n(e,r.sibling),c=i(r,a),c.return=e,e=c):(n(e,r),c=Si(a,e.mode,c),c.return=e,e=c),o(e)):n(e,r)}return function(e,t,n,r){try{za=0;var i=b(e,t,n,r);return Ra=null,i}catch(t){if(t===Oa||t===Aa)throw t;var a=gi(29,t,null,e.mode);return a.lanes=r,a.return=e,a}}}var Wa=Ua(!0),Ga=Ua(!1),Ka=!1;function qa(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ja(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ya(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Xa(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,W&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,t=pi(e),fi(e,null,n),t}return li(e,r,t,n),pi(e)}function Za(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,n&4194048)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,lt(e,n)}}function Qa(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,callbacks:r.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var $a=!1;function eo(){if($a){var e=ya;if(e!==null)throw e}}function to(e,t,n,r){$a=!1;var i=e.updateQueue;Ka=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,l=c.next;c.next=null,o===null?a=l:o.next=l,o=c;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==o&&(s===null?u.firstBaseUpdate=l:s.next=l,u.lastBaseUpdate=c))}if(a!==null){var d=i.baseState;o=0,u=l=c=null,s=a;do{var f=s.lane&-536870913,p=f!==s.lane;if(p?(q&f)===f:(r&f)===f){f!==0&&f===va&&($a=!0),u!==null&&(u=u.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});a:{var m=e,g=s;f=t;var _=n;switch(g.tag){case 1:if(m=g.payload,typeof m==`function`){d=m.call(_,d,f);break a}d=m;break a;case 3:m.flags=m.flags&-65537|128;case 0:if(m=g.payload,f=typeof m==`function`?m.call(_,d,f):m,f==null)break a;d=h({},d,f);break a;case 2:Ka=!0}}f=s.callback,f!==null&&(e.flags|=64,p&&(e.flags|=8192),p=i.callbacks,p===null?i.callbacks=[f]:p.push(f))}else p={lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(l=u=p,c=d):u=u.next=p,o|=f;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;p=s,s=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);u===null&&(c=d),i.baseState=c,i.firstBaseUpdate=l,i.lastBaseUpdate=u,a===null&&(i.shared.lanes=0),Kl|=o,e.lanes=o,e.memoizedState=d}}function no(e,t){if(typeof e!=`function`)throw Error(s(191,e));e.call(t)}function ro(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)no(n[e],t)}var io=he(null),ao=he(0);function oo(e,t){e=Gl,D(ao,e),D(io,t),Gl=e|t.baseLanes}function so(){D(ao,Gl),D(io,io.current)}function co(){Gl=ao.current,E(io),E(ao)}var lo=he(null),uo=null;function fo(e){var t=e.alternate;D(P,P.current&1),D(lo,e),uo===null&&(t===null||io.current!==null||t.memoizedState!==null)&&(uo=e)}function po(e){D(P,P.current),D(lo,e),uo===null&&(uo=e)}function mo(e){e.tag===22?(D(P,P.current),D(lo,e),uo===null&&(uo=e)):ho(e)}function ho(){D(P,P.current),D(lo,lo.current)}function go(e){E(lo),uo===e&&(uo=null),E(P)}var P=he(0);function _o(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||af(n)||of(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder===`forwards`||t.memoizedProps.revealOrder===`backwards`||t.memoizedProps.revealOrder===`unstable_legacy-backwards`||t.memoizedProps.revealOrder===`together`)){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var vo=0,F=null,I=null,L=null,yo=!1,bo=!1,xo=!1,So=0,Co=0,wo=null,To=0;function R(){throw Error(s(321))}function Eo(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ar(e[n],t[n]))return!1;return!0}function Do(e,t,n,r,i,a){return vo=a,F=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,w.H=e===null||e.memoizedState===null?Us:Ws,xo=!1,a=n(r,i),xo=!1,bo&&(a=ko(t,n,r,i)),Oo(e),a}function Oo(e){w.H=Hs;var t=I!==null&&I.next!==null;if(vo=0,L=I=F=null,yo=!1,Co=0,wo=null,t)throw Error(s(300));e===null||B||(e=e.dependencies,e!==null&&oa(e)&&(B=!0))}function ko(e,t,n,r){F=e;var i=0;do{if(bo&&(wo=null),Co=0,bo=!1,25<=i)throw Error(s(301));if(i+=1,L=I=null,e.updateQueue!=null){var a=e.updateQueue;a.lastEffect=null,a.events=null,a.stores=null,a.memoCache!=null&&(a.memoCache.index=0)}w.H=Gs,a=t(n,r)}while(bo);return a}function Ao(){var e=w.H,t=e.useState()[0];return t=typeof t.then==`function`?Io(t):t,e=e.useState()[0],(I===null?null:I.memoizedState)!==e&&(F.flags|=1024),t}function jo(){var e=So!==0;return So=0,e}function Mo(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function No(e){if(yo){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}yo=!1}vo=0,L=I=F=null,bo=!1,Co=So=0,wo=null}function Po(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return L===null?F.memoizedState=L=e:L=L.next=e,L}function z(){if(I===null){var e=F.alternate;e=e===null?null:e.memoizedState}else e=I.next;var t=L===null?F.memoizedState:L.next;if(t!==null)L=t,I=e;else{if(e===null)throw F.alternate===null?Error(s(467)):Error(s(310));I=e,e={memoizedState:I.memoizedState,baseState:I.baseState,baseQueue:I.baseQueue,queue:I.queue,next:null},L===null?F.memoizedState=L=e:L=L.next=e}return L}function Fo(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Io(e){var t=Co;return Co+=1,wo===null&&(wo=[]),e=Na(wo,e,t),t=F,(L===null?t.memoizedState:L.next)===null&&(t=t.alternate,w.H=t===null||t.memoizedState===null?Us:Ws),e}function Lo(e){if(typeof e==`object`&&e){if(typeof e.then==`function`)return Io(e);if(e.$$typeof===S)return ca(e)}throw Error(s(438,String(e)))}function Ro(e){var t=null,n=F.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var r=F.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(t={data:r.data.map(function(e){return e.slice()}),index:0})))}if(t??={data:[],index:0},n===null&&(n=Fo(),F.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=oe;return t.index++,n}function zo(e,t){return typeof t==`function`?t(e):t}function Bo(e){return Vo(z(),I,e)}function Vo(e,t,n){var r=e.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=n;var i=e.baseQueue,a=r.pending;if(a!==null){if(i!==null){var o=i.next;i.next=a.next,a.next=o}t.baseQueue=i=a,r.pending=null}if(a=e.baseState,i===null)e.memoizedState=a;else{t=i.next;var c=o=null,l=null,u=t,d=!1;do{var f=u.lane&-536870913;if(f===u.lane?(vo&f)===f:(q&f)===f){var p=u.revertLane;if(p===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),f===va&&(d=!0);else if((vo&p)===p){u=u.next,p===va&&(d=!0);continue}else f={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=f,o=a):l=l.next=f,F.lanes|=p,Kl|=p;f=u.action,xo&&n(a,f),a=u.hasEagerState?u.eagerState:n(a,f)}else p={lane:f,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=p,o=a):l=l.next=p,F.lanes|=f,Kl|=f;u=u.next}while(u!==null&&u!==t);if(l===null?o=a:l.next=c,!Ar(a,e.memoizedState)&&(B=!0,d&&(n=ya,n!==null)))throw n;e.memoizedState=a,e.baseState=o,e.baseQueue=l,r.lastRenderedState=a}return i===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function Ho(e){var t=z(),n=t.queue;if(n===null)throw Error(s(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,a=t.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do a=e(a,o.action),o=o.next;while(o!==i);Ar(a,t.memoizedState)||(B=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,r]}function Uo(e,t,n){var r=F,i=z(),a=M;if(a){if(n===void 0)throw Error(s(407));n=n()}else n=t();var o=!Ar((I||i).memoizedState,n);if(o&&(i.memoizedState=n,B=!0),i=i.queue,ms(Ko.bind(null,r,i,e),[e]),i.getSnapshot!==t||o||L!==null&&L.memoizedState.tag&1){if(r.flags|=2048,ls(9,{destroy:void 0},Go.bind(null,r,i,n,t),null),G===null)throw Error(s(349));a||vo&127||Wo(r,t,n)}return n}function Wo(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=F.updateQueue,t===null?(t=Fo(),F.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Go(e,t,n,r){t.value=n,t.getSnapshot=r,qo(t)&&Jo(e)}function Ko(e,t,n){return n(function(){qo(t)&&Jo(e)})}function qo(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ar(e,n)}catch{return!0}}function Jo(e){var t=di(e,2);t!==null&&hu(t,e,2)}function Yo(e){var t=Po();if(typeof e==`function`){var n=e;if(e=n(),xo){Ke(!0);try{n()}finally{Ke(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:zo,lastRenderedState:e},t}function Xo(e,t,n,r){return e.baseState=n,Vo(e,I,typeof r==`function`?r:zo)}function Zo(e,t,n,r,i){if(zs(e))throw Error(s(485));if(e=t.action,e!==null){var a={payload:i,action:e,next:null,isTransition:!0,status:`pending`,value:null,reason:null,listeners:[],then:function(e){a.listeners.push(e)}};w.T===null?a.isTransition=!1:n(!0),r(a),n=t.pending,n===null?(a.next=t.pending=a,Qo(t,a)):(a.next=n.next,t.pending=n.next=a)}}function Qo(e,t){var n=t.action,r=t.payload,i=e.state;if(t.isTransition){var a=w.T,o={};w.T=o;try{var s=n(i,r),c=w.S;c!==null&&c(o,s),$o(e,t,s)}catch(n){ts(e,t,n)}finally{a!==null&&o.types!==null&&(a.types=o.types),w.T=a}}else try{a=n(i,r),$o(e,t,a)}catch(n){ts(e,t,n)}}function $o(e,t,n){typeof n==`object`&&n&&typeof n.then==`function`?n.then(function(n){es(e,t,n)},function(n){return ts(e,t,n)}):es(e,t,n)}function es(e,t,n){t.status=`fulfilled`,t.value=n,ns(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Qo(e,n)))}function ts(e,t,n){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do t.status=`rejected`,t.reason=n,ns(t),t=t.next;while(t!==r)}e.action=null}function ns(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function rs(e,t){return t}function is(e,t){if(M){var n=G.formState;if(n!==null){a:{var r=F;if(M){if(j){b:{for(var i=j,a=Ui;i.nodeType!==8;){if(!a){i=null;break b}if(i=cf(i.nextSibling),i===null){i=null;break b}}a=i.data,i=a===`F!`||a===`F`?i:null}if(i){j=cf(i.nextSibling),r=i.data===`F!`;break a}}Gi(r)}r=!1}r&&(t=n[0])}}return n=Po(),n.memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:rs,lastRenderedState:t},n.queue=r,n=Is.bind(null,F,r),r.dispatch=n,r=Yo(!1),a=Rs.bind(null,F,!1,r.queue),r=Po(),i={state:t,dispatch:null,action:e,pending:null},r.queue=i,n=Zo.bind(null,F,i,a,n),i.dispatch=n,r.memoizedState=e,[t,n,!1]}function as(e){return os(z(),I,e)}function os(e,t,n){if(t=Vo(e,t,rs)[0],e=Bo(zo)[0],typeof t==`object`&&t&&typeof t.then==`function`)try{var r=Io(t)}catch(e){throw e===Oa?Aa:e}else r=t;t=z();var i=t.queue,a=i.dispatch;return n!==t.memoizedState&&(F.flags|=2048,ls(9,{destroy:void 0},ss.bind(null,i,n),null)),[r,a,e]}function ss(e,t){e.action=t}function cs(e){var t=z(),n=I;if(n!==null)return os(t,n,e);z(),t=t.memoizedState,n=z();var r=n.queue.dispatch;return n.memoizedState=e,[t,r,!1]}function ls(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},t=F.updateQueue,t===null&&(t=Fo(),F.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function us(){return z().memoizedState}function ds(e,t,n,r){var i=Po();F.flags|=e,i.memoizedState=ls(1|t,{destroy:void 0},n,r===void 0?null:r)}function fs(e,t,n,r){var i=z();r=r===void 0?null:r;var a=i.memoizedState.inst;I!==null&&r!==null&&Eo(r,I.memoizedState.deps)?i.memoizedState=ls(t,a,n,r):(F.flags|=e,i.memoizedState=ls(1|t,a,n,r))}function ps(e,t){ds(8390656,8,e,t)}function ms(e,t){fs(2048,8,e,t)}function hs(e){F.flags|=4;var t=F.updateQueue;if(t===null)t=Fo(),F.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function gs(e){var t=z().memoizedState;return hs({ref:t,nextImpl:e}),function(){if(W&2)throw Error(s(440));return t.impl.apply(void 0,arguments)}}function _s(e,t){return fs(4,2,e,t)}function vs(e,t){return fs(4,4,e,t)}function ys(e,t){if(typeof t==`function`){e=e();var n=t(e);return function(){typeof n==`function`?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function bs(e,t,n){n=n==null?null:n.concat([e]),fs(4,4,ys.bind(null,t,e),n)}function xs(){}function Ss(e,t){var n=z();t=t===void 0?null:t;var r=n.memoizedState;return t!==null&&Eo(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Cs(e,t){var n=z();t=t===void 0?null:t;var r=n.memoizedState;if(t!==null&&Eo(t,r[1]))return r[0];if(r=e(),xo){Ke(!0);try{e()}finally{Ke(!1)}}return n.memoizedState=[r,t],r}function ws(e,t,n){return n===void 0||vo&1073741824&&!(q&261930)?e.memoizedState=t:(e.memoizedState=n,e=mu(),F.lanes|=e,Kl|=e,n)}function Ts(e,t,n,r){return Ar(n,t)?n:io.current===null?!(vo&42)||vo&1073741824&&!(q&261930)?(B=!0,e.memoizedState=n):(e=mu(),F.lanes|=e,Kl|=e,t):(e=ws(e,n,r),Ar(e,t)||(B=!0),e)}function Es(e,t,n,r,i){var a=T.p;T.p=a!==0&&8>a?a:8;var o=w.T,s={};w.T=s,Rs(e,!1,t,n);try{var c=i(),l=w.S;l!==null&&l(s,c),typeof c==`object`&&c&&typeof c.then==`function`?Ls(e,t,Sa(c,r),pu(e)):Ls(e,t,r,pu(e))}catch(n){Ls(e,t,{then:function(){},status:`rejected`,reason:n},pu())}finally{T.p=a,o!==null&&s.types!==null&&(o.types=s.types),w.T=o}}function Ds(){}function Os(e,t,n,r){if(e.tag!==5)throw Error(s(476));var i=ks(e).queue;Es(e,i,t,fe,n===null?Ds:function(){return As(e),n(r)})}function ks(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:fe,baseState:fe,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:zo,lastRenderedState:fe},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:zo,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function As(e){var t=ks(e);t.next===null&&(t=e.alternate.memoizedState),Ls(e,t.next.queue,{},pu())}function js(){return ca(Qf)}function Ms(){return z().memoizedState}function Ns(){return z().memoizedState}function Ps(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=pu();e=Ya(n);var r=Xa(t,e,n);r!==null&&(hu(r,t,n),Za(r,t,n)),t={cache:ma()},e.payload=t;return}t=t.return}}function Fs(e,t,n){var r=pu();n={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},zs(e)?Bs(t,n):(n=ui(e,t,n,r),n!==null&&(hu(n,e,r),Vs(n,t,r)))}function Is(e,t,n){Ls(e,t,n,pu())}function Ls(e,t,n,r){var i={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(zs(e))Bs(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,Ar(s,o))return li(e,t,i,0),G===null&&ci(),!1}catch{}if(n=ui(e,t,i,r),n!==null)return hu(n,e,r),Vs(n,t,r),!0}return!1}function Rs(e,t,n,r){if(r={lane:2,revertLane:dd(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},zs(e)){if(t)throw Error(s(479))}else t=ui(e,n,r,2),t!==null&&hu(t,e,2)}function zs(e){var t=e.alternate;return e===F||t!==null&&t===F}function Bs(e,t){bo=yo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Vs(e,t,n){if(n&4194048){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,lt(e,n)}}var Hs={readContext:ca,use:Lo,useCallback:R,useContext:R,useEffect:R,useImperativeHandle:R,useLayoutEffect:R,useInsertionEffect:R,useMemo:R,useReducer:R,useRef:R,useState:R,useDebugValue:R,useDeferredValue:R,useTransition:R,useSyncExternalStore:R,useId:R,useHostTransitionStatus:R,useFormState:R,useActionState:R,useOptimistic:R,useMemoCache:R,useCacheRefresh:R};Hs.useEffectEvent=R;var Us={readContext:ca,use:Lo,useCallback:function(e,t){return Po().memoizedState=[e,t===void 0?null:t],e},useContext:ca,useEffect:ps,useImperativeHandle:function(e,t,n){n=n==null?null:n.concat([e]),ds(4194308,4,ys.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ds(4194308,4,e,t)},useInsertionEffect:function(e,t){ds(4,2,e,t)},useMemo:function(e,t){var n=Po();t=t===void 0?null:t;var r=e();if(xo){Ke(!0);try{e()}finally{Ke(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=Po();if(n!==void 0){var i=n(t);if(xo){Ke(!0);try{n(t)}finally{Ke(!1)}}}else i=t;return r.memoizedState=r.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},r.queue=e,e=e.dispatch=Fs.bind(null,F,e),[r.memoizedState,e]},useRef:function(e){var t=Po();return e={current:e},t.memoizedState=e},useState:function(e){e=Yo(e);var t=e.queue,n=Is.bind(null,F,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:xs,useDeferredValue:function(e,t){return ws(Po(),e,t)},useTransition:function(){var e=Yo(!1);return e=Es.bind(null,F,e.queue,!0,!1),Po().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=F,i=Po();if(M){if(n===void 0)throw Error(s(407));n=n()}else{if(n=t(),G===null)throw Error(s(349));q&127||Wo(r,t,n)}i.memoizedState=n;var a={value:n,getSnapshot:t};return i.queue=a,ps(Ko.bind(null,r,a,e),[e]),r.flags|=2048,ls(9,{destroy:void 0},Go.bind(null,r,a,n,t),null),n},useId:function(){var e=Po(),t=G.identifierPrefix;if(M){var n=Fi,r=Pi;n=(r&~(1<<32-qe(r)-1)).toString(32)+n,t=`_`+t+`R_`+n,n=So++,0<n&&(t+=`H`+n.toString(32)),t+=`_`}else n=To++,t=`_`+t+`r_`+n.toString(32)+`_`;return e.memoizedState=t},useHostTransitionStatus:js,useFormState:is,useActionState:is,useOptimistic:function(e){var t=Po();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Rs.bind(null,F,!0,n),n.dispatch=t,[e,t]},useMemoCache:Ro,useCacheRefresh:function(){return Po().memoizedState=Ps.bind(null,F)},useEffectEvent:function(e){var t=Po(),n={impl:e};return t.memoizedState=n,function(){if(W&2)throw Error(s(440));return n.impl.apply(void 0,arguments)}}},Ws={readContext:ca,use:Lo,useCallback:Ss,useContext:ca,useEffect:ms,useImperativeHandle:bs,useInsertionEffect:_s,useLayoutEffect:vs,useMemo:Cs,useReducer:Bo,useRef:us,useState:function(){return Bo(zo)},useDebugValue:xs,useDeferredValue:function(e,t){return Ts(z(),I.memoizedState,e,t)},useTransition:function(){var e=Bo(zo)[0],t=z().memoizedState;return[typeof e==`boolean`?e:Io(e),t]},useSyncExternalStore:Uo,useId:Ms,useHostTransitionStatus:js,useFormState:as,useActionState:as,useOptimistic:function(e,t){return Xo(z(),I,e,t)},useMemoCache:Ro,useCacheRefresh:Ns};Ws.useEffectEvent=gs;var Gs={readContext:ca,use:Lo,useCallback:Ss,useContext:ca,useEffect:ms,useImperativeHandle:bs,useInsertionEffect:_s,useLayoutEffect:vs,useMemo:Cs,useReducer:Ho,useRef:us,useState:function(){return Ho(zo)},useDebugValue:xs,useDeferredValue:function(e,t){var n=z();return I===null?ws(n,e,t):Ts(n,I.memoizedState,e,t)},useTransition:function(){var e=Ho(zo)[0],t=z().memoizedState;return[typeof e==`boolean`?e:Io(e),t]},useSyncExternalStore:Uo,useId:Ms,useHostTransitionStatus:js,useFormState:cs,useActionState:cs,useOptimistic:function(e,t){var n=z();return I===null?(n.baseState=e,[e,n.queue.dispatch]):Xo(n,I,e,t)},useMemoCache:Ro,useCacheRefresh:Ns};Gs.useEffectEvent=gs;function Ks(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:h({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var qs={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=pu(),i=Ya(r);i.payload=t,n!=null&&(i.callback=n),t=Xa(e,i,r),t!==null&&(hu(t,e,r),Za(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=pu(),i=Ya(r);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Xa(e,i,r),t!==null&&(hu(t,e,r),Za(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=pu(),r=Ya(n);r.tag=2,t!=null&&(r.callback=t),t=Xa(e,r,n),t!==null&&(hu(t,e,n),Za(t,e,n))}};function Js(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate==`function`?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!jr(n,r)||!jr(i,a):!0}function Ys(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps==`function`&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps==`function`&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&qs.enqueueReplaceState(t,t.state,null)}function Xs(e,t){var n=t;if(`ref`in t)for(var r in n={},t)r!==`ref`&&(n[r]=t[r]);if(e=e.defaultProps)for(var i in n===t&&(n=h({},n)),e)n[i]===void 0&&(n[i]=e[i]);return n}function Zs(e){ii(e)}function Qs(e){console.error(e)}function $s(e){ii(e)}function ec(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(e){setTimeout(function(){throw e})}}function tc(e,t,n){try{var r=e.onCaughtError;r(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(e){setTimeout(function(){throw e})}}function nc(e,t,n){return n=Ya(n),n.tag=3,n.payload={element:null},n.callback=function(){ec(e,t)},n}function rc(e){return e=Ya(e),e.tag=3,e}function ic(e,t,n,r){var i=n.type.getDerivedStateFromError;if(typeof i==`function`){var a=r.value;e.payload=function(){return i(a)},e.callback=function(){tc(t,n,r)}}var o=n.stateNode;o!==null&&typeof o.componentDidCatch==`function`&&(e.callback=function(){tc(t,n,r),typeof i!=`function`&&(iu===null?iu=new Set([this]):iu.add(this));var e=r.stack;this.componentDidCatch(r.value,{componentStack:e===null?``:e})})}function ac(e,t,n,r,i){if(n.flags|=32768,typeof r==`object`&&r&&typeof r.then==`function`){if(t=n.alternate,t!==null&&aa(t,n,i,!0),n=lo.current,n!==null){switch(n.tag){case 31:case 13:return uo===null?Du():n.alternate===null&&Y===0&&(Y=3),n.flags&=-257,n.flags|=65536,n.lanes=i,r===ja?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([r]):t.add(r),Gu(e,r,i)),!1;case 22:return n.flags|=65536,r===ja?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([r]):n.add(r)),Gu(e,r,i)),!1}throw Error(s(435,n.tag))}return Gu(e,r,i),Du(),!1}if(M)return t=lo.current,t===null?(r!==Wi&&(t=Error(s(423),{cause:r}),Zi(Ei(t,n))),e=e.current.alternate,e.flags|=65536,i&=-i,e.lanes|=i,r=Ei(r,n),i=nc(e.stateNode,r,i),Qa(e,i),Y!==4&&(Y=2)):(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=i,r!==Wi&&(e=Error(s(422),{cause:r}),Zi(Ei(e,n)))),!1;var a=Error(s(520),{cause:r});if(a=Ei(a,n),Zl===null?Zl=[a]:Zl.push(a),Y!==4&&(Y=2),t===null)return!0;r=Ei(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=i&-i,n.lanes|=e,e=nc(n.stateNode,r,e),Qa(n,e),!1;case 1:if(t=n.type,a=n.stateNode,!(n.flags&128)&&(typeof t.getDerivedStateFromError==`function`||a!==null&&typeof a.componentDidCatch==`function`&&(iu===null||!iu.has(a))))return n.flags|=65536,i&=-i,n.lanes|=i,i=rc(i),ic(i,e,n,r),Qa(n,i),!1}n=n.return}while(n!==null);return!1}var oc=Error(s(461)),B=!1;function sc(e,t,n,r){t.child=e===null?Ga(t,null,n,r):Wa(t,e.child,n,r)}function cc(e,t,n,r,i){n=n.render;var a=t.ref;if(`ref`in r){var o={};for(var s in r)s!==`ref`&&(o[s]=r[s])}else o=r;return sa(t),r=Do(e,t,n,o,a,i),s=jo(),e!==null&&!B?(Mo(e,t,i),Mc(e,t,i)):(M&&s&&Ri(t),t.flags|=1,sc(e,t,r,i),t.child)}function lc(e,t,n,r,i){if(e===null){var a=n.type;return typeof a==`function`&&!_i(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,uc(e,t,a,r,i)):(e=bi(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!Nc(e,i)){var o=a.memoizedProps;if(n=n.compare,n=n===null?jr:n,n(o,r)&&e.ref===t.ref)return Mc(e,t,i)}return t.flags|=1,e=vi(a,r),e.ref=t.ref,e.return=t,t.child=e}function uc(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(jr(a,r)&&e.ref===t.ref)if(B=!1,t.pendingProps=r=a,Nc(e,i))e.flags&131072&&(B=!0);else return t.lanes=e.lanes,Mc(e,t,i)}return vc(e,t,n,r,i)}function dc(e,t,n,r){var i=r.children,a=e===null?null:e.memoizedState;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode===`hidden`){if(t.flags&128){if(a=a===null?n:a.baseLanes|n,e!==null){for(r=t.child=e.child,i=0;r!==null;)i=i|r.lanes|r.childLanes,r=r.sibling;r=i&~a}else r=0,t.child=null;return pc(e,t,a,n,r)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Ea(t,a===null?null:a.cachePool),a===null?so():oo(t,a),mo(t);else return r=t.lanes=536870912,pc(e,t,a===null?n:a.baseLanes|n,n,r)}else a===null?(e!==null&&Ea(t,null),so(),ho(t)):(Ea(t,a.cachePool),oo(t,a),ho(t),t.memoizedState=null);return sc(e,t,i,n),t.child}function fc(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function pc(e,t,n,r,i){var a=Ta();return a=a===null?null:{parent:N._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&Ea(t,null),so(),mo(t),e!==null&&aa(e,t,r,!0),t.childLanes=i,null}function mc(e,t){return t=Dc({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function hc(e,t,n){return Wa(t,e.child,null,n),e=mc(t,t.pendingProps),e.flags|=2,go(t),t.memoizedState=null,e}function gc(e,t,n){var r=t.pendingProps,i=(t.flags&128)!=0;if(t.flags&=-129,e===null){if(M){if(r.mode===`hidden`)return e=mc(t,r),t.lanes=536870912,fc(null,e);if(po(t),(e=j)?(e=rf(e,Ui),e=e!==null&&e.data===`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Ni===null?null:{id:Pi,overflow:Fi},retryLane:536870912,hydrationErrors:null},n=Ci(e),n.return=t,t.child=n,Vi=t,j=null)):e=null,e===null)throw Gi(t);return t.lanes=536870912,null}return mc(t,r)}var a=e.memoizedState;if(a!==null){var o=a.dehydrated;if(po(t),i)if(t.flags&256)t.flags&=-257,t=hc(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(s(558));else if(B||aa(e,t,n,!1),i=(n&e.childLanes)!==0,B||i){if(r=G,r!==null&&(o=ut(r,n),o!==0&&o!==a.retryLane))throw a.retryLane=o,di(e,o),hu(r,e,o),oc;Du(),t=hc(e,t,n)}else e=a.treeContext,j=cf(o.nextSibling),Vi=t,M=!0,Hi=null,Ui=!1,e!==null&&Bi(t,e),t=mc(t,r),t.flags|=4096;return t}return e=vi(e.child,{mode:r.mode,children:r.children}),e.ref=t.ref,t.child=e,e.return=t,e}function _c(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!=`function`&&typeof n!=`object`)throw Error(s(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function vc(e,t,n,r,i){return sa(t),n=Do(e,t,n,r,void 0,i),r=jo(),e!==null&&!B?(Mo(e,t,i),Mc(e,t,i)):(M&&r&&Ri(t),t.flags|=1,sc(e,t,n,i),t.child)}function yc(e,t,n,r,i,a){return sa(t),t.updateQueue=null,n=ko(t,r,n,i),Oo(e),r=jo(),e!==null&&!B?(Mo(e,t,a),Mc(e,t,a)):(M&&r&&Ri(t),t.flags|=1,sc(e,t,n,a),t.child)}function bc(e,t,n,r,i){if(sa(t),t.stateNode===null){var a=mi,o=n.contextType;typeof o==`object`&&o&&(a=ca(o)),a=new n(r,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=qs,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=r,a.state=t.memoizedState,a.refs={},qa(t),o=n.contextType,a.context=typeof o==`object`&&o?ca(o):mi,a.state=t.memoizedState,o=n.getDerivedStateFromProps,typeof o==`function`&&(Ks(t,n,o,r),a.state=t.memoizedState),typeof n.getDerivedStateFromProps==`function`||typeof a.getSnapshotBeforeUpdate==`function`||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(o=a.state,typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount(),o!==a.state&&qs.enqueueReplaceState(a,a.state,null),to(t,r,a,i),eo(),a.state=t.memoizedState),typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!0}else if(e===null){a=t.stateNode;var s=t.memoizedProps,c=Xs(n,s);a.props=c;var l=a.context,u=n.contextType;o=mi,typeof u==`object`&&u&&(o=ca(u));var d=n.getDerivedStateFromProps;u=typeof d==`function`||typeof a.getSnapshotBeforeUpdate==`function`,s=t.pendingProps!==s,u||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(s||l!==o)&&Ys(t,a,r,o),Ka=!1;var f=t.memoizedState;a.state=f,to(t,r,a,i),eo(),l=t.memoizedState,s||f!==l||Ka?(typeof d==`function`&&(Ks(t,n,d,r),l=t.memoizedState),(c=Ka||Js(t,n,c,r,f,l,o))?(u||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount==`function`&&(t.flags|=4194308)):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=o,r=c):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Ja(e,t),o=t.memoizedProps,u=Xs(n,o),a.props=u,d=t.pendingProps,f=a.context,l=n.contextType,c=mi,typeof l==`object`&&l&&(c=ca(l)),s=n.getDerivedStateFromProps,(l=typeof s==`function`||typeof a.getSnapshotBeforeUpdate==`function`)||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(o!==d||f!==c)&&Ys(t,a,r,c),Ka=!1,f=t.memoizedState,a.state=f,to(t,r,a,i),eo();var p=t.memoizedState;o!==d||f!==p||Ka||e!==null&&e.dependencies!==null&&oa(e.dependencies)?(typeof s==`function`&&(Ks(t,n,s,r),p=t.memoizedState),(u=Ka||Js(t,n,u,r,f,p,c)||e!==null&&e.dependencies!==null&&oa(e.dependencies))?(l||typeof a.UNSAFE_componentWillUpdate!=`function`&&typeof a.componentWillUpdate!=`function`||(typeof a.componentWillUpdate==`function`&&a.componentWillUpdate(r,p,c),typeof a.UNSAFE_componentWillUpdate==`function`&&a.UNSAFE_componentWillUpdate(r,p,c)),typeof a.componentDidUpdate==`function`&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate==`function`&&(t.flags|=1024)):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),a.props=r,a.state=p,a.context=c,r=u):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return a=r,_c(e,t),r=(t.flags&128)!=0,a||r?(a=t.stateNode,n=r&&typeof n.getDerivedStateFromError!=`function`?null:a.render(),t.flags|=1,e!==null&&r?(t.child=Wa(t,e.child,null,i),t.child=Wa(t,null,n,i)):sc(e,t,n,i),t.memoizedState=a.state,e=t.child):e=Mc(e,t,i),e}function xc(e,t,n,r){return Yi(),t.flags|=256,sc(e,t,n,r),t.child}var Sc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Cc(e){return{baseLanes:e,cachePool:Da()}}function wc(e,t,n){return e=e===null?0:e.childLanes&~n,t&&(e|=Yl),e}function Tc(e,t,n){var r=t.pendingProps,i=!1,a=(t.flags&128)!=0,o;if((o=a)||(o=e!==null&&e.memoizedState===null?!1:(P.current&2)!=0),o&&(i=!0,t.flags&=-129),o=(t.flags&32)!=0,t.flags&=-33,e===null){if(M){if(i?fo(t):ho(t),(e=j)?(e=rf(e,Ui),e=e!==null&&e.data!==`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Ni===null?null:{id:Pi,overflow:Fi},retryLane:536870912,hydrationErrors:null},n=Ci(e),n.return=t,t.child=n,Vi=t,j=null)):e=null,e===null)throw Gi(t);return of(e)?t.lanes=32:t.lanes=536870912,null}var c=r.children;return r=r.fallback,i?(ho(t),i=t.mode,c=Dc({mode:`hidden`,children:c},i),r=xi(r,i,n,null),c.return=t,r.return=t,c.sibling=r,t.child=c,r=t.child,r.memoizedState=Cc(n),r.childLanes=wc(e,o,n),t.memoizedState=Sc,fc(null,r)):(fo(t),Ec(t,c))}var l=e.memoizedState;if(l!==null&&(c=l.dehydrated,c!==null)){if(a)t.flags&256?(fo(t),t.flags&=-257,t=Oc(e,t,n)):t.memoizedState===null?(ho(t),c=r.fallback,i=t.mode,r=Dc({mode:`visible`,children:r.children},i),c=xi(c,i,n,null),c.flags|=2,r.return=t,c.return=t,r.sibling=c,t.child=r,Wa(t,e.child,null,n),r=t.child,r.memoizedState=Cc(n),r.childLanes=wc(e,o,n),t.memoizedState=Sc,t=fc(null,r)):(ho(t),t.child=e.child,t.flags|=128,t=null);else if(fo(t),of(c)){if(o=c.nextSibling&&c.nextSibling.dataset,o)var u=o.dgst;o=u,r=Error(s(419)),r.stack=``,r.digest=o,Zi({value:r,source:null,stack:null}),t=Oc(e,t,n)}else if(B||aa(e,t,n,!1),o=(n&e.childLanes)!==0,B||o){if(o=G,o!==null&&(r=ut(o,n),r!==0&&r!==l.retryLane))throw l.retryLane=r,di(e,r),hu(o,e,r),oc;af(c)||Du(),t=Oc(e,t,n)}else af(c)?(t.flags|=192,t.child=e.child,t=null):(e=l.treeContext,j=cf(c.nextSibling),Vi=t,M=!0,Hi=null,Ui=!1,e!==null&&Bi(t,e),t=Ec(t,r.children),t.flags|=4096);return t}return i?(ho(t),c=r.fallback,i=t.mode,l=e.child,u=l.sibling,r=vi(l,{mode:`hidden`,children:r.children}),r.subtreeFlags=l.subtreeFlags&65011712,u===null?(c=xi(c,i,n,null),c.flags|=2):c=vi(u,c),c.return=t,r.return=t,r.sibling=c,t.child=r,fc(null,r),r=t.child,c=e.child.memoizedState,c===null?c=Cc(n):(i=c.cachePool,i===null?i=Da():(l=N._currentValue,i=i.parent===l?i:{parent:l,pool:l}),c={baseLanes:c.baseLanes|n,cachePool:i}),r.memoizedState=c,r.childLanes=wc(e,o,n),t.memoizedState=Sc,fc(e.child,r)):(fo(t),n=e.child,e=n.sibling,n=vi(n,{mode:`visible`,children:r.children}),n.return=t,n.sibling=null,e!==null&&(o=t.deletions,o===null?(t.deletions=[e],t.flags|=16):o.push(e)),t.child=n,t.memoizedState=null,n)}function Ec(e,t){return t=Dc({mode:`visible`,children:t},e.mode),t.return=e,e.child=t}function Dc(e,t){return e=gi(22,e,null,t),e.lanes=0,e}function Oc(e,t,n){return Wa(t,e.child,null,n),e=Ec(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function kc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),ra(e.return,t,n)}function Ac(e,t,n,r,i,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,treeForkCount:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i,o.treeForkCount=a)}function jc(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;r=r.children;var o=P.current,s=(o&2)!=0;if(s?(o=o&1|2,t.flags|=128):o&=1,D(P,o),sc(e,t,r,n),r=M?Ai:0,!s&&e!==null&&e.flags&128)a:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&kc(e,n,t);else if(e.tag===19)kc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break a;for(;e.sibling===null;){if(e.return===null||e.return===t)break a;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case`forwards`:for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&_o(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Ac(t,!1,i,n,a,r);break;case`backwards`:case`unstable_legacy-backwards`:for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&_o(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Ac(t,!0,n,null,a,r);break;case`together`:Ac(t,!1,null,null,void 0,r);break;default:t.memoizedState=null}return t.child}function Mc(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Kl|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(aa(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(s(153));if(t.child!==null){for(e=t.child,n=vi(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=vi(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Nc(e,t){return(e.lanes&t)===0?(e=e.dependencies,!!(e!==null&&oa(e))):!0}function Pc(e,t,n){switch(t.tag){case 3:be(t,t.stateNode.containerInfo),ta(t,N,e.memoizedState.cache),Yi();break;case 27:case 5:Se(t);break;case 4:be(t,t.stateNode.containerInfo);break;case 10:ta(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,po(t),null;break;case 13:var r=t.memoizedState;if(r!==null)return r.dehydrated===null?(n&t.child.childLanes)===0?(fo(t),e=Mc(e,t,n),e===null?null:e.sibling):Tc(e,t,n):(fo(t),t.flags|=128,null);fo(t);break;case 19:var i=(e.flags&128)!=0;if(r=(n&t.childLanes)!==0,r||=(aa(e,t,n,!1),(n&t.childLanes)!==0),i){if(r)return jc(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),D(P,P.current),r)break;return null;case 22:return t.lanes=0,dc(e,t,n,t.pendingProps);case 24:ta(t,N,e.memoizedState.cache)}return Mc(e,t,n)}function Fc(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)B=!0;else{if(!Nc(e,n)&&!(t.flags&128))return B=!1,Pc(e,t,n);B=!!(e.flags&131072)}else B=!1,M&&t.flags&1048576&&Li(t,Ai,t.index);switch(t.lanes=0,t.tag){case 16:a:{var r=t.pendingProps;if(e=Pa(t.elementType),t.type=e,typeof e==`function`)_i(e)?(r=Xs(e,r),t.tag=1,t=bc(null,t,e,r,n)):(t.tag=0,t=vc(null,t,e,r,n));else{if(e!=null){var i=e.$$typeof;if(i===C){t.tag=11,t=cc(null,t,e,r,n);break a}else if(i===re){t.tag=14,t=lc(null,t,e,r,n);break a}}throw t=ue(e)||e,Error(s(306,t,``))}}return t;case 0:return vc(e,t,t.type,t.pendingProps,n);case 1:return r=t.type,i=Xs(r,t.pendingProps),bc(e,t,r,i,n);case 3:a:{if(be(t,t.stateNode.containerInfo),e===null)throw Error(s(387));r=t.pendingProps;var a=t.memoizedState;i=a.element,Ja(e,t),to(t,r,null,n);var o=t.memoizedState;if(r=o.cache,ta(t,N,r),r!==a.cache&&ia(t,[N],n,!0),eo(),r=o.element,a.isDehydrated)if(a={element:r,isDehydrated:!1,cache:o.cache},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){t=xc(e,t,r,n);break a}else if(r!==i){i=Ei(Error(s(424)),t),Zi(i),t=xc(e,t,r,n);break a}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName===`HTML`?e.ownerDocument.body:e}for(j=cf(e.firstChild),Vi=t,M=!0,Hi=null,Ui=!0,n=Ga(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Yi(),r===i){t=Mc(e,t,n);break a}sc(e,t,r,n)}t=t.child}return t;case 26:return _c(e,t),e===null?(n=kf(t.type,null,t.pendingProps,null))?t.memoizedState=n:M||(n=t.type,e=t.pendingProps,r=Bd(ve.current).createElement(n),r[gt]=t,r[_t]=e,Pd(r,n,e),kt(r),t.stateNode=r):t.memoizedState=kf(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Se(t),e===null&&M&&(r=t.stateNode=ff(t.type,t.pendingProps,ve.current),Vi=t,Ui=!0,i=j,Zd(t.type)?(lf=i,j=cf(r.firstChild)):j=i),sc(e,t,t.pendingProps.children,n),_c(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&M&&((i=r=j)&&(r=tf(r,t.type,t.pendingProps,Ui),r===null?i=!1:(t.stateNode=r,Vi=t,j=cf(r.firstChild),Ui=!1,i=!0)),i||Gi(t)),Se(t),i=t.type,a=t.pendingProps,o=e===null?null:e.memoizedProps,r=a.children,Ud(i,a)?r=null:o!==null&&Ud(i,o)&&(t.flags|=32),t.memoizedState!==null&&(i=Do(e,t,Ao,null,null,n),Qf._currentValue=i),_c(e,t),sc(e,t,r,n),t.child;case 6:return e===null&&M&&((e=n=j)&&(n=nf(n,t.pendingProps,Ui),n===null?e=!1:(t.stateNode=n,Vi=t,j=null,e=!0)),e||Gi(t)),null;case 13:return Tc(e,t,n);case 4:return be(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Wa(t,null,r,n):sc(e,t,r,n),t.child;case 11:return cc(e,t,t.type,t.pendingProps,n);case 7:return sc(e,t,t.pendingProps,n),t.child;case 8:return sc(e,t,t.pendingProps.children,n),t.child;case 12:return sc(e,t,t.pendingProps.children,n),t.child;case 10:return r=t.pendingProps,ta(t,t.type,r.value),sc(e,t,r.children,n),t.child;case 9:return i=t.type._context,r=t.pendingProps.children,sa(t),i=ca(i),r=r(i),t.flags|=1,sc(e,t,r,n),t.child;case 14:return lc(e,t,t.type,t.pendingProps,n);case 15:return uc(e,t,t.type,t.pendingProps,n);case 19:return jc(e,t,n);case 31:return gc(e,t,n);case 22:return dc(e,t,n,t.pendingProps);case 24:return sa(t),r=ca(N),e===null?(i=Ta(),i===null&&(i=G,a=ma(),i.pooledCache=a,a.refCount++,a!==null&&(i.pooledCacheLanes|=n),i=a),t.memoizedState={parent:r,cache:i},qa(t),ta(t,N,i)):((e.lanes&n)!==0&&(Ja(e,t),to(t,null,null,n),eo()),i=e.memoizedState,a=t.memoizedState,i.parent===r?(r=a.cache,ta(t,N,r),r!==i.cache&&ia(t,[N],n,!0)):(i={parent:r,cache:r},t.memoizedState=i,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=i),ta(t,N,r))),sc(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(s(156,t.tag))}function Ic(e){e.flags|=4}function Lc(e,t,n,r,i){if((t=(e.mode&32)!=0)&&(t=!1),t){if(e.flags|=16777216,(i&335544128)===i)if(e.stateNode.complete)e.flags|=8192;else if(wu())e.flags|=8192;else throw Fa=ja,ka}else e.flags&=-16777217}function Rc(e,t){if(t.type!==`stylesheet`||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!Wf(t))if(wu())e.flags|=8192;else throw Fa=ja,ka}function zc(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag===22?536870912:it(),e.lanes|=t,Xl|=t)}function Bc(e,t){if(!M)switch(e.tailMode){case`hidden`:t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case`collapsed`:n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function V(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&65011712,r|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Vc(e,t,n){var r=t.pendingProps;switch(zi(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return V(t),null;case 1:return V(t),null;case 3:return n=t.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),na(N),xe(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Ji(t)?Ic(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Xi())),V(t),null;case 26:var i=t.type,a=t.memoizedState;return e===null?(Ic(t),a===null?(V(t),Lc(t,i,null,r,n)):(V(t),Rc(t,a))):a?a===e.memoizedState?(V(t),t.flags&=-16777217):(Ic(t),V(t),Rc(t,a)):(e=e.memoizedProps,e!==r&&Ic(t),V(t),Lc(t,i,e,r,n)),null;case 27:if(Ce(t),n=ve.current,i=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Ic(t);else{if(!r){if(t.stateNode===null)throw Error(s(166));return V(t),null}e=ge.current,Ji(t)?Ki(t,e):(e=ff(i,r,n),t.stateNode=e,Ic(t))}return V(t),null;case 5:if(Ce(t),i=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Ic(t);else{if(!r){if(t.stateNode===null)throw Error(s(166));return V(t),null}if(a=ge.current,Ji(t))Ki(t,a);else{var o=Bd(ve.current);switch(a){case 1:a=o.createElementNS(`http://www.w3.org/2000/svg`,i);break;case 2:a=o.createElementNS(`http://www.w3.org/1998/Math/MathML`,i);break;default:switch(i){case`svg`:a=o.createElementNS(`http://www.w3.org/2000/svg`,i);break;case`math`:a=o.createElementNS(`http://www.w3.org/1998/Math/MathML`,i);break;case`script`:a=o.createElement(`div`),a.innerHTML=`<script><\/script>`,a=a.removeChild(a.firstChild);break;case`select`:a=typeof r.is==`string`?o.createElement(`select`,{is:r.is}):o.createElement(`select`),r.multiple?a.multiple=!0:r.size&&(a.size=r.size);break;default:a=typeof r.is==`string`?o.createElement(i,{is:r.is}):o.createElement(i)}}a[gt]=t,a[_t]=r;a:for(o=t.child;o!==null;){if(o.tag===5||o.tag===6)a.appendChild(o.stateNode);else if(o.tag!==4&&o.tag!==27&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===t)break a;for(;o.sibling===null;){if(o.return===null||o.return===t)break a;o=o.return}o.sibling.return=o.return,o=o.sibling}t.stateNode=a;a:switch(Pd(a,i,r),i){case`button`:case`input`:case`select`:case`textarea`:r=!!r.autoFocus;break a;case`img`:r=!0;break a;default:r=!1}r&&Ic(t)}}return V(t),Lc(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==r&&Ic(t);else{if(typeof r!=`string`&&t.stateNode===null)throw Error(s(166));if(e=ve.current,Ji(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,i=Vi,i!==null)switch(i.tag){case 27:case 5:r=i.memoizedProps}e[gt]=t,e=!!(e.nodeValue===n||r!==null&&!0===r.suppressHydrationWarning||Md(e.nodeValue,n)),e||Gi(t,!0)}else e=Bd(e).createTextNode(r),e[gt]=t,t.stateNode=e}return V(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(r=Ji(t),n!==null){if(e===null){if(!r)throw Error(s(318));if(e=t.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(s(557));e[gt]=t}else Yi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;V(t),e=!1}else n=Xi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(go(t),t):(go(t),null);if(t.flags&128)throw Error(s(558))}return V(t),null;case 13:if(r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(i=Ji(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(s(318));if(i=t.memoizedState,i=i===null?null:i.dehydrated,!i)throw Error(s(317));i[gt]=t}else Yi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;V(t),i=!1}else i=Xi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=i),i=!0;if(!i)return t.flags&256?(go(t),t):(go(t),null)}return go(t),t.flags&128?(t.lanes=n,t):(n=r!==null,e=e!==null&&e.memoizedState!==null,n&&(r=t.child,i=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(i=r.alternate.memoizedState.cachePool.pool),a=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(a=r.memoizedState.cachePool.pool),a!==i&&(r.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),zc(t,t.updateQueue),V(t),null);case 4:return xe(),e===null&&Sd(t.stateNode.containerInfo),V(t),null;case 10:return na(t.type),V(t),null;case 19:if(E(P),r=t.memoizedState,r===null)return V(t),null;if(i=(t.flags&128)!=0,a=r.rendering,a===null)if(i)Bc(r,!1);else{if(Y!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=_o(e),a!==null){for(t.flags|=128,Bc(r,!1),e=a.updateQueue,t.updateQueue=e,zc(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)yi(n,e),n=n.sibling;return D(P,P.current&1|2),M&&Ii(t,r.treeForkCount),t.child}e=e.sibling}r.tail!==null&&Fe()>nu&&(t.flags|=128,i=!0,Bc(r,!1),t.lanes=4194304)}else{if(!i)if(e=_o(a),e!==null){if(t.flags|=128,i=!0,e=e.updateQueue,t.updateQueue=e,zc(t,e),Bc(r,!0),r.tail===null&&r.tailMode===`hidden`&&!a.alternate&&!M)return V(t),null}else 2*Fe()-r.renderingStartTime>nu&&n!==536870912&&(t.flags|=128,i=!0,Bc(r,!1),t.lanes=4194304);r.isBackwards?(a.sibling=t.child,t.child=a):(e=r.last,e===null?t.child=a:e.sibling=a,r.last=a)}return r.tail===null?(V(t),null):(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=Fe(),e.sibling=null,n=P.current,D(P,i?n&1|2:n&1),M&&Ii(t,r.treeForkCount),e);case 22:case 23:return go(t),co(),r=t.memoizedState!==null,e===null?r&&(t.flags|=8192):e.memoizedState!==null!==r&&(t.flags|=8192),r?n&536870912&&!(t.flags&128)&&(V(t),t.subtreeFlags&6&&(t.flags|=8192)):V(t),n=t.updateQueue,n!==null&&zc(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),r=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),e!==null&&E(wa),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),na(N),V(t),null;case 25:return null;case 30:return null}throw Error(s(156,t.tag))}function Hc(e,t){switch(zi(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return na(N),xe(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Ce(t),null;case 31:if(t.memoizedState!==null){if(go(t),t.alternate===null)throw Error(s(340));Yi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(go(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(s(340));Yi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return E(P),null;case 4:return xe(),null;case 10:return na(t.type),null;case 22:case 23:return go(t),co(),e!==null&&E(wa),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return na(N),null;case 25:return null;default:return null}}function Uc(e,t){switch(zi(t),t.tag){case 3:na(N),xe();break;case 26:case 27:case 5:Ce(t);break;case 4:xe();break;case 31:t.memoizedState!==null&&go(t);break;case 13:go(t);break;case 19:E(P);break;case 10:na(t.type);break;case 22:case 23:go(t),co(),e!==null&&E(wa);break;case 24:na(N)}}function Wc(e,t){try{var n=t.updateQueue,r=n===null?null:n.lastEffect;if(r!==null){var i=r.next;n=i;do{if((n.tag&e)===e){r=void 0;var a=n.create,o=n.inst;r=a(),o.destroy=r}n=n.next}while(n!==i)}}catch(e){Z(t,t.return,e)}}function Gc(e,t,n){try{var r=t.updateQueue,i=r===null?null:r.lastEffect;if(i!==null){var a=i.next;r=a;do{if((r.tag&e)===e){var o=r.inst,s=o.destroy;if(s!==void 0){o.destroy=void 0,i=t;var c=n,l=s;try{l()}catch(e){Z(i,c,e)}}}r=r.next}while(r!==a)}}catch(e){Z(t,t.return,e)}}function Kc(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{ro(t,n)}catch(t){Z(e,e.return,t)}}}function qc(e,t,n){n.props=Xs(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(n){Z(e,t,n)}}function Jc(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof n==`function`?e.refCleanup=n(r):n.current=r}}catch(n){Z(e,t,n)}}function Yc(e,t){var n=e.ref,r=e.refCleanup;if(n!==null)if(typeof r==`function`)try{r()}catch(n){Z(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n==`function`)try{n(null)}catch(n){Z(e,t,n)}else n.current=null}function Xc(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{a:switch(t){case`button`:case`input`:case`select`:case`textarea`:n.autoFocus&&r.focus();break a;case`img`:n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(t){Z(e,e.return,t)}}function Zc(e,t,n){try{var r=e.stateNode;Fd(r,e.type,n,t),r[_t]=t}catch(t){Z(e,e.return,t)}}function Qc(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Zd(e.type)||e.tag===4}function $c(e){a:for(;;){for(;e.sibling===null;){if(e.return===null||Qc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Zd(e.type)||e.flags&2||e.child===null||e.tag===4)continue a;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function el(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=cn));else if(r!==4&&(r===27&&Zd(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(el(e,t,n),e=e.sibling;e!==null;)el(e,t,n),e=e.sibling}function tl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(r===27&&Zd(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(tl(e,t,n),e=e.sibling;e!==null;)tl(e,t,n),e=e.sibling}function nl(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);Pd(t,r,n),t[gt]=e,t[_t]=n}catch(t){Z(e,e.return,t)}}var rl=!1,H=!1,il=!1,al=typeof WeakSet==`function`?WeakSet:Set,ol=null;function sl(e,t){if(e=e.containerInfo,Rd=sp,e=Fr(e),Ir(e)){if(`selectionStart`in e)var n={start:e.selectionStart,end:e.selectionEnd};else a:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,a=r.focusNode;r=r.focusOffset;try{n.nodeType,a.nodeType}catch{n=null;break a}var o=0,c=-1,l=-1,u=0,d=0,f=e,p=null;b:for(;;){for(var m;f!==n||i!==0&&f.nodeType!==3||(c=o+i),f!==a||r!==0&&f.nodeType!==3||(l=o+r),f.nodeType===3&&(o+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===e)break b;if(p===n&&++u===i&&(c=o),p===a&&++d===r&&(l=o),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}n=c===-1||l===-1?null:{start:c,end:l}}else n=null}n||={start:0,end:0}}else n=null;for(zd={focusedElem:e,selectionRange:n},sp=!1,ol=t;ol!==null;)if(t=ol,e=t.child,t.subtreeFlags&1028&&e!==null)e.return=t,ol=e;else for(;ol!==null;){switch(t=ol,a=t.alternate,e=t.flags,t.tag){case 0:if(e&4&&(e=t.updateQueue,e=e===null?null:e.events,e!==null))for(n=0;n<e.length;n++)i=e[n],i.ref.impl=i.nextImpl;break;case 11:case 15:break;case 1:if(e&1024&&a!==null){e=void 0,n=t,i=a.memoizedProps,a=a.memoizedState,r=n.stateNode;try{var h=Xs(n.type,i);e=r.getSnapshotBeforeUpdate(h,a),r.__reactInternalSnapshotBeforeUpdate=e}catch(e){Z(n,n.return,e)}}break;case 3:if(e&1024){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)ef(e);else if(n===1)switch(e.nodeName){case`HEAD`:case`HTML`:case`BODY`:ef(e);break;default:e.textContent=``}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(e&1024)throw Error(s(163))}if(e=t.sibling,e!==null){e.return=t.return,ol=e;break}ol=t.return}}function cl(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:Sl(e,n),r&4&&Wc(5,n);break;case 1:if(Sl(e,n),r&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(e){Z(n,n.return,e)}else{var i=Xs(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(e){Z(n,n.return,e)}}r&64&&Kc(n),r&512&&Jc(n,n.return);break;case 3:if(Sl(e,n),r&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{ro(e,t)}catch(e){Z(n,n.return,e)}}break;case 27:t===null&&r&4&&nl(n);case 26:case 5:Sl(e,n),t===null&&r&4&&Xc(n),r&512&&Jc(n,n.return);break;case 12:Sl(e,n);break;case 31:Sl(e,n),r&4&&pl(e,n);break;case 13:Sl(e,n),r&4&&ml(e,n),r&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=Ju.bind(null,n),sf(e,n))));break;case 22:if(r=n.memoizedState!==null||rl,!r){t=t!==null&&t.memoizedState!==null||H,i=rl;var a=H;rl=r,(H=t)&&!a?wl(e,n,(n.subtreeFlags&8772)!=0):Sl(e,n),rl=i,H=a}break;case 30:break;default:Sl(e,n)}}function ll(e){var t=e.alternate;t!==null&&(e.alternate=null,ll(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&wt(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var U=null,ul=!1;function dl(e,t,n){for(n=n.child;n!==null;)fl(e,t,n),n=n.sibling}function fl(e,t,n){if(Ge&&typeof Ge.onCommitFiberUnmount==`function`)try{Ge.onCommitFiberUnmount(We,n)}catch{}switch(n.tag){case 26:H||Yc(n,t),dl(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:H||Yc(n,t);var r=U,i=ul;Zd(n.type)&&(U=n.stateNode,ul=!1),dl(e,t,n),pf(n.stateNode),U=r,ul=i;break;case 5:H||Yc(n,t);case 6:if(r=U,i=ul,U=null,dl(e,t,n),U=r,ul=i,U!==null)if(ul)try{(U.nodeType===9?U.body:U.nodeName===`HTML`?U.ownerDocument.body:U).removeChild(n.stateNode)}catch(e){Z(n,t,e)}else try{U.removeChild(n.stateNode)}catch(e){Z(n,t,e)}break;case 18:U!==null&&(ul?(e=U,Qd(e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e,n.stateNode),Np(e)):Qd(U,n.stateNode));break;case 4:r=U,i=ul,U=n.stateNode.containerInfo,ul=!0,dl(e,t,n),U=r,ul=i;break;case 0:case 11:case 14:case 15:Gc(2,n,t),H||Gc(4,n,t),dl(e,t,n);break;case 1:H||(Yc(n,t),r=n.stateNode,typeof r.componentWillUnmount==`function`&&qc(n,t,r)),dl(e,t,n);break;case 21:dl(e,t,n);break;case 22:H=(r=H)||n.memoizedState!==null,dl(e,t,n),H=r;break;default:dl(e,t,n)}}function pl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Np(e)}catch(e){Z(t,t.return,e)}}}function ml(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Np(e)}catch(e){Z(t,t.return,e)}}function hl(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new al),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new al),t;default:throw Error(s(435,e.tag))}}function gl(e,t){var n=hl(e);t.forEach(function(t){if(!n.has(t)){n.add(t);var r=Yu.bind(null,e,t);t.then(r,r)}})}function _l(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r],a=e,o=t,c=o;a:for(;c!==null;){switch(c.tag){case 27:if(Zd(c.type)){U=c.stateNode,ul=!1;break a}break;case 5:U=c.stateNode,ul=!1;break a;case 3:case 4:U=c.stateNode.containerInfo,ul=!0;break a}c=c.return}if(U===null)throw Error(s(160));fl(a,o,i),U=null,ul=!1,a=i.alternate,a!==null&&(a.return=null),i.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)yl(t,e),t=t.sibling}var vl=null;function yl(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:_l(t,e),bl(e),r&4&&(Gc(3,e,e.return),Wc(3,e),Gc(5,e,e.return));break;case 1:_l(t,e),bl(e),r&512&&(H||n===null||Yc(n,n.return)),r&64&&rl&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?r:n.concat(r))));break;case 26:var i=vl;if(_l(t,e),bl(e),r&512&&(H||n===null||Yc(n,n.return)),r&4){var a=n===null?null:n.memoizedState;if(r=e.memoizedState,n===null)if(r===null)if(e.stateNode===null){a:{r=e.type,n=e.memoizedProps,i=i.ownerDocument||i;b:switch(r){case`title`:a=i.getElementsByTagName(`title`)[0],(!a||a[Ct]||a[gt]||a.namespaceURI===`http://www.w3.org/2000/svg`||a.hasAttribute(`itemprop`))&&(a=i.createElement(r),i.head.insertBefore(a,i.querySelector(`head > title`))),Pd(a,r,n),a[gt]=e,kt(a),r=a;break a;case`link`:var o=Vf(`link`,`href`,i).get(r+(n.href||``));if(o){for(var c=0;c<o.length;c++)if(a=o[c],a.getAttribute(`href`)===(n.href==null||n.href===``?null:n.href)&&a.getAttribute(`rel`)===(n.rel==null?null:n.rel)&&a.getAttribute(`title`)===(n.title==null?null:n.title)&&a.getAttribute(`crossorigin`)===(n.crossOrigin==null?null:n.crossOrigin)){o.splice(c,1);break b}}a=i.createElement(r),Pd(a,r,n),i.head.appendChild(a);break;case`meta`:if(o=Vf(`meta`,`content`,i).get(r+(n.content||``))){for(c=0;c<o.length;c++)if(a=o[c],a.getAttribute(`content`)===(n.content==null?null:``+n.content)&&a.getAttribute(`name`)===(n.name==null?null:n.name)&&a.getAttribute(`property`)===(n.property==null?null:n.property)&&a.getAttribute(`http-equiv`)===(n.httpEquiv==null?null:n.httpEquiv)&&a.getAttribute(`charset`)===(n.charSet==null?null:n.charSet)){o.splice(c,1);break b}}a=i.createElement(r),Pd(a,r,n),i.head.appendChild(a);break;default:throw Error(s(468,r))}a[gt]=e,kt(a),r=a}e.stateNode=r}else Hf(i,e.type,e.stateNode);else e.stateNode=If(i,r,e.memoizedProps);else a===r?r===null&&e.stateNode!==null&&Zc(e,e.memoizedProps,n.memoizedProps):(a===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):a.count--,r===null?Hf(i,e.type,e.stateNode):If(i,r,e.memoizedProps))}break;case 27:_l(t,e),bl(e),r&512&&(H||n===null||Yc(n,n.return)),n!==null&&r&4&&Zc(e,e.memoizedProps,n.memoizedProps);break;case 5:if(_l(t,e),bl(e),r&512&&(H||n===null||Yc(n,n.return)),e.flags&32){i=e.stateNode;try{$t(i,``)}catch(t){Z(e,e.return,t)}}r&4&&e.stateNode!=null&&(i=e.memoizedProps,Zc(e,i,n===null?i:n.memoizedProps)),r&1024&&(il=!0);break;case 6:if(_l(t,e),bl(e),r&4){if(e.stateNode===null)throw Error(s(162));r=e.memoizedProps,n=e.stateNode;try{n.nodeValue=r}catch(t){Z(e,e.return,t)}}break;case 3:if(Bf=null,i=vl,vl=gf(t.containerInfo),_l(t,e),vl=i,bl(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Np(t.containerInfo)}catch(t){Z(e,e.return,t)}il&&(il=!1,xl(e));break;case 4:r=vl,vl=gf(e.stateNode.containerInfo),_l(t,e),bl(e),vl=r;break;case 12:_l(t,e),bl(e);break;case 31:_l(t,e),bl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,gl(e,r)));break;case 13:_l(t,e),bl(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(eu=Fe()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,gl(e,r)));break;case 22:i=e.memoizedState!==null;var l=n!==null&&n.memoizedState!==null,u=rl,d=H;if(rl=u||i,H=d||l,_l(t,e),H=d,rl=u,bl(e),r&8192)a:for(t=e.stateNode,t._visibility=i?t._visibility&-2:t._visibility|1,i&&(n===null||l||rl||H||Cl(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){l=n=t;try{if(a=l.stateNode,i)o=a.style,typeof o.setProperty==`function`?o.setProperty(`display`,`none`,`important`):o.display=`none`;else{c=l.stateNode;var f=l.memoizedProps.style,p=f!=null&&f.hasOwnProperty(`display`)?f.display:null;c.style.display=p==null||typeof p==`boolean`?``:(``+p).trim()}}catch(e){Z(l,l.return,e)}}}else if(t.tag===6){if(n===null){l=t;try{l.stateNode.nodeValue=i?``:l.memoizedProps}catch(e){Z(l,l.return,e)}}}else if(t.tag===18){if(n===null){l=t;try{var m=l.stateNode;i?$d(m,!0):$d(l.stateNode,!1)}catch(e){Z(l,l.return,e)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break a;for(;t.sibling===null;){if(t.return===null||t.return===e)break a;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}r&4&&(r=e.updateQueue,r!==null&&(n=r.retryQueue,n!==null&&(r.retryQueue=null,gl(e,n))));break;case 19:_l(t,e),bl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,gl(e,r)));break;case 30:break;case 21:break;default:_l(t,e),bl(e)}}function bl(e){var t=e.flags;if(t&2){try{for(var n,r=e.return;r!==null;){if(Qc(r)){n=r;break}r=r.return}if(n==null)throw Error(s(160));switch(n.tag){case 27:var i=n.stateNode;tl(e,$c(e),i);break;case 5:var a=n.stateNode;n.flags&32&&($t(a,``),n.flags&=-33),tl(e,$c(e),a);break;case 3:case 4:var o=n.stateNode.containerInfo;el(e,$c(e),o);break;default:throw Error(s(161))}}catch(t){Z(e,e.return,t)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function xl(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;xl(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Sl(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)cl(e,t.alternate,t),t=t.sibling}function Cl(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Gc(4,t,t.return),Cl(t);break;case 1:Yc(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount==`function`&&qc(t,t.return,n),Cl(t);break;case 27:pf(t.stateNode);case 26:case 5:Yc(t,t.return),Cl(t);break;case 22:t.memoizedState===null&&Cl(t);break;case 30:Cl(t);break;default:Cl(t)}e=e.sibling}}function wl(e,t,n){for(n&&=(t.subtreeFlags&8772)!=0,t=t.child;t!==null;){var r=t.alternate,i=e,a=t,o=a.flags;switch(a.tag){case 0:case 11:case 15:wl(i,a,n),Wc(4,a);break;case 1:if(wl(i,a,n),r=a,i=r.stateNode,typeof i.componentDidMount==`function`)try{i.componentDidMount()}catch(e){Z(r,r.return,e)}if(r=a,i=r.updateQueue,i!==null){var s=r.stateNode;try{var c=i.shared.hiddenCallbacks;if(c!==null)for(i.shared.hiddenCallbacks=null,i=0;i<c.length;i++)no(c[i],s)}catch(e){Z(r,r.return,e)}}n&&o&64&&Kc(a),Jc(a,a.return);break;case 27:nl(a);case 26:case 5:wl(i,a,n),n&&r===null&&o&4&&Xc(a),Jc(a,a.return);break;case 12:wl(i,a,n);break;case 31:wl(i,a,n),n&&o&4&&pl(i,a);break;case 13:wl(i,a,n),n&&o&4&&ml(i,a);break;case 22:a.memoizedState===null&&wl(i,a,n),Jc(a,a.return);break;case 30:break;default:wl(i,a,n)}t=t.sibling}}function Tl(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&ha(n))}function El(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ha(e))}function Dl(e,t,n,r){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Ol(e,t,n,r),t=t.sibling}function Ol(e,t,n,r){var i=t.flags;switch(t.tag){case 0:case 11:case 15:Dl(e,t,n,r),i&2048&&Wc(9,t);break;case 1:Dl(e,t,n,r);break;case 3:Dl(e,t,n,r),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ha(e)));break;case 12:if(i&2048){Dl(e,t,n,r),e=t.stateNode;try{var a=t.memoizedProps,o=a.id,s=a.onPostCommit;typeof s==`function`&&s(o,t.alternate===null?`mount`:`update`,e.passiveEffectDuration,-0)}catch(e){Z(t,t.return,e)}}else Dl(e,t,n,r);break;case 31:Dl(e,t,n,r);break;case 13:Dl(e,t,n,r);break;case 23:break;case 22:a=t.stateNode,o=t.alternate,t.memoizedState===null?a._visibility&2?Dl(e,t,n,r):(a._visibility|=2,kl(e,t,n,r,(t.subtreeFlags&10256)!=0||!1)):a._visibility&2?Dl(e,t,n,r):Al(e,t),i&2048&&Tl(o,t);break;case 24:Dl(e,t,n,r),i&2048&&El(t.alternate,t);break;default:Dl(e,t,n,r)}}function kl(e,t,n,r,i){for(i&&=(t.subtreeFlags&10256)!=0||!1,t=t.child;t!==null;){var a=e,o=t,s=n,c=r,l=o.flags;switch(o.tag){case 0:case 11:case 15:kl(a,o,s,c,i),Wc(8,o);break;case 23:break;case 22:var u=o.stateNode;o.memoizedState===null?(u._visibility|=2,kl(a,o,s,c,i)):u._visibility&2?kl(a,o,s,c,i):Al(a,o),i&&l&2048&&Tl(o.alternate,o);break;case 24:kl(a,o,s,c,i),i&&l&2048&&El(o.alternate,o);break;default:kl(a,o,s,c,i)}t=t.sibling}}function Al(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,r=t,i=r.flags;switch(r.tag){case 22:Al(n,r),i&2048&&Tl(r.alternate,r);break;case 24:Al(n,r),i&2048&&El(r.alternate,r);break;default:Al(n,r)}t=t.sibling}}var jl=8192;function Ml(e,t,n){if(e.subtreeFlags&jl)for(e=e.child;e!==null;)Nl(e,t,n),e=e.sibling}function Nl(e,t,n){switch(e.tag){case 26:Ml(e,t,n),e.flags&jl&&e.memoizedState!==null&&Gf(n,vl,e.memoizedState,e.memoizedProps);break;case 5:Ml(e,t,n);break;case 3:case 4:var r=vl;vl=gf(e.stateNode.containerInfo),Ml(e,t,n),vl=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=jl,jl=16777216,Ml(e,t,n),jl=r):Ml(e,t,n));break;default:Ml(e,t,n)}}function Pl(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Fl(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];ol=r,Rl(r,e)}Pl(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Il(e),e=e.sibling}function Il(e){switch(e.tag){case 0:case 11:case 15:Fl(e),e.flags&2048&&Gc(9,e,e.return);break;case 3:Fl(e);break;case 12:Fl(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Ll(e)):Fl(e);break;default:Fl(e)}}function Ll(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];ol=r,Rl(r,e)}Pl(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Gc(8,t,t.return),Ll(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Ll(t));break;default:Ll(t)}e=e.sibling}}function Rl(e,t){for(;ol!==null;){var n=ol;switch(n.tag){case 0:case 11:case 15:Gc(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var r=n.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:ha(n.memoizedState.cache)}if(r=n.child,r!==null)r.return=n,ol=r;else a:for(n=e;ol!==null;){r=ol;var i=r.sibling,a=r.return;if(ll(r),r===n){ol=null;break a}if(i!==null){i.return=a,ol=i;break a}ol=a}}}var zl={getCacheForType:function(e){var t=ca(N),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return ca(N).controller.signal}},Bl=typeof WeakMap==`function`?WeakMap:Map,W=0,G=null,K=null,q=0,J=0,Vl=null,Hl=!1,Ul=!1,Wl=!1,Gl=0,Y=0,Kl=0,ql=0,Jl=0,Yl=0,Xl=0,Zl=null,Ql=null,$l=!1,eu=0,tu=0,nu=1/0,ru=null,iu=null,X=0,au=null,ou=null,su=0,cu=0,lu=null,uu=null,du=0,fu=null;function pu(){return W&2&&q!==0?q&-q:w.T===null?pt():dd()}function mu(){if(Yl===0)if(!(q&536870912)||M){var e=Qe;Qe<<=1,!(Qe&3932160)&&(Qe=262144),Yl=e}else Yl=536870912;return e=lo.current,e!==null&&(e.flags|=32),Yl}function hu(e,t,n){(e===G&&(J===2||J===9)||e.cancelPendingCommit!==null)&&(Su(e,0),yu(e,q,Yl,!1)),ot(e,n),(!(W&2)||e!==G)&&(e===G&&(!(W&2)&&(ql|=n),Y===4&&yu(e,q,Yl,!1)),rd(e))}function gu(e,t,n){if(W&6)throw Error(s(327));var r=!n&&(t&127)==0&&(t&e.expiredLanes)===0||nt(e,t),i=r?Au(e,t):Ou(e,t,!0),a=r;do{if(i===0){Ul&&!r&&yu(e,t,0,!1);break}else{if(n=e.current.alternate,a&&!vu(n)){i=Ou(e,t,!1),a=!1;continue}if(i===2){if(a=t,e.errorRecoveryDisabledLanes&a)var o=0;else o=e.pendingLanes&-536870913,o=o===0?o&536870912?536870912:0:o;if(o!==0){t=o;a:{var c=e;i=Zl;var l=c.current.memoizedState.isDehydrated;if(l&&(Su(c,o).flags|=256),o=Ou(c,o,!1),o!==2){if(Wl&&!l){c.errorRecoveryDisabledLanes|=a,ql|=a,i=4;break a}a=Ql,Ql=i,a!==null&&(Ql===null?Ql=a:Ql.push.apply(Ql,a))}i=o}if(a=!1,i!==2)continue}}if(i===1){Su(e,0),yu(e,t,0,!0);break}a:{switch(r=e,a=i,a){case 0:case 1:throw Error(s(345));case 4:if((t&4194048)!==t)break;case 6:yu(r,t,Yl,!Hl);break a;case 2:Ql=null;break;case 3:case 5:break;default:throw Error(s(329))}if((t&62914560)===t&&(i=eu+300-Fe(),10<i)){if(yu(r,t,Yl,!Hl),tt(r,0,!0)!==0)break a;su=t,r.timeoutHandle=Kd(_u.bind(null,r,n,Ql,ru,$l,t,Yl,ql,Xl,Hl,a,`Throttled`,-0,0),i);break a}_u(r,n,Ql,ru,$l,t,Yl,ql,Xl,Hl,a,null,-0,0)}}break}while(1);rd(e)}function _u(e,t,n,r,i,a,o,s,c,l,u,d,f,p){if(e.timeoutHandle=-1,d=t.subtreeFlags,d&8192||(d&16785408)==16785408){d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:cn},Nl(t,a,d);var m=(a&62914560)===a?eu-Fe():(a&4194048)===a?tu-Fe():0;if(m=qf(d,m),m!==null){su=a,e.cancelPendingCommit=m(Lu.bind(null,e,t,a,n,r,i,o,s,c,u,d,null,f,p)),yu(e,a,o,!l);return}}Lu(e,t,a,n,r,i,o,s,c)}function vu(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!Ar(a(),i))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function yu(e,t,n,r){t&=~Jl,t&=~ql,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var i=t;0<i;){var a=31-qe(i),o=1<<a;r[a]=-1,i&=~o}n!==0&&ct(e,n,t)}function bu(){return W&6?!0:(id(0,!1),!1)}function xu(){if(K!==null){if(J===0)var e=K.return;else e=K,ea=$i=null,No(e),Ra=null,za=0,e=K;for(;e!==null;)Uc(e.alternate,e),e=e.return;K=null}}function Su(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,qd(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),su=0,xu(),G=e,K=n=vi(e.current,null),q=t,J=0,Vl=null,Hl=!1,Ul=nt(e,t),Wl=!1,Xl=Yl=Jl=ql=Kl=Y=0,Ql=Zl=null,$l=!1,t&8&&(t|=t&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=t;0<r;){var i=31-qe(r),a=1<<i;t|=e[i],r&=~a}return Gl=t,ci(),n}function Cu(e,t){F=null,w.H=Hs,t===Oa||t===Aa?(t=Ia(),J=3):t===ka?(t=Ia(),J=4):J=t===oc?8:typeof t==`object`&&t&&typeof t.then==`function`?6:1,Vl=t,K===null&&(Y=1,ec(e,Ei(t,e.current)))}function wu(){var e=lo.current;return e===null?!0:(q&4194048)===q?uo===null:(q&62914560)===q||q&536870912?e===uo:!1}function Tu(){var e=w.H;return w.H=Hs,e===null?Hs:e}function Eu(){var e=w.A;return w.A=zl,e}function Du(){Y=4,Hl||(q&4194048)!==q&&lo.current!==null||(Ul=!0),!(Kl&134217727)&&!(ql&134217727)||G===null||yu(G,q,Yl,!1)}function Ou(e,t,n){var r=W;W|=2;var i=Tu(),a=Eu();(G!==e||q!==t)&&(ru=null,Su(e,t)),t=!1;var o=Y;a:do try{if(J!==0&&K!==null){var s=K,c=Vl;switch(J){case 8:xu(),o=6;break a;case 3:case 2:case 9:case 6:lo.current===null&&(t=!0);var l=J;if(J=0,Vl=null,Pu(e,s,c,l),n&&Ul){o=0;break a}break;default:l=J,J=0,Vl=null,Pu(e,s,c,l)}}ku(),o=Y;break}catch(t){Cu(e,t)}while(1);return t&&e.shellSuspendCounter++,ea=$i=null,W=r,w.H=i,w.A=a,K===null&&(G=null,q=0,ci()),o}function ku(){for(;K!==null;)Mu(K)}function Au(e,t){var n=W;W|=2;var r=Tu(),i=Eu();G!==e||q!==t?(ru=null,nu=Fe()+500,Su(e,t)):Ul=nt(e,t);a:do try{if(J!==0&&K!==null){t=K;var a=Vl;b:switch(J){case 1:J=0,Vl=null,Pu(e,t,a,1);break;case 2:case 9:if(Ma(a)){J=0,Vl=null,Nu(t);break}t=function(){J!==2&&J!==9||G!==e||(J=7),rd(e)},a.then(t,t);break a;case 3:J=7;break a;case 4:J=5;break a;case 7:Ma(a)?(J=0,Vl=null,Nu(t)):(J=0,Vl=null,Pu(e,t,a,7));break;case 5:var o=null;switch(K.tag){case 26:o=K.memoizedState;case 5:case 27:var c=K;if(o?Wf(o):c.stateNode.complete){J=0,Vl=null;var l=c.sibling;if(l!==null)K=l;else{var u=c.return;u===null?K=null:(K=u,Fu(u))}break b}}J=0,Vl=null,Pu(e,t,a,5);break;case 6:J=0,Vl=null,Pu(e,t,a,6);break;case 8:xu(),Y=6;break a;default:throw Error(s(462))}}ju();break}catch(t){Cu(e,t)}while(1);return ea=$i=null,w.H=r,w.A=i,W=n,K===null?(G=null,q=0,ci(),Y):0}function ju(){for(;K!==null&&!Ne();)Mu(K)}function Mu(e){var t=Fc(e.alternate,e,Gl);e.memoizedProps=e.pendingProps,t===null?Fu(e):K=t}function Nu(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=yc(n,t,t.pendingProps,t.type,void 0,q);break;case 11:t=yc(n,t,t.pendingProps,t.type.render,t.ref,q);break;case 5:No(t);default:Uc(n,t),t=K=yi(t,Gl),t=Fc(n,t,Gl)}e.memoizedProps=e.pendingProps,t===null?Fu(e):K=t}function Pu(e,t,n,r){ea=$i=null,No(t),Ra=null,za=0;var i=t.return;try{if(ac(e,i,t,n,q)){Y=1,ec(e,Ei(n,e.current)),K=null;return}}catch(t){if(i!==null)throw K=i,t;Y=1,ec(e,Ei(n,e.current)),K=null;return}t.flags&32768?(M||r===1?e=!0:Ul||q&536870912?e=!1:(Hl=e=!0,(r===2||r===9||r===3||r===6)&&(r=lo.current,r!==null&&r.tag===13&&(r.flags|=16384))),Iu(t,e)):Fu(t)}function Fu(e){var t=e;do{if(t.flags&32768){Iu(t,Hl);return}e=t.return;var n=Vc(t.alternate,t,Gl);if(n!==null){K=n;return}if(t=t.sibling,t!==null){K=t;return}K=t=e}while(t!==null);Y===0&&(Y=5)}function Iu(e,t){do{var n=Hc(e.alternate,e);if(n!==null){n.flags&=32767,K=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){K=e;return}K=e=n}while(e!==null);Y=6,K=null}function Lu(e,t,n,r,i,a,o,c,l){e.cancelPendingCommit=null;do Hu();while(X!==0);if(W&6)throw Error(s(327));if(t!==null){if(t===e.current)throw Error(s(177));if(a=t.lanes|t.childLanes,a|=si,st(e,n,a,o,c,l),e===G&&(K=G=null,q=0),ou=t,au=e,su=n,cu=a,lu=i,uu=r,t.subtreeFlags&10256||t.flags&10256?(e.callbackNode=null,e.callbackPriority=0,Xu(ze,function(){return Uu(),null})):(e.callbackNode=null,e.callbackPriority=0),r=(t.flags&13878)!=0,t.subtreeFlags&13878||r){r=w.T,w.T=null,i=T.p,T.p=2,o=W,W|=4;try{sl(e,t,n)}finally{W=o,T.p=i,w.T=r}}X=1,Ru(),zu(),Bu()}}function Ru(){if(X===1){X=0;var e=au,t=ou,n=(t.flags&13878)!=0;if(t.subtreeFlags&13878||n){n=w.T,w.T=null;var r=T.p;T.p=2;var i=W;W|=4;try{yl(t,e);var a=zd,o=Fr(e.containerInfo),s=a.focusedElem,c=a.selectionRange;if(o!==s&&s&&s.ownerDocument&&Pr(s.ownerDocument.documentElement,s)){if(c!==null&&Ir(s)){var l=c.start,u=c.end;if(u===void 0&&(u=l),`selectionStart`in s)s.selectionStart=l,s.selectionEnd=Math.min(u,s.value.length);else{var d=s.ownerDocument||document,f=d&&d.defaultView||window;if(f.getSelection){var p=f.getSelection(),m=s.textContent.length,h=Math.min(c.start,m),g=c.end===void 0?h:Math.min(c.end,m);!p.extend&&h>g&&(o=g,g=h,h=o);var _=Nr(s,h),v=Nr(s,g);if(_&&v&&(p.rangeCount!==1||p.anchorNode!==_.node||p.anchorOffset!==_.offset||p.focusNode!==v.node||p.focusOffset!==v.offset)){var y=d.createRange();y.setStart(_.node,_.offset),p.removeAllRanges(),h>g?(p.addRange(y),p.extend(v.node,v.offset)):(y.setEnd(v.node,v.offset),p.addRange(y))}}}}for(d=[],p=s;p=p.parentNode;)p.nodeType===1&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof s.focus==`function`&&s.focus(),s=0;s<d.length;s++){var b=d[s];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}sp=!!Rd,zd=Rd=null}finally{W=i,T.p=r,w.T=n}}e.current=t,X=2}}function zu(){if(X===2){X=0;var e=au,t=ou,n=(t.flags&8772)!=0;if(t.subtreeFlags&8772||n){n=w.T,w.T=null;var r=T.p;T.p=2;var i=W;W|=4;try{cl(e,t.alternate,t)}finally{W=i,T.p=r,w.T=n}}X=3}}function Bu(){if(X===4||X===3){X=0,Pe();var e=au,t=ou,n=su,r=uu;t.subtreeFlags&10256||t.flags&10256?X=5:(X=0,ou=au=null,Vu(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(iu=null),ft(n),t=t.stateNode,Ge&&typeof Ge.onCommitFiberRoot==`function`)try{Ge.onCommitFiberRoot(We,t,void 0,(t.current.flags&128)==128)}catch{}if(r!==null){t=w.T,i=T.p,T.p=2,w.T=null;try{for(var a=e.onRecoverableError,o=0;o<r.length;o++){var s=r[o];a(s.value,{componentStack:s.stack})}}finally{w.T=t,T.p=i}}su&3&&Hu(),rd(e),i=e.pendingLanes,n&261930&&i&42?e===fu?du++:(du=0,fu=e):du=0,id(0,!1)}}function Vu(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,ha(t)))}function Hu(){return Ru(),zu(),Bu(),Uu()}function Uu(){if(X!==5)return!1;var e=au,t=cu;cu=0;var n=ft(su),r=w.T,i=T.p;try{T.p=32>n?32:n,w.T=null,n=lu,lu=null;var a=au,o=su;if(X=0,ou=au=null,su=0,W&6)throw Error(s(331));var c=W;if(W|=4,Il(a.current),Ol(a,a.current,o,n),W=c,id(0,!1),Ge&&typeof Ge.onPostCommitFiberRoot==`function`)try{Ge.onPostCommitFiberRoot(We,a)}catch{}return!0}finally{T.p=i,w.T=r,Vu(e,t)}}function Wu(e,t,n){t=Ei(n,t),t=nc(e.stateNode,t,2),e=Xa(e,t,2),e!==null&&(ot(e,2),rd(e))}function Z(e,t,n){if(e.tag===3)Wu(e,e,n);else for(;t!==null;){if(t.tag===3){Wu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError==`function`||typeof r.componentDidCatch==`function`&&(iu===null||!iu.has(r))){e=Ei(n,e),n=rc(2),r=Xa(t,n,2),r!==null&&(ic(n,r,t,e),ot(r,2),rd(r));break}}t=t.return}}function Gu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Bl;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(Wl=!0,i.add(n),e=Ku.bind(null,e,t,n),t.then(e,e))}function Ku(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,G===e&&(q&n)===n&&(Y===4||Y===3&&(q&62914560)===q&&300>Fe()-eu?!(W&2)&&Su(e,0):Jl|=n,Xl===q&&(Xl=0)),rd(e)}function qu(e,t){t===0&&(t=it()),e=di(e,t),e!==null&&(ot(e,t),rd(e))}function Ju(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),qu(e,n)}function Yu(e,t){var n=0;switch(e.tag){case 31:case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(s(314))}r!==null&&r.delete(t),qu(e,n)}function Xu(e,t){return je(e,t)}var Zu=null,Qu=null,$u=!1,ed=!1,td=!1,nd=0;function rd(e){e!==Qu&&e.next===null&&(Qu===null?Zu=Qu=e:Qu=Qu.next=e),ed=!0,$u||($u=!0,ud())}function id(e,t){if(!td&&ed){td=!0;do for(var n=!1,r=Zu;r!==null;){if(!t)if(e!==0){var i=r.pendingLanes;if(i===0)var a=0;else{var o=r.suspendedLanes,s=r.pingedLanes;a=(1<<31-qe(42|e)+1)-1,a&=i&~(o&~s),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,ld(r,a))}else a=q,a=tt(r,r===G?a:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),!(a&3)||nt(r,a)||(n=!0,ld(r,a));r=r.next}while(n);td=!1}}function ad(){od()}function od(){ed=$u=!1;var e=0;nd!==0&&Gd()&&(e=nd);for(var t=Fe(),n=null,r=Zu;r!==null;){var i=r.next,a=sd(r,t);a===0?(r.next=null,n===null?Zu=i:n.next=i,i===null&&(Qu=n)):(n=r,(e!==0||a&3)&&(ed=!0)),r=i}X!==0&&X!==5||id(e,!1),nd!==0&&(nd=0)}function sd(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var o=31-qe(a),s=1<<o,c=i[o];c===-1?((s&n)===0||(s&r)!==0)&&(i[o]=rt(s,t)):c<=t&&(e.expiredLanes|=s),a&=~s}if(t=G,n=q,n=tt(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,n===0||e===t&&(J===2||J===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&Me(r),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||nt(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(r!==null&&Me(r),ft(n)){case 2:case 8:n=Re;break;case 32:n=ze;break;case 268435456:n=Ve;break;default:n=ze}return r=cd.bind(null,e),n=je(n,r),e.callbackPriority=t,e.callbackNode=n,t}return r!==null&&r!==null&&Me(r),e.callbackPriority=2,e.callbackNode=null,2}function cd(e,t){if(X!==0&&X!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Hu()&&e.callbackNode!==n)return null;var r=q;return r=tt(e,e===G?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(gu(e,r,t),sd(e,Fe()),e.callbackNode!=null&&e.callbackNode===n?cd.bind(null,e):null)}function ld(e,t){if(Hu())return null;gu(e,t,!0)}function ud(){Yd(function(){W&6?je(Le,ad):od()})}function dd(){if(nd===0){var e=va;e===0&&(e=Ze,Ze<<=1,!(Ze&261888)&&(Ze=256)),nd=e}return nd}function fd(e){return e==null||typeof e==`symbol`||typeof e==`boolean`?null:typeof e==`function`?e:sn(``+e)}function pd(e,t){var n=t.ownerDocument.createElement(`input`);return n.name=t.name,n.value=t.value,e.id&&n.setAttribute(`form`,e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function md(e,t,n,r,i){if(t===`submit`&&n&&n.stateNode===i){var a=fd((i[_t]||null).action),o=r.submitter;o&&(t=(t=o[_t]||null)?fd(t.formAction):o.getAttribute(`formAction`),t!==null&&(a=t,o=null));var s=new kn(`action`,`action`,null,r,i);e.push({event:s,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(nd!==0){var e=o?pd(i,o):new FormData(i);Os(n,{pending:!0,data:e,method:i.method,action:a},null,e)}}else typeof a==`function`&&(s.preventDefault(),e=o?pd(i,o):new FormData(i),Os(n,{pending:!0,data:e,method:i.method,action:a},a,e))},currentTarget:i}]})}}for(var hd=0;hd<ni.length;hd++){var gd=ni[hd];ri(gd.toLowerCase(),`on`+(gd[0].toUpperCase()+gd.slice(1)))}ri(Jr,`onAnimationEnd`),ri(Yr,`onAnimationIteration`),ri(Xr,`onAnimationStart`),ri(`dblclick`,`onDoubleClick`),ri(`focusin`,`onFocus`),ri(`focusout`,`onBlur`),ri(Zr,`onTransitionRun`),ri(Qr,`onTransitionStart`),ri($r,`onTransitionCancel`),ri(ei,`onTransitionEnd`),Nt(`onMouseEnter`,[`mouseout`,`mouseover`]),Nt(`onMouseLeave`,[`mouseout`,`mouseover`]),Nt(`onPointerEnter`,[`pointerout`,`pointerover`]),Nt(`onPointerLeave`,[`pointerout`,`pointerover`]),Mt(`onChange`,`change click focusin focusout input keydown keyup selectionchange`.split(` `)),Mt(`onSelect`,`focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)),Mt(`onBeforeInput`,[`compositionend`,`keypress`,`textInput`,`paste`]),Mt(`onCompositionEnd`,`compositionend focusout keydown keypress keyup mousedown`.split(` `)),Mt(`onCompositionStart`,`compositionstart focusout keydown keypress keyup mousedown`.split(` `)),Mt(`onCompositionUpdate`,`compositionupdate focusout keydown keypress keyup mousedown`.split(` `));var _d=`abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `),vd=new Set(`beforetoggle cancel close invalid load scroll scrollend toggle`.split(` `).concat(_d));function yd(e,t){t=(t&4)!=0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;a:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],c=s.instance,l=s.currentTarget;if(s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){ii(e)}i.currentTarget=null,a=c}else for(o=0;o<r.length;o++){if(s=r[o],c=s.instance,l=s.currentTarget,s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){ii(e)}i.currentTarget=null,a=c}}}}function Q(e,t){var n=t[yt];n===void 0&&(n=t[yt]=new Set);var r=e+`__bubble`;n.has(r)||(Cd(t,e,2,!1),n.add(r))}function bd(e,t,n){var r=0;t&&(r|=4),Cd(n,e,r,t)}var xd=`_reactListening`+Math.random().toString(36).slice(2);function Sd(e){if(!e[xd]){e[xd]=!0,At.forEach(function(t){t!==`selectionchange`&&(vd.has(t)||bd(t,!1,e),bd(t,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[xd]||(t[xd]=!0,bd(`selectionchange`,!1,t))}}function Cd(e,t,n,r){switch(mp(t)){case 2:var i=cp;break;case 8:i=lp;break;default:i=up}n=i.bind(null,t,n,e),i=void 0,!vn||t!==`touchstart`&&t!==`touchmove`&&t!==`wheel`||(i=!0),r?i===void 0?e.addEventListener(t,n,!0):e.addEventListener(t,n,{capture:!0,passive:i}):i===void 0?e.addEventListener(t,n,!1):e.addEventListener(t,n,{passive:i})}function wd(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)a:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var s=r.stateNode.containerInfo;if(s===i)break;if(o===4)for(o=r.return;o!==null;){var c=o.tag;if((c===3||c===4)&&o.stateNode.containerInfo===i)return;o=o.return}for(;s!==null;){if(o=Tt(s),o===null)return;if(c=o.tag,c===5||c===6||c===26||c===27){r=a=o;continue a}s=s.parentNode}}r=r.return}hn(function(){var r=a,i=un(n),o=[];a:{var s=ti.get(e);if(s!==void 0){var c=kn,u=e;switch(e){case`keypress`:if(wn(n)===0)break a;case`keydown`:case`keyup`:c=qn;break;case`focusin`:u=`focus`,c=Rn;break;case`focusout`:u=`blur`,c=Rn;break;case`beforeblur`:case`afterblur`:c=Rn;break;case`click`:if(n.button===2)break a;case`auxclick`:case`dblclick`:case`mousedown`:case`mousemove`:case`mouseup`:case`mouseout`:case`mouseover`:case`contextmenu`:c=In;break;case`drag`:case`dragend`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`dragstart`:case`drop`:c=Ln;break;case`touchcancel`:case`touchend`:case`touchmove`:case`touchstart`:c=Yn;break;case Jr:case Yr:case Xr:c=zn;break;case ei:c=Xn;break;case`scroll`:case`scrollend`:c=jn;break;case`wheel`:c=Zn;break;case`copy`:case`cut`:case`paste`:c=Bn;break;case`gotpointercapture`:case`lostpointercapture`:case`pointercancel`:case`pointerdown`:case`pointermove`:case`pointerout`:case`pointerover`:case`pointerup`:c=Jn;break;case`toggle`:case`beforetoggle`:c=Qn}var d=(t&4)!=0,f=!d&&(e===`scroll`||e===`scrollend`),p=d?s===null?null:s+`Capture`:s;d=[];for(var m=r,h;m!==null;){var g=m;if(h=g.stateNode,g=g.tag,g!==5&&g!==26&&g!==27||h===null||p===null||(g=gn(m,p),g!=null&&d.push(Td(m,g,h))),f)break;m=m.return}0<d.length&&(s=new c(s,u,null,n,i),o.push({event:s,listeners:d}))}}if(!(t&7)){a:{if(s=e===`mouseover`||e===`pointerover`,c=e===`mouseout`||e===`pointerout`,s&&n!==ln&&(u=n.relatedTarget||n.fromElement)&&(Tt(u)||u[vt]))break a;if((c||s)&&(s=i.window===i?i:(s=i.ownerDocument)?s.defaultView||s.parentWindow:window,c?(u=n.relatedTarget||n.toElement,c=r,u=u?Tt(u):null,u!==null&&(f=l(u),d=u.tag,u!==f||d!==5&&d!==27&&d!==6)&&(u=null)):(c=null,u=r),c!==u)){if(d=In,g=`onMouseLeave`,p=`onMouseEnter`,m=`mouse`,(e===`pointerout`||e===`pointerover`)&&(d=Jn,g=`onPointerLeave`,p=`onPointerEnter`,m=`pointer`),f=c==null?s:Dt(c),h=u==null?s:Dt(u),s=new d(g,m+`leave`,c,n,i),s.target=f,s.relatedTarget=h,g=null,Tt(i)===r&&(d=new d(p,m+`enter`,u,n,i),d.target=h,d.relatedTarget=f,g=d),f=g,c&&u)b:{for(d=Dd,p=c,m=u,h=0,g=p;g;g=d(g))h++;g=0;for(var _=m;_;_=d(_))g++;for(;0<h-g;)p=d(p),h--;for(;0<g-h;)m=d(m),g--;for(;h--;){if(p===m||m!==null&&p===m.alternate){d=p;break b}p=d(p),m=d(m)}d=null}else d=null;c!==null&&Od(o,s,c,d,!1),u!==null&&f!==null&&Od(o,f,u,d,!0)}}a:{if(s=r?Dt(r):window,c=s.nodeName&&s.nodeName.toLowerCase(),c===`select`||c===`input`&&s.type===`file`)var v=vr;else if(fr(s))if(yr)v=Or;else{v=Er;var y=Tr}else c=s.nodeName,!c||c.toLowerCase()!==`input`||s.type!==`checkbox`&&s.type!==`radio`?r&&rn(r.elementType)&&(v=vr):v=Dr;if(v&&=v(e,r)){pr(o,v,n,i);break a}y&&y(e,s,r),e===`focusout`&&r&&s.type===`number`&&r.memoizedProps.value!=null&&A(s,`number`,s.value)}switch(y=r?Dt(r):window,e){case`focusin`:(fr(y)||y.contentEditable===`true`)&&(Rr=y,zr=r,Br=null);break;case`focusout`:Br=zr=Rr=null;break;case`mousedown`:Vr=!0;break;case`contextmenu`:case`mouseup`:case`dragend`:Vr=!1,Hr(o,n,i);break;case`selectionchange`:if(Lr)break;case`keydown`:case`keyup`:Hr(o,n,i)}var b;if(er)b:{switch(e){case`compositionstart`:var x=`onCompositionStart`;break b;case`compositionend`:x=`onCompositionEnd`;break b;case`compositionupdate`:x=`onCompositionUpdate`;break b}x=void 0}else cr?or(e,n)&&(x=`onCompositionEnd`):e===`keydown`&&n.keyCode===229&&(x=`onCompositionStart`);x&&(rr&&n.locale!==`ko`&&(cr||x!==`onCompositionStart`?x===`onCompositionEnd`&&cr&&(b=Cn()):(bn=i,xn=`value`in bn?bn.value:bn.textContent,cr=!0)),y=Ed(r,x),0<y.length&&(x=new Vn(x,e,null,n,i),o.push({event:x,listeners:y}),b?x.data=b:(b=sr(n),b!==null&&(x.data=b)))),(b=nr?lr(e,n):ur(e,n))&&(x=Ed(r,`onBeforeInput`),0<x.length&&(y=new Vn(`onBeforeInput`,`beforeinput`,null,n,i),o.push({event:y,listeners:x}),y.data=b)),md(o,e,r,n,i)}yd(o,t)})}function Td(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ed(e,t){for(var n=t+`Capture`,r=[];e!==null;){var i=e,a=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||a===null||(i=gn(e,n),i!=null&&r.unshift(Td(e,i,a)),i=gn(e,t),i!=null&&r.push(Td(e,i,a))),e.tag===3)return r;e=e.return}return[]}function Dd(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Od(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,c=s.alternate,l=s.stateNode;if(s=s.tag,c!==null&&c===r)break;s!==5&&s!==26&&s!==27||l===null||(c=l,i?(l=gn(n,a),l!=null&&o.unshift(Td(n,l,c))):i||(l=gn(n,a),l!=null&&o.push(Td(n,l,c)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var kd=/\r\n?/g,Ad=/\u0000|\uFFFD/g;function jd(e){return(typeof e==`string`?e:``+e).replace(kd,`
`).replace(Ad,``)}function Md(e,t){return t=jd(t),jd(e)===t}function $(e,t,n,r,i,a){switch(n){case`children`:typeof r==`string`?t===`body`||t===`textarea`&&r===``||$t(e,r):(typeof r==`number`||typeof r==`bigint`)&&t!==`body`&&$t(e,``+r);break;case`className`:zt(e,`class`,r);break;case`tabIndex`:zt(e,`tabindex`,r);break;case`dir`:case`role`:case`viewBox`:case`width`:case`height`:zt(e,n,r);break;case`style`:nn(e,r,a);break;case`data`:if(t!==`object`){zt(e,`data`,r);break}case`src`:case`href`:if(r===``&&(t!==`a`||n!==`href`)){e.removeAttribute(n);break}if(r==null||typeof r==`function`||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=sn(``+r),e.setAttribute(n,r);break;case`action`:case`formAction`:if(typeof r==`function`){e.setAttribute(n,`javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`);break}else typeof a==`function`&&(n===`formAction`?(t!==`input`&&$(e,t,`name`,i.name,i,null),$(e,t,`formEncType`,i.formEncType,i,null),$(e,t,`formMethod`,i.formMethod,i,null),$(e,t,`formTarget`,i.formTarget,i,null)):($(e,t,`encType`,i.encType,i,null),$(e,t,`method`,i.method,i,null),$(e,t,`target`,i.target,i,null)));if(r==null||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=sn(``+r),e.setAttribute(n,r);break;case`onClick`:r!=null&&(e.onclick=cn);break;case`onScroll`:r!=null&&Q(`scroll`,e);break;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(s(61));if(n=r.__html,n!=null){if(i.children!=null)throw Error(s(60));e.innerHTML=n}}break;case`multiple`:e.multiple=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`muted`:e.muted=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`defaultValue`:case`defaultChecked`:case`innerHTML`:case`ref`:break;case`autoFocus`:break;case`xlinkHref`:if(r==null||typeof r==`function`||typeof r==`boolean`||typeof r==`symbol`){e.removeAttribute(`xlink:href`);break}n=sn(``+r),e.setAttributeNS(`http://www.w3.org/1999/xlink`,`xlink:href`,n);break;case`contentEditable`:case`spellCheck`:case`draggable`:case`value`:case`autoReverse`:case`externalResourcesRequired`:case`focusable`:case`preserveAlpha`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``+r):e.removeAttribute(n);break;case`inert`:case`allowFullScreen`:case`async`:case`autoPlay`:case`controls`:case`default`:case`defer`:case`disabled`:case`disablePictureInPicture`:case`disableRemotePlayback`:case`formNoValidate`:case`hidden`:case`loop`:case`noModule`:case`noValidate`:case`open`:case`playsInline`:case`readOnly`:case`required`:case`reversed`:case`scoped`:case`seamless`:case`itemScope`:r&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``):e.removeAttribute(n);break;case`capture`:case`download`:!0===r?e.setAttribute(n,``):!1!==r&&r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,r):e.removeAttribute(n);break;case`cols`:case`rows`:case`size`:case`span`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case`rowSpan`:case`start`:r==null||typeof r==`function`||typeof r==`symbol`||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case`popover`:Q(`beforetoggle`,e),Q(`toggle`,e),Rt(e,`popover`,r);break;case`xlinkActuate`:Bt(e,`http://www.w3.org/1999/xlink`,`xlink:actuate`,r);break;case`xlinkArcrole`:Bt(e,`http://www.w3.org/1999/xlink`,`xlink:arcrole`,r);break;case`xlinkRole`:Bt(e,`http://www.w3.org/1999/xlink`,`xlink:role`,r);break;case`xlinkShow`:Bt(e,`http://www.w3.org/1999/xlink`,`xlink:show`,r);break;case`xlinkTitle`:Bt(e,`http://www.w3.org/1999/xlink`,`xlink:title`,r);break;case`xlinkType`:Bt(e,`http://www.w3.org/1999/xlink`,`xlink:type`,r);break;case`xmlBase`:Bt(e,`http://www.w3.org/XML/1998/namespace`,`xml:base`,r);break;case`xmlLang`:Bt(e,`http://www.w3.org/XML/1998/namespace`,`xml:lang`,r);break;case`xmlSpace`:Bt(e,`http://www.w3.org/XML/1998/namespace`,`xml:space`,r);break;case`is`:Rt(e,`is`,r);break;case`innerText`:case`textContent`:break;default:(!(2<n.length)||n[0]!==`o`&&n[0]!==`O`||n[1]!==`n`&&n[1]!==`N`)&&(n=an.get(n)||n,Rt(e,n,r))}}function Nd(e,t,n,r,i,a){switch(n){case`style`:nn(e,r,a);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(s(61));if(n=r.__html,n!=null){if(i.children!=null)throw Error(s(60));e.innerHTML=n}}break;case`children`:typeof r==`string`?$t(e,r):(typeof r==`number`||typeof r==`bigint`)&&$t(e,``+r);break;case`onScroll`:r!=null&&Q(`scroll`,e);break;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);break;case`onClick`:r!=null&&(e.onclick=cn);break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`innerHTML`:case`ref`:break;case`innerText`:case`textContent`:break;default:if(!jt.hasOwnProperty(n))a:{if(n[0]===`o`&&n[1]===`n`&&(i=n.endsWith(`Capture`),t=n.slice(2,i?n.length-7:void 0),a=e[_t]||null,a=a==null?null:a[n],typeof a==`function`&&e.removeEventListener(t,a,i),typeof r==`function`)){typeof a!=`function`&&a!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,r,i);break a}n in e?e[n]=r:!0===r?e.setAttribute(n,``):Rt(e,n,r)}}}function Pd(e,t,n){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`img`:Q(`error`,e),Q(`load`,e);var r=!1,i=!1,a;for(a in n)if(n.hasOwnProperty(a)){var o=n[a];if(o!=null)switch(a){case`src`:r=!0;break;case`srcSet`:i=!0;break;case`children`:case`dangerouslySetInnerHTML`:throw Error(s(137,t));default:$(e,t,a,o,n,null)}}i&&$(e,t,`srcSet`,n.srcSet,n,null),r&&$(e,t,`src`,n.src,n,null);return;case`input`:Q(`invalid`,e);var c=a=o=i=null,l=null,u=null;for(r in n)if(n.hasOwnProperty(r)){var d=n[r];if(d!=null)switch(r){case`name`:i=d;break;case`type`:o=d;break;case`checked`:l=d;break;case`defaultChecked`:u=d;break;case`value`:a=d;break;case`defaultValue`:c=d;break;case`children`:case`dangerouslySetInnerHTML`:if(d!=null)throw Error(s(137,t));break;default:$(e,t,r,d,n,null)}}Yt(e,a,c,l,u,o,i,!1);return;case`select`:for(i in Q(`invalid`,e),r=o=a=null,n)if(n.hasOwnProperty(i)&&(c=n[i],c!=null))switch(i){case`value`:a=c;break;case`defaultValue`:o=c;break;case`multiple`:r=c;default:$(e,t,i,c,n,null)}t=a,n=o,e.multiple=!!r,t==null?n!=null&&Xt(e,!!r,n,!0):Xt(e,!!r,t,!1);return;case`textarea`:for(o in Q(`invalid`,e),a=i=r=null,n)if(n.hasOwnProperty(o)&&(c=n[o],c!=null))switch(o){case`value`:r=c;break;case`defaultValue`:i=c;break;case`children`:a=c;break;case`dangerouslySetInnerHTML`:if(c!=null)throw Error(s(91));break;default:$(e,t,o,c,n,null)}Qt(e,r,i,a);return;case`option`:for(l in n)if(n.hasOwnProperty(l)&&(r=n[l],r!=null))switch(l){case`selected`:e.selected=r&&typeof r!=`function`&&typeof r!=`symbol`;break;default:$(e,t,l,r,n,null)}return;case`dialog`:Q(`beforetoggle`,e),Q(`toggle`,e),Q(`cancel`,e),Q(`close`,e);break;case`iframe`:case`object`:Q(`load`,e);break;case`video`:case`audio`:for(r=0;r<_d.length;r++)Q(_d[r],e);break;case`image`:Q(`error`,e),Q(`load`,e);break;case`details`:Q(`toggle`,e);break;case`embed`:case`source`:case`link`:Q(`error`,e),Q(`load`,e);case`area`:case`base`:case`br`:case`col`:case`hr`:case`keygen`:case`meta`:case`param`:case`track`:case`wbr`:case`menuitem`:for(u in n)if(n.hasOwnProperty(u)&&(r=n[u],r!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:throw Error(s(137,t));default:$(e,t,u,r,n,null)}return;default:if(rn(t)){for(d in n)n.hasOwnProperty(d)&&(r=n[d],r!==void 0&&Nd(e,t,d,r,n,void 0));return}}for(c in n)n.hasOwnProperty(c)&&(r=n[c],r!=null&&$(e,t,c,r,n,null))}function Fd(e,t,n,r){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`input`:var i=null,a=null,o=null,c=null,l=null,u=null,d=null;for(m in n){var f=n[m];if(n.hasOwnProperty(m)&&f!=null)switch(m){case`checked`:break;case`value`:break;case`defaultValue`:l=f;default:r.hasOwnProperty(m)||$(e,t,m,null,r,f)}}for(var p in r){var m=r[p];if(f=n[p],r.hasOwnProperty(p)&&(m!=null||f!=null))switch(p){case`type`:a=m;break;case`name`:i=m;break;case`checked`:u=m;break;case`defaultChecked`:d=m;break;case`value`:o=m;break;case`defaultValue`:c=m;break;case`children`:case`dangerouslySetInnerHTML`:if(m!=null)throw Error(s(137,t));break;default:m!==f&&$(e,t,p,m,r,f)}}Jt(e,o,c,l,u,d,a,i);return;case`select`:for(a in m=o=c=p=null,n)if(l=n[a],n.hasOwnProperty(a)&&l!=null)switch(a){case`value`:break;case`multiple`:m=l;default:r.hasOwnProperty(a)||$(e,t,a,null,r,l)}for(i in r)if(a=r[i],l=n[i],r.hasOwnProperty(i)&&(a!=null||l!=null))switch(i){case`value`:p=a;break;case`defaultValue`:c=a;break;case`multiple`:o=a;default:a!==l&&$(e,t,i,a,r,l)}t=c,n=o,r=m,p==null?!!r!=!!n&&(t==null?Xt(e,!!n,n?[]:``,!1):Xt(e,!!n,t,!0)):Xt(e,!!n,p,!1);return;case`textarea`:for(c in m=p=null,n)if(i=n[c],n.hasOwnProperty(c)&&i!=null&&!r.hasOwnProperty(c))switch(c){case`value`:break;case`children`:break;default:$(e,t,c,null,r,i)}for(o in r)if(i=r[o],a=n[o],r.hasOwnProperty(o)&&(i!=null||a!=null))switch(o){case`value`:p=i;break;case`defaultValue`:m=i;break;case`children`:break;case`dangerouslySetInnerHTML`:if(i!=null)throw Error(s(91));break;default:i!==a&&$(e,t,o,i,r,a)}Zt(e,p,m);return;case`option`:for(var h in n)if(p=n[h],n.hasOwnProperty(h)&&p!=null&&!r.hasOwnProperty(h))switch(h){case`selected`:e.selected=!1;break;default:$(e,t,h,null,r,p)}for(l in r)if(p=r[l],m=n[l],r.hasOwnProperty(l)&&p!==m&&(p!=null||m!=null))switch(l){case`selected`:e.selected=p&&typeof p!=`function`&&typeof p!=`symbol`;break;default:$(e,t,l,p,r,m)}return;case`img`:case`link`:case`area`:case`base`:case`br`:case`col`:case`embed`:case`hr`:case`keygen`:case`meta`:case`param`:case`source`:case`track`:case`wbr`:case`menuitem`:for(var g in n)p=n[g],n.hasOwnProperty(g)&&p!=null&&!r.hasOwnProperty(g)&&$(e,t,g,null,r,p);for(u in r)if(p=r[u],m=n[u],r.hasOwnProperty(u)&&p!==m&&(p!=null||m!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:if(p!=null)throw Error(s(137,t));break;default:$(e,t,u,p,r,m)}return;default:if(rn(t)){for(var _ in n)p=n[_],n.hasOwnProperty(_)&&p!==void 0&&!r.hasOwnProperty(_)&&Nd(e,t,_,void 0,r,p);for(d in r)p=r[d],m=n[d],!r.hasOwnProperty(d)||p===m||p===void 0&&m===void 0||Nd(e,t,d,p,r,m);return}}for(var v in n)p=n[v],n.hasOwnProperty(v)&&p!=null&&!r.hasOwnProperty(v)&&$(e,t,v,null,r,p);for(f in r)p=r[f],m=n[f],!r.hasOwnProperty(f)||p===m||p==null&&m==null||$(e,t,f,p,r,m)}function Id(e){switch(e){case`css`:case`script`:case`font`:case`img`:case`image`:case`input`:case`link`:return!0;default:return!1}}function Ld(){if(typeof performance.getEntriesByType==`function`){for(var e=0,t=0,n=performance.getEntriesByType(`resource`),r=0;r<n.length;r++){var i=n[r],a=i.transferSize,o=i.initiatorType,s=i.duration;if(a&&s&&Id(o)){for(o=0,s=i.responseEnd,r+=1;r<n.length;r++){var c=n[r],l=c.startTime;if(l>s)break;var u=c.transferSize,d=c.initiatorType;u&&Id(d)&&(c=c.responseEnd,o+=u*(c<s?1:(s-l)/(c-l)))}if(--r,t+=8*(a+o)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e==`number`)?e:5}var Rd=null,zd=null;function Bd(e){return e.nodeType===9?e:e.ownerDocument}function Vd(e){switch(e){case`http://www.w3.org/2000/svg`:return 1;case`http://www.w3.org/1998/Math/MathML`:return 2;default:return 0}}function Hd(e,t){if(e===0)switch(t){case`svg`:return 1;case`math`:return 2;default:return 0}return e===1&&t===`foreignObject`?0:e}function Ud(e,t){return e===`textarea`||e===`noscript`||typeof t.children==`string`||typeof t.children==`number`||typeof t.children==`bigint`||typeof t.dangerouslySetInnerHTML==`object`&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Wd=null;function Gd(){var e=window.event;return e&&e.type===`popstate`?e===Wd?!1:(Wd=e,!0):(Wd=null,!1)}var Kd=typeof setTimeout==`function`?setTimeout:void 0,qd=typeof clearTimeout==`function`?clearTimeout:void 0,Jd=typeof Promise==`function`?Promise:void 0,Yd=typeof queueMicrotask==`function`?queueMicrotask:Jd===void 0?Kd:function(e){return Jd.resolve(null).then(e).catch(Xd)};function Xd(e){setTimeout(function(){throw e})}function Zd(e){return e===`head`}function Qd(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n===`/$`||n===`/&`){if(r===0){e.removeChild(i),Np(t);return}r--}else if(n===`$`||n===`$?`||n===`$~`||n===`$!`||n===`&`)r++;else if(n===`html`)pf(e.ownerDocument.documentElement);else if(n===`head`){n=e.ownerDocument.head,pf(n);for(var a=n.firstChild;a;){var o=a.nextSibling,s=a.nodeName;a[Ct]||s===`SCRIPT`||s===`STYLE`||s===`LINK`&&a.rel.toLowerCase()===`stylesheet`||n.removeChild(a),a=o}}else n===`body`&&pf(e.ownerDocument.body);n=i}while(n);Np(t)}function $d(e,t){var n=e;e=0;do{var r=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display=`none`):(n.style.display=n._stashedDisplay||``,n.getAttribute(`style`)===``&&n.removeAttribute(`style`)):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=``):n.nodeValue=n._stashedText||``),r&&r.nodeType===8)if(n=r.data,n===`/$`){if(e===0)break;e--}else n!==`$`&&n!==`$?`&&n!==`$~`&&n!==`$!`||e++;n=r}while(n)}function ef(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case`HTML`:case`HEAD`:case`BODY`:ef(n),wt(n);continue;case`SCRIPT`:case`STYLE`:continue;case`LINK`:if(n.rel.toLowerCase()===`stylesheet`)continue}e.removeChild(n)}}function tf(e,t,n,r){for(;e.nodeType===1;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&(e.nodeName!==`INPUT`||e.type!==`hidden`))break}else if(!r)if(t===`input`&&e.type===`hidden`){var a=i.name==null?null:``+i.name;if(i.type===`hidden`&&e.getAttribute(`name`)===a)return e}else return e;else if(!e[Ct])switch(t){case`meta`:if(!e.hasAttribute(`itemprop`))break;return e;case`link`:if(a=e.getAttribute(`rel`),a===`stylesheet`&&e.hasAttribute(`data-precedence`)||a!==i.rel||e.getAttribute(`href`)!==(i.href==null||i.href===``?null:i.href)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute(`title`)!==(i.title==null?null:i.title))break;return e;case`style`:if(e.hasAttribute(`data-precedence`))break;return e;case`script`:if(a=e.getAttribute(`src`),(a!==(i.src==null?null:i.src)||e.getAttribute(`type`)!==(i.type==null?null:i.type)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin))&&a&&e.hasAttribute(`async`)&&!e.hasAttribute(`itemprop`))break;return e;default:return e}if(e=cf(e.nextSibling),e===null)break}return null}function nf(e,t,n){if(t===``)return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!n||(e=cf(e.nextSibling),e===null))return null;return e}function rf(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!t||(e=cf(e.nextSibling),e===null))return null;return e}function af(e){return e.data===`$?`||e.data===`$~`}function of(e){return e.data===`$!`||e.data===`$?`&&e.ownerDocument.readyState!==`loading`}function sf(e,t){var n=e.ownerDocument;if(e.data===`$~`)e._reactRetry=t;else if(e.data!==`$?`||n.readyState!==`loading`)t();else{var r=function(){t(),n.removeEventListener(`DOMContentLoaded`,r)};n.addEventListener(`DOMContentLoaded`,r),e._reactRetry=r}}function cf(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t===`$`||t===`$!`||t===`$?`||t===`$~`||t===`&`||t===`F!`||t===`F`)break;if(t===`/$`||t===`/&`)return null}}return e}var lf=null;function uf(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`/$`||n===`/&`){if(t===0)return cf(e.nextSibling);t--}else n!==`$`&&n!==`$!`&&n!==`$?`&&n!==`$~`&&n!==`&`||t++}e=e.nextSibling}return null}function df(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`$`||n===`$!`||n===`$?`||n===`$~`||n===`&`){if(t===0)return e;t--}else n!==`/$`&&n!==`/&`||t++}e=e.previousSibling}return null}function ff(e,t,n){switch(t=Bd(n),e){case`html`:if(e=t.documentElement,!e)throw Error(s(452));return e;case`head`:if(e=t.head,!e)throw Error(s(453));return e;case`body`:if(e=t.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function pf(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);wt(e)}var mf=new Map,hf=new Set;function gf(e){return typeof e.getRootNode==`function`?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var _f=T.d;T.d={f:vf,r:yf,D:Sf,C:Cf,L:wf,m:Tf,X:Df,S:Ef,M:Of};function vf(){var e=_f.f(),t=bu();return e||t}function yf(e){var t=Et(e);t!==null&&t.tag===5&&t.type===`form`?As(t):_f.r(e)}var bf=typeof document>`u`?null:document;function xf(e,t,n){var r=bf;if(r&&typeof t==`string`&&t){var i=k(t);i=`link[rel="`+e+`"][href="`+i+`"]`,typeof n==`string`&&(i+=`[crossorigin="`+n+`"]`),hf.has(i)||(hf.add(i),e={rel:e,crossOrigin:n,href:t},r.querySelector(i)===null&&(t=r.createElement(`link`),Pd(t,`link`,e),kt(t),r.head.appendChild(t)))}}function Sf(e){_f.D(e),xf(`dns-prefetch`,e,null)}function Cf(e,t){_f.C(e,t),xf(`preconnect`,e,t)}function wf(e,t,n){_f.L(e,t,n);var r=bf;if(r&&e&&t){var i=`link[rel="preload"][as="`+k(t)+`"]`;t===`image`&&n&&n.imageSrcSet?(i+=`[imagesrcset="`+k(n.imageSrcSet)+`"]`,typeof n.imageSizes==`string`&&(i+=`[imagesizes="`+k(n.imageSizes)+`"]`)):i+=`[href="`+k(e)+`"]`;var a=i;switch(t){case`style`:a=Af(e);break;case`script`:a=Pf(e)}mf.has(a)||(e=h({rel:`preload`,href:t===`image`&&n&&n.imageSrcSet?void 0:e,as:t},n),mf.set(a,e),r.querySelector(i)!==null||t===`style`&&r.querySelector(jf(a))||t===`script`&&r.querySelector(Ff(a))||(t=r.createElement(`link`),Pd(t,`link`,e),kt(t),r.head.appendChild(t)))}}function Tf(e,t){_f.m(e,t);var n=bf;if(n&&e){var r=t&&typeof t.as==`string`?t.as:`script`,i=`link[rel="modulepreload"][as="`+k(r)+`"][href="`+k(e)+`"]`,a=i;switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:a=Pf(e)}if(!mf.has(a)&&(e=h({rel:`modulepreload`,href:e},t),mf.set(a,e),n.querySelector(i)===null)){switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:if(n.querySelector(Ff(a)))return}r=n.createElement(`link`),Pd(r,`link`,e),kt(r),n.head.appendChild(r)}}}function Ef(e,t,n){_f.S(e,t,n);var r=bf;if(r&&e){var i=Ot(r).hoistableStyles,a=Af(e);t||=`default`;var o=i.get(a);if(!o){var s={loading:0,preload:null};if(o=r.querySelector(jf(a)))s.loading=5;else{e=h({rel:`stylesheet`,href:e,"data-precedence":t},n),(n=mf.get(a))&&Rf(e,n);var c=o=r.createElement(`link`);kt(c),Pd(c,`link`,e),c._p=new Promise(function(e,t){c.onload=e,c.onerror=t}),c.addEventListener(`load`,function(){s.loading|=1}),c.addEventListener(`error`,function(){s.loading|=2}),s.loading|=4,Lf(o,t,r)}o={type:`stylesheet`,instance:o,count:1,state:s},i.set(a,o)}}}function Df(e,t){_f.X(e,t);var n=bf;if(n&&e){var r=Ot(n).hoistableScripts,i=Pf(e),a=r.get(i);a||(a=n.querySelector(Ff(i)),a||(e=h({src:e,async:!0},t),(t=mf.get(i))&&zf(e,t),a=n.createElement(`script`),kt(a),Pd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Of(e,t){_f.M(e,t);var n=bf;if(n&&e){var r=Ot(n).hoistableScripts,i=Pf(e),a=r.get(i);a||(a=n.querySelector(Ff(i)),a||(e=h({src:e,async:!0,type:`module`},t),(t=mf.get(i))&&zf(e,t),a=n.createElement(`script`),kt(a),Pd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function kf(e,t,n,r){var i=(i=ve.current)?gf(i):null;if(!i)throw Error(s(446));switch(e){case`meta`:case`title`:return null;case`style`:return typeof n.precedence==`string`&&typeof n.href==`string`?(t=Af(n.href),n=Ot(i).hoistableStyles,r=n.get(t),r||(r={type:`style`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};case`link`:if(n.rel===`stylesheet`&&typeof n.href==`string`&&typeof n.precedence==`string`){e=Af(n.href);var a=Ot(i).hoistableStyles,o=a.get(e);if(o||(i=i.ownerDocument||i,o={type:`stylesheet`,instance:null,count:0,state:{loading:0,preload:null}},a.set(e,o),(a=i.querySelector(jf(e)))&&!a._p&&(o.instance=a,o.state.loading=5),mf.has(e)||(n={rel:`preload`,as:`style`,href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},mf.set(e,n),a||Nf(i,e,n,o.state))),t&&r===null)throw Error(s(528,``));return o}if(t&&r!==null)throw Error(s(529,``));return null;case`script`:return t=n.async,n=n.src,typeof n==`string`&&t&&typeof t!=`function`&&typeof t!=`symbol`?(t=Pf(n),n=Ot(i).hoistableScripts,r=n.get(t),r||(r={type:`script`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};default:throw Error(s(444,e))}}function Af(e){return`href="`+k(e)+`"`}function jf(e){return`link[rel="stylesheet"][`+e+`]`}function Mf(e){return h({},e,{"data-precedence":e.precedence,precedence:null})}function Nf(e,t,n,r){e.querySelector(`link[rel="preload"][as="style"][`+t+`]`)?r.loading=1:(t=e.createElement(`link`),r.preload=t,t.addEventListener(`load`,function(){return r.loading|=1}),t.addEventListener(`error`,function(){return r.loading|=2}),Pd(t,`link`,n),kt(t),e.head.appendChild(t))}function Pf(e){return`[src="`+k(e)+`"]`}function Ff(e){return`script[async]`+e}function If(e,t,n){if(t.count++,t.instance===null)switch(t.type){case`style`:var r=e.querySelector(`style[data-href~="`+k(n.href)+`"]`);if(r)return t.instance=r,kt(r),r;var i=h({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement(`style`),kt(r),Pd(r,`style`,i),Lf(r,n.precedence,e),t.instance=r;case`stylesheet`:i=Af(n.href);var a=e.querySelector(jf(i));if(a)return t.state.loading|=4,t.instance=a,kt(a),a;r=Mf(n),(i=mf.get(i))&&Rf(r,i),a=(e.ownerDocument||e).createElement(`link`),kt(a);var o=a;return o._p=new Promise(function(e,t){o.onload=e,o.onerror=t}),Pd(a,`link`,r),t.state.loading|=4,Lf(a,n.precedence,e),t.instance=a;case`script`:return a=Pf(n.src),(i=e.querySelector(Ff(a)))?(t.instance=i,kt(i),i):(r=n,(i=mf.get(a))&&(r=h({},n),zf(r,i)),e=e.ownerDocument||e,i=e.createElement(`script`),kt(i),Pd(i,`link`,r),e.head.appendChild(i),t.instance=i);case`void`:return null;default:throw Error(s(443,t.type))}else t.type===`stylesheet`&&!(t.state.loading&4)&&(r=t.instance,t.state.loading|=4,Lf(r,n.precedence,e));return t.instance}function Lf(e,t,n){for(var r=n.querySelectorAll(`link[rel="stylesheet"][data-precedence],style[data-precedence]`),i=r.length?r[r.length-1]:null,a=i,o=0;o<r.length;o++){var s=r[o];if(s.dataset.precedence===t)a=s;else if(a!==i)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Rf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.title??=t.title}function zf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.integrity??=t.integrity}var Bf=null;function Vf(e,t,n){if(Bf===null){var r=new Map,i=Bf=new Map;i.set(n,r)}else i=Bf,r=i.get(n),r||(r=new Map,i.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var a=n[i];if(!(a[Ct]||a[gt]||e===`link`&&a.getAttribute(`rel`)===`stylesheet`)&&a.namespaceURI!==`http://www.w3.org/2000/svg`){var o=a.getAttribute(t)||``;o=e+o;var s=r.get(o);s?s.push(a):r.set(o,[a])}}return r}function Hf(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t===`title`?e.querySelector(`head > title`):null)}function Uf(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case`meta`:case`title`:return!0;case`style`:if(typeof t.precedence!=`string`||typeof t.href!=`string`||t.href===``)break;return!0;case`link`:if(typeof t.rel!=`string`||typeof t.href!=`string`||t.href===``||t.onLoad||t.onError)break;switch(t.rel){case`stylesheet`:return e=t.disabled,typeof t.precedence==`string`&&e==null;default:return!0}case`script`:if(t.async&&typeof t.async!=`function`&&typeof t.async!=`symbol`&&!t.onLoad&&!t.onError&&t.src&&typeof t.src==`string`)return!0}return!1}function Wf(e){return!(e.type===`stylesheet`&&!(e.state.loading&3))}function Gf(e,t,n,r){if(n.type===`stylesheet`&&(typeof r.media!=`string`||!1!==matchMedia(r.media).matches)&&!(n.state.loading&4)){if(n.instance===null){var i=Af(r.href),a=t.querySelector(jf(i));if(a){t=a._p,typeof t==`object`&&t&&typeof t.then==`function`&&(e.count++,e=Jf.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,kt(a);return}a=t.ownerDocument||t,r=Mf(r),(i=mf.get(i))&&Rf(r,i),a=a.createElement(`link`),kt(a);var o=a;o._p=new Promise(function(e,t){o.onload=e,o.onerror=t}),Pd(a,`link`,r),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&!(n.state.loading&3)&&(e.count++,n=Jf.bind(e),t.addEventListener(`load`,n),t.addEventListener(`error`,n))}}var Kf=0;function qf(e,t){return e.stylesheets&&e.count===0&&Xf(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var r=setTimeout(function(){if(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}},6e4+t);0<e.imgBytes&&Kf===0&&(Kf=62500*Ld());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend)){var t=e.unsuspend;e.unsuspend=null,t()}},(e.imgBytes>Kf?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(i)}}:null}function Jf(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Xf(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Yf=null;function Xf(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Yf=new Map,t.forEach(Zf,e),Yf=null,Jf.call(e))}function Zf(e,t){if(!(t.state.loading&4)){var n=Yf.get(e);if(n)var r=n.get(null);else{n=new Map,Yf.set(e,n);for(var i=e.querySelectorAll(`link[data-precedence],style[data-precedence]`),a=0;a<i.length;a++){var o=i[a];(o.nodeName===`LINK`||o.getAttribute(`media`)!==`not all`)&&(n.set(o.dataset.precedence,o),r=o)}r&&n.set(null,r)}i=t.instance,o=i.getAttribute(`data-precedence`),a=n.get(o)||r,a===r&&n.set(null,i),n.set(o,i),this.count++,r=Jf.bind(this),i.addEventListener(`load`,r),i.addEventListener(`error`,r),a?a.parentNode.insertBefore(i,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var Qf={$$typeof:S,Provider:null,Consumer:null,_currentValue:fe,_currentValue2:fe,_threadCount:0};function $f(e,t,n,r,i,a,o,s,c){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=at(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=at(0),this.hiddenUpdates=at(null),this.identifierPrefix=r,this.onUncaughtError=i,this.onCaughtError=a,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.incompleteTransitions=new Map}function ep(e,t,n,r,i,a,o,s,c,l,u,d){return e=new $f(e,t,n,o,c,l,u,d,s),t=1,!0===a&&(t|=24),a=gi(3,null,null,t),e.current=a,a.stateNode=e,t=ma(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:r,isDehydrated:n,cache:t},qa(a),e}function tp(e){return e?(e=mi,e):mi}function np(e,t,n,r,i,a){i=tp(i),r.context===null?r.context=i:r.pendingContext=i,r=Ya(t),r.payload={element:n},a=a===void 0?null:a,a!==null&&(r.callback=a),n=Xa(e,r,t),n!==null&&(hu(n,e,t),Za(n,e,t))}function rp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ip(e,t){rp(e,t),(e=e.alternate)&&rp(e,t)}function ap(e){if(e.tag===13||e.tag===31){var t=di(e,67108864);t!==null&&hu(t,e,67108864),ip(e,67108864)}}function op(e){if(e.tag===13||e.tag===31){var t=pu();t=dt(t);var n=di(e,t);n!==null&&hu(n,e,t),ip(e,t)}}var sp=!0;function cp(e,t,n,r){var i=w.T;w.T=null;var a=T.p;try{T.p=2,up(e,t,n,r)}finally{T.p=a,w.T=i}}function lp(e,t,n,r){var i=w.T;w.T=null;var a=T.p;try{T.p=8,up(e,t,n,r)}finally{T.p=a,w.T=i}}function up(e,t,n,r){if(sp){var i=dp(r);if(i===null)wd(e,t,r,fp,n),Cp(e,r);else if(Tp(i,e,t,n,r))r.stopPropagation();else if(Cp(e,r),t&4&&-1<Sp.indexOf(e)){for(;i!==null;){var a=Et(i);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var o=et(a.pendingLanes);if(o!==0){var s=a;for(s.pendingLanes|=2,s.entangledLanes|=2;o;){var c=1<<31-qe(o);s.entanglements[1]|=c,o&=~c}rd(a),!(W&6)&&(nu=Fe()+500,id(0,!1))}}break;case 31:case 13:s=di(a,2),s!==null&&hu(s,a,2),bu(),ip(a,2)}if(a=dp(r),a===null&&wd(e,t,r,fp,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else wd(e,t,r,null,n)}}function dp(e){return e=un(e),pp(e)}var fp=null;function pp(e){if(fp=null,e=Tt(e),e!==null){var t=l(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=u(t),e!==null)return e;e=null}else if(n===31){if(e=d(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return fp=e,null}function mp(e){switch(e){case`beforetoggle`:case`cancel`:case`click`:case`close`:case`contextmenu`:case`copy`:case`cut`:case`auxclick`:case`dblclick`:case`dragend`:case`dragstart`:case`drop`:case`focusin`:case`focusout`:case`input`:case`invalid`:case`keydown`:case`keypress`:case`keyup`:case`mousedown`:case`mouseup`:case`paste`:case`pause`:case`play`:case`pointercancel`:case`pointerdown`:case`pointerup`:case`ratechange`:case`reset`:case`resize`:case`seeked`:case`submit`:case`toggle`:case`touchcancel`:case`touchend`:case`touchstart`:case`volumechange`:case`change`:case`selectionchange`:case`textInput`:case`compositionstart`:case`compositionend`:case`compositionupdate`:case`beforeblur`:case`afterblur`:case`beforeinput`:case`blur`:case`fullscreenchange`:case`focus`:case`hashchange`:case`popstate`:case`select`:case`selectstart`:return 2;case`drag`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`mousemove`:case`mouseout`:case`mouseover`:case`pointermove`:case`pointerout`:case`pointerover`:case`scroll`:case`touchmove`:case`wheel`:case`mouseenter`:case`mouseleave`:case`pointerenter`:case`pointerleave`:return 8;case`message`:switch(Ie()){case Le:return 2;case Re:return 8;case ze:case Be:return 32;case Ve:return 268435456;default:return 32}default:return 32}}var hp=!1,gp=null,_p=null,vp=null,yp=new Map,bp=new Map,xp=[],Sp=`mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(` `);function Cp(e,t){switch(e){case`focusin`:case`focusout`:gp=null;break;case`dragenter`:case`dragleave`:_p=null;break;case`mouseover`:case`mouseout`:vp=null;break;case`pointerover`:case`pointerout`:yp.delete(t.pointerId);break;case`gotpointercapture`:case`lostpointercapture`:bp.delete(t.pointerId)}}function wp(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=Et(t),t!==null&&ap(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Tp(e,t,n,r,i){switch(t){case`focusin`:return gp=wp(gp,e,t,n,r,i),!0;case`dragenter`:return _p=wp(_p,e,t,n,r,i),!0;case`mouseover`:return vp=wp(vp,e,t,n,r,i),!0;case`pointerover`:var a=i.pointerId;return yp.set(a,wp(yp.get(a)||null,e,t,n,r,i)),!0;case`gotpointercapture`:return a=i.pointerId,bp.set(a,wp(bp.get(a)||null,e,t,n,r,i)),!0}return!1}function Ep(e){var t=Tt(e.target);if(t!==null){var n=l(t);if(n!==null){if(t=n.tag,t===13){if(t=u(n),t!==null){e.blockedOn=t,mt(e.priority,function(){op(n)});return}}else if(t===31){if(t=d(n),t!==null){e.blockedOn=t,mt(e.priority,function(){op(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Dp(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=dp(e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);ln=r,n.target.dispatchEvent(r),ln=null}else return t=Et(n),t!==null&&ap(t),e.blockedOn=n,!1;t.shift()}return!0}function Op(e,t,n){Dp(e)&&n.delete(t)}function kp(){hp=!1,gp!==null&&Dp(gp)&&(gp=null),_p!==null&&Dp(_p)&&(_p=null),vp!==null&&Dp(vp)&&(vp=null),yp.forEach(Op),bp.forEach(Op)}function Ap(e,n){e.blockedOn===n&&(e.blockedOn=null,hp||(hp=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,kp)))}var jp=null;function Mp(e){jp!==e&&(jp=e,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){jp===e&&(jp=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],i=e[t+2];if(typeof r!=`function`){if(pp(r||n)===null)continue;break}var a=Et(n);a!==null&&(e.splice(t,3),t-=3,Os(a,{pending:!0,data:i,method:n.method,action:r},r,i))}}))}function Np(e){function t(t){return Ap(t,e)}gp!==null&&Ap(gp,e),_p!==null&&Ap(_p,e),vp!==null&&Ap(vp,e),yp.forEach(t),bp.forEach(t);for(var n=0;n<xp.length;n++){var r=xp[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<xp.length&&(n=xp[0],n.blockedOn===null);)Ep(n),n.blockedOn===null&&xp.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(r=0;r<n.length;r+=3){var i=n[r],a=n[r+1],o=i[_t]||null;if(typeof a==`function`)o||Mp(n);else if(o){var s=null;if(a&&a.hasAttribute(`formAction`)){if(i=a,o=a[_t]||null)s=o.formAction;else if(pp(i)!==null)continue}else s=o.action;typeof s==`function`?n[r+1]=s:(n.splice(r,3),r-=3),Mp(n)}}}function Pp(){function e(e){e.canIntercept&&e.info===`react-transition`&&e.intercept({handler:function(){return new Promise(function(e){return i=e})},focusReset:`manual`,scroll:`manual`})}function t(){i!==null&&(i(),i=null),r||setTimeout(n,20)}function n(){if(!r&&!navigation.transition){var e=navigation.currentEntry;e&&e.url!=null&&navigation.navigate(e.url,{state:e.getState(),info:`react-transition`,history:`replace`})}}if(typeof navigation==`object`){var r=!1,i=null;return navigation.addEventListener(`navigate`,e),navigation.addEventListener(`navigatesuccess`,t),navigation.addEventListener(`navigateerror`,t),setTimeout(n,100),function(){r=!0,navigation.removeEventListener(`navigate`,e),navigation.removeEventListener(`navigatesuccess`,t),navigation.removeEventListener(`navigateerror`,t),i!==null&&(i(),i=null)}}}function Fp(e){this._internalRoot=e}Ip.prototype.render=Fp.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(s(409));var n=t.current;np(n,pu(),e,t,null,null)},Ip.prototype.unmount=Fp.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;np(e.current,2,null,e,null,null),bu(),t[vt]=null}};function Ip(e){this._internalRoot=e}Ip.prototype.unstable_scheduleHydration=function(e){if(e){var t=pt();e={blockedOn:null,target:e,priority:t};for(var n=0;n<xp.length&&t!==0&&t<xp[n].priority;n++);xp.splice(n,0,e),n===0&&Ep(e)}};var Lp=r.version;if(Lp!==`19.2.4`)throw Error(s(527,Lp,`19.2.4`));T.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render==`function`?Error(s(188)):(e=Object.keys(e).join(`,`),Error(s(268,e)));return e=p(t),e=e===null?null:m(e),e=e===null?null:e.stateNode,e};var Rp={bundleType:0,version:`19.2.4`,rendererPackageName:`react-dom`,currentDispatcherRef:w,reconcilerVersion:`19.2.4`};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`){var zp=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!zp.isDisabled&&zp.supportsFiber)try{We=zp.inject(Rp),Ge=zp}catch{}}e.createRoot=function(e,t){if(!c(e))throw Error(s(299));var n=!1,r=``,i=Zs,a=Qs,o=$s;return t!=null&&(!0===t.unstable_strictMode&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(i=t.onUncaughtError),t.onCaughtError!==void 0&&(a=t.onCaughtError),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=ep(e,1,!1,null,null,n,r,null,i,a,o,Pp),e[vt]=t.current,Sd(e),new Fp(t)}})),c=e(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=s()}))(),l=n(),u=e((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.fragment`);function r(e,n,r){var i=null;if(r!==void 0&&(i=``+r),n.key!==void 0&&(i=``+n.key),`key`in n)for(var a in r={},n)a!==`key`&&(r[a]=n[a]);else r=n;return n=r.ref,{$$typeof:t,type:e,key:i,ref:n===void 0?null:n,props:r}}e.Fragment=n,e.jsx=r,e.jsxs=r})),d=e(((e,t)=>{t.exports=u()}))();function f({children:e,onClick:t,variant:n=`primary`,size:r=`md`,className:i=``}){return(0,d.jsx)(`button`,{className:`btn btn--${n} btn--${r} ${i}`,onClick:t,children:e})}function p({onLogoClick:e,lang:t,onToggleLang:n,isDark:r,onToggleDark:i,searchQuery:a,onSearchChange:o,onChangelogClick:s}){return(0,d.jsx)(`header`,{className:`header`,children:(0,d.jsxs)(`div`,{className:`header__inner`,children:[(0,d.jsxs)(`button`,{className:`header__logo`,onClick:e,children:[(0,d.jsx)(`span`,{className:`header__logo-icon`,children:`🧠`}),(0,d.jsx)(`span`,{className:`header__logo-text`,children:t===`zh`?`AI百科`:`AI Encyclopedia`})]}),(0,d.jsxs)(`div`,{className:`header__search`,children:[(0,d.jsx)(`input`,{type:`text`,className:`header__search-input`,placeholder:t===`zh`?`搜索主题...`:`Search topics...`,value:a,onChange:e=>o(e.target.value)}),a&&(0,d.jsx)(`button`,{className:`header__search-clear`,onClick:()=>o(``),children:`✕`})]}),(0,d.jsxs)(`nav`,{className:`header__nav`,children:[(0,d.jsx)(f,{variant:`secondary`,size:`sm`,onClick:i,title:r?t===`zh`?`切换浅色模式`:`Switch to light`:t===`zh`?`切换深色模式`:`Switch to dark`,children:r?`☀️`:`🌙`}),(0,d.jsx)(f,{variant:`secondary`,size:`sm`,onClick:n,className:`header__lang-btn`,children:t===`zh`?`EN`:`中`}),(0,d.jsx)(f,{variant:`secondary`,size:`sm`,onClick:e,children:t===`zh`?`首页`:`Home`}),(0,d.jsx)(f,{variant:`secondary`,size:`sm`,onClick:s,children:t===`zh`?`日志`:`Log`})]})]})})}var m=[{id:`token`,title:`Token`,category:`fundamentals`,isNew:!0,summary:`The basic unit of text processing in AI language models.`,content:{introduction:`Tokens are the fundamental building blocks that AI language models use to process and understand text. Before any text can be analyzed or generated, it must first be converted into tokens - a process called tokenization. Understanding tokens is essential for understanding how Large Language Models (LLMs) work, their capabilities, and their limitations.`,sections:[{title:`What is a Token?`,content:`A token is a sequence of characters that a model treats as a single unit. Tokens can represent:

• **Partial words**: Common word fragments like "ing", "tion", or "pre"
• **Complete words**: Short words like "cat", "the", "is"
• **Punctuation**: Individual characters like ".", ",", "!"
• **Special tokens**: Special markers like [PAD], [UNK], [CLS]

**The 1-token rule of thumb**: One token is roughly equal to 4 characters of English text, or about 3/4 of a word. So "tokenization" becomes roughly 4-5 tokens: "token", "ization".

This is why token counts often exceed word counts when processing English text.`},{title:`Tokenization Process`,content:`Modern language models use sophisticated tokenization algorithms:

**Byte Pair Encoding (BPE)**: Starts with individual bytes and repeatedly merges the most common pairs. Used by GPT-2 and others.

**WordPiece**: Similar to BPE but merges pairs based on frequency in training data. Used by BERT.

**SentencePiece**: Treats the entire input as a byte stream, allowing for language-agnostic tokenization.

**Why not just use words?**
• Vocabulary size: English has hundreds of thousands of words
• Rare words: Model would struggle with misspellings or obscure terms
• Subword efficiency: "unhappiness" → ["un", "happy", "ness"] instead of one rare word`},{title:`Chinese Tokenization Example: jieba`,content:`jieba is the most popular Chinese text segmentation library, supporting multiple segmentation modes:

**Accurate Mode** (default):
\`\`\`python
import jieba
text = "人工智能是当今最热门的技术之一"
result = jieba.lcut(text)
print(result)
# Output: ['人工智能', '是', '当今', '最', '热门', '的', '技术', '之一']
\`\`\`

**Full Mode** - Lists all possible words:
\`\`\`python
result = jieba.lcut(text, cut_all=True)
print(result)
# Output: ['人工智能', '人工', '智能', '是', '当今', '最', '热门', '热门', '的', '技术', '之一', '之', '一']
\`\`\`

**Search Engine Mode** - Suitable for search engines:
\`\`\`python
text = "人工智能技术在各个领域广泛应用"
result = jieba.cut_for_search(text)
print(list(result))
# Output: ['人工智能', '人工', '智能', '技术', '应用', '各个', '领域', '广泛', '应用']
\`\`\`

**Part-of-Speech Tagging**:
\`\`\`python
import jieba.posseg as pseg
words = pseg.cut("我喜欢深度学习")
for word, flag in words:
    print(f"{word} / {flag}")
# Output: 我/r 喜欢/v 深度/n 学习/vn
\`\`\`

**Adding Custom Words**:
\`\`\`python
jieba.add_word("大语言模型")
jieba.add_word("自然语言处理")
\`\`\`

jieba uses a prefix dictionary for efficient segmentation and HMM model to handle unknown words, making it a great starting tool for Chinese NLP.`},{title:`Tokens and Model Limits`,content:`Every LLM has a maximum context window measured in tokens:

**Input + Output**: The total tokens you can send and receive in one conversation
• GPT-4 Turbo: 128K tokens
• GPT-3.5 Turbo: 16K tokens
• Claude 3: 200K tokens

**Why token limits matter**:
• Each model has a maximum context length
• Longer texts must be summarized or chunked
• Token count directly affects API costs

**Cost implications**:
• API pricing is typically per 1M tokens
• Images are converted to tokens when processed
• Code often requires more tokens than equivalent text`},{title:`Tokens in Practice`,content:`Understanding tokens helps you work more effectively with LLMs:

**Prompt optimization**:
• Concise prompts save tokens and costs
• Clear structure reduces token waste on parsing

**Context management**:
• Breaking long documents into token-aware chunks
• Prioritizing recent conversation for memory efficiency

**Multimodal tokens**:
• Images are tokenized using vision transformers
• Audio is converted to text tokens or spectrogram tokens
• Different modalities have different tokenization strategies`}],conclusion:`Tokens are the fundamental currency of AI language models. Understanding how tokenization works helps you write more efficient prompts, manage context windows better, and understand why AI sometimes struggles with certain words or tasks.`},keyConcepts:[`Tokenization`,`BPE`,`WordPiece`,`Context Window`,`Token Limit`,`Subword`],relatedTopics:[`machine-learning`,`llm`,`nlp`]},{id:`embedding`,title:`Embedding`,category:`fundamentals`,isNew:!0,summary:`Converting text into numerical vectors that AI models can understand.`,content:{introduction:`Embeddings are numerical representations of text, images, or other data in the form of dense vectors. They transform human-readable content into a format that AI models can process mathematically, capturing semantic meaning in numbers. This technology is fundamental to how AI understands and compares concepts.`,sections:[{title:`What are Embeddings?`,content:`An embedding converts discrete data (like words or images) into continuous vectors of numbers. Each dimension of the vector captures some aspect of the meaning.

**Simple example**:
• "cat" → [0.2, -0.5, 0.8, ...]
• "dog" → [0.25, -0.4, 0.75, ...]
• "car" → [-0.8, 0.3, -0.2, ...]

Notice that "cat" and "dog" have similar vectors (both animals), while "car" is very different.

**Key properties**:
• Similar concepts have similar vectors
• Distance between vectors shows semantic similarity
• Typically 256 to 3072 dimensions long`},{title:`How Embeddings Work`,content:`Embeddings are created by neural networks trained on massive datasets:

**Word2Vec**: Early technique that learned word relationships from large text corpora. "King - Man + Woman = Queen"

**Contextual Embeddings**: Modern models like BERT create embeddings that change based on context. "Bank" has different embeddings in "river bank" vs "bank account".

**Sentence Embeddings**: Models like sentence-transformers create embeddings for entire sentences, capturing overall meaning.

**How models use them**:
1. Convert text to vector
2. Perform mathematical operations on vectors
3. Compare distances to find relationships
4. Use results for classification, search, or generation`},{title:`Applications of Embeddings`,content:`Embeddings power many AI applications:

**Semantic Search**: Find documents by meaning, not just keywords. Search "energy for cars" finds articles about "electric vehicles" and "batteries".

**Recommendation Systems**: Suggest similar items based on embedding similarity. Music, movies, products.

**RAG (Retrieval Augmented Generation)**: Store knowledge as embeddings, retrieve relevant pieces to enhance LLM responses.

**Classification**: Group similar items together for categorization.

**Anomaly Detection**: Find outliers by measuring distance from normal cluster.

**Image Recognition**: Compare image embeddings for similarity matching.`},{title:`Embedding Models and Costs`,content:`Different embedding models offer different capabilities:

**Popular Models**:
• OpenAI text-embedding-ada-002
• Cohere embed-multilingual
• Sentence-transformers (open source)

**Cost considerations**:
• Priced per 1K tokens
• Dimensions affect quality and speed
• Larger isn't always better for your use case

**Choosing embeddings**:
• Match the model to your language(s)
• Consider dimension count needed
• Balance quality vs. speed vs. cost`}],conclusion:`Embeddings are the桥梁 between human language and AI understanding. By converting text to numbers, they enable AI to compare, search, and reason about meaning at scale.`},keyConcepts:[`Vector`,`Semantic Similarity`,`Word2Vec`,`Sentence Embedding`,`Cosine Similarity`,`RAG`],relatedTopics:[`machine-learning`,`nlp`,`llm`]},{id:`prompt-engineering`,title:`Prompt Engineering`,category:`fundamentals`,isNew:!0,summary:`The art and science of crafting effective inputs for AI models.`,content:{introduction:`Prompt engineering is the practice of designing and optimizing inputs (prompts) to get desired outputs from AI language models. A well-crafted prompt can dramatically improve the quality, accuracy, and usefulness of AI responses. It is both a technical skill and an art form.`,sections:[{title:`Core Prompting Techniques`,content:`**Zero-shot prompting**: Ask the model to do something without examples.
"Can you translate this to French: Hello"

**Few-shot prompting**: Provide examples to guide the model's behavior.
"Translate to French:
Hello → Bonjour
Goodbye → Au revoir
Thank you →"

**Chain-of-Thought (CoT)**: Ask the model to explain its reasoning step by step.
"Let's think about this step by step..."

**Zero-shot CoT**: Combine CoT with zero-shot by adding "Let's think step by step."`},{title:`Effective Prompt Structure`,content:`A well-structured prompt includes:

**Context**: Background information the model needs.
"Imagine you are a senior software engineer reviewing code..."

**Task**: Clear instruction of what to do.
"Find and explain the bugs in this function."

**Format**: How you want the response structured.
"Present your findings as a numbered list."

**Constraints**: Any limitations or requirements.
"Focus only on performance issues, not style."

**Examples**: When helpful, show what good output looks like.`},{title:`Common Patterns`,content:`**Role prompting**: Assign the model a specific identity.
"You are a patient pediatrician explaining to parents..."

**System prompts**: Set overall behavior and boundaries.
"You are a helpful assistant that always prioritizes safety."

**Input/output prompting**: Define clear interfaces.
"When I send you code, you respond with: Analysis | Issues | Suggestions"

**Conditional prompting**: Branch based on input.
"If the user asks about X, respond with Y. If about Z, respond with W."

**Meta-prompting**: Ask the model to plan its own approach.
"Before answering, briefly outline your approach to this problem."`},{title:`Best Practices`,content:`**Be specific**: Vague prompts get vague answers. "Write code" vs "Write a Python function that sorts a list using quicksort."

**Break down complex tasks**: Multiple simple prompts often work better than one complex prompt.

**Iterate and refine**: Start simple, then add constraints or context as needed.

**Test edge cases**: Try unusual inputs to see how the model handles them.

**Consider safety**: Be aware of prompt injection attacks where malicious input tries to override your instructions.

**Model differences**: What works with GPT-4 may not work with Claude. Adapt your approach.`}],conclusion:`Prompt engineering is a essential skill for working with AI. Well-crafted prompts can extract much better results from the same model, often more effectively than trying to use a more powerful but poorly prompted model.`},keyConcepts:[`Zero-shot`,`Few-shot`,`Chain-of-Thought`,`Role Prompting`,`System Prompt`,`Prompt Injection`],relatedTopics:[`llm`,`token`,`machine-learning`]},{id:`rag`,title:`RAG (Retrieval Augmented Generation)`,category:`fundamentals`,isNew:!0,summary:`Combining knowledge retrieval with AI text generation.`,content:{introduction:`RAG (Retrieval Augmented Generation) is a technique that enhances AI responses by combining a language model with a knowledge retrieval system. Instead of relying solely on training data, RAG allows AI to access and use information from external sources in real-time, making responses more accurate and up-to-date.`,sections:[{title:`Why RAG?`,content:`LLMs have limitations that RAG addresses:

**Knowledge cutoff**: Models only know what they were trained on.
"Tell me about the latest iPhone" → Model doesn't know

**Hallucination**: Models may generate plausible but incorrect facts.
RAG retrieves real documents to verify and ground responses.

**Private knowledge**: Organizations have data not in training.
"Query our internal database about Q3 sales"

**Transparency**: Users want to know where information comes from.
RAG can cite sources, building trust and verifiability.

**Keeping models small**: Instead of training huge models, use retrieval to give small models vast knowledge.`},{title:`How RAG Works`,content:`The RAG pipeline has three main stages:

**1. Indexing (Offline)**:
• Split documents into chunks
• Convert chunks to embeddings
• Store in vector database

**2. Retrieval (At query time)**:
• Convert user question to embedding
• Search vector DB for similar chunks
• Return top-k most relevant results

**3. Generation (At query time)**:
• Combine user question + retrieved context
• Send to LLM with instructions
• Generate grounded response with citations`},{title:`Key Components`,content:`**Document Processing**:
• Chunking strategies: fixed size, semantic split, recursive
• Overlap between chunks to preserve context
• Metadata: source, date, page number

**Vector Databases**:
• Pinecone, Weaviate, Chroma, Milvus
• Support similarity search (cosine, dot product)
• Handle millions of embeddings efficiently

**Retrieval Strategies**:
• Dense retrieval (embeddings)
• Sparse retrieval (keyword search)
• Hybrid (combine both)
• Re-ranking: refine initial results

**LLM Integration**:
• Prompt engineering to use context
• Instruction: "Use the provided context..."
• Citation formatting`},{title:`RAG Best Practices`,content:`**Quality in, quality out**: Clean, well-structured documents lead to better retrieval.

**Chunk size matters**: Too small loses context, too large reduces precision. 512-1024 tokens is common.

**Hybrid search**: Combine semantic similarity with keyword matching for best results.

**Evaluate retrieval**: Don't just evaluate final output. Check if right documents were retrieved.

**Guardrails**: Ensure retrieved content is used appropriately and safely.

**Updates**: Set up pipelines to refresh embeddings when documents change.

**Multimodal RAG**: Extend beyond text to images, tables, PDFs, audio.`}],conclusion:`RAG has become essential for enterprise AI applications, combining the power of LLMs with the accuracy and freshness of retrieval systems. It addresses key limitations of pure generation approaches while enabling AI to work with private, up-to-date knowledge.`},keyConcepts:[`Vector Search`,`Chunking`,`Retrieval`,`Context Window`,`Citation`,`Hybrid Search`],relatedTopics:[`llm`,`embedding`,`machine-learning`]},{id:`machine-learning`,title:`Machine Learning`,category:`ml`,summary:`The science of teaching computers to learn from data without being explicitly programmed.`,content:{introduction:`Machine Learning (ML) is a subset of artificial intelligence that enables systems to automatically learn and improve from experience. Instead of being explicitly programmed for every scenario, ML algorithms use statistical techniques to identify patterns in data and make decisions with minimal human intervention.`,sections:[{title:`Types of Machine Learning`,content:`Machine Learning is broadly categorized into three main types:

**Supervised Learning**: The algorithm learns from labeled training data, where each example is paired with the correct output. It's like learning with a teacher who provides answers. Common applications include email spam detection and image classification.

**Unsupervised Learning**: The algorithm finds patterns in unlabeled data without human guidance. It discovers hidden structures on its own. Used for customer segmentation and anomaly detection.

**Reinforcement Learning**: The algorithm learns by interacting with an environment and receiving rewards or penalties for its actions. It learns through trial and error, similar to how humans learn new skills. Applied in game playing and robotics.`},{title:`Key Algorithms`,content:`Popular machine learning algorithms include:

• **Linear Regression**: Predicts continuous values based on linear relationships
• **Decision Trees**: Makes decisions based on a tree-like model of choices
• **Random Forest**: Ensemble of decision trees for improved accuracy
• **Support Vector Machines (SVM)**: Finds optimal boundaries between different classes
• **K-Nearest Neighbors (KNN)**: Classifies based on similarity to neighboring points
• **Naive Bayes**: Probabilistic classifier based on Bayes' theorem`},{title:`Applications`,content:`Machine learning is transforming industries across the board:

• **Healthcare**: Disease diagnosis, drug discovery, patient monitoring
• **Finance**: Fraud detection, algorithmic trading, credit scoring
• **Transportation**: Autonomous vehicles, route optimization
• **Retail**: Recommendation systems, inventory management
• **Entertainment**: Content personalization, game AI`}],conclusion:`Machine Learning forms the foundation of modern AI systems. Understanding its principles is essential for anyone looking to work with artificial intelligence technologies.`},keyConcepts:[`Supervised Learning`,`Unsupervised Learning`,`Reinforcement Learning`,`Classification`,`Regression`,`Model Training`],relatedTopics:[`deep-learning`,`neural-networks`,`reinforcement-learning`]},{id:`deep-learning`,title:`Deep Learning`,category:`deep-learning`,summary:`A subset of ML using neural networks with multiple layers to learn complex patterns.`,content:{introduction:`Deep Learning is a specialized branch of machine learning that uses artificial neural networks with multiple layers (hence "deep") to learn representations of data. These deep neural networks can automatically discover intricate patterns in large datasets, eliminating the need for manual feature engineering.`,sections:[{title:`How Deep Learning Works`,content:`Deep learning models consist of multiple layers of interconnected nodes (neurons):

**Input Layer**: Receives the raw data (images, text, numbers)

**Hidden Layers**: Process data through multiple transformations. Each layer learns different features - early layers might detect edges in images, while deeper layers combine these to recognize complex patterns like shapes or objects.

**Output Layer**: Produces the final prediction or classification

The "depth" of the network (number of layers) allows it to learn hierarchical representations of data, building up from simple to complex features.`},{title:`Key Architectures`,content:`Different deep learning architectures are designed for specific tasks:

**Convolutional Neural Networks (CNNs)**: Specialized for processing grid-like data such as images. They use filters to automatically learn spatial hierarchies.

**Recurrent Neural Networks (RNNs)**: Designed for sequential data like text and time series. They have memory to process data sequences.

**Transformers**: Revolutionized NLP by using self-attention mechanisms to process sequences in parallel.

**Generative Adversarial Networks (GANs)**: Two neural networks compete to generate realistic synthetic data.`},{title:`Why Deep Learning Matters`,content:`Deep learning has enabled breakthroughs that were previously impossible:

• **Superhuman Performance**: AI can now surpass human accuracy in image recognition, speech recognition, and game playing
• **Automated Feature Learning**: No need to manually engineer features - the network learns them automatically
• **Scalability**: Performance improves with more data and larger networks
• **Transfer Learning**: Pre-trained models can be fine-tuned for new tasks with less data`}],conclusion:`Deep learning has become the dominant approach in AI, powering everything from voice assistants to autonomous vehicles. Its ability to learn complex patterns directly from raw data has revolutionized how we approach artificial intelligence.`},keyConcepts:[`Neural Networks`,`CNNs`,`RNNs`,`Transformers`,`Backpropagation`,`Feature Learning`],relatedTopics:[`neural-networks`,`machine-learning`,`nlp`,`vision`]},{id:`neural-networks`,title:`Neural Networks`,category:`deep-learning`,summary:`Computing systems inspired by biological neural networks in the human brain.`,content:{introduction:`Neural networks are computing systems inspired by the biological neural networks in our brains. They consist of interconnected nodes (neurons) organized in layers that process information. By adjusting the connections between neurons, neural networks can learn to recognize patterns, make predictions, and solve complex problems.`,sections:[{title:`Structure of Neural Networks`,content:`A neural network consists of:

**Neurons (Nodes)**: Basic computational units that receive inputs, apply weights, sum them up, and pass through an activation function.

**Weights**: Parameters that determine the strength of connections between neurons. Learning involves adjusting these weights.

**Biases**: Additional parameters that shift the activation function, helping the network fit data better.

**Layers**:
• Input Layer: Receives features of the data
• Hidden Layers: Perform intermediate computations
• Output Layer: Produces final predictions`},{title:`How Networks Learn`,content:`Neural networks learn through a process called backpropagation:

**Forward Pass**: Data flows from input to output through the network, making predictions.

**Loss Calculation**: The network's prediction is compared to the actual answer, calculating the error (loss).

**Backward Pass**: The error is propagated backward through the network, calculating how much each weight contributed to the error.

**Weight Update**: Weights are adjusted to reduce the error, typically using gradient descent optimization.

This process repeats thousands of times until the network's predictions are accurate enough.`},{title:`Types of Neural Networks`,content:`Different architectures suit different problems:

**Feedforward Neural Networks**: Data flows in one direction from input to output. Used for simple classification tasks.

**Convolutional Neural Networks (CNNs)**: Use convolutional layers to process spatial data like images.

**Recurrent Neural Networks (RNNs)**: Have connections that loop back, allowing them to process sequences. Good for text and time series.

**Long Short-Term Memory (LSTM)**: Advanced RNN variant that can remember information for longer periods. Used for language translation and speech recognition.`}],conclusion:`Neural networks form the computational foundation of modern AI. Understanding how neurons, layers, and weights work together to learn patterns is fundamental to grasping how deep learning systems function.`},keyConcepts:[`Neurons`,`Weights`,`Layers`,`Backpropagation`,`Activation Functions`,`Gradient Descent`],relatedTopics:[`deep-learning`,`machine-learning`,`vision`]},{id:`nlp`,title:`Natural Language Processing`,category:`nlp`,summary:`Enabling computers to understand, interpret, and generate human language.`,content:{introduction:`Natural Language Processing (NLP) is a branch of AI that focuses on enabling computers to understand, interpret, and generate human language in valuable ways. It combines computational linguistics with machine learning and deep learning to process and analyze large amounts of natural language data.`,sections:[{title:`NLP Tasks`,content:`NLP encompasses various tasks from simple to complex:

**Text Classification**: Categorizing text into predefined categories. Used for spam detection and sentiment analysis.

**Named Entity Recognition (NER)**: Identifying and classifying entities like names, locations, and organizations in text.

**Machine Translation**: Automatically translating text from one language to another.

**Question Answering**: Building systems that can answer questions posed in natural language.

**Text Generation**: Creating human-like text, used in chatbots and content creation.`},{title:`How NLP Works`,content:`Modern NLP transforms text into numbers that computers can process:

**Tokenization**: Breaking text into words, subwords, or characters (tokens).

**Embedding**: Converting tokens into dense vector representations that capture semantic meaning.

**Contextual Understanding**: Using attention mechanisms to understand word relationships based on context.

**Task-Specific Heads**: Adding layers on top of the learned representations to perform specific tasks like classification or generation.`},{title:`Modern NLP and Transformers`,content:`The introduction of the Transformer architecture revolutionized NLP:

**Attention Mechanism**: Allows models to focus on relevant parts of the input when generating output. The key innovation that made Transformers powerful.

**BERT**: Pre-trained bidirectional encoder that learns context from both directions. Used for classification and entity recognition.

**GPT Models**: Generative pre-trained transformers that excel at text generation. They predict the next word based on all previous words.

**Large Language Models (LLMs)**: Massive transformer models trained on vast amounts of text, capable of performing diverse language tasks with remarkable fluency.`}],conclusion:`NLP has progressed from simple rule-based systems to sophisticated deep learning models that can understand context, nuance, and even generate creative content. This technology powers virtual assistants, translation services, and automated content analysis.`},keyConcepts:[`Tokenization`,`Embeddings`,`Attention Mechanism`,`Transformers`,`BERT`,`GPT`],relatedTopics:[`deep-learning`,`llm`,`machine-learning`]},{id:`computer-vision`,title:`Computer Vision`,category:`vision`,summary:`Teaching machines to interpret and understand visual information from the world.`,content:{introduction:`Computer Vision is a field of AI that trains computers to interpret and understand visual information from the world - images and videos. It encompasses tasks ranging from simple image classification to complex scene understanding and real-time video analysis.`,sections:[{title:`Core Vision Tasks`,content:`Computer vision addresses several fundamental tasks:

**Image Classification**: Determining what object or concept an image contains. "Is this a cat or a dog?"

**Object Detection**: Locating and classifying multiple objects within an image, drawing bounding boxes around each.

**Semantic Segmentation**: Classifying each pixel in an image, assigning every pixel to a category (road, car, pedestrian, sky).

**Image Generation**: Creating new images, from GANs that generate realistic faces to diffusion models that create art from text descriptions.`},{title:`How Vision Systems See`,content:`Computer vision systems process images as grids of numbers (pixels):

**CNNs for Vision**: Convolutional Neural Networks are the backbone of modern computer vision. They apply filters to detect features like edges, textures, and shapes.

**Feature Hierarchy**: Early layers detect simple features (edges, corners), while deeper layers combine these to recognize complex objects (faces, cars, buildings).

**Transfer Learning**: Vision models pre-trained on massive datasets like ImageNet can be fine-tuned for specific tasks with less data.

**Real-Time Processing**: Modern architectures enable processing video frames in real-time, essential for autonomous driving and video analysis.`},{title:`Applications`,content:`Computer vision is transforming many fields:

**Healthcare**: Analyzing medical images for disease detection, from X-rays to MRIs. AI can spot cancers and conditions with accuracy comparable to specialists.

**Autonomous Vehicles**: Real-time object detection, lane tracking, and scene understanding for self-driving cars.

**Retail**: Checkout-free stores, inventory management, customer tracking.

**Manufacturing**: Quality control, defect detection, robotic guidance on assembly lines.

**Agriculture**: Crop monitoring, disease detection, automated harvesting.`}],conclusion:`Computer vision has achieved superhuman capabilities in many tasks, from recognizing faces to detecting defects in manufacturing. As these systems become more sophisticated, they enable new applications that seemed like science fiction just years ago.`},keyConcepts:[`Image Classification`,`Object Detection`,`Semantic Segmentation`,`CNNs`,`Feature Extraction`],relatedTopics:[`deep-learning`,`neural-networks`,`machine-learning`]},{id:`llm`,title:`Large Language Models`,category:`nlp`,summary:`Massive AI models trained on vast text data, capable of understanding and generating human language.`,content:{introduction:`Large Language Models (LLMs) are massive neural networks trained on enormous amounts of text data. These models can understand context, generate human-like text, answer questions, write code, and perform a wide variety of language tasks with remarkable fluency.`,sections:[{title:`What Makes LLMs Special`,content:`LLMs have several distinctive characteristics:

**Scale**: Trained on billions or trillions of words, containing hundreds of billions of parameters. This scale enables emergent capabilities.

**General Purpose**: Unlike specialized models, LLMs can perform many different language tasks without task-specific training.

**Few-Shot Learning**: Can adapt to new tasks by understanding a few examples in the prompt, without needing to retrain.

**Emergent Behaviors**: At sufficient scale, models spontaneously develop capabilities that weren't explicitly trained, like reasoning and step-by-step problem solving.`},{title:`How LLMs Work`,content:`LLMs use the Transformer architecture with some key variations:

**Autoregressive Generation**: Models like GPT predict and generate one token at a time, conditioning each new word on all previous words.

**Pre-training**: Models learn language by predicting the next word in massive text datasets, developing broad knowledge and capabilities.

**Fine-tuning**: Models can be refined on specific tasks or adjusted to follow instructions using techniques like RLHF (Reinforcement Learning from Human Feedback).

**Context Window**: The amount of text the model can consider at once, determining how much context it can use in generating responses.`},{title:`Capabilities and Limitations`,content:`LLMs can do remarkable things:

**Text Generation**: Write essays, articles, stories, code, emails with human-like quality

**Question Answering**: Draw from training knowledge to answer questions on almost any topic

**Reasoning**: Work through multi-step problems, though sometimes make logical errors

**Translation**: Translate between languages with high quality

**Limitations to understand**:
• Hallucination: May generate plausible but incorrect information
• Knowledge Cutoff: Limited to training data, no real-time information
• Context Length: Can't process arbitrarily long documents
• Bias: May reflect biases present in training data`}],conclusion:`LLMs represent a major milestone in AI, demonstrating that scale can unlock diverse language capabilities. While they have limitations, they have fundamentally changed how we interact with AI systems and opened new possibilities for human-machine collaboration.`},keyConcepts:[`Transformers`,`Autoregressive`,`Fine-tuning`,`RLHF`,`Few-Shot Learning`,`Hallucination`],relatedTopics:[`nlp`,`deep-learning`,`neural-networks`]},{id:`reinforcement-learning`,title:`Reinforcement Learning`,category:`ml`,summary:`Training AI agents to make decisions by rewarding desired behaviors.`,content:{introduction:`Reinforcement Learning (RL) is a type of machine learning where an agent learns to make decisions by interacting with an environment. Instead of learning from labeled examples, the agent learns through trial and error, receiving rewards or penalties for its actions. This approach has produced AI that can master complex games and control robotic systems.`,sections:[{title:`The RL Framework`,content:`Reinforcement learning involves several key components:

**Agent**: The AI system that makes decisions and takes actions.

**Environment**: The world the agent interacts with - could be a game, simulator, or real-world setting.

**State**: A representation of the current situation the agent observes.

**Action**: What the agent can do in each state.

**Reward**: Feedback from the environment indicating whether an action was good or bad.

**Policy**: The agent's strategy for choosing actions based on states - this is what the agent learns.`},{title:`How RL Agents Learn`,content:`Agents learn through the interplay of exploration and exploitation:

**Exploration**: Trying new actions to discover their effects and find better strategies.

**Exploitation**: Using known good actions to maximize immediate reward.

**Q-Learning**: A fundamental RL algorithm where agents learn the value (Q) of action-state pairs - how good is it to take this action in this state?

**Deep RL**: Combining RL with deep neural networks enables handling complex, high-dimensional state spaces like images.

**Policy Gradient Methods**: Directly learning the policy function that maps states to actions, useful when action spaces are large or continuous.`},{title:`Real-World Applications`,content:`Reinforcement learning has achieved remarkable results:

**Game Playing**: AlphaGo defeated world champions at Go, combining RL with tree search. RL agents have mastered chess, poker, video games, and more.

**Robotics**: Training robots to walk, grasp objects, and perform manipulation tasks. RL enables robots to adapt to real-world variability.

**Autonomous Driving**: Learning decision-making for lane changing, merging, and navigating complex traffic situations.

**Resource Management**: Optimizing data center cooling, CPU allocation, and supply chains.

**Recommendation Systems**: Learning to suggest content that maximizes long-term user engagement.`}],conclusion:`Reinforcement learning enables AI to learn complex behaviors through interaction, achieving superhuman performance in games and enabling robots to adapt to new situations. It represents a different paradigm from supervised learning, closer to how humans and animals learn through experience.`},keyConcepts:[`Agent`,`Environment`,`Reward`,`Policy`,`Q-Learning`,`Exploration vs Exploitation`],relatedTopics:[`machine-learning`,`deep-learning`]},{id:`ai-ethics`,title:`AI Ethics`,category:`applications`,summary:`Studying the moral implications and responsible development of AI systems.`,content:{introduction:`AI Ethics is the study of moral issues related to the development, deployment, and use of artificial intelligence. As AI systems become more powerful and pervasive, understanding their ethical implications becomes crucial for ensuring technology benefits humanity.`,sections:[{title:`Key Ethical Concerns`,content:`Several critical ethical issues face AI development:

**Bias and Fairness**: AI systems can inherit and amplify biases present in training data, leading to discriminatory outcomes in hiring, lending, criminal justice, and healthcare.

**Privacy**: AI systems often require vast amounts of data, raising concerns about surveillance, data protection, and consent.

**Transparency**: Many AI systems, especially deep learning models, operate as "black boxes" - their decisions are difficult to explain or understand.

**Accountability**: When AI systems cause harm, it's often unclear who should be held responsible - developers, users, or the systems themselves.

**Job Displacement**: Automation may eliminate millions of jobs, requiring societal adaptation and safety nets.`},{title:`Principles for Responsible AI`,content:`Organizations and governments have proposed various principles:

**Beneficence**: AI should benefit humanity and improve well-being.

**Non-maleficence**: AI should not harm people or be used maliciously.

**Justice**: Benefits and risks should be distributed fairly across society.

**Autonomy**: Humans should maintain control over AI systems, not vice versa.

**Explainability**: AI decisions should be understandable and justifiable.

**Privacy**: Individual data rights must be protected.

**Robustness**: AI systems should be secure, safe, and reliable.`},{title:`Current Efforts and Challenges`,content:`The AI community is actively working on ethical AI:

**Bias Detection**: Tools and techniques to identify and mitigate bias in datasets and models.

**Explainable AI (XAI)**: Methods to make AI decisions more interpretable and transparent.

**Regulations**: The EU AI Act, US executive orders, and various national policies are establishing legal frameworks.

**Ethics Boards**: Major AI labs have established ethics review processes.

**Open Questions**:
• How to balance innovation with safety?
• Who decides what values AI should embody?
• Can AI systems have moral agency or responsibility?
• How do we ensure equitable access to AI benefits?`}],conclusion:`AI ethics is not an afterthought but a fundamental consideration for responsible AI development. As AI capabilities grow, so does our responsibility to ensure these powerful tools serve humanity's best interests while minimizing harm.`},keyConcepts:[`Bias`,`Fairness`,`Transparency`,`Accountability`,`Privacy`,`Explainability`],relatedTopics:[`machine-learning`,`llm`]}],h=[{id:`token`,title:`Token`,category:`fundamentals`,isNew:!0,summary:`AI语言模型中处理文本的基本单位。`,content:{introduction:`Token是AI语言模型用于处理和理解文本的基本构建块。在任何文本被分析或生成之前，它必须首先被转换为token——这个过程称为分词（tokenization）。理解token对于理解大型语言模型（LLM）的工作原理、能力及其局限性至关重要。`,sections:[{title:`什么是Token？`,content:`Token是模型视为单个单元的字符序列。Token可以表示：

• **部分单词**：常见的词片段，如"ing"、"tion"、"pre"
• **完整单词**：短单词如"cat"、"the"、"is"
• **标点符号**：单个字符如"."、","、"!"
• **特殊token**：特殊标记如[PAD]、[UNK]、[CLS]

**1 token经验法则**：一个token大约等于4个英文字符，或约3/4个单词。因此"tokenization"变成大约4-5个token："token"、"ization"。

这就是为什么处理英文文本时token数量往往超过单词数。`},{title:`分词过程`,content:`现代语言模型使用复杂的分词算法：

**字节对编码（BPE）**：从单个字节开始，反复合并最常见的配对。被GPT-2等模型使用。

**WordPiece**：与BPE类似，但根据训练数据中的频率合并配对。被BERT使用。

**SentencePiece**：将整个输入视为字节流，实现语言无关的分词。

**为什么不用单词？**
• 词汇量：英语有数十万个单词
• 生僻词：模型难以处理拼写错误或罕见术语
• 子词效率："unhappiness" → ["un", "happy", "ness"]，而不是一个罕见词`},{title:`中文分词示例：jieba`,content:`jieba（结巴分词）是最流行的中文分词库，支持多种分词模式：

**精确模式**（默认）：
\`\`\`python
import jieba
text = "人工智能是当今最热门的技术之一"
result = jieba.lcut(text)
print(result)
# 输出：['人工智能', '是', '当今', '最', '热门', '的', '技术', '之一']
\`\`\`

**全模式** - 列出所有可能的词：
\`\`\`python
result = jieba.lcut(text, cut_all=True)
print(result)
# 输出：['人工智能', '人工', '智能', '是', '当今', '最', '热门', '热门', '的', '技术', '之一', '之', '一']
\`\`\`

**搜索引擎模式** - 适合搜索引擎：
\`\`\`python
text = "人工智能技术在各个领域广泛应用"
result = jieba.cut_for_search(text)
print(list(result))
# 输出：['人工智能', '人工', '智能', '技术', '应用', '各个', '领域', '广泛', '应用']
\`\`\`

**词性标注**：
\`\`\`python
import jieba.posseg as pseg
words = pseg.cut("我喜欢深度学习")
for word, flag in words:
    print(f"{word} / {flag}")
# 输出：我/r 喜欢/v 深度/n 学习/vn
\`\`\`

**添加自定义词汇**：
\`\`\`python
jieba.add_word("大语言模型")
jieba.add_word("自然语言处理")
\`\`\`

jieba使用前缀词典实现高效分词，结合HMM模型处理未登录词，是中文NLP的入门利器。`},{title:`Token与模型限制`,content:`每个LLM都有以token计的最大上下文窗口：

**输入 + 输出**：一次对话中可以发送和接收的总token数
• GPT-4 Turbo：128K tokens
• GPT-3.5 Turbo：16K tokens
• Claude 3：200K tokens

**为什么token限制很重要**：
• 每个模型都有最大上下文长度
• 更长的文本必须被摘要或分块
• Token数量直接影响API成本

**成本影响**：
• API定价通常是按每百万token计费
• 图像在处理时会被转换为token
• 代码通常比等效文本需要更多token`},{title:`实际应用中的Token`,content:`理解token有助于更有效地使用LLM：

**提示优化**：
• 简洁的提示节省token和成本
• 清晰的结构减少解析token的浪费

**上下文管理**：
• 将长文档按token大小分块
• 为记忆效率优先处理最近的对话

**多模态token**：
• 图像使用视觉transformer进行token化
• 音频被转换为文本token或频谱图token
• 不同模态有不同的分词策略`}],conclusion:`Token是AI语言模型的基本货币。理解分词工作原理有助于你编写更高效的提示，更好地管理上下文窗口，并理解AI为何有时会在某些单词或任务上遇到困难。`},keyConcepts:[`分词`,`BPE`,`WordPiece`,`上下文窗口`,`Token限制`,`子词`],relatedTopics:[`machine-learning`,`llm`,`nlp`]},{id:`embedding`,title:`Embedding（嵌入）`,category:`fundamentals`,isNew:!0,summary:`将文本转换为AI模型能理解的数值向量。`,content:{introduction:`嵌入（Embedding）是将文本、图像或其他数据以密集向量的形式转换为数值表示的技术。它们将人类可读的内容转换为AI可以数学处理格式，同时捕捉语义含义。这一技术是AI理解和比较概念的基础。`,sections:[{title:`什么是嵌入？`,content:`嵌入将离散数据（如单词或图像）转换为连续的数字向量。向量的每个维度捕捉含义的某个方面。

**简单示例**：
• "猫" → [0.2, -0.5, 0.8, ...]
• "狗" → [0.25, -0.4, 0.75, ...]
• "汽车" → [-0.8, 0.3, -0.2, ...]

注意"猫"和"狗"的向量相似（都是动物），而"汽车"则很不同。

**关键特性**：
• 相似概念有相似向量
• 向量之间的距离表示语义相似度
• 通常256到3072维`},{title:`嵌入如何工作`,content:`嵌入由在海量数据集上训练的神经网络创建：

**Word2Vec**：早期技术，从大型语料库学习单词关系。"国王 - 男人 + 女人 = 女王"

**上下文嵌入**：BERT等现代模型创建基于上下文的嵌入。"银行"在"河岸"和"银行账户"中有不同的嵌入。

**句子嵌入**：sentence-transformers等模型为整个句子创建嵌入，捕捉整体含义。

**模型如何使用**：
1. 将文本转换为向量
2. 对向量执行数学运算
3. 比较距离以发现关系
4. 使用结果进行分类、搜索或生成`},{title:`嵌入的应用`,content:`嵌入为许多AI应用提供动力：

**语义搜索**：按含义而非关键词搜索文档。搜索"汽车的能源"能找到关于"电动汽车"和"电池"的文章。

**推荐系统**：基于嵌入相似性推荐相似内容。音乐、电影、产品。

**RAG（检索增强生成）**：将知识存储为嵌入，检索相关内容增强LLM响应。

**分类**：将相似项目分组进行分类。

**异常检测**：通过测量与正常群集的距离来发现异常值。

**图像识别**：比较图像嵌入进行相似度匹配。`},{title:`嵌入模型与成本`,content:`不同的嵌入模型提供不同的能力：

**流行模型**：
• OpenAI text-embedding-ada-002
• Cohere embed-multilingual
• Sentence-transformers（开源）

**成本考虑**：
• 按每1K token定价
• 维度影响质量 和速度
• 更大不一定对你的用例更好

**选择嵌入**：
• 选择与你的语言匹配的模型
• 考虑所需的维度数量
• 平衡质量、速度和成本`}],conclusion:`嵌入是人类语言与AI理解之间的桥梁。通过将文本转换为数字，它们使AI能够大规模地比较、搜索和推理含义。`},keyConcepts:[`向量`,`语义相似度`,`Word2Vec`,`句子嵌入`,`余弦相似度`,`RAG`],relatedTopics:[`machine-learning`,`nlp`,`llm`]},{id:`prompt-engineering`,title:`Prompt Engineering（提示工程）`,category:`fundamentals`,isNew:!0,summary:`编写有效AI输入的艺术和科学。`,content:{introduction:`提示工程是设计和优化输入（提示）以从AI语言模型获得理想输出的实践精心设计的提示可以显著提高AI响应的质量、准确性和实用性。这既是技术技能也是艺术形式。`,sections:[{title:`核心提示技术`,content:`**零样本提示**：不提供示例直接让模型完成任务。
"你能把这个翻译成法语吗：你好"

**少样本提示**：提供示例来指导模型行为。
"翻译成法语：
你好 → Bonjour
再见 → Au revoir
谢谢 →"

**思维链（CoT）**：要求模型逐步解释推理过程。
"让我们一步一步思考..."

**零样本CoT**：通过添加"让我们一步一步思考"结合CoT和零样本。`},{title:`有效提示结构`,content:`结构良好的提示包括：

**上下文**：模型需要的背景信息。
"假设你是一位高级软件工程师审查代码..."

**任务**：清晰指示要做什么。
"找出并解释这个函数中的bug。"

**格式**：你希望响应如何结构化。
"将你的发现以编号列表形式呈现。"

**约束**：任何限制或要求。
"只关注性能问题，不关注风格。"

**示例**：当有帮助时，展示好的输出是什么样的。`},{title:`常见模式`,content:`**角色提示**：为模型分配特定身份。
"你是一位向家长解释的耐心儿科医生..."

**系统提示**：设置整体行为和边界。
"你是一个始终优先考虑安全的有帮助助手。"

**输入/输出提示**：定义清晰的接口。
"当我发送代码给你时，你回复：分析 | 问题 | 建议"

**条件提示**：根据输入分支。
"如果用户问X，用Y回复。如果问Z，用W回复。"

**元提示**：让模型计划自己的方法。
"在回答之前，简要概述你解决这个问题的方法。"`},{title:`最佳实践`,content:`**要具体**：模糊提示得到模糊回答。"写代码" vs "写一个用快速排序对列表排序的Python函数。"

**分解复杂任务**：多个简单提示通常比一个复杂提示效果更好。

**迭代优化**：从简单开始，根据需要添加约束或上下文。

**测试边界情况**：尝试不寻常的输入看模型如何处理。

**考虑安全性**：注意恶意输入试图覆盖你指令的提示注入攻击。

**模型差异**：在GPT-4上有效的方法可能在Claude上无效。调整你的方法。`}],conclusion:`提示工程是与AI协作的基本技能。精心设计的提示可以从同一模型中提取更好的结果，通常比尝试使用更强大但提示不佳的模型更有效。`},keyConcepts:[`零样本`,`少样本`,`思维链`,`角色提示`,`系统提示`,`提示注入`],relatedTopics:[`llm`,`token`,`machine-learning`]},{id:`rag`,title:`RAG（检索增强生成）`,category:`fundamentals`,isNew:!0,summary:`将知识检索与AI文本生成相结合。`,content:{introduction:`RAG（检索增强生成）是一种通过将语言模型与知识检索系统相结合来增强AI响应的技术。与仅依赖训练数据不同，RAG允许AI实时访问和使用外部信息，使响应更准确、更及时。`,sections:[{title:`为什么需要RAG？`,content:`LLM有限制，RAG解决了这些问题：

**知识截止日期**：模型只知道训练时学到的内容。
"告诉我最新的iPhone" → 模型不知道

**幻觉**：模型可能生成似是而非但错误的事实。
RAG检索真实文档来验证和约束响应。

**私有知识**：组织有不在训练数据中的数据。
"查询我们关于Q3销售额的内部数据库"

**透明度**：用户想知道信息来源。
RAG可以引用来源，建立信任和可验证性。

**保持模型小巧**：不用训练巨大模型，使用检索给小型模型提供海量知识。`},{title:`RAG如何工作`,content:`RAG管道有三个主要阶段：

**1. 索引（离线）**：
• 将文档分割成块
• 将块转换为嵌入
• 存储在向量数据库

**2. 检索（查询时）**：
• 将用户问题转换为嵌入
• 在向量数据库中搜索相似块
• 返回top-k最相关结果

**3. 生成（查询时）**：
• 组合用户问题 + 检索到的上下文
• 发送给LLM并附带指令
• 生成有引用依据的响应`},{title:`关键组件`,content:`**文档处理**：
• 分块策略：固定大小、语义分割、递归
• 块之间的重叠以保留上下文
• 元数据：来源、日期、页码

**向量数据库**：
• Pinecone、Weaviate、Chroma、Milvus
• 支持相似度搜索（余弦、点积）
• 高效处理数百万嵌入

**检索策略**：
• 密集检索（嵌入）
• 稀疏检索（关键词搜索）
• 混合（结合两者）
• 重排：优化初始结果

**LLM集成**：
• 使用上下文的提示工程
• 指令："使用提供的上下文..."
• 引用格式化`},{title:`RAG最佳实践`,content:`**输入质量决定输出质量**：清晰、结构良好的文档带来更好的检索。

**块大小很重要**：太小丢失上下文，太大降低精度。512-1024 token是常见的。

**混合搜索**：结合语义相似度和关键词匹配以获得最佳结果。

**评估检索**：不要只评估最终输出。检查是否检索到了正确的文档。

**护栏**：确保检索内容被适当和安全地使用。

**更新**：当文档更改时设置管道刷新嵌入。

**多模态RAG**：将文本扩展到图像、表格、PDF、音频。`}],conclusion:`RAG已成为企业AI应用的核心技术，将LLM的能力与检索系统的准确性和新鲜度相结合。它解决了纯生成方法的关键局限性，同时使AI能够处理私有、最新的知识。`},keyConcepts:[`向量搜索`,`分块`,`检索`,`上下文窗口`,`引用`,`混合搜索`],relatedTopics:[`llm`,`embedding`,`machine-learning`]},{id:`machine-learning`,title:`机器学习`,category:`ml`,summary:`让计算机从数据中学习而无需明确编程的科学。`,content:{introduction:`机器学习（ML）是人工智能的一个分支，使系统能够自动学习和改进经验。与其对每个场景进行显式编程，机器学习算法使用统计技术来识别数据中的模式，并以最少的人为干预做出决策。`,sections:[{title:`机器学习的类型`,content:`机器学习大致分为三种主要类型：

**监督学习**：算法从标记的训练数据中学习，每个示例都与正确的输出配对。就像有一个提供答案的老师在学习。常见应用包括垃圾邮件检测和图像分类。

**无监督学习**：算法在没有人指导的情况下在未标记的数据中找到模式。它自行发现隐藏结构。用于客户细分和异常检测。

**强化学习**：算法通过与环境交互并根据其行为获得奖励或惩罚来学习。它通过试错来学习，类似于人类学习新技能的方式。应用于游戏和机器人技术。`},{title:`关键算法`,content:`流行的机器学习算法包括：

• **线性回归**：根据线性关系预测连续值
• **决策树**：基于树状模型做出决策
• **随机森林**：决策树的集成，提高准确性
• **支持向量机（SVM）**：找到不同类别之间的最优边界
• **K近邻（KNN）**：根据与相邻点的相似性进行分类
• **朴素贝叶斯**：基于贝叶斯定理的概率分类器`},{title:`应用领域`,content:`机器学习正在改变各行各业：

• **医疗保健**：疾病诊断、药物发现、患者监护
• **金融**：欺诈检测、算法交易、信用评分
• **交通运输**：自动驾驶汽车、路线优化
• **零售**：推荐系统、库存管理
• **娱乐**：内容个性化、游戏AI`}],conclusion:`机器学习构成了现代AI系统的基础。了解其原理对于任何想要从事人工智能技术的人来说都是必不可少的。`},keyConcepts:[`监督学习`,`无监督学习`,`强化学习`,`分类`,`回归`,`模型训练`],relatedTopics:[`deep-learning`,`neural-networks`,`reinforcement-learning`]},{id:`deep-learning`,title:`深度学习`,category:`deep-learning`,summary:`使用多层神经网络学习复杂模式的机器学习子集。`,content:{introduction:`深度学习是机器学习的一个专门分支，使用具有多层的人工神经网络（因此称为"深度"）来学习数据表示。这些深度神经网络可以自动发现大型数据集中的复杂模式，无需手动进行特征工程。`,sections:[{title:`深度学习如何工作`,content:`深度学习模型由多层相互连接的节点（神经元）组成：

**输入层**：接收原始数据（图像、文本、数字）

**隐藏层**：通过多个转换处理数据。每一层学习不同的特征——早期层可能在图像中检测边缘，而深层则将这些组合起来识别复杂的模式，如形状或物体。

**输出层**：产生最终预测或分类

网络的"深度"（层数）使其能够学习数据的分层表示，从简单到复杂的特征逐步构建。`},{title:`关键架构`,content:`不同的深度学习架构是为特定任务设计的：

**卷积神经网络（CNN）**：专门用于处理图像等网格数据。它们使用滤波器自动学习空间层次结构。

**循环神经网络（RNN）**：设计用于处理文本和时间序列等序列数据。它们有记忆来处理数据序列。

**Transformer**：通过使用自注意力机制并行处理序列，彻底改变了NLP。

**生成对抗网络（GAN）**：两个神经网络相互竞争以生成真实的合成数据。`},{title:`为什么深度学习重要`,content:`深度学习实现了以前不可能的突破：

• **超人类性能**：AI现在可以在图像识别、语音识别和游戏方面超越人类准确性
• **自动化特征学习**：无需手动设计特征——网络自动学习
• **可扩展性**：随着更多数据和更大网络，性能不断提高
• **迁移学习**：预训练模型可以用更少的数据微调以适应新任务`}],conclusion:`深度学习已成为AI的主导方法，为从语音助手到自动驾驶汽车的一切提供动力。它能够直接从原始数据中学习复杂模式，彻底改变了我们处理人工智能的方式。`},keyConcepts:[`神经网络`,`CNN`,`RNN`,`Transformer`,`反向传播`,`特征学习`],relatedTopics:[`neural-networks`,`machine-learning`,`nlp`,`vision`]},{id:`neural-networks`,title:`神经网络`,category:`deep-learning`,summary:`受人脑生物神经网络启发的计算系统。`,content:{introduction:`神经网络是受大脑生物神经网络启发的计算系统。它们由相互连接的节点（神经元）组成，这些节点按层组织来处理信息。通过调整神经元之间的连接，神经网络可以学习识别模式、做出预测和解决复杂问题。`,sections:[{title:`神经网络的结构`,content:`神经网络由以下部分组成：

**神经元（节点）**：基本计算单元，接收输入，应用权重，求和，然后通过激活函数传递。

**权重**：决定神经元之间连接强度的参数。学习涉及调整这些权重。

**偏置**：移动激活函数的额外参数，帮助网络更好地拟合数据。

**层**：
• 输入层：接收数据的特征
• 隐藏层：执行中间计算
• 输出层：产生最终预测`},{title:`网络如何学习`,content:`神经网络通过称为反向传播的过程学习：

**前向传播**：数据从输入通过网络流向输出，做出预测。

**损失计算**：网络的预测与实际答案进行比较，计算误差（损失）。

**反向传播**：误差通过网络向后传播，计算每个权重对误差的贡献程度。

**权重更新**：使用梯度下降优化调整权重以减少误差。

这个过程重复数千次，直到网络的预测足够准确。`},{title:`神经网络的类型`,content:`不同的架构适合不同的问题：

**前馈神经网络**：数据从一个方向从输入流向输出。用于简单的分类任务。

**卷积神经网络（CNN）**：使用卷积层处理图像等空间数据。

**循环神经网络（RNN）**：有循环连接，可以处理序列。适合文本和时间序列。

**长短期记忆网络（LSTM）**：高级RNN变体，可以长时间记忆信息。用于语言翻译和语音识别。`}],conclusion:`神经网络构成了现代AI的计算基础。理解神经元、层和权重如何协同工作来学习模式，对于掌握深度学习系统的功能至关重要。`},keyConcepts:[`神经元`,`权重`,`层`,`反向传播`,`激活函数`,`梯度下降`],relatedTopics:[`deep-learning`,`machine-learning`,`vision`]},{id:`nlp`,title:`自然语言处理`,category:`nlp`,summary:`使计算机能够理解、解释和生成人类语言。`,content:{introduction:`自然语言处理（NLP）是人工智能的一个分支，专注于使计算机能够以有价值的方式理解、解释和生成人类语言。它结合计算语言学、机器学习和深度学习来处理和分析大量自然语言数据。`,sections:[{title:`NLP任务`,content:`NLP涵盖了从简单到复杂的各种任务：

**文本分类**：将文本分类到预定义的类别中。用于垃圾邮件检测和情感分析。

**命名实体识别（NER）**：识别和分类文本中的实体，如姓名、地点和组织。

**机器翻译**：自动将文本从一种语言翻译成另一种语言。

**问答系统**：构建能够回答以自然语言提出的问题的系统。

**文本生成**：创建类人文本，用于聊天机器人和内容创作。`},{title:`NLP如何工作`,content:`现代NLP将文本转换为计算机可以处理的数字：

**分词**：将文本分解为单词、子词或字符（标记）。

**嵌入**：将标记转换为捕获语义含义的密集向量表示。

**上下文理解**：使用注意力机制根据上下文理解单词之间的关系。

**任务特定头**：在学习的表示之上添加层以执行分类或生成等特定任务。`},{title:`现代NLP与Transformer`,content:`Transformer架构的引入彻底改变了NLP：

**注意力机制**：允许模型在生成输出时关注输入的相关部分。这是使Transformer强大的关键创新。

**BERT**：预训练的双向编码器，从两个方向学习上下文。用于分类和实体识别。

**GPT模型**：生成式预训练Transformer，擅长文本生成。它们根据所有前面的词预测下一个词。

**大型语言模型（LLM）**：在大量文本上训练的庞大Transformer模型，能够以显著的流畅性执行多样的语言任务。`}],conclusion:`NLP已从简单的基于规则的系统发展到能够理解上下文、细微差别甚至生成创意内容的复杂深度学习模型。这项技术为虚拟助手、翻译服务和自动化内容分析提供了动力。`},keyConcepts:[`分词`,`嵌入`,`注意力机制`,`Transformer`,`BERT`,`GPT`],relatedTopics:[`deep-learning`,`llm`,`machine-learning`]},{id:`computer-vision`,title:`计算机视觉`,category:`vision`,summary:`训练机器解释和理解来自世界的视觉信息。`,content:{introduction:`计算机视觉是人工智能的一个领域，训练计算机解释和理解来自世界的视觉信息——图像和视频。它的任务范围从简单的图像分类到复杂的场景理解和实时视频分析。`,sections:[{title:`核心视觉任务`,content:`计算机视觉解决几个基本任务：

**图像分类**：判断图像包含什么物体或概念。"这是猫还是狗？"

**目标检测**：在图像中定位和分类多个对象，在每个对象周围绘制边界框。

**语义分割**：对图像中的每个像素进行分类，将每个像素分配给某个类别（道路、汽车、行人、天空）。

**图像生成**：创建新图像，从生成逼真面孔的GAN到从文本描述创建艺术的扩散模型。`},{title:`视觉系统如何"看"`,content:`计算机视觉系统将图像作为数字网格（像素）处理：

**用于视觉的CNN**：卷积神经网络是现代计算机视觉的支柱。它们应用滤波器来检测边缘、纹理和形状等特征。

**特征层次结构**：早期层检测简单特征（边缘、角落），而更深的层将这些组合起来识别复杂物体（面孔、汽车、建筑）。

**迁移学习**：在ImageNet等大型数据集上预训练的视觉模型可以用更少的数据微调以适应特定任务。

**实时处理**：现代架构支持实时处理视频帧，这对于自动驾驶和视频分析至关重要。`},{title:`应用领域`,content:`计算机视觉正在改变许多领域：

**医疗保健**：分析医学图像进行疾病检测，从X射线到MRI。AI可以像专家一样准确地发现癌症和疾病。

**自动驾驶汽车**：用于自动驾驶汽车的实时目标检测、车道跟踪和场景理解。

**零售**：无收银员商店、库存管理、客户跟踪。

**制造业**：质量控制、缺陷检测、装配线上的机器人引导。

**农业**：作物监测、疾病检测、自动化收割。`}],conclusion:`计算机视觉已在许多任务中达到了超人类的能力，从识别人脸到检测制造业中的缺陷。随着这些系统变得越来越复杂，它们实现了几年前还像科幻小说的新应用。`},keyConcepts:[`图像分类`,`目标检测`,`语义分割`,`CNN`,`特征提取`],relatedTopics:[`deep-learning`,`neural-networks`,`machine-learning`]},{id:`llm`,title:`大型语言模型`,category:`nlp`,summary:`在大量文本数据上训练的庞大AI模型，能够理解和生成人类语言。`,content:{introduction:`大型语言模型（LLM）是在大量文本数据上训练的庞大神经网络。这些模型可以理解上下文，生成类人文本，回答问题，编写代码，并以卓越的流畅性执行各种语言任务。`,sections:[{title:`是什么让LLM特别`,content:`LLM有几个独特的特点：

**规模**：在数十亿或数万亿个单词上训练，包含数千亿个参数。这种规模实现了新兴能力。

**通用性**：与专业模型不同，LLM可以执行许多不同的语言任务，无需特定于任务的训练。

**少样本学习**：可以通过在提示中理解几个示例来适应新任务，无需重新训练。

**涌现行为**：在足够规模下，模型会自发地发展出未经明确训练的能力，如推理和逐步解决问题。`},{title:`LLM如何工作`,content:`LLM使用Transformer架构，但有一些关键变化：

**自回归生成**：像GPT这样的模型一次预测和生成一个token，将每个新词 conditioning 在所有前面的词上。

**预训练**：模型通过预测大量数据集中下一个词来学习语言，培养广泛的知识和能力。

**微调**：可以使用RLHF（从人类反馈中进行强化学习）等技术来细化特定任务或调整以遵循指令。

**上下文窗口**：模型一次可以考虑的文本量，决定了它在生成响应时可以使用多少上下文。`},{title:`能力与局限`,content:`LLM可以做到令人惊奇的事情：

**文本生成**：以类人的质量写论文、文章、故事、代码、电子邮件

**问答**：从训练知识中回答关于几乎任何主题的问题

**推理**：解决多步骤问题，尽管有时会犯逻辑错误

**翻译**：高质量地翻译语言

**需要了解的局限性**：
• 幻觉：可能生成似是而非但不正确的信息
• 知识截止：局限于训练数据，没有实时信息
• 上下文长度：无法处理任意长的文档
• 偏见：可能反映训练数据中存在的偏见`}],conclusion:`LLM代表了AI的重大里程碑，证明规模可以解锁多样的语言能力。虽然它们有局限性，但它们从根本上改变了我们与AI系统互动的方式，为人机协作开辟了新的可能性。`},keyConcepts:[`Transformer`,`自回归`,`微调`,`RLHF`,`少样本学习`,`幻觉`],relatedTopics:[`nlp`,`deep-learning`,`neural-networks`]},{id:`reinforcement-learning`,title:`强化学习`,category:`ml`,summary:`通过奖励期望行为来训练AI智能体做出决策。`,content:{introduction:`强化学习（RL）是一种机器学习类型，其中智能体通过与环境交互来学习做出决策。与从标记示例中学习不同，智能体通过试错来学习，根据其行为获得奖励或惩罚。这种方法产生了能够掌握复杂游戏和控制机器人系统的AI。`,sections:[{title:`RL框架`,content:`强化学习涉及几个关键组件：

**智能体**：做出决定并采取行动的AI系统。

**环境**：智能体与之交互的世界——可以是游戏、模拟器或现实环境。

**状态**：智能体观察到的当前情况的表示。

**动作**：智能体在每个状态下可以做什么。

**奖励**：来自环境的反馈，表明行为是好是坏。

**策略**：智能体根据状态选择动作的策略——这是智能体学习的东西。`},{title:`RL智能体如何学习`,content:`智能体通过探索和利用的相互作用来学习：

**探索**：尝试新动作以发现它们的效果并找到更好的策略。

**利用**：使用已知的好动作来最大化即时奖励。

**Q学习**：一种基本的RL算法，智能体学习动作-状态对的价值——在这种状态下采取这个动作有多好？

**深度RL**：将RL与深度神经网络相结合，能够处理像图像这样复杂的高维状态空间。

**策略梯度方法**：直接学习将状态映射到动作的策略函数，适用于大的或连续的动作空间。`},{title:`实际应用`,content:`强化学习取得了显著的成果：

**游戏**：AlphaGo击败了围棋世界冠军，将RL与树搜索相结合。RL智能体已经掌握了国际象棋、扑克、视频游戏等。

**机器人技术**：训练机器人行走、抓取物体和执行操作任务。RL使机器人能够适应现实世界的可变性。

**自动驾驶**：学习车道变换、合并和导航复杂交通情况的决策。

**资源管理**：优化数据中心冷却、CPU分配和供应链。

**推荐系统**：学习建议能最大化长期用户参与度的内容。`}],conclusion:`强化学习使AI能够通过交互学习复杂行为，在游戏中达到超人类的表现，并使机器人能够适应新情况。它代表了一种与监督学习不同的范式，更接近于人类和动物通过经验学习的方式。`},keyConcepts:[`智能体`,`环境`,`奖励`,`策略`,`Q学习`,`探索与利用`],relatedTopics:[`machine-learning`,`deep-learning`]},{id:`ai-ethics`,title:`AI伦理`,category:`applications`,summary:`研究AI系统开发的道德影响和责任。`,content:{introduction:`AI伦理是研究与人工智能的开发、部署和使用相关的道德问题。随着AI系统变得越来越强大和普及，了解其伦理含义对于确保技术造福人类至关重要。`,sections:[{title:`关键伦理问题`,content:`AI发展面临几个关键伦理问题：

**偏见与公平**：AI系统可能继承和放大训练数据中存在的偏见，导致在招聘、贷款、司法和医疗保健方面的歧视性结果。

**隐私**：AI系统通常需要大量数据，引发关于监控、数据保护和同意的担忧。

**透明度**：许多AI系统，特别是深度学习模型，作为"黑箱"运作——它们的决策难以解释或理解。

**问责制**：当AI系统造成伤害时，通常不清楚谁应该承担责任——开发者、用户还是系统本身。

**工作替代**：自动化可能消除数百万个工作岗位，需要社会适应和安全网。`},{title:`负责任AI的原则`,content:`组织和政府提出了各种原则：

**行善**：AI应该造福人类和提高福祉。

**无害**：AI不应该伤害人们或被恶意使用。

**公正**：利益和风险应在全社会公平分配。

**自主**：人类应该保持对AI系统的控制，而不是相反。

**可解释性**：AI决策应该是可理解和可辩护的。

**隐私**：必须保护个人数据权利。

**稳健性**：AI系统应该是安全、可靠和可靠的。`},{title:`当前努力与挑战`,content:`AI社区正在积极研究伦理AI：

**偏见检测**：识别和减轻数据集和模型中偏见的工具和技术。

**可解释AI（XAI）**：使AI决策更易解释和透明的方法。

**法规**：欧盟AI法案、美国行政命令和各种国家政策正在建立法律框架。

**伦理委员会**：主要AI实验室已建立伦理审查程序。

**开放性问题**：
• 如何在创新与安全之间取得平衡？
• 谁来决定AI应该体现什么价值观？
• AI系统可以有道德代理或责任吗？
• 如何确保公平获得AI的好处？`}],conclusion:`AI伦理不是事后考虑，而是负责任AI开发的基本考虑因素。随着AI能力的增长，我们确保这些强大工具为人类最佳利益服务同时最小化伤害的责任也在增长。`},keyConcepts:[`偏见`,`公平`,`透明度`,`问责制`,`隐私`,`可解释性`],relatedTopics:[`machine-learning`,`llm`]}],g=[{id:`latest`,name:`Latest`,icon:`✨`},{id:`fundamentals`,name:`Fundamentals`,icon:`📚`},{id:`ml`,name:`Machine Learning`,icon:`🤖`},{id:`deep-learning`,name:`Deep Learning`,icon:`🧠`},{id:`nlp`,name:`NLP`,icon:`💬`},{id:`vision`,name:`Computer Vision`,icon:`👁️`},{id:`applications`,name:`Applications`,icon:`🚀`}],_=[{id:`latest`,name:`最新`,icon:`✨`},{id:`fundamentals`,name:`基础知识`,icon:`📚`},{id:`ml`,name:`机器学习`,icon:`🤖`},{id:`deep-learning`,name:`深度学习`,icon:`🧠`},{id:`nlp`,name:`自然语言处理`,icon:`💬`},{id:`vision`,name:`计算机视觉`,icon:`👁️`},{id:`applications`,name:`应用`,icon:`🚀`}],v=e=>e===`zh`?h:m,y=e=>e===`zh`?_:g;function b({selectedCategory:e,onCategoryClick:t,lang:n,isOpen:r}){let i=y(n);return(0,d.jsxs)(`aside`,{className:`sidebar ${r?`sidebar--open`:``}`,children:[(0,d.jsx)(`div`,{className:`sidebar__header`,children:(0,d.jsx)(`h2`,{className:`sidebar__title`,children:n===`zh`?`分类`:`Categories`})}),(0,d.jsxs)(`nav`,{className:`sidebar__nav`,children:[(0,d.jsxs)(`button`,{className:`sidebar__item ${e?``:`sidebar__item--active`}`,onClick:()=>t(null),children:[(0,d.jsx)(`span`,{className:`sidebar__item-icon`,children:`🏠`}),(0,d.jsx)(`span`,{className:`sidebar__item-name`,children:n===`zh`?`所有主题`:`All Topics`})]}),i.map(n=>(0,d.jsxs)(`button`,{className:`sidebar__item ${e===n.id?`sidebar__item--active`:``}`,onClick:()=>t(n.id),"data-category":n.id,children:[(0,d.jsx)(`span`,{className:`sidebar__item-icon`,children:n.icon}),(0,d.jsx)(`span`,{className:`sidebar__item-name`,children:n.name})]},n.id))]})]})}function x({lang:e}){return(0,d.jsx)(`footer`,{className:`footer`,children:(0,d.jsxs)(`div`,{className:`footer__inner`,children:[(0,d.jsxs)(`p`,{className:`footer__text`,children:[`🧠 `,e===`zh`?`AI百科`:`AI Encyclopedia`,` - `,e===`zh`?`让AI知识触手可及`:`Making AI knowledge accessible to everyone`]}),(0,d.jsx)(`p`,{className:`footer__copyright`,children:e===`zh`?`使用 Claude Code + MiniMax 2.7 零代码构建`:`Built with Claude Code + MiniMax 2.7`})]})})}function ee({hasBack:e,onBack:t}){let[n,r]=(0,l.useState)(!1),[i,a]=(0,l.useState)(()=>{let e=localStorage.getItem(`back-btn-position`);return e?JSON.parse(e):{x:null,y:null}}),[o,s]=(0,l.useState)(()=>{let e=localStorage.getItem(`top-btn-position`);return e?JSON.parse(e):{x:null,y:null}}),[c,u]=(0,l.useState)(null),f=(0,l.useRef)({startX:0,startY:0,initialX:0,initialY:0});(0,l.useEffect)(()=>{let e=()=>{r(window.scrollY>300)};return window.addEventListener(`scroll`,e),()=>window.removeEventListener(`scroll`,e)},[]);let p=(0,l.useCallback)((e,t)=>{let n={x:e,y:t};a(n),localStorage.setItem(`back-btn-position`,JSON.stringify(n))},[]),m=(0,l.useCallback)((e,t)=>{let n={x:e,y:t};s(n),localStorage.setItem(`top-btn-position`,JSON.stringify(n))},[]),h=(e,t)=>{u(t);let n=e.type===`touchstart`?e.touches[0].clientX:e.clientX,r=e.type===`touchstart`?e.touches[0].clientY:e.clientY,a=t===`back`?i:o;f.current={startX:n,startY:r,initialX:a.x??(t===`back`?16:70),initialY:a.y??100}},g=e=>{if(!c)return;e.preventDefault();let t=e.type===`touchmove`?e.touches[0].clientX:e.clientX,n=e.type===`touchmove`?e.touches[0].clientY:e.clientY,r=t-f.current.startX,i=n-f.current.startY,a=Math.max(0,Math.min(window.innerWidth-50,f.current.initialX-r)),o=Math.max(0,Math.min(window.innerHeight-150,f.current.initialY-i));c===`back`?p(a,o):m(a,o)},_=()=>{u(null)},v=()=>{c||window.scrollTo({top:0,behavior:`smooth`})};if(!e&&!n)return null;let y=i.x===null?16:i.x,b=i.y===null?100:i.y,x=o.x===null?70:o.x,ee=o.y===null?100:o.y;return(0,d.jsxs)(`div`,{className:`mobile-nav-buttons`,onMouseMove:g,onMouseUp:_,onMouseLeave:_,onTouchMove:g,onTouchEnd:_,children:[e&&(0,d.jsx)(`button`,{className:`mobile-nav-btn mobile-nav-btn--back ${c===`back`?`dragging`:``}`,style:{right:y,bottom:b},onClick:c?void 0:t,onMouseDown:e=>h(e,`back`),onTouchStart:e=>h(e,`back`),"aria-label":`Go back`,children:(0,d.jsx)(`svg`,{width:`20`,height:`20`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2.5`,strokeLinecap:`round`,strokeLinejoin:`round`,children:(0,d.jsx)(`path`,{d:`M15 18l-6-6 6-6`})})}),n&&(0,d.jsx)(`button`,{className:`mobile-nav-btn mobile-nav-btn--top ${c===`top`?`dragging`:``}`,style:{right:x,bottom:ee},onClick:c?void 0:v,onMouseDown:e=>h(e,`top`),onTouchStart:e=>h(e,`top`),"aria-label":`Back to top`,children:(0,d.jsx)(`svg`,{width:`20`,height:`20`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2.5`,strokeLinecap:`round`,strokeLinejoin:`round`,children:(0,d.jsx)(`path`,{d:`M18 15l-6-6-6 6`})})})]})}function S({categoryId:e,size:t=`md`,lang:n=`en`}){let r=y(n).find(t=>t.id===e);return r?(0,d.jsxs)(`span`,{className:`badge badge--${t}`,"data-category":e,children:[(0,d.jsx)(`span`,{className:`badge__icon`,children:r.icon}),(0,d.jsx)(`span`,{className:`badge__name`,children:r.name})]}):null}function C({topic:e,onClick:t,lang:n}){return(0,d.jsxs)(`article`,{className:`topic-card`,onClick:()=>t(e.id),children:[(0,d.jsxs)(`div`,{className:`topic-card__header`,children:[(0,d.jsx)(S,{categoryId:e.category,size:`sm`,lang:n}),e.isNew&&(0,d.jsx)(`span`,{className:`topic-card__new-badge`,children:n===`zh`?`新`:`New`})]}),(0,d.jsx)(`h3`,{className:`topic-card__title`,children:e.title}),(0,d.jsx)(`p`,{className:`topic-card__summary`,children:e.summary}),(0,d.jsxs)(`div`,{className:`topic-card__footer`,children:[(0,d.jsx)(`span`,{className:`topic-card__concepts`,children:e.keyConcepts.slice(0,3).join(` • `)}),(0,d.jsx)(`span`,{className:`topic-card__arrow`,children:`→`})]})]})}function te({onTopicClick:e,lang:t,searchQuery:n}){let r=v(t),i=n?r.filter(e=>e.title.toLowerCase().includes(n.toLowerCase())||e.summary.toLowerCase().includes(n.toLowerCase())||e.keyConcepts.some(e=>e.toLowerCase().includes(n.toLowerCase()))):r;return(0,d.jsxs)(`div`,{className:`home`,children:[(0,d.jsx)(`header`,{className:`home__header`,children:n?(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(`h1`,{className:`home__title`,children:t===`zh`?`搜索结果`:`Search Results`}),(0,d.jsx)(`p`,{className:`home__subtitle`,children:t===`zh`?`找到 ${i.length} 个与 "${n}" 相关的主题`:`Found ${i.length} topics matching "${n}"`})]}):(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(`h1`,{className:`home__title`,children:t===`zh`?`探索AI知识`:`Explore AI Knowledge`}),(0,d.jsx)(`p`,{className:`home__subtitle`,children:t===`zh`?`发现驱动人工智能的基础概念和前沿技术。`:`Discover the fundamental concepts and cutting-edge technologies that power artificial intelligence.`})]})}),i.length>0?(0,d.jsx)(`div`,{className:`home__grid`,children:i.map(n=>(0,d.jsx)(C,{topic:n,onClick:e,lang:t},n.id))}):(0,d.jsxs)(`div`,{className:`home__empty`,children:[(0,d.jsx)(`p`,{className:`home__empty-icon`,children:`🔍`}),(0,d.jsx)(`p`,{className:`home__empty-text`,children:t===`zh`?`未找到相关主题`:`No topics found`}),(0,d.jsx)(`p`,{className:`home__empty-hint`,children:t===`zh`?`尝试其他关键词`:`Try different keywords`})]})]})}function ne({title:e,children:t,className:n=``}){return(0,d.jsxs)(`section`,{className:`section ${n}`,children:[e&&(0,d.jsx)(`h3`,{className:`section__title`,children:e}),(0,d.jsx)(`div`,{className:`section__content`,children:t})]})}var re=`AI ethics is the study of moral issues related to the development, deployment, and use of artificial intelligence systems. As AI systems become more powerful and pervasive, understanding their ethical implications is crucial for ensuring the technology benefits humanity.

## Key Ethical Concerns

AI development faces several key ethical concerns:

**Bias and Fairness**: AI systems may inherit and amplify biases present in training data, leading to discriminatory outcomes in hiring, lending, justice, and healthcare.

**Privacy**: AI systems often require large amounts of data, raising concerns about surveillance, data protection, and consent.

**Transparency**: Many AI systems, especially deep learning models, operate as "black boxes" — their decisions are difficult to explain or understand.

**Accountability**: When AI systems cause harm, it's often unclear who should be held responsible — developers, users, or the system itself.

**Job Displacement**: Automation may eliminate millions of jobs, requiring societal adaptation and safety nets.

## Principles of Responsible AI

Organizations and governments have proposed various principles:

**Beneficence**: AI should benefit humanity and enhance well-being.

**Non-maleficence**: AI should not harm people or be used maliciously.

**Justice**: Benefits and risks should be distributed fairly across society.

**Autonomy**: Humans should maintain control over AI systems, not the other way around.

**Explainability**: AI decisions should be understandable and defensible.

**Privacy**: Individual data rights must be protected.

**Robustness**: AI systems should be safe, secure, and reliable.

## Current Efforts and Challenges

The AI community is actively working on ethical AI:

**Bias Detection**: Tools and techniques to identify and mitigate biases in datasets and models.

**Explainable AI (XAI)**: Methods to make AI decisions more interpretable and transparent.

**Regulation**: The EU AI Act, US executive orders, and various national policies are establishing legal frameworks.

**Ethics Boards**: Major AI labs have established ethics review procedures.

**Open Questions**:
• How to balance innovation with safety?
• Who decides what values AI should embody?
• Can AI systems have moral agency or responsibility?
• How to ensure equitable access to AI's benefits?

AI ethics is not an afterthought but a fundamental consideration for responsible AI development. As AI capabilities grow, so does our responsibility to ensure these powerful tools serve humanity's best interests while minimizing harm.
`,ie=`AI伦理是研究与人工智能的开发、部署和使用相关的道德问题。随着AI系统变得越来越强大和普及，了解其伦理含义对于确保技术造福人类至关重要。

## 关键伦理问题

AI发展面临几个关键伦理问题：

**偏见与公平**：AI系统可能继承和放大训练数据中存在的偏见，导致在招聘、贷款、司法和医疗保健方面的歧视性结果。

**隐私**：AI系统通常需要大量数据，引发关于监控、数据保护和同意的担忧。

**透明度**：许多AI系统，特别是深度学习模型，作为"黑箱"运作——它们的决策难以解释或理解。

**问责制**：当AI系统造成伤害时，通常不清楚谁应该承担责任——开发者、用户还是系统本身。

**工作替代**：自动化可能消除数百万个工作岗位，需要社会适应和安全网。

## 负责任AI的原则

组织和政府提出了各种原则：

**行善**：AI应该造福人类和提高福祉。

**无害**：AI不应该伤害人们或被恶意使用。

**公正**：利益和风险应在全社会公平分配。

**自主**：人类应该保持对AI系统的控制，而不是相反。

**可解释性**：AI决策应该是可理解和可辩护的。

**隐私**：必须保护个人数据权利。

**稳健性**：AI系统应该是安全、可靠和可靠的。

## 当前努力与挑战

AI社区正在积极研究伦理AI：

**偏见检测**：识别和减轻数据集和模型中偏见的工具和技术。

**可解释AI（XAI）**：使AI决策更易解释和透明的方法。

**法规**：欧盟AI法案、美国行政命令和各种国家政策正在建立法律框架。

**伦理委员会**：主要AI实验室已建立伦理审查程序。

**开放性问题**：
• 如何在创新与安全之间取得平衡？
• 谁来决定AI应该体现什么价值观？
• AI系统可以有道德代理或责任吗？
• 如何确保公平获得AI的好处？

AI伦理不是事后考虑，而是负责任AI开发的基本考虑因素。随着AI能力的增长，我们确保这些强大工具为人类最佳利益服务同时最小化伤害的责任也在增长。
`,ae=`Computer vision is the field of AI that trains computers to interpret and understand visual information from the world — images and videos. Its tasks range from simple image classification to complex scene understanding and real-time video analysis.

## Core Vision Tasks

Computer vision addresses several fundamental tasks:

**Image Classification**: Determining what object or concept an image contains. "Is this a cat or a dog?"

**Object Detection**: Locating and classifying multiple objects in an image, drawing bounding boxes around each object.

**Semantic Segmentation**: Classifying each pixel in an image, assigning each pixel to some category (road, car, pedestrian, sky).

**Image Generation**: Creating new images, from GANs that generate realistic faces to diffusion models that create art from text descriptions.

## How Vision Systems "See"

Computer vision systems process images as grids of numbers (pixels):

**CNNs for Vision**: Convolutional neural networks are the backbone of modern computer vision. They apply filters to detect features like edges, textures, and shapes.

**Feature Hierarchies**: Early layers detect simple features (edges, corners), while deeper layers combine these to identify complex objects (faces, cars, buildings).

**Transfer Learning**: Vision models pretrained on large datasets like ImageNet can be fine-tuned with less data for specific tasks.

**Real-time Processing**: Modern architectures support real-time processing of video frames, essential for self-driving cars and video analysis.

## Application Areas

Computer vision is transforming many fields:

**Healthcare**: Analyzing medical images for disease detection, from X-rays to MRIs. AI can find cancers and diseases as accurately as experts.

**Self-Driving Cars**: Real-time object detection, lane tracking, and scene understanding for autonomous vehicles.

**Retail**: Cashierless stores, inventory management, customer tracking.

**Manufacturing**: Quality control, defect detection, robot guidance on assembly lines.

**Agriculture**: Crop monitoring, disease detection, automated harvesting.

Computer vision has achieved superhuman capabilities in many tasks, from recognizing faces to detecting defects in manufacturing. As these systems become more sophisticated, they're enabling new applications that seemed like science fiction just years ago.
`,oe=`计算机视觉是人工智能的一个领域，训练计算机解释和理解来自世界的视觉信息——图像和视频。它的任务范围从简单的图像分类到复杂的场景理解和实时视频分析。

## 核心视觉任务

计算机视觉解决几个基本任务：

**图像分类**：判断图像包含什么物体或概念。"这是猫还是狗？"

**目标检测**：在图像中定位和分类多个对象，在每个对象周围绘制边界框。

**语义分割**：对图像中的每个像素进行分类，将每个像素分配给某个类别（道路、汽车、行人、天空）。

**图像生成**：创建新图像，从生成逼真面孔的GAN到从文本描述创建艺术的扩散模型。

## 视觉系统如何"看"

计算机视觉系统将图像作为数字网格（像素）处理：

**用于视觉的CNN**：卷积神经网络是现代计算机视觉的支柱。它们应用滤波器来检测边缘、纹理和形状等特征。

**特征层次结构**：早期层检测简单特征（边缘、角落），而更深的层将这些组合起来识别复杂物体（面孔、汽车、建筑）。

**迁移学习**：在ImageNet等大型数据集上预训练的视觉模型可以用更少的数据微调以适应特定任务。

**实时处理**：现代架构支持实时处理视频帧，这对于自动驾驶和视频分析至关重要。

## 应用领域

计算机视觉正在改变许多领域：

**医疗保健**：分析医学图像进行疾病检测，从X射线到MRI。AI可以像专家一样准确地发现癌症和疾病。

**自动驾驶汽车**：用于自动驾驶汽车的实时目标检测、车道跟踪和场景理解。

**零售**：无收银员商店、库存管理、客户跟踪。

**制造业**：质量控制、缺陷检测、装配线上的机器人引导。

**农业**：作物监测、疾病检测、自动化收割。

计算机视觉已在许多任务中达到了超人类的能力，从识别人脸到检测制造业中的缺陷。随着这些系统变得越来越复杂，它们实现了几年前还像科幻小说的新应用。
`,se=`Deep learning is a specialized branch of machine learning that uses artificial neural networks with multiple layers (hence "deep") to learn data representations. These deep neural networks can automatically discover complex patterns in large datasets without manual feature engineering.

## How Deep Learning Works

Deep learning models consist of multiple layers of interconnected nodes (neurons):

**Input Layer**: Receives raw data (images, text, numbers)

**Hidden Layers**: Process data through multiple transformations. Each layer learns different features — early layers might detect edges in images, while deeper layers combine these to identify complex patterns like shapes or objects.

**Output Layer**: Produces the final prediction or classification

The "depth" (number of layers) of the network enables it to learn hierarchical representations of data, progressively building from simple to complex features.

## Key Architectures

Different deep learning architectures are designed for specific tasks:

**Convolutional Neural Networks (CNN)**: Specialized for processing grid data like images. They use filters to automatically learn spatial hierarchies.

**Recurrent Neural Networks (RNN)**: Designed to process sequential data like text and time series. They have memory to handle sequences of data.

**Transformer**: Revolutionized NLP by processing sequences in parallel using self-attention mechanisms.

**Generative Adversarial Networks (GAN)**: Two neural networks compete against each other to generate realistic synthetic data.

## Why Deep Learning Matters

Deep learning enabled breakthroughs that were previously impossible:

• **Superhuman Performance**: AI can now surpass human accuracy in image recognition, speech recognition, and games
• **Automated Feature Learning**: No manual feature design needed — networks learn automatically
• **Scalability**: Performance keeps improving with more data and larger networks
• **Transfer Learning**: Pretrained models can be fine-tuned with less data for new tasks

Deep learning has become the dominant approach in AI, powering everything from voice assistants to self-driving cars. Its ability to learn complex patterns directly from raw data has revolutionized how we approach artificial intelligence.
`,ce=`深度学习是机器学习的一个专门分支，使用具有多层的人工神经网络（因此称为"深度"）来学习数据表示。这些深度神经网络可以自动发现大型数据集中的复杂模式，无需手动进行特征工程。

## 深度学习如何工作

深度学习模型由多层相互连接的节点（神经元）组成：

**输入层**：接收原始数据（图像、文本、数字）

**隐藏层**：通过多个转换处理数据。每一层学习不同的特征——早期层可能在图像中检测边缘，而深层则将这些组合起来识别复杂的模式，如形状或物体。

**输出层**：产生最终预测或分类

网络的"深度"（层数）使其能够学习数据的分层表示，从简单到复杂的特征逐步构建。

## 关键架构

不同的深度学习架构是为特定任务设计的：

**卷积神经网络（CNN）**：专门用于处理图像等网格数据。它们使用滤波器自动学习空间层次结构。

**循环神经网络（RNN）**：设计用于处理文本和时间序列等序列数据。它们有记忆来处理数据序列。

**Transformer**：通过使用自注意力机制并行处理序列，彻底改变了NLP。

**生成对抗网络（GAN）**：两个神经网络相互竞争以生成真实的合成数据。

## 为什么深度学习重要

深度学习实现了以前不可能的突破：

• **超人类性能**：AI现在可以在图像识别、语音识别和游戏方面超越人类准确性
• **自动化特征学习**：无需手动设计特征——网络自动学习
• **可扩展性**：随着更多数据和更大网络，性能不断提高
• **迁移学习**：预训练模型可以用更少的数据微调以适应新任务

深度学习已成为AI的主导方法，为从语音助手到自动驾驶汽车的一切提供动力。它能够直接从原始数据中学习复杂模式，彻底改变了我们处理人工智能的方式。
`,le=`Embedding is the technique of converting text, images, or other data into numerical vector representations. They transform human-readable content into a format that AI can mathematically process while capturing semantic meaning. This technology is fundamental to AI's ability to understand and compare concepts.

## What is Embedding?

Embeddings transform discrete data (like words or images) into continuous number vectors. Each dimension of the vector captures some aspect of meaning.

**Simple Example**:
• "cat" → [0.2, -0.5, 0.8, ...]
• "dog" → [0.25, -0.4, 0.75, ...]
• "car" → [-0.8, 0.3, -0.2, ...]

Notice "cat" and "dog" have similar vectors (both animals), while "car" is quite different.

**Key Properties**:
• Similar concepts have similar vectors
• Distance between vectors represents semantic similarity
• Typically 256 to 3072 dimensions

## How Embeddings Work

Embeddings are created by neural networks trained on massive datasets:

**Word2Vec**: Early technique that learns word relationships from large corpora. "King - man + woman = Queen"

**Contextual Embeddings**: Modern models like BERT create context-based embeddings. "Bank" has different embeddings in "river bank" and "bank account".

**Sentence Embeddings**: Models like sentence-transformers create embeddings for entire sentences, capturing overall meaning.

**How Models Use Them**:
1. Convert text to vectors
2. Perform mathematical operations on vectors
3. Compare distances to discover relationships
4. Use results for classification, search, or generation

## Applications of Embeddings

Embeddings power many AI applications:

**Semantic Search**: Search documents by meaning, not keywords. Searching "car energy" finds articles about "electric cars" and "batteries".

**Recommendation Systems**: Recommend similar content based on embedding similarity. Music, movies, products.

**RAG (Retrieval Augmented Generation)**: Store knowledge as embeddings, retrieve relevant content to enhance LLM responses.

**Classification**: Group similar items for categorization.

**Anomaly Detection**: Discover outliers by measuring distance from normal clusters.

**Image Recognition**: Compare image embeddings for similarity matching.

## Embedding Models and Costs

Different embedding models offer different capabilities:

**Popular Models**:
• OpenAI text-embedding-ada-002
• Cohere embed-multilingual
• Sentence-transformers (open source)

**Cost Considerations**:
• Priced per 1K tokens
• Dimensions affect quality and speed
• Bigger isn't always better for your use case

**Choosing Embeddings**:
• Choose a model that matches your language
• Consider the number of dimensions needed
• Balance quality, speed, and cost

Embeddings are the bridge between human language and AI understanding. By converting text to numbers, they enable AI to compare, search, and reason about meaning at scale.
`,ue=`嵌入（Embedding）是将文本、图像或其他数据以密集向量的形式转换为数值表示的技术。它们将人类可读的内容转换为AI可以数学处理格式，同时捕捉语义含义。这一技术是AI理解和比较概念的基础。

## 什么是嵌入？

嵌入将离散数据（如单词或图像）转换为连续的数字向量。向量的每个维度捕捉含义的某个方面。

**简单示例**：
• "猫" → [0.2, -0.5, 0.8, ...]
• "狗" → [0.25, -0.4, 0.75, ...]
• "汽车" → [-0.8, 0.3, -0.2, ...]

注意"猫"和"狗"的向量相似（都是动物），而"汽车"则很不同。

**关键特性**：
• 相似概念有相似向量
• 向量之间的距离表示语义相似度
• 通常256到3072维

## 嵌入如何工作

嵌入由在海量数据集上训练的神经网络创建：

**Word2Vec**：早期技术，从大型语料库学习单词关系。"国王 - 男人 + 女人 = 女王"

**上下文嵌入**：BERT等现代模型创建基于上下文的嵌入。"银行"在"河岸"和"银行账户"中有不同的嵌入。

**句子嵌入**：sentence-transformers等模型为整个句子创建嵌入，捕捉整体含义。

**模型如何使用**：
1. 将文本转换为向量
2. 对向量执行数学运算
3. 比较距离以发现关系
4. 使用结果进行分类、搜索或生成

## 嵌入的应用

嵌入为许多AI应用提供动力：

**语义搜索**：按含义而非关键词搜索文档。搜索"汽车的能源"能找到关于"电动汽车"和"电池"的文章。

**推荐系统**：基于嵌入相似性推荐相似内容。音乐、电影、产品。

**RAG（检索增强生成）**：将知识存储为嵌入，检索相关内容增强LLM响应。

**分类**：将相似项目分组进行分类。

**异常检测**：通过测量与正常群集的距离来发现异常值。

**图像识别**：比较图像嵌入进行相似度匹配。

## 嵌入模型与成本

不同的嵌入模型提供不同的能力：

**流行模型**：
• OpenAI text-embedding-ada-002
• Cohere embed-multilingual
• Sentence-transformers（开源）

**成本考虑**：
• 按每1K token定价
• 维度影响质量 和速度
• 更大不一定对你的用例更好

**选择嵌入**：
• 选择与你的语言匹配的模型
• 考虑所需的维度数量
• 平衡质量、速度和成本

嵌入是人类语言与AI理解之间的桥梁。通过将文本转换为数字，它们使AI能够大规模地比较、搜索和推理含义。
`,de=`Large Language Models (LLMs) are massive neural networks trained on huge amounts of text data. These models can understand context, generate human-like text, answer questions, write code, and perform various language tasks with remarkable fluency.

## What Makes LLMs Special

LLMs have several unique characteristics:

**Scale**: Trained on billions or trillions of words, containing hundreds of billions of parameters. This scale enables emergent capabilities.

**Generalization**: Unlike specialized models, LLMs can perform many different language tasks without task-specific training.

**Few-shot Learning**: Can adapt to new tasks by understanding a few examples in the prompt, without retraining.

**Emergent Behaviors**: At sufficient scale, models spontaneously develop capabilities they weren't explicitly trained for, like reasoning and step-by-step problem solving.

## How LLMs Work

LLMs use the Transformer architecture with some key variations:

**Autoregressive Generation**: Models like GPT predict and generate one token at a time, conditioning each new word on all previous words.

**Pretraining**: Models learn language by predicting the next word in massive datasets, developing broad knowledge and capabilities.

**Fine-tuning**: Can be refined for specific tasks or adjusted to follow instructions using techniques like RLHF (Reinforcement Learning from Human Feedback).

**Context Window**: The amount of text a model can consider at once, determining how much context it can use when generating responses.

## Capabilities and Limitations

LLMs can do amazing things:

**Text Generation**: Write essays, articles, stories, code, emails with human-like quality

**Question Answering**: Answer questions about almost any topic from training knowledge

**Reasoning**: Solve multi-step problems, though sometimes making logical errors

**Translation**: Translate languages with high quality

**Limitations to know**:
• Hallucinations: May generate plausible but incorrect information
• Knowledge cutoff: Limited to training data, no real-time information
• Context length: Cannot process arbitrarily long documents
• Biases: May reflect biases present in training data

LLMs represent a major milestone in AI, demonstrating that scale can unlock diverse language capabilities. While they have limitations, they've fundamentally changed how we interact with AI systems, opening new possibilities for human-AI collaboration.
`,w=`大型语言模型（LLM）是在大量文本数据上训练的庞大神经网络。这些模型可以理解上下文，生成类人文本，回答问题，编写代码，并以卓越的流畅性执行各种语言任务。

## 是什么让LLM特别

LLM有几个独特的特点：

**规模**：在数十亿或数万亿个单词上训练，包含数千亿个参数。这种规模实现了新兴能力。

**通用性**：与专业模型不同，LLM可以执行许多不同的语言任务，无需特定于任务的训练。

**少样本学习**：可以通过在提示中理解几个示例来适应新任务，无需重新训练。

**涌现行为**：在足够规模下，模型会自发地发展出未经明确训练的能力，如推理和逐步解决问题。

## LLM如何工作

LLM使用Transformer架构，但有一些关键变化：

**自回归生成**：像GPT这样的模型一次预测和生成一个token，将每个新词 conditioning 在所有前面的词上。

**预训练**：模型通过预测大量数据集中下一个词来学习语言，培养广泛的知识和能力。

**微调**：可以使用RLHF（从人类反馈中进行强化学习）等技术来细化特定任务或调整以遵循指令。

**上下文窗口**：模型一次可以考虑的文本量，决定了它在生成响应时可以使用多少上下文。

## 能力与局限

LLM可以做到令人惊奇的事情：

**文本生成**：以类人的质量写论文、文章、故事、代码、电子邮件

**问答**：从训练知识中回答关于几乎任何主题的问题

**推理**：解决多步骤问题，尽管有时会犯逻辑错误

**翻译**：高质量地翻译语言

**需要了解的局限性**：
• 幻觉：可能生成似是而非但不正确的信息
• 知识截止：局限于训练数据，没有实时信息
• 上下文长度：无法处理任意长的文档
• 偏见：可能反映训练数据中存在的偏见

LLM代表了AI的重大里程碑，证明规模可以解锁多样的语言能力。虽然它们有局限性，但它们从根本上改变了我们与AI系统互动的方式，为人机协作开辟了新的可能性。
`,T=`Machine Learning (ML) is a branch of artificial intelligence that enables systems to automatically learn and improve from experience. Rather than explicitly programming for every scenario, ML algorithms use statistical techniques to identify patterns in data and make decisions with minimal human intervention.

## Types of Machine Learning

Machine learning is broadly divided into three main types:

**Supervised Learning**: Algorithms learn from labeled training data where each example is paired with the correct output. It's like having a teacher providing answers during learning. Common applications include spam detection and image classification.

**Unsupervised Learning**: Algorithms find patterns in unlabeled data without human guidance. It discovers hidden structures on its own. Used for customer segmentation and anomaly detection.

**Reinforcement Learning**: Algorithms learn by interacting with an environment and receiving rewards or penalties for their actions. It learns through trial and error, similar to how humans learn new skills. Applied to games and robotics.

## Key Algorithms

Popular machine learning algorithms include:

• **Linear Regression**: Predicts continuous values based on linear relationships
• **Decision Trees**: Makes decisions based on tree-like models
• **Random Forest**: Ensemble of decision trees that improves accuracy
• **Support Vector Machines (SVM)**: Finds optimal boundaries between different classes
• **K-Nearest Neighbors (KNN)**: Classifies based on similarity to neighboring points
• **Naive Bayes**: Probabilistic classifier based on Bayes' theorem

## Application Areas

Machine learning is transforming industries:

• **Healthcare**: Disease diagnosis, drug discovery, patient monitoring
• **Finance**: Fraud detection, algorithmic trading, credit scoring
• **Transportation**: Self-driving cars, route optimization
• **Retail**: Recommendation systems, inventory management
• **Entertainment**: Content personalization, gaming AI

Machine learning forms the foundation of modern AI systems. Understanding its principles is essential for anyone looking to work with artificial intelligence technologies.
`,fe=`机器学习（ML）是人工智能的一个分支，使系统能够自动学习和改进经验。与其对每个场景进行显式编程，机器学习算法使用统计技术来识别数据中的模式，并以最少的人为干预做出决策。

## 机器学习的类型

机器学习大致分为三种主要类型：

**监督学习**：算法从标记的训练数据中学习，每个示例都与正确的输出配对。就像有一个提供答案的老师在学习。常见应用包括垃圾邮件检测和图像分类。

**无监督学习**：算法在没有人指导的情况下在未标记的数据中找到模式。它自行发现隐藏结构。用于客户细分和异常检测。

**强化学习**：算法通过与环境交互并根据其行为获得奖励或惩罚来学习。它通过试错来学习，类似于人类学习新技能的方式。应用于游戏和机器人技术。

## 关键算法

流行的机器学习算法包括：

• **线性回归**：根据线性关系预测连续值
• **决策树**：基于树状模型做出决策
• **随机森林**：决策树的集成，提高准确性
• **支持向量机（SVM）**：找到不同类别之间的最优边界
• **K近邻（KNN）**：根据与相邻点的相似性进行分类
• **朴素贝叶斯**：基于贝叶斯定理的概率分类器

## 应用领域

机器学习正在改变各行各业：

• **医疗保健**：疾病诊断、药物发现、患者监护
• **金融**：欺诈检测、算法交易、信用评分
• **交通运输**：自动驾驶汽车、路线优化
• **零售**：推荐系统、库存管理
• **娱乐**：内容个性化、游戏AI

机器学习构成了现代AI系统的基础。了解其原理对于任何想要从事人工智能技术的人来说都是必不可少的。
`,pe=`Neural networks are computing systems inspired by the biological neural networks in the brain. They consist of interconnected nodes (neurons) organized in layers to process information. By adjusting the connections between neurons, neural networks can learn to recognize patterns, make predictions, and solve complex problems.

## Structure of Neural Networks

Neural networks consist of:

**Neurons (Nodes)**: The basic computational units that receive inputs, apply weights, sum them, and pass through an activation function.

**Weights**: Parameters that determine the strength of connections between neurons. Learning involves adjusting these weights.

**Biases**: Additional parameters that shift the activation function, helping the network fit data better.

**Layers**:
• Input layer: Receives features of the data
• Hidden layers: Perform intermediate computations
• Output layer: Produces final predictions

## How Networks Learn

Neural networks learn through a process called backpropagation:

**Forward Propagation**: Data flows from input through the network to the output, making predictions.

**Loss Calculation**: The network's prediction is compared to the actual answer, calculating the error (loss).

**Backpropagation**: The error is propagated backward through the network, calculating how much each weight contributed to the error.

**Weight Update**: Weights are adjusted using gradient descent optimization to reduce the error.

This process repeats thousands of times until the network's predictions are sufficiently accurate.

## Types of Neural Networks

Different architectures suit different problems:

**Feedforward Neural Networks**: Data flows in one direction from input to output. Used for simple classification tasks.

**Convolutional Neural Networks (CNN)**: Use convolutional layers to process spatial data like images.

**Recurrent Neural Networks (RNN)**: Have recurrent connections that allow them to process sequences. Suitable for text and time series.

**Long Short-Term Memory Networks (LSTM)**: Advanced RNN variants that can remember information for longer periods. Used for language translation and speech recognition.

Neural networks form the computational foundation of modern AI. Understanding how neurons, layers, and weights work together to learn patterns is essential for grasping the capabilities of deep learning systems.
`,me=`神经网络是受大脑生物神经网络启发的计算系统。它们由相互连接的节点（神经元）组成，这些节点按层组织来处理信息。通过调整神经元之间的连接，神经网络可以学习识别模式、做出预测和解决复杂问题。

## 神经网络的结构

神经网络由以下部分组成：

**神经元（节点）**：基本计算单元，接收输入，应用权重，求和，然后通过激活函数传递。

**权重**：决定神经元之间连接强度的参数。学习涉及调整这些权重。

**偏置**：移动激活函数的额外参数，帮助网络更好地拟合数据。

**层**：
• 输入层：接收数据的特征
• 隐藏层：执行中间计算
• 输出层：产生最终预测

## 网络如何学习

神经网络通过称为反向传播的过程学习：

**前向传播**：数据从输入通过网络流向输出，做出预测。

**损失计算**：网络的预测与实际答案进行比较，计算误差（损失）。

**反向传播**：误差通过网络向后传播，计算每个权重对误差的贡献程度。

**权重更新**：使用梯度下降优化调整权重以减少误差。

这个过程重复数千次，直到网络的预测足够准确。

## 神经网络的类型

不同的架构适合不同的问题：

**前馈神经网络**：数据从一个方向从输入流向输出。用于简单的分类任务。

**卷积神经网络（CNN）**：使用卷积层处理图像等空间数据。

**循环神经网络（RNN）**：有循环连接，可以处理序列。适合文本和时间序列。

**长短期记忆网络（LSTM）**：高级RNN变体，可以长时间记忆信息。用于语言翻译和语音识别。

神经网络构成了现代AI的计算基础。理解神经元、层和权重如何协同工作来学习模式，对于掌握深度学习系统的功能至关重要。
`,he=`Natural Language Processing (NLP) is a branch of artificial intelligence focused on enabling computers to understand, interpret, and generate human language in valuable ways. It combines computational linguistics, machine learning, and deep learning to process and analyze large amounts of natural language data.

## NLP Tasks

NLP covers a range of tasks from simple to complex:

**Text Classification**: Categorizing text into predefined classes. Used for spam detection and sentiment analysis.

**Named Entity Recognition (NER)**: Identifying and classifying entities in text, such as names, locations, and organizations.

**Machine Translation**: Automatically translating text from one language to another.

**Question Answering**: Building systems that can answer questions posed in natural language.

**Text Generation**: Creating human-like text for chatbots and content creation.

## How NLP Works

Modern NLP converts text into numbers that computers can process:

**Tokenization**: Breaking text into words, subwords, or characters (tokens).

**Embeddings**: Converting tokens into dense vector representations that capture semantic meaning.

**Contextual Understanding**: Using attention mechanisms to understand word relationships based on context.

**Task-Specific Heads**: Adding layers on top of learned representations to perform specific tasks like classification or generation.

## Modern NLP and Transformers

The introduction of the Transformer architecture revolutionized NLP:

**Attention Mechanism**: Allows models to focus on relevant parts of the input when generating output. This is the key innovation that makes Transformers powerful.

**BERT**: Pretrained bidirectional encoder that learns context from both directions. Used for classification and entity recognition.

**GPT Models**: Generative pretrained Transformers excelling at text generation. They predict the next word based on all previous words.

**Large Language Models (LLM)**: Massive Transformers trained on vast amounts of text, capable of performing diverse language tasks with remarkable fluency.

NLP has evolved from simple rule-based systems to sophisticated deep learning models that can understand context, nuance, and even generate creative content. This technology powers virtual assistants, translation services, and automated content analysis.
`,E=`自然语言处理（NLP）是人工智能的一个分支，专注于使计算机能够以有价值的方式理解、解释和生成人类语言。它结合计算语言学、机器学习和深度学习来处理和分析大量自然语言数据。

## NLP任务

NLP涵盖了从简单到复杂的各种任务：

**文本分类**：将文本分类到预定义的类别中。用于垃圾邮件检测和情感分析。

**命名实体识别（NER）**：识别和分类文本中的实体，如姓名、地点和组织。

**机器翻译**：自动将文本从一种语言翻译成另一种语言。

**问答系统**：构建能够回答以自然语言提出的问题的系统。

**文本生成**：创建类人文本，用于聊天机器人和内容创作。

## NLP如何工作

现代NLP将文本转换为计算机可以处理的数字：

**分词**：将文本分解为单词、子词或字符（标记）。

**嵌入**：将标记转换为捕获语义含义的密集向量表示。

**上下文理解**：使用注意力机制根据上下文理解单词之间的关系。

**任务特定头**：在学习的表示之上添加层以执行分类或生成等特定任务。

## 现代NLP与Transformer

Transformer架构的引入彻底改变了NLP：

**注意力机制**：允许模型在生成输出时关注输入的相关部分。这是使Transformer强大的关键创新。

**BERT**：预训练的双向编码器，从两个方向学习上下文。用于分类和实体识别。

**GPT模型**：生成式预训练Transformer，擅长文本生成。它们根据所有前面的词预测下一个词。

**大型语言模型（LLM）**：在大量文本上训练的庞大Transformer模型，能够以显著的流畅性执行多样的语言任务。

NLP已从简单的基于规则的系统发展到能够理解上下文、细微差别甚至生成创意内容的复杂深度学习模型。这项技术为虚拟助手、翻译服务和自动化内容分析提供了动力。
`,D=`Prompt engineering is the practice of designing and optimizing inputs (prompts) to get ideal outputs from AI language models. Well-crafted prompts can significantly improve the quality, accuracy, and usefulness of AI responses. It's both a technical skill and an art form.

## Core Prompting Techniques

**Zero-shot Prompting**: Ask the model to perform a task without providing examples.
"Can you translate this to French: Hello"

**Few-shot Prompting**: Provide examples to guide model behavior.
"Translate to French:
Hello → Bonjour
Goodbye → Au revoir
Thank you →"

**Chain of Thought (CoT)**: Ask the model to explain its reasoning step by step.
"Let's think step by step..."

**Zero-shot CoT**: Combines CoT with zero-shot by adding "Let's think step by step."

## Effective Prompt Structure

Well-structured prompts include:

**Context**: Background information the model needs.
"Assume you are a senior software engineer reviewing code..."

**Task**: Clear instruction of what to do.
"Find and explain the bugs in this function."

**Format**: How you want the response structured.
"Present your findings as a numbered list."

**Constraints**: Any limitations or requirements.
"Focus only on performance issues, not style."

**Examples**: When helpful, show what good output looks like.

## Common Patterns

**Role Prompting**: Assign the model a specific identity.
"You are a patient pediatrician explaining to parents..."

**System Prompt**: Set overall behavior and boundaries.
"You are a helpful assistant who always prioritizes safety."

**Input/Output Prompting**: Define a clear interface.
"When I send you code, you reply: Analysis | Issue | Suggestion"

**Conditional Prompting**: Branch based on input.
"If user asks X, reply with Y. If asks Z, reply with W."

**Meta Prompting**: Have the model plan its own approach.
"Before answering, briefly outline your approach to this problem."

## Best Practices

**Be Specific**: Vague prompts get vague answers. "Write code" vs "Write a Python function that sorts a list using quicksort."

**Break Down Complex Tasks**: Multiple simple prompts often work better than one complex prompt.

**Iterate and Optimize**: Start simple, add constraints or context as needed.

**Test Edge Cases**: Try unusual inputs to see how the model handles them.

**Consider Security**: Watch for prompt injection attacks where malicious inputs try to override your instructions.

**Model Differences**: What works on GPT-4 may not work on Claude. Adjust your approach.

Prompt engineering is a fundamental skill for collaborating with AI. Well-designed prompts can extract better results from the same model, often more effectively than trying to use a more powerful model with poor prompting.
`,ge=`提示工程是设计和优化输入（提示）以从AI语言模型获得理想输出的实践。精心设计的提示可以显著提高AI响应的质量、准确性和实用性。这既是技术技能也是艺术形式。

## 核心提示技术

**零样本提示**：不提供示例直接让模型完成任务。
"你能把这个翻译成法语吗：你好"

**少样本提示**：提供示例来指导模型行为。
"翻译成法语：
你好 → Bonjour
再见 → Au revoir
谢谢 →"

**思维链（CoT）**：要求模型逐步解释推理过程。
"让我们一步一步思考..."

**零样本CoT**：通过添加"让我们一步一步思考"结合CoT和零样本。

## 有效提示结构

结构良好的提示包括：

**上下文**：模型需要的背景信息。
"假设你是一位高级软件工程师审查代码..."

**任务**：清晰指示要做什么。
"找出并解释这个函数中的bug。"

**格式**：你希望响应如何结构化。
"将你的发现以编号列表形式呈现。"

**约束**：任何限制或要求。
"只关注性能问题，不关注风格。"

**示例**：当有帮助时，展示好的输出是什么样的。

## 常见模式

**角色提示**：为模型分配特定身份。
"你是一位向家长解释的耐心儿科医生..."

**系统提示**：设置整体行为和边界。
"你是一个始终优先考虑安全的有帮助助手。"

**输入/输出提示**：定义清晰的接口。
"当我发送代码给你时，你回复：分析 | 问题 | 建议"

**条件提示**：根据输入分支。
"如果用户问X，用Y回复。如果问Z，用W回复。"

**元提示**：让模型计划自己的方法。
"在回答之前，简要概述你解决这个问题的方法。"

## 最佳实践

**要具体**：模糊提示得到模糊回答。"写代码" vs "写一个用快速排序对列表排序的Python函数。"

**分解复杂任务**：多个简单提示通常比一个复杂提示效果更好。

**迭代优化**：从简单开始，根据需要添加约束或上下文。

**测试边界情况**：尝试不寻常的输入看模型如何处理。

**考虑安全性**：注意恶意输入试图覆盖你指令的提示注入攻击。

**模型差异**：在GPT-4上有效的方法可能在Claude上无效。调整你的方法。

提示工程是与AI协作的基本技能。精心设计的提示可以从同一模型中提取更好的结果，通常比尝试使用更强大但提示不佳的模型更有效。
`,_e=`RAG (Retrieval Augmented Generation) is a technique that enhances AI responses by combining language models with knowledge retrieval systems. Unlike relying solely on training data, RAG allows AI to access and use external information in real-time, making responses more accurate and up-to-date.

## Why RAG?

LLMs have limitations, and RAG addresses them:

**Knowledge Cutoff**: Models only know what they learned during training.
"Tell me about the latest iPhone" → Model doesn't know

**Hallucinations**: Models may generate plausible but incorrect facts.
RAG retrieves real documents to verify and constrain responses.

**Private Knowledge**: Organizations have data not in training data.
"Query our internal database about Q3 sales"

**Transparency**: Users want to know the source of information.
RAG can cite sources, building trust and verifiability.

**Keep Models Small**: No need to train huge models - use retrieval to give small models vast knowledge.

## How RAG Works

RAG pipelines have three main stages:

**1. Indexing (offline)**:
• Split documents into chunks
• Convert chunks to embeddings
• Store in vector database

**2. Retrieval (at query time)**:
• Convert user question to embedding
• Search vector database for similar chunks
• Return top-k most relevant results

**3. Generation (at query time)**:
• Combine user question + retrieved context
• Send to LLM with instructions
• Generate response with citations

## Key Components

**Document Processing**:
• Chunking strategies: fixed size, semantic splitting, recursive
• Overlap between chunks to preserve context
• Metadata: source, date, page number

**Vector Databases**:
• Pinecone, Weaviate, Chroma, Milvus
• Support similarity search (cosine, dot product)
• Handle millions of embeddings efficiently

**Retrieval Strategies**:
• Dense retrieval (embeddings)
• Sparse retrieval (keyword search)
• Hybrid (combine both)
• Reranking: optimize initial results

**LLM Integration**:
• Prompt engineering with context
• Instructions: "Use the provided context..."
• Citation formatting

## RAG Best Practices

**Garbage in, garbage out**: Clear, well-structured documents lead to better retrieval.

**Chunk size matters**: Too small loses context, too big reduces precision. 512-1024 tokens is common.

**Hybrid Search**: Combine semantic similarity and keyword matching for best results.

**Evaluate Retrieval**: Don't just evaluate final output. Check if correct documents were retrieved.

**Guardrails**: Ensure retrieved content is used appropriately and safely.

**Updates**: Set up pipeline to refresh embeddings when documents change.

**Multimodal RAG**: Extend from text to images, tables, PDFs, audio.

RAG has become a core technology for enterprise AI applications, combining the capabilities of LLMs with the accuracy and freshness of retrieval systems. It addresses key limitations of pure generation approaches while enabling AI to handle private, up-to-date knowledge.
`,ve=`RAG（检索增强生成）是一种通过将语言模型与知识检索系统相结合来增强AI响应的技术。与仅依赖训练数据不同，RAG允许AI实时访问和使用外部信息，使响应更准确、更及时。

## 为什么需要RAG？

LLM有限制，RAG解决了这些问题：

**知识截止日期**：模型只知道训练时学到的内容。
"告诉我最新的iPhone" → 模型不知道

**幻觉**：模型可能生成似是而非但错误的事实。
RAG检索真实文档来验证和约束响应。

**私有知识**：组织有不在训练数据中的数据。
"查询我们关于Q3销售额的内部数据库"

**透明度**：用户想知道信息来源。
RAG可以引用来源，建立信任和可验证性。

**保持模型小巧**：不用训练巨大模型，使用检索给小型模型提供海量知识。

## RAG如何工作

RAG管道有三个主要阶段：

**1. 索引（离线）**：
• 将文档分割成块
• 将块转换为嵌入
• 存储在向量数据库

**2. 检索（查询时）**：
• 将用户问题转换为嵌入
• 在向量数据库中搜索相似块
• 返回top-k最相关结果

**3. 生成（查询时）**：
• 组合用户问题 + 检索到的上下文
• 发送给LLM并附带指令
• 生成有引用依据的响应

## 关键组件

**文档处理**：
• 分块策略：固定大小、语义分割、递归
• 块之间的重叠以保留上下文
• 元数据：来源、日期、页码

**向量数据库**：
• Pinecone、Weaviate、Chroma、Milvus
• 支持相似度搜索（余弦、点积）
• 高效处理数百万嵌入

**检索策略**：
• 密集检索（嵌入）
• 稀疏检索（关键词搜索）
• 混合（结合两者）
• 重排：优化初始结果

**LLM集成**：
• 使用上下文的提示工程
• 指令："使用提供的上下文..."
• 引用格式化

## RAG最佳实践

**输入质量决定输出质量**：清晰、结构良好的文档带来更好的检索。

**块大小很重要**：太小丢失上下文，太大降低精度。512-1024 token是常见的。

**混合搜索**：结合语义相似度和关键词匹配以获得最佳结果。

**评估检索**：不要只评估最终输出。检查是否检索到了正确的文档。

**护栏**：确保检索内容被适当和安全地使用。

**更新**：当文档更改时设置管道刷新嵌入。

**多模态RAG**：将文本扩展到图像、表格、PDF、音频。

RAG已成为企业AI应用的核心技术，将LLM的能力与检索系统的准确性和新鲜度相结合。它解决了纯生成方法的关键局限性，同时使AI能够处理私有、最新的知识。
`,ye=`Reinforcement Learning (RL) is a type of machine learning where agents learn to make decisions by interacting with an environment. Rather than learning from labeled examples, agents learn through trial and error, receiving rewards or penalties for their actions. This approach has produced AI that can master complex games and control robotic systems.

## RL Framework

Reinforcement learning involves several key components:

**Agent**: The AI system that makes decisions and takes actions.

**Environment**: The world the agent interacts with — it can be a game, simulator, or real-world setting.

**State**: A representation of the current situation that the agent observes.

**Action**: What the agent can do in each state.

**Reward**: Feedback from the environment indicating whether the behavior was good or bad.

**Policy**: The agent's strategy for choosing actions based on states — this is what the agent learns.

## How RL Agents Learn

Agents learn through the interplay of exploration and exploitation:

**Exploration**: Trying new actions to discover their effects and find better strategies.

**Exploitation**: Using known good actions to maximize immediate rewards.

**Q-Learning**: A fundamental RL algorithm where agents learn the value of action-state pairs — how good is it to take this action in this state?

**Deep RL**: Combines RL with deep neural networks, enabling handling of complex high-dimensional state spaces like images.

**Policy Gradient Methods**: Directly learn the policy function mapping states to actions, suitable for large or continuous action spaces.

## Real-World Applications

Reinforcement learning has achieved remarkable results:

**Gaming**: AlphaGo defeated the world Go champion, combining RL with tree search. RL agents have mastered chess, poker, video games, and more.

**Robotics**: Training robots to walk, grasp objects, and perform manipulation tasks. RL enables robots to adapt to real-world variability.

**Autonomous Driving**: Learning decisions for lane changing, merging, and navigating complex traffic situations.

**Resource Management**: Optimizing data center cooling, CPU allocation, and supply chains.

**Recommendation Systems**: Learning to suggest content that maximizes long-term user engagement.

Reinforcement learning enables AI to learn complex behaviors through interaction, achieving superhuman performance in games and enabling robots to adapt to new situations. It represents a paradigm different from supervised learning, closer to how humans and animals learn through experience.
`,be=`强化学习（RL）是一种机器学习类型，其中智能体通过与环境交互来学习做出决策。与从标记示例中学习不同，智能体通过试错来学习，根据其行为获得奖励或惩罚。这种方法产生了能够掌握复杂游戏和控制机器人系统的AI。

## RL框架

强化学习涉及几个关键组件：

**智能体**：做出决定并采取行动的AI系统。

**环境**：智能体与之交互的世界——可以是游戏、模拟器或现实环境。

**状态**：智能体观察到的当前情况的表示。

**动作**：智能体在每个状态下可以做什么。

**奖励**：来自环境的反馈，表明行为是好是坏。

**策略**：智能体根据状态选择动作的策略——这是智能体学习的东西。

## RL智能体如何学习

智能体通过探索和利用的相互作用来学习：

**探索**：尝试新动作以发现它们的效果并找到更好的策略。

**利用**：使用已知的好动作来最大化即时奖励。

**Q学习**：一种基本的RL算法，智能体学习动作-状态对的价值——在这种状态下采取这个动作有多好？

**深度RL**：将RL与深度神经网络相结合，能够处理像图像这样复杂的高维状态空间。

**策略梯度方法**：直接学习将状态映射到动作的策略函数，适用于大的或连续的动作空间。

## 实际应用

强化学习取得了显著的成果：

**游戏**：AlphaGo击败了围棋世界冠军，将RL与树搜索相结合。RL智能体已经掌握了国际象棋、扑克、视频游戏等。

**机器人技术**：训练机器人行走、抓取物体和执行操作任务。RL使机器人能够适应现实世界的可变性。

**自动驾驶**：学习车道变换、合并和导航复杂交通情况的决策。

**资源管理**：优化数据中心冷却、CPU分配和供应链。

**推荐系统**：学习建议能最大化长期用户参与度的内容。

强化学习使AI能够通过交互学习复杂行为，在游戏中达到超人类的表现，并使机器人能够适应新情况。它代表了一种与监督学习不同的范式，更接近于人类和动物通过经验学习的方式。
`,xe=`Tokens are the fundamental building blocks that AI language models use to process and understand text. Before any text can be analyzed or generated, it must first be converted into tokens - a process called tokenization. Understanding tokens is essential for understanding how Large Language Models (LLMs) work, their capabilities, and their limitations.

## What is a Token?

A token is a sequence of characters that a model treats as a single unit. Tokens can represent:

• **Partial words**: Common word fragments like "ing", "tion", or "pre"
• **Complete words**: Short words like "cat", "the", "is"
• **Punctuation**: Individual characters like ".", ",", "!"
• **Special tokens**: Special markers like [PAD], [UNK], [CLS]

**The 1-token rule of thumb**: One token is roughly equal to 4 characters of English text, or about 3/4 of a word. So "tokenization" becomes roughly 4-5 tokens: "token", "ization".

This is why token counts often exceed word counts when processing English text.

## Tokenization Process

Modern language models use sophisticated tokenization algorithms:

**Byte Pair Encoding (BPE)**: Starts with individual bytes and repeatedly merges the most common pairs. Used by GPT-2 and others.

**WordPiece**: Similar to BPE but merges pairs based on frequency in training data. Used by BERT.

**SentencePiece**: Treats the entire input as a byte stream, allowing for language-agnostic tokenization.

**Why not just use words?**
• Vocabulary size: English has hundreds of thousands of words
• Rare words: Model would struggle with misspellings or obscure terms
• Subword efficiency: "unhappiness" → ["un", "happy", "ness"] instead of one rare word

## Chinese Tokenization Example: jieba

jieba is the most popular Chinese text segmentation library, supporting multiple segmentation modes:

**Accurate Mode** (default):

\`\`\`
import jieba
text = "人工智能是当今最热门的技术之一"
result = jieba.lcut(text)
print(result)
# Output: ['人工智能', '是', '当今', '最', '热门', '的', '技术', '之一']
\`\`\`

**Full Mode** - Lists all possible words:

\`\`\`
result = jieba.lcut(text, cut_all=True)
print(result)
# Output: ['人工智能', '人工', '智能', '是', '当今', '最', '热门', '热门', '的', '技术', '之一', '之', '一']
\`\`\`

**Search Engine Mode** - Suitable for search engines:

\`\`\`
text = "人工智能技术在各个领域广泛应用"
result = jieba.cut_for_search(text)
print(list(result))
# Output: ['人工智能', '人工', '智能', '技术', '应用', '各个', '领域', '广泛', '应用']
\`\`\`

**Part-of-Speech Tagging**:

\`\`\`
import jieba.posseg as pseg
words = pseg.cut("我喜欢深度学习")
for word, flag in words:
    print(f"{word} / {flag}")
# Output: 我/r 喜欢/v 深度/n 学习/vn
\`\`\`

**Adding Custom Words**:

\`\`\`
jieba.add_word("大语言模型")
jieba.add_word("自然语言处理")
\`\`\`

jieba uses a prefix dictionary for efficient segmentation and HMM model to handle unknown words, making it a great starting tool for Chinese NLP.

## Tokens and Model Limits

Every LLM has a maximum context window measured in tokens:

**Input + Output**: The total tokens you can send and receive in one conversation
• GPT-4 Turbo: 128K tokens
• GPT-3.5 Turbo: 16K tokens
• Claude 3: 200K tokens

**Why token limits matter**:
• Each model has a maximum context length
• Longer texts must be summarized or chunked
• Token count directly affects API costs

**Cost implications**:
• API pricing is typically per 1M tokens
• Images are converted to tokens when processed
• Code often requires more tokens than equivalent text

## Tokens in Practice

Understanding tokens helps you work more effectively with LLMs:

**Prompt optimization**:
• Concise prompts save tokens and costs
• Clear structure reduces token waste on parsing

**Context management**:
• Breaking long documents into token-aware chunks
• Prioritizing recent conversation for memory efficiency

**Multimodal tokens**:
• Images are tokenized using vision transformers
• Audio is converted to text tokens or spectrogram tokens
• Different modalities have different tokenization strategies

Tokens are the fundamental currency of AI language models. Understanding how tokenization works helps you write more efficient prompts, manage context windows better, and understand why AI sometimes struggles with certain words or tasks.
`,Se=`Token是AI语言模型用于处理和理解文本的基本构建块。在任何文本被分析或生成之前，它必须首先被转换为token——这个过程称为分词（tokenization）。理解token对于理解大型语言模型（LLM）的工作原理、能力及其局限性至关重要。

## 什么是Token？

Token是模型视为单个单元的字符序列。Token可以表示：

• **部分单词**：常见的词片段，如"ing"、"tion"、"pre"
• **完整单词**：短单词如"cat"、"the"、"is"
• **标点符号**：单个字符如"."、","、"!"
• **特殊token**：特殊标记如[PAD]、[UNK]、[CLS]

**1 token经验法则**：一个token大约等于4个英文字符，或约3/4个单词。因此"tokenization"变成大约4-5个token："token"、"ization"。

这就是为什么处理英文文本时token数量往往超过单词数。

## 分词过程

现代语言模型使用复杂的分词算法：

**字节对编码（BPE）**：从单个字节开始，反复合并最常见的配对。被GPT-2等模型使用。

**WordPiece**：与BPE类似，但根据训练数据中的频率合并配对。被BERT使用。

**SentencePiece**：将整个输入视为字节流，实现语言无关的分词。

**为什么不用单词？**
• 词汇量：英语有数十万个单词
• 生僻词：模型难以处理拼写错误或罕见术语
• 子词效率："unhappiness" → ["un", "happy", "ness"]，而不是一个罕见词

## 中文分词示例：jieba

jieba（结巴分词）是最流行的中文分词库，支持多种分词模式：

**精确模式**（默认）：

\`\`\`
import jieba
text = "人工智能是当今最热门的技术之一"
result = jieba.lcut(text)
print(result)
# 输出：['人工智能', '是', '当今', '最', '热门', '的', '技术', '之一']
\`\`\`

**全模式** - 列出所有可能的词：

\`\`\`
result = jieba.lcut(text, cut_all=True)
print(result)
# 输出：['人工智能', '人工', '智能', '是', '当今', '最', '热门', '热门', '的', '技术', '之一', '之', '一']
\`\`\`

**搜索引擎模式** - 适合搜索引擎：

\`\`\`
text = "人工智能技术在各个领域广泛应用"
result = jieba.cut_for_search(text)
print(list(result))
# 输出：['人工智能', '人工', '智能', '技术', '应用', '各个', '领域', '广泛', '应用']
\`\`\`

**词性标注**：

\`\`\`
import jieba.posseg as pseg
words = pseg.cut("我喜欢深度学习")
for word, flag in words:
    print(f"{word} / {flag}")
# 输出：我/r 喜欢/v 深度/n 学习/vn
\`\`\`

**添加自定义词汇**：

\`\`\`
jieba.add_word("大语言模型")
jieba.add_word("自然语言处理")
\`\`\`

jieba使用前缀词典实现高效分词，结合HMM模型处理未登录词，是中文NLP的入门利器。

## Token与模型限制

每个LLM都有以token计的最大上下文窗口：

**输入 + 输出**：一次对话中可以发送和接收的总token数
• GPT-4 Turbo：128K tokens
• GPT-3.5 Turbo：16K tokens
• Claude 3：200K tokens

**为什么token限制很重要**：
• 每个模型都有最大上下文长度
• 更长的文本必须被摘要或分块
• Token数量直接影响API成本

**成本影响**：
• API定价通常是按每百万token计费
• 图像在处理时会被转换为token
• 代码通常比等效文本需要更多token

## 实际应用中的Token

理解token有助于更有效地使用LLM：

**提示优化**：
• 简洁的提示节省token和成本
• 清晰的结构减少解析token的浪费

**上下文管理**：
• 将长文档按token大小分块
• 为记忆效率优先处理最近的对话

**多模态token**：
• 图像使用视觉transformer进行token化
• 音频被转换为文本token或频谱图token
• 不同模态有不同的分词策略

Token是AI语言模型的基本货币。理解分词工作原理有助于你编写更高效的提示，更好地管理上下文窗口，并理解AI为何有时会在某些单词或任务上遇到困难。
`;function Ce(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}var we=Ce();function Te(e){we=e}var Ee={exec:()=>null};function O(e,t=``){let n=typeof e==`string`?e:e.source,r={replace:(e,t)=>{let i=typeof t==`string`?t:t.source;return i=i.replace(Oe.caret,`$1`),n=n.replace(e,i),r},getRegex:()=>new RegExp(n,t)};return r}var De=(()=>{try{return!0}catch{return!1}})(),Oe={codeRemoveIndent:/^(?: {1,4}| {0,3}\t)/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] +\S/,listReplaceTask:/^\[[ xX]\] +/,listTaskCheckbox:/\[[ xX]\]/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:e=>RegExp(`^( {0,3}${e})((?:[	 ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:e=>RegExp(`^ {0,${Math.min(3,e-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),hrRegex:e=>RegExp(`^ {0,${Math.min(3,e-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),fencesBeginRegex:e=>RegExp(`^ {0,${Math.min(3,e-1)}}(?:\`\`\`|~~~)`),headingBeginRegex:e=>RegExp(`^ {0,${Math.min(3,e-1)}}#`),htmlBeginRegex:e=>RegExp(`^ {0,${Math.min(3,e-1)}}<(?:[a-z].*>|!--)`,`i`),blockquoteBeginRegex:e=>RegExp(`^ {0,${Math.min(3,e-1)}}>`)},ke=/^(?:[ \t]*(?:\n|$))+/,Ae=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,je=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,Me=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,Ne=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,Pe=/ {0,3}(?:[*+-]|\d{1,9}[.)])/,Fe=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,Ie=O(Fe).replace(/bull/g,Pe).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/\|table/g,``).getRegex(),Le=O(Fe).replace(/bull/g,Pe).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),Re=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,ze=/^[^\n]+/,Be=/(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/,Ve=O(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace(`label`,Be).replace(`title`,/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),He=O(/^(bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,Pe).getRegex(),Ue=`address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul`,We=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,Ge=O(`^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))`,`i`).replace(`comment`,We).replace(`tag`,Ue).replace(`attribute`,/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),Ke=O(Re).replace(`hr`,Me).replace(`heading`,` {0,3}#{1,6}(?:\\s|$)`).replace(`|lheading`,``).replace(`|table`,``).replace(`blockquote`,` {0,3}>`).replace(`fences`," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace(`list`,` {0,3}(?:[*+-]|1[.)])[ \\t]`).replace(`html`,`</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)`).replace(`tag`,Ue).getRegex(),qe={blockquote:O(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace(`paragraph`,Ke).getRegex(),code:Ae,def:Ve,fences:je,heading:Ne,hr:Me,html:Ge,lheading:Ie,list:He,newline:ke,paragraph:Ke,table:Ee,text:ze},Je=O(`^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)`).replace(`hr`,Me).replace(`heading`,` {0,3}#{1,6}(?:\\s|$)`).replace(`blockquote`,` {0,3}>`).replace(`code`,`(?: {4}| {0,3}	)[^\\n]`).replace(`fences`," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace(`list`,` {0,3}(?:[*+-]|1[.)])[ \\t]`).replace(`html`,`</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)`).replace(`tag`,Ue).getRegex(),Ye={...qe,lheading:Le,table:Je,paragraph:O(Re).replace(`hr`,Me).replace(`heading`,` {0,3}#{1,6}(?:\\s|$)`).replace(`|lheading`,``).replace(`table`,Je).replace(`blockquote`,` {0,3}>`).replace(`fences`," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace(`list`,` {0,3}(?:[*+-]|1[.)])[ \\t]`).replace(`html`,`</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)`).replace(`tag`,Ue).getRegex()},Xe={...qe,html:O(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace(`comment`,We).replace(/tag/g,`(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b`).getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:Ee,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:O(Re).replace(`hr`,Me).replace(`heading`,` *#{1,6} *[^
]`).replace(`lheading`,Ie).replace(`|table`,``).replace(`blockquote`,` {0,3}>`).replace(`|fences`,``).replace(`|list`,``).replace(`|html`,``).replace(`|tag`,``).getRegex()},Ze=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,Qe=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,$e=/^( {2,}|\\)\n(?!\s*$)/,et=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,tt=/[\p{P}\p{S}]/u,nt=/[\s\p{P}\p{S}]/u,rt=/[^\s\p{P}\p{S}]/u,it=O(/^((?![*_])punctSpace)/,`u`).replace(/punctSpace/g,nt).getRegex(),at=/(?!~)[\p{P}\p{S}]/u,ot=/(?!~)[\s\p{P}\p{S}]/u,st=/(?:[^\s\p{P}\p{S}]|~)/u,ct=O(/link|precode-code|html/,`g`).replace(`link`,/\[(?:[^\[\]`]|(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/).replace(`precode-`,De?"(?<!`)()":"(^^|[^`])").replace(`code`,/(?<b>`+)[^`]+\k<b>(?!`)/).replace(`html`,/<(?! )[^<>]*?>/).getRegex(),lt=/^(?:\*+(?:((?!\*)punct)|([^\s*]))?)|^_+(?:((?!_)punct)|([^\s_]))?/,ut=O(lt,`u`).replace(/punct/g,tt).getRegex(),dt=O(lt,`u`).replace(/punct/g,at).getRegex(),ft=`^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)`,pt=O(ft,`gu`).replace(/notPunctSpace/g,rt).replace(/punctSpace/g,nt).replace(/punct/g,tt).getRegex(),mt=O(ft,`gu`).replace(/notPunctSpace/g,st).replace(/punctSpace/g,ot).replace(/punct/g,at).getRegex(),ht=O(`^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)`,`gu`).replace(/notPunctSpace/g,rt).replace(/punctSpace/g,nt).replace(/punct/g,tt).getRegex(),gt=O(/^~~?(?:((?!~)punct)|[^\s~])/,`u`).replace(/punct/g,tt).getRegex(),_t=O(`^[^~]+(?=[^~])|(?!~)punct(~~?)(?=[\\s]|$)|notPunctSpace(~~?)(?!~)(?=punctSpace|$)|(?!~)punctSpace(~~?)(?=notPunctSpace)|[\\s](~~?)(?!~)(?=punct)|(?!~)punct(~~?)(?!~)(?=punct)|notPunctSpace(~~?)(?=notPunctSpace)`,`gu`).replace(/notPunctSpace/g,rt).replace(/punctSpace/g,nt).replace(/punct/g,tt).getRegex(),vt=O(/\\(punct)/,`gu`).replace(/punct/g,tt).getRegex(),yt=O(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace(`scheme`,/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace(`email`,/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),bt=O(We).replace(`(?:-->|$)`,`-->`).getRegex(),xt=O(`^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>`).replace(`comment`,bt).replace(`attribute`,/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),St=/(?:\[(?:\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+(?!`)[^`]*?`+(?!`)|``+(?=\])|[^\[\]\\`])*?/,Ct=O(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]+(?:\n[ \t]*)?|\n[ \t]*)(title))?\s*\)/).replace(`label`,St).replace(`href`,/<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace(`title`,/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),wt=O(/^!?\[(label)\]\[(ref)\]/).replace(`label`,St).replace(`ref`,Be).getRegex(),Tt=O(/^!?\[(ref)\](?:\[\])?/).replace(`ref`,Be).getRegex(),Et=O(`reflink|nolink(?!\\()`,`g`).replace(`reflink`,wt).replace(`nolink`,Tt).getRegex(),Dt=/[hH][tT][tT][pP][sS]?|[fF][tT][pP]/,Ot={_backpedal:Ee,anyPunctuation:vt,autolink:yt,blockSkip:ct,br:$e,code:Qe,del:Ee,delLDelim:Ee,delRDelim:Ee,emStrongLDelim:ut,emStrongRDelimAst:pt,emStrongRDelimUnd:ht,escape:Ze,link:Ct,nolink:Tt,punctuation:it,reflink:wt,reflinkSearch:Et,tag:xt,text:et,url:Ee},kt={...Ot,link:O(/^!?\[(label)\]\((.*?)\)/).replace(`label`,St).getRegex(),reflink:O(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace(`label`,St).getRegex()},At={...Ot,emStrongRDelimAst:mt,emStrongLDelim:dt,delLDelim:gt,delRDelim:_t,url:O(/^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace(`protocol`,Dt).replace(`email`,/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/,text:O(/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/).replace(`protocol`,Dt).getRegex()},jt={...At,br:O($e).replace(`{2,}`,`*`).getRegex(),text:O(At.text).replace(`\\b_`,`\\b_| {2,}\\n`).replace(/\{2,\}/g,`*`).getRegex()},Mt={normal:qe,gfm:Ye,pedantic:Xe},Nt={normal:Ot,gfm:At,breaks:jt,pedantic:kt},Pt={"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#39;`},Ft=e=>Pt[e];function It(e,t){if(t){if(Oe.escapeTest.test(e))return e.replace(Oe.escapeReplace,Ft)}else if(Oe.escapeTestNoEncode.test(e))return e.replace(Oe.escapeReplaceNoEncode,Ft);return e}function Lt(e){try{e=encodeURI(e).replace(Oe.percentDecode,`%`)}catch{return null}return e}function Rt(e,t){let n=e.replace(Oe.findPipe,(e,t,n)=>{let r=!1,i=t;for(;--i>=0&&n[i]===`\\`;)r=!r;return r?`|`:` |`}).split(Oe.splitPipe),r=0;if(n[0].trim()||n.shift(),n.length>0&&!n.at(-1)?.trim()&&n.pop(),t)if(n.length>t)n.splice(t);else for(;n.length<t;)n.push(``);for(;r<n.length;r++)n[r]=n[r].trim().replace(Oe.slashPipe,`|`);return n}function zt(e,t,n){let r=e.length;if(r===0)return``;let i=0;for(;i<r;){let a=e.charAt(r-i-1);if(a===t&&!n)i++;else if(a!==t&&n)i++;else break}return e.slice(0,r-i)}function Bt(e,t){if(e.indexOf(t[1])===-1)return-1;let n=0;for(let r=0;r<e.length;r++)if(e[r]===`\\`)r++;else if(e[r]===t[0])n++;else if(e[r]===t[1]&&(n--,n<0))return r;return n>0?-2:-1}function Vt(e,t=0){let n=t,r=``;for(let t of e)if(t===`	`){let e=4-n%4;r+=` `.repeat(e),n+=e}else r+=t,n++;return r}function Ht(e,t,n,r,i){let a=t.href,o=t.title||null,s=e[1].replace(i.other.outputLinkReplace,`$1`);r.state.inLink=!0;let c={type:e[0].charAt(0)===`!`?`image`:`link`,raw:n,href:a,title:o,text:s,tokens:r.inlineTokens(s)};return r.state.inLink=!1,c}function Ut(e,t,n){let r=e.match(n.other.indentCodeCompensation);if(r===null)return t;let i=r[1];return t.split(`
`).map(e=>{let t=e.match(n.other.beginningSpace);if(t===null)return e;let[r]=t;return r.length>=i.length?e.slice(i.length):e}).join(`
`)}var Wt=class{options;rules;lexer;constructor(e){this.options=e||we}space(e){let t=this.rules.block.newline.exec(e);if(t&&t[0].length>0)return{type:`space`,raw:t[0]}}code(e){let t=this.rules.block.code.exec(e);if(t){let e=t[0].replace(this.rules.other.codeRemoveIndent,``);return{type:`code`,raw:t[0],codeBlockStyle:`indented`,text:this.options.pedantic?e:zt(e,`
`)}}}fences(e){let t=this.rules.block.fences.exec(e);if(t){let e=t[0],n=Ut(e,t[3]||``,this.rules);return{type:`code`,raw:e,lang:t[2]?t[2].trim().replace(this.rules.inline.anyPunctuation,`$1`):t[2],text:n}}}heading(e){let t=this.rules.block.heading.exec(e);if(t){let e=t[2].trim();if(this.rules.other.endingHash.test(e)){let t=zt(e,`#`);(this.options.pedantic||!t||this.rules.other.endingSpaceChar.test(t))&&(e=t.trim())}return{type:`heading`,raw:t[0],depth:t[1].length,text:e,tokens:this.lexer.inline(e)}}}hr(e){let t=this.rules.block.hr.exec(e);if(t)return{type:`hr`,raw:zt(t[0],`
`)}}blockquote(e){let t=this.rules.block.blockquote.exec(e);if(t){let e=zt(t[0],`
`).split(`
`),n=``,r=``,i=[];for(;e.length>0;){let t=!1,a=[],o;for(o=0;o<e.length;o++)if(this.rules.other.blockquoteStart.test(e[o]))a.push(e[o]),t=!0;else if(!t)a.push(e[o]);else break;e=e.slice(o);let s=a.join(`
`),c=s.replace(this.rules.other.blockquoteSetextReplace,`
    $1`).replace(this.rules.other.blockquoteSetextReplace2,``);n=n?`${n}
${s}`:s,r=r?`${r}
${c}`:c;let l=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(c,i,!0),this.lexer.state.top=l,e.length===0)break;let u=i.at(-1);if(u?.type===`code`)break;if(u?.type===`blockquote`){let t=u,a=t.raw+`
`+e.join(`
`),o=this.blockquote(a);i[i.length-1]=o,n=n.substring(0,n.length-t.raw.length)+o.raw,r=r.substring(0,r.length-t.text.length)+o.text;break}else if(u?.type===`list`){let t=u,a=t.raw+`
`+e.join(`
`),o=this.list(a);i[i.length-1]=o,n=n.substring(0,n.length-u.raw.length)+o.raw,r=r.substring(0,r.length-t.raw.length)+o.raw,e=a.substring(i.at(-1).raw.length).split(`
`);continue}}return{type:`blockquote`,raw:n,tokens:i,text:r}}}list(e){let t=this.rules.block.list.exec(e);if(t){let n=t[1].trim(),r=n.length>1,i={type:`list`,raw:``,ordered:r,start:r?+n.slice(0,-1):``,loose:!1,items:[]};n=r?`\\d{1,9}\\${n.slice(-1)}`:`\\${n}`,this.options.pedantic&&(n=r?n:`[*+-]`);let a=this.rules.other.listItemRegex(n),o=!1;for(;e;){let n=!1,r=``,s=``;if(!(t=a.exec(e))||this.rules.block.hr.test(e))break;r=t[0],e=e.substring(r.length);let c=Vt(t[2].split(`
`,1)[0],t[1].length),l=e.split(`
`,1)[0],u=!c.trim(),d=0;if(this.options.pedantic?(d=2,s=c.trimStart()):u?d=t[1].length+1:(d=c.search(this.rules.other.nonSpaceChar),d=d>4?1:d,s=c.slice(d),d+=t[1].length),u&&this.rules.other.blankLine.test(l)&&(r+=l+`
`,e=e.substring(l.length+1),n=!0),!n){let t=this.rules.other.nextBulletRegex(d),n=this.rules.other.hrRegex(d),i=this.rules.other.fencesBeginRegex(d),a=this.rules.other.headingBeginRegex(d),o=this.rules.other.htmlBeginRegex(d),f=this.rules.other.blockquoteBeginRegex(d);for(;e;){let p=e.split(`
`,1)[0],m;if(l=p,this.options.pedantic?(l=l.replace(this.rules.other.listReplaceNesting,`  `),m=l):m=l.replace(this.rules.other.tabCharGlobal,`    `),i.test(l)||a.test(l)||o.test(l)||f.test(l)||t.test(l)||n.test(l))break;if(m.search(this.rules.other.nonSpaceChar)>=d||!l.trim())s+=`
`+m.slice(d);else{if(u||c.replace(this.rules.other.tabCharGlobal,`    `).search(this.rules.other.nonSpaceChar)>=4||i.test(c)||a.test(c)||n.test(c))break;s+=`
`+l}u=!l.trim(),r+=p+`
`,e=e.substring(p.length+1),c=m.slice(d)}}i.loose||(o?i.loose=!0:this.rules.other.doubleBlankLine.test(r)&&(o=!0)),i.items.push({type:`list_item`,raw:r,task:!!this.options.gfm&&this.rules.other.listIsTask.test(s),loose:!1,text:s,tokens:[]}),i.raw+=r}let s=i.items.at(-1);if(s)s.raw=s.raw.trimEnd(),s.text=s.text.trimEnd();else return;i.raw=i.raw.trimEnd();for(let e of i.items){if(this.lexer.state.top=!1,e.tokens=this.lexer.blockTokens(e.text,[]),e.task){if(e.text=e.text.replace(this.rules.other.listReplaceTask,``),e.tokens[0]?.type===`text`||e.tokens[0]?.type===`paragraph`){e.tokens[0].raw=e.tokens[0].raw.replace(this.rules.other.listReplaceTask,``),e.tokens[0].text=e.tokens[0].text.replace(this.rules.other.listReplaceTask,``);for(let e=this.lexer.inlineQueue.length-1;e>=0;e--)if(this.rules.other.listIsTask.test(this.lexer.inlineQueue[e].src)){this.lexer.inlineQueue[e].src=this.lexer.inlineQueue[e].src.replace(this.rules.other.listReplaceTask,``);break}}let t=this.rules.other.listTaskCheckbox.exec(e.raw);if(t){let n={type:`checkbox`,raw:t[0]+` `,checked:t[0]!==`[ ]`};e.checked=n.checked,i.loose?e.tokens[0]&&[`paragraph`,`text`].includes(e.tokens[0].type)&&`tokens`in e.tokens[0]&&e.tokens[0].tokens?(e.tokens[0].raw=n.raw+e.tokens[0].raw,e.tokens[0].text=n.raw+e.tokens[0].text,e.tokens[0].tokens.unshift(n)):e.tokens.unshift({type:`paragraph`,raw:n.raw,text:n.raw,tokens:[n]}):e.tokens.unshift(n)}}if(!i.loose){let t=e.tokens.filter(e=>e.type===`space`);i.loose=t.length>0&&t.some(e=>this.rules.other.anyLine.test(e.raw))}}if(i.loose)for(let e of i.items){e.loose=!0;for(let t of e.tokens)t.type===`text`&&(t.type=`paragraph`)}return i}}html(e){let t=this.rules.block.html.exec(e);if(t)return{type:`html`,block:!0,raw:t[0],pre:t[1]===`pre`||t[1]===`script`||t[1]===`style`,text:t[0]}}def(e){let t=this.rules.block.def.exec(e);if(t){let e=t[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal,` `),n=t[2]?t[2].replace(this.rules.other.hrefBrackets,`$1`).replace(this.rules.inline.anyPunctuation,`$1`):``,r=t[3]?t[3].substring(1,t[3].length-1).replace(this.rules.inline.anyPunctuation,`$1`):t[3];return{type:`def`,tag:e,raw:t[0],href:n,title:r}}}table(e){let t=this.rules.block.table.exec(e);if(!t||!this.rules.other.tableDelimiter.test(t[2]))return;let n=Rt(t[1]),r=t[2].replace(this.rules.other.tableAlignChars,``).split(`|`),i=t[3]?.trim()?t[3].replace(this.rules.other.tableRowBlankLine,``).split(`
`):[],a={type:`table`,raw:t[0],header:[],align:[],rows:[]};if(n.length===r.length){for(let e of r)this.rules.other.tableAlignRight.test(e)?a.align.push(`right`):this.rules.other.tableAlignCenter.test(e)?a.align.push(`center`):this.rules.other.tableAlignLeft.test(e)?a.align.push(`left`):a.align.push(null);for(let e=0;e<n.length;e++)a.header.push({text:n[e],tokens:this.lexer.inline(n[e]),header:!0,align:a.align[e]});for(let e of i)a.rows.push(Rt(e,a.header.length).map((e,t)=>({text:e,tokens:this.lexer.inline(e),header:!1,align:a.align[t]})));return a}}lheading(e){let t=this.rules.block.lheading.exec(e);if(t){let e=t[1].trim();return{type:`heading`,raw:t[0],depth:t[2].charAt(0)===`=`?1:2,text:e,tokens:this.lexer.inline(e)}}}paragraph(e){let t=this.rules.block.paragraph.exec(e);if(t){let e=t[1].charAt(t[1].length-1)===`
`?t[1].slice(0,-1):t[1];return{type:`paragraph`,raw:t[0],text:e,tokens:this.lexer.inline(e)}}}text(e){let t=this.rules.block.text.exec(e);if(t)return{type:`text`,raw:t[0],text:t[0],tokens:this.lexer.inline(t[0])}}escape(e){let t=this.rules.inline.escape.exec(e);if(t)return{type:`escape`,raw:t[0],text:t[1]}}tag(e){let t=this.rules.inline.tag.exec(e);if(t)return!this.lexer.state.inLink&&this.rules.other.startATag.test(t[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(t[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(t[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(t[0])&&(this.lexer.state.inRawBlock=!1),{type:`html`,raw:t[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:t[0]}}link(e){let t=this.rules.inline.link.exec(e);if(t){let e=t[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(e)){if(!this.rules.other.endAngleBracket.test(e))return;let t=zt(e.slice(0,-1),`\\`);if((e.length-t.length)%2==0)return}else{let e=Bt(t[2],`()`);if(e===-2)return;if(e>-1){let n=(t[0].indexOf(`!`)===0?5:4)+t[1].length+e;t[2]=t[2].substring(0,e),t[0]=t[0].substring(0,n).trim(),t[3]=``}}let n=t[2],r=``;if(this.options.pedantic){let e=this.rules.other.pedanticHrefTitle.exec(n);e&&(n=e[1],r=e[3])}else r=t[3]?t[3].slice(1,-1):``;return n=n.trim(),this.rules.other.startAngleBracket.test(n)&&(n=this.options.pedantic&&!this.rules.other.endAngleBracket.test(e)?n.slice(1):n.slice(1,-1)),Ht(t,{href:n&&n.replace(this.rules.inline.anyPunctuation,`$1`),title:r&&r.replace(this.rules.inline.anyPunctuation,`$1`)},t[0],this.lexer,this.rules)}}reflink(e,t){let n;if((n=this.rules.inline.reflink.exec(e))||(n=this.rules.inline.nolink.exec(e))){let e=t[(n[2]||n[1]).replace(this.rules.other.multipleSpaceGlobal,` `).toLowerCase()];if(!e){let e=n[0].charAt(0);return{type:`text`,raw:e,text:e}}return Ht(n,e,n[0],this.lexer,this.rules)}}emStrong(e,t,n=``){let r=this.rules.inline.emStrongLDelim.exec(e);if(!(!r||!r[1]&&!r[2]&&!r[3]&&!r[4]||r[4]&&n.match(this.rules.other.unicodeAlphaNumeric))&&(!(r[1]||r[3])||!n||this.rules.inline.punctuation.exec(n))){let n=[...r[0]].length-1,i,a,o=n,s=0,c=r[0][0]===`*`?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(c.lastIndex=0,t=t.slice(-1*e.length+n);(r=c.exec(t))!=null;){if(i=r[1]||r[2]||r[3]||r[4]||r[5]||r[6],!i)continue;if(a=[...i].length,r[3]||r[4]){o+=a;continue}else if((r[5]||r[6])&&n%3&&!((n+a)%3)){s+=a;continue}if(o-=a,o>0)continue;a=Math.min(a,a+o+s);let t=[...r[0]][0].length,c=e.slice(0,n+r.index+t+a);if(Math.min(n,a)%2){let e=c.slice(1,-1);return{type:`em`,raw:c,text:e,tokens:this.lexer.inlineTokens(e)}}let l=c.slice(2,-2);return{type:`strong`,raw:c,text:l,tokens:this.lexer.inlineTokens(l)}}}}codespan(e){let t=this.rules.inline.code.exec(e);if(t){let e=t[2].replace(this.rules.other.newLineCharGlobal,` `),n=this.rules.other.nonSpaceChar.test(e),r=this.rules.other.startingSpaceChar.test(e)&&this.rules.other.endingSpaceChar.test(e);return n&&r&&(e=e.substring(1,e.length-1)),{type:`codespan`,raw:t[0],text:e}}}br(e){let t=this.rules.inline.br.exec(e);if(t)return{type:`br`,raw:t[0]}}del(e,t,n=``){let r=this.rules.inline.delLDelim.exec(e);if(r&&(!r[1]||!n||this.rules.inline.punctuation.exec(n))){let n=[...r[0]].length-1,i,a,o=n,s=this.rules.inline.delRDelim;for(s.lastIndex=0,t=t.slice(-1*e.length+n);(r=s.exec(t))!=null;){if(i=r[1]||r[2]||r[3]||r[4]||r[5]||r[6],!i||(a=[...i].length,a!==n))continue;if(r[3]||r[4]){o+=a;continue}if(o-=a,o>0)continue;a=Math.min(a,a+o);let t=[...r[0]][0].length,s=e.slice(0,n+r.index+t+a),c=s.slice(n,-n);return{type:`del`,raw:s,text:c,tokens:this.lexer.inlineTokens(c)}}}}autolink(e){let t=this.rules.inline.autolink.exec(e);if(t){let e,n;return t[2]===`@`?(e=t[1],n=`mailto:`+e):(e=t[1],n=e),{type:`link`,raw:t[0],text:e,href:n,tokens:[{type:`text`,raw:e,text:e}]}}}url(e){let t;if(t=this.rules.inline.url.exec(e)){let e,n;if(t[2]===`@`)e=t[0],n=`mailto:`+e;else{let r;do r=t[0],t[0]=this.rules.inline._backpedal.exec(t[0])?.[0]??``;while(r!==t[0]);e=t[0],n=t[1]===`www.`?`http://`+t[0]:t[0]}return{type:`link`,raw:t[0],text:e,href:n,tokens:[{type:`text`,raw:e,text:e}]}}}inlineText(e){let t=this.rules.inline.text.exec(e);if(t){let e=this.lexer.state.inRawBlock;return{type:`text`,raw:t[0],text:t[0],escaped:e}}}},Gt=class e{tokens;options;state;inlineQueue;tokenizer;constructor(e){this.tokens=[],this.tokens.links=Object.create(null),this.options=e||we,this.options.tokenizer=this.options.tokenizer||new Wt,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};let t={other:Oe,block:Mt.normal,inline:Nt.normal};this.options.pedantic?(t.block=Mt.pedantic,t.inline=Nt.pedantic):this.options.gfm&&(t.block=Mt.gfm,this.options.breaks?t.inline=Nt.breaks:t.inline=Nt.gfm),this.tokenizer.rules=t}static get rules(){return{block:Mt,inline:Nt}}static lex(t,n){return new e(n).lex(t)}static lexInline(t,n){return new e(n).inlineTokens(t)}lex(e){e=e.replace(Oe.carriageReturn,`
`),this.blockTokens(e,this.tokens);for(let e=0;e<this.inlineQueue.length;e++){let t=this.inlineQueue[e];this.inlineTokens(t.src,t.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(e,t=[],n=!1){for(this.tokenizer.lexer=this,this.options.pedantic&&(e=e.replace(Oe.tabCharGlobal,`    `).replace(Oe.spaceLine,``));e;){let r;if(this.options.extensions?.block?.some(n=>(r=n.call({lexer:this},e,t))?(e=e.substring(r.raw.length),t.push(r),!0):!1))continue;if(r=this.tokenizer.space(e)){e=e.substring(r.raw.length);let n=t.at(-1);r.raw.length===1&&n!==void 0?n.raw+=`
`:t.push(r);continue}if(r=this.tokenizer.code(e)){e=e.substring(r.raw.length);let n=t.at(-1);n?.type===`paragraph`||n?.type===`text`?(n.raw+=(n.raw.endsWith(`
`)?``:`
`)+r.raw,n.text+=`
`+r.text,this.inlineQueue.at(-1).src=n.text):t.push(r);continue}if(r=this.tokenizer.fences(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.heading(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.hr(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.blockquote(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.list(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.html(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.def(e)){e=e.substring(r.raw.length);let n=t.at(-1);n?.type===`paragraph`||n?.type===`text`?(n.raw+=(n.raw.endsWith(`
`)?``:`
`)+r.raw,n.text+=`
`+r.raw,this.inlineQueue.at(-1).src=n.text):this.tokens.links[r.tag]||(this.tokens.links[r.tag]={href:r.href,title:r.title},t.push(r));continue}if(r=this.tokenizer.table(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.lheading(e)){e=e.substring(r.raw.length),t.push(r);continue}let i=e;if(this.options.extensions?.startBlock){let t=1/0,n=e.slice(1),r;this.options.extensions.startBlock.forEach(e=>{r=e.call({lexer:this},n),typeof r==`number`&&r>=0&&(t=Math.min(t,r))}),t<1/0&&t>=0&&(i=e.substring(0,t+1))}if(this.state.top&&(r=this.tokenizer.paragraph(i))){let a=t.at(-1);n&&a?.type===`paragraph`?(a.raw+=(a.raw.endsWith(`
`)?``:`
`)+r.raw,a.text+=`
`+r.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=a.text):t.push(r),n=i.length!==e.length,e=e.substring(r.raw.length);continue}if(r=this.tokenizer.text(e)){e=e.substring(r.raw.length);let n=t.at(-1);n?.type===`text`?(n.raw+=(n.raw.endsWith(`
`)?``:`
`)+r.raw,n.text+=`
`+r.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=n.text):t.push(r);continue}if(e){let t=`Infinite loop on byte: `+e.charCodeAt(0);if(this.options.silent){console.error(t);break}else throw Error(t)}}return this.state.top=!0,t}inline(e,t=[]){return this.inlineQueue.push({src:e,tokens:t}),t}inlineTokens(e,t=[]){this.tokenizer.lexer=this;let n=e,r=null;if(this.tokens.links){let e=Object.keys(this.tokens.links);if(e.length>0)for(;(r=this.tokenizer.rules.inline.reflinkSearch.exec(n))!=null;)e.includes(r[0].slice(r[0].lastIndexOf(`[`)+1,-1))&&(n=n.slice(0,r.index)+`[`+`a`.repeat(r[0].length-2)+`]`+n.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(r=this.tokenizer.rules.inline.anyPunctuation.exec(n))!=null;)n=n.slice(0,r.index)+`++`+n.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);let i;for(;(r=this.tokenizer.rules.inline.blockSkip.exec(n))!=null;)i=r[2]?r[2].length:0,n=n.slice(0,r.index+i)+`[`+`a`.repeat(r[0].length-i-2)+`]`+n.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);n=this.options.hooks?.emStrongMask?.call({lexer:this},n)??n;let a=!1,o=``;for(;e;){a||(o=``),a=!1;let r;if(this.options.extensions?.inline?.some(n=>(r=n.call({lexer:this},e,t))?(e=e.substring(r.raw.length),t.push(r),!0):!1))continue;if(r=this.tokenizer.escape(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.tag(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.link(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(r.raw.length);let n=t.at(-1);r.type===`text`&&n?.type===`text`?(n.raw+=r.raw,n.text+=r.text):t.push(r);continue}if(r=this.tokenizer.emStrong(e,n,o)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.codespan(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.br(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.del(e,n,o)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.autolink(e)){e=e.substring(r.raw.length),t.push(r);continue}if(!this.state.inLink&&(r=this.tokenizer.url(e))){e=e.substring(r.raw.length),t.push(r);continue}let i=e;if(this.options.extensions?.startInline){let t=1/0,n=e.slice(1),r;this.options.extensions.startInline.forEach(e=>{r=e.call({lexer:this},n),typeof r==`number`&&r>=0&&(t=Math.min(t,r))}),t<1/0&&t>=0&&(i=e.substring(0,t+1))}if(r=this.tokenizer.inlineText(i)){e=e.substring(r.raw.length),r.raw.slice(-1)!==`_`&&(o=r.raw.slice(-1)),a=!0;let n=t.at(-1);n?.type===`text`?(n.raw+=r.raw,n.text+=r.text):t.push(r);continue}if(e){let t=`Infinite loop on byte: `+e.charCodeAt(0);if(this.options.silent){console.error(t);break}else throw Error(t)}}return t}},Kt=class{options;parser;constructor(e){this.options=e||we}space(e){return``}code({text:e,lang:t,escaped:n}){let r=(t||``).match(Oe.notSpaceStart)?.[0],i=e.replace(Oe.endingNewline,``)+`
`;return r?`<pre><code class="language-`+It(r)+`">`+(n?i:It(i,!0))+`</code></pre>
`:`<pre><code>`+(n?i:It(i,!0))+`</code></pre>
`}blockquote({tokens:e}){return`<blockquote>
${this.parser.parse(e)}</blockquote>
`}html({text:e}){return e}def(e){return``}heading({tokens:e,depth:t}){return`<h${t}>${this.parser.parseInline(e)}</h${t}>
`}hr(e){return`<hr>
`}list(e){let t=e.ordered,n=e.start,r=``;for(let t=0;t<e.items.length;t++){let n=e.items[t];r+=this.listitem(n)}let i=t?`ol`:`ul`,a=t&&n!==1?` start="`+n+`"`:``;return`<`+i+a+`>
`+r+`</`+i+`>
`}listitem(e){return`<li>${this.parser.parse(e.tokens)}</li>
`}checkbox({checked:e}){return`<input `+(e?`checked="" `:``)+`disabled="" type="checkbox"> `}paragraph({tokens:e}){return`<p>${this.parser.parseInline(e)}</p>
`}table(e){let t=``,n=``;for(let t=0;t<e.header.length;t++)n+=this.tablecell(e.header[t]);t+=this.tablerow({text:n});let r=``;for(let t=0;t<e.rows.length;t++){let i=e.rows[t];n=``;for(let e=0;e<i.length;e++)n+=this.tablecell(i[e]);r+=this.tablerow({text:n})}return r&&=`<tbody>${r}</tbody>`,`<table>
<thead>
`+t+`</thead>
`+r+`</table>
`}tablerow({text:e}){return`<tr>
${e}</tr>
`}tablecell(e){let t=this.parser.parseInline(e.tokens),n=e.header?`th`:`td`;return(e.align?`<${n} align="${e.align}">`:`<${n}>`)+t+`</${n}>
`}strong({tokens:e}){return`<strong>${this.parser.parseInline(e)}</strong>`}em({tokens:e}){return`<em>${this.parser.parseInline(e)}</em>`}codespan({text:e}){return`<code>${It(e,!0)}</code>`}br(e){return`<br>`}del({tokens:e}){return`<del>${this.parser.parseInline(e)}</del>`}link({href:e,title:t,tokens:n}){let r=this.parser.parseInline(n),i=Lt(e);if(i===null)return r;e=i;let a=`<a href="`+e+`"`;return t&&(a+=` title="`+It(t)+`"`),a+=`>`+r+`</a>`,a}image({href:e,title:t,text:n,tokens:r}){r&&(n=this.parser.parseInline(r,this.parser.textRenderer));let i=Lt(e);if(i===null)return It(n);e=i;let a=`<img src="${e}" alt="${It(n)}"`;return t&&(a+=` title="${It(t)}"`),a+=`>`,a}text(e){return`tokens`in e&&e.tokens?this.parser.parseInline(e.tokens):`escaped`in e&&e.escaped?e.text:It(e.text)}},qt=class{strong({text:e}){return e}em({text:e}){return e}codespan({text:e}){return e}del({text:e}){return e}html({text:e}){return e}text({text:e}){return e}link({text:e}){return``+e}image({text:e}){return``+e}br(){return``}checkbox({raw:e}){return e}},k=class e{options;renderer;textRenderer;constructor(e){this.options=e||we,this.options.renderer=this.options.renderer||new Kt,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new qt}static parse(t,n){return new e(n).parse(t)}static parseInline(t,n){return new e(n).parseInline(t)}parse(e){this.renderer.parser=this;let t=``;for(let n=0;n<e.length;n++){let r=e[n];if(this.options.extensions?.renderers?.[r.type]){let e=r,n=this.options.extensions.renderers[e.type].call({parser:this},e);if(n!==!1||![`space`,`hr`,`heading`,`code`,`table`,`blockquote`,`list`,`html`,`def`,`paragraph`,`text`].includes(e.type)){t+=n||``;continue}}let i=r;switch(i.type){case`space`:t+=this.renderer.space(i);break;case`hr`:t+=this.renderer.hr(i);break;case`heading`:t+=this.renderer.heading(i);break;case`code`:t+=this.renderer.code(i);break;case`table`:t+=this.renderer.table(i);break;case`blockquote`:t+=this.renderer.blockquote(i);break;case`list`:t+=this.renderer.list(i);break;case`checkbox`:t+=this.renderer.checkbox(i);break;case`html`:t+=this.renderer.html(i);break;case`def`:t+=this.renderer.def(i);break;case`paragraph`:t+=this.renderer.paragraph(i);break;case`text`:t+=this.renderer.text(i);break;default:{let e=`Token with "`+i.type+`" type was not found.`;if(this.options.silent)return console.error(e),``;throw Error(e)}}}return t}parseInline(e,t=this.renderer){this.renderer.parser=this;let n=``;for(let r=0;r<e.length;r++){let i=e[r];if(this.options.extensions?.renderers?.[i.type]){let e=this.options.extensions.renderers[i.type].call({parser:this},i);if(e!==!1||![`escape`,`html`,`link`,`image`,`strong`,`em`,`codespan`,`br`,`del`,`text`].includes(i.type)){n+=e||``;continue}}let a=i;switch(a.type){case`escape`:n+=t.text(a);break;case`html`:n+=t.html(a);break;case`link`:n+=t.link(a);break;case`image`:n+=t.image(a);break;case`checkbox`:n+=t.checkbox(a);break;case`strong`:n+=t.strong(a);break;case`em`:n+=t.em(a);break;case`codespan`:n+=t.codespan(a);break;case`br`:n+=t.br(a);break;case`del`:n+=t.del(a);break;case`text`:n+=t.text(a);break;default:{let e=`Token with "`+a.type+`" type was not found.`;if(this.options.silent)return console.error(e),``;throw Error(e)}}}return n}},Jt=class{options;block;constructor(e){this.options=e||we}static passThroughHooks=new Set([`preprocess`,`postprocess`,`processAllTokens`,`emStrongMask`]);static passThroughHooksRespectAsync=new Set([`preprocess`,`postprocess`,`processAllTokens`]);preprocess(e){return e}postprocess(e){return e}processAllTokens(e){return e}emStrongMask(e){return e}provideLexer(){return this.block?Gt.lex:Gt.lexInline}provideParser(){return this.block?k.parse:k.parseInline}},Yt=new class{defaults=Ce();options=this.setOptions;parse=this.parseMarkdown(!0);parseInline=this.parseMarkdown(!1);Parser=k;Renderer=Kt;TextRenderer=qt;Lexer=Gt;Tokenizer=Wt;Hooks=Jt;constructor(...e){this.use(...e)}walkTokens(e,t){let n=[];for(let r of e)switch(n=n.concat(t.call(this,r)),r.type){case`table`:{let e=r;for(let r of e.header)n=n.concat(this.walkTokens(r.tokens,t));for(let r of e.rows)for(let e of r)n=n.concat(this.walkTokens(e.tokens,t));break}case`list`:{let e=r;n=n.concat(this.walkTokens(e.items,t));break}default:{let e=r;this.defaults.extensions?.childTokens?.[e.type]?this.defaults.extensions.childTokens[e.type].forEach(r=>{let i=e[r].flat(1/0);n=n.concat(this.walkTokens(i,t))}):e.tokens&&(n=n.concat(this.walkTokens(e.tokens,t)))}}return n}use(...e){let t=this.defaults.extensions||{renderers:{},childTokens:{}};return e.forEach(e=>{let n={...e};if(n.async=this.defaults.async||n.async||!1,e.extensions&&(e.extensions.forEach(e=>{if(!e.name)throw Error(`extension name required`);if(`renderer`in e){let n=t.renderers[e.name];n?t.renderers[e.name]=function(...t){let r=e.renderer.apply(this,t);return r===!1&&(r=n.apply(this,t)),r}:t.renderers[e.name]=e.renderer}if(`tokenizer`in e){if(!e.level||e.level!==`block`&&e.level!==`inline`)throw Error(`extension level must be 'block' or 'inline'`);let n=t[e.level];n?n.unshift(e.tokenizer):t[e.level]=[e.tokenizer],e.start&&(e.level===`block`?t.startBlock?t.startBlock.push(e.start):t.startBlock=[e.start]:e.level===`inline`&&(t.startInline?t.startInline.push(e.start):t.startInline=[e.start]))}`childTokens`in e&&e.childTokens&&(t.childTokens[e.name]=e.childTokens)}),n.extensions=t),e.renderer){let t=this.defaults.renderer||new Kt(this.defaults);for(let n in e.renderer){if(!(n in t))throw Error(`renderer '${n}' does not exist`);if([`options`,`parser`].includes(n))continue;let r=n,i=e.renderer[r],a=t[r];t[r]=(...e)=>{let n=i.apply(t,e);return n===!1&&(n=a.apply(t,e)),n||``}}n.renderer=t}if(e.tokenizer){let t=this.defaults.tokenizer||new Wt(this.defaults);for(let n in e.tokenizer){if(!(n in t))throw Error(`tokenizer '${n}' does not exist`);if([`options`,`rules`,`lexer`].includes(n))continue;let r=n,i=e.tokenizer[r],a=t[r];t[r]=(...e)=>{let n=i.apply(t,e);return n===!1&&(n=a.apply(t,e)),n}}n.tokenizer=t}if(e.hooks){let t=this.defaults.hooks||new Jt;for(let n in e.hooks){if(!(n in t))throw Error(`hook '${n}' does not exist`);if([`options`,`block`].includes(n))continue;let r=n,i=e.hooks[r],a=t[r];Jt.passThroughHooks.has(n)?t[r]=e=>{if(this.defaults.async&&Jt.passThroughHooksRespectAsync.has(n))return(async()=>{let n=await i.call(t,e);return a.call(t,n)})();let r=i.call(t,e);return a.call(t,r)}:t[r]=(...e)=>{if(this.defaults.async)return(async()=>{let n=await i.apply(t,e);return n===!1&&(n=await a.apply(t,e)),n})();let n=i.apply(t,e);return n===!1&&(n=a.apply(t,e)),n}}n.hooks=t}if(e.walkTokens){let t=this.defaults.walkTokens,r=e.walkTokens;n.walkTokens=function(e){let n=[];return n.push(r.call(this,e)),t&&(n=n.concat(t.call(this,e))),n}}this.defaults={...this.defaults,...n}}),this}setOptions(e){return this.defaults={...this.defaults,...e},this}lexer(e,t){return Gt.lex(e,t??this.defaults)}parser(e,t){return k.parse(e,t??this.defaults)}parseMarkdown(e){return(t,n)=>{let r={...n},i={...this.defaults,...r},a=this.onError(!!i.silent,!!i.async);if(this.defaults.async===!0&&r.async===!1)return a(Error(`marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise.`));if(typeof t>`u`||t===null)return a(Error(`marked(): input parameter is undefined or null`));if(typeof t!=`string`)return a(Error(`marked(): input parameter is of type `+Object.prototype.toString.call(t)+`, string expected`));if(i.hooks&&(i.hooks.options=i,i.hooks.block=e),i.async)return(async()=>{let n=i.hooks?await i.hooks.preprocess(t):t,r=await(i.hooks?await i.hooks.provideLexer():e?Gt.lex:Gt.lexInline)(n,i),a=i.hooks?await i.hooks.processAllTokens(r):r;i.walkTokens&&await Promise.all(this.walkTokens(a,i.walkTokens));let o=await(i.hooks?await i.hooks.provideParser():e?k.parse:k.parseInline)(a,i);return i.hooks?await i.hooks.postprocess(o):o})().catch(a);try{i.hooks&&(t=i.hooks.preprocess(t));let n=(i.hooks?i.hooks.provideLexer():e?Gt.lex:Gt.lexInline)(t,i);i.hooks&&(n=i.hooks.processAllTokens(n)),i.walkTokens&&this.walkTokens(n,i.walkTokens);let r=(i.hooks?i.hooks.provideParser():e?k.parse:k.parseInline)(n,i);return i.hooks&&(r=i.hooks.postprocess(r)),r}catch(e){return a(e)}}}onError(e,t){return n=>{if(n.message+=`
Please report this to https://github.com/markedjs/marked.`,e){let e=`<p>An error occurred:</p><pre>`+It(n.message+``,!0)+`</pre>`;return t?Promise.resolve(e):e}if(t)return Promise.reject(n);throw n}}};function A(e,t){return Yt.parse(e,t)}A.options=A.setOptions=function(e){return Yt.setOptions(e),A.defaults=Yt.defaults,Te(A.defaults),A},A.getDefaults=Ce,A.defaults=we,A.use=function(...e){return Yt.use(...e),A.defaults=Yt.defaults,Te(A.defaults),A},A.walkTokens=function(e,t){return Yt.walkTokens(e,t)},A.parseInline=Yt.parseInline,A.Parser=k,A.parser=k.parse,A.Renderer=Kt,A.TextRenderer=qt,A.Lexer=Gt,A.lexer=Gt.lex,A.Tokenizer=Wt,A.Hooks=Jt,A.parse=A,A.options,A.setOptions,A.use,A.walkTokens,A.parseInline,k.parse,Gt.lex;var Xt=Object.assign({"../content/ai-ethics.en.md":re,"../content/ai-ethics.zh.md":ie,"../content/computer-vision.en.md":ae,"../content/computer-vision.zh.md":oe,"../content/deep-learning.en.md":se,"../content/deep-learning.zh.md":ce,"../content/embedding.en.md":le,"../content/embedding.zh.md":ue,"../content/llm.en.md":de,"../content/llm.zh.md":w,"../content/machine-learning.en.md":T,"../content/machine-learning.zh.md":fe,"../content/neural-networks.en.md":pe,"../content/neural-networks.zh.md":me,"../content/nlp.en.md":he,"../content/nlp.zh.md":E,"../content/prompt-engineering.en.md":D,"../content/prompt-engineering.zh.md":ge,"../content/rag.en.md":_e,"../content/rag.zh.md":ve,"../content/reinforcement-learning.en.md":ye,"../content/reinforcement-learning.zh.md":be,"../content/token.en.md":xe,"../content/token.zh.md":Se}),Zt={};A.setOptions({breaks:!0,gfm:!0});function Qt(e,t){let n=`${e}_${t}`;if(Zt[n])return Zt[n];let r=`../content/${e}.${t}.md`;if(!Xt[r])return null;let i=Xt[r],a=$t(A.parse(i));return Zt[n]=a,a}function $t(e){let t=/<h2[^>]*>(.*?)<\/h2>/gi,n=[],r,i=``,a=t.exec(e);if(a){i=e.slice(0,a.index).trim(),t.lastIndex=0;let o=a.index+a[0].length;for(;(r=t.exec(e))!==null;){let t=r[1],i=e.slice(o,r.index).trim();n.push({title:t,content:i}),o=r.index+r[0].length}let s=e.slice(o).trim();if(s&&n.length>0){let t=s.match(/^(<p>.*?<\/p>\s*)+$/i);if(t)return n[n.length-1].content=e.slice(o,o+s.indexOf(t[0])).trim(),{intro:i,sections:n.slice(0,-1),conclusion:t[0]};n[n.length-1].content=s}}else i=e;let o=``;if(n.length>0){let e=n[n.length-1],t=en(e.content);t&&(e.content=t.content,o=t.conclusion)}return{intro:i,sections:n,conclusion:o}}function en(e){let t=/<p>(.*?)<\/p>/gi,n=[],r;for(;(r=t.exec(e))!==null;)n.push({text:r[1],index:r.index});if(n.length>=2){let t=n[n.length-1];if(t.text.length<200&&!t.text.includes(`<ul>`))return{content:e.slice(0,t.index).trim(),conclusion:`<p>${t.text}</p>`}}return null}A.setOptions({breaks:!0,gfm:!0});function tn(e){return{__html:A.parse(e)}}function nn({topicId:e,onBack:t,onTopicClick:n,lang:r}){let i=v(r),a=i.find(t=>t.id===e),o=(0,l.useMemo)(()=>Qt(e,r),[e,r]);if(!a)return null;let s=a.relatedTopics?a.relatedTopics.map(e=>i.find(t=>t.id===e)).filter(Boolean):[],c=o?.intro||``,u=o?.sections||[],p=o?.conclusion||``;return(0,d.jsxs)(`article`,{className:`topic-detail`,children:[(0,d.jsxs)(`header`,{className:`topic-detail__header`,children:[(0,d.jsxs)(f,{variant:`secondary`,size:`sm`,onClick:t,children:[`← `,r===`zh`?`返回`:`Back`]}),(0,d.jsx)(S,{categoryId:a.category,size:`lg`,lang:r})]}),(0,d.jsx)(`h1`,{className:`topic-detail__title`,children:a.title}),(0,d.jsx)(`p`,{className:`topic-detail__summary`,children:a.summary}),c&&(0,d.jsx)(`div`,{className:`topic-detail__intro`,dangerouslySetInnerHTML:tn(c)}),u.map((e,t)=>(0,d.jsx)(ne,{title:e.title,children:(0,d.jsx)(`div`,{className:`topic-detail__section-content`,dangerouslySetInnerHTML:tn(e.content)})},t)),p&&(0,d.jsx)(`div`,{className:`topic-detail__conclusion`,dangerouslySetInnerHTML:tn(p)}),(0,d.jsx)(ne,{title:r===`zh`?`核心概念`:`Key Concepts`,children:(0,d.jsx)(`div`,{className:`topic-detail__concepts`,children:a.keyConcepts.map((e,t)=>(0,d.jsx)(`span`,{className:`topic-detail__concept`,children:e},t))})}),s.length>0&&(0,d.jsx)(ne,{title:r===`zh`?`相关主题`:`Related Topics`,children:(0,d.jsx)(`div`,{className:`topic-detail__related`,children:s.map(e=>(0,d.jsxs)(`button`,{className:`topic-detail__related-item`,onClick:()=>n(e.id),children:[(0,d.jsx)(`span`,{className:`topic-detail__related-icon`,children:e.category===`ml`?`🤖`:e.category===`deep-learning`?`🧠`:e.category===`nlp`?`💬`:e.category===`vision`?`👁️`:`🚀`}),(0,d.jsx)(`span`,{className:`topic-detail__related-title`,children:e.title})]},e.id))})})]})}function rn({topicId:e,onBack:t,onTopicClick:n,lang:r}){return(0,d.jsx)(`div`,{className:`topic-page`,children:(0,d.jsx)(nn,{topicId:e,onBack:t,onTopicClick:n,lang:r})})}function an({categoryId:e,onBack:t,onTopicClick:n,lang:r}){let i=y(r),a=v(r),o=i.find(t=>t.id===e),s=e===`latest`?a.filter(e=>e.isNew):a.filter(t=>t.category===e);return(0,d.jsxs)(`div`,{className:`category-page`,children:[(0,d.jsxs)(`header`,{className:`category-page__header`,children:[(0,d.jsxs)(f,{variant:`secondary`,size:`sm`,onClick:t,children:[`← `,r===`zh`?`返回`:`Back`]}),(0,d.jsxs)(`div`,{className:`category-page__title-wrapper`,children:[(0,d.jsx)(`span`,{className:`category-page__icon`,children:o?.icon}),(0,d.jsx)(`h1`,{className:`category-page__title`,children:o?.name})]}),(0,d.jsxs)(`p`,{className:`category-page__count`,children:[s.length,` `,s.length===1?r===`zh`?`个主题`:`topic`:r===`zh`?`个主题`:`topics`]})]}),(0,d.jsx)(`div`,{className:`category-page__grid`,children:s.map(e=>(0,d.jsx)(C,{topic:e,onClick:n,lang:r},e.id))})]})}var on=[{version:`1.0.0`,date:`2026-03-23`,changes:[{type:`feature`,text:`Initial release with 8 AI topics`},{type:`feature`,text:`Chinese/English language switching`},{type:`feature`,text:`Dark mode support`},{type:`feature`,text:`Responsive design for mobile and desktop`},{type:`feature`,text:`Search functionality`},{type:`feature`,text:`Category filtering`},{type:`feature`,text:`Latest topics with "New" badge`},{type:`feature`,text:`GitHub Pages deployment`}]},{version:`1.1.0`,date:`2026-03-23`,changes:[{type:`feature`,text:`Back to top button`},{type:`feature`,text:`Draggable back button on mobile`},{type:`feature`,text:`Draggable top button on mobile`},{type:`feature`,text:`Changelog page`}]}],sn=[{version:`1.0.0`,date:`2026-03-23`,changes:[{type:`feature`,text:`首发版本，包含8个AI主题`},{type:`feature`,text:`中英文切换功能`},{type:`feature`,text:`暗黑模式支持`},{type:`feature`,text:`响应式设计，适配移动端和桌面端`},{type:`feature`,text:`搜索功能`},{type:`feature`,text:`分类筛选`},{type:`feature`,text:`最新主题标识`},{type:`feature`,text:`GitHub Pages 部署`}]},{version:`1.1.0`,date:`2026-03-23`,changes:[{type:`feature`,text:`回到顶部按钮`},{type:`feature`,text:`移动端可拖拽返回按钮`},{type:`feature`,text:`移动端可拖拽回到顶部按钮`},{type:`feature`,text:`更新日志页面`}]}];function cn({lang:e}){let t=[...e===`zh`?sn:on].reverse(),n=t=>({feature:e===`zh`?`新功能`:`Feature`,fix:e===`zh`?`修复`:`Fix`,improve:e===`zh`?`优化`:`Improvement`})[t]||t,r=e=>({feature:`changelog__tag--feature`,fix:`changelog__tag--fix`,improve:`changelog__tag--improve`})[e]||``;return(0,d.jsxs)(`div`,{className:`changelog`,children:[(0,d.jsxs)(`header`,{className:`changelog__header`,children:[(0,d.jsx)(`h1`,{className:`changelog__title`,children:e===`zh`?`更新日志`:`Changelog`}),(0,d.jsx)(`p`,{className:`changelog__subtitle`,children:e===`zh`?`记录产品的每一次迭代与成长`:`Recording every iteration and growth of the product`})]}),(0,d.jsx)(`div`,{className:`changelog__timeline`,children:t.map((t,i)=>(0,d.jsxs)(`div`,{className:`changelog__release`,children:[(0,d.jsxs)(`div`,{className:`changelog__version-row`,children:[(0,d.jsxs)(`span`,{className:`changelog__version`,children:[`v`,t.version]}),(0,d.jsx)(`span`,{className:`changelog__date`,children:t.date}),i===0&&(0,d.jsx)(`span`,{className:`changelog__latest`,children:e===`zh`?`最新`:`Latest`})]}),(0,d.jsx)(`ul`,{className:`changelog__changes`,children:t.changes.map((e,t)=>(0,d.jsxs)(`li`,{className:`changelog__change`,children:[(0,d.jsx)(`span`,{className:`changelog__tag ${r(e.type)}`,children:n(e.type)}),(0,d.jsx)(`span`,{className:`changelog__text`,children:e.text})]},t))})]},t.version))})]})}function ln(){let[e,t]=(0,l.useState)(()=>{let e=localStorage.getItem(`ai-encyclopedia-theme`);return e===null?window.matchMedia(`(prefers-color-scheme: dark)`).matches:e===`dark`});return(0,l.useEffect)(()=>{document.documentElement.setAttribute(`data-theme`,e?`dark`:`light`),localStorage.setItem(`ai-encyclopedia-theme`,e?`dark`:`light`)},[e]),{isDark:e,toggleDarkMode:(0,l.useCallback)(()=>{t(e=>!e)},[])}}function un(){let{isDark:e,toggleDarkMode:t}=ln(),[n,r]=(0,l.useState)(()=>localStorage.getItem(`ai-encyclopedia-lang`)||`zh`),[i,a]=(0,l.useState)({currentPage:`home`,selectedTopic:null,selectedCategory:null,currentTopicCategory:null}),[o,s]=(0,l.useState)(!1),[c,u]=(0,l.useState)(``),f=(0,l.useCallback)(()=>{r(e=>{let t=e===`en`?`zh`:`en`;return localStorage.setItem(`ai-encyclopedia-lang`,t),t})},[]),m=(0,l.useCallback)((e,t={})=>{a(n=>({currentPage:e,selectedTopic:t.topicId||null,selectedCategory:e===`category`&&t.categoryId||null,currentTopicCategory:e===`topic`&&t.categoryId||null})),s(!1)},[]),h=(0,l.useCallback)(()=>{a({currentPage:`home`,selectedTopic:null,selectedCategory:null,currentTopicCategory:null}),s(!1),u(``)},[]),g=(0,l.useCallback)(()=>{a(e=>e.selectedTopic?{...e,currentPage:`home`,selectedTopic:null,currentTopicCategory:null}:e.selectedCategory?{...e,currentPage:`home`,selectedCategory:null}:e.currentPage===`changelog`?{...e,currentPage:`home`}:e)},[]),_=e=>{m(`topic`,{topicId:e,categoryId:v(n).find(t=>t.id===e)?.category||null})},y=e=>{e?m(`category`,{categoryId:e}):h()},S=e=>{u(e),e&&i.currentPage},C=(0,l.useCallback)(()=>{a(e=>({...e,currentPage:`changelog`,selectedTopic:null,selectedCategory:null,currentTopicCategory:null})),s(!1)},[]),ne=()=>{switch(i.currentPage){case`topic`:return(0,d.jsx)(rn,{topicId:i.selectedTopic,onBack:g,onTopicClick:_,lang:n});case`category`:return(0,d.jsx)(an,{categoryId:i.selectedCategory,onBack:g,onTopicClick:_,lang:n});case`changelog`:return(0,d.jsx)(cn,{lang:n});default:return(0,d.jsx)(te,{onTopicClick:_,lang:n,searchQuery:c})}};return(0,d.jsxs)(`div`,{className:`app`,children:[(0,d.jsx)(p,{onLogoClick:h,lang:n,onToggleLang:f,isDark:e,onToggleDark:t,searchQuery:c,onSearchChange:S,onChangelogClick:C}),(0,d.jsx)(`button`,{className:`mobile-menu-btn`,onClick:()=>s(!o),"aria-label":`Toggle menu`,children:o?`✕`:`☰`}),o&&(0,d.jsx)(`div`,{className:`sidebar-overlay`,onClick:()=>s(!1)}),(0,d.jsx)(b,{selectedCategory:i.currentPage===`category`?i.selectedCategory:i.currentTopicCategory,onCategoryClick:y,lang:n,isOpen:o}),(0,d.jsxs)(`main`,{className:`main`,children:[(0,d.jsx)(`div`,{className:`main__content`,children:ne()}),(0,d.jsx)(x,{lang:n})]}),(0,d.jsx)(ee,{hasBack:i.currentPage!==`home`,onBack:g})]})}(0,c.createRoot)(document.getElementById(`root`)).render((0,d.jsx)(l.StrictMode,{children:(0,d.jsx)(un,{})}));