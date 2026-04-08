(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();function Wi(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function rd(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e}/*!
 * GSAP 3.14.2
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Kn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Bs={duration:.5,overwrite:!1,delay:0},zu,on,Ct,si=1e8,Et=1/si,Sc=Math.PI*2,cm=Sc/4,um=0,sd=Math.sqrt,fm=Math.cos,hm=Math.sin,nn=function(e){return typeof e=="string"},Ut=function(e){return typeof e=="function"},Ji=function(e){return typeof e=="number"},ku=function(e){return typeof e>"u"},Ui=function(e){return typeof e=="object"},Pn=function(e){return e!==!1},Vu=function(){return typeof window<"u"},ja=function(e){return Ut(e)||nn(e)},ad=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},vn=Array.isArray,dm=/random\([^)]+\)/g,pm=/,\s*/g,Ef=/(?:-?\.?\d|\.)+/gi,od=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,ws=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,El=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,ld=/[+-]=-?[.\d]+/,mm=/[^,'"\[\]\s]+/gi,_m=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Pt,bi,Mc,Gu,Zn={},jo={},cd,ud=function(e){return(jo=zs(e,Zn))&&Nn},Hu=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Ia=function(e,t){return!t&&console.warn(e)},fd=function(e,t){return e&&(Zn[e]=t)&&jo&&(jo[e]=t)||Zn},Ua=function(){return 0},gm={suppressEvents:!0,isStart:!0,kill:!1},No={suppressEvents:!0,kill:!1},vm={suppressEvents:!0},Wu={},vr=[],yc={},hd,Gn={},Tl={},Tf=30,Oo=[],Xu="",Yu=function(e){var t=e[0],n,i;if(Ui(t)||Ut(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=Oo.length;i--&&!Oo[i].targetTest(t););n=Oo[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new Nd(e[i],n)))||e.splice(i,1);return e},Yr=function(e){return e._gsap||Yu(ai(e))[0]._gsap},dd=function(e,t,n){return(n=e[t])&&Ut(n)?e[t]():ku(n)&&e.getAttribute&&e.getAttribute(t)||n},Dn=function(e,t){return(e=e.split(",")).forEach(t)||e},Ot=function(e){return Math.round(e*1e5)/1e5||0},Rt=function(e){return Math.round(e*1e7)/1e7||0},Ps=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},xm=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},Jo=function(){var e=vr.length,t=vr.slice(0),n,i;for(yc={},vr.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},qu=function(e){return!!(e._initted||e._startAt||e.add)},pd=function(e,t,n,i){vr.length&&!on&&Jo(),e.render(t,n,!!(on&&t<0&&qu(e))),vr.length&&!on&&Jo()},md=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(mm).length<2?t:nn(e)?e.trim():e},_d=function(e){return e},jn=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Sm=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},zs=function(e,t){for(var n in t)e[n]=t[n];return e},bf=function r(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=Ui(t[n])?r(e[n]||(e[n]={}),t[n]):t[n]);return e},Qo=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},Sa=function(e){var t=e.parent||Pt,n=e.keyframes?Sm(vn(e.keyframes)):jn;if(Pn(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},Mm=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},gd=function(e,t,n,i,s){var a=e[i],o;if(s)for(o=t[s];a&&a[s]>o;)a=a._prev;return a?(t._next=a._next,a._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=a,t.parent=t._dp=e,t},ml=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=t._prev,a=t._next;s?s._next=a:e[n]===t&&(e[n]=a),a?a._prev=s:e[i]===t&&(e[i]=s),t._next=t._prev=t.parent=null},Mr=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},qr=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},ym=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Ec=function(e,t,n,i){return e._startAt&&(on?e._startAt.revert(No):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},Em=function r(e){return!e||e._ts&&r(e.parent)},Af=function(e){return e._repeat?ks(e._tTime,e=e.duration()+e._rDelay)*e:0},ks=function(e,t){var n=Math.floor(e=Rt(e/t));return e&&n===e?n-1:n},el=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},_l=function(e){return e._end=Rt(e._start+(e._tDur/Math.abs(e._ts||e._rts||Et)||0))},gl=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=Rt(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),_l(e),n._dirty||qr(n,e)),e},vd=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=el(e.rawTime(),t),(!t._dur||Ya(0,t.totalDuration(),n)-t._tTime>Et)&&t.render(n,!0)),qr(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-Et}},Ci=function(e,t,n,i){return t.parent&&Mr(t),t._start=Rt((Ji(n)?n:n||e!==Pt?ei(e,n,t):e._time)+t._delay),t._end=Rt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),gd(e,t,"_first","_last",e._sort?"_start":0),Tc(t)||(e._recent=t),i||vd(e,t),e._ts<0&&gl(e,e._tTime),e},xd=function(e,t){return(Zn.ScrollTrigger||Hu("scrollTrigger",t))&&Zn.ScrollTrigger.create(t,e)},Sd=function(e,t,n,i,s){if(Ku(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!on&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&hd!==Wn.frame)return vr.push(e),e._lazy=[s,i],1},Tm=function r(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||r(t))},Tc=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},bm=function(e,t,n,i){var s=e.ratio,a=t<0||!t&&(!e._start&&Tm(e)&&!(!e._initted&&Tc(e))||(e._ts<0||e._dp._ts<0)&&!Tc(e))?0:1,o=e._rDelay,l=0,c,u,d;if(o&&e._repeat&&(l=Ya(0,e._tDur,t),u=ks(l,o),e._yoyo&&u&1&&(a=1-a),u!==ks(e._tTime,o)&&(s=1-a,e.vars.repeatRefresh&&e._initted&&e.invalidate())),a!==s||on||i||e._zTime===Et||!t&&e._zTime){if(!e._initted&&Sd(e,t,i,n,l))return;for(d=e._zTime,e._zTime=t||(n?Et:0),n||(n=t&&!d),e.ratio=a,e._from&&(a=1-a),e._time=0,e._tTime=l,c=e._pt;c;)c.r(a,c.d),c=c._next;t<0&&Ec(e,t,n,!0),e._onUpdate&&!n&&Yn(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&Yn(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===a&&(a&&Mr(e,1),!n&&!on&&(Yn(e,a?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},Am=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},Vs=function(e,t,n,i){var s=e._repeat,a=Rt(t)||0,o=e._tTime/e._tDur;return o&&!i&&(e._time*=a/e._dur),e._dur=a,e._tDur=s?s<0?1e10:Rt(a*(s+1)+e._rDelay*s):a,o>0&&!i&&gl(e,e._tTime=e._tDur*o),e.parent&&_l(e),n||qr(e.parent,e),e},wf=function(e){return e instanceof bn?qr(e):Vs(e,e._dur)},wm={_start:0,endTime:Ua,totalDuration:Ua},ei=function r(e,t,n){var i=e.labels,s=e._recent||wm,a=e.duration()>=si?s.endTime(!1):e._dur,o,l,c;return nn(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",o=t.indexOf("="),l==="<"||l===">"?(o>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(o<0?s:n).totalDuration()/100:1)):o<0?(t in i||(i[t]=a),i[t]):(l=parseFloat(t.charAt(o-1)+t.substr(o+1)),c&&n&&(l=l/100*(vn(n)?n[0]:n).totalDuration()),o>1?r(e,t.substr(0,o-1),n)+l:a+l)):t==null?a:+t},Ma=function(e,t,n){var i=Ji(t[1]),s=(i?2:1)+(e<2?0:1),a=t[s],o,l;if(i&&(a.duration=t[1]),a.parent=n,e){for(o=a,l=n;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=Pn(l.vars.inherit)&&l.parent;a.immediateRender=Pn(o.immediateRender),e<2?a.runBackwards=1:a.startAt=t[s-1]}return new Gt(t[0],a,t[s+1])},Ar=function(e,t){return e||e===0?t(e):t},Ya=function(e,t,n){return n<e?e:n>t?t:n},mn=function(e,t){return!nn(e)||!(t=_m.exec(e))?"":t[1]},Cm=function(e,t,n){return Ar(n,function(i){return Ya(e,t,i)})},bc=[].slice,Md=function(e,t){return e&&Ui(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Ui(e[0]))&&!e.nodeType&&e!==bi},Rm=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var s;return nn(i)&&!t||Md(i,1)?(s=n).push.apply(s,ai(i)):n.push(i)})||n},ai=function(e,t,n){return Ct&&!t&&Ct.selector?Ct.selector(e):nn(e)&&!n&&(Mc||!Gs())?bc.call((t||Gu).querySelectorAll(e),0):vn(e)?Rm(e,n):Md(e)?bc.call(e,0):e?[e]:[]},Ac=function(e){return e=ai(e)[0]||Ia("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return ai(t,n.querySelectorAll?n:n===e?Ia("Invalid scope")||Gu.createElement("div"):e)}},yd=function(e){return e.sort(function(){return .5-Math.random()})},Ed=function(e){if(Ut(e))return e;var t=Ui(e)?e:{each:e},n=$r(t.ease),i=t.from||0,s=parseFloat(t.base)||0,a={},o=i>0&&i<1,l=isNaN(i)||o,c=t.axis,u=i,d=i;return nn(i)?u=d={center:.5,edges:.5,end:1}[i]||0:!o&&l&&(u=i[0],d=i[1]),function(f,h,_){var g=(_||t).length,p=a[g],m,S,T,y,A,w,b,v,M;if(!p){if(M=t.grid==="auto"?0:(t.grid||[1,si])[1],!M){for(b=-si;b<(b=_[M++].getBoundingClientRect().left)&&M<g;);M<g&&M--}for(p=a[g]=[],m=l?Math.min(M,g)*u-.5:i%M,S=M===si?0:l?g*d/M-.5:i/M|0,b=0,v=si,w=0;w<g;w++)T=w%M-m,y=S-(w/M|0),p[w]=A=c?Math.abs(c==="y"?y:T):sd(T*T+y*y),A>b&&(b=A),A<v&&(v=A);i==="random"&&yd(p),p.max=b-v,p.min=v,p.v=g=(parseFloat(t.amount)||parseFloat(t.each)*(M>g?g-1:c?c==="y"?g/M:M:Math.max(M,g/M))||0)*(i==="edges"?-1:1),p.b=g<0?s-g:s,p.u=mn(t.amount||t.each)||0,n=n&&g<0?Id(n):n}return g=(p[f]-p.min)/p.max||0,Rt(p.b+(n?n(g):g)*p.v)+p.u}},wc=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=Rt(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(Ji(n)?0:mn(n))}},Td=function(e,t){var n=vn(e),i,s;return!n&&Ui(e)&&(i=n=e.radius||si,e.values?(e=ai(e.values),(s=!Ji(e[0]))&&(i*=i)):e=wc(e.increment)),Ar(t,n?Ut(e)?function(a){return s=e(a),Math.abs(s-a)<=i?s:a}:function(a){for(var o=parseFloat(s?a.x:a),l=parseFloat(s?a.y:0),c=si,u=0,d=e.length,f,h;d--;)s?(f=e[d].x-o,h=e[d].y-l,f=f*f+h*h):f=Math.abs(e[d]-o),f<c&&(c=f,u=d);return u=!i||c<=i?e[u]:a,s||u===a||Ji(a)?u:u+mn(a)}:wc(e))},bd=function(e,t,n,i){return Ar(vn(e)?!t:n===!0?!!(n=0):!i,function(){return vn(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},Pm=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(s,a){return a(s)},i)}},Dm=function(e,t){return function(n){return e(parseFloat(n))+(t||mn(n))}},Lm=function(e,t,n){return wd(e,t,0,1,n)},Ad=function(e,t,n){return Ar(n,function(i){return e[~~t(i)]})},Im=function r(e,t,n){var i=t-e;return vn(e)?Ad(e,r(0,e.length),t):Ar(n,function(s){return(i+(s-e)%i)%i+e})},Um=function r(e,t,n){var i=t-e,s=i*2;return vn(e)?Ad(e,r(0,e.length-1),t):Ar(n,function(a){return a=(s+(a-e)%s)%s||0,e+(a>i?s-a:a)})},Fa=function(e){return e.replace(dm,function(t){var n=t.indexOf("[")+1,i=t.substring(n||7,n?t.indexOf("]"):t.length-1).split(pm);return bd(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},wd=function(e,t,n,i,s){var a=t-e,o=i-n;return Ar(s,function(l){return n+((l-e)/a*o||0)})},Fm=function r(e,t,n,i){var s=isNaN(e+t)?0:function(h){return(1-h)*e+h*t};if(!s){var a=nn(e),o={},l,c,u,d,f;if(n===!0&&(i=1)&&(n=null),a)e={p:e},t={p:t};else if(vn(e)&&!vn(t)){for(u=[],d=e.length,f=d-2,c=1;c<d;c++)u.push(r(e[c-1],e[c]));d--,s=function(_){_*=d;var g=Math.min(f,~~_);return u[g](_-g)},n=t}else i||(e=zs(vn(e)?[]:{},e));if(!u){for(l in t)$u.call(o,e,l,"get",t[l]);s=function(_){return Ju(_,o)||(a?e.p:e)}}}return Ar(n,s)},Cf=function(e,t,n){var i=e.labels,s=si,a,o,l;for(a in i)o=i[a]-t,o<0==!!n&&o&&s>(o=Math.abs(o))&&(l=a,s=o);return l},Yn=function(e,t,n){var i=e.vars,s=i[t],a=Ct,o=e._ctx,l,c,u;if(s)return l=i[t+"Params"],c=i.callbackScope||e,n&&vr.length&&Jo(),o&&(Ct=o),u=l?s.apply(c,l):s.call(c),Ct=a,u},ua=function(e){return Mr(e),e.scrollTrigger&&e.scrollTrigger.kill(!!on),e.progress()<1&&Yn(e,"onInterrupt"),e},Cs,Cd=[],Rd=function(e){if(e)if(e=!e.name&&e.default||e,Vu()||e.headless){var t=e.name,n=Ut(e),i=t&&!n&&e.init?function(){this._props=[]}:e,s={init:Ua,render:Ju,add:$u,kill:jm,modifier:Zm,rawVars:0},a={targetTest:0,get:0,getSetter:ju,aliases:{},register:0};if(Gs(),e!==i){if(Gn[t])return;jn(i,jn(Qo(e,s),a)),zs(i.prototype,zs(s,Qo(e,a))),Gn[i.prop=t]=i,e.targetTest&&(Oo.push(i),Wu[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}fd(t,i),e.register&&e.register(Nn,i,Ln)}else Cd.push(e)},yt=255,fa={aqua:[0,yt,yt],lime:[0,yt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,yt],navy:[0,0,128],white:[yt,yt,yt],olive:[128,128,0],yellow:[yt,yt,0],orange:[yt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[yt,0,0],pink:[yt,192,203],cyan:[0,yt,yt],transparent:[yt,yt,yt,0]},bl=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*yt+.5|0},Pd=function(e,t,n){var i=e?Ji(e)?[e>>16,e>>8&yt,e&yt]:0:fa.black,s,a,o,l,c,u,d,f,h,_;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),fa[e])i=fa[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),a=e.charAt(2),o=e.charAt(3),e="#"+s+s+a+a+o+o+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&yt,i&yt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&yt,e&yt]}else if(e.substr(0,3)==="hsl"){if(i=_=e.match(Ef),!t)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,a=u<=.5?u*(c+1):u+c-u*c,s=u*2-a,i.length>3&&(i[3]*=1),i[0]=bl(l+1/3,s,a),i[1]=bl(l,s,a),i[2]=bl(l-1/3,s,a);else if(~e.indexOf("="))return i=e.match(od),n&&i.length<4&&(i[3]=1),i}else i=e.match(Ef)||fa.transparent;i=i.map(Number)}return t&&!_&&(s=i[0]/yt,a=i[1]/yt,o=i[2]/yt,d=Math.max(s,a,o),f=Math.min(s,a,o),u=(d+f)/2,d===f?l=c=0:(h=d-f,c=u>.5?h/(2-d-f):h/(d+f),l=d===s?(a-o)/h+(a<o?6:0):d===a?(o-s)/h+2:(s-a)/h+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},Dd=function(e){var t=[],n=[],i=-1;return e.split(xr).forEach(function(s){var a=s.match(ws)||[];t.push.apply(t,a),n.push(i+=a.length+1)}),t.c=n,t},Rf=function(e,t,n){var i="",s=(e+i).match(xr),a=t?"hsla(":"rgba(",o=0,l,c,u,d;if(!s)return e;if(s=s.map(function(f){return(f=Pd(f,t,1))&&a+(t?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(u=Dd(e),l=n.c,l.join(i)!==u.c.join(i)))for(c=e.replace(xr,"1").split(ws),d=c.length-1;o<d;o++)i+=c[o]+(~l.indexOf(o)?s.shift()||a+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!c)for(c=e.split(xr),d=c.length-1;o<d;o++)i+=c[o]+s[o];return i+c[d]},xr=function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in fa)r+="|"+e+"\\b";return new RegExp(r+")","gi")}(),Nm=/hsl[a]?\(/,Ld=function(e){var t=e.join(" "),n;if(xr.lastIndex=0,xr.test(t))return n=Nm.test(t),e[1]=Rf(e[1],n),e[0]=Rf(e[0],n,Dd(e[1])),!0},Na,Wn=function(){var r=Date.now,e=500,t=33,n=r(),i=n,s=1e3/240,a=s,o=[],l,c,u,d,f,h,_=function g(p){var m=r()-i,S=p===!0,T,y,A,w;if((m>e||m<0)&&(n+=m-t),i+=m,A=i-n,T=A-a,(T>0||S)&&(w=++d.frame,f=A-d.time*1e3,d.time=A=A/1e3,a+=T+(T>=s?4:s-T),y=1),S||(l=c(g)),y)for(h=0;h<o.length;h++)o[h](A,f,w,p)};return d={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(p){return f/(1e3/(p||60))},wake:function(){cd&&(!Mc&&Vu()&&(bi=Mc=window,Gu=bi.document||{},Zn.gsap=Nn,(bi.gsapVersions||(bi.gsapVersions=[])).push(Nn.version),ud(jo||bi.GreenSockGlobals||!bi.gsap&&bi||{}),Cd.forEach(Rd)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&d.sleep(),c=u||function(p){return setTimeout(p,a-d.time*1e3+1|0)},Na=1,_(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),Na=0,c=Ua},lagSmoothing:function(p,m){e=p||1/0,t=Math.min(m||33,e)},fps:function(p){s=1e3/(p||240),a=d.time*1e3+s},add:function(p,m,S){var T=m?function(y,A,w,b){p(y,A,w,b),d.remove(T)}:p;return d.remove(p),o[S?"unshift":"push"](T),Gs(),T},remove:function(p,m){~(m=o.indexOf(p))&&o.splice(m,1)&&h>=m&&h--},_listeners:o},d}(),Gs=function(){return!Na&&Wn.wake()},ct={},Om=/^[\d.\-M][\d.\-,\s]/,Bm=/["']/g,zm=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],s=1,a=n.length,o,l,c;s<a;s++)l=n[s],o=s!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),t[i]=isNaN(c)?c.replace(Bm,"").trim():+c,i=l.substr(o+1).trim();return t},km=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},Vm=function(e){var t=(e+"").split("("),n=ct[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[zm(t[1])]:km(e).split(",").map(md)):ct._CE&&Om.test(e)?ct._CE("",e):n},Id=function(e){return function(t){return 1-e(1-t)}},Ud=function r(e,t){for(var n=e._first,i;n;)n instanceof bn?r(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?r(n.timeline,t):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=t)),n=n._next},$r=function(e,t){return e&&(Ut(e)?e:ct[e]||Vm(e))||t},rs=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:i},a;return Dn(e,function(o){ct[o]=Zn[o]=s,ct[a=o.toLowerCase()]=n;for(var l in s)ct[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=ct[o+"."+l]=s[l]}),s},Fd=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Al=function r(e,t,n){var i=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),a=s/Sc*(Math.asin(1/i)||0),o=function(u){return u===1?1:i*Math.pow(2,-10*u)*hm((u-a)*s)+1},l=e==="out"?o:e==="in"?function(c){return 1-o(1-c)}:Fd(o);return s=Sc/s,l.config=function(c,u){return r(e,c,u)},l},wl=function r(e,t){t===void 0&&(t=1.70158);var n=function(a){return a?--a*a*((t+1)*a+t)+1:0},i=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:Fd(n);return i.config=function(s){return r(e,s)},i};Dn("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,e){var t=e<5?e+1:e;rs(r+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});ct.Linear.easeNone=ct.none=ct.Linear.easeIn;rs("Elastic",Al("in"),Al("out"),Al());(function(r,e){var t=1/e,n=2*t,i=2.5*t,s=function(o){return o<t?r*o*o:o<n?r*Math.pow(o-1.5/e,2)+.75:o<i?r*(o-=2.25/e)*o+.9375:r*Math.pow(o-2.625/e,2)+.984375};rs("Bounce",function(a){return 1-s(1-a)},s)})(7.5625,2.75);rs("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});rs("Circ",function(r){return-(sd(1-r*r)-1)});rs("Sine",function(r){return r===1?1:-fm(r*cm)+1});rs("Back",wl("in"),wl("out"),wl());ct.SteppedEase=ct.steps=Zn.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),s=t?1:0,a=1-Et;return function(o){return((i*Ya(0,a,o)|0)+s)*n}}};Bs.ease=ct["quad.out"];Dn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return Xu+=r+","+r+"Params,"});var Nd=function(e,t){this.id=um++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:dd,this.set=t?t.getSetter:ju},Oa=function(){function r(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Vs(this,+t.duration,1,1),this.data=t.data,Ct&&(this._ctx=Ct,Ct.data.push(this)),Na||Wn.wake()}var e=r.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,Vs(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(Gs(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(gl(this,n),!s._dp||s.parent||vd(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Ci(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===Et||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),pd(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Af(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Af(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?ks(this._tTime,s)+1:1},e.timeScale=function(n,i){if(!arguments.length)return this._rts===-Et?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?el(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-Et?0:this._rts,this.totalTime(Ya(-Math.abs(this._delay),this.totalDuration(),s),i!==!1),_l(this),ym(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Gs(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Et&&(this._tTime-=Et)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=Rt(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Ci(i,this,this._start-this._delay),this}return this._start},e.endTime=function(n){return this._start+(Pn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?el(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=vm);var i=on;return on=n,qu(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),on=i,this},e.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,wf(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,wf(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(ei(this,n),Pn(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,Pn(i)),this._dur||(this._zTime=-Et),this},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Et:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-Et,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-Et)},e.eventCallback=function(n,i,s){var a=this.vars;return arguments.length>1?(i?(a[n]=i,s&&(a[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete a[n],this):a[n]},e.then=function(n){var i=this,s=i._prom;return new Promise(function(a){var o=Ut(n)?n:_d,l=function(){var u=i.then;i.then=null,s&&s(),Ut(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=u),a(o),i.then=u};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?l():i._prom=l})},e.kill=function(){ua(this)},r}();jn(Oa.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Et,_prom:0,_ps:!1,_rts:1});var bn=function(r){rd(e,r);function e(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=Pn(n.sortChildren),Pt&&Ci(n.parent||Pt,Wi(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&xd(Wi(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(i,s,a){return Ma(0,arguments,this),this},t.from=function(i,s,a){return Ma(1,arguments,this),this},t.fromTo=function(i,s,a,o){return Ma(2,arguments,this),this},t.set=function(i,s,a){return s.duration=0,s.parent=this,Sa(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Gt(i,s,ei(this,a),1),this},t.call=function(i,s,a){return Ci(this,Gt.delayedCall(0,i,s),a)},t.staggerTo=function(i,s,a,o,l,c,u){return a.duration=s,a.stagger=a.stagger||o,a.onComplete=c,a.onCompleteParams=u,a.parent=this,new Gt(i,a,ei(this,l)),this},t.staggerFrom=function(i,s,a,o,l,c,u){return a.runBackwards=1,Sa(a).immediateRender=Pn(a.immediateRender),this.staggerTo(i,s,a,o,l,c,u)},t.staggerFromTo=function(i,s,a,o,l,c,u,d){return o.startAt=a,Sa(o).immediateRender=Pn(o.immediateRender),this.staggerTo(i,s,o,l,c,u,d)},t.render=function(i,s,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:Rt(i),d=this._zTime<0!=i<0&&(this._initted||!c),f,h,_,g,p,m,S,T,y,A,w,b;if(this!==Pt&&u>l&&i>=0&&(u=l),u!==this._tTime||a||d){if(o!==this._time&&c&&(u+=this._time-o,i+=this._time-o),f=u,y=this._start,T=this._ts,m=!T,d&&(c||(o=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(w=this._yoyo,p=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(p*100+i,s,a);if(f=Rt(u%p),u===l?(g=this._repeat,f=c):(A=Rt(u/p),g=~~A,g&&g===A&&(f=c,g--),f>c&&(f=c)),A=ks(this._tTime,p),!o&&this._tTime&&A!==g&&this._tTime-A*p-this._dur<=0&&(A=g),w&&g&1&&(f=c-f,b=1),g!==A&&!this._lock){var v=w&&A&1,M=v===(w&&g&1);if(g<A&&(v=!v),o=v?0:u%c?c:u,this._lock=1,this.render(o||(b?0:Rt(g*p)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&Yn(this,"onRepeat"),this.vars.repeatRefresh&&!b&&(this.invalidate()._lock=1,A=g),o&&o!==this._time||m!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,M&&(this._lock=2,o=v?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!b&&this.invalidate()),this._lock=0,!this._ts&&!m)return this;Ud(this,b)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(S=Am(this,Rt(o),Rt(f)),S&&(u-=f-(f=S._start))),this._tTime=u,this._time=f,this._act=!T,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,o=0),!o&&u&&c&&!s&&!A&&(Yn(this,"onStart"),this._tTime!==u))return this;if(f>=o&&i>=0)for(h=this._first;h;){if(_=h._next,(h._act||f>=h._start)&&h._ts&&S!==h){if(h.parent!==this)return this.render(i,s,a);if(h.render(h._ts>0?(f-h._start)*h._ts:(h._dirty?h.totalDuration():h._tDur)+(f-h._start)*h._ts,s,a),f!==this._time||!this._ts&&!m){S=0,_&&(u+=this._zTime=-Et);break}}h=_}else{h=this._last;for(var F=i<0?i:f;h;){if(_=h._prev,(h._act||F<=h._end)&&h._ts&&S!==h){if(h.parent!==this)return this.render(i,s,a);if(h.render(h._ts>0?(F-h._start)*h._ts:(h._dirty?h.totalDuration():h._tDur)+(F-h._start)*h._ts,s,a||on&&qu(h)),f!==this._time||!this._ts&&!m){S=0,_&&(u+=this._zTime=F?-Et:Et);break}}h=_}}if(S&&!s&&(this.pause(),S.render(f>=o?0:-Et)._zTime=f>=o?1:-1,this._ts))return this._start=y,_l(this),this.render(i,s,a);this._onUpdate&&!s&&Yn(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&o)&&(y===this._start||Math.abs(T)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&Mr(this,1),!s&&!(i<0&&!o)&&(u||o||!l)&&(Yn(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,s){var a=this;if(Ji(s)||(s=ei(this,s,i)),!(i instanceof Oa)){if(vn(i))return i.forEach(function(o){return a.add(o,s)}),this;if(nn(i))return this.addLabel(i,s);if(Ut(i))i=Gt.delayedCall(0,i);else return this}return this!==i?Ci(this,i,s):this},t.getChildren=function(i,s,a,o){i===void 0&&(i=!0),s===void 0&&(s=!0),a===void 0&&(a=!0),o===void 0&&(o=-si);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof Gt?s&&l.push(c):(a&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,a)))),c=c._next;return l},t.getById=function(i){for(var s=this.getChildren(1,1,1),a=s.length;a--;)if(s[a].vars.id===i)return s[a]},t.remove=function(i){return nn(i)?this.removeLabel(i):Ut(i)?this.killTweensOf(i):(i.parent===this&&ml(this,i),i===this._recent&&(this._recent=this._last),qr(this))},t.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Rt(Wn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},t.addLabel=function(i,s){return this.labels[i]=ei(this,s),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,s,a){var o=Gt.delayedCall(0,s||Ua,a);return o.data="isPause",this._hasPause=1,Ci(this,o,ei(this,i))},t.removePause=function(i){var s=this._first;for(i=ei(this,i);s;)s._start===i&&s.data==="isPause"&&Mr(s),s=s._next},t.killTweensOf=function(i,s,a){for(var o=this.getTweensOf(i,a),l=o.length;l--;)hr!==o[l]&&o[l].kill(i,s);return this},t.getTweensOf=function(i,s){for(var a=[],o=ai(i),l=this._first,c=Ji(s),u;l;)l instanceof Gt?xm(l._targets,o)&&(c?(!hr||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&a.push(l):(u=l.getTweensOf(o,s)).length&&a.push.apply(a,u),l=l._next;return a},t.tweenTo=function(i,s){s=s||{};var a=this,o=ei(a,i),l=s,c=l.startAt,u=l.onStart,d=l.onStartParams,f=l.immediateRender,h,_=Gt.to(a,jn({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale())||Et,onStart:function(){if(a.pause(),!h){var p=s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale());_._dur!==p&&Vs(_,p,0,1).render(_._time,!0,!0),h=1}u&&u.apply(_,d||[])}},s));return f?_.render(0):_},t.tweenFromTo=function(i,s,a){return this.tweenTo(s,jn({startAt:{time:ei(this,i)}},a))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),Cf(this,ei(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),Cf(this,ei(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+Et)},t.shiftChildren=function(i,s,a){a===void 0&&(a=0);var o=this._first,l=this.labels,c;for(i=Rt(i);o;)o._start>=a&&(o._start+=i,o._end+=i),o=o._next;if(s)for(c in l)l[c]>=a&&(l[c]+=i);return qr(this)},t.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,a;s;)a=s._next,this.remove(s),s=a;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),qr(this)},t.totalDuration=function(i){var s=0,a=this,o=a._last,l=si,c,u,d;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-i:i));if(a._dirty){for(d=a.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),u=o._start,u>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,Ci(a,o,u-o._delay,1)._lock=0):l=u,u<0&&o._ts&&(s-=u,(!d&&!a._dp||d&&d.smoothChildTiming)&&(a._start+=Rt(u/a._ts),a._time-=u,a._tTime-=u),a.shiftChildren(-u,!1,-1/0),l=0),o._end>s&&o._ts&&(s=o._end),o=c;Vs(a,a===Pt&&a._time>s?a._time:s,1,1),a._dirty=0}return a._tDur},e.updateRoot=function(i){if(Pt._ts&&(pd(Pt,el(i,Pt)),hd=Wn.frame),Wn.frame>=Tf){Tf+=Kn.autoSleep||120;var s=Pt._first;if((!s||!s._ts)&&Kn.autoSleep&&Wn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Wn.sleep()}}},e}(Oa);jn(bn.prototype,{_lock:0,_hasPause:0,_forcing:0});var Gm=function(e,t,n,i,s,a,o){var l=new Ln(this._pt,e,t,0,1,Gd,null,s),c=0,u=0,d,f,h,_,g,p,m,S;for(l.b=n,l.e=i,n+="",i+="",(m=~i.indexOf("random("))&&(i=Fa(i)),a&&(S=[n,i],a(S,e,t),n=S[0],i=S[1]),f=n.match(El)||[];d=El.exec(i);)_=d[0],g=i.substring(c,d.index),h?h=(h+1)%5:g.substr(-5)==="rgba("&&(h=1),_!==f[u++]&&(p=parseFloat(f[u-1])||0,l._pt={_next:l._pt,p:g||u===1?g:",",s:p,c:_.charAt(1)==="="?Ps(p,_)-p:parseFloat(_)-p,m:h&&h<4?Math.round:0},c=El.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=o,(ld.test(i)||m)&&(l.e=0),this._pt=l,l},$u=function(e,t,n,i,s,a,o,l,c,u){Ut(i)&&(i=i(s||0,e,a));var d=e[t],f=n!=="get"?n:Ut(d)?c?e[t.indexOf("set")||!Ut(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():d,h=Ut(d)?c?qm:kd:Zu,_;if(nn(i)&&(~i.indexOf("random(")&&(i=Fa(i)),i.charAt(1)==="="&&(_=Ps(f,i)+(mn(f)||0),(_||_===0)&&(i=_))),!u||f!==i||Cc)return!isNaN(f*i)&&i!==""?(_=new Ln(this._pt,e,t,+f||0,i-(f||0),typeof d=="boolean"?Km:Vd,0,h),c&&(_.fp=c),o&&_.modifier(o,this,e),this._pt=_):(!d&&!(t in e)&&Hu(t,i),Gm.call(this,e,t,f,i,h,l||Kn.stringFilter,c))},Hm=function(e,t,n,i,s){if(Ut(e)&&(e=ya(e,s,t,n,i)),!Ui(e)||e.style&&e.nodeType||vn(e)||ad(e))return nn(e)?ya(e,s,t,n,i):e;var a={},o;for(o in e)a[o]=ya(e[o],s,t,n,i);return a},Od=function(e,t,n,i,s,a){var o,l,c,u;if(Gn[e]&&(o=new Gn[e]).init(s,o.rawVars?t[e]:Hm(t[e],i,s,a,n),n,i,a)!==!1&&(n._pt=l=new Ln(n._pt,s,e,0,1,o.render,o,0,o.priority),n!==Cs))for(c=n._ptLookup[n._targets.indexOf(s)],u=o._props.length;u--;)c[o._props[u]]=l;return o},hr,Cc,Ku=function r(e,t,n){var i=e.vars,s=i.ease,a=i.startAt,o=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.runBackwards,d=i.yoyoEase,f=i.keyframes,h=i.autoRevert,_=e._dur,g=e._startAt,p=e._targets,m=e.parent,S=m&&m.data==="nested"?m.vars.targets:p,T=e._overwrite==="auto"&&!zu,y=e.timeline,A,w,b,v,M,F,R,I,z,H,k,G,U;if(y&&(!f||!s)&&(s="none"),e._ease=$r(s,Bs.ease),e._yEase=d?Id($r(d===!0?s:d,Bs.ease)):0,d&&e._yoyo&&!e._repeat&&(d=e._yEase,e._yEase=e._ease,e._ease=d),e._from=!y&&!!i.runBackwards,!y||f&&!i.stagger){if(I=p[0]?Yr(p[0]).harness:0,G=I&&i[I.prop],A=Qo(i,Wu),g&&(g._zTime<0&&g.progress(1),t<0&&u&&o&&!h?g.render(-1,!0):g.revert(u&&_?No:gm),g._lazy=0),a){if(Mr(e._startAt=Gt.set(p,jn({data:"isStart",overwrite:!1,parent:m,immediateRender:!0,lazy:!g&&Pn(l),startAt:null,delay:0,onUpdate:c&&function(){return Yn(e,"onUpdate")},stagger:0},a))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(on||!o&&!h)&&e._startAt.revert(No),o&&_&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(u&&_&&!g){if(t&&(o=!1),b=jn({overwrite:!1,data:"isFromStart",lazy:o&&!g&&Pn(l),immediateRender:o,stagger:0,parent:m},A),G&&(b[I.prop]=G),Mr(e._startAt=Gt.set(p,b)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(on?e._startAt.revert(No):e._startAt.render(-1,!0)),e._zTime=t,!o)r(e._startAt,Et,Et);else if(!t)return}for(e._pt=e._ptCache=0,l=_&&Pn(l)||l&&!_,w=0;w<p.length;w++){if(M=p[w],R=M._gsap||Yu(p)[w]._gsap,e._ptLookup[w]=H={},yc[R.id]&&vr.length&&Jo(),k=S===p?w:S.indexOf(M),I&&(z=new I).init(M,G||A,e,k,S)!==!1&&(e._pt=v=new Ln(e._pt,M,z.name,0,1,z.render,z,0,z.priority),z._props.forEach(function(Q){H[Q]=v}),z.priority&&(F=1)),!I||G)for(b in A)Gn[b]&&(z=Od(b,A,e,k,M,S))?z.priority&&(F=1):H[b]=v=$u.call(e,M,b,"get",A[b],k,S,0,i.stringFilter);e._op&&e._op[w]&&e.kill(M,e._op[w]),T&&e._pt&&(hr=e,Pt.killTweensOf(M,H,e.globalTime(t)),U=!e.parent,hr=0),e._pt&&l&&(yc[R.id]=1)}F&&Hd(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!U,f&&t<=0&&y.render(si,!0,!0)},Wm=function(e,t,n,i,s,a,o,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,d,f,h;if(!c)for(c=e._ptCache[t]=[],f=e._ptLookup,h=e._targets.length;h--;){if(u=f[h][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return Cc=1,e.vars[t]="+=0",Ku(e,o),Cc=0,l?Ia(t+" not eligible for reset"):1;c.push(u)}for(h=c.length;h--;)d=c[h],u=d._pt||d,u.s=(i||i===0)&&!s?i:u.s+(i||0)+a*u.c,u.c=n-u.s,d.e&&(d.e=Ot(n)+mn(d.e)),d.b&&(d.b=u.s+mn(d.b))},Xm=function(e,t){var n=e[0]?Yr(e[0]).harness:0,i=n&&n.aliases,s,a,o,l;if(!i)return t;s=zs({},t);for(a in i)if(a in s)for(l=i[a].split(","),o=l.length;o--;)s[l[o]]=s[a];return s},Ym=function(e,t,n,i){var s=t.ease||i||"power1.inOut",a,o;if(vn(t))o=n[e]||(n[e]=[]),t.forEach(function(l,c){return o.push({t:c/(t.length-1)*100,v:l,e:s})});else for(a in t)o=n[a]||(n[a]=[]),a==="ease"||o.push({t:parseFloat(e),v:t[a],e:s})},ya=function(e,t,n,i,s){return Ut(e)?e.call(t,n,i,s):nn(e)&&~e.indexOf("random(")?Fa(e):e},Bd=Xu+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",zd={};Dn(Bd+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return zd[r]=1});var Gt=function(r){rd(e,r);function e(n,i,s,a){var o;typeof i=="number"&&(s.duration=i,i=s,s=null),o=r.call(this,a?i:Sa(i))||this;var l=o.vars,c=l.duration,u=l.delay,d=l.immediateRender,f=l.stagger,h=l.overwrite,_=l.keyframes,g=l.defaults,p=l.scrollTrigger,m=l.yoyoEase,S=i.parent||Pt,T=(vn(n)||ad(n)?Ji(n[0]):"length"in i)?[n]:ai(n),y,A,w,b,v,M,F,R;if(o._targets=T.length?Yu(T):Ia("GSAP target "+n+" not found. https://gsap.com",!Kn.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=h,_||f||ja(c)||ja(u)){if(i=o.vars,y=o.timeline=new bn({data:"nested",defaults:g||{},targets:S&&S.data==="nested"?S.vars.targets:T}),y.kill(),y.parent=y._dp=Wi(o),y._start=0,f||ja(c)||ja(u)){if(b=T.length,F=f&&Ed(f),Ui(f))for(v in f)~Bd.indexOf(v)&&(R||(R={}),R[v]=f[v]);for(A=0;A<b;A++)w=Qo(i,zd),w.stagger=0,m&&(w.yoyoEase=m),R&&zs(w,R),M=T[A],w.duration=+ya(c,Wi(o),A,M,T),w.delay=(+ya(u,Wi(o),A,M,T)||0)-o._delay,!f&&b===1&&w.delay&&(o._delay=u=w.delay,o._start+=u,w.delay=0),y.to(M,w,F?F(A,M,T):0),y._ease=ct.none;y.duration()?c=u=0:o.timeline=0}else if(_){Sa(jn(y.vars.defaults,{ease:"none"})),y._ease=$r(_.ease||i.ease||"none");var I=0,z,H,k;if(vn(_))_.forEach(function(G){return y.to(T,G,">")}),y.duration();else{w={};for(v in _)v==="ease"||v==="easeEach"||Ym(v,_[v],w,_.easeEach);for(v in w)for(z=w[v].sort(function(G,U){return G.t-U.t}),I=0,A=0;A<z.length;A++)H=z[A],k={ease:H.e,duration:(H.t-(A?z[A-1].t:0))/100*c},k[v]=H.v,y.to(T,k,I),I+=k.duration;y.duration()<c&&y.to({},{duration:c-y.duration()})}}c||o.duration(c=y.duration())}else o.timeline=0;return h===!0&&!zu&&(hr=Wi(o),Pt.killTweensOf(T),hr=0),Ci(S,Wi(o),s),i.reversed&&o.reverse(),i.paused&&o.paused(!0),(d||!c&&!_&&o._start===Rt(S._time)&&Pn(d)&&Em(Wi(o))&&S.data!=="nested")&&(o._tTime=-Et,o.render(Math.max(0,-u)||0)),p&&xd(Wi(o),p),o}var t=e.prototype;return t.render=function(i,s,a){var o=this._time,l=this._tDur,c=this._dur,u=i<0,d=i>l-Et&&!u?l:i<Et?0:i,f,h,_,g,p,m,S,T,y;if(!c)bm(this,i,s,a);else if(d!==this._tTime||!i||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(f=d,T=this.timeline,this._repeat){if(g=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(g*100+i,s,a);if(f=Rt(d%g),d===l?(_=this._repeat,f=c):(p=Rt(d/g),_=~~p,_&&_===p?(f=c,_--):f>c&&(f=c)),m=this._yoyo&&_&1,m&&(y=this._yEase,f=c-f),p=ks(this._tTime,g),f===o&&!a&&this._initted&&_===p)return this._tTime=d,this;_!==p&&(T&&this._yEase&&Ud(T,m),this.vars.repeatRefresh&&!m&&!this._lock&&f!==g&&this._initted&&(this._lock=a=1,this.render(Rt(g*_),!0).invalidate()._lock=0))}if(!this._initted){if(Sd(this,u?i:f,a,s,d))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&_!==p))return this;if(c!==this._dur)return this.render(i,s,a)}if(this._tTime=d,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=S=(y||this._ease)(f/c),this._from&&(this.ratio=S=1-S),!o&&d&&!s&&!p&&(Yn(this,"onStart"),this._tTime!==d))return this;for(h=this._pt;h;)h.r(S,h.d),h=h._next;T&&T.render(i<0?i:T._dur*T._ease(f/this._dur),s,a)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(u&&Ec(this,i,s,a),Yn(this,"onUpdate")),this._repeat&&_!==p&&this.vars.onRepeat&&!s&&this.parent&&Yn(this,"onRepeat"),(d===this._tDur||!d)&&this._tTime===d&&(u&&!this._onUpdate&&Ec(this,i,!0,!0),(i||!c)&&(d===this._tDur&&this._ts>0||!d&&this._ts<0)&&Mr(this,1),!s&&!(u&&!o)&&(d||o||m)&&(Yn(this,d===l?"onComplete":"onReverseComplete",!0),this._prom&&!(d<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},t.resetTo=function(i,s,a,o,l){Na||Wn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||Ku(this,c),u=this._ease(c/this._dur),Wm(this,i,s,a,o,u,c,l)?this.resetTo(i,s,a,o,1):(gl(this,0),this.parent||gd(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?ua(this):this.scrollTrigger&&this.scrollTrigger.kill(!!on),this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,hr&&hr.vars.overwrite!==!0)._first||ua(this),this.parent&&a!==this.timeline.totalDuration()&&Vs(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=i?ai(i):o,c=this._ptLookup,u=this._pt,d,f,h,_,g,p,m;if((!s||s==="all")&&Mm(o,l))return s==="all"&&(this._pt=0),ua(this);for(d=this._op=this._op||[],s!=="all"&&(nn(s)&&(g={},Dn(s,function(S){return g[S]=1}),s=g),s=Xm(o,s)),m=o.length;m--;)if(~l.indexOf(o[m])){f=c[m],s==="all"?(d[m]=s,_=f,h={}):(h=d[m]=d[m]||{},_=s);for(g in _)p=f&&f[g],p&&((!("kill"in p.d)||p.d.kill(g)===!0)&&ml(this,p,"_pt"),delete f[g]),h!=="all"&&(h[g]=1)}return this._initted&&!this._pt&&u&&ua(this),this},e.to=function(i,s){return new e(i,s,arguments[2])},e.from=function(i,s){return Ma(1,arguments)},e.delayedCall=function(i,s,a,o){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},e.fromTo=function(i,s,a){return Ma(2,arguments)},e.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(i,s)},e.killTweensOf=function(i,s,a){return Pt.killTweensOf(i,s,a)},e}(Oa);jn(Gt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Dn("staggerTo,staggerFrom,staggerFromTo",function(r){Gt[r]=function(){var e=new bn,t=bc.call(arguments,0);return t.splice(r==="staggerFromTo"?5:4,0,0),e[r].apply(e,t)}});var Zu=function(e,t,n){return e[t]=n},kd=function(e,t,n){return e[t](n)},qm=function(e,t,n,i){return e[t](i.fp,n)},$m=function(e,t,n){return e.setAttribute(t,n)},ju=function(e,t){return Ut(e[t])?kd:ku(e[t])&&e.setAttribute?$m:Zu},Vd=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},Km=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},Gd=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},Ju=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},Zm=function(e,t,n,i){for(var s=this._pt,a;s;)a=s._next,s.p===i&&s.modifier(e,t,n),s=a},jm=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?ml(this,t,"_pt"):t.dep||(n=1),t=i;return!n},Jm=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},Hd=function(e){for(var t=e._pt,n,i,s,a;t;){for(n=t._next,i=s;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:a)?t._prev._next=t:s=t,(t._next=i)?i._prev=t:a=t,t=n}e._pt=s},Ln=function(){function r(t,n,i,s,a,o,l,c,u){this.t=n,this.s=s,this.c=a,this.p=i,this.r=o||Vd,this.d=l||this,this.set=c||Zu,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=r.prototype;return e.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=Jm,this.m=n,this.mt=s,this.tween=i},r}();Dn(Xu+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(r){return Wu[r]=1});Zn.TweenMax=Zn.TweenLite=Gt;Zn.TimelineLite=Zn.TimelineMax=bn;Pt=new bn({sortChildren:!1,defaults:Bs,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Kn.stringFilter=Ld;var Kr=[],Bo={},Qm=[],Pf=0,e_=0,Cl=function(e){return(Bo[e]||Qm).map(function(t){return t()})},Rc=function(){var e=Date.now(),t=[];e-Pf>2&&(Cl("matchMediaInit"),Kr.forEach(function(n){var i=n.queries,s=n.conditions,a,o,l,c;for(o in i)a=bi.matchMedia(i[o]).matches,a&&(l=1),a!==s[o]&&(s[o]=a,c=1);c&&(n.revert(),l&&t.push(n))}),Cl("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),Pf=e,Cl("matchMedia"))},Wd=function(){function r(t,n){this.selector=n&&Ac(n),this.data=[],this._r=[],this.isReverted=!1,this.id=e_++,t&&this.add(t)}var e=r.prototype;return e.add=function(n,i,s){Ut(n)&&(s=i,i=n,n=Ut);var a=this,o=function(){var c=Ct,u=a.selector,d;return c&&c!==a&&c.data.push(a),s&&(a.selector=Ac(s)),Ct=a,d=i.apply(a,arguments),Ut(d)&&a._r.push(d),Ct=c,a.selector=u,a.isReverted=!1,d};return a.last=o,n===Ut?o(a,function(l){return a.add(null,l)}):n?a[n]=o:o},e.ignore=function(n){var i=Ct;Ct=null,n(this),Ct=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof Gt&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var s=this;if(n?function(){for(var o=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return o.splice(o.indexOf(u),1)}));for(o.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,d){return d.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof bn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Gt)&&c.revert&&c.revert(n);s._r.forEach(function(u){return u(n,s)}),s.isReverted=!0}():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),i)for(var a=Kr.length;a--;)Kr[a].id===this.id&&Kr.splice(a,1)},e.revert=function(n){this.kill(n||{})},r}(),t_=function(){function r(t){this.contexts=[],this.scope=t,Ct&&Ct.data.push(this)}var e=r.prototype;return e.add=function(n,i,s){Ui(n)||(n={matches:n});var a=new Wd(0,s||this.scope),o=a.conditions={},l,c,u;Ct&&!a.selector&&(a.selector=Ct.selector),this.contexts.push(a),i=a.add("onMatch",i),a.queries=n;for(c in n)c==="all"?u=1:(l=bi.matchMedia(n[c]),l&&(Kr.indexOf(a)<0&&Kr.push(a),(o[c]=l.matches)&&(u=1),l.addListener?l.addListener(Rc):l.addEventListener("change",Rc)));return u&&i(a,function(d){return a.add(null,d)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r}(),tl={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return Rd(i)})},timeline:function(e){return new bn(e)},getTweensOf:function(e,t){return Pt.getTweensOf(e,t)},getProperty:function(e,t,n,i){nn(e)&&(e=ai(e)[0]);var s=Yr(e||{}).get,a=n?_d:md;return n==="native"&&(n=""),e&&(t?a((Gn[t]&&Gn[t].get||s)(e,t,n,i)):function(o,l,c){return a((Gn[o]&&Gn[o].get||s)(e,o,l,c))})},quickSetter:function(e,t,n){if(e=ai(e),e.length>1){var i=e.map(function(u){return Nn.quickSetter(u,t,n)}),s=i.length;return function(u){for(var d=s;d--;)i[d](u)}}e=e[0]||{};var a=Gn[t],o=Yr(e),l=o.harness&&(o.harness.aliases||{})[t]||t,c=a?function(u){var d=new a;Cs._pt=0,d.init(e,n?u+n:u,Cs,0,[e]),d.render(1,d),Cs._pt&&Ju(1,Cs)}:o.set(e,l);return a?c:function(u){return c(e,l,n?u+n:u,o,1)}},quickTo:function(e,t,n){var i,s=Nn.to(e,jn((i={},i[t]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),a=function(l,c,u){return s.resetTo(t,l,c,u)};return a.tween=s,a},isTweening:function(e){return Pt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=$r(e.ease,Bs.ease)),bf(Bs,e||{})},config:function(e){return bf(Kn,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,s=e.defaults,a=e.extendTimeline;(i||"").split(",").forEach(function(o){return o&&!Gn[o]&&!Zn[o]&&Ia(t+" effect requires "+o+" plugin.")}),Tl[t]=function(o,l,c){return n(ai(o),jn(l||{},s),c)},a&&(bn.prototype[t]=function(o,l,c){return this.add(Tl[t](o,Ui(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){ct[e]=$r(t)},parseEase:function(e,t){return arguments.length?$r(e,t):ct},getById:function(e){return Pt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new bn(e),i,s;for(n.smoothChildTiming=Pn(e.smoothChildTiming),Pt.remove(n),n._dp=0,n._time=n._tTime=Pt._time,i=Pt._first;i;)s=i._next,(t||!(!i._dur&&i instanceof Gt&&i.vars.onComplete===i._targets[0]))&&Ci(n,i,i._start-i._delay),i=s;return Ci(Pt,n,0),n},context:function(e,t){return e?new Wd(e,t):Ct},matchMedia:function(e){return new t_(e)},matchMediaRefresh:function(){return Kr.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||Rc()},addEventListener:function(e,t){var n=Bo[e]||(Bo[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=Bo[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:Im,wrapYoyo:Um,distribute:Ed,random:bd,snap:Td,normalize:Lm,getUnit:mn,clamp:Cm,splitColor:Pd,toArray:ai,selector:Ac,mapRange:wd,pipe:Pm,unitize:Dm,interpolate:Fm,shuffle:yd},install:ud,effects:Tl,ticker:Wn,updateRoot:bn.updateRoot,plugins:Gn,globalTimeline:Pt,core:{PropTween:Ln,globals:fd,Tween:Gt,Timeline:bn,Animation:Oa,getCache:Yr,_removeLinkedListItem:ml,reverting:function(){return on},context:function(e){return e&&Ct&&(Ct.data.push(e),e._ctx=Ct),Ct},suppressOverwrites:function(e){return zu=e}}};Dn("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return tl[r]=Gt[r]});Wn.add(bn.updateRoot);Cs=tl.to({},{duration:0});var n_=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},i_=function(e,t){var n=e._targets,i,s,a;for(i in t)for(s=n.length;s--;)a=e._ptLookup[s][i],a&&(a=a.d)&&(a._pt&&(a=n_(a,i)),a&&a.modifier&&a.modifier(t[i],e,n[s],i))},Rl=function(e,t){return{name:e,headless:1,rawVars:1,init:function(i,s,a){a._onInit=function(o){var l,c;if(nn(s)&&(l={},Dn(s,function(u){return l[u]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}i_(o,s)}}}},Nn=tl.registerPlugin({name:"attr",init:function(e,t,n,i,s){var a,o,l;this.tween=n;for(a in t)l=e.getAttribute(a)||"",o=this.add(e,"setAttribute",(l||0)+"",t[a],i,s,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(e,t){for(var n=t._pt;n;)on?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},Rl("roundProps",wc),Rl("modifiers"),Rl("snap",Td))||tl;Gt.version=bn.version=Nn.version="3.14.2";cd=1;Vu()&&Gs();ct.Power0;ct.Power1;ct.Power2;ct.Power3;ct.Power4;ct.Linear;ct.Quad;ct.Cubic;ct.Quart;ct.Quint;ct.Strong;ct.Elastic;ct.Back;ct.SteppedEase;ct.Bounce;ct.Sine;ct.Expo;ct.Circ;/*!
 * CSSPlugin 3.14.2
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Df,dr,Ds,Qu,Gr,Lf,ef,r_=function(){return typeof window<"u"},Qi={},Nr=180/Math.PI,Ls=Math.PI/180,ls=Math.atan2,If=1e8,tf=/([A-Z])/g,s_=/(left|right|width|margin|padding|x)/i,a_=/[\s,\(]\S/,Ri={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Pc=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},o_=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},l_=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},c_=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},u_=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},Xd=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},Yd=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},f_=function(e,t,n){return e.style[t]=n},h_=function(e,t,n){return e.style.setProperty(t,n)},d_=function(e,t,n){return e._gsap[t]=n},p_=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},m_=function(e,t,n,i,s){var a=e._gsap;a.scaleX=a.scaleY=n,a.renderTransform(s,a)},__=function(e,t,n,i,s){var a=e._gsap;a[t]=n,a.renderTransform(s,a)},Dt="transform",In=Dt+"Origin",g_=function r(e,t){var n=this,i=this.target,s=i.style,a=i._gsap;if(e in Qi&&s){if(this.tfm=this.tfm||{},e!=="transform")e=Ri[e]||e,~e.indexOf(",")?e.split(",").forEach(function(o){return n.tfm[o]=Xi(i,o)}):this.tfm[e]=a.x?a[e]:Xi(i,e),e===In&&(this.tfm.zOrigin=a.zOrigin);else return Ri.transform.split(",").forEach(function(o){return r.call(n,o,t)});if(this.props.indexOf(Dt)>=0)return;a.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(In,t,"")),e=Dt}(s||t)&&this.props.push(e,t,s[e])},qd=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},v_=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,s,a;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(tf,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)i[a]=this.tfm[a];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=ef(),(!s||!s.isStart)&&!n[Dt]&&(qd(n),i.zOrigin&&n[In]&&(n[In]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},$d=function(e,t){var n={target:e,props:[],revert:v_,save:g_};return e._gsap||Nn.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(i){return n.save(i)}),n},Kd,Dc=function(e,t){var n=dr.createElementNS?dr.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):dr.createElement(e);return n&&n.style?n:dr.createElement(e)},qn=function r(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(tf,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&r(e,Hs(t)||t,1)||""},Uf="O,Moz,ms,Ms,Webkit".split(","),Hs=function(e,t,n){var i=t||Gr,s=i.style,a=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);a--&&!(Uf[a]+e in s););return a<0?null:(a===3?"ms":a>=0?Uf[a]:"")+e},Lc=function(){r_()&&window.document&&(Df=window,dr=Df.document,Ds=dr.documentElement,Gr=Dc("div")||{style:{}},Dc("div"),Dt=Hs(Dt),In=Dt+"Origin",Gr.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Kd=!!Hs("perspective"),ef=Nn.core.reverting,Qu=1)},Ff=function(e){var t=e.ownerSVGElement,n=Dc("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=e.cloneNode(!0),s;i.style.display="block",n.appendChild(i),Ds.appendChild(n);try{s=i.getBBox()}catch{}return n.removeChild(i),Ds.removeChild(n),s},Nf=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},Zd=function(e){var t,n;try{t=e.getBBox()}catch{t=Ff(e),n=1}return t&&(t.width||t.height)||n||(t=Ff(e)),t&&!t.width&&!t.x&&!t.y?{x:+Nf(e,["x","cx","x1"])||0,y:+Nf(e,["y","cy","y1"])||0,width:0,height:0}:t},jd=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&Zd(e))},yr=function(e,t){if(t){var n=e.style,i;t in Qi&&t!==In&&(t=Dt),n.removeProperty?(i=t.substr(0,2),(i==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(i==="--"?t:t.replace(tf,"-$1").toLowerCase())):n.removeAttribute(t)}},pr=function(e,t,n,i,s,a){var o=new Ln(e._pt,t,n,0,1,a?Yd:Xd);return e._pt=o,o.b=i,o.e=s,e._props.push(n),o},Of={deg:1,rad:1,turn:1},x_={grid:1,flex:1},Er=function r(e,t,n,i){var s=parseFloat(n)||0,a=(n+"").trim().substr((s+"").length)||"px",o=Gr.style,l=s_.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),d=100,f=i==="px",h=i==="%",_,g,p,m;if(i===a||!s||Of[i]||Of[a])return s;if(a!=="px"&&!f&&(s=r(e,t,n,"px")),m=e.getCTM&&jd(e),(h||a==="%")&&(Qi[t]||~t.indexOf("adius")))return _=m?e.getBBox()[l?"width":"height"]:e[u],Ot(h?s/_*d:s/100*_);if(o[l?"width":"height"]=d+(f?a:i),g=i!=="rem"&&~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,m&&(g=(e.ownerSVGElement||{}).parentNode),(!g||g===dr||!g.appendChild)&&(g=dr.body),p=g._gsap,p&&h&&p.width&&l&&p.time===Wn.time&&!p.uncache)return Ot(s/p.width*d);if(h&&(t==="height"||t==="width")){var S=e.style[t];e.style[t]=d+i,_=e[u],S?e.style[t]=S:yr(e,t)}else(h||a==="%")&&!x_[qn(g,"display")]&&(o.position=qn(e,"position")),g===e&&(o.position="static"),g.appendChild(Gr),_=Gr[u],g.removeChild(Gr),o.position="absolute";return l&&h&&(p=Yr(g),p.time=Wn.time,p.width=g[u]),Ot(f?_*s/d:_&&s?d/_*s:0)},Xi=function(e,t,n,i){var s;return Qu||Lc(),t in Ri&&t!=="transform"&&(t=Ri[t],~t.indexOf(",")&&(t=t.split(",")[0])),Qi[t]&&t!=="transform"?(s=za(e,i),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:il(qn(e,In))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=nl[t]&&nl[t](e,t,n)||qn(e,t)||dd(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?Er(e,t,s,n)+n:s},S_=function(e,t,n,i){if(!n||n==="none"){var s=Hs(t,e,1),a=s&&qn(e,s,1);a&&a!==n?(t=s,n=a):t==="borderColor"&&(n=qn(e,"borderTopColor"))}var o=new Ln(this._pt,e.style,t,0,1,Gd),l=0,c=0,u,d,f,h,_,g,p,m,S,T,y,A;if(o.b=n,o.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=qn(e,i.substring(4,i.indexOf(")")))),i==="auto"&&(g=e.style[t],e.style[t]=i,i=qn(e,t)||i,g?e.style[t]=g:yr(e,t)),u=[n,i],Ld(u),n=u[0],i=u[1],f=n.match(ws)||[],A=i.match(ws)||[],A.length){for(;d=ws.exec(i);)p=d[0],S=i.substring(l,d.index),_?_=(_+1)%5:(S.substr(-5)==="rgba("||S.substr(-5)==="hsla(")&&(_=1),p!==(g=f[c++]||"")&&(h=parseFloat(g)||0,y=g.substr((h+"").length),p.charAt(1)==="="&&(p=Ps(h,p)+y),m=parseFloat(p),T=p.substr((m+"").length),l=ws.lastIndex-T.length,T||(T=T||Kn.units[t]||y,l===i.length&&(i+=T,o.e+=T)),y!==T&&(h=Er(e,t,g,T)||0),o._pt={_next:o._pt,p:S||c===1?S:",",s:h,c:m-h,m:_&&_<4||t==="zIndex"?Math.round:0});o.c=l<i.length?i.substring(l,i.length):""}else o.r=t==="display"&&i==="none"?Yd:Xd;return ld.test(i)&&(o.e=0),this._pt=o,o},Bf={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},M_=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=Bf[n]||n,t[1]=Bf[i]||i,t.join(" ")},y_=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,s=t.u,a=n._gsap,o,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)o=s[c],Qi[o]&&(l=1,o=o==="transformOrigin"?In:Dt),yr(n,o);l&&(yr(n,Dt),a&&(a.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",za(n,1),a.uncache=1,qd(i)))}},nl={clearProps:function(e,t,n,i,s){if(s.data!=="isFromStart"){var a=e._pt=new Ln(e._pt,t,n,0,0,y_);return a.u=i,a.pr=-10,a.tween=s,e._props.push(n),1}}},Ba=[1,0,0,1,0,0],Jd={},Qd=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},zf=function(e){var t=qn(e,Dt);return Qd(t)?Ba:t.substr(7).match(od).map(Ot)},nf=function(e,t){var n=e._gsap||Yr(e),i=e.style,s=zf(e),a,o,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Ba:s):(s===Ba&&!e.offsetParent&&e!==Ds&&!n.svg&&(l=i.display,i.display="block",a=e.parentNode,(!a||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,o=e.nextElementSibling,Ds.appendChild(e)),s=zf(e),l?i.display=l:yr(e,"display"),c&&(o?a.insertBefore(e,o):a?a.appendChild(e):Ds.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Ic=function(e,t,n,i,s,a){var o=e._gsap,l=s||nf(e,!0),c=o.xOrigin||0,u=o.yOrigin||0,d=o.xOffset||0,f=o.yOffset||0,h=l[0],_=l[1],g=l[2],p=l[3],m=l[4],S=l[5],T=t.split(" "),y=parseFloat(T[0])||0,A=parseFloat(T[1])||0,w,b,v,M;n?l!==Ba&&(b=h*p-_*g)&&(v=y*(p/b)+A*(-g/b)+(g*S-p*m)/b,M=y*(-_/b)+A*(h/b)-(h*S-_*m)/b,y=v,A=M):(w=Zd(e),y=w.x+(~T[0].indexOf("%")?y/100*w.width:y),A=w.y+(~(T[1]||T[0]).indexOf("%")?A/100*w.height:A)),i||i!==!1&&o.smooth?(m=y-c,S=A-u,o.xOffset=d+(m*h+S*g)-m,o.yOffset=f+(m*_+S*p)-S):o.xOffset=o.yOffset=0,o.xOrigin=y,o.yOrigin=A,o.smooth=!!i,o.origin=t,o.originIsAbsolute=!!n,e.style[In]="0px 0px",a&&(pr(a,o,"xOrigin",c,y),pr(a,o,"yOrigin",u,A),pr(a,o,"xOffset",d,o.xOffset),pr(a,o,"yOffset",f,o.yOffset)),e.setAttribute("data-svg-origin",y+" "+A)},za=function(e,t){var n=e._gsap||new Nd(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,s=n.scaleX<0,a="px",o="deg",l=getComputedStyle(e),c=qn(e,In)||"0",u,d,f,h,_,g,p,m,S,T,y,A,w,b,v,M,F,R,I,z,H,k,G,U,Q,ee,D,ce,fe,Fe,He,Ke;return u=d=f=g=p=m=S=T=y=0,h=_=1,n.svg=!!(e.getCTM&&jd(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[Dt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Dt]!=="none"?l[Dt]:"")),i.scale=i.rotate=i.translate="none"),b=nf(e,n.svg),n.svg&&(n.uncache?(Q=e.getBBox(),c=n.xOrigin-Q.x+"px "+(n.yOrigin-Q.y)+"px",U=""):U=!t&&e.getAttribute("data-svg-origin"),Ic(e,U||c,!!U||n.originIsAbsolute,n.smooth!==!1,b)),A=n.xOrigin||0,w=n.yOrigin||0,b!==Ba&&(R=b[0],I=b[1],z=b[2],H=b[3],u=k=b[4],d=G=b[5],b.length===6?(h=Math.sqrt(R*R+I*I),_=Math.sqrt(H*H+z*z),g=R||I?ls(I,R)*Nr:0,S=z||H?ls(z,H)*Nr+g:0,S&&(_*=Math.abs(Math.cos(S*Ls))),n.svg&&(u-=A-(A*R+w*z),d-=w-(A*I+w*H))):(Ke=b[6],Fe=b[7],D=b[8],ce=b[9],fe=b[10],He=b[11],u=b[12],d=b[13],f=b[14],v=ls(Ke,fe),p=v*Nr,v&&(M=Math.cos(-v),F=Math.sin(-v),U=k*M+D*F,Q=G*M+ce*F,ee=Ke*M+fe*F,D=k*-F+D*M,ce=G*-F+ce*M,fe=Ke*-F+fe*M,He=Fe*-F+He*M,k=U,G=Q,Ke=ee),v=ls(-z,fe),m=v*Nr,v&&(M=Math.cos(-v),F=Math.sin(-v),U=R*M-D*F,Q=I*M-ce*F,ee=z*M-fe*F,He=H*F+He*M,R=U,I=Q,z=ee),v=ls(I,R),g=v*Nr,v&&(M=Math.cos(v),F=Math.sin(v),U=R*M+I*F,Q=k*M+G*F,I=I*M-R*F,G=G*M-k*F,R=U,k=Q),p&&Math.abs(p)+Math.abs(g)>359.9&&(p=g=0,m=180-m),h=Ot(Math.sqrt(R*R+I*I+z*z)),_=Ot(Math.sqrt(G*G+Ke*Ke)),v=ls(k,G),S=Math.abs(v)>2e-4?v*Nr:0,y=He?1/(He<0?-He:He):0),n.svg&&(U=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!Qd(qn(e,Dt)),U&&e.setAttribute("transform",U))),Math.abs(S)>90&&Math.abs(S)<270&&(s?(h*=-1,S+=g<=0?180:-180,g+=g<=0?180:-180):(_*=-1,S+=S<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+a,n.y=d-((n.yPercent=d&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-d)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+a,n.z=f+a,n.scaleX=Ot(h),n.scaleY=Ot(_),n.rotation=Ot(g)+o,n.rotationX=Ot(p)+o,n.rotationY=Ot(m)+o,n.skewX=S+o,n.skewY=T+o,n.transformPerspective=y+a,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(i[In]=il(c)),n.xOffset=n.yOffset=0,n.force3D=Kn.force3D,n.renderTransform=n.svg?T_:Kd?ep:E_,n.uncache=0,n},il=function(e){return(e=e.split(" "))[0]+" "+e[1]},Pl=function(e,t,n){var i=mn(t);return Ot(parseFloat(t)+parseFloat(Er(e,"x",n+"px",i)))+i},E_=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,ep(e,t)},Cr="0deg",Qs="0px",Rr=") ",ep=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.z,c=n.rotation,u=n.rotationY,d=n.rotationX,f=n.skewX,h=n.skewY,_=n.scaleX,g=n.scaleY,p=n.transformPerspective,m=n.force3D,S=n.target,T=n.zOrigin,y="",A=m==="auto"&&e&&e!==1||m===!0;if(T&&(d!==Cr||u!==Cr)){var w=parseFloat(u)*Ls,b=Math.sin(w),v=Math.cos(w),M;w=parseFloat(d)*Ls,M=Math.cos(w),a=Pl(S,a,b*M*-T),o=Pl(S,o,-Math.sin(w)*-T),l=Pl(S,l,v*M*-T+T)}p!==Qs&&(y+="perspective("+p+Rr),(i||s)&&(y+="translate("+i+"%, "+s+"%) "),(A||a!==Qs||o!==Qs||l!==Qs)&&(y+=l!==Qs||A?"translate3d("+a+", "+o+", "+l+") ":"translate("+a+", "+o+Rr),c!==Cr&&(y+="rotate("+c+Rr),u!==Cr&&(y+="rotateY("+u+Rr),d!==Cr&&(y+="rotateX("+d+Rr),(f!==Cr||h!==Cr)&&(y+="skew("+f+", "+h+Rr),(_!==1||g!==1)&&(y+="scale("+_+", "+g+Rr),S.style[Dt]=y||"translate(0, 0)"},T_=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.rotation,c=n.skewX,u=n.skewY,d=n.scaleX,f=n.scaleY,h=n.target,_=n.xOrigin,g=n.yOrigin,p=n.xOffset,m=n.yOffset,S=n.forceCSS,T=parseFloat(a),y=parseFloat(o),A,w,b,v,M;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=Ls,c*=Ls,A=Math.cos(l)*d,w=Math.sin(l)*d,b=Math.sin(l-c)*-f,v=Math.cos(l-c)*f,c&&(u*=Ls,M=Math.tan(c-u),M=Math.sqrt(1+M*M),b*=M,v*=M,u&&(M=Math.tan(u),M=Math.sqrt(1+M*M),A*=M,w*=M)),A=Ot(A),w=Ot(w),b=Ot(b),v=Ot(v)):(A=d,v=f,w=b=0),(T&&!~(a+"").indexOf("px")||y&&!~(o+"").indexOf("px"))&&(T=Er(h,"x",a,"px"),y=Er(h,"y",o,"px")),(_||g||p||m)&&(T=Ot(T+_-(_*A+g*b)+p),y=Ot(y+g-(_*w+g*v)+m)),(i||s)&&(M=h.getBBox(),T=Ot(T+i/100*M.width),y=Ot(y+s/100*M.height)),M="matrix("+A+","+w+","+b+","+v+","+T+","+y+")",h.setAttribute("transform",M),S&&(h.style[Dt]=M)},b_=function(e,t,n,i,s){var a=360,o=nn(s),l=parseFloat(s)*(o&&~s.indexOf("rad")?Nr:1),c=l-i,u=i+c+"deg",d,f;return o&&(d=s.split("_")[1],d==="short"&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-a)),d==="cw"&&c<0?c=(c+a*If)%a-~~(c/a)*a:d==="ccw"&&c>0&&(c=(c-a*If)%a-~~(c/a)*a)),e._pt=f=new Ln(e._pt,t,n,i,c,o_),f.e=u,f.u="deg",e._props.push(n),f},kf=function(e,t){for(var n in t)e[n]=t[n];return e},A_=function(e,t,n){var i=kf({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",a=n.style,o,l,c,u,d,f,h,_;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),a[Dt]=t,o=za(n,1),yr(n,Dt),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Dt],a[Dt]=t,o=za(n,1),a[Dt]=c);for(l in Qi)c=i[l],u=o[l],c!==u&&s.indexOf(l)<0&&(h=mn(c),_=mn(u),d=h!==_?Er(n,l,c,_):parseFloat(c),f=parseFloat(u),e._pt=new Ln(e._pt,o,l,d,f-d,Pc),e._pt.u=_||0,e._props.push(l));kf(o,i)};Dn("padding,margin,Width,Radius",function(r,e){var t="Top",n="Right",i="Bottom",s="Left",a=(e<3?[t,n,i,s]:[t+s,t+n,i+n,i+s]).map(function(o){return e<2?r+o:"border"+o+r});nl[e>1?"border"+r:r]=function(o,l,c,u,d){var f,h;if(arguments.length<4)return f=a.map(function(_){return Xi(o,_,c)}),h=f.join(" "),h.split(f[0]).length===5?f[0]:h;f=(u+"").split(" "),h={},a.forEach(function(_,g){return h[_]=f[g]=f[g]||f[(g-1)/2|0]}),o.init(l,h,d)}});var tp={name:"css",register:Lc,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,s){var a=this._props,o=e.style,l=n.vars.startAt,c,u,d,f,h,_,g,p,m,S,T,y,A,w,b,v,M;Qu||Lc(),this.styles=this.styles||$d(e),v=this.styles.props,this.tween=n;for(g in t)if(g!=="autoRound"&&(u=t[g],!(Gn[g]&&Od(g,t,n,i,e,s)))){if(h=typeof u,_=nl[g],h==="function"&&(u=u.call(n,i,e,s),h=typeof u),h==="string"&&~u.indexOf("random(")&&(u=Fa(u)),_)_(this,e,g,u,n)&&(b=1);else if(g.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(g)+"").trim(),u+="",xr.lastIndex=0,xr.test(c)||(p=mn(c),m=mn(u),m?p!==m&&(c=Er(e,g,c,m)+m):p&&(u+=p)),this.add(o,"setProperty",c,u,i,s,0,0,g),a.push(g),v.push(g,0,o[g]);else if(h!=="undefined"){if(l&&g in l?(c=typeof l[g]=="function"?l[g].call(n,i,e,s):l[g],nn(c)&&~c.indexOf("random(")&&(c=Fa(c)),mn(c+"")||c==="auto"||(c+=Kn.units[g]||mn(Xi(e,g))||""),(c+"").charAt(1)==="="&&(c=Xi(e,g))):c=Xi(e,g),f=parseFloat(c),S=h==="string"&&u.charAt(1)==="="&&u.substr(0,2),S&&(u=u.substr(2)),d=parseFloat(u),g in Ri&&(g==="autoAlpha"&&(f===1&&Xi(e,"visibility")==="hidden"&&d&&(f=0),v.push("visibility",0,o.visibility),pr(this,o,"visibility",f?"inherit":"hidden",d?"inherit":"hidden",!d)),g!=="scale"&&g!=="transform"&&(g=Ri[g],~g.indexOf(",")&&(g=g.split(",")[0]))),T=g in Qi,T){if(this.styles.save(g),M=u,h==="string"&&u.substring(0,6)==="var(--"){if(u=qn(e,u.substring(4,u.indexOf(")"))),u.substring(0,5)==="calc("){var F=e.style.perspective;e.style.perspective=u,u=qn(e,"perspective"),F?e.style.perspective=F:yr(e,"perspective")}d=parseFloat(u)}if(y||(A=e._gsap,A.renderTransform&&!t.parseTransform||za(e,t.parseTransform),w=t.smoothOrigin!==!1&&A.smooth,y=this._pt=new Ln(this._pt,o,Dt,0,1,A.renderTransform,A,0,-1),y.dep=1),g==="scale")this._pt=new Ln(this._pt,A,"scaleY",A.scaleY,(S?Ps(A.scaleY,S+d):d)-A.scaleY||0,Pc),this._pt.u=0,a.push("scaleY",g),g+="X";else if(g==="transformOrigin"){v.push(In,0,o[In]),u=M_(u),A.svg?Ic(e,u,0,w,0,this):(m=parseFloat(u.split(" ")[2])||0,m!==A.zOrigin&&pr(this,A,"zOrigin",A.zOrigin,m),pr(this,o,g,il(c),il(u)));continue}else if(g==="svgOrigin"){Ic(e,u,1,w,0,this);continue}else if(g in Jd){b_(this,A,g,f,S?Ps(f,S+u):u);continue}else if(g==="smoothOrigin"){pr(this,A,"smooth",A.smooth,u);continue}else if(g==="force3D"){A[g]=u;continue}else if(g==="transform"){A_(this,u,e);continue}}else g in o||(g=Hs(g)||g);if(T||(d||d===0)&&(f||f===0)&&!a_.test(u)&&g in o)p=(c+"").substr((f+"").length),d||(d=0),m=mn(u)||(g in Kn.units?Kn.units[g]:p),p!==m&&(f=Er(e,g,c,m)),this._pt=new Ln(this._pt,T?A:o,g,f,(S?Ps(f,S+d):d)-f,!T&&(m==="px"||g==="zIndex")&&t.autoRound!==!1?u_:Pc),this._pt.u=m||0,T&&M!==u?(this._pt.b=c,this._pt.e=M,this._pt.r=c_):p!==m&&m!=="%"&&(this._pt.b=c,this._pt.r=l_);else if(g in o)S_.call(this,e,g,c,S?S+u:u);else if(g in e)this.add(e,g,c||e[g],S?S+u:u,i,s);else if(g!=="parseTransform"){Hu(g,u);continue}T||(g in o?v.push(g,0,o[g]):typeof e[g]=="function"?v.push(g,2,e[g]()):v.push(g,1,c||e[g])),a.push(g)}}b&&Hd(this)},render:function(e,t){if(t.tween._time||!ef())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:Xi,aliases:Ri,getSetter:function(e,t,n){var i=Ri[t];return i&&i.indexOf(",")<0&&(t=i),t in Qi&&t!==In&&(e._gsap.x||Xi(e,"x"))?n&&Lf===n?t==="scale"?p_:d_:(Lf=n||{})&&(t==="scale"?m_:__):e.style&&!ku(e.style[t])?f_:~t.indexOf("-")?h_:ju(e,t)},core:{_removeProperty:yr,_getMatrix:nf}};Nn.utils.checkPrefix=Hs;Nn.core.getStyleSaver=$d;(function(r,e,t,n){var i=Dn(r+","+e+","+t,function(s){Qi[s]=1});Dn(e,function(s){Kn.units[s]="deg",Jd[s]=1}),Ri[i[13]]=r+","+e,Dn(n,function(s){var a=s.split(":");Ri[a[1]]=i[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Dn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){Kn.units[r]="px"});Nn.registerPlugin(tp);var gn=Nn.registerPlugin(tp)||Nn;gn.core.Tween;function w_(r,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function C_(r,e,t){return e&&w_(r.prototype,e),r}/*!
 * Observer 3.14.2
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var sn,zo,Xn,mr,_r,Is,np,Or,Ea,ip,$i,pi,rp,sp=function(){return sn||typeof window<"u"&&(sn=window.gsap)&&sn.registerPlugin&&sn},ap=1,Rs=[],st=[],Li=[],Ta=Date.now,Uc=function(e,t){return t},R_=function(){var e=Ea.core,t=e.bridge||{},n=e._scrollers,i=e._proxies;n.push.apply(n,st),i.push.apply(i,Li),st=n,Li=i,Uc=function(a,o){return t[a](o)}},Sr=function(e,t){return~Li.indexOf(e)&&Li[Li.indexOf(e)+1][t]},ba=function(e){return!!~ip.indexOf(e)},Sn=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:i!==!1,capture:!!s})},xn=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},Ja="scrollLeft",Qa="scrollTop",Fc=function(){return $i&&$i.isPressed||st.cache++},rl=function(e,t){var n=function i(s){if(s||s===0){ap&&(Xn.history.scrollRestoration="manual");var a=$i&&$i.isPressed;s=i.v=Math.round(s)||($i&&$i.iOS?1:0),e(s),i.cacheID=st.cache,a&&Uc("ss",s)}else(t||st.cache!==i.cacheID||Uc("ref"))&&(i.cacheID=st.cache,i.v=e());return i.v+i.offset};return n.offset=0,e&&n},An={s:Ja,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:rl(function(r){return arguments.length?Xn.scrollTo(r,$t.sc()):Xn.pageXOffset||mr[Ja]||_r[Ja]||Is[Ja]||0})},$t={s:Qa,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:An,sc:rl(function(r){return arguments.length?Xn.scrollTo(An.sc(),r):Xn.pageYOffset||mr[Qa]||_r[Qa]||Is[Qa]||0})},Rn=function(e,t){return(t&&t._ctx&&t._ctx.selector||sn.utils.toArray)(e)[0]||(typeof e=="string"&&sn.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},P_=function(e,t){for(var n=t.length;n--;)if(t[n]===e||t[n].contains(e))return!0;return!1},Tr=function(e,t){var n=t.s,i=t.sc;ba(e)&&(e=mr.scrollingElement||_r);var s=st.indexOf(e),a=i===$t.sc?1:2;!~s&&(s=st.push(e)-1),st[s+a]||Sn(e,"scroll",Fc);var o=st[s+a],l=o||(st[s+a]=rl(Sr(e,n),!0)||(ba(e)?i:rl(function(c){return arguments.length?e[n]=c:e[n]})));return l.target=e,o||(l.smooth=sn.getProperty(e,"scrollBehavior")==="smooth"),l},Nc=function(e,t,n){var i=e,s=e,a=Ta(),o=a,l=t||50,c=Math.max(500,l*3),u=function(_,g){var p=Ta();g||p-a>l?(s=i,i=_,o=a,a=p):n?i+=_:i=s+(_-s)/(p-o)*(a-o)},d=function(){s=i=n?0:i,o=a=0},f=function(_){var g=o,p=s,m=Ta();return(_||_===0)&&_!==i&&u(_),a===o||m-o>c?0:(i+(n?p:-p))/((n?m:a)-g)*1e3};return{update:u,reset:d,getVelocity:f}},ea=function(e,t){return t&&!e._gsapAllow&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},Vf=function(e){var t=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(n)?t:n},op=function(){Ea=sn.core.globals().ScrollTrigger,Ea&&Ea.core&&R_()},lp=function(e){return sn=e||sp(),!zo&&sn&&typeof document<"u"&&document.body&&(Xn=window,mr=document,_r=mr.documentElement,Is=mr.body,ip=[Xn,mr,_r,Is],sn.utils.clamp,rp=sn.core.context||function(){},Or="onpointerenter"in Is?"pointer":"mouse",np=Bt.isTouch=Xn.matchMedia&&Xn.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in Xn||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,pi=Bt.eventTypes=("ontouchstart"in _r?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in _r?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return ap=0},500),op(),zo=1),zo};An.op=$t;st.cache=0;var Bt=function(){function r(t){this.init(t)}var e=r.prototype;return e.init=function(n){zo||lp(sn)||console.warn("Please gsap.registerPlugin(Observer)"),Ea||op();var i=n.tolerance,s=n.dragMinimum,a=n.type,o=n.target,l=n.lineHeight,c=n.debounce,u=n.preventDefault,d=n.onStop,f=n.onStopDelay,h=n.ignore,_=n.wheelSpeed,g=n.event,p=n.onDragStart,m=n.onDragEnd,S=n.onDrag,T=n.onPress,y=n.onRelease,A=n.onRight,w=n.onLeft,b=n.onUp,v=n.onDown,M=n.onChangeX,F=n.onChangeY,R=n.onChange,I=n.onToggleX,z=n.onToggleY,H=n.onHover,k=n.onHoverEnd,G=n.onMove,U=n.ignoreCheck,Q=n.isNormalizer,ee=n.onGestureStart,D=n.onGestureEnd,ce=n.onWheel,fe=n.onEnable,Fe=n.onDisable,He=n.onClick,Ke=n.scrollSpeed,K=n.capture,ne=n.allowClicks,re=n.lockAxis,Le=n.onLockAxis;this.target=o=Rn(o)||_r,this.vars=n,h&&(h=sn.utils.toArray(h)),i=i||1e-9,s=s||0,_=_||1,Ke=Ke||1,a=a||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(Xn.getComputedStyle(Is).lineHeight)||22);var Ie,De,ot,Ee,Me,V,te,O=this,P=0,We=0,Ge=n.passive||!u&&n.passive!==!1,Ve=Tr(o,An),ye=Tr(o,$t),C=Ve(),x=ye(),N=~a.indexOf("touch")&&!~a.indexOf("pointer")&&pi[0]==="pointerdown",j=ba(o),J=o.ownerDocument||mr,$=[0,0,0],xe=[0,0,0],le=0,Ue=function(){return le=Ta()},Te=function(Ne,Qe){return(O.event=Ne)&&h&&P_(Ne.target,h)||Qe&&N&&Ne.pointerType!=="touch"||U&&U(Ne,Qe)},se=function(){O._vx.reset(),O._vy.reset(),De.pause(),d&&d(O)},oe=function(){var Ne=O.deltaX=Vf($),Qe=O.deltaY=Vf(xe),ge=Math.abs(Ne)>=i,Ye=Math.abs(Qe)>=i;R&&(ge||Ye)&&R(O,Ne,Qe,$,xe),ge&&(A&&O.deltaX>0&&A(O),w&&O.deltaX<0&&w(O),M&&M(O),I&&O.deltaX<0!=P<0&&I(O),P=O.deltaX,$[0]=$[1]=$[2]=0),Ye&&(v&&O.deltaY>0&&v(O),b&&O.deltaY<0&&b(O),F&&F(O),z&&O.deltaY<0!=We<0&&z(O),We=O.deltaY,xe[0]=xe[1]=xe[2]=0),(Ee||ot)&&(G&&G(O),ot&&(p&&ot===1&&p(O),S&&S(O),ot=0),Ee=!1),V&&!(V=!1)&&Le&&Le(O),Me&&(ce(O),Me=!1),Ie=0},be=function(Ne,Qe,ge){$[ge]+=Ne,xe[ge]+=Qe,O._vx.update(Ne),O._vy.update(Qe),c?Ie||(Ie=requestAnimationFrame(oe)):oe()},we=function(Ne,Qe){re&&!te&&(O.axis=te=Math.abs(Ne)>Math.abs(Qe)?"x":"y",V=!0),te!=="y"&&($[2]+=Ne,O._vx.update(Ne,!0)),te!=="x"&&(xe[2]+=Qe,O._vy.update(Qe,!0)),c?Ie||(Ie=requestAnimationFrame(oe)):oe()},pe=function(Ne){if(!Te(Ne,1)){Ne=ea(Ne,u);var Qe=Ne.clientX,ge=Ne.clientY,Ye=Qe-O.x,ke=ge-O.y,$e=O.isDragging;O.x=Qe,O.y=ge,($e||(Ye||ke)&&(Math.abs(O.startX-Qe)>=s||Math.abs(O.startY-ge)>=s))&&(ot||(ot=$e?2:1),$e||(O.isDragging=!0),we(Ye,ke))}},Xe=O.onPress=function(Se){Te(Se,1)||Se&&Se.button||(O.axis=te=null,De.pause(),O.isPressed=!0,Se=ea(Se),P=We=0,O.startX=O.x=Se.clientX,O.startY=O.y=Se.clientY,O._vx.reset(),O._vy.reset(),Sn(Q?o:J,pi[1],pe,Ge,!0),O.deltaX=O.deltaY=0,T&&T(O))},L=O.onRelease=function(Se){if(!Te(Se,1)){xn(Q?o:J,pi[1],pe,!0);var Ne=!isNaN(O.y-O.startY),Qe=O.isDragging,ge=Qe&&(Math.abs(O.x-O.startX)>3||Math.abs(O.y-O.startY)>3),Ye=ea(Se);!ge&&Ne&&(O._vx.reset(),O._vy.reset(),u&&ne&&sn.delayedCall(.08,function(){if(Ta()-le>300&&!Se.defaultPrevented){if(Se.target.click)Se.target.click();else if(J.createEvent){var ke=J.createEvent("MouseEvents");ke.initMouseEvent("click",!0,!0,Xn,1,Ye.screenX,Ye.screenY,Ye.clientX,Ye.clientY,!1,!1,!1,!1,0,null),Se.target.dispatchEvent(ke)}}})),O.isDragging=O.isGesturing=O.isPressed=!1,d&&Qe&&!Q&&De.restart(!0),ot&&oe(),m&&Qe&&m(O),y&&y(O,ge)}},ue=function(Ne){return Ne.touches&&Ne.touches.length>1&&(O.isGesturing=!0)&&ee(Ne,O.isDragging)},ae=function(){return(O.isGesturing=!1)||D(O)},me=function(Ne){if(!Te(Ne)){var Qe=Ve(),ge=ye();be((Qe-C)*Ke,(ge-x)*Ke,1),C=Qe,x=ge,d&&De.restart(!0)}},ie=function(Ne){if(!Te(Ne)){Ne=ea(Ne,u),ce&&(Me=!0);var Qe=(Ne.deltaMode===1?l:Ne.deltaMode===2?Xn.innerHeight:1)*_;be(Ne.deltaX*Qe,Ne.deltaY*Qe,0),d&&!Q&&De.restart(!0)}},Z=function(Ne){if(!Te(Ne)){var Qe=Ne.clientX,ge=Ne.clientY,Ye=Qe-O.x,ke=ge-O.y;O.x=Qe,O.y=ge,Ee=!0,d&&De.restart(!0),(Ye||ke)&&we(Ye,ke)}},Ae=function(Ne){O.event=Ne,H(O)},ze=function(Ne){O.event=Ne,k(O)},ft=function(Ne){return Te(Ne)||ea(Ne,u)&&He(O)};De=O._dc=sn.delayedCall(f||.25,se).pause(),O.deltaX=O.deltaY=0,O._vx=Nc(0,50,!0),O._vy=Nc(0,50,!0),O.scrollX=Ve,O.scrollY=ye,O.isDragging=O.isGesturing=O.isPressed=!1,rp(this),O.enable=function(Se){return O.isEnabled||(Sn(j?J:o,"scroll",Fc),a.indexOf("scroll")>=0&&Sn(j?J:o,"scroll",me,Ge,K),a.indexOf("wheel")>=0&&Sn(o,"wheel",ie,Ge,K),(a.indexOf("touch")>=0&&np||a.indexOf("pointer")>=0)&&(Sn(o,pi[0],Xe,Ge,K),Sn(J,pi[2],L),Sn(J,pi[3],L),ne&&Sn(o,"click",Ue,!0,!0),He&&Sn(o,"click",ft),ee&&Sn(J,"gesturestart",ue),D&&Sn(J,"gestureend",ae),H&&Sn(o,Or+"enter",Ae),k&&Sn(o,Or+"leave",ze),G&&Sn(o,Or+"move",Z)),O.isEnabled=!0,O.isDragging=O.isGesturing=O.isPressed=Ee=ot=!1,O._vx.reset(),O._vy.reset(),C=Ve(),x=ye(),Se&&Se.type&&Xe(Se),fe&&fe(O)),O},O.disable=function(){O.isEnabled&&(Rs.filter(function(Se){return Se!==O&&ba(Se.target)}).length||xn(j?J:o,"scroll",Fc),O.isPressed&&(O._vx.reset(),O._vy.reset(),xn(Q?o:J,pi[1],pe,!0)),xn(j?J:o,"scroll",me,K),xn(o,"wheel",ie,K),xn(o,pi[0],Xe,K),xn(J,pi[2],L),xn(J,pi[3],L),xn(o,"click",Ue,!0),xn(o,"click",ft),xn(J,"gesturestart",ue),xn(J,"gestureend",ae),xn(o,Or+"enter",Ae),xn(o,Or+"leave",ze),xn(o,Or+"move",Z),O.isEnabled=O.isPressed=O.isDragging=!1,Fe&&Fe(O))},O.kill=O.revert=function(){O.disable();var Se=Rs.indexOf(O);Se>=0&&Rs.splice(Se,1),$i===O&&($i=0)},Rs.push(O),Q&&ba(o)&&($i=O),O.enable(g)},C_(r,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),r}();Bt.version="3.14.2";Bt.create=function(r){return new Bt(r)};Bt.register=lp;Bt.getAll=function(){return Rs.slice()};Bt.getById=function(r){return Rs.filter(function(e){return e.vars.id===r})[0]};sp()&&sn.registerPlugin(Bt);/*!
 * ScrollTrigger 3.14.2
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Pe,bs,rt,bt,Hn,_t,rf,sl,ka,Aa,ha,eo,dn,vl,Oc,En,Gf,Hf,As,cp,Dl,up,yn,Bc,fp,hp,ur,zc,sf,Us,af,wa,kc,Ll,to=1,pn=Date.now,Il=pn(),li=0,da=0,Wf=function(e,t,n){var i=Vn(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return n["_"+t+"Clamp"]=i,i?e.substr(6,e.length-7):e},Xf=function(e,t){return t&&(!Vn(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},D_=function r(){return da&&requestAnimationFrame(r)},Yf=function(){return vl=1},qf=function(){return vl=0},Ai=function(e){return e},pa=function(e){return Math.round(e*1e5)/1e5||0},dp=function(){return typeof window<"u"},pp=function(){return Pe||dp()&&(Pe=window.gsap)&&Pe.registerPlugin&&Pe},es=function(e){return!!~rf.indexOf(e)},mp=function(e){return(e==="Height"?af:rt["inner"+e])||Hn["client"+e]||_t["client"+e]},_p=function(e){return Sr(e,"getBoundingClientRect")||(es(e)?function(){return Wo.width=rt.innerWidth,Wo.height=af,Wo}:function(){return Yi(e)})},L_=function(e,t,n){var i=n.d,s=n.d2,a=n.a;return(a=Sr(e,"getBoundingClientRect"))?function(){return a()[i]}:function(){return(t?mp(s):e["client"+s])||0}},I_=function(e,t){return!t||~Li.indexOf(e)?_p(e):function(){return Wo}},Pi=function(e,t){var n=t.s,i=t.d2,s=t.d,a=t.a;return Math.max(0,(n="scroll"+i)&&(a=Sr(e,n))?a()-_p(e)()[s]:es(e)?(Hn[n]||_t[n])-mp(i):e[n]-e["offset"+i])},no=function(e,t){for(var n=0;n<As.length;n+=3)(!t||~t.indexOf(As[n+1]))&&e(As[n],As[n+1],As[n+2])},Vn=function(e){return typeof e=="string"},_n=function(e){return typeof e=="function"},ma=function(e){return typeof e=="number"},Br=function(e){return typeof e=="object"},ta=function(e,t,n){return e&&e.progress(t?0:1)&&n&&e.pause()},Ul=function(e,t){if(e.enabled){var n=e._ctx?e._ctx.add(function(){return t(e)}):t(e);n&&n.totalTime&&(e.callbackAnimation=n)}},cs=Math.abs,gp="left",vp="top",of="right",lf="bottom",Zr="width",jr="height",Ca="Right",Ra="Left",Pa="Top",Da="Bottom",Vt="padding",ni="margin",Ws="Width",cf="Height",qt="px",ii=function(e){return rt.getComputedStyle(e)},U_=function(e){var t=ii(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},$f=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Yi=function(e,t){var n=t&&ii(e)[Oc]!=="matrix(1, 0, 0, 1, 0, 0)"&&Pe.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=e.getBoundingClientRect();return n&&n.progress(0).kill(),i},al=function(e,t){var n=t.d2;return e["offset"+n]||e["client"+n]||0},xp=function(e){var t=[],n=e.labels,i=e.duration(),s;for(s in n)t.push(n[s]/i);return t},F_=function(e){return function(t){return Pe.utils.snap(xp(e),t)}},uf=function(e){var t=Pe.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(i,s){return i-s});return n?function(i,s,a){a===void 0&&(a=.001);var o;if(!s)return t(i);if(s>0){for(i-=a,o=0;o<n.length;o++)if(n[o]>=i)return n[o];return n[o-1]}else for(o=n.length,i+=a;o--;)if(n[o]<=i)return n[o];return n[0]}:function(i,s,a){a===void 0&&(a=.001);var o=t(i);return!s||Math.abs(o-i)<a||o-i<0==s<0?o:t(s<0?i-e:i+e)}},N_=function(e){return function(t,n){return uf(xp(e))(t,n.direction)}},io=function(e,t,n,i){return n.split(",").forEach(function(s){return e(t,s,i)})},tn=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:!i,capture:!!s})},en=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},ro=function(e,t,n){n=n&&n.wheelHandler,n&&(e(t,"wheel",n),e(t,"touchmove",n))},Kf={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},so={toggleActions:"play",anticipatePin:0},ol={top:0,left:0,center:.5,bottom:1,right:1},ko=function(e,t){if(Vn(e)){var n=e.indexOf("="),i=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf("%")>n&&(i*=t/100),e=e.substr(0,n-1)),e=i+(e in ol?ol[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},ao=function(e,t,n,i,s,a,o,l){var c=s.startColor,u=s.endColor,d=s.fontSize,f=s.indent,h=s.fontWeight,_=bt.createElement("div"),g=es(n)||Sr(n,"pinType")==="fixed",p=e.indexOf("scroller")!==-1,m=g?_t:n,S=e.indexOf("start")!==-1,T=S?c:u,y="border-color:"+T+";font-size:"+d+";color:"+T+";font-weight:"+h+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return y+="position:"+((p||l)&&g?"fixed;":"absolute;"),(p||l||!g)&&(y+=(i===$t?of:lf)+":"+(a+parseFloat(f))+"px;"),o&&(y+="box-sizing:border-box;text-align:left;width:"+o.offsetWidth+"px;"),_._isStart=S,_.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),_.style.cssText=y,_.innerText=t||t===0?e+"-"+t:e,m.children[0]?m.insertBefore(_,m.children[0]):m.appendChild(_),_._offset=_["offset"+i.op.d2],Vo(_,0,i,S),_},Vo=function(e,t,n,i){var s={display:"block"},a=n[i?"os2":"p2"],o=n[i?"p2":"os2"];e._isFlipped=i,s[n.a+"Percent"]=i?-100:0,s[n.a]=i?"1px":0,s["border"+a+Ws]=1,s["border"+o+Ws]=0,s[n.p]=t+"px",Pe.set(e,s)},it=[],Vc={},Va,Zf=function(){return pn()-li>34&&(Va||(Va=requestAnimationFrame(Ki)))},us=function(){(!yn||!yn.isPressed||yn.startX>_t.clientWidth)&&(st.cache++,yn?Va||(Va=requestAnimationFrame(Ki)):Ki(),li||ns("scrollStart"),li=pn())},Fl=function(){hp=rt.innerWidth,fp=rt.innerHeight},_a=function(e){st.cache++,(e===!0||!dn&&!up&&!bt.fullscreenElement&&!bt.webkitFullscreenElement&&(!Bc||hp!==rt.innerWidth||Math.abs(rt.innerHeight-fp)>rt.innerHeight*.25))&&sl.restart(!0)},ts={},O_=[],Sp=function r(){return en(at,"scrollEnd",r)||Hr(!0)},ns=function(e){return ts[e]&&ts[e].map(function(t){return t()})||O_},kn=[],Mp=function(e){for(var t=0;t<kn.length;t+=5)(!e||kn[t+4]&&kn[t+4].query===e)&&(kn[t].style.cssText=kn[t+1],kn[t].getBBox&&kn[t].setAttribute("transform",kn[t+2]||""),kn[t+3].uncache=1)},yp=function(){return st.forEach(function(e){return _n(e)&&++e.cacheID&&(e.rec=e())})},ff=function(e,t){var n;for(En=0;En<it.length;En++)n=it[En],n&&(!t||n._ctx===t)&&(e?n.kill(1):n.revert(!0,!0));wa=!0,t&&Mp(t),t||ns("revert")},Ep=function(e,t){st.cache++,(t||!Tn)&&st.forEach(function(n){return _n(n)&&n.cacheID++&&(n.rec=0)}),Vn(e)&&(rt.history.scrollRestoration=sf=e)},Tn,Jr=0,jf,B_=function(){if(jf!==Jr){var e=jf=Jr;requestAnimationFrame(function(){return e===Jr&&Hr(!0)})}},Tp=function(){_t.appendChild(Us),af=!yn&&Us.offsetHeight||rt.innerHeight,_t.removeChild(Us)},Jf=function(e){return ka(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},Hr=function(e,t){if(Hn=bt.documentElement,_t=bt.body,rf=[rt,bt,Hn,_t],li&&!e&&!wa){tn(at,"scrollEnd",Sp);return}Tp(),Tn=at.isRefreshing=!0,wa||yp();var n=ns("refreshInit");cp&&at.sort(),t||ff(),st.forEach(function(i){_n(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),it.slice(0).forEach(function(i){return i.refresh()}),wa=!1,it.forEach(function(i){if(i._subPinOffset&&i.pin){var s=i.vars.horizontal?"offsetWidth":"offsetHeight",a=i.pin[s];i.revert(!0,1),i.adjustPinSpacing(i.pin[s]-a),i.refresh()}}),kc=1,Jf(!0),it.forEach(function(i){var s=Pi(i.scroller,i._dir),a=i.vars.end==="max"||i._endClamp&&i.end>s,o=i._startClamp&&i.start>=s;(a||o)&&i.setPositions(o?s-1:i.start,a?Math.max(o?s:i.start+1,s):i.end,!0)}),Jf(!1),kc=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),st.forEach(function(i){_n(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),Ep(sf,1),sl.pause(),Jr++,Tn=2,Ki(2),it.forEach(function(i){return _n(i.vars.onRefresh)&&i.vars.onRefresh(i)}),Tn=at.isRefreshing=!1,ns("refresh")},Gc=0,Go=1,La,Ki=function(e){if(e===2||!Tn&&!wa){at.isUpdating=!0,La&&La.update(0);var t=it.length,n=pn(),i=n-Il>=50,s=t&&it[0].scroll();if(Go=Gc>s?-1:1,Tn||(Gc=s),i&&(li&&!vl&&n-li>200&&(li=0,ns("scrollEnd")),ha=Il,Il=n),Go<0){for(En=t;En-- >0;)it[En]&&it[En].update(0,i);Go=1}else for(En=0;En<t;En++)it[En]&&it[En].update(0,i);at.isUpdating=!1}Va=0},Hc=[gp,vp,lf,of,ni+Da,ni+Ca,ni+Pa,ni+Ra,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],Ho=Hc.concat([Zr,jr,"boxSizing","max"+Ws,"max"+cf,"position",ni,Vt,Vt+Pa,Vt+Ca,Vt+Da,Vt+Ra]),z_=function(e,t,n){Fs(n);var i=e._gsap;if(i.spacerIsNative)Fs(i.spacerState);else if(e._gsap.swappedIn){var s=t.parentNode;s&&(s.insertBefore(e,t),s.removeChild(t))}e._gsap.swappedIn=!1},Nl=function(e,t,n,i){if(!e._gsap.swappedIn){for(var s=Hc.length,a=t.style,o=e.style,l;s--;)l=Hc[s],a[l]=n[l];a.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(a.display="inline-block"),o[lf]=o[of]="auto",a.flexBasis=n.flexBasis||"auto",a.overflow="visible",a.boxSizing="border-box",a[Zr]=al(e,An)+qt,a[jr]=al(e,$t)+qt,a[Vt]=o[ni]=o[vp]=o[gp]="0",Fs(i),o[Zr]=o["max"+Ws]=n[Zr],o[jr]=o["max"+cf]=n[jr],o[Vt]=n[Vt],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},k_=/([A-Z])/g,Fs=function(e){if(e){var t=e.t.style,n=e.length,i=0,s,a;for((e.t._gsap||Pe.core.getCache(e.t)).uncache=1;i<n;i+=2)a=e[i+1],s=e[i],a?t[s]=a:t[s]&&t.removeProperty(s.replace(k_,"-$1").toLowerCase())}},oo=function(e){for(var t=Ho.length,n=e.style,i=[],s=0;s<t;s++)i.push(Ho[s],n[Ho[s]]);return i.t=e,i},V_=function(e,t,n){for(var i=[],s=e.length,a=n?8:0,o;a<s;a+=2)o=e[a],i.push(o,o in t?t[o]:e[a+1]);return i.t=e.t,i},Wo={left:0,top:0},Qf=function(e,t,n,i,s,a,o,l,c,u,d,f,h,_){_n(e)&&(e=e(l)),Vn(e)&&e.substr(0,3)==="max"&&(e=f+(e.charAt(4)==="="?ko("0"+e.substr(3),n):0));var g=h?h.time():0,p,m,S;if(h&&h.seek(0),isNaN(e)||(e=+e),ma(e))h&&(e=Pe.utils.mapRange(h.scrollTrigger.start,h.scrollTrigger.end,0,f,e)),o&&Vo(o,n,i,!0);else{_n(t)&&(t=t(l));var T=(e||"0").split(" "),y,A,w,b;S=Rn(t,l)||_t,y=Yi(S)||{},(!y||!y.left&&!y.top)&&ii(S).display==="none"&&(b=S.style.display,S.style.display="block",y=Yi(S),b?S.style.display=b:S.style.removeProperty("display")),A=ko(T[0],y[i.d]),w=ko(T[1]||"0",n),e=y[i.p]-c[i.p]-u+A+s-w,o&&Vo(o,w,i,n-w<20||o._isStart&&w>20),n-=n-w}if(_&&(l[_]=e||-.001,e<0&&(e=0)),a){var v=e+n,M=a._isStart;p="scroll"+i.d2,Vo(a,v,i,M&&v>20||!M&&(d?Math.max(_t[p],Hn[p]):a.parentNode[p])<=v+1),d&&(c=Yi(o),d&&(a.style[i.op.p]=c[i.op.p]-i.op.m-a._offset+qt))}return h&&S&&(p=Yi(S),h.seek(f),m=Yi(S),h._caScrollDist=p[i.p]-m[i.p],e=e/h._caScrollDist*f),h&&h.seek(g),h?e:Math.round(e)},G_=/(webkit|moz|length|cssText|inset)/i,eh=function(e,t,n,i){if(e.parentNode!==t){var s=e.style,a,o;if(t===_t){e._stOrig=s.cssText,o=ii(e);for(a in o)!+a&&!G_.test(a)&&o[a]&&typeof s[a]=="string"&&a!=="0"&&(s[a]=o[a]);s.top=n,s.left=i}else s.cssText=e._stOrig;Pe.core.getCache(e).uncache=1,t.appendChild(e)}},bp=function(e,t,n){var i=t,s=i;return function(a){var o=Math.round(e());return o!==i&&o!==s&&Math.abs(o-i)>3&&Math.abs(o-s)>3&&(a=o,n&&n()),s=i,i=Math.round(a),i}},lo=function(e,t,n){var i={};i[t.p]="+="+n,Pe.set(e,i)},th=function(e,t){var n=Tr(e,t),i="_scroll"+t.p2,s=function a(o,l,c,u,d){var f=a.tween,h=l.onComplete,_={};c=c||n();var g=bp(n,c,function(){f.kill(),a.tween=0});return d=u&&d||0,u=u||o-c,f&&f.kill(),l[i]=o,l.inherit=!1,l.modifiers=_,_[i]=function(){return g(c+u*f.ratio+d*f.ratio*f.ratio)},l.onUpdate=function(){st.cache++,a.tween&&Ki()},l.onComplete=function(){a.tween=0,h&&h.call(f)},f=a.tween=Pe.to(e,l),f};return e[i]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},tn(e,"wheel",n.wheelHandler),at.isTouch&&tn(e,"touchmove",n.wheelHandler),s},at=function(){function r(t,n){bs||r.register(Pe)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),zc(this),this.init(t,n)}var e=r.prototype;return e.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!da){this.update=this.refresh=this.kill=Ai;return}n=$f(Vn(n)||ma(n)||n.nodeType?{trigger:n}:n,so);var s=n,a=s.onUpdate,o=s.toggleClass,l=s.id,c=s.onToggle,u=s.onRefresh,d=s.scrub,f=s.trigger,h=s.pin,_=s.pinSpacing,g=s.invalidateOnRefresh,p=s.anticipatePin,m=s.onScrubComplete,S=s.onSnapComplete,T=s.once,y=s.snap,A=s.pinReparent,w=s.pinSpacer,b=s.containerAnimation,v=s.fastScrollEnd,M=s.preventOverlaps,F=n.horizontal||n.containerAnimation&&n.horizontal!==!1?An:$t,R=!d&&d!==0,I=Rn(n.scroller||rt),z=Pe.core.getCache(I),H=es(I),k=("pinType"in n?n.pinType:Sr(I,"pinType")||H&&"fixed")==="fixed",G=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],U=R&&n.toggleActions.split(" "),Q="markers"in n?n.markers:so.markers,ee=H?0:parseFloat(ii(I)["border"+F.p2+Ws])||0,D=this,ce=n.onRefreshInit&&function(){return n.onRefreshInit(D)},fe=L_(I,H,F),Fe=I_(I,H),He=0,Ke=0,K=0,ne=Tr(I,F),re,Le,Ie,De,ot,Ee,Me,V,te,O,P,We,Ge,Ve,ye,C,x,N,j,J,$,xe,le,Ue,Te,se,oe,be,we,pe,Xe,L,ue,ae,me,ie,Z,Ae,ze;if(D._startClamp=D._endClamp=!1,D._dir=F,p*=45,D.scroller=I,D.scroll=b?b.time.bind(b):ne,De=ne(),D.vars=n,i=i||n.animation,"refreshPriority"in n&&(cp=1,n.refreshPriority===-9999&&(La=D)),z.tweenScroll=z.tweenScroll||{top:th(I,$t),left:th(I,An)},D.tweenTo=re=z.tweenScroll[F.p],D.scrubDuration=function(ge){ue=ma(ge)&&ge,ue?L?L.duration(ge):L=Pe.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:ue,paused:!0,onComplete:function(){return m&&m(D)}}):(L&&L.progress(1).kill(),L=0)},i&&(i.vars.lazy=!1,i._initted&&!D.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),D.animation=i.pause(),i.scrollTrigger=D,D.scrubDuration(d),pe=0,l||(l=i.vars.id)),y&&((!Br(y)||y.push)&&(y={snapTo:y}),"scrollBehavior"in _t.style&&Pe.set(H?[_t,Hn]:I,{scrollBehavior:"auto"}),st.forEach(function(ge){return _n(ge)&&ge.target===(H?bt.scrollingElement||Hn:I)&&(ge.smooth=!1)}),Ie=_n(y.snapTo)?y.snapTo:y.snapTo==="labels"?F_(i):y.snapTo==="labelsDirectional"?N_(i):y.directional!==!1?function(ge,Ye){return uf(y.snapTo)(ge,pn()-Ke<500?0:Ye.direction)}:Pe.utils.snap(y.snapTo),ae=y.duration||{min:.1,max:2},ae=Br(ae)?Aa(ae.min,ae.max):Aa(ae,ae),me=Pe.delayedCall(y.delay||ue/2||.1,function(){var ge=ne(),Ye=pn()-Ke<500,ke=re.tween;if((Ye||Math.abs(D.getVelocity())<10)&&!ke&&!vl&&He!==ge){var $e=(ge-Ee)/Ve,Ft=i&&!R?i.totalProgress():$e,Ze=Ye?0:(Ft-Xe)/(pn()-ha)*1e3||0,At=Pe.utils.clamp(-$e,1-$e,cs(Ze/2)*Ze/.185),Wt=$e+(y.inertia===!1?0:At),wt,gt,mt=y,ln=mt.onStart,Tt=mt.onInterrupt,cn=mt.onComplete;if(wt=Ie(Wt,D),ma(wt)||(wt=Wt),gt=Math.max(0,Math.round(Ee+wt*Ve)),ge<=Me&&ge>=Ee&&gt!==ge){if(ke&&!ke._initted&&ke.data<=cs(gt-ge))return;y.inertia===!1&&(At=wt-$e),re(gt,{duration:ae(cs(Math.max(cs(Wt-Ft),cs(wt-Ft))*.185/Ze/.05||0)),ease:y.ease||"power3",data:cs(gt-ge),onInterrupt:function(){return me.restart(!0)&&Tt&&Tt(D)},onComplete:function(){D.update(),He=ne(),i&&!R&&(L?L.resetTo("totalProgress",wt,i._tTime/i._tDur):i.progress(wt)),pe=Xe=i&&!R?i.totalProgress():D.progress,S&&S(D),cn&&cn(D)}},ge,At*Ve,gt-ge-At*Ve),ln&&ln(D,re.tween)}}else D.isActive&&He!==ge&&me.restart(!0)}).pause()),l&&(Vc[l]=D),f=D.trigger=Rn(f||h!==!0&&h),ze=f&&f._gsap&&f._gsap.stRevert,ze&&(ze=ze(D)),h=h===!0?f:Rn(h),Vn(o)&&(o={targets:f,className:o}),h&&(_===!1||_===ni||(_=!_&&h.parentNode&&h.parentNode.style&&ii(h.parentNode).display==="flex"?!1:Vt),D.pin=h,Le=Pe.core.getCache(h),Le.spacer?ye=Le.pinState:(w&&(w=Rn(w),w&&!w.nodeType&&(w=w.current||w.nativeElement),Le.spacerIsNative=!!w,w&&(Le.spacerState=oo(w))),Le.spacer=N=w||bt.createElement("div"),N.classList.add("pin-spacer"),l&&N.classList.add("pin-spacer-"+l),Le.pinState=ye=oo(h)),n.force3D!==!1&&Pe.set(h,{force3D:!0}),D.spacer=N=Le.spacer,we=ii(h),Ue=we[_+F.os2],J=Pe.getProperty(h),$=Pe.quickSetter(h,F.a,qt),Nl(h,N,we),x=oo(h)),Q){We=Br(Q)?$f(Q,Kf):Kf,O=ao("scroller-start",l,I,F,We,0),P=ao("scroller-end",l,I,F,We,0,O),j=O["offset"+F.op.d2];var ft=Rn(Sr(I,"content")||I);V=this.markerStart=ao("start",l,ft,F,We,j,0,b),te=this.markerEnd=ao("end",l,ft,F,We,j,0,b),b&&(Ae=Pe.quickSetter([V,te],F.a,qt)),!k&&!(Li.length&&Sr(I,"fixedMarkers")===!0)&&(U_(H?_t:I),Pe.set([O,P],{force3D:!0}),se=Pe.quickSetter(O,F.a,qt),be=Pe.quickSetter(P,F.a,qt))}if(b){var Se=b.vars.onUpdate,Ne=b.vars.onUpdateParams;b.eventCallback("onUpdate",function(){D.update(0,0,1),Se&&Se.apply(b,Ne||[])})}if(D.previous=function(){return it[it.indexOf(D)-1]},D.next=function(){return it[it.indexOf(D)+1]},D.revert=function(ge,Ye){if(!Ye)return D.kill(!0);var ke=ge!==!1||!D.enabled,$e=dn;ke!==D.isReverted&&(ke&&(ie=Math.max(ne(),D.scroll.rec||0),K=D.progress,Z=i&&i.progress()),V&&[V,te,O,P].forEach(function(Ft){return Ft.style.display=ke?"none":"block"}),ke&&(dn=D,D.update(ke)),h&&(!A||!D.isActive)&&(ke?z_(h,N,ye):Nl(h,N,ii(h),Te)),ke||D.update(ke),dn=$e,D.isReverted=ke)},D.refresh=function(ge,Ye,ke,$e){if(!((dn||!D.enabled)&&!Ye)){if(h&&ge&&li){tn(r,"scrollEnd",Sp);return}!Tn&&ce&&ce(D),dn=D,re.tween&&!ke&&(re.tween.kill(),re.tween=0),L&&L.pause(),g&&i&&(i.revert({kill:!1}).invalidate(),i.getChildren?i.getChildren(!0,!0,!1).forEach(function(Ce){return Ce.vars.immediateRender&&Ce.render(0,!0,!0)}):i.vars.immediateRender&&i.render(0,!0,!0)),D.isReverted||D.revert(!0,!0),D._subPinOffset=!1;var Ft=fe(),Ze=Fe(),At=b?b.duration():Pi(I,F),Wt=Ve<=.01||!Ve,wt=0,gt=$e||0,mt=Br(ke)?ke.end:n.end,ln=n.endTrigger||f,Tt=Br(ke)?ke.start:n.start||(n.start===0||!f?0:h?"0 0":"0 100%"),cn=D.pinnedContainer=n.pinnedContainer&&Rn(n.pinnedContainer,D),Jn=f&&Math.max(0,it.indexOf(D))||0,Xt=Jn,Yt,jt,Bi,ss,E,B,Y,X,W,he,_e,de,Re;for(Q&&Br(ke)&&(de=Pe.getProperty(O,F.p),Re=Pe.getProperty(P,F.p));Xt-- >0;)B=it[Xt],B.end||B.refresh(0,1)||(dn=D),Y=B.pin,Y&&(Y===f||Y===h||Y===cn)&&!B.isReverted&&(he||(he=[]),he.unshift(B),B.revert(!0,!0)),B!==it[Xt]&&(Jn--,Xt--);for(_n(Tt)&&(Tt=Tt(D)),Tt=Wf(Tt,"start",D),Ee=Qf(Tt,f,Ft,F,ne(),V,O,D,Ze,ee,k,At,b,D._startClamp&&"_startClamp")||(h?-.001:0),_n(mt)&&(mt=mt(D)),Vn(mt)&&!mt.indexOf("+=")&&(~mt.indexOf(" ")?mt=(Vn(Tt)?Tt.split(" ")[0]:"")+mt:(wt=ko(mt.substr(2),Ft),mt=Vn(Tt)?Tt:(b?Pe.utils.mapRange(0,b.duration(),b.scrollTrigger.start,b.scrollTrigger.end,Ee):Ee)+wt,ln=f)),mt=Wf(mt,"end",D),Me=Math.max(Ee,Qf(mt||(ln?"100% 0":At),ln,Ft,F,ne()+wt,te,P,D,Ze,ee,k,At,b,D._endClamp&&"_endClamp"))||-.001,wt=0,Xt=Jn;Xt--;)B=it[Xt]||{},Y=B.pin,Y&&B.start-B._pinPush<=Ee&&!b&&B.end>0&&(Yt=B.end-(D._startClamp?Math.max(0,B.start):B.start),(Y===f&&B.start-B._pinPush<Ee||Y===cn)&&isNaN(Tt)&&(wt+=Yt*(1-B.progress)),Y===h&&(gt+=Yt));if(Ee+=wt,Me+=wt,D._startClamp&&(D._startClamp+=wt),D._endClamp&&!Tn&&(D._endClamp=Me||-.001,Me=Math.min(Me,Pi(I,F))),Ve=Me-Ee||(Ee-=.01)&&.001,Wt&&(K=Pe.utils.clamp(0,1,Pe.utils.normalize(Ee,Me,ie))),D._pinPush=gt,V&&wt&&(Yt={},Yt[F.a]="+="+wt,cn&&(Yt[F.p]="-="+ne()),Pe.set([V,te],Yt)),h&&!(kc&&D.end>=Pi(I,F)))Yt=ii(h),ss=F===$t,Bi=ne(),xe=parseFloat(J(F.a))+gt,!At&&Me>1&&(_e=(H?bt.scrollingElement||Hn:I).style,_e={style:_e,value:_e["overflow"+F.a.toUpperCase()]},H&&ii(_t)["overflow"+F.a.toUpperCase()]!=="scroll"&&(_e.style["overflow"+F.a.toUpperCase()]="scroll")),Nl(h,N,Yt),x=oo(h),jt=Yi(h,!0),X=k&&Tr(I,ss?An:$t)(),_?(Te=[_+F.os2,Ve+gt+qt],Te.t=N,Xt=_===Vt?al(h,F)+Ve+gt:0,Xt&&(Te.push(F.d,Xt+qt),N.style.flexBasis!=="auto"&&(N.style.flexBasis=Xt+qt)),Fs(Te),cn&&it.forEach(function(Ce){Ce.pin===cn&&Ce.vars.pinSpacing!==!1&&(Ce._subPinOffset=!0)}),k&&ne(ie)):(Xt=al(h,F),Xt&&N.style.flexBasis!=="auto"&&(N.style.flexBasis=Xt+qt)),k&&(E={top:jt.top+(ss?Bi-Ee:X)+qt,left:jt.left+(ss?X:Bi-Ee)+qt,boxSizing:"border-box",position:"fixed"},E[Zr]=E["max"+Ws]=Math.ceil(jt.width)+qt,E[jr]=E["max"+cf]=Math.ceil(jt.height)+qt,E[ni]=E[ni+Pa]=E[ni+Ca]=E[ni+Da]=E[ni+Ra]="0",E[Vt]=Yt[Vt],E[Vt+Pa]=Yt[Vt+Pa],E[Vt+Ca]=Yt[Vt+Ca],E[Vt+Da]=Yt[Vt+Da],E[Vt+Ra]=Yt[Vt+Ra],C=V_(ye,E,A),Tn&&ne(0)),i?(W=i._initted,Dl(1),i.render(i.duration(),!0,!0),le=J(F.a)-xe+Ve+gt,oe=Math.abs(Ve-le)>1,k&&oe&&C.splice(C.length-2,2),i.render(0,!0,!0),W||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),Dl(0)):le=Ve,_e&&(_e.value?_e.style["overflow"+F.a.toUpperCase()]=_e.value:_e.style.removeProperty("overflow-"+F.a));else if(f&&ne()&&!b)for(jt=f.parentNode;jt&&jt!==_t;)jt._pinOffset&&(Ee-=jt._pinOffset,Me-=jt._pinOffset),jt=jt.parentNode;he&&he.forEach(function(Ce){return Ce.revert(!1,!0)}),D.start=Ee,D.end=Me,De=ot=Tn?ie:ne(),!b&&!Tn&&(De<ie&&ne(ie),D.scroll.rec=0),D.revert(!1,!0),Ke=pn(),me&&(He=-1,me.restart(!0)),dn=0,i&&R&&(i._initted||Z)&&i.progress()!==Z&&i.progress(Z||0,!0).render(i.time(),!0,!0),(Wt||K!==D.progress||b||g||i&&!i._initted)&&(i&&!R&&(i._initted||K||i.vars.immediateRender!==!1)&&i.totalProgress(b&&Ee<-.001&&!K?Pe.utils.normalize(Ee,Me,0):K,!0),D.progress=Wt||(De-Ee)/Ve===K?0:K),h&&_&&(N._pinOffset=Math.round(D.progress*le)),L&&L.invalidate(),isNaN(de)||(de-=Pe.getProperty(O,F.p),Re-=Pe.getProperty(P,F.p),lo(O,F,de),lo(V,F,de-($e||0)),lo(P,F,Re),lo(te,F,Re-($e||0))),Wt&&!Tn&&D.update(),u&&!Tn&&!Ge&&(Ge=!0,u(D),Ge=!1)}},D.getVelocity=function(){return(ne()-ot)/(pn()-ha)*1e3||0},D.endAnimation=function(){ta(D.callbackAnimation),i&&(L?L.progress(1):i.paused()?R||ta(i,D.direction<0,1):ta(i,i.reversed()))},D.labelToScroll=function(ge){return i&&i.labels&&(Ee||D.refresh()||Ee)+i.labels[ge]/i.duration()*Ve||0},D.getTrailing=function(ge){var Ye=it.indexOf(D),ke=D.direction>0?it.slice(0,Ye).reverse():it.slice(Ye+1);return(Vn(ge)?ke.filter(function($e){return $e.vars.preventOverlaps===ge}):ke).filter(function($e){return D.direction>0?$e.end<=Ee:$e.start>=Me})},D.update=function(ge,Ye,ke){if(!(b&&!ke&&!ge)){var $e=Tn===!0?ie:D.scroll(),Ft=ge?0:($e-Ee)/Ve,Ze=Ft<0?0:Ft>1?1:Ft||0,At=D.progress,Wt,wt,gt,mt,ln,Tt,cn,Jn;if(Ye&&(ot=De,De=b?ne():$e,y&&(Xe=pe,pe=i&&!R?i.totalProgress():Ze)),p&&h&&!dn&&!to&&li&&(!Ze&&Ee<$e+($e-ot)/(pn()-ha)*p?Ze=1e-4:Ze===1&&Me>$e+($e-ot)/(pn()-ha)*p&&(Ze=.9999)),Ze!==At&&D.enabled){if(Wt=D.isActive=!!Ze&&Ze<1,wt=!!At&&At<1,Tt=Wt!==wt,ln=Tt||!!Ze!=!!At,D.direction=Ze>At?1:-1,D.progress=Ze,ln&&!dn&&(gt=Ze&&!At?0:Ze===1?1:At===1?2:3,R&&(mt=!Tt&&U[gt+1]!=="none"&&U[gt+1]||U[gt],Jn=i&&(mt==="complete"||mt==="reset"||mt in i))),M&&(Tt||Jn)&&(Jn||d||!i)&&(_n(M)?M(D):D.getTrailing(M).forEach(function(Bi){return Bi.endAnimation()})),R||(L&&!dn&&!to?(L._dp._time-L._start!==L._time&&L.render(L._dp._time-L._start),L.resetTo?L.resetTo("totalProgress",Ze,i._tTime/i._tDur):(L.vars.totalProgress=Ze,L.invalidate().restart())):i&&i.totalProgress(Ze,!!(dn&&(Ke||ge)))),h){if(ge&&_&&(N.style[_+F.os2]=Ue),!k)$(pa(xe+le*Ze));else if(ln){if(cn=!ge&&Ze>At&&Me+1>$e&&$e+1>=Pi(I,F),A)if(!ge&&(Wt||cn)){var Xt=Yi(h,!0),Yt=$e-Ee;eh(h,_t,Xt.top+(F===$t?Yt:0)+qt,Xt.left+(F===$t?0:Yt)+qt)}else eh(h,N);Fs(Wt||cn?C:x),oe&&Ze<1&&Wt||$(xe+(Ze===1&&!cn?le:0))}}y&&!re.tween&&!dn&&!to&&me.restart(!0),o&&(Tt||T&&Ze&&(Ze<1||!Ll))&&ka(o.targets).forEach(function(Bi){return Bi.classList[Wt||T?"add":"remove"](o.className)}),a&&!R&&!ge&&a(D),ln&&!dn?(R&&(Jn&&(mt==="complete"?i.pause().totalProgress(1):mt==="reset"?i.restart(!0).pause():mt==="restart"?i.restart(!0):i[mt]()),a&&a(D)),(Tt||!Ll)&&(c&&Tt&&Ul(D,c),G[gt]&&Ul(D,G[gt]),T&&(Ze===1?D.kill(!1,1):G[gt]=0),Tt||(gt=Ze===1?1:3,G[gt]&&Ul(D,G[gt]))),v&&!Wt&&Math.abs(D.getVelocity())>(ma(v)?v:2500)&&(ta(D.callbackAnimation),L?L.progress(1):ta(i,mt==="reverse"?1:!Ze,1))):R&&a&&!dn&&a(D)}if(be){var jt=b?$e/b.duration()*(b._caScrollDist||0):$e;se(jt+(O._isFlipped?1:0)),be(jt)}Ae&&Ae(-$e/b.duration()*(b._caScrollDist||0))}},D.enable=function(ge,Ye){D.enabled||(D.enabled=!0,tn(I,"resize",_a),H||tn(I,"scroll",us),ce&&tn(r,"refreshInit",ce),ge!==!1&&(D.progress=K=0,De=ot=He=ne()),Ye!==!1&&D.refresh())},D.getTween=function(ge){return ge&&re?re.tween:L},D.setPositions=function(ge,Ye,ke,$e){if(b){var Ft=b.scrollTrigger,Ze=b.duration(),At=Ft.end-Ft.start;ge=Ft.start+At*ge/Ze,Ye=Ft.start+At*Ye/Ze}D.refresh(!1,!1,{start:Xf(ge,ke&&!!D._startClamp),end:Xf(Ye,ke&&!!D._endClamp)},$e),D.update()},D.adjustPinSpacing=function(ge){if(Te&&ge){var Ye=Te.indexOf(F.d)+1;Te[Ye]=parseFloat(Te[Ye])+ge+qt,Te[1]=parseFloat(Te[1])+ge+qt,Fs(Te)}},D.disable=function(ge,Ye){if(ge!==!1&&D.revert(!0,!0),D.enabled&&(D.enabled=D.isActive=!1,Ye||L&&L.pause(),ie=0,Le&&(Le.uncache=1),ce&&en(r,"refreshInit",ce),me&&(me.pause(),re.tween&&re.tween.kill()&&(re.tween=0)),!H)){for(var ke=it.length;ke--;)if(it[ke].scroller===I&&it[ke]!==D)return;en(I,"resize",_a),H||en(I,"scroll",us)}},D.kill=function(ge,Ye){D.disable(ge,Ye),L&&!Ye&&L.kill(),l&&delete Vc[l];var ke=it.indexOf(D);ke>=0&&it.splice(ke,1),ke===En&&Go>0&&En--,ke=0,it.forEach(function($e){return $e.scroller===D.scroller&&(ke=1)}),ke||Tn||(D.scroll.rec=0),i&&(i.scrollTrigger=null,ge&&i.revert({kill:!1}),Ye||i.kill()),V&&[V,te,O,P].forEach(function($e){return $e.parentNode&&$e.parentNode.removeChild($e)}),La===D&&(La=0),h&&(Le&&(Le.uncache=1),ke=0,it.forEach(function($e){return $e.pin===h&&ke++}),ke||(Le.spacer=0)),n.onKill&&n.onKill(D)},it.push(D),D.enable(!1,!1),ze&&ze(D),i&&i.add&&!Ve){var Qe=D.update;D.update=function(){D.update=Qe,st.cache++,Ee||Me||D.refresh()},Pe.delayedCall(.01,D.update),Ve=.01,Ee=Me=0}else D.refresh();h&&B_()},r.register=function(n){return bs||(Pe=n||pp(),dp()&&window.document&&r.enable(),bs=da),bs},r.defaults=function(n){if(n)for(var i in n)so[i]=n[i];return so},r.disable=function(n,i){da=0,it.forEach(function(a){return a[i?"kill":"disable"](n)}),en(rt,"wheel",us),en(bt,"scroll",us),clearInterval(eo),en(bt,"touchcancel",Ai),en(_t,"touchstart",Ai),io(en,bt,"pointerdown,touchstart,mousedown",Yf),io(en,bt,"pointerup,touchend,mouseup",qf),sl.kill(),no(en);for(var s=0;s<st.length;s+=3)ro(en,st[s],st[s+1]),ro(en,st[s],st[s+2])},r.enable=function(){if(rt=window,bt=document,Hn=bt.documentElement,_t=bt.body,Pe&&(ka=Pe.utils.toArray,Aa=Pe.utils.clamp,zc=Pe.core.context||Ai,Dl=Pe.core.suppressOverwrites||Ai,sf=rt.history.scrollRestoration||"auto",Gc=rt.pageYOffset||0,Pe.core.globals("ScrollTrigger",r),_t)){da=1,Us=document.createElement("div"),Us.style.height="100vh",Us.style.position="absolute",Tp(),D_(),Bt.register(Pe),r.isTouch=Bt.isTouch,ur=Bt.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),Bc=Bt.isTouch===1,tn(rt,"wheel",us),rf=[rt,bt,Hn,_t],Pe.matchMedia?(r.matchMedia=function(c){var u=Pe.matchMedia(),d;for(d in c)u.add(d,c[d]);return u},Pe.addEventListener("matchMediaInit",function(){yp(),ff()}),Pe.addEventListener("matchMediaRevert",function(){return Mp()}),Pe.addEventListener("matchMedia",function(){Hr(0,1),ns("matchMedia")}),Pe.matchMedia().add("(orientation: portrait)",function(){return Fl(),Fl})):console.warn("Requires GSAP 3.11.0 or later"),Fl(),tn(bt,"scroll",us);var n=_t.hasAttribute("style"),i=_t.style,s=i.borderTopStyle,a=Pe.core.Animation.prototype,o,l;for(a.revert||Object.defineProperty(a,"revert",{value:function(){return this.time(-.01,!0)}}),i.borderTopStyle="solid",o=Yi(_t),$t.m=Math.round(o.top+$t.sc())||0,An.m=Math.round(o.left+An.sc())||0,s?i.borderTopStyle=s:i.removeProperty("border-top-style"),n||(_t.setAttribute("style",""),_t.removeAttribute("style")),eo=setInterval(Zf,250),Pe.delayedCall(.5,function(){return to=0}),tn(bt,"touchcancel",Ai),tn(_t,"touchstart",Ai),io(tn,bt,"pointerdown,touchstart,mousedown",Yf),io(tn,bt,"pointerup,touchend,mouseup",qf),Oc=Pe.utils.checkPrefix("transform"),Ho.push(Oc),bs=pn(),sl=Pe.delayedCall(.2,Hr).pause(),As=[bt,"visibilitychange",function(){var c=rt.innerWidth,u=rt.innerHeight;bt.hidden?(Gf=c,Hf=u):(Gf!==c||Hf!==u)&&_a()},bt,"DOMContentLoaded",Hr,rt,"load",Hr,rt,"resize",_a],no(tn),it.forEach(function(c){return c.enable(0,1)}),l=0;l<st.length;l+=3)ro(en,st[l],st[l+1]),ro(en,st[l],st[l+2])}},r.config=function(n){"limitCallbacks"in n&&(Ll=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(eo)||(eo=i)&&setInterval(Zf,i),"ignoreMobileResize"in n&&(Bc=r.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(no(en)||no(tn,n.autoRefreshEvents||"none"),up=(n.autoRefreshEvents+"").indexOf("resize")===-1)},r.scrollerProxy=function(n,i){var s=Rn(n),a=st.indexOf(s),o=es(s);~a&&st.splice(a,o?6:2),i&&(o?Li.unshift(rt,i,_t,i,Hn,i):Li.unshift(s,i))},r.clearMatchMedia=function(n){it.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},r.isInViewport=function(n,i,s){var a=(Vn(n)?Rn(n):n).getBoundingClientRect(),o=a[s?Zr:jr]*i||0;return s?a.right-o>0&&a.left+o<rt.innerWidth:a.bottom-o>0&&a.top+o<rt.innerHeight},r.positionInViewport=function(n,i,s){Vn(n)&&(n=Rn(n));var a=n.getBoundingClientRect(),o=a[s?Zr:jr],l=i==null?o/2:i in ol?ol[i]*o:~i.indexOf("%")?parseFloat(i)*o/100:parseFloat(i)||0;return s?(a.left+l)/rt.innerWidth:(a.top+l)/rt.innerHeight},r.killAll=function(n){if(it.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var i=ts.killAll||[];ts={},i.forEach(function(s){return s()})}},r}();at.version="3.14.2";at.saveStyles=function(r){return r?ka(r).forEach(function(e){if(e&&e.style){var t=kn.indexOf(e);t>=0&&kn.splice(t,5),kn.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),Pe.core.getCache(e),zc())}}):kn};at.revert=function(r,e){return ff(!r,e)};at.create=function(r,e){return new at(r,e)};at.refresh=function(r){return r?_a(!0):(bs||at.register())&&Hr(!0)};at.update=function(r){return++st.cache&&Ki(r===!0?2:0)};at.clearScrollMemory=Ep;at.maxScroll=function(r,e){return Pi(r,e?An:$t)};at.getScrollFunc=function(r,e){return Tr(Rn(r),e?An:$t)};at.getById=function(r){return Vc[r]};at.getAll=function(){return it.filter(function(r){return r.vars.id!=="ScrollSmoother"})};at.isScrolling=function(){return!!li};at.snapDirectional=uf;at.addEventListener=function(r,e){var t=ts[r]||(ts[r]=[]);~t.indexOf(e)||t.push(e)};at.removeEventListener=function(r,e){var t=ts[r],n=t&&t.indexOf(e);n>=0&&t.splice(n,1)};at.batch=function(r,e){var t=[],n={},i=e.interval||.016,s=e.batchMax||1e9,a=function(c,u){var d=[],f=[],h=Pe.delayedCall(i,function(){u(d,f),d=[],f=[]}).pause();return function(_){d.length||h.restart(!0),d.push(_.trigger),f.push(_),s<=d.length&&h.progress(1)}},o;for(o in e)n[o]=o.substr(0,2)==="on"&&_n(e[o])&&o!=="onRefreshInit"?a(o,e[o]):e[o];return _n(s)&&(s=s(),tn(at,"refresh",function(){return s=e.batchMax()})),ka(r).forEach(function(l){var c={};for(o in n)c[o]=n[o];c.trigger=l,t.push(at.create(c))}),t};var nh=function(e,t,n,i){return t>i?e(i):t<0&&e(0),n>i?(i-t)/(n-t):n<0?t/(t-n):1},Ol=function r(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(Bt.isTouch?" pinch-zoom":""):"none",e===Hn&&r(_t,t)},co={auto:1,scroll:1},H_=function(e){var t=e.event,n=e.target,i=e.axis,s=(t.changedTouches?t.changedTouches[0]:t).target,a=s._gsap||Pe.core.getCache(s),o=pn(),l;if(!a._isScrollT||o-a._isScrollT>2e3){for(;s&&s!==_t&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(co[(l=ii(s)).overflowY]||co[l.overflowX]));)s=s.parentNode;a._isScroll=s&&s!==n&&!es(s)&&(co[(l=ii(s)).overflowY]||co[l.overflowX]),a._isScrollT=o}(a._isScroll||i==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},Ap=function(e,t,n,i){return Bt.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:i=i&&H_,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&tn(bt,Bt.eventTypes[0],rh,!1,!0)},onDisable:function(){return en(bt,Bt.eventTypes[0],rh,!0)}})},W_=/(input|label|select|textarea)/i,ih,rh=function(e){var t=W_.test(e.target.tagName);(t||ih)&&(e._gsapAllow=!0,ih=t)},X_=function(e){Br(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,n=t.normalizeScrollX,i=t.momentum,s=t.allowNestedScroll,a=t.onRelease,o,l,c=Rn(e.target)||Hn,u=Pe.core.globals().ScrollSmoother,d=u&&u.get(),f=ur&&(e.content&&Rn(e.content)||d&&e.content!==!1&&!d.smooth()&&d.content()),h=Tr(c,$t),_=Tr(c,An),g=1,p=(Bt.isTouch&&rt.visualViewport?rt.visualViewport.scale*rt.visualViewport.width:rt.outerWidth)/rt.innerWidth,m=0,S=_n(i)?function(){return i(o)}:function(){return i||2.8},T,y,A=Ap(c,e.type,!0,s),w=function(){return y=!1},b=Ai,v=Ai,M=function(){l=Pi(c,$t),v=Aa(ur?1:0,l),n&&(b=Aa(0,Pi(c,An))),T=Jr},F=function(){f._gsap.y=pa(parseFloat(f._gsap.y)+h.offset)+"px",f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(f._gsap.y)+", 0, 1)",h.offset=h.cacheID=0},R=function(){if(y){requestAnimationFrame(w);var Q=pa(o.deltaY/2),ee=v(h.v-Q);if(f&&ee!==h.v+h.offset){h.offset=ee-h.v;var D=pa((parseFloat(f&&f._gsap.y)||0)-h.offset);f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+D+", 0, 1)",f._gsap.y=D+"px",h.cacheID=st.cache,Ki()}return!0}h.offset&&F(),y=!0},I,z,H,k,G=function(){M(),I.isActive()&&I.vars.scrollY>l&&(h()>l?I.progress(1)&&h(l):I.resetTo("scrollY",l))};return f&&Pe.set(f,{y:"+=0"}),e.ignoreCheck=function(U){return ur&&U.type==="touchmove"&&R()||g>1.05&&U.type!=="touchstart"||o.isGesturing||U.touches&&U.touches.length>1},e.onPress=function(){y=!1;var U=g;g=pa((rt.visualViewport&&rt.visualViewport.scale||1)/p),I.pause(),U!==g&&Ol(c,g>1.01?!0:n?!1:"x"),z=_(),H=h(),M(),T=Jr},e.onRelease=e.onGestureStart=function(U,Q){if(h.offset&&F(),!Q)k.restart(!0);else{st.cache++;var ee=S(),D,ce;n&&(D=_(),ce=D+ee*.05*-U.velocityX/.227,ee*=nh(_,D,ce,Pi(c,An)),I.vars.scrollX=b(ce)),D=h(),ce=D+ee*.05*-U.velocityY/.227,ee*=nh(h,D,ce,Pi(c,$t)),I.vars.scrollY=v(ce),I.invalidate().duration(ee).play(.01),(ur&&I.vars.scrollY>=l||D>=l-1)&&Pe.to({},{onUpdate:G,duration:ee})}a&&a(U)},e.onWheel=function(){I._ts&&I.pause(),pn()-m>1e3&&(T=0,m=pn())},e.onChange=function(U,Q,ee,D,ce){if(Jr!==T&&M(),Q&&n&&_(b(D[2]===Q?z+(U.startX-U.x):_()+Q-D[1])),ee){h.offset&&F();var fe=ce[2]===ee,Fe=fe?H+U.startY-U.y:h()+ee-ce[1],He=v(Fe);fe&&Fe!==He&&(H+=He-Fe),h(He)}(ee||Q)&&Ki()},e.onEnable=function(){Ol(c,n?!1:"x"),at.addEventListener("refresh",G),tn(rt,"resize",G),h.smooth&&(h.target.style.scrollBehavior="auto",h.smooth=_.smooth=!1),A.enable()},e.onDisable=function(){Ol(c,!0),en(rt,"resize",G),at.removeEventListener("refresh",G),A.kill()},e.lockAxis=e.lockAxis!==!1,o=new Bt(e),o.iOS=ur,ur&&!h()&&h(1),ur&&Pe.ticker.add(Ai),k=o._dc,I=Pe.to(o,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:bp(h,h(),function(){return I.pause()})},onUpdate:Ki,onComplete:k.vars.onComplete}),o};at.sort=function(r){if(_n(r))return it.sort(r);var e=rt.pageYOffset||0;return at.getAll().forEach(function(t){return t._sortY=t.trigger?e+t.trigger.getBoundingClientRect().top:t.start+rt.innerHeight}),it.sort(r||function(t,n){return(t.vars.refreshPriority||0)*-1e6+(t.vars.containerAnimation?1e6:t._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};at.observe=function(r){return new Bt(r)};at.normalizeScroll=function(r){if(typeof r>"u")return yn;if(r===!0&&yn)return yn.enable();if(r===!1){yn&&yn.kill(),yn=r;return}var e=r instanceof Bt?r:X_(r);return yn&&yn.target===e.target&&yn.kill(),es(e.target)&&(yn=e),e};at.core={_getVelocityProp:Nc,_inputObserver:Ap,_scrollers:st,_proxies:Li,bridge:{ss:function(){li||ns("scrollStart"),li=pn()},ref:function(){return dn}}};pp()&&Pe.registerPlugin(at);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const hf="183",Y_=0,sh=1,q_=2,Xo=1,$_=2,ga=3,br=0,Un=1,qi=2,Zi=0,Ns=1,Wc=2,ah=3,oh=4,K_=5,kr=100,Z_=101,j_=102,J_=103,Q_=104,eg=200,tg=201,ng=202,ig=203,Xc=204,Yc=205,rg=206,sg=207,ag=208,og=209,lg=210,cg=211,ug=212,fg=213,hg=214,qc=0,$c=1,Kc=2,Xs=3,Zc=4,jc=5,Jc=6,Qc=7,wp=0,dg=1,pg=2,Ii=0,Cp=1,Rp=2,Pp=3,Dp=4,Lp=5,Ip=6,Up=7,Fp=300,is=301,Ys=302,Bl=303,zl=304,xl=306,eu=1e3,$n=1001,tu=1002,an=1003,mg=1004,uo=1005,Ht=1006,kl=1007,Wr=1008,ri=1009,Np=1010,Op=1011,Ga=1012,df=1013,Fi=1014,gi=1015,Ni=1016,pf=1017,mf=1018,Ha=1020,Bp=35902,zp=35899,kp=1021,Vp=1022,oi=1023,er=1026,Xr=1027,Gp=1028,_f=1029,qs=1030,gf=1031,vf=1033,Yo=33776,qo=33777,$o=33778,Ko=33779,nu=35840,iu=35841,ru=35842,su=35843,au=36196,ou=37492,lu=37496,cu=37488,uu=37489,fu=37490,hu=37491,du=37808,pu=37809,mu=37810,_u=37811,gu=37812,vu=37813,xu=37814,Su=37815,Mu=37816,yu=37817,Eu=37818,Tu=37819,bu=37820,Au=37821,wu=36492,Cu=36494,Ru=36495,Pu=36283,Du=36284,Lu=36285,Iu=36286,_g=3200,gg=0,vg=1,fr="",ti="srgb",$s="srgb-linear",ll="linear",vt="srgb",fs=7680,lh=519,xg=512,Sg=513,Mg=514,xf=515,yg=516,Eg=517,Sf=518,Tg=519,ch=35044,uh="300 es",Di=2e3,cl=2001;function bg(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function ul(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Ag(){const r=ul("canvas");return r.style.display="block",r}const fh={};function hh(...r){const e="THREE."+r.shift();console.log(e,...r)}function Hp(r){const e=r[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=r[1];t&&t.isStackTrace?r[0]+=" "+t.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function qe(...r){r=Hp(r);const e="THREE."+r.shift();{const t=r[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...r)}}function dt(...r){r=Hp(r);const e="THREE."+r.shift();{const t=r[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...r)}}function fl(...r){const e=r.join(" ");e in fh||(fh[e]=!0,qe(...r))}function wg(r,e,t){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}const Cg={[qc]:$c,[Kc]:Jc,[Zc]:Qc,[Xs]:jc,[$c]:qc,[Jc]:Kc,[Qc]:Zc,[jc]:Xs};class Zs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,e);e.target=null}}}const fn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Vl=Math.PI/180,Uu=180/Math.PI;function qa(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(fn[r&255]+fn[r>>8&255]+fn[r>>16&255]+fn[r>>24&255]+"-"+fn[e&255]+fn[e>>8&255]+"-"+fn[e>>16&15|64]+fn[e>>24&255]+"-"+fn[t&63|128]+fn[t>>8&255]+"-"+fn[t>>16&255]+fn[t>>24&255]+fn[n&255]+fn[n>>8&255]+fn[n>>16&255]+fn[n>>24&255]).toLowerCase()}function lt(r,e,t){return Math.max(e,Math.min(t,r))}function Rg(r,e){return(r%e+e)%e}function Gl(r,e,t){return(1-t)*r+t*e}function na(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Cn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class je{constructor(e=0,t=0){je.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=lt(this.x,e.x,t.x),this.y=lt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=lt(this.x,e,t),this.y=lt(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(lt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(lt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*i+e.x,this.y=s*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class js{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,a,o){let l=n[i+0],c=n[i+1],u=n[i+2],d=n[i+3],f=s[a+0],h=s[a+1],_=s[a+2],g=s[a+3];if(d!==g||l!==f||c!==h||u!==_){let p=l*f+c*h+u*_+d*g;p<0&&(f=-f,h=-h,_=-_,g=-g,p=-p);let m=1-o;if(p<.9995){const S=Math.acos(p),T=Math.sin(S);m=Math.sin(m*S)/T,o=Math.sin(o*S)/T,l=l*m+f*o,c=c*m+h*o,u=u*m+_*o,d=d*m+g*o}else{l=l*m+f*o,c=c*m+h*o,u=u*m+_*o,d=d*m+g*o;const S=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=S,c*=S,u*=S,d*=S}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,i,s,a){const o=n[i],l=n[i+1],c=n[i+2],u=n[i+3],d=s[a],f=s[a+1],h=s[a+2],_=s[a+3];return e[t]=o*_+u*d+l*h-c*f,e[t+1]=l*_+u*f+c*d-o*h,e[t+2]=c*_+u*h+o*f-l*d,e[t+3]=u*_-o*d-l*f-c*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(i/2),d=o(s/2),f=l(n/2),h=l(i/2),_=l(s/2);switch(a){case"XYZ":this._x=f*u*d+c*h*_,this._y=c*h*d-f*u*_,this._z=c*u*_+f*h*d,this._w=c*u*d-f*h*_;break;case"YXZ":this._x=f*u*d+c*h*_,this._y=c*h*d-f*u*_,this._z=c*u*_-f*h*d,this._w=c*u*d+f*h*_;break;case"ZXY":this._x=f*u*d-c*h*_,this._y=c*h*d+f*u*_,this._z=c*u*_+f*h*d,this._w=c*u*d-f*h*_;break;case"ZYX":this._x=f*u*d-c*h*_,this._y=c*h*d+f*u*_,this._z=c*u*_-f*h*d,this._w=c*u*d+f*h*_;break;case"YZX":this._x=f*u*d+c*h*_,this._y=c*h*d+f*u*_,this._z=c*u*_-f*h*d,this._w=c*u*d-f*h*_;break;case"XZY":this._x=f*u*d-c*h*_,this._y=c*h*d-f*u*_,this._z=c*u*_+f*h*d,this._w=c*u*d+f*h*_;break;default:qe("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],d=t[10],f=n+o+d;if(f>0){const h=.5/Math.sqrt(f+1);this._w=.25/h,this._x=(u-l)*h,this._y=(s-c)*h,this._z=(a-i)*h}else if(n>o&&n>d){const h=2*Math.sqrt(1+n-o-d);this._w=(u-l)/h,this._x=.25*h,this._y=(i+a)/h,this._z=(s+c)/h}else if(o>d){const h=2*Math.sqrt(1+o-n-d);this._w=(s-c)/h,this._x=(i+a)/h,this._y=.25*h,this._z=(l+u)/h}else{const h=2*Math.sqrt(1+d-n-o);this._w=(a-i)/h,this._x=(s+c)/h,this._y=(l+u)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(lt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+i*c-s*l,this._y=i*u+a*l+s*o-n*c,this._z=s*u+a*c+n*l-i*o,this._w=a*u-n*o-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,i=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,i=-i,s=-s,a=-a,o=-o);let l=1-t;if(o<.9995){const c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class q{constructor(e=0,t=0,n=0){q.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(dh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(dh.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*i-o*n),u=2*(o*t-s*i),d=2*(s*n-a*t);return this.x=t+l*c+a*d-o*u,this.y=n+l*u+o*c-s*d,this.z=i+l*d+s*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=lt(this.x,e.x,t.x),this.y=lt(this.y,e.y,t.y),this.z=lt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=lt(this.x,e,t),this.y=lt(this.y,e,t),this.z=lt(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(lt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-s*o,this.y=s*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Hl.copy(this).projectOnVector(e),this.sub(Hl)}reflect(e){return this.sub(Hl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(lt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Hl=new q,dh=new js;class et{constructor(e,t,n,i,s,a,o,l,c){et.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,l,c)}set(e,t,n,i,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],d=n[7],f=n[2],h=n[5],_=n[8],g=i[0],p=i[3],m=i[6],S=i[1],T=i[4],y=i[7],A=i[2],w=i[5],b=i[8];return s[0]=a*g+o*S+l*A,s[3]=a*p+o*T+l*w,s[6]=a*m+o*y+l*b,s[1]=c*g+u*S+d*A,s[4]=c*p+u*T+d*w,s[7]=c*m+u*y+d*b,s[2]=f*g+h*S+_*A,s[5]=f*p+h*T+_*w,s[8]=f*m+h*y+_*b,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*s*u+n*o*l+i*s*c-i*a*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=u*a-o*c,f=o*l-u*s,h=c*s-a*l,_=t*d+n*f+i*h;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return e[0]=d*g,e[1]=(i*c-u*n)*g,e[2]=(o*n-i*a)*g,e[3]=f*g,e[4]=(u*t-i*l)*g,e[5]=(i*s-o*t)*g,e[6]=h*g,e[7]=(n*l-c*t)*g,e[8]=(a*t-n*s)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Wl.makeScale(e,t)),this}rotate(e){return this.premultiply(Wl.makeRotation(-e)),this}translate(e,t){return this.premultiply(Wl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Wl=new et,ph=new et().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),mh=new et().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Pg(){const r={enabled:!0,workingColorSpace:$s,spaces:{},convert:function(i,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===vt&&(i.r=ji(i.r),i.g=ji(i.g),i.b=ji(i.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===vt&&(i.r=Os(i.r),i.g=Os(i.g),i.b=Os(i.b))),i},workingToColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},colorSpaceToWorking:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===fr?ll:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,a){return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,s){return fl("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(i,s)},toWorkingColorSpace:function(i,s){return fl("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(i,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[$s]:{primaries:e,whitePoint:n,transfer:ll,toXYZ:ph,fromXYZ:mh,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:ti},outputColorSpaceConfig:{drawingBufferColorSpace:ti}},[ti]:{primaries:e,whitePoint:n,transfer:vt,toXYZ:ph,fromXYZ:mh,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:ti}}}),r}const ut=Pg();function ji(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Os(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let hs;class Dg{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{hs===void 0&&(hs=ul("canvas")),hs.width=e.width,hs.height=e.height;const i=hs.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=hs}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ul("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=ji(s[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ji(t[n]/255)*255):t[n]=ji(t[n]);return{data:t,width:e.width,height:e.height}}else return qe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Lg=0;class Mf{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Lg++}),this.uuid=qa(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(Xl(i[a].image)):s.push(Xl(i[a]))}else s=Xl(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function Xl(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Dg.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(qe("Texture: Unable to serialize Texture."),{})}let Ig=0;const Yl=new q;class wn extends Zs{constructor(e=wn.DEFAULT_IMAGE,t=wn.DEFAULT_MAPPING,n=$n,i=$n,s=Ht,a=Wr,o=oi,l=ri,c=wn.DEFAULT_ANISOTROPY,u=fr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ig++}),this.uuid=qa(),this.name="",this.source=new Mf(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new je(0,0),this.repeat=new je(1,1),this.center=new je(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new et,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Yl).x}get height(){return this.source.getSize(Yl).y}get depth(){return this.source.getSize(Yl).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){qe(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){qe(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Fp)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case eu:e.x=e.x-Math.floor(e.x);break;case $n:e.x=e.x<0?0:1;break;case tu:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case eu:e.y=e.y-Math.floor(e.y);break;case $n:e.y=e.y<0?0:1;break;case tu:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}wn.DEFAULT_IMAGE=null;wn.DEFAULT_MAPPING=Fp;wn.DEFAULT_ANISOTROPY=1;class It{constructor(e=0,t=0,n=0,i=1){It.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,c=l[0],u=l[4],d=l[8],f=l[1],h=l[5],_=l[9],g=l[2],p=l[6],m=l[10];if(Math.abs(u-f)<.01&&Math.abs(d-g)<.01&&Math.abs(_-p)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+g)<.1&&Math.abs(_+p)<.1&&Math.abs(c+h+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const T=(c+1)/2,y=(h+1)/2,A=(m+1)/2,w=(u+f)/4,b=(d+g)/4,v=(_+p)/4;return T>y&&T>A?T<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(T),i=w/n,s=b/n):y>A?y<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(y),n=w/i,s=v/i):A<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(A),n=b/s,i=v/s),this.set(n,i,s,t),this}let S=Math.sqrt((p-_)*(p-_)+(d-g)*(d-g)+(f-u)*(f-u));return Math.abs(S)<.001&&(S=1),this.x=(p-_)/S,this.y=(d-g)/S,this.z=(f-u)/S,this.w=Math.acos((c+h+m-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=lt(this.x,e.x,t.x),this.y=lt(this.y,e.y,t.y),this.z=lt(this.z,e.z,t.z),this.w=lt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=lt(this.x,e,t),this.y=lt(this.y,e,t),this.z=lt(this.z,e,t),this.w=lt(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(lt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ug extends Zs{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ht,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new It(0,0,e,t),this.scissorTest=!1,this.viewport=new It(0,0,e,t),this.textures=[];const i={width:e,height:t,depth:n.depth},s=new wn(i),a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:Ht,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new Mf(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class vi extends Ug{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Wp extends wn{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=an,this.minFilter=an,this.wrapR=$n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Fg extends wn{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=an,this.minFilter=an,this.wrapR=$n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class zt{constructor(e,t,n,i,s,a,o,l,c,u,d,f,h,_,g,p){zt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,l,c,u,d,f,h,_,g,p)}set(e,t,n,i,s,a,o,l,c,u,d,f,h,_,g,p){const m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=i,m[1]=s,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=u,m[10]=d,m[14]=f,m[3]=h,m[7]=_,m[11]=g,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new zt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,n=e.elements,i=1/ds.setFromMatrixColumn(e,0).length(),s=1/ds.setFromMatrixColumn(e,1).length(),a=1/ds.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const f=a*u,h=a*d,_=o*u,g=o*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=h+_*c,t[5]=f-g*c,t[9]=-o*l,t[2]=g-f*c,t[6]=_+h*c,t[10]=a*l}else if(e.order==="YXZ"){const f=l*u,h=l*d,_=c*u,g=c*d;t[0]=f+g*o,t[4]=_*o-h,t[8]=a*c,t[1]=a*d,t[5]=a*u,t[9]=-o,t[2]=h*o-_,t[6]=g+f*o,t[10]=a*l}else if(e.order==="ZXY"){const f=l*u,h=l*d,_=c*u,g=c*d;t[0]=f-g*o,t[4]=-a*d,t[8]=_+h*o,t[1]=h+_*o,t[5]=a*u,t[9]=g-f*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const f=a*u,h=a*d,_=o*u,g=o*d;t[0]=l*u,t[4]=_*c-h,t[8]=f*c+g,t[1]=l*d,t[5]=g*c+f,t[9]=h*c-_,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const f=a*l,h=a*c,_=o*l,g=o*c;t[0]=l*u,t[4]=g-f*d,t[8]=_*d+h,t[1]=d,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=h*d+_,t[10]=f-g*d}else if(e.order==="XZY"){const f=a*l,h=a*c,_=o*l,g=o*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=f*d+g,t[5]=a*u,t[9]=h*d-_,t[2]=_*d-h,t[6]=o*u,t[10]=g*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ng,e,Og)}lookAt(e,t,n){const i=this.elements;return Bn.subVectors(e,t),Bn.lengthSq()===0&&(Bn.z=1),Bn.normalize(),rr.crossVectors(n,Bn),rr.lengthSq()===0&&(Math.abs(n.z)===1?Bn.x+=1e-4:Bn.z+=1e-4,Bn.normalize(),rr.crossVectors(n,Bn)),rr.normalize(),fo.crossVectors(Bn,rr),i[0]=rr.x,i[4]=fo.x,i[8]=Bn.x,i[1]=rr.y,i[5]=fo.y,i[9]=Bn.y,i[2]=rr.z,i[6]=fo.z,i[10]=Bn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],d=n[5],f=n[9],h=n[13],_=n[2],g=n[6],p=n[10],m=n[14],S=n[3],T=n[7],y=n[11],A=n[15],w=i[0],b=i[4],v=i[8],M=i[12],F=i[1],R=i[5],I=i[9],z=i[13],H=i[2],k=i[6],G=i[10],U=i[14],Q=i[3],ee=i[7],D=i[11],ce=i[15];return s[0]=a*w+o*F+l*H+c*Q,s[4]=a*b+o*R+l*k+c*ee,s[8]=a*v+o*I+l*G+c*D,s[12]=a*M+o*z+l*U+c*ce,s[1]=u*w+d*F+f*H+h*Q,s[5]=u*b+d*R+f*k+h*ee,s[9]=u*v+d*I+f*G+h*D,s[13]=u*M+d*z+f*U+h*ce,s[2]=_*w+g*F+p*H+m*Q,s[6]=_*b+g*R+p*k+m*ee,s[10]=_*v+g*I+p*G+m*D,s[14]=_*M+g*z+p*U+m*ce,s[3]=S*w+T*F+y*H+A*Q,s[7]=S*b+T*R+y*k+A*ee,s[11]=S*v+T*I+y*G+A*D,s[15]=S*M+T*z+y*U+A*ce,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],d=e[6],f=e[10],h=e[14],_=e[3],g=e[7],p=e[11],m=e[15],S=l*h-c*f,T=o*h-c*d,y=o*f-l*d,A=a*h-c*u,w=a*f-l*u,b=a*d-o*u;return t*(g*S-p*T+m*y)-n*(_*S-p*A+m*w)+i*(_*T-g*A+m*b)-s*(_*y-g*w+p*b)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=e[9],f=e[10],h=e[11],_=e[12],g=e[13],p=e[14],m=e[15],S=t*o-n*a,T=t*l-i*a,y=t*c-s*a,A=n*l-i*o,w=n*c-s*o,b=i*c-s*l,v=u*g-d*_,M=u*p-f*_,F=u*m-h*_,R=d*p-f*g,I=d*m-h*g,z=f*m-h*p,H=S*z-T*I+y*R+A*F-w*M+b*v;if(H===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const k=1/H;return e[0]=(o*z-l*I+c*R)*k,e[1]=(i*I-n*z-s*R)*k,e[2]=(g*b-p*w+m*A)*k,e[3]=(f*w-d*b-h*A)*k,e[4]=(l*F-a*z-c*M)*k,e[5]=(t*z-i*F+s*M)*k,e[6]=(p*y-_*b-m*T)*k,e[7]=(u*b-f*y+h*T)*k,e[8]=(a*I-o*F+c*v)*k,e[9]=(n*F-t*I-s*v)*k,e[10]=(_*w-g*y+m*S)*k,e[11]=(d*y-u*w-h*S)*k,e[12]=(o*M-a*R-l*v)*k,e[13]=(t*R-n*M+i*v)*k,e[14]=(g*T-_*A-p*S)*k,e[15]=(u*A-d*T+f*S)*k,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,u*o+n,u*l-i*a,0,c*l-i*o,u*l+i*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,a){return this.set(1,n,s,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,u=a+a,d=o+o,f=s*c,h=s*u,_=s*d,g=a*u,p=a*d,m=o*d,S=l*c,T=l*u,y=l*d,A=n.x,w=n.y,b=n.z;return i[0]=(1-(g+m))*A,i[1]=(h+y)*A,i[2]=(_-T)*A,i[3]=0,i[4]=(h-y)*w,i[5]=(1-(f+m))*w,i[6]=(p+S)*w,i[7]=0,i[8]=(_+T)*b,i[9]=(p-S)*b,i[10]=(1-(f+g))*b,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;e.x=i[12],e.y=i[13],e.z=i[14];const s=this.determinant();if(s===0)return n.set(1,1,1),t.identity(),this;let a=ds.set(i[0],i[1],i[2]).length();const o=ds.set(i[4],i[5],i[6]).length(),l=ds.set(i[8],i[9],i[10]).length();s<0&&(a=-a),fi.copy(this);const c=1/a,u=1/o,d=1/l;return fi.elements[0]*=c,fi.elements[1]*=c,fi.elements[2]*=c,fi.elements[4]*=u,fi.elements[5]*=u,fi.elements[6]*=u,fi.elements[8]*=d,fi.elements[9]*=d,fi.elements[10]*=d,t.setFromRotationMatrix(fi),n.x=a,n.y=o,n.z=l,this}makePerspective(e,t,n,i,s,a,o=Di,l=!1){const c=this.elements,u=2*s/(t-e),d=2*s/(n-i),f=(t+e)/(t-e),h=(n+i)/(n-i);let _,g;if(l)_=s/(a-s),g=a*s/(a-s);else if(o===Di)_=-(a+s)/(a-s),g=-2*a*s/(a-s);else if(o===cl)_=-a/(a-s),g=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=d,c[9]=h,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,s,a,o=Di,l=!1){const c=this.elements,u=2/(t-e),d=2/(n-i),f=-(t+e)/(t-e),h=-(n+i)/(n-i);let _,g;if(l)_=1/(a-s),g=a/(a-s);else if(o===Di)_=-2/(a-s),g=-(a+s)/(a-s);else if(o===cl)_=-1/(a-s),g=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=d,c[9]=0,c[13]=h,c[2]=0,c[6]=0,c[10]=_,c[14]=g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const ds=new q,fi=new zt,Ng=new q(0,0,0),Og=new q(1,1,1),rr=new q,fo=new q,Bn=new q,_h=new zt,gh=new js;class tr{constructor(e=0,t=0,n=0,i=tr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],a=i[4],o=i[8],l=i[1],c=i[5],u=i[9],d=i[2],f=i[6],h=i[10];switch(t){case"XYZ":this._y=Math.asin(lt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,h),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-lt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,h),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(lt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,h),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-lt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,h),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(lt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,h));break;case"XZY":this._z=Math.asin(-lt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,h),this._y=0);break;default:qe("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return _h.makeRotationFromQuaternion(e),this.setFromRotationMatrix(_h,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return gh.setFromEuler(this),this.setFromQuaternion(gh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}tr.DEFAULT_ORDER="XYZ";class Xp{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Bg=0;const vh=new q,ps=new js,zi=new zt,ho=new q,ia=new q,zg=new q,kg=new js,xh=new q(1,0,0),Sh=new q(0,1,0),Mh=new q(0,0,1),yh={type:"added"},Vg={type:"removed"},ms={type:"childadded",child:null},ql={type:"childremoved",child:null};class Fn extends Zs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Bg++}),this.uuid=qa(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Fn.DEFAULT_UP.clone();const e=new q,t=new tr,n=new js,i=new q(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new zt},normalMatrix:{value:new et}}),this.matrix=new zt,this.matrixWorld=new zt,this.matrixAutoUpdate=Fn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Fn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Xp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ps.setFromAxisAngle(e,t),this.quaternion.multiply(ps),this}rotateOnWorldAxis(e,t){return ps.setFromAxisAngle(e,t),this.quaternion.premultiply(ps),this}rotateX(e){return this.rotateOnAxis(xh,e)}rotateY(e){return this.rotateOnAxis(Sh,e)}rotateZ(e){return this.rotateOnAxis(Mh,e)}translateOnAxis(e,t){return vh.copy(e).applyQuaternion(this.quaternion),this.position.add(vh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(xh,e)}translateY(e){return this.translateOnAxis(Sh,e)}translateZ(e){return this.translateOnAxis(Mh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(zi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ho.copy(e):ho.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),ia.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?zi.lookAt(ia,ho,this.up):zi.lookAt(ho,ia,this.up),this.quaternion.setFromRotationMatrix(zi),i&&(zi.extractRotation(i.matrixWorld),ps.setFromRotationMatrix(zi),this.quaternion.premultiply(ps.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(dt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(yh),ms.child=e,this.dispatchEvent(ms),ms.child=null):dt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Vg),ql.child=e,this.dispatchEvent(ql),ql.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),zi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),zi.multiply(e.parent.matrixWorld)),e.applyMatrix4(zi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(yh),ms.child=e,this.dispatchEvent(ms),ms.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ia,e,zg),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ia,kg,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,i=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*n-s[8]*i,s[13]+=n-s[1]*t-s[5]*n-s[9]*i,s[14]+=i-s[2]*t-s[6]*n-s[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),this.static!==!1&&(i.static=this.static),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));i.material=o}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),d=a(e.shapes),f=a(e.skeletons),h=a(e.animations),_=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),f.length>0&&(n.skeletons=f),h.length>0&&(n.animations=h),_.length>0&&(n.nodes=_)}return n.object=i,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),e.pivot!==null&&(this.pivot=e.pivot.clone()),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}Fn.DEFAULT_UP=new q(0,1,0);Fn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Fn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class po extends Fn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Gg={type:"move"};class $l{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new po,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new po,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new po,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new q),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const g of e.hand.values()){const p=t.getJointPose(g,n),m=this._getHandJoint(c,g);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=u.position.distanceTo(d.position),h=.02,_=.005;c.inputState.pinching&&f>h+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=h-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Gg)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new po;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Yp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},sr={h:0,s:0,l:0},mo={h:0,s:0,l:0};function Kl(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class pt{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ti){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ut.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=ut.workingColorSpace){return this.r=e,this.g=t,this.b=n,ut.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=ut.workingColorSpace){if(e=Rg(e,1),t=lt(t,0,1),n=lt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=Kl(a,s,e+1/3),this.g=Kl(a,s,e),this.b=Kl(a,s,e-1/3)}return ut.colorSpaceToWorking(this,i),this}setStyle(e,t=ti){function n(s){s!==void 0&&parseFloat(s)<1&&qe("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:qe("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);qe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ti){const n=Yp[e.toLowerCase()];return n!==void 0?this.setHex(n,t):qe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ji(e.r),this.g=ji(e.g),this.b=ji(e.b),this}copyLinearToSRGB(e){return this.r=Os(e.r),this.g=Os(e.g),this.b=Os(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ti){return ut.workingToColorSpace(hn.copy(this),e),Math.round(lt(hn.r*255,0,255))*65536+Math.round(lt(hn.g*255,0,255))*256+Math.round(lt(hn.b*255,0,255))}getHexString(e=ti){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ut.workingColorSpace){ut.workingToColorSpace(hn.copy(this),t);const n=hn.r,i=hn.g,s=hn.b,a=Math.max(n,i,s),o=Math.min(n,i,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const d=a-o;switch(c=u<=.5?d/(a+o):d/(2-a-o),a){case n:l=(i-s)/d+(i<s?6:0);break;case i:l=(s-n)/d+2;break;case s:l=(n-i)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=ut.workingColorSpace){return ut.workingToColorSpace(hn.copy(this),t),e.r=hn.r,e.g=hn.g,e.b=hn.b,e}getStyle(e=ti){ut.workingToColorSpace(hn.copy(this),e);const t=hn.r,n=hn.g,i=hn.b;return e!==ti?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(sr),this.setHSL(sr.h+e,sr.s+t,sr.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(sr),e.getHSL(mo);const n=Gl(sr.h,mo.h,t),i=Gl(sr.s,mo.s,t),s=Gl(sr.l,mo.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const hn=new pt;pt.NAMES=Yp;class Eh extends Fn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new tr,this.environmentIntensity=1,this.environmentRotation=new tr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const hi=new q,ki=new q,Zl=new q,Vi=new q,_s=new q,gs=new q,Th=new q,jl=new q,Jl=new q,Ql=new q,ec=new It,tc=new It,nc=new It;class _i{constructor(e=new q,t=new q,n=new q){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),hi.subVectors(e,t),i.cross(hi);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){hi.subVectors(i,t),ki.subVectors(n,t),Zl.subVectors(e,t);const a=hi.dot(hi),o=hi.dot(ki),l=hi.dot(Zl),c=ki.dot(ki),u=ki.dot(Zl),d=a*c-o*o;if(d===0)return s.set(0,0,0),null;const f=1/d,h=(c*l-o*u)*f,_=(a*u-o*l)*f;return s.set(1-h-_,_,h)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Vi)===null?!1:Vi.x>=0&&Vi.y>=0&&Vi.x+Vi.y<=1}static getInterpolation(e,t,n,i,s,a,o,l){return this.getBarycoord(e,t,n,i,Vi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Vi.x),l.addScaledVector(a,Vi.y),l.addScaledVector(o,Vi.z),l)}static getInterpolatedAttribute(e,t,n,i,s,a){return ec.setScalar(0),tc.setScalar(0),nc.setScalar(0),ec.fromBufferAttribute(e,t),tc.fromBufferAttribute(e,n),nc.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(ec,s.x),a.addScaledVector(tc,s.y),a.addScaledVector(nc,s.z),a}static isFrontFacing(e,t,n,i){return hi.subVectors(n,t),ki.subVectors(e,t),hi.cross(ki).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return hi.subVectors(this.c,this.b),ki.subVectors(this.a,this.b),hi.cross(ki).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return _i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return _i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return _i.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return _i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return _i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let a,o;_s.subVectors(i,n),gs.subVectors(s,n),jl.subVectors(e,n);const l=_s.dot(jl),c=gs.dot(jl);if(l<=0&&c<=0)return t.copy(n);Jl.subVectors(e,i);const u=_s.dot(Jl),d=gs.dot(Jl);if(u>=0&&d<=u)return t.copy(i);const f=l*d-u*c;if(f<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(n).addScaledVector(_s,a);Ql.subVectors(e,s);const h=_s.dot(Ql),_=gs.dot(Ql);if(_>=0&&h<=_)return t.copy(s);const g=h*c-l*_;if(g<=0&&c>=0&&_<=0)return o=c/(c-_),t.copy(n).addScaledVector(gs,o);const p=u*_-h*d;if(p<=0&&d-u>=0&&h-_>=0)return Th.subVectors(s,i),o=(d-u)/(d-u+(h-_)),t.copy(i).addScaledVector(Th,o);const m=1/(p+g+f);return a=g*m,o=f*m,t.copy(n).addScaledVector(_s,a).addScaledVector(gs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class $a{constructor(e=new q(1/0,1/0,1/0),t=new q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(di.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(di.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=di.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,di):di.fromBufferAttribute(s,a),di.applyMatrix4(e.matrixWorld),this.expandByPoint(di);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),_o.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),_o.copy(n.boundingBox)),_o.applyMatrix4(e.matrixWorld),this.union(_o)}const i=e.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,di),di.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ra),go.subVectors(this.max,ra),vs.subVectors(e.a,ra),xs.subVectors(e.b,ra),Ss.subVectors(e.c,ra),ar.subVectors(xs,vs),or.subVectors(Ss,xs),Pr.subVectors(vs,Ss);let t=[0,-ar.z,ar.y,0,-or.z,or.y,0,-Pr.z,Pr.y,ar.z,0,-ar.x,or.z,0,-or.x,Pr.z,0,-Pr.x,-ar.y,ar.x,0,-or.y,or.x,0,-Pr.y,Pr.x,0];return!ic(t,vs,xs,Ss,go)||(t=[1,0,0,0,1,0,0,0,1],!ic(t,vs,xs,Ss,go))?!1:(vo.crossVectors(ar,or),t=[vo.x,vo.y,vo.z],ic(t,vs,xs,Ss,go))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,di).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(di).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Gi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Gi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Gi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Gi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Gi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Gi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Gi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Gi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Gi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Gi=[new q,new q,new q,new q,new q,new q,new q,new q],di=new q,_o=new $a,vs=new q,xs=new q,Ss=new q,ar=new q,or=new q,Pr=new q,ra=new q,go=new q,vo=new q,Dr=new q;function ic(r,e,t,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){Dr.fromArray(r,s);const o=i.x*Math.abs(Dr.x)+i.y*Math.abs(Dr.y)+i.z*Math.abs(Dr.z),l=e.dot(Dr),c=t.dot(Dr),u=n.dot(Dr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const kt=new q,xo=new je;let Hg=0;class xi{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Hg++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=ch,this.updateRanges=[],this.gpuType=gi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)xo.fromBufferAttribute(this,t),xo.applyMatrix3(e),this.setXY(t,xo.x,xo.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.applyMatrix3(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.applyMatrix4(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.applyNormalMatrix(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.transformDirection(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=na(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Cn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=na(t,this.array)),t}setX(e,t){return this.normalized&&(t=Cn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=na(t,this.array)),t}setY(e,t){return this.normalized&&(t=Cn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=na(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Cn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=na(t,this.array)),t}setW(e,t){return this.normalized&&(t=Cn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Cn(t,this.array),n=Cn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Cn(t,this.array),n=Cn(n,this.array),i=Cn(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=Cn(t,this.array),n=Cn(n,this.array),i=Cn(i,this.array),s=Cn(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ch&&(e.usage=this.usage),e}}class qp extends xi{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class $p extends xi{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Si extends xi{constructor(e,t,n){super(new Float32Array(e),t,n)}}const Wg=new $a,sa=new q,rc=new q;class Sl{constructor(e=new q,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Wg.setFromPoints(e).getCenter(n);let i=0;for(let s=0,a=e.length;s<a;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;sa.subVectors(e,this.center);const t=sa.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(sa,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(rc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(sa.copy(e.center).add(rc)),this.expandByPoint(sa.copy(e.center).sub(rc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Xg=0;const Qn=new zt,sc=new Fn,Ms=new q,zn=new $a,aa=new $a,Qt=new q;class Mi extends Zs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Xg++}),this.uuid=qa(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(bg(e)?$p:qp)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new et().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Qn.makeRotationFromQuaternion(e),this.applyMatrix4(Qn),this}rotateX(e){return Qn.makeRotationX(e),this.applyMatrix4(Qn),this}rotateY(e){return Qn.makeRotationY(e),this.applyMatrix4(Qn),this}rotateZ(e){return Qn.makeRotationZ(e),this.applyMatrix4(Qn),this}translate(e,t,n){return Qn.makeTranslation(e,t,n),this.applyMatrix4(Qn),this}scale(e,t,n){return Qn.makeScale(e,t,n),this.applyMatrix4(Qn),this}lookAt(e){return sc.lookAt(e),sc.updateMatrix(),this.applyMatrix4(sc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ms).negate(),this.translate(Ms.x,Ms.y,Ms.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,s=e.length;i<s;i++){const a=e[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Si(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&qe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new $a);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){dt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new q(-1/0,-1/0,-1/0),new q(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];zn.setFromBufferAttribute(s),this.morphTargetsRelative?(Qt.addVectors(this.boundingBox.min,zn.min),this.boundingBox.expandByPoint(Qt),Qt.addVectors(this.boundingBox.max,zn.max),this.boundingBox.expandByPoint(Qt)):(this.boundingBox.expandByPoint(zn.min),this.boundingBox.expandByPoint(zn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&dt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Sl);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){dt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new q,1/0);return}if(e){const n=this.boundingSphere.center;if(zn.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];aa.setFromBufferAttribute(o),this.morphTargetsRelative?(Qt.addVectors(zn.min,aa.min),zn.expandByPoint(Qt),Qt.addVectors(zn.max,aa.max),zn.expandByPoint(Qt)):(zn.expandByPoint(aa.min),zn.expandByPoint(aa.max))}zn.getCenter(n);let i=0;for(let s=0,a=e.count;s<a;s++)Qt.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(Qt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Qt.fromBufferAttribute(o,c),l&&(Ms.fromBufferAttribute(e,c),Qt.add(Ms)),i=Math.max(i,n.distanceToSquared(Qt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&dt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){dt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new xi(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let v=0;v<n.count;v++)o[v]=new q,l[v]=new q;const c=new q,u=new q,d=new q,f=new je,h=new je,_=new je,g=new q,p=new q;function m(v,M,F){c.fromBufferAttribute(n,v),u.fromBufferAttribute(n,M),d.fromBufferAttribute(n,F),f.fromBufferAttribute(s,v),h.fromBufferAttribute(s,M),_.fromBufferAttribute(s,F),u.sub(c),d.sub(c),h.sub(f),_.sub(f);const R=1/(h.x*_.y-_.x*h.y);isFinite(R)&&(g.copy(u).multiplyScalar(_.y).addScaledVector(d,-h.y).multiplyScalar(R),p.copy(d).multiplyScalar(h.x).addScaledVector(u,-_.x).multiplyScalar(R),o[v].add(g),o[M].add(g),o[F].add(g),l[v].add(p),l[M].add(p),l[F].add(p))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let v=0,M=S.length;v<M;++v){const F=S[v],R=F.start,I=F.count;for(let z=R,H=R+I;z<H;z+=3)m(e.getX(z+0),e.getX(z+1),e.getX(z+2))}const T=new q,y=new q,A=new q,w=new q;function b(v){A.fromBufferAttribute(i,v),w.copy(A);const M=o[v];T.copy(M),T.sub(A.multiplyScalar(A.dot(M))).normalize(),y.crossVectors(w,M);const R=y.dot(l[v])<0?-1:1;a.setXYZW(v,T.x,T.y,T.z,R)}for(let v=0,M=S.length;v<M;++v){const F=S[v],R=F.start,I=F.count;for(let z=R,H=R+I;z<H;z+=3)b(e.getX(z+0)),b(e.getX(z+1)),b(e.getX(z+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new xi(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,h=n.count;f<h;f++)n.setXYZ(f,0,0,0);const i=new q,s=new q,a=new q,o=new q,l=new q,c=new q,u=new q,d=new q;if(e)for(let f=0,h=e.count;f<h;f+=3){const _=e.getX(f+0),g=e.getX(f+1),p=e.getX(f+2);i.fromBufferAttribute(t,_),s.fromBufferAttribute(t,g),a.fromBufferAttribute(t,p),u.subVectors(a,s),d.subVectors(i,s),u.cross(d),o.fromBufferAttribute(n,_),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,p),o.add(u),l.add(u),c.add(u),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,h=t.count;f<h;f+=3)i.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),u.subVectors(a,s),d.subVectors(i,s),u.cross(d),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Qt.fromBufferAttribute(e,t),Qt.normalize(),e.setXYZ(t,Qt.x,Qt.y,Qt.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,d=o.normalized,f=new c.constructor(l.length*u);let h=0,_=0;for(let g=0,p=l.length;g<p;g++){o.isInterleavedBufferAttribute?h=l[g]*o.data.stride+o.offset:h=l[g]*u;for(let m=0;m<u;m++)f[_++]=c[h++]}return new xi(f,u,d)}if(this.index===null)return qe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Mi,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=e(l,n);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,d=c.length;u<d;u++){const f=c[u],h=e(f,n);l.push(h)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,f=c.length;d<f;d++){const h=c[d];u.push(h.toJSON(e.data))}u.length>0&&(i[l]=u,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],d=s[c];for(let f=0,h=d.length;f<h;f++)u.push(d[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let Yg=0;class Ka extends Zs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Yg++}),this.uuid=qa(),this.name="",this.type="Material",this.blending=Ns,this.side=br,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Xc,this.blendDst=Yc,this.blendEquation=kr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new pt(0,0,0),this.blendAlpha=0,this.depthFunc=Xs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=lh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=fs,this.stencilZFail=fs,this.stencilZPass=fs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){qe(`Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){qe(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ns&&(n.blending=this.blending),this.side!==br&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Xc&&(n.blendSrc=this.blendSrc),this.blendDst!==Yc&&(n.blendDst=this.blendDst),this.blendEquation!==kr&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Xs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==lh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==fs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==fs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==fs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=i(e.textures),a=i(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Hi=new q,ac=new q,So=new q,lr=new q,oc=new q,Mo=new q,lc=new q;class Kp{constructor(e=new q,t=new q(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Hi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Hi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Hi.copy(this.origin).addScaledVector(this.direction,t),Hi.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){ac.copy(e).add(t).multiplyScalar(.5),So.copy(t).sub(e).normalize(),lr.copy(this.origin).sub(ac);const s=e.distanceTo(t)*.5,a=-this.direction.dot(So),o=lr.dot(this.direction),l=-lr.dot(So),c=lr.lengthSq(),u=Math.abs(1-a*a);let d,f,h,_;if(u>0)if(d=a*l-o,f=a*o-l,_=s*u,d>=0)if(f>=-_)if(f<=_){const g=1/u;d*=g,f*=g,h=d*(d+a*f+2*o)+f*(a*d+f+2*l)+c}else f=s,d=Math.max(0,-(a*f+o)),h=-d*d+f*(f+2*l)+c;else f=-s,d=Math.max(0,-(a*f+o)),h=-d*d+f*(f+2*l)+c;else f<=-_?(d=Math.max(0,-(-a*s+o)),f=d>0?-s:Math.min(Math.max(-s,-l),s),h=-d*d+f*(f+2*l)+c):f<=_?(d=0,f=Math.min(Math.max(-s,-l),s),h=f*(f+2*l)+c):(d=Math.max(0,-(a*s+o)),f=d>0?s:Math.min(Math.max(-s,-l),s),h=-d*d+f*(f+2*l)+c);else f=a>0?-s:s,d=Math.max(0,-(a*f+o)),h=-d*d+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(ac).addScaledVector(So,f),h}intersectSphere(e,t){Hi.subVectors(e.center,this.origin);const n=Hi.dot(this.direction),i=Hi.dot(Hi)-n*n,s=e.radius*e.radius;if(i>s)return null;const a=Math.sqrt(s-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,i=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,i=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,a=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,a=(e.min.y-f.y)*u),n>a||s>i||((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),d>=0?(o=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(o=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Hi)!==null}intersectTriangle(e,t,n,i,s){oc.subVectors(t,e),Mo.subVectors(n,e),lc.crossVectors(oc,Mo);let a=this.direction.dot(lc),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;lr.subVectors(this.origin,e);const l=o*this.direction.dot(Mo.crossVectors(lr,Mo));if(l<0)return null;const c=o*this.direction.dot(oc.cross(lr));if(c<0||l+c>a)return null;const u=-o*lr.dot(lc);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Zp extends Ka{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new pt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new tr,this.combine=wp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const bh=new zt,Lr=new Kp,yo=new Sl,Ah=new q,Eo=new q,To=new q,bo=new q,cc=new q,Ao=new q,wh=new q,wo=new q;class ci extends Fn{constructor(e=new Mi,t=new Zp){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(s&&o){Ao.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],d=s[l];u!==0&&(cc.fromBufferAttribute(d,e),a?Ao.addScaledVector(cc,u):Ao.addScaledVector(cc.sub(t),u))}t.add(Ao)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),yo.copy(n.boundingSphere),yo.applyMatrix4(s),Lr.copy(e.ray).recast(e.near),!(yo.containsPoint(Lr.origin)===!1&&(Lr.intersectSphere(yo,Ah)===null||Lr.origin.distanceToSquared(Ah)>(e.far-e.near)**2))&&(bh.copy(s).invert(),Lr.copy(e.ray).applyMatrix4(bh),!(n.boundingBox!==null&&Lr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Lr)))}_computeIntersections(e,t,n){let i;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,f=s.groups,h=s.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,g=f.length;_<g;_++){const p=f[_],m=a[p.materialIndex],S=Math.max(p.start,h.start),T=Math.min(o.count,Math.min(p.start+p.count,h.start+h.count));for(let y=S,A=T;y<A;y+=3){const w=o.getX(y),b=o.getX(y+1),v=o.getX(y+2);i=Co(this,m,e,n,c,u,d,w,b,v),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{const _=Math.max(0,h.start),g=Math.min(o.count,h.start+h.count);for(let p=_,m=g;p<m;p+=3){const S=o.getX(p),T=o.getX(p+1),y=o.getX(p+2);i=Co(this,a,e,n,c,u,d,S,T,y),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,g=f.length;_<g;_++){const p=f[_],m=a[p.materialIndex],S=Math.max(p.start,h.start),T=Math.min(l.count,Math.min(p.start+p.count,h.start+h.count));for(let y=S,A=T;y<A;y+=3){const w=y,b=y+1,v=y+2;i=Co(this,m,e,n,c,u,d,w,b,v),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{const _=Math.max(0,h.start),g=Math.min(l.count,h.start+h.count);for(let p=_,m=g;p<m;p+=3){const S=p,T=p+1,y=p+2;i=Co(this,a,e,n,c,u,d,S,T,y),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}}}function qg(r,e,t,n,i,s,a,o){let l;if(e.side===Un?l=n.intersectTriangle(a,s,i,!0,o):l=n.intersectTriangle(i,s,a,e.side===br,o),l===null)return null;wo.copy(o),wo.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(wo);return c<t.near||c>t.far?null:{distance:c,point:wo.clone(),object:r}}function Co(r,e,t,n,i,s,a,o,l,c){r.getVertexPosition(o,Eo),r.getVertexPosition(l,To),r.getVertexPosition(c,bo);const u=qg(r,e,t,n,Eo,To,bo,wh);if(u){const d=new q;_i.getBarycoord(wh,Eo,To,bo,d),i&&(u.uv=_i.getInterpolatedAttribute(i,o,l,c,d,new je)),s&&(u.uv1=_i.getInterpolatedAttribute(s,o,l,c,d,new je)),a&&(u.normal=_i.getInterpolatedAttribute(a,o,l,c,d,new q),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new q,materialIndex:0};_i.getNormal(Eo,To,bo,f.normal),u.face=f,u.barycoord=d}return u}class jp extends wn{constructor(e=null,t=1,n=1,i,s,a,o,l,c=an,u=an,d,f){super(null,a,o,l,c,u,i,s,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const uc=new q,$g=new q,Kg=new et;class zr{constructor(e=new q(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=uc.subVectors(n,t).cross($g.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(uc),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Kg.getNormalMatrix(e),i=this.coplanarPoint(uc).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ir=new Sl,Zg=new je(.5,.5),Ro=new q;class Jp{constructor(e=new zr,t=new zr,n=new zr,i=new zr,s=new zr,a=new zr){this.planes=[e,t,n,i,s,a]}set(e,t,n,i,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Di,n=!1){const i=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],c=s[3],u=s[4],d=s[5],f=s[6],h=s[7],_=s[8],g=s[9],p=s[10],m=s[11],S=s[12],T=s[13],y=s[14],A=s[15];if(i[0].setComponents(c-a,h-u,m-_,A-S).normalize(),i[1].setComponents(c+a,h+u,m+_,A+S).normalize(),i[2].setComponents(c+o,h+d,m+g,A+T).normalize(),i[3].setComponents(c-o,h-d,m-g,A-T).normalize(),n)i[4].setComponents(l,f,p,y).normalize(),i[5].setComponents(c-l,h-f,m-p,A-y).normalize();else if(i[4].setComponents(c-l,h-f,m-p,A-y).normalize(),t===Di)i[5].setComponents(c+l,h+f,m+p,A+y).normalize();else if(t===cl)i[5].setComponents(l,f,p,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ir.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ir.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ir)}intersectsSprite(e){Ir.center.set(0,0,0);const t=Zg.distanceTo(e.center);return Ir.radius=.7071067811865476+t,Ir.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ir)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Ro.x=i.normal.x>0?e.max.x:e.min.x,Ro.y=i.normal.y>0?e.max.y:e.min.y,Ro.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Ro)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class jg extends Ka{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new pt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const hl=new q,dl=new q,Ch=new zt,oa=new Kp,Po=new Sl,fc=new q,Rh=new q;class Jg extends Fn{constructor(e=new Mi,t=new jg){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)hl.fromBufferAttribute(t,i-1),dl.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=hl.distanceTo(dl);e.setAttribute("lineDistance",new Si(n,1))}else qe("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Po.copy(n.boundingSphere),Po.applyMatrix4(i),Po.radius+=s,e.ray.intersectsSphere(Po)===!1)return;Ch.copy(i).invert(),oa.copy(e.ray).applyMatrix4(Ch);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=n.index,f=n.attributes.position;if(u!==null){const h=Math.max(0,a.start),_=Math.min(u.count,a.start+a.count);for(let g=h,p=_-1;g<p;g+=c){const m=u.getX(g),S=u.getX(g+1),T=Do(this,e,oa,l,m,S,g);T&&t.push(T)}if(this.isLineLoop){const g=u.getX(_-1),p=u.getX(h),m=Do(this,e,oa,l,g,p,_-1);m&&t.push(m)}}else{const h=Math.max(0,a.start),_=Math.min(f.count,a.start+a.count);for(let g=h,p=_-1;g<p;g+=c){const m=Do(this,e,oa,l,g,g+1,g);m&&t.push(m)}if(this.isLineLoop){const g=Do(this,e,oa,l,_-1,h,_-1);g&&t.push(g)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Do(r,e,t,n,i,s,a){const o=r.geometry.attributes.position;if(hl.fromBufferAttribute(o,i),dl.fromBufferAttribute(o,s),t.distanceSqToSegment(hl,dl,fc,Rh)>n)return;fc.applyMatrix4(r.matrixWorld);const c=e.ray.origin.distanceTo(fc);if(!(c<e.near||c>e.far))return{distance:c,point:Rh.clone().applyMatrix4(r.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:r}}const Ph=new q,Dh=new q;class Qg extends Jg{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)Ph.fromBufferAttribute(t,i),Dh.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Ph.distanceTo(Dh);e.setAttribute("lineDistance",new Si(n,1))}else qe("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Qp extends wn{constructor(e=[],t=is,n,i,s,a,o,l,c,u){super(e,t,n,i,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Wa extends wn{constructor(e,t,n=Fi,i,s,a,o=an,l=an,c,u=er,d=1){if(u!==er&&u!==Xr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:t,depth:d};super(f,i,s,a,o,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Mf(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class e0 extends Wa{constructor(e,t=Fi,n=is,i,s,a=an,o=an,l,c=er){const u={width:e,height:e,depth:1},d=[u,u,u,u,u,u];super(e,e,t,n,i,s,a,o,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class em extends wn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Za extends Mi{constructor(e=1,t=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};const o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],d=[];let f=0,h=0;_("z","y","x",-1,-1,n,t,e,a,s,0),_("z","y","x",1,-1,n,t,-e,a,s,1),_("x","z","y",1,1,e,n,t,i,a,2),_("x","z","y",1,-1,e,n,-t,i,a,3),_("x","y","z",1,-1,e,t,n,i,s,4),_("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new Si(c,3)),this.setAttribute("normal",new Si(u,3)),this.setAttribute("uv",new Si(d,2));function _(g,p,m,S,T,y,A,w,b,v,M){const F=y/b,R=A/v,I=y/2,z=A/2,H=w/2,k=b+1,G=v+1;let U=0,Q=0;const ee=new q;for(let D=0;D<G;D++){const ce=D*R-z;for(let fe=0;fe<k;fe++){const Fe=fe*F-I;ee[g]=Fe*S,ee[p]=ce*T,ee[m]=H,c.push(ee.x,ee.y,ee.z),ee[g]=0,ee[p]=0,ee[m]=w>0?1:-1,u.push(ee.x,ee.y,ee.z),d.push(fe/b),d.push(1-D/v),U+=1}}for(let D=0;D<v;D++)for(let ce=0;ce<b;ce++){const fe=f+ce+k*D,Fe=f+ce+k*(D+1),He=f+(ce+1)+k*(D+1),Ke=f+(ce+1)+k*D;l.push(fe,Fe,Ke),l.push(Fe,He,Ke),Q+=6}o.addGroup(h,Q,M),h+=Q,f+=U}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Za(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Qr extends Mi{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,u=l+1,d=e/o,f=t/l,h=[],_=[],g=[],p=[];for(let m=0;m<u;m++){const S=m*f-a;for(let T=0;T<c;T++){const y=T*d-s;_.push(y,-S,0),g.push(0,0,1),p.push(T/o),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let S=0;S<o;S++){const T=S+c*m,y=S+c*(m+1),A=S+1+c*(m+1),w=S+1+c*m;h.push(T,y,w),h.push(y,A,w)}this.setIndex(h),this.setAttribute("position",new Si(_,3)),this.setAttribute("normal",new Si(g,3)),this.setAttribute("uv",new Si(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qr(e.width,e.height,e.widthSegments,e.heightSegments)}}function Ks(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(qe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Mn(r){const e={};for(let t=0;t<r.length;t++){const n=Ks(r[t]);for(const i in n)e[i]=n[i]}return e}function t0(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function tm(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ut.workingColorSpace}const n0={clone:Ks,merge:Mn};var i0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,r0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Oi extends Ka{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=i0,this.fragmentShader=r0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ks(e.uniforms),this.uniformsGroups=t0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class va extends Oi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class s0 extends Ka{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=_g,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class a0 extends Ka{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Lo=new q,Io=new js,Ei=new q;class pl extends Fn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new zt,this.projectionMatrix=new zt,this.projectionMatrixInverse=new zt,this.coordinateSystem=Di,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Lo,Io,Ei),Ei.x===1&&Ei.y===1&&Ei.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Lo,Io,Ei.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(Lo,Io,Ei),Ei.x===1&&Ei.y===1&&Ei.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Lo,Io,Ei.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const cr=new q,Lh=new je,Ih=new je;class mi extends pl{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Uu*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Vl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Uu*2*Math.atan(Math.tan(Vl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){cr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(cr.x,cr.y).multiplyScalar(-e/cr.z),cr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(cr.x,cr.y).multiplyScalar(-e/cr.z)}getViewSize(e,t){return this.getViewBounds(e,Lh,Ih),t.subVectors(Ih,Lh)}setViewOffset(e,t,n,i,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Vl*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class nm extends pl{constructor(e=-1,t=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const ys=-90,Es=1;class o0 extends Fn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new mi(ys,Es,e,t);i.layers=this.layers,this.add(i);const s=new mi(ys,Es,e,t);s.layers=this.layers,this.add(s);const a=new mi(ys,Es,e,t);a.layers=this.layers,this.add(a);const o=new mi(ys,Es,e,t);o.layers=this.layers,this.add(o);const l=new mi(ys,Es,e,t);l.layers=this.layers,this.add(l);const c=new mi(ys,Es,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===Di)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===cl)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let p=!1;e.isWebGLRenderer===!0?p=e.state.buffers.depth.getReversed():p=e.reversedDepthBuffer,e.setRenderTarget(n,0,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,1,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=g,e.setRenderTarget(n,5,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(d,f,h),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class l0 extends mi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class c0{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,qe("THREE.Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Uh(r,e,t,n){const i=u0(n);switch(t){case kp:return r*e;case Gp:return r*e/i.components*i.byteLength;case _f:return r*e/i.components*i.byteLength;case qs:return r*e*2/i.components*i.byteLength;case gf:return r*e*2/i.components*i.byteLength;case Vp:return r*e*3/i.components*i.byteLength;case oi:return r*e*4/i.components*i.byteLength;case vf:return r*e*4/i.components*i.byteLength;case Yo:case qo:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case $o:case Ko:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case iu:case su:return Math.max(r,16)*Math.max(e,8)/4;case nu:case ru:return Math.max(r,8)*Math.max(e,8)/2;case au:case ou:case cu:case uu:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case lu:case fu:case hu:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case du:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case pu:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case mu:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case _u:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case gu:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case vu:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case xu:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case Su:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case Mu:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case yu:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case Eu:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case Tu:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case bu:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case Au:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case wu:case Cu:case Ru:return Math.ceil(r/4)*Math.ceil(e/4)*16;case Pu:case Du:return Math.ceil(r/4)*Math.ceil(e/4)*8;case Lu:case Iu:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function u0(r){switch(r){case ri:case Np:return{byteLength:1,components:1};case Ga:case Op:case Ni:return{byteLength:2,components:1};case pf:case mf:return{byteLength:2,components:4};case Fi:case df:case gi:return{byteLength:4,components:1};case Bp:case zp:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:hf}}));typeof window<"u"&&(window.__THREE__?qe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=hf);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function im(){let r=null,e=!1,t=null,n=null;function i(s,a){t(s,a),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function f0(r){const e=new WeakMap;function t(o,l){const c=o.array,u=o.usage,d=c.byteLength,f=r.createBuffer();r.bindBuffer(l,f),r.bufferData(l,c,u),o.onUploadCallback();let h;if(c instanceof Float32Array)h=r.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)h=r.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?h=r.HALF_FLOAT:h=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)h=r.SHORT;else if(c instanceof Uint32Array)h=r.UNSIGNED_INT;else if(c instanceof Int32Array)h=r.INT;else if(c instanceof Int8Array)h=r.BYTE;else if(c instanceof Uint8Array)h=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)h=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:h,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,c){const u=l.array,d=l.updateRanges;if(r.bindBuffer(c,o),d.length===0)r.bufferSubData(c,0,u);else{d.sort((h,_)=>h.start-_.start);let f=0;for(let h=1;h<d.length;h++){const _=d[f],g=d[h];g.start<=_.start+_.count+1?_.count=Math.max(_.count,g.start+g.count-_.start):(++f,d[f]=g)}d.length=f+1;for(let h=0,_=d.length;h<_;h++){const g=d[h];r.bufferSubData(c,g.start*u.BYTES_PER_ELEMENT,u,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(r.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:s,update:a}}var h0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,d0=`#ifdef USE_ALPHAHASH
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
#endif`,p0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,m0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,g0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,v0=`#ifdef USE_AOMAP
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
#endif`,x0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,S0=`#ifdef USE_BATCHING
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
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,M0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,y0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,E0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,T0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,b0=`#ifdef USE_IRIDESCENCE
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
#endif`,A0=`#ifdef USE_BUMPMAP
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
#endif`,w0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,C0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,R0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,P0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,D0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,L0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,I0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,U0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,F0=`#define PI 3.141592653589793
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
} // validated`,N0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,O0=`vec3 transformedNormal = objectNormal;
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
#endif`,B0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,z0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,k0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,V0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,G0="gl_FragColor = linearToOutputTexel( gl_FragColor );",H0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,W0=`#ifdef USE_ENVMAP
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
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,X0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Y0=`#ifdef USE_ENVMAP
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
#endif`,q0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,$0=`#ifdef USE_ENVMAP
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
#endif`,K0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Z0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,j0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,J0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Q0=`#ifdef USE_GRADIENTMAP
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
}`,ev=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,tv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,nv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,iv=`uniform bool receiveShadow;
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
#endif`,rv=`#ifdef USE_ENVMAP
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
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
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
#endif`,sv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,av=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ov=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,cv=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
#endif`,uv=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
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
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
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
		return v;
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
	vec3 f0 = material.specularColorBlended;
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
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
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
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
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,fv=`
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
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
#endif`,hv=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
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
#endif`,dv=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,pv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,mv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_v=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,vv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,xv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Sv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Mv=`#if defined( USE_POINTS_UV )
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
#endif`,yv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ev=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Tv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,bv=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Av=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,wv=`#ifdef USE_MORPHTARGETS
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
#endif`,Cv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Rv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Pv=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Dv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Lv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Iv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Uv=`#ifdef USE_NORMALMAP
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
#endif`,Fv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Nv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ov=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Bv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,zv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,kv=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Vv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Gv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Hv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Wv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Xv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Yv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,qv=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
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
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,$v=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Kv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Zv=`float getShadowMask() {
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
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
}`,jv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Jv=`#ifdef USE_SKINNING
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
#endif`,Qv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ex=`#ifdef USE_SKINNING
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
#endif`,tx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,nx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ix=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,rx=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,sx=`#ifdef USE_TRANSMISSION
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
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,ax=`#ifdef USE_TRANSMISSION
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
#endif`,ox=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,lx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,cx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ux=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const fx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,hx=`uniform sampler2D t2D;
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
}`,dx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,px=`#ifdef ENVMAP_TYPE_CUBE
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
}`,mx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_x=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gx=`#include <common>
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
}`,vx=`#if DEPTH_PACKING == 3200
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
}`,xx=`#define DISTANCE
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
}`,Sx=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
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
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Mx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,yx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ex=`uniform float scale;
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
}`,Tx=`uniform vec3 diffuse;
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
}`,bx=`#include <common>
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
}`,Ax=`uniform vec3 diffuse;
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
}`,wx=`#define LAMBERT
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
}`,Cx=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,Rx=`#define MATCAP
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
}`,Px=`#define MATCAP
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
}`,Dx=`#define NORMAL
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
}`,Lx=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
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
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Ix=`#define PHONG
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
}`,Ux=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,Fx=`#define STANDARD
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
}`,Nx=`#define STANDARD
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
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
}`,Ox=`#define TOON
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
}`,Bx=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
}`,zx=`uniform float size;
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
}`,kx=`uniform vec3 diffuse;
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
}`,Vx=`#include <common>
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
}`,Gx=`uniform vec3 color;
uniform float opacity;
#include <common>
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
	#include <premultiplied_alpha_fragment>
}`,Hx=`uniform float rotation;
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
}`,Wx=`uniform vec3 diffuse;
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
}`,tt={alphahash_fragment:h0,alphahash_pars_fragment:d0,alphamap_fragment:p0,alphamap_pars_fragment:m0,alphatest_fragment:_0,alphatest_pars_fragment:g0,aomap_fragment:v0,aomap_pars_fragment:x0,batching_pars_vertex:S0,batching_vertex:M0,begin_vertex:y0,beginnormal_vertex:E0,bsdfs:T0,iridescence_fragment:b0,bumpmap_pars_fragment:A0,clipping_planes_fragment:w0,clipping_planes_pars_fragment:C0,clipping_planes_pars_vertex:R0,clipping_planes_vertex:P0,color_fragment:D0,color_pars_fragment:L0,color_pars_vertex:I0,color_vertex:U0,common:F0,cube_uv_reflection_fragment:N0,defaultnormal_vertex:O0,displacementmap_pars_vertex:B0,displacementmap_vertex:z0,emissivemap_fragment:k0,emissivemap_pars_fragment:V0,colorspace_fragment:G0,colorspace_pars_fragment:H0,envmap_fragment:W0,envmap_common_pars_fragment:X0,envmap_pars_fragment:Y0,envmap_pars_vertex:q0,envmap_physical_pars_fragment:rv,envmap_vertex:$0,fog_vertex:K0,fog_pars_vertex:Z0,fog_fragment:j0,fog_pars_fragment:J0,gradientmap_pars_fragment:Q0,lightmap_pars_fragment:ev,lights_lambert_fragment:tv,lights_lambert_pars_fragment:nv,lights_pars_begin:iv,lights_toon_fragment:sv,lights_toon_pars_fragment:av,lights_phong_fragment:ov,lights_phong_pars_fragment:lv,lights_physical_fragment:cv,lights_physical_pars_fragment:uv,lights_fragment_begin:fv,lights_fragment_maps:hv,lights_fragment_end:dv,logdepthbuf_fragment:pv,logdepthbuf_pars_fragment:mv,logdepthbuf_pars_vertex:_v,logdepthbuf_vertex:gv,map_fragment:vv,map_pars_fragment:xv,map_particle_fragment:Sv,map_particle_pars_fragment:Mv,metalnessmap_fragment:yv,metalnessmap_pars_fragment:Ev,morphinstance_vertex:Tv,morphcolor_vertex:bv,morphnormal_vertex:Av,morphtarget_pars_vertex:wv,morphtarget_vertex:Cv,normal_fragment_begin:Rv,normal_fragment_maps:Pv,normal_pars_fragment:Dv,normal_pars_vertex:Lv,normal_vertex:Iv,normalmap_pars_fragment:Uv,clearcoat_normal_fragment_begin:Fv,clearcoat_normal_fragment_maps:Nv,clearcoat_pars_fragment:Ov,iridescence_pars_fragment:Bv,opaque_fragment:zv,packing:kv,premultiplied_alpha_fragment:Vv,project_vertex:Gv,dithering_fragment:Hv,dithering_pars_fragment:Wv,roughnessmap_fragment:Xv,roughnessmap_pars_fragment:Yv,shadowmap_pars_fragment:qv,shadowmap_pars_vertex:$v,shadowmap_vertex:Kv,shadowmask_pars_fragment:Zv,skinbase_vertex:jv,skinning_pars_vertex:Jv,skinning_vertex:Qv,skinnormal_vertex:ex,specularmap_fragment:tx,specularmap_pars_fragment:nx,tonemapping_fragment:ix,tonemapping_pars_fragment:rx,transmission_fragment:sx,transmission_pars_fragment:ax,uv_pars_fragment:ox,uv_pars_vertex:lx,uv_vertex:cx,worldpos_vertex:ux,background_vert:fx,background_frag:hx,backgroundCube_vert:dx,backgroundCube_frag:px,cube_vert:mx,cube_frag:_x,depth_vert:gx,depth_frag:vx,distance_vert:xx,distance_frag:Sx,equirect_vert:Mx,equirect_frag:yx,linedashed_vert:Ex,linedashed_frag:Tx,meshbasic_vert:bx,meshbasic_frag:Ax,meshlambert_vert:wx,meshlambert_frag:Cx,meshmatcap_vert:Rx,meshmatcap_frag:Px,meshnormal_vert:Dx,meshnormal_frag:Lx,meshphong_vert:Ix,meshphong_frag:Ux,meshphysical_vert:Fx,meshphysical_frag:Nx,meshtoon_vert:Ox,meshtoon_frag:Bx,points_vert:zx,points_frag:kx,shadow_vert:Vx,shadow_frag:Gx,sprite_vert:Hx,sprite_frag:Wx},ve={common:{diffuse:{value:new pt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new et},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new et}},envmap:{envMap:{value:null},envMapRotation:{value:new et},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new et}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new et}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new et},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new et},normalScale:{value:new je(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new et},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new et}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new et}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new et}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new pt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new pt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0},uvTransform:{value:new et}},sprite:{diffuse:{value:new pt(16777215)},opacity:{value:1},center:{value:new je(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new et},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0}}},wi={basic:{uniforms:Mn([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.fog]),vertexShader:tt.meshbasic_vert,fragmentShader:tt.meshbasic_frag},lambert:{uniforms:Mn([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new pt(0)},envMapIntensity:{value:1}}]),vertexShader:tt.meshlambert_vert,fragmentShader:tt.meshlambert_frag},phong:{uniforms:Mn([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new pt(0)},specular:{value:new pt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:tt.meshphong_vert,fragmentShader:tt.meshphong_frag},standard:{uniforms:Mn([ve.common,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.roughnessmap,ve.metalnessmap,ve.fog,ve.lights,{emissive:{value:new pt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:tt.meshphysical_vert,fragmentShader:tt.meshphysical_frag},toon:{uniforms:Mn([ve.common,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.gradientmap,ve.fog,ve.lights,{emissive:{value:new pt(0)}}]),vertexShader:tt.meshtoon_vert,fragmentShader:tt.meshtoon_frag},matcap:{uniforms:Mn([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,{matcap:{value:null}}]),vertexShader:tt.meshmatcap_vert,fragmentShader:tt.meshmatcap_frag},points:{uniforms:Mn([ve.points,ve.fog]),vertexShader:tt.points_vert,fragmentShader:tt.points_frag},dashed:{uniforms:Mn([ve.common,ve.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:tt.linedashed_vert,fragmentShader:tt.linedashed_frag},depth:{uniforms:Mn([ve.common,ve.displacementmap]),vertexShader:tt.depth_vert,fragmentShader:tt.depth_frag},normal:{uniforms:Mn([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,{opacity:{value:1}}]),vertexShader:tt.meshnormal_vert,fragmentShader:tt.meshnormal_frag},sprite:{uniforms:Mn([ve.sprite,ve.fog]),vertexShader:tt.sprite_vert,fragmentShader:tt.sprite_frag},background:{uniforms:{uvTransform:{value:new et},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:tt.background_vert,fragmentShader:tt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new et}},vertexShader:tt.backgroundCube_vert,fragmentShader:tt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:tt.cube_vert,fragmentShader:tt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:tt.equirect_vert,fragmentShader:tt.equirect_frag},distance:{uniforms:Mn([ve.common,ve.displacementmap,{referencePosition:{value:new q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:tt.distance_vert,fragmentShader:tt.distance_frag},shadow:{uniforms:Mn([ve.lights,ve.fog,{color:{value:new pt(0)},opacity:{value:1}}]),vertexShader:tt.shadow_vert,fragmentShader:tt.shadow_frag}};wi.physical={uniforms:Mn([wi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new et},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new et},clearcoatNormalScale:{value:new je(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new et},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new et},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new et},sheen:{value:0},sheenColor:{value:new pt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new et},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new et},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new et},transmissionSamplerSize:{value:new je},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new et},attenuationDistance:{value:0},attenuationColor:{value:new pt(0)},specularColor:{value:new pt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new et},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new et},anisotropyVector:{value:new je},anisotropyMap:{value:null},anisotropyMapTransform:{value:new et}}]),vertexShader:tt.meshphysical_vert,fragmentShader:tt.meshphysical_frag};const Uo={r:0,b:0,g:0},Ur=new tr,Xx=new zt;function Yx(r,e,t,n,i,s){const a=new pt(0);let o=i===!0?0:1,l,c,u=null,d=0,f=null;function h(S){let T=S.isScene===!0?S.background:null;if(T&&T.isTexture){const y=S.backgroundBlurriness>0;T=e.get(T,y)}return T}function _(S){let T=!1;const y=h(S);y===null?p(a,o):y&&y.isColor&&(p(y,1),T=!0);const A=r.xr.getEnvironmentBlendMode();A==="additive"?t.buffers.color.setClear(0,0,0,1,s):A==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(r.autoClear||T)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function g(S,T){const y=h(T);y&&(y.isCubeTexture||y.mapping===xl)?(c===void 0&&(c=new ci(new Za(1,1,1),new Oi({name:"BackgroundCubeMaterial",uniforms:Ks(wi.backgroundCube.uniforms),vertexShader:wi.backgroundCube.vertexShader,fragmentShader:wi.backgroundCube.fragmentShader,side:Un,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(A,w,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),Ur.copy(T.backgroundRotation),Ur.x*=-1,Ur.y*=-1,Ur.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Ur.y*=-1,Ur.z*=-1),c.material.uniforms.envMap.value=y,c.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Xx.makeRotationFromEuler(Ur)),c.material.toneMapped=ut.getTransfer(y.colorSpace)!==vt,(u!==y||d!==y.version||f!==r.toneMapping)&&(c.material.needsUpdate=!0,u=y,d=y.version,f=r.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new ci(new Qr(2,2),new Oi({name:"BackgroundMaterial",uniforms:Ks(wi.background.uniforms),vertexShader:wi.background.vertexShader,fragmentShader:wi.background.fragmentShader,side:br,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,l.material.toneMapped=ut.getTransfer(y.colorSpace)!==vt,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||d!==y.version||f!==r.toneMapping)&&(l.material.needsUpdate=!0,u=y,d=y.version,f=r.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null))}function p(S,T){S.getRGB(Uo,tm(r)),t.buffers.color.setClear(Uo.r,Uo.g,Uo.b,T,s)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(S,T=1){a.set(S),o=T,p(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(S){o=S,p(a,o)},render:_,addToRenderList:g,dispose:m}}function qx(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=f(null);let s=i,a=!1;function o(R,I,z,H,k){let G=!1;const U=d(R,H,z,I);s!==U&&(s=U,c(s.object)),G=h(R,H,z,k),G&&_(R,H,z,k),k!==null&&e.update(k,r.ELEMENT_ARRAY_BUFFER),(G||a)&&(a=!1,y(R,I,z,H),k!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(k).buffer))}function l(){return r.createVertexArray()}function c(R){return r.bindVertexArray(R)}function u(R){return r.deleteVertexArray(R)}function d(R,I,z,H){const k=H.wireframe===!0;let G=n[I.id];G===void 0&&(G={},n[I.id]=G);const U=R.isInstancedMesh===!0?R.id:0;let Q=G[U];Q===void 0&&(Q={},G[U]=Q);let ee=Q[z.id];ee===void 0&&(ee={},Q[z.id]=ee);let D=ee[k];return D===void 0&&(D=f(l()),ee[k]=D),D}function f(R){const I=[],z=[],H=[];for(let k=0;k<t;k++)I[k]=0,z[k]=0,H[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:z,attributeDivisors:H,object:R,attributes:{},index:null}}function h(R,I,z,H){const k=s.attributes,G=I.attributes;let U=0;const Q=z.getAttributes();for(const ee in Q)if(Q[ee].location>=0){const ce=k[ee];let fe=G[ee];if(fe===void 0&&(ee==="instanceMatrix"&&R.instanceMatrix&&(fe=R.instanceMatrix),ee==="instanceColor"&&R.instanceColor&&(fe=R.instanceColor)),ce===void 0||ce.attribute!==fe||fe&&ce.data!==fe.data)return!0;U++}return s.attributesNum!==U||s.index!==H}function _(R,I,z,H){const k={},G=I.attributes;let U=0;const Q=z.getAttributes();for(const ee in Q)if(Q[ee].location>=0){let ce=G[ee];ce===void 0&&(ee==="instanceMatrix"&&R.instanceMatrix&&(ce=R.instanceMatrix),ee==="instanceColor"&&R.instanceColor&&(ce=R.instanceColor));const fe={};fe.attribute=ce,ce&&ce.data&&(fe.data=ce.data),k[ee]=fe,U++}s.attributes=k,s.attributesNum=U,s.index=H}function g(){const R=s.newAttributes;for(let I=0,z=R.length;I<z;I++)R[I]=0}function p(R){m(R,0)}function m(R,I){const z=s.newAttributes,H=s.enabledAttributes,k=s.attributeDivisors;z[R]=1,H[R]===0&&(r.enableVertexAttribArray(R),H[R]=1),k[R]!==I&&(r.vertexAttribDivisor(R,I),k[R]=I)}function S(){const R=s.newAttributes,I=s.enabledAttributes;for(let z=0,H=I.length;z<H;z++)I[z]!==R[z]&&(r.disableVertexAttribArray(z),I[z]=0)}function T(R,I,z,H,k,G,U){U===!0?r.vertexAttribIPointer(R,I,z,k,G):r.vertexAttribPointer(R,I,z,H,k,G)}function y(R,I,z,H){g();const k=H.attributes,G=z.getAttributes(),U=I.defaultAttributeValues;for(const Q in G){const ee=G[Q];if(ee.location>=0){let D=k[Q];if(D===void 0&&(Q==="instanceMatrix"&&R.instanceMatrix&&(D=R.instanceMatrix),Q==="instanceColor"&&R.instanceColor&&(D=R.instanceColor)),D!==void 0){const ce=D.normalized,fe=D.itemSize,Fe=e.get(D);if(Fe===void 0)continue;const He=Fe.buffer,Ke=Fe.type,K=Fe.bytesPerElement,ne=Ke===r.INT||Ke===r.UNSIGNED_INT||D.gpuType===df;if(D.isInterleavedBufferAttribute){const re=D.data,Le=re.stride,Ie=D.offset;if(re.isInstancedInterleavedBuffer){for(let De=0;De<ee.locationSize;De++)m(ee.location+De,re.meshPerAttribute);R.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let De=0;De<ee.locationSize;De++)p(ee.location+De);r.bindBuffer(r.ARRAY_BUFFER,He);for(let De=0;De<ee.locationSize;De++)T(ee.location+De,fe/ee.locationSize,Ke,ce,Le*K,(Ie+fe/ee.locationSize*De)*K,ne)}else{if(D.isInstancedBufferAttribute){for(let re=0;re<ee.locationSize;re++)m(ee.location+re,D.meshPerAttribute);R.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=D.meshPerAttribute*D.count)}else for(let re=0;re<ee.locationSize;re++)p(ee.location+re);r.bindBuffer(r.ARRAY_BUFFER,He);for(let re=0;re<ee.locationSize;re++)T(ee.location+re,fe/ee.locationSize,Ke,ce,fe*K,fe/ee.locationSize*re*K,ne)}}else if(U!==void 0){const ce=U[Q];if(ce!==void 0)switch(ce.length){case 2:r.vertexAttrib2fv(ee.location,ce);break;case 3:r.vertexAttrib3fv(ee.location,ce);break;case 4:r.vertexAttrib4fv(ee.location,ce);break;default:r.vertexAttrib1fv(ee.location,ce)}}}}S()}function A(){M();for(const R in n){const I=n[R];for(const z in I){const H=I[z];for(const k in H){const G=H[k];for(const U in G)u(G[U].object),delete G[U];delete H[k]}}delete n[R]}}function w(R){if(n[R.id]===void 0)return;const I=n[R.id];for(const z in I){const H=I[z];for(const k in H){const G=H[k];for(const U in G)u(G[U].object),delete G[U];delete H[k]}}delete n[R.id]}function b(R){for(const I in n){const z=n[I];for(const H in z){const k=z[H];if(k[R.id]===void 0)continue;const G=k[R.id];for(const U in G)u(G[U].object),delete G[U];delete k[R.id]}}}function v(R){for(const I in n){const z=n[I],H=R.isInstancedMesh===!0?R.id:0,k=z[H];if(k!==void 0){for(const G in k){const U=k[G];for(const Q in U)u(U[Q].object),delete U[Q];delete k[G]}delete z[H],Object.keys(z).length===0&&delete n[I]}}}function M(){F(),a=!0,s!==i&&(s=i,c(s.object))}function F(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:M,resetDefaultState:F,dispose:A,releaseStatesOfGeometry:w,releaseStatesOfObject:v,releaseStatesOfProgram:b,initAttributes:g,enableAttribute:p,disableUnusedAttributes:S}}function $x(r,e,t){let n;function i(c){n=c}function s(c,u){r.drawArrays(n,c,u),t.update(u,n,1)}function a(c,u,d){d!==0&&(r.drawArraysInstanced(n,c,u,d),t.update(u,n,d))}function o(c,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,d);let h=0;for(let _=0;_<d;_++)h+=u[_];t.update(h,n,1)}function l(c,u,d,f){if(d===0)return;const h=e.get("WEBGL_multi_draw");if(h===null)for(let _=0;_<c.length;_++)a(c[_],u[_],f[_]);else{h.multiDrawArraysInstancedWEBGL(n,c,0,u,0,f,0,d);let _=0;for(let g=0;g<d;g++)_+=u[g]*f[g];t.update(_,n,1)}}this.setMode=i,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Kx(r,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const b=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(b){return!(b!==oi&&n.convert(b)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(b){const v=b===Ni&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(b!==ri&&n.convert(b)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&b!==gi&&!v)}function l(b){if(b==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(qe("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),h=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_TEXTURE_SIZE),p=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),m=r.getParameter(r.MAX_VERTEX_ATTRIBS),S=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),T=r.getParameter(r.MAX_VARYING_VECTORS),y=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),A=r.getParameter(r.MAX_SAMPLES),w=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:h,maxVertexTextures:_,maxTextureSize:g,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:S,maxVaryings:T,maxFragmentUniforms:y,maxSamples:A,samples:w}}function Zx(r){const e=this;let t=null,n=0,i=!1,s=!1;const a=new zr,o=new et,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const h=d.length!==0||f||n!==0||i;return i=f,n=d.length,h},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,f){t=u(d,f,0)},this.setState=function(d,f,h){const _=d.clippingPlanes,g=d.clipIntersection,p=d.clipShadows,m=r.get(d);if(!i||_===null||_.length===0||s&&!p)s?u(null):c();else{const S=s?0:n,T=S*4;let y=m.clippingState||null;l.value=y,y=u(_,f,T,h);for(let A=0;A!==T;++A)y[A]=t[A];m.clippingState=y,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(d,f,h,_){const g=d!==null?d.length:0;let p=null;if(g!==0){if(p=l.value,_!==!0||p===null){const m=h+g*4,S=f.matrixWorldInverse;o.getNormalMatrix(S),(p===null||p.length<m)&&(p=new Float32Array(m));for(let T=0,y=h;T!==g;++T,y+=4)a.copy(d[T]).applyMatrix4(S,o),a.normal.toArray(p,y),p[y+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,p}}const gr=4,Fh=[.125,.215,.35,.446,.526,.582],Vr=20,jx=256,la=new nm,Nh=new pt;let hc=null,dc=0,pc=0,mc=!1;const Jx=new q;class Oh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,i=100,s={}){const{size:a=256,position:o=Jx}=s;hc=this._renderer.getRenderTarget(),dc=this._renderer.getActiveCubeFace(),pc=this._renderer.getActiveMipmapLevel(),mc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,i,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=kh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=zh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(hc,dc,pc),this._renderer.xr.enabled=mc,e.scissorTest=!1,Ts(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===is||e.mapping===Ys?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),hc=this._renderer.getRenderTarget(),dc=this._renderer.getActiveCubeFace(),pc=this._renderer.getActiveMipmapLevel(),mc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Ht,minFilter:Ht,generateMipmaps:!1,type:Ni,format:oi,colorSpace:$s,depthBuffer:!1},i=Bh(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Bh(e,t,n);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Qx(s)),this._blurMaterial=tS(s,e,t),this._ggxMaterial=eS(s,e,t)}return i}_compileMaterial(e){const t=new ci(new Mi,e);this._renderer.compile(t,la)}_sceneToCubeUV(e,t,n,i,s){const l=new mi(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,h=d.toneMapping;d.getClearColor(Nh),d.toneMapping=Ii,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(i),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ci(new Za,new Zp({name:"PMREM.Background",side:Un,depthWrite:!1,depthTest:!1})));const g=this._backgroundBox,p=g.material;let m=!1;const S=e.background;S?S.isColor&&(p.color.copy(S),e.background=null,m=!0):(p.color.copy(Nh),m=!0);for(let T=0;T<6;T++){const y=T%3;y===0?(l.up.set(0,c[T],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[T],s.y,s.z)):y===1?(l.up.set(0,0,c[T]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[T],s.z)):(l.up.set(0,c[T],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[T]));const A=this._cubeSize;Ts(i,y*A,T>2?A:0,A,A),d.setRenderTarget(i),m&&d.render(g,l),d.render(e,l)}d.toneMapping=h,d.autoClear=f,e.background=S}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===is||e.mapping===Ys;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=kh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=zh());const s=i?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;Ts(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,la)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodMeshes.length;for(let s=1;s<i;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=n}_applyGGXFilter(e,t,n){const i=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;const l=a.uniforms,c=n/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),d=Math.sqrt(c*c-u*u),f=0+c*1.25,h=d*f,{_lodMax:_}=this,g=this._sizeLods[n],p=3*g*(n>_-gr?n-_+gr:0),m=4*(this._cubeSize-g);l.envMap.value=e.texture,l.roughness.value=h,l.mipInt.value=_-t,Ts(s,p,m,3*g,2*g),i.setRenderTarget(s),i.render(o,la),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=_-n,Ts(e,p,m,3*g,2*g),i.setRenderTarget(e),i.render(o,la)}_blur(e,t,n,i,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",s),this._halfBlur(a,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&dt("blur direction must be either latitudinal or longitudinal!");const u=3,d=this._lodMeshes[i];d.material=c;const f=c.uniforms,h=this._sizeLods[n]-1,_=isFinite(s)?Math.PI/(2*h):2*Math.PI/(2*Vr-1),g=s/_,p=isFinite(s)?1+Math.floor(u*g):Vr;p>Vr&&qe(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Vr}`);const m=[];let S=0;for(let b=0;b<Vr;++b){const v=b/g,M=Math.exp(-v*v/2);m.push(M),b===0?S+=M:b<p&&(S+=2*M)}for(let b=0;b<m.length;b++)m[b]=m[b]/S;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=m,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:T}=this;f.dTheta.value=_,f.mipInt.value=T-n;const y=this._sizeLods[i],A=3*y*(i>T-gr?i-T+gr:0),w=4*(this._cubeSize-y);Ts(t,A,w,3*y,2*y),l.setRenderTarget(t),l.render(d,la)}}function Qx(r){const e=[],t=[],n=[];let i=r;const s=r-gr+1+Fh.length;for(let a=0;a<s;a++){const o=Math.pow(2,i);e.push(o);let l=1/o;a>r-gr?l=Fh[a-r+gr-1]:a===0&&(l=0),t.push(l);const c=1/(o-2),u=-c,d=1+c,f=[u,u,d,u,d,d,u,u,d,d,u,d],h=6,_=6,g=3,p=2,m=1,S=new Float32Array(g*_*h),T=new Float32Array(p*_*h),y=new Float32Array(m*_*h);for(let w=0;w<h;w++){const b=w%3*2/3-1,v=w>2?0:-1,M=[b,v,0,b+2/3,v,0,b+2/3,v+1,0,b,v,0,b+2/3,v+1,0,b,v+1,0];S.set(M,g*_*w),T.set(f,p*_*w);const F=[w,w,w,w,w,w];y.set(F,m*_*w)}const A=new Mi;A.setAttribute("position",new xi(S,g)),A.setAttribute("uv",new xi(T,p)),A.setAttribute("faceIndex",new xi(y,m)),n.push(new ci(A,null)),i>gr&&i--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function Bh(r,e,t){const n=new vi(r,e,t);return n.texture.mapping=xl,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ts(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function eS(r,e,t){return new Oi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:jx,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Ml(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Zi,depthTest:!1,depthWrite:!1})}function tS(r,e,t){const n=new Float32Array(Vr),i=new q(0,1,0);return new Oi({name:"SphericalGaussianBlur",defines:{n:Vr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Ml(),fragmentShader:`

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
		`,blending:Zi,depthTest:!1,depthWrite:!1})}function zh(){return new Oi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ml(),fragmentShader:`

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
		`,blending:Zi,depthTest:!1,depthWrite:!1})}function kh(){return new Oi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ml(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Zi,depthTest:!1,depthWrite:!1})}function Ml(){return`

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
	`}class rm extends vi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Qp(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Za(5,5,5),s=new Oi({name:"CubemapFromEquirect",uniforms:Ks(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Un,blending:Zi});s.uniforms.tEquirect.value=t;const a=new ci(i,s),o=t.minFilter;return t.minFilter===Wr&&(t.minFilter=Ht),new o0(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(s)}}function nS(r){let e=new WeakMap,t=new WeakMap,n=null;function i(f,h=!1){return f==null?null:h?a(f):s(f)}function s(f){if(f&&f.isTexture){const h=f.mapping;if(h===Bl||h===zl)if(e.has(f)){const _=e.get(f).texture;return o(_,f.mapping)}else{const _=f.image;if(_&&_.height>0){const g=new rm(_.height);return g.fromEquirectangularTexture(r,f),e.set(f,g),f.addEventListener("dispose",c),o(g.texture,f.mapping)}else return null}}return f}function a(f){if(f&&f.isTexture){const h=f.mapping,_=h===Bl||h===zl,g=h===is||h===Ys;if(_||g){let p=t.get(f);const m=p!==void 0?p.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==m)return n===null&&(n=new Oh(r)),p=_?n.fromEquirectangular(f,p):n.fromCubemap(f,p),p.texture.pmremVersion=f.pmremVersion,t.set(f,p),p.texture;if(p!==void 0)return p.texture;{const S=f.image;return _&&S&&S.height>0||g&&S&&l(S)?(n===null&&(n=new Oh(r)),p=_?n.fromEquirectangular(f):n.fromCubemap(f),p.texture.pmremVersion=f.pmremVersion,t.set(f,p),f.addEventListener("dispose",u),p.texture):null}}}return f}function o(f,h){return h===Bl?f.mapping=is:h===zl&&(f.mapping=Ys),f}function l(f){let h=0;const _=6;for(let g=0;g<_;g++)f[g]!==void 0&&h++;return h===_}function c(f){const h=f.target;h.removeEventListener("dispose",c);const _=e.get(h);_!==void 0&&(e.delete(h),_.dispose())}function u(f){const h=f.target;h.removeEventListener("dispose",u);const _=t.get(h);_!==void 0&&(t.delete(h),_.dispose())}function d(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:d}}function iS(r){const e={};function t(n){if(e[n]!==void 0)return e[n];const i=r.getExtension(n);return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&fl("WebGLRenderer: "+n+" extension not supported."),i}}}function rS(r,e,t,n){const i={},s=new WeakMap;function a(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const _ in f.attributes)e.remove(f.attributes[_]);f.removeEventListener("dispose",a),delete i[f.id];const h=s.get(f);h&&(e.remove(h),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(d,f){return i[f.id]===!0||(f.addEventListener("dispose",a),i[f.id]=!0,t.memory.geometries++),f}function l(d){const f=d.attributes;for(const h in f)e.update(f[h],r.ARRAY_BUFFER)}function c(d){const f=[],h=d.index,_=d.attributes.position;let g=0;if(_===void 0)return;if(h!==null){const S=h.array;g=h.version;for(let T=0,y=S.length;T<y;T+=3){const A=S[T+0],w=S[T+1],b=S[T+2];f.push(A,w,w,b,b,A)}}else{const S=_.array;g=_.version;for(let T=0,y=S.length/3-1;T<y;T+=3){const A=T+0,w=T+1,b=T+2;f.push(A,w,w,b,b,A)}}const p=new(_.count>=65535?$p:qp)(f,1);p.version=g;const m=s.get(d);m&&e.remove(m),s.set(d,p)}function u(d){const f=s.get(d);if(f){const h=d.index;h!==null&&f.version<h.version&&c(d)}else c(d);return s.get(d)}return{get:o,update:l,getWireframeAttribute:u}}function sS(r,e,t){let n;function i(f){n=f}let s,a;function o(f){s=f.type,a=f.bytesPerElement}function l(f,h){r.drawElements(n,h,s,f*a),t.update(h,n,1)}function c(f,h,_){_!==0&&(r.drawElementsInstanced(n,h,s,f*a,_),t.update(h,n,_))}function u(f,h,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,s,f,0,_);let p=0;for(let m=0;m<_;m++)p+=h[m];t.update(p,n,1)}function d(f,h,_,g){if(_===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<f.length;m++)c(f[m]/a,h[m],g[m]);else{p.multiDrawElementsInstancedWEBGL(n,h,0,s,f,0,g,0,_);let m=0;for(let S=0;S<_;S++)m+=h[S]*g[S];t.update(m,n,1)}}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function aS(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case r.TRIANGLES:t.triangles+=o*(s/3);break;case r.LINES:t.lines+=o*(s/2);break;case r.LINE_STRIP:t.lines+=o*(s-1);break;case r.LINE_LOOP:t.lines+=o*s;break;case r.POINTS:t.points+=o*s;break;default:dt("WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function oS(r,e,t){const n=new WeakMap,i=new It;function s(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u!==void 0?u.length:0;let f=n.get(o);if(f===void 0||f.count!==d){let F=function(){v.dispose(),n.delete(o),o.removeEventListener("dispose",F)};var h=F;f!==void 0&&f.texture.dispose();const _=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,p=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],S=o.morphAttributes.normal||[],T=o.morphAttributes.color||[];let y=0;_===!0&&(y=1),g===!0&&(y=2),p===!0&&(y=3);let A=o.attributes.position.count*y,w=1;A>e.maxTextureSize&&(w=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const b=new Float32Array(A*w*4*d),v=new Wp(b,A,w,d);v.type=gi,v.needsUpdate=!0;const M=y*4;for(let R=0;R<d;R++){const I=m[R],z=S[R],H=T[R],k=A*w*4*R;for(let G=0;G<I.count;G++){const U=G*M;_===!0&&(i.fromBufferAttribute(I,G),b[k+U+0]=i.x,b[k+U+1]=i.y,b[k+U+2]=i.z,b[k+U+3]=0),g===!0&&(i.fromBufferAttribute(z,G),b[k+U+4]=i.x,b[k+U+5]=i.y,b[k+U+6]=i.z,b[k+U+7]=0),p===!0&&(i.fromBufferAttribute(H,G),b[k+U+8]=i.x,b[k+U+9]=i.y,b[k+U+10]=i.z,b[k+U+11]=H.itemSize===4?i.w:1)}}f={count:d,texture:v,size:new je(A,w)},n.set(o,f),o.addEventListener("dispose",F)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",a.morphTexture,t);else{let _=0;for(let p=0;p<c.length;p++)_+=c[p];const g=o.morphTargetsRelative?1:1-_;l.getUniforms().setValue(r,"morphTargetBaseInfluence",g),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(r,"morphTargetsTextureSize",f.size)}return{update:s}}function lS(r,e,t,n,i){let s=new WeakMap;function a(c){const u=i.render.frame,d=c.geometry,f=e.get(c,d);if(s.get(f)!==u&&(e.update(f),s.set(f,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==u&&(t.update(c.instanceMatrix,r.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,r.ARRAY_BUFFER),s.set(c,u))),c.isSkinnedMesh){const h=c.skeleton;s.get(h)!==u&&(h.update(),s.set(h,u))}return f}function o(){s=new WeakMap}function l(c){const u=c.target;u.removeEventListener("dispose",l),n.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:a,dispose:o}}const cS={[Cp]:"LINEAR_TONE_MAPPING",[Rp]:"REINHARD_TONE_MAPPING",[Pp]:"CINEON_TONE_MAPPING",[Dp]:"ACES_FILMIC_TONE_MAPPING",[Ip]:"AGX_TONE_MAPPING",[Up]:"NEUTRAL_TONE_MAPPING",[Lp]:"CUSTOM_TONE_MAPPING"};function uS(r,e,t,n,i){const s=new vi(e,t,{type:r,depthBuffer:n,stencilBuffer:i}),a=new vi(e,t,{type:Ni,depthBuffer:!1,stencilBuffer:!1}),o=new Mi;o.setAttribute("position",new Si([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new Si([0,2,0,0,2,0],2));const l=new va({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),c=new ci(o,l),u=new nm(-1,1,1,-1,0,1);let d=null,f=null,h=!1,_,g=null,p=[],m=!1;this.setSize=function(S,T){s.setSize(S,T),a.setSize(S,T);for(let y=0;y<p.length;y++){const A=p[y];A.setSize&&A.setSize(S,T)}},this.setEffects=function(S){p=S,m=p.length>0&&p[0].isRenderPass===!0;const T=s.width,y=s.height;for(let A=0;A<p.length;A++){const w=p[A];w.setSize&&w.setSize(T,y)}},this.begin=function(S,T){if(h||S.toneMapping===Ii&&p.length===0)return!1;if(g=T,T!==null){const y=T.width,A=T.height;(s.width!==y||s.height!==A)&&this.setSize(y,A)}return m===!1&&S.setRenderTarget(s),_=S.toneMapping,S.toneMapping=Ii,!0},this.hasRenderPass=function(){return m},this.end=function(S,T){S.toneMapping=_,h=!0;let y=s,A=a;for(let w=0;w<p.length;w++){const b=p[w];if(b.enabled!==!1&&(b.render(S,A,y,T),b.needsSwap!==!1)){const v=y;y=A,A=v}}if(d!==S.outputColorSpace||f!==S.toneMapping){d=S.outputColorSpace,f=S.toneMapping,l.defines={},ut.getTransfer(d)===vt&&(l.defines.SRGB_TRANSFER="");const w=cS[f];w&&(l.defines[w]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=y.texture,S.setRenderTarget(g),S.render(c,u),g=null,h=!1},this.isCompositing=function(){return h},this.dispose=function(){s.dispose(),a.dispose(),o.dispose(),l.dispose()}}const sm=new wn,Fu=new Wa(1,1),am=new Wp,om=new Fg,lm=new Qp,Vh=[],Gh=[],Hh=new Float32Array(16),Wh=new Float32Array(9),Xh=new Float32Array(4);function Js(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=Vh[i];if(s===void 0&&(s=new Float32Array(i),Vh[i]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,r[a].toArray(s,o)}return s}function Kt(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function Zt(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function yl(r,e){let t=Gh[e];t===void 0&&(t=new Int32Array(e),Gh[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function fS(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function hS(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Kt(t,e))return;r.uniform2fv(this.addr,e),Zt(t,e)}}function dS(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Kt(t,e))return;r.uniform3fv(this.addr,e),Zt(t,e)}}function pS(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Kt(t,e))return;r.uniform4fv(this.addr,e),Zt(t,e)}}function mS(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Kt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),Zt(t,e)}else{if(Kt(t,n))return;Xh.set(n),r.uniformMatrix2fv(this.addr,!1,Xh),Zt(t,n)}}function _S(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Kt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),Zt(t,e)}else{if(Kt(t,n))return;Wh.set(n),r.uniformMatrix3fv(this.addr,!1,Wh),Zt(t,n)}}function gS(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Kt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),Zt(t,e)}else{if(Kt(t,n))return;Hh.set(n),r.uniformMatrix4fv(this.addr,!1,Hh),Zt(t,n)}}function vS(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function xS(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Kt(t,e))return;r.uniform2iv(this.addr,e),Zt(t,e)}}function SS(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Kt(t,e))return;r.uniform3iv(this.addr,e),Zt(t,e)}}function MS(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Kt(t,e))return;r.uniform4iv(this.addr,e),Zt(t,e)}}function yS(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function ES(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Kt(t,e))return;r.uniform2uiv(this.addr,e),Zt(t,e)}}function TS(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Kt(t,e))return;r.uniform3uiv(this.addr,e),Zt(t,e)}}function bS(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Kt(t,e))return;r.uniform4uiv(this.addr,e),Zt(t,e)}}function AS(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(Fu.compareFunction=t.isReversedDepthBuffer()?Sf:xf,s=Fu):s=sm,t.setTexture2D(e||s,i)}function wS(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||om,i)}function CS(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||lm,i)}function RS(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||am,i)}function PS(r){switch(r){case 5126:return fS;case 35664:return hS;case 35665:return dS;case 35666:return pS;case 35674:return mS;case 35675:return _S;case 35676:return gS;case 5124:case 35670:return vS;case 35667:case 35671:return xS;case 35668:case 35672:return SS;case 35669:case 35673:return MS;case 5125:return yS;case 36294:return ES;case 36295:return TS;case 36296:return bS;case 35678:case 36198:case 36298:case 36306:case 35682:return AS;case 35679:case 36299:case 36307:return wS;case 35680:case 36300:case 36308:case 36293:return CS;case 36289:case 36303:case 36311:case 36292:return RS}}function DS(r,e){r.uniform1fv(this.addr,e)}function LS(r,e){const t=Js(e,this.size,2);r.uniform2fv(this.addr,t)}function IS(r,e){const t=Js(e,this.size,3);r.uniform3fv(this.addr,t)}function US(r,e){const t=Js(e,this.size,4);r.uniform4fv(this.addr,t)}function FS(r,e){const t=Js(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function NS(r,e){const t=Js(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function OS(r,e){const t=Js(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function BS(r,e){r.uniform1iv(this.addr,e)}function zS(r,e){r.uniform2iv(this.addr,e)}function kS(r,e){r.uniform3iv(this.addr,e)}function VS(r,e){r.uniform4iv(this.addr,e)}function GS(r,e){r.uniform1uiv(this.addr,e)}function HS(r,e){r.uniform2uiv(this.addr,e)}function WS(r,e){r.uniform3uiv(this.addr,e)}function XS(r,e){r.uniform4uiv(this.addr,e)}function YS(r,e,t){const n=this.cache,i=e.length,s=yl(t,i);Kt(n,s)||(r.uniform1iv(this.addr,s),Zt(n,s));let a;this.type===r.SAMPLER_2D_SHADOW?a=Fu:a=sm;for(let o=0;o!==i;++o)t.setTexture2D(e[o]||a,s[o])}function qS(r,e,t){const n=this.cache,i=e.length,s=yl(t,i);Kt(n,s)||(r.uniform1iv(this.addr,s),Zt(n,s));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||om,s[a])}function $S(r,e,t){const n=this.cache,i=e.length,s=yl(t,i);Kt(n,s)||(r.uniform1iv(this.addr,s),Zt(n,s));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||lm,s[a])}function KS(r,e,t){const n=this.cache,i=e.length,s=yl(t,i);Kt(n,s)||(r.uniform1iv(this.addr,s),Zt(n,s));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||am,s[a])}function ZS(r){switch(r){case 5126:return DS;case 35664:return LS;case 35665:return IS;case 35666:return US;case 35674:return FS;case 35675:return NS;case 35676:return OS;case 5124:case 35670:return BS;case 35667:case 35671:return zS;case 35668:case 35672:return kS;case 35669:case 35673:return VS;case 5125:return GS;case 36294:return HS;case 36295:return WS;case 36296:return XS;case 35678:case 36198:case 36298:case 36306:case 35682:return YS;case 35679:case 36299:case 36307:return qS;case 35680:case 36300:case 36308:case 36293:return $S;case 36289:case 36303:case 36311:case 36292:return KS}}class jS{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=PS(t.type)}}class JS{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=ZS(t.type)}}class QS{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,a=i.length;s!==a;++s){const o=i[s];o.setValue(e,t[o.id],n)}}}const _c=/(\w+)(\])?(\[|\.)?/g;function Yh(r,e){r.seq.push(e),r.map[e.id]=e}function eM(r,e,t){const n=r.name,i=n.length;for(_c.lastIndex=0;;){const s=_c.exec(n),a=_c.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){Yh(t,c===void 0?new jS(o,r,e):new JS(o,r,e));break}else{let d=t.map[o];d===void 0&&(d=new QS(o),Yh(t,d)),t=d}}}class Zo{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);eM(o,l,this)}const i=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?i.push(a):s.push(a);i.length>0&&(this.seq=i.concat(s))}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function qh(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const tM=37297;let nM=0;function iM(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=i;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const $h=new et;function rM(r){ut._getMatrix($h,ut.workingColorSpace,r);const e=`mat3( ${$h.elements.map(t=>t.toFixed(4))} )`;switch(ut.getTransfer(r)){case ll:return[e,"LinearTransferOETF"];case vt:return[e,"sRGBTransferOETF"];default:return qe("WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function Kh(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),s=(r.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+iM(r.getShaderSource(e),o)}else return s}function sM(r,e){const t=rM(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const aM={[Cp]:"Linear",[Rp]:"Reinhard",[Pp]:"Cineon",[Dp]:"ACESFilmic",[Ip]:"AgX",[Up]:"Neutral",[Lp]:"Custom"};function oM(r,e){const t=aM[e];return t===void 0?(qe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Fo=new q;function lM(){ut.getLuminanceCoefficients(Fo);const r=Fo.x.toFixed(4),e=Fo.y.toFixed(4),t=Fo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function cM(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(xa).join(`
`)}function uM(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function fM(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),a=s.name;let o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:r.getAttribLocation(e,a),locationSize:o}}return t}function xa(r){return r!==""}function Zh(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function jh(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const hM=/^[ \t]*#include +<([\w\d./]+)>/gm;function Nu(r){return r.replace(hM,pM)}const dM=new Map;function pM(r,e){let t=tt[e];if(t===void 0){const n=dM.get(e);if(n!==void 0)t=tt[n],qe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Nu(t)}const mM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Jh(r){return r.replace(mM,_M)}function _M(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Qh(r){let e=`precision ${r.precision} float;
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
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const gM={[Xo]:"SHADOWMAP_TYPE_PCF",[ga]:"SHADOWMAP_TYPE_VSM"};function vM(r){return gM[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const xM={[is]:"ENVMAP_TYPE_CUBE",[Ys]:"ENVMAP_TYPE_CUBE",[xl]:"ENVMAP_TYPE_CUBE_UV"};function SM(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":xM[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const MM={[Ys]:"ENVMAP_MODE_REFRACTION"};function yM(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":MM[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const EM={[wp]:"ENVMAP_BLENDING_MULTIPLY",[dg]:"ENVMAP_BLENDING_MIX",[pg]:"ENVMAP_BLENDING_ADD"};function TM(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":EM[r.combine]||"ENVMAP_BLENDING_NONE"}function bM(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function AM(r,e,t,n){const i=r.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=vM(t),c=SM(t),u=yM(t),d=TM(t),f=bM(t),h=cM(t),_=uM(s),g=i.createProgram();let p,m,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(xa).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(xa).join(`
`),m.length>0&&(m+=`
`)):(p=[Qh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(xa).join(`
`),m=[Qh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ii?"#define TONE_MAPPING":"",t.toneMapping!==Ii?tt.tonemapping_pars_fragment:"",t.toneMapping!==Ii?oM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",tt.colorspace_pars_fragment,sM("linearToOutputTexel",t.outputColorSpace),lM(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(xa).join(`
`)),a=Nu(a),a=Zh(a,t),a=jh(a,t),o=Nu(o),o=Zh(o,t),o=jh(o,t),a=Jh(a),o=Jh(o),t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,p=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",t.glslVersion===uh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===uh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const T=S+p+a,y=S+m+o,A=qh(i,i.VERTEX_SHADER,T),w=qh(i,i.FRAGMENT_SHADER,y);i.attachShader(g,A),i.attachShader(g,w),t.index0AttributeName!==void 0?i.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g);function b(R){if(r.debug.checkShaderErrors){const I=i.getProgramInfoLog(g)||"",z=i.getShaderInfoLog(A)||"",H=i.getShaderInfoLog(w)||"",k=I.trim(),G=z.trim(),U=H.trim();let Q=!0,ee=!0;if(i.getProgramParameter(g,i.LINK_STATUS)===!1)if(Q=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,g,A,w);else{const D=Kh(i,A,"vertex"),ce=Kh(i,w,"fragment");dt("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,i.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+k+`
`+D+`
`+ce)}else k!==""?qe("WebGLProgram: Program Info Log:",k):(G===""||U==="")&&(ee=!1);ee&&(R.diagnostics={runnable:Q,programLog:k,vertexShader:{log:G,prefix:p},fragmentShader:{log:U,prefix:m}})}i.deleteShader(A),i.deleteShader(w),v=new Zo(i,g),M=fM(i,g)}let v;this.getUniforms=function(){return v===void 0&&b(this),v};let M;this.getAttributes=function(){return M===void 0&&b(this),M};let F=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return F===!1&&(F=i.getProgramParameter(g,tM)),F},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=nM++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=A,this.fragmentShader=w,this}let wM=0;class CM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new RM(e),t.set(e,n)),n}}class RM{constructor(e){this.id=wM++,this.code=e,this.usedTimes=0}}function PM(r,e,t,n,i,s){const a=new Xp,o=new CM,l=new Set,c=[],u=new Map,d=n.logarithmicDepthBuffer;let f=n.precision;const h={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(v){return l.add(v),v===0?"uv":`uv${v}`}function g(v,M,F,R,I){const z=R.fog,H=I.geometry,k=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?R.environment:null,G=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,U=e.get(v.envMap||k,G),Q=U&&U.mapping===xl?U.image.height:null,ee=h[v.type];v.precision!==null&&(f=n.getMaxPrecision(v.precision),f!==v.precision&&qe("WebGLProgram.getParameters:",v.precision,"not supported, using",f,"instead."));const D=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,ce=D!==void 0?D.length:0;let fe=0;H.morphAttributes.position!==void 0&&(fe=1),H.morphAttributes.normal!==void 0&&(fe=2),H.morphAttributes.color!==void 0&&(fe=3);let Fe,He,Ke,K;if(ee){const Se=wi[ee];Fe=Se.vertexShader,He=Se.fragmentShader}else Fe=v.vertexShader,He=v.fragmentShader,o.update(v),Ke=o.getVertexShaderID(v),K=o.getFragmentShaderID(v);const ne=r.getRenderTarget(),re=r.state.buffers.depth.getReversed(),Le=I.isInstancedMesh===!0,Ie=I.isBatchedMesh===!0,De=!!v.map,ot=!!v.matcap,Ee=!!U,Me=!!v.aoMap,V=!!v.lightMap,te=!!v.bumpMap,O=!!v.normalMap,P=!!v.displacementMap,We=!!v.emissiveMap,Ge=!!v.metalnessMap,Ve=!!v.roughnessMap,ye=v.anisotropy>0,C=v.clearcoat>0,x=v.dispersion>0,N=v.iridescence>0,j=v.sheen>0,J=v.transmission>0,$=ye&&!!v.anisotropyMap,xe=C&&!!v.clearcoatMap,le=C&&!!v.clearcoatNormalMap,Ue=C&&!!v.clearcoatRoughnessMap,Te=N&&!!v.iridescenceMap,se=N&&!!v.iridescenceThicknessMap,oe=j&&!!v.sheenColorMap,be=j&&!!v.sheenRoughnessMap,we=!!v.specularMap,pe=!!v.specularColorMap,Xe=!!v.specularIntensityMap,L=J&&!!v.transmissionMap,ue=J&&!!v.thicknessMap,ae=!!v.gradientMap,me=!!v.alphaMap,ie=v.alphaTest>0,Z=!!v.alphaHash,Ae=!!v.extensions;let ze=Ii;v.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(ze=r.toneMapping);const ft={shaderID:ee,shaderType:v.type,shaderName:v.name,vertexShader:Fe,fragmentShader:He,defines:v.defines,customVertexShaderID:Ke,customFragmentShaderID:K,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:f,batching:Ie,batchingColor:Ie&&I._colorsTexture!==null,instancing:Le,instancingColor:Le&&I.instanceColor!==null,instancingMorph:Le&&I.morphTexture!==null,outputColorSpace:ne===null?r.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:$s,alphaToCoverage:!!v.alphaToCoverage,map:De,matcap:ot,envMap:Ee,envMapMode:Ee&&U.mapping,envMapCubeUVHeight:Q,aoMap:Me,lightMap:V,bumpMap:te,normalMap:O,displacementMap:P,emissiveMap:We,normalMapObjectSpace:O&&v.normalMapType===vg,normalMapTangentSpace:O&&v.normalMapType===gg,metalnessMap:Ge,roughnessMap:Ve,anisotropy:ye,anisotropyMap:$,clearcoat:C,clearcoatMap:xe,clearcoatNormalMap:le,clearcoatRoughnessMap:Ue,dispersion:x,iridescence:N,iridescenceMap:Te,iridescenceThicknessMap:se,sheen:j,sheenColorMap:oe,sheenRoughnessMap:be,specularMap:we,specularColorMap:pe,specularIntensityMap:Xe,transmission:J,transmissionMap:L,thicknessMap:ue,gradientMap:ae,opaque:v.transparent===!1&&v.blending===Ns&&v.alphaToCoverage===!1,alphaMap:me,alphaTest:ie,alphaHash:Z,combine:v.combine,mapUv:De&&_(v.map.channel),aoMapUv:Me&&_(v.aoMap.channel),lightMapUv:V&&_(v.lightMap.channel),bumpMapUv:te&&_(v.bumpMap.channel),normalMapUv:O&&_(v.normalMap.channel),displacementMapUv:P&&_(v.displacementMap.channel),emissiveMapUv:We&&_(v.emissiveMap.channel),metalnessMapUv:Ge&&_(v.metalnessMap.channel),roughnessMapUv:Ve&&_(v.roughnessMap.channel),anisotropyMapUv:$&&_(v.anisotropyMap.channel),clearcoatMapUv:xe&&_(v.clearcoatMap.channel),clearcoatNormalMapUv:le&&_(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ue&&_(v.clearcoatRoughnessMap.channel),iridescenceMapUv:Te&&_(v.iridescenceMap.channel),iridescenceThicknessMapUv:se&&_(v.iridescenceThicknessMap.channel),sheenColorMapUv:oe&&_(v.sheenColorMap.channel),sheenRoughnessMapUv:be&&_(v.sheenRoughnessMap.channel),specularMapUv:we&&_(v.specularMap.channel),specularColorMapUv:pe&&_(v.specularColorMap.channel),specularIntensityMapUv:Xe&&_(v.specularIntensityMap.channel),transmissionMapUv:L&&_(v.transmissionMap.channel),thicknessMapUv:ue&&_(v.thicknessMap.channel),alphaMapUv:me&&_(v.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(O||ye),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!H.attributes.uv&&(De||me),fog:!!z,useFog:v.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||H.attributes.normal===void 0&&O===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:re,skinning:I.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:ce,morphTextureStride:fe,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:v.dithering,shadowMapEnabled:r.shadowMap.enabled&&F.length>0,shadowMapType:r.shadowMap.type,toneMapping:ze,decodeVideoTexture:De&&v.map.isVideoTexture===!0&&ut.getTransfer(v.map.colorSpace)===vt,decodeVideoTextureEmissive:We&&v.emissiveMap.isVideoTexture===!0&&ut.getTransfer(v.emissiveMap.colorSpace)===vt,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===qi,flipSided:v.side===Un,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:Ae&&v.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ae&&v.extensions.multiDraw===!0||Ie)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return ft.vertexUv1s=l.has(1),ft.vertexUv2s=l.has(2),ft.vertexUv3s=l.has(3),l.clear(),ft}function p(v){const M=[];if(v.shaderID?M.push(v.shaderID):(M.push(v.customVertexShaderID),M.push(v.customFragmentShaderID)),v.defines!==void 0)for(const F in v.defines)M.push(F),M.push(v.defines[F]);return v.isRawShaderMaterial===!1&&(m(M,v),S(M,v),M.push(r.outputColorSpace)),M.push(v.customProgramCacheKey),M.join()}function m(v,M){v.push(M.precision),v.push(M.outputColorSpace),v.push(M.envMapMode),v.push(M.envMapCubeUVHeight),v.push(M.mapUv),v.push(M.alphaMapUv),v.push(M.lightMapUv),v.push(M.aoMapUv),v.push(M.bumpMapUv),v.push(M.normalMapUv),v.push(M.displacementMapUv),v.push(M.emissiveMapUv),v.push(M.metalnessMapUv),v.push(M.roughnessMapUv),v.push(M.anisotropyMapUv),v.push(M.clearcoatMapUv),v.push(M.clearcoatNormalMapUv),v.push(M.clearcoatRoughnessMapUv),v.push(M.iridescenceMapUv),v.push(M.iridescenceThicknessMapUv),v.push(M.sheenColorMapUv),v.push(M.sheenRoughnessMapUv),v.push(M.specularMapUv),v.push(M.specularColorMapUv),v.push(M.specularIntensityMapUv),v.push(M.transmissionMapUv),v.push(M.thicknessMapUv),v.push(M.combine),v.push(M.fogExp2),v.push(M.sizeAttenuation),v.push(M.morphTargetsCount),v.push(M.morphAttributeCount),v.push(M.numDirLights),v.push(M.numPointLights),v.push(M.numSpotLights),v.push(M.numSpotLightMaps),v.push(M.numHemiLights),v.push(M.numRectAreaLights),v.push(M.numDirLightShadows),v.push(M.numPointLightShadows),v.push(M.numSpotLightShadows),v.push(M.numSpotLightShadowsWithMaps),v.push(M.numLightProbes),v.push(M.shadowMapType),v.push(M.toneMapping),v.push(M.numClippingPlanes),v.push(M.numClipIntersection),v.push(M.depthPacking)}function S(v,M){a.disableAll(),M.instancing&&a.enable(0),M.instancingColor&&a.enable(1),M.instancingMorph&&a.enable(2),M.matcap&&a.enable(3),M.envMap&&a.enable(4),M.normalMapObjectSpace&&a.enable(5),M.normalMapTangentSpace&&a.enable(6),M.clearcoat&&a.enable(7),M.iridescence&&a.enable(8),M.alphaTest&&a.enable(9),M.vertexColors&&a.enable(10),M.vertexAlphas&&a.enable(11),M.vertexUv1s&&a.enable(12),M.vertexUv2s&&a.enable(13),M.vertexUv3s&&a.enable(14),M.vertexTangents&&a.enable(15),M.anisotropy&&a.enable(16),M.alphaHash&&a.enable(17),M.batching&&a.enable(18),M.dispersion&&a.enable(19),M.batchingColor&&a.enable(20),M.gradientMap&&a.enable(21),v.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reversedDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),v.push(a.mask)}function T(v){const M=h[v.type];let F;if(M){const R=wi[M];F=n0.clone(R.uniforms)}else F=v.uniforms;return F}function y(v,M){let F=u.get(M);return F!==void 0?++F.usedTimes:(F=new AM(r,M,v,i),c.push(F),u.set(M,F)),F}function A(v){if(--v.usedTimes===0){const M=c.indexOf(v);c[M]=c[c.length-1],c.pop(),u.delete(v.cacheKey),v.destroy()}}function w(v){o.remove(v)}function b(){o.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:T,acquireProgram:y,releaseProgram:A,releaseShaderCache:w,programs:c,dispose:b}}function DM(){let r=new WeakMap;function e(a){return r.has(a)}function t(a){let o=r.get(a);return o===void 0&&(o={},r.set(a,o)),o}function n(a){r.delete(a)}function i(a,o,l){r.get(a)[o]=l}function s(){r=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:s}}function LM(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.materialVariant!==e.materialVariant?r.materialVariant-e.materialVariant:r.z!==e.z?r.z-e.z:r.id-e.id}function ed(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function td(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function a(f){let h=0;return f.isInstancedMesh&&(h+=2),f.isSkinnedMesh&&(h+=1),h}function o(f,h,_,g,p,m){let S=r[e];return S===void 0?(S={id:f.id,object:f,geometry:h,material:_,materialVariant:a(f),groupOrder:g,renderOrder:f.renderOrder,z:p,group:m},r[e]=S):(S.id=f.id,S.object=f,S.geometry=h,S.material=_,S.materialVariant=a(f),S.groupOrder=g,S.renderOrder=f.renderOrder,S.z=p,S.group=m),e++,S}function l(f,h,_,g,p,m){const S=o(f,h,_,g,p,m);_.transmission>0?n.push(S):_.transparent===!0?i.push(S):t.push(S)}function c(f,h,_,g,p,m){const S=o(f,h,_,g,p,m);_.transmission>0?n.unshift(S):_.transparent===!0?i.unshift(S):t.unshift(S)}function u(f,h){t.length>1&&t.sort(f||LM),n.length>1&&n.sort(h||ed),i.length>1&&i.sort(h||ed)}function d(){for(let f=e,h=r.length;f<h;f++){const _=r[f];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:l,unshift:c,finish:d,sort:u}}function IM(){let r=new WeakMap;function e(n,i){const s=r.get(n);let a;return s===void 0?(a=new td,r.set(n,[a])):i>=s.length?(a=new td,s.push(a)):a=s[i],a}function t(){r=new WeakMap}return{get:e,dispose:t}}function UM(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new q,color:new pt};break;case"SpotLight":t={position:new q,direction:new q,color:new pt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new q,color:new pt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new q,skyColor:new pt,groundColor:new pt};break;case"RectAreaLight":t={color:new pt,position:new q,halfWidth:new q,halfHeight:new q};break}return r[e.id]=t,t}}}function FM(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let NM=0;function OM(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function BM(r){const e=new UM,t=FM(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new q);const i=new q,s=new zt,a=new zt;function o(c){let u=0,d=0,f=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let h=0,_=0,g=0,p=0,m=0,S=0,T=0,y=0,A=0,w=0,b=0;c.sort(OM);for(let M=0,F=c.length;M<F;M++){const R=c[M],I=R.color,z=R.intensity,H=R.distance;let k=null;if(R.shadow&&R.shadow.map&&(R.shadow.map.texture.format===qs?k=R.shadow.map.texture:k=R.shadow.map.depthTexture||R.shadow.map.texture),R.isAmbientLight)u+=I.r*z,d+=I.g*z,f+=I.b*z;else if(R.isLightProbe){for(let G=0;G<9;G++)n.probe[G].addScaledVector(R.sh.coefficients[G],z);b++}else if(R.isDirectionalLight){const G=e.get(R);if(G.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const U=R.shadow,Q=t.get(R);Q.shadowIntensity=U.intensity,Q.shadowBias=U.bias,Q.shadowNormalBias=U.normalBias,Q.shadowRadius=U.radius,Q.shadowMapSize=U.mapSize,n.directionalShadow[h]=Q,n.directionalShadowMap[h]=k,n.directionalShadowMatrix[h]=R.shadow.matrix,S++}n.directional[h]=G,h++}else if(R.isSpotLight){const G=e.get(R);G.position.setFromMatrixPosition(R.matrixWorld),G.color.copy(I).multiplyScalar(z),G.distance=H,G.coneCos=Math.cos(R.angle),G.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),G.decay=R.decay,n.spot[g]=G;const U=R.shadow;if(R.map&&(n.spotLightMap[A]=R.map,A++,U.updateMatrices(R),R.castShadow&&w++),n.spotLightMatrix[g]=U.matrix,R.castShadow){const Q=t.get(R);Q.shadowIntensity=U.intensity,Q.shadowBias=U.bias,Q.shadowNormalBias=U.normalBias,Q.shadowRadius=U.radius,Q.shadowMapSize=U.mapSize,n.spotShadow[g]=Q,n.spotShadowMap[g]=k,y++}g++}else if(R.isRectAreaLight){const G=e.get(R);G.color.copy(I).multiplyScalar(z),G.halfWidth.set(R.width*.5,0,0),G.halfHeight.set(0,R.height*.5,0),n.rectArea[p]=G,p++}else if(R.isPointLight){const G=e.get(R);if(G.color.copy(R.color).multiplyScalar(R.intensity),G.distance=R.distance,G.decay=R.decay,R.castShadow){const U=R.shadow,Q=t.get(R);Q.shadowIntensity=U.intensity,Q.shadowBias=U.bias,Q.shadowNormalBias=U.normalBias,Q.shadowRadius=U.radius,Q.shadowMapSize=U.mapSize,Q.shadowCameraNear=U.camera.near,Q.shadowCameraFar=U.camera.far,n.pointShadow[_]=Q,n.pointShadowMap[_]=k,n.pointShadowMatrix[_]=R.shadow.matrix,T++}n.point[_]=G,_++}else if(R.isHemisphereLight){const G=e.get(R);G.skyColor.copy(R.color).multiplyScalar(z),G.groundColor.copy(R.groundColor).multiplyScalar(z),n.hemi[m]=G,m++}}p>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ve.LTC_FLOAT_1,n.rectAreaLTC2=ve.LTC_FLOAT_2):(n.rectAreaLTC1=ve.LTC_HALF_1,n.rectAreaLTC2=ve.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=d,n.ambient[2]=f;const v=n.hash;(v.directionalLength!==h||v.pointLength!==_||v.spotLength!==g||v.rectAreaLength!==p||v.hemiLength!==m||v.numDirectionalShadows!==S||v.numPointShadows!==T||v.numSpotShadows!==y||v.numSpotMaps!==A||v.numLightProbes!==b)&&(n.directional.length=h,n.spot.length=g,n.rectArea.length=p,n.point.length=_,n.hemi.length=m,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.pointShadow.length=T,n.pointShadowMap.length=T,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=S,n.pointShadowMatrix.length=T,n.spotLightMatrix.length=y+A-w,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=b,v.directionalLength=h,v.pointLength=_,v.spotLength=g,v.rectAreaLength=p,v.hemiLength=m,v.numDirectionalShadows=S,v.numPointShadows=T,v.numSpotShadows=y,v.numSpotMaps=A,v.numLightProbes=b,n.version=NM++)}function l(c,u){let d=0,f=0,h=0,_=0,g=0;const p=u.matrixWorldInverse;for(let m=0,S=c.length;m<S;m++){const T=c[m];if(T.isDirectionalLight){const y=n.directional[d];y.direction.setFromMatrixPosition(T.matrixWorld),i.setFromMatrixPosition(T.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(p),d++}else if(T.isSpotLight){const y=n.spot[h];y.position.setFromMatrixPosition(T.matrixWorld),y.position.applyMatrix4(p),y.direction.setFromMatrixPosition(T.matrixWorld),i.setFromMatrixPosition(T.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(p),h++}else if(T.isRectAreaLight){const y=n.rectArea[_];y.position.setFromMatrixPosition(T.matrixWorld),y.position.applyMatrix4(p),a.identity(),s.copy(T.matrixWorld),s.premultiply(p),a.extractRotation(s),y.halfWidth.set(T.width*.5,0,0),y.halfHeight.set(0,T.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),_++}else if(T.isPointLight){const y=n.point[f];y.position.setFromMatrixPosition(T.matrixWorld),y.position.applyMatrix4(p),f++}else if(T.isHemisphereLight){const y=n.hemi[g];y.direction.setFromMatrixPosition(T.matrixWorld),y.direction.transformDirection(p),g++}}}return{setup:o,setupView:l,state:n}}function nd(r){const e=new BM(r),t=[],n=[];function i(u){c.camera=u,t.length=0,n.length=0}function s(u){t.push(u)}function a(u){n.push(u)}function o(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function zM(r){let e=new WeakMap;function t(i,s=0){const a=e.get(i);let o;return a===void 0?(o=new nd(r),e.set(i,[o])):s>=a.length?(o=new nd(r),a.push(o)):o=a[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const kM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,VM=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,GM=[new q(1,0,0),new q(-1,0,0),new q(0,1,0),new q(0,-1,0),new q(0,0,1),new q(0,0,-1)],HM=[new q(0,-1,0),new q(0,-1,0),new q(0,0,1),new q(0,0,-1),new q(0,-1,0),new q(0,-1,0)],id=new zt,ca=new q,gc=new q;function WM(r,e,t){let n=new Jp;const i=new je,s=new je,a=new It,o=new s0,l=new a0,c={},u=t.maxTextureSize,d={[br]:Un,[Un]:br,[qi]:qi},f=new Oi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new je},radius:{value:4}},vertexShader:kM,fragmentShader:VM}),h=f.clone();h.defines.HORIZONTAL_PASS=1;const _=new Mi;_.setAttribute("position",new xi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new ci(_,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Xo;let m=this.type;this.render=function(w,b,v){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||w.length===0)return;this.type===$_&&(qe("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Xo);const M=r.getRenderTarget(),F=r.getActiveCubeFace(),R=r.getActiveMipmapLevel(),I=r.state;I.setBlending(Zi),I.buffers.depth.getReversed()===!0?I.buffers.color.setClear(0,0,0,0):I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const z=m!==this.type;z&&b.traverse(function(H){H.material&&(Array.isArray(H.material)?H.material.forEach(k=>k.needsUpdate=!0):H.material.needsUpdate=!0)});for(let H=0,k=w.length;H<k;H++){const G=w[H],U=G.shadow;if(U===void 0){qe("WebGLShadowMap:",G,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;i.copy(U.mapSize);const Q=U.getFrameExtents();i.multiply(Q),s.copy(U.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/Q.x),i.x=s.x*Q.x,U.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/Q.y),i.y=s.y*Q.y,U.mapSize.y=s.y));const ee=r.state.buffers.depth.getReversed();if(U.camera._reversedDepth=ee,U.map===null||z===!0){if(U.map!==null&&(U.map.depthTexture!==null&&(U.map.depthTexture.dispose(),U.map.depthTexture=null),U.map.dispose()),this.type===ga){if(G.isPointLight){qe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}U.map=new vi(i.x,i.y,{format:qs,type:Ni,minFilter:Ht,magFilter:Ht,generateMipmaps:!1}),U.map.texture.name=G.name+".shadowMap",U.map.depthTexture=new Wa(i.x,i.y,gi),U.map.depthTexture.name=G.name+".shadowMapDepth",U.map.depthTexture.format=er,U.map.depthTexture.compareFunction=null,U.map.depthTexture.minFilter=an,U.map.depthTexture.magFilter=an}else G.isPointLight?(U.map=new rm(i.x),U.map.depthTexture=new e0(i.x,Fi)):(U.map=new vi(i.x,i.y),U.map.depthTexture=new Wa(i.x,i.y,Fi)),U.map.depthTexture.name=G.name+".shadowMap",U.map.depthTexture.format=er,this.type===Xo?(U.map.depthTexture.compareFunction=ee?Sf:xf,U.map.depthTexture.minFilter=Ht,U.map.depthTexture.magFilter=Ht):(U.map.depthTexture.compareFunction=null,U.map.depthTexture.minFilter=an,U.map.depthTexture.magFilter=an);U.camera.updateProjectionMatrix()}const D=U.map.isWebGLCubeRenderTarget?6:1;for(let ce=0;ce<D;ce++){if(U.map.isWebGLCubeRenderTarget)r.setRenderTarget(U.map,ce),r.clear();else{ce===0&&(r.setRenderTarget(U.map),r.clear());const fe=U.getViewport(ce);a.set(s.x*fe.x,s.y*fe.y,s.x*fe.z,s.y*fe.w),I.viewport(a)}if(G.isPointLight){const fe=U.camera,Fe=U.matrix,He=G.distance||fe.far;He!==fe.far&&(fe.far=He,fe.updateProjectionMatrix()),ca.setFromMatrixPosition(G.matrixWorld),fe.position.copy(ca),gc.copy(fe.position),gc.add(GM[ce]),fe.up.copy(HM[ce]),fe.lookAt(gc),fe.updateMatrixWorld(),Fe.makeTranslation(-ca.x,-ca.y,-ca.z),id.multiplyMatrices(fe.projectionMatrix,fe.matrixWorldInverse),U._frustum.setFromProjectionMatrix(id,fe.coordinateSystem,fe.reversedDepth)}else U.updateMatrices(G);n=U.getFrustum(),y(b,v,U.camera,G,this.type)}U.isPointLightShadow!==!0&&this.type===ga&&S(U,v),U.needsUpdate=!1}m=this.type,p.needsUpdate=!1,r.setRenderTarget(M,F,R)};function S(w,b){const v=e.update(g);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,h.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,h.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new vi(i.x,i.y,{format:qs,type:Ni})),f.uniforms.shadow_pass.value=w.map.depthTexture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,r.setRenderTarget(w.mapPass),r.clear(),r.renderBufferDirect(b,null,v,f,g,null),h.uniforms.shadow_pass.value=w.mapPass.texture,h.uniforms.resolution.value=w.mapSize,h.uniforms.radius.value=w.radius,r.setRenderTarget(w.map),r.clear(),r.renderBufferDirect(b,null,v,h,g,null)}function T(w,b,v,M){let F=null;const R=v.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(R!==void 0)F=R;else if(F=v.isPointLight===!0?l:o,r.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0||b.alphaToCoverage===!0){const I=F.uuid,z=b.uuid;let H=c[I];H===void 0&&(H={},c[I]=H);let k=H[z];k===void 0&&(k=F.clone(),H[z]=k,b.addEventListener("dispose",A)),F=k}if(F.visible=b.visible,F.wireframe=b.wireframe,M===ga?F.side=b.shadowSide!==null?b.shadowSide:b.side:F.side=b.shadowSide!==null?b.shadowSide:d[b.side],F.alphaMap=b.alphaMap,F.alphaTest=b.alphaToCoverage===!0?.5:b.alphaTest,F.map=b.map,F.clipShadows=b.clipShadows,F.clippingPlanes=b.clippingPlanes,F.clipIntersection=b.clipIntersection,F.displacementMap=b.displacementMap,F.displacementScale=b.displacementScale,F.displacementBias=b.displacementBias,F.wireframeLinewidth=b.wireframeLinewidth,F.linewidth=b.linewidth,v.isPointLight===!0&&F.isMeshDistanceMaterial===!0){const I=r.properties.get(F);I.light=v}return F}function y(w,b,v,M,F){if(w.visible===!1)return;if(w.layers.test(b.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&F===ga)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,w.matrixWorld);const z=e.update(w),H=w.material;if(Array.isArray(H)){const k=z.groups;for(let G=0,U=k.length;G<U;G++){const Q=k[G],ee=H[Q.materialIndex];if(ee&&ee.visible){const D=T(w,ee,M,F);w.onBeforeShadow(r,w,b,v,z,D,Q),r.renderBufferDirect(v,null,z,D,w,Q),w.onAfterShadow(r,w,b,v,z,D,Q)}}}else if(H.visible){const k=T(w,H,M,F);w.onBeforeShadow(r,w,b,v,z,k,null),r.renderBufferDirect(v,null,z,k,w,null),w.onAfterShadow(r,w,b,v,z,k,null)}}const I=w.children;for(let z=0,H=I.length;z<H;z++)y(I[z],b,v,M,F)}function A(w){w.target.removeEventListener("dispose",A);for(const v in c){const M=c[v],F=w.target.uuid;F in M&&(M[F].dispose(),delete M[F])}}}function XM(r,e){function t(){let L=!1;const ue=new It;let ae=null;const me=new It(0,0,0,0);return{setMask:function(ie){ae!==ie&&!L&&(r.colorMask(ie,ie,ie,ie),ae=ie)},setLocked:function(ie){L=ie},setClear:function(ie,Z,Ae,ze,ft){ft===!0&&(ie*=ze,Z*=ze,Ae*=ze),ue.set(ie,Z,Ae,ze),me.equals(ue)===!1&&(r.clearColor(ie,Z,Ae,ze),me.copy(ue))},reset:function(){L=!1,ae=null,me.set(-1,0,0,0)}}}function n(){let L=!1,ue=!1,ae=null,me=null,ie=null;return{setReversed:function(Z){if(ue!==Z){const Ae=e.get("EXT_clip_control");Z?Ae.clipControlEXT(Ae.LOWER_LEFT_EXT,Ae.ZERO_TO_ONE_EXT):Ae.clipControlEXT(Ae.LOWER_LEFT_EXT,Ae.NEGATIVE_ONE_TO_ONE_EXT),ue=Z;const ze=ie;ie=null,this.setClear(ze)}},getReversed:function(){return ue},setTest:function(Z){Z?ne(r.DEPTH_TEST):re(r.DEPTH_TEST)},setMask:function(Z){ae!==Z&&!L&&(r.depthMask(Z),ae=Z)},setFunc:function(Z){if(ue&&(Z=Cg[Z]),me!==Z){switch(Z){case qc:r.depthFunc(r.NEVER);break;case $c:r.depthFunc(r.ALWAYS);break;case Kc:r.depthFunc(r.LESS);break;case Xs:r.depthFunc(r.LEQUAL);break;case Zc:r.depthFunc(r.EQUAL);break;case jc:r.depthFunc(r.GEQUAL);break;case Jc:r.depthFunc(r.GREATER);break;case Qc:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}me=Z}},setLocked:function(Z){L=Z},setClear:function(Z){ie!==Z&&(ie=Z,ue&&(Z=1-Z),r.clearDepth(Z))},reset:function(){L=!1,ae=null,me=null,ie=null,ue=!1}}}function i(){let L=!1,ue=null,ae=null,me=null,ie=null,Z=null,Ae=null,ze=null,ft=null;return{setTest:function(Se){L||(Se?ne(r.STENCIL_TEST):re(r.STENCIL_TEST))},setMask:function(Se){ue!==Se&&!L&&(r.stencilMask(Se),ue=Se)},setFunc:function(Se,Ne,Qe){(ae!==Se||me!==Ne||ie!==Qe)&&(r.stencilFunc(Se,Ne,Qe),ae=Se,me=Ne,ie=Qe)},setOp:function(Se,Ne,Qe){(Z!==Se||Ae!==Ne||ze!==Qe)&&(r.stencilOp(Se,Ne,Qe),Z=Se,Ae=Ne,ze=Qe)},setLocked:function(Se){L=Se},setClear:function(Se){ft!==Se&&(r.clearStencil(Se),ft=Se)},reset:function(){L=!1,ue=null,ae=null,me=null,ie=null,Z=null,Ae=null,ze=null,ft=null}}}const s=new t,a=new n,o=new i,l=new WeakMap,c=new WeakMap;let u={},d={},f=new WeakMap,h=[],_=null,g=!1,p=null,m=null,S=null,T=null,y=null,A=null,w=null,b=new pt(0,0,0),v=0,M=!1,F=null,R=null,I=null,z=null,H=null;const k=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,U=0;const Q=r.getParameter(r.VERSION);Q.indexOf("WebGL")!==-1?(U=parseFloat(/^WebGL (\d)/.exec(Q)[1]),G=U>=1):Q.indexOf("OpenGL ES")!==-1&&(U=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),G=U>=2);let ee=null,D={};const ce=r.getParameter(r.SCISSOR_BOX),fe=r.getParameter(r.VIEWPORT),Fe=new It().fromArray(ce),He=new It().fromArray(fe);function Ke(L,ue,ae,me){const ie=new Uint8Array(4),Z=r.createTexture();r.bindTexture(L,Z),r.texParameteri(L,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(L,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Ae=0;Ae<ae;Ae++)L===r.TEXTURE_3D||L===r.TEXTURE_2D_ARRAY?r.texImage3D(ue,0,r.RGBA,1,1,me,0,r.RGBA,r.UNSIGNED_BYTE,ie):r.texImage2D(ue+Ae,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,ie);return Z}const K={};K[r.TEXTURE_2D]=Ke(r.TEXTURE_2D,r.TEXTURE_2D,1),K[r.TEXTURE_CUBE_MAP]=Ke(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),K[r.TEXTURE_2D_ARRAY]=Ke(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),K[r.TEXTURE_3D]=Ke(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ne(r.DEPTH_TEST),a.setFunc(Xs),te(!1),O(sh),ne(r.CULL_FACE),Me(Zi);function ne(L){u[L]!==!0&&(r.enable(L),u[L]=!0)}function re(L){u[L]!==!1&&(r.disable(L),u[L]=!1)}function Le(L,ue){return d[L]!==ue?(r.bindFramebuffer(L,ue),d[L]=ue,L===r.DRAW_FRAMEBUFFER&&(d[r.FRAMEBUFFER]=ue),L===r.FRAMEBUFFER&&(d[r.DRAW_FRAMEBUFFER]=ue),!0):!1}function Ie(L,ue){let ae=h,me=!1;if(L){ae=f.get(ue),ae===void 0&&(ae=[],f.set(ue,ae));const ie=L.textures;if(ae.length!==ie.length||ae[0]!==r.COLOR_ATTACHMENT0){for(let Z=0,Ae=ie.length;Z<Ae;Z++)ae[Z]=r.COLOR_ATTACHMENT0+Z;ae.length=ie.length,me=!0}}else ae[0]!==r.BACK&&(ae[0]=r.BACK,me=!0);me&&r.drawBuffers(ae)}function De(L){return _!==L?(r.useProgram(L),_=L,!0):!1}const ot={[kr]:r.FUNC_ADD,[Z_]:r.FUNC_SUBTRACT,[j_]:r.FUNC_REVERSE_SUBTRACT};ot[J_]=r.MIN,ot[Q_]=r.MAX;const Ee={[eg]:r.ZERO,[tg]:r.ONE,[ng]:r.SRC_COLOR,[Xc]:r.SRC_ALPHA,[lg]:r.SRC_ALPHA_SATURATE,[ag]:r.DST_COLOR,[rg]:r.DST_ALPHA,[ig]:r.ONE_MINUS_SRC_COLOR,[Yc]:r.ONE_MINUS_SRC_ALPHA,[og]:r.ONE_MINUS_DST_COLOR,[sg]:r.ONE_MINUS_DST_ALPHA,[cg]:r.CONSTANT_COLOR,[ug]:r.ONE_MINUS_CONSTANT_COLOR,[fg]:r.CONSTANT_ALPHA,[hg]:r.ONE_MINUS_CONSTANT_ALPHA};function Me(L,ue,ae,me,ie,Z,Ae,ze,ft,Se){if(L===Zi){g===!0&&(re(r.BLEND),g=!1);return}if(g===!1&&(ne(r.BLEND),g=!0),L!==K_){if(L!==p||Se!==M){if((m!==kr||y!==kr)&&(r.blendEquation(r.FUNC_ADD),m=kr,y=kr),Se)switch(L){case Ns:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Wc:r.blendFunc(r.ONE,r.ONE);break;case ah:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case oh:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:dt("WebGLState: Invalid blending: ",L);break}else switch(L){case Ns:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Wc:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case ah:dt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case oh:dt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:dt("WebGLState: Invalid blending: ",L);break}S=null,T=null,A=null,w=null,b.set(0,0,0),v=0,p=L,M=Se}return}ie=ie||ue,Z=Z||ae,Ae=Ae||me,(ue!==m||ie!==y)&&(r.blendEquationSeparate(ot[ue],ot[ie]),m=ue,y=ie),(ae!==S||me!==T||Z!==A||Ae!==w)&&(r.blendFuncSeparate(Ee[ae],Ee[me],Ee[Z],Ee[Ae]),S=ae,T=me,A=Z,w=Ae),(ze.equals(b)===!1||ft!==v)&&(r.blendColor(ze.r,ze.g,ze.b,ft),b.copy(ze),v=ft),p=L,M=!1}function V(L,ue){L.side===qi?re(r.CULL_FACE):ne(r.CULL_FACE);let ae=L.side===Un;ue&&(ae=!ae),te(ae),L.blending===Ns&&L.transparent===!1?Me(Zi):Me(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),a.setFunc(L.depthFunc),a.setTest(L.depthTest),a.setMask(L.depthWrite),s.setMask(L.colorWrite);const me=L.stencilWrite;o.setTest(me),me&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),We(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?ne(r.SAMPLE_ALPHA_TO_COVERAGE):re(r.SAMPLE_ALPHA_TO_COVERAGE)}function te(L){F!==L&&(L?r.frontFace(r.CW):r.frontFace(r.CCW),F=L)}function O(L){L!==Y_?(ne(r.CULL_FACE),L!==R&&(L===sh?r.cullFace(r.BACK):L===q_?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):re(r.CULL_FACE),R=L}function P(L){L!==I&&(G&&r.lineWidth(L),I=L)}function We(L,ue,ae){L?(ne(r.POLYGON_OFFSET_FILL),(z!==ue||H!==ae)&&(z=ue,H=ae,a.getReversed()&&(ue=-ue),r.polygonOffset(ue,ae))):re(r.POLYGON_OFFSET_FILL)}function Ge(L){L?ne(r.SCISSOR_TEST):re(r.SCISSOR_TEST)}function Ve(L){L===void 0&&(L=r.TEXTURE0+k-1),ee!==L&&(r.activeTexture(L),ee=L)}function ye(L,ue,ae){ae===void 0&&(ee===null?ae=r.TEXTURE0+k-1:ae=ee);let me=D[ae];me===void 0&&(me={type:void 0,texture:void 0},D[ae]=me),(me.type!==L||me.texture!==ue)&&(ee!==ae&&(r.activeTexture(ae),ee=ae),r.bindTexture(L,ue||K[L]),me.type=L,me.texture=ue)}function C(){const L=D[ee];L!==void 0&&L.type!==void 0&&(r.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function x(){try{r.compressedTexImage2D(...arguments)}catch(L){dt("WebGLState:",L)}}function N(){try{r.compressedTexImage3D(...arguments)}catch(L){dt("WebGLState:",L)}}function j(){try{r.texSubImage2D(...arguments)}catch(L){dt("WebGLState:",L)}}function J(){try{r.texSubImage3D(...arguments)}catch(L){dt("WebGLState:",L)}}function $(){try{r.compressedTexSubImage2D(...arguments)}catch(L){dt("WebGLState:",L)}}function xe(){try{r.compressedTexSubImage3D(...arguments)}catch(L){dt("WebGLState:",L)}}function le(){try{r.texStorage2D(...arguments)}catch(L){dt("WebGLState:",L)}}function Ue(){try{r.texStorage3D(...arguments)}catch(L){dt("WebGLState:",L)}}function Te(){try{r.texImage2D(...arguments)}catch(L){dt("WebGLState:",L)}}function se(){try{r.texImage3D(...arguments)}catch(L){dt("WebGLState:",L)}}function oe(L){Fe.equals(L)===!1&&(r.scissor(L.x,L.y,L.z,L.w),Fe.copy(L))}function be(L){He.equals(L)===!1&&(r.viewport(L.x,L.y,L.z,L.w),He.copy(L))}function we(L,ue){let ae=c.get(ue);ae===void 0&&(ae=new WeakMap,c.set(ue,ae));let me=ae.get(L);me===void 0&&(me=r.getUniformBlockIndex(ue,L.name),ae.set(L,me))}function pe(L,ue){const me=c.get(ue).get(L);l.get(ue)!==me&&(r.uniformBlockBinding(ue,me,L.__bindingPointIndex),l.set(ue,me))}function Xe(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),a.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),u={},ee=null,D={},d={},f=new WeakMap,h=[],_=null,g=!1,p=null,m=null,S=null,T=null,y=null,A=null,w=null,b=new pt(0,0,0),v=0,M=!1,F=null,R=null,I=null,z=null,H=null,Fe.set(0,0,r.canvas.width,r.canvas.height),He.set(0,0,r.canvas.width,r.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:ne,disable:re,bindFramebuffer:Le,drawBuffers:Ie,useProgram:De,setBlending:Me,setMaterial:V,setFlipSided:te,setCullFace:O,setLineWidth:P,setPolygonOffset:We,setScissorTest:Ge,activeTexture:Ve,bindTexture:ye,unbindTexture:C,compressedTexImage2D:x,compressedTexImage3D:N,texImage2D:Te,texImage3D:se,updateUBOMapping:we,uniformBlockBinding:pe,texStorage2D:le,texStorage3D:Ue,texSubImage2D:j,texSubImage3D:J,compressedTexSubImage2D:$,compressedTexSubImage3D:xe,scissor:oe,viewport:be,reset:Xe}}function YM(r,e,t,n,i,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new je,u=new WeakMap;let d;const f=new WeakMap;let h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(C,x){return h?new OffscreenCanvas(C,x):ul("canvas")}function g(C,x,N){let j=1;const J=ye(C);if((J.width>N||J.height>N)&&(j=N/Math.max(J.width,J.height)),j<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const $=Math.floor(j*J.width),xe=Math.floor(j*J.height);d===void 0&&(d=_($,xe));const le=x?_($,xe):d;return le.width=$,le.height=xe,le.getContext("2d").drawImage(C,0,0,$,xe),qe("WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+$+"x"+xe+")."),le}else return"data"in C&&qe("WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),C;return C}function p(C){return C.generateMipmaps}function m(C){r.generateMipmap(C)}function S(C){return C.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?r.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function T(C,x,N,j,J=!1){if(C!==null){if(r[C]!==void 0)return r[C];qe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let $=x;if(x===r.RED&&(N===r.FLOAT&&($=r.R32F),N===r.HALF_FLOAT&&($=r.R16F),N===r.UNSIGNED_BYTE&&($=r.R8)),x===r.RED_INTEGER&&(N===r.UNSIGNED_BYTE&&($=r.R8UI),N===r.UNSIGNED_SHORT&&($=r.R16UI),N===r.UNSIGNED_INT&&($=r.R32UI),N===r.BYTE&&($=r.R8I),N===r.SHORT&&($=r.R16I),N===r.INT&&($=r.R32I)),x===r.RG&&(N===r.FLOAT&&($=r.RG32F),N===r.HALF_FLOAT&&($=r.RG16F),N===r.UNSIGNED_BYTE&&($=r.RG8)),x===r.RG_INTEGER&&(N===r.UNSIGNED_BYTE&&($=r.RG8UI),N===r.UNSIGNED_SHORT&&($=r.RG16UI),N===r.UNSIGNED_INT&&($=r.RG32UI),N===r.BYTE&&($=r.RG8I),N===r.SHORT&&($=r.RG16I),N===r.INT&&($=r.RG32I)),x===r.RGB_INTEGER&&(N===r.UNSIGNED_BYTE&&($=r.RGB8UI),N===r.UNSIGNED_SHORT&&($=r.RGB16UI),N===r.UNSIGNED_INT&&($=r.RGB32UI),N===r.BYTE&&($=r.RGB8I),N===r.SHORT&&($=r.RGB16I),N===r.INT&&($=r.RGB32I)),x===r.RGBA_INTEGER&&(N===r.UNSIGNED_BYTE&&($=r.RGBA8UI),N===r.UNSIGNED_SHORT&&($=r.RGBA16UI),N===r.UNSIGNED_INT&&($=r.RGBA32UI),N===r.BYTE&&($=r.RGBA8I),N===r.SHORT&&($=r.RGBA16I),N===r.INT&&($=r.RGBA32I)),x===r.RGB&&(N===r.UNSIGNED_INT_5_9_9_9_REV&&($=r.RGB9_E5),N===r.UNSIGNED_INT_10F_11F_11F_REV&&($=r.R11F_G11F_B10F)),x===r.RGBA){const xe=J?ll:ut.getTransfer(j);N===r.FLOAT&&($=r.RGBA32F),N===r.HALF_FLOAT&&($=r.RGBA16F),N===r.UNSIGNED_BYTE&&($=xe===vt?r.SRGB8_ALPHA8:r.RGBA8),N===r.UNSIGNED_SHORT_4_4_4_4&&($=r.RGBA4),N===r.UNSIGNED_SHORT_5_5_5_1&&($=r.RGB5_A1)}return($===r.R16F||$===r.R32F||$===r.RG16F||$===r.RG32F||$===r.RGBA16F||$===r.RGBA32F)&&e.get("EXT_color_buffer_float"),$}function y(C,x){let N;return C?x===null||x===Fi||x===Ha?N=r.DEPTH24_STENCIL8:x===gi?N=r.DEPTH32F_STENCIL8:x===Ga&&(N=r.DEPTH24_STENCIL8,qe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Fi||x===Ha?N=r.DEPTH_COMPONENT24:x===gi?N=r.DEPTH_COMPONENT32F:x===Ga&&(N=r.DEPTH_COMPONENT16),N}function A(C,x){return p(C)===!0||C.isFramebufferTexture&&C.minFilter!==an&&C.minFilter!==Ht?Math.log2(Math.max(x.width,x.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?x.mipmaps.length:1}function w(C){const x=C.target;x.removeEventListener("dispose",w),v(x),x.isVideoTexture&&u.delete(x)}function b(C){const x=C.target;x.removeEventListener("dispose",b),F(x)}function v(C){const x=n.get(C);if(x.__webglInit===void 0)return;const N=C.source,j=f.get(N);if(j){const J=j[x.__cacheKey];J.usedTimes--,J.usedTimes===0&&M(C),Object.keys(j).length===0&&f.delete(N)}n.remove(C)}function M(C){const x=n.get(C);r.deleteTexture(x.__webglTexture);const N=C.source,j=f.get(N);delete j[x.__cacheKey],a.memory.textures--}function F(C){const x=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(x.__webglFramebuffer[j]))for(let J=0;J<x.__webglFramebuffer[j].length;J++)r.deleteFramebuffer(x.__webglFramebuffer[j][J]);else r.deleteFramebuffer(x.__webglFramebuffer[j]);x.__webglDepthbuffer&&r.deleteRenderbuffer(x.__webglDepthbuffer[j])}else{if(Array.isArray(x.__webglFramebuffer))for(let j=0;j<x.__webglFramebuffer.length;j++)r.deleteFramebuffer(x.__webglFramebuffer[j]);else r.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&r.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&r.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let j=0;j<x.__webglColorRenderbuffer.length;j++)x.__webglColorRenderbuffer[j]&&r.deleteRenderbuffer(x.__webglColorRenderbuffer[j]);x.__webglDepthRenderbuffer&&r.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const N=C.textures;for(let j=0,J=N.length;j<J;j++){const $=n.get(N[j]);$.__webglTexture&&(r.deleteTexture($.__webglTexture),a.memory.textures--),n.remove(N[j])}n.remove(C)}let R=0;function I(){R=0}function z(){const C=R;return C>=i.maxTextures&&qe("WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+i.maxTextures),R+=1,C}function H(C){const x=[];return x.push(C.wrapS),x.push(C.wrapT),x.push(C.wrapR||0),x.push(C.magFilter),x.push(C.minFilter),x.push(C.anisotropy),x.push(C.internalFormat),x.push(C.format),x.push(C.type),x.push(C.generateMipmaps),x.push(C.premultiplyAlpha),x.push(C.flipY),x.push(C.unpackAlignment),x.push(C.colorSpace),x.join()}function k(C,x){const N=n.get(C);if(C.isVideoTexture&&Ge(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&N.__version!==C.version){const j=C.image;if(j===null)qe("WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)qe("WebGLRenderer: Texture marked for update but image is incomplete");else{K(N,C,x);return}}else C.isExternalTexture&&(N.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(r.TEXTURE_2D,N.__webglTexture,r.TEXTURE0+x)}function G(C,x){const N=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&N.__version!==C.version){K(N,C,x);return}else C.isExternalTexture&&(N.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(r.TEXTURE_2D_ARRAY,N.__webglTexture,r.TEXTURE0+x)}function U(C,x){const N=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&N.__version!==C.version){K(N,C,x);return}t.bindTexture(r.TEXTURE_3D,N.__webglTexture,r.TEXTURE0+x)}function Q(C,x){const N=n.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&N.__version!==C.version){ne(N,C,x);return}t.bindTexture(r.TEXTURE_CUBE_MAP,N.__webglTexture,r.TEXTURE0+x)}const ee={[eu]:r.REPEAT,[$n]:r.CLAMP_TO_EDGE,[tu]:r.MIRRORED_REPEAT},D={[an]:r.NEAREST,[mg]:r.NEAREST_MIPMAP_NEAREST,[uo]:r.NEAREST_MIPMAP_LINEAR,[Ht]:r.LINEAR,[kl]:r.LINEAR_MIPMAP_NEAREST,[Wr]:r.LINEAR_MIPMAP_LINEAR},ce={[xg]:r.NEVER,[Tg]:r.ALWAYS,[Sg]:r.LESS,[xf]:r.LEQUAL,[Mg]:r.EQUAL,[Sf]:r.GEQUAL,[yg]:r.GREATER,[Eg]:r.NOTEQUAL};function fe(C,x){if(x.type===gi&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===Ht||x.magFilter===kl||x.magFilter===uo||x.magFilter===Wr||x.minFilter===Ht||x.minFilter===kl||x.minFilter===uo||x.minFilter===Wr)&&qe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(C,r.TEXTURE_WRAP_S,ee[x.wrapS]),r.texParameteri(C,r.TEXTURE_WRAP_T,ee[x.wrapT]),(C===r.TEXTURE_3D||C===r.TEXTURE_2D_ARRAY)&&r.texParameteri(C,r.TEXTURE_WRAP_R,ee[x.wrapR]),r.texParameteri(C,r.TEXTURE_MAG_FILTER,D[x.magFilter]),r.texParameteri(C,r.TEXTURE_MIN_FILTER,D[x.minFilter]),x.compareFunction&&(r.texParameteri(C,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(C,r.TEXTURE_COMPARE_FUNC,ce[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===an||x.minFilter!==uo&&x.minFilter!==Wr||x.type===gi&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){const N=e.get("EXT_texture_filter_anisotropic");r.texParameterf(C,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,i.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function Fe(C,x){let N=!1;C.__webglInit===void 0&&(C.__webglInit=!0,x.addEventListener("dispose",w));const j=x.source;let J=f.get(j);J===void 0&&(J={},f.set(j,J));const $=H(x);if($!==C.__cacheKey){J[$]===void 0&&(J[$]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,N=!0),J[$].usedTimes++;const xe=J[C.__cacheKey];xe!==void 0&&(J[C.__cacheKey].usedTimes--,xe.usedTimes===0&&M(x)),C.__cacheKey=$,C.__webglTexture=J[$].texture}return N}function He(C,x,N){return Math.floor(Math.floor(C/N)/x)}function Ke(C,x,N,j){const $=C.updateRanges;if($.length===0)t.texSubImage2D(r.TEXTURE_2D,0,0,0,x.width,x.height,N,j,x.data);else{$.sort((se,oe)=>se.start-oe.start);let xe=0;for(let se=1;se<$.length;se++){const oe=$[xe],be=$[se],we=oe.start+oe.count,pe=He(be.start,x.width,4),Xe=He(oe.start,x.width,4);be.start<=we+1&&pe===Xe&&He(be.start+be.count-1,x.width,4)===pe?oe.count=Math.max(oe.count,be.start+be.count-oe.start):(++xe,$[xe]=be)}$.length=xe+1;const le=r.getParameter(r.UNPACK_ROW_LENGTH),Ue=r.getParameter(r.UNPACK_SKIP_PIXELS),Te=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,x.width);for(let se=0,oe=$.length;se<oe;se++){const be=$[se],we=Math.floor(be.start/4),pe=Math.ceil(be.count/4),Xe=we%x.width,L=Math.floor(we/x.width),ue=pe,ae=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,Xe),r.pixelStorei(r.UNPACK_SKIP_ROWS,L),t.texSubImage2D(r.TEXTURE_2D,0,Xe,L,ue,ae,N,j,x.data)}C.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,le),r.pixelStorei(r.UNPACK_SKIP_PIXELS,Ue),r.pixelStorei(r.UNPACK_SKIP_ROWS,Te)}}function K(C,x,N){let j=r.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(j=r.TEXTURE_2D_ARRAY),x.isData3DTexture&&(j=r.TEXTURE_3D);const J=Fe(C,x),$=x.source;t.bindTexture(j,C.__webglTexture,r.TEXTURE0+N);const xe=n.get($);if($.version!==xe.__version||J===!0){t.activeTexture(r.TEXTURE0+N);const le=ut.getPrimaries(ut.workingColorSpace),Ue=x.colorSpace===fr?null:ut.getPrimaries(x.colorSpace),Te=x.colorSpace===fr||le===Ue?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,x.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,x.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Te);let se=g(x.image,!1,i.maxTextureSize);se=Ve(x,se);const oe=s.convert(x.format,x.colorSpace),be=s.convert(x.type);let we=T(x.internalFormat,oe,be,x.colorSpace,x.isVideoTexture);fe(j,x);let pe;const Xe=x.mipmaps,L=x.isVideoTexture!==!0,ue=xe.__version===void 0||J===!0,ae=$.dataReady,me=A(x,se);if(x.isDepthTexture)we=y(x.format===Xr,x.type),ue&&(L?t.texStorage2D(r.TEXTURE_2D,1,we,se.width,se.height):t.texImage2D(r.TEXTURE_2D,0,we,se.width,se.height,0,oe,be,null));else if(x.isDataTexture)if(Xe.length>0){L&&ue&&t.texStorage2D(r.TEXTURE_2D,me,we,Xe[0].width,Xe[0].height);for(let ie=0,Z=Xe.length;ie<Z;ie++)pe=Xe[ie],L?ae&&t.texSubImage2D(r.TEXTURE_2D,ie,0,0,pe.width,pe.height,oe,be,pe.data):t.texImage2D(r.TEXTURE_2D,ie,we,pe.width,pe.height,0,oe,be,pe.data);x.generateMipmaps=!1}else L?(ue&&t.texStorage2D(r.TEXTURE_2D,me,we,se.width,se.height),ae&&Ke(x,se,oe,be)):t.texImage2D(r.TEXTURE_2D,0,we,se.width,se.height,0,oe,be,se.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){L&&ue&&t.texStorage3D(r.TEXTURE_2D_ARRAY,me,we,Xe[0].width,Xe[0].height,se.depth);for(let ie=0,Z=Xe.length;ie<Z;ie++)if(pe=Xe[ie],x.format!==oi)if(oe!==null)if(L){if(ae)if(x.layerUpdates.size>0){const Ae=Uh(pe.width,pe.height,x.format,x.type);for(const ze of x.layerUpdates){const ft=pe.data.subarray(ze*Ae/pe.data.BYTES_PER_ELEMENT,(ze+1)*Ae/pe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ie,0,0,ze,pe.width,pe.height,1,oe,ft)}x.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ie,0,0,0,pe.width,pe.height,se.depth,oe,pe.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,ie,we,pe.width,pe.height,se.depth,0,pe.data,0,0);else qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else L?ae&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,ie,0,0,0,pe.width,pe.height,se.depth,oe,be,pe.data):t.texImage3D(r.TEXTURE_2D_ARRAY,ie,we,pe.width,pe.height,se.depth,0,oe,be,pe.data)}else{L&&ue&&t.texStorage2D(r.TEXTURE_2D,me,we,Xe[0].width,Xe[0].height);for(let ie=0,Z=Xe.length;ie<Z;ie++)pe=Xe[ie],x.format!==oi?oe!==null?L?ae&&t.compressedTexSubImage2D(r.TEXTURE_2D,ie,0,0,pe.width,pe.height,oe,pe.data):t.compressedTexImage2D(r.TEXTURE_2D,ie,we,pe.width,pe.height,0,pe.data):qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):L?ae&&t.texSubImage2D(r.TEXTURE_2D,ie,0,0,pe.width,pe.height,oe,be,pe.data):t.texImage2D(r.TEXTURE_2D,ie,we,pe.width,pe.height,0,oe,be,pe.data)}else if(x.isDataArrayTexture)if(L){if(ue&&t.texStorage3D(r.TEXTURE_2D_ARRAY,me,we,se.width,se.height,se.depth),ae)if(x.layerUpdates.size>0){const ie=Uh(se.width,se.height,x.format,x.type);for(const Z of x.layerUpdates){const Ae=se.data.subarray(Z*ie/se.data.BYTES_PER_ELEMENT,(Z+1)*ie/se.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,Z,se.width,se.height,1,oe,be,Ae)}x.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,se.width,se.height,se.depth,oe,be,se.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,we,se.width,se.height,se.depth,0,oe,be,se.data);else if(x.isData3DTexture)L?(ue&&t.texStorage3D(r.TEXTURE_3D,me,we,se.width,se.height,se.depth),ae&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,se.width,se.height,se.depth,oe,be,se.data)):t.texImage3D(r.TEXTURE_3D,0,we,se.width,se.height,se.depth,0,oe,be,se.data);else if(x.isFramebufferTexture){if(ue)if(L)t.texStorage2D(r.TEXTURE_2D,me,we,se.width,se.height);else{let ie=se.width,Z=se.height;for(let Ae=0;Ae<me;Ae++)t.texImage2D(r.TEXTURE_2D,Ae,we,ie,Z,0,oe,be,null),ie>>=1,Z>>=1}}else if(Xe.length>0){if(L&&ue){const ie=ye(Xe[0]);t.texStorage2D(r.TEXTURE_2D,me,we,ie.width,ie.height)}for(let ie=0,Z=Xe.length;ie<Z;ie++)pe=Xe[ie],L?ae&&t.texSubImage2D(r.TEXTURE_2D,ie,0,0,oe,be,pe):t.texImage2D(r.TEXTURE_2D,ie,we,oe,be,pe);x.generateMipmaps=!1}else if(L){if(ue){const ie=ye(se);t.texStorage2D(r.TEXTURE_2D,me,we,ie.width,ie.height)}ae&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,oe,be,se)}else t.texImage2D(r.TEXTURE_2D,0,we,oe,be,se);p(x)&&m(j),xe.__version=$.version,x.onUpdate&&x.onUpdate(x)}C.__version=x.version}function ne(C,x,N){if(x.image.length!==6)return;const j=Fe(C,x),J=x.source;t.bindTexture(r.TEXTURE_CUBE_MAP,C.__webglTexture,r.TEXTURE0+N);const $=n.get(J);if(J.version!==$.__version||j===!0){t.activeTexture(r.TEXTURE0+N);const xe=ut.getPrimaries(ut.workingColorSpace),le=x.colorSpace===fr?null:ut.getPrimaries(x.colorSpace),Ue=x.colorSpace===fr||xe===le?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,x.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,x.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ue);const Te=x.isCompressedTexture||x.image[0].isCompressedTexture,se=x.image[0]&&x.image[0].isDataTexture,oe=[];for(let Z=0;Z<6;Z++)!Te&&!se?oe[Z]=g(x.image[Z],!0,i.maxCubemapSize):oe[Z]=se?x.image[Z].image:x.image[Z],oe[Z]=Ve(x,oe[Z]);const be=oe[0],we=s.convert(x.format,x.colorSpace),pe=s.convert(x.type),Xe=T(x.internalFormat,we,pe,x.colorSpace),L=x.isVideoTexture!==!0,ue=$.__version===void 0||j===!0,ae=J.dataReady;let me=A(x,be);fe(r.TEXTURE_CUBE_MAP,x);let ie;if(Te){L&&ue&&t.texStorage2D(r.TEXTURE_CUBE_MAP,me,Xe,be.width,be.height);for(let Z=0;Z<6;Z++){ie=oe[Z].mipmaps;for(let Ae=0;Ae<ie.length;Ae++){const ze=ie[Ae];x.format!==oi?we!==null?L?ae&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Ae,0,0,ze.width,ze.height,we,ze.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Ae,Xe,ze.width,ze.height,0,ze.data):qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?ae&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Ae,0,0,ze.width,ze.height,we,pe,ze.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Ae,Xe,ze.width,ze.height,0,we,pe,ze.data)}}}else{if(ie=x.mipmaps,L&&ue){ie.length>0&&me++;const Z=ye(oe[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,me,Xe,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(se){L?ae&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,oe[Z].width,oe[Z].height,we,pe,oe[Z].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Xe,oe[Z].width,oe[Z].height,0,we,pe,oe[Z].data);for(let Ae=0;Ae<ie.length;Ae++){const ft=ie[Ae].image[Z].image;L?ae&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Ae+1,0,0,ft.width,ft.height,we,pe,ft.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Ae+1,Xe,ft.width,ft.height,0,we,pe,ft.data)}}else{L?ae&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,we,pe,oe[Z]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Xe,we,pe,oe[Z]);for(let Ae=0;Ae<ie.length;Ae++){const ze=ie[Ae];L?ae&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Ae+1,0,0,we,pe,ze.image[Z]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Ae+1,Xe,we,pe,ze.image[Z])}}}p(x)&&m(r.TEXTURE_CUBE_MAP),$.__version=J.version,x.onUpdate&&x.onUpdate(x)}C.__version=x.version}function re(C,x,N,j,J,$){const xe=s.convert(N.format,N.colorSpace),le=s.convert(N.type),Ue=T(N.internalFormat,xe,le,N.colorSpace),Te=n.get(x),se=n.get(N);if(se.__renderTarget=x,!Te.__hasExternalTextures){const oe=Math.max(1,x.width>>$),be=Math.max(1,x.height>>$);J===r.TEXTURE_3D||J===r.TEXTURE_2D_ARRAY?t.texImage3D(J,$,Ue,oe,be,x.depth,0,xe,le,null):t.texImage2D(J,$,Ue,oe,be,0,xe,le,null)}t.bindFramebuffer(r.FRAMEBUFFER,C),We(x)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,j,J,se.__webglTexture,0,P(x)):(J===r.TEXTURE_2D||J>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,j,J,se.__webglTexture,$),t.bindFramebuffer(r.FRAMEBUFFER,null)}function Le(C,x,N){if(r.bindRenderbuffer(r.RENDERBUFFER,C),x.depthBuffer){const j=x.depthTexture,J=j&&j.isDepthTexture?j.type:null,$=y(x.stencilBuffer,J),xe=x.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;We(x)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,P(x),$,x.width,x.height):N?r.renderbufferStorageMultisample(r.RENDERBUFFER,P(x),$,x.width,x.height):r.renderbufferStorage(r.RENDERBUFFER,$,x.width,x.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,xe,r.RENDERBUFFER,C)}else{const j=x.textures;for(let J=0;J<j.length;J++){const $=j[J],xe=s.convert($.format,$.colorSpace),le=s.convert($.type),Ue=T($.internalFormat,xe,le,$.colorSpace);We(x)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,P(x),Ue,x.width,x.height):N?r.renderbufferStorageMultisample(r.RENDERBUFFER,P(x),Ue,x.width,x.height):r.renderbufferStorage(r.RENDERBUFFER,Ue,x.width,x.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Ie(C,x,N){const j=x.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(r.FRAMEBUFFER,C),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const J=n.get(x.depthTexture);if(J.__renderTarget=x,(!J.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),j){if(J.__webglInit===void 0&&(J.__webglInit=!0,x.depthTexture.addEventListener("dispose",w)),J.__webglTexture===void 0){J.__webglTexture=r.createTexture(),t.bindTexture(r.TEXTURE_CUBE_MAP,J.__webglTexture),fe(r.TEXTURE_CUBE_MAP,x.depthTexture);const Te=s.convert(x.depthTexture.format),se=s.convert(x.depthTexture.type);let oe;x.depthTexture.format===er?oe=r.DEPTH_COMPONENT24:x.depthTexture.format===Xr&&(oe=r.DEPTH24_STENCIL8);for(let be=0;be<6;be++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,oe,x.width,x.height,0,Te,se,null)}}else k(x.depthTexture,0);const $=J.__webglTexture,xe=P(x),le=j?r.TEXTURE_CUBE_MAP_POSITIVE_X+N:r.TEXTURE_2D,Ue=x.depthTexture.format===Xr?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(x.depthTexture.format===er)We(x)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Ue,le,$,0,xe):r.framebufferTexture2D(r.FRAMEBUFFER,Ue,le,$,0);else if(x.depthTexture.format===Xr)We(x)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Ue,le,$,0,xe):r.framebufferTexture2D(r.FRAMEBUFFER,Ue,le,$,0);else throw new Error("Unknown depthTexture format")}function De(C){const x=n.get(C),N=C.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==C.depthTexture){const j=C.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),j){const J=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,j.removeEventListener("dispose",J)};j.addEventListener("dispose",J),x.__depthDisposeCallback=J}x.__boundDepthTexture=j}if(C.depthTexture&&!x.__autoAllocateDepthBuffer)if(N)for(let j=0;j<6;j++)Ie(x.__webglFramebuffer[j],C,j);else{const j=C.texture.mipmaps;j&&j.length>0?Ie(x.__webglFramebuffer[0],C,0):Ie(x.__webglFramebuffer,C,0)}else if(N){x.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(t.bindFramebuffer(r.FRAMEBUFFER,x.__webglFramebuffer[j]),x.__webglDepthbuffer[j]===void 0)x.__webglDepthbuffer[j]=r.createRenderbuffer(),Le(x.__webglDepthbuffer[j],C,!1);else{const J=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,$=x.__webglDepthbuffer[j];r.bindRenderbuffer(r.RENDERBUFFER,$),r.framebufferRenderbuffer(r.FRAMEBUFFER,J,r.RENDERBUFFER,$)}}else{const j=C.texture.mipmaps;if(j&&j.length>0?t.bindFramebuffer(r.FRAMEBUFFER,x.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=r.createRenderbuffer(),Le(x.__webglDepthbuffer,C,!1);else{const J=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,$=x.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,$),r.framebufferRenderbuffer(r.FRAMEBUFFER,J,r.RENDERBUFFER,$)}}t.bindFramebuffer(r.FRAMEBUFFER,null)}function ot(C,x,N){const j=n.get(C);x!==void 0&&re(j.__webglFramebuffer,C,C.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),N!==void 0&&De(C)}function Ee(C){const x=C.texture,N=n.get(C),j=n.get(x);C.addEventListener("dispose",b);const J=C.textures,$=C.isWebGLCubeRenderTarget===!0,xe=J.length>1;if(xe||(j.__webglTexture===void 0&&(j.__webglTexture=r.createTexture()),j.__version=x.version,a.memory.textures++),$){N.__webglFramebuffer=[];for(let le=0;le<6;le++)if(x.mipmaps&&x.mipmaps.length>0){N.__webglFramebuffer[le]=[];for(let Ue=0;Ue<x.mipmaps.length;Ue++)N.__webglFramebuffer[le][Ue]=r.createFramebuffer()}else N.__webglFramebuffer[le]=r.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){N.__webglFramebuffer=[];for(let le=0;le<x.mipmaps.length;le++)N.__webglFramebuffer[le]=r.createFramebuffer()}else N.__webglFramebuffer=r.createFramebuffer();if(xe)for(let le=0,Ue=J.length;le<Ue;le++){const Te=n.get(J[le]);Te.__webglTexture===void 0&&(Te.__webglTexture=r.createTexture(),a.memory.textures++)}if(C.samples>0&&We(C)===!1){N.__webglMultisampledFramebuffer=r.createFramebuffer(),N.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let le=0;le<J.length;le++){const Ue=J[le];N.__webglColorRenderbuffer[le]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,N.__webglColorRenderbuffer[le]);const Te=s.convert(Ue.format,Ue.colorSpace),se=s.convert(Ue.type),oe=T(Ue.internalFormat,Te,se,Ue.colorSpace,C.isXRRenderTarget===!0),be=P(C);r.renderbufferStorageMultisample(r.RENDERBUFFER,be,oe,C.width,C.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+le,r.RENDERBUFFER,N.__webglColorRenderbuffer[le])}r.bindRenderbuffer(r.RENDERBUFFER,null),C.depthBuffer&&(N.__webglDepthRenderbuffer=r.createRenderbuffer(),Le(N.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if($){t.bindTexture(r.TEXTURE_CUBE_MAP,j.__webglTexture),fe(r.TEXTURE_CUBE_MAP,x);for(let le=0;le<6;le++)if(x.mipmaps&&x.mipmaps.length>0)for(let Ue=0;Ue<x.mipmaps.length;Ue++)re(N.__webglFramebuffer[le][Ue],C,x,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+le,Ue);else re(N.__webglFramebuffer[le],C,x,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+le,0);p(x)&&m(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(xe){for(let le=0,Ue=J.length;le<Ue;le++){const Te=J[le],se=n.get(Te);let oe=r.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(oe=C.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(oe,se.__webglTexture),fe(oe,Te),re(N.__webglFramebuffer,C,Te,r.COLOR_ATTACHMENT0+le,oe,0),p(Te)&&m(oe)}t.unbindTexture()}else{let le=r.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(le=C.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(le,j.__webglTexture),fe(le,x),x.mipmaps&&x.mipmaps.length>0)for(let Ue=0;Ue<x.mipmaps.length;Ue++)re(N.__webglFramebuffer[Ue],C,x,r.COLOR_ATTACHMENT0,le,Ue);else re(N.__webglFramebuffer,C,x,r.COLOR_ATTACHMENT0,le,0);p(x)&&m(le),t.unbindTexture()}C.depthBuffer&&De(C)}function Me(C){const x=C.textures;for(let N=0,j=x.length;N<j;N++){const J=x[N];if(p(J)){const $=S(C),xe=n.get(J).__webglTexture;t.bindTexture($,xe),m($),t.unbindTexture()}}}const V=[],te=[];function O(C){if(C.samples>0){if(We(C)===!1){const x=C.textures,N=C.width,j=C.height;let J=r.COLOR_BUFFER_BIT;const $=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,xe=n.get(C),le=x.length>1;if(le)for(let Te=0;Te<x.length;Te++)t.bindFramebuffer(r.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Te,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,xe.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Te,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,xe.__webglMultisampledFramebuffer);const Ue=C.texture.mipmaps;Ue&&Ue.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,xe.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,xe.__webglFramebuffer);for(let Te=0;Te<x.length;Te++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(J|=r.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(J|=r.STENCIL_BUFFER_BIT)),le){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,xe.__webglColorRenderbuffer[Te]);const se=n.get(x[Te]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,se,0)}r.blitFramebuffer(0,0,N,j,0,0,N,j,J,r.NEAREST),l===!0&&(V.length=0,te.length=0,V.push(r.COLOR_ATTACHMENT0+Te),C.depthBuffer&&C.resolveDepthBuffer===!1&&(V.push($),te.push($),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,te)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,V))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),le)for(let Te=0;Te<x.length;Te++){t.bindFramebuffer(r.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Te,r.RENDERBUFFER,xe.__webglColorRenderbuffer[Te]);const se=n.get(x[Te]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,xe.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Te,r.TEXTURE_2D,se,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,xe.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){const x=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[x])}}}function P(C){return Math.min(i.maxSamples,C.samples)}function We(C){const x=n.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function Ge(C){const x=a.render.frame;u.get(C)!==x&&(u.set(C,x),C.update())}function Ve(C,x){const N=C.colorSpace,j=C.format,J=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||N!==$s&&N!==fr&&(ut.getTransfer(N)===vt?(j!==oi||J!==ri)&&qe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):dt("WebGLTextures: Unsupported texture color space:",N)),x}function ye(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=z,this.resetTextureUnits=I,this.setTexture2D=k,this.setTexture2DArray=G,this.setTexture3D=U,this.setTextureCube=Q,this.rebindTextures=ot,this.setupRenderTarget=Ee,this.updateRenderTargetMipmap=Me,this.updateMultisampleRenderTarget=O,this.setupDepthRenderbuffer=De,this.setupFrameBufferTexture=re,this.useMultisampledRTT=We,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function qM(r,e){function t(n,i=fr){let s;const a=ut.getTransfer(i);if(n===ri)return r.UNSIGNED_BYTE;if(n===pf)return r.UNSIGNED_SHORT_4_4_4_4;if(n===mf)return r.UNSIGNED_SHORT_5_5_5_1;if(n===Bp)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===zp)return r.UNSIGNED_INT_10F_11F_11F_REV;if(n===Np)return r.BYTE;if(n===Op)return r.SHORT;if(n===Ga)return r.UNSIGNED_SHORT;if(n===df)return r.INT;if(n===Fi)return r.UNSIGNED_INT;if(n===gi)return r.FLOAT;if(n===Ni)return r.HALF_FLOAT;if(n===kp)return r.ALPHA;if(n===Vp)return r.RGB;if(n===oi)return r.RGBA;if(n===er)return r.DEPTH_COMPONENT;if(n===Xr)return r.DEPTH_STENCIL;if(n===Gp)return r.RED;if(n===_f)return r.RED_INTEGER;if(n===qs)return r.RG;if(n===gf)return r.RG_INTEGER;if(n===vf)return r.RGBA_INTEGER;if(n===Yo||n===qo||n===$o||n===Ko)if(a===vt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Yo)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===qo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===$o)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ko)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Yo)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===qo)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===$o)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ko)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===nu||n===iu||n===ru||n===su)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===nu)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===iu)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ru)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===su)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===au||n===ou||n===lu||n===cu||n===uu||n===fu||n===hu)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===au||n===ou)return a===vt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===lu)return a===vt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===cu)return s.COMPRESSED_R11_EAC;if(n===uu)return s.COMPRESSED_SIGNED_R11_EAC;if(n===fu)return s.COMPRESSED_RG11_EAC;if(n===hu)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===du||n===pu||n===mu||n===_u||n===gu||n===vu||n===xu||n===Su||n===Mu||n===yu||n===Eu||n===Tu||n===bu||n===Au)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===du)return a===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===pu)return a===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===mu)return a===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===_u)return a===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===gu)return a===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===vu)return a===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===xu)return a===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Su)return a===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Mu)return a===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===yu)return a===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Eu)return a===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Tu)return a===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===bu)return a===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Au)return a===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===wu||n===Cu||n===Ru)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===wu)return a===vt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Cu)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ru)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Pu||n===Du||n===Lu||n===Iu)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===Pu)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Du)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Lu)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Iu)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ha?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}const $M=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,KM=`
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

}`;class ZM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new em(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Oi({vertexShader:$M,fragmentShader:KM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ci(new Qr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class jM extends Zs{constructor(e,t){super();const n=this;let i=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,d=null,f=null,h=null,_=null;const g=typeof XRWebGLBinding<"u",p=new ZM,m={},S=t.getContextAttributes();let T=null,y=null;const A=[],w=[],b=new je;let v=null;const M=new mi;M.viewport=new It;const F=new mi;F.viewport=new It;const R=[M,F],I=new l0;let z=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let ne=A[K];return ne===void 0&&(ne=new $l,A[K]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function(K){let ne=A[K];return ne===void 0&&(ne=new $l,A[K]=ne),ne.getGripSpace()},this.getHand=function(K){let ne=A[K];return ne===void 0&&(ne=new $l,A[K]=ne),ne.getHandSpace()};function k(K){const ne=w.indexOf(K.inputSource);if(ne===-1)return;const re=A[ne];re!==void 0&&(re.update(K.inputSource,K.frame,c||a),re.dispatchEvent({type:K.type,data:K.inputSource}))}function G(){i.removeEventListener("select",k),i.removeEventListener("selectstart",k),i.removeEventListener("selectend",k),i.removeEventListener("squeeze",k),i.removeEventListener("squeezestart",k),i.removeEventListener("squeezeend",k),i.removeEventListener("end",G),i.removeEventListener("inputsourceschange",U);for(let K=0;K<A.length;K++){const ne=w[K];ne!==null&&(w[K]=null,A[K].disconnect(ne))}z=null,H=null,p.reset();for(const K in m)delete m[K];e.setRenderTarget(T),h=null,f=null,d=null,i=null,y=null,Ke.stop(),n.isPresenting=!1,e.setPixelRatio(v),e.setSize(b.width,b.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){s=K,n.isPresenting===!0&&qe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){o=K,n.isPresenting===!0&&qe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return f!==null?f:h},this.getBinding=function(){return d===null&&g&&(d=new XRWebGLBinding(i,t)),d},this.getFrame=function(){return _},this.getSession=function(){return i},this.setSession=async function(K){if(i=K,i!==null){if(T=e.getRenderTarget(),i.addEventListener("select",k),i.addEventListener("selectstart",k),i.addEventListener("selectend",k),i.addEventListener("squeeze",k),i.addEventListener("squeezestart",k),i.addEventListener("squeezeend",k),i.addEventListener("end",G),i.addEventListener("inputsourceschange",U),S.xrCompatible!==!0&&await t.makeXRCompatible(),v=e.getPixelRatio(),e.getSize(b),g&&"createProjectionLayer"in XRWebGLBinding.prototype){let re=null,Le=null,Ie=null;S.depth&&(Ie=S.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,re=S.stencil?Xr:er,Le=S.stencil?Ha:Fi);const De={colorFormat:t.RGBA8,depthFormat:Ie,scaleFactor:s};d=this.getBinding(),f=d.createProjectionLayer(De),i.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),y=new vi(f.textureWidth,f.textureHeight,{format:oi,type:ri,depthTexture:new Wa(f.textureWidth,f.textureHeight,Le,void 0,void 0,void 0,void 0,void 0,void 0,re),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const re={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:s};h=new XRWebGLLayer(i,t,re),i.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),y=new vi(h.framebufferWidth,h.framebufferHeight,{format:oi,type:ri,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),Ke.setContext(i),Ke.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function U(K){for(let ne=0;ne<K.removed.length;ne++){const re=K.removed[ne],Le=w.indexOf(re);Le>=0&&(w[Le]=null,A[Le].disconnect(re))}for(let ne=0;ne<K.added.length;ne++){const re=K.added[ne];let Le=w.indexOf(re);if(Le===-1){for(let De=0;De<A.length;De++)if(De>=w.length){w.push(re),Le=De;break}else if(w[De]===null){w[De]=re,Le=De;break}if(Le===-1)break}const Ie=A[Le];Ie&&Ie.connect(re)}}const Q=new q,ee=new q;function D(K,ne,re){Q.setFromMatrixPosition(ne.matrixWorld),ee.setFromMatrixPosition(re.matrixWorld);const Le=Q.distanceTo(ee),Ie=ne.projectionMatrix.elements,De=re.projectionMatrix.elements,ot=Ie[14]/(Ie[10]-1),Ee=Ie[14]/(Ie[10]+1),Me=(Ie[9]+1)/Ie[5],V=(Ie[9]-1)/Ie[5],te=(Ie[8]-1)/Ie[0],O=(De[8]+1)/De[0],P=ot*te,We=ot*O,Ge=Le/(-te+O),Ve=Ge*-te;if(ne.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(Ve),K.translateZ(Ge),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),Ie[10]===-1)K.projectionMatrix.copy(ne.projectionMatrix),K.projectionMatrixInverse.copy(ne.projectionMatrixInverse);else{const ye=ot+Ge,C=Ee+Ge,x=P-Ve,N=We+(Le-Ve),j=Me*Ee/C*ye,J=V*Ee/C*ye;K.projectionMatrix.makePerspective(x,N,j,J,ye,C),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function ce(K,ne){ne===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(ne.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(i===null)return;let ne=K.near,re=K.far;p.texture!==null&&(p.depthNear>0&&(ne=p.depthNear),p.depthFar>0&&(re=p.depthFar)),I.near=F.near=M.near=ne,I.far=F.far=M.far=re,(z!==I.near||H!==I.far)&&(i.updateRenderState({depthNear:I.near,depthFar:I.far}),z=I.near,H=I.far),I.layers.mask=K.layers.mask|6,M.layers.mask=I.layers.mask&-5,F.layers.mask=I.layers.mask&-3;const Le=K.parent,Ie=I.cameras;ce(I,Le);for(let De=0;De<Ie.length;De++)ce(Ie[De],Le);Ie.length===2?D(I,M,F):I.projectionMatrix.copy(M.projectionMatrix),fe(K,I,Le)};function fe(K,ne,re){re===null?K.matrix.copy(ne.matrixWorld):(K.matrix.copy(re.matrixWorld),K.matrix.invert(),K.matrix.multiply(ne.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(ne.projectionMatrix),K.projectionMatrixInverse.copy(ne.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Uu*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return I},this.getFoveation=function(){if(!(f===null&&h===null))return l},this.setFoveation=function(K){l=K,f!==null&&(f.fixedFoveation=K),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=K)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(I)},this.getCameraTexture=function(K){return m[K]};let Fe=null;function He(K,ne){if(u=ne.getViewerPose(c||a),_=ne,u!==null){const re=u.views;h!==null&&(e.setRenderTargetFramebuffer(y,h.framebuffer),e.setRenderTarget(y));let Le=!1;re.length!==I.cameras.length&&(I.cameras.length=0,Le=!0);for(let Ee=0;Ee<re.length;Ee++){const Me=re[Ee];let V=null;if(h!==null)V=h.getViewport(Me);else{const O=d.getViewSubImage(f,Me);V=O.viewport,Ee===0&&(e.setRenderTargetTextures(y,O.colorTexture,O.depthStencilTexture),e.setRenderTarget(y))}let te=R[Ee];te===void 0&&(te=new mi,te.layers.enable(Ee),te.viewport=new It,R[Ee]=te),te.matrix.fromArray(Me.transform.matrix),te.matrix.decompose(te.position,te.quaternion,te.scale),te.projectionMatrix.fromArray(Me.projectionMatrix),te.projectionMatrixInverse.copy(te.projectionMatrix).invert(),te.viewport.set(V.x,V.y,V.width,V.height),Ee===0&&(I.matrix.copy(te.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale)),Le===!0&&I.cameras.push(te)}const Ie=i.enabledFeatures;if(Ie&&Ie.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&g){d=n.getBinding();const Ee=d.getDepthInformation(re[0]);Ee&&Ee.isValid&&Ee.texture&&p.init(Ee,i.renderState)}if(Ie&&Ie.includes("camera-access")&&g){e.state.unbindTexture(),d=n.getBinding();for(let Ee=0;Ee<re.length;Ee++){const Me=re[Ee].camera;if(Me){let V=m[Me];V||(V=new em,m[Me]=V);const te=d.getCameraImage(Me);V.sourceTexture=te}}}}for(let re=0;re<A.length;re++){const Le=w[re],Ie=A[re];Le!==null&&Ie!==void 0&&Ie.update(Le,ne,c||a)}Fe&&Fe(K,ne),ne.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ne}),_=null}const Ke=new im;Ke.setAnimationLoop(He),this.setAnimationLoop=function(K){Fe=K},this.dispose=function(){}}}const Fr=new tr,JM=new zt;function QM(r,e){function t(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,tm(r)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function i(p,m,S,T,y){m.isMeshBasicMaterial?s(p,m):m.isMeshLambertMaterial?(s(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(s(p,m),d(p,m)):m.isMeshPhongMaterial?(s(p,m),u(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(s(p,m),f(p,m),m.isMeshPhysicalMaterial&&h(p,m,y)):m.isMeshMatcapMaterial?(s(p,m),_(p,m)):m.isMeshDepthMaterial?s(p,m):m.isMeshDistanceMaterial?(s(p,m),g(p,m)):m.isMeshNormalMaterial?s(p,m):m.isLineBasicMaterial?(a(p,m),m.isLineDashedMaterial&&o(p,m)):m.isPointsMaterial?l(p,m,S,T):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,t(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===Un&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,t(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===Un&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,t(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,t(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const S=e.get(m),T=S.envMap,y=S.envMapRotation;T&&(p.envMap.value=T,Fr.copy(y),Fr.x*=-1,Fr.y*=-1,Fr.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(Fr.y*=-1,Fr.z*=-1),p.envMapRotation.value.setFromMatrix4(JM.makeRotationFromEuler(Fr)),p.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,p.aoMapTransform))}function a(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform))}function o(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,S,T){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*S,p.scale.value=T*.5,m.map&&(p.map.value=m.map,t(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function u(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function d(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function f(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function h(p,m,S){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Un&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=S.texture,p.transmissionSamplerSize.value.set(S.width,S.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,m){m.matcap&&(p.matcap.value=m.matcap)}function g(p,m){const S=e.get(m).light;p.referencePosition.value.setFromMatrixPosition(S.matrixWorld),p.nearDistance.value=S.shadow.camera.near,p.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function ey(r,e,t,n){let i={},s={},a=[];const o=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,T){const y=T.program;n.uniformBlockBinding(S,y)}function c(S,T){let y=i[S.id];y===void 0&&(_(S),y=u(S),i[S.id]=y,S.addEventListener("dispose",p));const A=T.program;n.updateUBOMapping(S,A);const w=e.render.frame;s[S.id]!==w&&(f(S),s[S.id]=w)}function u(S){const T=d();S.__bindingPointIndex=T;const y=r.createBuffer(),A=S.__size,w=S.usage;return r.bindBuffer(r.UNIFORM_BUFFER,y),r.bufferData(r.UNIFORM_BUFFER,A,w),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,T,y),y}function d(){for(let S=0;S<o;S++)if(a.indexOf(S)===-1)return a.push(S),S;return dt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(S){const T=i[S.id],y=S.uniforms,A=S.__cache;r.bindBuffer(r.UNIFORM_BUFFER,T);for(let w=0,b=y.length;w<b;w++){const v=Array.isArray(y[w])?y[w]:[y[w]];for(let M=0,F=v.length;M<F;M++){const R=v[M];if(h(R,w,M,A)===!0){const I=R.__offset,z=Array.isArray(R.value)?R.value:[R.value];let H=0;for(let k=0;k<z.length;k++){const G=z[k],U=g(G);typeof G=="number"||typeof G=="boolean"?(R.__data[0]=G,r.bufferSubData(r.UNIFORM_BUFFER,I+H,R.__data)):G.isMatrix3?(R.__data[0]=G.elements[0],R.__data[1]=G.elements[1],R.__data[2]=G.elements[2],R.__data[3]=0,R.__data[4]=G.elements[3],R.__data[5]=G.elements[4],R.__data[6]=G.elements[5],R.__data[7]=0,R.__data[8]=G.elements[6],R.__data[9]=G.elements[7],R.__data[10]=G.elements[8],R.__data[11]=0):(G.toArray(R.__data,H),H+=U.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,I,R.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function h(S,T,y,A){const w=S.value,b=T+"_"+y;if(A[b]===void 0)return typeof w=="number"||typeof w=="boolean"?A[b]=w:A[b]=w.clone(),!0;{const v=A[b];if(typeof w=="number"||typeof w=="boolean"){if(v!==w)return A[b]=w,!0}else if(v.equals(w)===!1)return v.copy(w),!0}return!1}function _(S){const T=S.uniforms;let y=0;const A=16;for(let b=0,v=T.length;b<v;b++){const M=Array.isArray(T[b])?T[b]:[T[b]];for(let F=0,R=M.length;F<R;F++){const I=M[F],z=Array.isArray(I.value)?I.value:[I.value];for(let H=0,k=z.length;H<k;H++){const G=z[H],U=g(G),Q=y%A,ee=Q%U.boundary,D=Q+ee;y+=ee,D!==0&&A-D<U.storage&&(y+=A-D),I.__data=new Float32Array(U.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=y,y+=U.storage}}}const w=y%A;return w>0&&(y+=A-w),S.__size=y,S.__cache={},this}function g(S){const T={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(T.boundary=4,T.storage=4):S.isVector2?(T.boundary=8,T.storage=8):S.isVector3||S.isColor?(T.boundary=16,T.storage=12):S.isVector4?(T.boundary=16,T.storage=16):S.isMatrix3?(T.boundary=48,T.storage=48):S.isMatrix4?(T.boundary=64,T.storage=64):S.isTexture?qe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):qe("WebGLRenderer: Unsupported uniform value type.",S),T}function p(S){const T=S.target;T.removeEventListener("dispose",p);const y=a.indexOf(T.__bindingPointIndex);a.splice(y,1),r.deleteBuffer(i[T.id]),delete i[T.id],delete s[T.id]}function m(){for(const S in i)r.deleteBuffer(i[S]);a=[],i={},s={}}return{bind:l,update:c,dispose:m}}const ty=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Ti=null;function ny(){return Ti===null&&(Ti=new jp(ty,16,16,qs,Ni),Ti.name="DFG_LUT",Ti.minFilter=Ht,Ti.magFilter=Ht,Ti.wrapS=$n,Ti.wrapT=$n,Ti.generateMipmaps=!1,Ti.needsUpdate=!0),Ti}class iy{constructor(e={}){const{canvas:t=Ag(),context:n=null,depth:i=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:f=!1,outputBufferType:h=ri}=e;this.isWebGLRenderer=!0;let _;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=n.getContextAttributes().alpha}else _=a;const g=h,p=new Set([vf,gf,_f]),m=new Set([ri,Fi,Ga,Ha,pf,mf]),S=new Uint32Array(4),T=new Int32Array(4);let y=null,A=null;const w=[],b=[];let v=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ii,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const M=this;let F=!1;this._outputColorSpace=ti;let R=0,I=0,z=null,H=-1,k=null;const G=new It,U=new It;let Q=null;const ee=new pt(0);let D=0,ce=t.width,fe=t.height,Fe=1,He=null,Ke=null;const K=new It(0,0,ce,fe),ne=new It(0,0,ce,fe);let re=!1;const Le=new Jp;let Ie=!1,De=!1;const ot=new zt,Ee=new q,Me=new It,V={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let te=!1;function O(){return z===null?Fe:1}let P=n;function We(E,B){return t.getContext(E,B)}try{const E={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${hf}`),t.addEventListener("webglcontextlost",Ae,!1),t.addEventListener("webglcontextrestored",ze,!1),t.addEventListener("webglcontextcreationerror",ft,!1),P===null){const B="webgl2";if(P=We(B,E),P===null)throw We(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw dt("WebGLRenderer: "+E.message),E}let Ge,Ve,ye,C,x,N,j,J,$,xe,le,Ue,Te,se,oe,be,we,pe,Xe,L,ue,ae,me;function ie(){Ge=new iS(P),Ge.init(),ue=new qM(P,Ge),Ve=new Kx(P,Ge,e,ue),ye=new XM(P,Ge),Ve.reversedDepthBuffer&&f&&ye.buffers.depth.setReversed(!0),C=new aS(P),x=new DM,N=new YM(P,Ge,ye,x,Ve,ue,C),j=new nS(M),J=new f0(P),ae=new qx(P,J),$=new rS(P,J,C,ae),xe=new lS(P,$,J,ae,C),pe=new oS(P,Ve,N),oe=new Zx(x),le=new PM(M,j,Ge,Ve,ae,oe),Ue=new QM(M,x),Te=new IM,se=new zM(Ge),we=new Yx(M,j,ye,xe,_,l),be=new WM(M,xe,Ve),me=new ey(P,C,Ve,ye),Xe=new $x(P,Ge,C),L=new sS(P,Ge,C),C.programs=le.programs,M.capabilities=Ve,M.extensions=Ge,M.properties=x,M.renderLists=Te,M.shadowMap=be,M.state=ye,M.info=C}ie(),g!==ri&&(v=new uS(g,t.width,t.height,i,s));const Z=new jM(M,P);this.xr=Z,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const E=Ge.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=Ge.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return Fe},this.setPixelRatio=function(E){E!==void 0&&(Fe=E,this.setSize(ce,fe,!1))},this.getSize=function(E){return E.set(ce,fe)},this.setSize=function(E,B,Y=!0){if(Z.isPresenting){qe("WebGLRenderer: Can't change size while VR device is presenting.");return}ce=E,fe=B,t.width=Math.floor(E*Fe),t.height=Math.floor(B*Fe),Y===!0&&(t.style.width=E+"px",t.style.height=B+"px"),v!==null&&v.setSize(t.width,t.height),this.setViewport(0,0,E,B)},this.getDrawingBufferSize=function(E){return E.set(ce*Fe,fe*Fe).floor()},this.setDrawingBufferSize=function(E,B,Y){ce=E,fe=B,Fe=Y,t.width=Math.floor(E*Y),t.height=Math.floor(B*Y),this.setViewport(0,0,E,B)},this.setEffects=function(E){if(g===ri){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let B=0;B<E.length;B++)if(E[B].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}v.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(G)},this.getViewport=function(E){return E.copy(K)},this.setViewport=function(E,B,Y,X){E.isVector4?K.set(E.x,E.y,E.z,E.w):K.set(E,B,Y,X),ye.viewport(G.copy(K).multiplyScalar(Fe).round())},this.getScissor=function(E){return E.copy(ne)},this.setScissor=function(E,B,Y,X){E.isVector4?ne.set(E.x,E.y,E.z,E.w):ne.set(E,B,Y,X),ye.scissor(U.copy(ne).multiplyScalar(Fe).round())},this.getScissorTest=function(){return re},this.setScissorTest=function(E){ye.setScissorTest(re=E)},this.setOpaqueSort=function(E){He=E},this.setTransparentSort=function(E){Ke=E},this.getClearColor=function(E){return E.copy(we.getClearColor())},this.setClearColor=function(){we.setClearColor(...arguments)},this.getClearAlpha=function(){return we.getClearAlpha()},this.setClearAlpha=function(){we.setClearAlpha(...arguments)},this.clear=function(E=!0,B=!0,Y=!0){let X=0;if(E){let W=!1;if(z!==null){const he=z.texture.format;W=p.has(he)}if(W){const he=z.texture.type,_e=m.has(he),de=we.getClearColor(),Re=we.getClearAlpha(),Ce=de.r,Je=de.g,nt=de.b;_e?(S[0]=Ce,S[1]=Je,S[2]=nt,S[3]=Re,P.clearBufferuiv(P.COLOR,0,S)):(T[0]=Ce,T[1]=Je,T[2]=nt,T[3]=Re,P.clearBufferiv(P.COLOR,0,T))}else X|=P.COLOR_BUFFER_BIT}B&&(X|=P.DEPTH_BUFFER_BIT),Y&&(X|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),X!==0&&P.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ae,!1),t.removeEventListener("webglcontextrestored",ze,!1),t.removeEventListener("webglcontextcreationerror",ft,!1),we.dispose(),Te.dispose(),se.dispose(),x.dispose(),j.dispose(),xe.dispose(),ae.dispose(),me.dispose(),le.dispose(),Z.dispose(),Z.removeEventListener("sessionstart",$e),Z.removeEventListener("sessionend",Ft),Ze.stop()};function Ae(E){E.preventDefault(),hh("WebGLRenderer: Context Lost."),F=!0}function ze(){hh("WebGLRenderer: Context Restored."),F=!1;const E=C.autoReset,B=be.enabled,Y=be.autoUpdate,X=be.needsUpdate,W=be.type;ie(),C.autoReset=E,be.enabled=B,be.autoUpdate=Y,be.needsUpdate=X,be.type=W}function ft(E){dt("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Se(E){const B=E.target;B.removeEventListener("dispose",Se),Ne(B)}function Ne(E){Qe(E),x.remove(E)}function Qe(E){const B=x.get(E).programs;B!==void 0&&(B.forEach(function(Y){le.releaseProgram(Y)}),E.isShaderMaterial&&le.releaseShaderCache(E))}this.renderBufferDirect=function(E,B,Y,X,W,he){B===null&&(B=V);const _e=W.isMesh&&W.matrixWorld.determinant()<0,de=Jn(E,B,Y,X,W);ye.setMaterial(X,_e);let Re=Y.index,Ce=1;if(X.wireframe===!0){if(Re=$.getWireframeAttribute(Y),Re===void 0)return;Ce=2}const Je=Y.drawRange,nt=Y.attributes.position;let Be=Je.start*Ce,xt=(Je.start+Je.count)*Ce;he!==null&&(Be=Math.max(Be,he.start*Ce),xt=Math.min(xt,(he.start+he.count)*Ce)),Re!==null?(Be=Math.max(Be,0),xt=Math.min(xt,Re.count)):nt!=null&&(Be=Math.max(Be,0),xt=Math.min(xt,nt.count));const Nt=xt-Be;if(Nt<0||Nt===1/0)return;ae.setup(W,X,de,Y,Re);let Lt,St=Xe;if(Re!==null&&(Lt=J.get(Re),St=L,St.setIndex(Lt)),W.isMesh)X.wireframe===!0?(ye.setLineWidth(X.wireframeLinewidth*O()),St.setMode(P.LINES)):St.setMode(P.TRIANGLES);else if(W.isLine){let un=X.linewidth;un===void 0&&(un=1),ye.setLineWidth(un*O()),W.isLineSegments?St.setMode(P.LINES):W.isLineLoop?St.setMode(P.LINE_LOOP):St.setMode(P.LINE_STRIP)}else W.isPoints?St.setMode(P.POINTS):W.isSprite&&St.setMode(P.TRIANGLES);if(W.isBatchedMesh)if(W._multiDrawInstances!==null)fl("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),St.renderMultiDrawInstances(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount,W._multiDrawInstances);else if(Ge.get("WEBGL_multi_draw"))St.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{const un=W._multiDrawStarts,Oe=W._multiDrawCounts,On=W._multiDrawCount,ht=Re?J.get(Re).bytesPerElement:1,ui=x.get(X).currentProgram.getUniforms();for(let yi=0;yi<On;yi++)ui.setValue(P,"_gl_DrawID",yi),St.render(un[yi]/ht,Oe[yi])}else if(W.isInstancedMesh)St.renderInstances(Be,Nt,W.count);else if(Y.isInstancedBufferGeometry){const un=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,Oe=Math.min(Y.instanceCount,un);St.renderInstances(Be,Nt,Oe)}else St.render(Be,Nt)};function ge(E,B,Y){E.transparent===!0&&E.side===qi&&E.forceSinglePass===!1?(E.side=Un,E.needsUpdate=!0,ln(E,B,Y),E.side=br,E.needsUpdate=!0,ln(E,B,Y),E.side=qi):ln(E,B,Y)}this.compile=function(E,B,Y=null){Y===null&&(Y=E),A=se.get(Y),A.init(B),b.push(A),Y.traverseVisible(function(W){W.isLight&&W.layers.test(B.layers)&&(A.pushLight(W),W.castShadow&&A.pushShadow(W))}),E!==Y&&E.traverseVisible(function(W){W.isLight&&W.layers.test(B.layers)&&(A.pushLight(W),W.castShadow&&A.pushShadow(W))}),A.setupLights();const X=new Set;return E.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;const he=W.material;if(he)if(Array.isArray(he))for(let _e=0;_e<he.length;_e++){const de=he[_e];ge(de,Y,W),X.add(de)}else ge(he,Y,W),X.add(he)}),A=b.pop(),X},this.compileAsync=function(E,B,Y=null){const X=this.compile(E,B,Y);return new Promise(W=>{function he(){if(X.forEach(function(_e){x.get(_e).currentProgram.isReady()&&X.delete(_e)}),X.size===0){W(E);return}setTimeout(he,10)}Ge.get("KHR_parallel_shader_compile")!==null?he():setTimeout(he,10)})};let Ye=null;function ke(E){Ye&&Ye(E)}function $e(){Ze.stop()}function Ft(){Ze.start()}const Ze=new im;Ze.setAnimationLoop(ke),typeof self<"u"&&Ze.setContext(self),this.setAnimationLoop=function(E){Ye=E,Z.setAnimationLoop(E),E===null?Ze.stop():Ze.start()},Z.addEventListener("sessionstart",$e),Z.addEventListener("sessionend",Ft),this.render=function(E,B){if(B!==void 0&&B.isCamera!==!0){dt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(F===!0)return;const Y=Z.enabled===!0&&Z.isPresenting===!0,X=v!==null&&(z===null||Y)&&v.begin(M,z);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),Z.enabled===!0&&Z.isPresenting===!0&&(v===null||v.isCompositing()===!1)&&(Z.cameraAutoUpdate===!0&&Z.updateCamera(B),B=Z.getCamera()),E.isScene===!0&&E.onBeforeRender(M,E,B,z),A=se.get(E,b.length),A.init(B),b.push(A),ot.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),Le.setFromProjectionMatrix(ot,Di,B.reversedDepth),De=this.localClippingEnabled,Ie=oe.init(this.clippingPlanes,De),y=Te.get(E,w.length),y.init(),w.push(y),Z.enabled===!0&&Z.isPresenting===!0){const _e=M.xr.getDepthSensingMesh();_e!==null&&At(_e,B,-1/0,M.sortObjects)}At(E,B,0,M.sortObjects),y.finish(),M.sortObjects===!0&&y.sort(He,Ke),te=Z.enabled===!1||Z.isPresenting===!1||Z.hasDepthSensing()===!1,te&&we.addToRenderList(y,E),this.info.render.frame++,Ie===!0&&oe.beginShadows();const W=A.state.shadowsArray;if(be.render(W,E,B),Ie===!0&&oe.endShadows(),this.info.autoReset===!0&&this.info.reset(),(X&&v.hasRenderPass())===!1){const _e=y.opaque,de=y.transmissive;if(A.setupLights(),B.isArrayCamera){const Re=B.cameras;if(de.length>0)for(let Ce=0,Je=Re.length;Ce<Je;Ce++){const nt=Re[Ce];wt(_e,de,E,nt)}te&&we.render(E);for(let Ce=0,Je=Re.length;Ce<Je;Ce++){const nt=Re[Ce];Wt(y,E,nt,nt.viewport)}}else de.length>0&&wt(_e,de,E,B),te&&we.render(E),Wt(y,E,B)}z!==null&&I===0&&(N.updateMultisampleRenderTarget(z),N.updateRenderTargetMipmap(z)),X&&v.end(M),E.isScene===!0&&E.onAfterRender(M,E,B),ae.resetDefaultState(),H=-1,k=null,b.pop(),b.length>0?(A=b[b.length-1],Ie===!0&&oe.setGlobalState(M.clippingPlanes,A.state.camera)):A=null,w.pop(),w.length>0?y=w[w.length-1]:y=null};function At(E,B,Y,X){if(E.visible===!1)return;if(E.layers.test(B.layers)){if(E.isGroup)Y=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(B);else if(E.isLight)A.pushLight(E),E.castShadow&&A.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||Le.intersectsSprite(E)){X&&Me.setFromMatrixPosition(E.matrixWorld).applyMatrix4(ot);const _e=xe.update(E),de=E.material;de.visible&&y.push(E,_e,de,Y,Me.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||Le.intersectsObject(E))){const _e=xe.update(E),de=E.material;if(X&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Me.copy(E.boundingSphere.center)):(_e.boundingSphere===null&&_e.computeBoundingSphere(),Me.copy(_e.boundingSphere.center)),Me.applyMatrix4(E.matrixWorld).applyMatrix4(ot)),Array.isArray(de)){const Re=_e.groups;for(let Ce=0,Je=Re.length;Ce<Je;Ce++){const nt=Re[Ce],Be=de[nt.materialIndex];Be&&Be.visible&&y.push(E,_e,Be,Y,Me.z,nt)}}else de.visible&&y.push(E,_e,de,Y,Me.z,null)}}const he=E.children;for(let _e=0,de=he.length;_e<de;_e++)At(he[_e],B,Y,X)}function Wt(E,B,Y,X){const{opaque:W,transmissive:he,transparent:_e}=E;A.setupLightsView(Y),Ie===!0&&oe.setGlobalState(M.clippingPlanes,Y),X&&ye.viewport(G.copy(X)),W.length>0&&gt(W,B,Y),he.length>0&&gt(he,B,Y),_e.length>0&&gt(_e,B,Y),ye.buffers.depth.setTest(!0),ye.buffers.depth.setMask(!0),ye.buffers.color.setMask(!0),ye.setPolygonOffset(!1)}function wt(E,B,Y,X){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[X.id]===void 0){const Be=Ge.has("EXT_color_buffer_half_float")||Ge.has("EXT_color_buffer_float");A.state.transmissionRenderTarget[X.id]=new vi(1,1,{generateMipmaps:!0,type:Be?Ni:ri,minFilter:Wr,samples:Math.max(4,Ve.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ut.workingColorSpace})}const he=A.state.transmissionRenderTarget[X.id],_e=X.viewport||G;he.setSize(_e.z*M.transmissionResolutionScale,_e.w*M.transmissionResolutionScale);const de=M.getRenderTarget(),Re=M.getActiveCubeFace(),Ce=M.getActiveMipmapLevel();M.setRenderTarget(he),M.getClearColor(ee),D=M.getClearAlpha(),D<1&&M.setClearColor(16777215,.5),M.clear(),te&&we.render(Y);const Je=M.toneMapping;M.toneMapping=Ii;const nt=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),A.setupLightsView(X),Ie===!0&&oe.setGlobalState(M.clippingPlanes,X),gt(E,Y,X),N.updateMultisampleRenderTarget(he),N.updateRenderTargetMipmap(he),Ge.has("WEBGL_multisampled_render_to_texture")===!1){let Be=!1;for(let xt=0,Nt=B.length;xt<Nt;xt++){const Lt=B[xt],{object:St,geometry:un,material:Oe,group:On}=Lt;if(Oe.side===qi&&St.layers.test(X.layers)){const ht=Oe.side;Oe.side=Un,Oe.needsUpdate=!0,mt(St,Y,X,un,Oe,On),Oe.side=ht,Oe.needsUpdate=!0,Be=!0}}Be===!0&&(N.updateMultisampleRenderTarget(he),N.updateRenderTargetMipmap(he))}M.setRenderTarget(de,Re,Ce),M.setClearColor(ee,D),nt!==void 0&&(X.viewport=nt),M.toneMapping=Je}function gt(E,B,Y){const X=B.isScene===!0?B.overrideMaterial:null;for(let W=0,he=E.length;W<he;W++){const _e=E[W],{object:de,geometry:Re,group:Ce}=_e;let Je=_e.material;Je.allowOverride===!0&&X!==null&&(Je=X),de.layers.test(Y.layers)&&mt(de,B,Y,Re,Je,Ce)}}function mt(E,B,Y,X,W,he){E.onBeforeRender(M,B,Y,X,W,he),E.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),W.onBeforeRender(M,B,Y,X,E,he),W.transparent===!0&&W.side===qi&&W.forceSinglePass===!1?(W.side=Un,W.needsUpdate=!0,M.renderBufferDirect(Y,B,X,W,E,he),W.side=br,W.needsUpdate=!0,M.renderBufferDirect(Y,B,X,W,E,he),W.side=qi):M.renderBufferDirect(Y,B,X,W,E,he),E.onAfterRender(M,B,Y,X,W,he)}function ln(E,B,Y){B.isScene!==!0&&(B=V);const X=x.get(E),W=A.state.lights,he=A.state.shadowsArray,_e=W.state.version,de=le.getParameters(E,W.state,he,B,Y),Re=le.getProgramCacheKey(de);let Ce=X.programs;X.environment=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?B.environment:null,X.fog=B.fog;const Je=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap;X.envMap=j.get(E.envMap||X.environment,Je),X.envMapRotation=X.environment!==null&&E.envMap===null?B.environmentRotation:E.envMapRotation,Ce===void 0&&(E.addEventListener("dispose",Se),Ce=new Map,X.programs=Ce);let nt=Ce.get(Re);if(nt!==void 0){if(X.currentProgram===nt&&X.lightsStateVersion===_e)return cn(E,de),nt}else de.uniforms=le.getUniforms(E),E.onBeforeCompile(de,M),nt=le.acquireProgram(de,Re),Ce.set(Re,nt),X.uniforms=de.uniforms;const Be=X.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Be.clippingPlanes=oe.uniform),cn(E,de),X.needsLights=Yt(E),X.lightsStateVersion=_e,X.needsLights&&(Be.ambientLightColor.value=W.state.ambient,Be.lightProbe.value=W.state.probe,Be.directionalLights.value=W.state.directional,Be.directionalLightShadows.value=W.state.directionalShadow,Be.spotLights.value=W.state.spot,Be.spotLightShadows.value=W.state.spotShadow,Be.rectAreaLights.value=W.state.rectArea,Be.ltc_1.value=W.state.rectAreaLTC1,Be.ltc_2.value=W.state.rectAreaLTC2,Be.pointLights.value=W.state.point,Be.pointLightShadows.value=W.state.pointShadow,Be.hemisphereLights.value=W.state.hemi,Be.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Be.spotLightMatrix.value=W.state.spotLightMatrix,Be.spotLightMap.value=W.state.spotLightMap,Be.pointShadowMatrix.value=W.state.pointShadowMatrix),X.currentProgram=nt,X.uniformsList=null,nt}function Tt(E){if(E.uniformsList===null){const B=E.currentProgram.getUniforms();E.uniformsList=Zo.seqWithValue(B.seq,E.uniforms)}return E.uniformsList}function cn(E,B){const Y=x.get(E);Y.outputColorSpace=B.outputColorSpace,Y.batching=B.batching,Y.batchingColor=B.batchingColor,Y.instancing=B.instancing,Y.instancingColor=B.instancingColor,Y.instancingMorph=B.instancingMorph,Y.skinning=B.skinning,Y.morphTargets=B.morphTargets,Y.morphNormals=B.morphNormals,Y.morphColors=B.morphColors,Y.morphTargetsCount=B.morphTargetsCount,Y.numClippingPlanes=B.numClippingPlanes,Y.numIntersection=B.numClipIntersection,Y.vertexAlphas=B.vertexAlphas,Y.vertexTangents=B.vertexTangents,Y.toneMapping=B.toneMapping}function Jn(E,B,Y,X,W){B.isScene!==!0&&(B=V),N.resetTextureUnits();const he=B.fog,_e=X.isMeshStandardMaterial||X.isMeshLambertMaterial||X.isMeshPhongMaterial?B.environment:null,de=z===null?M.outputColorSpace:z.isXRRenderTarget===!0?z.texture.colorSpace:$s,Re=X.isMeshStandardMaterial||X.isMeshLambertMaterial&&!X.envMap||X.isMeshPhongMaterial&&!X.envMap,Ce=j.get(X.envMap||_e,Re),Je=X.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,nt=!!Y.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Be=!!Y.morphAttributes.position,xt=!!Y.morphAttributes.normal,Nt=!!Y.morphAttributes.color;let Lt=Ii;X.toneMapped&&(z===null||z.isXRRenderTarget===!0)&&(Lt=M.toneMapping);const St=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,un=St!==void 0?St.length:0,Oe=x.get(X),On=A.state.lights;if(Ie===!0&&(De===!0||E!==k)){const Jt=E===k&&X.id===H;oe.setState(X,E,Jt)}let ht=!1;X.version===Oe.__version?(Oe.needsLights&&Oe.lightsStateVersion!==On.state.version||Oe.outputColorSpace!==de||W.isBatchedMesh&&Oe.batching===!1||!W.isBatchedMesh&&Oe.batching===!0||W.isBatchedMesh&&Oe.batchingColor===!0&&W.colorTexture===null||W.isBatchedMesh&&Oe.batchingColor===!1&&W.colorTexture!==null||W.isInstancedMesh&&Oe.instancing===!1||!W.isInstancedMesh&&Oe.instancing===!0||W.isSkinnedMesh&&Oe.skinning===!1||!W.isSkinnedMesh&&Oe.skinning===!0||W.isInstancedMesh&&Oe.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&Oe.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&Oe.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&Oe.instancingMorph===!1&&W.morphTexture!==null||Oe.envMap!==Ce||X.fog===!0&&Oe.fog!==he||Oe.numClippingPlanes!==void 0&&(Oe.numClippingPlanes!==oe.numPlanes||Oe.numIntersection!==oe.numIntersection)||Oe.vertexAlphas!==Je||Oe.vertexTangents!==nt||Oe.morphTargets!==Be||Oe.morphNormals!==xt||Oe.morphColors!==Nt||Oe.toneMapping!==Lt||Oe.morphTargetsCount!==un)&&(ht=!0):(ht=!0,Oe.__version=X.version);let ui=Oe.currentProgram;ht===!0&&(ui=ln(X,B,W));let yi=!1,wr=!1,as=!1;const Mt=ui.getUniforms(),rn=Oe.uniforms;if(ye.useProgram(ui.program)&&(yi=!0,wr=!0,as=!0),X.id!==H&&(H=X.id,wr=!0),yi||k!==E){ye.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),Mt.setValue(P,"projectionMatrix",E.projectionMatrix),Mt.setValue(P,"viewMatrix",E.matrixWorldInverse);const ir=Mt.map.cameraPosition;ir!==void 0&&ir.setValue(P,Ee.setFromMatrixPosition(E.matrixWorld)),Ve.logarithmicDepthBuffer&&Mt.setValue(P,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&Mt.setValue(P,"isOrthographic",E.isOrthographicCamera===!0),k!==E&&(k=E,wr=!0,as=!0)}if(Oe.needsLights&&(On.state.directionalShadowMap.length>0&&Mt.setValue(P,"directionalShadowMap",On.state.directionalShadowMap,N),On.state.spotShadowMap.length>0&&Mt.setValue(P,"spotShadowMap",On.state.spotShadowMap,N),On.state.pointShadowMap.length>0&&Mt.setValue(P,"pointShadowMap",On.state.pointShadowMap,N)),W.isSkinnedMesh){Mt.setOptional(P,W,"bindMatrix"),Mt.setOptional(P,W,"bindMatrixInverse");const Jt=W.skeleton;Jt&&(Jt.boneTexture===null&&Jt.computeBoneTexture(),Mt.setValue(P,"boneTexture",Jt.boneTexture,N))}W.isBatchedMesh&&(Mt.setOptional(P,W,"batchingTexture"),Mt.setValue(P,"batchingTexture",W._matricesTexture,N),Mt.setOptional(P,W,"batchingIdTexture"),Mt.setValue(P,"batchingIdTexture",W._indirectTexture,N),Mt.setOptional(P,W,"batchingColorTexture"),W._colorsTexture!==null&&Mt.setValue(P,"batchingColorTexture",W._colorsTexture,N));const nr=Y.morphAttributes;if((nr.position!==void 0||nr.normal!==void 0||nr.color!==void 0)&&pe.update(W,Y,ui),(wr||Oe.receiveShadow!==W.receiveShadow)&&(Oe.receiveShadow=W.receiveShadow,Mt.setValue(P,"receiveShadow",W.receiveShadow)),(X.isMeshStandardMaterial||X.isMeshLambertMaterial||X.isMeshPhongMaterial)&&X.envMap===null&&B.environment!==null&&(rn.envMapIntensity.value=B.environmentIntensity),rn.dfgLUT!==void 0&&(rn.dfgLUT.value=ny()),wr&&(Mt.setValue(P,"toneMappingExposure",M.toneMappingExposure),Oe.needsLights&&Xt(rn,as),he&&X.fog===!0&&Ue.refreshFogUniforms(rn,he),Ue.refreshMaterialUniforms(rn,X,Fe,fe,A.state.transmissionRenderTarget[E.id]),Zo.upload(P,Tt(Oe),rn,N)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(Zo.upload(P,Tt(Oe),rn,N),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&Mt.setValue(P,"center",W.center),Mt.setValue(P,"modelViewMatrix",W.modelViewMatrix),Mt.setValue(P,"normalMatrix",W.normalMatrix),Mt.setValue(P,"modelMatrix",W.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const Jt=X.uniformsGroups;for(let ir=0,os=Jt.length;ir<os;ir++){const yf=Jt[ir];me.update(yf,ui),me.bind(yf,ui)}}return ui}function Xt(E,B){E.ambientLightColor.needsUpdate=B,E.lightProbe.needsUpdate=B,E.directionalLights.needsUpdate=B,E.directionalLightShadows.needsUpdate=B,E.pointLights.needsUpdate=B,E.pointLightShadows.needsUpdate=B,E.spotLights.needsUpdate=B,E.spotLightShadows.needsUpdate=B,E.rectAreaLights.needsUpdate=B,E.hemisphereLights.needsUpdate=B}function Yt(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return z},this.setRenderTargetTextures=function(E,B,Y){const X=x.get(E);X.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,X.__autoAllocateDepthBuffer===!1&&(X.__useRenderToTexture=!1),x.get(E.texture).__webglTexture=B,x.get(E.depthTexture).__webglTexture=X.__autoAllocateDepthBuffer?void 0:Y,X.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,B){const Y=x.get(E);Y.__webglFramebuffer=B,Y.__useDefaultFramebuffer=B===void 0};const jt=P.createFramebuffer();this.setRenderTarget=function(E,B=0,Y=0){z=E,R=B,I=Y;let X=null,W=!1,he=!1;if(E){const de=x.get(E);if(de.__useDefaultFramebuffer!==void 0){ye.bindFramebuffer(P.FRAMEBUFFER,de.__webglFramebuffer),G.copy(E.viewport),U.copy(E.scissor),Q=E.scissorTest,ye.viewport(G),ye.scissor(U),ye.setScissorTest(Q),H=-1;return}else if(de.__webglFramebuffer===void 0)N.setupRenderTarget(E);else if(de.__hasExternalTextures)N.rebindTextures(E,x.get(E.texture).__webglTexture,x.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const Je=E.depthTexture;if(de.__boundDepthTexture!==Je){if(Je!==null&&x.has(Je)&&(E.width!==Je.image.width||E.height!==Je.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");N.setupDepthRenderbuffer(E)}}const Re=E.texture;(Re.isData3DTexture||Re.isDataArrayTexture||Re.isCompressedArrayTexture)&&(he=!0);const Ce=x.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Ce[B])?X=Ce[B][Y]:X=Ce[B],W=!0):E.samples>0&&N.useMultisampledRTT(E)===!1?X=x.get(E).__webglMultisampledFramebuffer:Array.isArray(Ce)?X=Ce[Y]:X=Ce,G.copy(E.viewport),U.copy(E.scissor),Q=E.scissorTest}else G.copy(K).multiplyScalar(Fe).floor(),U.copy(ne).multiplyScalar(Fe).floor(),Q=re;if(Y!==0&&(X=jt),ye.bindFramebuffer(P.FRAMEBUFFER,X)&&ye.drawBuffers(E,X),ye.viewport(G),ye.scissor(U),ye.setScissorTest(Q),W){const de=x.get(E.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+B,de.__webglTexture,Y)}else if(he){const de=B;for(let Re=0;Re<E.textures.length;Re++){const Ce=x.get(E.textures[Re]);P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0+Re,Ce.__webglTexture,Y,de)}}else if(E!==null&&Y!==0){const de=x.get(E.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,de.__webglTexture,Y)}H=-1},this.readRenderTargetPixels=function(E,B,Y,X,W,he,_e,de=0){if(!(E&&E.isWebGLRenderTarget)){dt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Re=x.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&_e!==void 0&&(Re=Re[_e]),Re){ye.bindFramebuffer(P.FRAMEBUFFER,Re);try{const Ce=E.textures[de],Je=Ce.format,nt=Ce.type;if(E.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+de),!Ve.textureFormatReadable(Je)){dt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ve.textureTypeReadable(nt)){dt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=E.width-X&&Y>=0&&Y<=E.height-W&&P.readPixels(B,Y,X,W,ue.convert(Je),ue.convert(nt),he)}finally{const Ce=z!==null?x.get(z).__webglFramebuffer:null;ye.bindFramebuffer(P.FRAMEBUFFER,Ce)}}},this.readRenderTargetPixelsAsync=async function(E,B,Y,X,W,he,_e,de=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Re=x.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&_e!==void 0&&(Re=Re[_e]),Re)if(B>=0&&B<=E.width-X&&Y>=0&&Y<=E.height-W){ye.bindFramebuffer(P.FRAMEBUFFER,Re);const Ce=E.textures[de],Je=Ce.format,nt=Ce.type;if(E.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+de),!Ve.textureFormatReadable(Je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ve.textureTypeReadable(nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Be=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,Be),P.bufferData(P.PIXEL_PACK_BUFFER,he.byteLength,P.STREAM_READ),P.readPixels(B,Y,X,W,ue.convert(Je),ue.convert(nt),0);const xt=z!==null?x.get(z).__webglFramebuffer:null;ye.bindFramebuffer(P.FRAMEBUFFER,xt);const Nt=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await wg(P,Nt,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,Be),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,he),P.deleteBuffer(Be),P.deleteSync(Nt),he}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,B=null,Y=0){const X=Math.pow(2,-Y),W=Math.floor(E.image.width*X),he=Math.floor(E.image.height*X),_e=B!==null?B.x:0,de=B!==null?B.y:0;N.setTexture2D(E,0),P.copyTexSubImage2D(P.TEXTURE_2D,Y,0,0,_e,de,W,he),ye.unbindTexture()};const Bi=P.createFramebuffer(),ss=P.createFramebuffer();this.copyTextureToTexture=function(E,B,Y=null,X=null,W=0,he=0){let _e,de,Re,Ce,Je,nt,Be,xt,Nt;const Lt=E.isCompressedTexture?E.mipmaps[he]:E.image;if(Y!==null)_e=Y.max.x-Y.min.x,de=Y.max.y-Y.min.y,Re=Y.isBox3?Y.max.z-Y.min.z:1,Ce=Y.min.x,Je=Y.min.y,nt=Y.isBox3?Y.min.z:0;else{const rn=Math.pow(2,-W);_e=Math.floor(Lt.width*rn),de=Math.floor(Lt.height*rn),E.isDataArrayTexture?Re=Lt.depth:E.isData3DTexture?Re=Math.floor(Lt.depth*rn):Re=1,Ce=0,Je=0,nt=0}X!==null?(Be=X.x,xt=X.y,Nt=X.z):(Be=0,xt=0,Nt=0);const St=ue.convert(B.format),un=ue.convert(B.type);let Oe;B.isData3DTexture?(N.setTexture3D(B,0),Oe=P.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(N.setTexture2DArray(B,0),Oe=P.TEXTURE_2D_ARRAY):(N.setTexture2D(B,0),Oe=P.TEXTURE_2D),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,B.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,B.unpackAlignment);const On=P.getParameter(P.UNPACK_ROW_LENGTH),ht=P.getParameter(P.UNPACK_IMAGE_HEIGHT),ui=P.getParameter(P.UNPACK_SKIP_PIXELS),yi=P.getParameter(P.UNPACK_SKIP_ROWS),wr=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,Lt.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Lt.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Ce),P.pixelStorei(P.UNPACK_SKIP_ROWS,Je),P.pixelStorei(P.UNPACK_SKIP_IMAGES,nt);const as=E.isDataArrayTexture||E.isData3DTexture,Mt=B.isDataArrayTexture||B.isData3DTexture;if(E.isDepthTexture){const rn=x.get(E),nr=x.get(B),Jt=x.get(rn.__renderTarget),ir=x.get(nr.__renderTarget);ye.bindFramebuffer(P.READ_FRAMEBUFFER,Jt.__webglFramebuffer),ye.bindFramebuffer(P.DRAW_FRAMEBUFFER,ir.__webglFramebuffer);for(let os=0;os<Re;os++)as&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,x.get(E).__webglTexture,W,nt+os),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,x.get(B).__webglTexture,he,Nt+os)),P.blitFramebuffer(Ce,Je,_e,de,Be,xt,_e,de,P.DEPTH_BUFFER_BIT,P.NEAREST);ye.bindFramebuffer(P.READ_FRAMEBUFFER,null),ye.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(W!==0||E.isRenderTargetTexture||x.has(E)){const rn=x.get(E),nr=x.get(B);ye.bindFramebuffer(P.READ_FRAMEBUFFER,Bi),ye.bindFramebuffer(P.DRAW_FRAMEBUFFER,ss);for(let Jt=0;Jt<Re;Jt++)as?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,rn.__webglTexture,W,nt+Jt):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,rn.__webglTexture,W),Mt?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,nr.__webglTexture,he,Nt+Jt):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,nr.__webglTexture,he),W!==0?P.blitFramebuffer(Ce,Je,_e,de,Be,xt,_e,de,P.COLOR_BUFFER_BIT,P.NEAREST):Mt?P.copyTexSubImage3D(Oe,he,Be,xt,Nt+Jt,Ce,Je,_e,de):P.copyTexSubImage2D(Oe,he,Be,xt,Ce,Je,_e,de);ye.bindFramebuffer(P.READ_FRAMEBUFFER,null),ye.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else Mt?E.isDataTexture||E.isData3DTexture?P.texSubImage3D(Oe,he,Be,xt,Nt,_e,de,Re,St,un,Lt.data):B.isCompressedArrayTexture?P.compressedTexSubImage3D(Oe,he,Be,xt,Nt,_e,de,Re,St,Lt.data):P.texSubImage3D(Oe,he,Be,xt,Nt,_e,de,Re,St,un,Lt):E.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,he,Be,xt,_e,de,St,un,Lt.data):E.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,he,Be,xt,Lt.width,Lt.height,St,Lt.data):P.texSubImage2D(P.TEXTURE_2D,he,Be,xt,_e,de,St,un,Lt);P.pixelStorei(P.UNPACK_ROW_LENGTH,On),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,ht),P.pixelStorei(P.UNPACK_SKIP_PIXELS,ui),P.pixelStorei(P.UNPACK_SKIP_ROWS,yi),P.pixelStorei(P.UNPACK_SKIP_IMAGES,wr),he===0&&B.generateMipmaps&&P.generateMipmap(Oe),ye.unbindTexture()},this.initRenderTarget=function(E){x.get(E).__webglFramebuffer===void 0&&N.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?N.setTextureCube(E,0):E.isData3DTexture?N.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?N.setTexture2DArray(E,0):N.setTexture2D(E,0),ye.unbindTexture()},this.resetState=function(){R=0,I=0,z=null,ye.reset(),ae.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Di}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=ut._getDrawingBufferColorSpace(e),t.unpackColorSpace=ut._getUnpackColorSpace()}}function ry(r,e={}){const{mouseForce:t=20,cursorSize:n=100,isViscous:i=!0,viscous:s=30,iterationsViscous:a=32,iterationsPoisson:o=32,dt:l=.014,BFECC:c=!0,resolution:u=.5,isBounce:d=!1,colors:f=["#5227FF","#FF9FFC","#B19EEF"],autoDemo:h=!0,autoSpeed:_=.5,autoIntensity:g=2.2,takeoverDuration:p=.25,autoResumeDelay:m=3e3,autoRampDuration:S=.6}=e;let T=null,y=null;function A(Me){let V;Array.isArray(Me)&&Me.length>0?Me.length===1?V=[Me[0],Me[0]]:V=Me:V=["#ffffff","#ffffff"];const te=V.length,O=new Uint8Array(te*4);for(let We=0;We<te;We++){const Ge=new pt(V[We]);O[We*4+0]=Math.round(Ge.r*255),O[We*4+1]=Math.round(Ge.g*255),O[We*4+2]=Math.round(Ge.b*255),O[We*4+3]=255}const P=new jp(O,te,1,oi);return P.magFilter=Ht,P.minFilter=Ht,P.wrapS=$n,P.wrapT=$n,P.generateMipmaps=!1,P.needsUpdate=!0,P}const w=A(f),b=new It(0,0,0,0);class v{constructor(){this.width=0,this.height=0,this.aspect=1,this.pixelRatio=1,this.container=null,this.renderer=null,this.clock=null,this.delta=0,this.time=0}init(V){this.container=V,this.pixelRatio=Math.min(window.devicePixelRatio||1,2),this.resize(),this.renderer=new iy({antialias:!0,alpha:!0}),this.renderer.autoClear=!1,this.renderer.setClearColor(new pt(0),0),this.renderer.setPixelRatio(this.pixelRatio),this.renderer.setSize(this.width,this.height),this.renderer.domElement.style.width="100%",this.renderer.domElement.style.height="100%",this.renderer.domElement.style.display="block",this.clock=new c0,this.clock.start()}resize(){if(!this.container)return;const V=this.container.getBoundingClientRect();this.width=Math.max(1,Math.floor(V.width)),this.height=Math.max(1,Math.floor(V.height)),this.aspect=this.width/this.height,this.renderer&&this.renderer.setSize(this.width,this.height,!1)}update(){this.delta=this.clock.getDelta(),this.time+=this.delta}}const M=new v;class F{constructor(){this.mouseMoved=!1,this.coords=new je,this.coords_old=new je,this.diff=new je,this.timer=null,this.container=null,this.docTarget=null,this.listenerTarget=null,this.isHoverInside=!1,this.hasUserControl=!1,this.isAutoActive=!1,this.autoIntensity=2,this.takeoverActive=!1,this.takeoverStartTime=0,this.takeoverDuration=.25,this.takeoverFrom=new je,this.takeoverTo=new je,this.onInteract=null,this._onMouseMove=this.onDocumentMouseMove.bind(this),this._onTouchStart=this.onDocumentTouchStart.bind(this),this._onTouchMove=this.onDocumentTouchMove.bind(this),this._onTouchEnd=this.onTouchEnd.bind(this),this._onDocumentLeave=this.onDocumentLeave.bind(this)}init(V){this.container=V,this.docTarget=V.ownerDocument||null;const te=this.docTarget&&this.docTarget.defaultView||window;te&&(this.listenerTarget=te,this.listenerTarget.addEventListener("mousemove",this._onMouseMove),this.listenerTarget.addEventListener("touchstart",this._onTouchStart,{passive:!0}),this.listenerTarget.addEventListener("touchmove",this._onTouchMove,{passive:!0}),this.listenerTarget.addEventListener("touchend",this._onTouchEnd),this.docTarget&&this.docTarget.addEventListener("mouseleave",this._onDocumentLeave))}dispose(){this.listenerTarget&&(this.listenerTarget.removeEventListener("mousemove",this._onMouseMove),this.listenerTarget.removeEventListener("touchstart",this._onTouchStart),this.listenerTarget.removeEventListener("touchmove",this._onTouchMove),this.listenerTarget.removeEventListener("touchend",this._onTouchEnd)),this.docTarget&&this.docTarget.removeEventListener("mouseleave",this._onDocumentLeave)}isPointInside(V,te){if(!this.container)return!1;const O=this.container.getBoundingClientRect();return O.width===0||O.height===0?!1:V>=O.left&&V<=O.right&&te>=O.top&&te<=O.bottom}updateHoverState(V,te){return this.isHoverInside=this.isPointInside(V,te),this.isHoverInside}setCoords(V,te){if(!this.container)return;this.timer&&window.clearTimeout(this.timer);const O=this.container.getBoundingClientRect();if(O.width===0||O.height===0)return;const P=(V-O.left)/O.width,We=(te-O.top)/O.height;this.coords.set(P*2-1,-(We*2-1)),this.mouseMoved=!0,this.timer=window.setTimeout(()=>{this.mouseMoved=!1},100)}setNormalized(V,te){this.coords.set(V,te),this.mouseMoved=!0}onDocumentMouseMove(V){if(this.isHoverInside=!0,this.onInteract&&this.onInteract(),this.isAutoActive&&!this.hasUserControl&&!this.takeoverActive){if(!this.container)return;const te=this.container.getBoundingClientRect();if(te.width===0||te.height===0)return;const O=(V.clientX-te.left)/te.width,P=(V.clientY-te.top)/te.height;this.takeoverFrom.copy(this.coords),this.takeoverTo.set(O*2-1,-(P*2-1)),this.takeoverStartTime=performance.now(),this.takeoverActive=!0,this.hasUserControl=!0,this.isAutoActive=!1;return}this.setCoords(V.clientX,V.clientY),this.hasUserControl=!0}onDocumentTouchStart(V){if(V.touches.length!==1)return;const te=V.touches[0];this.isHoverInside=!0,this.onInteract&&this.onInteract(),this.setCoords(te.clientX,te.clientY),this.hasUserControl=!0}onDocumentTouchMove(V){if(V.touches.length!==1)return;const te=V.touches[0];this.isHoverInside=!0,this.onInteract&&this.onInteract(),this.setCoords(te.clientX,te.clientY)}onTouchEnd(){this.isHoverInside=!1}onDocumentLeave(){this.isHoverInside=!1}update(){if(this.takeoverActive){const V=(performance.now()-this.takeoverStartTime)/(this.takeoverDuration*1e3);if(V>=1)this.takeoverActive=!1,this.coords.copy(this.takeoverTo),this.coords_old.copy(this.coords),this.diff.set(0,0);else{const te=V*V*(3-2*V);this.coords.copy(this.takeoverFrom).lerp(this.takeoverTo,te)}}this.diff.subVectors(this.coords,this.coords_old),this.coords_old.copy(this.coords),this.coords_old.x===0&&this.coords_old.y===0&&this.diff.set(0,0),this.isAutoActive&&!this.takeoverActive&&this.diff.multiplyScalar(this.autoIntensity)}}const R=new F;class I{constructor(V,te,O){this.mouse=V,this.manager=te,this.enabled=O.enabled,this.speed=O.speed,this.resumeDelay=O.resumeDelay||3e3,this.rampDurationMs=(O.rampDuration||0)*1e3,this.active=!1,this.current=new je(0,0),this.target=new je,this.lastTime=performance.now(),this.activationTime=0,this.margin=.2,this._tmpDir=new je,this.pickNewTarget()}pickNewTarget(){const V=Math.random;this.target.set((V()*2-1)*(1-this.margin),(V()*2-1)*(1-this.margin))}forceStop(){this.active=!1,this.mouse.isAutoActive=!1}update(){if(!this.enabled)return;const V=performance.now();if(V-this.manager.lastUserInteraction<this.resumeDelay){this.active&&this.forceStop();return}if(this.mouse.isHoverInside){this.active&&this.forceStop();return}if(this.active||(this.active=!0,this.current.copy(this.mouse.coords),this.lastTime=V,this.activationTime=V),!this.active)return;this.mouse.isAutoActive=!0;let O=(V-this.lastTime)/1e3;this.lastTime=V,O>.2&&(O=.016);const P=this._tmpDir.subVectors(this.target,this.current),We=P.length();if(We<.01){this.pickNewTarget();return}P.normalize();let Ge=1;if(this.rampDurationMs>0){const C=Math.min(1,(V-this.activationTime)/this.rampDurationMs);Ge=C*C*(3-2*C)}const Ve=this.speed*O*Ge,ye=Math.min(Ve,We);this.current.addScaledVector(P,ye),this.mouse.setNormalized(this.current.x,this.current.y)}}const z="attribute vec3 position; uniform vec2 boundarySpace; varying vec2 uv; precision highp float; void main(){ vec2 scale = 1.0 - boundarySpace * 2.0; vec3 pos = position; pos.xy = pos.xy * scale; uv = vec2(0.5)+(pos.xy)*0.5; gl_Position = vec4(pos, 1.0); }",H="attribute vec3 position; uniform vec2 px; varying vec2 uv; precision highp float; void main(){ vec3 pos = position; uv = 0.5 + pos.xy * 0.5; vec2 n = sign(pos.xy); pos.xy = abs(pos.xy) - px * 1.0; pos.xy *= n; gl_Position = vec4(pos, 1.0); }",k="attribute vec3 position; attribute vec2 uv; uniform vec2 center; uniform vec2 scale; uniform vec2 px; varying vec2 vUv; precision highp float; void main(){ vec2 pos = position.xy * scale * 2.0 * px + center; vUv = uv; gl_Position = vec4(pos, 0.0, 1.0); }",G="precision highp float; uniform sampler2D velocity; uniform float dt; uniform bool isBFECC; uniform vec2 fboSize; varying vec2 uv; void main(){ vec2 ratio = max(fboSize.x, fboSize.y) / fboSize; if(isBFECC == false){ vec2 vel = texture2D(velocity, uv).xy; vec2 uv2 = uv - vel * dt * ratio; vec2 newVel = texture2D(velocity, uv2).xy; gl_FragColor = vec4(newVel, 0.0, 0.0); } else { vec2 spot_new = uv; vec2 vel_old = texture2D(velocity, uv).xy; vec2 spot_old = spot_new - vel_old * dt * ratio; vec2 vel_new1 = texture2D(velocity, spot_old).xy; vec2 spot_new2 = spot_old + vel_new1 * dt * ratio; vec2 error = spot_new2 - spot_new; vec2 spot_new3 = spot_new - error / 2.0; vec2 vel_2 = texture2D(velocity, spot_new3).xy; vec2 spot_old2 = spot_new3 - vel_2 * dt * ratio; vec2 newVel2 = texture2D(velocity, spot_old2).xy; gl_FragColor = vec4(newVel2, 0.0, 0.0); } }",U="precision highp float; uniform sampler2D velocity; uniform sampler2D palette; uniform vec4 bgColor; varying vec2 uv; void main(){ vec2 vel = texture2D(velocity, uv).xy; float lenv = clamp(length(vel), 0.0, 1.0); vec3 c = texture2D(palette, vec2(lenv, 0.5)).rgb; vec3 outRGB = mix(bgColor.rgb, c, lenv); float outA = mix(bgColor.a, 1.0, lenv); gl_FragColor = vec4(outRGB, outA); }",Q="precision highp float; uniform sampler2D velocity; uniform float dt; uniform vec2 px; varying vec2 uv; void main(){ float x0 = texture2D(velocity, uv-vec2(px.x, 0.0)).x; float x1 = texture2D(velocity, uv+vec2(px.x, 0.0)).x; float y0 = texture2D(velocity, uv-vec2(0.0, px.y)).y; float y1 = texture2D(velocity, uv+vec2(0.0, px.y)).y; float divergence = (x1 - x0 + y1 - y0) / 2.0; gl_FragColor = vec4(divergence / dt); }",ee="precision highp float; uniform vec2 force; varying vec2 vUv; void main(){ vec2 circle = (vUv - 0.5) * 2.0; float d = 1.0 - min(length(circle), 1.0); d *= d; gl_FragColor = vec4(force * d, 0.0, 1.0); }",D="precision highp float; uniform sampler2D pressure; uniform sampler2D divergence; uniform vec2 px; varying vec2 uv; void main(){ float p0 = texture2D(pressure, uv + vec2(px.x * 2.0, 0.0)).r; float p1 = texture2D(pressure, uv - vec2(px.x * 2.0, 0.0)).r; float p2 = texture2D(pressure, uv + vec2(0.0, px.y * 2.0)).r; float p3 = texture2D(pressure, uv - vec2(0.0, px.y * 2.0)).r; float div = texture2D(divergence, uv).r; float newP = (p0 + p1 + p2 + p3) / 4.0 - div; gl_FragColor = vec4(newP); }",ce="precision highp float; uniform sampler2D pressure; uniform sampler2D velocity; uniform vec2 px; uniform float dt; varying vec2 uv; void main(){ float p0 = texture2D(pressure, uv + vec2(px.x, 0.0)).r; float p1 = texture2D(pressure, uv - vec2(px.x, 0.0)).r; float p2 = texture2D(pressure, uv + vec2(0.0, px.y)).r; float p3 = texture2D(pressure, uv - vec2(0.0, px.y)).r; vec2 v = texture2D(velocity, uv).xy; vec2 gradP = vec2(p0 - p1, p2 - p3) * 0.5; v = v - gradP * dt; gl_FragColor = vec4(v, 0.0, 1.0); }",fe="precision highp float; uniform sampler2D velocity; uniform sampler2D velocity_new; uniform float v; uniform vec2 px; uniform float dt; varying vec2 uv; void main(){ vec2 old = texture2D(velocity, uv).xy; vec2 new0 = texture2D(velocity_new, uv + vec2(px.x * 2.0, 0.0)).xy; vec2 new1 = texture2D(velocity_new, uv - vec2(px.x * 2.0, 0.0)).xy; vec2 new2 = texture2D(velocity_new, uv + vec2(0.0, px.y * 2.0)).xy; vec2 new3 = texture2D(velocity_new, uv - vec2(0.0, px.y * 2.0)).xy; vec2 newv = 4.0 * old + v * dt * (new0 + new1 + new2 + new3); newv /= 4.0 * (1.0 + v * dt); gl_FragColor = vec4(newv, 0.0, 0.0); }";class Fe{constructor(V){var te;this.props=V||{},this.uniforms=(te=this.props.material)==null?void 0:te.uniforms}init(){this.scene=new Eh,this.camera=new pl,this.uniforms&&(this.material=new va(this.props.material),this.geometry=new Qr(2,2),this.plane=new ci(this.geometry,this.material),this.scene.add(this.plane))}update(){M.renderer.setRenderTarget(this.props.output||null),M.renderer.render(this.scene,this.camera),M.renderer.setRenderTarget(null)}}class He extends Fe{constructor(V){super({material:{vertexShader:z,fragmentShader:G,uniforms:{boundarySpace:{value:V.cellScale},px:{value:V.cellScale},fboSize:{value:V.fboSize},velocity:{value:V.src.texture},dt:{value:V.dt},isBFECC:{value:!0}}},output:V.dst}),this.init(),this.createBoundary()}createBoundary(){const V=new Mi,te=new Float32Array([-1,-1,0,-1,1,0,-1,1,0,1,1,0,1,1,0,1,-1,0,1,-1,0,-1,-1,0]);V.setAttribute("position",new xi(te,3)),this.line=new Qg(V,new va({vertexShader:H,fragmentShader:G,uniforms:this.uniforms})),this.scene.add(this.line)}update({dt:V,isBounce:te,BFECC:O}){this.uniforms.dt.value=V,this.line.visible=te,this.uniforms.isBFECC.value=O,super.update()}}class Ke extends Fe{constructor(V){super({output:V.dst}),this.init(V)}init(V){super.init(),this.mouse=new ci(new Qr(1,1),new va({vertexShader:k,fragmentShader:ee,blending:Wc,depthWrite:!1,uniforms:{px:{value:V.cellScale},force:{value:new je},center:{value:new je},scale:{value:new je(V.cursor_size,V.cursor_size)}}})),this.scene.add(this.mouse)}update(V){const te=R.diff.x/2*V.mouse_force,O=R.diff.y/2*V.mouse_force,P=this.mouse.material.uniforms;P.force.value.set(te,O),P.center.value.set(R.coords.x,R.coords.y),P.scale.value.set(V.cursor_size,V.cursor_size),super.update()}}class K extends Fe{constructor(V){super({material:{vertexShader:z,fragmentShader:fe,uniforms:{boundarySpace:{value:V.boundarySpace},velocity:{value:V.src.texture},velocity_new:{value:V.dst_.texture},v:{value:V.viscous},px:{value:V.cellScale},dt:{value:V.dt}}},output:V.dst,output0:V.dst_,output1:V.dst}),this.init()}update({viscous:V,iterations:te,dt:O}){let P,We;this.uniforms.v.value=V;for(let Ge=0;Ge<te;Ge++)[P,We]=Ge%2===0?[this.props.output0,this.props.output1]:[this.props.output1,this.props.output0],this.uniforms.velocity_new.value=P.texture,this.props.output=We,this.uniforms.dt.value=O,super.update();return We}}class ne extends Fe{constructor(V){super({material:{vertexShader:z,fragmentShader:Q,uniforms:{boundarySpace:{value:V.boundarySpace},velocity:{value:V.src.texture},px:{value:V.cellScale},dt:{value:V.dt}}},output:V.dst}),this.init()}update({vel:V}){this.uniforms.velocity.value=V.texture,super.update()}}class re extends Fe{constructor(V){super({material:{vertexShader:z,fragmentShader:D,uniforms:{boundarySpace:{value:V.boundarySpace},pressure:{value:V.dst_.texture},divergence:{value:V.src.texture},px:{value:V.cellScale}}},output:V.dst,output0:V.dst_,output1:V.dst}),this.init()}update({iterations:V}){let te,O;for(let P=0;P<V;P++)[te,O]=P%2===0?[this.props.output0,this.props.output1]:[this.props.output1,this.props.output0],this.uniforms.pressure.value=te.texture,this.props.output=O,super.update();return O}}class Le extends Fe{constructor(V){super({material:{vertexShader:z,fragmentShader:ce,uniforms:{boundarySpace:{value:V.boundarySpace},pressure:{value:V.src_p.texture},velocity:{value:V.src_v.texture},px:{value:V.cellScale},dt:{value:V.dt}}},output:V.dst}),this.init()}update({vel:V,pressure:te}){this.uniforms.velocity.value=V.texture,this.uniforms.pressure.value=te.texture,super.update()}}class Ie{constructor(V){this.options={...V},this.fbos={vel_0:null,vel_1:null,vel_viscous0:null,vel_viscous1:null,div:null,pressure_0:null,pressure_1:null},this.fboSize=new je,this.cellScale=new je,this.boundarySpace=new je,this.init()}init(){this.calcSize();const te={type:/(iPad|iPhone|iPod)/i.test(navigator.userAgent)?Ni:gi,minFilter:Ht,magFilter:Ht,wrapS:$n,wrapT:$n};for(let O in this.fbos)this.fbos[O]=new vi(this.fboSize.x,this.fboSize.y,te);this.advection=new He({cellScale:this.cellScale,fboSize:this.fboSize,dt:this.options.dt,src:this.fbos.vel_0,dst:this.fbos.vel_1}),this.externalForce=new Ke({cellScale:this.cellScale,cursor_size:this.options.cursor_size,dst:this.fbos.vel_1}),this.viscous=new K({cellScale:this.cellScale,boundarySpace:this.boundarySpace,viscous:this.options.viscous,src:this.fbos.vel_1,dst:this.fbos.vel_viscous1,dst_:this.fbos.vel_viscous0,dt:this.options.dt}),this.divergence=new ne({cellScale:this.cellScale,boundarySpace:this.boundarySpace,src:this.fbos.vel_viscous0,dst:this.fbos.div,dt:this.options.dt}),this.poisson=new re({cellScale:this.cellScale,boundarySpace:this.boundarySpace,src:this.fbos.div,dst:this.fbos.pressure_1,dst_:this.fbos.pressure_0}),this.pressure=new Le({cellScale:this.cellScale,boundarySpace:this.boundarySpace,src_p:this.fbos.pressure_0,src_v:this.fbos.vel_viscous0,dst:this.fbos.vel_0,dt:this.options.dt})}calcSize(){const V=Math.max(1,Math.round(this.options.resolution*M.width)),te=Math.max(1,Math.round(this.options.resolution*M.height));this.cellScale.set(1/V,1/te),this.fboSize.set(V,te)}resize(){this.calcSize();for(let V in this.fbos)this.fbos[V].setSize(this.fboSize.x,this.fboSize.y)}update(){this.boundarySpace.copy(this.options.isBounce?new je:this.cellScale),this.advection.update({dt:this.options.dt,isBounce:this.options.isBounce,BFECC:this.options.BFECC}),this.externalForce.update({cursor_size:this.options.cursor_size,mouse_force:this.options.mouse_force,cellScale:this.cellScale});let V=this.fbos.vel_1;this.options.isViscous&&(V=this.viscous.update({viscous:this.options.viscous,iterations:this.options.iterations_viscous,dt:this.options.dt})),this.divergence.update({vel:V});const te=this.poisson.update({iterations:this.options.iterations_poisson});this.pressure.update({vel:V,pressure:te})}}class De{constructor(V){this.simulation=V,this.scene=new Eh,this.camera=new pl,this.output=new ci(new Qr(2,2),new va({vertexShader:z,fragmentShader:U,transparent:!0,depthWrite:!1,uniforms:{velocity:{value:this.simulation.fbos.vel_0.texture},palette:{value:w},bgColor:{value:b}}})),this.scene.add(this.output)}resize(){this.simulation.resize()}update(){this.simulation.update(),M.renderer.setRenderTarget(null),M.renderer.render(this.scene,this.camera)}}class ot{constructor(V){M.init(V.$wrapper),R.init(V.$wrapper),R.autoIntensity=V.autoIntensity,R.takeoverDuration=V.takeoverDuration,this.lastUserInteraction=performance.now(),R.onInteract=()=>{this.lastUserInteraction=performance.now(),this.autoDriver&&this.autoDriver.forceStop()},this.autoDriver=new I(R,this,{enabled:V.autoDemo,speed:V.autoSpeed,resumeDelay:V.autoResumeDelay,rampDuration:V.autoRampDuration}),V.$wrapper.prepend(M.renderer.domElement),this.simulation=new Ie({iterations_poisson:o,iterations_viscous:a,mouse_force:t,resolution:u,cursor_size:n,viscous:s,isBounce:d,dt:l,isViscous:i,BFECC:c}),this.output=new De(this.simulation),this._loop=this.loop.bind(this),this.running=!1}resize(){M.resize(),this.output.resize()}loop(){this.running&&(this.autoDriver&&this.autoDriver.update(),R.update(),M.update(),this.output.update(),T=requestAnimationFrame(this._loop))}start(){this.running||(this.running=!0,this._loop())}pause(){this.running=!1,T&&(cancelAnimationFrame(T),T=null)}}const Ee=new ot({$wrapper:r,autoDemo:h,autoSpeed:_,autoIntensity:g,takeoverDuration:p,autoResumeDelay:m,autoRampDuration:S});Ee.start(),window.addEventListener("resize",()=>{y&&cancelAnimationFrame(y),y=requestAnimationFrame(()=>Ee.resize())})}ry(document.getElementById("liquid-bg"),{colors:["#5227FF","#FF9FFC","#B19EEF"],mouseForce:7,cursorSize:100,viscous:40,resolution:.35,iterationsPoisson:16,iterationsViscous:16});gn.registerPlugin(at);const sy=document.querySelector(".cursor"),Xa=document.querySelector(".cursor-follower"),ay=document.querySelectorAll(".magnetic");let vc=0,xc=0,Ou=0,Bu=0;gn.to({},.016,{repeat:-1,onRepeat:function(){vc+=(Ou-vc)/9,xc+=(Bu-xc)/9,gn.set(Xa,{css:{left:vc,top:xc}}),gn.set(sy,{css:{left:Ou,top:Bu}})}});document.addEventListener("mousemove",function(r){Ou=r.clientX,Bu=r.clientY});ay.forEach(r=>{r.addEventListener("mousemove",e=>{const t=r.getBoundingClientRect(),n=t.left+t.width/2,i=t.top+t.height/2,s=(e.clientX-n)*.3,a=(e.clientY-i)*.3;gn.to(r,{x:s,y:a,duration:.4,ease:"power2.out"}),gn.to(Xa,{width:60,height:60,backgroundColor:"rgba(255,255,255,0.1)",duration:.3})}),r.addEventListener("mouseleave",()=>{gn.to(r,{x:0,y:0,duration:.6,ease:"elastic.out(1, 0.3)"}),gn.to(Xa,{width:40,height:40,backgroundColor:"transparent",duration:.3})})});const oy=document.querySelectorAll(".project-item");oy.forEach(r=>{r.addEventListener("mouseenter",()=>{gn.to(Xa,{scale:1.5,duration:.3})}),r.addEventListener("mouseleave",()=>{gn.to(Xa,{scale:1,duration:.3})})});document.querySelectorAll(".hero-title .line").forEach(r=>{r.innerHTML=`<span>${r.innerHTML}</span>`});const ly=gn.timeline();ly.fromTo(".hero-title .line span",{y:"100%"},{y:"0%",duration:1.2,ease:"power4.out",stagger:.15},"+=0.2").to(".hero-subtitle",{opacity:1,y:0,duration:.8,ease:"power2.out"},"-=0.8").fromTo(".hero-desc",{opacity:0,y:20},{opacity:1,y:0,duration:.8,ease:"power2.out"},"-=0.6").to(".scroll-indicator",{opacity:1,duration:1},"-=0.4");gn.to(".marquee-track",{xPercent:-50,ease:"none",duration:12,repeat:-1});gn.utils.toArray(".project-item").forEach(r=>{gn.from(r,{scrollTrigger:{trigger:r,start:"top 85%"},opacity:0,y:60,duration:.8,ease:"power3.out"})});gn.from(".contact-title",{scrollTrigger:{trigger:".contact",start:"top bottom",end:"bottom top",scrub:1},y:-100,opacity:.5});
