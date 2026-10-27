(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerpolicy&&(r.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?r.credentials="include":i.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Yr="146",Tn={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},An={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},mo=0,ss=1,go=2,Ca=1,_o=2,li=3,qn=0,be=1,Qe=2,tn=0,Wn=1,as=2,os=3,ls=4,xo=5,kn=100,vo=101,Mo=102,cs=103,us=104,yo=200,So=201,bo=202,wo=203,La=204,Pa=205,Eo=206,To=207,Ao=208,Co=209,Lo=210,Po=0,Do=1,Ro=2,Br=3,Io=4,No=5,Fo=6,Oo=7,Da=0,zo=1,Uo=2,We=0,Bo=1,Go=2,Vo=3,ko=4,Ho=5,Ra=300,Yn=301,jn=302,Gr=303,Vr=304,qi=306,kr=1e3,Pe=1001,Hr=1002,le=1003,hs=1004,ds=1005,ye=1006,Wo=1007,Yi=1008,_n=1009,Xo=1010,qo=1011,Ia=1012,Yo=1013,hn=1014,dn=1015,mi=1016,jo=1017,Zo=1018,Xn=1020,Jo=1021,$o=1022,De=1023,Ko=1024,Qo=1025,pn=1026,Zn=1027,tl=1028,el=1029,nl=1030,il=1031,rl=1033,er=33776,nr=33777,ir=33778,rr=33779,fs=35840,ps=35841,ms=35842,gs=35843,sl=36196,_s=37492,xs=37496,vs=37808,Ms=37809,ys=37810,Ss=37811,bs=37812,ws=37813,Es=37814,Ts=37815,As=37816,Cs=37817,Ls=37818,Ps=37819,Ds=37820,Rs=37821,Is=36492,xn=3e3,Vt=3001,al=3200,ol=3201,Na=0,ll=1,ke="srgb",fn="srgb-linear",sr=7680,cl=519,Ns=35044,Fs="300 es",Wr=1035;class Sn{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,t);t.target=null}}}const ie=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Os=1234567;const hi=Math.PI/180,Wi=180/Math.PI;function $n(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ie[s&255]+ie[s>>8&255]+ie[s>>16&255]+ie[s>>24&255]+"-"+ie[t&255]+ie[t>>8&255]+"-"+ie[t>>16&15|64]+ie[t>>24&255]+"-"+ie[e&63|128]+ie[e>>8&255]+"-"+ie[e>>16&255]+ie[e>>24&255]+ie[n&255]+ie[n>>8&255]+ie[n>>16&255]+ie[n>>24&255]).toLowerCase()}function ee(s,t,e){return Math.max(t,Math.min(e,s))}function jr(s,t){return(s%t+t)%t}function ul(s,t,e,n,i){return n+(s-t)*(i-n)/(e-t)}function hl(s,t,e){return s!==t?(e-s)/(t-s):0}function di(s,t,e){return(1-e)*s+e*t}function dl(s,t,e,n){return di(s,t,1-Math.exp(-e*n))}function fl(s,t=1){return t-Math.abs(jr(s,t*2)-t)}function pl(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function ml(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function gl(s,t){return s+Math.floor(Math.random()*(t-s+1))}function _l(s,t){return s+Math.random()*(t-s)}function xl(s){return s*(.5-Math.random())}function vl(s){s!==void 0&&(Os=s);let t=Os+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Ml(s){return s*hi}function yl(s){return s*Wi}function Xr(s){return(s&s-1)===0&&s!==0}function Sl(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Xi(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function bl(s,t,e,n,i){const r=Math.cos,o=Math.sin,a=r(e/2),c=o(e/2),l=r((t+n)/2),u=o((t+n)/2),h=r((t-n)/2),f=o((t-n)/2),m=r((n-t)/2),g=o((n-t)/2);switch(i){case"XYX":s.set(a*u,c*h,c*f,a*l);break;case"YZY":s.set(c*f,a*u,c*h,a*l);break;case"ZXZ":s.set(c*h,c*f,a*u,a*l);break;case"XZX":s.set(a*u,c*g,c*m,a*l);break;case"YXY":s.set(c*m,a*u,c*g,a*l);break;case"ZYZ":s.set(c*g,c*m,a*u,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function ci(s,t){switch(t.constructor){case Float32Array:return s;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function oe(s,t){switch(t.constructor){case Float32Array:return s;case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}var mn=Object.freeze({__proto__:null,DEG2RAD:hi,RAD2DEG:Wi,generateUUID:$n,clamp:ee,euclideanModulo:jr,mapLinear:ul,inverseLerp:hl,lerp:di,damp:dl,pingpong:fl,smoothstep:pl,smootherstep:ml,randInt:gl,randFloat:_l,randFloatSpread:xl,seededRandom:vl,degToRad:Ml,radToDeg:yl,isPowerOfTwo:Xr,ceilPowerOfTwo:Sl,floorPowerOfTwo:Xi,setQuaternionFromProperEuler:bl,normalize:oe,denormalize:ci});class ht{constructor(t=0,e=0){ht.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*i+t.x,this.y=r*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Se{constructor(){Se.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(t,e,n,i,r,o,a,c,l){const u=this.elements;return u[0]=t,u[1]=i,u[2]=a,u[3]=e,u[4]=r,u[5]=c,u[6]=n,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],u=n[4],h=n[7],f=n[2],m=n[5],g=n[8],p=i[0],d=i[3],_=i[6],E=i[1],S=i[4],b=i[7],M=i[2],L=i[5],O=i[8];return r[0]=o*p+a*E+c*M,r[3]=o*d+a*S+c*L,r[6]=o*_+a*b+c*O,r[1]=l*p+u*E+h*M,r[4]=l*d+u*S+h*L,r[7]=l*_+u*b+h*O,r[2]=f*p+m*E+g*M,r[5]=f*d+m*S+g*L,r[8]=f*_+m*b+g*O,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8];return e*o*u-e*a*l-n*r*u+n*a*c+i*r*l-i*o*c}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],h=u*o-a*l,f=a*c-u*r,m=l*r-o*c,g=e*h+n*f+i*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const p=1/g;return t[0]=h*p,t[1]=(i*l-u*n)*p,t[2]=(a*n-i*o)*p,t[3]=f*p,t[4]=(u*e-i*c)*p,t[5]=(i*r-a*e)*p,t[6]=m*p,t[7]=(n*c-l*e)*p,t[8]=(o*e-n*r)*p,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-i*l,i*c,-i*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){const n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=e,n[4]*=e,n[7]*=e,this}rotate(t){const e=Math.cos(t),n=Math.sin(t),i=this.elements,r=i[0],o=i[3],a=i[6],c=i[1],l=i[4],u=i[7];return i[0]=e*r+n*c,i[3]=e*o+n*l,i[6]=e*a+n*u,i[1]=-n*r+e*c,i[4]=-n*o+e*l,i[7]=-n*a+e*u,this}translate(t,e){const n=this.elements;return n[0]+=t*n[2],n[3]+=t*n[5],n[6]+=t*n[8],n[1]+=e*n[2],n[4]+=e*n[5],n[7]+=e*n[8],this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}function Fa(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function gi(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function gn(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function ki(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const ar={[ke]:{[fn]:gn},[fn]:{[ke]:ki}},Te={legacyMode:!0,get workingColorSpace(){return fn},set workingColorSpace(s){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(s,t,e){if(this.legacyMode||t===e||!t||!e)return s;if(ar[t]&&ar[t][e]!==void 0){const n=ar[t][e];return s.r=n(s.r),s.g=n(s.g),s.b=n(s.b),s}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(s,t){return this.convert(s,this.workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this.workingColorSpace)}},Oa={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Zt={r:0,g:0,b:0},Ae={h:0,s:0,l:0},Mi={h:0,s:0,l:0};function or(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}function yi(s,t){return t.r=s.r,t.g=s.g,t.b=s.b,t}class Ot{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,e===void 0&&n===void 0?this.set(t):this.setRGB(t,e,n)}set(t){return t&&t.isColor?this.copy(t):typeof t=="number"?this.setHex(t):typeof t=="string"&&this.setStyle(t),this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ke){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Te.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=fn){return this.r=t,this.g=e,this.b=n,Te.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=fn){if(t=jr(t,1),e=ee(e,0,1),n=ee(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=or(o,r,t+1/3),this.g=or(o,r,t),this.b=or(o,r,t-1/3)}return Te.toWorkingColorSpace(this,i),this}setStyle(t,e=ke){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(t)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(r[1],10))/255,this.g=Math.min(255,parseInt(r[2],10))/255,this.b=Math.min(255,parseInt(r[3],10))/255,Te.toWorkingColorSpace(this,e),n(r[4]),this;if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(r[1],10))/100,this.g=Math.min(100,parseInt(r[2],10))/100,this.b=Math.min(100,parseInt(r[3],10))/100,Te.toWorkingColorSpace(this,e),n(r[4]),this;break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const c=parseFloat(r[1])/360,l=parseFloat(r[2])/100,u=parseFloat(r[3])/100;return n(r[4]),this.setHSL(c,l,u,e)}break}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=i[1],o=r.length;if(o===3)return this.r=parseInt(r.charAt(0)+r.charAt(0),16)/255,this.g=parseInt(r.charAt(1)+r.charAt(1),16)/255,this.b=parseInt(r.charAt(2)+r.charAt(2),16)/255,Te.toWorkingColorSpace(this,e),this;if(o===6)return this.r=parseInt(r.charAt(0)+r.charAt(1),16)/255,this.g=parseInt(r.charAt(2)+r.charAt(3),16)/255,this.b=parseInt(r.charAt(4)+r.charAt(5),16)/255,Te.toWorkingColorSpace(this,e),this}return t&&t.length>0?this.setColorName(t,e):this}setColorName(t,e=ke){const n=Oa[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=gn(t.r),this.g=gn(t.g),this.b=gn(t.b),this}copyLinearToSRGB(t){return this.r=ki(t.r),this.g=ki(t.g),this.b=ki(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ke){return Te.fromWorkingColorSpace(yi(this,Zt),t),ee(Zt.r*255,0,255)<<16^ee(Zt.g*255,0,255)<<8^ee(Zt.b*255,0,255)<<0}getHexString(t=ke){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=fn){Te.fromWorkingColorSpace(yi(this,Zt),e);const n=Zt.r,i=Zt.g,r=Zt.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const h=o-a;switch(l=u<=.5?h/(o+a):h/(2-o-a),o){case n:c=(i-r)/h+(i<r?6:0);break;case i:c=(r-n)/h+2;break;case r:c=(n-i)/h+4;break}c/=6}return t.h=c,t.s=l,t.l=u,t}getRGB(t,e=fn){return Te.fromWorkingColorSpace(yi(this,Zt),e),t.r=Zt.r,t.g=Zt.g,t.b=Zt.b,t}getStyle(t=ke){return Te.fromWorkingColorSpace(yi(this,Zt),t),t!==ke?`color(${t} ${Zt.r} ${Zt.g} ${Zt.b})`:`rgb(${Zt.r*255|0},${Zt.g*255|0},${Zt.b*255|0})`}offsetHSL(t,e,n){return this.getHSL(Ae),Ae.h+=t,Ae.s+=e,Ae.l+=n,this.setHSL(Ae.h,Ae.s,Ae.l),this}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Ae),t.getHSL(Mi);const n=di(Ae.h,Mi.h,e),i=di(Ae.s,Mi.s,e),r=di(Ae.l,Mi.l,e);return this.setHSL(n,i,r),this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}Ot.NAMES=Oa;let Cn;class za{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Cn===void 0&&(Cn=gi("canvas")),Cn.width=t.width,Cn.height=t.height;const n=Cn.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Cn}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=gi("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=gn(r[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(gn(e[n]/255)*255):e[n]=gn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}class Ua{constructor(t=null){this.isSource=!0,this.uuid=$n(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(lr(i[o].image)):r.push(lr(i[o]))}else r=lr(i);n.url=r}return e||(t.images[this.uuid]=n),n}}function lr(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?za.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let wl=0;class we extends Sn{constructor(t=we.DEFAULT_IMAGE,e=we.DEFAULT_MAPPING,n=Pe,i=Pe,r=ye,o=Yi,a=De,c=_n,l=1,u=xn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:wl++}),this.uuid=$n(),this.name="",this.source=new Ua(t),this.mipmaps=[],this.mapping=e,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new ht(0,0),this.repeat=new ht(1,1),this.center=new ht(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Se,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.encoding=t.encoding,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Ra)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case kr:t.x=t.x-Math.floor(t.x);break;case Pe:t.x=t.x<0?0:1;break;case Hr:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case kr:t.y=t.y-Math.floor(t.y);break;case Pe:t.y=t.y<0?0:1;break;case Hr:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}}we.DEFAULT_IMAGE=null;we.DEFAULT_MAPPING=Ra;class Bt{constructor(t=0,e=0,n=0,i=1){Bt.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r;const c=t.elements,l=c[0],u=c[4],h=c[8],f=c[1],m=c[5],g=c[9],p=c[2],d=c[6],_=c[10];if(Math.abs(u-f)<.01&&Math.abs(h-p)<.01&&Math.abs(g-d)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+p)<.1&&Math.abs(g+d)<.1&&Math.abs(l+m+_-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const S=(l+1)/2,b=(m+1)/2,M=(_+1)/2,L=(u+f)/4,O=(h+p)/4,x=(g+d)/4;return S>b&&S>M?S<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(S),i=L/n,r=O/n):b>M?b<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(b),n=L/i,r=x/i):M<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(M),n=O/r,i=x/r),this.set(n,i,r,e),this}let E=Math.sqrt((d-g)*(d-g)+(h-p)*(h-p)+(f-u)*(f-u));return Math.abs(E)<.001&&(E=1),this.x=(d-g)/E,this.y=(h-p)/E,this.z=(f-u)/E,this.w=Math.acos((l+m+_-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class vn extends Sn{constructor(t=1,e=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Bt(0,0,t,e),this.scissorTest=!1,this.viewport=new Bt(0,0,t,e);const i={width:t,height:e,depth:1};this.texture=new we(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:ye,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Ua(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ba extends we{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=le,this.minFilter=le,this.wrapR=Pe,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class El extends we{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=le,this.minFilter=le,this.wrapR=Pe,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Mn{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,o,a){let c=n[i+0],l=n[i+1],u=n[i+2],h=n[i+3];const f=r[o+0],m=r[o+1],g=r[o+2],p=r[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=u,t[e+3]=h;return}if(a===1){t[e+0]=f,t[e+1]=m,t[e+2]=g,t[e+3]=p;return}if(h!==p||c!==f||l!==m||u!==g){let d=1-a;const _=c*f+l*m+u*g+h*p,E=_>=0?1:-1,S=1-_*_;if(S>Number.EPSILON){const M=Math.sqrt(S),L=Math.atan2(M,_*E);d=Math.sin(d*L)/M,a=Math.sin(a*L)/M}const b=a*E;if(c=c*d+f*b,l=l*d+m*b,u=u*d+g*b,h=h*d+p*b,d===1-a){const M=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=M,l*=M,u*=M,h*=M}}t[e]=c,t[e+1]=l,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,i,r,o){const a=n[i],c=n[i+1],l=n[i+2],u=n[i+3],h=r[o],f=r[o+1],m=r[o+2],g=r[o+3];return t[e]=a*g+u*h+c*m-l*f,t[e+1]=c*g+u*f+l*h-a*m,t[e+2]=l*g+u*m+a*f-c*h,t[e+3]=u*g-a*h-c*f-l*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e){const n=t._x,i=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),u=a(i/2),h=a(r/2),f=c(n/2),m=c(i/2),g=c(r/2);switch(o){case"XYZ":this._x=f*u*h+l*m*g,this._y=l*m*h-f*u*g,this._z=l*u*g+f*m*h,this._w=l*u*h-f*m*g;break;case"YXZ":this._x=f*u*h+l*m*g,this._y=l*m*h-f*u*g,this._z=l*u*g-f*m*h,this._w=l*u*h+f*m*g;break;case"ZXY":this._x=f*u*h-l*m*g,this._y=l*m*h+f*u*g,this._z=l*u*g+f*m*h,this._w=l*u*h-f*m*g;break;case"ZYX":this._x=f*u*h-l*m*g,this._y=l*m*h+f*u*g,this._z=l*u*g-f*m*h,this._w=l*u*h+f*m*g;break;case"YZX":this._x=f*u*h+l*m*g,this._y=l*m*h+f*u*g,this._z=l*u*g-f*m*h,this._w=l*u*h-f*m*g;break;case"XZY":this._x=f*u*h-l*m*g,this._y=l*m*h-f*u*g,this._z=l*u*g+f*m*h,this._w=l*u*h+f*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e!==!1&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],u=e[6],h=e[10],f=n+a+h;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(u-c)*m,this._y=(r-l)*m,this._z=(o-i)*m}else if(n>a&&n>h){const m=2*Math.sqrt(1+n-a-h);this._w=(u-c)/m,this._x=.25*m,this._y=(i+o)/m,this._z=(r+l)/m}else if(a>h){const m=2*Math.sqrt(1+a-n-h);this._w=(r-l)/m,this._x=(i+o)/m,this._y=.25*m,this._z=(c+u)/m}else{const m=2*Math.sqrt(1+h-n-a);this._w=(o-i)/m,this._x=(r+l)/m,this._y=(c+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ee(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,u=e._w;return this._x=n*u+o*a+i*l-r*c,this._y=i*u+o*c+r*a-n*l,this._z=r*u+o*l+n*c-i*a,this._w=o*u-n*a-i*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+i*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const m=1-e;return this._w=m*o+e*this._w,this._x=m*n+e*this._x,this._y=m*i+e*this._y,this._z=m*r+e*this._z,this.normalize(),this._onChangeCallback(),this}const l=Math.sqrt(c),u=Math.atan2(l,a),h=Math.sin((1-e)*u)/l,f=Math.sin(e*u)/l;return this._w=o*h+this._w*f,this._x=n*h+this._x*f,this._y=i*h+this._y*f,this._z=r*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(e*Math.cos(i),n*Math.sin(r),n*Math.cos(r),e*Math.sin(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class A{constructor(t=0,e=0,n=0){A.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(zs.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(zs.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=c*e+o*i-a*n,u=c*n+a*e-r*i,h=c*i+r*n-o*e,f=-r*e-o*n-a*i;return this.x=l*c+f*-r+u*-a-h*-o,this.y=u*c+f*-o+h*-r-l*-a,this.z=h*c+f*-a+l*-o-u*-r,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=i*c-r*a,this.y=r*o-n*c,this.z=n*a-i*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return cr.copy(this).projectOnVector(t),this.sub(cr)}reflect(t){return this.sub(cr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ee(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const cr=new A,zs=new Mn;class _i{constructor(t=new A(1/0,1/0,1/0),e=new A(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){let e=1/0,n=1/0,i=1/0,r=-1/0,o=-1/0,a=-1/0;for(let c=0,l=t.length;c<l;c+=3){const u=t[c],h=t[c+1],f=t[c+2];u<e&&(e=u),h<n&&(n=h),f<i&&(i=f),u>r&&(r=u),h>o&&(o=h),f>a&&(a=f)}return this.min.set(e,n,i),this.max.set(r,o,a),this}setFromBufferAttribute(t){let e=1/0,n=1/0,i=1/0,r=-1/0,o=-1/0,a=-1/0;for(let c=0,l=t.count;c<l;c++){const u=t.getX(c),h=t.getY(c),f=t.getZ(c);u<e&&(e=u),h<n&&(n=h),f<i&&(i=f),u>r&&(r=u),h>o&&(o=h),f>a&&(a=f)}return this.min.set(e,n,i),this.max.set(r,o,a),this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=sn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0)if(e&&n.attributes!=null&&n.attributes.position!==void 0){const r=n.attributes.position;for(let o=0,a=r.count;o<a;o++)sn.fromBufferAttribute(r,o).applyMatrix4(t.matrixWorld),this.expandByPoint(sn)}else n.boundingBox===null&&n.computeBoundingBox(),ur.copy(n.boundingBox),ur.applyMatrix4(t.matrixWorld),this.union(ur);const i=t.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,sn),sn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ii),Si.subVectors(this.max,ii),Ln.subVectors(t.a,ii),Pn.subVectors(t.b,ii),Dn.subVectors(t.c,ii),qe.subVectors(Pn,Ln),Ye.subVectors(Dn,Pn),an.subVectors(Ln,Dn);let e=[0,-qe.z,qe.y,0,-Ye.z,Ye.y,0,-an.z,an.y,qe.z,0,-qe.x,Ye.z,0,-Ye.x,an.z,0,-an.x,-qe.y,qe.x,0,-Ye.y,Ye.x,0,-an.y,an.x,0];return!hr(e,Ln,Pn,Dn,Si)||(e=[1,0,0,0,1,0,0,0,1],!hr(e,Ln,Pn,Dn,Si))?!1:(bi.crossVectors(qe,Ye),e=[bi.x,bi.y,bi.z],hr(e,Ln,Pn,Dn,Si))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return sn.copy(t).clamp(this.min,this.max).sub(t).length()}getBoundingSphere(t){return this.getCenter(t.center),t.radius=this.getSize(sn).length()*.5,t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ze[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ze[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ze[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ze[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ze[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ze[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ze[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ze[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ze),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const ze=[new A,new A,new A,new A,new A,new A,new A,new A],sn=new A,ur=new _i,Ln=new A,Pn=new A,Dn=new A,qe=new A,Ye=new A,an=new A,ii=new A,Si=new A,bi=new A,on=new A;function hr(s,t,e,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){on.fromArray(s,r);const a=i.x*Math.abs(on.x)+i.y*Math.abs(on.y)+i.z*Math.abs(on.z),c=t.dot(on),l=e.dot(on),u=n.dot(on);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const Tl=new _i,ri=new A,dr=new A;class ji{constructor(t=new A,e=-1){this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Tl.setFromPoints(t).getCenter(n);let i=0;for(let r=0,o=t.length;r<o;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ri.subVectors(t,this.center);const e=ri.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(ri,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(dr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ri.copy(t.center).add(dr)),this.expandByPoint(ri.copy(t.center).sub(dr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ue=new A,fr=new A,wi=new A,je=new A,pr=new A,Ei=new A,mr=new A;class Ga{constructor(t=new A,e=new A(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.direction).multiplyScalar(t).add(this.origin)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ue)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Ue.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ue.copy(this.direction).multiplyScalar(e).add(this.origin),Ue.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){fr.copy(t).add(e).multiplyScalar(.5),wi.copy(e).sub(t).normalize(),je.copy(this.origin).sub(fr);const r=t.distanceTo(e)*.5,o=-this.direction.dot(wi),a=je.dot(this.direction),c=-je.dot(wi),l=je.lengthSq(),u=Math.abs(1-o*o);let h,f,m,g;if(u>0)if(h=o*c-a,f=o*a-c,g=r*u,h>=0)if(f>=-g)if(f<=g){const p=1/u;h*=p,f*=p,m=h*(h+o*f+2*a)+f*(o*h+f+2*c)+l}else f=r,h=Math.max(0,-(o*f+a)),m=-h*h+f*(f+2*c)+l;else f=-r,h=Math.max(0,-(o*f+a)),m=-h*h+f*(f+2*c)+l;else f<=-g?(h=Math.max(0,-(-o*r+a)),f=h>0?-r:Math.min(Math.max(-r,-c),r),m=-h*h+f*(f+2*c)+l):f<=g?(h=0,f=Math.min(Math.max(-r,-c),r),m=f*(f+2*c)+l):(h=Math.max(0,-(o*r+a)),f=h>0?r:Math.min(Math.max(-r,-c),r),m=-h*h+f*(f+2*c)+l);else f=o>0?-r:r,h=Math.max(0,-(o*f+a)),m=-h*h+f*(f+2*c)+l;return n&&n.copy(this.direction).multiplyScalar(h).add(this.origin),i&&i.copy(wi).multiplyScalar(f).add(fr),m}intersectSphere(t,e){Ue.subVectors(t.center,this.origin);const n=Ue.dot(this.direction),i=Ue.dot(Ue)-n*n,r=t.radius*t.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,c=n+o;return a<0&&c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return l>=0?(n=(t.min.x-f.x)*l,i=(t.max.x-f.x)*l):(n=(t.max.x-f.x)*l,i=(t.min.x-f.x)*l),u>=0?(r=(t.min.y-f.y)*u,o=(t.max.y-f.y)*u):(r=(t.max.y-f.y)*u,o=(t.min.y-f.y)*u),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),h>=0?(a=(t.min.z-f.z)*h,c=(t.max.z-f.z)*h):(a=(t.max.z-f.z)*h,c=(t.min.z-f.z)*h),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Ue)!==null}intersectTriangle(t,e,n,i,r){pr.subVectors(e,t),Ei.subVectors(n,t),mr.crossVectors(pr,Ei);let o=this.direction.dot(mr),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;je.subVectors(this.origin,t);const c=a*this.direction.dot(Ei.crossVectors(je,Ei));if(c<0)return null;const l=a*this.direction.dot(pr.cross(je));if(l<0||c+l>o)return null;const u=-a*je.dot(mr);return u<0?null:this.at(u/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class kt{constructor(){kt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(t,e,n,i,r,o,a,c,l,u,h,f,m,g,p,d){const _=this.elements;return _[0]=t,_[4]=e,_[8]=n,_[12]=i,_[1]=r,_[5]=o,_[9]=a,_[13]=c,_[2]=l,_[6]=u,_[10]=h,_[14]=f,_[3]=m,_[7]=g,_[11]=p,_[15]=d,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new kt().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/Rn.setFromMatrixColumn(t,0).length(),r=1/Rn.setFromMatrixColumn(t,1).length(),o=1/Rn.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),u=Math.cos(r),h=Math.sin(r);if(t.order==="XYZ"){const f=o*u,m=o*h,g=a*u,p=a*h;e[0]=c*u,e[4]=-c*h,e[8]=l,e[1]=m+g*l,e[5]=f-p*l,e[9]=-a*c,e[2]=p-f*l,e[6]=g+m*l,e[10]=o*c}else if(t.order==="YXZ"){const f=c*u,m=c*h,g=l*u,p=l*h;e[0]=f+p*a,e[4]=g*a-m,e[8]=o*l,e[1]=o*h,e[5]=o*u,e[9]=-a,e[2]=m*a-g,e[6]=p+f*a,e[10]=o*c}else if(t.order==="ZXY"){const f=c*u,m=c*h,g=l*u,p=l*h;e[0]=f-p*a,e[4]=-o*h,e[8]=g+m*a,e[1]=m+g*a,e[5]=o*u,e[9]=p-f*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){const f=o*u,m=o*h,g=a*u,p=a*h;e[0]=c*u,e[4]=g*l-m,e[8]=f*l+p,e[1]=c*h,e[5]=p*l+f,e[9]=m*l-g,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){const f=o*c,m=o*l,g=a*c,p=a*l;e[0]=c*u,e[4]=p-f*h,e[8]=g*h+m,e[1]=h,e[5]=o*u,e[9]=-a*u,e[2]=-l*u,e[6]=m*h+g,e[10]=f-p*h}else if(t.order==="XZY"){const f=o*c,m=o*l,g=a*c,p=a*l;e[0]=c*u,e[4]=-h,e[8]=l*u,e[1]=f*h+p,e[5]=o*u,e[9]=m*h-g,e[2]=g*h-m,e[6]=a*u,e[10]=p*h+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Al,t,Cl)}lookAt(t,e,n){const i=this.elements;return he.subVectors(t,e),he.lengthSq()===0&&(he.z=1),he.normalize(),Ze.crossVectors(n,he),Ze.lengthSq()===0&&(Math.abs(n.z)===1?he.x+=1e-4:he.z+=1e-4,he.normalize(),Ze.crossVectors(n,he)),Ze.normalize(),Ti.crossVectors(he,Ze),i[0]=Ze.x,i[4]=Ti.x,i[8]=he.x,i[1]=Ze.y,i[5]=Ti.y,i[9]=he.y,i[2]=Ze.z,i[6]=Ti.z,i[10]=he.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],u=n[1],h=n[5],f=n[9],m=n[13],g=n[2],p=n[6],d=n[10],_=n[14],E=n[3],S=n[7],b=n[11],M=n[15],L=i[0],O=i[4],x=i[8],C=i[12],z=i[1],Y=i[5],st=i[9],B=i[13],I=i[2],q=i[6],j=i[10],J=i[14],W=i[3],N=i[7],U=i[11],tt=i[15];return r[0]=o*L+a*z+c*I+l*W,r[4]=o*O+a*Y+c*q+l*N,r[8]=o*x+a*st+c*j+l*U,r[12]=o*C+a*B+c*J+l*tt,r[1]=u*L+h*z+f*I+m*W,r[5]=u*O+h*Y+f*q+m*N,r[9]=u*x+h*st+f*j+m*U,r[13]=u*C+h*B+f*J+m*tt,r[2]=g*L+p*z+d*I+_*W,r[6]=g*O+p*Y+d*q+_*N,r[10]=g*x+p*st+d*j+_*U,r[14]=g*C+p*B+d*J+_*tt,r[3]=E*L+S*z+b*I+M*W,r[7]=E*O+S*Y+b*q+M*N,r[11]=E*x+S*st+b*j+M*U,r[15]=E*C+S*B+b*J+M*tt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],u=t[2],h=t[6],f=t[10],m=t[14],g=t[3],p=t[7],d=t[11],_=t[15];return g*(+r*c*h-i*l*h-r*a*f+n*l*f+i*a*m-n*c*m)+p*(+e*c*m-e*l*f+r*o*f-i*o*m+i*l*u-r*c*u)+d*(+e*l*h-e*a*m-r*o*h+n*o*m+r*a*u-n*l*u)+_*(-i*a*u-e*c*h+e*a*f+i*o*h-n*o*f+n*c*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],h=t[9],f=t[10],m=t[11],g=t[12],p=t[13],d=t[14],_=t[15],E=h*d*l-p*f*l+p*c*m-a*d*m-h*c*_+a*f*_,S=g*f*l-u*d*l-g*c*m+o*d*m+u*c*_-o*f*_,b=u*p*l-g*h*l+g*a*m-o*p*m-u*a*_+o*h*_,M=g*h*c-u*p*c-g*a*f+o*p*f+u*a*d-o*h*d,L=e*E+n*S+i*b+r*M;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const O=1/L;return t[0]=E*O,t[1]=(p*f*r-h*d*r-p*i*m+n*d*m+h*i*_-n*f*_)*O,t[2]=(a*d*r-p*c*r+p*i*l-n*d*l-a*i*_+n*c*_)*O,t[3]=(h*c*r-a*f*r-h*i*l+n*f*l+a*i*m-n*c*m)*O,t[4]=S*O,t[5]=(u*d*r-g*f*r+g*i*m-e*d*m-u*i*_+e*f*_)*O,t[6]=(g*c*r-o*d*r-g*i*l+e*d*l+o*i*_-e*c*_)*O,t[7]=(o*f*r-u*c*r+u*i*l-e*f*l-o*i*m+e*c*m)*O,t[8]=b*O,t[9]=(g*h*r-u*p*r-g*n*m+e*p*m+u*n*_-e*h*_)*O,t[10]=(o*p*r-g*a*r+g*n*l-e*p*l-o*n*_+e*a*_)*O,t[11]=(u*a*r-o*h*r-u*n*l+e*h*l+o*n*m-e*a*m)*O,t[12]=M*O,t[13]=(u*p*i-g*h*i+g*n*f-e*p*f-u*n*d+e*h*d)*O,t[14]=(g*a*i-o*p*i-g*n*c+e*p*c+o*n*d-e*a*d)*O,t[15]=(o*h*i-u*a*i+u*n*c-e*h*c-o*n*f+e*a*f)*O,this}scale(t){const e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,u=r*a;return this.set(l*o+n,l*a-i*c,l*c+i*a,0,l*a+i*c,u*a+n,u*c-i*o,0,l*c-i*a,u*c+i*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,o){return this.set(1,n,r,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,u=o+o,h=a+a,f=r*l,m=r*u,g=r*h,p=o*u,d=o*h,_=a*h,E=c*l,S=c*u,b=c*h,M=n.x,L=n.y,O=n.z;return i[0]=(1-(p+_))*M,i[1]=(m+b)*M,i[2]=(g-S)*M,i[3]=0,i[4]=(m-b)*L,i[5]=(1-(f+_))*L,i[6]=(d+E)*L,i[7]=0,i[8]=(g+S)*O,i[9]=(d-E)*O,i[10]=(1-(f+p))*O,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let r=Rn.set(i[0],i[1],i[2]).length();const o=Rn.set(i[4],i[5],i[6]).length(),a=Rn.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],Ce.copy(this);const l=1/r,u=1/o,h=1/a;return Ce.elements[0]*=l,Ce.elements[1]*=l,Ce.elements[2]*=l,Ce.elements[4]*=u,Ce.elements[5]*=u,Ce.elements[6]*=u,Ce.elements[8]*=h,Ce.elements[9]*=h,Ce.elements[10]*=h,e.setFromRotationMatrix(Ce),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,i,r,o){const a=this.elements,c=2*r/(e-t),l=2*r/(n-i),u=(e+t)/(e-t),h=(n+i)/(n-i),f=-(o+r)/(o-r),m=-2*o*r/(o-r);return a[0]=c,a[4]=0,a[8]=u,a[12]=0,a[1]=0,a[5]=l,a[9]=h,a[13]=0,a[2]=0,a[6]=0,a[10]=f,a[14]=m,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(t,e,n,i,r,o){const a=this.elements,c=1/(e-t),l=1/(n-i),u=1/(o-r),h=(e+t)*c,f=(n+i)*l,m=(o+r)*u;return a[0]=2*c,a[4]=0,a[8]=0,a[12]=-h,a[1]=0,a[5]=2*l,a[9]=0,a[13]=-f,a[2]=0,a[6]=0,a[10]=-2*u,a[14]=-m,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Rn=new A,Ce=new kt,Al=new A(0,0,0),Cl=new A(1,1,1),Ze=new A,Ti=new A,he=new A,Us=new kt,Bs=new Mn;class xi{constructor(t=0,e=0,n=0,i=xi.DefaultOrder){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,r=i[0],o=i[4],a=i[8],c=i[1],l=i[5],u=i[9],h=i[2],f=i[6],m=i[10];switch(e){case"XYZ":this._y=Math.asin(ee(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-ee(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(ee(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-ee(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(ee(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-ee(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Us.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Us,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Bs.setFromEuler(this),this.setFromQuaternion(Bs,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}xi.DefaultOrder="XYZ";xi.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class Va{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Ll=0;const Gs=new A,In=new Mn,Be=new kt,Ai=new A,si=new A,Pl=new A,Dl=new Mn,Vs=new A(1,0,0),ks=new A(0,1,0),Hs=new A(0,0,1),Rl={type:"added"},Ws={type:"removed"};class ae extends Sn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ll++}),this.uuid=$n(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ae.DefaultUp.clone();const t=new A,e=new xi,n=new Mn,i=new A(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new kt},normalMatrix:{value:new Se}}),this.matrix=new kt,this.matrixWorld=new kt,this.matrixAutoUpdate=ae.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=ae.DefaultMatrixWorldAutoUpdate,this.layers=new Va,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return In.setFromAxisAngle(t,e),this.quaternion.multiply(In),this}rotateOnWorldAxis(t,e){return In.setFromAxisAngle(t,e),this.quaternion.premultiply(In),this}rotateX(t){return this.rotateOnAxis(Vs,t)}rotateY(t){return this.rotateOnAxis(ks,t)}rotateZ(t){return this.rotateOnAxis(Hs,t)}translateOnAxis(t,e){return Gs.copy(t).applyQuaternion(this.quaternion),this.position.add(Gs.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Vs,t)}translateY(t){return this.translateOnAxis(ks,t)}translateZ(t){return this.translateOnAxis(Hs,t)}localToWorld(t){return t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return t.applyMatrix4(Be.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Ai.copy(t):Ai.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),si.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Be.lookAt(si,Ai,this.up):Be.lookAt(Ai,si,this.up),this.quaternion.setFromRotationMatrix(Be),i&&(Be.extractRotation(i.matrixWorld),In.setFromRotationMatrix(Be),this.quaternion.premultiply(In.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(Rl)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Ws)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){for(let t=0;t<this.children.length;t++){const e=this.children[t];e.parent=null,e.dispatchEvent(Ws)}return this.children.length=0,this}attach(t){return this.updateWorldMatrix(!0,!1),Be.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Be.multiply(t.parent.matrixWorld)),t.applyMatrix4(Be),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(si,t,Pl),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(si,Dl,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++){const r=e[n];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++){const a=i[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const h=c[l];r(t.shapes,h)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));i.material=a}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];i.animations.push(r(t.animations,c))}}if(e){const a=o(t.geometries),c=o(t.materials),l=o(t.textures),u=o(t.images),h=o(t.shapes),f=o(t.skeletons),m=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}ae.DefaultUp=new A(0,1,0);ae.DefaultMatrixAutoUpdate=!0;ae.DefaultMatrixWorldAutoUpdate=!0;const Le=new A,Ge=new A,gr=new A,Ve=new A,Nn=new A,Fn=new A,Xs=new A,_r=new A,xr=new A,vr=new A;class He{constructor(t=new A,e=new A,n=new A){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Le.subVectors(t,e),i.cross(Le);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){Le.subVectors(i,e),Ge.subVectors(n,e),gr.subVectors(t,e);const o=Le.dot(Le),a=Le.dot(Ge),c=Le.dot(gr),l=Ge.dot(Ge),u=Ge.dot(gr),h=o*l-a*a;if(h===0)return r.set(-2,-1,-1);const f=1/h,m=(l*c-a*u)*f,g=(o*u-a*c)*f;return r.set(1-m-g,g,m)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Ve),Ve.x>=0&&Ve.y>=0&&Ve.x+Ve.y<=1}static getUV(t,e,n,i,r,o,a,c){return this.getBarycoord(t,e,n,i,Ve),c.set(0,0),c.addScaledVector(r,Ve.x),c.addScaledVector(o,Ve.y),c.addScaledVector(a,Ve.z),c}static isFrontFacing(t,e,n,i){return Le.subVectors(n,e),Ge.subVectors(t,e),Le.cross(Ge).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Le.subVectors(this.c,this.b),Ge.subVectors(this.a,this.b),Le.cross(Ge).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return He.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return He.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,i,r){return He.getUV(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return He.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return He.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,r=this.c;let o,a;Nn.subVectors(i,n),Fn.subVectors(r,n),_r.subVectors(t,n);const c=Nn.dot(_r),l=Fn.dot(_r);if(c<=0&&l<=0)return e.copy(n);xr.subVectors(t,i);const u=Nn.dot(xr),h=Fn.dot(xr);if(u>=0&&h<=u)return e.copy(i);const f=c*h-u*l;if(f<=0&&c>=0&&u<=0)return o=c/(c-u),e.copy(n).addScaledVector(Nn,o);vr.subVectors(t,r);const m=Nn.dot(vr),g=Fn.dot(vr);if(g>=0&&m<=g)return e.copy(r);const p=m*l-c*g;if(p<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(n).addScaledVector(Fn,a);const d=u*g-m*h;if(d<=0&&h-u>=0&&m-g>=0)return Xs.subVectors(r,i),a=(h-u)/(h-u+(m-g)),e.copy(i).addScaledVector(Xs,a);const _=1/(d+p+f);return o=p*_,a=f*_,e.copy(n).addScaledVector(Nn,o).addScaledVector(Fn,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}let Il=0;class Kn extends Sn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Il++}),this.uuid=$n(),this.name="",this.type="Material",this.blending=Wn,this.side=qn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=La,this.blendDst=Pa,this.blendEquation=kn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Br,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=cl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=sr,this.stencilZFail=sr,this.stencilZPass=sr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn("THREE.Material: '"+e+"' parameter is undefined.");continue}const i=this[e];if(i===void 0){console.warn("THREE."+this.type+": '"+e+"' is not a property of this material.");continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Wn&&(n.blending=this.blending),this.side!==qn&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(e){const r=i(t.textures),o=i(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class vi extends Kn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ot(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Da,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Xt=new A,Ci=new ht;class Re{constructor(t,e,n){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n===!0,this.usage=Ns,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Ci.fromBufferAttribute(this,e),Ci.applyMatrix3(t),this.setXY(e,Ci.x,Ci.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Xt.fromBufferAttribute(this,e),Xt.applyMatrix3(t),this.setXYZ(e,Xt.x,Xt.y,Xt.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Xt.fromBufferAttribute(this,e),Xt.applyMatrix4(t),this.setXYZ(e,Xt.x,Xt.y,Xt.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Xt.fromBufferAttribute(this,e),Xt.applyNormalMatrix(t),this.setXYZ(e,Xt.x,Xt.y,Xt.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Xt.fromBufferAttribute(this,e),Xt.transformDirection(t),this.setXYZ(e,Xt.x,Xt.y,Xt.z);return this}set(t,e=0){return this.array.set(t,e),this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ci(e,this.array)),e}setX(t,e){return this.normalized&&(e=oe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ci(e,this.array)),e}setY(t,e){return this.normalized&&(e=oe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ci(e,this.array)),e}setZ(t,e){return this.normalized&&(e=oe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ci(e,this.array)),e}setW(t,e){return this.normalized&&(e=oe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=oe(e,this.array),n=oe(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=oe(e,this.array),n=oe(n,this.array),i=oe(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=oe(e,this.array),n=oe(n,this.array),i=oe(i,this.array),r=oe(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Ns&&(t.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(t.updateRange=this.updateRange),t}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class ka extends Re{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Ha extends Re{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class qt extends Re{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Nl=0;const Me=new kt,Mr=new ae,On=new A,de=new _i,ai=new _i,te=new A;class Ee extends Sn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Nl++}),this.uuid=$n(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Fa(t)?Ha:ka)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Se().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Me.makeRotationFromQuaternion(t),this.applyMatrix4(Me),this}rotateX(t){return Me.makeRotationX(t),this.applyMatrix4(Me),this}rotateY(t){return Me.makeRotationY(t),this.applyMatrix4(Me),this}rotateZ(t){return Me.makeRotationZ(t),this.applyMatrix4(Me),this}translate(t,e,n){return Me.makeTranslation(t,e,n),this.applyMatrix4(Me),this}scale(t,e,n){return Me.makeScale(t,e,n),this.applyMatrix4(Me),this}lookAt(t){return Mr.lookAt(t),Mr.updateMatrix(),this.applyMatrix4(Mr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(On).negate(),this.translate(On.x,On.y,On.z),this}setFromPoints(t){const e=[];for(let n=0,i=t.length;n<i;n++){const r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new qt(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new _i);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new A(-1/0,-1/0,-1/0),new A(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const r=e[n];de.setFromBufferAttribute(r),this.morphTargetsRelative?(te.addVectors(this.boundingBox.min,de.min),this.boundingBox.expandByPoint(te),te.addVectors(this.boundingBox.max,de.max),this.boundingBox.expandByPoint(te)):(this.boundingBox.expandByPoint(de.min),this.boundingBox.expandByPoint(de.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ji);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new A,1/0);return}if(t){const n=this.boundingSphere.center;if(de.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];ai.setFromBufferAttribute(a),this.morphTargetsRelative?(te.addVectors(de.min,ai.min),de.expandByPoint(te),te.addVectors(de.max,ai.max),de.expandByPoint(te)):(de.expandByPoint(ai.min),de.expandByPoint(ai.max))}de.getCenter(n);let i=0;for(let r=0,o=t.count;r<o;r++)te.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(te));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)te.fromBufferAttribute(a,l),c&&(On.fromBufferAttribute(t,l),te.add(On)),i=Math.max(i,n.distanceToSquared(te))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.array,i=e.position.array,r=e.normal.array,o=e.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Re(new Float32Array(4*a),4));const c=this.getAttribute("tangent").array,l=[],u=[];for(let z=0;z<a;z++)l[z]=new A,u[z]=new A;const h=new A,f=new A,m=new A,g=new ht,p=new ht,d=new ht,_=new A,E=new A;function S(z,Y,st){h.fromArray(i,z*3),f.fromArray(i,Y*3),m.fromArray(i,st*3),g.fromArray(o,z*2),p.fromArray(o,Y*2),d.fromArray(o,st*2),f.sub(h),m.sub(h),p.sub(g),d.sub(g);const B=1/(p.x*d.y-d.x*p.y);!isFinite(B)||(_.copy(f).multiplyScalar(d.y).addScaledVector(m,-p.y).multiplyScalar(B),E.copy(m).multiplyScalar(p.x).addScaledVector(f,-d.x).multiplyScalar(B),l[z].add(_),l[Y].add(_),l[st].add(_),u[z].add(E),u[Y].add(E),u[st].add(E))}let b=this.groups;b.length===0&&(b=[{start:0,count:n.length}]);for(let z=0,Y=b.length;z<Y;++z){const st=b[z],B=st.start,I=st.count;for(let q=B,j=B+I;q<j;q+=3)S(n[q+0],n[q+1],n[q+2])}const M=new A,L=new A,O=new A,x=new A;function C(z){O.fromArray(r,z*3),x.copy(O);const Y=l[z];M.copy(Y),M.sub(O.multiplyScalar(O.dot(Y))).normalize(),L.crossVectors(x,Y);const B=L.dot(u[z])<0?-1:1;c[z*4]=M.x,c[z*4+1]=M.y,c[z*4+2]=M.z,c[z*4+3]=B}for(let z=0,Y=b.length;z<Y;++z){const st=b[z],B=st.start,I=st.count;for(let q=B,j=B+I;q<j;q+=3)C(n[q+0]),C(n[q+1]),C(n[q+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Re(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,m=n.count;f<m;f++)n.setXYZ(f,0,0,0);const i=new A,r=new A,o=new A,a=new A,c=new A,l=new A,u=new A,h=new A;if(t)for(let f=0,m=t.count;f<m;f+=3){const g=t.getX(f+0),p=t.getX(f+1),d=t.getX(f+2);i.fromBufferAttribute(e,g),r.fromBufferAttribute(e,p),o.fromBufferAttribute(e,d),u.subVectors(o,r),h.subVectors(i,r),u.cross(h),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,p),l.fromBufferAttribute(n,d),a.add(u),c.add(u),l.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(p,c.x,c.y,c.z),n.setXYZ(d,l.x,l.y,l.z)}else for(let f=0,m=e.count;f<m;f+=3)i.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),u.subVectors(o,r),h.subVectors(i,r),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)te.fromBufferAttribute(t,e),te.normalize(),t.setXYZ(e,te.x,te.y,te.z)}toNonIndexed(){function t(a,c){const l=a.array,u=a.itemSize,h=a.normalized,f=new l.constructor(c.length*u);let m=0,g=0;for(let p=0,d=c.length;p<d;p++){a.isInterleavedBufferAttribute?m=c[p]*a.data.stride+a.offset:m=c[p]*u;for(let _=0;_<u;_++)f[g++]=l[m++]}return new Re(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ee,n=this.index.array,i=this.attributes;for(const a in i){const c=i[a],l=t(c,n);e.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let u=0,h=l.length;u<h;u++){const f=l[u],m=t(f,n);c.push(m)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const i={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let h=0,f=l.length;h<f;h++){const m=l[h];u.push(m.toJSON(t.data))}u.length>0&&(i[c]=u,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const l in i){const u=i[l];this.setAttribute(l,u.clone(e))}const r=t.morphAttributes;for(const l in r){const u=[],h=r[l];for(let f=0,m=h.length;f<m;f++)u.push(h[f].clone(e));this.morphAttributes[l]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,u=o.length;l<u;l++){const h=o[l];this.addGroup(h.start,h.count,h.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,t.parameters!==void 0&&(this.parameters=Object.assign({},t.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const qs=new kt,zn=new Ga,yr=new ji,Je=new A,$e=new A,Ke=new A,Sr=new A,br=new A,wr=new A,Li=new A,Pi=new A,Di=new A,Ri=new ht,Ii=new ht,Ni=new ht,Er=new A,Fi=new A;class me extends ae{constructor(t=new Ee,e=new vi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}raycast(t,e){const n=this.geometry,i=this.material,r=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),yr.copy(n.boundingSphere),yr.applyMatrix4(r),t.ray.intersectsSphere(yr)===!1)||(qs.copy(r).invert(),zn.copy(t.ray).applyMatrix4(qs),n.boundingBox!==null&&zn.intersectsBox(n.boundingBox)===!1))return;let o;const a=n.index,c=n.attributes.position,l=n.morphAttributes.position,u=n.morphTargetsRelative,h=n.attributes.uv,f=n.attributes.uv2,m=n.groups,g=n.drawRange;if(a!==null)if(Array.isArray(i))for(let p=0,d=m.length;p<d;p++){const _=m[p],E=i[_.materialIndex],S=Math.max(_.start,g.start),b=Math.min(a.count,Math.min(_.start+_.count,g.start+g.count));for(let M=S,L=b;M<L;M+=3){const O=a.getX(M),x=a.getX(M+1),C=a.getX(M+2);o=Oi(this,E,t,zn,c,l,u,h,f,O,x,C),o&&(o.faceIndex=Math.floor(M/3),o.face.materialIndex=_.materialIndex,e.push(o))}}else{const p=Math.max(0,g.start),d=Math.min(a.count,g.start+g.count);for(let _=p,E=d;_<E;_+=3){const S=a.getX(_),b=a.getX(_+1),M=a.getX(_+2);o=Oi(this,i,t,zn,c,l,u,h,f,S,b,M),o&&(o.faceIndex=Math.floor(_/3),e.push(o))}}else if(c!==void 0)if(Array.isArray(i))for(let p=0,d=m.length;p<d;p++){const _=m[p],E=i[_.materialIndex],S=Math.max(_.start,g.start),b=Math.min(c.count,Math.min(_.start+_.count,g.start+g.count));for(let M=S,L=b;M<L;M+=3){const O=M,x=M+1,C=M+2;o=Oi(this,E,t,zn,c,l,u,h,f,O,x,C),o&&(o.faceIndex=Math.floor(M/3),o.face.materialIndex=_.materialIndex,e.push(o))}}else{const p=Math.max(0,g.start),d=Math.min(c.count,g.start+g.count);for(let _=p,E=d;_<E;_+=3){const S=_,b=_+1,M=_+2;o=Oi(this,i,t,zn,c,l,u,h,f,S,b,M),o&&(o.faceIndex=Math.floor(_/3),e.push(o))}}}}function Fl(s,t,e,n,i,r,o,a){let c;if(t.side===be?c=n.intersectTriangle(o,r,i,!0,a):c=n.intersectTriangle(i,r,o,t.side!==Qe,a),c===null)return null;Fi.copy(a),Fi.applyMatrix4(s.matrixWorld);const l=e.ray.origin.distanceTo(Fi);return l<e.near||l>e.far?null:{distance:l,point:Fi.clone(),object:s}}function Oi(s,t,e,n,i,r,o,a,c,l,u,h){Je.fromBufferAttribute(i,l),$e.fromBufferAttribute(i,u),Ke.fromBufferAttribute(i,h);const f=s.morphTargetInfluences;if(r&&f){Li.set(0,0,0),Pi.set(0,0,0),Di.set(0,0,0);for(let g=0,p=r.length;g<p;g++){const d=f[g],_=r[g];d!==0&&(Sr.fromBufferAttribute(_,l),br.fromBufferAttribute(_,u),wr.fromBufferAttribute(_,h),o?(Li.addScaledVector(Sr,d),Pi.addScaledVector(br,d),Di.addScaledVector(wr,d)):(Li.addScaledVector(Sr.sub(Je),d),Pi.addScaledVector(br.sub($e),d),Di.addScaledVector(wr.sub(Ke),d)))}Je.add(Li),$e.add(Pi),Ke.add(Di)}s.isSkinnedMesh&&(s.boneTransform(l,Je),s.boneTransform(u,$e),s.boneTransform(h,Ke));const m=Fl(s,t,e,n,Je,$e,Ke,Er);if(m){a&&(Ri.fromBufferAttribute(a,l),Ii.fromBufferAttribute(a,u),Ni.fromBufferAttribute(a,h),m.uv=He.getUV(Er,Je,$e,Ke,Ri,Ii,Ni,new ht)),c&&(Ri.fromBufferAttribute(c,l),Ii.fromBufferAttribute(c,u),Ni.fromBufferAttribute(c,h),m.uv2=He.getUV(Er,Je,$e,Ke,Ri,Ii,Ni,new ht));const g={a:l,b:u,c:h,normal:new A,materialIndex:0};He.getNormal(Je,$e,Ke,g.normal),m.face=g}return m}class Qn extends Ee{constructor(t=1,e=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],u=[],h=[];let f=0,m=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,i,o,2),g("x","z","y",1,-1,t,n,-e,i,o,3),g("x","y","z",1,-1,t,e,n,i,r,4),g("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new qt(l,3)),this.setAttribute("normal",new qt(u,3)),this.setAttribute("uv",new qt(h,2));function g(p,d,_,E,S,b,M,L,O,x,C){const z=b/O,Y=M/x,st=b/2,B=M/2,I=L/2,q=O+1,j=x+1;let J=0,W=0;const N=new A;for(let U=0;U<j;U++){const tt=U*Y-B;for(let K=0;K<q;K++){const $=K*z-st;N[p]=$*E,N[d]=tt*S,N[_]=I,l.push(N.x,N.y,N.z),N[p]=0,N[d]=0,N[_]=L>0?1:-1,u.push(N.x,N.y,N.z),h.push(K/O),h.push(1-U/x),J+=1}}for(let U=0;U<x;U++)for(let tt=0;tt<O;tt++){const K=f+tt+q*U,$=f+tt+q*(U+1),ut=f+(tt+1)+q*(U+1),vt=f+(tt+1)+q*U;c.push(K,$,vt),c.push($,ut,vt),W+=6}a.addGroup(m,W,C),m+=W,f+=J}}static fromJSON(t){return new Qn(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Jn(s){const t={};for(const e in s){t[e]={};for(const n in s[e]){const i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function se(s){const t={};for(let e=0;e<s.length;e++){const n=Jn(s[e]);for(const i in n)t[i]=n[i]}return t}function Ol(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}const zl={clone:Jn,merge:se};var Ul=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Bl=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class yn extends Kn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ul,this.fragmentShader=Bl,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Jn(t.uniforms),this.uniformsGroups=Ol(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Wa extends ae{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new kt,this.projectionMatrix=new kt,this.projectionMatrixInverse=new kt}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(-e[8],-e[9],-e[10]).normalize()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class fe extends Wa{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Wi*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(hi*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Wi*2*Math.atan(Math.tan(hi*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,i,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(hi*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*i/c,e-=o.offsetY*n/l,i*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Un=90,Bn=1;class Gl extends ae{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n;const i=new fe(Un,Bn,t,e);i.layers=this.layers,i.up.set(0,-1,0),i.lookAt(new A(1,0,0)),this.add(i);const r=new fe(Un,Bn,t,e);r.layers=this.layers,r.up.set(0,-1,0),r.lookAt(new A(-1,0,0)),this.add(r);const o=new fe(Un,Bn,t,e);o.layers=this.layers,o.up.set(0,0,1),o.lookAt(new A(0,1,0)),this.add(o);const a=new fe(Un,Bn,t,e);a.layers=this.layers,a.up.set(0,0,-1),a.lookAt(new A(0,-1,0)),this.add(a);const c=new fe(Un,Bn,t,e);c.layers=this.layers,c.up.set(0,-1,0),c.lookAt(new A(0,0,1)),this.add(c);const l=new fe(Un,Bn,t,e);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new A(0,0,-1)),this.add(l)}update(t,e){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,r,o,a,c,l]=this.children,u=t.getRenderTarget(),h=t.toneMapping,f=t.xr.enabled;t.toneMapping=We,t.xr.enabled=!1;const m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0),t.render(e,i),t.setRenderTarget(n,1),t.render(e,r),t.setRenderTarget(n,2),t.render(e,o),t.setRenderTarget(n,3),t.render(e,a),t.setRenderTarget(n,4),t.render(e,c),n.texture.generateMipmaps=m,t.setRenderTarget(n,5),t.render(e,l),t.setRenderTarget(u),t.toneMapping=h,t.xr.enabled=f,n.texture.needsPMREMUpdate=!0}}class Xa extends we{constructor(t,e,n,i,r,o,a,c,l,u){t=t!==void 0?t:[],e=e!==void 0?e:Yn,super(t,e,n,i,r,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Vl extends vn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Xa(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:ye}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.encoding=e.encoding,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Qn(5,5,5),r=new yn({name:"CubemapFromEquirect",uniforms:Jn(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:be,blending:tn});r.uniforms.tEquirect.value=e;const o=new me(i,r),a=e.minFilter;return e.minFilter===Yi&&(e.minFilter=ye),new Gl(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,i){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(r)}}const Tr=new A,kl=new A,Hl=new Se;class ln{constructor(t=new A(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=Tr.subVectors(n,e).cross(kl.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(this.normal).multiplyScalar(-this.distanceToPoint(t)).add(t)}intersectLine(t,e){const n=t.delta(Tr),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(n).multiplyScalar(r).add(t.start)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Hl.getNormalMatrix(t),i=this.coplanarPoint(Tr).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Gn=new ji,zi=new A;class Zr{constructor(t=new ln,e=new ln,n=new ln,i=new ln,r=new ln,o=new ln){this.planes=[t,e,n,i,r,o]}set(t,e,n,i,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t){const e=this.planes,n=t.elements,i=n[0],r=n[1],o=n[2],a=n[3],c=n[4],l=n[5],u=n[6],h=n[7],f=n[8],m=n[9],g=n[10],p=n[11],d=n[12],_=n[13],E=n[14],S=n[15];return e[0].setComponents(a-i,h-c,p-f,S-d).normalize(),e[1].setComponents(a+i,h+c,p+f,S+d).normalize(),e[2].setComponents(a+r,h+l,p+m,S+_).normalize(),e[3].setComponents(a-r,h-l,p-m,S-_).normalize(),e[4].setComponents(a-o,h-u,p-g,S-E).normalize(),e[5].setComponents(a+o,h+u,p+g,S+E).normalize(),this}intersectsObject(t){const e=t.geometry;return e.boundingSphere===null&&e.computeBoundingSphere(),Gn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld),this.intersectsSphere(Gn)}intersectsSprite(t){return Gn.center.set(0,0,0),Gn.radius=.7071067811865476,Gn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Gn)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(zi.x=i.normal.x>0?t.max.x:t.min.x,zi.y=i.normal.y>0?t.max.y:t.min.y,zi.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(zi)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function qa(){let s=null,t=!1,e=null,n=null;function i(r,o){e(r,o),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function Wl(s,t){const e=t.isWebGL2,n=new WeakMap;function i(l,u){const h=l.array,f=l.usage,m=s.createBuffer();s.bindBuffer(u,m),s.bufferData(u,h,f),l.onUploadCallback();let g;if(h instanceof Float32Array)g=5126;else if(h instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(e)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(h instanceof Int16Array)g=5122;else if(h instanceof Uint32Array)g=5125;else if(h instanceof Int32Array)g=5124;else if(h instanceof Int8Array)g=5120;else if(h instanceof Uint8Array)g=5121;else if(h instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:m,type:g,bytesPerElement:h.BYTES_PER_ELEMENT,version:l.version}}function r(l,u,h){const f=u.array,m=u.updateRange;s.bindBuffer(h,l),m.count===-1?s.bufferSubData(h,0,f):(e?s.bufferSubData(h,m.offset*f.BYTES_PER_ELEMENT,f,m.offset,m.count):s.bufferSubData(h,m.offset*f.BYTES_PER_ELEMENT,f.subarray(m.offset,m.offset+m.count)),m.count=-1)}function o(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);const u=n.get(l);u&&(s.deleteBuffer(u.buffer),n.delete(l))}function c(l,u){if(l.isGLBufferAttribute){const f=n.get(l);(!f||f.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const h=n.get(l);h===void 0?n.set(l,i(l,u)):h.version<l.version&&(r(h.buffer,l,u),h.version=l.version)}return{get:o,remove:a,update:c}}class Jr extends Ee{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(i),l=a+1,u=c+1,h=t/a,f=e/c,m=[],g=[],p=[],d=[];for(let _=0;_<u;_++){const E=_*f-o;for(let S=0;S<l;S++){const b=S*h-r;g.push(b,-E,0),p.push(0,0,1),d.push(S/a),d.push(1-_/c)}}for(let _=0;_<c;_++)for(let E=0;E<a;E++){const S=E+l*_,b=E+l*(_+1),M=E+1+l*(_+1),L=E+1+l*_;m.push(S,b,L),m.push(b,M,L)}this.setIndex(m),this.setAttribute("position",new qt(g,3)),this.setAttribute("normal",new qt(p,3)),this.setAttribute("uv",new qt(d,2))}static fromJSON(t){return new Jr(t.width,t.height,t.widthSegments,t.heightSegments)}}var Xl=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,ql=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Yl=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,jl=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Zl=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Jl=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,$l="vec3 transformed = vec3( position );",Kl=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ql=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
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
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
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
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
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
float G_BlinnPhong_Implicit( ) {
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
#endif`,tc=`#ifdef USE_IRIDESCENCE
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
		float R21 = R12;
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
#endif`,ec=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,nc=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
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
#endif`,ic=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,rc=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,sc=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ac=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,oc=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,lc=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,cc=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,uc=`#define PI 3.141592653589793
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
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
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
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,hc=`#ifdef ENVMAP_TYPE_CUBE_UV
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
		vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
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
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
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
#endif`,dc=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,fc=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,pc=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,mc=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,gc=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,_c="gl_FragColor = linearToOutputTexel( gl_FragColor );",xc=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,vc=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,Mc=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,yc=`#ifdef USE_ENVMAP
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
#endif`,Sc=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,bc=`#ifdef USE_ENVMAP
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
#endif`,wc=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ec=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Tc=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ac=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Cc=`#ifdef USE_GRADIENTMAP
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
}`,Lc=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Pc=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Dc=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Rc=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert
#define Material_LightProbeLOD( material )	(0)`,Ic=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
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
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
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
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
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
#endif`,Nc=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,Fc=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Oc=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,zc=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Uc=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,Bc=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
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
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,Gc=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
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
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
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
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
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
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
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
}`,Vc=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
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
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getSpotLightInfo( spotLight, geometry, directLight );
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
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,kc=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Hc=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Wc=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Xc=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qc=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Yc=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,jc=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Zc=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Jc=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,$c=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Kc=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Qc=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,tu=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,eu=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,nu=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,iu=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,ru=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,su=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,au=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ou=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lu=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,cu=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,uu=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,hu=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,du=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,fu=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,pu=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,mu=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,gu=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,_u=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,xu=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,vu=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Mu=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,yu=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Su=`#if NUM_SPOT_LIGHT_COORDS > 0
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
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
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
		return shadow;
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
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
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,bu=`#if NUM_SPOT_LIGHT_COORDS > 0
  uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,wu=`#if defined( USE_SHADOWMAP ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_COORDS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
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
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,Eu=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Tu=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Au=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,Cu=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Lu=`#ifdef USE_SKINNING
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
#endif`,Pu=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Du=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ru=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Iu=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Nu=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,Fu=`#ifdef USE_TRANSMISSION
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
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,Ou=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,zu=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,Uu=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,Bu=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,Gu=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,Vu=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,ku=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Hu=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Wu=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	gl_FragColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		gl_FragColor = vec4( mix( pow( gl_FragColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), gl_FragColor.rgb * 0.0773993808, vec3( lessThanEqual( gl_FragColor.rgb, vec3( 0.04045 ) ) ) ), gl_FragColor.w );
	#endif
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Xu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qu=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Yu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ju=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Zu=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,Ju=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,$u=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,Ku=`#define DISTANCE
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
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Qu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,th=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,eh=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,nh=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ih=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,rh=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sh=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,ah=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,oh=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
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
	#include <morphcolor_vertex>
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
}`,lh=`#define MATCAP
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
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ch=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
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
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,uh=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
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
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,hh=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,dh=`#define PHONG
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
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fh=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,ph=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
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
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mh=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,gh=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_h=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
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
}`,xh=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,vh=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Mh=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,yh=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,Sh=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,wt={alphamap_fragment:Xl,alphamap_pars_fragment:ql,alphatest_fragment:Yl,alphatest_pars_fragment:jl,aomap_fragment:Zl,aomap_pars_fragment:Jl,begin_vertex:$l,beginnormal_vertex:Kl,bsdfs:Ql,iridescence_fragment:tc,bumpmap_pars_fragment:ec,clipping_planes_fragment:nc,clipping_planes_pars_fragment:ic,clipping_planes_pars_vertex:rc,clipping_planes_vertex:sc,color_fragment:ac,color_pars_fragment:oc,color_pars_vertex:lc,color_vertex:cc,common:uc,cube_uv_reflection_fragment:hc,defaultnormal_vertex:dc,displacementmap_pars_vertex:fc,displacementmap_vertex:pc,emissivemap_fragment:mc,emissivemap_pars_fragment:gc,encodings_fragment:_c,encodings_pars_fragment:xc,envmap_fragment:vc,envmap_common_pars_fragment:Mc,envmap_pars_fragment:yc,envmap_pars_vertex:Sc,envmap_physical_pars_fragment:Nc,envmap_vertex:bc,fog_vertex:wc,fog_pars_vertex:Ec,fog_fragment:Tc,fog_pars_fragment:Ac,gradientmap_pars_fragment:Cc,lightmap_fragment:Lc,lightmap_pars_fragment:Pc,lights_lambert_fragment:Dc,lights_lambert_pars_fragment:Rc,lights_pars_begin:Ic,lights_toon_fragment:Fc,lights_toon_pars_fragment:Oc,lights_phong_fragment:zc,lights_phong_pars_fragment:Uc,lights_physical_fragment:Bc,lights_physical_pars_fragment:Gc,lights_fragment_begin:Vc,lights_fragment_maps:kc,lights_fragment_end:Hc,logdepthbuf_fragment:Wc,logdepthbuf_pars_fragment:Xc,logdepthbuf_pars_vertex:qc,logdepthbuf_vertex:Yc,map_fragment:jc,map_pars_fragment:Zc,map_particle_fragment:Jc,map_particle_pars_fragment:$c,metalnessmap_fragment:Kc,metalnessmap_pars_fragment:Qc,morphcolor_vertex:tu,morphnormal_vertex:eu,morphtarget_pars_vertex:nu,morphtarget_vertex:iu,normal_fragment_begin:ru,normal_fragment_maps:su,normal_pars_fragment:au,normal_pars_vertex:ou,normal_vertex:lu,normalmap_pars_fragment:cu,clearcoat_normal_fragment_begin:uu,clearcoat_normal_fragment_maps:hu,clearcoat_pars_fragment:du,iridescence_pars_fragment:fu,output_fragment:pu,packing:mu,premultiplied_alpha_fragment:gu,project_vertex:_u,dithering_fragment:xu,dithering_pars_fragment:vu,roughnessmap_fragment:Mu,roughnessmap_pars_fragment:yu,shadowmap_pars_fragment:Su,shadowmap_pars_vertex:bu,shadowmap_vertex:wu,shadowmask_pars_fragment:Eu,skinbase_vertex:Tu,skinning_pars_vertex:Au,skinning_vertex:Cu,skinnormal_vertex:Lu,specularmap_fragment:Pu,specularmap_pars_fragment:Du,tonemapping_fragment:Ru,tonemapping_pars_fragment:Iu,transmission_fragment:Nu,transmission_pars_fragment:Fu,uv_pars_fragment:Ou,uv_pars_vertex:zu,uv_vertex:Uu,uv2_pars_fragment:Bu,uv2_pars_vertex:Gu,uv2_vertex:Vu,worldpos_vertex:ku,background_vert:Hu,background_frag:Wu,backgroundCube_vert:Xu,backgroundCube_frag:qu,cube_vert:Yu,cube_frag:ju,depth_vert:Zu,depth_frag:Ju,distanceRGBA_vert:$u,distanceRGBA_frag:Ku,equirect_vert:Qu,equirect_frag:th,linedashed_vert:eh,linedashed_frag:nh,meshbasic_vert:ih,meshbasic_frag:rh,meshlambert_vert:sh,meshlambert_frag:ah,meshmatcap_vert:oh,meshmatcap_frag:lh,meshnormal_vert:ch,meshnormal_frag:uh,meshphong_vert:hh,meshphong_frag:dh,meshphysical_vert:fh,meshphysical_frag:ph,meshtoon_vert:mh,meshtoon_frag:gh,points_vert:_h,points_frag:xh,shadow_vert:vh,shadow_frag:Mh,sprite_vert:yh,sprite_frag:Sh},nt={common:{diffuse:{value:new Ot(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new Se},uv2Transform:{value:new Se},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new ht(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ot(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ot(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Se}},sprite:{diffuse:{value:new Ot(16777215)},opacity:{value:1},center:{value:new ht(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Se}}},Ne={basic:{uniforms:se([nt.common,nt.specularmap,nt.envmap,nt.aomap,nt.lightmap,nt.fog]),vertexShader:wt.meshbasic_vert,fragmentShader:wt.meshbasic_frag},lambert:{uniforms:se([nt.common,nt.specularmap,nt.envmap,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.fog,nt.lights,{emissive:{value:new Ot(0)}}]),vertexShader:wt.meshlambert_vert,fragmentShader:wt.meshlambert_frag},phong:{uniforms:se([nt.common,nt.specularmap,nt.envmap,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.fog,nt.lights,{emissive:{value:new Ot(0)},specular:{value:new Ot(1118481)},shininess:{value:30}}]),vertexShader:wt.meshphong_vert,fragmentShader:wt.meshphong_frag},standard:{uniforms:se([nt.common,nt.envmap,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.roughnessmap,nt.metalnessmap,nt.fog,nt.lights,{emissive:{value:new Ot(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:wt.meshphysical_vert,fragmentShader:wt.meshphysical_frag},toon:{uniforms:se([nt.common,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.gradientmap,nt.fog,nt.lights,{emissive:{value:new Ot(0)}}]),vertexShader:wt.meshtoon_vert,fragmentShader:wt.meshtoon_frag},matcap:{uniforms:se([nt.common,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.fog,{matcap:{value:null}}]),vertexShader:wt.meshmatcap_vert,fragmentShader:wt.meshmatcap_frag},points:{uniforms:se([nt.points,nt.fog]),vertexShader:wt.points_vert,fragmentShader:wt.points_frag},dashed:{uniforms:se([nt.common,nt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:wt.linedashed_vert,fragmentShader:wt.linedashed_frag},depth:{uniforms:se([nt.common,nt.displacementmap]),vertexShader:wt.depth_vert,fragmentShader:wt.depth_frag},normal:{uniforms:se([nt.common,nt.bumpmap,nt.normalmap,nt.displacementmap,{opacity:{value:1}}]),vertexShader:wt.meshnormal_vert,fragmentShader:wt.meshnormal_frag},sprite:{uniforms:se([nt.sprite,nt.fog]),vertexShader:wt.sprite_vert,fragmentShader:wt.sprite_frag},background:{uniforms:{uvTransform:{value:new Se},t2D:{value:null}},vertexShader:wt.background_vert,fragmentShader:wt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0}},vertexShader:wt.backgroundCube_vert,fragmentShader:wt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:wt.cube_vert,fragmentShader:wt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:wt.equirect_vert,fragmentShader:wt.equirect_frag},distanceRGBA:{uniforms:se([nt.common,nt.displacementmap,{referencePosition:{value:new A},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:wt.distanceRGBA_vert,fragmentShader:wt.distanceRGBA_frag},shadow:{uniforms:se([nt.lights,nt.fog,{color:{value:new Ot(0)},opacity:{value:1}}]),vertexShader:wt.shadow_vert,fragmentShader:wt.shadow_frag}};Ne.physical={uniforms:se([Ne.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new ht(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new Ot(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new ht},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Ot(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new Ot(1,1,1)},specularColorMap:{value:null}}]),vertexShader:wt.meshphysical_vert,fragmentShader:wt.meshphysical_frag};function bh(s,t,e,n,i,r,o){const a=new Ot(0);let c=r===!0?0:1,l,u,h=null,f=0,m=null;function g(d,_){let E=!1,S=_.isScene===!0?_.background:null;S&&S.isTexture&&(S=(_.backgroundBlurriness>0?e:t).get(S));const b=s.xr,M=b.getSession&&b.getSession();M&&M.environmentBlendMode==="additive"&&(S=null),S===null?p(a,c):S&&S.isColor&&(p(S,1),E=!0),(s.autoClear||E)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),S&&(S.isCubeTexture||S.mapping===qi)?(u===void 0&&(u=new me(new Qn(1,1,1),new yn({name:"BackgroundCubeMaterial",uniforms:Jn(Ne.backgroundCube.uniforms),vertexShader:Ne.backgroundCube.vertexShader,fragmentShader:Ne.backgroundCube.fragmentShader,side:be,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(L,O,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=S,u.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,(h!==S||f!==S.version||m!==s.toneMapping)&&(u.material.needsUpdate=!0,h=S,f=S.version,m=s.toneMapping),u.layers.enableAll(),d.unshift(u,u.geometry,u.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new me(new Jr(2,2),new yn({name:"BackgroundMaterial",uniforms:Jn(Ne.background.uniforms),vertexShader:Ne.background.vertexShader,fragmentShader:Ne.background.fragmentShader,side:qn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=S,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(h!==S||f!==S.version||m!==s.toneMapping)&&(l.material.needsUpdate=!0,h=S,f=S.version,m=s.toneMapping),l.layers.enableAll(),d.unshift(l,l.geometry,l.material,0,0,null))}function p(d,_){n.buffers.color.setClear(d.r,d.g,d.b,_,o)}return{getClearColor:function(){return a},setClearColor:function(d,_=1){a.set(d),c=_,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(d){c=d,p(a,c)},render:g}}function wh(s,t,e,n){const i=s.getParameter(34921),r=n.isWebGL2?null:t.get("OES_vertex_array_object"),o=n.isWebGL2||r!==null,a={},c=d(null);let l=c,u=!1;function h(I,q,j,J,W){let N=!1;if(o){const U=p(J,j,q);l!==U&&(l=U,m(l.object)),N=_(I,J,j,W),N&&E(I,J,j,W)}else{const U=q.wireframe===!0;(l.geometry!==J.id||l.program!==j.id||l.wireframe!==U)&&(l.geometry=J.id,l.program=j.id,l.wireframe=U,N=!0)}W!==null&&e.update(W,34963),(N||u)&&(u=!1,x(I,q,j,J),W!==null&&s.bindBuffer(34963,e.get(W).buffer))}function f(){return n.isWebGL2?s.createVertexArray():r.createVertexArrayOES()}function m(I){return n.isWebGL2?s.bindVertexArray(I):r.bindVertexArrayOES(I)}function g(I){return n.isWebGL2?s.deleteVertexArray(I):r.deleteVertexArrayOES(I)}function p(I,q,j){const J=j.wireframe===!0;let W=a[I.id];W===void 0&&(W={},a[I.id]=W);let N=W[q.id];N===void 0&&(N={},W[q.id]=N);let U=N[J];return U===void 0&&(U=d(f()),N[J]=U),U}function d(I){const q=[],j=[],J=[];for(let W=0;W<i;W++)q[W]=0,j[W]=0,J[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:q,enabledAttributes:j,attributeDivisors:J,object:I,attributes:{},index:null}}function _(I,q,j,J){const W=l.attributes,N=q.attributes;let U=0;const tt=j.getAttributes();for(const K in tt)if(tt[K].location>=0){const ut=W[K];let vt=N[K];if(vt===void 0&&(K==="instanceMatrix"&&I.instanceMatrix&&(vt=I.instanceMatrix),K==="instanceColor"&&I.instanceColor&&(vt=I.instanceColor)),ut===void 0||ut.attribute!==vt||vt&&ut.data!==vt.data)return!0;U++}return l.attributesNum!==U||l.index!==J}function E(I,q,j,J){const W={},N=q.attributes;let U=0;const tt=j.getAttributes();for(const K in tt)if(tt[K].location>=0){let ut=N[K];ut===void 0&&(K==="instanceMatrix"&&I.instanceMatrix&&(ut=I.instanceMatrix),K==="instanceColor"&&I.instanceColor&&(ut=I.instanceColor));const vt={};vt.attribute=ut,ut&&ut.data&&(vt.data=ut.data),W[K]=vt,U++}l.attributes=W,l.attributesNum=U,l.index=J}function S(){const I=l.newAttributes;for(let q=0,j=I.length;q<j;q++)I[q]=0}function b(I){M(I,0)}function M(I,q){const j=l.newAttributes,J=l.enabledAttributes,W=l.attributeDivisors;j[I]=1,J[I]===0&&(s.enableVertexAttribArray(I),J[I]=1),W[I]!==q&&((n.isWebGL2?s:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](I,q),W[I]=q)}function L(){const I=l.newAttributes,q=l.enabledAttributes;for(let j=0,J=q.length;j<J;j++)q[j]!==I[j]&&(s.disableVertexAttribArray(j),q[j]=0)}function O(I,q,j,J,W,N){n.isWebGL2===!0&&(j===5124||j===5125)?s.vertexAttribIPointer(I,q,j,W,N):s.vertexAttribPointer(I,q,j,J,W,N)}function x(I,q,j,J){if(n.isWebGL2===!1&&(I.isInstancedMesh||J.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;S();const W=J.attributes,N=j.getAttributes(),U=q.defaultAttributeValues;for(const tt in N){const K=N[tt];if(K.location>=0){let $=W[tt];if($===void 0&&(tt==="instanceMatrix"&&I.instanceMatrix&&($=I.instanceMatrix),tt==="instanceColor"&&I.instanceColor&&($=I.instanceColor)),$!==void 0){const ut=$.normalized,vt=$.itemSize,X=e.get($);if(X===void 0)continue;const Pt=X.buffer,xt=X.type,Mt=X.bytesPerElement;if($.isInterleavedBufferAttribute){const ct=$.data,Nt=ct.stride,St=$.offset;if(ct.isInstancedInterleavedBuffer){for(let gt=0;gt<K.locationSize;gt++)M(K.location+gt,ct.meshPerAttribute);I.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=ct.meshPerAttribute*ct.count)}else for(let gt=0;gt<K.locationSize;gt++)b(K.location+gt);s.bindBuffer(34962,Pt);for(let gt=0;gt<K.locationSize;gt++)O(K.location+gt,vt/K.locationSize,xt,ut,Nt*Mt,(St+vt/K.locationSize*gt)*Mt)}else{if($.isInstancedBufferAttribute){for(let ct=0;ct<K.locationSize;ct++)M(K.location+ct,$.meshPerAttribute);I.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let ct=0;ct<K.locationSize;ct++)b(K.location+ct);s.bindBuffer(34962,Pt);for(let ct=0;ct<K.locationSize;ct++)O(K.location+ct,vt/K.locationSize,xt,ut,vt*Mt,vt/K.locationSize*ct*Mt)}}else if(U!==void 0){const ut=U[tt];if(ut!==void 0)switch(ut.length){case 2:s.vertexAttrib2fv(K.location,ut);break;case 3:s.vertexAttrib3fv(K.location,ut);break;case 4:s.vertexAttrib4fv(K.location,ut);break;default:s.vertexAttrib1fv(K.location,ut)}}}}L()}function C(){st();for(const I in a){const q=a[I];for(const j in q){const J=q[j];for(const W in J)g(J[W].object),delete J[W];delete q[j]}delete a[I]}}function z(I){if(a[I.id]===void 0)return;const q=a[I.id];for(const j in q){const J=q[j];for(const W in J)g(J[W].object),delete J[W];delete q[j]}delete a[I.id]}function Y(I){for(const q in a){const j=a[q];if(j[I.id]===void 0)continue;const J=j[I.id];for(const W in J)g(J[W].object),delete J[W];delete j[I.id]}}function st(){B(),u=!0,l!==c&&(l=c,m(l.object))}function B(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:h,reset:st,resetDefaultState:B,dispose:C,releaseStatesOfGeometry:z,releaseStatesOfProgram:Y,initAttributes:S,enableAttribute:b,disableUnusedAttributes:L}}function Eh(s,t,e,n){const i=n.isWebGL2;let r;function o(l){r=l}function a(l,u){s.drawArrays(r,l,u),e.update(u,r,1)}function c(l,u,h){if(h===0)return;let f,m;if(i)f=s,m="drawArraysInstanced";else if(f=t.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[m](r,l,u,h),e.update(u,r,h)}this.setMode=o,this.render=a,this.renderInstances=c}function Th(s,t,e){let n;function i(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const O=t.get("EXT_texture_filter_anisotropic");n=s.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(O){if(O==="highp"){if(s.getShaderPrecisionFormat(35633,36338).precision>0&&s.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";O="mediump"}return O==="mediump"&&s.getShaderPrecisionFormat(35633,36337).precision>0&&s.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&s instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&s instanceof WebGL2ComputeRenderingContext;let a=e.precision!==void 0?e.precision:"highp";const c=r(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);const l=o||t.has("WEBGL_draw_buffers"),u=e.logarithmicDepthBuffer===!0,h=s.getParameter(34930),f=s.getParameter(35660),m=s.getParameter(3379),g=s.getParameter(34076),p=s.getParameter(34921),d=s.getParameter(36347),_=s.getParameter(36348),E=s.getParameter(36349),S=f>0,b=o||t.has("OES_texture_float"),M=S&&b,L=o?s.getParameter(36183):0;return{isWebGL2:o,drawBuffers:l,getMaxAnisotropy:i,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:f,maxTextureSize:m,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:d,maxVaryings:_,maxFragmentUniforms:E,vertexTextures:S,floatFragmentTextures:b,floatVertexTextures:M,maxSamples:L}}function Ah(s){const t=this;let e=null,n=0,i=!1,r=!1;const o=new ln,a=new Se,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f,m){const g=h.length!==0||f||n!==0||i;return i=f,e=u(h,m,0),n=h.length,g},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1,l()},this.setState=function(h,f,m){const g=h.clippingPlanes,p=h.clipIntersection,d=h.clipShadows,_=s.get(h);if(!i||g===null||g.length===0||r&&!d)r?u(null):l();else{const E=r?0:n,S=E*4;let b=_.clippingState||null;c.value=b,b=u(g,f,S,m);for(let M=0;M!==S;++M)b[M]=e[M];_.clippingState=b,this.numIntersection=p?this.numPlanes:0,this.numPlanes+=E}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(h,f,m,g){const p=h!==null?h.length:0;let d=null;if(p!==0){if(d=c.value,g!==!0||d===null){const _=m+p*4,E=f.matrixWorldInverse;a.getNormalMatrix(E),(d===null||d.length<_)&&(d=new Float32Array(_));for(let S=0,b=m;S!==p;++S,b+=4)o.copy(h[S]).applyMatrix4(E,a),o.normal.toArray(d,b),d[b+3]=o.constant}c.value=d,c.needsUpdate=!0}return t.numPlanes=p,t.numIntersection=0,d}}function Ch(s){let t=new WeakMap;function e(o,a){return a===Gr?o.mapping=Yn:a===Vr&&(o.mapping=jn),o}function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===Gr||a===Vr)if(t.has(o)){const c=t.get(o).texture;return e(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new Vl(c.height/2);return l.fromEquirectangularTexture(s,o),t.set(o,l),o.addEventListener("dispose",i),e(l.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class Lh extends Wa{constructor(t=-1,e=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=i+e,c=i-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Hn=4,Ys=[.125,.215,.35,.446,.526,.582],un=20,Ar=new Lh,js=new Ot;let Cr=null;const cn=(1+Math.sqrt(5))/2,Vn=1/cn,Zs=[new A(1,1,1),new A(-1,1,1),new A(1,1,-1),new A(-1,1,-1),new A(0,cn,Vn),new A(0,cn,-Vn),new A(Vn,0,cn),new A(-Vn,0,cn),new A(cn,Vn,0),new A(-cn,Vn,0)];class Js{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){Cr=this._renderer.getRenderTarget(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,i,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Qs(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ks(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Cr),t.scissorTest=!1,Ui(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Yn||t.mapping===jn?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Cr=this._renderer.getRenderTarget();const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:ye,minFilter:ye,generateMipmaps:!1,type:mi,format:De,encoding:xn,depthBuffer:!1},i=$s(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=$s(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Ph(r)),this._blurMaterial=Dh(r,t,e)}return i}_compileMaterial(t){const e=new me(this._lodPlanes[0],t);this._renderer.compile(e,Ar)}_sceneToCubeUV(t,e,n,i){const a=new fe(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(js),u.toneMapping=We,u.autoClear=!1;const m=new vi({name:"PMREM.Background",side:be,depthWrite:!1,depthTest:!1}),g=new me(new Qn,m);let p=!1;const d=t.background;d?d.isColor&&(m.color.copy(d),t.background=null,p=!0):(m.color.copy(js),p=!0);for(let _=0;_<6;_++){const E=_%3;E===0?(a.up.set(0,c[_],0),a.lookAt(l[_],0,0)):E===1?(a.up.set(0,0,c[_]),a.lookAt(0,l[_],0)):(a.up.set(0,c[_],0),a.lookAt(0,0,l[_]));const S=this._cubeSize;Ui(i,E*S,_>2?S:0,S,S),u.setRenderTarget(i),p&&u.render(g,a),u.render(t,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=h,t.background=d}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===Yn||t.mapping===jn;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Qs()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ks());const r=i?this._cubemapMaterial:this._equirectMaterial,o=new me(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const c=this._cubeSize;Ui(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,Ar)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=Zs[(i-1)%Zs.length];this._blur(t,i-1,i,r,o)}e.autoClear=n}_blur(t,e,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",r),this._halfBlur(o,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new me(this._lodPlanes[i],l),f=l.uniforms,m=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*un-1),p=r/g,d=isFinite(r)?1+Math.floor(u*p):un;d>un&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${d} samples when the maximum is set to ${un}`);const _=[];let E=0;for(let O=0;O<un;++O){const x=O/p,C=Math.exp(-x*x/2);_.push(C),O===0?E+=C:O<d&&(E+=2*C)}for(let O=0;O<_.length;O++)_[O]=_[O]/E;f.envMap.value=t.texture,f.samples.value=d,f.weights.value=_,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:S}=this;f.dTheta.value=g,f.mipInt.value=S-n;const b=this._sizeLods[i],M=3*b*(i>S-Hn?i-S+Hn:0),L=4*(this._cubeSize-b);Ui(e,M,L,3*b,2*b),c.setRenderTarget(e),c.render(h,Ar)}}function Ph(s){const t=[],e=[],n=[];let i=s;const r=s-Hn+1+Ys.length;for(let o=0;o<r;o++){const a=Math.pow(2,i);e.push(a);let c=1/a;o>s-Hn?c=Ys[o-s+Hn-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),u=-l,h=1+l,f=[u,u,h,u,h,h,u,u,h,h,u,h],m=6,g=6,p=3,d=2,_=1,E=new Float32Array(p*g*m),S=new Float32Array(d*g*m),b=new Float32Array(_*g*m);for(let L=0;L<m;L++){const O=L%3*2/3-1,x=L>2?0:-1,C=[O,x,0,O+2/3,x,0,O+2/3,x+1,0,O,x,0,O+2/3,x+1,0,O,x+1,0];E.set(C,p*g*L),S.set(f,d*g*L);const z=[L,L,L,L,L,L];b.set(z,_*g*L)}const M=new Ee;M.setAttribute("position",new Re(E,p)),M.setAttribute("uv",new Re(S,d)),M.setAttribute("faceIndex",new Re(b,_)),t.push(M),i>Hn&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function $s(s,t,e){const n=new vn(s,t,e);return n.texture.mapping=qi,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ui(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function Dh(s,t,e){const n=new Float32Array(un),i=new A(0,1,0);return new yn({name:"SphericalGaussianBlur",defines:{n:un,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:$r(),fragmentShader:`

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
		`,blending:tn,depthTest:!1,depthWrite:!1})}function Ks(){return new yn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:$r(),fragmentShader:`

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
		`,blending:tn,depthTest:!1,depthWrite:!1})}function Qs(){return new yn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:$r(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:tn,depthTest:!1,depthWrite:!1})}function $r(){return`

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
	`}function Rh(s){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===Gr||c===Vr,u=c===Yn||c===jn;if(l||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let h=t.get(a);return e===null&&(e=new Js(s)),h=l?e.fromEquirectangular(a,h):e.fromCubemap(a,h),t.set(a,h),h.texture}else{if(t.has(a))return t.get(a).texture;{const h=a.image;if(l&&h&&h.height>0||u&&h&&i(h)){e===null&&(e=new Js(s));const f=l?e.fromEquirectangular(a):e.fromCubemap(a);return t.set(a,f),a.addEventListener("dispose",r),f.texture}else return null}}}return a}function i(a){let c=0;const l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Ih(s){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?e("EXT_color_buffer_float"):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){const i=e(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Nh(s,t,e,n){const i={},r=new WeakMap;function o(h){const f=h.target;f.index!==null&&t.remove(f.index);for(const g in f.attributes)t.remove(f.attributes[g]);f.removeEventListener("dispose",o),delete i[f.id];const m=r.get(f);m&&(t.remove(m),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(h,f){return i[f.id]===!0||(f.addEventListener("dispose",o),i[f.id]=!0,e.memory.geometries++),f}function c(h){const f=h.attributes;for(const g in f)t.update(f[g],34962);const m=h.morphAttributes;for(const g in m){const p=m[g];for(let d=0,_=p.length;d<_;d++)t.update(p[d],34962)}}function l(h){const f=[],m=h.index,g=h.attributes.position;let p=0;if(m!==null){const E=m.array;p=m.version;for(let S=0,b=E.length;S<b;S+=3){const M=E[S+0],L=E[S+1],O=E[S+2];f.push(M,L,L,O,O,M)}}else{const E=g.array;p=g.version;for(let S=0,b=E.length/3-1;S<b;S+=3){const M=S+0,L=S+1,O=S+2;f.push(M,L,L,O,O,M)}}const d=new(Fa(f)?Ha:ka)(f,1);d.version=p;const _=r.get(h);_&&t.remove(_),r.set(h,d)}function u(h){const f=r.get(h);if(f){const m=h.index;m!==null&&f.version<m.version&&l(h)}else l(h);return r.get(h)}return{get:a,update:c,getWireframeAttribute:u}}function Fh(s,t,e,n){const i=n.isWebGL2;let r;function o(f){r=f}let a,c;function l(f){a=f.type,c=f.bytesPerElement}function u(f,m){s.drawElements(r,m,a,f*c),e.update(m,r,1)}function h(f,m,g){if(g===0)return;let p,d;if(i)p=s,d="drawElementsInstanced";else if(p=t.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[d](r,m,a,f*c,g),e.update(m,r,g)}this.setMode=o,this.setIndex=l,this.render=u,this.renderInstances=h}function Oh(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case 4:e.triangles+=a*(r/3);break;case 1:e.lines+=a*(r/2);break;case 3:e.lines+=a*(r-1);break;case 2:e.lines+=a*r;break;case 0:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.frame++,e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function zh(s,t){return s[0]-t[0]}function Uh(s,t){return Math.abs(t[1])-Math.abs(s[1])}function Bh(s,t,e){const n={},i=new Float32Array(8),r=new WeakMap,o=new Bt,a=[];for(let l=0;l<8;l++)a[l]=[l,0];function c(l,u,h,f){const m=l.morphTargetInfluences;if(t.isWebGL2===!0){const p=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,d=p!==void 0?p.length:0;let _=r.get(u);if(_===void 0||_.count!==d){let j=function(){I.dispose(),r.delete(u),u.removeEventListener("dispose",j)};var g=j;_!==void 0&&_.texture.dispose();const b=u.morphAttributes.position!==void 0,M=u.morphAttributes.normal!==void 0,L=u.morphAttributes.color!==void 0,O=u.morphAttributes.position||[],x=u.morphAttributes.normal||[],C=u.morphAttributes.color||[];let z=0;b===!0&&(z=1),M===!0&&(z=2),L===!0&&(z=3);let Y=u.attributes.position.count*z,st=1;Y>t.maxTextureSize&&(st=Math.ceil(Y/t.maxTextureSize),Y=t.maxTextureSize);const B=new Float32Array(Y*st*4*d),I=new Ba(B,Y,st,d);I.type=dn,I.needsUpdate=!0;const q=z*4;for(let J=0;J<d;J++){const W=O[J],N=x[J],U=C[J],tt=Y*st*4*J;for(let K=0;K<W.count;K++){const $=K*q;b===!0&&(o.fromBufferAttribute(W,K),B[tt+$+0]=o.x,B[tt+$+1]=o.y,B[tt+$+2]=o.z,B[tt+$+3]=0),M===!0&&(o.fromBufferAttribute(N,K),B[tt+$+4]=o.x,B[tt+$+5]=o.y,B[tt+$+6]=o.z,B[tt+$+7]=0),L===!0&&(o.fromBufferAttribute(U,K),B[tt+$+8]=o.x,B[tt+$+9]=o.y,B[tt+$+10]=o.z,B[tt+$+11]=U.itemSize===4?o.w:1)}}_={count:d,texture:I,size:new ht(Y,st)},r.set(u,_),u.addEventListener("dispose",j)}let E=0;for(let b=0;b<m.length;b++)E+=m[b];const S=u.morphTargetsRelative?1:1-E;f.getUniforms().setValue(s,"morphTargetBaseInfluence",S),f.getUniforms().setValue(s,"morphTargetInfluences",m),f.getUniforms().setValue(s,"morphTargetsTexture",_.texture,e),f.getUniforms().setValue(s,"morphTargetsTextureSize",_.size)}else{const p=m===void 0?0:m.length;let d=n[u.id];if(d===void 0||d.length!==p){d=[];for(let M=0;M<p;M++)d[M]=[M,0];n[u.id]=d}for(let M=0;M<p;M++){const L=d[M];L[0]=M,L[1]=m[M]}d.sort(Uh);for(let M=0;M<8;M++)M<p&&d[M][1]?(a[M][0]=d[M][0],a[M][1]=d[M][1]):(a[M][0]=Number.MAX_SAFE_INTEGER,a[M][1]=0);a.sort(zh);const _=u.morphAttributes.position,E=u.morphAttributes.normal;let S=0;for(let M=0;M<8;M++){const L=a[M],O=L[0],x=L[1];O!==Number.MAX_SAFE_INTEGER&&x?(_&&u.getAttribute("morphTarget"+M)!==_[O]&&u.setAttribute("morphTarget"+M,_[O]),E&&u.getAttribute("morphNormal"+M)!==E[O]&&u.setAttribute("morphNormal"+M,E[O]),i[M]=x,S+=x):(_&&u.hasAttribute("morphTarget"+M)===!0&&u.deleteAttribute("morphTarget"+M),E&&u.hasAttribute("morphNormal"+M)===!0&&u.deleteAttribute("morphNormal"+M),i[M]=0)}const b=u.morphTargetsRelative?1:1-S;f.getUniforms().setValue(s,"morphTargetBaseInfluence",b),f.getUniforms().setValue(s,"morphTargetInfluences",i)}}return{update:c}}function Gh(s,t,e,n){let i=new WeakMap;function r(c){const l=n.render.frame,u=c.geometry,h=t.get(c,u);return i.get(h)!==l&&(t.update(h),i.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),e.update(c.instanceMatrix,34962),c.instanceColor!==null&&e.update(c.instanceColor,34962)),h}function o(){i=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}const Ya=new we,ja=new Ba,Za=new El,Ja=new Xa,ta=[],ea=[],na=new Float32Array(16),ia=new Float32Array(9),ra=new Float32Array(4);function ti(s,t,e){const n=s[0];if(n<=0||n>0)return s;const i=t*e;let r=ta[i];if(r===void 0&&(r=new Float32Array(i),ta[i]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,s[o].toArray(r,a)}return r}function Jt(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function $t(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function Zi(s,t){let e=ea[t];e===void 0&&(e=new Int32Array(t),ea[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function Vh(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function kh(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Jt(e,t))return;s.uniform2fv(this.addr,t),$t(e,t)}}function Hh(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Jt(e,t))return;s.uniform3fv(this.addr,t),$t(e,t)}}function Wh(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Jt(e,t))return;s.uniform4fv(this.addr,t),$t(e,t)}}function Xh(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Jt(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),$t(e,t)}else{if(Jt(e,n))return;ra.set(n),s.uniformMatrix2fv(this.addr,!1,ra),$t(e,n)}}function qh(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Jt(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),$t(e,t)}else{if(Jt(e,n))return;ia.set(n),s.uniformMatrix3fv(this.addr,!1,ia),$t(e,n)}}function Yh(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Jt(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),$t(e,t)}else{if(Jt(e,n))return;na.set(n),s.uniformMatrix4fv(this.addr,!1,na),$t(e,n)}}function jh(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function Zh(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Jt(e,t))return;s.uniform2iv(this.addr,t),$t(e,t)}}function Jh(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Jt(e,t))return;s.uniform3iv(this.addr,t),$t(e,t)}}function $h(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Jt(e,t))return;s.uniform4iv(this.addr,t),$t(e,t)}}function Kh(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function Qh(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Jt(e,t))return;s.uniform2uiv(this.addr,t),$t(e,t)}}function td(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Jt(e,t))return;s.uniform3uiv(this.addr,t),$t(e,t)}}function ed(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Jt(e,t))return;s.uniform4uiv(this.addr,t),$t(e,t)}}function nd(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2D(t||Ya,i)}function id(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Za,i)}function rd(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||Ja,i)}function sd(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||ja,i)}function ad(s){switch(s){case 5126:return Vh;case 35664:return kh;case 35665:return Hh;case 35666:return Wh;case 35674:return Xh;case 35675:return qh;case 35676:return Yh;case 5124:case 35670:return jh;case 35667:case 35671:return Zh;case 35668:case 35672:return Jh;case 35669:case 35673:return $h;case 5125:return Kh;case 36294:return Qh;case 36295:return td;case 36296:return ed;case 35678:case 36198:case 36298:case 36306:case 35682:return nd;case 35679:case 36299:case 36307:return id;case 35680:case 36300:case 36308:case 36293:return rd;case 36289:case 36303:case 36311:case 36292:return sd}}function od(s,t){s.uniform1fv(this.addr,t)}function ld(s,t){const e=ti(t,this.size,2);s.uniform2fv(this.addr,e)}function cd(s,t){const e=ti(t,this.size,3);s.uniform3fv(this.addr,e)}function ud(s,t){const e=ti(t,this.size,4);s.uniform4fv(this.addr,e)}function hd(s,t){const e=ti(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function dd(s,t){const e=ti(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function fd(s,t){const e=ti(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function pd(s,t){s.uniform1iv(this.addr,t)}function md(s,t){s.uniform2iv(this.addr,t)}function gd(s,t){s.uniform3iv(this.addr,t)}function _d(s,t){s.uniform4iv(this.addr,t)}function xd(s,t){s.uniform1uiv(this.addr,t)}function vd(s,t){s.uniform2uiv(this.addr,t)}function Md(s,t){s.uniform3uiv(this.addr,t)}function yd(s,t){s.uniform4uiv(this.addr,t)}function Sd(s,t,e){const n=this.cache,i=t.length,r=Zi(e,i);Jt(n,r)||(s.uniform1iv(this.addr,r),$t(n,r));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||Ya,r[o])}function bd(s,t,e){const n=this.cache,i=t.length,r=Zi(e,i);Jt(n,r)||(s.uniform1iv(this.addr,r),$t(n,r));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||Za,r[o])}function wd(s,t,e){const n=this.cache,i=t.length,r=Zi(e,i);Jt(n,r)||(s.uniform1iv(this.addr,r),$t(n,r));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||Ja,r[o])}function Ed(s,t,e){const n=this.cache,i=t.length,r=Zi(e,i);Jt(n,r)||(s.uniform1iv(this.addr,r),$t(n,r));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||ja,r[o])}function Td(s){switch(s){case 5126:return od;case 35664:return ld;case 35665:return cd;case 35666:return ud;case 35674:return hd;case 35675:return dd;case 35676:return fd;case 5124:case 35670:return pd;case 35667:case 35671:return md;case 35668:case 35672:return gd;case 35669:case 35673:return _d;case 5125:return xd;case 36294:return vd;case 36295:return Md;case 36296:return yd;case 35678:case 36198:case 36298:case 36306:case 35682:return Sd;case 35679:case 36299:case 36307:return bd;case 35680:case 36300:case 36308:case 36293:return wd;case 36289:case 36303:case 36311:case 36292:return Ed}}class Ad{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.setValue=ad(e.type)}}class Cd{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.size=e.size,this.setValue=Td(e.type)}}class Ld{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(t,e[a.id],n)}}}const Lr=/(\w+)(\])?(\[|\.)?/g;function sa(s,t){s.seq.push(t),s.map[t.id]=t}function Pd(s,t,e){const n=s.name,i=n.length;for(Lr.lastIndex=0;;){const r=Lr.exec(n),o=Lr.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===i){sa(e,l===void 0?new Ad(a,s,t):new Cd(a,s,t));break}else{let h=e.map[a];h===void 0&&(h=new Ld(a),sa(e,h)),e=h}}}class Hi{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,35718);for(let i=0;i<n;++i){const r=t.getActiveUniform(e,i),o=t.getUniformLocation(e,r.name);Pd(r,o,this)}}setValue(t,e,n,i){const r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,o=e.length;r!==o;++r){const a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,r=t.length;i!==r;++i){const o=t[i];o.id in e&&n.push(o)}return n}}function aa(s,t,e){const n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}let Dd=0;function Rd(s,t){const e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function Id(s){switch(s){case xn:return["Linear","( value )"];case Vt:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",s),["Linear","( value )"]}}function oa(s,t,e){const n=s.getShaderParameter(t,35713),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+i+`

`+Rd(s.getShaderSource(t),o)}else return i}function Nd(s,t){const e=Id(t);return"vec4 "+s+"( vec4 value ) { return LinearTo"+e[0]+e[1]+"; }"}function Fd(s,t){let e;switch(t){case Bo:e="Linear";break;case Go:e="Reinhard";break;case Vo:e="OptimizedCineon";break;case ko:e="ACESFilmic";break;case Ho:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function Od(s){return[s.extensionDerivatives||!!s.envMapCubeUVHeight||s.bumpMap||s.tangentSpaceNormalMap||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ui).join(`
`)}function zd(s){const t=[];for(const e in s){const n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Ud(s,t){const e={},n=s.getProgramParameter(t,35721);for(let i=0;i<n;i++){const r=s.getActiveAttrib(t,i),o=r.name;let a=1;r.type===35674&&(a=2),r.type===35675&&(a=3),r.type===35676&&(a=4),e[o]={type:r.type,location:s.getAttribLocation(t,o),locationSize:a}}return e}function ui(s){return s!==""}function la(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function ca(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Bd=/^[ \t]*#include +<([\w\d./]+)>/gm;function qr(s){return s.replace(Bd,Gd)}function Gd(s,t){const e=wt[t];if(e===void 0)throw new Error("Can not resolve #include <"+t+">");return qr(e)}const Vd=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ua(s){return s.replace(Vd,kd)}function kd(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function ha(s){let t="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Hd(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Ca?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===_o?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===li&&(t="SHADOWMAP_TYPE_VSM"),t}function Wd(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Yn:case jn:t="ENVMAP_TYPE_CUBE";break;case qi:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Xd(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case jn:t="ENVMAP_MODE_REFRACTION";break}return t}function qd(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Da:t="ENVMAP_BLENDING_MULTIPLY";break;case zo:t="ENVMAP_BLENDING_MIX";break;case Uo:t="ENVMAP_BLENDING_ADD";break}return t}function Yd(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function jd(s,t,e,n){const i=s.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const c=Hd(e),l=Wd(e),u=Xd(e),h=qd(e),f=Yd(e),m=e.isWebGL2?"":Od(e),g=zd(r),p=i.createProgram();let d,_,E=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(d=[g].filter(ui).join(`
`),d.length>0&&(d+=`
`),_=[m,g].filter(ui).join(`
`),_.length>0&&(_+=`
`)):(d=[ha(e),"#define SHADER_NAME "+e.shaderName,g,e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.supportsVertexTextures?"#define VERTEX_TEXTURES":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMap&&e.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",e.normalMap&&e.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.displacementMap&&e.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",e.specularColorMap?"#define USE_SPECULARCOLORMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEENCOLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",e.vertexTangents?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUvs?"#define USE_UV":"",e.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ui).join(`
`),_=[m,ha(e),"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMap&&e.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",e.normalMap&&e.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",e.specularColorMap?"#define USE_SPECULARCOLORMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEENCOLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.vertexTangents?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUvs?"#define USE_UV":"",e.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==We?"#define TONE_MAPPING":"",e.toneMapping!==We?wt.tonemapping_pars_fragment:"",e.toneMapping!==We?Fd("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",wt.encodings_pars_fragment,Nd("linearToOutputTexel",e.outputEncoding),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ui).join(`
`)),o=qr(o),o=la(o,e),o=ca(o,e),a=qr(a),a=la(a,e),a=ca(a,e),o=ua(o),a=ua(a),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,d=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,_=["#define varying in",e.glslVersion===Fs?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Fs?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const S=E+d+o,b=E+_+a,M=aa(i,35633,S),L=aa(i,35632,b);if(i.attachShader(p,M),i.attachShader(p,L),e.index0AttributeName!==void 0?i.bindAttribLocation(p,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(p,0,"position"),i.linkProgram(p),s.debug.checkShaderErrors){const C=i.getProgramInfoLog(p).trim(),z=i.getShaderInfoLog(M).trim(),Y=i.getShaderInfoLog(L).trim();let st=!0,B=!0;if(i.getProgramParameter(p,35714)===!1){st=!1;const I=oa(i,M,"vertex"),q=oa(i,L,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(p,35715)+`

Program Info Log: `+C+`
`+I+`
`+q)}else C!==""?console.warn("THREE.WebGLProgram: Program Info Log:",C):(z===""||Y==="")&&(B=!1);B&&(this.diagnostics={runnable:st,programLog:C,vertexShader:{log:z,prefix:d},fragmentShader:{log:Y,prefix:_}})}i.deleteShader(M),i.deleteShader(L);let O;this.getUniforms=function(){return O===void 0&&(O=new Hi(i,p)),O};let x;return this.getAttributes=function(){return x===void 0&&(x=Ud(i,p)),x},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(p),this.program=void 0},this.name=e.shaderName,this.id=Dd++,this.cacheKey=t,this.usedTimes=1,this.program=p,this.vertexShader=M,this.fragmentShader=L,this}let Zd=0;class Jd{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new $d(t),e.set(t,n)),n}}class $d{constructor(t){this.id=Zd++,this.code=t,this.usedTimes=0}}function Kd(s,t,e,n,i,r,o){const a=new Va,c=new Jd,l=[],u=i.isWebGL2,h=i.logarithmicDepthBuffer,f=i.vertexTextures;let m=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(x,C,z,Y,st){const B=Y.fog,I=st.geometry,q=x.isMeshStandardMaterial?Y.environment:null,j=(x.isMeshStandardMaterial?e:t).get(x.envMap||q),J=!!j&&j.mapping===qi?j.image.height:null,W=g[x.type];x.precision!==null&&(m=i.getMaxPrecision(x.precision),m!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",m,"instead."));const N=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,U=N!==void 0?N.length:0;let tt=0;I.morphAttributes.position!==void 0&&(tt=1),I.morphAttributes.normal!==void 0&&(tt=2),I.morphAttributes.color!==void 0&&(tt=3);let K,$,ut,vt;if(W){const Nt=Ne[W];K=Nt.vertexShader,$=Nt.fragmentShader}else K=x.vertexShader,$=x.fragmentShader,c.update(x),ut=c.getVertexShaderID(x),vt=c.getFragmentShaderID(x);const X=s.getRenderTarget(),Pt=x.alphaTest>0,xt=x.clearcoat>0,Mt=x.iridescence>0;return{isWebGL2:u,shaderID:W,shaderName:x.type,vertexShader:K,fragmentShader:$,defines:x.defines,customVertexShaderID:ut,customFragmentShaderID:vt,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:m,instancing:st.isInstancedMesh===!0,instancingColor:st.isInstancedMesh===!0&&st.instanceColor!==null,supportsVertexTextures:f,outputEncoding:X===null?s.outputEncoding:X.isXRRenderTarget===!0?X.texture.encoding:xn,map:!!x.map,matcap:!!x.matcap,envMap:!!j,envMapMode:j&&j.mapping,envMapCubeUVHeight:J,lightMap:!!x.lightMap,aoMap:!!x.aoMap,emissiveMap:!!x.emissiveMap,bumpMap:!!x.bumpMap,normalMap:!!x.normalMap,objectSpaceNormalMap:x.normalMapType===ll,tangentSpaceNormalMap:x.normalMapType===Na,decodeVideoTexture:!!x.map&&x.map.isVideoTexture===!0&&x.map.encoding===Vt,clearcoat:xt,clearcoatMap:xt&&!!x.clearcoatMap,clearcoatRoughnessMap:xt&&!!x.clearcoatRoughnessMap,clearcoatNormalMap:xt&&!!x.clearcoatNormalMap,iridescence:Mt,iridescenceMap:Mt&&!!x.iridescenceMap,iridescenceThicknessMap:Mt&&!!x.iridescenceThicknessMap,displacementMap:!!x.displacementMap,roughnessMap:!!x.roughnessMap,metalnessMap:!!x.metalnessMap,specularMap:!!x.specularMap,specularIntensityMap:!!x.specularIntensityMap,specularColorMap:!!x.specularColorMap,opaque:x.transparent===!1&&x.blending===Wn,alphaMap:!!x.alphaMap,alphaTest:Pt,gradientMap:!!x.gradientMap,sheen:x.sheen>0,sheenColorMap:!!x.sheenColorMap,sheenRoughnessMap:!!x.sheenRoughnessMap,transmission:x.transmission>0,transmissionMap:!!x.transmissionMap,thicknessMap:!!x.thicknessMap,combine:x.combine,vertexTangents:!!x.normalMap&&!!I.attributes.tangent,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,vertexUvs:!!x.map||!!x.bumpMap||!!x.normalMap||!!x.specularMap||!!x.alphaMap||!!x.emissiveMap||!!x.roughnessMap||!!x.metalnessMap||!!x.clearcoatMap||!!x.clearcoatRoughnessMap||!!x.clearcoatNormalMap||!!x.iridescenceMap||!!x.iridescenceThicknessMap||!!x.displacementMap||!!x.transmissionMap||!!x.thicknessMap||!!x.specularIntensityMap||!!x.specularColorMap||!!x.sheenColorMap||!!x.sheenRoughnessMap,uvsVertexOnly:!(!!x.map||!!x.bumpMap||!!x.normalMap||!!x.specularMap||!!x.alphaMap||!!x.emissiveMap||!!x.roughnessMap||!!x.metalnessMap||!!x.clearcoatNormalMap||!!x.iridescenceMap||!!x.iridescenceThicknessMap||x.transmission>0||!!x.transmissionMap||!!x.thicknessMap||!!x.specularIntensityMap||!!x.specularColorMap||x.sheen>0||!!x.sheenColorMap||!!x.sheenRoughnessMap)&&!!x.displacementMap,fog:!!B,useFog:x.fog===!0,fogExp2:B&&B.isFogExp2,flatShading:!!x.flatShading,sizeAttenuation:x.sizeAttenuation,logarithmicDepthBuffer:h,skinning:st.isSkinnedMesh===!0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:U,morphTextureStride:tt,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:x.dithering,shadowMapEnabled:s.shadowMap.enabled&&z.length>0,shadowMapType:s.shadowMap.type,toneMapping:x.toneMapped?s.toneMapping:We,physicallyCorrectLights:s.physicallyCorrectLights,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Qe,flipSided:x.side===be,useDepthPacking:!!x.depthPacking,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionDerivatives:x.extensions&&x.extensions.derivatives,extensionFragDepth:x.extensions&&x.extensions.fragDepth,extensionDrawBuffers:x.extensions&&x.extensions.drawBuffers,extensionShaderTextureLOD:x.extensions&&x.extensions.shaderTextureLOD,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:x.customProgramCacheKey()}}function d(x){const C=[];if(x.shaderID?C.push(x.shaderID):(C.push(x.customVertexShaderID),C.push(x.customFragmentShaderID)),x.defines!==void 0)for(const z in x.defines)C.push(z),C.push(x.defines[z]);return x.isRawShaderMaterial===!1&&(_(C,x),E(C,x),C.push(s.outputEncoding)),C.push(x.customProgramCacheKey),C.join()}function _(x,C){x.push(C.precision),x.push(C.outputEncoding),x.push(C.envMapMode),x.push(C.envMapCubeUVHeight),x.push(C.combine),x.push(C.vertexUvs),x.push(C.fogExp2),x.push(C.sizeAttenuation),x.push(C.morphTargetsCount),x.push(C.morphAttributeCount),x.push(C.numDirLights),x.push(C.numPointLights),x.push(C.numSpotLights),x.push(C.numSpotLightMaps),x.push(C.numHemiLights),x.push(C.numRectAreaLights),x.push(C.numDirLightShadows),x.push(C.numPointLightShadows),x.push(C.numSpotLightShadows),x.push(C.numSpotLightShadowsWithMaps),x.push(C.shadowMapType),x.push(C.toneMapping),x.push(C.numClippingPlanes),x.push(C.numClipIntersection),x.push(C.depthPacking)}function E(x,C){a.disableAll(),C.isWebGL2&&a.enable(0),C.supportsVertexTextures&&a.enable(1),C.instancing&&a.enable(2),C.instancingColor&&a.enable(3),C.map&&a.enable(4),C.matcap&&a.enable(5),C.envMap&&a.enable(6),C.lightMap&&a.enable(7),C.aoMap&&a.enable(8),C.emissiveMap&&a.enable(9),C.bumpMap&&a.enable(10),C.normalMap&&a.enable(11),C.objectSpaceNormalMap&&a.enable(12),C.tangentSpaceNormalMap&&a.enable(13),C.clearcoat&&a.enable(14),C.clearcoatMap&&a.enable(15),C.clearcoatRoughnessMap&&a.enable(16),C.clearcoatNormalMap&&a.enable(17),C.iridescence&&a.enable(18),C.iridescenceMap&&a.enable(19),C.iridescenceThicknessMap&&a.enable(20),C.displacementMap&&a.enable(21),C.specularMap&&a.enable(22),C.roughnessMap&&a.enable(23),C.metalnessMap&&a.enable(24),C.gradientMap&&a.enable(25),C.alphaMap&&a.enable(26),C.alphaTest&&a.enable(27),C.vertexColors&&a.enable(28),C.vertexAlphas&&a.enable(29),C.vertexUvs&&a.enable(30),C.vertexTangents&&a.enable(31),C.uvsVertexOnly&&a.enable(32),x.push(a.mask),a.disableAll(),C.fog&&a.enable(0),C.useFog&&a.enable(1),C.flatShading&&a.enable(2),C.logarithmicDepthBuffer&&a.enable(3),C.skinning&&a.enable(4),C.morphTargets&&a.enable(5),C.morphNormals&&a.enable(6),C.morphColors&&a.enable(7),C.premultipliedAlpha&&a.enable(8),C.shadowMapEnabled&&a.enable(9),C.physicallyCorrectLights&&a.enable(10),C.doubleSided&&a.enable(11),C.flipSided&&a.enable(12),C.useDepthPacking&&a.enable(13),C.dithering&&a.enable(14),C.specularIntensityMap&&a.enable(15),C.specularColorMap&&a.enable(16),C.transmission&&a.enable(17),C.transmissionMap&&a.enable(18),C.thicknessMap&&a.enable(19),C.sheen&&a.enable(20),C.sheenColorMap&&a.enable(21),C.sheenRoughnessMap&&a.enable(22),C.decodeVideoTexture&&a.enable(23),C.opaque&&a.enable(24),x.push(a.mask)}function S(x){const C=g[x.type];let z;if(C){const Y=Ne[C];z=zl.clone(Y.uniforms)}else z=x.uniforms;return z}function b(x,C){let z;for(let Y=0,st=l.length;Y<st;Y++){const B=l[Y];if(B.cacheKey===C){z=B,++z.usedTimes;break}}return z===void 0&&(z=new jd(s,C,x,r),l.push(z)),z}function M(x){if(--x.usedTimes===0){const C=l.indexOf(x);l[C]=l[l.length-1],l.pop(),x.destroy()}}function L(x){c.remove(x)}function O(){c.dispose()}return{getParameters:p,getProgramCacheKey:d,getUniforms:S,acquireProgram:b,releaseProgram:M,releaseShaderCache:L,programs:l,dispose:O}}function Qd(){let s=new WeakMap;function t(r){let o=s.get(r);return o===void 0&&(o={},s.set(r,o)),o}function e(r){s.delete(r)}function n(r,o,a){s.get(r)[o]=a}function i(){s=new WeakMap}return{get:t,remove:e,update:n,dispose:i}}function tf(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function da(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function fa(){const s=[];let t=0;const e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function o(h,f,m,g,p,d){let _=s[t];return _===void 0?(_={id:h.id,object:h,geometry:f,material:m,groupOrder:g,renderOrder:h.renderOrder,z:p,group:d},s[t]=_):(_.id=h.id,_.object=h,_.geometry=f,_.material=m,_.groupOrder=g,_.renderOrder=h.renderOrder,_.z=p,_.group=d),t++,_}function a(h,f,m,g,p,d){const _=o(h,f,m,g,p,d);m.transmission>0?n.push(_):m.transparent===!0?i.push(_):e.push(_)}function c(h,f,m,g,p,d){const _=o(h,f,m,g,p,d);m.transmission>0?n.unshift(_):m.transparent===!0?i.unshift(_):e.unshift(_)}function l(h,f){e.length>1&&e.sort(h||tf),n.length>1&&n.sort(f||da),i.length>1&&i.sort(f||da)}function u(){for(let h=t,f=s.length;h<f;h++){const m=s[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:a,unshift:c,finish:u,sort:l}}function ef(){let s=new WeakMap;function t(n,i){const r=s.get(n);let o;return r===void 0?(o=new fa,s.set(n,[o])):i>=r.length?(o=new fa,r.push(o)):o=r[i],o}function e(){s=new WeakMap}return{get:t,dispose:e}}function nf(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new A,color:new Ot};break;case"SpotLight":e={position:new A,direction:new A,color:new Ot,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new A,color:new Ot,distance:0,decay:0};break;case"HemisphereLight":e={direction:new A,skyColor:new Ot,groundColor:new Ot};break;case"RectAreaLight":e={color:new Ot,position:new A,halfWidth:new A,halfHeight:new A};break}return s[t.id]=e,e}}}function rf(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let sf=0;function af(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function of(s,t){const e=new nf,n=rf(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)i.probe.push(new A);const r=new A,o=new kt,a=new kt;function c(u,h){let f=0,m=0,g=0;for(let Y=0;Y<9;Y++)i.probe[Y].set(0,0,0);let p=0,d=0,_=0,E=0,S=0,b=0,M=0,L=0,O=0,x=0;u.sort(af);const C=h!==!0?Math.PI:1;for(let Y=0,st=u.length;Y<st;Y++){const B=u[Y],I=B.color,q=B.intensity,j=B.distance,J=B.shadow&&B.shadow.map?B.shadow.map.texture:null;if(B.isAmbientLight)f+=I.r*q*C,m+=I.g*q*C,g+=I.b*q*C;else if(B.isLightProbe)for(let W=0;W<9;W++)i.probe[W].addScaledVector(B.sh.coefficients[W],q);else if(B.isDirectionalLight){const W=e.get(B);if(W.color.copy(B.color).multiplyScalar(B.intensity*C),B.castShadow){const N=B.shadow,U=n.get(B);U.shadowBias=N.bias,U.shadowNormalBias=N.normalBias,U.shadowRadius=N.radius,U.shadowMapSize=N.mapSize,i.directionalShadow[p]=U,i.directionalShadowMap[p]=J,i.directionalShadowMatrix[p]=B.shadow.matrix,b++}i.directional[p]=W,p++}else if(B.isSpotLight){const W=e.get(B);W.position.setFromMatrixPosition(B.matrixWorld),W.color.copy(I).multiplyScalar(q*C),W.distance=j,W.coneCos=Math.cos(B.angle),W.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),W.decay=B.decay,i.spot[_]=W;const N=B.shadow;if(B.map&&(i.spotLightMap[O]=B.map,O++,N.updateMatrices(B),B.castShadow&&x++),i.spotLightMatrix[_]=N.matrix,B.castShadow){const U=n.get(B);U.shadowBias=N.bias,U.shadowNormalBias=N.normalBias,U.shadowRadius=N.radius,U.shadowMapSize=N.mapSize,i.spotShadow[_]=U,i.spotShadowMap[_]=J,L++}_++}else if(B.isRectAreaLight){const W=e.get(B);W.color.copy(I).multiplyScalar(q),W.halfWidth.set(B.width*.5,0,0),W.halfHeight.set(0,B.height*.5,0),i.rectArea[E]=W,E++}else if(B.isPointLight){const W=e.get(B);if(W.color.copy(B.color).multiplyScalar(B.intensity*C),W.distance=B.distance,W.decay=B.decay,B.castShadow){const N=B.shadow,U=n.get(B);U.shadowBias=N.bias,U.shadowNormalBias=N.normalBias,U.shadowRadius=N.radius,U.shadowMapSize=N.mapSize,U.shadowCameraNear=N.camera.near,U.shadowCameraFar=N.camera.far,i.pointShadow[d]=U,i.pointShadowMap[d]=J,i.pointShadowMatrix[d]=B.shadow.matrix,M++}i.point[d]=W,d++}else if(B.isHemisphereLight){const W=e.get(B);W.skyColor.copy(B.color).multiplyScalar(q*C),W.groundColor.copy(B.groundColor).multiplyScalar(q*C),i.hemi[S]=W,S++}}E>0&&(t.isWebGL2||s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=nt.LTC_FLOAT_1,i.rectAreaLTC2=nt.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=nt.LTC_HALF_1,i.rectAreaLTC2=nt.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=f,i.ambient[1]=m,i.ambient[2]=g;const z=i.hash;(z.directionalLength!==p||z.pointLength!==d||z.spotLength!==_||z.rectAreaLength!==E||z.hemiLength!==S||z.numDirectionalShadows!==b||z.numPointShadows!==M||z.numSpotShadows!==L||z.numSpotMaps!==O)&&(i.directional.length=p,i.spot.length=_,i.rectArea.length=E,i.point.length=d,i.hemi.length=S,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=L,i.spotShadowMap.length=L,i.directionalShadowMatrix.length=b,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=L+O-x,i.spotLightMap.length=O,i.numSpotLightShadowsWithMaps=x,z.directionalLength=p,z.pointLength=d,z.spotLength=_,z.rectAreaLength=E,z.hemiLength=S,z.numDirectionalShadows=b,z.numPointShadows=M,z.numSpotShadows=L,z.numSpotMaps=O,i.version=sf++)}function l(u,h){let f=0,m=0,g=0,p=0,d=0;const _=h.matrixWorldInverse;for(let E=0,S=u.length;E<S;E++){const b=u[E];if(b.isDirectionalLight){const M=i.directional[f];M.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(_),f++}else if(b.isSpotLight){const M=i.spot[g];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(_),M.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(_),g++}else if(b.isRectAreaLight){const M=i.rectArea[p];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(_),a.identity(),o.copy(b.matrixWorld),o.premultiply(_),a.extractRotation(o),M.halfWidth.set(b.width*.5,0,0),M.halfHeight.set(0,b.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),p++}else if(b.isPointLight){const M=i.point[m];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(_),m++}else if(b.isHemisphereLight){const M=i.hemi[d];M.direction.setFromMatrixPosition(b.matrixWorld),M.direction.transformDirection(_),d++}}}return{setup:c,setupView:l,state:i}}function pa(s,t){const e=new of(s,t),n=[],i=[];function r(){n.length=0,i.length=0}function o(h){n.push(h)}function a(h){i.push(h)}function c(h){e.setup(n,h)}function l(h){e.setupView(n,h)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:e},setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function lf(s,t){let e=new WeakMap;function n(r,o=0){const a=e.get(r);let c;return a===void 0?(c=new pa(s,t),e.set(r,[c])):o>=a.length?(c=new pa(s,t),a.push(c)):c=a[o],c}function i(){e=new WeakMap}return{get:n,dispose:i}}class cf extends Kn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=al,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class uf extends Kn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new A,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.referencePosition.copy(t.referencePosition),this.nearDistance=t.nearDistance,this.farDistance=t.farDistance,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const hf=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,df=`uniform sampler2D shadow_pass;
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
}`;function ff(s,t,e){let n=new Zr;const i=new ht,r=new ht,o=new Bt,a=new cf({depthPacking:ol}),c=new uf,l={},u=e.maxTextureSize,h={0:be,1:qn,2:Qe},f=new yn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ht},radius:{value:4}},vertexShader:hf,fragmentShader:df}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const g=new Ee;g.setAttribute("position",new Re(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const p=new me(g,f),d=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ca,this.render=function(b,M,L){if(d.enabled===!1||d.autoUpdate===!1&&d.needsUpdate===!1||b.length===0)return;const O=s.getRenderTarget(),x=s.getActiveCubeFace(),C=s.getActiveMipmapLevel(),z=s.state;z.setBlending(tn),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);for(let Y=0,st=b.length;Y<st;Y++){const B=b[Y],I=B.shadow;if(I===void 0){console.warn("THREE.WebGLShadowMap:",B,"has no shadow.");continue}if(I.autoUpdate===!1&&I.needsUpdate===!1)continue;i.copy(I.mapSize);const q=I.getFrameExtents();if(i.multiply(q),r.copy(I.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(r.x=Math.floor(u/q.x),i.x=r.x*q.x,I.mapSize.x=r.x),i.y>u&&(r.y=Math.floor(u/q.y),i.y=r.y*q.y,I.mapSize.y=r.y)),I.map===null){const J=this.type!==li?{minFilter:le,magFilter:le}:{};I.map=new vn(i.x,i.y,J),I.map.texture.name=B.name+".shadowMap",I.camera.updateProjectionMatrix()}s.setRenderTarget(I.map),s.clear();const j=I.getViewportCount();for(let J=0;J<j;J++){const W=I.getViewport(J);o.set(r.x*W.x,r.y*W.y,r.x*W.z,r.y*W.w),z.viewport(o),I.updateMatrices(B,J),n=I.getFrustum(),S(M,L,I.camera,B,this.type)}I.isPointLightShadow!==!0&&this.type===li&&_(I,L),I.needsUpdate=!1}d.needsUpdate=!1,s.setRenderTarget(O,x,C)};function _(b,M){const L=t.update(p);f.defines.VSM_SAMPLES!==b.blurSamples&&(f.defines.VSM_SAMPLES=b.blurSamples,m.defines.VSM_SAMPLES=b.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new vn(i.x,i.y)),f.uniforms.shadow_pass.value=b.map.texture,f.uniforms.resolution.value=b.mapSize,f.uniforms.radius.value=b.radius,s.setRenderTarget(b.mapPass),s.clear(),s.renderBufferDirect(M,null,L,f,p,null),m.uniforms.shadow_pass.value=b.mapPass.texture,m.uniforms.resolution.value=b.mapSize,m.uniforms.radius.value=b.radius,s.setRenderTarget(b.map),s.clear(),s.renderBufferDirect(M,null,L,m,p,null)}function E(b,M,L,O,x,C){let z=null;const Y=L.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(Y!==void 0?z=Y:z=L.isPointLight===!0?c:a,s.localClippingEnabled&&M.clipShadows===!0&&Array.isArray(M.clippingPlanes)&&M.clippingPlanes.length!==0||M.displacementMap&&M.displacementScale!==0||M.alphaMap&&M.alphaTest>0){const st=z.uuid,B=M.uuid;let I=l[st];I===void 0&&(I={},l[st]=I);let q=I[B];q===void 0&&(q=z.clone(),I[B]=q),z=q}return z.visible=M.visible,z.wireframe=M.wireframe,C===li?z.side=M.shadowSide!==null?M.shadowSide:M.side:z.side=M.shadowSide!==null?M.shadowSide:h[M.side],z.alphaMap=M.alphaMap,z.alphaTest=M.alphaTest,z.clipShadows=M.clipShadows,z.clippingPlanes=M.clippingPlanes,z.clipIntersection=M.clipIntersection,z.displacementMap=M.displacementMap,z.displacementScale=M.displacementScale,z.displacementBias=M.displacementBias,z.wireframeLinewidth=M.wireframeLinewidth,z.linewidth=M.linewidth,L.isPointLight===!0&&z.isMeshDistanceMaterial===!0&&(z.referencePosition.setFromMatrixPosition(L.matrixWorld),z.nearDistance=O,z.farDistance=x),z}function S(b,M,L,O,x){if(b.visible===!1)return;if(b.layers.test(M.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&x===li)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,b.matrixWorld);const Y=t.update(b),st=b.material;if(Array.isArray(st)){const B=Y.groups;for(let I=0,q=B.length;I<q;I++){const j=B[I],J=st[j.materialIndex];if(J&&J.visible){const W=E(b,J,O,L.near,L.far,x);s.renderBufferDirect(L,null,Y,W,b,j)}}}else if(st.visible){const B=E(b,st,O,L.near,L.far,x);s.renderBufferDirect(L,null,Y,B,b,null)}}const z=b.children;for(let Y=0,st=z.length;Y<st;Y++)S(z[Y],M,L,O,x)}}function pf(s,t,e){const n=e.isWebGL2;function i(){let P=!1;const k=new Bt;let Z=null;const ot=new Bt(0,0,0,0);return{setMask:function(pt){Z!==pt&&!P&&(s.colorMask(pt,pt,pt,pt),Z=pt)},setLocked:function(pt){P=pt},setClear:function(pt,Dt,Qt,ne,en){en===!0&&(pt*=ne,Dt*=ne,Qt*=ne),k.set(pt,Dt,Qt,ne),ot.equals(k)===!1&&(s.clearColor(pt,Dt,Qt,ne),ot.copy(k))},reset:function(){P=!1,Z=null,ot.set(-1,0,0,0)}}}function r(){let P=!1,k=null,Z=null,ot=null;return{setTest:function(pt){pt?Pt(2929):xt(2929)},setMask:function(pt){k!==pt&&!P&&(s.depthMask(pt),k=pt)},setFunc:function(pt){if(Z!==pt){switch(pt){case Po:s.depthFunc(512);break;case Do:s.depthFunc(519);break;case Ro:s.depthFunc(513);break;case Br:s.depthFunc(515);break;case Io:s.depthFunc(514);break;case No:s.depthFunc(518);break;case Fo:s.depthFunc(516);break;case Oo:s.depthFunc(517);break;default:s.depthFunc(515)}Z=pt}},setLocked:function(pt){P=pt},setClear:function(pt){ot!==pt&&(s.clearDepth(pt),ot=pt)},reset:function(){P=!1,k=null,Z=null,ot=null}}}function o(){let P=!1,k=null,Z=null,ot=null,pt=null,Dt=null,Qt=null,ne=null,en=null;return{setTest:function(Ut){P||(Ut?Pt(2960):xt(2960))},setMask:function(Ut){k!==Ut&&!P&&(s.stencilMask(Ut),k=Ut)},setFunc:function(Ut,Oe,xe){(Z!==Ut||ot!==Oe||pt!==xe)&&(s.stencilFunc(Ut,Oe,xe),Z=Ut,ot=Oe,pt=xe)},setOp:function(Ut,Oe,xe){(Dt!==Ut||Qt!==Oe||ne!==xe)&&(s.stencilOp(Ut,Oe,xe),Dt=Ut,Qt=Oe,ne=xe)},setLocked:function(Ut){P=Ut},setClear:function(Ut){en!==Ut&&(s.clearStencil(Ut),en=Ut)},reset:function(){P=!1,k=null,Z=null,ot=null,pt=null,Dt=null,Qt=null,ne=null,en=null}}}const a=new i,c=new r,l=new o,u=new WeakMap,h=new WeakMap;let f={},m={},g=new WeakMap,p=[],d=null,_=!1,E=null,S=null,b=null,M=null,L=null,O=null,x=null,C=!1,z=null,Y=null,st=null,B=null,I=null;const q=s.getParameter(35661);let j=!1,J=0;const W=s.getParameter(7938);W.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(W)[1]),j=J>=1):W.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),j=J>=2);let N=null,U={};const tt=s.getParameter(3088),K=s.getParameter(2978),$=new Bt().fromArray(tt),ut=new Bt().fromArray(K);function vt(P,k,Z){const ot=new Uint8Array(4),pt=s.createTexture();s.bindTexture(P,pt),s.texParameteri(P,10241,9728),s.texParameteri(P,10240,9728);for(let Dt=0;Dt<Z;Dt++)s.texImage2D(k+Dt,0,6408,1,1,0,6408,5121,ot);return pt}const X={};X[3553]=vt(3553,3553,1),X[34067]=vt(34067,34069,6),a.setClear(0,0,0,1),c.setClear(1),l.setClear(0),Pt(2929),c.setFunc(Br),Yt(!1),ce(ss),Pt(2884),Ht(tn);function Pt(P){f[P]!==!0&&(s.enable(P),f[P]=!0)}function xt(P){f[P]!==!1&&(s.disable(P),f[P]=!1)}function Mt(P,k){return m[P]!==k?(s.bindFramebuffer(P,k),m[P]=k,n&&(P===36009&&(m[36160]=k),P===36160&&(m[36009]=k)),!0):!1}function ct(P,k){let Z=p,ot=!1;if(P)if(Z=g.get(k),Z===void 0&&(Z=[],g.set(k,Z)),P.isWebGLMultipleRenderTargets){const pt=P.texture;if(Z.length!==pt.length||Z[0]!==36064){for(let Dt=0,Qt=pt.length;Dt<Qt;Dt++)Z[Dt]=36064+Dt;Z.length=pt.length,ot=!0}}else Z[0]!==36064&&(Z[0]=36064,ot=!0);else Z[0]!==1029&&(Z[0]=1029,ot=!0);ot&&(e.isWebGL2?s.drawBuffers(Z):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(Z))}function Nt(P){return d!==P?(s.useProgram(P),d=P,!0):!1}const St={[kn]:32774,[vo]:32778,[Mo]:32779};if(n)St[cs]=32775,St[us]=32776;else{const P=t.get("EXT_blend_minmax");P!==null&&(St[cs]=P.MIN_EXT,St[us]=P.MAX_EXT)}const gt={[yo]:0,[So]:1,[bo]:768,[La]:770,[Lo]:776,[Ao]:774,[Eo]:772,[wo]:769,[Pa]:771,[Co]:775,[To]:773};function Ht(P,k,Z,ot,pt,Dt,Qt,ne){if(P===tn){_===!0&&(xt(3042),_=!1);return}if(_===!1&&(Pt(3042),_=!0),P!==xo){if(P!==E||ne!==C){if((S!==kn||L!==kn)&&(s.blendEquation(32774),S=kn,L=kn),ne)switch(P){case Wn:s.blendFuncSeparate(1,771,1,771);break;case as:s.blendFunc(1,1);break;case os:s.blendFuncSeparate(0,769,0,1);break;case ls:s.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case Wn:s.blendFuncSeparate(770,771,1,771);break;case as:s.blendFunc(770,1);break;case os:s.blendFuncSeparate(0,769,0,1);break;case ls:s.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}b=null,M=null,O=null,x=null,E=P,C=ne}return}pt=pt||k,Dt=Dt||Z,Qt=Qt||ot,(k!==S||pt!==L)&&(s.blendEquationSeparate(St[k],St[pt]),S=k,L=pt),(Z!==b||ot!==M||Dt!==O||Qt!==x)&&(s.blendFuncSeparate(gt[Z],gt[ot],gt[Dt],gt[Qt]),b=Z,M=ot,O=Dt,x=Qt),E=P,C=null}function Kt(P,k){P.side===Qe?xt(2884):Pt(2884);let Z=P.side===be;k&&(Z=!Z),Yt(Z),P.blending===Wn&&P.transparent===!1?Ht(tn):Ht(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.premultipliedAlpha),c.setFunc(P.depthFunc),c.setTest(P.depthTest),c.setMask(P.depthWrite),a.setMask(P.colorWrite);const ot=P.stencilWrite;l.setTest(ot),ot&&(l.setMask(P.stencilWriteMask),l.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),l.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),Ft(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?Pt(32926):xt(32926)}function Yt(P){z!==P&&(P?s.frontFace(2304):s.frontFace(2305),z=P)}function ce(P){P!==mo?(Pt(2884),P!==Y&&(P===ss?s.cullFace(1029):P===go?s.cullFace(1028):s.cullFace(1032))):xt(2884),Y=P}function jt(P){P!==st&&(j&&s.lineWidth(P),st=P)}function Ft(P,k,Z){P?(Pt(32823),(B!==k||I!==Z)&&(s.polygonOffset(k,Z),B=k,I=Z)):xt(32823)}function ge(P){P?Pt(3089):xt(3089)}function _e(P){P===void 0&&(P=33984+q-1),N!==P&&(s.activeTexture(P),N=P)}function w(P,k,Z){Z===void 0&&(N===null?Z=33984+q-1:Z=N);let ot=U[Z];ot===void 0&&(ot={type:void 0,texture:void 0},U[Z]=ot),(ot.type!==P||ot.texture!==k)&&(N!==Z&&(s.activeTexture(Z),N=Z),s.bindTexture(P,k||X[P]),ot.type=P,ot.texture=k)}function v(){const P=U[N];P!==void 0&&P.type!==void 0&&(s.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function G(){try{s.compressedTexImage2D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Q(){try{s.compressedTexImage3D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function et(){try{s.texSubImage2D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function it(){try{s.texSubImage3D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function _t(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function T(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function D(){try{s.texStorage2D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function at(){try{s.texStorage3D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function lt(){try{s.texImage2D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function rt(){try{s.texImage3D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ft(P){$.equals(P)===!1&&(s.scissor(P.x,P.y,P.z,P.w),$.copy(P))}function dt(P){ut.equals(P)===!1&&(s.viewport(P.x,P.y,P.z,P.w),ut.copy(P))}function At(P,k){let Z=h.get(k);Z===void 0&&(Z=new WeakMap,h.set(k,Z));let ot=Z.get(P);ot===void 0&&(ot=s.getUniformBlockIndex(k,P.name),Z.set(P,ot))}function Ct(P,k){const ot=h.get(k).get(P);u.get(P)!==ot&&(s.uniformBlockBinding(k,ot,P.__bindingPointIndex),u.set(P,ot))}function zt(){s.disable(3042),s.disable(2884),s.disable(2929),s.disable(32823),s.disable(3089),s.disable(2960),s.disable(32926),s.blendEquation(32774),s.blendFunc(1,0),s.blendFuncSeparate(1,0,1,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(513),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(519,0,4294967295),s.stencilOp(7680,7680,7680),s.clearStencil(0),s.cullFace(1029),s.frontFace(2305),s.polygonOffset(0,0),s.activeTexture(33984),s.bindFramebuffer(36160,null),n===!0&&(s.bindFramebuffer(36009,null),s.bindFramebuffer(36008,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),f={},N=null,U={},m={},g=new WeakMap,p=[],d=null,_=!1,E=null,S=null,b=null,M=null,L=null,O=null,x=null,C=!1,z=null,Y=null,st=null,B=null,I=null,$.set(0,0,s.canvas.width,s.canvas.height),ut.set(0,0,s.canvas.width,s.canvas.height),a.reset(),c.reset(),l.reset()}return{buffers:{color:a,depth:c,stencil:l},enable:Pt,disable:xt,bindFramebuffer:Mt,drawBuffers:ct,useProgram:Nt,setBlending:Ht,setMaterial:Kt,setFlipSided:Yt,setCullFace:ce,setLineWidth:jt,setPolygonOffset:Ft,setScissorTest:ge,activeTexture:_e,bindTexture:w,unbindTexture:v,compressedTexImage2D:G,compressedTexImage3D:Q,texImage2D:lt,texImage3D:rt,updateUBOMapping:At,uniformBlockBinding:Ct,texStorage2D:D,texStorage3D:at,texSubImage2D:et,texSubImage3D:it,compressedTexSubImage2D:_t,compressedTexSubImage3D:T,scissor:ft,viewport:dt,reset:zt}}function mf(s,t,e,n,i,r,o){const a=i.isWebGL2,c=i.maxTextures,l=i.maxCubemapSize,u=i.maxTextureSize,h=i.maxSamples,f=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=/OculusBrowser/g.test(typeof navigator>"u"?"":navigator.userAgent),g=new WeakMap;let p;const d=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(w,v){return _?new OffscreenCanvas(w,v):gi("canvas")}function S(w,v,G,Q){let et=1;if((w.width>Q||w.height>Q)&&(et=Q/Math.max(w.width,w.height)),et<1||v===!0)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap){const it=v?Xi:Math.floor,_t=it(et*w.width),T=it(et*w.height);p===void 0&&(p=E(_t,T));const D=G?E(_t,T):p;return D.width=_t,D.height=T,D.getContext("2d").drawImage(w,0,0,_t,T),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+w.width+"x"+w.height+") to ("+_t+"x"+T+")."),D}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+w.width+"x"+w.height+")."),w;return w}function b(w){return Xr(w.width)&&Xr(w.height)}function M(w){return a?!1:w.wrapS!==Pe||w.wrapT!==Pe||w.minFilter!==le&&w.minFilter!==ye}function L(w,v){return w.generateMipmaps&&v&&w.minFilter!==le&&w.minFilter!==ye}function O(w){s.generateMipmap(w)}function x(w,v,G,Q,et=!1){if(a===!1)return v;if(w!==null){if(s[w]!==void 0)return s[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let it=v;return v===6403&&(G===5126&&(it=33326),G===5131&&(it=33325),G===5121&&(it=33321)),v===33319&&(G===5126&&(it=33328),G===5131&&(it=33327),G===5121&&(it=33323)),v===6408&&(G===5126&&(it=34836),G===5131&&(it=34842),G===5121&&(it=Q===Vt&&et===!1?35907:32856),G===32819&&(it=32854),G===32820&&(it=32855)),(it===33325||it===33326||it===33327||it===33328||it===34842||it===34836)&&t.get("EXT_color_buffer_float"),it}function C(w,v,G){return L(w,G)===!0||w.isFramebufferTexture&&w.minFilter!==le&&w.minFilter!==ye?Math.log2(Math.max(v.width,v.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?v.mipmaps.length:1}function z(w){return w===le||w===hs||w===ds?9728:9729}function Y(w){const v=w.target;v.removeEventListener("dispose",Y),B(v),v.isVideoTexture&&g.delete(v)}function st(w){const v=w.target;v.removeEventListener("dispose",st),q(v)}function B(w){const v=n.get(w);if(v.__webglInit===void 0)return;const G=w.source,Q=d.get(G);if(Q){const et=Q[v.__cacheKey];et.usedTimes--,et.usedTimes===0&&I(w),Object.keys(Q).length===0&&d.delete(G)}n.remove(w)}function I(w){const v=n.get(w);s.deleteTexture(v.__webglTexture);const G=w.source,Q=d.get(G);delete Q[v.__cacheKey],o.memory.textures--}function q(w){const v=w.texture,G=n.get(w),Q=n.get(v);if(Q.__webglTexture!==void 0&&(s.deleteTexture(Q.__webglTexture),o.memory.textures--),w.depthTexture&&w.depthTexture.dispose(),w.isWebGLCubeRenderTarget)for(let et=0;et<6;et++)s.deleteFramebuffer(G.__webglFramebuffer[et]),G.__webglDepthbuffer&&s.deleteRenderbuffer(G.__webglDepthbuffer[et]);else{if(s.deleteFramebuffer(G.__webglFramebuffer),G.__webglDepthbuffer&&s.deleteRenderbuffer(G.__webglDepthbuffer),G.__webglMultisampledFramebuffer&&s.deleteFramebuffer(G.__webglMultisampledFramebuffer),G.__webglColorRenderbuffer)for(let et=0;et<G.__webglColorRenderbuffer.length;et++)G.__webglColorRenderbuffer[et]&&s.deleteRenderbuffer(G.__webglColorRenderbuffer[et]);G.__webglDepthRenderbuffer&&s.deleteRenderbuffer(G.__webglDepthRenderbuffer)}if(w.isWebGLMultipleRenderTargets)for(let et=0,it=v.length;et<it;et++){const _t=n.get(v[et]);_t.__webglTexture&&(s.deleteTexture(_t.__webglTexture),o.memory.textures--),n.remove(v[et])}n.remove(v),n.remove(w)}let j=0;function J(){j=0}function W(){const w=j;return w>=c&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+c),j+=1,w}function N(w){const v=[];return v.push(w.wrapS),v.push(w.wrapT),v.push(w.wrapR||0),v.push(w.magFilter),v.push(w.minFilter),v.push(w.anisotropy),v.push(w.internalFormat),v.push(w.format),v.push(w.type),v.push(w.generateMipmaps),v.push(w.premultiplyAlpha),v.push(w.flipY),v.push(w.unpackAlignment),v.push(w.encoding),v.join()}function U(w,v){const G=n.get(w);if(w.isVideoTexture&&ge(w),w.isRenderTargetTexture===!1&&w.version>0&&G.__version!==w.version){const Q=w.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{xt(G,w,v);return}}e.bindTexture(3553,G.__webglTexture,33984+v)}function tt(w,v){const G=n.get(w);if(w.version>0&&G.__version!==w.version){xt(G,w,v);return}e.bindTexture(35866,G.__webglTexture,33984+v)}function K(w,v){const G=n.get(w);if(w.version>0&&G.__version!==w.version){xt(G,w,v);return}e.bindTexture(32879,G.__webglTexture,33984+v)}function $(w,v){const G=n.get(w);if(w.version>0&&G.__version!==w.version){Mt(G,w,v);return}e.bindTexture(34067,G.__webglTexture,33984+v)}const ut={[kr]:10497,[Pe]:33071,[Hr]:33648},vt={[le]:9728,[hs]:9984,[ds]:9986,[ye]:9729,[Wo]:9985,[Yi]:9987};function X(w,v,G){if(G?(s.texParameteri(w,10242,ut[v.wrapS]),s.texParameteri(w,10243,ut[v.wrapT]),(w===32879||w===35866)&&s.texParameteri(w,32882,ut[v.wrapR]),s.texParameteri(w,10240,vt[v.magFilter]),s.texParameteri(w,10241,vt[v.minFilter])):(s.texParameteri(w,10242,33071),s.texParameteri(w,10243,33071),(w===32879||w===35866)&&s.texParameteri(w,32882,33071),(v.wrapS!==Pe||v.wrapT!==Pe)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(w,10240,z(v.magFilter)),s.texParameteri(w,10241,z(v.minFilter)),v.minFilter!==le&&v.minFilter!==ye&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),t.has("EXT_texture_filter_anisotropic")===!0){const Q=t.get("EXT_texture_filter_anisotropic");if(v.type===dn&&t.has("OES_texture_float_linear")===!1||a===!1&&v.type===mi&&t.has("OES_texture_half_float_linear")===!1)return;(v.anisotropy>1||n.get(v).__currentAnisotropy)&&(s.texParameterf(w,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,i.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy)}}function Pt(w,v){let G=!1;w.__webglInit===void 0&&(w.__webglInit=!0,v.addEventListener("dispose",Y));const Q=v.source;let et=d.get(Q);et===void 0&&(et={},d.set(Q,et));const it=N(v);if(it!==w.__cacheKey){et[it]===void 0&&(et[it]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,G=!0),et[it].usedTimes++;const _t=et[w.__cacheKey];_t!==void 0&&(et[w.__cacheKey].usedTimes--,_t.usedTimes===0&&I(v)),w.__cacheKey=it,w.__webglTexture=et[it].texture}return G}function xt(w,v,G){let Q=3553;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(Q=35866),v.isData3DTexture&&(Q=32879);const et=Pt(w,v),it=v.source;e.bindTexture(Q,w.__webglTexture,33984+G);const _t=n.get(it);if(it.version!==_t.__version||et===!0){e.activeTexture(33984+G),s.pixelStorei(37440,v.flipY),s.pixelStorei(37441,v.premultiplyAlpha),s.pixelStorei(3317,v.unpackAlignment),s.pixelStorei(37443,0);const T=M(v)&&b(v.image)===!1;let D=S(v.image,T,!1,u);D=_e(v,D);const at=b(D)||a,lt=r.convert(v.format,v.encoding);let rt=r.convert(v.type),ft=x(v.internalFormat,lt,rt,v.encoding,v.isVideoTexture);X(Q,v,at);let dt;const At=v.mipmaps,Ct=a&&v.isVideoTexture!==!0,zt=_t.__version===void 0||et===!0,P=C(v,D,at);if(v.isDepthTexture)ft=6402,a?v.type===dn?ft=36012:v.type===hn?ft=33190:v.type===Xn?ft=35056:ft=33189:v.type===dn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),v.format===pn&&ft===6402&&v.type!==Ia&&v.type!==hn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),v.type=hn,rt=r.convert(v.type)),v.format===Zn&&ft===6402&&(ft=34041,v.type!==Xn&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),v.type=Xn,rt=r.convert(v.type))),zt&&(Ct?e.texStorage2D(3553,1,ft,D.width,D.height):e.texImage2D(3553,0,ft,D.width,D.height,0,lt,rt,null));else if(v.isDataTexture)if(At.length>0&&at){Ct&&zt&&e.texStorage2D(3553,P,ft,At[0].width,At[0].height);for(let k=0,Z=At.length;k<Z;k++)dt=At[k],Ct?e.texSubImage2D(3553,k,0,0,dt.width,dt.height,lt,rt,dt.data):e.texImage2D(3553,k,ft,dt.width,dt.height,0,lt,rt,dt.data);v.generateMipmaps=!1}else Ct?(zt&&e.texStorage2D(3553,P,ft,D.width,D.height),e.texSubImage2D(3553,0,0,0,D.width,D.height,lt,rt,D.data)):e.texImage2D(3553,0,ft,D.width,D.height,0,lt,rt,D.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Ct&&zt&&e.texStorage3D(35866,P,ft,At[0].width,At[0].height,D.depth);for(let k=0,Z=At.length;k<Z;k++)dt=At[k],v.format!==De?lt!==null?Ct?e.compressedTexSubImage3D(35866,k,0,0,0,dt.width,dt.height,D.depth,lt,dt.data,0,0):e.compressedTexImage3D(35866,k,ft,dt.width,dt.height,D.depth,0,dt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ct?e.texSubImage3D(35866,k,0,0,0,dt.width,dt.height,D.depth,lt,rt,dt.data):e.texImage3D(35866,k,ft,dt.width,dt.height,D.depth,0,lt,rt,dt.data)}else{Ct&&zt&&e.texStorage2D(3553,P,ft,At[0].width,At[0].height);for(let k=0,Z=At.length;k<Z;k++)dt=At[k],v.format!==De?lt!==null?Ct?e.compressedTexSubImage2D(3553,k,0,0,dt.width,dt.height,lt,dt.data):e.compressedTexImage2D(3553,k,ft,dt.width,dt.height,0,dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ct?e.texSubImage2D(3553,k,0,0,dt.width,dt.height,lt,rt,dt.data):e.texImage2D(3553,k,ft,dt.width,dt.height,0,lt,rt,dt.data)}else if(v.isDataArrayTexture)Ct?(zt&&e.texStorage3D(35866,P,ft,D.width,D.height,D.depth),e.texSubImage3D(35866,0,0,0,0,D.width,D.height,D.depth,lt,rt,D.data)):e.texImage3D(35866,0,ft,D.width,D.height,D.depth,0,lt,rt,D.data);else if(v.isData3DTexture)Ct?(zt&&e.texStorage3D(32879,P,ft,D.width,D.height,D.depth),e.texSubImage3D(32879,0,0,0,0,D.width,D.height,D.depth,lt,rt,D.data)):e.texImage3D(32879,0,ft,D.width,D.height,D.depth,0,lt,rt,D.data);else if(v.isFramebufferTexture){if(zt)if(Ct)e.texStorage2D(3553,P,ft,D.width,D.height);else{let k=D.width,Z=D.height;for(let ot=0;ot<P;ot++)e.texImage2D(3553,ot,ft,k,Z,0,lt,rt,null),k>>=1,Z>>=1}}else if(At.length>0&&at){Ct&&zt&&e.texStorage2D(3553,P,ft,At[0].width,At[0].height);for(let k=0,Z=At.length;k<Z;k++)dt=At[k],Ct?e.texSubImage2D(3553,k,0,0,lt,rt,dt):e.texImage2D(3553,k,ft,lt,rt,dt);v.generateMipmaps=!1}else Ct?(zt&&e.texStorage2D(3553,P,ft,D.width,D.height),e.texSubImage2D(3553,0,0,0,lt,rt,D)):e.texImage2D(3553,0,ft,lt,rt,D);L(v,at)&&O(Q),_t.__version=it.version,v.onUpdate&&v.onUpdate(v)}w.__version=v.version}function Mt(w,v,G){if(v.image.length!==6)return;const Q=Pt(w,v),et=v.source;e.bindTexture(34067,w.__webglTexture,33984+G);const it=n.get(et);if(et.version!==it.__version||Q===!0){e.activeTexture(33984+G),s.pixelStorei(37440,v.flipY),s.pixelStorei(37441,v.premultiplyAlpha),s.pixelStorei(3317,v.unpackAlignment),s.pixelStorei(37443,0);const _t=v.isCompressedTexture||v.image[0].isCompressedTexture,T=v.image[0]&&v.image[0].isDataTexture,D=[];for(let k=0;k<6;k++)!_t&&!T?D[k]=S(v.image[k],!1,!0,l):D[k]=T?v.image[k].image:v.image[k],D[k]=_e(v,D[k]);const at=D[0],lt=b(at)||a,rt=r.convert(v.format,v.encoding),ft=r.convert(v.type),dt=x(v.internalFormat,rt,ft,v.encoding),At=a&&v.isVideoTexture!==!0,Ct=it.__version===void 0||Q===!0;let zt=C(v,at,lt);X(34067,v,lt);let P;if(_t){At&&Ct&&e.texStorage2D(34067,zt,dt,at.width,at.height);for(let k=0;k<6;k++){P=D[k].mipmaps;for(let Z=0;Z<P.length;Z++){const ot=P[Z];v.format!==De?rt!==null?At?e.compressedTexSubImage2D(34069+k,Z,0,0,ot.width,ot.height,rt,ot.data):e.compressedTexImage2D(34069+k,Z,dt,ot.width,ot.height,0,ot.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):At?e.texSubImage2D(34069+k,Z,0,0,ot.width,ot.height,rt,ft,ot.data):e.texImage2D(34069+k,Z,dt,ot.width,ot.height,0,rt,ft,ot.data)}}}else{P=v.mipmaps,At&&Ct&&(P.length>0&&zt++,e.texStorage2D(34067,zt,dt,D[0].width,D[0].height));for(let k=0;k<6;k++)if(T){At?e.texSubImage2D(34069+k,0,0,0,D[k].width,D[k].height,rt,ft,D[k].data):e.texImage2D(34069+k,0,dt,D[k].width,D[k].height,0,rt,ft,D[k].data);for(let Z=0;Z<P.length;Z++){const pt=P[Z].image[k].image;At?e.texSubImage2D(34069+k,Z+1,0,0,pt.width,pt.height,rt,ft,pt.data):e.texImage2D(34069+k,Z+1,dt,pt.width,pt.height,0,rt,ft,pt.data)}}else{At?e.texSubImage2D(34069+k,0,0,0,rt,ft,D[k]):e.texImage2D(34069+k,0,dt,rt,ft,D[k]);for(let Z=0;Z<P.length;Z++){const ot=P[Z];At?e.texSubImage2D(34069+k,Z+1,0,0,rt,ft,ot.image[k]):e.texImage2D(34069+k,Z+1,dt,rt,ft,ot.image[k])}}}L(v,lt)&&O(34067),it.__version=et.version,v.onUpdate&&v.onUpdate(v)}w.__version=v.version}function ct(w,v,G,Q,et){const it=r.convert(G.format,G.encoding),_t=r.convert(G.type),T=x(G.internalFormat,it,_t,G.encoding);n.get(v).__hasExternalTextures||(et===32879||et===35866?e.texImage3D(et,0,T,v.width,v.height,v.depth,0,it,_t,null):e.texImage2D(et,0,T,v.width,v.height,0,it,_t,null)),e.bindFramebuffer(36160,w),Ft(v)?f.framebufferTexture2DMultisampleEXT(36160,Q,et,n.get(G).__webglTexture,0,jt(v)):(et===3553||et>=34069&&et<=34074)&&s.framebufferTexture2D(36160,Q,et,n.get(G).__webglTexture,0),e.bindFramebuffer(36160,null)}function Nt(w,v,G){if(s.bindRenderbuffer(36161,w),v.depthBuffer&&!v.stencilBuffer){let Q=33189;if(G||Ft(v)){const et=v.depthTexture;et&&et.isDepthTexture&&(et.type===dn?Q=36012:et.type===hn&&(Q=33190));const it=jt(v);Ft(v)?f.renderbufferStorageMultisampleEXT(36161,it,Q,v.width,v.height):s.renderbufferStorageMultisample(36161,it,Q,v.width,v.height)}else s.renderbufferStorage(36161,Q,v.width,v.height);s.framebufferRenderbuffer(36160,36096,36161,w)}else if(v.depthBuffer&&v.stencilBuffer){const Q=jt(v);G&&Ft(v)===!1?s.renderbufferStorageMultisample(36161,Q,35056,v.width,v.height):Ft(v)?f.renderbufferStorageMultisampleEXT(36161,Q,35056,v.width,v.height):s.renderbufferStorage(36161,34041,v.width,v.height),s.framebufferRenderbuffer(36160,33306,36161,w)}else{const Q=v.isWebGLMultipleRenderTargets===!0?v.texture:[v.texture];for(let et=0;et<Q.length;et++){const it=Q[et],_t=r.convert(it.format,it.encoding),T=r.convert(it.type),D=x(it.internalFormat,_t,T,it.encoding),at=jt(v);G&&Ft(v)===!1?s.renderbufferStorageMultisample(36161,at,D,v.width,v.height):Ft(v)?f.renderbufferStorageMultisampleEXT(36161,at,D,v.width,v.height):s.renderbufferStorage(36161,D,v.width,v.height)}}s.bindRenderbuffer(36161,null)}function St(w,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(36160,w),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(v.depthTexture).__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),U(v.depthTexture,0);const Q=n.get(v.depthTexture).__webglTexture,et=jt(v);if(v.depthTexture.format===pn)Ft(v)?f.framebufferTexture2DMultisampleEXT(36160,36096,3553,Q,0,et):s.framebufferTexture2D(36160,36096,3553,Q,0);else if(v.depthTexture.format===Zn)Ft(v)?f.framebufferTexture2DMultisampleEXT(36160,33306,3553,Q,0,et):s.framebufferTexture2D(36160,33306,3553,Q,0);else throw new Error("Unknown depthTexture format")}function gt(w){const v=n.get(w),G=w.isWebGLCubeRenderTarget===!0;if(w.depthTexture&&!v.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");St(v.__webglFramebuffer,w)}else if(G){v.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)e.bindFramebuffer(36160,v.__webglFramebuffer[Q]),v.__webglDepthbuffer[Q]=s.createRenderbuffer(),Nt(v.__webglDepthbuffer[Q],w,!1)}else e.bindFramebuffer(36160,v.__webglFramebuffer),v.__webglDepthbuffer=s.createRenderbuffer(),Nt(v.__webglDepthbuffer,w,!1);e.bindFramebuffer(36160,null)}function Ht(w,v,G){const Q=n.get(w);v!==void 0&&ct(Q.__webglFramebuffer,w,w.texture,36064,3553),G!==void 0&&gt(w)}function Kt(w){const v=w.texture,G=n.get(w),Q=n.get(v);w.addEventListener("dispose",st),w.isWebGLMultipleRenderTargets!==!0&&(Q.__webglTexture===void 0&&(Q.__webglTexture=s.createTexture()),Q.__version=v.version,o.memory.textures++);const et=w.isWebGLCubeRenderTarget===!0,it=w.isWebGLMultipleRenderTargets===!0,_t=b(w)||a;if(et){G.__webglFramebuffer=[];for(let T=0;T<6;T++)G.__webglFramebuffer[T]=s.createFramebuffer()}else{if(G.__webglFramebuffer=s.createFramebuffer(),it)if(i.drawBuffers){const T=w.texture;for(let D=0,at=T.length;D<at;D++){const lt=n.get(T[D]);lt.__webglTexture===void 0&&(lt.__webglTexture=s.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&w.samples>0&&Ft(w)===!1){const T=it?v:[v];G.__webglMultisampledFramebuffer=s.createFramebuffer(),G.__webglColorRenderbuffer=[],e.bindFramebuffer(36160,G.__webglMultisampledFramebuffer);for(let D=0;D<T.length;D++){const at=T[D];G.__webglColorRenderbuffer[D]=s.createRenderbuffer(),s.bindRenderbuffer(36161,G.__webglColorRenderbuffer[D]);const lt=r.convert(at.format,at.encoding),rt=r.convert(at.type),ft=x(at.internalFormat,lt,rt,at.encoding,w.isXRRenderTarget===!0),dt=jt(w);s.renderbufferStorageMultisample(36161,dt,ft,w.width,w.height),s.framebufferRenderbuffer(36160,36064+D,36161,G.__webglColorRenderbuffer[D])}s.bindRenderbuffer(36161,null),w.depthBuffer&&(G.__webglDepthRenderbuffer=s.createRenderbuffer(),Nt(G.__webglDepthRenderbuffer,w,!0)),e.bindFramebuffer(36160,null)}}if(et){e.bindTexture(34067,Q.__webglTexture),X(34067,v,_t);for(let T=0;T<6;T++)ct(G.__webglFramebuffer[T],w,v,36064,34069+T);L(v,_t)&&O(34067),e.unbindTexture()}else if(it){const T=w.texture;for(let D=0,at=T.length;D<at;D++){const lt=T[D],rt=n.get(lt);e.bindTexture(3553,rt.__webglTexture),X(3553,lt,_t),ct(G.__webglFramebuffer,w,lt,36064+D,3553),L(lt,_t)&&O(3553)}e.unbindTexture()}else{let T=3553;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(a?T=w.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(T,Q.__webglTexture),X(T,v,_t),ct(G.__webglFramebuffer,w,v,36064,T),L(v,_t)&&O(T),e.unbindTexture()}w.depthBuffer&&gt(w)}function Yt(w){const v=b(w)||a,G=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let Q=0,et=G.length;Q<et;Q++){const it=G[Q];if(L(it,v)){const _t=w.isWebGLCubeRenderTarget?34067:3553,T=n.get(it).__webglTexture;e.bindTexture(_t,T),O(_t),e.unbindTexture()}}}function ce(w){if(a&&w.samples>0&&Ft(w)===!1){const v=w.isWebGLMultipleRenderTargets?w.texture:[w.texture],G=w.width,Q=w.height;let et=16384;const it=[],_t=w.stencilBuffer?33306:36096,T=n.get(w),D=w.isWebGLMultipleRenderTargets===!0;if(D)for(let at=0;at<v.length;at++)e.bindFramebuffer(36160,T.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(36160,36064+at,36161,null),e.bindFramebuffer(36160,T.__webglFramebuffer),s.framebufferTexture2D(36009,36064+at,3553,null,0);e.bindFramebuffer(36008,T.__webglMultisampledFramebuffer),e.bindFramebuffer(36009,T.__webglFramebuffer);for(let at=0;at<v.length;at++){it.push(36064+at),w.depthBuffer&&it.push(_t);const lt=T.__ignoreDepthValues!==void 0?T.__ignoreDepthValues:!1;if(lt===!1&&(w.depthBuffer&&(et|=256),w.stencilBuffer&&(et|=1024)),D&&s.framebufferRenderbuffer(36008,36064,36161,T.__webglColorRenderbuffer[at]),lt===!0&&(s.invalidateFramebuffer(36008,[_t]),s.invalidateFramebuffer(36009,[_t])),D){const rt=n.get(v[at]).__webglTexture;s.framebufferTexture2D(36009,36064,3553,rt,0)}s.blitFramebuffer(0,0,G,Q,0,0,G,Q,et,9728),m&&s.invalidateFramebuffer(36008,it)}if(e.bindFramebuffer(36008,null),e.bindFramebuffer(36009,null),D)for(let at=0;at<v.length;at++){e.bindFramebuffer(36160,T.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(36160,36064+at,36161,T.__webglColorRenderbuffer[at]);const lt=n.get(v[at]).__webglTexture;e.bindFramebuffer(36160,T.__webglFramebuffer),s.framebufferTexture2D(36009,36064+at,3553,lt,0)}e.bindFramebuffer(36009,T.__webglMultisampledFramebuffer)}}function jt(w){return Math.min(h,w.samples)}function Ft(w){const v=n.get(w);return a&&w.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function ge(w){const v=o.render.frame;g.get(w)!==v&&(g.set(w,v),w.update())}function _e(w,v){const G=w.encoding,Q=w.format,et=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||w.format===Wr||G!==xn&&(G===Vt?a===!1?t.has("EXT_sRGB")===!0&&Q===De?(w.format=Wr,w.minFilter=ye,w.generateMipmaps=!1):v=za.sRGBToLinear(v):(Q!==De||et!==_n)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",G)),v}this.allocateTextureUnit=W,this.resetTextureUnits=J,this.setTexture2D=U,this.setTexture2DArray=tt,this.setTexture3D=K,this.setTextureCube=$,this.rebindTextures=Ht,this.setupRenderTarget=Kt,this.updateRenderTargetMipmap=Yt,this.updateMultisampleRenderTarget=ce,this.setupDepthRenderbuffer=gt,this.setupFrameBufferTexture=ct,this.useMultisampledRTT=Ft}function gf(s,t,e){const n=e.isWebGL2;function i(r,o=null){let a;if(r===_n)return 5121;if(r===jo)return 32819;if(r===Zo)return 32820;if(r===Xo)return 5120;if(r===qo)return 5122;if(r===Ia)return 5123;if(r===Yo)return 5124;if(r===hn)return 5125;if(r===dn)return 5126;if(r===mi)return n?5131:(a=t.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===Jo)return 6406;if(r===De)return 6408;if(r===Ko)return 6409;if(r===Qo)return 6410;if(r===pn)return 6402;if(r===Zn)return 34041;if(r===tl)return 6403;if(r===$o)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(r===Wr)return a=t.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===el)return 36244;if(r===nl)return 33319;if(r===il)return 33320;if(r===rl)return 36249;if(r===er||r===nr||r===ir||r===rr)if(o===Vt)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===er)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===nr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===ir)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===rr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===er)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===nr)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===ir)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===rr)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===fs||r===ps||r===ms||r===gs)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===fs)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===ps)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===ms)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===gs)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===sl)return a=t.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===_s||r===xs)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(r===_s)return o===Vt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===xs)return o===Vt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===vs||r===Ms||r===ys||r===Ss||r===bs||r===ws||r===Es||r===Ts||r===As||r===Cs||r===Ls||r===Ps||r===Ds||r===Rs)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(r===vs)return o===Vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Ms)return o===Vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===ys)return o===Vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Ss)return o===Vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===bs)return o===Vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===ws)return o===Vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Es)return o===Vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Ts)return o===Vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===As)return o===Vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Cs)return o===Vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Ls)return o===Vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Ps)return o===Vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Ds)return o===Vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Rs)return o===Vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Is)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(r===Is)return o===Vt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return r===Xn?n?34042:(a=t.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):s[r]!==void 0?s[r]:null}return{convert:i}}class _f extends fe{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Bi extends ae{constructor(){super(),this.isGroup=!0,this.type="Group"}}const xf={type:"move"};class Pr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Bi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Bi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new A,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new A),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Bi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new A,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new A),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const p of t.hand.values()){const d=e.getJointPose(p,n);if(l.joints[p.jointName]===void 0){const E=new Bi;E.matrixAutoUpdate=!1,E.visible=!1,l.joints[p.jointName]=E,l.add(E)}const _=l.joints[p.jointName];d!==null&&(_.matrix.fromArray(d.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.jointRadius=d.radius),_.visible=d!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],f=u.position.distanceTo(h.position),m=.02,g=.005;l.inputState.pinching&&f>m+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&f<=m-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(xf)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}}class vf extends we{constructor(t,e,n,i,r,o,a,c,l,u){if(u=u!==void 0?u:pn,u!==pn&&u!==Zn)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===pn&&(n=hn),n===void 0&&u===Zn&&(n=Xn),super(null,i,r,o,a,c,u,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:le,this.minFilter=c!==void 0?c:le,this.flipY=!1,this.generateMipmaps=!1}}class Mf extends Sn{constructor(t,e){super();const n=this;let i=null,r=1,o=null,a="local-floor",c=null,l=null,u=null,h=null,f=null,m=null;const g=e.getContextAttributes();let p=null,d=null;const _=[],E=[],S=new fe;S.layers.enable(1),S.viewport=new Bt;const b=new fe;b.layers.enable(2),b.viewport=new Bt;const M=[S,b],L=new _f;L.layers.enable(1),L.layers.enable(2);let O=null,x=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(N){let U=_[N];return U===void 0&&(U=new Pr,_[N]=U),U.getTargetRaySpace()},this.getControllerGrip=function(N){let U=_[N];return U===void 0&&(U=new Pr,_[N]=U),U.getGripSpace()},this.getHand=function(N){let U=_[N];return U===void 0&&(U=new Pr,_[N]=U),U.getHandSpace()};function C(N){const U=E.indexOf(N.inputSource);if(U===-1)return;const tt=_[U];tt!==void 0&&tt.dispatchEvent({type:N.type,data:N.inputSource})}function z(){i.removeEventListener("select",C),i.removeEventListener("selectstart",C),i.removeEventListener("selectend",C),i.removeEventListener("squeeze",C),i.removeEventListener("squeezestart",C),i.removeEventListener("squeezeend",C),i.removeEventListener("end",z),i.removeEventListener("inputsourceschange",Y);for(let N=0;N<_.length;N++){const U=E[N];U!==null&&(E[N]=null,_[N].disconnect(U))}O=null,x=null,t.setRenderTarget(p),f=null,h=null,u=null,i=null,d=null,W.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(N){r=N,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(N){a=N,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(N){c=N},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return u},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(N){if(i=N,i!==null){if(p=t.getRenderTarget(),i.addEventListener("select",C),i.addEventListener("selectstart",C),i.addEventListener("selectend",C),i.addEventListener("squeeze",C),i.addEventListener("squeezestart",C),i.addEventListener("squeezeend",C),i.addEventListener("end",z),i.addEventListener("inputsourceschange",Y),g.xrCompatible!==!0&&await e.makeXRCompatible(),i.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const U={antialias:i.renderState.layers===void 0?g.antialias:!0,alpha:g.alpha,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,e,U),i.updateRenderState({baseLayer:f}),d=new vn(f.framebufferWidth,f.framebufferHeight,{format:De,type:_n,encoding:t.outputEncoding,stencilBuffer:g.stencil})}else{let U=null,tt=null,K=null;g.depth&&(K=g.stencil?35056:33190,U=g.stencil?Zn:pn,tt=g.stencil?Xn:hn);const $={colorFormat:32856,depthFormat:K,scaleFactor:r};u=new XRWebGLBinding(i,e),h=u.createProjectionLayer($),i.updateRenderState({layers:[h]}),d=new vn(h.textureWidth,h.textureHeight,{format:De,type:_n,depthTexture:new vf(h.textureWidth,h.textureHeight,tt,void 0,void 0,void 0,void 0,void 0,void 0,U),stencilBuffer:g.stencil,encoding:t.outputEncoding,samples:g.antialias?4:0});const ut=t.properties.get(d);ut.__ignoreDepthValues=h.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(1),c=null,o=await i.requestReferenceSpace(a),W.setContext(i),W.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function Y(N){for(let U=0;U<N.removed.length;U++){const tt=N.removed[U],K=E.indexOf(tt);K>=0&&(E[K]=null,_[K].dispatchEvent({type:"disconnected",data:tt}))}for(let U=0;U<N.added.length;U++){const tt=N.added[U];let K=E.indexOf(tt);if(K===-1){for(let ut=0;ut<_.length;ut++)if(ut>=E.length){E.push(tt),K=ut;break}else if(E[ut]===null){E[ut]=tt,K=ut;break}if(K===-1)break}const $=_[K];$&&$.dispatchEvent({type:"connected",data:tt})}}const st=new A,B=new A;function I(N,U,tt){st.setFromMatrixPosition(U.matrixWorld),B.setFromMatrixPosition(tt.matrixWorld);const K=st.distanceTo(B),$=U.projectionMatrix.elements,ut=tt.projectionMatrix.elements,vt=$[14]/($[10]-1),X=$[14]/($[10]+1),Pt=($[9]+1)/$[5],xt=($[9]-1)/$[5],Mt=($[8]-1)/$[0],ct=(ut[8]+1)/ut[0],Nt=vt*Mt,St=vt*ct,gt=K/(-Mt+ct),Ht=gt*-Mt;U.matrixWorld.decompose(N.position,N.quaternion,N.scale),N.translateX(Ht),N.translateZ(gt),N.matrixWorld.compose(N.position,N.quaternion,N.scale),N.matrixWorldInverse.copy(N.matrixWorld).invert();const Kt=vt+gt,Yt=X+gt,ce=Nt-Ht,jt=St+(K-Ht),Ft=Pt*X/Yt*Kt,ge=xt*X/Yt*Kt;N.projectionMatrix.makePerspective(ce,jt,Ft,ge,Kt,Yt)}function q(N,U){U===null?N.matrixWorld.copy(N.matrix):N.matrixWorld.multiplyMatrices(U.matrixWorld,N.matrix),N.matrixWorldInverse.copy(N.matrixWorld).invert()}this.updateCamera=function(N){if(i===null)return;L.near=b.near=S.near=N.near,L.far=b.far=S.far=N.far,(O!==L.near||x!==L.far)&&(i.updateRenderState({depthNear:L.near,depthFar:L.far}),O=L.near,x=L.far);const U=N.parent,tt=L.cameras;q(L,U);for(let $=0;$<tt.length;$++)q(tt[$],U);L.matrixWorld.decompose(L.position,L.quaternion,L.scale),N.matrix.copy(L.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale);const K=N.children;for(let $=0,ut=K.length;$<ut;$++)K[$].updateMatrixWorld(!0);tt.length===2?I(L,S,b):L.projectionMatrix.copy(S.projectionMatrix)},this.getCamera=function(){return L},this.getFoveation=function(){if(h!==null)return h.fixedFoveation;if(f!==null)return f.fixedFoveation},this.setFoveation=function(N){h!==null&&(h.fixedFoveation=N),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=N)};let j=null;function J(N,U){if(l=U.getViewerPose(c||o),m=U,l!==null){const tt=l.views;f!==null&&(t.setRenderTargetFramebuffer(d,f.framebuffer),t.setRenderTarget(d));let K=!1;tt.length!==L.cameras.length&&(L.cameras.length=0,K=!0);for(let $=0;$<tt.length;$++){const ut=tt[$];let vt=null;if(f!==null)vt=f.getViewport(ut);else{const Pt=u.getViewSubImage(h,ut);vt=Pt.viewport,$===0&&(t.setRenderTargetTextures(d,Pt.colorTexture,h.ignoreDepthValues?void 0:Pt.depthStencilTexture),t.setRenderTarget(d))}let X=M[$];X===void 0&&(X=new fe,X.layers.enable($),X.viewport=new Bt,M[$]=X),X.matrix.fromArray(ut.transform.matrix),X.projectionMatrix.fromArray(ut.projectionMatrix),X.viewport.set(vt.x,vt.y,vt.width,vt.height),$===0&&L.matrix.copy(X.matrix),K===!0&&L.cameras.push(X)}}for(let tt=0;tt<_.length;tt++){const K=E[tt],$=_[tt];K!==null&&$!==void 0&&$.update(K,U,c||o)}j&&j(N,U),m=null}const W=new qa;W.setAnimationLoop(J),this.setAnimationLoop=function(N){j=N},this.dispose=function(){}}}function yf(s,t){function e(p,d){p.fogColor.value.copy(d.color),d.isFog?(p.fogNear.value=d.near,p.fogFar.value=d.far):d.isFogExp2&&(p.fogDensity.value=d.density)}function n(p,d,_,E,S){d.isMeshBasicMaterial||d.isMeshLambertMaterial?i(p,d):d.isMeshToonMaterial?(i(p,d),u(p,d)):d.isMeshPhongMaterial?(i(p,d),l(p,d)):d.isMeshStandardMaterial?(i(p,d),h(p,d),d.isMeshPhysicalMaterial&&f(p,d,S)):d.isMeshMatcapMaterial?(i(p,d),m(p,d)):d.isMeshDepthMaterial?i(p,d):d.isMeshDistanceMaterial?(i(p,d),g(p,d)):d.isMeshNormalMaterial?i(p,d):d.isLineBasicMaterial?(r(p,d),d.isLineDashedMaterial&&o(p,d)):d.isPointsMaterial?a(p,d,_,E):d.isSpriteMaterial?c(p,d):d.isShadowMaterial?(p.color.value.copy(d.color),p.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function i(p,d){p.opacity.value=d.opacity,d.color&&p.diffuse.value.copy(d.color),d.emissive&&p.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(p.map.value=d.map),d.alphaMap&&(p.alphaMap.value=d.alphaMap),d.bumpMap&&(p.bumpMap.value=d.bumpMap,p.bumpScale.value=d.bumpScale,d.side===be&&(p.bumpScale.value*=-1)),d.displacementMap&&(p.displacementMap.value=d.displacementMap,p.displacementScale.value=d.displacementScale,p.displacementBias.value=d.displacementBias),d.emissiveMap&&(p.emissiveMap.value=d.emissiveMap),d.normalMap&&(p.normalMap.value=d.normalMap,p.normalScale.value.copy(d.normalScale),d.side===be&&p.normalScale.value.negate()),d.specularMap&&(p.specularMap.value=d.specularMap),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);const _=t.get(d).envMap;if(_&&(p.envMap.value=_,p.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=d.reflectivity,p.ior.value=d.ior,p.refractionRatio.value=d.refractionRatio),d.lightMap){p.lightMap.value=d.lightMap;const b=s.physicallyCorrectLights!==!0?Math.PI:1;p.lightMapIntensity.value=d.lightMapIntensity*b}d.aoMap&&(p.aoMap.value=d.aoMap,p.aoMapIntensity.value=d.aoMapIntensity);let E;d.map?E=d.map:d.specularMap?E=d.specularMap:d.displacementMap?E=d.displacementMap:d.normalMap?E=d.normalMap:d.bumpMap?E=d.bumpMap:d.roughnessMap?E=d.roughnessMap:d.metalnessMap?E=d.metalnessMap:d.alphaMap?E=d.alphaMap:d.emissiveMap?E=d.emissiveMap:d.clearcoatMap?E=d.clearcoatMap:d.clearcoatNormalMap?E=d.clearcoatNormalMap:d.clearcoatRoughnessMap?E=d.clearcoatRoughnessMap:d.iridescenceMap?E=d.iridescenceMap:d.iridescenceThicknessMap?E=d.iridescenceThicknessMap:d.specularIntensityMap?E=d.specularIntensityMap:d.specularColorMap?E=d.specularColorMap:d.transmissionMap?E=d.transmissionMap:d.thicknessMap?E=d.thicknessMap:d.sheenColorMap?E=d.sheenColorMap:d.sheenRoughnessMap&&(E=d.sheenRoughnessMap),E!==void 0&&(E.isWebGLRenderTarget&&(E=E.texture),E.matrixAutoUpdate===!0&&E.updateMatrix(),p.uvTransform.value.copy(E.matrix));let S;d.aoMap?S=d.aoMap:d.lightMap&&(S=d.lightMap),S!==void 0&&(S.isWebGLRenderTarget&&(S=S.texture),S.matrixAutoUpdate===!0&&S.updateMatrix(),p.uv2Transform.value.copy(S.matrix))}function r(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity}function o(p,d){p.dashSize.value=d.dashSize,p.totalSize.value=d.dashSize+d.gapSize,p.scale.value=d.scale}function a(p,d,_,E){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.size.value=d.size*_,p.scale.value=E*.5,d.map&&(p.map.value=d.map),d.alphaMap&&(p.alphaMap.value=d.alphaMap),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);let S;d.map?S=d.map:d.alphaMap&&(S=d.alphaMap),S!==void 0&&(S.matrixAutoUpdate===!0&&S.updateMatrix(),p.uvTransform.value.copy(S.matrix))}function c(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.rotation.value=d.rotation,d.map&&(p.map.value=d.map),d.alphaMap&&(p.alphaMap.value=d.alphaMap),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);let _;d.map?_=d.map:d.alphaMap&&(_=d.alphaMap),_!==void 0&&(_.matrixAutoUpdate===!0&&_.updateMatrix(),p.uvTransform.value.copy(_.matrix))}function l(p,d){p.specular.value.copy(d.specular),p.shininess.value=Math.max(d.shininess,1e-4)}function u(p,d){d.gradientMap&&(p.gradientMap.value=d.gradientMap)}function h(p,d){p.roughness.value=d.roughness,p.metalness.value=d.metalness,d.roughnessMap&&(p.roughnessMap.value=d.roughnessMap),d.metalnessMap&&(p.metalnessMap.value=d.metalnessMap),t.get(d).envMap&&(p.envMapIntensity.value=d.envMapIntensity)}function f(p,d,_){p.ior.value=d.ior,d.sheen>0&&(p.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),p.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(p.sheenColorMap.value=d.sheenColorMap),d.sheenRoughnessMap&&(p.sheenRoughnessMap.value=d.sheenRoughnessMap)),d.clearcoat>0&&(p.clearcoat.value=d.clearcoat,p.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(p.clearcoatMap.value=d.clearcoatMap),d.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap),d.clearcoatNormalMap&&(p.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),p.clearcoatNormalMap.value=d.clearcoatNormalMap,d.side===be&&p.clearcoatNormalScale.value.negate())),d.iridescence>0&&(p.iridescence.value=d.iridescence,p.iridescenceIOR.value=d.iridescenceIOR,p.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(p.iridescenceMap.value=d.iridescenceMap),d.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=d.iridescenceThicknessMap)),d.transmission>0&&(p.transmission.value=d.transmission,p.transmissionSamplerMap.value=_.texture,p.transmissionSamplerSize.value.set(_.width,_.height),d.transmissionMap&&(p.transmissionMap.value=d.transmissionMap),p.thickness.value=d.thickness,d.thicknessMap&&(p.thicknessMap.value=d.thicknessMap),p.attenuationDistance.value=d.attenuationDistance,p.attenuationColor.value.copy(d.attenuationColor)),p.specularIntensity.value=d.specularIntensity,p.specularColor.value.copy(d.specularColor),d.specularIntensityMap&&(p.specularIntensityMap.value=d.specularIntensityMap),d.specularColorMap&&(p.specularColorMap.value=d.specularColorMap)}function m(p,d){d.matcap&&(p.matcap.value=d.matcap)}function g(p,d){p.referencePosition.value.copy(d.referencePosition),p.nearDistance.value=d.nearDistance,p.farDistance.value=d.farDistance}return{refreshFogUniforms:e,refreshMaterialUniforms:n}}function Sf(s,t,e,n){let i={},r={},o=[];const a=e.isWebGL2?s.getParameter(35375):0;function c(E,S){const b=S.program;n.uniformBlockBinding(E,b)}function l(E,S){let b=i[E.id];b===void 0&&(g(E),b=u(E),i[E.id]=b,E.addEventListener("dispose",d));const M=S.program;n.updateUBOMapping(E,M);const L=t.render.frame;r[E.id]!==L&&(f(E),r[E.id]=L)}function u(E){const S=h();E.__bindingPointIndex=S;const b=s.createBuffer(),M=E.__size,L=E.usage;return s.bindBuffer(35345,b),s.bufferData(35345,M,L),s.bindBuffer(35345,null),s.bindBufferBase(35345,S,b),b}function h(){for(let E=0;E<a;E++)if(o.indexOf(E)===-1)return o.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(E){const S=i[E.id],b=E.uniforms,M=E.__cache;s.bindBuffer(35345,S);for(let L=0,O=b.length;L<O;L++){const x=b[L];if(m(x,L,M)===!0){const C=x.value,z=x.__offset;typeof C=="number"?(x.__data[0]=C,s.bufferSubData(35345,z,x.__data)):(x.value.isMatrix3?(x.__data[0]=x.value.elements[0],x.__data[1]=x.value.elements[1],x.__data[2]=x.value.elements[2],x.__data[3]=x.value.elements[0],x.__data[4]=x.value.elements[3],x.__data[5]=x.value.elements[4],x.__data[6]=x.value.elements[5],x.__data[7]=x.value.elements[0],x.__data[8]=x.value.elements[6],x.__data[9]=x.value.elements[7],x.__data[10]=x.value.elements[8],x.__data[11]=x.value.elements[0]):C.toArray(x.__data),s.bufferSubData(35345,z,x.__data))}}s.bindBuffer(35345,null)}function m(E,S,b){const M=E.value;if(b[S]===void 0)return typeof M=="number"?b[S]=M:b[S]=M.clone(),!0;if(typeof M=="number"){if(b[S]!==M)return b[S]=M,!0}else{const L=b[S];if(L.equals(M)===!1)return L.copy(M),!0}return!1}function g(E){const S=E.uniforms;let b=0;const M=16;let L=0;for(let O=0,x=S.length;O<x;O++){const C=S[O],z=p(C);if(C.__data=new Float32Array(z.storage/Float32Array.BYTES_PER_ELEMENT),C.__offset=b,O>0){L=b%M;const Y=M-L;L!==0&&Y-z.boundary<0&&(b+=M-L,C.__offset=b)}b+=z.storage}return L=b%M,L>0&&(b+=M-L),E.__size=b,E.__cache={},this}function p(E){const S=E.value,b={boundary:0,storage:0};return typeof S=="number"?(b.boundary=4,b.storage=4):S.isVector2?(b.boundary=8,b.storage=8):S.isVector3||S.isColor?(b.boundary=16,b.storage=12):S.isVector4?(b.boundary=16,b.storage=16):S.isMatrix3?(b.boundary=48,b.storage=48):S.isMatrix4?(b.boundary=64,b.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),b}function d(E){const S=E.target;S.removeEventListener("dispose",d);const b=o.indexOf(S.__bindingPointIndex);o.splice(b,1),s.deleteBuffer(i[S.id]),delete i[S.id],delete r[S.id]}function _(){for(const E in i)s.deleteBuffer(i[E]);o=[],i={},r={}}return{bind:c,update:l,dispose:_}}function bf(){const s=gi("canvas");return s.style.display="block",s}function $a(s={}){this.isWebGLRenderer=!0;const t=s.canvas!==void 0?s.canvas:bf(),e=s.context!==void 0?s.context:null,n=s.depth!==void 0?s.depth:!0,i=s.stencil!==void 0?s.stencil:!0,r=s.antialias!==void 0?s.antialias:!1,o=s.premultipliedAlpha!==void 0?s.premultipliedAlpha:!0,a=s.preserveDrawingBuffer!==void 0?s.preserveDrawingBuffer:!1,c=s.powerPreference!==void 0?s.powerPreference:"default",l=s.failIfMajorPerformanceCaveat!==void 0?s.failIfMajorPerformanceCaveat:!1;let u;e!==null?u=e.getContextAttributes().alpha:u=s.alpha!==void 0?s.alpha:!1;let h=null,f=null;const m=[],g=[];this.domElement=t,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=xn,this.physicallyCorrectLights=!1,this.toneMapping=We,this.toneMappingExposure=1,Object.defineProperties(this,{gammaFactor:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."),2},set:function(){console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.")}}});const p=this;let d=!1,_=0,E=0,S=null,b=-1,M=null;const L=new Bt,O=new Bt;let x=null,C=t.width,z=t.height,Y=1,st=null,B=null;const I=new Bt(0,0,C,z),q=new Bt(0,0,C,z);let j=!1;const J=new Zr;let W=!1,N=!1,U=null;const tt=new kt,K=new ht,$=new A,ut={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function vt(){return S===null?Y:1}let X=e;function Pt(y,F){for(let V=0;V<y.length;V++){const R=y[V],H=t.getContext(R,F);if(H!==null)return H}return null}try{const y={alpha:!0,depth:n,stencil:i,antialias:r,premultipliedAlpha:o,preserveDrawingBuffer:a,powerPreference:c,failIfMajorPerformanceCaveat:l};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Yr}`),t.addEventListener("webglcontextlost",ft,!1),t.addEventListener("webglcontextrestored",dt,!1),t.addEventListener("webglcontextcreationerror",At,!1),X===null){const F=["webgl2","webgl","experimental-webgl"];if(p.isWebGL1Renderer===!0&&F.shift(),X=Pt(F,y),X===null)throw Pt(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}X.getShaderPrecisionFormat===void 0&&(X.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let xt,Mt,ct,Nt,St,gt,Ht,Kt,Yt,ce,jt,Ft,ge,_e,w,v,G,Q,et,it,_t,T,D,at;function lt(){xt=new Ih(X),Mt=new Th(X,xt,s),xt.init(Mt),T=new gf(X,xt,Mt),ct=new pf(X,xt,Mt),Nt=new Oh,St=new Qd,gt=new mf(X,xt,ct,St,Mt,T,Nt),Ht=new Ch(p),Kt=new Rh(p),Yt=new Wl(X,Mt),D=new wh(X,xt,Yt,Mt),ce=new Nh(X,Yt,Nt,D),jt=new Gh(X,ce,Yt,Nt),et=new Bh(X,Mt,gt),v=new Ah(St),Ft=new Kd(p,Ht,Kt,xt,Mt,D,v),ge=new yf(p,St),_e=new ef,w=new lf(xt,Mt),Q=new bh(p,Ht,Kt,ct,jt,u,o),G=new ff(p,jt,Mt),at=new Sf(X,Nt,Mt,ct),it=new Eh(X,xt,Nt,Mt),_t=new Fh(X,xt,Nt,Mt),Nt.programs=Ft.programs,p.capabilities=Mt,p.extensions=xt,p.properties=St,p.renderLists=_e,p.shadowMap=G,p.state=ct,p.info=Nt}lt();const rt=new Mf(p,X);this.xr=rt,this.getContext=function(){return X},this.getContextAttributes=function(){return X.getContextAttributes()},this.forceContextLoss=function(){const y=xt.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=xt.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(y){y!==void 0&&(Y=y,this.setSize(C,z,!1))},this.getSize=function(y){return y.set(C,z)},this.setSize=function(y,F,V){if(rt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}C=y,z=F,t.width=Math.floor(y*Y),t.height=Math.floor(F*Y),V!==!1&&(t.style.width=y+"px",t.style.height=F+"px"),this.setViewport(0,0,y,F)},this.getDrawingBufferSize=function(y){return y.set(C*Y,z*Y).floor()},this.setDrawingBufferSize=function(y,F,V){C=y,z=F,Y=V,t.width=Math.floor(y*V),t.height=Math.floor(F*V),this.setViewport(0,0,y,F)},this.getCurrentViewport=function(y){return y.copy(L)},this.getViewport=function(y){return y.copy(I)},this.setViewport=function(y,F,V,R){y.isVector4?I.set(y.x,y.y,y.z,y.w):I.set(y,F,V,R),ct.viewport(L.copy(I).multiplyScalar(Y).floor())},this.getScissor=function(y){return y.copy(q)},this.setScissor=function(y,F,V,R){y.isVector4?q.set(y.x,y.y,y.z,y.w):q.set(y,F,V,R),ct.scissor(O.copy(q).multiplyScalar(Y).floor())},this.getScissorTest=function(){return j},this.setScissorTest=function(y){ct.setScissorTest(j=y)},this.setOpaqueSort=function(y){st=y},this.setTransparentSort=function(y){B=y},this.getClearColor=function(y){return y.copy(Q.getClearColor())},this.setClearColor=function(){Q.setClearColor.apply(Q,arguments)},this.getClearAlpha=function(){return Q.getClearAlpha()},this.setClearAlpha=function(){Q.setClearAlpha.apply(Q,arguments)},this.clear=function(y=!0,F=!0,V=!0){let R=0;y&&(R|=16384),F&&(R|=256),V&&(R|=1024),X.clear(R)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ft,!1),t.removeEventListener("webglcontextrestored",dt,!1),t.removeEventListener("webglcontextcreationerror",At,!1),_e.dispose(),w.dispose(),St.dispose(),Ht.dispose(),Kt.dispose(),jt.dispose(),D.dispose(),at.dispose(),Ft.dispose(),rt.dispose(),rt.removeEventListener("sessionstart",ot),rt.removeEventListener("sessionend",pt),U&&(U.dispose(),U=null),Dt.stop()};function ft(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),d=!0}function dt(){console.log("THREE.WebGLRenderer: Context Restored."),d=!1;const y=Nt.autoReset,F=G.enabled,V=G.autoUpdate,R=G.needsUpdate,H=G.type;lt(),Nt.autoReset=y,G.enabled=F,G.autoUpdate=V,G.needsUpdate=R,G.type=H}function At(y){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function Ct(y){const F=y.target;F.removeEventListener("dispose",Ct),zt(F)}function zt(y){P(y),St.remove(y)}function P(y){const F=St.get(y).programs;F!==void 0&&(F.forEach(function(V){Ft.releaseProgram(V)}),y.isShaderMaterial&&Ft.releaseShaderCache(y))}this.renderBufferDirect=function(y,F,V,R,H,mt){F===null&&(F=ut);const yt=H.isMesh&&H.matrixWorld.determinant()<0,Et=uo(y,F,V,R,H);ct.setMaterial(R,yt);let bt=V.index;const Rt=V.attributes.position;if(bt===null){if(Rt===void 0||Rt.count===0)return}else if(bt.count===0)return;let Tt=1;R.wireframe===!0&&(bt=ce.getWireframeAttribute(V),Tt=2),D.setup(H,R,Et,V,bt);let Lt,Gt=it;bt!==null&&(Lt=Yt.get(bt),Gt=_t,Gt.setIndex(Lt));const nn=bt!==null?bt.count:Rt.count,bn=V.drawRange.start*Tt,wn=V.drawRange.count*Tt,Ie=mt!==null?mt.start*Tt:0,It=mt!==null?mt.count*Tt:1/0,En=Math.max(bn,Ie),Wt=Math.min(nn,bn+wn,Ie+It)-1,ve=Math.max(0,Wt-En+1);if(ve!==0){if(H.isMesh)R.wireframe===!0?(ct.setLineWidth(R.wireframeLinewidth*vt()),Gt.setMode(1)):Gt.setMode(4);else if(H.isLine){let Xe=R.linewidth;Xe===void 0&&(Xe=1),ct.setLineWidth(Xe*vt()),H.isLineSegments?Gt.setMode(1):H.isLineLoop?Gt.setMode(2):Gt.setMode(3)}else H.isPoints?Gt.setMode(0):H.isSprite&&Gt.setMode(4);if(H.isInstancedMesh)Gt.renderInstances(En,ve,H.count);else if(V.isInstancedBufferGeometry){const Xe=Math.min(V.instanceCount,V._maxInstanceCount);Gt.renderInstances(En,ve,Xe)}else Gt.render(En,ve)}},this.compile=function(y,F){function V(R,H,mt){R.transparent===!0&&R.side===Qe?(R.side=be,R.needsUpdate=!0,xe(R,H,mt),R.side=qn,R.needsUpdate=!0,xe(R,H,mt),R.side=Qe):xe(R,H,mt)}f=w.get(y),f.init(),g.push(f),y.traverseVisible(function(R){R.isLight&&R.layers.test(F.layers)&&(f.pushLight(R),R.castShadow&&f.pushShadow(R))}),f.setupLights(p.physicallyCorrectLights),y.traverse(function(R){const H=R.material;if(H)if(Array.isArray(H))for(let mt=0;mt<H.length;mt++){const yt=H[mt];V(yt,y,R)}else V(H,y,R)}),g.pop(),f=null};let k=null;function Z(y){k&&k(y)}function ot(){Dt.stop()}function pt(){Dt.start()}const Dt=new qa;Dt.setAnimationLoop(Z),typeof self<"u"&&Dt.setContext(self),this.setAnimationLoop=function(y){k=y,rt.setAnimationLoop(y),y===null?Dt.stop():Dt.start()},rt.addEventListener("sessionstart",ot),rt.addEventListener("sessionend",pt),this.render=function(y,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(d===!0)return;y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),rt.enabled===!0&&rt.isPresenting===!0&&(rt.cameraAutoUpdate===!0&&rt.updateCamera(F),F=rt.getCamera()),y.isScene===!0&&y.onBeforeRender(p,y,F,S),f=w.get(y,g.length),f.init(),g.push(f),tt.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),J.setFromProjectionMatrix(tt),N=this.localClippingEnabled,W=v.init(this.clippingPlanes,N,F),h=_e.get(y,m.length),h.init(),m.push(h),Qt(y,F,0,p.sortObjects),h.finish(),p.sortObjects===!0&&h.sort(st,B),W===!0&&v.beginShadows();const V=f.state.shadowsArray;if(G.render(V,y,F),W===!0&&v.endShadows(),this.info.autoReset===!0&&this.info.reset(),Q.render(h,y),f.setupLights(p.physicallyCorrectLights),F.isArrayCamera){const R=F.cameras;for(let H=0,mt=R.length;H<mt;H++){const yt=R[H];ne(h,y,yt,yt.viewport)}}else ne(h,y,F);S!==null&&(gt.updateMultisampleRenderTarget(S),gt.updateRenderTargetMipmap(S)),y.isScene===!0&&y.onAfterRender(p,y,F),D.resetDefaultState(),b=-1,M=null,g.pop(),g.length>0?f=g[g.length-1]:f=null,m.pop(),m.length>0?h=m[m.length-1]:h=null};function Qt(y,F,V,R){if(y.visible===!1)return;if(y.layers.test(F.layers)){if(y.isGroup)V=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(F);else if(y.isLight)f.pushLight(y),y.castShadow&&f.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||J.intersectsSprite(y)){R&&$.setFromMatrixPosition(y.matrixWorld).applyMatrix4(tt);const yt=jt.update(y),Et=y.material;Et.visible&&h.push(y,yt,Et,V,$.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(y.isSkinnedMesh&&y.skeleton.frame!==Nt.render.frame&&(y.skeleton.update(),y.skeleton.frame=Nt.render.frame),!y.frustumCulled||J.intersectsObject(y))){R&&$.setFromMatrixPosition(y.matrixWorld).applyMatrix4(tt);const yt=jt.update(y),Et=y.material;if(Array.isArray(Et)){const bt=yt.groups;for(let Rt=0,Tt=bt.length;Rt<Tt;Rt++){const Lt=bt[Rt],Gt=Et[Lt.materialIndex];Gt&&Gt.visible&&h.push(y,yt,Gt,V,$.z,Lt)}}else Et.visible&&h.push(y,yt,Et,V,$.z,null)}}const mt=y.children;for(let yt=0,Et=mt.length;yt<Et;yt++)Qt(mt[yt],F,V,R)}function ne(y,F,V,R){const H=y.opaque,mt=y.transmissive,yt=y.transparent;f.setupLightsView(V),mt.length>0&&en(H,F,V),R&&ct.viewport(L.copy(R)),H.length>0&&Ut(H,F,V),mt.length>0&&Ut(mt,F,V),yt.length>0&&Ut(yt,F,V),ct.buffers.depth.setTest(!0),ct.buffers.depth.setMask(!0),ct.buffers.color.setMask(!0),ct.setPolygonOffset(!1)}function en(y,F,V){const R=Mt.isWebGL2;U===null&&(U=new vn(1,1,{generateMipmaps:!0,type:xt.has("EXT_color_buffer_half_float")?mi:_n,minFilter:Yi,samples:R&&r===!0?4:0})),p.getDrawingBufferSize(K),R?U.setSize(K.x,K.y):U.setSize(Xi(K.x),Xi(K.y));const H=p.getRenderTarget();p.setRenderTarget(U),p.clear();const mt=p.toneMapping;p.toneMapping=We,Ut(y,F,V),p.toneMapping=mt,gt.updateMultisampleRenderTarget(U),gt.updateRenderTargetMipmap(U),p.setRenderTarget(H)}function Ut(y,F,V){const R=F.isScene===!0?F.overrideMaterial:null;for(let H=0,mt=y.length;H<mt;H++){const yt=y[H],Et=yt.object,bt=yt.geometry,Rt=R===null?yt.material:R,Tt=yt.group;Et.layers.test(V.layers)&&Oe(Et,F,V,bt,Rt,Tt)}}function Oe(y,F,V,R,H,mt){y.onBeforeRender(p,F,V,R,H,mt),y.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),H.onBeforeRender(p,F,V,R,y,mt),H.transparent===!0&&H.side===Qe?(H.side=be,H.needsUpdate=!0,p.renderBufferDirect(V,F,R,H,y,mt),H.side=qn,H.needsUpdate=!0,p.renderBufferDirect(V,F,R,H,y,mt),H.side=Qe):p.renderBufferDirect(V,F,R,H,y,mt),y.onAfterRender(p,F,V,R,H,mt)}function xe(y,F,V){F.isScene!==!0&&(F=ut);const R=St.get(y),H=f.state.lights,mt=f.state.shadowsArray,yt=H.state.version,Et=Ft.getParameters(y,H.state,mt,F,V),bt=Ft.getProgramCacheKey(Et);let Rt=R.programs;R.environment=y.isMeshStandardMaterial?F.environment:null,R.fog=F.fog,R.envMap=(y.isMeshStandardMaterial?Kt:Ht).get(y.envMap||R.environment),Rt===void 0&&(y.addEventListener("dispose",Ct),Rt=new Map,R.programs=Rt);let Tt=Rt.get(bt);if(Tt!==void 0){if(R.currentProgram===Tt&&R.lightsStateVersion===yt)return is(y,Et),Tt}else Et.uniforms=Ft.getUniforms(y),y.onBuild(V,Et,p),y.onBeforeCompile(Et,p),Tt=Ft.acquireProgram(Et,bt),Rt.set(bt,Tt),R.uniforms=Et.uniforms;const Lt=R.uniforms;(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Lt.clippingPlanes=v.uniform),is(y,Et),R.needsLights=fo(y),R.lightsStateVersion=yt,R.needsLights&&(Lt.ambientLightColor.value=H.state.ambient,Lt.lightProbe.value=H.state.probe,Lt.directionalLights.value=H.state.directional,Lt.directionalLightShadows.value=H.state.directionalShadow,Lt.spotLights.value=H.state.spot,Lt.spotLightShadows.value=H.state.spotShadow,Lt.rectAreaLights.value=H.state.rectArea,Lt.ltc_1.value=H.state.rectAreaLTC1,Lt.ltc_2.value=H.state.rectAreaLTC2,Lt.pointLights.value=H.state.point,Lt.pointLightShadows.value=H.state.pointShadow,Lt.hemisphereLights.value=H.state.hemi,Lt.directionalShadowMap.value=H.state.directionalShadowMap,Lt.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Lt.spotShadowMap.value=H.state.spotShadowMap,Lt.spotLightMatrix.value=H.state.spotLightMatrix,Lt.spotLightMap.value=H.state.spotLightMap,Lt.pointShadowMap.value=H.state.pointShadowMap,Lt.pointShadowMatrix.value=H.state.pointShadowMatrix);const Gt=Tt.getUniforms(),nn=Hi.seqWithValue(Gt.seq,Lt);return R.currentProgram=Tt,R.uniformsList=nn,Tt}function is(y,F){const V=St.get(y);V.outputEncoding=F.outputEncoding,V.instancing=F.instancing,V.skinning=F.skinning,V.morphTargets=F.morphTargets,V.morphNormals=F.morphNormals,V.morphColors=F.morphColors,V.morphTargetsCount=F.morphTargetsCount,V.numClippingPlanes=F.numClippingPlanes,V.numIntersection=F.numClipIntersection,V.vertexAlphas=F.vertexAlphas,V.vertexTangents=F.vertexTangents,V.toneMapping=F.toneMapping}function uo(y,F,V,R,H){F.isScene!==!0&&(F=ut),gt.resetTextureUnits();const mt=F.fog,yt=R.isMeshStandardMaterial?F.environment:null,Et=S===null?p.outputEncoding:S.isXRRenderTarget===!0?S.texture.encoding:xn,bt=(R.isMeshStandardMaterial?Kt:Ht).get(R.envMap||yt),Rt=R.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Tt=!!R.normalMap&&!!V.attributes.tangent,Lt=!!V.morphAttributes.position,Gt=!!V.morphAttributes.normal,nn=!!V.morphAttributes.color,bn=R.toneMapped?p.toneMapping:We,wn=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,Ie=wn!==void 0?wn.length:0,It=St.get(R),En=f.state.lights;if(W===!0&&(N===!0||y!==M)){const ue=y===M&&R.id===b;v.setState(R,y,ue)}let Wt=!1;R.version===It.__version?(It.needsLights&&It.lightsStateVersion!==En.state.version||It.outputEncoding!==Et||H.isInstancedMesh&&It.instancing===!1||!H.isInstancedMesh&&It.instancing===!0||H.isSkinnedMesh&&It.skinning===!1||!H.isSkinnedMesh&&It.skinning===!0||It.envMap!==bt||R.fog===!0&&It.fog!==mt||It.numClippingPlanes!==void 0&&(It.numClippingPlanes!==v.numPlanes||It.numIntersection!==v.numIntersection)||It.vertexAlphas!==Rt||It.vertexTangents!==Tt||It.morphTargets!==Lt||It.morphNormals!==Gt||It.morphColors!==nn||It.toneMapping!==bn||Mt.isWebGL2===!0&&It.morphTargetsCount!==Ie)&&(Wt=!0):(Wt=!0,It.__version=R.version);let ve=It.currentProgram;Wt===!0&&(ve=xe(R,F,H));let Xe=!1,ni=!1,Ki=!1;const re=ve.getUniforms(),rn=It.uniforms;if(ct.useProgram(ve.program)&&(Xe=!0,ni=!0,Ki=!0),R.id!==b&&(b=R.id,ni=!0),Xe||M!==y){if(re.setValue(X,"projectionMatrix",y.projectionMatrix),Mt.logarithmicDepthBuffer&&re.setValue(X,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),M!==y&&(M=y,ni=!0,Ki=!0),R.isShaderMaterial||R.isMeshPhongMaterial||R.isMeshToonMaterial||R.isMeshStandardMaterial||R.envMap){const ue=re.map.cameraPosition;ue!==void 0&&ue.setValue(X,$.setFromMatrixPosition(y.matrixWorld))}(R.isMeshPhongMaterial||R.isMeshToonMaterial||R.isMeshLambertMaterial||R.isMeshBasicMaterial||R.isMeshStandardMaterial||R.isShaderMaterial)&&re.setValue(X,"isOrthographic",y.isOrthographicCamera===!0),(R.isMeshPhongMaterial||R.isMeshToonMaterial||R.isMeshLambertMaterial||R.isMeshBasicMaterial||R.isMeshStandardMaterial||R.isShaderMaterial||R.isShadowMaterial||H.isSkinnedMesh)&&re.setValue(X,"viewMatrix",y.matrixWorldInverse)}if(H.isSkinnedMesh){re.setOptional(X,H,"bindMatrix"),re.setOptional(X,H,"bindMatrixInverse");const ue=H.skeleton;ue&&(Mt.floatVertexTextures?(ue.boneTexture===null&&ue.computeBoneTexture(),re.setValue(X,"boneTexture",ue.boneTexture,gt),re.setValue(X,"boneTextureSize",ue.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Qi=V.morphAttributes;if((Qi.position!==void 0||Qi.normal!==void 0||Qi.color!==void 0&&Mt.isWebGL2===!0)&&et.update(H,V,R,ve),(ni||It.receiveShadow!==H.receiveShadow)&&(It.receiveShadow=H.receiveShadow,re.setValue(X,"receiveShadow",H.receiveShadow)),R.isMeshGouraudMaterial&&R.envMap!==null&&(rn.envMap.value=bt,rn.flipEnvMap.value=bt.isCubeTexture&&bt.isRenderTargetTexture===!1?-1:1),ni&&(re.setValue(X,"toneMappingExposure",p.toneMappingExposure),It.needsLights&&ho(rn,Ki),mt&&R.fog===!0&&ge.refreshFogUniforms(rn,mt),ge.refreshMaterialUniforms(rn,R,Y,z,U),Hi.upload(X,It.uniformsList,rn,gt)),R.isShaderMaterial&&R.uniformsNeedUpdate===!0&&(Hi.upload(X,It.uniformsList,rn,gt),R.uniformsNeedUpdate=!1),R.isSpriteMaterial&&re.setValue(X,"center",H.center),re.setValue(X,"modelViewMatrix",H.modelViewMatrix),re.setValue(X,"normalMatrix",H.normalMatrix),re.setValue(X,"modelMatrix",H.matrixWorld),R.isShaderMaterial||R.isRawShaderMaterial){const ue=R.uniformsGroups;for(let tr=0,po=ue.length;tr<po;tr++)if(Mt.isWebGL2){const rs=ue[tr];at.update(rs,ve),at.bind(rs,ve)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return ve}function ho(y,F){y.ambientLightColor.needsUpdate=F,y.lightProbe.needsUpdate=F,y.directionalLights.needsUpdate=F,y.directionalLightShadows.needsUpdate=F,y.pointLights.needsUpdate=F,y.pointLightShadows.needsUpdate=F,y.spotLights.needsUpdate=F,y.spotLightShadows.needsUpdate=F,y.rectAreaLights.needsUpdate=F,y.hemisphereLights.needsUpdate=F}function fo(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return _},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return S},this.setRenderTargetTextures=function(y,F,V){St.get(y.texture).__webglTexture=F,St.get(y.depthTexture).__webglTexture=V;const R=St.get(y);R.__hasExternalTextures=!0,R.__hasExternalTextures&&(R.__autoAllocateDepthBuffer=V===void 0,R.__autoAllocateDepthBuffer||xt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),R.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(y,F){const V=St.get(y);V.__webglFramebuffer=F,V.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(y,F=0,V=0){S=y,_=F,E=V;let R=!0,H=null,mt=!1,yt=!1;if(y){const bt=St.get(y);bt.__useDefaultFramebuffer!==void 0?(ct.bindFramebuffer(36160,null),R=!1):bt.__webglFramebuffer===void 0?gt.setupRenderTarget(y):bt.__hasExternalTextures&&gt.rebindTextures(y,St.get(y.texture).__webglTexture,St.get(y.depthTexture).__webglTexture);const Rt=y.texture;(Rt.isData3DTexture||Rt.isDataArrayTexture||Rt.isCompressedArrayTexture)&&(yt=!0);const Tt=St.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(H=Tt[F],mt=!0):Mt.isWebGL2&&y.samples>0&&gt.useMultisampledRTT(y)===!1?H=St.get(y).__webglMultisampledFramebuffer:H=Tt,L.copy(y.viewport),O.copy(y.scissor),x=y.scissorTest}else L.copy(I).multiplyScalar(Y).floor(),O.copy(q).multiplyScalar(Y).floor(),x=j;if(ct.bindFramebuffer(36160,H)&&Mt.drawBuffers&&R&&ct.drawBuffers(y,H),ct.viewport(L),ct.scissor(O),ct.setScissorTest(x),mt){const bt=St.get(y.texture);X.framebufferTexture2D(36160,36064,34069+F,bt.__webglTexture,V)}else if(yt){const bt=St.get(y.texture),Rt=F||0;X.framebufferTextureLayer(36160,36064,bt.__webglTexture,V||0,Rt)}b=-1},this.readRenderTargetPixels=function(y,F,V,R,H,mt,yt){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Et=St.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&yt!==void 0&&(Et=Et[yt]),Et){ct.bindFramebuffer(36160,Et);try{const bt=y.texture,Rt=bt.format,Tt=bt.type;if(Rt!==De&&T.convert(Rt)!==X.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Lt=Tt===mi&&(xt.has("EXT_color_buffer_half_float")||Mt.isWebGL2&&xt.has("EXT_color_buffer_float"));if(Tt!==_n&&T.convert(Tt)!==X.getParameter(35738)&&!(Tt===dn&&(Mt.isWebGL2||xt.has("OES_texture_float")||xt.has("WEBGL_color_buffer_float")))&&!Lt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=y.width-R&&V>=0&&V<=y.height-H&&X.readPixels(F,V,R,H,T.convert(Rt),T.convert(Tt),mt)}finally{const bt=S!==null?St.get(S).__webglFramebuffer:null;ct.bindFramebuffer(36160,bt)}}},this.copyFramebufferToTexture=function(y,F,V=0){const R=Math.pow(2,-V),H=Math.floor(F.image.width*R),mt=Math.floor(F.image.height*R);gt.setTexture2D(F,0),X.copyTexSubImage2D(3553,V,0,0,y.x,y.y,H,mt),ct.unbindTexture()},this.copyTextureToTexture=function(y,F,V,R=0){const H=F.image.width,mt=F.image.height,yt=T.convert(V.format),Et=T.convert(V.type);gt.setTexture2D(V,0),X.pixelStorei(37440,V.flipY),X.pixelStorei(37441,V.premultiplyAlpha),X.pixelStorei(3317,V.unpackAlignment),F.isDataTexture?X.texSubImage2D(3553,R,y.x,y.y,H,mt,yt,Et,F.image.data):F.isCompressedTexture?X.compressedTexSubImage2D(3553,R,y.x,y.y,F.mipmaps[0].width,F.mipmaps[0].height,yt,F.mipmaps[0].data):X.texSubImage2D(3553,R,y.x,y.y,yt,Et,F.image),R===0&&V.generateMipmaps&&X.generateMipmap(3553),ct.unbindTexture()},this.copyTextureToTexture3D=function(y,F,V,R,H=0){if(p.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const mt=y.max.x-y.min.x+1,yt=y.max.y-y.min.y+1,Et=y.max.z-y.min.z+1,bt=T.convert(R.format),Rt=T.convert(R.type);let Tt;if(R.isData3DTexture)gt.setTexture3D(R,0),Tt=32879;else if(R.isDataArrayTexture)gt.setTexture2DArray(R,0),Tt=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}X.pixelStorei(37440,R.flipY),X.pixelStorei(37441,R.premultiplyAlpha),X.pixelStorei(3317,R.unpackAlignment);const Lt=X.getParameter(3314),Gt=X.getParameter(32878),nn=X.getParameter(3316),bn=X.getParameter(3315),wn=X.getParameter(32877),Ie=V.isCompressedTexture?V.mipmaps[0]:V.image;X.pixelStorei(3314,Ie.width),X.pixelStorei(32878,Ie.height),X.pixelStorei(3316,y.min.x),X.pixelStorei(3315,y.min.y),X.pixelStorei(32877,y.min.z),V.isDataTexture||V.isData3DTexture?X.texSubImage3D(Tt,H,F.x,F.y,F.z,mt,yt,Et,bt,Rt,Ie.data):V.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),X.compressedTexSubImage3D(Tt,H,F.x,F.y,F.z,mt,yt,Et,bt,Ie.data)):X.texSubImage3D(Tt,H,F.x,F.y,F.z,mt,yt,Et,bt,Rt,Ie),X.pixelStorei(3314,Lt),X.pixelStorei(32878,Gt),X.pixelStorei(3316,nn),X.pixelStorei(3315,bn),X.pixelStorei(32877,wn),H===0&&R.generateMipmaps&&X.generateMipmap(Tt),ct.unbindTexture()},this.initTexture=function(y){y.isCubeTexture?gt.setTextureCube(y,0):y.isData3DTexture?gt.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?gt.setTexture2DArray(y,0):gt.setTexture2D(y,0),ct.unbindTexture()},this.resetState=function(){_=0,E=0,S=null,ct.reset(),D.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class wf extends $a{}wf.prototype.isWebGL1Renderer=!0;class Ef extends ae{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.backgroundBlurriness=this.backgroundBlurriness),e}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(t){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=t}}class Ka extends Kn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ot(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const ma=new A,ga=new A,_a=new kt,Dr=new Ga,Gi=new ji;class Tf extends ae{constructor(t=new Ee,e=new Ka){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,r=e.count;i<r;i++)ma.fromBufferAttribute(e,i-1),ga.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=ma.distanceTo(ga);t.setAttribute("lineDistance",new qt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Gi.copy(n.boundingSphere),Gi.applyMatrix4(i),Gi.radius+=r,t.ray.intersectsSphere(Gi)===!1)return;_a.copy(i).invert(),Dr.copy(t.ray).applyMatrix4(_a);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=new A,u=new A,h=new A,f=new A,m=this.isLineSegments?2:1,g=n.index,d=n.attributes.position;if(g!==null){const _=Math.max(0,o.start),E=Math.min(g.count,o.start+o.count);for(let S=_,b=E-1;S<b;S+=m){const M=g.getX(S),L=g.getX(S+1);if(l.fromBufferAttribute(d,M),u.fromBufferAttribute(d,L),Dr.distanceSqToSegment(l,u,f,h)>c)continue;f.applyMatrix4(this.matrixWorld);const x=t.ray.origin.distanceTo(f);x<t.near||x>t.far||e.push({distance:x,point:h.clone().applyMatrix4(this.matrixWorld),index:S,face:null,faceIndex:null,object:this})}}else{const _=Math.max(0,o.start),E=Math.min(d.count,o.start+o.count);for(let S=_,b=E-1;S<b;S+=m){if(l.fromBufferAttribute(d,S),u.fromBufferAttribute(d,S+1),Dr.distanceSqToSegment(l,u,f,h)>c)continue;f.applyMatrix4(this.matrixWorld);const L=t.ray.origin.distanceTo(f);L<t.near||L>t.far||e.push({distance:L,point:h.clone().applyMatrix4(this.matrixWorld),index:S,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}const xa=new A,va=new A;class Af extends Tf{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let i=0,r=e.count;i<r;i+=2)xa.fromBufferAttribute(e,i),va.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+xa.distanceTo(va);t.setAttribute("lineDistance",new qt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Fe{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,i=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(i),e.push(r),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let i=0;const r=n.length;let o;e?o=e:o=t*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(i=Math.floor(a+(c-a)/2),l=n[i]-o,l<0)a=i+1;else if(l>0)c=i-1;else{c=i;break}if(i=c,n[i]===o)return i/(r-1);const u=n[i],f=n[i+1]-u,m=(o-u)/f;return(i+m)/(r-1)}getTangent(t,e){let i=t-1e-4,r=t+1e-4;i<0&&(i=0),r>1&&(r=1);const o=this.getPoint(i),a=this.getPoint(r),c=e||(o.isVector2?new ht:new A);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new A,i=[],r=[],o=[],a=new A,c=new kt;for(let m=0;m<=t;m++){const g=m/t;i[m]=this.getTangentAt(g,new A)}r[0]=new A,o[0]=new A;let l=Number.MAX_VALUE;const u=Math.abs(i[0].x),h=Math.abs(i[0].y),f=Math.abs(i[0].z);u<=l&&(l=u,n.set(1,0,0)),h<=l&&(l=h,n.set(0,1,0)),f<=l&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let m=1;m<=t;m++){if(r[m]=r[m-1].clone(),o[m]=o[m-1].clone(),a.crossVectors(i[m-1],i[m]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(ee(i[m-1].dot(i[m]),-1,1));r[m].applyMatrix4(c.makeRotationAxis(a,g))}o[m].crossVectors(i[m],r[m])}if(e===!0){let m=Math.acos(ee(r[0].dot(r[t]),-1,1));m/=t,i[0].dot(a.crossVectors(r[0],r[t]))>0&&(m=-m);for(let g=1;g<=t;g++)r[g].applyMatrix4(c.makeRotationAxis(i[g],m*g)),o[g].crossVectors(i[g],r[g])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.5,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Qa extends Fe{constructor(t=0,e=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e){const n=e||new ht,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);const a=this.aStartAngle+t*r;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=c-this.aX,m=l-this.aY;c=f*u-m*h+this.aX,l=f*h+m*u+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Cf extends Qa{constructor(t,e,n,i,r,o){super(t,e,n,n,i,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Kr(){let s=0,t=0,e=0,n=0;function i(r,o,a,c){s=r,t=a,e=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){i(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,u,h){let f=(o-r)/l-(a-r)/(l+u)+(a-o)/u,m=(a-o)/u-(c-o)/(u+h)+(c-a)/h;f*=u,m*=u,i(o,a,f,m)},calc:function(r){const o=r*r,a=o*r;return s+t*r+e*o+n*a}}}const Vi=new A,Rr=new Kr,Ir=new Kr,Nr=new Kr;class Lf extends Fe{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new A){const n=e,i=this.points,r=i.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,u;this.closed||a>0?l=i[(a-1)%r]:(Vi.subVectors(i[0],i[1]).add(i[0]),l=Vi);const h=i[a%r],f=i[(a+1)%r];if(this.closed||a+2<r?u=i[(a+2)%r]:(Vi.subVectors(i[r-1],i[r-2]).add(i[r-1]),u=Vi),this.curveType==="centripetal"||this.curveType==="chordal"){const m=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(h),m),p=Math.pow(h.distanceToSquared(f),m),d=Math.pow(f.distanceToSquared(u),m);p<1e-4&&(p=1),g<1e-4&&(g=p),d<1e-4&&(d=p),Rr.initNonuniformCatmullRom(l.x,h.x,f.x,u.x,g,p,d),Ir.initNonuniformCatmullRom(l.y,h.y,f.y,u.y,g,p,d),Nr.initNonuniformCatmullRom(l.z,h.z,f.z,u.z,g,p,d)}else this.curveType==="catmullrom"&&(Rr.initCatmullRom(l.x,h.x,f.x,u.x,this.tension),Ir.initCatmullRom(l.y,h.y,f.y,u.y,this.tension),Nr.initCatmullRom(l.z,h.z,f.z,u.z,this.tension));return n.set(Rr.calc(c),Ir.calc(c),Nr.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new A().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Ma(s,t,e,n,i){const r=(n-t)*.5,o=(i-e)*.5,a=s*s,c=s*a;return(2*e-2*n+r+o)*c+(-3*e+3*n-2*r-o)*a+r*s+e}function Pf(s,t){const e=1-s;return e*e*t}function Df(s,t){return 2*(1-s)*s*t}function Rf(s,t){return s*s*t}function fi(s,t,e,n){return Pf(s,t)+Df(s,e)+Rf(s,n)}function If(s,t){const e=1-s;return e*e*e*t}function Nf(s,t){const e=1-s;return 3*e*e*s*t}function Ff(s,t){return 3*(1-s)*s*s*t}function Of(s,t){return s*s*s*t}function pi(s,t,e,n,i){return If(s,t)+Nf(s,e)+Ff(s,n)+Of(s,i)}class zf extends Fe{constructor(t=new ht,e=new ht,n=new ht,i=new ht){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new ht){const n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(pi(t,i.x,r.x,o.x,a.x),pi(t,i.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Uf extends Fe{constructor(t=new A,e=new A,n=new A,i=new A){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new A){const n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(pi(t,i.x,r.x,o.x,a.x),pi(t,i.y,r.y,o.y,a.y),pi(t,i.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Bf extends Fe{constructor(t=new ht,e=new ht){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ht){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e){const n=e||new ht;return n.copy(this.v2).sub(this.v1).normalize(),n}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Gf extends Fe{constructor(t=new A,e=new A){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new A){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Vf extends Fe{constructor(t=new ht,e=new ht,n=new ht){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new ht){const n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(fi(t,i.x,r.x,o.x),fi(t,i.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class to extends Fe{constructor(t=new A,e=new A,n=new A){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new A){const n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(fi(t,i.x,r.x,o.x),fi(t,i.y,r.y,o.y),fi(t,i.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class kf extends Fe{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ht){const n=e,i=this.points,r=(i.length-1)*t,o=Math.floor(r),a=r-o,c=i[o===0?o:o-1],l=i[o],u=i[o>i.length-2?i.length-1:o+1],h=i[o>i.length-3?i.length-1:o+2];return n.set(Ma(a,c.x,l.x,u.x,h.x),Ma(a,c.y,l.y,u.y,h.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new ht().fromArray(i))}return this}}var Hf=Object.freeze({__proto__:null,ArcCurve:Cf,CatmullRomCurve3:Lf,CubicBezierCurve:zf,CubicBezierCurve3:Uf,EllipseCurve:Qa,LineCurve:Bf,LineCurve3:Gf,QuadraticBezierCurve:Vf,QuadraticBezierCurve3:to,SplineCurve:kf});class Qr extends Ee{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const u=[],h=new A,f=new A,m=[],g=[],p=[],d=[];for(let _=0;_<=n;_++){const E=[],S=_/n;let b=0;_==0&&o==0?b=.5/e:_==n&&c==Math.PI&&(b=-.5/e);for(let M=0;M<=e;M++){const L=M/e;h.x=-t*Math.cos(i+L*r)*Math.sin(o+S*a),h.y=t*Math.cos(o+S*a),h.z=t*Math.sin(i+L*r)*Math.sin(o+S*a),g.push(h.x,h.y,h.z),f.copy(h).normalize(),p.push(f.x,f.y,f.z),d.push(L+b,1-S),E.push(l++)}u.push(E)}for(let _=0;_<n;_++)for(let E=0;E<e;E++){const S=u[_][E+1],b=u[_][E],M=u[_+1][E],L=u[_+1][E+1];(_!==0||o>0)&&m.push(S,b,L),(_!==n-1||c<Math.PI)&&m.push(b,M,L)}this.setIndex(m),this.setAttribute("position",new qt(g,3)),this.setAttribute("normal",new qt(p,3)),this.setAttribute("uv",new qt(d,2))}static fromJSON(t){return new Qr(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class ts extends Ee{constructor(t=1,e=.4,n=8,i=6,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);const o=[],a=[],c=[],l=[],u=new A,h=new A,f=new A;for(let m=0;m<=n;m++)for(let g=0;g<=i;g++){const p=g/i*r,d=m/n*Math.PI*2;h.x=(t+e*Math.cos(d))*Math.cos(p),h.y=(t+e*Math.cos(d))*Math.sin(p),h.z=e*Math.sin(d),a.push(h.x,h.y,h.z),u.x=t*Math.cos(p),u.y=t*Math.sin(p),f.subVectors(h,u).normalize(),c.push(f.x,f.y,f.z),l.push(g/i),l.push(m/n)}for(let m=1;m<=n;m++)for(let g=1;g<=i;g++){const p=(i+1)*m+g-1,d=(i+1)*(m-1)+g-1,_=(i+1)*(m-1)+g,E=(i+1)*m+g;o.push(p,d,E),o.push(d,_,E)}this.setIndex(o),this.setAttribute("position",new qt(a,3)),this.setAttribute("normal",new qt(c,3)),this.setAttribute("uv",new qt(l,2))}static fromJSON(t){return new ts(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Ji extends Ee{constructor(t=new to(new A(-1,-1,0),new A(-1,1,0),new A(1,1,0)),e=64,n=1,i=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:i,closed:r};const o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new A,c=new A,l=new ht;let u=new A;const h=[],f=[],m=[],g=[];p(),this.setIndex(g),this.setAttribute("position",new qt(h,3)),this.setAttribute("normal",new qt(f,3)),this.setAttribute("uv",new qt(m,2));function p(){for(let S=0;S<e;S++)d(S);d(r===!1?e:0),E(),_()}function d(S){u=t.getPointAt(S/e,u);const b=o.normals[S],M=o.binormals[S];for(let L=0;L<=i;L++){const O=L/i*Math.PI*2,x=Math.sin(O),C=-Math.cos(O);c.x=C*b.x+x*M.x,c.y=C*b.y+x*M.y,c.z=C*b.z+x*M.z,c.normalize(),f.push(c.x,c.y,c.z),a.x=u.x+n*c.x,a.y=u.y+n*c.y,a.z=u.z+n*c.z,h.push(a.x,a.y,a.z)}}function _(){for(let S=1;S<=e;S++)for(let b=1;b<=i;b++){const M=(i+1)*(S-1)+(b-1),L=(i+1)*S+(b-1),O=(i+1)*S+b,x=(i+1)*(S-1)+b;g.push(M,L,x),g.push(L,O,x)}}function E(){for(let S=0;S<=e;S++)for(let b=0;b<=i;b++)l.x=S/e,l.y=b/i,m.push(l.x,l.y)}}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new Ji(new Hf[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class eo extends Kn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ot(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ot(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Na,this.normalScale=new ht(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}const ya={enabled:!1,files:{},add:function(s,t){this.enabled!==!1&&(this.files[s]=t)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class Wf{constructor(t,e,n){const i=this;let r=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(u){a++,r===!1&&i.onStart!==void 0&&i.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,i.onProgress!==void 0&&i.onProgress(u,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,h){return l.push(u,h),this},this.removeHandler=function(u){const h=l.indexOf(u);return h!==-1&&l.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=l.length;h<f;h+=2){const m=l[h],g=l[h+1];if(m.global&&(m.lastIndex=0),m.test(u))return g}return null}}}const Xf=new Wf;class no{constructor(t){this.manager=t!==void 0?t:Xf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}class qf extends no{constructor(t){super(t)}load(t,e,n,i){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,o=ya.get(t);if(o!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0),o;const a=gi("img");function c(){u(),ya.add(t,this),e&&e(this),r.manager.itemEnd(t)}function l(h){u(),i&&i(h),r.manager.itemError(t),r.manager.itemEnd(t)}function u(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(t),a.src=t,a}}class io extends no{constructor(t){super(t)}load(t,e,n,i){const r=new we,o=new qf(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){r.image=a,r.needsUpdate=!0,e!==void 0&&e(r)},n,i),r}}class ro extends ae{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ot(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}const Fr=new kt,Sa=new A,ba=new A;class Yf{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ht(512,512),this.map=null,this.mapPass=null,this.matrix=new kt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Zr,this._frameExtents=new ht(1,1),this._viewportCount=1,this._viewports=[new Bt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Sa.setFromMatrixPosition(t.matrixWorld),e.position.copy(Sa),ba.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(ba),e.updateMatrixWorld(),Fr.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Fr),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Fr)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const wa=new kt,oi=new A,Or=new A;class jf extends Yf{constructor(){super(new fe(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ht(4,2),this._viewportCount=6,this._viewports=[new Bt(2,1,1,1),new Bt(0,1,1,1),new Bt(3,1,1,1),new Bt(1,1,1,1),new Bt(3,0,1,1),new Bt(1,0,1,1)],this._cubeDirections=[new A(1,0,0),new A(-1,0,0),new A(0,0,1),new A(0,0,-1),new A(0,1,0),new A(0,-1,0)],this._cubeUps=[new A(0,1,0),new A(0,1,0),new A(0,1,0),new A(0,1,0),new A(0,0,1),new A(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,i=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),oi.setFromMatrixPosition(t.matrixWorld),n.position.copy(oi),Or.copy(n.position),Or.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Or),n.updateMatrixWorld(),i.makeTranslation(-oi.x,-oi.y,-oi.z),wa.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(wa)}}class Zf extends ro{constructor(t,e,n=0,i=1){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new jf}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Jf extends ro{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class Ea{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(ee(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class $f extends me{constructor(t,e,n){const i=new Qr(e,4,2),r=new vi({wireframe:!0,fog:!1,toneMapped:!1});super(i,r),this.light=t,this.light.updateMatrixWorld(),this.color=n,this.type="PointLightHelper",this.matrix=this.light.matrixWorld,this.matrixAutoUpdate=!1,this.update()}dispose(){this.geometry.dispose(),this.material.dispose()}update(){this.color!==void 0?this.material.color.set(this.color):this.material.color.copy(this.light.color)}}class Kf extends Af{constructor(t=10,e=10,n=4473924,i=8947848){n=new Ot(n),i=new Ot(i);const r=e/2,o=t/e,a=t/2,c=[],l=[];for(let f=0,m=0,g=-a;f<=e;f++,g+=o){c.push(-a,0,g,a,0,g),c.push(g,0,-a,g,0,a);const p=f===r?n:i;p.toArray(l,m),m+=3,p.toArray(l,m),m+=3,p.toArray(l,m),m+=3,p.toArray(l,m),m+=3}const u=new Ee;u.setAttribute("position",new qt(c,3)),u.setAttribute("color",new qt(l,3));const h=new Ka({vertexColors:!0,toneMapped:!1});super(u,h),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Yr}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Yr);const Ta={type:"change"},zr={type:"start"},Aa={type:"end"};class Qf extends Sn{constructor(t,e){super(),this.object=t,this.domElement=e,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new A,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Tn.ROTATE,MIDDLE:Tn.DOLLY,RIGHT:Tn.PAN},this.touches={ONE:An.ROTATE,TWO:An.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(T){T.addEventListener("keydown",_e),this._domElementKeyEvents=T},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Ta),n.update(),r=i.NONE},this.update=function(){const T=new A,D=new Mn().setFromUnitVectors(t.up,new A(0,1,0)),at=D.clone().invert(),lt=new A,rt=new Mn,ft=2*Math.PI;return function(){const At=n.object.position;T.copy(At).sub(n.target),T.applyQuaternion(D),a.setFromVector3(T),n.autoRotate&&r===i.NONE&&C(O()),n.enableDamping?(a.theta+=c.theta*n.dampingFactor,a.phi+=c.phi*n.dampingFactor):(a.theta+=c.theta,a.phi+=c.phi);let Ct=n.minAzimuthAngle,zt=n.maxAzimuthAngle;return isFinite(Ct)&&isFinite(zt)&&(Ct<-Math.PI?Ct+=ft:Ct>Math.PI&&(Ct-=ft),zt<-Math.PI?zt+=ft:zt>Math.PI&&(zt-=ft),Ct<=zt?a.theta=Math.max(Ct,Math.min(zt,a.theta)):a.theta=a.theta>(Ct+zt)/2?Math.max(Ct,a.theta):Math.min(zt,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),a.radius*=l,a.radius=Math.max(n.minDistance,Math.min(n.maxDistance,a.radius)),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),T.setFromSpherical(a),T.applyQuaternion(at),At.copy(n.target).add(T),n.object.lookAt(n.target),n.enableDamping===!0?(c.theta*=1-n.dampingFactor,c.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(c.set(0,0,0),u.set(0,0,0)),l=1,h||lt.distanceToSquared(n.object.position)>o||8*(1-rt.dot(n.object.quaternion))>o?(n.dispatchEvent(Ta),lt.copy(n.object.position),rt.copy(n.object.quaternion),h=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",G),n.domElement.removeEventListener("pointerdown",Ht),n.domElement.removeEventListener("pointercancel",ce),n.domElement.removeEventListener("wheel",ge),n.domElement.removeEventListener("pointermove",Kt),n.domElement.removeEventListener("pointerup",Yt),n._domElementKeyEvents!==null&&n._domElementKeyEvents.removeEventListener("keydown",_e)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let r=i.NONE;const o=1e-6,a=new Ea,c=new Ea;let l=1;const u=new A;let h=!1;const f=new ht,m=new ht,g=new ht,p=new ht,d=new ht,_=new ht,E=new ht,S=new ht,b=new ht,M=[],L={};function O(){return 2*Math.PI/60/60*n.autoRotateSpeed}function x(){return Math.pow(.95,n.zoomSpeed)}function C(T){c.theta-=T}function z(T){c.phi-=T}const Y=function(){const T=new A;return function(at,lt){T.setFromMatrixColumn(lt,0),T.multiplyScalar(-at),u.add(T)}}(),st=function(){const T=new A;return function(at,lt){n.screenSpacePanning===!0?T.setFromMatrixColumn(lt,1):(T.setFromMatrixColumn(lt,0),T.crossVectors(n.object.up,T)),T.multiplyScalar(at),u.add(T)}}(),B=function(){const T=new A;return function(at,lt){const rt=n.domElement;if(n.object.isPerspectiveCamera){const ft=n.object.position;T.copy(ft).sub(n.target);let dt=T.length();dt*=Math.tan(n.object.fov/2*Math.PI/180),Y(2*at*dt/rt.clientHeight,n.object.matrix),st(2*lt*dt/rt.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(Y(at*(n.object.right-n.object.left)/n.object.zoom/rt.clientWidth,n.object.matrix),st(lt*(n.object.top-n.object.bottom)/n.object.zoom/rt.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function I(T){n.object.isPerspectiveCamera?l/=T:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*T)),n.object.updateProjectionMatrix(),h=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function q(T){n.object.isPerspectiveCamera?l*=T:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/T)),n.object.updateProjectionMatrix(),h=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function j(T){f.set(T.clientX,T.clientY)}function J(T){E.set(T.clientX,T.clientY)}function W(T){p.set(T.clientX,T.clientY)}function N(T){m.set(T.clientX,T.clientY),g.subVectors(m,f).multiplyScalar(n.rotateSpeed);const D=n.domElement;C(2*Math.PI*g.x/D.clientHeight),z(2*Math.PI*g.y/D.clientHeight),f.copy(m),n.update()}function U(T){S.set(T.clientX,T.clientY),b.subVectors(S,E),b.y>0?I(x()):b.y<0&&q(x()),E.copy(S),n.update()}function tt(T){d.set(T.clientX,T.clientY),_.subVectors(d,p).multiplyScalar(n.panSpeed),B(_.x,_.y),p.copy(d),n.update()}function K(T){T.deltaY<0?q(x()):T.deltaY>0&&I(x()),n.update()}function $(T){let D=!1;switch(T.code){case n.keys.UP:B(0,n.keyPanSpeed),D=!0;break;case n.keys.BOTTOM:B(0,-n.keyPanSpeed),D=!0;break;case n.keys.LEFT:B(n.keyPanSpeed,0),D=!0;break;case n.keys.RIGHT:B(-n.keyPanSpeed,0),D=!0;break}D&&(T.preventDefault(),n.update())}function ut(){if(M.length===1)f.set(M[0].pageX,M[0].pageY);else{const T=.5*(M[0].pageX+M[1].pageX),D=.5*(M[0].pageY+M[1].pageY);f.set(T,D)}}function vt(){if(M.length===1)p.set(M[0].pageX,M[0].pageY);else{const T=.5*(M[0].pageX+M[1].pageX),D=.5*(M[0].pageY+M[1].pageY);p.set(T,D)}}function X(){const T=M[0].pageX-M[1].pageX,D=M[0].pageY-M[1].pageY,at=Math.sqrt(T*T+D*D);E.set(0,at)}function Pt(){n.enableZoom&&X(),n.enablePan&&vt()}function xt(){n.enableZoom&&X(),n.enableRotate&&ut()}function Mt(T){if(M.length==1)m.set(T.pageX,T.pageY);else{const at=_t(T),lt=.5*(T.pageX+at.x),rt=.5*(T.pageY+at.y);m.set(lt,rt)}g.subVectors(m,f).multiplyScalar(n.rotateSpeed);const D=n.domElement;C(2*Math.PI*g.x/D.clientHeight),z(2*Math.PI*g.y/D.clientHeight),f.copy(m)}function ct(T){if(M.length===1)d.set(T.pageX,T.pageY);else{const D=_t(T),at=.5*(T.pageX+D.x),lt=.5*(T.pageY+D.y);d.set(at,lt)}_.subVectors(d,p).multiplyScalar(n.panSpeed),B(_.x,_.y),p.copy(d)}function Nt(T){const D=_t(T),at=T.pageX-D.x,lt=T.pageY-D.y,rt=Math.sqrt(at*at+lt*lt);S.set(0,rt),b.set(0,Math.pow(S.y/E.y,n.zoomSpeed)),I(b.y),E.copy(S)}function St(T){n.enableZoom&&Nt(T),n.enablePan&&ct(T)}function gt(T){n.enableZoom&&Nt(T),n.enableRotate&&Mt(T)}function Ht(T){n.enabled!==!1&&(M.length===0&&(n.domElement.setPointerCapture(T.pointerId),n.domElement.addEventListener("pointermove",Kt),n.domElement.addEventListener("pointerup",Yt)),Q(T),T.pointerType==="touch"?w(T):jt(T))}function Kt(T){n.enabled!==!1&&(T.pointerType==="touch"?v(T):Ft(T))}function Yt(T){et(T),M.length===0&&(n.domElement.releasePointerCapture(T.pointerId),n.domElement.removeEventListener("pointermove",Kt),n.domElement.removeEventListener("pointerup",Yt)),n.dispatchEvent(Aa),r=i.NONE}function ce(T){et(T)}function jt(T){let D;switch(T.button){case 0:D=n.mouseButtons.LEFT;break;case 1:D=n.mouseButtons.MIDDLE;break;case 2:D=n.mouseButtons.RIGHT;break;default:D=-1}switch(D){case Tn.DOLLY:if(n.enableZoom===!1)return;J(T),r=i.DOLLY;break;case Tn.ROTATE:if(T.ctrlKey||T.metaKey||T.shiftKey){if(n.enablePan===!1)return;W(T),r=i.PAN}else{if(n.enableRotate===!1)return;j(T),r=i.ROTATE}break;case Tn.PAN:if(T.ctrlKey||T.metaKey||T.shiftKey){if(n.enableRotate===!1)return;j(T),r=i.ROTATE}else{if(n.enablePan===!1)return;W(T),r=i.PAN}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(zr)}function Ft(T){switch(r){case i.ROTATE:if(n.enableRotate===!1)return;N(T);break;case i.DOLLY:if(n.enableZoom===!1)return;U(T);break;case i.PAN:if(n.enablePan===!1)return;tt(T);break}}function ge(T){n.enabled===!1||n.enableZoom===!1||r!==i.NONE||(T.preventDefault(),n.dispatchEvent(zr),K(T),n.dispatchEvent(Aa))}function _e(T){n.enabled===!1||n.enablePan===!1||$(T)}function w(T){switch(it(T),M.length){case 1:switch(n.touches.ONE){case An.ROTATE:if(n.enableRotate===!1)return;ut(),r=i.TOUCH_ROTATE;break;case An.PAN:if(n.enablePan===!1)return;vt(),r=i.TOUCH_PAN;break;default:r=i.NONE}break;case 2:switch(n.touches.TWO){case An.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Pt(),r=i.TOUCH_DOLLY_PAN;break;case An.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;xt(),r=i.TOUCH_DOLLY_ROTATE;break;default:r=i.NONE}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(zr)}function v(T){switch(it(T),r){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;Mt(T),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;ct(T),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;St(T),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;gt(T),n.update();break;default:r=i.NONE}}function G(T){n.enabled!==!1&&T.preventDefault()}function Q(T){M.push(T)}function et(T){delete L[T.pointerId];for(let D=0;D<M.length;D++)if(M[D].pointerId==T.pointerId){M.splice(D,1);return}}function it(T){let D=L[T.pointerId];D===void 0&&(D=new ht,L[T.pointerId]=D),D.set(T.pageX,T.pageY)}function _t(T){const D=T.pointerId===M[0].pointerId?M[1]:M[0];return L[D.pointerId]}n.domElement.addEventListener("contextmenu",G),n.domElement.addEventListener("pointerdown",Ht),n.domElement.addEventListener("pointercancel",ce),n.domElement.addEventListener("wheel",ge,{passive:!1}),this.update()}}const tp=75,ep=window.innerWidth/window.innerHeight,np=.1,ip=1e4,rp=30,ei=new Ef,es=new fe(tp,ep,np,ip),$i=new $a({canvas:document.querySelector("#background")});$i.setPixelRatio(window.devicePixelRatio);$i.setSize(window.innerWidth,window.innerHeight);es.position.setZ(rp);const sp=10,ap=3,op=60,lp=100,cp=new ts(sp,ap,op,lp),up=new eo({color:16737095}),hp=new me(cp,up);ei.add(hp);const dp=20,fp=5,pp=5,ns=new Zf(16777215);ns.position.set(dp,fp,pp);ei.add(ns);new Jf(16777215);new $f(ns);const mp=200,gp=50;new Kf(mp,gp);const _p=new Qf(es,$i.domElement),xp=new io().load("space_earth.png");ei.background=xp;const pe=5,so=0,ao=0,oo=-20*pe;class vp{constructor(t,e,n,i){this.mesh=t,this.v_x=mn.randFloatSpread(.05),this.v_y=mn.randFloatSpread(.05),this.v_z=mn.randFloatSpread(.05),this.x=e,this.y=n,this.z=i,t.position.set(e+so,n+ao,i+oo)}}class Mp extends Fe{constructor(t=1){super(),this.scale=t}getPoint(t,e=new A){const r=t;return e.set(0,0,r).multiplyScalar(this.scale)}}const yp=new Mp(10),Sp=new Ji(yp,20,2,8,!1),bp=new vi({color:65280});new me(Sp,bp);const lo=new Ji,wp=new Float32Array([0,0,0,0,0,pe]);lo.setAttribute("position",new Re(wp,3));const Ep=new eo({color:16737095}),Tp=new me(lo,Ep);ei.add(Tp);function Ap(s,t,e){const n=mn.randFloatSpread(pe)+pe,i=new io().load("orange.jpg"),r=new me(new Qn(n,n,n),new vi({map:i})),o=new vp(r,s,t,e);return ei.add(o.mesh),o}const Cp=Array(500).fill().map(()=>Ap(mn.randFloatSpread(10*pe),mn.randFloatSpread(10*pe),mn.randFloatSpread(10*pe))),Lp=10,Pp=28,Dp=8/3,Ur=.005;function co(){requestAnimationFrame(co),Cp.forEach(s=>{s.mesh.rotation.x+=s.v_x,s.mesh.rotation.y+=s.v_y,s.mesh.rotation.z+=s.v_z;var t=s.x/pe,e=s.y/pe,n=s.z/pe;s.x=s.x+pe*(Ur*Lp*(e-t)),s.y=s.y+pe*(Ur*(t*(Pp-n)-e)),s.z=s.z+pe*(Ur*(t*e-Dp*n)),s.mesh.position.x=s.x+so,s.mesh.position.y=s.y+ao,s.mesh.position.z=s.z+oo}),_p.update(),$i.render(ei,es)}co();
