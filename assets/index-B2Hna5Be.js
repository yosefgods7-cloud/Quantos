var ty=(n,e)=>()=>(e||n((e={exports:{}}).exports,e),e.exports);var oA=ty((lA,To)=>{(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=t(s);fetch(s.href,i)}})();const ny=()=>{};var qu={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kd=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},ry=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const s=n[t++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=n[t++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=n[t++],o=n[t++],c=n[t++],l=((s&7)<<18|(i&63)<<12|(o&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=n[t++],o=n[t++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Qd={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const i=n[s],o=s+1<n.length,c=o?n[s+1]:0,l=s+2<n.length,u=l?n[s+2]:0,d=i>>2,p=(i&3)<<4|c>>4;let y=(c&15)<<2|u>>6,v=u&63;l||(v=64,o||(y=64)),r.push(t[d],t[p],t[y],t[v])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Kd(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):ry(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const i=t[n.charAt(s++)],c=s<n.length?t[n.charAt(s)]:0;++s;const u=s<n.length?t[n.charAt(s)]:64;++s;const p=s<n.length?t[n.charAt(s)]:64;if(++s,i==null||c==null||u==null||p==null)throw new sy;const y=i<<2|c>>4;if(r.push(y),u!==64){const v=c<<4&240|u>>2;if(r.push(v),p!==64){const k=u<<6&192|p;r.push(k)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class sy extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const iy=function(n){const e=Kd(n);return Qd.encodeByteArray(e,!0)},Io=function(n){return iy(n).replace(/\./g,"")},Yd=function(n){try{return Qd.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jd(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oy=()=>Jd().__FIREBASE_DEFAULTS__,ay=()=>{if(typeof process>"u"||typeof qu>"u")return;const n=qu.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},cy=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Yd(n[1]);return e&&JSON.parse(e)},Ho=()=>{try{return ny()||oy()||ay()||cy()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Xd=n=>{var e,t;return(t=(e=Ho())==null?void 0:e.emulatorHosts)==null?void 0:t[n]},Zd=n=>{const e=Xd(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},ef=()=>{var n;return(n=Ho())==null?void 0:n.config},tf=n=>{var e;return(e=Ho())==null?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ly{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nf(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",s=n.iat||0,i=n.sub||n.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...n};return[Io(JSON.stringify(t)),Io(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ke(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function uy(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ke())}function rf(){var e;const n=(e=Ho())==null?void 0:e.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function hy(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function dy(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function fy(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function py(){const n=ke();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function sf(){return!rf()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function of(){return!rf()&&!!navigator.userAgent&&(navigator.userAgent.includes("Safari")||navigator.userAgent.includes("WebKit"))&&!navigator.userAgent.includes("Chrome")}function af(){try{return typeof indexedDB=="object"}catch{return!1}}function my(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var i;e(((i=s.error)==null?void 0:i.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gy="FirebaseError";class Bt extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=gy,Object.setPrototypeOf(this,Bt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,mi.prototype.create)}}class mi{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?yy(i,r):"Error",c=`${this.serviceName}: ${o} (${s}).`;return new Bt(s,c,r)}}function yy(n,e){return n.replace(_y,(t,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const _y=/\{\$([^}]+)}/g;function wy(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function sr(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const s of t){if(!r.includes(s))return!1;const i=n[s],o=e[s];if(ju(i)&&ju(o)){if(!sr(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!t.includes(s))return!1;return!0}function ju(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gi(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Ls(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function Ms(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function Ty(n,e){const t=new Iy(n,e);return t.subscribe.bind(t)}class Iy{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let s;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");Ey(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:r},s.next===void 0&&(s.next=Fa),s.error===void 0&&(s.error=Fa),s.complete===void 0&&(s.complete=Fa);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Ey(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Fa(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ae(n){return n&&n._delegate?n._delegate:n}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mr(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Fc(n){return(await fetch(n,{credentials:"include"})).ok}class Sn{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vy{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new ly;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(by(e))try{this.getOrInitializeService({instanceIdentifier:qn})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=qn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=qn){return this.instances.has(e)}getOptions(e=qn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[i,o]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);r===c&&o.resolve(s)}return s}onInit(e,t){const r=this.normalizeInstanceIdentifier(t),s=this.onInitCallbacks.get(r)??new Set;s.add(e),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&e(i,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const s of r)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Sy(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=qn){return this.component?this.component.multipleInstances?e:qn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Sy(n){return n===qn?void 0:n}function by(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ay{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new vy(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var te;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(te||(te={}));const Ry={debug:te.DEBUG,verbose:te.VERBOSE,info:te.INFO,warn:te.WARN,error:te.ERROR,silent:te.SILENT},Py=te.INFO,ky={[te.DEBUG]:"log",[te.VERBOSE]:"log",[te.INFO]:"info",[te.WARN]:"warn",[te.ERROR]:"error"},Cy=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),s=ky[e];if(s)console[s](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Uc{constructor(e){this.name=e,this._logLevel=Py,this._logHandler=Cy,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in te))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Ry[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,te.DEBUG,...e),this._logHandler(this,te.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,te.VERBOSE,...e),this._logHandler(this,te.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,te.INFO,...e),this._logHandler(this,te.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,te.WARN,...e),this._logHandler(this,te.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,te.ERROR,...e),this._logHandler(this,te.ERROR,...e)}}const xy=(n,e)=>e.some(t=>n instanceof t);let Gu,Wu;function Dy(){return Gu||(Gu=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Ny(){return Wu||(Wu=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const cf=new WeakMap,rc=new WeakMap,lf=new WeakMap,Ua=new WeakMap,$c=new WeakMap;function Vy(n){const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("success",i),n.removeEventListener("error",o)},i=()=>{t(wn(n.result)),s()},o=()=>{r(n.error),s()};n.addEventListener("success",i),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&cf.set(t,n)}).catch(()=>{}),$c.set(e,n),e}function Oy(n){if(rc.has(n))return;const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",o),n.removeEventListener("abort",o)},i=()=>{t(),s()},o=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",i),n.addEventListener("error",o),n.addEventListener("abort",o)});rc.set(n,e)}let sc={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return rc.get(n);if(e==="objectStoreNames")return n.objectStoreNames||lf.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return wn(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Ly(n){sc=n(sc)}function My(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call($a(this),e,...t);return lf.set(r,e.sort?e.sort():[e]),wn(r)}:Ny().includes(n)?function(...e){return n.apply($a(this),e),wn(cf.get(this))}:function(...e){return wn(n.apply($a(this),e))}}function Fy(n){return typeof n=="function"?My(n):(n instanceof IDBTransaction&&Oy(n),xy(n,Dy())?new Proxy(n,sc):n)}function wn(n){if(n instanceof IDBRequest)return Vy(n);if(Ua.has(n))return Ua.get(n);const e=Fy(n);return e!==n&&(Ua.set(n,e),$c.set(e,n)),e}const $a=n=>$c.get(n);function Uy(n,e,{blocked:t,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(n,e),c=wn(o);return r&&o.addEventListener("upgradeneeded",l=>{r(wn(o.result),l.oldVersion,l.newVersion,wn(o.transaction),l)}),t&&o.addEventListener("blocked",l=>t(l.oldVersion,l.newVersion,l)),c.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),c}const $y=["get","getKey","getAll","getAllKeys","count"],By=["put","add","delete","clear"],Ba=new Map;function zu(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Ba.get(e))return Ba.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,s=By.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(s||$y.includes(t)))return;const i=async function(o,...c){const l=this.transaction(o,s?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(c.shift())),(await Promise.all([u[t](...c),s&&l.done]))[0]};return Ba.set(e,i),i}Ly(n=>({...n,get:(e,t,r)=>zu(e,t)||n.get(e,t,r),has:(e,t)=>!!zu(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qy{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(jy(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function jy(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ic="@firebase/app",Hu="0.14.11";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qt=new Uc("@firebase/app"),Gy="@firebase/app-compat",Wy="@firebase/analytics-compat",zy="@firebase/analytics",Hy="@firebase/app-check-compat",Ky="@firebase/app-check",Qy="@firebase/auth",Yy="@firebase/auth-compat",Jy="@firebase/database",Xy="@firebase/data-connect",Zy="@firebase/database-compat",e_="@firebase/functions",t_="@firebase/functions-compat",n_="@firebase/installations",r_="@firebase/installations-compat",s_="@firebase/messaging",i_="@firebase/messaging-compat",o_="@firebase/performance",a_="@firebase/performance-compat",c_="@firebase/remote-config",l_="@firebase/remote-config-compat",u_="@firebase/storage",h_="@firebase/storage-compat",d_="@firebase/firestore",f_="@firebase/ai",p_="@firebase/firestore-compat",m_="firebase",g_="12.12.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oc="[DEFAULT]",y_={[ic]:"fire-core",[Gy]:"fire-core-compat",[zy]:"fire-analytics",[Wy]:"fire-analytics-compat",[Ky]:"fire-app-check",[Hy]:"fire-app-check-compat",[Qy]:"fire-auth",[Yy]:"fire-auth-compat",[Jy]:"fire-rtdb",[Xy]:"fire-data-connect",[Zy]:"fire-rtdb-compat",[e_]:"fire-fn",[t_]:"fire-fn-compat",[n_]:"fire-iid",[r_]:"fire-iid-compat",[s_]:"fire-fcm",[i_]:"fire-fcm-compat",[o_]:"fire-perf",[a_]:"fire-perf-compat",[c_]:"fire-rc",[l_]:"fire-rc-compat",[u_]:"fire-gcs",[h_]:"fire-gcs-compat",[d_]:"fire-fst",[p_]:"fire-fst-compat",[f_]:"fire-vertex","fire-js":"fire-js",[m_]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zs=new Map,__=new Map,ac=new Map;function Ku(n,e){try{n.container.addComponent(e)}catch(t){Qt.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function ir(n){const e=n.name;if(ac.has(e))return Qt.debug(`There were multiple attempts to register component ${e}.`),!1;ac.set(e,n);for(const t of Zs.values())Ku(t,n);for(const t of __.values())Ku(t,n);return!0}function Ko(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Be(n){return n==null?!1:n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w_={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Tn=new mi("app","Firebase",w_);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T_{constructor(e,t,r){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Sn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Tn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gr=g_;function uf(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r={name:oc,automaticDataCollectionEnabled:!0,...e},s=r.name;if(typeof s!="string"||!s)throw Tn.create("bad-app-name",{appName:String(s)});if(t||(t=ef()),!t)throw Tn.create("no-options");const i=Zs.get(s);if(i){if(sr(t,i.options)&&sr(r,i.config))return i;throw Tn.create("duplicate-app",{appName:s})}const o=new Ay(s);for(const l of ac.values())o.addComponent(l);const c=new T_(t,r,o);return Zs.set(s,c),c}function Qo(n=oc){const e=Zs.get(n);if(!e&&n===oc&&ef())return uf();if(!e)throw Tn.create("no-app",{appName:n});return e}function I_(){return Array.from(Zs.values())}function Lt(n,e,t){let r=y_[n]??n;t&&(r+=`-${t}`);const s=r.match(/\s|\//),i=e.match(/\s|\//);if(s||i){const o=[`Unable to register library "${r}" with version "${e}":`];s&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&i&&o.push("and"),i&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Qt.warn(o.join(" "));return}ir(new Sn(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E_="firebase-heartbeat-database",v_=1,ei="firebase-heartbeat-store";let qa=null;function hf(){return qa||(qa=Uy(E_,v_,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(ei)}catch(t){console.warn(t)}}}}).catch(n=>{throw Tn.create("idb-open",{originalErrorMessage:n.message})})),qa}async function S_(n){try{const t=(await hf()).transaction(ei),r=await t.objectStore(ei).get(df(n));return await t.done,r}catch(e){if(e instanceof Bt)Qt.warn(e.message);else{const t=Tn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Qt.warn(t.message)}}}async function Qu(n,e){try{const r=(await hf()).transaction(ei,"readwrite");await r.objectStore(ei).put(e,df(n)),await r.done}catch(t){if(t instanceof Bt)Qt.warn(t.message);else{const r=Tn.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Qt.warn(r.message)}}}function df(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b_=1024,A_=30;class R_{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new k_(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Yu();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>A_){const o=C_(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Qt.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Yu(),{heartbeatsToSend:r,unsentEntries:s}=P_(this._heartbeatsCache.heartbeats),i=Io(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return Qt.warn(t),""}}}function Yu(){return new Date().toISOString().substring(0,10)}function P_(n,e=b_){const t=[];let r=n.slice();for(const s of n){const i=t.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Ju(t)>e){i.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),Ju(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class k_{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return af()?my().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await S_(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Qu(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Qu(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Ju(n){return Io(JSON.stringify({version:2,heartbeats:n})).length}function C_(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let r=1;r<n.length;r++)n[r].date<t&&(t=n[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x_(n){ir(new Sn("platform-logger",e=>new qy(e),"PRIVATE")),ir(new Sn("heartbeat",e=>new R_(e),"PRIVATE")),Lt(ic,Hu,n),Lt(ic,Hu,"esm2020"),Lt("fire-js","")}x_("");var D_="firebase",N_="12.12.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Lt(D_,N_,"app");function ff(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const V_=ff,pf=new mi("auth","Firebase",ff());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eo=new Uc("@firebase/auth");function O_(n,...e){Eo.logLevel<=te.WARN&&Eo.warn(`Auth (${gr}): ${n}`,...e)}function ro(n,...e){Eo.logLevel<=te.ERROR&&Eo.error(`Auth (${gr}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mt(n,...e){throw qc(n,...e)}function St(n,...e){return qc(n,...e)}function Bc(n,e,t){const r={...V_(),[e]:t};return new mi("auth","Firebase",r).create(e,{appName:n.name})}function bt(n){return Bc(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function mf(n,e,t){const r=t;if(!(e instanceof r))throw r.name!==e.constructor.name&&mt(n,"argument-error"),Bc(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function qc(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return pf.create(n,...e)}function H(n,e,...t){if(!n)throw qc(e,...t)}function Wt(n){const e="INTERNAL ASSERTION FAILED: "+n;throw ro(e),new Error(e)}function Yt(n,e){n||Wt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cc(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.href)||""}function L_(){return Xu()==="http:"||Xu()==="https:"}function Xu(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M_(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(L_()||dy()||"connection"in navigator)?navigator.onLine:!0}function F_(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yi{constructor(e,t){this.shortDelay=e,this.longDelay=t,Yt(t>e,"Short delay should be less than long delay!"),this.isMobile=uy()||fy()}get(){return M_()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jc(n,e){Yt(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gf{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Wt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Wt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Wt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U_={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $_=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],B_=new yi(3e4,6e4);function xn(n,e){return n.tenantId&&!e.tenantId?{...e,tenantId:n.tenantId}:e}async function Dn(n,e,t,r,s={}){return yf(n,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const c=gi({key:n.config.apiKey,...o}).slice(1),l=await n._getAdditionalHeaders();l["Content-Type"]="application/json",n.languageCode&&(l["X-Firebase-Locale"]=n.languageCode);const u={method:e,headers:l,...i};return hy()||(u.referrerPolicy="no-referrer"),n.emulatorConfig&&mr(n.emulatorConfig.host)&&(u.credentials="include"),gf.fetch()(await _f(n,n.config.apiHost,t,c),u)})}async function yf(n,e,t){n._canInitEmulator=!1;const r={...U_,...e};try{const s=new j_(n),i=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Gi(n,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const c=i.ok?o.errorMessage:o.error.message,[l,u]=c.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Gi(n,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Gi(n,"email-already-in-use",o);if(l==="USER_DISABLED")throw Gi(n,"user-disabled",o);const d=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Bc(n,d,u);mt(n,d)}}catch(s){if(s instanceof Bt)throw s;mt(n,"network-request-failed",{message:String(s)})}}async function _i(n,e,t,r,s={}){const i=await Dn(n,e,t,r,s);return"mfaPendingCredential"in i&&mt(n,"multi-factor-auth-required",{_serverResponse:i}),i}async function _f(n,e,t,r){const s=`${e}${t}?${r}`,i=n,o=i.config.emulator?jc(n.config,s):`${n.config.apiScheme}://${s}`;return $_.includes(t)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}function q_(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class j_{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(St(this.auth,"network-request-failed")),B_.get())})}}function Gi(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const s=St(n,e,r);return s.customData._tokenResponse=t,s}function Zu(n){return n!==void 0&&n.enterprise!==void 0}class G_{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return q_(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function W_(n,e){return Dn(n,"GET","/v2/recaptchaConfig",xn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function z_(n,e){return Dn(n,"POST","/v1/accounts:delete",e)}async function vo(n,e){return Dn(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function js(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function H_(n,e=!1){const t=Ae(n),r=await t.getIdToken(e),s=Gc(r);H(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:js(ja(s.auth_time)),issuedAtTime:js(ja(s.iat)),expirationTime:js(ja(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function ja(n){return Number(n)*1e3}function Gc(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return ro("JWT malformed, contained fewer than 3 sections"),null;try{const s=Yd(t);return s?JSON.parse(s):(ro("Failed to decode base64 JWT payload"),null)}catch(s){return ro("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function eh(n){const e=Gc(n);return H(e,"internal-error"),H(typeof e.exp<"u","internal-error"),H(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ti(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof Bt&&K_(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function K_({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q_{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lc{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=js(this.lastLoginAt),this.creationTime=js(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function So(n){var p;const e=n.auth,t=await n.getIdToken(),r=await ti(n,vo(e,{idToken:t}));H(r==null?void 0:r.users.length,e,"internal-error");const s=r.users[0];n._notifyReloadListener(s);const i=(p=s.providerUserInfo)!=null&&p.length?wf(s.providerUserInfo):[],o=J_(n.providerData,i),c=n.isAnonymous,l=!(n.email&&s.passwordHash)&&!(o!=null&&o.length),u=c?l:!1,d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new lc(s.createdAt,s.lastLoginAt),isAnonymous:u};Object.assign(n,d)}async function Y_(n){const e=Ae(n);await So(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function J_(n,e){return[...n.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function wf(n){return n.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function X_(n,e){const t=await yf(n,{},async()=>{const r=gi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=n.config,o=await _f(n,s,"/v1/token",`key=${i}`),c=await n._getAdditionalHeaders();c["Content-Type"]="application/x-www-form-urlencoded";const l={method:"POST",headers:c,body:r};return n.emulatorConfig&&mr(n.emulatorConfig.host)&&(l.credentials="include"),gf.fetch()(o,l)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function Z_(n,e){return Dn(n,"POST","/v2/accounts:revokeToken",xn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ur{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){H(e.idToken,"internal-error"),H(typeof e.idToken<"u","internal-error"),H(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):eh(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){H(e.length!==0,"internal-error");const t=eh(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(H(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:s,expiresIn:i}=await X_(e,t);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:s,expirationTime:i}=t,o=new Ur;return r&&(H(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(H(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(H(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ur,this.toJSON())}_performRefresh(){return Wt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cn(n,e){H(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class vt{constructor({uid:e,auth:t,stsTokenManager:r,...s}){this.providerId="firebase",this.proactiveRefresh=new Q_(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new lc(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await ti(this,this.stsTokenManager.getToken(this.auth,e));return H(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return H_(this,e)}reload(){return Y_(this)}_assign(e){this!==e&&(H(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new vt({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){H(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await So(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Be(this.auth.app))return Promise.reject(bt(this.auth));const e=await this.getIdToken();return await ti(this,z_(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const r=t.displayName??void 0,s=t.email??void 0,i=t.phoneNumber??void 0,o=t.photoURL??void 0,c=t.tenantId??void 0,l=t._redirectEventId??void 0,u=t.createdAt??void 0,d=t.lastLoginAt??void 0,{uid:p,emailVerified:y,isAnonymous:v,providerData:k,stsTokenManager:P}=t;H(p&&P,e,"internal-error");const C=Ur.fromJSON(this.name,P);H(typeof p=="string",e,"internal-error"),cn(r,e.name),cn(s,e.name),H(typeof y=="boolean",e,"internal-error"),H(typeof v=="boolean",e,"internal-error"),cn(i,e.name),cn(o,e.name),cn(c,e.name),cn(l,e.name),cn(u,e.name),cn(d,e.name);const V=new vt({uid:p,auth:e,email:s,emailVerified:y,displayName:r,isAnonymous:v,photoURL:o,phoneNumber:i,tenantId:c,stsTokenManager:C,createdAt:u,lastLoginAt:d});return k&&Array.isArray(k)&&(V.providerData=k.map(O=>({...O}))),l&&(V._redirectEventId=l),V}static async _fromIdTokenResponse(e,t,r=!1){const s=new Ur;s.updateFromServerResponse(t);const i=new vt({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await So(i),i}static async _fromGetAccountInfoResponse(e,t,r){const s=t.users[0];H(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?wf(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),c=new Ur;c.updateFromIdToken(r);const l=new vt({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:o}),u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new lc(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(l,u),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const th=new Map;function zt(n){Yt(n instanceof Function,"Expected a class definition");let e=th.get(n);return e?(Yt(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,th.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tf{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Tf.type="NONE";const nh=Tf;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function so(n,e,t){return`firebase:${n}:${e}:${t}`}class $r{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=so(this.userKey,s.apiKey,i),this.fullPersistenceKey=so("persistence",s.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await vo(this.auth,{idToken:e}).catch(()=>{});return t?vt._fromGetAccountInfoResponse(this.auth,t,e):null}return vt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new $r(zt(nh),e,r);const s=(await Promise.all(t.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=s[0]||zt(nh);const o=so(r,e.config.apiKey,e.name);let c=null;for(const u of t)try{const d=await u._get(o);if(d){let p;if(typeof d=="string"){const y=await vo(e,{idToken:d}).catch(()=>{});if(!y)break;p=await vt._fromGetAccountInfoResponse(e,y,d)}else p=vt._fromJSON(e,d);u!==i&&(c=p),i=u;break}}catch{}const l=s.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new $r(i,e,r):(i=l[0],c&&await i._set(o,c.toJSON()),await Promise.all(t.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new $r(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rh(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Sf(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(If(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Af(e))return"Blackberry";if(Rf(e))return"Webos";if(Ef(e))return"Safari";if((e.includes("chrome/")||vf(e))&&!e.includes("edge/"))return"Chrome";if(bf(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function If(n=ke()){return/firefox\//i.test(n)}function Ef(n=ke()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function vf(n=ke()){return/crios\//i.test(n)}function Sf(n=ke()){return/iemobile/i.test(n)}function bf(n=ke()){return/android/i.test(n)}function Af(n=ke()){return/blackberry/i.test(n)}function Rf(n=ke()){return/webos/i.test(n)}function Wc(n=ke()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function ew(n=ke()){var e;return Wc(n)&&!!((e=window.navigator)!=null&&e.standalone)}function tw(){return py()&&document.documentMode===10}function Pf(n=ke()){return Wc(n)||bf(n)||Rf(n)||Af(n)||/windows phone/i.test(n)||Sf(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kf(n,e=[]){let t;switch(n){case"Browser":t=rh(ke());break;case"Worker":t=`${rh(ke())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${gr}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nw{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=i=>new Promise((o,c)=>{try{const l=e(i);o(l)}catch(l){c(l)}});r.onAbort=t,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rw(n,e={}){return Dn(n,"GET","/v2/passwordPolicy",xn(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sw=6;class iw{constructor(e){var r;const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??sw,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ow{constructor(e,t,r,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new sh(this),this.idTokenSubscription=new sh(this),this.beforeStateQueue=new nw(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=pf,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=zt(t)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await $r.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((s=this._popupRedirectResolver)!=null&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)==null?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await vo(this,{idToken:e}),r=await vt._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var i;if(Be(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(c,c))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let r=t,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(i=this.redirectUser)==null?void 0:i._redirectEventId,c=r==null?void 0:r._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===c)&&(l!=null&&l.user)&&(r=l.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return H(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await So(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=F_()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Be(this.app))return Promise.reject(bt(this));const t=e?Ae(e):null;return t&&H(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&H(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Be(this.app)?Promise.reject(bt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Be(this.app)?Promise.reject(bt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(zt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await rw(this),t=new iw(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new mi("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await Z_(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&zt(e)||this._popupRedirectResolver;H(t,this,"argument-error"),this.redirectPersistenceManager=await $r.create(this,[zt(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)==null?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((t=this.currentUser)==null?void 0:t.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,s){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let o=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(H(c,this,"internal-error"),c.then(()=>{o||i(this.currentUser)}),typeof t=="function"){const l=e.addObserver(t,r,s);return()=>{o=!0,l()}}else{const l=e.addObserver(t);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return H(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=kf(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var s;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await((s=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:s.getHeartbeatsHeader());t&&(e["X-Firebase-Client"]=t);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var t;if(Be(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:t.getToken());return e!=null&&e.error&&O_(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function Rt(n){return Ae(n)}class sh{constructor(e){this.auth=e,this.observer=null,this.addObserver=Ty(t=>this.observer=t)}get next(){return H(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Yo={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function aw(n){Yo=n}function Cf(n){return Yo.loadJS(n)}function cw(){return Yo.recaptchaEnterpriseScript}function lw(){return Yo.gapiScript}function uw(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class hw{constructor(){this.enterprise=new dw}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class dw{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const fw="recaptcha-enterprise",xf="NO_RECAPTCHA";class pw{constructor(e){this.type=fw,this.auth=Rt(e)}async verify(e="verify",t=!1){async function r(i){if(!t){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,c)=>{W_(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const u=new G_(l);return i.tenantId==null?i._agentRecaptchaConfig=u:i._tenantRecaptchaConfigs[i.tenantId]=u,o(u.siteKey)}}).catch(l=>{c(l)})})}function s(i,o,c){const l=window.grecaptcha;Zu(l)?l.enterprise.ready(()=>{l.enterprise.execute(i,{action:e}).then(u=>{o(u)}).catch(()=>{o(xf)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new hw().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{r(this.auth).then(c=>{if(!t&&Zu(window.grecaptcha))s(c,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=cw();l.length!==0&&(l+=c),Cf(l).then(()=>{s(c,i,o)}).catch(u=>{o(u)})}}).catch(c=>{o(c)})})}}async function ih(n,e,t,r=!1,s=!1){const i=new pw(n);let o;if(s)o=xf;else try{o=await i.verify(t)}catch{o=await i.verify(t,!0)}const c={...e};if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in c){const l=c.phoneEnrollmentInfo.phoneNumber,u=c.phoneEnrollmentInfo.recaptchaToken;Object.assign(c,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in c){const l=c.phoneSignInInfo.recaptchaToken;Object.assign(c,{phoneSignInInfo:{recaptchaToken:l,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return c}return r?Object.assign(c,{captchaResp:o}):Object.assign(c,{captchaResponse:o}),Object.assign(c,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(c,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),c}async function uc(n,e,t,r,s){var i;if((i=n._getRecaptchaConfig())!=null&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await ih(n,e,t,t==="getOobCode");return r(n,o)}else return r(n,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const c=await ih(n,e,t,t==="getOobCode");return r(n,c)}else return Promise.reject(o)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mw(n,e){const t=Ko(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),i=t.getOptions();if(sr(i,e??{}))return s;mt(s,"already-initialized")}return t.initialize({options:e})}function gw(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(zt);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function yw(n,e,t){const r=Rt(n);H(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=Df(e),{host:o,port:c}=_w(e),l=c===null?"":`:${c}`,u={url:`${i}//${o}${l}/`},d=Object.freeze({host:o,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){H(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),H(sr(u,r.config.emulator)&&sr(d,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=u,r.emulatorConfig=d,r.settings.appVerificationDisabledForTesting=!0,mr(o)?Fc(`${i}//${o}${l}`):ww()}function Df(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function _w(n){const e=Df(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:oh(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:oh(o)}}}function oh(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function ww(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zc{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Wt("not implemented")}_getIdTokenResponse(e){return Wt("not implemented")}_linkToIdToken(e,t){return Wt("not implemented")}_getReauthenticationResolver(e){return Wt("not implemented")}}async function Tw(n,e){return Dn(n,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Iw(n,e){return _i(n,"POST","/v1/accounts:signInWithPassword",xn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ew(n,e){return _i(n,"POST","/v1/accounts:signInWithEmailLink",xn(n,e))}async function vw(n,e){return _i(n,"POST","/v1/accounts:signInWithEmailLink",xn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ni extends zc{constructor(e,t,r,s=null){super("password",r),this._email=e,this._password=t,this._tenantId=s}static _fromEmailAndPassword(e,t){return new ni(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new ni(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return uc(e,t,"signInWithPassword",Iw);case"emailLink":return Ew(e,{email:this._email,oobCode:this._password});default:mt(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return uc(e,r,"signUpPassword",Tw);case"emailLink":return vw(e,{idToken:t,email:this._email,oobCode:this._password});default:mt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Br(n,e){return _i(n,"POST","/v1/accounts:signInWithIdp",xn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sw="http://localhost";class or extends zc{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new or(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):mt("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s,...i}=t;if(!r||!s)return null;const o=new or(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return Br(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,Br(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Br(e,t)}buildRequest(){const e={requestUri:Sw,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=gi(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bw(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Aw(n){const e=Ls(Ms(n)).link,t=e?Ls(Ms(e)).deep_link_id:null,r=Ls(Ms(n)).deep_link_id;return(r?Ls(Ms(r)).link:null)||r||t||e||n}class Hc{constructor(e){const t=Ls(Ms(e)),r=t.apiKey??null,s=t.oobCode??null,i=bw(t.mode??null);H(r&&s&&i,"argument-error"),this.apiKey=r,this.operation=i,this.code=s,this.continueUrl=t.continueUrl??null,this.languageCode=t.lang??null,this.tenantId=t.tenantId??null}static parseLink(e){const t=Aw(e);try{return new Hc(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ss{constructor(){this.providerId=ss.PROVIDER_ID}static credential(e,t){return ni._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=Hc.parseLink(t);return H(r,"argument-error"),ni._fromEmailAndCode(e,r.code,r.tenantId)}}ss.PROVIDER_ID="password";ss.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ss.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jo{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wi extends Jo{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dn extends wi{constructor(){super("facebook.com")}static credential(e){return or._fromParams({providerId:dn.PROVIDER_ID,signInMethod:dn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return dn.credentialFromTaggedObject(e)}static credentialFromError(e){return dn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return dn.credential(e.oauthAccessToken)}catch{return null}}}dn.FACEBOOK_SIGN_IN_METHOD="facebook.com";dn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et extends wi{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return or._fromParams({providerId:Et.PROVIDER_ID,signInMethod:Et.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Et.credentialFromTaggedObject(e)}static credentialFromError(e){return Et.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return Et.credential(t,r)}catch{return null}}}Et.GOOGLE_SIGN_IN_METHOD="google.com";Et.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fn extends wi{constructor(){super("github.com")}static credential(e){return or._fromParams({providerId:fn.PROVIDER_ID,signInMethod:fn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return fn.credentialFromTaggedObject(e)}static credentialFromError(e){return fn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return fn.credential(e.oauthAccessToken)}catch{return null}}}fn.GITHUB_SIGN_IN_METHOD="github.com";fn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pn extends wi{constructor(){super("twitter.com")}static credential(e,t){return or._fromParams({providerId:pn.PROVIDER_ID,signInMethod:pn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return pn.credentialFromTaggedObject(e)}static credentialFromError(e){return pn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return pn.credential(t,r)}catch{return null}}}pn.TWITTER_SIGN_IN_METHOD="twitter.com";pn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Nf(n,e){return _i(n,"POST","/v1/accounts:signUp",xn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,s=!1){const i=await vt._fromIdTokenResponse(e,r,s),o=ah(r);return new Jt({user:i,providerId:o,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const s=ah(r);return new Jt({user:e,providerId:s,_tokenResponse:r,operationType:t})}}function ah(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rw(n){var s;if(Be(n.app))return Promise.reject(bt(n));const e=Rt(n);if(await e._initializationPromise,(s=e.currentUser)!=null&&s.isAnonymous)return new Jt({user:e.currentUser,providerId:null,operationType:"signIn"});const t=await Nf(e,{returnSecureToken:!0}),r=await Jt._fromIdTokenResponse(e,"signIn",t,!0);return await e._updateCurrentUser(r.user),r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bo extends Bt{constructor(e,t,r,s){super(t.code,t.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,bo.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,s){return new bo(e,t,r,s)}}function Vf(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?bo._fromErrorAndOperation(n,i,e,r):i})}async function Pw(n,e,t=!1){const r=await ti(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Jt._forOperation(n,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kw(n,e,t=!1){const{auth:r}=n;if(Be(r.app))return Promise.reject(bt(r));const s="reauthenticate";try{const i=await ti(n,Vf(r,s,e,n),t);H(i.idToken,r,"internal-error");const o=Gc(i.idToken);H(o,r,"internal-error");const{sub:c}=o;return H(n.uid===c,r,"user-mismatch"),Jt._forOperation(n,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&mt(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Of(n,e,t=!1){if(Be(n.app))return Promise.reject(bt(n));const r="signIn",s=await Vf(n,r,e),i=await Jt._fromIdTokenResponse(n,r,s);return t||await n._updateCurrentUser(i.user),i}async function Cw(n,e){return Of(Rt(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Lf(n){const e=Rt(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function xw(n,e,t){if(Be(n.app))return Promise.reject(bt(n));const r=Rt(n),o=await uc(r,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Nf).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&Lf(n),l}),c=await Jt._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(c.user),c}function Dw(n,e,t){return Be(n.app)?Promise.reject(bt(n)):Cw(Ae(n),ss.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Lf(n),r})}function Nw(n,e,t,r){return Ae(n).onIdTokenChanged(e,t,r)}function Vw(n,e,t){return Ae(n).beforeAuthStateChanged(e,t)}function Ow(n,e,t,r){return Ae(n).onAuthStateChanged(e,t,r)}function Lw(n){return Ae(n).signOut()}const Ao="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mf{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Ao,"1"),this.storage.removeItem(Ao),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mw=1e3,Fw=10;class Ff extends Mf{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Pf(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),s=this.localCache[t];r!==s&&e(t,s,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,c,l)=>{this.notifyListeners(o,l)});return}const r=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!t&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);tw()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,Fw):s()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},Mw)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Ff.type="LOCAL";const Uw=Ff;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uf extends Mf{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Uf.type="SESSION";const $f=Uf;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $w(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xo{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const r=new Xo(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:s,data:i}=t.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const c=Array.from(o).map(async u=>u(t.origin,i)),l=await $w(c);t.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Xo.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kc(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bw{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((c,l)=>{const u=Kc("",20);s.port1.start();const d=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(p){const y=p;if(y.data.eventId===u)switch(y.data.status){case"ack":clearTimeout(d),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(y.data.response);break;default:clearTimeout(d),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:t},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mt(){return window}function qw(n){Mt().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bf(){return typeof Mt().WorkerGlobalScope<"u"&&typeof Mt().importScripts=="function"}async function jw(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Gw(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)==null?void 0:n.controller)||null}function Ww(){return Bf()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qf="firebaseLocalStorageDb",zw=1,Ro="firebaseLocalStorage",jf="fbase_key";class Ti{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Zo(n,e){return n.transaction([Ro],e?"readwrite":"readonly").objectStore(Ro)}function Hw(){const n=indexedDB.deleteDatabase(qf);return new Ti(n).toPromise()}function hc(){const n=indexedDB.open(qf,zw);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(Ro,{keyPath:jf})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(Ro)?e(r):(r.close(),await Hw(),e(await hc()))})})}async function ch(n,e,t){const r=Zo(n,!0).put({[jf]:e,value:t});return new Ti(r).toPromise()}async function Kw(n,e){const t=Zo(n,!1).get(e),r=await new Ti(t).toPromise();return r===void 0?null:r.value}function lh(n,e){const t=Zo(n,!0).delete(e);return new Ti(t).toPromise()}const Qw=800,Yw=3;class Gf{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await hc(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>Yw)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Bf()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Xo._getInstance(Ww()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var t,r;if(this.activeServiceWorker=await jw(),!this.activeServiceWorker)return;this.sender=new Bw(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(t=e[0])!=null&&t.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Gw()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await hc();return await ch(e,Ao,"1"),await lh(e,Ao),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>ch(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>Kw(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>lh(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Zo(s,!1).getAll();return new Ti(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Qw)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Gf.type="LOCAL";const Jw=Gf;new yi(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qc(n,e){return e?zt(e):(H(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yc extends zc{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Br(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Br(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Br(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Xw(n){return Of(n.auth,new Yc(n),n.bypassAuthState)}function Zw(n){const{auth:e,user:t}=n;return H(t,e,"internal-error"),kw(t,new Yc(n),n.bypassAuthState)}async function eT(n){const{auth:e,user:t}=n;return H(t,e,"internal-error"),Pw(t,new Yc(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wf{constructor(e,t,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:s,tenantId:i,error:o,type:c}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:t,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Xw;case"linkViaPopup":case"linkViaRedirect":return eT;case"reauthViaPopup":case"reauthViaRedirect":return Zw;default:mt(this.auth,"internal-error")}}resolve(e){Yt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Yt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tT=new yi(2e3,1e4);async function nT(n,e,t){if(Be(n.app))return Promise.reject(St(n,"operation-not-supported-in-this-environment"));const r=Rt(n);mf(n,e,Jo);const s=Qc(r,t);return new Yn(r,"signInViaPopup",e,s).executeNotNull()}class Yn extends Wf{constructor(e,t,r,s,i){super(e,t,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Yn.currentPopupAction&&Yn.currentPopupAction.cancel(),Yn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return H(e,this.auth,"internal-error"),e}async onExecution(){Yt(this.filter.length===1,"Popup operations only handle one event");const e=Kc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(St(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(St(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Yn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if((r=(t=this.authWindow)==null?void 0:t.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(St(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,tT.get())};e()}}Yn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rT="pendingRedirect",io=new Map;class sT extends Wf{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=io.get(this.auth._key());if(!e){try{const r=await iT(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}io.set(this.auth._key(),e)}return this.bypassAuthState||io.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function iT(n,e){const t=Hf(e),r=zf(n);if(!await r._isAvailable())return!1;const s=await r._get(t)==="true";return await r._remove(t),s}async function oT(n,e){return zf(n)._set(Hf(e),"true")}function aT(n,e){io.set(n._key(),e)}function zf(n){return zt(n._redirectPersistence)}function Hf(n){return so(rT,n.config.apiKey,n.name)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cT(n,e,t){return lT(n,e,t)}async function lT(n,e,t){if(Be(n.app))return Promise.reject(bt(n));const r=Rt(n);mf(n,e,Jo),await r._initializationPromise;const s=Qc(r,t);return await oT(s,r),s._openRedirect(r,e,"signInViaRedirect")}async function uT(n,e){return await Rt(n)._initializationPromise,Kf(n,e,!1)}async function Kf(n,e,t=!1){if(Be(n.app))return Promise.reject(bt(n));const r=Rt(n),s=Qc(r,e),o=await new sT(r,s,t).execute();return o&&!t&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hT=600*1e3;class dT{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!fT(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!Qf(e)){const s=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";t.onError(St(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=hT&&this.cachedEventUids.clear(),this.cachedEventUids.has(uh(e))}saveEventToCache(e){this.cachedEventUids.add(uh(e)),this.lastProcessedEventTime=Date.now()}}function uh(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Qf({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function fT(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Qf(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pT(n,e={}){return Dn(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mT=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,gT=/^https?/;async function yT(n){if(n.config.emulator)return;const{authorizedDomains:e}=await pT(n);for(const t of e)try{if(_T(t))return}catch{}mt(n,"unauthorized-domain")}function _T(n){const e=cc(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===r}if(!gT.test(t))return!1;if(mT.test(n))return r===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wT=new yi(3e4,6e4);function hh(){const n=Mt().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function TT(n){return new Promise((e,t)=>{var s,i,o;function r(){hh(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{hh(),t(St(n,"network-request-failed"))},timeout:wT.get()})}if((i=(s=Mt().gapi)==null?void 0:s.iframes)!=null&&i.Iframe)e(gapi.iframes.getContext());else if((o=Mt().gapi)!=null&&o.load)r();else{const c=uw("iframefcb");return Mt()[c]=()=>{gapi.load?r():t(St(n,"network-request-failed"))},Cf(`${lw()}?onload=${c}`).catch(l=>t(l))}}).catch(e=>{throw oo=null,e})}let oo=null;function IT(n){return oo=oo||TT(n),oo}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ET=new yi(5e3,15e3),vT="__/auth/iframe",ST="emulator/auth/iframe",bT={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},AT=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function RT(n){const e=n.config;H(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?jc(e,ST):`https://${n.config.authDomain}/${vT}`,r={apiKey:e.apiKey,appName:n.name,v:gr},s=AT.get(n.config.apiHost);s&&(r.eid=s);const i=n._getFrameworks();return i.length&&(r.fw=i.join(",")),`${t}?${gi(r).slice(1)}`}async function PT(n){const e=await IT(n),t=Mt().gapi;return H(t,n,"internal-error"),e.open({where:document.body,url:RT(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:bT,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=St(n,"network-request-failed"),c=Mt().setTimeout(()=>{i(o)},ET.get());function l(){Mt().clearTimeout(c),s(r)}r.ping(l).then(l,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kT={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},CT=500,xT=600,DT="_blank",NT="http://localhost";class dh{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function VT(n,e,t,r=CT,s=xT){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const l={...kT,width:r.toString(),height:s.toString(),top:i,left:o},u=ke().toLowerCase();t&&(c=vf(u)?DT:t),If(u)&&(e=e||NT,l.scrollbars="yes");const d=Object.entries(l).reduce((y,[v,k])=>`${y}${v}=${k},`,"");if(ew(u)&&c!=="_self")return OT(e||"",c),new dh(null);const p=window.open(e||"",c,d);H(p,n,"popup-blocked");try{p.focus()}catch{}return new dh(p)}function OT(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LT="__/auth/handler",MT="emulator/auth/handler",FT=encodeURIComponent("fac");async function fh(n,e,t,r,s,i){H(n.config.authDomain,n,"auth-domain-config-required"),H(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:gr,eventId:s};if(e instanceof Jo){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",wy(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,p]of Object.entries({}))o[d]=p}if(e instanceof wi){const d=e.getScopes().filter(p=>p!=="");d.length>0&&(o.scopes=d.join(","))}n.tenantId&&(o.tid=n.tenantId);const c=o;for(const d of Object.keys(c))c[d]===void 0&&delete c[d];const l=await n._getAppCheckToken(),u=l?`#${FT}=${encodeURIComponent(l)}`:"";return`${UT(n)}?${gi(c).slice(1)}${u}`}function UT({config:n}){return n.emulator?jc(n,MT):`https://${n.authDomain}/${LT}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ga="webStorageSupport";class $T{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=$f,this._completeRedirectFn=Kf,this._overrideRedirectResult=aT}async _openPopup(e,t,r,s){var o;Yt((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const i=await fh(e,t,r,cc(),s);return VT(e,i,Kc())}async _openRedirect(e,t,r,s){await this._originValidation(e);const i=await fh(e,t,r,cc(),s);return qw(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:i}=this.eventManagers[t];return s?Promise.resolve(s):(Yt(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await PT(e),r=new dT(e);return t.register("authEvent",s=>(H(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Ga,{type:Ga},s=>{var o;const i=(o=s==null?void 0:s[0])==null?void 0:o[Ga];i!==void 0&&t(!!i),mt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=yT(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Pf()||Ef()||Wc()}}const BT=$T;var ph="@firebase/auth",mh="1.13.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qT{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){H(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jT(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function GT(n){ir(new Sn("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:c}=r.options;H(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:c,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:kf(n)},u=new ow(r,s,i,l);return gw(u,t),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),ir(new Sn("auth-internal",e=>{const t=Rt(e.getProvider("auth").getImmediate());return(r=>new qT(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Lt(ph,mh,jT(n)),Lt(ph,mh,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WT=300,zT=tf("authIdTokenMaxAge")||WT;let gh=null;const HT=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>zT)return;const s=t==null?void 0:t.token;gh!==s&&(gh=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function KT(n=Qo()){const e=Ko(n,"auth");if(e.isInitialized())return e.getImmediate();const t=mw(n,{popupRedirectResolver:BT,persistence:[Jw,Uw,$f]}),r=tf("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=HT(i.toString());Vw(t,o,()=>o(t.currentUser)),Nw(t,c=>o(c))}}const s=Xd("auth");return s&&yw(t,`http://${s}`),t}function QT(){var n;return((n=document.getElementsByTagName("head"))==null?void 0:n[0])??document}aw({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=s=>{const i=St("internal-error");i.customData=s,t(i)},r.type="text/javascript",r.charset="UTF-8",QT().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});GT("Browser");var yh=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var In,Yf;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(T,g){function _(){}_.prototype=g.prototype,T.F=g.prototype,T.prototype=new _,T.prototype.constructor=T,T.D=function(E,I,S){for(var w=Array(arguments.length-2),ee=2;ee<arguments.length;ee++)w[ee-2]=arguments[ee];return g.prototype[I].apply(E,w)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,t),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(T,g,_){_||(_=0);const E=Array(16);if(typeof g=="string")for(var I=0;I<16;++I)E[I]=g.charCodeAt(_++)|g.charCodeAt(_++)<<8|g.charCodeAt(_++)<<16|g.charCodeAt(_++)<<24;else for(I=0;I<16;++I)E[I]=g[_++]|g[_++]<<8|g[_++]<<16|g[_++]<<24;g=T.g[0],_=T.g[1],I=T.g[2];let S=T.g[3],w;w=g+(S^_&(I^S))+E[0]+3614090360&4294967295,g=_+(w<<7&4294967295|w>>>25),w=S+(I^g&(_^I))+E[1]+3905402710&4294967295,S=g+(w<<12&4294967295|w>>>20),w=I+(_^S&(g^_))+E[2]+606105819&4294967295,I=S+(w<<17&4294967295|w>>>15),w=_+(g^I&(S^g))+E[3]+3250441966&4294967295,_=I+(w<<22&4294967295|w>>>10),w=g+(S^_&(I^S))+E[4]+4118548399&4294967295,g=_+(w<<7&4294967295|w>>>25),w=S+(I^g&(_^I))+E[5]+1200080426&4294967295,S=g+(w<<12&4294967295|w>>>20),w=I+(_^S&(g^_))+E[6]+2821735955&4294967295,I=S+(w<<17&4294967295|w>>>15),w=_+(g^I&(S^g))+E[7]+4249261313&4294967295,_=I+(w<<22&4294967295|w>>>10),w=g+(S^_&(I^S))+E[8]+1770035416&4294967295,g=_+(w<<7&4294967295|w>>>25),w=S+(I^g&(_^I))+E[9]+2336552879&4294967295,S=g+(w<<12&4294967295|w>>>20),w=I+(_^S&(g^_))+E[10]+4294925233&4294967295,I=S+(w<<17&4294967295|w>>>15),w=_+(g^I&(S^g))+E[11]+2304563134&4294967295,_=I+(w<<22&4294967295|w>>>10),w=g+(S^_&(I^S))+E[12]+1804603682&4294967295,g=_+(w<<7&4294967295|w>>>25),w=S+(I^g&(_^I))+E[13]+4254626195&4294967295,S=g+(w<<12&4294967295|w>>>20),w=I+(_^S&(g^_))+E[14]+2792965006&4294967295,I=S+(w<<17&4294967295|w>>>15),w=_+(g^I&(S^g))+E[15]+1236535329&4294967295,_=I+(w<<22&4294967295|w>>>10),w=g+(I^S&(_^I))+E[1]+4129170786&4294967295,g=_+(w<<5&4294967295|w>>>27),w=S+(_^I&(g^_))+E[6]+3225465664&4294967295,S=g+(w<<9&4294967295|w>>>23),w=I+(g^_&(S^g))+E[11]+643717713&4294967295,I=S+(w<<14&4294967295|w>>>18),w=_+(S^g&(I^S))+E[0]+3921069994&4294967295,_=I+(w<<20&4294967295|w>>>12),w=g+(I^S&(_^I))+E[5]+3593408605&4294967295,g=_+(w<<5&4294967295|w>>>27),w=S+(_^I&(g^_))+E[10]+38016083&4294967295,S=g+(w<<9&4294967295|w>>>23),w=I+(g^_&(S^g))+E[15]+3634488961&4294967295,I=S+(w<<14&4294967295|w>>>18),w=_+(S^g&(I^S))+E[4]+3889429448&4294967295,_=I+(w<<20&4294967295|w>>>12),w=g+(I^S&(_^I))+E[9]+568446438&4294967295,g=_+(w<<5&4294967295|w>>>27),w=S+(_^I&(g^_))+E[14]+3275163606&4294967295,S=g+(w<<9&4294967295|w>>>23),w=I+(g^_&(S^g))+E[3]+4107603335&4294967295,I=S+(w<<14&4294967295|w>>>18),w=_+(S^g&(I^S))+E[8]+1163531501&4294967295,_=I+(w<<20&4294967295|w>>>12),w=g+(I^S&(_^I))+E[13]+2850285829&4294967295,g=_+(w<<5&4294967295|w>>>27),w=S+(_^I&(g^_))+E[2]+4243563512&4294967295,S=g+(w<<9&4294967295|w>>>23),w=I+(g^_&(S^g))+E[7]+1735328473&4294967295,I=S+(w<<14&4294967295|w>>>18),w=_+(S^g&(I^S))+E[12]+2368359562&4294967295,_=I+(w<<20&4294967295|w>>>12),w=g+(_^I^S)+E[5]+4294588738&4294967295,g=_+(w<<4&4294967295|w>>>28),w=S+(g^_^I)+E[8]+2272392833&4294967295,S=g+(w<<11&4294967295|w>>>21),w=I+(S^g^_)+E[11]+1839030562&4294967295,I=S+(w<<16&4294967295|w>>>16),w=_+(I^S^g)+E[14]+4259657740&4294967295,_=I+(w<<23&4294967295|w>>>9),w=g+(_^I^S)+E[1]+2763975236&4294967295,g=_+(w<<4&4294967295|w>>>28),w=S+(g^_^I)+E[4]+1272893353&4294967295,S=g+(w<<11&4294967295|w>>>21),w=I+(S^g^_)+E[7]+4139469664&4294967295,I=S+(w<<16&4294967295|w>>>16),w=_+(I^S^g)+E[10]+3200236656&4294967295,_=I+(w<<23&4294967295|w>>>9),w=g+(_^I^S)+E[13]+681279174&4294967295,g=_+(w<<4&4294967295|w>>>28),w=S+(g^_^I)+E[0]+3936430074&4294967295,S=g+(w<<11&4294967295|w>>>21),w=I+(S^g^_)+E[3]+3572445317&4294967295,I=S+(w<<16&4294967295|w>>>16),w=_+(I^S^g)+E[6]+76029189&4294967295,_=I+(w<<23&4294967295|w>>>9),w=g+(_^I^S)+E[9]+3654602809&4294967295,g=_+(w<<4&4294967295|w>>>28),w=S+(g^_^I)+E[12]+3873151461&4294967295,S=g+(w<<11&4294967295|w>>>21),w=I+(S^g^_)+E[15]+530742520&4294967295,I=S+(w<<16&4294967295|w>>>16),w=_+(I^S^g)+E[2]+3299628645&4294967295,_=I+(w<<23&4294967295|w>>>9),w=g+(I^(_|~S))+E[0]+4096336452&4294967295,g=_+(w<<6&4294967295|w>>>26),w=S+(_^(g|~I))+E[7]+1126891415&4294967295,S=g+(w<<10&4294967295|w>>>22),w=I+(g^(S|~_))+E[14]+2878612391&4294967295,I=S+(w<<15&4294967295|w>>>17),w=_+(S^(I|~g))+E[5]+4237533241&4294967295,_=I+(w<<21&4294967295|w>>>11),w=g+(I^(_|~S))+E[12]+1700485571&4294967295,g=_+(w<<6&4294967295|w>>>26),w=S+(_^(g|~I))+E[3]+2399980690&4294967295,S=g+(w<<10&4294967295|w>>>22),w=I+(g^(S|~_))+E[10]+4293915773&4294967295,I=S+(w<<15&4294967295|w>>>17),w=_+(S^(I|~g))+E[1]+2240044497&4294967295,_=I+(w<<21&4294967295|w>>>11),w=g+(I^(_|~S))+E[8]+1873313359&4294967295,g=_+(w<<6&4294967295|w>>>26),w=S+(_^(g|~I))+E[15]+4264355552&4294967295,S=g+(w<<10&4294967295|w>>>22),w=I+(g^(S|~_))+E[6]+2734768916&4294967295,I=S+(w<<15&4294967295|w>>>17),w=_+(S^(I|~g))+E[13]+1309151649&4294967295,_=I+(w<<21&4294967295|w>>>11),w=g+(I^(_|~S))+E[4]+4149444226&4294967295,g=_+(w<<6&4294967295|w>>>26),w=S+(_^(g|~I))+E[11]+3174756917&4294967295,S=g+(w<<10&4294967295|w>>>22),w=I+(g^(S|~_))+E[2]+718787259&4294967295,I=S+(w<<15&4294967295|w>>>17),w=_+(S^(I|~g))+E[9]+3951481745&4294967295,T.g[0]=T.g[0]+g&4294967295,T.g[1]=T.g[1]+(I+(w<<21&4294967295|w>>>11))&4294967295,T.g[2]=T.g[2]+I&4294967295,T.g[3]=T.g[3]+S&4294967295}r.prototype.v=function(T,g){g===void 0&&(g=T.length);const _=g-this.blockSize,E=this.C;let I=this.h,S=0;for(;S<g;){if(I==0)for(;S<=_;)s(this,T,S),S+=this.blockSize;if(typeof T=="string"){for(;S<g;)if(E[I++]=T.charCodeAt(S++),I==this.blockSize){s(this,E),I=0;break}}else for(;S<g;)if(E[I++]=T[S++],I==this.blockSize){s(this,E),I=0;break}}this.h=I,this.o+=g},r.prototype.A=function(){var T=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);T[0]=128;for(var g=1;g<T.length-8;++g)T[g]=0;g=this.o*8;for(var _=T.length-8;_<T.length;++_)T[_]=g&255,g/=256;for(this.v(T),T=Array(16),g=0,_=0;_<4;++_)for(let E=0;E<32;E+=8)T[g++]=this.g[_]>>>E&255;return T};function i(T,g){var _=c;return Object.prototype.hasOwnProperty.call(_,T)?_[T]:_[T]=g(T)}function o(T,g){this.h=g;const _=[];let E=!0;for(let I=T.length-1;I>=0;I--){const S=T[I]|0;E&&S==g||(_[I]=S,E=!1)}this.g=_}var c={};function l(T){return-128<=T&&T<128?i(T,function(g){return new o([g|0],g<0?-1:0)}):new o([T|0],T<0?-1:0)}function u(T){if(isNaN(T)||!isFinite(T))return p;if(T<0)return C(u(-T));const g=[];let _=1;for(let E=0;T>=_;E++)g[E]=T/_|0,_*=4294967296;return new o(g,0)}function d(T,g){if(T.length==0)throw Error("number format error: empty string");if(g=g||10,g<2||36<g)throw Error("radix out of range: "+g);if(T.charAt(0)=="-")return C(d(T.substring(1),g));if(T.indexOf("-")>=0)throw Error('number format error: interior "-" character');const _=u(Math.pow(g,8));let E=p;for(let S=0;S<T.length;S+=8){var I=Math.min(8,T.length-S);const w=parseInt(T.substring(S,S+I),g);I<8?(I=u(Math.pow(g,I)),E=E.j(I).add(u(w))):(E=E.j(_),E=E.add(u(w)))}return E}var p=l(0),y=l(1),v=l(16777216);n=o.prototype,n.m=function(){if(P(this))return-C(this).m();let T=0,g=1;for(let _=0;_<this.g.length;_++){const E=this.i(_);T+=(E>=0?E:4294967296+E)*g,g*=4294967296}return T},n.toString=function(T){if(T=T||10,T<2||36<T)throw Error("radix out of range: "+T);if(k(this))return"0";if(P(this))return"-"+C(this).toString(T);const g=u(Math.pow(T,6));var _=this;let E="";for(;;){const I=L(_,g).g;_=V(_,I.j(g));let S=((_.g.length>0?_.g[0]:_.h)>>>0).toString(T);if(_=I,k(_))return S+E;for(;S.length<6;)S="0"+S;E=S+E}},n.i=function(T){return T<0?0:T<this.g.length?this.g[T]:this.h};function k(T){if(T.h!=0)return!1;for(let g=0;g<T.g.length;g++)if(T.g[g]!=0)return!1;return!0}function P(T){return T.h==-1}n.l=function(T){return T=V(this,T),P(T)?-1:k(T)?0:1};function C(T){const g=T.g.length,_=[];for(let E=0;E<g;E++)_[E]=~T.g[E];return new o(_,~T.h).add(y)}n.abs=function(){return P(this)?C(this):this},n.add=function(T){const g=Math.max(this.g.length,T.g.length),_=[];let E=0;for(let I=0;I<=g;I++){let S=E+(this.i(I)&65535)+(T.i(I)&65535),w=(S>>>16)+(this.i(I)>>>16)+(T.i(I)>>>16);E=w>>>16,S&=65535,w&=65535,_[I]=w<<16|S}return new o(_,_[_.length-1]&-2147483648?-1:0)};function V(T,g){return T.add(C(g))}n.j=function(T){if(k(this)||k(T))return p;if(P(this))return P(T)?C(this).j(C(T)):C(C(this).j(T));if(P(T))return C(this.j(C(T)));if(this.l(v)<0&&T.l(v)<0)return u(this.m()*T.m());const g=this.g.length+T.g.length,_=[];for(var E=0;E<2*g;E++)_[E]=0;for(E=0;E<this.g.length;E++)for(let I=0;I<T.g.length;I++){const S=this.i(E)>>>16,w=this.i(E)&65535,ee=T.i(I)>>>16,Ee=T.i(I)&65535;_[2*E+2*I]+=w*Ee,O(_,2*E+2*I),_[2*E+2*I+1]+=S*Ee,O(_,2*E+2*I+1),_[2*E+2*I+1]+=w*ee,O(_,2*E+2*I+1),_[2*E+2*I+2]+=S*ee,O(_,2*E+2*I+2)}for(T=0;T<g;T++)_[T]=_[2*T+1]<<16|_[2*T];for(T=g;T<2*g;T++)_[T]=0;return new o(_,0)};function O(T,g){for(;(T[g]&65535)!=T[g];)T[g+1]+=T[g]>>>16,T[g]&=65535,g++}function x(T,g){this.g=T,this.h=g}function L(T,g){if(k(g))throw Error("division by zero");if(k(T))return new x(p,p);if(P(T))return g=L(C(T),g),new x(C(g.g),C(g.h));if(P(g))return g=L(T,C(g)),new x(C(g.g),g.h);if(T.g.length>30){if(P(T)||P(g))throw Error("slowDivide_ only works with positive integers.");for(var _=y,E=g;E.l(T)<=0;)_=q(_),E=q(E);var I=j(_,1),S=j(E,1);for(E=j(E,2),_=j(_,2);!k(E);){var w=S.add(E);w.l(T)<=0&&(I=I.add(_),S=w),E=j(E,1),_=j(_,1)}return g=V(T,I.j(g)),new x(I,g)}for(I=p;T.l(g)>=0;){for(_=Math.max(1,Math.floor(T.m()/g.m())),E=Math.ceil(Math.log(_)/Math.LN2),E=E<=48?1:Math.pow(2,E-48),S=u(_),w=S.j(g);P(w)||w.l(T)>0;)_-=E,S=u(_),w=S.j(g);k(S)&&(S=y),I=I.add(S),T=V(T,w)}return new x(I,T)}n.B=function(T){return L(this,T).h},n.and=function(T){const g=Math.max(this.g.length,T.g.length),_=[];for(let E=0;E<g;E++)_[E]=this.i(E)&T.i(E);return new o(_,this.h&T.h)},n.or=function(T){const g=Math.max(this.g.length,T.g.length),_=[];for(let E=0;E<g;E++)_[E]=this.i(E)|T.i(E);return new o(_,this.h|T.h)},n.xor=function(T){const g=Math.max(this.g.length,T.g.length),_=[];for(let E=0;E<g;E++)_[E]=this.i(E)^T.i(E);return new o(_,this.h^T.h)};function q(T){const g=T.g.length+1,_=[];for(let E=0;E<g;E++)_[E]=T.i(E)<<1|T.i(E-1)>>>31;return new o(_,T.h)}function j(T,g){const _=g>>5;g%=32;const E=T.g.length-_,I=[];for(let S=0;S<E;S++)I[S]=g>0?T.i(S+_)>>>g|T.i(S+_+1)<<32-g:T.i(S+_);return new o(I,T.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,Yf=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=d,In=o}).apply(typeof yh<"u"?yh:typeof self<"u"?self:typeof window<"u"?window:{});var Wi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Jf,Fs,Xf,ao,dc,Zf,ep,tp;(function(){var n,e=Object.defineProperty;function t(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Wi=="object"&&Wi];for(var h=0;h<a.length;++h){var f=a[h];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=t(this);function s(a,h){if(h)e:{var f=r;a=a.split(".");for(var m=0;m<a.length-1;m++){var A=a[m];if(!(A in f))break e;f=f[A]}a=a[a.length-1],m=f[a],h=h(m),h!=m&&h!=null&&e(f,a,{configurable:!0,writable:!0,value:h})}}s("Symbol.dispose",function(a){return a||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(a){return a||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(a){return a||function(h){var f=[],m;for(m in h)Object.prototype.hasOwnProperty.call(h,m)&&f.push([m,h[m]]);return f}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var i=i||{},o=this||self;function c(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function l(a,h,f){return a.call.apply(a.bind,arguments)}function u(a,h,f){return u=l,u.apply(null,arguments)}function d(a,h){var f=Array.prototype.slice.call(arguments,1);return function(){var m=f.slice();return m.push.apply(m,arguments),a.apply(this,m)}}function p(a,h){function f(){}f.prototype=h.prototype,a.Z=h.prototype,a.prototype=new f,a.prototype.constructor=a,a.Ob=function(m,A,R){for(var F=Array(arguments.length-2),J=2;J<arguments.length;J++)F[J-2]=arguments[J];return h.prototype[A].apply(m,F)}}var y=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?a=>a&&AsyncContext.Snapshot.wrap(a):a=>a;function v(a){const h=a.length;if(h>0){const f=Array(h);for(let m=0;m<h;m++)f[m]=a[m];return f}return[]}function k(a,h){for(let m=1;m<arguments.length;m++){const A=arguments[m];var f=typeof A;if(f=f!="object"?f:A?Array.isArray(A)?"array":f:"null",f=="array"||f=="object"&&typeof A.length=="number"){f=a.length||0;const R=A.length||0;a.length=f+R;for(let F=0;F<R;F++)a[f+F]=A[F]}else a.push(A)}}class P{constructor(h,f){this.i=h,this.j=f,this.h=0,this.g=null}get(){let h;return this.h>0?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function C(a){o.setTimeout(()=>{throw a},0)}function V(){var a=T;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class O{constructor(){this.h=this.g=null}add(h,f){const m=x.get();m.set(h,f),this.h?this.h.next=m:this.g=m,this.h=m}}var x=new P(()=>new L,a=>a.reset());class L{constructor(){this.next=this.g=this.h=null}set(h,f){this.h=h,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let q,j=!1,T=new O,g=()=>{const a=Promise.resolve(void 0);q=()=>{a.then(_)}};function _(){for(var a;a=V();){try{a.h.call(a.g)}catch(f){C(f)}var h=x;h.j(a),h.h<100&&(h.h++,a.next=h.g,h.g=a)}j=!1}function E(){this.u=this.u,this.C=this.C}E.prototype.u=!1,E.prototype.dispose=function(){this.u||(this.u=!0,this.N())},E.prototype[Symbol.dispose]=function(){this.dispose()},E.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function I(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}I.prototype.h=function(){this.defaultPrevented=!0};var S=(function(){if(!o.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const f=()=>{};o.addEventListener("test",f,h),o.removeEventListener("test",f,h)}catch{}return a})();function w(a){return/^[\s\xa0]*$/.test(a)}function ee(a,h){I.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a&&this.init(a,h)}p(ee,I),ee.prototype.init=function(a,h){const f=this.type=a.type,m=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget,h||(f=="mouseover"?h=a.fromElement:f=="mouseout"&&(h=a.toElement)),this.relatedTarget=h,m?(this.clientX=m.clientX!==void 0?m.clientX:m.pageX,this.clientY=m.clientY!==void 0?m.clientY:m.pageY,this.screenX=m.screenX||0,this.screenY=m.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=a.pointerType,this.state=a.state,this.i=a,a.defaultPrevented&&ee.Z.h.call(this)},ee.prototype.h=function(){ee.Z.h.call(this);const a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var Ee="closure_listenable_"+(Math.random()*1e6|0),ne=0;function Pt(a,h,f,m,A){this.listener=a,this.proxy=null,this.src=h,this.type=f,this.capture=!!m,this.ha=A,this.key=++ne,this.da=this.fa=!1}function at(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function ct(a,h,f){for(const m in a)h.call(f,a[m],m,a)}function he(a,h){for(const f in a)h.call(void 0,a[f],f,a)}function Ie(a){const h={};for(const f in a)h[f]=a[f];return h}const Me="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function qt(a,h){let f,m;for(let A=1;A<arguments.length;A++){m=arguments[A];for(f in m)a[f]=m[f];for(let R=0;R<Me.length;R++)f=Me[R],Object.prototype.hasOwnProperty.call(m,f)&&(a[f]=m[f])}}function Qe(a){this.src=a,this.g={},this.h=0}Qe.prototype.add=function(a,h,f,m,A){const R=a.toString();a=this.g[R],a||(a=this.g[R]=[],this.h++);const F=lt(a,h,m,A);return F>-1?(h=a[F],f||(h.fa=!1)):(h=new Pt(h,this.src,R,!!m,A),h.fa=f,a.push(h)),h};function gt(a,h){const f=h.type;if(f in a.g){var m=a.g[f],A=Array.prototype.indexOf.call(m,h,void 0),R;(R=A>=0)&&Array.prototype.splice.call(m,A,1),R&&(at(h),a.g[f].length==0&&(delete a.g[f],a.h--))}}function lt(a,h,f,m){for(let A=0;A<a.length;++A){const R=a[A];if(!R.da&&R.listener==h&&R.capture==!!f&&R.ha==m)return A}return-1}var yt="closure_lm_"+(Math.random()*1e6|0),ls={};function Ir(a,h,f,m,A){if(Array.isArray(h)){for(let R=0;R<h.length;R++)Ir(a,h[R],f,m,A);return null}return f=wt(f),a&&a[Ee]?a.J(h,f,c(m)?!!m.capture:!1,A):$(a,h,f,!1,m,A)}function $(a,h,f,m,A,R){if(!h)throw Error("Invalid event type");const F=c(A)?!!A.capture:!!A;let J=Er(a);if(J||(a[yt]=J=new Qe(a)),f=J.add(h,f,m,F,R),f.proxy)return f;if(m=K(),f.proxy=m,m.src=a,m.listener=f,a.addEventListener)S||(A=F),A===void 0&&(A=!1),a.addEventListener(h.toString(),m,A);else if(a.attachEvent)a.attachEvent(et(h.toString()),m);else if(a.addListener&&a.removeListener)a.addListener(m);else throw Error("addEventListener and attachEvent are unavailable.");return f}function K(){function a(f){return h.call(a.src,a.listener,f)}const h=_t;return a}function Ze(a,h,f,m,A){if(Array.isArray(h))for(var R=0;R<h.length;R++)Ze(a,h[R],f,m,A);else m=c(m)?!!m.capture:!!m,f=wt(f),a&&a[Ee]?(a=a.i,R=String(h).toString(),R in a.g&&(h=a.g[R],f=lt(h,f,m,A),f>-1&&(at(h[f]),Array.prototype.splice.call(h,f,1),h.length==0&&(delete a.g[R],a.h--)))):a&&(a=Er(a))&&(h=a.g[h.toString()],a=-1,h&&(a=lt(h,f,m,A)),(f=a>-1?h[a]:null)&&je(f))}function je(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[Ee])gt(h.i,a);else{var f=a.type,m=a.proxy;h.removeEventListener?h.removeEventListener(f,m,a.capture):h.detachEvent?h.detachEvent(et(f),m):h.addListener&&h.removeListener&&h.removeListener(m),(f=Er(h))?(gt(f,a),f.h==0&&(f.src=null,h[yt]=null)):at(a)}}}function et(a){return a in ls?ls[a]:ls[a]="on"+a}function _t(a,h){if(a.da)a=!0;else{h=new ee(h,this);const f=a.listener,m=a.ha||a.src;a.fa&&je(a),a=f.call(m,h)}return a}function Er(a){return a=a[yt],a instanceof Qe?a:null}var us="__closure_events_fn_"+(Math.random()*1e9>>>0);function wt(a){return typeof a=="function"?a:(a[us]||(a[us]=function(h){return a.handleEvent(h)}),a[us])}function Fe(){E.call(this),this.i=new Qe(this),this.M=this,this.G=null}p(Fe,E),Fe.prototype[Ee]=!0,Fe.prototype.removeEventListener=function(a,h,f,m){Ze(this,a,h,f,m)};function Ge(a,h){var f,m=a.G;if(m)for(f=[];m;m=m.G)f.push(m);if(a=a.M,m=h.type||h,typeof h=="string")h=new I(h,a);else if(h instanceof I)h.target=h.target||a;else{var A=h;h=new I(m,a),qt(h,A)}A=!0;let R,F;if(f)for(F=f.length-1;F>=0;F--)R=h.g=f[F],A=Di(R,m,!0,h)&&A;if(R=h.g=a,A=Di(R,m,!0,h)&&A,A=Di(R,m,!1,h)&&A,f)for(F=0;F<f.length;F++)R=h.g=f[F],A=Di(R,m,!1,h)&&A}Fe.prototype.N=function(){if(Fe.Z.N.call(this),this.i){var a=this.i;for(const h in a.g){const f=a.g[h];for(let m=0;m<f.length;m++)at(f[m]);delete a.g[h],a.h--}}this.G=null},Fe.prototype.J=function(a,h,f,m){return this.i.add(String(a),h,!1,f,m)},Fe.prototype.K=function(a,h,f,m){return this.i.add(String(a),h,!0,f,m)};function Di(a,h,f,m){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();let A=!0;for(let R=0;R<h.length;++R){const F=h[R];if(F&&!F.da&&F.capture==f){const J=F.listener,Pe=F.ha||F.src;F.fa&&gt(a.i,F),A=J.call(Pe,m)!==!1&&A}}return A&&!m.defaultPrevented}function kg(a,h){if(typeof a!="function")if(a&&typeof a.handleEvent=="function")a=u(a.handleEvent,a);else throw Error("Invalid listener argument");return Number(h)>2147483647?-1:o.setTimeout(a,h||0)}function Kl(a){a.g=kg(()=>{a.g=null,a.i&&(a.i=!1,Kl(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class Cg extends E{constructor(h,f){super(),this.m=h,this.l=f,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:Kl(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function hs(a){E.call(this),this.h=a,this.g={}}p(hs,E);var Ql=[];function Yl(a){ct(a.g,function(h,f){this.g.hasOwnProperty(f)&&je(h)},a),a.g={}}hs.prototype.N=function(){hs.Z.N.call(this),Yl(this)},hs.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Ia=o.JSON.stringify,xg=o.JSON.parse,Dg=class{stringify(a){return o.JSON.stringify(a,void 0)}parse(a){return o.JSON.parse(a,void 0)}};function Jl(){}function Xl(){}var ds={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Ea(){I.call(this,"d")}p(Ea,I);function va(){I.call(this,"c")}p(va,I);var On={},Zl=null;function Ni(){return Zl=Zl||new Fe}On.Ia="serverreachability";function eu(a){I.call(this,On.Ia,a)}p(eu,I);function fs(a){const h=Ni();Ge(h,new eu(h))}On.STAT_EVENT="statevent";function tu(a,h){I.call(this,On.STAT_EVENT,a),this.stat=h}p(tu,I);function We(a){const h=Ni();Ge(h,new tu(h,a))}On.Ja="timingevent";function nu(a,h){I.call(this,On.Ja,a),this.size=h}p(nu,I);function ps(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){a()},h)}function ms(){this.g=!0}ms.prototype.ua=function(){this.g=!1};function Ng(a,h,f,m,A,R){a.info(function(){if(a.g)if(R){var F="",J=R.split("&");for(let le=0;le<J.length;le++){var Pe=J[le].split("=");if(Pe.length>1){const xe=Pe[0];Pe=Pe[1];const Ct=xe.split("_");F=Ct.length>=2&&Ct[1]=="type"?F+(xe+"="+Pe+"&"):F+(xe+"=redacted&")}}}else F=null;else F=R;return"XMLHTTP REQ ("+m+") [attempt "+A+"]: "+h+`
`+f+`
`+F})}function Vg(a,h,f,m,A,R,F){a.info(function(){return"XMLHTTP RESP ("+m+") [ attempt "+A+"]: "+h+`
`+f+`
`+R+" "+F})}function vr(a,h,f,m){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+Lg(a,f)+(m?" "+m:"")})}function Og(a,h){a.info(function(){return"TIMEOUT: "+h})}ms.prototype.info=function(){};function Lg(a,h){if(!a.g)return h;if(!h)return null;try{const R=JSON.parse(h);if(R){for(a=0;a<R.length;a++)if(Array.isArray(R[a])){var f=R[a];if(!(f.length<2)){var m=f[1];if(Array.isArray(m)&&!(m.length<1)){var A=m[0];if(A!="noop"&&A!="stop"&&A!="close")for(let F=1;F<m.length;F++)m[F]=""}}}}return Ia(R)}catch{return h}}var Vi={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},ru={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},su;function Sa(){}p(Sa,Jl),Sa.prototype.g=function(){return new XMLHttpRequest},su=new Sa;function gs(a){return encodeURIComponent(String(a))}function Mg(a){var h=1;a=a.split(":");const f=[];for(;h>0&&a.length;)f.push(a.shift()),h--;return a.length&&f.push(a.join(":")),f}function tn(a,h,f,m){this.j=a,this.i=h,this.l=f,this.S=m||1,this.V=new hs(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new iu}function iu(){this.i=null,this.g="",this.h=!1}var ou={},ba={};function Aa(a,h,f){a.M=1,a.A=Li(kt(h)),a.u=f,a.R=!0,au(a,null)}function au(a,h){a.F=Date.now(),Oi(a),a.B=kt(a.A);var f=a.B,m=a.S;Array.isArray(m)||(m=[String(m)]),Tu(f.i,"t",m),a.C=0,f=a.j.L,a.h=new iu,a.g=Fu(a.j,f?h:null,!a.u),a.P>0&&(a.O=new Cg(u(a.Y,a,a.g),a.P)),h=a.V,f=a.g,m=a.ba;var A="readystatechange";Array.isArray(A)||(A&&(Ql[0]=A.toString()),A=Ql);for(let R=0;R<A.length;R++){const F=Ir(f,A[R],m||h.handleEvent,!1,h.h||h);if(!F)break;h.g[F.key]=F}h=a.J?Ie(a.J):{},a.u?(a.v||(a.v="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.B,a.v,a.u,h)):(a.v="GET",a.g.ea(a.B,a.v,null,h)),fs(),Ng(a.i,a.v,a.B,a.l,a.S,a.u)}tn.prototype.ba=function(a){a=a.target;const h=this.O;h&&sn(a)==3?h.j():this.Y(a)},tn.prototype.Y=function(a){try{if(a==this.g)e:{const J=sn(this.g),Pe=this.g.ya(),le=this.g.ca();if(!(J<3)&&(J!=3||this.g&&(this.h.h||this.g.la()||Ru(this.g)))){this.K||J!=4||Pe==7||(Pe==8||le<=0?fs(3):fs(2)),Ra(this);var h=this.g.ca();this.X=h;var f=Fg(this);if(this.o=h==200,Vg(this.i,this.v,this.B,this.l,this.S,J,h),this.o){if(this.U&&!this.L){t:{if(this.g){var m,A=this.g;if((m=A.g?A.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!w(m)){var R=m;break t}}R=null}if(a=R)vr(this.i,this.l,a,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Pa(this,a);else{this.o=!1,this.m=3,We(12),Ln(this),ys(this);break e}}if(this.R){a=!0;let xe;for(;!this.K&&this.C<f.length;)if(xe=Ug(this,f),xe==ba){J==4&&(this.m=4,We(14),a=!1),vr(this.i,this.l,null,"[Incomplete Response]");break}else if(xe==ou){this.m=4,We(15),vr(this.i,this.l,f,"[Invalid Chunk]"),a=!1;break}else vr(this.i,this.l,xe,null),Pa(this,xe);if(cu(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),J!=4||f.length!=0||this.h.h||(this.m=1,We(16),a=!1),this.o=this.o&&a,!a)vr(this.i,this.l,f,"[Invalid Chunked Response]"),Ln(this),ys(this);else if(f.length>0&&!this.W){this.W=!0;var F=this.j;F.g==this&&F.aa&&!F.P&&(F.j.info("Great, no buffering proxy detected. Bytes received: "+f.length),La(F),F.P=!0,We(11))}}else vr(this.i,this.l,f,null),Pa(this,f);J==4&&Ln(this),this.o&&!this.K&&(J==4?Vu(this.j,this):(this.o=!1,Oi(this)))}else Zg(this.g),h==400&&f.indexOf("Unknown SID")>0?(this.m=3,We(12)):(this.m=0,We(13)),Ln(this),ys(this)}}}catch{}finally{}};function Fg(a){if(!cu(a))return a.g.la();const h=Ru(a.g);if(h==="")return"";let f="";const m=h.length,A=sn(a.g)==4;if(!a.h.i){if(typeof TextDecoder>"u")return Ln(a),ys(a),"";a.h.i=new o.TextDecoder}for(let R=0;R<m;R++)a.h.h=!0,f+=a.h.i.decode(h[R],{stream:!(A&&R==m-1)});return h.length=0,a.h.g+=f,a.C=0,a.h.g}function cu(a){return a.g?a.v=="GET"&&a.M!=2&&a.j.Aa:!1}function Ug(a,h){var f=a.C,m=h.indexOf(`
`,f);return m==-1?ba:(f=Number(h.substring(f,m)),isNaN(f)?ou:(m+=1,m+f>h.length?ba:(h=h.slice(m,m+f),a.C=m+f,h)))}tn.prototype.cancel=function(){this.K=!0,Ln(this)};function Oi(a){a.T=Date.now()+a.H,lu(a,a.H)}function lu(a,h){if(a.D!=null)throw Error("WatchDog timer not null");a.D=ps(u(a.aa,a),h)}function Ra(a){a.D&&(o.clearTimeout(a.D),a.D=null)}tn.prototype.aa=function(){this.D=null;const a=Date.now();a-this.T>=0?(Og(this.i,this.B),this.M!=2&&(fs(),We(17)),Ln(this),this.m=2,ys(this)):lu(this,this.T-a)};function ys(a){a.j.I==0||a.K||Vu(a.j,a)}function Ln(a){Ra(a);var h=a.O;h&&typeof h.dispose=="function"&&h.dispose(),a.O=null,Yl(a.V),a.g&&(h=a.g,a.g=null,h.abort(),h.dispose())}function Pa(a,h){try{var f=a.j;if(f.I!=0&&(f.g==a||ka(f.h,a))){if(!a.L&&ka(f.h,a)&&f.I==3){try{var m=f.Ba.g.parse(h)}catch{m=null}if(Array.isArray(m)&&m.length==3){var A=m;if(A[0]==0){e:if(!f.v){if(f.g)if(f.g.F+3e3<a.F)Bi(f),Ui(f);else break e;Oa(f),We(18)}}else f.xa=A[1],0<f.xa-f.K&&A[2]<37500&&f.F&&f.A==0&&!f.C&&(f.C=ps(u(f.Va,f),6e3));du(f.h)<=1&&f.ta&&(f.ta=void 0)}else Fn(f,11)}else if((a.L||f.g==a)&&Bi(f),!w(h))for(A=f.Ba.g.parse(h),h=0;h<A.length;h++){let le=A[h];const xe=le[0];if(!(xe<=f.K))if(f.K=xe,le=le[1],f.I==2)if(le[0]=="c"){f.M=le[1],f.ba=le[2];const Ct=le[3];Ct!=null&&(f.ka=Ct,f.j.info("VER="+f.ka));const Un=le[4];Un!=null&&(f.za=Un,f.j.info("SVER="+f.za));const on=le[5];on!=null&&typeof on=="number"&&on>0&&(m=1.5*on,f.O=m,f.j.info("backChannelRequestTimeoutMs_="+m)),m=f;const an=a.g;if(an){const ji=an.g?an.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ji){var R=m.h;R.g||ji.indexOf("spdy")==-1&&ji.indexOf("quic")==-1&&ji.indexOf("h2")==-1||(R.j=R.l,R.g=new Set,R.h&&(Ca(R,R.h),R.h=null))}if(m.G){const Ma=an.g?an.g.getResponseHeader("X-HTTP-Session-Id"):null;Ma&&(m.wa=Ma,fe(m.J,m.G,Ma))}}f.I=3,f.l&&f.l.ra(),f.aa&&(f.T=Date.now()-a.F,f.j.info("Handshake RTT: "+f.T+"ms")),m=f;var F=a;if(m.na=Mu(m,m.L?m.ba:null,m.W),F.L){fu(m.h,F);var J=F,Pe=m.O;Pe&&(J.H=Pe),J.D&&(Ra(J),Oi(J)),m.g=F}else Du(m);f.i.length>0&&$i(f)}else le[0]!="stop"&&le[0]!="close"||Fn(f,7);else f.I==3&&(le[0]=="stop"||le[0]=="close"?le[0]=="stop"?Fn(f,7):Va(f):le[0]!="noop"&&f.l&&f.l.qa(le),f.A=0)}}fs(4)}catch{}}var $g=class{constructor(a,h){this.g=a,this.map=h}};function uu(a){this.l=a||10,o.PerformanceNavigationTiming?(a=o.performance.getEntriesByType("navigation"),a=a.length>0&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function hu(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function du(a){return a.h?1:a.g?a.g.size:0}function ka(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function Ca(a,h){a.g?a.g.add(h):a.h=h}function fu(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}uu.prototype.cancel=function(){if(this.i=pu(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function pu(a){if(a.h!=null)return a.i.concat(a.h.G);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const f of a.g.values())h=h.concat(f.G);return h}return v(a.i)}var mu=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Bg(a,h){if(a){a=a.split("&");for(let f=0;f<a.length;f++){const m=a[f].indexOf("=");let A,R=null;m>=0?(A=a[f].substring(0,m),R=a[f].substring(m+1)):A=a[f],h(A,R?decodeURIComponent(R.replace(/\+/g," ")):"")}}}function nn(a){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let h;a instanceof nn?(this.l=a.l,_s(this,a.j),this.o=a.o,this.g=a.g,ws(this,a.u),this.h=a.h,xa(this,Iu(a.i)),this.m=a.m):a&&(h=String(a).match(mu))?(this.l=!1,_s(this,h[1]||"",!0),this.o=Ts(h[2]||""),this.g=Ts(h[3]||"",!0),ws(this,h[4]),this.h=Ts(h[5]||"",!0),xa(this,h[6]||"",!0),this.m=Ts(h[7]||"")):(this.l=!1,this.i=new Es(null,this.l))}nn.prototype.toString=function(){const a=[];var h=this.j;h&&a.push(Is(h,gu,!0),":");var f=this.g;return(f||h=="file")&&(a.push("//"),(h=this.o)&&a.push(Is(h,gu,!0),"@"),a.push(gs(f).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.u,f!=null&&a.push(":",String(f))),(f=this.h)&&(this.g&&f.charAt(0)!="/"&&a.push("/"),a.push(Is(f,f.charAt(0)=="/"?Gg:jg,!0))),(f=this.i.toString())&&a.push("?",f),(f=this.m)&&a.push("#",Is(f,zg)),a.join("")},nn.prototype.resolve=function(a){const h=kt(this);let f=!!a.j;f?_s(h,a.j):f=!!a.o,f?h.o=a.o:f=!!a.g,f?h.g=a.g:f=a.u!=null;var m=a.h;if(f)ws(h,a.u);else if(f=!!a.h){if(m.charAt(0)!="/")if(this.g&&!this.h)m="/"+m;else{var A=h.h.lastIndexOf("/");A!=-1&&(m=h.h.slice(0,A+1)+m)}if(A=m,A==".."||A==".")m="";else if(A.indexOf("./")!=-1||A.indexOf("/.")!=-1){m=A.lastIndexOf("/",0)==0,A=A.split("/");const R=[];for(let F=0;F<A.length;){const J=A[F++];J=="."?m&&F==A.length&&R.push(""):J==".."?((R.length>1||R.length==1&&R[0]!="")&&R.pop(),m&&F==A.length&&R.push("")):(R.push(J),m=!0)}m=R.join("/")}else m=A}return f?h.h=m:f=a.i.toString()!=="",f?xa(h,Iu(a.i)):f=!!a.m,f&&(h.m=a.m),h};function kt(a){return new nn(a)}function _s(a,h,f){a.j=f?Ts(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function ws(a,h){if(h){if(h=Number(h),isNaN(h)||h<0)throw Error("Bad port number "+h);a.u=h}else a.u=null}function xa(a,h,f){h instanceof Es?(a.i=h,Hg(a.i,a.l)):(f||(h=Is(h,Wg)),a.i=new Es(h,a.l))}function fe(a,h,f){a.i.set(h,f)}function Li(a){return fe(a,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),a}function Ts(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Is(a,h,f){return typeof a=="string"?(a=encodeURI(a).replace(h,qg),f&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function qg(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var gu=/[#\/\?@]/g,jg=/[#\?:]/g,Gg=/[#\?]/g,Wg=/[#\?@]/g,zg=/#/g;function Es(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function Mn(a){a.g||(a.g=new Map,a.h=0,a.i&&Bg(a.i,function(h,f){a.add(decodeURIComponent(h.replace(/\+/g," ")),f)}))}n=Es.prototype,n.add=function(a,h){Mn(this),this.i=null,a=Sr(this,a);let f=this.g.get(a);return f||this.g.set(a,f=[]),f.push(h),this.h+=1,this};function yu(a,h){Mn(a),h=Sr(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function _u(a,h){return Mn(a),h=Sr(a,h),a.g.has(h)}n.forEach=function(a,h){Mn(this),this.g.forEach(function(f,m){f.forEach(function(A){a.call(h,A,m,this)},this)},this)};function wu(a,h){Mn(a);let f=[];if(typeof h=="string")_u(a,h)&&(f=f.concat(a.g.get(Sr(a,h))));else for(a=Array.from(a.g.values()),h=0;h<a.length;h++)f=f.concat(a[h]);return f}n.set=function(a,h){return Mn(this),this.i=null,a=Sr(this,a),_u(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},n.get=function(a,h){return a?(a=wu(this,a),a.length>0?String(a[0]):h):h};function Tu(a,h,f){yu(a,h),f.length>0&&(a.i=null,a.g.set(Sr(a,h),v(f)),a.h+=f.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(let m=0;m<h.length;m++){var f=h[m];const A=gs(f);f=wu(this,f);for(let R=0;R<f.length;R++){let F=A;f[R]!==""&&(F+="="+gs(f[R])),a.push(F)}}return this.i=a.join("&")};function Iu(a){const h=new Es;return h.i=a.i,a.g&&(h.g=new Map(a.g),h.h=a.h),h}function Sr(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function Hg(a,h){h&&!a.j&&(Mn(a),a.i=null,a.g.forEach(function(f,m){const A=m.toLowerCase();m!=A&&(yu(this,m),Tu(this,A,f))},a)),a.j=h}function Kg(a,h){const f=new ms;if(o.Image){const m=new Image;m.onload=d(rn,f,"TestLoadImage: loaded",!0,h,m),m.onerror=d(rn,f,"TestLoadImage: error",!1,h,m),m.onabort=d(rn,f,"TestLoadImage: abort",!1,h,m),m.ontimeout=d(rn,f,"TestLoadImage: timeout",!1,h,m),o.setTimeout(function(){m.ontimeout&&m.ontimeout()},1e4),m.src=a}else h(!1)}function Qg(a,h){const f=new ms,m=new AbortController,A=setTimeout(()=>{m.abort(),rn(f,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:m.signal}).then(R=>{clearTimeout(A),R.ok?rn(f,"TestPingServer: ok",!0,h):rn(f,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(A),rn(f,"TestPingServer: error",!1,h)})}function rn(a,h,f,m,A){try{A&&(A.onload=null,A.onerror=null,A.onabort=null,A.ontimeout=null),m(f)}catch{}}function Yg(){this.g=new Dg}function Da(a){this.i=a.Sb||null,this.h=a.ab||!1}p(Da,Jl),Da.prototype.g=function(){return new Mi(this.i,this.h)};function Mi(a,h){Fe.call(this),this.H=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}p(Mi,Fe),n=Mi.prototype,n.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=a,this.D=h,this.readyState=1,Ss(this)},n.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const h={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};a&&(h.body=a),(this.H||o).fetch(new Request(this.D,h)).then(this.Pa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,vs(this)),this.readyState=0},n.Pa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Ss(this)),this.g&&(this.readyState=3,Ss(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Eu(this)}else a.text().then(this.Oa.bind(this),this.ga.bind(this))};function Eu(a){a.j.read().then(a.Ma.bind(a)).catch(a.ga.bind(a))}n.Ma=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.B.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?vs(this):Ss(this),this.readyState==3&&Eu(this)}},n.Oa=function(a){this.g&&(this.response=this.responseText=a,vs(this))},n.Na=function(a){this.g&&(this.response=a,vs(this))},n.ga=function(){this.g&&vs(this)};function vs(a){a.readyState=4,a.l=null,a.j=null,a.B=null,Ss(a)}n.setRequestHeader=function(a,h){this.A.append(a,h)},n.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var f=h.next();!f.done;)f=f.value,a.push(f[0]+": "+f[1]),f=h.next();return a.join(`\r
`)};function Ss(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Mi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function vu(a){let h="";return ct(a,function(f,m){h+=m,h+=":",h+=f,h+=`\r
`}),h}function Na(a,h,f){e:{for(m in f){var m=!1;break e}m=!0}m||(f=vu(f),typeof a=="string"?f!=null&&gs(f):fe(a,h,f))}function we(a){Fe.call(this),this.headers=new Map,this.L=a||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}p(we,Fe);var Jg=/^https?$/i,Xg=["POST","PUT"];n=we.prototype,n.Fa=function(a){this.H=a},n.ea=function(a,h,f,m){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():su.g(),this.g.onreadystatechange=y(u(this.Ca,this));try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(R){Su(this,R);return}if(a=f||"",f=new Map(this.headers),m)if(Object.getPrototypeOf(m)===Object.prototype)for(var A in m)f.set(A,m[A]);else if(typeof m.keys=="function"&&typeof m.get=="function")for(const R of m.keys())f.set(R,m.get(R));else throw Error("Unknown input type for opt_headers: "+String(m));m=Array.from(f.keys()).find(R=>R.toLowerCase()=="content-type"),A=o.FormData&&a instanceof o.FormData,!(Array.prototype.indexOf.call(Xg,h,void 0)>=0)||m||A||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[R,F]of f)this.g.setRequestHeader(R,F);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(a),this.v=!1}catch(R){Su(this,R)}};function Su(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.o=5,bu(a),Fi(a)}function bu(a){a.A||(a.A=!0,Ge(a,"complete"),Ge(a,"error"))}n.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=a||7,Ge(this,"complete"),Ge(this,"abort"),Fi(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Fi(this,!0)),we.Z.N.call(this)},n.Ca=function(){this.u||(this.B||this.v||this.j?Au(this):this.Xa())},n.Xa=function(){Au(this)};function Au(a){if(a.h&&typeof i<"u"){if(a.v&&sn(a)==4)setTimeout(a.Ca.bind(a),0);else if(Ge(a,"readystatechange"),sn(a)==4){a.h=!1;try{const R=a.ca();e:switch(R){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var f;if(!(f=h)){var m;if(m=R===0){let F=String(a.D).match(mu)[1]||null;!F&&o.self&&o.self.location&&(F=o.self.location.protocol.slice(0,-1)),m=!Jg.test(F?F.toLowerCase():"")}f=m}if(f)Ge(a,"complete"),Ge(a,"success");else{a.o=6;try{var A=sn(a)>2?a.g.statusText:""}catch{A=""}a.l=A+" ["+a.ca()+"]",bu(a)}}finally{Fi(a)}}}}function Fi(a,h){if(a.g){a.m&&(clearTimeout(a.m),a.m=null);const f=a.g;a.g=null,h||Ge(a,"ready");try{f.onreadystatechange=null}catch{}}}n.isActive=function(){return!!this.g};function sn(a){return a.g?a.g.readyState:0}n.ca=function(){try{return sn(this)>2?this.g.status:-1}catch{return-1}},n.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.La=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),xg(h)}};function Ru(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.F){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function Zg(a){const h={};a=(a.g&&sn(a)>=2&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let m=0;m<a.length;m++){if(w(a[m]))continue;var f=Mg(a[m]);const A=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const R=h[A]||[];h[A]=R,R.push(f)}he(h,function(m){return m.join(", ")})}n.ya=function(){return this.o},n.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function bs(a,h,f){return f&&f.internalChannelParams&&f.internalChannelParams[a]||h}function Pu(a){this.za=0,this.i=[],this.j=new ms,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=bs("failFast",!1,a),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=bs("baseRetryDelayMs",5e3,a),this.Za=bs("retryDelaySeedMs",1e4,a),this.Ta=bs("forwardChannelMaxRetries",2,a),this.va=bs("forwardChannelRequestTimeoutMs",2e4,a),this.ma=a&&a.xmlHttpFactory||void 0,this.Ua=a&&a.Rb||void 0,this.Aa=a&&a.useFetchStreams||!1,this.O=void 0,this.L=a&&a.supportsCrossDomainXhr||!1,this.M="",this.h=new uu(a&&a.concurrentRequestLimit),this.Ba=new Yg,this.S=a&&a.fastHandshake||!1,this.R=a&&a.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=a&&a.Pb||!1,a&&a.ua&&this.j.ua(),a&&a.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&a&&a.detectBufferingProxy||!1,this.ia=void 0,a&&a.longPollingTimeout&&a.longPollingTimeout>0&&(this.ia=a.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}n=Pu.prototype,n.ka=8,n.I=1,n.connect=function(a,h,f,m){We(0),this.W=a,this.H=h||{},f&&m!==void 0&&(this.H.OSID=f,this.H.OAID=m),this.F=this.X,this.J=Mu(this,null,this.W),$i(this)};function Va(a){if(ku(a),a.I==3){var h=a.V++,f=kt(a.J);if(fe(f,"SID",a.M),fe(f,"RID",h),fe(f,"TYPE","terminate"),As(a,f),h=new tn(a,a.j,h),h.M=2,h.A=Li(kt(f)),f=!1,o.navigator&&o.navigator.sendBeacon)try{f=o.navigator.sendBeacon(h.A.toString(),"")}catch{}!f&&o.Image&&(new Image().src=h.A,f=!0),f||(h.g=Fu(h.j,null),h.g.ea(h.A)),h.F=Date.now(),Oi(h)}Lu(a)}function Ui(a){a.g&&(La(a),a.g.cancel(),a.g=null)}function ku(a){Ui(a),a.v&&(o.clearTimeout(a.v),a.v=null),Bi(a),a.h.cancel(),a.m&&(typeof a.m=="number"&&o.clearTimeout(a.m),a.m=null)}function $i(a){if(!hu(a.h)&&!a.m){a.m=!0;var h=a.Ea;q||g(),j||(q(),j=!0),T.add(h,a),a.D=0}}function ey(a,h){return du(a.h)>=a.h.j-(a.m?1:0)?!1:a.m?(a.i=h.G.concat(a.i),!0):a.I==1||a.I==2||a.D>=(a.Sa?0:a.Ta)?!1:(a.m=ps(u(a.Ea,a,h),Ou(a,a.D)),a.D++,!0)}n.Ea=function(a){if(this.m)if(this.m=null,this.I==1){if(!a){this.V=Math.floor(Math.random()*1e5),a=this.V++;const A=new tn(this,this.j,a);let R=this.o;if(this.U&&(R?(R=Ie(R),qt(R,this.U)):R=this.U),this.u!==null||this.R||(A.J=R,R=null),this.S)e:{for(var h=0,f=0;f<this.i.length;f++){t:{var m=this.i[f];if("__data__"in m.map&&(m=m.map.__data__,typeof m=="string")){m=m.length;break t}m=void 0}if(m===void 0)break;if(h+=m,h>4096){h=f;break e}if(h===4096||f===this.i.length-1){h=f+1;break e}}h=1e3}else h=1e3;h=xu(this,A,h),f=kt(this.J),fe(f,"RID",a),fe(f,"CVER",22),this.G&&fe(f,"X-HTTP-Session-Id",this.G),As(this,f),R&&(this.R?h="headers="+gs(vu(R))+"&"+h:this.u&&Na(f,this.u,R)),Ca(this.h,A),this.Ra&&fe(f,"TYPE","init"),this.S?(fe(f,"$req",h),fe(f,"SID","null"),A.U=!0,Aa(A,f,null)):Aa(A,f,h),this.I=2}}else this.I==3&&(a?Cu(this,a):this.i.length==0||hu(this.h)||Cu(this))};function Cu(a,h){var f;h?f=h.l:f=a.V++;const m=kt(a.J);fe(m,"SID",a.M),fe(m,"RID",f),fe(m,"AID",a.K),As(a,m),a.u&&a.o&&Na(m,a.u,a.o),f=new tn(a,a.j,f,a.D+1),a.u===null&&(f.J=a.o),h&&(a.i=h.G.concat(a.i)),h=xu(a,f,1e3),f.H=Math.round(a.va*.5)+Math.round(a.va*.5*Math.random()),Ca(a.h,f),Aa(f,m,h)}function As(a,h){a.H&&ct(a.H,function(f,m){fe(h,m,f)}),a.l&&ct({},function(f,m){fe(h,m,f)})}function xu(a,h,f){f=Math.min(a.i.length,f);const m=a.l?u(a.l.Ka,a.l,a):null;e:{var A=a.i;let J=-1;for(;;){const Pe=["count="+f];J==-1?f>0?(J=A[0].g,Pe.push("ofs="+J)):J=0:Pe.push("ofs="+J);let le=!0;for(let xe=0;xe<f;xe++){var R=A[xe].g;const Ct=A[xe].map;if(R-=J,R<0)J=Math.max(0,A[xe].g-100),le=!1;else try{R="req"+R+"_"||"";try{var F=Ct instanceof Map?Ct:Object.entries(Ct);for(const[Un,on]of F){let an=on;c(on)&&(an=Ia(on)),Pe.push(R+Un+"="+encodeURIComponent(an))}}catch(Un){throw Pe.push(R+"type="+encodeURIComponent("_badmap")),Un}}catch{m&&m(Ct)}}if(le){F=Pe.join("&");break e}}F=void 0}return a=a.i.splice(0,f),h.G=a,F}function Du(a){if(!a.g&&!a.v){a.Y=1;var h=a.Da;q||g(),j||(q(),j=!0),T.add(h,a),a.A=0}}function Oa(a){return a.g||a.v||a.A>=3?!1:(a.Y++,a.v=ps(u(a.Da,a),Ou(a,a.A)),a.A++,!0)}n.Da=function(){if(this.v=null,Nu(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var a=4*this.T;this.j.info("BP detection timer enabled: "+a),this.B=ps(u(this.Wa,this),a)}},n.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,We(10),Ui(this),Nu(this))};function La(a){a.B!=null&&(o.clearTimeout(a.B),a.B=null)}function Nu(a){a.g=new tn(a,a.j,"rpc",a.Y),a.u===null&&(a.g.J=a.o),a.g.P=0;var h=kt(a.na);fe(h,"RID","rpc"),fe(h,"SID",a.M),fe(h,"AID",a.K),fe(h,"CI",a.F?"0":"1"),!a.F&&a.ia&&fe(h,"TO",a.ia),fe(h,"TYPE","xmlhttp"),As(a,h),a.u&&a.o&&Na(h,a.u,a.o),a.O&&(a.g.H=a.O);var f=a.g;a=a.ba,f.M=1,f.A=Li(kt(h)),f.u=null,f.R=!0,au(f,a)}n.Va=function(){this.C!=null&&(this.C=null,Ui(this),Oa(this),We(19))};function Bi(a){a.C!=null&&(o.clearTimeout(a.C),a.C=null)}function Vu(a,h){var f=null;if(a.g==h){Bi(a),La(a),a.g=null;var m=2}else if(ka(a.h,h))f=h.G,fu(a.h,h),m=1;else return;if(a.I!=0){if(h.o)if(m==1){f=h.u?h.u.length:0,h=Date.now()-h.F;var A=a.D;m=Ni(),Ge(m,new nu(m,f)),$i(a)}else Du(a);else if(A=h.m,A==3||A==0&&h.X>0||!(m==1&&ey(a,h)||m==2&&Oa(a)))switch(f&&f.length>0&&(h=a.h,h.i=h.i.concat(f)),A){case 1:Fn(a,5);break;case 4:Fn(a,10);break;case 3:Fn(a,6);break;default:Fn(a,2)}}}function Ou(a,h){let f=a.Qa+Math.floor(Math.random()*a.Za);return a.isActive()||(f*=2),f*h}function Fn(a,h){if(a.j.info("Error code "+h),h==2){var f=u(a.bb,a),m=a.Ua;const A=!m;m=new nn(m||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||_s(m,"https"),Li(m),A?Kg(m.toString(),f):Qg(m.toString(),f)}else We(2);a.I=0,a.l&&a.l.pa(h),Lu(a),ku(a)}n.bb=function(a){a?(this.j.info("Successfully pinged google.com"),We(2)):(this.j.info("Failed to ping google.com"),We(1))};function Lu(a){if(a.I=0,a.ja=[],a.l){const h=pu(a.h);(h.length!=0||a.i.length!=0)&&(k(a.ja,h),k(a.ja,a.i),a.h.i.length=0,v(a.i),a.i.length=0),a.l.oa()}}function Mu(a,h,f){var m=f instanceof nn?kt(f):new nn(f);if(m.g!="")h&&(m.g=h+"."+m.g),ws(m,m.u);else{var A=o.location;m=A.protocol,h=h?h+"."+A.hostname:A.hostname,A=+A.port;const R=new nn(null);m&&_s(R,m),h&&(R.g=h),A&&ws(R,A),f&&(R.h=f),m=R}return f=a.G,h=a.wa,f&&h&&fe(m,f,h),fe(m,"VER",a.ka),As(a,m),m}function Fu(a,h,f){if(h&&!a.L)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Aa&&!a.ma?new we(new Da({ab:f})):new we(a.ma),h.Fa(a.L),h}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Uu(){}n=Uu.prototype,n.ra=function(){},n.qa=function(){},n.pa=function(){},n.oa=function(){},n.isActive=function(){return!0},n.Ka=function(){};function qi(){}qi.prototype.g=function(a,h){return new tt(a,h)};function tt(a,h){Fe.call(this),this.g=new Pu(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.sa&&(a?a["X-WebChannel-Client-Profile"]=h.sa:a={"X-WebChannel-Client-Profile":h.sa}),this.g.U=a,(a=h&&h.Qb)&&!w(a)&&(this.g.u=a),this.A=h&&h.supportsCrossDomainXhr||!1,this.v=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!w(h)&&(this.g.G=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new br(this)}p(tt,Fe),tt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},tt.prototype.close=function(){Va(this.g)},tt.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var f={};f.__data__=a,a=f}else this.v&&(f={},f.__data__=Ia(a),a=f);h.i.push(new $g(h.Ya++,a)),h.I==3&&$i(h)},tt.prototype.N=function(){this.g.l=null,delete this.j,Va(this.g),delete this.g,tt.Z.N.call(this)};function $u(a){Ea.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const f in h){a=f;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}p($u,Ea);function Bu(){va.call(this),this.status=1}p(Bu,va);function br(a){this.g=a}p(br,Uu),br.prototype.ra=function(){Ge(this.g,"a")},br.prototype.qa=function(a){Ge(this.g,new $u(a))},br.prototype.pa=function(a){Ge(this.g,new Bu)},br.prototype.oa=function(){Ge(this.g,"b")},qi.prototype.createWebChannel=qi.prototype.g,tt.prototype.send=tt.prototype.o,tt.prototype.open=tt.prototype.m,tt.prototype.close=tt.prototype.close,tp=function(){return new qi},ep=function(){return Ni()},Zf=On,dc={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},Vi.NO_ERROR=0,Vi.TIMEOUT=8,Vi.HTTP_ERROR=6,ao=Vi,ru.COMPLETE="complete",Xf=ru,Xl.EventType=ds,ds.OPEN="a",ds.CLOSE="b",ds.ERROR="c",ds.MESSAGE="d",Fe.prototype.listen=Fe.prototype.J,Fs=Xl,we.prototype.listenOnce=we.prototype.K,we.prototype.getLastError=we.prototype.Ha,we.prototype.getLastErrorCode=we.prototype.ya,we.prototype.getStatus=we.prototype.ca,we.prototype.getResponseJson=we.prototype.La,we.prototype.getResponseText=we.prototype.la,we.prototype.send=we.prototype.ea,we.prototype.setWithCredentials=we.prototype.Fa,Jf=we}).apply(typeof Wi<"u"?Wi:typeof self<"u"?self:typeof window<"u"?window:{});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oe{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Oe.UNAUTHENTICATED=new Oe(null),Oe.GOOGLE_CREDENTIALS=new Oe("google-credentials-uid"),Oe.FIRST_PARTY=new Oe("first-party-uid"),Oe.MOCK_USER=new Oe("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let is="12.12.0";function YT(n){is=n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ar=new Uc("@firebase/firestore");function Nr(){return ar.logLevel}function N(n,...e){if(ar.logLevel<=te.DEBUG){const t=e.map(Jc);ar.debug(`Firestore (${is}): ${n}`,...t)}}function He(n,...e){if(ar.logLevel<=te.ERROR){const t=e.map(Jc);ar.error(`Firestore (${is}): ${n}`,...t)}}function bn(n,...e){if(ar.logLevel<=te.WARN){const t=e.map(Jc);ar.warn(`Firestore (${is}): ${n}`,...t)}}function Jc(n){if(typeof n=="string")return n;try{return(function(t){return JSON.stringify(t)})(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G(n,e,t){let r="Unexpected state";typeof e=="string"?r=e:t=e,np(n,r,t)}function np(n,e,t){let r=`FIRESTORE (${is}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{r+=" CONTEXT: "+JSON.stringify(t)}catch{r+=" CONTEXT: "+t}throw He(r),new Error(r)}function W(n,e,t,r){let s="Unexpected state";typeof t=="string"?s=t:r=t,n||np(e,s,r)}function Y(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class B extends Bt{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rp{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class JT{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(Oe.UNAUTHENTICATED)))}shutdown(){}}class XT{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class ZT{constructor(e){this.t=e,this.currentUser=Oe.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){W(this.o===void 0,42304);let r=this.i;const s=l=>this.i!==r?(r=this.i,t(l)):Promise.resolve();let i=new Ft;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Ft,e.enqueueRetryable((()=>s(this.currentUser)))};const o=()=>{const l=i;e.enqueueRetryable((async()=>{await l.promise,await s(this.currentUser)}))},c=l=>{N("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit((l=>c(l))),setTimeout((()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?c(l):(N("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Ft)}}),0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((r=>this.i!==e?(N("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(W(typeof r.accessToken=="string",31837,{l:r}),new rp(r.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return W(e===null||typeof e=="string",2055,{h:e}),new Oe(e)}}class eI{constructor(e,t,r){this.P=e,this.T=t,this.I=r,this.type="FirstParty",this.user=Oe.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class tI{constructor(e,t,r){this.P=e,this.T=t,this.I=r}getToken(){return Promise.resolve(new eI(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(Oe.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class _h{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class nI{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Be(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){W(this.o===void 0,3512);const r=i=>{i.error!=null&&N("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.m;return this.m=i.token,N("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable((()=>r(i)))};const s=i=>{N("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((i=>s(i))),setTimeout((()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):N("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new _h(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(W(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new _h(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rI(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xc{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=rI(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<t&&(r+=e.charAt(s[i]%62))}return r}}function Q(n,e){return n<e?-1:n>e?1:0}function fc(n,e){const t=Math.min(n.length,e.length);for(let r=0;r<t;r++){const s=n.charAt(r),i=e.charAt(r);if(s!==i)return Wa(s)===Wa(i)?Q(s,i):Wa(s)?1:-1}return Q(n.length,e.length)}const sI=55296,iI=57343;function Wa(n){const e=n.charCodeAt(0);return e>=sI&&e<=iI}function Gr(n,e,t){return n.length===e.length&&n.every(((r,s)=>t(r,e[s])))}function sp(n){return n+"\0"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wh="__name__";class xt{constructor(e,t,r){t===void 0?t=0:t>e.length&&G(637,{offset:t,range:e.length}),r===void 0?r=e.length-t:r>e.length-t&&G(1746,{length:r,range:e.length-t}),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return xt.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof xt?e.forEach((r=>{t.push(r)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let s=0;s<r;s++){const i=xt.compareSegments(e.get(s),t.get(s));if(i!==0)return i}return Q(e.length,t.length)}static compareSegments(e,t){const r=xt.isNumericId(e),s=xt.isNumericId(t);return r&&!s?-1:!r&&s?1:r&&s?xt.extractNumericId(e).compare(xt.extractNumericId(t)):fc(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return In.fromString(e.substring(4,e.length-2))}}class ie extends xt{construct(e,t,r){return new ie(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new B(D.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter((s=>s.length>0)))}return new ie(t)}static emptyPath(){return new ie([])}}const oI=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ye extends xt{construct(e,t,r){return new ye(e,t,r)}static isValidIdentifier(e){return oI.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ye.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===wh}static keyField(){return new ye([wh])}static fromServerFormat(e){const t=[];let r="",s=0;const i=()=>{if(r.length===0)throw new B(D.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let o=!1;for(;s<e.length;){const c=e[s];if(c==="\\"){if(s+1===e.length)throw new B(D.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new B(D.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,s+=2}else c==="`"?(o=!o,s++):c!=="."||o?(r+=c,s++):(i(),s++)}if(i(),o)throw new B(D.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ye(t)}static emptyPath(){return new ye([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U{constructor(e){this.path=e}static fromPath(e){return new U(ie.fromString(e))}static fromName(e){return new U(ie.fromString(e).popFirst(5))}static empty(){return new U(ie.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ie.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return ie.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new U(new ie(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ip(n,e,t){if(!t)throw new B(D.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function aI(n,e,t,r){if(e===!0&&r===!0)throw new B(D.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Th(n){if(!U.isDocumentKey(n))throw new B(D.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Ih(n){if(U.isDocumentKey(n))throw new B(D.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function op(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function Zc(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=(function(r){return r.constructor?r.constructor.name:null})(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":G(12329,{type:typeof n})}function ft(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new B(D.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Zc(n);throw new B(D.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Se(n,e){const t={typeString:n};return e&&(t.value=e),t}function Ii(n,e){if(!op(n))throw new B(D.INVALID_ARGUMENT,"JSON must be an object");let t;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in n)){t=`JSON missing required field: '${r}'`;break}const o=n[r];if(s&&typeof o!==s){t=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&o!==i.value){t=`Expected '${r}' field to equal '${i.value}'`;break}}if(t)throw new B(D.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eh=-62135596800,vh=1e6;class oe{static now(){return oe.fromMillis(Date.now())}static fromDate(e){return oe.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*vh);return new oe(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new B(D.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new B(D.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Eh)throw new B(D.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new B(D.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/vh}_compareTo(e){return this.seconds===e.seconds?Q(this.nanoseconds,e.nanoseconds):Q(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:oe._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Ii(e,oe._jsonSchema))return new oe(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Eh;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}oe._jsonSchemaVersion="firestore/timestamp/1.0",oe._jsonSchema={type:Se("string",oe._jsonSchemaVersion),seconds:Se("number"),nanoseconds:Se("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z{static fromTimestamp(e){return new z(e)}static min(){return new z(new oe(0,0))}static max(){return new z(new oe(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ri=-1;class Po{constructor(e,t,r,s){this.indexId=e,this.collectionGroup=t,this.fields=r,this.indexState=s}}function pc(n){return n.fields.find((e=>e.kind===2))}function jn(n){return n.fields.filter((e=>e.kind!==2))}Po.UNKNOWN_ID=-1;class co{constructor(e,t){this.fieldPath=e,this.kind=t}}class si{constructor(e,t){this.sequenceNumber=e,this.offset=t}static empty(){return new si(0,ot.min())}}function cI(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=z.fromTimestamp(r===1e9?new oe(t+1,0):new oe(t,r));return new ot(s,U.empty(),e)}function ap(n){return new ot(n.readTime,n.key,ri)}class ot{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new ot(z.min(),U.empty(),ri)}static max(){return new ot(z.max(),U.empty(),ri)}}function el(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=U.comparator(n.documentKey,e.documentKey),t!==0?t:Q(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cp="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class lp{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yr(n){if(n.code!==D.FAILED_PRECONDITION||n.message!==cp)throw n;N("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&G(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new b(((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(t,i).next(r,s)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof b?t:b.resolve(t)}catch(t){return b.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):b.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):b.reject(t)}static resolve(e){return new b(((t,r)=>{t(e)}))}static reject(e){return new b(((t,r)=>{r(e)}))}static waitFor(e){return new b(((t,r)=>{let s=0,i=0,o=!1;e.forEach((c=>{++s,c.next((()=>{++i,o&&i===s&&t()}),(l=>r(l)))})),o=!0,i===s&&t()}))}static or(e){let t=b.resolve(!1);for(const r of e)t=t.next((s=>s?b.resolve(s):r()));return t}static forEach(e,t){const r=[];return e.forEach(((s,i)=>{r.push(t.call(this,s,i))})),this.waitFor(r)}static mapArray(e,t){return new b(((r,s)=>{const i=e.length,o=new Array(i);let c=0;for(let l=0;l<i;l++){const u=l;t(e[u]).next((d=>{o[u]=d,++c,c===i&&r(o)}),(d=>s(d)))}}))}static doWhile(e,t){return new b(((r,s)=>{const i=()=>{e()===!0?t().next((()=>{i()}),s):r()};i()}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nt="SimpleDb";class ea{static open(e,t,r,s){try{return new ea(t,e.transaction(s,r))}catch(i){throw new Gs(t,i)}}constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.S=new Ft,this.transaction.oncomplete=()=>{this.S.resolve()},this.transaction.onabort=()=>{t.error?this.S.reject(new Gs(e,t.error)):this.S.resolve()},this.transaction.onerror=r=>{const s=tl(r.target.error);this.S.reject(new Gs(e,s))}}get D(){return this.S.promise}abort(e){e&&this.S.reject(e),this.aborted||(N(nt,"Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}C(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const t=this.transaction.objectStore(e);return new uI(t)}}class En{static delete(e){return N(nt,"Removing database:",e),Wn(Jd().indexedDB.deleteDatabase(e)).toPromise()}static v(){if(!af())return!1;if(En.F())return!0;const e=ke(),t=En.M(e),r=0<t&&t<10,s=up(e),i=0<s&&s<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||r||i)}static F(){var e;return typeof process<"u"&&((e=process.__PRIVATE_env)==null?void 0:e.__PRIVATE_USE_MOCK_PERSISTENCE)==="YES"}static O(e,t){return e.store(t)}static M(e){const t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=t?t[1].split("_").slice(0,2).join("."):"-1";return Number(r)}constructor(e,t,r){this.name=e,this.version=t,this.N=r,this.B=null,En.M(ke())===12.2&&He("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}async L(e){return this.db||(N(nt,"Opening database:",this.name),this.db=await new Promise(((t,r)=>{const s=indexedDB.open(this.name,this.version);s.onsuccess=i=>{const o=i.target.result;t(o)},s.onblocked=()=>{r(new Gs(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},s.onerror=i=>{const o=i.target.error;o.name==="VersionError"?r(new B(D.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new B(D.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new Gs(e,o))},s.onupgradeneeded=i=>{N(nt,'Database "'+this.name+'" requires upgrade from version:',i.oldVersion);const o=i.target.result;this.N.k(o,s.transaction,i.oldVersion,this.version).next((()=>{N(nt,"Database upgrade to version "+this.version+" complete")}))}}))),this.q&&(this.db.onversionchange=t=>this.q(t)),this.db}K(e){this.q=e,this.db&&(this.db.onversionchange=t=>e(t))}async runTransaction(e,t,r,s){const i=t==="readonly";let o=0;for(;;){++o;try{this.db=await this.L(e);const c=ea.open(this.db,e,i?"readonly":"readwrite",r),l=s(c).next((u=>(c.C(),u))).catch((u=>(c.abort(u),b.reject(u)))).toPromise();return l.catch((()=>{})),await c.D,l}catch(c){const l=c,u=l.name!=="FirebaseError"&&o<3;if(N(nt,"Transaction failed with error:",l.message,"Retrying:",u),this.close(),!u)return Promise.reject(l)}}}close(){this.db&&this.db.close(),this.db=void 0}}function up(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}class lI{constructor(e){this.U=e,this.$=!1,this.W=null}get isDone(){return this.$}get G(){return this.W}set cursor(e){this.U=e}done(){this.$=!0}j(e){this.W=e}delete(){return Wn(this.U.delete())}}class Gs extends B{constructor(e,t){super(D.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function Nn(n){return n.name==="IndexedDbTransactionError"}class uI{constructor(e){this.store=e}put(e,t){let r;return t!==void 0?(N(nt,"PUT",this.store.name,e,t),r=this.store.put(t,e)):(N(nt,"PUT",this.store.name,"<auto-key>",e),r=this.store.put(e)),Wn(r)}add(e){return N(nt,"ADD",this.store.name,e,e),Wn(this.store.add(e))}get(e){return Wn(this.store.get(e)).next((t=>(t===void 0&&(t=null),N(nt,"GET",this.store.name,e,t),t)))}delete(e){return N(nt,"DELETE",this.store.name,e),Wn(this.store.delete(e))}count(){return N(nt,"COUNT",this.store.name),Wn(this.store.count())}J(e,t){const r=this.options(e,t),s=r.index?this.store.index(r.index):this.store;if(typeof s.getAll=="function"){const i=s.getAll(r.range);return new b(((o,c)=>{i.onerror=l=>{c(l.target.error)},i.onsuccess=l=>{o(l.target.result)}}))}{const i=this.cursor(r),o=[];return this.H(i,((c,l)=>{o.push(l)})).next((()=>o))}}Z(e,t){const r=this.store.getAll(e,t===null?void 0:t);return new b(((s,i)=>{r.onerror=o=>{i(o.target.error)},r.onsuccess=o=>{s(o.target.result)}}))}X(e,t){N(nt,"DELETE ALL",this.store.name);const r=this.options(e,t);r.Y=!1;const s=this.cursor(r);return this.H(s,((i,o,c)=>c.delete()))}ee(e,t){let r;t?r=e:(r={},t=e);const s=this.cursor(r);return this.H(s,t)}te(e){const t=this.cursor({});return new b(((r,s)=>{t.onerror=i=>{const o=tl(i.target.error);s(o)},t.onsuccess=i=>{const o=i.target.result;o?e(o.primaryKey,o.value).next((c=>{c?o.continue():r()})):r()}}))}H(e,t){const r=[];return new b(((s,i)=>{e.onerror=o=>{i(o.target.error)},e.onsuccess=o=>{const c=o.target.result;if(!c)return void s();const l=new lI(c),u=t(c.primaryKey,c.value,l);if(u instanceof b){const d=u.catch((p=>(l.done(),b.reject(p))));r.push(d)}l.isDone?s():l.G===null?c.continue():c.continue(l.G)}})).next((()=>b.waitFor(r)))}options(e,t){let r;return e!==void 0&&(typeof e=="string"?r=e:t=e),{index:r,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){const r=this.store.index(e.index);return e.Y?r.openKeyCursor(e.range,t):r.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function Wn(n){return new b(((e,t)=>{n.onsuccess=r=>{const s=r.target.result;e(s)},n.onerror=r=>{const s=tl(r.target.error);t(s)}}))}let Sh=!1;function tl(n){const e=En.M(ke());if(e>=12.2&&e<13){const t="An internal error was encountered in the Indexed Database server";if(n.message.indexOf(t)>=0){const r=new B("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return Sh||(Sh=!0,setTimeout((()=>{throw r}),0)),r}}return n}const Ws="IndexBackfiller";class hI{constructor(e,t){this.asyncQueue=e,this.ne=t,this.task=null}start(){this.re(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}re(e){N(Ws,`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,(async()=>{this.task=null;try{const t=await this.ne.ie();N(Ws,`Documents written: ${t}`)}catch(t){Nn(t)?N(Ws,"Ignoring IndexedDB error during index backfill: ",t):await yr(t)}await this.re(6e4)}))}}class dI{constructor(e,t){this.localStore=e,this.persistence=t}async ie(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",(t=>this.se(t,e)))}se(e,t){const r=new Set;let s=t,i=!0;return b.doWhile((()=>i===!0&&s>0),(()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next((o=>{if(o!==null&&!r.has(o))return N(Ws,`Processing collection: ${o}`),this.oe(e,o,s).next((c=>{s-=c,r.add(o)}));i=!1})))).next((()=>t-s))}oe(e,t,r){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,t).next((s=>this.localStore.localDocuments.getNextDocuments(e,t,s,r).next((i=>{const o=i.changes;return this.localStore.indexManager.updateIndexEntries(e,o).next((()=>this._e(s,i))).next((c=>(N(Ws,`Updating offset: ${c}`),this.localStore.indexManager.updateCollectionGroup(e,t,c)))).next((()=>o.size))}))))}_e(e,t){let r=e;return t.changes.forEach(((s,i)=>{const o=ap(i);el(o,r)>0&&(r=o)})),new ot(r.readTime,r.documentKey,Math.max(t.batchId,e.largestBatchId))}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>t.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}ht.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xn=-1;function ta(n){return n==null}function ii(n){return n===0&&1/n==-1/0}function fI(n){return typeof n=="number"&&Number.isInteger(n)&&!ii(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ko="";function qe(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=bh(e)),e=pI(n.get(t),e);return bh(e)}function pI(n,e){let t=e;const r=n.length;for(let s=0;s<r;s++){const i=n.charAt(s);switch(i){case"\0":t+="";break;case ko:t+="";break;default:t+=i}}return t}function bh(n){return n+ko+""}function Nt(n){const e=n.length;if(W(e>=2,64408,{path:n}),e===2)return W(n.charAt(0)===ko&&n.charAt(1)==="",56145,{path:n}),ie.emptyPath();const t=e-2,r=[];let s="";for(let i=0;i<e;){const o=n.indexOf(ko,i);switch((o<0||o>t)&&G(50515,{path:n}),n.charAt(o+1)){case"":const c=n.substring(i,o);let l;s.length===0?l=c:(s+=c,l=s,s=""),r.push(l);break;case"":s+=n.substring(i,o),s+="\0";break;case"":s+=n.substring(i,o+1);break;default:G(61167,{path:n})}i=o+2}return new ie(r)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gn="remoteDocuments",Ei="owner",Ar="owner",oi="mutationQueues",mI="userId",Tt="mutations",Ah="batchId",Jn="userMutationsIndex",Rh=["userId","batchId"];/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lo(n,e){return[n,qe(e)]}function hp(n,e,t){return[n,qe(e),t]}const gI={},Wr="documentMutations",Co="remoteDocumentsV14",yI=["prefixPath","collectionGroup","readTime","documentId"],uo="documentKeyIndex",_I=["prefixPath","collectionGroup","documentId"],dp="collectionGroupIndex",wI=["collectionGroup","readTime","prefixPath","documentId"],ai="remoteDocumentGlobal",mc="remoteDocumentGlobalKey",zr="targets",fp="queryTargetsIndex",TI=["canonicalId","targetId"],Hr="targetDocuments",II=["targetId","path"],nl="documentTargetsIndex",EI=["path","targetId"],xo="targetGlobalKey",Zn="targetGlobal",ci="collectionParents",vI=["collectionId","parent"],Kr="clientMetadata",SI="clientId",na="bundles",bI="bundleId",ra="namedQueries",AI="name",rl="indexConfiguration",RI="indexId",gc="collectionGroupIndex",PI="collectionGroup",zs="indexState",kI=["indexId","uid"],pp="sequenceNumberIndex",CI=["uid","sequenceNumber"],Hs="indexEntries",xI=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],mp="documentKeyIndex",DI=["indexId","uid","orderedDocumentKey"],sa="documentOverlays",NI=["userId","collectionPath","documentId"],yc="collectionPathOverlayIndex",VI=["userId","collectionPath","largestBatchId"],gp="collectionGroupOverlayIndex",OI=["userId","collectionGroup","largestBatchId"],sl="globals",LI="name",yp=[oi,Tt,Wr,Gn,zr,Ei,Zn,Hr,Kr,ai,ci,na,ra],MI=[...yp,sa],_p=[oi,Tt,Wr,Co,zr,Ei,Zn,Hr,Kr,ai,ci,na,ra,sa],wp=_p,il=[...wp,rl,zs,Hs],FI=il,Tp=[...il,sl],UI=Tp;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _c extends lp{constructor(e,t){super(),this.le=e,this.currentSequenceNumber=t}}function Ce(n,e){const t=Y(n);return En.O(t.le,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ph(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function _r(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function Ip(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ge{constructor(e,t){this.comparator=e,this.root=t||Le.EMPTY}insert(e,t){return new ge(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Le.BLACK,null,null))}remove(e){return new ge(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Le.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return t+r.left.size;s<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,r)=>(e(t,r),!1)))}toString(){const e=[];return this.inorderTraversal(((t,r)=>(e.push(`${t}:${r}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new zi(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new zi(this.root,e,this.comparator,!1)}getReverseIterator(){return new zi(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new zi(this.root,e,this.comparator,!0)}}class zi{constructor(e,t,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?r(e.key,t):1,t&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Le{constructor(e,t,r,s,i){this.key=e,this.value=t,this.color=r??Le.RED,this.left=s??Le.EMPTY,this.right=i??Le.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,s,i){return new Le(e??this.key,t??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,t,r),null):i===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Le.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return Le.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Le.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Le.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw G(43730,{key:this.key,value:this.value});if(this.right.isRed())throw G(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw G(27949);return e+(this.isRed()?0:1)}}Le.EMPTY=null,Le.RED=!0,Le.BLACK=!1;Le.EMPTY=new class{constructor(){this.size=0}get key(){throw G(57766)}get value(){throw G(16141)}get color(){throw G(16727)}get left(){throw G(29726)}get right(){throw G(36894)}copy(e,t,r,s,i){return this}insert(e,t,r){return new Le(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ae{constructor(e){this.comparator=e,this.data=new ge(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,r)=>(e(t),!1)))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new kh(this.data.getIterator())}getIteratorFrom(e){return new kh(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((r=>{t=t.add(r)})),t}isEqual(e){if(!(e instanceof ae)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new ae(this.comparator);return t.data=e,t}}class kh{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function Rr(n){return n.hasNext()?n.getNext():void 0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt{constructor(e){this.fields=e,e.sort(ye.comparator)}static empty(){return new dt([])}unionWith(e){let t=new ae(ye.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new dt(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Gr(this.fields,e.fields,((t,r)=>t.isEqual(r)))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ep extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Re{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Ep("Invalid base64 string: "+i):i}})(e);return new Re(t)}static fromUint8Array(e){const t=(function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i})(e);return new Re(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Q(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Re.EMPTY_BYTE_STRING=new Re("");const $I=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Xt(n){if(W(!!n,39018),typeof n=="string"){let e=0;const t=$I.exec(n);if(W(!!t,46558,{timestamp:n}),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:me(n.seconds),nanos:me(n.nanos)}}function me(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Zt(n){return typeof n=="string"?Re.fromBase64String(n):Re.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vp="server_timestamp",Sp="__type__",bp="__previous_value__",Ap="__local_write_time__";function ol(n){var t,r;return((r=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[Sp])==null?void 0:r.stringValue)===vp}function ia(n){const e=n.mapValue.fields[bp];return ol(e)?ia(e):e}function li(n){const e=Xt(n.mapValue.fields[Ap].timestampValue);return new oe(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BI{constructor(e,t,r,s,i,o,c,l,u,d,p){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=c,this.longPollingOptions=l,this.useFetchStreams=u,this.isUsingEmulator=d,this.apiKey=p}}const Do="(default)";class cr{constructor(e,t){this.projectId=e,this.database=t||Do}static empty(){return new cr("","")}get isDefaultDatabase(){return this.database===Do}isEqual(e){return e instanceof cr&&e.projectId===this.projectId&&e.database===this.database}}function qI(n,e){if(!Object.prototype.hasOwnProperty.apply(n.options,["projectId"]))throw new B(D.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new cr(n.options.projectId,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const al="__type__",Rp="__max__",_n={mapValue:{fields:{__type__:{stringValue:Rp}}}},cl="__vector__",Qr="value",ho={nullValue:"NULL_VALUE"};function An(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?ol(n)?4:Pp(n)?9007199254740991:oa(n)?10:11:G(28295,{value:n})}function $t(n,e){if(n===e)return!0;const t=An(n);if(t!==An(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return li(n).isEqual(li(e));case 3:return(function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=Xt(s.timestampValue),c=Xt(i.timestampValue);return o.seconds===c.seconds&&o.nanos===c.nanos})(n,e);case 5:return n.stringValue===e.stringValue;case 6:return(function(s,i){return Zt(s.bytesValue).isEqual(Zt(i.bytesValue))})(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return(function(s,i){return me(s.geoPointValue.latitude)===me(i.geoPointValue.latitude)&&me(s.geoPointValue.longitude)===me(i.geoPointValue.longitude)})(n,e);case 2:return(function(s,i){if("integerValue"in s&&"integerValue"in i)return me(s.integerValue)===me(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=me(s.doubleValue),c=me(i.doubleValue);return o===c?ii(o)===ii(c):isNaN(o)&&isNaN(c)}return!1})(n,e);case 9:return Gr(n.arrayValue.values||[],e.arrayValue.values||[],$t);case 10:case 11:return(function(s,i){const o=s.mapValue.fields||{},c=i.mapValue.fields||{};if(Ph(o)!==Ph(c))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(c[l]===void 0||!$t(o[l],c[l])))return!1;return!0})(n,e);default:return G(52216,{left:n})}}function ui(n,e){return(n.values||[]).find((t=>$t(t,e)))!==void 0}function Rn(n,e){if(n===e)return 0;const t=An(n),r=An(e);if(t!==r)return Q(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return Q(n.booleanValue,e.booleanValue);case 2:return(function(i,o){const c=me(i.integerValue||i.doubleValue),l=me(o.integerValue||o.doubleValue);return c<l?-1:c>l?1:c===l?0:isNaN(c)?isNaN(l)?0:-1:1})(n,e);case 3:return Ch(n.timestampValue,e.timestampValue);case 4:return Ch(li(n),li(e));case 5:return fc(n.stringValue,e.stringValue);case 6:return(function(i,o){const c=Zt(i),l=Zt(o);return c.compareTo(l)})(n.bytesValue,e.bytesValue);case 7:return(function(i,o){const c=i.split("/"),l=o.split("/");for(let u=0;u<c.length&&u<l.length;u++){const d=Q(c[u],l[u]);if(d!==0)return d}return Q(c.length,l.length)})(n.referenceValue,e.referenceValue);case 8:return(function(i,o){const c=Q(me(i.latitude),me(o.latitude));return c!==0?c:Q(me(i.longitude),me(o.longitude))})(n.geoPointValue,e.geoPointValue);case 9:return xh(n.arrayValue,e.arrayValue);case 10:return(function(i,o){var y,v,k,P;const c=i.fields||{},l=o.fields||{},u=(y=c[Qr])==null?void 0:y.arrayValue,d=(v=l[Qr])==null?void 0:v.arrayValue,p=Q(((k=u==null?void 0:u.values)==null?void 0:k.length)||0,((P=d==null?void 0:d.values)==null?void 0:P.length)||0);return p!==0?p:xh(u,d)})(n.mapValue,e.mapValue);case 11:return(function(i,o){if(i===_n.mapValue&&o===_n.mapValue)return 0;if(i===_n.mapValue)return 1;if(o===_n.mapValue)return-1;const c=i.fields||{},l=Object.keys(c),u=o.fields||{},d=Object.keys(u);l.sort(),d.sort();for(let p=0;p<l.length&&p<d.length;++p){const y=fc(l[p],d[p]);if(y!==0)return y;const v=Rn(c[l[p]],u[d[p]]);if(v!==0)return v}return Q(l.length,d.length)})(n.mapValue,e.mapValue);default:throw G(23264,{he:t})}}function Ch(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return Q(n,e);const t=Xt(n),r=Xt(e),s=Q(t.seconds,r.seconds);return s!==0?s:Q(t.nanos,r.nanos)}function xh(n,e){const t=n.values||[],r=e.values||[];for(let s=0;s<t.length&&s<r.length;++s){const i=Rn(t[s],r[s]);if(i)return i}return Q(t.length,r.length)}function Yr(n){return wc(n)}function wc(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?(function(t){const r=Xt(t);return`time(${r.seconds},${r.nanos})`})(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?(function(t){return Zt(t).toBase64()})(n.bytesValue):"referenceValue"in n?(function(t){return U.fromName(t).toString()})(n.referenceValue):"geoPointValue"in n?(function(t){return`geo(${t.latitude},${t.longitude})`})(n.geoPointValue):"arrayValue"in n?(function(t){let r="[",s=!0;for(const i of t.values||[])s?s=!1:r+=",",r+=wc(i);return r+"]"})(n.arrayValue):"mapValue"in n?(function(t){const r=Object.keys(t.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${wc(t.fields[o])}`;return s+"}"})(n.mapValue):G(61005,{value:n})}function fo(n){switch(An(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=ia(n);return e?16+fo(e):16;case 5:return 2*n.stringValue.length;case 6:return Zt(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return(function(r){return(r.values||[]).reduce(((s,i)=>s+fo(i)),0)})(n.arrayValue);case 10:case 11:return(function(r){let s=0;return _r(r.fields,((i,o)=>{s+=i.length+fo(o)})),s})(n.mapValue);default:throw G(13486,{value:n})}}function ll(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function Tc(n){return!!n&&"integerValue"in n}function hi(n){return!!n&&"arrayValue"in n}function Dh(n){return!!n&&"nullValue"in n}function Nh(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function po(n){return!!n&&"mapValue"in n}function oa(n){var t,r;return((r=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[al])==null?void 0:r.stringValue)===cl}function Ks(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const e={mapValue:{fields:{}}};return _r(n.mapValue.fields,((t,r)=>e.mapValue.fields[t]=Ks(r))),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Ks(n.arrayValue.values[t]);return e}return{...n}}function Pp(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===Rp}const kp={mapValue:{fields:{[al]:{stringValue:cl},[Qr]:{arrayValue:{}}}}};function jI(n){return"nullValue"in n?ho:"booleanValue"in n?{booleanValue:!1}:"integerValue"in n||"doubleValue"in n?{doubleValue:NaN}:"timestampValue"in n?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in n?{stringValue:""}:"bytesValue"in n?{bytesValue:""}:"referenceValue"in n?ll(cr.empty(),U.empty()):"geoPointValue"in n?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in n?{arrayValue:{}}:"mapValue"in n?oa(n)?kp:{mapValue:{}}:G(35942,{value:n})}function GI(n){return"nullValue"in n?{booleanValue:!1}:"booleanValue"in n?{doubleValue:NaN}:"integerValue"in n||"doubleValue"in n?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in n?{stringValue:""}:"stringValue"in n?{bytesValue:""}:"bytesValue"in n?ll(cr.empty(),U.empty()):"referenceValue"in n?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in n?{arrayValue:{}}:"arrayValue"in n?kp:"mapValue"in n?oa(n)?{mapValue:{}}:_n:G(61959,{value:n})}function Vh(n,e){const t=Rn(n.value,e.value);return t!==0?t:n.inclusive&&!e.inclusive?-1:!n.inclusive&&e.inclusive?1:0}function Oh(n,e){const t=Rn(n.value,e.value);return t!==0?t:n.inclusive&&!e.inclusive?1:!n.inclusive&&e.inclusive?-1:0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Je{constructor(e){this.value=e}static empty(){return new Je({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!po(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ks(t)}setAll(e){let t=ye.emptyPath(),r={},s=[];e.forEach(((o,c)=>{if(!t.isImmediateParentOf(c)){const l=this.getFieldsMap(t);this.applyChanges(l,r,s),r={},s=[],t=c.popLast()}o?r[c.lastSegment()]=Ks(o):s.push(c.lastSegment())}));const i=this.getFieldsMap(t);this.applyChanges(i,r,s)}delete(e){const t=this.field(e.popLast());po(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return $t(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=t.mapValue.fields[e.get(r)];po(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,r){_r(t,((s,i)=>e[s]=i));for(const s of r)delete e[s]}clone(){return new Je(Ks(this.value))}}function Cp(n){const e=[];return _r(n.fields,((t,r)=>{const s=new ye([t]);if(po(r)){const i=Cp(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)})),new dt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Te{constructor(e,t,r,s,i,o,c){this.key=e,this.documentType=t,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=c}static newInvalidDocument(e){return new Te(e,0,z.min(),z.min(),z.min(),Je.empty(),0)}static newFoundDocument(e,t,r,s){return new Te(e,1,t,z.min(),r,s,0)}static newNoDocument(e,t){return new Te(e,2,t,z.min(),z.min(),Je.empty(),0)}static newUnknownDocument(e,t){return new Te(e,3,t,z.min(),z.min(),Je.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(z.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Je.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Je.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=z.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Te&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Te(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jr{constructor(e,t){this.position=e,this.inclusive=t}}function Lh(n,e,t){let r=0;for(let s=0;s<n.position.length;s++){const i=e[s],o=n.position[s];if(i.field.isKeyField()?r=U.comparator(U.fromName(o.referenceValue),t.key):r=Rn(o,t.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Mh(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!$t(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class No{constructor(e,t="asc"){this.field=e,this.dir=t}}function WI(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xp{}class re extends xp{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new zI(e,t,r):t==="array-contains"?new QI(e,r):t==="in"?new Mp(e,r):t==="not-in"?new YI(e,r):t==="array-contains-any"?new JI(e,r):new re(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new HI(e,r):new KI(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(Rn(t,this.value)):t!==null&&An(this.value)===An(t)&&this.matchesComparison(Rn(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return G(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class ce extends xp{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new ce(e,t)}matches(e){return Xr(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function Xr(n){return n.op==="and"}function Ic(n){return n.op==="or"}function ul(n){return Dp(n)&&Xr(n)}function Dp(n){for(const e of n.filters)if(e instanceof ce)return!1;return!0}function Ec(n){if(n instanceof re)return n.field.canonicalString()+n.op.toString()+Yr(n.value);if(ul(n))return n.filters.map((e=>Ec(e))).join(",");{const e=n.filters.map((t=>Ec(t))).join(",");return`${n.op}(${e})`}}function Np(n,e){return n instanceof re?(function(r,s){return s instanceof re&&r.op===s.op&&r.field.isEqual(s.field)&&$t(r.value,s.value)})(n,e):n instanceof ce?(function(r,s){return s instanceof ce&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce(((i,o,c)=>i&&Np(o,s.filters[c])),!0):!1})(n,e):void G(19439)}function Vp(n,e){const t=n.filters.concat(e);return ce.create(t,n.op)}function Op(n){return n instanceof re?(function(t){return`${t.field.canonicalString()} ${t.op} ${Yr(t.value)}`})(n):n instanceof ce?(function(t){return t.op.toString()+" {"+t.getFilters().map(Op).join(" ,")+"}"})(n):"Filter"}class zI extends re{constructor(e,t,r){super(e,t,r),this.key=U.fromName(r.referenceValue)}matches(e){const t=U.comparator(e.key,this.key);return this.matchesComparison(t)}}class HI extends re{constructor(e,t){super(e,"in",t),this.keys=Lp("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class KI extends re{constructor(e,t){super(e,"not-in",t),this.keys=Lp("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function Lp(n,e){var t;return(((t=e.arrayValue)==null?void 0:t.values)||[]).map((r=>U.fromName(r.referenceValue)))}class QI extends re{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return hi(t)&&ui(t.arrayValue,this.value)}}class Mp extends re{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&ui(this.value.arrayValue,t)}}class YI extends re{constructor(e,t){super(e,"not-in",t)}matches(e){if(ui(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!ui(this.value.arrayValue,t)}}class JI extends re{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!hi(t)||!t.arrayValue.values)&&t.arrayValue.values.some((r=>ui(this.value.arrayValue,r)))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XI{constructor(e,t=null,r=[],s=[],i=null,o=null,c=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=c,this.Te=null}}function vc(n,e=null,t=[],r=[],s=null,i=null,o=null){return new XI(n,e,t,r,s,i,o)}function lr(n){const e=Y(n);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((r=>Ec(r))).join(","),t+="|ob:",t+=e.orderBy.map((r=>(function(i){return i.field.canonicalString()+i.dir})(r))).join(","),ta(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((r=>Yr(r))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((r=>Yr(r))).join(",")),e.Te=t}return e.Te}function vi(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!WI(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!Np(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Mh(n.startAt,e.startAt)&&Mh(n.endAt,e.endAt)}function Vo(n){return U.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function Oo(n,e){return n.filters.filter((t=>t instanceof re&&t.field.isEqual(e)))}function Fh(n,e,t){let r=ho,s=!0;for(const i of Oo(n,e)){let o=ho,c=!0;switch(i.op){case"<":case"<=":o=jI(i.value);break;case"==":case"in":case">=":o=i.value;break;case">":o=i.value,c=!1;break;case"!=":case"not-in":o=ho}Vh({value:r,inclusive:s},{value:o,inclusive:c})<0&&(r=o,s=c)}if(t!==null){for(let i=0;i<n.orderBy.length;++i)if(n.orderBy[i].field.isEqual(e)){const o=t.position[i];Vh({value:r,inclusive:s},{value:o,inclusive:t.inclusive})<0&&(r=o,s=t.inclusive);break}}return{value:r,inclusive:s}}function Uh(n,e,t){let r=_n,s=!0;for(const i of Oo(n,e)){let o=_n,c=!0;switch(i.op){case">=":case">":o=GI(i.value),c=!1;break;case"==":case"in":case"<=":o=i.value;break;case"<":o=i.value,c=!1;break;case"!=":case"not-in":o=_n}Oh({value:r,inclusive:s},{value:o,inclusive:c})>0&&(r=o,s=c)}if(t!==null){for(let i=0;i<n.orderBy.length;++i)if(n.orderBy[i].field.isEqual(e)){const o=t.position[i];Oh({value:r,inclusive:s},{value:o,inclusive:t.inclusive})>0&&(r=o,s=t.inclusive);break}}return{value:r,inclusive:s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aa{constructor(e,t=null,r=[],s=[],i=null,o="F",c=null,l=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=c,this.endAt=l,this.Ee=null,this.Ie=null,this.Re=null,this.startAt,this.endAt}}function ZI(n,e,t,r,s,i,o,c){return new aa(n,e,t,r,s,i,o,c)}function Si(n){return new aa(n)}function $h(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function eE(n){return U.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function tE(n){return n.collectionGroup!==null}function Qs(n){const e=Y(n);if(e.Ee===null){e.Ee=[];const t=new Set;for(const i of e.explicitOrderBy)e.Ee.push(i),t.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let c=new ae(ye.comparator);return o.filters.forEach((l=>{l.getFlattenedFilters().forEach((u=>{u.isInequality()&&(c=c.add(u.field))}))})),c})(e).forEach((i=>{t.has(i.canonicalString())||i.isKeyField()||e.Ee.push(new No(i,r))})),t.has(ye.keyField().canonicalString())||e.Ee.push(new No(ye.keyField(),r))}return e.Ee}function pt(n){const e=Y(n);return e.Ie||(e.Ie=nE(e,Qs(n))),e.Ie}function nE(n,e){if(n.limitType==="F")return vc(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map((s=>{const i=s.dir==="desc"?"asc":"desc";return new No(s.field,i)}));const t=n.endAt?new Jr(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new Jr(n.startAt.position,n.startAt.inclusive):null;return vc(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function Sc(n,e,t){return new aa(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function ca(n,e){return vi(pt(n),pt(e))&&n.limitType===e.limitType}function Fp(n){return`${lr(pt(n))}|lt:${n.limitType}`}function Vr(n){return`Query(target=${(function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map((s=>Op(s))).join(", ")}]`),ta(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map((s=>(function(o){return`${o.field.canonicalString()} (${o.dir})`})(s))).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map((s=>Yr(s))).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map((s=>Yr(s))).join(",")),`Target(${r})`})(pt(n))}; limitType=${n.limitType})`}function bi(n,e){return e.isFoundDocument()&&(function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):U.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)})(n,e)&&(function(r,s){for(const i of Qs(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0})(n,e)&&(function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0})(n,e)&&(function(r,s){return!(r.startAt&&!(function(o,c,l){const u=Lh(o,c,l);return o.inclusive?u<=0:u<0})(r.startAt,Qs(r),s)||r.endAt&&!(function(o,c,l){const u=Lh(o,c,l);return o.inclusive?u>=0:u>0})(r.endAt,Qs(r),s))})(n,e)}function rE(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Up(n){return(e,t)=>{let r=!1;for(const s of Qs(n)){const i=sE(s,e,t);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function sE(n,e,t){const r=n.field.isKeyField()?U.comparator(e.key,t.key):(function(i,o,c){const l=o.data.field(i),u=c.data.field(i);return l!==null&&u!==null?Rn(l,u):G(42886)})(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return G(19790,{direction:n.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class en{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[t]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){_r(this.inner,((t,r)=>{for(const[s,i]of r)e(s,i)}))}isEmpty(){return Ip(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iE=new ge(U.comparator);function rt(){return iE}const $p=new ge(U.comparator);function Us(...n){let e=$p;for(const t of n)e=e.insert(t.key,t);return e}function Bp(n){let e=$p;return n.forEach(((t,r)=>e=e.insert(t,r.overlayedDocument))),e}function Vt(){return Ys()}function qp(){return Ys()}function Ys(){return new en((n=>n.toString()),((n,e)=>n.isEqual(e)))}const oE=new ge(U.comparator),aE=new ae(U.comparator);function Z(...n){let e=aE;for(const t of n)e=e.add(t);return e}const cE=new ae(Q);function lE(){return cE}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hl(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ii(e)?"-0":e}}function jp(n){return{integerValue:""+n}}function uE(n,e){return fI(e)?jp(e):hl(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class la{constructor(){this._=void 0}}function hE(n,e,t){return n instanceof Zr?(function(s,i){const o={fields:{[Sp]:{stringValue:vp},[Ap]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&ol(i)&&(i=ia(i)),i&&(o.fields[bp]=i),{mapValue:o}})(t,e):n instanceof es?Wp(n,e):n instanceof ts?zp(n,e):(function(s,i){const o=Gp(s,i),c=Bh(o)+Bh(s.Ae);return Tc(o)&&Tc(s.Ae)?jp(c):hl(s.serializer,c)})(n,e)}function dE(n,e,t){return n instanceof es?Wp(n,e):n instanceof ts?zp(n,e):t}function Gp(n,e){return n instanceof di?(function(r){return Tc(r)||(function(i){return!!i&&"doubleValue"in i})(r)})(e)?e:{integerValue:0}:null}class Zr extends la{}class es extends la{constructor(e){super(),this.elements=e}}function Wp(n,e){const t=Hp(e);for(const r of n.elements)t.some((s=>$t(s,r)))||t.push(r);return{arrayValue:{values:t}}}class ts extends la{constructor(e){super(),this.elements=e}}function zp(n,e){let t=Hp(e);for(const r of n.elements)t=t.filter((s=>!$t(s,r)));return{arrayValue:{values:t}}}class di extends la{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function Bh(n){return me(n.integerValue||n.doubleValue)}function Hp(n){return hi(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kp{constructor(e,t){this.field=e,this.transform=t}}function fE(n,e){return n.field.isEqual(e.field)&&(function(r,s){return r instanceof es&&s instanceof es||r instanceof ts&&s instanceof ts?Gr(r.elements,s.elements,$t):r instanceof di&&s instanceof di?$t(r.Ae,s.Ae):r instanceof Zr&&s instanceof Zr})(n.transform,e.transform)}class pE{constructor(e,t){this.version=e,this.transformResults=t}}class Xe{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Xe}static exists(e){return new Xe(void 0,e)}static updateTime(e){return new Xe(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function mo(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class ua{}function Qp(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new ha(n.key,Xe.none()):new os(n.key,n.data,Xe.none());{const t=n.data,r=Je.empty();let s=new ae(ye.comparator);for(let i of e.fields)if(!s.has(i)){let o=t.field(i);o===null&&i.length>1&&(i=i.popLast(),o=t.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new Vn(n.key,r,new dt(s.toArray()),Xe.none())}}function mE(n,e,t){n instanceof os?(function(s,i,o){const c=s.value.clone(),l=jh(s.fieldTransforms,i,o.transformResults);c.setAll(l),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()})(n,e,t):n instanceof Vn?(function(s,i,o){if(!mo(s.precondition,i))return void i.convertToUnknownDocument(o.version);const c=jh(s.fieldTransforms,i,o.transformResults),l=i.data;l.setAll(Yp(s)),l.setAll(c),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()})(n,e,t):(function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()})(0,e,t)}function Js(n,e,t,r){return n instanceof os?(function(i,o,c,l){if(!mo(i.precondition,o))return c;const u=i.value.clone(),d=Gh(i.fieldTransforms,l,o);return u.setAll(d),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null})(n,e,t,r):n instanceof Vn?(function(i,o,c,l){if(!mo(i.precondition,o))return c;const u=Gh(i.fieldTransforms,l,o),d=o.data;return d.setAll(Yp(i)),d.setAll(u),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),c===null?null:c.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map((p=>p.field)))})(n,e,t,r):(function(i,o,c){return mo(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):c})(n,e,t)}function gE(n,e){let t=null;for(const r of n.fieldTransforms){const s=e.data.field(r.field),i=Gp(r.transform,s||null);i!=null&&(t===null&&(t=Je.empty()),t.set(r.field,i))}return t||null}function qh(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!(function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Gr(r,s,((i,o)=>fE(i,o)))})(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class os extends ua{constructor(e,t,r,s=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Vn extends ua{constructor(e,t,r,s,i=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Yp(n){const e=new Map;return n.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}})),e}function jh(n,e,t){const r=new Map;W(n.length===t.length,32656,{Ve:t.length,de:n.length});for(let s=0;s<t.length;s++){const i=n[s],o=i.transform,c=e.data.field(i.field);r.set(i.field,dE(o,c,t[s]))}return r}function Gh(n,e,t){const r=new Map;for(const s of n){const i=s.transform,o=t.data.field(s.field);r.set(s.field,hE(i,o,e))}return r}class ha extends ua{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Jp extends ua{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dl{constructor(e,t,r,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&mE(i,e,r[s])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=Js(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=Js(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=qp();return this.mutations.forEach((s=>{const i=e.get(s.key),o=i.overlayedDocument;let c=this.applyToLocalView(o,i.mutatedFields);c=t.has(s.key)?null:c;const l=Qp(o,c);l!==null&&r.set(s.key,l),o.isValidDocument()||o.convertToNoDocument(z.min())})),r}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),Z())}isEqual(e){return this.batchId===e.batchId&&Gr(this.mutations,e.mutations,((t,r)=>qh(t,r)))&&Gr(this.baseMutations,e.baseMutations,((t,r)=>qh(t,r)))}}class fl{constructor(e,t,r,s){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=s}static from(e,t,r){W(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let s=(function(){return oE})();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new fl(e,t,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pl{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yE{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ve,se;function _E(n){switch(n){case D.OK:return G(64938);case D.CANCELLED:case D.UNKNOWN:case D.DEADLINE_EXCEEDED:case D.RESOURCE_EXHAUSTED:case D.INTERNAL:case D.UNAVAILABLE:case D.UNAUTHENTICATED:return!1;case D.INVALID_ARGUMENT:case D.NOT_FOUND:case D.ALREADY_EXISTS:case D.PERMISSION_DENIED:case D.FAILED_PRECONDITION:case D.ABORTED:case D.OUT_OF_RANGE:case D.UNIMPLEMENTED:case D.DATA_LOSS:return!0;default:return G(15467,{code:n})}}function Xp(n){if(n===void 0)return He("GRPC error has no .code"),D.UNKNOWN;switch(n){case ve.OK:return D.OK;case ve.CANCELLED:return D.CANCELLED;case ve.UNKNOWN:return D.UNKNOWN;case ve.DEADLINE_EXCEEDED:return D.DEADLINE_EXCEEDED;case ve.RESOURCE_EXHAUSTED:return D.RESOURCE_EXHAUSTED;case ve.INTERNAL:return D.INTERNAL;case ve.UNAVAILABLE:return D.UNAVAILABLE;case ve.UNAUTHENTICATED:return D.UNAUTHENTICATED;case ve.INVALID_ARGUMENT:return D.INVALID_ARGUMENT;case ve.NOT_FOUND:return D.NOT_FOUND;case ve.ALREADY_EXISTS:return D.ALREADY_EXISTS;case ve.PERMISSION_DENIED:return D.PERMISSION_DENIED;case ve.FAILED_PRECONDITION:return D.FAILED_PRECONDITION;case ve.ABORTED:return D.ABORTED;case ve.OUT_OF_RANGE:return D.OUT_OF_RANGE;case ve.UNIMPLEMENTED:return D.UNIMPLEMENTED;case ve.DATA_LOSS:return D.DATA_LOSS;default:return G(39323,{code:n})}}(se=ve||(ve={}))[se.OK=0]="OK",se[se.CANCELLED=1]="CANCELLED",se[se.UNKNOWN=2]="UNKNOWN",se[se.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",se[se.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",se[se.NOT_FOUND=5]="NOT_FOUND",se[se.ALREADY_EXISTS=6]="ALREADY_EXISTS",se[se.PERMISSION_DENIED=7]="PERMISSION_DENIED",se[se.UNAUTHENTICATED=16]="UNAUTHENTICATED",se[se.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",se[se.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",se[se.ABORTED=10]="ABORTED",se[se.OUT_OF_RANGE=11]="OUT_OF_RANGE",se[se.UNIMPLEMENTED=12]="UNIMPLEMENTED",se[se.INTERNAL=13]="INTERNAL",se[se.UNAVAILABLE=14]="UNAVAILABLE",se[se.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wE(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TE=new In([4294967295,4294967295],0);function Wh(n){const e=wE().encode(n),t=new Yf;return t.update(e),new Uint8Array(t.digest())}function zh(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new In([t,r],0),new In([s,i],0)]}class ml{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new $s(`Invalid padding: ${t}`);if(r<0)throw new $s(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new $s(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new $s(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=In.fromNumber(this.ge)}ye(e,t,r){let s=e.add(t.multiply(In.fromNumber(r)));return s.compare(TE)===1&&(s=new In([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=Wh(e),[r,s]=zh(t);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);if(!this.we(o))return!1}return!0}static create(e,t,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new ml(i,s,t);return r.forEach((c=>o.insert(c))),o}insert(e){if(this.ge===0)return;const t=Wh(e),[r,s]=zh(t);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);this.Se(o)}}Se(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class $s extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class da{constructor(e,t,r,s,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const s=new Map;return s.set(e,Ai.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new da(z.min(),s,new ge(Q),rt(),Z())}}class Ai{constructor(e,t,r,s,i){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new Ai(r,t,Z(),Z(),Z())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class go{constructor(e,t,r,s){this.be=e,this.removedTargetIds=t,this.key=r,this.De=s}}class Zp{constructor(e,t){this.targetId=e,this.Ce=t}}class em{constructor(e,t,r=Re.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=s}}class Hh{constructor(){this.ve=0,this.Fe=Kh(),this.Me=Re.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=Z(),t=Z(),r=Z();return this.Fe.forEach(((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:r=r.add(s);break;default:G(38017,{changeType:i})}})),new Ai(this.Me,this.xe,e,t,r)}qe(){this.Oe=!1,this.Fe=Kh()}Ke(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}Ue(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}$e(){this.ve+=1}We(){this.ve-=1,W(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class IE{constructor(e){this.Ge=e,this.ze=new Map,this.je=rt(),this.Je=Hi(),this.He=Hi(),this.Ze=new ge(Q)}Xe(e){for(const t of e.be)e.De&&e.De.isFoundDocument()?this.Ye(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,(t=>{const r=this.nt(t);switch(e.state){case 0:this.rt(t)&&r.Le(e.resumeToken);break;case 1:r.We(),r.Ne||r.qe(),r.Le(e.resumeToken);break;case 2:r.We(),r.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(r.Qe(),r.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),r.Le(e.resumeToken));break;default:G(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach(((r,s)=>{this.rt(s)&&t(s)}))}st(e){const t=e.targetId,r=e.Ce.count,s=this.ot(t);if(s){const i=s.target;if(Vo(i))if(r===0){const o=new U(i.path);this.et(t,o,Te.newNoDocument(o,z.min()))}else W(r===1,20013,{expectedCount:r});else{const o=this._t(t);if(o!==r){const c=this.ut(e),l=c?this.ct(c,e,o):1;if(l!==0){this.it(t);const u=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(t,u)}}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=t;let o,c;try{o=Zt(r).toUint8Array()}catch(l){if(l instanceof Ep)return bn("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{c=new ml(o,s,i)}catch(l){return bn(l instanceof $s?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return c.ge===0?null:c}ct(e,t,r){return t.Ce.count===r-this.Pt(e,t.targetId)?0:2}Pt(e,t){const r=this.Ge.getRemoteKeysForTarget(t);let s=0;return r.forEach((i=>{const o=this.Ge.ht(),c=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(c)||(this.et(t,i,null),s++)})),s}Tt(e){const t=new Map;this.ze.forEach(((i,o)=>{const c=this.ot(o);if(c){if(i.current&&Vo(c.target)){const l=new U(c.target.path);this.Et(l).has(o)||this.It(o,l)||this.et(o,l,Te.newNoDocument(l,e))}i.Be&&(t.set(o,i.ke()),i.qe())}}));let r=Z();this.He.forEach(((i,o)=>{let c=!0;o.forEachWhile((l=>{const u=this.ot(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)})),c&&(r=r.add(i))})),this.je.forEach(((i,o)=>o.setReadTime(e)));const s=new da(e,t,this.Ze,this.je,r);return this.je=rt(),this.Je=Hi(),this.He=Hi(),this.Ze=new ge(Q),s}Ye(e,t){if(!this.rt(e))return;const r=this.It(e,t.key)?2:0;this.nt(e).Ke(t.key,r),this.je=this.je.insert(t.key,t),this.Je=this.Je.insert(t.key,this.Et(t.key).add(e)),this.He=this.He.insert(t.key,this.Rt(t.key).add(e))}et(e,t,r){if(!this.rt(e))return;const s=this.nt(e);this.It(e,t)?s.Ke(t,1):s.Ue(t),this.He=this.He.insert(t,this.Rt(t).delete(e)),this.He=this.He.insert(t,this.Rt(t).add(e)),r&&(this.je=this.je.insert(t,r))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.nt(e).$e()}nt(e){let t=this.ze.get(e);return t||(t=new Hh,this.ze.set(e,t)),t}Rt(e){let t=this.He.get(e);return t||(t=new ae(Q),this.He=this.He.insert(e,t)),t}Et(e){let t=this.Je.get(e);return t||(t=new ae(Q),this.Je=this.Je.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||N("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new Hh),this.Ge.getRemoteKeysForTarget(e).forEach((t=>{this.et(e,t,null)}))}It(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function Hi(){return new ge(U.comparator)}function Kh(){return new ge(U.comparator)}const EE={asc:"ASCENDING",desc:"DESCENDING"},vE={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},SE={and:"AND",or:"OR"};class bE{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function bc(n,e){return n.useProto3Json||ta(e)?e:{value:e}}function ns(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function tm(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function AE(n,e){return ns(n,e.toTimestamp())}function Ke(n){return W(!!n,49232),z.fromTimestamp((function(t){const r=Xt(t);return new oe(r.seconds,r.nanos)})(n))}function gl(n,e){return Ac(n,e).canonicalString()}function Ac(n,e){const t=(function(s){return new ie(["projects",s.projectId,"databases",s.database])})(n).child("documents");return e===void 0?t:t.child(e)}function nm(n){const e=ie.fromString(n);return W(hm(e),10190,{key:e.toString()}),e}function Lo(n,e){return gl(n.databaseId,e.path)}function er(n,e){const t=nm(e);if(t.get(1)!==n.databaseId.projectId)throw new B(D.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new B(D.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new U(im(t))}function rm(n,e){return gl(n.databaseId,e)}function sm(n){const e=nm(n);return e.length===4?ie.emptyPath():im(e)}function Rc(n){return new ie(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function im(n){return W(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function Qh(n,e,t){return{name:Lo(n,e),fields:t.value.mapValue.fields}}function RE(n,e,t){const r=er(n,e.name),s=Ke(e.updateTime),i=e.createTime?Ke(e.createTime):z.min(),o=new Je({mapValue:{fields:e.fields}}),c=Te.newFoundDocument(r,s,i,o);return t&&c.setHasCommittedMutations(),t?c.setHasCommittedMutations():c}function PE(n,e){let t;if("targetChange"in e){e.targetChange;const r=(function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:G(39313,{state:u})})(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=(function(u,d){return u.useProto3Json?(W(d===void 0||typeof d=="string",58123),Re.fromBase64String(d||"")):(W(d===void 0||d instanceof Buffer||d instanceof Uint8Array,16193),Re.fromUint8Array(d||new Uint8Array))})(n,e.targetChange.resumeToken),o=e.targetChange.cause,c=o&&(function(u){const d=u.code===void 0?D.UNKNOWN:Xp(u.code);return new B(d,u.message||"")})(o);t=new em(r,s,i,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=er(n,r.document.name),i=Ke(r.document.updateTime),o=r.document.createTime?Ke(r.document.createTime):z.min(),c=new Je({mapValue:{fields:r.document.fields}}),l=Te.newFoundDocument(s,i,o,c),u=r.targetIds||[],d=r.removedTargetIds||[];t=new go(u,d,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=er(n,r.document),i=r.readTime?Ke(r.readTime):z.min(),o=Te.newNoDocument(s,i),c=r.removedTargetIds||[];t=new go([],c,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=er(n,r.document),i=r.removedTargetIds||[];t=new go([],i,s,null)}else{if(!("filter"in e))return G(11601,{Vt:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new yE(s,i),c=r.targetId;t=new Zp(c,o)}}return t}function Mo(n,e){let t;if(e instanceof os)t={update:Qh(n,e.key,e.value)};else if(e instanceof ha)t={delete:Lo(n,e.key)};else if(e instanceof Vn)t={update:Qh(n,e.key,e.data),updateMask:VE(e.fieldMask)};else{if(!(e instanceof Jp))return G(16599,{dt:e.type});t={verify:Lo(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((r=>(function(i,o){const c=o.transform;if(c instanceof Zr)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof es)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof ts)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof di)return{fieldPath:o.field.canonicalString(),increment:c.Ae};throw G(20930,{transform:o.transform})})(0,r)))),e.precondition.isNone||(t.currentDocument=(function(s,i){return i.updateTime!==void 0?{updateTime:AE(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:G(27497)})(n,e.precondition)),t}function Pc(n,e){const t=e.currentDocument?(function(i){return i.updateTime!==void 0?Xe.updateTime(Ke(i.updateTime)):i.exists!==void 0?Xe.exists(i.exists):Xe.none()})(e.currentDocument):Xe.none(),r=e.updateTransforms?e.updateTransforms.map((s=>(function(o,c){let l=null;if("setToServerValue"in c)W(c.setToServerValue==="REQUEST_TIME",16630,{proto:c}),l=new Zr;else if("appendMissingElements"in c){const d=c.appendMissingElements.values||[];l=new es(d)}else if("removeAllFromArray"in c){const d=c.removeAllFromArray.values||[];l=new ts(d)}else"increment"in c?l=new di(o,c.increment):G(16584,{proto:c});const u=ye.fromServerFormat(c.fieldPath);return new Kp(u,l)})(n,s))):[];if(e.update){e.update.name;const s=er(n,e.update.name),i=new Je({mapValue:{fields:e.update.fields}});if(e.updateMask){const o=(function(l){const u=l.fieldPaths||[];return new dt(u.map((d=>ye.fromServerFormat(d))))})(e.updateMask);return new Vn(s,i,o,t,r)}return new os(s,i,t,r)}if(e.delete){const s=er(n,e.delete);return new ha(s,t)}if(e.verify){const s=er(n,e.verify);return new Jp(s,t)}return G(1463,{proto:e})}function kE(n,e){return n&&n.length>0?(W(e!==void 0,14353),n.map((t=>(function(s,i){let o=s.updateTime?Ke(s.updateTime):Ke(i);return o.isEqual(z.min())&&(o=Ke(i)),new pE(o,s.transformResults||[])})(t,e)))):[]}function om(n,e){return{documents:[rm(n,e.path)]}}function am(n,e){const t={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=rm(n,s);const i=(function(u){if(u.length!==0)return um(ce.create(u,"and"))})(e.filters);i&&(t.structuredQuery.where=i);const o=(function(u){if(u.length!==0)return u.map((d=>(function(y){return{field:Or(y.field),direction:xE(y.dir)}})(d)))})(e.orderBy);o&&(t.structuredQuery.orderBy=o);const c=bc(n,e.limit);return c!==null&&(t.structuredQuery.limit=c),e.startAt&&(t.structuredQuery.startAt=(function(u){return{before:u.inclusive,values:u.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(u){return{before:!u.inclusive,values:u.position}})(e.endAt)),{ft:t,parent:s}}function cm(n){let e=sm(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let s=null;if(r>0){W(r===1,65062);const d=t.from[0];d.allDescendants?s=d.collectionId:e=e.child(d.collectionId)}let i=[];t.where&&(i=(function(p){const y=lm(p);return y instanceof ce&&ul(y)?y.getFilters():[y]})(t.where));let o=[];t.orderBy&&(o=(function(p){return p.map((y=>(function(k){return new No(Lr(k.field),(function(C){switch(C){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(k.direction))})(y)))})(t.orderBy));let c=null;t.limit&&(c=(function(p){let y;return y=typeof p=="object"?p.value:p,ta(y)?null:y})(t.limit));let l=null;t.startAt&&(l=(function(p){const y=!!p.before,v=p.values||[];return new Jr(v,y)})(t.startAt));let u=null;return t.endAt&&(u=(function(p){const y=!p.before,v=p.values||[];return new Jr(v,y)})(t.endAt)),ZI(e,s,o,i,c,"F",l,u)}function CE(n,e){const t=(function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return G(28987,{purpose:s})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function lm(n){return n.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=Lr(t.unaryFilter.field);return re.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Lr(t.unaryFilter.field);return re.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Lr(t.unaryFilter.field);return re.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Lr(t.unaryFilter.field);return re.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return G(61313);default:return G(60726)}})(n):n.fieldFilter!==void 0?(function(t){return re.create(Lr(t.fieldFilter.field),(function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return G(58110);default:return G(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(n):n.compositeFilter!==void 0?(function(t){return ce.create(t.compositeFilter.filters.map((r=>lm(r))),(function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return G(1026)}})(t.compositeFilter.op))})(n):G(30097,{filter:n})}function xE(n){return EE[n]}function DE(n){return vE[n]}function NE(n){return SE[n]}function Or(n){return{fieldPath:n.canonicalString()}}function Lr(n){return ye.fromServerFormat(n.fieldPath)}function um(n){return n instanceof re?(function(t){if(t.op==="=="){if(Nh(t.value))return{unaryFilter:{field:Or(t.field),op:"IS_NAN"}};if(Dh(t.value))return{unaryFilter:{field:Or(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Nh(t.value))return{unaryFilter:{field:Or(t.field),op:"IS_NOT_NAN"}};if(Dh(t.value))return{unaryFilter:{field:Or(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Or(t.field),op:DE(t.op),value:t.value}}})(n):n instanceof ce?(function(t){const r=t.getFilters().map((s=>um(s)));return r.length===1?r[0]:{compositeFilter:{op:NE(t.op),filters:r}}})(n):G(54877,{filter:n})}function VE(n){const e=[];return n.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function hm(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}function dm(n){return!!n&&typeof n._toProto=="function"&&n._protoValueType==="ProtoValue"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ht{constructor(e,t,r,s,i=z.min(),o=z.min(),c=Re.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=c,this.expectedCount=l}withSequenceNumber(e){return new Ht(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Ht(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Ht(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Ht(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fm{constructor(e){this.yt=e}}function OE(n,e){let t;if(e.document)t=RE(n.yt,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const r=U.fromSegments(e.noDocument.path),s=hr(e.noDocument.readTime);t=Te.newNoDocument(r,s),e.hasCommittedMutations&&t.setHasCommittedMutations()}else{if(!e.unknownDocument)return G(56709);{const r=U.fromSegments(e.unknownDocument.path),s=hr(e.unknownDocument.version);t=Te.newUnknownDocument(r,s)}}return e.readTime&&t.setReadTime((function(s){const i=new oe(s[0],s[1]);return z.fromTimestamp(i)})(e.readTime)),t}function Yh(n,e){const t=e.key,r={prefixPath:t.getCollectionPath().popLast().toArray(),collectionGroup:t.collectionGroup,documentId:t.path.lastSegment(),readTime:Fo(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())r.document=(function(i,o){return{name:Lo(i,o.key),fields:o.data.value.mapValue.fields,updateTime:ns(i,o.version.toTimestamp()),createTime:ns(i,o.createTime.toTimestamp())}})(n.yt,e);else if(e.isNoDocument())r.noDocument={path:t.path.toArray(),readTime:ur(e.version)};else{if(!e.isUnknownDocument())return G(57904,{document:e});r.unknownDocument={path:t.path.toArray(),version:ur(e.version)}}return r}function Fo(n){const e=n.toTimestamp();return[e.seconds,e.nanoseconds]}function ur(n){const e=n.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function hr(n){const e=new oe(n.seconds,n.nanoseconds);return z.fromTimestamp(e)}function zn(n,e){const t=(e.baseMutations||[]).map((i=>Pc(n.yt,i)));for(let i=0;i<e.mutations.length-1;++i){const o=e.mutations[i];if(i+1<e.mutations.length&&e.mutations[i+1].transform!==void 0){const c=e.mutations[i+1];o.updateTransforms=c.transform.fieldTransforms,e.mutations.splice(i+1,1),++i}}const r=e.mutations.map((i=>Pc(n.yt,i))),s=oe.fromMillis(e.localWriteTimeMs);return new dl(e.batchId,s,t,r)}function Bs(n){const e=hr(n.readTime),t=n.lastLimboFreeSnapshotVersion!==void 0?hr(n.lastLimboFreeSnapshotVersion):z.min();let r;return r=(function(i){return i.documents!==void 0})(n.query)?(function(i){const o=i.documents.length;return W(o===1,1966,{count:o}),pt(Si(sm(i.documents[0])))})(n.query):(function(i){return pt(cm(i))})(n.query),new Ht(r,n.targetId,"TargetPurposeListen",n.lastListenSequenceNumber,e,t,Re.fromBase64String(n.resumeToken))}function pm(n,e){const t=ur(e.snapshotVersion),r=ur(e.lastLimboFreeSnapshotVersion);let s;s=Vo(e.target)?om(n.yt,e.target):am(n.yt,e.target).ft;const i=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:lr(e.target),readTime:t,resumeToken:i,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:r,query:s}}function mm(n){const e=cm({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Sc(e,e.limit,"L"):e}function za(n,e){return new pl(e.largestBatchId,Pc(n.yt,e.overlayMutation))}function Jh(n,e){const t=e.path.lastSegment();return[n,qe(e.path.popLast()),t]}function Xh(n,e,t,r){return{indexId:n,uid:e,sequenceNumber:t,readTime:ur(r.readTime),documentKey:qe(r.documentKey.path),largestBatchId:r.largestBatchId}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LE{getBundleMetadata(e,t){return Zh(e).get(t).next((r=>{if(r)return(function(i){return{id:i.bundleId,createTime:hr(i.createTime),version:i.version}})(r)}))}saveBundleMetadata(e,t){return Zh(e).put((function(s){return{bundleId:s.id,createTime:ur(Ke(s.createTime)),version:s.version}})(t))}getNamedQuery(e,t){return ed(e).get(t).next((r=>{if(r)return(function(i){return{name:i.name,query:mm(i.bundledQuery),readTime:hr(i.readTime)}})(r)}))}saveNamedQuery(e,t){return ed(e).put((function(s){return{name:s.name,readTime:ur(Ke(s.readTime)),bundledQuery:s.bundledQuery}})(t))}}function Zh(n){return Ce(n,na)}function ed(n){return Ce(n,ra)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fa{constructor(e,t){this.serializer=e,this.userId=t}static wt(e,t){const r=t.uid||"";return new fa(e,r)}getOverlay(e,t){return Rs(e).get(Jh(this.userId,t)).next((r=>r?za(this.serializer,r):null))}getOverlays(e,t){const r=Vt();return b.forEach(t,(s=>this.getOverlay(e,s).next((i=>{i!==null&&r.set(s,i)})))).next((()=>r))}saveOverlays(e,t,r){const s=[];return r.forEach(((i,o)=>{const c=new pl(t,o);s.push(this.St(e,c))})),b.waitFor(s)}removeOverlaysForBatchId(e,t,r){const s=new Set;t.forEach((o=>s.add(qe(o.getCollectionPath()))));const i=[];return s.forEach((o=>{const c=IDBKeyRange.bound([this.userId,o,r],[this.userId,o,r+1],!1,!0);i.push(Rs(e).X(yc,c))})),b.waitFor(i)}getOverlaysForCollection(e,t,r){const s=Vt(),i=qe(t),o=IDBKeyRange.bound([this.userId,i,r],[this.userId,i,Number.POSITIVE_INFINITY],!0);return Rs(e).J(yc,o).next((c=>{for(const l of c){const u=za(this.serializer,l);s.set(u.getKey(),u)}return s}))}getOverlaysForCollectionGroup(e,t,r,s){const i=Vt();let o;const c=IDBKeyRange.bound([this.userId,t,r],[this.userId,t,Number.POSITIVE_INFINITY],!0);return Rs(e).ee({index:gp,range:c},((l,u,d)=>{const p=za(this.serializer,u);i.size()<s||p.largestBatchId===o?(i.set(p.getKey(),p),o=p.largestBatchId):d.done()})).next((()=>i))}St(e,t){return Rs(e).put((function(s,i,o){const[c,l,u]=Jh(i,o.mutation.key);return{userId:i,collectionPath:l,documentId:u,collectionGroup:o.mutation.key.getCollectionGroup(),largestBatchId:o.largestBatchId,overlayMutation:Mo(s.yt,o.mutation)}})(this.serializer,this.userId,t))}}function Rs(n){return Ce(n,sa)}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ME{bt(e){return Ce(e,sl)}getSessionToken(e){return this.bt(e).get("sessionToken").next((t=>{const r=t==null?void 0:t.value;return r?Re.fromUint8Array(r):Re.EMPTY_BYTE_STRING}))}setSessionToken(e,t){return this.bt(e).put({name:"sessionToken",value:t.toUint8Array()})}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hn{constructor(){}Dt(e,t){this.Ct(e,t),t.vt()}Ct(e,t){if("nullValue"in e)this.Ft(t,5);else if("booleanValue"in e)this.Ft(t,10),t.Mt(e.booleanValue?1:0);else if("integerValue"in e)this.Ft(t,15),t.Mt(me(e.integerValue));else if("doubleValue"in e){const r=me(e.doubleValue);isNaN(r)?this.Ft(t,13):(this.Ft(t,15),ii(r)?t.Mt(0):t.Mt(r))}else if("timestampValue"in e){let r=e.timestampValue;this.Ft(t,20),typeof r=="string"&&(r=Xt(r)),t.xt(`${r.seconds||""}`),t.Mt(r.nanos||0)}else if("stringValue"in e)this.Ot(e.stringValue,t),this.Nt(t);else if("bytesValue"in e)this.Ft(t,30),t.Bt(Zt(e.bytesValue)),this.Nt(t);else if("referenceValue"in e)this.Lt(e.referenceValue,t);else if("geoPointValue"in e){const r=e.geoPointValue;this.Ft(t,45),t.Mt(r.latitude||0),t.Mt(r.longitude||0)}else"mapValue"in e?Pp(e)?this.Ft(t,Number.MAX_SAFE_INTEGER):oa(e)?this.kt(e.mapValue,t):(this.qt(e.mapValue,t),this.Nt(t)):"arrayValue"in e?(this.Kt(e.arrayValue,t),this.Nt(t)):G(19022,{Ut:e})}Ot(e,t){this.Ft(t,25),this.$t(e,t)}$t(e,t){t.xt(e)}qt(e,t){const r=e.fields||{};this.Ft(t,55);for(const s of Object.keys(r))this.Ot(s,t),this.Ct(r[s],t)}kt(e,t){var o,c;const r=e.fields||{};this.Ft(t,53);const s=Qr,i=((c=(o=r[s].arrayValue)==null?void 0:o.values)==null?void 0:c.length)||0;this.Ft(t,15),t.Mt(me(i)),this.Ot(s,t),this.Ct(r[s],t)}Kt(e,t){const r=e.values||[];this.Ft(t,50);for(const s of r)this.Ct(s,t)}Lt(e,t){this.Ft(t,37),U.fromName(e).path.forEach((r=>{this.Ft(t,60),this.$t(r,t)}))}Ft(e,t){e.Mt(t)}Nt(e){e.Mt(2)}}Hn.Wt=new Hn;/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law | agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES | CONDITIONS OF ANY KIND, either express | implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pr=255;function FE(n){if(n===0)return 8;let e=0;return n>>4||(e+=4,n<<=4),n>>6||(e+=2,n<<=2),n>>7||(e+=1),e}function td(n){const e=64-(function(r){let s=0;for(let i=0;i<8;++i){const o=FE(255&r[i]);if(s+=o,o!==8)break}return s})(n);return Math.ceil(e/8)}class UE{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Qt(e){const t=e[Symbol.iterator]();let r=t.next();for(;!r.done;)this.Gt(r.value),r=t.next();this.zt()}jt(e){const t=e[Symbol.iterator]();let r=t.next();for(;!r.done;)this.Jt(r.value),r=t.next();this.Ht()}Zt(e){for(const t of e){const r=t.charCodeAt(0);if(r<128)this.Gt(r);else if(r<2048)this.Gt(960|r>>>6),this.Gt(128|63&r);else if(t<"\uD800"||"\uDBFF"<t)this.Gt(480|r>>>12),this.Gt(128|63&r>>>6),this.Gt(128|63&r);else{const s=t.codePointAt(0);this.Gt(240|s>>>18),this.Gt(128|63&s>>>12),this.Gt(128|63&s>>>6),this.Gt(128|63&s)}}this.zt()}Xt(e){for(const t of e){const r=t.charCodeAt(0);if(r<128)this.Jt(r);else if(r<2048)this.Jt(960|r>>>6),this.Jt(128|63&r);else if(t<"\uD800"||"\uDBFF"<t)this.Jt(480|r>>>12),this.Jt(128|63&r>>>6),this.Jt(128|63&r);else{const s=t.codePointAt(0);this.Jt(240|s>>>18),this.Jt(128|63&s>>>12),this.Jt(128|63&s>>>6),this.Jt(128|63&s)}}this.Ht()}Yt(e){const t=this.en(e),r=td(t);this.tn(1+r),this.buffer[this.position++]=255&r;for(let s=t.length-r;s<t.length;++s)this.buffer[this.position++]=255&t[s]}nn(e){const t=this.en(e),r=td(t);this.tn(1+r),this.buffer[this.position++]=~(255&r);for(let s=t.length-r;s<t.length;++s)this.buffer[this.position++]=~(255&t[s])}rn(){this.sn(Pr),this.sn(255)}_n(){this.an(Pr),this.an(255)}reset(){this.position=0}seed(e){this.tn(e.length),this.buffer.set(e,this.position),this.position+=e.length}un(){return this.buffer.slice(0,this.position)}en(e){const t=(function(i){const o=new DataView(new ArrayBuffer(8));return o.setFloat64(0,i,!1),new Uint8Array(o.buffer)})(e),r=!!(128&t[0]);t[0]^=r?255:128;for(let s=1;s<t.length;++s)t[s]^=r?255:0;return t}Gt(e){const t=255&e;t===0?(this.sn(0),this.sn(255)):t===Pr?(this.sn(Pr),this.sn(0)):this.sn(t)}Jt(e){const t=255&e;t===0?(this.an(0),this.an(255)):t===Pr?(this.an(Pr),this.an(0)):this.an(e)}zt(){this.sn(0),this.sn(1)}Ht(){this.an(0),this.an(1)}sn(e){this.tn(1),this.buffer[this.position++]=e}an(e){this.tn(1),this.buffer[this.position++]=~e}tn(e){const t=e+this.position;if(t<=this.buffer.length)return;let r=2*this.buffer.length;r<t&&(r=t);const s=new Uint8Array(r);s.set(this.buffer),this.buffer=s}}class $E{constructor(e){this.cn=e}Bt(e){this.cn.Qt(e)}xt(e){this.cn.Zt(e)}Mt(e){this.cn.Yt(e)}vt(){this.cn.rn()}}class BE{constructor(e){this.cn=e}Bt(e){this.cn.jt(e)}xt(e){this.cn.Xt(e)}Mt(e){this.cn.nn(e)}vt(){this.cn._n()}}class Ps{constructor(){this.cn=new UE,this.ascending=new $E(this.cn),this.descending=new BE(this.cn)}seed(e){this.cn.seed(e)}ln(e){return e===0?this.ascending:this.descending}un(){return this.cn.un()}reset(){this.cn.reset()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kn{constructor(e,t,r,s){this.hn=e,this.Pn=t,this.Tn=r,this.En=s}In(){const e=this.En.length,t=e===0||this.En[e-1]===255?e+1:e,r=new Uint8Array(t);return r.set(this.En,0),t!==e?r.set([0],this.En.length):++r[r.length-1],new Kn(this.hn,this.Pn,this.Tn,r)}Rn(e,t,r){return{indexId:this.hn,uid:e,arrayValue:yo(this.Tn),directionalValue:yo(this.En),orderedDocumentKey:yo(t),documentKey:r.path.toArray()}}An(e,t,r){const s=this.Rn(e,t,r);return[s.indexId,s.uid,s.arrayValue,s.directionalValue,s.orderedDocumentKey,s.documentKey]}}function ln(n,e){let t=n.hn-e.hn;return t!==0?t:(t=nd(n.Tn,e.Tn),t!==0?t:(t=nd(n.En,e.En),t!==0?t:U.comparator(n.Pn,e.Pn)))}function nd(n,e){for(let t=0;t<n.length&&t<e.length;++t){const r=n[t]-e[t];if(r!==0)return r}return n.length-e.length}function yo(n){return of()?(function(t){let r="";for(let s=0;s<t.length;s++)r+=String.fromCharCode(t[s]);return r})(n):n}function rd(n){return typeof n!="string"?n:(function(t){const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r})(n)}class sd{constructor(e){this.Vn=new ae(((t,r)=>ye.comparator(t.field,r.field))),this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.dn=e.orderBy,this.mn=[];for(const t of e.filters){const r=t;r.isInequality()?this.Vn=this.Vn.add(r):this.mn.push(r)}}get fn(){return this.Vn.size>1}gn(e){if(W(e.collectionGroup===this.collectionId,49279),this.fn)return!1;const t=pc(e);if(t!==void 0&&!this.pn(t))return!1;const r=jn(e);let s=new Set,i=0,o=0;for(;i<r.length&&this.pn(r[i]);++i)s=s.add(r[i].fieldPath.canonicalString());if(i===r.length)return!0;if(this.Vn.size>0){const c=this.Vn.getIterator().getNext();if(!s.has(c.field.canonicalString())){const l=r[i];if(!this.yn(c,l)||!this.wn(this.dn[o++],l))return!1}++i}for(;i<r.length;++i){const c=r[i];if(o>=this.dn.length||!this.wn(this.dn[o++],c))return!1}return!0}Sn(){if(this.fn)return null;let e=new ae(ye.comparator);const t=[];for(const r of this.mn)if(!r.field.isKeyField())if(r.op==="array-contains"||r.op==="array-contains-any")t.push(new co(r.field,2));else{if(e.has(r.field))continue;e=e.add(r.field),t.push(new co(r.field,0))}for(const r of this.dn)r.field.isKeyField()||e.has(r.field)||(e=e.add(r.field),t.push(new co(r.field,r.dir==="asc"?0:1)));return new Po(Po.UNKNOWN_ID,this.collectionId,t,si.empty())}pn(e){for(const t of this.mn)if(this.yn(t,e))return!0;return!1}yn(e,t){if(e===void 0||!e.field.isEqual(t.fieldPath))return!1;const r=e.op==="array-contains"||e.op==="array-contains-any";return t.kind===2===r}wn(e,t){return!!e.field.isEqual(t.fieldPath)&&(t.kind===0&&e.dir==="asc"||t.kind===1&&e.dir==="desc")}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gm(n){var t,r;if(W(n instanceof re||n instanceof ce,20012),n instanceof re){if(n instanceof Mp){const s=((r=(t=n.value.arrayValue)==null?void 0:t.values)==null?void 0:r.map((i=>re.create(n.field,"==",i))))||[];return ce.create(s,"or")}return n}const e=n.filters.map((s=>gm(s)));return ce.create(e,n.op)}function qE(n){if(n.getFilters().length===0)return[];const e=xc(gm(n));return W(ym(e),7391),kc(e)||Cc(e)?[e]:e.getFilters()}function kc(n){return n instanceof re}function Cc(n){return n instanceof ce&&ul(n)}function ym(n){return kc(n)||Cc(n)||(function(t){if(t instanceof ce&&Ic(t)){for(const r of t.getFilters())if(!kc(r)&&!Cc(r))return!1;return!0}return!1})(n)}function xc(n){if(W(n instanceof re||n instanceof ce,34018),n instanceof re)return n;if(n.filters.length===1)return xc(n.filters[0]);const e=n.filters.map((r=>xc(r)));let t=ce.create(e,n.op);return t=Uo(t),ym(t)?t:(W(t instanceof ce,64498),W(Xr(t),40251),W(t.filters.length>1,57927),t.filters.reduce(((r,s)=>yl(r,s))))}function yl(n,e){let t;return W(n instanceof re||n instanceof ce,38388),W(e instanceof re||e instanceof ce,25473),t=n instanceof re?e instanceof re?(function(s,i){return ce.create([s,i],"and")})(n,e):id(n,e):e instanceof re?id(e,n):(function(s,i){if(W(s.filters.length>0&&i.filters.length>0,48005),Xr(s)&&Xr(i))return Vp(s,i.getFilters());const o=Ic(s)?s:i,c=Ic(s)?i:s,l=o.filters.map((u=>yl(u,c)));return ce.create(l,"or")})(n,e),Uo(t)}function id(n,e){if(Xr(e))return Vp(e,n.getFilters());{const t=e.filters.map((r=>yl(n,r)));return ce.create(t,"or")}}function Uo(n){if(W(n instanceof re||n instanceof ce,11850),n instanceof re)return n;const e=n.getFilters();if(e.length===1)return Uo(e[0]);if(Dp(n))return n;const t=e.map((s=>Uo(s))),r=[];return t.forEach((s=>{s instanceof re?r.push(s):s instanceof ce&&(s.op===n.op?r.push(...s.filters):r.push(s))})),r.length===1?r[0]:ce.create(r,n.op)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jE{constructor(){this.bn=new _l}addToCollectionParentIndex(e,t){return this.bn.add(t),b.resolve()}getCollectionParents(e,t){return b.resolve(this.bn.getEntries(t))}addFieldIndex(e,t){return b.resolve()}deleteFieldIndex(e,t){return b.resolve()}deleteAllFieldIndexes(e){return b.resolve()}createTargetIndexes(e,t){return b.resolve()}getDocumentsMatchingTarget(e,t){return b.resolve(null)}getIndexType(e,t){return b.resolve(0)}getFieldIndexes(e,t){return b.resolve([])}getNextCollectionGroupToUpdate(e){return b.resolve(null)}getMinOffset(e,t){return b.resolve(ot.min())}getMinOffsetFromCollectionGroup(e,t){return b.resolve(ot.min())}updateCollectionGroup(e,t,r){return b.resolve()}updateIndexEntries(e,t){return b.resolve()}}class _l{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t]||new ae(ie.comparator),i=!s.has(r);return this.index[t]=s.add(r),i}has(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t];return s&&s.has(r)}getEntries(e){return(this.index[e]||new ae(ie.comparator)).toArray()}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const od="IndexedDbIndexManager",Ki=new Uint8Array(0);class GE{constructor(e,t){this.databaseId=t,this.Dn=new _l,this.Cn=new en((r=>lr(r)),((r,s)=>vi(r,s))),this.uid=e.uid||""}addToCollectionParentIndex(e,t){if(!this.Dn.has(t)){const r=t.lastSegment(),s=t.popLast();e.addOnCommittedListener((()=>{this.Dn.add(t)}));const i={collectionId:r,parent:qe(s)};return ad(e).put(i)}return b.resolve()}getCollectionParents(e,t){const r=[],s=IDBKeyRange.bound([t,""],[sp(t),""],!1,!0);return ad(e).J(s).next((i=>{for(const o of i){if(o.collectionId!==t)break;r.push(Nt(o.parent))}return r}))}addFieldIndex(e,t){const r=ks(e),s=(function(c){return{indexId:c.indexId,collectionGroup:c.collectionGroup,fields:c.fields.map((l=>[l.fieldPath.canonicalString(),l.kind]))}})(t);delete s.indexId;const i=r.add(s);if(t.indexState){const o=Cr(e);return i.next((c=>{o.put(Xh(c,this.uid,t.indexState.sequenceNumber,t.indexState.offset))}))}return i.next()}deleteFieldIndex(e,t){const r=ks(e),s=Cr(e),i=kr(e);return r.delete(t.indexId).next((()=>s.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0)))).next((()=>i.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0))))}deleteAllFieldIndexes(e){const t=ks(e),r=kr(e),s=Cr(e);return t.X().next((()=>r.X())).next((()=>s.X()))}createTargetIndexes(e,t){return b.forEach(this.vn(t),(r=>this.getIndexType(e,r).next((s=>{if(s===0||s===1){const i=new sd(r).Sn();if(i!=null)return this.addFieldIndex(e,i)}}))))}getDocumentsMatchingTarget(e,t){const r=kr(e);let s=!0;const i=new Map;return b.forEach(this.vn(t),(o=>this.Fn(e,o).next((c=>{s&&(s=!!c),i.set(o,c)})))).next((()=>{if(s){let o=Z();const c=[];return b.forEach(i,((l,u)=>{N(od,`Using index ${(function(x){return`id=${x.indexId}|cg=${x.collectionGroup}|f=${x.fields.map((L=>`${L.fieldPath}:${L.kind}`)).join(",")}`})(l)} to execute ${lr(t)}`);const d=(function(x,L){const q=pc(L);if(q===void 0)return null;for(const j of Oo(x,q.fieldPath))switch(j.op){case"array-contains-any":return j.value.arrayValue.values||[];case"array-contains":return[j.value]}return null})(u,l),p=(function(x,L){const q=new Map;for(const j of jn(L))for(const T of Oo(x,j.fieldPath))switch(T.op){case"==":case"in":q.set(j.fieldPath.canonicalString(),T.value);break;case"not-in":case"!=":return q.set(j.fieldPath.canonicalString(),T.value),Array.from(q.values())}return null})(u,l),y=(function(x,L){const q=[];let j=!0;for(const T of jn(L)){const g=T.kind===0?Fh(x,T.fieldPath,x.startAt):Uh(x,T.fieldPath,x.startAt);q.push(g.value),j&&(j=g.inclusive)}return new Jr(q,j)})(u,l),v=(function(x,L){const q=[];let j=!0;for(const T of jn(L)){const g=T.kind===0?Uh(x,T.fieldPath,x.endAt):Fh(x,T.fieldPath,x.endAt);q.push(g.value),j&&(j=g.inclusive)}return new Jr(q,j)})(u,l),k=this.Mn(l,u,y),P=this.Mn(l,u,v),C=this.xn(l,u,p),V=this.On(l.indexId,d,k,y.inclusive,P,v.inclusive,C);return b.forEach(V,(O=>r.Z(O,t.limit).next((x=>{x.forEach((L=>{const q=U.fromSegments(L.documentKey);o.has(q)||(o=o.add(q),c.push(q))}))}))))})).next((()=>c))}return b.resolve(null)}))}vn(e){let t=this.Cn.get(e);return t||(e.filters.length===0?t=[e]:t=qE(ce.create(e.filters,"and")).map((r=>vc(e.path,e.collectionGroup,e.orderBy,r.getFilters(),e.limit,e.startAt,e.endAt))),this.Cn.set(e,t),t)}On(e,t,r,s,i,o,c){const l=(t!=null?t.length:1)*Math.max(r.length,i.length),u=l/(t!=null?t.length:1),d=[];for(let p=0;p<l;++p){const y=t?this.Nn(t[p/u]):Ki,v=this.Bn(e,y,r[p%u],s),k=this.Ln(e,y,i[p%u],o),P=c.map((C=>this.Bn(e,y,C,!0)));d.push(...this.createRange(v,k,P))}return d}Bn(e,t,r,s){const i=new Kn(e,U.empty(),t,r);return s?i:i.In()}Ln(e,t,r,s){const i=new Kn(e,U.empty(),t,r);return s?i.In():i}Fn(e,t){const r=new sd(t),s=t.collectionGroup!=null?t.collectionGroup:t.path.lastSegment();return this.getFieldIndexes(e,s).next((i=>{let o=null;for(const c of i)r.gn(c)&&(!o||c.fields.length>o.fields.length)&&(o=c);return o}))}getIndexType(e,t){let r=2;const s=this.vn(t);return b.forEach(s,(i=>this.Fn(e,i).next((o=>{o?r!==0&&o.fields.length<(function(l){let u=new ae(ye.comparator),d=!1;for(const p of l.filters)for(const y of p.getFlattenedFilters())y.field.isKeyField()||(y.op==="array-contains"||y.op==="array-contains-any"?d=!0:u=u.add(y.field));for(const p of l.orderBy)p.field.isKeyField()||(u=u.add(p.field));return u.size+(d?1:0)})(i)&&(r=1):r=0})))).next((()=>(function(o){return o.limit!==null})(t)&&s.length>1&&r===2?1:r))}kn(e,t){const r=new Ps;for(const s of jn(e)){const i=t.data.field(s.fieldPath);if(i==null)return null;const o=r.ln(s.kind);Hn.Wt.Dt(i,o)}return r.un()}Nn(e){const t=new Ps;return Hn.Wt.Dt(e,t.ln(0)),t.un()}qn(e,t){const r=new Ps;return Hn.Wt.Dt(ll(this.databaseId,t),r.ln((function(i){const o=jn(i);return o.length===0?0:o[o.length-1].kind})(e))),r.un()}xn(e,t,r){if(r===null)return[];let s=[];s.push(new Ps);let i=0;for(const o of jn(e)){const c=r[i++];for(const l of s)if(this.Kn(t,o.fieldPath)&&hi(c))s=this.Un(s,o,c);else{const u=l.ln(o.kind);Hn.Wt.Dt(c,u)}}return this.$n(s)}Mn(e,t,r){return this.xn(e,t,r.position)}$n(e){const t=[];for(let r=0;r<e.length;++r)t[r]=e[r].un();return t}Un(e,t,r){const s=[...e],i=[];for(const o of r.arrayValue.values||[])for(const c of s){const l=new Ps;l.seed(c.un()),Hn.Wt.Dt(o,l.ln(t.kind)),i.push(l)}return i}Kn(e,t){return!!e.filters.find((r=>r instanceof re&&r.field.isEqual(t)&&(r.op==="in"||r.op==="not-in")))}getFieldIndexes(e,t){const r=ks(e),s=Cr(e);return(t?r.J(gc,IDBKeyRange.bound(t,t)):r.J()).next((i=>{const o=[];return b.forEach(i,(c=>s.get([c.indexId,this.uid]).next((l=>{o.push((function(d,p){const y=p?new si(p.sequenceNumber,new ot(hr(p.readTime),new U(Nt(p.documentKey)),p.largestBatchId)):si.empty(),v=d.fields.map((([k,P])=>new co(ye.fromServerFormat(k),P)));return new Po(d.indexId,d.collectionGroup,v,y)})(c,l))})))).next((()=>o))}))}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next((t=>t.length===0?null:(t.sort(((r,s)=>{const i=r.indexState.sequenceNumber-s.indexState.sequenceNumber;return i!==0?i:Q(r.collectionGroup,s.collectionGroup)})),t[0].collectionGroup)))}updateCollectionGroup(e,t,r){const s=ks(e),i=Cr(e);return this.Wn(e).next((o=>s.J(gc,IDBKeyRange.bound(t,t)).next((c=>b.forEach(c,(l=>i.put(Xh(l.indexId,this.uid,o,r))))))))}updateIndexEntries(e,t){const r=new Map;return b.forEach(t,((s,i)=>{const o=r.get(s.collectionGroup);return(o?b.resolve(o):this.getFieldIndexes(e,s.collectionGroup)).next((c=>(r.set(s.collectionGroup,c),b.forEach(c,(l=>this.Qn(e,s,l).next((u=>{const d=this.Gn(i,l);return u.isEqual(d)?b.resolve():this.zn(e,i,l,u,d)})))))))}))}jn(e,t,r,s){return kr(e).put(s.Rn(this.uid,this.qn(r,t.key),t.key))}Jn(e,t,r,s){return kr(e).delete(s.An(this.uid,this.qn(r,t.key),t.key))}Qn(e,t,r){const s=kr(e);let i=new ae(ln);return s.ee({index:mp,range:IDBKeyRange.only([r.indexId,this.uid,yo(this.qn(r,t))])},((o,c)=>{i=i.add(new Kn(r.indexId,t,rd(c.arrayValue),rd(c.directionalValue)))})).next((()=>i))}Gn(e,t){let r=new ae(ln);const s=this.kn(t,e);if(s==null)return r;const i=pc(t);if(i!=null){const o=e.data.field(i.fieldPath);if(hi(o))for(const c of o.arrayValue.values||[])r=r.add(new Kn(t.indexId,e.key,this.Nn(c),s))}else r=r.add(new Kn(t.indexId,e.key,Ki,s));return r}zn(e,t,r,s,i){N(od,"Updating index entries for document '%s'",t.key);const o=[];return(function(l,u,d,p,y){const v=l.getIterator(),k=u.getIterator();let P=Rr(v),C=Rr(k);for(;P||C;){let V=!1,O=!1;if(P&&C){const x=d(P,C);x<0?O=!0:x>0&&(V=!0)}else P!=null?O=!0:V=!0;V?(p(C),C=Rr(k)):O?(y(P),P=Rr(v)):(P=Rr(v),C=Rr(k))}})(s,i,ln,(c=>{o.push(this.jn(e,t,r,c))}),(c=>{o.push(this.Jn(e,t,r,c))})),b.waitFor(o)}Wn(e){let t=1;return Cr(e).ee({index:pp,reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},((r,s,i)=>{i.done(),t=s.sequenceNumber+1})).next((()=>t))}createRange(e,t,r){r=r.sort(((o,c)=>ln(o,c))).filter(((o,c,l)=>!c||ln(o,l[c-1])!==0));const s=[];s.push(e);for(const o of r){const c=ln(o,e),l=ln(o,t);if(c===0)s[0]=e.In();else if(c>0&&l<0)s.push(o),s.push(o.In());else if(l>0)break}s.push(t);const i=[];for(let o=0;o<s.length;o+=2){if(this.Hn(s[o],s[o+1]))return[];const c=s[o].An(this.uid,Ki,U.empty()),l=s[o+1].An(this.uid,Ki,U.empty());i.push(IDBKeyRange.bound(c,l))}return i}Hn(e,t){return ln(e,t)>0}getMinOffsetFromCollectionGroup(e,t){return this.getFieldIndexes(e,t).next(cd)}getMinOffset(e,t){return b.mapArray(this.vn(t),(r=>this.Fn(e,r).next((s=>s||G(44426))))).next(cd)}}function ad(n){return Ce(n,ci)}function kr(n){return Ce(n,Hs)}function ks(n){return Ce(n,rl)}function Cr(n){return Ce(n,zs)}function cd(n){W(n.length!==0,28825);let e=n[0].indexState.offset,t=e.largestBatchId;for(let r=1;r<n.length;r++){const s=n[r].indexState.offset;el(s,e)<0&&(e=s),t<s.largestBatchId&&(t=s.largestBatchId)}return new ot(e.readTime,e.documentKey,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ld={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},_m=41943040;class $e{static withCacheSize(e){return new $e(e,$e.DEFAULT_COLLECTION_PERCENTILE,$e.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wm(n,e,t){const r=n.store(Tt),s=n.store(Wr),i=[],o=IDBKeyRange.only(t.batchId);let c=0;const l=r.ee({range:o},((d,p,y)=>(c++,y.delete())));i.push(l.next((()=>{W(c===1,47070,{batchId:t.batchId})})));const u=[];for(const d of t.mutations){const p=hp(e,d.key.path,t.batchId);i.push(s.delete(p)),u.push(d.key)}return b.waitFor(i).next((()=>u))}function $o(n){if(!n)return 0;let e;if(n.document)e=n.document;else if(n.unknownDocument)e=n.unknownDocument;else{if(!n.noDocument)throw G(14731);e=n.noDocument}return JSON.stringify(e).length}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */$e.DEFAULT_COLLECTION_PERCENTILE=10,$e.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,$e.DEFAULT=new $e(_m,$e.DEFAULT_COLLECTION_PERCENTILE,$e.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),$e.DISABLED=new $e(-1,0,0);class pa{constructor(e,t,r,s){this.userId=e,this.serializer=t,this.indexManager=r,this.referenceDelegate=s,this.Zn={}}static wt(e,t,r,s){W(e.uid!=="",64387);const i=e.isAuthenticated()?e.uid:"";return new pa(i,t,r,s)}checkEmpty(e){let t=!0;const r=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return un(e).ee({index:Jn,range:r},((s,i,o)=>{t=!1,o.done()})).next((()=>t))}addMutationBatch(e,t,r,s){const i=Mr(e),o=un(e);return o.add({}).next((c=>{W(typeof c=="number",49019);const l=new dl(c,t,r,s),u=(function(v,k,P){const C=P.baseMutations.map((O=>Mo(v.yt,O))),V=P.mutations.map((O=>Mo(v.yt,O)));return{userId:k,batchId:P.batchId,localWriteTimeMs:P.localWriteTime.toMillis(),baseMutations:C,mutations:V}})(this.serializer,this.userId,l),d=[];let p=new ae(((y,v)=>Q(y.canonicalString(),v.canonicalString())));for(const y of s){const v=hp(this.userId,y.key.path,c);p=p.add(y.key.path.popLast()),d.push(o.put(u)),d.push(i.put(v,gI))}return p.forEach((y=>{d.push(this.indexManager.addToCollectionParentIndex(e,y))})),e.addOnCommittedListener((()=>{this.Zn[c]=l.keys()})),b.waitFor(d).next((()=>l))}))}lookupMutationBatch(e,t){return un(e).get(t).next((r=>r?(W(r.userId===this.userId,48,"Unexpected user for mutation batch",{userId:r.userId,batchId:t}),zn(this.serializer,r)):null))}Xn(e,t){return this.Zn[t]?b.resolve(this.Zn[t]):this.lookupMutationBatch(e,t).next((r=>{if(r){const s=r.keys();return this.Zn[t]=s,s}return null}))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=IDBKeyRange.lowerBound([this.userId,r]);let i=null;return un(e).ee({index:Jn,range:s},((o,c,l)=>{c.userId===this.userId&&(W(c.batchId>=r,47524,{Yn:r}),i=zn(this.serializer,c)),l.done()})).next((()=>i))}getHighestUnacknowledgedBatchId(e){const t=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let r=Xn;return un(e).ee({index:Jn,range:t,reverse:!0},((s,i,o)=>{r=i.batchId,o.done()})).next((()=>r))}getAllMutationBatches(e){const t=IDBKeyRange.bound([this.userId,Xn],[this.userId,Number.POSITIVE_INFINITY]);return un(e).J(Jn,t).next((r=>r.map((s=>zn(this.serializer,s)))))}getAllMutationBatchesAffectingDocumentKey(e,t){const r=lo(this.userId,t.path),s=IDBKeyRange.lowerBound(r),i=[];return Mr(e).ee({range:s},((o,c,l)=>{const[u,d,p]=o,y=Nt(d);if(u===this.userId&&t.path.isEqual(y))return un(e).get(p).next((v=>{if(!v)throw G(61480,{er:o,batchId:p});W(v.userId===this.userId,10503,"Unexpected user for mutation batch",{userId:v.userId,batchId:p}),i.push(zn(this.serializer,v))}));l.done()})).next((()=>i))}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new ae(Q);const s=[];return t.forEach((i=>{const o=lo(this.userId,i.path),c=IDBKeyRange.lowerBound(o),l=Mr(e).ee({range:c},((u,d,p)=>{const[y,v,k]=u,P=Nt(v);y===this.userId&&i.path.isEqual(P)?r=r.add(k):p.done()}));s.push(l)})),b.waitFor(s).next((()=>this.tr(e,r)))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1,i=lo(this.userId,r),o=IDBKeyRange.lowerBound(i);let c=new ae(Q);return Mr(e).ee({range:o},((l,u,d)=>{const[p,y,v]=l,k=Nt(y);p===this.userId&&r.isPrefixOf(k)?k.length===s&&(c=c.add(v)):d.done()})).next((()=>this.tr(e,c)))}tr(e,t){const r=[],s=[];return t.forEach((i=>{s.push(un(e).get(i).next((o=>{if(o===null)throw G(35274,{batchId:i});W(o.userId===this.userId,9748,"Unexpected user for mutation batch",{userId:o.userId,batchId:i}),r.push(zn(this.serializer,o))})))})),b.waitFor(s).next((()=>r))}removeMutationBatch(e,t){return wm(e.le,this.userId,t).next((r=>(e.addOnCommittedListener((()=>{this.nr(t.batchId)})),b.forEach(r,(s=>this.referenceDelegate.markPotentiallyOrphaned(e,s))))))}nr(e){delete this.Zn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next((t=>{if(!t)return b.resolve();const r=IDBKeyRange.lowerBound((function(o){return[o]})(this.userId)),s=[];return Mr(e).ee({range:r},((i,o,c)=>{if(i[0]===this.userId){const l=Nt(i[1]);s.push(l)}else c.done()})).next((()=>{W(s.length===0,56720,{rr:s.map((i=>i.canonicalString()))})}))}))}containsKey(e,t){return Tm(e,this.userId,t)}ir(e){return Im(e).get(this.userId).next((t=>t||{userId:this.userId,lastAcknowledgedBatchId:Xn,lastStreamToken:""}))}}function Tm(n,e,t){const r=lo(e,t.path),s=r[1],i=IDBKeyRange.lowerBound(r);let o=!1;return Mr(n).ee({range:i,Y:!0},((c,l,u)=>{const[d,p,y]=c;d===e&&p===s&&(o=!0),u.done()})).next((()=>o))}function un(n){return Ce(n,Tt)}function Mr(n){return Ce(n,Wr)}function Im(n){return Ce(n,oi)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dr{constructor(e){this.sr=e}next(){return this.sr+=2,this.sr}static _r(){return new dr(0)}static ar(){return new dr(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WE{constructor(e,t){this.referenceDelegate=e,this.serializer=t}allocateTargetId(e){return this.ur(e).next((t=>{const r=new dr(t.highestTargetId);return t.highestTargetId=r.next(),this.cr(e,t).next((()=>t.highestTargetId))}))}getLastRemoteSnapshotVersion(e){return this.ur(e).next((t=>z.fromTimestamp(new oe(t.lastRemoteSnapshotVersion.seconds,t.lastRemoteSnapshotVersion.nanoseconds))))}getHighestSequenceNumber(e){return this.ur(e).next((t=>t.highestListenSequenceNumber))}setTargetsMetadata(e,t,r){return this.ur(e).next((s=>(s.highestListenSequenceNumber=t,r&&(s.lastRemoteSnapshotVersion=r.toTimestamp()),t>s.highestListenSequenceNumber&&(s.highestListenSequenceNumber=t),this.cr(e,s))))}addTargetData(e,t){return this.lr(e,t).next((()=>this.ur(e).next((r=>(r.targetCount+=1,this.hr(t,r),this.cr(e,r))))))}updateTargetData(e,t){return this.lr(e,t)}removeTargetData(e,t){return this.removeMatchingKeysForTargetId(e,t.targetId).next((()=>xr(e).delete(t.targetId))).next((()=>this.ur(e))).next((r=>(W(r.targetCount>0,8065),r.targetCount-=1,this.cr(e,r))))}removeTargets(e,t,r){let s=0;const i=[];return xr(e).ee(((o,c)=>{const l=Bs(c);l.sequenceNumber<=t&&r.get(l.targetId)===null&&(s++,i.push(this.removeTargetData(e,l)))})).next((()=>b.waitFor(i))).next((()=>s))}forEachTarget(e,t){return xr(e).ee(((r,s)=>{const i=Bs(s);t(i)}))}ur(e){return ud(e).get(xo).next((t=>(W(t!==null,2888),t)))}cr(e,t){return ud(e).put(xo,t)}lr(e,t){return xr(e).put(pm(this.serializer,t))}hr(e,t){let r=!1;return e.targetId>t.highestTargetId&&(t.highestTargetId=e.targetId,r=!0),e.sequenceNumber>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=e.sequenceNumber,r=!0),r}getTargetCount(e){return this.ur(e).next((t=>t.targetCount))}getTargetData(e,t){const r=lr(t),s=IDBKeyRange.bound([r,Number.NEGATIVE_INFINITY],[r,Number.POSITIVE_INFINITY]);let i=null;return xr(e).ee({range:s,index:fp},((o,c,l)=>{const u=Bs(c);vi(t,u.target)&&(i=u,l.done())})).next((()=>i))}addMatchingKeys(e,t,r){const s=[],i=mn(e);return t.forEach((o=>{const c=qe(o.path);s.push(i.put({targetId:r,path:c})),s.push(this.referenceDelegate.addReference(e,r,o))})),b.waitFor(s)}removeMatchingKeys(e,t,r){const s=mn(e);return b.forEach(t,(i=>{const o=qe(i.path);return b.waitFor([s.delete([r,o]),this.referenceDelegate.removeReference(e,r,i)])}))}removeMatchingKeysForTargetId(e,t){const r=mn(e),s=IDBKeyRange.bound([t],[t+1],!1,!0);return r.delete(s)}getMatchingKeysForTargetId(e,t){const r=IDBKeyRange.bound([t],[t+1],!1,!0),s=mn(e);let i=Z();return s.ee({range:r,Y:!0},((o,c,l)=>{const u=Nt(o[1]),d=new U(u);i=i.add(d)})).next((()=>i))}containsKey(e,t){const r=qe(t.path),s=IDBKeyRange.bound([r],[sp(r)],!1,!0);let i=0;return mn(e).ee({index:nl,Y:!0,range:s},(([o,c],l,u)=>{o!==0&&(i++,u.done())})).next((()=>i>0))}At(e,t){return xr(e).get(t).next((r=>r?Bs(r):null))}}function xr(n){return Ce(n,zr)}function ud(n){return Ce(n,Zn)}function mn(n){return Ce(n,Hr)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hd="LruGarbageCollector",zE=1048576;function dd([n,e],[t,r]){const s=Q(n,t);return s===0?Q(e,r):s}class HE{constructor(e){this.Pr=e,this.buffer=new ae(dd),this.Tr=0}Er(){return++this.Tr}Ir(e){const t=[e,this.Er()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();dd(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class Em{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(e){N(hd,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Nn(t)?N(hd,"Ignoring IndexedDB error during garbage collection: ",t):await yr(t)}await this.Ar(3e5)}))}}class KE{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.dr(e).next((r=>Math.floor(t/100*r)))}nthSequenceNumber(e,t){if(t===0)return b.resolve(ht.ce);const r=new HE(t);return this.Vr.forEachTarget(e,(s=>r.Ir(s.sequenceNumber))).next((()=>this.Vr.mr(e,(s=>r.Ir(s))))).next((()=>r.maxValue))}removeTargets(e,t,r){return this.Vr.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(N("LruGarbageCollector","Garbage collection skipped; disabled"),b.resolve(ld)):this.getCacheSize(e).next((r=>r<this.params.cacheSizeCollectionThreshold?(N("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),ld):this.gr(e,t)))}getCacheSize(e){return this.Vr.getCacheSize(e)}gr(e,t){let r,s,i,o,c,l,u;const d=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((p=>(p>this.params.maximumSequenceNumbersToCollect?(N("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),s=this.params.maximumSequenceNumbersToCollect):s=p,o=Date.now(),this.nthSequenceNumber(e,s)))).next((p=>(r=p,c=Date.now(),this.removeTargets(e,r,t)))).next((p=>(i=p,l=Date.now(),this.removeOrphanedDocuments(e,r)))).next((p=>(u=Date.now(),Nr()<=te.DEBUG&&N("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-d}ms
	Determined least recently used ${s} in `+(c-o)+`ms
	Removed ${i} targets in `+(l-c)+`ms
	Removed ${p} documents in `+(u-l)+`ms
Total Duration: ${u-d}ms`),b.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:p}))))}}function vm(n,e){return new KE(n,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QE{constructor(e,t){this.db=e,this.garbageCollector=vm(this,t)}dr(e){const t=this.pr(e);return this.db.getTargetCache().getTargetCount(e).next((r=>t.next((s=>r+s))))}pr(e){let t=0;return this.mr(e,(r=>{t++})).next((()=>t))}forEachTarget(e,t){return this.db.getTargetCache().forEachTarget(e,t)}mr(e,t){return this.yr(e,((r,s)=>t(s)))}addReference(e,t,r){return Qi(e,r)}removeReference(e,t,r){return Qi(e,r)}removeTargets(e,t,r){return this.db.getTargetCache().removeTargets(e,t,r)}markPotentiallyOrphaned(e,t){return Qi(e,t)}wr(e,t){return(function(s,i){let o=!1;return Im(s).te((c=>Tm(s,c,i).next((l=>(l&&(o=!0),b.resolve(!l)))))).next((()=>o))})(e,t)}removeOrphanedDocuments(e,t){const r=this.db.getRemoteDocumentCache().newChangeBuffer(),s=[];let i=0;return this.yr(e,((o,c)=>{if(c<=t){const l=this.wr(e,o).next((u=>{if(!u)return i++,r.getEntry(e,o).next((()=>(r.removeEntry(o,z.min()),mn(e).delete((function(p){return[0,qe(p.path)]})(o)))))}));s.push(l)}})).next((()=>b.waitFor(s))).next((()=>r.apply(e))).next((()=>i))}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,r)}updateLimboDocument(e,t){return Qi(e,t)}yr(e,t){const r=mn(e);let s,i=ht.ce;return r.ee({index:nl},(([o,c],{path:l,sequenceNumber:u})=>{o===0?(i!==ht.ce&&t(new U(Nt(s)),i),i=u,s=l):i=ht.ce})).next((()=>{i!==ht.ce&&t(new U(Nt(s)),i)}))}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function Qi(n,e){return mn(n).put((function(r,s){return{targetId:0,path:qe(r.path),sequenceNumber:s}})(e,n.currentSequenceNumber))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sm{constructor(){this.changes=new en((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Te.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?b.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YE{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,t,r){return $n(e).put(r)}removeEntry(e,t,r){return $n(e).delete((function(i,o){const c=i.path.toArray();return[c.slice(0,c.length-2),c[c.length-2],Fo(o),c[c.length-1]]})(t,r))}updateMetadata(e,t){return this.getMetadata(e).next((r=>(r.byteSize+=t,this.Sr(e,r))))}getEntry(e,t){let r=Te.newInvalidDocument(t);return $n(e).ee({index:uo,range:IDBKeyRange.only(Cs(t))},((s,i)=>{r=this.br(t,i)})).next((()=>r))}Dr(e,t){let r={size:0,document:Te.newInvalidDocument(t)};return $n(e).ee({index:uo,range:IDBKeyRange.only(Cs(t))},((s,i)=>{r={document:this.br(t,i),size:$o(i)}})).next((()=>r))}getEntries(e,t){let r=rt();return this.Cr(e,t,((s,i)=>{const o=this.br(s,i);r=r.insert(s,o)})).next((()=>r))}vr(e,t){let r=rt(),s=new ge(U.comparator);return this.Cr(e,t,((i,o)=>{const c=this.br(i,o);r=r.insert(i,c),s=s.insert(i,$o(o))})).next((()=>({documents:r,Fr:s})))}Cr(e,t,r){if(t.isEmpty())return b.resolve();let s=new ae(md);t.forEach((l=>s=s.add(l)));const i=IDBKeyRange.bound(Cs(s.first()),Cs(s.last())),o=s.getIterator();let c=o.getNext();return $n(e).ee({index:uo,range:i},((l,u,d)=>{const p=U.fromSegments([...u.prefixPath,u.collectionGroup,u.documentId]);for(;c&&md(c,p)<0;)r(c,null),c=o.getNext();c&&c.isEqual(p)&&(r(c,u),c=o.hasNext()?o.getNext():null),c?d.j(Cs(c)):d.done()})).next((()=>{for(;c;)r(c,null),c=o.hasNext()?o.getNext():null}))}getDocumentsMatchingQuery(e,t,r,s,i){const o=t.path,c=[o.popLast().toArray(),o.lastSegment(),Fo(r.readTime),r.documentKey.path.isEmpty()?"":r.documentKey.path.lastSegment()],l=[o.popLast().toArray(),o.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return $n(e).J(IDBKeyRange.bound(c,l,!0)).next((u=>{i==null||i.incrementDocumentReadCount(u.length);let d=rt();for(const p of u){const y=this.br(U.fromSegments(p.prefixPath.concat(p.collectionGroup,p.documentId)),p);y.isFoundDocument()&&(bi(t,y)||s.has(y.key))&&(d=d.insert(y.key,y))}return d}))}getAllFromCollectionGroup(e,t,r,s){let i=rt();const o=pd(t,r),c=pd(t,ot.max());return $n(e).ee({index:dp,range:IDBKeyRange.bound(o,c,!0)},((l,u,d)=>{const p=this.br(U.fromSegments(u.prefixPath.concat(u.collectionGroup,u.documentId)),u);i=i.insert(p.key,p),i.size===s&&d.done()})).next((()=>i))}newChangeBuffer(e){return new JE(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next((t=>t.byteSize))}getMetadata(e){return fd(e).get(mc).next((t=>(W(!!t,20021),t)))}Sr(e,t){return fd(e).put(mc,t)}br(e,t){if(t){const r=OE(this.serializer,t);if(!(r.isNoDocument()&&r.version.isEqual(z.min())))return r}return Te.newInvalidDocument(e)}}function bm(n){return new YE(n)}class JE extends Sm{constructor(e,t){super(),this.Mr=e,this.trackRemovals=t,this.Or=new en((r=>r.toString()),((r,s)=>r.isEqual(s)))}applyChanges(e){const t=[];let r=0,s=new ae(((i,o)=>Q(i.canonicalString(),o.canonicalString())));return this.changes.forEach(((i,o)=>{const c=this.Or.get(i);if(t.push(this.Mr.removeEntry(e,i,c.readTime)),o.isValidDocument()){const l=Yh(this.Mr.serializer,o);s=s.add(i.path.popLast());const u=$o(l);r+=u-c.size,t.push(this.Mr.addEntry(e,i,l))}else if(r-=c.size,this.trackRemovals){const l=Yh(this.Mr.serializer,o.convertToNoDocument(z.min()));t.push(this.Mr.addEntry(e,i,l))}})),s.forEach((i=>{t.push(this.Mr.indexManager.addToCollectionParentIndex(e,i))})),t.push(this.Mr.updateMetadata(e,r)),b.waitFor(t)}getFromCache(e,t){return this.Mr.Dr(e,t).next((r=>(this.Or.set(t,{size:r.size,readTime:r.document.readTime}),r.document)))}getAllFromCache(e,t){return this.Mr.vr(e,t).next((({documents:r,Fr:s})=>(s.forEach(((i,o)=>{this.Or.set(i,{size:o,readTime:r.get(i).readTime})})),r)))}}function fd(n){return Ce(n,ai)}function $n(n){return Ce(n,Co)}function Cs(n){const e=n.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function pd(n,e){const t=e.documentKey.path.toArray();return[n,Fo(e.readTime),t.slice(0,t.length-2),t.length>0?t[t.length-1]:""]}function md(n,e){const t=n.path.toArray(),r=e.path.toArray();let s=0;for(let i=0;i<t.length-2&&i<r.length-2;++i)if(s=Q(t[i],r[i]),s)return s;return s=Q(t.length,r.length),s||(s=Q(t[t.length-2],r[r.length-2]),s||Q(t[t.length-1],r[r.length-1]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XE{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Am{constructor(e,t,r,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next((s=>(r=s,this.remoteDocumentCache.getEntry(e,t)))).next((s=>(r!==null&&Js(r.mutation,s,dt.empty(),oe.now()),s)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((r=>this.getLocalViewOfDocuments(e,r,Z()).next((()=>r))))}getLocalViewOfDocuments(e,t,r=Z()){const s=Vt();return this.populateOverlays(e,s,t).next((()=>this.computeViews(e,t,s,r).next((i=>{let o=Us();return i.forEach(((c,l)=>{o=o.insert(c,l.overlayedDocument)})),o}))))}getOverlayedDocuments(e,t){const r=Vt();return this.populateOverlays(e,r,t).next((()=>this.computeViews(e,t,r,Z())))}populateOverlays(e,t,r){const s=[];return r.forEach((i=>{t.has(i)||s.push(i)})),this.documentOverlayCache.getOverlays(e,s).next((i=>{i.forEach(((o,c)=>{t.set(o,c)}))}))}computeViews(e,t,r,s){let i=rt();const o=Ys(),c=(function(){return Ys()})();return t.forEach(((l,u)=>{const d=r.get(u.key);s.has(u.key)&&(d===void 0||d.mutation instanceof Vn)?i=i.insert(u.key,u):d!==void 0?(o.set(u.key,d.mutation.getFieldMask()),Js(d.mutation,u,d.mutation.getFieldMask(),oe.now())):o.set(u.key,dt.empty())})),this.recalculateAndSaveOverlays(e,i).next((l=>(l.forEach(((u,d)=>o.set(u,d))),t.forEach(((u,d)=>c.set(u,new XE(d,o.get(u)??null)))),c)))}recalculateAndSaveOverlays(e,t){const r=Ys();let s=new ge(((o,c)=>o-c)),i=Z();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((o=>{for(const c of o)c.keys().forEach((l=>{const u=t.get(l);if(u===null)return;let d=r.get(l)||dt.empty();d=c.applyToLocalView(u,d),r.set(l,d);const p=(s.get(c.batchId)||Z()).add(l);s=s.insert(c.batchId,p)}))})).next((()=>{const o=[],c=s.getReverseIterator();for(;c.hasNext();){const l=c.getNext(),u=l.key,d=l.value,p=qp();d.forEach((y=>{if(!i.has(y)){const v=Qp(t.get(y),r.get(y));v!==null&&p.set(y,v),i=i.add(y)}})),o.push(this.documentOverlayCache.saveOverlays(e,u,p))}return b.waitFor(o)})).next((()=>r))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((r=>this.recalculateAndSaveOverlays(e,r)))}getDocumentsMatchingQuery(e,t,r,s){return eE(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):tE(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,s):this.getDocumentsMatchingCollectionQuery(e,t,r,s)}getNextDocuments(e,t,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,s).next((i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,s-i.size):b.resolve(Vt());let c=ri,l=i;return o.next((u=>b.forEach(u,((d,p)=>(c<p.largestBatchId&&(c=p.largestBatchId),i.get(d)?b.resolve():this.remoteDocumentCache.getEntry(e,d).next((y=>{l=l.insert(d,y)}))))).next((()=>this.populateOverlays(e,u,i))).next((()=>this.computeViews(e,l,u,Z()))).next((d=>({batchId:c,changes:Bp(d)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new U(t)).next((r=>{let s=Us();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s}))}getDocumentsMatchingCollectionGroupQuery(e,t,r,s){const i=t.collectionGroup;let o=Us();return this.indexManager.getCollectionParents(e,i).next((c=>b.forEach(c,(l=>{const u=(function(p,y){return new aa(y,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)})(t,l.child(i));return this.getDocumentsMatchingCollectionQuery(e,u,r,s).next((d=>{d.forEach(((p,y)=>{o=o.insert(p,y)}))}))})).next((()=>o))))}getDocumentsMatchingCollectionQuery(e,t,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next((o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,i,s)))).next((o=>{i.forEach(((l,u)=>{const d=u.getKey();o.get(d)===null&&(o=o.insert(d,Te.newInvalidDocument(d)))}));let c=Us();return o.forEach(((l,u)=>{const d=i.get(l);d!==void 0&&Js(d.mutation,u,dt.empty(),oe.now()),bi(t,u)&&(c=c.insert(l,u))})),c}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZE{constructor(e){this.serializer=e,this.Nr=new Map,this.Br=new Map}getBundleMetadata(e,t){return b.resolve(this.Nr.get(t))}saveBundleMetadata(e,t){return this.Nr.set(t.id,(function(s){return{id:s.id,version:s.version,createTime:Ke(s.createTime)}})(t)),b.resolve()}getNamedQuery(e,t){return b.resolve(this.Br.get(t))}saveNamedQuery(e,t){return this.Br.set(t.name,(function(s){return{name:s.name,query:mm(s.bundledQuery),readTime:Ke(s.readTime)}})(t)),b.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ev{constructor(){this.overlays=new ge(U.comparator),this.Lr=new Map}getOverlay(e,t){return b.resolve(this.overlays.get(t))}getOverlays(e,t){const r=Vt();return b.forEach(t,(s=>this.getOverlay(e,s).next((i=>{i!==null&&r.set(s,i)})))).next((()=>r))}saveOverlays(e,t,r){return r.forEach(((s,i)=>{this.St(e,t,i)})),b.resolve()}removeOverlaysForBatchId(e,t,r){const s=this.Lr.get(r);return s!==void 0&&(s.forEach((i=>this.overlays=this.overlays.remove(i))),this.Lr.delete(r)),b.resolve()}getOverlaysForCollection(e,t,r){const s=Vt(),i=t.length+1,o=new U(t.child("")),c=this.overlays.getIteratorFrom(o);for(;c.hasNext();){const l=c.getNext().value,u=l.getKey();if(!t.isPrefixOf(u.path))break;u.path.length===i&&l.largestBatchId>r&&s.set(l.getKey(),l)}return b.resolve(s)}getOverlaysForCollectionGroup(e,t,r,s){let i=new ge(((u,d)=>u-d));const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===t&&u.largestBatchId>r){let d=i.get(u.largestBatchId);d===null&&(d=Vt(),i=i.insert(u.largestBatchId,d)),d.set(u.getKey(),u)}}const c=Vt(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach(((u,d)=>c.set(u,d))),!(c.size()>=s)););return b.resolve(c)}St(e,t,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Lr.get(s.largestBatchId).delete(r.key);this.Lr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new pl(t,r));let i=this.Lr.get(t);i===void 0&&(i=Z(),this.Lr.set(t,i)),this.Lr.set(t,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tv{constructor(){this.sessionToken=Re.EMPTY_BYTE_STRING}getSessionToken(e){return b.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,b.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wl{constructor(){this.kr=new ae(Ne.qr),this.Kr=new ae(Ne.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(e,t){const r=new Ne(e,t);this.kr=this.kr.add(r),this.Kr=this.Kr.add(r)}$r(e,t){e.forEach((r=>this.addReference(r,t)))}removeReference(e,t){this.Wr(new Ne(e,t))}Qr(e,t){e.forEach((r=>this.removeReference(r,t)))}Gr(e){const t=new U(new ie([])),r=new Ne(t,e),s=new Ne(t,e+1),i=[];return this.Kr.forEachInRange([r,s],(o=>{this.Wr(o),i.push(o.key)})),i}zr(){this.kr.forEach((e=>this.Wr(e)))}Wr(e){this.kr=this.kr.delete(e),this.Kr=this.Kr.delete(e)}jr(e){const t=new U(new ie([])),r=new Ne(t,e),s=new Ne(t,e+1);let i=Z();return this.Kr.forEachInRange([r,s],(o=>{i=i.add(o.key)})),i}containsKey(e){const t=new Ne(e,0),r=this.kr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class Ne{constructor(e,t){this.key=e,this.Jr=t}static qr(e,t){return U.comparator(e.key,t.key)||Q(e.Jr,t.Jr)}static Ur(e,t){return Q(e.Jr,t.Jr)||U.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nv{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Yn=1,this.Hr=new ae(Ne.qr)}checkEmpty(e){return b.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,s){const i=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new dl(i,t,r,s);this.mutationQueue.push(o);for(const c of s)this.Hr=this.Hr.add(new Ne(c.key,i)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return b.resolve(o)}lookupMutationBatch(e,t){return b.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=this.Xr(r),i=s<0?0:s;return b.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return b.resolve(this.mutationQueue.length===0?Xn:this.Yn-1)}getAllMutationBatches(e){return b.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new Ne(t,0),s=new Ne(t,Number.POSITIVE_INFINITY),i=[];return this.Hr.forEachInRange([r,s],(o=>{const c=this.Zr(o.Jr);i.push(c)})),b.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new ae(Q);return t.forEach((s=>{const i=new Ne(s,0),o=new Ne(s,Number.POSITIVE_INFINITY);this.Hr.forEachInRange([i,o],(c=>{r=r.add(c.Jr)}))})),b.resolve(this.Yr(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1;let i=r;U.isDocumentKey(i)||(i=i.child(""));const o=new Ne(new U(i),0);let c=new ae(Q);return this.Hr.forEachWhile((l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===s&&(c=c.add(l.Jr)),!0)}),o),b.resolve(this.Yr(c))}Yr(e){const t=[];return e.forEach((r=>{const s=this.Zr(r);s!==null&&t.push(s)})),t}removeMutationBatch(e,t){W(this.ei(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Hr;return b.forEach(t.mutations,(s=>{const i=new Ne(s.key,t.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)})).next((()=>{this.Hr=r}))}nr(e){}containsKey(e,t){const r=new Ne(t,0),s=this.Hr.firstAfterOrEqual(r);return b.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,b.resolve()}ei(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rv{constructor(e){this.ti=e,this.docs=(function(){return new ge(U.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,s=this.docs.get(r),i=s?s.size:0,o=this.ti(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return b.resolve(r?r.document.mutableCopy():Te.newInvalidDocument(t))}getEntries(e,t){let r=rt();return t.forEach((s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():Te.newInvalidDocument(s))})),b.resolve(r)}getDocumentsMatchingQuery(e,t,r,s){let i=rt();const o=t.path,c=new U(o.child("__id-9223372036854775808__")),l=this.docs.getIteratorFrom(c);for(;l.hasNext();){const{key:u,value:{document:d}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||el(ap(d),r)<=0||(s.has(d.key)||bi(t,d))&&(i=i.insert(d.key,d.mutableCopy()))}return b.resolve(i)}getAllFromCollectionGroup(e,t,r,s){G(9500)}ni(e,t){return b.forEach(this.docs,(r=>t(r)))}newChangeBuffer(e){return new sv(this)}getSize(e){return b.resolve(this.size)}}class sv extends Sm{constructor(e){super(),this.Mr=e}applyChanges(e){const t=[];return this.changes.forEach(((r,s)=>{s.isValidDocument()?t.push(this.Mr.addEntry(e,s)):this.Mr.removeEntry(r)})),b.waitFor(t)}getFromCache(e,t){return this.Mr.getEntry(e,t)}getAllFromCache(e,t){return this.Mr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iv{constructor(e){this.persistence=e,this.ri=new en((t=>lr(t)),vi),this.lastRemoteSnapshotVersion=z.min(),this.highestTargetId=0,this.ii=0,this.si=new wl,this.targetCount=0,this.oi=dr._r()}forEachTarget(e,t){return this.ri.forEach(((r,s)=>t(s))),b.resolve()}getLastRemoteSnapshotVersion(e){return b.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return b.resolve(this.ii)}allocateTargetId(e){return this.highestTargetId=this.oi.next(),b.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.ii&&(this.ii=t),b.resolve()}lr(e){this.ri.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.oi=new dr(t),this.highestTargetId=t),e.sequenceNumber>this.ii&&(this.ii=e.sequenceNumber)}addTargetData(e,t){return this.lr(t),this.targetCount+=1,b.resolve()}updateTargetData(e,t){return this.lr(t),b.resolve()}removeTargetData(e,t){return this.ri.delete(t.target),this.si.Gr(t.targetId),this.targetCount-=1,b.resolve()}removeTargets(e,t,r){let s=0;const i=[];return this.ri.forEach(((o,c)=>{c.sequenceNumber<=t&&r.get(c.targetId)===null&&(this.ri.delete(o),i.push(this.removeMatchingKeysForTargetId(e,c.targetId)),s++)})),b.waitFor(i).next((()=>s))}getTargetCount(e){return b.resolve(this.targetCount)}getTargetData(e,t){const r=this.ri.get(t)||null;return b.resolve(r)}addMatchingKeys(e,t,r){return this.si.$r(t,r),b.resolve()}removeMatchingKeys(e,t,r){this.si.Qr(t,r);const s=this.persistence.referenceDelegate,i=[];return s&&t.forEach((o=>{i.push(s.markPotentiallyOrphaned(e,o))})),b.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.si.Gr(t),b.resolve()}getMatchingKeysForTargetId(e,t){const r=this.si.jr(t);return b.resolve(r)}containsKey(e,t){return b.resolve(this.si.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tl{constructor(e,t){this._i={},this.overlays={},this.ai=new ht(0),this.ui=!1,this.ui=!0,this.ci=new tv,this.referenceDelegate=e(this),this.li=new iv(this),this.indexManager=new jE,this.remoteDocumentCache=(function(s){return new rv(s)})((r=>this.referenceDelegate.hi(r))),this.serializer=new fm(t),this.Pi=new ZE(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new ev,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this._i[e.toKey()];return r||(r=new nv(t,this.referenceDelegate),this._i[e.toKey()]=r),r}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(e,t,r){N("MemoryPersistence","Starting transaction:",e);const s=new ov(this.ai.next());return this.referenceDelegate.Ti(),r(s).next((i=>this.referenceDelegate.Ei(s).next((()=>i)))).toPromise().then((i=>(s.raiseOnCommittedEvent(),i)))}Ii(e,t){return b.or(Object.values(this._i).map((r=>()=>r.containsKey(e,t))))}}class ov extends lp{constructor(e){super(),this.currentSequenceNumber=e}}class ma{constructor(e){this.persistence=e,this.Ri=new wl,this.Ai=null}static Vi(e){return new ma(e)}get di(){if(this.Ai)return this.Ai;throw G(60996)}addReference(e,t,r){return this.Ri.addReference(r,t),this.di.delete(r.toString()),b.resolve()}removeReference(e,t,r){return this.Ri.removeReference(r,t),this.di.add(r.toString()),b.resolve()}markPotentiallyOrphaned(e,t){return this.di.add(t.toString()),b.resolve()}removeTarget(e,t){this.Ri.Gr(t.targetId).forEach((s=>this.di.add(s.toString())));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next((s=>{s.forEach((i=>this.di.add(i.toString())))})).next((()=>r.removeTargetData(e,t)))}Ti(){this.Ai=new Set}Ei(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return b.forEach(this.di,(r=>{const s=U.fromPath(r);return this.mi(e,s).next((i=>{i||t.removeEntry(s,z.min())}))})).next((()=>(this.Ai=null,t.apply(e))))}updateLimboDocument(e,t){return this.mi(e,t).next((r=>{r?this.di.delete(t.toString()):this.di.add(t.toString())}))}hi(e){return 0}mi(e,t){return b.or([()=>b.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ii(e,t)])}}class Bo{constructor(e,t){this.persistence=e,this.fi=new en((r=>qe(r.path)),((r,s)=>r.isEqual(s))),this.garbageCollector=vm(this,t)}static Vi(e,t){return new Bo(e,t)}Ti(){}Ei(e){return b.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}dr(e){const t=this.pr(e);return this.persistence.getTargetCache().getTargetCount(e).next((r=>t.next((s=>r+s))))}pr(e){let t=0;return this.mr(e,(r=>{t++})).next((()=>t))}mr(e,t){return b.forEach(this.fi,((r,s)=>this.wr(e,r,s).next((i=>i?b.resolve():t(s)))))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ni(e,(o=>this.wr(e,o,t).next((c=>{c||(r++,i.removeEntry(o,z.min()))})))).next((()=>i.apply(e))).next((()=>r))}markPotentiallyOrphaned(e,t){return this.fi.set(t,e.currentSequenceNumber),b.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.fi.set(r,e.currentSequenceNumber),b.resolve()}removeReference(e,t,r){return this.fi.set(r,e.currentSequenceNumber),b.resolve()}updateLimboDocument(e,t){return this.fi.set(t,e.currentSequenceNumber),b.resolve()}hi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=fo(e.data.value)),t}wr(e,t,r){return b.or([()=>this.persistence.Ii(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const s=this.fi.get(t);return b.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class av{constructor(e){this.serializer=e}k(e,t,r,s){const i=new ea("createOrUpgrade",t);r<1&&s>=1&&((function(l){l.createObjectStore(Ei)})(e),(function(l){l.createObjectStore(oi,{keyPath:mI}),l.createObjectStore(Tt,{keyPath:Ah,autoIncrement:!0}).createIndex(Jn,Rh,{unique:!0}),l.createObjectStore(Wr)})(e),gd(e),(function(l){l.createObjectStore(Gn)})(e));let o=b.resolve();return r<3&&s>=3&&(r!==0&&((function(l){l.deleteObjectStore(Hr),l.deleteObjectStore(zr),l.deleteObjectStore(Zn)})(e),gd(e)),o=o.next((()=>(function(l){const u=l.store(Zn),d={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:z.min().toTimestamp(),targetCount:0};return u.put(xo,d)})(i)))),r<4&&s>=4&&(r!==0&&(o=o.next((()=>(function(l,u){return u.store(Tt).J().next((p=>{l.deleteObjectStore(Tt),l.createObjectStore(Tt,{keyPath:Ah,autoIncrement:!0}).createIndex(Jn,Rh,{unique:!0});const y=u.store(Tt),v=p.map((k=>y.put(k)));return b.waitFor(v)}))})(e,i)))),o=o.next((()=>{(function(l){l.createObjectStore(Kr,{keyPath:SI})})(e)}))),r<5&&s>=5&&(o=o.next((()=>this.gi(i)))),r<6&&s>=6&&(o=o.next((()=>((function(l){l.createObjectStore(ai)})(e),this.pi(i))))),r<7&&s>=7&&(o=o.next((()=>this.yi(i)))),r<8&&s>=8&&(o=o.next((()=>this.wi(e,i)))),r<9&&s>=9&&(o=o.next((()=>{(function(l){l.objectStoreNames.contains("remoteDocumentChanges")&&l.deleteObjectStore("remoteDocumentChanges")})(e)}))),r<10&&s>=10&&(o=o.next((()=>this.Si(i)))),r<11&&s>=11&&(o=o.next((()=>{(function(l){l.createObjectStore(na,{keyPath:bI})})(e),(function(l){l.createObjectStore(ra,{keyPath:AI})})(e)}))),r<12&&s>=12&&(o=o.next((()=>{(function(l){const u=l.createObjectStore(sa,{keyPath:NI});u.createIndex(yc,VI,{unique:!1}),u.createIndex(gp,OI,{unique:!1})})(e)}))),r<13&&s>=13&&(o=o.next((()=>(function(l){const u=l.createObjectStore(Co,{keyPath:yI});u.createIndex(uo,_I),u.createIndex(dp,wI)})(e))).next((()=>this.bi(e,i))).next((()=>e.deleteObjectStore(Gn)))),r<14&&s>=14&&(o=o.next((()=>this.Di(e,i)))),r<15&&s>=15&&(o=o.next((()=>(function(l){l.createObjectStore(rl,{keyPath:RI,autoIncrement:!0}).createIndex(gc,PI,{unique:!1}),l.createObjectStore(zs,{keyPath:kI}).createIndex(pp,CI,{unique:!1}),l.createObjectStore(Hs,{keyPath:xI}).createIndex(mp,DI,{unique:!1})})(e)))),r<16&&s>=16&&(o=o.next((()=>{t.objectStore(zs).clear()})).next((()=>{t.objectStore(Hs).clear()}))),r<17&&s>=17&&(o=o.next((()=>{(function(l){l.createObjectStore(sl,{keyPath:LI})})(e)}))),r<18&&s>=18&&of()&&(o=o.next((()=>{t.objectStore(zs).clear()})).next((()=>{t.objectStore(Hs).clear()}))),o}pi(e){let t=0;return e.store(Gn).ee(((r,s)=>{t+=$o(s)})).next((()=>{const r={byteSize:t};return e.store(ai).put(mc,r)}))}gi(e){const t=e.store(oi),r=e.store(Tt);return t.J().next((s=>b.forEach(s,(i=>{const o=IDBKeyRange.bound([i.userId,Xn],[i.userId,i.lastAcknowledgedBatchId]);return r.J(Jn,o).next((c=>b.forEach(c,(l=>{W(l.userId===i.userId,18650,"Cannot process batch from unexpected user",{batchId:l.batchId});const u=zn(this.serializer,l);return wm(e,i.userId,u).next((()=>{}))}))))}))))}yi(e){const t=e.store(Hr),r=e.store(Gn);return e.store(Zn).get(xo).next((s=>{const i=[];return r.ee(((o,c)=>{const l=new ie(o),u=(function(p){return[0,qe(p)]})(l);i.push(t.get(u).next((d=>d?b.resolve():(p=>t.put({targetId:0,path:qe(p),sequenceNumber:s.highestListenSequenceNumber}))(l))))})).next((()=>b.waitFor(i)))}))}wi(e,t){e.createObjectStore(ci,{keyPath:vI});const r=t.store(ci),s=new _l,i=o=>{if(s.add(o)){const c=o.lastSegment(),l=o.popLast();return r.put({collectionId:c,parent:qe(l)})}};return t.store(Gn).ee({Y:!0},((o,c)=>{const l=new ie(o);return i(l.popLast())})).next((()=>t.store(Wr).ee({Y:!0},(([o,c,l],u)=>{const d=Nt(c);return i(d.popLast())}))))}Si(e){const t=e.store(zr);return t.ee(((r,s)=>{const i=Bs(s),o=pm(this.serializer,i);return t.put(o)}))}bi(e,t){const r=t.store(Gn),s=[];return r.ee(((i,o)=>{const c=t.store(Co),l=(function(p){return p.document?new U(ie.fromString(p.document.name).popFirst(5)):p.noDocument?U.fromSegments(p.noDocument.path):p.unknownDocument?U.fromSegments(p.unknownDocument.path):G(36783)})(o).path.toArray(),u={prefixPath:l.slice(0,l.length-2),collectionGroup:l[l.length-2],documentId:l[l.length-1],readTime:o.readTime||[0,0],unknownDocument:o.unknownDocument,noDocument:o.noDocument,document:o.document,hasCommittedMutations:!!o.hasCommittedMutations};s.push(c.put(u))})).next((()=>b.waitFor(s)))}Di(e,t){const r=t.store(Tt),s=bm(this.serializer),i=new Tl(ma.Vi,this.serializer.yt);return r.J().next((o=>{const c=new Map;return o.forEach((l=>{let u=c.get(l.userId)??Z();zn(this.serializer,l).keys().forEach((d=>u=u.add(d))),c.set(l.userId,u)})),b.forEach(c,((l,u)=>{const d=new Oe(u),p=fa.wt(this.serializer,d),y=i.getIndexManager(d),v=pa.wt(d,this.serializer,y,i.referenceDelegate);return new Am(s,v,p,y).recalculateAndSaveOverlaysForDocumentKeys(new _c(t,ht.ce),l).next()}))}))}}function gd(n){n.createObjectStore(Hr,{keyPath:II}).createIndex(nl,EI,{unique:!0}),n.createObjectStore(zr,{keyPath:"targetId"}).createIndex(fp,TI,{unique:!0}),n.createObjectStore(Zn)}const hn="IndexedDbPersistence",Ha=18e5,Ka=5e3,Qa="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.",cv="main";class Il{constructor(e,t,r,s,i,o,c,l,u,d,p=18){if(this.allowTabSynchronization=e,this.persistenceKey=t,this.clientId=r,this.Ci=i,this.window=o,this.document=c,this.Fi=u,this.Mi=d,this.xi=p,this.ai=null,this.ui=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Oi=null,this.inForeground=!1,this.Ni=null,this.Bi=null,this.Li=Number.NEGATIVE_INFINITY,this.ki=y=>Promise.resolve(),!Il.v())throw new B(D.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new QE(this,s),this.qi=t+cv,this.serializer=new fm(l),this.Ki=new En(this.qi,this.xi,new av(this.serializer)),this.ci=new ME,this.li=new WE(this.referenceDelegate,this.serializer),this.remoteDocumentCache=bm(this.serializer),this.Pi=new LE,this.window&&this.window.localStorage?this.Ui=this.window.localStorage:(this.Ui=null,d===!1&&He(hn,"LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.$i().then((()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new B(D.FAILED_PRECONDITION,Qa);return this.Wi(),this.Qi(),this.Gi(),this.runTransaction("getHighestListenSequenceNumber","readonly",(e=>this.li.getHighestSequenceNumber(e)))})).then((e=>{this.ai=new ht(e,this.Fi)})).then((()=>{this.ui=!0})).catch((e=>(this.Ki&&this.Ki.close(),Promise.reject(e))))}zi(e){return this.ki=async t=>{if(this.started)return e(t)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.Ki.K((async t=>{t.newVersion===null&&await e()}))}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.Ci.enqueueAndForget((async()=>{this.started&&await this.$i()})))}$i(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",(e=>Yi(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next((()=>{if(this.isPrimary)return this.ji(e).next((t=>{t||(this.isPrimary=!1,this.Ci.enqueueRetryable((()=>this.ki(!1))))}))})).next((()=>this.Ji(e))).next((t=>this.isPrimary&&!t?this.Hi(e).next((()=>!1)):!!t&&this.Zi(e).next((()=>!0)))))).catch((e=>{if(Nn(e))return N(hn,"Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return N(hn,"Releasing owner lease after error during lease refresh",e),!1})).then((e=>{this.isPrimary!==e&&this.Ci.enqueueRetryable((()=>this.ki(e))),this.isPrimary=e}))}ji(e){return xs(e).get(Ar).next((t=>b.resolve(this.Xi(t))))}Yi(e){return Yi(e).delete(this.clientId)}async es(){if(this.isPrimary&&!this.ts(this.Li,Ha)){this.Li=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",(t=>{const r=Ce(t,Kr);return r.J().next((s=>{const i=this.ns(s,Ha),o=s.filter((c=>i.indexOf(c)===-1));return b.forEach(o,(c=>r.delete(c.clientId))).next((()=>o))}))})).catch((()=>[]));if(this.Ui)for(const t of e)this.Ui.removeItem(this.rs(t.clientId))}}Gi(){this.Bi=this.Ci.enqueueAfterDelay("client_metadata_refresh",4e3,(()=>this.$i().then((()=>this.es())).then((()=>this.Gi()))))}Xi(e){return!!e&&e.ownerId===this.clientId}Ji(e){return this.Mi?b.resolve(!0):xs(e).get(Ar).next((t=>{if(t!==null&&this.ts(t.leaseTimestampMs,Ka)&&!this.ss(t.ownerId)){if(this.Xi(t)&&this.networkEnabled)return!0;if(!this.Xi(t)){if(!t.allowTabSynchronization)throw new B(D.FAILED_PRECONDITION,Qa);return!1}}return!(!this.networkEnabled||!this.inForeground)||Yi(e).J().next((r=>this.ns(r,Ka).find((s=>{if(this.clientId!==s.clientId){const i=!this.networkEnabled&&s.networkEnabled,o=!this.inForeground&&s.inForeground,c=this.networkEnabled===s.networkEnabled;if(i||o&&c)return!0}return!1}))===void 0))})).next((t=>(this.isPrimary!==t&&N(hn,`Client ${t?"is":"is not"} eligible for a primary lease.`),t)))}async shutdown(){this.ui=!1,this._s(),this.Bi&&(this.Bi.cancel(),this.Bi=null),this.us(),this.cs(),await this.Ki.runTransaction("shutdown","readwrite",[Ei,Kr],(e=>{const t=new _c(e,ht.ce);return this.Hi(t).next((()=>this.Yi(t)))})),this.Ki.close(),this.ls()}ns(e,t){return e.filter((r=>this.ts(r.updateTimeMs,t)&&!this.ss(r.clientId)))}hs(){return this.runTransaction("getActiveClients","readonly",(e=>Yi(e).J().next((t=>this.ns(t,Ha).map((r=>r.clientId))))))}get started(){return this.ui}getGlobalsCache(){return this.ci}getMutationQueue(e,t){return pa.wt(e,this.serializer,t,this.referenceDelegate)}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new GE(e,this.serializer.yt.databaseId)}getDocumentOverlayCache(e){return fa.wt(this.serializer,e)}getBundleCache(){return this.Pi}runTransaction(e,t,r){N(hn,"Starting transaction:",e);const s=t==="readonly"?"readonly":"readwrite",i=(function(l){return l===18?UI:l===17?Tp:l===16?FI:l===15?il:l===14?wp:l===13?_p:l===12?MI:l===11?yp:void G(60245)})(this.xi);let o;return this.Ki.runTransaction(e,s,i,(c=>(o=new _c(c,this.ai?this.ai.next():ht.ce),t==="readwrite-primary"?this.ji(o).next((l=>!!l||this.Ji(o))).next((l=>{if(!l)throw He(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.Ci.enqueueRetryable((()=>this.ki(!1))),new B(D.FAILED_PRECONDITION,cp);return r(o)})).next((l=>this.Zi(o).next((()=>l)))):this.Ps(o).next((()=>r(o)))))).then((c=>(o.raiseOnCommittedEvent(),c)))}Ps(e){return xs(e).get(Ar).next((t=>{if(t!==null&&this.ts(t.leaseTimestampMs,Ka)&&!this.ss(t.ownerId)&&!this.Xi(t)&&!(this.Mi||this.allowTabSynchronization&&t.allowTabSynchronization))throw new B(D.FAILED_PRECONDITION,Qa)}))}Zi(e){const t={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return xs(e).put(Ar,t)}static v(){return En.v()}Hi(e){const t=xs(e);return t.get(Ar).next((r=>this.Xi(r)?(N(hn,"Releasing primary lease."),t.delete(Ar)):b.resolve()))}ts(e,t){const r=Date.now();return!(e<r-t)&&(!(e>r)||(He(`Detected an update time that is in the future: ${e} > ${r}`),!1))}Wi(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.Ni=()=>{this.Ci.enqueueAndForget((()=>(this.inForeground=this.document.visibilityState==="visible",this.$i())))},this.document.addEventListener("visibilitychange",this.Ni),this.inForeground=this.document.visibilityState==="visible")}us(){this.Ni&&(this.document.removeEventListener("visibilitychange",this.Ni),this.Ni=null)}Qi(){var e;typeof((e=this.window)==null?void 0:e.addEventListener)=="function"&&(this.Oi=()=>{this._s();const t=/(?:Version|Mobile)\/1[456]/;sf()&&(navigator.appVersion.match(t)||navigator.userAgent.match(t))&&this.Ci.enterRestrictedMode(!0),this.Ci.enqueueAndForget((()=>this.shutdown()))},this.window.addEventListener("pagehide",this.Oi))}cs(){this.Oi&&(this.window.removeEventListener("pagehide",this.Oi),this.Oi=null)}ss(e){var t;try{const r=((t=this.Ui)==null?void 0:t.getItem(this.rs(e)))!==null;return N(hn,`Client '${e}' ${r?"is":"is not"} zombied in LocalStorage`),r}catch(r){return He(hn,"Failed to get zombied client id.",r),!1}}_s(){if(this.Ui)try{this.Ui.setItem(this.rs(this.clientId),String(Date.now()))}catch(e){He("Failed to set zombie client id.",e)}}ls(){if(this.Ui)try{this.Ui.removeItem(this.rs(this.clientId))}catch{}}rs(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function xs(n){return Ce(n,Ei)}function Yi(n){return Ce(n,Kr)}function lv(n,e){let t=n.projectId;return n.isDefaultDatabase||(t+="."+n.database),"firestore/"+e+"/"+t+"/"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class El{constructor(e,t,r,s){this.targetId=e,this.fromCache=t,this.Ts=r,this.Es=s}static Is(e,t){let r=Z(),s=Z();for(const i of t.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new El(e,t.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uv{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rm{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=(function(){return sf()?8:up(ke())>0?6:4})()}initialize(e,t){this.fs=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,r,s){const i={result:null};return this.gs(e,t).next((o=>{i.result=o})).next((()=>{if(!i.result)return this.ps(e,t,s,r).next((o=>{i.result=o}))})).next((()=>{if(i.result)return;const o=new uv;return this.ys(e,t,o).next((c=>{if(i.result=c,this.As)return this.ws(e,t,o,c.size)}))})).next((()=>i.result))}ws(e,t,r,s){return r.documentReadCount<this.Vs?(Nr()<=te.DEBUG&&N("QueryEngine","SDK will not create cache indexes for query:",Vr(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),b.resolve()):(Nr()<=te.DEBUG&&N("QueryEngine","Query:",Vr(t),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.ds*s?(Nr()<=te.DEBUG&&N("QueryEngine","The SDK decides to create cache indexes for query:",Vr(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,pt(t))):b.resolve())}gs(e,t){if($h(t))return b.resolve(null);let r=pt(t);return this.indexManager.getIndexType(e,r).next((s=>s===0?null:(t.limit!==null&&s===1&&(t=Sc(t,null,"F"),r=pt(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next((i=>{const o=Z(...i);return this.fs.getDocuments(e,o).next((c=>this.indexManager.getMinOffset(e,r).next((l=>{const u=this.Ss(t,c);return this.bs(t,u,o,l.readTime)?this.gs(e,Sc(t,null,"F")):this.Ds(e,u,t,l)}))))})))))}ps(e,t,r,s){return $h(t)||s.isEqual(z.min())?b.resolve(null):this.fs.getDocuments(e,r).next((i=>{const o=this.Ss(t,i);return this.bs(t,o,r,s)?b.resolve(null):(Nr()<=te.DEBUG&&N("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Vr(t)),this.Ds(e,o,t,cI(s,ri)).next((c=>c)))}))}Ss(e,t){let r=new ae(Up(e));return t.forEach(((s,i)=>{bi(e,i)&&(r=r.add(i))})),r}bs(e,t,r,s){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}ys(e,t,r){return Nr()<=te.DEBUG&&N("QueryEngine","Using full collection scan to execute query:",Vr(t)),this.fs.getDocumentsMatchingQuery(e,t,ot.min(),r)}Ds(e,t,r,s){return this.fs.getDocumentsMatchingQuery(e,r,s).next((i=>(t.forEach((o=>{i=i.insert(o.key,o)})),i)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vl="LocalStore",hv=3e8;class dv{constructor(e,t,r,s){this.persistence=e,this.Cs=t,this.serializer=s,this.vs=new ge(Q),this.Fs=new en((i=>lr(i)),vi),this.Ms=new Map,this.xs=e.getRemoteDocumentCache(),this.li=e.getTargetCache(),this.Pi=e.getBundleCache(),this.Os(r)}Os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Am(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.vs)))}}function Pm(n,e,t,r){return new dv(n,e,t,r)}async function km(n,e){const t=Y(n);return await t.persistence.runTransaction("Handle user change","readonly",(r=>{let s;return t.mutationQueue.getAllMutationBatches(r).next((i=>(s=i,t.Os(e),t.mutationQueue.getAllMutationBatches(r)))).next((i=>{const o=[],c=[];let l=Z();for(const u of s){o.push(u.batchId);for(const d of u.mutations)l=l.add(d.key)}for(const u of i){c.push(u.batchId);for(const d of u.mutations)l=l.add(d.key)}return t.localDocuments.getDocuments(r,l).next((u=>({Ns:u,removedBatchIds:o,addedBatchIds:c})))}))}))}function fv(n,e){const t=Y(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(r=>{const s=e.batch.keys(),i=t.xs.newChangeBuffer({trackRemovals:!0});return(function(c,l,u,d){const p=u.batch,y=p.keys();let v=b.resolve();return y.forEach((k=>{v=v.next((()=>d.getEntry(l,k))).next((P=>{const C=u.docVersions.get(k);W(C!==null,48541),P.version.compareTo(C)<0&&(p.applyToRemoteDocument(P,u),P.isValidDocument()&&(P.setReadTime(u.commitVersion),d.addEntry(P)))}))})),v.next((()=>c.mutationQueue.removeMutationBatch(l,p)))})(t,r,e,i).next((()=>i.apply(r))).next((()=>t.mutationQueue.performConsistencyCheck(r))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,(function(c){let l=Z();for(let u=0;u<c.mutationResults.length;++u)c.mutationResults[u].transformResults.length>0&&(l=l.add(c.batch.mutations[u].key));return l})(e)))).next((()=>t.localDocuments.getDocuments(r,s)))}))}function Cm(n){const e=Y(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.li.getLastRemoteSnapshotVersion(t)))}function pv(n,e){const t=Y(n),r=e.snapshotVersion;let s=t.vs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(i=>{const o=t.xs.newChangeBuffer({trackRemovals:!0});s=t.vs;const c=[];e.targetChanges.forEach(((d,p)=>{const y=s.get(p);if(!y)return;c.push(t.li.removeMatchingKeys(i,d.removedDocuments,p).next((()=>t.li.addMatchingKeys(i,d.addedDocuments,p))));let v=y.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?v=v.withResumeToken(Re.EMPTY_BYTE_STRING,z.min()).withLastLimboFreeSnapshotVersion(z.min()):d.resumeToken.approximateByteSize()>0&&(v=v.withResumeToken(d.resumeToken,r)),s=s.insert(p,v),(function(P,C,V){return P.resumeToken.approximateByteSize()===0||C.snapshotVersion.toMicroseconds()-P.snapshotVersion.toMicroseconds()>=hv?!0:V.addedDocuments.size+V.modifiedDocuments.size+V.removedDocuments.size>0})(y,v,d)&&c.push(t.li.updateTargetData(i,v))}));let l=rt(),u=Z();if(e.documentUpdates.forEach((d=>{e.resolvedLimboDocuments.has(d)&&c.push(t.persistence.referenceDelegate.updateLimboDocument(i,d))})),c.push(mv(i,o,e.documentUpdates).next((d=>{l=d.Bs,u=d.Ls}))),!r.isEqual(z.min())){const d=t.li.getLastRemoteSnapshotVersion(i).next((p=>t.li.setTargetsMetadata(i,i.currentSequenceNumber,r)));c.push(d)}return b.waitFor(c).next((()=>o.apply(i))).next((()=>t.localDocuments.getLocalViewOfDocuments(i,l,u))).next((()=>l))})).then((i=>(t.vs=s,i)))}function mv(n,e,t){let r=Z(),s=Z();return t.forEach((i=>r=r.add(i))),e.getEntries(n,r).next((i=>{let o=rt();return t.forEach(((c,l)=>{const u=i.get(c);l.isFoundDocument()!==u.isFoundDocument()&&(s=s.add(c)),l.isNoDocument()&&l.version.isEqual(z.min())?(e.removeEntry(c,l.readTime),o=o.insert(c,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(c,l)):N(vl,"Ignoring outdated watch update for ",c,". Current version:",u.version," Watch version:",l.version)})),{Bs:o,Ls:s}}))}function gv(n,e){const t=Y(n);return t.persistence.runTransaction("Get next mutation batch","readonly",(r=>(e===void 0&&(e=Xn),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e))))}function yv(n,e){const t=Y(n);return t.persistence.runTransaction("Allocate target","readwrite",(r=>{let s;return t.li.getTargetData(r,e).next((i=>i?(s=i,b.resolve(s)):t.li.allocateTargetId(r).next((o=>(s=new Ht(e,o,"TargetPurposeListen",r.currentSequenceNumber),t.li.addTargetData(r,s).next((()=>s)))))))})).then((r=>{const s=t.vs.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.vs=t.vs.insert(r.targetId,r),t.Fs.set(e,r.targetId)),r}))}async function Dc(n,e,t){const r=Y(n),s=r.vs.get(e),i=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",i,(o=>r.persistence.referenceDelegate.removeTarget(o,s)))}catch(o){if(!Nn(o))throw o;N(vl,`Failed to update sequence numbers for target ${e}: ${o}`)}r.vs=r.vs.remove(e),r.Fs.delete(s.target)}function yd(n,e,t){const r=Y(n);let s=z.min(),i=Z();return r.persistence.runTransaction("Execute query","readwrite",(o=>(function(l,u,d){const p=Y(l),y=p.Fs.get(d);return y!==void 0?b.resolve(p.vs.get(y)):p.li.getTargetData(u,d)})(r,o,pt(e)).next((c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,r.li.getMatchingKeysForTargetId(o,c.targetId).next((l=>{i=l}))})).next((()=>r.Cs.getDocumentsMatchingQuery(o,e,t?s:z.min(),t?i:Z()))).next((c=>(_v(r,rE(e),c),{documents:c,ks:i})))))}function _v(n,e,t){let r=n.Ms.get(e)||z.min();t.forEach(((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)})),n.Ms.set(e,r)}class _d{constructor(){this.activeTargetIds=lE()}Qs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class xm{constructor(){this.vo=new _d,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.vo.Qs(e),this.Fo[e]||"not-current"}updateQueryState(e,t,r){this.Fo[e]=t}removeLocalQueryTarget(e){this.vo.Gs(e)}isLocalQueryTarget(e){return this.vo.activeTargetIds.has(e)}clearQueryState(e){delete this.Fo[e]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(e){return this.vo.activeTargetIds.has(e)}start(){return this.vo=new _d,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wv{Mo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wd="ConnectivityMonitor";class Td{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(e){this.Lo.push(e)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){N(wd,"Network connectivity changed: AVAILABLE");for(const e of this.Lo)e(0)}Bo(){N(wd,"Network connectivity changed: UNAVAILABLE");for(const e of this.Lo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ji=null;function Nc(){return Ji===null?Ji=(function(){return 268435456+Math.round(2147483648*Math.random())})():Ji++,"0x"+Ji.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ya="RestConnection",Tv={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class Iv{get qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Ko=t+"://"+e.host,this.Uo=`projects/${r}/databases/${s}`,this.$o=this.databaseId.database===Do?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Wo(e,t,r,s,i){const o=Nc(),c=this.Qo(e,t.toUriEncodedString());N(Ya,`Sending RPC '${e}' ${o}:`,c,r);const l={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(l,s,i);const{host:u}=new URL(c),d=mr(u);return this.zo(e,c,l,r,d).then((p=>(N(Ya,`Received RPC '${e}' ${o}: `,p),p)),(p=>{throw bn(Ya,`RPC '${e}' ${o} failed with error: `,p,"url: ",c,"request:",r),p}))}jo(e,t,r,s,i,o){return this.Wo(e,t,r,s,i)}Go(e,t,r){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+is})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((s,i)=>e[i]=s)),r&&r.headers.forEach(((s,i)=>e[i]=s))}Qo(e,t){const r=Tv[e];let s=`${this.Ko}/v1/${t}:${r}`;return this.databaseInfo.apiKey&&(s=`${s}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),s}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ev{constructor(e){this.Jo=e.Jo,this.Ho=e.Ho}Zo(e){this.Xo=e}Yo(e){this.e_=e}t_(e){this.n_=e}onMessage(e){this.r_=e}close(){this.Ho()}send(e){this.Jo(e)}i_(){this.Xo()}s_(){this.e_()}o_(e){this.n_(e)}__(e){this.r_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ue="WebChannelConnection",Ds=(n,e,t)=>{n.listen(e,(r=>{try{t(r)}catch(s){setTimeout((()=>{throw s}),0)}}))};class qr extends Iv{constructor(e){super(e),this.a_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static u_(){if(!qr.c_){const e=ep();Ds(e,Zf.STAT_EVENT,(t=>{t.stat===dc.PROXY?N(Ue,"STAT_EVENT: detected buffering proxy"):t.stat===dc.NOPROXY&&N(Ue,"STAT_EVENT: detected no buffering proxy")})),qr.c_=!0}}zo(e,t,r,s,i){const o=Nc();return new Promise(((c,l)=>{const u=new Jf;u.setWithCredentials(!0),u.listenOnce(Xf.COMPLETE,(()=>{try{switch(u.getLastErrorCode()){case ao.NO_ERROR:const p=u.getResponseJson();N(Ue,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(p)),c(p);break;case ao.TIMEOUT:N(Ue,`RPC '${e}' ${o} timed out`),l(new B(D.DEADLINE_EXCEEDED,"Request time out"));break;case ao.HTTP_ERROR:const y=u.getStatus();if(N(Ue,`RPC '${e}' ${o} failed with status:`,y,"response text:",u.getResponseText()),y>0){let v=u.getResponseJson();Array.isArray(v)&&(v=v[0]);const k=v==null?void 0:v.error;if(k&&k.status&&k.message){const P=(function(V){const O=V.toLowerCase().replace(/_/g,"-");return Object.values(D).indexOf(O)>=0?O:D.UNKNOWN})(k.status);l(new B(P,k.message))}else l(new B(D.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new B(D.UNAVAILABLE,"Connection failed."));break;default:G(9055,{l_:e,streamId:o,h_:u.getLastErrorCode(),P_:u.getLastError()})}}finally{N(Ue,`RPC '${e}' ${o} completed.`)}}));const d=JSON.stringify(s);N(Ue,`RPC '${e}' ${o} sending request:`,s),u.send(t,"POST",d,r,15)}))}T_(e,t,r){const s=Nc(),i=[this.Ko,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=this.createWebChannelTransport(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;l!==void 0&&(c.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Go(c.initMessageHeaders,t,r),c.encodeInitMessageHeaders=!0;const u=i.join("");N(Ue,`Creating RPC '${e}' stream ${s}: ${u}`,c);const d=o.createWebChannel(u,c);this.E_(d);let p=!1,y=!1;const v=new Ev({Jo:k=>{y?N(Ue,`Not sending because RPC '${e}' stream ${s} is closed:`,k):(p||(N(Ue,`Opening RPC '${e}' stream ${s} transport.`),d.open(),p=!0),N(Ue,`RPC '${e}' stream ${s} sending:`,k),d.send(k))},Ho:()=>d.close()});return Ds(d,Fs.EventType.OPEN,(()=>{y||(N(Ue,`RPC '${e}' stream ${s} transport opened.`),v.i_())})),Ds(d,Fs.EventType.CLOSE,(()=>{y||(y=!0,N(Ue,`RPC '${e}' stream ${s} transport closed`),v.o_(),this.I_(d))})),Ds(d,Fs.EventType.ERROR,(k=>{y||(y=!0,bn(Ue,`RPC '${e}' stream ${s} transport errored. Name:`,k.name,"Message:",k.message),v.o_(new B(D.UNAVAILABLE,"The operation could not be completed")))})),Ds(d,Fs.EventType.MESSAGE,(k=>{var P;if(!y){const C=k.data[0];W(!!C,16349);const V=C,O=(V==null?void 0:V.error)||((P=V[0])==null?void 0:P.error);if(O){N(Ue,`RPC '${e}' stream ${s} received error:`,O);const x=O.status;let L=(function(T){const g=ve[T];if(g!==void 0)return Xp(g)})(x),q=O.message;x==="NOT_FOUND"&&q.includes("database")&&q.includes("does not exist")&&q.includes(this.databaseId.database)&&bn(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),L===void 0&&(L=D.INTERNAL,q="Unknown error status: "+x+" with message "+O.message),y=!0,v.o_(new B(L,q)),d.close()}else N(Ue,`RPC '${e}' stream ${s} received:`,C),v.__(C)}})),qr.u_(),setTimeout((()=>{v.s_()}),0),v}terminate(){this.a_.forEach((e=>e.close())),this.a_=[]}E_(e){this.a_.push(e)}I_(e){this.a_=this.a_.filter((t=>t===e))}Go(e,t,r){super.Go(e,t,r),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return tp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vv(n){return new qr(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sv(){return typeof window<"u"?window:null}function _o(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ga(n){return new bE(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */qr.c_=!1;class Dm{constructor(e,t,r=1e3,s=1.5,i=6e4){this.Ci=e,this.timerId=t,this.R_=r,this.A_=s,this.V_=i,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(e){this.cancel();const t=Math.floor(this.d_+this.y_()),r=Math.max(0,Date.now()-this.f_),s=Math.max(0,t-r);s>0&&N("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.d_} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,s,(()=>(this.f_=Date.now(),e()))),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Id="PersistentStream";class Nm{constructor(e,t,r,s,i,o,c,l){this.Ci=e,this.S_=r,this.b_=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=c,this.listener=l,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new Dm(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.S_,6e4,(()=>this.k_())))}q_(e){this.K_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}K_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.K_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===D.RESOURCE_EXHAUSTED?(He(t.toString()),He("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===D.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.t_(t)}W_(){}auth(){this.state=1;const e=this.Q_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([r,s])=>{this.D_===t&&this.G_(r,s)}),(r=>{e((()=>{const s=new B(D.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(s)}))}))}G_(e,t){const r=this.Q_(this.D_);this.stream=this.j_(e,t),this.stream.Zo((()=>{r((()=>this.listener.Zo()))})),this.stream.Yo((()=>{r((()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.b_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.Yo())))})),this.stream.t_((s=>{r((()=>this.z_(s)))})),this.stream.onMessage((s=>{r((()=>++this.F_==1?this.J_(s):this.onNext(s)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(e){return N(Id,`close with error: ${e}`),this.stream=null,this.close(4,e)}Q_(e){return t=>{this.Ci.enqueueAndForget((()=>this.D_===e?t():(N(Id,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class bv extends Nm{constructor(e,t,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,s,o),this.serializer=i}j_(e,t){return this.connection.T_("Listen",e,t)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=PE(this.serializer,e),r=(function(i){if(!("targetChange"in i))return z.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?z.min():o.readTime?Ke(o.readTime):z.min()})(e);return this.listener.H_(t,r)}Z_(e){const t={};t.database=Rc(this.serializer),t.addTarget=(function(i,o){let c;const l=o.target;if(c=Vo(l)?{documents:om(i,l)}:{query:am(i,l).ft},c.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){c.resumeToken=tm(i,o.resumeToken);const u=bc(i,o.expectedCount);u!==null&&(c.expectedCount=u)}else if(o.snapshotVersion.compareTo(z.min())>0){c.readTime=ns(i,o.snapshotVersion.toTimestamp());const u=bc(i,o.expectedCount);u!==null&&(c.expectedCount=u)}return c})(this.serializer,e);const r=CE(this.serializer,e);r&&(t.labels=r),this.q_(t)}X_(e){const t={};t.database=Rc(this.serializer),t.removeTarget=e,this.q_(t)}}class Av extends Nm{constructor(e,t,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,s,o),this.serializer=i}get Y_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.Y_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}J_(e){return W(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,W(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){W(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const t=kE(e.writeResults,e.commitTime),r=Ke(e.commitTime);return this.listener.na(r,t)}ra(){const e={};e.database=Rc(this.serializer),this.q_(e)}ea(e){const t={streamToken:this.lastStreamToken,writes:e.map((r=>Mo(this.serializer,r)))};this.q_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rv{}class Pv extends Rv{constructor(e,t,r,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new B(D.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,r,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,o])=>this.connection.Wo(e,Ac(t,r),s,i,o))).catch((i=>{throw i.name==="FirebaseError"?(i.code===D.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new B(D.UNKNOWN,i.toString())}))}jo(e,t,r,s,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([o,c])=>this.connection.jo(e,Ac(t,r),s,o,c,i))).catch((o=>{throw o.name==="FirebaseError"?(o.code===D.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new B(D.UNKNOWN,o.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}function kv(n,e,t,r){return new Pv(n,e,t,r)}class Cv{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(He(t),this.aa=!1):N("OnlineStateTracker",t)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fr="RemoteStore";class xv{constructor(e,t,r,s,i){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ea=new Map,this.Ia=new Set,this.Ra=[],this.Aa=i,this.Aa.Mo((o=>{r.enqueueAndForget((async()=>{wr(this)&&(N(fr,"Restarting streams for network reachability change."),await(async function(l){const u=Y(l);u.Ia.add(4),await Ri(u),u.Va.set("Unknown"),u.Ia.delete(4),await ya(u)})(this))}))})),this.Va=new Cv(r,s)}}async function ya(n){if(wr(n))for(const e of n.Ra)await e(!0)}async function Ri(n){for(const e of n.Ra)await e(!1)}function Vm(n,e){const t=Y(n);t.Ea.has(e.targetId)||(t.Ea.set(e.targetId,e),Rl(t)?Al(t):as(t).O_()&&bl(t,e))}function Sl(n,e){const t=Y(n),r=as(t);t.Ea.delete(e),r.O_()&&Om(t,e),t.Ea.size===0&&(r.O_()?r.L_():wr(t)&&t.Va.set("Unknown"))}function bl(n,e){if(n.da.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(z.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}as(n).Z_(e)}function Om(n,e){n.da.$e(e),as(n).X_(e)}function Al(n){n.da=new IE({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),At:e=>n.Ea.get(e)||null,ht:()=>n.datastore.serializer.databaseId}),as(n).start(),n.Va.ua()}function Rl(n){return wr(n)&&!as(n).x_()&&n.Ea.size>0}function wr(n){return Y(n).Ia.size===0}function Lm(n){n.da=void 0}async function Dv(n){n.Va.set("Online")}async function Nv(n){n.Ea.forEach(((e,t)=>{bl(n,e)}))}async function Vv(n,e){Lm(n),Rl(n)?(n.Va.ha(e),Al(n)):n.Va.set("Unknown")}async function Ov(n,e,t){if(n.Va.set("Online"),e instanceof em&&e.state===2&&e.cause)try{await(async function(s,i){const o=i.cause;for(const c of i.targetIds)s.Ea.has(c)&&(await s.remoteSyncer.rejectListen(c,o),s.Ea.delete(c),s.da.removeTarget(c))})(n,e)}catch(r){N(fr,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await qo(n,r)}else if(e instanceof go?n.da.Xe(e):e instanceof Zp?n.da.st(e):n.da.tt(e),!t.isEqual(z.min()))try{const r=await Cm(n.localStore);t.compareTo(r)>=0&&await(function(i,o){const c=i.da.Tt(o);return c.targetChanges.forEach(((l,u)=>{if(l.resumeToken.approximateByteSize()>0){const d=i.Ea.get(u);d&&i.Ea.set(u,d.withResumeToken(l.resumeToken,o))}})),c.targetMismatches.forEach(((l,u)=>{const d=i.Ea.get(l);if(!d)return;i.Ea.set(l,d.withResumeToken(Re.EMPTY_BYTE_STRING,d.snapshotVersion)),Om(i,l);const p=new Ht(d.target,l,u,d.sequenceNumber);bl(i,p)})),i.remoteSyncer.applyRemoteEvent(c)})(n,t)}catch(r){N(fr,"Failed to raise snapshot:",r),await qo(n,r)}}async function qo(n,e,t){if(!Nn(e))throw e;n.Ia.add(1),await Ri(n),n.Va.set("Offline"),t||(t=()=>Cm(n.localStore)),n.asyncQueue.enqueueRetryable((async()=>{N(fr,"Retrying IndexedDB access"),await t(),n.Ia.delete(1),await ya(n)}))}function Mm(n,e){return e().catch((t=>qo(n,t,e)))}async function Pi(n){const e=Y(n),t=Pn(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:Xn;for(;Lv(e);)try{const s=await gv(e.localStore,r);if(s===null){e.Ta.length===0&&t.L_();break}r=s.batchId,Mv(e,s)}catch(s){await qo(e,s)}Fm(e)&&Um(e)}function Lv(n){return wr(n)&&n.Ta.length<10}function Mv(n,e){n.Ta.push(e);const t=Pn(n);t.O_()&&t.Y_&&t.ea(e.mutations)}function Fm(n){return wr(n)&&!Pn(n).x_()&&n.Ta.length>0}function Um(n){Pn(n).start()}async function Fv(n){Pn(n).ra()}async function Uv(n){const e=Pn(n);for(const t of n.Ta)e.ea(t.mutations)}async function $v(n,e,t){const r=n.Ta.shift(),s=fl.from(r,e,t);await Mm(n,(()=>n.remoteSyncer.applySuccessfulWrite(s))),await Pi(n)}async function Bv(n,e){e&&Pn(n).Y_&&await(async function(r,s){if((function(o){return _E(o)&&o!==D.ABORTED})(s.code)){const i=r.Ta.shift();Pn(r).B_(),await Mm(r,(()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s))),await Pi(r)}})(n,e),Fm(n)&&Um(n)}async function Ed(n,e){const t=Y(n);t.asyncQueue.verifyOperationInProgress(),N(fr,"RemoteStore received new credentials");const r=wr(t);t.Ia.add(3),await Ri(t),r&&t.Va.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ia.delete(3),await ya(t)}async function qv(n,e){const t=Y(n);e?(t.Ia.delete(2),await ya(t)):e||(t.Ia.add(2),await Ri(t),t.Va.set("Unknown"))}function as(n){return n.ma||(n.ma=(function(t,r,s){const i=Y(t);return i.sa(),new bv(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)})(n.datastore,n.asyncQueue,{Zo:Dv.bind(null,n),Yo:Nv.bind(null,n),t_:Vv.bind(null,n),H_:Ov.bind(null,n)}),n.Ra.push((async e=>{e?(n.ma.B_(),Rl(n)?Al(n):n.Va.set("Unknown")):(await n.ma.stop(),Lm(n))}))),n.ma}function Pn(n){return n.fa||(n.fa=(function(t,r,s){const i=Y(t);return i.sa(),new Av(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)})(n.datastore,n.asyncQueue,{Zo:()=>Promise.resolve(),Yo:Fv.bind(null,n),t_:Bv.bind(null,n),ta:Uv.bind(null,n),na:$v.bind(null,n)}),n.Ra.push((async e=>{e?(n.fa.B_(),await Pi(n)):(await n.fa.stop(),n.Ta.length>0&&(N(fr,`Stopping write stream with ${n.Ta.length} pending writes`),n.Ta=[]))}))),n.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pl{constructor(e,t,r,s,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Ft,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((o=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,s,i){const o=Date.now()+r,c=new Pl(e,t,o,s,i);return c.start(r),c}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new B(D.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function kl(n,e){if(He("AsyncQueue",`${e}: ${n}`),Nn(n))return new B(D.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jr{static emptySet(e){return new jr(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||U.comparator(t.key,r.key):(t,r)=>U.comparator(t.key,r.key),this.keyedMap=Us(),this.sortedSet=new ge(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,r)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof jr)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new jr;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vd{constructor(){this.ga=new ge(U.comparator)}track(e){const t=e.doc.key,r=this.ga.get(t);r?e.type!==0&&r.type===3?this.ga=this.ga.insert(t,e):e.type===3&&r.type!==1?this.ga=this.ga.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ga=this.ga.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ga=this.ga.remove(t):e.type===1&&r.type===2?this.ga=this.ga.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):G(63341,{Vt:e,pa:r}):this.ga=this.ga.insert(t,e)}ya(){const e=[];return this.ga.inorderTraversal(((t,r)=>{e.push(r)})),e}}class rs{constructor(e,t,r,s,i,o,c,l,u){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=c,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,t,r,s,i){const o=[];return t.forEach((c=>{o.push({type:0,doc:c})})),new rs(e,t,jr.emptySet(t),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ca(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==r[s].type||!t[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jv{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some((e=>e.Da()))}}class Gv{constructor(){this.queries=Sd(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,r){const s=Y(t),i=s.queries;s.queries=Sd(),i.forEach(((o,c)=>{for(const l of c.Sa)l.onError(r)}))})(this,new B(D.ABORTED,"Firestore shutting down"))}}function Sd(){return new en((n=>Fp(n)),ca)}async function Cl(n,e){const t=Y(n);let r=3;const s=e.query;let i=t.queries.get(s);i?!i.ba()&&e.Da()&&(r=2):(i=new jv,r=e.Da()?0:1);try{switch(r){case 0:i.wa=await t.onListen(s,!0);break;case 1:i.wa=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(o){const c=kl(o,`Initialization of query '${Vr(e.query)}' failed`);return void e.onError(c)}t.queries.set(s,i),i.Sa.push(e),e.va(t.onlineState),i.wa&&e.Fa(i.wa)&&Dl(t)}async function xl(n,e){const t=Y(n),r=e.query;let s=3;const i=t.queries.get(r);if(i){const o=i.Sa.indexOf(e);o>=0&&(i.Sa.splice(o,1),i.Sa.length===0?s=e.Da()?0:1:!i.ba()&&e.Da()&&(s=2))}switch(s){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function Wv(n,e){const t=Y(n);let r=!1;for(const s of e){const i=s.query,o=t.queries.get(i);if(o){for(const c of o.Sa)c.Fa(s)&&(r=!0);o.wa=s}}r&&Dl(t)}function zv(n,e,t){const r=Y(n),s=r.queries.get(e);if(s)for(const i of s.Sa)i.onError(t);r.queries.delete(e)}function Dl(n){n.Ca.forEach((e=>{e.next()}))}var Vc,bd;(bd=Vc||(Vc={})).Ma="default",bd.Cache="cache";class Nl{constructor(e,t,r){this.query=e,this.xa=t,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new rs(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),t=!0):this.La(e,this.onlineState)&&(this.ka(e),t=!0),this.Na=e,t}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let t=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),t=!0),t}La(e,t){if(!e.fromCache||!this.Da())return!0;const r=t!=="Offline";return(!this.options.qa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const t=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}ka(e){e=rs.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==Vc.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $m{constructor(e){this.key=e}}class Bm{constructor(e){this.key=e}}class Hv{constructor(e,t){this.query=e,this.Za=t,this.Xa=null,this.hasCachedResults=!1,this.current=!1,this.Ya=Z(),this.mutatedKeys=Z(),this.eu=Up(e),this.tu=new jr(this.eu)}get nu(){return this.Za}ru(e,t){const r=t?t.iu:new vd,s=t?t.tu:this.tu;let i=t?t.mutatedKeys:this.mutatedKeys,o=s,c=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,u=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal(((d,p)=>{const y=s.get(d),v=bi(this.query,p)?p:null,k=!!y&&this.mutatedKeys.has(y.key),P=!!v&&(v.hasLocalMutations||this.mutatedKeys.has(v.key)&&v.hasCommittedMutations);let C=!1;y&&v?y.data.isEqual(v.data)?k!==P&&(r.track({type:3,doc:v}),C=!0):this.su(y,v)||(r.track({type:2,doc:v}),C=!0,(l&&this.eu(v,l)>0||u&&this.eu(v,u)<0)&&(c=!0)):!y&&v?(r.track({type:0,doc:v}),C=!0):y&&!v&&(r.track({type:1,doc:y}),C=!0,(l||u)&&(c=!0)),C&&(v?(o=o.add(v),i=P?i.add(d):i.delete(d)):(o=o.delete(d),i=i.delete(d)))})),this.query.limit!==null)for(;o.size>this.query.limit;){const d=this.query.limitType==="F"?o.last():o.first();o=o.delete(d.key),i=i.delete(d.key),r.track({type:1,doc:d})}return{tu:o,iu:r,bs:c,mutatedKeys:i}}su(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,s){const i=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const o=e.iu.ya();o.sort(((d,p)=>(function(v,k){const P=C=>{switch(C){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return G(20277,{Vt:C})}};return P(v)-P(k)})(d.type,p.type)||this.eu(d.doc,p.doc))),this.ou(r),s=s??!1;const c=t&&!s?this._u():[],l=this.Ya.size===0&&this.current&&!s?1:0,u=l!==this.Xa;return this.Xa=l,o.length!==0||u?{snapshot:new rs(this.query,e.tu,i,o,e.mutatedKeys,l===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:c}:{au:c}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new vd,mutatedKeys:this.mutatedKeys,bs:!1},!1)):{au:[]}}uu(e){return!this.Za.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach((t=>this.Za=this.Za.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Za=this.Za.delete(t))),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Ya;this.Ya=Z(),this.tu.forEach((r=>{this.uu(r.key)&&(this.Ya=this.Ya.add(r.key))}));const t=[];return e.forEach((r=>{this.Ya.has(r)||t.push(new Bm(r))})),this.Ya.forEach((r=>{e.has(r)||t.push(new $m(r))})),t}cu(e){this.Za=e.ks,this.Ya=Z();const t=this.ru(e.documents);return this.applyChanges(t,!0)}lu(){return rs.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Xa===0,this.hasCachedResults)}}const Vl="SyncEngine";class Kv{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class Qv{constructor(e){this.key=e,this.hu=!1}}class Yv{constructor(e,t,r,s,i,o){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Pu={},this.Tu=new en((c=>Fp(c)),ca),this.Eu=new Map,this.Iu=new Set,this.Ru=new ge(U.comparator),this.Au=new Map,this.Vu=new wl,this.du={},this.mu=new Map,this.fu=dr.ar(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function Jv(n,e,t=!0){const r=Hm(n);let s;const i=r.Tu.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.lu()):s=await qm(r,e,t,!0),s}async function Xv(n,e){const t=Hm(n);await qm(t,e,!0,!1)}async function qm(n,e,t,r){const s=await yv(n.localStore,pt(e)),i=s.targetId,o=n.sharedClientState.addLocalQueryTarget(i,t);let c;return r&&(c=await Zv(n,e,i,o==="current",s.resumeToken)),n.isPrimaryClient&&t&&Vm(n.remoteStore,s),c}async function Zv(n,e,t,r,s){n.pu=(p,y,v)=>(async function(P,C,V,O){let x=C.view.ru(V);x.bs&&(x=await yd(P.localStore,C.query,!1).then((({documents:T})=>C.view.ru(T,x))));const L=O&&O.targetChanges.get(C.targetId),q=O&&O.targetMismatches.get(C.targetId)!=null,j=C.view.applyChanges(x,P.isPrimaryClient,L,q);return Rd(P,C.targetId,j.au),j.snapshot})(n,p,y,v);const i=await yd(n.localStore,e,!0),o=new Hv(e,i.ks),c=o.ru(i.documents),l=Ai.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",s),u=o.applyChanges(c,n.isPrimaryClient,l);Rd(n,t,u.au);const d=new Kv(e,t,o);return n.Tu.set(e,d),n.Eu.has(t)?n.Eu.get(t).push(e):n.Eu.set(t,[e]),u.snapshot}async function eS(n,e,t){const r=Y(n),s=r.Tu.get(e),i=r.Eu.get(s.targetId);if(i.length>1)return r.Eu.set(s.targetId,i.filter((o=>!ca(o,e)))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Dc(r.localStore,s.targetId,!1).then((()=>{r.sharedClientState.clearQueryState(s.targetId),t&&Sl(r.remoteStore,s.targetId),Oc(r,s.targetId)})).catch(yr)):(Oc(r,s.targetId),await Dc(r.localStore,s.targetId,!0))}async function tS(n,e){const t=Y(n),r=t.Tu.get(e),s=t.Eu.get(r.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),Sl(t.remoteStore,r.targetId))}async function nS(n,e,t){const r=Km(n);try{const s=await(function(o,c){const l=Y(o),u=oe.now(),d=c.reduce(((v,k)=>v.add(k.key)),Z());let p,y;return l.persistence.runTransaction("Locally write mutations","readwrite",(v=>{let k=rt(),P=Z();return l.xs.getEntries(v,d).next((C=>{k=C,k.forEach(((V,O)=>{O.isValidDocument()||(P=P.add(V))}))})).next((()=>l.localDocuments.getOverlayedDocuments(v,k))).next((C=>{p=C;const V=[];for(const O of c){const x=gE(O,p.get(O.key).overlayedDocument);x!=null&&V.push(new Vn(O.key,x,Cp(x.value.mapValue),Xe.exists(!0)))}return l.mutationQueue.addMutationBatch(v,u,V,c)})).next((C=>{y=C;const V=C.applyToLocalDocumentSet(p,P);return l.documentOverlayCache.saveOverlays(v,C.batchId,V)}))})).then((()=>({batchId:y.batchId,changes:Bp(p)})))})(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),(function(o,c,l){let u=o.du[o.currentUser.toKey()];u||(u=new ge(Q)),u=u.insert(c,l),o.du[o.currentUser.toKey()]=u})(r,s.batchId,t),await ki(r,s.changes),await Pi(r.remoteStore)}catch(s){const i=kl(s,"Failed to persist write");t.reject(i)}}async function jm(n,e){const t=Y(n);try{const r=await pv(t.localStore,e);e.targetChanges.forEach(((s,i)=>{const o=t.Au.get(i);o&&(W(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?o.hu=!0:s.modifiedDocuments.size>0?W(o.hu,14607):s.removedDocuments.size>0&&(W(o.hu,42227),o.hu=!1))})),await ki(t,r,e)}catch(r){await yr(r)}}function Ad(n,e,t){const r=Y(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const s=[];r.Tu.forEach(((i,o)=>{const c=o.view.va(e);c.snapshot&&s.push(c.snapshot)})),(function(o,c){const l=Y(o);l.onlineState=c;let u=!1;l.queries.forEach(((d,p)=>{for(const y of p.Sa)y.va(c)&&(u=!0)})),u&&Dl(l)})(r.eventManager,e),s.length&&r.Pu.H_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function rS(n,e,t){const r=Y(n);r.sharedClientState.updateQueryState(e,"rejected",t);const s=r.Au.get(e),i=s&&s.key;if(i){let o=new ge(U.comparator);o=o.insert(i,Te.newNoDocument(i,z.min()));const c=Z().add(i),l=new da(z.min(),new Map,new ge(Q),o,c);await jm(r,l),r.Ru=r.Ru.remove(i),r.Au.delete(e),Ol(r)}else await Dc(r.localStore,e,!1).then((()=>Oc(r,e,t))).catch(yr)}async function sS(n,e){const t=Y(n),r=e.batch.batchId;try{const s=await fv(t.localStore,e);Wm(t,r,null),Gm(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await ki(t,s)}catch(s){await yr(s)}}async function iS(n,e,t){const r=Y(n);try{const s=await(function(o,c){const l=Y(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",(u=>{let d;return l.mutationQueue.lookupMutationBatch(u,c).next((p=>(W(p!==null,37113),d=p.keys(),l.mutationQueue.removeMutationBatch(u,p)))).next((()=>l.mutationQueue.performConsistencyCheck(u))).next((()=>l.documentOverlayCache.removeOverlaysForBatchId(u,d,c))).next((()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,d))).next((()=>l.localDocuments.getDocuments(u,d)))}))})(r.localStore,e);Wm(r,e,t),Gm(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await ki(r,s)}catch(s){await yr(s)}}function Gm(n,e){(n.mu.get(e)||[]).forEach((t=>{t.resolve()})),n.mu.delete(e)}function Wm(n,e,t){const r=Y(n);let s=r.du[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(t?i.reject(t):i.resolve(),s=s.remove(e)),r.du[r.currentUser.toKey()]=s}}function Oc(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Eu.get(e))n.Tu.delete(r),t&&n.Pu.yu(r,t);n.Eu.delete(e),n.isPrimaryClient&&n.Vu.Gr(e).forEach((r=>{n.Vu.containsKey(r)||zm(n,r)}))}function zm(n,e){n.Iu.delete(e.path.canonicalString());const t=n.Ru.get(e);t!==null&&(Sl(n.remoteStore,t),n.Ru=n.Ru.remove(e),n.Au.delete(t),Ol(n))}function Rd(n,e,t){for(const r of t)r instanceof $m?(n.Vu.addReference(r.key,e),oS(n,r)):r instanceof Bm?(N(Vl,"Document no longer in limbo: "+r.key),n.Vu.removeReference(r.key,e),n.Vu.containsKey(r.key)||zm(n,r.key)):G(19791,{wu:r})}function oS(n,e){const t=e.key,r=t.path.canonicalString();n.Ru.get(t)||n.Iu.has(r)||(N(Vl,"New document in limbo: "+t),n.Iu.add(r),Ol(n))}function Ol(n){for(;n.Iu.size>0&&n.Ru.size<n.maxConcurrentLimboResolutions;){const e=n.Iu.values().next().value;n.Iu.delete(e);const t=new U(ie.fromString(e)),r=n.fu.next();n.Au.set(r,new Qv(t)),n.Ru=n.Ru.insert(t,r),Vm(n.remoteStore,new Ht(pt(Si(t.path)),r,"TargetPurposeLimboResolution",ht.ce))}}async function ki(n,e,t){const r=Y(n),s=[],i=[],o=[];r.Tu.isEmpty()||(r.Tu.forEach(((c,l)=>{o.push(r.pu(l,e,t).then((u=>{var d;if((u||t)&&r.isPrimaryClient){const p=u?!u.fromCache:(d=t==null?void 0:t.targetChanges.get(l.targetId))==null?void 0:d.current;r.sharedClientState.updateQueryState(l.targetId,p?"current":"not-current")}if(u){s.push(u);const p=El.Is(l.targetId,u);i.push(p)}})))})),await Promise.all(o),r.Pu.H_(s),await(async function(l,u){const d=Y(l);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",(p=>b.forEach(u,(y=>b.forEach(y.Ts,(v=>d.persistence.referenceDelegate.addReference(p,y.targetId,v))).next((()=>b.forEach(y.Es,(v=>d.persistence.referenceDelegate.removeReference(p,y.targetId,v)))))))))}catch(p){if(!Nn(p))throw p;N(vl,"Failed to update sequence numbers: "+p)}for(const p of u){const y=p.targetId;if(!p.fromCache){const v=d.vs.get(y),k=v.snapshotVersion,P=v.withLastLimboFreeSnapshotVersion(k);d.vs=d.vs.insert(y,P)}}})(r.localStore,i))}async function aS(n,e){const t=Y(n);if(!t.currentUser.isEqual(e)){N(Vl,"User change. New user:",e.toKey());const r=await km(t.localStore,e);t.currentUser=e,(function(i,o){i.mu.forEach((c=>{c.forEach((l=>{l.reject(new B(D.CANCELLED,o))}))})),i.mu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await ki(t,r.Ns)}}function cS(n,e){const t=Y(n),r=t.Au.get(e);if(r&&r.hu)return Z().add(r.key);{let s=Z();const i=t.Eu.get(e);if(!i)return s;for(const o of i){const c=t.Tu.get(o);s=s.unionWith(c.view.nu)}return s}}function Hm(n){const e=Y(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=jm.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=cS.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=rS.bind(null,e),e.Pu.H_=Wv.bind(null,e.eventManager),e.Pu.yu=zv.bind(null,e.eventManager),e}function Km(n){const e=Y(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=sS.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=iS.bind(null,e),e}class fi{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=ga(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,t){return null}Mu(e,t){return null}vu(e){return Pm(this.persistence,new Rm,e.initialUser,this.serializer)}Cu(e){return new Tl(ma.Vi,this.serializer)}Du(e){return new xm}async terminate(){var e,t;(e=this.gcScheduler)==null||e.stop(),(t=this.indexBackfillerScheduler)==null||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}fi.provider={build:()=>new fi};class lS extends fi{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){W(this.persistence.referenceDelegate instanceof Bo,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new Em(r,e.asyncQueue,t)}Cu(e){const t=this.cacheSizeBytes!==void 0?$e.withCacheSize(this.cacheSizeBytes):$e.DEFAULT;return new Tl((r=>Bo.Vi(r,t)),this.serializer)}}class uS extends fi{constructor(e,t,r){super(),this.xu=e,this.cacheSizeBytes=t,this.forceOwnership=r,this.kind="persistent",this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.xu.initialize(this,e),await Km(this.xu.syncEngine),await Pi(this.xu.remoteStore),await this.persistence.zi((()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve())))}vu(e){return Pm(this.persistence,new Rm,e.initialUser,this.serializer)}Fu(e,t){const r=this.persistence.referenceDelegate.garbageCollector;return new Em(r,e.asyncQueue,t)}Mu(e,t){const r=new dI(t,this.persistence);return new hI(e.asyncQueue,r)}Cu(e){const t=lv(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),r=this.cacheSizeBytes!==void 0?$e.withCacheSize(this.cacheSizeBytes):$e.DEFAULT;return new Il(this.synchronizeTabs,t,e.clientId,r,e.asyncQueue,Sv(),_o(),this.serializer,this.sharedClientState,!!this.forceOwnership)}Du(e){return new xm}}class jo{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Ad(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=aS.bind(null,this.syncEngine),await qv(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new Gv})()}createDatastore(e){const t=ga(e.databaseInfo.databaseId),r=vv(e.databaseInfo);return kv(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return(function(r,s,i,o,c){return new xv(r,s,i,o,c)})(this.localStore,this.datastore,e.asyncQueue,(t=>Ad(this.syncEngine,t,0)),(function(){return Td.v()?new Td:new wv})())}createSyncEngine(e,t){return(function(s,i,o,c,l,u,d){const p=new Yv(s,i,o,c,l,u);return d&&(p.gu=!0),p})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await(async function(s){const i=Y(s);N(fr,"RemoteStore shutting down."),i.Ia.add(5),await Ri(i),i.Aa.shutdown(),i.Va.set("Unknown")})(this.remoteStore),(e=this.datastore)==null||e.terminate(),(t=this.eventManager)==null||t.terminate()}}jo.provider={build:()=>new jo};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ll{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):He("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kn="FirestoreClient";class hS{constructor(e,t,r,s,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this._databaseInfo=s,this.user=Oe.UNAUTHENTICATED,this.clientId=Xc.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,(async o=>{N(kn,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o})),this.appCheckCredentials.start(r,(o=>(N(kn,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Ft;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=kl(t,"Failed to shutdown persistence");e.reject(r)}})),e.promise}}async function Ja(n,e){n.asyncQueue.verifyOperationInProgress(),N(kn,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener((async s=>{r.isEqual(s)||(await km(e.localStore,s),r=s)})),e.persistence.setDatabaseDeletedListener((()=>n.terminate())),n._offlineComponents=e}async function Pd(n,e){n.asyncQueue.verifyOperationInProgress();const t=await dS(n);N(kn,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener((r=>Ed(e.remoteStore,r))),n.setAppCheckTokenChangeListener(((r,s)=>Ed(e.remoteStore,s))),n._onlineComponents=e}async function dS(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){N(kn,"Using user provided OfflineComponentProvider");try{await Ja(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(s){return s.name==="FirebaseError"?s.code===D.FAILED_PRECONDITION||s.code===D.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11})(t))throw t;bn("Error using user provided cache. Falling back to memory cache: "+t),await Ja(n,new fi)}}else N(kn,"Using default OfflineComponentProvider"),await Ja(n,new lS(void 0));return n._offlineComponents}async function Qm(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(N(kn,"Using user provided OnlineComponentProvider"),await Pd(n,n._uninitializedComponentsProvider._online)):(N(kn,"Using default OnlineComponentProvider"),await Pd(n,new jo))),n._onlineComponents}function fS(n){return Qm(n).then((e=>e.syncEngine))}async function Go(n){const e=await Qm(n),t=e.eventManager;return t.onListen=Jv.bind(null,e.syncEngine),t.onUnlisten=eS.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=Xv.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=tS.bind(null,e.syncEngine),t}function pS(n,e,t,r){const s=new Ll(r),i=new Nl(e,s,t);return n.asyncQueue.enqueueAndForget((async()=>Cl(await Go(n),i))),()=>{s.Nu(),n.asyncQueue.enqueueAndForget((async()=>xl(await Go(n),i)))}}function mS(n,e,t={}){const r=new Ft;return n.asyncQueue.enqueueAndForget((async()=>(function(i,o,c,l,u){const d=new Ll({next:y=>{d.Nu(),o.enqueueAndForget((()=>xl(i,p)));const v=y.docs.has(c);!v&&y.fromCache?u.reject(new B(D.UNAVAILABLE,"Failed to get document because the client is offline.")):v&&y.fromCache&&l&&l.source==="server"?u.reject(new B(D.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(y)},error:y=>u.reject(y)}),p=new Nl(Si(c.path),d,{includeMetadataChanges:!0,qa:!0});return Cl(i,p)})(await Go(n),n.asyncQueue,e,t,r))),r.promise}function gS(n,e,t={}){const r=new Ft;return n.asyncQueue.enqueueAndForget((async()=>(function(i,o,c,l,u){const d=new Ll({next:y=>{d.Nu(),o.enqueueAndForget((()=>xl(i,p))),y.fromCache&&l.source==="server"?u.reject(new B(D.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(y)},error:y=>u.reject(y)}),p=new Nl(c,d,{includeMetadataChanges:!0,qa:!0});return Cl(i,p)})(await Go(n),n.asyncQueue,e,t,r))),r.promise}function yS(n,e){const t=new Ft;return n.asyncQueue.enqueueAndForget((async()=>nS(await fS(n),e,t))),t.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ym(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _S="ComponentProvider",kd=new Map;function wS(n,e,t,r,s){return new BI(n,e,t,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,Ym(s.experimentalLongPollingOptions),s.useFetchStreams,s.isUsingEmulator,r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jm="firestore.googleapis.com",Cd=!0;class xd{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new B(D.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Jm,this.ssl=Cd}else this.host=e.host,this.ssl=e.ssl??Cd;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=_m;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<zE)throw new B(D.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}aI("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Ym(e.experimentalLongPollingOptions??{}),(function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new B(D.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new B(D.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new B(D.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(r,s){return r.timeoutSeconds===s.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class _a{constructor(e,t,r,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new xd({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new B(D.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new B(D.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new xd(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(r){if(!r)return new JT;switch(r.type){case"firstParty":return new tI(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new B(D.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const r=kd.get(t);r&&(N(_S,"Removing Datastore"),kd.delete(t),r.terminate())})(this),Promise.resolve()}}function TS(n,e,t,r={}){var u;n=ft(n,_a);const s=mr(e),i=n._getSettings(),o={...i,emulatorOptions:n._getEmulatorOptions()},c=`${e}:${t}`;s&&Fc(`https://${c}`),i.host!==Jm&&i.host!==c&&bn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const l={...i,host:c,ssl:s,emulatorOptions:r};if(!sr(l,o)&&(n._setSettings(l),r.mockUserToken)){let d,p;if(typeof r.mockUserToken=="string")d=r.mockUserToken,p=Oe.MOCK_USER;else{d=nf(r.mockUserToken,(u=n._app)==null?void 0:u.options.projectId);const y=r.mockUserToken.sub||r.mockUserToken.user_id;if(!y)throw new B(D.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");p=new Oe(y)}n._authCredentials=new XT(new rp(d,p))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ci{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Ci(this.firestore,e,this._query)}}class be{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new vn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new be(this.firestore,e,this._key)}toJSON(){return{type:be._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,r){if(Ii(t,be._jsonSchema))return new be(e,r||null,new U(ie.fromString(t.referencePath)))}}be._jsonSchemaVersion="firestore/documentReference/1.0",be._jsonSchema={type:Se("string",be._jsonSchemaVersion),referencePath:Se("string")};class vn extends Ci{constructor(e,t,r){super(e,t,Si(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new be(this.firestore,null,new U(e))}withConverter(e){return new vn(this.firestore,e,this._path)}}function Dd(n,e,...t){if(n=Ae(n),ip("collection","path",e),n instanceof _a){const r=ie.fromString(e,...t);return Ih(r),new vn(n,null,r)}{if(!(n instanceof be||n instanceof vn))throw new B(D.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(ie.fromString(e,...t));return Ih(r),new vn(n.firestore,null,r)}}function Ve(n,e,...t){if(n=Ae(n),arguments.length===1&&(e=Xc.newId()),ip("doc","path",e),n instanceof _a){const r=ie.fromString(e,...t);return Th(r),new be(n,null,new U(r))}{if(!(n instanceof be||n instanceof vn))throw new B(D.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(ie.fromString(e,...t));return Th(r),new be(n.firestore,n instanceof vn?n.converter:null,new U(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nd="AsyncQueue";class Vd{constructor(e=Promise.resolve()){this.Yu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new Dm(this,"async_queue_retry"),this._c=()=>{const r=_o();r&&N(Nd,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const t=_o();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=_o();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const t=new Ft;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Yu.push(e),this.lc())))}async lc(){if(this.Yu.length!==0){try{await this.Yu[0](),this.Yu.shift(),this.M_.reset()}catch(e){if(!Nn(e))throw e;N(Nd,"Operation failed with retryable error: "+e)}this.Yu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const t=this.ac.then((()=>(this.rc=!0,e().catch((r=>{throw this.nc=r,this.rc=!1,He("INTERNAL UNHANDLED ERROR: ",Od(r)),r})).then((r=>(this.rc=!1,r))))));return this.ac=t,t}enqueueAfterDelay(e,t,r){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const s=Pl.createAndSchedule(this,e,t,r,(i=>this.hc(i)));return this.tc.push(s),s}uc(){this.nc&&G(47125,{Pc:Od(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ec(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ic(e){return this.Tc().then((()=>{this.tc.sort(((t,r)=>t.targetTimeMs-r.targetTimeMs));for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()}))}Rc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function Od(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}class Cn extends _a{constructor(e,t,r,s){super(e,t,r,s),this.type="firestore",this._queue=new Vd,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Vd(e),this._firestoreClient=void 0,await e}}}function IS(n,e){const t=typeof n=="object"?n:Qo(),r=typeof n=="string"?n:Do,s=Ko(t,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=Zd("firestore");i&&TS(s,...i)}return s}function wa(n){if(n._terminated)throw new B(D.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||Xm(n),n._firestoreClient}function Xm(n){var r,s,i,o;const e=n._freezeSettings(),t=wS(n._databaseId,((r=n._app)==null?void 0:r.options.appId)||"",n._persistenceKey,(s=n._app)==null?void 0:s.options.apiKey,e);n._componentsProvider||(i=e.localCache)!=null&&i._offlineComponentProvider&&((o=e.localCache)!=null&&o._onlineComponentProvider)&&(n._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),n._firestoreClient=new hS(n._authCredentials,n._appCheckCredentials,n._queue,t,n._componentsProvider&&(function(l){const u=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(u),_online:u}})(n._componentsProvider))}function ES(n,e){bn("enableIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const t=n._freezeSettings();return vS(n,jo.provider,{build:r=>new uS(r,t.cacheSizeBytes,e==null?void 0:e.forceOwnership)}),Promise.resolve()}function vS(n,e,t){if((n=ft(n,Cn))._firestoreClient||n._terminated)throw new B(D.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.");if(n._componentsProvider||n._getSettings().localCache)throw new B(D.FAILED_PRECONDITION,"SDK cache is already specified.");n._componentsProvider={_online:e,_offline:t},Xm(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ut(Re.fromBase64String(e))}catch(t){throw new B(D.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new ut(Re.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:ut._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Ii(e,ut._jsonSchema))return ut.fromBase64String(e.bytes)}}ut._jsonSchemaVersion="firestore/bytes/1.0",ut._jsonSchema={type:Se("string",ut._jsonSchemaVersion),bytes:Se("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zm{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new B(D.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ye(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ml{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new B(D.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new B(D.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Q(this._lat,e._lat)||Q(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Ut._jsonSchemaVersion}}static fromJSON(e){if(Ii(e,Ut._jsonSchema))return new Ut(e.latitude,e.longitude)}}Ut._jsonSchemaVersion="firestore/geoPoint/1.0",Ut._jsonSchema={type:Se("string",Ut._jsonSchemaVersion),latitude:Se("number"),longitude:Se("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0})(this._values,e._values)}toJSON(){return{type:At._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Ii(e,At._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new At(e.vectorValues);throw new B(D.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}At._jsonSchemaVersion="firestore/vectorValue/1.0",At._jsonSchema={type:Se("string",At._jsonSchemaVersion),vectorValues:Se("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SS=/^__.*__$/;class bS{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new Vn(e,this.data,this.fieldMask,t,this.fieldTransforms):new os(e,this.data,t,this.fieldTransforms)}}function eg(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw G(40011,{dataSource:n})}}class Fl{constructor(e,t,r,s,i,o){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Ac(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}i(e){return new Fl({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}dc(e){var s;const t=(s=this.path)==null?void 0:s.child(e),r=this.i({path:t,arrayElement:!1});return r.mc(e),r}fc(e){var s;const t=(s=this.path)==null?void 0:s.child(e),r=this.i({path:t,arrayElement:!1});return r.Ac(),r}gc(e){return this.i({path:void 0,arrayElement:!0})}yc(e){return Wo(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.mc(this.path.get(e))}mc(e){if(e.length===0)throw this.yc("Document fields must not be empty");if(eg(this.dataSource)&&SS.test(e))throw this.yc('Document fields cannot begin and end with "__"')}}class AS{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||ga(e)}I(e,t,r,s=!1){return new Fl({dataSource:e,methodName:t,targetDoc:r,path:ye.emptyPath(),arrayElement:!1,hasConverter:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function RS(n){const e=n._freezeSettings(),t=ga(n._databaseId);return new AS(n._databaseId,!!e.ignoreUndefinedProperties,t)}function PS(n,e,t,r,s,i={}){const o=n.I(i.merge||i.mergeFields?2:0,e,t,s);sg("Data must be an object, but it was:",o,r);const c=ng(r,o);let l,u;if(i.merge)l=new dt(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const d=[];for(const p of i.mergeFields){const y=$l(e,p,t);if(!o.contains(y))throw new B(D.INVALID_ARGUMENT,`Field '${y}' is specified in your field mask but missing from your input data.`);xS(d,y)||d.push(y)}l=new dt(d),u=o.fieldTransforms.filter((p=>l.covers(p.field)))}else l=null,u=o.fieldTransforms;return new bS(new Je(c),l,u)}class Ul extends Ml{_toFieldTransform(e){return new Kp(e.path,new Zr)}isEqual(e){return e instanceof Ul}}function tg(n,e){if(rg(n=Ae(n)))return sg("Unsupported field value:",e,n),ng(n,e);if(n instanceof Ml)return(function(r,s){if(!eg(s.dataSource))throw s.yc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.yc(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)})(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.yc("Nested arrays are not supported");return(function(r,s){const i=[];let o=0;for(const c of r){let l=tg(c,s.gc(o));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),o++}return{arrayValue:{values:i}}})(n,e)}return(function(r,s){if((r=Ae(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return uE(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=oe.fromDate(r);return{timestampValue:ns(s.serializer,i)}}if(r instanceof oe){const i=new oe(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:ns(s.serializer,i)}}if(r instanceof Ut)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof ut)return{bytesValue:tm(s.serializer,r._byteString)};if(r instanceof be){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.yc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:gl(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof At)return(function(o,c){const l=o instanceof At?o.toArray():o;return{mapValue:{fields:{[al]:{stringValue:cl},[Qr]:{arrayValue:{values:l.map((d=>{if(typeof d!="number")throw c.yc("VectorValues must only contain numeric values.");return hl(c.serializer,d)}))}}}}}})(r,s);if(dm(r))return r._toProto(s.serializer);throw s.yc(`Unsupported field value: ${Zc(r)}`)})(n,e)}function ng(n,e){const t={};return Ip(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):_r(n,((r,s)=>{const i=tg(s,e.dc(r));i!=null&&(t[r]=i)})),{mapValue:{fields:t}}}function rg(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof oe||n instanceof Ut||n instanceof ut||n instanceof be||n instanceof Ml||n instanceof At||dm(n))}function sg(n,e,t){if(!rg(t)||!op(t)){const r=Zc(t);throw r==="an object"?e.yc(n+" a custom object"):e.yc(n+" "+r)}}function $l(n,e,t){if((e=Ae(e))instanceof Zm)return e._internalPath;if(typeof e=="string")return CS(n,e);throw Wo("Field path arguments must be of type string or ",n,!1,void 0,t)}const kS=new RegExp("[~\\*/\\[\\]]");function CS(n,e,t){if(e.search(kS)>=0)throw Wo(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Zm(...e.split("."))._internalPath}catch{throw Wo(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Wo(n,e,t,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let c=`Function ${e}() called with invalid data`;t&&(c+=" (via `toFirestore()`)"),c+=". ";let l="";return(i||o)&&(l+=" (found",i&&(l+=` in field ${r}`),o&&(l+=` in document ${s}`),l+=")"),new B(D.INVALID_ARGUMENT,c+n+l)}function xS(n,e){return n.some((t=>t.isEqual(e)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DS{convertValue(e,t="none"){switch(An(e)){case 0:return null;case 1:return e.booleanValue;case 2:return me(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Zt(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw G(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return _r(e,((s,i)=>{r[s]=this.convertValue(i,t)})),r}convertVectorValue(e){var r,s,i;const t=(i=(s=(r=e.fields)==null?void 0:r[Qr].arrayValue)==null?void 0:s.values)==null?void 0:i.map((o=>me(o.doubleValue)));return new At(t)}convertGeoPoint(e){return new Ut(me(e.latitude),me(e.longitude))}convertArray(e,t){return(e.values||[]).map((r=>this.convertValue(r,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const r=ia(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(li(e));default:return null}}convertTimestamp(e){const t=Xt(e);return new oe(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=ie.fromString(e);W(hm(r),9688,{name:e});const s=new cr(r.get(1),r.get(3)),i=new U(r.popFirst(5));return s.isEqual(t)||He(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bl extends DS{constructor(e){super(),this.firestore=e}convertBytes(e){return new ut(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new be(this.firestore,null,t)}}function jt(){return new Ul("serverTimestamp")}const Ld="@firebase/firestore",Md="4.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fd(n){return(function(t,r){if(typeof t!="object"||t===null)return!1;const s=t;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1})(n,["next","error","complete"])}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ig{constructor(e,t,r,s,i){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new be(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new NS(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return((e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const t=this._document.data.field($l("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class NS extends ig{data(){return super.data()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function og(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new B(D.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}function VS(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}class qs{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class tr extends ig{constructor(e,t,r,s,i,o){super(e,t,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new wo(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field($l("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new B(D.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=tr._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}tr._jsonSchemaVersion="firestore/documentSnapshot/1.0",tr._jsonSchema={type:Se("string",tr._jsonSchemaVersion),bundleSource:Se("string","DocumentSnapshot"),bundleName:Se("string"),bundle:Se("string")};class wo extends tr{data(e={}){return super.data(e)}}class nr{constructor(e,t,r,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new qs(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((r=>{e.call(t,new wo(this._firestore,this._userDataWriter,r.key,r,new qs(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new B(D.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map((c=>{const l=new wo(s._firestore,s._userDataWriter,c.doc.key,c.doc,new qs(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}}))}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter((c=>i||c.type!==3)).map((c=>{const l=new wo(s._firestore,s._userDataWriter,c.doc.key,c.doc,new qs(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let u=-1,d=-1;return c.type!==0&&(u=o.indexOf(c.doc.key),o=o.delete(c.doc.key)),c.type!==1&&(o=o.add(c.doc),d=o.indexOf(c.doc.key)),{type:OS(c.type),doc:l,oldIndex:u,newIndex:d}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new B(D.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=nr._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Xc.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],r=[],s=[];return this.docs.forEach((i=>{i._document!==null&&(t.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function OS(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return G(61501,{type:n})}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */nr._jsonSchemaVersion="firestore/querySnapshot/1.0",nr._jsonSchema={type:Se("string",nr._jsonSchemaVersion),bundleSource:Se("string","QuerySnapshot"),bundleName:Se("string"),bundle:Se("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xi(n){n=ft(n,be);const e=ft(n.firestore,Cn),t=wa(e);return mS(t,n._key).then((r=>cg(e,n,r)))}function LS(n){n=ft(n,Ci);const e=ft(n.firestore,Cn),t=wa(e),r=new Bl(e);return og(n._query),gS(t,n._query).then((s=>new nr(e,r,n,s)))}function Gt(n,e,t){n=ft(n,be);const r=ft(n.firestore,Cn),s=VS(n.converter,e,t),i=RS(r);return ag(r,[PS(i,"setDoc",n._key,s,n.converter!==null,t).toMutation(n._key,Xe.none())])}function MS(n){return ag(ft(n.firestore,Cn),[new ha(n._key,Xe.none())])}function Zi(n,...e){var u,d,p;n=Ae(n);let t={includeMetadataChanges:!1,source:"default"},r=0;typeof e[r]!="object"||Fd(e[r])||(t=e[r++]);const s={includeMetadataChanges:t.includeMetadataChanges,source:t.source};if(Fd(e[r])){const y=e[r];e[r]=(u=y.next)==null?void 0:u.bind(y),e[r+1]=(d=y.error)==null?void 0:d.bind(y),e[r+2]=(p=y.complete)==null?void 0:p.bind(y)}let i,o,c;if(n instanceof be)o=ft(n.firestore,Cn),c=Si(n._key.path),i={next:y=>{e[r]&&e[r](cg(o,n,y))},error:e[r+1],complete:e[r+2]};else{const y=ft(n,Ci);o=ft(y.firestore,Cn),c=y._query;const v=new Bl(o);i={next:k=>{e[r]&&e[r](new nr(o,v,y,k))},error:e[r+1],complete:e[r+2]},og(n._query)}const l=wa(o);return pS(l,c,s,i)}function ag(n,e){const t=wa(n);return yS(t,e)}function cg(n,e,t){const r=t.docs.get(e._key),s=new Bl(n);return new tr(n,s,e._key,r,new qs(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){YT(gr),ir(new Sn("firestore",((r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),c=new Cn(new ZT(r.getProvider("auth-internal")),new nI(o,r.getProvider("app-check-internal")),qI(o,s),o);return i={useFetchStreams:t,...i},c._setSettings(i),c}),"PUBLIC").setMultipleInstances(!0)),Lt(Ld,Md,e),Lt(Ld,Md,"esm2020")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lg="firebasestorage.googleapis.com",ug="storageBucket",FS=120*1e3,US=600*1e3,$S=1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _e extends Bt{constructor(e,t,r=0){super(Xa(e),`Firebase Storage: ${t} (${Xa(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,_e.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Xa(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var pe;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(pe||(pe={}));function Xa(n){return"storage/"+n}function ql(){const n="An unknown error occurred, please check the error payload for server response.";return new _e(pe.UNKNOWN,n)}function BS(n){return new _e(pe.OBJECT_NOT_FOUND,"Object '"+n+"' does not exist.")}function qS(n){return new _e(pe.QUOTA_EXCEEDED,"Quota for bucket '"+n+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function jS(){const n="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new _e(pe.UNAUTHENTICATED,n)}function GS(){return new _e(pe.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function WS(n){return new _e(pe.UNAUTHORIZED,"User does not have permission to access '"+n+"'.")}function hg(){return new _e(pe.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function dg(){return new _e(pe.CANCELED,"User canceled the upload/download.")}function zS(n){return new _e(pe.INVALID_URL,"Invalid URL '"+n+"'.")}function HS(n){return new _e(pe.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function KS(){return new _e(pe.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+ug+"' property when initializing the app?")}function fg(){return new _e(pe.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function QS(){return new _e(pe.SERVER_FILE_WRONG_SIZE,"Server recorded incorrect upload file size, please retry the upload.")}function YS(){return new _e(pe.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function JS(n){return new _e(pe.UNSUPPORTED_ENVIRONMENT,`${n} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Lc(n){return new _e(pe.INVALID_ARGUMENT,n)}function pg(){return new _e(pe.APP_DELETED,"The Firebase app was deleted.")}function XS(n){return new _e(pe.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Xs(n,e){return new _e(pe.INVALID_FORMAT,"String does not match format '"+n+"': "+e)}function Ns(n){throw new _e(pe.INTERNAL_ERROR,"Internal error: "+n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let r;try{r=st.makeFromUrl(e,t)}catch{return new st(e,"")}if(r.path==="")return r;throw HS(e)}static makeFromUrl(e,t){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(L){L.path.charAt(L.path.length-1)==="/"&&(L.path_=L.path_.slice(0,-1))}const o="(/(.*))?$",c=new RegExp("^gs://"+s+o,"i"),l={bucket:1,path:3};function u(L){L.path_=decodeURIComponent(L.path)}const d="v[A-Za-z0-9_]+",p=t.replace(/[.]/g,"\\."),y="(/([^?#]*).*)?$",v=new RegExp(`^https?://${p}/${d}/b/${s}/o${y}`,"i"),k={bucket:1,path:3},P=t===lg?"(?:storage.googleapis.com|storage.cloud.google.com)":t,C="([^?#]*)",V=new RegExp(`^https?://${P}/${s}/${C}`,"i"),x=[{regex:c,indices:l,postModify:i},{regex:v,indices:k,postModify:u},{regex:V,indices:{bucket:1,path:2},postModify:u}];for(let L=0;L<x.length;L++){const q=x[L],j=q.regex.exec(e);if(j){const T=j[q.indices.bucket];let g=j[q.indices.path];g||(g=""),r=new st(T,g),q.postModify(r);break}}if(r==null)throw zS(e);return r}}class ZS{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eb(n,e,t){let r=1,s=null,i=null,o=!1,c=0;function l(){return c===2}let u=!1;function d(...C){u||(u=!0,e.apply(null,C))}function p(C){s=setTimeout(()=>{s=null,n(v,l())},C)}function y(){i&&clearTimeout(i)}function v(C,...V){if(u){y();return}if(C){y(),d.call(null,C,...V);return}if(l()||o){y(),d.call(null,C,...V);return}r<64&&(r*=2);let x;c===1?(c=2,x=0):x=(r+Math.random())*1e3,p(x)}let k=!1;function P(C){k||(k=!0,y(),!u&&(s!==null?(C||(c=2),clearTimeout(s),p(0)):C||(c=1)))}return p(0),i=setTimeout(()=>{o=!0,P(!0)},t),P}function tb(n){n(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nb(n){return n!==void 0}function rb(n){return typeof n=="function"}function sb(n){return typeof n=="object"&&!Array.isArray(n)}function Ta(n){return typeof n=="string"||n instanceof String}function Ud(n){return jl()&&n instanceof Blob}function jl(){return typeof Blob<"u"}function $d(n,e,t,r){if(r<e)throw Lc(`Invalid value for '${n}'. Expected ${e} or greater.`);if(r>t)throw Lc(`Invalid value for '${n}'. Expected ${t} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cs(n,e,t){let r=e;return t==null&&(r=`https://${e}`),`${t}://${r}/v0${n}`}function mg(n){const e=encodeURIComponent;let t="?";for(const r in n)if(n.hasOwnProperty(r)){const s=e(r)+"="+e(n[r]);t=t+s+"&"}return t=t.slice(0,-1),t}var rr;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(rr||(rr={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gg(n,e){const t=n>=500&&n<600,s=[408,429].indexOf(n)!==-1,i=e.indexOf(n)!==-1;return t||s||i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ib{constructor(e,t,r,s,i,o,c,l,u,d,p,y=!0,v=!1){this.url_=e,this.method_=t,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=c,this.errorCallback_=l,this.timeout_=u,this.progressCallback_=d,this.connectionFactory_=p,this.retry=y,this.isUsingEmulator=v,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((k,P)=>{this.resolve_=k,this.reject_=P,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new eo(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=c=>{const l=c.loaded,u=c.lengthComputable?c.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,u)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const c=i.getErrorCode()===rr.NO_ERROR,l=i.getStatus();if(!c||gg(l,this.additionalRetryCodes_)&&this.retry){const d=i.getErrorCode()===rr.ABORT;r(!1,new eo(!1,null,d));return}const u=this.successCodes_.indexOf(l)!==-1;r(!0,new eo(u,i))})},t=(r,s)=>{const i=this.resolve_,o=this.reject_,c=s.connection;if(s.wasSuccessCode)try{const l=this.callback_(c,c.getResponse());nb(l)?i(l):i()}catch(l){o(l)}else if(c!==null){const l=ql();l.serverResponse=c.getErrorText(),this.errorCallback_?o(this.errorCallback_(c,l)):o(l)}else if(s.canceled){const l=this.appDelete_?pg():dg();o(l)}else{const l=hg();o(l)}};this.canceled_?t(!1,new eo(!1,null,!0)):this.backoffId_=eb(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&tb(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class eo{constructor(e,t,r){this.wasSuccessCode=e,this.connection=t,this.canceled=!!r}}function ob(n,e){e!==null&&e.length>0&&(n.Authorization="Firebase "+e)}function ab(n,e){n["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function cb(n,e){e&&(n["X-Firebase-GMPID"]=e)}function lb(n,e){e!==null&&(n["X-Firebase-AppCheck"]=e)}function ub(n,e,t,r,s,i,o=!0,c=!1){const l=mg(n.urlParams),u=n.url+l,d=Object.assign({},n.headers);return cb(d,e),ob(d,t),ab(d,i),lb(d,r),new ib(u,n.method,d,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,s,o,c)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hb(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function db(...n){const e=hb();if(e!==void 0){const t=new e;for(let r=0;r<n.length;r++)t.append(n[r]);return t.getBlob()}else{if(jl())return new Blob(n);throw new _e(pe.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function fb(n,e,t){return n.webkitSlice?n.webkitSlice(e,t):n.mozSlice?n.mozSlice(e,t):n.slice?n.slice(e,t):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pb(n){if(typeof atob>"u")throw JS("base-64");return atob(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ot={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Za{constructor(e,t){this.data=e,this.contentType=t||null}}function mb(n,e){switch(n){case Ot.RAW:return new Za(yg(e));case Ot.BASE64:case Ot.BASE64URL:return new Za(_g(n,e));case Ot.DATA_URL:return new Za(yb(e),_b(e))}throw ql()}function yg(n){const e=[];for(let t=0;t<n.length;t++){let r=n.charCodeAt(t);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(t<n.length-1&&(n.charCodeAt(t+1)&64512)===56320))e.push(239,191,189);else{const i=r,o=n.charCodeAt(++t);r=65536|(i&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function gb(n){let e;try{e=decodeURIComponent(n)}catch{throw Xs(Ot.DATA_URL,"Malformed data URL.")}return yg(e)}function _g(n,e){switch(n){case Ot.BASE64:{const s=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(s||i)throw Xs(n,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case Ot.BASE64URL:{const s=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(s||i)throw Xs(n,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let t;try{t=pb(e)}catch(s){throw s.message.includes("polyfill")?s:Xs(n,"Invalid character found")}const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r}class wg{constructor(e){this.base64=!1,this.contentType=null;const t=e.match(/^data:([^,]+)?,/);if(t===null)throw Xs(Ot.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=t[1]||null;r!=null&&(this.base64=wb(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function yb(n){const e=new wg(n);return e.base64?_g(Ot.BASE64,e.rest):gb(e.rest)}function _b(n){return new wg(n).contentType}function wb(n,e){return n.length>=e.length?n.substring(n.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gn{constructor(e,t){let r=0,s="";Ud(e)?(this.data_=e,r=e.size,s=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,t){if(Ud(this.data_)){const r=this.data_,s=fb(r,e,t);return s===null?null:new gn(s)}else{const r=new Uint8Array(this.data_.buffer,e,t-e);return new gn(r,!0)}}static getBlob(...e){if(jl()){const t=e.map(r=>r instanceof gn?r.data_:r);return new gn(db.apply(null,t))}else{const t=e.map(o=>Ta(o)?mb(Ot.RAW,o).data:o.data_);let r=0;t.forEach(o=>{r+=o.byteLength});const s=new Uint8Array(r);let i=0;return t.forEach(o=>{for(let c=0;c<o.length;c++)s[i++]=o[c]}),new gn(s,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tg(n){let e;try{e=JSON.parse(n)}catch{return null}return sb(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tb(n){if(n.length===0)return null;const e=n.lastIndexOf("/");return e===-1?"":n.slice(0,e)}function Ib(n,e){const t=e.split("/").filter(r=>r.length>0).join("/");return n.length===0?t:n+"/"+t}function Ig(n){const e=n.lastIndexOf("/",n.length-2);return e===-1?n:n.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eb(n,e){return e}class ze{constructor(e,t,r,s){this.server=e,this.local=t||e,this.writable=!!r,this.xform=s||Eb}}let to=null;function vb(n){return!Ta(n)||n.length<2?n:Ig(n)}function Eg(){if(to)return to;const n=[];n.push(new ze("bucket")),n.push(new ze("generation")),n.push(new ze("metageneration")),n.push(new ze("name","fullPath",!0));function e(i,o){return vb(o)}const t=new ze("name");t.xform=e,n.push(t);function r(i,o){return o!==void 0?Number(o):o}const s=new ze("size");return s.xform=r,n.push(s),n.push(new ze("timeCreated")),n.push(new ze("updated")),n.push(new ze("md5Hash",null,!0)),n.push(new ze("cacheControl",null,!0)),n.push(new ze("contentDisposition",null,!0)),n.push(new ze("contentEncoding",null,!0)),n.push(new ze("contentLanguage",null,!0)),n.push(new ze("contentType",null,!0)),n.push(new ze("metadata","customMetadata",!0)),to=n,to}function Sb(n,e){function t(){const r=n.bucket,s=n.fullPath,i=new st(r,s);return e._makeStorageReference(i)}Object.defineProperty(n,"ref",{get:t})}function bb(n,e,t){const r={};r.type="file";const s=t.length;for(let i=0;i<s;i++){const o=t[i];r[o.local]=o.xform(r,e[o.server])}return Sb(r,n),r}function vg(n,e,t){const r=Tg(e);return r===null?null:bb(n,r,t)}function Ab(n,e,t,r){const s=Tg(e);if(s===null||!Ta(s.downloadTokens))return null;const i=s.downloadTokens;if(i.length===0)return null;const o=encodeURIComponent;return i.split(",").map(u=>{const d=n.bucket,p=n.fullPath,y="/b/"+o(d)+"/o/"+o(p),v=cs(y,t,r),k=mg({alt:"media",token:u});return v+k})[0]}function Sg(n,e){const t={},r=e.length;for(let s=0;s<r;s++){const i=e[s];i.writable&&(t[i.server]=n[i.local])}return JSON.stringify(t)}class Tr{constructor(e,t,r,s){this.url=e,this.method=t,this.handler=r,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kt(n){if(!n)throw ql()}function Gl(n,e){function t(r,s){const i=vg(n,s,e);return Kt(i!==null),i}return t}function Rb(n,e){function t(r,s){const i=vg(n,s,e);return Kt(i!==null),Ab(i,s,n.host,n._protocol)}return t}function xi(n){function e(t,r){let s;return t.getStatus()===401?t.getErrorText().includes("Firebase App Check token is invalid")?s=GS():s=jS():t.getStatus()===402?s=qS(n.bucket):t.getStatus()===403?s=WS(n.path):s=r,s.status=t.getStatus(),s.serverResponse=r.serverResponse,s}return e}function Wl(n){const e=xi(n);function t(r,s){let i=e(r,s);return r.getStatus()===404&&(i=BS(n.path)),i.serverResponse=s.serverResponse,i}return t}function Pb(n,e,t){const r=e.fullServerUrl(),s=cs(r,n.host,n._protocol),i="GET",o=n.maxOperationRetryTime,c=new Tr(s,i,Gl(n,t),o);return c.errorHandler=Wl(e),c}function kb(n,e,t){const r=e.fullServerUrl(),s=cs(r,n.host,n._protocol),i="GET",o=n.maxOperationRetryTime,c=new Tr(s,i,Rb(n,t),o);return c.errorHandler=Wl(e),c}function Cb(n,e){const t=e.fullServerUrl(),r=cs(t,n.host,n._protocol),s="DELETE",i=n.maxOperationRetryTime;function o(l,u){}const c=new Tr(r,s,o,i);return c.successCodes=[200,204],c.errorHandler=Wl(e),c}function xb(n,e){return n&&n.contentType||e&&e.type()||"application/octet-stream"}function bg(n,e,t){const r=Object.assign({},t);return r.fullPath=n.path,r.size=e.size(),r.contentType||(r.contentType=xb(null,e)),r}function Db(n,e,t,r,s){const i=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function c(){let x="";for(let L=0;L<2;L++)x=x+Math.random().toString().slice(2);return x}const l=c();o["Content-Type"]="multipart/related; boundary="+l;const u=bg(e,r,s),d=Sg(u,t),p="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+d+`\r
--`+l+`\r
Content-Type: `+u.contentType+`\r
\r
`,y=`\r
--`+l+"--",v=gn.getBlob(p,r,y);if(v===null)throw fg();const k={name:u.fullPath},P=cs(i,n.host,n._protocol),C="POST",V=n.maxUploadRetryTime,O=new Tr(P,C,Gl(n,t),V);return O.urlParams=k,O.headers=o,O.body=v.uploadData(),O.errorHandler=xi(e),O}class zo{constructor(e,t,r,s){this.current=e,this.total=t,this.finalized=!!r,this.metadata=s||null}}function zl(n,e){let t=null;try{t=n.getResponseHeader("X-Goog-Upload-Status")}catch{Kt(!1)}return Kt(!!t&&(e||["active"]).indexOf(t)!==-1),t}function Nb(n,e,t,r,s){const i=e.bucketOnlyServerUrl(),o=bg(e,r,s),c={name:o.fullPath},l=cs(i,n.host,n._protocol),u="POST",d={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${r.size()}`,"X-Goog-Upload-Header-Content-Type":o.contentType,"Content-Type":"application/json; charset=utf-8"},p=Sg(o,t),y=n.maxUploadRetryTime;function v(P){zl(P);let C;try{C=P.getResponseHeader("X-Goog-Upload-URL")}catch{Kt(!1)}return Kt(Ta(C)),C}const k=new Tr(l,u,v,y);return k.urlParams=c,k.headers=d,k.body=p,k.errorHandler=xi(e),k}function Vb(n,e,t,r){const s={"X-Goog-Upload-Command":"query"};function i(u){const d=zl(u,["active","final"]);let p=null;try{p=u.getResponseHeader("X-Goog-Upload-Size-Received")}catch{Kt(!1)}p||Kt(!1);const y=Number(p);return Kt(!isNaN(y)),new zo(y,r.size(),d==="final")}const o="POST",c=n.maxUploadRetryTime,l=new Tr(t,o,i,c);return l.headers=s,l.errorHandler=xi(e),l}const Bd=256*1024;function Ob(n,e,t,r,s,i,o,c){const l=new zo(0,0);if(o?(l.current=o.current,l.total=o.total):(l.current=0,l.total=r.size()),r.size()!==l.total)throw QS();const u=l.total-l.current;let d=u;s>0&&(d=Math.min(d,s));const p=l.current,y=p+d;let v="";d===0?v="finalize":u===d?v="upload, finalize":v="upload";const k={"X-Goog-Upload-Command":v,"X-Goog-Upload-Offset":`${l.current}`},P=r.slice(p,y);if(P===null)throw fg();function C(L,q){const j=zl(L,["active","final"]),T=l.current+d,g=r.size();let _;return j==="final"?_=Gl(e,i)(L,q):_=null,new zo(T,g,j==="final",_)}const V="POST",O=e.maxUploadRetryTime,x=new Tr(t,V,C,O);return x.headers=k,x.body=P.uploadData(),x.progressCallback=c||null,x.errorHandler=xi(n),x}const Ye={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function ec(n){switch(n){case"running":case"pausing":case"canceling":return Ye.RUNNING;case"paused":return Ye.PAUSED;case"success":return Ye.SUCCESS;case"canceled":return Ye.CANCELED;case"error":return Ye.ERROR;default:return Ye.ERROR}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lb{constructor(e,t,r){if(rb(e)||t!=null||r!=null)this.next=e,this.error=t??void 0,this.complete=r??void 0;else{const i=e;this.next=i.next,this.error=i.error,this.complete=i.complete}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dr(n){return(...e)=>{Promise.resolve().then(()=>n(...e))}}class Mb{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=rr.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=rr.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=rr.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,t,r,s,i){if(this.sent_)throw Ns("cannot .send() more than once");if(mr(e)&&r&&(this.xhr_.withCredentials=!0),this.sent_=!0,this.xhr_.open(t,e,!0),i!==void 0)for(const o in i)i.hasOwnProperty(o)&&this.xhr_.setRequestHeader(o,i[o].toString());return s!==void 0?this.xhr_.send(s):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Ns("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Ns("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Ns("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Ns("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class Fb extends Mb{initXhr(){this.xhr_.responseType="text"}}function Qn(){return new Fb}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ub{isExponentialBackoffExpired(){return this.sleepTime>this.maxSleepTime}constructor(e,t,r=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=e,this._blob=t,this._metadata=r,this._mappings=Eg(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=s=>{if(this._request=void 0,this._chunkMultiplier=1,s._codeEquals(pe.CANCELED))this._needToFetchStatus=!0,this.completeTransitions_();else{const i=this.isExponentialBackoffExpired();if(gg(s.status,[]))if(i)s=hg();else{this.sleepTime=Math.max(this.sleepTime*2,$S),this._needToFetchStatus=!0,this.completeTransitions_();return}this._error=s,this._transition("error")}},this._metadataErrorHandler=s=>{this._request=void 0,s._codeEquals(pe.CANCELED)?this.completeTransitions_():(this._error=s,this._transition("error"))},this.sleepTime=0,this.maxSleepTime=this._ref.storage.maxUploadRetryTime,this._promise=new Promise((s,i)=>{this._resolve=s,this._reject=i,this._start()}),this._promise.then(null,()=>{})}_makeProgressCallback(){const e=this._transferred;return t=>this._updateProgress(e+t)}_shouldDoResumable(e){return e.size()>256*1024}_start(){this._state==="running"&&this._request===void 0&&(this._resumable?this._uploadUrl===void 0?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this.pendingTimeout=setTimeout(()=>{this.pendingTimeout=void 0,this._continueUpload()},this.sleepTime):this._oneShotUpload())}_resolveToken(e){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then(([t,r])=>{switch(this._state){case"running":e(t,r);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused");break}})}_createResumable(){this._resolveToken((e,t)=>{const r=Nb(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),s=this._ref.storage._makeRequest(r,Qn,e,t);this._request=s,s.getPromise().then(i=>{this._request=void 0,this._uploadUrl=i,this._needToFetchStatus=!1,this.completeTransitions_()},this._errorHandler)})}_fetchStatus(){const e=this._uploadUrl;this._resolveToken((t,r)=>{const s=Vb(this._ref.storage,this._ref._location,e,this._blob),i=this._ref.storage._makeRequest(s,Qn,t,r);this._request=i,i.getPromise().then(o=>{o=o,this._request=void 0,this._updateProgress(o.current),this._needToFetchStatus=!1,o.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()},this._errorHandler)})}_continueUpload(){const e=Bd*this._chunkMultiplier,t=new zo(this._transferred,this._blob.size()),r=this._uploadUrl;this._resolveToken((s,i)=>{let o;try{o=Ob(this._ref._location,this._ref.storage,r,this._blob,e,this._mappings,t,this._makeProgressCallback())}catch(l){this._error=l,this._transition("error");return}const c=this._ref.storage._makeRequest(o,Qn,s,i,!1);this._request=c,c.getPromise().then(l=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(l.current),l.finalized?(this._metadata=l.metadata,this._transition("success")):this.completeTransitions_()},this._errorHandler)})}_increaseMultiplier(){Bd*this._chunkMultiplier*2<32*1024*1024&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken((e,t)=>{const r=Pb(this._ref.storage,this._ref._location,this._mappings),s=this._ref.storage._makeRequest(r,Qn,e,t);this._request=s,s.getPromise().then(i=>{this._request=void 0,this._metadata=i,this._transition("success")},this._metadataErrorHandler)})}_oneShotUpload(){this._resolveToken((e,t)=>{const r=Db(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),s=this._ref.storage._makeRequest(r,Qn,e,t);this._request=s,s.getPromise().then(i=>{this._request=void 0,this._metadata=i,this._updateProgress(this._blob.size()),this._transition("success")},this._errorHandler)})}_updateProgress(e){const t=this._transferred;this._transferred=e,this._transferred!==t&&this._notifyObservers()}_transition(e){if(this._state!==e)switch(e){case"canceling":case"pausing":this._state=e,this._request!==void 0?this._request.cancel():this.pendingTimeout&&(clearTimeout(this.pendingTimeout),this.pendingTimeout=void 0,this.completeTransitions_());break;case"running":const t=this._state==="paused";this._state=e,t&&(this._notifyObservers(),this._start());break;case"paused":this._state=e,this._notifyObservers();break;case"canceled":this._error=dg(),this._state=e,this._notifyObservers();break;case"error":this._state=e,this._notifyObservers();break;case"success":this._state=e,this._notifyObservers();break}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start();break}}get snapshot(){const e=ec(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:e,metadata:this._metadata,task:this,ref:this._ref}}on(e,t,r,s){const i=new Lb(t||void 0,r||void 0,s||void 0);return this._addObserver(i),()=>{this._removeObserver(i)}}then(e,t){return this._promise.then(e,t)}catch(e){return this.then(null,e)}_addObserver(e){this._observers.push(e),this._notifyObserver(e)}_removeObserver(e){const t=this._observers.indexOf(e);t!==-1&&this._observers.splice(t,1)}_notifyObservers(){this._finishPromise(),this._observers.slice().forEach(t=>{this._notifyObserver(t)})}_finishPromise(){if(this._resolve!==void 0){let e=!0;switch(ec(this._state)){case Ye.SUCCESS:Dr(this._resolve.bind(null,this.snapshot))();break;case Ye.CANCELED:case Ye.ERROR:const t=this._reject;Dr(t.bind(null,this._error))();break;default:e=!1;break}e&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(e){switch(ec(this._state)){case Ye.RUNNING:case Ye.PAUSED:e.next&&Dr(e.next.bind(e,this.snapshot))();break;case Ye.SUCCESS:e.complete&&Dr(e.complete.bind(e))();break;case Ye.CANCELED:case Ye.ERROR:e.error&&Dr(e.error.bind(e,this._error))();break;default:e.error&&Dr(e.error.bind(e,this._error))()}}resume(){const e=this._state==="paused"||this._state==="pausing";return e&&this._transition("running"),e}pause(){const e=this._state==="running";return e&&this._transition("pausing"),e}cancel(){const e=this._state==="running"||this._state==="pausing";return e&&this._transition("canceling"),e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pr{constructor(e,t){this._service=e,t instanceof st?this._location=t:this._location=st.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new pr(e,t)}get root(){const e=new st(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Ig(this._location.path)}get storage(){return this._service}get parent(){const e=Tb(this._location.path);if(e===null)return null;const t=new st(this._location.bucket,e);return new pr(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw XS(e)}}function $b(n,e,t){return n._throwIfRoot("uploadBytesResumable"),new Ub(n,new gn(e),t)}function Bb(n){n._throwIfRoot("getDownloadURL");const e=kb(n.storage,n._location,Eg());return n.storage.makeRequestWithTokens(e,Qn).then(t=>{if(t===null)throw YS();return t})}function qb(n){n._throwIfRoot("deleteObject");const e=Cb(n.storage,n._location);return n.storage.makeRequestWithTokens(e,Qn)}function jb(n,e){const t=Ib(n._location.path,e),r=new st(n._location.bucket,t);return new pr(n.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gb(n){return/^[A-Za-z]+:\/\//.test(n)}function Wb(n,e){return new pr(n,e)}function Ag(n,e){if(n instanceof Hl){const t=n;if(t._bucket==null)throw KS();const r=new pr(t,t._bucket);return e!=null?Ag(r,e):r}else return e!==void 0?jb(n,e):n}function zb(n,e){if(e&&Gb(e)){if(n instanceof Hl)return Wb(n,e);throw Lc("To use ref(service, url), the first argument must be a Storage instance.")}else return Ag(n,e)}function qd(n,e){const t=e==null?void 0:e[ug];return t==null?null:st.makeFromBucketSpec(t,n)}function Hb(n,e,t,r={}){n.host=`${e}:${t}`;const s=mr(e);s&&Fc(`https://${n.host}/b`),n._isUsingEmulator=!0,n._protocol=s?"https":"http";const{mockUserToken:i}=r;i&&(n._overrideAuthToken=typeof i=="string"?i:nf(i,n.app.options.projectId))}class Hl{constructor(e,t,r,s,i,o=!1){this.app=e,this._authProvider=t,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._isUsingEmulator=o,this._bucket=null,this._host=lg,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=FS,this._maxUploadRetryTime=US,this._requests=new Set,s!=null?this._bucket=st.makeFromBucketSpec(s,this._host):this._bucket=qd(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=st.makeFromBucketSpec(this._url,e):this._bucket=qd(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){$d("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){$d("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){if(Be(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new pr(this,e)}_makeRequest(e,t,r,s,i=!0){if(this._deleted)return new ZS(pg());{const o=ub(e,this._appId,r,s,t,this._firebaseVersion,i,this._isUsingEmulator);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,t){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,r,s).getPromise()}}const jd="@firebase/storage",Gd="0.14.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rg="storage";function Kb(n,e,t){return n=Ae(n),$b(n,e,t)}function Qb(n){return n=Ae(n),Bb(n)}function Yb(n){return n=Ae(n),qb(n)}function Wd(n,e){return n=Ae(n),zb(n,e)}function Jb(n=Qo(),e){n=Ae(n);const r=Ko(n,Rg).getImmediate({identifier:e}),s=Zd("storage");return s&&Xb(r,...s),r}function Xb(n,e,t,r={}){Hb(n,e,t,r)}function Zb(n,{instanceIdentifier:e}){const t=n.getProvider("app").getImmediate(),r=n.getProvider("auth-internal"),s=n.getProvider("app-check-internal");return new Hl(t,r,s,e,gr)}function eA(){ir(new Sn(Rg,Zb,"PUBLIC").setMultipleInstances(!0)),Lt(jd,Gd,""),Lt(jd,Gd,"esm2020")}eA();const tA={apiKey:"AIzaSyAn9rHtNupm6t8q7VfkaLL7ejie732S8lc",authDomain:"gen-lang-client-0940321923.firebaseapp.com",projectId:"gen-lang-client-0940321923",storageBucket:"gen-lang-client-0940321923.firebasestorage.app",messagingSenderId:"259751023246",appId:"1:259751023246:web:1bde2eb99b7bf211b1efdf"};let Bn,De,Vs,no,Os=null;const de={isInitialized:!1,init(n=tA){if(this.isInitialized)return{app:Bn,auth:De,db:Vs,storage:no};let e=n;try{const t=localStorage.getItem("quantedge_firebase_config");if(t){const r=JSON.parse(t);r&&typeof r=="object"&&!Array.isArray(r)&&typeof r.apiKey=="string"&&r.apiKey.trim().length>0&&typeof r.projectId=="string"&&r.projectId.trim().length>0&&(e={apiKey:r.apiKey.trim(),authDomain:typeof r.authDomain=="string"?r.authDomain.trim():"",projectId:r.projectId.trim(),storageBucket:typeof r.storageBucket=="string"?r.storageBucket.trim():"",messagingSenderId:typeof r.messagingSenderId=="string"?r.messagingSenderId.trim():"",appId:typeof r.appId=="string"?r.appId.trim():""})}}catch{console.warn("Failed to parse saved firebase config.")}return I_().length?Bn=Qo():Bn=uf(e),De=KT(Bn),uT(De).then(t=>{if(t){const r=Et.credentialFromResult(t);r&&r.accessToken&&(Os=r.accessToken,setTimeout(()=>{window.updateGDriveStatusIndicator&&(window.updateGDriveStatusIndicator(),window.handleGDriveSync&&window.handleGDriveSync())},1e3))}}).catch(t=>{console.error("Redirect login error:",t)}),Vs=IS(Bn),no=Jb(Bn),ES(Vs).catch(t=>{t.code=="failed-precondition"?console.warn("Firebase persistence failed: Multiple tabs open."):t.code=="unimplemented"&&console.warn("Firebase persistence failed: Browser doesn't support it.")}),this.isInitialized=!0,{app:Bn,auth:De,db:Vs,storage:no}},getAuth(){if(!this.isInitialized)throw new Error("Firebase not initialized");return De},getDb(){if(!this.isInitialized)throw new Error("Firebase not initialized");return Vs},getStorage(){if(!this.isInitialized)throw new Error("Firebase not initialized");return no},async login(n,e){if(!De)throw new Error("Firebase not initialized");return Dw(De,n,e)},async signup(n,e){if(!De)throw new Error("Firebase not initialized");return xw(De,n,e)},async loginAnonymously(){if(!De)throw new Error("Firebase not initialized");return Rw(De)},async loginWithGoogle(){if(!De)throw new Error("Firebase not initialized");const n=new Et;n.addScope("https://www.googleapis.com/auth/drive.file"),n.setCustomParameters({prompt:"consent"});try{const e=await nT(De,n),t=Et.credentialFromResult(e);return t&&t.accessToken&&(Os=t.accessToken),{user:e.user,accessToken:Os}}catch(e){if(console.error("Google Auth failed:",e),e.code==="auth/popup-blocked"||e.code==="auth/unauthorized-domain"){if(window.confirm("Popup login was blocked. Do you want to redirect to the login page?"))return await cT(De,n),null;throw new Error("Google login blocked. If on GitHub Pages, add your custom Firebase Config in Settings with Authorized Domains.")}throw e}},getWorkspaceAccessToken(){return Os},async logout(){if(!De)throw new Error("Firebase not initialized");return Os=null,Lw(De)},onAuthStateChanged(n){return De?Ow(De,n):()=>{}}},Dt={isSyncing:!1,unsubscribeTrades:null,unsubscribeStats:null,unsubscribeSettings:null,async init(){try{de.init(),this.updateStatusUI("Connected","var(--success)");const n=document.getElementById("auth-section");n&&(n.style.display="block"),de.onAuthStateChanged(async e=>{if(e){this.updateAuthUI(e),this.updateStatusUI("Syncing...","var(--warning)");const t=document.getElementById("sync-loading-overlay"),r=document.getElementById("sync-loading-text");try{const s=de.getDb(),i=Ve(s,`users/${e.uid}/meta/syncInfo`),o=await Xi(i);o.exists()&&o.data().lastPushed&&(t&&(t.style.display="flex",r&&(r.innerText="Syncing your data...")),await this.hydrateAppFromFirestore(e.uid)),this.updateStatusUI("Synced ✓","var(--success)")}catch(s){(s.message||String(s)).includes("client is offline")?(console.warn("Client is offline, starting in offline mode."),this.updateStatusUI("Offline Mode","var(--warning)")):(console.error("Hydration failed:",s),this.updateStatusUI("Sync Error","var(--danger)"))}finally{t&&(t.style.display="none"),this.startSync(e.uid)}}else this.updateAuthUI(null),this.stopSync("Connected (Please Login)","var(--warning)")})}catch(n){console.error("Failed to init Firebase",n),this.updateStatusUI("Failed to connect","var(--danger)")}},updateStatusUI(n,e){const t=document.getElementById("firebase-status-text"),r=document.getElementById("firebase-status-indicator");t&&(t.innerText=n),r&&(r.style.background=e);const s=document.getElementById("sidebar-firebase-text"),i=document.getElementById("sidebar-firebase-indicator");s&&(s.innerText=n),i&&(i.style.background=e)},updateAuthUI(n){const e=document.getElementById("auth-logged-out"),t=document.getElementById("auth-logged-in"),r=document.getElementById("auth-user-email");n?(e&&(e.style.display="none"),t&&(t.style.display="block"),r&&(r.innerText=n.isAnonymous?"Anonymous User":n.email)):(e&&(e.style.display="block"),t&&(t.style.display="none"))},async hydrateAppFromFirestore(n){const e=de.getDb();try{const t=Dd(e,`users/${n}/trades`),r=await LS(t);if(!r.empty){const s=[];r.forEach(i=>{s.push({...i.data(),id:parseInt(i.id)})}),localStorage.setItem("qe_trades",JSON.stringify(s))}}catch(t){console.warn("Failed to hydrate trades:",t)}try{const t=Ve(e,`users/${n}/stats/core`),r=await Xi(t);if(r.exists()){const s=r.data(),i={transactions:"qe_transactions",allocations:"qe_allocations",wishlist:"qe_wishlist",investments:"qe_investments",payouts:"qe_payouts",milestones:"qe_milestones",activeTrades:"qe_active_trades",plannedTrades:"qe_planned_trades",backtests:"qe_backtests",planner:"qe_planner",snapshots:"qe_snapshots",scalingMilestones:"qe_scaling_milestones",expenses:"qe_expenses",budgets:"qe_budgets",stocks:"qe_stocks",dividends:"qe_dividends",locks:"qe_locks",journalConfig:"qe_journal_config",debriefs:"qe_debriefs",dailyGoals:"qe_daily_goals",weeklyGoals:"qe_weekly_goals",weeklyReviews:"qe_weekly_reviews"};for(const[o,c]of Object.entries(i))s[o]!==void 0&&localStorage.setItem(c,JSON.stringify(s[o]))}}catch(t){console.warn("Failed to hydrate core stats:",t)}try{const t=Ve(e,`users/${n}/stats/accounts`),r=await Xi(t);if(r.exists()){const s=r.data();s.data&&localStorage.setItem("qe_accounts",JSON.stringify(s.data))}}catch(t){console.warn("Failed to hydrate accounts:",t)}try{const t=Ve(e,`users/${n}/settings/main`),r=await Xi(t);r.exists()&&localStorage.setItem("qe_settings",JSON.stringify(r.data()))}catch(t){console.warn("Failed to hydrate settings:",t)}try{const t=Ve(e,`users/${n}/meta/syncInfo`);await Gt(t,{lastPulled:jt()},{merge:!0})}catch(t){console.warn("Failed to update sync meta:",t)}window.reloadAppState&&window.reloadAppState()},async forcePullFromCloud(){const e=de.getAuth().currentUser;if(!e)return alert("Not connected to Firebase.");if(!confirm("This will overwrite your local data with cloud data. Continue?"))return;const t=document.getElementById("sync-loading-overlay"),r=document.getElementById("sync-loading-text");try{this.updateStatusUI("Pulling from cloud...","var(--warning)"),t&&(t.style.display="flex",r&&(r.innerText="Pulling data from cloud...")),await this.hydrateAppFromFirestore(e.uid),this.updateStatusUI("Synced ✓","var(--success)"),alert("Cloud data loaded successfully")}catch(s){(s.message||String(s)).includes("client is offline")?(console.warn("Pull data offline:",s),alert("Cannot pull data while offline.")):(console.error("Failed to pull data",s),alert("Failed to pull data: "+s.message)),this.updateStatusUI("Sync Failed","var(--danger)")}finally{t&&(t.style.display="none")}},async startSync(n){if(this.isSyncing)return;this.isSyncing=!0,this.updateStatusUI("Syncing...","var(--warning)");const e=de.getDb(),t=Dd(e,`users/${n}/trades`);this.unsubscribeTrades=Zi(t,o=>{let c=JSON.parse(localStorage.getItem("qe_trades")||"[]"),l=!1;o.docChanges().forEach(u=>{var y;const d=u.doc.data(),p=parseInt(u.doc.id);if(u.type==="added"||u.type==="modified"){const v=c.findIndex(k=>k.id===p);if(v>-1){const k=c[v].updatedAt||0;((y=d.updatedAt)!=null&&y.toMillis?d.updatedAt.toMillis():0)>=k&&(c[v]={...d,id:p},l=!0)}else c.push({...d,id:p}),l=!0}else u.type==="removed"&&(c=c.filter(v=>v.id!==p),l=!0)}),l&&(localStorage.setItem("qe_trades",JSON.stringify(c)),window.Store&&(window.Store.trades=c,window.renderAll&&window.renderAll())),this.updateStatusUI("Synced","var(--success)")},o=>{(o.message||String(o)).includes("client is offline")?console.warn("Trades sync offline:",o):(console.error("Trades sync error:",o),this.stopSync("Sync Error: Permissions/Rules","var(--danger)"))});const r=Ve(e,`users/${n}/stats/core`);this.unsubscribeStats=Zi(r,o=>{if(o.exists()){const c=o.data();window.Store&&(c.transactions&&(window.Store.transactions=c.transactions),c.allocations&&(window.Store.allocations=c.allocations),c.wishlist&&(window.Store.wishlist=c.wishlist),c.investments&&(window.Store.investments=c.investments),c.payouts&&(window.Store.payouts=c.payouts),c.milestones&&(window.Store.milestones=c.milestones),c.activeTrades&&(window.Store.activeTrades=c.activeTrades),c.plannedTrades&&(window.Store.plannedTrades=c.plannedTrades),c.backtests&&(window.Store.backtests=c.backtests),c.planner&&(window.Store.planner=c.planner),c.snapshots&&(window.Store.snapshots=c.snapshots),c.scalingMilestones&&(window.Store.scalingMilestones=c.scalingMilestones),c.expenses&&(window.Store.expenses=c.expenses),c.budgets&&(window.Store.budgets=c.budgets),c.stocks&&(window.Store.stocks=c.stocks),c.dividends&&(window.Store.dividends=c.dividends),c.locks&&(window.Store.locks=c.locks),c.journalConfig&&(window.Store.journalConfig={pairs:c.journalConfig.pairs||window.Store.journalConfig.pairs||["EURUSD","GBPUSD"],setups:c.journalConfig.setups||window.Store.journalConfig.setups||["OB","FVG"],confluences:c.journalConfig.confluences||window.Store.journalConfig.confluences||["HTF zone"]}),c.debriefs&&(window.Store.debriefs=c.debriefs),c.dailyGoals&&(window.Store.dailyGoals=c.dailyGoals),c.weeklyGoals&&(window.Store.weeklyGoals=c.weeklyGoals),c.weeklyReviews&&(window.Store.weeklyReviews=c.weeklyReviews),localStorage.setItem("qe_transactions",JSON.stringify(window.Store.transactions)),localStorage.setItem("qe_allocations",JSON.stringify(window.Store.allocations)),localStorage.setItem("qe_wishlist",JSON.stringify(window.Store.wishlist)),localStorage.setItem("qe_investments",JSON.stringify(window.Store.investments)),localStorage.setItem("qe_payouts",JSON.stringify(window.Store.payouts)),localStorage.setItem("qe_milestones",JSON.stringify(window.Store.milestones)),localStorage.setItem("qe_active_trades",JSON.stringify(window.Store.activeTrades)),localStorage.setItem("qe_planned_trades",JSON.stringify(window.Store.plannedTrades)),localStorage.setItem("qe_backtests",JSON.stringify(window.Store.backtests)),localStorage.setItem("qe_planner",JSON.stringify(window.Store.planner)),localStorage.setItem("qe_snapshots",JSON.stringify(window.Store.snapshots)),localStorage.setItem("qe_scaling_milestones",JSON.stringify(window.Store.scalingMilestones)),localStorage.setItem("qe_expenses",JSON.stringify(window.Store.expenses)),localStorage.setItem("qe_budgets",JSON.stringify(window.Store.budgets)),localStorage.setItem("qe_stocks",JSON.stringify(window.Store.stocks)),localStorage.setItem("qe_dividends",JSON.stringify(window.Store.dividends)),localStorage.setItem("qe_locks",JSON.stringify(window.Store.locks)),localStorage.setItem("qe_journal_config",JSON.stringify(window.Store.journalConfig)),localStorage.setItem("qe_debriefs",JSON.stringify(window.Store.debriefs)),localStorage.setItem("qe_daily_goals",JSON.stringify(window.Store.dailyGoals)),localStorage.setItem("qe_weekly_goals",JSON.stringify(window.Store.weeklyGoals)),localStorage.setItem("qe_weekly_reviews",JSON.stringify(window.Store.weeklyReviews)),window.renderAll&&window.renderAll())}},o=>{(o.message||String(o)).includes("client is offline")?console.warn("Core stats sync offline:",o):(console.error("Core stats sync error:",o),this.stopSync("Sync Error: Permissions/Rules","var(--danger)"))});const s=Ve(e,`users/${n}/stats/accounts`);Zi(s,o=>{if(o.exists()){const c=o.data();window.Store&&c.data&&(window.Store.accounts=c.data,localStorage.setItem("qe_accounts",JSON.stringify(window.Store.accounts)),window.renderAll&&window.renderAll())}},o=>{(o.message||String(o)).includes("client is offline")?console.warn("Accounts sync offline:",o):console.error("Accounts sync error:",o)});const i=Ve(e,`users/${n}/settings/main`);this.unsubscribeSettings=Zi(i,o=>{if(o.exists()){const c=o.data();window.Store&&(window.Store.settings={...window.Store.settings,...c},localStorage.setItem("qe_settings",JSON.stringify(window.Store.settings)),window.renderAll&&window.renderAll())}},o=>{(o.message||String(o)).includes("client is offline")?console.warn("Settings sync offline:",o):(console.error("Settings sync error:",o),this.stopSync("Sync Error: Permissions/Rules","var(--danger)"))})},stopSync(n="Offline",e="var(--danger)"){this.isSyncing=!1,this.unsubscribeTrades&&(this.unsubscribeTrades(),this.unsubscribeTrades=null),this.unsubscribeStats&&(this.unsubscribeStats(),this.unsubscribeStats=null),this.unsubscribeSettings&&(this.unsubscribeSettings(),this.unsubscribeSettings=null),this.updateStatusUI(n,e)},async updateSyncMeta(){if(this.isSyncing)try{const n=de.getDb(),e=de.getAuth();if(!e.currentUser)return;const t=e.currentUser.uid,r=Ve(n,`users/${t}/meta/syncInfo`);await Gt(r,{lastPushed:jt()},{merge:!0})}catch{}},async syncTrade(n,e=!1){if(this.isSyncing)try{const t=de.getDb(),r=de.getAuth();if(!r.currentUser)return;const s=r.currentUser.uid,i=Ve(t,`users/${s}/trades/${n.id}`);if(await Gt(i,{...n,updatedAt:jt()},{merge:!0}),!e){const o=Ve(t,`users/${s}/meta/syncInfo`);await Gt(o,{lastPushed:jt()},{merge:!0})}}catch(t){(t.message||String(t)).includes("client is offline")?console.warn("Sync trade offline:",t):console.error("Failed to sync trade",t)}},async syncAll(n){if(this.isSyncing)try{const e=de.getDb(),t=de.getAuth();if(!t.currentUser)return;const r=t.currentUser.uid;n.settings&&await Gt(Ve(e,`users/${r}/settings/main`),{...n.settings,updatedAt:jt()},{merge:!0}),n.accounts&&await Gt(Ve(e,`users/${r}/stats/accounts`),{data:n.accounts,updatedAt:jt()},{merge:!0});const s={transactions:n.transactions||[],allocations:n.allocations||[],wishlist:n.wishlist||[],investments:n.investments||[],payouts:n.payouts||[],milestones:n.milestones||[],activeTrades:n.activeTrades||[],plannedTrades:n.plannedTrades||[],backtests:n.backtests||[],planner:n.planner||{},snapshots:n.snapshots||{},scalingMilestones:n.scalingMilestones||[],expenses:n.expenses||[],budgets:n.budgets||[],stocks:n.stocks||[],dividends:n.dividends||[],locks:n.locks||[],journalConfig:n.journalConfig||{},debriefs:n.debriefs||[],dailyGoals:n.dailyGoals||[],weeklyGoals:n.weeklyGoals||[],weeklyReviews:n.weeklyReviews||[]};await Gt(Ve(e,`users/${r}/stats/core`),{...s,updatedAt:jt()},{merge:!0});const i=Ve(e,`users/${r}/meta/syncInfo`);await Gt(i,{lastPushed:jt()},{merge:!0})}catch(e){(e.message||String(e)).includes("client is offline")?console.warn("Sync all data offline:",e):console.error("Failed to sync all data",e)}},async deleteTrade(n,e){if(this.isSyncing)try{const t=de.getDb(),r=de.getAuth();if(!r.currentUser)return;const s=Ve(t,`users/${r.currentUser.uid}/trades/${n}`);if(await MS(s),e){let i=[];Array.isArray(e)?i=e:typeof e=="string"&&(i=e.split(" | ").map(o=>o.trim()).filter(o=>o));for(const o of i)if(o.includes("firebasestorage")){const c=de.getStorage(),l=Wd(c,o);await Yb(l).catch(u=>console.warn("Screenshot delete failed",u))}}}catch(t){(t.message||String(t)).includes("client is offline")?console.warn("Delete trade offline:",t):console.error("Failed to delete trade",t)}},async uploadScreenshot(n,e){const t=de.getAuth();if(!t.currentUser)throw new Error("Not authenticated");if(!n||typeof n.name!="string")throw new Error("Invalid file");const r=10*1024*1024,s=new Set(["image/png","image/jpeg","image/webp","image/gif"]),i=new Set(["png","jpg","jpeg","webp","gif"]);if(typeof n.size=="number"&&n.size>r)throw new Error("Screenshot exceeds 10MB size limit.");if(n.type&&!s.has(n.type.toLowerCase()))throw new Error("Unsupported screenshot file type. Use PNG, JPEG, WEBP, or GIF.");const o=(n.name.split(".").pop()||"").toLowerCase().replace(/[^a-z0-9]/g,""),c=i.has(o)?o:"png",l=de.getStorage(),u=t.currentUser.uid,d=`screenshot_${Date.now()}.${c}`,p=Wd(l,`users/${u}/screenshots/${d}`),y=Kb(p,n);return new Promise((v,k)=>{y.on("state_changed",P=>{const C=P.bytesTransferred/P.totalBytes*100;e&&e(C)},P=>{(P.message||String(P)).includes("client is offline")?console.warn("Upload offline:",P):console.error("Upload failed:",P),k(P)},async()=>{const P=await Qb(y.snapshot.ref);v(P)})})}};window.SyncEngine=Dt;window.saveFirebaseConfig=function(){const n={apiKey:document.getElementById("fb-apiKey").value,authDomain:document.getElementById("fb-authDomain").value,projectId:document.getElementById("fb-projectId").value,storageBucket:document.getElementById("fb-storageBucket").value,messagingSenderId:document.getElementById("fb-messagingSenderId").value,appId:document.getElementById("fb-appId").value};if(!n.apiKey||!n.projectId){alert("API Key and Project ID are required.");return}localStorage.setItem("quantedge_firebase_config",JSON.stringify(n)),alert("Firebase Config saved! Reloading application..."),window.location.reload()};window.clearFirebaseConfig=function(){localStorage.removeItem("quantedge_firebase_config"),alert("Custom Firebase Config cleared! Reloading application..."),window.location.reload()};window.handleLogin=async function(){const n=document.getElementById("auth-email").value,e=document.getElementById("auth-password").value;if(!n||!e)return alert("Email and password required");try{await de.login(n,e)}catch(t){alert("Login failed: "+t.message)}};window.handleSignup=async function(){const n=document.getElementById("auth-email").value,e=document.getElementById("auth-password").value;if(!n||!e)return alert("Email and password required");try{await de.signup(n,e)}catch(t){alert("Signup failed: "+t.message)}};window.handleAnonLogin=async function(){try{await de.loginAnonymously()}catch(n){alert("Anon login failed: "+n.message)}};window.handleLogout=async function(){try{await de.logout()}catch(n){alert("Logout failed: "+n.message)}};window.forcePullFromCloud=async function(){if(!Dt)return alert("SyncEngine not initialized.");await Dt.forcePullFromCloud()};window.forceSyncLocalToCloud=async function(){if(!Dt.isSyncing)return alert("Not connected to Firebase.");if(!confirm("This will overwrite your cloud data with your current local data. Are you sure?"))return;const n=document.getElementById("sync-loading-overlay"),e=document.getElementById("sync-loading-text");try{if(Dt.updateStatusUI("Pushing data...","var(--warning)"),n&&(n.style.display="flex",e&&(e.innerText="Pushing data to cloud...")),await Dt.syncAll(window.Store),window.Store.trades&&window.Store.trades.length>0){const t=window.Store.trades.map(i=>Dt.syncTrade(i,!0));await Promise.allSettled(t);const r=de.getDb(),s=de.getAuth();if(s.currentUser){const i=Ve(r,`users/${s.currentUser.uid}/meta/syncInfo`);await Gt(i,{lastPushed:jt()},{merge:!0})}}alert("Local data successfully pushed to cloud!"),Dt.updateStatusUI("Synced","var(--success)")}catch(t){(t.message||String(t)).includes("client is offline")?(console.warn("Push data offline:",t),alert("Cannot push data while offline.")):(console.error("Failed to push data",t),alert("Failed to push data: "+t.message)),Dt.updateStatusUI("Sync Failed","var(--danger)")}finally{n&&(n.style.display="none")}};document.addEventListener("DOMContentLoaded",()=>{window.FirebaseService=de,Dt.init()});const it={getAccessToken(){return de.getWorkspaceAccessToken()},async login(){try{const n=await de.loginWithGoogle();if(n===null)return!1;if(n&&n.accessToken)return!0;throw new Error("Google Drive permission was not granted. Please ensure you check the box to allow Google Drive access during sign-in.")}catch(n){throw console.error("GDrive Login failed:",n),n}},async findSyncFile(){const n=this.getAccessToken();if(!n)throw new Error("No Drive access token. Please login with Google.");const t=await(await fetch('https://www.googleapis.com/drive/v3/files?q=name="quantedge_sync.json" and trashed=false&fields=files(id,name,modifiedTime)',{headers:{Authorization:`Bearer ${n}`}})).json();if(t.error){let r=t.error.message;throw t.error.code===403&&(r+=" (If you are using a custom Firebase Config, please ensure the 'Google Drive API' is ENABLED in your Google Cloud Console project)."),new Error(r)}return t.files&&t.files.length>0?t.files[0]:null},async exportData(n){const e=this.getAccessToken();if(!e)throw new Error("No Drive access token. Please login with Google.");const t=JSON.stringify(n,null,2),r={name:"quantedge_sync.json",mimeType:"application/json"},s=await this.findSyncFile();let i;if(s&&s.id)i=s.id;else{const c=await fetch("https://www.googleapis.com/drive/v3/files",{method:"POST",headers:{Authorization:`Bearer ${e}`,"Content-Type":"application/json"},body:JSON.stringify(r)});if(!c.ok)throw new Error(`Failed to create file: ${c.statusText}`);i=(await c.json()).id}const o=await fetch(`https://www.googleapis.com/upload/drive/v3/files/${i}?uploadType=media`,{method:"PATCH",headers:{Authorization:`Bearer ${e}`,"Content-Type":"application/json"},body:t});if(!o.ok){const c=await o.text();throw new Error(`Upload failed: ${o.statusText} - ${c}`)}return await o.json()},async importData(){const n=this.getAccessToken();if(!n)throw new Error("No Drive access token. Please login with Google.");const e=await this.findSyncFile();if(!e)throw new Error("No quantedge_sync.json file found in Google Drive.");const t=await fetch(`https://www.googleapis.com/drive/v3/files/${e.id}?alt=media`,{headers:{Authorization:`Bearer ${n}`}});if(!t.ok)throw new Error("Failed to download file from Drive.");return await t.json()},async deleteData(){const n=this.getAccessToken();if(!n)throw new Error("No Drive access token. Please login with Google.");const e=await this.findSyncFile();if(!e){alert("No sync file found in Google Drive.");return}if(!window.confirm("Are you sure you want to delete the QuantEdge sync file from Google Drive? This action cannot be undone."))return;const r=await fetch(`https://www.googleapis.com/drive/v3/files/${e.id}`,{method:"DELETE",headers:{Authorization:`Bearer ${n}`}});if(!r.ok)throw new Error(`Failed to delete file from Drive. ${r.statusText}`);alert("Sync file deleted from Google Drive."),window.updateGDriveStatusIndicator()}};window.GDriveSync=it;window.updateGDriveStatusIndicator=async function(){const n=document.querySelector("#sidebar-gdrive-status i"),e=document.getElementById("sidebar-gdrive-text");if(!(!e||!n)){if(!it.getAccessToken()){n.style.color="var(--muted)",e.style.color="var(--muted)",e.innerText="Drive: Not Connected";return}e.innerText="Drive: Checking...",n.style.color="var(--warning)",e.style.color="var(--warning)";try{const t=await it.findSyncFile();if(t&&t.modifiedTime){const r=new Date(t.modifiedTime);n.style.color="var(--success)",e.style.color="var(--success)",e.innerText=`Drive: Synced at ${r.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}`}else n.style.color="var(--muted)",e.style.color="var(--muted)",e.innerText="Drive: No Sync File"}catch{n.style.color="var(--danger)",e.style.color="var(--danger)",e.innerText="Drive: Error"}}};setTimeout(()=>{window.FirebaseService&&setTimeout(()=>{window.updateGDriveStatusIndicator()},1500)},500);window.doGDriveExport=async function(){const n=document.getElementById("sync-loading-overlay"),e=document.getElementById("sync-loading-text");n&&(n.style.display="flex",e&&(e.innerText="Exporting data to Google Drive..."));const t={transactions:window.Store.transactions||[],allocations:window.Store.allocations||[],wishlist:window.Store.wishlist||[],investments:window.Store.investments||[],payouts:window.Store.payouts||[],milestones:window.Store.milestones||[],activeTrades:window.Store.activeTrades||[],plannedTrades:window.Store.plannedTrades||[],backtests:window.Store.backtests||[],planner:window.Store.planner||{},snapshots:window.Store.snapshots||{},scalingMilestones:window.Store.scalingMilestones||[],expenses:window.Store.expenses||[],budgets:window.Store.budgets||[],stocks:window.Store.stocks||[],dividends:window.Store.dividends||[],locks:window.Store.locks||[],journalConfig:window.Store.journalConfig||{},debriefs:window.Store.debriefs||[],dailyGoals:window.Store.dailyGoals||[],weeklyGoals:window.Store.weeklyGoals||[],weeklyReviews:window.Store.weeklyReviews||[],accounts:window.Store.accounts||[],settings:window.Store.settings||{},trades:window.Store.trades||[]};await it.exportData(t);const r=await it.findSyncFile();r&&r.modifiedTime?localStorage.setItem("qe_last_synced",r.modifiedTime):localStorage.setItem("qe_last_synced",new Date().toISOString()),n&&(n.style.display="none"),alert("Success! Data successfully exported to Google Drive."),window.updateGDriveStatusIndicator()};window.doGDriveImport=async function(){const n=document.getElementById("sync-loading-overlay"),e=document.getElementById("sync-loading-text"),t=await it.importData();if(!t)return;n&&(n.style.display="flex",e&&(e.innerText="Importing data from Google Drive...")),((c,l)=>{for(const[u,d]of Object.entries(c))l[u]!==void 0&&localStorage.setItem(d,JSON.stringify(l[u]))})({transactions:"qe_transactions",allocations:"qe_allocations",wishlist:"qe_wishlist",investments:"qe_investments",payouts:"qe_payouts",milestones:"qe_milestones",activeTrades:"qe_active_trades",plannedTrades:"qe_planned_trades",backtests:"qe_backtests",planner:"qe_planner",snapshots:"qe_snapshots",scalingMilestones:"qe_scaling_milestones",expenses:"qe_expenses",budgets:"qe_budgets",stocks:"qe_stocks",dividends:"qe_dividends",locks:"qe_locks",journalConfig:"qe_journal_config",debriefs:"qe_debriefs",dailyGoals:"qe_daily_goals",weeklyGoals:"qe_weekly_goals",weeklyReviews:"qe_weekly_reviews"},t),t.accounts&&localStorage.setItem("qe_accounts",JSON.stringify(t.accounts)),t.settings&&localStorage.setItem("qe_settings",JSON.stringify(t.settings)),t.trades&&localStorage.setItem("qe_trades",JSON.stringify(t.trades));const i=await it.findSyncFile(),o=i&&i.modifiedTime?i.modifiedTime:new Date().toISOString();localStorage.setItem("qe_last_synced",o),localStorage.setItem("qe_last_modified",o),n&&(n.style.display="none"),window.reloadAppState?window.reloadAppState():(alert("Import successful! Reloading page..."),window.location.reload())};window.handleGDriveSync=async function(){try{if(!it.getAccessToken()&&!await it.login())return;const n=document.getElementById("sync-loading-overlay");n&&(n.style.display="flex",document.getElementById("sync-loading-text").innerText="Checking Cloud Version...");const e=await it.findSyncFile(),t=localStorage.getItem("qe_last_modified"),r=localStorage.getItem("qe_last_synced")||"1970-01-01T00:00:00.000Z",s=t?new Date(t).getTime():0,i=new Date(r).getTime();if(n&&(n.style.display="none"),!e){await window.doGDriveExport();return}const o=new Date(e.modifiedTime).getTime(),c=s>i,l=o>i;c&&l?(document.getElementById("gdrive-local-time").innerText="Last modified: "+new Date(s).toLocaleString(),document.getElementById("gdrive-cloud-time").innerText="Last modified: "+new Date(o).toLocaleString(),window.openModal("modal-gdrive-conflict")):l?await window.doGDriveImport():c?await window.doGDriveExport():alert("Your data is already perfectly in sync with Google Drive.")}catch(n){const e=document.getElementById("sync-loading-overlay");e&&(e.style.display="none"),alert("Sync failed: "+n.message)}};window.resolveGDriveConflict=async function(n){window.closeModal("modal-gdrive-conflict");try{n==="local"?await window.doGDriveExport():await window.doGDriveImport()}catch(e){alert("Action failed: "+e.message)}};window.handleGDriveDelete=async function(){try{if(!it.getAccessToken()&&!await it.login())return;await it.deleteData()}catch(n){alert("Delete failed: "+n.message)}};class Mc{constructor(){this.themes=[{id:"default",name:"Default Dark",description:"Clean dark theme with professional aesthetics"},{id:"quantum-dark",name:"Quantum Dark",description:"Futuristic neon-accented dark theme"},{id:"arctic-light",name:"Arctic Light",description:"Clean minimalist light theme"},{id:"obsidian",name:"Obsidian",description:"Sophisticated dark theme with refined accents"},{id:"emerald",name:"Emerald",description:"Nature-inspired theme with green accents"},{id:"slate-pro",name:"Slate Pro",description:"Corporate professional theme"},{id:"cyberpunk",name:"Cyberpunk",description:"Bold high-contrast neon theme"}],this.currentTheme=this.loadTheme(),this.init()}init(){this.applyTheme(this.currentTheme),this.setupThemeToggle(),this.setupThemeMenu()}loadTheme(){const e=localStorage.getItem("qe_selected_theme");return e||(localStorage.getItem("qe_theme")==="light"?"light":"default")}saveTheme(e){localStorage.setItem("qe_selected_theme",e),e==="light"||e==="arctic-light"?localStorage.setItem("qe_theme","light"):(e==="default"||e==="dark")&&localStorage.setItem("qe_theme","dark"),this.currentTheme=e}applyTheme(e){const t=document.documentElement;e==="default"||e==="dark"?t.setAttribute("data-theme","dark"):t.setAttribute("data-theme",e),this.currentTheme=e,this.saveTheme(e),this.updateThemeUI(),this.dispatchThemeChangeEvent(e)}dispatchThemeChangeEvent(e){const t=new CustomEvent("themechange",{detail:{theme:e}});document.dispatchEvent(t)}setupThemeToggle(){const e=document.getElementById("theme-toggle-btn");e&&e.addEventListener("click",()=>{this.toggleLightDark()})}toggleLightDark(){const t=this.currentTheme==="default"||this.currentTheme==="quantum-dark"||this.currentTheme==="obsidian"||this.currentTheme==="emerald"||this.currentTheme==="slate-pro"||this.currentTheme==="cyberpunk"?"arctic-light":"default";this.applyTheme(t)}setupThemeMenu(){const e=document.getElementById("theme-menu");e&&(e.innerHTML="",this.themes.forEach(t=>{const r=document.createElement("button");r.className="theme-option",t.id===this.currentTheme&&r.classList.add("active"),r.innerHTML=`
        <div class="theme-option-name">${t.name}</div>
        <div class="theme-option-desc">${t.description}</div>
      `,r.addEventListener("click",()=>{this.applyTheme(t.id),this.updateThemeMenuUI()}),e.appendChild(r)}))}updateThemeMenuUI(){document.querySelectorAll(".theme-option").forEach(r=>{r.classList.remove("active")});const t=document.querySelector(`.theme-option:has(div:contains("${this.getThemeName(this.currentTheme)}"))`);t&&t.classList.add("active")}updateThemeUI(){const e=document.getElementById("theme-icon"),t=document.getElementById("theme-text");e&&t&&(this.currentTheme!=="light"&&this.currentTheme!=="arctic-light"?(e.setAttribute("data-lucide","sun"),t.textContent="Light Mode"):(e.setAttribute("data-lucide","moon"),t.textContent="Dark Mode"),window.lucide&&window.lucide.createIcons())}getThemeName(e){const t=this.themes.find(r=>r.id===e);return t?t.name:"Unknown"}getThemes(){return this.themes}getCurrentTheme(){return this.currentTheme}getCurrentThemeInfo(){return this.themes.find(e=>e.id===this.currentTheme)}getChartThemeConfig(){const e=getComputedStyle(document.documentElement),t=e.getPropertyValue("--text").trim(),r=e.getPropertyValue("--border").trim(),s=e.getPropertyValue("--primary").trim();return{textColor:t,borderColor:r,primaryColor:s,gridColor:r+"40",plugins:{legend:{labels:{color:t,font:{family:"'Inter', system-ui, -apple-system, sans-serif"}}}},scales:{x:{ticks:{color:t},grid:{color:r+"20"}},y:{ticks:{color:t},grid:{color:r+"20"}}}}}exportThemeConfig(){const e=getComputedStyle(document.documentElement),t={};return["--bg","--card","--border","--text","--muted","--primary","--success","--danger","--warning","--surface","--surface-hover","--accent-secondary","--accent-tertiary"].forEach(s=>{t[s]=e.getPropertyValue(s).trim()}),t}onThemeChange(e){document.addEventListener("themechange",t=>{e(t.detail.theme)})}}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",()=>{window.ThemeManager=new Mc}):window.ThemeManager=new Mc;typeof To<"u"&&To.exports&&(To.exports=Mc);window.__QE_BUILD_API_BASE_URL__="".trim().replace(/\/+$/,"");function X(n){return typeof window.escapeHtml=="function"?window.escapeHtml(n):String(n??"").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e])}function Pg(n){return typeof window.sanitizeHtml=="function"?window.sanitizeHtml(n):X(n)}function pi(n=new Date){const e=new Date(n);e.setHours(0,0,0,0);const t=e.getDay(),r=t===0?-6:1-t,s=new Date(e);s.setDate(e.getDate()+r);const i=new Date(s);i.setDate(s.getDate()+6),i.setHours(23,59,59,999);const o=Math.max(1,Math.ceil((s.getTime()-new Date(s.getFullYear(),0,1).getTime())/864e5/7)),c=`${s.getFullYear()}-${String(s.getMonth()+1).padStart(2,"0")}-${String(s.getDate()).padStart(2,"0")}`;return{monday:s,sunday:i,weekNum:o,key:c}}window.getLocalWeekBoundaries=pi;function nA(){const n=new Date;return n.setDate(n.getDate()-7),pi(n).key}window.checkWeeklyReviewTrigger=function(){const e=new Date().getDay(),t=document.getElementById("weekly-review-alert"),r=document.getElementById("weekly-review-msg"),s=document.getElementById("weekly-review-alert-btn");if(!t||!r||!s||!Store.weeklyReviews)return;const i=pi(),o=nA(),c=Store.weeklyReviews.find(u=>u.key===i.key),l=Store.weeklyReviews.find(u=>u.key===o);e===0?(t.style.display="flex",c?(t.style.background="rgba(34, 197, 94, 0.15)",t.style.borderColor="var(--success)",t.style.color="var(--success)",r.innerHTML=`✓ Week ${i.weekNum} reviewed — review your intentions.`,s.innerText="View Summary",s.style.background="var(--success)",s.onclick=()=>window.openWeeklyReviewModal(i.key)):(t.style.background="rgba(234, 179, 8, 0.15)",t.style.borderColor="var(--warning)",t.style.color="var(--warning)",r.innerHTML="📋 Weekly review is due — reflect on your week before markets open.",s.innerText="Start Weekly Review",s.style.background="var(--warning)",s.onclick=()=>window.openWeeklyReviewModal())):e===1&&!l?(t.style.display="flex",t.style.background="rgba(239, 68, 68, 0.15)",t.style.borderColor="var(--danger)",t.style.color="var(--danger)",r.innerHTML="⚠ Last week's review was not completed.",s.innerText="Complete Now",s.style.background="var(--danger)",s.onclick=()=>window.openWeeklyReviewModal(o)):t.style.display="none"};window.renderWeeklyReviewHistory=function(){const n=document.getElementById("weekly-review-history-body");if(!(!n||!Store.weeklyReviews)){if(Store.weeklyReviews.length===0){n.innerHTML='<tr><td colspan="6" style="text-align: center; color: var(--muted); padding: 24px;">No weekly reviews saved yet.</td></tr>';return}Store.weeklyReviews.sort((e,t)=>new Date(t.key)-new Date(e.key)),n.innerHTML=Store.weeklyReviews.map(e=>{var l,u;let t=(e.totalR||0).toFixed(2),r=(e.winRate||0).toFixed(1),s=Math.max(0,Math.min(5,parseInt((l=e.manual)==null?void 0:l.rating,10)||0)),i="⭐".repeat(s)+"☆".repeat(5-s),o=t>=0?"var(--success)":"var(--danger)";const c=X(e.key);return`
            <tr style="border-bottom: 1px solid var(--border);">
                <td style="padding: 12px 16px; font-weight: 500;">
                    Week ${X(e.weekNum)} <span style="font-size:0.8rem; color:var(--muted); margin-left:8px;">${c}</span>
                </td>
                <td style="padding: 12px 16px; font-size: 1.1rem; color: var(--warning);">${i}</td>
                <td style="padding: 12px 16px; color: ${o}; font-weight: 600;">${t>=0?"+":""}${t}R</td>
                <td style="padding: 12px 16px;">${r}%</td>
                <td style="padding: 12px 16px; color: var(--muted);">${X(((u=e.manual)==null?void 0:u.nextFocus)||"-")}</td>
                <td style="padding: 12px 0; text-align: right;">
                    <button class="secondary" onclick="openWeeklyReviewModal('${c}')" style="padding: 4px 12px; font-size: 0.8rem;">View</button>
                </td>
            </tr>
        `}).join("")}};const zd=window.renderAll;window.renderAll=function(){zd&&zd(),checkWeeklyReviewTrigger(),renderWeeklyReviewHistory()};window.renderWeeklyReviewModal=async function(n,e,t){var l,u,d,p,y,v,k,P,C,V,O,x,L,q,j,T,g,_,E,I,S,w,ee,Ee;const r=document.getElementById("weekly-review-content"),s=document.getElementById("weekly-review-step-lbl"),i=document.getElementById("weekly-review-read-only-actions"),o=document.getElementById("btn-save-weekly-review");if(!n)return;if(e&&!t){s.innerText="Completed / Locked",s.style.background="var(--surface)",s.style.color="var(--success)",o.style.display="none";const ne=document.getElementById("btn-skip-ai-weekly-review");ne&&(ne.style.display="none"),i.innerHTML=`
            <button class="secondary" onclick="exportWeeklyReviewPDF()"><i data-lucide="file-text"></i> Export PDF</button>
        `}else{s.innerText="Draft Mode",s.style.background="var(--surface)",s.style.color="var(--warning)",o.style.display="inline-block";const ne=document.getElementById("btn-skip-ai-weekly-review");ne&&(ne.style.display="inline-block"),i.innerHTML=""}let c=`
        <div style="display: flex; flex-direction: column; gap: 32px;">
            <div style="background: var(--bg); padding: 24px; border-radius: 8px; border: 1px solid var(--border);">
                <div style="font-size: 0.85rem; color: var(--muted); text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 8px;">Section 1 of 7 — Overview</div>
                <h3 style="margin: 0 0 16px 0;">Week ${X(n.weekNum)} — ${X(n.startDate)} to ${X(n.endDate)}</h3>
                <div style="display: flex; gap: 24px; color: var(--text);">
                    <div><strong>Trading Days:</strong> ${X(n.daysWithTrades)}</div>
                    <div><strong>Accounts Traded:</strong> ${n.accountSet.length>0?n.accountSet.length:"None"}</div>
                    <div>
                        <strong>Sessions:</strong> 
                        NY: ${n.sessionCounts["New York"]||0} | LON: ${n.sessionCounts.London||0} | ASIA: ${n.sessionCounts.Asian||0}
                    </div>
                </div>
            </div>
            
            <div>
                <div style="font-size: 0.85rem; color: var(--muted); text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 8px;">Section 2 of 7 — Performance Summary</div>
                <div class="grid" style="grid-template-columns: repeat(4, 1fr); gap: 16px; margin-bottom: 16px;">
                    <div class="card" style="padding: 16px;">
                        <div class="stat-label">Total Trades</div>
                        <div class="stat-value">${n.totalTrades}</div>
                    </div>
                    <div class="card" style="padding: 16px;">
                        <div class="stat-label">Win Rate</div>
                        <div class="stat-value">${n.winRate.toFixed(1)}%</div>
                    </div>
                    <div class="card" style="padding: 16px;">
                        <div class="stat-label">Total R</div>
                        <div class="stat-value" style="color: ${n.totalR>=0?"var(--success)":"var(--danger)"};">${n.totalR>=0?"+":""}${n.totalR.toFixed(2)}R</div>
                    </div>
                    <div class="card" style="padding: 16px;">
                        <div class="stat-label">Total P&L</div>
                        <div class="stat-value" style="color: ${n.totalPnl>=0?"var(--success)":"var(--danger)"};">${n.totalPnl>=0?"+":""}$${n.totalPnl.toFixed(2)}</div>
                    </div>
                </div>
                
                <table style="width: 100%; border-collapse: collapse; margin-bottom: 16px;">
                    <thead>
                        <tr style="border-bottom: 1px solid var(--border); color: var(--muted); font-size: 0.85rem;">
                            <th style="padding: 12px; text-align: left;">Day</th>
                            <th style="padding: 12px; text-align: left;">Trades</th>
                            <th style="padding: 12px; text-align: left;">W/L</th>
                            <th style="padding: 12px; text-align: left;">R</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${n.tableRows.map(ne=>`
                            <tr style="border-bottom: 1px solid var(--border);">
                                <td style="padding: 12px;">${X(ne.day)}</td>
                                <td style="padding: 12px;">${X(ne.trades)}</td>
                                <td style="padding: 12px;">${X(ne.wl)}</td>
                                <td style="padding: 12px; color: ${ne.r>=0?"var(--success)":"var(--danger)"};">${ne.r>=0?"+":""}${X(ne.r)}R</td>
                            </tr>
                        `).join("")}
                    </tbody>
                </table>
                
                <div style="display: flex; gap: 24px; font-size: 0.9rem;">
                   <div><strong style="color: var(--muted);">Best Trade:</strong> ${n.bestTrade?`${X(n.bestTrade.pair)} (${X(n.bestTrade.grade)}) / +${parseFloat(n.bestTrade.r).toFixed(2)}R`:"-"}</div>
                   <div><strong style="color: var(--muted);">Worst Trade:</strong> ${n.worstTrade?`${X(n.worstTrade.pair)} (${X(n.worstTrade.grade)}) / ${parseFloat(n.worstTrade.r).toFixed(2)}R`:"-"}</div>
                   <div><strong style="color: var(--muted);">Top Pair:</strong> ${X(n.mostTradedPair)}</div>
                </div>
            </div>
            
            <div style="background: var(--bg); padding: 24px; border-radius: 8px; border: 1px solid var(--border);">
               <div style="font-size: 0.85rem; color: var(--muted); text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 16px;">Section 3 of 7 — Execution & Discipline</div>
               
               <div style="display: flex; gap: 32px; flex-wrap: wrap;">
                   <div style="flex: 1; min-width: 200px;">
                       <div class="stat-label">Rule Adherence</div>
                       <div class="stat-value" style="color: ${n.ruleAdherencePct>=80?"var(--success)":"var(--warning)"}">${n.ruleAdherencePct.toFixed(0)}%</div>
                   </div>
                   <div style="flex: 1; min-width: 200px;">
                       <div class="stat-label">Avg Quality Score</div>
                       <div class="stat-value">${n.avgQuality.toFixed(1)} / 10</div>
                   </div>
                   <div style="flex: 1; min-width: 200px;">
                       <div class="stat-label">Daily Loss Hits</div>
                       <div class="stat-value" style="color: ${n.dailyLossHits>0?"var(--danger)":"var(--success)"}">${n.dailyLossHits}</div>
                   </div>
               </div>
               
               <div style="display: flex; gap: 32px; flex-wrap: wrap; margin-top: 24px;">
                   <div style="flex: 1; min-width: 200px;">
                       <div class="stat-label">Daily Plans Completed</div>
                       <div class="stat-value">${n.plansLogged} / ${n.expectedPlanDays}</div>
                   </div>
                   <div style="flex: 1; min-width: 200px;">
                       <div class="stat-label">Top Confluences Used</div>
                       <div class="stat-value" style="font-size: 1rem; white-space: normal;">${n.topConfluences.length>0?n.topConfluences.map(X).join(" • "):"-"}</div>
                   </div>
               </div>
               
               <div style="margin-top: 24px;">
                   <div class="stat-label" style="margin-bottom: 8px;">Grade Distribution</div>
                   <div style="display: flex; gap: 8px;">
                      <div style="background: var(--surface); padding: 4px 12px; border-radius: 4px; border-left: 3px solid var(--success);">A: ${n.gradeCounts.A||0}</div>
                      <div style="background: var(--surface); padding: 4px 12px; border-radius: 4px; border-left: 3px solid var(--primary);">B: ${n.gradeCounts.B||0}</div>
                      <div style="background: var(--surface); padding: 4px 12px; border-radius: 4px; border-left: 3px solid var(--warning);">C: ${n.gradeCounts.C||0}</div>
                      <div style="background: var(--surface); padding: 4px 12px; border-radius: 4px; border-left: 3px solid var(--danger);">F: ${n.gradeCounts.F||0}</div>
                   </div>
               </div>
               
               ${n.ruleViolations.length>0?`
               <div style="margin-top: 24px;">
                   <div class="stat-label" style="margin-bottom: 8px;">Rule Violations</div>
                   <ul style="margin: 0; padding-left: 20px; color: var(--text); font-size: 0.9rem;">
                       ${n.ruleViolations.map(ne=>`<li style="margin-bottom: 4px;"><strong>${X(ne.pair)}</strong> (${X(ne.date)}): <em>${X(ne.reason)}</em></li>`).join("")}
                   </ul>
               </div>`:'<div style="margin-top: 24px; color: var(--success); font-size: 0.9rem;">No rule violations logged this week!</div>'}
            </div>

            <div>
               <div style="font-size: 0.85rem; color: var(--muted); text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 16px;">Section 4 of 7 — Psychological Summary</div>
               <div style="display: flex; gap: 32px; flex-wrap: wrap;">
                   <div style="flex: 1; min-width: 200px;">
                       <div class="stat-label">Emotional Consistency</div>
                       <div class="stat-value" style="color: ${n.emotionalConsistency>=80?"var(--success)":"var(--warning)"}">${n.emotionalConsistency.toFixed(0)}%</div>
                   </div>
                   <div style="flex: 1; min-width: 200px;">
                       <div class="stat-label">Dominant Pre-Trade</div>
                       <div class="stat-value" style="font-size: 1.5rem;">${X(n.domPre)}</div>
                   </div>
                   <div style="flex: 1; min-width: 200px;">
                       <div class="stat-label">Dominant During-Trade</div>
                       <div class="stat-value" style="font-size: 1.5rem;">${X(n.domDuring)}</div>
                   </div>
               </div>
               
               <div style="margin-top: 24px;">
                   <div class="stat-label" style="margin-bottom: 8px;">Emotional Timeline</div>
                   <div style="display: flex; gap: 8px;">
                      ${n.emotionTimeline.map(ne=>`
                          <div style="background: var(--surface); padding: 8px 16px; border-radius: 4px; text-align: center; border-bottom: 2px solid ${rA(ne.emotion)};">
                              <div style="font-size: 0.75rem; color: var(--muted); margin-bottom: 4px;">${X(ne.day)}</div>
                              <div style="font-size: 0.85rem; font-weight: 500;">${X(ne.emotion)}</div>
                          </div>
                      `).join("")}
                   </div>
               </div>
            </div>
            
            <div style="margin-top: 16px; padding-top: 24px; border-top: 1px solid var(--border);">
               <div style="font-size: 0.85rem; color: var(--primary); font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 16px;">Section 5 of 7 — Trader Assessment</div>
               
               ${!t&&n.manual?`
                   <div style="display: grid; gap: 16px; background: var(--surface); border: 1px solid var(--border); padding: 24px; border-radius: 8px;">
                       <div><strong style="color: var(--muted);">Overall Rating:</strong> ${"⭐".repeat(Math.max(0,Math.min(5,parseInt(n.manual.rating,10)||0)))}</div>
                       <div><strong style="color: var(--muted);">What went well:</strong><p style="margin: 4px 0 0 0; line-height: 1.5;">${X(n.manual.wentWell)}</p></div>
                       <div><strong style="color: var(--muted);">What needs improvement:</strong><p style="margin: 4px 0 0 0; line-height: 1.5;">${X(n.manual.wentWrong)}</p></div>
                       <div><strong style="color: var(--muted);">Followed plan:</strong> ${X(n.manual.followedPlan)}</div>
                       <div><strong style="color: var(--muted);">Mental State:</strong> ${X(n.manual.mentalState)}</div>
                       <div><strong style="color: var(--muted);">Key Lesson:</strong><p style="margin: 4px 0 0 0; line-height: 1.5;">${X(n.manual.keyLesson)}</p></div>
                   </div>
               `:`
                   <div class="form-group" style="margin-bottom: 24px;">
                       <label>1. Overall Week Rating <span style="color: var(--danger);">●</span></label>
                       <select id="wr-rating" style="width: 150px;">
                           <option value="5" ${((l=n.manual)==null?void 0:l.rating)===5?"selected":""}>⭐⭐⭐⭐⭐ (5)</option>
                           <option value="4" ${((u=n.manual)==null?void 0:u.rating)===4?"selected":""}>⭐⭐⭐⭐ (4)</option>
                           <option value="3" ${((d=n.manual)==null?void 0:d.rating)===3||!n.manual?"selected":""}>⭐⭐⭐ (3)</option>
                           <option value="2" ${((p=n.manual)==null?void 0:p.rating)===2?"selected":""}>⭐⭐ (2)</option>
                           <option value="1" ${((y=n.manual)==null?void 0:y.rating)===1?"selected":""}>⭐ (1)</option>
                       </select>
                   </div>
                   
                   <div class="form-group" style="margin-bottom: 24px;">
                       <label>2. What went well this week? <span style="color: var(--danger);">●</span></label>
                       <textarea id="wr-went-well" rows="3" placeholder="Be specific — which setups, decisions, or habits worked?" style="width: 100%; padding: 12px; border-radius: 8px; border: 1px solid var(--border); background: var(--surface); color: var(--text);">${X(((v=n.manual)==null?void 0:v.wentWell)||"")}</textarea>
                   </div>
                   
                   <div class="form-group" style="margin-bottom: 24px;">
                       <label>3. What went wrong or needs improvement? <span style="color: var(--danger);">●</span></label>
                       <textarea id="wr-went-wrong" rows="3" placeholder="Be honest — what mistakes, habits, or patterns cost you?" style="width: 100%; padding: 12px; border-radius: 8px; border: 1px solid var(--border); background: var(--surface); color: var(--text);">${X(((k=n.manual)==null?void 0:k.wentWrong)||"")}</textarea>
                   </div>
                   
                   <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 24px;">
                       <div class="form-group">
                           <label>4. Did you follow trading plan? <span style="color: var(--danger);">●</span></label>
                           <select id="wr-plan-followed">
                               <option value="Always" ${((P=n.manual)==null?void 0:P.followedPlan)==="Always"?"selected":""}>Always</option>
                               <option value="Mostly" ${((C=n.manual)==null?void 0:C.followedPlan)==="Mostly"||!n.manual?"selected":""}>Mostly</option>
                               <option value="Sometimes" ${((V=n.manual)==null?void 0:V.followedPlan)==="Sometimes"?"selected":""}>Sometimes</option>
                               <option value="Rarely" ${((O=n.manual)==null?void 0:O.followedPlan)==="Rarely"?"selected":""}>Rarely</option>
                           </select>
                       </div>
                       <div class="form-group">
                           <label>5. Mental state overall? <span style="color: var(--danger);">●</span></label>
                           <select id="wr-mental-state">
                               <option value="Excellent" ${((x=n.manual)==null?void 0:x.mentalState)==="Excellent"?"selected":""}>Excellent</option>
                               <option value="Good" ${((L=n.manual)==null?void 0:L.mentalState)==="Good"||!n.manual?"selected":""}>Good</option>
                               <option value="Neutral" ${((q=n.manual)==null?void 0:q.mentalState)==="Neutral"?"selected":""}>Neutral</option>
                               <option value="Stressed" ${((j=n.manual)==null?void 0:j.mentalState)==="Stressed"?"selected":""}>Stressed</option>
                               <option value="Burnt Out" ${((T=n.manual)==null?void 0:T.mentalState)==="Burnt Out"?"selected":""}>Burnt Out</option>
                           </select>
                       </div>
                   </div>
                   
                   <div class="form-group" style="margin-bottom: 24px;">
                       <label>6. Key lesson learned this week <span style="color: var(--danger);">●</span></label>
                       <textarea id="wr-lesson" rows="2" placeholder="One thing you will carry into next week" style="width: 100%; padding: 12px; border-radius: 8px; border: 1px solid var(--border); background: var(--surface); color: var(--text);">${X(((g=n.manual)==null?void 0:g.keyLesson)||"")}</textarea>
                   </div>
               `}
            </div>
            
            <div style="margin-bottom: 24px;">
               <div style="font-size: 0.85rem; color: var(--primary); font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 16px;">Section 6 of 7 — Next Week Intentions</div>
               
               ${!t&&n.manual?`
                   <div style="display: grid; gap: 16px; background: var(--surface); border: 1px solid var(--border); padding: 24px; border-radius: 8px;">
                       <div><strong style="color: var(--muted);">Primary Focus:</strong> ${X(n.manual.nextFocus)}</div>
                       <div><strong style="color: var(--muted);">Target R:</strong> +${X(n.manual.targetR)}R</div>
                       <div><strong style="color: var(--muted);">Rule to Enforce:</strong><p style="margin: 4px 0 0 0; line-height: 1.5;">${X(n.manual.ruleEnforce)}</p></div>
                   </div>
               `:`
                   <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 24px;">
                       <div class="form-group">
                           <label>1. Primary focus next week <span style="color: var(--danger);">●</span></label>
                           <select id="wr-next-focus">
                               <option value="Consistency" ${((_=n.manual)==null?void 0:_.nextFocus)==="Consistency"||!n.manual?"selected":""}>Consistency</option>
                               <option value="Risk Management" ${((E=n.manual)==null?void 0:E.nextFocus)==="Risk Management"?"selected":""}>Risk Management</option>
                               <option value="Patience" ${((I=n.manual)==null?void 0:I.nextFocus)==="Patience"?"selected":""}>Patience</option>
                               <option value="Execution Quality" ${((S=n.manual)==null?void 0:S.nextFocus)==="Execution Quality"?"selected":""}>Execution Quality</option>
                               <option value="Emotional Control" ${((w=n.manual)==null?void 0:w.nextFocus)==="Emotional Control"?"selected":""}>Emotional Control</option>
                           </select>
                       </div>
                       <div class="form-group">
                           <label>2. Weekly R Target</label>
                           <input type="number" id="wr-target-r" step="0.1" value="${X(((ee=n.manual)==null?void 0:ee.targetR)||"5.0")}" style="width: 100%; padding: 8px; border-radius: 4px; border: 1px solid var(--border); background: var(--bg); color: var(--text);" />
                       </div>
                   </div>
                   
                   <div class="form-group" style="margin-bottom: 24px;">
                       <label>3. One rule to enforce strictly <span style="color: var(--danger);">●</span></label>
                       <textarea id="wr-rule" rows="2" placeholder="e.g. No trading after 2 consecutive losses" style="width: 100%; padding: 12px; border-radius: 8px; border: 1px solid var(--border); background: var(--surface); color: var(--text);">${X(((Ee=n.manual)==null?void 0:Ee.ruleEnforce)||"")}</textarea>
                   </div>
               `}
            </div>

            <div style="background: rgba(168, 85, 247, 0.05); padding: 24px; border-radius: 8px; border: 1px solid rgba(168, 85, 247, 0.3);">
               <div style="font-size: 0.85rem; color: #a855f7; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 16px;">Section 7 of 7 — AI Weekly Report</div>
               <div id="wr-ai-container" style="color: var(--text); line-height: 1.6; font-size: 0.95rem;">
                   ${n.aiSummary?Pg(n.aiSummary):'<span style="color: var(--muted); font-style: italic;">Submit your review to generate the AI report</span>'}
               </div>
            </div>

        </div>
    `;r.innerHTML=c,window.lucide&&window.lucide.createIcons()};function rA(n){return["Calm","Confident","Disciplined","Patient","Focused"].includes(n)?"var(--success)":["Overconfident","Tilted","Revenge","Fearful","FOMO","Stressed","Frustrated"].includes(n)?"var(--danger)":["None","-"].includes(n)?"var(--border)":"var(--warning)"}window.saveWeeklyReview=async function(n=!1){const e=window.currentReviewData;if(!e)return;const t=document.getElementById("wr-went-well").value.trim(),r=document.getElementById("wr-went-wrong").value.trim(),s=document.getElementById("wr-lesson").value.trim(),i=document.getElementById("wr-rule").value.trim();if(t.length<10||r.length<10||s.length<10||i.length<5){alert("Please complete all required text fields with sufficient detail (min 10 chars).");return}e.manual={rating:parseInt(document.getElementById("wr-rating").value),wentWell:t,wentWrong:r,followedPlan:document.getElementById("wr-plan-followed").value,mentalState:document.getElementById("wr-mental-state").value,keyLesson:s,nextFocus:document.getElementById("wr-next-focus").value,targetR:parseFloat(document.getElementById("wr-target-r").value)||0,ruleEnforce:i};const o=document.getElementById("btn-save-weekly-review"),c=document.getElementById("btn-skip-ai-weekly-review");if(o.innerText="Processing...",o.disabled=!0,c&&(c.disabled=!0),n)e.aiSummary='<div style="color: var(--muted); font-style: italic;">AI analysis was skipped manually to save cost.</div>';else{o.innerText="Generating AI Report...";try{await generateWeeklyReviewAI(e)}catch(d){console.error("AI Generation failed inline",d)}}let u=Store.weeklyReviews.findIndex(d=>d.key===e.key);u>-1?Store.weeklyReviews[u]=e:Store.weeklyReviews.unshift(e),Store.save(),window.currentReviewIsHistorical=!0,window.currentReviewEditable=!1,renderWeeklyReviewModal(e,!0,!1),renderWeeklyReviewHistory(),checkWeeklyReviewTrigger()};window.generateWeeklyReviewAI=async function(n){var t,r;const e=`
    Analyze this trader's weekly performance. Minimal, concise response to save tokens.
    Week: ${n.weekNum}
    Total Trades: ${n.totalTrades}
    Win Rate: ${n.winRate.toFixed(1)}%
    Total R: ${n.totalR.toFixed(2)}
    Rule Adherence: ${n.ruleAdherencePct}%
    Emotions Pre: ${n.domPre}, During: ${n.domDuring}
    Rule Violations: ${n.ruleViolations.length}
    Daily Loss Hits: ${n.dailyLossHits}
    Trader's Assessment:
    - Went Well: ${n.manual.wentWell}
    - Went Wrong: ${n.manual.wentWrong}
    - Key Lesson: ${n.manual.keyLesson}
    - Focus Next Week: ${n.manual.nextFocus}
    - Rule to Enforce: ${n.manual.ruleEnforce}
    
    Return a short, structured HTML report with NO markdown fences.
    Include these sections (use <h4> tags with style="color:var(--text); margin-bottom:8px; margin-top:24px;"):
    1. Verdict (1-2 sentences)
    2. Primary Edge
    3. Critical Risk
    4. Actionable Advice
    `;try{const i=(await window.callServerGemini({prompt:e,model:((r=(t=window.Store)==null?void 0:t.settings)==null?void 0:r.geminiModel)||"gemini-4-hydrogen",systemInstruction:"You are an elite trading performance psychologist. Be direct, objective, and deeply insightful. Use clear HTML formatting."})||"").replace(/```html/g,"").replace(/```/g,"");n.aiSummary=Pg(i)}catch(s){console.error("AI Error:",s),n.aiSummary=`<span style="color:var(--danger)">AI generation failed. Please try again later or skip AI analysis. Error: ${X(s.message)}</span>`}};window.exportWeeklyReviewPDF=function(){if(!window.jspdf){alert("PDF export not ready. Please wait a moment.");return}const{jsPDF:n}=window.jspdf,e=new n,t=document.getElementById("weekly-review-content").innerText;e.setFontSize(16),e.text("Quant OS Edge - Weekly Review",14,15),e.setFontSize(10);const r=e.splitTextToSize(t,180);e.text(r,14,25),e.save(`QuantEdge_WeeklyReview_${window.currentReviewData.startDate}.pdf`)};window.openWeeklyReviewModal=async function(n=null){let e;if(n){const o=n.split("-");e=pi(new Date(o[0],o[1]-1,o[2]))}else e=pi();let t=!1,r=Store.weeklyReviews.find(o=>o.key===e.key);const s=new Date;let i=!1;r?(s.getTime()-r.timestamp)/36e5<=48?i=!0:t=!0:(i=!0,r=await sA(e)),window.currentReviewData=r,window.currentReviewIsHistorical=t,window.currentReviewEditable=i,await renderWeeklyReviewModal(r,t,i),window.openModal("modal-weekly-review")};async function sA(n){const{monday:e,sunday:t,weekNum:r,key:s}=n;let i=Store.trades.filter($=>{let K=new Date($.date);return K>=e&&K<=t}),o=0,c=0,l=0,u=0,d=-999,p=999,y=null,v=null,k=new Set,P={Asian:0,London:0,"New York":0},C={},V=0,O=new Map,x=0,L=0,q=0,j=0,T={A:0,B:0,C:0,F:0},g=[],_={},E={},I={},S=["Calm","Confident","Disciplined","Patient","Focused"],w=0,ee=new Map,Ee=[];for(let $ of i){let K=parseFloat($.r)||0,Ze=parseFloat($.pnlAmount)||0;o+=K,c+=Ze,K>d&&(d=K,y=$),K<p&&(p=K,v=$),K>0?l++:K<=0&&$.result==="Loss"&&u++,$.asset&&(C[$.asset]=(C[$.asset]||0)+1),$.session&&(P[$.session]=(P[$.session]||0)+1),$.accountId&&k.add($.accountId);let je=new Date($.date).toLocaleDateString("en-US",{weekday:"long"});O.has(je)||O.set(je,{trades:0,wins:0,losses:0,r:0,pnl:0});let et=O.get(je);et.trades++,K>0?et.wins++:$.result==="Loss"&&et.losses++,et.r+=K,et.pnl+=Ze,$.qualityScore&&(x+=parseInt($.qualityScore),L++),$.ruleAdherence&&(j++,$.ruleAdherence==="Yes"?q++:g.push({date:$.date,pair:$.asset,reason:$.ruleDeviation||"No reason given"})),$.tradeGrade&&(T[$.tradeGrade]=(T[$.tradeGrade]||0)+1),$.confluences&&$.confluences.forEach(_t=>{_[_t]=(_[_t]||0)+1}),$.preEmotion&&(E[$.preEmotion]=(E[$.preEmotion]||0)+1,ee.has(je)||ee.set(je,[]),ee.get(je).push($.preEmotion)),$.duringEmotion&&(I[$.duringEmotion]=(I[$.duringEmotion]||0)+1,S.includes($.preEmotion)&&S.includes($.duringEmotion)&&w++),$.postNotes&&$.postNotes.trim().length>5&&Ee.push({date:$.date,pair:$.asset,note:$.postNotes})}let ne=O.size,Pt={};for(let $ of k){let K=i.filter(wt=>wt.accountId===$),Ze=0,je=0,et=0,_t=0;K.forEach(wt=>{Ze+=parseFloat(wt.r)||0,je+=parseFloat(wt.pnlAmount)||0,parseFloat(wt.r)>0?et++:wt.result==="Loss"&&_t++});let Er=Store.accounts.find(wt=>wt.id===$),us=Er?Er.name:"Unknown";Pt[$]={name:us,trades:K.length,r:Ze,pnl:je,wins:et,losses:_t}}let at={r:-999,name:"-"},ct={r:999,name:"-"},he=[];["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"].forEach($=>{if(O.has($)){let K=O.get($);he.push({day:$,trades:K.trades,wl:`${K.wins}/${K.losses}`,r:K.r.toFixed(2),pnl:K.pnl.toFixed(2)}),K.r>at.r&&(at.r=K.r,at.name=$),K.r<ct.r&&(ct.r=K.r,ct.name=$),K.r<=-(Store.settings.dailyLossLimitR||3)&&V++}}),O.size===0&&(at.r=0,ct.r=0);let Ie=Object.keys(C).sort(($,K)=>C[K]-C[$])[0]||"-",Me=Object.keys(P).sort(($,K)=>P[K]-P[$])[0]||"-",qt=Object.keys(_).sort(($,K)=>_[K]-_[$]).slice(0,3),Qe=Object.keys(E).sort(($,K)=>E[K]-E[$])[0]||"-",gt=Object.keys(I).sort(($,K)=>I[K]-I[$])[0]||"-",lt=0,yt=ne,ls=Object.keys(Store.planner);for(let $ of ls){let K=$.split("_")[1];if(!K)continue;let Ze=new Date(K);Ze>=e&&Ze<=t&&$.startsWith("Daily_")&&lt++}let Ir=[];return["Monday","Tuesday","Wednesday","Thursday","Friday"].forEach($=>{let K=ee.get($);if(K&&K.length>0){let Ze=K.sort((je,et)=>K.filter(_t=>_t===je).length-K.filter(_t=>_t===et).length).pop();Ir.push({day:$.substring(0,3),emotion:Ze})}else Ir.push({day:$.substring(0,3),emotion:"None"})}),{key:s,weekNum:r,startDate:e.toISOString().split("T")[0],endDate:t.toISOString().split("T")[0],timestamp:new Date().getTime(),daysWithTrades:ne,sessionCounts:P,accountSet:Array.from(k),totalTrades:i.length,winRate:i.length>0?l/(l+u)*100:0,totalR:o,totalPnl:c,bestDay:at,worstDay:ct,avgRPerDay:ne>0?o/ne:0,accountStats:Pt,tableRows:he,bestTrade:y?{pair:y.asset,r:y.r,grade:y.tradeGrade}:null,worstTrade:v?{pair:v.asset,r:v.r,grade:v.tradeGrade}:null,mostTradedPair:Ie,mostUsedSession:Me,avgQuality:L>0?x/L:0,ruleAdherencePct:j>0?q/j*100:0,gradeCounts:T,ruleViolations:g,topConfluences:qt,dailyLossHits:V,plansLogged:lt,expectedPlanDays:yt,domPre:Qe,domDuring:gt,emotionalConsistency:i.length>0?w/i.length*100:0,emotionTimeline:Ir,postReflections:Ee,manual:null,aiSummary:null}}function ue(n){return n==null?"":String(n).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function M(n,e,t=32){if(n=String(n||""),e=String(e||""),n.length+e.length>=t){const s=t-e.length-1;s>4&&(n=n.substring(0,s))}const r=Math.max(1,t-n.length-e.length);return n+" ".repeat(r)+e}function It(n){if(!n)return null;if(n instanceof Date)return isNaN(n.getTime())?null:new Date(n.getTime());const e=String(n).trim(),t=e.match(/^(\d{4})-(\d{2})-(\d{2})$/);if(t){const s=parseInt(t[1],10),i=parseInt(t[2],10)-1,o=parseInt(t[3],10);return new Date(s,i,o,12,0,0,0)}const r=new Date(e);return isNaN(r.getTime())?null:r}function Fr(n=new Date){const e=It(n)||new Date;return`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`}function Hd(n=new Date){const e=It(n)||new Date;return`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}`}function tc(n,e){if(typeof n!="string")return e;const t=n.trim().match(/^(\d{1,2}):(\d{2})$/);if(!t)return e;const r=Math.max(0,Math.min(23,parseInt(t[1],10))),s=Math.max(0,Math.min(59,parseInt(t[2],10)));return r*60+s}function yn(n){return!!n&&n.resultType!=="Missed"&&n.resultType!=="Canceled"}function nc(n=[]){const e=n.length;let t=0,r=0,s=0,i=0,o=0,c=0,l=0,u=0,d=0,p=[],y=0,v=0,k=0,P=0,C=0,V=null,O=null,x=-1/0,L=1/0;const q={},j={},T={},g={};n.forEach(he=>{const Ie=parseFloat(he.r)||0,Me=parseFloat(he.pnlAmount)||0;o+=Ie,i+=Me,p.push(Ie),Ie>.05?(t++,c+=Me>0?Me:0,u+=Ie):Ie<-.05||he.result==="Loss"?(r++,l+=Math.abs(Me),d+=Math.abs(Ie)):s++,Ie>x&&(x=Ie,V=he),Ie<L&&(L=Ie,O=he),he.ruleAdherence==="Yes"&&y++,he.qualityScore!==void 0&&he.qualityScore!==null&&!isNaN(parseInt(he.qualityScore))&&(v+=parseInt(he.qualityScore),k++);const qt=["Calm","Confident","Disciplined","Patient"];he.preEmotion&&(C++,qt.includes(he.preEmotion)&&P++),he.duringEmotion&&(C++,qt.includes(he.duringEmotion)&&P++);const Qe=he.setupType||"Discretionary";q[Qe]||(q[Qe]={count:0,r:0,pnl:0}),q[Qe].count++,q[Qe].r+=Ie,q[Qe].pnl+=Me;const gt=he.session||"Unspecified";j[gt]||(j[gt]={count:0,r:0,pnl:0}),j[gt].count++,j[gt].r+=Ie,j[gt].pnl+=Me;const lt=he.accountId||"default";T[lt]||(T[lt]={count:0,r:0,pnl:0}),T[lt].count++,T[lt].r+=Ie,T[lt].pnl+=Me;const yt=he.asset||"Other";g[yt]||(g[yt]={count:0,r:0,pnl:0}),g[yt].count++,g[yt].r+=Ie,g[yt].pnl+=Me});const _=t+r,E=_>0?t/_*100:(e>0,0),I=t>0?u/t:0,S=r>0?d/r:0;let w=0;l>0?w=c/l:c>0&&(w=99.99);const ee=e>0?o/e:0,Ee=e>0?i/e:0;let ne=0;if(e>1){const he=o/e,Ie=p.reduce((qt,Qe)=>qt+Math.pow(Qe-he,2),0)/(e-1),Me=Math.sqrt(Ie);Me>1e-4&&(ne=he/Me*Math.sqrt(Math.min(e,252)))}const Pt=e>0?y/e*100:100,at=k>0?v/k:9,ct=C>0?P/C*10:9;return{totalTrades:e,wins:t,losses:r,breakevens:s,winRate:E,totalPnl:i,totalR:o,grossProfit:c,grossLoss:l,profitFactor:w,avgWinR:I,avgLossR:S,expectancyR:ee,expectancyPnl:Ee,sharpeRatio:ne,ruleAdherentCount:y,ruleViolations:e-y,ruleAdherenceRate:Pt,avgQuality:at,psychStability:ct,bestTrade:V,worstTrade:O,setupMap:q,sessionMap:j,accountMap:T,assetMap:g}}class iA{constructor(){this.checkInterval=6e4,this.intervalId=null,this.alertBackoff=new Map,this._pendingReports=new Set}_getDefaultSchedule(){return{dailyTime:"21:00",monthlyDay:1,monthlyTime:"08:00",weeklyDay:0,weeklyTime:"20:00"}}init(){var s,i,o,c,l,u,d,p,y,v,k,P,C;if(!Store.settings.notifications){const V=Store.settings.notifications||{};Store.settings.notifications={telegram:{token:typeof V.telegramToken=="string"?V.telegramToken:"",chatId:typeof V.telegramChat=="string"?V.telegramChat:"",alerts:V.telegramRtAlerts!==!1,daily:V.telegramDailyRep!==!1,weekly:V.telegramWeeklyRep!==!1,monthly:!!V.telegramMonthlyRep,enabled:V.telegramEnabled!==!1},schedule:this._getDefaultSchedule(),lastSent:{daily:"",weekly:"",monthly:""},thresholds:{lossWarn:V.lossThresh||50,ddWarn:V.ddThresh||70,streak:V.streakThresh||3,eqHigh:V.eqHigh!==!1,psychEscalate:V.psychEscalation!==!1,tradeLogged:!!V.tradeLogged},morningWeeklyGoals:{enabled:!0,startHour:5,endHour:12,browser:!0,telegram:!1}}}Store.settings.notifications.schedule?Store.settings.notifications.schedule={...this._getDefaultSchedule(),...Store.settings.notifications.schedule}:Store.settings.notifications.schedule=this._getDefaultSchedule(),Store.settings.notifications.lastSent||(Store.settings.notifications.lastSent={daily:"",weekly:"",monthly:""}),Store.settings.notifications.morningWeeklyGoals||(Store.settings.notifications.morningWeeklyGoals={enabled:!0,startHour:5,endHour:12,browser:!0,telegram:!1});const e=Store.settings.notifications,t=(V,O)=>{const x=document.getElementById(V);x&&(x.value=O)},r=(V,O)=>{const x=document.getElementById(V);x&&(x.checked=O)};t("webhook-telegram-token",((s=e.telegram)==null?void 0:s.token)||""),t("webhook-telegram-chat",((i=e.telegram)==null?void 0:i.chatId)||""),r("telegram-enabled",((o=e.telegram)==null?void 0:o.enabled)!==!1),r("telegram-rt-alerts",(c=e.telegram)==null?void 0:c.alerts),r("telegram-daily-rep",(l=e.telegram)==null?void 0:l.daily),r("telegram-weekly-rep",(u=e.telegram)==null?void 0:u.weekly),r("telegram-monthly-rep",(d=e.telegram)==null?void 0:d.monthly),t("notif-loss-thresh",((p=e.thresholds)==null?void 0:p.lossWarn)||50),t("notif-dd-thresh",((y=e.thresholds)==null?void 0:y.ddWarn)||70),t("notif-streak-thresh",((v=e.thresholds)==null?void 0:v.streak)||3),r("notif-eq-high",(k=e.thresholds)==null?void 0:k.eqHigh),r("notif-psych-escalation",(P=e.thresholds)==null?void 0:P.psychEscalate),r("notif-trade-logged",(C=e.thresholds)==null?void 0:C.tradeLogged),r("notif-morning-enabled",e.morningWeeklyGoals.enabled!==!1),t("notif-morning-start",String(e.morningWeeklyGoals.startHour??5)),t("notif-morning-end",String(e.morningWeeklyGoals.endHour??12)),r("notif-morning-browser",e.morningWeeklyGoals.browser!==!1),r("notif-morning-telegram",!!e.morningWeeklyGoals.telegram),this.startEngine()}startEngine(){this.intervalId&&clearInterval(this.intervalId),this.intervalId=setInterval(()=>{this.checkScheduledReports().catch(e=>{console.warn("Scheduled report check error:",(e==null?void 0:e.message)||e)})},this.checkInterval),this.checkScheduledReports().catch(e=>{console.warn("Initial scheduled report check error:",(e==null?void 0:e.message)||e)})}saveSettings(){const e=Store.settings.notifications||{},t={...this._getDefaultSchedule(),...e.schedule||{}},r={daily:"",weekly:"",monthly:"",...e.lastSent||{}},s=e.morningWeeklyGoals||{enabled:!0,startHour:5,endHour:12,browser:!0,telegram:!1},i=d=>{const p=document.getElementById(d);return p?p.value.trim():""},o=(d,p=!1)=>{const y=document.getElementById(d);return y?y.checked:p},c=(d,p)=>{const y=document.getElementById(d);if(!y)return p;const v=parseInt(y.value,10);return Number.isNaN(v)?p:v},l=Math.max(0,Math.min(23,c("notif-morning-start",s.startHour??5)));let u=Math.max(1,Math.min(24,c("notif-morning-end",s.endHour??12)));u<=l&&(u=Math.min(24,l+1)),Store.settings.notifications={telegram:{token:i("webhook-telegram-token"),chatId:i("webhook-telegram-chat"),enabled:o("telegram-enabled",!0),alerts:o("telegram-rt-alerts",!0),daily:o("telegram-daily-rep",!0),weekly:o("telegram-weekly-rep",!0),monthly:o("telegram-monthly-rep",!1)},schedule:t,lastSent:r,thresholds:{lossWarn:c("notif-loss-thresh",50),ddWarn:c("notif-dd-thresh",70),streak:c("notif-streak-thresh",3),eqHigh:o("notif-eq-high",!0),psychEscalate:o("notif-psych-escalation",!0),tradeLogged:o("notif-trade-logged",!1)},morningWeeklyGoals:{enabled:o("notif-morning-enabled",s.enabled!==!1),startHour:l,endHour:u,browser:o("notif-morning-browser",s.browser!==!1),telegram:o("notif-morning-telegram",!!s.telegram)}},Store.save()}manualReport(e){this.saveSettings();const t=document.getElementById("notif-test-status");t&&(t.innerText="Generating...",t.style.color="var(--text)");const r=(s,i=!1)=>{t&&(t.innerText=s,t.style.color=i?"var(--danger)":"var(--success)"),i&&console.error(s)};try{e==="daily"?this.sendDailyReport(!0).then(()=>r("Daily report generated & sent")).catch(s=>r("Error: "+s.message,!0)):e==="weekly"?this.sendWeeklyReport(!0).then(()=>r("Weekly report generated & sent")).catch(s=>r("Error: "+s.message,!0)):e==="monthly"&&this.sendMonthlyReport(!0).then(()=>r("Monthly report generated & sent")).catch(s=>r("Error: "+s.message,!0))}catch(s){r("Error: "+s.message,!0)}}_getWeekBoundariesLocal(e=new Date){if(typeof window.getLocalWeekBoundaries=="function")return window.getLocalWeekBoundaries(e);const t=It(e)||new Date;t.setHours(0,0,0,0);const r=t.getDay(),s=r===0?-6:1-r,i=new Date(t);i.setDate(t.getDate()+s);const o=new Date(i);o.setDate(i.getDate()+6),o.setHours(23,59,59,999);const c=Math.max(1,Math.ceil((i.getTime()-new Date(i.getFullYear(),0,1).getTime())/864e5/7));return{monday:i,sunday:o,weekNum:c,key:Fr(i)}}_hasTelegramCredentials(e){var t,r,s;return!!((t=e==null?void 0:e.telegram)!=null&&t.enabled&&((r=e==null?void 0:e.telegram)!=null&&r.token)&&((s=e==null?void 0:e.telegram)!=null&&s.chatId))}_markReportSent(e,t){Store.settings.notifications&&(Store.settings.notifications.lastSent||(Store.settings.notifications.lastSent={daily:"",weekly:"",monthly:""}),Store.settings.notifications.lastSent[e]=t,typeof Store.save=="function"&&Store.save())}async _runDedupedReport(e,t,r){if(((Store.settings.notifications||{}).lastSent||{})[e]===t)return!1;const o=`${e}:${t}`;if(this._pendingReports.has(o))return!1;this._pendingReports.add(o);try{const c=await r();return c&&this._markReportSent(e,t),!!c}finally{this._pendingReports.delete(o)}}async checkScheduledReports(e=new Date){var o,c,l,u;const t=(o=Store.settings)==null?void 0:o.notifications;if(!t||!this._hasTelegramCredentials(t))return{daily:!1,weekly:!1,monthly:!1};const r={...this._getDefaultSchedule(),...t.schedule||{}},s=e.getHours()*60+e.getMinutes(),i={daily:!1,weekly:!1,monthly:!1};if((c=t.telegram)!=null&&c.daily){const d=Fr(e),p=tc(r.dailyTime,1260);s>=p&&(i.daily=await this._runDedupedReport("daily",d,()=>this.sendDailyReport(!1,e)))}if((l=t.telegram)!=null&&l.weekly){const d=Number.isInteger(r.weeklyDay)?r.weeklyDay:0,p=tc(r.weeklyTime,1200);if(e.getDay()===d&&s>=p){const y=this._getWeekBoundariesLocal(e).key;i.weekly=await this._runDedupedReport("weekly",y,()=>this.sendWeeklyReport(!1,e))}}if((u=t.telegram)!=null&&u.monthly){const d=Math.max(1,Math.min(28,parseInt(r.monthlyDay,10)||1)),p=tc(r.monthlyTime,480),y=Hd(e),v=e.getDate(),k=v===d&&s>=p,P=v>d;if(k||P){const C=new Date(e.getFullYear(),e.getMonth()-1,1,0,0,0,0),V=new Date(e.getFullYear(),e.getMonth(),0,23,59,59,999),O=(Store.trades||[]).some(x=>{if(!yn(x))return!1;const L=It(x.date);return L&&L>=C&&L<=V});(k||O)&&(i.monthly=await this._runDedupedReport("monthly",y,()=>this.sendMonthlyReport(!1,e)))}}return i}async handleJournalTradeTrigger(e,t=new Date){var o,c,l;const r=(o=Store.settings)==null?void 0:o.notifications;if(!r||!this._hasTelegramCredentials(r))return{weekly:!1,monthly:!1};const s={...this._getDefaultSchedule(),...r.schedule||{}},i={weekly:!1,monthly:!1};if((c=r.telegram)!=null&&c.weekly){const u=Number.isInteger(s.weeklyDay)?s.weeklyDay:0,d=this._getWeekBoundariesLocal(t),p=It(e==null?void 0:e.date),y=t.getDay()===u,v=!!(p&&p.getDay()===u&&this._getWeekBoundariesLocal(p).key===d.key);(y||v)&&(i.weekly=await this._runDedupedReport("weekly",d.key,()=>this.sendWeeklyReport(!1,t)))}if((l=r.telegram)!=null&&l.monthly){const u=Math.max(1,Math.min(28,parseInt(s.monthlyDay,10)||1)),d=Hd(t);t.getDate()===u&&(i.monthly=await this._runDedupedReport("monthly",d,()=>this.sendMonthlyReport(!1,t)))}return i}async doSend(e,t,r=!1){const s=Store.settings.notifications;let i=[];if(s.telegram.enabled&&s.telegram.token&&s.telegram.chatId&&(r||t.telegram)){const c=e("telegram");c&&(this.lastTelegramSent&&Date.now()-this.lastTelegramSent<1100&&await new Promise(l=>setTimeout(l,1100-(Date.now()-this.lastTelegramSent))),this.lastTelegramSent=Date.now(),i.push(this.postTelegram(s.telegram.token,s.telegram.chatId,c)))}if(i.length>0)try{const c=await Promise.allSettled(i);let l=[];for(let u of c)u.status==="rejected"&&(l.push(u.reason.message||u.reason),console.error("Notification delivery failed for a platform:",u.reason));if(l.length===i.length)throw new Error("All checks failed: "+l.join(" | "));return l.length>0&&console.warn("Some notifications failed: "+l.join(" | ")),!0}catch(c){throw console.error("Notification send error",c),c}else if(r)throw new Error("No notification platforms are fully configured (check URLs/Tokens).");return!1}async postTelegram(e,t,r){e=(e||"").trim().replace(/\s+/g,""),t=(t||"").trim();const s=e.toLowerCase().startsWith("bot")?e.substring(3):e;if(!s||!t)throw new Error("Telegram Bot Token and Chat ID are required. Please configure them in Settings > Webhooks & Alerts.");try{const o=typeof window.resolveApiUrl=="function"?window.resolveApiUrl("/api/telegram/send"):"/api/telegram/send",c=await fetch(o,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({token:s,chatId:t,text:r,parse_mode:"HTML"})});if(c.status!==404&&c.status!==405){const l=await c.json().catch(()=>({}));if(!c.ok||!l.ok)throw new Error(l.error||`Telegram API error (${c.status})`);return{ok:!0,result:l.result}}}catch(o){if(o.message&&!o.message.includes("Failed to fetch")&&!o.message.includes("404")&&!o.message.includes("405"))throw o;console.warn("Server relay unavailable, falling back to direct browser connection:",o.message)}const i=`https://api.telegram.org/bot${s}/sendMessage`;try{const o=new URLSearchParams;o.append("chat_id",t),o.append("text",r),o.append("parse_mode","HTML");let c;try{c=await fetch(i,{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:o});const l=await c.json().catch(()=>({}));if(!c.ok||!l.ok)throw new Error(l.description||`Telegram error (${c.status})`);return c}catch{const u=`${i}?chat_id=${encodeURIComponent(t)}&text=${encodeURIComponent(r)}&parse_mode=HTML`;if(c=await fetch(u).then(d=>d.json()).catch(()=>null),c&&c.ok)return c;throw new Error("Browser blocked direct connection to api.telegram.org (CORS/Adblocker). Please ensure you run with backend server or disable browser tracker blocker.")}}catch(o){throw new Error(`Telegram delivery failed: ${o.message||"Unknown error"}`)}}isSpam(e,t=5){const r=this.alertBackoff.get(e)||0,s=Date.now();return s-r<t*6e4?!0:(this.alertBackoff.set(e,s),!1)}dispatchLossWarning(e,t,r,s){var y;const i=Store.settings.notifications;if(this.isSpam("loss_warn_"+e.name,10))return;const o=Math.round(Math.min(1,Math.max(0,s))*10),c="█".repeat(o)+"░".repeat(10-o),l=Math.round(s*100),u=Math.max(0,r-Math.abs(t)).toFixed(2),d=[M("Account",ue(e.name).substring(0,16),32),M("Daily Loss So Far",`${t.toFixed(2)}R`,32),M("Daily Limit",`${r.toFixed(2)}R`,32),M("Risk Budget Used",`${l}%`,32),M("Remaining Allowance",`${u}R`,32)].join(`
`),p=v=>v==="discord"?{embeds:[{title:"⚠️ PORTFOLIO ALERT — DAILY LOSS WARNING",color:15158332,description:`**Account:** ${e.name}
**Loss So Far:** ${t.toFixed(2)}R of ${r.toFixed(2)}R Limit
**Used:** ${l}% [${c}]
**Remaining:** ${u}R

*Slow down. Protect your capital.*`}]}:`⚠️ <b>PORTFOLIO ALERT — DAILY LOSS WARNING</b>
<b>Account:</b> <code>${ue(e.name)}</code>
<b>Loss Today:</b> <code>${t.toFixed(2)}R</code> of <code>${r.toFixed(2)}R</code> (${l}% used)

<pre>
Risk Allowance Gauge
────────────────────────────────
[${c}] ${l}%

${d}
</pre>

<i>⚠️ Capital preservation protocol engaged. Review rule checklist before taking any further trades.</i>`;this.doSend(p,{telegram:(y=i.telegram)==null?void 0:y.alerts})}dispatchLossHit(e,t,r){var c;const s=Store.settings.notifications;if(this.isSpam("loss_hit_"+e.name,60))return;const i=[M("Account",ue(e.name).substring(0,16),32),M("Loss Incurred",`${t.toFixed(2)}R`,32),M("Loss Barrier",`${r.toFixed(2)}R (100%)`,32),M("Terminal Status","LOCKED",32),M("Reflection Protocol","MANDATORY",32)].join(`
`),o=l=>l==="discord"?{embeds:[{title:"🔴 TRADING HALT — DAILY LIMIT REACHED",color:15158332,description:`**Account:** ${e.name}
**Loss Incurred:** ${t.toFixed(2)}R (100% of ${r.toFixed(2)}R Limit)

Journal is locked. Complete reflection to unlock tomorrow.
**Stop. Breathe. Review.**`}]}:`🔴 <b>TRADING HALT — DAILY LIMIT REACHED</b>
<b>Account:</b> <code>${ue(e.name)}</code>
<b>Loss Incurred:</b> <code>${t.toFixed(2)}R</code> (100% of Limit)

<pre>
Terminal Protocol Status
────────────────────────────────
${i}
</pre>

<blockquote expandable>
<b>Discipline Directive:</b>
Terminal is locked for the remainder of today. Step away from the screens immediately. Complete your trade reflection before trading tomorrow.
</blockquote>`;this.doSend(o,{telegram:(c=s.telegram)==null?void 0:c.alerts})}dispatchEquityHigh(e,t,r){var u;const s=Store.settings.notifications;if(!s.thresholds.eqHigh)return;const i=t-r,o=i/r*100,c=[M("Account",ue(e.name).substring(0,16),32),M("New Peak Equity",`$${Number(t).toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2})}`,32),M("Previous Peak",`$${Number(r).toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2})}`,32),M("Milestone Gain",`+$${Number(i).toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2})}`,32),M("Net Growth",`+${o.toFixed(2)}%`,32)].join(`
`),l=d=>d==="discord"?{embeds:[{title:"🏆 PORTFOLIO MILESTONE — NEW EQUITY HIGH",color:3066993,description:`**Account:** ${e.name}
**New High:** $${parseFloat(t).toLocaleString()}
**Gain:** +$${parseFloat(i).toLocaleString()} (+${o.toFixed(2)}%)

*Keep building. Stay disciplined.*`}]}:`🏆 <b>PORTFOLIO MILESTONE — NEW EQUITY HIGH</b>
<b>Account:</b> <code>${ue(e.name)}</code>

<pre>
Milestone Audit Ledger
────────────────────────────────
${c}
</pre>

<i>Discipline creates compounding. Maintain your system execution rules.</i>`;this.doSend(l,{telegram:(u=s.telegram)==null?void 0:u.alerts})}dispatchConsecutiveLoss(e,t){var c;const r=Store.settings.notifications;if(this.isSpam("streak_loss",30))return;const s=t.reduce((l,u)=>l+(parseFloat(u.r)||0),0),i=t.slice(0,5).map(l=>{const u=ue(l.asset||"Asset").substring(0,14),d=(parseFloat(l.r)||0).toFixed(2)+"R";return M(`❌ ${u}`,d,32)}).join(`
`),o=l=>l==="discord"?{embeds:[{title:"🔁 DISCIPLINE ALERT — LOSS STREAK DETECTED",color:15158332,description:`**Consecutive Losses:** ${e}
**Total Streak Loss:** ${s.toFixed(2)}R
**Psychological Risk:** ELEVATED

*Consider stepping away. Review before next trade.*`}]}:`🔁 <b>DISCIPLINE ALERT — LOSS STREAK DETECTED</b>
<b>Streak Count:</b> <code>${e} Consecutive Losses</code>

<pre>
Recent Loss Executions
────────────────────────────────
${i}
────────────────────────────────
${M("Total Streak Loss",`${s.toFixed(2)}R`,32)}
${M("Psychological State","ELEVATED RISK",32)}
</pre>

<i>High risk of revenge trading or tilt. Step away from charts for minimum 30 minutes.</i>`;this.doSend(o,{telegram:(c=r.telegram)==null?void 0:c.alerts})}dispatchPsychEscalation(e,t,r){var u;const s=Store.settings.notifications;if(!s.thresholds.psychEscalate||this.isSpam("psych_escalation",60))return;const i=e==="CRITICAL",o=i?"🔴 CRITICAL":"🟠 ELEVATED",c=[M("Mental Risk Level",e,32),M("Negative State Ratio",`${t}%`,32),M("Consecutive Losses",`${r} trades`,32),M("Risk Protocol",i?"HALT TRADING":"HALVE POSITION SIZE",32)].join(`
`),l=d=>d==="discord"?{embeds:[{title:"🧠 PSYCH RISK ESCALATION",color:i?15158332:15105570,description:`**Risk Level:** ${o}
**Negative Emotions:** ${t}%
**Losses:** ${r}

*Your mental state is affecting performance. Step back.*`}]}:`🧠 <b>PSYCHOLOGICAL RISK ESCALATION</b>
<b>Current State:</b> ${o}

<pre>
Behavioral Risk Assessment
────────────────────────────────
${c}
</pre>

<blockquote expandable>
<b>Psychology Coach Directive:</b>
Emotional equilibrium compromised. Do not attempt to make back losses in this state. Close terminal and reset mental state.
</blockquote>`;this.doSend(l,{telegram:(u=s.telegram)==null?void 0:u.alerts})}dispatchTradeLogged(e){var _;const t=Store.settings.notifications;if(!t.thresholds.tradeLogged)return;const r=parseFloat(e.r)||0,s=parseFloat(e.pnlAmount)||0,i=r>=0?"+":"",o=s>=0?"+":"",c=Store.accounts.find(E=>String(E.id)===String(e.accountId)),l=c?c.name:"Portfolio Account",u=c&&c.balance?`$${parseFloat(c.balance).toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2})}`:"-",p=(e.tradeDirection||e.tradeType||e.direction||"").toLowerCase().includes("long")?"🟢 LONG":"🔴 SHORT",y=r>0?"🟢":r<0?"🔴":"⚪",v=e.entryPrice?Number(e.entryPrice).toFixed(e.entryPrice<10?4:2):"-",k=e.exitPrice?Number(e.exitPrice).toFixed(e.exitPrice<10?4:2):"-",P=e.riskAmount?`$${Number(e.riskAmount).toFixed(0)}`:e.riskPercent?`${e.riskPercent}%`:"-",C=e.plannedR?`1:${Number(e.plannedR).toFixed(1)}`:"-",V=e.ruleAdherence==="Yes"?"✓ PASS (100%)":"✕ DEVIATION",O=e.session||"London Open",x=e.setupType||"Liquidity Sweep",L=e.preEmotion||"Calm",q=e.duringEmotion||"Disciplined",j=[M("Execution Type",`${e.executionType||"Market"} (${O})`,32),M("Strategy Setup",x,32),M("Entry → Exit",`${v} → ${k}`,32),M("Risk / Planned R",`${P} (${C})`,32),M("Rule Adherence",V,32),M("Psych State",`${L} / ${q}`,32)].join(`
`);let T="";e.postNotes&&e.postNotes.trim()&&(T=`
<blockquote expandable>
<b>Trade Reflection:</b>
${ue(e.postNotes.trim())}
</blockquote>`);const g=E=>E==="discord"?{embeds:[{title:`📝 TRADE EXECUTION TICKET — ${e.asset}`,color:r>=0?3066993:15158332,description:`**Direction:** ${e.tradeDirection||"Long"}
**Result:** ${i}${r.toFixed(2)}R (${o}$${s.toFixed(2)})
**Grade:** ${e.tradeGrade||"-"}
**Setup:** ${x}
**Account:** ${l}

*${e.postNotes||""}*`,footer:{text:"QuantEdge Portfolio OS"}}]}:`📝 <b>TRADE EXECUTION TICKET</b>
<b>Asset:</b> <code>${ue(e.asset)}</code>  •  <b>Direction:</b> ${p}
<b>Result:</b> ${y} <code>${i}${r.toFixed(2)}R</code> (<code>${o}$${s.toFixed(2)}</code>)  •  <b>Grade:</b> <code>${ue(e.tradeGrade||"A")}</code>

<pre>
Execution Audit Ledger          Value
────────────────────────────────
${j}
</pre>`+T+`

💼 <b>Account:</b> ${ue(l)}  •  <b>Balance:</b> <code>${u}</code>`;this.doSend(g,{telegram:(_=t.telegram)==null?void 0:_.alerts})}dispatchDrawdownWarning(e,t,r,s){var y;const i=Store.settings.notifications;if(this.isSpam("dd_warn_"+e.name,60))return;const o=Math.round(Math.min(1,Math.max(0,s))*10),c="█".repeat(o)+"░".repeat(10-o),l=Math.max(0,r-t),u=Math.round(s*100),d=[M("Account",ue(e.name).substring(0,16),32),M("Current Drawdown",`$${t.toFixed(2)}`,32),M("Max Permitted DD",`$${r.toFixed(2)}`,32),M("DD Consumption",`${u}%`,32),M("Remaining Buffer",`$${l.toFixed(2)}`,32)].join(`
`),p=v=>v==="discord"?{embeds:[{title:"⚠️ DRAWDOWN WARNING",color:15158332,description:`**Account:** ${e.name}
**Current DD:** $${t.toFixed(2)} of $${r.toFixed(2)}
**Used:** ${u}% [${c}]
**Remaining:** $${l.toFixed(2)}

*Reduce position size immediately.*`}]}:`⚠️ <b>PORTFOLIO ALERT — DRAWDOWN WARNING</b>
<b>Account:</b> <code>${ue(e.name)}</code>
<b>Drawdown:</b> <code>$${t.toFixed(2)}</code> of <code>$${r.toFixed(2)}</code> (${u}% used)

<pre>
Drawdown Utilization Gauge
────────────────────────────────
[${c}] ${u}%

${d}
</pre>

<i>Approaching maximum trailing drawdown barrier. Halve position risk immediately.</i>`;this.doSend(p,{telegram:(y=i.telegram)==null?void 0:y.alerts})}dispatchPropTargetReached(e,t,r){var p;const s=Store.settings.notifications;if(this.isSpam("prop_target_"+e.name,1440))return;const i=parseFloat(e.balance)||1e5,o=r/i*100,c=t/i*100;let l=0;e.highWaterMark&&e.currentBalance&&(l=Math.max(0,(e.highWaterMark-e.currentBalance)/i*100));const u=[M("Account",ue(e.name).substring(0,16),32),M("Challenge Phase",e.phase||"Phase 1",32),M("Target Objective",`${o.toFixed(1)}% ($${r.toFixed(0)})`,32),M("Achieved Gain",`${c.toFixed(1)}% ($${t.toFixed(0)})`,32),M("Max DD Incurred",`${l.toFixed(1)}% of ${e.maxTotalDD||10}%`,32),M("Compliance Status","100% PASS",32)].join(`
`),d=y=>y==="discord"?{embeds:[{title:"🎯 PROP CHALLENGE TARGET REACHED!",color:3066993,description:`**Account:** ${e.firm?e.firm+" — ":""}${e.name}
**Phase:** ${e.phase}
**Achieved:** ${c.toFixed(1)}% ($${t.toFixed(2)})

*Submit for verification.*`}]}:`🎯 <b>PROP FIRM MILESTONE — TARGET REACHED!</b>
<b>Account:</b> <code>${e.firm?ue(e.firm)+" — ":""}${ue(e.name)}</code>

<pre>
Challenge Objective Audit
────────────────────────────────
${u}
</pre>

<i>Congratulations! Target reached with full rule compliance. Ready for phase verification submission.</i>`;this.doSend(d,{telegram:(p=s.telegram)==null?void 0:p.alerts})}async sendDailyReport(e=!1,t=new Date){var L,q,j,T;const r=t instanceof Date?t:new Date(t),s=Fr(r);let i=Store.trades.filter(g=>{if(!yn(g))return!1;const _=It(g.date);return _&&Fr(_)===s});const c={telegram:(L=Store.settings.notifications.telegram)==null?void 0:L.daily};let l=!1;if(i.length===0){if(!e){const g=()=>`📊 <b>DAILY EXECUTIVE DIGEST</b>
📅 <b>Date:</b> <code>${s}</code>

<i>No trades logged today. Rest and risk avoidance noted.</i>`;return await this.doSend(g,c,!1)}l=!0,i=[{asset:"EUR/USD",tradeDirection:"Long",r:2.1,pnlAmount:630,setupType:"Liquidity Sweep",session:"London Open",ruleAdherence:"Yes",qualityScore:9,tradeGrade:"A+",accountId:(q=Store.accounts[0])==null?void 0:q.id},{asset:"GBP/USD",tradeDirection:"Short",r:1.4,pnlAmount:420,setupType:"FVG Retest",session:"London Open",ruleAdherence:"Yes",qualityScore:9,tradeGrade:"A",accountId:(j=Store.accounts[0])==null?void 0:j.id},{asset:"XAU/USD",tradeDirection:"Long",r:-.7,pnlAmount:-210,setupType:"Breakout",session:"NY Open",ruleAdherence:"Yes",qualityScore:8,tradeGrade:"B",accountId:(T=Store.accounts[0])==null?void 0:T.id}]}const u=nc(i),d=s,p=u.totalR>0?"🟢 PROFITABLE":u.totalR<0?"🔴 DRAWDOWN":"⚪ BREAKEVEN",y=u.totalPnl>=0?"+":"",v=u.totalR>=0?"+":"",k=[M("Trades Logged",`${u.totalTrades} (${u.wins}W - ${u.losses}L)`,32),M("Win Rate",`${u.winRate.toFixed(1)}%`,32),M("Net P&L",`${y}$${u.totalPnl.toFixed(2)}`,32),M("Net R-Multiple",`${v}${u.totalR.toFixed(2)}R`,32),M("Profit Factor",`${u.profitFactor.toFixed(2)}`,32),M("Expectancy / Tr",`${u.expectancyR>=0?"+":""}${u.expectancyR.toFixed(2)}R`,32),M("Sharpe Ratio",`${u.sharpeRatio.toFixed(2)}`,32),M("Rule Adherence",`${u.ruleAdherenceRate.toFixed(1)}% (${u.ruleAdherentCount}/${u.totalTrades})`,32),M("Psych Stability",`${u.psychStability.toFixed(1)} / 10`,32),M("Avg Quality",`${u.avgQuality.toFixed(1)} / 10`,32)].join(`
`),P=Object.keys(u.accountMap).map(g=>{const _=Store.accounts.find(w=>String(w.id)===String(g)),E=_?_.name.substring(0,14):"Account",I=u.accountMap[g],S=(I.pnl>=0?"+":"")+"$"+Number(I.pnl).toFixed(0);return M(E,`${S} (${I.count}T)`,32)}).slice(0,3).join(`
`),C=Object.keys(u.setupMap).map(g=>{const _=u.setupMap[g],E=g.substring(0,16),I=(_.r>=0?"+":"")+Number(_.r).toFixed(1)+"R";return M(E,`${_.count}T  ${I}`,32)}).slice(0,4).join(`
`),V=u.bestTrade?`${ue(u.bestTrade.asset)} (+${Number(u.bestTrade.r).toFixed(2)}R)`:"-",O=u.worstTrade?`${ue(u.worstTrade.asset)} (${Number(u.worstTrade.r).toFixed(2)}R)`:"-",x=g=>g==="discord"?{embeds:[{title:`📊 DAILY EXECUTIVE DIGEST — ${d}`,color:u.totalR>=0?3066993:15158332,description:`**Trades:** ${u.totalTrades} (${u.wins}W / ${u.losses}L)
**Win Rate:** ${u.winRate.toFixed(1)}%
**Net P&L:** ${y}$${u.totalPnl.toFixed(2)} (${v}${u.totalR.toFixed(2)}R)
**Profit Factor:** ${u.profitFactor.toFixed(2)}
**Sharpe Ratio:** ${u.sharpeRatio.toFixed(2)}
**Rule Adherence:** ${u.ruleAdherenceRate.toFixed(1)}%`,footer:{text:"QuantEdge Portfolio OS"}}]}:`📊 <b>DAILY EXECUTIVE DIGEST</b>
📅 <b>Date:</b> <code>${d}</code>  •  <b>Status:</b> ${p}${l?" <i>(Demo)</i>":""}

<pre>
Performance Metric             Value
────────────────────────────────
${k}
</pre>

`+(P?`<b>💼 Portfolio Accounts:</b>
<pre>
Account                  P&L (Trades)
────────────────────────────────
${P}
</pre>

`:"")+(C?`<b>🎯 Strategy Breakdown:</b>
<pre>
Setup Strategy            Exec   Net R
────────────────────────────────
${C}
</pre>

`:"")+`<b>⚡ Top Execution:</b> <code>${V}</code>
<b>⚠️ Drawdown Trade:</b> <code>${O}</code>

<i>QuantEdge Portfolio OS  •  Institutional Risk Engine</i>`;return await this.doSend(x,c,e)}async sendWeeklyReport(e=!1,t=new Date){var q,j,T,g,_,E;const r=this._getWeekBoundariesLocal(t),s=r.monday,i=r.sunday;let o=Store.trades.filter(I=>{if(!yn(I))return!1;const S=It(I.date);return S&&S>=s&&S<=i});const l={telegram:(q=Store.settings.notifications.telegram)==null?void 0:q.weekly};let u=!1;if(o.length===0){if(!e){const I=()=>`📈 <b>WEEKLY STRATEGIC REVIEW</b> — Week ${r.weekNum}

<i>0 trades logged this week. Capital preserved.</i>`;return await this.doSend(I,l,!1)}u=!0,o=[{asset:"EUR/USD",tradeDirection:"Long",r:2.4,pnlAmount:720,setupType:"Liquidity Sweep",session:"London Open",ruleAdherence:"Yes",qualityScore:9,tradeGrade:"A+",accountId:(j=Store.accounts[0])==null?void 0:j.id},{asset:"XAU/USD",tradeDirection:"Short",r:3.1,pnlAmount:930,setupType:"FVG Inversion",session:"NY Open",ruleAdherence:"Yes",qualityScore:10,tradeGrade:"A+",accountId:(T=Store.accounts[0])==null?void 0:T.id},{asset:"BTC/USD",tradeDirection:"Long",r:1.8,pnlAmount:540,setupType:"Liquidity Sweep",session:"Asian Range",ruleAdherence:"Yes",qualityScore:8,tradeGrade:"A",accountId:(g=Store.accounts[0])==null?void 0:g.id},{asset:"GBP/USD",tradeDirection:"Short",r:-1,pnlAmount:-300,setupType:"Break & Retest",session:"London Open",ruleAdherence:"No",qualityScore:6,tradeGrade:"C",accountId:(_=Store.accounts[0])==null?void 0:_.id},{asset:"EUR/USD",tradeDirection:"Long",r:1.5,pnlAmount:450,setupType:"Liquidity Sweep",session:"London Open",ruleAdherence:"Yes",qualityScore:9,tradeGrade:"A",accountId:(E=Store.accounts[0])==null?void 0:E.id}]}const d=nc(o),p=d.totalR>=0?"+":"",y=d.totalPnl>=0?"+":"",v=d.totalR>0?"🟢 PROFITABLE":d.totalR<0?"🔴 DRAWDOWN":"⚪ BREAKEVEN",k=s.toLocaleDateString(void 0,{month:"short",day:"numeric"}),P=i.toLocaleDateString(void 0,{month:"short",day:"numeric",year:"numeric"}),C=[M("Total Executions",`${d.totalTrades} (${d.wins}W - ${d.losses}L)`,32),M("Win Rate",`${d.winRate.toFixed(1)}%`,32),M("Gross Profit",`+$${d.grossProfit.toFixed(2)}`,32),M("Gross Loss",`-$${d.grossLoss.toFixed(2)}`,32),M("Net Realized PnL",`${y}$${d.totalPnl.toFixed(2)}`,32),M("Net R-Multiple",`${p}${d.totalR.toFixed(2)}R`,32),M("Profit Factor",`${d.profitFactor.toFixed(2)}`,32),M("Expectancy (R)",`${d.expectancyR>=0?"+":""}${d.expectancyR.toFixed(2)}R / trade`,32),M("Expectancy ($)",`${d.expectancyPnl>=0?"+":""}$${d.expectancyPnl.toFixed(2)} / tr`,32),M("Trade Sharpe Ratio",`${d.sharpeRatio.toFixed(2)}`,32),M("Rule Adherence",`${d.ruleAdherenceRate.toFixed(1)}% (${d.ruleAdherentCount}/${d.totalTrades})`,32),M("Plan Violations",`${d.ruleViolations} broken rules`,32),M("Psych Rating",`${d.psychStability.toFixed(1)} / 10`,32),M("Execution Quality",`${d.avgQuality.toFixed(1)} / 10`,32)].join(`
`),V=Object.keys(d.sessionMap).map(I=>{const S=d.sessionMap[I],w=I.substring(0,16),ee=(S.r>=0?"+":"")+Number(S.r).toFixed(1)+"R";return M(w,`${S.count}T  ${ee}`,32)}).slice(0,4).join(`
`),O=Object.keys(d.setupMap).map(I=>{const S=d.setupMap[I],w=I.substring(0,16),ee=(S.r>=0?"+":"")+Number(S.r).toFixed(1)+"R";return M(w,`${S.count}T  ${ee}`,32)}).slice(0,4).join(`
`),x=d.ruleAdherenceRate>=90?"Discipline benchmark satisfied (&gt;90%). System expectancy remains positive. Continue executing the plan without parameter drift.":"Caution: Rule deviations observed. Tighten pre-flight checklist before entering new positions next week.",L=I=>I==="discord"?{embeds:[{title:`📈 WEEKLY STRATEGIC REVIEW — Week ${r.weekNum}`,color:d.totalR>=0?3066993:15158332,description:`**Period:** ${k} – ${P}
**Net Gain:** ${p}${d.totalR.toFixed(2)}R (${y}$${d.totalPnl.toFixed(2)})
**Win Rate:** ${d.winRate.toFixed(1)}% (${d.totalTrades} Trades)
**Profit Factor:** ${d.profitFactor.toFixed(2)}
**Sharpe Ratio:** ${d.sharpeRatio.toFixed(2)}
**Adherence:** ${d.ruleAdherenceRate.toFixed(1)}%`,footer:{text:"QuantEdge Portfolio OS"}}]}:`📈 <b>WEEKLY STRATEGIC REVIEW</b>
📅 <b>Week ${r.weekNum}</b> (${k} – ${P})
<b>Performance:</b> ${v} <code>${p}${d.totalR.toFixed(2)}R</code> (<code>${y}$${d.totalPnl.toFixed(2)}</code>)${u?" <i>(Demo)</i>":""}

<pre>
Institutional Metric             Value
────────────────────────────────
${C}
</pre>

`+(V?`<b>🏛 Session Breakdown:</b>
<pre>
Session                   Exec   Net R
────────────────────────────────
${V}
</pre>

`:"")+(O?`<b>🎯 Top Strategy Setups:</b>
<pre>
Setup Type                Exec   Net R
────────────────────────────────
${O}
</pre>

`:"")+`<blockquote expandable>
<b>Strategic Recommendation:</b>
${x}
</blockquote>

<i>QuantEdge Portfolio OS  •  Weekly Intelligence Protocol</i>`;return await this.doSend(L,l,e)}async sendMonthlyReport(e=!1,t=new Date){var j,T,g,_,E,I,S;const r=t instanceof Date?t:new Date(t),s=new Date(r.getFullYear(),r.getMonth()-1,1,0,0,0,0),i=new Date(r.getFullYear(),r.getMonth(),0,23,59,59,999);let o=s,c=Store.trades.filter(w=>{if(!yn(w))return!1;const ee=It(w.date);return ee&&ee>=s&&ee<=i});if(c.length===0){const w=new Date(r.getFullYear(),r.getMonth(),1,0,0,0,0),ee=new Date(r.getFullYear(),r.getMonth()+1,0,23,59,59,999),Ee=Store.trades.filter(ne=>{if(!yn(ne))return!1;const Pt=It(ne.date);return Pt&&Pt>=w&&Pt<=ee});(Ee.length>0||e)&&(c=Ee,o=w)}const u={telegram:(j=Store.settings.notifications.telegram)==null?void 0:j.monthly};let d=!1;if(c.length===0){if(!e){const w=()=>`📅 <b>MONTHLY PERFORMANCE AUDIT</b>

<i>0 trades logged for this monthly audit cycle.</i>`;return await this.doSend(w,u,!1)}d=!0,c=[{asset:"XAU/USD",tradeDirection:"Long",r:4.2,pnlAmount:1260,setupType:"Liquidity Sweep",session:"London Open",ruleAdherence:"Yes",qualityScore:10,tradeGrade:"A+",accountId:(T=Store.accounts[0])==null?void 0:T.id},{asset:"EUR/USD",tradeDirection:"Short",r:2.1,pnlAmount:630,setupType:"FVG Retest",session:"NY Open",ruleAdherence:"Yes",qualityScore:9,tradeGrade:"A",accountId:(g=Store.accounts[0])==null?void 0:g.id},{asset:"BTC/USD",tradeDirection:"Long",r:3.5,pnlAmount:1050,setupType:"Range Breakout",session:"Asian Range",ruleAdherence:"Yes",qualityScore:9,tradeGrade:"A",accountId:(_=Store.accounts[0])==null?void 0:_.id},{asset:"GBP/USD",tradeDirection:"Long",r:-1,pnlAmount:-300,setupType:"Breakout",session:"London Open",ruleAdherence:"Yes",qualityScore:8,tradeGrade:"B",accountId:(E=Store.accounts[0])==null?void 0:E.id},{asset:"XAU/USD",tradeDirection:"Short",r:1.8,pnlAmount:540,setupType:"FVG Inversion",session:"NY Open",ruleAdherence:"Yes",qualityScore:9,tradeGrade:"A",accountId:(I=Store.accounts[0])==null?void 0:I.id},{asset:"EUR/USD",tradeDirection:"Long",r:-.8,pnlAmount:-240,setupType:"Liquidity Sweep",session:"London Open",ruleAdherence:"No",qualityScore:7,tradeGrade:"C",accountId:(S=Store.accounts[0])==null?void 0:S.id}]}const p=nc(c),y=p.totalR>=0?"+":"",v=p.totalPnl>=0?"+":"",k=p.totalR>0?"🟢 PROFITABLE":p.totalR<0?"🔴 DRAWDOWN":"⚪ BREAKEVEN",P=o.toLocaleString("default",{month:"long",year:"numeric"}),C=p.avgLossR>0?(p.avgWinR/p.avgLossR).toFixed(2):p.avgWinR>0?"99.9":"0.00",V=[M("Monthly Executions",`${p.totalTrades} (${p.wins}W - ${p.losses}L)`,32),M("Win Rate",`${p.winRate.toFixed(1)}%`,32),M("Gross Profit",`+$${p.grossProfit.toFixed(2)}`,32),M("Gross Loss",`-$${p.grossLoss.toFixed(2)}`,32),M("Net Realized PnL",`${v}$${p.totalPnl.toFixed(2)}`,32),M("Net R-Multiple",`${y}${p.totalR.toFixed(2)}R`,32),M("Profit Factor",`${p.profitFactor.toFixed(2)}`,32),M("Payoff Ratio (W/L)",`${C}`,32),M("Expectancy / Trade",`${p.expectancyR>=0?"+":""}${p.expectancyR.toFixed(2)}R`,32),M("Annualized Sharpe",`${p.sharpeRatio.toFixed(2)}`,32),M("Rule Adherence",`${p.ruleAdherenceRate.toFixed(1)}% (${p.ruleAdherentCount}/${p.totalTrades})`,32),M("Plan Violations",`${p.ruleViolations} broken rules`,32),M("Psych Health Index",`${p.psychStability.toFixed(1)} / 10`,32),M("Average Quality",`${p.avgQuality.toFixed(1)} / 10`,32)].join(`
`),O=Object.keys(p.assetMap).map(w=>{const ee=p.assetMap[w],Ee=w.substring(0,14),ne=(ee.pnl>=0?"+":"")+"$"+Number(ee.pnl).toFixed(0);return M(Ee,`${ee.count}T  ${ne}`,32)}).slice(0,4).join(`
`),x=p.bestTrade?`${ue(p.bestTrade.asset)} (+${Number(p.bestTrade.r).toFixed(2)}R)`:"-",L=p.worstTrade?`${ue(p.worstTrade.asset)} (${Number(p.worstTrade.r).toFixed(2)}R)`:"-",q=w=>w==="discord"?{embeds:[{title:`🏛 MONTHLY PERFORMANCE AUDIT — ${P}`,color:p.totalR>=0?3066993:15158332,description:`**Return:** ${y}${p.totalR.toFixed(2)}R (${v}$${p.totalPnl.toFixed(2)})
**Trades:** ${p.totalTrades} (${p.wins}W / ${p.losses}L)
**Profit Factor:** ${p.profitFactor.toFixed(2)}
**Sharpe Ratio:** ${p.sharpeRatio.toFixed(2)}
**Adherence:** ${p.ruleAdherenceRate.toFixed(1)}%`,footer:{text:"QuantEdge Portfolio OS"}}]}:`🏛 <b>MONTHLY PERFORMANCE AUDIT</b>
📅 <b>Month:</b> ${P}  •  <b>Outcome:</b> ${k}${d?" <i>(Demo)</i>":""}
<b>Net Realized PnL:</b> <code>${v}$${p.totalPnl.toFixed(2)}</code> (<code>${y}${p.totalR.toFixed(2)}R</code>)

<pre>
Portfolio Ledger Audit          Value
────────────────────────────────
${V}
</pre>

`+(O?`<b>🌐 Asset Performance Breakdown:</b>
<pre>
Instrument                Exec   Net PnL
────────────────────────────────
${O}
</pre>

`:"")+`<b>🏆 Best Trade:</b> <code>${x}</code>
<b>📉 Largest Loss:</b> <code>${L}</code>

<blockquote expandable>
<b>Executive Audit Summary:</b>
Monthly risk distribution executed with ${p.ruleAdherenceRate.toFixed(1)}% adherence to system rules. Risk of ruin remained controlled with a Sharpe ratio of ${p.sharpeRatio.toFixed(2)} and profit factor of ${p.profitFactor.toFixed(2)}.
</blockquote>

<i>QuantEdge Portfolio OS  •  Monthly Capital Audit</i>`;return await this.doSend(q,u,e)}async dispatchMorningWeeklyGoalsReminder(e={},t=!1){var k;const r=Store.settings.notifications||{},s=e.todayYmd||new Date().toISOString().split("T")[0];if(!t&&this.isSpam("morning_weekly_goals_"+s,720))return;const i=Array.isArray(e.goals)?e.goals:[],o=i.filter(P=>P.completed).length,c=e.weekLabel||"Current Week",l=e.weekNum?`Week ${e.weekNum}`:"Weekly Check-In",u=e.weeklyPlan||null,d=e.reviewFocus||"",p=i.length>0?i.slice(0,8).map(P=>`${P.completed?"✅":"⬜"} ${ue(P.text)}`).join(`
`):"No weekly goals added yet — define your key weekly targets during morning planning.",y=[];u!=null&&u.bias&&y.push(`Bias: <code>${ue(u.bias)}</code>`),u!=null&&u.focusPairs&&y.push(`Pairs: <code>${ue(u.focusPairs)}</code>`),u!=null&&u.ruleNote&&y.push(`Rule: ${ue(u.ruleNote)}`),d&&y.push(`Prior Review Focus: ${ue(d)}`);const v=P=>P==="discord"?{embeds:[{title:`☀️ MORNING PLANNING CHECK-IN — ${l}`,color:3447003,description:`**Period:** ${c}
**Weekly Goals:** ${o}/${i.length} completed

${p}`,footer:{text:"QuantEdge Portfolio OS"}}]}:`☀️ <b>MORNING DAILY PLANNING CHECK-IN</b>
📅 <b>${ue(l)}</b> (${ue(c)})
🎯 <b>Weekly Goals Progress:</b> <code>${o} / ${i.length}</code>

${p}
`+(y.length?`
<b>🧭 Weekly Plan Alignment:</b>
${y.join(`
`)}
`:"")+`
<i>Review your weekly goals before setting today's Daily Trading Plan.</i>`;await this.doSend(v,{telegram:!!((k=r.morningWeeklyGoals)!=null&&k.telegram)},t)}test(e){var s,i,o,c,l;this.saveSettings();const t=document.getElementById("notif-test-status");t&&(t.innerText="Dispatching test to Telegram...",t.style.color="#38bdf8");const r=(u,d=!1)=>{t&&(t.innerText=u,t.style.color=d?"#ef4444":"#10b981"),d&&console.error(u)};try{if(e==="alert"){const u={asset:"EUR/USD",tradeDirection:"Long",executionType:"Market",session:"London Open",setupType:"Liquidity Sweep",entryPrice:1.0845,exitPrice:1.0869,riskAmount:300,plannedR:3,r:2.4,pnlAmount:720,tradeGrade:"A+",ruleAdherence:"Yes",preEmotion:"Calm",duringEmotion:"Disciplined",postNotes:"Clean M5 liquidity sweep of Asian session highs followed by strong displacement. Target reached at next liquidity pool.",accountId:(s=Store.accounts[0])==null?void 0:s.id},d=(o=(i=Store.settings.notifications)==null?void 0:i.thresholds)==null?void 0:o.tradeLogged;(c=Store.settings.notifications)!=null&&c.thresholds&&(Store.settings.notifications.thresholds.tradeLogged=!0),this.dispatchTradeLogged(u),(l=Store.settings.notifications)!=null&&l.thresholds&&(Store.settings.notifications.thresholds.tradeLogged=d),r("✓ Test Trade Ticket delivered to Telegram!")}else if(e==="daily")this.sendDailyReport(!0).then(()=>r("✓ Test Daily Report delivered to Telegram!")).catch(u=>r("✕ Telegram Error: "+(u.message||u),!0));else if(e==="weekly")this.sendWeeklyReport(!0).then(()=>r("✓ Test Weekly Review delivered to Telegram!")).catch(u=>r("✕ Telegram Error: "+(u.message||u),!0));else if(e==="monthly")this.sendMonthlyReport(!0).then(()=>r("✓ Test Monthly Audit delivered to Telegram!")).catch(u=>r("✕ Telegram Error: "+(u.message||u),!0));else if(e==="morning"){const u=typeof window.getWeeklyPlanningContext=="function"?window.getWeeklyPlanningContext():{todayYmd:new Date().toISOString().split("T")[0],goals:Store.weeklyGoals||[]};this.dispatchMorningWeeklyGoalsReminder(u,!0).then(()=>r("✓ Morning Weekly Goals check-in delivered to Telegram!")).catch(d=>r("✕ Telegram Error: "+(d.message||d),!0))}}catch(u){r("✕ Error: "+(u.message||u),!0)}}preview(){alert(`PREVIEW: Telegram Structured Card

📝 TRADE EXECUTION TICKET
Asset: EUR/USD  •  Direction: 🟢 LONG
Result: 🟢 +2.40R (+$720.00)  •  Grade: A+

Execution Audit Ledger          Value
────────────────────────────────
Execution Type     Market (London Open)
Strategy Setup     Liquidity Sweep
Entry → Exit       1.0845 → 1.0869
Risk / Planned R   $300 (1:3.0)
Rule Adherence     ✓ PASS (100%)
Psych State        Calm / Disciplined

Reflection (Expandable Quote):
Clean M5 liquidity sweep of Asian session highs.

Account: Apex Prop #1  •  Balance: $52,420.00`)}}window.NotificationEngine=new iA;window.saveNotificationSettings=function(){window.NotificationEngine.saveSettings(),document.getElementById("notif-test-status").innerText="Settings saved ✓",document.getElementById("notif-test-status").style.color="var(--success)",setTimeout(()=>{document.getElementById("notif-test-status").innerText=""},3e3)};window.addEventListener("DOMContentLoaded",()=>{setTimeout(()=>{window.NotificationEngine.init()},500)});window.evaluateRealTimeAlerts=function(n){if(!window.NotificationEngine||!yn(n))return;const e=window.NotificationEngine;if(!Store.settings.notifications)return;const t=Store.settings.notifications,r=Store.accounts.find(x=>String(x.id)===String(n.accountId));if(!r)return;const s=Fr(It(n.date)||new Date),o=Store.trades.filter(x=>yn(x)&&String(x.accountId)===String(r.id)&&Fr(It(x.date)||x.date)===s).reduce((x,L)=>x+(parseFloat(L.r)||0),0),c=Store.settings.dailyLossLimitR||3;if(o<0){const x=Math.abs(o),L=x/c,q=(t.thresholds.lossWarn||50)/100;x>=c?e.dispatchLossHit(r,o,c):L>=q&&e.dispatchLossWarning(r,o,c,L)}const l=Store.trades.filter(x=>yn(x)&&String(x.accountId)===String(r.id));let u=0,d=[];for(let x of l){let L=parseFloat(x.r)||0;if(L<0||x.result==="Loss")u++,d.push(x);else if(L>0)break}const p=t.thresholds.streak||3;u>=p&&e.dispatchConsecutiveLoss(u,d);let y=l.reduce((x,L)=>x+(parseFloat(L.pnlAmount)||0),0),v=parseFloat(r.balance||0)+y;if(r.currentBalance=v,r.type==="Prop"&&(r.phase==="Challenge"||r.phase==="Verification")){const x=parseFloat(r.profitTargetPercent)||8,L=parseFloat(r.balance||0)*(x/100);y>0&&L>0&&y>=L&&e.dispatchPropTargetReached(r,y,L)}let k=r.highWaterMark?parseFloat(r.highWaterMark):parseFloat(r.balance||0);v>k&&(e.dispatchEquityHigh(r,v,k),r.highWaterMark=v,Store.save()),k=r.highWaterMark||parseFloat(r.balance||0);const P=k-v,C=parseFloat(r.maxDrawdown)||10,V=parseFloat(r.balance||0)*(C/100),O=(t.thresholds.ddWarn||70)/100;if(P>0&&V>0){const x=P/V;x>=O&&e.dispatchDrawdownWarning(r,P,V,x)}if(window.renderPsychEngine){let x=0,L=0,q=0;Store.trades.slice(0,10).forEach(S=>{S.preEmotion&&(L++,["FOMO","Revenge","Fear","Greed","Frustrated"].includes(S.preEmotion)&&x++),S.duringEmotion&&(L++,["FOMO","Revenge","Fear","Greed","Frustrated"].includes(S.duringEmotion)&&x++),q+=parseFloat(S.r)||0});const T=L>0?x/L:0,g=u;let _="🟢 Optimal",E=0;T>.4&&(E+=2),T>.6&&(E+=2),g>=2&&(E+=1),g>=3&&(E+=2),q<=-2&&(E+=2),E>=5?_="CRITICAL":E>=3&&(_="ELEVATED"),Store.settings.lastPsychState||(Store.settings.lastPsychState="NORMAL");let I=Store.settings.lastPsychState;_!=="🟢 Optimal"&&_!==I&&(_==="ELEVATED"&&I!=="CRITICAL"||_==="CRITICAL")&&e.dispatchPsychEscalation(_,Math.round(T*100),g),Store.settings.lastPsychState=_==="🟢 Optimal"?"NORMAL":_,Store.save()}}});export default oA();
