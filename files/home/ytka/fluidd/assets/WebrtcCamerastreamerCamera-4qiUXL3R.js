var _=Object.defineProperty;var C=(a,e,t)=>e in a?_(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t;var d=(a,e,t)=>C(a,typeof e!="symbol"?e+"":e,t);import{m as v,C as b,f as y,j as S,R as P,k as w}from"./index-DFslUFkS.js";var O=Object.defineProperty,g=Object.getOwnPropertyDescriptor,u=(a,e,t,n)=>{for(var s=n>1?void 0:n?g(e,t):e,c=a.length-1,r;c>=0;c--)(r=a[c])&&(s=(n?r(e,t,s):r(s))||s);return n&&s&&O(e,t,s),s};let m=class extends v(b){constructor(){super(...arguments);d(this,"cameraVideo");d(this,"pc",null);d(this,"remoteId",null)}async startPlayback(){var s;const t=this.buildAbsoluteUrl(this.camera.stream_url||"");(s=this.pc)==null||s.close();const n=[{urls:"stun:stun.l.google.com:19302"}];try{const r=await(await fetch(t,{body:JSON.stringify({type:"request",iceServers:n}),headers:{"Content-Type":"application/json"},method:"POST"})).json();this.remoteId="id"in r&&typeof r.id=="string"?r.id:null;const p={sdpSemantics:"unified-plan"};"iceServers"in r&&Array.isArray(r.iceServers)&&(p.iceServers=r.iceServers);const i=this.pc=new RTCPeerConnection(p);i.addTransceiver("video",{direction:"recvonly"}),i.ontrack=l=>{l.track.kind==="video"&&(this.cameraVideo.srcObject=l.streams[0])},i.onicecandidate=async l=>{if(l.candidate)try{await fetch(t,{body:JSON.stringify({type:"remote_candidate",id:this.remoteId,candidates:[l.candidate]}),headers:{"Content-Type":"application/json"},method:"POST"})}catch(f){y.error("[WebrtcCamerastreamerCamera] onicecandidate",f)}},await i.setRemoteDescription(r);const h=await i.createAnswer();await i.setLocalDescription(h);const o=i.localDescription;await(await fetch(t,{body:JSON.stringify({type:o==null?void 0:o.type,id:this.remoteId,sdp:o==null?void 0:o.sdp}),headers:{"Content-Type":"application/json"},method:"POST"})).json()}catch(c){y.error("[WebrtcCamerastreamerCamera] startPlayback",c)}}stopPlayback(){var t;(t=this.pc)==null||t.close(),this.pc=null,this.cameraVideo.src="",this.cameraVideo.srcObject=null}};u([P("streamingElement")],m.prototype,"cameraVideo",2);m=u([S({})],m);var j=function(){var e=this,t=e._self._c;return e._self._setupProxy,t("video",{ref:"streamingElement",style:e.cameraStyle,attrs:{autoplay:"",playsinline:"",muted:"",crossorigin:e.crossorigin},domProps:{muted:!0}})},T=[],D=w(m,j,T,!1,null,null);const W=D.exports;export{W as default};