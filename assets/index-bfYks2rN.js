var b_=(n,e)=>()=>(e||n((e={exports:{}}).exports,e),e.exports);var oR=b_((lR,Wo)=>{(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();const I_=()=>{};var Ld={};/**
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
 */const Xf=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},S_=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const i=n[t++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=n[t++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=n[t++],o=n[t++],a=n[t++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=n[t++],o=n[t++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Zf={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const s=n[i],o=i+1<n.length,a=o?n[i+1]:0,l=i+2<n.length,u=l?n[i+2]:0,d=s>>2,f=(s&3)<<4|a>>4;let _=(a&15)<<2|u>>6,I=u&63;l||(I=64,o||(_=64)),r.push(t[d],t[f],t[_],t[I])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Xf(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):S_(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const s=t[n.charAt(i++)],a=i<n.length?t[n.charAt(i)]:0;++i;const u=i<n.length?t[n.charAt(i)]:64;++i;const f=i<n.length?t[n.charAt(i)]:64;if(++i,s==null||a==null||u==null||f==null)throw new A_;const _=s<<2|a>>4;if(r.push(_),u!==64){const I=a<<4&240|u>>2;if(r.push(I),f!==64){const w=u<<6&192|f;r.push(w)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class A_ extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const R_=function(n){const e=Xf(n);return Zf.encodeByteArray(e,!0)},Ko=function(n){return R_(n).replace(/\./g,"")},em=function(n){try{return Zf.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function tm(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const P_=()=>tm().__FIREBASE_DEFAULTS__,x_=()=>{if(typeof process>"u"||typeof Ld>"u")return;const n=Ld.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},k_=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&em(n[1]);return e&&JSON.parse(e)},Sa=()=>{try{return I_()||P_()||x_()||k_()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},nm=n=>{var e,t;return(t=(e=Sa())==null?void 0:e.emulatorHosts)==null?void 0:t[n]},rm=n=>{const e=nm(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},im=()=>{var n;return(n=Sa())==null?void 0:n.config},sm=n=>{var e;return(e=Sa())==null?void 0:e[`_${n}`]};/**
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
 */class C_{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
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
 */function om(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",i=n.iat||0,s=n.sub||n.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}},...n};return[Ko(JSON.stringify(t)),Ko(JSON.stringify(o)),""].join(".")}/**
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
 */function Ze(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function D_(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ze())}function am(){var e;const n=(e=Sa())==null?void 0:e.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function N_(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function F_(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function M_(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function O_(){const n=Ze();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function cm(){return!am()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function lm(){return!am()&&!!navigator.userAgent&&(navigator.userAgent.includes("Safari")||navigator.userAgent.includes("WebKit"))&&!navigator.userAgent.includes("Chrome")}function um(){try{return typeof indexedDB=="object"}catch{return!1}}function L_(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var s;e(((s=i.error)==null?void 0:s.message)||"")}}catch(t){e(t)}})}/**
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
 */const V_="FirebaseError";class nn extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=V_,Object.setPrototypeOf(this,nn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Us.prototype.create)}}class Us{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?$_(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new nn(i,a,r)}}function $_(n,e){return n.replace(U_,(t,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const U_=/\{\$([^}]+)}/g;function B_(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Rr(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const i of t){if(!r.includes(i))return!1;const s=n[i],o=e[i];if(Vd(s)&&Vd(o)){if(!Rr(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!t.includes(i))return!1;return!0}function Vd(n){return n!==null&&typeof n=="object"}/**
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
 */function Bs(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function os(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function as(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function q_(n,e){const t=new z_(n,e);return t.subscribe.bind(t)}class z_{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let i;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");G_(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:r},i.next===void 0&&(i.next=wc),i.error===void 0&&(i.error=wc),i.complete===void 0&&(i.complete=wc);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function G_(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function wc(){}/**
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
 */function Qe(n){return n&&n._delegate?n._delegate:n}/**
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
 */function Vr(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Al(n){return(await fetch(n,{credentials:"include"})).ok}class Gn{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const ur="[DEFAULT]";/**
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
 */class j_{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new C_;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(W_(e))try{this.getOrInitializeService({instanceIdentifier:ur})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=ur){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ur){return this.instances.has(e)}getOptions(e=ur){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,t){const r=this.normalizeInstanceIdentifier(t),i=this.onInitCallbacks.get(r)??new Set;i.add(e),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const i of r)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:H_(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=ur){return this.component?this.component.multipleInstances?e:ur:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function H_(n){return n===ur?void 0:n}function W_(n){return n.instantiationMode==="EAGER"}/**
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
 */class K_{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new j_(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Ee;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(Ee||(Ee={}));const Y_={debug:Ee.DEBUG,verbose:Ee.VERBOSE,info:Ee.INFO,warn:Ee.WARN,error:Ee.ERROR,silent:Ee.SILENT},Q_=Ee.INFO,J_={[Ee.DEBUG]:"log",[Ee.VERBOSE]:"log",[Ee.INFO]:"info",[Ee.WARN]:"warn",[Ee.ERROR]:"error"},X_=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),i=J_[e];if(i)console[i](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Rl{constructor(e){this.name=e,this._logLevel=Q_,this._logHandler=X_,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ee))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Y_[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ee.DEBUG,...e),this._logHandler(this,Ee.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ee.VERBOSE,...e),this._logHandler(this,Ee.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ee.INFO,...e),this._logHandler(this,Ee.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ee.WARN,...e),this._logHandler(this,Ee.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ee.ERROR,...e),this._logHandler(this,Ee.ERROR,...e)}}const Z_=(n,e)=>e.some(t=>n instanceof t);let $d,Ud;function ew(){return $d||($d=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function tw(){return Ud||(Ud=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const dm=new WeakMap,zc=new WeakMap,hm=new WeakMap,Tc=new WeakMap,Pl=new WeakMap;function nw(n){const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("success",s),n.removeEventListener("error",o)},s=()=>{t(Vn(n.result)),i()},o=()=>{r(n.error),i()};n.addEventListener("success",s),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&dm.set(t,n)}).catch(()=>{}),Pl.set(e,n),e}function rw(n){if(zc.has(n))return;const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("complete",s),n.removeEventListener("error",o),n.removeEventListener("abort",o)},s=()=>{t(),i()},o=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",s),n.addEventListener("error",o),n.addEventListener("abort",o)});zc.set(n,e)}let Gc={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return zc.get(n);if(e==="objectStoreNames")return n.objectStoreNames||hm.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Vn(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function iw(n){Gc=n(Gc)}function sw(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(Ec(this),e,...t);return hm.set(r,e.sort?e.sort():[e]),Vn(r)}:tw().includes(n)?function(...e){return n.apply(Ec(this),e),Vn(dm.get(this))}:function(...e){return Vn(n.apply(Ec(this),e))}}function ow(n){return typeof n=="function"?sw(n):(n instanceof IDBTransaction&&rw(n),Z_(n,ew())?new Proxy(n,Gc):n)}function Vn(n){if(n instanceof IDBRequest)return nw(n);if(Tc.has(n))return Tc.get(n);const e=ow(n);return e!==n&&(Tc.set(n,e),Pl.set(e,n)),e}const Ec=n=>Pl.get(n);function aw(n,e,{blocked:t,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(n,e),a=Vn(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Vn(o.result),l.oldVersion,l.newVersion,Vn(o.transaction),l)}),t&&o.addEventListener("blocked",l=>t(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const cw=["get","getKey","getAll","getAllKeys","count"],lw=["put","add","delete","clear"],vc=new Map;function Bd(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(vc.get(e))return vc.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,i=lw.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(i||cw.includes(t)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[t](...a),i&&l.done]))[0]};return vc.set(e,s),s}iw(n=>({...n,get:(e,t,r)=>Bd(e,t)||n.get(e,t,r),has:(e,t)=>!!Bd(e,t)||n.has(e,t)}));/**
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
 */class uw{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(dw(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function dw(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const jc="@firebase/app",qd="0.14.11";/**
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
 */const hn=new Rl("@firebase/app"),hw="@firebase/app-compat",fw="@firebase/analytics-compat",mw="@firebase/analytics",pw="@firebase/app-check-compat",gw="@firebase/app-check",yw="@firebase/auth",_w="@firebase/auth-compat",ww="@firebase/database",Tw="@firebase/data-connect",Ew="@firebase/database-compat",vw="@firebase/functions",bw="@firebase/functions-compat",Iw="@firebase/installations",Sw="@firebase/installations-compat",Aw="@firebase/messaging",Rw="@firebase/messaging-compat",Pw="@firebase/performance",xw="@firebase/performance-compat",kw="@firebase/remote-config",Cw="@firebase/remote-config-compat",Dw="@firebase/storage",Nw="@firebase/storage-compat",Fw="@firebase/firestore",Mw="@firebase/ai",Ow="@firebase/firestore-compat",Lw="firebase",Vw="12.12.0";/**
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
 */const Hc="[DEFAULT]",$w={[jc]:"fire-core",[hw]:"fire-core-compat",[mw]:"fire-analytics",[fw]:"fire-analytics-compat",[gw]:"fire-app-check",[pw]:"fire-app-check-compat",[yw]:"fire-auth",[_w]:"fire-auth-compat",[ww]:"fire-rtdb",[Tw]:"fire-data-connect",[Ew]:"fire-rtdb-compat",[vw]:"fire-fn",[bw]:"fire-fn-compat",[Iw]:"fire-iid",[Sw]:"fire-iid-compat",[Aw]:"fire-fcm",[Rw]:"fire-fcm-compat",[Pw]:"fire-perf",[xw]:"fire-perf-compat",[kw]:"fire-rc",[Cw]:"fire-rc-compat",[Dw]:"fire-gcs",[Nw]:"fire-gcs-compat",[Fw]:"fire-fst",[Ow]:"fire-fst-compat",[Mw]:"fire-vertex","fire-js":"fire-js",[Lw]:"fire-js-all"};/**
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
 */const bs=new Map,Uw=new Map,Wc=new Map;function zd(n,e){try{n.container.addComponent(e)}catch(t){hn.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Pr(n){const e=n.name;if(Wc.has(e))return hn.debug(`There were multiple attempts to register component ${e}.`),!1;Wc.set(e,n);for(const t of bs.values())zd(t,n);for(const t of Uw.values())zd(t,n);return!0}function Aa(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function lt(n){return n==null?!1:n.settings!==void 0}/**
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
 */const Bw={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},$n=new Us("app","Firebase",Bw);/**
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
 */class qw{constructor(e,t,r){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Gn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw $n.create("app-deleted",{appName:this._name})}}/**
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
 */const $r=Vw;function fm(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r={name:Hc,automaticDataCollectionEnabled:!0,...e},i=r.name;if(typeof i!="string"||!i)throw $n.create("bad-app-name",{appName:String(i)});if(t||(t=im()),!t)throw $n.create("no-options");const s=bs.get(i);if(s){if(Rr(t,s.options)&&Rr(r,s.config))return s;throw $n.create("duplicate-app",{appName:i})}const o=new K_(i);for(const l of Wc.values())o.addComponent(l);const a=new qw(t,r,o);return bs.set(i,a),a}function Ra(n=Hc){const e=bs.get(n);if(!e&&n===Hc&&im())return fm();if(!e)throw $n.create("no-app",{appName:n});return e}function zw(){return Array.from(bs.values())}function Jt(n,e,t){let r=$w[n]??n;t&&(r+=`-${t}`);const i=r.match(/\s|\//),s=e.match(/\s|\//);if(i||s){const o=[`Unable to register library "${r}" with version "${e}":`];i&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&s&&o.push("and"),s&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),hn.warn(o.join(" "));return}Pr(new Gn(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const Gw="firebase-heartbeat-database",jw=1,Is="firebase-heartbeat-store";let bc=null;function mm(){return bc||(bc=aw(Gw,jw,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Is)}catch(t){console.warn(t)}}}}).catch(n=>{throw $n.create("idb-open",{originalErrorMessage:n.message})})),bc}async function Hw(n){try{const t=(await mm()).transaction(Is),r=await t.objectStore(Is).get(pm(n));return await t.done,r}catch(e){if(e instanceof nn)hn.warn(e.message);else{const t=$n.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});hn.warn(t.message)}}}async function Gd(n,e){try{const r=(await mm()).transaction(Is,"readwrite");await r.objectStore(Is).put(e,pm(n)),await r.done}catch(t){if(t instanceof nn)hn.warn(t.message);else{const r=$n.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});hn.warn(r.message)}}}function pm(n){return`${n.name}!${n.options.appId}`}/**
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
 */const Ww=1024,Kw=30;class Yw{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Jw(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=jd();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats.length>Kw){const o=Xw(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){hn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=jd(),{heartbeatsToSend:r,unsentEntries:i}=Qw(this._heartbeatsCache.heartbeats),s=Ko(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(t){return hn.warn(t),""}}}function jd(){return new Date().toISOString().substring(0,10)}function Qw(n,e=Ww){const t=[];let r=n.slice();for(const i of n){const s=t.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Hd(t)>e){s.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),Hd(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class Jw{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return um()?L_().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await Hw(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Gd(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Gd(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Hd(n){return Ko(JSON.stringify({version:2,heartbeats:n})).length}function Xw(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let r=1;r<n.length;r++)n[r].date<t&&(t=n[r].date,e=r);return e}/**
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
 */function Zw(n){Pr(new Gn("platform-logger",e=>new uw(e),"PRIVATE")),Pr(new Gn("heartbeat",e=>new Yw(e),"PRIVATE")),Jt(jc,qd,n),Jt(jc,qd,"esm2020"),Jt("fire-js","")}Zw("");var eT="firebase",tT="12.12.1";/**
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
 */Jt(eT,tT,"app");function gm(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const nT=gm,ym=new Us("auth","Firebase",gm());/**
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
 */const Yo=new Rl("@firebase/auth");function rT(n,...e){Yo.logLevel<=Ee.WARN&&Yo.warn(`Auth (${$r}): ${n}`,...e)}function Co(n,...e){Yo.logLevel<=Ee.ERROR&&Yo.error(`Auth (${$r}): ${n}`,...e)}/**
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
 */function Dt(n,...e){throw kl(n,...e)}function Lt(n,...e){return kl(n,...e)}function xl(n,e,t){const r={...nT(),[e]:t};return new Us("auth","Firebase",r).create(e,{appName:n.name})}function Vt(n){return xl(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function _m(n,e,t){const r=t;if(!(e instanceof r))throw r.name!==e.constructor.name&&Dt(n,"argument-error"),xl(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function kl(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return ym.create(n,...e)}function ae(n,e,...t){if(!n)throw kl(e,...t)}function cn(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Co(e),new Error(e)}function fn(n,e){n||cn(e)}/**
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
 */function Kc(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.href)||""}function iT(){return Wd()==="http:"||Wd()==="https:"}function Wd(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.protocol)||null}/**
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
 */function sT(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(iT()||F_()||"connection"in navigator)?navigator.onLine:!0}function oT(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class qs{constructor(e,t){this.shortDelay=e,this.longDelay=t,fn(t>e,"Short delay should be less than long delay!"),this.isMobile=D_()||M_()}get(){return sT()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Cl(n,e){fn(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class wm{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;cn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;cn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;cn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const aT={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const cT=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],lT=new qs(3e4,6e4);function Xn(n,e){return n.tenantId&&!e.tenantId?{...e,tenantId:n.tenantId}:e}async function Zn(n,e,t,r,i={}){return Tm(n,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Bs({key:n.config.apiKey,...o}).slice(1),l=await n._getAdditionalHeaders();l["Content-Type"]="application/json",n.languageCode&&(l["X-Firebase-Locale"]=n.languageCode);const u={method:e,headers:l,...s};return N_()||(u.referrerPolicy="no-referrer"),n.emulatorConfig&&Vr(n.emulatorConfig.host)&&(u.credentials="include"),wm.fetch()(await Em(n,n.config.apiHost,t,a),u)})}async function Tm(n,e,t){n._canInitEmulator=!1;const r={...aT,...e};try{const i=new dT(n),s=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw po(n,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw po(n,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw po(n,"email-already-in-use",o);if(l==="USER_DISABLED")throw po(n,"user-disabled",o);const d=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw xl(n,d,u);Dt(n,d)}}catch(i){if(i instanceof nn)throw i;Dt(n,"network-request-failed",{message:String(i)})}}async function zs(n,e,t,r,i={}){const s=await Zn(n,e,t,r,i);return"mfaPendingCredential"in s&&Dt(n,"multi-factor-auth-required",{_serverResponse:s}),s}async function Em(n,e,t,r){const i=`${e}${t}?${r}`,s=n,o=s.config.emulator?Cl(n.config,i):`${n.config.apiScheme}://${i}`;return cT.includes(t)&&(await s._persistenceManagerAvailable,s._getPersistenceType()==="COOKIE")?s._getPersistence()._getFinalTarget(o).toString():o}function uT(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class dT{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(Lt(this.auth,"network-request-failed")),lT.get())})}}function po(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const i=Lt(n,e,r);return i.customData._tokenResponse=t,i}function Kd(n){return n!==void 0&&n.enterprise!==void 0}class hT{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return uT(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function fT(n,e){return Zn(n,"GET","/v2/recaptchaConfig",Xn(n,e))}/**
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
 */async function mT(n,e){return Zn(n,"POST","/v1/accounts:delete",e)}async function Qo(n,e){return Zn(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function fs(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function pT(n,e=!1){const t=Qe(n),r=await t.getIdToken(e),i=Dl(r);ae(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:fs(Ic(i.auth_time)),issuedAtTime:fs(Ic(i.iat)),expirationTime:fs(Ic(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Ic(n){return Number(n)*1e3}function Dl(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return Co("JWT malformed, contained fewer than 3 sections"),null;try{const i=em(t);return i?JSON.parse(i):(Co("Failed to decode base64 JWT payload"),null)}catch(i){return Co("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Yd(n){const e=Dl(n);return ae(e,"internal-error"),ae(typeof e.exp<"u","internal-error"),ae(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Ss(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof nn&&gT(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function gT({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class yT{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Yc{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=fs(this.lastLoginAt),this.creationTime=fs(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Jo(n){var f;const e=n.auth,t=await n.getIdToken(),r=await Ss(n,Qo(e,{idToken:t}));ae(r==null?void 0:r.users.length,e,"internal-error");const i=r.users[0];n._notifyReloadListener(i);const s=(f=i.providerUserInfo)!=null&&f.length?vm(i.providerUserInfo):[],o=wT(n.providerData,s),a=n.isAnonymous,l=!(n.email&&i.passwordHash)&&!(o!=null&&o.length),u=a?l:!1,d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new Yc(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(n,d)}async function _T(n){const e=Qe(n);await Jo(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function wT(n,e){return[...n.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function vm(n){return n.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
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
 */async function TT(n,e){const t=await Tm(n,{},async()=>{const r=Bs({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=n.config,o=await Em(n,i,"/v1/token",`key=${s}`),a=await n._getAdditionalHeaders();a["Content-Type"]="application/x-www-form-urlencoded";const l={method:"POST",headers:a,body:r};return n.emulatorConfig&&Vr(n.emulatorConfig.host)&&(l.credentials="include"),wm.fetch()(o,l)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function ET(n,e){return Zn(n,"POST","/v2/accounts:revokeToken",Xn(n,e))}/**
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
 */class li{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ae(e.idToken,"internal-error"),ae(typeof e.idToken<"u","internal-error"),ae(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Yd(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){ae(e.length!==0,"internal-error");const t=Yd(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(ae(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:i,expiresIn:s}=await TT(e,t);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:i,expirationTime:s}=t,o=new li;return r&&(ae(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(ae(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(ae(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new li,this.toJSON())}_performRefresh(){return cn("not implemented")}}/**
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
 */function Rn(n,e){ae(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Ot{constructor({uid:e,auth:t,stsTokenManager:r,...i}){this.providerId="firebase",this.proactiveRefresh=new yT(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Yc(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await Ss(this,this.stsTokenManager.getToken(this.auth,e));return ae(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return pT(this,e)}reload(){return _T(this)}_assign(e){this!==e&&(ae(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Ot({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){ae(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await Jo(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(lt(this.auth.app))return Promise.reject(Vt(this.auth));const e=await this.getIdToken();return await Ss(this,mT(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const r=t.displayName??void 0,i=t.email??void 0,s=t.phoneNumber??void 0,o=t.photoURL??void 0,a=t.tenantId??void 0,l=t._redirectEventId??void 0,u=t.createdAt??void 0,d=t.lastLoginAt??void 0,{uid:f,emailVerified:_,isAnonymous:I,providerData:w,stsTokenManager:S}=t;ae(f&&S,e,"internal-error");const P=li.fromJSON(this.name,S);ae(typeof f=="string",e,"internal-error"),Rn(r,e.name),Rn(i,e.name),ae(typeof _=="boolean",e,"internal-error"),ae(typeof I=="boolean",e,"internal-error"),Rn(s,e.name),Rn(o,e.name),Rn(a,e.name),Rn(l,e.name),Rn(u,e.name),Rn(d,e.name);const F=new Ot({uid:f,auth:e,email:i,emailVerified:_,displayName:r,isAnonymous:I,photoURL:o,phoneNumber:s,tenantId:a,stsTokenManager:P,createdAt:u,lastLoginAt:d});return w&&Array.isArray(w)&&(F.providerData=w.map(x=>({...x}))),l&&(F._redirectEventId=l),F}static async _fromIdTokenResponse(e,t,r=!1){const i=new li;i.updateFromServerResponse(t);const s=new Ot({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Jo(s),s}static async _fromGetAccountInfoResponse(e,t,r){const i=t.users[0];ae(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?vm(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),a=new li;a.updateFromIdToken(r);const l=new Ot({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),u={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Yc(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(l,u),l}}/**
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
 */const Qd=new Map;function ln(n){fn(n instanceof Function,"Expected a class definition");let e=Qd.get(n);return e?(fn(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Qd.set(n,e),e)}/**
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
 */class bm{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}bm.type="NONE";const Jd=bm;/**
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
 */function Do(n,e,t){return`firebase:${n}:${e}:${t}`}class ui{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Do(this.userKey,i.apiKey,s),this.fullPersistenceKey=Do("persistence",i.apiKey,s),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Qo(this.auth,{idToken:e}).catch(()=>{});return t?Ot._fromGetAccountInfoResponse(this.auth,t,e):null}return Ot._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new ui(ln(Jd),e,r);const i=(await Promise.all(t.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||ln(Jd);const o=Do(r,e.config.apiKey,e.name);let a=null;for(const u of t)try{const d=await u._get(o);if(d){let f;if(typeof d=="string"){const _=await Qo(e,{idToken:d}).catch(()=>{});if(!_)break;f=await Ot._fromGetAccountInfoResponse(e,_,d)}else f=Ot._fromJSON(e,d);u!==s&&(a=f),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new ui(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(t.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new ui(s,e,r))}}/**
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
 */function Xd(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Rm(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Im(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(xm(e))return"Blackberry";if(km(e))return"Webos";if(Sm(e))return"Safari";if((e.includes("chrome/")||Am(e))&&!e.includes("edge/"))return"Chrome";if(Pm(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Im(n=Ze()){return/firefox\//i.test(n)}function Sm(n=Ze()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Am(n=Ze()){return/crios\//i.test(n)}function Rm(n=Ze()){return/iemobile/i.test(n)}function Pm(n=Ze()){return/android/i.test(n)}function xm(n=Ze()){return/blackberry/i.test(n)}function km(n=Ze()){return/webos/i.test(n)}function Nl(n=Ze()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function vT(n=Ze()){var e;return Nl(n)&&!!((e=window.navigator)!=null&&e.standalone)}function bT(){return O_()&&document.documentMode===10}function Cm(n=Ze()){return Nl(n)||Pm(n)||km(n)||xm(n)||/windows phone/i.test(n)||Rm(n)}/**
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
 */function Dm(n,e=[]){let t;switch(n){case"Browser":t=Xd(Ze());break;case"Worker":t=`${Xd(Ze())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${$r}/${r}`}/**
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
 */class IT{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=t,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function ST(n,e={}){return Zn(n,"GET","/v2/passwordPolicy",Xn(n,e))}/**
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
 */const AT=6;class RT{constructor(e){var r;const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??AT,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),i&&(t.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class PT{constructor(e,t,r,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Zd(this),this.idTokenSubscription=new Zd(this),this.beforeStateQueue=new IT(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=ym,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(s=>this._resolvePersistenceManagerAvailable=s)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=ln(t)),this._initializationPromise=this.queue(async()=>{var r,i,s;if(!this._deleted&&(this.persistenceManager=await ui.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((i=this._popupRedirectResolver)!=null&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((s=this.currentUser)==null?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Qo(this,{idToken:e}),r=await Ot._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var s;if(lt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let r=t,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(s=this.redirectUser)==null?void 0:s._redirectEventId,a=r==null?void 0:r._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(r=l.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return ae(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Jo(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=oT()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(lt(this.app))return Promise.reject(Vt(this));const t=e?Qe(e):null;return t&&ae(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&ae(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return lt(this.app)?Promise.reject(Vt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return lt(this.app)?Promise.reject(Vt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(ln(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await ST(this),t=new RT(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Us("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await ET(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&ln(e)||this._popupRedirectResolver;ae(t,this,"argument-error"),this.redirectPersistenceManager=await ui.create(this,[ln(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)==null?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((t=this.currentUser)==null?void 0:t.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,i){if(this._deleted)return()=>{};const s=typeof t=="function"?t:t.next.bind(t);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(ae(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof t=="function"){const l=e.addObserver(t,r,i);return()=>{o=!0,l()}}else{const l=e.addObserver(t);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ae(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Dm(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var i;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await((i=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:i.getHeartbeatsHeader());t&&(e["X-Firebase-Client"]=t);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var t;if(lt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:t.getToken());return e!=null&&e.error&&rT(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function Ut(n){return Qe(n)}class Zd{constructor(e){this.auth=e,this.observer=null,this.addObserver=q_(t=>this.observer=t)}get next(){return ae(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Pa={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function xT(n){Pa=n}function Nm(n){return Pa.loadJS(n)}function kT(){return Pa.recaptchaEnterpriseScript}function CT(){return Pa.gapiScript}function DT(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class NT{constructor(){this.enterprise=new FT}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class FT{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const MT="recaptcha-enterprise",Fm="NO_RECAPTCHA";class OT{constructor(e){this.type=MT,this.auth=Ut(e)}async verify(e="verify",t=!1){async function r(s){if(!t){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{fT(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new hT(l);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;Kd(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(u=>{o(u)}).catch(()=>{o(Fm)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new NT().execute("siteKey",{action:"verify"}):new Promise((s,o)=>{r(this.auth).then(a=>{if(!t&&Kd(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=kT();l.length!==0&&(l+=a),Nm(l).then(()=>{i(a,s,o)}).catch(u=>{o(u)})}}).catch(a=>{o(a)})})}}async function eh(n,e,t,r=!1,i=!1){const s=new OT(n);let o;if(i)o=Fm;else try{o=await s.verify(t)}catch{o=await s.verify(t,!0)}const a={...e};if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in a){const l=a.phoneEnrollmentInfo.phoneNumber,u=a.phoneEnrollmentInfo.recaptchaToken;Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in a){const l=a.phoneSignInInfo.recaptchaToken;Object.assign(a,{phoneSignInInfo:{recaptchaToken:l,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return a}return r?Object.assign(a,{captchaResp:o}):Object.assign(a,{captchaResponse:o}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function Qc(n,e,t,r,i){var s;if((s=n._getRecaptchaConfig())!=null&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await eh(n,e,t,t==="getOobCode");return r(n,o)}else return r(n,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const a=await eh(n,e,t,t==="getOobCode");return r(n,a)}else return Promise.reject(o)})}/**
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
 */function LT(n,e){const t=Aa(n,"auth");if(t.isInitialized()){const i=t.getImmediate(),s=t.getOptions();if(Rr(s,e??{}))return i;Dt(i,"already-initialized")}return t.initialize({options:e})}function VT(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(ln);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function $T(n,e,t){const r=Ut(n);ae(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=Mm(e),{host:o,port:a}=UT(e),l=a===null?"":`:${a}`,u={url:`${s}//${o}${l}/`},d=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){ae(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),ae(Rr(u,r.config.emulator)&&Rr(d,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=u,r.emulatorConfig=d,r.settings.appVerificationDisabledForTesting=!0,Vr(o)?Al(`${s}//${o}${l}`):BT()}function Mm(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function UT(n){const e=Mm(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:th(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:th(o)}}}function th(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function BT(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class Fl{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return cn("not implemented")}_getIdTokenResponse(e){return cn("not implemented")}_linkToIdToken(e,t){return cn("not implemented")}_getReauthenticationResolver(e){return cn("not implemented")}}async function qT(n,e){return Zn(n,"POST","/v1/accounts:signUp",e)}/**
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
 */async function zT(n,e){return zs(n,"POST","/v1/accounts:signInWithPassword",Xn(n,e))}/**
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
 */async function GT(n,e){return zs(n,"POST","/v1/accounts:signInWithEmailLink",Xn(n,e))}async function jT(n,e){return zs(n,"POST","/v1/accounts:signInWithEmailLink",Xn(n,e))}/**
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
 */class As extends Fl{constructor(e,t,r,i=null){super("password",r),this._email=e,this._password=t,this._tenantId=i}static _fromEmailAndPassword(e,t){return new As(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new As(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Qc(e,t,"signInWithPassword",zT);case"emailLink":return GT(e,{email:this._email,oobCode:this._password});default:Dt(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Qc(e,r,"signUpPassword",qT);case"emailLink":return jT(e,{idToken:t,email:this._email,oobCode:this._password});default:Dt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function di(n,e){return zs(n,"POST","/v1/accounts:signInWithIdp",Xn(n,e))}/**
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
 */const HT="http://localhost";class xr extends Fl{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new xr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Dt("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,...s}=t;if(!r||!i)return null;const o=new xr(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return di(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,di(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,di(e,t)}buildRequest(){const e={requestUri:HT,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Bs(t)}return e}}/**
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
 */function WT(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function KT(n){const e=os(as(n)).link,t=e?os(as(e)).deep_link_id:null,r=os(as(n)).deep_link_id;return(r?os(as(r)).link:null)||r||t||e||n}class Ml{constructor(e){const t=os(as(e)),r=t.apiKey??null,i=t.oobCode??null,s=WT(t.mode??null);ae(r&&i&&s,"argument-error"),this.apiKey=r,this.operation=s,this.code=i,this.continueUrl=t.continueUrl??null,this.languageCode=t.lang??null,this.tenantId=t.tenantId??null}static parseLink(e){const t=KT(e);try{return new Ml(t)}catch{return null}}}/**
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
 */class xi{constructor(){this.providerId=xi.PROVIDER_ID}static credential(e,t){return As._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=Ml.parseLink(t);return ae(r,"argument-error"),As._fromEmailAndCode(e,r.code,r.tenantId)}}xi.PROVIDER_ID="password";xi.EMAIL_PASSWORD_SIGN_IN_METHOD="password";xi.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class xa{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Gs extends xa{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Cn extends Gs{constructor(){super("facebook.com")}static credential(e){return xr._fromParams({providerId:Cn.PROVIDER_ID,signInMethod:Cn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Cn.credentialFromTaggedObject(e)}static credentialFromError(e){return Cn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Cn.credential(e.oauthAccessToken)}catch{return null}}}Cn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Cn.PROVIDER_ID="facebook.com";/**
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
 */class Mt extends Gs{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return xr._fromParams({providerId:Mt.PROVIDER_ID,signInMethod:Mt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Mt.credentialFromTaggedObject(e)}static credentialFromError(e){return Mt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return Mt.credential(t,r)}catch{return null}}}Mt.GOOGLE_SIGN_IN_METHOD="google.com";Mt.PROVIDER_ID="google.com";/**
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
 */class Dn extends Gs{constructor(){super("github.com")}static credential(e){return xr._fromParams({providerId:Dn.PROVIDER_ID,signInMethod:Dn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Dn.credentialFromTaggedObject(e)}static credentialFromError(e){return Dn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Dn.credential(e.oauthAccessToken)}catch{return null}}}Dn.GITHUB_SIGN_IN_METHOD="github.com";Dn.PROVIDER_ID="github.com";/**
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
 */class Nn extends Gs{constructor(){super("twitter.com")}static credential(e,t){return xr._fromParams({providerId:Nn.PROVIDER_ID,signInMethod:Nn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Nn.credentialFromTaggedObject(e)}static credentialFromError(e){return Nn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return Nn.credential(t,r)}catch{return null}}}Nn.TWITTER_SIGN_IN_METHOD="twitter.com";Nn.PROVIDER_ID="twitter.com";/**
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
 */async function Om(n,e){return zs(n,"POST","/v1/accounts:signUp",Xn(n,e))}/**
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
 */class mn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,i=!1){const s=await Ot._fromIdTokenResponse(e,r,i),o=nh(r);return new mn({user:s,providerId:o,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const i=nh(r);return new mn({user:e,providerId:i,_tokenResponse:r,operationType:t})}}function nh(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */async function YT(n){var i;if(lt(n.app))return Promise.reject(Vt(n));const e=Ut(n);if(await e._initializationPromise,(i=e.currentUser)!=null&&i.isAnonymous)return new mn({user:e.currentUser,providerId:null,operationType:"signIn"});const t=await Om(e,{returnSecureToken:!0}),r=await mn._fromIdTokenResponse(e,"signIn",t,!0);return await e._updateCurrentUser(r.user),r}/**
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
 */class Xo extends nn{constructor(e,t,r,i){super(t.code,t.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Xo.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,i){return new Xo(e,t,r,i)}}function Lm(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Xo._fromErrorAndOperation(n,s,e,r):s})}async function QT(n,e,t=!1){const r=await Ss(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return mn._forOperation(n,"link",r)}/**
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
 */async function JT(n,e,t=!1){const{auth:r}=n;if(lt(r.app))return Promise.reject(Vt(r));const i="reauthenticate";try{const s=await Ss(n,Lm(r,i,e,n),t);ae(s.idToken,r,"internal-error");const o=Dl(s.idToken);ae(o,r,"internal-error");const{sub:a}=o;return ae(n.uid===a,r,"user-mismatch"),mn._forOperation(n,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Dt(r,"user-mismatch"),s}}/**
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
 */async function Vm(n,e,t=!1){if(lt(n.app))return Promise.reject(Vt(n));const r="signIn",i=await Lm(n,r,e),s=await mn._fromIdTokenResponse(n,r,i);return t||await n._updateCurrentUser(s.user),s}async function XT(n,e){return Vm(Ut(n),e)}/**
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
 */async function $m(n){const e=Ut(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function ZT(n,e,t){if(lt(n.app))return Promise.reject(Vt(n));const r=Ut(n),o=await Qc(r,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Om).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&$m(n),l}),a=await mn._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function e0(n,e,t){return lt(n.app)?Promise.reject(Vt(n)):XT(Qe(n),xi.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&$m(n),r})}function t0(n,e,t,r){return Qe(n).onIdTokenChanged(e,t,r)}function n0(n,e,t){return Qe(n).beforeAuthStateChanged(e,t)}function r0(n,e,t,r){return Qe(n).onAuthStateChanged(e,t,r)}function i0(n){return Qe(n).signOut()}const Zo="__sak";/**
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
 */class Um{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Zo,"1"),this.storage.removeItem(Zo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const s0=1e3,o0=10;class Bm extends Um{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Cm(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),i=this.localCache[t];r!==i&&e(t,i,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;t?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!t&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);bT()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,o0):i()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},s0)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Bm.type="LOCAL";const a0=Bm;/**
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
 */class qm extends Um{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}qm.type="SESSION";const zm=qm;/**
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
 */function c0(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class ka{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;const r=new ka(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:i,data:s}=t.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(t.origin,s)),l=await c0(a);t.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ka.receivers=[];/**
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
 */function Ol(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class l0{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=Ol("",20);i.port1.start();const d=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(f){const _=f;if(_.data.eventId===u)switch(_.data.status){case"ack":clearTimeout(d),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(_.data.response);break;default:clearTimeout(d),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:t},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Xt(){return window}function u0(n){Xt().location.href=n}/**
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
 */function Gm(){return typeof Xt().WorkerGlobalScope<"u"&&typeof Xt().importScripts=="function"}async function d0(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function h0(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)==null?void 0:n.controller)||null}function f0(){return Gm()?self:null}/**
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
 */const jm="firebaseLocalStorageDb",m0=1,ea="firebaseLocalStorage",Hm="fbase_key";class js{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Ca(n,e){return n.transaction([ea],e?"readwrite":"readonly").objectStore(ea)}function p0(){const n=indexedDB.deleteDatabase(jm);return new js(n).toPromise()}function Jc(){const n=indexedDB.open(jm,m0);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(ea,{keyPath:Hm})}catch(i){t(i)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(ea)?e(r):(r.close(),await p0(),e(await Jc()))})})}async function rh(n,e,t){const r=Ca(n,!0).put({[Hm]:e,value:t});return new js(r).toPromise()}async function g0(n,e){const t=Ca(n,!1).get(e),r=await new js(t).toPromise();return r===void 0?null:r.value}function ih(n,e){const t=Ca(n,!0).delete(e);return new js(t).toPromise()}const y0=800,_0=3;class Wm{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Jc(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>_0)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Gm()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ka._getInstance(f0()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var t,r;if(this.activeServiceWorker=await d0(),!this.activeServiceWorker)return;this.sender=new l0(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(t=e[0])!=null&&t.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||h0()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Jc();return await rh(e,Zo,"1"),await ih(e,Zo),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>rh(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>g0(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>ih(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Ca(i,!1).getAll();return new js(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),y0)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Wm.type="LOCAL";const w0=Wm;new qs(3e4,6e4);/**
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
 */function Ll(n,e){return e?ln(e):(ae(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class Vl extends Fl{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return di(e,this._buildIdpRequest())}_linkToIdToken(e,t){return di(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return di(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function T0(n){return Vm(n.auth,new Vl(n),n.bypassAuthState)}function E0(n){const{auth:e,user:t}=n;return ae(t,e,"internal-error"),JT(t,new Vl(n),n.bypassAuthState)}async function v0(n){const{auth:e,user:t}=n;return ae(t,e,"internal-error"),QT(t,new Vl(n),n.bypassAuthState)}/**
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
 */class Km{constructor(e,t,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:t,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return T0;case"linkViaPopup":case"linkViaRedirect":return v0;case"reauthViaPopup":case"reauthViaRedirect":return E0;default:Dt(this.auth,"internal-error")}}resolve(e){fn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){fn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const b0=new qs(2e3,1e4);async function I0(n,e,t){if(lt(n.app))return Promise.reject(Lt(n,"operation-not-supported-in-this-environment"));const r=Ut(n);_m(n,e,xa);const i=Ll(r,t);return new wr(r,"signInViaPopup",e,i).executeNotNull()}class wr extends Km{constructor(e,t,r,i,s){super(e,t,i,s),this.provider=r,this.authWindow=null,this.pollId=null,wr.currentPopupAction&&wr.currentPopupAction.cancel(),wr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ae(e,this.auth,"internal-error"),e}async onExecution(){fn(this.filter.length===1,"Popup operations only handle one event");const e=Ol();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Lt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(Lt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,wr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if((r=(t=this.authWindow)==null?void 0:t.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Lt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,b0.get())};e()}}wr.currentPopupAction=null;/**
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
 */const S0="pendingRedirect",No=new Map;class A0 extends Km{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=No.get(this.auth._key());if(!e){try{const r=await R0(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}No.set(this.auth._key(),e)}return this.bypassAuthState||No.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function R0(n,e){const t=Qm(e),r=Ym(n);if(!await r._isAvailable())return!1;const i=await r._get(t)==="true";return await r._remove(t),i}async function P0(n,e){return Ym(n)._set(Qm(e),"true")}function x0(n,e){No.set(n._key(),e)}function Ym(n){return ln(n._redirectPersistence)}function Qm(n){return Do(S0,n.config.apiKey,n.name)}/**
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
 */function k0(n,e,t){return C0(n,e,t)}async function C0(n,e,t){if(lt(n.app))return Promise.reject(Vt(n));const r=Ut(n);_m(n,e,xa),await r._initializationPromise;const i=Ll(r,t);return await P0(i,r),i._openRedirect(r,e,"signInViaRedirect")}async function D0(n,e){return await Ut(n)._initializationPromise,Jm(n,e,!1)}async function Jm(n,e,t=!1){if(lt(n.app))return Promise.reject(Vt(n));const r=Ut(n),i=Ll(r,e),o=await new A0(r,i,t).execute();return o&&!t&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const N0=600*1e3;class F0{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!M0(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!Xm(e)){const i=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";t.onError(Lt(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=N0&&this.cachedEventUids.clear(),this.cachedEventUids.has(sh(e))}saveEventToCache(e){this.cachedEventUids.add(sh(e)),this.lastProcessedEventTime=Date.now()}}function sh(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Xm({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function M0(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Xm(n);default:return!1}}/**
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
 */async function O0(n,e={}){return Zn(n,"GET","/v1/projects",e)}/**
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
 */const L0=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,V0=/^https?/;async function $0(n){if(n.config.emulator)return;const{authorizedDomains:e}=await O0(n);for(const t of e)try{if(U0(t))return}catch{}Dt(n,"unauthorized-domain")}function U0(n){const e=Kc(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===r}if(!V0.test(t))return!1;if(L0.test(n))return r===n;const i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const B0=new qs(3e4,6e4);function oh(){const n=Xt().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function q0(n){return new Promise((e,t)=>{var i,s,o;function r(){oh(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{oh(),t(Lt(n,"network-request-failed"))},timeout:B0.get()})}if((s=(i=Xt().gapi)==null?void 0:i.iframes)!=null&&s.Iframe)e(gapi.iframes.getContext());else if((o=Xt().gapi)!=null&&o.load)r();else{const a=DT("iframefcb");return Xt()[a]=()=>{gapi.load?r():t(Lt(n,"network-request-failed"))},Nm(`${CT()}?onload=${a}`).catch(l=>t(l))}}).catch(e=>{throw Fo=null,e})}let Fo=null;function z0(n){return Fo=Fo||q0(n),Fo}/**
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
 */const G0=new qs(5e3,15e3),j0="__/auth/iframe",H0="emulator/auth/iframe",W0={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},K0=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Y0(n){const e=n.config;ae(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Cl(e,H0):`https://${n.config.authDomain}/${j0}`,r={apiKey:e.apiKey,appName:n.name,v:$r},i=K0.get(n.config.apiHost);i&&(r.eid=i);const s=n._getFrameworks();return s.length&&(r.fw=s.join(",")),`${t}?${Bs(r).slice(1)}`}async function Q0(n){const e=await z0(n),t=Xt().gapi;return ae(t,n,"internal-error"),e.open({where:document.body,url:Y0(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:W0,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Lt(n,"network-request-failed"),a=Xt().setTimeout(()=>{s(o)},G0.get());function l(){Xt().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
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
 */const J0={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},X0=500,Z0=600,eE="_blank",tE="http://localhost";class ah{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function nE(n,e,t,r=X0,i=Z0){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l={...J0,width:r.toString(),height:i.toString(),top:s,left:o},u=Ze().toLowerCase();t&&(a=Am(u)?eE:t),Im(u)&&(e=e||tE,l.scrollbars="yes");const d=Object.entries(l).reduce((_,[I,w])=>`${_}${I}=${w},`,"");if(vT(u)&&a!=="_self")return rE(e||"",a),new ah(null);const f=window.open(e||"",a,d);ae(f,n,"popup-blocked");try{f.focus()}catch{}return new ah(f)}function rE(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
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
 */const iE="__/auth/handler",sE="emulator/auth/handler",oE=encodeURIComponent("fac");async function ch(n,e,t,r,i,s){ae(n.config.authDomain,n,"auth-domain-config-required"),ae(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:$r,eventId:i};if(e instanceof xa){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",B_(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,f]of Object.entries({}))o[d]=f}if(e instanceof Gs){const d=e.getScopes().filter(f=>f!=="");d.length>0&&(o.scopes=d.join(","))}n.tenantId&&(o.tid=n.tenantId);const a=o;for(const d of Object.keys(a))a[d]===void 0&&delete a[d];const l=await n._getAppCheckToken(),u=l?`#${oE}=${encodeURIComponent(l)}`:"";return`${aE(n)}?${Bs(a).slice(1)}${u}`}function aE({config:n}){return n.emulator?Cl(n,sE):`https://${n.authDomain}/${iE}`}/**
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
 */const Sc="webStorageSupport";class cE{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=zm,this._completeRedirectFn=Jm,this._overrideRedirectResult=x0}async _openPopup(e,t,r,i){var o;fn((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const s=await ch(e,t,r,Kc(),i);return nE(e,s,Ol())}async _openRedirect(e,t,r,i){await this._originValidation(e);const s=await ch(e,t,r,Kc(),i);return u0(s),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:i,promise:s}=this.eventManagers[t];return i?Promise.resolve(i):(fn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await Q0(e),r=new F0(e);return t.register("authEvent",i=>(ae(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Sc,{type:Sc},i=>{var o;const s=(o=i==null?void 0:i[0])==null?void 0:o[Sc];s!==void 0&&t(!!s),Dt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=$0(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Cm()||Sm()||Nl()}}const lE=cE;var lh="@firebase/auth",uh="1.13.0";/**
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
 */class uE{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){ae(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function dE(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function hE(n){Pr(new Gn("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;ae(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Dm(n)},u=new PT(r,i,s,l);return VT(u,t),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),Pr(new Gn("auth-internal",e=>{const t=Ut(e.getProvider("auth").getImmediate());return(r=>new uE(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Jt(lh,uh,dE(n)),Jt(lh,uh,"esm2020")}/**
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
 */const fE=300,mE=sm("authIdTokenMaxAge")||fE;let dh=null;const pE=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>mE)return;const i=t==null?void 0:t.token;dh!==i&&(dh=i,await fetch(n,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function gE(n=Ra()){const e=Aa(n,"auth");if(e.isInitialized())return e.getImmediate();const t=LT(n,{popupRedirectResolver:lE,persistence:[w0,a0,zm]}),r=sm("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=pE(s.toString());n0(t,o,()=>o(t.currentUser)),t0(t,a=>o(a))}}const i=nm("auth");return i&&$T(t,`http://${i}`),t}function yE(){var n;return((n=document.getElementsByTagName("head"))==null?void 0:n[0])??document}xT({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=i=>{const s=Lt("internal-error");s.customData=i,t(s)},r.type="text/javascript",r.charset="UTF-8",yE().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});hE("Browser");var hh=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Un,Zm;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(b,g){function m(){}m.prototype=g.prototype,b.F=g.prototype,b.prototype=new m,b.prototype.constructor=b,b.D=function(y,T,A){for(var v=Array(arguments.length-2),K=2;K<arguments.length;K++)v[K-2]=arguments[K];return g.prototype[T].apply(y,v)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,t),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(b,g,m){m||(m=0);const y=Array(16);if(typeof g=="string")for(var T=0;T<16;++T)y[T]=g.charCodeAt(m++)|g.charCodeAt(m++)<<8|g.charCodeAt(m++)<<16|g.charCodeAt(m++)<<24;else for(T=0;T<16;++T)y[T]=g[m++]|g[m++]<<8|g[m++]<<16|g[m++]<<24;g=b.g[0],m=b.g[1],T=b.g[2];let A=b.g[3],v;v=g+(A^m&(T^A))+y[0]+3614090360&4294967295,g=m+(v<<7&4294967295|v>>>25),v=A+(T^g&(m^T))+y[1]+3905402710&4294967295,A=g+(v<<12&4294967295|v>>>20),v=T+(m^A&(g^m))+y[2]+606105819&4294967295,T=A+(v<<17&4294967295|v>>>15),v=m+(g^T&(A^g))+y[3]+3250441966&4294967295,m=T+(v<<22&4294967295|v>>>10),v=g+(A^m&(T^A))+y[4]+4118548399&4294967295,g=m+(v<<7&4294967295|v>>>25),v=A+(T^g&(m^T))+y[5]+1200080426&4294967295,A=g+(v<<12&4294967295|v>>>20),v=T+(m^A&(g^m))+y[6]+2821735955&4294967295,T=A+(v<<17&4294967295|v>>>15),v=m+(g^T&(A^g))+y[7]+4249261313&4294967295,m=T+(v<<22&4294967295|v>>>10),v=g+(A^m&(T^A))+y[8]+1770035416&4294967295,g=m+(v<<7&4294967295|v>>>25),v=A+(T^g&(m^T))+y[9]+2336552879&4294967295,A=g+(v<<12&4294967295|v>>>20),v=T+(m^A&(g^m))+y[10]+4294925233&4294967295,T=A+(v<<17&4294967295|v>>>15),v=m+(g^T&(A^g))+y[11]+2304563134&4294967295,m=T+(v<<22&4294967295|v>>>10),v=g+(A^m&(T^A))+y[12]+1804603682&4294967295,g=m+(v<<7&4294967295|v>>>25),v=A+(T^g&(m^T))+y[13]+4254626195&4294967295,A=g+(v<<12&4294967295|v>>>20),v=T+(m^A&(g^m))+y[14]+2792965006&4294967295,T=A+(v<<17&4294967295|v>>>15),v=m+(g^T&(A^g))+y[15]+1236535329&4294967295,m=T+(v<<22&4294967295|v>>>10),v=g+(T^A&(m^T))+y[1]+4129170786&4294967295,g=m+(v<<5&4294967295|v>>>27),v=A+(m^T&(g^m))+y[6]+3225465664&4294967295,A=g+(v<<9&4294967295|v>>>23),v=T+(g^m&(A^g))+y[11]+643717713&4294967295,T=A+(v<<14&4294967295|v>>>18),v=m+(A^g&(T^A))+y[0]+3921069994&4294967295,m=T+(v<<20&4294967295|v>>>12),v=g+(T^A&(m^T))+y[5]+3593408605&4294967295,g=m+(v<<5&4294967295|v>>>27),v=A+(m^T&(g^m))+y[10]+38016083&4294967295,A=g+(v<<9&4294967295|v>>>23),v=T+(g^m&(A^g))+y[15]+3634488961&4294967295,T=A+(v<<14&4294967295|v>>>18),v=m+(A^g&(T^A))+y[4]+3889429448&4294967295,m=T+(v<<20&4294967295|v>>>12),v=g+(T^A&(m^T))+y[9]+568446438&4294967295,g=m+(v<<5&4294967295|v>>>27),v=A+(m^T&(g^m))+y[14]+3275163606&4294967295,A=g+(v<<9&4294967295|v>>>23),v=T+(g^m&(A^g))+y[3]+4107603335&4294967295,T=A+(v<<14&4294967295|v>>>18),v=m+(A^g&(T^A))+y[8]+1163531501&4294967295,m=T+(v<<20&4294967295|v>>>12),v=g+(T^A&(m^T))+y[13]+2850285829&4294967295,g=m+(v<<5&4294967295|v>>>27),v=A+(m^T&(g^m))+y[2]+4243563512&4294967295,A=g+(v<<9&4294967295|v>>>23),v=T+(g^m&(A^g))+y[7]+1735328473&4294967295,T=A+(v<<14&4294967295|v>>>18),v=m+(A^g&(T^A))+y[12]+2368359562&4294967295,m=T+(v<<20&4294967295|v>>>12),v=g+(m^T^A)+y[5]+4294588738&4294967295,g=m+(v<<4&4294967295|v>>>28),v=A+(g^m^T)+y[8]+2272392833&4294967295,A=g+(v<<11&4294967295|v>>>21),v=T+(A^g^m)+y[11]+1839030562&4294967295,T=A+(v<<16&4294967295|v>>>16),v=m+(T^A^g)+y[14]+4259657740&4294967295,m=T+(v<<23&4294967295|v>>>9),v=g+(m^T^A)+y[1]+2763975236&4294967295,g=m+(v<<4&4294967295|v>>>28),v=A+(g^m^T)+y[4]+1272893353&4294967295,A=g+(v<<11&4294967295|v>>>21),v=T+(A^g^m)+y[7]+4139469664&4294967295,T=A+(v<<16&4294967295|v>>>16),v=m+(T^A^g)+y[10]+3200236656&4294967295,m=T+(v<<23&4294967295|v>>>9),v=g+(m^T^A)+y[13]+681279174&4294967295,g=m+(v<<4&4294967295|v>>>28),v=A+(g^m^T)+y[0]+3936430074&4294967295,A=g+(v<<11&4294967295|v>>>21),v=T+(A^g^m)+y[3]+3572445317&4294967295,T=A+(v<<16&4294967295|v>>>16),v=m+(T^A^g)+y[6]+76029189&4294967295,m=T+(v<<23&4294967295|v>>>9),v=g+(m^T^A)+y[9]+3654602809&4294967295,g=m+(v<<4&4294967295|v>>>28),v=A+(g^m^T)+y[12]+3873151461&4294967295,A=g+(v<<11&4294967295|v>>>21),v=T+(A^g^m)+y[15]+530742520&4294967295,T=A+(v<<16&4294967295|v>>>16),v=m+(T^A^g)+y[2]+3299628645&4294967295,m=T+(v<<23&4294967295|v>>>9),v=g+(T^(m|~A))+y[0]+4096336452&4294967295,g=m+(v<<6&4294967295|v>>>26),v=A+(m^(g|~T))+y[7]+1126891415&4294967295,A=g+(v<<10&4294967295|v>>>22),v=T+(g^(A|~m))+y[14]+2878612391&4294967295,T=A+(v<<15&4294967295|v>>>17),v=m+(A^(T|~g))+y[5]+4237533241&4294967295,m=T+(v<<21&4294967295|v>>>11),v=g+(T^(m|~A))+y[12]+1700485571&4294967295,g=m+(v<<6&4294967295|v>>>26),v=A+(m^(g|~T))+y[3]+2399980690&4294967295,A=g+(v<<10&4294967295|v>>>22),v=T+(g^(A|~m))+y[10]+4293915773&4294967295,T=A+(v<<15&4294967295|v>>>17),v=m+(A^(T|~g))+y[1]+2240044497&4294967295,m=T+(v<<21&4294967295|v>>>11),v=g+(T^(m|~A))+y[8]+1873313359&4294967295,g=m+(v<<6&4294967295|v>>>26),v=A+(m^(g|~T))+y[15]+4264355552&4294967295,A=g+(v<<10&4294967295|v>>>22),v=T+(g^(A|~m))+y[6]+2734768916&4294967295,T=A+(v<<15&4294967295|v>>>17),v=m+(A^(T|~g))+y[13]+1309151649&4294967295,m=T+(v<<21&4294967295|v>>>11),v=g+(T^(m|~A))+y[4]+4149444226&4294967295,g=m+(v<<6&4294967295|v>>>26),v=A+(m^(g|~T))+y[11]+3174756917&4294967295,A=g+(v<<10&4294967295|v>>>22),v=T+(g^(A|~m))+y[2]+718787259&4294967295,T=A+(v<<15&4294967295|v>>>17),v=m+(A^(T|~g))+y[9]+3951481745&4294967295,b.g[0]=b.g[0]+g&4294967295,b.g[1]=b.g[1]+(T+(v<<21&4294967295|v>>>11))&4294967295,b.g[2]=b.g[2]+T&4294967295,b.g[3]=b.g[3]+A&4294967295}r.prototype.v=function(b,g){g===void 0&&(g=b.length);const m=g-this.blockSize,y=this.C;let T=this.h,A=0;for(;A<g;){if(T==0)for(;A<=m;)i(this,b,A),A+=this.blockSize;if(typeof b=="string"){for(;A<g;)if(y[T++]=b.charCodeAt(A++),T==this.blockSize){i(this,y),T=0;break}}else for(;A<g;)if(y[T++]=b[A++],T==this.blockSize){i(this,y),T=0;break}}this.h=T,this.o+=g},r.prototype.A=function(){var b=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);b[0]=128;for(var g=1;g<b.length-8;++g)b[g]=0;g=this.o*8;for(var m=b.length-8;m<b.length;++m)b[m]=g&255,g/=256;for(this.v(b),b=Array(16),g=0,m=0;m<4;++m)for(let y=0;y<32;y+=8)b[g++]=this.g[m]>>>y&255;return b};function s(b,g){var m=a;return Object.prototype.hasOwnProperty.call(m,b)?m[b]:m[b]=g(b)}function o(b,g){this.h=g;const m=[];let y=!0;for(let T=b.length-1;T>=0;T--){const A=b[T]|0;y&&A==g||(m[T]=A,y=!1)}this.g=m}var a={};function l(b){return-128<=b&&b<128?s(b,function(g){return new o([g|0],g<0?-1:0)}):new o([b|0],b<0?-1:0)}function u(b){if(isNaN(b)||!isFinite(b))return f;if(b<0)return P(u(-b));const g=[];let m=1;for(let y=0;b>=m;y++)g[y]=b/m|0,m*=4294967296;return new o(g,0)}function d(b,g){if(b.length==0)throw Error("number format error: empty string");if(g=g||10,g<2||36<g)throw Error("radix out of range: "+g);if(b.charAt(0)=="-")return P(d(b.substring(1),g));if(b.indexOf("-")>=0)throw Error('number format error: interior "-" character');const m=u(Math.pow(g,8));let y=f;for(let A=0;A<b.length;A+=8){var T=Math.min(8,b.length-A);const v=parseInt(b.substring(A,A+T),g);T<8?(T=u(Math.pow(g,T)),y=y.j(T).add(u(v))):(y=y.j(m),y=y.add(u(v)))}return y}var f=l(0),_=l(1),I=l(16777216);n=o.prototype,n.m=function(){if(S(this))return-P(this).m();let b=0,g=1;for(let m=0;m<this.g.length;m++){const y=this.i(m);b+=(y>=0?y:4294967296+y)*g,g*=4294967296}return b},n.toString=function(b){if(b=b||10,b<2||36<b)throw Error("radix out of range: "+b);if(w(this))return"0";if(S(this))return"-"+P(this).toString(b);const g=u(Math.pow(b,6));var m=this;let y="";for(;;){const T=C(m,g).g;m=F(m,T.j(g));let A=((m.g.length>0?m.g[0]:m.h)>>>0).toString(b);if(m=T,w(m))return A+y;for(;A.length<6;)A="0"+A;y=A+y}},n.i=function(b){return b<0?0:b<this.g.length?this.g[b]:this.h};function w(b){if(b.h!=0)return!1;for(let g=0;g<b.g.length;g++)if(b.g[g]!=0)return!1;return!0}function S(b){return b.h==-1}n.l=function(b){return b=F(this,b),S(b)?-1:w(b)?0:1};function P(b){const g=b.g.length,m=[];for(let y=0;y<g;y++)m[y]=~b.g[y];return new o(m,~b.h).add(_)}n.abs=function(){return S(this)?P(this):this},n.add=function(b){const g=Math.max(this.g.length,b.g.length),m=[];let y=0;for(let T=0;T<=g;T++){let A=y+(this.i(T)&65535)+(b.i(T)&65535),v=(A>>>16)+(this.i(T)>>>16)+(b.i(T)>>>16);y=v>>>16,A&=65535,v&=65535,m[T]=v<<16|A}return new o(m,m[m.length-1]&-2147483648?-1:0)};function F(b,g){return b.add(P(g))}n.j=function(b){if(w(this)||w(b))return f;if(S(this))return S(b)?P(this).j(P(b)):P(P(this).j(b));if(S(b))return P(this.j(P(b)));if(this.l(I)<0&&b.l(I)<0)return u(this.m()*b.m());const g=this.g.length+b.g.length,m=[];for(var y=0;y<2*g;y++)m[y]=0;for(y=0;y<this.g.length;y++)for(let T=0;T<b.g.length;T++){const A=this.i(y)>>>16,v=this.i(y)&65535,K=b.i(T)>>>16,fe=b.i(T)&65535;m[2*y+2*T]+=v*fe,x(m,2*y+2*T),m[2*y+2*T+1]+=A*fe,x(m,2*y+2*T+1),m[2*y+2*T+1]+=v*K,x(m,2*y+2*T+1),m[2*y+2*T+2]+=A*K,x(m,2*y+2*T+2)}for(b=0;b<g;b++)m[b]=m[2*b+1]<<16|m[2*b];for(b=g;b<2*g;b++)m[b]=0;return new o(m,0)};function x(b,g){for(;(b[g]&65535)!=b[g];)b[g+1]+=b[g]>>>16,b[g]&=65535,g++}function k(b,g){this.g=b,this.h=g}function C(b,g){if(w(g))throw Error("division by zero");if(w(b))return new k(f,f);if(S(b))return g=C(P(b),g),new k(P(g.g),P(g.h));if(S(g))return g=C(b,P(g)),new k(P(g.g),g.h);if(b.g.length>30){if(S(b)||S(g))throw Error("slowDivide_ only works with positive integers.");for(var m=_,y=g;y.l(b)<=0;)m=L(m),y=L(y);var T=V(m,1),A=V(y,1);for(y=V(y,2),m=V(m,2);!w(y);){var v=A.add(y);v.l(b)<=0&&(T=T.add(m),A=v),y=V(y,1),m=V(m,1)}return g=F(b,T.j(g)),new k(T,g)}for(T=f;b.l(g)>=0;){for(m=Math.max(1,Math.floor(b.m()/g.m())),y=Math.ceil(Math.log(m)/Math.LN2),y=y<=48?1:Math.pow(2,y-48),A=u(m),v=A.j(g);S(v)||v.l(b)>0;)m-=y,A=u(m),v=A.j(g);w(A)&&(A=_),T=T.add(A),b=F(b,v)}return new k(T,b)}n.B=function(b){return C(this,b).h},n.and=function(b){const g=Math.max(this.g.length,b.g.length),m=[];for(let y=0;y<g;y++)m[y]=this.i(y)&b.i(y);return new o(m,this.h&b.h)},n.or=function(b){const g=Math.max(this.g.length,b.g.length),m=[];for(let y=0;y<g;y++)m[y]=this.i(y)|b.i(y);return new o(m,this.h|b.h)},n.xor=function(b){const g=Math.max(this.g.length,b.g.length),m=[];for(let y=0;y<g;y++)m[y]=this.i(y)^b.i(y);return new o(m,this.h^b.h)};function L(b){const g=b.g.length+1,m=[];for(let y=0;y<g;y++)m[y]=b.i(y)<<1|b.i(y-1)>>>31;return new o(m,b.h)}function V(b,g){const m=g>>5;g%=32;const y=b.g.length-m,T=[];for(let A=0;A<y;A++)T[A]=g>0?b.i(A+m)>>>g|b.i(A+m+1)<<32-g:b.i(A+m);return new o(T,b.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,Zm=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=d,Un=o}).apply(typeof hh<"u"?hh:typeof self<"u"?self:typeof window<"u"?window:{});var go=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ep,cs,tp,Mo,Xc,np,rp,ip;(function(){var n,e=Object.defineProperty;function t(c){c=[typeof globalThis=="object"&&globalThis,c,typeof window=="object"&&window,typeof self=="object"&&self,typeof go=="object"&&go];for(var h=0;h<c.length;++h){var p=c[h];if(p&&p.Math==Math)return p}throw Error("Cannot find global object")}var r=t(this);function i(c,h){if(h)e:{var p=r;c=c.split(".");for(var E=0;E<c.length-1;E++){var N=c[E];if(!(N in p))break e;p=p[N]}c=c[c.length-1],E=p[c],h=h(E),h!=E&&h!=null&&e(p,c,{configurable:!0,writable:!0,value:h})}}i("Symbol.dispose",function(c){return c||Symbol("Symbol.dispose")}),i("Array.prototype.values",function(c){return c||function(){return this[Symbol.iterator]()}}),i("Object.entries",function(c){return c||function(h){var p=[],E;for(E in h)Object.prototype.hasOwnProperty.call(h,E)&&p.push([E,h[E]]);return p}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var s=s||{},o=this||self;function a(c){var h=typeof c;return h=="object"&&c!=null||h=="function"}function l(c,h,p){return c.call.apply(c.bind,arguments)}function u(c,h,p){return u=l,u.apply(null,arguments)}function d(c,h){var p=Array.prototype.slice.call(arguments,1);return function(){var E=p.slice();return E.push.apply(E,arguments),c.apply(this,E)}}function f(c,h){function p(){}p.prototype=h.prototype,c.Z=h.prototype,c.prototype=new p,c.prototype.constructor=c,c.Ob=function(E,N,M){for(var G=Array(arguments.length-2),pe=2;pe<arguments.length;pe++)G[pe-2]=arguments[pe];return h.prototype[N].apply(E,G)}}var _=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?c=>c&&AsyncContext.Snapshot.wrap(c):c=>c;function I(c){const h=c.length;if(h>0){const p=Array(h);for(let E=0;E<h;E++)p[E]=c[E];return p}return[]}function w(c,h){for(let E=1;E<arguments.length;E++){const N=arguments[E];var p=typeof N;if(p=p!="object"?p:N?Array.isArray(N)?"array":p:"null",p=="array"||p=="object"&&typeof N.length=="number"){p=c.length||0;const M=N.length||0;c.length=p+M;for(let G=0;G<M;G++)c[p+G]=N[G]}else c.push(N)}}class S{constructor(h,p){this.i=h,this.j=p,this.h=0,this.g=null}get(){let h;return this.h>0?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function P(c){o.setTimeout(()=>{throw c},0)}function F(){var c=b;let h=null;return c.g&&(h=c.g,c.g=c.g.next,c.g||(c.h=null),h.next=null),h}class x{constructor(){this.h=this.g=null}add(h,p){const E=k.get();E.set(h,p),this.h?this.h.next=E:this.g=E,this.h=E}}var k=new S(()=>new C,c=>c.reset());class C{constructor(){this.next=this.g=this.h=null}set(h,p){this.h=h,this.g=p,this.next=null}reset(){this.next=this.g=this.h=null}}let L,V=!1,b=new x,g=()=>{const c=Promise.resolve(void 0);L=()=>{c.then(m)}};function m(){for(var c;c=F();){try{c.h.call(c.g)}catch(p){P(p)}var h=k;h.j(c),h.h<100&&(h.h++,c.next=h.g,h.g=c)}V=!1}function y(){this.u=this.u,this.C=this.C}y.prototype.u=!1,y.prototype.dispose=function(){this.u||(this.u=!0,this.N())},y.prototype[Symbol.dispose]=function(){this.dispose()},y.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function T(c,h){this.type=c,this.g=this.target=h,this.defaultPrevented=!1}T.prototype.h=function(){this.defaultPrevented=!0};var A=(function(){if(!o.addEventListener||!Object.defineProperty)return!1;var c=!1,h=Object.defineProperty({},"passive",{get:function(){c=!0}});try{const p=()=>{};o.addEventListener("test",p,h),o.removeEventListener("test",p,h)}catch{}return c})();function v(c){return/^[\s\xa0]*$/.test(c)}function K(c,h){T.call(this,c?c.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,c&&this.init(c,h)}f(K,T),K.prototype.init=function(c,h){const p=this.type=c.type,E=c.changedTouches&&c.changedTouches.length?c.changedTouches[0]:null;this.target=c.target||c.srcElement,this.g=h,h=c.relatedTarget,h||(p=="mouseover"?h=c.fromElement:p=="mouseout"&&(h=c.toElement)),this.relatedTarget=h,E?(this.clientX=E.clientX!==void 0?E.clientX:E.pageX,this.clientY=E.clientY!==void 0?E.clientY:E.pageY,this.screenX=E.screenX||0,this.screenY=E.screenY||0):(this.clientX=c.clientX!==void 0?c.clientX:c.pageX,this.clientY=c.clientY!==void 0?c.clientY:c.pageY,this.screenX=c.screenX||0,this.screenY=c.screenY||0),this.button=c.button,this.key=c.key||"",this.ctrlKey=c.ctrlKey,this.altKey=c.altKey,this.shiftKey=c.shiftKey,this.metaKey=c.metaKey,this.pointerId=c.pointerId||0,this.pointerType=c.pointerType,this.state=c.state,this.i=c,c.defaultPrevented&&K.Z.h.call(this)},K.prototype.h=function(){K.Z.h.call(this);const c=this.i;c.preventDefault?c.preventDefault():c.returnValue=!1};var fe="closure_listenable_"+(Math.random()*1e6|0),te=0;function Te(c,h,p,E,N){this.listener=c,this.proxy=null,this.src=h,this.type=p,this.capture=!!E,this.ha=N,this.key=++te,this.da=this.fa=!1}function me(c){c.da=!0,c.listener=null,c.proxy=null,c.src=null,c.ha=null}function de(c,h,p){for(const E in c)h.call(p,c[E],E,c)}function re(c,h){for(const p in c)h.call(void 0,c[p],p,c)}function X(c){const h={};for(const p in c)h[p]=c[p];return h}const ie="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Q(c,h){let p,E;for(let N=1;N<arguments.length;N++){E=arguments[N];for(p in E)c[p]=E[p];for(let M=0;M<ie.length;M++)p=ie[M],Object.prototype.hasOwnProperty.call(E,p)&&(c[p]=E[p])}}function _e(c){this.src=c,this.g={},this.h=0}_e.prototype.add=function(c,h,p,E,N){const M=c.toString();c=this.g[M],c||(c=this.g[M]=[],this.h++);const G=be(c,h,E,N);return G>-1?(h=c[G],p||(h.fa=!1)):(h=new Te(h,this.src,M,!!E,N),h.fa=p,c.push(h)),h};function ke(c,h){const p=h.type;if(p in c.g){var E=c.g[p],N=Array.prototype.indexOf.call(E,h,void 0),M;(M=N>=0)&&Array.prototype.splice.call(E,N,1),M&&(me(h),c.g[p].length==0&&(delete c.g[p],c.h--))}}function be(c,h,p,E){for(let N=0;N<c.length;++N){const M=c[N];if(!M.da&&M.listener==h&&M.capture==!!p&&M.ha==E)return N}return-1}var Se="closure_lm_"+(Math.random()*1e6|0),Ae={};function J(c,h,p,E,N){if(Array.isArray(h)){for(let M=0;M<h.length;M++)J(c,h[M],p,E,N);return null}return p=Ve(p),c&&c[fe]?c.J(h,p,a(E)?!!E.capture:!1,N):U(c,h,p,!1,E,N)}function U(c,h,p,E,N,M){if(!h)throw Error("Invalid event type");const G=a(N)?!!N.capture:!!N;let pe=ce(c);if(pe||(c[Se]=pe=new _e(c)),p=pe.add(h,p,E,G,M),p.proxy)return p;if(E=j(),p.proxy=E,E.src=c,E.listener=p,c.addEventListener)A||(N=G),N===void 0&&(N=!1),c.addEventListener(h.toString(),E,N);else if(c.attachEvent)c.attachEvent(Y(h.toString()),E);else if(c.addListener&&c.removeListener)c.addListener(E);else throw Error("addEventListener and attachEvent are unavailable.");return p}function j(){function c(p){return h.call(c.src,c.listener,p)}const h=Z;return c}function R(c,h,p,E,N){if(Array.isArray(h))for(var M=0;M<h.length;M++)R(c,h[M],p,E,N);else E=a(E)?!!E.capture:!!E,p=Ve(p),c&&c[fe]?(c=c.i,M=String(h).toString(),M in c.g&&(h=c.g[M],p=be(h,p,E,N),p>-1&&(me(h[p]),Array.prototype.splice.call(h,p,1),h.length==0&&(delete c.g[M],c.h--)))):c&&(c=ce(c))&&(h=c.g[h.toString()],c=-1,h&&(c=be(h,p,E,N)),(p=c>-1?h[c]:null)&&O(p))}function O(c){if(typeof c!="number"&&c&&!c.da){var h=c.src;if(h&&h[fe])ke(h.i,c);else{var p=c.type,E=c.proxy;h.removeEventListener?h.removeEventListener(p,E,c.capture):h.detachEvent?h.detachEvent(Y(p),E):h.addListener&&h.removeListener&&h.removeListener(E),(p=ce(h))?(ke(p,c),p.h==0&&(p.src=null,h[Se]=null)):me(c)}}}function Y(c){return c in Ae?Ae[c]:Ae[c]="on"+c}function Z(c,h){if(c.da)c=!0;else{h=new K(h,this);const p=c.listener,E=c.ha||c.src;c.fa&&O(c),c=p.call(E,h)}return c}function ce(c){return c=c[Se],c instanceof _e?c:null}var he="__closure_events_fn_"+(Math.random()*1e9>>>0);function Ve(c){return typeof c=="function"?c:(c[he]||(c[he]=function(h){return c.handleEvent(h)}),c[he])}function Pe(){y.call(this),this.i=new _e(this),this.M=this,this.G=null}f(Pe,y),Pe.prototype[fe]=!0,Pe.prototype.removeEventListener=function(c,h,p,E){R(this,c,h,p,E)};function Ne(c,h){var p,E=c.G;if(E)for(p=[];E;E=E.G)p.push(E);if(c=c.M,E=h.type||h,typeof h=="string")h=new T(h,c);else if(h instanceof T)h.target=h.target||c;else{var N=h;h=new T(E,c),Q(h,N)}N=!0;let M,G;if(p)for(G=p.length-1;G>=0;G--)M=h.g=p[G],N=pt(M,E,!0,h)&&N;if(M=h.g=c,N=pt(M,E,!0,h)&&N,N=pt(M,E,!1,h)&&N,p)for(G=0;G<p.length;G++)M=h.g=p[G],N=pt(M,E,!1,h)&&N}Pe.prototype.N=function(){if(Pe.Z.N.call(this),this.i){var c=this.i;for(const h in c.g){const p=c.g[h];for(let E=0;E<p.length;E++)me(p[E]);delete c.g[h],c.h--}}this.G=null},Pe.prototype.J=function(c,h,p,E){return this.i.add(String(c),h,!1,p,E)},Pe.prototype.K=function(c,h,p,E){return this.i.add(String(c),h,!0,p,E)};function pt(c,h,p,E){if(h=c.i.g[String(h)],!h)return!0;h=h.concat();let N=!0;for(let M=0;M<h.length;++M){const G=h[M];if(G&&!G.da&&G.capture==p){const pe=G.listener,Xe=G.ha||G.src;G.fa&&ke(c.i,G),N=pe.call(Xe,E)!==!1&&N}}return N&&!E.defaultPrevented}function _n(c,h){if(typeof c!="function")if(c&&typeof c.handleEvent=="function")c=u(c.handleEvent,c);else throw Error("Invalid listener argument");return Number(h)>2147483647?-1:o.setTimeout(c,h||0)}function wn(c){c.g=_n(()=>{c.g=null,c.i&&(c.i=!1,wn(c))},c.l);const h=c.h;c.h=null,c.m.apply(null,h)}class nr extends y{constructor(h,p){super(),this.m=h,this.l=p,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:wn(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Tn(c){y.call(this),this.h=c,this.g={}}f(Tn,y);var rn=[];function sn(c){de(c.g,function(h,p){this.g.hasOwnProperty(p)&&O(h)},c),c.g={}}Tn.prototype.N=function(){Tn.Z.N.call(this),sn(this)},Tn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Re=o.JSON.stringify,At=o.JSON.parse,on=class{stringify(c){return o.JSON.stringify(c,void 0)}parse(c){return o.JSON.parse(c,void 0)}};function Fi(){}function Wu(){}var Mi={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function rc(){T.call(this,"d")}f(rc,T);function ic(){T.call(this,"c")}f(ic,T);var rr={},Ku=null;function ro(){return Ku=Ku||new Pe}rr.Ia="serverreachability";function Yu(c){T.call(this,rr.Ia,c)}f(Yu,T);function Oi(c){const h=ro();Ne(h,new Yu(h))}rr.STAT_EVENT="statevent";function Qu(c,h){T.call(this,rr.STAT_EVENT,c),this.stat=h}f(Qu,T);function dt(c){const h=ro();Ne(h,new Qu(h,c))}rr.Ja="timingevent";function Ju(c,h){T.call(this,rr.Ja,c),this.size=h}f(Ju,T);function Li(c,h){if(typeof c!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){c()},h)}function Vi(){this.g=!0}Vi.prototype.ua=function(){this.g=!1};function t_(c,h,p,E,N,M){c.info(function(){if(c.g)if(M){var G="",pe=M.split("&");for(let Oe=0;Oe<pe.length;Oe++){var Xe=pe[Oe].split("=");if(Xe.length>1){const tt=Xe[0];Xe=Xe[1];const qt=tt.split("_");G=qt.length>=2&&qt[1]=="type"?G+(tt+"="+Xe+"&"):G+(tt+"=redacted&")}}}else G=null;else G=M;return"XMLHTTP REQ ("+E+") [attempt "+N+"]: "+h+`
`+p+`
`+G})}function n_(c,h,p,E,N,M,G){c.info(function(){return"XMLHTTP RESP ("+E+") [ attempt "+N+"]: "+h+`
`+p+`
`+M+" "+G})}function Gr(c,h,p,E){c.info(function(){return"XMLHTTP TEXT ("+h+"): "+i_(c,p)+(E?" "+E:"")})}function r_(c,h){c.info(function(){return"TIMEOUT: "+h})}Vi.prototype.info=function(){};function i_(c,h){if(!c.g)return h;if(!h)return null;try{const M=JSON.parse(h);if(M){for(c=0;c<M.length;c++)if(Array.isArray(M[c])){var p=M[c];if(!(p.length<2)){var E=p[1];if(Array.isArray(E)&&!(E.length<1)){var N=E[0];if(N!="noop"&&N!="stop"&&N!="close")for(let G=1;G<E.length;G++)E[G]=""}}}}return Re(M)}catch{return h}}var io={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Xu={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Zu;function sc(){}f(sc,Fi),sc.prototype.g=function(){return new XMLHttpRequest},Zu=new sc;function $i(c){return encodeURIComponent(String(c))}function s_(c){var h=1;c=c.split(":");const p=[];for(;h>0&&c.length;)p.push(c.shift()),h--;return c.length&&p.push(c.join(":")),p}function En(c,h,p,E){this.j=c,this.i=h,this.l=p,this.S=E||1,this.V=new Tn(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new ed}function ed(){this.i=null,this.g="",this.h=!1}var td={},oc={};function ac(c,h,p){c.M=1,c.A=oo(Bt(h)),c.u=p,c.R=!0,nd(c,null)}function nd(c,h){c.F=Date.now(),so(c),c.B=Bt(c.A);var p=c.B,E=c.S;Array.isArray(E)||(E=[String(E)]),pd(p.i,"t",E),c.C=0,p=c.j.L,c.h=new ed,c.g=Nd(c.j,p?h:null,!c.u),c.P>0&&(c.O=new nr(u(c.Y,c,c.g),c.P)),h=c.V,p=c.g,E=c.ba;var N="readystatechange";Array.isArray(N)||(N&&(rn[0]=N.toString()),N=rn);for(let M=0;M<N.length;M++){const G=J(p,N[M],E||h.handleEvent,!1,h.h||h);if(!G)break;h.g[G.key]=G}h=c.J?X(c.J):{},c.u?(c.v||(c.v="POST"),h["Content-Type"]="application/x-www-form-urlencoded",c.g.ea(c.B,c.v,c.u,h)):(c.v="GET",c.g.ea(c.B,c.v,null,h)),Oi(),t_(c.i,c.v,c.B,c.l,c.S,c.u)}En.prototype.ba=function(c){c=c.target;const h=this.O;h&&In(c)==3?h.j():this.Y(c)},En.prototype.Y=function(c){try{if(c==this.g)e:{const pe=In(this.g),Xe=this.g.ya(),Oe=this.g.ca();if(!(pe<3)&&(pe!=3||this.g&&(this.h.h||this.g.la()||vd(this.g)))){this.K||pe!=4||Xe==7||(Xe==8||Oe<=0?Oi(3):Oi(2)),cc(this);var h=this.g.ca();this.X=h;var p=o_(this);if(this.o=h==200,n_(this.i,this.v,this.B,this.l,this.S,pe,h),this.o){if(this.U&&!this.L){t:{if(this.g){var E,N=this.g;if((E=N.g?N.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!v(E)){var M=E;break t}}M=null}if(c=M)Gr(this.i,this.l,c,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,lc(this,c);else{this.o=!1,this.m=3,dt(12),ir(this),Ui(this);break e}}if(this.R){c=!0;let tt;for(;!this.K&&this.C<p.length;)if(tt=a_(this,p),tt==oc){pe==4&&(this.m=4,dt(14),c=!1),Gr(this.i,this.l,null,"[Incomplete Response]");break}else if(tt==td){this.m=4,dt(15),Gr(this.i,this.l,p,"[Invalid Chunk]"),c=!1;break}else Gr(this.i,this.l,tt,null),lc(this,tt);if(rd(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),pe!=4||p.length!=0||this.h.h||(this.m=1,dt(16),c=!1),this.o=this.o&&c,!c)Gr(this.i,this.l,p,"[Invalid Chunked Response]"),ir(this),Ui(this);else if(p.length>0&&!this.W){this.W=!0;var G=this.j;G.g==this&&G.aa&&!G.P&&(G.j.info("Great, no buffering proxy detected. Bytes received: "+p.length),yc(G),G.P=!0,dt(11))}}else Gr(this.i,this.l,p,null),lc(this,p);pe==4&&ir(this),this.o&&!this.K&&(pe==4?xd(this.j,this):(this.o=!1,so(this)))}else E_(this.g),h==400&&p.indexOf("Unknown SID")>0?(this.m=3,dt(12)):(this.m=0,dt(13)),ir(this),Ui(this)}}}catch{}finally{}};function o_(c){if(!rd(c))return c.g.la();const h=vd(c.g);if(h==="")return"";let p="";const E=h.length,N=In(c.g)==4;if(!c.h.i){if(typeof TextDecoder>"u")return ir(c),Ui(c),"";c.h.i=new o.TextDecoder}for(let M=0;M<E;M++)c.h.h=!0,p+=c.h.i.decode(h[M],{stream:!(N&&M==E-1)});return h.length=0,c.h.g+=p,c.C=0,c.h.g}function rd(c){return c.g?c.v=="GET"&&c.M!=2&&c.j.Aa:!1}function a_(c,h){var p=c.C,E=h.indexOf(`
`,p);return E==-1?oc:(p=Number(h.substring(p,E)),isNaN(p)?td:(E+=1,E+p>h.length?oc:(h=h.slice(E,E+p),c.C=E+p,h)))}En.prototype.cancel=function(){this.K=!0,ir(this)};function so(c){c.T=Date.now()+c.H,id(c,c.H)}function id(c,h){if(c.D!=null)throw Error("WatchDog timer not null");c.D=Li(u(c.aa,c),h)}function cc(c){c.D&&(o.clearTimeout(c.D),c.D=null)}En.prototype.aa=function(){this.D=null;const c=Date.now();c-this.T>=0?(r_(this.i,this.B),this.M!=2&&(Oi(),dt(17)),ir(this),this.m=2,Ui(this)):id(this,this.T-c)};function Ui(c){c.j.I==0||c.K||xd(c.j,c)}function ir(c){cc(c);var h=c.O;h&&typeof h.dispose=="function"&&h.dispose(),c.O=null,sn(c.V),c.g&&(h=c.g,c.g=null,h.abort(),h.dispose())}function lc(c,h){try{var p=c.j;if(p.I!=0&&(p.g==c||uc(p.h,c))){if(!c.L&&uc(p.h,c)&&p.I==3){try{var E=p.Ba.g.parse(h)}catch{E=null}if(Array.isArray(E)&&E.length==3){var N=E;if(N[0]==0){e:if(!p.v){if(p.g)if(p.g.F+3e3<c.F)ho(p),lo(p);else break e;gc(p),dt(18)}}else p.xa=N[1],0<p.xa-p.K&&N[2]<37500&&p.F&&p.A==0&&!p.C&&(p.C=Li(u(p.Va,p),6e3));ad(p.h)<=1&&p.ta&&(p.ta=void 0)}else or(p,11)}else if((c.L||p.g==c)&&ho(p),!v(h))for(N=p.Ba.g.parse(h),h=0;h<N.length;h++){let Oe=N[h];const tt=Oe[0];if(!(tt<=p.K))if(p.K=tt,Oe=Oe[1],p.I==2)if(Oe[0]=="c"){p.M=Oe[1],p.ba=Oe[2];const qt=Oe[3];qt!=null&&(p.ka=qt,p.j.info("VER="+p.ka));const ar=Oe[4];ar!=null&&(p.za=ar,p.j.info("SVER="+p.za));const Sn=Oe[5];Sn!=null&&typeof Sn=="number"&&Sn>0&&(E=1.5*Sn,p.O=E,p.j.info("backChannelRequestTimeoutMs_="+E)),E=p;const An=c.g;if(An){const mo=An.g?An.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(mo){var M=E.h;M.g||mo.indexOf("spdy")==-1&&mo.indexOf("quic")==-1&&mo.indexOf("h2")==-1||(M.j=M.l,M.g=new Set,M.h&&(dc(M,M.h),M.h=null))}if(E.G){const _c=An.g?An.g.getResponseHeader("X-HTTP-Session-Id"):null;_c&&(E.wa=_c,$e(E.J,E.G,_c))}}p.I=3,p.l&&p.l.ra(),p.aa&&(p.T=Date.now()-c.F,p.j.info("Handshake RTT: "+p.T+"ms")),E=p;var G=c;if(E.na=Dd(E,E.L?E.ba:null,E.W),G.L){cd(E.h,G);var pe=G,Xe=E.O;Xe&&(pe.H=Xe),pe.D&&(cc(pe),so(pe)),E.g=G}else Rd(E);p.i.length>0&&uo(p)}else Oe[0]!="stop"&&Oe[0]!="close"||or(p,7);else p.I==3&&(Oe[0]=="stop"||Oe[0]=="close"?Oe[0]=="stop"?or(p,7):pc(p):Oe[0]!="noop"&&p.l&&p.l.qa(Oe),p.A=0)}}Oi(4)}catch{}}var c_=class{constructor(c,h){this.g=c,this.map=h}};function sd(c){this.l=c||10,o.PerformanceNavigationTiming?(c=o.performance.getEntriesByType("navigation"),c=c.length>0&&(c[0].nextHopProtocol=="hq"||c[0].nextHopProtocol=="h2")):c=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=c?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function od(c){return c.h?!0:c.g?c.g.size>=c.j:!1}function ad(c){return c.h?1:c.g?c.g.size:0}function uc(c,h){return c.h?c.h==h:c.g?c.g.has(h):!1}function dc(c,h){c.g?c.g.add(h):c.h=h}function cd(c,h){c.h&&c.h==h?c.h=null:c.g&&c.g.has(h)&&c.g.delete(h)}sd.prototype.cancel=function(){if(this.i=ld(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const c of this.g.values())c.cancel();this.g.clear()}};function ld(c){if(c.h!=null)return c.i.concat(c.h.G);if(c.g!=null&&c.g.size!==0){let h=c.i;for(const p of c.g.values())h=h.concat(p.G);return h}return I(c.i)}var ud=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function l_(c,h){if(c){c=c.split("&");for(let p=0;p<c.length;p++){const E=c[p].indexOf("=");let N,M=null;E>=0?(N=c[p].substring(0,E),M=c[p].substring(E+1)):N=c[p],h(N,M?decodeURIComponent(M.replace(/\+/g," ")):"")}}}function vn(c){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let h;c instanceof vn?(this.l=c.l,Bi(this,c.j),this.o=c.o,this.g=c.g,qi(this,c.u),this.h=c.h,hc(this,gd(c.i)),this.m=c.m):c&&(h=String(c).match(ud))?(this.l=!1,Bi(this,h[1]||"",!0),this.o=zi(h[2]||""),this.g=zi(h[3]||"",!0),qi(this,h[4]),this.h=zi(h[5]||"",!0),hc(this,h[6]||"",!0),this.m=zi(h[7]||"")):(this.l=!1,this.i=new ji(null,this.l))}vn.prototype.toString=function(){const c=[];var h=this.j;h&&c.push(Gi(h,dd,!0),":");var p=this.g;return(p||h=="file")&&(c.push("//"),(h=this.o)&&c.push(Gi(h,dd,!0),"@"),c.push($i(p).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),p=this.u,p!=null&&c.push(":",String(p))),(p=this.h)&&(this.g&&p.charAt(0)!="/"&&c.push("/"),c.push(Gi(p,p.charAt(0)=="/"?h_:d_,!0))),(p=this.i.toString())&&c.push("?",p),(p=this.m)&&c.push("#",Gi(p,m_)),c.join("")},vn.prototype.resolve=function(c){const h=Bt(this);let p=!!c.j;p?Bi(h,c.j):p=!!c.o,p?h.o=c.o:p=!!c.g,p?h.g=c.g:p=c.u!=null;var E=c.h;if(p)qi(h,c.u);else if(p=!!c.h){if(E.charAt(0)!="/")if(this.g&&!this.h)E="/"+E;else{var N=h.h.lastIndexOf("/");N!=-1&&(E=h.h.slice(0,N+1)+E)}if(N=E,N==".."||N==".")E="";else if(N.indexOf("./")!=-1||N.indexOf("/.")!=-1){E=N.lastIndexOf("/",0)==0,N=N.split("/");const M=[];for(let G=0;G<N.length;){const pe=N[G++];pe=="."?E&&G==N.length&&M.push(""):pe==".."?((M.length>1||M.length==1&&M[0]!="")&&M.pop(),E&&G==N.length&&M.push("")):(M.push(pe),E=!0)}E=M.join("/")}else E=N}return p?h.h=E:p=c.i.toString()!=="",p?hc(h,gd(c.i)):p=!!c.m,p&&(h.m=c.m),h};function Bt(c){return new vn(c)}function Bi(c,h,p){c.j=p?zi(h,!0):h,c.j&&(c.j=c.j.replace(/:$/,""))}function qi(c,h){if(h){if(h=Number(h),isNaN(h)||h<0)throw Error("Bad port number "+h);c.u=h}else c.u=null}function hc(c,h,p){h instanceof ji?(c.i=h,p_(c.i,c.l)):(p||(h=Gi(h,f_)),c.i=new ji(h,c.l))}function $e(c,h,p){c.i.set(h,p)}function oo(c){return $e(c,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),c}function zi(c,h){return c?h?decodeURI(c.replace(/%25/g,"%2525")):decodeURIComponent(c):""}function Gi(c,h,p){return typeof c=="string"?(c=encodeURI(c).replace(h,u_),p&&(c=c.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c):null}function u_(c){return c=c.charCodeAt(0),"%"+(c>>4&15).toString(16)+(c&15).toString(16)}var dd=/[#\/\?@]/g,d_=/[#\?:]/g,h_=/[#\?]/g,f_=/[#\?@]/g,m_=/#/g;function ji(c,h){this.h=this.g=null,this.i=c||null,this.j=!!h}function sr(c){c.g||(c.g=new Map,c.h=0,c.i&&l_(c.i,function(h,p){c.add(decodeURIComponent(h.replace(/\+/g," ")),p)}))}n=ji.prototype,n.add=function(c,h){sr(this),this.i=null,c=jr(this,c);let p=this.g.get(c);return p||this.g.set(c,p=[]),p.push(h),this.h+=1,this};function hd(c,h){sr(c),h=jr(c,h),c.g.has(h)&&(c.i=null,c.h-=c.g.get(h).length,c.g.delete(h))}function fd(c,h){return sr(c),h=jr(c,h),c.g.has(h)}n.forEach=function(c,h){sr(this),this.g.forEach(function(p,E){p.forEach(function(N){c.call(h,N,E,this)},this)},this)};function md(c,h){sr(c);let p=[];if(typeof h=="string")fd(c,h)&&(p=p.concat(c.g.get(jr(c,h))));else for(c=Array.from(c.g.values()),h=0;h<c.length;h++)p=p.concat(c[h]);return p}n.set=function(c,h){return sr(this),this.i=null,c=jr(this,c),fd(this,c)&&(this.h-=this.g.get(c).length),this.g.set(c,[h]),this.h+=1,this},n.get=function(c,h){return c?(c=md(this,c),c.length>0?String(c[0]):h):h};function pd(c,h,p){hd(c,h),p.length>0&&(c.i=null,c.g.set(jr(c,h),I(p)),c.h+=p.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const c=[],h=Array.from(this.g.keys());for(let E=0;E<h.length;E++){var p=h[E];const N=$i(p);p=md(this,p);for(let M=0;M<p.length;M++){let G=N;p[M]!==""&&(G+="="+$i(p[M])),c.push(G)}}return this.i=c.join("&")};function gd(c){const h=new ji;return h.i=c.i,c.g&&(h.g=new Map(c.g),h.h=c.h),h}function jr(c,h){return h=String(h),c.j&&(h=h.toLowerCase()),h}function p_(c,h){h&&!c.j&&(sr(c),c.i=null,c.g.forEach(function(p,E){const N=E.toLowerCase();E!=N&&(hd(this,E),pd(this,N,p))},c)),c.j=h}function g_(c,h){const p=new Vi;if(o.Image){const E=new Image;E.onload=d(bn,p,"TestLoadImage: loaded",!0,h,E),E.onerror=d(bn,p,"TestLoadImage: error",!1,h,E),E.onabort=d(bn,p,"TestLoadImage: abort",!1,h,E),E.ontimeout=d(bn,p,"TestLoadImage: timeout",!1,h,E),o.setTimeout(function(){E.ontimeout&&E.ontimeout()},1e4),E.src=c}else h(!1)}function y_(c,h){const p=new Vi,E=new AbortController,N=setTimeout(()=>{E.abort(),bn(p,"TestPingServer: timeout",!1,h)},1e4);fetch(c,{signal:E.signal}).then(M=>{clearTimeout(N),M.ok?bn(p,"TestPingServer: ok",!0,h):bn(p,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(N),bn(p,"TestPingServer: error",!1,h)})}function bn(c,h,p,E,N){try{N&&(N.onload=null,N.onerror=null,N.onabort=null,N.ontimeout=null),E(p)}catch{}}function __(){this.g=new on}function fc(c){this.i=c.Sb||null,this.h=c.ab||!1}f(fc,Fi),fc.prototype.g=function(){return new ao(this.i,this.h)};function ao(c,h){Pe.call(this),this.H=c,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}f(ao,Pe),n=ao.prototype,n.open=function(c,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=c,this.D=h,this.readyState=1,Wi(this)},n.send=function(c){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const h={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};c&&(h.body=c),(this.H||o).fetch(new Request(this.D,h)).then(this.Pa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Hi(this)),this.readyState=0},n.Pa=function(c){if(this.g&&(this.l=c,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=c.headers,this.readyState=2,Wi(this)),this.g&&(this.readyState=3,Wi(this),this.g)))if(this.responseType==="arraybuffer")c.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in c){if(this.j=c.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;yd(this)}else c.text().then(this.Oa.bind(this),this.ga.bind(this))};function yd(c){c.j.read().then(c.Ma.bind(c)).catch(c.ga.bind(c))}n.Ma=function(c){if(this.g){if(this.o&&c.value)this.response.push(c.value);else if(!this.o){var h=c.value?c.value:new Uint8Array(0);(h=this.B.decode(h,{stream:!c.done}))&&(this.response=this.responseText+=h)}c.done?Hi(this):Wi(this),this.readyState==3&&yd(this)}},n.Oa=function(c){this.g&&(this.response=this.responseText=c,Hi(this))},n.Na=function(c){this.g&&(this.response=c,Hi(this))},n.ga=function(){this.g&&Hi(this)};function Hi(c){c.readyState=4,c.l=null,c.j=null,c.B=null,Wi(c)}n.setRequestHeader=function(c,h){this.A.append(c,h)},n.getResponseHeader=function(c){return this.h&&this.h.get(c.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const c=[],h=this.h.entries();for(var p=h.next();!p.done;)p=p.value,c.push(p[0]+": "+p[1]),p=h.next();return c.join(`\r
`)};function Wi(c){c.onreadystatechange&&c.onreadystatechange.call(c)}Object.defineProperty(ao.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(c){this.m=c?"include":"same-origin"}});function _d(c){let h="";return de(c,function(p,E){h+=E,h+=":",h+=p,h+=`\r
`}),h}function mc(c,h,p){e:{for(E in p){var E=!1;break e}E=!0}E||(p=_d(p),typeof c=="string"?p!=null&&$i(p):$e(c,h,p))}function je(c){Pe.call(this),this.headers=new Map,this.L=c||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}f(je,Pe);var w_=/^https?$/i,T_=["POST","PUT"];n=je.prototype,n.Fa=function(c){this.H=c},n.ea=function(c,h,p,E){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+c);h=h?h.toUpperCase():"GET",this.D=c,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Zu.g(),this.g.onreadystatechange=_(u(this.Ca,this));try{this.B=!0,this.g.open(h,String(c),!0),this.B=!1}catch(M){wd(this,M);return}if(c=p||"",p=new Map(this.headers),E)if(Object.getPrototypeOf(E)===Object.prototype)for(var N in E)p.set(N,E[N]);else if(typeof E.keys=="function"&&typeof E.get=="function")for(const M of E.keys())p.set(M,E.get(M));else throw Error("Unknown input type for opt_headers: "+String(E));E=Array.from(p.keys()).find(M=>M.toLowerCase()=="content-type"),N=o.FormData&&c instanceof o.FormData,!(Array.prototype.indexOf.call(T_,h,void 0)>=0)||E||N||p.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[M,G]of p)this.g.setRequestHeader(M,G);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(c),this.v=!1}catch(M){wd(this,M)}};function wd(c,h){c.h=!1,c.g&&(c.j=!0,c.g.abort(),c.j=!1),c.l=h,c.o=5,Td(c),co(c)}function Td(c){c.A||(c.A=!0,Ne(c,"complete"),Ne(c,"error"))}n.abort=function(c){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=c||7,Ne(this,"complete"),Ne(this,"abort"),co(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),co(this,!0)),je.Z.N.call(this)},n.Ca=function(){this.u||(this.B||this.v||this.j?Ed(this):this.Xa())},n.Xa=function(){Ed(this)};function Ed(c){if(c.h&&typeof s<"u"){if(c.v&&In(c)==4)setTimeout(c.Ca.bind(c),0);else if(Ne(c,"readystatechange"),In(c)==4){c.h=!1;try{const M=c.ca();e:switch(M){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var p;if(!(p=h)){var E;if(E=M===0){let G=String(c.D).match(ud)[1]||null;!G&&o.self&&o.self.location&&(G=o.self.location.protocol.slice(0,-1)),E=!w_.test(G?G.toLowerCase():"")}p=E}if(p)Ne(c,"complete"),Ne(c,"success");else{c.o=6;try{var N=In(c)>2?c.g.statusText:""}catch{N=""}c.l=N+" ["+c.ca()+"]",Td(c)}}finally{co(c)}}}}function co(c,h){if(c.g){c.m&&(clearTimeout(c.m),c.m=null);const p=c.g;c.g=null,h||Ne(c,"ready");try{p.onreadystatechange=null}catch{}}}n.isActive=function(){return!!this.g};function In(c){return c.g?c.g.readyState:0}n.ca=function(){try{return In(this)>2?this.g.status:-1}catch{return-1}},n.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.La=function(c){if(this.g){var h=this.g.responseText;return c&&h.indexOf(c)==0&&(h=h.substring(c.length)),At(h)}};function vd(c){try{if(!c.g)return null;if("response"in c.g)return c.g.response;switch(c.F){case"":case"text":return c.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in c.g)return c.g.mozResponseArrayBuffer}return null}catch{return null}}function E_(c){const h={};c=(c.g&&In(c)>=2&&c.g.getAllResponseHeaders()||"").split(`\r
`);for(let E=0;E<c.length;E++){if(v(c[E]))continue;var p=s_(c[E]);const N=p[0];if(p=p[1],typeof p!="string")continue;p=p.trim();const M=h[N]||[];h[N]=M,M.push(p)}re(h,function(E){return E.join(", ")})}n.ya=function(){return this.o},n.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ki(c,h,p){return p&&p.internalChannelParams&&p.internalChannelParams[c]||h}function bd(c){this.za=0,this.i=[],this.j=new Vi,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Ki("failFast",!1,c),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Ki("baseRetryDelayMs",5e3,c),this.Za=Ki("retryDelaySeedMs",1e4,c),this.Ta=Ki("forwardChannelMaxRetries",2,c),this.va=Ki("forwardChannelRequestTimeoutMs",2e4,c),this.ma=c&&c.xmlHttpFactory||void 0,this.Ua=c&&c.Rb||void 0,this.Aa=c&&c.useFetchStreams||!1,this.O=void 0,this.L=c&&c.supportsCrossDomainXhr||!1,this.M="",this.h=new sd(c&&c.concurrentRequestLimit),this.Ba=new __,this.S=c&&c.fastHandshake||!1,this.R=c&&c.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=c&&c.Pb||!1,c&&c.ua&&this.j.ua(),c&&c.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&c&&c.detectBufferingProxy||!1,this.ia=void 0,c&&c.longPollingTimeout&&c.longPollingTimeout>0&&(this.ia=c.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}n=bd.prototype,n.ka=8,n.I=1,n.connect=function(c,h,p,E){dt(0),this.W=c,this.H=h||{},p&&E!==void 0&&(this.H.OSID=p,this.H.OAID=E),this.F=this.X,this.J=Dd(this,null,this.W),uo(this)};function pc(c){if(Id(c),c.I==3){var h=c.V++,p=Bt(c.J);if($e(p,"SID",c.M),$e(p,"RID",h),$e(p,"TYPE","terminate"),Yi(c,p),h=new En(c,c.j,h),h.M=2,h.A=oo(Bt(p)),p=!1,o.navigator&&o.navigator.sendBeacon)try{p=o.navigator.sendBeacon(h.A.toString(),"")}catch{}!p&&o.Image&&(new Image().src=h.A,p=!0),p||(h.g=Nd(h.j,null),h.g.ea(h.A)),h.F=Date.now(),so(h)}Cd(c)}function lo(c){c.g&&(yc(c),c.g.cancel(),c.g=null)}function Id(c){lo(c),c.v&&(o.clearTimeout(c.v),c.v=null),ho(c),c.h.cancel(),c.m&&(typeof c.m=="number"&&o.clearTimeout(c.m),c.m=null)}function uo(c){if(!od(c.h)&&!c.m){c.m=!0;var h=c.Ea;L||g(),V||(L(),V=!0),b.add(h,c),c.D=0}}function v_(c,h){return ad(c.h)>=c.h.j-(c.m?1:0)?!1:c.m?(c.i=h.G.concat(c.i),!0):c.I==1||c.I==2||c.D>=(c.Sa?0:c.Ta)?!1:(c.m=Li(u(c.Ea,c,h),kd(c,c.D)),c.D++,!0)}n.Ea=function(c){if(this.m)if(this.m=null,this.I==1){if(!c){this.V=Math.floor(Math.random()*1e5),c=this.V++;const N=new En(this,this.j,c);let M=this.o;if(this.U&&(M?(M=X(M),Q(M,this.U)):M=this.U),this.u!==null||this.R||(N.J=M,M=null),this.S)e:{for(var h=0,p=0;p<this.i.length;p++){t:{var E=this.i[p];if("__data__"in E.map&&(E=E.map.__data__,typeof E=="string")){E=E.length;break t}E=void 0}if(E===void 0)break;if(h+=E,h>4096){h=p;break e}if(h===4096||p===this.i.length-1){h=p+1;break e}}h=1e3}else h=1e3;h=Ad(this,N,h),p=Bt(this.J),$e(p,"RID",c),$e(p,"CVER",22),this.G&&$e(p,"X-HTTP-Session-Id",this.G),Yi(this,p),M&&(this.R?h="headers="+$i(_d(M))+"&"+h:this.u&&mc(p,this.u,M)),dc(this.h,N),this.Ra&&$e(p,"TYPE","init"),this.S?($e(p,"$req",h),$e(p,"SID","null"),N.U=!0,ac(N,p,null)):ac(N,p,h),this.I=2}}else this.I==3&&(c?Sd(this,c):this.i.length==0||od(this.h)||Sd(this))};function Sd(c,h){var p;h?p=h.l:p=c.V++;const E=Bt(c.J);$e(E,"SID",c.M),$e(E,"RID",p),$e(E,"AID",c.K),Yi(c,E),c.u&&c.o&&mc(E,c.u,c.o),p=new En(c,c.j,p,c.D+1),c.u===null&&(p.J=c.o),h&&(c.i=h.G.concat(c.i)),h=Ad(c,p,1e3),p.H=Math.round(c.va*.5)+Math.round(c.va*.5*Math.random()),dc(c.h,p),ac(p,E,h)}function Yi(c,h){c.H&&de(c.H,function(p,E){$e(h,E,p)}),c.l&&de({},function(p,E){$e(h,E,p)})}function Ad(c,h,p){p=Math.min(c.i.length,p);const E=c.l?u(c.l.Ka,c.l,c):null;e:{var N=c.i;let pe=-1;for(;;){const Xe=["count="+p];pe==-1?p>0?(pe=N[0].g,Xe.push("ofs="+pe)):pe=0:Xe.push("ofs="+pe);let Oe=!0;for(let tt=0;tt<p;tt++){var M=N[tt].g;const qt=N[tt].map;if(M-=pe,M<0)pe=Math.max(0,N[tt].g-100),Oe=!1;else try{M="req"+M+"_"||"";try{var G=qt instanceof Map?qt:Object.entries(qt);for(const[ar,Sn]of G){let An=Sn;a(Sn)&&(An=Re(Sn)),Xe.push(M+ar+"="+encodeURIComponent(An))}}catch(ar){throw Xe.push(M+"type="+encodeURIComponent("_badmap")),ar}}catch{E&&E(qt)}}if(Oe){G=Xe.join("&");break e}}G=void 0}return c=c.i.splice(0,p),h.G=c,G}function Rd(c){if(!c.g&&!c.v){c.Y=1;var h=c.Da;L||g(),V||(L(),V=!0),b.add(h,c),c.A=0}}function gc(c){return c.g||c.v||c.A>=3?!1:(c.Y++,c.v=Li(u(c.Da,c),kd(c,c.A)),c.A++,!0)}n.Da=function(){if(this.v=null,Pd(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var c=4*this.T;this.j.info("BP detection timer enabled: "+c),this.B=Li(u(this.Wa,this),c)}},n.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,dt(10),lo(this),Pd(this))};function yc(c){c.B!=null&&(o.clearTimeout(c.B),c.B=null)}function Pd(c){c.g=new En(c,c.j,"rpc",c.Y),c.u===null&&(c.g.J=c.o),c.g.P=0;var h=Bt(c.na);$e(h,"RID","rpc"),$e(h,"SID",c.M),$e(h,"AID",c.K),$e(h,"CI",c.F?"0":"1"),!c.F&&c.ia&&$e(h,"TO",c.ia),$e(h,"TYPE","xmlhttp"),Yi(c,h),c.u&&c.o&&mc(h,c.u,c.o),c.O&&(c.g.H=c.O);var p=c.g;c=c.ba,p.M=1,p.A=oo(Bt(h)),p.u=null,p.R=!0,nd(p,c)}n.Va=function(){this.C!=null&&(this.C=null,lo(this),gc(this),dt(19))};function ho(c){c.C!=null&&(o.clearTimeout(c.C),c.C=null)}function xd(c,h){var p=null;if(c.g==h){ho(c),yc(c),c.g=null;var E=2}else if(uc(c.h,h))p=h.G,cd(c.h,h),E=1;else return;if(c.I!=0){if(h.o)if(E==1){p=h.u?h.u.length:0,h=Date.now()-h.F;var N=c.D;E=ro(),Ne(E,new Ju(E,p)),uo(c)}else Rd(c);else if(N=h.m,N==3||N==0&&h.X>0||!(E==1&&v_(c,h)||E==2&&gc(c)))switch(p&&p.length>0&&(h=c.h,h.i=h.i.concat(p)),N){case 1:or(c,5);break;case 4:or(c,10);break;case 3:or(c,6);break;default:or(c,2)}}}function kd(c,h){let p=c.Qa+Math.floor(Math.random()*c.Za);return c.isActive()||(p*=2),p*h}function or(c,h){if(c.j.info("Error code "+h),h==2){var p=u(c.bb,c),E=c.Ua;const N=!E;E=new vn(E||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||Bi(E,"https"),oo(E),N?g_(E.toString(),p):y_(E.toString(),p)}else dt(2);c.I=0,c.l&&c.l.pa(h),Cd(c),Id(c)}n.bb=function(c){c?(this.j.info("Successfully pinged google.com"),dt(2)):(this.j.info("Failed to ping google.com"),dt(1))};function Cd(c){if(c.I=0,c.ja=[],c.l){const h=ld(c.h);(h.length!=0||c.i.length!=0)&&(w(c.ja,h),w(c.ja,c.i),c.h.i.length=0,I(c.i),c.i.length=0),c.l.oa()}}function Dd(c,h,p){var E=p instanceof vn?Bt(p):new vn(p);if(E.g!="")h&&(E.g=h+"."+E.g),qi(E,E.u);else{var N=o.location;E=N.protocol,h=h?h+"."+N.hostname:N.hostname,N=+N.port;const M=new vn(null);E&&Bi(M,E),h&&(M.g=h),N&&qi(M,N),p&&(M.h=p),E=M}return p=c.G,h=c.wa,p&&h&&$e(E,p,h),$e(E,"VER",c.ka),Yi(c,E),E}function Nd(c,h,p){if(h&&!c.L)throw Error("Can't create secondary domain capable XhrIo object.");return h=c.Aa&&!c.ma?new je(new fc({ab:p})):new je(c.ma),h.Fa(c.L),h}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Fd(){}n=Fd.prototype,n.ra=function(){},n.qa=function(){},n.pa=function(){},n.oa=function(){},n.isActive=function(){return!0},n.Ka=function(){};function fo(){}fo.prototype.g=function(c,h){return new Tt(c,h)};function Tt(c,h){Pe.call(this),this.g=new bd(h),this.l=c,this.h=h&&h.messageUrlParams||null,c=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(c?c["X-Client-Protocol"]="webchannel":c={"X-Client-Protocol":"webchannel"}),this.g.o=c,c=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(c?c["X-WebChannel-Content-Type"]=h.messageContentType:c={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.sa&&(c?c["X-WebChannel-Client-Profile"]=h.sa:c={"X-WebChannel-Client-Profile":h.sa}),this.g.U=c,(c=h&&h.Qb)&&!v(c)&&(this.g.u=c),this.A=h&&h.supportsCrossDomainXhr||!1,this.v=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!v(h)&&(this.g.G=h,c=this.h,c!==null&&h in c&&(c=this.h,h in c&&delete c[h])),this.j=new Hr(this)}f(Tt,Pe),Tt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},Tt.prototype.close=function(){pc(this.g)},Tt.prototype.o=function(c){var h=this.g;if(typeof c=="string"){var p={};p.__data__=c,c=p}else this.v&&(p={},p.__data__=Re(c),c=p);h.i.push(new c_(h.Ya++,c)),h.I==3&&uo(h)},Tt.prototype.N=function(){this.g.l=null,delete this.j,pc(this.g),delete this.g,Tt.Z.N.call(this)};function Md(c){rc.call(this),c.__headers__&&(this.headers=c.__headers__,this.statusCode=c.__status__,delete c.__headers__,delete c.__status__);var h=c.__sm__;if(h){e:{for(const p in h){c=p;break e}c=void 0}(this.i=c)&&(c=this.i,h=h!==null&&c in h?h[c]:void 0),this.data=h}else this.data=c}f(Md,rc);function Od(){ic.call(this),this.status=1}f(Od,ic);function Hr(c){this.g=c}f(Hr,Fd),Hr.prototype.ra=function(){Ne(this.g,"a")},Hr.prototype.qa=function(c){Ne(this.g,new Md(c))},Hr.prototype.pa=function(c){Ne(this.g,new Od)},Hr.prototype.oa=function(){Ne(this.g,"b")},fo.prototype.createWebChannel=fo.prototype.g,Tt.prototype.send=Tt.prototype.o,Tt.prototype.open=Tt.prototype.m,Tt.prototype.close=Tt.prototype.close,ip=function(){return new fo},rp=function(){return ro()},np=rr,Xc={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},io.NO_ERROR=0,io.TIMEOUT=8,io.HTTP_ERROR=6,Mo=io,Xu.COMPLETE="complete",tp=Xu,Wu.EventType=Mi,Mi.OPEN="a",Mi.CLOSE="b",Mi.ERROR="c",Mi.MESSAGE="d",Pe.prototype.listen=Pe.prototype.J,cs=Wu,je.prototype.listenOnce=je.prototype.K,je.prototype.getLastError=je.prototype.Ha,je.prototype.getLastErrorCode=je.prototype.ya,je.prototype.getStatus=je.prototype.ca,je.prototype.getResponseJson=je.prototype.La,je.prototype.getResponseText=je.prototype.la,je.prototype.send=je.prototype.ea,je.prototype.setWithCredentials=je.prototype.Fa,ep=je}).apply(typeof go<"u"?go:typeof self<"u"?self:typeof window<"u"?window:{});/**
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
 */class st{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}st.UNAUTHENTICATED=new st(null),st.GOOGLE_CREDENTIALS=new st("google-credentials-uid"),st.FIRST_PARTY=new st("first-party-uid"),st.MOCK_USER=new st("mock-user");/**
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
 */let ki="12.12.0";function _E(n){ki=n}/**
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
 */const kr=new Rl("@firebase/firestore");function ti(){return kr.logLevel}function q(n,...e){if(kr.logLevel<=Ee.DEBUG){const t=e.map($l);kr.debug(`Firestore (${ki}): ${n}`,...t)}}function ft(n,...e){if(kr.logLevel<=Ee.ERROR){const t=e.map($l);kr.error(`Firestore (${ki}): ${n}`,...t)}}function jn(n,...e){if(kr.logLevel<=Ee.WARN){const t=e.map($l);kr.warn(`Firestore (${ki}): ${n}`,...t)}}function $l(n){if(typeof n=="string")return n;try{return(function(t){return JSON.stringify(t)})(n)}catch{return n}}/**
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
 */function ee(n,e,t){let r="Unexpected state";typeof e=="string"?r=e:t=e,sp(n,r,t)}function sp(n,e,t){let r=`FIRESTORE (${ki}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{r+=" CONTEXT: "+JSON.stringify(t)}catch{r+=" CONTEXT: "+t}throw ft(r),new Error(r)}function ne(n,e,t,r){let i="Unexpected state";typeof t=="string"?i=t:r=t,n||sp(e,i,r)}function ue(n,e){return n}/**
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
 */const $={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class W extends nn{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Zt{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
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
 */class op{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class wE{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(st.UNAUTHENTICATED)))}shutdown(){}}class TE{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class EE{constructor(e){this.t=e,this.currentUser=st.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){ne(this.o===void 0,42304);let r=this.i;const i=l=>this.i!==r?(r=this.i,t(l)):Promise.resolve();let s=new Zt;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Zt,e.enqueueRetryable((()=>i(this.currentUser)))};const o=()=>{const l=s;e.enqueueRetryable((async()=>{await l.promise,await i(this.currentUser)}))},a=l=>{q("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit((l=>a(l))),setTimeout((()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(q("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Zt)}}),0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((r=>this.i!==e?(q("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ne(typeof r.accessToken=="string",31837,{l:r}),new op(r.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ne(e===null||typeof e=="string",2055,{h:e}),new st(e)}}class vE{constructor(e,t,r){this.P=e,this.T=t,this.I=r,this.type="FirstParty",this.user=st.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class bE{constructor(e,t,r){this.P=e,this.T=t,this.I=r}getToken(){return Promise.resolve(new vE(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(st.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class fh{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class IE{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,lt(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){ne(this.o===void 0,3512);const r=s=>{s.error!=null&&q("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.m;return this.m=s.token,q("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable((()=>r(s)))};const i=s=>{q("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((s=>i(s))),setTimeout((()=>{if(!this.appCheck){const s=this.V.getImmediate({optional:!0});s?i(s):q("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new fh(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(ne(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new fh(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function SE(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
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
 */class Ul{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const i=SE(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<t&&(r+=e.charAt(i[s]%62))}return r}}function le(n,e){return n<e?-1:n>e?1:0}function Zc(n,e){const t=Math.min(n.length,e.length);for(let r=0;r<t;r++){const i=n.charAt(r),s=e.charAt(r);if(i!==s)return Ac(i)===Ac(s)?le(i,s):Ac(i)?1:-1}return le(n.length,e.length)}const AE=55296,RE=57343;function Ac(n){const e=n.charCodeAt(0);return e>=AE&&e<=RE}function mi(n,e,t){return n.length===e.length&&n.every(((r,i)=>t(r,e[i])))}function ap(n){return n+"\0"}/**
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
 */const mh="__name__";class Ht{constructor(e,t,r){t===void 0?t=0:t>e.length&&ee(637,{offset:t,range:e.length}),r===void 0?r=e.length-t:r>e.length-t&&ee(1746,{length:r,range:e.length-t}),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return Ht.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Ht?e.forEach((r=>{t.push(r)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let i=0;i<r;i++){const s=Ht.compareSegments(e.get(i),t.get(i));if(s!==0)return s}return le(e.length,t.length)}static compareSegments(e,t){const r=Ht.isNumericId(e),i=Ht.isNumericId(t);return r&&!i?-1:!r&&i?1:r&&i?Ht.extractNumericId(e).compare(Ht.extractNumericId(t)):Zc(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Un.fromString(e.substring(4,e.length-2))}}class xe extends Ht{construct(e,t,r){return new xe(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new W($.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter((i=>i.length>0)))}return new xe(t)}static emptyPath(){return new xe([])}}const PE=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ze extends Ht{construct(e,t,r){return new ze(e,t,r)}static isValidIdentifier(e){return PE.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ze.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===mh}static keyField(){return new ze([mh])}static fromServerFormat(e){const t=[];let r="",i=0;const s=()=>{if(r.length===0)throw new W($.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new W($.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new W($.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new W($.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ze(t)}static emptyPath(){return new ze([])}}/**
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
 */class H{constructor(e){this.path=e}static fromPath(e){return new H(xe.fromString(e))}static fromName(e){return new H(xe.fromString(e).popFirst(5))}static empty(){return new H(xe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&xe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return xe.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new H(new xe(e.slice()))}}/**
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
 */function cp(n,e,t){if(!t)throw new W($.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function xE(n,e,t,r){if(e===!0&&r===!0)throw new W($.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function ph(n){if(!H.isDocumentKey(n))throw new W($.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function gh(n){if(H.isDocumentKey(n))throw new W($.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function lp(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function Bl(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=(function(r){return r.constructor?r.constructor.name:null})(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":ee(12329,{type:typeof n})}function kt(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new W($.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Bl(n);throw new W($.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
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
 */function Ke(n,e){const t={typeString:n};return e&&(t.value=e),t}function Hs(n,e){if(!lp(n))throw new W($.INVALID_ARGUMENT,"JSON must be an object");let t;for(const r in e)if(e[r]){const i=e[r].typeString,s="value"in e[r]?{value:e[r].value}:void 0;if(!(r in n)){t=`JSON missing required field: '${r}'`;break}const o=n[r];if(i&&typeof o!==i){t=`JSON field '${r}' must be a ${i}.`;break}if(s!==void 0&&o!==s.value){t=`Expected '${r}' field to equal '${s.value}'`;break}}if(t)throw new W($.INVALID_ARGUMENT,t);return!0}/**
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
 */const yh=-62135596800,_h=1e6;class Ce{static now(){return Ce.fromMillis(Date.now())}static fromDate(e){return Ce.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*_h);return new Ce(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new W($.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new W($.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<yh)throw new W($.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new W($.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/_h}_compareTo(e){return this.seconds===e.seconds?le(this.nanoseconds,e.nanoseconds):le(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Ce._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Hs(e,Ce._jsonSchema))return new Ce(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-yh;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Ce._jsonSchemaVersion="firestore/timestamp/1.0",Ce._jsonSchema={type:Ke("string",Ce._jsonSchemaVersion),seconds:Ke("number"),nanoseconds:Ke("number")};/**
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
 */class se{static fromTimestamp(e){return new se(e)}static min(){return new se(new Ce(0,0))}static max(){return new se(new Ce(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Rs=-1;class ta{constructor(e,t,r,i){this.indexId=e,this.collectionGroup=t,this.fields=r,this.indexState=i}}function el(n){return n.fields.find((e=>e.kind===2))}function dr(n){return n.fields.filter((e=>e.kind!==2))}ta.UNKNOWN_ID=-1;class Oo{constructor(e,t){this.fieldPath=e,this.kind=t}}class Ps{constructor(e,t){this.sequenceNumber=e,this.offset=t}static empty(){return new Ps(0,St.min())}}function kE(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=se.fromTimestamp(r===1e9?new Ce(t+1,0):new Ce(t,r));return new St(i,H.empty(),e)}function up(n){return new St(n.readTime,n.key,Rs)}class St{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new St(se.min(),H.empty(),Rs)}static max(){return new St(se.max(),H.empty(),Rs)}}function ql(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=H.comparator(n.documentKey,e.documentKey),t!==0?t:le(n.largestBatchId,e.largestBatchId))}/**
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
 */const dp="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class hp{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
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
 */async function Ur(n){if(n.code!==$.FAILED_PRECONDITION||n.message!==dp)throw n;q("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class D{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&ee(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new D(((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(t,s).next(r,i)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof D?t:D.resolve(t)}catch(t){return D.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):D.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):D.reject(t)}static resolve(e){return new D(((t,r)=>{t(e)}))}static reject(e){return new D(((t,r)=>{r(e)}))}static waitFor(e){return new D(((t,r)=>{let i=0,s=0,o=!1;e.forEach((a=>{++i,a.next((()=>{++s,o&&s===i&&t()}),(l=>r(l)))})),o=!0,s===i&&t()}))}static or(e){let t=D.resolve(!1);for(const r of e)t=t.next((i=>i?D.resolve(i):r()));return t}static forEach(e,t){const r=[];return e.forEach(((i,s)=>{r.push(t.call(this,i,s))})),this.waitFor(r)}static mapArray(e,t){return new D(((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const u=l;t(e[u]).next((d=>{o[u]=d,++a,a===s&&r(o)}),(d=>i(d)))}}))}static doWhile(e,t){return new D(((r,i)=>{const s=()=>{e()===!0?t().next((()=>{s()}),i):r()};s()}))}}/**
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
 */const Et="SimpleDb";class Da{static open(e,t,r,i){try{return new Da(t,e.transaction(i,r))}catch(s){throw new ms(t,s)}}constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.S=new Zt,this.transaction.oncomplete=()=>{this.S.resolve()},this.transaction.onabort=()=>{t.error?this.S.reject(new ms(e,t.error)):this.S.resolve()},this.transaction.onerror=r=>{const i=zl(r.target.error);this.S.reject(new ms(e,i))}}get D(){return this.S.promise}abort(e){e&&this.S.reject(e),this.aborted||(q(Et,"Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}C(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const t=this.transaction.objectStore(e);return new DE(t)}}class Bn{static delete(e){return q(Et,"Removing database:",e),fr(tm().indexedDB.deleteDatabase(e)).toPromise()}static v(){if(!um())return!1;if(Bn.F())return!0;const e=Ze(),t=Bn.M(e),r=0<t&&t<10,i=fp(e),s=0<i&&i<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||r||s)}static F(){var e;return typeof process<"u"&&((e=process.__PRIVATE_env)==null?void 0:e.__PRIVATE_USE_MOCK_PERSISTENCE)==="YES"}static O(e,t){return e.store(t)}static M(e){const t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=t?t[1].split("_").slice(0,2).join("."):"-1";return Number(r)}constructor(e,t,r){this.name=e,this.version=t,this.N=r,this.B=null,Bn.M(Ze())===12.2&&ft("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}async L(e){return this.db||(q(Et,"Opening database:",this.name),this.db=await new Promise(((t,r)=>{const i=indexedDB.open(this.name,this.version);i.onsuccess=s=>{const o=s.target.result;t(o)},i.onblocked=()=>{r(new ms(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},i.onerror=s=>{const o=s.target.error;o.name==="VersionError"?r(new W($.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new W($.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new ms(e,o))},i.onupgradeneeded=s=>{q(Et,'Database "'+this.name+'" requires upgrade from version:',s.oldVersion);const o=s.target.result;this.N.k(o,i.transaction,s.oldVersion,this.version).next((()=>{q(Et,"Database upgrade to version "+this.version+" complete")}))}}))),this.q&&(this.db.onversionchange=t=>this.q(t)),this.db}K(e){this.q=e,this.db&&(this.db.onversionchange=t=>e(t))}async runTransaction(e,t,r,i){const s=t==="readonly";let o=0;for(;;){++o;try{this.db=await this.L(e);const a=Da.open(this.db,e,s?"readonly":"readwrite",r),l=i(a).next((u=>(a.C(),u))).catch((u=>(a.abort(u),D.reject(u)))).toPromise();return l.catch((()=>{})),await a.D,l}catch(a){const l=a,u=l.name!=="FirebaseError"&&o<3;if(q(Et,"Transaction failed with error:",l.message,"Retrying:",u),this.close(),!u)return Promise.reject(l)}}}close(){this.db&&this.db.close(),this.db=void 0}}function fp(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}class CE{constructor(e){this.U=e,this.$=!1,this.W=null}get isDone(){return this.$}get G(){return this.W}set cursor(e){this.U=e}done(){this.$=!0}j(e){this.W=e}delete(){return fr(this.U.delete())}}class ms extends W{constructor(e,t){super($.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function er(n){return n.name==="IndexedDbTransactionError"}class DE{constructor(e){this.store=e}put(e,t){let r;return t!==void 0?(q(Et,"PUT",this.store.name,e,t),r=this.store.put(t,e)):(q(Et,"PUT",this.store.name,"<auto-key>",e),r=this.store.put(e)),fr(r)}add(e){return q(Et,"ADD",this.store.name,e,e),fr(this.store.add(e))}get(e){return fr(this.store.get(e)).next((t=>(t===void 0&&(t=null),q(Et,"GET",this.store.name,e,t),t)))}delete(e){return q(Et,"DELETE",this.store.name,e),fr(this.store.delete(e))}count(){return q(Et,"COUNT",this.store.name),fr(this.store.count())}J(e,t){const r=this.options(e,t),i=r.index?this.store.index(r.index):this.store;if(typeof i.getAll=="function"){const s=i.getAll(r.range);return new D(((o,a)=>{s.onerror=l=>{a(l.target.error)},s.onsuccess=l=>{o(l.target.result)}}))}{const s=this.cursor(r),o=[];return this.H(s,((a,l)=>{o.push(l)})).next((()=>o))}}Z(e,t){const r=this.store.getAll(e,t===null?void 0:t);return new D(((i,s)=>{r.onerror=o=>{s(o.target.error)},r.onsuccess=o=>{i(o.target.result)}}))}X(e,t){q(Et,"DELETE ALL",this.store.name);const r=this.options(e,t);r.Y=!1;const i=this.cursor(r);return this.H(i,((s,o,a)=>a.delete()))}ee(e,t){let r;t?r=e:(r={},t=e);const i=this.cursor(r);return this.H(i,t)}te(e){const t=this.cursor({});return new D(((r,i)=>{t.onerror=s=>{const o=zl(s.target.error);i(o)},t.onsuccess=s=>{const o=s.target.result;o?e(o.primaryKey,o.value).next((a=>{a?o.continue():r()})):r()}}))}H(e,t){const r=[];return new D(((i,s)=>{e.onerror=o=>{s(o.target.error)},e.onsuccess=o=>{const a=o.target.result;if(!a)return void i();const l=new CE(a),u=t(a.primaryKey,a.value,l);if(u instanceof D){const d=u.catch((f=>(l.done(),D.reject(f))));r.push(d)}l.isDone?i():l.G===null?a.continue():a.continue(l.G)}})).next((()=>D.waitFor(r)))}options(e,t){let r;return e!==void 0&&(typeof e=="string"?r=e:t=e),{index:r,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){const r=this.store.index(e.index);return e.Y?r.openKeyCursor(e.range,t):r.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function fr(n){return new D(((e,t)=>{n.onsuccess=r=>{const i=r.target.result;e(i)},n.onerror=r=>{const i=zl(r.target.error);t(i)}}))}let wh=!1;function zl(n){const e=Bn.M(Ze());if(e>=12.2&&e<13){const t="An internal error was encountered in the Indexed Database server";if(n.message.indexOf(t)>=0){const r=new W("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return wh||(wh=!0,setTimeout((()=>{throw r}),0)),r}}return n}const ps="IndexBackfiller";class NE{constructor(e,t){this.asyncQueue=e,this.ne=t,this.task=null}start(){this.re(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}re(e){q(ps,`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,(async()=>{this.task=null;try{const t=await this.ne.ie();q(ps,`Documents written: ${t}`)}catch(t){er(t)?q(ps,"Ignoring IndexedDB error during index backfill: ",t):await Ur(t)}await this.re(6e4)}))}}class FE{constructor(e,t){this.localStore=e,this.persistence=t}async ie(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",(t=>this.se(t,e)))}se(e,t){const r=new Set;let i=t,s=!0;return D.doWhile((()=>s===!0&&i>0),(()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next((o=>{if(o!==null&&!r.has(o))return q(ps,`Processing collection: ${o}`),this.oe(e,o,i).next((a=>{i-=a,r.add(o)}));s=!1})))).next((()=>t-i))}oe(e,t,r){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,t).next((i=>this.localStore.localDocuments.getNextDocuments(e,t,i,r).next((s=>{const o=s.changes;return this.localStore.indexManager.updateIndexEntries(e,o).next((()=>this._e(i,s))).next((a=>(q(ps,`Updating offset: ${a}`),this.localStore.indexManager.updateCollectionGroup(e,t,a)))).next((()=>o.size))}))))}_e(e,t){let r=e;return t.changes.forEach(((i,s)=>{const o=up(s);ql(o,r)>0&&(r=o)})),new St(r.readTime,r.documentKey,Math.max(t.batchId,e.largestBatchId))}}/**
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
 */class Pt{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>t.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}Pt.ce=-1;/**
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
 */const Er=-1;function Na(n){return n==null}function xs(n){return n===0&&1/n==-1/0}function ME(n){return typeof n=="number"&&Number.isInteger(n)&&!xs(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */const na="";function ut(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=Th(e)),e=OE(n.get(t),e);return Th(e)}function OE(n,e){let t=e;const r=n.length;for(let i=0;i<r;i++){const s=n.charAt(i);switch(s){case"\0":t+="";break;case na:t+="";break;default:t+=s}}return t}function Th(n){return n+na+""}function Kt(n){const e=n.length;if(ne(e>=2,64408,{path:n}),e===2)return ne(n.charAt(0)===na&&n.charAt(1)==="",56145,{path:n}),xe.emptyPath();const t=e-2,r=[];let i="";for(let s=0;s<e;){const o=n.indexOf(na,s);switch((o<0||o>t)&&ee(50515,{path:n}),n.charAt(o+1)){case"":const a=n.substring(s,o);let l;i.length===0?l=a:(i+=a,l=i,i=""),r.push(l);break;case"":i+=n.substring(s,o),i+="\0";break;case"":i+=n.substring(s,o+1);break;default:ee(61167,{path:n})}s=o+2}return new xe(r)}/**
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
 */const hr="remoteDocuments",Ws="owner",Wr="owner",ks="mutationQueues",LE="userId",Nt="mutations",Eh="batchId",Tr="userMutationsIndex",vh=["userId","batchId"];/**
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
 */function Lo(n,e){return[n,ut(e)]}function mp(n,e,t){return[n,ut(e),t]}const VE={},pi="documentMutations",ra="remoteDocumentsV14",$E=["prefixPath","collectionGroup","readTime","documentId"],Vo="documentKeyIndex",UE=["prefixPath","collectionGroup","documentId"],pp="collectionGroupIndex",BE=["collectionGroup","readTime","prefixPath","documentId"],Cs="remoteDocumentGlobal",tl="remoteDocumentGlobalKey",gi="targets",gp="queryTargetsIndex",qE=["canonicalId","targetId"],yi="targetDocuments",zE=["targetId","path"],Gl="documentTargetsIndex",GE=["path","targetId"],ia="targetGlobalKey",vr="targetGlobal",Ds="collectionParents",jE=["collectionId","parent"],_i="clientMetadata",HE="clientId",Fa="bundles",WE="bundleId",Ma="namedQueries",KE="name",jl="indexConfiguration",YE="indexId",nl="collectionGroupIndex",QE="collectionGroup",gs="indexState",JE=["indexId","uid"],yp="sequenceNumberIndex",XE=["uid","sequenceNumber"],ys="indexEntries",ZE=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],_p="documentKeyIndex",ev=["indexId","uid","orderedDocumentKey"],Oa="documentOverlays",tv=["userId","collectionPath","documentId"],rl="collectionPathOverlayIndex",nv=["userId","collectionPath","largestBatchId"],wp="collectionGroupOverlayIndex",rv=["userId","collectionGroup","largestBatchId"],Hl="globals",iv="name",Tp=[ks,Nt,pi,hr,gi,Ws,vr,yi,_i,Cs,Ds,Fa,Ma],sv=[...Tp,Oa],Ep=[ks,Nt,pi,ra,gi,Ws,vr,yi,_i,Cs,Ds,Fa,Ma,Oa],vp=Ep,Wl=[...vp,jl,gs,ys],ov=Wl,bp=[...Wl,Hl],av=bp;/**
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
 */class il extends hp{constructor(e,t){super(),this.le=e,this.currentSequenceNumber=t}}function et(n,e){const t=ue(n);return Bn.O(t.le,e)}/**
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
 */function bh(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Br(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function Ip(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */class qe{constructor(e,t){this.comparator=e,this.root=t||ot.EMPTY}insert(e,t){return new qe(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,ot.BLACK,null,null))}remove(e){return new qe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ot.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return t+r.left.size;i<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,r)=>(e(t,r),!1)))}toString(){const e=[];return this.inorderTraversal(((t,r)=>(e.push(`${t}:${r}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new yo(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new yo(this.root,e,this.comparator,!1)}getReverseIterator(){return new yo(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new yo(this.root,e,this.comparator,!0)}}class yo{constructor(e,t,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=t?r(e.key,t):1,t&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ot{constructor(e,t,r,i,s){this.key=e,this.value=t,this.color=r??ot.RED,this.left=i??ot.EMPTY,this.right=s??ot.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,i,s){return new ot(e??this.key,t??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,t,r),null):s===0?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return ot.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),t(e,i.key)===0){if(i.right.isEmpty())return ot.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ot.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ot.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw ee(43730,{key:this.key,value:this.value});if(this.right.isRed())throw ee(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw ee(27949);return e+(this.isRed()?0:1)}}ot.EMPTY=null,ot.RED=!0,ot.BLACK=!1;ot.EMPTY=new class{constructor(){this.size=0}get key(){throw ee(57766)}get value(){throw ee(16141)}get color(){throw ee(16727)}get left(){throw ee(29726)}get right(){throw ee(36894)}copy(e,t,r,i,s){return this}insert(e,t,r){return new ot(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class De{constructor(e){this.comparator=e,this.data=new qe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,r)=>(e(t),!1)))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Ih(this.data.getIterator())}getIteratorFrom(e){return new Ih(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((r=>{t=t.add(r)})),t}isEqual(e){if(!(e instanceof De)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new De(this.comparator);return t.data=e,t}}class Ih{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function Kr(n){return n.hasNext()?n.getNext():void 0}/**
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
 */class xt{constructor(e){this.fields=e,e.sort(ze.comparator)}static empty(){return new xt([])}unionWith(e){let t=new De(ze.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new xt(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return mi(this.fields,e.fields,((t,r)=>t.isEqual(r)))}}/**
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
 */class Sp extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Je{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new Sp("Invalid base64 string: "+s):s}})(e);return new Je(t)}static fromUint8Array(e){const t=(function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s})(e);return new Je(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const r=new Uint8Array(t.length);for(let i=0;i<t.length;i++)r[i]=t.charCodeAt(i);return r})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return le(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Je.EMPTY_BYTE_STRING=new Je("");const cv=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function pn(n){if(ne(!!n,39018),typeof n=="string"){let e=0;const t=cv.exec(n);if(ne(!!t,46558,{timestamp:n}),t[1]){let i=t[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Be(n.seconds),nanos:Be(n.nanos)}}function Be(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function gn(n){return typeof n=="string"?Je.fromBase64String(n):Je.fromUint8Array(n)}/**
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
 */const Ap="server_timestamp",Rp="__type__",Pp="__previous_value__",xp="__local_write_time__";function Kl(n){var t,r;return((r=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[Rp])==null?void 0:r.stringValue)===Ap}function La(n){const e=n.mapValue.fields[Pp];return Kl(e)?La(e):e}function Ns(n){const e=pn(n.mapValue.fields[xp].timestampValue);return new Ce(e.seconds,e.nanos)}/**
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
 */class lv{constructor(e,t,r,i,s,o,a,l,u,d,f){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=u,this.isUsingEmulator=d,this.apiKey=f}}const sa="(default)";class Cr{constructor(e,t){this.projectId=e,this.database=t||sa}static empty(){return new Cr("","")}get isDefaultDatabase(){return this.database===sa}isEqual(e){return e instanceof Cr&&e.projectId===this.projectId&&e.database===this.database}}function uv(n,e){if(!Object.prototype.hasOwnProperty.apply(n.options,["projectId"]))throw new W($.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Cr(n.options.projectId,e)}/**
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
 */const Yl="__type__",kp="__max__",Ln={mapValue:{fields:{__type__:{stringValue:kp}}}},Ql="__vector__",wi="value",$o={nullValue:"NULL_VALUE"};function Hn(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Kl(n)?4:Cp(n)?9007199254740991:Va(n)?10:11:ee(28295,{value:n})}function tn(n,e){if(n===e)return!0;const t=Hn(n);if(t!==Hn(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Ns(n).isEqual(Ns(e));case 3:return(function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=pn(i.timestampValue),a=pn(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos})(n,e);case 5:return n.stringValue===e.stringValue;case 6:return(function(i,s){return gn(i.bytesValue).isEqual(gn(s.bytesValue))})(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return(function(i,s){return Be(i.geoPointValue.latitude)===Be(s.geoPointValue.latitude)&&Be(i.geoPointValue.longitude)===Be(s.geoPointValue.longitude)})(n,e);case 2:return(function(i,s){if("integerValue"in i&&"integerValue"in s)return Be(i.integerValue)===Be(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Be(i.doubleValue),a=Be(s.doubleValue);return o===a?xs(o)===xs(a):isNaN(o)&&isNaN(a)}return!1})(n,e);case 9:return mi(n.arrayValue.values||[],e.arrayValue.values||[],tn);case 10:case 11:return(function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(bh(o)!==bh(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!tn(o[l],a[l])))return!1;return!0})(n,e);default:return ee(52216,{left:n})}}function Fs(n,e){return(n.values||[]).find((t=>tn(t,e)))!==void 0}function Wn(n,e){if(n===e)return 0;const t=Hn(n),r=Hn(e);if(t!==r)return le(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return le(n.booleanValue,e.booleanValue);case 2:return(function(s,o){const a=Be(s.integerValue||s.doubleValue),l=Be(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1})(n,e);case 3:return Sh(n.timestampValue,e.timestampValue);case 4:return Sh(Ns(n),Ns(e));case 5:return Zc(n.stringValue,e.stringValue);case 6:return(function(s,o){const a=gn(s),l=gn(o);return a.compareTo(l)})(n.bytesValue,e.bytesValue);case 7:return(function(s,o){const a=s.split("/"),l=o.split("/");for(let u=0;u<a.length&&u<l.length;u++){const d=le(a[u],l[u]);if(d!==0)return d}return le(a.length,l.length)})(n.referenceValue,e.referenceValue);case 8:return(function(s,o){const a=le(Be(s.latitude),Be(o.latitude));return a!==0?a:le(Be(s.longitude),Be(o.longitude))})(n.geoPointValue,e.geoPointValue);case 9:return Ah(n.arrayValue,e.arrayValue);case 10:return(function(s,o){var _,I,w,S;const a=s.fields||{},l=o.fields||{},u=(_=a[wi])==null?void 0:_.arrayValue,d=(I=l[wi])==null?void 0:I.arrayValue,f=le(((w=u==null?void 0:u.values)==null?void 0:w.length)||0,((S=d==null?void 0:d.values)==null?void 0:S.length)||0);return f!==0?f:Ah(u,d)})(n.mapValue,e.mapValue);case 11:return(function(s,o){if(s===Ln.mapValue&&o===Ln.mapValue)return 0;if(s===Ln.mapValue)return 1;if(o===Ln.mapValue)return-1;const a=s.fields||{},l=Object.keys(a),u=o.fields||{},d=Object.keys(u);l.sort(),d.sort();for(let f=0;f<l.length&&f<d.length;++f){const _=Zc(l[f],d[f]);if(_!==0)return _;const I=Wn(a[l[f]],u[d[f]]);if(I!==0)return I}return le(l.length,d.length)})(n.mapValue,e.mapValue);default:throw ee(23264,{he:t})}}function Sh(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return le(n,e);const t=pn(n),r=pn(e),i=le(t.seconds,r.seconds);return i!==0?i:le(t.nanos,r.nanos)}function Ah(n,e){const t=n.values||[],r=e.values||[];for(let i=0;i<t.length&&i<r.length;++i){const s=Wn(t[i],r[i]);if(s)return s}return le(t.length,r.length)}function Ti(n){return sl(n)}function sl(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?(function(t){const r=pn(t);return`time(${r.seconds},${r.nanos})`})(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?(function(t){return gn(t).toBase64()})(n.bytesValue):"referenceValue"in n?(function(t){return H.fromName(t).toString()})(n.referenceValue):"geoPointValue"in n?(function(t){return`geo(${t.latitude},${t.longitude})`})(n.geoPointValue):"arrayValue"in n?(function(t){let r="[",i=!0;for(const s of t.values||[])i?i=!1:r+=",",r+=sl(s);return r+"]"})(n.arrayValue):"mapValue"in n?(function(t){const r=Object.keys(t.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${sl(t.fields[o])}`;return i+"}"})(n.mapValue):ee(61005,{value:n})}function Uo(n){switch(Hn(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=La(n);return e?16+Uo(e):16;case 5:return 2*n.stringValue.length;case 6:return gn(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return(function(r){return(r.values||[]).reduce(((i,s)=>i+Uo(s)),0)})(n.arrayValue);case 10:case 11:return(function(r){let i=0;return Br(r.fields,((s,o)=>{i+=s.length+Uo(o)})),i})(n.mapValue);default:throw ee(13486,{value:n})}}function Jl(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function ol(n){return!!n&&"integerValue"in n}function Ms(n){return!!n&&"arrayValue"in n}function Rh(n){return!!n&&"nullValue"in n}function Ph(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Bo(n){return!!n&&"mapValue"in n}function Va(n){var t,r;return((r=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[Yl])==null?void 0:r.stringValue)===Ql}function _s(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const e={mapValue:{fields:{}}};return Br(n.mapValue.fields,((t,r)=>e.mapValue.fields[t]=_s(r))),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=_s(n.arrayValue.values[t]);return e}return{...n}}function Cp(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===kp}const Dp={mapValue:{fields:{[Yl]:{stringValue:Ql},[wi]:{arrayValue:{}}}}};function dv(n){return"nullValue"in n?$o:"booleanValue"in n?{booleanValue:!1}:"integerValue"in n||"doubleValue"in n?{doubleValue:NaN}:"timestampValue"in n?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in n?{stringValue:""}:"bytesValue"in n?{bytesValue:""}:"referenceValue"in n?Jl(Cr.empty(),H.empty()):"geoPointValue"in n?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in n?{arrayValue:{}}:"mapValue"in n?Va(n)?Dp:{mapValue:{}}:ee(35942,{value:n})}function hv(n){return"nullValue"in n?{booleanValue:!1}:"booleanValue"in n?{doubleValue:NaN}:"integerValue"in n||"doubleValue"in n?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in n?{stringValue:""}:"stringValue"in n?{bytesValue:""}:"bytesValue"in n?Jl(Cr.empty(),H.empty()):"referenceValue"in n?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in n?{arrayValue:{}}:"arrayValue"in n?Dp:"mapValue"in n?Va(n)?{mapValue:{}}:Ln:ee(61959,{value:n})}function xh(n,e){const t=Wn(n.value,e.value);return t!==0?t:n.inclusive&&!e.inclusive?-1:!n.inclusive&&e.inclusive?1:0}function kh(n,e){const t=Wn(n.value,e.value);return t!==0?t:n.inclusive&&!e.inclusive?1:!n.inclusive&&e.inclusive?-1:0}/**
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
 */class _t{constructor(e){this.value=e}static empty(){return new _t({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!Bo(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=_s(t)}setAll(e){let t=ze.emptyPath(),r={},i=[];e.forEach(((o,a)=>{if(!t.isImmediateParentOf(a)){const l=this.getFieldsMap(t);this.applyChanges(l,r,i),r={},i=[],t=a.popLast()}o?r[a.lastSegment()]=_s(o):i.push(a.lastSegment())}));const s=this.getFieldsMap(t);this.applyChanges(s,r,i)}delete(e){const t=this.field(e.popLast());Bo(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return tn(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=t.mapValue.fields[e.get(r)];Bo(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,r){Br(t,((i,s)=>e[i]=s));for(const i of r)delete e[i]}clone(){return new _t(_s(this.value))}}function Np(n){const e=[];return Br(n.fields,((t,r)=>{const i=new ze([t]);if(Bo(r)){const s=Np(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)})),new xt(e)}/**
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
 */class He{constructor(e,t,r,i,s,o,a){this.key=e,this.documentType=t,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new He(e,0,se.min(),se.min(),se.min(),_t.empty(),0)}static newFoundDocument(e,t,r,i){return new He(e,1,t,se.min(),r,i,0)}static newNoDocument(e,t){return new He(e,2,t,se.min(),se.min(),_t.empty(),0)}static newUnknownDocument(e,t){return new He(e,3,t,se.min(),se.min(),_t.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(se.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=_t.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=_t.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=se.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof He&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new He(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Ei{constructor(e,t){this.position=e,this.inclusive=t}}function Ch(n,e,t){let r=0;for(let i=0;i<n.position.length;i++){const s=e[i],o=n.position[i];if(s.field.isKeyField()?r=H.comparator(H.fromName(o.referenceValue),t.key):r=Wn(o,t.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Dh(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!tn(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class oa{constructor(e,t="asc"){this.field=e,this.dir=t}}function fv(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class Fp{}class ve extends Fp{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new mv(e,t,r):t==="array-contains"?new yv(e,r):t==="in"?new Up(e,r):t==="not-in"?new _v(e,r):t==="array-contains-any"?new wv(e,r):new ve(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new pv(e,r):new gv(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(Wn(t,this.value)):t!==null&&Hn(this.value)===Hn(t)&&this.matchesComparison(Wn(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ee(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Me extends Fp{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new Me(e,t)}matches(e){return vi(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function vi(n){return n.op==="and"}function al(n){return n.op==="or"}function Xl(n){return Mp(n)&&vi(n)}function Mp(n){for(const e of n.filters)if(e instanceof Me)return!1;return!0}function cl(n){if(n instanceof ve)return n.field.canonicalString()+n.op.toString()+Ti(n.value);if(Xl(n))return n.filters.map((e=>cl(e))).join(",");{const e=n.filters.map((t=>cl(t))).join(",");return`${n.op}(${e})`}}function Op(n,e){return n instanceof ve?(function(r,i){return i instanceof ve&&r.op===i.op&&r.field.isEqual(i.field)&&tn(r.value,i.value)})(n,e):n instanceof Me?(function(r,i){return i instanceof Me&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce(((s,o,a)=>s&&Op(o,i.filters[a])),!0):!1})(n,e):void ee(19439)}function Lp(n,e){const t=n.filters.concat(e);return Me.create(t,n.op)}function Vp(n){return n instanceof ve?(function(t){return`${t.field.canonicalString()} ${t.op} ${Ti(t.value)}`})(n):n instanceof Me?(function(t){return t.op.toString()+" {"+t.getFilters().map(Vp).join(" ,")+"}"})(n):"Filter"}class mv extends ve{constructor(e,t,r){super(e,t,r),this.key=H.fromName(r.referenceValue)}matches(e){const t=H.comparator(e.key,this.key);return this.matchesComparison(t)}}class pv extends ve{constructor(e,t){super(e,"in",t),this.keys=$p("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class gv extends ve{constructor(e,t){super(e,"not-in",t),this.keys=$p("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function $p(n,e){var t;return(((t=e.arrayValue)==null?void 0:t.values)||[]).map((r=>H.fromName(r.referenceValue)))}class yv extends ve{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Ms(t)&&Fs(t.arrayValue,this.value)}}class Up extends ve{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Fs(this.value.arrayValue,t)}}class _v extends ve{constructor(e,t){super(e,"not-in",t)}matches(e){if(Fs(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!Fs(this.value.arrayValue,t)}}class wv extends ve{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Ms(t)||!t.arrayValue.values)&&t.arrayValue.values.some((r=>Fs(this.value.arrayValue,r)))}}/**
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
 */class Tv{constructor(e,t=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.Te=null}}function ll(n,e=null,t=[],r=[],i=null,s=null,o=null){return new Tv(n,e,t,r,i,s,o)}function Dr(n){const e=ue(n);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((r=>cl(r))).join(","),t+="|ob:",t+=e.orderBy.map((r=>(function(s){return s.field.canonicalString()+s.dir})(r))).join(","),Na(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((r=>Ti(r))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((r=>Ti(r))).join(",")),e.Te=t}return e.Te}function Ks(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!fv(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!Op(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Dh(n.startAt,e.startAt)&&Dh(n.endAt,e.endAt)}function aa(n){return H.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function ca(n,e){return n.filters.filter((t=>t instanceof ve&&t.field.isEqual(e)))}function Nh(n,e,t){let r=$o,i=!0;for(const s of ca(n,e)){let o=$o,a=!0;switch(s.op){case"<":case"<=":o=dv(s.value);break;case"==":case"in":case">=":o=s.value;break;case">":o=s.value,a=!1;break;case"!=":case"not-in":o=$o}xh({value:r,inclusive:i},{value:o,inclusive:a})<0&&(r=o,i=a)}if(t!==null){for(let s=0;s<n.orderBy.length;++s)if(n.orderBy[s].field.isEqual(e)){const o=t.position[s];xh({value:r,inclusive:i},{value:o,inclusive:t.inclusive})<0&&(r=o,i=t.inclusive);break}}return{value:r,inclusive:i}}function Fh(n,e,t){let r=Ln,i=!0;for(const s of ca(n,e)){let o=Ln,a=!0;switch(s.op){case">=":case">":o=hv(s.value),a=!1;break;case"==":case"in":case"<=":o=s.value;break;case"<":o=s.value,a=!1;break;case"!=":case"not-in":o=Ln}kh({value:r,inclusive:i},{value:o,inclusive:a})>0&&(r=o,i=a)}if(t!==null){for(let s=0;s<n.orderBy.length;++s)if(n.orderBy[s].field.isEqual(e)){const o=t.position[s];kh({value:r,inclusive:i},{value:o,inclusive:t.inclusive})>0&&(r=o,i=t.inclusive);break}}return{value:r,inclusive:i}}/**
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
 */class $a{constructor(e,t=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.Ee=null,this.Ie=null,this.Re=null,this.startAt,this.endAt}}function Ev(n,e,t,r,i,s,o,a){return new $a(n,e,t,r,i,s,o,a)}function Ys(n){return new $a(n)}function Mh(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function vv(n){return H.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function bv(n){return n.collectionGroup!==null}function ws(n){const e=ue(n);if(e.Ee===null){e.Ee=[];const t=new Set;for(const s of e.explicitOrderBy)e.Ee.push(s),t.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new De(ze.comparator);return o.filters.forEach((l=>{l.getFlattenedFilters().forEach((u=>{u.isInequality()&&(a=a.add(u.field))}))})),a})(e).forEach((s=>{t.has(s.canonicalString())||s.isKeyField()||e.Ee.push(new oa(s,r))})),t.has(ze.keyField().canonicalString())||e.Ee.push(new oa(ze.keyField(),r))}return e.Ee}function Ct(n){const e=ue(n);return e.Ie||(e.Ie=Iv(e,ws(n))),e.Ie}function Iv(n,e){if(n.limitType==="F")return ll(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map((i=>{const s=i.dir==="desc"?"asc":"desc";return new oa(i.field,s)}));const t=n.endAt?new Ei(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new Ei(n.startAt.position,n.startAt.inclusive):null;return ll(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function ul(n,e,t){return new $a(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Ua(n,e){return Ks(Ct(n),Ct(e))&&n.limitType===e.limitType}function Bp(n){return`${Dr(Ct(n))}|lt:${n.limitType}`}function ni(n){return`Query(target=${(function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map((i=>Vp(i))).join(", ")}]`),Na(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map((i=>(function(o){return`${o.field.canonicalString()} (${o.dir})`})(i))).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map((i=>Ti(i))).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map((i=>Ti(i))).join(",")),`Target(${r})`})(Ct(n))}; limitType=${n.limitType})`}function Qs(n,e){return e.isFoundDocument()&&(function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):H.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)})(n,e)&&(function(r,i){for(const s of ws(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0})(n,e)&&(function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0})(n,e)&&(function(r,i){return!(r.startAt&&!(function(o,a,l){const u=Ch(o,a,l);return o.inclusive?u<=0:u<0})(r.startAt,ws(r),i)||r.endAt&&!(function(o,a,l){const u=Ch(o,a,l);return o.inclusive?u>=0:u>0})(r.endAt,ws(r),i))})(n,e)}function Sv(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function qp(n){return(e,t)=>{let r=!1;for(const i of ws(n)){const s=Av(i,e,t);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function Av(n,e,t){const r=n.field.isKeyField()?H.comparator(e.key,t.key):(function(s,o,a){const l=o.data.field(s),u=a.data.field(s);return l!==null&&u!==null?Wn(l,u):ee(42886)})(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return ee(19790,{direction:n.dir})}}/**
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
 */class yn{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[t]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Br(this.inner,((t,r)=>{for(const[i,s]of r)e(i,s)}))}isEmpty(){return Ip(this.inner)}size(){return this.innerSize}}/**
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
 */const Rv=new qe(H.comparator);function vt(){return Rv}const zp=new qe(H.comparator);function ls(...n){let e=zp;for(const t of n)e=e.insert(t.key,t);return e}function Gp(n){let e=zp;return n.forEach(((t,r)=>e=e.insert(t,r.overlayedDocument))),e}function Yt(){return Ts()}function jp(){return Ts()}function Ts(){return new yn((n=>n.toString()),((n,e)=>n.isEqual(e)))}const Pv=new qe(H.comparator),xv=new De(H.comparator);function ye(...n){let e=xv;for(const t of n)e=e.add(t);return e}const kv=new De(le);function Cv(){return kv}/**
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
 */function Zl(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:xs(e)?"-0":e}}function Hp(n){return{integerValue:""+n}}function Dv(n,e){return ME(e)?Hp(e):Zl(n,e)}/**
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
 */class Ba{constructor(){this._=void 0}}function Nv(n,e,t){return n instanceof bi?(function(i,s){const o={fields:{[Rp]:{stringValue:Ap},[xp]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Kl(s)&&(s=La(s)),s&&(o.fields[Pp]=s),{mapValue:o}})(t,e):n instanceof Ii?Kp(n,e):n instanceof Si?Yp(n,e):(function(i,s){const o=Wp(i,s),a=Oh(o)+Oh(i.Ae);return ol(o)&&ol(i.Ae)?Hp(a):Zl(i.serializer,a)})(n,e)}function Fv(n,e,t){return n instanceof Ii?Kp(n,e):n instanceof Si?Yp(n,e):t}function Wp(n,e){return n instanceof Os?(function(r){return ol(r)||(function(s){return!!s&&"doubleValue"in s})(r)})(e)?e:{integerValue:0}:null}class bi extends Ba{}class Ii extends Ba{constructor(e){super(),this.elements=e}}function Kp(n,e){const t=Qp(e);for(const r of n.elements)t.some((i=>tn(i,r)))||t.push(r);return{arrayValue:{values:t}}}class Si extends Ba{constructor(e){super(),this.elements=e}}function Yp(n,e){let t=Qp(e);for(const r of n.elements)t=t.filter((i=>!tn(i,r)));return{arrayValue:{values:t}}}class Os extends Ba{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function Oh(n){return Be(n.integerValue||n.doubleValue)}function Qp(n){return Ms(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
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
 */class Jp{constructor(e,t){this.field=e,this.transform=t}}function Mv(n,e){return n.field.isEqual(e.field)&&(function(r,i){return r instanceof Ii&&i instanceof Ii||r instanceof Si&&i instanceof Si?mi(r.elements,i.elements,tn):r instanceof Os&&i instanceof Os?tn(r.Ae,i.Ae):r instanceof bi&&i instanceof bi})(n.transform,e.transform)}class Ov{constructor(e,t){this.version=e,this.transformResults=t}}class wt{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new wt}static exists(e){return new wt(void 0,e)}static updateTime(e){return new wt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function qo(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class qa{}function Xp(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new za(n.key,wt.none()):new Ci(n.key,n.data,wt.none());{const t=n.data,r=_t.empty();let i=new De(ze.comparator);for(let s of e.fields)if(!i.has(s)){let o=t.field(s);o===null&&s.length>1&&(s=s.popLast(),o=t.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new tr(n.key,r,new xt(i.toArray()),wt.none())}}function Lv(n,e,t){n instanceof Ci?(function(i,s,o){const a=i.value.clone(),l=Vh(i.fieldTransforms,s,o.transformResults);a.setAll(l),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()})(n,e,t):n instanceof tr?(function(i,s,o){if(!qo(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=Vh(i.fieldTransforms,s,o.transformResults),l=s.data;l.setAll(Zp(i)),l.setAll(a),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()})(n,e,t):(function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()})(0,e,t)}function Es(n,e,t,r){return n instanceof Ci?(function(s,o,a,l){if(!qo(s.precondition,o))return a;const u=s.value.clone(),d=$h(s.fieldTransforms,l,o);return u.setAll(d),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null})(n,e,t,r):n instanceof tr?(function(s,o,a,l){if(!qo(s.precondition,o))return a;const u=$h(s.fieldTransforms,l,o),d=o.data;return d.setAll(Zp(s)),d.setAll(u),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map((f=>f.field)))})(n,e,t,r):(function(s,o,a){return qo(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a})(n,e,t)}function Vv(n,e){let t=null;for(const r of n.fieldTransforms){const i=e.data.field(r.field),s=Wp(r.transform,i||null);s!=null&&(t===null&&(t=_t.empty()),t.set(r.field,s))}return t||null}function Lh(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!(function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&mi(r,i,((s,o)=>Mv(s,o)))})(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Ci extends qa{constructor(e,t,r,i=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class tr extends qa{constructor(e,t,r,i,s=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function Zp(n){const e=new Map;return n.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}})),e}function Vh(n,e,t){const r=new Map;ne(n.length===t.length,32656,{Ve:t.length,de:n.length});for(let i=0;i<t.length;i++){const s=n[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,Fv(o,a,t[i]))}return r}function $h(n,e,t){const r=new Map;for(const i of n){const s=i.transform,o=t.data.field(i.field);r.set(i.field,Nv(s,o,e))}return r}class za extends qa{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class eg extends qa{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class eu{constructor(e,t,r,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&Lv(s,e,r[i])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=Es(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=Es(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=jp();return this.mutations.forEach((i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=t.has(i.key)?null:a;const l=Xp(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(se.min())})),r}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),ye())}isEqual(e){return this.batchId===e.batchId&&mi(this.mutations,e.mutations,((t,r)=>Lh(t,r)))&&mi(this.baseMutations,e.baseMutations,((t,r)=>Lh(t,r)))}}class tu{constructor(e,t,r,i){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=i}static from(e,t,r){ne(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let i=(function(){return Pv})();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new tu(e,t,r,i)}}/**
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
 */class nu{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class $v{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var We,Ie;function Uv(n){switch(n){case $.OK:return ee(64938);case $.CANCELLED:case $.UNKNOWN:case $.DEADLINE_EXCEEDED:case $.RESOURCE_EXHAUSTED:case $.INTERNAL:case $.UNAVAILABLE:case $.UNAUTHENTICATED:return!1;case $.INVALID_ARGUMENT:case $.NOT_FOUND:case $.ALREADY_EXISTS:case $.PERMISSION_DENIED:case $.FAILED_PRECONDITION:case $.ABORTED:case $.OUT_OF_RANGE:case $.UNIMPLEMENTED:case $.DATA_LOSS:return!0;default:return ee(15467,{code:n})}}function tg(n){if(n===void 0)return ft("GRPC error has no .code"),$.UNKNOWN;switch(n){case We.OK:return $.OK;case We.CANCELLED:return $.CANCELLED;case We.UNKNOWN:return $.UNKNOWN;case We.DEADLINE_EXCEEDED:return $.DEADLINE_EXCEEDED;case We.RESOURCE_EXHAUSTED:return $.RESOURCE_EXHAUSTED;case We.INTERNAL:return $.INTERNAL;case We.UNAVAILABLE:return $.UNAVAILABLE;case We.UNAUTHENTICATED:return $.UNAUTHENTICATED;case We.INVALID_ARGUMENT:return $.INVALID_ARGUMENT;case We.NOT_FOUND:return $.NOT_FOUND;case We.ALREADY_EXISTS:return $.ALREADY_EXISTS;case We.PERMISSION_DENIED:return $.PERMISSION_DENIED;case We.FAILED_PRECONDITION:return $.FAILED_PRECONDITION;case We.ABORTED:return $.ABORTED;case We.OUT_OF_RANGE:return $.OUT_OF_RANGE;case We.UNIMPLEMENTED:return $.UNIMPLEMENTED;case We.DATA_LOSS:return $.DATA_LOSS;default:return ee(39323,{code:n})}}(Ie=We||(We={}))[Ie.OK=0]="OK",Ie[Ie.CANCELLED=1]="CANCELLED",Ie[Ie.UNKNOWN=2]="UNKNOWN",Ie[Ie.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ie[Ie.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ie[Ie.NOT_FOUND=5]="NOT_FOUND",Ie[Ie.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ie[Ie.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ie[Ie.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ie[Ie.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ie[Ie.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ie[Ie.ABORTED=10]="ABORTED",Ie[Ie.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ie[Ie.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ie[Ie.INTERNAL=13]="INTERNAL",Ie[Ie.UNAVAILABLE=14]="UNAVAILABLE",Ie[Ie.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function Bv(){return new TextEncoder}/**
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
 */const qv=new Un([4294967295,4294967295],0);function Uh(n){const e=Bv().encode(n),t=new Zm;return t.update(e),new Uint8Array(t.digest())}function Bh(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Un([t,r],0),new Un([i,s],0)]}class ru{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new us(`Invalid padding: ${t}`);if(r<0)throw new us(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new us(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new us(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=Un.fromNumber(this.ge)}ye(e,t,r){let i=e.add(t.multiply(Un.fromNumber(r)));return i.compare(qv)===1&&(i=new Un([i.getBits(0),i.getBits(1)],0)),i.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=Uh(e),[r,i]=Bh(t);for(let s=0;s<this.hashCount;s++){const o=this.ye(r,i,s);if(!this.we(o))return!1}return!0}static create(e,t,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new ru(s,i,t);return r.forEach((a=>o.insert(a))),o}insert(e){if(this.ge===0)return;const t=Uh(e),[r,i]=Bh(t);for(let s=0;s<this.hashCount;s++){const o=this.ye(r,i,s);this.Se(o)}}Se(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class us extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Ga{constructor(e,t,r,i,s){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const i=new Map;return i.set(e,Js.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new Ga(se.min(),i,new qe(le),vt(),ye())}}class Js{constructor(e,t,r,i,s){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new Js(r,t,ye(),ye(),ye())}}/**
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
 */class zo{constructor(e,t,r,i){this.be=e,this.removedTargetIds=t,this.key=r,this.De=i}}class ng{constructor(e,t){this.targetId=e,this.Ce=t}}class rg{constructor(e,t,r=Je.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=i}}class qh{constructor(){this.ve=0,this.Fe=zh(),this.Me=Je.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=ye(),t=ye(),r=ye();return this.Fe.forEach(((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:t=t.add(i);break;case 1:r=r.add(i);break;default:ee(38017,{changeType:s})}})),new Js(this.Me,this.xe,e,t,r)}qe(){this.Oe=!1,this.Fe=zh()}Ke(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}Ue(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}$e(){this.ve+=1}We(){this.ve-=1,ne(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class zv{constructor(e){this.Ge=e,this.ze=new Map,this.je=vt(),this.Je=_o(),this.He=_o(),this.Ze=new qe(le)}Xe(e){for(const t of e.be)e.De&&e.De.isFoundDocument()?this.Ye(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,(t=>{const r=this.nt(t);switch(e.state){case 0:this.rt(t)&&r.Le(e.resumeToken);break;case 1:r.We(),r.Ne||r.qe(),r.Le(e.resumeToken);break;case 2:r.We(),r.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(r.Qe(),r.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),r.Le(e.resumeToken));break;default:ee(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach(((r,i)=>{this.rt(i)&&t(i)}))}st(e){const t=e.targetId,r=e.Ce.count,i=this.ot(t);if(i){const s=i.target;if(aa(s))if(r===0){const o=new H(s.path);this.et(t,o,He.newNoDocument(o,se.min()))}else ne(r===1,20013,{expectedCount:r});else{const o=this._t(t);if(o!==r){const a=this.ut(e),l=a?this.ct(a,e,o):1;if(l!==0){this.it(t);const u=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(t,u)}}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=t;let o,a;try{o=gn(r).toUint8Array()}catch(l){if(l instanceof Sp)return jn("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{a=new ru(o,i,s)}catch(l){return jn(l instanceof us?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return a.ge===0?null:a}ct(e,t,r){return t.Ce.count===r-this.Pt(e,t.targetId)?0:2}Pt(e,t){const r=this.Ge.getRemoteKeysForTarget(t);let i=0;return r.forEach((s=>{const o=this.Ge.ht(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(a)||(this.et(t,s,null),i++)})),i}Tt(e){const t=new Map;this.ze.forEach(((s,o)=>{const a=this.ot(o);if(a){if(s.current&&aa(a.target)){const l=new H(a.target.path);this.Et(l).has(o)||this.It(o,l)||this.et(o,l,He.newNoDocument(l,e))}s.Be&&(t.set(o,s.ke()),s.qe())}}));let r=ye();this.He.forEach(((s,o)=>{let a=!0;o.forEachWhile((l=>{const u=this.ot(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)})),a&&(r=r.add(s))})),this.je.forEach(((s,o)=>o.setReadTime(e)));const i=new Ga(e,t,this.Ze,this.je,r);return this.je=vt(),this.Je=_o(),this.He=_o(),this.Ze=new qe(le),i}Ye(e,t){if(!this.rt(e))return;const r=this.It(e,t.key)?2:0;this.nt(e).Ke(t.key,r),this.je=this.je.insert(t.key,t),this.Je=this.Je.insert(t.key,this.Et(t.key).add(e)),this.He=this.He.insert(t.key,this.Rt(t.key).add(e))}et(e,t,r){if(!this.rt(e))return;const i=this.nt(e);this.It(e,t)?i.Ke(t,1):i.Ue(t),this.He=this.He.insert(t,this.Rt(t).delete(e)),this.He=this.He.insert(t,this.Rt(t).add(e)),r&&(this.je=this.je.insert(t,r))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.nt(e).$e()}nt(e){let t=this.ze.get(e);return t||(t=new qh,this.ze.set(e,t)),t}Rt(e){let t=this.He.get(e);return t||(t=new De(le),this.He=this.He.insert(e,t)),t}Et(e){let t=this.Je.get(e);return t||(t=new De(le),this.Je=this.Je.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||q("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new qh),this.Ge.getRemoteKeysForTarget(e).forEach((t=>{this.et(e,t,null)}))}It(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function _o(){return new qe(H.comparator)}function zh(){return new qe(H.comparator)}const Gv={asc:"ASCENDING",desc:"DESCENDING"},jv={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Hv={and:"AND",or:"OR"};class Wv{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function dl(n,e){return n.useProto3Json||Na(e)?e:{value:e}}function Ai(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function ig(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function Kv(n,e){return Ai(n,e.toTimestamp())}function mt(n){return ne(!!n,49232),se.fromTimestamp((function(t){const r=pn(t);return new Ce(r.seconds,r.nanos)})(n))}function iu(n,e){return hl(n,e).canonicalString()}function hl(n,e){const t=(function(i){return new xe(["projects",i.projectId,"databases",i.database])})(n).child("documents");return e===void 0?t:t.child(e)}function sg(n){const e=xe.fromString(n);return ne(mg(e),10190,{key:e.toString()}),e}function la(n,e){return iu(n.databaseId,e.path)}function br(n,e){const t=sg(e);if(t.get(1)!==n.databaseId.projectId)throw new W($.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new W($.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new H(cg(t))}function og(n,e){return iu(n.databaseId,e)}function ag(n){const e=sg(n);return e.length===4?xe.emptyPath():cg(e)}function fl(n){return new xe(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function cg(n){return ne(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function Gh(n,e,t){return{name:la(n,e),fields:t.value.mapValue.fields}}function Yv(n,e,t){const r=br(n,e.name),i=mt(e.updateTime),s=e.createTime?mt(e.createTime):se.min(),o=new _t({mapValue:{fields:e.fields}}),a=He.newFoundDocument(r,i,s,o);return t&&a.setHasCommittedMutations(),t?a.setHasCommittedMutations():a}function Qv(n,e){let t;if("targetChange"in e){e.targetChange;const r=(function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:ee(39313,{state:u})})(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=(function(u,d){return u.useProto3Json?(ne(d===void 0||typeof d=="string",58123),Je.fromBase64String(d||"")):(ne(d===void 0||d instanceof Buffer||d instanceof Uint8Array,16193),Je.fromUint8Array(d||new Uint8Array))})(n,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&(function(u){const d=u.code===void 0?$.UNKNOWN:tg(u.code);return new W(d,u.message||"")})(o);t=new rg(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=br(n,r.document.name),s=mt(r.document.updateTime),o=r.document.createTime?mt(r.document.createTime):se.min(),a=new _t({mapValue:{fields:r.document.fields}}),l=He.newFoundDocument(i,s,o,a),u=r.targetIds||[],d=r.removedTargetIds||[];t=new zo(u,d,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=br(n,r.document),s=r.readTime?mt(r.readTime):se.min(),o=He.newNoDocument(i,s),a=r.removedTargetIds||[];t=new zo([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=br(n,r.document),s=r.removedTargetIds||[];t=new zo([],s,i,null)}else{if(!("filter"in e))return ee(11601,{Vt:e});{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new $v(i,s),a=r.targetId;t=new ng(a,o)}}return t}function ua(n,e){let t;if(e instanceof Ci)t={update:Gh(n,e.key,e.value)};else if(e instanceof za)t={delete:la(n,e.key)};else if(e instanceof tr)t={update:Gh(n,e.key,e.data),updateMask:nb(e.fieldMask)};else{if(!(e instanceof eg))return ee(16599,{dt:e.type});t={verify:la(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((r=>(function(s,o){const a=o.transform;if(a instanceof bi)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Ii)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Si)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Os)return{fieldPath:o.field.canonicalString(),increment:a.Ae};throw ee(20930,{transform:o.transform})})(0,r)))),e.precondition.isNone||(t.currentDocument=(function(i,s){return s.updateTime!==void 0?{updateTime:Kv(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:ee(27497)})(n,e.precondition)),t}function ml(n,e){const t=e.currentDocument?(function(s){return s.updateTime!==void 0?wt.updateTime(mt(s.updateTime)):s.exists!==void 0?wt.exists(s.exists):wt.none()})(e.currentDocument):wt.none(),r=e.updateTransforms?e.updateTransforms.map((i=>(function(o,a){let l=null;if("setToServerValue"in a)ne(a.setToServerValue==="REQUEST_TIME",16630,{proto:a}),l=new bi;else if("appendMissingElements"in a){const d=a.appendMissingElements.values||[];l=new Ii(d)}else if("removeAllFromArray"in a){const d=a.removeAllFromArray.values||[];l=new Si(d)}else"increment"in a?l=new Os(o,a.increment):ee(16584,{proto:a});const u=ze.fromServerFormat(a.fieldPath);return new Jp(u,l)})(n,i))):[];if(e.update){e.update.name;const i=br(n,e.update.name),s=new _t({mapValue:{fields:e.update.fields}});if(e.updateMask){const o=(function(l){const u=l.fieldPaths||[];return new xt(u.map((d=>ze.fromServerFormat(d))))})(e.updateMask);return new tr(i,s,o,t,r)}return new Ci(i,s,t,r)}if(e.delete){const i=br(n,e.delete);return new za(i,t)}if(e.verify){const i=br(n,e.verify);return new eg(i,t)}return ee(1463,{proto:e})}function Jv(n,e){return n&&n.length>0?(ne(e!==void 0,14353),n.map((t=>(function(i,s){let o=i.updateTime?mt(i.updateTime):mt(s);return o.isEqual(se.min())&&(o=mt(s)),new Ov(o,i.transformResults||[])})(t,e)))):[]}function lg(n,e){return{documents:[og(n,e.path)]}}function ug(n,e){const t={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=og(n,i);const s=(function(u){if(u.length!==0)return fg(Me.create(u,"and"))})(e.filters);s&&(t.structuredQuery.where=s);const o=(function(u){if(u.length!==0)return u.map((d=>(function(_){return{field:ri(_.field),direction:Zv(_.dir)}})(d)))})(e.orderBy);o&&(t.structuredQuery.orderBy=o);const a=dl(n,e.limit);return a!==null&&(t.structuredQuery.limit=a),e.startAt&&(t.structuredQuery.startAt=(function(u){return{before:u.inclusive,values:u.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(u){return{before:!u.inclusive,values:u.position}})(e.endAt)),{ft:t,parent:i}}function dg(n){let e=ag(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let i=null;if(r>0){ne(r===1,65062);const d=t.from[0];d.allDescendants?i=d.collectionId:e=e.child(d.collectionId)}let s=[];t.where&&(s=(function(f){const _=hg(f);return _ instanceof Me&&Xl(_)?_.getFilters():[_]})(t.where));let o=[];t.orderBy&&(o=(function(f){return f.map((_=>(function(w){return new oa(ii(w.field),(function(P){switch(P){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(w.direction))})(_)))})(t.orderBy));let a=null;t.limit&&(a=(function(f){let _;return _=typeof f=="object"?f.value:f,Na(_)?null:_})(t.limit));let l=null;t.startAt&&(l=(function(f){const _=!!f.before,I=f.values||[];return new Ei(I,_)})(t.startAt));let u=null;return t.endAt&&(u=(function(f){const _=!f.before,I=f.values||[];return new Ei(I,_)})(t.endAt)),Ev(e,i,o,s,a,"F",l,u)}function Xv(n,e){const t=(function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ee(28987,{purpose:i})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function hg(n){return n.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=ii(t.unaryFilter.field);return ve.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=ii(t.unaryFilter.field);return ve.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=ii(t.unaryFilter.field);return ve.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=ii(t.unaryFilter.field);return ve.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return ee(61313);default:return ee(60726)}})(n):n.fieldFilter!==void 0?(function(t){return ve.create(ii(t.fieldFilter.field),(function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return ee(58110);default:return ee(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(n):n.compositeFilter!==void 0?(function(t){return Me.create(t.compositeFilter.filters.map((r=>hg(r))),(function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return ee(1026)}})(t.compositeFilter.op))})(n):ee(30097,{filter:n})}function Zv(n){return Gv[n]}function eb(n){return jv[n]}function tb(n){return Hv[n]}function ri(n){return{fieldPath:n.canonicalString()}}function ii(n){return ze.fromServerFormat(n.fieldPath)}function fg(n){return n instanceof ve?(function(t){if(t.op==="=="){if(Ph(t.value))return{unaryFilter:{field:ri(t.field),op:"IS_NAN"}};if(Rh(t.value))return{unaryFilter:{field:ri(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Ph(t.value))return{unaryFilter:{field:ri(t.field),op:"IS_NOT_NAN"}};if(Rh(t.value))return{unaryFilter:{field:ri(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ri(t.field),op:eb(t.op),value:t.value}}})(n):n instanceof Me?(function(t){const r=t.getFilters().map((i=>fg(i)));return r.length===1?r[0]:{compositeFilter:{op:tb(t.op),filters:r}}})(n):ee(54877,{filter:n})}function nb(n){const e=[];return n.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function mg(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}function pg(n){return!!n&&typeof n._toProto=="function"&&n._protoValueType==="ProtoValue"}/**
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
 */class un{constructor(e,t,r,i,s=se.min(),o=se.min(),a=Je.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new un(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new un(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new un(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new un(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class gg{constructor(e){this.yt=e}}function rb(n,e){let t;if(e.document)t=Yv(n.yt,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const r=H.fromSegments(e.noDocument.path),i=Fr(e.noDocument.readTime);t=He.newNoDocument(r,i),e.hasCommittedMutations&&t.setHasCommittedMutations()}else{if(!e.unknownDocument)return ee(56709);{const r=H.fromSegments(e.unknownDocument.path),i=Fr(e.unknownDocument.version);t=He.newUnknownDocument(r,i)}}return e.readTime&&t.setReadTime((function(i){const s=new Ce(i[0],i[1]);return se.fromTimestamp(s)})(e.readTime)),t}function jh(n,e){const t=e.key,r={prefixPath:t.getCollectionPath().popLast().toArray(),collectionGroup:t.collectionGroup,documentId:t.path.lastSegment(),readTime:da(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())r.document=(function(s,o){return{name:la(s,o.key),fields:o.data.value.mapValue.fields,updateTime:Ai(s,o.version.toTimestamp()),createTime:Ai(s,o.createTime.toTimestamp())}})(n.yt,e);else if(e.isNoDocument())r.noDocument={path:t.path.toArray(),readTime:Nr(e.version)};else{if(!e.isUnknownDocument())return ee(57904,{document:e});r.unknownDocument={path:t.path.toArray(),version:Nr(e.version)}}return r}function da(n){const e=n.toTimestamp();return[e.seconds,e.nanoseconds]}function Nr(n){const e=n.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function Fr(n){const e=new Ce(n.seconds,n.nanoseconds);return se.fromTimestamp(e)}function mr(n,e){const t=(e.baseMutations||[]).map((s=>ml(n.yt,s)));for(let s=0;s<e.mutations.length-1;++s){const o=e.mutations[s];if(s+1<e.mutations.length&&e.mutations[s+1].transform!==void 0){const a=e.mutations[s+1];o.updateTransforms=a.transform.fieldTransforms,e.mutations.splice(s+1,1),++s}}const r=e.mutations.map((s=>ml(n.yt,s))),i=Ce.fromMillis(e.localWriteTimeMs);return new eu(e.batchId,i,t,r)}function ds(n){const e=Fr(n.readTime),t=n.lastLimboFreeSnapshotVersion!==void 0?Fr(n.lastLimboFreeSnapshotVersion):se.min();let r;return r=(function(s){return s.documents!==void 0})(n.query)?(function(s){const o=s.documents.length;return ne(o===1,1966,{count:o}),Ct(Ys(ag(s.documents[0])))})(n.query):(function(s){return Ct(dg(s))})(n.query),new un(r,n.targetId,"TargetPurposeListen",n.lastListenSequenceNumber,e,t,Je.fromBase64String(n.resumeToken))}function yg(n,e){const t=Nr(e.snapshotVersion),r=Nr(e.lastLimboFreeSnapshotVersion);let i;i=aa(e.target)?lg(n.yt,e.target):ug(n.yt,e.target).ft;const s=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:Dr(e.target),readTime:t,resumeToken:s,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:r,query:i}}function _g(n){const e=dg({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?ul(e,e.limit,"L"):e}function Rc(n,e){return new nu(e.largestBatchId,ml(n.yt,e.overlayMutation))}function Hh(n,e){const t=e.path.lastSegment();return[n,ut(e.path.popLast()),t]}function Wh(n,e,t,r){return{indexId:n,uid:e,sequenceNumber:t,readTime:Nr(r.readTime),documentKey:ut(r.documentKey.path),largestBatchId:r.largestBatchId}}/**
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
 */class ib{getBundleMetadata(e,t){return Kh(e).get(t).next((r=>{if(r)return(function(s){return{id:s.bundleId,createTime:Fr(s.createTime),version:s.version}})(r)}))}saveBundleMetadata(e,t){return Kh(e).put((function(i){return{bundleId:i.id,createTime:Nr(mt(i.createTime)),version:i.version}})(t))}getNamedQuery(e,t){return Yh(e).get(t).next((r=>{if(r)return(function(s){return{name:s.name,query:_g(s.bundledQuery),readTime:Fr(s.readTime)}})(r)}))}saveNamedQuery(e,t){return Yh(e).put((function(i){return{name:i.name,readTime:Nr(mt(i.readTime)),bundledQuery:i.bundledQuery}})(t))}}function Kh(n){return et(n,Fa)}function Yh(n){return et(n,Ma)}/**
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
 */class ja{constructor(e,t){this.serializer=e,this.userId=t}static wt(e,t){const r=t.uid||"";return new ja(e,r)}getOverlay(e,t){return Qi(e).get(Hh(this.userId,t)).next((r=>r?Rc(this.serializer,r):null))}getOverlays(e,t){const r=Yt();return D.forEach(t,(i=>this.getOverlay(e,i).next((s=>{s!==null&&r.set(i,s)})))).next((()=>r))}saveOverlays(e,t,r){const i=[];return r.forEach(((s,o)=>{const a=new nu(t,o);i.push(this.St(e,a))})),D.waitFor(i)}removeOverlaysForBatchId(e,t,r){const i=new Set;t.forEach((o=>i.add(ut(o.getCollectionPath()))));const s=[];return i.forEach((o=>{const a=IDBKeyRange.bound([this.userId,o,r],[this.userId,o,r+1],!1,!0);s.push(Qi(e).X(rl,a))})),D.waitFor(s)}getOverlaysForCollection(e,t,r){const i=Yt(),s=ut(t),o=IDBKeyRange.bound([this.userId,s,r],[this.userId,s,Number.POSITIVE_INFINITY],!0);return Qi(e).J(rl,o).next((a=>{for(const l of a){const u=Rc(this.serializer,l);i.set(u.getKey(),u)}return i}))}getOverlaysForCollectionGroup(e,t,r,i){const s=Yt();let o;const a=IDBKeyRange.bound([this.userId,t,r],[this.userId,t,Number.POSITIVE_INFINITY],!0);return Qi(e).ee({index:wp,range:a},((l,u,d)=>{const f=Rc(this.serializer,u);s.size()<i||f.largestBatchId===o?(s.set(f.getKey(),f),o=f.largestBatchId):d.done()})).next((()=>s))}St(e,t){return Qi(e).put((function(i,s,o){const[a,l,u]=Hh(s,o.mutation.key);return{userId:s,collectionPath:l,documentId:u,collectionGroup:o.mutation.key.getCollectionGroup(),largestBatchId:o.largestBatchId,overlayMutation:ua(i.yt,o.mutation)}})(this.serializer,this.userId,t))}}function Qi(n){return et(n,Oa)}/**
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
 */class sb{bt(e){return et(e,Hl)}getSessionToken(e){return this.bt(e).get("sessionToken").next((t=>{const r=t==null?void 0:t.value;return r?Je.fromUint8Array(r):Je.EMPTY_BYTE_STRING}))}setSessionToken(e,t){return this.bt(e).put({name:"sessionToken",value:t.toUint8Array()})}}/**
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
 */class pr{constructor(){}Dt(e,t){this.Ct(e,t),t.vt()}Ct(e,t){if("nullValue"in e)this.Ft(t,5);else if("booleanValue"in e)this.Ft(t,10),t.Mt(e.booleanValue?1:0);else if("integerValue"in e)this.Ft(t,15),t.Mt(Be(e.integerValue));else if("doubleValue"in e){const r=Be(e.doubleValue);isNaN(r)?this.Ft(t,13):(this.Ft(t,15),xs(r)?t.Mt(0):t.Mt(r))}else if("timestampValue"in e){let r=e.timestampValue;this.Ft(t,20),typeof r=="string"&&(r=pn(r)),t.xt(`${r.seconds||""}`),t.Mt(r.nanos||0)}else if("stringValue"in e)this.Ot(e.stringValue,t),this.Nt(t);else if("bytesValue"in e)this.Ft(t,30),t.Bt(gn(e.bytesValue)),this.Nt(t);else if("referenceValue"in e)this.Lt(e.referenceValue,t);else if("geoPointValue"in e){const r=e.geoPointValue;this.Ft(t,45),t.Mt(r.latitude||0),t.Mt(r.longitude||0)}else"mapValue"in e?Cp(e)?this.Ft(t,Number.MAX_SAFE_INTEGER):Va(e)?this.kt(e.mapValue,t):(this.qt(e.mapValue,t),this.Nt(t)):"arrayValue"in e?(this.Kt(e.arrayValue,t),this.Nt(t)):ee(19022,{Ut:e})}Ot(e,t){this.Ft(t,25),this.$t(e,t)}$t(e,t){t.xt(e)}qt(e,t){const r=e.fields||{};this.Ft(t,55);for(const i of Object.keys(r))this.Ot(i,t),this.Ct(r[i],t)}kt(e,t){var o,a;const r=e.fields||{};this.Ft(t,53);const i=wi,s=((a=(o=r[i].arrayValue)==null?void 0:o.values)==null?void 0:a.length)||0;this.Ft(t,15),t.Mt(Be(s)),this.Ot(i,t),this.Ct(r[i],t)}Kt(e,t){const r=e.values||[];this.Ft(t,50);for(const i of r)this.Ct(i,t)}Lt(e,t){this.Ft(t,37),H.fromName(e).path.forEach((r=>{this.Ft(t,60),this.$t(r,t)}))}Ft(e,t){e.Mt(t)}Nt(e){e.Mt(2)}}pr.Wt=new pr;/**
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
 */const Yr=255;function ob(n){if(n===0)return 8;let e=0;return n>>4||(e+=4,n<<=4),n>>6||(e+=2,n<<=2),n>>7||(e+=1),e}function Qh(n){const e=64-(function(r){let i=0;for(let s=0;s<8;++s){const o=ob(255&r[s]);if(i+=o,o!==8)break}return i})(n);return Math.ceil(e/8)}class ab{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Qt(e){const t=e[Symbol.iterator]();let r=t.next();for(;!r.done;)this.Gt(r.value),r=t.next();this.zt()}jt(e){const t=e[Symbol.iterator]();let r=t.next();for(;!r.done;)this.Jt(r.value),r=t.next();this.Ht()}Zt(e){for(const t of e){const r=t.charCodeAt(0);if(r<128)this.Gt(r);else if(r<2048)this.Gt(960|r>>>6),this.Gt(128|63&r);else if(t<"\uD800"||"\uDBFF"<t)this.Gt(480|r>>>12),this.Gt(128|63&r>>>6),this.Gt(128|63&r);else{const i=t.codePointAt(0);this.Gt(240|i>>>18),this.Gt(128|63&i>>>12),this.Gt(128|63&i>>>6),this.Gt(128|63&i)}}this.zt()}Xt(e){for(const t of e){const r=t.charCodeAt(0);if(r<128)this.Jt(r);else if(r<2048)this.Jt(960|r>>>6),this.Jt(128|63&r);else if(t<"\uD800"||"\uDBFF"<t)this.Jt(480|r>>>12),this.Jt(128|63&r>>>6),this.Jt(128|63&r);else{const i=t.codePointAt(0);this.Jt(240|i>>>18),this.Jt(128|63&i>>>12),this.Jt(128|63&i>>>6),this.Jt(128|63&i)}}this.Ht()}Yt(e){const t=this.en(e),r=Qh(t);this.tn(1+r),this.buffer[this.position++]=255&r;for(let i=t.length-r;i<t.length;++i)this.buffer[this.position++]=255&t[i]}nn(e){const t=this.en(e),r=Qh(t);this.tn(1+r),this.buffer[this.position++]=~(255&r);for(let i=t.length-r;i<t.length;++i)this.buffer[this.position++]=~(255&t[i])}rn(){this.sn(Yr),this.sn(255)}_n(){this.an(Yr),this.an(255)}reset(){this.position=0}seed(e){this.tn(e.length),this.buffer.set(e,this.position),this.position+=e.length}un(){return this.buffer.slice(0,this.position)}en(e){const t=(function(s){const o=new DataView(new ArrayBuffer(8));return o.setFloat64(0,s,!1),new Uint8Array(o.buffer)})(e),r=!!(128&t[0]);t[0]^=r?255:128;for(let i=1;i<t.length;++i)t[i]^=r?255:0;return t}Gt(e){const t=255&e;t===0?(this.sn(0),this.sn(255)):t===Yr?(this.sn(Yr),this.sn(0)):this.sn(t)}Jt(e){const t=255&e;t===0?(this.an(0),this.an(255)):t===Yr?(this.an(Yr),this.an(0)):this.an(e)}zt(){this.sn(0),this.sn(1)}Ht(){this.an(0),this.an(1)}sn(e){this.tn(1),this.buffer[this.position++]=e}an(e){this.tn(1),this.buffer[this.position++]=~e}tn(e){const t=e+this.position;if(t<=this.buffer.length)return;let r=2*this.buffer.length;r<t&&(r=t);const i=new Uint8Array(r);i.set(this.buffer),this.buffer=i}}class cb{constructor(e){this.cn=e}Bt(e){this.cn.Qt(e)}xt(e){this.cn.Zt(e)}Mt(e){this.cn.Yt(e)}vt(){this.cn.rn()}}class lb{constructor(e){this.cn=e}Bt(e){this.cn.jt(e)}xt(e){this.cn.Xt(e)}Mt(e){this.cn.nn(e)}vt(){this.cn._n()}}class Ji{constructor(){this.cn=new ab,this.ascending=new cb(this.cn),this.descending=new lb(this.cn)}seed(e){this.cn.seed(e)}ln(e){return e===0?this.ascending:this.descending}un(){return this.cn.un()}reset(){this.cn.reset()}}/**
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
 */class gr{constructor(e,t,r,i){this.hn=e,this.Pn=t,this.Tn=r,this.En=i}In(){const e=this.En.length,t=e===0||this.En[e-1]===255?e+1:e,r=new Uint8Array(t);return r.set(this.En,0),t!==e?r.set([0],this.En.length):++r[r.length-1],new gr(this.hn,this.Pn,this.Tn,r)}Rn(e,t,r){return{indexId:this.hn,uid:e,arrayValue:Go(this.Tn),directionalValue:Go(this.En),orderedDocumentKey:Go(t),documentKey:r.path.toArray()}}An(e,t,r){const i=this.Rn(e,t,r);return[i.indexId,i.uid,i.arrayValue,i.directionalValue,i.orderedDocumentKey,i.documentKey]}}function Pn(n,e){let t=n.hn-e.hn;return t!==0?t:(t=Jh(n.Tn,e.Tn),t!==0?t:(t=Jh(n.En,e.En),t!==0?t:H.comparator(n.Pn,e.Pn)))}function Jh(n,e){for(let t=0;t<n.length&&t<e.length;++t){const r=n[t]-e[t];if(r!==0)return r}return n.length-e.length}function Go(n){return lm()?(function(t){let r="";for(let i=0;i<t.length;i++)r+=String.fromCharCode(t[i]);return r})(n):n}function Xh(n){return typeof n!="string"?n:(function(t){const r=new Uint8Array(t.length);for(let i=0;i<t.length;i++)r[i]=t.charCodeAt(i);return r})(n)}class Zh{constructor(e){this.Vn=new De(((t,r)=>ze.comparator(t.field,r.field))),this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.dn=e.orderBy,this.mn=[];for(const t of e.filters){const r=t;r.isInequality()?this.Vn=this.Vn.add(r):this.mn.push(r)}}get fn(){return this.Vn.size>1}gn(e){if(ne(e.collectionGroup===this.collectionId,49279),this.fn)return!1;const t=el(e);if(t!==void 0&&!this.pn(t))return!1;const r=dr(e);let i=new Set,s=0,o=0;for(;s<r.length&&this.pn(r[s]);++s)i=i.add(r[s].fieldPath.canonicalString());if(s===r.length)return!0;if(this.Vn.size>0){const a=this.Vn.getIterator().getNext();if(!i.has(a.field.canonicalString())){const l=r[s];if(!this.yn(a,l)||!this.wn(this.dn[o++],l))return!1}++s}for(;s<r.length;++s){const a=r[s];if(o>=this.dn.length||!this.wn(this.dn[o++],a))return!1}return!0}Sn(){if(this.fn)return null;let e=new De(ze.comparator);const t=[];for(const r of this.mn)if(!r.field.isKeyField())if(r.op==="array-contains"||r.op==="array-contains-any")t.push(new Oo(r.field,2));else{if(e.has(r.field))continue;e=e.add(r.field),t.push(new Oo(r.field,0))}for(const r of this.dn)r.field.isKeyField()||e.has(r.field)||(e=e.add(r.field),t.push(new Oo(r.field,r.dir==="asc"?0:1)));return new ta(ta.UNKNOWN_ID,this.collectionId,t,Ps.empty())}pn(e){for(const t of this.mn)if(this.yn(t,e))return!0;return!1}yn(e,t){if(e===void 0||!e.field.isEqual(t.fieldPath))return!1;const r=e.op==="array-contains"||e.op==="array-contains-any";return t.kind===2===r}wn(e,t){return!!e.field.isEqual(t.fieldPath)&&(t.kind===0&&e.dir==="asc"||t.kind===1&&e.dir==="desc")}}/**
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
 */function wg(n){var t,r;if(ne(n instanceof ve||n instanceof Me,20012),n instanceof ve){if(n instanceof Up){const i=((r=(t=n.value.arrayValue)==null?void 0:t.values)==null?void 0:r.map((s=>ve.create(n.field,"==",s))))||[];return Me.create(i,"or")}return n}const e=n.filters.map((i=>wg(i)));return Me.create(e,n.op)}function ub(n){if(n.getFilters().length===0)return[];const e=yl(wg(n));return ne(Tg(e),7391),pl(e)||gl(e)?[e]:e.getFilters()}function pl(n){return n instanceof ve}function gl(n){return n instanceof Me&&Xl(n)}function Tg(n){return pl(n)||gl(n)||(function(t){if(t instanceof Me&&al(t)){for(const r of t.getFilters())if(!pl(r)&&!gl(r))return!1;return!0}return!1})(n)}function yl(n){if(ne(n instanceof ve||n instanceof Me,34018),n instanceof ve)return n;if(n.filters.length===1)return yl(n.filters[0]);const e=n.filters.map((r=>yl(r)));let t=Me.create(e,n.op);return t=ha(t),Tg(t)?t:(ne(t instanceof Me,64498),ne(vi(t),40251),ne(t.filters.length>1,57927),t.filters.reduce(((r,i)=>su(r,i))))}function su(n,e){let t;return ne(n instanceof ve||n instanceof Me,38388),ne(e instanceof ve||e instanceof Me,25473),t=n instanceof ve?e instanceof ve?(function(i,s){return Me.create([i,s],"and")})(n,e):ef(n,e):e instanceof ve?ef(e,n):(function(i,s){if(ne(i.filters.length>0&&s.filters.length>0,48005),vi(i)&&vi(s))return Lp(i,s.getFilters());const o=al(i)?i:s,a=al(i)?s:i,l=o.filters.map((u=>su(u,a)));return Me.create(l,"or")})(n,e),ha(t)}function ef(n,e){if(vi(e))return Lp(e,n.getFilters());{const t=e.filters.map((r=>su(n,r)));return Me.create(t,"or")}}function ha(n){if(ne(n instanceof ve||n instanceof Me,11850),n instanceof ve)return n;const e=n.getFilters();if(e.length===1)return ha(e[0]);if(Mp(n))return n;const t=e.map((i=>ha(i))),r=[];return t.forEach((i=>{i instanceof ve?r.push(i):i instanceof Me&&(i.op===n.op?r.push(...i.filters):r.push(i))})),r.length===1?r[0]:Me.create(r,n.op)}/**
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
 */class db{constructor(){this.bn=new ou}addToCollectionParentIndex(e,t){return this.bn.add(t),D.resolve()}getCollectionParents(e,t){return D.resolve(this.bn.getEntries(t))}addFieldIndex(e,t){return D.resolve()}deleteFieldIndex(e,t){return D.resolve()}deleteAllFieldIndexes(e){return D.resolve()}createTargetIndexes(e,t){return D.resolve()}getDocumentsMatchingTarget(e,t){return D.resolve(null)}getIndexType(e,t){return D.resolve(0)}getFieldIndexes(e,t){return D.resolve([])}getNextCollectionGroupToUpdate(e){return D.resolve(null)}getMinOffset(e,t){return D.resolve(St.min())}getMinOffsetFromCollectionGroup(e,t){return D.resolve(St.min())}updateCollectionGroup(e,t,r){return D.resolve()}updateIndexEntries(e,t){return D.resolve()}}class ou{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t]||new De(xe.comparator),s=!i.has(r);return this.index[t]=i.add(r),s}has(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t];return i&&i.has(r)}getEntries(e){return(this.index[e]||new De(xe.comparator)).toArray()}}/**
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
 */const tf="IndexedDbIndexManager",wo=new Uint8Array(0);class hb{constructor(e,t){this.databaseId=t,this.Dn=new ou,this.Cn=new yn((r=>Dr(r)),((r,i)=>Ks(r,i))),this.uid=e.uid||""}addToCollectionParentIndex(e,t){if(!this.Dn.has(t)){const r=t.lastSegment(),i=t.popLast();e.addOnCommittedListener((()=>{this.Dn.add(t)}));const s={collectionId:r,parent:ut(i)};return nf(e).put(s)}return D.resolve()}getCollectionParents(e,t){const r=[],i=IDBKeyRange.bound([t,""],[ap(t),""],!1,!0);return nf(e).J(i).next((s=>{for(const o of s){if(o.collectionId!==t)break;r.push(Kt(o.parent))}return r}))}addFieldIndex(e,t){const r=Xi(e),i=(function(a){return{indexId:a.indexId,collectionGroup:a.collectionGroup,fields:a.fields.map((l=>[l.fieldPath.canonicalString(),l.kind]))}})(t);delete i.indexId;const s=r.add(i);if(t.indexState){const o=Jr(e);return s.next((a=>{o.put(Wh(a,this.uid,t.indexState.sequenceNumber,t.indexState.offset))}))}return s.next()}deleteFieldIndex(e,t){const r=Xi(e),i=Jr(e),s=Qr(e);return r.delete(t.indexId).next((()=>i.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0)))).next((()=>s.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0))))}deleteAllFieldIndexes(e){const t=Xi(e),r=Qr(e),i=Jr(e);return t.X().next((()=>r.X())).next((()=>i.X()))}createTargetIndexes(e,t){return D.forEach(this.vn(t),(r=>this.getIndexType(e,r).next((i=>{if(i===0||i===1){const s=new Zh(r).Sn();if(s!=null)return this.addFieldIndex(e,s)}}))))}getDocumentsMatchingTarget(e,t){const r=Qr(e);let i=!0;const s=new Map;return D.forEach(this.vn(t),(o=>this.Fn(e,o).next((a=>{i&&(i=!!a),s.set(o,a)})))).next((()=>{if(i){let o=ye();const a=[];return D.forEach(s,((l,u)=>{q(tf,`Using index ${(function(k){return`id=${k.indexId}|cg=${k.collectionGroup}|f=${k.fields.map((C=>`${C.fieldPath}:${C.kind}`)).join(",")}`})(l)} to execute ${Dr(t)}`);const d=(function(k,C){const L=el(C);if(L===void 0)return null;for(const V of ca(k,L.fieldPath))switch(V.op){case"array-contains-any":return V.value.arrayValue.values||[];case"array-contains":return[V.value]}return null})(u,l),f=(function(k,C){const L=new Map;for(const V of dr(C))for(const b of ca(k,V.fieldPath))switch(b.op){case"==":case"in":L.set(V.fieldPath.canonicalString(),b.value);break;case"not-in":case"!=":return L.set(V.fieldPath.canonicalString(),b.value),Array.from(L.values())}return null})(u,l),_=(function(k,C){const L=[];let V=!0;for(const b of dr(C)){const g=b.kind===0?Nh(k,b.fieldPath,k.startAt):Fh(k,b.fieldPath,k.startAt);L.push(g.value),V&&(V=g.inclusive)}return new Ei(L,V)})(u,l),I=(function(k,C){const L=[];let V=!0;for(const b of dr(C)){const g=b.kind===0?Fh(k,b.fieldPath,k.endAt):Nh(k,b.fieldPath,k.endAt);L.push(g.value),V&&(V=g.inclusive)}return new Ei(L,V)})(u,l),w=this.Mn(l,u,_),S=this.Mn(l,u,I),P=this.xn(l,u,f),F=this.On(l.indexId,d,w,_.inclusive,S,I.inclusive,P);return D.forEach(F,(x=>r.Z(x,t.limit).next((k=>{k.forEach((C=>{const L=H.fromSegments(C.documentKey);o.has(L)||(o=o.add(L),a.push(L))}))}))))})).next((()=>a))}return D.resolve(null)}))}vn(e){let t=this.Cn.get(e);return t||(e.filters.length===0?t=[e]:t=ub(Me.create(e.filters,"and")).map((r=>ll(e.path,e.collectionGroup,e.orderBy,r.getFilters(),e.limit,e.startAt,e.endAt))),this.Cn.set(e,t),t)}On(e,t,r,i,s,o,a){const l=(t!=null?t.length:1)*Math.max(r.length,s.length),u=l/(t!=null?t.length:1),d=[];for(let f=0;f<l;++f){const _=t?this.Nn(t[f/u]):wo,I=this.Bn(e,_,r[f%u],i),w=this.Ln(e,_,s[f%u],o),S=a.map((P=>this.Bn(e,_,P,!0)));d.push(...this.createRange(I,w,S))}return d}Bn(e,t,r,i){const s=new gr(e,H.empty(),t,r);return i?s:s.In()}Ln(e,t,r,i){const s=new gr(e,H.empty(),t,r);return i?s.In():s}Fn(e,t){const r=new Zh(t),i=t.collectionGroup!=null?t.collectionGroup:t.path.lastSegment();return this.getFieldIndexes(e,i).next((s=>{let o=null;for(const a of s)r.gn(a)&&(!o||a.fields.length>o.fields.length)&&(o=a);return o}))}getIndexType(e,t){let r=2;const i=this.vn(t);return D.forEach(i,(s=>this.Fn(e,s).next((o=>{o?r!==0&&o.fields.length<(function(l){let u=new De(ze.comparator),d=!1;for(const f of l.filters)for(const _ of f.getFlattenedFilters())_.field.isKeyField()||(_.op==="array-contains"||_.op==="array-contains-any"?d=!0:u=u.add(_.field));for(const f of l.orderBy)f.field.isKeyField()||(u=u.add(f.field));return u.size+(d?1:0)})(s)&&(r=1):r=0})))).next((()=>(function(o){return o.limit!==null})(t)&&i.length>1&&r===2?1:r))}kn(e,t){const r=new Ji;for(const i of dr(e)){const s=t.data.field(i.fieldPath);if(s==null)return null;const o=r.ln(i.kind);pr.Wt.Dt(s,o)}return r.un()}Nn(e){const t=new Ji;return pr.Wt.Dt(e,t.ln(0)),t.un()}qn(e,t){const r=new Ji;return pr.Wt.Dt(Jl(this.databaseId,t),r.ln((function(s){const o=dr(s);return o.length===0?0:o[o.length-1].kind})(e))),r.un()}xn(e,t,r){if(r===null)return[];let i=[];i.push(new Ji);let s=0;for(const o of dr(e)){const a=r[s++];for(const l of i)if(this.Kn(t,o.fieldPath)&&Ms(a))i=this.Un(i,o,a);else{const u=l.ln(o.kind);pr.Wt.Dt(a,u)}}return this.$n(i)}Mn(e,t,r){return this.xn(e,t,r.position)}$n(e){const t=[];for(let r=0;r<e.length;++r)t[r]=e[r].un();return t}Un(e,t,r){const i=[...e],s=[];for(const o of r.arrayValue.values||[])for(const a of i){const l=new Ji;l.seed(a.un()),pr.Wt.Dt(o,l.ln(t.kind)),s.push(l)}return s}Kn(e,t){return!!e.filters.find((r=>r instanceof ve&&r.field.isEqual(t)&&(r.op==="in"||r.op==="not-in")))}getFieldIndexes(e,t){const r=Xi(e),i=Jr(e);return(t?r.J(nl,IDBKeyRange.bound(t,t)):r.J()).next((s=>{const o=[];return D.forEach(s,(a=>i.get([a.indexId,this.uid]).next((l=>{o.push((function(d,f){const _=f?new Ps(f.sequenceNumber,new St(Fr(f.readTime),new H(Kt(f.documentKey)),f.largestBatchId)):Ps.empty(),I=d.fields.map((([w,S])=>new Oo(ze.fromServerFormat(w),S)));return new ta(d.indexId,d.collectionGroup,I,_)})(a,l))})))).next((()=>o))}))}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next((t=>t.length===0?null:(t.sort(((r,i)=>{const s=r.indexState.sequenceNumber-i.indexState.sequenceNumber;return s!==0?s:le(r.collectionGroup,i.collectionGroup)})),t[0].collectionGroup)))}updateCollectionGroup(e,t,r){const i=Xi(e),s=Jr(e);return this.Wn(e).next((o=>i.J(nl,IDBKeyRange.bound(t,t)).next((a=>D.forEach(a,(l=>s.put(Wh(l.indexId,this.uid,o,r))))))))}updateIndexEntries(e,t){const r=new Map;return D.forEach(t,((i,s)=>{const o=r.get(i.collectionGroup);return(o?D.resolve(o):this.getFieldIndexes(e,i.collectionGroup)).next((a=>(r.set(i.collectionGroup,a),D.forEach(a,(l=>this.Qn(e,i,l).next((u=>{const d=this.Gn(s,l);return u.isEqual(d)?D.resolve():this.zn(e,s,l,u,d)})))))))}))}jn(e,t,r,i){return Qr(e).put(i.Rn(this.uid,this.qn(r,t.key),t.key))}Jn(e,t,r,i){return Qr(e).delete(i.An(this.uid,this.qn(r,t.key),t.key))}Qn(e,t,r){const i=Qr(e);let s=new De(Pn);return i.ee({index:_p,range:IDBKeyRange.only([r.indexId,this.uid,Go(this.qn(r,t))])},((o,a)=>{s=s.add(new gr(r.indexId,t,Xh(a.arrayValue),Xh(a.directionalValue)))})).next((()=>s))}Gn(e,t){let r=new De(Pn);const i=this.kn(t,e);if(i==null)return r;const s=el(t);if(s!=null){const o=e.data.field(s.fieldPath);if(Ms(o))for(const a of o.arrayValue.values||[])r=r.add(new gr(t.indexId,e.key,this.Nn(a),i))}else r=r.add(new gr(t.indexId,e.key,wo,i));return r}zn(e,t,r,i,s){q(tf,"Updating index entries for document '%s'",t.key);const o=[];return(function(l,u,d,f,_){const I=l.getIterator(),w=u.getIterator();let S=Kr(I),P=Kr(w);for(;S||P;){let F=!1,x=!1;if(S&&P){const k=d(S,P);k<0?x=!0:k>0&&(F=!0)}else S!=null?x=!0:F=!0;F?(f(P),P=Kr(w)):x?(_(S),S=Kr(I)):(S=Kr(I),P=Kr(w))}})(i,s,Pn,(a=>{o.push(this.jn(e,t,r,a))}),(a=>{o.push(this.Jn(e,t,r,a))})),D.waitFor(o)}Wn(e){let t=1;return Jr(e).ee({index:yp,reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},((r,i,s)=>{s.done(),t=i.sequenceNumber+1})).next((()=>t))}createRange(e,t,r){r=r.sort(((o,a)=>Pn(o,a))).filter(((o,a,l)=>!a||Pn(o,l[a-1])!==0));const i=[];i.push(e);for(const o of r){const a=Pn(o,e),l=Pn(o,t);if(a===0)i[0]=e.In();else if(a>0&&l<0)i.push(o),i.push(o.In());else if(l>0)break}i.push(t);const s=[];for(let o=0;o<i.length;o+=2){if(this.Hn(i[o],i[o+1]))return[];const a=i[o].An(this.uid,wo,H.empty()),l=i[o+1].An(this.uid,wo,H.empty());s.push(IDBKeyRange.bound(a,l))}return s}Hn(e,t){return Pn(e,t)>0}getMinOffsetFromCollectionGroup(e,t){return this.getFieldIndexes(e,t).next(rf)}getMinOffset(e,t){return D.mapArray(this.vn(t),(r=>this.Fn(e,r).next((i=>i||ee(44426))))).next(rf)}}function nf(n){return et(n,Ds)}function Qr(n){return et(n,ys)}function Xi(n){return et(n,jl)}function Jr(n){return et(n,gs)}function rf(n){ne(n.length!==0,28825);let e=n[0].indexState.offset,t=e.largestBatchId;for(let r=1;r<n.length;r++){const i=n[r].indexState.offset;ql(i,e)<0&&(e=i),t<i.largestBatchId&&(t=i.largestBatchId)}return new St(e.readTime,e.documentKey,t)}/**
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
 */const sf={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Eg=41943040;class ct{static withCacheSize(e){return new ct(e,ct.DEFAULT_COLLECTION_PERCENTILE,ct.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}/**
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
 */function vg(n,e,t){const r=n.store(Nt),i=n.store(pi),s=[],o=IDBKeyRange.only(t.batchId);let a=0;const l=r.ee({range:o},((d,f,_)=>(a++,_.delete())));s.push(l.next((()=>{ne(a===1,47070,{batchId:t.batchId})})));const u=[];for(const d of t.mutations){const f=mp(e,d.key.path,t.batchId);s.push(i.delete(f)),u.push(d.key)}return D.waitFor(s).next((()=>u))}function fa(n){if(!n)return 0;let e;if(n.document)e=n.document;else if(n.unknownDocument)e=n.unknownDocument;else{if(!n.noDocument)throw ee(14731);e=n.noDocument}return JSON.stringify(e).length}/**
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
 */ct.DEFAULT_COLLECTION_PERCENTILE=10,ct.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,ct.DEFAULT=new ct(Eg,ct.DEFAULT_COLLECTION_PERCENTILE,ct.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),ct.DISABLED=new ct(-1,0,0);class Ha{constructor(e,t,r,i){this.userId=e,this.serializer=t,this.indexManager=r,this.referenceDelegate=i,this.Zn={}}static wt(e,t,r,i){ne(e.uid!=="",64387);const s=e.isAuthenticated()?e.uid:"";return new Ha(s,t,r,i)}checkEmpty(e){let t=!0;const r=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return xn(e).ee({index:Tr,range:r},((i,s,o)=>{t=!1,o.done()})).next((()=>t))}addMutationBatch(e,t,r,i){const s=si(e),o=xn(e);return o.add({}).next((a=>{ne(typeof a=="number",49019);const l=new eu(a,t,r,i),u=(function(I,w,S){const P=S.baseMutations.map((x=>ua(I.yt,x))),F=S.mutations.map((x=>ua(I.yt,x)));return{userId:w,batchId:S.batchId,localWriteTimeMs:S.localWriteTime.toMillis(),baseMutations:P,mutations:F}})(this.serializer,this.userId,l),d=[];let f=new De(((_,I)=>le(_.canonicalString(),I.canonicalString())));for(const _ of i){const I=mp(this.userId,_.key.path,a);f=f.add(_.key.path.popLast()),d.push(o.put(u)),d.push(s.put(I,VE))}return f.forEach((_=>{d.push(this.indexManager.addToCollectionParentIndex(e,_))})),e.addOnCommittedListener((()=>{this.Zn[a]=l.keys()})),D.waitFor(d).next((()=>l))}))}lookupMutationBatch(e,t){return xn(e).get(t).next((r=>r?(ne(r.userId===this.userId,48,"Unexpected user for mutation batch",{userId:r.userId,batchId:t}),mr(this.serializer,r)):null))}Xn(e,t){return this.Zn[t]?D.resolve(this.Zn[t]):this.lookupMutationBatch(e,t).next((r=>{if(r){const i=r.keys();return this.Zn[t]=i,i}return null}))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,i=IDBKeyRange.lowerBound([this.userId,r]);let s=null;return xn(e).ee({index:Tr,range:i},((o,a,l)=>{a.userId===this.userId&&(ne(a.batchId>=r,47524,{Yn:r}),s=mr(this.serializer,a)),l.done()})).next((()=>s))}getHighestUnacknowledgedBatchId(e){const t=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let r=Er;return xn(e).ee({index:Tr,range:t,reverse:!0},((i,s,o)=>{r=s.batchId,o.done()})).next((()=>r))}getAllMutationBatches(e){const t=IDBKeyRange.bound([this.userId,Er],[this.userId,Number.POSITIVE_INFINITY]);return xn(e).J(Tr,t).next((r=>r.map((i=>mr(this.serializer,i)))))}getAllMutationBatchesAffectingDocumentKey(e,t){const r=Lo(this.userId,t.path),i=IDBKeyRange.lowerBound(r),s=[];return si(e).ee({range:i},((o,a,l)=>{const[u,d,f]=o,_=Kt(d);if(u===this.userId&&t.path.isEqual(_))return xn(e).get(f).next((I=>{if(!I)throw ee(61480,{er:o,batchId:f});ne(I.userId===this.userId,10503,"Unexpected user for mutation batch",{userId:I.userId,batchId:f}),s.push(mr(this.serializer,I))}));l.done()})).next((()=>s))}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new De(le);const i=[];return t.forEach((s=>{const o=Lo(this.userId,s.path),a=IDBKeyRange.lowerBound(o),l=si(e).ee({range:a},((u,d,f)=>{const[_,I,w]=u,S=Kt(I);_===this.userId&&s.path.isEqual(S)?r=r.add(w):f.done()}));i.push(l)})),D.waitFor(i).next((()=>this.tr(e,r)))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,i=r.length+1,s=Lo(this.userId,r),o=IDBKeyRange.lowerBound(s);let a=new De(le);return si(e).ee({range:o},((l,u,d)=>{const[f,_,I]=l,w=Kt(_);f===this.userId&&r.isPrefixOf(w)?w.length===i&&(a=a.add(I)):d.done()})).next((()=>this.tr(e,a)))}tr(e,t){const r=[],i=[];return t.forEach((s=>{i.push(xn(e).get(s).next((o=>{if(o===null)throw ee(35274,{batchId:s});ne(o.userId===this.userId,9748,"Unexpected user for mutation batch",{userId:o.userId,batchId:s}),r.push(mr(this.serializer,o))})))})),D.waitFor(i).next((()=>r))}removeMutationBatch(e,t){return vg(e.le,this.userId,t).next((r=>(e.addOnCommittedListener((()=>{this.nr(t.batchId)})),D.forEach(r,(i=>this.referenceDelegate.markPotentiallyOrphaned(e,i))))))}nr(e){delete this.Zn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next((t=>{if(!t)return D.resolve();const r=IDBKeyRange.lowerBound((function(o){return[o]})(this.userId)),i=[];return si(e).ee({range:r},((s,o,a)=>{if(s[0]===this.userId){const l=Kt(s[1]);i.push(l)}else a.done()})).next((()=>{ne(i.length===0,56720,{rr:i.map((s=>s.canonicalString()))})}))}))}containsKey(e,t){return bg(e,this.userId,t)}ir(e){return Ig(e).get(this.userId).next((t=>t||{userId:this.userId,lastAcknowledgedBatchId:Er,lastStreamToken:""}))}}function bg(n,e,t){const r=Lo(e,t.path),i=r[1],s=IDBKeyRange.lowerBound(r);let o=!1;return si(n).ee({range:s,Y:!0},((a,l,u)=>{const[d,f,_]=a;d===e&&f===i&&(o=!0),u.done()})).next((()=>o))}function xn(n){return et(n,Nt)}function si(n){return et(n,pi)}function Ig(n){return et(n,ks)}/**
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
 */class Mr{constructor(e){this.sr=e}next(){return this.sr+=2,this.sr}static _r(){return new Mr(0)}static ar(){return new Mr(-1)}}/**
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
 */class fb{constructor(e,t){this.referenceDelegate=e,this.serializer=t}allocateTargetId(e){return this.ur(e).next((t=>{const r=new Mr(t.highestTargetId);return t.highestTargetId=r.next(),this.cr(e,t).next((()=>t.highestTargetId))}))}getLastRemoteSnapshotVersion(e){return this.ur(e).next((t=>se.fromTimestamp(new Ce(t.lastRemoteSnapshotVersion.seconds,t.lastRemoteSnapshotVersion.nanoseconds))))}getHighestSequenceNumber(e){return this.ur(e).next((t=>t.highestListenSequenceNumber))}setTargetsMetadata(e,t,r){return this.ur(e).next((i=>(i.highestListenSequenceNumber=t,r&&(i.lastRemoteSnapshotVersion=r.toTimestamp()),t>i.highestListenSequenceNumber&&(i.highestListenSequenceNumber=t),this.cr(e,i))))}addTargetData(e,t){return this.lr(e,t).next((()=>this.ur(e).next((r=>(r.targetCount+=1,this.hr(t,r),this.cr(e,r))))))}updateTargetData(e,t){return this.lr(e,t)}removeTargetData(e,t){return this.removeMatchingKeysForTargetId(e,t.targetId).next((()=>Xr(e).delete(t.targetId))).next((()=>this.ur(e))).next((r=>(ne(r.targetCount>0,8065),r.targetCount-=1,this.cr(e,r))))}removeTargets(e,t,r){let i=0;const s=[];return Xr(e).ee(((o,a)=>{const l=ds(a);l.sequenceNumber<=t&&r.get(l.targetId)===null&&(i++,s.push(this.removeTargetData(e,l)))})).next((()=>D.waitFor(s))).next((()=>i))}forEachTarget(e,t){return Xr(e).ee(((r,i)=>{const s=ds(i);t(s)}))}ur(e){return of(e).get(ia).next((t=>(ne(t!==null,2888),t)))}cr(e,t){return of(e).put(ia,t)}lr(e,t){return Xr(e).put(yg(this.serializer,t))}hr(e,t){let r=!1;return e.targetId>t.highestTargetId&&(t.highestTargetId=e.targetId,r=!0),e.sequenceNumber>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=e.sequenceNumber,r=!0),r}getTargetCount(e){return this.ur(e).next((t=>t.targetCount))}getTargetData(e,t){const r=Dr(t),i=IDBKeyRange.bound([r,Number.NEGATIVE_INFINITY],[r,Number.POSITIVE_INFINITY]);let s=null;return Xr(e).ee({range:i,index:gp},((o,a,l)=>{const u=ds(a);Ks(t,u.target)&&(s=u,l.done())})).next((()=>s))}addMatchingKeys(e,t,r){const i=[],s=Fn(e);return t.forEach((o=>{const a=ut(o.path);i.push(s.put({targetId:r,path:a})),i.push(this.referenceDelegate.addReference(e,r,o))})),D.waitFor(i)}removeMatchingKeys(e,t,r){const i=Fn(e);return D.forEach(t,(s=>{const o=ut(s.path);return D.waitFor([i.delete([r,o]),this.referenceDelegate.removeReference(e,r,s)])}))}removeMatchingKeysForTargetId(e,t){const r=Fn(e),i=IDBKeyRange.bound([t],[t+1],!1,!0);return r.delete(i)}getMatchingKeysForTargetId(e,t){const r=IDBKeyRange.bound([t],[t+1],!1,!0),i=Fn(e);let s=ye();return i.ee({range:r,Y:!0},((o,a,l)=>{const u=Kt(o[1]),d=new H(u);s=s.add(d)})).next((()=>s))}containsKey(e,t){const r=ut(t.path),i=IDBKeyRange.bound([r],[ap(r)],!1,!0);let s=0;return Fn(e).ee({index:Gl,Y:!0,range:i},(([o,a],l,u)=>{o!==0&&(s++,u.done())})).next((()=>s>0))}At(e,t){return Xr(e).get(t).next((r=>r?ds(r):null))}}function Xr(n){return et(n,gi)}function of(n){return et(n,vr)}function Fn(n){return et(n,yi)}/**
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
 */const af="LruGarbageCollector",mb=1048576;function cf([n,e],[t,r]){const i=le(n,t);return i===0?le(e,r):i}class pb{constructor(e){this.Pr=e,this.buffer=new De(cf),this.Tr=0}Er(){return++this.Tr}Ir(e){const t=[e,this.Er()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();cf(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class Sg{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(e){q(af,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){er(t)?q(af,"Ignoring IndexedDB error during garbage collection: ",t):await Ur(t)}await this.Ar(3e5)}))}}class gb{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.dr(e).next((r=>Math.floor(t/100*r)))}nthSequenceNumber(e,t){if(t===0)return D.resolve(Pt.ce);const r=new pb(t);return this.Vr.forEachTarget(e,(i=>r.Ir(i.sequenceNumber))).next((()=>this.Vr.mr(e,(i=>r.Ir(i))))).next((()=>r.maxValue))}removeTargets(e,t,r){return this.Vr.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(q("LruGarbageCollector","Garbage collection skipped; disabled"),D.resolve(sf)):this.getCacheSize(e).next((r=>r<this.params.cacheSizeCollectionThreshold?(q("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),sf):this.gr(e,t)))}getCacheSize(e){return this.Vr.getCacheSize(e)}gr(e,t){let r,i,s,o,a,l,u;const d=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((f=>(f>this.params.maximumSequenceNumbersToCollect?(q("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${f}`),i=this.params.maximumSequenceNumbersToCollect):i=f,o=Date.now(),this.nthSequenceNumber(e,i)))).next((f=>(r=f,a=Date.now(),this.removeTargets(e,r,t)))).next((f=>(s=f,l=Date.now(),this.removeOrphanedDocuments(e,r)))).next((f=>(u=Date.now(),ti()<=Ee.DEBUG&&q("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-d}ms
	Determined least recently used ${i} in `+(a-o)+`ms
	Removed ${s} targets in `+(l-a)+`ms
	Removed ${f} documents in `+(u-l)+`ms
Total Duration: ${u-d}ms`),D.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:f}))))}}function Ag(n,e){return new gb(n,e)}/**
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
 */class yb{constructor(e,t){this.db=e,this.garbageCollector=Ag(this,t)}dr(e){const t=this.pr(e);return this.db.getTargetCache().getTargetCount(e).next((r=>t.next((i=>r+i))))}pr(e){let t=0;return this.mr(e,(r=>{t++})).next((()=>t))}forEachTarget(e,t){return this.db.getTargetCache().forEachTarget(e,t)}mr(e,t){return this.yr(e,((r,i)=>t(i)))}addReference(e,t,r){return To(e,r)}removeReference(e,t,r){return To(e,r)}removeTargets(e,t,r){return this.db.getTargetCache().removeTargets(e,t,r)}markPotentiallyOrphaned(e,t){return To(e,t)}wr(e,t){return(function(i,s){let o=!1;return Ig(i).te((a=>bg(i,a,s).next((l=>(l&&(o=!0),D.resolve(!l)))))).next((()=>o))})(e,t)}removeOrphanedDocuments(e,t){const r=this.db.getRemoteDocumentCache().newChangeBuffer(),i=[];let s=0;return this.yr(e,((o,a)=>{if(a<=t){const l=this.wr(e,o).next((u=>{if(!u)return s++,r.getEntry(e,o).next((()=>(r.removeEntry(o,se.min()),Fn(e).delete((function(f){return[0,ut(f.path)]})(o)))))}));i.push(l)}})).next((()=>D.waitFor(i))).next((()=>r.apply(e))).next((()=>s))}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,r)}updateLimboDocument(e,t){return To(e,t)}yr(e,t){const r=Fn(e);let i,s=Pt.ce;return r.ee({index:Gl},(([o,a],{path:l,sequenceNumber:u})=>{o===0?(s!==Pt.ce&&t(new H(Kt(i)),s),s=u,i=l):s=Pt.ce})).next((()=>{s!==Pt.ce&&t(new H(Kt(i)),s)}))}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function To(n,e){return Fn(n).put((function(r,i){return{targetId:0,path:ut(r.path),sequenceNumber:i}})(e,n.currentSequenceNumber))}/**
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
 */class Rg{constructor(){this.changes=new yn((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,He.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?D.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class _b{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,t,r){return cr(e).put(r)}removeEntry(e,t,r){return cr(e).delete((function(s,o){const a=s.path.toArray();return[a.slice(0,a.length-2),a[a.length-2],da(o),a[a.length-1]]})(t,r))}updateMetadata(e,t){return this.getMetadata(e).next((r=>(r.byteSize+=t,this.Sr(e,r))))}getEntry(e,t){let r=He.newInvalidDocument(t);return cr(e).ee({index:Vo,range:IDBKeyRange.only(Zi(t))},((i,s)=>{r=this.br(t,s)})).next((()=>r))}Dr(e,t){let r={size:0,document:He.newInvalidDocument(t)};return cr(e).ee({index:Vo,range:IDBKeyRange.only(Zi(t))},((i,s)=>{r={document:this.br(t,s),size:fa(s)}})).next((()=>r))}getEntries(e,t){let r=vt();return this.Cr(e,t,((i,s)=>{const o=this.br(i,s);r=r.insert(i,o)})).next((()=>r))}vr(e,t){let r=vt(),i=new qe(H.comparator);return this.Cr(e,t,((s,o)=>{const a=this.br(s,o);r=r.insert(s,a),i=i.insert(s,fa(o))})).next((()=>({documents:r,Fr:i})))}Cr(e,t,r){if(t.isEmpty())return D.resolve();let i=new De(df);t.forEach((l=>i=i.add(l)));const s=IDBKeyRange.bound(Zi(i.first()),Zi(i.last())),o=i.getIterator();let a=o.getNext();return cr(e).ee({index:Vo,range:s},((l,u,d)=>{const f=H.fromSegments([...u.prefixPath,u.collectionGroup,u.documentId]);for(;a&&df(a,f)<0;)r(a,null),a=o.getNext();a&&a.isEqual(f)&&(r(a,u),a=o.hasNext()?o.getNext():null),a?d.j(Zi(a)):d.done()})).next((()=>{for(;a;)r(a,null),a=o.hasNext()?o.getNext():null}))}getDocumentsMatchingQuery(e,t,r,i,s){const o=t.path,a=[o.popLast().toArray(),o.lastSegment(),da(r.readTime),r.documentKey.path.isEmpty()?"":r.documentKey.path.lastSegment()],l=[o.popLast().toArray(),o.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return cr(e).J(IDBKeyRange.bound(a,l,!0)).next((u=>{s==null||s.incrementDocumentReadCount(u.length);let d=vt();for(const f of u){const _=this.br(H.fromSegments(f.prefixPath.concat(f.collectionGroup,f.documentId)),f);_.isFoundDocument()&&(Qs(t,_)||i.has(_.key))&&(d=d.insert(_.key,_))}return d}))}getAllFromCollectionGroup(e,t,r,i){let s=vt();const o=uf(t,r),a=uf(t,St.max());return cr(e).ee({index:pp,range:IDBKeyRange.bound(o,a,!0)},((l,u,d)=>{const f=this.br(H.fromSegments(u.prefixPath.concat(u.collectionGroup,u.documentId)),u);s=s.insert(f.key,f),s.size===i&&d.done()})).next((()=>s))}newChangeBuffer(e){return new wb(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next((t=>t.byteSize))}getMetadata(e){return lf(e).get(tl).next((t=>(ne(!!t,20021),t)))}Sr(e,t){return lf(e).put(tl,t)}br(e,t){if(t){const r=rb(this.serializer,t);if(!(r.isNoDocument()&&r.version.isEqual(se.min())))return r}return He.newInvalidDocument(e)}}function Pg(n){return new _b(n)}class wb extends Rg{constructor(e,t){super(),this.Mr=e,this.trackRemovals=t,this.Or=new yn((r=>r.toString()),((r,i)=>r.isEqual(i)))}applyChanges(e){const t=[];let r=0,i=new De(((s,o)=>le(s.canonicalString(),o.canonicalString())));return this.changes.forEach(((s,o)=>{const a=this.Or.get(s);if(t.push(this.Mr.removeEntry(e,s,a.readTime)),o.isValidDocument()){const l=jh(this.Mr.serializer,o);i=i.add(s.path.popLast());const u=fa(l);r+=u-a.size,t.push(this.Mr.addEntry(e,s,l))}else if(r-=a.size,this.trackRemovals){const l=jh(this.Mr.serializer,o.convertToNoDocument(se.min()));t.push(this.Mr.addEntry(e,s,l))}})),i.forEach((s=>{t.push(this.Mr.indexManager.addToCollectionParentIndex(e,s))})),t.push(this.Mr.updateMetadata(e,r)),D.waitFor(t)}getFromCache(e,t){return this.Mr.Dr(e,t).next((r=>(this.Or.set(t,{size:r.size,readTime:r.document.readTime}),r.document)))}getAllFromCache(e,t){return this.Mr.vr(e,t).next((({documents:r,Fr:i})=>(i.forEach(((s,o)=>{this.Or.set(s,{size:o,readTime:r.get(s).readTime})})),r)))}}function lf(n){return et(n,Cs)}function cr(n){return et(n,ra)}function Zi(n){const e=n.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function uf(n,e){const t=e.documentKey.path.toArray();return[n,da(e.readTime),t.slice(0,t.length-2),t.length>0?t[t.length-1]:""]}function df(n,e){const t=n.path.toArray(),r=e.path.toArray();let i=0;for(let s=0;s<t.length-2&&s<r.length-2;++s)if(i=le(t[s],r[s]),i)return i;return i=le(t.length,r.length),i||(i=le(t[t.length-2],r[r.length-2]),i||le(t[t.length-1],r[r.length-1]))}/**
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
 */class Tb{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class xg{constructor(e,t,r,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next((i=>(r=i,this.remoteDocumentCache.getEntry(e,t)))).next((i=>(r!==null&&Es(r.mutation,i,xt.empty(),Ce.now()),i)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((r=>this.getLocalViewOfDocuments(e,r,ye()).next((()=>r))))}getLocalViewOfDocuments(e,t,r=ye()){const i=Yt();return this.populateOverlays(e,i,t).next((()=>this.computeViews(e,t,i,r).next((s=>{let o=ls();return s.forEach(((a,l)=>{o=o.insert(a,l.overlayedDocument)})),o}))))}getOverlayedDocuments(e,t){const r=Yt();return this.populateOverlays(e,r,t).next((()=>this.computeViews(e,t,r,ye())))}populateOverlays(e,t,r){const i=[];return r.forEach((s=>{t.has(s)||i.push(s)})),this.documentOverlayCache.getOverlays(e,i).next((s=>{s.forEach(((o,a)=>{t.set(o,a)}))}))}computeViews(e,t,r,i){let s=vt();const o=Ts(),a=(function(){return Ts()})();return t.forEach(((l,u)=>{const d=r.get(u.key);i.has(u.key)&&(d===void 0||d.mutation instanceof tr)?s=s.insert(u.key,u):d!==void 0?(o.set(u.key,d.mutation.getFieldMask()),Es(d.mutation,u,d.mutation.getFieldMask(),Ce.now())):o.set(u.key,xt.empty())})),this.recalculateAndSaveOverlays(e,s).next((l=>(l.forEach(((u,d)=>o.set(u,d))),t.forEach(((u,d)=>a.set(u,new Tb(d,o.get(u)??null)))),a)))}recalculateAndSaveOverlays(e,t){const r=Ts();let i=new qe(((o,a)=>o-a)),s=ye();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((o=>{for(const a of o)a.keys().forEach((l=>{const u=t.get(l);if(u===null)return;let d=r.get(l)||xt.empty();d=a.applyToLocalView(u,d),r.set(l,d);const f=(i.get(a.batchId)||ye()).add(l);i=i.insert(a.batchId,f)}))})).next((()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,d=l.value,f=jp();d.forEach((_=>{if(!s.has(_)){const I=Xp(t.get(_),r.get(_));I!==null&&f.set(_,I),s=s.add(_)}})),o.push(this.documentOverlayCache.saveOverlays(e,u,f))}return D.waitFor(o)})).next((()=>r))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((r=>this.recalculateAndSaveOverlays(e,r)))}getDocumentsMatchingQuery(e,t,r,i){return vv(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):bv(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,i):this.getDocumentsMatchingCollectionQuery(e,t,r,i)}getNextDocuments(e,t,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,i).next((s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,i-s.size):D.resolve(Yt());let a=Rs,l=s;return o.next((u=>D.forEach(u,((d,f)=>(a<f.largestBatchId&&(a=f.largestBatchId),s.get(d)?D.resolve():this.remoteDocumentCache.getEntry(e,d).next((_=>{l=l.insert(d,_)}))))).next((()=>this.populateOverlays(e,u,s))).next((()=>this.computeViews(e,l,u,ye()))).next((d=>({batchId:a,changes:Gp(d)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new H(t)).next((r=>{let i=ls();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i}))}getDocumentsMatchingCollectionGroupQuery(e,t,r,i){const s=t.collectionGroup;let o=ls();return this.indexManager.getCollectionParents(e,s).next((a=>D.forEach(a,(l=>{const u=(function(f,_){return new $a(_,null,f.explicitOrderBy.slice(),f.filters.slice(),f.limit,f.limitType,f.startAt,f.endAt)})(t,l.child(s));return this.getDocumentsMatchingCollectionQuery(e,u,r,i).next((d=>{d.forEach(((f,_)=>{o=o.insert(f,_)}))}))})).next((()=>o))))}getDocumentsMatchingCollectionQuery(e,t,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next((o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,s,i)))).next((o=>{s.forEach(((l,u)=>{const d=u.getKey();o.get(d)===null&&(o=o.insert(d,He.newInvalidDocument(d)))}));let a=ls();return o.forEach(((l,u)=>{const d=s.get(l);d!==void 0&&Es(d.mutation,u,xt.empty(),Ce.now()),Qs(t,u)&&(a=a.insert(l,u))})),a}))}}/**
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
 */class Eb{constructor(e){this.serializer=e,this.Nr=new Map,this.Br=new Map}getBundleMetadata(e,t){return D.resolve(this.Nr.get(t))}saveBundleMetadata(e,t){return this.Nr.set(t.id,(function(i){return{id:i.id,version:i.version,createTime:mt(i.createTime)}})(t)),D.resolve()}getNamedQuery(e,t){return D.resolve(this.Br.get(t))}saveNamedQuery(e,t){return this.Br.set(t.name,(function(i){return{name:i.name,query:_g(i.bundledQuery),readTime:mt(i.readTime)}})(t)),D.resolve()}}/**
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
 */class vb{constructor(){this.overlays=new qe(H.comparator),this.Lr=new Map}getOverlay(e,t){return D.resolve(this.overlays.get(t))}getOverlays(e,t){const r=Yt();return D.forEach(t,(i=>this.getOverlay(e,i).next((s=>{s!==null&&r.set(i,s)})))).next((()=>r))}saveOverlays(e,t,r){return r.forEach(((i,s)=>{this.St(e,t,s)})),D.resolve()}removeOverlaysForBatchId(e,t,r){const i=this.Lr.get(r);return i!==void 0&&(i.forEach((s=>this.overlays=this.overlays.remove(s))),this.Lr.delete(r)),D.resolve()}getOverlaysForCollection(e,t,r){const i=Yt(),s=t.length+1,o=new H(t.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!t.isPrefixOf(u.path))break;u.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return D.resolve(i)}getOverlaysForCollectionGroup(e,t,r,i){let s=new qe(((u,d)=>u-d));const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===t&&u.largestBatchId>r){let d=s.get(u.largestBatchId);d===null&&(d=Yt(),s=s.insert(u.largestBatchId,d)),d.set(u.getKey(),u)}}const a=Yt(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach(((u,d)=>a.set(u,d))),!(a.size()>=i)););return D.resolve(a)}St(e,t,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Lr.get(i.largestBatchId).delete(r.key);this.Lr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new nu(t,r));let s=this.Lr.get(t);s===void 0&&(s=ye(),this.Lr.set(t,s)),this.Lr.set(t,s.add(r.key))}}/**
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
 */class bb{constructor(){this.sessionToken=Je.EMPTY_BYTE_STRING}getSessionToken(e){return D.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,D.resolve()}}/**
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
 */class au{constructor(){this.kr=new De(it.qr),this.Kr=new De(it.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(e,t){const r=new it(e,t);this.kr=this.kr.add(r),this.Kr=this.Kr.add(r)}$r(e,t){e.forEach((r=>this.addReference(r,t)))}removeReference(e,t){this.Wr(new it(e,t))}Qr(e,t){e.forEach((r=>this.removeReference(r,t)))}Gr(e){const t=new H(new xe([])),r=new it(t,e),i=new it(t,e+1),s=[];return this.Kr.forEachInRange([r,i],(o=>{this.Wr(o),s.push(o.key)})),s}zr(){this.kr.forEach((e=>this.Wr(e)))}Wr(e){this.kr=this.kr.delete(e),this.Kr=this.Kr.delete(e)}jr(e){const t=new H(new xe([])),r=new it(t,e),i=new it(t,e+1);let s=ye();return this.Kr.forEachInRange([r,i],(o=>{s=s.add(o.key)})),s}containsKey(e){const t=new it(e,0),r=this.kr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class it{constructor(e,t){this.key=e,this.Jr=t}static qr(e,t){return H.comparator(e.key,t.key)||le(e.Jr,t.Jr)}static Ur(e,t){return le(e.Jr,t.Jr)||H.comparator(e.key,t.key)}}/**
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
 */class Ib{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Yn=1,this.Hr=new De(it.qr)}checkEmpty(e){return D.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,i){const s=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new eu(s,t,r,i);this.mutationQueue.push(o);for(const a of i)this.Hr=this.Hr.add(new it(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return D.resolve(o)}lookupMutationBatch(e,t){return D.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,i=this.Xr(r),s=i<0?0:i;return D.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return D.resolve(this.mutationQueue.length===0?Er:this.Yn-1)}getAllMutationBatches(e){return D.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new it(t,0),i=new it(t,Number.POSITIVE_INFINITY),s=[];return this.Hr.forEachInRange([r,i],(o=>{const a=this.Zr(o.Jr);s.push(a)})),D.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new De(le);return t.forEach((i=>{const s=new it(i,0),o=new it(i,Number.POSITIVE_INFINITY);this.Hr.forEachInRange([s,o],(a=>{r=r.add(a.Jr)}))})),D.resolve(this.Yr(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,i=r.length+1;let s=r;H.isDocumentKey(s)||(s=s.child(""));const o=new it(new H(s),0);let a=new De(le);return this.Hr.forEachWhile((l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(l.Jr)),!0)}),o),D.resolve(this.Yr(a))}Yr(e){const t=[];return e.forEach((r=>{const i=this.Zr(r);i!==null&&t.push(i)})),t}removeMutationBatch(e,t){ne(this.ei(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Hr;return D.forEach(t.mutations,(i=>{const s=new it(i.key,t.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)})).next((()=>{this.Hr=r}))}nr(e){}containsKey(e,t){const r=new it(t,0),i=this.Hr.firstAfterOrEqual(r);return D.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,D.resolve()}ei(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class Sb{constructor(e){this.ti=e,this.docs=(function(){return new qe(H.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,i=this.docs.get(r),s=i?i.size:0,o=this.ti(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return D.resolve(r?r.document.mutableCopy():He.newInvalidDocument(t))}getEntries(e,t){let r=vt();return t.forEach((i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():He.newInvalidDocument(i))})),D.resolve(r)}getDocumentsMatchingQuery(e,t,r,i){let s=vt();const o=t.path,a=new H(o.child("__id-9223372036854775808__")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:u,value:{document:d}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||ql(up(d),r)<=0||(i.has(d.key)||Qs(t,d))&&(s=s.insert(d.key,d.mutableCopy()))}return D.resolve(s)}getAllFromCollectionGroup(e,t,r,i){ee(9500)}ni(e,t){return D.forEach(this.docs,(r=>t(r)))}newChangeBuffer(e){return new Ab(this)}getSize(e){return D.resolve(this.size)}}class Ab extends Rg{constructor(e){super(),this.Mr=e}applyChanges(e){const t=[];return this.changes.forEach(((r,i)=>{i.isValidDocument()?t.push(this.Mr.addEntry(e,i)):this.Mr.removeEntry(r)})),D.waitFor(t)}getFromCache(e,t){return this.Mr.getEntry(e,t)}getAllFromCache(e,t){return this.Mr.getEntries(e,t)}}/**
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
 */class Rb{constructor(e){this.persistence=e,this.ri=new yn((t=>Dr(t)),Ks),this.lastRemoteSnapshotVersion=se.min(),this.highestTargetId=0,this.ii=0,this.si=new au,this.targetCount=0,this.oi=Mr._r()}forEachTarget(e,t){return this.ri.forEach(((r,i)=>t(i))),D.resolve()}getLastRemoteSnapshotVersion(e){return D.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return D.resolve(this.ii)}allocateTargetId(e){return this.highestTargetId=this.oi.next(),D.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.ii&&(this.ii=t),D.resolve()}lr(e){this.ri.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.oi=new Mr(t),this.highestTargetId=t),e.sequenceNumber>this.ii&&(this.ii=e.sequenceNumber)}addTargetData(e,t){return this.lr(t),this.targetCount+=1,D.resolve()}updateTargetData(e,t){return this.lr(t),D.resolve()}removeTargetData(e,t){return this.ri.delete(t.target),this.si.Gr(t.targetId),this.targetCount-=1,D.resolve()}removeTargets(e,t,r){let i=0;const s=[];return this.ri.forEach(((o,a)=>{a.sequenceNumber<=t&&r.get(a.targetId)===null&&(this.ri.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)})),D.waitFor(s).next((()=>i))}getTargetCount(e){return D.resolve(this.targetCount)}getTargetData(e,t){const r=this.ri.get(t)||null;return D.resolve(r)}addMatchingKeys(e,t,r){return this.si.$r(t,r),D.resolve()}removeMatchingKeys(e,t,r){this.si.Qr(t,r);const i=this.persistence.referenceDelegate,s=[];return i&&t.forEach((o=>{s.push(i.markPotentiallyOrphaned(e,o))})),D.waitFor(s)}removeMatchingKeysForTargetId(e,t){return this.si.Gr(t),D.resolve()}getMatchingKeysForTargetId(e,t){const r=this.si.jr(t);return D.resolve(r)}containsKey(e,t){return D.resolve(this.si.containsKey(t))}}/**
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
 */class cu{constructor(e,t){this._i={},this.overlays={},this.ai=new Pt(0),this.ui=!1,this.ui=!0,this.ci=new bb,this.referenceDelegate=e(this),this.li=new Rb(this),this.indexManager=new db,this.remoteDocumentCache=(function(i){return new Sb(i)})((r=>this.referenceDelegate.hi(r))),this.serializer=new gg(t),this.Pi=new Eb(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new vb,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this._i[e.toKey()];return r||(r=new Ib(t,this.referenceDelegate),this._i[e.toKey()]=r),r}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(e,t,r){q("MemoryPersistence","Starting transaction:",e);const i=new Pb(this.ai.next());return this.referenceDelegate.Ti(),r(i).next((s=>this.referenceDelegate.Ei(i).next((()=>s)))).toPromise().then((s=>(i.raiseOnCommittedEvent(),s)))}Ii(e,t){return D.or(Object.values(this._i).map((r=>()=>r.containsKey(e,t))))}}class Pb extends hp{constructor(e){super(),this.currentSequenceNumber=e}}class Wa{constructor(e){this.persistence=e,this.Ri=new au,this.Ai=null}static Vi(e){return new Wa(e)}get di(){if(this.Ai)return this.Ai;throw ee(60996)}addReference(e,t,r){return this.Ri.addReference(r,t),this.di.delete(r.toString()),D.resolve()}removeReference(e,t,r){return this.Ri.removeReference(r,t),this.di.add(r.toString()),D.resolve()}markPotentiallyOrphaned(e,t){return this.di.add(t.toString()),D.resolve()}removeTarget(e,t){this.Ri.Gr(t.targetId).forEach((i=>this.di.add(i.toString())));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next((i=>{i.forEach((s=>this.di.add(s.toString())))})).next((()=>r.removeTargetData(e,t)))}Ti(){this.Ai=new Set}Ei(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return D.forEach(this.di,(r=>{const i=H.fromPath(r);return this.mi(e,i).next((s=>{s||t.removeEntry(i,se.min())}))})).next((()=>(this.Ai=null,t.apply(e))))}updateLimboDocument(e,t){return this.mi(e,t).next((r=>{r?this.di.delete(t.toString()):this.di.add(t.toString())}))}hi(e){return 0}mi(e,t){return D.or([()=>D.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ii(e,t)])}}class ma{constructor(e,t){this.persistence=e,this.fi=new yn((r=>ut(r.path)),((r,i)=>r.isEqual(i))),this.garbageCollector=Ag(this,t)}static Vi(e,t){return new ma(e,t)}Ti(){}Ei(e){return D.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}dr(e){const t=this.pr(e);return this.persistence.getTargetCache().getTargetCount(e).next((r=>t.next((i=>r+i))))}pr(e){let t=0;return this.mr(e,(r=>{t++})).next((()=>t))}mr(e,t){return D.forEach(this.fi,((r,i)=>this.wr(e,r,i).next((s=>s?D.resolve():t(i)))))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const i=this.persistence.getRemoteDocumentCache(),s=i.newChangeBuffer();return i.ni(e,(o=>this.wr(e,o,t).next((a=>{a||(r++,s.removeEntry(o,se.min()))})))).next((()=>s.apply(e))).next((()=>r))}markPotentiallyOrphaned(e,t){return this.fi.set(t,e.currentSequenceNumber),D.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.fi.set(r,e.currentSequenceNumber),D.resolve()}removeReference(e,t,r){return this.fi.set(r,e.currentSequenceNumber),D.resolve()}updateLimboDocument(e,t){return this.fi.set(t,e.currentSequenceNumber),D.resolve()}hi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Uo(e.data.value)),t}wr(e,t,r){return D.or([()=>this.persistence.Ii(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const i=this.fi.get(t);return D.resolve(i!==void 0&&i>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class xb{constructor(e){this.serializer=e}k(e,t,r,i){const s=new Da("createOrUpgrade",t);r<1&&i>=1&&((function(l){l.createObjectStore(Ws)})(e),(function(l){l.createObjectStore(ks,{keyPath:LE}),l.createObjectStore(Nt,{keyPath:Eh,autoIncrement:!0}).createIndex(Tr,vh,{unique:!0}),l.createObjectStore(pi)})(e),hf(e),(function(l){l.createObjectStore(hr)})(e));let o=D.resolve();return r<3&&i>=3&&(r!==0&&((function(l){l.deleteObjectStore(yi),l.deleteObjectStore(gi),l.deleteObjectStore(vr)})(e),hf(e)),o=o.next((()=>(function(l){const u=l.store(vr),d={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:se.min().toTimestamp(),targetCount:0};return u.put(ia,d)})(s)))),r<4&&i>=4&&(r!==0&&(o=o.next((()=>(function(l,u){return u.store(Nt).J().next((f=>{l.deleteObjectStore(Nt),l.createObjectStore(Nt,{keyPath:Eh,autoIncrement:!0}).createIndex(Tr,vh,{unique:!0});const _=u.store(Nt),I=f.map((w=>_.put(w)));return D.waitFor(I)}))})(e,s)))),o=o.next((()=>{(function(l){l.createObjectStore(_i,{keyPath:HE})})(e)}))),r<5&&i>=5&&(o=o.next((()=>this.gi(s)))),r<6&&i>=6&&(o=o.next((()=>((function(l){l.createObjectStore(Cs)})(e),this.pi(s))))),r<7&&i>=7&&(o=o.next((()=>this.yi(s)))),r<8&&i>=8&&(o=o.next((()=>this.wi(e,s)))),r<9&&i>=9&&(o=o.next((()=>{(function(l){l.objectStoreNames.contains("remoteDocumentChanges")&&l.deleteObjectStore("remoteDocumentChanges")})(e)}))),r<10&&i>=10&&(o=o.next((()=>this.Si(s)))),r<11&&i>=11&&(o=o.next((()=>{(function(l){l.createObjectStore(Fa,{keyPath:WE})})(e),(function(l){l.createObjectStore(Ma,{keyPath:KE})})(e)}))),r<12&&i>=12&&(o=o.next((()=>{(function(l){const u=l.createObjectStore(Oa,{keyPath:tv});u.createIndex(rl,nv,{unique:!1}),u.createIndex(wp,rv,{unique:!1})})(e)}))),r<13&&i>=13&&(o=o.next((()=>(function(l){const u=l.createObjectStore(ra,{keyPath:$E});u.createIndex(Vo,UE),u.createIndex(pp,BE)})(e))).next((()=>this.bi(e,s))).next((()=>e.deleteObjectStore(hr)))),r<14&&i>=14&&(o=o.next((()=>this.Di(e,s)))),r<15&&i>=15&&(o=o.next((()=>(function(l){l.createObjectStore(jl,{keyPath:YE,autoIncrement:!0}).createIndex(nl,QE,{unique:!1}),l.createObjectStore(gs,{keyPath:JE}).createIndex(yp,XE,{unique:!1}),l.createObjectStore(ys,{keyPath:ZE}).createIndex(_p,ev,{unique:!1})})(e)))),r<16&&i>=16&&(o=o.next((()=>{t.objectStore(gs).clear()})).next((()=>{t.objectStore(ys).clear()}))),r<17&&i>=17&&(o=o.next((()=>{(function(l){l.createObjectStore(Hl,{keyPath:iv})})(e)}))),r<18&&i>=18&&lm()&&(o=o.next((()=>{t.objectStore(gs).clear()})).next((()=>{t.objectStore(ys).clear()}))),o}pi(e){let t=0;return e.store(hr).ee(((r,i)=>{t+=fa(i)})).next((()=>{const r={byteSize:t};return e.store(Cs).put(tl,r)}))}gi(e){const t=e.store(ks),r=e.store(Nt);return t.J().next((i=>D.forEach(i,(s=>{const o=IDBKeyRange.bound([s.userId,Er],[s.userId,s.lastAcknowledgedBatchId]);return r.J(Tr,o).next((a=>D.forEach(a,(l=>{ne(l.userId===s.userId,18650,"Cannot process batch from unexpected user",{batchId:l.batchId});const u=mr(this.serializer,l);return vg(e,s.userId,u).next((()=>{}))}))))}))))}yi(e){const t=e.store(yi),r=e.store(hr);return e.store(vr).get(ia).next((i=>{const s=[];return r.ee(((o,a)=>{const l=new xe(o),u=(function(f){return[0,ut(f)]})(l);s.push(t.get(u).next((d=>d?D.resolve():(f=>t.put({targetId:0,path:ut(f),sequenceNumber:i.highestListenSequenceNumber}))(l))))})).next((()=>D.waitFor(s)))}))}wi(e,t){e.createObjectStore(Ds,{keyPath:jE});const r=t.store(Ds),i=new ou,s=o=>{if(i.add(o)){const a=o.lastSegment(),l=o.popLast();return r.put({collectionId:a,parent:ut(l)})}};return t.store(hr).ee({Y:!0},((o,a)=>{const l=new xe(o);return s(l.popLast())})).next((()=>t.store(pi).ee({Y:!0},(([o,a,l],u)=>{const d=Kt(a);return s(d.popLast())}))))}Si(e){const t=e.store(gi);return t.ee(((r,i)=>{const s=ds(i),o=yg(this.serializer,s);return t.put(o)}))}bi(e,t){const r=t.store(hr),i=[];return r.ee(((s,o)=>{const a=t.store(ra),l=(function(f){return f.document?new H(xe.fromString(f.document.name).popFirst(5)):f.noDocument?H.fromSegments(f.noDocument.path):f.unknownDocument?H.fromSegments(f.unknownDocument.path):ee(36783)})(o).path.toArray(),u={prefixPath:l.slice(0,l.length-2),collectionGroup:l[l.length-2],documentId:l[l.length-1],readTime:o.readTime||[0,0],unknownDocument:o.unknownDocument,noDocument:o.noDocument,document:o.document,hasCommittedMutations:!!o.hasCommittedMutations};i.push(a.put(u))})).next((()=>D.waitFor(i)))}Di(e,t){const r=t.store(Nt),i=Pg(this.serializer),s=new cu(Wa.Vi,this.serializer.yt);return r.J().next((o=>{const a=new Map;return o.forEach((l=>{let u=a.get(l.userId)??ye();mr(this.serializer,l).keys().forEach((d=>u=u.add(d))),a.set(l.userId,u)})),D.forEach(a,((l,u)=>{const d=new st(u),f=ja.wt(this.serializer,d),_=s.getIndexManager(d),I=Ha.wt(d,this.serializer,_,s.referenceDelegate);return new xg(i,I,f,_).recalculateAndSaveOverlaysForDocumentKeys(new il(t,Pt.ce),l).next()}))}))}}function hf(n){n.createObjectStore(yi,{keyPath:zE}).createIndex(Gl,GE,{unique:!0}),n.createObjectStore(gi,{keyPath:"targetId"}).createIndex(gp,qE,{unique:!0}),n.createObjectStore(vr)}const kn="IndexedDbPersistence",Pc=18e5,xc=5e3,kc="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.",kb="main";class lu{constructor(e,t,r,i,s,o,a,l,u,d,f=18){if(this.allowTabSynchronization=e,this.persistenceKey=t,this.clientId=r,this.Ci=s,this.window=o,this.document=a,this.Fi=u,this.Mi=d,this.xi=f,this.ai=null,this.ui=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Oi=null,this.inForeground=!1,this.Ni=null,this.Bi=null,this.Li=Number.NEGATIVE_INFINITY,this.ki=_=>Promise.resolve(),!lu.v())throw new W($.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new yb(this,i),this.qi=t+kb,this.serializer=new gg(l),this.Ki=new Bn(this.qi,this.xi,new xb(this.serializer)),this.ci=new sb,this.li=new fb(this.referenceDelegate,this.serializer),this.remoteDocumentCache=Pg(this.serializer),this.Pi=new ib,this.window&&this.window.localStorage?this.Ui=this.window.localStorage:(this.Ui=null,d===!1&&ft(kn,"LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.$i().then((()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new W($.FAILED_PRECONDITION,kc);return this.Wi(),this.Qi(),this.Gi(),this.runTransaction("getHighestListenSequenceNumber","readonly",(e=>this.li.getHighestSequenceNumber(e)))})).then((e=>{this.ai=new Pt(e,this.Fi)})).then((()=>{this.ui=!0})).catch((e=>(this.Ki&&this.Ki.close(),Promise.reject(e))))}zi(e){return this.ki=async t=>{if(this.started)return e(t)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.Ki.K((async t=>{t.newVersion===null&&await e()}))}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.Ci.enqueueAndForget((async()=>{this.started&&await this.$i()})))}$i(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",(e=>Eo(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next((()=>{if(this.isPrimary)return this.ji(e).next((t=>{t||(this.isPrimary=!1,this.Ci.enqueueRetryable((()=>this.ki(!1))))}))})).next((()=>this.Ji(e))).next((t=>this.isPrimary&&!t?this.Hi(e).next((()=>!1)):!!t&&this.Zi(e).next((()=>!0)))))).catch((e=>{if(er(e))return q(kn,"Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return q(kn,"Releasing owner lease after error during lease refresh",e),!1})).then((e=>{this.isPrimary!==e&&this.Ci.enqueueRetryable((()=>this.ki(e))),this.isPrimary=e}))}ji(e){return es(e).get(Wr).next((t=>D.resolve(this.Xi(t))))}Yi(e){return Eo(e).delete(this.clientId)}async es(){if(this.isPrimary&&!this.ts(this.Li,Pc)){this.Li=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",(t=>{const r=et(t,_i);return r.J().next((i=>{const s=this.ns(i,Pc),o=i.filter((a=>s.indexOf(a)===-1));return D.forEach(o,(a=>r.delete(a.clientId))).next((()=>o))}))})).catch((()=>[]));if(this.Ui)for(const t of e)this.Ui.removeItem(this.rs(t.clientId))}}Gi(){this.Bi=this.Ci.enqueueAfterDelay("client_metadata_refresh",4e3,(()=>this.$i().then((()=>this.es())).then((()=>this.Gi()))))}Xi(e){return!!e&&e.ownerId===this.clientId}Ji(e){return this.Mi?D.resolve(!0):es(e).get(Wr).next((t=>{if(t!==null&&this.ts(t.leaseTimestampMs,xc)&&!this.ss(t.ownerId)){if(this.Xi(t)&&this.networkEnabled)return!0;if(!this.Xi(t)){if(!t.allowTabSynchronization)throw new W($.FAILED_PRECONDITION,kc);return!1}}return!(!this.networkEnabled||!this.inForeground)||Eo(e).J().next((r=>this.ns(r,xc).find((i=>{if(this.clientId!==i.clientId){const s=!this.networkEnabled&&i.networkEnabled,o=!this.inForeground&&i.inForeground,a=this.networkEnabled===i.networkEnabled;if(s||o&&a)return!0}return!1}))===void 0))})).next((t=>(this.isPrimary!==t&&q(kn,`Client ${t?"is":"is not"} eligible for a primary lease.`),t)))}async shutdown(){this.ui=!1,this._s(),this.Bi&&(this.Bi.cancel(),this.Bi=null),this.us(),this.cs(),await this.Ki.runTransaction("shutdown","readwrite",[Ws,_i],(e=>{const t=new il(e,Pt.ce);return this.Hi(t).next((()=>this.Yi(t)))})),this.Ki.close(),this.ls()}ns(e,t){return e.filter((r=>this.ts(r.updateTimeMs,t)&&!this.ss(r.clientId)))}hs(){return this.runTransaction("getActiveClients","readonly",(e=>Eo(e).J().next((t=>this.ns(t,Pc).map((r=>r.clientId))))))}get started(){return this.ui}getGlobalsCache(){return this.ci}getMutationQueue(e,t){return Ha.wt(e,this.serializer,t,this.referenceDelegate)}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new hb(e,this.serializer.yt.databaseId)}getDocumentOverlayCache(e){return ja.wt(this.serializer,e)}getBundleCache(){return this.Pi}runTransaction(e,t,r){q(kn,"Starting transaction:",e);const i=t==="readonly"?"readonly":"readwrite",s=(function(l){return l===18?av:l===17?bp:l===16?ov:l===15?Wl:l===14?vp:l===13?Ep:l===12?sv:l===11?Tp:void ee(60245)})(this.xi);let o;return this.Ki.runTransaction(e,i,s,(a=>(o=new il(a,this.ai?this.ai.next():Pt.ce),t==="readwrite-primary"?this.ji(o).next((l=>!!l||this.Ji(o))).next((l=>{if(!l)throw ft(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.Ci.enqueueRetryable((()=>this.ki(!1))),new W($.FAILED_PRECONDITION,dp);return r(o)})).next((l=>this.Zi(o).next((()=>l)))):this.Ps(o).next((()=>r(o)))))).then((a=>(o.raiseOnCommittedEvent(),a)))}Ps(e){return es(e).get(Wr).next((t=>{if(t!==null&&this.ts(t.leaseTimestampMs,xc)&&!this.ss(t.ownerId)&&!this.Xi(t)&&!(this.Mi||this.allowTabSynchronization&&t.allowTabSynchronization))throw new W($.FAILED_PRECONDITION,kc)}))}Zi(e){const t={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return es(e).put(Wr,t)}static v(){return Bn.v()}Hi(e){const t=es(e);return t.get(Wr).next((r=>this.Xi(r)?(q(kn,"Releasing primary lease."),t.delete(Wr)):D.resolve()))}ts(e,t){const r=Date.now();return!(e<r-t)&&(!(e>r)||(ft(`Detected an update time that is in the future: ${e} > ${r}`),!1))}Wi(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.Ni=()=>{this.Ci.enqueueAndForget((()=>(this.inForeground=this.document.visibilityState==="visible",this.$i())))},this.document.addEventListener("visibilitychange",this.Ni),this.inForeground=this.document.visibilityState==="visible")}us(){this.Ni&&(this.document.removeEventListener("visibilitychange",this.Ni),this.Ni=null)}Qi(){var e;typeof((e=this.window)==null?void 0:e.addEventListener)=="function"&&(this.Oi=()=>{this._s();const t=/(?:Version|Mobile)\/1[456]/;cm()&&(navigator.appVersion.match(t)||navigator.userAgent.match(t))&&this.Ci.enterRestrictedMode(!0),this.Ci.enqueueAndForget((()=>this.shutdown()))},this.window.addEventListener("pagehide",this.Oi))}cs(){this.Oi&&(this.window.removeEventListener("pagehide",this.Oi),this.Oi=null)}ss(e){var t;try{const r=((t=this.Ui)==null?void 0:t.getItem(this.rs(e)))!==null;return q(kn,`Client '${e}' ${r?"is":"is not"} zombied in LocalStorage`),r}catch(r){return ft(kn,"Failed to get zombied client id.",r),!1}}_s(){if(this.Ui)try{this.Ui.setItem(this.rs(this.clientId),String(Date.now()))}catch(e){ft("Failed to set zombie client id.",e)}}ls(){if(this.Ui)try{this.Ui.removeItem(this.rs(this.clientId))}catch{}}rs(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function es(n){return et(n,Ws)}function Eo(n){return et(n,_i)}function Cb(n,e){let t=n.projectId;return n.isDefaultDatabase||(t+="."+n.database),"firestore/"+e+"/"+t+"/"}/**
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
 */class uu{constructor(e,t,r,i){this.targetId=e,this.fromCache=t,this.Ts=r,this.Es=i}static Is(e,t){let r=ye(),i=ye();for(const s of t.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new uu(e,t.fromCache,r,i)}}/**
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
 */class Db{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class kg{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=(function(){return cm()?8:fp(Ze())>0?6:4})()}initialize(e,t){this.fs=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,r,i){const s={result:null};return this.gs(e,t).next((o=>{s.result=o})).next((()=>{if(!s.result)return this.ps(e,t,i,r).next((o=>{s.result=o}))})).next((()=>{if(s.result)return;const o=new Db;return this.ys(e,t,o).next((a=>{if(s.result=a,this.As)return this.ws(e,t,o,a.size)}))})).next((()=>s.result))}ws(e,t,r,i){return r.documentReadCount<this.Vs?(ti()<=Ee.DEBUG&&q("QueryEngine","SDK will not create cache indexes for query:",ni(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),D.resolve()):(ti()<=Ee.DEBUG&&q("QueryEngine","Query:",ni(t),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.ds*i?(ti()<=Ee.DEBUG&&q("QueryEngine","The SDK decides to create cache indexes for query:",ni(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Ct(t))):D.resolve())}gs(e,t){if(Mh(t))return D.resolve(null);let r=Ct(t);return this.indexManager.getIndexType(e,r).next((i=>i===0?null:(t.limit!==null&&i===1&&(t=ul(t,null,"F"),r=Ct(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next((s=>{const o=ye(...s);return this.fs.getDocuments(e,o).next((a=>this.indexManager.getMinOffset(e,r).next((l=>{const u=this.Ss(t,a);return this.bs(t,u,o,l.readTime)?this.gs(e,ul(t,null,"F")):this.Ds(e,u,t,l)}))))})))))}ps(e,t,r,i){return Mh(t)||i.isEqual(se.min())?D.resolve(null):this.fs.getDocuments(e,r).next((s=>{const o=this.Ss(t,s);return this.bs(t,o,r,i)?D.resolve(null):(ti()<=Ee.DEBUG&&q("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),ni(t)),this.Ds(e,o,t,kE(i,Rs)).next((a=>a)))}))}Ss(e,t){let r=new De(qp(e));return t.forEach(((i,s)=>{Qs(e,s)&&(r=r.add(s))})),r}bs(e,t,r,i){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const s=e.limitType==="F"?t.last():t.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}ys(e,t,r){return ti()<=Ee.DEBUG&&q("QueryEngine","Using full collection scan to execute query:",ni(t)),this.fs.getDocumentsMatchingQuery(e,t,St.min(),r)}Ds(e,t,r,i){return this.fs.getDocumentsMatchingQuery(e,r,i).next((s=>(t.forEach((o=>{s=s.insert(o.key,o)})),s)))}}/**
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
 */const du="LocalStore",Nb=3e8;class Fb{constructor(e,t,r,i){this.persistence=e,this.Cs=t,this.serializer=i,this.vs=new qe(le),this.Fs=new yn((s=>Dr(s)),Ks),this.Ms=new Map,this.xs=e.getRemoteDocumentCache(),this.li=e.getTargetCache(),this.Pi=e.getBundleCache(),this.Os(r)}Os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new xg(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.vs)))}}function Cg(n,e,t,r){return new Fb(n,e,t,r)}async function Dg(n,e){const t=ue(n);return await t.persistence.runTransaction("Handle user change","readonly",(r=>{let i;return t.mutationQueue.getAllMutationBatches(r).next((s=>(i=s,t.Os(e),t.mutationQueue.getAllMutationBatches(r)))).next((s=>{const o=[],a=[];let l=ye();for(const u of i){o.push(u.batchId);for(const d of u.mutations)l=l.add(d.key)}for(const u of s){a.push(u.batchId);for(const d of u.mutations)l=l.add(d.key)}return t.localDocuments.getDocuments(r,l).next((u=>({Ns:u,removedBatchIds:o,addedBatchIds:a})))}))}))}function Mb(n,e){const t=ue(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(r=>{const i=e.batch.keys(),s=t.xs.newChangeBuffer({trackRemovals:!0});return(function(a,l,u,d){const f=u.batch,_=f.keys();let I=D.resolve();return _.forEach((w=>{I=I.next((()=>d.getEntry(l,w))).next((S=>{const P=u.docVersions.get(w);ne(P!==null,48541),S.version.compareTo(P)<0&&(f.applyToRemoteDocument(S,u),S.isValidDocument()&&(S.setReadTime(u.commitVersion),d.addEntry(S)))}))})),I.next((()=>a.mutationQueue.removeMutationBatch(l,f)))})(t,r,e,s).next((()=>s.apply(r))).next((()=>t.mutationQueue.performConsistencyCheck(r))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,(function(a){let l=ye();for(let u=0;u<a.mutationResults.length;++u)a.mutationResults[u].transformResults.length>0&&(l=l.add(a.batch.mutations[u].key));return l})(e)))).next((()=>t.localDocuments.getDocuments(r,i)))}))}function Ng(n){const e=ue(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.li.getLastRemoteSnapshotVersion(t)))}function Ob(n,e){const t=ue(n),r=e.snapshotVersion;let i=t.vs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(s=>{const o=t.xs.newChangeBuffer({trackRemovals:!0});i=t.vs;const a=[];e.targetChanges.forEach(((d,f)=>{const _=i.get(f);if(!_)return;a.push(t.li.removeMatchingKeys(s,d.removedDocuments,f).next((()=>t.li.addMatchingKeys(s,d.addedDocuments,f))));let I=_.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(f)!==null?I=I.withResumeToken(Je.EMPTY_BYTE_STRING,se.min()).withLastLimboFreeSnapshotVersion(se.min()):d.resumeToken.approximateByteSize()>0&&(I=I.withResumeToken(d.resumeToken,r)),i=i.insert(f,I),(function(S,P,F){return S.resumeToken.approximateByteSize()===0||P.snapshotVersion.toMicroseconds()-S.snapshotVersion.toMicroseconds()>=Nb?!0:F.addedDocuments.size+F.modifiedDocuments.size+F.removedDocuments.size>0})(_,I,d)&&a.push(t.li.updateTargetData(s,I))}));let l=vt(),u=ye();if(e.documentUpdates.forEach((d=>{e.resolvedLimboDocuments.has(d)&&a.push(t.persistence.referenceDelegate.updateLimboDocument(s,d))})),a.push(Lb(s,o,e.documentUpdates).next((d=>{l=d.Bs,u=d.Ls}))),!r.isEqual(se.min())){const d=t.li.getLastRemoteSnapshotVersion(s).next((f=>t.li.setTargetsMetadata(s,s.currentSequenceNumber,r)));a.push(d)}return D.waitFor(a).next((()=>o.apply(s))).next((()=>t.localDocuments.getLocalViewOfDocuments(s,l,u))).next((()=>l))})).then((s=>(t.vs=i,s)))}function Lb(n,e,t){let r=ye(),i=ye();return t.forEach((s=>r=r.add(s))),e.getEntries(n,r).next((s=>{let o=vt();return t.forEach(((a,l)=>{const u=s.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(se.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):q(du,"Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)})),{Bs:o,Ls:i}}))}function Vb(n,e){const t=ue(n);return t.persistence.runTransaction("Get next mutation batch","readonly",(r=>(e===void 0&&(e=Er),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e))))}function $b(n,e){const t=ue(n);return t.persistence.runTransaction("Allocate target","readwrite",(r=>{let i;return t.li.getTargetData(r,e).next((s=>s?(i=s,D.resolve(i)):t.li.allocateTargetId(r).next((o=>(i=new un(e,o,"TargetPurposeListen",r.currentSequenceNumber),t.li.addTargetData(r,i).next((()=>i)))))))})).then((r=>{const i=t.vs.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(t.vs=t.vs.insert(r.targetId,r),t.Fs.set(e,r.targetId)),r}))}async function _l(n,e,t){const r=ue(n),i=r.vs.get(e),s=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",s,(o=>r.persistence.referenceDelegate.removeTarget(o,i)))}catch(o){if(!er(o))throw o;q(du,`Failed to update sequence numbers for target ${e}: ${o}`)}r.vs=r.vs.remove(e),r.Fs.delete(i.target)}function ff(n,e,t){const r=ue(n);let i=se.min(),s=ye();return r.persistence.runTransaction("Execute query","readwrite",(o=>(function(l,u,d){const f=ue(l),_=f.Fs.get(d);return _!==void 0?D.resolve(f.vs.get(_)):f.li.getTargetData(u,d)})(r,o,Ct(e)).next((a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.li.getMatchingKeysForTargetId(o,a.targetId).next((l=>{s=l}))})).next((()=>r.Cs.getDocumentsMatchingQuery(o,e,t?i:se.min(),t?s:ye()))).next((a=>(Ub(r,Sv(e),a),{documents:a,ks:s})))))}function Ub(n,e,t){let r=n.Ms.get(e)||se.min();t.forEach(((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)})),n.Ms.set(e,r)}class mf{constructor(){this.activeTargetIds=Cv()}Qs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Fg{constructor(){this.vo=new mf,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.vo.Qs(e),this.Fo[e]||"not-current"}updateQueryState(e,t,r){this.Fo[e]=t}removeLocalQueryTarget(e){this.vo.Gs(e)}isLocalQueryTarget(e){return this.vo.activeTargetIds.has(e)}clearQueryState(e){delete this.Fo[e]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(e){return this.vo.activeTargetIds.has(e)}start(){return this.vo=new mf,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class Bb{Mo(e){}shutdown(){}}/**
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
 */const pf="ConnectivityMonitor";class gf{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(e){this.Lo.push(e)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){q(pf,"Network connectivity changed: AVAILABLE");for(const e of this.Lo)e(0)}Bo(){q(pf,"Network connectivity changed: UNAVAILABLE");for(const e of this.Lo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let vo=null;function wl(){return vo===null?vo=(function(){return 268435456+Math.round(2147483648*Math.random())})():vo++,"0x"+vo.toString(16)}/**
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
 */const Cc="RestConnection",qb={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class zb{get qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Ko=t+"://"+e.host,this.Uo=`projects/${r}/databases/${i}`,this.$o=this.databaseId.database===sa?`project_id=${r}`:`project_id=${r}&database_id=${i}`}Wo(e,t,r,i,s){const o=wl(),a=this.Qo(e,t.toUriEncodedString());q(Cc,`Sending RPC '${e}' ${o}:`,a,r);const l={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(l,i,s);const{host:u}=new URL(a),d=Vr(u);return this.zo(e,a,l,r,d).then((f=>(q(Cc,`Received RPC '${e}' ${o}: `,f),f)),(f=>{throw jn(Cc,`RPC '${e}' ${o} failed with error: `,f,"url: ",a,"request:",r),f}))}jo(e,t,r,i,s,o){return this.Wo(e,t,r,i,s)}Go(e,t,r){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+ki})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((i,s)=>e[s]=i)),r&&r.headers.forEach(((i,s)=>e[s]=i))}Qo(e,t){const r=qb[e];let i=`${this.Ko}/v1/${t}:${r}`;return this.databaseInfo.apiKey&&(i=`${i}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),i}terminate(){}}/**
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
 */class Gb{constructor(e){this.Jo=e.Jo,this.Ho=e.Ho}Zo(e){this.Xo=e}Yo(e){this.e_=e}t_(e){this.n_=e}onMessage(e){this.r_=e}close(){this.Ho()}send(e){this.Jo(e)}i_(){this.Xo()}s_(){this.e_()}o_(e){this.n_(e)}__(e){this.r_(e)}}/**
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
 */const at="WebChannelConnection",ts=(n,e,t)=>{n.listen(e,(r=>{try{t(r)}catch(i){setTimeout((()=>{throw i}),0)}}))};class hi extends zb{constructor(e){super(e),this.a_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static u_(){if(!hi.c_){const e=rp();ts(e,np.STAT_EVENT,(t=>{t.stat===Xc.PROXY?q(at,"STAT_EVENT: detected buffering proxy"):t.stat===Xc.NOPROXY&&q(at,"STAT_EVENT: detected no buffering proxy")})),hi.c_=!0}}zo(e,t,r,i,s){const o=wl();return new Promise(((a,l)=>{const u=new ep;u.setWithCredentials(!0),u.listenOnce(tp.COMPLETE,(()=>{try{switch(u.getLastErrorCode()){case Mo.NO_ERROR:const f=u.getResponseJson();q(at,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(f)),a(f);break;case Mo.TIMEOUT:q(at,`RPC '${e}' ${o} timed out`),l(new W($.DEADLINE_EXCEEDED,"Request time out"));break;case Mo.HTTP_ERROR:const _=u.getStatus();if(q(at,`RPC '${e}' ${o} failed with status:`,_,"response text:",u.getResponseText()),_>0){let I=u.getResponseJson();Array.isArray(I)&&(I=I[0]);const w=I==null?void 0:I.error;if(w&&w.status&&w.message){const S=(function(F){const x=F.toLowerCase().replace(/_/g,"-");return Object.values($).indexOf(x)>=0?x:$.UNKNOWN})(w.status);l(new W(S,w.message))}else l(new W($.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new W($.UNAVAILABLE,"Connection failed."));break;default:ee(9055,{l_:e,streamId:o,h_:u.getLastErrorCode(),P_:u.getLastError()})}}finally{q(at,`RPC '${e}' ${o} completed.`)}}));const d=JSON.stringify(i);q(at,`RPC '${e}' ${o} sending request:`,i),u.send(t,"POST",d,r,15)}))}T_(e,t,r){const i=wl(),s=[this.Ko,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=this.createWebChannelTransport(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;l!==void 0&&(a.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(a.useFetchStreams=!0),this.Go(a.initMessageHeaders,t,r),a.encodeInitMessageHeaders=!0;const u=s.join("");q(at,`Creating RPC '${e}' stream ${i}: ${u}`,a);const d=o.createWebChannel(u,a);this.E_(d);let f=!1,_=!1;const I=new Gb({Jo:w=>{_?q(at,`Not sending because RPC '${e}' stream ${i} is closed:`,w):(f||(q(at,`Opening RPC '${e}' stream ${i} transport.`),d.open(),f=!0),q(at,`RPC '${e}' stream ${i} sending:`,w),d.send(w))},Ho:()=>d.close()});return ts(d,cs.EventType.OPEN,(()=>{_||(q(at,`RPC '${e}' stream ${i} transport opened.`),I.i_())})),ts(d,cs.EventType.CLOSE,(()=>{_||(_=!0,q(at,`RPC '${e}' stream ${i} transport closed`),I.o_(),this.I_(d))})),ts(d,cs.EventType.ERROR,(w=>{_||(_=!0,jn(at,`RPC '${e}' stream ${i} transport errored. Name:`,w.name,"Message:",w.message),I.o_(new W($.UNAVAILABLE,"The operation could not be completed")))})),ts(d,cs.EventType.MESSAGE,(w=>{var S;if(!_){const P=w.data[0];ne(!!P,16349);const F=P,x=(F==null?void 0:F.error)||((S=F[0])==null?void 0:S.error);if(x){q(at,`RPC '${e}' stream ${i} received error:`,x);const k=x.status;let C=(function(b){const g=We[b];if(g!==void 0)return tg(g)})(k),L=x.message;k==="NOT_FOUND"&&L.includes("database")&&L.includes("does not exist")&&L.includes(this.databaseId.database)&&jn(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),C===void 0&&(C=$.INTERNAL,L="Unknown error status: "+k+" with message "+x.message),_=!0,I.o_(new W(C,L)),d.close()}else q(at,`RPC '${e}' stream ${i} received:`,P),I.__(P)}})),hi.u_(),setTimeout((()=>{I.s_()}),0),I}terminate(){this.a_.forEach((e=>e.close())),this.a_=[]}E_(e){this.a_.push(e)}I_(e){this.a_=this.a_.filter((t=>t===e))}Go(e,t,r){super.Go(e,t,r),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return ip()}}/**
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
 */function jb(n){return new hi(n)}/**
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
 */function Hb(){return typeof window<"u"?window:null}function jo(){return typeof document<"u"?document:null}/**
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
 */function Ka(n){return new Wv(n,!0)}/**
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
 */hi.c_=!1;class Mg{constructor(e,t,r=1e3,i=1.5,s=6e4){this.Ci=e,this.timerId=t,this.R_=r,this.A_=i,this.V_=s,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(e){this.cancel();const t=Math.floor(this.d_+this.y_()),r=Math.max(0,Date.now()-this.f_),i=Math.max(0,t-r);i>0&&q("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.d_} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,i,(()=>(this.f_=Date.now(),e()))),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
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
 */const yf="PersistentStream";class Og{constructor(e,t,r,i,s,o,a,l){this.Ci=e,this.S_=r,this.b_=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new Mg(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.S_,6e4,(()=>this.k_())))}q_(e){this.K_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}K_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.K_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===$.RESOURCE_EXHAUSTED?(ft(t.toString()),ft("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===$.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.t_(t)}W_(){}auth(){this.state=1;const e=this.Q_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([r,i])=>{this.D_===t&&this.G_(r,i)}),(r=>{e((()=>{const i=new W($.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(i)}))}))}G_(e,t){const r=this.Q_(this.D_);this.stream=this.j_(e,t),this.stream.Zo((()=>{r((()=>this.listener.Zo()))})),this.stream.Yo((()=>{r((()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.b_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.Yo())))})),this.stream.t_((i=>{r((()=>this.z_(i)))})),this.stream.onMessage((i=>{r((()=>++this.F_==1?this.J_(i):this.onNext(i)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(e){return q(yf,`close with error: ${e}`),this.stream=null,this.close(4,e)}Q_(e){return t=>{this.Ci.enqueueAndForget((()=>this.D_===e?t():(q(yf,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class Wb extends Og{constructor(e,t,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,i,o),this.serializer=s}j_(e,t){return this.connection.T_("Listen",e,t)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=Qv(this.serializer,e),r=(function(s){if(!("targetChange"in s))return se.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?se.min():o.readTime?mt(o.readTime):se.min()})(e);return this.listener.H_(t,r)}Z_(e){const t={};t.database=fl(this.serializer),t.addTarget=(function(s,o){let a;const l=o.target;if(a=aa(l)?{documents:lg(s,l)}:{query:ug(s,l).ft},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=ig(s,o.resumeToken);const u=dl(s,o.expectedCount);u!==null&&(a.expectedCount=u)}else if(o.snapshotVersion.compareTo(se.min())>0){a.readTime=Ai(s,o.snapshotVersion.toTimestamp());const u=dl(s,o.expectedCount);u!==null&&(a.expectedCount=u)}return a})(this.serializer,e);const r=Xv(this.serializer,e);r&&(t.labels=r),this.q_(t)}X_(e){const t={};t.database=fl(this.serializer),t.removeTarget=e,this.q_(t)}}class Kb extends Og{constructor(e,t,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,i,o),this.serializer=s}get Y_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.Y_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}J_(e){return ne(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,ne(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){ne(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const t=Jv(e.writeResults,e.commitTime),r=mt(e.commitTime);return this.listener.na(r,t)}ra(){const e={};e.database=fl(this.serializer),this.q_(e)}ea(e){const t={streamToken:this.lastStreamToken,writes:e.map((r=>ua(this.serializer,r)))};this.q_(t)}}/**
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
 */class Yb{}class Qb extends Yb{constructor(e,t,r,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=i,this.ia=!1}sa(){if(this.ia)throw new W($.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,r,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([s,o])=>this.connection.Wo(e,hl(t,r),i,s,o))).catch((s=>{throw s.name==="FirebaseError"?(s.code===$.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new W($.UNKNOWN,s.toString())}))}jo(e,t,r,i,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([o,a])=>this.connection.jo(e,hl(t,r),i,o,a,s))).catch((o=>{throw o.name==="FirebaseError"?(o.code===$.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new W($.UNKNOWN,o.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}function Jb(n,e,t,r){return new Qb(n,e,t,r)}class Xb{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(ft(t),this.aa=!1):q("OnlineStateTracker",t)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
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
 */const Or="RemoteStore";class Zb{constructor(e,t,r,i,s){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ea=new Map,this.Ia=new Set,this.Ra=[],this.Aa=s,this.Aa.Mo((o=>{r.enqueueAndForget((async()=>{qr(this)&&(q(Or,"Restarting streams for network reachability change."),await(async function(l){const u=ue(l);u.Ia.add(4),await Xs(u),u.Va.set("Unknown"),u.Ia.delete(4),await Ya(u)})(this))}))})),this.Va=new Xb(r,i)}}async function Ya(n){if(qr(n))for(const e of n.Ra)await e(!0)}async function Xs(n){for(const e of n.Ra)await e(!1)}function Lg(n,e){const t=ue(n);t.Ea.has(e.targetId)||(t.Ea.set(e.targetId,e),pu(t)?mu(t):Di(t).O_()&&fu(t,e))}function hu(n,e){const t=ue(n),r=Di(t);t.Ea.delete(e),r.O_()&&Vg(t,e),t.Ea.size===0&&(r.O_()?r.L_():qr(t)&&t.Va.set("Unknown"))}function fu(n,e){if(n.da.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(se.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Di(n).Z_(e)}function Vg(n,e){n.da.$e(e),Di(n).X_(e)}function mu(n){n.da=new zv({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),At:e=>n.Ea.get(e)||null,ht:()=>n.datastore.serializer.databaseId}),Di(n).start(),n.Va.ua()}function pu(n){return qr(n)&&!Di(n).x_()&&n.Ea.size>0}function qr(n){return ue(n).Ia.size===0}function $g(n){n.da=void 0}async function eI(n){n.Va.set("Online")}async function tI(n){n.Ea.forEach(((e,t)=>{fu(n,e)}))}async function nI(n,e){$g(n),pu(n)?(n.Va.ha(e),mu(n)):n.Va.set("Unknown")}async function rI(n,e,t){if(n.Va.set("Online"),e instanceof rg&&e.state===2&&e.cause)try{await(async function(i,s){const o=s.cause;for(const a of s.targetIds)i.Ea.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.Ea.delete(a),i.da.removeTarget(a))})(n,e)}catch(r){q(Or,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await pa(n,r)}else if(e instanceof zo?n.da.Xe(e):e instanceof ng?n.da.st(e):n.da.tt(e),!t.isEqual(se.min()))try{const r=await Ng(n.localStore);t.compareTo(r)>=0&&await(function(s,o){const a=s.da.Tt(o);return a.targetChanges.forEach(((l,u)=>{if(l.resumeToken.approximateByteSize()>0){const d=s.Ea.get(u);d&&s.Ea.set(u,d.withResumeToken(l.resumeToken,o))}})),a.targetMismatches.forEach(((l,u)=>{const d=s.Ea.get(l);if(!d)return;s.Ea.set(l,d.withResumeToken(Je.EMPTY_BYTE_STRING,d.snapshotVersion)),Vg(s,l);const f=new un(d.target,l,u,d.sequenceNumber);fu(s,f)})),s.remoteSyncer.applyRemoteEvent(a)})(n,t)}catch(r){q(Or,"Failed to raise snapshot:",r),await pa(n,r)}}async function pa(n,e,t){if(!er(e))throw e;n.Ia.add(1),await Xs(n),n.Va.set("Offline"),t||(t=()=>Ng(n.localStore)),n.asyncQueue.enqueueRetryable((async()=>{q(Or,"Retrying IndexedDB access"),await t(),n.Ia.delete(1),await Ya(n)}))}function Ug(n,e){return e().catch((t=>pa(n,t,e)))}async function Zs(n){const e=ue(n),t=Kn(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:Er;for(;iI(e);)try{const i=await Vb(e.localStore,r);if(i===null){e.Ta.length===0&&t.L_();break}r=i.batchId,sI(e,i)}catch(i){await pa(e,i)}Bg(e)&&qg(e)}function iI(n){return qr(n)&&n.Ta.length<10}function sI(n,e){n.Ta.push(e);const t=Kn(n);t.O_()&&t.Y_&&t.ea(e.mutations)}function Bg(n){return qr(n)&&!Kn(n).x_()&&n.Ta.length>0}function qg(n){Kn(n).start()}async function oI(n){Kn(n).ra()}async function aI(n){const e=Kn(n);for(const t of n.Ta)e.ea(t.mutations)}async function cI(n,e,t){const r=n.Ta.shift(),i=tu.from(r,e,t);await Ug(n,(()=>n.remoteSyncer.applySuccessfulWrite(i))),await Zs(n)}async function lI(n,e){e&&Kn(n).Y_&&await(async function(r,i){if((function(o){return Uv(o)&&o!==$.ABORTED})(i.code)){const s=r.Ta.shift();Kn(r).B_(),await Ug(r,(()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i))),await Zs(r)}})(n,e),Bg(n)&&qg(n)}async function _f(n,e){const t=ue(n);t.asyncQueue.verifyOperationInProgress(),q(Or,"RemoteStore received new credentials");const r=qr(t);t.Ia.add(3),await Xs(t),r&&t.Va.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ia.delete(3),await Ya(t)}async function uI(n,e){const t=ue(n);e?(t.Ia.delete(2),await Ya(t)):e||(t.Ia.add(2),await Xs(t),t.Va.set("Unknown"))}function Di(n){return n.ma||(n.ma=(function(t,r,i){const s=ue(t);return s.sa(),new Wb(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)})(n.datastore,n.asyncQueue,{Zo:eI.bind(null,n),Yo:tI.bind(null,n),t_:nI.bind(null,n),H_:rI.bind(null,n)}),n.Ra.push((async e=>{e?(n.ma.B_(),pu(n)?mu(n):n.Va.set("Unknown")):(await n.ma.stop(),$g(n))}))),n.ma}function Kn(n){return n.fa||(n.fa=(function(t,r,i){const s=ue(t);return s.sa(),new Kb(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)})(n.datastore,n.asyncQueue,{Zo:()=>Promise.resolve(),Yo:oI.bind(null,n),t_:lI.bind(null,n),ta:aI.bind(null,n),na:cI.bind(null,n)}),n.Ra.push((async e=>{e?(n.fa.B_(),await Zs(n)):(await n.fa.stop(),n.Ta.length>0&&(q(Or,`Stopping write stream with ${n.Ta.length} pending writes`),n.Ta=[]))}))),n.fa}/**
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
 */class gu{constructor(e,t,r,i,s){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Zt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((o=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,i,s){const o=Date.now()+r,a=new gu(e,t,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new W($.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function yu(n,e){if(ft("AsyncQueue",`${e}: ${n}`),er(n))return new W($.UNAVAILABLE,`${e}: ${n}`);throw n}/**
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
 */class fi{static emptySet(e){return new fi(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||H.comparator(t.key,r.key):(t,r)=>H.comparator(t.key,r.key),this.keyedMap=ls(),this.sortedSet=new qe(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,r)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof fi)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new fi;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
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
 */class wf{constructor(){this.ga=new qe(H.comparator)}track(e){const t=e.doc.key,r=this.ga.get(t);r?e.type!==0&&r.type===3?this.ga=this.ga.insert(t,e):e.type===3&&r.type!==1?this.ga=this.ga.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ga=this.ga.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ga=this.ga.remove(t):e.type===1&&r.type===2?this.ga=this.ga.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):ee(63341,{Vt:e,pa:r}):this.ga=this.ga.insert(t,e)}ya(){const e=[];return this.ga.inorderTraversal(((t,r)=>{e.push(r)})),e}}class Ri{constructor(e,t,r,i,s,o,a,l,u){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,t,r,i,s){const o=[];return t.forEach((a=>{o.push({type:0,doc:a})})),new Ri(e,t,fi.emptySet(t),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ua(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let i=0;i<t.length;i++)if(t[i].type!==r[i].type||!t[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class dI{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some((e=>e.Da()))}}class hI{constructor(){this.queries=Tf(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,r){const i=ue(t),s=i.queries;i.queries=Tf(),s.forEach(((o,a)=>{for(const l of a.Sa)l.onError(r)}))})(this,new W($.ABORTED,"Firestore shutting down"))}}function Tf(){return new yn((n=>Bp(n)),Ua)}async function _u(n,e){const t=ue(n);let r=3;const i=e.query;let s=t.queries.get(i);s?!s.ba()&&e.Da()&&(r=2):(s=new dI,r=e.Da()?0:1);try{switch(r){case 0:s.wa=await t.onListen(i,!0);break;case 1:s.wa=await t.onListen(i,!1);break;case 2:await t.onFirstRemoteStoreListen(i)}}catch(o){const a=yu(o,`Initialization of query '${ni(e.query)}' failed`);return void e.onError(a)}t.queries.set(i,s),s.Sa.push(e),e.va(t.onlineState),s.wa&&e.Fa(s.wa)&&Tu(t)}async function wu(n,e){const t=ue(n),r=e.query;let i=3;const s=t.queries.get(r);if(s){const o=s.Sa.indexOf(e);o>=0&&(s.Sa.splice(o,1),s.Sa.length===0?i=e.Da()?0:1:!s.ba()&&e.Da()&&(i=2))}switch(i){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function fI(n,e){const t=ue(n);let r=!1;for(const i of e){const s=i.query,o=t.queries.get(s);if(o){for(const a of o.Sa)a.Fa(i)&&(r=!0);o.wa=i}}r&&Tu(t)}function mI(n,e,t){const r=ue(n),i=r.queries.get(e);if(i)for(const s of i.Sa)s.onError(t);r.queries.delete(e)}function Tu(n){n.Ca.forEach((e=>{e.next()}))}var Tl,Ef;(Ef=Tl||(Tl={})).Ma="default",Ef.Cache="cache";class Eu{constructor(e,t,r){this.query=e,this.xa=t,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Ri(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),t=!0):this.La(e,this.onlineState)&&(this.ka(e),t=!0),this.Na=e,t}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let t=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),t=!0),t}La(e,t){if(!e.fromCache||!this.Da())return!0;const r=t!=="Offline";return(!this.options.qa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const t=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}ka(e){e=Ri.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==Tl.Cache}}/**
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
 */class zg{constructor(e){this.key=e}}class Gg{constructor(e){this.key=e}}class pI{constructor(e,t){this.query=e,this.Za=t,this.Xa=null,this.hasCachedResults=!1,this.current=!1,this.Ya=ye(),this.mutatedKeys=ye(),this.eu=qp(e),this.tu=new fi(this.eu)}get nu(){return this.Za}ru(e,t){const r=t?t.iu:new wf,i=t?t.tu:this.tu;let s=t?t.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal(((d,f)=>{const _=i.get(d),I=Qs(this.query,f)?f:null,w=!!_&&this.mutatedKeys.has(_.key),S=!!I&&(I.hasLocalMutations||this.mutatedKeys.has(I.key)&&I.hasCommittedMutations);let P=!1;_&&I?_.data.isEqual(I.data)?w!==S&&(r.track({type:3,doc:I}),P=!0):this.su(_,I)||(r.track({type:2,doc:I}),P=!0,(l&&this.eu(I,l)>0||u&&this.eu(I,u)<0)&&(a=!0)):!_&&I?(r.track({type:0,doc:I}),P=!0):_&&!I&&(r.track({type:1,doc:_}),P=!0,(l||u)&&(a=!0)),P&&(I?(o=o.add(I),s=S?s.add(d):s.delete(d)):(o=o.delete(d),s=s.delete(d)))})),this.query.limit!==null)for(;o.size>this.query.limit;){const d=this.query.limitType==="F"?o.last():o.first();o=o.delete(d.key),s=s.delete(d.key),r.track({type:1,doc:d})}return{tu:o,iu:r,bs:a,mutatedKeys:s}}su(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,i){const s=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const o=e.iu.ya();o.sort(((d,f)=>(function(I,w){const S=P=>{switch(P){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ee(20277,{Vt:P})}};return S(I)-S(w)})(d.type,f.type)||this.eu(d.doc,f.doc))),this.ou(r),i=i??!1;const a=t&&!i?this._u():[],l=this.Ya.size===0&&this.current&&!i?1:0,u=l!==this.Xa;return this.Xa=l,o.length!==0||u?{snapshot:new Ri(this.query,e.tu,s,o,e.mutatedKeys,l===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:a}:{au:a}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new wf,mutatedKeys:this.mutatedKeys,bs:!1},!1)):{au:[]}}uu(e){return!this.Za.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach((t=>this.Za=this.Za.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Za=this.Za.delete(t))),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Ya;this.Ya=ye(),this.tu.forEach((r=>{this.uu(r.key)&&(this.Ya=this.Ya.add(r.key))}));const t=[];return e.forEach((r=>{this.Ya.has(r)||t.push(new Gg(r))})),this.Ya.forEach((r=>{e.has(r)||t.push(new zg(r))})),t}cu(e){this.Za=e.ks,this.Ya=ye();const t=this.ru(e.documents);return this.applyChanges(t,!0)}lu(){return Ri.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Xa===0,this.hasCachedResults)}}const vu="SyncEngine";class gI{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class yI{constructor(e){this.key=e,this.hu=!1}}class _I{constructor(e,t,r,i,s,o){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Pu={},this.Tu=new yn((a=>Bp(a)),Ua),this.Eu=new Map,this.Iu=new Set,this.Ru=new qe(H.comparator),this.Au=new Map,this.Vu=new au,this.du={},this.mu=new Map,this.fu=Mr.ar(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function wI(n,e,t=!0){const r=Qg(n);let i;const s=r.Tu.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.lu()):i=await jg(r,e,t,!0),i}async function TI(n,e){const t=Qg(n);await jg(t,e,!0,!1)}async function jg(n,e,t,r){const i=await $b(n.localStore,Ct(e)),s=i.targetId,o=n.sharedClientState.addLocalQueryTarget(s,t);let a;return r&&(a=await EI(n,e,s,o==="current",i.resumeToken)),n.isPrimaryClient&&t&&Lg(n.remoteStore,i),a}async function EI(n,e,t,r,i){n.pu=(f,_,I)=>(async function(S,P,F,x){let k=P.view.ru(F);k.bs&&(k=await ff(S.localStore,P.query,!1).then((({documents:b})=>P.view.ru(b,k))));const C=x&&x.targetChanges.get(P.targetId),L=x&&x.targetMismatches.get(P.targetId)!=null,V=P.view.applyChanges(k,S.isPrimaryClient,C,L);return bf(S,P.targetId,V.au),V.snapshot})(n,f,_,I);const s=await ff(n.localStore,e,!0),o=new pI(e,s.ks),a=o.ru(s.documents),l=Js.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",i),u=o.applyChanges(a,n.isPrimaryClient,l);bf(n,t,u.au);const d=new gI(e,t,o);return n.Tu.set(e,d),n.Eu.has(t)?n.Eu.get(t).push(e):n.Eu.set(t,[e]),u.snapshot}async function vI(n,e,t){const r=ue(n),i=r.Tu.get(e),s=r.Eu.get(i.targetId);if(s.length>1)return r.Eu.set(i.targetId,s.filter((o=>!Ua(o,e)))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await _l(r.localStore,i.targetId,!1).then((()=>{r.sharedClientState.clearQueryState(i.targetId),t&&hu(r.remoteStore,i.targetId),El(r,i.targetId)})).catch(Ur)):(El(r,i.targetId),await _l(r.localStore,i.targetId,!0))}async function bI(n,e){const t=ue(n),r=t.Tu.get(e),i=t.Eu.get(r.targetId);t.isPrimaryClient&&i.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),hu(t.remoteStore,r.targetId))}async function II(n,e,t){const r=Jg(n);try{const i=await(function(o,a){const l=ue(o),u=Ce.now(),d=a.reduce(((I,w)=>I.add(w.key)),ye());let f,_;return l.persistence.runTransaction("Locally write mutations","readwrite",(I=>{let w=vt(),S=ye();return l.xs.getEntries(I,d).next((P=>{w=P,w.forEach(((F,x)=>{x.isValidDocument()||(S=S.add(F))}))})).next((()=>l.localDocuments.getOverlayedDocuments(I,w))).next((P=>{f=P;const F=[];for(const x of a){const k=Vv(x,f.get(x.key).overlayedDocument);k!=null&&F.push(new tr(x.key,k,Np(k.value.mapValue),wt.exists(!0)))}return l.mutationQueue.addMutationBatch(I,u,F,a)})).next((P=>{_=P;const F=P.applyToLocalDocumentSet(f,S);return l.documentOverlayCache.saveOverlays(I,P.batchId,F)}))})).then((()=>({batchId:_.batchId,changes:Gp(f)})))})(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),(function(o,a,l){let u=o.du[o.currentUser.toKey()];u||(u=new qe(le)),u=u.insert(a,l),o.du[o.currentUser.toKey()]=u})(r,i.batchId,t),await eo(r,i.changes),await Zs(r.remoteStore)}catch(i){const s=yu(i,"Failed to persist write");t.reject(s)}}async function Hg(n,e){const t=ue(n);try{const r=await Ob(t.localStore,e);e.targetChanges.forEach(((i,s)=>{const o=t.Au.get(s);o&&(ne(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1,22616),i.addedDocuments.size>0?o.hu=!0:i.modifiedDocuments.size>0?ne(o.hu,14607):i.removedDocuments.size>0&&(ne(o.hu,42227),o.hu=!1))})),await eo(t,r,e)}catch(r){await Ur(r)}}function vf(n,e,t){const r=ue(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const i=[];r.Tu.forEach(((s,o)=>{const a=o.view.va(e);a.snapshot&&i.push(a.snapshot)})),(function(o,a){const l=ue(o);l.onlineState=a;let u=!1;l.queries.forEach(((d,f)=>{for(const _ of f.Sa)_.va(a)&&(u=!0)})),u&&Tu(l)})(r.eventManager,e),i.length&&r.Pu.H_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function SI(n,e,t){const r=ue(n);r.sharedClientState.updateQueryState(e,"rejected",t);const i=r.Au.get(e),s=i&&i.key;if(s){let o=new qe(H.comparator);o=o.insert(s,He.newNoDocument(s,se.min()));const a=ye().add(s),l=new Ga(se.min(),new Map,new qe(le),o,a);await Hg(r,l),r.Ru=r.Ru.remove(s),r.Au.delete(e),bu(r)}else await _l(r.localStore,e,!1).then((()=>El(r,e,t))).catch(Ur)}async function AI(n,e){const t=ue(n),r=e.batch.batchId;try{const i=await Mb(t.localStore,e);Kg(t,r,null),Wg(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await eo(t,i)}catch(i){await Ur(i)}}async function RI(n,e,t){const r=ue(n);try{const i=await(function(o,a){const l=ue(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",(u=>{let d;return l.mutationQueue.lookupMutationBatch(u,a).next((f=>(ne(f!==null,37113),d=f.keys(),l.mutationQueue.removeMutationBatch(u,f)))).next((()=>l.mutationQueue.performConsistencyCheck(u))).next((()=>l.documentOverlayCache.removeOverlaysForBatchId(u,d,a))).next((()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,d))).next((()=>l.localDocuments.getDocuments(u,d)))}))})(r.localStore,e);Kg(r,e,t),Wg(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await eo(r,i)}catch(i){await Ur(i)}}function Wg(n,e){(n.mu.get(e)||[]).forEach((t=>{t.resolve()})),n.mu.delete(e)}function Kg(n,e,t){const r=ue(n);let i=r.du[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(t?s.reject(t):s.resolve(),i=i.remove(e)),r.du[r.currentUser.toKey()]=i}}function El(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Eu.get(e))n.Tu.delete(r),t&&n.Pu.yu(r,t);n.Eu.delete(e),n.isPrimaryClient&&n.Vu.Gr(e).forEach((r=>{n.Vu.containsKey(r)||Yg(n,r)}))}function Yg(n,e){n.Iu.delete(e.path.canonicalString());const t=n.Ru.get(e);t!==null&&(hu(n.remoteStore,t),n.Ru=n.Ru.remove(e),n.Au.delete(t),bu(n))}function bf(n,e,t){for(const r of t)r instanceof zg?(n.Vu.addReference(r.key,e),PI(n,r)):r instanceof Gg?(q(vu,"Document no longer in limbo: "+r.key),n.Vu.removeReference(r.key,e),n.Vu.containsKey(r.key)||Yg(n,r.key)):ee(19791,{wu:r})}function PI(n,e){const t=e.key,r=t.path.canonicalString();n.Ru.get(t)||n.Iu.has(r)||(q(vu,"New document in limbo: "+t),n.Iu.add(r),bu(n))}function bu(n){for(;n.Iu.size>0&&n.Ru.size<n.maxConcurrentLimboResolutions;){const e=n.Iu.values().next().value;n.Iu.delete(e);const t=new H(xe.fromString(e)),r=n.fu.next();n.Au.set(r,new yI(t)),n.Ru=n.Ru.insert(t,r),Lg(n.remoteStore,new un(Ct(Ys(t.path)),r,"TargetPurposeLimboResolution",Pt.ce))}}async function eo(n,e,t){const r=ue(n),i=[],s=[],o=[];r.Tu.isEmpty()||(r.Tu.forEach(((a,l)=>{o.push(r.pu(l,e,t).then((u=>{var d;if((u||t)&&r.isPrimaryClient){const f=u?!u.fromCache:(d=t==null?void 0:t.targetChanges.get(l.targetId))==null?void 0:d.current;r.sharedClientState.updateQueryState(l.targetId,f?"current":"not-current")}if(u){i.push(u);const f=uu.Is(l.targetId,u);s.push(f)}})))})),await Promise.all(o),r.Pu.H_(i),await(async function(l,u){const d=ue(l);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",(f=>D.forEach(u,(_=>D.forEach(_.Ts,(I=>d.persistence.referenceDelegate.addReference(f,_.targetId,I))).next((()=>D.forEach(_.Es,(I=>d.persistence.referenceDelegate.removeReference(f,_.targetId,I)))))))))}catch(f){if(!er(f))throw f;q(du,"Failed to update sequence numbers: "+f)}for(const f of u){const _=f.targetId;if(!f.fromCache){const I=d.vs.get(_),w=I.snapshotVersion,S=I.withLastLimboFreeSnapshotVersion(w);d.vs=d.vs.insert(_,S)}}})(r.localStore,s))}async function xI(n,e){const t=ue(n);if(!t.currentUser.isEqual(e)){q(vu,"User change. New user:",e.toKey());const r=await Dg(t.localStore,e);t.currentUser=e,(function(s,o){s.mu.forEach((a=>{a.forEach((l=>{l.reject(new W($.CANCELLED,o))}))})),s.mu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await eo(t,r.Ns)}}function kI(n,e){const t=ue(n),r=t.Au.get(e);if(r&&r.hu)return ye().add(r.key);{let i=ye();const s=t.Eu.get(e);if(!s)return i;for(const o of s){const a=t.Tu.get(o);i=i.unionWith(a.view.nu)}return i}}function Qg(n){const e=ue(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=Hg.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=kI.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=SI.bind(null,e),e.Pu.H_=fI.bind(null,e.eventManager),e.Pu.yu=mI.bind(null,e.eventManager),e}function Jg(n){const e=ue(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=AI.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=RI.bind(null,e),e}class Ls{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Ka(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,t){return null}Mu(e,t){return null}vu(e){return Cg(this.persistence,new kg,e.initialUser,this.serializer)}Cu(e){return new cu(Wa.Vi,this.serializer)}Du(e){return new Fg}async terminate(){var e,t;(e=this.gcScheduler)==null||e.stop(),(t=this.indexBackfillerScheduler)==null||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Ls.provider={build:()=>new Ls};class CI extends Ls{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){ne(this.persistence.referenceDelegate instanceof ma,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new Sg(r,e.asyncQueue,t)}Cu(e){const t=this.cacheSizeBytes!==void 0?ct.withCacheSize(this.cacheSizeBytes):ct.DEFAULT;return new cu((r=>ma.Vi(r,t)),this.serializer)}}class DI extends Ls{constructor(e,t,r){super(),this.xu=e,this.cacheSizeBytes=t,this.forceOwnership=r,this.kind="persistent",this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.xu.initialize(this,e),await Jg(this.xu.syncEngine),await Zs(this.xu.remoteStore),await this.persistence.zi((()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve())))}vu(e){return Cg(this.persistence,new kg,e.initialUser,this.serializer)}Fu(e,t){const r=this.persistence.referenceDelegate.garbageCollector;return new Sg(r,e.asyncQueue,t)}Mu(e,t){const r=new FE(t,this.persistence);return new NE(e.asyncQueue,r)}Cu(e){const t=Cb(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),r=this.cacheSizeBytes!==void 0?ct.withCacheSize(this.cacheSizeBytes):ct.DEFAULT;return new lu(this.synchronizeTabs,t,e.clientId,r,e.asyncQueue,Hb(),jo(),this.serializer,this.sharedClientState,!!this.forceOwnership)}Du(e){return new Fg}}class ga{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>vf(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=xI.bind(null,this.syncEngine),await uI(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new hI})()}createDatastore(e){const t=Ka(e.databaseInfo.databaseId),r=jb(e.databaseInfo);return Jb(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return(function(r,i,s,o,a){return new Zb(r,i,s,o,a)})(this.localStore,this.datastore,e.asyncQueue,(t=>vf(this.syncEngine,t,0)),(function(){return gf.v()?new gf:new Bb})())}createSyncEngine(e,t){return(function(i,s,o,a,l,u,d){const f=new _I(i,s,o,a,l,u);return d&&(f.gu=!0),f})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await(async function(i){const s=ue(i);q(Or,"RemoteStore shutting down."),s.Ia.add(5),await Xs(s),s.Aa.shutdown(),s.Va.set("Unknown")})(this.remoteStore),(e=this.datastore)==null||e.terminate(),(t=this.eventManager)==null||t.terminate()}}ga.provider={build:()=>new ga};/**
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
 */class Iu{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):ft("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
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
 */const Yn="FirestoreClient";class NI{constructor(e,t,r,i,s){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this._databaseInfo=i,this.user=st.UNAUTHENTICATED,this.clientId=Ul.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,(async o=>{q(Yn,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o})),this.appCheckCredentials.start(r,(o=>(q(Yn,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Zt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=yu(t,"Failed to shutdown persistence");e.reject(r)}})),e.promise}}async function Dc(n,e){n.asyncQueue.verifyOperationInProgress(),q(Yn,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener((async i=>{r.isEqual(i)||(await Dg(e.localStore,i),r=i)})),e.persistence.setDatabaseDeletedListener((()=>n.terminate())),n._offlineComponents=e}async function If(n,e){n.asyncQueue.verifyOperationInProgress();const t=await FI(n);q(Yn,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener((r=>_f(e.remoteStore,r))),n.setAppCheckTokenChangeListener(((r,i)=>_f(e.remoteStore,i))),n._onlineComponents=e}async function FI(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){q(Yn,"Using user provided OfflineComponentProvider");try{await Dc(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(i){return i.name==="FirebaseError"?i.code===$.FAILED_PRECONDITION||i.code===$.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11})(t))throw t;jn("Error using user provided cache. Falling back to memory cache: "+t),await Dc(n,new Ls)}}else q(Yn,"Using default OfflineComponentProvider"),await Dc(n,new CI(void 0));return n._offlineComponents}async function Xg(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(q(Yn,"Using user provided OnlineComponentProvider"),await If(n,n._uninitializedComponentsProvider._online)):(q(Yn,"Using default OnlineComponentProvider"),await If(n,new ga))),n._onlineComponents}function MI(n){return Xg(n).then((e=>e.syncEngine))}async function ya(n){const e=await Xg(n),t=e.eventManager;return t.onListen=wI.bind(null,e.syncEngine),t.onUnlisten=vI.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=TI.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=bI.bind(null,e.syncEngine),t}function OI(n,e,t,r){const i=new Iu(r),s=new Eu(e,i,t);return n.asyncQueue.enqueueAndForget((async()=>_u(await ya(n),s))),()=>{i.Nu(),n.asyncQueue.enqueueAndForget((async()=>wu(await ya(n),s)))}}function LI(n,e,t={}){const r=new Zt;return n.asyncQueue.enqueueAndForget((async()=>(function(s,o,a,l,u){const d=new Iu({next:_=>{d.Nu(),o.enqueueAndForget((()=>wu(s,f)));const I=_.docs.has(a);!I&&_.fromCache?u.reject(new W($.UNAVAILABLE,"Failed to get document because the client is offline.")):I&&_.fromCache&&l&&l.source==="server"?u.reject(new W($.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(_)},error:_=>u.reject(_)}),f=new Eu(Ys(a.path),d,{includeMetadataChanges:!0,qa:!0});return _u(s,f)})(await ya(n),n.asyncQueue,e,t,r))),r.promise}function VI(n,e,t={}){const r=new Zt;return n.asyncQueue.enqueueAndForget((async()=>(function(s,o,a,l,u){const d=new Iu({next:_=>{d.Nu(),o.enqueueAndForget((()=>wu(s,f))),_.fromCache&&l.source==="server"?u.reject(new W($.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(_)},error:_=>u.reject(_)}),f=new Eu(a,d,{includeMetadataChanges:!0,qa:!0});return _u(s,f)})(await ya(n),n.asyncQueue,e,t,r))),r.promise}function $I(n,e){const t=new Zt;return n.asyncQueue.enqueueAndForget((async()=>II(await MI(n),e,t))),t.promise}/**
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
 */function Zg(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */const UI="ComponentProvider",Sf=new Map;function BI(n,e,t,r,i){return new lv(n,e,t,i.host,i.ssl,i.experimentalForceLongPolling,i.experimentalAutoDetectLongPolling,Zg(i.experimentalLongPollingOptions),i.useFetchStreams,i.isUsingEmulator,r)}/**
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
 */const ey="firestore.googleapis.com",Af=!0;class Rf{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new W($.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=ey,this.ssl=Af}else this.host=e.host,this.ssl=e.ssl??Af;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Eg;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<mb)throw new W($.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}xE("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Zg(e.experimentalLongPollingOptions??{}),(function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new W($.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new W($.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new W($.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(r,i){return r.timeoutSeconds===i.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Qa{constructor(e,t,r,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Rf({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new W($.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new W($.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Rf(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(r){if(!r)return new wE;switch(r.type){case"firstParty":return new bE(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new W($.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const r=Sf.get(t);r&&(q(UI,"Removing Datastore"),Sf.delete(t),r.terminate())})(this),Promise.resolve()}}function qI(n,e,t,r={}){var u;n=kt(n,Qa);const i=Vr(e),s=n._getSettings(),o={...s,emulatorOptions:n._getEmulatorOptions()},a=`${e}:${t}`;i&&Al(`https://${a}`),s.host!==ey&&s.host!==a&&jn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const l={...s,host:a,ssl:i,emulatorOptions:r};if(!Rr(l,o)&&(n._setSettings(l),r.mockUserToken)){let d,f;if(typeof r.mockUserToken=="string")d=r.mockUserToken,f=st.MOCK_USER;else{d=om(r.mockUserToken,(u=n._app)==null?void 0:u.options.projectId);const _=r.mockUserToken.sub||r.mockUserToken.user_id;if(!_)throw new W($.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");f=new st(_)}n._authCredentials=new TE(new op(d,f))}}/**
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
 */class to{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new to(this.firestore,e,this._query)}}class Ye{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new qn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ye(this.firestore,e,this._key)}toJSON(){return{type:Ye._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,r){if(Hs(t,Ye._jsonSchema))return new Ye(e,r||null,new H(xe.fromString(t.referencePath)))}}Ye._jsonSchemaVersion="firestore/documentReference/1.0",Ye._jsonSchema={type:Ke("string",Ye._jsonSchemaVersion),referencePath:Ke("string")};class qn extends to{constructor(e,t,r){super(e,t,Ys(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ye(this.firestore,null,new H(e))}withConverter(e){return new qn(this.firestore,e,this._path)}}function Pf(n,e,...t){if(n=Qe(n),cp("collection","path",e),n instanceof Qa){const r=xe.fromString(e,...t);return gh(r),new qn(n,null,r)}{if(!(n instanceof Ye||n instanceof qn))throw new W($.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(xe.fromString(e,...t));return gh(r),new qn(n.firestore,null,r)}}function rt(n,e,...t){if(n=Qe(n),arguments.length===1&&(e=Ul.newId()),cp("doc","path",e),n instanceof Qa){const r=xe.fromString(e,...t);return ph(r),new Ye(n,null,new H(r))}{if(!(n instanceof Ye||n instanceof qn))throw new W($.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(xe.fromString(e,...t));return ph(r),new Ye(n.firestore,n instanceof qn?n.converter:null,new H(r))}}/**
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
 */const xf="AsyncQueue";class kf{constructor(e=Promise.resolve()){this.Yu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new Mg(this,"async_queue_retry"),this._c=()=>{const r=jo();r&&q(xf,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const t=jo();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=jo();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const t=new Zt;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Yu.push(e),this.lc())))}async lc(){if(this.Yu.length!==0){try{await this.Yu[0](),this.Yu.shift(),this.M_.reset()}catch(e){if(!er(e))throw e;q(xf,"Operation failed with retryable error: "+e)}this.Yu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const t=this.ac.then((()=>(this.rc=!0,e().catch((r=>{throw this.nc=r,this.rc=!1,ft("INTERNAL UNHANDLED ERROR: ",Cf(r)),r})).then((r=>(this.rc=!1,r))))));return this.ac=t,t}enqueueAfterDelay(e,t,r){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const i=gu.createAndSchedule(this,e,t,r,(s=>this.hc(s)));return this.tc.push(i),i}uc(){this.nc&&ee(47125,{Pc:Cf(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ec(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ic(e){return this.Tc().then((()=>{this.tc.sort(((t,r)=>t.targetTimeMs-r.targetTimeMs));for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()}))}Rc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function Cf(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}class Qn extends Qa{constructor(e,t,r,i){super(e,t,r,i),this.type="firestore",this._queue=new kf,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new kf(e),this._firestoreClient=void 0,await e}}}function zI(n,e){const t=typeof n=="object"?n:Ra(),r=typeof n=="string"?n:sa,i=Aa(t,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=rm("firestore");s&&qI(i,...s)}return i}function Ja(n){if(n._terminated)throw new W($.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||ty(n),n._firestoreClient}function ty(n){var r,i,s,o;const e=n._freezeSettings(),t=BI(n._databaseId,((r=n._app)==null?void 0:r.options.appId)||"",n._persistenceKey,(i=n._app)==null?void 0:i.options.apiKey,e);n._componentsProvider||(s=e.localCache)!=null&&s._offlineComponentProvider&&((o=e.localCache)!=null&&o._onlineComponentProvider)&&(n._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),n._firestoreClient=new NI(n._authCredentials,n._appCheckCredentials,n._queue,t,n._componentsProvider&&(function(l){const u=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(u),_online:u}})(n._componentsProvider))}function GI(n,e){jn("enableIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const t=n._freezeSettings();return jI(n,ga.provider,{build:r=>new DI(r,t.cacheSizeBytes,e==null?void 0:e.forceOwnership)}),Promise.resolve()}function jI(n,e,t){if((n=kt(n,Qn))._firestoreClient||n._terminated)throw new W($.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.");if(n._componentsProvider||n._getSettings().localCache)throw new W($.FAILED_PRECONDITION,"SDK cache is already specified.");n._componentsProvider={_online:e,_offline:t},ty(n)}/**
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
 */class Rt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Rt(Je.fromBase64String(e))}catch(t){throw new W($.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Rt(Je.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Rt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Hs(e,Rt._jsonSchema))return Rt.fromBase64String(e.bytes)}}Rt._jsonSchemaVersion="firestore/bytes/1.0",Rt._jsonSchema={type:Ke("string",Rt._jsonSchemaVersion),bytes:Ke("string")};/**
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
 */class ny{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new W($.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ze(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Su{constructor(e){this._methodName=e}}/**
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
 */class en{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new W($.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new W($.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return le(this._lat,e._lat)||le(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:en._jsonSchemaVersion}}static fromJSON(e){if(Hs(e,en._jsonSchema))return new en(e.latitude,e.longitude)}}en._jsonSchemaVersion="firestore/geoPoint/1.0",en._jsonSchema={type:Ke("string",en._jsonSchemaVersion),latitude:Ke("number"),longitude:Ke("number")};/**
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
 */class $t{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0})(this._values,e._values)}toJSON(){return{type:$t._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Hs(e,$t._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new $t(e.vectorValues);throw new W($.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}$t._jsonSchemaVersion="firestore/vectorValue/1.0",$t._jsonSchema={type:Ke("string",$t._jsonSchemaVersion),vectorValues:Ke("object")};/**
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
 */const HI=/^__.*__$/;class WI{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new tr(e,this.data,this.fieldMask,t,this.fieldTransforms):new Ci(e,this.data,t,this.fieldTransforms)}}function ry(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ee(40011,{dataSource:n})}}class Au{constructor(e,t,r,i,s,o){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Ac(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}i(e){return new Au({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}dc(e){var i;const t=(i=this.path)==null?void 0:i.child(e),r=this.i({path:t,arrayElement:!1});return r.mc(e),r}fc(e){var i;const t=(i=this.path)==null?void 0:i.child(e),r=this.i({path:t,arrayElement:!1});return r.Ac(),r}gc(e){return this.i({path:void 0,arrayElement:!0})}yc(e){return _a(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.mc(this.path.get(e))}mc(e){if(e.length===0)throw this.yc("Document fields must not be empty");if(ry(this.dataSource)&&HI.test(e))throw this.yc('Document fields cannot begin and end with "__"')}}class KI{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||Ka(e)}I(e,t,r,i=!1){return new Au({dataSource:e,methodName:t,targetDoc:r,path:ze.emptyPath(),arrayElement:!1,hasConverter:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function YI(n){const e=n._freezeSettings(),t=Ka(n._databaseId);return new KI(n._databaseId,!!e.ignoreUndefinedProperties,t)}function QI(n,e,t,r,i,s={}){const o=n.I(s.merge||s.mergeFields?2:0,e,t,i);ay("Data must be an object, but it was:",o,r);const a=sy(r,o);let l,u;if(s.merge)l=new xt(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const d=[];for(const f of s.mergeFields){const _=Pu(e,f,t);if(!o.contains(_))throw new W($.INVALID_ARGUMENT,`Field '${_}' is specified in your field mask but missing from your input data.`);ZI(d,_)||d.push(_)}l=new xt(d),u=o.fieldTransforms.filter((f=>l.covers(f.field)))}else l=null,u=o.fieldTransforms;return new WI(new _t(a),l,u)}class Ru extends Su{_toFieldTransform(e){return new Jp(e.path,new bi)}isEqual(e){return e instanceof Ru}}function iy(n,e){if(oy(n=Qe(n)))return ay("Unsupported field value:",e,n),sy(n,e);if(n instanceof Su)return(function(r,i){if(!ry(i.dataSource))throw i.yc(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.yc(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)})(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.yc("Nested arrays are not supported");return(function(r,i){const s=[];let o=0;for(const a of r){let l=iy(a,i.gc(o));l==null&&(l={nullValue:"NULL_VALUE"}),s.push(l),o++}return{arrayValue:{values:s}}})(n,e)}return(function(r,i){if((r=Qe(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Dv(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=Ce.fromDate(r);return{timestampValue:Ai(i.serializer,s)}}if(r instanceof Ce){const s=new Ce(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Ai(i.serializer,s)}}if(r instanceof en)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Rt)return{bytesValue:ig(i.serializer,r._byteString)};if(r instanceof Ye){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.yc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:iu(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof $t)return(function(o,a){const l=o instanceof $t?o.toArray():o;return{mapValue:{fields:{[Yl]:{stringValue:Ql},[wi]:{arrayValue:{values:l.map((d=>{if(typeof d!="number")throw a.yc("VectorValues must only contain numeric values.");return Zl(a.serializer,d)}))}}}}}})(r,i);if(pg(r))return r._toProto(i.serializer);throw i.yc(`Unsupported field value: ${Bl(r)}`)})(n,e)}function sy(n,e){const t={};return Ip(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Br(n,((r,i)=>{const s=iy(i,e.dc(r));s!=null&&(t[r]=s)})),{mapValue:{fields:t}}}function oy(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof Ce||n instanceof en||n instanceof Rt||n instanceof Ye||n instanceof Su||n instanceof $t||pg(n))}function ay(n,e,t){if(!oy(t)||!lp(t)){const r=Bl(t);throw r==="an object"?e.yc(n+" a custom object"):e.yc(n+" "+r)}}function Pu(n,e,t){if((e=Qe(e))instanceof ny)return e._internalPath;if(typeof e=="string")return XI(n,e);throw _a("Field path arguments must be of type string or ",n,!1,void 0,t)}const JI=new RegExp("[~\\*/\\[\\]]");function XI(n,e,t){if(e.search(JI)>=0)throw _a(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new ny(...e.split("."))._internalPath}catch{throw _a(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function _a(n,e,t,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;t&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new W($.INVALID_ARGUMENT,a+n+l)}function ZI(n,e){return n.some((t=>t.isEqual(e)))}/**
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
 */class eS{convertValue(e,t="none"){switch(Hn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Be(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(gn(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw ee(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return Br(e,((i,s)=>{r[i]=this.convertValue(s,t)})),r}convertVectorValue(e){var r,i,s;const t=(s=(i=(r=e.fields)==null?void 0:r[wi].arrayValue)==null?void 0:i.values)==null?void 0:s.map((o=>Be(o.doubleValue)));return new $t(t)}convertGeoPoint(e){return new en(Be(e.latitude),Be(e.longitude))}convertArray(e,t){return(e.values||[]).map((r=>this.convertValue(r,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const r=La(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(Ns(e));default:return null}}convertTimestamp(e){const t=pn(e);return new Ce(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=xe.fromString(e);ne(mg(r),9688,{name:e});const i=new Cr(r.get(1),r.get(3)),s=new H(r.popFirst(5));return i.isEqual(t)||ft(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),s}}/**
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
 */class xu extends eS{constructor(e){super(),this.firestore=e}convertBytes(e){return new Rt(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Ye(this.firestore,null,t)}}function Gt(){return new Ru("serverTimestamp")}const Df="@firebase/firestore",Nf="4.14.0";/**
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
 */function Ff(n){return(function(t,r){if(typeof t!="object"||t===null)return!1;const i=t;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1})(n,["next","error","complete"])}/**
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
 */class cy{constructor(e,t,r,i,s){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Ye(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new tS(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return((e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const t=this._document.data.field(Pu("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class tS extends cy{data(){return super.data()}}/**
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
 */function ly(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new W($.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}function nS(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}class hs{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Ir extends cy{constructor(e,t,r,i,s,o){super(e,t,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Ho(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(Pu("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new W($.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=Ir._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}Ir._jsonSchemaVersion="firestore/documentSnapshot/1.0",Ir._jsonSchema={type:Ke("string",Ir._jsonSchemaVersion),bundleSource:Ke("string","DocumentSnapshot"),bundleName:Ke("string"),bundle:Ke("string")};class Ho extends Ir{data(e={}){return super.data(e)}}class Sr{constructor(e,t,r,i){this._firestore=e,this._userDataWriter=t,this._snapshot=i,this.metadata=new hs(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((r=>{e.call(t,new Ho(this._firestore,this._userDataWriter,r.key,r,new hs(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new W($.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map((a=>{const l=new Ho(i._firestore,i._userDataWriter,a.doc.key,a.doc,new hs(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}}))}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter((a=>s||a.type!==3)).map((a=>{const l=new Ho(i._firestore,i._userDataWriter,a.doc.key,a.doc,new hs(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let u=-1,d=-1;return a.type!==0&&(u=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),d=o.indexOf(a.doc.key)),{type:rS(a.type),doc:l,oldIndex:u,newIndex:d}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new W($.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Sr._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Ul.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],r=[],i=[];return this.docs.forEach((s=>{s._document!==null&&(t.push(s._document),r.push(this._userDataWriter.convertObjectMap(s._document.data.value.mapValue.fields,"previous")),i.push(s.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function rS(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ee(61501,{type:n})}}/**
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
 */Sr._jsonSchemaVersion="firestore/querySnapshot/1.0",Sr._jsonSchema={type:Ke("string",Sr._jsonSchemaVersion),bundleSource:Ke("string","QuerySnapshot"),bundleName:Ke("string"),bundle:Ke("string")};/**
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
 */function bo(n){n=kt(n,Ye);const e=kt(n.firestore,Qn),t=Ja(e);return LI(t,n._key).then((r=>dy(e,n,r)))}function iS(n){n=kt(n,to);const e=kt(n.firestore,Qn),t=Ja(e),r=new xu(e);return ly(n._query),VI(t,n._query).then((i=>new Sr(e,r,n,i)))}function jt(n,e,t){n=kt(n,Ye);const r=kt(n.firestore,Qn),i=nS(n.converter,e,t),s=YI(r);return uy(r,[QI(s,"setDoc",n._key,i,n.converter!==null,t).toMutation(n._key,wt.none())])}function sS(n){return uy(kt(n.firestore,Qn),[new za(n._key,wt.none())])}function Io(n,...e){var u,d,f;n=Qe(n);let t={includeMetadataChanges:!1,source:"default"},r=0;typeof e[r]!="object"||Ff(e[r])||(t=e[r++]);const i={includeMetadataChanges:t.includeMetadataChanges,source:t.source};if(Ff(e[r])){const _=e[r];e[r]=(u=_.next)==null?void 0:u.bind(_),e[r+1]=(d=_.error)==null?void 0:d.bind(_),e[r+2]=(f=_.complete)==null?void 0:f.bind(_)}let s,o,a;if(n instanceof Ye)o=kt(n.firestore,Qn),a=Ys(n._key.path),s={next:_=>{e[r]&&e[r](dy(o,n,_))},error:e[r+1],complete:e[r+2]};else{const _=kt(n,to);o=kt(_.firestore,Qn),a=_._query;const I=new xu(o);s={next:w=>{e[r]&&e[r](new Sr(o,I,_,w))},error:e[r+1],complete:e[r+2]},ly(n._query)}const l=Ja(o);return OI(l,a,i,s)}function uy(n,e){const t=Ja(n);return $I(t,e)}function dy(n,e,t){const r=t.docs.get(e._key),i=new xu(n);return new Ir(n,i,e._key,r,new hs(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){_E($r),Pr(new Gn("firestore",((r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new Qn(new EE(r.getProvider("auth-internal")),new IE(o,r.getProvider("app-check-internal")),uv(o,i),o);return s={useFetchStreams:t,...s},a._setSettings(s),a}),"PUBLIC").setMultipleInstances(!0)),Jt(Df,Nf,e),Jt(Df,Nf,"esm2020")})();/**
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
 */const hy="firebasestorage.googleapis.com",fy="storageBucket",oS=120*1e3,aS=600*1e3,cS=1e3;/**
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
 */class Ge extends nn{constructor(e,t,r=0){super(Nc(e),`Firebase Storage: ${t} (${Nc(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Ge.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Nc(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Ue;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Ue||(Ue={}));function Nc(n){return"storage/"+n}function ku(){const n="An unknown error occurred, please check the error payload for server response.";return new Ge(Ue.UNKNOWN,n)}function lS(n){return new Ge(Ue.OBJECT_NOT_FOUND,"Object '"+n+"' does not exist.")}function uS(n){return new Ge(Ue.QUOTA_EXCEEDED,"Quota for bucket '"+n+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function dS(){const n="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Ge(Ue.UNAUTHENTICATED,n)}function hS(){return new Ge(Ue.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function fS(n){return new Ge(Ue.UNAUTHORIZED,"User does not have permission to access '"+n+"'.")}function my(){return new Ge(Ue.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function py(){return new Ge(Ue.CANCELED,"User canceled the upload/download.")}function mS(n){return new Ge(Ue.INVALID_URL,"Invalid URL '"+n+"'.")}function pS(n){return new Ge(Ue.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function gS(){return new Ge(Ue.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+fy+"' property when initializing the app?")}function gy(){return new Ge(Ue.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function yS(){return new Ge(Ue.SERVER_FILE_WRONG_SIZE,"Server recorded incorrect upload file size, please retry the upload.")}function _S(){return new Ge(Ue.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function wS(n){return new Ge(Ue.UNSUPPORTED_ENVIRONMENT,`${n} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function vl(n){return new Ge(Ue.INVALID_ARGUMENT,n)}function yy(){return new Ge(Ue.APP_DELETED,"The Firebase app was deleted.")}function TS(n){return new Ge(Ue.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function vs(n,e){return new Ge(Ue.INVALID_FORMAT,"String does not match format '"+n+"': "+e)}function ns(n){throw new Ge(Ue.INTERNAL_ERROR,"Internal error: "+n)}/**
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
 */class bt{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let r;try{r=bt.makeFromUrl(e,t)}catch{return new bt(e,"")}if(r.path==="")return r;throw pS(e)}static makeFromUrl(e,t){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(C){C.path.charAt(C.path.length-1)==="/"&&(C.path_=C.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),l={bucket:1,path:3};function u(C){C.path_=decodeURIComponent(C.path)}const d="v[A-Za-z0-9_]+",f=t.replace(/[.]/g,"\\."),_="(/([^?#]*).*)?$",I=new RegExp(`^https?://${f}/${d}/b/${i}/o${_}`,"i"),w={bucket:1,path:3},S=t===hy?"(?:storage.googleapis.com|storage.cloud.google.com)":t,P="([^?#]*)",F=new RegExp(`^https?://${S}/${i}/${P}`,"i"),k=[{regex:a,indices:l,postModify:s},{regex:I,indices:w,postModify:u},{regex:F,indices:{bucket:1,path:2},postModify:u}];for(let C=0;C<k.length;C++){const L=k[C],V=L.regex.exec(e);if(V){const b=V[L.indices.bucket];let g=V[L.indices.path];g||(g=""),r=new bt(b,g),L.postModify(r);break}}if(r==null)throw mS(e);return r}}class ES{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function vS(n,e,t){let r=1,i=null,s=null,o=!1,a=0;function l(){return a===2}let u=!1;function d(...P){u||(u=!0,e.apply(null,P))}function f(P){i=setTimeout(()=>{i=null,n(I,l())},P)}function _(){s&&clearTimeout(s)}function I(P,...F){if(u){_();return}if(P){_(),d.call(null,P,...F);return}if(l()||o){_(),d.call(null,P,...F);return}r<64&&(r*=2);let k;a===1?(a=2,k=0):k=(r+Math.random())*1e3,f(k)}let w=!1;function S(P){w||(w=!0,_(),!u&&(i!==null?(P||(a=2),clearTimeout(i),f(0)):P||(a=1)))}return f(0),s=setTimeout(()=>{o=!0,S(!0)},t),S}function bS(n){n(!1)}/**
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
 */function IS(n){return n!==void 0}function SS(n){return typeof n=="function"}function AS(n){return typeof n=="object"&&!Array.isArray(n)}function Xa(n){return typeof n=="string"||n instanceof String}function Mf(n){return Cu()&&n instanceof Blob}function Cu(){return typeof Blob<"u"}function Of(n,e,t,r){if(r<e)throw vl(`Invalid value for '${n}'. Expected ${e} or greater.`);if(r>t)throw vl(`Invalid value for '${n}'. Expected ${t} or less.`)}/**
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
 */function Ni(n,e,t){let r=e;return t==null&&(r=`https://${e}`),`${t}://${r}/v0${n}`}function _y(n){const e=encodeURIComponent;let t="?";for(const r in n)if(n.hasOwnProperty(r)){const i=e(r)+"="+e(n[r]);t=t+i+"&"}return t=t.slice(0,-1),t}var Ar;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(Ar||(Ar={}));/**
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
 */function wy(n,e){const t=n>=500&&n<600,i=[408,429].indexOf(n)!==-1,s=e.indexOf(n)!==-1;return t||i||s}/**
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
 */class RS{constructor(e,t,r,i,s,o,a,l,u,d,f,_=!0,I=!1){this.url_=e,this.method_=t,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=u,this.progressCallback_=d,this.connectionFactory_=f,this.retry=_,this.isUsingEmulator=I,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((w,S)=>{this.resolve_=w,this.reject_=S,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new So(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const l=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,u)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===Ar.NO_ERROR,l=s.getStatus();if(!a||wy(l,this.additionalRetryCodes_)&&this.retry){const d=s.getErrorCode()===Ar.ABORT;r(!1,new So(!1,null,d));return}const u=this.successCodes_.indexOf(l)!==-1;r(!0,new So(u,s))})},t=(r,i)=>{const s=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());IS(l)?s(l):s()}catch(l){o(l)}else if(a!==null){const l=ku();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(i.canceled){const l=this.appDelete_?yy():py();o(l)}else{const l=my();o(l)}};this.canceled_?t(!1,new So(!1,null,!0)):this.backoffId_=vS(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&bS(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class So{constructor(e,t,r){this.wasSuccessCode=e,this.connection=t,this.canceled=!!r}}function PS(n,e){e!==null&&e.length>0&&(n.Authorization="Firebase "+e)}function xS(n,e){n["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function kS(n,e){e&&(n["X-Firebase-GMPID"]=e)}function CS(n,e){e!==null&&(n["X-Firebase-AppCheck"]=e)}function DS(n,e,t,r,i,s,o=!0,a=!1){const l=_y(n.urlParams),u=n.url+l,d=Object.assign({},n.headers);return kS(d,e),PS(d,t),xS(d,s),CS(d,r),new RS(u,n.method,d,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,i,o,a)}/**
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
 */function NS(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function FS(...n){const e=NS();if(e!==void 0){const t=new e;for(let r=0;r<n.length;r++)t.append(n[r]);return t.getBlob()}else{if(Cu())return new Blob(n);throw new Ge(Ue.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function MS(n,e,t){return n.webkitSlice?n.webkitSlice(e,t):n.mozSlice?n.mozSlice(e,t):n.slice?n.slice(e,t):null}/**
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
 */function OS(n){if(typeof atob>"u")throw wS("base-64");return atob(n)}/**
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
 */const Qt={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Fc{constructor(e,t){this.data=e,this.contentType=t||null}}function LS(n,e){switch(n){case Qt.RAW:return new Fc(Ty(e));case Qt.BASE64:case Qt.BASE64URL:return new Fc(Ey(n,e));case Qt.DATA_URL:return new Fc($S(e),US(e))}throw ku()}function Ty(n){const e=[];for(let t=0;t<n.length;t++){let r=n.charCodeAt(t);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(t<n.length-1&&(n.charCodeAt(t+1)&64512)===56320))e.push(239,191,189);else{const s=r,o=n.charCodeAt(++t);r=65536|(s&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function VS(n){let e;try{e=decodeURIComponent(n)}catch{throw vs(Qt.DATA_URL,"Malformed data URL.")}return Ty(e)}function Ey(n,e){switch(n){case Qt.BASE64:{const i=e.indexOf("-")!==-1,s=e.indexOf("_")!==-1;if(i||s)throw vs(n,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case Qt.BASE64URL:{const i=e.indexOf("+")!==-1,s=e.indexOf("/")!==-1;if(i||s)throw vs(n,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let t;try{t=OS(e)}catch(i){throw i.message.includes("polyfill")?i:vs(n,"Invalid character found")}const r=new Uint8Array(t.length);for(let i=0;i<t.length;i++)r[i]=t.charCodeAt(i);return r}class vy{constructor(e){this.base64=!1,this.contentType=null;const t=e.match(/^data:([^,]+)?,/);if(t===null)throw vs(Qt.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=t[1]||null;r!=null&&(this.base64=BS(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function $S(n){const e=new vy(n);return e.base64?Ey(Qt.BASE64,e.rest):VS(e.rest)}function US(n){return new vy(n).contentType}function BS(n,e){return n.length>=e.length?n.substring(n.length-e.length)===e:!1}/**
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
 */class Mn{constructor(e,t){let r=0,i="";Mf(e)?(this.data_=e,r=e.size,i=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,t){if(Mf(this.data_)){const r=this.data_,i=MS(r,e,t);return i===null?null:new Mn(i)}else{const r=new Uint8Array(this.data_.buffer,e,t-e);return new Mn(r,!0)}}static getBlob(...e){if(Cu()){const t=e.map(r=>r instanceof Mn?r.data_:r);return new Mn(FS.apply(null,t))}else{const t=e.map(o=>Xa(o)?LS(Qt.RAW,o).data:o.data_);let r=0;t.forEach(o=>{r+=o.byteLength});const i=new Uint8Array(r);let s=0;return t.forEach(o=>{for(let a=0;a<o.length;a++)i[s++]=o[a]}),new Mn(i,!0)}}uploadData(){return this.data_}}/**
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
 */function by(n){let e;try{e=JSON.parse(n)}catch{return null}return AS(e)?e:null}/**
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
 */function qS(n){if(n.length===0)return null;const e=n.lastIndexOf("/");return e===-1?"":n.slice(0,e)}function zS(n,e){const t=e.split("/").filter(r=>r.length>0).join("/");return n.length===0?t:n+"/"+t}function Iy(n){const e=n.lastIndexOf("/",n.length-2);return e===-1?n:n.slice(e+1)}/**
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
 */function GS(n,e){return e}class ht{constructor(e,t,r,i){this.server=e,this.local=t||e,this.writable=!!r,this.xform=i||GS}}let Ao=null;function jS(n){return!Xa(n)||n.length<2?n:Iy(n)}function Sy(){if(Ao)return Ao;const n=[];n.push(new ht("bucket")),n.push(new ht("generation")),n.push(new ht("metageneration")),n.push(new ht("name","fullPath",!0));function e(s,o){return jS(o)}const t=new ht("name");t.xform=e,n.push(t);function r(s,o){return o!==void 0?Number(o):o}const i=new ht("size");return i.xform=r,n.push(i),n.push(new ht("timeCreated")),n.push(new ht("updated")),n.push(new ht("md5Hash",null,!0)),n.push(new ht("cacheControl",null,!0)),n.push(new ht("contentDisposition",null,!0)),n.push(new ht("contentEncoding",null,!0)),n.push(new ht("contentLanguage",null,!0)),n.push(new ht("contentType",null,!0)),n.push(new ht("metadata","customMetadata",!0)),Ao=n,Ao}function HS(n,e){function t(){const r=n.bucket,i=n.fullPath,s=new bt(r,i);return e._makeStorageReference(s)}Object.defineProperty(n,"ref",{get:t})}function WS(n,e,t){const r={};r.type="file";const i=t.length;for(let s=0;s<i;s++){const o=t[s];r[o.local]=o.xform(r,e[o.server])}return HS(r,n),r}function Ay(n,e,t){const r=by(e);return r===null?null:WS(n,r,t)}function KS(n,e,t,r){const i=by(e);if(i===null||!Xa(i.downloadTokens))return null;const s=i.downloadTokens;if(s.length===0)return null;const o=encodeURIComponent;return s.split(",").map(u=>{const d=n.bucket,f=n.fullPath,_="/b/"+o(d)+"/o/"+o(f),I=Ni(_,t,r),w=_y({alt:"media",token:u});return I+w})[0]}function Ry(n,e){const t={},r=e.length;for(let i=0;i<r;i++){const s=e[i];s.writable&&(t[s.server]=n[s.local])}return JSON.stringify(t)}class zr{constructor(e,t,r,i){this.url=e,this.method=t,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function dn(n){if(!n)throw ku()}function Du(n,e){function t(r,i){const s=Ay(n,i,e);return dn(s!==null),s}return t}function YS(n,e){function t(r,i){const s=Ay(n,i,e);return dn(s!==null),KS(s,i,n.host,n._protocol)}return t}function no(n){function e(t,r){let i;return t.getStatus()===401?t.getErrorText().includes("Firebase App Check token is invalid")?i=hS():i=dS():t.getStatus()===402?i=uS(n.bucket):t.getStatus()===403?i=fS(n.path):i=r,i.status=t.getStatus(),i.serverResponse=r.serverResponse,i}return e}function Nu(n){const e=no(n);function t(r,i){let s=e(r,i);return r.getStatus()===404&&(s=lS(n.path)),s.serverResponse=i.serverResponse,s}return t}function QS(n,e,t){const r=e.fullServerUrl(),i=Ni(r,n.host,n._protocol),s="GET",o=n.maxOperationRetryTime,a=new zr(i,s,Du(n,t),o);return a.errorHandler=Nu(e),a}function JS(n,e,t){const r=e.fullServerUrl(),i=Ni(r,n.host,n._protocol),s="GET",o=n.maxOperationRetryTime,a=new zr(i,s,YS(n,t),o);return a.errorHandler=Nu(e),a}function XS(n,e){const t=e.fullServerUrl(),r=Ni(t,n.host,n._protocol),i="DELETE",s=n.maxOperationRetryTime;function o(l,u){}const a=new zr(r,i,o,s);return a.successCodes=[200,204],a.errorHandler=Nu(e),a}function ZS(n,e){return n&&n.contentType||e&&e.type()||"application/octet-stream"}function Py(n,e,t){const r=Object.assign({},t);return r.fullPath=n.path,r.size=e.size(),r.contentType||(r.contentType=ZS(null,e)),r}function eA(n,e,t,r,i){const s=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let k="";for(let C=0;C<2;C++)k=k+Math.random().toString().slice(2);return k}const l=a();o["Content-Type"]="multipart/related; boundary="+l;const u=Py(e,r,i),d=Ry(u,t),f="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+d+`\r
--`+l+`\r
Content-Type: `+u.contentType+`\r
\r
`,_=`\r
--`+l+"--",I=Mn.getBlob(f,r,_);if(I===null)throw gy();const w={name:u.fullPath},S=Ni(s,n.host,n._protocol),P="POST",F=n.maxUploadRetryTime,x=new zr(S,P,Du(n,t),F);return x.urlParams=w,x.headers=o,x.body=I.uploadData(),x.errorHandler=no(e),x}class wa{constructor(e,t,r,i){this.current=e,this.total=t,this.finalized=!!r,this.metadata=i||null}}function Fu(n,e){let t=null;try{t=n.getResponseHeader("X-Goog-Upload-Status")}catch{dn(!1)}return dn(!!t&&(e||["active"]).indexOf(t)!==-1),t}function tA(n,e,t,r,i){const s=e.bucketOnlyServerUrl(),o=Py(e,r,i),a={name:o.fullPath},l=Ni(s,n.host,n._protocol),u="POST",d={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${r.size()}`,"X-Goog-Upload-Header-Content-Type":o.contentType,"Content-Type":"application/json; charset=utf-8"},f=Ry(o,t),_=n.maxUploadRetryTime;function I(S){Fu(S);let P;try{P=S.getResponseHeader("X-Goog-Upload-URL")}catch{dn(!1)}return dn(Xa(P)),P}const w=new zr(l,u,I,_);return w.urlParams=a,w.headers=d,w.body=f,w.errorHandler=no(e),w}function nA(n,e,t,r){const i={"X-Goog-Upload-Command":"query"};function s(u){const d=Fu(u,["active","final"]);let f=null;try{f=u.getResponseHeader("X-Goog-Upload-Size-Received")}catch{dn(!1)}f||dn(!1);const _=Number(f);return dn(!isNaN(_)),new wa(_,r.size(),d==="final")}const o="POST",a=n.maxUploadRetryTime,l=new zr(t,o,s,a);return l.headers=i,l.errorHandler=no(e),l}const Lf=256*1024;function rA(n,e,t,r,i,s,o,a){const l=new wa(0,0);if(o?(l.current=o.current,l.total=o.total):(l.current=0,l.total=r.size()),r.size()!==l.total)throw yS();const u=l.total-l.current;let d=u;i>0&&(d=Math.min(d,i));const f=l.current,_=f+d;let I="";d===0?I="finalize":u===d?I="upload, finalize":I="upload";const w={"X-Goog-Upload-Command":I,"X-Goog-Upload-Offset":`${l.current}`},S=r.slice(f,_);if(S===null)throw gy();function P(C,L){const V=Fu(C,["active","final"]),b=l.current+d,g=r.size();let m;return V==="final"?m=Du(e,s)(C,L):m=null,new wa(b,g,V==="final",m)}const F="POST",x=e.maxUploadRetryTime,k=new zr(t,F,P,x);return k.headers=w,k.body=S.uploadData(),k.progressCallback=a||null,k.errorHandler=no(n),k}const yt={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function Mc(n){switch(n){case"running":case"pausing":case"canceling":return yt.RUNNING;case"paused":return yt.PAUSED;case"success":return yt.SUCCESS;case"canceled":return yt.CANCELED;case"error":return yt.ERROR;default:return yt.ERROR}}/**
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
 */class iA{constructor(e,t,r){if(SS(e)||t!=null||r!=null)this.next=e,this.error=t??void 0,this.complete=r??void 0;else{const s=e;this.next=s.next,this.error=s.error,this.complete=s.complete}}}/**
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
 */function Zr(n){return(...e)=>{Promise.resolve().then(()=>n(...e))}}class sA{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Ar.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Ar.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Ar.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,t,r,i,s){if(this.sent_)throw ns("cannot .send() more than once");if(Vr(e)&&r&&(this.xhr_.withCredentials=!0),this.sent_=!0,this.xhr_.open(t,e,!0),s!==void 0)for(const o in s)s.hasOwnProperty(o)&&this.xhr_.setRequestHeader(o,s[o].toString());return i!==void 0?this.xhr_.send(i):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw ns("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw ns("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw ns("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw ns("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class oA extends sA{initXhr(){this.xhr_.responseType="text"}}function yr(){return new oA}/**
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
 */class aA{isExponentialBackoffExpired(){return this.sleepTime>this.maxSleepTime}constructor(e,t,r=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=e,this._blob=t,this._metadata=r,this._mappings=Sy(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=i=>{if(this._request=void 0,this._chunkMultiplier=1,i._codeEquals(Ue.CANCELED))this._needToFetchStatus=!0,this.completeTransitions_();else{const s=this.isExponentialBackoffExpired();if(wy(i.status,[]))if(s)i=my();else{this.sleepTime=Math.max(this.sleepTime*2,cS),this._needToFetchStatus=!0,this.completeTransitions_();return}this._error=i,this._transition("error")}},this._metadataErrorHandler=i=>{this._request=void 0,i._codeEquals(Ue.CANCELED)?this.completeTransitions_():(this._error=i,this._transition("error"))},this.sleepTime=0,this.maxSleepTime=this._ref.storage.maxUploadRetryTime,this._promise=new Promise((i,s)=>{this._resolve=i,this._reject=s,this._start()}),this._promise.then(null,()=>{})}_makeProgressCallback(){const e=this._transferred;return t=>this._updateProgress(e+t)}_shouldDoResumable(e){return e.size()>256*1024}_start(){this._state==="running"&&this._request===void 0&&(this._resumable?this._uploadUrl===void 0?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this.pendingTimeout=setTimeout(()=>{this.pendingTimeout=void 0,this._continueUpload()},this.sleepTime):this._oneShotUpload())}_resolveToken(e){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then(([t,r])=>{switch(this._state){case"running":e(t,r);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused");break}})}_createResumable(){this._resolveToken((e,t)=>{const r=tA(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),i=this._ref.storage._makeRequest(r,yr,e,t);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._uploadUrl=s,this._needToFetchStatus=!1,this.completeTransitions_()},this._errorHandler)})}_fetchStatus(){const e=this._uploadUrl;this._resolveToken((t,r)=>{const i=nA(this._ref.storage,this._ref._location,e,this._blob),s=this._ref.storage._makeRequest(i,yr,t,r);this._request=s,s.getPromise().then(o=>{o=o,this._request=void 0,this._updateProgress(o.current),this._needToFetchStatus=!1,o.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()},this._errorHandler)})}_continueUpload(){const e=Lf*this._chunkMultiplier,t=new wa(this._transferred,this._blob.size()),r=this._uploadUrl;this._resolveToken((i,s)=>{let o;try{o=rA(this._ref._location,this._ref.storage,r,this._blob,e,this._mappings,t,this._makeProgressCallback())}catch(l){this._error=l,this._transition("error");return}const a=this._ref.storage._makeRequest(o,yr,i,s,!1);this._request=a,a.getPromise().then(l=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(l.current),l.finalized?(this._metadata=l.metadata,this._transition("success")):this.completeTransitions_()},this._errorHandler)})}_increaseMultiplier(){Lf*this._chunkMultiplier*2<32*1024*1024&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken((e,t)=>{const r=QS(this._ref.storage,this._ref._location,this._mappings),i=this._ref.storage._makeRequest(r,yr,e,t);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._metadata=s,this._transition("success")},this._metadataErrorHandler)})}_oneShotUpload(){this._resolveToken((e,t)=>{const r=eA(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),i=this._ref.storage._makeRequest(r,yr,e,t);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._metadata=s,this._updateProgress(this._blob.size()),this._transition("success")},this._errorHandler)})}_updateProgress(e){const t=this._transferred;this._transferred=e,this._transferred!==t&&this._notifyObservers()}_transition(e){if(this._state!==e)switch(e){case"canceling":case"pausing":this._state=e,this._request!==void 0?this._request.cancel():this.pendingTimeout&&(clearTimeout(this.pendingTimeout),this.pendingTimeout=void 0,this.completeTransitions_());break;case"running":const t=this._state==="paused";this._state=e,t&&(this._notifyObservers(),this._start());break;case"paused":this._state=e,this._notifyObservers();break;case"canceled":this._error=py(),this._state=e,this._notifyObservers();break;case"error":this._state=e,this._notifyObservers();break;case"success":this._state=e,this._notifyObservers();break}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start();break}}get snapshot(){const e=Mc(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:e,metadata:this._metadata,task:this,ref:this._ref}}on(e,t,r,i){const s=new iA(t||void 0,r||void 0,i||void 0);return this._addObserver(s),()=>{this._removeObserver(s)}}then(e,t){return this._promise.then(e,t)}catch(e){return this.then(null,e)}_addObserver(e){this._observers.push(e),this._notifyObserver(e)}_removeObserver(e){const t=this._observers.indexOf(e);t!==-1&&this._observers.splice(t,1)}_notifyObservers(){this._finishPromise(),this._observers.slice().forEach(t=>{this._notifyObserver(t)})}_finishPromise(){if(this._resolve!==void 0){let e=!0;switch(Mc(this._state)){case yt.SUCCESS:Zr(this._resolve.bind(null,this.snapshot))();break;case yt.CANCELED:case yt.ERROR:const t=this._reject;Zr(t.bind(null,this._error))();break;default:e=!1;break}e&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(e){switch(Mc(this._state)){case yt.RUNNING:case yt.PAUSED:e.next&&Zr(e.next.bind(e,this.snapshot))();break;case yt.SUCCESS:e.complete&&Zr(e.complete.bind(e))();break;case yt.CANCELED:case yt.ERROR:e.error&&Zr(e.error.bind(e,this._error))();break;default:e.error&&Zr(e.error.bind(e,this._error))()}}resume(){const e=this._state==="paused"||this._state==="pausing";return e&&this._transition("running"),e}pause(){const e=this._state==="running";return e&&this._transition("pausing"),e}cancel(){const e=this._state==="running"||this._state==="pausing";return e&&this._transition("canceling"),e}}/**
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
 */class Lr{constructor(e,t){this._service=e,t instanceof bt?this._location=t:this._location=bt.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new Lr(e,t)}get root(){const e=new bt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Iy(this._location.path)}get storage(){return this._service}get parent(){const e=qS(this._location.path);if(e===null)return null;const t=new bt(this._location.bucket,e);return new Lr(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw TS(e)}}function cA(n,e,t){return n._throwIfRoot("uploadBytesResumable"),new aA(n,new Mn(e),t)}function lA(n){n._throwIfRoot("getDownloadURL");const e=JS(n.storage,n._location,Sy());return n.storage.makeRequestWithTokens(e,yr).then(t=>{if(t===null)throw _S();return t})}function uA(n){n._throwIfRoot("deleteObject");const e=XS(n.storage,n._location);return n.storage.makeRequestWithTokens(e,yr)}function dA(n,e){const t=zS(n._location.path,e),r=new bt(n._location.bucket,t);return new Lr(n.storage,r)}/**
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
 */function hA(n){return/^[A-Za-z]+:\/\//.test(n)}function fA(n,e){return new Lr(n,e)}function xy(n,e){if(n instanceof Mu){const t=n;if(t._bucket==null)throw gS();const r=new Lr(t,t._bucket);return e!=null?xy(r,e):r}else return e!==void 0?dA(n,e):n}function mA(n,e){if(e&&hA(e)){if(n instanceof Mu)return fA(n,e);throw vl("To use ref(service, url), the first argument must be a Storage instance.")}else return xy(n,e)}function Vf(n,e){const t=e==null?void 0:e[fy];return t==null?null:bt.makeFromBucketSpec(t,n)}function pA(n,e,t,r={}){n.host=`${e}:${t}`;const i=Vr(e);i&&Al(`https://${n.host}/b`),n._isUsingEmulator=!0,n._protocol=i?"https":"http";const{mockUserToken:s}=r;s&&(n._overrideAuthToken=typeof s=="string"?s:om(s,n.app.options.projectId))}class Mu{constructor(e,t,r,i,s,o=!1){this.app=e,this._authProvider=t,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._isUsingEmulator=o,this._bucket=null,this._host=hy,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=oS,this._maxUploadRetryTime=aS,this._requests=new Set,i!=null?this._bucket=bt.makeFromBucketSpec(i,this._host):this._bucket=Vf(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=bt.makeFromBucketSpec(this._url,e):this._bucket=Vf(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Of("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Of("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){if(lt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Lr(this,e)}_makeRequest(e,t,r,i,s=!0){if(this._deleted)return new ES(yy());{const o=DS(e,this._appId,r,i,t,this._firebaseVersion,s,this._isUsingEmulator);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,t){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,r,i).getPromise()}}const $f="@firebase/storage",Uf="0.14.2";/**
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
 */const ky="storage";function gA(n,e,t){return n=Qe(n),cA(n,e,t)}function yA(n){return n=Qe(n),lA(n)}function _A(n){return n=Qe(n),uA(n)}function Bf(n,e){return n=Qe(n),mA(n,e)}function wA(n=Ra(),e){n=Qe(n);const r=Aa(n,ky).getImmediate({identifier:e}),i=rm("storage");return i&&TA(r,...i),r}function TA(n,e,t,r={}){pA(n,e,t,r)}function EA(n,{instanceIdentifier:e}){const t=n.getProvider("app").getImmediate(),r=n.getProvider("auth-internal"),i=n.getProvider("app-check-internal");return new Mu(t,r,i,e,$r)}function vA(){Pr(new Gn(ky,EA,"PUBLIC").setMultipleInstances(!0)),Jt($f,Uf,""),Jt($f,Uf,"esm2020")}vA();const bA={apiKey:"AIzaSyAn9rHtNupm6t8q7VfkaLL7ejie732S8lc",authDomain:"gen-lang-client-0940321923.firebaseapp.com",projectId:"gen-lang-client-0940321923",storageBucket:"gen-lang-client-0940321923.firebasestorage.app",messagingSenderId:"259751023246",appId:"1:259751023246:web:1bde2eb99b7bf211b1efdf"};let lr,nt,rs,Ro,is=null;const Fe={isInitialized:!1,init(n=bA){if(this.isInitialized)return{app:lr,auth:nt,db:rs,storage:Ro};let e=n;try{const t=localStorage.getItem("quantedge_firebase_config");if(t){const r=JSON.parse(t);r&&typeof r=="object"&&!Array.isArray(r)&&typeof r.apiKey=="string"&&r.apiKey.trim().length>0&&typeof r.projectId=="string"&&r.projectId.trim().length>0&&(e={apiKey:r.apiKey.trim(),authDomain:typeof r.authDomain=="string"?r.authDomain.trim():"",projectId:r.projectId.trim(),storageBucket:typeof r.storageBucket=="string"?r.storageBucket.trim():"",messagingSenderId:typeof r.messagingSenderId=="string"?r.messagingSenderId.trim():"",appId:typeof r.appId=="string"?r.appId.trim():""})}}catch{console.warn("Failed to parse saved firebase config.")}return zw().length?lr=Ra():lr=fm(e),nt=gE(lr),D0(nt).then(t=>{if(t){const r=Mt.credentialFromResult(t);r&&r.accessToken&&(is=r.accessToken,setTimeout(()=>{window.updateGDriveStatusIndicator&&(window.updateGDriveStatusIndicator(),window.handleGDriveSync&&window.handleGDriveSync())},1e3))}}).catch(t=>{console.error("Redirect login error:",t)}),rs=zI(lr),Ro=wA(lr),GI(rs).catch(t=>{t.code=="failed-precondition"?console.warn("Firebase persistence failed: Multiple tabs open."):t.code=="unimplemented"&&console.warn("Firebase persistence failed: Browser doesn't support it.")}),this.isInitialized=!0,{app:lr,auth:nt,db:rs,storage:Ro}},getAuth(){if(!this.isInitialized)throw new Error("Firebase not initialized");return nt},getDb(){if(!this.isInitialized)throw new Error("Firebase not initialized");return rs},getStorage(){if(!this.isInitialized)throw new Error("Firebase not initialized");return Ro},async login(n,e){if(!nt)throw new Error("Firebase not initialized");return e0(nt,n,e)},async signup(n,e){if(!nt)throw new Error("Firebase not initialized");return ZT(nt,n,e)},async loginAnonymously(){if(!nt)throw new Error("Firebase not initialized");return YT(nt)},async loginWithGoogle(){if(!nt)throw new Error("Firebase not initialized");const n=new Mt;n.addScope("https://www.googleapis.com/auth/drive.file"),n.setCustomParameters({prompt:"consent"});try{const e=await I0(nt,n),t=Mt.credentialFromResult(e);return t&&t.accessToken&&(is=t.accessToken),{user:e.user,accessToken:is}}catch(e){if(console.error("Google Auth failed:",e),e.code==="auth/popup-blocked"||e.code==="auth/unauthorized-domain"){if(window.confirm("Popup login was blocked. Do you want to redirect to the login page?"))return await k0(nt,n),null;throw new Error("Google login blocked. If on GitHub Pages, add your custom Firebase Config in Settings with Authorized Domains.")}throw e}},getWorkspaceAccessToken(){return is},async logout(){if(!nt)throw new Error("Firebase not initialized");return is=null,i0(nt)},onAuthStateChanged(n){return nt?r0(nt,n):()=>{}}};function bl(n){if(n===void 0)return null;if(n===null||typeof n!="object")return n;if(Array.isArray(n))return n.map(t=>t===void 0?null:bl(t));const e={};for(const[t,r]of Object.entries(n))r!==void 0&&(e[t]=bl(r));return e}function Oc(n){var e,t;return!!((e=n==null?void 0:n.telegram)!=null&&e.token&&((t=n==null?void 0:n.telegram)!=null&&t.chatId))}function qf(n,e){const t=n&&typeof n=="object"?n:{},r=e&&typeof e=="object"?e:{},i={...t,...r},s=t.notifications,o=r.notifications,a=Number(t.notificationsUpdatedAt||0),l=Number(r.notificationsUpdatedAt||0);return s&&(!o||Oc(s)&&!Oc(o)||a>l&&Oc(s))?(i.notifications=s,a&&(i.notificationsUpdatedAt=a)):o&&s&&(i.notifications={...s,...o,telegram:{...s.telegram||{},...o.telegram||{}}}),t.githubSync&&(t.githubSync.token||t.githubSync.username)&&(i.githubSync={...r.githubSync||{},...t.githubSync}),i}function zf(n){const e=bl(n);return e&&typeof e=="object"&&e.githubSync&&typeof e.githubSync=="object"&&(e.githubSync={...e.githubSync,token:""}),e}const Wt={isSyncing:!1,unsubscribeTrades:null,unsubscribeStats:null,unsubscribeSettings:null,async init(){try{Fe.init(),this.updateStatusUI("Connected","var(--success)");const n=document.getElementById("auth-section");n&&(n.style.display="block"),Fe.onAuthStateChanged(async e=>{if(e){this.updateAuthUI(e),this.updateStatusUI("Syncing...","var(--warning)");const t=document.getElementById("sync-loading-overlay"),r=document.getElementById("sync-loading-text");try{const i=Fe.getDb(),s=rt(i,`users/${e.uid}/meta/syncInfo`),o=await bo(s);o.exists()&&o.data().lastPushed&&(t&&(t.style.display="flex",r&&(r.innerText="Syncing your data...")),await this.hydrateAppFromFirestore(e.uid)),this.updateStatusUI("Synced ✓","var(--success)")}catch(i){(i.message||String(i)).includes("client is offline")?(console.warn("Client is offline, starting in offline mode."),this.updateStatusUI("Offline Mode","var(--warning)")):(console.error("Hydration failed:",i),this.updateStatusUI("Sync Error","var(--danger)"))}finally{t&&(t.style.display="none"),this.startSync(e.uid)}}else this.updateAuthUI(null),this.stopSync("Connected (Please Login)","var(--warning)")})}catch(n){console.error("Failed to init Firebase",n),this.updateStatusUI("Failed to connect","var(--danger)")}},updateStatusUI(n,e){const t=document.getElementById("firebase-status-text"),r=document.getElementById("firebase-status-indicator");t&&(t.innerText=n),r&&(r.style.background=e);const i=document.getElementById("sidebar-firebase-text"),s=document.getElementById("sidebar-firebase-indicator");i&&(i.innerText=n),s&&(s.style.background=e)},updateAuthUI(n){const e=document.getElementById("auth-logged-out"),t=document.getElementById("auth-logged-in"),r=document.getElementById("auth-user-email");n?(e&&(e.style.display="none"),t&&(t.style.display="block"),r&&(r.innerText=n.isAnonymous?"Anonymous User":n.email)):(e&&(e.style.display="block"),t&&(t.style.display="none"))},async hydrateAppFromFirestore(n){var t;const e=Fe.getDb();try{const r=Pf(e,`users/${n}/trades`),i=await iS(r);if(!i.empty){const s=[];i.forEach(o=>{s.push({...o.data(),id:parseInt(o.id)})}),localStorage.setItem("qe_trades",JSON.stringify(s))}}catch(r){console.warn("Failed to hydrate trades:",r)}try{const r=rt(e,`users/${n}/stats/core`),i=await bo(r);if(i.exists()){const s=i.data(),o={transactions:"qe_transactions",allocations:"qe_allocations",wishlist:"qe_wishlist",investments:"qe_investments",payouts:"qe_payouts",milestones:"qe_milestones",activeTrades:"qe_active_trades",plannedTrades:"qe_planned_trades",backtests:"qe_backtests",planner:"qe_planner",snapshots:"qe_snapshots",scalingMilestones:"qe_scaling_milestones",rebalancerHistory:"qe_rebalancer_history",expenses:"qe_expenses",budgets:"qe_budgets",stocks:"qe_stocks",dividends:"qe_dividends",locks:"qe_locks",journalConfig:"qe_journal_config",debriefs:"qe_debriefs",dailyGoals:"qe_daily_goals",weeklyGoals:"qe_weekly_goals",weeklyReviews:"qe_weekly_reviews"};for(const[a,l]of Object.entries(o))s[a]!==void 0&&localStorage.setItem(l,JSON.stringify(s[a]))}}catch(r){console.warn("Failed to hydrate core stats:",r)}try{const r=rt(e,`users/${n}/stats/accounts`),i=await bo(r);if(i.exists()){const s=i.data();s.data&&localStorage.setItem("qe_accounts",JSON.stringify(s.data))}}catch(r){console.warn("Failed to hydrate accounts:",r)}try{const r=rt(e,`users/${n}/settings/main`),i=await bo(r);if(i.exists()){let s={};try{s=JSON.parse(localStorage.getItem("qe_settings")||"null")||((t=window.Store)==null?void 0:t.settings)||{}}catch{}const o=qf(s,i.data());localStorage.setItem("qe_settings",JSON.stringify(o))}}catch(r){console.warn("Failed to hydrate settings:",r)}try{const r=rt(e,`users/${n}/meta/syncInfo`);await jt(r,{lastPulled:Gt()},{merge:!0})}catch(r){console.warn("Failed to update sync meta:",r)}window.reloadAppState&&window.reloadAppState(),window.NotificationEngine&&typeof window.NotificationEngine.syncUIFromStore=="function"&&window.NotificationEngine.syncUIFromStore({force:!0}),window.GitHubSyncEngine&&typeof window.GitHubSyncEngine.syncUIFromStore=="function"&&window.GitHubSyncEngine.syncUIFromStore()},async forcePullFromCloud(){const e=Fe.getAuth().currentUser;if(!e)return alert("Not connected to Firebase.");if(!confirm("This will overwrite your local data with cloud data. Continue?"))return;const t=document.getElementById("sync-loading-overlay"),r=document.getElementById("sync-loading-text");try{this.updateStatusUI("Pulling from cloud...","var(--warning)"),t&&(t.style.display="flex",r&&(r.innerText="Pulling data from cloud...")),await this.hydrateAppFromFirestore(e.uid),this.updateStatusUI("Synced ✓","var(--success)"),alert("Cloud data loaded successfully")}catch(i){(i.message||String(i)).includes("client is offline")?(console.warn("Pull data offline:",i),alert("Cannot pull data while offline.")):(console.error("Failed to pull data",i),alert("Failed to pull data: "+i.message)),this.updateStatusUI("Sync Failed","var(--danger)")}finally{t&&(t.style.display="none")}},async startSync(n){if(this.isSyncing)return;this.isSyncing=!0,this.updateStatusUI("Syncing...","var(--warning)");const e=Fe.getDb(),t=Pf(e,`users/${n}/trades`);this.unsubscribeTrades=Io(t,o=>{let a=JSON.parse(localStorage.getItem("qe_trades")||"[]"),l=!1;o.docChanges().forEach(u=>{var _;const d=u.doc.data(),f=parseInt(u.doc.id);if(u.type==="added"||u.type==="modified"){const I=a.findIndex(w=>w.id===f);if(I>-1){const w=a[I].updatedAt||0;((_=d.updatedAt)!=null&&_.toMillis?d.updatedAt.toMillis():0)>=w&&(a[I]={...d,id:f},l=!0)}else a.push({...d,id:f}),l=!0}else u.type==="removed"&&(a=a.filter(I=>I.id!==f),l=!0)}),l&&(localStorage.setItem("qe_trades",JSON.stringify(a)),window.Store&&(window.Store.trades=a,window.renderAll&&window.renderAll())),this.updateStatusUI("Synced","var(--success)")},o=>{(o.message||String(o)).includes("client is offline")?console.warn("Trades sync offline:",o):(console.error("Trades sync error:",o),this.stopSync("Sync Error: Permissions/Rules","var(--danger)"))});const r=rt(e,`users/${n}/stats/core`);this.unsubscribeStats=Io(r,o=>{if(o.exists()){const a=o.data();window.Store&&(a.transactions&&(window.Store.transactions=a.transactions),a.allocations&&(window.Store.allocations=a.allocations),a.wishlist&&(window.Store.wishlist=a.wishlist),a.investments&&(window.Store.investments=a.investments),a.payouts&&(window.Store.payouts=a.payouts),a.milestones&&(window.Store.milestones=a.milestones),a.activeTrades&&(window.Store.activeTrades=a.activeTrades),a.plannedTrades&&(window.Store.plannedTrades=a.plannedTrades),a.backtests&&(window.Store.backtests=a.backtests),a.planner&&(window.Store.planner=a.planner),a.snapshots&&(window.Store.snapshots=a.snapshots),a.scalingMilestones&&(window.Store.scalingMilestones=a.scalingMilestones),a.rebalancerHistory&&(window.Store.rebalancerHistory=a.rebalancerHistory),a.expenses&&(window.Store.expenses=a.expenses),a.budgets&&(window.Store.budgets=a.budgets),a.stocks&&(window.Store.stocks=a.stocks),a.dividends&&(window.Store.dividends=a.dividends),a.locks&&(window.Store.locks=a.locks),a.journalConfig&&(window.Store.journalConfig={pairs:a.journalConfig.pairs||window.Store.journalConfig.pairs||["EURUSD","GBPUSD"],setups:a.journalConfig.setups||window.Store.journalConfig.setups||["OB","FVG"],confluences:a.journalConfig.confluences||window.Store.journalConfig.confluences||["HTF zone"],playbooks:a.journalConfig.playbooks&&typeof a.journalConfig.playbooks=="object"&&!Array.isArray(a.journalConfig.playbooks)?a.journalConfig.playbooks:window.Store.journalConfig.playbooks||{}}),a.debriefs&&(window.Store.debriefs=a.debriefs),a.dailyGoals&&(window.Store.dailyGoals=a.dailyGoals),a.weeklyGoals&&(window.Store.weeklyGoals=a.weeklyGoals),a.weeklyReviews&&(window.Store.weeklyReviews=a.weeklyReviews),localStorage.setItem("qe_transactions",JSON.stringify(window.Store.transactions)),localStorage.setItem("qe_allocations",JSON.stringify(window.Store.allocations)),localStorage.setItem("qe_wishlist",JSON.stringify(window.Store.wishlist)),localStorage.setItem("qe_investments",JSON.stringify(window.Store.investments)),localStorage.setItem("qe_payouts",JSON.stringify(window.Store.payouts)),localStorage.setItem("qe_milestones",JSON.stringify(window.Store.milestones)),localStorage.setItem("qe_active_trades",JSON.stringify(window.Store.activeTrades)),localStorage.setItem("qe_planned_trades",JSON.stringify(window.Store.plannedTrades)),localStorage.setItem("qe_backtests",JSON.stringify(window.Store.backtests)),localStorage.setItem("qe_planner",JSON.stringify(window.Store.planner)),localStorage.setItem("qe_snapshots",JSON.stringify(window.Store.snapshots)),localStorage.setItem("qe_scaling_milestones",JSON.stringify(window.Store.scalingMilestones)),localStorage.setItem("qe_rebalancer_history",JSON.stringify(window.Store.rebalancerHistory||[])),localStorage.setItem("qe_expenses",JSON.stringify(window.Store.expenses)),localStorage.setItem("qe_budgets",JSON.stringify(window.Store.budgets)),localStorage.setItem("qe_stocks",JSON.stringify(window.Store.stocks)),localStorage.setItem("qe_dividends",JSON.stringify(window.Store.dividends)),localStorage.setItem("qe_locks",JSON.stringify(window.Store.locks)),localStorage.setItem("qe_journal_config",JSON.stringify(window.Store.journalConfig)),localStorage.setItem("qe_debriefs",JSON.stringify(window.Store.debriefs)),localStorage.setItem("qe_daily_goals",JSON.stringify(window.Store.dailyGoals)),localStorage.setItem("qe_weekly_goals",JSON.stringify(window.Store.weeklyGoals)),localStorage.setItem("qe_weekly_reviews",JSON.stringify(window.Store.weeklyReviews)),window.renderAll&&window.renderAll())}},o=>{(o.message||String(o)).includes("client is offline")?console.warn("Core stats sync offline:",o):(console.error("Core stats sync error:",o),this.stopSync("Sync Error: Permissions/Rules","var(--danger)"))});const i=rt(e,`users/${n}/stats/accounts`);Io(i,o=>{if(o.exists()){const a=o.data();window.Store&&a.data&&(window.Store.accounts=a.data,localStorage.setItem("qe_accounts",JSON.stringify(window.Store.accounts)),window.renderAll&&window.renderAll())}},o=>{(o.message||String(o)).includes("client is offline")?console.warn("Accounts sync offline:",o):console.error("Accounts sync error:",o)});const s=rt(e,`users/${n}/settings/main`);this.unsubscribeSettings=Io(s,o=>{if(o.exists()){const a=o.data();window.Store&&(window.Store.settings=qf(window.Store.settings,a),localStorage.setItem("qe_settings",JSON.stringify(window.Store.settings)),window.NotificationEngine&&typeof window.NotificationEngine.syncUIFromStore=="function"&&window.NotificationEngine.syncUIFromStore({skipIfFocused:!0}),window.GitHubSyncEngine&&typeof window.GitHubSyncEngine.syncUIFromStore=="function"&&window.GitHubSyncEngine.syncUIFromStore({skipIfFocused:!0}),window.renderAll&&window.renderAll())}},o=>{(o.message||String(o)).includes("client is offline")?console.warn("Settings sync offline:",o):(console.error("Settings sync error:",o),this.stopSync("Sync Error: Permissions/Rules","var(--danger)"))})},stopSync(n="Offline",e="var(--danger)"){this.isSyncing=!1,this.unsubscribeTrades&&(this.unsubscribeTrades(),this.unsubscribeTrades=null),this.unsubscribeStats&&(this.unsubscribeStats(),this.unsubscribeStats=null),this.unsubscribeSettings&&(this.unsubscribeSettings(),this.unsubscribeSettings=null),this.updateStatusUI(n,e)},async updateSyncMeta(){if(this.isSyncing)try{const n=Fe.getDb(),e=Fe.getAuth();if(!e.currentUser)return;const t=e.currentUser.uid,r=rt(n,`users/${t}/meta/syncInfo`);await jt(r,{lastPushed:Gt()},{merge:!0})}catch{}},async syncTrade(n,e=!1){if(this.isSyncing)try{const t=Fe.getDb(),r=Fe.getAuth();if(!r.currentUser)return;const i=r.currentUser.uid,s=rt(t,`users/${i}/trades/${n.id}`);if(await jt(s,{...n,updatedAt:Gt()},{merge:!0}),!e){const o=rt(t,`users/${i}/meta/syncInfo`);await jt(o,{lastPushed:Gt()},{merge:!0})}}catch(t){(t.message||String(t)).includes("client is offline")?console.warn("Sync trade offline:",t):console.error("Failed to sync trade",t)}},async syncSettings(n){if(!(!this.isSyncing||!n))try{const e=Fe.getDb(),t=Fe.getAuth();if(!t.currentUser)return;const r=t.currentUser.uid,i=zf(n);await jt(rt(e,`users/${r}/settings/main`),{...i,updatedAt:Gt()},{merge:!0})}catch(e){(e.message||String(e)).includes("client is offline")?console.warn("Sync settings offline:",e):console.error("Failed to sync settings",e)}},async syncAll(n){if(this.isSyncing)try{const e=Fe.getDb(),t=Fe.getAuth();if(!t.currentUser)return;const r=t.currentUser.uid;if(n.settings){const o=zf(n.settings);await jt(rt(e,`users/${r}/settings/main`),{...o,updatedAt:Gt()},{merge:!0})}n.accounts&&await jt(rt(e,`users/${r}/stats/accounts`),{data:n.accounts,updatedAt:Gt()},{merge:!0});const i={transactions:n.transactions||[],allocations:n.allocations||[],wishlist:n.wishlist||[],investments:n.investments||[],payouts:n.payouts||[],milestones:n.milestones||[],activeTrades:n.activeTrades||[],plannedTrades:n.plannedTrades||[],backtests:n.backtests||[],planner:n.planner||{},snapshots:n.snapshots||{},scalingMilestones:n.scalingMilestones||[],rebalancerHistory:n.rebalancerHistory||[],expenses:n.expenses||[],budgets:n.budgets||[],stocks:n.stocks||[],dividends:n.dividends||[],locks:n.locks||[],journalConfig:n.journalConfig||{},debriefs:n.debriefs||[],dailyGoals:n.dailyGoals||[],weeklyGoals:n.weeklyGoals||[],weeklyReviews:n.weeklyReviews||[]};await jt(rt(e,`users/${r}/stats/core`),{...i,updatedAt:Gt()},{merge:!0});const s=rt(e,`users/${r}/meta/syncInfo`);await jt(s,{lastPushed:Gt()},{merge:!0})}catch(e){(e.message||String(e)).includes("client is offline")?console.warn("Sync all data offline:",e):console.error("Failed to sync all data",e)}},async deleteTrade(n,e){if(this.isSyncing)try{const t=Fe.getDb(),r=Fe.getAuth();if(!r.currentUser)return;const i=rt(t,`users/${r.currentUser.uid}/trades/${n}`);if(await sS(i),e){let s=[];Array.isArray(e)?s=e:typeof e=="string"&&(s=e.split(" | ").map(o=>o.trim()).filter(o=>o));for(const o of s)if(o.includes("firebasestorage")){const a=Fe.getStorage(),l=Bf(a,o);await _A(l).catch(u=>console.warn("Screenshot delete failed",u))}}}catch(t){(t.message||String(t)).includes("client is offline")?console.warn("Delete trade offline:",t):console.error("Failed to delete trade",t)}},async uploadScreenshot(n,e){const t=Fe.getAuth();if(!t.currentUser)throw new Error("Not authenticated");if(!n||typeof n.name!="string")throw new Error("Invalid file");const r=10*1024*1024,i=new Set(["image/png","image/jpeg","image/webp","image/gif"]),s=new Set(["png","jpg","jpeg","webp","gif"]);if(typeof n.size=="number"&&n.size>r)throw new Error("Screenshot exceeds 10MB size limit.");if(n.type&&!i.has(n.type.toLowerCase()))throw new Error("Unsupported screenshot file type. Use PNG, JPEG, WEBP, or GIF.");const o=(n.name.split(".").pop()||"").toLowerCase().replace(/[^a-z0-9]/g,""),a=s.has(o)?o:"png",l=Fe.getStorage(),u=t.currentUser.uid,d=`screenshot_${Date.now()}.${a}`,f=Bf(l,`users/${u}/screenshots/${d}`),_=gA(f,n);return new Promise((I,w)=>{_.on("state_changed",S=>{const P=S.bytesTransferred/S.totalBytes*100;e&&e(P)},S=>{(S.message||String(S)).includes("client is offline")?console.warn("Upload offline:",S):console.error("Upload failed:",S),w(S)},async()=>{const S=await yA(_.snapshot.ref);I(S)})})}};window.SyncEngine=Wt;window.saveFirebaseConfig=function(){const n={apiKey:document.getElementById("fb-apiKey").value,authDomain:document.getElementById("fb-authDomain").value,projectId:document.getElementById("fb-projectId").value,storageBucket:document.getElementById("fb-storageBucket").value,messagingSenderId:document.getElementById("fb-messagingSenderId").value,appId:document.getElementById("fb-appId").value};if(!n.apiKey||!n.projectId){alert("API Key and Project ID are required.");return}localStorage.setItem("quantedge_firebase_config",JSON.stringify(n)),alert("Firebase Config saved! Reloading application..."),window.location.reload()};window.clearFirebaseConfig=function(){localStorage.removeItem("quantedge_firebase_config"),alert("Custom Firebase Config cleared! Reloading application..."),window.location.reload()};window.handleLogin=async function(){const n=document.getElementById("auth-email").value,e=document.getElementById("auth-password").value;if(!n||!e)return alert("Email and password required");try{await Fe.login(n,e)}catch(t){alert("Login failed: "+t.message)}};window.handleSignup=async function(){const n=document.getElementById("auth-email").value,e=document.getElementById("auth-password").value;if(!n||!e)return alert("Email and password required");try{await Fe.signup(n,e)}catch(t){alert("Signup failed: "+t.message)}};window.handleAnonLogin=async function(){try{await Fe.loginAnonymously()}catch(n){alert("Anon login failed: "+n.message)}};window.handleLogout=async function(){try{await Fe.logout()}catch(n){alert("Logout failed: "+n.message)}};window.forcePullFromCloud=async function(){if(!Wt)return alert("SyncEngine not initialized.");await Wt.forcePullFromCloud()};window.forceSyncLocalToCloud=async function(){if(!Wt.isSyncing)return alert("Not connected to Firebase.");if(!confirm("This will overwrite your cloud data with your current local data. Are you sure?"))return;const n=document.getElementById("sync-loading-overlay"),e=document.getElementById("sync-loading-text");try{if(Wt.updateStatusUI("Pushing data...","var(--warning)"),n&&(n.style.display="flex",e&&(e.innerText="Pushing data to cloud...")),await Wt.syncAll(window.Store),window.Store.trades&&window.Store.trades.length>0){const t=window.Store.trades.map(s=>Wt.syncTrade(s,!0));await Promise.allSettled(t);const r=Fe.getDb(),i=Fe.getAuth();if(i.currentUser){const s=rt(r,`users/${i.currentUser.uid}/meta/syncInfo`);await jt(s,{lastPushed:Gt()},{merge:!0})}}alert("Local data successfully pushed to cloud!"),Wt.updateStatusUI("Synced","var(--success)")}catch(t){(t.message||String(t)).includes("client is offline")?(console.warn("Push data offline:",t),alert("Cannot push data while offline.")):(console.error("Failed to push data",t),alert("Failed to push data: "+t.message)),Wt.updateStatusUI("Sync Failed","var(--danger)")}finally{n&&(n.style.display="none")}};document.addEventListener("DOMContentLoaded",()=>{window.FirebaseService=Fe,Wt.init()});const It={getAccessToken(){return Fe.getWorkspaceAccessToken()},async login(){try{const n=await Fe.loginWithGoogle();if(n===null)return!1;if(n&&n.accessToken)return!0;throw new Error("Google Drive permission was not granted. Please ensure you check the box to allow Google Drive access during sign-in.")}catch(n){throw console.error("GDrive Login failed:",n),n}},async findSyncFile(){const n=this.getAccessToken();if(!n)throw new Error("No Drive access token. Please login with Google.");const t=await(await fetch('https://www.googleapis.com/drive/v3/files?q=name="quantedge_sync.json" and trashed=false&fields=files(id,name,modifiedTime)',{headers:{Authorization:`Bearer ${n}`}})).json();if(t.error){let r=t.error.message;throw t.error.code===403&&(r+=" (If you are using a custom Firebase Config, please ensure the 'Google Drive API' is ENABLED in your Google Cloud Console project)."),new Error(r)}return t.files&&t.files.length>0?t.files[0]:null},async exportData(n){const e=this.getAccessToken();if(!e)throw new Error("No Drive access token. Please login with Google.");const t=JSON.stringify(n,null,2),r={name:"quantedge_sync.json",mimeType:"application/json"},i=await this.findSyncFile();let s;if(i&&i.id)s=i.id;else{const a=await fetch("https://www.googleapis.com/drive/v3/files",{method:"POST",headers:{Authorization:`Bearer ${e}`,"Content-Type":"application/json"},body:JSON.stringify(r)});if(!a.ok)throw new Error(`Failed to create file: ${a.statusText}`);s=(await a.json()).id}const o=await fetch(`https://www.googleapis.com/upload/drive/v3/files/${s}?uploadType=media`,{method:"PATCH",headers:{Authorization:`Bearer ${e}`,"Content-Type":"application/json"},body:t});if(!o.ok){const a=await o.text();throw new Error(`Upload failed: ${o.statusText} - ${a}`)}return await o.json()},async importData(){const n=this.getAccessToken();if(!n)throw new Error("No Drive access token. Please login with Google.");const e=await this.findSyncFile();if(!e)throw new Error("No quantedge_sync.json file found in Google Drive.");const t=await fetch(`https://www.googleapis.com/drive/v3/files/${e.id}?alt=media`,{headers:{Authorization:`Bearer ${n}`}});if(!t.ok)throw new Error("Failed to download file from Drive.");return await t.json()},async deleteData(){const n=this.getAccessToken();if(!n)throw new Error("No Drive access token. Please login with Google.");const e=await this.findSyncFile();if(!e){alert("No sync file found in Google Drive.");return}if(!window.confirm("Are you sure you want to delete the QuantEdge sync file from Google Drive? This action cannot be undone."))return;const r=await fetch(`https://www.googleapis.com/drive/v3/files/${e.id}`,{method:"DELETE",headers:{Authorization:`Bearer ${n}`}});if(!r.ok)throw new Error(`Failed to delete file from Drive. ${r.statusText}`);alert("Sync file deleted from Google Drive."),window.updateGDriveStatusIndicator()}};window.GDriveSync=It;window.updateGDriveStatusIndicator=async function(){const n=document.querySelector("#sidebar-gdrive-status i"),e=document.getElementById("sidebar-gdrive-text");if(!(!e||!n)){if(!It.getAccessToken()){n.style.color="var(--muted)",e.style.color="var(--muted)",e.innerText="Drive: Not Connected";return}e.innerText="Drive: Checking...",n.style.color="var(--warning)",e.style.color="var(--warning)";try{const t=await It.findSyncFile();if(t&&t.modifiedTime){const r=new Date(t.modifiedTime);n.style.color="var(--success)",e.style.color="var(--success)",e.innerText=`Drive: Synced at ${r.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}`}else n.style.color="var(--muted)",e.style.color="var(--muted)",e.innerText="Drive: No Sync File"}catch{n.style.color="var(--danger)",e.style.color="var(--danger)",e.innerText="Drive: Error"}}};setTimeout(()=>{window.FirebaseService&&setTimeout(()=>{window.updateGDriveStatusIndicator()},1500)},500);window.doGDriveExport=async function(){const n=document.getElementById("sync-loading-overlay"),e=document.getElementById("sync-loading-text");n&&(n.style.display="flex",e&&(e.innerText="Exporting data to Google Drive..."));const t={transactions:window.Store.transactions||[],allocations:window.Store.allocations||[],wishlist:window.Store.wishlist||[],investments:window.Store.investments||[],payouts:window.Store.payouts||[],milestones:window.Store.milestones||[],activeTrades:window.Store.activeTrades||[],plannedTrades:window.Store.plannedTrades||[],backtests:window.Store.backtests||[],planner:window.Store.planner||{},snapshots:window.Store.snapshots||{},scalingMilestones:window.Store.scalingMilestones||[],rebalancerHistory:window.Store.rebalancerHistory||[],expenses:window.Store.expenses||[],budgets:window.Store.budgets||[],stocks:window.Store.stocks||[],dividends:window.Store.dividends||[],locks:window.Store.locks||[],journalConfig:window.Store.journalConfig||{},debriefs:window.Store.debriefs||[],dailyGoals:window.Store.dailyGoals||[],weeklyGoals:window.Store.weeklyGoals||[],weeklyReviews:window.Store.weeklyReviews||[],accounts:window.Store.accounts||[],settings:window.Store.settings||{},trades:window.Store.trades||[]};await It.exportData(t);const r=await It.findSyncFile();r&&r.modifiedTime?localStorage.setItem("qe_last_synced",r.modifiedTime):localStorage.setItem("qe_last_synced",new Date().toISOString()),n&&(n.style.display="none"),alert("Success! Data successfully exported to Google Drive."),window.updateGDriveStatusIndicator()};window.doGDriveImport=async function(){var u,d,f,_,I;const n=document.getElementById("sync-loading-overlay"),e=document.getElementById("sync-loading-text"),t=await It.importData();if(!t||typeof t!="object"||Array.isArray(t))throw new Error("Invalid Google Drive backup format.");if(JSON.stringify(t).length>20*1024*1024)throw new Error("Google Drive backup exceeds 20MB limit.");n&&(n.style.display="flex",e&&(e.innerText="Importing data from Google Drive..."));const i={transactions:"qe_transactions",allocations:"qe_allocations",wishlist:"qe_wishlist",investments:"qe_investments",payouts:"qe_payouts",milestones:"qe_milestones",activeTrades:"qe_active_trades",plannedTrades:"qe_planned_trades",backtests:"qe_backtests",scalingMilestones:"qe_scaling_milestones",rebalancerHistory:"qe_rebalancer_history",expenses:"qe_expenses",budgets:"qe_budgets",stocks:"qe_stocks",dividends:"qe_dividends",locks:"qe_locks",debriefs:"qe_debriefs",dailyGoals:"qe_daily_goals",weeklyGoals:"qe_weekly_goals",weeklyReviews:"qe_weekly_reviews",accounts:"qe_accounts",trades:"qe_trades"},s={planner:"qe_planner",snapshots:"qe_snapshots",journalConfig:"qe_journal_config"},o=w=>w==="__proto__"||w==="constructor"||w==="prototype";for(const[w,S]of Object.entries(i))!o(w)&&Array.isArray(t[w])&&localStorage.setItem(S,JSON.stringify(t[w]));for(const[w,S]of Object.entries(s)){const P=t[w];!o(w)&&P&&typeof P=="object"&&!Array.isArray(P)&&localStorage.setItem(S,JSON.stringify(P))}if(t.settings&&typeof t.settings=="object"&&!Array.isArray(t.settings)){let w={};try{w=JSON.parse(localStorage.getItem("qe_settings")||"null")||{}}catch{}const S={...t.settings};w!=null&&w.githubSync&&(w.githubSync.token||w.githubSync.username)&&(S.githubSync={...S.githubSync&&typeof S.githubSync=="object"?S.githubSync:{},...w.githubSync}),(d=(u=w==null?void 0:w.notifications)==null?void 0:u.telegram)!=null&&d.token&&!((_=(f=S==null?void 0:S.notifications)==null?void 0:f.telegram)!=null&&_.token)&&(S.notifications={...S.notifications&&typeof S.notifications=="object"?S.notifications:{},telegram:{...((I=S.notifications)==null?void 0:I.telegram)||{},...w.notifications.telegram}}),localStorage.setItem("qe_settings",JSON.stringify(S))}const a=await It.findSyncFile(),l=a&&a.modifiedTime?a.modifiedTime:new Date().toISOString();localStorage.setItem("qe_last_synced",l),localStorage.setItem("qe_last_modified",l),n&&(n.style.display="none"),window.reloadAppState?window.reloadAppState():(alert("Import successful! Reloading page..."),window.location.reload())};window.handleGDriveSync=async function(){try{if(!It.getAccessToken()&&!await It.login())return;const n=document.getElementById("sync-loading-overlay");n&&(n.style.display="flex",document.getElementById("sync-loading-text").innerText="Checking Cloud Version...");const e=await It.findSyncFile(),t=localStorage.getItem("qe_last_modified"),r=localStorage.getItem("qe_last_synced")||"1970-01-01T00:00:00.000Z",i=t?new Date(t).getTime():0,s=new Date(r).getTime();if(n&&(n.style.display="none"),!e){await window.doGDriveExport();return}const o=new Date(e.modifiedTime).getTime(),a=i>s,l=o>s;a&&l?(document.getElementById("gdrive-local-time").innerText="Last modified: "+new Date(i).toLocaleString(),document.getElementById("gdrive-cloud-time").innerText="Last modified: "+new Date(o).toLocaleString(),window.openModal("modal-gdrive-conflict")):l?await window.doGDriveImport():a?await window.doGDriveExport():alert("Your data is already perfectly in sync with Google Drive.")}catch(n){const e=document.getElementById("sync-loading-overlay");e&&(e.style.display="none"),alert("Sync failed: "+n.message)}};window.resolveGDriveConflict=async function(n){window.closeModal("modal-gdrive-conflict");try{n==="local"?await window.doGDriveExport():await window.doGDriveImport()}catch(e){alert("Action failed: "+e.message)}};window.handleGDriveDelete=async function(){try{if(!It.getAccessToken()&&!await It.login())return;await It.deleteData()}catch(n){alert("Delete failed: "+n.message)}};class Il{constructor(){this.themes=[{id:"default",name:"Default Dark",description:"Clean dark theme with professional aesthetics"},{id:"quantum-dark",name:"Quantum Dark",description:"Futuristic neon-accented dark theme"},{id:"arctic-light",name:"Arctic Light",description:"Clean minimalist light theme"},{id:"obsidian",name:"Obsidian",description:"Sophisticated dark theme with refined accents"},{id:"emerald",name:"Emerald",description:"Nature-inspired theme with green accents"},{id:"slate-pro",name:"Slate Pro",description:"Corporate professional theme"},{id:"cyberpunk",name:"Cyberpunk",description:"Bold high-contrast neon theme"}],this.currentTheme=this.loadTheme(),this.init()}init(){this.applyTheme(this.currentTheme),this.setupThemeToggle(),this.setupThemeMenu()}loadTheme(){const e=localStorage.getItem("qe_selected_theme");return e||(localStorage.getItem("qe_theme")==="light"?"light":"default")}saveTheme(e){localStorage.setItem("qe_selected_theme",e),e==="light"||e==="arctic-light"?localStorage.setItem("qe_theme","light"):(e==="default"||e==="dark")&&localStorage.setItem("qe_theme","dark"),this.currentTheme=e}applyTheme(e){const t=document.documentElement;e==="default"||e==="dark"?t.setAttribute("data-theme","dark"):t.setAttribute("data-theme",e),this.currentTheme=e,this.saveTheme(e),this.updateThemeUI(),this.dispatchThemeChangeEvent(e)}dispatchThemeChangeEvent(e){const t=new CustomEvent("themechange",{detail:{theme:e}});document.dispatchEvent(t)}setupThemeToggle(){const e=document.getElementById("theme-toggle-btn");e&&e.addEventListener("click",()=>{this.toggleLightDark()})}toggleLightDark(){const t=this.currentTheme==="default"||this.currentTheme==="quantum-dark"||this.currentTheme==="obsidian"||this.currentTheme==="emerald"||this.currentTheme==="slate-pro"||this.currentTheme==="cyberpunk"?"arctic-light":"default";this.applyTheme(t)}setupThemeMenu(){const e=document.getElementById("theme-menu");e&&(e.innerHTML="",this.themes.forEach(t=>{const r=document.createElement("button");r.className="theme-option",t.id===this.currentTheme&&r.classList.add("active"),r.innerHTML=`
        <div class="theme-option-name">${t.name}</div>
        <div class="theme-option-desc">${t.description}</div>
      `,r.addEventListener("click",()=>{this.applyTheme(t.id),this.updateThemeMenuUI()}),e.appendChild(r)}))}updateThemeMenuUI(){document.querySelectorAll(".theme-option").forEach(r=>{r.classList.remove("active")});const t=document.querySelector(`.theme-option:has(div:contains("${this.getThemeName(this.currentTheme)}"))`);t&&t.classList.add("active")}updateThemeUI(){const e=document.getElementById("theme-icon"),t=document.getElementById("theme-text");e&&t&&(this.currentTheme!=="light"&&this.currentTheme!=="arctic-light"?(e.setAttribute("data-lucide","sun"),t.textContent="Light Mode"):(e.setAttribute("data-lucide","moon"),t.textContent="Dark Mode"),window.lucide&&window.lucide.createIcons())}getThemeName(e){const t=this.themes.find(r=>r.id===e);return t?t.name:"Unknown"}getThemes(){return this.themes}getCurrentTheme(){return this.currentTheme}getCurrentThemeInfo(){return this.themes.find(e=>e.id===this.currentTheme)}getChartThemeConfig(){const e=getComputedStyle(document.documentElement),t=e.getPropertyValue("--text").trim(),r=e.getPropertyValue("--border").trim(),i=e.getPropertyValue("--primary").trim();return{textColor:t,borderColor:r,primaryColor:i,gridColor:r+"40",plugins:{legend:{labels:{color:t,font:{family:"'Inter', system-ui, -apple-system, sans-serif"}}}},scales:{x:{ticks:{color:t},grid:{color:r+"20"}},y:{ticks:{color:t},grid:{color:r+"20"}}}}}exportThemeConfig(){const e=getComputedStyle(document.documentElement),t={};return["--bg","--card","--border","--text","--muted","--primary","--success","--danger","--warning","--surface","--surface-hover","--accent-secondary","--accent-tertiary"].forEach(i=>{t[i]=e.getPropertyValue(i).trim()}),t}onThemeChange(e){document.addEventListener("themechange",t=>{e(t.detail.theme)})}}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",()=>{window.ThemeManager=new Il}):window.ThemeManager=new Il;typeof Wo<"u"&&Wo.exports&&(Wo.exports=Il);window.__QE_BUILD_API_BASE_URL__="".trim().replace(/\/+$/,"");function ge(n){return typeof window.escapeHtml=="function"?window.escapeHtml(n):String(n??"").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e])}function Cy(n){return typeof window.sanitizeHtml=="function"?window.sanitizeHtml(n):ge(n)}function Vs(n=new Date){const e=new Date(n);e.setHours(0,0,0,0);const t=e.getDay(),r=t===0?-6:1-t,i=new Date(e);i.setDate(e.getDate()+r);const s=new Date(i);s.setDate(i.getDate()+6),s.setHours(23,59,59,999);const o=Math.max(1,Math.ceil((i.getTime()-new Date(i.getFullYear(),0,1).getTime())/864e5/7)),a=`${i.getFullYear()}-${String(i.getMonth()+1).padStart(2,"0")}-${String(i.getDate()).padStart(2,"0")}`;return{monday:i,sunday:s,weekNum:o,key:a}}window.getLocalWeekBoundaries=Vs;function IA(){const n=new Date;return n.setDate(n.getDate()-7),Vs(n).key}window.checkWeeklyReviewTrigger=function(){const e=new Date().getDay(),t=document.getElementById("weekly-review-alert"),r=document.getElementById("weekly-review-msg"),i=document.getElementById("weekly-review-alert-btn");if(!t||!r||!i||!Store.weeklyReviews)return;const s=Vs(),o=IA(),a=Store.weeklyReviews.find(u=>u.key===s.key),l=Store.weeklyReviews.find(u=>u.key===o);e===0?(t.style.display="flex",a?(t.style.background="rgba(34, 197, 94, 0.15)",t.style.borderColor="var(--success)",t.style.color="var(--success)",r.innerHTML=`✓ Week ${s.weekNum} reviewed — review your intentions.`,i.innerText="View Summary",i.style.background="var(--success)",i.onclick=()=>window.openWeeklyReviewModal(s.key)):(t.style.background="rgba(234, 179, 8, 0.15)",t.style.borderColor="var(--warning)",t.style.color="var(--warning)",r.innerHTML="📋 Weekly review is due — reflect on your week before markets open.",i.innerText="Start Weekly Review",i.style.background="var(--warning)",i.onclick=()=>window.openWeeklyReviewModal())):e===1&&!l?(t.style.display="flex",t.style.background="rgba(239, 68, 68, 0.15)",t.style.borderColor="var(--danger)",t.style.color="var(--danger)",r.innerHTML="⚠ Last week's review was not completed.",i.innerText="Complete Now",i.style.background="var(--danger)",i.onclick=()=>window.openWeeklyReviewModal(o)):t.style.display="none"};window.renderWeeklyReviewHistory=function(){const n=document.getElementById("weekly-review-history-body");if(!(!n||!Store.weeklyReviews)){if(Store.weeklyReviews.length===0){n.innerHTML='<tr><td colspan="6" style="text-align: center; color: var(--muted); padding: 24px;">No weekly reviews saved yet.</td></tr>';return}Store.weeklyReviews.sort((e,t)=>new Date(t.key)-new Date(e.key)),n.innerHTML=Store.weeklyReviews.map(e=>{var l,u;let t=(e.totalR||0).toFixed(2),r=(e.winRate||0).toFixed(1),i=Math.max(0,Math.min(5,parseInt((l=e.manual)==null?void 0:l.rating,10)||0)),s="⭐".repeat(i)+"☆".repeat(5-i),o=t>=0?"var(--success)":"var(--danger)";const a=ge(e.key);return`
            <tr style="border-bottom: 1px solid var(--border);">
                <td style="padding: 12px 16px; font-weight: 500;">
                    Week ${ge(e.weekNum)} <span style="font-size:0.8rem; color:var(--muted); margin-left:8px;">${a}</span>
                </td>
                <td style="padding: 12px 16px; font-size: 1.1rem; color: var(--warning);">${s}</td>
                <td style="padding: 12px 16px; color: ${o}; font-weight: 600;">${t>=0?"+":""}${t}R</td>
                <td style="padding: 12px 16px;">${r}%</td>
                <td style="padding: 12px 16px; color: var(--muted);">${ge(((u=e.manual)==null?void 0:u.nextFocus)||"-")}</td>
                <td style="padding: 12px 0; text-align: right;">
                    <button class="secondary" onclick="openWeeklyReviewModal('${a}')" style="padding: 4px 12px; font-size: 0.8rem;">View</button>
                </td>
            </tr>
        `}).join("")}};const Gf=window.renderAll;window.renderAll=function(){Gf&&Gf(),checkWeeklyReviewTrigger(),renderWeeklyReviewHistory()};window.renderWeeklyReviewModal=async function(n,e,t){var l,u,d,f,_,I,w,S,P,F,x,k,C,L,V,b,g,m,y,T,A,v,K,fe;const r=document.getElementById("weekly-review-content"),i=document.getElementById("weekly-review-step-lbl"),s=document.getElementById("weekly-review-read-only-actions"),o=document.getElementById("btn-save-weekly-review");if(!n)return;if(e&&!t){i.innerText="Completed / Locked",i.style.background="var(--surface)",i.style.color="var(--success)",o.style.display="none";const te=document.getElementById("btn-skip-ai-weekly-review");te&&(te.style.display="none"),s.innerHTML=`
            <button class="secondary" onclick="exportWeeklyReviewPDF()"><i data-lucide="file-text"></i> Export PDF</button>
        `}else{i.innerText="Draft Mode",i.style.background="var(--surface)",i.style.color="var(--warning)",o.style.display="inline-block";const te=document.getElementById("btn-skip-ai-weekly-review");te&&(te.style.display="inline-block"),s.innerHTML=""}let a=`
        <div style="display: flex; flex-direction: column; gap: 32px;">
            <div style="background: var(--bg); padding: 24px; border-radius: 8px; border: 1px solid var(--border);">
                <div style="font-size: 0.85rem; color: var(--muted); text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 8px;">Section 1 of 7 — Overview</div>
                <h3 style="margin: 0 0 16px 0;">Week ${ge(n.weekNum)} — ${ge(n.startDate)} to ${ge(n.endDate)}</h3>
                <div style="display: flex; gap: 24px; color: var(--text);">
                    <div><strong>Trading Days:</strong> ${ge(n.daysWithTrades)}</div>
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
                        ${n.tableRows.map(te=>`
                            <tr style="border-bottom: 1px solid var(--border);">
                                <td style="padding: 12px;">${ge(te.day)}</td>
                                <td style="padding: 12px;">${ge(te.trades)}</td>
                                <td style="padding: 12px;">${ge(te.wl)}</td>
                                <td style="padding: 12px; color: ${te.r>=0?"var(--success)":"var(--danger)"};">${te.r>=0?"+":""}${ge(te.r)}R</td>
                            </tr>
                        `).join("")}
                    </tbody>
                </table>
                
                <div style="display: flex; gap: 24px; font-size: 0.9rem;">
                   <div><strong style="color: var(--muted);">Best Trade:</strong> ${n.bestTrade?`${ge(n.bestTrade.pair)} (${ge(n.bestTrade.grade)}) / +${parseFloat(n.bestTrade.r).toFixed(2)}R`:"-"}</div>
                   <div><strong style="color: var(--muted);">Worst Trade:</strong> ${n.worstTrade?`${ge(n.worstTrade.pair)} (${ge(n.worstTrade.grade)}) / ${parseFloat(n.worstTrade.r).toFixed(2)}R`:"-"}</div>
                   <div><strong style="color: var(--muted);">Top Pair:</strong> ${ge(n.mostTradedPair)}</div>
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
                       <div class="stat-value" style="font-size: 1rem; white-space: normal;">${n.topConfluences.length>0?n.topConfluences.map(ge).join(" • "):"-"}</div>
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
                       ${n.ruleViolations.map(te=>`<li style="margin-bottom: 4px;"><strong>${ge(te.pair)}</strong> (${ge(te.date)}): <em>${ge(te.reason)}</em></li>`).join("")}
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
                       <div class="stat-value" style="font-size: 1.5rem;">${ge(n.domPre)}</div>
                   </div>
                   <div style="flex: 1; min-width: 200px;">
                       <div class="stat-label">Dominant During-Trade</div>
                       <div class="stat-value" style="font-size: 1.5rem;">${ge(n.domDuring)}</div>
                   </div>
               </div>
               
               <div style="margin-top: 24px;">
                   <div class="stat-label" style="margin-bottom: 8px;">Emotional Timeline</div>
                   <div style="display: flex; gap: 8px;">
                      ${n.emotionTimeline.map(te=>`
                          <div style="background: var(--surface); padding: 8px 16px; border-radius: 4px; text-align: center; border-bottom: 2px solid ${SA(te.emotion)};">
                              <div style="font-size: 0.75rem; color: var(--muted); margin-bottom: 4px;">${ge(te.day)}</div>
                              <div style="font-size: 0.85rem; font-weight: 500;">${ge(te.emotion)}</div>
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
                       <div><strong style="color: var(--muted);">What went well:</strong><p style="margin: 4px 0 0 0; line-height: 1.5;">${ge(n.manual.wentWell)}</p></div>
                       <div><strong style="color: var(--muted);">What needs improvement:</strong><p style="margin: 4px 0 0 0; line-height: 1.5;">${ge(n.manual.wentWrong)}</p></div>
                       <div><strong style="color: var(--muted);">Followed plan:</strong> ${ge(n.manual.followedPlan)}</div>
                       <div><strong style="color: var(--muted);">Mental State:</strong> ${ge(n.manual.mentalState)}</div>
                       <div><strong style="color: var(--muted);">Key Lesson:</strong><p style="margin: 4px 0 0 0; line-height: 1.5;">${ge(n.manual.keyLesson)}</p></div>
                   </div>
               `:`
                   <div class="form-group" style="margin-bottom: 24px;">
                       <label>1. Overall Week Rating <span style="color: var(--danger);">●</span></label>
                       <select id="wr-rating" style="width: 150px;">
                           <option value="5" ${((l=n.manual)==null?void 0:l.rating)===5?"selected":""}>⭐⭐⭐⭐⭐ (5)</option>
                           <option value="4" ${((u=n.manual)==null?void 0:u.rating)===4?"selected":""}>⭐⭐⭐⭐ (4)</option>
                           <option value="3" ${((d=n.manual)==null?void 0:d.rating)===3||!n.manual?"selected":""}>⭐⭐⭐ (3)</option>
                           <option value="2" ${((f=n.manual)==null?void 0:f.rating)===2?"selected":""}>⭐⭐ (2)</option>
                           <option value="1" ${((_=n.manual)==null?void 0:_.rating)===1?"selected":""}>⭐ (1)</option>
                       </select>
                   </div>
                   
                   <div class="form-group" style="margin-bottom: 24px;">
                       <label>2. What went well this week? <span style="color: var(--danger);">●</span></label>
                       <textarea id="wr-went-well" rows="3" placeholder="Be specific — which setups, decisions, or habits worked?" style="width: 100%; padding: 12px; border-radius: 8px; border: 1px solid var(--border); background: var(--surface); color: var(--text);">${ge(((I=n.manual)==null?void 0:I.wentWell)||"")}</textarea>
                   </div>
                   
                   <div class="form-group" style="margin-bottom: 24px;">
                       <label>3. What went wrong or needs improvement? <span style="color: var(--danger);">●</span></label>
                       <textarea id="wr-went-wrong" rows="3" placeholder="Be honest — what mistakes, habits, or patterns cost you?" style="width: 100%; padding: 12px; border-radius: 8px; border: 1px solid var(--border); background: var(--surface); color: var(--text);">${ge(((w=n.manual)==null?void 0:w.wentWrong)||"")}</textarea>
                   </div>
                   
                   <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 24px;">
                       <div class="form-group">
                           <label>4. Did you follow trading plan? <span style="color: var(--danger);">●</span></label>
                           <select id="wr-plan-followed">
                               <option value="Always" ${((S=n.manual)==null?void 0:S.followedPlan)==="Always"?"selected":""}>Always</option>
                               <option value="Mostly" ${((P=n.manual)==null?void 0:P.followedPlan)==="Mostly"||!n.manual?"selected":""}>Mostly</option>
                               <option value="Sometimes" ${((F=n.manual)==null?void 0:F.followedPlan)==="Sometimes"?"selected":""}>Sometimes</option>
                               <option value="Rarely" ${((x=n.manual)==null?void 0:x.followedPlan)==="Rarely"?"selected":""}>Rarely</option>
                           </select>
                       </div>
                       <div class="form-group">
                           <label>5. Mental state overall? <span style="color: var(--danger);">●</span></label>
                           <select id="wr-mental-state">
                               <option value="Excellent" ${((k=n.manual)==null?void 0:k.mentalState)==="Excellent"?"selected":""}>Excellent</option>
                               <option value="Good" ${((C=n.manual)==null?void 0:C.mentalState)==="Good"||!n.manual?"selected":""}>Good</option>
                               <option value="Neutral" ${((L=n.manual)==null?void 0:L.mentalState)==="Neutral"?"selected":""}>Neutral</option>
                               <option value="Stressed" ${((V=n.manual)==null?void 0:V.mentalState)==="Stressed"?"selected":""}>Stressed</option>
                               <option value="Burnt Out" ${((b=n.manual)==null?void 0:b.mentalState)==="Burnt Out"?"selected":""}>Burnt Out</option>
                           </select>
                       </div>
                   </div>
                   
                   <div class="form-group" style="margin-bottom: 24px;">
                       <label>6. Key lesson learned this week <span style="color: var(--danger);">●</span></label>
                       <textarea id="wr-lesson" rows="2" placeholder="One thing you will carry into next week" style="width: 100%; padding: 12px; border-radius: 8px; border: 1px solid var(--border); background: var(--surface); color: var(--text);">${ge(((g=n.manual)==null?void 0:g.keyLesson)||"")}</textarea>
                   </div>
               `}
            </div>
            
            <div style="margin-bottom: 24px;">
               <div style="font-size: 0.85rem; color: var(--primary); font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 16px;">Section 6 of 7 — Next Week Intentions</div>
               
               ${!t&&n.manual?`
                   <div style="display: grid; gap: 16px; background: var(--surface); border: 1px solid var(--border); padding: 24px; border-radius: 8px;">
                       <div><strong style="color: var(--muted);">Primary Focus:</strong> ${ge(n.manual.nextFocus)}</div>
                       <div><strong style="color: var(--muted);">Target R:</strong> +${ge(n.manual.targetR)}R</div>
                       <div><strong style="color: var(--muted);">Rule to Enforce:</strong><p style="margin: 4px 0 0 0; line-height: 1.5;">${ge(n.manual.ruleEnforce)}</p></div>
                   </div>
               `:`
                   <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 24px;">
                       <div class="form-group">
                           <label>1. Primary focus next week <span style="color: var(--danger);">●</span></label>
                           <select id="wr-next-focus">
                               <option value="Consistency" ${((m=n.manual)==null?void 0:m.nextFocus)==="Consistency"||!n.manual?"selected":""}>Consistency</option>
                               <option value="Risk Management" ${((y=n.manual)==null?void 0:y.nextFocus)==="Risk Management"?"selected":""}>Risk Management</option>
                               <option value="Patience" ${((T=n.manual)==null?void 0:T.nextFocus)==="Patience"?"selected":""}>Patience</option>
                               <option value="Execution Quality" ${((A=n.manual)==null?void 0:A.nextFocus)==="Execution Quality"?"selected":""}>Execution Quality</option>
                               <option value="Emotional Control" ${((v=n.manual)==null?void 0:v.nextFocus)==="Emotional Control"?"selected":""}>Emotional Control</option>
                           </select>
                       </div>
                       <div class="form-group">
                           <label>2. Weekly R Target</label>
                           <input type="number" id="wr-target-r" step="0.1" value="${ge(((K=n.manual)==null?void 0:K.targetR)||"5.0")}" style="width: 100%; padding: 8px; border-radius: 4px; border: 1px solid var(--border); background: var(--bg); color: var(--text);" />
                       </div>
                   </div>
                   
                   <div class="form-group" style="margin-bottom: 24px;">
                       <label>3. One rule to enforce strictly <span style="color: var(--danger);">●</span></label>
                       <textarea id="wr-rule" rows="2" placeholder="e.g. No trading after 2 consecutive losses" style="width: 100%; padding: 12px; border-radius: 8px; border: 1px solid var(--border); background: var(--surface); color: var(--text);">${ge(((fe=n.manual)==null?void 0:fe.ruleEnforce)||"")}</textarea>
                   </div>
               `}
            </div>

            <div style="background: rgba(168, 85, 247, 0.05); padding: 24px; border-radius: 8px; border: 1px solid rgba(168, 85, 247, 0.3);">
               <div style="font-size: 0.85rem; color: #a855f7; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 16px;">Section 7 of 7 — AI Weekly Report</div>
               <div id="wr-ai-container" style="color: var(--text); line-height: 1.6; font-size: 0.95rem;">
                   ${n.aiSummary?Cy(n.aiSummary):'<span style="color: var(--muted); font-style: italic;">Submit your review to generate the AI report</span>'}
               </div>
            </div>

        </div>
    `;r.innerHTML=a,window.lucide&&window.lucide.createIcons()};function SA(n){return["Calm","Confident","Disciplined","Patient","Focused"].includes(n)?"var(--success)":["Overconfident","Tilted","Revenge","Fearful","FOMO","Stressed","Frustrated"].includes(n)?"var(--danger)":["None","-"].includes(n)?"var(--border)":"var(--warning)"}window.saveWeeklyReview=async function(n=!1){const e=window.currentReviewData;if(!e)return;const t=document.getElementById("wr-went-well").value.trim(),r=document.getElementById("wr-went-wrong").value.trim(),i=document.getElementById("wr-lesson").value.trim(),s=document.getElementById("wr-rule").value.trim();if(t.length<10||r.length<10||i.length<10||s.length<5){alert("Please complete all required text fields with sufficient detail (min 10 chars).");return}e.manual={rating:parseInt(document.getElementById("wr-rating").value),wentWell:t,wentWrong:r,followedPlan:document.getElementById("wr-plan-followed").value,mentalState:document.getElementById("wr-mental-state").value,keyLesson:i,nextFocus:document.getElementById("wr-next-focus").value,targetR:parseFloat(document.getElementById("wr-target-r").value)||0,ruleEnforce:s};const o=document.getElementById("btn-save-weekly-review"),a=document.getElementById("btn-skip-ai-weekly-review");if(o.innerText="Processing...",o.disabled=!0,a&&(a.disabled=!0),n)e.aiSummary='<div style="color: var(--muted); font-style: italic;">AI analysis was skipped manually to save cost.</div>';else{o.innerText="Generating AI Report...";try{await generateWeeklyReviewAI(e)}catch(d){console.error("AI Generation failed inline",d)}}let u=Store.weeklyReviews.findIndex(d=>d.key===e.key);u>-1?Store.weeklyReviews[u]=e:Store.weeklyReviews.unshift(e),Store.save(),window.currentReviewIsHistorical=!0,window.currentReviewEditable=!1,renderWeeklyReviewModal(e,!0,!1),renderWeeklyReviewHistory(),checkWeeklyReviewTrigger()};window.generateWeeklyReviewAI=async function(n){var t,r;const e=`
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
    `;try{const s=(await window.callServerGemini({prompt:e,model:((r=(t=window.Store)==null?void 0:t.settings)==null?void 0:r.geminiModel)||"gemini-4-hydrogen",systemInstruction:"You are an elite trading performance psychologist. Be direct, objective, and deeply insightful. Use clear HTML formatting."})||"").replace(/```html/g,"").replace(/```/g,"");n.aiSummary=Cy(s)}catch(i){console.error("AI Error:",i),n.aiSummary=`<span style="color:var(--danger)">AI generation failed. Please try again later or skip AI analysis. Error: ${ge(i.message)}</span>`}};window.exportWeeklyReviewPDF=function(){if(!window.jspdf){alert("PDF export not ready. Please wait a moment.");return}const{jsPDF:n}=window.jspdf,e=new n,t=document.getElementById("weekly-review-content").innerText;e.setFontSize(16),e.text("Quant OS Edge - Weekly Review",14,15),e.setFontSize(10);const r=e.splitTextToSize(t,180);e.text(r,14,25),e.save(`QuantEdge_WeeklyReview_${window.currentReviewData.startDate}.pdf`)};window.openWeeklyReviewModal=async function(n=null){let e;if(n){const o=n.split("-");e=Vs(new Date(o[0],o[1]-1,o[2]))}else e=Vs();let t=!1,r=Store.weeklyReviews.find(o=>o.key===e.key);const i=new Date;let s=!1;r?(i.getTime()-r.timestamp)/36e5<=48?s=!0:t=!0:(s=!0,r=await AA(e)),window.currentReviewData=r,window.currentReviewIsHistorical=t,window.currentReviewEditable=s,await renderWeeklyReviewModal(r,t,s),window.openModal("modal-weekly-review")};async function AA(n){const{monday:e,sunday:t,weekNum:r,key:i}=n;let s=Store.trades.filter(U=>{let j=new Date(U.date);return j>=e&&j<=t}),o=0,a=0,l=0,u=0,d=-999,f=999,_=null,I=null,w=new Set,S={Asian:0,London:0,"New York":0},P={},F=0,x=new Map,k=0,C=0,L=0,V=0,b={A:0,B:0,C:0,F:0},g=[],m={},y={},T={},A=["Calm","Confident","Disciplined","Patient","Focused"],v=0,K=new Map,fe=[];for(let U of s){let j=parseFloat(U.r)||0,R=parseFloat(U.pnlAmount)||0;o+=j,a+=R,j>d&&(d=j,_=U),j<f&&(f=j,I=U),j>0?l++:j<=0&&U.result==="Loss"&&u++,U.asset&&(P[U.asset]=(P[U.asset]||0)+1),U.session&&(S[U.session]=(S[U.session]||0)+1),U.accountId&&w.add(U.accountId);let O=new Date(U.date).toLocaleDateString("en-US",{weekday:"long"});x.has(O)||x.set(O,{trades:0,wins:0,losses:0,r:0,pnl:0});let Y=x.get(O);Y.trades++,j>0?Y.wins++:U.result==="Loss"&&Y.losses++,Y.r+=j,Y.pnl+=R,U.qualityScore&&(k+=parseInt(U.qualityScore),C++),U.ruleAdherence&&(V++,U.ruleAdherence==="Yes"?L++:g.push({date:U.date,pair:U.asset,reason:U.ruleDeviation||"No reason given"})),U.tradeGrade&&(b[U.tradeGrade]=(b[U.tradeGrade]||0)+1),U.confluences&&U.confluences.forEach(Z=>{m[Z]=(m[Z]||0)+1}),U.preEmotion&&(y[U.preEmotion]=(y[U.preEmotion]||0)+1,K.has(O)||K.set(O,[]),K.get(O).push(U.preEmotion)),U.duringEmotion&&(T[U.duringEmotion]=(T[U.duringEmotion]||0)+1,A.includes(U.preEmotion)&&A.includes(U.duringEmotion)&&v++),U.postNotes&&U.postNotes.trim().length>5&&fe.push({date:U.date,pair:U.asset,note:U.postNotes})}let te=x.size,Te={};for(let U of w){let j=s.filter(Ve=>Ve.accountId===U),R=0,O=0,Y=0,Z=0;j.forEach(Ve=>{R+=parseFloat(Ve.r)||0,O+=parseFloat(Ve.pnlAmount)||0,parseFloat(Ve.r)>0?Y++:Ve.result==="Loss"&&Z++});let ce=Store.accounts.find(Ve=>Ve.id===U),he=ce?ce.name:"Unknown";Te[U]={name:he,trades:j.length,r:R,pnl:O,wins:Y,losses:Z}}let me={r:-999,name:"-"},de={r:999,name:"-"},re=[];["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"].forEach(U=>{if(x.has(U)){let j=x.get(U);re.push({day:U,trades:j.trades,wl:`${j.wins}/${j.losses}`,r:j.r.toFixed(2),pnl:j.pnl.toFixed(2)}),j.r>me.r&&(me.r=j.r,me.name=U),j.r<de.r&&(de.r=j.r,de.name=U),j.r<=-(Store.settings.dailyLossLimitR||3)&&F++}}),x.size===0&&(me.r=0,de.r=0);let X=Object.keys(P).sort((U,j)=>P[j]-P[U])[0]||"-",ie=Object.keys(S).sort((U,j)=>S[j]-S[U])[0]||"-",Q=Object.keys(m).sort((U,j)=>m[j]-m[U]).slice(0,3),_e=Object.keys(y).sort((U,j)=>y[j]-y[U])[0]||"-",ke=Object.keys(T).sort((U,j)=>T[j]-T[U])[0]||"-",be=0,Se=te,Ae=Object.keys(Store.planner);for(let U of Ae){let j=U.split("_")[1];if(!j)continue;let R=new Date(j);R>=e&&R<=t&&U.startsWith("Daily_")&&be++}let J=[];return["Monday","Tuesday","Wednesday","Thursday","Friday"].forEach(U=>{let j=K.get(U);if(j&&j.length>0){let R=j.sort((O,Y)=>j.filter(Z=>Z===O).length-j.filter(Z=>Z===Y).length).pop();J.push({day:U.substring(0,3),emotion:R})}else J.push({day:U.substring(0,3),emotion:"None"})}),{key:i,weekNum:r,startDate:e.toISOString().split("T")[0],endDate:t.toISOString().split("T")[0],timestamp:new Date().getTime(),daysWithTrades:te,sessionCounts:S,accountSet:Array.from(w),totalTrades:s.length,winRate:s.length>0?l/(l+u)*100:0,totalR:o,totalPnl:a,bestDay:me,worstDay:de,avgRPerDay:te>0?o/te:0,accountStats:Te,tableRows:re,bestTrade:_?{pair:_.asset,r:_.r,grade:_.tradeGrade}:null,worstTrade:I?{pair:I.asset,r:I.r,grade:I.tradeGrade}:null,mostTradedPair:X,mostUsedSession:ie,avgQuality:C>0?k/C:0,ruleAdherencePct:V>0?L/V*100:0,gradeCounts:b,ruleViolations:g,topConfluences:Q,dailyLossHits:F,plansLogged:be,expectedPlanDays:Se,domPre:_e,domDuring:ke,emotionalConsistency:s.length>0?v/s.length*100:0,emotionTimeline:J,postReflections:fe,manual:null,aiSummary:null}}function Le(n){return n==null?"":String(n).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function z(n,e,t=32){if(n=String(n||""),e=String(e||""),n.length+e.length>=t){const i=t-e.length-1;i>4&&(n=n.substring(0,i))}const r=Math.max(1,t-n.length-e.length);return n+" ".repeat(r)+e}function Ft(n){if(!n)return null;if(n instanceof Date)return isNaN(n.getTime())?null:new Date(n.getTime());const e=String(n).trim(),t=e.match(/^(\d{4})-(\d{2})-(\d{2})$/);if(t){const i=parseInt(t[1],10),s=parseInt(t[2],10)-1,o=parseInt(t[3],10);return new Date(i,s,o,12,0,0,0)}const r=new Date(e);return isNaN(r.getTime())?null:r}function ai(n=new Date){const e=Ft(n)||new Date;return`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`}function jf(n=new Date){const e=Ft(n)||new Date;return`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}`}function Lc(n,e){if(typeof n!="string")return e;const t=n.trim().match(/^(\d{1,2}):(\d{2})$/);if(!t)return e;const r=Math.max(0,Math.min(23,parseInt(t[1],10))),i=Math.max(0,Math.min(59,parseInt(t[2],10)));return r*60+i}function On(n){return!!n&&n.resultType!=="Missed"&&n.resultType!=="Canceled"}function Vc(n=[]){const e=n.length;let t=0,r=0,i=0,s=0,o=0,a=0,l=0,u=0,d=0,f=[],_=0,I=0,w=0,S=0,P=0,F=null,x=null,k=-1/0,C=1/0;const L={},V={},b={},g={};n.forEach(re=>{const X=parseFloat(re.r)||0,ie=parseFloat(re.pnlAmount)||0;o+=X,s+=ie,f.push(X),X>.05?(t++,a+=ie>0?ie:0,u+=X):X<-.05||re.result==="Loss"?(r++,l+=Math.abs(ie),d+=Math.abs(X)):i++,X>k&&(k=X,F=re),X<C&&(C=X,x=re),re.ruleAdherence==="Yes"&&_++,re.qualityScore!==void 0&&re.qualityScore!==null&&!isNaN(parseInt(re.qualityScore))&&(I+=parseInt(re.qualityScore),w++);const Q=["Calm","Confident","Disciplined","Patient"];re.preEmotion&&(P++,Q.includes(re.preEmotion)&&S++),re.duringEmotion&&(P++,Q.includes(re.duringEmotion)&&S++);const _e=re.setupType||"Discretionary";L[_e]||(L[_e]={count:0,r:0,pnl:0}),L[_e].count++,L[_e].r+=X,L[_e].pnl+=ie;const ke=re.session||"Unspecified";V[ke]||(V[ke]={count:0,r:0,pnl:0}),V[ke].count++,V[ke].r+=X,V[ke].pnl+=ie;const be=re.accountId||"default";b[be]||(b[be]={count:0,r:0,pnl:0}),b[be].count++,b[be].r+=X,b[be].pnl+=ie;const Se=re.asset||"Other";g[Se]||(g[Se]={count:0,r:0,pnl:0}),g[Se].count++,g[Se].r+=X,g[Se].pnl+=ie});const m=t+r,y=m>0?t/m*100:(e>0,0),T=t>0?u/t:0,A=r>0?d/r:0;let v=0;l>0?v=a/l:a>0&&(v=99.99);const K=e>0?o/e:0,fe=e>0?s/e:0;let te=0;if(e>1){const re=o/e,X=f.reduce((Q,_e)=>Q+Math.pow(_e-re,2),0)/(e-1),ie=Math.sqrt(X);ie>1e-4&&(te=re/ie*Math.sqrt(Math.min(e,252)))}const Te=e>0?_/e*100:100,me=w>0?I/w:9,de=P>0?S/P*10:9;return{totalTrades:e,wins:t,losses:r,breakevens:i,winRate:y,totalPnl:s,totalR:o,grossProfit:a,grossLoss:l,profitFactor:v,avgWinR:T,avgLossR:A,expectancyR:K,expectancyPnl:fe,sharpeRatio:te,ruleAdherentCount:_,ruleViolations:e-_,ruleAdherenceRate:Te,avgQuality:me,psychStability:de,bestTrade:F,worstTrade:x,setupMap:L,sessionMap:V,accountMap:b,assetMap:g}}const Hf="qe_telegram_backup";class RA{constructor(){this.checkInterval=6e4,this.intervalId=null,this.alertBackoff=new Map,this._pendingReports=new Set,this._uiHydrated=!1}_getDefaultSchedule(){return{dailyTime:"21:00",monthlyDay:1,monthlyTime:"08:00",weeklyDay:0,weeklyTime:"20:00"}}_ensureStoreConfig(){if(typeof window.Store>"u"||!window.Store)return null;(!Store.settings||typeof Store.settings!="object")&&(Store.settings={});const e=Store.settings.webhooks||{};if(!Store.settings.notifications||typeof Store.settings.notifications!="object"){const r=Store.settings.notifications||{};Store.settings.notifications={telegram:{token:typeof r.telegramToken=="string"?r.telegramToken:typeof e.telegramToken=="string"?e.telegramToken:"",chatId:typeof r.telegramChat=="string"?r.telegramChat:typeof e.telegramChat=="string"?e.telegramChat:"",alerts:r.telegramRtAlerts!==!1,daily:r.telegramDailyRep!==!1,weekly:r.telegramWeeklyRep!==!1,monthly:!!r.telegramMonthlyRep,enabled:r.telegramEnabled!==!1},schedule:this._getDefaultSchedule(),lastSent:{daily:"",weekly:"",monthly:""},thresholds:{lossWarn:r.lossThresh||50,ddWarn:r.ddThresh||70,streak:r.streakThresh||3,eqHigh:r.eqHigh!==!1,psychEscalate:r.psychEscalation!==!1,tradeLogged:!!r.tradeLogged},morningWeeklyGoals:{enabled:!0,startHour:5,endHour:12,browser:!0,telegram:!1}}}const t=Store.settings.notifications;(!t.telegram||typeof t.telegram!="object")&&(t.telegram={token:typeof e.telegramToken=="string"?e.telegramToken:"",chatId:typeof e.telegramChat=="string"?e.telegramChat:"",enabled:!0,alerts:!0,daily:!0,weekly:!0,monthly:!1});try{const r=localStorage.getItem(Hf);if(r){const i=JSON.parse(r);i&&!i.cleared&&!t.telegram.token&&!t.telegram.chatId&&i.token&&i.chatId&&(t.telegram={...t.telegram,...i},i.updatedAt&&!Store.settings.notificationsUpdatedAt&&(Store.settings.notificationsUpdatedAt=i.updatedAt))}}catch{}return t.schedule?t.schedule={...this._getDefaultSchedule(),...t.schedule}:t.schedule=this._getDefaultSchedule(),t.lastSent||(t.lastSent={daily:"",weekly:"",monthly:""}),t.thresholds||(t.thresholds={lossWarn:50,ddWarn:70,streak:3,eqHigh:!0,psychEscalate:!0,tradeLogged:!1}),t.morningWeeklyGoals||(t.morningWeeklyGoals={enabled:!0,startHour:5,endHour:12,browser:!0,telegram:!1}),t}syncUIFromStore({skipIfFocused:e=!1,force:t=!1}={}){var o,a,l,u,d,f,_,I,w,S,P,F,x;const r=this._ensureStoreConfig();if(!r)return;const i=(k,C)=>{const L=document.getElementById(k);L&&(!t&&e&&document.activeElement===L||(L.value=C))},s=(k,C)=>{const L=document.getElementById(k);L&&(L.checked=!!C)};i("webhook-telegram-token",((o=r.telegram)==null?void 0:o.token)||""),i("webhook-telegram-chat",((a=r.telegram)==null?void 0:a.chatId)||""),s("telegram-enabled",((l=r.telegram)==null?void 0:l.enabled)!==!1),s("telegram-rt-alerts",((u=r.telegram)==null?void 0:u.alerts)!==!1),s("telegram-daily-rep",((d=r.telegram)==null?void 0:d.daily)!==!1),s("telegram-weekly-rep",((f=r.telegram)==null?void 0:f.weekly)!==!1),s("telegram-monthly-rep",!!((_=r.telegram)!=null&&_.monthly)),i("notif-loss-thresh",((I=r.thresholds)==null?void 0:I.lossWarn)||50),i("notif-dd-thresh",((w=r.thresholds)==null?void 0:w.ddWarn)||70),i("notif-streak-thresh",((S=r.thresholds)==null?void 0:S.streak)||3),s("notif-eq-high",((P=r.thresholds)==null?void 0:P.eqHigh)!==!1),s("notif-psych-escalation",((F=r.thresholds)==null?void 0:F.psychEscalate)!==!1),s("notif-trade-logged",!!((x=r.thresholds)!=null&&x.tradeLogged)),s("notif-morning-enabled",r.morningWeeklyGoals.enabled!==!1),i("notif-morning-start",String(r.morningWeeklyGoals.startHour??5)),i("notif-morning-end",String(r.morningWeeklyGoals.endHour??12)),s("notif-morning-browser",r.morningWeeklyGoals.browser!==!1),s("notif-morning-telegram",!!r.morningWeeklyGoals.telegram),this._uiHydrated=!0}init(){this.syncUIFromStore({force:!this._uiHydrated}),this.startEngine()}startEngine(){this.intervalId&&clearInterval(this.intervalId),this.intervalId=setInterval(()=>{this.checkScheduledReports().catch(e=>{console.warn("Scheduled report check error:",(e==null?void 0:e.message)||e)})},this.checkInterval),this.checkScheduledReports().catch(e=>{console.warn("Initial scheduled report check error:",(e==null?void 0:e.message)||e)})}saveSettings(){var w,S,P,F,x,k,C,L,V,b,g,m,y;const e=this._ensureStoreConfig()||{};if(!this._uiHydrated){const T=document.getElementById("webhook-telegram-token"),A=document.getElementById("webhook-telegram-chat");!!(T&&T.value.trim()||A&&A.value.trim())?this._uiHydrated=!0:this.syncUIFromStore({force:!0})}const t={...this._getDefaultSchedule(),...e.schedule||{}},r={daily:"",weekly:"",monthly:"",...e.lastSent||{}},i=e.morningWeeklyGoals||{enabled:!0,startHour:5,endHour:12,browser:!0,telegram:!1},s=(T,A="")=>{const v=document.getElementById(T);return v?v.value.trim():A},o=(T,A=!1)=>{const v=document.getElementById(T);return v?v.checked:A},a=(T,A)=>{const v=document.getElementById(T);if(!v)return A;const K=parseInt(v.value,10);return Number.isNaN(K)?A:K},l=s("webhook-telegram-token",((w=e.telegram)==null?void 0:w.token)||"").replace(/\s+/g,""),u=l.toLowerCase().startsWith("bot")?l.substring(3):l,d=s("webhook-telegram-chat",((S=e.telegram)==null?void 0:S.chatId)||"").trim(),f=Math.max(0,Math.min(23,a("notif-morning-start",i.startHour??5)));let _=Math.max(1,Math.min(24,a("notif-morning-end",i.endHour??12)));_<=f&&(_=Math.min(24,f+1));const I=Date.now();Store.settings.notifications={telegram:{token:u,chatId:d,enabled:o("telegram-enabled",((P=e.telegram)==null?void 0:P.enabled)!==!1),alerts:o("telegram-rt-alerts",((F=e.telegram)==null?void 0:F.alerts)!==!1),daily:o("telegram-daily-rep",((x=e.telegram)==null?void 0:x.daily)!==!1),weekly:o("telegram-weekly-rep",((k=e.telegram)==null?void 0:k.weekly)!==!1),monthly:o("telegram-monthly-rep",!!((C=e.telegram)!=null&&C.monthly))},schedule:t,lastSent:r,thresholds:{lossWarn:a("notif-loss-thresh",((L=e.thresholds)==null?void 0:L.lossWarn)||50),ddWarn:a("notif-dd-thresh",((V=e.thresholds)==null?void 0:V.ddWarn)||70),streak:a("notif-streak-thresh",((b=e.thresholds)==null?void 0:b.streak)||3),eqHigh:o("notif-eq-high",((g=e.thresholds)==null?void 0:g.eqHigh)!==!1),psychEscalate:o("notif-psych-escalation",((m=e.thresholds)==null?void 0:m.psychEscalate)!==!1),tradeLogged:o("notif-trade-logged",!!((y=e.thresholds)!=null&&y.tradeLogged))},morningWeeklyGoals:{enabled:o("notif-morning-enabled",i.enabled!==!1),startHour:f,endHour:_,browser:o("notif-morning-browser",i.browser!==!1),telegram:o("notif-morning-telegram",!!i.telegram)}},Store.settings.notificationsUpdatedAt=I;try{localStorage.setItem(Hf,JSON.stringify({...Store.settings.notifications.telegram,updatedAt:I,cleared:!u&&!d}))}catch{}Store.save(),window.SyncEngine&&window.SyncEngine.isSyncing&&typeof window.SyncEngine.syncSettings=="function"&&window.SyncEngine.syncSettings(Store.settings)}manualReport(e){this.saveSettings();const t=document.getElementById("notif-test-status");t&&(t.innerText="Generating...",t.style.color="var(--text)");const r=(i,s=!1)=>{t&&(t.innerText=i,t.style.color=s?"var(--danger)":"var(--success)"),s&&console.error(i)};try{e==="daily"?this.sendDailyReport(!0).then(()=>r("Daily report generated & sent")).catch(i=>r("Error: "+i.message,!0)):e==="weekly"?this.sendWeeklyReport(!0).then(()=>r("Weekly report generated & sent")).catch(i=>r("Error: "+i.message,!0)):e==="monthly"&&this.sendMonthlyReport(!0).then(()=>r("Monthly report generated & sent")).catch(i=>r("Error: "+i.message,!0))}catch(i){r("Error: "+i.message,!0)}}_getWeekBoundariesLocal(e=new Date){if(typeof window.getLocalWeekBoundaries=="function")return window.getLocalWeekBoundaries(e);const t=Ft(e)||new Date;t.setHours(0,0,0,0);const r=t.getDay(),i=r===0?-6:1-r,s=new Date(t);s.setDate(t.getDate()+i);const o=new Date(s);o.setDate(s.getDate()+6),o.setHours(23,59,59,999);const a=Math.max(1,Math.ceil((s.getTime()-new Date(s.getFullYear(),0,1).getTime())/864e5/7));return{monday:s,sunday:o,weekNum:a,key:ai(s)}}_hasTelegramCredentials(e){var t,r,i;return!!((t=e==null?void 0:e.telegram)!=null&&t.enabled&&((r=e==null?void 0:e.telegram)!=null&&r.token)&&((i=e==null?void 0:e.telegram)!=null&&i.chatId))}_markReportSent(e,t){Store.settings.notifications&&(Store.settings.notifications.lastSent||(Store.settings.notifications.lastSent={daily:"",weekly:"",monthly:""}),Store.settings.notifications.lastSent[e]=t,typeof Store.save=="function"&&Store.save())}async _runDedupedReport(e,t,r){if(((Store.settings.notifications||{}).lastSent||{})[e]===t)return!1;const o=`${e}:${t}`;if(this._pendingReports.has(o))return!1;this._pendingReports.add(o);try{const a=await r();return a&&this._markReportSent(e,t),!!a}finally{this._pendingReports.delete(o)}}async checkScheduledReports(e=new Date){var o,a,l,u;const t=(o=Store.settings)==null?void 0:o.notifications;if(!t||!this._hasTelegramCredentials(t))return{daily:!1,weekly:!1,monthly:!1};const r={...this._getDefaultSchedule(),...t.schedule||{}},i=e.getHours()*60+e.getMinutes(),s={daily:!1,weekly:!1,monthly:!1};if((a=t.telegram)!=null&&a.daily){const d=ai(e),f=Lc(r.dailyTime,1260);i>=f&&(s.daily=await this._runDedupedReport("daily",d,()=>this.sendDailyReport(!1,e)))}if((l=t.telegram)!=null&&l.weekly){const d=Number.isInteger(r.weeklyDay)?r.weeklyDay:0,f=Lc(r.weeklyTime,1200);if(e.getDay()===d&&i>=f){const _=this._getWeekBoundariesLocal(e).key;s.weekly=await this._runDedupedReport("weekly",_,()=>this.sendWeeklyReport(!1,e))}}if((u=t.telegram)!=null&&u.monthly){const d=Math.max(1,Math.min(28,parseInt(r.monthlyDay,10)||1)),f=Lc(r.monthlyTime,480),_=jf(e),I=e.getDate(),w=I===d&&i>=f,S=I>d;if(w||S){const P=new Date(e.getFullYear(),e.getMonth()-1,1,0,0,0,0),F=new Date(e.getFullYear(),e.getMonth(),0,23,59,59,999),x=(Store.trades||[]).some(k=>{if(!On(k))return!1;const C=Ft(k.date);return C&&C>=P&&C<=F});(w||x)&&(s.monthly=await this._runDedupedReport("monthly",_,()=>this.sendMonthlyReport(!1,e)))}}return s}async handleJournalTradeTrigger(e,t=new Date){var o,a,l;const r=(o=Store.settings)==null?void 0:o.notifications;if(!r||!this._hasTelegramCredentials(r))return{weekly:!1,monthly:!1};const i={...this._getDefaultSchedule(),...r.schedule||{}},s={weekly:!1,monthly:!1};if((a=r.telegram)!=null&&a.weekly){const u=Number.isInteger(i.weeklyDay)?i.weeklyDay:0,d=this._getWeekBoundariesLocal(t),f=Ft(e==null?void 0:e.date),_=t.getDay()===u,I=!!(f&&f.getDay()===u&&this._getWeekBoundariesLocal(f).key===d.key);(_||I)&&(s.weekly=await this._runDedupedReport("weekly",d.key,()=>this.sendWeeklyReport(!1,t)))}if((l=r.telegram)!=null&&l.monthly){const u=Math.max(1,Math.min(28,parseInt(i.monthlyDay,10)||1)),d=jf(t);t.getDate()===u&&(s.monthly=await this._runDedupedReport("monthly",d,()=>this.sendMonthlyReport(!1,t)))}return s}async doSend(e,t,r=!1){const i=Store.settings.notifications;let s=[];if(i.telegram.enabled&&i.telegram.token&&i.telegram.chatId&&(r||t.telegram)){const a=e("telegram");a&&(this.lastTelegramSent&&Date.now()-this.lastTelegramSent<1100&&await new Promise(l=>setTimeout(l,1100-(Date.now()-this.lastTelegramSent))),this.lastTelegramSent=Date.now(),s.push(this.postTelegram(i.telegram.token,i.telegram.chatId,a)))}if(s.length>0)try{const a=await Promise.allSettled(s);let l=[];for(let u of a)u.status==="rejected"&&(l.push(u.reason.message||u.reason),console.error("Notification delivery failed for a platform:",u.reason));if(l.length===s.length)throw new Error("All checks failed: "+l.join(" | "));return l.length>0&&console.warn("Some notifications failed: "+l.join(" | ")),!0}catch(a){throw console.error("Notification send error",a),a}else if(r)throw new Error("No notification platforms are fully configured (check URLs/Tokens).");return!1}_formatTelegramApiError(e,t){let r=e||`Telegram API error (${t||"unknown"})`;return r.includes("chat not found")?r+=". Tip: Open your bot in Telegram, press /start, and verify your numeric Chat ID.":r.includes("Unauthorized")||t===401?r+=". Tip: Double check your Bot Token from @BotFather.":r.includes("Not Found")||t===404?r="Invalid Bot Token. Ensure your Bot Token has the full format (e.g. 123456789:ABC-DEF...) from @BotFather.":r.includes("bot was blocked")&&(r+=". Tip: You blocked this bot in Telegram. Unblock it to receive alerts."),r}async _sendDirectTelegramAttempt(e,t,r,i){const s=new URLSearchParams;s.append("chat_id",t),s.append("text",r),i&&s.append("parse_mode",i);const o=await fetch(e,{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:s}),a=await o.json().catch(()=>({}));if(!o.ok||!a.ok){const l=new Error(this._formatTelegramApiError(a.description,o.status));throw l.isTelegramApiError=!0,l.description=a.description||"",l.httpStatus=o.status,l}return{ok:!0,result:a.result}}async postTelegram(e,t,r){e=(e||"").trim().replace(/\s+/g,""),t=(t||"").trim();const i=e.toLowerCase().startsWith("bot")?e.substring(3):e;if(!i||!t)throw new Error("Telegram Bot Token and Chat ID are required. Please configure them in Settings > Notifications & Automated Reports.");if(!(typeof window.isStaticHostWithoutBackend=="function"&&window.isStaticHostWithoutBackend()))try{const a=typeof window.resolveApiUrl=="function"?window.resolveApiUrl("/api/telegram/send"):"/api/telegram/send",l=await fetch(a,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({token:i,chatId:t,text:r,parse_mode:"HTML"})});if((l.headers.get("content-type")||"").toLowerCase().includes("application/json")&&l.status!==404&&l.status!==405){const d=await l.json().catch(()=>({}));if(l.ok&&d.ok)return{ok:!0,result:d.result};if(d&&typeof d.error=="string"&&l.status<500){const f=new Error(d.error);throw f.isRelayRejection=!0,f}}}catch(a){if(a!=null&&a.isRelayRejection)throw a;console.warn("Server relay unavailable, falling back to direct Telegram API:",(a==null?void 0:a.message)||a)}const o=`https://api.telegram.org/bot${i}/sendMessage`;try{return await this._sendDirectTelegramAttempt(o,t,r,"HTML")}catch(a){const l=String((a==null?void 0:a.description)||(a==null?void 0:a.message)||"");if((a==null?void 0:a.isTelegramApiError)&&(l.includes("can't parse entities")||l.includes("Character")||l.includes("tag"))){if(r.includes("<blockquote expandable>"))try{const d=r.replace(/<blockquote expandable>/g,"<blockquote>");return await this._sendDirectTelegramAttempt(o,t,d,"HTML")}catch{}try{const d=String(r).replace(/<[^>]*>/g,"");return await this._sendDirectTelegramAttempt(o,t,d,"")}catch(d){throw d}}throw a!=null&&a.isTelegramApiError?a:new Error("Could not reach api.telegram.org directly (network offline, VPN/firewall, or tracker blocker). Disable adblocker for api.telegram.org or set a Backend Server URL in Settings → AI Engine & Server Connection.")}}isSpam(e,t=5){const r=this.alertBackoff.get(e)||0,i=Date.now();return i-r<t*6e4?!0:(this.alertBackoff.set(e,i),!1)}dispatchLossWarning(e,t,r,i){var _;const s=Store.settings.notifications;if(this.isSpam("loss_warn_"+e.name,10))return;const o=Math.round(Math.min(1,Math.max(0,i))*10),a="█".repeat(o)+"░".repeat(10-o),l=Math.round(i*100),u=Math.max(0,r-Math.abs(t)).toFixed(2),d=[z("Account",Le(e.name).substring(0,16),32),z("Daily Loss So Far",`${t.toFixed(2)}R`,32),z("Daily Limit",`${r.toFixed(2)}R`,32),z("Risk Budget Used",`${l}%`,32),z("Remaining Allowance",`${u}R`,32)].join(`
`),f=I=>I==="discord"?{embeds:[{title:"⚠️ PORTFOLIO ALERT — DAILY LOSS WARNING",color:15158332,description:`**Account:** ${e.name}
**Loss So Far:** ${t.toFixed(2)}R of ${r.toFixed(2)}R Limit
**Used:** ${l}% [${a}]
**Remaining:** ${u}R

*Slow down. Protect your capital.*`}]}:`⚠️ <b>PORTFOLIO ALERT — DAILY LOSS WARNING</b>
<b>Account:</b> <code>${Le(e.name)}</code>
<b>Loss Today:</b> <code>${t.toFixed(2)}R</code> of <code>${r.toFixed(2)}R</code> (${l}% used)

<pre>
Risk Allowance Gauge
────────────────────────────────
[${a}] ${l}%

${d}
</pre>

<i>⚠️ Capital preservation protocol engaged. Review rule checklist before taking any further trades.</i>`;this.doSend(f,{telegram:(_=s.telegram)==null?void 0:_.alerts})}dispatchLossHit(e,t,r){var a;const i=Store.settings.notifications;if(this.isSpam("loss_hit_"+e.name,60))return;const s=[z("Account",Le(e.name).substring(0,16),32),z("Loss Incurred",`${t.toFixed(2)}R`,32),z("Loss Barrier",`${r.toFixed(2)}R (100%)`,32),z("Terminal Status","LOCKED",32),z("Reflection Protocol","MANDATORY",32)].join(`
`),o=l=>l==="discord"?{embeds:[{title:"🔴 TRADING HALT — DAILY LIMIT REACHED",color:15158332,description:`**Account:** ${e.name}
**Loss Incurred:** ${t.toFixed(2)}R (100% of ${r.toFixed(2)}R Limit)

Journal is locked. Complete reflection to unlock tomorrow.
**Stop. Breathe. Review.**`}]}:`🔴 <b>TRADING HALT — DAILY LIMIT REACHED</b>
<b>Account:</b> <code>${Le(e.name)}</code>
<b>Loss Incurred:</b> <code>${t.toFixed(2)}R</code> (100% of Limit)

<pre>
Terminal Protocol Status
────────────────────────────────
${s}
</pre>

<blockquote expandable>
<b>Discipline Directive:</b>
Terminal is locked for the remainder of today. Step away from the screens immediately. Complete your trade reflection before trading tomorrow.
</blockquote>`;this.doSend(o,{telegram:(a=i.telegram)==null?void 0:a.alerts})}dispatchEquityHigh(e,t,r){var u;const i=Store.settings.notifications;if(!i.thresholds.eqHigh)return;const s=t-r,o=s/r*100,a=[z("Account",Le(e.name).substring(0,16),32),z("New Peak Equity",`$${Number(t).toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2})}`,32),z("Previous Peak",`$${Number(r).toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2})}`,32),z("Milestone Gain",`+$${Number(s).toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2})}`,32),z("Net Growth",`+${o.toFixed(2)}%`,32)].join(`
`),l=d=>d==="discord"?{embeds:[{title:"🏆 PORTFOLIO MILESTONE — NEW EQUITY HIGH",color:3066993,description:`**Account:** ${e.name}
**New High:** $${parseFloat(t).toLocaleString()}
**Gain:** +$${parseFloat(s).toLocaleString()} (+${o.toFixed(2)}%)

*Keep building. Stay disciplined.*`}]}:`🏆 <b>PORTFOLIO MILESTONE — NEW EQUITY HIGH</b>
<b>Account:</b> <code>${Le(e.name)}</code>

<pre>
Milestone Audit Ledger
────────────────────────────────
${a}
</pre>

<i>Discipline creates compounding. Maintain your system execution rules.</i>`;this.doSend(l,{telegram:(u=i.telegram)==null?void 0:u.alerts})}dispatchConsecutiveLoss(e,t){var a;const r=Store.settings.notifications;if(this.isSpam("streak_loss",30))return;const i=t.reduce((l,u)=>l+(parseFloat(u.r)||0),0),s=t.slice(0,5).map(l=>{const u=Le(l.asset||"Asset").substring(0,14),d=(parseFloat(l.r)||0).toFixed(2)+"R";return z(`❌ ${u}`,d,32)}).join(`
`),o=l=>l==="discord"?{embeds:[{title:"🔁 DISCIPLINE ALERT — LOSS STREAK DETECTED",color:15158332,description:`**Consecutive Losses:** ${e}
**Total Streak Loss:** ${i.toFixed(2)}R
**Psychological Risk:** ELEVATED

*Consider stepping away. Review before next trade.*`}]}:`🔁 <b>DISCIPLINE ALERT — LOSS STREAK DETECTED</b>
<b>Streak Count:</b> <code>${e} Consecutive Losses</code>

<pre>
Recent Loss Executions
────────────────────────────────
${s}
────────────────────────────────
${z("Total Streak Loss",`${i.toFixed(2)}R`,32)}
${z("Psychological State","ELEVATED RISK",32)}
</pre>

<i>High risk of revenge trading or tilt. Step away from charts for minimum 30 minutes.</i>`;this.doSend(o,{telegram:(a=r.telegram)==null?void 0:a.alerts})}dispatchPsychEscalation(e,t,r){var u;const i=Store.settings.notifications;if(!i.thresholds.psychEscalate||this.isSpam("psych_escalation",60))return;const s=e==="CRITICAL",o=s?"🔴 CRITICAL":"🟠 ELEVATED",a=[z("Mental Risk Level",e,32),z("Negative State Ratio",`${t}%`,32),z("Consecutive Losses",`${r} trades`,32),z("Risk Protocol",s?"HALT TRADING":"HALVE POSITION SIZE",32)].join(`
`),l=d=>d==="discord"?{embeds:[{title:"🧠 PSYCH RISK ESCALATION",color:s?15158332:15105570,description:`**Risk Level:** ${o}
**Negative Emotions:** ${t}%
**Losses:** ${r}

*Your mental state is affecting performance. Step back.*`}]}:`🧠 <b>PSYCHOLOGICAL RISK ESCALATION</b>
<b>Current State:</b> ${o}

<pre>
Behavioral Risk Assessment
────────────────────────────────
${a}
</pre>

<blockquote expandable>
<b>Psychology Coach Directive:</b>
Emotional equilibrium compromised. Do not attempt to make back losses in this state. Close terminal and reset mental state.
</blockquote>`;this.doSend(l,{telegram:(u=i.telegram)==null?void 0:u.alerts})}dispatchTradeLogged(e,t=!1){var y,T;const r=Store.settings.notifications||{};if(!t&&!((y=r.thresholds)!=null&&y.tradeLogged))return Promise.resolve(!1);const i=parseFloat(e.r)||0,s=parseFloat(e.pnlAmount)||0,o=i>=0?"+":"",a=s>=0?"+":"",l=Store.accounts.find(A=>String(A.id)===String(e.accountId)),u=l?l.name:"Portfolio Account",d=l&&l.balance?`$${parseFloat(l.balance).toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2})}`:"-",_=(e.tradeDirection||e.tradeType||e.direction||"").toLowerCase().includes("long")?"🟢 LONG":"🔴 SHORT",I=i>0?"🟢":i<0?"🔴":"⚪",w=e.entryPrice?Number(e.entryPrice).toFixed(e.entryPrice<10?4:2):"-",S=e.exitPrice?Number(e.exitPrice).toFixed(e.exitPrice<10?4:2):"-",P=e.riskAmount?`$${Number(e.riskAmount).toFixed(0)}`:e.riskPercent?`${e.riskPercent}%`:"-",F=e.plannedR?`1:${Number(e.plannedR).toFixed(1)}`:"-",x=e.ruleAdherence==="Yes"?"✓ PASS (100%)":"✕ DEVIATION",k=e.session||"London Open",C=e.setupType||"Liquidity Sweep",L=e.preEmotion||"Calm",V=e.duringEmotion||"Disciplined",b=[z("Execution Type",`${e.executionType||"Market"} (${k})`,32),z("Strategy Setup",C,32),z("Entry → Exit",`${w} → ${S}`,32),z("Risk / Planned R",`${P} (${F})`,32),z("Rule Adherence",x,32),z("Psych State",`${L} / ${V}`,32)].join(`
`);let g="";e.postNotes&&e.postNotes.trim()&&(g=`
<blockquote expandable>
<b>Trade Reflection:</b>
${Le(e.postNotes.trim())}
</blockquote>`);const m=A=>A==="discord"?{embeds:[{title:`📝 TRADE EXECUTION TICKET — ${e.asset}`,color:i>=0?3066993:15158332,description:`**Direction:** ${e.tradeDirection||"Long"}
**Result:** ${o}${i.toFixed(2)}R (${a}$${s.toFixed(2)})
**Grade:** ${e.tradeGrade||"-"}
**Setup:** ${C}
**Account:** ${u}

*${e.postNotes||""}*`,footer:{text:"QuantEdge Portfolio OS"}}]}:`📝 <b>TRADE EXECUTION TICKET</b>
<b>Asset:</b> <code>${Le(e.asset)}</code>  •  <b>Direction:</b> ${_}
<b>Result:</b> ${I} <code>${o}${i.toFixed(2)}R</code> (<code>${a}$${s.toFixed(2)}</code>)  •  <b>Grade:</b> <code>${Le(e.tradeGrade||"A")}</code>

<pre>
Execution Audit Ledger          Value
────────────────────────────────
${b}
</pre>`+g+`

💼 <b>Account:</b> ${Le(u)}  •  <b>Balance:</b> <code>${d}</code>`;return this.doSend(m,{telegram:(T=r.telegram)==null?void 0:T.alerts},t)}dispatchDrawdownWarning(e,t,r,i){var _;const s=Store.settings.notifications;if(this.isSpam("dd_warn_"+e.name,60))return;const o=Math.round(Math.min(1,Math.max(0,i))*10),a="█".repeat(o)+"░".repeat(10-o),l=Math.max(0,r-t),u=Math.round(i*100),d=[z("Account",Le(e.name).substring(0,16),32),z("Current Drawdown",`$${t.toFixed(2)}`,32),z("Max Permitted DD",`$${r.toFixed(2)}`,32),z("DD Consumption",`${u}%`,32),z("Remaining Buffer",`$${l.toFixed(2)}`,32)].join(`
`),f=I=>I==="discord"?{embeds:[{title:"⚠️ DRAWDOWN WARNING",color:15158332,description:`**Account:** ${e.name}
**Current DD:** $${t.toFixed(2)} of $${r.toFixed(2)}
**Used:** ${u}% [${a}]
**Remaining:** $${l.toFixed(2)}

*Reduce position size immediately.*`}]}:`⚠️ <b>PORTFOLIO ALERT — DRAWDOWN WARNING</b>
<b>Account:</b> <code>${Le(e.name)}</code>
<b>Drawdown:</b> <code>$${t.toFixed(2)}</code> of <code>$${r.toFixed(2)}</code> (${u}% used)

<pre>
Drawdown Utilization Gauge
────────────────────────────────
[${a}] ${u}%

${d}
</pre>

<i>Approaching maximum trailing drawdown barrier. Halve position risk immediately.</i>`;this.doSend(f,{telegram:(_=s.telegram)==null?void 0:_.alerts})}dispatchPropTargetReached(e,t,r){var f;const i=Store.settings.notifications;if(this.isSpam("prop_target_"+e.name,1440))return;const s=parseFloat(e.balance)||1e5,o=r/s*100,a=t/s*100;let l=0;e.highWaterMark&&e.currentBalance&&(l=Math.max(0,(e.highWaterMark-e.currentBalance)/s*100));const u=[z("Account",Le(e.name).substring(0,16),32),z("Challenge Phase",e.phase||"Phase 1",32),z("Target Objective",`${o.toFixed(1)}% ($${r.toFixed(0)})`,32),z("Achieved Gain",`${a.toFixed(1)}% ($${t.toFixed(0)})`,32),z("Max DD Incurred",`${l.toFixed(1)}% of ${e.maxTotalDD||10}%`,32),z("Compliance Status","100% PASS",32)].join(`
`),d=_=>_==="discord"?{embeds:[{title:"🎯 PROP CHALLENGE TARGET REACHED!",color:3066993,description:`**Account:** ${e.firm?e.firm+" — ":""}${e.name}
**Phase:** ${e.phase}
**Achieved:** ${a.toFixed(1)}% ($${t.toFixed(2)})

*Submit for verification.*`}]}:`🎯 <b>PROP FIRM MILESTONE — TARGET REACHED!</b>
<b>Account:</b> <code>${e.firm?Le(e.firm)+" — ":""}${Le(e.name)}</code>

<pre>
Challenge Objective Audit
────────────────────────────────
${u}
</pre>

<i>Congratulations! Target reached with full rule compliance. Ready for phase verification submission.</i>`;this.doSend(d,{telegram:(f=i.telegram)==null?void 0:f.alerts})}async sendDailyReport(e=!1,t=new Date){var C,L,V,b;const r=t instanceof Date?t:new Date(t),i=ai(r);let s=Store.trades.filter(g=>{if(!On(g))return!1;const m=Ft(g.date);return m&&ai(m)===i});const a={telegram:(C=Store.settings.notifications.telegram)==null?void 0:C.daily};let l=!1;if(s.length===0){if(!e){const g=()=>`📊 <b>DAILY EXECUTIVE DIGEST</b>
📅 <b>Date:</b> <code>${i}</code>

<i>No trades logged today. Rest and risk avoidance noted.</i>`;return await this.doSend(g,a,!1)}l=!0,s=[{asset:"EUR/USD",tradeDirection:"Long",r:2.1,pnlAmount:630,setupType:"Liquidity Sweep",session:"London Open",ruleAdherence:"Yes",qualityScore:9,tradeGrade:"A+",accountId:(L=Store.accounts[0])==null?void 0:L.id},{asset:"GBP/USD",tradeDirection:"Short",r:1.4,pnlAmount:420,setupType:"FVG Retest",session:"London Open",ruleAdherence:"Yes",qualityScore:9,tradeGrade:"A",accountId:(V=Store.accounts[0])==null?void 0:V.id},{asset:"XAU/USD",tradeDirection:"Long",r:-.7,pnlAmount:-210,setupType:"Breakout",session:"NY Open",ruleAdherence:"Yes",qualityScore:8,tradeGrade:"B",accountId:(b=Store.accounts[0])==null?void 0:b.id}]}const u=Vc(s),d=i,f=u.totalR>0?"🟢 PROFITABLE":u.totalR<0?"🔴 DRAWDOWN":"⚪ BREAKEVEN",_=u.totalPnl>=0?"+":"",I=u.totalR>=0?"+":"",w=[z("Trades Logged",`${u.totalTrades} (${u.wins}W - ${u.losses}L)`,32),z("Win Rate",`${u.winRate.toFixed(1)}%`,32),z("Net P&L",`${_}$${u.totalPnl.toFixed(2)}`,32),z("Net R-Multiple",`${I}${u.totalR.toFixed(2)}R`,32),z("Profit Factor",`${u.profitFactor.toFixed(2)}`,32),z("Expectancy / Tr",`${u.expectancyR>=0?"+":""}${u.expectancyR.toFixed(2)}R`,32),z("Sharpe Ratio",`${u.sharpeRatio.toFixed(2)}`,32),z("Rule Adherence",`${u.ruleAdherenceRate.toFixed(1)}% (${u.ruleAdherentCount}/${u.totalTrades})`,32),z("Psych Stability",`${u.psychStability.toFixed(1)} / 10`,32),z("Avg Quality",`${u.avgQuality.toFixed(1)} / 10`,32)].join(`
`),S=Object.keys(u.accountMap).map(g=>{const m=Store.accounts.find(v=>String(v.id)===String(g)),y=m?m.name.substring(0,14):"Account",T=u.accountMap[g],A=(T.pnl>=0?"+":"")+"$"+Number(T.pnl).toFixed(0);return z(y,`${A} (${T.count}T)`,32)}).slice(0,3).join(`
`),P=Object.keys(u.setupMap).map(g=>{const m=u.setupMap[g],y=g.substring(0,16),T=(m.r>=0?"+":"")+Number(m.r).toFixed(1)+"R";return z(y,`${m.count}T  ${T}`,32)}).slice(0,4).join(`
`),F=u.bestTrade?`${Le(u.bestTrade.asset)} (+${Number(u.bestTrade.r).toFixed(2)}R)`:"-",x=u.worstTrade?`${Le(u.worstTrade.asset)} (${Number(u.worstTrade.r).toFixed(2)}R)`:"-",k=g=>g==="discord"?{embeds:[{title:`📊 DAILY EXECUTIVE DIGEST — ${d}`,color:u.totalR>=0?3066993:15158332,description:`**Trades:** ${u.totalTrades} (${u.wins}W / ${u.losses}L)
**Win Rate:** ${u.winRate.toFixed(1)}%
**Net P&L:** ${_}$${u.totalPnl.toFixed(2)} (${I}${u.totalR.toFixed(2)}R)
**Profit Factor:** ${u.profitFactor.toFixed(2)}
**Sharpe Ratio:** ${u.sharpeRatio.toFixed(2)}
**Rule Adherence:** ${u.ruleAdherenceRate.toFixed(1)}%`,footer:{text:"QuantEdge Portfolio OS"}}]}:`📊 <b>DAILY EXECUTIVE DIGEST</b>
📅 <b>Date:</b> <code>${d}</code>  •  <b>Status:</b> ${f}${l?" <i>(Demo)</i>":""}

<pre>
Performance Metric             Value
────────────────────────────────
${w}
</pre>

`+(S?`<b>💼 Portfolio Accounts:</b>
<pre>
Account                  P&L (Trades)
────────────────────────────────
${S}
</pre>

`:"")+(P?`<b>🎯 Strategy Breakdown:</b>
<pre>
Setup Strategy            Exec   Net R
────────────────────────────────
${P}
</pre>

`:"")+`<b>⚡ Top Execution:</b> <code>${F}</code>
<b>⚠️ Drawdown Trade:</b> <code>${x}</code>

<i>QuantEdge Portfolio OS  •  Institutional Risk Engine</i>`;return await this.doSend(k,a,e)}async sendWeeklyReport(e=!1,t=new Date){var L,V,b,g,m,y;const r=this._getWeekBoundariesLocal(t),i=r.monday,s=r.sunday;let o=Store.trades.filter(T=>{if(!On(T))return!1;const A=Ft(T.date);return A&&A>=i&&A<=s});const l={telegram:(L=Store.settings.notifications.telegram)==null?void 0:L.weekly};let u=!1;if(o.length===0){if(!e){const T=()=>`📈 <b>WEEKLY STRATEGIC REVIEW</b> — Week ${r.weekNum}

<i>0 trades logged this week. Capital preserved.</i>`;return await this.doSend(T,l,!1)}u=!0,o=[{asset:"EUR/USD",tradeDirection:"Long",r:2.4,pnlAmount:720,setupType:"Liquidity Sweep",session:"London Open",ruleAdherence:"Yes",qualityScore:9,tradeGrade:"A+",accountId:(V=Store.accounts[0])==null?void 0:V.id},{asset:"XAU/USD",tradeDirection:"Short",r:3.1,pnlAmount:930,setupType:"FVG Inversion",session:"NY Open",ruleAdherence:"Yes",qualityScore:10,tradeGrade:"A+",accountId:(b=Store.accounts[0])==null?void 0:b.id},{asset:"BTC/USD",tradeDirection:"Long",r:1.8,pnlAmount:540,setupType:"Liquidity Sweep",session:"Asian Range",ruleAdherence:"Yes",qualityScore:8,tradeGrade:"A",accountId:(g=Store.accounts[0])==null?void 0:g.id},{asset:"GBP/USD",tradeDirection:"Short",r:-1,pnlAmount:-300,setupType:"Break & Retest",session:"London Open",ruleAdherence:"No",qualityScore:6,tradeGrade:"C",accountId:(m=Store.accounts[0])==null?void 0:m.id},{asset:"EUR/USD",tradeDirection:"Long",r:1.5,pnlAmount:450,setupType:"Liquidity Sweep",session:"London Open",ruleAdherence:"Yes",qualityScore:9,tradeGrade:"A",accountId:(y=Store.accounts[0])==null?void 0:y.id}]}const d=Vc(o),f=d.totalR>=0?"+":"",_=d.totalPnl>=0?"+":"",I=d.totalR>0?"🟢 PROFITABLE":d.totalR<0?"🔴 DRAWDOWN":"⚪ BREAKEVEN",w=i.toLocaleDateString(void 0,{month:"short",day:"numeric"}),S=s.toLocaleDateString(void 0,{month:"short",day:"numeric",year:"numeric"}),P=[z("Total Executions",`${d.totalTrades} (${d.wins}W - ${d.losses}L)`,32),z("Win Rate",`${d.winRate.toFixed(1)}%`,32),z("Gross Profit",`+$${d.grossProfit.toFixed(2)}`,32),z("Gross Loss",`-$${d.grossLoss.toFixed(2)}`,32),z("Net Realized PnL",`${_}$${d.totalPnl.toFixed(2)}`,32),z("Net R-Multiple",`${f}${d.totalR.toFixed(2)}R`,32),z("Profit Factor",`${d.profitFactor.toFixed(2)}`,32),z("Expectancy (R)",`${d.expectancyR>=0?"+":""}${d.expectancyR.toFixed(2)}R / trade`,32),z("Expectancy ($)",`${d.expectancyPnl>=0?"+":""}$${d.expectancyPnl.toFixed(2)} / tr`,32),z("Trade Sharpe Ratio",`${d.sharpeRatio.toFixed(2)}`,32),z("Rule Adherence",`${d.ruleAdherenceRate.toFixed(1)}% (${d.ruleAdherentCount}/${d.totalTrades})`,32),z("Plan Violations",`${d.ruleViolations} broken rules`,32),z("Psych Rating",`${d.psychStability.toFixed(1)} / 10`,32),z("Execution Quality",`${d.avgQuality.toFixed(1)} / 10`,32)].join(`
`),F=Object.keys(d.sessionMap).map(T=>{const A=d.sessionMap[T],v=T.substring(0,16),K=(A.r>=0?"+":"")+Number(A.r).toFixed(1)+"R";return z(v,`${A.count}T  ${K}`,32)}).slice(0,4).join(`
`),x=Object.keys(d.setupMap).map(T=>{const A=d.setupMap[T],v=T.substring(0,16),K=(A.r>=0?"+":"")+Number(A.r).toFixed(1)+"R";return z(v,`${A.count}T  ${K}`,32)}).slice(0,4).join(`
`),k=d.ruleAdherenceRate>=90?"Discipline benchmark satisfied (&gt;90%). System expectancy remains positive. Continue executing the plan without parameter drift.":"Caution: Rule deviations observed. Tighten pre-flight checklist before entering new positions next week.",C=T=>T==="discord"?{embeds:[{title:`📈 WEEKLY STRATEGIC REVIEW — Week ${r.weekNum}`,color:d.totalR>=0?3066993:15158332,description:`**Period:** ${w} – ${S}
**Net Gain:** ${f}${d.totalR.toFixed(2)}R (${_}$${d.totalPnl.toFixed(2)})
**Win Rate:** ${d.winRate.toFixed(1)}% (${d.totalTrades} Trades)
**Profit Factor:** ${d.profitFactor.toFixed(2)}
**Sharpe Ratio:** ${d.sharpeRatio.toFixed(2)}
**Adherence:** ${d.ruleAdherenceRate.toFixed(1)}%`,footer:{text:"QuantEdge Portfolio OS"}}]}:`📈 <b>WEEKLY STRATEGIC REVIEW</b>
📅 <b>Week ${r.weekNum}</b> (${w} – ${S})
<b>Performance:</b> ${I} <code>${f}${d.totalR.toFixed(2)}R</code> (<code>${_}$${d.totalPnl.toFixed(2)}</code>)${u?" <i>(Demo)</i>":""}

<pre>
Institutional Metric             Value
────────────────────────────────
${P}
</pre>

`+(F?`<b>🏛 Session Breakdown:</b>
<pre>
Session                   Exec   Net R
────────────────────────────────
${F}
</pre>

`:"")+(x?`<b>🎯 Top Strategy Setups:</b>
<pre>
Setup Type                Exec   Net R
────────────────────────────────
${x}
</pre>

`:"")+`<blockquote expandable>
<b>Strategic Recommendation:</b>
${k}
</blockquote>

<i>QuantEdge Portfolio OS  •  Weekly Intelligence Protocol</i>`;return await this.doSend(C,l,e)}async sendMonthlyReport(e=!1,t=new Date){var V,b,g,m,y,T,A;const r=t instanceof Date?t:new Date(t),i=new Date(r.getFullYear(),r.getMonth()-1,1,0,0,0,0),s=new Date(r.getFullYear(),r.getMonth(),0,23,59,59,999);let o=i,a=Store.trades.filter(v=>{if(!On(v))return!1;const K=Ft(v.date);return K&&K>=i&&K<=s});if(a.length===0){const v=new Date(r.getFullYear(),r.getMonth(),1,0,0,0,0),K=new Date(r.getFullYear(),r.getMonth()+1,0,23,59,59,999),fe=Store.trades.filter(te=>{if(!On(te))return!1;const Te=Ft(te.date);return Te&&Te>=v&&Te<=K});(fe.length>0||e)&&(a=fe,o=v)}const u={telegram:(V=Store.settings.notifications.telegram)==null?void 0:V.monthly};let d=!1;if(a.length===0){if(!e){const v=()=>`📅 <b>MONTHLY PERFORMANCE AUDIT</b>

<i>0 trades logged for this monthly audit cycle.</i>`;return await this.doSend(v,u,!1)}d=!0,a=[{asset:"XAU/USD",tradeDirection:"Long",r:4.2,pnlAmount:1260,setupType:"Liquidity Sweep",session:"London Open",ruleAdherence:"Yes",qualityScore:10,tradeGrade:"A+",accountId:(b=Store.accounts[0])==null?void 0:b.id},{asset:"EUR/USD",tradeDirection:"Short",r:2.1,pnlAmount:630,setupType:"FVG Retest",session:"NY Open",ruleAdherence:"Yes",qualityScore:9,tradeGrade:"A",accountId:(g=Store.accounts[0])==null?void 0:g.id},{asset:"BTC/USD",tradeDirection:"Long",r:3.5,pnlAmount:1050,setupType:"Range Breakout",session:"Asian Range",ruleAdherence:"Yes",qualityScore:9,tradeGrade:"A",accountId:(m=Store.accounts[0])==null?void 0:m.id},{asset:"GBP/USD",tradeDirection:"Long",r:-1,pnlAmount:-300,setupType:"Breakout",session:"London Open",ruleAdherence:"Yes",qualityScore:8,tradeGrade:"B",accountId:(y=Store.accounts[0])==null?void 0:y.id},{asset:"XAU/USD",tradeDirection:"Short",r:1.8,pnlAmount:540,setupType:"FVG Inversion",session:"NY Open",ruleAdherence:"Yes",qualityScore:9,tradeGrade:"A",accountId:(T=Store.accounts[0])==null?void 0:T.id},{asset:"EUR/USD",tradeDirection:"Long",r:-.8,pnlAmount:-240,setupType:"Liquidity Sweep",session:"London Open",ruleAdherence:"No",qualityScore:7,tradeGrade:"C",accountId:(A=Store.accounts[0])==null?void 0:A.id}]}const f=Vc(a),_=f.totalR>=0?"+":"",I=f.totalPnl>=0?"+":"",w=f.totalR>0?"🟢 PROFITABLE":f.totalR<0?"🔴 DRAWDOWN":"⚪ BREAKEVEN",S=o.toLocaleString("default",{month:"long",year:"numeric"}),P=f.avgLossR>0?(f.avgWinR/f.avgLossR).toFixed(2):f.avgWinR>0?"99.9":"0.00",F=[z("Monthly Executions",`${f.totalTrades} (${f.wins}W - ${f.losses}L)`,32),z("Win Rate",`${f.winRate.toFixed(1)}%`,32),z("Gross Profit",`+$${f.grossProfit.toFixed(2)}`,32),z("Gross Loss",`-$${f.grossLoss.toFixed(2)}`,32),z("Net Realized PnL",`${I}$${f.totalPnl.toFixed(2)}`,32),z("Net R-Multiple",`${_}${f.totalR.toFixed(2)}R`,32),z("Profit Factor",`${f.profitFactor.toFixed(2)}`,32),z("Payoff Ratio (W/L)",`${P}`,32),z("Expectancy / Trade",`${f.expectancyR>=0?"+":""}${f.expectancyR.toFixed(2)}R`,32),z("Annualized Sharpe",`${f.sharpeRatio.toFixed(2)}`,32),z("Rule Adherence",`${f.ruleAdherenceRate.toFixed(1)}% (${f.ruleAdherentCount}/${f.totalTrades})`,32),z("Plan Violations",`${f.ruleViolations} broken rules`,32),z("Psych Health Index",`${f.psychStability.toFixed(1)} / 10`,32),z("Average Quality",`${f.avgQuality.toFixed(1)} / 10`,32)].join(`
`),x=Object.keys(f.assetMap).map(v=>{const K=f.assetMap[v],fe=v.substring(0,14),te=(K.pnl>=0?"+":"")+"$"+Number(K.pnl).toFixed(0);return z(fe,`${K.count}T  ${te}`,32)}).slice(0,4).join(`
`),k=f.bestTrade?`${Le(f.bestTrade.asset)} (+${Number(f.bestTrade.r).toFixed(2)}R)`:"-",C=f.worstTrade?`${Le(f.worstTrade.asset)} (${Number(f.worstTrade.r).toFixed(2)}R)`:"-",L=v=>v==="discord"?{embeds:[{title:`🏛 MONTHLY PERFORMANCE AUDIT — ${S}`,color:f.totalR>=0?3066993:15158332,description:`**Return:** ${_}${f.totalR.toFixed(2)}R (${I}$${f.totalPnl.toFixed(2)})
**Trades:** ${f.totalTrades} (${f.wins}W / ${f.losses}L)
**Profit Factor:** ${f.profitFactor.toFixed(2)}
**Sharpe Ratio:** ${f.sharpeRatio.toFixed(2)}
**Adherence:** ${f.ruleAdherenceRate.toFixed(1)}%`,footer:{text:"QuantEdge Portfolio OS"}}]}:`🏛 <b>MONTHLY PERFORMANCE AUDIT</b>
📅 <b>Month:</b> ${S}  •  <b>Outcome:</b> ${w}${d?" <i>(Demo)</i>":""}
<b>Net Realized PnL:</b> <code>${I}$${f.totalPnl.toFixed(2)}</code> (<code>${_}${f.totalR.toFixed(2)}R</code>)

<pre>
Portfolio Ledger Audit          Value
────────────────────────────────
${F}
</pre>

`+(x?`<b>🌐 Asset Performance Breakdown:</b>
<pre>
Instrument                Exec   Net PnL
────────────────────────────────
${x}
</pre>

`:"")+`<b>🏆 Best Trade:</b> <code>${k}</code>
<b>📉 Largest Loss:</b> <code>${C}</code>

<blockquote expandable>
<b>Executive Audit Summary:</b>
Monthly risk distribution executed with ${f.ruleAdherenceRate.toFixed(1)}% adherence to system rules. Risk of ruin remained controlled with a Sharpe ratio of ${f.sharpeRatio.toFixed(2)} and profit factor of ${f.profitFactor.toFixed(2)}.
</blockquote>

<i>QuantEdge Portfolio OS  •  Monthly Capital Audit</i>`;return await this.doSend(L,u,e)}async dispatchMorningWeeklyGoalsReminder(e={},t=!1){var w;const r=Store.settings.notifications||{},i=e.todayYmd||new Date().toISOString().split("T")[0];if(!t&&this.isSpam("morning_weekly_goals_"+i,720))return;const s=Array.isArray(e.goals)?e.goals:[],o=s.filter(S=>S.completed).length,a=e.weekLabel||"Current Week",l=e.weekNum?`Week ${e.weekNum}`:"Weekly Check-In",u=e.weeklyPlan||null,d=e.reviewFocus||"",f=s.length>0?s.slice(0,8).map(S=>`${S.completed?"✅":"⬜"} ${Le(S.text)}`).join(`
`):"No weekly goals added yet — define your key weekly targets during morning planning.",_=[];u!=null&&u.bias&&_.push(`Bias: <code>${Le(u.bias)}</code>`),u!=null&&u.focusPairs&&_.push(`Pairs: <code>${Le(u.focusPairs)}</code>`),u!=null&&u.ruleNote&&_.push(`Rule: ${Le(u.ruleNote)}`),d&&_.push(`Prior Review Focus: ${Le(d)}`);const I=S=>S==="discord"?{embeds:[{title:`☀️ MORNING PLANNING CHECK-IN — ${l}`,color:3447003,description:`**Period:** ${a}
**Weekly Goals:** ${o}/${s.length} completed

${f}`,footer:{text:"QuantEdge Portfolio OS"}}]}:`☀️ <b>MORNING DAILY PLANNING CHECK-IN</b>
📅 <b>${Le(l)}</b> (${Le(a)})
🎯 <b>Weekly Goals Progress:</b> <code>${o} / ${s.length}</code>

${f}
`+(_.length?`
<b>🧭 Weekly Plan Alignment:</b>
${_.join(`
`)}
`:"")+`
<i>Review your weekly goals before setting today's Daily Trading Plan.</i>`;await this.doSend(I,{telegram:!!((w=r.morningWeeklyGoals)!=null&&w.telegram)},t)}test(e){var i;this.saveSettings();const t=document.getElementById("notif-test-status");t&&(t.innerText="Dispatching test to Telegram...",t.style.color="#38bdf8");const r=(s,o=!1)=>{t&&(t.innerText=s,t.style.color=o?"#ef4444":"#10b981"),o&&console.error(s)};try{if(e==="alert"){const s={asset:"EUR/USD",tradeDirection:"Long",executionType:"Market",session:"London Open",setupType:"Liquidity Sweep",entryPrice:1.0845,exitPrice:1.0869,riskAmount:300,plannedR:3,r:2.4,pnlAmount:720,tradeGrade:"A+",ruleAdherence:"Yes",preEmotion:"Calm",duringEmotion:"Disciplined",postNotes:"Clean M5 liquidity sweep of Asian session highs followed by strong displacement. Target reached at next liquidity pool.",accountId:(i=Store.accounts[0])==null?void 0:i.id};this.dispatchTradeLogged(s,!0).then(o=>{o?r("✓ Test Trade Ticket delivered to Telegram!"):r("✕ Enable Telegram and enter Bot Token + Chat ID first.",!0)}).catch(o=>r("✕ Telegram Error: "+(o.message||o),!0))}else if(e==="daily")this.sendDailyReport(!0).then(()=>r("✓ Test Daily Report delivered to Telegram!")).catch(s=>r("✕ Telegram Error: "+(s.message||s),!0));else if(e==="weekly")this.sendWeeklyReport(!0).then(()=>r("✓ Test Weekly Review delivered to Telegram!")).catch(s=>r("✕ Telegram Error: "+(s.message||s),!0));else if(e==="monthly")this.sendMonthlyReport(!0).then(()=>r("✓ Test Monthly Audit delivered to Telegram!")).catch(s=>r("✕ Telegram Error: "+(s.message||s),!0));else if(e==="morning"){const s=typeof window.getWeeklyPlanningContext=="function"?window.getWeeklyPlanningContext():{todayYmd:new Date().toISOString().split("T")[0],goals:Store.weeklyGoals||[]};this.dispatchMorningWeeklyGoalsReminder(s,!0).then(()=>r("✓ Morning Weekly Goals check-in delivered to Telegram!")).catch(o=>r("✕ Telegram Error: "+(o.message||o),!0))}}catch(s){r("✕ Error: "+(s.message||s),!0)}}preview(){alert(`PREVIEW: Telegram Structured Card

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

Account: Apex Prop #1  •  Balance: $52,420.00`)}}window.NotificationEngine=new RA;window.saveNotificationSettings=function(n={}){if(!window.NotificationEngine||(window.NotificationEngine.saveSettings(),n&&n.silent))return;const e=document.getElementById("notif-test-status");e&&(e.innerText="Settings saved ✓",e.style.color="var(--success)",clearTimeout(window._notifSaveStatusTimer),window._notifSaveStatusTimer=setTimeout(()=>{e.innerText==="Settings saved ✓"&&(e.innerText="")},3e3))};document.readyState==="loading"?window.addEventListener("DOMContentLoaded",()=>{window.NotificationEngine.init()}):window.NotificationEngine.init();window.evaluateRealTimeAlerts=function(n){if(!window.NotificationEngine||!On(n))return;const e=window.NotificationEngine;if(!Store.settings.notifications)return;const t=Store.settings.notifications,r=Store.accounts.find(k=>String(k.id)===String(n.accountId));if(!r)return;const i=ai(Ft(n.date)||new Date),o=Store.trades.filter(k=>On(k)&&String(k.accountId)===String(r.id)&&ai(Ft(k.date)||k.date)===i).reduce((k,C)=>k+(parseFloat(C.r)||0),0),a=Store.settings.dailyLossLimitR||3;if(o<0){const k=Math.abs(o),C=k/a,L=(t.thresholds.lossWarn||50)/100;k>=a?e.dispatchLossHit(r,o,a):C>=L&&e.dispatchLossWarning(r,o,a,C)}const l=Store.trades.filter(k=>On(k)&&String(k.accountId)===String(r.id));let u=0,d=[];for(let k of l){let C=parseFloat(k.r)||0;if(C<0||k.result==="Loss")u++,d.push(k);else if(C>0)break}const f=t.thresholds.streak||3;u>=f&&e.dispatchConsecutiveLoss(u,d);let _=l.reduce((k,C)=>k+(parseFloat(C.pnlAmount)||0),0),I=parseFloat(r.balance||0)+_;if(r.currentBalance=I,r.type==="Prop"&&(r.phase==="Challenge"||r.phase==="Verification")){const k=parseFloat(r.profitTargetPercent)||8,C=parseFloat(r.balance||0)*(k/100);_>0&&C>0&&_>=C&&e.dispatchPropTargetReached(r,_,C)}let w=r.highWaterMark?parseFloat(r.highWaterMark):parseFloat(r.balance||0);I>w&&(e.dispatchEquityHigh(r,I,w),r.highWaterMark=I,Store.save()),w=r.highWaterMark||parseFloat(r.balance||0);const S=w-I,P=parseFloat(r.maxDrawdown)||10,F=parseFloat(r.balance||0)*(P/100),x=(t.thresholds.ddWarn||70)/100;if(S>0&&F>0){const k=S/F;k>=x&&e.dispatchDrawdownWarning(r,S,F,k)}if(window.renderPsychEngine){let k=0,C=0,L=0;Store.trades.slice(0,10).forEach(A=>{A.preEmotion&&(C++,["FOMO","Revenge","Fear","Greed","Frustrated"].includes(A.preEmotion)&&k++),A.duringEmotion&&(C++,["FOMO","Revenge","Fear","Greed","Frustrated"].includes(A.duringEmotion)&&k++),L+=parseFloat(A.r)||0});const b=C>0?k/C:0,g=u;let m="🟢 Optimal",y=0;b>.4&&(y+=2),b>.6&&(y+=2),g>=2&&(y+=1),g>=3&&(y+=2),L<=-2&&(y+=2),y>=5?m="CRITICAL":y>=3&&(m="ELEVATED"),Store.settings.lastPsychState||(Store.settings.lastPsychState="NORMAL");let T=Store.settings.lastPsychState;m!=="🟢 Optimal"&&m!==T&&(m==="ELEVATED"&&T!=="CRITICAL"||m==="CRITICAL")&&e.dispatchPsychEscalation(m,Math.round(b*100),g),Store.settings.lastPsychState=m==="🟢 Optimal"?"NORMAL":m,Store.save()}};function Za(n){if(n instanceof Date)return Number.isNaN(n.getTime())?null:n;if(typeof n!="string")return null;const e=n.trim();if(!e)return null;const t=/^(\d{4})-(\d{2})-(\d{2})$/.exec(e);if(t){const i=Number(t[1]),s=Number(t[2])-1,o=Number(t[3]),a=new Date(i,s,o,12,0,0,0);return Number.isNaN(a.getTime())?null:a}const r=new Date(e);return Number.isNaN(r.getTime())?null:r}function Ta(n=new Date){const e=Za(n)||(n instanceof Date?n:new Date(n));if(!e||Number.isNaN(e.getTime()))return"";const t=e.getFullYear(),r=String(e.getMonth()+1).padStart(2,"0"),i=String(e.getDate()).padStart(2,"0");return`${t}-${r}-${i}`}const PA=Object.freeze(Object.defineProperty({__proto__:null,formatLocalCalendarYMD:Ta,parseLocalCalendarDate:Za},Symbol.toStringTag,{value:"Module"}));function Ou(n,e=[],t=new Date){const r=n||{},i=t instanceof Date&&!Number.isNaN(t.getTime())?t:new Date,s=Ta(i),o=Array.isArray(r.history)&&r.history[0]?Number(r.history[0].balance??r.history[0]):0,a=Number(r.initialBalance)>0?Number(r.initialBalance):o>0?o:Number(r.balance)||0,l=Number(r.balance)||0,u=r.equity!==void 0&&r.equity!==null&&Number.isFinite(Number(r.equity))?Number(r.equity):l,d=r.ddMode==="trailing_eod"||r.ddMode==="trailing_intraday"?r.ddMode:"static",f=d==="trailing_intraday"?"Trailing Intraday":d==="trailing_eod"?"Trailing EOD":"Static",_=Number(r.maxDailyDD??r.dailyDD)>0?Number(r.maxDailyDD??r.dailyDD):5,I=Number(r.maxTotalDD??r.maxDD)>0?Number(r.maxTotalDD??r.maxDD):10,w=Number(r.profitTargetPercent)>0?Number(r.profitTargetPercent):8,S=Math.max(0,Math.min(100,Number(r.consistencyCapPct)||0)),P=Math.max(0,Math.floor(Number(r.minTradingDays??5)||0)),F=(Array.isArray(e)?e:[]).filter(Re=>Re&&String(Re.accountId)===String(r.id)),x={};let k=0;F.forEach(Re=>{const At=Number(Re.pnlAmount)||0;k+=At;const on=Re.date||Re.entryDate||Re.createdAt,Fi=(on?Ta(on):"")||"undated";x[Fi]=(x[Fi]||0)+At});const C=x[s]||0,L=Object.keys(x).filter(Re=>Re!=="undated").length,V=Array.isArray(r.history)?r.history:[];let b=a,g=a;V.forEach(Re=>{if(typeof Re=="number"&&Number.isFinite(Re))b=Math.max(b,Re),g=Math.max(g,Re);else if(Re&&typeof Re=="object"){const At=Number(Re.balance),on=Number(Re.equity);Number.isFinite(At)&&(b=Math.max(b,At)),Number.isFinite(on)&&(g=Math.max(g,on))}});const m=Math.max(a,Number(r.highestEodBalanceReached)||0,b,l),y=Math.max(m,Number(r.highestBalanceReached)||0,g,u),T=d==="trailing_intraday"?y:d==="trailing_eod"?m:a,A=a*(I/100),v=Math.max(0,T-A),K=Math.max(0,u-v),fe=Math.max(0,A-K),te=A>0?Math.min(100,fe/A*100):0;let Te=a;r.dailySnapshot&&r.dailySnapshot.date===s&&Number.isFinite(Number(r.dailySnapshot.startBalance))?Te=Number(r.dailySnapshot.startBalance):C!==0?Te=l-C:Te=l,Te<=0&&(Te=a);const me=Te*(_/100),de=Math.max(0,Te-me),re=Math.max(0,l-u),X=Math.max(0,-C+re,Te-u),ie=Math.max(0,Math.min(me-X,u-de)),Q=me>0?Math.min(100,X/me*100):0,_e=Math.max(0,Math.min(ie,K)),ke=_e*.5,be=r.phase==="Funded"||r.phase==="Live",Se=a*(w/100),Ae=l-a,J=Se>0?Math.max(0,Ae/Se*100):0,U=be?0:Math.max(0,Se-Ae);let j=0,R="";Object.entries(x).forEach(([Re,At])=>{At>j&&(j=At,R=Re)});const O=F.length>0?k:Math.max(0,Ae);let Y=0,Z=!0,ce=0;if(S>0)if(O>0&&j>0){if(Y=j/O*100,Y>S+.01){Z=!1;const Re=j/(S/100);ce=Math.max(0,Re-O)}}else O<=0&&(Z=!1);const he=L>=P,Ve=Math.max(0,P-L);let Pe=null;if(r.nextPayoutDate){const Re=Za(r.nextPayoutDate);if(Re){const At=new Date(i.getFullYear(),i.getMonth(),i.getDate()),on=new Date(Re.getFullYear(),Re.getMonth(),Re.getDate());Pe=Math.ceil((on.getTime()-At.getTime())/864e5)}}const Ne=r.status==="Blown"||a>0&&(K<=0||ie<=0),pt=!Ne&&me>0&&ie/me<=.25,_n=!Ne&&A>0&&K/A<=.25,wn=be?Ae>0:Ae>=Se,nr=!Ne&&be&&Ae>0&&he&&(S===0||Z),Tn=!Ne&&!be&&wn&&he&&(S===0||Z);let rn="On Track",sn="primary";return Ne?(rn="Breached",sn="danger"):pt||_n||r.status==="At Risk"?(rn="At Risk",sn="danger"):S>0&&!Z&&j>0?(rn="Consistency Hold",sn="warning"):nr?(rn="Payout Ready",sn="success"):Tn&&(rn="Target Reached",sn="success"),{accountId:String(r.id??""),name:r.name||"Prop Account",firm:r.firm||"",phase:r.phase||"Challenge",isFundedPhase:be,ddMode:d,ddModeLabel:f,startBal:a,currentBal:l,currentEq:u,hwmEod:m,hwmIntraday:y,activeWatermark:T,dailyDDPctLimit:_,totalDDPctLimit:I,dailyAllowanceDollar:me,dailyFloor:de,todayTradePnl:C,dailyLossUsedDollar:X,dailyHeadroomDollar:ie,dailyUsedPct:Q,totalAllowanceDollar:A,totalFloor:v,totalUsedDollar:fe,totalHeadroomDollar:K,totalUsedPct:te,safeTodayRiskDollar:_e,recommendedMaxTradeRiskDollar:ke,profitTargetPct:w,profitTargetAmount:Se,currentProfit:Ae,profitProgressPct:J,remainingToTargetDollar:U,consistencyCapPct:S,totalNetProfit:O,bestDayPnl:j,bestDayDate:R,bestDaySharePct:Y,isConsistencyCompliant:Z,additionalProfitNeeded:ce,minTradingDays:P,distinctTradingDays:L,tradingDaysMet:he,daysRemaining:Ve,nextPayoutDate:r.nextPayoutDate||"",daysUntilNextPayout:Pe,isBreached:Ne,isDailyCritical:pt,isTotalCritical:_n,targetMet:wn,payoutEligible:nr,challengeReadyToAdvance:Tn,overallStatus:rn,statusTone:sn}}const xA=Object.freeze(Object.defineProperty({__proto__:null,calculatePropAccountRulebook:Ou},Symbol.toStringTag,{value:"Module"}));function Lu(n){return n==="conservative"?.5:n==="aggressive"?.2:.35}function Vu(n){if(!n)return 0;const e=Number(n.r);if(n.r!==void 0&&n.r!==null&&n.r!==""&&Number.isFinite(e))return e;const t=Number(n.actualRR);if(n.actualRR!==void 0&&n.actualRR!==null&&n.actualRR!==""&&Number.isFinite(t))return t;const r=Number(n.pnlAmount),i=Number(n.riskAmount);return Number.isFinite(i)&&i>0&&Number.isFinite(r)?r/i:n.resultType==="Win"?1:n.resultType==="Loss"?-1:0}function $u(n=[]){const t=(Array.isArray(n)?n:[]).reduce((r,i)=>r+Vu(i),0);return Math.round(t*100)/100}function Ea(n,e=[],t=1){if(!n)return 100;const r=(Array.isArray(e)?e:[]).filter(u=>u&&String(u.accountId)===String(n.id)),i=[];if(r.forEach(u=>{const d=Number(u.riskAmount);if(Number.isFinite(d)&&d>0){i.push(d);return}const f=Number(u.riskPercent),_=Number(u.accountBalance||n.initialBalance||n.balance)||0;Number.isFinite(f)&&f>0&&_>0&&i.push(_*f/100)}),i.length>0){const u=i.reduce((d,f)=>d+f,0)/i.length;if(Number.isFinite(u)&&u>0)return u}const s=Number(n.initialBalance||n.balance)||0,o=n,a=Number(o.riskPerTradePercent||o.riskPercent||t)||1,l=s>0?s*a/100:100;return Math.max(1,Math.round(l*100)/100)}function Dy(n,e,t,r=[],i=1){const s=Ea(n,r,i),o=Ea(e,r,i),a=-Math.round(t/s*100)/100,l=Math.round(t/o*100)/100,u=Math.round((l+a)*100)/100,d=$u(r);return{fromOneR:Math.round(s*100)/100,toOneR:Math.round(o*100)/100,fromDeltaR:a,toDeltaR:l,netRImpact:u,portfolioTradeR:d}}function Ny(n){const e=Array.isArray(n.accounts)?n.accounts:[],t=Array.isArray(n.trades)?n.trades:[],r=n.referenceDate??new Date,i=Lu(n.bufferMode||"balanced"),s=Number(n.maxAllowedDD)||10,o=e.filter(m=>m&&m.status!=="Blown"),a=o.filter(m=>m.type==="Prop").map(m=>{const y=Ou(m,t,r),T=y.startBal,A=y.currentBal,v=y.currentEq,K=y.totalAllowanceDollar,fe=y.totalFloor,te=y.totalUsedPct,Te=y.dailyUsedPct,me=y.dailyAllowanceDollar,de=y.dailyFloor,re=y.dailyFloor+y.dailyAllowanceDollar,X=v-de,ie=Math.max(0,X),Q=re>0?X/re*100:T>0?X/T*100:0,_e=de>0?X/de*100:Q,ke=Math.max(0,Q),be=de>0&&v<=de,Se=de>0&&v>0&&(Q<=1||_e<=1),Ae=y.totalHeadroomDollar,J=Math.max(0,A-T),U=K*i,j=Math.max(0,A-fe-U),R=y.isBreached||m.status==="At Risk"||Se||Te>=75||te>=75,O=R?0:Math.floor(Math.min(J,j)*100)/100,Y=y.daysUntilNextPayout!==null&&y.daysUntilNextPayout>0,Z=y.isFundedPhase,ce=!!(y.payoutEligible&&!Y&&O>=25);let he="";!ce&&O>=25&&(Z?Y?he=`Payout window opens in ${y.daysUntilNextPayout}d`:y.tradingDaysMet?y.consistencyCapPct>0&&!y.isConsistencyCompliant&&(he=`Consistency hold (+$${Math.ceil(y.additionalProfitNeeded).toLocaleString()} profit needed)`):he=`${y.daysRemaining} more trading day${y.daysRemaining===1?"":"s"} required`:he=`${m.phase||"Challenge"} phase (must reach Funded before payout)`);const Ve=T>0?Math.max(0,(T-A)/T*100):0,Pe=Math.max(0,T-A),Ne=!y.isBreached&&(Se||te>=45||Te>=50||Ve>=3||m.status==="At Risk"),pt=Ne?Math.max(Pe,Math.round(y.totalUsedDollar*.5),Se?Math.round(me*.5):0):0;return{acc:m,rb:y,startBal:T,currentBal:A,currentEq:v,dayStartBal:re,dailyFloor:de,dailyAllowanceDollar:me,dailyFloorGapDollar:ie,dailyFloorGapPct:ke,isNearDailyFloor:Se,isDailyFloorBreached:be,netProfit:J,safeExtractable:O,remainingExtractable:O,isFunded:Z,isPayoutReadyNow:ce,pendingReason:he,totalUsedPct:te,dailyUsedPct:Te,ddPctFromStart:Ve,totalHeadroom:Ae,needsRelief:Ne,reliefTarget:pt,remainingReliefNeed:pt,isRiskBlocked:R}}),l=o.filter(m=>m.type==="Live").map(m=>{const y=Array.isArray(m.history)&&m.history[0]&&Number(m.history[0].balance)||0,T=Number(m.initialBalance||y||m.balance)||0,A=Number(m.balance)||0,v=m.equity!==void 0&&m.equity!==null&&Number.isFinite(Number(m.equity))?Number(m.equity):A,K=Number(m.maxTotalDD||s),fe=Math.max(0,T-A),te=T>0?fe/T*100:0,Te=K>0?Math.min(100,te/K*100):0,me=Math.max(0,A-T),de=te>=2.5||m.status==="At Risk",X=!de&&te<2&&me>=50?Math.floor(me*(1-i)*100)/100:0;return{acc:m,startBal:T,currentBal:A,currentEq:v,maxAllowedDD:K,ddDollar:fe,ddPct:te,ddPressurePct:Te,surplusDollar:me,isInDrawdown:de,deficitNeed:de?Math.max(fe,Math.round(T*.03)):0,remainingDeficitNeed:de?Math.max(fe,Math.round(T*.03)):0,availableSurplus:X,remainingSurplus:X}}),u=[],d=a.filter(m=>m.isNearDailyFloor).sort((m,y)=>m.dailyFloorGapPct-y.dailyFloorGapPct),f=l.filter(m=>m.isInDrawdown&&m.remainingDeficitNeed>=25).sort((m,y)=>y.ddPressurePct-m.ddPressurePct),_=a.filter(m=>m.isFunded&&m.remainingExtractable>=25).sort((m,y)=>m.isPayoutReadyNow!==y.isPayoutReadyNow?m.isPayoutReadyNow?-1:1:y.remainingExtractable-m.remainingExtractable);f.forEach(m=>{for(const y of _){if(m.remainingDeficitNeed<25)break;if(y.remainingExtractable<25)continue;const T=Math.floor(Math.min(m.remainingDeficitNeed,y.remainingExtractable)*100)/100;T<25||(y.remainingExtractable=Math.round((y.remainingExtractable-T)*100)/100,m.remainingDeficitNeed=Math.round((m.remainingDeficitNeed-T)*100)/100,u.push({id:`${y.acc.id}->${m.acc.id}-rescue`,from:y.acc,to:m.acc,amount:T,direction:"prop-to-live",category:"Drawdown Rescue",executable:y.isPayoutReadyNow,priority:y.isPayoutReadyNow?"urgent":"pending",pendingReason:y.pendingReason,rationale:y.isPayoutReadyNow?`${y.acc.name} is payout-eligible (+$${y.netProfit.toLocaleString(void 0,{maximumFractionDigits:0})} profit, ${y.totalUsedPct.toFixed(1)}% DD used). ${m.acc.name} is in ${m.ddPct.toFixed(1)}% drawdown ($${m.ddDollar.toLocaleString(void 0,{maximumFractionDigits:0})} below start) — sweeping $${T.toLocaleString(void 0,{maximumFractionDigits:2})} restores Live cushion while preserving your safety reserve.`:`${m.acc.name} is in ${m.ddPct.toFixed(1)}% drawdown. ${y.acc.name} has $${y.remainingExtractable+T>=25?T.toLocaleString(void 0,{maximumFractionDigits:2}):"0"} in surplus profit queued once ${y.pendingReason}.`}))}});const w=l.filter(m=>!m.isInDrawdown).sort((m,y)=>m.ddPressurePct-y.ddPressurePct||y.currentBal-m.currentBal)[0]||l[0]||null;if(w)_.forEach(m=>{if(m.remainingExtractable<25)return;const y=Math.floor(m.remainingExtractable*100)/100;if(y<25)return;m.remainingExtractable=0;const T=m.isPayoutReadyNow&&d.length>0;u.push({id:`${m.acc.id}->${w.acc.id}-sweep`,from:m.acc,to:w.acc,amount:y,direction:"prop-to-live",category:T?"Urgent Rebalance":"Payout Sweep",executable:m.isPayoutReadyNow,priority:T?"urgent":m.isPayoutReadyNow?"ready":"pending",pendingReason:m.pendingReason,rationale:T?`Daily DD alert on ${d[0].acc.name} (${d[0].dailyFloorGapPct.toFixed(2)}% above daily floor). Sweeping $${y.toLocaleString(void 0,{maximumFractionDigits:2})} from payout-ready ${m.acc.name} into ${w.acc.name} immediately locks gains and builds recovery capital.`:m.isPayoutReadyNow?`${m.acc.name} has cleared payout rules (+$${m.netProfit.toLocaleString(void 0,{maximumFractionDigits:0})} profit, ${m.totalUsedPct.toFixed(1)}% DD used). Transferring $${y.toLocaleString(void 0,{maximumFractionDigits:2})} locks prop gains into self-funded ${w.acc.name} while retaining a ${Math.round(i*100)}% DD buffer.`:`${m.acc.name} holds +$${m.netProfit.toLocaleString(void 0,{maximumFractionDigits:0})} funded profit (${y.toLocaleString(void 0,{maximumFractionDigits:2})} safely extractable) — pending: ${m.pendingReason}.`})});else if(d.length>0){const m=d[0];_.forEach(y=>{if(!y.isPayoutReadyNow||y.remainingExtractable<25||String(y.acc.id)===String(m.acc.id))return;const T=Math.floor(y.remainingExtractable*100)/100;y.remainingExtractable=0,u.push({id:`${y.acc.id}->${m.acc.id}-floor-rebal`,from:y.acc,to:m.acc,amount:T,direction:"prop-to-prop",category:"Urgent Rebalance",executable:!0,priority:"urgent",pendingReason:"",rationale:`${m.acc.name} equity is within 1% of its daily drawdown floor ($${m.dailyFloor.toLocaleString(void 0,{maximumFractionDigits:2})}). Rebalancing $${T.toLocaleString(void 0,{maximumFractionDigits:2})} from payout-ready ${y.acc.name} strengthens immediate recovery buffer.`})})}const S=a.filter(m=>m.needsRelief&&m.remainingReliefNeed>=25).sort((m,y)=>y.totalUsedPct-m.totalUsedPct),P=l.filter(m=>m.remainingSurplus>=25).sort((m,y)=>y.remainingSurplus-m.remainingSurplus);S.forEach(m=>{for(const y of P){if(m.remainingReliefNeed<25)break;if(y.remainingSurplus<25)continue;const T=Math.floor(Math.min(m.remainingReliefNeed,y.remainingSurplus)*100)/100;T<25||(y.remainingSurplus=Math.round((y.remainingSurplus-T)*100)/100,m.remainingReliefNeed=Math.round((m.remainingReliefNeed-T)*100)/100,u.push({id:`${y.acc.id}->${m.acc.id}-cushion`,from:y.acc,to:m.acc,amount:T,direction:"live-to-prop",category:m.isNearDailyFloor?"Urgent Rebalance":"Prop DD Cushion",executable:!0,priority:m.isNearDailyFloor||m.totalUsedPct>=70||m.acc.status==="At Risk"?"urgent":"ready",pendingReason:"",rationale:m.isNearDailyFloor?`${m.acc.name} equity (${m.currentEq.toLocaleString(void 0,{maximumFractionDigits:0})}) is within ${m.dailyFloorGapPct.toFixed(2)}% of its daily DD floor. Allocate $${T.toLocaleString(void 0,{maximumFractionDigits:2})} from ${y.acc.name} surplus toward Prop recovery/reset reserve and cut risk.`:`${m.acc.name} is at ${m.totalUsedPct.toFixed(1)}% of max drawdown ($${m.totalHeadroom.toLocaleString(void 0,{maximumFractionDigits:0})} buffer left). ${y.acc.name} holds +$${y.surplusDollar.toLocaleString(void 0,{maximumFractionDigits:0})} profit surplus — allocate $${T.toLocaleString(void 0,{maximumFractionDigits:2})} toward Prop recovery/reset reserve and reduce Prop risk sizing.`}))}});const F=a.reduce((m,y)=>m+y.currentBal,0),x=l.reduce((m,y)=>m+y.currentBal,0),k=a.length?Math.max(...a.map(m=>m.totalUsedPct)):0,C=l.length?Math.max(...l.map(m=>m.ddPct)):0,L=a.filter(m=>m.isPayoutReadyNow).reduce((m,y)=>m+y.safeExtractable,0),V=a.filter(m=>!m.isPayoutReadyNow&&m.isFunded&&m.safeExtractable>=25).reduce((m,y)=>m+y.safeExtractable,0),b=u.filter(m=>m.executable).reduce((m,y)=>m+(y.direction==="prop-to-live"?y.amount:y.direction==="live-to-prop"?-y.amount:0),0),g=d.length>0&&L>=25&&(u.find(m=>m.executable&&(m.direction==="prop-to-live"||m.direction==="prop-to-prop"))||u.find(m=>m.executable))||null;return{propRows:a,liveRows:l,suggestions:u,dailyFloorAlerts:d,immediateRebalance:g,propCapital:F,liveCapital:x,propPeakDD:k,livePeakDD:C,readyLiquidity:L,pendingLiquidity:V,executableNetToLive:b}}const kA=Object.freeze(Object.defineProperty({__proto__:null,analyzePortfolioRebalance:Ny,computeTransferRImpact:Dy,getAccountOneR:Ea,getBufferRatio:Lu,getTotalPortfolioTradeR:$u,getTradeRValue:Vu},Symbol.toStringTag,{value:"Module"})),_r=new Set(["USD","EUR","GBP","JPY","AUD","CAD","CHF","NZD","SEK","NOK","SGD","HKD","MXN","ZAR","TRY","PLN","CNH","CNY"]),$c={GOLD:"XAUUSD",XAU:"XAUUSD",SILVER:"XAGUSD",XAG:"XAGUSD",WTI:"USOIL",WTIUSD:"USOIL",USO:"USOIL",CL:"USOIL",BRENT:"UKOIL",NDX:"NAS100",USTEC:"NAS100",US100:"NAS100",NQ100:"NAS100",NQ:"NAS100",DJ30:"US30",DOW:"US30",YM:"US30",US500:"SPX500",SPX:"SPX500",ES:"SPX500",GER30:"GER40",DE40:"GER40",DAX:"GER40",FTSE:"UK100",NIKKEI:"JP225",N225:"JP225",USDX:"DXY",BTC:"BTCUSD",BTCUSDT:"BTCUSD",ETH:"ETHUSD",ETHUSDT:"ETHUSD",SOL:"SOLUSD",SOLUSDT:"SOLUSD",XRP:"XRPUSD",XRPUSDT:"XRPUSD"},CA=28,ci=60,Uc={USD:{0:1,1:.25},EUR:{0:-.62,2:.78,3:.25},GBP:{0:-.54,2:.56,4:.52},CHF:{0:-.64,2:.74,5:.22},JPY:{0:-.34,6:.88,7:.2},AUD:{0:-.48,8:.74,9:.35},NZD:{0:-.45,8:.69,9:.3,10:.24},CAD:{0:-.38,11:.76,12:.32},SEK:{0:-.56,2:.64,13:.3},NOK:{0:-.48,2:.52,11:.5},XAU:{0:-.78,2:.25,6:.34,14:.62},XAG:{0:-.7,2:.24,14:.56,15:.36},OIL:{0:-.24,11:.72,16:.62},EQUS:{0:-.28,17:.92,18:.24},EQEU:{0:-.32,2:.35,17:.74,19:.36},CRYPTO:{0:-.26,17:.48,20:.84}},Wf=(()=>{const n=[];for(let e=1;e<=14;e++){const t=new Array(ci),r=new Array(ci);for(let i=0;i<ci;i++){const s=2*Math.PI*e*i/ci;t[i]=Math.sin(s),r[i]=Math.cos(s)}n.push(t,r)}return n})(),DA=["BTC","ETH","SOL","XRP","BNB","ADA","DOGE","AVAX","LINK"],Fy=new Set(["NAS100","SPX500","US30"]),NA=new Set(["GER40","UK100","JP225"]),Kf=new Map;function Bc(n){let e=2166136261;for(let t=0;t<n.length;t++)e^=n.charCodeAt(t),e=Math.imul(e,16777619);return e>>>0}function $s(n){if(!n)return"";let e=String(n).trim().toUpperCase();e=e.replace(/\.(PRO|RAW|ECN|STD|MINI|MICRO|CASH|M|I|A)$/i,"");let t=e.replace(/[^A-Z0-9]/g,"");if(!t)return"";if(t.length===7&&/[MCRI]$/.test(t)){const r=t.slice(0,6);(_r.has(r.slice(0,3))&&_r.has(r.slice(3,6))||r==="XAUUSD"||r==="XAGUSD")&&(t=r)}if($c[t])return $c[t];if(t.endsWith("USDT")&&t.length>4){const i=`${t.slice(0,-4)}USD`;return $c[i]||i}return t}function ec(n){const e=$s(n);if(!e)return{normalizedPair:"",baseLeg:"OTHER",quoteLeg:null,assetClass:"other",factorSymbol:""};if(e.startsWith("XAU")){const t=e.slice(3);return{normalizedPair:e,baseLeg:"XAU",quoteLeg:_r.has(t)?t:"USD",assetClass:"metal",factorSymbol:e}}if(e.startsWith("XAG")){const t=e.slice(3);return{normalizedPair:e,baseLeg:"XAG",quoteLeg:_r.has(t)?t:"USD",assetClass:"metal",factorSymbol:e}}if(e==="USOIL"||e==="UKOIL")return{normalizedPair:e,baseLeg:"Oil",quoteLeg:"USD",assetClass:"commodity",factorSymbol:e};if(Fy.has(e)||NA.has(e))return{normalizedPair:e,baseLeg:"Indices",quoteLeg:null,assetClass:"index",factorSymbol:e};if(DA.some(t=>e.startsWith(t))){const t=e.slice(-3);return{normalizedPair:e,baseLeg:"Crypto",quoteLeg:_r.has(t)?t:"USD",assetClass:"crypto",factorSymbol:e}}if(e==="DXY")return{normalizedPair:e,baseLeg:"USD",quoteLeg:null,assetClass:"fx",factorSymbol:"DXY"};if(e.length===6){const t=e.slice(0,3),r=e.slice(3,6);if(_r.has(t)||_r.has(r))return{normalizedPair:e,baseLeg:t,quoteLeg:r,assetClass:"fx",factorSymbol:e}}return e.endsWith("USD")&&e.length>3?{normalizedPair:e,baseLeg:e.slice(0,-3),quoteLeg:"USD",assetClass:"other",factorSymbol:e}:e.startsWith("USD")&&e.length>3?{normalizedPair:e,baseLeg:"USD",quoteLeg:e.slice(3),assetClass:"other",factorSymbol:e}:{normalizedPair:e,baseLeg:e,quoteLeg:null,assetClass:"other",factorSymbol:e}}function Yf(n){const e=Kf.get(n);if(e)return e;const t=ec(n),r=new Array(CA).fill(0),i=(u,d)=>{const f=Uc[u];if(f)for(const[_,I]of Object.entries(f))r[Number(_)]+=I*d};if(t.normalizedPair==="DXY")i("USD",1);else if(t.assetClass==="index")if(Fy.has(t.normalizedPair)){i("EQUS",1);const u=t.normalizedPair==="NAS100"?21:t.normalizedPair==="US30"?22:23;r[u]+=.22}else i("EQEU",1),r[t.normalizedPair==="GER40"?24:25]+=.22;else if(t.assetClass==="crypto"){i("CRYPTO",1);const u=t.normalizedPair.startsWith("BTC")?.05:t.normalizedPair.startsWith("ETH")?.14:.24;r[26+Bc(n)%2]+=u}else if(t.assetClass==="commodity")i("OIL",1),i("USD",-1);else if(Uc[t.baseLeg])i(t.baseLeg,1),t.quoteLeg&&Uc[t.quoteLeg]&&i(t.quoteLeg,-1);else{const u=Bc(n);r[u%14]=.75,r[(u>>5)%14]+=.45,r[26+u%2]+=.5}const s=Bc(n),o=22+s%6,a=(s&1)===0?1:-1;r[o]+=.18*a;const l=new Array(ci).fill(0);for(let u=0;u<Wf.length;u++){const d=r[u];if(!d)continue;const f=Wf[u];for(let _=0;_<ci;_++)l[_]+=d*f[_]*.008}return Kf.set(n,l),l}function My(n,e){const t=Math.min(n.length,e.length);if(t<3)return 0;let r=0,i=0;for(let f=0;f<t;f++)r+=n[f],i+=e[f];const s=r/t,o=i/t;let a=0,l=0,u=0;for(let f=0;f<t;f++){const _=n[f]-s,I=e[f]-o;a+=_*I,l+=_*_,u+=I*I}const d=Math.sqrt(l*u);return!Number.isFinite(d)||d===0?0:Math.max(-1,Math.min(1,a/d))}function Uu(n,e,t){const r=$s(n),i=$s(e);if(!r||!i)return 0;if(r===i)return 1;if(typeof t=="function"){const s=t(r,i);if(typeof s=="number"&&Number.isFinite(s))return Math.max(-1,Math.min(1,s))}return My(Yf(r),Yf(i))}function FA(n){const e=String(n??"Long").trim().toUpperCase();return e==="SELL"||e==="SHORT"||e==="-1"?{direction:"Short",dirSign:-1}:{direction:"Long",dirSign:1}}function Oy(n){return n.reduce((e,t)=>{const r=Number((t==null?void 0:t.equity)??(t==null?void 0:t.balance))||0;return e+Math.max(0,r)},0)}function MA(n,e,t,r){const i=Number(n.riskPercent);if(Number.isFinite(i)&&i>0)return i;const s=Number(n.riskAmount);if(Number.isFinite(s)&&s>0){const a=n.accountId?e.find(u=>String(u.id)===String(n.accountId)):void 0,l=Number((a==null?void 0:a.equity)??(a==null?void 0:a.balance))||t;if(l>0)return s/l*100}const o=Number(n.size);return Number.isFinite(o)&&o>0?o*Math.max(.25,r):0}function va(n,e,t,r,i,s=0){const o=ec(n.pair);if(!o.normalizedPair)return null;const{direction:a,dirSign:l}=FA("direction"in n&&n.direction||"side"in n&&n.side||"Long"),u=Number(n.size),d=Number.isFinite(u)&&u>0?u:0,f=MA(n,t,r,i);return f<=0&&d<=0?null:{id:"id"in n&&n.id!==void 0?String(n.id):`${e}-${s}`,pair:o.normalizedPair,rawPair:String(n.pair||o.normalizedPair).trim(),direction:a,dirSign:l,lots:d,riskPercent:Number(f.toFixed(4)),bucket:e,baseLeg:o.baseLeg,quoteLeg:o.quoteLeg}}function ba(n={}){const e=Array.isArray(n.accounts)?n.accounts:[],t=Number.isFinite(Number(n.defaultRiskPct))&&Number(n.defaultRiskPct)>0?Number(n.defaultRiskPct):1,r=n.includePlanned!==!1,i=Number(n.safeHeatThresholdPct)>0?Number(n.safeHeatThresholdPct):2,s=Number(n.maxHeatThresholdPct)>0?Number(n.maxHeatThresholdPct):5,o=Number(n.currencyConcentrationThresholdPct)>0?Number(n.currencyConcentrationThresholdPct):2,a=Oy(e),l=[];(Array.isArray(n.activeTrades)?n.activeTrades:[]).forEach((g,m)=>{const y=va(g,(g==null?void 0:g.bucket)==="candidate"?"candidate":"active",e,a,t,m);y&&l.push(y)}),r&&(Array.isArray(n.plannedTrades)?n.plannedTrades:[]).forEach((g,m)=>{const y=va(g,"planned",e,a,t,m);y&&l.push(y)});const u=new Map,d=g=>{let m=u.get(g);return m||(m={currency:g,longRiskPct:0,shortRiskPct:0,longLots:0,shortLots:0,pairs:new Set},u.set(g,m)),m};for(const g of l){const m=d(g.baseLeg);if(m.pairs.add(`${g.direction==="Long"?"+":"-"}${g.pair}`),g.dirSign>0?(m.longRiskPct+=g.riskPercent,m.longLots+=g.lots):(m.shortRiskPct+=g.riskPercent,m.shortLots+=g.lots),g.quoteLeg){const y=d(g.quoteLeg);y.pairs.add(`${g.direction==="Long"?"-":"+"}${g.pair}`),g.dirSign>0?(y.shortRiskPct+=g.riskPercent,y.shortLots+=g.lots):(y.longRiskPct+=g.riskPercent,y.longLots+=g.lots)}}const f=Array.from(u.values()).map(g=>{const m=g.longRiskPct-g.shortRiskPct,y=g.longRiskPct+g.shortRiskPct,T=g.longLots-g.shortLots;return{currency:g.currency,longRiskPct:Number(g.longRiskPct.toFixed(2)),shortRiskPct:Number(g.shortRiskPct.toFixed(2)),netRiskPct:Number(m.toFixed(2)),grossRiskPct:Number(y.toFixed(2)),longLots:Number(g.longLots.toFixed(2)),shortLots:Number(g.shortLots.toFixed(2)),netLots:Number(T.toFixed(2)),contributingPairs:Array.from(g.pairs)}}).filter(g=>g.grossRiskPct>1e-4||Math.abs(g.netLots)>1e-4).sort((g,m)=>Math.abs(m.netRiskPct)-Math.abs(g.netRiskPct)||m.grossRiskPct-g.grossRiskPct);let _=0,I=0,w=0,S=null;for(let g=0;g<l.length;g++){const m=l[g];_+=m.riskPercent,I+=m.riskPercent*m.riskPercent,w+=m.riskPercent*m.riskPercent;for(let y=g+1;y<l.length;y++){const T=l[y],A=Uu(m.pair,T.pair,n.externalCorrelationLookup),v=A*m.dirSign*T.dirSign;w+=2*m.riskPercent*T.riskPercent*v,(!S||Math.abs(v)>Math.abs(S.effectiveR))&&(S={pairA:m.pair,pairB:T.pair,directionA:m.direction,directionB:T.direction,rawR:Number(A.toFixed(2)),effectiveR:Number(v.toFixed(2))})}}const P=Math.sqrt(Math.max(0,I)),F=Math.sqrt(Math.max(0,w)),x=F>0?_/F:1,k=P>0?F/P:1,C=f.length>0?f[0]:null,L=C?Math.abs(C.netRiskPct):0,V=[];F>=s?V.push({severity:"danger",code:"correlated-heat",title:"Correlated Heat Over Max Limit",message:`True correlated portfolio heat (${F.toFixed(2)}%) exceeds your ${s.toFixed(1)}% max risk threshold.`}):F>=i&&l.length>=2&&k>=1.25&&V.push({severity:"warning",code:"correlated-heat",title:"Hidden Risk Stacking Detected",message:`True correlated heat (${F.toFixed(2)}%) is ${k.toFixed(2)}× an uncorrelated portfolio (${P.toFixed(2)}%).`});for(const g of f){const m=Math.abs(g.netRiskPct),y=g.netRiskPct>=0?"Long":"Short";m>=Math.max(o*1.5,s*.6)?V.push({severity:"danger",code:"currency-concentration",currency:g.currency,title:`Critical ${g.currency} ${y} Stack`,message:`${g.currency} carries ${m.toFixed(2)}% net ${y} risk across ${g.contributingPairs.join(", ")}.`}):m>=o&&g.contributingPairs.length>=2&&V.push({severity:"warning",code:"currency-concentration",currency:g.currency,title:`Concentrated ${g.currency} ${y} Exposure`,message:`${g.currency} is stacked ${m.toFixed(2)}% net ${y} across ${g.contributingPairs.length} positions (${g.contributingPairs.join(", ")}).`})}S&&S.effectiveR>=.7&&l.length>=2?V.push({severity:S.effectiveR>=.85?"danger":"warning",code:"cluster-stack",title:"Tightly Correlated Pair Cluster",message:`${S.directionA} ${S.pairA} + ${S.directionB} ${S.pairB} move together (P&L r = +${S.effectiveR.toFixed(2)}).`}):S&&S.effectiveR<=-.65&&l.length>=2&&V.push({severity:"info",code:"hedge-offset",title:"Natural Portfolio Offset Active",message:`${S.directionA} ${S.pairA} and ${S.directionB} ${S.pairB} partially hedge (P&L r = ${S.effectiveR.toFixed(2)}), reducing true heat vs nominal.`});let b="Balanced";return F>=s||V.some(g=>g.severity==="danger")?b="Critical":L>=o||V.some(g=>g.severity==="warning")?b="Concentrated":F>=i&&(b="Elevated"),{positions:l,legs:f,nominalHeatPct:Number(_.toFixed(2)),independentHeatPct:Number(P.toFixed(2)),effectiveCorrelatedHeatPct:Number(F.toFixed(2)),diversificationRatio:Number(x.toFixed(2)),heatMultiplierVsIndependent:Number(k.toFixed(2)),peakCurrencyLeg:C,peakPairwiseCorr:S,status:b,alerts:V}}function Ly(n,e={}){const t=ba(e),r=Array.isArray(e.accounts)?e.accounts:[],i=Number.isFinite(Number(e.defaultRiskPct))&&Number(e.defaultRiskPct)>0?Number(e.defaultRiskPct):1,s=Oy(r),o={...n,riskPercent:Number(n.riskPercent)>0?Number(n.riskPercent):i},a=va(o,"candidate",r,s,i,0);if(!a)return{candidate:null,baseline:t,projected:t,nominalHeatDeltaPct:0,correlatedHeatDeltaPct:0,spikedLegs:[],conflicts:[],warnings:[]};const l={id:"candidate-preview",pair:a.pair,direction:a.direction,riskPercent:a.riskPercent,size:a.lots,accountId:n.accountId,bucket:"candidate"},u=ba({...e,activeTrades:[...Array.isArray(e.activeTrades)?e.activeTrades:[],l]}),d=Number((u.nominalHeatPct-t.nominalHeatPct).toFixed(2)),f=Number((u.effectiveCorrelatedHeatPct-t.effectiveCorrelatedHeatPct).toFixed(2)),_=new Map(t.legs.map(C=>[C.currency,C])),I=Number(e.currencyConcentrationThresholdPct)>0?Number(e.currencyConcentrationThresholdPct):2,w=u.legs.filter(C=>{var b;const L=Math.abs(((b=_.get(C.currency))==null?void 0:b.netRiskPct)||0),V=Math.abs(C.netRiskPct);return V>L+.01&&V>=I}),S=t.positions.map(C=>{const L=Uu(a.pair,C.pair,e.externalCorrelationLookup),V=L*a.dirSign*C.dirSign,b=V>=.6?"stack":V<=-.6?"hedge":"neutral";return{againstPair:C.pair,againstDirection:C.direction,againstRiskPct:C.riskPercent,againstBucket:C.bucket,rawCorrelation:Number(L.toFixed(2)),effectiveCorrelation:Number(V.toFixed(2)),relationship:b}}).filter(C=>C.relationship!=="neutral").sort((C,L)=>Math.abs(L.effectiveCorrelation)-Math.abs(C.effectiveCorrelation)),P=[],F=Number(e.maxHeatThresholdPct)>0?Number(e.maxHeatThresholdPct):5;u.effectiveCorrelatedHeatPct>=F&&P.push({severity:"danger",code:"correlated-heat",title:"Correlated Heat Breach",message:`Projected correlated heat reaches ${u.effectiveCorrelatedHeatPct.toFixed(2)}% (limit ${F.toFixed(1)}%).`});for(const C of w){const L=C.netRiskPct>=0?"Long":"Short";P.push({severity:Math.abs(C.netRiskPct)>=I*1.4?"danger":"warning",code:"currency-concentration",currency:C.currency,title:`${C.currency} ${L} Concentration`,message:`${C.currency} net ${L} exposure rises to ${Math.abs(C.netRiskPct).toFixed(2)}% (${C.contributingPairs.join(", ")}).`})}const x=S.find(C=>C.relationship==="stack");x&&P.push({severity:x.effectiveCorrelation>=.8?"danger":"warning",code:"cluster-stack",title:"Correlated Trade Overlap",message:`Stacks with open ${x.againstDirection} ${x.againstPair} (P&L r = +${x.effectiveCorrelation.toFixed(2)}).`});const k=S.find(C=>C.relationship==="hedge");return k&&!x&&P.push({severity:"info",code:"hedge-offset",title:"Offsetting Hedge Leg",message:`Partially hedged against ${k.againstDirection} ${k.againstPair} (P&L r = ${k.effectiveCorrelation.toFixed(2)}).`}),{candidate:a,baseline:t,projected:u,nominalHeatDeltaPct:d,correlatedHeatDeltaPct:f,spikedLegs:w,conflicts:S,warnings:P}}const OA=Object.freeze(Object.defineProperty({__proto__:null,analyzePortfolioExposure:ba,calcPearsonCorrelation:My,estimatePairCorrelation:Uu,normalizeExposurePosition:va,normalizeInstrumentSymbol:$s,parseInstrumentLegs:ec,simulateCandidateTradeExposure:Ly},Symbol.toStringTag,{value:"Module"})),Vy=[{id:"auto",label:"Auto (Device Local)"},{id:"UTC",label:"UTC (GMT+0)"},{id:"America/New_York",label:"New York (ET · EST/EDT)"},{id:"America/Chicago",label:"Chicago (CT · CST/CDT)"},{id:"Europe/London",label:"London (GMT/BST)"},{id:"Europe/Berlin",label:"Frankfurt / Berlin (CET/CEST)"},{id:"Europe/Athens",label:"Athens / EET (MT4/MT5 Server)"},{id:"Asia/Riyadh",label:"Riyadh (UTC+3)"},{id:"Asia/Dubai",label:"Dubai (GST · UTC+4)"},{id:"Asia/Singapore",label:"Singapore (SGT · UTC+8)"},{id:"Asia/Tokyo",label:"Tokyo (JST · UTC+9)"},{id:"Australia/Sydney",label:"Sydney (AEST/AEDT)"}],$y=5,LA=[2,5,15];function Sl(){try{const n=Intl.DateTimeFormat().resolvedOptions().timeZone;if(n&&Bu(n))return n}catch{}return"UTC"}function Bu(n){if(!n||n==="auto")return!1;try{return new Intl.DateTimeFormat("en-US",{timeZone:n}).format(new Date(0)),!0}catch{return!1}}function Jn(n){const e=typeof n=="string"?n.trim():"";return!e||e==="auto"?Sl():e.toUpperCase()==="UTC+3"||e.toUpperCase()==="GMT+3"?"Asia/Riyadh":Bu(e)?e:Sl()}function Qf(n,e){const r=new Intl.DateTimeFormat("en-US",{timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",hourCycle:"h23"}).formatToParts(n),i={};for(const o of r)o.type!=="literal"&&(i[o.type]=o.value);return Date.UTC(Number(i.year),Number(i.month)-1,Number(i.day),Number(i.hour)%24,Number(i.minute),Number(i.second))-n.getTime()}function tc(n,e){const t=Jn(e),r=n instanceof Date?n:new Date(n);if(Number.isNaN(r.getTime()))return{timeHHMM:"--:--",dateYMD:"",tzLabel:t,resolvedTz:t};try{const i=new Intl.DateTimeFormat("en-GB",{timeZone:t,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",hourCycle:"h23"}).formatToParts(r),s={};for(const a of i)a.type!=="literal"&&(s[a.type]=a.value);let o=t;try{const l=new Intl.DateTimeFormat("en-US",{timeZone:t,timeZoneName:"short"}).formatToParts(r).find(u=>u.type==="timeZoneName");l!=null&&l.value&&(o=l.value)}catch{}return{timeHHMM:`${s.hour||"00"}:${s.minute||"00"}`,dateYMD:`${s.year}-${s.month}-${s.day}`,tzLabel:`${t} (${o})`,resolvedTz:t}}catch{return{timeHHMM:r.toISOString().slice(11,16),dateYMD:r.toISOString().slice(0,10),tzLabel:"UTC",resolvedTz:"UTC"}}}function nc(n,e,t){var F;const r=Jn(t),i=String(n||"").trim().match(/^(\d{1,2}):(\d{2})(?:\s*(AM|PM))?$/i),s=new Date,o=e&&/^\d{4}-\d{2}-\d{2}$/.test(e)?e:tc(s,r).dateYMD||s.toISOString().slice(0,10);if(!i)return new Date(`${o}T12:00:00Z`).toISOString();let a=parseInt(i[1],10);const l=Math.max(0,Math.min(59,parseInt(i[2],10))),u=(F=i[3])==null?void 0:F.toUpperCase();u==="PM"&&a<12&&(a+=12),u==="AM"&&a===12&&(a=0),a=Math.max(0,Math.min(23,a));const[d,f,_]=o.split("-").map(Number),I=new Date(Date.UTC(d,f-1,_,a,l,0,0)),w=Qf(I,r);let S=new Date(I.getTime()-w);const P=Qf(S,r);return P!==w&&(S=new Date(I.getTime()-P)),S.toISOString()}function VA(n){const e=String(n||"").trim().toLowerCase();return e.includes("high")||e==="red"||e==="3"?"High":e.includes("med")||e==="orange"||e==="2"?"Medium":"Low"}function Uy(n,e={}){if(!n||typeof n!="object")return null;const t=String(n.title||n.event||"").trim(),r=String(n.currency||"USD").trim().toUpperCase().slice(0,6)||"USD";if(!t)return null;const i=Jn(e.displayTimezone),s=Jn(e.legacySourceTimezone||"Asia/Riyadh");let o="";if(n.timestampIso){const d=new Date(n.timestampIso);Number.isNaN(d.getTime())||(o=d.toISOString())}if(!o&&n.date&&!n.time){const d=new Date(n.date);Number.isNaN(d.getTime())||(o=d.toISOString())}o||(o=nc(String(n.time||"13:30"),n.date||e.fallbackDateYMD,n.isManual?i:s));const a=tc(o,i),l=VA(n.impact);return{id:n.id||`${r}-${o}-${t.toLowerCase().replace(/[^a-z0-9]+/g,"-").slice(0,24)}-${e.index??0}`,title:t,currency:r,impact:l,timestampIso:o,forecast:n.forecast?String(n.forecast):void 0,previous:n.previous?String(n.previous):void 0,source:n.source||(n.isManual?"manual":"cached"),isManual:!!n.isManual,displayTime:a.timeHHMM,displayDate:a.dateYMD,timezoneUsed:a.resolvedTz}}function Pi(n,e={}){if(!Array.isArray(n))return[];const t=[];return n.forEach((r,i)=>{const s=Uy(r,{...e,index:i});s&&t.push(s)}),t.sort((r,i)=>new Date(r.timestampIso).getTime()-new Date(i.timestampIso).getTime()),t}function qu(n=new Date,e){const t=Jn(e),r=n.toISOString().slice(0,10);return Pi([{utcHHMM:"07:00",currency:"EUR",title:"London Open / European Core Liquidity Window",impact:"High"},{utcHHMM:"08:30",currency:"GBP",title:"UK Macro Data & BOE Volatility Window",impact:"High"},{utcHHMM:"13:30",currency:"USD",title:"US Core Macro Window (NFP / CPI / Jobless Claims)",impact:"High"},{utcHHMM:"15:00",currency:"USD",title:"US ISM / Consumer Sentiment & Fed Window",impact:"High"},{utcHHMM:"19:00",currency:"USD",title:"FOMC Rate Decision / Policy Minutes Window",impact:"High"}].map((s,o)=>({id:`macro-${r}-${o}`,title:s.title,currency:s.currency,impact:s.impact,timestampIso:nc(s.utcHHMM,r,"UTC"),source:"macro-windows",isManual:!1})),{displayTimezone:t})}function By(n){if(!n||!String(n).trim())return[];const e=ec(n),t=$s(n),r=new Set;return e.assetClass==="index"?(t==="GER40"?r.add("EUR"):t==="UK100"?r.add("GBP"):t==="JP225"?r.add("JPY"):r.add("USD"),Array.from(r)):e.assetClass==="crypto"||e.assetClass==="commodity"||e.assetClass==="metal"?(e.quoteLeg?r.add(e.quoteLeg):r.add("USD"),Array.from(r)):(e.baseLeg&&e.baseLeg!=="OTHER"&&r.add(e.baseLeg),e.quoteLeg&&r.add(e.quoteLeg),Array.from(r))}function qy(n={}){const t=(n.now instanceof Date?n.now:new Date).getTime(),r=Jn(n.timezone),i=n.account||null,s=n.onlyHighImpact!==!1,o=Number(n.upcomingLookaheadMinutes)>0?Number(n.upcomingLookaheadMinutes):30,l=(i?i.type==="Prop":!0)?(i==null?void 0:i.newsRestricted)!==!1:!!(i!=null&&i.newsRestricted),u=Number(i==null?void 0:i.newsWindowMinutes),d=Number.isFinite(u)&&u>0?u:$y,f=Pi(n.events||[],{displayTimezone:r}),_=By(n.pair),I=f.filter(x=>!(s&&x.impact!=="High"||_.length>0&&!_.includes(x.currency))),w=[],S=[];let P=null;for(const x of I){const k=new Date(x.timestampIso).getTime();if(!Number.isFinite(k))continue;const C=Number(((k-t)/6e4).toFixed(2)),L=Math.abs(C),V={event:x,deltaMinutes:C,absDeltaMinutes:L};L<=d?w.push(V):C>d&&C<=o&&S.push(V),C>=-d&&(!P||k<new Date(P.event.timestampIso).getTime())&&(P=V)}if(w.sort((x,k)=>x.absDeltaMinutes-k.absDeltaMinutes),S.sort((x,k)=>x.deltaMinutes-k.deltaMinutes),!l){const x=P?` Next ${P.event.currency} event: ${P.event.title} at ${P.event.displayTime}.`:"";return{restricted:!1,windowMinutes:d,status:"UNRESTRICTED",badgeText:"News Allowed",bannerSeverity:"info",affectedCurrencies:_,activeLockEvents:w,upcomingEvents:S,nextEvent:P,summaryText:`News trading is permitted on this account.${x}`,timezoneUsed:r}}if(w.length>0){const x=w[0],k=x.deltaMinutes>=0?`in ${Math.max(0,Math.round(x.deltaMinutes))}m`:`${Math.round(Math.abs(x.deltaMinutes))}m ago`;return{restricted:!0,windowMinutes:d,status:"LOCKED",badgeText:`News Lockout ±${d}m`,bannerSeverity:"danger",affectedCurrencies:_,activeLockEvents:w,upcomingEvents:S,nextEvent:P,summaryText:`Prop news lockout active (±${d}m): ${x.event.currency} ${x.event.title} at ${x.event.displayTime} (${k}).`,timezoneUsed:r}}if(S.length>0){const x=S[0],k=Math.ceil(x.deltaMinutes);return{restricted:!0,windowMinutes:d,status:"UPCOMING",badgeText:`News in ${k}m`,bannerSeverity:"warning",affectedCurrencies:_,activeLockEvents:w,upcomingEvents:S,nextEvent:P,summaryText:`High-impact ${x.event.currency} news in ${k}m (${x.event.title} at ${x.event.displayTime}). Restricted window: ±${d}m.`,timezoneUsed:r}}const F=P?`Next high-impact event: ${P.event.currency} ${P.event.title} at ${P.event.displayTime}.`:"No high-impact news restrictions active right now.";return{restricted:!0,windowMinutes:d,status:"CLEAR",badgeText:`News Clear (±${d}m)`,bannerSeverity:"success",affectedCurrencies:_,activeLockEvents:w,upcomingEvents:S,nextEvent:P,summaryText:F,timezoneUsed:r}}const $A=Object.freeze(Object.defineProperty({__proto__:null,ALLOWED_NEWS_WINDOWS:LA,DEFAULT_NEWS_WINDOW_MINUTES:$y,QUANTEDGE_TIMEZONE_OPTIONS:Vy,evaluatePropNewsGuardrail:qy,formatTimeInTimezone:tc,getDefaultMacroRiskWindows:qu,getDeviceTimezone:Sl,getPairAffectedCurrencies:By,isValidTimezone:Bu,normalizeCalendarEvent:Uy,normalizeCalendarEvents:Pi,resolveTimezone:Jn,zonedHHMMToUtcIso:nc},Symbol.toStringTag,{value:"Module"}));function we(n){return Math.round((Number(n)||0)*100)/100}function UA(n){return String(n||"").trim()||"Unassigned Firm"}function oi(n){if(!n)return null;const e=String(n).trim(),t=e.match(/^(\d{4})/);if(t){const i=parseInt(t[1],10);if(i>=1990&&i<=2100)return i}const r=new Date(e);return Number.isNaN(r.getTime())?null:r.getUTCFullYear()}function Po(n,e){return e==="ALL"?!0:oi(n)===e}function BA(n,e){const t=String(n||"").trim().toLowerCase(),r=String(e||"").trim().toLowerCase(),i=`${t} ${r}`;return i.includes("reset")||i.includes("re-bill")||i.includes("retry")?"reset_fee":i.includes("activation")?"activation_fee":t.includes("prop")||i.includes("challenge")||i.includes("evaluation")||i.includes("eval fee")||i.includes("funded account")?i.includes("sub")||i.includes("monthly")||i.includes("renewal")?"subscription":"challenge_fee":null}function qc(n,e,t){if(n&&n.trim()){const i=n.trim().toLowerCase();return t.find(o=>o.toLowerCase()===i)||n.trim()}const r=e.filter(Boolean).join(" ").toLowerCase();if(r){const i=[...t].sort((s,o)=>o.length-s.length);for(const s of i)if(s!=="Unassigned Firm"&&r.includes(s.toLowerCase()))return s}return"Unassigned Firm"}function qA(n){const e=String(n||"").trim().toLowerCase();return e==="withdrawal"||e==="transfer"||e==="personal draw"}function zy(n={}){const e=Array.isArray(n.accounts)?n.accounts:[],t=Array.isArray(n.payouts)?n.payouts:[],r=Array.isArray(n.trades)?n.trades:[],i=Array.isArray(n.expenses)?n.expenses:[],s=Array.isArray(n.propFees)?n.propFees:[],o=n.taxYear&&n.taxYear!=="ALL"&&Number.isFinite(Number(n.taxYear))?Number(n.taxYear):"ALL",a=new Set;t.forEach(R=>{const O=oi(R==null?void 0:R.date);O&&a.add(O)}),r.forEach(R=>{const O=oi((R==null?void 0:R.date)||(R==null?void 0:R.entryDate)||(R==null?void 0:R.createdAt));O&&a.add(O)}),i.forEach(R=>{const O=oi(R==null?void 0:R.date);O&&a.add(O)}),s.forEach(R=>{const O=oi(R==null?void 0:R.date);O&&a.add(O)});const l=Array.from(a).sort((R,O)=>O-R),u=new Map,d=new Map,f=R=>{const O=UA(R),Y=O.toLowerCase();return d.has(Y)||d.set(Y,O),d.get(Y)||O},_=e.filter(R=>R&&R.type==="Prop");e.forEach(R=>{R&&(R.id!==void 0&&R.id!==null&&u.set(String(R.id),R),R.type==="Prop"&&R.firm&&f(R.firm))}),t.forEach(R=>{R!=null&&R.firm&&f(R.firm)}),s.forEach(R=>{R!=null&&R.firm&&f(R.firm)});const I=Array.from(d.values()),w=new Map,S=R=>{const O=f(R),Y=O.toLowerCase();let Z=w.get(Y);return Z||(Z={firm:O,accountsCount:0,fundedAccountsCount:0,blownAccountsCount:0,inProgressAccountsCount:0,passedCount:0,failedChallengeCount:0,activeFundedCapital:0,totalChallengeCapital:0,challengeFees:0,resetFees:0,subscriptionFees:0,otherFees:0,totalPayoutsReceived:0,payoutCount:0},w.set(Y,Z)),Z},P=new Set;t.forEach(R=>{(R==null?void 0:R.accountId)!==void 0&&(R==null?void 0:R.accountId)!==null&&P.add(String(R.accountId))});const F=[];_.forEach(R=>{var wn,nr;const O=S(R.firm),Y=Number(R.initialBalance??R.balance)||0,Z=String(R.status||"").toLowerCase()==="blown",ce=String(R.phase||"").toLowerCase()==="funded",he=R.id!==void 0&&R.id!==null&&P.has(String(R.id)),Ve=ce||he;O.accountsCount+=1,O.totalChallengeCapital+=Y,ce&&!Z&&(O.fundedAccountsCount+=1,O.activeFundedCapital+=Y),Z&&(O.blownAccountsCount+=1),Ve?O.passedCount+=1:Z?O.failedChallengeCount+=1:O.inProgressAccountsCount+=1;const Pe=((nr=(wn=R.history)==null?void 0:wn[0])==null?void 0:nr.date)||new Date().toISOString().slice(0,10),Ne=o==="ALL"||oi(Pe)===o,pt=Number(R.challengeFee)||0,_n=Number(R.resetFeesTotal)||0;Ne&&pt>0&&(O.challengeFees+=pt,F.push({date:Pe,stream:"Prop Fee",category:"Challenge Fee (Account Cost Basis)",firmOrAccount:`${O.firm} · ${R.name||"Account"}`,description:`Initial evaluation purchase (${R.name||"Prop Account"})`,amount:-we(pt),taxTreatment:"Deductible Expense"})),Ne&&_n>0&&(O.resetFees+=_n,F.push({date:Pe,stream:"Prop Fee",category:"Reset / Activation Fee (Account)",firmOrAccount:`${O.firm} · ${R.name||"Account"}`,description:`Account reset & activation fees (${R.name||"Prop Account"})`,amount:-we(_n),taxTreatment:"Deductible Expense"}))});let x=0;s.forEach(R=>{if(!R)return;const O=Number(R.amount)||0;if(O<=0||!Po(R.date,o))return;const Y=R.accountId!==void 0&&R.accountId!==null?u.get(String(R.accountId)):void 0,Z=qc(R.firm||(Y==null?void 0:Y.firm),[R.accountName,R.note],I),ce=S(Z),he=String(R.feeType||"challenge_fee").toLowerCase();he==="reset_fee"||he==="activation_fee"?ce.resetFees+=O:he==="subscription"?ce.subscriptionFees+=O:he==="other_fee"?ce.otherFees+=O:ce.challengeFees+=O,F.push({date:String(R.date||"").slice(0,10)||"Undated",stream:"Prop Fee",category:he==="reset_fee"?"Reset Fee":he==="activation_fee"?"Activation Fee":he==="subscription"?"Prop Subscription":he==="other_fee"?"Other Prop Fee":"Challenge Fee",firmOrAccount:Y!=null&&Y.name?`${Z} · ${Y.name}`:Z,description:R.note||`${Z} ${he.replace(/_/g," ")}`,amount:-we(O),taxTreatment:"Deductible Expense"})});let k=0;i.forEach(R=>{if(!R)return;const O=Number(R.amount)||0;if(O<=0||!Po(R.date,o)||qA(R.category))return;const Y=BA(R.category,R.note);if(Y){const Z=R.accountId!==void 0&&R.accountId!==null?u.get(String(R.accountId)):void 0,ce=qc(R.firm||(Z==null?void 0:Z.firm),[R.note,R.category],I),he=S(ce);Y==="reset_fee"||Y==="activation_fee"?he.resetFees+=O:Y==="subscription"?he.subscriptionFees+=O:he.challengeFees+=O,F.push({date:String(R.date||"").slice(0,10)||"Undated",stream:"Prop Fee",category:R.category||"Prop Firm Fees",firmOrAccount:ce,description:R.note||R.category||"Prop Firm Expense",amount:-we(O),taxTreatment:"Deductible Expense"})}else k+=O,F.push({date:String(R.date||"").slice(0,10)||"Undated",stream:"Trading Expense",category:R.category||"General Expense",firmOrAccount:R.financeAccountId||"Operating Overhead",description:R.note||R.category||"Trading Overhead",amount:-we(O),taxTreatment:"Deductible Expense"})});let C=0,L=0;t.forEach(R=>{if(!R)return;const O=Number(R.amount)||0;if(O<=0||!Po(R.date,o))return;const Y=R.accountId!==void 0&&R.accountId!==null?u.get(String(R.accountId)):void 0,Z=qc(R.firm||(Y==null?void 0:Y.firm),[R.accountName],I),ce=S(Z);ce.totalPayoutsReceived+=O,ce.payoutCount+=1,C+=O,L+=1,F.push({date:String(R.date||"").slice(0,10)||"Undated",stream:"Prop Payout",category:"Funded Payout",firmOrAccount:R.accountName?`${Z} · ${R.accountName}`:Z,description:`Payout from ${R.accountName||Z}`,amount:we(O),taxTreatment:"Taxable Income"})});let V=0,b=0,g=0,m=0,y=0,T=0;r.forEach(R=>{var Ve;if(!R)return;const O=R.date||R.entryDate||R.createdAt;if(!Po(O,o))return;const Y=String(R.resultType||"").toLowerCase();if(Y==="missed"||Y==="canceled")return;const Z=Number(R.pnlAmount)||0,ce=R.accountId!==void 0&&R.accountId!==null?u.get(String(R.accountId)):void 0;((ce==null?void 0:ce.type)||"Live")==="Prop"?(y+=Z,T+=1):(V+=Z,b+=1,Z>0?g+=1:Z<0&&(m+=1),Z!==0&&F.push({date:String(O||"").slice(0,10)||"Undated",stream:"Live Realized P&L",category:R.pair||((Ve=R.asset)==null?void 0:Ve.toString())||"FX/CFD Trade",firmOrAccount:(ce==null?void 0:ce.name)||"Live Brokerage",description:`${R.direction||"Trade"} ${R.pair||R.asset||""}`.trim(),amount:we(Z),taxTreatment:"Taxable Income"}))});let A=0,v=0,K=0,fe=0,te=0,Te=0,me=0;const de=Array.from(w.values()).map(R=>{const O=R.challengeFees+R.resetFees+R.subscriptionFees+R.otherFees,Y=R.totalPayoutsReceived-O,Z=O>0?Y/O*100:R.totalPayoutsReceived>0?100:0,ce=O>0?R.totalPayoutsReceived/O:0,he=R.passedCount+R.failedChallengeCount,Ve=he>0?R.passedCount/he*100:0,Pe=R.activeFundedCapital>0?O/(R.activeFundedCapital/1e5):0;return A+=R.passedCount,v+=he,K+=R.challengeFees,fe+=R.resetFees,te+=R.subscriptionFees,Te+=R.otherFees,me+=R.activeFundedCapital,x+=O,{firm:R.firm,accountsCount:R.accountsCount,fundedAccountsCount:R.fundedAccountsCount,blownAccountsCount:R.blownAccountsCount,inProgressAccountsCount:R.inProgressAccountsCount,resolvedAttemptsCount:he,activeFundedCapital:we(R.activeFundedCapital),totalChallengeCapital:we(R.totalChallengeCapital),challengeFees:we(R.challengeFees),resetFees:we(R.resetFees),subscriptionFees:we(R.subscriptionFees),otherFees:we(R.otherFees),totalFeesSpent:we(O),totalPayoutsReceived:we(R.totalPayoutsReceived),payoutCount:R.payoutCount,netProfit:we(Y),roiPct:we(Z),paybackMultiple:we(ce),passRatePct:we(Ve),costPer100kFunded:we(Pe)}}).sort((R,O)=>O.netProfit-R.netProfit||O.totalPayoutsReceived-R.totalPayoutsReceived),re=we(x),X=we(C-re),ie=re>0?we(X/re*100):C>0?100:0,Q=re>0?we(C/re):0,_e=v>0?we(A/v*100):0,ke=me>0?we(re/(me/1e5)):0;F.sort((R,O)=>String(O.date).localeCompare(String(R.date)));const be=we(x),Se=we(k),Ae=we(be+Se),J=we(V),U=we(C),j=we(J+U-Ae);return{taxYear:o,availableYears:l,firms:de,totals:{totalPropAccounts:_.length,fundedAccountsCount:de.reduce((R,O)=>R+O.fundedAccountsCount,0),blownAccountsCount:de.reduce((R,O)=>R+O.blownAccountsCount,0),inProgressAccountsCount:de.reduce((R,O)=>R+O.inProgressAccountsCount,0),activeFundedCapital:we(me),totalFeesSpent:re,challengeFees:we(K),resetFees:we(fe),subscriptionFees:we(te),otherFees:we(Te),totalPayoutsReceived:U,payoutCount:L,netProfit:X,roiPct:ie,paybackMultiple:Q,passRatePct:_e,costPer100kFunded:ke},liveTradingSummary:{realizedPnl:J,tradeCount:b,winCount:g,lossCount:m},propTradingSummary:{realizedPnl:we(y),tradeCount:T},deductibleExpensesSummary:{propFeesTotal:be,generalTradingExpensesTotal:Se,totalDeductibleExpenses:Ae},taxAndAuditSummary:{taxYear:o,liveRealizedPnl:J,propPayoutsGross:U,propFeesDeductible:be,otherTradingExpensesDeductible:Se,totalDeductibleExpenses:Ae,netTaxableTradingIncome:j},ledgerRows:F}}function Gy(n){if(n==null)return"";if(typeof n=="number")return Number.isFinite(n)?String(n):"";let e=String(n).replace(/\r\n/g,`
`).replace(/\r/g,`
`);return(/^[=+\t@]/.test(e)||/^-/.test(e)&&Number.isNaN(Number(e)))&&(e=`'${e}`),/[",\n]/.test(e)?`"${e.replace(/"/g,'""')}"`:e}function jy(n){const e=[],t=i=>e.push(i.map(Gy).join(",")),r=n.taxYear==="ALL"?"All Time":String(n.taxYear);return t(["QuantEdge OS - Prop Unit Economics & Tax Audit Packet"]),t(["Tax Scope",r]),t(["Generated At",new Date().toISOString()]),e.push(""),t(["SECTION 1: TAX & AUDIT RECONCILIATION SUMMARY"]),t(["Metric","Amount (USD)","Notes"]),t(["Live Realized Trading P&L",n.taxAndAuditSummary.liveRealizedPnl.toFixed(2),`${n.liveTradingSummary.tradeCount} live trade(s)`]),t(["Gross Prop Payouts Received",n.taxAndAuditSummary.propPayoutsGross.toFixed(2),`${n.totals.payoutCount} payout(s)`]),t(["Deductible Prop Firm Fees (Challenges/Resets/Subs)",(-n.taxAndAuditSummary.propFeesDeductible).toFixed(2),"Challenge purchases, resets, activation fees & prop subscriptions"]),t(["Other Deductible Trading Overhead",(-n.taxAndAuditSummary.otherTradingExpensesDeductible).toFixed(2),"Software, data feeds, education, VPS & hardware expenses"]),t(["Total Deductible Expenses",(-n.taxAndAuditSummary.totalDeductibleExpenses).toFixed(2),"Sum of Prop fees and trading overhead"]),t(["Net Taxable Trading Income",n.taxAndAuditSummary.netTaxableTradingIncome.toFixed(2),"Live Realized P&L + Gross Prop Payouts - Total Deductible Expenses"]),e.push(""),t(["SECTION 2: PROP FIRM UNIT ECONOMICS"]),t(["Firm","Accounts","Funded","Blown","Challenge Pass Rate (%)","Active Funded Capital ($)","Challenge Fees ($)","Reset & Activation Fees ($)","Subscriptions & Other ($)","Total Fees ($)","Gross Payouts ($)","Net Cash Profit ($)","ROI (%)","Payback Multiple (x)","Cost per $100k Funded ($)"]),n.firms.forEach(i=>{t([i.firm,i.accountsCount,i.fundedAccountsCount,i.blownAccountsCount,i.passRatePct.toFixed(1),i.activeFundedCapital.toFixed(2),i.challengeFees.toFixed(2),i.resetFees.toFixed(2),(i.subscriptionFees+i.otherFees).toFixed(2),i.totalFeesSpent.toFixed(2),i.totalPayoutsReceived.toFixed(2),i.netProfit.toFixed(2),i.roiPct.toFixed(1),i.paybackMultiple.toFixed(2),i.activeFundedCapital>0?i.costPer100kFunded.toFixed(2):"N/A"])}),t(["PORTFOLIO TOTAL",n.totals.totalPropAccounts,n.totals.fundedAccountsCount,n.totals.blownAccountsCount,n.totals.passRatePct.toFixed(1),n.totals.activeFundedCapital.toFixed(2),n.totals.challengeFees.toFixed(2),n.totals.resetFees.toFixed(2),(n.totals.subscriptionFees+n.totals.otherFees).toFixed(2),n.totals.totalFeesSpent.toFixed(2),n.totals.totalPayoutsReceived.toFixed(2),n.totals.netProfit.toFixed(2),n.totals.roiPct.toFixed(1),n.totals.paybackMultiple.toFixed(2),n.totals.activeFundedCapital>0?n.totals.costPer100kFunded.toFixed(2):"N/A"]),e.push(""),t(["SECTION 3: ITEMIZED AUDIT LEDGER"]),t(["Date","Stream","Category","Firm / Account","Description","Amount ($)","Tax Treatment"]),n.ledgerRows.forEach(i=>{t([i.date,i.stream,i.category,i.firmOrAccount,i.description,i.amount.toFixed(2),i.taxTreatment])}),e.join(`
`)}function an(n){return String(n??"").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]||e)}function zt(n){const e=Number(n)||0;return`${e<0?"-":""}$${Math.abs(e).toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2})}`}function Hy(n){const e=n.taxYear==="ALL"?"All Time":String(n.taxYear),t=n.taxAndAuditSummary,r=n.firms.length?n.firms.map(s=>`
      <tr>
        <td><strong>${an(s.firm)}</strong></td>
        <td class="num">${s.accountsCount} (${s.fundedAccountsCount}F / ${s.blownAccountsCount}B)</td>
        <td class="num">${s.passRatePct.toFixed(1)}%</td>
        <td class="num">${zt(s.totalFeesSpent)}</td>
        <td class="num">${zt(s.totalPayoutsReceived)}</td>
        <td class="num" style="color:${s.netProfit>=0?"#10b981":"#f43f5e"}; font-weight:700;">${zt(s.netProfit)}</td>
        <td class="num">${s.paybackMultiple.toFixed(2)}x</td>
        <td class="num">${s.activeFundedCapital>0?zt(s.costPer100kFunded):"N/A"}</td>
      </tr>`).join(""):'<tr><td colspan="8" style="text-align:center; color: var(--muted);">No Prop firm accounts or fees recorded for this period.</td></tr>',i=n.ledgerRows.slice(0,150).map(s=>`
      <tr>
        <td>${an(s.date)}</td>
        <td>${an(s.stream)}</td>
        <td>${an(s.category)}</td>
        <td>${an(s.firmOrAccount)}</td>
        <td>${an(s.description)}</td>
        <td class="num" style="color:${s.amount>=0?"#10b981":"#f43f5e"}; font-weight:600;">${zt(s.amount)}</td>
        <td>${an(s.taxTreatment)}</td>
      </tr>`).join("");return`
    <div class="tax-packet-doc">
      <div class="tax-packet-banner">
        <div>
          <div style="font-size:0.74rem; text-transform:uppercase; letter-spacing:0.06em; color:var(--muted);">QuantEdge OS · Reconciliation &amp; Audit Statement</div>
          <h3 style="margin:4px 0 2px; font-size:1.15rem;">Tax &amp; Prop Unit Economics Packet (${an(e)})</h3>
          <div style="font-size:0.78rem; color:var(--muted);">Generated ${an(new Date().toISOString().slice(0,10))} · ${n.ledgerRows.length} itemized ledger entries</div>
        </div>
        <div style="text-align:right;">
          <div style="font-size:0.72rem; color:var(--muted); text-transform:uppercase;">Net Taxable Trading Income</div>
          <div class="font-mono" style="font-size:1.35rem; font-weight:800; color:${t.netTaxableTradingIncome>=0?"var(--success)":"var(--danger)"};">
            ${zt(t.netTaxableTradingIncome)}
          </div>
        </div>
      </div>

      <div class="tax-packet-summary-grid">
        <div class="tax-packet-kpi">
          <div class="tax-packet-k">Live Realized P&amp;L</div>
          <div class="tax-packet-v font-mono">${zt(t.liveRealizedPnl)}</div>
          <div class="tax-packet-sub">${n.liveTradingSummary.tradeCount} live trades</div>
        </div>
        <div class="tax-packet-kpi">
          <div class="tax-packet-k">Gross Prop Payouts</div>
          <div class="tax-packet-v font-mono" style="color:var(--success);">${zt(t.propPayoutsGross)}</div>
          <div class="tax-packet-sub">${n.totals.payoutCount} payout(s)</div>
        </div>
        <div class="tax-packet-kpi">
          <div class="tax-packet-k">Prop Challenge &amp; Reset Fees</div>
          <div class="tax-packet-v font-mono" style="color:var(--danger);">${zt(-t.propFeesDeductible)}</div>
          <div class="tax-packet-sub">Deductible fee basis</div>
        </div>
        <div class="tax-packet-kpi">
          <div class="tax-packet-k">Other Trading Overhead</div>
          <div class="tax-packet-v font-mono" style="color:var(--danger);">${zt(-t.otherTradingExpensesDeductible)}</div>
          <div class="tax-packet-sub">Software / VPS / Data feeds</div>
        </div>
      </div>

      <h4 style="margin:18px 0 8px; font-size:0.9rem;">Prop Firm Unit Economics Breakdown</h4>
      <div class="table-container">
        <table class="data-table">
          <thead>
            <tr>
              <th>Firm</th>
              <th>Accounts</th>
              <th>Pass Rate</th>
              <th>Total Fees</th>
              <th>Gross Payouts</th>
              <th>Net Profit</th>
              <th>Payback</th>
              <th>Cost / $100k</th>
            </tr>
          </thead>
          <tbody>${r}</tbody>
        </table>
      </div>

      <h4 style="margin:18px 0 8px; font-size:0.9rem;">Itemized Income &amp; Deductible Expense Ledger ${n.ledgerRows.length>150?"(Top 150 shown · CSV contains all rows)":""}</h4>
      <div class="table-container" style="max-height:280px; overflow-y:auto;">
        <table class="data-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Stream</th>
              <th>Category</th>
              <th>Firm / Account</th>
              <th>Description</th>
              <th>Amount</th>
              <th>Treatment</th>
            </tr>
          </thead>
          <tbody>${i||'<tr><td colspan="7" style="text-align:center; color:var(--muted);">No ledger transactions in selected scope.</td></tr>'}</tbody>
        </table>
      </div>
    </div>
  `}const zA=Object.freeze(Object.defineProperty({__proto__:null,analyzePropFirmUnitEconomics:zy,buildTaxAuditCsv:jy,buildTaxAuditPrintHtml:Hy,escapeCsvCell:Gy},Symbol.toStringTag,{value:"Module"})),Wy=[{id:"mt4",name:"MetaTrader 4 (.htm / CSV)",shortLabel:"MT4 Statement",supportedExtensions:[".htm",".html",".csv"],description:"Auto-parses MT4 Detailed Statement HTML tables and CSV exports with commission & swap netting.",sampleFileName:"mt4_sample_statement.htm",sampleContent:`<!DOCTYPE html>
<html><body>
<table>
  <tr><th colspan="14">Account: 881042 - FTMO Challenge MT4 Detailed Statement</th></tr>
  <tr><th>Ticket</th><th>Open Time</th><th>Type</th><th>Size</th><th>Item</th><th>Price</th><th>S / L</th><th>T / P</th><th>Close Time</th><th>Price</th><th>Commission</th><th>Taxes</th><th>Swap</th><th>Profit</th></tr>
  <tr><td>10451201</td><td>2026.05.04 08:15:00</td><td>buy</td><td>0.50</td><td>EURUSD</td><td>1.07250</td><td>1.07050</td><td>1.07750</td><td>2026.05.04 10:42:00</td><td>1.07650</td><td>-1.75</td><td>0.00</td><td>0.00</td><td>200.00</td></tr>
  <tr><td>10451201</td><td>2026.05.04 08:15:00</td><td>buy</td><td>0.50</td><td>EURUSD</td><td>1.07250</td><td>1.07050</td><td>1.07750</td><td>2026.05.04 11:20:00</td><td>1.07750</td><td>-1.75</td><td>0.00</td><td>0.00</td><td>250.00</td></tr>
  <tr><td>10451299</td><td>2026.05.04 13:35:00</td><td>sell</td><td>1.00</td><td>XAUUSD</td><td>2340.00</td><td>2348.00</td><td>2320.00</td><td>2026.05.04 14:12:00</td><td>2348.00</td><td>-7.00</td><td>0.00</td><td>0.00</td><td>-800.00</td></tr>
  <tr><td>10451305</td><td>2026.05.05 09:05:00</td><td>balance</td><td>0.00</td><td></td><td>0.00</td><td>0.00</td><td>0.00</td><td>2026.05.05 09:05:00</td><td>0.00</td><td>0.00</td><td>0.00</td><td>0.00</td><td>0.00</td></tr>
</table>
</body></html>`},{id:"mt5",name:"MetaTrader 5 (.htm / CSV / XLSX)",shortLabel:"MT5 Report",supportedExtensions:[".htm",".html",".xlsx",".csv"],description:"Handles MT5 Positions tables with duplicate Time/Price columns, UTF-16 encoding, and partial volume fills.",sampleFileName:"mt5_sample_report.csv",sampleContent:`Time,Position,Symbol,Type,Volume,Price,S / L,T / P,Time,Price,Commission,Swap,Profit,Comment
2026.05.06 08:05:00,5520191,GBPUSD,buy,1.20,1.25100,1.24800,1.25700,2026.05.06 11:30:00,1.25640,-8.40,-1.20,648.00,London sweep
2026.05.06 14:15:00,5520208,NAS100,sell,2.00,18420.0,18470.0,18300.0,2026.05.06 15:40:00,18310.0,-4.00,0.00,220.00,NY open FVG`},{id:"ctrader",name:"cTrader (History Export)",shortLabel:"cTrader",supportedExtensions:[".csv",".xlsx"],description:"Parses cTrader Position Id history with Gross/Net $, Commission, Swap, and partial deal merging.",sampleFileName:"ctrader_sample_history.csv",sampleContent:`Position Id,Symbol,Opening Direction,Entry Time,Close Time,Volume (lots),Entry Price,Close Price,Stop Loss,Take Profit,Commission,Swap,Gross $,Net $
CT-9012,EURUSD,Buy,2026-05-07 07:45:00,2026-05-07 09:15:00,1.50,1.07400,1.07720,1.07250,1.07750,-9.00,-1.50,480.00,469.50
CT-9018,USDJPY,Sell,2026-05-07 13:40:00,2026-05-07 14:25:00,1.00,154.800,155.100,155.100,154.100,-6.00,0.00,-193.42,-199.42`},{id:"tradelocker",name:"TradeLocker (Prop History CSV)",shortLabel:"TradeLocker",supportedExtensions:[".csv"],description:"Imports TradeLocker closed positions with Instrument, Side, Open/Close Price, SL/TP, Commission, and Swap.",sampleFileName:"tradelocker_sample_trades.csv",sampleContent:`Position ID,Instrument,Side,Lots,Open Price,Close Price,Stop Loss,Take Profit,Open Time,Close Time,Commission,Swap,Net PnL
TL-77401,XAUUSD,BUY,0.50,2315.00,2328.50,2308.00,2330.00,2026-05-08 08:20:00,2026-05-08 10:05:00,-3.50,0.00,671.50
TL-77401,XAUUSD,BUY,0.50,2315.00,2330.00,2308.00,2330.00,2026-05-08 08:20:00,2026-05-08 11:12:00,-3.50,0.00,746.50`},{id:"tradovate",name:"Tradovate / TopstepX (Performance CSV)",shortLabel:"Tradovate / TopstepX",supportedExtensions:[".csv"],description:"Supports Tradovate & TopstepX Performance CSVs (buyPrice/sellPrice/boughtTimestamp/soldTimestamp/pnl & Fees).",sampleFileName:"tradovate_topstepx_sample.csv",sampleContent:`symbol,_priceFormat,_tickSize,buyFillId,sellFillId,qty,buyPrice,sellPrice,pnl,boughtTimestamp,soldTimestamp,duration,Fees
NQH6,-2,0.25,TV-1001,TV-1002,2,21150.00,21195.00,$1800.00,05/09/2026 09:32:10,05/09/2026 09:58:40,26min 30sec,8.40
ESH6,-2,0.25,TV-1003,TV-1004,3,5890.00,5882.00,$(1200.00),05/09/2026 10:15:00,05/09/2026 10:29:15,14min 15sec,12.60`}];function zn(n){return String(n||"").replace(/^\uFEFF/,"").replace(/\u00A0/g," ").replace(/\s+/g," ").trim().toLowerCase()}function oe(n,e=NaN){if(typeof n=="number")return Number.isFinite(n)?n:e;if(n==null)return e;let t=String(n).replace(/\u00A0/g," ").trim();if(!t||t==="-"||t==="--"||t.toLowerCase()==="n/a")return e;if(t.includes("/")&&!t.includes("http")){const a=t.split("/")[0].trim();/^[-+]?[\d.,\s]+$/.test(a)&&(t=a)}let r=!1;if((/^\(.*\)$/.test(t)||/^\$\(.*\)$/.test(t))&&(r=!0,t=t.replace(/[()$]/g,"").trim()),t=t.replace(/[$€£¥₹%]/g,"").replace(/\s+/g,""),t.startsWith("+")&&(t=t.slice(1)),t.startsWith("-")&&(r=!r,t=t.slice(1)),!t)return e;const i=t.includes(","),s=t.includes(".");if(i&&s)t.lastIndexOf(",")>t.lastIndexOf(".")?t=t.replace(/\./g,"").replace(",","."):t=t.replace(/,/g,"");else if(i){const a=t.split(",");a.length===2&&a[1].length<=2?t=a[0]+"."+a[1]:a.length>1&&a.slice(1).every(l=>l.length===3)?t=a.join(""):t=t.replace(/,/g,".")}const o=parseFloat(t);return Number.isFinite(o)?r?-o:o:e}function Ia(n){if(n==null)return"";const e=String(n).trim();if(!e)return"";const t=e.match(/^(\d{1,2}):(\d{2})(?::(\d{2}))?(?:\.\d+)?\s*(AM|PM)$/i);if(t){let i=parseInt(t[1],10);const s=t[2],o=t[3]||"00",a=t[4].toUpperCase();return a==="PM"&&i<12&&(i+=12),a==="AM"&&i===12&&(i=0),`${String(i).padStart(2,"0")}:${s}:${o}`}const r=e.match(/(\d{1,2}):(\d{2})(?::(\d{2}))?/);return r?`${r[1].padStart(2,"0")}:${r[2]}:${r[3]||"00"}`:""}function Ky(n){let e=!1,t=!1;for(const r of n){const s=String(r||"").trim().split(/[T ]/)[0].match(/^(\d{1,2})[\/\-.](\d{1,2})[\/\-.](\d{2,4})$/);if(!s)continue;const o=parseInt(s[1],10),a=parseInt(s[2],10);o>12&&o<=31&&(e=!0),a>12&&a<=31&&(t=!0)}return e&&!t?"dmy":t&&!e?"mdy":"dmy"}function gt(n,e,t="auto"){let r="",i=Ia(e);if(typeof n=="number"&&n>2e4&&n<9e4){const d=Math.floor(n-25569),f=new Date(d*86400*1e3);if(!Number.isNaN(f.getTime())){if(r=f.toISOString().slice(0,10),!i&&n%1>0){const _=Math.round(n%1*86400),I=Math.floor(_/3600)%24,w=Math.floor(_%3600/60),S=_%60;i=`${String(I).padStart(2,"0")}:${String(w).padStart(2,"0")}:${String(S).padStart(2,"0")}`}return{date:r,time:i}}}const s=String(n??"").replace(/\u00A0/g," ").trim();if(!s)return{date:"",time:i};if(/^\d{5}(\.\d+)?$/.test(s)){const d=parseFloat(s);if(d>2e4&&d<9e4)return gt(d,e,t)}let o=s,a="";const l=s.match(/^(.+?)[T ](\d{1,2}:\d{2}(?::\d{2})?(?:\.\d+)?(?:\s*[AP]M)?(?:Z|[+-]\d{2}:?\d{2})?)$/i);l&&(o=l[1].trim(),a=l[2].trim()),!i&&a&&(i=Ia(a));let u=o.match(/^(\d{4})[.\-\/](\d{1,2})[.\-\/](\d{1,2})$/);if(u){const d=parseInt(u[1],10),f=parseInt(u[2],10),_=parseInt(u[3],10);f>=1&&f<=12&&_>=1&&_<=31&&(r=`${d}-${String(f).padStart(2,"0")}-${String(_).padStart(2,"0")}`)}if(!r&&(u=o.match(/^(\d{1,2})[.\-\/](\d{1,2})[.\-\/](\d{2,4})$/),u)){const d=parseInt(u[1],10),f=parseInt(u[2],10);let _=parseInt(u[3],10);_<100&&(_+=2e3);let I,w;if(t==="mdy"?(w=d,I=f):t==="dmy"||d>12?(I=d,w=f):f>12?(w=d,I=f):(I=d,w=f),w>12&&I<=12){const S=w;w=I,I=S}w>=1&&w<=12&&I>=1&&I<=31&&(r=`${_}-${String(w).padStart(2,"0")}-${String(I).padStart(2,"0")}`)}if(!r){const d=new Date(s);Number.isNaN(d.getTime())||(r=d.toISOString().slice(0,10),!i&&s.includes(":")&&(i=d.toTimeString().slice(0,8)))}return{date:r,time:i}}function zu(n,e){if(!n||!e)return"-";const t=String(n).split(":").map(Number),r=String(e).split(":").map(Number);if(t.length<2||r.length<2||Number.isNaN(t[0])||Number.isNaN(r[0]))return"-";let i=r[0]*60+r[1]-(t[0]*60+t[1]);i<0&&(i+=1440);const s=Math.floor(i/60),o=i%60;return`${s}h ${o}m`}function GA(n){return n.replace(/&nbsp;/gi," ").replace(/&amp;/gi,"&").replace(/&lt;/gi,"<").replace(/&gt;/gi,">").replace(/&quot;/gi,'"').replace(/&#39;|&apos;/gi,"'")}function Yy(n){if(!Array.isArray(n)||n.length===0)return{headers:[],rows:[],warning:""};const e=new Set(["ticket","position","position id","positionid","deal","deal id","order","order id","symbol","item","pair","instrument","asset","ticker","market","contract","open time","entry time","opening time","close time","closing time","exit time","time","date","boughttimestamp","soldtimestamp","fill time","timestamp","type","action","direction","opening direction","side","trade type","b/s","size","volume","volume (lots)","lots","lot size","qty","quantity","filled qty","open price","entry price","close price","exit price","price","buyprice","sellprice","fill price","avg fill price","s / l","s/l","sl","stop loss","stop loss price","t / p","t/p","tp","take profit","take profit price","commission","commissions","fee","fees","swap","swaps","profit","net profit","gross profit","net $","gross $","p&l","p&l ($)","net p&l ($)","pnl","net pnl","realized pnl","comment","notes","tags","session","setup type","trade grade","actual r multiple","result"]),t=new Set(["orders","deals","working orders","summary","results"]),r=new Set(["total","totals","balance","credit","deposit","withdrawal","closed p/l","floating p/l","equity","margin"]);let i=0,s=-1;const o=Math.min(n.length,60);for(let S=0;S<o;S++){const P=n[S];if(!Array.isArray(P))continue;const F=P.map(C=>zn(C)).filter(Boolean);if(F.length<3)continue;let x=0;for(const C of F)e.has(C)?x+=3:(C.includes("symbol")||C.includes("instrument")||C.includes("profit")||C.includes("time")||C.includes("price")||C.includes("volume")||C.includes("p&l")||C.includes("pnl"))&&(x+=1);const k=x*10+Math.min(F.length,20);x>=2&&k>s&&(s=k,i=S)}const a=Array.isArray(n[i])?n[i]:[],l=[],u={};for(let S=0;S<a.length;S++){let P=String(a[S]??"").replace(/^\uFEFF/,"").replace(/\u00A0/g," ").replace(/\s+/g," ").trim();P||(P=`Column ${S+1}`);const F=P.toLowerCase();u[F]?(u[F]+=1,P=`${P} (${u[F]})`):u[F]=1,l.push(P)}for(;l.length>0&&l[l.length-1].startsWith("Column ");){const S=l.length-1;if(!n.slice(i+1,i+25).some(F=>Array.isArray(F)&&String(F[S]??"").trim()!==""))l.pop();else break}const d=l.map(S=>zn(S)),f=d.includes("position")&&d.includes("symbol"),_=[];let I=0;for(let S=i+1;S<n.length;S++){const P=n[S];if(!Array.isArray(P))continue;const F=P.slice(0,l.length).map(L=>String(L??"").trim()).filter(Boolean);if(F.length===0)continue;const x=zn(P[0]);if(F.length<=2&&t.has(x)){if(_.length>0&&f)break;I++;continue}if(F.length<=2&&_.length>0){I++;continue}if(r.has(x)){I++;continue}const k=F.slice(0,3).join(" ").toLowerCase();if(k.startsWith("total")||k.startsWith("closed p/l")||k.startsWith("balance:")){I++;continue}const C={};for(let L=0;L<l.length;L++)C[l[L]]=P[L]!==void 0&&P[L]!==null?String(P[L]).trim():"";_.push(C)}let w="";return i>0&&(w=`Skipped ${i} broker report preamble row${i===1?"":"s"} and auto-detected headers on row ${i+1}.`),I>0&&(w+=`${w?" ":""}Filtered ${I} summary/non-trade row${I===1?"":"s"}.`),{headers:l,rows:_,warning:w}}function Qy(n){const e=n.match(/<table[\s\S]*?<\/table>/gi)||[];let t={headers:[],rows:[],warning:""};for(const r of e){const i=r.match(/<tr[\s\S]*?<\/tr>/gi)||[],s=[];for(const a of i){const l=[],u=/<(?:th|td)\b[^>]*>([\s\S]*?)<\/(?:th|td)>/gi;let d;for(;(d=u.exec(a))!==null;){const f=GA(d[1].replace(/<[^>]+>/g," ")).replace(/\s+/g," ").trim();l.push(f)}l.length>0&&s.push(l)}const o=Yy(s);o.rows.length>t.rows.length&&(t=o)}return!t.warning&&t.rows.length>0&&(t.warning="Parsed HTML broker statement table."),t}function Jy(n){const e=String(n||"").replace(/^\uFEFF/,"").replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`).filter(a=>a.trim().length>0);if(e.length===0)return[];const t=e[0],r=(t.match(/,/g)||[]).length,i=(t.match(/;/g)||[]).length,s=(t.match(/\t/g)||[]).length,o=s>=r&&s>=i?"	":i>r?";":",";return e.map(a=>{const l=[];let u="",d=!1;for(let f=0;f<a.length;f++){const _=a[f];_==='"'?d&&a[f+1]==='"'?(u+='"',f++):d=!d:_===o&&!d?(l.push(u.trim()),u=""):u+=_}return l.push(u.trim()),l})}function Gu(n){const e=n.map(i=>zn(i)),t=i=>e.includes(i),r=i=>i.some(s=>t(s));return t("date")&&t("pair")&&t("trade type")&&r(["net p&l ($)","p&l ($)"])?"quantos":r(["buyprice","buy price"])&&r(["sellprice","sell price"])&&r(["boughttimestamp","soldtimestamp"])&&r(["pnl","p&l","net pnl"])||r(["contract","symbol"])&&r(["b/s","side"])&&r(["filled qty","qty"])&&r(["avg fill price","fill price","price"])?"tradovate":r(["position id","positionid","order id"])&&r(["instrument","symbol"])&&r(["side"])&&r(["lots","qty","quantity","amount"])&&r(["open price","entry price"])&&r(["net pnl","realized pnl","profit","pnl"])?"tradelocker":t("ticket")&&r(["open time","time"])&&r(["item","symbol"])&&t("profit")?"mt4":t("position")&&t("symbol")&&r(["action","type"])&&t("profit")?"mt5":r(["position id","positionid","deal id"])&&t("symbol")&&r(["direction","opening direction"])&&r(["net profit","net $","gross profit","gross $"])?"ctrader":"unknown"}function B(n,e){const t=Object.keys(n||{});for(const r of e){if(n[r]!==void 0&&n[r]!==null&&String(n[r])!=="")return String(n[r]);const i=zn(r),s=t.find(o=>zn(o)===i);if(s&&n[s]!==void 0&&n[s]!==null&&String(n[s])!=="")return String(n[s])}return""}function jA(n){if(!n)return"";const e=String(n).split(":");if(e.length<2)return"";const t=parseInt(e[0],10);return Number.isNaN(t)?"":t>=0&&t<8?"Asia":t>=7&&t<13?"London":t>=13&&t<16?"Overlap":t>=16&&t<22?"New York":"Other"}function ei(n){return String(n||"").trim().toUpperCase().replace(/[^A-Z0-9._/-]/g,"")}function HA(n){const e=n.toUpperCase();return e.includes("JPY")?{pipSize:.01,pipValue:null}:e.includes("XAU")||e.includes("GOLD")?{pipSize:.1,pipValue:10}:e.includes("NAS")||e.includes("NQ")||e.includes("US100")||e.includes("SPX")||e.includes("ES")||e.includes("US30")||e.includes("YM")?{pipSize:1,pipValue:1}:e.includes("BTC")||e.includes("ETH")?{pipSize:1,pipValue:1}:{pipSize:1e-4,pipValue:10}}function ju(n){var s,o;if(!Array.isArray(n)||n.length<=1)return{mergedTrades:n||[],mergedCount:0};const e=new Map,t=[];for(const a of n){const l=String(a._ref||"").trim(),u=l?`ref:${String(a.accountId||"")}:${a.asset}:${a.tradeType}:${l}`:a.entryTime&&a.entryPrice>0?`win:${String(a.accountId||"")}:${a.asset}:${a.tradeType}:${a.date}:${a.entryTime}:${a.entryPrice}`:"";if(!u){t.push(a);continue}const d=e.get(u);d?d.push(a):e.set(u,[a])}const r=[...t];let i=0;for(const a of e.values()){if(a.length===1){r.push(a[0]);continue}i+=a.length-1;const l=[...a].sort((y,T)=>`${y.date} ${y.exitTime||""}`.localeCompare(`${T.date} ${T.exitTime||""}`)),u=l[0],d=l[l.length-1],f=l.reduce((y,T)=>y+(Number(T.lotSize)||0),0),_=l.reduce((y,T)=>y+(Number(T.grossProfit)||0),0),I=l.reduce((y,T)=>y+(Number(T.commission)||0),0),w=l.reduce((y,T)=>y+(Number(T.swap)||0),0),S=l.reduce((y,T)=>y+(Number(T.pnlAmount)||0),0),P=l.reduce((y,T)=>y+(Number(T.riskAmount)||0),0);let F=0,x=0;for(const y of l)if(y.exitPrice!==null&&Number.isFinite(y.exitPrice)&&y.exitPrice>0){const T=y.lotSize>0?y.lotSize:1;F+=y.exitPrice*T,x+=T}const k=x>0?Number((F/x).toFixed(5)):d.exitPrice,C=((s=l.find(y=>y.slPrice>0))==null?void 0:s.slPrice)||u.slPrice||0,L=((o=l.find(y=>y.tpPrice>0))==null?void 0:o.tpPrice)||d.tpPrice||0;let V=0;P>0?V=Number((S/P).toFixed(4)):l.some(y=>Number.isFinite(y.r)&&y.r!==0)&&(V=Number(l.reduce((y,T)=>y+(Number(T.r)||0),0).toFixed(4)));const b=S>0?"Win":S<0?"Loss":"Break Even",g=`Merged ${l.length} partial closes (${l.map(y=>`${y.lotSize||"?"} @ ${y.exitPrice??"-"}`).join(" + ")})`,m=[u.postNotes,g].filter(Boolean).join(" | ");r.push({...u,lotSize:Number(f.toFixed(4)),exitTime:d.exitTime||u.exitTime,duration:zu(u.entryTime,d.exitTime||u.exitTime),exitPrice:k,slPrice:C,sl:C,tpPrice:L,tp:L,grossProfit:Number(_.toFixed(2)),commission:Number(I.toFixed(2)),swap:Number(w.toFixed(2)),pnlAmount:Number(S.toFixed(2)),riskAmount:P>0?Number(P.toFixed(2)):u.riskAmount,r:V,actualRR:V,resultType:b,result:b,mergedLegsCount:l.length,partialCloseSummary:g,postNotes:m,notes:m})}return{mergedTrades:r,mergedCount:i}}function Xy(n,e={}){const t=Array.isArray(n)?n:[],r=Array.isArray(e.headers)&&e.headers.length>0?e.headers:t.length>0?Object.keys(t[0]):[],i=e.platformOverride&&e.platformOverride!=="auto"?e.platformOverride:Gu(r),s=e.closedOnly!==!1,o=e.mergePartialCloses!==!1;let a=e.dateFormatMode||"auto";if(a==="auto"){const I=t.slice(0,100).map(w=>i==="mt4"?B(w,["Open Time","Time"]):i==="mt5"?B(w,["Time","Open Time"]):i==="ctrader"?B(w,["Entry Time","Opening Time"]):i==="tradelocker"?B(w,["Open Time","Entry Time","Close Time"]):i==="tradovate"?B(w,["boughtTimestamp","soldTimestamp","Fill Time","Timestamp"]):B(w,["Date","Open Time","Entry Time"])).filter(Boolean);a=Ky(I)}let l=0,u=0;const d=[];for(let I=0;I<t.length;I++){const w=t[I];if(!w||typeof w!="object")continue;let S="Buy",P="",F="",x=0,k=0,C=null,L=0,V=0,b=0,g=0,m=0,y,T,A="",v="",K="",fe="",te="",Te="",me="",de="",re="";if(i==="mt4"){const J=B(w,["Type"]).toLowerCase();if(J.includes("balance")||J.includes("deposit")||J.includes("withdrawal")||J.includes("credit")||J.includes("tax")){l++;continue}const U=B(w,["Close Time"]);if(s&&!U){u++;continue}S=J.includes("sell")||J.includes("short")?"Sell":"Buy",P=B(w,["Ticket"]),F=ei(B(w,["Item","Symbol"])),x=oe(B(w,["Size","Volume"]),0),k=oe(B(w,["Open Price","Price"]),0),L=oe(B(w,["S / L","S/L","SL"]),0),V=oe(B(w,["T / P","T/P","TP"]),0);const j=oe(B(w,["Close Price","Price (2)"]),NaN);C=Number.isFinite(j)?j:null,b=oe(B(w,["Commission"]),0),g=oe(B(w,["Swap"]),0),m=oe(B(w,["Profit"]),0),re=B(w,["Comment"]);const R=gt(B(w,["Open Time","Time"]),"",a),O=gt(U,"",a);A=R.date||O.date,v=R.time,K=O.time}else if(i==="mt5"){const J=B(w,["Action","Type"]).toLowerCase();if(J.includes("balance")||J.includes("deposit")||J.includes("withdrawal")||J.includes("credit")||J.includes("charge")){l++;continue}const U=B(w,["Time (2)","Close Time"]);if(s&&r.some(Y=>zn(Y)==="time (2)")&&!U){u++;continue}S=J.includes("sell")||J.includes("short")?"Sell":"Buy",P=B(w,["Position","Ticket","Deal"]),F=ei(B(w,["Symbol"])),x=oe(B(w,["Volume"]),0),k=oe(B(w,["Price","Open Price"]),0);const j=oe(B(w,["Price (2)","Close Price"]),NaN);C=Number.isFinite(j)?j:null,L=oe(B(w,["S / L","S/L","SL"]),0),V=oe(B(w,["T / P","T/P","TP"]),0),b=oe(B(w,["Commission"]),0),g=oe(B(w,["Swap"]),0),m=oe(B(w,["Profit"]),0),re=B(w,["Comment"]);const R=gt(B(w,["Time","Open Time"]),"",a),O=gt(U,"",a);A=R.date||O.date,v=R.time,K=O.time}else if(i==="ctrader"){const J=B(w,["Direction","Opening Direction"]).toLowerCase(),U=B(w,["Close Time","Closing Time"]);if(s&&!U){u++;continue}S=J.includes("sell")||J.includes("short")?"Sell":"Buy",P=B(w,["Position Id","Position ID","Deal Id"]),F=ei(B(w,["Symbol"])),x=oe(B(w,["Volume (lots)","Volume","Quantity"]),0),k=oe(B(w,["Entry Price"]),0);const j=oe(B(w,["Close Price","Exit Price"]),NaN);C=Number.isFinite(j)?j:null,L=oe(B(w,["Stop Loss"]),0),V=oe(B(w,["Take Profit"]),0),b=oe(B(w,["Commission"]),0),g=oe(B(w,["Swap"]),0);const R=oe(B(w,["Gross Profit","Gross $"]),NaN),O=oe(B(w,["Net Profit","Net $"]),NaN);Number.isFinite(R)&&Number.isFinite(O)?(m=R,y=O):Number.isFinite(R)?m=R:Number.isFinite(O)&&(y=O,m=O-b-g);const Y=gt(B(w,["Entry Time","Opening Time"]),"",a),Z=gt(U,"",a);A=Y.date||Z.date,v=Y.time,K=Z.time}else if(i==="tradelocker"){const J=B(w,["Side","Direction","Type"]).toLowerCase(),U=B(w,["Close Time","Exit Time"]);if(s&&!U){u++;continue}S=J.includes("sell")||J.includes("short")?"Sell":"Buy",P=B(w,["Position ID","Position Id","Order ID"]),F=ei(B(w,["Instrument","Symbol"])),x=oe(B(w,["Lots","Amount","Quantity","Qty"]),0),k=oe(B(w,["Open Price","Entry Price"]),0);const j=oe(B(w,["Close Price","Exit Price"]),NaN);C=Number.isFinite(j)?j:null,L=oe(B(w,["Stop Loss","SL"]),0),V=oe(B(w,["Take Profit","TP"]),0);const R=oe(B(w,["Commission","Fee","Fees"]),0);b=R>0?-R:R,g=oe(B(w,["Swap"]),0);const O=oe(B(w,["Gross PnL","Gross Profit","Profit"]),NaN),Y=oe(B(w,["Net PnL","Net Profit","Realized PnL","PnL"]),NaN);Number.isFinite(Y)?(y=Y,m=Number.isFinite(O)?O:Y-b-g):Number.isFinite(O)&&(m=O);const Z=gt(B(w,["Open Time","Entry Time"]),"",a),ce=gt(U,"",a);A=Z.date||ce.date,v=Z.time,K=ce.time,de=B(w,["Notes","Comment"])}else if(i==="tradovate"){F=ei(B(w,["symbol","Contract","Symbol"])),x=oe(B(w,["qty","Qty","Filled Qty","Quantity"]),0),P=B(w,["buyFillId","sellFillId","Order ID","Fill ID"]);const J=B(w,["boughtTimestamp"]),U=B(w,["soldTimestamp"]),j=oe(B(w,["buyPrice","Buy Price"]),NaN),R=oe(B(w,["sellPrice","Sell Price"]),NaN),O=oe(B(w,["pnl","PnL","Net PnL","P&L"]),NaN),Y=oe(B(w,["Fees","Fee","Commission","Commissions"]),0);if(b=Y>0?-Y:Y,J&&U&&Number.isFinite(j)&&Number.isFinite(R)){const Z=new Date(J).getTime(),ce=new Date(U).getTime(),he=Number.isFinite(Z)&&Number.isFinite(ce)?Z<=ce:!0;S=he?"Buy":"Sell",k=he?j:R,C=he?R:j;const Ve=gt(he?J:U,"",a),Pe=gt(he?U:J,"",a);A=Ve.date||Pe.date,v=Ve.time,K=Pe.time,m=Number.isFinite(O)?O:0,y=Number.isFinite(O)?O+b:void 0}else{const Z=B(w,["B/S","Side","Action"]).toLowerCase();S=Z.includes("sell")||Z==="s"?"Sell":"Buy",k=oe(B(w,["Avg Fill Price","Fill Price","Price"]),0);const ce=gt(B(w,["Fill Time","Timestamp","Time"]),"",a);A=ce.date,v=ce.time,m=Number.isFinite(O)?O:0}de=B(w,["duration"])?`Duration: ${B(w,["duration"])}`:""}else if(i==="quantos"){const J=B(w,["Trade Type"]).toLowerCase();S=J.includes("sell")||J.includes("short")?"Sell":"Buy",F=ei(B(w,["Pair"]));const U=gt(B(w,["Date"]),B(w,["Entry Time"]),a);A=U.date,v=U.time,K=Ia(B(w,["Exit Time"])),fe=B(w,["Session"]),x=oe(B(w,["Lot Size"]),0),k=oe(B(w,["Entry Price"]),0);const j=oe(B(w,["Exit Price"]),NaN);C=Number.isFinite(j)?j:null,L=oe(B(w,["Stop Loss Price"]),0),V=oe(B(w,["Take Profit Price"]),0),b=oe(B(w,["Commission"]),0),g=oe(B(w,["Swap"]),0);const R=oe(B(w,["P&L ($)"]),NaN),O=oe(B(w,["Net P&L ($)"]),NaN);Number.isFinite(O)?(y=O,m=Number.isFinite(R)?R:O-b-g):m=Number.isFinite(R)?R:0;const Y=oe(B(w,["Actual R Multiple"]),NaN);Number.isFinite(Y)&&(T=Y),te=B(w,["Setup Type"]),Te=B(w,["Trade Grade"]),me=B(w,["Initial State"]),re=B(w,["Tags"]),de=B(w,["Notes"])}if(!F){l++;continue}A||(A=new Date().toISOString().slice(0,10)),m=Number.isFinite(m)?m:0,b=Number.isFinite(b)?b:0,g=Number.isFinite(g)?g:0;const X=Number(y!==void 0?y.toFixed(2):(m+b+g).toFixed(2));let ie,Q,_e,ke,be=T!==void 0?T:0;if(k>0){const J=e.pipConfigLookup?e.pipConfigLookup(F):HA(F),U=J.pipValue===null?J.pipSize/k*1e5:J.pipValue;L>0&&(Q=Math.abs(k-L)/J.pipSize,x>0&&U>0&&(ie=x*U*Q,ie>0&&T===void 0&&(be=Number((X/ie).toFixed(4))))),V>0&&Q&&Q>0&&(_e=Math.abs(V-k)/J.pipSize,ke=Number((_e/Q).toFixed(2)))}const Se=X>0?"Win":X<0?"Loss":"Break Even",Ae=re?re.split(",").map(J=>J.trim()).filter(Boolean):[];d.push({id:Date.now()*1e3+I,_ref:P||void 0,platform:i,accountId:e.targetAccountId,asset:F,tradeType:S,tradeDirection:S,date:A,entryTime:v,exitTime:K,duration:zu(v,K),lotSize:x,entryPrice:k,entry:k,exitPrice:C,slPrice:L,sl:L,tpPrice:V,tp:V,grossProfit:Number(m.toFixed(2)),commission:Number(b.toFixed(2)),swap:Number(g.toFixed(2)),pnlAmount:X,riskAmount:ie!==void 0?Number(ie.toFixed(2)):void 0,slPips:Q,tpPips:_e,plannedR:ke,r:Number.isFinite(be)?be:0,actualRR:Number.isFinite(be)?be:0,resultType:Se,result:Se,session:fe||jA(v),setupType:te||void 0,tradeGrade:Te||void 0,grade:Te||void 0,preEmotion:me||void 0,psych:me||void 0,postNotes:de||void 0,notes:de||void 0,tags:Ae,model:`${i.toUpperCase()} Import`})}let f=d,_=0;if(o&&d.length>1){const I=ju(d);f=I.mergedTrades,_=I.mergedCount}return{platform:i,trades:f,rawTradeCount:d.length,mergedCount:_,skippedNonTrade:l,skippedOpen:u,dateFormatUsed:a}}const WA=Object.freeze(Object.defineProperty({__proto__:null,BROKER_PRESETS:Wy,computeTradeDuration:zu,detectBrokerPlatform:Gu,detectSlashDateMode:Ky,extractStructuredRowsFrom2D:Yy,mergePartialCloseTrades:ju,normHeader:zn,normalizeBrokerRows:Xy,normalizeClockTime:Ia,parseBrokerDateTime:gt,parseCsvTextRows2D:Jy,parseFlexibleNumber:oe,parseHtmlStatementTables:Qy},Symbol.toStringTag,{value:"Module"}));function KA(n){let e=2166136261;for(let t=0;t<n.length;t++)e^=n.charCodeAt(t),e=Math.imul(e,16777619);return e>>>0}function YA(n){let e=n||123456789;return()=>(e=Math.imul(1664525,e)+1013904223>>>0,e/4294967296)}function QA(n){const e=n.filter(r=>Number.isFinite(r)&&r>0);if(e.length===0)return 2;const t=Math.max(...e);return t>=1e3?2:t>=50?3:5}function xo(n){if(n==null||n==="")return null;const e=Number(n);return Number.isFinite(e)&&e>0?e:null}function Zy(n,e){const t=String(n.asset||n.pair||"SYMBOL").toUpperCase(),r=String(n.tradeType||n.tradeDirection||n.direction||"Buy").toLowerCase(),i=Number(n.r??n.actualRR??0)||0,s=Number(n.plannedR)>0?Number(n.plannedR):Math.max(2,Math.abs(i),1.5),o=n.maeR!==null&&n.maeR!==void 0&&n.maeR!==""&&Number.isFinite(Number(n.maeR))?Math.max(0,Math.abs(Number(n.maeR))):null,a=n.mfeR!==null&&n.mfeR!==void 0&&n.mfeR!==""&&Number.isFinite(Number(n.mfeR))?Math.max(0,Number(n.mfeR)):null,l=xo(n.entryPrice??n.entry),u=xo(n.slPrice??n.sl),d=xo(n.tpPrice??n.tp),f=xo(n.exitPrice);let _=!r.includes("sell")&&!r.includes("short");l&&u&&l!==u?_=l>u:l&&d&&l!==d&&(_=d>l);const I=!!(l&&(u||d||f));let w=l??100,S,P,F,x;I&&l?(u&&u!==l?(x=Math.abs(l-u),S=u):d&&d!==l?(x=Math.abs(d-l)/s,S=_?l-x:l+x):f&&f!==l&&Math.abs(i)>.05?(x=Math.abs(f-l)/Math.abs(i),S=_?l-x:l+x):(x=l*.004,S=_?l-x:l+x),P=d&&d!==l?d:_?l+x*s:l-x*s,F=f&&f>0?f:_?l+x*i:l-x*i):(x=1,w=0,S=-1,P=s,F=i,_=!0);const k=_?1:-1,C=o!==null?o:i<0?Math.max(.25,Math.abs(i)):.35,L=a!==null?Math.max(a,i):i>0?Math.max(i*1.12,i+.15):.45,V=w-k*x*C,b=w+k*x*L,g=5,m=i>=0?7:11,y=i>=0?11:7,T=14,A=18;let v,K=!1;if(Array.isArray(e)&&e.length>=6)v=e,K=!0;else{const re=YA(KA(`${n.id||""}:${t}:${w}:${i}`)),X=()=>(re()-.5)*.18*x,ie=new Array(A).fill(w);for(let Q=0;Q<g;Q++){const _e=-k*x*(.55-Q*.1)+X();ie[Q]=w+_e}ie[g]=w+k*x*.08;for(let Q=g+1;Q<T;Q++)if(Q===m)ie[Q]=V+k*x*.06;else if(Q===y)ie[Q]=b-k*x*.08;else{const _e=(Q-g)/(T-g);ie[Q]=w+(F-w)*_e+X()}ie[T]=F;for(let Q=T+1;Q<A;Q++)ie[Q]=ie[Q-1]+k*(i>=0?.1:-.08)*x+X();v=[];for(let Q=0;Q<A;Q++){const _e=Q===0?ie[0]-k*.12*x:v[Q-1].close,ke=ie[Q],be=Math.abs(.08+re()*.14)*x,Se=Math.abs(.08+re()*.14)*x;let Ae=Math.max(_e,ke)+be,J=Math.min(_e,ke)-Se;Q===g&&(J=Math.min(J,w),Ae=Math.max(Ae,w)),Q===m&&(_?J=Math.min(J,V):Ae=Math.max(Ae,V)),Q===y&&(_?Ae=Math.max(Ae,b):J=Math.min(J,b)),Q===T&&(J=Math.min(J,F),Ae=Math.max(Ae,F));const U=Q<g?"context":Q===g?"entry":Q<T?"hold":Q===T?"exit":"post";v.push({index:Q,label:Q===g?"ENTRY":Q===T?"EXIT":`${Q+1}`,open:_e,high:Ae,low:J,close:ke,phase:U})}}const fe=[w,F,S,P,V,b,...v.flatMap(re=>[re.high,re.low])].filter(Number.isFinite),te=Math.min(...fe),Te=Math.max(...fe),me=Math.max((Te-te)*.12,x*.25),de=I?QA([w,F,S,P]):2;return{candles:v,isBuy:_,hasRealPrices:I,isAnchoredRealOhlc:K,entryPrice:w,exitPrice:F,slPrice:S,tpPrice:P,maePrice:V,mfePrice:b,entryIndex:g,exitIndex:T,maeIndex:m,mfeIndex:y,actualR:i,plannedR:s,maeR:o,mfeR:a,priceMin:te-me,priceMax:Te+me,decimals:de,asset:t,entryTime:n.entryTime,exitTime:n.exitTime}}function ss(n){return String(n??"").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]||e)}function ko(n,e,t){return t?n.toFixed(e):`${n>0?"+":""}${n.toFixed(2)}R`}function e_(n,e={}){const t=e.width||620,r=e.height||260,i=12,s=76,o=16,a=26,l=t-i-s,u=r-o-a,d=n.priceMax-n.priceMin||1,f=X=>Math.max(o,Math.min(o+u,o+(n.priceMax-X)/d*u)),_=Math.max(1,n.candles.length),I=l/_,w=Math.max(5,Math.min(16,I*.58)),S=X=>i+I*(X+.5),P=f(n.slPrice),F=f(n.entryPrice),x=f(n.exitPrice),k=f(n.tpPrice),C=S(n.entryIndex),L=S(n.exitIndex),V=Math.min(F,x),b=Math.max(4,Math.abs(x-F)),g=n.actualR>=0,m=g?"rgba(16, 185, 129, 0.14)":"rgba(244, 63, 94, 0.14)",y=[.2,.4,.6,.8].map(X=>{const ie=o+u*X;return`<line x1="${i}" y1="${ie.toFixed(1)}" x2="${t-s}" y2="${ie.toFixed(1)}" stroke="currentColor" stroke-opacity="0.08" stroke-dasharray="2 4" />`}),T=n.candles.map((X,ie)=>{const Q=S(ie),_e=f(X.open),ke=f(X.close),be=f(X.high),Se=f(X.low),J=X.close>=X.open?"#10b981":"#f43f5e",U=Math.min(_e,ke),j=Math.max(2,Math.abs(ke-_e)),R=ie===n.entryIndex||ie===n.exitIndex;return`
      <g opacity="${X.phase==="context"||X.phase==="post"?"0.58":"0.95"}">
        <line x1="${Q.toFixed(1)}" y1="${be.toFixed(1)}" x2="${Q.toFixed(1)}" y2="${Se.toFixed(1)}" stroke="${J}" stroke-width="${R?2:1.3}" />
        <rect x="${(Q-w/2).toFixed(1)}" y="${U.toFixed(1)}" width="${w.toFixed(1)}" height="${j.toFixed(1)}" rx="1.5" fill="${J}" ${R?'stroke="#ffffff" stroke-width="0.9"':""} />
      </g>
    `}),A=(X,ie,Q,_e,ke=!0)=>`
    <g>
      <line x1="${i}" y1="${X.toFixed(1)}" x2="${t-s}" y2="${X.toFixed(1)}" stroke="${ie}" stroke-width="1.25" ${ke?'stroke-dasharray="4 3"':""} stroke-opacity="0.85" />
      <rect x="${t-s+4}" y="${(X-9).toFixed(1)}" width="${s-8}" height="18" rx="4" fill="${ie}" fill-opacity="0.16" stroke="${ie}" stroke-opacity="0.55" stroke-width="0.8" />
      <text x="${t-s+8}" y="${(X+3.5).toFixed(1)}" font-family="ui-monospace, monospace" font-size="9.5" font-weight="700" fill="${ie}">${ss(Q)} ${ss(_e)}</text>
    </g>
  `,v=S(n.maeIndex),K=f(n.maePrice),fe=S(n.mfeIndex),te=f(n.mfePrice),Te=`
    <g>
      <circle cx="${C.toFixed(1)}" cy="${F.toFixed(1)}" r="4.5" fill="#3b82f6" stroke="#ffffff" stroke-width="1.3" />
      <text x="${C.toFixed(1)}" y="${r-8}" text-anchor="middle" font-family="ui-monospace, monospace" font-size="9.5" font-weight="700" fill="#3b82f6">IN${n.entryTime?` ${ss(n.entryTime.slice(0,5))}`:""}</text>
    </g>
  `,me=`
    <g>
      <circle cx="${L.toFixed(1)}" cy="${x.toFixed(1)}" r="4.5" fill="${g?"#10b981":"#f43f5e"}" stroke="#ffffff" stroke-width="1.3" />
      <text x="${L.toFixed(1)}" y="${r-8}" text-anchor="middle" font-family="ui-monospace, monospace" font-size="9.5" font-weight="700" fill="${g?"#10b981":"#f43f5e"}">OUT${n.exitTime?` ${ss(n.exitTime.slice(0,5))}`:""}</text>
    </g>
  `,de=n.maeR!==null?`<g>
           <circle cx="${v.toFixed(1)}" cy="${K.toFixed(1)}" r="3.2" fill="#f59e0b" />
           <text x="${v.toFixed(1)}" y="${Math.min(r-20,K+13).toFixed(1)}" text-anchor="middle" font-family="ui-monospace, monospace" font-size="8.8" font-weight="700" fill="#f59e0b">MAE -${n.maeR.toFixed(2)}R</text>
         </g>`:"",re=n.mfeR!==null?`<g>
           <circle cx="${fe.toFixed(1)}" cy="${te.toFixed(1)}" r="3.2" fill="#10b981" />
           <text x="${fe.toFixed(1)}" y="${Math.max(12,te-7).toFixed(1)}" text-anchor="middle" font-family="ui-monospace, monospace" font-size="8.8" font-weight="700" fill="#10b981">MFE +${n.mfeR.toFixed(2)}R</text>
         </g>`:"";return`
    <svg class="trc-ohlc-svg" viewBox="0 0 ${t} ${r}" width="100%" height="${r}" role="img" aria-label="OHLC Execution Replay for ${ss(n.asset)}">
      ${y.join("")}
      <rect x="${C.toFixed(1)}" y="${V.toFixed(1)}" width="${Math.max(4,L-C).toFixed(1)}" height="${b.toFixed(1)}" fill="${m}" rx="3" />
      ${A(k,"#10b981","TP",ko(n.tpPrice,n.decimals,n.hasRealPrices),!0)}
      ${A(P,"#f43f5e","SL",ko(n.slPrice,n.decimals,n.hasRealPrices),!0)}
      ${A(F,"#3b82f6","IN",ko(n.entryPrice,n.decimals,n.hasRealPrices),!1)}
      ${A(x,g?"#10b981":"#f43f5e","EX",ko(n.exitPrice,n.decimals,n.hasRealPrices),!0)}
      ${T.join("")}
      ${Te}
      ${me}
      ${de}
      ${re}
    </svg>
  `.trim()}const JA=Object.freeze(Object.defineProperty({__proto__:null,buildExecutionReplayScene:Zy,renderExecutionReplaySvg:e_},Symbol.toStringTag,{value:"Module"})),XA="https://yosefgods7-cloud.github.io",ZA="https://yosefgods7-cloud.github.io/Quantos/";function Hu(n){const e=String(n||"").trim().replace(/\/+$/,"");if(!e)return"";if(e==="*")return"*";try{const t=new URL(e);return t.protocol==="http:"||t.protocol==="https:"?t.origin:""}catch{if(/^[a-z0-9.-]+\.[a-z]{2,}(:\d+)?(\/.*)?$/i.test(e))try{return new URL(`https://${e}`).origin}catch{return""}return""}}function eR(n){if(!n)return[];const e=new Set,t=[];for(const r of n.split(",")){const i=Hu(r);i&&!e.has(i)&&(e.add(i),t.push(i))}return t}function tR(n,e){if(!n)return!0;const t=Hu(n);return t?e.configuredOrigins.includes("*")||e.ownOrigins&&e.ownOrigins.has(t)||e.configuredOrigins.includes(t)?!0:!e.isProduction&&/^https?:\/\/(localhost|127\.0\.0\.1)(:\d+)?$/i.test(t):!1}function nR(n){return{service:"quantedge-backend",status:"ok",hasGeminiKey:!!n.hasGeminiKey,requiresAuth:!!n.requiresAuth,corsConfigured:!!n.corsConfigured,defaultModel:n.defaultModel,supportedFreeModels:[...n.supportedFreeModels],mode:n.mode,uptimeSec:Math.max(0,Math.round(n.uptimeSec))}}const rR=Object.freeze(Object.defineProperty({__proto__:null,DEFAULT_GITHUB_PAGES_APP_URL:ZA,DEFAULT_GITHUB_PAGES_ORIGIN:XA,buildBackendHealthPayload:nR,isOriginAllowed:tR,normalizeCorsOriginEntry:Hu,parseCorsOrigins:eR},Symbol.toStringTag,{value:"Module"})),iR=[{id:"modular-foundation",order:1,title:"Modular Engine & Test Foundation",status:"completed",targetDirectory:"src/quantedge/",summary:"Extracted pure Prop Rulebook and Portfolio Rebalancer engines into typed ES modules with automated unit tests."},{id:"currency-exposure",order:2,title:"Net Currency & Correlation-Adjusted Risk Heat",status:"completed",targetDirectory:"src/quantedge/",summary:"Decompose open trades into directional currency/factor legs and surface true correlated portfolio heat."},{id:"news-guardrail",order:3,title:"Prop News-Window Guardrail & Timezone Calendar",status:"completed",targetDirectory:"src/quantedge/",summary:"Add timezone-aware economic news feeds and ±2–5 minute Prop firm news lockout warnings in pre-trade validation."},{id:"prop-roi",order:4,title:"Prop Firm Unit Economics & Payout ROI Ledger",status:"completed",targetDirectory:"src/quantedge/",summary:"Unify challenge/reset fees against payouts per firm with pass-rate metrics and exportable CSV audit summaries."},{id:"broker-replay",order:5,title:"One-Click Broker Presets & Visual Execution Replay",status:"completed",targetDirectory:"src/quantedge/",summary:"Add MT4/MT5, cTrader, TradeLocker, and Tradovate import presets plus OHLC replay around entry/exit."},{id:"cloud-backend",order:6,title:"Standalone Cloud Backend Companion",status:"completed",targetDirectory:"server.ts",summary:"Containerize server.ts with CORS & VITE_API_BASE_URL configuration for full AI & market route parity on GitHub Pages."}];function Jf(n){let e=[],t="Asia/Riyadh",r=new Date().toISOString().slice(0,10);try{const a=window.localStorage.getItem("qe_eco_calendar");if(a){const l=JSON.parse(a);if(l&&Array.isArray(l.items)&&(e=l.items),l!=null&&l.sourceTimezone&&(t=String(l.sourceTimezone)),l!=null&&l.fetchDate){const u=new Date(l.fetchDate);Number.isNaN(u.getTime())||(r=u.toISOString().slice(0,10))}}}catch{}let i=[];try{const a=window.localStorage.getItem("qe_eco_manual_events");if(a){const l=JSON.parse(a);Array.isArray(l)&&(i=l.map(u=>({...u,isManual:!0,source:"manual"})))}}catch{}const s=e.length>0?Pi(e,{displayTimezone:n,legacySourceTimezone:t,fallbackDateYMD:r}):qu(new Date,n),o=Pi(i,{displayTimezone:n,legacySourceTimezone:n,fallbackDateYMD:new Date().toISOString().slice(0,10)});return[...s,...o].sort((a,l)=>new Date(a.timestampIso).getTime()-new Date(l.timestampIso).getTime())}function sR(){if(typeof window>"u")return;window.QuantEdgeModules={tracks:iR,dateUtils:PA,propEngine:xA,rebalancerEngine:kA,exposureEngine:OA,newsEngine:$A,propRoiEngine:zA,brokerImportEngine:WA,replayChartEngine:JA,backendConfig:rR},window.parseLocalCalendarDate=Za,window.formatLocalCalendarYMD=Ta,window.calculatePropAccountRulebook=Ou;const n=t=>{var i,s,o,a,l,u,d;const r=((s=(i=window.Store)==null?void 0:i.settings)==null?void 0:s.riskThresholds)||{};return{activeTrades:((o=window.Store)==null?void 0:o.activeTrades)||[],plannedTrades:((a=window.Store)==null?void 0:a.plannedTrades)||[],includePlanned:!0,accounts:((l=window.Store)==null?void 0:l.accounts)||[],defaultRiskPct:Number((d=(u=window.Store)==null?void 0:u.settings)==null?void 0:d.defaultRiskPct)||1,safeHeatThresholdPct:Number(r.safe)>0?Number(r.safe):2,maxHeatThresholdPct:Number(r.med)>0?Number(r.med):5,...t}};if(window.analyzeCurrencyExposure=function(t){return ba(n(t))},window.simulatePreTradeExposure=function(t,r){return Ly(t,n(r))},window.getAvailableTimezones=()=>Vy,window.resolveUserTimezone=t=>{var r,i;return Jn(t??((i=(r=window.Store)==null?void 0:r.settings)==null?void 0:i.timezone)??"auto")},window.formatNewsTime=tc,window.zonedWallTimeToUtcIso=nc,window.normalizeCalendarEvents=Pi,window.getDefaultMacroRiskWindows=qu,window.getActiveCalendarEvents=t=>Jf(window.resolveUserTimezone(t)),window.evaluatePropNewsGuardrail=(t,r,i)=>{const s=window.resolveUserTimezone(i==null?void 0:i.timezone),o=(i==null?void 0:i.events)??Jf(s);return qy({account:t??null,pair:r,timezone:s,events:o,...i})},window.analyzePropUnitEconomics=t=>{var r,i,s,o,a;return zy({accounts:((r=window.Store)==null?void 0:r.accounts)||[],payouts:((i=window.Store)==null?void 0:i.payouts)||[],trades:((s=window.Store)==null?void 0:s.trades)||[],expenses:((o=window.Store)==null?void 0:o.expenses)||[],propFees:((a=window.Store)==null?void 0:a.propFees)||[],...t})},window.buildPropTaxAuditCsv=jy,window.buildPropTaxAuditPrintHtml=Hy,window.BROKER_PRESETS=Wy,window.detectBrokerPlatform=Gu,window.normalizeBrokerRows=Xy,window.mergePartialCloseTrades=ju,window.parseHtmlStatementTables=Qy,window.parseCsvTextRows2D=Jy,window.buildExecutionReplayScene=Zy,window.renderExecutionReplaySvg=e_,window.PortfolioRebalancer){const t=window.PortfolioRebalancer;t._getBufferRatio=function(){return Lu(this._bufferMode||"balanced")},t._getTradeRValue=function(r){return Vu(r)},t._getTotalPortfolioTradeR=function(){var r;return $u(((r=window.Store)==null?void 0:r.trades)||[])},t._getAccountOneR=function(r){var i,s,o;return Ea(r,((i=window.Store)==null?void 0:i.trades)||[],((o=(s=window.Store)==null?void 0:s.settings)==null?void 0:o.defaultRiskPct)||1)},t._computeTransferRImpact=function(r,i,s){var o,a,l;return Dy(r,i,s,((o=window.Store)==null?void 0:o.trades)||[],((l=(a=window.Store)==null?void 0:a.settings)==null?void 0:l.defaultRiskPct)||1)},t.analyze=function(){var r,i,s,o;return Ny({accounts:((r=window.Store)==null?void 0:r.accounts)||[],trades:((i=window.Store)==null?void 0:i.trades)||[],bufferMode:this._bufferMode||"balanced",maxAllowedDD:((o=(s=window.Store)==null?void 0:s.settings)==null?void 0:o.maxAllowedDD)||10})}}typeof window.updateExposureAnalysis=="function"&&window.updateExposureAnalysis(),typeof window.renderPropRulebookPanel=="function"&&window.renderPropRulebookPanel(),typeof window.renderEconomicCalendar=="function"&&window.renderEconomicCalendar(),typeof window.renderPropRoiLedger=="function"&&window.renderPropRoiLedger();const e=document.getElementById("modal-trade-review-carousel");e&&(e.classList.contains("is-open")||e.style.display==="flex")&&typeof window.renderTradeReviewCarousel=="function"&&window.renderTradeReviewCarousel()}sR()});export default oR();
