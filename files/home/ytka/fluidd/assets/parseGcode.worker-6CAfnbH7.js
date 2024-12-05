(function(){"use strict";const te=(e,t)=>e in t;var ne=typeof global=="object"&&global&&global.Object===Object&&global,re=typeof self=="object"&&self&&self.Object===Object&&self,I=ne||re||Function("return this")(),g=I.Symbol,H=Object.prototype,ie=H.hasOwnProperty,oe=H.toString,x=g?g.toStringTag:void 0;function ae(e){var t=ie.call(e,x),n=e[x];try{e[x]=void 0;var r=!0}catch{}var o=oe.call(e);return r&&(t?e[x]=n:delete e[x]),o}var se=Object.prototype,ce=se.toString;function le(e){return ce.call(e)}var ue="[object Null]",fe="[object Undefined]",L=g?g.toStringTag:void 0;function $(e){return e==null?e===void 0?fe:ue:L&&L in Object(e)?ae(e):le(e)}function A(e){return e!=null&&typeof e=="object"}var he="[object Symbol]";function F(e){return typeof e=="symbol"||A(e)&&$(e)==he}function pe(e,t){for(var n=-1,r=e==null?0:e.length,o=Array(r);++n<r;)o[n]=t(e[n],n,e);return o}var w=Array.isArray,de=1/0,U=g?g.prototype:void 0,Q=U?U.toString:void 0;function q(e){if(typeof e=="string")return e;if(w(e))return pe(e,q)+"";if(F(e))return Q?Q.call(e):"";var t=e+"";return t=="0"&&1/e==-de?"-0":t}function C(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")}function ge(e){return e}var ye="[object AsyncFunction]",_e="[object Function]",me="[object GeneratorFunction]",be="[object Proxy]";function ve(e){if(!C(e))return!1;var t=$(e);return t==_e||t==me||t==ye||t==be}var N=I["__core-js_shared__"],k=function(){var e=/[^.]+$/.exec(N&&N.keys&&N.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();function xe(e){return!!k&&k in e}var we=Function.prototype,Oe=we.toString;function Se(e){if(e!=null){try{return Oe.call(e)}catch{}try{return e+""}catch{}}return""}var Ce=/[\\^$.*+?()[\]{}|]/g,Ee=/^\[object .+?Constructor\]$/,Pe=Function.prototype,Te=Object.prototype,ze=Pe.toString,Ie=Te.hasOwnProperty,$e=RegExp("^"+ze.call(Ie).replace(Ce,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function Ae(e){if(!C(e)||xe(e))return!1;var t=ve(e)?$e:Ee;return t.test(Se(e))}function Fe(e,t){return e==null?void 0:e[t]}function j(e,t){var n=Fe(e,t);return Ae(n)?n:void 0}function Ne(e,t,n){switch(n.length){case 0:return e.call(t);case 1:return e.call(t,n[0]);case 2:return e.call(t,n[0],n[1]);case 3:return e.call(t,n[0],n[1],n[2])}return e.apply(t,n)}var je=800,Me=16,Re=Date.now;function Ge(e){var t=0,n=0;return function(){var r=Re(),o=Me-(r-n);if(n=r,o>0){if(++t>=je)return arguments[0]}else t=0;return e.apply(void 0,arguments)}}function De(e){return function(){return e}}var E=function(){try{var e=j(Object,"defineProperty");return e({},"",{}),e}catch{}}(),He=E?function(e,t){return E(e,"toString",{configurable:!0,enumerable:!1,value:De(t),writable:!0})}:ge,Le=Ge(He),Ue=9007199254740991,Qe=/^(?:0|[1-9]\d*)$/;function X(e,t){var n=typeof e;return t=t??Ue,!!t&&(n=="number"||n!="symbol"&&Qe.test(e))&&e>-1&&e%1==0&&e<t}function qe(e,t,n){t=="__proto__"&&E?E(e,t,{configurable:!0,enumerable:!0,value:n,writable:!0}):e[t]=n}function K(e,t){return e===t||e!==e&&t!==t}var ke=Object.prototype,Xe=ke.hasOwnProperty;function Ke(e,t,n){var r=e[t];(!(Xe.call(e,t)&&K(r,n))||n===void 0&&!(t in e))&&qe(e,t,n)}var J=Math.max;function Je(e,t,n){return t=J(t===void 0?e.length-1:t,0),function(){for(var r=arguments,o=-1,s=J(r.length-t,0),c=Array(s);++o<s;)c[o]=r[t+o];o=-1;for(var a=Array(t+1);++o<t;)a[o]=r[o];return a[t]=n(c),Ne(e,this,a)}}var Be=9007199254740991;function Ye(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=Be}var Ze="[object Arguments]";function B(e){return A(e)&&$(e)==Ze}var Y=Object.prototype,Ve=Y.hasOwnProperty,We=Y.propertyIsEnumerable,Z=B(function(){return arguments}())?B:function(e){return A(e)&&Ve.call(e,"callee")&&!We.call(e,"callee")},et=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,tt=/^\w*$/;function nt(e,t){if(w(e))return!1;var n=typeof e;return n=="number"||n=="symbol"||n=="boolean"||e==null||F(e)?!0:tt.test(e)||!et.test(e)||t!=null&&e in Object(t)}var O=j(Object,"create");function rt(){this.__data__=O?O(null):{},this.size=0}function it(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}var ot="__lodash_hash_undefined__",at=Object.prototype,st=at.hasOwnProperty;function ct(e){var t=this.__data__;if(O){var n=t[e];return n===ot?void 0:n}return st.call(t,e)?t[e]:void 0}var lt=Object.prototype,ut=lt.hasOwnProperty;function ft(e){var t=this.__data__;return O?t[e]!==void 0:ut.call(t,e)}var ht="__lodash_hash_undefined__";function pt(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=O&&t===void 0?ht:t,this}function _(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}_.prototype.clear=rt,_.prototype.delete=it,_.prototype.get=ct,_.prototype.has=ft,_.prototype.set=pt;function dt(){this.__data__=[],this.size=0}function P(e,t){for(var n=e.length;n--;)if(K(e[n][0],t))return n;return-1}var gt=Array.prototype,yt=gt.splice;function _t(e){var t=this.__data__,n=P(t,e);if(n<0)return!1;var r=t.length-1;return n==r?t.pop():yt.call(t,n,1),--this.size,!0}function mt(e){var t=this.__data__,n=P(t,e);return n<0?void 0:t[n][1]}function bt(e){return P(this.__data__,e)>-1}function vt(e,t){var n=this.__data__,r=P(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this}function v(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}v.prototype.clear=dt,v.prototype.delete=_t,v.prototype.get=mt,v.prototype.has=bt,v.prototype.set=vt;var xt=j(I,"Map");function wt(){this.size=0,this.__data__={hash:new _,map:new(xt||v),string:new _}}function Ot(e){var t=typeof e;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?e!=="__proto__":e===null}function T(e,t){var n=e.__data__;return Ot(t)?n[typeof t=="string"?"string":"hash"]:n.map}function St(e){var t=T(this,e).delete(e);return this.size-=t?1:0,t}function Ct(e){return T(this,e).get(e)}function Et(e){return T(this,e).has(e)}function Pt(e,t){var n=T(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this}function m(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}m.prototype.clear=wt,m.prototype.delete=St,m.prototype.get=Ct,m.prototype.has=Et,m.prototype.set=Pt;var Tt="Expected a function";function M(e,t){if(typeof e!="function"||t!=null&&typeof t!="function")throw new TypeError(Tt);var n=function(){var r=arguments,o=t?t.apply(this,r):r[0],s=n.cache;if(s.has(o))return s.get(o);var c=e.apply(this,r);return n.cache=s.set(o,c)||s,c};return n.cache=new(M.Cache||m),n}M.Cache=m;var zt=500;function It(e){var t=M(e,function(r){return n.size===zt&&n.clear(),r}),n=t.cache;return t}var $t=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,At=/\\(\\)?/g,Ft=It(function(e){var t=[];return e.charCodeAt(0)===46&&t.push(""),e.replace($t,function(n,r,o,s){t.push(o?s.replace(At,"$1"):r||n)}),t});function Nt(e){return e==null?"":q(e)}function z(e,t){return w(e)?e:nt(e,t)?[e]:Ft(Nt(e))}var jt=1/0;function R(e){if(typeof e=="string"||F(e))return e;var t=e+"";return t=="0"&&1/e==-jt?"-0":t}function Mt(e,t){t=z(t,e);for(var n=0,r=t.length;e!=null&&n<r;)e=e[R(t[n++])];return n&&n==r?e:void 0}function Rt(e,t){for(var n=-1,r=t.length,o=e.length;++n<r;)e[o+n]=t[n];return e}var V=g?g.isConcatSpreadable:void 0;function Gt(e){return w(e)||Z(e)||!!(V&&e&&e[V])}function Dt(e,t,n,r,o){var s=-1,c=e.length;for(n||(n=Gt),o||(o=[]);++s<c;){var a=e[s];n(a)?Rt(o,a):o[o.length]=a}return o}function Ht(e){var t=e==null?0:e.length;return t?Dt(e):[]}function Lt(e){return Le(Je(e,void 0,Ht),e+"")}function Ut(e,t){return e!=null&&t in Object(e)}function Qt(e,t,n){t=z(t,e);for(var r=-1,o=t.length,s=!1;++r<o;){var c=R(t[r]);if(!(s=e!=null&&n(e,c)))break;e=e[c]}return s||++r!=o?s:(o=e==null?0:e.length,!!o&&Ye(o)&&X(c,o)&&(w(e)||Z(e)))}function qt(e,t){return e!=null&&Qt(e,t,Ut)}function kt(e,t,n,r){if(!C(e))return e;t=z(t,e);for(var o=-1,s=t.length,c=s-1,a=e;a!=null&&++o<s;){var h=R(t[o]),i=n;if(h==="__proto__"||h==="constructor"||h==="prototype")return e;if(o!=c){var u=a[h];i=void 0,i===void 0&&(i=C(u)?u:X(t[o+1])?[]:{})}Ke(a,h,i),a=a[h]}return e}function Xt(e,t,n){for(var r=-1,o=t.length,s={};++r<o;){var c=t[r],a=Mt(e,c);n(a,c)&&kt(s,z(c,e),a)}return s}function Kt(e,t){return Xt(e,t,function(n,r){return qt(e,r)})}var W=Lt(function(e,t){return e==null?{}:Kt(e,t)});function Jt(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var G={},ee;function Bt(){return ee||(ee=1,function(e){class t{constructor(r){this.i=0,this.string=r,this.whitespace=` 	\r
`,this.quotes=`'"`,this.escapes="\\",this.escapedQuotes='"',this.ansiCQuotes=!0,this.localeQuotes=!0,this.debug=!1}readChar(){return this.string.charAt(this.i++)}processEscapes(r,o,s){if(!s&&!this.escapedQuotes.includes(o))return r;const c="["+this.escapes.replace(/(.)/g,"\\$1")+"]";if(!s&&this.escapedQuotes.includes(o)){const a=new RegExp(c+"("+c+"|\\"+o+")","g");return r.replace(a,"$1")}if(s){const a={"([\\\\'\"?])":i=>i,a:()=>"\x07",b:()=>"\b","e|E":()=>"\x1B",f:()=>"\f",n:()=>`
`,r:()=>"\r",t:()=>"	",v:()=>"\v","([0-7]{1,3})":i=>String.fromCharCode(parseInt(i,8)),"x([0-9a-fA-F]{1,2})":i=>String.fromCharCode(parseInt(i,16)),"u([0-9a-fA-F]{1,4})":i=>String.fromCharCode(parseInt(i,16)),"U([0-9a-fA-F]{1,8})":i=>String.fromCharCode(parseInt(i,16)),"c(.)":i=>i==="?"?"":i==="@"?"\0":String.fromCharCode(i.charCodeAt(0)&31)},h=new RegExp(c+"("+Object.keys(a).join("|")+")","g");return r.replace(h,function(i,u){for(const y in a){const S=new RegExp("^"+y+"$").exec(u);if(S!==null)return a[y].apply(null,S.slice(1))}})}}*[Symbol.iterator](){let r=!1,o=!1,s=!1,c=-2,a;for(this.debug&&console.log("full input:",">"+this.string+"<");;){const h=this.i,i=this.readChar();if(this.debug&&console.log("position:",h,"input:",">"+i+"<","accumulated:",a,"inQuote:",r,"inDollarQuote:",o,"lastDollar:",c,"escaped:",s),i===""){if(r)throw new Error("Got EOF while in a quoted string");if(s)throw new Error("Got EOF while in an escape sequence");a!==void 0&&(yield a);return}if(s){i===`
`||(r?a=(a||"")+s+i:a=(a||"")+i),s=!1;continue}if(this.escapes.includes(i)&&(!r||o!==!1||this.escapedQuotes.includes(r))){s=i;continue}if(r!==!1){if(i===r){a=this.processEscapes(a,r,o==="'"),r=!1,o=!1;continue}a=(a||"")+i;continue}if(this.quotes.includes(i)){r=i,c===h-1&&(i==="'"&&!this.ansiCQuotes||i==='"'&&!this.localeQuotes||(o=i)),a=a||"",o!==!1&&(a=a.slice(0,-1));continue}if(r===!1&&i==="$"&&(c=h),this.whitespace.includes(i)){a!==void 0&&(yield a),a=void 0;continue}a=(a||"")+i}}}e.split=function(n){return Array.from(new t(n))},e.quote=function(n){return n===""?"''":/[^\w@%\-+=:,./]/.test(n)?("'"+n.replace(/('+)/g,`'"$1"'`)+"'").replace(/^''|''$/g,""):n},e.join=function(n){if(!Array.isArray(n))throw new TypeError("args should be an array");return n.map(e.quote).join(" ")}}(G)),G}var Yt=Bt(),Zt=Jt(Yt);const Vt=e=>{const t={};for(const[,n,r]of e.matchAll(/([a-z])[ \t]*(-?(?:\d+(?:\.\d+)?|\.\d+))/gi))t[n.toLowerCase()]=+r;return t},Wt=e=>{const t={};for(const n of Zt.split(e)){const r=n.indexOf("="),o=n.substring(0,r),s=n.substring(r+1);t[o.toLowerCase()]=s}return t},en=e=>{const t=e.trim().split(";",2)[0],[,n,r=""]=t.split(/^([gm]\d+)\s*/i);if(n)return{type:"gcode",command:n.toUpperCase(),args:Vt(r)};const[,o,s=""]=t.split(/^(SET_PRINT_STATS_INFO|EXCLUDE_OBJECT_DEFINE|SET_RETRACTION)\s+/i);return o?{type:"macro",command:o.toUpperCase(),args:Wt(s)}:{type:"other"}},b=e=>Math.round(e*1e4)/1e4,tn=(e,t)=>{const n=[],r=[],o=[],s=e.split(`
`);let c=!1,a="relative",h="absolute";const i={x:0,y:0,z:0,e:0,filePosition:0},u={length:1,extrudeExtra:0,z:0};for(let y=0;y<s.length;y++){const{type:S,command:D,args:f}=en(s[y])??{};let l=null;if(S==="macro")switch(D){case"SET_PRINT_STATS_INFO":"current_layer"in f&&(c=!0);break;case"EXCLUDE_OBJECT_DEFINE":if("polygon"in f&&f.polygon){const d={polygon:JSON.parse(f.polygon).map(([on,an])=>({x:on,y:an}))};o.push(Object.freeze(d))}break;case"SET_RETRACTION":"retract_length"in f&&(u.length=+f.retract_length),"unretract_extra_length"in f&&(u.extrudeExtra=+f.unretract_extra_length);break}else if(S==="gcode"){switch(D){case"G0":case"G1":{const p=["x","y","z","e"];p.some(d=>d in f)&&(l={...W(f,p),filePosition:i.filePosition});break}case"G2":case"G3":{const p=["x","y","z","e","i","j","k","r"];p.some(d=>d in f)&&(l={...W(f,p),direction:D==="G2"?"clockwise":"counter-clockwise",filePosition:i.filePosition});break}case"G10":l={e:-u.length,filePosition:i.filePosition},u.z!==0&&(l.z=b(i.z+u.z));break;case"G11":l={e:b(u.length+u.extrudeExtra),filePosition:i.filePosition},u.z!==0&&(l.z=b(i.z-u.z));break;case"G90":h="absolute";case"M82":a="absolute",i.e=0;break;case"G91":h="relative";case"M83":a="relative";break;case"G92":a==="absolute"&&(i.e=f.e??i.e),h==="absolute"&&(i.x=f.x??i.x,i.y=f.y??i.y,i.z=f.z??i.z);break;case"M207":u.length=f.s??u.length,u.z=f.z??u.z;break}if(l){if(a==="absolute"&&l.e!==void 0){const p=b(l.e-i.e);i.e=l.e,l.e=p}if(h==="relative"&&(l.x!==void 0&&(l.x=b(l.x+i.x)),l.y!==void 0&&(l.y=b(l.y+i.y)),l.z!==void 0&&(l.z=b(l.z+i.z))),c&&l.e&&l.e>0){const p=l;if(["x","y","i","j"].some(d=>te(d,p)&&p[d]!==0)){const d={z:i.z,move:n.length-1,filePosition:i.filePosition};r.push(Object.freeze(d)),c=!1}}i.x=l.x??i.x,i.y=l.y??i.y,i.z=l.z??i.z,n.push(Object.freeze(l))}}y%Math.floor(s.length/100)===0&&t(i.filePosition),i.filePosition+=s[y].length+1}return t(i.filePosition),{moves:n,layers:r,parts:o}},nn=e=>{const t={action:"progress",filePosition:e};self.postMessage(t)},rn=(e,t,n)=>{const r={action:"result",moves:e,layers:t,parts:n};self.postMessage(r)};self.onmessage=e=>{const t=e.data;switch(t.action){case"parse":{const{moves:n,layers:r,parts:o}=tn(t.gcode,nn);rn(n,r,o);break}}}})();