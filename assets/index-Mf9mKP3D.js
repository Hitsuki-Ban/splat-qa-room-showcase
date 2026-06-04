(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const h of c.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();var Kf={exports:{}},wo={};var Mg;function Ly(){if(Mg)return wo;Mg=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(s,l,c){var h=null;if(c!==void 0&&(h=""+c),l.key!==void 0&&(h=""+l.key),"key"in l){c={};for(var d in l)d!=="key"&&(c[d]=l[d])}else c=l;return l=c.ref,{$$typeof:r,type:s,key:h,ref:l!==void 0?l:null,props:c}}return wo.Fragment=t,wo.jsx=i,wo.jsxs=i,wo}var Eg;function Ny(){return Eg||(Eg=1,Kf.exports=Ly()),Kf.exports}var ht=Ny(),Qf={exports:{}},re={};var Tg;function Oy(){if(Tg)return re;Tg=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),g=Symbol.for("react.activity"),y=Symbol.iterator;function x(L){return L===null||typeof L!="object"?null:(L=y&&L[y]||L["@@iterator"],typeof L=="function"?L:null)}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},R=Object.assign,M={};function S(L,et,yt){this.props=L,this.context=et,this.refs=M,this.updater=yt||b}S.prototype.isReactComponent={},S.prototype.setState=function(L,et){if(typeof L!="object"&&typeof L!="function"&&L!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,L,et,"setState")},S.prototype.forceUpdate=function(L){this.updater.enqueueForceUpdate(this,L,"forceUpdate")};function H(){}H.prototype=S.prototype;function O(L,et,yt){this.props=L,this.context=et,this.refs=M,this.updater=yt||b}var D=O.prototype=new H;D.constructor=O,R(D,S.prototype),D.isPureReactComponent=!0;var F=Array.isArray;function z(){}var B={H:null,A:null,T:null,S:null},Y=Object.prototype.hasOwnProperty;function C(L,et,yt){var At=yt.ref;return{$$typeof:r,type:L,key:et,ref:At!==void 0?At:null,props:yt}}function w(L,et){return C(L.type,et,L.props)}function V(L){return typeof L=="object"&&L!==null&&L.$$typeof===r}function it(L){var et={"=":"=0",":":"=2"};return"$"+L.replace(/[=:]/g,function(yt){return et[yt]})}var ot=/\/+/g;function ft(L,et){return typeof L=="object"&&L!==null&&L.key!=null?it(""+L.key):et.toString(36)}function pt(L){switch(L.status){case"fulfilled":return L.value;case"rejected":throw L.reason;default:switch(typeof L.status=="string"?L.then(z,z):(L.status="pending",L.then(function(et){L.status==="pending"&&(L.status="fulfilled",L.value=et)},function(et){L.status==="pending"&&(L.status="rejected",L.reason=et)})),L.status){case"fulfilled":return L.value;case"rejected":throw L.reason}}throw L}function N(L,et,yt,At,Ut){var tt=typeof L;(tt==="undefined"||tt==="boolean")&&(L=null);var lt=!1;if(L===null)lt=!0;else switch(tt){case"bigint":case"string":case"number":lt=!0;break;case"object":switch(L.$$typeof){case r:case t:lt=!0;break;case _:return lt=L._init,N(lt(L._payload),et,yt,At,Ut)}}if(lt)return Ut=Ut(L),lt=At===""?"."+ft(L,0):At,F(Ut)?(yt="",lt!=null&&(yt=lt.replace(ot,"$&/")+"/"),N(Ut,et,yt,"",function(Xt){return Xt})):Ut!=null&&(V(Ut)&&(Ut=w(Ut,yt+(Ut.key==null||L&&L.key===Ut.key?"":(""+Ut.key).replace(ot,"$&/")+"/")+lt)),et.push(Ut)),1;lt=0;var Dt=At===""?".":At+":";if(F(L))for(var It=0;It<L.length;It++)At=L[It],tt=Dt+ft(At,It),lt+=N(At,et,yt,tt,Ut);else if(It=x(L),typeof It=="function")for(L=It.call(L),It=0;!(At=L.next()).done;)At=At.value,tt=Dt+ft(At,It++),lt+=N(At,et,yt,tt,Ut);else if(tt==="object"){if(typeof L.then=="function")return N(pt(L),et,yt,At,Ut);throw et=String(L),Error("Objects are not valid as a React child (found: "+(et==="[object Object]"?"object with keys {"+Object.keys(L).join(", ")+"}":et)+"). If you meant to render a collection of children, use an array instead.")}return lt}function Z(L,et,yt){if(L==null)return L;var At=[],Ut=0;return N(L,At,"","",function(tt){return et.call(yt,tt,Ut++)}),At}function X(L){if(L._status===-1){var et=L._result;et=et(),et.then(function(yt){(L._status===0||L._status===-1)&&(L._status=1,L._result=yt)},function(yt){(L._status===0||L._status===-1)&&(L._status=2,L._result=yt)}),L._status===-1&&(L._status=0,L._result=et)}if(L._status===1)return L._result.default;throw L._result}var St=typeof reportError=="function"?reportError:function(L){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var et=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof L=="object"&&L!==null&&typeof L.message=="string"?String(L.message):String(L),error:L});if(!window.dispatchEvent(et))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",L);return}console.error(L)},Mt={map:Z,forEach:function(L,et,yt){Z(L,function(){et.apply(this,arguments)},yt)},count:function(L){var et=0;return Z(L,function(){et++}),et},toArray:function(L){return Z(L,function(et){return et})||[]},only:function(L){if(!V(L))throw Error("React.Children.only expected to receive a single React element child.");return L}};return re.Activity=g,re.Children=Mt,re.Component=S,re.Fragment=i,re.Profiler=l,re.PureComponent=O,re.StrictMode=s,re.Suspense=m,re.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=B,re.__COMPILER_RUNTIME={__proto__:null,c:function(L){return B.H.useMemoCache(L)}},re.cache=function(L){return function(){return L.apply(null,arguments)}},re.cacheSignal=function(){return null},re.cloneElement=function(L,et,yt){if(L==null)throw Error("The argument must be a React element, but you passed "+L+".");var At=R({},L.props),Ut=L.key;if(et!=null)for(tt in et.key!==void 0&&(Ut=""+et.key),et)!Y.call(et,tt)||tt==="key"||tt==="__self"||tt==="__source"||tt==="ref"&&et.ref===void 0||(At[tt]=et[tt]);var tt=arguments.length-2;if(tt===1)At.children=yt;else if(1<tt){for(var lt=Array(tt),Dt=0;Dt<tt;Dt++)lt[Dt]=arguments[Dt+2];At.children=lt}return C(L.type,Ut,At)},re.createContext=function(L){return L={$$typeof:h,_currentValue:L,_currentValue2:L,_threadCount:0,Provider:null,Consumer:null},L.Provider=L,L.Consumer={$$typeof:c,_context:L},L},re.createElement=function(L,et,yt){var At,Ut={},tt=null;if(et!=null)for(At in et.key!==void 0&&(tt=""+et.key),et)Y.call(et,At)&&At!=="key"&&At!=="__self"&&At!=="__source"&&(Ut[At]=et[At]);var lt=arguments.length-2;if(lt===1)Ut.children=yt;else if(1<lt){for(var Dt=Array(lt),It=0;It<lt;It++)Dt[It]=arguments[It+2];Ut.children=Dt}if(L&&L.defaultProps)for(At in lt=L.defaultProps,lt)Ut[At]===void 0&&(Ut[At]=lt[At]);return C(L,tt,Ut)},re.createRef=function(){return{current:null}},re.forwardRef=function(L){return{$$typeof:d,render:L}},re.isValidElement=V,re.lazy=function(L){return{$$typeof:_,_payload:{_status:-1,_result:L},_init:X}},re.memo=function(L,et){return{$$typeof:p,type:L,compare:et===void 0?null:et}},re.startTransition=function(L){var et=B.T,yt={};B.T=yt;try{var At=L(),Ut=B.S;Ut!==null&&Ut(yt,At),typeof At=="object"&&At!==null&&typeof At.then=="function"&&At.then(z,St)}catch(tt){St(tt)}finally{et!==null&&yt.types!==null&&(et.types=yt.types),B.T=et}},re.unstable_useCacheRefresh=function(){return B.H.useCacheRefresh()},re.use=function(L){return B.H.use(L)},re.useActionState=function(L,et,yt){return B.H.useActionState(L,et,yt)},re.useCallback=function(L,et){return B.H.useCallback(L,et)},re.useContext=function(L){return B.H.useContext(L)},re.useDebugValue=function(){},re.useDeferredValue=function(L,et){return B.H.useDeferredValue(L,et)},re.useEffect=function(L,et){return B.H.useEffect(L,et)},re.useEffectEvent=function(L){return B.H.useEffectEvent(L)},re.useId=function(){return B.H.useId()},re.useImperativeHandle=function(L,et,yt){return B.H.useImperativeHandle(L,et,yt)},re.useInsertionEffect=function(L,et){return B.H.useInsertionEffect(L,et)},re.useLayoutEffect=function(L,et){return B.H.useLayoutEffect(L,et)},re.useMemo=function(L,et){return B.H.useMemo(L,et)},re.useOptimistic=function(L,et){return B.H.useOptimistic(L,et)},re.useReducer=function(L,et,yt){return B.H.useReducer(L,et,yt)},re.useRef=function(L){return B.H.useRef(L)},re.useState=function(L){return B.H.useState(L)},re.useSyncExternalStore=function(L,et,yt){return B.H.useSyncExternalStore(L,et,yt)},re.useTransition=function(){return B.H.useTransition()},re.version="19.2.7",re}var bg;function Rd(){return bg||(bg=1,Qf.exports=Oy()),Qf.exports}var je=Rd(),Jf={exports:{}},Do={},$f={exports:{}},th={};var Ag;function Py(){return Ag||(Ag=1,(function(r){function t(N,Z){var X=N.length;N.push(Z);t:for(;0<X;){var St=X-1>>>1,Mt=N[St];if(0<l(Mt,Z))N[St]=Z,N[X]=Mt,X=St;else break t}}function i(N){return N.length===0?null:N[0]}function s(N){if(N.length===0)return null;var Z=N[0],X=N.pop();if(X!==Z){N[0]=X;t:for(var St=0,Mt=N.length,L=Mt>>>1;St<L;){var et=2*(St+1)-1,yt=N[et],At=et+1,Ut=N[At];if(0>l(yt,X))At<Mt&&0>l(Ut,yt)?(N[St]=Ut,N[At]=X,St=At):(N[St]=yt,N[et]=X,St=et);else if(At<Mt&&0>l(Ut,X))N[St]=Ut,N[At]=X,St=At;else break t}}return Z}function l(N,Z){var X=N.sortIndex-Z.sortIndex;return X!==0?X:N.id-Z.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var h=Date,d=h.now();r.unstable_now=function(){return h.now()-d}}var m=[],p=[],_=1,g=null,y=3,x=!1,b=!1,R=!1,M=!1,S=typeof setTimeout=="function"?setTimeout:null,H=typeof clearTimeout=="function"?clearTimeout:null,O=typeof setImmediate<"u"?setImmediate:null;function D(N){for(var Z=i(p);Z!==null;){if(Z.callback===null)s(p);else if(Z.startTime<=N)s(p),Z.sortIndex=Z.expirationTime,t(m,Z);else break;Z=i(p)}}function F(N){if(R=!1,D(N),!b)if(i(m)!==null)b=!0,z||(z=!0,it());else{var Z=i(p);Z!==null&&pt(F,Z.startTime-N)}}var z=!1,B=-1,Y=5,C=-1;function w(){return M?!0:!(r.unstable_now()-C<Y)}function V(){if(M=!1,z){var N=r.unstable_now();C=N;var Z=!0;try{t:{b=!1,R&&(R=!1,H(B),B=-1),x=!0;var X=y;try{e:{for(D(N),g=i(m);g!==null&&!(g.expirationTime>N&&w());){var St=g.callback;if(typeof St=="function"){g.callback=null,y=g.priorityLevel;var Mt=St(g.expirationTime<=N);if(N=r.unstable_now(),typeof Mt=="function"){g.callback=Mt,D(N),Z=!0;break e}g===i(m)&&s(m),D(N)}else s(m);g=i(m)}if(g!==null)Z=!0;else{var L=i(p);L!==null&&pt(F,L.startTime-N),Z=!1}}break t}finally{g=null,y=X,x=!1}Z=void 0}}finally{Z?it():z=!1}}}var it;if(typeof O=="function")it=function(){O(V)};else if(typeof MessageChannel<"u"){var ot=new MessageChannel,ft=ot.port2;ot.port1.onmessage=V,it=function(){ft.postMessage(null)}}else it=function(){S(V,0)};function pt(N,Z){B=S(function(){N(r.unstable_now())},Z)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(N){N.callback=null},r.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Y=0<N?Math.floor(1e3/N):5},r.unstable_getCurrentPriorityLevel=function(){return y},r.unstable_next=function(N){switch(y){case 1:case 2:case 3:var Z=3;break;default:Z=y}var X=y;y=Z;try{return N()}finally{y=X}},r.unstable_requestPaint=function(){M=!0},r.unstable_runWithPriority=function(N,Z){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var X=y;y=N;try{return Z()}finally{y=X}},r.unstable_scheduleCallback=function(N,Z,X){var St=r.unstable_now();switch(typeof X=="object"&&X!==null?(X=X.delay,X=typeof X=="number"&&0<X?St+X:St):X=St,N){case 1:var Mt=-1;break;case 2:Mt=250;break;case 5:Mt=1073741823;break;case 4:Mt=1e4;break;default:Mt=5e3}return Mt=X+Mt,N={id:_++,callback:Z,priorityLevel:N,startTime:X,expirationTime:Mt,sortIndex:-1},X>St?(N.sortIndex=X,t(p,N),i(m)===null&&N===i(p)&&(R?(H(B),B=-1):R=!0,pt(F,X-St))):(N.sortIndex=Mt,t(m,N),b||x||(b=!0,z||(z=!0,it()))),N},r.unstable_shouldYield=w,r.unstable_wrapCallback=function(N){var Z=y;return function(){var X=y;y=Z;try{return N.apply(this,arguments)}finally{y=X}}}})(th)),th}var Rg;function zy(){return Rg||(Rg=1,$f.exports=Py()),$f.exports}var eh={exports:{}},Cn={};var Cg;function By(){if(Cg)return Cn;Cg=1;var r=Rd();function t(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)p+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,p,_){var g=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:g==null?null:""+g,children:m,containerInfo:p,implementation:_}}var h=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Cn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Cn.createPortal=function(m,p){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return c(m,p,null,_)},Cn.flushSync=function(m){var p=h.T,_=s.p;try{if(h.T=null,s.p=2,m)return m()}finally{h.T=p,s.p=_,s.d.f()}},Cn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,s.d.C(m,p))},Cn.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},Cn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var _=p.as,g=d(_,p.crossOrigin),y=typeof p.integrity=="string"?p.integrity:void 0,x=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;_==="style"?s.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:g,integrity:y,fetchPriority:x}):_==="script"&&s.d.X(m,{crossOrigin:g,integrity:y,fetchPriority:x,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Cn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var _=d(p.as,p.crossOrigin);s.d.M(m,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&s.d.M(m)},Cn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var _=p.as,g=d(_,p.crossOrigin);s.d.L(m,_,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Cn.preloadModule=function(m,p){if(typeof m=="string")if(p){var _=d(p.as,p.crossOrigin);s.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else s.d.m(m)},Cn.requestFormReset=function(m){s.d.r(m)},Cn.unstable_batchedUpdates=function(m,p){return m(p)},Cn.useFormState=function(m,p,_){return h.H.useFormState(m,p,_)},Cn.useFormStatus=function(){return h.H.useHostTransitionStatus()},Cn.version="19.2.7",Cn}var wg;function Iy(){if(wg)return eh.exports;wg=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),eh.exports=By(),eh.exports}var Dg;function Fy(){if(Dg)return Do;Dg=1;var r=zy(),t=Rd(),i=Iy();function s(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function h(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function d(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function m(e){if(c(e)!==e)throw Error(s(188))}function p(e){var n=e.alternate;if(!n){if(n=c(e),n===null)throw Error(s(188));return n!==e?null:e}for(var a=e,o=n;;){var u=a.return;if(u===null)break;var f=u.alternate;if(f===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===a)return m(u),e;if(f===o)return m(u),n;f=f.sibling}throw Error(s(188))}if(a.return!==o.return)a=u,o=f;else{for(var v=!1,T=u.child;T;){if(T===a){v=!0,a=u,o=f;break}if(T===o){v=!0,o=u,a=f;break}T=T.sibling}if(!v){for(T=f.child;T;){if(T===a){v=!0,a=f,o=u;break}if(T===o){v=!0,o=f,a=u;break}T=T.sibling}if(!v)throw Error(s(189))}}if(a.alternate!==o)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:n}function _(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=_(e),n!==null)return n;e=e.sibling}return null}var g=Object.assign,y=Symbol.for("react.element"),x=Symbol.for("react.transitional.element"),b=Symbol.for("react.portal"),R=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),S=Symbol.for("react.profiler"),H=Symbol.for("react.consumer"),O=Symbol.for("react.context"),D=Symbol.for("react.forward_ref"),F=Symbol.for("react.suspense"),z=Symbol.for("react.suspense_list"),B=Symbol.for("react.memo"),Y=Symbol.for("react.lazy"),C=Symbol.for("react.activity"),w=Symbol.for("react.memo_cache_sentinel"),V=Symbol.iterator;function it(e){return e===null||typeof e!="object"?null:(e=V&&e[V]||e["@@iterator"],typeof e=="function"?e:null)}var ot=Symbol.for("react.client.reference");function ft(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===ot?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case R:return"Fragment";case S:return"Profiler";case M:return"StrictMode";case F:return"Suspense";case z:return"SuspenseList";case C:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case b:return"Portal";case O:return e.displayName||"Context";case H:return(e._context.displayName||"Context")+".Consumer";case D:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case B:return n=e.displayName||null,n!==null?n:ft(e.type)||"Memo";case Y:n=e._payload,e=e._init;try{return ft(e(n))}catch{}}return null}var pt=Array.isArray,N=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Z=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,X={pending:!1,data:null,method:null,action:null},St=[],Mt=-1;function L(e){return{current:e}}function et(e){0>Mt||(e.current=St[Mt],St[Mt]=null,Mt--)}function yt(e,n){Mt++,St[Mt]=e.current,e.current=n}var At=L(null),Ut=L(null),tt=L(null),lt=L(null);function Dt(e,n){switch(yt(tt,n),yt(Ut,e),yt(At,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?W_(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=W_(n),e=q_(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}et(At),yt(At,e)}function It(){et(At),et(Ut),et(tt)}function Xt(e){e.memoizedState!==null&&yt(lt,e);var n=At.current,a=q_(n,e.type);n!==a&&(yt(Ut,e),yt(At,a))}function de(e){Ut.current===e&&(et(At),et(Ut)),lt.current===e&&(et(lt),bo._currentValue=X)}var sn,I;function Ae(e){if(sn===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);sn=n&&n[1]||"",I=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+sn+e+I}var ie=!1;function te(e,n){if(!e||ie)return"";ie=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var _t=function(){throw Error()};if(Object.defineProperty(_t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(_t,[])}catch(rt){var nt=rt}Reflect.construct(e,[],_t)}else{try{_t.call()}catch(rt){nt=rt}e.call(_t.prototype)}}else{try{throw Error()}catch(rt){nt=rt}(_t=e())&&typeof _t.catch=="function"&&_t.catch(function(){})}}catch(rt){if(rt&&nt&&typeof rt.stack=="string")return[rt.stack,nt.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=o.DetermineComponentFrameRoot(),v=f[0],T=f[1];if(v&&T){var P=v.split(`
`),J=T.split(`
`);for(u=o=0;o<P.length&&!P[o].includes("DetermineComponentFrameRoot");)o++;for(;u<J.length&&!J[u].includes("DetermineComponentFrameRoot");)u++;if(o===P.length||u===J.length)for(o=P.length-1,u=J.length-1;1<=o&&0<=u&&P[o]!==J[u];)u--;for(;1<=o&&0<=u;o--,u--)if(P[o]!==J[u]){if(o!==1||u!==1)do if(o--,u--,0>u||P[o]!==J[u]){var ut=`
`+P[o].replace(" at new "," at ");return e.displayName&&ut.includes("<anonymous>")&&(ut=ut.replace("<anonymous>",e.displayName)),ut}while(1<=o&&0<=u);break}}}finally{ie=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Ae(a):""}function Wt(e,n){switch(e.tag){case 26:case 27:case 5:return Ae(e.type);case 16:return Ae("Lazy");case 13:return e.child!==n&&n!==null?Ae("Suspense Fallback"):Ae("Suspense");case 19:return Ae("SuspenseList");case 0:case 15:return te(e.type,!1);case 11:return te(e.type.render,!1);case 1:return te(e.type,!0);case 31:return Ae("Activity");default:return""}}function Ge(e){try{var n="",a=null;do n+=Wt(e,a),a=e,e=e.return;while(e);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var kt=Object.prototype.hasOwnProperty,se=r.unstable_scheduleCallback,Qe=r.unstable_cancelCallback,Ze=r.unstable_shouldYield,U=r.unstable_requestPaint,E=r.unstable_now,$=r.unstable_getCurrentPriorityLevel,dt=r.unstable_ImmediatePriority,xt=r.unstable_UserBlockingPriority,ct=r.unstable_NormalPriority,Zt=r.unstable_LowPriority,Rt=r.unstable_IdlePriority,Yt=r.log,jt=r.unstable_setDisableYieldValue,Tt=null,Ct=null;function Kt(e){if(typeof Yt=="function"&&jt(e),Ct&&typeof Ct.setStrictMode=="function")try{Ct.setStrictMode(Tt,e)}catch{}}var zt=Math.clz32?Math.clz32:k,Lt=Math.log,oe=Math.LN2;function k(e){return e>>>=0,e===0?32:31-(Lt(e)/oe|0)|0}var bt=256,wt=262144,Bt=4194304;function Et(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function gt(e,n,a){var o=e.pendingLanes;if(o===0)return 0;var u=0,f=e.suspendedLanes,v=e.pingedLanes;e=e.warmLanes;var T=o&134217727;return T!==0?(o=T&~f,o!==0?u=Et(o):(v&=T,v!==0?u=Et(v):a||(a=T&~e,a!==0&&(u=Et(a))))):(T=o&~f,T!==0?u=Et(T):v!==0?u=Et(v):a||(a=o&~e,a!==0&&(u=Et(a)))),u===0?0:n!==0&&n!==u&&(n&f)===0&&(f=u&-u,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:u}function Ft(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function ae(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ne(){var e=Bt;return Bt<<=1,(Bt&62914560)===0&&(Bt=4194304),e}function Te(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function Un(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function ai(e,n,a,o,u,f){var v=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var T=e.entanglements,P=e.expirationTimes,J=e.hiddenUpdates;for(a=v&~a;0<a;){var ut=31-zt(a),_t=1<<ut;T[ut]=0,P[ut]=-1;var nt=J[ut];if(nt!==null)for(J[ut]=null,ut=0;ut<nt.length;ut++){var rt=nt[ut];rt!==null&&(rt.lane&=-536870913)}a&=~_t}o!==0&&Ir(e,o,0),f!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=f&~(v&~n))}function Ir(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var o=31-zt(n);e.entangledLanes|=n,e.entanglements[o]=e.entanglements[o]|1073741824|a&261930}function Ai(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var o=31-zt(a),u=1<<o;u&n|e[o]&n&&(e[o]|=n),a&=~u}}function ws(e,n){var a=n&-n;return a=(a&42)!==0?1:Ds(a),(a&(e.suspendedLanes|n))!==0?0:a}function Ds(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Us(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Za(){var e=Z.p;return e!==0?e:(e=window.event,e===void 0?32:mg(e.type))}function Fr(e,n){var a=Z.p;try{return Z.p=e,n()}finally{Z.p=a}}var qn=Math.random().toString(36).slice(2),rn="__reactFiber$"+qn,yn="__reactProps$"+qn,da="__reactContainer$"+qn,Hr="__reactEvents$"+qn,kc="__reactListeners$"+qn,Xc="__reactHandles$"+qn,Yo="__reactResources$"+qn,Ka="__reactMarker$"+qn;function A(e){delete e[rn],delete e[yn],delete e[Hr],delete e[kc],delete e[Xc]}function W(e){var n=e[rn];if(n)return n;for(var a=e.parentNode;a;){if(n=a[da]||a[rn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=$_(e);e!==null;){if(a=e[rn])return a;e=$_(e)}return n}e=a,a=e.parentNode}return null}function at(e){if(e=e[rn]||e[da]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function st(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(s(33))}function j(e){var n=e[Yo];return n||(n=e[Yo]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function vt(e){e[Ka]=!0}var Nt=new Set,Gt={};function Pt(e,n){Qt(e,n),Qt(e+"Capture",n)}function Qt(e,n){for(Gt[e]=n,e=0;e<n.length;e++)Nt.add(n[e])}var ne=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Jt={},pe={};function Ue(e){return kt.call(pe,e)?!0:kt.call(Jt,e)?!1:ne.test(e)?pe[e]=!0:(Jt[e]=!0,!1)}function Ve(e,n,a){if(Ue(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function Le(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function me(e,n,a,o){if(o===null)e.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+o)}}function Vt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Xe(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function be(e,n,a){var o=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,f=o.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return u.call(this)},set:function(v){a=""+v,f.call(this,v)}}),Object.defineProperty(e,n,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(v){a=""+v},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function xn(e){if(!e._valueTracker){var n=Xe(e)?"checked":"value";e._valueTracker=be(e,n,""+e[n])}}function Bi(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return e&&(o=Xe(e)?e.checked?"true":"false":e.value),e=o,e!==a?(n.setValue(e),!0):!1}function gn(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Qa=/[\n"\\]/g;function Se(e){return e.replace(Qa,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Rn(e,n,a,o,u,f,v,T){e.name="",v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?e.type=v:e.removeAttribute("type"),n!=null?v==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+Vt(n)):e.value!==""+Vt(n)&&(e.value=""+Vt(n)):v!=="submit"&&v!=="reset"||e.removeAttribute("value"),n!=null?hn(e,v,Vt(n)):a!=null?hn(e,v,Vt(a)):o!=null&&e.removeAttribute("value"),u==null&&f!=null&&(e.defaultChecked=!!f),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?e.name=""+Vt(T):e.removeAttribute("name")}function Ln(e,n,a,o,u,f,v,T){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){xn(e);return}a=a!=null?""+Vt(a):"",n=n!=null?""+Vt(n):a,T||n===e.value||(e.value=n),e.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=T?e.checked:!!o,e.defaultChecked=!!o,v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"&&(e.name=v),xn(e)}function hn(e,n,a){n==="number"&&gn(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function en(e,n,a,o){if(e=e.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<e.length;a++)u=n.hasOwnProperty("$"+e[a].value),e[a].selected!==u&&(e[a].selected=u),u&&o&&(e[a].defaultSelected=!0)}else{for(a=""+Vt(a),n=null,u=0;u<e.length;u++){if(e[u].value===a){e[u].selected=!0,o&&(e[u].defaultSelected=!0);return}n!==null||e[u].disabled||(n=e[u])}n!==null&&(n.selected=!0)}}function Ls(e,n,a){if(n!=null&&(n=""+Vt(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+Vt(a):""}function Ri(e,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(s(92));if(pt(o)){if(1<o.length)throw Error(s(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=Vt(n),e.defaultValue=a,o=e.textContent,o===a&&o!==""&&o!==null&&(e.value=o),xn(e)}function Ns(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var Rv=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Vd(e,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":o?e.setProperty(n,a):typeof a!="number"||a===0||Rv.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function kd(e,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(e=e.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&Vd(e,u,o)}else for(var f in n)n.hasOwnProperty(f)&&Vd(e,f,n[f])}function Wc(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Cv=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),wv=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function jo(e){return wv.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Ii(){}var qc=null;function Yc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Os=null,Ps=null;function Xd(e){var n=at(e);if(n&&(e=n.stateNode)){var a=e[yn]||null;t:switch(e=n.stateNode,n.type){case"input":if(Rn(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Se(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==e&&o.form===e.form){var u=o[yn]||null;if(!u)throw Error(s(90));Rn(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===e.form&&Bi(o)}break t;case"textarea":Ls(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&en(e,!!a.multiple,n,!1)}}}var jc=!1;function Wd(e,n,a){if(jc)return e(n,a);jc=!0;try{var o=e(n);return o}finally{if(jc=!1,(Os!==null||Ps!==null)&&(Pl(),Os&&(n=Os,e=Ps,Ps=Os=null,Xd(n),e)))for(n=0;n<e.length;n++)Xd(e[n])}}function Gr(e,n){var a=e.stateNode;if(a===null)return null;var o=a[yn]||null;if(o===null)return null;a=o[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var Fi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Zc=!1;if(Fi)try{var Vr={};Object.defineProperty(Vr,"passive",{get:function(){Zc=!0}}),window.addEventListener("test",Vr,Vr),window.removeEventListener("test",Vr,Vr)}catch{Zc=!1}var pa=null,Kc=null,Zo=null;function qd(){if(Zo)return Zo;var e,n=Kc,a=n.length,o,u="value"in pa?pa.value:pa.textContent,f=u.length;for(e=0;e<a&&n[e]===u[e];e++);var v=a-e;for(o=1;o<=v&&n[a-o]===u[f-o];o++);return Zo=u.slice(e,1<o?1-o:void 0)}function Ko(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Qo(){return!0}function Yd(){return!1}function Bn(e){function n(a,o,u,f,v){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=f,this.target=v,this.currentTarget=null;for(var T in e)e.hasOwnProperty(T)&&(a=e[T],this[T]=a?a(f):f[T]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?Qo:Yd,this.isPropagationStopped=Yd,this}return g(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Qo)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Qo)},persist:function(){},isPersistent:Qo}),n}var Ja={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Jo=Bn(Ja),kr=g({},Ja,{view:0,detail:0}),Dv=Bn(kr),Qc,Jc,Xr,$o=g({},kr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:tu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Xr&&(Xr&&e.type==="mousemove"?(Qc=e.screenX-Xr.screenX,Jc=e.screenY-Xr.screenY):Jc=Qc=0,Xr=e),Qc)},movementY:function(e){return"movementY"in e?e.movementY:Jc}}),jd=Bn($o),Uv=g({},$o,{dataTransfer:0}),Lv=Bn(Uv),Nv=g({},kr,{relatedTarget:0}),$c=Bn(Nv),Ov=g({},Ja,{animationName:0,elapsedTime:0,pseudoElement:0}),Pv=Bn(Ov),zv=g({},Ja,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Bv=Bn(zv),Iv=g({},Ja,{data:0}),Zd=Bn(Iv),Fv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Hv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Gv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Vv(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Gv[e])?!!n[e]:!1}function tu(){return Vv}var kv=g({},kr,{key:function(e){if(e.key){var n=Fv[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Ko(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Hv[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:tu,charCode:function(e){return e.type==="keypress"?Ko(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ko(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Xv=Bn(kv),Wv=g({},$o,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Kd=Bn(Wv),qv=g({},kr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:tu}),Yv=Bn(qv),jv=g({},Ja,{propertyName:0,elapsedTime:0,pseudoElement:0}),Zv=Bn(jv),Kv=g({},$o,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Qv=Bn(Kv),Jv=g({},Ja,{newState:0,oldState:0}),$v=Bn(Jv),tS=[9,13,27,32],eu=Fi&&"CompositionEvent"in window,Wr=null;Fi&&"documentMode"in document&&(Wr=document.documentMode);var eS=Fi&&"TextEvent"in window&&!Wr,Qd=Fi&&(!eu||Wr&&8<Wr&&11>=Wr),Jd=" ",$d=!1;function tp(e,n){switch(e){case"keyup":return tS.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ep(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var zs=!1;function nS(e,n){switch(e){case"compositionend":return ep(n);case"keypress":return n.which!==32?null:($d=!0,Jd);case"textInput":return e=n.data,e===Jd&&$d?null:e;default:return null}}function iS(e,n){if(zs)return e==="compositionend"||!eu&&tp(e,n)?(e=qd(),Zo=Kc=pa=null,zs=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Qd&&n.locale!=="ko"?null:n.data;default:return null}}var aS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function np(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!aS[e.type]:n==="textarea"}function ip(e,n,a,o){Os?Ps?Ps.push(o):Ps=[o]:Os=o,n=Vl(n,"onChange"),0<n.length&&(a=new Jo("onChange","change",null,a,o),e.push({event:a,listeners:n}))}var qr=null,Yr=null;function sS(e){F_(e,0)}function tl(e){var n=st(e);if(Bi(n))return e}function ap(e,n){if(e==="change")return n}var sp=!1;if(Fi){var nu;if(Fi){var iu="oninput"in document;if(!iu){var rp=document.createElement("div");rp.setAttribute("oninput","return;"),iu=typeof rp.oninput=="function"}nu=iu}else nu=!1;sp=nu&&(!document.documentMode||9<document.documentMode)}function op(){qr&&(qr.detachEvent("onpropertychange",lp),Yr=qr=null)}function lp(e){if(e.propertyName==="value"&&tl(Yr)){var n=[];ip(n,Yr,e,Yc(e)),Wd(sS,n)}}function rS(e,n,a){e==="focusin"?(op(),qr=n,Yr=a,qr.attachEvent("onpropertychange",lp)):e==="focusout"&&op()}function oS(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return tl(Yr)}function lS(e,n){if(e==="click")return tl(n)}function cS(e,n){if(e==="input"||e==="change")return tl(n)}function uS(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Yn=typeof Object.is=="function"?Object.is:uS;function jr(e,n){if(Yn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!kt.call(n,u)||!Yn(e[u],n[u]))return!1}return!0}function cp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function up(e,n){var a=cp(e);e=0;for(var o;a;){if(a.nodeType===3){if(o=e+a.textContent.length,e<=n&&o>=n)return{node:a,offset:n-e};e=o}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=cp(a)}}function fp(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?fp(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function hp(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=gn(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=gn(e.document)}return n}function au(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var fS=Fi&&"documentMode"in document&&11>=document.documentMode,Bs=null,su=null,Zr=null,ru=!1;function dp(e,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;ru||Bs==null||Bs!==gn(o)||(o=Bs,"selectionStart"in o&&au(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),Zr&&jr(Zr,o)||(Zr=o,o=Vl(su,"onSelect"),0<o.length&&(n=new Jo("onSelect","select",null,n,a),e.push({event:n,listeners:o}),n.target=Bs)))}function $a(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var Is={animationend:$a("Animation","AnimationEnd"),animationiteration:$a("Animation","AnimationIteration"),animationstart:$a("Animation","AnimationStart"),transitionrun:$a("Transition","TransitionRun"),transitionstart:$a("Transition","TransitionStart"),transitioncancel:$a("Transition","TransitionCancel"),transitionend:$a("Transition","TransitionEnd")},ou={},pp={};Fi&&(pp=document.createElement("div").style,"AnimationEvent"in window||(delete Is.animationend.animation,delete Is.animationiteration.animation,delete Is.animationstart.animation),"TransitionEvent"in window||delete Is.transitionend.transition);function ts(e){if(ou[e])return ou[e];if(!Is[e])return e;var n=Is[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in pp)return ou[e]=n[a];return e}var mp=ts("animationend"),_p=ts("animationiteration"),gp=ts("animationstart"),hS=ts("transitionrun"),dS=ts("transitionstart"),pS=ts("transitioncancel"),vp=ts("transitionend"),Sp=new Map,lu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");lu.push("scrollEnd");function _i(e,n){Sp.set(e,n),Pt(n,[e])}var el=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},si=[],Fs=0,cu=0;function nl(){for(var e=Fs,n=cu=Fs=0;n<e;){var a=si[n];si[n++]=null;var o=si[n];si[n++]=null;var u=si[n];si[n++]=null;var f=si[n];if(si[n++]=null,o!==null&&u!==null){var v=o.pending;v===null?u.next=u:(u.next=v.next,v.next=u),o.pending=u}f!==0&&yp(a,u,f)}}function il(e,n,a,o){si[Fs++]=e,si[Fs++]=n,si[Fs++]=a,si[Fs++]=o,cu|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function uu(e,n,a,o){return il(e,n,a,o),al(e)}function es(e,n){return il(e,null,null,n),al(e)}function yp(e,n,a){e.lanes|=a;var o=e.alternate;o!==null&&(o.lanes|=a);for(var u=!1,f=e.return;f!==null;)f.childLanes|=a,o=f.alternate,o!==null&&(o.childLanes|=a),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(u=!0)),e=f,f=f.return;return e.tag===3?(f=e.stateNode,u&&n!==null&&(u=31-zt(a),e=f.hiddenUpdates,o=e[u],o===null?e[u]=[n]:o.push(n),n.lane=a|536870912),f):null}function al(e){if(50<vo)throw vo=0,yf=null,Error(s(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var Hs={};function mS(e,n,a,o){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function jn(e,n,a,o){return new mS(e,n,a,o)}function fu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Hi(e,n){var a=e.alternate;return a===null?(a=jn(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function xp(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function sl(e,n,a,o,u,f){var v=0;if(o=e,typeof e=="function")fu(e)&&(v=1);else if(typeof e=="string")v=yy(e,a,At.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case C:return e=jn(31,a,n,u),e.elementType=C,e.lanes=f,e;case R:return ns(a.children,u,f,n);case M:v=8,u|=24;break;case S:return e=jn(12,a,n,u|2),e.elementType=S,e.lanes=f,e;case F:return e=jn(13,a,n,u),e.elementType=F,e.lanes=f,e;case z:return e=jn(19,a,n,u),e.elementType=z,e.lanes=f,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case O:v=10;break t;case H:v=9;break t;case D:v=11;break t;case B:v=14;break t;case Y:v=16,o=null;break t}v=29,a=Error(s(130,e===null?"null":typeof e,"")),o=null}return n=jn(v,a,n,u),n.elementType=e,n.type=o,n.lanes=f,n}function ns(e,n,a,o){return e=jn(7,e,o,n),e.lanes=a,e}function hu(e,n,a){return e=jn(6,e,null,n),e.lanes=a,e}function Mp(e){var n=jn(18,null,null,0);return n.stateNode=e,n}function du(e,n,a){return n=jn(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var Ep=new WeakMap;function ri(e,n){if(typeof e=="object"&&e!==null){var a=Ep.get(e);return a!==void 0?a:(n={value:e,source:n,stack:Ge(n)},Ep.set(e,n),n)}return{value:e,source:n,stack:Ge(n)}}var Gs=[],Vs=0,rl=null,Kr=0,oi=[],li=0,ma=null,Ci=1,wi="";function Gi(e,n){Gs[Vs++]=Kr,Gs[Vs++]=rl,rl=e,Kr=n}function Tp(e,n,a){oi[li++]=Ci,oi[li++]=wi,oi[li++]=ma,ma=e;var o=Ci;e=wi;var u=32-zt(o)-1;o&=~(1<<u),a+=1;var f=32-zt(n)+u;if(30<f){var v=u-u%5;f=(o&(1<<v)-1).toString(32),o>>=v,u-=v,Ci=1<<32-zt(n)+u|a<<u|o,wi=f+e}else Ci=1<<f|a<<u|o,wi=e}function pu(e){e.return!==null&&(Gi(e,1),Tp(e,1,0))}function mu(e){for(;e===rl;)rl=Gs[--Vs],Gs[Vs]=null,Kr=Gs[--Vs],Gs[Vs]=null;for(;e===ma;)ma=oi[--li],oi[li]=null,wi=oi[--li],oi[li]=null,Ci=oi[--li],oi[li]=null}function bp(e,n){oi[li++]=Ci,oi[li++]=wi,oi[li++]=ma,Ci=n.id,wi=n.overflow,ma=e}var Mn=null,We=null,Ee=!1,_a=null,ci=!1,_u=Error(s(519));function ga(e){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Qr(ri(n,e)),_u}function Ap(e){var n=e.stateNode,a=e.type,o=e.memoizedProps;switch(n[rn]=e,n[yn]=o,a){case"dialog":ge("cancel",n),ge("close",n);break;case"iframe":case"object":case"embed":ge("load",n);break;case"video":case"audio":for(a=0;a<yo.length;a++)ge(yo[a],n);break;case"source":ge("error",n);break;case"img":case"image":case"link":ge("error",n),ge("load",n);break;case"details":ge("toggle",n);break;case"input":ge("invalid",n),Ln(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":ge("invalid",n);break;case"textarea":ge("invalid",n),Ri(n,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||k_(n.textContent,a)?(o.popover!=null&&(ge("beforetoggle",n),ge("toggle",n)),o.onScroll!=null&&ge("scroll",n),o.onScrollEnd!=null&&ge("scrollend",n),o.onClick!=null&&(n.onclick=Ii),n=!0):n=!1,n||ga(e,!0)}function Rp(e){for(Mn=e.return;Mn;)switch(Mn.tag){case 5:case 31:case 13:ci=!1;return;case 27:case 3:ci=!0;return;default:Mn=Mn.return}}function ks(e){if(e!==Mn)return!1;if(!Ee)return Rp(e),Ee=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Pf(e.type,e.memoizedProps)),a=!a),a&&We&&ga(e),Rp(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));We=J_(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));We=J_(e)}else n===27?(n=We,Ua(e.type)?(e=Hf,Hf=null,We=e):We=n):We=Mn?fi(e.stateNode.nextSibling):null;return!0}function is(){We=Mn=null,Ee=!1}function gu(){var e=_a;return e!==null&&(Gn===null?Gn=e:Gn.push.apply(Gn,e),_a=null),e}function Qr(e){_a===null?_a=[e]:_a.push(e)}var vu=L(null),as=null,Vi=null;function va(e,n,a){yt(vu,n._currentValue),n._currentValue=a}function ki(e){e._currentValue=vu.current,et(vu)}function Su(e,n,a){for(;e!==null;){var o=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),e===a)break;e=e.return}}function yu(e,n,a,o){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var f=u.dependencies;if(f!==null){var v=u.child;f=f.firstContext;t:for(;f!==null;){var T=f;f=u;for(var P=0;P<n.length;P++)if(T.context===n[P]){f.lanes|=a,T=f.alternate,T!==null&&(T.lanes|=a),Su(f.return,a,e),o||(v=null);break t}f=T.next}}else if(u.tag===18){if(v=u.return,v===null)throw Error(s(341));v.lanes|=a,f=v.alternate,f!==null&&(f.lanes|=a),Su(v,a,e),v=null}else v=u.child;if(v!==null)v.return=u;else for(v=u;v!==null;){if(v===e){v=null;break}if(u=v.sibling,u!==null){u.return=v.return,v=u;break}v=v.return}u=v}}function Xs(e,n,a,o){e=null;for(var u=n,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var v=u.alternate;if(v===null)throw Error(s(387));if(v=v.memoizedProps,v!==null){var T=u.type;Yn(u.pendingProps.value,v.value)||(e!==null?e.push(T):e=[T])}}else if(u===lt.current){if(v=u.alternate,v===null)throw Error(s(387));v.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(bo):e=[bo])}u=u.return}e!==null&&yu(n,e,a,o),n.flags|=262144}function ol(e){for(e=e.firstContext;e!==null;){if(!Yn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function ss(e){as=e,Vi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function En(e){return Cp(as,e)}function ll(e,n){return as===null&&ss(e),Cp(e,n)}function Cp(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Vi===null){if(e===null)throw Error(s(308));Vi=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else Vi=Vi.next=n;return a}var _S=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,o){e.push(o)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},gS=r.unstable_scheduleCallback,vS=r.unstable_NormalPriority,on={$$typeof:O,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function xu(){return{controller:new _S,data:new Map,refCount:0}}function Jr(e){e.refCount--,e.refCount===0&&gS(vS,function(){e.controller.abort()})}var $r=null,Mu=0,Ws=0,qs=null;function SS(e,n){if($r===null){var a=$r=[];Mu=0,Ws=Af(),qs={status:"pending",value:void 0,then:function(o){a.push(o)}}}return Mu++,n.then(wp,wp),n}function wp(){if(--Mu===0&&$r!==null){qs!==null&&(qs.status="fulfilled");var e=$r;$r=null,Ws=0,qs=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function yS(e,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return e.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var Dp=N.S;N.S=function(e,n){d_=E(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&SS(e,n),Dp!==null&&Dp(e,n)};var rs=L(null);function Eu(){var e=rs.current;return e!==null?e:ke.pooledCache}function cl(e,n){n===null?yt(rs,rs.current):yt(rs,n.pool)}function Up(){var e=Eu();return e===null?null:{parent:on._currentValue,pool:e}}var Ys=Error(s(460)),Tu=Error(s(474)),ul=Error(s(542)),fl={then:function(){}};function Lp(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Np(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(Ii,Ii),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Pp(e),e;default:if(typeof n.status=="string")n.then(Ii,Ii);else{if(e=ke,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=n,e.status="pending",e.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Pp(e),e}throw ls=n,Ys}}function os(e){try{var n=e._init;return n(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(ls=a,Ys):a}}var ls=null;function Op(){if(ls===null)throw Error(s(459));var e=ls;return ls=null,e}function Pp(e){if(e===Ys||e===ul)throw Error(s(483))}var js=null,to=0;function hl(e){var n=to;return to+=1,js===null&&(js=[]),Np(js,e,n)}function eo(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function dl(e,n){throw n.$$typeof===y?Error(s(525)):(e=Object.prototype.toString.call(n),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function zp(e){function n(q,G){if(e){var Q=q.deletions;Q===null?(q.deletions=[G],q.flags|=16):Q.push(G)}}function a(q,G){if(!e)return null;for(;G!==null;)n(q,G),G=G.sibling;return null}function o(q){for(var G=new Map;q!==null;)q.key!==null?G.set(q.key,q):G.set(q.index,q),q=q.sibling;return G}function u(q,G){return q=Hi(q,G),q.index=0,q.sibling=null,q}function f(q,G,Q){return q.index=Q,e?(Q=q.alternate,Q!==null?(Q=Q.index,Q<G?(q.flags|=67108866,G):Q):(q.flags|=67108866,G)):(q.flags|=1048576,G)}function v(q){return e&&q.alternate===null&&(q.flags|=67108866),q}function T(q,G,Q,mt){return G===null||G.tag!==6?(G=hu(Q,q.mode,mt),G.return=q,G):(G=u(G,Q),G.return=q,G)}function P(q,G,Q,mt){var $t=Q.type;return $t===R?ut(q,G,Q.props.children,mt,Q.key):G!==null&&(G.elementType===$t||typeof $t=="object"&&$t!==null&&$t.$$typeof===Y&&os($t)===G.type)?(G=u(G,Q.props),eo(G,Q),G.return=q,G):(G=sl(Q.type,Q.key,Q.props,null,q.mode,mt),eo(G,Q),G.return=q,G)}function J(q,G,Q,mt){return G===null||G.tag!==4||G.stateNode.containerInfo!==Q.containerInfo||G.stateNode.implementation!==Q.implementation?(G=du(Q,q.mode,mt),G.return=q,G):(G=u(G,Q.children||[]),G.return=q,G)}function ut(q,G,Q,mt,$t){return G===null||G.tag!==7?(G=ns(Q,q.mode,mt,$t),G.return=q,G):(G=u(G,Q),G.return=q,G)}function _t(q,G,Q){if(typeof G=="string"&&G!==""||typeof G=="number"||typeof G=="bigint")return G=hu(""+G,q.mode,Q),G.return=q,G;if(typeof G=="object"&&G!==null){switch(G.$$typeof){case x:return Q=sl(G.type,G.key,G.props,null,q.mode,Q),eo(Q,G),Q.return=q,Q;case b:return G=du(G,q.mode,Q),G.return=q,G;case Y:return G=os(G),_t(q,G,Q)}if(pt(G)||it(G))return G=ns(G,q.mode,Q,null),G.return=q,G;if(typeof G.then=="function")return _t(q,hl(G),Q);if(G.$$typeof===O)return _t(q,ll(q,G),Q);dl(q,G)}return null}function nt(q,G,Q,mt){var $t=G!==null?G.key:null;if(typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint")return $t!==null?null:T(q,G,""+Q,mt);if(typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case x:return Q.key===$t?P(q,G,Q,mt):null;case b:return Q.key===$t?J(q,G,Q,mt):null;case Y:return Q=os(Q),nt(q,G,Q,mt)}if(pt(Q)||it(Q))return $t!==null?null:ut(q,G,Q,mt,null);if(typeof Q.then=="function")return nt(q,G,hl(Q),mt);if(Q.$$typeof===O)return nt(q,G,ll(q,Q),mt);dl(q,Q)}return null}function rt(q,G,Q,mt,$t){if(typeof mt=="string"&&mt!==""||typeof mt=="number"||typeof mt=="bigint")return q=q.get(Q)||null,T(G,q,""+mt,$t);if(typeof mt=="object"&&mt!==null){switch(mt.$$typeof){case x:return q=q.get(mt.key===null?Q:mt.key)||null,P(G,q,mt,$t);case b:return q=q.get(mt.key===null?Q:mt.key)||null,J(G,q,mt,$t);case Y:return mt=os(mt),rt(q,G,Q,mt,$t)}if(pt(mt)||it(mt))return q=q.get(Q)||null,ut(G,q,mt,$t,null);if(typeof mt.then=="function")return rt(q,G,Q,hl(mt),$t);if(mt.$$typeof===O)return rt(q,G,Q,ll(G,mt),$t);dl(G,mt)}return null}function Ht(q,G,Q,mt){for(var $t=null,Re=null,qt=G,ue=G=0,xe=null;qt!==null&&ue<Q.length;ue++){qt.index>ue?(xe=qt,qt=null):xe=qt.sibling;var Ce=nt(q,qt,Q[ue],mt);if(Ce===null){qt===null&&(qt=xe);break}e&&qt&&Ce.alternate===null&&n(q,qt),G=f(Ce,G,ue),Re===null?$t=Ce:Re.sibling=Ce,Re=Ce,qt=xe}if(ue===Q.length)return a(q,qt),Ee&&Gi(q,ue),$t;if(qt===null){for(;ue<Q.length;ue++)qt=_t(q,Q[ue],mt),qt!==null&&(G=f(qt,G,ue),Re===null?$t=qt:Re.sibling=qt,Re=qt);return Ee&&Gi(q,ue),$t}for(qt=o(qt);ue<Q.length;ue++)xe=rt(qt,q,ue,Q[ue],mt),xe!==null&&(e&&xe.alternate!==null&&qt.delete(xe.key===null?ue:xe.key),G=f(xe,G,ue),Re===null?$t=xe:Re.sibling=xe,Re=xe);return e&&qt.forEach(function(za){return n(q,za)}),Ee&&Gi(q,ue),$t}function ee(q,G,Q,mt){if(Q==null)throw Error(s(151));for(var $t=null,Re=null,qt=G,ue=G=0,xe=null,Ce=Q.next();qt!==null&&!Ce.done;ue++,Ce=Q.next()){qt.index>ue?(xe=qt,qt=null):xe=qt.sibling;var za=nt(q,qt,Ce.value,mt);if(za===null){qt===null&&(qt=xe);break}e&&qt&&za.alternate===null&&n(q,qt),G=f(za,G,ue),Re===null?$t=za:Re.sibling=za,Re=za,qt=xe}if(Ce.done)return a(q,qt),Ee&&Gi(q,ue),$t;if(qt===null){for(;!Ce.done;ue++,Ce=Q.next())Ce=_t(q,Ce.value,mt),Ce!==null&&(G=f(Ce,G,ue),Re===null?$t=Ce:Re.sibling=Ce,Re=Ce);return Ee&&Gi(q,ue),$t}for(qt=o(qt);!Ce.done;ue++,Ce=Q.next())Ce=rt(qt,q,ue,Ce.value,mt),Ce!==null&&(e&&Ce.alternate!==null&&qt.delete(Ce.key===null?ue:Ce.key),G=f(Ce,G,ue),Re===null?$t=Ce:Re.sibling=Ce,Re=Ce);return e&&qt.forEach(function(Uy){return n(q,Uy)}),Ee&&Gi(q,ue),$t}function Ie(q,G,Q,mt){if(typeof Q=="object"&&Q!==null&&Q.type===R&&Q.key===null&&(Q=Q.props.children),typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case x:t:{for(var $t=Q.key;G!==null;){if(G.key===$t){if($t=Q.type,$t===R){if(G.tag===7){a(q,G.sibling),mt=u(G,Q.props.children),mt.return=q,q=mt;break t}}else if(G.elementType===$t||typeof $t=="object"&&$t!==null&&$t.$$typeof===Y&&os($t)===G.type){a(q,G.sibling),mt=u(G,Q.props),eo(mt,Q),mt.return=q,q=mt;break t}a(q,G);break}else n(q,G);G=G.sibling}Q.type===R?(mt=ns(Q.props.children,q.mode,mt,Q.key),mt.return=q,q=mt):(mt=sl(Q.type,Q.key,Q.props,null,q.mode,mt),eo(mt,Q),mt.return=q,q=mt)}return v(q);case b:t:{for($t=Q.key;G!==null;){if(G.key===$t)if(G.tag===4&&G.stateNode.containerInfo===Q.containerInfo&&G.stateNode.implementation===Q.implementation){a(q,G.sibling),mt=u(G,Q.children||[]),mt.return=q,q=mt;break t}else{a(q,G);break}else n(q,G);G=G.sibling}mt=du(Q,q.mode,mt),mt.return=q,q=mt}return v(q);case Y:return Q=os(Q),Ie(q,G,Q,mt)}if(pt(Q))return Ht(q,G,Q,mt);if(it(Q)){if($t=it(Q),typeof $t!="function")throw Error(s(150));return Q=$t.call(Q),ee(q,G,Q,mt)}if(typeof Q.then=="function")return Ie(q,G,hl(Q),mt);if(Q.$$typeof===O)return Ie(q,G,ll(q,Q),mt);dl(q,Q)}return typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint"?(Q=""+Q,G!==null&&G.tag===6?(a(q,G.sibling),mt=u(G,Q),mt.return=q,q=mt):(a(q,G),mt=hu(Q,q.mode,mt),mt.return=q,q=mt),v(q)):a(q,G)}return function(q,G,Q,mt){try{to=0;var $t=Ie(q,G,Q,mt);return js=null,$t}catch(qt){if(qt===Ys||qt===ul)throw qt;var Re=jn(29,qt,null,q.mode);return Re.lanes=mt,Re.return=q,Re}}}var cs=zp(!0),Bp=zp(!1),Sa=!1;function bu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Au(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function ya(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function xa(e,n,a){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(De&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=al(e),yp(e,null,a),n}return il(e,o,n,a),al(e)}function no(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,Ai(e,a)}}function Ru(e,n){var a=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var v={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?u=f=v:f=f.next=v,a=a.next}while(a!==null);f===null?u=f=n:f=f.next=n}else u=f=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:o.shared,callbacks:o.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var Cu=!1;function io(){if(Cu){var e=qs;if(e!==null)throw e}}function ao(e,n,a,o){Cu=!1;var u=e.updateQueue;Sa=!1;var f=u.firstBaseUpdate,v=u.lastBaseUpdate,T=u.shared.pending;if(T!==null){u.shared.pending=null;var P=T,J=P.next;P.next=null,v===null?f=J:v.next=J,v=P;var ut=e.alternate;ut!==null&&(ut=ut.updateQueue,T=ut.lastBaseUpdate,T!==v&&(T===null?ut.firstBaseUpdate=J:T.next=J,ut.lastBaseUpdate=P))}if(f!==null){var _t=u.baseState;v=0,ut=J=P=null,T=f;do{var nt=T.lane&-536870913,rt=nt!==T.lane;if(rt?(ye&nt)===nt:(o&nt)===nt){nt!==0&&nt===Ws&&(Cu=!0),ut!==null&&(ut=ut.next={lane:0,tag:T.tag,payload:T.payload,callback:null,next:null});t:{var Ht=e,ee=T;nt=n;var Ie=a;switch(ee.tag){case 1:if(Ht=ee.payload,typeof Ht=="function"){_t=Ht.call(Ie,_t,nt);break t}_t=Ht;break t;case 3:Ht.flags=Ht.flags&-65537|128;case 0:if(Ht=ee.payload,nt=typeof Ht=="function"?Ht.call(Ie,_t,nt):Ht,nt==null)break t;_t=g({},_t,nt);break t;case 2:Sa=!0}}nt=T.callback,nt!==null&&(e.flags|=64,rt&&(e.flags|=8192),rt=u.callbacks,rt===null?u.callbacks=[nt]:rt.push(nt))}else rt={lane:nt,tag:T.tag,payload:T.payload,callback:T.callback,next:null},ut===null?(J=ut=rt,P=_t):ut=ut.next=rt,v|=nt;if(T=T.next,T===null){if(T=u.shared.pending,T===null)break;rt=T,T=rt.next,rt.next=null,u.lastBaseUpdate=rt,u.shared.pending=null}}while(!0);ut===null&&(P=_t),u.baseState=P,u.firstBaseUpdate=J,u.lastBaseUpdate=ut,f===null&&(u.shared.lanes=0),Aa|=v,e.lanes=v,e.memoizedState=_t}}function Ip(e,n){if(typeof e!="function")throw Error(s(191,e));e.call(n)}function Fp(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Ip(a[e],n)}var Zs=L(null),pl=L(0);function Hp(e,n){e=Ji,yt(pl,e),yt(Zs,n),Ji=e|n.baseLanes}function wu(){yt(pl,Ji),yt(Zs,Zs.current)}function Du(){Ji=pl.current,et(Zs),et(pl)}var Zn=L(null),ui=null;function Ma(e){var n=e.alternate;yt(nn,nn.current&1),yt(Zn,e),ui===null&&(n===null||Zs.current!==null||n.memoizedState!==null)&&(ui=e)}function Uu(e){yt(nn,nn.current),yt(Zn,e),ui===null&&(ui=e)}function Gp(e){e.tag===22?(yt(nn,nn.current),yt(Zn,e),ui===null&&(ui=e)):Ea()}function Ea(){yt(nn,nn.current),yt(Zn,Zn.current)}function Kn(e){et(Zn),ui===e&&(ui=null),et(nn)}var nn=L(0);function ml(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||If(a)||Ff(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Xi=0,le=null,ze=null,ln=null,_l=!1,Ks=!1,us=!1,gl=0,so=0,Qs=null,xS=0;function Je(){throw Error(s(321))}function Lu(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!Yn(e[a],n[a]))return!1;return!0}function Nu(e,n,a,o,u,f){return Xi=f,le=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,N.H=e===null||e.memoizedState===null?Tm:ju,us=!1,f=a(o,u),us=!1,Ks&&(f=kp(n,a,o,u)),Vp(e),f}function Vp(e){N.H=lo;var n=ze!==null&&ze.next!==null;if(Xi=0,ln=ze=le=null,_l=!1,so=0,Qs=null,n)throw Error(s(300));e===null||cn||(e=e.dependencies,e!==null&&ol(e)&&(cn=!0))}function kp(e,n,a,o){le=e;var u=0;do{if(Ks&&(Qs=null),so=0,Ks=!1,25<=u)throw Error(s(301));if(u+=1,ln=ze=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}N.H=bm,f=n(a,o)}while(Ks);return f}function MS(){var e=N.H,n=e.useState()[0];return n=typeof n.then=="function"?ro(n):n,e=e.useState()[0],(ze!==null?ze.memoizedState:null)!==e&&(le.flags|=1024),n}function Ou(){var e=gl!==0;return gl=0,e}function Pu(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function zu(e){if(_l){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}_l=!1}Xi=0,ln=ze=le=null,Ks=!1,so=gl=0,Qs=null}function Nn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ln===null?le.memoizedState=ln=e:ln=ln.next=e,ln}function an(){if(ze===null){var e=le.alternate;e=e!==null?e.memoizedState:null}else e=ze.next;var n=ln===null?le.memoizedState:ln.next;if(n!==null)ln=n,ze=e;else{if(e===null)throw le.alternate===null?Error(s(467)):Error(s(310));ze=e,e={memoizedState:ze.memoizedState,baseState:ze.baseState,baseQueue:ze.baseQueue,queue:ze.queue,next:null},ln===null?le.memoizedState=ln=e:ln=ln.next=e}return ln}function vl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ro(e){var n=so;return so+=1,Qs===null&&(Qs=[]),e=Np(Qs,e,n),n=le,(ln===null?n.memoizedState:ln.next)===null&&(n=n.alternate,N.H=n===null||n.memoizedState===null?Tm:ju),e}function Sl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return ro(e);if(e.$$typeof===O)return En(e)}throw Error(s(438,String(e)))}function Bu(e){var n=null,a=le.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=le.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=vl(),le.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),o=0;o<e;o++)a[o]=w;return n.index++,a}function Wi(e,n){return typeof n=="function"?n(e):n}function yl(e){var n=an();return Iu(n,ze,e)}function Iu(e,n,a){var o=e.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=a;var u=e.baseQueue,f=o.pending;if(f!==null){if(u!==null){var v=u.next;u.next=f.next,f.next=v}n.baseQueue=u=f,o.pending=null}if(f=e.baseState,u===null)e.memoizedState=f;else{n=u.next;var T=v=null,P=null,J=n,ut=!1;do{var _t=J.lane&-536870913;if(_t!==J.lane?(ye&_t)===_t:(Xi&_t)===_t){var nt=J.revertLane;if(nt===0)P!==null&&(P=P.next={lane:0,revertLane:0,gesture:null,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null}),_t===Ws&&(ut=!0);else if((Xi&nt)===nt){J=J.next,nt===Ws&&(ut=!0);continue}else _t={lane:0,revertLane:J.revertLane,gesture:null,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null},P===null?(T=P=_t,v=f):P=P.next=_t,le.lanes|=nt,Aa|=nt;_t=J.action,us&&a(f,_t),f=J.hasEagerState?J.eagerState:a(f,_t)}else nt={lane:_t,revertLane:J.revertLane,gesture:J.gesture,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null},P===null?(T=P=nt,v=f):P=P.next=nt,le.lanes|=_t,Aa|=_t;J=J.next}while(J!==null&&J!==n);if(P===null?v=f:P.next=T,!Yn(f,e.memoizedState)&&(cn=!0,ut&&(a=qs,a!==null)))throw a;e.memoizedState=f,e.baseState=v,e.baseQueue=P,o.lastRenderedState=f}return u===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function Fu(e){var n=an(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var o=a.dispatch,u=a.pending,f=n.memoizedState;if(u!==null){a.pending=null;var v=u=u.next;do f=e(f,v.action),v=v.next;while(v!==u);Yn(f,n.memoizedState)||(cn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,o]}function Xp(e,n,a){var o=le,u=an(),f=Ee;if(f){if(a===void 0)throw Error(s(407));a=a()}else a=n();var v=!Yn((ze||u).memoizedState,a);if(v&&(u.memoizedState=a,cn=!0),u=u.queue,Vu(Yp.bind(null,o,u,e),[e]),u.getSnapshot!==n||v||ln!==null&&ln.memoizedState.tag&1){if(o.flags|=2048,Js(9,{destroy:void 0},qp.bind(null,o,u,a,n),null),ke===null)throw Error(s(349));f||(Xi&127)!==0||Wp(o,n,a)}return a}function Wp(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=le.updateQueue,n===null?(n=vl(),le.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function qp(e,n,a,o){n.value=a,n.getSnapshot=o,jp(n)&&Zp(e)}function Yp(e,n,a){return a(function(){jp(n)&&Zp(e)})}function jp(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!Yn(e,a)}catch{return!0}}function Zp(e){var n=es(e,2);n!==null&&Vn(n,e,2)}function Hu(e){var n=Nn();if(typeof e=="function"){var a=e;if(e=a(),us){Kt(!0);try{a()}finally{Kt(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Wi,lastRenderedState:e},n}function Kp(e,n,a,o){return e.baseState=a,Iu(e,ze,typeof o=="function"?o:Wi)}function ES(e,n,a,o,u){if(El(e))throw Error(s(485));if(e=n.action,e!==null){var f={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(v){f.listeners.push(v)}};N.T!==null?a(!0):f.isTransition=!1,o(f),a=n.pending,a===null?(f.next=n.pending=f,Qp(n,f)):(f.next=a.next,n.pending=a.next=f)}}function Qp(e,n){var a=n.action,o=n.payload,u=e.state;if(n.isTransition){var f=N.T,v={};N.T=v;try{var T=a(u,o),P=N.S;P!==null&&P(v,T),Jp(e,n,T)}catch(J){Gu(e,n,J)}finally{f!==null&&v.types!==null&&(f.types=v.types),N.T=f}}else try{f=a(u,o),Jp(e,n,f)}catch(J){Gu(e,n,J)}}function Jp(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){$p(e,n,o)},function(o){return Gu(e,n,o)}):$p(e,n,a)}function $p(e,n,a){n.status="fulfilled",n.value=a,tm(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,Qp(e,a)))}function Gu(e,n,a){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,tm(n),n=n.next;while(n!==o)}e.action=null}function tm(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function em(e,n){return n}function nm(e,n){if(Ee){var a=ke.formState;if(a!==null){t:{var o=le;if(Ee){if(We){e:{for(var u=We,f=ci;u.nodeType!==8;){if(!f){u=null;break e}if(u=fi(u.nextSibling),u===null){u=null;break e}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){We=fi(u.nextSibling),o=u.data==="F!";break t}}ga(o)}o=!1}o&&(n=a[0])}}return a=Nn(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:em,lastRenderedState:n},a.queue=o,a=xm.bind(null,le,o),o.dispatch=a,o=Hu(!1),f=Yu.bind(null,le,!1,o.queue),o=Nn(),u={state:n,dispatch:null,action:e,pending:null},o.queue=u,a=ES.bind(null,le,u,f,a),u.dispatch=a,o.memoizedState=e,[n,a,!1]}function im(e){var n=an();return am(n,ze,e)}function am(e,n,a){if(n=Iu(e,n,em)[0],e=yl(Wi)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=ro(n)}catch(v){throw v===Ys?ul:v}else o=n;n=an();var u=n.queue,f=u.dispatch;return a!==n.memoizedState&&(le.flags|=2048,Js(9,{destroy:void 0},TS.bind(null,u,a),null)),[o,f,e]}function TS(e,n){e.action=n}function sm(e){var n=an(),a=ze;if(a!==null)return am(n,a,e);an(),n=n.memoizedState,a=an();var o=a.queue.dispatch;return a.memoizedState=e,[n,o,!1]}function Js(e,n,a,o){return e={tag:e,create:a,deps:o,inst:n,next:null},n=le.updateQueue,n===null&&(n=vl(),le.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(o=a.next,a.next=e,e.next=o,n.lastEffect=e),e}function rm(){return an().memoizedState}function xl(e,n,a,o){var u=Nn();le.flags|=e,u.memoizedState=Js(1|n,{destroy:void 0},a,o===void 0?null:o)}function Ml(e,n,a,o){var u=an();o=o===void 0?null:o;var f=u.memoizedState.inst;ze!==null&&o!==null&&Lu(o,ze.memoizedState.deps)?u.memoizedState=Js(n,f,a,o):(le.flags|=e,u.memoizedState=Js(1|n,f,a,o))}function om(e,n){xl(8390656,8,e,n)}function Vu(e,n){Ml(2048,8,e,n)}function bS(e){le.flags|=4;var n=le.updateQueue;if(n===null)n=vl(),le.updateQueue=n,n.events=[e];else{var a=n.events;a===null?n.events=[e]:a.push(e)}}function lm(e){var n=an().memoizedState;return bS({ref:n,nextImpl:e}),function(){if((De&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function cm(e,n){return Ml(4,2,e,n)}function um(e,n){return Ml(4,4,e,n)}function fm(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function hm(e,n,a){a=a!=null?a.concat([e]):null,Ml(4,4,fm.bind(null,n,e),a)}function ku(){}function dm(e,n){var a=an();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&Lu(n,o[1])?o[0]:(a.memoizedState=[e,n],e)}function pm(e,n){var a=an();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&Lu(n,o[1]))return o[0];if(o=e(),us){Kt(!0);try{e()}finally{Kt(!1)}}return a.memoizedState=[o,n],o}function Xu(e,n,a){return a===void 0||(Xi&1073741824)!==0&&(ye&261930)===0?e.memoizedState=n:(e.memoizedState=a,e=m_(),le.lanes|=e,Aa|=e,a)}function mm(e,n,a,o){return Yn(a,n)?a:Zs.current!==null?(e=Xu(e,a,o),Yn(e,n)||(cn=!0),e):(Xi&42)===0||(Xi&1073741824)!==0&&(ye&261930)===0?(cn=!0,e.memoizedState=a):(e=m_(),le.lanes|=e,Aa|=e,n)}function _m(e,n,a,o,u){var f=Z.p;Z.p=f!==0&&8>f?f:8;var v=N.T,T={};N.T=T,Yu(e,!1,n,a);try{var P=u(),J=N.S;if(J!==null&&J(T,P),P!==null&&typeof P=="object"&&typeof P.then=="function"){var ut=yS(P,o);oo(e,n,ut,$n(e))}else oo(e,n,o,$n(e))}catch(_t){oo(e,n,{then:function(){},status:"rejected",reason:_t},$n())}finally{Z.p=f,v!==null&&T.types!==null&&(v.types=T.types),N.T=v}}function AS(){}function Wu(e,n,a,o){if(e.tag!==5)throw Error(s(476));var u=gm(e).queue;_m(e,u,n,X,a===null?AS:function(){return vm(e),a(o)})}function gm(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:X,baseState:X,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Wi,lastRenderedState:X},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Wi,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function vm(e){var n=gm(e);n.next===null&&(n=e.alternate.memoizedState),oo(e,n.next.queue,{},$n())}function qu(){return En(bo)}function Sm(){return an().memoizedState}function ym(){return an().memoizedState}function RS(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=$n();e=ya(a);var o=xa(n,e,a);o!==null&&(Vn(o,n,a),no(o,n,a)),n={cache:xu()},e.payload=n;return}n=n.return}}function CS(e,n,a){var o=$n();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},El(e)?Mm(n,a):(a=uu(e,n,a,o),a!==null&&(Vn(a,e,o),Em(a,n,o)))}function xm(e,n,a){var o=$n();oo(e,n,a,o)}function oo(e,n,a,o){var u={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(El(e))Mm(n,u);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var v=n.lastRenderedState,T=f(v,a);if(u.hasEagerState=!0,u.eagerState=T,Yn(T,v))return il(e,n,u,0),ke===null&&nl(),!1}catch{}if(a=uu(e,n,u,o),a!==null)return Vn(a,e,o),Em(a,n,o),!0}return!1}function Yu(e,n,a,o){if(o={lane:2,revertLane:Af(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},El(e)){if(n)throw Error(s(479))}else n=uu(e,a,o,2),n!==null&&Vn(n,e,2)}function El(e){var n=e.alternate;return e===le||n!==null&&n===le}function Mm(e,n){Ks=_l=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function Em(e,n,a){if((a&4194048)!==0){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,Ai(e,a)}}var lo={readContext:En,use:Sl,useCallback:Je,useContext:Je,useEffect:Je,useImperativeHandle:Je,useLayoutEffect:Je,useInsertionEffect:Je,useMemo:Je,useReducer:Je,useRef:Je,useState:Je,useDebugValue:Je,useDeferredValue:Je,useTransition:Je,useSyncExternalStore:Je,useId:Je,useHostTransitionStatus:Je,useFormState:Je,useActionState:Je,useOptimistic:Je,useMemoCache:Je,useCacheRefresh:Je};lo.useEffectEvent=Je;var Tm={readContext:En,use:Sl,useCallback:function(e,n){return Nn().memoizedState=[e,n===void 0?null:n],e},useContext:En,useEffect:om,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,xl(4194308,4,fm.bind(null,n,e),a)},useLayoutEffect:function(e,n){return xl(4194308,4,e,n)},useInsertionEffect:function(e,n){xl(4,2,e,n)},useMemo:function(e,n){var a=Nn();n=n===void 0?null:n;var o=e();if(us){Kt(!0);try{e()}finally{Kt(!1)}}return a.memoizedState=[o,n],o},useReducer:function(e,n,a){var o=Nn();if(a!==void 0){var u=a(n);if(us){Kt(!0);try{a(n)}finally{Kt(!1)}}}else u=n;return o.memoizedState=o.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},o.queue=e,e=e.dispatch=CS.bind(null,le,e),[o.memoizedState,e]},useRef:function(e){var n=Nn();return e={current:e},n.memoizedState=e},useState:function(e){e=Hu(e);var n=e.queue,a=xm.bind(null,le,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:ku,useDeferredValue:function(e,n){var a=Nn();return Xu(a,e,n)},useTransition:function(){var e=Hu(!1);return e=_m.bind(null,le,e.queue,!0,!1),Nn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var o=le,u=Nn();if(Ee){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),ke===null)throw Error(s(349));(ye&127)!==0||Wp(o,n,a)}u.memoizedState=a;var f={value:a,getSnapshot:n};return u.queue=f,om(Yp.bind(null,o,f,e),[e]),o.flags|=2048,Js(9,{destroy:void 0},qp.bind(null,o,f,a,n),null),a},useId:function(){var e=Nn(),n=ke.identifierPrefix;if(Ee){var a=wi,o=Ci;a=(o&~(1<<32-zt(o)-1)).toString(32)+a,n="_"+n+"R_"+a,a=gl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=xS++,n="_"+n+"r_"+a.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:qu,useFormState:nm,useActionState:nm,useOptimistic:function(e){var n=Nn();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Yu.bind(null,le,!0,a),a.dispatch=n,[e,n]},useMemoCache:Bu,useCacheRefresh:function(){return Nn().memoizedState=RS.bind(null,le)},useEffectEvent:function(e){var n=Nn(),a={impl:e};return n.memoizedState=a,function(){if((De&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},ju={readContext:En,use:Sl,useCallback:dm,useContext:En,useEffect:Vu,useImperativeHandle:hm,useInsertionEffect:cm,useLayoutEffect:um,useMemo:pm,useReducer:yl,useRef:rm,useState:function(){return yl(Wi)},useDebugValue:ku,useDeferredValue:function(e,n){var a=an();return mm(a,ze.memoizedState,e,n)},useTransition:function(){var e=yl(Wi)[0],n=an().memoizedState;return[typeof e=="boolean"?e:ro(e),n]},useSyncExternalStore:Xp,useId:Sm,useHostTransitionStatus:qu,useFormState:im,useActionState:im,useOptimistic:function(e,n){var a=an();return Kp(a,ze,e,n)},useMemoCache:Bu,useCacheRefresh:ym};ju.useEffectEvent=lm;var bm={readContext:En,use:Sl,useCallback:dm,useContext:En,useEffect:Vu,useImperativeHandle:hm,useInsertionEffect:cm,useLayoutEffect:um,useMemo:pm,useReducer:Fu,useRef:rm,useState:function(){return Fu(Wi)},useDebugValue:ku,useDeferredValue:function(e,n){var a=an();return ze===null?Xu(a,e,n):mm(a,ze.memoizedState,e,n)},useTransition:function(){var e=Fu(Wi)[0],n=an().memoizedState;return[typeof e=="boolean"?e:ro(e),n]},useSyncExternalStore:Xp,useId:Sm,useHostTransitionStatus:qu,useFormState:sm,useActionState:sm,useOptimistic:function(e,n){var a=an();return ze!==null?Kp(a,ze,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Bu,useCacheRefresh:ym};bm.useEffectEvent=lm;function Zu(e,n,a,o){n=e.memoizedState,a=a(o,n),a=a==null?n:g({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Ku={enqueueSetState:function(e,n,a){e=e._reactInternals;var o=$n(),u=ya(o);u.payload=n,a!=null&&(u.callback=a),n=xa(e,u,o),n!==null&&(Vn(n,e,o),no(n,e,o))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var o=$n(),u=ya(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=xa(e,u,o),n!==null&&(Vn(n,e,o),no(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=$n(),o=ya(a);o.tag=2,n!=null&&(o.callback=n),n=xa(e,o,a),n!==null&&(Vn(n,e,a),no(n,e,a))}};function Am(e,n,a,o,u,f,v){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,f,v):n.prototype&&n.prototype.isPureReactComponent?!jr(a,o)||!jr(u,f):!0}function Rm(e,n,a,o){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==e&&Ku.enqueueReplaceState(n,n.state,null)}function fs(e,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(e=e.defaultProps){a===n&&(a=g({},a));for(var u in e)a[u]===void 0&&(a[u]=e[u])}return a}function Cm(e){el(e)}function wm(e){console.error(e)}function Dm(e){el(e)}function Tl(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function Um(e,n,a){try{var o=e.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function Qu(e,n,a){return a=ya(a),a.tag=3,a.payload={element:null},a.callback=function(){Tl(e,n)},a}function Lm(e){return e=ya(e),e.tag=3,e}function Nm(e,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var f=o.value;e.payload=function(){return u(f)},e.callback=function(){Um(n,a,o)}}var v=a.stateNode;v!==null&&typeof v.componentDidCatch=="function"&&(e.callback=function(){Um(n,a,o),typeof u!="function"&&(Ra===null?Ra=new Set([this]):Ra.add(this));var T=o.stack;this.componentDidCatch(o.value,{componentStack:T!==null?T:""})})}function wS(e,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&Xs(n,a,u,!0),a=Zn.current,a!==null){switch(a.tag){case 31:case 13:return ui===null?zl():a.alternate===null&&$e===0&&($e=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===fl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),Ef(e,o,u)),!1;case 22:return a.flags|=65536,o===fl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),Ef(e,o,u)),!1}throw Error(s(435,a.tag))}return Ef(e,o,u),zl(),!1}if(Ee)return n=Zn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==_u&&(e=Error(s(422),{cause:o}),Qr(ri(e,a)))):(o!==_u&&(n=Error(s(423),{cause:o}),Qr(ri(n,a))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,o=ri(o,a),u=Qu(e.stateNode,o,u),Ru(e,u),$e!==4&&($e=2)),!1;var f=Error(s(520),{cause:o});if(f=ri(f,a),go===null?go=[f]:go.push(f),$e!==4&&($e=2),n===null)return!0;o=ri(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=u&-u,a.lanes|=e,e=Qu(a.stateNode,o,e),Ru(a,e),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Ra===null||!Ra.has(f))))return a.flags|=65536,u&=-u,a.lanes|=u,u=Lm(u),Nm(u,e,a,o),Ru(a,u),!1}a=a.return}while(a!==null);return!1}var Ju=Error(s(461)),cn=!1;function Tn(e,n,a,o){n.child=e===null?Bp(n,null,a,o):cs(n,e.child,a,o)}function Om(e,n,a,o,u){a=a.render;var f=n.ref;if("ref"in o){var v={};for(var T in o)T!=="ref"&&(v[T]=o[T])}else v=o;return ss(n),o=Nu(e,n,a,v,f,u),T=Ou(),e!==null&&!cn?(Pu(e,n,u),qi(e,n,u)):(Ee&&T&&pu(n),n.flags|=1,Tn(e,n,o,u),n.child)}function Pm(e,n,a,o,u){if(e===null){var f=a.type;return typeof f=="function"&&!fu(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,zm(e,n,f,o,u)):(e=sl(a.type,null,o,n,n.mode,u),e.ref=n.ref,e.return=n,n.child=e)}if(f=e.child,!of(e,u)){var v=f.memoizedProps;if(a=a.compare,a=a!==null?a:jr,a(v,o)&&e.ref===n.ref)return qi(e,n,u)}return n.flags|=1,e=Hi(f,o),e.ref=n.ref,e.return=n,n.child=e}function zm(e,n,a,o,u){if(e!==null){var f=e.memoizedProps;if(jr(f,o)&&e.ref===n.ref)if(cn=!1,n.pendingProps=o=f,of(e,u))(e.flags&131072)!==0&&(cn=!0);else return n.lanes=e.lanes,qi(e,n,u)}return $u(e,n,a,o,u)}function Bm(e,n,a,o){var u=o.children,f=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,e!==null){for(o=n.child=e.child,u=0;o!==null;)u=u|o.lanes|o.childLanes,o=o.sibling;o=u&~f}else o=0,n.child=null;return Im(e,n,f,a,o)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&cl(n,f!==null?f.cachePool:null),f!==null?Hp(n,f):wu(),Gp(n);else return o=n.lanes=536870912,Im(e,n,f!==null?f.baseLanes|a:a,a,o)}else f!==null?(cl(n,f.cachePool),Hp(n,f),Ea(),n.memoizedState=null):(e!==null&&cl(n,null),wu(),Ea());return Tn(e,n,u,a),n.child}function co(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function Im(e,n,a,o,u){var f=Eu();return f=f===null?null:{parent:on._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},e!==null&&cl(n,null),wu(),Gp(n),e!==null&&Xs(e,n,o,!0),n.childLanes=u,null}function bl(e,n){return n=Rl({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function Fm(e,n,a){return cs(n,e.child,null,a),e=bl(n,n.pendingProps),e.flags|=2,Kn(n),n.memoizedState=null,e}function DS(e,n,a){var o=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(Ee){if(o.mode==="hidden")return e=bl(n,o),n.lanes=536870912,co(null,e);if(Uu(n),(e=We)?(e=Q_(e,ci),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:ma!==null?{id:Ci,overflow:wi}:null,retryLane:536870912,hydrationErrors:null},a=Mp(e),a.return=n,n.child=a,Mn=n,We=null)):e=null,e===null)throw ga(n);return n.lanes=536870912,null}return bl(n,o)}var f=e.memoizedState;if(f!==null){var v=f.dehydrated;if(Uu(n),u)if(n.flags&256)n.flags&=-257,n=Fm(e,n,a);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(s(558));else if(cn||Xs(e,n,a,!1),u=(a&e.childLanes)!==0,cn||u){if(o=ke,o!==null&&(v=ws(o,a),v!==0&&v!==f.retryLane))throw f.retryLane=v,es(e,v),Vn(o,e,v),Ju;zl(),n=Fm(e,n,a)}else e=f.treeContext,We=fi(v.nextSibling),Mn=n,Ee=!0,_a=null,ci=!1,e!==null&&bp(n,e),n=bl(n,o),n.flags|=4096;return n}return e=Hi(e.child,{mode:o.mode,children:o.children}),e.ref=n.ref,n.child=e,e.return=n,e}function Al(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function $u(e,n,a,o,u){return ss(n),a=Nu(e,n,a,o,void 0,u),o=Ou(),e!==null&&!cn?(Pu(e,n,u),qi(e,n,u)):(Ee&&o&&pu(n),n.flags|=1,Tn(e,n,a,u),n.child)}function Hm(e,n,a,o,u,f){return ss(n),n.updateQueue=null,a=kp(n,o,a,u),Vp(e),o=Ou(),e!==null&&!cn?(Pu(e,n,f),qi(e,n,f)):(Ee&&o&&pu(n),n.flags|=1,Tn(e,n,a,f),n.child)}function Gm(e,n,a,o,u){if(ss(n),n.stateNode===null){var f=Hs,v=a.contextType;typeof v=="object"&&v!==null&&(f=En(v)),f=new a(o,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=Ku,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=o,f.state=n.memoizedState,f.refs={},bu(n),v=a.contextType,f.context=typeof v=="object"&&v!==null?En(v):Hs,f.state=n.memoizedState,v=a.getDerivedStateFromProps,typeof v=="function"&&(Zu(n,a,v,o),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(v=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),v!==f.state&&Ku.enqueueReplaceState(f,f.state,null),ao(n,o,f,u),io(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(e===null){f=n.stateNode;var T=n.memoizedProps,P=fs(a,T);f.props=P;var J=f.context,ut=a.contextType;v=Hs,typeof ut=="object"&&ut!==null&&(v=En(ut));var _t=a.getDerivedStateFromProps;ut=typeof _t=="function"||typeof f.getSnapshotBeforeUpdate=="function",T=n.pendingProps!==T,ut||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(T||J!==v)&&Rm(n,f,o,v),Sa=!1;var nt=n.memoizedState;f.state=nt,ao(n,o,f,u),io(),J=n.memoizedState,T||nt!==J||Sa?(typeof _t=="function"&&(Zu(n,a,_t,o),J=n.memoizedState),(P=Sa||Am(n,a,P,o,nt,J,v))?(ut||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=J),f.props=o,f.state=J,f.context=v,o=P):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{f=n.stateNode,Au(e,n),v=n.memoizedProps,ut=fs(a,v),f.props=ut,_t=n.pendingProps,nt=f.context,J=a.contextType,P=Hs,typeof J=="object"&&J!==null&&(P=En(J)),T=a.getDerivedStateFromProps,(J=typeof T=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(v!==_t||nt!==P)&&Rm(n,f,o,P),Sa=!1,nt=n.memoizedState,f.state=nt,ao(n,o,f,u),io();var rt=n.memoizedState;v!==_t||nt!==rt||Sa||e!==null&&e.dependencies!==null&&ol(e.dependencies)?(typeof T=="function"&&(Zu(n,a,T,o),rt=n.memoizedState),(ut=Sa||Am(n,a,ut,o,nt,rt,P)||e!==null&&e.dependencies!==null&&ol(e.dependencies))?(J||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(o,rt,P),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(o,rt,P)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||v===e.memoizedProps&&nt===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&nt===e.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=rt),f.props=o,f.state=rt,f.context=P,o=ut):(typeof f.componentDidUpdate!="function"||v===e.memoizedProps&&nt===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&nt===e.memoizedState||(n.flags|=1024),o=!1)}return f=o,Al(e,n),o=(n.flags&128)!==0,f||o?(f=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,e!==null&&o?(n.child=cs(n,e.child,null,u),n.child=cs(n,null,a,u)):Tn(e,n,a,u),n.memoizedState=f.state,e=n.child):e=qi(e,n,u),e}function Vm(e,n,a,o){return is(),n.flags|=256,Tn(e,n,a,o),n.child}var tf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function ef(e){return{baseLanes:e,cachePool:Up()}}function nf(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=Jn),e}function km(e,n,a){var o=n.pendingProps,u=!1,f=(n.flags&128)!==0,v;if((v=f)||(v=e!==null&&e.memoizedState===null?!1:(nn.current&2)!==0),v&&(u=!0,n.flags&=-129),v=(n.flags&32)!==0,n.flags&=-33,e===null){if(Ee){if(u?Ma(n):Ea(),(e=We)?(e=Q_(e,ci),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:ma!==null?{id:Ci,overflow:wi}:null,retryLane:536870912,hydrationErrors:null},a=Mp(e),a.return=n,n.child=a,Mn=n,We=null)):e=null,e===null)throw ga(n);return Ff(e)?n.lanes=32:n.lanes=536870912,null}var T=o.children;return o=o.fallback,u?(Ea(),u=n.mode,T=Rl({mode:"hidden",children:T},u),o=ns(o,u,a,null),T.return=n,o.return=n,T.sibling=o,n.child=T,o=n.child,o.memoizedState=ef(a),o.childLanes=nf(e,v,a),n.memoizedState=tf,co(null,o)):(Ma(n),af(n,T))}var P=e.memoizedState;if(P!==null&&(T=P.dehydrated,T!==null)){if(f)n.flags&256?(Ma(n),n.flags&=-257,n=sf(e,n,a)):n.memoizedState!==null?(Ea(),n.child=e.child,n.flags|=128,n=null):(Ea(),T=o.fallback,u=n.mode,o=Rl({mode:"visible",children:o.children},u),T=ns(T,u,a,null),T.flags|=2,o.return=n,T.return=n,o.sibling=T,n.child=o,cs(n,e.child,null,a),o=n.child,o.memoizedState=ef(a),o.childLanes=nf(e,v,a),n.memoizedState=tf,n=co(null,o));else if(Ma(n),Ff(T)){if(v=T.nextSibling&&T.nextSibling.dataset,v)var J=v.dgst;v=J,o=Error(s(419)),o.stack="",o.digest=v,Qr({value:o,source:null,stack:null}),n=sf(e,n,a)}else if(cn||Xs(e,n,a,!1),v=(a&e.childLanes)!==0,cn||v){if(v=ke,v!==null&&(o=ws(v,a),o!==0&&o!==P.retryLane))throw P.retryLane=o,es(e,o),Vn(v,e,o),Ju;If(T)||zl(),n=sf(e,n,a)}else If(T)?(n.flags|=192,n.child=e.child,n=null):(e=P.treeContext,We=fi(T.nextSibling),Mn=n,Ee=!0,_a=null,ci=!1,e!==null&&bp(n,e),n=af(n,o.children),n.flags|=4096);return n}return u?(Ea(),T=o.fallback,u=n.mode,P=e.child,J=P.sibling,o=Hi(P,{mode:"hidden",children:o.children}),o.subtreeFlags=P.subtreeFlags&65011712,J!==null?T=Hi(J,T):(T=ns(T,u,a,null),T.flags|=2),T.return=n,o.return=n,o.sibling=T,n.child=o,co(null,o),o=n.child,T=e.child.memoizedState,T===null?T=ef(a):(u=T.cachePool,u!==null?(P=on._currentValue,u=u.parent!==P?{parent:P,pool:P}:u):u=Up(),T={baseLanes:T.baseLanes|a,cachePool:u}),o.memoizedState=T,o.childLanes=nf(e,v,a),n.memoizedState=tf,co(e.child,o)):(Ma(n),a=e.child,e=a.sibling,a=Hi(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,e!==null&&(v=n.deletions,v===null?(n.deletions=[e],n.flags|=16):v.push(e)),n.child=a,n.memoizedState=null,a)}function af(e,n){return n=Rl({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Rl(e,n){return e=jn(22,e,null,n),e.lanes=0,e}function sf(e,n,a){return cs(n,e.child,null,a),e=af(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Xm(e,n,a){e.lanes|=n;var o=e.alternate;o!==null&&(o.lanes|=n),Su(e.return,n,a)}function rf(e,n,a,o,u,f){var v=e.memoizedState;v===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u,treeForkCount:f}:(v.isBackwards=n,v.rendering=null,v.renderingStartTime=0,v.last=o,v.tail=a,v.tailMode=u,v.treeForkCount=f)}function Wm(e,n,a){var o=n.pendingProps,u=o.revealOrder,f=o.tail;o=o.children;var v=nn.current,T=(v&2)!==0;if(T?(v=v&1|2,n.flags|=128):v&=1,yt(nn,v),Tn(e,n,o,a),o=Ee?Kr:0,!T&&e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Xm(e,a,n);else if(e.tag===19)Xm(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)e=a.alternate,e!==null&&ml(e)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),rf(n,!1,u,a,f,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(e=u.alternate,e!==null&&ml(e)===null){n.child=u;break}e=u.sibling,u.sibling=a,a=u,u=e}rf(n,!0,a,null,f,o);break;case"together":rf(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function qi(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),Aa|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(Xs(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(s(153));if(n.child!==null){for(e=n.child,a=Hi(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=Hi(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function of(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&ol(e)))}function US(e,n,a){switch(n.tag){case 3:Dt(n,n.stateNode.containerInfo),va(n,on,e.memoizedState.cache),is();break;case 27:case 5:Xt(n);break;case 4:Dt(n,n.stateNode.containerInfo);break;case 10:va(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Uu(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(Ma(n),n.flags|=128,null):(a&n.child.childLanes)!==0?km(e,n,a):(Ma(n),e=qi(e,n,a),e!==null?e.sibling:null);Ma(n);break;case 19:var u=(e.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(Xs(e,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return Wm(e,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),yt(nn,nn.current),o)break;return null;case 22:return n.lanes=0,Bm(e,n,a,n.pendingProps);case 24:va(n,on,e.memoizedState.cache)}return qi(e,n,a)}function qm(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)cn=!0;else{if(!of(e,a)&&(n.flags&128)===0)return cn=!1,US(e,n,a);cn=(e.flags&131072)!==0}else cn=!1,Ee&&(n.flags&1048576)!==0&&Tp(n,Kr,n.index);switch(n.lanes=0,n.tag){case 16:t:{var o=n.pendingProps;if(e=os(n.elementType),n.type=e,typeof e=="function")fu(e)?(o=fs(e,o),n.tag=1,n=Gm(null,n,e,o,a)):(n.tag=0,n=$u(null,n,e,o,a));else{if(e!=null){var u=e.$$typeof;if(u===D){n.tag=11,n=Om(null,n,e,o,a);break t}else if(u===B){n.tag=14,n=Pm(null,n,e,o,a);break t}}throw n=ft(e)||e,Error(s(306,n,""))}}return n;case 0:return $u(e,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=fs(o,n.pendingProps),Gm(e,n,o,u,a);case 3:t:{if(Dt(n,n.stateNode.containerInfo),e===null)throw Error(s(387));o=n.pendingProps;var f=n.memoizedState;u=f.element,Au(e,n),ao(n,o,null,a);var v=n.memoizedState;if(o=v.cache,va(n,on,o),o!==f.cache&&yu(n,[on],a,!0),io(),o=v.element,f.isDehydrated)if(f={element:o,isDehydrated:!1,cache:v.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=Vm(e,n,o,a);break t}else if(o!==u){u=ri(Error(s(424)),n),Qr(u),n=Vm(e,n,o,a);break t}else for(e=n.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,We=fi(e.firstChild),Mn=n,Ee=!0,_a=null,ci=!0,a=Bp(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(is(),o===u){n=qi(e,n,a);break t}Tn(e,n,o,a)}n=n.child}return n;case 26:return Al(e,n),e===null?(a=ig(n.type,null,n.pendingProps,null))?n.memoizedState=a:Ee||(a=n.type,e=n.pendingProps,o=kl(tt.current).createElement(a),o[rn]=n,o[yn]=e,bn(o,a,e),vt(o),n.stateNode=o):n.memoizedState=ig(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return Xt(n),e===null&&Ee&&(o=n.stateNode=tg(n.type,n.pendingProps,tt.current),Mn=n,ci=!0,u=We,Ua(n.type)?(Hf=u,We=fi(o.firstChild)):We=u),Tn(e,n,n.pendingProps.children,a),Al(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Ee&&((u=o=We)&&(o=oy(o,n.type,n.pendingProps,ci),o!==null?(n.stateNode=o,Mn=n,We=fi(o.firstChild),ci=!1,u=!0):u=!1),u||ga(n)),Xt(n),u=n.type,f=n.pendingProps,v=e!==null?e.memoizedProps:null,o=f.children,Pf(u,f)?o=null:v!==null&&Pf(u,v)&&(n.flags|=32),n.memoizedState!==null&&(u=Nu(e,n,MS,null,null,a),bo._currentValue=u),Al(e,n),Tn(e,n,o,a),n.child;case 6:return e===null&&Ee&&((e=a=We)&&(a=ly(a,n.pendingProps,ci),a!==null?(n.stateNode=a,Mn=n,We=null,e=!0):e=!1),e||ga(n)),null;case 13:return km(e,n,a);case 4:return Dt(n,n.stateNode.containerInfo),o=n.pendingProps,e===null?n.child=cs(n,null,o,a):Tn(e,n,o,a),n.child;case 11:return Om(e,n,n.type,n.pendingProps,a);case 7:return Tn(e,n,n.pendingProps,a),n.child;case 8:return Tn(e,n,n.pendingProps.children,a),n.child;case 12:return Tn(e,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,va(n,n.type,o.value),Tn(e,n,o.children,a),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,ss(n),u=En(u),o=o(u),n.flags|=1,Tn(e,n,o,a),n.child;case 14:return Pm(e,n,n.type,n.pendingProps,a);case 15:return zm(e,n,n.type,n.pendingProps,a);case 19:return Wm(e,n,a);case 31:return DS(e,n,a);case 22:return Bm(e,n,a,n.pendingProps);case 24:return ss(n),o=En(on),e===null?(u=Eu(),u===null&&(u=ke,f=xu(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=a),u=f),n.memoizedState={parent:o,cache:u},bu(n),va(n,on,u)):((e.lanes&a)!==0&&(Au(e,n),ao(n,null,null,a),io()),u=e.memoizedState,f=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),va(n,on,o)):(o=f.cache,va(n,on,o),o!==u.cache&&yu(n,[on],a,!0))),Tn(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function Yi(e){e.flags|=4}function lf(e,n,a,o,u){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(u&335544128)===u)if(e.stateNode.complete)e.flags|=8192;else if(S_())e.flags|=8192;else throw ls=fl,Tu}else e.flags&=-16777217}function Ym(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!lg(n))if(S_())e.flags|=8192;else throw ls=fl,Tu}function Cl(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Ne():536870912,e.lanes|=n,nr|=n)}function uo(e,n){if(!Ee)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function qe(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,o=0;if(n)for(var u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=o,e.childLanes=a,n}function LS(e,n,a){var o=n.pendingProps;switch(mu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return qe(n),null;case 1:return qe(n),null;case 3:return a=n.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),ki(on),It(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(ks(n)?Yi(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,gu())),qe(n),null;case 26:var u=n.type,f=n.memoizedState;return e===null?(Yi(n),f!==null?(qe(n),Ym(n,f)):(qe(n),lf(n,u,null,o,a))):f?f!==e.memoizedState?(Yi(n),qe(n),Ym(n,f)):(qe(n),n.flags&=-16777217):(e=e.memoizedProps,e!==o&&Yi(n),qe(n),lf(n,u,e,o,a)),null;case 27:if(de(n),a=tt.current,u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&Yi(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return qe(n),null}e=At.current,ks(n)?Ap(n):(e=tg(u,o,a),n.stateNode=e,Yi(n))}return qe(n),null;case 5:if(de(n),u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&Yi(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return qe(n),null}if(f=At.current,ks(n))Ap(n);else{var v=kl(tt.current);switch(f){case 1:f=v.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:f=v.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":f=v.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":f=v.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":f=v.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof o.is=="string"?v.createElement("select",{is:o.is}):v.createElement("select"),o.multiple?f.multiple=!0:o.size&&(f.size=o.size);break;default:f=typeof o.is=="string"?v.createElement(u,{is:o.is}):v.createElement(u)}}f[rn]=n,f[yn]=o;t:for(v=n.child;v!==null;){if(v.tag===5||v.tag===6)f.appendChild(v.stateNode);else if(v.tag!==4&&v.tag!==27&&v.child!==null){v.child.return=v,v=v.child;continue}if(v===n)break t;for(;v.sibling===null;){if(v.return===null||v.return===n)break t;v=v.return}v.sibling.return=v.return,v=v.sibling}n.stateNode=f;t:switch(bn(f,u,o),u){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break t;case"img":o=!0;break t;default:o=!1}o&&Yi(n)}}return qe(n),lf(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,a),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==o&&Yi(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(s(166));if(e=tt.current,ks(n)){if(e=n.stateNode,a=n.memoizedProps,o=null,u=Mn,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}e[rn]=n,e=!!(e.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||k_(e.nodeValue,a)),e||ga(n,!0)}else e=kl(e).createTextNode(o),e[rn]=n,n.stateNode=e}return qe(n),null;case 31:if(a=n.memoizedState,e===null||e.memoizedState!==null){if(o=ks(n),a!==null){if(e===null){if(!o)throw Error(s(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(557));e[rn]=n}else is(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;qe(n),e=!1}else a=gu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return n.flags&256?(Kn(n),n):(Kn(n),null);if((n.flags&128)!==0)throw Error(s(558))}return qe(n),null;case 13:if(o=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=ks(n),o!==null&&o.dehydrated!==null){if(e===null){if(!u)throw Error(s(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[rn]=n}else is(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;qe(n),u=!1}else u=gu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(Kn(n),n):(Kn(n),null)}return Kn(n),(n.flags&128)!==0?(n.lanes=a,n):(a=o!==null,e=e!==null&&e.memoizedState!==null,a&&(o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool),f=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(f=o.memoizedState.cachePool.pool),f!==u&&(o.flags|=2048)),a!==e&&a&&(n.child.flags|=8192),Cl(n,n.updateQueue),qe(n),null);case 4:return It(),e===null&&Df(n.stateNode.containerInfo),qe(n),null;case 10:return ki(n.type),qe(n),null;case 19:if(et(nn),o=n.memoizedState,o===null)return qe(n),null;if(u=(n.flags&128)!==0,f=o.rendering,f===null)if(u)uo(o,!1);else{if($e!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(f=ml(e),f!==null){for(n.flags|=128,uo(o,!1),e=f.updateQueue,n.updateQueue=e,Cl(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)xp(a,e),a=a.sibling;return yt(nn,nn.current&1|2),Ee&&Gi(n,o.treeForkCount),n.child}e=e.sibling}o.tail!==null&&E()>Nl&&(n.flags|=128,u=!0,uo(o,!1),n.lanes=4194304)}else{if(!u)if(e=ml(f),e!==null){if(n.flags|=128,u=!0,e=e.updateQueue,n.updateQueue=e,Cl(n,e),uo(o,!0),o.tail===null&&o.tailMode==="hidden"&&!f.alternate&&!Ee)return qe(n),null}else 2*E()-o.renderingStartTime>Nl&&a!==536870912&&(n.flags|=128,u=!0,uo(o,!1),n.lanes=4194304);o.isBackwards?(f.sibling=n.child,n.child=f):(e=o.last,e!==null?e.sibling=f:n.child=f,o.last=f)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=E(),e.sibling=null,a=nn.current,yt(nn,u?a&1|2:a&1),Ee&&Gi(n,o.treeForkCount),e):(qe(n),null);case 22:case 23:return Kn(n),Du(),o=n.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(qe(n),n.subtreeFlags&6&&(n.flags|=8192)):qe(n),a=n.updateQueue,a!==null&&Cl(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),e!==null&&et(rs),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),ki(on),qe(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function NS(e,n){switch(mu(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return ki(on),It(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return de(n),null;case 31:if(n.memoizedState!==null){if(Kn(n),n.alternate===null)throw Error(s(340));is()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(Kn(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(s(340));is()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return et(nn),null;case 4:return It(),null;case 10:return ki(n.type),null;case 22:case 23:return Kn(n),Du(),e!==null&&et(rs),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return ki(on),null;case 25:return null;default:return null}}function jm(e,n){switch(mu(n),n.tag){case 3:ki(on),It();break;case 26:case 27:case 5:de(n);break;case 4:It();break;case 31:n.memoizedState!==null&&Kn(n);break;case 13:Kn(n);break;case 19:et(nn);break;case 10:ki(n.type);break;case 22:case 23:Kn(n),Du(),e!==null&&et(rs);break;case 24:ki(on)}}function fo(e,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&e)===e){o=void 0;var f=a.create,v=a.inst;o=f(),v.destroy=o}a=a.next}while(a!==u)}}catch(T){Pe(n,n.return,T)}}function Ta(e,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var f=u.next;o=f;do{if((o.tag&e)===e){var v=o.inst,T=v.destroy;if(T!==void 0){v.destroy=void 0,u=n;var P=a,J=T;try{J()}catch(ut){Pe(u,P,ut)}}}o=o.next}while(o!==f)}}catch(ut){Pe(n,n.return,ut)}}function Zm(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{Fp(n,a)}catch(o){Pe(e,e.return,o)}}}function Km(e,n,a){a.props=fs(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(o){Pe(e,n,o)}}function ho(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof a=="function"?e.refCleanup=a(o):a.current=o}}catch(u){Pe(e,n,u)}}function Di(e,n){var a=e.ref,o=e.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){Pe(e,n,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Pe(e,n,u)}else a.current=null}function Qm(e){var n=e.type,a=e.memoizedProps,o=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break t;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){Pe(e,e.return,u)}}function cf(e,n,a){try{var o=e.stateNode;ey(o,e.type,a,n),o[yn]=n}catch(u){Pe(e,e.return,u)}}function Jm(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Ua(e.type)||e.tag===4}function uf(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||Jm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Ua(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ff(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Ii));else if(o!==4&&(o===27&&Ua(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(ff(e,n,a),e=e.sibling;e!==null;)ff(e,n,a),e=e.sibling}function wl(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(o!==4&&(o===27&&Ua(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(wl(e,n,a),e=e.sibling;e!==null;)wl(e,n,a),e=e.sibling}function $m(e){var n=e.stateNode,a=e.memoizedProps;try{for(var o=e.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);bn(n,o,a),n[rn]=e,n[yn]=a}catch(f){Pe(e,e.return,f)}}var ji=!1,un=!1,hf=!1,t_=typeof WeakSet=="function"?WeakSet:Set,vn=null;function OS(e,n){if(e=e.containerInfo,Nf=Kl,e=hp(e),au(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,f=o.focusNode;o=o.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var v=0,T=-1,P=-1,J=0,ut=0,_t=e,nt=null;e:for(;;){for(var rt;_t!==a||u!==0&&_t.nodeType!==3||(T=v+u),_t!==f||o!==0&&_t.nodeType!==3||(P=v+o),_t.nodeType===3&&(v+=_t.nodeValue.length),(rt=_t.firstChild)!==null;)nt=_t,_t=rt;for(;;){if(_t===e)break e;if(nt===a&&++J===u&&(T=v),nt===f&&++ut===o&&(P=v),(rt=_t.nextSibling)!==null)break;_t=nt,nt=_t.parentNode}_t=rt}a=T===-1||P===-1?null:{start:T,end:P}}else a=null}a=a||{start:0,end:0}}else a=null;for(Of={focusedElem:e,selectionRange:a},Kl=!1,vn=n;vn!==null;)if(n=vn,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,vn=e;else for(;vn!==null;){switch(n=vn,f=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)u=e[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&f!==null){e=void 0,a=n,u=f.memoizedProps,f=f.memoizedState,o=a.stateNode;try{var Ht=fs(a.type,u);e=o.getSnapshotBeforeUpdate(Ht,f),o.__reactInternalSnapshotBeforeUpdate=e}catch(ee){Pe(a,a.return,ee)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)Bf(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Bf(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=n.sibling,e!==null){e.return=n.return,vn=e;break}vn=n.return}}function e_(e,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:Ki(e,a),o&4&&fo(5,a);break;case 1:if(Ki(e,a),o&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(v){Pe(a,a.return,v)}else{var u=fs(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(u,n,e.__reactInternalSnapshotBeforeUpdate)}catch(v){Pe(a,a.return,v)}}o&64&&Zm(a),o&512&&ho(a,a.return);break;case 3:if(Ki(e,a),o&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Fp(e,n)}catch(v){Pe(a,a.return,v)}}break;case 27:n===null&&o&4&&$m(a);case 26:case 5:Ki(e,a),n===null&&o&4&&Qm(a),o&512&&ho(a,a.return);break;case 12:Ki(e,a);break;case 31:Ki(e,a),o&4&&a_(e,a);break;case 13:Ki(e,a),o&4&&s_(e,a),o&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=kS.bind(null,a),cy(e,a))));break;case 22:if(o=a.memoizedState!==null||ji,!o){n=n!==null&&n.memoizedState!==null||un,u=ji;var f=un;ji=o,(un=n)&&!f?Qi(e,a,(a.subtreeFlags&8772)!==0):Ki(e,a),ji=u,un=f}break;case 30:break;default:Ki(e,a)}}function n_(e){var n=e.alternate;n!==null&&(e.alternate=null,n_(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&A(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ye=null,In=!1;function Zi(e,n,a){for(a=a.child;a!==null;)i_(e,n,a),a=a.sibling}function i_(e,n,a){if(Ct&&typeof Ct.onCommitFiberUnmount=="function")try{Ct.onCommitFiberUnmount(Tt,a)}catch{}switch(a.tag){case 26:un||Di(a,n),Zi(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:un||Di(a,n);var o=Ye,u=In;Ua(a.type)&&(Ye=a.stateNode,In=!1),Zi(e,n,a),Mo(a.stateNode),Ye=o,In=u;break;case 5:un||Di(a,n);case 6:if(o=Ye,u=In,Ye=null,Zi(e,n,a),Ye=o,In=u,Ye!==null)if(In)try{(Ye.nodeType===9?Ye.body:Ye.nodeName==="HTML"?Ye.ownerDocument.body:Ye).removeChild(a.stateNode)}catch(f){Pe(a,n,f)}else try{Ye.removeChild(a.stateNode)}catch(f){Pe(a,n,f)}break;case 18:Ye!==null&&(In?(e=Ye,Z_(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),ur(e)):Z_(Ye,a.stateNode));break;case 4:o=Ye,u=In,Ye=a.stateNode.containerInfo,In=!0,Zi(e,n,a),Ye=o,In=u;break;case 0:case 11:case 14:case 15:Ta(2,a,n),un||Ta(4,a,n),Zi(e,n,a);break;case 1:un||(Di(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&Km(a,n,o)),Zi(e,n,a);break;case 21:Zi(e,n,a);break;case 22:un=(o=un)||a.memoizedState!==null,Zi(e,n,a),un=o;break;default:Zi(e,n,a)}}function a_(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{ur(e)}catch(a){Pe(n,n.return,a)}}}function s_(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{ur(e)}catch(a){Pe(n,n.return,a)}}function PS(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new t_),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new t_),n;default:throw Error(s(435,e.tag))}}function Dl(e,n){var a=PS(e);n.forEach(function(o){if(!a.has(o)){a.add(o);var u=XS.bind(null,e,o);o.then(u,u)}})}function Fn(e,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],f=e,v=n,T=v;t:for(;T!==null;){switch(T.tag){case 27:if(Ua(T.type)){Ye=T.stateNode,In=!1;break t}break;case 5:Ye=T.stateNode,In=!1;break t;case 3:case 4:Ye=T.stateNode.containerInfo,In=!0;break t}T=T.return}if(Ye===null)throw Error(s(160));i_(f,v,u),Ye=null,In=!1,f=u.alternate,f!==null&&(f.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)r_(n,e),n=n.sibling}var gi=null;function r_(e,n){var a=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Fn(n,e),Hn(e),o&4&&(Ta(3,e,e.return),fo(3,e),Ta(5,e,e.return));break;case 1:Fn(n,e),Hn(e),o&512&&(un||a===null||Di(a,a.return)),o&64&&ji&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=gi;if(Fn(n,e),Hn(e),o&512&&(un||a===null||Di(a,a.return)),o&4){var f=a!==null?a.memoizedState:null;if(o=e.memoizedState,a===null)if(o===null)if(e.stateNode===null){t:{o=e.type,a=e.memoizedProps,u=u.ownerDocument||u;e:switch(o){case"title":f=u.getElementsByTagName("title")[0],(!f||f[Ka]||f[rn]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=u.createElement(o),u.head.insertBefore(f,u.querySelector("head > title"))),bn(f,o,a),f[rn]=e,vt(f),o=f;break t;case"link":var v=rg("link","href",u).get(o+(a.href||""));if(v){for(var T=0;T<v.length;T++)if(f=v[T],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){v.splice(T,1);break e}}f=u.createElement(o),bn(f,o,a),u.head.appendChild(f);break;case"meta":if(v=rg("meta","content",u).get(o+(a.content||""))){for(T=0;T<v.length;T++)if(f=v[T],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){v.splice(T,1);break e}}f=u.createElement(o),bn(f,o,a),u.head.appendChild(f);break;default:throw Error(s(468,o))}f[rn]=e,vt(f),o=f}e.stateNode=o}else og(u,e.type,e.stateNode);else e.stateNode=sg(u,o,e.memoizedProps);else f!==o?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,o===null?og(u,e.type,e.stateNode):sg(u,o,e.memoizedProps)):o===null&&e.stateNode!==null&&cf(e,e.memoizedProps,a.memoizedProps)}break;case 27:Fn(n,e),Hn(e),o&512&&(un||a===null||Di(a,a.return)),a!==null&&o&4&&cf(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Fn(n,e),Hn(e),o&512&&(un||a===null||Di(a,a.return)),e.flags&32){u=e.stateNode;try{Ns(u,"")}catch(Ht){Pe(e,e.return,Ht)}}o&4&&e.stateNode!=null&&(u=e.memoizedProps,cf(e,u,a!==null?a.memoizedProps:u)),o&1024&&(hf=!0);break;case 6:if(Fn(n,e),Hn(e),o&4){if(e.stateNode===null)throw Error(s(162));o=e.memoizedProps,a=e.stateNode;try{a.nodeValue=o}catch(Ht){Pe(e,e.return,Ht)}}break;case 3:if(ql=null,u=gi,gi=Xl(n.containerInfo),Fn(n,e),gi=u,Hn(e),o&4&&a!==null&&a.memoizedState.isDehydrated)try{ur(n.containerInfo)}catch(Ht){Pe(e,e.return,Ht)}hf&&(hf=!1,o_(e));break;case 4:o=gi,gi=Xl(e.stateNode.containerInfo),Fn(n,e),Hn(e),gi=o;break;case 12:Fn(n,e),Hn(e);break;case 31:Fn(n,e),Hn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Dl(e,o)));break;case 13:Fn(n,e),Hn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Ll=E()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Dl(e,o)));break;case 22:u=e.memoizedState!==null;var P=a!==null&&a.memoizedState!==null,J=ji,ut=un;if(ji=J||u,un=ut||P,Fn(n,e),un=ut,ji=J,Hn(e),o&8192)t:for(n=e.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||P||ji||un||hs(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){P=a=n;try{if(f=P.stateNode,u)v=f.style,typeof v.setProperty=="function"?v.setProperty("display","none","important"):v.display="none";else{T=P.stateNode;var _t=P.memoizedProps.style,nt=_t!=null&&_t.hasOwnProperty("display")?_t.display:null;T.style.display=nt==null||typeof nt=="boolean"?"":(""+nt).trim()}}catch(Ht){Pe(P,P.return,Ht)}}}else if(n.tag===6){if(a===null){P=n;try{P.stateNode.nodeValue=u?"":P.memoizedProps}catch(Ht){Pe(P,P.return,Ht)}}}else if(n.tag===18){if(a===null){P=n;try{var rt=P.stateNode;u?K_(rt,!0):K_(P.stateNode,!1)}catch(Ht){Pe(P,P.return,Ht)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=e.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,Dl(e,a))));break;case 19:Fn(n,e),Hn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Dl(e,o)));break;case 30:break;case 21:break;default:Fn(n,e),Hn(e)}}function Hn(e){var n=e.flags;if(n&2){try{for(var a,o=e.return;o!==null;){if(Jm(o)){a=o;break}o=o.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var u=a.stateNode,f=uf(e);wl(e,f,u);break;case 5:var v=a.stateNode;a.flags&32&&(Ns(v,""),a.flags&=-33);var T=uf(e);wl(e,T,v);break;case 3:case 4:var P=a.stateNode.containerInfo,J=uf(e);ff(e,J,P);break;default:throw Error(s(161))}}catch(ut){Pe(e,e.return,ut)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function o_(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;o_(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function Ki(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)e_(e,n.alternate,n),n=n.sibling}function hs(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:Ta(4,n,n.return),hs(n);break;case 1:Di(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&Km(n,n.return,a),hs(n);break;case 27:Mo(n.stateNode);case 26:case 5:Di(n,n.return),hs(n);break;case 22:n.memoizedState===null&&hs(n);break;case 30:hs(n);break;default:hs(n)}e=e.sibling}}function Qi(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=e,f=n,v=f.flags;switch(f.tag){case 0:case 11:case 15:Qi(u,f,a),fo(4,f);break;case 1:if(Qi(u,f,a),o=f,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(J){Pe(o,o.return,J)}if(o=f,u=o.updateQueue,u!==null){var T=o.stateNode;try{var P=u.shared.hiddenCallbacks;if(P!==null)for(u.shared.hiddenCallbacks=null,u=0;u<P.length;u++)Ip(P[u],T)}catch(J){Pe(o,o.return,J)}}a&&v&64&&Zm(f),ho(f,f.return);break;case 27:$m(f);case 26:case 5:Qi(u,f,a),a&&o===null&&v&4&&Qm(f),ho(f,f.return);break;case 12:Qi(u,f,a);break;case 31:Qi(u,f,a),a&&v&4&&a_(u,f);break;case 13:Qi(u,f,a),a&&v&4&&s_(u,f);break;case 22:f.memoizedState===null&&Qi(u,f,a),ho(f,f.return);break;case 30:break;default:Qi(u,f,a)}n=n.sibling}}function df(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Jr(a))}function pf(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Jr(e))}function vi(e,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)l_(e,n,a,o),n=n.sibling}function l_(e,n,a,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:vi(e,n,a,o),u&2048&&fo(9,n);break;case 1:vi(e,n,a,o);break;case 3:vi(e,n,a,o),u&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Jr(e)));break;case 12:if(u&2048){vi(e,n,a,o),e=n.stateNode;try{var f=n.memoizedProps,v=f.id,T=f.onPostCommit;typeof T=="function"&&T(v,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(P){Pe(n,n.return,P)}}else vi(e,n,a,o);break;case 31:vi(e,n,a,o);break;case 13:vi(e,n,a,o);break;case 23:break;case 22:f=n.stateNode,v=n.alternate,n.memoizedState!==null?f._visibility&2?vi(e,n,a,o):po(e,n):f._visibility&2?vi(e,n,a,o):(f._visibility|=2,$s(e,n,a,o,(n.subtreeFlags&10256)!==0||!1)),u&2048&&df(v,n);break;case 24:vi(e,n,a,o),u&2048&&pf(n.alternate,n);break;default:vi(e,n,a,o)}}function $s(e,n,a,o,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=e,v=n,T=a,P=o,J=v.flags;switch(v.tag){case 0:case 11:case 15:$s(f,v,T,P,u),fo(8,v);break;case 23:break;case 22:var ut=v.stateNode;v.memoizedState!==null?ut._visibility&2?$s(f,v,T,P,u):po(f,v):(ut._visibility|=2,$s(f,v,T,P,u)),u&&J&2048&&df(v.alternate,v);break;case 24:$s(f,v,T,P,u),u&&J&2048&&pf(v.alternate,v);break;default:$s(f,v,T,P,u)}n=n.sibling}}function po(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,o=n,u=o.flags;switch(o.tag){case 22:po(a,o),u&2048&&df(o.alternate,o);break;case 24:po(a,o),u&2048&&pf(o.alternate,o);break;default:po(a,o)}n=n.sibling}}var mo=8192;function tr(e,n,a){if(e.subtreeFlags&mo)for(e=e.child;e!==null;)c_(e,n,a),e=e.sibling}function c_(e,n,a){switch(e.tag){case 26:tr(e,n,a),e.flags&mo&&e.memoizedState!==null&&xy(a,gi,e.memoizedState,e.memoizedProps);break;case 5:tr(e,n,a);break;case 3:case 4:var o=gi;gi=Xl(e.stateNode.containerInfo),tr(e,n,a),gi=o;break;case 22:e.memoizedState===null&&(o=e.alternate,o!==null&&o.memoizedState!==null?(o=mo,mo=16777216,tr(e,n,a),mo=o):tr(e,n,a));break;default:tr(e,n,a)}}function u_(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function _o(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];vn=o,h_(o,e)}u_(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)f_(e),e=e.sibling}function f_(e){switch(e.tag){case 0:case 11:case 15:_o(e),e.flags&2048&&Ta(9,e,e.return);break;case 3:_o(e);break;case 12:_o(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Ul(e)):_o(e);break;default:_o(e)}}function Ul(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];vn=o,h_(o,e)}u_(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:Ta(8,n,n.return),Ul(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Ul(n));break;default:Ul(n)}e=e.sibling}}function h_(e,n){for(;vn!==null;){var a=vn;switch(a.tag){case 0:case 11:case 15:Ta(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:Jr(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,vn=o;else t:for(a=e;vn!==null;){o=vn;var u=o.sibling,f=o.return;if(n_(o),o===a){vn=null;break t}if(u!==null){u.return=f,vn=u;break t}vn=f}}}var zS={getCacheForType:function(e){var n=En(on),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a},cacheSignal:function(){return En(on).controller.signal}},BS=typeof WeakMap=="function"?WeakMap:Map,De=0,ke=null,_e=null,ye=0,Oe=0,Qn=null,ba=!1,er=!1,mf=!1,Ji=0,$e=0,Aa=0,ds=0,_f=0,Jn=0,nr=0,go=null,Gn=null,gf=!1,Ll=0,d_=0,Nl=1/0,Ol=null,Ra=null,dn=0,Ca=null,ir=null,$i=0,vf=0,Sf=null,p_=null,vo=0,yf=null;function $n(){return(De&2)!==0&&ye!==0?ye&-ye:N.T!==null?Af():Za()}function m_(){if(Jn===0)if((ye&536870912)===0||Ee){var e=wt;wt<<=1,(wt&3932160)===0&&(wt=262144),Jn=e}else Jn=536870912;return e=Zn.current,e!==null&&(e.flags|=32),Jn}function Vn(e,n,a){(e===ke&&(Oe===2||Oe===9)||e.cancelPendingCommit!==null)&&(ar(e,0),wa(e,ye,Jn,!1)),Un(e,a),((De&2)===0||e!==ke)&&(e===ke&&((De&2)===0&&(ds|=a),$e===4&&wa(e,ye,Jn,!1)),Ui(e))}function __(e,n,a){if((De&6)!==0)throw Error(s(327));var o=!a&&(n&127)===0&&(n&e.expiredLanes)===0||Ft(e,n),u=o?HS(e,n):Mf(e,n,!0),f=o;do{if(u===0){er&&!o&&wa(e,n,0,!1);break}else{if(a=e.current.alternate,f&&!IS(a)){u=Mf(e,n,!1),f=!1;continue}if(u===2){if(f=n,e.errorRecoveryDisabledLanes&f)var v=0;else v=e.pendingLanes&-536870913,v=v!==0?v:v&536870912?536870912:0;if(v!==0){n=v;t:{var T=e;u=go;var P=T.current.memoizedState.isDehydrated;if(P&&(ar(T,v).flags|=256),v=Mf(T,v,!1),v!==2){if(mf&&!P){T.errorRecoveryDisabledLanes|=f,ds|=f,u=4;break t}f=Gn,Gn=u,f!==null&&(Gn===null?Gn=f:Gn.push.apply(Gn,f))}u=v}if(f=!1,u!==2)continue}}if(u===1){ar(e,0),wa(e,n,0,!0);break}t:{switch(o=e,f=u,f){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:wa(o,n,Jn,!ba);break t;case 2:Gn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(u=Ll+300-E(),10<u)){if(wa(o,n,Jn,!ba),gt(o,0,!0)!==0)break t;$i=n,o.timeoutHandle=Y_(g_.bind(null,o,a,Gn,Ol,gf,n,Jn,ds,nr,ba,f,"Throttled",-0,0),u);break t}g_(o,a,Gn,Ol,gf,n,Jn,ds,nr,ba,f,null,-0,0)}}break}while(!0);Ui(e)}function g_(e,n,a,o,u,f,v,T,P,J,ut,_t,nt,rt){if(e.timeoutHandle=-1,_t=n.subtreeFlags,_t&8192||(_t&16785408)===16785408){_t={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Ii},c_(n,f,_t);var Ht=(f&62914560)===f?Ll-E():(f&4194048)===f?d_-E():0;if(Ht=My(_t,Ht),Ht!==null){$i=f,e.cancelPendingCommit=Ht(b_.bind(null,e,n,f,a,o,u,v,T,P,ut,_t,null,nt,rt)),wa(e,f,v,!J);return}}b_(e,n,f,a,o,u,v,T,P)}function IS(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],f=u.getSnapshot;u=u.value;try{if(!Yn(f(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function wa(e,n,a,o){n&=~_f,n&=~ds,e.suspendedLanes|=n,e.pingedLanes&=~n,o&&(e.warmLanes|=n),o=e.expirationTimes;for(var u=n;0<u;){var f=31-zt(u),v=1<<f;o[f]=-1,u&=~v}a!==0&&Ir(e,a,n)}function Pl(){return(De&6)===0?(So(0),!1):!0}function xf(){if(_e!==null){if(Oe===0)var e=_e.return;else e=_e,Vi=as=null,zu(e),js=null,to=0,e=_e;for(;e!==null;)jm(e.alternate,e),e=e.return;_e=null}}function ar(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,ay(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),$i=0,xf(),ke=e,_e=a=Hi(e.current,null),ye=n,Oe=0,Qn=null,ba=!1,er=Ft(e,n),mf=!1,nr=Jn=_f=ds=Aa=$e=0,Gn=go=null,gf=!1,(n&8)!==0&&(n|=n&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=n;0<o;){var u=31-zt(o),f=1<<u;n|=e[u],o&=~f}return Ji=n,nl(),a}function v_(e,n){le=null,N.H=lo,n===Ys||n===ul?(n=Op(),Oe=3):n===Tu?(n=Op(),Oe=4):Oe=n===Ju?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Qn=n,_e===null&&($e=1,Tl(e,ri(n,e.current)))}function S_(){var e=Zn.current;return e===null?!0:(ye&4194048)===ye?ui===null:(ye&62914560)===ye||(ye&536870912)!==0?e===ui:!1}function y_(){var e=N.H;return N.H=lo,e===null?lo:e}function x_(){var e=N.A;return N.A=zS,e}function zl(){$e=4,ba||(ye&4194048)!==ye&&Zn.current!==null||(er=!0),(Aa&134217727)===0&&(ds&134217727)===0||ke===null||wa(ke,ye,Jn,!1)}function Mf(e,n,a){var o=De;De|=2;var u=y_(),f=x_();(ke!==e||ye!==n)&&(Ol=null,ar(e,n)),n=!1;var v=$e;t:do try{if(Oe!==0&&_e!==null){var T=_e,P=Qn;switch(Oe){case 8:xf(),v=6;break t;case 3:case 2:case 9:case 6:Zn.current===null&&(n=!0);var J=Oe;if(Oe=0,Qn=null,sr(e,T,P,J),a&&er){v=0;break t}break;default:J=Oe,Oe=0,Qn=null,sr(e,T,P,J)}}FS(),v=$e;break}catch(ut){v_(e,ut)}while(!0);return n&&e.shellSuspendCounter++,Vi=as=null,De=o,N.H=u,N.A=f,_e===null&&(ke=null,ye=0,nl()),v}function FS(){for(;_e!==null;)M_(_e)}function HS(e,n){var a=De;De|=2;var o=y_(),u=x_();ke!==e||ye!==n?(Ol=null,Nl=E()+500,ar(e,n)):er=Ft(e,n);t:do try{if(Oe!==0&&_e!==null){n=_e;var f=Qn;e:switch(Oe){case 1:Oe=0,Qn=null,sr(e,n,f,1);break;case 2:case 9:if(Lp(f)){Oe=0,Qn=null,E_(n);break}n=function(){Oe!==2&&Oe!==9||ke!==e||(Oe=7),Ui(e)},f.then(n,n);break t;case 3:Oe=7;break t;case 4:Oe=5;break t;case 7:Lp(f)?(Oe=0,Qn=null,E_(n)):(Oe=0,Qn=null,sr(e,n,f,7));break;case 5:var v=null;switch(_e.tag){case 26:v=_e.memoizedState;case 5:case 27:var T=_e;if(v?lg(v):T.stateNode.complete){Oe=0,Qn=null;var P=T.sibling;if(P!==null)_e=P;else{var J=T.return;J!==null?(_e=J,Bl(J)):_e=null}break e}}Oe=0,Qn=null,sr(e,n,f,5);break;case 6:Oe=0,Qn=null,sr(e,n,f,6);break;case 8:xf(),$e=6;break t;default:throw Error(s(462))}}GS();break}catch(ut){v_(e,ut)}while(!0);return Vi=as=null,N.H=o,N.A=u,De=a,_e!==null?0:(ke=null,ye=0,nl(),$e)}function GS(){for(;_e!==null&&!Ze();)M_(_e)}function M_(e){var n=qm(e.alternate,e,Ji);e.memoizedProps=e.pendingProps,n===null?Bl(e):_e=n}function E_(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=Hm(a,n,n.pendingProps,n.type,void 0,ye);break;case 11:n=Hm(a,n,n.pendingProps,n.type.render,n.ref,ye);break;case 5:zu(n);default:jm(a,n),n=_e=xp(n,Ji),n=qm(a,n,Ji)}e.memoizedProps=e.pendingProps,n===null?Bl(e):_e=n}function sr(e,n,a,o){Vi=as=null,zu(n),js=null,to=0;var u=n.return;try{if(wS(e,u,n,a,ye)){$e=1,Tl(e,ri(a,e.current)),_e=null;return}}catch(f){if(u!==null)throw _e=u,f;$e=1,Tl(e,ri(a,e.current)),_e=null;return}n.flags&32768?(Ee||o===1?e=!0:er||(ye&536870912)!==0?e=!1:(ba=e=!0,(o===2||o===9||o===3||o===6)&&(o=Zn.current,o!==null&&o.tag===13&&(o.flags|=16384))),T_(n,e)):Bl(n)}function Bl(e){var n=e;do{if((n.flags&32768)!==0){T_(n,ba);return}e=n.return;var a=LS(n.alternate,n,Ji);if(a!==null){_e=a;return}if(n=n.sibling,n!==null){_e=n;return}_e=n=e}while(n!==null);$e===0&&($e=5)}function T_(e,n){do{var a=NS(e.alternate,e);if(a!==null){a.flags&=32767,_e=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){_e=e;return}_e=e=a}while(e!==null);$e=6,_e=null}function b_(e,n,a,o,u,f,v,T,P){e.cancelPendingCommit=null;do Il();while(dn!==0);if((De&6)!==0)throw Error(s(327));if(n!==null){if(n===e.current)throw Error(s(177));if(f=n.lanes|n.childLanes,f|=cu,ai(e,a,f,v,T,P),e===ke&&(_e=ke=null,ye=0),ir=n,Ca=e,$i=a,vf=f,Sf=u,p_=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,WS(ct,function(){return D_(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=N.T,N.T=null,u=Z.p,Z.p=2,v=De,De|=4;try{OS(e,n,a)}finally{De=v,Z.p=u,N.T=o}}dn=1,A_(),R_(),C_()}}function A_(){if(dn===1){dn=0;var e=Ca,n=ir,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=N.T,N.T=null;var o=Z.p;Z.p=2;var u=De;De|=4;try{r_(n,e);var f=Of,v=hp(e.containerInfo),T=f.focusedElem,P=f.selectionRange;if(v!==T&&T&&T.ownerDocument&&fp(T.ownerDocument.documentElement,T)){if(P!==null&&au(T)){var J=P.start,ut=P.end;if(ut===void 0&&(ut=J),"selectionStart"in T)T.selectionStart=J,T.selectionEnd=Math.min(ut,T.value.length);else{var _t=T.ownerDocument||document,nt=_t&&_t.defaultView||window;if(nt.getSelection){var rt=nt.getSelection(),Ht=T.textContent.length,ee=Math.min(P.start,Ht),Ie=P.end===void 0?ee:Math.min(P.end,Ht);!rt.extend&&ee>Ie&&(v=Ie,Ie=ee,ee=v);var q=up(T,ee),G=up(T,Ie);if(q&&G&&(rt.rangeCount!==1||rt.anchorNode!==q.node||rt.anchorOffset!==q.offset||rt.focusNode!==G.node||rt.focusOffset!==G.offset)){var Q=_t.createRange();Q.setStart(q.node,q.offset),rt.removeAllRanges(),ee>Ie?(rt.addRange(Q),rt.extend(G.node,G.offset)):(Q.setEnd(G.node,G.offset),rt.addRange(Q))}}}}for(_t=[],rt=T;rt=rt.parentNode;)rt.nodeType===1&&_t.push({element:rt,left:rt.scrollLeft,top:rt.scrollTop});for(typeof T.focus=="function"&&T.focus(),T=0;T<_t.length;T++){var mt=_t[T];mt.element.scrollLeft=mt.left,mt.element.scrollTop=mt.top}}Kl=!!Nf,Of=Nf=null}finally{De=u,Z.p=o,N.T=a}}e.current=n,dn=2}}function R_(){if(dn===2){dn=0;var e=Ca,n=ir,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=N.T,N.T=null;var o=Z.p;Z.p=2;var u=De;De|=4;try{e_(e,n.alternate,n)}finally{De=u,Z.p=o,N.T=a}}dn=3}}function C_(){if(dn===4||dn===3){dn=0,U();var e=Ca,n=ir,a=$i,o=p_;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?dn=5:(dn=0,ir=Ca=null,w_(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(Ra=null),Us(a),n=n.stateNode,Ct&&typeof Ct.onCommitFiberRoot=="function")try{Ct.onCommitFiberRoot(Tt,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=N.T,u=Z.p,Z.p=2,N.T=null;try{for(var f=e.onRecoverableError,v=0;v<o.length;v++){var T=o[v];f(T.value,{componentStack:T.stack})}}finally{N.T=n,Z.p=u}}($i&3)!==0&&Il(),Ui(e),u=e.pendingLanes,(a&261930)!==0&&(u&42)!==0?e===yf?vo++:(vo=0,yf=e):vo=0,So(0)}}function w_(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,Jr(n)))}function Il(){return A_(),R_(),C_(),D_()}function D_(){if(dn!==5)return!1;var e=Ca,n=vf;vf=0;var a=Us($i),o=N.T,u=Z.p;try{Z.p=32>a?32:a,N.T=null,a=Sf,Sf=null;var f=Ca,v=$i;if(dn=0,ir=Ca=null,$i=0,(De&6)!==0)throw Error(s(331));var T=De;if(De|=4,f_(f.current),l_(f,f.current,v,a),De=T,So(0,!1),Ct&&typeof Ct.onPostCommitFiberRoot=="function")try{Ct.onPostCommitFiberRoot(Tt,f)}catch{}return!0}finally{Z.p=u,N.T=o,w_(e,n)}}function U_(e,n,a){n=ri(a,n),n=Qu(e.stateNode,n,2),e=xa(e,n,2),e!==null&&(Un(e,2),Ui(e))}function Pe(e,n,a){if(e.tag===3)U_(e,e,a);else for(;n!==null;){if(n.tag===3){U_(n,e,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Ra===null||!Ra.has(o))){e=ri(a,e),a=Lm(2),o=xa(n,a,2),o!==null&&(Nm(a,o,n,e),Un(o,2),Ui(o));break}}n=n.return}}function Ef(e,n,a){var o=e.pingCache;if(o===null){o=e.pingCache=new BS;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(mf=!0,u.add(a),e=VS.bind(null,e,n,a),n.then(e,e))}function VS(e,n,a){var o=e.pingCache;o!==null&&o.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,ke===e&&(ye&a)===a&&($e===4||$e===3&&(ye&62914560)===ye&&300>E()-Ll?(De&2)===0&&ar(e,0):_f|=a,nr===ye&&(nr=0)),Ui(e)}function L_(e,n){n===0&&(n=Ne()),e=es(e,n),e!==null&&(Un(e,n),Ui(e))}function kS(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),L_(e,a)}function XS(e,n){var a=0;switch(e.tag){case 31:case 13:var o=e.stateNode,u=e.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(s(314))}o!==null&&o.delete(n),L_(e,a)}function WS(e,n){return se(e,n)}var Fl=null,rr=null,Tf=!1,Hl=!1,bf=!1,Da=0;function Ui(e){e!==rr&&e.next===null&&(rr===null?Fl=rr=e:rr=rr.next=e),Hl=!0,Tf||(Tf=!0,YS())}function So(e,n){if(!bf&&Hl){bf=!0;do for(var a=!1,o=Fl;o!==null;){if(e!==0){var u=o.pendingLanes;if(u===0)var f=0;else{var v=o.suspendedLanes,T=o.pingedLanes;f=(1<<31-zt(42|e)+1)-1,f&=u&~(v&~T),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,z_(o,f))}else f=ye,f=gt(o,o===ke?f:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(f&3)===0||Ft(o,f)||(a=!0,z_(o,f));o=o.next}while(a);bf=!1}}function qS(){N_()}function N_(){Hl=Tf=!1;var e=0;Da!==0&&iy()&&(e=Da);for(var n=E(),a=null,o=Fl;o!==null;){var u=o.next,f=O_(o,n);f===0?(o.next=null,a===null?Fl=u:a.next=u,u===null&&(rr=a)):(a=o,(e!==0||(f&3)!==0)&&(Hl=!0)),o=u}dn!==0&&dn!==5||So(e),Da!==0&&(Da=0)}function O_(e,n){for(var a=e.suspendedLanes,o=e.pingedLanes,u=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var v=31-zt(f),T=1<<v,P=u[v];P===-1?((T&a)===0||(T&o)!==0)&&(u[v]=ae(T,n)):P<=n&&(e.expiredLanes|=T),f&=~T}if(n=ke,a=ye,a=gt(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,a===0||e===n&&(Oe===2||Oe===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&Qe(o),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Ft(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(o!==null&&Qe(o),Us(a)){case 2:case 8:a=xt;break;case 32:a=ct;break;case 268435456:a=Rt;break;default:a=ct}return o=P_.bind(null,e),a=se(a,o),e.callbackPriority=n,e.callbackNode=a,n}return o!==null&&o!==null&&Qe(o),e.callbackPriority=2,e.callbackNode=null,2}function P_(e,n){if(dn!==0&&dn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Il()&&e.callbackNode!==a)return null;var o=ye;return o=gt(e,e===ke?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(__(e,o,n),O_(e,E()),e.callbackNode!=null&&e.callbackNode===a?P_.bind(null,e):null)}function z_(e,n){if(Il())return null;__(e,n,!0)}function YS(){sy(function(){(De&6)!==0?se(dt,qS):N_()})}function Af(){if(Da===0){var e=Ws;e===0&&(e=bt,bt<<=1,(bt&261888)===0&&(bt=256)),Da=e}return Da}function B_(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:jo(""+e)}function I_(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function jS(e,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var f=B_((u[yn]||null).action),v=o.submitter;v&&(n=(n=v[yn]||null)?B_(n.formAction):v.getAttribute("formAction"),n!==null&&(f=n,v=null));var T=new Jo("action","action",null,o,u);e.push({event:T,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(Da!==0){var P=v?I_(u,v):new FormData(u);Wu(a,{pending:!0,data:P,method:u.method,action:f},null,P)}}else typeof f=="function"&&(T.preventDefault(),P=v?I_(u,v):new FormData(u),Wu(a,{pending:!0,data:P,method:u.method,action:f},f,P))},currentTarget:u}]})}}for(var Rf=0;Rf<lu.length;Rf++){var Cf=lu[Rf],ZS=Cf.toLowerCase(),KS=Cf[0].toUpperCase()+Cf.slice(1);_i(ZS,"on"+KS)}_i(mp,"onAnimationEnd"),_i(_p,"onAnimationIteration"),_i(gp,"onAnimationStart"),_i("dblclick","onDoubleClick"),_i("focusin","onFocus"),_i("focusout","onBlur"),_i(hS,"onTransitionRun"),_i(dS,"onTransitionStart"),_i(pS,"onTransitionCancel"),_i(vp,"onTransitionEnd"),Qt("onMouseEnter",["mouseout","mouseover"]),Qt("onMouseLeave",["mouseout","mouseover"]),Qt("onPointerEnter",["pointerout","pointerover"]),Qt("onPointerLeave",["pointerout","pointerover"]),Pt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Pt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Pt("onBeforeInput",["compositionend","keypress","textInput","paste"]),Pt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Pt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Pt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var yo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),QS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(yo));function F_(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var o=e[a],u=o.event;o=o.listeners;t:{var f=void 0;if(n)for(var v=o.length-1;0<=v;v--){var T=o[v],P=T.instance,J=T.currentTarget;if(T=T.listener,P!==f&&u.isPropagationStopped())break t;f=T,u.currentTarget=J;try{f(u)}catch(ut){el(ut)}u.currentTarget=null,f=P}else for(v=0;v<o.length;v++){if(T=o[v],P=T.instance,J=T.currentTarget,T=T.listener,P!==f&&u.isPropagationStopped())break t;f=T,u.currentTarget=J;try{f(u)}catch(ut){el(ut)}u.currentTarget=null,f=P}}}}function ge(e,n){var a=n[Hr];a===void 0&&(a=n[Hr]=new Set);var o=e+"__bubble";a.has(o)||(H_(n,e,2,!1),a.add(o))}function wf(e,n,a){var o=0;n&&(o|=4),H_(a,e,o,n)}var Gl="_reactListening"+Math.random().toString(36).slice(2);function Df(e){if(!e[Gl]){e[Gl]=!0,Nt.forEach(function(a){a!=="selectionchange"&&(QS.has(a)||wf(a,!1,e),wf(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Gl]||(n[Gl]=!0,wf("selectionchange",!1,n))}}function H_(e,n,a,o){switch(mg(n)){case 2:var u=by;break;case 8:u=Ay;break;default:u=Wf}a=u.bind(null,n,a,e),u=void 0,!Zc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?e.addEventListener(n,a,{capture:!0,passive:u}):e.addEventListener(n,a,!0):u!==void 0?e.addEventListener(n,a,{passive:u}):e.addEventListener(n,a,!1)}function Uf(e,n,a,o,u){var f=o;if((n&1)===0&&(n&2)===0&&o!==null)t:for(;;){if(o===null)return;var v=o.tag;if(v===3||v===4){var T=o.stateNode.containerInfo;if(T===u)break;if(v===4)for(v=o.return;v!==null;){var P=v.tag;if((P===3||P===4)&&v.stateNode.containerInfo===u)return;v=v.return}for(;T!==null;){if(v=W(T),v===null)return;if(P=v.tag,P===5||P===6||P===26||P===27){o=f=v;continue t}T=T.parentNode}}o=o.return}Wd(function(){var J=f,ut=Yc(a),_t=[];t:{var nt=Sp.get(e);if(nt!==void 0){var rt=Jo,Ht=e;switch(e){case"keypress":if(Ko(a)===0)break t;case"keydown":case"keyup":rt=Xv;break;case"focusin":Ht="focus",rt=$c;break;case"focusout":Ht="blur",rt=$c;break;case"beforeblur":case"afterblur":rt=$c;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":rt=jd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":rt=Lv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":rt=Yv;break;case mp:case _p:case gp:rt=Pv;break;case vp:rt=Zv;break;case"scroll":case"scrollend":rt=Dv;break;case"wheel":rt=Qv;break;case"copy":case"cut":case"paste":rt=Bv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":rt=Kd;break;case"toggle":case"beforetoggle":rt=$v}var ee=(n&4)!==0,Ie=!ee&&(e==="scroll"||e==="scrollend"),q=ee?nt!==null?nt+"Capture":null:nt;ee=[];for(var G=J,Q;G!==null;){var mt=G;if(Q=mt.stateNode,mt=mt.tag,mt!==5&&mt!==26&&mt!==27||Q===null||q===null||(mt=Gr(G,q),mt!=null&&ee.push(xo(G,mt,Q))),Ie)break;G=G.return}0<ee.length&&(nt=new rt(nt,Ht,null,a,ut),_t.push({event:nt,listeners:ee}))}}if((n&7)===0){t:{if(nt=e==="mouseover"||e==="pointerover",rt=e==="mouseout"||e==="pointerout",nt&&a!==qc&&(Ht=a.relatedTarget||a.fromElement)&&(W(Ht)||Ht[da]))break t;if((rt||nt)&&(nt=ut.window===ut?ut:(nt=ut.ownerDocument)?nt.defaultView||nt.parentWindow:window,rt?(Ht=a.relatedTarget||a.toElement,rt=J,Ht=Ht?W(Ht):null,Ht!==null&&(Ie=c(Ht),ee=Ht.tag,Ht!==Ie||ee!==5&&ee!==27&&ee!==6)&&(Ht=null)):(rt=null,Ht=J),rt!==Ht)){if(ee=jd,mt="onMouseLeave",q="onMouseEnter",G="mouse",(e==="pointerout"||e==="pointerover")&&(ee=Kd,mt="onPointerLeave",q="onPointerEnter",G="pointer"),Ie=rt==null?nt:st(rt),Q=Ht==null?nt:st(Ht),nt=new ee(mt,G+"leave",rt,a,ut),nt.target=Ie,nt.relatedTarget=Q,mt=null,W(ut)===J&&(ee=new ee(q,G+"enter",Ht,a,ut),ee.target=Q,ee.relatedTarget=Ie,mt=ee),Ie=mt,rt&&Ht)e:{for(ee=JS,q=rt,G=Ht,Q=0,mt=q;mt;mt=ee(mt))Q++;mt=0;for(var $t=G;$t;$t=ee($t))mt++;for(;0<Q-mt;)q=ee(q),Q--;for(;0<mt-Q;)G=ee(G),mt--;for(;Q--;){if(q===G||G!==null&&q===G.alternate){ee=q;break e}q=ee(q),G=ee(G)}ee=null}else ee=null;rt!==null&&G_(_t,nt,rt,ee,!1),Ht!==null&&Ie!==null&&G_(_t,Ie,Ht,ee,!0)}}t:{if(nt=J?st(J):window,rt=nt.nodeName&&nt.nodeName.toLowerCase(),rt==="select"||rt==="input"&&nt.type==="file")var Re=ap;else if(np(nt))if(sp)Re=cS;else{Re=oS;var qt=rS}else rt=nt.nodeName,!rt||rt.toLowerCase()!=="input"||nt.type!=="checkbox"&&nt.type!=="radio"?J&&Wc(J.elementType)&&(Re=ap):Re=lS;if(Re&&(Re=Re(e,J))){ip(_t,Re,a,ut);break t}qt&&qt(e,nt,J),e==="focusout"&&J&&nt.type==="number"&&J.memoizedProps.value!=null&&hn(nt,"number",nt.value)}switch(qt=J?st(J):window,e){case"focusin":(np(qt)||qt.contentEditable==="true")&&(Bs=qt,su=J,Zr=null);break;case"focusout":Zr=su=Bs=null;break;case"mousedown":ru=!0;break;case"contextmenu":case"mouseup":case"dragend":ru=!1,dp(_t,a,ut);break;case"selectionchange":if(fS)break;case"keydown":case"keyup":dp(_t,a,ut)}var ue;if(eu)t:{switch(e){case"compositionstart":var xe="onCompositionStart";break t;case"compositionend":xe="onCompositionEnd";break t;case"compositionupdate":xe="onCompositionUpdate";break t}xe=void 0}else zs?tp(e,a)&&(xe="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(xe="onCompositionStart");xe&&(Qd&&a.locale!=="ko"&&(zs||xe!=="onCompositionStart"?xe==="onCompositionEnd"&&zs&&(ue=qd()):(pa=ut,Kc="value"in pa?pa.value:pa.textContent,zs=!0)),qt=Vl(J,xe),0<qt.length&&(xe=new Zd(xe,e,null,a,ut),_t.push({event:xe,listeners:qt}),ue?xe.data=ue:(ue=ep(a),ue!==null&&(xe.data=ue)))),(ue=eS?nS(e,a):iS(e,a))&&(xe=Vl(J,"onBeforeInput"),0<xe.length&&(qt=new Zd("onBeforeInput","beforeinput",null,a,ut),_t.push({event:qt,listeners:xe}),qt.data=ue)),jS(_t,e,J,a,ut)}F_(_t,n)})}function xo(e,n,a){return{instance:e,listener:n,currentTarget:a}}function Vl(e,n){for(var a=n+"Capture",o=[];e!==null;){var u=e,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=Gr(e,a),u!=null&&o.unshift(xo(e,u,f)),u=Gr(e,n),u!=null&&o.push(xo(e,u,f))),e.tag===3)return o;e=e.return}return[]}function JS(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function G_(e,n,a,o,u){for(var f=n._reactName,v=[];a!==null&&a!==o;){var T=a,P=T.alternate,J=T.stateNode;if(T=T.tag,P!==null&&P===o)break;T!==5&&T!==26&&T!==27||J===null||(P=J,u?(J=Gr(a,f),J!=null&&v.unshift(xo(a,J,P))):u||(J=Gr(a,f),J!=null&&v.push(xo(a,J,P)))),a=a.return}v.length!==0&&e.push({event:n,listeners:v})}var $S=/\r\n?/g,ty=/\u0000|\uFFFD/g;function V_(e){return(typeof e=="string"?e:""+e).replace($S,`
`).replace(ty,"")}function k_(e,n){return n=V_(n),V_(e)===n}function Be(e,n,a,o,u,f){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||Ns(e,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&Ns(e,""+o);break;case"className":Le(e,"class",o);break;case"tabIndex":Le(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":Le(e,a,o);break;case"style":kd(e,o,f);break;case"data":if(n!=="object"){Le(e,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=jo(""+o),e.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Be(e,n,"name",u.name,u,null),Be(e,n,"formEncType",u.formEncType,u,null),Be(e,n,"formMethod",u.formMethod,u,null),Be(e,n,"formTarget",u.formTarget,u,null)):(Be(e,n,"encType",u.encType,u,null),Be(e,n,"method",u.method,u,null),Be(e,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=jo(""+o),e.setAttribute(a,o);break;case"onClick":o!=null&&(e.onclick=Ii);break;case"onScroll":o!=null&&ge("scroll",e);break;case"onScrollEnd":o!=null&&ge("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}a=jo(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""+o):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":o===!0?e.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,o):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(a,o):e.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(a):e.setAttribute(a,o);break;case"popover":ge("beforetoggle",e),ge("toggle",e),Ve(e,"popover",o);break;case"xlinkActuate":me(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":me(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":me(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":me(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":me(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":me(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":me(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":me(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":me(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":Ve(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Cv.get(a)||a,Ve(e,a,o))}}function Lf(e,n,a,o,u,f){switch(a){case"style":kd(e,o,f);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"children":typeof o=="string"?Ns(e,o):(typeof o=="number"||typeof o=="bigint")&&Ns(e,""+o);break;case"onScroll":o!=null&&ge("scroll",e);break;case"onScrollEnd":o!=null&&ge("scrollend",e);break;case"onClick":o!=null&&(e.onclick=Ii);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Gt.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),f=e[yn]||null,f=f!=null?f[a]:null,typeof f=="function"&&e.removeEventListener(n,f,u),typeof o=="function")){typeof f!="function"&&f!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,o,u);break t}a in e?e[a]=o:o===!0?e.setAttribute(a,""):Ve(e,a,o)}}}function bn(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ge("error",e),ge("load",e);var o=!1,u=!1,f;for(f in a)if(a.hasOwnProperty(f)){var v=a[f];if(v!=null)switch(f){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Be(e,n,f,v,a,null)}}u&&Be(e,n,"srcSet",a.srcSet,a,null),o&&Be(e,n,"src",a.src,a,null);return;case"input":ge("invalid",e);var T=f=v=u=null,P=null,J=null;for(o in a)if(a.hasOwnProperty(o)){var ut=a[o];if(ut!=null)switch(o){case"name":u=ut;break;case"type":v=ut;break;case"checked":P=ut;break;case"defaultChecked":J=ut;break;case"value":f=ut;break;case"defaultValue":T=ut;break;case"children":case"dangerouslySetInnerHTML":if(ut!=null)throw Error(s(137,n));break;default:Be(e,n,o,ut,a,null)}}Ln(e,f,T,P,J,v,u,!1);return;case"select":ge("invalid",e),o=v=f=null;for(u in a)if(a.hasOwnProperty(u)&&(T=a[u],T!=null))switch(u){case"value":f=T;break;case"defaultValue":v=T;break;case"multiple":o=T;default:Be(e,n,u,T,a,null)}n=f,a=v,e.multiple=!!o,n!=null?en(e,!!o,n,!1):a!=null&&en(e,!!o,a,!0);return;case"textarea":ge("invalid",e),f=u=o=null;for(v in a)if(a.hasOwnProperty(v)&&(T=a[v],T!=null))switch(v){case"value":o=T;break;case"defaultValue":u=T;break;case"children":f=T;break;case"dangerouslySetInnerHTML":if(T!=null)throw Error(s(91));break;default:Be(e,n,v,T,a,null)}Ri(e,o,u,f);return;case"option":for(P in a)a.hasOwnProperty(P)&&(o=a[P],o!=null)&&(P==="selected"?e.selected=o&&typeof o!="function"&&typeof o!="symbol":Be(e,n,P,o,a,null));return;case"dialog":ge("beforetoggle",e),ge("toggle",e),ge("cancel",e),ge("close",e);break;case"iframe":case"object":ge("load",e);break;case"video":case"audio":for(o=0;o<yo.length;o++)ge(yo[o],e);break;case"image":ge("error",e),ge("load",e);break;case"details":ge("toggle",e);break;case"embed":case"source":case"link":ge("error",e),ge("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(J in a)if(a.hasOwnProperty(J)&&(o=a[J],o!=null))switch(J){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Be(e,n,J,o,a,null)}return;default:if(Wc(n)){for(ut in a)a.hasOwnProperty(ut)&&(o=a[ut],o!==void 0&&Lf(e,n,ut,o,a,void 0));return}}for(T in a)a.hasOwnProperty(T)&&(o=a[T],o!=null&&Be(e,n,T,o,a,null))}function ey(e,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,v=null,T=null,P=null,J=null,ut=null;for(rt in a){var _t=a[rt];if(a.hasOwnProperty(rt)&&_t!=null)switch(rt){case"checked":break;case"value":break;case"defaultValue":P=_t;default:o.hasOwnProperty(rt)||Be(e,n,rt,null,o,_t)}}for(var nt in o){var rt=o[nt];if(_t=a[nt],o.hasOwnProperty(nt)&&(rt!=null||_t!=null))switch(nt){case"type":f=rt;break;case"name":u=rt;break;case"checked":J=rt;break;case"defaultChecked":ut=rt;break;case"value":v=rt;break;case"defaultValue":T=rt;break;case"children":case"dangerouslySetInnerHTML":if(rt!=null)throw Error(s(137,n));break;default:rt!==_t&&Be(e,n,nt,rt,o,_t)}}Rn(e,v,T,P,J,ut,f,u);return;case"select":rt=v=T=nt=null;for(f in a)if(P=a[f],a.hasOwnProperty(f)&&P!=null)switch(f){case"value":break;case"multiple":rt=P;default:o.hasOwnProperty(f)||Be(e,n,f,null,o,P)}for(u in o)if(f=o[u],P=a[u],o.hasOwnProperty(u)&&(f!=null||P!=null))switch(u){case"value":nt=f;break;case"defaultValue":T=f;break;case"multiple":v=f;default:f!==P&&Be(e,n,u,f,o,P)}n=T,a=v,o=rt,nt!=null?en(e,!!a,nt,!1):!!o!=!!a&&(n!=null?en(e,!!a,n,!0):en(e,!!a,a?[]:"",!1));return;case"textarea":rt=nt=null;for(T in a)if(u=a[T],a.hasOwnProperty(T)&&u!=null&&!o.hasOwnProperty(T))switch(T){case"value":break;case"children":break;default:Be(e,n,T,null,o,u)}for(v in o)if(u=o[v],f=a[v],o.hasOwnProperty(v)&&(u!=null||f!=null))switch(v){case"value":nt=u;break;case"defaultValue":rt=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==f&&Be(e,n,v,u,o,f)}Ls(e,nt,rt);return;case"option":for(var Ht in a)nt=a[Ht],a.hasOwnProperty(Ht)&&nt!=null&&!o.hasOwnProperty(Ht)&&(Ht==="selected"?e.selected=!1:Be(e,n,Ht,null,o,nt));for(P in o)nt=o[P],rt=a[P],o.hasOwnProperty(P)&&nt!==rt&&(nt!=null||rt!=null)&&(P==="selected"?e.selected=nt&&typeof nt!="function"&&typeof nt!="symbol":Be(e,n,P,nt,o,rt));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ee in a)nt=a[ee],a.hasOwnProperty(ee)&&nt!=null&&!o.hasOwnProperty(ee)&&Be(e,n,ee,null,o,nt);for(J in o)if(nt=o[J],rt=a[J],o.hasOwnProperty(J)&&nt!==rt&&(nt!=null||rt!=null))switch(J){case"children":case"dangerouslySetInnerHTML":if(nt!=null)throw Error(s(137,n));break;default:Be(e,n,J,nt,o,rt)}return;default:if(Wc(n)){for(var Ie in a)nt=a[Ie],a.hasOwnProperty(Ie)&&nt!==void 0&&!o.hasOwnProperty(Ie)&&Lf(e,n,Ie,void 0,o,nt);for(ut in o)nt=o[ut],rt=a[ut],!o.hasOwnProperty(ut)||nt===rt||nt===void 0&&rt===void 0||Lf(e,n,ut,nt,o,rt);return}}for(var q in a)nt=a[q],a.hasOwnProperty(q)&&nt!=null&&!o.hasOwnProperty(q)&&Be(e,n,q,null,o,nt);for(_t in o)nt=o[_t],rt=a[_t],!o.hasOwnProperty(_t)||nt===rt||nt==null&&rt==null||Be(e,n,_t,nt,o,rt)}function X_(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function ny(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var u=a[o],f=u.transferSize,v=u.initiatorType,T=u.duration;if(f&&T&&X_(v)){for(v=0,T=u.responseEnd,o+=1;o<a.length;o++){var P=a[o],J=P.startTime;if(J>T)break;var ut=P.transferSize,_t=P.initiatorType;ut&&X_(_t)&&(P=P.responseEnd,v+=ut*(P<T?1:(T-J)/(P-J)))}if(--o,n+=8*(f+v)/(u.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Nf=null,Of=null;function kl(e){return e.nodeType===9?e:e.ownerDocument}function W_(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function q_(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function Pf(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var zf=null;function iy(){var e=window.event;return e&&e.type==="popstate"?e===zf?!1:(zf=e,!0):(zf=null,!1)}var Y_=typeof setTimeout=="function"?setTimeout:void 0,ay=typeof clearTimeout=="function"?clearTimeout:void 0,j_=typeof Promise=="function"?Promise:void 0,sy=typeof queueMicrotask=="function"?queueMicrotask:typeof j_<"u"?function(e){return j_.resolve(null).then(e).catch(ry)}:Y_;function ry(e){setTimeout(function(){throw e})}function Ua(e){return e==="head"}function Z_(e,n){var a=n,o=0;do{var u=a.nextSibling;if(e.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(o===0){e.removeChild(u),ur(n);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")Mo(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,Mo(a);for(var f=a.firstChild;f;){var v=f.nextSibling,T=f.nodeName;f[Ka]||T==="SCRIPT"||T==="STYLE"||T==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=v}}else a==="body"&&Mo(e.ownerDocument.body);a=u}while(a);ur(n)}function K_(e,n){var a=e;e=0;do{var o=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=o}while(a)}function Bf(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Bf(a),A(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function oy(e,n,a,o){for(;e.nodeType===1;){var u=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[Ka])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=fi(e.nextSibling),e===null)break}return null}function ly(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=fi(e.nextSibling),e===null))return null;return e}function Q_(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=fi(e.nextSibling),e===null))return null;return e}function If(e){return e.data==="$?"||e.data==="$~"}function Ff(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function cy(e,n){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||a.readyState!=="loading")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function fi(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var Hf=null;function J_(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(n===0)return fi(e.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}e=e.nextSibling}return null}function $_(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return e;n--}else a!=="/$"&&a!=="/&"||n++}e=e.previousSibling}return null}function tg(e,n,a){switch(n=kl(a),e){case"html":if(e=n.documentElement,!e)throw Error(s(452));return e;case"head":if(e=n.head,!e)throw Error(s(453));return e;case"body":if(e=n.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function Mo(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);A(e)}var hi=new Map,eg=new Set;function Xl(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var ta=Z.d;Z.d={f:uy,r:fy,D:hy,C:dy,L:py,m:my,X:gy,S:_y,M:vy};function uy(){var e=ta.f(),n=Pl();return e||n}function fy(e){var n=at(e);n!==null&&n.tag===5&&n.type==="form"?vm(n):ta.r(e)}var or=typeof document>"u"?null:document;function ng(e,n,a){var o=or;if(o&&typeof n=="string"&&n){var u=Se(n);u='link[rel="'+e+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),eg.has(u)||(eg.add(u),e={rel:e,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),bn(n,"link",e),vt(n),o.head.appendChild(n)))}}function hy(e){ta.D(e),ng("dns-prefetch",e,null)}function dy(e,n){ta.C(e,n),ng("preconnect",e,n)}function py(e,n,a){ta.L(e,n,a);var o=or;if(o&&e&&n){var u='link[rel="preload"][as="'+Se(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+Se(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+Se(a.imageSizes)+'"]')):u+='[href="'+Se(e)+'"]';var f=u;switch(n){case"style":f=lr(e);break;case"script":f=cr(e)}hi.has(f)||(e=g({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),hi.set(f,e),o.querySelector(u)!==null||n==="style"&&o.querySelector(Eo(f))||n==="script"&&o.querySelector(To(f))||(n=o.createElement("link"),bn(n,"link",e),vt(n),o.head.appendChild(n)))}}function my(e,n){ta.m(e,n);var a=or;if(a&&e){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+Se(o)+'"][href="'+Se(e)+'"]',f=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=cr(e)}if(!hi.has(f)&&(e=g({rel:"modulepreload",href:e},n),hi.set(f,e),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(To(f)))return}o=a.createElement("link"),bn(o,"link",e),vt(o),a.head.appendChild(o)}}}function _y(e,n,a){ta.S(e,n,a);var o=or;if(o&&e){var u=j(o).hoistableStyles,f=lr(e);n=n||"default";var v=u.get(f);if(!v){var T={loading:0,preload:null};if(v=o.querySelector(Eo(f)))T.loading=5;else{e=g({rel:"stylesheet",href:e,"data-precedence":n},a),(a=hi.get(f))&&Gf(e,a);var P=v=o.createElement("link");vt(P),bn(P,"link",e),P._p=new Promise(function(J,ut){P.onload=J,P.onerror=ut}),P.addEventListener("load",function(){T.loading|=1}),P.addEventListener("error",function(){T.loading|=2}),T.loading|=4,Wl(v,n,o)}v={type:"stylesheet",instance:v,count:1,state:T},u.set(f,v)}}}function gy(e,n){ta.X(e,n);var a=or;if(a&&e){var o=j(a).hoistableScripts,u=cr(e),f=o.get(u);f||(f=a.querySelector(To(u)),f||(e=g({src:e,async:!0},n),(n=hi.get(u))&&Vf(e,n),f=a.createElement("script"),vt(f),bn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function vy(e,n){ta.M(e,n);var a=or;if(a&&e){var o=j(a).hoistableScripts,u=cr(e),f=o.get(u);f||(f=a.querySelector(To(u)),f||(e=g({src:e,async:!0,type:"module"},n),(n=hi.get(u))&&Vf(e,n),f=a.createElement("script"),vt(f),bn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function ig(e,n,a,o){var u=(u=tt.current)?Xl(u):null;if(!u)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=lr(a.href),a=j(u).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=lr(a.href);var f=j(u).hoistableStyles,v=f.get(e);if(v||(u=u.ownerDocument||u,v={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,v),(f=u.querySelector(Eo(e)))&&!f._p&&(v.instance=f,v.state.loading=5),hi.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},hi.set(e,a),f||Sy(u,e,a,v.state))),n&&o===null)throw Error(s(528,""));return v}if(n&&o!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=cr(a),a=j(u).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function lr(e){return'href="'+Se(e)+'"'}function Eo(e){return'link[rel="stylesheet"]['+e+"]"}function ag(e){return g({},e,{"data-precedence":e.precedence,precedence:null})}function Sy(e,n,a,o){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=e.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),bn(n,"link",a),vt(n),e.head.appendChild(n))}function cr(e){return'[src="'+Se(e)+'"]'}function To(e){return"script[async]"+e}function sg(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=e.querySelector('style[data-href~="'+Se(a.href)+'"]');if(o)return n.instance=o,vt(o),o;var u=g({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),vt(o),bn(o,"style",u),Wl(o,a.precedence,e),n.instance=o;case"stylesheet":u=lr(a.href);var f=e.querySelector(Eo(u));if(f)return n.state.loading|=4,n.instance=f,vt(f),f;o=ag(a),(u=hi.get(u))&&Gf(o,u),f=(e.ownerDocument||e).createElement("link"),vt(f);var v=f;return v._p=new Promise(function(T,P){v.onload=T,v.onerror=P}),bn(f,"link",o),n.state.loading|=4,Wl(f,a.precedence,e),n.instance=f;case"script":return f=cr(a.src),(u=e.querySelector(To(f)))?(n.instance=u,vt(u),u):(o=a,(u=hi.get(f))&&(o=g({},a),Vf(o,u)),e=e.ownerDocument||e,u=e.createElement("script"),vt(u),bn(u,"link",o),e.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,Wl(o,a.precedence,e));return n.instance}function Wl(e,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,f=u,v=0;v<o.length;v++){var T=o[v];if(T.dataset.precedence===n)f=T;else if(f!==u)break}f?f.parentNode.insertBefore(e,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function Gf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function Vf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var ql=null;function rg(e,n,a){if(ql===null){var o=new Map,u=ql=new Map;u.set(a,o)}else u=ql,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(e))return o;for(o.set(e,null),a=a.getElementsByTagName(e),u=0;u<a.length;u++){var f=a[u];if(!(f[Ka]||f[rn]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var v=f.getAttribute(n)||"";v=e+v;var T=o.get(v);T?T.push(f):o.set(v,[f])}}return o}function og(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function yy(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(e=n.disabled,typeof n.precedence=="string"&&e==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function lg(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function xy(e,n,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=lr(o.href),f=n.querySelector(Eo(u));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=Yl.bind(e),n.then(e,e)),a.state.loading|=4,a.instance=f,vt(f);return}f=n.ownerDocument||n,o=ag(o),(u=hi.get(u))&&Gf(o,u),f=f.createElement("link"),vt(f);var v=f;v._p=new Promise(function(T,P){v.onload=T,v.onerror=P}),bn(f,"link",o),a.instance=f}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=Yl.bind(e),n.addEventListener("load",a),n.addEventListener("error",a))}}var kf=0;function My(e,n){return e.stylesheets&&e.count===0&&Zl(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var o=setTimeout(function(){if(e.stylesheets&&Zl(e,e.stylesheets),e.unsuspend){var f=e.unsuspend;e.unsuspend=null,f()}},6e4+n);0<e.imgBytes&&kf===0&&(kf=62500*ny());var u=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Zl(e,e.stylesheets),e.unsuspend)){var f=e.unsuspend;e.unsuspend=null,f()}},(e.imgBytes>kf?50:800)+n);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(o),clearTimeout(u)}}:null}function Yl(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Zl(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var jl=null;function Zl(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,jl=new Map,n.forEach(Ey,e),jl=null,Yl.call(e))}function Ey(e,n){if(!(n.state.loading&4)){var a=jl.get(e);if(a)var o=a.get(null);else{a=new Map,jl.set(e,a);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var v=u[f];(v.nodeName==="LINK"||v.getAttribute("media")!=="not all")&&(a.set(v.dataset.precedence,v),o=v)}o&&a.set(null,o)}u=n.instance,v=u.getAttribute("data-precedence"),f=a.get(v)||o,f===o&&a.set(null,u),a.set(v,u),this.count++,o=Yl.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),f?f.parentNode.insertBefore(u,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),n.state.loading|=4}}var bo={$$typeof:O,Provider:null,Consumer:null,_currentValue:X,_currentValue2:X,_threadCount:0};function Ty(e,n,a,o,u,f,v,T,P){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Te(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Te(0),this.hiddenUpdates=Te(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=v,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=P,this.incompleteTransitions=new Map}function cg(e,n,a,o,u,f,v,T,P,J,ut,_t){return e=new Ty(e,n,a,v,P,J,ut,_t,T),n=1,f===!0&&(n|=24),f=jn(3,null,null,n),e.current=f,f.stateNode=e,n=xu(),n.refCount++,e.pooledCache=n,n.refCount++,f.memoizedState={element:o,isDehydrated:a,cache:n},bu(f),e}function ug(e){return e?(e=Hs,e):Hs}function fg(e,n,a,o,u,f){u=ug(u),o.context===null?o.context=u:o.pendingContext=u,o=ya(n),o.payload={element:a},f=f===void 0?null:f,f!==null&&(o.callback=f),a=xa(e,o,n),a!==null&&(Vn(a,e,n),no(a,e,n))}function hg(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function Xf(e,n){hg(e,n),(e=e.alternate)&&hg(e,n)}function dg(e){if(e.tag===13||e.tag===31){var n=es(e,67108864);n!==null&&Vn(n,e,67108864),Xf(e,67108864)}}function pg(e){if(e.tag===13||e.tag===31){var n=$n();n=Ds(n);var a=es(e,n);a!==null&&Vn(a,e,n),Xf(e,n)}}var Kl=!0;function by(e,n,a,o){var u=N.T;N.T=null;var f=Z.p;try{Z.p=2,Wf(e,n,a,o)}finally{Z.p=f,N.T=u}}function Ay(e,n,a,o){var u=N.T;N.T=null;var f=Z.p;try{Z.p=8,Wf(e,n,a,o)}finally{Z.p=f,N.T=u}}function Wf(e,n,a,o){if(Kl){var u=qf(o);if(u===null)Uf(e,n,o,Ql,a),_g(e,o);else if(Cy(u,e,n,a,o))o.stopPropagation();else if(_g(e,o),n&4&&-1<Ry.indexOf(e)){for(;u!==null;){var f=at(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var v=Et(f.pendingLanes);if(v!==0){var T=f;for(T.pendingLanes|=2,T.entangledLanes|=2;v;){var P=1<<31-zt(v);T.entanglements[1]|=P,v&=~P}Ui(f),(De&6)===0&&(Nl=E()+500,So(0))}}break;case 31:case 13:T=es(f,2),T!==null&&Vn(T,f,2),Pl(),Xf(f,2)}if(f=qf(o),f===null&&Uf(e,n,o,Ql,a),f===u)break;u=f}u!==null&&o.stopPropagation()}else Uf(e,n,o,null,a)}}function qf(e){return e=Yc(e),Yf(e)}var Ql=null;function Yf(e){if(Ql=null,e=W(e),e!==null){var n=c(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=h(n),e!==null)return e;e=null}else if(a===31){if(e=d(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return Ql=e,null}function mg(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch($()){case dt:return 2;case xt:return 8;case ct:case Zt:return 32;case Rt:return 268435456;default:return 32}default:return 32}}var jf=!1,La=null,Na=null,Oa=null,Ao=new Map,Ro=new Map,Pa=[],Ry="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function _g(e,n){switch(e){case"focusin":case"focusout":La=null;break;case"dragenter":case"dragleave":Na=null;break;case"mouseover":case"mouseout":Oa=null;break;case"pointerover":case"pointerout":Ao.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ro.delete(n.pointerId)}}function Co(e,n,a,o,u,f){return e===null||e.nativeEvent!==f?(e={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:f,targetContainers:[u]},n!==null&&(n=at(n),n!==null&&dg(n)),e):(e.eventSystemFlags|=o,n=e.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),e)}function Cy(e,n,a,o,u){switch(n){case"focusin":return La=Co(La,e,n,a,o,u),!0;case"dragenter":return Na=Co(Na,e,n,a,o,u),!0;case"mouseover":return Oa=Co(Oa,e,n,a,o,u),!0;case"pointerover":var f=u.pointerId;return Ao.set(f,Co(Ao.get(f)||null,e,n,a,o,u)),!0;case"gotpointercapture":return f=u.pointerId,Ro.set(f,Co(Ro.get(f)||null,e,n,a,o,u)),!0}return!1}function gg(e){var n=W(e.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){e.blockedOn=n,Fr(e.priority,function(){pg(a)});return}}else if(n===31){if(n=d(a),n!==null){e.blockedOn=n,Fr(e.priority,function(){pg(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Jl(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=qf(e.nativeEvent);if(a===null){a=e.nativeEvent;var o=new a.constructor(a.type,a);qc=o,a.target.dispatchEvent(o),qc=null}else return n=at(a),n!==null&&dg(n),e.blockedOn=a,!1;n.shift()}return!0}function vg(e,n,a){Jl(e)&&a.delete(n)}function wy(){jf=!1,La!==null&&Jl(La)&&(La=null),Na!==null&&Jl(Na)&&(Na=null),Oa!==null&&Jl(Oa)&&(Oa=null),Ao.forEach(vg),Ro.forEach(vg)}function $l(e,n){e.blockedOn===n&&(e.blockedOn=null,jf||(jf=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,wy)))}var tc=null;function Sg(e){tc!==e&&(tc=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){tc===e&&(tc=null);for(var n=0;n<e.length;n+=3){var a=e[n],o=e[n+1],u=e[n+2];if(typeof o!="function"){if(Yf(o||a)===null)continue;break}var f=at(a);f!==null&&(e.splice(n,3),n-=3,Wu(f,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function ur(e){function n(P){return $l(P,e)}La!==null&&$l(La,e),Na!==null&&$l(Na,e),Oa!==null&&$l(Oa,e),Ao.forEach(n),Ro.forEach(n);for(var a=0;a<Pa.length;a++){var o=Pa[a];o.blockedOn===e&&(o.blockedOn=null)}for(;0<Pa.length&&(a=Pa[0],a.blockedOn===null);)gg(a),a.blockedOn===null&&Pa.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],f=a[o+1],v=u[yn]||null;if(typeof f=="function")v||Sg(a);else if(v){var T=null;if(f&&f.hasAttribute("formAction")){if(u=f,v=f[yn]||null)T=v.formAction;else if(Yf(u)!==null)continue}else T=v.action;typeof T=="function"?a[o+1]=T:(a.splice(o,3),o-=3),Sg(a)}}}function yg(){function e(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(v){return u=v})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,u=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function Zf(e){this._internalRoot=e}ec.prototype.render=Zf.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,o=$n();fg(a,o,e,n,null,null)},ec.prototype.unmount=Zf.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;fg(e.current,2,null,e,null,null),Pl(),n[da]=null}};function ec(e){this._internalRoot=e}ec.prototype.unstable_scheduleHydration=function(e){if(e){var n=Za();e={blockedOn:null,target:e,priority:n};for(var a=0;a<Pa.length&&n!==0&&n<Pa[a].priority;a++);Pa.splice(a,0,e),a===0&&gg(e)}};var xg=t.version;if(xg!=="19.2.7")throw Error(s(527,xg,"19.2.7"));Z.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=p(n),e=e!==null?_(e):null,e=e===null?null:e.stateNode,e};var Dy={bundleType:0,version:"19.2.7",rendererPackageName:"react-dom",currentDispatcherRef:N,reconcilerVersion:"19.2.7"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var nc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!nc.isDisabled&&nc.supportsFiber)try{Tt=nc.inject(Dy),Ct=nc}catch{}}return Do.createRoot=function(e,n){if(!l(e))throw Error(s(299));var a=!1,o="",u=Cm,f=wm,v=Dm;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(v=n.onRecoverableError)),n=cg(e,1,!1,null,null,a,o,null,u,f,v,yg),e[da]=n.current,Df(e),new Zf(n)},Do.hydrateRoot=function(e,n,a){if(!l(e))throw Error(s(299));var o=!1,u="",f=Cm,v=wm,T=Dm,P=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(v=a.onCaughtError),a.onRecoverableError!==void 0&&(T=a.onRecoverableError),a.formState!==void 0&&(P=a.formState)),n=cg(e,1,!0,n,a??null,o,u,P,f,v,T,yg),n.context=ug(null),a=n.current,o=$n(),o=Ds(o),u=ya(o),u.callback=null,xa(a,u,o),a=o,n.current.lanes=a,Un(n,a),Ui(n),e[da]=n.current,Df(e),new ec(n)},Do.version="19.2.7",Do}var Ug;function Hy(){if(Ug)return Jf.exports;Ug=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),Jf.exports=Fy(),Jf.exports}var Gy=Hy();const Vy="modulepreload",ky=function(r){return"/splat-qa-room-showcase/"+r},Lg={},Xy=function(t,i,s){let l=Promise.resolve();if(i&&i.length>0){let m=function(p){return Promise.all(p.map(_=>Promise.resolve(_).then(g=>({status:"fulfilled",value:g}),g=>({status:"rejected",reason:g}))))};document.getElementsByTagName("link");const h=document.querySelector("meta[property=csp-nonce]"),d=h?.nonce||h?.getAttribute("nonce");l=m(i.map(p=>{if(p=ky(p),p in Lg)return;Lg[p]=!0;const _=p.endsWith(".css"),g=_?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${p}"]${g}`))return;const y=document.createElement("link");if(y.rel=_?"stylesheet":Vy,_||(y.as="script"),y.crossOrigin="",y.href=p,d&&y.setAttribute("nonce",d),document.head.appendChild(y),_)return new Promise((x,b)=>{y.addEventListener("load",x),y.addEventListener("error",()=>b(new Error(`Unable to preload CSS for ${p}`)))})}))}function c(h){const d=new Event("vite:preloadError",{cancelable:!0});if(d.payload=h,window.dispatchEvent(d),!d.defaultPrevented)throw h}return l.then(h=>{for(const d of h||[])d.status==="rejected"&&c(d.reason);return t().catch(c)})};const Wy=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),qy=r=>r.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,i,s)=>s?s.toUpperCase():i.toLowerCase()),Ng=r=>{const t=qy(r);return t.charAt(0).toUpperCase()+t.slice(1)},W0=(...r)=>r.filter((t,i,s)=>!!t&&t.trim()!==""&&s.indexOf(t)===i).join(" ").trim(),Yy=r=>{for(const t in r)if(t.startsWith("aria-")||t==="role"||t==="title")return!0};var jy={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const Zy=je.forwardRef(({color:r="currentColor",size:t=24,strokeWidth:i=2,absoluteStrokeWidth:s,className:l="",children:c,iconNode:h,...d},m)=>je.createElement("svg",{ref:m,...jy,width:t,height:t,stroke:r,strokeWidth:s?Number(i)*24/Number(t):i,className:W0("lucide",l),...!c&&!Yy(d)&&{"aria-hidden":"true"},...d},[...h.map(([p,_])=>je.createElement(p,_)),...Array.isArray(c)?c:[c]]));const zn=(r,t)=>{const i=je.forwardRef(({className:s,...l},c)=>je.createElement(Zy,{ref:c,iconNode:t,className:W0(`lucide-${Wy(Ng(r))}`,`lucide-${r}`,s),...l}));return i.displayName=Ng(r),i};const Ky=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m14.31 8 5.74 9.94",key:"1y6ab4"}],["path",{d:"M9.69 8h11.48",key:"1wxppr"}],["path",{d:"m7.38 12 5.74-9.94",key:"1grp0k"}],["path",{d:"M9.69 16 3.95 6.06",key:"libnyf"}],["path",{d:"M14.31 16H2.83",key:"x5fava"}],["path",{d:"m16.62 12-5.74 9.94",key:"1vwawt"}]],Qy=zn("aperture",Ky);const Jy=[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]],zh=zn("box",Jy);const $y=[["path",{d:"M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z",key:"18u6gg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]],tx=zn("camera",$y);const ex=[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]],nx=zn("github",ex);const ix=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M3 15h18",key:"5xshup"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"M15 3v18",key:"14nvp0"}]],Og=zn("grid-3x3",ix);const ax=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]],q0=zn("image",ax);const sx=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],rx=zn("layers",sx);const ox=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],lx=zn("loader-circle",ox);const cx=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"m21 3-7 7",key:"1l2asr"}],["path",{d:"m3 21 7-7",key:"tjx5ai"}],["path",{d:"M9 21H3v-6",key:"wtvkvv"}]],ux=zn("maximize-2",cx);const fx=[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",key:"kfwtm"}]],hx=zn("moon",fx);const dx=[["path",{d:"M16.466 7.5C15.643 4.237 13.952 2 12 2 9.239 2 7 6.477 7 12s2.239 10 5 10c.342 0 .677-.069 1-.2",key:"10n0gc"}],["path",{d:"m15.194 13.707 3.814 1.86-1.86 3.814",key:"16shm9"}],["path",{d:"M19 15.57c-1.804.885-4.274 1.43-7 1.43-5.523 0-10-2.239-10-5s4.477-5 10-5c4.838 0 8.873 1.718 9.8 4",key:"1lxi77"}]],px=zn("rotate-3d",dx);const mx=[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2",key:"aa7l1z"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2",key:"4qcy5o"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2",key:"6vwrx8"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2",key:"ioqczr"}]],_x=zn("scan",mx);const gx=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],vx=zn("sparkles",gx);const Sx=[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]],yx=zn("sun",Sx);const xx=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Mx=zn("x",xx);function bs(r){return/^(https?:|data:|blob:)/.test(r)?r:`/splat-qa-room-showcase/${r.replace(/^\/+/,"")}`}function Ex(r){return r.filter(t=>t.publicVisible)}function Tx(){const[r,t]=je.useState({status:"loading",manifest:null,error:null});return je.useEffect(()=>{let i=!0;return fetch(bs("assets/manifest.json")).then(s=>{if(!s.ok)throw new Error(`${s.status} ${s.statusText}`);return s.json()}).then(s=>{i&&t({status:"ready",manifest:s,error:null})}).catch(s=>{i&&t({status:"error",manifest:null,error:s.message})}),()=>{i=!1}},[]),r}const Cd="180",Rr={ROTATE:0,DOLLY:1,PAN:2},br={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},bx=0,Pg=1,Ax=2,Y0=1,Rx=2,oa=3,Ya=0,Wn=1,la=2,Wa=0,Cr=1,zg=2,Bg=3,Ig=4,Cx=5,xs=100,wx=101,Dx=102,Ux=103,Lx=104,Nx=200,Ox=201,Px=202,zx=203,Bh=204,Ih=205,Bx=206,Ix=207,Fx=208,Hx=209,Gx=210,Vx=211,kx=212,Xx=213,Wx=214,Fh=0,Hh=1,Gh=2,Dr=3,Vh=4,kh=5,Xh=6,Wh=7,j0=0,qx=1,Yx=2,qa=0,jx=1,Zx=2,Kx=3,Qx=4,Jx=5,$x=6,tM=7,Z0=300,Ur=301,Lr=302,qh=303,Yh=304,Ic=306,jh=1e3,Es=1001,Zh=1002,ni=1003,eM=1004,ic=1005,Ni=1006,nh=1007,Ts=1008,cR=1008,Pi=1009,K0=1010,Q0=1011,Fo=1012,wd=1013,As=1014,ca=1015,Xo=1016,Dd=1017,Ud=1018,Ho=1020,J0=35902,$0=35899,tv=1021,ev=1022,Ei=1023,Go=1026,Vo=1027,nv=1028,Ld=1029,iv=1030,Nd=1031,Od=1033,Rc=33776,Cc=33777,wc=33778,Dc=33779,Kh=35840,Qh=35841,Jh=35842,$h=35843,td=36196,ed=37492,nd=37496,id=37808,ad=37809,sd=37810,rd=37811,od=37812,ld=37813,cd=37814,ud=37815,fd=37816,hd=37817,dd=37818,pd=37819,md=37820,_d=37821,gd=36492,vd=36494,Sd=36495,yd=36283,xd=36284,Md=36285,Ed=36286,nM=3200,iM=3201,av=0,aM=1,Xa="",pi="srgb",Nr="srgb-linear",Nc="linear",Fe="srgb",fr=7680,Fg=519,sM=512,rM=513,oM=514,sv=515,lM=516,cM=517,uM=518,fM=519,Hg=35044,uR=35048,Gg="300 es",Oi=2e3,Oc=2001;class Cs{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[t]===void 0&&(s[t]=[]),s[t].indexOf(i)===-1&&s[t].push(i)}hasEventListener(t,i){const s=this._listeners;return s===void 0?!1:s[t]!==void 0&&s[t].indexOf(i)!==-1}removeEventListener(t,i){const s=this._listeners;if(s===void 0)return;const l=s[t];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const s=i[t.type];if(s!==void 0){t.target=this;const l=s.slice(0);for(let c=0,h=l.length;c<h;c++)l[c].call(this,t);t.target=null}}}const wn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Uc=Math.PI/180,Td=180/Math.PI;function Wo(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(wn[r&255]+wn[r>>8&255]+wn[r>>16&255]+wn[r>>24&255]+"-"+wn[t&255]+wn[t>>8&255]+"-"+wn[t>>16&15|64]+wn[t>>24&255]+"-"+wn[i&63|128]+wn[i>>8&255]+"-"+wn[i>>16&255]+wn[i>>24&255]+wn[s&255]+wn[s>>8&255]+wn[s>>16&255]+wn[s>>24&255]).toLowerCase()}function ve(r,t,i){return Math.max(t,Math.min(i,r))}function hM(r,t){return(r%t+t)%t}function ih(r,t,i){return(1-i)*r+i*t}function Uo(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function kn(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const dM={DEG2RAD:Uc};class ce{constructor(t=0,i=0){ce.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,s=this.y,l=t.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=ve(this.x,t.x,i.x),this.y=ve(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=ve(this.x,t,i),this.y=ve(this.y,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(ve(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(ve(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y;return i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const s=Math.cos(i),l=Math.sin(i),c=this.x-t.x,h=this.y-t.y;return this.x=c*s-h*l+t.x,this.y=c*l+h*s+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Rs{constructor(t=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=s,this._w=l}static slerpFlat(t,i,s,l,c,h,d){let m=s[l+0],p=s[l+1],_=s[l+2],g=s[l+3];const y=c[h+0],x=c[h+1],b=c[h+2],R=c[h+3];if(d===0){t[i+0]=m,t[i+1]=p,t[i+2]=_,t[i+3]=g;return}if(d===1){t[i+0]=y,t[i+1]=x,t[i+2]=b,t[i+3]=R;return}if(g!==R||m!==y||p!==x||_!==b){let M=1-d;const S=m*y+p*x+_*b+g*R,H=S>=0?1:-1,O=1-S*S;if(O>Number.EPSILON){const F=Math.sqrt(O),z=Math.atan2(F,S*H);M=Math.sin(M*z)/F,d=Math.sin(d*z)/F}const D=d*H;if(m=m*M+y*D,p=p*M+x*D,_=_*M+b*D,g=g*M+R*D,M===1-d){const F=1/Math.sqrt(m*m+p*p+_*_+g*g);m*=F,p*=F,_*=F,g*=F}}t[i]=m,t[i+1]=p,t[i+2]=_,t[i+3]=g}static multiplyQuaternionsFlat(t,i,s,l,c,h){const d=s[l],m=s[l+1],p=s[l+2],_=s[l+3],g=c[h],y=c[h+1],x=c[h+2],b=c[h+3];return t[i]=d*b+_*g+m*x-p*y,t[i+1]=m*b+_*y+p*g-d*x,t[i+2]=p*b+_*x+d*y-m*g,t[i+3]=_*b-d*g-m*y-p*x,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,s,l){return this._x=t,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const s=t._x,l=t._y,c=t._z,h=t._order,d=Math.cos,m=Math.sin,p=d(s/2),_=d(l/2),g=d(c/2),y=m(s/2),x=m(l/2),b=m(c/2);switch(h){case"XYZ":this._x=y*_*g+p*x*b,this._y=p*x*g-y*_*b,this._z=p*_*b+y*x*g,this._w=p*_*g-y*x*b;break;case"YXZ":this._x=y*_*g+p*x*b,this._y=p*x*g-y*_*b,this._z=p*_*b-y*x*g,this._w=p*_*g+y*x*b;break;case"ZXY":this._x=y*_*g-p*x*b,this._y=p*x*g+y*_*b,this._z=p*_*b+y*x*g,this._w=p*_*g-y*x*b;break;case"ZYX":this._x=y*_*g-p*x*b,this._y=p*x*g+y*_*b,this._z=p*_*b-y*x*g,this._w=p*_*g+y*x*b;break;case"YZX":this._x=y*_*g+p*x*b,this._y=p*x*g+y*_*b,this._z=p*_*b-y*x*g,this._w=p*_*g-y*x*b;break;case"XZY":this._x=y*_*g-p*x*b,this._y=p*x*g-y*_*b,this._z=p*_*b+y*x*g,this._w=p*_*g+y*x*b;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const s=i/2,l=Math.sin(s);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,s=i[0],l=i[4],c=i[8],h=i[1],d=i[5],m=i[9],p=i[2],_=i[6],g=i[10],y=s+d+g;if(y>0){const x=.5/Math.sqrt(y+1);this._w=.25/x,this._x=(_-m)*x,this._y=(c-p)*x,this._z=(h-l)*x}else if(s>d&&s>g){const x=2*Math.sqrt(1+s-d-g);this._w=(_-m)/x,this._x=.25*x,this._y=(l+h)/x,this._z=(c+p)/x}else if(d>g){const x=2*Math.sqrt(1+d-s-g);this._w=(c-p)/x,this._x=(l+h)/x,this._y=.25*x,this._z=(m+_)/x}else{const x=2*Math.sqrt(1+g-s-d);this._w=(h-l)/x,this._x=(c+p)/x,this._y=(m+_)/x,this._z=.25*x}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let s=t.dot(i)+1;return s<1e-8?(s=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=s):(this._x=0,this._y=-t.z,this._z=t.y,this._w=s)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=s),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ve(this.dot(t),-1,1)))}rotateTowards(t,i){const s=this.angleTo(t);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const s=t._x,l=t._y,c=t._z,h=t._w,d=i._x,m=i._y,p=i._z,_=i._w;return this._x=s*_+h*d+l*p-c*m,this._y=l*_+h*m+c*d-s*p,this._z=c*_+h*p+s*m-l*d,this._w=h*_-s*d-l*m-c*p,this._onChangeCallback(),this}slerp(t,i){if(i===0)return this;if(i===1)return this.copy(t);const s=this._x,l=this._y,c=this._z,h=this._w;let d=h*t._w+s*t._x+l*t._y+c*t._z;if(d<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,d=-d):this.copy(t),d>=1)return this._w=h,this._x=s,this._y=l,this._z=c,this;const m=1-d*d;if(m<=Number.EPSILON){const x=1-i;return this._w=x*h+i*this._w,this._x=x*s+i*this._x,this._y=x*l+i*this._y,this._z=x*c+i*this._z,this.normalize(),this}const p=Math.sqrt(m),_=Math.atan2(p,d),g=Math.sin((1-i)*_)/p,y=Math.sin(i*_)/p;return this._w=h*g+this._w*y,this._x=s*g+this._x*y,this._y=l*g+this._y*y,this._z=c*g+this._z*y,this._onChangeCallback(),this}slerpQuaternions(t,i,s){return this.copy(t).slerp(i,s)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(l*Math.sin(t),l*Math.cos(t),c*Math.sin(i),c*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class K{constructor(t=0,i=0,s=0){K.prototype.isVector3=!0,this.x=t,this.y=i,this.z=s}set(t,i,s){return s===void 0&&(s=this.z),this.x=t,this.y=i,this.z=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(Vg.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(Vg.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[3]*s+c[6]*l,this.y=c[1]*i+c[4]*s+c[7]*l,this.z=c[2]*i+c[5]*s+c[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=t.elements,h=1/(c[3]*i+c[7]*s+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*s+c[8]*l+c[12])*h,this.y=(c[1]*i+c[5]*s+c[9]*l+c[13])*h,this.z=(c[2]*i+c[6]*s+c[10]*l+c[14])*h,this}applyQuaternion(t){const i=this.x,s=this.y,l=this.z,c=t.x,h=t.y,d=t.z,m=t.w,p=2*(h*l-d*s),_=2*(d*i-c*l),g=2*(c*s-h*i);return this.x=i+m*p+h*g-d*_,this.y=s+m*_+d*p-c*g,this.z=l+m*g+c*_-h*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[4]*s+c[8]*l,this.y=c[1]*i+c[5]*s+c[9]*l,this.z=c[2]*i+c[6]*s+c[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=ve(this.x,t.x,i.x),this.y=ve(this.y,t.y,i.y),this.z=ve(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=ve(this.x,t,i),this.y=ve(this.y,t,i),this.z=ve(this.z,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(ve(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const s=t.x,l=t.y,c=t.z,h=i.x,d=i.y,m=i.z;return this.x=l*m-c*d,this.y=c*h-s*m,this.z=s*d-l*h,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const s=t.dot(this)/i;return this.copy(t).multiplyScalar(s)}projectOnPlane(t){return ah.copy(this).projectOnVector(t),this.sub(ah)}reflect(t){return this.sub(ah.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(ve(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y,l=this.z-t.z;return i*i+s*s+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,s){const l=Math.sin(i)*t;return this.x=l*Math.sin(s),this.y=Math.cos(i)*t,this.z=l*Math.cos(s),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,s){return this.x=t*Math.sin(i),this.y=s,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),s=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(t),this.y=i,this.z=s*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ah=new K,Vg=new Rs;class fe{constructor(t,i,s,l,c,h,d,m,p){fe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,h,d,m,p)}set(t,i,s,l,c,h,d,m,p){const _=this.elements;return _[0]=t,_[1]=l,_[2]=d,_[3]=i,_[4]=c,_[5]=m,_[6]=s,_[7]=h,_[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(t,i,s){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,h=s[0],d=s[3],m=s[6],p=s[1],_=s[4],g=s[7],y=s[2],x=s[5],b=s[8],R=l[0],M=l[3],S=l[6],H=l[1],O=l[4],D=l[7],F=l[2],z=l[5],B=l[8];return c[0]=h*R+d*H+m*F,c[3]=h*M+d*O+m*z,c[6]=h*S+d*D+m*B,c[1]=p*R+_*H+g*F,c[4]=p*M+_*O+g*z,c[7]=p*S+_*D+g*B,c[2]=y*R+x*H+b*F,c[5]=y*M+x*O+b*z,c[8]=y*S+x*D+b*B,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],h=t[4],d=t[5],m=t[6],p=t[7],_=t[8];return i*h*_-i*d*p-s*c*_+s*d*m+l*c*p-l*h*m}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],h=t[4],d=t[5],m=t[6],p=t[7],_=t[8],g=_*h-d*p,y=d*m-_*c,x=p*c-h*m,b=i*g+s*y+l*x;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const R=1/b;return t[0]=g*R,t[1]=(l*p-_*s)*R,t[2]=(d*s-l*h)*R,t[3]=y*R,t[4]=(_*i-l*m)*R,t[5]=(l*c-d*i)*R,t[6]=x*R,t[7]=(s*m-p*i)*R,t[8]=(h*i-s*c)*R,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,s,l,c,h,d){const m=Math.cos(c),p=Math.sin(c);return this.set(s*m,s*p,-s*(m*h+p*d)+h+t,-l*p,l*m,-l*(-p*h+m*d)+d+i,0,0,1),this}scale(t,i){return this.premultiply(sh.makeScale(t,i)),this}rotate(t){return this.premultiply(sh.makeRotation(-t)),this}translate(t,i){return this.premultiply(sh.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<9;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const sh=new fe;function rv(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function Pc(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function pM(){const r=Pc("canvas");return r.style.display="block",r}const kg={};function ko(r){r in kg||(kg[r]=!0,console.warn(r))}function mM(r,t,i){return new Promise(function(s,l){function c(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:l();break;case r.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:s()}}setTimeout(c,i)})}const Xg=new fe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Wg=new fe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function _M(){const r={enabled:!0,workingColorSpace:Nr,spaces:{},convert:function(l,c,h){return this.enabled===!1||c===h||!c||!h||(this.spaces[c].transfer===Fe&&(l.r=fa(l.r),l.g=fa(l.g),l.b=fa(l.b)),this.spaces[c].primaries!==this.spaces[h].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===Fe&&(l.r=wr(l.r),l.g=wr(l.g),l.b=wr(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Xa?Nc:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,h){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return ko("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return ko("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(l,c)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return r.define({[Nr]:{primaries:t,whitePoint:s,transfer:Nc,toXYZ:Xg,fromXYZ:Wg,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:pi},outputColorSpaceConfig:{drawingBufferColorSpace:pi}},[pi]:{primaries:t,whitePoint:s,transfer:Fe,toXYZ:Xg,fromXYZ:Wg,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:pi}}}),r}const we=_M();function fa(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function wr(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let hr;class gM{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let s;if(t instanceof HTMLCanvasElement)s=t;else{hr===void 0&&(hr=Pc("canvas")),hr.width=t.width,hr.height=t.height;const l=hr.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),s=hr}return s.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=Pc("canvas");i.width=t.width,i.height=t.height;const s=i.getContext("2d");s.drawImage(t,0,0,t.width,t.height);const l=s.getImageData(0,0,t.width,t.height),c=l.data;for(let h=0;h<c.length;h++)c[h]=fa(c[h]/255)*255;return s.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(fa(i[s]/255)*255):i[s]=fa(i[s]);return{data:i,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let vM=0;class Pd{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:vM++}),this.uuid=Wo(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight,0):i instanceof VideoFrame?t.set(i.displayHeight,i.displayWidth,0):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let h=0,d=l.length;h<d;h++)l[h].isDataTexture?c.push(rh(l[h].image)):c.push(rh(l[h]))}else c=rh(l);s.url=c}return i||(t.images[this.uuid]=s),s}}function rh(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?gM.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let SM=0;const oh=new K;class Pn extends Cs{constructor(t=Pn.DEFAULT_IMAGE,i=Pn.DEFAULT_MAPPING,s=Es,l=Es,c=Ni,h=Ts,d=Ei,m=Pi,p=Pn.DEFAULT_ANISOTROPY,_=Xa){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:SM++}),this.uuid=Wo(),this.name="",this.source=new Pd(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=c,this.minFilter=h,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new ce(0,0),this.repeat=new ce(1,1),this.center=new ce(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new fe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(oh).x}get height(){return this.source.getSize(oh).y}get depth(){return this.source.getSize(oh).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const s=t[i];if(s===void 0){console.warn(`THREE.Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(t.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Z0)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case jh:t.x=t.x-Math.floor(t.x);break;case Es:t.x=t.x<0?0:1;break;case Zh:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case jh:t.y=t.y-Math.floor(t.y);break;case Es:t.y=t.y<0?0:1;break;case Zh:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Pn.DEFAULT_IMAGE=null;Pn.DEFAULT_MAPPING=Z0;Pn.DEFAULT_ANISOTROPY=1;class tn{constructor(t=0,i=0,s=0,l=1){tn.prototype.isVector4=!0,this.x=t,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,s,l){return this.x=t,this.y=i,this.z=s,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=this.w,h=t.elements;return this.x=h[0]*i+h[4]*s+h[8]*l+h[12]*c,this.y=h[1]*i+h[5]*s+h[9]*l+h[13]*c,this.z=h[2]*i+h[6]*s+h[10]*l+h[14]*c,this.w=h[3]*i+h[7]*s+h[11]*l+h[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,s,l,c;const m=t.elements,p=m[0],_=m[4],g=m[8],y=m[1],x=m[5],b=m[9],R=m[2],M=m[6],S=m[10];if(Math.abs(_-y)<.01&&Math.abs(g-R)<.01&&Math.abs(b-M)<.01){if(Math.abs(_+y)<.1&&Math.abs(g+R)<.1&&Math.abs(b+M)<.1&&Math.abs(p+x+S-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const O=(p+1)/2,D=(x+1)/2,F=(S+1)/2,z=(_+y)/4,B=(g+R)/4,Y=(b+M)/4;return O>D&&O>F?O<.01?(s=0,l=.707106781,c=.707106781):(s=Math.sqrt(O),l=z/s,c=B/s):D>F?D<.01?(s=.707106781,l=0,c=.707106781):(l=Math.sqrt(D),s=z/l,c=Y/l):F<.01?(s=.707106781,l=.707106781,c=0):(c=Math.sqrt(F),s=B/c,l=Y/c),this.set(s,l,c,i),this}let H=Math.sqrt((M-b)*(M-b)+(g-R)*(g-R)+(y-_)*(y-_));return Math.abs(H)<.001&&(H=1),this.x=(M-b)/H,this.y=(g-R)/H,this.z=(y-_)/H,this.w=Math.acos((p+x+S-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=ve(this.x,t.x,i.x),this.y=ve(this.y,t.y,i.y),this.z=ve(this.z,t.z,i.z),this.w=ve(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=ve(this.x,t,i),this.y=ve(this.y,t,i),this.z=ve(this.z,t,i),this.w=ve(this.w,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(ve(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this.w=t.w+(i.w-t.w)*s,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class yM extends Cs{constructor(t=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ni,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=s.depth,this.scissor=new tn(0,0,t,i),this.scissorTest=!1,this.viewport=new tn(0,0,t,i);const l={width:t,height:i,depth:s.depth},c=new Pn(l);this.textures=[];const h=s.count;for(let d=0;d<h;d++)this.textures[d]=c.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(t={}){const i={minFilter:Ni,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,s=1){if(this.width!==t||this.height!==i||this.depth!==s){this.width=t,this.height=i,this.depth=s;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isArrayTexture=this.textures[l].image.depth>1;this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new Pd(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ja extends yM{constructor(t=1,i=1,s={}){super(t,i,s),this.isWebGLRenderTarget=!0}}class zd extends Pn{constructor(t=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=ni,this.minFilter=ni,this.wrapR=Es,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class fR extends ja{constructor(t=1,i=1,s=1,l={}){super(t,i,l),this.isWebGLArrayRenderTarget=!0,this.depth=s,this.texture=new zd(null,t,i,s),this._setTextureOptions(l),this.texture.isRenderTargetTexture=!0}}class xM extends Pn{constructor(t=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=ni,this.minFilter=ni,this.wrapR=Es,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Pr{constructor(t=new K(1/0,1/0,1/0),i=new K(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i+=3)this.expandByPoint(Si.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,s=t.count;i<s;i++)this.expandByPoint(Si.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const s=Si.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(s),this.max.copy(t).add(s),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const s=t.geometry;if(s!==void 0){const c=s.getAttribute("position");if(i===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let h=0,d=c.count;h<d;h++)t.isMesh===!0?t.getVertexPosition(h,Si):Si.fromBufferAttribute(c,h),Si.applyMatrix4(t.matrixWorld),this.expandByPoint(Si);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ac.copy(t.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),ac.copy(s.boundingBox)),ac.applyMatrix4(t.matrixWorld),this.union(ac)}const l=t.children;for(let c=0,h=l.length;c<h;c++)this.expandByObject(l[c],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Si),Si.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,s;return t.normal.x>0?(i=t.normal.x*this.min.x,s=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,s=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,s+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,s+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,s+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,s+=t.normal.z*this.min.z),i<=-t.constant&&s>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Lo),sc.subVectors(this.max,Lo),dr.subVectors(t.a,Lo),pr.subVectors(t.b,Lo),mr.subVectors(t.c,Lo),Ba.subVectors(pr,dr),Ia.subVectors(mr,pr),ps.subVectors(dr,mr);let i=[0,-Ba.z,Ba.y,0,-Ia.z,Ia.y,0,-ps.z,ps.y,Ba.z,0,-Ba.x,Ia.z,0,-Ia.x,ps.z,0,-ps.x,-Ba.y,Ba.x,0,-Ia.y,Ia.x,0,-ps.y,ps.x,0];return!lh(i,dr,pr,mr,sc)||(i=[1,0,0,0,1,0,0,0,1],!lh(i,dr,pr,mr,sc))?!1:(rc.crossVectors(Ba,Ia),i=[rc.x,rc.y,rc.z],lh(i,dr,pr,mr,sc))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Si).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Si).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ea[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ea[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ea[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ea[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ea[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ea[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ea[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ea[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ea),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const ea=[new K,new K,new K,new K,new K,new K,new K,new K],Si=new K,ac=new Pr,dr=new K,pr=new K,mr=new K,Ba=new K,Ia=new K,ps=new K,Lo=new K,sc=new K,rc=new K,ms=new K;function lh(r,t,i,s,l){for(let c=0,h=r.length-3;c<=h;c+=3){ms.fromArray(r,c);const d=l.x*Math.abs(ms.x)+l.y*Math.abs(ms.y)+l.z*Math.abs(ms.z),m=t.dot(ms),p=i.dot(ms),_=s.dot(ms);if(Math.max(-Math.max(m,p,_),Math.min(m,p,_))>d)return!1}return!0}const MM=new Pr,No=new K,ch=new K;class Fc{constructor(t=new K,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const s=this.center;i!==void 0?s.copy(i):MM.setFromPoints(t).getCenter(s);let l=0;for(let c=0,h=t.length;c<h;c++)l=Math.max(l,s.distanceToSquared(t[c]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const s=this.center.distanceToSquared(t);return i.copy(t),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;No.subVectors(t,this.center);const i=No.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(No,l/s),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ch.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(No.copy(t.center).add(ch)),this.expandByPoint(No.copy(t.center).sub(ch))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const na=new K,uh=new K,oc=new K,Fa=new K,fh=new K,lc=new K,hh=new K;class Hc{constructor(t=new K,i=new K(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,na)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=na.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(na.copy(this.origin).addScaledVector(this.direction,i),na.distanceToSquared(t))}distanceSqToSegment(t,i,s,l){uh.copy(t).add(i).multiplyScalar(.5),oc.copy(i).sub(t).normalize(),Fa.copy(this.origin).sub(uh);const c=t.distanceTo(i)*.5,h=-this.direction.dot(oc),d=Fa.dot(this.direction),m=-Fa.dot(oc),p=Fa.lengthSq(),_=Math.abs(1-h*h);let g,y,x,b;if(_>0)if(g=h*m-d,y=h*d-m,b=c*_,g>=0)if(y>=-b)if(y<=b){const R=1/_;g*=R,y*=R,x=g*(g+h*y+2*d)+y*(h*g+y+2*m)+p}else y=c,g=Math.max(0,-(h*y+d)),x=-g*g+y*(y+2*m)+p;else y=-c,g=Math.max(0,-(h*y+d)),x=-g*g+y*(y+2*m)+p;else y<=-b?(g=Math.max(0,-(-h*c+d)),y=g>0?-c:Math.min(Math.max(-c,-m),c),x=-g*g+y*(y+2*m)+p):y<=b?(g=0,y=Math.min(Math.max(-c,-m),c),x=y*(y+2*m)+p):(g=Math.max(0,-(h*c+d)),y=g>0?c:Math.min(Math.max(-c,-m),c),x=-g*g+y*(y+2*m)+p);else y=h>0?-c:c,g=Math.max(0,-(h*y+d)),x=-g*g+y*(y+2*m)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,g),l&&l.copy(uh).addScaledVector(oc,y),x}intersectSphere(t,i){na.subVectors(t.center,this.origin);const s=na.dot(this.direction),l=na.dot(na)-s*s,c=t.radius*t.radius;if(l>c)return null;const h=Math.sqrt(c-l),d=s-h,m=s+h;return m<0?null:d<0?this.at(m,i):this.at(d,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(t.normal)+t.constant)/i;return s>=0?s:null}intersectPlane(t,i){const s=this.distanceToPlane(t);return s===null?null:this.at(s,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let s,l,c,h,d,m;const p=1/this.direction.x,_=1/this.direction.y,g=1/this.direction.z,y=this.origin;return p>=0?(s=(t.min.x-y.x)*p,l=(t.max.x-y.x)*p):(s=(t.max.x-y.x)*p,l=(t.min.x-y.x)*p),_>=0?(c=(t.min.y-y.y)*_,h=(t.max.y-y.y)*_):(c=(t.max.y-y.y)*_,h=(t.min.y-y.y)*_),s>h||c>l||((c>s||isNaN(s))&&(s=c),(h<l||isNaN(l))&&(l=h),g>=0?(d=(t.min.z-y.z)*g,m=(t.max.z-y.z)*g):(d=(t.max.z-y.z)*g,m=(t.min.z-y.z)*g),s>m||d>l)||((d>s||s!==s)&&(s=d),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(t){return this.intersectBox(t,na)!==null}intersectTriangle(t,i,s,l,c){fh.subVectors(i,t),lc.subVectors(s,t),hh.crossVectors(fh,lc);let h=this.direction.dot(hh),d;if(h>0){if(l)return null;d=1}else if(h<0)d=-1,h=-h;else return null;Fa.subVectors(this.origin,t);const m=d*this.direction.dot(lc.crossVectors(Fa,lc));if(m<0)return null;const p=d*this.direction.dot(fh.cross(Fa));if(p<0||m+p>h)return null;const _=-d*Fa.dot(hh);return _<0?null:this.at(_/h,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ke{constructor(t,i,s,l,c,h,d,m,p,_,g,y,x,b,R,M){Ke.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,h,d,m,p,_,g,y,x,b,R,M)}set(t,i,s,l,c,h,d,m,p,_,g,y,x,b,R,M){const S=this.elements;return S[0]=t,S[4]=i,S[8]=s,S[12]=l,S[1]=c,S[5]=h,S[9]=d,S[13]=m,S[2]=p,S[6]=_,S[10]=g,S[14]=y,S[3]=x,S[7]=b,S[11]=R,S[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ke().fromArray(this.elements)}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(t){const i=this.elements,s=t.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,s){return t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this}makeBasis(t,i,s){return this.set(t.x,i.x,s.x,0,t.y,i.y,s.y,0,t.z,i.z,s.z,0,0,0,0,1),this}extractRotation(t){const i=this.elements,s=t.elements,l=1/_r.setFromMatrixColumn(t,0).length(),c=1/_r.setFromMatrixColumn(t,1).length(),h=1/_r.setFromMatrixColumn(t,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*c,i[5]=s[5]*c,i[6]=s[6]*c,i[7]=0,i[8]=s[8]*h,i[9]=s[9]*h,i[10]=s[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,s=t.x,l=t.y,c=t.z,h=Math.cos(s),d=Math.sin(s),m=Math.cos(l),p=Math.sin(l),_=Math.cos(c),g=Math.sin(c);if(t.order==="XYZ"){const y=h*_,x=h*g,b=d*_,R=d*g;i[0]=m*_,i[4]=-m*g,i[8]=p,i[1]=x+b*p,i[5]=y-R*p,i[9]=-d*m,i[2]=R-y*p,i[6]=b+x*p,i[10]=h*m}else if(t.order==="YXZ"){const y=m*_,x=m*g,b=p*_,R=p*g;i[0]=y+R*d,i[4]=b*d-x,i[8]=h*p,i[1]=h*g,i[5]=h*_,i[9]=-d,i[2]=x*d-b,i[6]=R+y*d,i[10]=h*m}else if(t.order==="ZXY"){const y=m*_,x=m*g,b=p*_,R=p*g;i[0]=y-R*d,i[4]=-h*g,i[8]=b+x*d,i[1]=x+b*d,i[5]=h*_,i[9]=R-y*d,i[2]=-h*p,i[6]=d,i[10]=h*m}else if(t.order==="ZYX"){const y=h*_,x=h*g,b=d*_,R=d*g;i[0]=m*_,i[4]=b*p-x,i[8]=y*p+R,i[1]=m*g,i[5]=R*p+y,i[9]=x*p-b,i[2]=-p,i[6]=d*m,i[10]=h*m}else if(t.order==="YZX"){const y=h*m,x=h*p,b=d*m,R=d*p;i[0]=m*_,i[4]=R-y*g,i[8]=b*g+x,i[1]=g,i[5]=h*_,i[9]=-d*_,i[2]=-p*_,i[6]=x*g+b,i[10]=y-R*g}else if(t.order==="XZY"){const y=h*m,x=h*p,b=d*m,R=d*p;i[0]=m*_,i[4]=-g,i[8]=p*_,i[1]=y*g+R,i[5]=h*_,i[9]=x*g-b,i[2]=b*g-x,i[6]=d*_,i[10]=R*g+y}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(EM,t,TM)}lookAt(t,i,s){const l=this.elements;return ti.subVectors(t,i),ti.lengthSq()===0&&(ti.z=1),ti.normalize(),Ha.crossVectors(s,ti),Ha.lengthSq()===0&&(Math.abs(s.z)===1?ti.x+=1e-4:ti.z+=1e-4,ti.normalize(),Ha.crossVectors(s,ti)),Ha.normalize(),cc.crossVectors(ti,Ha),l[0]=Ha.x,l[4]=cc.x,l[8]=ti.x,l[1]=Ha.y,l[5]=cc.y,l[9]=ti.y,l[2]=Ha.z,l[6]=cc.z,l[10]=ti.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,h=s[0],d=s[4],m=s[8],p=s[12],_=s[1],g=s[5],y=s[9],x=s[13],b=s[2],R=s[6],M=s[10],S=s[14],H=s[3],O=s[7],D=s[11],F=s[15],z=l[0],B=l[4],Y=l[8],C=l[12],w=l[1],V=l[5],it=l[9],ot=l[13],ft=l[2],pt=l[6],N=l[10],Z=l[14],X=l[3],St=l[7],Mt=l[11],L=l[15];return c[0]=h*z+d*w+m*ft+p*X,c[4]=h*B+d*V+m*pt+p*St,c[8]=h*Y+d*it+m*N+p*Mt,c[12]=h*C+d*ot+m*Z+p*L,c[1]=_*z+g*w+y*ft+x*X,c[5]=_*B+g*V+y*pt+x*St,c[9]=_*Y+g*it+y*N+x*Mt,c[13]=_*C+g*ot+y*Z+x*L,c[2]=b*z+R*w+M*ft+S*X,c[6]=b*B+R*V+M*pt+S*St,c[10]=b*Y+R*it+M*N+S*Mt,c[14]=b*C+R*ot+M*Z+S*L,c[3]=H*z+O*w+D*ft+F*X,c[7]=H*B+O*V+D*pt+F*St,c[11]=H*Y+O*it+D*N+F*Mt,c[15]=H*C+O*ot+D*Z+F*L,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[4],l=t[8],c=t[12],h=t[1],d=t[5],m=t[9],p=t[13],_=t[2],g=t[6],y=t[10],x=t[14],b=t[3],R=t[7],M=t[11],S=t[15];return b*(+c*m*g-l*p*g-c*d*y+s*p*y+l*d*x-s*m*x)+R*(+i*m*x-i*p*y+c*h*y-l*h*x+l*p*_-c*m*_)+M*(+i*p*g-i*d*x-c*h*g+s*h*x+c*d*_-s*p*_)+S*(-l*d*_-i*m*g+i*d*y+l*h*g-s*h*y+s*m*_)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,s){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=s),this}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],h=t[4],d=t[5],m=t[6],p=t[7],_=t[8],g=t[9],y=t[10],x=t[11],b=t[12],R=t[13],M=t[14],S=t[15],H=g*M*p-R*y*p+R*m*x-d*M*x-g*m*S+d*y*S,O=b*y*p-_*M*p-b*m*x+h*M*x+_*m*S-h*y*S,D=_*R*p-b*g*p+b*d*x-h*R*x-_*d*S+h*g*S,F=b*g*m-_*R*m-b*d*y+h*R*y+_*d*M-h*g*M,z=i*H+s*O+l*D+c*F;if(z===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const B=1/z;return t[0]=H*B,t[1]=(R*y*c-g*M*c-R*l*x+s*M*x+g*l*S-s*y*S)*B,t[2]=(d*M*c-R*m*c+R*l*p-s*M*p-d*l*S+s*m*S)*B,t[3]=(g*m*c-d*y*c-g*l*p+s*y*p+d*l*x-s*m*x)*B,t[4]=O*B,t[5]=(_*M*c-b*y*c+b*l*x-i*M*x-_*l*S+i*y*S)*B,t[6]=(b*m*c-h*M*c-b*l*p+i*M*p+h*l*S-i*m*S)*B,t[7]=(h*y*c-_*m*c+_*l*p-i*y*p-h*l*x+i*m*x)*B,t[8]=D*B,t[9]=(b*g*c-_*R*c-b*s*x+i*R*x+_*s*S-i*g*S)*B,t[10]=(h*R*c-b*d*c+b*s*p-i*R*p-h*s*S+i*d*S)*B,t[11]=(_*d*c-h*g*c-_*s*p+i*g*p+h*s*x-i*d*x)*B,t[12]=F*B,t[13]=(_*R*l-b*g*l+b*s*y-i*R*y-_*s*M+i*g*M)*B,t[14]=(b*d*l-h*R*l-b*s*m+i*R*m+h*s*M-i*d*M)*B,t[15]=(h*g*l-_*d*l+_*s*m-i*g*m-h*s*y+i*d*y)*B,this}scale(t){const i=this.elements,s=t.x,l=t.y,c=t.z;return i[0]*=s,i[4]*=l,i[8]*=c,i[1]*=s,i[5]*=l,i[9]*=c,i[2]*=s,i[6]*=l,i[10]*=c,i[3]*=s,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],s=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(t,i,s){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),s=Math.sin(t);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const s=Math.cos(i),l=Math.sin(i),c=1-s,h=t.x,d=t.y,m=t.z,p=c*h,_=c*d;return this.set(p*h+s,p*d-l*m,p*m+l*d,0,p*d+l*m,_*d+s,_*m-l*h,0,p*m-l*d,_*m+l*h,c*m*m+s,0,0,0,0,1),this}makeScale(t,i,s){return this.set(t,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(t,i,s,l,c,h){return this.set(1,s,c,0,t,1,h,0,i,l,1,0,0,0,0,1),this}compose(t,i,s){const l=this.elements,c=i._x,h=i._y,d=i._z,m=i._w,p=c+c,_=h+h,g=d+d,y=c*p,x=c*_,b=c*g,R=h*_,M=h*g,S=d*g,H=m*p,O=m*_,D=m*g,F=s.x,z=s.y,B=s.z;return l[0]=(1-(R+S))*F,l[1]=(x+D)*F,l[2]=(b-O)*F,l[3]=0,l[4]=(x-D)*z,l[5]=(1-(y+S))*z,l[6]=(M+H)*z,l[7]=0,l[8]=(b+O)*B,l[9]=(M-H)*B,l[10]=(1-(y+R))*B,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,s){const l=this.elements;let c=_r.set(l[0],l[1],l[2]).length();const h=_r.set(l[4],l[5],l[6]).length(),d=_r.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),t.x=l[12],t.y=l[13],t.z=l[14],yi.copy(this);const p=1/c,_=1/h,g=1/d;return yi.elements[0]*=p,yi.elements[1]*=p,yi.elements[2]*=p,yi.elements[4]*=_,yi.elements[5]*=_,yi.elements[6]*=_,yi.elements[8]*=g,yi.elements[9]*=g,yi.elements[10]*=g,i.setFromRotationMatrix(yi),s.x=c,s.y=h,s.z=d,this}makePerspective(t,i,s,l,c,h,d=Oi,m=!1){const p=this.elements,_=2*c/(i-t),g=2*c/(s-l),y=(i+t)/(i-t),x=(s+l)/(s-l);let b,R;if(m)b=c/(h-c),R=h*c/(h-c);else if(d===Oi)b=-(h+c)/(h-c),R=-2*h*c/(h-c);else if(d===Oc)b=-h/(h-c),R=-h*c/(h-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=_,p[4]=0,p[8]=y,p[12]=0,p[1]=0,p[5]=g,p[9]=x,p[13]=0,p[2]=0,p[6]=0,p[10]=b,p[14]=R,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,i,s,l,c,h,d=Oi,m=!1){const p=this.elements,_=2/(i-t),g=2/(s-l),y=-(i+t)/(i-t),x=-(s+l)/(s-l);let b,R;if(m)b=1/(h-c),R=h/(h-c);else if(d===Oi)b=-2/(h-c),R=-(h+c)/(h-c);else if(d===Oc)b=-1/(h-c),R=-c/(h-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=_,p[4]=0,p[8]=0,p[12]=y,p[1]=0,p[5]=g,p[9]=0,p[13]=x,p[2]=0,p[6]=0,p[10]=b,p[14]=R,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<16;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t[i+9]=s[9],t[i+10]=s[10],t[i+11]=s[11],t[i+12]=s[12],t[i+13]=s[13],t[i+14]=s[14],t[i+15]=s[15],t}}const _r=new K,yi=new Ke,EM=new K(0,0,0),TM=new K(1,1,1),Ha=new K,cc=new K,ti=new K,qg=new Ke,Yg=new Rs;class zi{constructor(t=0,i=0,s=0,l=zi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,s,l=this._order){return this._x=t,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,s=!0){const l=t.elements,c=l[0],h=l[4],d=l[8],m=l[1],p=l[5],_=l[9],g=l[2],y=l[6],x=l[10];switch(i){case"XYZ":this._y=Math.asin(ve(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-_,x),this._z=Math.atan2(-h,c)):(this._x=Math.atan2(y,p),this._z=0);break;case"YXZ":this._x=Math.asin(-ve(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(d,x),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-g,c),this._z=0);break;case"ZXY":this._x=Math.asin(ve(y,-1,1)),Math.abs(y)<.9999999?(this._y=Math.atan2(-g,x),this._z=Math.atan2(-h,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-ve(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(y,x),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-h,p));break;case"YZX":this._z=Math.asin(ve(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-_,p),this._y=Math.atan2(-g,c)):(this._x=0,this._y=Math.atan2(d,x));break;case"XZY":this._z=Math.asin(-ve(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(y,p),this._y=Math.atan2(d,c)):(this._x=Math.atan2(-_,x),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,s){return qg.makeRotationFromQuaternion(t),this.setFromRotationMatrix(qg,i,s)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return Yg.setFromEuler(this),this.setFromQuaternion(Yg,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}zi.DEFAULT_ORDER="XYZ";class Bd{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let bM=0;const jg=new K,gr=new Rs,ia=new Ke,uc=new K,Oo=new K,AM=new K,RM=new Rs,Zg=new K(1,0,0),Kg=new K(0,1,0),Qg=new K(0,0,1),Jg={type:"added"},CM={type:"removed"},vr={type:"childadded",child:null},dh={type:"childremoved",child:null};class An extends Cs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:bM++}),this.uuid=Wo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=An.DEFAULT_UP.clone();const t=new K,i=new zi,s=new Rs,l=new K(1,1,1);function c(){s.setFromEuler(i,!1)}function h(){i.setFromQuaternion(s,void 0,!1)}i._onChange(c),s._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new Ke},normalMatrix:{value:new fe}}),this.matrix=new Ke,this.matrixWorld=new Ke,this.matrixAutoUpdate=An.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=An.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Bd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return gr.setFromAxisAngle(t,i),this.quaternion.multiply(gr),this}rotateOnWorldAxis(t,i){return gr.setFromAxisAngle(t,i),this.quaternion.premultiply(gr),this}rotateX(t){return this.rotateOnAxis(Zg,t)}rotateY(t){return this.rotateOnAxis(Kg,t)}rotateZ(t){return this.rotateOnAxis(Qg,t)}translateOnAxis(t,i){return jg.copy(t).applyQuaternion(this.quaternion),this.position.add(jg.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(Zg,t)}translateY(t){return this.translateOnAxis(Kg,t)}translateZ(t){return this.translateOnAxis(Qg,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ia.copy(this.matrixWorld).invert())}lookAt(t,i,s){t.isVector3?uc.copy(t):uc.set(t,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),Oo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ia.lookAt(Oo,uc,this.up):ia.lookAt(uc,Oo,this.up),this.quaternion.setFromRotationMatrix(ia),l&&(ia.extractRotation(l.matrixWorld),gr.setFromRotationMatrix(ia),this.quaternion.premultiply(gr.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Jg),vr.child=t,this.dispatchEvent(vr),vr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(CM),dh.child=t,this.dispatchEvent(dh),dh.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ia.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ia.multiply(t.parent.matrixWorld)),t.applyMatrix4(ia),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Jg),vr.child=t,this.dispatchEvent(vr),vr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const h=this.children[s].getObjectByProperty(t,i);if(h!==void 0)return h}}getObjectsByProperty(t,i,s=[]){this[t]===i&&s.push(this);const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].getObjectsByProperty(t,i,s);return s}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Oo,t,AM),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Oo,RM,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(t)}updateWorldMatrix(t,i){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",s={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(d=>({...d})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(t.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,_=m.length;p<_;p++){const g=m[p];c(t.shapes,g)}else c(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(c(t.materials,this.material[m]));l.material=d}else l.material=c(t.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];l.animations.push(c(t.animations,m))}}if(i){const d=h(t.geometries),m=h(t.materials),p=h(t.textures),_=h(t.images),g=h(t.shapes),y=h(t.skeletons),x=h(t.animations),b=h(t.nodes);d.length>0&&(s.geometries=d),m.length>0&&(s.materials=m),p.length>0&&(s.textures=p),_.length>0&&(s.images=_),g.length>0&&(s.shapes=g),y.length>0&&(s.skeletons=y),x.length>0&&(s.animations=x),b.length>0&&(s.nodes=b)}return s.object=l,s;function h(d){const m=[];for(const p in d){const _=d[p];delete _.metadata,m.push(_)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let s=0;s<t.children.length;s++){const l=t.children[s];this.add(l.clone())}return this}}An.DEFAULT_UP=new K(0,1,0);An.DEFAULT_MATRIX_AUTO_UPDATE=!0;An.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const xi=new K,aa=new K,ph=new K,sa=new K,Sr=new K,yr=new K,$g=new K,mh=new K,_h=new K,gh=new K,vh=new tn,Sh=new tn,yh=new tn;class Mi{constructor(t=new K,i=new K,s=new K){this.a=t,this.b=i,this.c=s}static getNormal(t,i,s,l){l.subVectors(s,i),xi.subVectors(t,i),l.cross(xi);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(t,i,s,l,c){xi.subVectors(l,i),aa.subVectors(s,i),ph.subVectors(t,i);const h=xi.dot(xi),d=xi.dot(aa),m=xi.dot(ph),p=aa.dot(aa),_=aa.dot(ph),g=h*p-d*d;if(g===0)return c.set(0,0,0),null;const y=1/g,x=(p*m-d*_)*y,b=(h*_-d*m)*y;return c.set(1-x-b,b,x)}static containsPoint(t,i,s,l){return this.getBarycoord(t,i,s,l,sa)===null?!1:sa.x>=0&&sa.y>=0&&sa.x+sa.y<=1}static getInterpolation(t,i,s,l,c,h,d,m){return this.getBarycoord(t,i,s,l,sa)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,sa.x),m.addScaledVector(h,sa.y),m.addScaledVector(d,sa.z),m)}static getInterpolatedAttribute(t,i,s,l,c,h){return vh.setScalar(0),Sh.setScalar(0),yh.setScalar(0),vh.fromBufferAttribute(t,i),Sh.fromBufferAttribute(t,s),yh.fromBufferAttribute(t,l),h.setScalar(0),h.addScaledVector(vh,c.x),h.addScaledVector(Sh,c.y),h.addScaledVector(yh,c.z),h}static isFrontFacing(t,i,s,l){return xi.subVectors(s,i),aa.subVectors(t,i),xi.cross(aa).dot(l)<0}set(t,i,s){return this.a.copy(t),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(t,i,s,l){return this.a.copy(t[i]),this.b.copy(t[s]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,s,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,s),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return xi.subVectors(this.c,this.b),aa.subVectors(this.a,this.b),xi.cross(aa).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Mi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return Mi.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,s,l,c){return Mi.getInterpolation(t,this.a,this.b,this.c,i,s,l,c)}containsPoint(t){return Mi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Mi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const s=this.a,l=this.b,c=this.c;let h,d;Sr.subVectors(l,s),yr.subVectors(c,s),mh.subVectors(t,s);const m=Sr.dot(mh),p=yr.dot(mh);if(m<=0&&p<=0)return i.copy(s);_h.subVectors(t,l);const _=Sr.dot(_h),g=yr.dot(_h);if(_>=0&&g<=_)return i.copy(l);const y=m*g-_*p;if(y<=0&&m>=0&&_<=0)return h=m/(m-_),i.copy(s).addScaledVector(Sr,h);gh.subVectors(t,c);const x=Sr.dot(gh),b=yr.dot(gh);if(b>=0&&x<=b)return i.copy(c);const R=x*p-m*b;if(R<=0&&p>=0&&b<=0)return d=p/(p-b),i.copy(s).addScaledVector(yr,d);const M=_*b-x*g;if(M<=0&&g-_>=0&&x-b>=0)return $g.subVectors(c,l),d=(g-_)/(g-_+(x-b)),i.copy(l).addScaledVector($g,d);const S=1/(M+R+y);return h=R*S,d=y*S,i.copy(s).addScaledVector(Sr,h).addScaledVector(yr,d)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const ov={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ga={h:0,s:0,l:0},fc={h:0,s:0,l:0};function xh(r,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?r+(t-r)*6*i:i<1/2?t:i<2/3?r+(t-r)*6*(2/3-i):r}class Me{constructor(t,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,s)}set(t,i,s){if(i===void 0&&s===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,s);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=pi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,we.colorSpaceToWorking(this,i),this}setRGB(t,i,s,l=we.workingColorSpace){return this.r=t,this.g=i,this.b=s,we.colorSpaceToWorking(this,l),this}setHSL(t,i,s,l=we.workingColorSpace){if(t=hM(t,1),i=ve(i,0,1),s=ve(s,0,1),i===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+i):s+i-s*i,h=2*s-c;this.r=xh(h,c,t+1/3),this.g=xh(h,c,t),this.b=xh(h,c,t-1/3)}return we.colorSpaceToWorking(this,l),this}setStyle(t,i=pi){function s(c){c!==void 0&&parseFloat(c)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const h=l[1],d=l[2];switch(h){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=l[1],h=c.length;if(h===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(c,16),i);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=pi){const s=ov[t.toLowerCase()];return s!==void 0?this.setHex(s,i):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=fa(t.r),this.g=fa(t.g),this.b=fa(t.b),this}copyLinearToSRGB(t){return this.r=wr(t.r),this.g=wr(t.g),this.b=wr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=pi){return we.workingToColorSpace(Dn.copy(this),t),Math.round(ve(Dn.r*255,0,255))*65536+Math.round(ve(Dn.g*255,0,255))*256+Math.round(ve(Dn.b*255,0,255))}getHexString(t=pi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=we.workingColorSpace){we.workingToColorSpace(Dn.copy(this),i);const s=Dn.r,l=Dn.g,c=Dn.b,h=Math.max(s,l,c),d=Math.min(s,l,c);let m,p;const _=(d+h)/2;if(d===h)m=0,p=0;else{const g=h-d;switch(p=_<=.5?g/(h+d):g/(2-h-d),h){case s:m=(l-c)/g+(l<c?6:0);break;case l:m=(c-s)/g+2;break;case c:m=(s-l)/g+4;break}m/=6}return t.h=m,t.s=p,t.l=_,t}getRGB(t,i=we.workingColorSpace){return we.workingToColorSpace(Dn.copy(this),i),t.r=Dn.r,t.g=Dn.g,t.b=Dn.b,t}getStyle(t=pi){we.workingToColorSpace(Dn.copy(this),t);const i=Dn.r,s=Dn.g,l=Dn.b;return t!==pi?`color(${t} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(t,i,s){return this.getHSL(Ga),this.setHSL(Ga.h+t,Ga.s+i,Ga.l+s)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,s){return this.r=t.r+(i.r-t.r)*s,this.g=t.g+(i.g-t.g)*s,this.b=t.b+(i.b-t.b)*s,this}lerpHSL(t,i){this.getHSL(Ga),t.getHSL(fc);const s=ih(Ga.h,fc.h,i),l=ih(Ga.s,fc.s,i),c=ih(Ga.l,fc.l,i);return this.setHSL(s,l,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,s=this.g,l=this.b,c=t.elements;return this.r=c[0]*i+c[3]*s+c[6]*l,this.g=c[1]*i+c[4]*s+c[7]*l,this.b=c[2]*i+c[5]*s+c[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Dn=new Me;Me.NAMES=ov;let wM=0;class zr extends Cs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:wM++}),this.uuid=Wo(),this.name="",this.type="Material",this.blending=Cr,this.side=Ya,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Bh,this.blendDst=Ih,this.blendEquation=xs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Me(0,0,0),this.blendAlpha=0,this.depthFunc=Dr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Fg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=fr,this.stencilZFail=fr,this.stencilZPass=fr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const s=t[i];if(s===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(t).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(t).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(t).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(t).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(t).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Cr&&(s.blending=this.blending),this.side!==Ya&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==Bh&&(s.blendSrc=this.blendSrc),this.blendDst!==Ih&&(s.blendDst=this.blendDst),this.blendEquation!==xs&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Dr&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Fg&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==fr&&(s.stencilFail=this.stencilFail),this.stencilZFail!==fr&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==fr&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(c){const h=[];for(const d in c){const m=c[d];delete m.metadata,h.push(m)}return h}if(i){const c=l(t.textures),h=l(t.images);c.length>0&&(s.textures=c),h.length>0&&(s.images=h)}return s}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let c=0;c!==l;++c)s[c]=i[c].clone()}return this.clippingPlanes=s,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class lv extends zr{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Me(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zi,this.combine=j0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const fn=new K,hc=new ce;let DM=0;class Ti{constructor(t,i,s=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:DM++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=s,this.usage=Hg,this.updateRanges=[],this.gpuType=ca,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,s){t*=this.itemSize,s*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[t+l]=i.array[s+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)hc.fromBufferAttribute(this,i),hc.applyMatrix3(t),this.setXY(i,hc.x,hc.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)fn.fromBufferAttribute(this,i),fn.applyMatrix3(t),this.setXYZ(i,fn.x,fn.y,fn.z);return this}applyMatrix4(t){for(let i=0,s=this.count;i<s;i++)fn.fromBufferAttribute(this,i),fn.applyMatrix4(t),this.setXYZ(i,fn.x,fn.y,fn.z);return this}applyNormalMatrix(t){for(let i=0,s=this.count;i<s;i++)fn.fromBufferAttribute(this,i),fn.applyNormalMatrix(t),this.setXYZ(i,fn.x,fn.y,fn.z);return this}transformDirection(t){for(let i=0,s=this.count;i<s;i++)fn.fromBufferAttribute(this,i),fn.transformDirection(t),this.setXYZ(i,fn.x,fn.y,fn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let s=this.array[t*this.itemSize+i];return this.normalized&&(s=Uo(s,this.array)),s}setComponent(t,i,s){return this.normalized&&(s=kn(s,this.array)),this.array[t*this.itemSize+i]=s,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=Uo(i,this.array)),i}setX(t,i){return this.normalized&&(i=kn(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=Uo(i,this.array)),i}setY(t,i){return this.normalized&&(i=kn(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=Uo(i,this.array)),i}setZ(t,i){return this.normalized&&(i=kn(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=Uo(i,this.array)),i}setW(t,i){return this.normalized&&(i=kn(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,s){return t*=this.itemSize,this.normalized&&(i=kn(i,this.array),s=kn(s,this.array)),this.array[t+0]=i,this.array[t+1]=s,this}setXYZ(t,i,s,l){return t*=this.itemSize,this.normalized&&(i=kn(i,this.array),s=kn(s,this.array),l=kn(l,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this}setXYZW(t,i,s,l,c){return t*=this.itemSize,this.normalized&&(i=kn(i,this.array),s=kn(s,this.array),l=kn(l,this.array),c=kn(c,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Hg&&(t.usage=this.usage),t}}class cv extends Ti{constructor(t,i,s){super(new Uint16Array(t),i,s)}}class uv extends Ti{constructor(t,i,s){super(new Uint32Array(t),i,s)}}class ii extends Ti{constructor(t,i,s){super(new Float32Array(t),i,s)}}let UM=0;const di=new Ke,Mh=new An,xr=new K,ei=new Pr,Po=new Pr,Sn=new K;class bi extends Cs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:UM++}),this.uuid=Wo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(rv(t)?uv:cv)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,s=0){this.groups.push({start:t,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new fe().getNormalMatrix(t);s.applyNormalMatrix(c),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return di.makeRotationFromQuaternion(t),this.applyMatrix4(di),this}rotateX(t){return di.makeRotationX(t),this.applyMatrix4(di),this}rotateY(t){return di.makeRotationY(t),this.applyMatrix4(di),this}rotateZ(t){return di.makeRotationZ(t),this.applyMatrix4(di),this}translate(t,i,s){return di.makeTranslation(t,i,s),this.applyMatrix4(di),this}scale(t,i,s){return di.makeScale(t,i,s),this.applyMatrix4(di),this}lookAt(t){return Mh.lookAt(t),Mh.updateMatrix(),this.applyMatrix4(Mh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(xr).negate(),this.translate(xr.x,xr.y,xr.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,c=t.length;l<c;l++){const h=t[l];s.push(h.x,h.y,h.z||0)}this.setAttribute("position",new ii(s,3))}else{const s=Math.min(t.length,i.count);for(let l=0;l<s;l++){const c=t[l];i.setXYZ(l,c.x,c.y,c.z||0)}t.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Pr);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new K(-1/0,-1/0,-1/0),new K(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let s=0,l=i.length;s<l;s++){const c=i[s];ei.setFromBufferAttribute(c),this.morphTargetsRelative?(Sn.addVectors(this.boundingBox.min,ei.min),this.boundingBox.expandByPoint(Sn),Sn.addVectors(this.boundingBox.max,ei.max),this.boundingBox.expandByPoint(Sn)):(this.boundingBox.expandByPoint(ei.min),this.boundingBox.expandByPoint(ei.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Fc);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new K,1/0);return}if(t){const s=this.boundingSphere.center;if(ei.setFromBufferAttribute(t),i)for(let c=0,h=i.length;c<h;c++){const d=i[c];Po.setFromBufferAttribute(d),this.morphTargetsRelative?(Sn.addVectors(ei.min,Po.min),ei.expandByPoint(Sn),Sn.addVectors(ei.max,Po.max),ei.expandByPoint(Sn)):(ei.expandByPoint(Po.min),ei.expandByPoint(Po.max))}ei.getCenter(s);let l=0;for(let c=0,h=t.count;c<h;c++)Sn.fromBufferAttribute(t,c),l=Math.max(l,s.distanceToSquared(Sn));if(i)for(let c=0,h=i.length;c<h;c++){const d=i[c],m=this.morphTargetsRelative;for(let p=0,_=d.count;p<_;p++)Sn.fromBufferAttribute(d,p),m&&(xr.fromBufferAttribute(t,p),Sn.add(xr)),l=Math.max(l,s.distanceToSquared(Sn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ti(new Float32Array(4*s.count),4));const h=this.getAttribute("tangent"),d=[],m=[];for(let Y=0;Y<s.count;Y++)d[Y]=new K,m[Y]=new K;const p=new K,_=new K,g=new K,y=new ce,x=new ce,b=new ce,R=new K,M=new K;function S(Y,C,w){p.fromBufferAttribute(s,Y),_.fromBufferAttribute(s,C),g.fromBufferAttribute(s,w),y.fromBufferAttribute(c,Y),x.fromBufferAttribute(c,C),b.fromBufferAttribute(c,w),_.sub(p),g.sub(p),x.sub(y),b.sub(y);const V=1/(x.x*b.y-b.x*x.y);isFinite(V)&&(R.copy(_).multiplyScalar(b.y).addScaledVector(g,-x.y).multiplyScalar(V),M.copy(g).multiplyScalar(x.x).addScaledVector(_,-b.x).multiplyScalar(V),d[Y].add(R),d[C].add(R),d[w].add(R),m[Y].add(M),m[C].add(M),m[w].add(M))}let H=this.groups;H.length===0&&(H=[{start:0,count:t.count}]);for(let Y=0,C=H.length;Y<C;++Y){const w=H[Y],V=w.start,it=w.count;for(let ot=V,ft=V+it;ot<ft;ot+=3)S(t.getX(ot+0),t.getX(ot+1),t.getX(ot+2))}const O=new K,D=new K,F=new K,z=new K;function B(Y){F.fromBufferAttribute(l,Y),z.copy(F);const C=d[Y];O.copy(C),O.sub(F.multiplyScalar(F.dot(C))).normalize(),D.crossVectors(z,C);const V=D.dot(m[Y])<0?-1:1;h.setXYZW(Y,O.x,O.y,O.z,V)}for(let Y=0,C=H.length;Y<C;++Y){const w=H[Y],V=w.start,it=w.count;for(let ot=V,ft=V+it;ot<ft;ot+=3)B(t.getX(ot+0)),B(t.getX(ot+1)),B(t.getX(ot+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new Ti(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let y=0,x=s.count;y<x;y++)s.setXYZ(y,0,0,0);const l=new K,c=new K,h=new K,d=new K,m=new K,p=new K,_=new K,g=new K;if(t)for(let y=0,x=t.count;y<x;y+=3){const b=t.getX(y+0),R=t.getX(y+1),M=t.getX(y+2);l.fromBufferAttribute(i,b),c.fromBufferAttribute(i,R),h.fromBufferAttribute(i,M),_.subVectors(h,c),g.subVectors(l,c),_.cross(g),d.fromBufferAttribute(s,b),m.fromBufferAttribute(s,R),p.fromBufferAttribute(s,M),d.add(_),m.add(_),p.add(_),s.setXYZ(b,d.x,d.y,d.z),s.setXYZ(R,m.x,m.y,m.z),s.setXYZ(M,p.x,p.y,p.z)}else for(let y=0,x=i.count;y<x;y+=3)l.fromBufferAttribute(i,y+0),c.fromBufferAttribute(i,y+1),h.fromBufferAttribute(i,y+2),_.subVectors(h,c),g.subVectors(l,c),_.cross(g),s.setXYZ(y+0,_.x,_.y,_.z),s.setXYZ(y+1,_.x,_.y,_.z),s.setXYZ(y+2,_.x,_.y,_.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,s=t.count;i<s;i++)Sn.fromBufferAttribute(t,i),Sn.normalize(),t.setXYZ(i,Sn.x,Sn.y,Sn.z)}toNonIndexed(){function t(d,m){const p=d.array,_=d.itemSize,g=d.normalized,y=new p.constructor(m.length*_);let x=0,b=0;for(let R=0,M=m.length;R<M;R++){d.isInterleavedBufferAttribute?x=m[R]*d.data.stride+d.offset:x=m[R]*_;for(let S=0;S<_;S++)y[b++]=p[x++]}return new Ti(y,_,g)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new bi,s=this.index.array,l=this.attributes;for(const d in l){const m=l[d],p=t(m,s);i.setAttribute(d,p)}const c=this.morphAttributes;for(const d in c){const m=[],p=c[d];for(let _=0,g=p.length;_<g;_++){const y=p[_],x=t(y,s);m.push(x)}i.morphAttributes[d]=m}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,m=h.length;d<m;d++){const p=h[d];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(t[p]=m[p]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const p=s[m];t.data.attributes[m]=p.toJSON(t.data)}const l={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],_=[];for(let g=0,y=p.length;g<y;g++){const x=p[g];_.push(x.toJSON(t.data))}_.length>0&&(l[m]=_,c=!0)}c&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(t.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(t.data.boundingSphere=d.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const s=t.index;s!==null&&this.setIndex(s.clone());const l=t.attributes;for(const p in l){const _=l[p];this.setAttribute(p,_.clone(i))}const c=t.morphAttributes;for(const p in c){const _=[],g=c[p];for(let y=0,x=g.length;y<x;y++)_.push(g[y].clone(i));this.morphAttributes[p]=_}this.morphTargetsRelative=t.morphTargetsRelative;const h=t.groups;for(let p=0,_=h.length;p<_;p++){const g=h[p];this.addGroup(g.start,g.count,g.materialIndex)}const d=t.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const t0=new Ke,_s=new Hc,dc=new Fc,e0=new K,pc=new K,mc=new K,_c=new K,Eh=new K,gc=new K,n0=new K,vc=new K;class ua extends An{constructor(t=new bi,i=new lv){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}getVertexPosition(t,i){const s=this.geometry,l=s.attributes.position,c=s.morphAttributes.position,h=s.morphTargetsRelative;i.fromBufferAttribute(l,t);const d=this.morphTargetInfluences;if(c&&d){gc.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const _=d[m],g=c[m];_!==0&&(Eh.fromBufferAttribute(g,t),h?gc.addScaledVector(Eh,_):gc.addScaledVector(Eh.sub(i),_))}i.add(gc)}return i}raycast(t,i){const s=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),dc.copy(s.boundingSphere),dc.applyMatrix4(c),_s.copy(t.ray).recast(t.near),!(dc.containsPoint(_s.origin)===!1&&(_s.intersectSphere(dc,e0)===null||_s.origin.distanceToSquared(e0)>(t.far-t.near)**2))&&(t0.copy(c).invert(),_s.copy(t.ray).applyMatrix4(t0),!(s.boundingBox!==null&&_s.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(t,i,_s)))}_computeIntersections(t,i,s){let l;const c=this.geometry,h=this.material,d=c.index,m=c.attributes.position,p=c.attributes.uv,_=c.attributes.uv1,g=c.attributes.normal,y=c.groups,x=c.drawRange;if(d!==null)if(Array.isArray(h))for(let b=0,R=y.length;b<R;b++){const M=y[b],S=h[M.materialIndex],H=Math.max(M.start,x.start),O=Math.min(d.count,Math.min(M.start+M.count,x.start+x.count));for(let D=H,F=O;D<F;D+=3){const z=d.getX(D),B=d.getX(D+1),Y=d.getX(D+2);l=Sc(this,S,t,s,p,_,g,z,B,Y),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const b=Math.max(0,x.start),R=Math.min(d.count,x.start+x.count);for(let M=b,S=R;M<S;M+=3){const H=d.getX(M),O=d.getX(M+1),D=d.getX(M+2);l=Sc(this,h,t,s,p,_,g,H,O,D),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(h))for(let b=0,R=y.length;b<R;b++){const M=y[b],S=h[M.materialIndex],H=Math.max(M.start,x.start),O=Math.min(m.count,Math.min(M.start+M.count,x.start+x.count));for(let D=H,F=O;D<F;D+=3){const z=D,B=D+1,Y=D+2;l=Sc(this,S,t,s,p,_,g,z,B,Y),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const b=Math.max(0,x.start),R=Math.min(m.count,x.start+x.count);for(let M=b,S=R;M<S;M+=3){const H=M,O=M+1,D=M+2;l=Sc(this,h,t,s,p,_,g,H,O,D),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}}}function LM(r,t,i,s,l,c,h,d){let m;if(t.side===Wn?m=s.intersectTriangle(h,c,l,!0,d):m=s.intersectTriangle(l,c,h,t.side===Ya,d),m===null)return null;vc.copy(d),vc.applyMatrix4(r.matrixWorld);const p=i.ray.origin.distanceTo(vc);return p<i.near||p>i.far?null:{distance:p,point:vc.clone(),object:r}}function Sc(r,t,i,s,l,c,h,d,m,p){r.getVertexPosition(d,pc),r.getVertexPosition(m,mc),r.getVertexPosition(p,_c);const _=LM(r,t,i,s,pc,mc,_c,n0);if(_){const g=new K;Mi.getBarycoord(n0,pc,mc,_c,g),l&&(_.uv=Mi.getInterpolatedAttribute(l,d,m,p,g,new ce)),c&&(_.uv1=Mi.getInterpolatedAttribute(c,d,m,p,g,new ce)),h&&(_.normal=Mi.getInterpolatedAttribute(h,d,m,p,g,new K),_.normal.dot(s.direction)>0&&_.normal.multiplyScalar(-1));const y={a:d,b:m,c:p,normal:new K,materialIndex:0};Mi.getNormal(pc,mc,_c,y.normal),_.face=y,_.barycoord=g}return _}class qo extends bi{constructor(t=1,i=1,s=1,l=1,c=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:s,widthSegments:l,heightSegments:c,depthSegments:h};const d=this;l=Math.floor(l),c=Math.floor(c),h=Math.floor(h);const m=[],p=[],_=[],g=[];let y=0,x=0;b("z","y","x",-1,-1,s,i,t,h,c,0),b("z","y","x",1,-1,s,i,-t,h,c,1),b("x","z","y",1,1,t,s,i,l,h,2),b("x","z","y",1,-1,t,s,-i,l,h,3),b("x","y","z",1,-1,t,i,s,l,c,4),b("x","y","z",-1,-1,t,i,-s,l,c,5),this.setIndex(m),this.setAttribute("position",new ii(p,3)),this.setAttribute("normal",new ii(_,3)),this.setAttribute("uv",new ii(g,2));function b(R,M,S,H,O,D,F,z,B,Y,C){const w=D/B,V=F/Y,it=D/2,ot=F/2,ft=z/2,pt=B+1,N=Y+1;let Z=0,X=0;const St=new K;for(let Mt=0;Mt<N;Mt++){const L=Mt*V-ot;for(let et=0;et<pt;et++){const yt=et*w-it;St[R]=yt*H,St[M]=L*O,St[S]=ft,p.push(St.x,St.y,St.z),St[R]=0,St[M]=0,St[S]=z>0?1:-1,_.push(St.x,St.y,St.z),g.push(et/B),g.push(1-Mt/Y),Z+=1}}for(let Mt=0;Mt<Y;Mt++)for(let L=0;L<B;L++){const et=y+L+pt*Mt,yt=y+L+pt*(Mt+1),At=y+(L+1)+pt*(Mt+1),Ut=y+(L+1)+pt*Mt;m.push(et,yt,Ut),m.push(yt,At,Ut),X+=6}d.addGroup(x,X,C),x+=X,y+=Z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new qo(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Or(r){const t={};for(const i in r){t[i]={};for(const s in r[i]){const l=r[i][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][s]=null):t[i][s]=l.clone():Array.isArray(l)?t[i][s]=l.slice():t[i][s]=l}}return t}function On(r){const t={};for(let i=0;i<r.length;i++){const s=Or(r[i]);for(const l in s)t[l]=s[l]}return t}function NM(r){const t=[];for(let i=0;i<r.length;i++)t.push(r[i].clone());return t}function fv(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:we.workingColorSpace}const OM={clone:Or,merge:On};var PM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,zM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ha extends zr{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=PM,this.fragmentShader=zM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Or(t.uniforms),this.uniformsGroups=NM(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(t).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class hv extends An{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ke,this.projectionMatrix=new Ke,this.projectionMatrixInverse=new Ke,this.coordinateSystem=Oi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Va=new K,i0=new ce,a0=new ce;class mi extends hv{constructor(t=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=Td*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Uc*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Td*2*Math.atan(Math.tan(Uc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,s){Va.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Va.x,Va.y).multiplyScalar(-t/Va.z),Va.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(Va.x,Va.y).multiplyScalar(-t/Va.z)}getViewSize(t,i){return this.getViewBounds(t,i0,a0),i.subVectors(a0,i0)}setViewOffset(t,i,s,l,c,h){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(Uc*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,c=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const m=h.fullWidth,p=h.fullHeight;c+=h.offsetX*l/m,i-=h.offsetY*s/p,l*=h.width/m,s*=h.height/p}const d=this.filmOffset;d!==0&&(c+=t*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-s,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const Mr=-90,Er=1;class BM extends An{constructor(t,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new mi(Mr,Er,t,i);l.layers=this.layers,this.add(l);const c=new mi(Mr,Er,t,i);c.layers=this.layers,this.add(c);const h=new mi(Mr,Er,t,i);h.layers=this.layers,this.add(h);const d=new mi(Mr,Er,t,i);d.layers=this.layers,this.add(d);const m=new mi(Mr,Er,t,i);m.layers=this.layers,this.add(m);const p=new mi(Mr,Er,t,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[s,l,c,h,d,m]=i;for(const p of i)this.remove(p);if(t===Oi)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===Oc)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of i)this.add(p),p.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,h,d,m,p,_]=this.children,g=t.getRenderTarget(),y=t.getActiveCubeFace(),x=t.getActiveMipmapLevel(),b=t.xr.enabled;t.xr.enabled=!1;const R=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,t.setRenderTarget(s,0,l),t.render(i,c),t.setRenderTarget(s,1,l),t.render(i,h),t.setRenderTarget(s,2,l),t.render(i,d),t.setRenderTarget(s,3,l),t.render(i,m),t.setRenderTarget(s,4,l),t.render(i,p),s.texture.generateMipmaps=R,t.setRenderTarget(s,5,l),t.render(i,_),t.setRenderTarget(g,y,x),t.xr.enabled=b,s.texture.needsPMREMUpdate=!0}}class dv extends Pn{constructor(t=[],i=Ur,s,l,c,h,d,m,p,_){super(t,i,s,l,c,h,d,m,p,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class IM extends ja{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const s={width:t,height:t,depth:1},l=[s,s,s,s,s,s];this.texture=new dv(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new qo(5,5,5),c=new ha({name:"CubemapFromEquirect",uniforms:Or(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Wn,blending:Wa});c.uniforms.tEquirect.value=i;const h=new ua(l,c),d=i.minFilter;return i.minFilter===Ts&&(i.minFilter=Ni),new BM(1,10,this).update(t,h),i.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(t,i=!0,s=!0,l=!0){const c=t.getRenderTarget();for(let h=0;h<6;h++)t.setRenderTarget(this,h),t.clear(i,s,l);t.setRenderTarget(c)}}class Bo extends An{constructor(){super(),this.isGroup=!0,this.type="Group"}}const FM={type:"move"};class Th{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Bo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Bo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new K,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new K),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Bo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new K,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new K),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const s of t.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,s){let l=null,c=null,h=null;const d=this._targetRay,m=this._grip,p=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(p&&t.hand){h=!0;for(const R of t.hand.values()){const M=i.getJointPose(R,s),S=this._getHandJoint(p,R);M!==null&&(S.matrix.fromArray(M.transform.matrix),S.matrix.decompose(S.position,S.rotation,S.scale),S.matrixWorldNeedsUpdate=!0,S.jointRadius=M.radius),S.visible=M!==null}const _=p.joints["index-finger-tip"],g=p.joints["thumb-tip"],y=_.position.distanceTo(g.position),x=.02,b=.005;p.inputState.pinching&&y>x+b?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&y<=x-b&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(c=i.getPose(t.gripSpace,s),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));d!==null&&(l=i.getPose(t.targetRaySpace,s),l===null&&c!==null&&(l=c),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(FM)))}return d!==null&&(d.visible=l!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=h!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const s=new Bo;s.matrixAutoUpdate=!1,s.visible=!1,t.joints[i.jointName]=s,t.add(s)}return t.joints[i.jointName]}}class HM extends An{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new zi,this.environmentIntensity=1,this.environmentRotation=new zi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class hR extends Pn{constructor(t=null,i=1,s=1,l,c,h,d,m,p=ni,_=ni,g,y){super(null,h,d,m,p,_,l,c,g,y),this.isDataTexture=!0,this.image={data:t,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class dR extends Ti{constructor(t,i,s,l=1){super(t,i,s),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=l}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const bh=new K,GM=new K,VM=new fe;class ka{constructor(t=new K(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,s,l){return this.normal.set(t,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,s){const l=bh.subVectors(s,i).cross(GM.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const s=t.delta(bh),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const c=-(t.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(t.start).addScaledVector(s,c)}intersectsLine(t){const i=this.distanceToPoint(t.start),s=this.distanceToPoint(t.end);return i<0&&s>0||s<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const s=i||VM.getNormalMatrix(t),l=this.coplanarPoint(bh).applyMatrix4(t),c=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const gs=new Fc,kM=new ce(.5,.5),yc=new K;class Id{constructor(t=new ka,i=new ka,s=new ka,l=new ka,c=new ka,h=new ka){this.planes=[t,i,s,l,c,h]}set(t,i,s,l,c,h){const d=this.planes;return d[0].copy(t),d[1].copy(i),d[2].copy(s),d[3].copy(l),d[4].copy(c),d[5].copy(h),this}copy(t){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(t.planes[s]);return this}setFromProjectionMatrix(t,i=Oi,s=!1){const l=this.planes,c=t.elements,h=c[0],d=c[1],m=c[2],p=c[3],_=c[4],g=c[5],y=c[6],x=c[7],b=c[8],R=c[9],M=c[10],S=c[11],H=c[12],O=c[13],D=c[14],F=c[15];if(l[0].setComponents(p-h,x-_,S-b,F-H).normalize(),l[1].setComponents(p+h,x+_,S+b,F+H).normalize(),l[2].setComponents(p+d,x+g,S+R,F+O).normalize(),l[3].setComponents(p-d,x-g,S-R,F-O).normalize(),s)l[4].setComponents(m,y,M,D).normalize(),l[5].setComponents(p-m,x-y,S-M,F-D).normalize();else if(l[4].setComponents(p-m,x-y,S-M,F-D).normalize(),i===Oi)l[5].setComponents(p+m,x+y,S+M,F+D).normalize();else if(i===Oc)l[5].setComponents(m,y,M,D).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),gs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),gs.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(gs)}intersectsSprite(t){gs.center.set(0,0,0);const i=kM.distanceTo(t.center);return gs.radius=.7071067811865476+i,gs.applyMatrix4(t.matrixWorld),this.intersectsSphere(gs)}intersectsSphere(t){const i=this.planes,s=t.center,l=-t.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(s)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(yc.x=l.normal.x>0?t.max.x:t.min.x,yc.y=l.normal.y>0?t.max.y:t.min.y,yc.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(yc)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Fd extends zr{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Me(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const zc=new K,Bc=new K,s0=new Ke,zo=new Hc,xc=new Fc,Ah=new K,r0=new K;class XM extends An{constructor(t=new bi,i=new Fd){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,s=[0];for(let l=1,c=i.count;l<c;l++)zc.fromBufferAttribute(i,l-1),Bc.fromBufferAttribute(i,l),s[l]=s[l-1],s[l]+=zc.distanceTo(Bc);t.setAttribute("lineDistance",new ii(s,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,i){const s=this.geometry,l=this.matrixWorld,c=t.params.Line.threshold,h=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),xc.copy(s.boundingSphere),xc.applyMatrix4(l),xc.radius+=c,t.ray.intersectsSphere(xc)===!1)return;s0.copy(l).invert(),zo.copy(t.ray).applyMatrix4(s0);const d=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=d*d,p=this.isLineSegments?2:1,_=s.index,y=s.attributes.position;if(_!==null){const x=Math.max(0,h.start),b=Math.min(_.count,h.start+h.count);for(let R=x,M=b-1;R<M;R+=p){const S=_.getX(R),H=_.getX(R+1),O=Mc(this,t,zo,m,S,H,R);O&&i.push(O)}if(this.isLineLoop){const R=_.getX(b-1),M=_.getX(x),S=Mc(this,t,zo,m,R,M,b-1);S&&i.push(S)}}else{const x=Math.max(0,h.start),b=Math.min(y.count,h.start+h.count);for(let R=x,M=b-1;R<M;R+=p){const S=Mc(this,t,zo,m,R,R+1,R);S&&i.push(S)}if(this.isLineLoop){const R=Mc(this,t,zo,m,b-1,x,b-1);R&&i.push(R)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}}function Mc(r,t,i,s,l,c,h){const d=r.geometry.attributes.position;if(zc.fromBufferAttribute(d,l),Bc.fromBufferAttribute(d,c),i.distanceSqToSegment(zc,Bc,Ah,r0)>s)return;Ah.applyMatrix4(r.matrixWorld);const p=t.ray.origin.distanceTo(Ah);if(!(p<t.near||p>t.far))return{distance:p,point:r0.clone().applyMatrix4(r.matrixWorld),index:h,face:null,faceIndex:null,barycoord:null,object:r}}const o0=new K,l0=new K;class pv extends XM{constructor(t,i){super(t,i),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,s=[];for(let l=0,c=i.count;l<c;l+=2)o0.fromBufferAttribute(i,l),l0.fromBufferAttribute(i,l+1),s[l]=l===0?0:s[l-1],s[l+1]=s[l]+o0.distanceTo(l0);t.setAttribute("lineDistance",new ii(s,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class mv extends Pn{constructor(t,i,s=As,l,c,h,d=ni,m=ni,p,_=Go,g=1){if(_!==Go&&_!==Vo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const y={width:t,height:i,depth:g};super(y,l,c,h,d,m,_,s,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Pd(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class _v extends Pn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Gc extends bi{constructor(t=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:s,heightSegments:l};const c=t/2,h=i/2,d=Math.floor(s),m=Math.floor(l),p=d+1,_=m+1,g=t/d,y=i/m,x=[],b=[],R=[],M=[];for(let S=0;S<_;S++){const H=S*y-h;for(let O=0;O<p;O++){const D=O*g-c;b.push(D,-H,0),R.push(0,0,1),M.push(O/d),M.push(1-S/m)}}for(let S=0;S<m;S++)for(let H=0;H<d;H++){const O=H+p*S,D=H+p*(S+1),F=H+1+p*(S+1),z=H+1+p*S;x.push(O,D,z),x.push(D,F,z)}this.setIndex(x),this.setAttribute("position",new ii(b,3)),this.setAttribute("normal",new ii(R,3)),this.setAttribute("uv",new ii(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Gc(t.width,t.height,t.widthSegments,t.heightSegments)}}class pR extends ha{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class mR extends zr{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Me(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Me(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=av,this.normalScale=new ce(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class WM extends zr{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=nM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class qM extends zr{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const c0={enabled:!1,files:{},add:function(r,t){this.enabled!==!1&&(this.files[r]=t)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class YM{constructor(t,i,s){const l=this;let c=!1,h=0,d=0,m;const p=[];this.onStart=void 0,this.onLoad=t,this.onProgress=i,this.onError=s,this.abortController=new AbortController,this.itemStart=function(_){d++,c===!1&&l.onStart!==void 0&&l.onStart(_,h,d),c=!0},this.itemEnd=function(_){h++,l.onProgress!==void 0&&l.onProgress(_,h,d),h===d&&(c=!1,l.onLoad!==void 0&&l.onLoad())},this.itemError=function(_){l.onError!==void 0&&l.onError(_)},this.resolveURL=function(_){return m?m(_):_},this.setURLModifier=function(_){return m=_,this},this.addHandler=function(_,g){return p.push(_,g),this},this.removeHandler=function(_){const g=p.indexOf(_);return g!==-1&&p.splice(g,2),this},this.getHandler=function(_){for(let g=0,y=p.length;g<y;g+=2){const x=p[g],b=p[g+1];if(x.global&&(x.lastIndex=0),x.test(_))return b}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}}const jM=new YM;class gv{constructor(t){this.manager=t!==void 0?t:jM,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,i){const s=this;return new Promise(function(l,c){s.load(t,l,i,c)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}}gv.DEFAULT_MATERIAL_NAME="__DEFAULT";const ra={};class ZM extends Error{constructor(t,i){super(t),this.response=i}}class _R extends gv{constructor(t){super(t),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(t,i,s,l){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const c=c0.get(`file:${t}`);if(c!==void 0)return this.manager.itemStart(t),setTimeout(()=>{i&&i(c),this.manager.itemEnd(t)},0),c;if(ra[t]!==void 0){ra[t].push({onLoad:i,onProgress:s,onError:l});return}ra[t]=[],ra[t].push({onLoad:i,onProgress:s,onError:l});const h=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),d=this.mimeType,m=this.responseType;fetch(h).then(p=>{if(p.status===200||p.status===0){if(p.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||p.body===void 0||p.body.getReader===void 0)return p;const _=ra[t],g=p.body.getReader(),y=p.headers.get("X-File-Size")||p.headers.get("Content-Length"),x=y?parseInt(y):0,b=x!==0;let R=0;const M=new ReadableStream({start(S){H();function H(){g.read().then(({done:O,value:D})=>{if(O)S.close();else{R+=D.byteLength;const F=new ProgressEvent("progress",{lengthComputable:b,loaded:R,total:x});for(let z=0,B=_.length;z<B;z++){const Y=_[z];Y.onProgress&&Y.onProgress(F)}S.enqueue(D),H()}},O=>{S.error(O)})}}});return new Response(M)}else throw new ZM(`fetch for "${p.url}" responded with ${p.status}: ${p.statusText}`,p)}).then(p=>{switch(m){case"arraybuffer":return p.arrayBuffer();case"blob":return p.blob();case"document":return p.text().then(_=>new DOMParser().parseFromString(_,d));case"json":return p.json();default:if(d==="")return p.text();{const g=/charset="?([^;"\s]*)"?/i.exec(d),y=g&&g[1]?g[1].toLowerCase():void 0,x=new TextDecoder(y);return p.arrayBuffer().then(b=>x.decode(b))}}}).then(p=>{c0.add(`file:${t}`,p);const _=ra[t];delete ra[t];for(let g=0,y=_.length;g<y;g++){const x=_[g];x.onLoad&&x.onLoad(p)}}).catch(p=>{const _=ra[t];if(_===void 0)throw this.manager.itemError(t),p;delete ra[t];for(let g=0,y=_.length;g<y;g++){const x=_[g];x.onError&&x.onError(p)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class vv extends An{constructor(t,i=1){super(),this.isLight=!0,this.type="Light",this.color=new Me(t),this.intensity=i}dispose(){}copy(t,i){return super.copy(t,i),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const i=super.toJSON(t);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(i.object.target=this.target.uuid),i}}const Rh=new Ke,u0=new K,f0=new K;class KM{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ce(512,512),this.mapType=Pi,this.map=null,this.mapPass=null,this.matrix=new Ke,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Id,this._frameExtents=new ce(1,1),this._viewportCount=1,this._viewports=[new tn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const i=this.camera,s=this.matrix;u0.setFromMatrixPosition(t.matrixWorld),i.position.copy(u0),f0.setFromMatrixPosition(t.target.matrixWorld),i.lookAt(f0),i.updateMatrixWorld(),Rh.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Rh,i.coordinateSystem,i.reversedDepth),i.reversedDepth?s.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(Rh)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Sv extends hv{constructor(t=-1,i=1,s=1,l=-1,c=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=s,this.bottom=l,this.near=c,this.far=h,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,s,l,c,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=s-t,h=s+t,d=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,h=c+p*this.view.width,d-=_*this.view.offsetY,m=d-_*this.view.height}this.projectionMatrix.makeOrthographic(c,h,d,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class QM extends KM{constructor(){super(new Sv(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class JM extends vv{constructor(t,i){super(t,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(An.DEFAULT_UP),this.updateMatrix(),this.target=new An,this.shadow=new QM}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class $M extends vv{constructor(t,i){super(t,i),this.isAmbientLight=!0,this.type="AmbientLight"}}class gR extends bi{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){const t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}}class tE extends mi{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class vR{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const i=performance.now();t=(i-this.oldTime)/1e3,this.oldTime=i,this.elapsedTime+=t}return t}}const h0=new Ke;class SR{constructor(t,i,s=0,l=1/0){this.ray=new Hc(t,i),this.near=s,this.far=l,this.camera=null,this.layers=new Bd,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,i){this.ray.set(t,i)}setFromCamera(t,i){i.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(i.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(i).sub(this.ray.origin).normalize(),this.camera=i):i.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(i.near+i.far)/(i.near-i.far)).unproject(i),this.ray.direction.set(0,0,-1).transformDirection(i.matrixWorld),this.camera=i):console.error("THREE.Raycaster: Unsupported camera type: "+i.type)}setFromXRController(t){return h0.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(h0),this}intersectObject(t,i=!0,s=[]){return bd(t,this,s,i),s.sort(d0),s}intersectObjects(t,i=!0,s=[]){for(let l=0,c=t.length;l<c;l++)bd(t[l],this,s,i);return s.sort(d0),s}}function d0(r,t){return r.distance-t.distance}function bd(r,t,i,s){let l=!0;if(r.layers.test(t.layers)&&r.raycast(t,i)===!1&&(l=!1),l===!0&&s===!0){const c=r.children;for(let h=0,d=c.length;h<d;h++)bd(c[h],t,i,!0)}}class p0{constructor(t=1,i=0,s=0){this.radius=t,this.phi=i,this.theta=s}set(t,i,s){return this.radius=t,this.phi=i,this.theta=s,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=ve(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,i,s){return this.radius=Math.sqrt(t*t+i*i+s*s),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,s),this.phi=Math.acos(ve(i/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class yv{constructor(t,i,s,l){yv.prototype.isMatrix2=!0,this.elements=[1,0,0,1],t!==void 0&&this.set(t,i,s,l)}identity(){return this.set(1,0,0,1),this}fromArray(t,i=0){for(let s=0;s<4;s++)this.elements[s]=t[s+i];return this}set(t,i,s,l){const c=this.elements;return c[0]=t,c[2]=i,c[1]=s,c[3]=l,this}}class eE extends pv{constructor(t=10,i=10,s=4473924,l=8947848){s=new Me(s),l=new Me(l);const c=i/2,h=t/i,d=t/2,m=[],p=[];for(let y=0,x=0,b=-d;y<=i;y++,b+=h){m.push(-d,0,b,d,0,b),m.push(b,0,-d,b,0,d);const R=y===c?s:l;R.toArray(p,x),x+=3,R.toArray(p,x),x+=3,R.toArray(p,x),x+=3,R.toArray(p,x),x+=3}const _=new bi;_.setAttribute("position",new ii(m,3)),_.setAttribute("color",new ii(p,3));const g=new Fd({vertexColors:!0,toneMapped:!1});super(_,g),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class nE extends pv{constructor(t=1){const i=[0,0,0,t,0,0,0,0,0,0,t,0,0,0,0,0,0,t],s=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],l=new bi;l.setAttribute("position",new ii(i,3)),l.setAttribute("color",new ii(s,3));const c=new Fd({vertexColors:!0,toneMapped:!1});super(l,c),this.type="AxesHelper"}setColors(t,i,s){const l=new Me,c=this.geometry.attributes.color.array;return l.set(t),l.toArray(c,0),l.toArray(c,3),l.set(i),l.toArray(c,6),l.toArray(c,9),l.set(s),l.toArray(c,12),l.toArray(c,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class iE extends Cs{constructor(t,i=null){super(),this.object=t,this.domElement=i,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function m0(r,t,i,s){const l=aE(s);switch(i){case tv:return r*t;case nv:return r*t/l.components*l.byteLength;case Ld:return r*t/l.components*l.byteLength;case iv:return r*t*2/l.components*l.byteLength;case Nd:return r*t*2/l.components*l.byteLength;case ev:return r*t*3/l.components*l.byteLength;case Ei:return r*t*4/l.components*l.byteLength;case Od:return r*t*4/l.components*l.byteLength;case Rc:case Cc:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case wc:case Dc:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Qh:case $h:return Math.max(r,16)*Math.max(t,8)/4;case Kh:case Jh:return Math.max(r,8)*Math.max(t,8)/2;case td:case ed:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case nd:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case id:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case ad:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case sd:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case rd:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case od:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case ld:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case cd:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case ud:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case fd:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case hd:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case dd:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case pd:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case md:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case _d:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case gd:case vd:case Sd:return Math.ceil(r/4)*Math.ceil(t/4)*16;case yd:case xd:return Math.ceil(r/4)*Math.ceil(t/4)*8;case Md:case Ed:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function aE(r){switch(r){case Pi:case K0:return{byteLength:1,components:1};case Fo:case Q0:case Xo:return{byteLength:2,components:1};case Dd:case Ud:return{byteLength:2,components:4};case As:case wd:case ca:return{byteLength:4,components:1};case J0:case $0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Cd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Cd);function xv(){let r=null,t=!1,i=null,s=null;function l(c,h){i(c,h),s=r.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(s=r.requestAnimationFrame(l),t=!0)},stop:function(){r.cancelAnimationFrame(s),t=!1},setAnimationLoop:function(c){i=c},setContext:function(c){r=c}}}function sE(r){const t=new WeakMap;function i(d,m){const p=d.array,_=d.usage,g=p.byteLength,y=r.createBuffer();r.bindBuffer(m,y),r.bufferData(m,p,_),d.onUploadCallback();let x;if(p instanceof Float32Array)x=r.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)x=r.HALF_FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?x=r.HALF_FLOAT:x=r.UNSIGNED_SHORT;else if(p instanceof Int16Array)x=r.SHORT;else if(p instanceof Uint32Array)x=r.UNSIGNED_INT;else if(p instanceof Int32Array)x=r.INT;else if(p instanceof Int8Array)x=r.BYTE;else if(p instanceof Uint8Array)x=r.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)x=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:y,type:x,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:g}}function s(d,m,p){const _=m.array,g=m.updateRanges;if(r.bindBuffer(p,d),g.length===0)r.bufferSubData(p,0,_);else{g.sort((x,b)=>x.start-b.start);let y=0;for(let x=1;x<g.length;x++){const b=g[y],R=g[x];R.start<=b.start+b.count+1?b.count=Math.max(b.count,R.start+R.count-b.start):(++y,g[y]=R)}g.length=y+1;for(let x=0,b=g.length;x<b;x++){const R=g[x];r.bufferSubData(p,R.start*_.BYTES_PER_ELEMENT,_,R.start,R.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),t.get(d)}function c(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=t.get(d);m&&(r.deleteBuffer(m.buffer),t.delete(d))}function h(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const _=t.get(d);(!_||_.version<d.version)&&t.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=t.get(d);if(p===void 0)t.set(d,i(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,d,m),p.version=d.version}}return{get:l,remove:c,update:h}}var rE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,oE=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,lE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,cE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,uE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,fE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,hE=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,dE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,pE=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,mE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,_E=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,gE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,vE=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,SE=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,yE=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,xE=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,ME=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,EE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,TE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,bE=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,AE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,RE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,CE=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,wE=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,DE=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,UE=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,LE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,NE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,OE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,PE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,zE="gl_FragColor = linearToOutputTexel( gl_FragColor );",BE=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,IE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,FE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,HE=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,GE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,VE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,kE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,XE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,WE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,qE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,YE=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,jE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ZE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,KE=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,QE=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,JE=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,$E=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,tT=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,eT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,nT=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,iT=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,aT=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,sT=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,rT=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,oT=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lT=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,cT=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,uT=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,fT=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,hT=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,dT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,pT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,mT=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_T=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,gT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,vT=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ST=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,yT=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,xT=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,MT=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ET=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,TT=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,bT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,AT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,RT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,CT=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,wT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,DT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,UT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,LT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,NT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,OT=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,PT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,zT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,BT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,IT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,FT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,HT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,GT=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,VT=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,kT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,XT=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,WT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,qT=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,YT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,jT=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,ZT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,KT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,QT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,JT=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,$T=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,tb=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,eb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,nb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ib=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,ab=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const sb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,rb=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ob=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,lb=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ub=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fb=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,hb=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,db=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,pb=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,mb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,_b=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gb=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,vb=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Sb=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,yb=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xb=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Mb=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Eb=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Tb=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bb=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Ab=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Rb=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Cb=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wb=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Db=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ub=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Lb=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Nb=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Ob=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Pb=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,zb=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Bb=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ib=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,he={alphahash_fragment:rE,alphahash_pars_fragment:oE,alphamap_fragment:lE,alphamap_pars_fragment:cE,alphatest_fragment:uE,alphatest_pars_fragment:fE,aomap_fragment:hE,aomap_pars_fragment:dE,batching_pars_vertex:pE,batching_vertex:mE,begin_vertex:_E,beginnormal_vertex:gE,bsdfs:vE,iridescence_fragment:SE,bumpmap_pars_fragment:yE,clipping_planes_fragment:xE,clipping_planes_pars_fragment:ME,clipping_planes_pars_vertex:EE,clipping_planes_vertex:TE,color_fragment:bE,color_pars_fragment:AE,color_pars_vertex:RE,color_vertex:CE,common:wE,cube_uv_reflection_fragment:DE,defaultnormal_vertex:UE,displacementmap_pars_vertex:LE,displacementmap_vertex:NE,emissivemap_fragment:OE,emissivemap_pars_fragment:PE,colorspace_fragment:zE,colorspace_pars_fragment:BE,envmap_fragment:IE,envmap_common_pars_fragment:FE,envmap_pars_fragment:HE,envmap_pars_vertex:GE,envmap_physical_pars_fragment:JE,envmap_vertex:VE,fog_vertex:kE,fog_pars_vertex:XE,fog_fragment:WE,fog_pars_fragment:qE,gradientmap_pars_fragment:YE,lightmap_pars_fragment:jE,lights_lambert_fragment:ZE,lights_lambert_pars_fragment:KE,lights_pars_begin:QE,lights_toon_fragment:$E,lights_toon_pars_fragment:tT,lights_phong_fragment:eT,lights_phong_pars_fragment:nT,lights_physical_fragment:iT,lights_physical_pars_fragment:aT,lights_fragment_begin:sT,lights_fragment_maps:rT,lights_fragment_end:oT,logdepthbuf_fragment:lT,logdepthbuf_pars_fragment:cT,logdepthbuf_pars_vertex:uT,logdepthbuf_vertex:fT,map_fragment:hT,map_pars_fragment:dT,map_particle_fragment:pT,map_particle_pars_fragment:mT,metalnessmap_fragment:_T,metalnessmap_pars_fragment:gT,morphinstance_vertex:vT,morphcolor_vertex:ST,morphnormal_vertex:yT,morphtarget_pars_vertex:xT,morphtarget_vertex:MT,normal_fragment_begin:ET,normal_fragment_maps:TT,normal_pars_fragment:bT,normal_pars_vertex:AT,normal_vertex:RT,normalmap_pars_fragment:CT,clearcoat_normal_fragment_begin:wT,clearcoat_normal_fragment_maps:DT,clearcoat_pars_fragment:UT,iridescence_pars_fragment:LT,opaque_fragment:NT,packing:OT,premultiplied_alpha_fragment:PT,project_vertex:zT,dithering_fragment:BT,dithering_pars_fragment:IT,roughnessmap_fragment:FT,roughnessmap_pars_fragment:HT,shadowmap_pars_fragment:GT,shadowmap_pars_vertex:VT,shadowmap_vertex:kT,shadowmask_pars_fragment:XT,skinbase_vertex:WT,skinning_pars_vertex:qT,skinning_vertex:YT,skinnormal_vertex:jT,specularmap_fragment:ZT,specularmap_pars_fragment:KT,tonemapping_fragment:QT,tonemapping_pars_fragment:JT,transmission_fragment:$T,transmission_pars_fragment:tb,uv_pars_fragment:eb,uv_pars_vertex:nb,uv_vertex:ib,worldpos_vertex:ab,background_vert:sb,background_frag:rb,backgroundCube_vert:ob,backgroundCube_frag:lb,cube_vert:cb,cube_frag:ub,depth_vert:fb,depth_frag:hb,distanceRGBA_vert:db,distanceRGBA_frag:pb,equirect_vert:mb,equirect_frag:_b,linedashed_vert:gb,linedashed_frag:vb,meshbasic_vert:Sb,meshbasic_frag:yb,meshlambert_vert:xb,meshlambert_frag:Mb,meshmatcap_vert:Eb,meshmatcap_frag:Tb,meshnormal_vert:bb,meshnormal_frag:Ab,meshphong_vert:Rb,meshphong_frag:Cb,meshphysical_vert:wb,meshphysical_frag:Db,meshtoon_vert:Ub,meshtoon_frag:Lb,points_vert:Nb,points_frag:Ob,shadow_vert:Pb,shadow_frag:zb,sprite_vert:Bb,sprite_frag:Ib},Ot={common:{diffuse:{value:new Me(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new fe},alphaMap:{value:null},alphaMapTransform:{value:new fe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new fe}},envmap:{envMap:{value:null},envMapRotation:{value:new fe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new fe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new fe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new fe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new fe},normalScale:{value:new ce(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new fe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new fe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new fe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new fe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Me(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Me(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new fe},alphaTest:{value:0},uvTransform:{value:new fe}},sprite:{diffuse:{value:new Me(16777215)},opacity:{value:1},center:{value:new ce(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new fe},alphaMap:{value:null},alphaMapTransform:{value:new fe},alphaTest:{value:0}}},Li={basic:{uniforms:On([Ot.common,Ot.specularmap,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.fog]),vertexShader:he.meshbasic_vert,fragmentShader:he.meshbasic_frag},lambert:{uniforms:On([Ot.common,Ot.specularmap,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.fog,Ot.lights,{emissive:{value:new Me(0)}}]),vertexShader:he.meshlambert_vert,fragmentShader:he.meshlambert_frag},phong:{uniforms:On([Ot.common,Ot.specularmap,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.fog,Ot.lights,{emissive:{value:new Me(0)},specular:{value:new Me(1118481)},shininess:{value:30}}]),vertexShader:he.meshphong_vert,fragmentShader:he.meshphong_frag},standard:{uniforms:On([Ot.common,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.roughnessmap,Ot.metalnessmap,Ot.fog,Ot.lights,{emissive:{value:new Me(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:he.meshphysical_vert,fragmentShader:he.meshphysical_frag},toon:{uniforms:On([Ot.common,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.gradientmap,Ot.fog,Ot.lights,{emissive:{value:new Me(0)}}]),vertexShader:he.meshtoon_vert,fragmentShader:he.meshtoon_frag},matcap:{uniforms:On([Ot.common,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.fog,{matcap:{value:null}}]),vertexShader:he.meshmatcap_vert,fragmentShader:he.meshmatcap_frag},points:{uniforms:On([Ot.points,Ot.fog]),vertexShader:he.points_vert,fragmentShader:he.points_frag},dashed:{uniforms:On([Ot.common,Ot.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:he.linedashed_vert,fragmentShader:he.linedashed_frag},depth:{uniforms:On([Ot.common,Ot.displacementmap]),vertexShader:he.depth_vert,fragmentShader:he.depth_frag},normal:{uniforms:On([Ot.common,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,{opacity:{value:1}}]),vertexShader:he.meshnormal_vert,fragmentShader:he.meshnormal_frag},sprite:{uniforms:On([Ot.sprite,Ot.fog]),vertexShader:he.sprite_vert,fragmentShader:he.sprite_frag},background:{uniforms:{uvTransform:{value:new fe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:he.background_vert,fragmentShader:he.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new fe}},vertexShader:he.backgroundCube_vert,fragmentShader:he.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:he.cube_vert,fragmentShader:he.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:he.equirect_vert,fragmentShader:he.equirect_frag},distanceRGBA:{uniforms:On([Ot.common,Ot.displacementmap,{referencePosition:{value:new K},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:he.distanceRGBA_vert,fragmentShader:he.distanceRGBA_frag},shadow:{uniforms:On([Ot.lights,Ot.fog,{color:{value:new Me(0)},opacity:{value:1}}]),vertexShader:he.shadow_vert,fragmentShader:he.shadow_frag}};Li.physical={uniforms:On([Li.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new fe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new fe},clearcoatNormalScale:{value:new ce(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new fe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new fe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new fe},sheen:{value:0},sheenColor:{value:new Me(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new fe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new fe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new fe},transmissionSamplerSize:{value:new ce},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new fe},attenuationDistance:{value:0},attenuationColor:{value:new Me(0)},specularColor:{value:new Me(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new fe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new fe},anisotropyVector:{value:new ce},anisotropyMap:{value:null},anisotropyMapTransform:{value:new fe}}]),vertexShader:he.meshphysical_vert,fragmentShader:he.meshphysical_frag};const Ec={r:0,b:0,g:0},vs=new zi,Fb=new Ke;function Hb(r,t,i,s,l,c,h){const d=new Me(0);let m=c===!0?0:1,p,_,g=null,y=0,x=null;function b(O){let D=O.isScene===!0?O.background:null;return D&&D.isTexture&&(D=(O.backgroundBlurriness>0?i:t).get(D)),D}function R(O){let D=!1;const F=b(O);F===null?S(d,m):F&&F.isColor&&(S(F,1),D=!0);const z=r.xr.getEnvironmentBlendMode();z==="additive"?s.buffers.color.setClear(0,0,0,1,h):z==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,h),(r.autoClear||D)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function M(O,D){const F=b(D);F&&(F.isCubeTexture||F.mapping===Ic)?(_===void 0&&(_=new ua(new qo(1,1,1),new ha({name:"BackgroundCubeMaterial",uniforms:Or(Li.backgroundCube.uniforms),vertexShader:Li.backgroundCube.vertexShader,fragmentShader:Li.backgroundCube.fragmentShader,side:Wn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),_.geometry.deleteAttribute("normal"),_.geometry.deleteAttribute("uv"),_.onBeforeRender=function(z,B,Y){this.matrixWorld.copyPosition(Y.matrixWorld)},Object.defineProperty(_.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(_)),vs.copy(D.backgroundRotation),vs.x*=-1,vs.y*=-1,vs.z*=-1,F.isCubeTexture&&F.isRenderTargetTexture===!1&&(vs.y*=-1,vs.z*=-1),_.material.uniforms.envMap.value=F,_.material.uniforms.flipEnvMap.value=F.isCubeTexture&&F.isRenderTargetTexture===!1?-1:1,_.material.uniforms.backgroundBlurriness.value=D.backgroundBlurriness,_.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,_.material.uniforms.backgroundRotation.value.setFromMatrix4(Fb.makeRotationFromEuler(vs)),_.material.toneMapped=we.getTransfer(F.colorSpace)!==Fe,(g!==F||y!==F.version||x!==r.toneMapping)&&(_.material.needsUpdate=!0,g=F,y=F.version,x=r.toneMapping),_.layers.enableAll(),O.unshift(_,_.geometry,_.material,0,0,null)):F&&F.isTexture&&(p===void 0&&(p=new ua(new Gc(2,2),new ha({name:"BackgroundMaterial",uniforms:Or(Li.background.uniforms),vertexShader:Li.background.vertexShader,fragmentShader:Li.background.fragmentShader,side:Ya,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=F,p.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,p.material.toneMapped=we.getTransfer(F.colorSpace)!==Fe,F.matrixAutoUpdate===!0&&F.updateMatrix(),p.material.uniforms.uvTransform.value.copy(F.matrix),(g!==F||y!==F.version||x!==r.toneMapping)&&(p.material.needsUpdate=!0,g=F,y=F.version,x=r.toneMapping),p.layers.enableAll(),O.unshift(p,p.geometry,p.material,0,0,null))}function S(O,D){O.getRGB(Ec,fv(r)),s.buffers.color.setClear(Ec.r,Ec.g,Ec.b,D,h)}function H(){_!==void 0&&(_.geometry.dispose(),_.material.dispose(),_=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return d},setClearColor:function(O,D=1){d.set(O),m=D,S(d,m)},getClearAlpha:function(){return m},setClearAlpha:function(O){m=O,S(d,m)},render:R,addToRenderList:M,dispose:H}}function Gb(r,t){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},l=y(null);let c=l,h=!1;function d(w,V,it,ot,ft){let pt=!1;const N=g(ot,it,V);c!==N&&(c=N,p(c.object)),pt=x(w,ot,it,ft),pt&&b(w,ot,it,ft),ft!==null&&t.update(ft,r.ELEMENT_ARRAY_BUFFER),(pt||h)&&(h=!1,D(w,V,it,ot),ft!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(ft).buffer))}function m(){return r.createVertexArray()}function p(w){return r.bindVertexArray(w)}function _(w){return r.deleteVertexArray(w)}function g(w,V,it){const ot=it.wireframe===!0;let ft=s[w.id];ft===void 0&&(ft={},s[w.id]=ft);let pt=ft[V.id];pt===void 0&&(pt={},ft[V.id]=pt);let N=pt[ot];return N===void 0&&(N=y(m()),pt[ot]=N),N}function y(w){const V=[],it=[],ot=[];for(let ft=0;ft<i;ft++)V[ft]=0,it[ft]=0,ot[ft]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:it,attributeDivisors:ot,object:w,attributes:{},index:null}}function x(w,V,it,ot){const ft=c.attributes,pt=V.attributes;let N=0;const Z=it.getAttributes();for(const X in Z)if(Z[X].location>=0){const Mt=ft[X];let L=pt[X];if(L===void 0&&(X==="instanceMatrix"&&w.instanceMatrix&&(L=w.instanceMatrix),X==="instanceColor"&&w.instanceColor&&(L=w.instanceColor)),Mt===void 0||Mt.attribute!==L||L&&Mt.data!==L.data)return!0;N++}return c.attributesNum!==N||c.index!==ot}function b(w,V,it,ot){const ft={},pt=V.attributes;let N=0;const Z=it.getAttributes();for(const X in Z)if(Z[X].location>=0){let Mt=pt[X];Mt===void 0&&(X==="instanceMatrix"&&w.instanceMatrix&&(Mt=w.instanceMatrix),X==="instanceColor"&&w.instanceColor&&(Mt=w.instanceColor));const L={};L.attribute=Mt,Mt&&Mt.data&&(L.data=Mt.data),ft[X]=L,N++}c.attributes=ft,c.attributesNum=N,c.index=ot}function R(){const w=c.newAttributes;for(let V=0,it=w.length;V<it;V++)w[V]=0}function M(w){S(w,0)}function S(w,V){const it=c.newAttributes,ot=c.enabledAttributes,ft=c.attributeDivisors;it[w]=1,ot[w]===0&&(r.enableVertexAttribArray(w),ot[w]=1),ft[w]!==V&&(r.vertexAttribDivisor(w,V),ft[w]=V)}function H(){const w=c.newAttributes,V=c.enabledAttributes;for(let it=0,ot=V.length;it<ot;it++)V[it]!==w[it]&&(r.disableVertexAttribArray(it),V[it]=0)}function O(w,V,it,ot,ft,pt,N){N===!0?r.vertexAttribIPointer(w,V,it,ft,pt):r.vertexAttribPointer(w,V,it,ot,ft,pt)}function D(w,V,it,ot){R();const ft=ot.attributes,pt=it.getAttributes(),N=V.defaultAttributeValues;for(const Z in pt){const X=pt[Z];if(X.location>=0){let St=ft[Z];if(St===void 0&&(Z==="instanceMatrix"&&w.instanceMatrix&&(St=w.instanceMatrix),Z==="instanceColor"&&w.instanceColor&&(St=w.instanceColor)),St!==void 0){const Mt=St.normalized,L=St.itemSize,et=t.get(St);if(et===void 0)continue;const yt=et.buffer,At=et.type,Ut=et.bytesPerElement,tt=At===r.INT||At===r.UNSIGNED_INT||St.gpuType===wd;if(St.isInterleavedBufferAttribute){const lt=St.data,Dt=lt.stride,It=St.offset;if(lt.isInstancedInterleavedBuffer){for(let Xt=0;Xt<X.locationSize;Xt++)S(X.location+Xt,lt.meshPerAttribute);w.isInstancedMesh!==!0&&ot._maxInstanceCount===void 0&&(ot._maxInstanceCount=lt.meshPerAttribute*lt.count)}else for(let Xt=0;Xt<X.locationSize;Xt++)M(X.location+Xt);r.bindBuffer(r.ARRAY_BUFFER,yt);for(let Xt=0;Xt<X.locationSize;Xt++)O(X.location+Xt,L/X.locationSize,At,Mt,Dt*Ut,(It+L/X.locationSize*Xt)*Ut,tt)}else{if(St.isInstancedBufferAttribute){for(let lt=0;lt<X.locationSize;lt++)S(X.location+lt,St.meshPerAttribute);w.isInstancedMesh!==!0&&ot._maxInstanceCount===void 0&&(ot._maxInstanceCount=St.meshPerAttribute*St.count)}else for(let lt=0;lt<X.locationSize;lt++)M(X.location+lt);r.bindBuffer(r.ARRAY_BUFFER,yt);for(let lt=0;lt<X.locationSize;lt++)O(X.location+lt,L/X.locationSize,At,Mt,L*Ut,L/X.locationSize*lt*Ut,tt)}}else if(N!==void 0){const Mt=N[Z];if(Mt!==void 0)switch(Mt.length){case 2:r.vertexAttrib2fv(X.location,Mt);break;case 3:r.vertexAttrib3fv(X.location,Mt);break;case 4:r.vertexAttrib4fv(X.location,Mt);break;default:r.vertexAttrib1fv(X.location,Mt)}}}}H()}function F(){Y();for(const w in s){const V=s[w];for(const it in V){const ot=V[it];for(const ft in ot)_(ot[ft].object),delete ot[ft];delete V[it]}delete s[w]}}function z(w){if(s[w.id]===void 0)return;const V=s[w.id];for(const it in V){const ot=V[it];for(const ft in ot)_(ot[ft].object),delete ot[ft];delete V[it]}delete s[w.id]}function B(w){for(const V in s){const it=s[V];if(it[w.id]===void 0)continue;const ot=it[w.id];for(const ft in ot)_(ot[ft].object),delete ot[ft];delete it[w.id]}}function Y(){C(),h=!0,c!==l&&(c=l,p(c.object))}function C(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:Y,resetDefaultState:C,dispose:F,releaseStatesOfGeometry:z,releaseStatesOfProgram:B,initAttributes:R,enableAttribute:M,disableUnusedAttributes:H}}function Vb(r,t,i){let s;function l(p){s=p}function c(p,_){r.drawArrays(s,p,_),i.update(_,s,1)}function h(p,_,g){g!==0&&(r.drawArraysInstanced(s,p,_,g),i.update(_,s,g))}function d(p,_,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,p,0,_,0,g);let x=0;for(let b=0;b<g;b++)x+=_[b];i.update(x,s,1)}function m(p,_,g,y){if(g===0)return;const x=t.get("WEBGL_multi_draw");if(x===null)for(let b=0;b<p.length;b++)h(p[b],_[b],y[b]);else{x.multiDrawArraysInstancedWEBGL(s,p,0,_,0,y,0,g);let b=0;for(let R=0;R<g;R++)b+=_[R]*y[R];i.update(b,s,1)}}this.setMode=l,this.render=c,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=m}function kb(r,t,i,s){let l;function c(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const B=t.get("EXT_texture_filter_anisotropic");l=r.getParameter(B.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(B){return!(B!==Ei&&s.convert(B)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(B){const Y=B===Xo&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(B!==Pi&&s.convert(B)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&B!==ca&&!Y)}function m(B){if(B==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";B="mediump"}return B==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const _=m(p);_!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",_,"instead."),p=_);const g=i.logarithmicDepthBuffer===!0,y=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),x=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),b=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),R=r.getParameter(r.MAX_TEXTURE_SIZE),M=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),S=r.getParameter(r.MAX_VERTEX_ATTRIBS),H=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),O=r.getParameter(r.MAX_VARYING_VECTORS),D=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),F=b>0,z=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:h,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:g,reversedDepthBuffer:y,maxTextures:x,maxVertexTextures:b,maxTextureSize:R,maxCubemapSize:M,maxAttributes:S,maxVertexUniforms:H,maxVaryings:O,maxFragmentUniforms:D,vertexTextures:F,maxSamples:z}}function Xb(r){const t=this;let i=null,s=0,l=!1,c=!1;const h=new ka,d=new fe,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(g,y){const x=g.length!==0||y||s!==0||l;return l=y,s=g.length,x},this.beginShadows=function(){c=!0,_(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(g,y){i=_(g,y,0)},this.setState=function(g,y,x){const b=g.clippingPlanes,R=g.clipIntersection,M=g.clipShadows,S=r.get(g);if(!l||b===null||b.length===0||c&&!M)c?_(null):p();else{const H=c?0:s,O=H*4;let D=S.clippingState||null;m.value=D,D=_(b,y,O,x);for(let F=0;F!==O;++F)D[F]=i[F];S.clippingState=D,this.numIntersection=R?this.numPlanes:0,this.numPlanes+=H}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),t.numPlanes=s,t.numIntersection=0}function _(g,y,x,b){const R=g!==null?g.length:0;let M=null;if(R!==0){if(M=m.value,b!==!0||M===null){const S=x+R*4,H=y.matrixWorldInverse;d.getNormalMatrix(H),(M===null||M.length<S)&&(M=new Float32Array(S));for(let O=0,D=x;O!==R;++O,D+=4)h.copy(g[O]).applyMatrix4(H,d),h.normal.toArray(M,D),M[D+3]=h.constant}m.value=M,m.needsUpdate=!0}return t.numPlanes=R,t.numIntersection=0,M}}function Wb(r){let t=new WeakMap;function i(h,d){return d===qh?h.mapping=Ur:d===Yh&&(h.mapping=Lr),h}function s(h){if(h&&h.isTexture){const d=h.mapping;if(d===qh||d===Yh)if(t.has(h)){const m=t.get(h).texture;return i(m,h.mapping)}else{const m=h.image;if(m&&m.height>0){const p=new IM(m.height);return p.fromEquirectangularTexture(r,h),t.set(h,p),h.addEventListener("dispose",l),i(p.texture,h.mapping)}else return null}}return h}function l(h){const d=h.target;d.removeEventListener("dispose",l);const m=t.get(d);m!==void 0&&(t.delete(d),m.dispose())}function c(){t=new WeakMap}return{get:s,dispose:c}}const Ar=4,_0=[.125,.215,.35,.446,.526,.582],Ms=20,Ch=new Sv,g0=new Me;let wh=null,Dh=0,Uh=0,Lh=!1;const ys=(1+Math.sqrt(5))/2,Tr=1/ys,v0=[new K(-ys,Tr,0),new K(ys,Tr,0),new K(-Tr,0,ys),new K(Tr,0,ys),new K(0,ys,-Tr),new K(0,ys,Tr),new K(-1,1,-1),new K(1,1,-1),new K(-1,1,1),new K(1,1,1)],qb=new K;class S0{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,i=0,s=.1,l=100,c={}){const{size:h=256,position:d=qb}=c;wh=this._renderer.getRenderTarget(),Dh=this._renderer.getActiveCubeFace(),Uh=this._renderer.getActiveMipmapLevel(),Lh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(h);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,s,l,m,d),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=M0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=x0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(wh,Dh,Uh),this._renderer.xr.enabled=Lh,t.scissorTest=!1,Tc(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===Ur||t.mapping===Lr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),wh=this._renderer.getRenderTarget(),Dh=this._renderer.getActiveCubeFace(),Uh=this._renderer.getActiveMipmapLevel(),Lh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(t,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:Ni,minFilter:Ni,generateMipmaps:!1,type:Xo,format:Ei,colorSpace:Nr,depthBuffer:!1},l=y0(t,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=y0(t,i,s);const{_lodMax:c}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Yb(c)),this._blurMaterial=jb(c,t,i)}return l}_compileMaterial(t){const i=new ua(this._lodPlanes[0],t);this._renderer.compile(i,Ch)}_sceneToCubeUV(t,i,s,l,c){const m=new mi(90,1,i,s),p=[1,-1,1,1,1,1],_=[1,1,1,-1,-1,-1],g=this._renderer,y=g.autoClear,x=g.toneMapping;g.getClearColor(g0),g.toneMapping=qa,g.autoClear=!1,g.state.buffers.depth.getReversed()&&(g.setRenderTarget(l),g.clearDepth(),g.setRenderTarget(null));const R=new lv({name:"PMREM.Background",side:Wn,depthWrite:!1,depthTest:!1}),M=new ua(new qo,R);let S=!1;const H=t.background;H?H.isColor&&(R.color.copy(H),t.background=null,S=!0):(R.color.copy(g0),S=!0);for(let O=0;O<6;O++){const D=O%3;D===0?(m.up.set(0,p[O],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+_[O],c.y,c.z)):D===1?(m.up.set(0,0,p[O]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+_[O],c.z)):(m.up.set(0,p[O],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+_[O]));const F=this._cubeSize;Tc(l,D*F,O>2?F:0,F,F),g.setRenderTarget(l),S&&g.render(M,m),g.render(t,m)}M.geometry.dispose(),M.material.dispose(),g.toneMapping=x,g.autoClear=y,t.background=H}_textureToCubeUV(t,i){const s=this._renderer,l=t.mapping===Ur||t.mapping===Lr;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=M0()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=x0());const c=l?this._cubemapMaterial:this._equirectMaterial,h=new ua(this._lodPlanes[0],c),d=c.uniforms;d.envMap.value=t;const m=this._cubeSize;Tc(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(h,Ch)}_applyPMREM(t){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let c=1;c<l;c++){const h=Math.sqrt(this._sigmas[c]*this._sigmas[c]-this._sigmas[c-1]*this._sigmas[c-1]),d=v0[(l-c-1)%v0.length];this._blur(t,c-1,c,h,d)}i.autoClear=s}_blur(t,i,s,l,c){const h=this._pingPongRenderTarget;this._halfBlur(t,h,i,s,l,"latitudinal",c),this._halfBlur(h,t,s,s,l,"longitudinal",c)}_halfBlur(t,i,s,l,c,h,d){const m=this._renderer,p=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const _=3,g=new ua(this._lodPlanes[l],p),y=p.uniforms,x=this._sizeLods[s]-1,b=isFinite(c)?Math.PI/(2*x):2*Math.PI/(2*Ms-1),R=c/b,M=isFinite(c)?1+Math.floor(_*R):Ms;M>Ms&&console.warn(`sigmaRadians, ${c}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${Ms}`);const S=[];let H=0;for(let B=0;B<Ms;++B){const Y=B/R,C=Math.exp(-Y*Y/2);S.push(C),B===0?H+=C:B<M&&(H+=2*C)}for(let B=0;B<S.length;B++)S[B]=S[B]/H;y.envMap.value=t.texture,y.samples.value=M,y.weights.value=S,y.latitudinal.value=h==="latitudinal",d&&(y.poleAxis.value=d);const{_lodMax:O}=this;y.dTheta.value=b,y.mipInt.value=O-s;const D=this._sizeLods[l],F=3*D*(l>O-Ar?l-O+Ar:0),z=4*(this._cubeSize-D);Tc(i,F,z,3*D,2*D),m.setRenderTarget(i),m.render(g,Ch)}}function Yb(r){const t=[],i=[],s=[];let l=r;const c=r-Ar+1+_0.length;for(let h=0;h<c;h++){const d=Math.pow(2,l);i.push(d);let m=1/d;h>r-Ar?m=_0[h-r+Ar-1]:h===0&&(m=0),s.push(m);const p=1/(d-2),_=-p,g=1+p,y=[_,_,g,_,g,g,_,_,g,g,_,g],x=6,b=6,R=3,M=2,S=1,H=new Float32Array(R*b*x),O=new Float32Array(M*b*x),D=new Float32Array(S*b*x);for(let z=0;z<x;z++){const B=z%3*2/3-1,Y=z>2?0:-1,C=[B,Y,0,B+2/3,Y,0,B+2/3,Y+1,0,B,Y,0,B+2/3,Y+1,0,B,Y+1,0];H.set(C,R*b*z),O.set(y,M*b*z);const w=[z,z,z,z,z,z];D.set(w,S*b*z)}const F=new bi;F.setAttribute("position",new Ti(H,R)),F.setAttribute("uv",new Ti(O,M)),F.setAttribute("faceIndex",new Ti(D,S)),t.push(F),l>Ar&&l--}return{lodPlanes:t,sizeLods:i,sigmas:s}}function y0(r,t,i){const s=new ja(r,t,i);return s.texture.mapping=Ic,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Tc(r,t,i,s,l){r.viewport.set(t,i,s,l),r.scissor.set(t,i,s,l)}function jb(r,t,i){const s=new Float32Array(Ms),l=new K(0,1,0);return new ha({name:"SphericalGaussianBlur",defines:{n:Ms,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Hd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Wa,depthTest:!1,depthWrite:!1})}function x0(){return new ha({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Hd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Wa,depthTest:!1,depthWrite:!1})}function M0(){return new ha({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Hd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Wa,depthTest:!1,depthWrite:!1})}function Hd(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Zb(r){let t=new WeakMap,i=null;function s(d){if(d&&d.isTexture){const m=d.mapping,p=m===qh||m===Yh,_=m===Ur||m===Lr;if(p||_){let g=t.get(d);const y=g!==void 0?g.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==y)return i===null&&(i=new S0(r)),g=p?i.fromEquirectangular(d,g):i.fromCubemap(d,g),g.texture.pmremVersion=d.pmremVersion,t.set(d,g),g.texture;if(g!==void 0)return g.texture;{const x=d.image;return p&&x&&x.height>0||_&&x&&l(x)?(i===null&&(i=new S0(r)),g=p?i.fromEquirectangular(d):i.fromCubemap(d),g.texture.pmremVersion=d.pmremVersion,t.set(d,g),d.addEventListener("dispose",c),g.texture):null}}}return d}function l(d){let m=0;const p=6;for(let _=0;_<p;_++)d[_]!==void 0&&m++;return m===p}function c(d){const m=d.target;m.removeEventListener("dispose",c);const p=t.get(m);p!==void 0&&(t.delete(m),p.dispose())}function h(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:h}}function Kb(r){const t={};function i(s){if(t[s]!==void 0)return t[s];let l;switch(s){case"WEBGL_depth_texture":l=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=r.getExtension(s)}return t[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&ko("THREE.WebGLRenderer: "+s+" extension not supported."),l}}}function Qb(r,t,i,s){const l={},c=new WeakMap;function h(g){const y=g.target;y.index!==null&&t.remove(y.index);for(const b in y.attributes)t.remove(y.attributes[b]);y.removeEventListener("dispose",h),delete l[y.id];const x=c.get(y);x&&(t.remove(x),c.delete(y)),s.releaseStatesOfGeometry(y),y.isInstancedBufferGeometry===!0&&delete y._maxInstanceCount,i.memory.geometries--}function d(g,y){return l[y.id]===!0||(y.addEventListener("dispose",h),l[y.id]=!0,i.memory.geometries++),y}function m(g){const y=g.attributes;for(const x in y)t.update(y[x],r.ARRAY_BUFFER)}function p(g){const y=[],x=g.index,b=g.attributes.position;let R=0;if(x!==null){const H=x.array;R=x.version;for(let O=0,D=H.length;O<D;O+=3){const F=H[O+0],z=H[O+1],B=H[O+2];y.push(F,z,z,B,B,F)}}else if(b!==void 0){const H=b.array;R=b.version;for(let O=0,D=H.length/3-1;O<D;O+=3){const F=O+0,z=O+1,B=O+2;y.push(F,z,z,B,B,F)}}else return;const M=new(rv(y)?uv:cv)(y,1);M.version=R;const S=c.get(g);S&&t.remove(S),c.set(g,M)}function _(g){const y=c.get(g);if(y){const x=g.index;x!==null&&y.version<x.version&&p(g)}else p(g);return c.get(g)}return{get:d,update:m,getWireframeAttribute:_}}function Jb(r,t,i){let s;function l(y){s=y}let c,h;function d(y){c=y.type,h=y.bytesPerElement}function m(y,x){r.drawElements(s,x,c,y*h),i.update(x,s,1)}function p(y,x,b){b!==0&&(r.drawElementsInstanced(s,x,c,y*h,b),i.update(x,s,b))}function _(y,x,b){if(b===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,x,0,c,y,0,b);let M=0;for(let S=0;S<b;S++)M+=x[S];i.update(M,s,1)}function g(y,x,b,R){if(b===0)return;const M=t.get("WEBGL_multi_draw");if(M===null)for(let S=0;S<y.length;S++)p(y[S]/h,x[S],R[S]);else{M.multiDrawElementsInstancedWEBGL(s,x,0,c,y,0,R,0,b);let S=0;for(let H=0;H<b;H++)S+=x[H]*R[H];i.update(S,s,1)}}this.setMode=l,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=_,this.renderMultiDrawInstances=g}function $b(r){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,h,d){switch(i.calls++,h){case r.TRIANGLES:i.triangles+=d*(c/3);break;case r.LINES:i.lines+=d*(c/2);break;case r.LINE_STRIP:i.lines+=d*(c-1);break;case r.LINE_LOOP:i.lines+=d*c;break;case r.POINTS:i.points+=d*c;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:s}}function t1(r,t,i){const s=new WeakMap,l=new tn;function c(h,d,m){const p=h.morphTargetInfluences,_=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,g=_!==void 0?_.length:0;let y=s.get(d);if(y===void 0||y.count!==g){let C=function(){B.dispose(),s.delete(d),d.removeEventListener("dispose",C)};y!==void 0&&y.texture.dispose();const x=d.morphAttributes.position!==void 0,b=d.morphAttributes.normal!==void 0,R=d.morphAttributes.color!==void 0,M=d.morphAttributes.position||[],S=d.morphAttributes.normal||[],H=d.morphAttributes.color||[];let O=0;x===!0&&(O=1),b===!0&&(O=2),R===!0&&(O=3);let D=d.attributes.position.count*O,F=1;D>t.maxTextureSize&&(F=Math.ceil(D/t.maxTextureSize),D=t.maxTextureSize);const z=new Float32Array(D*F*4*g),B=new zd(z,D,F,g);B.type=ca,B.needsUpdate=!0;const Y=O*4;for(let w=0;w<g;w++){const V=M[w],it=S[w],ot=H[w],ft=D*F*4*w;for(let pt=0;pt<V.count;pt++){const N=pt*Y;x===!0&&(l.fromBufferAttribute(V,pt),z[ft+N+0]=l.x,z[ft+N+1]=l.y,z[ft+N+2]=l.z,z[ft+N+3]=0),b===!0&&(l.fromBufferAttribute(it,pt),z[ft+N+4]=l.x,z[ft+N+5]=l.y,z[ft+N+6]=l.z,z[ft+N+7]=0),R===!0&&(l.fromBufferAttribute(ot,pt),z[ft+N+8]=l.x,z[ft+N+9]=l.y,z[ft+N+10]=l.z,z[ft+N+11]=ot.itemSize===4?l.w:1)}}y={count:g,texture:B,size:new ce(D,F)},s.set(d,y),d.addEventListener("dispose",C)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)m.getUniforms().setValue(r,"morphTexture",h.morphTexture,i);else{let x=0;for(let R=0;R<p.length;R++)x+=p[R];const b=d.morphTargetsRelative?1:1-x;m.getUniforms().setValue(r,"morphTargetBaseInfluence",b),m.getUniforms().setValue(r,"morphTargetInfluences",p)}m.getUniforms().setValue(r,"morphTargetsTexture",y.texture,i),m.getUniforms().setValue(r,"morphTargetsTextureSize",y.size)}return{update:c}}function e1(r,t,i,s){let l=new WeakMap;function c(m){const p=s.render.frame,_=m.geometry,g=t.get(m,_);if(l.get(g)!==p&&(t.update(g),l.set(g,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",d)===!1&&m.addEventListener("dispose",d),l.get(m)!==p&&(i.update(m.instanceMatrix,r.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,r.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const y=m.skeleton;l.get(y)!==p&&(y.update(),l.set(y,p))}return g}function h(){l=new WeakMap}function d(m){const p=m.target;p.removeEventListener("dispose",d),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:c,dispose:h}}const Mv=new Pn,E0=new mv(1,1),Ev=new zd,Tv=new xM,bv=new dv,T0=[],b0=[],A0=new Float32Array(16),R0=new Float32Array(9),C0=new Float32Array(4);function Br(r,t,i){const s=r[0];if(s<=0||s>0)return r;const l=t*i;let c=T0[l];if(c===void 0&&(c=new Float32Array(l),T0[l]=c),t!==0){s.toArray(c,0);for(let h=1,d=0;h!==t;++h)d+=i,r[h].toArray(c,d)}return c}function mn(r,t){if(r.length!==t.length)return!1;for(let i=0,s=r.length;i<s;i++)if(r[i]!==t[i])return!1;return!0}function _n(r,t){for(let i=0,s=t.length;i<s;i++)r[i]=t[i]}function Vc(r,t){let i=b0[t];i===void 0&&(i=new Int32Array(t),b0[t]=i);for(let s=0;s!==t;++s)i[s]=r.allocateTextureUnit();return i}function n1(r,t){const i=this.cache;i[0]!==t&&(r.uniform1f(this.addr,t),i[0]=t)}function i1(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(mn(i,t))return;r.uniform2fv(this.addr,t),_n(i,t)}}function a1(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(mn(i,t))return;r.uniform3fv(this.addr,t),_n(i,t)}}function s1(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(mn(i,t))return;r.uniform4fv(this.addr,t),_n(i,t)}}function r1(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(mn(i,t))return;r.uniformMatrix2fv(this.addr,!1,t),_n(i,t)}else{if(mn(i,s))return;C0.set(s),r.uniformMatrix2fv(this.addr,!1,C0),_n(i,s)}}function o1(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(mn(i,t))return;r.uniformMatrix3fv(this.addr,!1,t),_n(i,t)}else{if(mn(i,s))return;R0.set(s),r.uniformMatrix3fv(this.addr,!1,R0),_n(i,s)}}function l1(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(mn(i,t))return;r.uniformMatrix4fv(this.addr,!1,t),_n(i,t)}else{if(mn(i,s))return;A0.set(s),r.uniformMatrix4fv(this.addr,!1,A0),_n(i,s)}}function c1(r,t){const i=this.cache;i[0]!==t&&(r.uniform1i(this.addr,t),i[0]=t)}function u1(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(mn(i,t))return;r.uniform2iv(this.addr,t),_n(i,t)}}function f1(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(mn(i,t))return;r.uniform3iv(this.addr,t),_n(i,t)}}function h1(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(mn(i,t))return;r.uniform4iv(this.addr,t),_n(i,t)}}function d1(r,t){const i=this.cache;i[0]!==t&&(r.uniform1ui(this.addr,t),i[0]=t)}function p1(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(mn(i,t))return;r.uniform2uiv(this.addr,t),_n(i,t)}}function m1(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(mn(i,t))return;r.uniform3uiv(this.addr,t),_n(i,t)}}function _1(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(mn(i,t))return;r.uniform4uiv(this.addr,t),_n(i,t)}}function g1(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l);let c;this.type===r.SAMPLER_2D_SHADOW?(E0.compareFunction=sv,c=E0):c=Mv,i.setTexture2D(t||c,l)}function v1(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(t||Tv,l)}function S1(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(t||bv,l)}function y1(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(t||Ev,l)}function x1(r){switch(r){case 5126:return n1;case 35664:return i1;case 35665:return a1;case 35666:return s1;case 35674:return r1;case 35675:return o1;case 35676:return l1;case 5124:case 35670:return c1;case 35667:case 35671:return u1;case 35668:case 35672:return f1;case 35669:case 35673:return h1;case 5125:return d1;case 36294:return p1;case 36295:return m1;case 36296:return _1;case 35678:case 36198:case 36298:case 36306:case 35682:return g1;case 35679:case 36299:case 36307:return v1;case 35680:case 36300:case 36308:case 36293:return S1;case 36289:case 36303:case 36311:case 36292:return y1}}function M1(r,t){r.uniform1fv(this.addr,t)}function E1(r,t){const i=Br(t,this.size,2);r.uniform2fv(this.addr,i)}function T1(r,t){const i=Br(t,this.size,3);r.uniform3fv(this.addr,i)}function b1(r,t){const i=Br(t,this.size,4);r.uniform4fv(this.addr,i)}function A1(r,t){const i=Br(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,i)}function R1(r,t){const i=Br(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,i)}function C1(r,t){const i=Br(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,i)}function w1(r,t){r.uniform1iv(this.addr,t)}function D1(r,t){r.uniform2iv(this.addr,t)}function U1(r,t){r.uniform3iv(this.addr,t)}function L1(r,t){r.uniform4iv(this.addr,t)}function N1(r,t){r.uniform1uiv(this.addr,t)}function O1(r,t){r.uniform2uiv(this.addr,t)}function P1(r,t){r.uniform3uiv(this.addr,t)}function z1(r,t){r.uniform4uiv(this.addr,t)}function B1(r,t,i){const s=this.cache,l=t.length,c=Vc(i,l);mn(s,c)||(r.uniform1iv(this.addr,c),_n(s,c));for(let h=0;h!==l;++h)i.setTexture2D(t[h]||Mv,c[h])}function I1(r,t,i){const s=this.cache,l=t.length,c=Vc(i,l);mn(s,c)||(r.uniform1iv(this.addr,c),_n(s,c));for(let h=0;h!==l;++h)i.setTexture3D(t[h]||Tv,c[h])}function F1(r,t,i){const s=this.cache,l=t.length,c=Vc(i,l);mn(s,c)||(r.uniform1iv(this.addr,c),_n(s,c));for(let h=0;h!==l;++h)i.setTextureCube(t[h]||bv,c[h])}function H1(r,t,i){const s=this.cache,l=t.length,c=Vc(i,l);mn(s,c)||(r.uniform1iv(this.addr,c),_n(s,c));for(let h=0;h!==l;++h)i.setTexture2DArray(t[h]||Ev,c[h])}function G1(r){switch(r){case 5126:return M1;case 35664:return E1;case 35665:return T1;case 35666:return b1;case 35674:return A1;case 35675:return R1;case 35676:return C1;case 5124:case 35670:return w1;case 35667:case 35671:return D1;case 35668:case 35672:return U1;case 35669:case 35673:return L1;case 5125:return N1;case 36294:return O1;case 36295:return P1;case 36296:return z1;case 35678:case 36198:case 36298:case 36306:case 35682:return B1;case 35679:case 36299:case 36307:return I1;case 35680:case 36300:case 36308:case 36293:return F1;case 36289:case 36303:case 36311:case 36292:return H1}}class V1{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.setValue=x1(i.type)}}class k1{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=G1(i.type)}}class X1{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,s){const l=this.seq;for(let c=0,h=l.length;c!==h;++c){const d=l[c];d.setValue(t,i[d.id],s)}}}const Nh=/(\w+)(\])?(\[|\.)?/g;function w0(r,t){r.seq.push(t),r.map[t.id]=t}function W1(r,t,i){const s=r.name,l=s.length;for(Nh.lastIndex=0;;){const c=Nh.exec(s),h=Nh.lastIndex;let d=c[1];const m=c[2]==="]",p=c[3];if(m&&(d=d|0),p===void 0||p==="["&&h+2===l){w0(i,p===void 0?new V1(d,r,t):new k1(d,r,t));break}else{let g=i.map[d];g===void 0&&(g=new X1(d),w0(i,g)),i=g}}}class Lc{constructor(t,i){this.seq=[],this.map={};const s=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let l=0;l<s;++l){const c=t.getActiveUniform(i,l),h=t.getUniformLocation(i,c.name);W1(c,h,this)}}setValue(t,i,s,l){const c=this.map[i];c!==void 0&&c.setValue(t,s,l)}setOptional(t,i,s){const l=i[s];l!==void 0&&this.setValue(t,s,l)}static upload(t,i,s,l){for(let c=0,h=i.length;c!==h;++c){const d=i[c],m=s[d.id];m.needsUpdate!==!1&&d.setValue(t,m.value,l)}}static seqWithValue(t,i){const s=[];for(let l=0,c=t.length;l!==c;++l){const h=t[l];h.id in i&&s.push(h)}return s}}function D0(r,t,i){const s=r.createShader(t);return r.shaderSource(s,i),r.compileShader(s),s}const q1=37297;let Y1=0;function j1(r,t){const i=r.split(`
`),s=[],l=Math.max(t-6,0),c=Math.min(t+6,i.length);for(let h=l;h<c;h++){const d=h+1;s.push(`${d===t?">":" "} ${d}: ${i[h]}`)}return s.join(`
`)}const U0=new fe;function Z1(r){we._getMatrix(U0,we.workingColorSpace,r);const t=`mat3( ${U0.elements.map(i=>i.toFixed(4))} )`;switch(we.getTransfer(r)){case Nc:return[t,"LinearTransferOETF"];case Fe:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function L0(r,t,i){const s=r.getShaderParameter(t,r.COMPILE_STATUS),c=(r.getShaderInfoLog(t)||"").trim();if(s&&c==="")return"";const h=/ERROR: 0:(\d+)/.exec(c);if(h){const d=parseInt(h[1]);return i.toUpperCase()+`

`+c+`

`+j1(r.getShaderSource(t),d)}else return c}function K1(r,t){const i=Z1(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function Q1(r,t){let i;switch(t){case jx:i="Linear";break;case Zx:i="Reinhard";break;case Kx:i="Cineon";break;case Qx:i="ACESFilmic";break;case $x:i="AgX";break;case tM:i="Neutral";break;case Jx:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),i="Linear"}return"vec3 "+r+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const bc=new K;function J1(){we.getLuminanceCoefficients(bc);const r=bc.x.toFixed(4),t=bc.y.toFixed(4),i=bc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function $1(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Io).join(`
`)}function tA(r){const t=[];for(const i in r){const s=r[i];s!==!1&&t.push("#define "+i+" "+s)}return t.join(`
`)}function eA(r,t){const i={},s=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const c=r.getActiveAttrib(t,l),h=c.name;let d=1;c.type===r.FLOAT_MAT2&&(d=2),c.type===r.FLOAT_MAT3&&(d=3),c.type===r.FLOAT_MAT4&&(d=4),i[h]={type:c.type,location:r.getAttribLocation(t,h),locationSize:d}}return i}function Io(r){return r!==""}function N0(r,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function O0(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const nA=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ad(r){return r.replace(nA,aA)}const iA=new Map;function aA(r,t){let i=he[t];if(i===void 0){const s=iA.get(t);if(s!==void 0)i=he[s],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,s);else throw new Error("Can not resolve #include <"+t+">")}return Ad(i)}const sA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function P0(r){return r.replace(sA,rA)}function rA(r,t,i,s){let l="";for(let c=parseInt(t);c<parseInt(i);c++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function z0(r){let t=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function oA(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Y0?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===Rx?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===oa&&(t="SHADOWMAP_TYPE_VSM"),t}function lA(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Ur:case Lr:t="ENVMAP_TYPE_CUBE";break;case Ic:t="ENVMAP_TYPE_CUBE_UV";break}return t}function cA(r){let t="ENVMAP_MODE_REFLECTION";return r.envMap&&r.envMapMode===Lr&&(t="ENVMAP_MODE_REFRACTION"),t}function uA(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case j0:t="ENVMAP_BLENDING_MULTIPLY";break;case qx:t="ENVMAP_BLENDING_MIX";break;case Yx:t="ENVMAP_BLENDING_ADD";break}return t}function fA(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,s=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function hA(r,t,i,s){const l=r.getContext(),c=i.defines;let h=i.vertexShader,d=i.fragmentShader;const m=oA(i),p=lA(i),_=cA(i),g=uA(i),y=fA(i),x=$1(i),b=tA(c),R=l.createProgram();let M,S,H=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(Io).join(`
`),M.length>0&&(M+=`
`),S=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(Io).join(`
`),S.length>0&&(S+=`
`)):(M=[z0(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+_:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Io).join(`
`),S=[z0(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+_:"",i.envMap?"#define "+g:"",y?"#define CUBEUV_TEXEL_WIDTH "+y.texelWidth:"",y?"#define CUBEUV_TEXEL_HEIGHT "+y.texelHeight:"",y?"#define CUBEUV_MAX_MIP "+y.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==qa?"#define TONE_MAPPING":"",i.toneMapping!==qa?he.tonemapping_pars_fragment:"",i.toneMapping!==qa?Q1("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",he.colorspace_pars_fragment,K1("linearToOutputTexel",i.outputColorSpace),J1(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Io).join(`
`)),h=Ad(h),h=N0(h,i),h=O0(h,i),d=Ad(d),d=N0(d,i),d=O0(d,i),h=P0(h),d=P0(d),i.isRawShaderMaterial!==!0&&(H=`#version 300 es
`,M=[x,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,S=["#define varying in",i.glslVersion===Gg?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===Gg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);const O=H+M+h,D=H+S+d,F=D0(l,l.VERTEX_SHADER,O),z=D0(l,l.FRAGMENT_SHADER,D);l.attachShader(R,F),l.attachShader(R,z),i.index0AttributeName!==void 0?l.bindAttribLocation(R,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(R,0,"position"),l.linkProgram(R);function B(V){if(r.debug.checkShaderErrors){const it=l.getProgramInfoLog(R)||"",ot=l.getShaderInfoLog(F)||"",ft=l.getShaderInfoLog(z)||"",pt=it.trim(),N=ot.trim(),Z=ft.trim();let X=!0,St=!0;if(l.getProgramParameter(R,l.LINK_STATUS)===!1)if(X=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(l,R,F,z);else{const Mt=L0(l,F,"vertex"),L=L0(l,z,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(R,l.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+pt+`
`+Mt+`
`+L)}else pt!==""?console.warn("THREE.WebGLProgram: Program Info Log:",pt):(N===""||Z==="")&&(St=!1);St&&(V.diagnostics={runnable:X,programLog:pt,vertexShader:{log:N,prefix:M},fragmentShader:{log:Z,prefix:S}})}l.deleteShader(F),l.deleteShader(z),Y=new Lc(l,R),C=eA(l,R)}let Y;this.getUniforms=function(){return Y===void 0&&B(this),Y};let C;this.getAttributes=function(){return C===void 0&&B(this),C};let w=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=l.getProgramParameter(R,q1)),w},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(R),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=Y1++,this.cacheKey=t,this.usedTimes=1,this.program=R,this.vertexShader=F,this.fragmentShader=z,this}let dA=0;class pA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,s=t.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(s),h=this._getShaderCacheForMaterial(t);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(c)===!1&&(h.add(c),c.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let s=i.get(t);return s===void 0&&(s=new Set,i.set(t,s)),s}_getShaderStage(t){const i=this.shaderCache;let s=i.get(t);return s===void 0&&(s=new mA(t),i.set(t,s)),s}}class mA{constructor(t){this.id=dA++,this.code=t,this.usedTimes=0}}function _A(r,t,i,s,l,c,h){const d=new Bd,m=new pA,p=new Set,_=[],g=l.logarithmicDepthBuffer,y=l.vertexTextures;let x=l.precision;const b={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function R(C){return p.add(C),C===0?"uv":`uv${C}`}function M(C,w,V,it,ot){const ft=it.fog,pt=ot.geometry,N=C.isMeshStandardMaterial?it.environment:null,Z=(C.isMeshStandardMaterial?i:t).get(C.envMap||N),X=Z&&Z.mapping===Ic?Z.image.height:null,St=b[C.type];C.precision!==null&&(x=l.getMaxPrecision(C.precision),x!==C.precision&&console.warn("THREE.WebGLProgram.getParameters:",C.precision,"not supported, using",x,"instead."));const Mt=pt.morphAttributes.position||pt.morphAttributes.normal||pt.morphAttributes.color,L=Mt!==void 0?Mt.length:0;let et=0;pt.morphAttributes.position!==void 0&&(et=1),pt.morphAttributes.normal!==void 0&&(et=2),pt.morphAttributes.color!==void 0&&(et=3);let yt,At,Ut,tt;if(St){const Te=Li[St];yt=Te.vertexShader,At=Te.fragmentShader}else yt=C.vertexShader,At=C.fragmentShader,m.update(C),Ut=m.getVertexShaderID(C),tt=m.getFragmentShaderID(C);const lt=r.getRenderTarget(),Dt=r.state.buffers.depth.getReversed(),It=ot.isInstancedMesh===!0,Xt=ot.isBatchedMesh===!0,de=!!C.map,sn=!!C.matcap,I=!!Z,Ae=!!C.aoMap,ie=!!C.lightMap,te=!!C.bumpMap,Wt=!!C.normalMap,Ge=!!C.displacementMap,kt=!!C.emissiveMap,se=!!C.metalnessMap,Qe=!!C.roughnessMap,Ze=C.anisotropy>0,U=C.clearcoat>0,E=C.dispersion>0,$=C.iridescence>0,dt=C.sheen>0,xt=C.transmission>0,ct=Ze&&!!C.anisotropyMap,Zt=U&&!!C.clearcoatMap,Rt=U&&!!C.clearcoatNormalMap,Yt=U&&!!C.clearcoatRoughnessMap,jt=$&&!!C.iridescenceMap,Tt=$&&!!C.iridescenceThicknessMap,Ct=dt&&!!C.sheenColorMap,Kt=dt&&!!C.sheenRoughnessMap,zt=!!C.specularMap,Lt=!!C.specularColorMap,oe=!!C.specularIntensityMap,k=xt&&!!C.transmissionMap,bt=xt&&!!C.thicknessMap,wt=!!C.gradientMap,Bt=!!C.alphaMap,Et=C.alphaTest>0,gt=!!C.alphaHash,Ft=!!C.extensions;let ae=qa;C.toneMapped&&(lt===null||lt.isXRRenderTarget===!0)&&(ae=r.toneMapping);const Ne={shaderID:St,shaderType:C.type,shaderName:C.name,vertexShader:yt,fragmentShader:At,defines:C.defines,customVertexShaderID:Ut,customFragmentShaderID:tt,isRawShaderMaterial:C.isRawShaderMaterial===!0,glslVersion:C.glslVersion,precision:x,batching:Xt,batchingColor:Xt&&ot._colorsTexture!==null,instancing:It,instancingColor:It&&ot.instanceColor!==null,instancingMorph:It&&ot.morphTexture!==null,supportsVertexTextures:y,outputColorSpace:lt===null?r.outputColorSpace:lt.isXRRenderTarget===!0?lt.texture.colorSpace:Nr,alphaToCoverage:!!C.alphaToCoverage,map:de,matcap:sn,envMap:I,envMapMode:I&&Z.mapping,envMapCubeUVHeight:X,aoMap:Ae,lightMap:ie,bumpMap:te,normalMap:Wt,displacementMap:y&&Ge,emissiveMap:kt,normalMapObjectSpace:Wt&&C.normalMapType===aM,normalMapTangentSpace:Wt&&C.normalMapType===av,metalnessMap:se,roughnessMap:Qe,anisotropy:Ze,anisotropyMap:ct,clearcoat:U,clearcoatMap:Zt,clearcoatNormalMap:Rt,clearcoatRoughnessMap:Yt,dispersion:E,iridescence:$,iridescenceMap:jt,iridescenceThicknessMap:Tt,sheen:dt,sheenColorMap:Ct,sheenRoughnessMap:Kt,specularMap:zt,specularColorMap:Lt,specularIntensityMap:oe,transmission:xt,transmissionMap:k,thicknessMap:bt,gradientMap:wt,opaque:C.transparent===!1&&C.blending===Cr&&C.alphaToCoverage===!1,alphaMap:Bt,alphaTest:Et,alphaHash:gt,combine:C.combine,mapUv:de&&R(C.map.channel),aoMapUv:Ae&&R(C.aoMap.channel),lightMapUv:ie&&R(C.lightMap.channel),bumpMapUv:te&&R(C.bumpMap.channel),normalMapUv:Wt&&R(C.normalMap.channel),displacementMapUv:Ge&&R(C.displacementMap.channel),emissiveMapUv:kt&&R(C.emissiveMap.channel),metalnessMapUv:se&&R(C.metalnessMap.channel),roughnessMapUv:Qe&&R(C.roughnessMap.channel),anisotropyMapUv:ct&&R(C.anisotropyMap.channel),clearcoatMapUv:Zt&&R(C.clearcoatMap.channel),clearcoatNormalMapUv:Rt&&R(C.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Yt&&R(C.clearcoatRoughnessMap.channel),iridescenceMapUv:jt&&R(C.iridescenceMap.channel),iridescenceThicknessMapUv:Tt&&R(C.iridescenceThicknessMap.channel),sheenColorMapUv:Ct&&R(C.sheenColorMap.channel),sheenRoughnessMapUv:Kt&&R(C.sheenRoughnessMap.channel),specularMapUv:zt&&R(C.specularMap.channel),specularColorMapUv:Lt&&R(C.specularColorMap.channel),specularIntensityMapUv:oe&&R(C.specularIntensityMap.channel),transmissionMapUv:k&&R(C.transmissionMap.channel),thicknessMapUv:bt&&R(C.thicknessMap.channel),alphaMapUv:Bt&&R(C.alphaMap.channel),vertexTangents:!!pt.attributes.tangent&&(Wt||Ze),vertexColors:C.vertexColors,vertexAlphas:C.vertexColors===!0&&!!pt.attributes.color&&pt.attributes.color.itemSize===4,pointsUvs:ot.isPoints===!0&&!!pt.attributes.uv&&(de||Bt),fog:!!ft,useFog:C.fog===!0,fogExp2:!!ft&&ft.isFogExp2,flatShading:C.flatShading===!0&&C.wireframe===!1,sizeAttenuation:C.sizeAttenuation===!0,logarithmicDepthBuffer:g,reversedDepthBuffer:Dt,skinning:ot.isSkinnedMesh===!0,morphTargets:pt.morphAttributes.position!==void 0,morphNormals:pt.morphAttributes.normal!==void 0,morphColors:pt.morphAttributes.color!==void 0,morphTargetsCount:L,morphTextureStride:et,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:C.dithering,shadowMapEnabled:r.shadowMap.enabled&&V.length>0,shadowMapType:r.shadowMap.type,toneMapping:ae,decodeVideoTexture:de&&C.map.isVideoTexture===!0&&we.getTransfer(C.map.colorSpace)===Fe,decodeVideoTextureEmissive:kt&&C.emissiveMap.isVideoTexture===!0&&we.getTransfer(C.emissiveMap.colorSpace)===Fe,premultipliedAlpha:C.premultipliedAlpha,doubleSided:C.side===la,flipSided:C.side===Wn,useDepthPacking:C.depthPacking>=0,depthPacking:C.depthPacking||0,index0AttributeName:C.index0AttributeName,extensionClipCullDistance:Ft&&C.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ft&&C.extensions.multiDraw===!0||Xt)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:C.customProgramCacheKey()};return Ne.vertexUv1s=p.has(1),Ne.vertexUv2s=p.has(2),Ne.vertexUv3s=p.has(3),p.clear(),Ne}function S(C){const w=[];if(C.shaderID?w.push(C.shaderID):(w.push(C.customVertexShaderID),w.push(C.customFragmentShaderID)),C.defines!==void 0)for(const V in C.defines)w.push(V),w.push(C.defines[V]);return C.isRawShaderMaterial===!1&&(H(w,C),O(w,C),w.push(r.outputColorSpace)),w.push(C.customProgramCacheKey),w.join()}function H(C,w){C.push(w.precision),C.push(w.outputColorSpace),C.push(w.envMapMode),C.push(w.envMapCubeUVHeight),C.push(w.mapUv),C.push(w.alphaMapUv),C.push(w.lightMapUv),C.push(w.aoMapUv),C.push(w.bumpMapUv),C.push(w.normalMapUv),C.push(w.displacementMapUv),C.push(w.emissiveMapUv),C.push(w.metalnessMapUv),C.push(w.roughnessMapUv),C.push(w.anisotropyMapUv),C.push(w.clearcoatMapUv),C.push(w.clearcoatNormalMapUv),C.push(w.clearcoatRoughnessMapUv),C.push(w.iridescenceMapUv),C.push(w.iridescenceThicknessMapUv),C.push(w.sheenColorMapUv),C.push(w.sheenRoughnessMapUv),C.push(w.specularMapUv),C.push(w.specularColorMapUv),C.push(w.specularIntensityMapUv),C.push(w.transmissionMapUv),C.push(w.thicknessMapUv),C.push(w.combine),C.push(w.fogExp2),C.push(w.sizeAttenuation),C.push(w.morphTargetsCount),C.push(w.morphAttributeCount),C.push(w.numDirLights),C.push(w.numPointLights),C.push(w.numSpotLights),C.push(w.numSpotLightMaps),C.push(w.numHemiLights),C.push(w.numRectAreaLights),C.push(w.numDirLightShadows),C.push(w.numPointLightShadows),C.push(w.numSpotLightShadows),C.push(w.numSpotLightShadowsWithMaps),C.push(w.numLightProbes),C.push(w.shadowMapType),C.push(w.toneMapping),C.push(w.numClippingPlanes),C.push(w.numClipIntersection),C.push(w.depthPacking)}function O(C,w){d.disableAll(),w.supportsVertexTextures&&d.enable(0),w.instancing&&d.enable(1),w.instancingColor&&d.enable(2),w.instancingMorph&&d.enable(3),w.matcap&&d.enable(4),w.envMap&&d.enable(5),w.normalMapObjectSpace&&d.enable(6),w.normalMapTangentSpace&&d.enable(7),w.clearcoat&&d.enable(8),w.iridescence&&d.enable(9),w.alphaTest&&d.enable(10),w.vertexColors&&d.enable(11),w.vertexAlphas&&d.enable(12),w.vertexUv1s&&d.enable(13),w.vertexUv2s&&d.enable(14),w.vertexUv3s&&d.enable(15),w.vertexTangents&&d.enable(16),w.anisotropy&&d.enable(17),w.alphaHash&&d.enable(18),w.batching&&d.enable(19),w.dispersion&&d.enable(20),w.batchingColor&&d.enable(21),w.gradientMap&&d.enable(22),C.push(d.mask),d.disableAll(),w.fog&&d.enable(0),w.useFog&&d.enable(1),w.flatShading&&d.enable(2),w.logarithmicDepthBuffer&&d.enable(3),w.reversedDepthBuffer&&d.enable(4),w.skinning&&d.enable(5),w.morphTargets&&d.enable(6),w.morphNormals&&d.enable(7),w.morphColors&&d.enable(8),w.premultipliedAlpha&&d.enable(9),w.shadowMapEnabled&&d.enable(10),w.doubleSided&&d.enable(11),w.flipSided&&d.enable(12),w.useDepthPacking&&d.enable(13),w.dithering&&d.enable(14),w.transmission&&d.enable(15),w.sheen&&d.enable(16),w.opaque&&d.enable(17),w.pointsUvs&&d.enable(18),w.decodeVideoTexture&&d.enable(19),w.decodeVideoTextureEmissive&&d.enable(20),w.alphaToCoverage&&d.enable(21),C.push(d.mask)}function D(C){const w=b[C.type];let V;if(w){const it=Li[w];V=OM.clone(it.uniforms)}else V=C.uniforms;return V}function F(C,w){let V;for(let it=0,ot=_.length;it<ot;it++){const ft=_[it];if(ft.cacheKey===w){V=ft,++V.usedTimes;break}}return V===void 0&&(V=new hA(r,w,C,c),_.push(V)),V}function z(C){if(--C.usedTimes===0){const w=_.indexOf(C);_[w]=_[_.length-1],_.pop(),C.destroy()}}function B(C){m.remove(C)}function Y(){m.dispose()}return{getParameters:M,getProgramCacheKey:S,getUniforms:D,acquireProgram:F,releaseProgram:z,releaseShaderCache:B,programs:_,dispose:Y}}function gA(){let r=new WeakMap;function t(h){return r.has(h)}function i(h){let d=r.get(h);return d===void 0&&(d={},r.set(h,d)),d}function s(h){r.delete(h)}function l(h,d,m){r.get(h)[d]=m}function c(){r=new WeakMap}return{has:t,get:i,remove:s,update:l,dispose:c}}function vA(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function B0(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function I0(){const r=[];let t=0;const i=[],s=[],l=[];function c(){t=0,i.length=0,s.length=0,l.length=0}function h(g,y,x,b,R,M){let S=r[t];return S===void 0?(S={id:g.id,object:g,geometry:y,material:x,groupOrder:b,renderOrder:g.renderOrder,z:R,group:M},r[t]=S):(S.id=g.id,S.object=g,S.geometry=y,S.material=x,S.groupOrder=b,S.renderOrder=g.renderOrder,S.z=R,S.group=M),t++,S}function d(g,y,x,b,R,M){const S=h(g,y,x,b,R,M);x.transmission>0?s.push(S):x.transparent===!0?l.push(S):i.push(S)}function m(g,y,x,b,R,M){const S=h(g,y,x,b,R,M);x.transmission>0?s.unshift(S):x.transparent===!0?l.unshift(S):i.unshift(S)}function p(g,y){i.length>1&&i.sort(g||vA),s.length>1&&s.sort(y||B0),l.length>1&&l.sort(y||B0)}function _(){for(let g=t,y=r.length;g<y;g++){const x=r[g];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:i,transmissive:s,transparent:l,init:c,push:d,unshift:m,finish:_,sort:p}}function SA(){let r=new WeakMap;function t(s,l){const c=r.get(s);let h;return c===void 0?(h=new I0,r.set(s,[h])):l>=c.length?(h=new I0,c.push(h)):h=c[l],h}function i(){r=new WeakMap}return{get:t,dispose:i}}function yA(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new K,color:new Me};break;case"SpotLight":i={position:new K,direction:new K,color:new Me,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new K,color:new Me,distance:0,decay:0};break;case"HemisphereLight":i={direction:new K,skyColor:new Me,groundColor:new Me};break;case"RectAreaLight":i={color:new Me,position:new K,halfWidth:new K,halfHeight:new K};break}return r[t.id]=i,i}}}function xA(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=i,i}}}let MA=0;function EA(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function TA(r){const t=new yA,i=xA(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new K);const l=new K,c=new Ke,h=new Ke;function d(p){let _=0,g=0,y=0;for(let C=0;C<9;C++)s.probe[C].set(0,0,0);let x=0,b=0,R=0,M=0,S=0,H=0,O=0,D=0,F=0,z=0,B=0;p.sort(EA);for(let C=0,w=p.length;C<w;C++){const V=p[C],it=V.color,ot=V.intensity,ft=V.distance,pt=V.shadow&&V.shadow.map?V.shadow.map.texture:null;if(V.isAmbientLight)_+=it.r*ot,g+=it.g*ot,y+=it.b*ot;else if(V.isLightProbe){for(let N=0;N<9;N++)s.probe[N].addScaledVector(V.sh.coefficients[N],ot);B++}else if(V.isDirectionalLight){const N=t.get(V);if(N.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){const Z=V.shadow,X=i.get(V);X.shadowIntensity=Z.intensity,X.shadowBias=Z.bias,X.shadowNormalBias=Z.normalBias,X.shadowRadius=Z.radius,X.shadowMapSize=Z.mapSize,s.directionalShadow[x]=X,s.directionalShadowMap[x]=pt,s.directionalShadowMatrix[x]=V.shadow.matrix,H++}s.directional[x]=N,x++}else if(V.isSpotLight){const N=t.get(V);N.position.setFromMatrixPosition(V.matrixWorld),N.color.copy(it).multiplyScalar(ot),N.distance=ft,N.coneCos=Math.cos(V.angle),N.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),N.decay=V.decay,s.spot[R]=N;const Z=V.shadow;if(V.map&&(s.spotLightMap[F]=V.map,F++,Z.updateMatrices(V),V.castShadow&&z++),s.spotLightMatrix[R]=Z.matrix,V.castShadow){const X=i.get(V);X.shadowIntensity=Z.intensity,X.shadowBias=Z.bias,X.shadowNormalBias=Z.normalBias,X.shadowRadius=Z.radius,X.shadowMapSize=Z.mapSize,s.spotShadow[R]=X,s.spotShadowMap[R]=pt,D++}R++}else if(V.isRectAreaLight){const N=t.get(V);N.color.copy(it).multiplyScalar(ot),N.halfWidth.set(V.width*.5,0,0),N.halfHeight.set(0,V.height*.5,0),s.rectArea[M]=N,M++}else if(V.isPointLight){const N=t.get(V);if(N.color.copy(V.color).multiplyScalar(V.intensity),N.distance=V.distance,N.decay=V.decay,V.castShadow){const Z=V.shadow,X=i.get(V);X.shadowIntensity=Z.intensity,X.shadowBias=Z.bias,X.shadowNormalBias=Z.normalBias,X.shadowRadius=Z.radius,X.shadowMapSize=Z.mapSize,X.shadowCameraNear=Z.camera.near,X.shadowCameraFar=Z.camera.far,s.pointShadow[b]=X,s.pointShadowMap[b]=pt,s.pointShadowMatrix[b]=V.shadow.matrix,O++}s.point[b]=N,b++}else if(V.isHemisphereLight){const N=t.get(V);N.skyColor.copy(V.color).multiplyScalar(ot),N.groundColor.copy(V.groundColor).multiplyScalar(ot),s.hemi[S]=N,S++}}M>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Ot.LTC_FLOAT_1,s.rectAreaLTC2=Ot.LTC_FLOAT_2):(s.rectAreaLTC1=Ot.LTC_HALF_1,s.rectAreaLTC2=Ot.LTC_HALF_2)),s.ambient[0]=_,s.ambient[1]=g,s.ambient[2]=y;const Y=s.hash;(Y.directionalLength!==x||Y.pointLength!==b||Y.spotLength!==R||Y.rectAreaLength!==M||Y.hemiLength!==S||Y.numDirectionalShadows!==H||Y.numPointShadows!==O||Y.numSpotShadows!==D||Y.numSpotMaps!==F||Y.numLightProbes!==B)&&(s.directional.length=x,s.spot.length=R,s.rectArea.length=M,s.point.length=b,s.hemi.length=S,s.directionalShadow.length=H,s.directionalShadowMap.length=H,s.pointShadow.length=O,s.pointShadowMap.length=O,s.spotShadow.length=D,s.spotShadowMap.length=D,s.directionalShadowMatrix.length=H,s.pointShadowMatrix.length=O,s.spotLightMatrix.length=D+F-z,s.spotLightMap.length=F,s.numSpotLightShadowsWithMaps=z,s.numLightProbes=B,Y.directionalLength=x,Y.pointLength=b,Y.spotLength=R,Y.rectAreaLength=M,Y.hemiLength=S,Y.numDirectionalShadows=H,Y.numPointShadows=O,Y.numSpotShadows=D,Y.numSpotMaps=F,Y.numLightProbes=B,s.version=MA++)}function m(p,_){let g=0,y=0,x=0,b=0,R=0;const M=_.matrixWorldInverse;for(let S=0,H=p.length;S<H;S++){const O=p[S];if(O.isDirectionalLight){const D=s.directional[g];D.direction.setFromMatrixPosition(O.matrixWorld),l.setFromMatrixPosition(O.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(M),g++}else if(O.isSpotLight){const D=s.spot[x];D.position.setFromMatrixPosition(O.matrixWorld),D.position.applyMatrix4(M),D.direction.setFromMatrixPosition(O.matrixWorld),l.setFromMatrixPosition(O.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(M),x++}else if(O.isRectAreaLight){const D=s.rectArea[b];D.position.setFromMatrixPosition(O.matrixWorld),D.position.applyMatrix4(M),h.identity(),c.copy(O.matrixWorld),c.premultiply(M),h.extractRotation(c),D.halfWidth.set(O.width*.5,0,0),D.halfHeight.set(0,O.height*.5,0),D.halfWidth.applyMatrix4(h),D.halfHeight.applyMatrix4(h),b++}else if(O.isPointLight){const D=s.point[y];D.position.setFromMatrixPosition(O.matrixWorld),D.position.applyMatrix4(M),y++}else if(O.isHemisphereLight){const D=s.hemi[R];D.direction.setFromMatrixPosition(O.matrixWorld),D.direction.transformDirection(M),R++}}}return{setup:d,setupView:m,state:s}}function F0(r){const t=new TA(r),i=[],s=[];function l(_){p.camera=_,i.length=0,s.length=0}function c(_){i.push(_)}function h(_){s.push(_)}function d(){t.setup(i)}function m(_){t.setupView(i,_)}const p={lightsArray:i,shadowsArray:s,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:d,setupLightsView:m,pushLight:c,pushShadow:h}}function bA(r){let t=new WeakMap;function i(l,c=0){const h=t.get(l);let d;return h===void 0?(d=new F0(r),t.set(l,[d])):c>=h.length?(d=new F0(r),h.push(d)):d=h[c],d}function s(){t=new WeakMap}return{get:i,dispose:s}}const AA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,RA=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function CA(r,t,i){let s=new Id;const l=new ce,c=new ce,h=new tn,d=new WM({depthPacking:iM}),m=new qM,p={},_=i.maxTextureSize,g={[Ya]:Wn,[Wn]:Ya,[la]:la},y=new ha({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ce},radius:{value:4}},vertexShader:AA,fragmentShader:RA}),x=y.clone();x.defines.HORIZONTAL_PASS=1;const b=new bi;b.setAttribute("position",new Ti(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const R=new ua(b,y),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Y0;let S=this.type;this.render=function(z,B,Y){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||z.length===0)return;const C=r.getRenderTarget(),w=r.getActiveCubeFace(),V=r.getActiveMipmapLevel(),it=r.state;it.setBlending(Wa),it.buffers.depth.getReversed()===!0?it.buffers.color.setClear(0,0,0,0):it.buffers.color.setClear(1,1,1,1),it.buffers.depth.setTest(!0),it.setScissorTest(!1);const ot=S!==oa&&this.type===oa,ft=S===oa&&this.type!==oa;for(let pt=0,N=z.length;pt<N;pt++){const Z=z[pt],X=Z.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;l.copy(X.mapSize);const St=X.getFrameExtents();if(l.multiply(St),c.copy(X.mapSize),(l.x>_||l.y>_)&&(l.x>_&&(c.x=Math.floor(_/St.x),l.x=c.x*St.x,X.mapSize.x=c.x),l.y>_&&(c.y=Math.floor(_/St.y),l.y=c.y*St.y,X.mapSize.y=c.y)),X.map===null||ot===!0||ft===!0){const L=this.type!==oa?{minFilter:ni,magFilter:ni}:{};X.map!==null&&X.map.dispose(),X.map=new ja(l.x,l.y,L),X.map.texture.name=Z.name+".shadowMap",X.camera.updateProjectionMatrix()}r.setRenderTarget(X.map),r.clear();const Mt=X.getViewportCount();for(let L=0;L<Mt;L++){const et=X.getViewport(L);h.set(c.x*et.x,c.y*et.y,c.x*et.z,c.y*et.w),it.viewport(h),X.updateMatrices(Z,L),s=X.getFrustum(),D(B,Y,X.camera,Z,this.type)}X.isPointLightShadow!==!0&&this.type===oa&&H(X,Y),X.needsUpdate=!1}S=this.type,M.needsUpdate=!1,r.setRenderTarget(C,w,V)};function H(z,B){const Y=t.update(R);y.defines.VSM_SAMPLES!==z.blurSamples&&(y.defines.VSM_SAMPLES=z.blurSamples,x.defines.VSM_SAMPLES=z.blurSamples,y.needsUpdate=!0,x.needsUpdate=!0),z.mapPass===null&&(z.mapPass=new ja(l.x,l.y)),y.uniforms.shadow_pass.value=z.map.texture,y.uniforms.resolution.value=z.mapSize,y.uniforms.radius.value=z.radius,r.setRenderTarget(z.mapPass),r.clear(),r.renderBufferDirect(B,null,Y,y,R,null),x.uniforms.shadow_pass.value=z.mapPass.texture,x.uniforms.resolution.value=z.mapSize,x.uniforms.radius.value=z.radius,r.setRenderTarget(z.map),r.clear(),r.renderBufferDirect(B,null,Y,x,R,null)}function O(z,B,Y,C){let w=null;const V=Y.isPointLight===!0?z.customDistanceMaterial:z.customDepthMaterial;if(V!==void 0)w=V;else if(w=Y.isPointLight===!0?m:d,r.localClippingEnabled&&B.clipShadows===!0&&Array.isArray(B.clippingPlanes)&&B.clippingPlanes.length!==0||B.displacementMap&&B.displacementScale!==0||B.alphaMap&&B.alphaTest>0||B.map&&B.alphaTest>0||B.alphaToCoverage===!0){const it=w.uuid,ot=B.uuid;let ft=p[it];ft===void 0&&(ft={},p[it]=ft);let pt=ft[ot];pt===void 0&&(pt=w.clone(),ft[ot]=pt,B.addEventListener("dispose",F)),w=pt}if(w.visible=B.visible,w.wireframe=B.wireframe,C===oa?w.side=B.shadowSide!==null?B.shadowSide:B.side:w.side=B.shadowSide!==null?B.shadowSide:g[B.side],w.alphaMap=B.alphaMap,w.alphaTest=B.alphaToCoverage===!0?.5:B.alphaTest,w.map=B.map,w.clipShadows=B.clipShadows,w.clippingPlanes=B.clippingPlanes,w.clipIntersection=B.clipIntersection,w.displacementMap=B.displacementMap,w.displacementScale=B.displacementScale,w.displacementBias=B.displacementBias,w.wireframeLinewidth=B.wireframeLinewidth,w.linewidth=B.linewidth,Y.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const it=r.properties.get(w);it.light=Y}return w}function D(z,B,Y,C,w){if(z.visible===!1)return;if(z.layers.test(B.layers)&&(z.isMesh||z.isLine||z.isPoints)&&(z.castShadow||z.receiveShadow&&w===oa)&&(!z.frustumCulled||s.intersectsObject(z))){z.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,z.matrixWorld);const ot=t.update(z),ft=z.material;if(Array.isArray(ft)){const pt=ot.groups;for(let N=0,Z=pt.length;N<Z;N++){const X=pt[N],St=ft[X.materialIndex];if(St&&St.visible){const Mt=O(z,St,C,w);z.onBeforeShadow(r,z,B,Y,ot,Mt,X),r.renderBufferDirect(Y,null,ot,Mt,z,X),z.onAfterShadow(r,z,B,Y,ot,Mt,X)}}}else if(ft.visible){const pt=O(z,ft,C,w);z.onBeforeShadow(r,z,B,Y,ot,pt,null),r.renderBufferDirect(Y,null,ot,pt,z,null),z.onAfterShadow(r,z,B,Y,ot,pt,null)}}const it=z.children;for(let ot=0,ft=it.length;ot<ft;ot++)D(it[ot],B,Y,C,w)}function F(z){z.target.removeEventListener("dispose",F);for(const Y in p){const C=p[Y],w=z.target.uuid;w in C&&(C[w].dispose(),delete C[w])}}}const wA={[Fh]:Hh,[Gh]:Xh,[Vh]:Wh,[Dr]:kh,[Hh]:Fh,[Xh]:Gh,[Wh]:Vh,[kh]:Dr};function DA(r,t){function i(){let k=!1;const bt=new tn;let wt=null;const Bt=new tn(0,0,0,0);return{setMask:function(Et){wt!==Et&&!k&&(r.colorMask(Et,Et,Et,Et),wt=Et)},setLocked:function(Et){k=Et},setClear:function(Et,gt,Ft,ae,Ne){Ne===!0&&(Et*=ae,gt*=ae,Ft*=ae),bt.set(Et,gt,Ft,ae),Bt.equals(bt)===!1&&(r.clearColor(Et,gt,Ft,ae),Bt.copy(bt))},reset:function(){k=!1,wt=null,Bt.set(-1,0,0,0)}}}function s(){let k=!1,bt=!1,wt=null,Bt=null,Et=null;return{setReversed:function(gt){if(bt!==gt){const Ft=t.get("EXT_clip_control");gt?Ft.clipControlEXT(Ft.LOWER_LEFT_EXT,Ft.ZERO_TO_ONE_EXT):Ft.clipControlEXT(Ft.LOWER_LEFT_EXT,Ft.NEGATIVE_ONE_TO_ONE_EXT),bt=gt;const ae=Et;Et=null,this.setClear(ae)}},getReversed:function(){return bt},setTest:function(gt){gt?lt(r.DEPTH_TEST):Dt(r.DEPTH_TEST)},setMask:function(gt){wt!==gt&&!k&&(r.depthMask(gt),wt=gt)},setFunc:function(gt){if(bt&&(gt=wA[gt]),Bt!==gt){switch(gt){case Fh:r.depthFunc(r.NEVER);break;case Hh:r.depthFunc(r.ALWAYS);break;case Gh:r.depthFunc(r.LESS);break;case Dr:r.depthFunc(r.LEQUAL);break;case Vh:r.depthFunc(r.EQUAL);break;case kh:r.depthFunc(r.GEQUAL);break;case Xh:r.depthFunc(r.GREATER);break;case Wh:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Bt=gt}},setLocked:function(gt){k=gt},setClear:function(gt){Et!==gt&&(bt&&(gt=1-gt),r.clearDepth(gt),Et=gt)},reset:function(){k=!1,wt=null,Bt=null,Et=null,bt=!1}}}function l(){let k=!1,bt=null,wt=null,Bt=null,Et=null,gt=null,Ft=null,ae=null,Ne=null;return{setTest:function(Te){k||(Te?lt(r.STENCIL_TEST):Dt(r.STENCIL_TEST))},setMask:function(Te){bt!==Te&&!k&&(r.stencilMask(Te),bt=Te)},setFunc:function(Te,Un,ai){(wt!==Te||Bt!==Un||Et!==ai)&&(r.stencilFunc(Te,Un,ai),wt=Te,Bt=Un,Et=ai)},setOp:function(Te,Un,ai){(gt!==Te||Ft!==Un||ae!==ai)&&(r.stencilOp(Te,Un,ai),gt=Te,Ft=Un,ae=ai)},setLocked:function(Te){k=Te},setClear:function(Te){Ne!==Te&&(r.clearStencil(Te),Ne=Te)},reset:function(){k=!1,bt=null,wt=null,Bt=null,Et=null,gt=null,Ft=null,ae=null,Ne=null}}}const c=new i,h=new s,d=new l,m=new WeakMap,p=new WeakMap;let _={},g={},y=new WeakMap,x=[],b=null,R=!1,M=null,S=null,H=null,O=null,D=null,F=null,z=null,B=new Me(0,0,0),Y=0,C=!1,w=null,V=null,it=null,ot=null,ft=null;const pt=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let N=!1,Z=0;const X=r.getParameter(r.VERSION);X.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(X)[1]),N=Z>=1):X.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),N=Z>=2);let St=null,Mt={};const L=r.getParameter(r.SCISSOR_BOX),et=r.getParameter(r.VIEWPORT),yt=new tn().fromArray(L),At=new tn().fromArray(et);function Ut(k,bt,wt,Bt){const Et=new Uint8Array(4),gt=r.createTexture();r.bindTexture(k,gt),r.texParameteri(k,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(k,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Ft=0;Ft<wt;Ft++)k===r.TEXTURE_3D||k===r.TEXTURE_2D_ARRAY?r.texImage3D(bt,0,r.RGBA,1,1,Bt,0,r.RGBA,r.UNSIGNED_BYTE,Et):r.texImage2D(bt+Ft,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Et);return gt}const tt={};tt[r.TEXTURE_2D]=Ut(r.TEXTURE_2D,r.TEXTURE_2D,1),tt[r.TEXTURE_CUBE_MAP]=Ut(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),tt[r.TEXTURE_2D_ARRAY]=Ut(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),tt[r.TEXTURE_3D]=Ut(r.TEXTURE_3D,r.TEXTURE_3D,1,1),c.setClear(0,0,0,1),h.setClear(1),d.setClear(0),lt(r.DEPTH_TEST),h.setFunc(Dr),te(!1),Wt(Pg),lt(r.CULL_FACE),Ae(Wa);function lt(k){_[k]!==!0&&(r.enable(k),_[k]=!0)}function Dt(k){_[k]!==!1&&(r.disable(k),_[k]=!1)}function It(k,bt){return g[k]!==bt?(r.bindFramebuffer(k,bt),g[k]=bt,k===r.DRAW_FRAMEBUFFER&&(g[r.FRAMEBUFFER]=bt),k===r.FRAMEBUFFER&&(g[r.DRAW_FRAMEBUFFER]=bt),!0):!1}function Xt(k,bt){let wt=x,Bt=!1;if(k){wt=y.get(bt),wt===void 0&&(wt=[],y.set(bt,wt));const Et=k.textures;if(wt.length!==Et.length||wt[0]!==r.COLOR_ATTACHMENT0){for(let gt=0,Ft=Et.length;gt<Ft;gt++)wt[gt]=r.COLOR_ATTACHMENT0+gt;wt.length=Et.length,Bt=!0}}else wt[0]!==r.BACK&&(wt[0]=r.BACK,Bt=!0);Bt&&r.drawBuffers(wt)}function de(k){return b!==k?(r.useProgram(k),b=k,!0):!1}const sn={[xs]:r.FUNC_ADD,[wx]:r.FUNC_SUBTRACT,[Dx]:r.FUNC_REVERSE_SUBTRACT};sn[Ux]=r.MIN,sn[Lx]=r.MAX;const I={[Nx]:r.ZERO,[Ox]:r.ONE,[Px]:r.SRC_COLOR,[Bh]:r.SRC_ALPHA,[Gx]:r.SRC_ALPHA_SATURATE,[Fx]:r.DST_COLOR,[Bx]:r.DST_ALPHA,[zx]:r.ONE_MINUS_SRC_COLOR,[Ih]:r.ONE_MINUS_SRC_ALPHA,[Hx]:r.ONE_MINUS_DST_COLOR,[Ix]:r.ONE_MINUS_DST_ALPHA,[Vx]:r.CONSTANT_COLOR,[kx]:r.ONE_MINUS_CONSTANT_COLOR,[Xx]:r.CONSTANT_ALPHA,[Wx]:r.ONE_MINUS_CONSTANT_ALPHA};function Ae(k,bt,wt,Bt,Et,gt,Ft,ae,Ne,Te){if(k===Wa){R===!0&&(Dt(r.BLEND),R=!1);return}if(R===!1&&(lt(r.BLEND),R=!0),k!==Cx){if(k!==M||Te!==C){if((S!==xs||D!==xs)&&(r.blendEquation(r.FUNC_ADD),S=xs,D=xs),Te)switch(k){case Cr:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case zg:r.blendFunc(r.ONE,r.ONE);break;case Bg:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Ig:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case Cr:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case zg:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case Bg:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ig:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}H=null,O=null,F=null,z=null,B.set(0,0,0),Y=0,M=k,C=Te}return}Et=Et||bt,gt=gt||wt,Ft=Ft||Bt,(bt!==S||Et!==D)&&(r.blendEquationSeparate(sn[bt],sn[Et]),S=bt,D=Et),(wt!==H||Bt!==O||gt!==F||Ft!==z)&&(r.blendFuncSeparate(I[wt],I[Bt],I[gt],I[Ft]),H=wt,O=Bt,F=gt,z=Ft),(ae.equals(B)===!1||Ne!==Y)&&(r.blendColor(ae.r,ae.g,ae.b,Ne),B.copy(ae),Y=Ne),M=k,C=!1}function ie(k,bt){k.side===la?Dt(r.CULL_FACE):lt(r.CULL_FACE);let wt=k.side===Wn;bt&&(wt=!wt),te(wt),k.blending===Cr&&k.transparent===!1?Ae(Wa):Ae(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),h.setFunc(k.depthFunc),h.setTest(k.depthTest),h.setMask(k.depthWrite),c.setMask(k.colorWrite);const Bt=k.stencilWrite;d.setTest(Bt),Bt&&(d.setMask(k.stencilWriteMask),d.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),d.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),kt(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?lt(r.SAMPLE_ALPHA_TO_COVERAGE):Dt(r.SAMPLE_ALPHA_TO_COVERAGE)}function te(k){w!==k&&(k?r.frontFace(r.CW):r.frontFace(r.CCW),w=k)}function Wt(k){k!==bx?(lt(r.CULL_FACE),k!==V&&(k===Pg?r.cullFace(r.BACK):k===Ax?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Dt(r.CULL_FACE),V=k}function Ge(k){k!==it&&(N&&r.lineWidth(k),it=k)}function kt(k,bt,wt){k?(lt(r.POLYGON_OFFSET_FILL),(ot!==bt||ft!==wt)&&(r.polygonOffset(bt,wt),ot=bt,ft=wt)):Dt(r.POLYGON_OFFSET_FILL)}function se(k){k?lt(r.SCISSOR_TEST):Dt(r.SCISSOR_TEST)}function Qe(k){k===void 0&&(k=r.TEXTURE0+pt-1),St!==k&&(r.activeTexture(k),St=k)}function Ze(k,bt,wt){wt===void 0&&(St===null?wt=r.TEXTURE0+pt-1:wt=St);let Bt=Mt[wt];Bt===void 0&&(Bt={type:void 0,texture:void 0},Mt[wt]=Bt),(Bt.type!==k||Bt.texture!==bt)&&(St!==wt&&(r.activeTexture(wt),St=wt),r.bindTexture(k,bt||tt[k]),Bt.type=k,Bt.texture=bt)}function U(){const k=Mt[St];k!==void 0&&k.type!==void 0&&(r.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function E(){try{r.compressedTexImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function $(){try{r.compressedTexImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function dt(){try{r.texSubImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function xt(){try{r.texSubImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ct(){try{r.compressedTexSubImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Zt(){try{r.compressedTexSubImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Rt(){try{r.texStorage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Yt(){try{r.texStorage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function jt(){try{r.texImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Tt(){try{r.texImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ct(k){yt.equals(k)===!1&&(r.scissor(k.x,k.y,k.z,k.w),yt.copy(k))}function Kt(k){At.equals(k)===!1&&(r.viewport(k.x,k.y,k.z,k.w),At.copy(k))}function zt(k,bt){let wt=p.get(bt);wt===void 0&&(wt=new WeakMap,p.set(bt,wt));let Bt=wt.get(k);Bt===void 0&&(Bt=r.getUniformBlockIndex(bt,k.name),wt.set(k,Bt))}function Lt(k,bt){const Bt=p.get(bt).get(k);m.get(bt)!==Bt&&(r.uniformBlockBinding(bt,Bt,k.__bindingPointIndex),m.set(bt,Bt))}function oe(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),h.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),_={},St=null,Mt={},g={},y=new WeakMap,x=[],b=null,R=!1,M=null,S=null,H=null,O=null,D=null,F=null,z=null,B=new Me(0,0,0),Y=0,C=!1,w=null,V=null,it=null,ot=null,ft=null,yt.set(0,0,r.canvas.width,r.canvas.height),At.set(0,0,r.canvas.width,r.canvas.height),c.reset(),h.reset(),d.reset()}return{buffers:{color:c,depth:h,stencil:d},enable:lt,disable:Dt,bindFramebuffer:It,drawBuffers:Xt,useProgram:de,setBlending:Ae,setMaterial:ie,setFlipSided:te,setCullFace:Wt,setLineWidth:Ge,setPolygonOffset:kt,setScissorTest:se,activeTexture:Qe,bindTexture:Ze,unbindTexture:U,compressedTexImage2D:E,compressedTexImage3D:$,texImage2D:jt,texImage3D:Tt,updateUBOMapping:zt,uniformBlockBinding:Lt,texStorage2D:Rt,texStorage3D:Yt,texSubImage2D:dt,texSubImage3D:xt,compressedTexSubImage2D:ct,compressedTexSubImage3D:Zt,scissor:Ct,viewport:Kt,reset:oe}}function UA(r,t,i,s,l,c,h){const d=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new ce,_=new WeakMap;let g;const y=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(U,E){return x?new OffscreenCanvas(U,E):Pc("canvas")}function R(U,E,$){let dt=1;const xt=Ze(U);if((xt.width>$||xt.height>$)&&(dt=$/Math.max(xt.width,xt.height)),dt<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const ct=Math.floor(dt*xt.width),Zt=Math.floor(dt*xt.height);g===void 0&&(g=b(ct,Zt));const Rt=E?b(ct,Zt):g;return Rt.width=ct,Rt.height=Zt,Rt.getContext("2d").drawImage(U,0,0,ct,Zt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+xt.width+"x"+xt.height+") to ("+ct+"x"+Zt+")."),Rt}else return"data"in U&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+xt.width+"x"+xt.height+")."),U;return U}function M(U){return U.generateMipmaps}function S(U){r.generateMipmap(U)}function H(U){return U.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?r.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function O(U,E,$,dt,xt=!1){if(U!==null){if(r[U]!==void 0)return r[U];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let ct=E;if(E===r.RED&&($===r.FLOAT&&(ct=r.R32F),$===r.HALF_FLOAT&&(ct=r.R16F),$===r.UNSIGNED_BYTE&&(ct=r.R8)),E===r.RED_INTEGER&&($===r.UNSIGNED_BYTE&&(ct=r.R8UI),$===r.UNSIGNED_SHORT&&(ct=r.R16UI),$===r.UNSIGNED_INT&&(ct=r.R32UI),$===r.BYTE&&(ct=r.R8I),$===r.SHORT&&(ct=r.R16I),$===r.INT&&(ct=r.R32I)),E===r.RG&&($===r.FLOAT&&(ct=r.RG32F),$===r.HALF_FLOAT&&(ct=r.RG16F),$===r.UNSIGNED_BYTE&&(ct=r.RG8)),E===r.RG_INTEGER&&($===r.UNSIGNED_BYTE&&(ct=r.RG8UI),$===r.UNSIGNED_SHORT&&(ct=r.RG16UI),$===r.UNSIGNED_INT&&(ct=r.RG32UI),$===r.BYTE&&(ct=r.RG8I),$===r.SHORT&&(ct=r.RG16I),$===r.INT&&(ct=r.RG32I)),E===r.RGB_INTEGER&&($===r.UNSIGNED_BYTE&&(ct=r.RGB8UI),$===r.UNSIGNED_SHORT&&(ct=r.RGB16UI),$===r.UNSIGNED_INT&&(ct=r.RGB32UI),$===r.BYTE&&(ct=r.RGB8I),$===r.SHORT&&(ct=r.RGB16I),$===r.INT&&(ct=r.RGB32I)),E===r.RGBA_INTEGER&&($===r.UNSIGNED_BYTE&&(ct=r.RGBA8UI),$===r.UNSIGNED_SHORT&&(ct=r.RGBA16UI),$===r.UNSIGNED_INT&&(ct=r.RGBA32UI),$===r.BYTE&&(ct=r.RGBA8I),$===r.SHORT&&(ct=r.RGBA16I),$===r.INT&&(ct=r.RGBA32I)),E===r.RGB&&($===r.UNSIGNED_INT_5_9_9_9_REV&&(ct=r.RGB9_E5),$===r.UNSIGNED_INT_10F_11F_11F_REV&&(ct=r.R11F_G11F_B10F)),E===r.RGBA){const Zt=xt?Nc:we.getTransfer(dt);$===r.FLOAT&&(ct=r.RGBA32F),$===r.HALF_FLOAT&&(ct=r.RGBA16F),$===r.UNSIGNED_BYTE&&(ct=Zt===Fe?r.SRGB8_ALPHA8:r.RGBA8),$===r.UNSIGNED_SHORT_4_4_4_4&&(ct=r.RGBA4),$===r.UNSIGNED_SHORT_5_5_5_1&&(ct=r.RGB5_A1)}return(ct===r.R16F||ct===r.R32F||ct===r.RG16F||ct===r.RG32F||ct===r.RGBA16F||ct===r.RGBA32F)&&t.get("EXT_color_buffer_float"),ct}function D(U,E){let $;return U?E===null||E===As||E===Ho?$=r.DEPTH24_STENCIL8:E===ca?$=r.DEPTH32F_STENCIL8:E===Fo&&($=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===As||E===Ho?$=r.DEPTH_COMPONENT24:E===ca?$=r.DEPTH_COMPONENT32F:E===Fo&&($=r.DEPTH_COMPONENT16),$}function F(U,E){return M(U)===!0||U.isFramebufferTexture&&U.minFilter!==ni&&U.minFilter!==Ni?Math.log2(Math.max(E.width,E.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?E.mipmaps.length:1}function z(U){const E=U.target;E.removeEventListener("dispose",z),Y(E),E.isVideoTexture&&_.delete(E)}function B(U){const E=U.target;E.removeEventListener("dispose",B),w(E)}function Y(U){const E=s.get(U);if(E.__webglInit===void 0)return;const $=U.source,dt=y.get($);if(dt){const xt=dt[E.__cacheKey];xt.usedTimes--,xt.usedTimes===0&&C(U),Object.keys(dt).length===0&&y.delete($)}s.remove(U)}function C(U){const E=s.get(U);r.deleteTexture(E.__webglTexture);const $=U.source,dt=y.get($);delete dt[E.__cacheKey],h.memory.textures--}function w(U){const E=s.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),s.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let dt=0;dt<6;dt++){if(Array.isArray(E.__webglFramebuffer[dt]))for(let xt=0;xt<E.__webglFramebuffer[dt].length;xt++)r.deleteFramebuffer(E.__webglFramebuffer[dt][xt]);else r.deleteFramebuffer(E.__webglFramebuffer[dt]);E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer[dt])}else{if(Array.isArray(E.__webglFramebuffer))for(let dt=0;dt<E.__webglFramebuffer.length;dt++)r.deleteFramebuffer(E.__webglFramebuffer[dt]);else r.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&r.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let dt=0;dt<E.__webglColorRenderbuffer.length;dt++)E.__webglColorRenderbuffer[dt]&&r.deleteRenderbuffer(E.__webglColorRenderbuffer[dt]);E.__webglDepthRenderbuffer&&r.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const $=U.textures;for(let dt=0,xt=$.length;dt<xt;dt++){const ct=s.get($[dt]);ct.__webglTexture&&(r.deleteTexture(ct.__webglTexture),h.memory.textures--),s.remove($[dt])}s.remove(U)}let V=0;function it(){V=0}function ot(){const U=V;return U>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+l.maxTextures),V+=1,U}function ft(U){const E=[];return E.push(U.wrapS),E.push(U.wrapT),E.push(U.wrapR||0),E.push(U.magFilter),E.push(U.minFilter),E.push(U.anisotropy),E.push(U.internalFormat),E.push(U.format),E.push(U.type),E.push(U.generateMipmaps),E.push(U.premultiplyAlpha),E.push(U.flipY),E.push(U.unpackAlignment),E.push(U.colorSpace),E.join()}function pt(U,E){const $=s.get(U);if(U.isVideoTexture&&se(U),U.isRenderTargetTexture===!1&&U.isExternalTexture!==!0&&U.version>0&&$.__version!==U.version){const dt=U.image;if(dt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(dt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{tt($,U,E);return}}else U.isExternalTexture&&($.__webglTexture=U.sourceTexture?U.sourceTexture:null);i.bindTexture(r.TEXTURE_2D,$.__webglTexture,r.TEXTURE0+E)}function N(U,E){const $=s.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&$.__version!==U.version){tt($,U,E);return}i.bindTexture(r.TEXTURE_2D_ARRAY,$.__webglTexture,r.TEXTURE0+E)}function Z(U,E){const $=s.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&$.__version!==U.version){tt($,U,E);return}i.bindTexture(r.TEXTURE_3D,$.__webglTexture,r.TEXTURE0+E)}function X(U,E){const $=s.get(U);if(U.version>0&&$.__version!==U.version){lt($,U,E);return}i.bindTexture(r.TEXTURE_CUBE_MAP,$.__webglTexture,r.TEXTURE0+E)}const St={[jh]:r.REPEAT,[Es]:r.CLAMP_TO_EDGE,[Zh]:r.MIRRORED_REPEAT},Mt={[ni]:r.NEAREST,[eM]:r.NEAREST_MIPMAP_NEAREST,[ic]:r.NEAREST_MIPMAP_LINEAR,[Ni]:r.LINEAR,[nh]:r.LINEAR_MIPMAP_NEAREST,[Ts]:r.LINEAR_MIPMAP_LINEAR},L={[sM]:r.NEVER,[fM]:r.ALWAYS,[rM]:r.LESS,[sv]:r.LEQUAL,[oM]:r.EQUAL,[uM]:r.GEQUAL,[lM]:r.GREATER,[cM]:r.NOTEQUAL};function et(U,E){if(E.type===ca&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===Ni||E.magFilter===nh||E.magFilter===ic||E.magFilter===Ts||E.minFilter===Ni||E.minFilter===nh||E.minFilter===ic||E.minFilter===Ts)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(U,r.TEXTURE_WRAP_S,St[E.wrapS]),r.texParameteri(U,r.TEXTURE_WRAP_T,St[E.wrapT]),(U===r.TEXTURE_3D||U===r.TEXTURE_2D_ARRAY)&&r.texParameteri(U,r.TEXTURE_WRAP_R,St[E.wrapR]),r.texParameteri(U,r.TEXTURE_MAG_FILTER,Mt[E.magFilter]),r.texParameteri(U,r.TEXTURE_MIN_FILTER,Mt[E.minFilter]),E.compareFunction&&(r.texParameteri(U,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(U,r.TEXTURE_COMPARE_FUNC,L[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===ni||E.minFilter!==ic&&E.minFilter!==Ts||E.type===ca&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||s.get(E).__currentAnisotropy){const $=t.get("EXT_texture_filter_anisotropic");r.texParameterf(U,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,l.getMaxAnisotropy())),s.get(E).__currentAnisotropy=E.anisotropy}}}function yt(U,E){let $=!1;U.__webglInit===void 0&&(U.__webglInit=!0,E.addEventListener("dispose",z));const dt=E.source;let xt=y.get(dt);xt===void 0&&(xt={},y.set(dt,xt));const ct=ft(E);if(ct!==U.__cacheKey){xt[ct]===void 0&&(xt[ct]={texture:r.createTexture(),usedTimes:0},h.memory.textures++,$=!0),xt[ct].usedTimes++;const Zt=xt[U.__cacheKey];Zt!==void 0&&(xt[U.__cacheKey].usedTimes--,Zt.usedTimes===0&&C(E)),U.__cacheKey=ct,U.__webglTexture=xt[ct].texture}return $}function At(U,E,$){return Math.floor(Math.floor(U/$)/E)}function Ut(U,E,$,dt){const ct=U.updateRanges;if(ct.length===0)i.texSubImage2D(r.TEXTURE_2D,0,0,0,E.width,E.height,$,dt,E.data);else{ct.sort((Tt,Ct)=>Tt.start-Ct.start);let Zt=0;for(let Tt=1;Tt<ct.length;Tt++){const Ct=ct[Zt],Kt=ct[Tt],zt=Ct.start+Ct.count,Lt=At(Kt.start,E.width,4),oe=At(Ct.start,E.width,4);Kt.start<=zt+1&&Lt===oe&&At(Kt.start+Kt.count-1,E.width,4)===Lt?Ct.count=Math.max(Ct.count,Kt.start+Kt.count-Ct.start):(++Zt,ct[Zt]=Kt)}ct.length=Zt+1;const Rt=r.getParameter(r.UNPACK_ROW_LENGTH),Yt=r.getParameter(r.UNPACK_SKIP_PIXELS),jt=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,E.width);for(let Tt=0,Ct=ct.length;Tt<Ct;Tt++){const Kt=ct[Tt],zt=Math.floor(Kt.start/4),Lt=Math.ceil(Kt.count/4),oe=zt%E.width,k=Math.floor(zt/E.width),bt=Lt,wt=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,oe),r.pixelStorei(r.UNPACK_SKIP_ROWS,k),i.texSubImage2D(r.TEXTURE_2D,0,oe,k,bt,wt,$,dt,E.data)}U.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,Rt),r.pixelStorei(r.UNPACK_SKIP_PIXELS,Yt),r.pixelStorei(r.UNPACK_SKIP_ROWS,jt)}}function tt(U,E,$){let dt=r.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(dt=r.TEXTURE_2D_ARRAY),E.isData3DTexture&&(dt=r.TEXTURE_3D);const xt=yt(U,E),ct=E.source;i.bindTexture(dt,U.__webglTexture,r.TEXTURE0+$);const Zt=s.get(ct);if(ct.version!==Zt.__version||xt===!0){i.activeTexture(r.TEXTURE0+$);const Rt=we.getPrimaries(we.workingColorSpace),Yt=E.colorSpace===Xa?null:we.getPrimaries(E.colorSpace),jt=E.colorSpace===Xa||Rt===Yt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,jt);let Tt=R(E.image,!1,l.maxTextureSize);Tt=Qe(E,Tt);const Ct=c.convert(E.format,E.colorSpace),Kt=c.convert(E.type);let zt=O(E.internalFormat,Ct,Kt,E.colorSpace,E.isVideoTexture);et(dt,E);let Lt;const oe=E.mipmaps,k=E.isVideoTexture!==!0,bt=Zt.__version===void 0||xt===!0,wt=ct.dataReady,Bt=F(E,Tt);if(E.isDepthTexture)zt=D(E.format===Vo,E.type),bt&&(k?i.texStorage2D(r.TEXTURE_2D,1,zt,Tt.width,Tt.height):i.texImage2D(r.TEXTURE_2D,0,zt,Tt.width,Tt.height,0,Ct,Kt,null));else if(E.isDataTexture)if(oe.length>0){k&&bt&&i.texStorage2D(r.TEXTURE_2D,Bt,zt,oe[0].width,oe[0].height);for(let Et=0,gt=oe.length;Et<gt;Et++)Lt=oe[Et],k?wt&&i.texSubImage2D(r.TEXTURE_2D,Et,0,0,Lt.width,Lt.height,Ct,Kt,Lt.data):i.texImage2D(r.TEXTURE_2D,Et,zt,Lt.width,Lt.height,0,Ct,Kt,Lt.data);E.generateMipmaps=!1}else k?(bt&&i.texStorage2D(r.TEXTURE_2D,Bt,zt,Tt.width,Tt.height),wt&&Ut(E,Tt,Ct,Kt)):i.texImage2D(r.TEXTURE_2D,0,zt,Tt.width,Tt.height,0,Ct,Kt,Tt.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){k&&bt&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Bt,zt,oe[0].width,oe[0].height,Tt.depth);for(let Et=0,gt=oe.length;Et<gt;Et++)if(Lt=oe[Et],E.format!==Ei)if(Ct!==null)if(k){if(wt)if(E.layerUpdates.size>0){const Ft=m0(Lt.width,Lt.height,E.format,E.type);for(const ae of E.layerUpdates){const Ne=Lt.data.subarray(ae*Ft/Lt.data.BYTES_PER_ELEMENT,(ae+1)*Ft/Lt.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Et,0,0,ae,Lt.width,Lt.height,1,Ct,Ne)}E.clearLayerUpdates()}else i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Et,0,0,0,Lt.width,Lt.height,Tt.depth,Ct,Lt.data)}else i.compressedTexImage3D(r.TEXTURE_2D_ARRAY,Et,zt,Lt.width,Lt.height,Tt.depth,0,Lt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else k?wt&&i.texSubImage3D(r.TEXTURE_2D_ARRAY,Et,0,0,0,Lt.width,Lt.height,Tt.depth,Ct,Kt,Lt.data):i.texImage3D(r.TEXTURE_2D_ARRAY,Et,zt,Lt.width,Lt.height,Tt.depth,0,Ct,Kt,Lt.data)}else{k&&bt&&i.texStorage2D(r.TEXTURE_2D,Bt,zt,oe[0].width,oe[0].height);for(let Et=0,gt=oe.length;Et<gt;Et++)Lt=oe[Et],E.format!==Ei?Ct!==null?k?wt&&i.compressedTexSubImage2D(r.TEXTURE_2D,Et,0,0,Lt.width,Lt.height,Ct,Lt.data):i.compressedTexImage2D(r.TEXTURE_2D,Et,zt,Lt.width,Lt.height,0,Lt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):k?wt&&i.texSubImage2D(r.TEXTURE_2D,Et,0,0,Lt.width,Lt.height,Ct,Kt,Lt.data):i.texImage2D(r.TEXTURE_2D,Et,zt,Lt.width,Lt.height,0,Ct,Kt,Lt.data)}else if(E.isDataArrayTexture)if(k){if(bt&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Bt,zt,Tt.width,Tt.height,Tt.depth),wt)if(E.layerUpdates.size>0){const Et=m0(Tt.width,Tt.height,E.format,E.type);for(const gt of E.layerUpdates){const Ft=Tt.data.subarray(gt*Et/Tt.data.BYTES_PER_ELEMENT,(gt+1)*Et/Tt.data.BYTES_PER_ELEMENT);i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,gt,Tt.width,Tt.height,1,Ct,Kt,Ft)}E.clearLayerUpdates()}else i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,Tt.width,Tt.height,Tt.depth,Ct,Kt,Tt.data)}else i.texImage3D(r.TEXTURE_2D_ARRAY,0,zt,Tt.width,Tt.height,Tt.depth,0,Ct,Kt,Tt.data);else if(E.isData3DTexture)k?(bt&&i.texStorage3D(r.TEXTURE_3D,Bt,zt,Tt.width,Tt.height,Tt.depth),wt&&i.texSubImage3D(r.TEXTURE_3D,0,0,0,0,Tt.width,Tt.height,Tt.depth,Ct,Kt,Tt.data)):i.texImage3D(r.TEXTURE_3D,0,zt,Tt.width,Tt.height,Tt.depth,0,Ct,Kt,Tt.data);else if(E.isFramebufferTexture){if(bt)if(k)i.texStorage2D(r.TEXTURE_2D,Bt,zt,Tt.width,Tt.height);else{let Et=Tt.width,gt=Tt.height;for(let Ft=0;Ft<Bt;Ft++)i.texImage2D(r.TEXTURE_2D,Ft,zt,Et,gt,0,Ct,Kt,null),Et>>=1,gt>>=1}}else if(oe.length>0){if(k&&bt){const Et=Ze(oe[0]);i.texStorage2D(r.TEXTURE_2D,Bt,zt,Et.width,Et.height)}for(let Et=0,gt=oe.length;Et<gt;Et++)Lt=oe[Et],k?wt&&i.texSubImage2D(r.TEXTURE_2D,Et,0,0,Ct,Kt,Lt):i.texImage2D(r.TEXTURE_2D,Et,zt,Ct,Kt,Lt);E.generateMipmaps=!1}else if(k){if(bt){const Et=Ze(Tt);i.texStorage2D(r.TEXTURE_2D,Bt,zt,Et.width,Et.height)}wt&&i.texSubImage2D(r.TEXTURE_2D,0,0,0,Ct,Kt,Tt)}else i.texImage2D(r.TEXTURE_2D,0,zt,Ct,Kt,Tt);M(E)&&S(dt),Zt.__version=ct.version,E.onUpdate&&E.onUpdate(E)}U.__version=E.version}function lt(U,E,$){if(E.image.length!==6)return;const dt=yt(U,E),xt=E.source;i.bindTexture(r.TEXTURE_CUBE_MAP,U.__webglTexture,r.TEXTURE0+$);const ct=s.get(xt);if(xt.version!==ct.__version||dt===!0){i.activeTexture(r.TEXTURE0+$);const Zt=we.getPrimaries(we.workingColorSpace),Rt=E.colorSpace===Xa?null:we.getPrimaries(E.colorSpace),Yt=E.colorSpace===Xa||Zt===Rt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Yt);const jt=E.isCompressedTexture||E.image[0].isCompressedTexture,Tt=E.image[0]&&E.image[0].isDataTexture,Ct=[];for(let gt=0;gt<6;gt++)!jt&&!Tt?Ct[gt]=R(E.image[gt],!0,l.maxCubemapSize):Ct[gt]=Tt?E.image[gt].image:E.image[gt],Ct[gt]=Qe(E,Ct[gt]);const Kt=Ct[0],zt=c.convert(E.format,E.colorSpace),Lt=c.convert(E.type),oe=O(E.internalFormat,zt,Lt,E.colorSpace),k=E.isVideoTexture!==!0,bt=ct.__version===void 0||dt===!0,wt=xt.dataReady;let Bt=F(E,Kt);et(r.TEXTURE_CUBE_MAP,E);let Et;if(jt){k&&bt&&i.texStorage2D(r.TEXTURE_CUBE_MAP,Bt,oe,Kt.width,Kt.height);for(let gt=0;gt<6;gt++){Et=Ct[gt].mipmaps;for(let Ft=0;Ft<Et.length;Ft++){const ae=Et[Ft];E.format!==Ei?zt!==null?k?wt&&i.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Ft,0,0,ae.width,ae.height,zt,ae.data):i.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Ft,oe,ae.width,ae.height,0,ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?wt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Ft,0,0,ae.width,ae.height,zt,Lt,ae.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Ft,oe,ae.width,ae.height,0,zt,Lt,ae.data)}}}else{if(Et=E.mipmaps,k&&bt){Et.length>0&&Bt++;const gt=Ze(Ct[0]);i.texStorage2D(r.TEXTURE_CUBE_MAP,Bt,oe,gt.width,gt.height)}for(let gt=0;gt<6;gt++)if(Tt){k?wt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,0,0,Ct[gt].width,Ct[gt].height,zt,Lt,Ct[gt].data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,oe,Ct[gt].width,Ct[gt].height,0,zt,Lt,Ct[gt].data);for(let Ft=0;Ft<Et.length;Ft++){const Ne=Et[Ft].image[gt].image;k?wt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Ft+1,0,0,Ne.width,Ne.height,zt,Lt,Ne.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Ft+1,oe,Ne.width,Ne.height,0,zt,Lt,Ne.data)}}else{k?wt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,0,0,zt,Lt,Ct[gt]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,oe,zt,Lt,Ct[gt]);for(let Ft=0;Ft<Et.length;Ft++){const ae=Et[Ft];k?wt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Ft+1,0,0,zt,Lt,ae.image[gt]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Ft+1,oe,zt,Lt,ae.image[gt])}}}M(E)&&S(r.TEXTURE_CUBE_MAP),ct.__version=xt.version,E.onUpdate&&E.onUpdate(E)}U.__version=E.version}function Dt(U,E,$,dt,xt,ct){const Zt=c.convert($.format,$.colorSpace),Rt=c.convert($.type),Yt=O($.internalFormat,Zt,Rt,$.colorSpace),jt=s.get(E),Tt=s.get($);if(Tt.__renderTarget=E,!jt.__hasExternalTextures){const Ct=Math.max(1,E.width>>ct),Kt=Math.max(1,E.height>>ct);xt===r.TEXTURE_3D||xt===r.TEXTURE_2D_ARRAY?i.texImage3D(xt,ct,Yt,Ct,Kt,E.depth,0,Zt,Rt,null):i.texImage2D(xt,ct,Yt,Ct,Kt,0,Zt,Rt,null)}i.bindFramebuffer(r.FRAMEBUFFER,U),kt(E)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,dt,xt,Tt.__webglTexture,0,Ge(E)):(xt===r.TEXTURE_2D||xt>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&xt<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,dt,xt,Tt.__webglTexture,ct),i.bindFramebuffer(r.FRAMEBUFFER,null)}function It(U,E,$){if(r.bindRenderbuffer(r.RENDERBUFFER,U),E.depthBuffer){const dt=E.depthTexture,xt=dt&&dt.isDepthTexture?dt.type:null,ct=D(E.stencilBuffer,xt),Zt=E.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Rt=Ge(E);kt(E)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Rt,ct,E.width,E.height):$?r.renderbufferStorageMultisample(r.RENDERBUFFER,Rt,ct,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,ct,E.width,E.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Zt,r.RENDERBUFFER,U)}else{const dt=E.textures;for(let xt=0;xt<dt.length;xt++){const ct=dt[xt],Zt=c.convert(ct.format,ct.colorSpace),Rt=c.convert(ct.type),Yt=O(ct.internalFormat,Zt,Rt,ct.colorSpace),jt=Ge(E);$&&kt(E)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,jt,Yt,E.width,E.height):kt(E)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,jt,Yt,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,Yt,E.width,E.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Xt(U,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(r.FRAMEBUFFER,U),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const dt=s.get(E.depthTexture);dt.__renderTarget=E,(!dt.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),pt(E.depthTexture,0);const xt=dt.__webglTexture,ct=Ge(E);if(E.depthTexture.format===Go)kt(E)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,xt,0,ct):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,xt,0);else if(E.depthTexture.format===Vo)kt(E)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,xt,0,ct):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,xt,0);else throw new Error("Unknown depthTexture format")}function de(U){const E=s.get(U),$=U.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==U.depthTexture){const dt=U.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),dt){const xt=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,dt.removeEventListener("dispose",xt)};dt.addEventListener("dispose",xt),E.__depthDisposeCallback=xt}E.__boundDepthTexture=dt}if(U.depthTexture&&!E.__autoAllocateDepthBuffer){if($)throw new Error("target.depthTexture not supported in Cube render targets");const dt=U.texture.mipmaps;dt&&dt.length>0?Xt(E.__webglFramebuffer[0],U):Xt(E.__webglFramebuffer,U)}else if($){E.__webglDepthbuffer=[];for(let dt=0;dt<6;dt++)if(i.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[dt]),E.__webglDepthbuffer[dt]===void 0)E.__webglDepthbuffer[dt]=r.createRenderbuffer(),It(E.__webglDepthbuffer[dt],U,!1);else{const xt=U.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ct=E.__webglDepthbuffer[dt];r.bindRenderbuffer(r.RENDERBUFFER,ct),r.framebufferRenderbuffer(r.FRAMEBUFFER,xt,r.RENDERBUFFER,ct)}}else{const dt=U.texture.mipmaps;if(dt&&dt.length>0?i.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[0]):i.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=r.createRenderbuffer(),It(E.__webglDepthbuffer,U,!1);else{const xt=U.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ct=E.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,ct),r.framebufferRenderbuffer(r.FRAMEBUFFER,xt,r.RENDERBUFFER,ct)}}i.bindFramebuffer(r.FRAMEBUFFER,null)}function sn(U,E,$){const dt=s.get(U);E!==void 0&&Dt(dt.__webglFramebuffer,U,U.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),$!==void 0&&de(U)}function I(U){const E=U.texture,$=s.get(U),dt=s.get(E);U.addEventListener("dispose",B);const xt=U.textures,ct=U.isWebGLCubeRenderTarget===!0,Zt=xt.length>1;if(Zt||(dt.__webglTexture===void 0&&(dt.__webglTexture=r.createTexture()),dt.__version=E.version,h.memory.textures++),ct){$.__webglFramebuffer=[];for(let Rt=0;Rt<6;Rt++)if(E.mipmaps&&E.mipmaps.length>0){$.__webglFramebuffer[Rt]=[];for(let Yt=0;Yt<E.mipmaps.length;Yt++)$.__webglFramebuffer[Rt][Yt]=r.createFramebuffer()}else $.__webglFramebuffer[Rt]=r.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){$.__webglFramebuffer=[];for(let Rt=0;Rt<E.mipmaps.length;Rt++)$.__webglFramebuffer[Rt]=r.createFramebuffer()}else $.__webglFramebuffer=r.createFramebuffer();if(Zt)for(let Rt=0,Yt=xt.length;Rt<Yt;Rt++){const jt=s.get(xt[Rt]);jt.__webglTexture===void 0&&(jt.__webglTexture=r.createTexture(),h.memory.textures++)}if(U.samples>0&&kt(U)===!1){$.__webglMultisampledFramebuffer=r.createFramebuffer(),$.__webglColorRenderbuffer=[],i.bindFramebuffer(r.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let Rt=0;Rt<xt.length;Rt++){const Yt=xt[Rt];$.__webglColorRenderbuffer[Rt]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,$.__webglColorRenderbuffer[Rt]);const jt=c.convert(Yt.format,Yt.colorSpace),Tt=c.convert(Yt.type),Ct=O(Yt.internalFormat,jt,Tt,Yt.colorSpace,U.isXRRenderTarget===!0),Kt=Ge(U);r.renderbufferStorageMultisample(r.RENDERBUFFER,Kt,Ct,U.width,U.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Rt,r.RENDERBUFFER,$.__webglColorRenderbuffer[Rt])}r.bindRenderbuffer(r.RENDERBUFFER,null),U.depthBuffer&&($.__webglDepthRenderbuffer=r.createRenderbuffer(),It($.__webglDepthRenderbuffer,U,!0)),i.bindFramebuffer(r.FRAMEBUFFER,null)}}if(ct){i.bindTexture(r.TEXTURE_CUBE_MAP,dt.__webglTexture),et(r.TEXTURE_CUBE_MAP,E);for(let Rt=0;Rt<6;Rt++)if(E.mipmaps&&E.mipmaps.length>0)for(let Yt=0;Yt<E.mipmaps.length;Yt++)Dt($.__webglFramebuffer[Rt][Yt],U,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,Yt);else Dt($.__webglFramebuffer[Rt],U,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,0);M(E)&&S(r.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Zt){for(let Rt=0,Yt=xt.length;Rt<Yt;Rt++){const jt=xt[Rt],Tt=s.get(jt);let Ct=r.TEXTURE_2D;(U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Ct=U.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(Ct,Tt.__webglTexture),et(Ct,jt),Dt($.__webglFramebuffer,U,jt,r.COLOR_ATTACHMENT0+Rt,Ct,0),M(jt)&&S(Ct)}i.unbindTexture()}else{let Rt=r.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Rt=U.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(Rt,dt.__webglTexture),et(Rt,E),E.mipmaps&&E.mipmaps.length>0)for(let Yt=0;Yt<E.mipmaps.length;Yt++)Dt($.__webglFramebuffer[Yt],U,E,r.COLOR_ATTACHMENT0,Rt,Yt);else Dt($.__webglFramebuffer,U,E,r.COLOR_ATTACHMENT0,Rt,0);M(E)&&S(Rt),i.unbindTexture()}U.depthBuffer&&de(U)}function Ae(U){const E=U.textures;for(let $=0,dt=E.length;$<dt;$++){const xt=E[$];if(M(xt)){const ct=H(U),Zt=s.get(xt).__webglTexture;i.bindTexture(ct,Zt),S(ct),i.unbindTexture()}}}const ie=[],te=[];function Wt(U){if(U.samples>0){if(kt(U)===!1){const E=U.textures,$=U.width,dt=U.height;let xt=r.COLOR_BUFFER_BIT;const ct=U.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Zt=s.get(U),Rt=E.length>1;if(Rt)for(let jt=0;jt<E.length;jt++)i.bindFramebuffer(r.FRAMEBUFFER,Zt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+jt,r.RENDERBUFFER,null),i.bindFramebuffer(r.FRAMEBUFFER,Zt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+jt,r.TEXTURE_2D,null,0);i.bindFramebuffer(r.READ_FRAMEBUFFER,Zt.__webglMultisampledFramebuffer);const Yt=U.texture.mipmaps;Yt&&Yt.length>0?i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Zt.__webglFramebuffer[0]):i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Zt.__webglFramebuffer);for(let jt=0;jt<E.length;jt++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(xt|=r.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(xt|=r.STENCIL_BUFFER_BIT)),Rt){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Zt.__webglColorRenderbuffer[jt]);const Tt=s.get(E[jt]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Tt,0)}r.blitFramebuffer(0,0,$,dt,0,0,$,dt,xt,r.NEAREST),m===!0&&(ie.length=0,te.length=0,ie.push(r.COLOR_ATTACHMENT0+jt),U.depthBuffer&&U.resolveDepthBuffer===!1&&(ie.push(ct),te.push(ct),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,te)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,ie))}if(i.bindFramebuffer(r.READ_FRAMEBUFFER,null),i.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Rt)for(let jt=0;jt<E.length;jt++){i.bindFramebuffer(r.FRAMEBUFFER,Zt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+jt,r.RENDERBUFFER,Zt.__webglColorRenderbuffer[jt]);const Tt=s.get(E[jt]).__webglTexture;i.bindFramebuffer(r.FRAMEBUFFER,Zt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+jt,r.TEXTURE_2D,Tt,0)}i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Zt.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&m){const E=U.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[E])}}}function Ge(U){return Math.min(l.maxSamples,U.samples)}function kt(U){const E=s.get(U);return U.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function se(U){const E=h.render.frame;_.get(U)!==E&&(_.set(U,E),U.update())}function Qe(U,E){const $=U.colorSpace,dt=U.format,xt=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||$!==Nr&&$!==Xa&&(we.getTransfer($)===Fe?(dt!==Ei||xt!==Pi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",$)),E}function Ze(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(p.width=U.naturalWidth||U.width,p.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(p.width=U.displayWidth,p.height=U.displayHeight):(p.width=U.width,p.height=U.height),p}this.allocateTextureUnit=ot,this.resetTextureUnits=it,this.setTexture2D=pt,this.setTexture2DArray=N,this.setTexture3D=Z,this.setTextureCube=X,this.rebindTextures=sn,this.setupRenderTarget=I,this.updateRenderTargetMipmap=Ae,this.updateMultisampleRenderTarget=Wt,this.setupDepthRenderbuffer=de,this.setupFrameBufferTexture=Dt,this.useMultisampledRTT=kt}function LA(r,t){function i(s,l=Xa){let c;const h=we.getTransfer(l);if(s===Pi)return r.UNSIGNED_BYTE;if(s===Dd)return r.UNSIGNED_SHORT_4_4_4_4;if(s===Ud)return r.UNSIGNED_SHORT_5_5_5_1;if(s===J0)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===$0)return r.UNSIGNED_INT_10F_11F_11F_REV;if(s===K0)return r.BYTE;if(s===Q0)return r.SHORT;if(s===Fo)return r.UNSIGNED_SHORT;if(s===wd)return r.INT;if(s===As)return r.UNSIGNED_INT;if(s===ca)return r.FLOAT;if(s===Xo)return r.HALF_FLOAT;if(s===tv)return r.ALPHA;if(s===ev)return r.RGB;if(s===Ei)return r.RGBA;if(s===Go)return r.DEPTH_COMPONENT;if(s===Vo)return r.DEPTH_STENCIL;if(s===nv)return r.RED;if(s===Ld)return r.RED_INTEGER;if(s===iv)return r.RG;if(s===Nd)return r.RG_INTEGER;if(s===Od)return r.RGBA_INTEGER;if(s===Rc||s===Cc||s===wc||s===Dc)if(h===Fe)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===Rc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Cc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===wc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Dc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===Rc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Cc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===wc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Dc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Kh||s===Qh||s===Jh||s===$h)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===Kh)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Qh)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Jh)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===$h)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===td||s===ed||s===nd)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(s===td||s===ed)return h===Fe?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===nd)return h===Fe?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===id||s===ad||s===sd||s===rd||s===od||s===ld||s===cd||s===ud||s===fd||s===hd||s===dd||s===pd||s===md||s===_d)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(s===id)return h===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===ad)return h===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===sd)return h===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===rd)return h===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===od)return h===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===ld)return h===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===cd)return h===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===ud)return h===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===fd)return h===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===hd)return h===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===dd)return h===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===pd)return h===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===md)return h===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===_d)return h===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===gd||s===vd||s===Sd)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(s===gd)return h===Fe?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===vd)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Sd)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===yd||s===xd||s===Md||s===Ed)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(s===yd)return c.COMPRESSED_RED_RGTC1_EXT;if(s===xd)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Md)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Ed)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Ho?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:i}}const NA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,OA=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class PA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i){if(this.texture===null){const s=new _v(t.texture);(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,s=new ha({vertexShader:NA,fragmentShader:OA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new ua(new Gc(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class zA extends Cs{constructor(t,i){super();const s=this;let l=null,c=1,h=null,d="local-floor",m=1,p=null,_=null,g=null,y=null,x=null,b=null;const R=typeof XRWebGLBinding<"u",M=new PA,S={},H=i.getContextAttributes();let O=null,D=null;const F=[],z=[],B=new ce;let Y=null;const C=new mi;C.viewport=new tn;const w=new mi;w.viewport=new tn;const V=[C,w],it=new tE;let ot=null,ft=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(tt){let lt=F[tt];return lt===void 0&&(lt=new Th,F[tt]=lt),lt.getTargetRaySpace()},this.getControllerGrip=function(tt){let lt=F[tt];return lt===void 0&&(lt=new Th,F[tt]=lt),lt.getGripSpace()},this.getHand=function(tt){let lt=F[tt];return lt===void 0&&(lt=new Th,F[tt]=lt),lt.getHandSpace()};function pt(tt){const lt=z.indexOf(tt.inputSource);if(lt===-1)return;const Dt=F[lt];Dt!==void 0&&(Dt.update(tt.inputSource,tt.frame,p||h),Dt.dispatchEvent({type:tt.type,data:tt.inputSource}))}function N(){l.removeEventListener("select",pt),l.removeEventListener("selectstart",pt),l.removeEventListener("selectend",pt),l.removeEventListener("squeeze",pt),l.removeEventListener("squeezestart",pt),l.removeEventListener("squeezeend",pt),l.removeEventListener("end",N),l.removeEventListener("inputsourceschange",Z);for(let tt=0;tt<F.length;tt++){const lt=z[tt];lt!==null&&(z[tt]=null,F[tt].disconnect(lt))}ot=null,ft=null,M.reset();for(const tt in S)delete S[tt];t.setRenderTarget(O),x=null,y=null,g=null,l=null,D=null,Ut.stop(),s.isPresenting=!1,t.setPixelRatio(Y),t.setSize(B.width,B.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(tt){c=tt,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(tt){d=tt,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||h},this.setReferenceSpace=function(tt){p=tt},this.getBaseLayer=function(){return y!==null?y:x},this.getBinding=function(){return g===null&&R&&(g=new XRWebGLBinding(l,i)),g},this.getFrame=function(){return b},this.getSession=function(){return l},this.setSession=async function(tt){if(l=tt,l!==null){if(O=t.getRenderTarget(),l.addEventListener("select",pt),l.addEventListener("selectstart",pt),l.addEventListener("selectend",pt),l.addEventListener("squeeze",pt),l.addEventListener("squeezestart",pt),l.addEventListener("squeezeend",pt),l.addEventListener("end",N),l.addEventListener("inputsourceschange",Z),H.xrCompatible!==!0&&await i.makeXRCompatible(),Y=t.getPixelRatio(),t.getSize(B),R&&"createProjectionLayer"in XRWebGLBinding.prototype){let Dt=null,It=null,Xt=null;H.depth&&(Xt=H.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Dt=H.stencil?Vo:Go,It=H.stencil?Ho:As);const de={colorFormat:i.RGBA8,depthFormat:Xt,scaleFactor:c};g=this.getBinding(),y=g.createProjectionLayer(de),l.updateRenderState({layers:[y]}),t.setPixelRatio(1),t.setSize(y.textureWidth,y.textureHeight,!1),D=new ja(y.textureWidth,y.textureHeight,{format:Ei,type:Pi,depthTexture:new mv(y.textureWidth,y.textureHeight,It,void 0,void 0,void 0,void 0,void 0,void 0,Dt),stencilBuffer:H.stencil,colorSpace:t.outputColorSpace,samples:H.antialias?4:0,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}else{const Dt={antialias:H.antialias,alpha:!0,depth:H.depth,stencil:H.stencil,framebufferScaleFactor:c};x=new XRWebGLLayer(l,i,Dt),l.updateRenderState({baseLayer:x}),t.setPixelRatio(1),t.setSize(x.framebufferWidth,x.framebufferHeight,!1),D=new ja(x.framebufferWidth,x.framebufferHeight,{format:Ei,type:Pi,colorSpace:t.outputColorSpace,stencilBuffer:H.stencil,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}D.isXRRenderTarget=!0,this.setFoveation(m),p=null,h=await l.requestReferenceSpace(d),Ut.setContext(l),Ut.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function Z(tt){for(let lt=0;lt<tt.removed.length;lt++){const Dt=tt.removed[lt],It=z.indexOf(Dt);It>=0&&(z[It]=null,F[It].disconnect(Dt))}for(let lt=0;lt<tt.added.length;lt++){const Dt=tt.added[lt];let It=z.indexOf(Dt);if(It===-1){for(let de=0;de<F.length;de++)if(de>=z.length){z.push(Dt),It=de;break}else if(z[de]===null){z[de]=Dt,It=de;break}if(It===-1)break}const Xt=F[It];Xt&&Xt.connect(Dt)}}const X=new K,St=new K;function Mt(tt,lt,Dt){X.setFromMatrixPosition(lt.matrixWorld),St.setFromMatrixPosition(Dt.matrixWorld);const It=X.distanceTo(St),Xt=lt.projectionMatrix.elements,de=Dt.projectionMatrix.elements,sn=Xt[14]/(Xt[10]-1),I=Xt[14]/(Xt[10]+1),Ae=(Xt[9]+1)/Xt[5],ie=(Xt[9]-1)/Xt[5],te=(Xt[8]-1)/Xt[0],Wt=(de[8]+1)/de[0],Ge=sn*te,kt=sn*Wt,se=It/(-te+Wt),Qe=se*-te;if(lt.matrixWorld.decompose(tt.position,tt.quaternion,tt.scale),tt.translateX(Qe),tt.translateZ(se),tt.matrixWorld.compose(tt.position,tt.quaternion,tt.scale),tt.matrixWorldInverse.copy(tt.matrixWorld).invert(),Xt[10]===-1)tt.projectionMatrix.copy(lt.projectionMatrix),tt.projectionMatrixInverse.copy(lt.projectionMatrixInverse);else{const Ze=sn+se,U=I+se,E=Ge-Qe,$=kt+(It-Qe),dt=Ae*I/U*Ze,xt=ie*I/U*Ze;tt.projectionMatrix.makePerspective(E,$,dt,xt,Ze,U),tt.projectionMatrixInverse.copy(tt.projectionMatrix).invert()}}function L(tt,lt){lt===null?tt.matrixWorld.copy(tt.matrix):tt.matrixWorld.multiplyMatrices(lt.matrixWorld,tt.matrix),tt.matrixWorldInverse.copy(tt.matrixWorld).invert()}this.updateCamera=function(tt){if(l===null)return;let lt=tt.near,Dt=tt.far;M.texture!==null&&(M.depthNear>0&&(lt=M.depthNear),M.depthFar>0&&(Dt=M.depthFar)),it.near=w.near=C.near=lt,it.far=w.far=C.far=Dt,(ot!==it.near||ft!==it.far)&&(l.updateRenderState({depthNear:it.near,depthFar:it.far}),ot=it.near,ft=it.far),it.layers.mask=tt.layers.mask|6,C.layers.mask=it.layers.mask&3,w.layers.mask=it.layers.mask&5;const It=tt.parent,Xt=it.cameras;L(it,It);for(let de=0;de<Xt.length;de++)L(Xt[de],It);Xt.length===2?Mt(it,C,w):it.projectionMatrix.copy(C.projectionMatrix),et(tt,it,It)};function et(tt,lt,Dt){Dt===null?tt.matrix.copy(lt.matrixWorld):(tt.matrix.copy(Dt.matrixWorld),tt.matrix.invert(),tt.matrix.multiply(lt.matrixWorld)),tt.matrix.decompose(tt.position,tt.quaternion,tt.scale),tt.updateMatrixWorld(!0),tt.projectionMatrix.copy(lt.projectionMatrix),tt.projectionMatrixInverse.copy(lt.projectionMatrixInverse),tt.isPerspectiveCamera&&(tt.fov=Td*2*Math.atan(1/tt.projectionMatrix.elements[5]),tt.zoom=1)}this.getCamera=function(){return it},this.getFoveation=function(){if(!(y===null&&x===null))return m},this.setFoveation=function(tt){m=tt,y!==null&&(y.fixedFoveation=tt),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=tt)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(it)},this.getCameraTexture=function(tt){return S[tt]};let yt=null;function At(tt,lt){if(_=lt.getViewerPose(p||h),b=lt,_!==null){const Dt=_.views;x!==null&&(t.setRenderTargetFramebuffer(D,x.framebuffer),t.setRenderTarget(D));let It=!1;Dt.length!==it.cameras.length&&(it.cameras.length=0,It=!0);for(let I=0;I<Dt.length;I++){const Ae=Dt[I];let ie=null;if(x!==null)ie=x.getViewport(Ae);else{const Wt=g.getViewSubImage(y,Ae);ie=Wt.viewport,I===0&&(t.setRenderTargetTextures(D,Wt.colorTexture,Wt.depthStencilTexture),t.setRenderTarget(D))}let te=V[I];te===void 0&&(te=new mi,te.layers.enable(I),te.viewport=new tn,V[I]=te),te.matrix.fromArray(Ae.transform.matrix),te.matrix.decompose(te.position,te.quaternion,te.scale),te.projectionMatrix.fromArray(Ae.projectionMatrix),te.projectionMatrixInverse.copy(te.projectionMatrix).invert(),te.viewport.set(ie.x,ie.y,ie.width,ie.height),I===0&&(it.matrix.copy(te.matrix),it.matrix.decompose(it.position,it.quaternion,it.scale)),It===!0&&it.cameras.push(te)}const Xt=l.enabledFeatures;if(Xt&&Xt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&R){g=s.getBinding();const I=g.getDepthInformation(Dt[0]);I&&I.isValid&&I.texture&&M.init(I,l.renderState)}if(Xt&&Xt.includes("camera-access")&&R){t.state.unbindTexture(),g=s.getBinding();for(let I=0;I<Dt.length;I++){const Ae=Dt[I].camera;if(Ae){let ie=S[Ae];ie||(ie=new _v,S[Ae]=ie);const te=g.getCameraImage(Ae);ie.sourceTexture=te}}}}for(let Dt=0;Dt<F.length;Dt++){const It=z[Dt],Xt=F[Dt];It!==null&&Xt!==void 0&&Xt.update(It,lt,p||h)}yt&&yt(tt,lt),lt.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:lt}),b=null}const Ut=new xv;Ut.setAnimationLoop(At),this.setAnimationLoop=function(tt){yt=tt},this.dispose=function(){}}}const Ss=new zi,BA=new Ke;function IA(r,t){function i(M,S){M.matrixAutoUpdate===!0&&M.updateMatrix(),S.value.copy(M.matrix)}function s(M,S){S.color.getRGB(M.fogColor.value,fv(r)),S.isFog?(M.fogNear.value=S.near,M.fogFar.value=S.far):S.isFogExp2&&(M.fogDensity.value=S.density)}function l(M,S,H,O,D){S.isMeshBasicMaterial||S.isMeshLambertMaterial?c(M,S):S.isMeshToonMaterial?(c(M,S),g(M,S)):S.isMeshPhongMaterial?(c(M,S),_(M,S)):S.isMeshStandardMaterial?(c(M,S),y(M,S),S.isMeshPhysicalMaterial&&x(M,S,D)):S.isMeshMatcapMaterial?(c(M,S),b(M,S)):S.isMeshDepthMaterial?c(M,S):S.isMeshDistanceMaterial?(c(M,S),R(M,S)):S.isMeshNormalMaterial?c(M,S):S.isLineBasicMaterial?(h(M,S),S.isLineDashedMaterial&&d(M,S)):S.isPointsMaterial?m(M,S,H,O):S.isSpriteMaterial?p(M,S):S.isShadowMaterial?(M.color.value.copy(S.color),M.opacity.value=S.opacity):S.isShaderMaterial&&(S.uniformsNeedUpdate=!1)}function c(M,S){M.opacity.value=S.opacity,S.color&&M.diffuse.value.copy(S.color),S.emissive&&M.emissive.value.copy(S.emissive).multiplyScalar(S.emissiveIntensity),S.map&&(M.map.value=S.map,i(S.map,M.mapTransform)),S.alphaMap&&(M.alphaMap.value=S.alphaMap,i(S.alphaMap,M.alphaMapTransform)),S.bumpMap&&(M.bumpMap.value=S.bumpMap,i(S.bumpMap,M.bumpMapTransform),M.bumpScale.value=S.bumpScale,S.side===Wn&&(M.bumpScale.value*=-1)),S.normalMap&&(M.normalMap.value=S.normalMap,i(S.normalMap,M.normalMapTransform),M.normalScale.value.copy(S.normalScale),S.side===Wn&&M.normalScale.value.negate()),S.displacementMap&&(M.displacementMap.value=S.displacementMap,i(S.displacementMap,M.displacementMapTransform),M.displacementScale.value=S.displacementScale,M.displacementBias.value=S.displacementBias),S.emissiveMap&&(M.emissiveMap.value=S.emissiveMap,i(S.emissiveMap,M.emissiveMapTransform)),S.specularMap&&(M.specularMap.value=S.specularMap,i(S.specularMap,M.specularMapTransform)),S.alphaTest>0&&(M.alphaTest.value=S.alphaTest);const H=t.get(S),O=H.envMap,D=H.envMapRotation;O&&(M.envMap.value=O,Ss.copy(D),Ss.x*=-1,Ss.y*=-1,Ss.z*=-1,O.isCubeTexture&&O.isRenderTargetTexture===!1&&(Ss.y*=-1,Ss.z*=-1),M.envMapRotation.value.setFromMatrix4(BA.makeRotationFromEuler(Ss)),M.flipEnvMap.value=O.isCubeTexture&&O.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=S.reflectivity,M.ior.value=S.ior,M.refractionRatio.value=S.refractionRatio),S.lightMap&&(M.lightMap.value=S.lightMap,M.lightMapIntensity.value=S.lightMapIntensity,i(S.lightMap,M.lightMapTransform)),S.aoMap&&(M.aoMap.value=S.aoMap,M.aoMapIntensity.value=S.aoMapIntensity,i(S.aoMap,M.aoMapTransform))}function h(M,S){M.diffuse.value.copy(S.color),M.opacity.value=S.opacity,S.map&&(M.map.value=S.map,i(S.map,M.mapTransform))}function d(M,S){M.dashSize.value=S.dashSize,M.totalSize.value=S.dashSize+S.gapSize,M.scale.value=S.scale}function m(M,S,H,O){M.diffuse.value.copy(S.color),M.opacity.value=S.opacity,M.size.value=S.size*H,M.scale.value=O*.5,S.map&&(M.map.value=S.map,i(S.map,M.uvTransform)),S.alphaMap&&(M.alphaMap.value=S.alphaMap,i(S.alphaMap,M.alphaMapTransform)),S.alphaTest>0&&(M.alphaTest.value=S.alphaTest)}function p(M,S){M.diffuse.value.copy(S.color),M.opacity.value=S.opacity,M.rotation.value=S.rotation,S.map&&(M.map.value=S.map,i(S.map,M.mapTransform)),S.alphaMap&&(M.alphaMap.value=S.alphaMap,i(S.alphaMap,M.alphaMapTransform)),S.alphaTest>0&&(M.alphaTest.value=S.alphaTest)}function _(M,S){M.specular.value.copy(S.specular),M.shininess.value=Math.max(S.shininess,1e-4)}function g(M,S){S.gradientMap&&(M.gradientMap.value=S.gradientMap)}function y(M,S){M.metalness.value=S.metalness,S.metalnessMap&&(M.metalnessMap.value=S.metalnessMap,i(S.metalnessMap,M.metalnessMapTransform)),M.roughness.value=S.roughness,S.roughnessMap&&(M.roughnessMap.value=S.roughnessMap,i(S.roughnessMap,M.roughnessMapTransform)),S.envMap&&(M.envMapIntensity.value=S.envMapIntensity)}function x(M,S,H){M.ior.value=S.ior,S.sheen>0&&(M.sheenColor.value.copy(S.sheenColor).multiplyScalar(S.sheen),M.sheenRoughness.value=S.sheenRoughness,S.sheenColorMap&&(M.sheenColorMap.value=S.sheenColorMap,i(S.sheenColorMap,M.sheenColorMapTransform)),S.sheenRoughnessMap&&(M.sheenRoughnessMap.value=S.sheenRoughnessMap,i(S.sheenRoughnessMap,M.sheenRoughnessMapTransform))),S.clearcoat>0&&(M.clearcoat.value=S.clearcoat,M.clearcoatRoughness.value=S.clearcoatRoughness,S.clearcoatMap&&(M.clearcoatMap.value=S.clearcoatMap,i(S.clearcoatMap,M.clearcoatMapTransform)),S.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=S.clearcoatRoughnessMap,i(S.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),S.clearcoatNormalMap&&(M.clearcoatNormalMap.value=S.clearcoatNormalMap,i(S.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(S.clearcoatNormalScale),S.side===Wn&&M.clearcoatNormalScale.value.negate())),S.dispersion>0&&(M.dispersion.value=S.dispersion),S.iridescence>0&&(M.iridescence.value=S.iridescence,M.iridescenceIOR.value=S.iridescenceIOR,M.iridescenceThicknessMinimum.value=S.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=S.iridescenceThicknessRange[1],S.iridescenceMap&&(M.iridescenceMap.value=S.iridescenceMap,i(S.iridescenceMap,M.iridescenceMapTransform)),S.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=S.iridescenceThicknessMap,i(S.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),S.transmission>0&&(M.transmission.value=S.transmission,M.transmissionSamplerMap.value=H.texture,M.transmissionSamplerSize.value.set(H.width,H.height),S.transmissionMap&&(M.transmissionMap.value=S.transmissionMap,i(S.transmissionMap,M.transmissionMapTransform)),M.thickness.value=S.thickness,S.thicknessMap&&(M.thicknessMap.value=S.thicknessMap,i(S.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=S.attenuationDistance,M.attenuationColor.value.copy(S.attenuationColor)),S.anisotropy>0&&(M.anisotropyVector.value.set(S.anisotropy*Math.cos(S.anisotropyRotation),S.anisotropy*Math.sin(S.anisotropyRotation)),S.anisotropyMap&&(M.anisotropyMap.value=S.anisotropyMap,i(S.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=S.specularIntensity,M.specularColor.value.copy(S.specularColor),S.specularColorMap&&(M.specularColorMap.value=S.specularColorMap,i(S.specularColorMap,M.specularColorMapTransform)),S.specularIntensityMap&&(M.specularIntensityMap.value=S.specularIntensityMap,i(S.specularIntensityMap,M.specularIntensityMapTransform))}function b(M,S){S.matcap&&(M.matcap.value=S.matcap)}function R(M,S){const H=t.get(S).light;M.referencePosition.value.setFromMatrixPosition(H.matrixWorld),M.nearDistance.value=H.shadow.camera.near,M.farDistance.value=H.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function FA(r,t,i,s){let l={},c={},h=[];const d=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function m(H,O){const D=O.program;s.uniformBlockBinding(H,D)}function p(H,O){let D=l[H.id];D===void 0&&(b(H),D=_(H),l[H.id]=D,H.addEventListener("dispose",M));const F=O.program;s.updateUBOMapping(H,F);const z=t.render.frame;c[H.id]!==z&&(y(H),c[H.id]=z)}function _(H){const O=g();H.__bindingPointIndex=O;const D=r.createBuffer(),F=H.__size,z=H.usage;return r.bindBuffer(r.UNIFORM_BUFFER,D),r.bufferData(r.UNIFORM_BUFFER,F,z),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,O,D),D}function g(){for(let H=0;H<d;H++)if(h.indexOf(H)===-1)return h.push(H),H;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function y(H){const O=l[H.id],D=H.uniforms,F=H.__cache;r.bindBuffer(r.UNIFORM_BUFFER,O);for(let z=0,B=D.length;z<B;z++){const Y=Array.isArray(D[z])?D[z]:[D[z]];for(let C=0,w=Y.length;C<w;C++){const V=Y[C];if(x(V,z,C,F)===!0){const it=V.__offset,ot=Array.isArray(V.value)?V.value:[V.value];let ft=0;for(let pt=0;pt<ot.length;pt++){const N=ot[pt],Z=R(N);typeof N=="number"||typeof N=="boolean"?(V.__data[0]=N,r.bufferSubData(r.UNIFORM_BUFFER,it+ft,V.__data)):N.isMatrix3?(V.__data[0]=N.elements[0],V.__data[1]=N.elements[1],V.__data[2]=N.elements[2],V.__data[3]=0,V.__data[4]=N.elements[3],V.__data[5]=N.elements[4],V.__data[6]=N.elements[5],V.__data[7]=0,V.__data[8]=N.elements[6],V.__data[9]=N.elements[7],V.__data[10]=N.elements[8],V.__data[11]=0):(N.toArray(V.__data,ft),ft+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,it,V.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function x(H,O,D,F){const z=H.value,B=O+"_"+D;if(F[B]===void 0)return typeof z=="number"||typeof z=="boolean"?F[B]=z:F[B]=z.clone(),!0;{const Y=F[B];if(typeof z=="number"||typeof z=="boolean"){if(Y!==z)return F[B]=z,!0}else if(Y.equals(z)===!1)return Y.copy(z),!0}return!1}function b(H){const O=H.uniforms;let D=0;const F=16;for(let B=0,Y=O.length;B<Y;B++){const C=Array.isArray(O[B])?O[B]:[O[B]];for(let w=0,V=C.length;w<V;w++){const it=C[w],ot=Array.isArray(it.value)?it.value:[it.value];for(let ft=0,pt=ot.length;ft<pt;ft++){const N=ot[ft],Z=R(N),X=D%F,St=X%Z.boundary,Mt=X+St;D+=St,Mt!==0&&F-Mt<Z.storage&&(D+=F-Mt),it.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),it.__offset=D,D+=Z.storage}}}const z=D%F;return z>0&&(D+=F-z),H.__size=D,H.__cache={},this}function R(H){const O={boundary:0,storage:0};return typeof H=="number"||typeof H=="boolean"?(O.boundary=4,O.storage=4):H.isVector2?(O.boundary=8,O.storage=8):H.isVector3||H.isColor?(O.boundary=16,O.storage=12):H.isVector4?(O.boundary=16,O.storage=16):H.isMatrix3?(O.boundary=48,O.storage=48):H.isMatrix4?(O.boundary=64,O.storage=64):H.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",H),O}function M(H){const O=H.target;O.removeEventListener("dispose",M);const D=h.indexOf(O.__bindingPointIndex);h.splice(D,1),r.deleteBuffer(l[O.id]),delete l[O.id],delete c[O.id]}function S(){for(const H in l)r.deleteBuffer(l[H]);h=[],l={},c={}}return{bind:m,update:p,dispose:S}}class HA{constructor(t={}){const{canvas:i=pM(),context:s=null,depth:l=!0,stencil:c=!1,alpha:h=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:g=!1,reversedDepthBuffer:y=!1}=t;this.isWebGLRenderer=!0;let x;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=s.getContextAttributes().alpha}else x=h;const b=new Uint32Array(4),R=new Int32Array(4);let M=null,S=null;const H=[],O=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=qa,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const D=this;let F=!1;this._outputColorSpace=pi;let z=0,B=0,Y=null,C=-1,w=null;const V=new tn,it=new tn;let ot=null;const ft=new Me(0);let pt=0,N=i.width,Z=i.height,X=1,St=null,Mt=null;const L=new tn(0,0,N,Z),et=new tn(0,0,N,Z);let yt=!1;const At=new Id;let Ut=!1,tt=!1;const lt=new Ke,Dt=new K,It=new tn,Xt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let de=!1;function sn(){return Y===null?X:1}let I=s;function Ae(A,W){return i.getContext(A,W)}try{const A={alpha:!0,depth:l,stencil:c,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:_,failIfMajorPerformanceCaveat:g};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Cd}`),i.addEventListener("webglcontextlost",wt,!1),i.addEventListener("webglcontextrestored",Bt,!1),i.addEventListener("webglcontextcreationerror",Et,!1),I===null){const W="webgl2";if(I=Ae(W,A),I===null)throw Ae(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let ie,te,Wt,Ge,kt,se,Qe,Ze,U,E,$,dt,xt,ct,Zt,Rt,Yt,jt,Tt,Ct,Kt,zt,Lt,oe;function k(){ie=new Kb(I),ie.init(),zt=new LA(I,ie),te=new kb(I,ie,t,zt),Wt=new DA(I,ie),te.reversedDepthBuffer&&y&&Wt.buffers.depth.setReversed(!0),Ge=new $b(I),kt=new gA,se=new UA(I,ie,Wt,kt,te,zt,Ge),Qe=new Wb(D),Ze=new Zb(D),U=new sE(I),Lt=new Gb(I,U),E=new Qb(I,U,Ge,Lt),$=new e1(I,E,U,Ge),Tt=new t1(I,te,se),Rt=new Xb(kt),dt=new _A(D,Qe,Ze,ie,te,Lt,Rt),xt=new IA(D,kt),ct=new SA,Zt=new bA(ie),jt=new Hb(D,Qe,Ze,Wt,$,x,m),Yt=new CA(D,$,te),oe=new FA(I,Ge,te,Wt),Ct=new Vb(I,ie,Ge),Kt=new Jb(I,ie,Ge),Ge.programs=dt.programs,D.capabilities=te,D.extensions=ie,D.properties=kt,D.renderLists=ct,D.shadowMap=Yt,D.state=Wt,D.info=Ge}k();const bt=new zA(D,I);this.xr=bt,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const A=ie.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=ie.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(A){A!==void 0&&(X=A,this.setSize(N,Z,!1))},this.getSize=function(A){return A.set(N,Z)},this.setSize=function(A,W,at=!0){if(bt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}N=A,Z=W,i.width=Math.floor(A*X),i.height=Math.floor(W*X),at===!0&&(i.style.width=A+"px",i.style.height=W+"px"),this.setViewport(0,0,A,W)},this.getDrawingBufferSize=function(A){return A.set(N*X,Z*X).floor()},this.setDrawingBufferSize=function(A,W,at){N=A,Z=W,X=at,i.width=Math.floor(A*at),i.height=Math.floor(W*at),this.setViewport(0,0,A,W)},this.getCurrentViewport=function(A){return A.copy(V)},this.getViewport=function(A){return A.copy(L)},this.setViewport=function(A,W,at,st){A.isVector4?L.set(A.x,A.y,A.z,A.w):L.set(A,W,at,st),Wt.viewport(V.copy(L).multiplyScalar(X).round())},this.getScissor=function(A){return A.copy(et)},this.setScissor=function(A,W,at,st){A.isVector4?et.set(A.x,A.y,A.z,A.w):et.set(A,W,at,st),Wt.scissor(it.copy(et).multiplyScalar(X).round())},this.getScissorTest=function(){return yt},this.setScissorTest=function(A){Wt.setScissorTest(yt=A)},this.setOpaqueSort=function(A){St=A},this.setTransparentSort=function(A){Mt=A},this.getClearColor=function(A){return A.copy(jt.getClearColor())},this.setClearColor=function(){jt.setClearColor(...arguments)},this.getClearAlpha=function(){return jt.getClearAlpha()},this.setClearAlpha=function(){jt.setClearAlpha(...arguments)},this.clear=function(A=!0,W=!0,at=!0){let st=0;if(A){let j=!1;if(Y!==null){const vt=Y.texture.format;j=vt===Od||vt===Nd||vt===Ld}if(j){const vt=Y.texture.type,Nt=vt===Pi||vt===As||vt===Fo||vt===Ho||vt===Dd||vt===Ud,Gt=jt.getClearColor(),Pt=jt.getClearAlpha(),Qt=Gt.r,ne=Gt.g,Jt=Gt.b;Nt?(b[0]=Qt,b[1]=ne,b[2]=Jt,b[3]=Pt,I.clearBufferuiv(I.COLOR,0,b)):(R[0]=Qt,R[1]=ne,R[2]=Jt,R[3]=Pt,I.clearBufferiv(I.COLOR,0,R))}else st|=I.COLOR_BUFFER_BIT}W&&(st|=I.DEPTH_BUFFER_BIT),at&&(st|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(st)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",wt,!1),i.removeEventListener("webglcontextrestored",Bt,!1),i.removeEventListener("webglcontextcreationerror",Et,!1),jt.dispose(),ct.dispose(),Zt.dispose(),kt.dispose(),Qe.dispose(),Ze.dispose(),$.dispose(),Lt.dispose(),oe.dispose(),dt.dispose(),bt.dispose(),bt.removeEventListener("sessionstart",ai),bt.removeEventListener("sessionend",Ir),Ai.stop()};function wt(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),F=!0}function Bt(){console.log("THREE.WebGLRenderer: Context Restored."),F=!1;const A=Ge.autoReset,W=Yt.enabled,at=Yt.autoUpdate,st=Yt.needsUpdate,j=Yt.type;k(),Ge.autoReset=A,Yt.enabled=W,Yt.autoUpdate=at,Yt.needsUpdate=st,Yt.type=j}function Et(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function gt(A){const W=A.target;W.removeEventListener("dispose",gt),Ft(W)}function Ft(A){ae(A),kt.remove(A)}function ae(A){const W=kt.get(A).programs;W!==void 0&&(W.forEach(function(at){dt.releaseProgram(at)}),A.isShaderMaterial&&dt.releaseShaderCache(A))}this.renderBufferDirect=function(A,W,at,st,j,vt){W===null&&(W=Xt);const Nt=j.isMesh&&j.matrixWorld.determinant()<0,Gt=da(A,W,at,st,j);Wt.setMaterial(st,Nt);let Pt=at.index,Qt=1;if(st.wireframe===!0){if(Pt=E.getWireframeAttribute(at),Pt===void 0)return;Qt=2}const ne=at.drawRange,Jt=at.attributes.position;let pe=ne.start*Qt,Ue=(ne.start+ne.count)*Qt;vt!==null&&(pe=Math.max(pe,vt.start*Qt),Ue=Math.min(Ue,(vt.start+vt.count)*Qt)),Pt!==null?(pe=Math.max(pe,0),Ue=Math.min(Ue,Pt.count)):Jt!=null&&(pe=Math.max(pe,0),Ue=Math.min(Ue,Jt.count));const Ve=Ue-pe;if(Ve<0||Ve===1/0)return;Lt.setup(j,st,Gt,at,Pt);let Le,me=Ct;if(Pt!==null&&(Le=U.get(Pt),me=Kt,me.setIndex(Le)),j.isMesh)st.wireframe===!0?(Wt.setLineWidth(st.wireframeLinewidth*sn()),me.setMode(I.LINES)):me.setMode(I.TRIANGLES);else if(j.isLine){let Vt=st.linewidth;Vt===void 0&&(Vt=1),Wt.setLineWidth(Vt*sn()),j.isLineSegments?me.setMode(I.LINES):j.isLineLoop?me.setMode(I.LINE_LOOP):me.setMode(I.LINE_STRIP)}else j.isPoints?me.setMode(I.POINTS):j.isSprite&&me.setMode(I.TRIANGLES);if(j.isBatchedMesh)if(j._multiDrawInstances!==null)ko("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),me.renderMultiDrawInstances(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount,j._multiDrawInstances);else if(ie.get("WEBGL_multi_draw"))me.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{const Vt=j._multiDrawStarts,Xe=j._multiDrawCounts,be=j._multiDrawCount,xn=Pt?U.get(Pt).bytesPerElement:1,Bi=kt.get(st).currentProgram.getUniforms();for(let gn=0;gn<be;gn++)Bi.setValue(I,"_gl_DrawID",gn),me.render(Vt[gn]/xn,Xe[gn])}else if(j.isInstancedMesh)me.renderInstances(pe,Ve,j.count);else if(at.isInstancedBufferGeometry){const Vt=at._maxInstanceCount!==void 0?at._maxInstanceCount:1/0,Xe=Math.min(at.instanceCount,Vt);me.renderInstances(pe,Ve,Xe)}else me.render(pe,Ve)};function Ne(A,W,at){A.transparent===!0&&A.side===la&&A.forceSinglePass===!1?(A.side=Wn,A.needsUpdate=!0,qn(A,W,at),A.side=Ya,A.needsUpdate=!0,qn(A,W,at),A.side=la):qn(A,W,at)}this.compile=function(A,W,at=null){at===null&&(at=A),S=Zt.get(at),S.init(W),O.push(S),at.traverseVisible(function(j){j.isLight&&j.layers.test(W.layers)&&(S.pushLight(j),j.castShadow&&S.pushShadow(j))}),A!==at&&A.traverseVisible(function(j){j.isLight&&j.layers.test(W.layers)&&(S.pushLight(j),j.castShadow&&S.pushShadow(j))}),S.setupLights();const st=new Set;return A.traverse(function(j){if(!(j.isMesh||j.isPoints||j.isLine||j.isSprite))return;const vt=j.material;if(vt)if(Array.isArray(vt))for(let Nt=0;Nt<vt.length;Nt++){const Gt=vt[Nt];Ne(Gt,at,j),st.add(Gt)}else Ne(vt,at,j),st.add(vt)}),S=O.pop(),st},this.compileAsync=function(A,W,at=null){const st=this.compile(A,W,at);return new Promise(j=>{function vt(){if(st.forEach(function(Nt){kt.get(Nt).currentProgram.isReady()&&st.delete(Nt)}),st.size===0){j(A);return}setTimeout(vt,10)}ie.get("KHR_parallel_shader_compile")!==null?vt():setTimeout(vt,10)})};let Te=null;function Un(A){Te&&Te(A)}function ai(){Ai.stop()}function Ir(){Ai.start()}const Ai=new xv;Ai.setAnimationLoop(Un),typeof self<"u"&&Ai.setContext(self),this.setAnimationLoop=function(A){Te=A,bt.setAnimationLoop(A),A===null?Ai.stop():Ai.start()},bt.addEventListener("sessionstart",ai),bt.addEventListener("sessionend",Ir),this.render=function(A,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(F===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),bt.enabled===!0&&bt.isPresenting===!0&&(bt.cameraAutoUpdate===!0&&bt.updateCamera(W),W=bt.getCamera()),A.isScene===!0&&A.onBeforeRender(D,A,W,Y),S=Zt.get(A,O.length),S.init(W),O.push(S),lt.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),At.setFromProjectionMatrix(lt,Oi,W.reversedDepth),tt=this.localClippingEnabled,Ut=Rt.init(this.clippingPlanes,tt),M=ct.get(A,H.length),M.init(),H.push(M),bt.enabled===!0&&bt.isPresenting===!0){const vt=D.xr.getDepthSensingMesh();vt!==null&&ws(vt,W,-1/0,D.sortObjects)}ws(A,W,0,D.sortObjects),M.finish(),D.sortObjects===!0&&M.sort(St,Mt),de=bt.enabled===!1||bt.isPresenting===!1||bt.hasDepthSensing()===!1,de&&jt.addToRenderList(M,A),this.info.render.frame++,Ut===!0&&Rt.beginShadows();const at=S.state.shadowsArray;Yt.render(at,A,W),Ut===!0&&Rt.endShadows(),this.info.autoReset===!0&&this.info.reset();const st=M.opaque,j=M.transmissive;if(S.setupLights(),W.isArrayCamera){const vt=W.cameras;if(j.length>0)for(let Nt=0,Gt=vt.length;Nt<Gt;Nt++){const Pt=vt[Nt];Us(st,j,A,Pt)}de&&jt.render(A);for(let Nt=0,Gt=vt.length;Nt<Gt;Nt++){const Pt=vt[Nt];Ds(M,A,Pt,Pt.viewport)}}else j.length>0&&Us(st,j,A,W),de&&jt.render(A),Ds(M,A,W);Y!==null&&B===0&&(se.updateMultisampleRenderTarget(Y),se.updateRenderTargetMipmap(Y)),A.isScene===!0&&A.onAfterRender(D,A,W),Lt.resetDefaultState(),C=-1,w=null,O.pop(),O.length>0?(S=O[O.length-1],Ut===!0&&Rt.setGlobalState(D.clippingPlanes,S.state.camera)):S=null,H.pop(),H.length>0?M=H[H.length-1]:M=null};function ws(A,W,at,st){if(A.visible===!1)return;if(A.layers.test(W.layers)){if(A.isGroup)at=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(W);else if(A.isLight)S.pushLight(A),A.castShadow&&S.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||At.intersectsSprite(A)){st&&It.setFromMatrixPosition(A.matrixWorld).applyMatrix4(lt);const Nt=$.update(A),Gt=A.material;Gt.visible&&M.push(A,Nt,Gt,at,It.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||At.intersectsObject(A))){const Nt=$.update(A),Gt=A.material;if(st&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),It.copy(A.boundingSphere.center)):(Nt.boundingSphere===null&&Nt.computeBoundingSphere(),It.copy(Nt.boundingSphere.center)),It.applyMatrix4(A.matrixWorld).applyMatrix4(lt)),Array.isArray(Gt)){const Pt=Nt.groups;for(let Qt=0,ne=Pt.length;Qt<ne;Qt++){const Jt=Pt[Qt],pe=Gt[Jt.materialIndex];pe&&pe.visible&&M.push(A,Nt,pe,at,It.z,Jt)}}else Gt.visible&&M.push(A,Nt,Gt,at,It.z,null)}}const vt=A.children;for(let Nt=0,Gt=vt.length;Nt<Gt;Nt++)ws(vt[Nt],W,at,st)}function Ds(A,W,at,st){const j=A.opaque,vt=A.transmissive,Nt=A.transparent;S.setupLightsView(at),Ut===!0&&Rt.setGlobalState(D.clippingPlanes,at),st&&Wt.viewport(V.copy(st)),j.length>0&&Za(j,W,at),vt.length>0&&Za(vt,W,at),Nt.length>0&&Za(Nt,W,at),Wt.buffers.depth.setTest(!0),Wt.buffers.depth.setMask(!0),Wt.buffers.color.setMask(!0),Wt.setPolygonOffset(!1)}function Us(A,W,at,st){if((at.isScene===!0?at.overrideMaterial:null)!==null)return;S.state.transmissionRenderTarget[st.id]===void 0&&(S.state.transmissionRenderTarget[st.id]=new ja(1,1,{generateMipmaps:!0,type:ie.has("EXT_color_buffer_half_float")||ie.has("EXT_color_buffer_float")?Xo:Pi,minFilter:Ts,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:we.workingColorSpace}));const vt=S.state.transmissionRenderTarget[st.id],Nt=st.viewport||V;vt.setSize(Nt.z*D.transmissionResolutionScale,Nt.w*D.transmissionResolutionScale);const Gt=D.getRenderTarget(),Pt=D.getActiveCubeFace(),Qt=D.getActiveMipmapLevel();D.setRenderTarget(vt),D.getClearColor(ft),pt=D.getClearAlpha(),pt<1&&D.setClearColor(16777215,.5),D.clear(),de&&jt.render(at);const ne=D.toneMapping;D.toneMapping=qa;const Jt=st.viewport;if(st.viewport!==void 0&&(st.viewport=void 0),S.setupLightsView(st),Ut===!0&&Rt.setGlobalState(D.clippingPlanes,st),Za(A,at,st),se.updateMultisampleRenderTarget(vt),se.updateRenderTargetMipmap(vt),ie.has("WEBGL_multisampled_render_to_texture")===!1){let pe=!1;for(let Ue=0,Ve=W.length;Ue<Ve;Ue++){const Le=W[Ue],me=Le.object,Vt=Le.geometry,Xe=Le.material,be=Le.group;if(Xe.side===la&&me.layers.test(st.layers)){const xn=Xe.side;Xe.side=Wn,Xe.needsUpdate=!0,Fr(me,at,st,Vt,Xe,be),Xe.side=xn,Xe.needsUpdate=!0,pe=!0}}pe===!0&&(se.updateMultisampleRenderTarget(vt),se.updateRenderTargetMipmap(vt))}D.setRenderTarget(Gt,Pt,Qt),D.setClearColor(ft,pt),Jt!==void 0&&(st.viewport=Jt),D.toneMapping=ne}function Za(A,W,at){const st=W.isScene===!0?W.overrideMaterial:null;for(let j=0,vt=A.length;j<vt;j++){const Nt=A[j],Gt=Nt.object,Pt=Nt.geometry,Qt=Nt.group;let ne=Nt.material;ne.allowOverride===!0&&st!==null&&(ne=st),Gt.layers.test(at.layers)&&Fr(Gt,W,at,Pt,ne,Qt)}}function Fr(A,W,at,st,j,vt){A.onBeforeRender(D,W,at,st,j,vt),A.modelViewMatrix.multiplyMatrices(at.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),j.onBeforeRender(D,W,at,st,A,vt),j.transparent===!0&&j.side===la&&j.forceSinglePass===!1?(j.side=Wn,j.needsUpdate=!0,D.renderBufferDirect(at,W,st,j,A,vt),j.side=Ya,j.needsUpdate=!0,D.renderBufferDirect(at,W,st,j,A,vt),j.side=la):D.renderBufferDirect(at,W,st,j,A,vt),A.onAfterRender(D,W,at,st,j,vt)}function qn(A,W,at){W.isScene!==!0&&(W=Xt);const st=kt.get(A),j=S.state.lights,vt=S.state.shadowsArray,Nt=j.state.version,Gt=dt.getParameters(A,j.state,vt,W,at),Pt=dt.getProgramCacheKey(Gt);let Qt=st.programs;st.environment=A.isMeshStandardMaterial?W.environment:null,st.fog=W.fog,st.envMap=(A.isMeshStandardMaterial?Ze:Qe).get(A.envMap||st.environment),st.envMapRotation=st.environment!==null&&A.envMap===null?W.environmentRotation:A.envMapRotation,Qt===void 0&&(A.addEventListener("dispose",gt),Qt=new Map,st.programs=Qt);let ne=Qt.get(Pt);if(ne!==void 0){if(st.currentProgram===ne&&st.lightsStateVersion===Nt)return yn(A,Gt),ne}else Gt.uniforms=dt.getUniforms(A),A.onBeforeCompile(Gt,D),ne=dt.acquireProgram(Gt,Pt),Qt.set(Pt,ne),st.uniforms=Gt.uniforms;const Jt=st.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Jt.clippingPlanes=Rt.uniform),yn(A,Gt),st.needsLights=kc(A),st.lightsStateVersion=Nt,st.needsLights&&(Jt.ambientLightColor.value=j.state.ambient,Jt.lightProbe.value=j.state.probe,Jt.directionalLights.value=j.state.directional,Jt.directionalLightShadows.value=j.state.directionalShadow,Jt.spotLights.value=j.state.spot,Jt.spotLightShadows.value=j.state.spotShadow,Jt.rectAreaLights.value=j.state.rectArea,Jt.ltc_1.value=j.state.rectAreaLTC1,Jt.ltc_2.value=j.state.rectAreaLTC2,Jt.pointLights.value=j.state.point,Jt.pointLightShadows.value=j.state.pointShadow,Jt.hemisphereLights.value=j.state.hemi,Jt.directionalShadowMap.value=j.state.directionalShadowMap,Jt.directionalShadowMatrix.value=j.state.directionalShadowMatrix,Jt.spotShadowMap.value=j.state.spotShadowMap,Jt.spotLightMatrix.value=j.state.spotLightMatrix,Jt.spotLightMap.value=j.state.spotLightMap,Jt.pointShadowMap.value=j.state.pointShadowMap,Jt.pointShadowMatrix.value=j.state.pointShadowMatrix),st.currentProgram=ne,st.uniformsList=null,ne}function rn(A){if(A.uniformsList===null){const W=A.currentProgram.getUniforms();A.uniformsList=Lc.seqWithValue(W.seq,A.uniforms)}return A.uniformsList}function yn(A,W){const at=kt.get(A);at.outputColorSpace=W.outputColorSpace,at.batching=W.batching,at.batchingColor=W.batchingColor,at.instancing=W.instancing,at.instancingColor=W.instancingColor,at.instancingMorph=W.instancingMorph,at.skinning=W.skinning,at.morphTargets=W.morphTargets,at.morphNormals=W.morphNormals,at.morphColors=W.morphColors,at.morphTargetsCount=W.morphTargetsCount,at.numClippingPlanes=W.numClippingPlanes,at.numIntersection=W.numClipIntersection,at.vertexAlphas=W.vertexAlphas,at.vertexTangents=W.vertexTangents,at.toneMapping=W.toneMapping}function da(A,W,at,st,j){W.isScene!==!0&&(W=Xt),se.resetTextureUnits();const vt=W.fog,Nt=st.isMeshStandardMaterial?W.environment:null,Gt=Y===null?D.outputColorSpace:Y.isXRRenderTarget===!0?Y.texture.colorSpace:Nr,Pt=(st.isMeshStandardMaterial?Ze:Qe).get(st.envMap||Nt),Qt=st.vertexColors===!0&&!!at.attributes.color&&at.attributes.color.itemSize===4,ne=!!at.attributes.tangent&&(!!st.normalMap||st.anisotropy>0),Jt=!!at.morphAttributes.position,pe=!!at.morphAttributes.normal,Ue=!!at.morphAttributes.color;let Ve=qa;st.toneMapped&&(Y===null||Y.isXRRenderTarget===!0)&&(Ve=D.toneMapping);const Le=at.morphAttributes.position||at.morphAttributes.normal||at.morphAttributes.color,me=Le!==void 0?Le.length:0,Vt=kt.get(st),Xe=S.state.lights;if(Ut===!0&&(tt===!0||A!==w)){const hn=A===w&&st.id===C;Rt.setState(st,A,hn)}let be=!1;st.version===Vt.__version?(Vt.needsLights&&Vt.lightsStateVersion!==Xe.state.version||Vt.outputColorSpace!==Gt||j.isBatchedMesh&&Vt.batching===!1||!j.isBatchedMesh&&Vt.batching===!0||j.isBatchedMesh&&Vt.batchingColor===!0&&j.colorTexture===null||j.isBatchedMesh&&Vt.batchingColor===!1&&j.colorTexture!==null||j.isInstancedMesh&&Vt.instancing===!1||!j.isInstancedMesh&&Vt.instancing===!0||j.isSkinnedMesh&&Vt.skinning===!1||!j.isSkinnedMesh&&Vt.skinning===!0||j.isInstancedMesh&&Vt.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&Vt.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&Vt.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&Vt.instancingMorph===!1&&j.morphTexture!==null||Vt.envMap!==Pt||st.fog===!0&&Vt.fog!==vt||Vt.numClippingPlanes!==void 0&&(Vt.numClippingPlanes!==Rt.numPlanes||Vt.numIntersection!==Rt.numIntersection)||Vt.vertexAlphas!==Qt||Vt.vertexTangents!==ne||Vt.morphTargets!==Jt||Vt.morphNormals!==pe||Vt.morphColors!==Ue||Vt.toneMapping!==Ve||Vt.morphTargetsCount!==me)&&(be=!0):(be=!0,Vt.__version=st.version);let xn=Vt.currentProgram;be===!0&&(xn=qn(st,W,j));let Bi=!1,gn=!1,Qa=!1;const Se=xn.getUniforms(),Rn=Vt.uniforms;if(Wt.useProgram(xn.program)&&(Bi=!0,gn=!0,Qa=!0),st.id!==C&&(C=st.id,gn=!0),Bi||w!==A){Wt.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),Se.setValue(I,"projectionMatrix",A.projectionMatrix),Se.setValue(I,"viewMatrix",A.matrixWorldInverse);const en=Se.map.cameraPosition;en!==void 0&&en.setValue(I,Dt.setFromMatrixPosition(A.matrixWorld)),te.logarithmicDepthBuffer&&Se.setValue(I,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(st.isMeshPhongMaterial||st.isMeshToonMaterial||st.isMeshLambertMaterial||st.isMeshBasicMaterial||st.isMeshStandardMaterial||st.isShaderMaterial)&&Se.setValue(I,"isOrthographic",A.isOrthographicCamera===!0),w!==A&&(w=A,gn=!0,Qa=!0)}if(j.isSkinnedMesh){Se.setOptional(I,j,"bindMatrix"),Se.setOptional(I,j,"bindMatrixInverse");const hn=j.skeleton;hn&&(hn.boneTexture===null&&hn.computeBoneTexture(),Se.setValue(I,"boneTexture",hn.boneTexture,se))}j.isBatchedMesh&&(Se.setOptional(I,j,"batchingTexture"),Se.setValue(I,"batchingTexture",j._matricesTexture,se),Se.setOptional(I,j,"batchingIdTexture"),Se.setValue(I,"batchingIdTexture",j._indirectTexture,se),Se.setOptional(I,j,"batchingColorTexture"),j._colorsTexture!==null&&Se.setValue(I,"batchingColorTexture",j._colorsTexture,se));const Ln=at.morphAttributes;if((Ln.position!==void 0||Ln.normal!==void 0||Ln.color!==void 0)&&Tt.update(j,at,xn),(gn||Vt.receiveShadow!==j.receiveShadow)&&(Vt.receiveShadow=j.receiveShadow,Se.setValue(I,"receiveShadow",j.receiveShadow)),st.isMeshGouraudMaterial&&st.envMap!==null&&(Rn.envMap.value=Pt,Rn.flipEnvMap.value=Pt.isCubeTexture&&Pt.isRenderTargetTexture===!1?-1:1),st.isMeshStandardMaterial&&st.envMap===null&&W.environment!==null&&(Rn.envMapIntensity.value=W.environmentIntensity),gn&&(Se.setValue(I,"toneMappingExposure",D.toneMappingExposure),Vt.needsLights&&Hr(Rn,Qa),vt&&st.fog===!0&&xt.refreshFogUniforms(Rn,vt),xt.refreshMaterialUniforms(Rn,st,X,Z,S.state.transmissionRenderTarget[A.id]),Lc.upload(I,rn(Vt),Rn,se)),st.isShaderMaterial&&st.uniformsNeedUpdate===!0&&(Lc.upload(I,rn(Vt),Rn,se),st.uniformsNeedUpdate=!1),st.isSpriteMaterial&&Se.setValue(I,"center",j.center),Se.setValue(I,"modelViewMatrix",j.modelViewMatrix),Se.setValue(I,"normalMatrix",j.normalMatrix),Se.setValue(I,"modelMatrix",j.matrixWorld),st.isShaderMaterial||st.isRawShaderMaterial){const hn=st.uniformsGroups;for(let en=0,Ls=hn.length;en<Ls;en++){const Ri=hn[en];oe.update(Ri,xn),oe.bind(Ri,xn)}}return xn}function Hr(A,W){A.ambientLightColor.needsUpdate=W,A.lightProbe.needsUpdate=W,A.directionalLights.needsUpdate=W,A.directionalLightShadows.needsUpdate=W,A.pointLights.needsUpdate=W,A.pointLightShadows.needsUpdate=W,A.spotLights.needsUpdate=W,A.spotLightShadows.needsUpdate=W,A.rectAreaLights.needsUpdate=W,A.hemisphereLights.needsUpdate=W}function kc(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return z},this.getActiveMipmapLevel=function(){return B},this.getRenderTarget=function(){return Y},this.setRenderTargetTextures=function(A,W,at){const st=kt.get(A);st.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,st.__autoAllocateDepthBuffer===!1&&(st.__useRenderToTexture=!1),kt.get(A.texture).__webglTexture=W,kt.get(A.depthTexture).__webglTexture=st.__autoAllocateDepthBuffer?void 0:at,st.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,W){const at=kt.get(A);at.__webglFramebuffer=W,at.__useDefaultFramebuffer=W===void 0};const Xc=I.createFramebuffer();this.setRenderTarget=function(A,W=0,at=0){Y=A,z=W,B=at;let st=!0,j=null,vt=!1,Nt=!1;if(A){const Pt=kt.get(A);if(Pt.__useDefaultFramebuffer!==void 0)Wt.bindFramebuffer(I.FRAMEBUFFER,null),st=!1;else if(Pt.__webglFramebuffer===void 0)se.setupRenderTarget(A);else if(Pt.__hasExternalTextures)se.rebindTextures(A,kt.get(A.texture).__webglTexture,kt.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Jt=A.depthTexture;if(Pt.__boundDepthTexture!==Jt){if(Jt!==null&&kt.has(Jt)&&(A.width!==Jt.image.width||A.height!==Jt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");se.setupDepthRenderbuffer(A)}}const Qt=A.texture;(Qt.isData3DTexture||Qt.isDataArrayTexture||Qt.isCompressedArrayTexture)&&(Nt=!0);const ne=kt.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(ne[W])?j=ne[W][at]:j=ne[W],vt=!0):A.samples>0&&se.useMultisampledRTT(A)===!1?j=kt.get(A).__webglMultisampledFramebuffer:Array.isArray(ne)?j=ne[at]:j=ne,V.copy(A.viewport),it.copy(A.scissor),ot=A.scissorTest}else V.copy(L).multiplyScalar(X).floor(),it.copy(et).multiplyScalar(X).floor(),ot=yt;if(at!==0&&(j=Xc),Wt.bindFramebuffer(I.FRAMEBUFFER,j)&&st&&Wt.drawBuffers(A,j),Wt.viewport(V),Wt.scissor(it),Wt.setScissorTest(ot),vt){const Pt=kt.get(A.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+W,Pt.__webglTexture,at)}else if(Nt){const Pt=W;for(let Qt=0;Qt<A.textures.length;Qt++){const ne=kt.get(A.textures[Qt]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+Qt,ne.__webglTexture,at,Pt)}}else if(A!==null&&at!==0){const Pt=kt.get(A.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Pt.__webglTexture,at)}C=-1},this.readRenderTargetPixels=function(A,W,at,st,j,vt,Nt,Gt=0){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pt=kt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Nt!==void 0&&(Pt=Pt[Nt]),Pt){Wt.bindFramebuffer(I.FRAMEBUFFER,Pt);try{const Qt=A.textures[Gt],ne=Qt.format,Jt=Qt.type;if(!te.textureFormatReadable(ne)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!te.textureTypeReadable(Jt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=A.width-st&&at>=0&&at<=A.height-j&&(A.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+Gt),I.readPixels(W,at,st,j,zt.convert(ne),zt.convert(Jt),vt))}finally{const Qt=Y!==null?kt.get(Y).__webglFramebuffer:null;Wt.bindFramebuffer(I.FRAMEBUFFER,Qt)}}},this.readRenderTargetPixelsAsync=async function(A,W,at,st,j,vt,Nt,Gt=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Pt=kt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Nt!==void 0&&(Pt=Pt[Nt]),Pt)if(W>=0&&W<=A.width-st&&at>=0&&at<=A.height-j){Wt.bindFramebuffer(I.FRAMEBUFFER,Pt);const Qt=A.textures[Gt],ne=Qt.format,Jt=Qt.type;if(!te.textureFormatReadable(ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!te.textureTypeReadable(Jt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const pe=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,pe),I.bufferData(I.PIXEL_PACK_BUFFER,vt.byteLength,I.STREAM_READ),A.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+Gt),I.readPixels(W,at,st,j,zt.convert(ne),zt.convert(Jt),0);const Ue=Y!==null?kt.get(Y).__webglFramebuffer:null;Wt.bindFramebuffer(I.FRAMEBUFFER,Ue);const Ve=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await mM(I,Ve,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,pe),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,vt),I.deleteBuffer(pe),I.deleteSync(Ve),vt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,W=null,at=0){const st=Math.pow(2,-at),j=Math.floor(A.image.width*st),vt=Math.floor(A.image.height*st),Nt=W!==null?W.x:0,Gt=W!==null?W.y:0;se.setTexture2D(A,0),I.copyTexSubImage2D(I.TEXTURE_2D,at,0,0,Nt,Gt,j,vt),Wt.unbindTexture()};const Yo=I.createFramebuffer(),Ka=I.createFramebuffer();this.copyTextureToTexture=function(A,W,at=null,st=null,j=0,vt=null){vt===null&&(j!==0?(ko("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),vt=j,j=0):vt=0);let Nt,Gt,Pt,Qt,ne,Jt,pe,Ue,Ve;const Le=A.isCompressedTexture?A.mipmaps[vt]:A.image;if(at!==null)Nt=at.max.x-at.min.x,Gt=at.max.y-at.min.y,Pt=at.isBox3?at.max.z-at.min.z:1,Qt=at.min.x,ne=at.min.y,Jt=at.isBox3?at.min.z:0;else{const Ln=Math.pow(2,-j);Nt=Math.floor(Le.width*Ln),Gt=Math.floor(Le.height*Ln),A.isDataArrayTexture?Pt=Le.depth:A.isData3DTexture?Pt=Math.floor(Le.depth*Ln):Pt=1,Qt=0,ne=0,Jt=0}st!==null?(pe=st.x,Ue=st.y,Ve=st.z):(pe=0,Ue=0,Ve=0);const me=zt.convert(W.format),Vt=zt.convert(W.type);let Xe;W.isData3DTexture?(se.setTexture3D(W,0),Xe=I.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(se.setTexture2DArray(W,0),Xe=I.TEXTURE_2D_ARRAY):(se.setTexture2D(W,0),Xe=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,W.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,W.unpackAlignment);const be=I.getParameter(I.UNPACK_ROW_LENGTH),xn=I.getParameter(I.UNPACK_IMAGE_HEIGHT),Bi=I.getParameter(I.UNPACK_SKIP_PIXELS),gn=I.getParameter(I.UNPACK_SKIP_ROWS),Qa=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,Le.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Le.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Qt),I.pixelStorei(I.UNPACK_SKIP_ROWS,ne),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Jt);const Se=A.isDataArrayTexture||A.isData3DTexture,Rn=W.isDataArrayTexture||W.isData3DTexture;if(A.isDepthTexture){const Ln=kt.get(A),hn=kt.get(W),en=kt.get(Ln.__renderTarget),Ls=kt.get(hn.__renderTarget);Wt.bindFramebuffer(I.READ_FRAMEBUFFER,en.__webglFramebuffer),Wt.bindFramebuffer(I.DRAW_FRAMEBUFFER,Ls.__webglFramebuffer);for(let Ri=0;Ri<Pt;Ri++)Se&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,kt.get(A).__webglTexture,j,Jt+Ri),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,kt.get(W).__webglTexture,vt,Ve+Ri)),I.blitFramebuffer(Qt,ne,Nt,Gt,pe,Ue,Nt,Gt,I.DEPTH_BUFFER_BIT,I.NEAREST);Wt.bindFramebuffer(I.READ_FRAMEBUFFER,null),Wt.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(j!==0||A.isRenderTargetTexture||kt.has(A)){const Ln=kt.get(A),hn=kt.get(W);Wt.bindFramebuffer(I.READ_FRAMEBUFFER,Yo),Wt.bindFramebuffer(I.DRAW_FRAMEBUFFER,Ka);for(let en=0;en<Pt;en++)Se?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Ln.__webglTexture,j,Jt+en):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Ln.__webglTexture,j),Rn?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,hn.__webglTexture,vt,Ve+en):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,hn.__webglTexture,vt),j!==0?I.blitFramebuffer(Qt,ne,Nt,Gt,pe,Ue,Nt,Gt,I.COLOR_BUFFER_BIT,I.NEAREST):Rn?I.copyTexSubImage3D(Xe,vt,pe,Ue,Ve+en,Qt,ne,Nt,Gt):I.copyTexSubImage2D(Xe,vt,pe,Ue,Qt,ne,Nt,Gt);Wt.bindFramebuffer(I.READ_FRAMEBUFFER,null),Wt.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else Rn?A.isDataTexture||A.isData3DTexture?I.texSubImage3D(Xe,vt,pe,Ue,Ve,Nt,Gt,Pt,me,Vt,Le.data):W.isCompressedArrayTexture?I.compressedTexSubImage3D(Xe,vt,pe,Ue,Ve,Nt,Gt,Pt,me,Le.data):I.texSubImage3D(Xe,vt,pe,Ue,Ve,Nt,Gt,Pt,me,Vt,Le):A.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,vt,pe,Ue,Nt,Gt,me,Vt,Le.data):A.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,vt,pe,Ue,Le.width,Le.height,me,Le.data):I.texSubImage2D(I.TEXTURE_2D,vt,pe,Ue,Nt,Gt,me,Vt,Le);I.pixelStorei(I.UNPACK_ROW_LENGTH,be),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,xn),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Bi),I.pixelStorei(I.UNPACK_SKIP_ROWS,gn),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Qa),vt===0&&W.generateMipmaps&&I.generateMipmap(Xe),Wt.unbindTexture()},this.initRenderTarget=function(A){kt.get(A).__webglFramebuffer===void 0&&se.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?se.setTextureCube(A,0):A.isData3DTexture?se.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?se.setTexture2DArray(A,0):se.setTexture2D(A,0),Wt.unbindTexture()},this.resetState=function(){z=0,B=0,Y=null,Wt.reset(),Lt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Oi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=we._getDrawingBufferColorSpace(t),i.unpackColorSpace=we._getUnpackColorSpace()}}const H0={type:"change"},Gd={type:"start"},Av={type:"end"},Ac=new Hc,G0=new ka,GA=Math.cos(70*dM.DEG2RAD),pn=new K,Xn=2*Math.PI,He={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Oh=1e-6;class VA extends iE{constructor(t,i=null){super(t,i),this.state=He.NONE,this.target=new K,this.cursor=new K,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Rr.ROTATE,MIDDLE:Rr.DOLLY,RIGHT:Rr.PAN},this.touches={ONE:br.ROTATE,TWO:br.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new K,this._lastQuaternion=new Rs,this._lastTargetPosition=new K,this._quat=new Rs().setFromUnitVectors(t.up,new K(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new p0,this._sphericalDelta=new p0,this._scale=1,this._panOffset=new K,this._rotateStart=new ce,this._rotateEnd=new ce,this._rotateDelta=new ce,this._panStart=new ce,this._panEnd=new ce,this._panDelta=new ce,this._dollyStart=new ce,this._dollyEnd=new ce,this._dollyDelta=new ce,this._dollyDirection=new K,this._mouse=new ce,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=XA.bind(this),this._onPointerDown=kA.bind(this),this._onPointerUp=WA.bind(this),this._onContextMenu=JA.bind(this),this._onMouseWheel=jA.bind(this),this._onKeyDown=ZA.bind(this),this._onTouchStart=KA.bind(this),this._onTouchMove=QA.bind(this),this._onMouseDown=qA.bind(this),this._onMouseMove=YA.bind(this),this._interceptControlDown=$A.bind(this),this._interceptControlUp=tR.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(H0),this.update(),this.state=He.NONE}update(t=null){const i=this.object.position;pn.copy(i).sub(this.target),pn.applyQuaternion(this._quat),this._spherical.setFromVector3(pn),this.autoRotate&&this.state===He.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let s=this.minAzimuthAngle,l=this.maxAzimuthAngle;isFinite(s)&&isFinite(l)&&(s<-Math.PI?s+=Xn:s>Math.PI&&(s-=Xn),l<-Math.PI?l+=Xn:l>Math.PI&&(l-=Xn),s<=l?this._spherical.theta=Math.max(s,Math.min(l,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(s+l)/2?Math.max(s,this._spherical.theta):Math.min(l,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let c=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const h=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),c=h!=this._spherical.radius}if(pn.setFromSpherical(this._spherical),pn.applyQuaternion(this._quatInverse),i.copy(this.target).add(pn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let h=null;if(this.object.isPerspectiveCamera){const d=pn.length();h=this._clampDistance(d*this._scale);const m=d-h;this.object.position.addScaledVector(this._dollyDirection,m),this.object.updateMatrixWorld(),c=!!m}else if(this.object.isOrthographicCamera){const d=new K(this._mouse.x,this._mouse.y,0);d.unproject(this.object);const m=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),c=m!==this.object.zoom;const p=new K(this._mouse.x,this._mouse.y,0);p.unproject(this.object),this.object.position.sub(p).add(d),this.object.updateMatrixWorld(),h=pn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;h!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(h).add(this.object.position):(Ac.origin.copy(this.object.position),Ac.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Ac.direction))<GA?this.object.lookAt(this.target):(G0.setFromNormalAndCoplanarPoint(this.object.up,this.target),Ac.intersectPlane(G0,this.target))))}else if(this.object.isOrthographicCamera){const h=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),h!==this.object.zoom&&(this.object.updateProjectionMatrix(),c=!0)}return this._scale=1,this._performCursorZoom=!1,c||this._lastPosition.distanceToSquared(this.object.position)>Oh||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Oh||this._lastTargetPosition.distanceToSquared(this.target)>Oh?(this.dispatchEvent(H0),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Xn/60*this.autoRotateSpeed*t:Xn/60/60*this.autoRotateSpeed}_getZoomScale(t){const i=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*i)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,i){pn.setFromMatrixColumn(i,0),pn.multiplyScalar(-t),this._panOffset.add(pn)}_panUp(t,i){this.screenSpacePanning===!0?pn.setFromMatrixColumn(i,1):(pn.setFromMatrixColumn(i,0),pn.crossVectors(this.object.up,pn)),pn.multiplyScalar(t),this._panOffset.add(pn)}_pan(t,i){const s=this.domElement;if(this.object.isPerspectiveCamera){const l=this.object.position;pn.copy(l).sub(this.target);let c=pn.length();c*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*c/s.clientHeight,this.object.matrix),this._panUp(2*i*c/s.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/s.clientWidth,this.object.matrix),this._panUp(i*(this.object.top-this.object.bottom)/this.object.zoom/s.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,i){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const s=this.domElement.getBoundingClientRect(),l=t-s.left,c=i-s.top,h=s.width,d=s.height;this._mouse.x=l/h*2-1,this._mouse.y=-(c/d)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(Xn*this._rotateDelta.x/i.clientHeight),this._rotateUp(Xn*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let i=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(Xn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),i=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-Xn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),i=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(Xn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),i=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-Xn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),i=!0;break}i&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._rotateStart.set(s,l)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._panStart.set(s,l)}}_handleTouchStartDolly(t){const i=this._getSecondPointerPosition(t),s=t.pageX-i.x,l=t.pageY-i.y,c=Math.sqrt(s*s+l*l);this._dollyStart.set(0,c)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const s=this._getSecondPointerPosition(t),l=.5*(t.pageX+s.x),c=.5*(t.pageY+s.y);this._rotateEnd.set(l,c)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(Xn*this._rotateDelta.x/i.clientHeight),this._rotateUp(Xn*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._panEnd.set(s,l)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const i=this._getSecondPointerPosition(t),s=t.pageX-i.x,l=t.pageY-i.y,c=Math.sqrt(s*s+l*l);this._dollyEnd.set(0,c),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const h=(t.pageX+i.x)*.5,d=(t.pageY+i.y)*.5;this._updateZoomParameters(h,d)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==t.pointerId){this._pointers.splice(i,1);return}}_isTrackingPointer(t){for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==t.pointerId)return!0;return!1}_trackPointer(t){let i=this._pointerPositions[t.pointerId];i===void 0&&(i=new ce,this._pointerPositions[t.pointerId]=i),i.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const i=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[i]}_customWheelEvent(t){const i=t.deltaMode,s={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(i){case 1:s.deltaY*=16;break;case 2:s.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(s.deltaY*=10),s}}function kA(r){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(r.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(r)&&(this._addPointer(r),r.pointerType==="touch"?this._onTouchStart(r):this._onMouseDown(r)))}function XA(r){this.enabled!==!1&&(r.pointerType==="touch"?this._onTouchMove(r):this._onMouseMove(r))}function WA(r){switch(this._removePointer(r),this._pointers.length){case 0:this.domElement.releasePointerCapture(r.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Av),this.state=He.NONE;break;case 1:const t=this._pointers[0],i=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:i.x,pageY:i.y});break}}function qA(r){let t;switch(r.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Rr.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(r),this.state=He.DOLLY;break;case Rr.ROTATE:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=He.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=He.ROTATE}break;case Rr.PAN:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=He.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=He.PAN}break;default:this.state=He.NONE}this.state!==He.NONE&&this.dispatchEvent(Gd)}function YA(r){switch(this.state){case He.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(r);break;case He.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(r);break;case He.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(r);break}}function jA(r){this.enabled===!1||this.enableZoom===!1||this.state!==He.NONE||(r.preventDefault(),this.dispatchEvent(Gd),this._handleMouseWheel(this._customWheelEvent(r)),this.dispatchEvent(Av))}function ZA(r){this.enabled!==!1&&this._handleKeyDown(r)}function KA(r){switch(this._trackPointer(r),this._pointers.length){case 1:switch(this.touches.ONE){case br.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(r),this.state=He.TOUCH_ROTATE;break;case br.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(r),this.state=He.TOUCH_PAN;break;default:this.state=He.NONE}break;case 2:switch(this.touches.TWO){case br.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(r),this.state=He.TOUCH_DOLLY_PAN;break;case br.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(r),this.state=He.TOUCH_DOLLY_ROTATE;break;default:this.state=He.NONE}break;default:this.state=He.NONE}this.state!==He.NONE&&this.dispatchEvent(Gd)}function QA(r){switch(this._trackPointer(r),this.state){case He.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(r),this.update();break;case He.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(r),this.update();break;case He.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(r),this.update();break;case He.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(r),this.update();break;default:this.state=He.NONE}}function JA(r){this.enabled!==!1&&r.preventDefault()}function $A(r){r.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function tR(r){r.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const Ph=[{id:"home",label:"Home",position:new K(1.35,.54,1.62)},{id:"front",label:"Front",position:new K(0,.08,1.95)},{id:"side",label:"Side",position:new K(1.95,.08,0)},{id:"top",label:"Top",position:new K(.02,2.1,.02)},{id:"diag",label:"Diag",position:new K(1.45,.72,1.65)}];async function eR(r){try{if((await fetch(r,{method:"HEAD"})).ok)return!0}catch{}try{const t=await fetch(r,{headers:{Range:"bytes=0-1"}});return t.ok||t.status===206}catch{return!1}}function nR({asset:r,variant:t="showcase"}){const i=je.useRef(null),s=je.useRef(null),l=je.useRef(null),c=je.useRef(null),[h,d]=je.useState("loading"),[m,p]=je.useState("Loading"),[_,g]=je.useState(!0),[y,x]=je.useState(t==="qa"),[b,R]=je.useState(!1),M=je.useMemo(()=>({splat:bs(r.splatUrl),ply:bs(r.plyUrl),fallback:bs(r.pointQaImage)}),[r]);je.useEffect(()=>{let D=!1;const F=i.current;if(!F)return;F.innerHTML="",d("loading"),p("Loading");const z=new HM;z.background=new Me(b?"#eef1f5":"#090d12");const B=new mi(45,F.clientWidth/Math.max(F.clientHeight,1),.01,200);B.position.copy(Ph[0].position),s.current=B;const Y=new HA({antialias:!1,alpha:!1,preserveDrawingBuffer:!0,powerPreference:"high-performance"});Y.setPixelRatio(Math.min(window.devicePixelRatio,2)),Y.setSize(F.clientWidth,F.clientHeight),c.current=Y,F.appendChild(Y.domElement);const C=new VA(B,Y.domElement);C.enableDamping=!0,C.dampingFactor=.08,C.minDistance=.08,C.maxDistance=18,C.target.set(0,0,0),l.current=C;const w=new eE(2.2,22,"#31404b","#1c2630");w.visible=_,z.add(w);const V=new nE(.42);V.visible=y,z.add(V);const it=new JM("#dbe7ef",1.6);it.position.set(1,2,1.5),z.add(it),z.add(new $M("#8aa1b5",1.25));let ot=null;async function ft(){try{const[{SparkRenderer:Z,SplatMesh:X}]=await Promise.all([Xy(()=>import("./spark.module-D_XYf6LE.js"),[])]);if(D)return;const St=new Z({renderer:Y});z.add(St);let Mt=null,L=null,et=null;async function yt(At,Ut){if(!await eR(At))return null;try{const tt=new X({url:At});return await tt.initialized,Mt=Ut,tt}catch(tt){return et=tt,null}}if(L=await yt(M.splat,"splat"),L||(L=await yt(M.ply,"ply")),!L||!Mt){d("fallback"),p(et instanceof Error?et.message:"Preview");return}ot=new Bo,ot.add(L),L.rotation.y=Math.PI/2,ot.rotation.x=Math.PI,z.add(ot),d(Mt),p(Mt.toUpperCase())}catch(Z){d("fallback"),p(Z instanceof Error?Z.message:"Preview")}}ft();const pt=()=>{!F.clientWidth||!F.clientHeight||(B.aspect=F.clientWidth/F.clientHeight,B.updateProjectionMatrix(),Y.setSize(F.clientWidth,F.clientHeight))},N=new ResizeObserver(pt);return N.observe(F),Y.setAnimationLoop(()=>{if(C.update(),Y.render(z,B),ot){const Z=new Pr().setFromObject(ot);if(!Z.isEmpty()){const X=new K;Z.getCenter(X),C.target.lerp(X,.02)}}}),()=>{D=!0,N.disconnect(),Y.setAnimationLoop(null),C.dispose(),Y.dispose(),F.innerHTML=""}},[r,b,y,_,M]);function S(D){const F=s.current,z=l.current;!F||!z||(F.position.copy(Ph[D].position),F.lookAt(z.target),z.update())}function H(){const D=c.current;if(!D)return;const F=document.createElement("a");F.download=`${r.id}.png`,F.href=D.domElement.toDataURL("image/png"),F.click()}const O=h==="fallback"||h==="error";return ht.jsxs("section",{className:`splat-viewer splat-viewer--${t}`,children:[ht.jsxs("div",{className:"viewer-canvas-shell",children:[ht.jsx("div",{ref:i,className:"viewer-canvas"}),O&&ht.jsxs("div",{className:"viewer-fallback",children:[ht.jsx("img",{src:M.fallback,alt:`${r.name} point cloud`}),ht.jsx("span",{children:m})]}),ht.jsxs("div",{className:"viewer-status",children:[ht.jsx("span",{className:`status-dot status-dot--${h}`}),m]}),ht.jsxs("div",{className:"viewer-tool-rail","aria-label":"Viewer tools",children:[ht.jsx("button",{type:"button","aria-label":"Orbit",children:ht.jsx(px,{size:17})}),ht.jsx("button",{type:"button","aria-label":"Frame",onClick:()=>S(0),children:ht.jsx(_x,{size:17})}),ht.jsx("button",{type:"button","aria-label":"Grid",className:_?"is-active":"",onClick:()=>g(D=>!D),children:ht.jsx(Og,{size:17})}),ht.jsx("button",{type:"button","aria-label":"Axes",className:y?"is-active":"",onClick:()=>x(D=>!D),children:ht.jsx(zh,{size:17})})]}),ht.jsx("div",{className:"viewer-preset-bar","aria-label":"Camera views",children:Ph.map((D,F)=>ht.jsx("button",{type:"button",onClick:()=>S(F),"aria-label":D.label,children:ht.jsx(zh,{size:16})},D.id))}),ht.jsxs("div",{className:"viewer-actions",children:[ht.jsx("button",{type:"button","aria-label":"Background",onClick:()=>R(D=>!D),children:ht.jsx(yx,{size:17})}),ht.jsx("button",{type:"button","aria-label":"Capture",onClick:H,children:ht.jsx(tx,{size:17})}),ht.jsx("button",{type:"button","aria-label":"Fill",children:ht.jsx(ux,{size:17})})]})]}),t==="qa"&&ht.jsxs("div",{className:"viewer-footer",children:[ht.jsx("span",{children:"Background"}),ht.jsx("button",{type:"button",className:b?"toggle-pill is-active":"toggle-pill",onClick:()=>R(D=>!D),children:ht.jsx(Qy,{size:14})}),ht.jsx("span",{children:"Grid"}),ht.jsx("button",{type:"button",className:_?"toggle-pill is-active":"toggle-pill",onClick:()=>g(D=>!D),children:ht.jsx(Og,{size:14})}),ht.jsx("span",{className:"viewer-footer-spacer"}),ht.jsx(q0,{size:15}),ht.jsx("span",{children:r.splatLabel}),ht.jsx("button",{type:"button",className:"icon-only","aria-label":"Close",children:ht.jsx(Mx,{size:15})})]})]})}function iR(r){return r.toLowerCase().replaceAll(" / ","-").replaceAll(" ","-")}function aR({appMode:r,onNavigate:t}){return ht.jsxs("header",{className:"topbar showcase-topbar",children:[ht.jsxs("button",{type:"button",className:"brand",onClick:()=>t("showcase"),children:[ht.jsx("span",{className:"brand-mark"}),ht.jsx("span",{children:"Splat Demo Room"})]}),ht.jsxs("nav",{className:"main-nav","aria-label":"Main",children:[ht.jsx("a",{href:"#showcase",className:"is-active",children:"Showcase"}),ht.jsx("a",{href:"#gallery",children:"Gallery"}),ht.jsx("a",{href:"#viewer",children:"Viewer"}),r==="full"&&ht.jsx("button",{type:"button",onClick:()=>t("qa"),children:"QA"})]}),ht.jsxs("div",{className:"topbar-actions",children:[ht.jsx("button",{type:"button","aria-label":"GitHub",children:ht.jsx(nx,{size:18})}),ht.jsx("button",{type:"button","aria-label":"Theme",children:ht.jsx(hx,{size:18})})]})]})}function sR({asset:r}){return ht.jsxs("aside",{className:"model-card",id:"viewer",children:[ht.jsx("h1",{children:r.name}),ht.jsxs("dl",{children:[ht.jsxs("div",{children:[ht.jsx("dt",{children:"Category"}),ht.jsx("dd",{children:r.category.slice(0,-1)==="Prop"?"Small Prop":r.category.replace(/s$/,"")})]}),ht.jsxs("div",{children:[ht.jsx("dt",{children:"Profile"}),ht.jsx("dd",{children:r.profileLabel})]}),ht.jsxs("div",{children:[ht.jsx("dt",{children:"Gaussians"}),ht.jsx("dd",{children:r.gaussianCount.toLocaleString()})]}),ht.jsxs("div",{children:[ht.jsx("dt",{children:"Splat"}),ht.jsx("dd",{children:r.splatLabel})]}),ht.jsxs("div",{children:[ht.jsx("dt",{children:"PLY"}),ht.jsx("dd",{children:r.plyLabel})]})]}),ht.jsxs("div",{className:"reference-panel",children:[ht.jsx("span",{children:"Reference"}),ht.jsx("img",{src:bs(r.referenceImage),alt:`${r.name} reference`})]})]})}function rR({asset:r,selected:t,onSelect:i}){return ht.jsxs("button",{type:"button",className:t?"gallery-tile is-selected":"gallery-tile",onClick:i,children:[ht.jsxs("div",{className:"tile-head",children:[ht.jsx("strong",{children:r.name}),ht.jsx("span",{children:r.category.replace(/s$/,"")})]}),ht.jsxs("div",{className:"tile-images",children:[ht.jsxs("figure",{children:[ht.jsx("figcaption",{children:"Reference"}),ht.jsx("img",{src:bs(r.referenceImage),alt:`${r.name} reference`})]}),ht.jsxs("figure",{children:[ht.jsx("figcaption",{children:"Generated"}),ht.jsx("img",{src:bs(r.pointQaImage),alt:`${r.name} generated`})]})]}),ht.jsxs("div",{className:"tile-meta",children:[ht.jsx("span",{children:r.profileLabel}),ht.jsx("span",{children:r.gaussianLabel}),ht.jsx("span",{children:r.splatLabel})]})]})}function V0({manifest:r,appMode:t,onNavigate:i}){const s=je.useMemo(()=>Ex(r.assets),[r.assets]),[l,c]=je.useState("stone_lantern"),h=s.find(m=>m.id===l)??s[0],d=r.categories.filter(m=>!m.future).filter(m=>s.some(p=>p.category===m.name));return ht.jsxs("main",{className:"app-page showcase-page",children:[ht.jsx(aR,{appMode:t,onNavigate:i}),ht.jsxs("section",{className:"showcase-hero",id:"showcase",children:[ht.jsx("div",{className:"showcase-viewer",children:ht.jsx(nR,{asset:h,variant:"showcase"})}),ht.jsx(sR,{asset:h})]}),ht.jsx("section",{className:"gallery-section",id:"gallery",children:d.map(m=>ht.jsxs("div",{className:"category-band",id:iR(m.name),children:[ht.jsx("h2",{children:m.name}),ht.jsx("div",{className:"gallery-grid",children:s.filter(p=>p.category===m.name).map(p=>ht.jsx(rR,{asset:p,selected:p.id===h.id,onSelect:()=>c(p.id)},p.id))})]},m.id))}),ht.jsxs("section",{className:"process-strip","aria-label":"Flow",children:[ht.jsx("span",{children:"From Reference to Web Viewer"}),ht.jsxs("div",{className:"process-step",children:[ht.jsx(q0,{size:24}),ht.jsx("small",{children:"Reference"})]}),ht.jsx("span",{className:"process-arrow"}),ht.jsxs("div",{className:"process-step",children:[ht.jsx(vx,{size:24}),ht.jsx("small",{children:"Gaussian"})]}),ht.jsx("span",{className:"process-arrow"}),ht.jsxs("div",{className:"process-step",children:[ht.jsx(rx,{size:24}),ht.jsx("small",{children:"Web Viewer"})]}),ht.jsx(zh,{className:"process-corner",size:18})]})]})}const k0="public";function X0(){const r="/splat-qa-room-showcase/".replace(/\/$/,"");let t=window.location.pathname;return r&&t.startsWith(r)&&(t=t.slice(r.length)||"/"),t.replace(/^\/+/,"").split("/")[0]==="qa"?"qa":"showcase"}function oR(r){return`${"/splat-qa-room-showcase/".replace(/\/$/,"")}/${r}`}function lR(){const r=Tx(),[t,i]=je.useState(X0);je.useEffect(()=>{const c=()=>i(X0());return window.addEventListener("popstate",c),()=>window.removeEventListener("popstate",c)},[]);const s=je.useMemo(()=>t==="qa"?"showcase":t,[t]);function l(c){const h="showcase";window.history.pushState(null,"",oR(h)),i(h)}return r.status==="loading"?ht.jsxs("main",{className:"app-loading",children:[ht.jsx(lx,{className:"spin",size:24}),ht.jsx("span",{children:"Loading"})]}):r.status==="error"?ht.jsx("main",{className:"app-loading",children:ht.jsx("span",{children:"Manifest unavailable"})}):s==="qa"?ht.jsx(V0,{manifest:r.manifest,onNavigate:l,appMode:k0}):ht.jsx(V0,{manifest:r.manifest,onNavigate:l,appMode:k0})}Gy.createRoot(document.getElementById("root")).render(ht.jsx(je.StrictMode,{children:ht.jsx(lR,{})}));export{ca as A,bi as B,Me as C,la as D,zi as E,ii as F,Gg as G,Ti as H,gR as I,dR as J,uR as K,cR as L,ua as M,ni as N,Sv as O,S0 as P,Rs as Q,Ei as R,ha as S,Cd as T,Pi as U,K as V,IM as W,pR as X,he as Y,Pn as Z,xM as _,ce as a,Ke as b,vR as c,tn as d,yv as e,BM as f,mR as g,ja as h,pi as i,mi as j,zd as k,Nd as l,As as m,Od as n,fR as o,hR as p,SR as q,An as r,fe as s,Nr as t,Ni as u,hv as v,gv as w,_R as x,Pr as y,Fo as z};
