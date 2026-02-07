var di=Object.defineProperty;var on=Object.getOwnPropertyDescriptor;var sn=(o,e)=>{for(var t in e)di(o,t,{get:e[t],enumerable:!0})};var s=(o,e,t,r)=>{for(var i=r>1?void 0:r?on(e,t):e,a=o.length-1,n;a>=0;a--)(n=o[a])&&(i=(r?n(e,t,i):n(i))||i);return r&&i&&di(e,t,i),i};function X(o,e,t){return new Promise(r=>{if(t?.duration===1/0)throw new Error("Promise-based animations must be finite.");let i=o.animate(e,{...t,duration:Nr()?0:t.duration});i.addEventListener("cancel",r,{once:!0}),i.addEventListener("finish",r,{once:!0})})}function To(o){return o=o.toString().toLowerCase(),o.indexOf("ms")>-1?parseFloat(o):o.indexOf("s")>-1?parseFloat(o)*1e3:parseFloat(o)}function Nr(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function Y(o){return Promise.all(o.getAnimations().map(e=>new Promise(t=>{e.cancel(),requestAnimationFrame(t)})))}function tr(o,e){return o.map(t=>({...t,height:t.height==="auto"?`${e}px`:t.height}))}var er=o=>{let{activeElement:e}=document;e&&o.contains(e)&&document.activeElement?.blur()};var So=globalThis,ui=o=>o,Br=So.trustedTypes,hi=Br?Br.createPolicy("lit-html",{createHTML:o=>o}):void 0,Mo="$lit$",be=`lit$${Math.random().toFixed(9).slice(2)}$`,zo="?"+be,an=`<${zo}>`,Fe=document,br=()=>Fe.createComment(""),vr=o=>o===null||typeof o!="object"&&typeof o!="function",Ao=Array.isArray,vi=o=>Ao(o)||typeof o?.[Symbol.iterator]=="function",$o=`[ 	
\f\r]`,gr=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,pi=/-->/g,fi=/>/g,Ie=RegExp(`>|${$o}(?:([^\\s"'>=/]+)(${$o}*=${$o}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),mi=/'/g,gi=/"/g,yi=/^(?:script|style|textarea|title)$/i,Lo=o=>(e,...t)=>({_$litType$:o,strings:e,values:t}),g=Lo(1),xi=Lo(2),wi=Lo(3),yt=Symbol.for("lit-noChange"),Z=Symbol.for("lit-nothing"),bi=new WeakMap,De=Fe.createTreeWalker(Fe,129);function _i(o,e){if(!Ao(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return hi!==void 0?hi.createHTML(e):e}var ki=(o,e)=>{let t=o.length-1,r=[],i,a=e===2?"<svg>":e===3?"<math>":"",n=gr;for(let c=0;c<t;c++){let d=o[c],u,p,h=-1,f=0;for(;f<d.length&&(n.lastIndex=f,p=n.exec(d),p!==null);)f=n.lastIndex,n===gr?p[1]==="!--"?n=pi:p[1]!==void 0?n=fi:p[2]!==void 0?(yi.test(p[2])&&(i=RegExp("</"+p[2],"g")),n=Ie):p[3]!==void 0&&(n=Ie):n===Ie?p[0]===">"?(n=i??gr,h=-1):p[1]===void 0?h=-2:(h=n.lastIndex-p[2].length,u=p[1],n=p[3]===void 0?Ie:p[3]==='"'?gi:mi):n===gi||n===mi?n=Ie:n===pi||n===fi?n=gr:(n=Ie,i=void 0);let m=n===Ie&&o[c+1].startsWith("/>")?" ":"";a+=n===gr?d+an:h>=0?(r.push(u),d.slice(0,h)+Mo+d.slice(h)+be+m):d+be+(h===-2?c:m)}return[_i(o,a+(o[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),r]},yr=class o{constructor({strings:e,_$litType$:t},r){let i;this.parts=[];let a=0,n=0,c=e.length-1,d=this.parts,[u,p]=ki(e,t);if(this.el=o.createElement(u,r),De.currentNode=this.el.content,t===2||t===3){let h=this.el.content.firstChild;h.replaceWith(...h.childNodes)}for(;(i=De.nextNode())!==null&&d.length<c;){if(i.nodeType===1){if(i.hasAttributes())for(let h of i.getAttributeNames())if(h.endsWith(Mo)){let f=p[n++],m=i.getAttribute(h).split(be),b=/([.?@])?(.*)/.exec(f);d.push({type:1,index:a,name:b[2],strings:m,ctor:b[1]==="."?qr:b[1]==="?"?Gr:b[1]==="@"?Wr:Ve}),i.removeAttribute(h)}else h.startsWith(be)&&(d.push({type:6,index:a}),i.removeAttribute(h));if(yi.test(i.tagName)){let h=i.textContent.split(be),f=h.length-1;if(f>0){i.textContent=Br?Br.emptyScript:"";for(let m=0;m<f;m++)i.append(h[m],br()),De.nextNode(),d.push({type:2,index:++a});i.append(h[f],br())}}}else if(i.nodeType===8)if(i.data===zo)d.push({type:2,index:a});else{let h=-1;for(;(h=i.data.indexOf(be,h+1))!==-1;)d.push({type:7,index:a}),h+=be.length-1}a++}}static createElement(e,t){let r=Fe.createElement("template");return r.innerHTML=e,r}};function Pe(o,e,t=o,r){if(e===yt)return e;let i=r!==void 0?t._$Co?.[r]:t._$Cl,a=vr(e)?void 0:e._$litDirective$;return i?.constructor!==a&&(i?._$AO?.(!1),a===void 0?i=void 0:(i=new a(o),i._$AT(o,t,r)),r!==void 0?(t._$Co??=[])[r]=i:t._$Cl=i),i!==void 0&&(e=Pe(o,i._$AS(o,e.values),i,r)),e}var Ur=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:r}=this._$AD,i=(e?.creationScope??Fe).importNode(t,!0);De.currentNode=i;let a=De.nextNode(),n=0,c=0,d=r[0];for(;d!==void 0;){if(n===d.index){let u;d.type===2?u=new rr(a,a.nextSibling,this,e):d.type===1?u=new d.ctor(a,d.name,d.strings,this,e):d.type===6&&(u=new jr(a,this,e)),this._$AV.push(u),d=r[++c]}n!==d?.index&&(a=De.nextNode(),n++)}return De.currentNode=Fe,i}p(e){let t=0;for(let r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(e,r,t),t+=r.strings.length-2):r._$AI(e[t])),t++}},rr=class o{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,r,i){this.type=2,this._$AH=Z,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=r,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Pe(this,e,t),vr(e)?e===Z||e==null||e===""?(this._$AH!==Z&&this._$AR(),this._$AH=Z):e!==this._$AH&&e!==yt&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):vi(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==Z&&vr(this._$AH)?this._$AA.nextSibling.data=e:this.T(Fe.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:r}=e,i=typeof r=="number"?this._$AC(e):(r.el===void 0&&(r.el=yr.createElement(_i(r.h,r.h[0]),this.options)),r);if(this._$AH?._$AD===i)this._$AH.p(t);else{let a=new Ur(i,this),n=a.u(this.options);a.p(t),this.T(n),this._$AH=a}}_$AC(e){let t=bi.get(e.strings);return t===void 0&&bi.set(e.strings,t=new yr(e)),t}k(e){Ao(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,r,i=0;for(let a of e)i===t.length?t.push(r=new o(this.O(br()),this.O(br()),this,this.options)):r=t[i],r._$AI(a),i++;i<t.length&&(this._$AR(r&&r._$AB.nextSibling,i),t.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let r=ui(e).nextSibling;ui(e).remove(),e=r}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},Ve=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,r,i,a){this.type=1,this._$AH=Z,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=a,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=Z}_$AI(e,t=this,r,i){let a=this.strings,n=!1;if(a===void 0)e=Pe(this,e,t,0),n=!vr(e)||e!==this._$AH&&e!==yt,n&&(this._$AH=e);else{let c=e,d,u;for(e=a[0],d=0;d<a.length-1;d++)u=Pe(this,c[r+d],t,d),u===yt&&(u=this._$AH[d]),n||=!vr(u)||u!==this._$AH[d],u===Z?e=Z:e!==Z&&(e+=(u??"")+a[d+1]),this._$AH[d]=u}n&&!i&&this.j(e)}j(e){e===Z?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},qr=class extends Ve{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===Z?void 0:e}},Gr=class extends Ve{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==Z)}},Wr=class extends Ve{constructor(e,t,r,i,a){super(e,t,r,i,a),this.type=5}_$AI(e,t=this){if((e=Pe(this,e,t,0)??Z)===yt)return;let r=this._$AH,i=e===Z&&r!==Z||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,a=e!==Z&&(r===Z||i);i&&this.element.removeEventListener(this.name,this,r),a&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},jr=class{constructor(e,t,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){Pe(this,e)}},Ci={M:Mo,P:be,A:zo,C:1,L:ki,R:Ur,D:vi,V:Pe,I:rr,H:Ve,N:Gr,U:Wr,B:qr,F:jr},nn=So.litHtmlPolyfillSupport;nn?.(yr,rr),(So.litHtmlVersions??=[]).push("3.3.2");var Ei=(o,e,t)=>{let r=t?.renderBefore??e,i=r._$litPart$;if(i===void 0){let a=t?.renderBefore??null;r._$litPart$=i=new rr(e.insertBefore(br(),a),a,void 0,t??{})}return i._$AI(o),i};var $t={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},oe=o=>(...e)=>({_$litDirective$:o,values:e}),Wt=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,r){this._$Ct=e,this._$AM=t,this._$Ci=r}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};var $=oe(class extends Wt{constructor(o){if(super(o),o.type!==$t.ATTRIBUTE||o.name!=="class"||o.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(o){return" "+Object.keys(o).filter(e=>o[e]).join(" ")+" "}update(o,[e]){if(this.st===void 0){this.st=new Set,o.strings!==void 0&&(this.nt=new Set(o.strings.join(" ").split(/\s/).filter(r=>r!=="")));for(let r in e)e[r]&&!this.nt?.has(r)&&this.st.add(r);return this.render(e)}let t=o.element.classList;for(let r of this.st)r in e||(t.remove(r),this.st.delete(r));for(let r in e){let i=!!e[r];i===this.st.has(r)||this.nt?.has(r)||(i?(t.add(r),this.st.add(r)):(t.remove(r),this.st.delete(r)))}return yt}});var $i=new Map,ln=new WeakMap;function cn(o){return o??{keyframes:[],options:{duration:0}}}function Ti(o,e){return e.toLowerCase()==="rtl"?{keyframes:o.rtlKeyframes||o.keyframes,options:o.options}:o}function V(o,e){$i.set(o,cn(e))}function j(o,e,t){let r=ln.get(o);if(r?.[e])return Ti(r[e],t.dir);let i=$i.get(e);return i?Ti(i,t.dir):{keyframes:[],options:{duration:0}}}var K=class{constructor(e,...t){this.slotNames=[];this.handleSlotChange=e=>{let t=e.target;(this.slotNames.includes("[default]")&&!t.name||t.name&&this.slotNames.includes(t.name))&&this.host.requestUpdate()};(this.host=e).addController(this),this.slotNames=t}hasDefaultSlot(){return[...this.host.childNodes].some(e=>{if(e.nodeType===e.TEXT_NODE&&e.textContent.trim()!=="")return!0;if(e.nodeType===e.ELEMENT_NODE){let t=e;if(t.tagName.toLowerCase()==="sl-visually-hidden")return!1;if(!t.hasAttribute("slot"))return!0}return!1})}hasNamedSlot(e){return this.host.querySelector(`:scope > [slot="${e}"]`)!==null}test(e){return e==="[default]"?this.hasDefaultSlot():this.hasNamedSlot(e)}hostConnected(){this.host.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}};function Si(o){if(!o)return"";let e=o.assignedNodes({flatten:!0}),t="";return[...e].forEach(r=>{r.nodeType===Node.TEXT_NODE&&(t+=r.textContent)}),t}var Kr=globalThis,Xr=Kr.ShadowRoot&&(Kr.ShadyCSS===void 0||Kr.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Ho=Symbol(),Mi=new WeakMap,xr=class{constructor(e,t,r){if(this._$cssResult$=!0,r!==Ho)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(Xr&&e===void 0){let r=t!==void 0&&t.length===1;r&&(e=Mi.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),r&&Mi.set(t,e))}return e}toString(){return this.cssText}},zi=o=>new xr(typeof o=="string"?o:o+"",void 0,Ho),_=(o,...e)=>{let t=o.length===1?o[0]:e.reduce((r,i,a)=>r+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+o[a+1],o[0]);return new xr(t,o,Ho)},Ai=(o,e)=>{if(Xr)o.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(let t of e){let r=document.createElement("style"),i=Kr.litNonce;i!==void 0&&r.setAttribute("nonce",i),r.textContent=t.cssText,o.appendChild(r)}},Ro=Xr?o=>o:o=>o instanceof CSSStyleSheet?(e=>{let t="";for(let r of e.cssRules)t+=r.cssText;return zi(t)})(o):o;var{is:dn,defineProperty:un,getOwnPropertyDescriptor:hn,getOwnPropertyNames:pn,getOwnPropertySymbols:fn,getPrototypeOf:mn}=Object,Yr=globalThis,Li=Yr.trustedTypes,gn=Li?Li.emptyScript:"",bn=Yr.reactiveElementPolyfillSupport,wr=(o,e)=>o,$e={toAttribute(o,e){switch(e){case Boolean:o=o?gn:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,e){let t=o;switch(e){case Boolean:t=o!==null;break;case Number:t=o===null?null:Number(o);break;case Object:case Array:try{t=JSON.parse(o)}catch{t=null}}return t}},Zr=(o,e)=>!dn(o,e),Hi={attribute:!0,type:String,converter:$e,reflect:!1,useDefault:!1,hasChanged:Zr};Symbol.metadata??=Symbol("metadata"),Yr.litPropertyMetadata??=new WeakMap;var ve=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=Hi){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let r=Symbol(),i=this.getPropertyDescriptor(e,r,t);i!==void 0&&un(this.prototype,e,i)}}static getPropertyDescriptor(e,t,r){let{get:i,set:a}=hn(this.prototype,e)??{get(){return this[t]},set(n){this[t]=n}};return{get:i,set(n){let c=i?.call(this);a?.call(this,n),this.requestUpdate(e,c,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Hi}static _$Ei(){if(this.hasOwnProperty(wr("elementProperties")))return;let e=mn(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(wr("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(wr("properties"))){let t=this.properties,r=[...pn(t),...fn(t)];for(let i of r)this.createProperty(i,t[i])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[r,i]of t)this.elementProperties.set(r,i)}this._$Eh=new Map;for(let[t,r]of this.elementProperties){let i=this._$Eu(t,r);i!==void 0&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let r=new Set(e.flat(1/0).reverse());for(let i of r)t.unshift(Ro(i))}else e!==void 0&&t.push(Ro(e));return t}static _$Eu(e,t){let r=t.attribute;return r===!1?void 0:typeof r=="string"?r:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let r of t.keys())this.hasOwnProperty(r)&&(e.set(r,this[r]),delete this[r]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Ai(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,r){this._$AK(e,r)}_$ET(e,t){let r=this.constructor.elementProperties.get(e),i=this.constructor._$Eu(e,r);if(i!==void 0&&r.reflect===!0){let a=(r.converter?.toAttribute!==void 0?r.converter:$e).toAttribute(t,r.type);this._$Em=e,a==null?this.removeAttribute(i):this.setAttribute(i,a),this._$Em=null}}_$AK(e,t){let r=this.constructor,i=r._$Eh.get(e);if(i!==void 0&&this._$Em!==i){let a=r.getPropertyOptions(i),n=typeof a.converter=="function"?{fromAttribute:a.converter}:a.converter?.fromAttribute!==void 0?a.converter:$e;this._$Em=i;let c=n.fromAttribute(t,a.type);this[i]=c??this._$Ej?.get(i)??c,this._$Em=null}}requestUpdate(e,t,r,i=!1,a){if(e!==void 0){let n=this.constructor;if(i===!1&&(a=this[e]),r??=n.getPropertyOptions(e),!((r.hasChanged??Zr)(a,t)||r.useDefault&&r.reflect&&a===this._$Ej?.get(e)&&!this.hasAttribute(n._$Eu(e,r))))return;this.C(e,t,r)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:r,reflect:i,wrapped:a},n){r&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,n??t??this[e]),a!==!0||n!==void 0)||(this._$AL.has(e)||(this.hasUpdated||r||(t=void 0),this._$AL.set(e,t)),i===!0&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[i,a]of this._$Ep)this[i]=a;this._$Ep=void 0}let r=this.constructor.elementProperties;if(r.size>0)for(let[i,a]of r){let{wrapped:n}=a,c=this[i];n!==!0||this._$AL.has(i)||c===void 0||this.C(i,void 0,a,c)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(r=>r.hostUpdate?.()),this.update(t)):this._$EM()}catch(r){throw e=!1,this._$EM(),r}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(e){}firstUpdated(e){}};ve.elementStyles=[],ve.shadowRootOptions={mode:"open"},ve[wr("elementProperties")]=new Map,ve[wr("finalized")]=new Map,bn?.({ReactiveElement:ve}),(Yr.reactiveElementVersions??=[]).push("2.1.2");var Oo=globalThis,Se=class extends ve{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Ei(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return yt}};Se._$litElement$=!0,Se.finalized=!0,Oo.litElementHydrateSupport?.({LitElement:Se});var vn=Oo.litElementPolyfillSupport;vn?.({LitElement:Se});(Oo.litElementVersions??=[]).push("4.2.2");var Io=new Set,or=new Map,Ne,Do="ltr",Fo="en",Ri=typeof MutationObserver<"u"&&typeof document<"u"&&typeof document.documentElement<"u";if(Ri){let o=new MutationObserver(Oi);Do=document.documentElement.dir||"ltr",Fo=document.documentElement.lang||navigator.language,o.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]})}function _r(...o){o.map(e=>{let t=e.$code.toLowerCase();or.has(t)?or.set(t,Object.assign(Object.assign({},or.get(t)),e)):or.set(t,e),Ne||(Ne=e)}),Oi()}function Oi(){Ri&&(Do=document.documentElement.dir||"ltr",Fo=document.documentElement.lang||navigator.language),[...Io.keys()].map(o=>{typeof o.requestUpdate=="function"&&o.requestUpdate()})}var Qr=class{constructor(e){this.host=e,this.host.addController(this)}hostConnected(){Io.add(this.host)}hostDisconnected(){Io.delete(this.host)}dir(){return`${this.host.dir||Do}`.toLowerCase()}lang(){return`${this.host.lang||Fo}`.toLowerCase()}getTranslationData(e){var t,r;let i=new Intl.Locale(e.replace(/_/g,"-")),a=i?.language.toLowerCase(),n=(r=(t=i?.region)===null||t===void 0?void 0:t.toLowerCase())!==null&&r!==void 0?r:"",c=or.get(`${a}-${n}`),d=or.get(a);return{locale:i,language:a,region:n,primary:c,secondary:d}}exists(e,t){var r;let{primary:i,secondary:a}=this.getTranslationData((r=t.lang)!==null&&r!==void 0?r:this.lang());return t=Object.assign({includeFallback:!1},t),!!(i&&i[e]||a&&a[e]||t.includeFallback&&Ne&&Ne[e])}term(e,...t){let{primary:r,secondary:i}=this.getTranslationData(this.lang()),a;if(r&&r[e])a=r[e];else if(i&&i[e])a=i[e];else if(Ne&&Ne[e])a=Ne[e];else return console.error(`No translation found for: ${String(e)}`),String(e);return typeof a=="function"?a(...t):a}date(e,t){return e=new Date(e),new Intl.DateTimeFormat(this.lang(),t).format(e)}number(e,t){return e=Number(e),isNaN(e)?"":new Intl.NumberFormat(this.lang(),t).format(e)}relativeTime(e,t,r){return new Intl.RelativeTimeFormat(this.lang(),r).format(e,t)}};var Ii={$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copied:"Copied",copy:"Copy",currentValue:"Current value",error:"Error",goToSlide:(o,e)=>`Go to slide ${o} of ${e}`,hidePassword:"Hide password",loading:"Loading",nextSlide:"Next slide",numOptionsSelected:o=>o===0?"No options selected":o===1?"1 option selected":`${o} options selected`,previousSlide:"Previous slide",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:o=>`Slide ${o}`,toggleColorFormat:"Toggle color format"};_r(Ii);var Di=Ii;var L=class extends Qr{static{_r(Di)}};var yn={attribute:!0,type:String,converter:$e,reflect:!1,hasChanged:Zr},xn=(o=yn,e,t)=>{let{kind:r,metadata:i}=t,a=globalThis.litPropertyMetadata.get(i);if(a===void 0&&globalThis.litPropertyMetadata.set(i,a=new Map),r==="setter"&&((o=Object.create(o)).wrapped=!0),a.set(t.name,o),r==="accessor"){let{name:n}=t;return{set(c){let d=e.get.call(this);e.set.call(this,c),this.requestUpdate(n,d,o,!0,c)},init(c){return c!==void 0&&this.C(n,void 0,o,c),c}}}if(r==="setter"){let{name:n}=t;return function(c){let d=this[n];e.call(this,c),this.requestUpdate(n,d,o,!0,c)}}throw Error("Unsupported decorator location: "+r)};function l(o){return(e,t)=>typeof t=="object"?xn(o,e,t):((r,i,a)=>{let n=i.hasOwnProperty(a);return i.constructor.createProperty(a,r),n?Object.getOwnPropertyDescriptor(i,a):void 0})(o,e,t)}function S(o){return l({...o,state:!0,attribute:!1})}function de(o){return(e,t)=>{let r=typeof e=="function"?e:e[t];Object.assign(r,o)}}var Me=(o,e,t)=>(t.configurable=!0,t.enumerable=!0,Reflect.decorate&&typeof e!="object"&&Object.defineProperty(o,e,t),t);function k(o,e){return(t,r,i)=>{let a=n=>n.renderRoot?.querySelector(o)??null;if(e){let{get:n,set:c}=typeof r=="object"?t:i??(()=>{let d=Symbol();return{get(){return this[d]},set(u){this[d]=u}}})();return Me(t,r,{get(){let d=n.call(this);return d===void 0&&(d=a(this),(d!==null||this.hasUpdated)&&c.call(this,d)),d}})}return Me(t,r,{get(){return a(this)}})}}function Fi(o){return(e,t)=>Me(e,t,{async get(){return await this.updateComplete,this.renderRoot?.querySelector(o)??null}})}function rt(o,e){return new Promise(t=>{function r(i){i.target===o&&(o.removeEventListener(e,r),t())}o.addEventListener(e,r)})}function v(o,e){let t={waitUntilFirstUpdate:!1,...e};return(r,i)=>{let{update:a}=r,n=Array.isArray(o)?o:[o];r.update=function(c){n.forEach(d=>{let u=d;if(c.has(u)){let p=c.get(u),h=this[u];p!==h&&(!t.waitUntilFirstUpdate||this.hasUpdated)&&this[i](p,h)}}),a.call(this,c)}}}var C=_`
  :host {
    box-sizing: border-box;
  }

  :host *,
  :host *::before,
  :host *::after {
    box-sizing: inherit;
  }

  [hidden] {
    display: none !important;
  }
`;var y=class extends Se{constructor(){super();this.#t=!1;this.initialReflectedProperties=new Map;Object.entries(this.constructor.dependencies).forEach(([t,r])=>{this.constructor.define(t,r)})}emit(t,r){let i=new CustomEvent(t,{bubbles:!0,cancelable:!1,composed:!0,detail:{},...r});return this.dispatchEvent(i),i}static{this.version="2.20.1"}static define(t,r=this,i={}){let a=customElements.get(t);if(!a){try{customElements.define(t,r,i)}catch{customElements.define(t,class extends r{},i)}return}let n=" (unknown version)",c=n;"version"in r&&r.version&&(n=" v"+r.version),"version"in a&&a.version&&(c=" v"+a.version),!(n&&c&&n===c)&&console.warn(`Attempted to register <${t}>${n}, but <${t}>${c} has already been registered.`)}static{this.dependencies={}}#t;attributeChangedCallback(t,r,i){this.#t||(this.constructor.elementProperties.forEach((a,n)=>{a.reflect&&this[n]!=null&&this.initialReflectedProperties.set(n,this[n])}),this.#t=!0),super.attributeChangedCallback(t,r,i)}willUpdate(t){super.willUpdate(t),this.initialReflectedProperties.forEach((r,i)=>{t.has(i)&&this[i]==null&&(this[i]=r)})}};s([l()],y.prototype,"dir",2),s([l()],y.prototype,"lang",2);var Vi=Symbol.for(""),wn=o=>{if(o?.r===Vi)return o?._$litStatic$};var ir=(o,...e)=>({_$litStatic$:e.reduce((t,r,i)=>t+(a=>{if(a._$litStatic$!==void 0)return a._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${a}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(r)+o[i+1],o[0]),r:Vi}),Pi=new Map,Po=o=>(e,...t)=>{let r=t.length,i,a,n=[],c=[],d,u=0,p=!1;for(;u<r;){for(d=e[u];u<r&&(a=t[u],(i=wn(a))!==void 0);)d+=i+e[++u],p=!0;u!==r&&c.push(a),n.push(d),u++}if(u===r&&n.push(e[r]),p){let h=n.join("$$lit$$");(e=Pi.get(h))===void 0&&(n.raw=n,Pi.set(h,e=n)),t=c}return o(e,...t)},ze=Po(g),Ph=Po(xi),Vh=Po(wi);var z=o=>o??Z;var Vo="";function Ni(o){Vo=o}function Bi(o=""){if(!Vo){let e=[...document.getElementsByTagName("script")],t=e.find(r=>r.hasAttribute("data-shoelace"));if(t)Ni(t.getAttribute("data-shoelace"));else{let r=e.find(a=>/shoelace(\.min)?\.js($|\?)/.test(a.src)||/shoelace-autoloader(\.min)?\.js($|\?)/.test(a.src)),i="";r&&(i=r.getAttribute("src")),Ni(i.split("/").slice(0,-1).join("/"))}}return Vo.replace(/\/$/,"")+(o?`/${o.replace(/^\//,"")}`:"")}var _n={name:"default",resolver:o=>Bi(`assets/icons/${o}.svg`)},Ui=_n;var qi={caret:`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
  `,check:`
    <svg part="checked-icon" class="checkbox__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
        <g stroke="currentColor">
          <g transform="translate(3.428571, 3.428571)">
            <path d="M0,5.71428571 L3.42857143,9.14285714"></path>
            <path d="M9.14285714,0 L3.42857143,9.14285714"></path>
          </g>
        </g>
      </g>
    </svg>
  `,"chevron-down":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
    </svg>
  `,"chevron-left":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
    </svg>
  `,"chevron-right":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
    </svg>
  `,copy:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-copy" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V2Zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H6ZM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1H2Z"/>
    </svg>
  `,eye:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
      <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
      <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
    </svg>
  `,"eye-slash":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-slash" viewBox="0 0 16 16">
      <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z"/>
      <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z"/>
      <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z"/>
    </svg>
  `,eyedropper:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eyedropper" viewBox="0 0 16 16">
      <path d="M13.354.646a1.207 1.207 0 0 0-1.708 0L8.5 3.793l-.646-.647a.5.5 0 1 0-.708.708L8.293 5l-7.147 7.146A.5.5 0 0 0 1 12.5v1.793l-.854.853a.5.5 0 1 0 .708.707L1.707 15H3.5a.5.5 0 0 0 .354-.146L11 7.707l1.146 1.147a.5.5 0 0 0 .708-.708l-.647-.646 3.147-3.146a1.207 1.207 0 0 0 0-1.708l-2-2zM2 12.707l7-7L10.293 7l-7 7H2v-1.293z"></path>
    </svg>
  `,"grip-vertical":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-grip-vertical" viewBox="0 0 16 16">
      <path d="M7 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path>
    </svg>
  `,indeterminate:`
    <svg part="indeterminate-icon" class="checkbox__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
        <g stroke="currentColor" stroke-width="2">
          <g transform="translate(2.285714, 6.857143)">
            <path d="M10.2857143,1.14285714 L1.14285714,1.14285714"></path>
          </g>
        </g>
      </g>
    </svg>
  `,"person-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
      <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
    </svg>
  `,"play-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">
      <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"></path>
    </svg>
  `,"pause-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pause-fill" viewBox="0 0 16 16">
      <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"></path>
    </svg>
  `,radio:`
    <svg part="checked-icon" class="radio__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g fill="currentColor">
          <circle cx="8" cy="8" r="3.42857143"></circle>
        </g>
      </g>
    </svg>
  `,"star-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
    </svg>
  `,"x-lg":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
      <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
    </svg>
  `,"x-circle-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"></path>
    </svg>
  `},kn={name:"system",resolver:o=>o in qi?`data:image/svg+xml,${encodeURIComponent(qi[o])}`:""},Gi=kn;var Jr=[Ui,Gi],to=[];function Wi(o){to.push(o)}function ji(o){to=to.filter(e=>e!==o)}function No(o){return Jr.find(e=>e.name===o)}function Cn(o,e){Ki(o),Jr.push({name:o,resolver:e.resolver,mutator:e.mutator,spriteSheet:e.spriteSheet}),to.forEach(t=>{t.library===o&&t.setIcon()})}function Ki(o){Jr=Jr.filter(e=>e.name!==o)}var{I:rp}=Ci;var Xi=(o,e)=>e===void 0?o?._$litType$!==void 0:o?._$litType$===e;var eo=o=>o.strings===void 0;var En={},Yi=(o,e=En)=>o._$AH=e;var Zi=_`
  :host {
    display: inline-block;
    width: 1em;
    height: 1em;
    box-sizing: content-box !important;
  }

  svg {
    display: block;
    height: 100%;
    width: 100%;
  }
`;var kr=Symbol(),ro=Symbol(),Bo,Uo=new Map,D=class extends y{constructor(){super(...arguments);this.initialRender=!1;this.svg=null;this.label="";this.library="default"}static{this.styles=[C,Zi]}async resolveIcon(t,r){let i;if(r?.spriteSheet)return this.svg=g`<svg part="svg">
        <use part="use" href="${t}"></use>
      </svg>`,this.svg;try{if(i=await fetch(t,{mode:"cors"}),!i.ok)return i.status===410?kr:ro}catch{return ro}try{let a=document.createElement("div");a.innerHTML=await i.text();let n=a.firstElementChild;if(n?.tagName?.toLowerCase()!=="svg")return kr;Bo||(Bo=new DOMParser);let d=Bo.parseFromString(n.outerHTML,"text/html").body.querySelector("svg");return d?(d.part.add("svg"),document.adoptNode(d)):kr}catch{return kr}}connectedCallback(){super.connectedCallback(),Wi(this)}firstUpdated(){this.initialRender=!0,this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),ji(this)}getIconSource(){let t=No(this.library);return this.name&&t?{url:t.resolver(this.name),fromLibrary:!0}:{url:this.src,fromLibrary:!1}}handleLabelChange(){typeof this.label=="string"&&this.label.length>0?(this.setAttribute("role","img"),this.setAttribute("aria-label",this.label),this.removeAttribute("aria-hidden")):(this.removeAttribute("role"),this.removeAttribute("aria-label"),this.setAttribute("aria-hidden","true"))}async setIcon(){let{url:t,fromLibrary:r}=this.getIconSource(),i=r?No(this.library):void 0;if(!t){this.svg=null;return}let a=Uo.get(t);if(a||(a=this.resolveIcon(t,i),Uo.set(t,a)),!this.initialRender)return;let n=await a;if(n===ro&&Uo.delete(t),t===this.getIconSource().url){if(Xi(n)){if(this.svg=n,i){await this.updateComplete;let c=this.shadowRoot.querySelector("[part='svg']");typeof i.mutator=="function"&&c&&i.mutator(c)}return}switch(n){case ro:case kr:this.svg=null,this.emit("sl-error");break;default:this.svg=n.cloneNode(!0),i?.mutator?.(this.svg),this.emit("sl-load")}}}render(){return this.svg}};s([S()],D.prototype,"svg",2),s([l({reflect:!0})],D.prototype,"name",2),s([l()],D.prototype,"src",2),s([l()],D.prototype,"label",2),s([l({reflect:!0})],D.prototype,"library",2),s([v("label")],D.prototype,"handleLabelChange",1),s([v(["name","src","library"])],D.prototype,"setIcon",1);var Qi=_`
  :host {
    display: inline-block;
    color: var(--sl-color-neutral-600);
  }

  .icon-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    background: none;
    border: none;
    border-radius: var(--sl-border-radius-medium);
    font-size: inherit;
    color: inherit;
    padding: var(--sl-spacing-x-small);
    cursor: pointer;
    transition: var(--sl-transition-x-fast) color;
    -webkit-appearance: none;
  }

  .icon-button:hover:not(.icon-button--disabled),
  .icon-button:focus-visible:not(.icon-button--disabled) {
    color: var(--sl-color-primary-600);
  }

  .icon-button:active:not(.icon-button--disabled) {
    color: var(--sl-color-primary-700);
  }

  .icon-button:focus {
    outline: none;
  }

  .icon-button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .icon-button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .icon-button__icon {
    pointer-events: none;
  }
`;var Q=class extends y{constructor(){super(...arguments);this.hasFocus=!1;this.label="";this.disabled=!1}static{this.styles=[C,Qi]}static{this.dependencies={"sl-icon":D}}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(t){this.disabled&&(t.preventDefault(),t.stopPropagation())}click(){this.button.click()}focus(t){this.button.focus(t)}blur(){this.button.blur()}render(){let t=!!this.href,r=t?ir`a`:ir`button`;return ze`
      <${r}
        part="base"
        class=${$({"icon-button":!0,"icon-button--disabled":!t&&this.disabled,"icon-button--focused":this.hasFocus})}
        ?disabled=${z(t?void 0:this.disabled)}
        type=${z(t?void 0:"button")}
        href=${z(t?this.href:void 0)}
        target=${z(t?this.target:void 0)}
        download=${z(t?this.download:void 0)}
        rel=${z(t&&this.target?"noreferrer noopener":void 0)}
        role=${z(t?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        aria-label="${this.label}"
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @click=${this.handleClick}
      >
        <sl-icon
          class="icon-button__icon"
          name=${z(this.name)}
          library=${z(this.library)}
          src=${z(this.src)}
          aria-hidden="true"
        ></sl-icon>
      </${r}>
    `}};s([k(".icon-button")],Q.prototype,"button",2),s([S()],Q.prototype,"hasFocus",2),s([l()],Q.prototype,"name",2),s([l()],Q.prototype,"library",2),s([l()],Q.prototype,"src",2),s([l()],Q.prototype,"href",2),s([l()],Q.prototype,"target",2),s([l()],Q.prototype,"download",2),s([l()],Q.prototype,"label",2),s([l({type:Boolean,reflect:!0})],Q.prototype,"disabled",2);var Ji=_`
  :host {
    display: contents;

    /* For better DX, we'll reset the margin here so the base part can inherit it */
    margin: 0;
  }

  .alert {
    position: relative;
    display: flex;
    align-items: stretch;
    background-color: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-top-width: calc(var(--sl-panel-border-width) * 3);
    border-radius: var(--sl-border-radius-medium);
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-normal);
    line-height: 1.6;
    color: var(--sl-color-neutral-700);
    margin: inherit;
    overflow: hidden;
  }

  .alert:not(.alert--has-icon) .alert__icon,
  .alert:not(.alert--closable) .alert__close-button {
    display: none;
  }

  .alert__icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-large);
    padding-inline-start: var(--sl-spacing-large);
  }

  .alert--has-countdown {
    border-bottom: none;
  }

  .alert--primary {
    border-top-color: var(--sl-color-primary-600);
  }

  .alert--primary .alert__icon {
    color: var(--sl-color-primary-600);
  }

  .alert--success {
    border-top-color: var(--sl-color-success-600);
  }

  .alert--success .alert__icon {
    color: var(--sl-color-success-600);
  }

  .alert--neutral {
    border-top-color: var(--sl-color-neutral-600);
  }

  .alert--neutral .alert__icon {
    color: var(--sl-color-neutral-600);
  }

  .alert--warning {
    border-top-color: var(--sl-color-warning-600);
  }

  .alert--warning .alert__icon {
    color: var(--sl-color-warning-600);
  }

  .alert--danger {
    border-top-color: var(--sl-color-danger-600);
  }

  .alert--danger .alert__icon {
    color: var(--sl-color-danger-600);
  }

  .alert__message {
    flex: 1 1 auto;
    display: block;
    padding: var(--sl-spacing-large);
    overflow: hidden;
  }

  .alert__close-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-medium);
    margin-inline-end: var(--sl-spacing-medium);
    align-self: center;
  }

  .alert__countdown {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: calc(var(--sl-panel-border-width) * 3);
    background-color: var(--sl-panel-border-color);
    display: flex;
  }

  .alert__countdown--ltr {
    justify-content: flex-end;
  }

  .alert__countdown .alert__countdown-elapsed {
    height: 100%;
    width: 0;
  }

  .alert--primary .alert__countdown-elapsed {
    background-color: var(--sl-color-primary-600);
  }

  .alert--success .alert__countdown-elapsed {
    background-color: var(--sl-color-success-600);
  }

  .alert--neutral .alert__countdown-elapsed {
    background-color: var(--sl-color-neutral-600);
  }

  .alert--warning .alert__countdown-elapsed {
    background-color: var(--sl-color-warning-600);
  }

  .alert--danger .alert__countdown-elapsed {
    background-color: var(--sl-color-danger-600);
  }

  .alert__timer {
    display: none;
  }
`;var xt=class xt extends y{constructor(){super(...arguments);this.hasSlotController=new K(this,"icon","suffix");this.localize=new L(this);this.open=!1;this.closable=!1;this.variant="primary";this.duration=1/0;this.remainingTime=this.duration}static{this.styles=[C,Ji]}static{this.dependencies={"sl-icon-button":Q}}static get toastStack(){return this.currentToastStack||(this.currentToastStack=Object.assign(document.createElement("div"),{className:"sl-toast-stack"})),this.currentToastStack}firstUpdated(){this.base.hidden=!this.open}restartAutoHide(){this.handleCountdownChange(),clearTimeout(this.autoHideTimeout),clearInterval(this.remainingTimeInterval),this.open&&this.duration<1/0&&(this.autoHideTimeout=window.setTimeout(()=>this.hide(),this.duration),this.remainingTime=this.duration,this.remainingTimeInterval=window.setInterval(()=>{this.remainingTime-=100},100))}pauseAutoHide(){this.countdownAnimation?.pause(),clearTimeout(this.autoHideTimeout),clearInterval(this.remainingTimeInterval)}resumeAutoHide(){this.duration<1/0&&(this.autoHideTimeout=window.setTimeout(()=>this.hide(),this.remainingTime),this.remainingTimeInterval=window.setInterval(()=>{this.remainingTime-=100},100),this.countdownAnimation?.play())}handleCountdownChange(){if(this.open&&this.duration<1/0&&this.countdown){let{countdownElement:t}=this,r="100%",i="0";this.countdownAnimation=t.animate([{width:r},{width:i}],{duration:this.duration,easing:"linear"})}}handleCloseClick(){this.hide()}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.duration<1/0&&this.restartAutoHide(),await Y(this.base),this.base.hidden=!1;let{keyframes:t,options:r}=j(this,"alert.show",{dir:this.localize.dir()});await X(this.base,t,r),this.emit("sl-after-show")}else{er(this),this.emit("sl-hide"),clearTimeout(this.autoHideTimeout),clearInterval(this.remainingTimeInterval),await Y(this.base);let{keyframes:t,options:r}=j(this,"alert.hide",{dir:this.localize.dir()});await X(this.base,t,r),this.base.hidden=!0,this.emit("sl-after-hide")}}handleDurationChange(){this.restartAutoHide()}async show(){if(!this.open)return this.open=!0,rt(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,rt(this,"sl-after-hide")}async toast(){return new Promise(t=>{this.handleCountdownChange(),xt.toastStack.parentElement===null&&document.body.append(xt.toastStack),xt.toastStack.appendChild(this),requestAnimationFrame(()=>{this.clientWidth,this.show()}),this.addEventListener("sl-after-hide",()=>{xt.toastStack.removeChild(this),t(),xt.toastStack.querySelector("sl-alert")===null&&xt.toastStack.remove()},{once:!0})})}render(){return g`
      <div
        part="base"
        class=${$({alert:!0,"alert--open":this.open,"alert--closable":this.closable,"alert--has-countdown":!!this.countdown,"alert--has-icon":this.hasSlotController.test("icon"),"alert--primary":this.variant==="primary","alert--success":this.variant==="success","alert--neutral":this.variant==="neutral","alert--warning":this.variant==="warning","alert--danger":this.variant==="danger"})}
        role="alert"
        aria-hidden=${this.open?"false":"true"}
        @mouseenter=${this.pauseAutoHide}
        @mouseleave=${this.resumeAutoHide}
      >
        <div part="icon" class="alert__icon">
          <slot name="icon"></slot>
        </div>

        <div part="message" class="alert__message" aria-live="polite">
          <slot></slot>
        </div>

        ${this.closable?g`
              <sl-icon-button
                part="close-button"
                exportparts="base:close-button__base"
                class="alert__close-button"
                name="x-lg"
                library="system"
                label=${this.localize.term("close")}
                @click=${this.handleCloseClick}
              ></sl-icon-button>
            `:""}

        <div role="timer" class="alert__timer">${this.remainingTime}</div>

        ${this.countdown?g`
              <div
                class=${$({alert__countdown:!0,"alert__countdown--ltr":this.countdown==="ltr"})}
              >
                <div class="alert__countdown-elapsed"></div>
              </div>
            `:""}
      </div>
    `}};s([k('[part~="base"]')],xt.prototype,"base",2),s([k(".alert__countdown-elapsed")],xt.prototype,"countdownElement",2),s([l({type:Boolean,reflect:!0})],xt.prototype,"open",2),s([l({type:Boolean,reflect:!0})],xt.prototype,"closable",2),s([l({reflect:!0})],xt.prototype,"variant",2),s([l({type:Number})],xt.prototype,"duration",2),s([l({type:String,reflect:!0})],xt.prototype,"countdown",2),s([S()],xt.prototype,"remainingTime",2),s([v("open",{waitUntilFirstUpdate:!0})],xt.prototype,"handleOpenChange",1),s([v("duration")],xt.prototype,"handleDurationChange",1);var sr=xt;V("alert.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:250,easing:"ease"}});V("alert.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:250,easing:"ease"}});var Tn=sr;sr.define("sl-alert");var ts=_`
  :host {
    --control-box-size: 3rem;
    --icon-size: calc(var(--control-box-size) * 0.625);

    display: inline-flex;
    position: relative;
    cursor: pointer;
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
  }

  img[aria-hidden='true'] {
    display: none;
  }

  .animated-image__control-box {
    display: flex;
    position: absolute;
    align-items: center;
    justify-content: center;
    top: calc(50% - var(--control-box-size) / 2);
    right: calc(50% - var(--control-box-size) / 2);
    width: var(--control-box-size);
    height: var(--control-box-size);
    font-size: var(--icon-size);
    background: none;
    border: solid 2px currentColor;
    background-color: rgb(0 0 0 /50%);
    border-radius: var(--sl-border-radius-circle);
    color: white;
    pointer-events: none;
    transition: var(--sl-transition-fast) opacity;
  }

  :host([play]:hover) .animated-image__control-box {
    opacity: 1;
  }

  :host([play]:not(:hover)) .animated-image__control-box {
    opacity: 0;
  }

  :host([play]) slot[name='play-icon'],
  :host(:not([play])) slot[name='pause-icon'] {
    display: none;
  }
`;var Lt=class extends y{constructor(){super(...arguments);this.isLoaded=!1}static{this.styles=[C,ts]}static{this.dependencies={"sl-icon":D}}handleClick(){this.play=!this.play}handleLoad(){let t=document.createElement("canvas"),{width:r,height:i}=this.animatedImage;t.width=r,t.height=i,t.getContext("2d").drawImage(this.animatedImage,0,0,r,i),this.frozenFrame=t.toDataURL("image/gif"),this.isLoaded||(this.emit("sl-load"),this.isLoaded=!0)}handleError(){this.emit("sl-error")}handlePlayChange(){this.play&&(this.animatedImage.src="",this.animatedImage.src=this.src)}handleSrcChange(){this.isLoaded=!1}render(){return g`
      <div class="animated-image">
        <img
          class="animated-image__animated"
          src=${this.src}
          alt=${this.alt}
          crossorigin="anonymous"
          aria-hidden=${this.play?"false":"true"}
          @click=${this.handleClick}
          @load=${this.handleLoad}
          @error=${this.handleError}
        />

        ${this.isLoaded?g`
              <img
                class="animated-image__frozen"
                src=${this.frozenFrame}
                alt=${this.alt}
                aria-hidden=${this.play?"true":"false"}
                @click=${this.handleClick}
              />

              <div part="control-box" class="animated-image__control-box">
                <slot name="play-icon"><sl-icon name="play-fill" library="system"></sl-icon></slot>
                <slot name="pause-icon"><sl-icon name="pause-fill" library="system"></sl-icon></slot>
              </div>
            `:""}
      </div>
    `}};s([k(".animated-image__animated")],Lt.prototype,"animatedImage",2),s([S()],Lt.prototype,"frozenFrame",2),s([S()],Lt.prototype,"isLoaded",2),s([l()],Lt.prototype,"src",2),s([l()],Lt.prototype,"alt",2),s([l({type:Boolean,reflect:!0})],Lt.prototype,"play",2),s([v("play",{waitUntilFirstUpdate:!0})],Lt.prototype,"handlePlayChange",1),s([v("src")],Lt.prototype,"handleSrcChange",1);var $n=Lt;Lt.define("sl-animated-image");var ar={};sn(ar,{backInDown:()=>Nn,backInLeft:()=>Bn,backInRight:()=>Un,backInUp:()=>qn,backOutDown:()=>Gn,backOutLeft:()=>Wn,backOutRight:()=>jn,backOutUp:()=>Kn,bounce:()=>Sn,bounceIn:()=>Xn,bounceInDown:()=>Yn,bounceInLeft:()=>Zn,bounceInRight:()=>Qn,bounceInUp:()=>Jn,bounceOut:()=>tl,bounceOutDown:()=>el,bounceOutLeft:()=>rl,bounceOutRight:()=>ol,bounceOutUp:()=>il,easings:()=>oo,fadeIn:()=>sl,fadeInBottomLeft:()=>al,fadeInBottomRight:()=>nl,fadeInDown:()=>ll,fadeInDownBig:()=>cl,fadeInLeft:()=>dl,fadeInLeftBig:()=>ul,fadeInRight:()=>hl,fadeInRightBig:()=>pl,fadeInTopLeft:()=>fl,fadeInTopRight:()=>ml,fadeInUp:()=>gl,fadeInUpBig:()=>bl,fadeOut:()=>vl,fadeOutBottomLeft:()=>yl,fadeOutBottomRight:()=>xl,fadeOutDown:()=>wl,fadeOutDownBig:()=>_l,fadeOutLeft:()=>kl,fadeOutLeftBig:()=>Cl,fadeOutRight:()=>El,fadeOutRightBig:()=>Tl,fadeOutTopLeft:()=>$l,fadeOutTopRight:()=>Sl,fadeOutUp:()=>Ml,fadeOutUpBig:()=>zl,flash:()=>Mn,flip:()=>Al,flipInX:()=>Ll,flipInY:()=>Hl,flipOutX:()=>Rl,flipOutY:()=>Ol,headShake:()=>zn,heartBeat:()=>An,hinge:()=>ic,jackInTheBox:()=>sc,jello:()=>Ln,lightSpeedInLeft:()=>Il,lightSpeedInRight:()=>Dl,lightSpeedOutLeft:()=>Fl,lightSpeedOutRight:()=>Pl,pulse:()=>Hn,rollIn:()=>ac,rollOut:()=>nc,rotateIn:()=>Vl,rotateInDownLeft:()=>Nl,rotateInDownRight:()=>Bl,rotateInUpLeft:()=>Ul,rotateInUpRight:()=>ql,rotateOut:()=>Gl,rotateOutDownLeft:()=>Wl,rotateOutDownRight:()=>jl,rotateOutUpLeft:()=>Kl,rotateOutUpRight:()=>Xl,rubberBand:()=>Rn,shake:()=>On,shakeX:()=>In,shakeY:()=>Dn,slideInDown:()=>Yl,slideInLeft:()=>Zl,slideInRight:()=>Ql,slideInUp:()=>Jl,slideOutDown:()=>tc,slideOutLeft:()=>ec,slideOutRight:()=>rc,slideOutUp:()=>oc,swing:()=>Fn,tada:()=>Pn,wobble:()=>Vn,zoomIn:()=>lc,zoomInDown:()=>cc,zoomInLeft:()=>dc,zoomInRight:()=>uc,zoomInUp:()=>hc,zoomOut:()=>pc,zoomOutDown:()=>fc,zoomOutLeft:()=>mc,zoomOutRight:()=>gc,zoomOutUp:()=>bc});var Sn=[{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"},{offset:.2,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"},{offset:.4,easing:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",transform:"translate3d(0, -30px, 0) scaleY(1.1)"},{offset:.43,easing:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",transform:"translate3d(0, -30px, 0) scaleY(1.1)"},{offset:.53,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"},{offset:.7,easing:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",transform:"translate3d(0, -15px, 0) scaleY(1.05)"},{offset:.8,"transition-timing-function":"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0) scaleY(0.95)"},{offset:.9,transform:"translate3d(0, -4px, 0) scaleY(1.02)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"}];var Mn=[{offset:0,opacity:"1"},{offset:.25,opacity:"0"},{offset:.5,opacity:"1"},{offset:.75,opacity:"0"},{offset:1,opacity:"1"}];var zn=[{offset:0,transform:"translateX(0)"},{offset:.065,transform:"translateX(-6px) rotateY(-9deg)"},{offset:.185,transform:"translateX(5px) rotateY(7deg)"},{offset:.315,transform:"translateX(-3px) rotateY(-5deg)"},{offset:.435,transform:"translateX(2px) rotateY(3deg)"},{offset:.5,transform:"translateX(0)"}];var An=[{offset:0,transform:"scale(1)"},{offset:.14,transform:"scale(1.3)"},{offset:.28,transform:"scale(1)"},{offset:.42,transform:"scale(1.3)"},{offset:.7,transform:"scale(1)"}];var Ln=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.111,transform:"translate3d(0, 0, 0)"},{offset:.222,transform:"skewX(-12.5deg) skewY(-12.5deg)"},{offset:.33299999999999996,transform:"skewX(6.25deg) skewY(6.25deg)"},{offset:.444,transform:"skewX(-3.125deg) skewY(-3.125deg)"},{offset:.555,transform:"skewX(1.5625deg) skewY(1.5625deg)"},{offset:.6659999999999999,transform:"skewX(-0.78125deg) skewY(-0.78125deg)"},{offset:.777,transform:"skewX(0.390625deg) skewY(0.390625deg)"},{offset:.888,transform:"skewX(-0.1953125deg) skewY(-0.1953125deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}];var Hn=[{offset:0,transform:"scale3d(1, 1, 1)"},{offset:.5,transform:"scale3d(1.05, 1.05, 1.05)"},{offset:1,transform:"scale3d(1, 1, 1)"}];var Rn=[{offset:0,transform:"scale3d(1, 1, 1)"},{offset:.3,transform:"scale3d(1.25, 0.75, 1)"},{offset:.4,transform:"scale3d(0.75, 1.25, 1)"},{offset:.5,transform:"scale3d(1.15, 0.85, 1)"},{offset:.65,transform:"scale3d(0.95, 1.05, 1)"},{offset:.75,transform:"scale3d(1.05, 0.95, 1)"},{offset:1,transform:"scale3d(1, 1, 1)"}];var On=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.1,transform:"translate3d(-10px, 0, 0)"},{offset:.2,transform:"translate3d(10px, 0, 0)"},{offset:.3,transform:"translate3d(-10px, 0, 0)"},{offset:.4,transform:"translate3d(10px, 0, 0)"},{offset:.5,transform:"translate3d(-10px, 0, 0)"},{offset:.6,transform:"translate3d(10px, 0, 0)"},{offset:.7,transform:"translate3d(-10px, 0, 0)"},{offset:.8,transform:"translate3d(10px, 0, 0)"},{offset:.9,transform:"translate3d(-10px, 0, 0)"},{offset:1,transform:"translate3d(0, 0, 0)"}];var In=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.1,transform:"translate3d(-10px, 0, 0)"},{offset:.2,transform:"translate3d(10px, 0, 0)"},{offset:.3,transform:"translate3d(-10px, 0, 0)"},{offset:.4,transform:"translate3d(10px, 0, 0)"},{offset:.5,transform:"translate3d(-10px, 0, 0)"},{offset:.6,transform:"translate3d(10px, 0, 0)"},{offset:.7,transform:"translate3d(-10px, 0, 0)"},{offset:.8,transform:"translate3d(10px, 0, 0)"},{offset:.9,transform:"translate3d(-10px, 0, 0)"},{offset:1,transform:"translate3d(0, 0, 0)"}];var Dn=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.1,transform:"translate3d(0, -10px, 0)"},{offset:.2,transform:"translate3d(0, 10px, 0)"},{offset:.3,transform:"translate3d(0, -10px, 0)"},{offset:.4,transform:"translate3d(0, 10px, 0)"},{offset:.5,transform:"translate3d(0, -10px, 0)"},{offset:.6,transform:"translate3d(0, 10px, 0)"},{offset:.7,transform:"translate3d(0, -10px, 0)"},{offset:.8,transform:"translate3d(0, 10px, 0)"},{offset:.9,transform:"translate3d(0, -10px, 0)"},{offset:1,transform:"translate3d(0, 0, 0)"}];var Fn=[{offset:.2,transform:"rotate3d(0, 0, 1, 15deg)"},{offset:.4,transform:"rotate3d(0, 0, 1, -10deg)"},{offset:.6,transform:"rotate3d(0, 0, 1, 5deg)"},{offset:.8,transform:"rotate3d(0, 0, 1, -5deg)"},{offset:1,transform:"rotate3d(0, 0, 1, 0deg)"}];var Pn=[{offset:0,transform:"scale3d(1, 1, 1)"},{offset:.1,transform:"scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)"},{offset:.2,transform:"scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)"},{offset:.3,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:.4,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)"},{offset:.5,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:.6,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)"},{offset:.7,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:.8,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)"},{offset:.9,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:1,transform:"scale3d(1, 1, 1)"}];var Vn=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.15,transform:"translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg)"},{offset:.3,transform:"translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg)"},{offset:.45,transform:"translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg)"},{offset:.6,transform:"translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg)"},{offset:.75,transform:"translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}];var Nn=[{offset:0,transform:"translateY(-1200px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}];var Bn=[{offset:0,transform:"translateX(-2000px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}];var Un=[{offset:0,transform:"translateX(2000px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}];var qn=[{offset:0,transform:"translateY(1200px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}];var Gn=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateY(700px) scale(0.7)",opacity:"0.7"}];var Wn=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateX(-2000px) scale(0.7)",opacity:"0.7"}];var jn=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateX(2000px) scale(0.7)",opacity:"0.7"}];var Kn=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateY(-700px) scale(0.7)",opacity:"0.7"}];var Xn=[{offset:0,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.2,transform:"scale3d(1.1, 1.1, 1.1)"},{offset:.2,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.4,transform:"scale3d(0.9, 0.9, 0.9)"},{offset:.4,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"scale3d(1.03, 1.03, 1.03)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.8,transform:"scale3d(0.97, 0.97, 0.97)"},{offset:.8,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,opacity:"1",transform:"scale3d(1, 1, 1)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}];var Yn=[{offset:0,opacity:"0",transform:"translate3d(0, -3000px, 0) scaleY(3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(0, 25px, 0) scaleY(0.9)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(0, -10px, 0) scaleY(0.95)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(0, 5px, 0) scaleY(0.985)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}];var Zn=[{offset:0,opacity:"0",transform:"translate3d(-3000px, 0, 0) scaleX(3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(25px, 0, 0) scaleX(1)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(-10px, 0, 0) scaleX(0.98)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(5px, 0, 0) scaleX(0.995)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}];var Qn=[{offset:0,opacity:"0",transform:"translate3d(3000px, 0, 0) scaleX(3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(-25px, 0, 0) scaleX(1)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(10px, 0, 0) scaleX(0.98)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(-5px, 0, 0) scaleX(0.995)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}];var Jn=[{offset:0,opacity:"0",transform:"translate3d(0, 3000px, 0) scaleY(5)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(0, -20px, 0) scaleY(0.9)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(0, 10px, 0) scaleY(0.95)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(0, -5px, 0) scaleY(0.985)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}];var tl=[{offset:.2,transform:"scale3d(0.9, 0.9, 0.9)"},{offset:.5,opacity:"1",transform:"scale3d(1.1, 1.1, 1.1)"},{offset:.55,opacity:"1",transform:"scale3d(1.1, 1.1, 1.1)"},{offset:1,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"}];var el=[{offset:.2,transform:"translate3d(0, 10px, 0) scaleY(0.985)"},{offset:.4,opacity:"1",transform:"translate3d(0, -20px, 0) scaleY(0.9)"},{offset:.45,opacity:"1",transform:"translate3d(0, -20px, 0) scaleY(0.9)"},{offset:1,opacity:"0",transform:"translate3d(0, 2000px, 0) scaleY(3)"}];var rl=[{offset:.2,opacity:"1",transform:"translate3d(20px, 0, 0) scaleX(0.9)"},{offset:1,opacity:"0",transform:"translate3d(-2000px, 0, 0) scaleX(2)"}];var ol=[{offset:.2,opacity:"1",transform:"translate3d(-20px, 0, 0) scaleX(0.9)"},{offset:1,opacity:"0",transform:"translate3d(2000px, 0, 0) scaleX(2)"}];var il=[{offset:.2,transform:"translate3d(0, -10px, 0) scaleY(0.985)"},{offset:.4,opacity:"1",transform:"translate3d(0, 20px, 0) scaleY(0.9)"},{offset:.45,opacity:"1",transform:"translate3d(0, 20px, 0) scaleY(0.9)"},{offset:1,opacity:"0",transform:"translate3d(0, -2000px, 0) scaleY(3)"}];var sl=[{offset:0,opacity:"0"},{offset:1,opacity:"1"}];var al=[{offset:0,opacity:"0",transform:"translate3d(-100%, 100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}];var nl=[{offset:0,opacity:"0",transform:"translate3d(100%, 100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}];var ll=[{offset:0,opacity:"0",transform:"translate3d(0, -100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}];var cl=[{offset:0,opacity:"0",transform:"translate3d(0, -2000px, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}];var dl=[{offset:0,opacity:"0",transform:"translate3d(-100%, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}];var ul=[{offset:0,opacity:"0",transform:"translate3d(-2000px, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}];var hl=[{offset:0,opacity:"0",transform:"translate3d(100%, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}];var pl=[{offset:0,opacity:"0",transform:"translate3d(2000px, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}];var fl=[{offset:0,opacity:"0",transform:"translate3d(-100%, -100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}];var ml=[{offset:0,opacity:"0",transform:"translate3d(100%, -100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}];var gl=[{offset:0,opacity:"0",transform:"translate3d(0, 100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}];var bl=[{offset:0,opacity:"0",transform:"translate3d(0, 2000px, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}];var vl=[{offset:0,opacity:"1"},{offset:1,opacity:"0"}];var yl=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(-100%, 100%, 0)"}];var xl=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(100%, 100%, 0)"}];var wl=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, 100%, 0)"}];var _l=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, 2000px, 0)"}];var kl=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(-100%, 0, 0)"}];var Cl=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(-2000px, 0, 0)"}];var El=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(100%, 0, 0)"}];var Tl=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(2000px, 0, 0)"}];var $l=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(-100%, -100%, 0)"}];var Sl=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(100%, -100%, 0)"}];var Ml=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, -100%, 0)"}];var zl=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, -2000px, 0)"}];var Al=[{offset:0,transform:"perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg)",easing:"ease-out"},{offset:.4,transform:`perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -190deg)`,easing:"ease-out"},{offset:.5,transform:`perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -170deg)`,easing:"ease-in"},{offset:.8,transform:`perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0)
      rotate3d(0, 1, 0, 0deg)`,easing:"ease-in"},{offset:1,transform:"perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg)",easing:"ease-in"}];var Ll=[{offset:0,transform:"perspective(400px) rotate3d(1, 0, 0, 90deg)",easing:"ease-in",opacity:"0"},{offset:.4,transform:"perspective(400px) rotate3d(1, 0, 0, -20deg)",easing:"ease-in"},{offset:.6,transform:"perspective(400px) rotate3d(1, 0, 0, 10deg)",opacity:"1"},{offset:.8,transform:"perspective(400px) rotate3d(1, 0, 0, -5deg)"},{offset:1,transform:"perspective(400px)"}];var Hl=[{offset:0,transform:"perspective(400px) rotate3d(0, 1, 0, 90deg)",easing:"ease-in",opacity:"0"},{offset:.4,transform:"perspective(400px) rotate3d(0, 1, 0, -20deg)",easing:"ease-in"},{offset:.6,transform:"perspective(400px) rotate3d(0, 1, 0, 10deg)",opacity:"1"},{offset:.8,transform:"perspective(400px) rotate3d(0, 1, 0, -5deg)"},{offset:1,transform:"perspective(400px)"}];var Rl=[{offset:0,transform:"perspective(400px)"},{offset:.3,transform:"perspective(400px) rotate3d(1, 0, 0, -20deg)",opacity:"1"},{offset:1,transform:"perspective(400px) rotate3d(1, 0, 0, 90deg)",opacity:"0"}];var Ol=[{offset:0,transform:"perspective(400px)"},{offset:.3,transform:"perspective(400px) rotate3d(0, 1, 0, -15deg)",opacity:"1"},{offset:1,transform:"perspective(400px) rotate3d(0, 1, 0, 90deg)",opacity:"0"}];var Il=[{offset:0,transform:"translate3d(-100%, 0, 0) skewX(30deg)",opacity:"0"},{offset:.6,transform:"skewX(-20deg)",opacity:"1"},{offset:.8,transform:"skewX(5deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}];var Dl=[{offset:0,transform:"translate3d(100%, 0, 0) skewX(-30deg)",opacity:"0"},{offset:.6,transform:"skewX(20deg)",opacity:"1"},{offset:.8,transform:"skewX(-5deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}];var Fl=[{offset:0,opacity:"1"},{offset:1,transform:"translate3d(-100%, 0, 0) skewX(-30deg)",opacity:"0"}];var Pl=[{offset:0,opacity:"1"},{offset:1,transform:"translate3d(100%, 0, 0) skewX(30deg)",opacity:"0"}];var Vl=[{offset:0,transform:"rotate3d(0, 0, 1, -200deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}];var Nl=[{offset:0,transform:"rotate3d(0, 0, 1, -45deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}];var Bl=[{offset:0,transform:"rotate3d(0, 0, 1, 45deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}];var Ul=[{offset:0,transform:"rotate3d(0, 0, 1, 45deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}];var ql=[{offset:0,transform:"rotate3d(0, 0, 1, -90deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}];var Gl=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, 200deg)",opacity:"0"}];var Wl=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, 45deg)",opacity:"0"}];var jl=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, -45deg)",opacity:"0"}];var Kl=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, -45deg)",opacity:"0"}];var Xl=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, 90deg)",opacity:"0"}];var Yl=[{offset:0,transform:"translate3d(0, -100%, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}];var Zl=[{offset:0,transform:"translate3d(-100%, 0, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}];var Ql=[{offset:0,transform:"translate3d(100%, 0, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}];var Jl=[{offset:0,transform:"translate3d(0, 100%, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}];var tc=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(0, 100%, 0)"}];var ec=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(-100%, 0, 0)"}];var rc=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(100%, 0, 0)"}];var oc=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(0, -100%, 0)"}];var ic=[{offset:0,easing:"ease-in-out"},{offset:.2,transform:"rotate3d(0, 0, 1, 80deg)",easing:"ease-in-out"},{offset:.4,transform:"rotate3d(0, 0, 1, 60deg)",easing:"ease-in-out",opacity:"1"},{offset:.6,transform:"rotate3d(0, 0, 1, 80deg)",easing:"ease-in-out"},{offset:.8,transform:"rotate3d(0, 0, 1, 60deg)",easing:"ease-in-out",opacity:"1"},{offset:1,transform:"translate3d(0, 700px, 0)",opacity:"0"}];var sc=[{offset:0,opacity:"0",transform:"scale(0.1) rotate(30deg)","transform-origin":"center bottom"},{offset:.5,transform:"rotate(-10deg)"},{offset:.7,transform:"rotate(3deg)"},{offset:1,opacity:"1",transform:"scale(1)"}];var ac=[{offset:0,opacity:"0",transform:"translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}];var nc=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg)"}];var lc=[{offset:0,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"},{offset:.5,opacity:"1"}];var cc=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}];var dc=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}];var uc=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}];var hc=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}];var pc=[{offset:0,opacity:"1"},{offset:.5,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"},{offset:1,opacity:"0"}];var fc=[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:1,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}];var mc=[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0)"},{offset:1,opacity:"0",transform:"scale(0.1) translate3d(-2000px, 0, 0)"}];var gc=[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0)"},{offset:1,opacity:"0",transform:"scale(0.1) translate3d(2000px, 0, 0)"}];var bc=[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:1,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}];var oo={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",easeInSine:"cubic-bezier(0.47, 0, 0.745, 0.715)",easeOutSine:"cubic-bezier(0.39, 0.575, 0.565, 1)",easeInOutSine:"cubic-bezier(0.445, 0.05, 0.55, 0.95)",easeInQuad:"cubic-bezier(0.55, 0.085, 0.68, 0.53)",easeOutQuad:"cubic-bezier(0.25, 0.46, 0.45, 0.94)",easeInOutQuad:"cubic-bezier(0.455, 0.03, 0.515, 0.955)",easeInCubic:"cubic-bezier(0.55, 0.055, 0.675, 0.19)",easeOutCubic:"cubic-bezier(0.215, 0.61, 0.355, 1)",easeInOutCubic:"cubic-bezier(0.645, 0.045, 0.355, 1)",easeInQuart:"cubic-bezier(0.895, 0.03, 0.685, 0.22)",easeOutQuart:"cubic-bezier(0.165, 0.84, 0.44, 1)",easeInOutQuart:"cubic-bezier(0.77, 0, 0.175, 1)",easeInQuint:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",easeOutQuint:"cubic-bezier(0.23, 1, 0.32, 1)",easeInOutQuint:"cubic-bezier(0.86, 0, 0.07, 1)",easeInExpo:"cubic-bezier(0.95, 0.05, 0.795, 0.035)",easeOutExpo:"cubic-bezier(0.19, 1, 0.22, 1)",easeInOutExpo:"cubic-bezier(1, 0, 0, 1)",easeInCirc:"cubic-bezier(0.6, 0.04, 0.98, 0.335)",easeOutCirc:"cubic-bezier(0.075, 0.82, 0.165, 1)",easeInOutCirc:"cubic-bezier(0.785, 0.135, 0.15, 0.86)",easeInBack:"cubic-bezier(0.6, -0.28, 0.735, 0.045)",easeOutBack:"cubic-bezier(0.175, 0.885, 0.32, 1.275)",easeInOutBack:"cubic-bezier(0.68, -0.55, 0.265, 1.55)"};function vc(){return Object.entries(ar).filter(([o])=>o!=="easings").map(([o])=>o)}function yc(){return Object.entries(oo).map(([o])=>o)}var es=_`
  :host {
    display: contents;
  }
`;var st=class extends y{constructor(){super(...arguments);this.hasStarted=!1;this.name="none";this.play=!1;this.delay=0;this.direction="normal";this.duration=1e3;this.easing="linear";this.endDelay=0;this.fill="auto";this.iterations=1/0;this.iterationStart=0;this.playbackRate=1;this.handleAnimationFinish=()=>{this.play=!1,this.hasStarted=!1,this.emit("sl-finish")};this.handleAnimationCancel=()=>{this.play=!1,this.hasStarted=!1,this.emit("sl-cancel")}}static{this.styles=[C,es]}get currentTime(){return this.animation?.currentTime??0}set currentTime(t){this.animation&&(this.animation.currentTime=t)}connectedCallback(){super.connectedCallback(),this.createAnimation()}disconnectedCallback(){super.disconnectedCallback(),this.destroyAnimation()}handleSlotChange(){this.destroyAnimation(),this.createAnimation()}async createAnimation(){let t=ar.easings[this.easing]??this.easing,r=this.keyframes??ar[this.name],a=(await this.defaultSlot).assignedElements()[0];return!a||!r?!1:(this.destroyAnimation(),this.animation=a.animate(r,{delay:this.delay,direction:this.direction,duration:this.duration,easing:t,endDelay:this.endDelay,fill:this.fill,iterationStart:this.iterationStart,iterations:this.iterations}),this.animation.playbackRate=this.playbackRate,this.animation.addEventListener("cancel",this.handleAnimationCancel),this.animation.addEventListener("finish",this.handleAnimationFinish),this.play?(this.hasStarted=!0,this.emit("sl-start")):this.animation.pause(),!0)}destroyAnimation(){this.animation&&(this.animation.cancel(),this.animation.removeEventListener("cancel",this.handleAnimationCancel),this.animation.removeEventListener("finish",this.handleAnimationFinish),this.hasStarted=!1)}handleAnimationChange(){this.hasUpdated&&this.createAnimation()}handlePlayChange(){return this.animation?(this.play&&!this.hasStarted&&(this.hasStarted=!0,this.emit("sl-start")),this.play?this.animation.play():this.animation.pause(),!0):!1}handlePlaybackRateChange(){this.animation&&(this.animation.playbackRate=this.playbackRate)}cancel(){this.animation?.cancel()}finish(){this.animation?.finish()}render(){return g` <slot @slotchange=${this.handleSlotChange}></slot> `}};s([Fi("slot")],st.prototype,"defaultSlot",2),s([l()],st.prototype,"name",2),s([l({type:Boolean,reflect:!0})],st.prototype,"play",2),s([l({type:Number})],st.prototype,"delay",2),s([l()],st.prototype,"direction",2),s([l({type:Number})],st.prototype,"duration",2),s([l()],st.prototype,"easing",2),s([l({attribute:"end-delay",type:Number})],st.prototype,"endDelay",2),s([l()],st.prototype,"fill",2),s([l({type:Number})],st.prototype,"iterations",2),s([l({attribute:"iteration-start",type:Number})],st.prototype,"iterationStart",2),s([l({attribute:!1})],st.prototype,"keyframes",2),s([l({attribute:"playback-rate",type:Number})],st.prototype,"playbackRate",2),s([v(["name","delay","direction","duration","easing","endDelay","fill","iterations","iterationsStart","keyframes"])],st.prototype,"handleAnimationChange",1),s([v("play")],st.prototype,"handlePlayChange",1),s([v("playbackRate")],st.prototype,"handlePlaybackRateChange",1);var xc=st;st.define("sl-animation");var rs=_`
  :host {
    display: inline-block;

    --size: 3rem;
  }

  .avatar {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: var(--size);
    height: var(--size);
    background-color: var(--sl-color-neutral-400);
    font-family: var(--sl-font-sans);
    font-size: calc(var(--size) * 0.5);
    font-weight: var(--sl-font-weight-normal);
    color: var(--sl-color-neutral-0);
    user-select: none;
    -webkit-user-select: none;
    vertical-align: middle;
  }

  .avatar--circle,
  .avatar--circle .avatar__image {
    border-radius: var(--sl-border-radius-circle);
  }

  .avatar--rounded,
  .avatar--rounded .avatar__image {
    border-radius: var(--sl-border-radius-medium);
  }

  .avatar--square {
    border-radius: 0;
  }

  .avatar__icon {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .avatar__initials {
    line-height: 1;
    text-transform: uppercase;
  }

  .avatar__image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    overflow: hidden;
  }
`;var Pt=class extends y{constructor(){super(...arguments);this.hasError=!1;this.image="";this.label="";this.initials="";this.loading="eager";this.shape="circle"}static{this.styles=[C,rs]}static{this.dependencies={"sl-icon":D}}handleImageChange(){this.hasError=!1}handleImageLoadError(){this.hasError=!0,this.emit("sl-error")}render(){let t=g`
      <img
        part="image"
        class="avatar__image"
        src="${this.image}"
        loading="${this.loading}"
        alt=""
        @error="${this.handleImageLoadError}"
      />
    `,r=g``;return this.initials?r=g`<div part="initials" class="avatar__initials">${this.initials}</div>`:r=g`
        <div part="icon" class="avatar__icon" aria-hidden="true">
          <slot name="icon">
            <sl-icon name="person-fill" library="system"></sl-icon>
          </slot>
        </div>
      `,g`
      <div
        part="base"
        class=${$({avatar:!0,"avatar--circle":this.shape==="circle","avatar--rounded":this.shape==="rounded","avatar--square":this.shape==="square"})}
        role="img"
        aria-label=${this.label}
      >
        ${this.image&&!this.hasError?t:r}
      </div>
    `}};s([S()],Pt.prototype,"hasError",2),s([l()],Pt.prototype,"image",2),s([l()],Pt.prototype,"label",2),s([l()],Pt.prototype,"initials",2),s([l()],Pt.prototype,"loading",2),s([l({reflect:!0})],Pt.prototype,"shape",2),s([v("image")],Pt.prototype,"handleImageChange",1);var wc=Pt;Pt.define("sl-avatar");var os=_`
  :host {
    display: inline-flex;
  }

  .badge {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: max(12px, 0.75em);
    font-weight: var(--sl-font-weight-semibold);
    letter-spacing: var(--sl-letter-spacing-normal);
    line-height: 1;
    border-radius: var(--sl-border-radius-small);
    border: solid 1px var(--sl-color-neutral-0);
    white-space: nowrap;
    padding: 0.35em 0.6em;
    user-select: none;
    -webkit-user-select: none;
    cursor: inherit;
  }

  /* Variant modifiers */
  .badge--primary {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .badge--success {
    background-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .badge--neutral {
    background-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .badge--warning {
    background-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  .badge--danger {
    background-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  /* Pill modifier */
  .badge--pill {
    border-radius: var(--sl-border-radius-pill);
  }

  /* Pulse modifier */
  .badge--pulse {
    animation: pulse 1.5s infinite;
  }

  .badge--pulse.badge--primary {
    --pulse-color: var(--sl-color-primary-600);
  }

  .badge--pulse.badge--success {
    --pulse-color: var(--sl-color-success-600);
  }

  .badge--pulse.badge--neutral {
    --pulse-color: var(--sl-color-neutral-600);
  }

  .badge--pulse.badge--warning {
    --pulse-color: var(--sl-color-warning-600);
  }

  .badge--pulse.badge--danger {
    --pulse-color: var(--sl-color-danger-600);
  }

  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 var(--pulse-color);
    }
    70% {
      box-shadow: 0 0 0 0.5rem transparent;
    }
    100% {
      box-shadow: 0 0 0 0 transparent;
    }
  }
`;var ye=class extends y{constructor(){super(...arguments);this.variant="primary";this.pill=!1;this.pulse=!1}static{this.styles=[C,os]}render(){return g`
      <span
        part="base"
        class=${$({badge:!0,"badge--primary":this.variant==="primary","badge--success":this.variant==="success","badge--neutral":this.variant==="neutral","badge--warning":this.variant==="warning","badge--danger":this.variant==="danger","badge--pill":this.pill,"badge--pulse":this.pulse})}
        role="status"
      >
        <slot></slot>
      </span>
    `}};s([l({reflect:!0})],ye.prototype,"variant",2),s([l({type:Boolean,reflect:!0})],ye.prototype,"pill",2),s([l({type:Boolean,reflect:!0})],ye.prototype,"pulse",2);var _c=ye;ye.define("sl-badge");var is=_`
  .breadcrumb {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }
`;var xe=class extends y{constructor(){super(...arguments);this.localize=new L(this);this.separatorDir=this.localize.dir();this.label=""}static{this.styles=[C,is]}static{this.dependencies={"sl-icon":D}}getSeparator(){let r=this.separatorSlot.assignedElements({flatten:!0})[0].cloneNode(!0);return[r,...r.querySelectorAll("[id]")].forEach(i=>i.removeAttribute("id")),r.setAttribute("data-default",""),r.slot="separator",r}handleSlotChange(){let t=[...this.defaultSlot.assignedElements({flatten:!0})].filter(r=>r.tagName.toLowerCase()==="sl-breadcrumb-item");t.forEach((r,i)=>{let a=r.querySelector('[slot="separator"]');a===null?r.append(this.getSeparator()):a.hasAttribute("data-default")&&a.replaceWith(this.getSeparator()),i===t.length-1?r.setAttribute("aria-current","page"):r.removeAttribute("aria-current")})}render(){return this.separatorDir!==this.localize.dir()&&(this.separatorDir=this.localize.dir(),this.updateComplete.then(()=>this.handleSlotChange())),g`
      <nav part="base" class="breadcrumb" aria-label=${this.label}>
        <slot @slotchange=${this.handleSlotChange}></slot>
      </nav>

      <span hidden aria-hidden="true">
        <slot name="separator">
          <sl-icon name=${this.localize.dir()==="rtl"?"chevron-left":"chevron-right"} library="system"></sl-icon>
        </slot>
      </span>
    `}};s([k("slot")],xe.prototype,"defaultSlot",2),s([k('slot[name="separator"]')],xe.prototype,"separatorSlot",2),s([l()],xe.prototype,"label",2);var kc=xe;xe.define("sl-breadcrumb");var ss=_`
  :host {
    display: inline-flex;
  }

  .breadcrumb-item {
    display: inline-flex;
    align-items: center;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-semibold);
    color: var(--sl-color-neutral-600);
    line-height: var(--sl-line-height-normal);
    white-space: nowrap;
  }

  .breadcrumb-item__label {
    display: inline-block;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    line-height: inherit;
    text-decoration: none;
    color: inherit;
    background: none;
    border: none;
    border-radius: var(--sl-border-radius-medium);
    padding: 0;
    margin: 0;
    cursor: pointer;
    transition: var(--sl-transition-fast) --color;
  }

  :host(:not(:last-of-type)) .breadcrumb-item__label {
    color: var(--sl-color-primary-600);
  }

  :host(:not(:last-of-type)) .breadcrumb-item__label:hover {
    color: var(--sl-color-primary-500);
  }

  :host(:not(:last-of-type)) .breadcrumb-item__label:active {
    color: var(--sl-color-primary-600);
  }

  .breadcrumb-item__label:focus {
    outline: none;
  }

  .breadcrumb-item__label:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .breadcrumb-item__prefix,
  .breadcrumb-item__suffix {
    display: none;
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .breadcrumb-item--has-prefix .breadcrumb-item__prefix {
    display: inline-flex;
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .breadcrumb-item--has-suffix .breadcrumb-item__suffix {
    display: inline-flex;
    margin-inline-start: var(--sl-spacing-x-small);
  }

  :host(:last-of-type) .breadcrumb-item__separator {
    display: none;
  }

  .breadcrumb-item__separator {
    display: inline-flex;
    align-items: center;
    margin: 0 var(--sl-spacing-x-small);
    user-select: none;
    -webkit-user-select: none;
  }
`;var jt=class extends y{constructor(){super(...arguments);this.hasSlotController=new K(this,"prefix","suffix");this.renderType="button";this.rel="noreferrer noopener"}static{this.styles=[C,ss]}setRenderType(){let t=this.defaultSlot.assignedElements({flatten:!0}).filter(r=>r.tagName.toLowerCase()==="sl-dropdown").length>0;if(this.href){this.renderType="link";return}if(t){this.renderType="dropdown";return}this.renderType="button"}hrefChanged(){this.setRenderType()}handleSlotChange(){this.setRenderType()}render(){return g`
      <div
        part="base"
        class=${$({"breadcrumb-item":!0,"breadcrumb-item--has-prefix":this.hasSlotController.test("prefix"),"breadcrumb-item--has-suffix":this.hasSlotController.test("suffix")})}
      >
        <span part="prefix" class="breadcrumb-item__prefix">
          <slot name="prefix"></slot>
        </span>

        ${this.renderType==="link"?g`
              <a
                part="label"
                class="breadcrumb-item__label breadcrumb-item__label--link"
                href="${this.href}"
                target="${z(this.target?this.target:void 0)}"
                rel=${z(this.target?this.rel:void 0)}
              >
                <slot @slotchange=${this.handleSlotChange}></slot>
              </a>
            `:""}
        ${this.renderType==="button"?g`
              <button part="label" type="button" class="breadcrumb-item__label breadcrumb-item__label--button">
                <slot @slotchange=${this.handleSlotChange}></slot>
              </button>
            `:""}
        ${this.renderType==="dropdown"?g`
              <div part="label" class="breadcrumb-item__label breadcrumb-item__label--drop-down">
                <slot @slotchange=${this.handleSlotChange}></slot>
              </div>
            `:""}

        <span part="suffix" class="breadcrumb-item__suffix">
          <slot name="suffix"></slot>
        </span>

        <span part="separator" class="breadcrumb-item__separator" aria-hidden="true">
          <slot name="separator"></slot>
        </span>
      </div>
    `}};s([k("slot:not([name])")],jt.prototype,"defaultSlot",2),s([S()],jt.prototype,"renderType",2),s([l()],jt.prototype,"href",2),s([l()],jt.prototype,"target",2),s([l()],jt.prototype,"rel",2),s([v("href",{waitUntilFirstUpdate:!0})],jt.prototype,"hrefChanged",1);var Cc=jt;jt.define("sl-breadcrumb-item");var Be=new WeakMap,Cr=new WeakMap,Er=new WeakMap,qo=new WeakSet,io=new WeakMap,ut=class{constructor(e,t){this.handleFormData=e=>{let t=this.options.disabled(this.host),r=this.options.name(this.host),i=this.options.value(this.host),a=this.host.tagName.toLowerCase()==="sl-button";this.host.isConnected&&!t&&!a&&typeof r=="string"&&r.length>0&&typeof i<"u"&&(Array.isArray(i)?i.forEach(n=>{e.formData.append(r,n.toString())}):e.formData.append(r,i.toString()))};this.handleFormSubmit=e=>{let t=this.options.disabled(this.host),r=this.options.reportValidity;this.form&&!this.form.noValidate&&Be.get(this.form)?.forEach(i=>{this.setUserInteracted(i,!0)}),this.form&&!this.form.noValidate&&!t&&!r(this.host)&&(e.preventDefault(),e.stopImmediatePropagation())};this.handleFormReset=()=>{this.options.setValue(this.host,this.options.defaultValue(this.host)),this.setUserInteracted(this.host,!1),io.set(this.host,[])};this.handleInteraction=e=>{let t=io.get(this.host);t.includes(e.type)||t.push(e.type),t.length===this.options.assumeInteractionOn.length&&this.setUserInteracted(this.host,!0)};this.checkFormValidity=()=>{if(this.form&&!this.form.noValidate){let e=this.form.querySelectorAll("*");for(let t of e)if(typeof t.checkValidity=="function"&&!t.checkValidity())return!1}return!0};this.reportFormValidity=()=>{if(this.form&&!this.form.noValidate){let e=this.form.querySelectorAll("*");for(let t of e)if(typeof t.reportValidity=="function"&&!t.reportValidity())return!1}return!0};(this.host=e).addController(this),this.options={form:r=>{let i=r.form;if(i){let n=r.getRootNode().querySelector(`#${i}`);if(n)return n}return r.closest("form")},name:r=>r.name,value:r=>r.value,defaultValue:r=>r.defaultValue,disabled:r=>r.disabled??!1,reportValidity:r=>typeof r.reportValidity=="function"?r.reportValidity():!0,checkValidity:r=>typeof r.checkValidity=="function"?r.checkValidity():!0,setValue:(r,i)=>r.value=i,assumeInteractionOn:["sl-input"],...t}}hostConnected(){let e=this.options.form(this.host);e&&this.attachForm(e),io.set(this.host,[]),this.options.assumeInteractionOn.forEach(t=>{this.host.addEventListener(t,this.handleInteraction)})}hostDisconnected(){this.detachForm(),io.delete(this.host),this.options.assumeInteractionOn.forEach(e=>{this.host.removeEventListener(e,this.handleInteraction)})}hostUpdated(){let e=this.options.form(this.host);e||this.detachForm(),e&&this.form!==e&&(this.detachForm(),this.attachForm(e)),this.host.hasUpdated&&this.setValidity(this.host.validity.valid)}attachForm(e){e?(this.form=e,Be.has(this.form)?Be.get(this.form).add(this.host):Be.set(this.form,new Set([this.host])),this.form.addEventListener("formdata",this.handleFormData),this.form.addEventListener("submit",this.handleFormSubmit),this.form.addEventListener("reset",this.handleFormReset),Cr.has(this.form)||(Cr.set(this.form,this.form.reportValidity),this.form.reportValidity=()=>this.reportFormValidity()),Er.has(this.form)||(Er.set(this.form,this.form.checkValidity),this.form.checkValidity=()=>this.checkFormValidity())):this.form=void 0}detachForm(){if(!this.form)return;let e=Be.get(this.form);e&&(e.delete(this.host),e.size<=0&&(this.form.removeEventListener("formdata",this.handleFormData),this.form.removeEventListener("submit",this.handleFormSubmit),this.form.removeEventListener("reset",this.handleFormReset),Cr.has(this.form)&&(this.form.reportValidity=Cr.get(this.form),Cr.delete(this.form)),Er.has(this.form)&&(this.form.checkValidity=Er.get(this.form),Er.delete(this.form)),this.form=void 0))}setUserInteracted(e,t){t?qo.add(e):qo.delete(e),e.requestUpdate()}doAction(e,t){if(this.form){let r=document.createElement("button");r.type=e,r.style.position="absolute",r.style.width="0",r.style.height="0",r.style.clipPath="inset(50%)",r.style.overflow="hidden",r.style.whiteSpace="nowrap",t&&(r.name=t.name,r.value=t.value,["formaction","formenctype","formmethod","formnovalidate","formtarget"].forEach(i=>{t.hasAttribute(i)&&r.setAttribute(i,t.getAttribute(i))})),this.form.append(r),r.click(),r.remove()}}getForm(){return this.form??null}reset(e){this.doAction("reset",e)}submit(e){this.doAction("submit",e)}setValidity(e){let t=this.host,r=!!qo.has(t),i=!!t.required;t.toggleAttribute("data-required",i),t.toggleAttribute("data-optional",!i),t.toggleAttribute("data-invalid",!e),t.toggleAttribute("data-valid",e),t.toggleAttribute("data-user-invalid",!e&&r),t.toggleAttribute("data-user-valid",e&&r)}updateValidity(){let e=this.host;this.setValidity(e.validity.valid)}emitInvalidEvent(e){let t=new CustomEvent("sl-invalid",{bubbles:!1,composed:!1,cancelable:!0,detail:{}});e||t.preventDefault(),this.host.dispatchEvent(t)||e?.preventDefault()}},nr=Object.freeze({badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valid:!0,valueMissing:!1}),as=Object.freeze({...nr,valid:!1,valueMissing:!0}),ns=Object.freeze({...nr,valid:!1,customError:!0});var ls=_`
  :host {
    --track-width: 2px;
    --track-color: rgb(128 128 128 / 25%);
    --indicator-color: var(--sl-color-primary-600);
    --speed: 2s;

    display: inline-flex;
    width: 1em;
    height: 1em;
    flex: none;
  }

  .spinner {
    flex: 1 1 auto;
    height: 100%;
    width: 100%;
  }

  .spinner__track,
  .spinner__indicator {
    fill: none;
    stroke-width: var(--track-width);
    r: calc(0.5em - var(--track-width) / 2);
    cx: 0.5em;
    cy: 0.5em;
    transform-origin: 50% 50%;
  }

  .spinner__track {
    stroke: var(--track-color);
    transform-origin: 0% 0%;
  }

  .spinner__indicator {
    stroke: var(--indicator-color);
    stroke-linecap: round;
    stroke-dasharray: 150% 75%;
    animation: spin var(--speed) linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
      stroke-dasharray: 0.05em, 3em;
    }

    50% {
      transform: rotate(450deg);
      stroke-dasharray: 1.375em, 1.375em;
    }

    100% {
      transform: rotate(1080deg);
      stroke-dasharray: 0.05em, 3em;
    }
  }
`;var Kt=class extends y{constructor(){super(...arguments);this.localize=new L(this)}static{this.styles=[C,ls]}render(){return g`
      <svg part="base" class="spinner" role="progressbar" aria-label=${this.localize.term("loading")}>
        <circle class="spinner__track"></circle>
        <circle class="spinner__indicator"></circle>
      </svg>
    `}};var so=_`
  :host {
    display: inline-block;
    position: relative;
    width: auto;
    cursor: pointer;
  }

  .button {
    display: inline-flex;
    align-items: stretch;
    justify-content: center;
    width: 100%;
    border-style: solid;
    border-width: var(--sl-input-border-width);
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-font-weight-semibold);
    text-decoration: none;
    user-select: none;
    -webkit-user-select: none;
    white-space: nowrap;
    vertical-align: middle;
    padding: 0;
    transition:
      var(--sl-transition-x-fast) background-color,
      var(--sl-transition-x-fast) color,
      var(--sl-transition-x-fast) border,
      var(--sl-transition-x-fast) box-shadow;
    cursor: inherit;
  }

  .button::-moz-focus-inner {
    border: 0;
  }

  .button:focus {
    outline: none;
  }

  .button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* When disabled, prevent mouse events from bubbling up from children */
  .button--disabled * {
    pointer-events: none;
  }

  .button__prefix,
  .button__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    pointer-events: none;
  }

  .button__label {
    display: inline-block;
  }

  .button__label::slotted(sl-icon) {
    vertical-align: -2px;
  }

  /*
   * Standard buttons
   */

  /* Default */
  .button--standard.button--default {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-input-border-color);
    color: var(--sl-color-neutral-700);
  }

  .button--standard.button--default:hover:not(.button--disabled) {
    background-color: var(--sl-color-primary-50);
    border-color: var(--sl-color-primary-300);
    color: var(--sl-color-primary-700);
  }

  .button--standard.button--default:active:not(.button--disabled) {
    background-color: var(--sl-color-primary-100);
    border-color: var(--sl-color-primary-400);
    color: var(--sl-color-primary-700);
  }

  /* Primary */
  .button--standard.button--primary {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--primary:hover:not(.button--disabled) {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--primary:active:not(.button--disabled) {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  /* Success */
  .button--standard.button--success {
    background-color: var(--sl-color-success-600);
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--success:hover:not(.button--disabled) {
    background-color: var(--sl-color-success-500);
    border-color: var(--sl-color-success-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--success:active:not(.button--disabled) {
    background-color: var(--sl-color-success-600);
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  /* Neutral */
  .button--standard.button--neutral {
    background-color: var(--sl-color-neutral-600);
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--neutral:hover:not(.button--disabled) {
    background-color: var(--sl-color-neutral-500);
    border-color: var(--sl-color-neutral-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--neutral:active:not(.button--disabled) {
    background-color: var(--sl-color-neutral-600);
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  /* Warning */
  .button--standard.button--warning {
    background-color: var(--sl-color-warning-600);
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }
  .button--standard.button--warning:hover:not(.button--disabled) {
    background-color: var(--sl-color-warning-500);
    border-color: var(--sl-color-warning-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--warning:active:not(.button--disabled) {
    background-color: var(--sl-color-warning-600);
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  /* Danger */
  .button--standard.button--danger {
    background-color: var(--sl-color-danger-600);
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--danger:hover:not(.button--disabled) {
    background-color: var(--sl-color-danger-500);
    border-color: var(--sl-color-danger-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--danger:active:not(.button--disabled) {
    background-color: var(--sl-color-danger-600);
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  /*
   * Outline buttons
   */

  .button--outline {
    background: none;
    border: solid 1px;
  }

  /* Default */
  .button--outline.button--default {
    border-color: var(--sl-input-border-color);
    color: var(--sl-color-neutral-700);
  }

  .button--outline.button--default:hover:not(.button--disabled),
  .button--outline.button--default.button--checked:not(.button--disabled) {
    border-color: var(--sl-color-primary-600);
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--default:active:not(.button--disabled) {
    border-color: var(--sl-color-primary-700);
    background-color: var(--sl-color-primary-700);
    color: var(--sl-color-neutral-0);
  }

  /* Primary */
  .button--outline.button--primary {
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-primary-600);
  }

  .button--outline.button--primary:hover:not(.button--disabled),
  .button--outline.button--primary.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--primary:active:not(.button--disabled) {
    border-color: var(--sl-color-primary-700);
    background-color: var(--sl-color-primary-700);
    color: var(--sl-color-neutral-0);
  }

  /* Success */
  .button--outline.button--success {
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-success-600);
  }

  .button--outline.button--success:hover:not(.button--disabled),
  .button--outline.button--success.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--success:active:not(.button--disabled) {
    border-color: var(--sl-color-success-700);
    background-color: var(--sl-color-success-700);
    color: var(--sl-color-neutral-0);
  }

  /* Neutral */
  .button--outline.button--neutral {
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-600);
  }

  .button--outline.button--neutral:hover:not(.button--disabled),
  .button--outline.button--neutral.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--neutral:active:not(.button--disabled) {
    border-color: var(--sl-color-neutral-700);
    background-color: var(--sl-color-neutral-700);
    color: var(--sl-color-neutral-0);
  }

  /* Warning */
  .button--outline.button--warning {
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-warning-600);
  }

  .button--outline.button--warning:hover:not(.button--disabled),
  .button--outline.button--warning.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--warning:active:not(.button--disabled) {
    border-color: var(--sl-color-warning-700);
    background-color: var(--sl-color-warning-700);
    color: var(--sl-color-neutral-0);
  }

  /* Danger */
  .button--outline.button--danger {
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-danger-600);
  }

  .button--outline.button--danger:hover:not(.button--disabled),
  .button--outline.button--danger.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--danger:active:not(.button--disabled) {
    border-color: var(--sl-color-danger-700);
    background-color: var(--sl-color-danger-700);
    color: var(--sl-color-neutral-0);
  }

  @media (forced-colors: active) {
    .button.button--outline.button--checked:not(.button--disabled) {
      outline: solid 2px transparent;
    }
  }

  /*
   * Text buttons
   */

  .button--text {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-600);
  }

  .button--text:hover:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-500);
  }

  .button--text:focus-visible:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-500);
  }

  .button--text:active:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-700);
  }

  /*
   * Size modifiers
   */

  .button--small {
    height: auto;
    min-height: var(--sl-input-height-small);
    font-size: var(--sl-button-font-size-small);
    line-height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-small);
  }

  .button--medium {
    height: auto;
    min-height: var(--sl-input-height-medium);
    font-size: var(--sl-button-font-size-medium);
    line-height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-medium);
  }

  .button--large {
    height: auto;
    min-height: var(--sl-input-height-large);
    font-size: var(--sl-button-font-size-large);
    line-height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-large);
  }

  /*
   * Pill modifier
   */

  .button--pill.button--small {
    border-radius: var(--sl-input-height-small);
  }

  .button--pill.button--medium {
    border-radius: var(--sl-input-height-medium);
  }

  .button--pill.button--large {
    border-radius: var(--sl-input-height-large);
  }

  /*
   * Circle modifier
   */

  .button--circle {
    padding-left: 0;
    padding-right: 0;
  }

  .button--circle.button--small {
    width: var(--sl-input-height-small);
    border-radius: 50%;
  }

  .button--circle.button--medium {
    width: var(--sl-input-height-medium);
    border-radius: 50%;
  }

  .button--circle.button--large {
    width: var(--sl-input-height-large);
    border-radius: 50%;
  }

  .button--circle .button__prefix,
  .button--circle .button__suffix,
  .button--circle .button__caret {
    display: none;
  }

  /*
   * Caret modifier
   */

  .button--caret .button__suffix {
    display: none;
  }

  .button--caret .button__caret {
    height: auto;
  }

  /*
   * Loading modifier
   */

  .button--loading {
    position: relative;
    cursor: wait;
  }

  .button--loading .button__prefix,
  .button--loading .button__label,
  .button--loading .button__suffix,
  .button--loading .button__caret {
    visibility: hidden;
  }

  .button--loading sl-spinner {
    --indicator-color: currentColor;
    position: absolute;
    font-size: 1em;
    height: 1em;
    width: 1em;
    top: calc(50% - 0.5em);
    left: calc(50% - 0.5em);
  }

  /*
   * Badges
   */

  .button ::slotted(sl-badge) {
    position: absolute;
    top: 0;
    right: 0;
    translate: 50% -50%;
    pointer-events: none;
  }

  .button--rtl ::slotted(sl-badge) {
    right: auto;
    left: 0;
    translate: -50% -50%;
  }

  /*
   * Button spacing
   */

  .button--has-label.button--small .button__label {
    padding: 0 var(--sl-spacing-small);
  }

  .button--has-label.button--medium .button__label {
    padding: 0 var(--sl-spacing-medium);
  }

  .button--has-label.button--large .button__label {
    padding: 0 var(--sl-spacing-large);
  }

  .button--has-prefix.button--small {
    padding-inline-start: var(--sl-spacing-x-small);
  }

  .button--has-prefix.button--small .button__label {
    padding-inline-start: var(--sl-spacing-x-small);
  }

  .button--has-prefix.button--medium {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--medium .button__label {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--large {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--large .button__label {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-suffix.button--small,
  .button--caret.button--small {
    padding-inline-end: var(--sl-spacing-x-small);
  }

  .button--has-suffix.button--small .button__label,
  .button--caret.button--small .button__label {
    padding-inline-end: var(--sl-spacing-x-small);
  }

  .button--has-suffix.button--medium,
  .button--caret.button--medium {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--medium .button__label,
  .button--caret.button--medium .button__label {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--large,
  .button--caret.button--large {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--large .button__label,
  .button--caret.button--large .button__label {
    padding-inline-end: var(--sl-spacing-small);
  }

  /*
   * Button groups support a variety of button types (e.g. buttons with tooltips, buttons as dropdown triggers, etc.).
   * This means buttons aren't always direct descendants of the button group, thus we can't target them with the
   * ::slotted selector. To work around this, the button group component does some magic to add these special classes to
   * buttons and we style them here instead.
   */

  :host([data-sl-button-group__button--first]:not([data-sl-button-group__button--last])) .button {
    border-start-end-radius: 0;
    border-end-end-radius: 0;
  }

  :host([data-sl-button-group__button--inner]) .button {
    border-radius: 0;
  }

  :host([data-sl-button-group__button--last]:not([data-sl-button-group__button--first])) .button {
    border-start-start-radius: 0;
    border-end-start-radius: 0;
  }

  /* All except the first */
  :host([data-sl-button-group__button]:not([data-sl-button-group__button--first])) {
    margin-inline-start: calc(-1 * var(--sl-input-border-width));
  }

  /* Add a visual separator between solid buttons */
  :host(
      [data-sl-button-group__button]:not(
          [data-sl-button-group__button--first],
          [data-sl-button-group__button--radio],
          [variant='default']
        ):not(:hover)
    )
    .button:after {
    content: '';
    position: absolute;
    top: 0;
    inset-inline-start: 0;
    bottom: 0;
    border-left: solid 1px rgb(128 128 128 / 33%);
    mix-blend-mode: multiply;
  }

  /* Bump hovered, focused, and checked buttons up so their focus ring isn't clipped */
  :host([data-sl-button-group__button--hover]) {
    z-index: 1;
  }

  /* Focus and checked are always on top */
  :host([data-sl-button-group__button--focus]),
  :host([data-sl-button-group__button][checked]) {
    z-index: 2;
  }
`;var W=class extends y{constructor(){super(...arguments);this.formControlController=new ut(this,{assumeInteractionOn:["click"]});this.hasSlotController=new K(this,"[default]","prefix","suffix");this.localize=new L(this);this.hasFocus=!1;this.invalid=!1;this.title="";this.variant="default";this.size="medium";this.caret=!1;this.disabled=!1;this.loading=!1;this.outline=!1;this.pill=!1;this.circle=!1;this.type="button";this.name="";this.value="";this.href="";this.rel="noreferrer noopener"}static{this.styles=[C,so]}static{this.dependencies={"sl-icon":D,"sl-spinner":Kt}}get validity(){return this.isButton()?this.button.validity:nr}get validationMessage(){return this.isButton()?this.button.validationMessage:""}firstUpdated(){this.isButton()&&this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(){this.type==="submit"&&this.formControlController.submit(this),this.type==="reset"&&this.formControlController.reset(this)}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}isButton(){return!this.href}isLink(){return!!this.href}handleDisabledChange(){this.isButton()&&this.formControlController.setValidity(this.disabled)}click(){this.button.click()}focus(t){this.button.focus(t)}blur(){this.button.blur()}checkValidity(){return this.isButton()?this.button.checkValidity():!0}getForm(){return this.formControlController.getForm()}reportValidity(){return this.isButton()?this.button.reportValidity():!0}setCustomValidity(t){this.isButton()&&(this.button.setCustomValidity(t),this.formControlController.updateValidity())}render(){let t=this.isLink(),r=t?ir`a`:ir`button`;return ze`
      <${r}
        part="base"
        class=${$({button:!0,"button--default":this.variant==="default","button--primary":this.variant==="primary","button--success":this.variant==="success","button--neutral":this.variant==="neutral","button--warning":this.variant==="warning","button--danger":this.variant==="danger","button--text":this.variant==="text","button--small":this.size==="small","button--medium":this.size==="medium","button--large":this.size==="large","button--caret":this.caret,"button--circle":this.circle,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--loading":this.loading,"button--standard":!this.outline,"button--outline":this.outline,"button--pill":this.pill,"button--rtl":this.localize.dir()==="rtl","button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
        ?disabled=${z(t?void 0:this.disabled)}
        type=${z(t?void 0:this.type)}
        title=${this.title}
        name=${z(t?void 0:this.name)}
        value=${z(t?void 0:this.value)}
        href=${z(t&&!this.disabled?this.href:void 0)}
        target=${z(t?this.target:void 0)}
        download=${z(t?this.download:void 0)}
        rel=${z(t?this.rel:void 0)}
        role=${z(t?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @invalid=${this.isButton()?this.handleInvalid:null}
        @click=${this.handleClick}
      >
        <slot name="prefix" part="prefix" class="button__prefix"></slot>
        <slot part="label" class="button__label"></slot>
        <slot name="suffix" part="suffix" class="button__suffix"></slot>
        ${this.caret?ze` <sl-icon part="caret" class="button__caret" library="system" name="caret"></sl-icon> `:""}
        ${this.loading?ze`<sl-spinner part="spinner"></sl-spinner>`:""}
      </${r}>
    `}};s([k(".button")],W.prototype,"button",2),s([S()],W.prototype,"hasFocus",2),s([S()],W.prototype,"invalid",2),s([l()],W.prototype,"title",2),s([l({reflect:!0})],W.prototype,"variant",2),s([l({reflect:!0})],W.prototype,"size",2),s([l({type:Boolean,reflect:!0})],W.prototype,"caret",2),s([l({type:Boolean,reflect:!0})],W.prototype,"disabled",2),s([l({type:Boolean,reflect:!0})],W.prototype,"loading",2),s([l({type:Boolean,reflect:!0})],W.prototype,"outline",2),s([l({type:Boolean,reflect:!0})],W.prototype,"pill",2),s([l({type:Boolean,reflect:!0})],W.prototype,"circle",2),s([l()],W.prototype,"type",2),s([l()],W.prototype,"name",2),s([l()],W.prototype,"value",2),s([l()],W.prototype,"href",2),s([l()],W.prototype,"target",2),s([l()],W.prototype,"rel",2),s([l()],W.prototype,"download",2),s([l()],W.prototype,"form",2),s([l({attribute:"formaction"})],W.prototype,"formAction",2),s([l({attribute:"formenctype"})],W.prototype,"formEnctype",2),s([l({attribute:"formmethod"})],W.prototype,"formMethod",2),s([l({attribute:"formnovalidate",type:Boolean})],W.prototype,"formNoValidate",2),s([l({attribute:"formtarget"})],W.prototype,"formTarget",2),s([v("disabled",{waitUntilFirstUpdate:!0})],W.prototype,"handleDisabledChange",1);var Ec=W;W.define("sl-button");var cs=_`
  :host {
    display: inline-block;
  }

  .button-group {
    display: flex;
    flex-wrap: nowrap;
  }
`;var Vt=class extends y{constructor(){super(...arguments);this.disableRole=!1;this.label=""}static{this.styles=[C,cs]}handleFocus(t){Tr(t.target)?.toggleAttribute("data-sl-button-group__button--focus",!0)}handleBlur(t){Tr(t.target)?.toggleAttribute("data-sl-button-group__button--focus",!1)}handleMouseOver(t){Tr(t.target)?.toggleAttribute("data-sl-button-group__button--hover",!0)}handleMouseOut(t){Tr(t.target)?.toggleAttribute("data-sl-button-group__button--hover",!1)}handleSlotChange(){let t=[...this.defaultSlot.assignedElements({flatten:!0})];t.forEach(r=>{let i=t.indexOf(r),a=Tr(r);a&&(a.toggleAttribute("data-sl-button-group__button",!0),a.toggleAttribute("data-sl-button-group__button--first",i===0),a.toggleAttribute("data-sl-button-group__button--inner",i>0&&i<t.length-1),a.toggleAttribute("data-sl-button-group__button--last",i===t.length-1),a.toggleAttribute("data-sl-button-group__button--radio",a.tagName.toLowerCase()==="sl-radio-button"))})}render(){return g`
      <div
        part="base"
        class="button-group"
        role="${this.disableRole?"presentation":"group"}"
        aria-label=${this.label}
        @focusout=${this.handleBlur}
        @focusin=${this.handleFocus}
        @mouseover=${this.handleMouseOver}
        @mouseout=${this.handleMouseOut}
      >
        <slot @slotchange=${this.handleSlotChange}></slot>
      </div>
    `}};s([k("slot")],Vt.prototype,"defaultSlot",2),s([S()],Vt.prototype,"disableRole",2),s([l()],Vt.prototype,"label",2);function Tr(o){let e="sl-button, sl-radio-button";return o.closest(e)??o.querySelector(e)}var Tc=Vt;Vt.define("sl-button-group");var ds=_`
  :host {
    --border-color: var(--sl-color-neutral-200);
    --border-radius: var(--sl-border-radius-medium);
    --border-width: 1px;
    --padding: var(--sl-spacing-large);

    display: inline-block;
  }

  .card {
    display: flex;
    flex-direction: column;
    background-color: var(--sl-panel-background-color);
    box-shadow: var(--sl-shadow-x-small);
    border: solid var(--border-width) var(--border-color);
    border-radius: var(--border-radius);
  }

  .card__image {
    display: flex;
    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
    margin: calc(-1 * var(--border-width));
    overflow: hidden;
  }

  .card__image::slotted(img) {
    display: block;
    width: 100%;
  }

  .card:not(.card--has-image) .card__image {
    display: none;
  }

  .card__header {
    display: block;
    border-bottom: solid var(--border-width) var(--border-color);
    padding: calc(var(--padding) / 2) var(--padding);
  }

  .card:not(.card--has-header) .card__header {
    display: none;
  }

  .card:not(.card--has-image) .card__header {
    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
  }

  .card__body {
    display: block;
    padding: var(--padding);
  }

  .card--has-footer .card__footer {
    display: block;
    border-top: solid var(--border-width) var(--border-color);
    padding: var(--padding);
  }

  .card:not(.card--has-footer) .card__footer {
    display: none;
  }
`;var lr=class extends y{constructor(){super(...arguments);this.hasSlotController=new K(this,"footer","header","image")}static{this.styles=[C,ds]}render(){return g`
      <div
        part="base"
        class=${$({card:!0,"card--has-footer":this.hasSlotController.test("footer"),"card--has-image":this.hasSlotController.test("image"),"card--has-header":this.hasSlotController.test("header")})}
      >
        <slot name="image" part="image" class="card__image"></slot>
        <slot name="header" part="header" class="card__header"></slot>
        <slot part="body" class="card__body"></slot>
        <slot name="footer" part="footer" class="card__footer"></slot>
      </div>
    `}};var $c=lr;lr.define("sl-card");var Sc=(o,e)=>{let t=0;return function(...r){window.clearTimeout(t),t=window.setTimeout(()=>{o.call(this,...r)},e)}},us=(o,e,t)=>{let r=o[e];o[e]=function(...i){r.call(this,...i),t.call(this,r,...i)}};(()=>{if(typeof window>"u")return;if(!("onscrollend"in window)){let e=new Set,t=new WeakMap,r=a=>{for(let n of a.changedTouches)e.add(n.identifier)},i=a=>{for(let n of a.changedTouches)e.delete(n.identifier)};document.addEventListener("touchstart",r,!0),document.addEventListener("touchend",i,!0),document.addEventListener("touchcancel",i,!0),us(EventTarget.prototype,"addEventListener",function(a,n){if(n!=="scrollend")return;let c=Sc(()=>{e.size?c():this.dispatchEvent(new Event("scrollend"))},100);a.call(this,"scroll",c,{passive:!0}),t.set(this,c)}),us(EventTarget.prototype,"removeEventListener",function(a,n){if(n!=="scrollend")return;let c=t.get(this);c&&a.call(this,"scroll",c,{passive:!0})})}})();var ao=class{constructor(e,t){this.timerId=0;this.activeInteractions=0;this.paused=!1;this.stopped=!0;this.pause=()=>{this.activeInteractions++||(this.paused=!0,this.host.requestUpdate())};this.resume=()=>{--this.activeInteractions||(this.paused=!1,this.host.requestUpdate())};e.addController(this),this.host=e,this.tickCallback=t}hostConnected(){this.host.addEventListener("mouseenter",this.pause),this.host.addEventListener("mouseleave",this.resume),this.host.addEventListener("focusin",this.pause),this.host.addEventListener("focusout",this.resume),this.host.addEventListener("touchstart",this.pause,{passive:!0}),this.host.addEventListener("touchend",this.resume)}hostDisconnected(){this.stop(),this.host.removeEventListener("mouseenter",this.pause),this.host.removeEventListener("mouseleave",this.resume),this.host.removeEventListener("focusin",this.pause),this.host.removeEventListener("focusout",this.resume),this.host.removeEventListener("touchstart",this.pause),this.host.removeEventListener("touchend",this.resume)}start(e){this.stop(),this.stopped=!1,this.timerId=window.setInterval(()=>{this.paused||this.tickCallback()},e)}stop(){clearInterval(this.timerId),this.stopped=!0,this.host.requestUpdate()}};function tt(o,e,t){let r=i=>Object.is(i,-0)?0:i;return o<e?r(e):o>t?r(t):r(o)}function*hs(o,e){if(o!==void 0){let t=0;for(let r of o)yield e(r,t++)}}function*ps(o,e,t=1){let r=e===void 0?0:o;e??=o;for(let i=r;t>0?i<e:e<i;i+=t)yield i}var fs=_`
  :host {
    --slide-gap: var(--sl-spacing-medium, 1rem);
    --aspect-ratio: 16 / 9;
    --scroll-hint: 0px;

    display: flex;
  }

  .carousel {
    display: grid;
    grid-template-columns: min-content 1fr min-content;
    grid-template-rows: 1fr min-content;
    grid-template-areas:
      '. slides .'
      '. pagination .';
    gap: var(--sl-spacing-medium);
    align-items: center;
    min-height: 100%;
    min-width: 100%;
    position: relative;
  }

  .carousel__pagination {
    grid-area: pagination;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: var(--sl-spacing-small);
  }

  .carousel__slides {
    grid-area: slides;

    display: grid;
    height: 100%;
    width: 100%;
    align-items: center;
    justify-items: center;
    overflow: auto;
    overscroll-behavior-x: contain;
    scrollbar-width: none;
    aspect-ratio: calc(var(--aspect-ratio) * var(--slides-per-page));
    border-radius: var(--sl-border-radius-small);

    --slide-size: calc((100% - (var(--slides-per-page) - 1) * var(--slide-gap)) / var(--slides-per-page));
  }

  @media (prefers-reduced-motion) {
    :where(.carousel__slides) {
      scroll-behavior: auto;
    }
  }

  .carousel__slides--horizontal {
    grid-auto-flow: column;
    grid-auto-columns: var(--slide-size);
    grid-auto-rows: 100%;
    column-gap: var(--slide-gap);
    scroll-snap-type: x mandatory;
    scroll-padding-inline: var(--scroll-hint);
    padding-inline: var(--scroll-hint);
    overflow-y: hidden;
  }

  .carousel__slides--vertical {
    grid-auto-flow: row;
    grid-auto-columns: 100%;
    grid-auto-rows: var(--slide-size);
    row-gap: var(--slide-gap);
    scroll-snap-type: y mandatory;
    scroll-padding-block: var(--scroll-hint);
    padding-block: var(--scroll-hint);
    overflow-x: hidden;
  }

  .carousel__slides--dragging {
  }

  :host([vertical]) ::slotted(sl-carousel-item) {
    height: 100%;
  }

  .carousel__slides::-webkit-scrollbar {
    display: none;
  }

  .carousel__navigation {
    grid-area: navigation;
    display: contents;
    font-size: var(--sl-font-size-x-large);
  }

  .carousel__navigation-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    background: none;
    border: none;
    border-radius: var(--sl-border-radius-small);
    font-size: inherit;
    color: var(--sl-color-neutral-600);
    padding: var(--sl-spacing-x-small);
    cursor: pointer;
    transition: var(--sl-transition-medium) color;
    appearance: none;
  }

  .carousel__navigation-button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .carousel__navigation-button--disabled::part(base) {
    pointer-events: none;
  }

  .carousel__navigation-button--previous {
    grid-column: 1;
    grid-row: 1;
  }

  .carousel__navigation-button--next {
    grid-column: 3;
    grid-row: 1;
  }

  .carousel__pagination-item {
    display: block;
    cursor: pointer;
    background: none;
    border: 0;
    border-radius: var(--sl-border-radius-circle);
    width: var(--sl-spacing-small);
    height: var(--sl-spacing-small);
    background-color: var(--sl-color-neutral-300);
    padding: 0;
    margin: 0;
  }

  .carousel__pagination-item--active {
    background-color: var(--sl-color-neutral-700);
    transform: scale(1.2);
  }

  /* Focus styles */
  .carousel__slides:focus-visible,
  .carousel__navigation-button:focus-visible,
  .carousel__pagination-item:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }
`;var et=class extends y{constructor(){super(...arguments);this.loop=!1;this.navigation=!1;this.pagination=!1;this.autoplay=!1;this.autoplayInterval=3e3;this.slidesPerPage=1;this.slidesPerMove=1;this.orientation="horizontal";this.mouseDragging=!1;this.activeSlide=0;this.scrolling=!1;this.dragging=!1;this.autoplayController=new ao(this,()=>this.next());this.dragStartPosition=[-1,-1];this.localize=new L(this);this.pendingSlideChange=!1;this.handleMouseDrag=t=>{this.dragging||(this.scrollContainer.style.setProperty("scroll-snap-type","none"),this.dragging=!0,this.dragStartPosition=[t.clientX,t.clientY]),this.scrollContainer.scrollBy({left:-t.movementX,top:-t.movementY,behavior:"instant"})};this.handleMouseDragEnd=()=>{let t=this.scrollContainer;document.removeEventListener("pointermove",this.handleMouseDrag,{capture:!0});let r=t.scrollLeft,i=t.scrollTop;t.style.removeProperty("scroll-snap-type"),t.style.setProperty("overflow","hidden");let a=t.scrollLeft,n=t.scrollTop;t.style.removeProperty("overflow"),t.style.setProperty("scroll-snap-type","none"),t.scrollTo({left:r,top:i,behavior:"instant"}),requestAnimationFrame(async()=>{(r!==a||i!==n)&&(t.scrollTo({left:a,top:n,behavior:Nr()?"auto":"smooth"}),await rt(t,"scrollend")),t.style.removeProperty("scroll-snap-type"),this.dragging=!1,this.dragStartPosition=[-1,-1],this.handleScrollEnd()})};this.handleSlotChange=t=>{t.some(i=>[...i.addedNodes,...i.removedNodes].some(a=>this.isCarouselItem(a)&&!a.hasAttribute("data-clone")))&&this.initializeSlides(),this.requestUpdate()}}static{this.styles=[C,fs]}static{this.dependencies={"sl-icon":D}}connectedCallback(){super.connectedCallback(),this.setAttribute("role","region"),this.setAttribute("aria-label",this.localize.term("carousel"))}disconnectedCallback(){super.disconnectedCallback(),this.mutationObserver?.disconnect()}firstUpdated(){this.initializeSlides(),this.mutationObserver=new MutationObserver(this.handleSlotChange),this.mutationObserver.observe(this,{childList:!0,subtree:!0})}willUpdate(t){(t.has("slidesPerMove")||t.has("slidesPerPage"))&&(this.slidesPerMove=Math.min(this.slidesPerMove,this.slidesPerPage))}getPageCount(){let t=this.getSlides().length,{slidesPerPage:r,slidesPerMove:i,loop:a}=this,n=a?t/i:(t-r)/i+1;return Math.ceil(n)}getCurrentPage(){return Math.ceil(this.activeSlide/this.slidesPerMove)}canScrollNext(){return this.loop||this.getCurrentPage()<this.getPageCount()-1}canScrollPrev(){return this.loop||this.getCurrentPage()>0}getSlides({excludeClones:t=!0}={}){return[...this.children].filter(r=>this.isCarouselItem(r)&&(!t||!r.hasAttribute("data-clone")))}handleClick(t){if(this.dragging&&this.dragStartPosition[0]>0&&this.dragStartPosition[1]>0){let r=Math.abs(this.dragStartPosition[0]-t.clientX),i=Math.abs(this.dragStartPosition[1]-t.clientY);Math.sqrt(r*r+i*i)>=10&&t.preventDefault()}}handleKeyDown(t){if(["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(t.key)){let r=t.target,i=this.localize.dir()==="rtl",a=r.closest('[part~="pagination-item"]')!==null,n=t.key==="ArrowDown"||!i&&t.key==="ArrowRight"||i&&t.key==="ArrowLeft",c=t.key==="ArrowUp"||!i&&t.key==="ArrowLeft"||i&&t.key==="ArrowRight";t.preventDefault(),c&&this.previous(),n&&this.next(),t.key==="Home"&&this.goToSlide(0),t.key==="End"&&this.goToSlide(this.getSlides().length-1),a&&this.updateComplete.then(()=>{let d=this.shadowRoot?.querySelector('[part~="pagination-item--active"]');d&&d.focus()})}}handleMouseDragStart(t){this.mouseDragging&&t.button===0&&(t.preventDefault(),document.addEventListener("pointermove",this.handleMouseDrag,{capture:!0,passive:!0}),document.addEventListener("pointerup",this.handleMouseDragEnd,{capture:!0,once:!0}))}handleScroll(){this.scrolling=!0,this.pendingSlideChange||this.synchronizeSlides()}synchronizeSlides(){let t=new IntersectionObserver(r=>{t.disconnect();for(let u of r){let p=u.target;p.toggleAttribute("inert",!u.isIntersecting),p.classList.toggle("--in-view",u.isIntersecting),p.setAttribute("aria-hidden",u.isIntersecting?"false":"true")}let i=r.find(u=>u.isIntersecting);if(!i)return;let a=this.getSlides({excludeClones:!1}),n=this.getSlides().length,c=a.indexOf(i.target),d=this.loop?c-this.slidesPerPage:c;if(this.activeSlide=(Math.ceil(d/this.slidesPerMove)*this.slidesPerMove+n)%n,!this.scrolling&&this.loop&&i.target.hasAttribute("data-clone")){let u=Number(i.target.getAttribute("data-clone"));this.goToSlide(u,"instant")}},{root:this.scrollContainer,threshold:.6});this.getSlides({excludeClones:!1}).forEach(r=>{t.observe(r)})}handleScrollEnd(){!this.scrolling||this.dragging||(this.scrolling=!1,this.pendingSlideChange=!1,this.synchronizeSlides())}isCarouselItem(t){return t instanceof Element&&t.tagName.toLowerCase()==="sl-carousel-item"}initializeSlides(){this.getSlides({excludeClones:!1}).forEach((t,r)=>{t.classList.remove("--in-view"),t.classList.remove("--is-active"),t.setAttribute("role","group"),t.setAttribute("aria-label",this.localize.term("slideNum",r+1)),this.pagination&&(t.setAttribute("id",`slide-${r+1}`),t.setAttribute("role","tabpanel"),t.removeAttribute("aria-label"),t.setAttribute("aria-labelledby",`tab-${r+1}`)),t.hasAttribute("data-clone")&&t.remove()}),this.updateSlidesSnap(),this.loop&&this.createClones(),this.goToSlide(this.activeSlide,"auto"),this.synchronizeSlides()}createClones(){let t=this.getSlides(),r=this.slidesPerPage,i=t.slice(-r),a=t.slice(0,r);i.reverse().forEach((n,c)=>{let d=n.cloneNode(!0);d.setAttribute("data-clone",String(t.length-c-1)),this.prepend(d)}),a.forEach((n,c)=>{let d=n.cloneNode(!0);d.setAttribute("data-clone",String(c)),this.append(d)})}handleSlideChange(){let t=this.getSlides();t.forEach((r,i)=>{r.classList.toggle("--is-active",i===this.activeSlide)}),this.hasUpdated&&this.emit("sl-slide-change",{detail:{index:this.activeSlide,slide:t[this.activeSlide]}})}updateSlidesSnap(){let t=this.getSlides(),r=this.slidesPerMove;t.forEach((i,a)=>{(a+r)%r===0?i.style.removeProperty("scroll-snap-align"):i.style.setProperty("scroll-snap-align","none")})}handleAutoplayChange(){this.autoplayController.stop(),this.autoplay&&this.autoplayController.start(this.autoplayInterval)}previous(t="smooth"){this.goToSlide(this.activeSlide-this.slidesPerMove,t)}next(t="smooth"){this.goToSlide(this.activeSlide+this.slidesPerMove,t)}goToSlide(t,r="smooth"){let{slidesPerPage:i,loop:a}=this,n=this.getSlides(),c=this.getSlides({excludeClones:!1});if(!n.length)return;let d=a?(t+n.length)%n.length:tt(t,0,n.length-i);this.activeSlide=d;let u=this.localize.dir()==="rtl",p=tt(t+(a?i:0)+(u?i-1:0),0,c.length-1),h=c[p];this.scrollToSlide(h,Nr()?"auto":r)}scrollToSlide(t,r="smooth"){this.pendingSlideChange=!0,window.requestAnimationFrame(()=>{if(!this.scrollContainer)return;let i=this.scrollContainer,a=i.getBoundingClientRect(),n=t.getBoundingClientRect(),c=n.left-a.left,d=n.top-a.top;c||d?(this.pendingSlideChange=!0,i.scrollTo({left:c+i.scrollLeft,top:d+i.scrollTop,behavior:r})):this.pendingSlideChange=!1})}render(){let{slidesPerMove:t,scrolling:r}=this,i=this.getPageCount(),a=this.getCurrentPage(),n=this.canScrollPrev(),c=this.canScrollNext(),d=this.localize.dir()==="ltr";return g`
      <div part="base" class="carousel">
        <div
          id="scroll-container"
          part="scroll-container"
          class="${$({carousel__slides:!0,"carousel__slides--horizontal":this.orientation==="horizontal","carousel__slides--vertical":this.orientation==="vertical","carousel__slides--dragging":this.dragging})}"
          style="--slides-per-page: ${this.slidesPerPage};"
          aria-busy="${r?"true":"false"}"
          aria-atomic="true"
          tabindex="0"
          @keydown=${this.handleKeyDown}
          @mousedown="${this.handleMouseDragStart}"
          @scroll="${this.handleScroll}"
          @scrollend=${this.handleScrollEnd}
          @click=${this.handleClick}
        >
          <slot></slot>
        </div>

        ${this.navigation?g`
              <div part="navigation" class="carousel__navigation">
                <button
                  part="navigation-button navigation-button--previous"
                  class="${$({"carousel__navigation-button":!0,"carousel__navigation-button--previous":!0,"carousel__navigation-button--disabled":!n})}"
                  aria-label="${this.localize.term("previousSlide")}"
                  aria-controls="scroll-container"
                  aria-disabled="${n?"false":"true"}"
                  @click=${n?()=>this.previous():null}
                >
                  <slot name="previous-icon">
                    <sl-icon library="system" name="${d?"chevron-left":"chevron-right"}"></sl-icon>
                  </slot>
                </button>

                <button
                  part="navigation-button navigation-button--next"
                  class=${$({"carousel__navigation-button":!0,"carousel__navigation-button--next":!0,"carousel__navigation-button--disabled":!c})}
                  aria-label="${this.localize.term("nextSlide")}"
                  aria-controls="scroll-container"
                  aria-disabled="${c?"false":"true"}"
                  @click=${c?()=>this.next():null}
                >
                  <slot name="next-icon">
                    <sl-icon library="system" name="${d?"chevron-right":"chevron-left"}"></sl-icon>
                  </slot>
                </button>
              </div>
            `:""}
        ${this.pagination?g`
              <div part="pagination" role="tablist" class="carousel__pagination">
                ${hs(ps(i),u=>{let p=u===a;return g`
                    <button
                      part="pagination-item ${p?"pagination-item--active":""}"
                      class="${$({"carousel__pagination-item":!0,"carousel__pagination-item--active":p})}"
                      role="tab"
                      id="tab-${u+1}"
                      aria-controls="slide-${u+1}"
                      aria-selected="${p?"true":"false"}"
                      aria-label="${p?this.localize.term("slideNum",u+1):this.localize.term("goToSlide",u+1,i)}"
                      tabindex=${p?"0":"-1"}
                      @click=${()=>this.goToSlide(u*t)}
                      @keydown=${this.handleKeyDown}
                    ></button>
                  `})}
              </div>
            `:""}
      </div>
    `}};s([l({type:Boolean,reflect:!0})],et.prototype,"loop",2),s([l({type:Boolean,reflect:!0})],et.prototype,"navigation",2),s([l({type:Boolean,reflect:!0})],et.prototype,"pagination",2),s([l({type:Boolean,reflect:!0})],et.prototype,"autoplay",2),s([l({type:Number,attribute:"autoplay-interval"})],et.prototype,"autoplayInterval",2),s([l({type:Number,attribute:"slides-per-page"})],et.prototype,"slidesPerPage",2),s([l({type:Number,attribute:"slides-per-move"})],et.prototype,"slidesPerMove",2),s([l()],et.prototype,"orientation",2),s([l({type:Boolean,reflect:!0,attribute:"mouse-dragging"})],et.prototype,"mouseDragging",2),s([k(".carousel__slides")],et.prototype,"scrollContainer",2),s([k(".carousel__pagination")],et.prototype,"paginationContainer",2),s([S()],et.prototype,"activeSlide",2),s([S()],et.prototype,"scrolling",2),s([S()],et.prototype,"dragging",2),s([de({passive:!0})],et.prototype,"handleScroll",1),s([v("loop",{waitUntilFirstUpdate:!0}),v("slidesPerPage",{waitUntilFirstUpdate:!0})],et.prototype,"initializeSlides",1),s([v("activeSlide")],et.prototype,"handleSlideChange",1),s([v("slidesPerMove")],et.prototype,"updateSlidesSnap",1),s([v("autoplay")],et.prototype,"handleAutoplayChange",1);var Mc=et;et.define("sl-carousel");var ms=_`
  :host {
    --aspect-ratio: inherit;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    max-height: 100%;
    aspect-ratio: var(--aspect-ratio);
    scroll-snap-align: start;
    scroll-snap-stop: always;
  }

  ::slotted(img) {
    width: 100% !important;
    height: 100% !important;
    object-fit: cover;
  }
`;var cr=class extends y{static{this.styles=[C,ms]}connectedCallback(){super.connectedCallback()}render(){return g` <slot></slot> `}};var zc=cr;cr.define("sl-carousel-item");var Xt=(o="value")=>(e,t)=>{let r=e.constructor,i=r.prototype.attributeChangedCallback;r.prototype.attributeChangedCallback=function(a,n,c){let d=r.getPropertyOptions(o),u=typeof d.attribute=="string"?d.attribute:o;if(a===u){let p=d.converter||$e,f=(typeof p=="function"?p:p?.fromAttribute??$e.fromAttribute)(c,d.type);this[o]!==f&&(this[t]=f)}i.call(this,a,n,c)}};var Nt=oe(class extends Wt{constructor(o){if(super(o),o.type!==$t.PROPERTY&&o.type!==$t.ATTRIBUTE&&o.type!==$t.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!eo(o))throw Error("`live` bindings can only contain a single expression")}render(o){return o}update(o,[e]){if(e===yt||e===Z)return e;let t=o.element,r=o.name;if(o.type===$t.PROPERTY){if(e===t[r])return yt}else if(o.type===$t.BOOLEAN_ATTRIBUTE){if(!!e===t.hasAttribute(r))return yt}else if(o.type===$t.ATTRIBUTE&&t.getAttribute(r)===e+"")return yt;return Yi(o),e}});var Ht=_`
  .form-control .form-control__label {
    display: none;
  }

  .form-control .form-control__help-text {
    display: none;
  }

  /* Label */
  .form-control--has-label .form-control__label {
    display: inline-block;
    color: var(--sl-input-label-color);
    margin-bottom: var(--sl-spacing-3x-small);
  }

  .form-control--has-label.form-control--small .form-control__label {
    font-size: var(--sl-input-label-font-size-small);
  }

  .form-control--has-label.form-control--medium .form-control__label {
    font-size: var(--sl-input-label-font-size-medium);
  }

  .form-control--has-label.form-control--large .form-control__label {
    font-size: var(--sl-input-label-font-size-large);
  }

  :host([required]) .form-control--has-label .form-control__label::after {
    content: var(--sl-input-required-content);
    margin-inline-start: var(--sl-input-required-content-offset);
    color: var(--sl-input-required-content-color);
  }

  /* Help text */
  .form-control--has-help-text .form-control__help-text {
    display: block;
    color: var(--sl-input-help-text-color);
    margin-top: var(--sl-spacing-3x-small);
  }

  .form-control--has-help-text.form-control--small .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-small);
  }

  .form-control--has-help-text.form-control--medium .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-medium);
  }

  .form-control--has-help-text.form-control--large .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-large);
  }

  .form-control--has-help-text.form-control--radio-group .form-control__help-text {
    margin-top: var(--sl-spacing-2x-small);
  }
`;var gs=_`
  :host {
    display: inline-block;
  }

  .checkbox {
    position: relative;
    display: inline-flex;
    align-items: flex-start;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    color: var(--sl-input-label-color);
    vertical-align: middle;
    cursor: pointer;
  }

  .checkbox--small {
    --toggle-size: var(--sl-toggle-size-small);
    font-size: var(--sl-input-font-size-small);
  }

  .checkbox--medium {
    --toggle-size: var(--sl-toggle-size-medium);
    font-size: var(--sl-input-font-size-medium);
  }

  .checkbox--large {
    --toggle-size: var(--sl-toggle-size-large);
    font-size: var(--sl-input-font-size-large);
  }

  .checkbox__control {
    flex: 0 0 auto;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--toggle-size);
    height: var(--toggle-size);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
    border-radius: 2px;
    background-color: var(--sl-input-background-color);
    color: var(--sl-color-neutral-0);
    transition:
      var(--sl-transition-fast) border-color,
      var(--sl-transition-fast) background-color,
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) box-shadow;
  }

  .checkbox__input {
    position: absolute;
    opacity: 0;
    padding: 0;
    margin: 0;
    pointer-events: none;
  }

  .checkbox__checked-icon,
  .checkbox__indeterminate-icon {
    display: inline-flex;
    width: var(--toggle-size);
    height: var(--toggle-size);
  }

  /* Hover */
  .checkbox:not(.checkbox--checked):not(.checkbox--disabled) .checkbox__control:hover {
    border-color: var(--sl-input-border-color-hover);
    background-color: var(--sl-input-background-color-hover);
  }

  /* Focus */
  .checkbox:not(.checkbox--checked):not(.checkbox--disabled) .checkbox__input:focus-visible ~ .checkbox__control {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Checked/indeterminate */
  .checkbox--checked .checkbox__control,
  .checkbox--indeterminate .checkbox__control {
    border-color: var(--sl-color-primary-600);
    background-color: var(--sl-color-primary-600);
  }

  /* Checked/indeterminate + hover */
  .checkbox.checkbox--checked:not(.checkbox--disabled) .checkbox__control:hover,
  .checkbox.checkbox--indeterminate:not(.checkbox--disabled) .checkbox__control:hover {
    border-color: var(--sl-color-primary-500);
    background-color: var(--sl-color-primary-500);
  }

  /* Checked/indeterminate + focus */
  .checkbox.checkbox--checked:not(.checkbox--disabled) .checkbox__input:focus-visible ~ .checkbox__control,
  .checkbox.checkbox--indeterminate:not(.checkbox--disabled) .checkbox__input:focus-visible ~ .checkbox__control {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Disabled */
  .checkbox--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .checkbox__label {
    display: inline-block;
    color: var(--sl-input-label-color);
    line-height: var(--toggle-size);
    margin-inline-start: 0.5em;
    user-select: none;
    -webkit-user-select: none;
  }

  :host([required]) .checkbox__label::after {
    content: var(--sl-input-required-content);
    color: var(--sl-input-required-content-color);
    margin-inline-start: var(--sl-input-required-content-offset);
  }
`;var ot=class extends y{constructor(){super(...arguments);this.formControlController=new ut(this,{value:t=>t.checked?t.value||"on":void 0,defaultValue:t=>t.defaultChecked,setValue:(t,r)=>t.checked=r});this.hasSlotController=new K(this,"help-text");this.hasFocus=!1;this.title="";this.name="";this.size="medium";this.disabled=!1;this.checked=!1;this.indeterminate=!1;this.defaultChecked=!1;this.form="";this.required=!1;this.helpText=""}static{this.styles=[C,Ht,gs]}static{this.dependencies={"sl-icon":D}}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleClick(){this.checked=!this.checked,this.indeterminate=!1,this.emit("sl-change")}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleInput(){this.emit("sl-input")}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleStateChange(){this.input.checked=this.checked,this.input.indeterminate=this.indeterminate,this.formControlController.updateValidity()}click(){this.input.click()}focus(t){this.input.focus(t)}blur(){this.input.blur()}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity()}render(){let t=this.hasSlotController.test("help-text"),r=this.helpText?!0:!!t;return g`
      <div
        class=${$({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-help-text":r})}
      >
        <label
          part="base"
          class=${$({checkbox:!0,"checkbox--checked":this.checked,"checkbox--disabled":this.disabled,"checkbox--focused":this.hasFocus,"checkbox--indeterminate":this.indeterminate,"checkbox--small":this.size==="small","checkbox--medium":this.size==="medium","checkbox--large":this.size==="large"})}
        >
          <input
            class="checkbox__input"
            type="checkbox"
            title=${this.title}
            name=${this.name}
            value=${z(this.value)}
            .indeterminate=${Nt(this.indeterminate)}
            .checked=${Nt(this.checked)}
            .disabled=${this.disabled}
            .required=${this.required}
            aria-checked=${this.checked?"true":"false"}
            aria-describedby="help-text"
            @click=${this.handleClick}
            @input=${this.handleInput}
            @invalid=${this.handleInvalid}
            @blur=${this.handleBlur}
            @focus=${this.handleFocus}
          />

          <span
            part="control${this.checked?" control--checked":""}${this.indeterminate?" control--indeterminate":""}"
            class="checkbox__control"
          >
            ${this.checked?g`
                  <sl-icon part="checked-icon" class="checkbox__checked-icon" library="system" name="check"></sl-icon>
                `:""}
            ${!this.checked&&this.indeterminate?g`
                  <sl-icon
                    part="indeterminate-icon"
                    class="checkbox__indeterminate-icon"
                    library="system"
                    name="indeterminate"
                  ></sl-icon>
                `:""}
          </span>

          <div part="label" class="checkbox__label">
            <slot></slot>
          </div>
        </label>

        <div
          aria-hidden=${r?"false":"true"}
          class="form-control__help-text"
          id="help-text"
          part="form-control-help-text"
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};s([k('input[type="checkbox"]')],ot.prototype,"input",2),s([S()],ot.prototype,"hasFocus",2),s([l()],ot.prototype,"title",2),s([l()],ot.prototype,"name",2),s([l()],ot.prototype,"value",2),s([l({reflect:!0})],ot.prototype,"size",2),s([l({type:Boolean,reflect:!0})],ot.prototype,"disabled",2),s([l({type:Boolean,reflect:!0})],ot.prototype,"checked",2),s([l({type:Boolean,reflect:!0})],ot.prototype,"indeterminate",2),s([Xt("checked")],ot.prototype,"defaultChecked",2),s([l({reflect:!0})],ot.prototype,"form",2),s([l({type:Boolean,reflect:!0})],ot.prototype,"required",2),s([l({attribute:"help-text"})],ot.prototype,"helpText",2),s([v("disabled",{waitUntilFirstUpdate:!0})],ot.prototype,"handleDisabledChange",1),s([v(["checked","indeterminate"],{waitUntilFirstUpdate:!0})],ot.prototype,"handleStateChange",1);var Ac=ot;ot.define("sl-checkbox");function Ae(o,e){function t(i){let a=o.getBoundingClientRect(),n=o.ownerDocument.defaultView,c=a.left+n.scrollX,d=a.top+n.scrollY,u=i.pageX-c,p=i.pageY-d;e?.onMove&&e.onMove(u,p)}function r(){document.removeEventListener("pointermove",t),document.removeEventListener("pointerup",r),e?.onStop&&e.onStop()}document.addEventListener("pointermove",t,{passive:!0}),document.addEventListener("pointerup",r),e?.initialEvent instanceof PointerEvent&&t(e.initialEvent)}var bs="important",Lc=" !"+bs,gt=oe(class extends Wt{constructor(o){if(super(o),o.type!==$t.ATTRIBUTE||o.name!=="style"||o.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(o){return Object.keys(o).reduce((e,t)=>{let r=o[t];return r==null?e:e+`${t=t.includes("-")?t:t.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${r};`},"")}update(o,[e]){let{style:t}=o.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(e)),this.render(e);for(let r of this.ft)e[r]==null&&(this.ft.delete(r),r.includes("-")?t.removeProperty(r):t[r]=null);for(let r in e){let i=e[r];if(i!=null){this.ft.add(r);let a=typeof i=="string"&&i.endsWith(Lc);r.includes("-")||a?t.setProperty(r,a?i.slice(0,-11):i,a?bs:""):t[r]=i}}return yt}});function bt(o,e){Hc(o)&&(o="100%");let t=Rc(o);return o=e===360?o:Math.min(e,Math.max(0,parseFloat(o))),t&&(o=parseInt(String(o*e),10)/100),Math.abs(o-e)<1e-6?1:(e===360?o=(o<0?o%e+e:o%e)/parseFloat(String(e)):o=o%e/parseFloat(String(e)),o)}function $r(o){return Math.min(1,Math.max(0,o))}function Hc(o){return typeof o=="string"&&o.indexOf(".")!==-1&&parseFloat(o)===1}function Rc(o){return typeof o=="string"&&o.indexOf("%")!==-1}function no(o){return o=parseFloat(o),(isNaN(o)||o<0||o>1)&&(o=1),o}function Sr(o){return Number(o)<=1?`${Number(o)*100}%`:o}function Le(o){return o.length===1?"0"+o:String(o)}function vs(o,e,t){return{r:bt(o,255)*255,g:bt(e,255)*255,b:bt(t,255)*255}}function Wo(o,e,t){o=bt(o,255),e=bt(e,255),t=bt(t,255);let r=Math.max(o,e,t),i=Math.min(o,e,t),a=0,n=0,c=(r+i)/2;if(r===i)n=0,a=0;else{let d=r-i;switch(n=c>.5?d/(2-r-i):d/(r+i),r){case o:a=(e-t)/d+(e<t?6:0);break;case e:a=(t-o)/d+2;break;case t:a=(o-e)/d+4;break;default:break}a/=6}return{h:a,s:n,l:c}}function Go(o,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?o+(e-o)*(6*t):t<1/2?e:t<2/3?o+(e-o)*(2/3-t)*6:o}function ys(o,e,t){let r,i,a;if(o=bt(o,360),e=bt(e,100),t=bt(t,100),e===0)i=t,a=t,r=t;else{let n=t<.5?t*(1+e):t+e-t*e,c=2*t-n;r=Go(c,n,o+1/3),i=Go(c,n,o),a=Go(c,n,o-1/3)}return{r:r*255,g:i*255,b:a*255}}function jo(o,e,t){o=bt(o,255),e=bt(e,255),t=bt(t,255);let r=Math.max(o,e,t),i=Math.min(o,e,t),a=0,n=r,c=r-i,d=r===0?0:c/r;if(r===i)a=0;else{switch(r){case o:a=(e-t)/c+(e<t?6:0);break;case e:a=(t-o)/c+2;break;case t:a=(o-e)/c+4;break;default:break}a/=6}return{h:a,s:d,v:n}}function xs(o,e,t){o=bt(o,360)*6,e=bt(e,100),t=bt(t,100);let r=Math.floor(o),i=o-r,a=t*(1-e),n=t*(1-i*e),c=t*(1-(1-i)*e),d=r%6,u=[t,n,a,a,c,t][d],p=[c,t,t,n,a,a][d],h=[a,a,c,t,t,n][d];return{r:u*255,g:p*255,b:h*255}}function Ko(o,e,t,r){let i=[Le(Math.round(o).toString(16)),Le(Math.round(e).toString(16)),Le(Math.round(t).toString(16))];return r&&i[0].startsWith(i[0].charAt(1))&&i[1].startsWith(i[1].charAt(1))&&i[2].startsWith(i[2].charAt(1))?i[0].charAt(0)+i[1].charAt(0)+i[2].charAt(0):i.join("")}function ws(o,e,t,r,i){let a=[Le(Math.round(o).toString(16)),Le(Math.round(e).toString(16)),Le(Math.round(t).toString(16)),Le(Oc(r))];return i&&a[0].startsWith(a[0].charAt(1))&&a[1].startsWith(a[1].charAt(1))&&a[2].startsWith(a[2].charAt(1))&&a[3].startsWith(a[3].charAt(1))?a[0].charAt(0)+a[1].charAt(0)+a[2].charAt(0)+a[3].charAt(0):a.join("")}function _s(o,e,t,r){let i=o/100,a=e/100,n=t/100,c=r/100,d=255*(1-i)*(1-c),u=255*(1-a)*(1-c),p=255*(1-n)*(1-c);return{r:d,g:u,b:p}}function Xo(o,e,t){let r=1-o/255,i=1-e/255,a=1-t/255,n=Math.min(r,i,a);return n===1?(r=0,i=0,a=0):(r=(r-n)/(1-n)*100,i=(i-n)/(1-n)*100,a=(a-n)/(1-n)*100),n*=100,{c:Math.round(r),m:Math.round(i),y:Math.round(a),k:Math.round(n)}}function Oc(o){return Math.round(parseFloat(o)*255).toString(16)}function Yo(o){return Rt(o)/255}function Rt(o){return parseInt(o,16)}function ks(o){return{r:o>>16,g:(o&65280)>>8,b:o&255}}var Mr={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",goldenrod:"#daa520",gold:"#ffd700",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavenderblush:"#fff0f5",lavender:"#e6e6fa",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",rebeccapurple:"#663399",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"};function Cs(o){let e={r:0,g:0,b:0},t=1,r=null,i=null,a=null,n=!1,c=!1;return typeof o=="string"&&(o=Fc(o)),typeof o=="object"&&(Bt(o.r)&&Bt(o.g)&&Bt(o.b)?(e=vs(o.r,o.g,o.b),n=!0,c=String(o.r).substr(-1)==="%"?"prgb":"rgb"):Bt(o.h)&&Bt(o.s)&&Bt(o.v)?(r=Sr(o.s),i=Sr(o.v),e=xs(o.h,r,i),n=!0,c="hsv"):Bt(o.h)&&Bt(o.s)&&Bt(o.l)?(r=Sr(o.s),a=Sr(o.l),e=ys(o.h,r,a),n=!0,c="hsl"):Bt(o.c)&&Bt(o.m)&&Bt(o.y)&&Bt(o.k)&&(e=_s(o.c,o.m,o.y,o.k),n=!0,c="cmyk"),Object.prototype.hasOwnProperty.call(o,"a")&&(t=o.a)),t=no(t),{ok:n,format:o.format||c,r:Math.min(255,Math.max(e.r,0)),g:Math.min(255,Math.max(e.g,0)),b:Math.min(255,Math.max(e.b,0)),a:t}}var Ic="[-\\+]?\\d+%?",Dc="[-\\+]?\\d*\\.\\d+%?",He="(?:"+Dc+")|(?:"+Ic+")",Zo="[\\s|\\(]+("+He+")[,|\\s]+("+He+")[,|\\s]+("+He+")\\s*\\)?",lo="[\\s|\\(]+("+He+")[,|\\s]+("+He+")[,|\\s]+("+He+")[,|\\s]+("+He+")\\s*\\)?",Yt={CSS_UNIT:new RegExp(He),rgb:new RegExp("rgb"+Zo),rgba:new RegExp("rgba"+lo),hsl:new RegExp("hsl"+Zo),hsla:new RegExp("hsla"+lo),hsv:new RegExp("hsv"+Zo),hsva:new RegExp("hsva"+lo),cmyk:new RegExp("cmyk"+lo),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/};function Fc(o){if(o=o.trim().toLowerCase(),o.length===0)return!1;let e=!1;if(Mr[o])o=Mr[o],e=!0;else if(o==="transparent")return{r:0,g:0,b:0,a:0,format:"name"};let t=Yt.rgb.exec(o);return t?{r:t[1],g:t[2],b:t[3]}:(t=Yt.rgba.exec(o),t?{r:t[1],g:t[2],b:t[3],a:t[4]}:(t=Yt.hsl.exec(o),t?{h:t[1],s:t[2],l:t[3]}:(t=Yt.hsla.exec(o),t?{h:t[1],s:t[2],l:t[3],a:t[4]}:(t=Yt.hsv.exec(o),t?{h:t[1],s:t[2],v:t[3]}:(t=Yt.hsva.exec(o),t?{h:t[1],s:t[2],v:t[3],a:t[4]}:(t=Yt.cmyk.exec(o),t?{c:t[1],m:t[2],y:t[3],k:t[4]}:(t=Yt.hex8.exec(o),t?{r:Rt(t[1]),g:Rt(t[2]),b:Rt(t[3]),a:Yo(t[4]),format:e?"name":"hex8"}:(t=Yt.hex6.exec(o),t?{r:Rt(t[1]),g:Rt(t[2]),b:Rt(t[3]),format:e?"name":"hex"}:(t=Yt.hex4.exec(o),t?{r:Rt(t[1]+t[1]),g:Rt(t[2]+t[2]),b:Rt(t[3]+t[3]),a:Yo(t[4]+t[4]),format:e?"name":"hex8"}:(t=Yt.hex3.exec(o),t?{r:Rt(t[1]+t[1]),g:Rt(t[2]+t[2]),b:Rt(t[3]+t[3]),format:e?"name":"hex"}:!1))))))))))}function Bt(o){return typeof o=="number"?!Number.isNaN(o):Yt.CSS_UNIT.test(o)}var zr=class o{constructor(e="",t={}){if(e instanceof o)return e;typeof e=="number"&&(e=ks(e)),this.originalInput=e;let r=Cs(e);this.originalInput=e,this.r=r.r,this.g=r.g,this.b=r.b,this.a=r.a,this.roundA=Math.round(100*this.a)/100,this.format=t.format??r.format,this.gradientType=t.gradientType,this.r<1&&(this.r=Math.round(this.r)),this.g<1&&(this.g=Math.round(this.g)),this.b<1&&(this.b=Math.round(this.b)),this.isValid=r.ok}isDark(){return this.getBrightness()<128}isLight(){return!this.isDark()}getBrightness(){let e=this.toRgb();return(e.r*299+e.g*587+e.b*114)/1e3}getLuminance(){let e=this.toRgb(),t,r,i,a=e.r/255,n=e.g/255,c=e.b/255;return a<=.03928?t=a/12.92:t=Math.pow((a+.055)/1.055,2.4),n<=.03928?r=n/12.92:r=Math.pow((n+.055)/1.055,2.4),c<=.03928?i=c/12.92:i=Math.pow((c+.055)/1.055,2.4),.2126*t+.7152*r+.0722*i}getAlpha(){return this.a}setAlpha(e){return this.a=no(e),this.roundA=Math.round(100*this.a)/100,this}isMonochrome(){let{s:e}=this.toHsl();return e===0}toHsv(){let e=jo(this.r,this.g,this.b);return{h:e.h*360,s:e.s,v:e.v,a:this.a}}toHsvString(){let e=jo(this.r,this.g,this.b),t=Math.round(e.h*360),r=Math.round(e.s*100),i=Math.round(e.v*100);return this.a===1?`hsv(${t}, ${r}%, ${i}%)`:`hsva(${t}, ${r}%, ${i}%, ${this.roundA})`}toHsl(){let e=Wo(this.r,this.g,this.b);return{h:e.h*360,s:e.s,l:e.l,a:this.a}}toHslString(){let e=Wo(this.r,this.g,this.b),t=Math.round(e.h*360),r=Math.round(e.s*100),i=Math.round(e.l*100);return this.a===1?`hsl(${t}, ${r}%, ${i}%)`:`hsla(${t}, ${r}%, ${i}%, ${this.roundA})`}toHex(e=!1){return Ko(this.r,this.g,this.b,e)}toHexString(e=!1){return"#"+this.toHex(e)}toHex8(e=!1){return ws(this.r,this.g,this.b,this.a,e)}toHex8String(e=!1){return"#"+this.toHex8(e)}toHexShortString(e=!1){return this.a===1?this.toHexString(e):this.toHex8String(e)}toRgb(){return{r:Math.round(this.r),g:Math.round(this.g),b:Math.round(this.b),a:this.a}}toRgbString(){let e=Math.round(this.r),t=Math.round(this.g),r=Math.round(this.b);return this.a===1?`rgb(${e}, ${t}, ${r})`:`rgba(${e}, ${t}, ${r}, ${this.roundA})`}toPercentageRgb(){let e=t=>`${Math.round(bt(t,255)*100)}%`;return{r:e(this.r),g:e(this.g),b:e(this.b),a:this.a}}toPercentageRgbString(){let e=t=>Math.round(bt(t,255)*100);return this.a===1?`rgb(${e(this.r)}%, ${e(this.g)}%, ${e(this.b)}%)`:`rgba(${e(this.r)}%, ${e(this.g)}%, ${e(this.b)}%, ${this.roundA})`}toCmyk(){return{...Xo(this.r,this.g,this.b)}}toCmykString(){let{c:e,m:t,y:r,k:i}=Xo(this.r,this.g,this.b);return`cmyk(${e}, ${t}, ${r}, ${i})`}toName(){if(this.a===0)return"transparent";if(this.a<1)return!1;let e="#"+Ko(this.r,this.g,this.b,!1);for(let[t,r]of Object.entries(Mr))if(e===r)return t;return!1}toString(e){let t=!!e;e=e??this.format;let r=!1,i=this.a<1&&this.a>=0;return!t&&i&&(e.startsWith("hex")||e==="name")?e==="name"&&this.a===0?this.toName():this.toRgbString():(e==="rgb"&&(r=this.toRgbString()),e==="prgb"&&(r=this.toPercentageRgbString()),(e==="hex"||e==="hex6")&&(r=this.toHexString()),e==="hex3"&&(r=this.toHexString(!0)),e==="hex4"&&(r=this.toHex8String(!0)),e==="hex8"&&(r=this.toHex8String()),e==="name"&&(r=this.toName()),e==="hsl"&&(r=this.toHslString()),e==="hsv"&&(r=this.toHsvString()),e==="cmyk"&&(r=this.toCmykString()),r||this.toHexString())}toNumber(){return(Math.round(this.r)<<16)+(Math.round(this.g)<<8)+Math.round(this.b)}clone(){return new o(this.toString())}lighten(e=10){let t=this.toHsl();return t.l+=e/100,t.l=$r(t.l),new o(t)}brighten(e=10){let t=this.toRgb();return t.r=Math.max(0,Math.min(255,t.r-Math.round(255*-(e/100)))),t.g=Math.max(0,Math.min(255,t.g-Math.round(255*-(e/100)))),t.b=Math.max(0,Math.min(255,t.b-Math.round(255*-(e/100)))),new o(t)}darken(e=10){let t=this.toHsl();return t.l-=e/100,t.l=$r(t.l),new o(t)}tint(e=10){return this.mix("white",e)}shade(e=10){return this.mix("black",e)}desaturate(e=10){let t=this.toHsl();return t.s-=e/100,t.s=$r(t.s),new o(t)}saturate(e=10){let t=this.toHsl();return t.s+=e/100,t.s=$r(t.s),new o(t)}greyscale(){return this.desaturate(100)}spin(e){let t=this.toHsl(),r=(t.h+e)%360;return t.h=r<0?360+r:r,new o(t)}mix(e,t=50){let r=this.toRgb(),i=new o(e).toRgb(),a=t/100,n={r:(i.r-r.r)*a+r.r,g:(i.g-r.g)*a+r.g,b:(i.b-r.b)*a+r.b,a:(i.a-r.a)*a+r.a};return new o(n)}analogous(e=6,t=30){let r=this.toHsl(),i=360/t,a=[this];for(r.h=(r.h-(i*e>>1)+720)%360;--e;)r.h=(r.h+i)%360,a.push(new o(r));return a}complement(){let e=this.toHsl();return e.h=(e.h+180)%360,new o(e)}monochromatic(e=6){let t=this.toHsv(),{h:r}=t,{s:i}=t,{v:a}=t,n=[],c=1/e;for(;e--;)n.push(new o({h:r,s:i,v:a})),a=(a+c)%1;return n}splitcomplement(){let e=this.toHsl(),{h:t}=e;return[this,new o({h:(t+72)%360,s:e.s,l:e.l}),new o({h:(t+216)%360,s:e.s,l:e.l})]}onBackground(e){let t=this.toRgb(),r=new o(e).toRgb(),i=t.a+r.a*(1-t.a);return new o({r:(t.r*t.a+r.r*r.a*(1-t.a))/i,g:(t.g*t.a+r.g*r.a*(1-t.a))/i,b:(t.b*t.a+r.b*r.a*(1-t.a))/i,a:i})}triad(){return this.polyad(3)}tetrad(){return this.polyad(4)}polyad(e){let t=this.toHsl(),{h:r}=t,i=[this],a=360/e;for(let n=1;n<e;n++)i.push(new o({h:(r+n*a)%360,s:t.s,l:t.l}));return i}equals(e){let t=new o(e);return this.format==="cmyk"||t.format==="cmyk"?this.toCmykString()===t.toCmykString():this.toRgbString()===t.toRgbString()}};function*co(o=document.activeElement){o!=null&&(yield o,"shadowRoot"in o&&o.shadowRoot&&o.shadowRoot.mode!=="closed"&&(yield*co(o.shadowRoot.activeElement)))}function uo(){return[...co()].pop()}var Es=new WeakMap;function Ts(o){let e=Es.get(o);return e||(e=window.getComputedStyle(o,null),Es.set(o,e)),e}function Pc(o){if(typeof o.checkVisibility=="function")return o.checkVisibility({checkOpacity:!1,checkVisibilityCSS:!0});let e=Ts(o);return e.visibility!=="hidden"&&e.display!=="none"}function Vc(o){let e=Ts(o),{overflowY:t,overflowX:r}=e;return t==="scroll"||r==="scroll"?!0:t!=="auto"||r!=="auto"?!1:o.scrollHeight>o.clientHeight&&t==="auto"||o.scrollWidth>o.clientWidth&&r==="auto"}function Nc(o){let e=o.tagName.toLowerCase(),t=Number(o.getAttribute("tabindex"));if(o.hasAttribute("tabindex")&&(isNaN(t)||t<=-1)||o.hasAttribute("disabled")||o.closest("[inert]"))return!1;if(e==="input"&&o.getAttribute("type")==="radio"){let a=o.getRootNode(),n=`input[type='radio'][name="${o.getAttribute("name")}"]`,c=a.querySelector(`${n}:checked`);return c?c===o:a.querySelector(n)===o}return Pc(o)?(e==="audio"||e==="video")&&o.hasAttribute("controls")||o.hasAttribute("tabindex")||o.hasAttribute("contenteditable")&&o.getAttribute("contenteditable")!=="false"||["button","input","select","textarea","a","audio","video","summary","iframe"].includes(e)?!0:Vc(o):!1}function $s(o){let e=ho(o),t=e[0]??null,r=e[e.length-1]??null;return{start:t,end:r}}function Bc(o,e){return o.getRootNode({composed:!0})?.host!==e}function ho(o){let e=new WeakMap,t=[];function r(i){if(i instanceof Element){if(i.hasAttribute("inert")||i.closest("[inert]")||e.has(i))return;e.set(i,!0),!t.includes(i)&&Nc(i)&&t.push(i),i instanceof HTMLSlotElement&&Bc(i,o)&&i.assignedElements({flatten:!0}).forEach(a=>{r(a)}),i.shadowRoot!==null&&i.shadowRoot.mode==="open"&&r(i.shadowRoot)}for(let a of i.children)r(a)}return r(o),t.sort((i,a)=>{let n=Number(i.getAttribute("tabindex"))||0;return(Number(a.getAttribute("tabindex"))||0)-n})}var ue=Math.min,St=Math.max,Lr=Math.round,Hr=Math.floor,ie=o=>({x:o,y:o}),Uc={left:"right",right:"left",bottom:"top",top:"bottom"},qc={start:"end",end:"start"};function fo(o,e,t){return St(o,ue(e,t))}function Ue(o,e){return typeof o=="function"?o(e):o}function we(o){return o.split("-")[0]}function qe(o){return o.split("-")[1]}function Qo(o){return o==="x"?"y":"x"}function mo(o){return o==="y"?"height":"width"}var Gc=new Set(["top","bottom"]);function he(o){return Gc.has(we(o))?"y":"x"}function go(o){return Qo(he(o))}function zs(o,e,t){t===void 0&&(t=!1);let r=qe(o),i=go(o),a=mo(i),n=i==="x"?r===(t?"end":"start")?"right":"left":r==="start"?"bottom":"top";return e.reference[a]>e.floating[a]&&(n=Ar(n)),[n,Ar(n)]}function As(o){let e=Ar(o);return[po(o),e,po(e)]}function po(o){return o.replace(/start|end/g,e=>qc[e])}var Ss=["left","right"],Ms=["right","left"],Wc=["top","bottom"],jc=["bottom","top"];function Kc(o,e,t){switch(o){case"top":case"bottom":return t?e?Ms:Ss:e?Ss:Ms;case"left":case"right":return e?Wc:jc;default:return[]}}function Ls(o,e,t,r){let i=qe(o),a=Kc(we(o),t==="start",r);return i&&(a=a.map(n=>n+"-"+i),e&&(a=a.concat(a.map(po)))),a}function Ar(o){return o.replace(/left|right|bottom|top/g,e=>Uc[e])}function Xc(o){return{top:0,right:0,bottom:0,left:0,...o}}function Jo(o){return typeof o!="number"?Xc(o):{top:o,right:o,bottom:o,left:o}}function Ge(o){let{x:e,y:t,width:r,height:i}=o;return{width:r,height:i,top:t,left:e,right:e+r,bottom:t+i,x:e,y:t}}function Hs(o,e,t){let{reference:r,floating:i}=o,a=he(e),n=go(e),c=mo(n),d=we(e),u=a==="y",p=r.x+r.width/2-i.width/2,h=r.y+r.height/2-i.height/2,f=r[c]/2-i[c]/2,m;switch(d){case"top":m={x:p,y:r.y-i.height};break;case"bottom":m={x:p,y:r.y+r.height};break;case"right":m={x:r.x+r.width,y:h};break;case"left":m={x:r.x-i.width,y:h};break;default:m={x:r.x,y:r.y}}switch(qe(e)){case"start":m[n]-=f*(t&&u?-1:1);break;case"end":m[n]+=f*(t&&u?-1:1);break}return m}async function Rs(o,e){var t;e===void 0&&(e={});let{x:r,y:i,platform:a,rects:n,elements:c,strategy:d}=o,{boundary:u="clippingAncestors",rootBoundary:p="viewport",elementContext:h="floating",altBoundary:f=!1,padding:m=0}=Ue(e,o),b=Jo(m),M=c[f?h==="floating"?"reference":"floating":h],H=Ge(await a.getClippingRect({element:(t=await(a.isElement==null?void 0:a.isElement(M)))==null||t?M:M.contextElement||await(a.getDocumentElement==null?void 0:a.getDocumentElement(c.floating)),boundary:u,rootBoundary:p,strategy:d})),E=h==="floating"?{x:r,y:i,width:n.floating.width,height:n.floating.height}:n.reference,A=await(a.getOffsetParent==null?void 0:a.getOffsetParent(c.floating)),w=await(a.isElement==null?void 0:a.isElement(A))?await(a.getScale==null?void 0:a.getScale(A))||{x:1,y:1}:{x:1,y:1},T=Ge(a.convertOffsetParentRelativeRectToViewportRelativeRect?await a.convertOffsetParentRelativeRectToViewportRelativeRect({elements:c,rect:E,offsetParent:A,strategy:d}):E);return{top:(H.top-T.top+b.top)/w.y,bottom:(T.bottom-H.bottom+b.bottom)/w.y,left:(H.left-T.left+b.left)/w.x,right:(T.right-H.right+b.right)/w.x}}var Os=async(o,e,t)=>{let{placement:r="bottom",strategy:i="absolute",middleware:a=[],platform:n}=t,c=a.filter(Boolean),d=await(n.isRTL==null?void 0:n.isRTL(e)),u=await n.getElementRects({reference:o,floating:e,strategy:i}),{x:p,y:h}=Hs(u,r,d),f=r,m={},b=0;for(let M=0;M<c.length;M++){var x;let{name:H,fn:E}=c[M],{x:A,y:w,data:T,reset:R}=await E({x:p,y:h,initialPlacement:r,placement:f,strategy:i,middlewareData:m,rects:u,platform:{...n,detectOverflow:(x=n.detectOverflow)!=null?x:Rs},elements:{reference:o,floating:e}});p=A??p,h=w??h,m={...m,[H]:{...m[H],...T}},R&&b<=50&&(b++,typeof R=="object"&&(R.placement&&(f=R.placement),R.rects&&(u=R.rects===!0?await n.getElementRects({reference:o,floating:e,strategy:i}):R.rects),{x:p,y:h}=Hs(u,f,d)),M=-1)}return{x:p,y:h,placement:f,strategy:i,middlewareData:m}},Is=o=>({name:"arrow",options:o,async fn(e){let{x:t,y:r,placement:i,rects:a,platform:n,elements:c,middlewareData:d}=e,{element:u,padding:p=0}=Ue(o,e)||{};if(u==null)return{};let h=Jo(p),f={x:t,y:r},m=go(i),b=mo(m),x=await n.getDimensions(u),M=m==="y",H=M?"top":"left",E=M?"bottom":"right",A=M?"clientHeight":"clientWidth",w=a.reference[b]+a.reference[m]-f[m]-a.floating[b],T=f[m]-a.reference[m],R=await(n.getOffsetParent==null?void 0:n.getOffsetParent(u)),P=R?R[A]:0;(!P||!await(n.isElement==null?void 0:n.isElement(R)))&&(P=c.floating[A]||a.floating[b]);let G=w/2-T/2,I=P/2-x[b]/2-1,O=ue(h[H],I),mt=ue(h[E],I),ct=O,kt=P-x[b]-mt,dt=P/2-x[b]/2+G,Gt=fo(ct,dt,kt),ce=!d.arrow&&qe(i)!=null&&dt!==Gt&&a.reference[b]/2-(dt<ct?O:mt)-x[b]/2<0,ee=ce?dt<ct?dt-ct:dt-kt:0;return{[m]:f[m]+ee,data:{[m]:Gt,centerOffset:dt-Gt-ee,...ce&&{alignmentOffset:ee}},reset:ce}}});var Ds=function(o){return o===void 0&&(o={}),{name:"flip",options:o,async fn(e){var t,r;let{placement:i,middlewareData:a,rects:n,initialPlacement:c,platform:d,elements:u}=e,{mainAxis:p=!0,crossAxis:h=!0,fallbackPlacements:f,fallbackStrategy:m="bestFit",fallbackAxisSideDirection:b="none",flipAlignment:x=!0,...M}=Ue(o,e);if((t=a.arrow)!=null&&t.alignmentOffset)return{};let H=we(i),E=he(c),A=we(c)===c,w=await(d.isRTL==null?void 0:d.isRTL(u.floating)),T=f||(A||!x?[Ar(c)]:As(c)),R=b!=="none";!f&&R&&T.push(...Ls(c,x,b,w));let P=[c,...T],G=await d.detectOverflow(e,M),I=[],O=((r=a.flip)==null?void 0:r.overflows)||[];if(p&&I.push(G[H]),h){let dt=zs(i,n,w);I.push(G[dt[0]],G[dt[1]])}if(O=[...O,{placement:i,overflows:I}],!I.every(dt=>dt<=0)){var mt,ct;let dt=(((mt=a.flip)==null?void 0:mt.index)||0)+1,Gt=P[dt];if(Gt&&(!(h==="alignment"?E!==he(Gt):!1)||O.every(re=>he(re.placement)===E?re.overflows[0]>0:!0)))return{data:{index:dt,overflows:O},reset:{placement:Gt}};let ce=(ct=O.filter(ee=>ee.overflows[0]<=0).sort((ee,re)=>ee.overflows[1]-re.overflows[1])[0])==null?void 0:ct.placement;if(!ce)switch(m){case"bestFit":{var kt;let ee=(kt=O.filter(re=>{if(R){let Te=he(re.placement);return Te===E||Te==="y"}return!0}).map(re=>[re.placement,re.overflows.filter(Te=>Te>0).reduce((Te,rn)=>Te+rn,0)]).sort((re,Te)=>re[1]-Te[1])[0])==null?void 0:kt[0];ee&&(ce=ee);break}case"initialPlacement":ce=c;break}if(i!==ce)return{reset:{placement:ce}}}return{}}}};var Yc=new Set(["left","top"]);async function Zc(o,e){let{placement:t,platform:r,elements:i}=o,a=await(r.isRTL==null?void 0:r.isRTL(i.floating)),n=we(t),c=qe(t),d=he(t)==="y",u=Yc.has(n)?-1:1,p=a&&d?-1:1,h=Ue(e,o),{mainAxis:f,crossAxis:m,alignmentAxis:b}=typeof h=="number"?{mainAxis:h,crossAxis:0,alignmentAxis:null}:{mainAxis:h.mainAxis||0,crossAxis:h.crossAxis||0,alignmentAxis:h.alignmentAxis};return c&&typeof b=="number"&&(m=c==="end"?b*-1:b),d?{x:m*p,y:f*u}:{x:f*u,y:m*p}}var Fs=function(o){return o===void 0&&(o=0),{name:"offset",options:o,async fn(e){var t,r;let{x:i,y:a,placement:n,middlewareData:c}=e,d=await Zc(e,o);return n===((t=c.offset)==null?void 0:t.placement)&&(r=c.arrow)!=null&&r.alignmentOffset?{}:{x:i+d.x,y:a+d.y,data:{...d,placement:n}}}}},Ps=function(o){return o===void 0&&(o={}),{name:"shift",options:o,async fn(e){let{x:t,y:r,placement:i,platform:a}=e,{mainAxis:n=!0,crossAxis:c=!1,limiter:d={fn:H=>{let{x:E,y:A}=H;return{x:E,y:A}}},...u}=Ue(o,e),p={x:t,y:r},h=await a.detectOverflow(e,u),f=he(we(i)),m=Qo(f),b=p[m],x=p[f];if(n){let H=m==="y"?"top":"left",E=m==="y"?"bottom":"right",A=b+h[H],w=b-h[E];b=fo(A,b,w)}if(c){let H=f==="y"?"top":"left",E=f==="y"?"bottom":"right",A=x+h[H],w=x-h[E];x=fo(A,x,w)}let M=d.fn({...e,[m]:b,[f]:x});return{...M,data:{x:M.x-t,y:M.y-r,enabled:{[m]:n,[f]:c}}}}}};var Vs=function(o){return o===void 0&&(o={}),{name:"size",options:o,async fn(e){var t,r;let{placement:i,rects:a,platform:n,elements:c}=e,{apply:d=()=>{},...u}=Ue(o,e),p=await n.detectOverflow(e,u),h=we(i),f=qe(i),m=he(i)==="y",{width:b,height:x}=a.floating,M,H;h==="top"||h==="bottom"?(M=h,H=f===(await(n.isRTL==null?void 0:n.isRTL(c.floating))?"start":"end")?"left":"right"):(H=h,M=f==="end"?"top":"bottom");let E=x-p.top-p.bottom,A=b-p.left-p.right,w=ue(x-p[M],E),T=ue(b-p[H],A),R=!e.middlewareData.shift,P=w,G=T;if((t=e.middlewareData.shift)!=null&&t.enabled.x&&(G=A),(r=e.middlewareData.shift)!=null&&r.enabled.y&&(P=E),R&&!f){let O=St(p.left,0),mt=St(p.right,0),ct=St(p.top,0),kt=St(p.bottom,0);m?G=b-2*(O!==0||mt!==0?O+mt:St(p.left,p.right)):P=x-2*(ct!==0||kt!==0?ct+kt:St(p.top,p.bottom))}await d({...e,availableWidth:G,availableHeight:P});let I=await n.getDimensions(c.floating);return b!==I.width||x!==I.height?{reset:{rects:!0}}:{}}}};function bo(){return typeof window<"u"}function We(o){return Bs(o)?(o.nodeName||"").toLowerCase():"#document"}function Ot(o){var e;return(o==null||(e=o.ownerDocument)==null?void 0:e.defaultView)||window}function se(o){var e;return(e=(Bs(o)?o.ownerDocument:o.document)||window.document)==null?void 0:e.documentElement}function Bs(o){return bo()?o instanceof Node||o instanceof Ot(o).Node:!1}function Zt(o){return bo()?o instanceof Element||o instanceof Ot(o).Element:!1}function ae(o){return bo()?o instanceof HTMLElement||o instanceof Ot(o).HTMLElement:!1}function Ns(o){return!bo()||typeof ShadowRoot>"u"?!1:o instanceof ShadowRoot||o instanceof Ot(o).ShadowRoot}var Qc=new Set(["inline","contents"]);function ur(o){let{overflow:e,overflowX:t,overflowY:r,display:i}=Qt(o);return/auto|scroll|overlay|hidden|clip/.test(e+r+t)&&!Qc.has(i)}var Jc=new Set(["table","td","th"]);function Us(o){return Jc.has(We(o))}var td=[":popover-open",":modal"];function Rr(o){return td.some(e=>{try{return o.matches(e)}catch{return!1}})}var ed=["transform","translate","scale","rotate","perspective"],rd=["transform","translate","scale","rotate","perspective","filter"],od=["paint","layout","strict","content"];function hr(o){let e=vo(),t=Zt(o)?Qt(o):o;return ed.some(r=>t[r]?t[r]!=="none":!1)||(t.containerType?t.containerType!=="normal":!1)||!e&&(t.backdropFilter?t.backdropFilter!=="none":!1)||!e&&(t.filter?t.filter!=="none":!1)||rd.some(r=>(t.willChange||"").includes(r))||od.some(r=>(t.contain||"").includes(r))}function qs(o){let e=_e(o);for(;ae(e)&&!je(e);){if(hr(e))return e;if(Rr(e))return null;e=_e(e)}return null}function vo(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}var id=new Set(["html","body","#document"]);function je(o){return id.has(We(o))}function Qt(o){return Ot(o).getComputedStyle(o)}function Or(o){return Zt(o)?{scrollLeft:o.scrollLeft,scrollTop:o.scrollTop}:{scrollLeft:o.scrollX,scrollTop:o.scrollY}}function _e(o){if(We(o)==="html")return o;let e=o.assignedSlot||o.parentNode||Ns(o)&&o.host||se(o);return Ns(e)?e.host:e}function Gs(o){let e=_e(o);return je(e)?o.ownerDocument?o.ownerDocument.body:o.body:ae(e)&&ur(e)?e:Gs(e)}function dr(o,e,t){var r;e===void 0&&(e=[]),t===void 0&&(t=!0);let i=Gs(o),a=i===((r=o.ownerDocument)==null?void 0:r.body),n=Ot(i);if(a){let c=yo(n);return e.concat(n,n.visualViewport||[],ur(i)?i:[],c&&t?dr(c):[])}return e.concat(i,dr(i,[],t))}function yo(o){return o.parent&&Object.getPrototypeOf(o.parent)?o.frameElement:null}function Xs(o){let e=Qt(o),t=parseFloat(e.width)||0,r=parseFloat(e.height)||0,i=ae(o),a=i?o.offsetWidth:t,n=i?o.offsetHeight:r,c=Lr(t)!==a||Lr(r)!==n;return c&&(t=a,r=n),{width:t,height:r,$:c}}function ei(o){return Zt(o)?o:o.contextElement}function pr(o){let e=ei(o);if(!ae(e))return ie(1);let t=e.getBoundingClientRect(),{width:r,height:i,$:a}=Xs(e),n=(a?Lr(t.width):t.width)/r,c=(a?Lr(t.height):t.height)/i;return(!n||!Number.isFinite(n))&&(n=1),(!c||!Number.isFinite(c))&&(c=1),{x:n,y:c}}var sd=ie(0);function Ys(o){let e=Ot(o);return!vo()||!e.visualViewport?sd:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function ad(o,e,t){return e===void 0&&(e=!1),!t||e&&t!==Ot(o)?!1:e}function Ke(o,e,t,r){e===void 0&&(e=!1),t===void 0&&(t=!1);let i=o.getBoundingClientRect(),a=ei(o),n=ie(1);e&&(r?Zt(r)&&(n=pr(r)):n=pr(o));let c=ad(a,t,r)?Ys(a):ie(0),d=(i.left+c.x)/n.x,u=(i.top+c.y)/n.y,p=i.width/n.x,h=i.height/n.y;if(a){let f=Ot(a),m=r&&Zt(r)?Ot(r):r,b=f,x=yo(b);for(;x&&r&&m!==b;){let M=pr(x),H=x.getBoundingClientRect(),E=Qt(x),A=H.left+(x.clientLeft+parseFloat(E.paddingLeft))*M.x,w=H.top+(x.clientTop+parseFloat(E.paddingTop))*M.y;d*=M.x,u*=M.y,p*=M.x,h*=M.y,d+=A,u+=w,b=Ot(x),x=yo(b)}}return Ge({width:p,height:h,x:d,y:u})}function xo(o,e){let t=Or(o).scrollLeft;return e?e.left+t:Ke(se(o)).left+t}function Zs(o,e){let t=o.getBoundingClientRect(),r=t.left+e.scrollLeft-xo(o,t),i=t.top+e.scrollTop;return{x:r,y:i}}function nd(o){let{elements:e,rect:t,offsetParent:r,strategy:i}=o,a=i==="fixed",n=se(r),c=e?Rr(e.floating):!1;if(r===n||c&&a)return t;let d={scrollLeft:0,scrollTop:0},u=ie(1),p=ie(0),h=ae(r);if((h||!h&&!a)&&((We(r)!=="body"||ur(n))&&(d=Or(r)),ae(r))){let m=Ke(r);u=pr(r),p.x=m.x+r.clientLeft,p.y=m.y+r.clientTop}let f=n&&!h&&!a?Zs(n,d):ie(0);return{width:t.width*u.x,height:t.height*u.y,x:t.x*u.x-d.scrollLeft*u.x+p.x+f.x,y:t.y*u.y-d.scrollTop*u.y+p.y+f.y}}function ld(o){return Array.from(o.getClientRects())}function cd(o){let e=se(o),t=Or(o),r=o.ownerDocument.body,i=St(e.scrollWidth,e.clientWidth,r.scrollWidth,r.clientWidth),a=St(e.scrollHeight,e.clientHeight,r.scrollHeight,r.clientHeight),n=-t.scrollLeft+xo(o),c=-t.scrollTop;return Qt(r).direction==="rtl"&&(n+=St(e.clientWidth,r.clientWidth)-i),{width:i,height:a,x:n,y:c}}var Ws=25;function dd(o,e){let t=Ot(o),r=se(o),i=t.visualViewport,a=r.clientWidth,n=r.clientHeight,c=0,d=0;if(i){a=i.width,n=i.height;let p=vo();(!p||p&&e==="fixed")&&(c=i.offsetLeft,d=i.offsetTop)}let u=xo(r);if(u<=0){let p=r.ownerDocument,h=p.body,f=getComputedStyle(h),m=p.compatMode==="CSS1Compat"&&parseFloat(f.marginLeft)+parseFloat(f.marginRight)||0,b=Math.abs(r.clientWidth-h.clientWidth-m);b<=Ws&&(a-=b)}else u<=Ws&&(a+=u);return{width:a,height:n,x:c,y:d}}var ud=new Set(["absolute","fixed"]);function hd(o,e){let t=Ke(o,!0,e==="fixed"),r=t.top+o.clientTop,i=t.left+o.clientLeft,a=ae(o)?pr(o):ie(1),n=o.clientWidth*a.x,c=o.clientHeight*a.y,d=i*a.x,u=r*a.y;return{width:n,height:c,x:d,y:u}}function js(o,e,t){let r;if(e==="viewport")r=dd(o,t);else if(e==="document")r=cd(se(o));else if(Zt(e))r=hd(e,t);else{let i=Ys(o);r={x:e.x-i.x,y:e.y-i.y,width:e.width,height:e.height}}return Ge(r)}function Qs(o,e){let t=_e(o);return t===e||!Zt(t)||je(t)?!1:Qt(t).position==="fixed"||Qs(t,e)}function pd(o,e){let t=e.get(o);if(t)return t;let r=dr(o,[],!1).filter(c=>Zt(c)&&We(c)!=="body"),i=null,a=Qt(o).position==="fixed",n=a?_e(o):o;for(;Zt(n)&&!je(n);){let c=Qt(n),d=hr(n);!d&&c.position==="fixed"&&(i=null),(a?!d&&!i:!d&&c.position==="static"&&!!i&&ud.has(i.position)||ur(n)&&!d&&Qs(o,n))?r=r.filter(p=>p!==n):i=c,n=_e(n)}return e.set(o,r),r}function fd(o){let{element:e,boundary:t,rootBoundary:r,strategy:i}=o,n=[...t==="clippingAncestors"?Rr(e)?[]:pd(e,this._c):[].concat(t),r],c=n[0],d=n.reduce((u,p)=>{let h=js(e,p,i);return u.top=St(h.top,u.top),u.right=ue(h.right,u.right),u.bottom=ue(h.bottom,u.bottom),u.left=St(h.left,u.left),u},js(e,c,i));return{width:d.right-d.left,height:d.bottom-d.top,x:d.left,y:d.top}}function md(o){let{width:e,height:t}=Xs(o);return{width:e,height:t}}function gd(o,e,t){let r=ae(e),i=se(e),a=t==="fixed",n=Ke(o,!0,a,e),c={scrollLeft:0,scrollTop:0},d=ie(0);function u(){d.x=xo(i)}if(r||!r&&!a)if((We(e)!=="body"||ur(i))&&(c=Or(e)),r){let m=Ke(e,!0,a,e);d.x=m.x+e.clientLeft,d.y=m.y+e.clientTop}else i&&u();a&&!r&&i&&u();let p=i&&!r&&!a?Zs(i,c):ie(0),h=n.left+c.scrollLeft-d.x-p.x,f=n.top+c.scrollTop-d.y-p.y;return{x:h,y:f,width:n.width,height:n.height}}function ti(o){return Qt(o).position==="static"}function Ks(o,e){if(!ae(o)||Qt(o).position==="fixed")return null;if(e)return e(o);let t=o.offsetParent;return se(o)===t&&(t=t.ownerDocument.body),t}function Js(o,e){let t=Ot(o);if(Rr(o))return t;if(!ae(o)){let i=_e(o);for(;i&&!je(i);){if(Zt(i)&&!ti(i))return i;i=_e(i)}return t}let r=Ks(o,e);for(;r&&Us(r)&&ti(r);)r=Ks(r,e);return r&&je(r)&&ti(r)&&!hr(r)?t:r||qs(o)||t}var bd=async function(o){let e=this.getOffsetParent||Js,t=this.getDimensions,r=await t(o.floating);return{reference:gd(o.reference,await e(o.floating),o.strategy),floating:{x:0,y:0,width:r.width,height:r.height}}};function vd(o){return Qt(o).direction==="rtl"}var Ir={convertOffsetParentRelativeRectToViewportRelativeRect:nd,getDocumentElement:se,getClippingRect:fd,getOffsetParent:Js,getElementRects:bd,getClientRects:ld,getDimensions:md,getScale:pr,isElement:Zt,isRTL:vd};function ta(o,e){return o.x===e.x&&o.y===e.y&&o.width===e.width&&o.height===e.height}function yd(o,e){let t=null,r,i=se(o);function a(){var c;clearTimeout(r),(c=t)==null||c.disconnect(),t=null}function n(c,d){c===void 0&&(c=!1),d===void 0&&(d=1),a();let u=o.getBoundingClientRect(),{left:p,top:h,width:f,height:m}=u;if(c||e(),!f||!m)return;let b=Hr(h),x=Hr(i.clientWidth-(p+f)),M=Hr(i.clientHeight-(h+m)),H=Hr(p),A={rootMargin:-b+"px "+-x+"px "+-M+"px "+-H+"px",threshold:St(0,ue(1,d))||1},w=!0;function T(R){let P=R[0].intersectionRatio;if(P!==d){if(!w)return n();P?n(!1,P):r=setTimeout(()=>{n(!1,1e-7)},1e3)}P===1&&!ta(u,o.getBoundingClientRect())&&n(),w=!1}try{t=new IntersectionObserver(T,{...A,root:i.ownerDocument})}catch{t=new IntersectionObserver(T,A)}t.observe(o)}return n(!0),a}function ea(o,e,t,r){r===void 0&&(r={});let{ancestorScroll:i=!0,ancestorResize:a=!0,elementResize:n=typeof ResizeObserver=="function",layoutShift:c=typeof IntersectionObserver=="function",animationFrame:d=!1}=r,u=ei(o),p=i||a?[...u?dr(u):[],...dr(e)]:[];p.forEach(H=>{i&&H.addEventListener("scroll",t,{passive:!0}),a&&H.addEventListener("resize",t)});let h=u&&c?yd(u,t):null,f=-1,m=null;n&&(m=new ResizeObserver(H=>{let[E]=H;E&&E.target===u&&m&&(m.unobserve(e),cancelAnimationFrame(f),f=requestAnimationFrame(()=>{var A;(A=m)==null||A.observe(e)})),t()}),u&&!d&&m.observe(u),m.observe(e));let b,x=d?Ke(o):null;d&&M();function M(){let H=Ke(o);x&&!ta(x,H)&&t(),x=H,b=requestAnimationFrame(M)}return t(),()=>{var H;p.forEach(E=>{i&&E.removeEventListener("scroll",t),a&&E.removeEventListener("resize",t)}),h?.(),(H=m)==null||H.disconnect(),m=null,d&&cancelAnimationFrame(b)}}var ra=Fs;var oa=Ps,ia=Ds,ri=Vs;var sa=Is;var aa=(o,e,t)=>{let r=new Map,i={platform:Ir,...t},a={...i.platform,_c:r};return Os(o,e,{...i,platform:a})};function na(o){return xd(o)}function oi(o){return o.assignedSlot?o.assignedSlot:o.parentNode instanceof ShadowRoot?o.parentNode.host:o.parentNode}function xd(o){for(let e=o;e;e=oi(e))if(e instanceof Element&&getComputedStyle(e).display==="none")return null;for(let e=oi(o);e;e=oi(e)){if(!(e instanceof Element))continue;let t=getComputedStyle(e);if(t.display!=="contents"&&(t.position!=="static"||hr(t)||e.tagName==="BODY"))return e}return null}var la=_`
  :host {
    --arrow-color: var(--sl-color-neutral-1000);
    --arrow-size: 6px;

    /*
     * These properties are computed to account for the arrow's dimensions after being rotated 45º. The constant
     * 0.7071 is derived from sin(45), which is the diagonal size of the arrow's container after rotating.
     */
    --arrow-size-diagonal: calc(var(--arrow-size) * 0.7071);
    --arrow-padding-offset: calc(var(--arrow-size-diagonal) - var(--arrow-size));

    display: contents;
  }

  .popup {
    position: absolute;
    isolation: isolate;
    max-width: var(--auto-size-available-width, none);
    max-height: var(--auto-size-available-height, none);
  }

  .popup--fixed {
    position: fixed;
  }

  .popup:not(.popup--active) {
    display: none;
  }

  .popup__arrow {
    position: absolute;
    width: calc(var(--arrow-size-diagonal) * 2);
    height: calc(var(--arrow-size-diagonal) * 2);
    rotate: 45deg;
    background: var(--arrow-color);
    z-index: -1;
  }

  /* Hover bridge */
  .popup-hover-bridge:not(.popup-hover-bridge--visible) {
    display: none;
  }

  .popup-hover-bridge {
    position: fixed;
    z-index: calc(var(--sl-z-index-dropdown) - 1);
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    clip-path: polygon(
      var(--hover-bridge-top-left-x, 0) var(--hover-bridge-top-left-y, 0),
      var(--hover-bridge-top-right-x, 0) var(--hover-bridge-top-right-y, 0),
      var(--hover-bridge-bottom-right-x, 0) var(--hover-bridge-bottom-right-y, 0),
      var(--hover-bridge-bottom-left-x, 0) var(--hover-bridge-bottom-left-y, 0)
    );
  }
`;function wd(o){return o!==null&&typeof o=="object"&&"getBoundingClientRect"in o&&("contextElement"in o?o.contextElement instanceof Element:!0)}var N=class extends y{constructor(){super(...arguments);this.localize=new L(this);this.active=!1;this.placement="top";this.strategy="absolute";this.distance=0;this.skidding=0;this.arrow=!1;this.arrowPlacement="anchor";this.arrowPadding=10;this.flip=!1;this.flipFallbackPlacements="";this.flipFallbackStrategy="best-fit";this.flipPadding=0;this.shift=!1;this.shiftPadding=0;this.autoSizePadding=0;this.hoverBridge=!1;this.updateHoverBridge=()=>{if(this.hoverBridge&&this.anchorEl){let t=this.anchorEl.getBoundingClientRect(),r=this.popup.getBoundingClientRect(),i=this.placement.includes("top")||this.placement.includes("bottom"),a=0,n=0,c=0,d=0,u=0,p=0,h=0,f=0;i?t.top<r.top?(a=t.left,n=t.bottom,c=t.right,d=t.bottom,u=r.left,p=r.top,h=r.right,f=r.top):(a=r.left,n=r.bottom,c=r.right,d=r.bottom,u=t.left,p=t.top,h=t.right,f=t.top):t.left<r.left?(a=t.right,n=t.top,c=r.left,d=r.top,u=t.right,p=t.bottom,h=r.left,f=r.bottom):(a=r.right,n=r.top,c=t.left,d=t.top,u=r.right,p=r.bottom,h=t.left,f=t.bottom),this.style.setProperty("--hover-bridge-top-left-x",`${a}px`),this.style.setProperty("--hover-bridge-top-left-y",`${n}px`),this.style.setProperty("--hover-bridge-top-right-x",`${c}px`),this.style.setProperty("--hover-bridge-top-right-y",`${d}px`),this.style.setProperty("--hover-bridge-bottom-left-x",`${u}px`),this.style.setProperty("--hover-bridge-bottom-left-y",`${p}px`),this.style.setProperty("--hover-bridge-bottom-right-x",`${h}px`),this.style.setProperty("--hover-bridge-bottom-right-y",`${f}px`)}}}static{this.styles=[C,la]}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.start()}disconnectedCallback(){super.disconnectedCallback(),this.stop()}async updated(t){super.updated(t),t.has("active")&&(this.active?this.start():this.stop()),t.has("anchor")&&this.handleAnchorChange(),this.active&&(await this.updateComplete,this.reposition())}async handleAnchorChange(){if(await this.stop(),this.anchor&&typeof this.anchor=="string"){let t=this.getRootNode();this.anchorEl=t.getElementById(this.anchor)}else this.anchor instanceof Element||wd(this.anchor)?this.anchorEl=this.anchor:this.anchorEl=this.querySelector('[slot="anchor"]');this.anchorEl instanceof HTMLSlotElement&&(this.anchorEl=this.anchorEl.assignedElements({flatten:!0})[0]),this.anchorEl&&this.active&&this.start()}start(){!this.anchorEl||!this.active||(this.cleanup=ea(this.anchorEl,this.popup,()=>{this.reposition()}))}async stop(){return new Promise(t=>{this.cleanup?(this.cleanup(),this.cleanup=void 0,this.removeAttribute("data-current-placement"),this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height"),requestAnimationFrame(()=>t())):t()})}reposition(){if(!this.active||!this.anchorEl)return;let t=[ra({mainAxis:this.distance,crossAxis:this.skidding})];this.sync?t.push(ri({apply:({rects:i})=>{let a=this.sync==="width"||this.sync==="both",n=this.sync==="height"||this.sync==="both";this.popup.style.width=a?`${i.reference.width}px`:"",this.popup.style.height=n?`${i.reference.height}px`:""}})):(this.popup.style.width="",this.popup.style.height=""),this.flip&&t.push(ia({boundary:this.flipBoundary,fallbackPlacements:this.flipFallbackPlacements,fallbackStrategy:this.flipFallbackStrategy==="best-fit"?"bestFit":"initialPlacement",padding:this.flipPadding})),this.shift&&t.push(oa({boundary:this.shiftBoundary,padding:this.shiftPadding})),this.autoSize?t.push(ri({boundary:this.autoSizeBoundary,padding:this.autoSizePadding,apply:({availableWidth:i,availableHeight:a})=>{this.autoSize==="vertical"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-height",`${a}px`):this.style.removeProperty("--auto-size-available-height"),this.autoSize==="horizontal"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-width",`${i}px`):this.style.removeProperty("--auto-size-available-width")}})):(this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height")),this.arrow&&t.push(sa({element:this.arrowEl,padding:this.arrowPadding}));let r=this.strategy==="absolute"?i=>Ir.getOffsetParent(i,na):Ir.getOffsetParent;aa(this.anchorEl,this.popup,{placement:this.placement,middleware:t,strategy:this.strategy,platform:{...Ir,getOffsetParent:r}}).then(({x:i,y:a,middlewareData:n,placement:c})=>{let d=this.localize.dir()==="rtl",u={top:"bottom",right:"left",bottom:"top",left:"right"}[c.split("-")[0]];if(this.setAttribute("data-current-placement",c),Object.assign(this.popup.style,{left:`${i}px`,top:`${a}px`}),this.arrow){let p=n.arrow.x,h=n.arrow.y,f="",m="",b="",x="";if(this.arrowPlacement==="start"){let M=typeof p=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";f=typeof h=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"",m=d?M:"",x=d?"":M}else if(this.arrowPlacement==="end"){let M=typeof p=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";m=d?"":M,x=d?M:"",b=typeof h=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:""}else this.arrowPlacement==="center"?(x=typeof p=="number"?"calc(50% - var(--arrow-size-diagonal))":"",f=typeof h=="number"?"calc(50% - var(--arrow-size-diagonal))":""):(x=typeof p=="number"?`${p}px`:"",f=typeof h=="number"?`${h}px`:"");Object.assign(this.arrowEl.style,{top:f,right:m,bottom:b,left:x,[u]:"calc(var(--arrow-size-diagonal) * -1)"})}}),requestAnimationFrame(()=>this.updateHoverBridge()),this.emit("sl-reposition")}render(){return g`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <span
        part="hover-bridge"
        class=${$({"popup-hover-bridge":!0,"popup-hover-bridge--visible":this.hoverBridge&&this.active})}
      ></span>

      <div
        part="popup"
        class=${$({popup:!0,"popup--active":this.active,"popup--fixed":this.strategy==="fixed","popup--has-arrow":this.arrow})}
      >
        <slot></slot>
        ${this.arrow?g`<div part="arrow" class="popup__arrow" role="presentation"></div>`:""}
      </div>
    `}};s([k(".popup")],N.prototype,"popup",2),s([k(".popup__arrow")],N.prototype,"arrowEl",2),s([l()],N.prototype,"anchor",2),s([l({type:Boolean,reflect:!0})],N.prototype,"active",2),s([l({reflect:!0})],N.prototype,"placement",2),s([l({reflect:!0})],N.prototype,"strategy",2),s([l({type:Number})],N.prototype,"distance",2),s([l({type:Number})],N.prototype,"skidding",2),s([l({type:Boolean})],N.prototype,"arrow",2),s([l({attribute:"arrow-placement"})],N.prototype,"arrowPlacement",2),s([l({attribute:"arrow-padding",type:Number})],N.prototype,"arrowPadding",2),s([l({type:Boolean})],N.prototype,"flip",2),s([l({attribute:"flip-fallback-placements",converter:{fromAttribute:t=>t.split(" ").map(r=>r.trim()).filter(r=>r!==""),toAttribute:t=>t.join(" ")}})],N.prototype,"flipFallbackPlacements",2),s([l({attribute:"flip-fallback-strategy"})],N.prototype,"flipFallbackStrategy",2),s([l({type:Object})],N.prototype,"flipBoundary",2),s([l({attribute:"flip-padding",type:Number})],N.prototype,"flipPadding",2),s([l({type:Boolean})],N.prototype,"shift",2),s([l({type:Object})],N.prototype,"shiftBoundary",2),s([l({attribute:"shift-padding",type:Number})],N.prototype,"shiftPadding",2),s([l({attribute:"auto-size"})],N.prototype,"autoSize",2),s([l()],N.prototype,"sync",2),s([l({type:Object})],N.prototype,"autoSizeBoundary",2),s([l({attribute:"auto-size-padding",type:Number})],N.prototype,"autoSizePadding",2),s([l({attribute:"hover-bridge",type:Boolean})],N.prototype,"hoverBridge",2);var ca=_`
  :host {
    display: inline-block;
  }

  .dropdown::part(popup) {
    z-index: var(--sl-z-index-dropdown);
  }

  .dropdown[data-current-placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .dropdown[data-current-placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  .dropdown[data-current-placement^='left']::part(popup) {
    transform-origin: right;
  }

  .dropdown[data-current-placement^='right']::part(popup) {
    transform-origin: left;
  }

  .dropdown__trigger {
    display: block;
  }

  .dropdown__panel {
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    box-shadow: var(--sl-shadow-large);
    border-radius: var(--sl-border-radius-medium);
    pointer-events: none;
  }

  .dropdown--open .dropdown__panel {
    display: block;
    pointer-events: all;
  }

  /* When users slot a menu, make sure it conforms to the popup's auto-size */
  ::slotted(sl-menu) {
    max-width: var(--auto-size-available-width) !important;
    max-height: var(--auto-size-available-height) !important;
  }
`;var nt=class extends y{constructor(){super(...arguments);this.localize=new L(this);this.open=!1;this.placement="bottom-start";this.disabled=!1;this.stayOpenOnSelect=!1;this.distance=0;this.skidding=0;this.hoist=!1;this.sync=void 0;this.handleKeyDown=t=>{this.open&&t.key==="Escape"&&(t.stopPropagation(),this.hide(),this.focusOnTrigger())};this.handleDocumentKeyDown=t=>{if(t.key==="Escape"&&this.open&&!this.closeWatcher){t.stopPropagation(),this.focusOnTrigger(),this.hide();return}if(t.key==="Tab"){if(this.open&&document.activeElement?.tagName.toLowerCase()==="sl-menu-item"){t.preventDefault(),this.hide(),this.focusOnTrigger();return}let r=(i,a)=>{if(!i)return null;let n=i.closest(a);if(n)return n;let c=i.getRootNode();return c instanceof ShadowRoot?r(c.host,a):null};setTimeout(()=>{let i=this.containingElement?.getRootNode()instanceof ShadowRoot?uo():document.activeElement;(!this.containingElement||r(i,this.containingElement.tagName.toLowerCase())!==this.containingElement)&&this.hide()})}};this.handleDocumentMouseDown=t=>{let r=t.composedPath();this.containingElement&&!r.includes(this.containingElement)&&this.hide()};this.handlePanelSelect=t=>{let r=t.target;!this.stayOpenOnSelect&&r.tagName.toLowerCase()==="sl-menu"&&(this.hide(),this.focusOnTrigger())}}static{this.styles=[C,ca]}static{this.dependencies={"sl-popup":N}}connectedCallback(){super.connectedCallback(),this.containingElement||(this.containingElement=this)}firstUpdated(){this.panel.hidden=!this.open,this.open&&(this.addOpenListeners(),this.popup.active=!0)}disconnectedCallback(){super.disconnectedCallback(),this.removeOpenListeners(),this.hide()}focusOnTrigger(){let t=this.trigger.assignedElements({flatten:!0})[0];typeof t?.focus=="function"&&t.focus()}getMenu(){return this.panel.assignedElements({flatten:!0}).find(t=>t.tagName.toLowerCase()==="sl-menu")}handleTriggerClick(){this.open?this.hide():(this.show(),this.focusOnTrigger())}async handleTriggerKeyDown(t){if([" ","Enter"].includes(t.key)){t.preventDefault(),this.handleTriggerClick();return}let r=this.getMenu();if(r){let i=r.getAllItems(),a=i[0],n=i[i.length-1];["ArrowDown","ArrowUp","Home","End"].includes(t.key)&&(t.preventDefault(),this.open||(this.show(),await this.updateComplete),i.length>0&&this.updateComplete.then(()=>{(t.key==="ArrowDown"||t.key==="Home")&&(r.setCurrentItem(a),a.focus()),(t.key==="ArrowUp"||t.key==="End")&&(r.setCurrentItem(n),n.focus())}))}}handleTriggerKeyUp(t){t.key===" "&&t.preventDefault()}handleTriggerSlotChange(){this.updateAccessibleTrigger()}updateAccessibleTrigger(){let r=this.trigger.assignedElements({flatten:!0}).find(a=>$s(a).start),i;if(r){switch(r.tagName.toLowerCase()){case"sl-button":case"sl-icon-button":i=r.button;break;default:i=r}i.setAttribute("aria-haspopup","true"),i.setAttribute("aria-expanded",this.open?"true":"false")}}async show(){if(!this.open)return this.open=!0,rt(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,rt(this,"sl-after-hide")}reposition(){this.popup.reposition()}addOpenListeners(){this.panel.addEventListener("sl-select",this.handlePanelSelect),"CloseWatcher"in window?(this.closeWatcher?.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.hide(),this.focusOnTrigger()}):this.panel.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown)}removeOpenListeners(){this.panel&&(this.panel.removeEventListener("sl-select",this.handlePanelSelect),this.panel.removeEventListener("keydown",this.handleKeyDown)),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown),this.closeWatcher?.destroy()}async handleOpenChange(){if(this.disabled){this.open=!1;return}if(this.updateAccessibleTrigger(),this.open){this.emit("sl-show"),this.addOpenListeners(),await Y(this),this.panel.hidden=!1,this.popup.active=!0;let{keyframes:t,options:r}=j(this,"dropdown.show",{dir:this.localize.dir()});await X(this.popup.popup,t,r),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),await Y(this);let{keyframes:t,options:r}=j(this,"dropdown.hide",{dir:this.localize.dir()});await X(this.popup.popup,t,r),this.panel.hidden=!0,this.popup.active=!1,this.emit("sl-after-hide")}}render(){return g`
      <sl-popup
        part="base"
        exportparts="popup:base__popup"
        id="dropdown"
        placement=${this.placement}
        distance=${this.distance}
        skidding=${this.skidding}
        strategy=${this.hoist?"fixed":"absolute"}
        flip
        shift
        auto-size="vertical"
        auto-size-padding="10"
        sync=${z(this.sync?this.sync:void 0)}
        class=${$({dropdown:!0,"dropdown--open":this.open})}
      >
        <slot
          name="trigger"
          slot="anchor"
          part="trigger"
          class="dropdown__trigger"
          @click=${this.handleTriggerClick}
          @keydown=${this.handleTriggerKeyDown}
          @keyup=${this.handleTriggerKeyUp}
          @slotchange=${this.handleTriggerSlotChange}
        ></slot>

        <div aria-hidden=${this.open?"false":"true"} aria-labelledby="dropdown">
          <slot part="panel" class="dropdown__panel"></slot>
        </div>
      </sl-popup>
    `}};s([k(".dropdown")],nt.prototype,"popup",2),s([k(".dropdown__trigger")],nt.prototype,"trigger",2),s([k(".dropdown__panel")],nt.prototype,"panel",2),s([l({type:Boolean,reflect:!0})],nt.prototype,"open",2),s([l({reflect:!0})],nt.prototype,"placement",2),s([l({type:Boolean,reflect:!0})],nt.prototype,"disabled",2),s([l({attribute:"stay-open-on-select",type:Boolean,reflect:!0})],nt.prototype,"stayOpenOnSelect",2),s([l({attribute:!1})],nt.prototype,"containingElement",2),s([l({type:Number})],nt.prototype,"distance",2),s([l({type:Number})],nt.prototype,"skidding",2),s([l({type:Boolean})],nt.prototype,"hoist",2),s([l({reflect:!0})],nt.prototype,"sync",2),s([v("open",{waitUntilFirstUpdate:!0})],nt.prototype,"handleOpenChange",1);V("dropdown.show",{keyframes:[{opacity:0,scale:.9},{opacity:1,scale:1}],options:{duration:100,easing:"ease"}});V("dropdown.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.9}],options:{duration:100,easing:"ease"}});var da=_`
  :host {
    display: block;
  }

  .input {
    flex: 1 1 auto;
    display: inline-flex;
    align-items: stretch;
    justify-content: start;
    position: relative;
    width: 100%;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    letter-spacing: var(--sl-input-letter-spacing);
    vertical-align: middle;
    overflow: hidden;
    cursor: text;
    transition:
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) border,
      var(--sl-transition-fast) box-shadow,
      var(--sl-transition-fast) background-color;
  }

  /* Standard inputs */
  .input--standard {
    background-color: var(--sl-input-background-color);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
  }

  .input--standard:hover:not(.input--disabled) {
    background-color: var(--sl-input-background-color-hover);
    border-color: var(--sl-input-border-color-hover);
  }

  .input--standard.input--focused:not(.input--disabled) {
    background-color: var(--sl-input-background-color-focus);
    border-color: var(--sl-input-border-color-focus);
    box-shadow: 0 0 0 var(--sl-focus-ring-width) var(--sl-input-focus-ring-color);
  }

  .input--standard.input--focused:not(.input--disabled) .input__control {
    color: var(--sl-input-color-focus);
  }

  .input--standard.input--disabled {
    background-color: var(--sl-input-background-color-disabled);
    border-color: var(--sl-input-border-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .input--standard.input--disabled .input__control {
    color: var(--sl-input-color-disabled);
  }

  .input--standard.input--disabled .input__control::placeholder {
    color: var(--sl-input-placeholder-color-disabled);
  }

  /* Filled inputs */
  .input--filled {
    border: none;
    background-color: var(--sl-input-filled-background-color);
    color: var(--sl-input-color);
  }

  .input--filled:hover:not(.input--disabled) {
    background-color: var(--sl-input-filled-background-color-hover);
  }

  .input--filled.input--focused:not(.input--disabled) {
    background-color: var(--sl-input-filled-background-color-focus);
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .input--filled.input--disabled {
    background-color: var(--sl-input-filled-background-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .input__control {
    flex: 1 1 auto;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    min-width: 0;
    height: 100%;
    color: var(--sl-input-color);
    border: none;
    background: inherit;
    box-shadow: none;
    padding: 0;
    margin: 0;
    cursor: inherit;
    -webkit-appearance: none;
  }

  .input__control::-webkit-search-decoration,
  .input__control::-webkit-search-cancel-button,
  .input__control::-webkit-search-results-button,
  .input__control::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }

  .input__control:-webkit-autofill,
  .input__control:-webkit-autofill:hover,
  .input__control:-webkit-autofill:focus,
  .input__control:-webkit-autofill:active {
    box-shadow: 0 0 0 var(--sl-input-height-large) var(--sl-input-background-color-hover) inset !important;
    -webkit-text-fill-color: var(--sl-color-primary-500);
    caret-color: var(--sl-input-color);
  }

  .input--filled .input__control:-webkit-autofill,
  .input--filled .input__control:-webkit-autofill:hover,
  .input--filled .input__control:-webkit-autofill:focus,
  .input--filled .input__control:-webkit-autofill:active {
    box-shadow: 0 0 0 var(--sl-input-height-large) var(--sl-input-filled-background-color) inset !important;
  }

  .input__control::placeholder {
    color: var(--sl-input-placeholder-color);
    user-select: none;
    -webkit-user-select: none;
  }

  .input:hover:not(.input--disabled) .input__control {
    color: var(--sl-input-color-hover);
  }

  .input__control:focus {
    outline: none;
  }

  .input__prefix,
  .input__suffix {
    display: inline-flex;
    flex: 0 0 auto;
    align-items: center;
    cursor: default;
  }

  .input__prefix ::slotted(sl-icon),
  .input__suffix ::slotted(sl-icon) {
    color: var(--sl-input-icon-color);
  }

  /*
   * Size modifiers
   */

  .input--small {
    border-radius: var(--sl-input-border-radius-small);
    font-size: var(--sl-input-font-size-small);
    height: var(--sl-input-height-small);
  }

  .input--small .input__control {
    height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    padding: 0 var(--sl-input-spacing-small);
  }

  .input--small .input__clear,
  .input--small .input__password-toggle {
    width: calc(1em + var(--sl-input-spacing-small) * 2);
  }

  .input--small .input__prefix ::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-small);
  }

  .input--small .input__suffix ::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-small);
  }

  .input--medium {
    border-radius: var(--sl-input-border-radius-medium);
    font-size: var(--sl-input-font-size-medium);
    height: var(--sl-input-height-medium);
  }

  .input--medium .input__control {
    height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    padding: 0 var(--sl-input-spacing-medium);
  }

  .input--medium .input__clear,
  .input--medium .input__password-toggle {
    width: calc(1em + var(--sl-input-spacing-medium) * 2);
  }

  .input--medium .input__prefix ::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-medium);
  }

  .input--medium .input__suffix ::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-medium);
  }

  .input--large {
    border-radius: var(--sl-input-border-radius-large);
    font-size: var(--sl-input-font-size-large);
    height: var(--sl-input-height-large);
  }

  .input--large .input__control {
    height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    padding: 0 var(--sl-input-spacing-large);
  }

  .input--large .input__clear,
  .input--large .input__password-toggle {
    width: calc(1em + var(--sl-input-spacing-large) * 2);
  }

  .input--large .input__prefix ::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-large);
  }

  .input--large .input__suffix ::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-large);
  }

  /*
   * Pill modifier
   */

  .input--pill.input--small {
    border-radius: var(--sl-input-height-small);
  }

  .input--pill.input--medium {
    border-radius: var(--sl-input-height-medium);
  }

  .input--pill.input--large {
    border-radius: var(--sl-input-height-large);
  }

  /*
   * Clearable + Password Toggle
   */

  .input__clear,
  .input__password-toggle {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: inherit;
    color: var(--sl-input-icon-color);
    border: none;
    background: none;
    padding: 0;
    transition: var(--sl-transition-fast) color;
    cursor: pointer;
  }

  .input__clear:hover,
  .input__password-toggle:hover {
    color: var(--sl-input-icon-color-hover);
  }

  .input__clear:focus,
  .input__password-toggle:focus {
    outline: none;
  }

  /* Don't show the browser's password toggle in Edge */
  ::-ms-reveal {
    display: none;
  }

  /* Hide the built-in number spinner */
  .input--no-spin-buttons input[type='number']::-webkit-outer-spin-button,
  .input--no-spin-buttons input[type='number']::-webkit-inner-spin-button {
    -webkit-appearance: none;
    display: none;
  }

  .input--no-spin-buttons input[type='number'] {
    -moz-appearance: textfield;
  }
`;var F=class extends y{constructor(){super(...arguments);this.formControlController=new ut(this,{assumeInteractionOn:["sl-blur","sl-input"]});this.hasSlotController=new K(this,"help-text","label");this.localize=new L(this);this.hasFocus=!1;this.title="";this.__numberInput=Object.assign(document.createElement("input"),{type:"number"});this.__dateInput=Object.assign(document.createElement("input"),{type:"date"});this.type="text";this.name="";this.value="";this.defaultValue="";this.size="medium";this.filled=!1;this.pill=!1;this.label="";this.helpText="";this.clearable=!1;this.disabled=!1;this.placeholder="";this.readonly=!1;this.passwordToggle=!1;this.passwordVisible=!1;this.noSpinButtons=!1;this.form="";this.required=!1;this.spellcheck=!0}static{this.styles=[C,Ht,da]}static{this.dependencies={"sl-icon":D}}get valueAsDate(){return this.__dateInput.type=this.type,this.__dateInput.value=this.value,this.input?.valueAsDate||this.__dateInput.valueAsDate}set valueAsDate(t){this.__dateInput.type=this.type,this.__dateInput.valueAsDate=t,this.value=this.__dateInput.value}get valueAsNumber(){return this.__numberInput.value=this.value,this.input?.valueAsNumber||this.__numberInput.valueAsNumber}set valueAsNumber(t){this.__numberInput.valueAsNumber=t,this.value=this.__numberInput.value}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleChange(){this.value=this.input.value,this.emit("sl-change")}handleClearClick(t){t.preventDefault(),this.value!==""&&(this.value="",this.emit("sl-clear"),this.emit("sl-input"),this.emit("sl-change")),this.input.focus()}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleInput(){this.value=this.input.value,this.formControlController.updateValidity(),this.emit("sl-input")}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}handleKeyDown(t){let r=t.metaKey||t.ctrlKey||t.shiftKey||t.altKey;t.key==="Enter"&&!r&&setTimeout(()=>{!t.defaultPrevented&&!t.isComposing&&this.formControlController.submit()})}handlePasswordToggle(){this.passwordVisible=!this.passwordVisible}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleStepChange(){this.input.step=String(this.step),this.formControlController.updateValidity()}async handleValueChange(){await this.updateComplete,this.formControlController.updateValidity()}focus(t){this.input.focus(t)}blur(){this.input.blur()}select(){this.input.select()}setSelectionRange(t,r,i="none"){this.input.setSelectionRange(t,r,i)}setRangeText(t,r,i,a="preserve"){let n=r??this.input.selectionStart,c=i??this.input.selectionEnd;this.input.setRangeText(t,n,c,a),this.value!==this.input.value&&(this.value=this.input.value)}showPicker(){"showPicker"in HTMLInputElement.prototype&&this.input.showPicker()}stepUp(){this.input.stepUp(),this.value!==this.input.value&&(this.value=this.input.value)}stepDown(){this.input.stepDown(),this.value!==this.input.value&&(this.value=this.input.value)}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity()}render(){let t=this.hasSlotController.test("label"),r=this.hasSlotController.test("help-text"),i=this.label?!0:!!t,a=this.helpText?!0:!!r,c=this.clearable&&!this.disabled&&!this.readonly&&(typeof this.value=="number"||this.value.length>0);return g`
      <div
        part="form-control"
        class=${$({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":i,"form-control--has-help-text":a})}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${i?"false":"true"}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${$({input:!0,"input--small":this.size==="small","input--medium":this.size==="medium","input--large":this.size==="large","input--pill":this.pill,"input--standard":!this.filled,"input--filled":this.filled,"input--disabled":this.disabled,"input--focused":this.hasFocus,"input--empty":!this.value,"input--no-spin-buttons":this.noSpinButtons})}
          >
            <span part="prefix" class="input__prefix">
              <slot name="prefix"></slot>
            </span>

            <input
              part="input"
              id="input"
              class="input__control"
              type=${this.type==="password"&&this.passwordVisible?"text":this.type}
              title=${this.title}
              name=${z(this.name)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              ?required=${this.required}
              placeholder=${z(this.placeholder)}
              minlength=${z(this.minlength)}
              maxlength=${z(this.maxlength)}
              min=${z(this.min)}
              max=${z(this.max)}
              step=${z(this.step)}
              .value=${Nt(this.value)}
              autocapitalize=${z(this.autocapitalize)}
              autocomplete=${z(this.autocomplete)}
              autocorrect=${z(this.autocorrect)}
              ?autofocus=${this.autofocus}
              spellcheck=${this.spellcheck}
              pattern=${z(this.pattern)}
              enterkeyhint=${z(this.enterkeyhint)}
              inputmode=${z(this.inputmode)}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @keydown=${this.handleKeyDown}
              @focus=${this.handleFocus}
              @blur=${this.handleBlur}
            />

            ${c?g`
                  <button
                    part="clear-button"
                    class="input__clear"
                    type="button"
                    aria-label=${this.localize.term("clearEntry")}
                    @click=${this.handleClearClick}
                    tabindex="-1"
                  >
                    <slot name="clear-icon">
                      <sl-icon name="x-circle-fill" library="system"></sl-icon>
                    </slot>
                  </button>
                `:""}
            ${this.passwordToggle&&!this.disabled?g`
                  <button
                    part="password-toggle-button"
                    class="input__password-toggle"
                    type="button"
                    aria-label=${this.localize.term(this.passwordVisible?"hidePassword":"showPassword")}
                    @click=${this.handlePasswordToggle}
                    tabindex="-1"
                  >
                    ${this.passwordVisible?g`
                          <slot name="show-password-icon">
                            <sl-icon name="eye-slash" library="system"></sl-icon>
                          </slot>
                        `:g`
                          <slot name="hide-password-icon">
                            <sl-icon name="eye" library="system"></sl-icon>
                          </slot>
                        `}
                  </button>
                `:""}

            <span part="suffix" class="input__suffix">
              <slot name="suffix"></slot>
            </span>
          </div>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${a?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};s([k(".input__control")],F.prototype,"input",2),s([S()],F.prototype,"hasFocus",2),s([l()],F.prototype,"title",2),s([l({reflect:!0})],F.prototype,"type",2),s([l()],F.prototype,"name",2),s([l()],F.prototype,"value",2),s([Xt()],F.prototype,"defaultValue",2),s([l({reflect:!0})],F.prototype,"size",2),s([l({type:Boolean,reflect:!0})],F.prototype,"filled",2),s([l({type:Boolean,reflect:!0})],F.prototype,"pill",2),s([l()],F.prototype,"label",2),s([l({attribute:"help-text"})],F.prototype,"helpText",2),s([l({type:Boolean})],F.prototype,"clearable",2),s([l({type:Boolean,reflect:!0})],F.prototype,"disabled",2),s([l()],F.prototype,"placeholder",2),s([l({type:Boolean,reflect:!0})],F.prototype,"readonly",2),s([l({attribute:"password-toggle",type:Boolean})],F.prototype,"passwordToggle",2),s([l({attribute:"password-visible",type:Boolean})],F.prototype,"passwordVisible",2),s([l({attribute:"no-spin-buttons",type:Boolean})],F.prototype,"noSpinButtons",2),s([l({reflect:!0})],F.prototype,"form",2),s([l({type:Boolean,reflect:!0})],F.prototype,"required",2),s([l()],F.prototype,"pattern",2),s([l({type:Number})],F.prototype,"minlength",2),s([l({type:Number})],F.prototype,"maxlength",2),s([l()],F.prototype,"min",2),s([l()],F.prototype,"max",2),s([l()],F.prototype,"step",2),s([l()],F.prototype,"autocapitalize",2),s([l()],F.prototype,"autocorrect",2),s([l()],F.prototype,"autocomplete",2),s([l({type:Boolean})],F.prototype,"autofocus",2),s([l()],F.prototype,"enterkeyhint",2),s([l({type:Boolean,converter:{fromAttribute:t=>!(!t||t==="false"),toAttribute:t=>t?"true":"false"}})],F.prototype,"spellcheck",2),s([l()],F.prototype,"inputmode",2),s([v("disabled",{waitUntilFirstUpdate:!0})],F.prototype,"handleDisabledChange",1),s([v("step",{waitUntilFirstUpdate:!0})],F.prototype,"handleStepChange",1),s([v("value",{waitUntilFirstUpdate:!0})],F.prototype,"handleValueChange",1);var ua=_`
  :host(:not(:focus-within)) {
    position: absolute !important;
    width: 1px !important;
    height: 1px !important;
    clip: rect(0 0 0 0) !important;
    clip-path: inset(50%) !important;
    border: none !important;
    overflow: hidden !important;
    white-space: nowrap !important;
    padding: 0 !important;
  }
`;var Re=class extends y{static{this.styles=[C,ua]}render(){return g` <slot></slot> `}};var ha=_`
  :host {
    --grid-width: 280px;
    --grid-height: 200px;
    --grid-handle-size: 16px;
    --slider-height: 15px;
    --slider-handle-size: 17px;
    --swatch-size: 25px;

    display: inline-block;
  }

  .color-picker {
    width: var(--grid-width);
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    color: var(--color);
    background-color: var(--sl-panel-background-color);
    border-radius: var(--sl-border-radius-medium);
    user-select: none;
    -webkit-user-select: none;
  }

  .color-picker--inline {
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
  }

  .color-picker--inline:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .color-picker__grid {
    position: relative;
    height: var(--grid-height);
    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%),
      linear-gradient(to right, #fff 0%, rgba(255, 255, 255, 0) 100%);
    border-top-left-radius: var(--sl-border-radius-medium);
    border-top-right-radius: var(--sl-border-radius-medium);
    cursor: crosshair;
    forced-color-adjust: none;
  }

  .color-picker__grid-handle {
    position: absolute;
    width: var(--grid-handle-size);
    height: var(--grid-handle-size);
    border-radius: 50%;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.25);
    border: solid 2px white;
    margin-top: calc(var(--grid-handle-size) / -2);
    margin-left: calc(var(--grid-handle-size) / -2);
    transition: var(--sl-transition-fast) scale;
  }

  .color-picker__grid-handle--dragging {
    cursor: none;
    scale: 1.5;
  }

  .color-picker__grid-handle:focus-visible {
    outline: var(--sl-focus-ring);
  }

  .color-picker__controls {
    padding: var(--sl-spacing-small);
    display: flex;
    align-items: center;
  }

  .color-picker__sliders {
    flex: 1 1 auto;
  }

  .color-picker__slider {
    position: relative;
    height: var(--slider-height);
    border-radius: var(--sl-border-radius-pill);
    box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.2);
    forced-color-adjust: none;
  }

  .color-picker__slider:not(:last-of-type) {
    margin-bottom: var(--sl-spacing-small);
  }

  .color-picker__slider-handle {
    position: absolute;
    top: calc(50% - var(--slider-handle-size) / 2);
    width: var(--slider-handle-size);
    height: var(--slider-handle-size);
    background-color: white;
    border-radius: 50%;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.25);
    margin-left: calc(var(--slider-handle-size) / -2);
  }

  .color-picker__slider-handle:focus-visible {
    outline: var(--sl-focus-ring);
  }

  .color-picker__hue {
    background-image: linear-gradient(
      to right,
      rgb(255, 0, 0) 0%,
      rgb(255, 255, 0) 17%,
      rgb(0, 255, 0) 33%,
      rgb(0, 255, 255) 50%,
      rgb(0, 0, 255) 67%,
      rgb(255, 0, 255) 83%,
      rgb(255, 0, 0) 100%
    );
  }

  .color-picker__alpha .color-picker__alpha-gradient {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: inherit;
  }

  .color-picker__preview {
    flex: 0 0 auto;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 2.25rem;
    height: 2.25rem;
    border: none;
    border-radius: var(--sl-border-radius-circle);
    background: none;
    margin-left: var(--sl-spacing-small);
    cursor: copy;
    forced-color-adjust: none;
  }

  .color-picker__preview:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.2);

    /* We use a custom property in lieu of currentColor because of https://bugs.webkit.org/show_bug.cgi?id=216780 */
    background-color: var(--preview-color);
  }

  .color-picker__preview:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .color-picker__preview-color {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: solid 1px rgba(0, 0, 0, 0.125);
  }

  .color-picker__preview-color--copied {
    animation: pulse 0.75s;
  }

  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 var(--sl-color-primary-500);
    }
    70% {
      box-shadow: 0 0 0 0.5rem transparent;
    }
    100% {
      box-shadow: 0 0 0 0 transparent;
    }
  }

  .color-picker__user-input {
    display: flex;
    padding: 0 var(--sl-spacing-small) var(--sl-spacing-small) var(--sl-spacing-small);
  }

  .color-picker__user-input sl-input {
    min-width: 0; /* fix input width in Safari */
    flex: 1 1 auto;
  }

  .color-picker__user-input sl-button-group {
    margin-left: var(--sl-spacing-small);
  }

  .color-picker__user-input sl-button {
    min-width: 3.25rem;
    max-width: 3.25rem;
    font-size: 1rem;
  }

  .color-picker__swatches {
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-gap: 0.5rem;
    justify-items: center;
    border-top: solid 1px var(--sl-color-neutral-200);
    padding: var(--sl-spacing-small);
    forced-color-adjust: none;
  }

  .color-picker__swatch {
    position: relative;
    width: var(--swatch-size);
    height: var(--swatch-size);
    border-radius: var(--sl-border-radius-small);
  }

  .color-picker__swatch .color-picker__swatch-color {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: solid 1px rgba(0, 0, 0, 0.125);
    border-radius: inherit;
    cursor: pointer;
  }

  .color-picker__swatch:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .color-picker__transparent-bg {
    background-image: linear-gradient(45deg, var(--sl-color-neutral-300) 25%, transparent 25%),
      linear-gradient(45deg, transparent 75%, var(--sl-color-neutral-300) 75%),
      linear-gradient(45deg, transparent 75%, var(--sl-color-neutral-300) 75%),
      linear-gradient(45deg, var(--sl-color-neutral-300) 25%, transparent 25%);
    background-size: 10px 10px;
    background-position:
      0 0,
      0 0,
      -5px -5px,
      5px 5px;
  }

  .color-picker--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .color-picker--disabled .color-picker__grid,
  .color-picker--disabled .color-picker__grid-handle,
  .color-picker--disabled .color-picker__slider,
  .color-picker--disabled .color-picker__slider-handle,
  .color-picker--disabled .color-picker__preview,
  .color-picker--disabled .color-picker__swatch,
  .color-picker--disabled .color-picker__swatch-color {
    pointer-events: none;
  }

  /*
   * Color dropdown
   */

  .color-dropdown::part(panel) {
    max-height: none;
    background-color: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-radius: var(--sl-border-radius-medium);
    overflow: visible;
  }

  .color-dropdown__trigger {
    display: inline-block;
    position: relative;
    background-color: transparent;
    border: none;
    cursor: pointer;
    forced-color-adjust: none;
  }

  .color-dropdown__trigger.color-dropdown__trigger--small {
    width: var(--sl-input-height-small);
    height: var(--sl-input-height-small);
    border-radius: var(--sl-border-radius-circle);
  }

  .color-dropdown__trigger.color-dropdown__trigger--medium {
    width: var(--sl-input-height-medium);
    height: var(--sl-input-height-medium);
    border-radius: var(--sl-border-radius-circle);
  }

  .color-dropdown__trigger.color-dropdown__trigger--large {
    width: var(--sl-input-height-large);
    height: var(--sl-input-height-large);
    border-radius: var(--sl-border-radius-circle);
  }

  .color-dropdown__trigger:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    background-color: currentColor;
    box-shadow:
      inset 0 0 0 2px var(--sl-input-border-color),
      inset 0 0 0 4px var(--sl-color-neutral-0);
  }

  .color-dropdown__trigger--empty:before {
    background-color: transparent;
  }

  .color-dropdown__trigger:focus-visible {
    outline: none;
  }

  .color-dropdown__trigger:focus-visible:not(.color-dropdown__trigger--disabled) {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .color-dropdown__trigger.color-dropdown__trigger--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;var pa="EyeDropper"in window,B=class extends y{constructor(){super();this.formControlController=new ut(this);this.isSafeValue=!1;this.localize=new L(this);this.hasFocus=!1;this.isDraggingGridHandle=!1;this.isEmpty=!1;this.inputValue="";this.hue=0;this.saturation=100;this.brightness=100;this.alpha=100;this.value="";this.defaultValue="";this.label="";this.format="hex";this.inline=!1;this.size="medium";this.noFormatToggle=!1;this.name="";this.disabled=!1;this.hoist=!1;this.opacity=!1;this.uppercase=!1;this.swatches="";this.form="";this.required=!1;this.handleFocusIn=()=>{this.hasFocus=!0,this.emit("sl-focus")};this.handleFocusOut=()=>{this.hasFocus=!1,this.emit("sl-blur")};this.addEventListener("focusin",this.handleFocusIn),this.addEventListener("focusout",this.handleFocusOut)}static{this.styles=[C,ha]}static{this.dependencies={"sl-button-group":Vt,"sl-button":W,"sl-dropdown":nt,"sl-icon":D,"sl-input":F,"sl-visually-hidden":Re}}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.input.updateComplete.then(()=>{this.formControlController.updateValidity()})}handleCopy(){this.input.select(),document.execCommand("copy"),this.previewButton.focus(),this.previewButton.classList.add("color-picker__preview-color--copied"),this.previewButton.addEventListener("animationend",()=>{this.previewButton.classList.remove("color-picker__preview-color--copied")})}handleFormatToggle(){let t=["hex","rgb","hsl","hsv"],r=(t.indexOf(this.format)+1)%t.length;this.format=t[r],this.setColor(this.value),this.emit("sl-change"),this.emit("sl-input")}handleAlphaDrag(t){let r=this.shadowRoot.querySelector(".color-picker__slider.color-picker__alpha"),i=r.querySelector(".color-picker__slider-handle"),{width:a}=r.getBoundingClientRect(),n=this.value,c=this.value;i.focus(),t.preventDefault(),Ae(r,{onMove:d=>{this.alpha=tt(d/a*100,0,100),this.syncValues(),this.value!==c&&(c=this.value,this.emit("sl-input"))},onStop:()=>{this.value!==n&&(n=this.value,this.emit("sl-change"))},initialEvent:t})}handleHueDrag(t){let r=this.shadowRoot.querySelector(".color-picker__slider.color-picker__hue"),i=r.querySelector(".color-picker__slider-handle"),{width:a}=r.getBoundingClientRect(),n=this.value,c=this.value;i.focus(),t.preventDefault(),Ae(r,{onMove:d=>{this.hue=tt(d/a*360,0,360),this.syncValues(),this.value!==c&&(c=this.value,this.emit("sl-input"))},onStop:()=>{this.value!==n&&(n=this.value,this.emit("sl-change"))},initialEvent:t})}handleGridDrag(t){let r=this.shadowRoot.querySelector(".color-picker__grid"),i=r.querySelector(".color-picker__grid-handle"),{width:a,height:n}=r.getBoundingClientRect(),c=this.value,d=this.value;i.focus(),t.preventDefault(),this.isDraggingGridHandle=!0,Ae(r,{onMove:(u,p)=>{this.saturation=tt(u/a*100,0,100),this.brightness=tt(100-p/n*100,0,100),this.syncValues(),this.value!==d&&(d=this.value,this.emit("sl-input"))},onStop:()=>{this.isDraggingGridHandle=!1,this.value!==c&&(c=this.value,this.emit("sl-change"))},initialEvent:t})}handleAlphaKeyDown(t){let r=t.shiftKey?10:1,i=this.value;t.key==="ArrowLeft"&&(t.preventDefault(),this.alpha=tt(this.alpha-r,0,100),this.syncValues()),t.key==="ArrowRight"&&(t.preventDefault(),this.alpha=tt(this.alpha+r,0,100),this.syncValues()),t.key==="Home"&&(t.preventDefault(),this.alpha=0,this.syncValues()),t.key==="End"&&(t.preventDefault(),this.alpha=100,this.syncValues()),this.value!==i&&(this.emit("sl-change"),this.emit("sl-input"))}handleHueKeyDown(t){let r=t.shiftKey?10:1,i=this.value;t.key==="ArrowLeft"&&(t.preventDefault(),this.hue=tt(this.hue-r,0,360),this.syncValues()),t.key==="ArrowRight"&&(t.preventDefault(),this.hue=tt(this.hue+r,0,360),this.syncValues()),t.key==="Home"&&(t.preventDefault(),this.hue=0,this.syncValues()),t.key==="End"&&(t.preventDefault(),this.hue=360,this.syncValues()),this.value!==i&&(this.emit("sl-change"),this.emit("sl-input"))}handleGridKeyDown(t){let r=t.shiftKey?10:1,i=this.value;t.key==="ArrowLeft"&&(t.preventDefault(),this.saturation=tt(this.saturation-r,0,100),this.syncValues()),t.key==="ArrowRight"&&(t.preventDefault(),this.saturation=tt(this.saturation+r,0,100),this.syncValues()),t.key==="ArrowUp"&&(t.preventDefault(),this.brightness=tt(this.brightness+r,0,100),this.syncValues()),t.key==="ArrowDown"&&(t.preventDefault(),this.brightness=tt(this.brightness-r,0,100),this.syncValues()),this.value!==i&&(this.emit("sl-change"),this.emit("sl-input"))}handleInputChange(t){let r=t.target,i=this.value;t.stopPropagation(),this.input.value?(this.setColor(r.value),r.value=this.value):this.value="",this.value!==i&&(this.emit("sl-change"),this.emit("sl-input"))}handleInputInput(t){this.formControlController.updateValidity(),t.stopPropagation()}handleInputKeyDown(t){if(t.key==="Enter"){let r=this.value;this.input.value?(this.setColor(this.input.value),this.input.value=this.value,this.value!==r&&(this.emit("sl-change"),this.emit("sl-input")),setTimeout(()=>this.input.select())):this.hue=0}}handleInputInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}handleTouchMove(t){t.preventDefault()}parseColor(t){let r=new zr(t);if(!r.isValid)return null;let i=r.toHsl(),a={h:i.h,s:i.s*100,l:i.l*100,a:i.a},n=r.toRgb(),c=r.toHexString(),d=r.toHex8String(),u=r.toHsv(),p={h:u.h,s:u.s*100,v:u.v*100,a:u.a};return{hsl:{h:a.h,s:a.s,l:a.l,string:this.setLetterCase(`hsl(${Math.round(a.h)}, ${Math.round(a.s)}%, ${Math.round(a.l)}%)`)},hsla:{h:a.h,s:a.s,l:a.l,a:a.a,string:this.setLetterCase(`hsla(${Math.round(a.h)}, ${Math.round(a.s)}%, ${Math.round(a.l)}%, ${a.a.toFixed(2).toString()})`)},hsv:{h:p.h,s:p.s,v:p.v,string:this.setLetterCase(`hsv(${Math.round(p.h)}, ${Math.round(p.s)}%, ${Math.round(p.v)}%)`)},hsva:{h:p.h,s:p.s,v:p.v,a:p.a,string:this.setLetterCase(`hsva(${Math.round(p.h)}, ${Math.round(p.s)}%, ${Math.round(p.v)}%, ${p.a.toFixed(2).toString()})`)},rgb:{r:n.r,g:n.g,b:n.b,string:this.setLetterCase(`rgb(${Math.round(n.r)}, ${Math.round(n.g)}, ${Math.round(n.b)})`)},rgba:{r:n.r,g:n.g,b:n.b,a:n.a,string:this.setLetterCase(`rgba(${Math.round(n.r)}, ${Math.round(n.g)}, ${Math.round(n.b)}, ${n.a.toFixed(2).toString()})`)},hex:this.setLetterCase(c),hexa:this.setLetterCase(d)}}setColor(t){let r=this.parseColor(t);return r===null?!1:(this.hue=r.hsva.h,this.saturation=r.hsva.s,this.brightness=r.hsva.v,this.alpha=this.opacity?r.hsva.a*100:100,this.syncValues(),!0)}setLetterCase(t){return typeof t!="string"?"":this.uppercase?t.toUpperCase():t.toLowerCase()}async syncValues(){let t=this.parseColor(`hsva(${this.hue}, ${this.saturation}%, ${this.brightness}%, ${this.alpha/100})`);t!==null&&(this.format==="hsl"?this.inputValue=this.opacity?t.hsla.string:t.hsl.string:this.format==="rgb"?this.inputValue=this.opacity?t.rgba.string:t.rgb.string:this.format==="hsv"?this.inputValue=this.opacity?t.hsva.string:t.hsv.string:this.inputValue=this.opacity?t.hexa:t.hex,this.isSafeValue=!0,this.value=this.inputValue,await this.updateComplete,this.isSafeValue=!1)}handleAfterHide(){this.previewButton.classList.remove("color-picker__preview-color--copied")}handleEyeDropper(){if(!pa)return;new EyeDropper().open().then(r=>{let i=this.value;this.setColor(r.sRGBHex),this.value!==i&&(this.emit("sl-change"),this.emit("sl-input"))}).catch(()=>{})}selectSwatch(t){let r=this.value;this.disabled||(this.setColor(t),this.value!==r&&(this.emit("sl-change"),this.emit("sl-input")))}getHexString(t,r,i,a=100){let n=new zr(`hsva(${t}, ${r}%, ${i}%, ${a/100})`);return n.isValid?n.toHex8String():""}stopNestedEventPropagation(t){t.stopImmediatePropagation()}handleFormatChange(){this.syncValues()}handleOpacityChange(){this.alpha=100}handleValueChange(t,r){if(this.isEmpty=!r,r||(this.hue=0,this.saturation=0,this.brightness=100,this.alpha=100),!this.isSafeValue){let i=this.parseColor(r);i!==null?(this.inputValue=this.value,this.hue=i.hsva.h,this.saturation=i.hsva.s,this.brightness=i.hsva.v,this.alpha=i.hsva.a*100,this.syncValues()):this.inputValue=t??""}}focus(t){this.inline?this.base.focus(t):this.trigger.focus(t)}blur(){let t=this.inline?this.base:this.trigger;this.hasFocus&&(t.focus({preventScroll:!0}),t.blur()),this.dropdown?.open&&this.dropdown.hide()}getFormattedValue(t="hex"){let r=this.parseColor(`hsva(${this.hue}, ${this.saturation}%, ${this.brightness}%, ${this.alpha/100})`);if(r===null)return"";switch(t){case"hex":return r.hex;case"hexa":return r.hexa;case"rgb":return r.rgb.string;case"rgba":return r.rgba.string;case"hsl":return r.hsl.string;case"hsla":return r.hsla.string;case"hsv":return r.hsv.string;case"hsva":return r.hsva.string;default:return""}}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return!this.inline&&!this.validity.valid?(this.dropdown.show(),this.addEventListener("sl-after-show",()=>this.input.reportValidity(),{once:!0}),this.disabled||this.formControlController.emitInvalidEvent(),!1):this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity()}render(){let t=this.saturation,r=100-this.brightness,i=Array.isArray(this.swatches)?this.swatches:this.swatches.split(";").filter(n=>n.trim()!==""),a=g`
      <div
        part="base"
        class=${$({"color-picker":!0,"color-picker--inline":this.inline,"color-picker--disabled":this.disabled,"color-picker--focused":this.hasFocus})}
        aria-disabled=${this.disabled?"true":"false"}
        aria-labelledby="label"
        tabindex=${this.inline?"0":"-1"}
      >
        ${this.inline?g`
              <sl-visually-hidden id="label">
                <slot name="label">${this.label}</slot>
              </sl-visually-hidden>
            `:null}

        <div
          part="grid"
          class="color-picker__grid"
          style=${gt({backgroundColor:this.getHexString(this.hue,100,100)})}
          @pointerdown=${this.handleGridDrag}
          @touchmove=${this.handleTouchMove}
        >
          <span
            part="grid-handle"
            class=${$({"color-picker__grid-handle":!0,"color-picker__grid-handle--dragging":this.isDraggingGridHandle})}
            style=${gt({top:`${r}%`,left:`${t}%`,backgroundColor:this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
            role="application"
            aria-label="HSV"
            tabindex=${z(this.disabled?void 0:"0")}
            @keydown=${this.handleGridKeyDown}
          ></span>
        </div>

        <div class="color-picker__controls">
          <div class="color-picker__sliders">
            <div
              part="slider hue-slider"
              class="color-picker__hue color-picker__slider"
              @pointerdown=${this.handleHueDrag}
              @touchmove=${this.handleTouchMove}
            >
              <span
                part="slider-handle hue-slider-handle"
                class="color-picker__slider-handle"
                style=${gt({left:`${this.hue===0?0:100/(360/this.hue)}%`})}
                role="slider"
                aria-label="hue"
                aria-orientation="horizontal"
                aria-valuemin="0"
                aria-valuemax="360"
                aria-valuenow=${`${Math.round(this.hue)}`}
                tabindex=${z(this.disabled?void 0:"0")}
                @keydown=${this.handleHueKeyDown}
              ></span>
            </div>

            ${this.opacity?g`
                  <div
                    part="slider opacity-slider"
                    class="color-picker__alpha color-picker__slider color-picker__transparent-bg"
                    @pointerdown="${this.handleAlphaDrag}"
                    @touchmove=${this.handleTouchMove}
                  >
                    <div
                      class="color-picker__alpha-gradient"
                      style=${gt({backgroundImage:`linear-gradient(
                          to right,
                          ${this.getHexString(this.hue,this.saturation,this.brightness,0)} 0%,
                          ${this.getHexString(this.hue,this.saturation,this.brightness,100)} 100%
                        )`})}
                    ></div>
                    <span
                      part="slider-handle opacity-slider-handle"
                      class="color-picker__slider-handle"
                      style=${gt({left:`${this.alpha}%`})}
                      role="slider"
                      aria-label="alpha"
                      aria-orientation="horizontal"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      aria-valuenow=${Math.round(this.alpha)}
                      tabindex=${z(this.disabled?void 0:"0")}
                      @keydown=${this.handleAlphaKeyDown}
                    ></span>
                  </div>
                `:""}
          </div>

          <button
            type="button"
            part="preview"
            class="color-picker__preview color-picker__transparent-bg"
            aria-label=${this.localize.term("copy")}
            style=${gt({"--preview-color":this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
            @click=${this.handleCopy}
          ></button>
        </div>

        <div class="color-picker__user-input" aria-live="polite">
          <sl-input
            part="input"
            type="text"
            name=${this.name}
            autocomplete="off"
            autocorrect="off"
            autocapitalize="off"
            spellcheck="false"
            value=${this.isEmpty?"":this.inputValue}
            ?required=${this.required}
            ?disabled=${this.disabled}
            aria-label=${this.localize.term("currentValue")}
            @keydown=${this.handleInputKeyDown}
            @sl-change=${this.handleInputChange}
            @sl-input=${this.handleInputInput}
            @sl-invalid=${this.handleInputInvalid}
            @sl-blur=${this.stopNestedEventPropagation}
            @sl-focus=${this.stopNestedEventPropagation}
          ></sl-input>

          <sl-button-group>
            ${this.noFormatToggle?"":g`
                  <sl-button
                    part="format-button"
                    aria-label=${this.localize.term("toggleColorFormat")}
                    exportparts="
                      base:format-button__base,
                      prefix:format-button__prefix,
                      label:format-button__label,
                      suffix:format-button__suffix,
                      caret:format-button__caret
                    "
                    @click=${this.handleFormatToggle}
                    @sl-blur=${this.stopNestedEventPropagation}
                    @sl-focus=${this.stopNestedEventPropagation}
                  >
                    ${this.setLetterCase(this.format)}
                  </sl-button>
                `}
            ${pa?g`
                  <sl-button
                    part="eye-dropper-button"
                    exportparts="
                      base:eye-dropper-button__base,
                      prefix:eye-dropper-button__prefix,
                      label:eye-dropper-button__label,
                      suffix:eye-dropper-button__suffix,
                      caret:eye-dropper-button__caret
                    "
                    @click=${this.handleEyeDropper}
                    @sl-blur=${this.stopNestedEventPropagation}
                    @sl-focus=${this.stopNestedEventPropagation}
                  >
                    <sl-icon
                      library="system"
                      name="eyedropper"
                      label=${this.localize.term("selectAColorFromTheScreen")}
                    ></sl-icon>
                  </sl-button>
                `:""}
          </sl-button-group>
        </div>

        ${i.length>0?g`
              <div part="swatches" class="color-picker__swatches">
                ${i.map(n=>{let c=this.parseColor(n);return c?g`
                    <div
                      part="swatch"
                      class="color-picker__swatch color-picker__transparent-bg"
                      tabindex=${z(this.disabled?void 0:"0")}
                      role="button"
                      aria-label=${n}
                      @click=${()=>this.selectSwatch(n)}
                      @keydown=${d=>!this.disabled&&d.key==="Enter"&&this.setColor(c.hexa)}
                    >
                      <div
                        class="color-picker__swatch-color"
                        style=${gt({backgroundColor:c.hexa})}
                      ></div>
                    </div>
                  `:(console.error(`Unable to parse swatch color: "${n}"`,this),"")})}
              </div>
            `:""}
      </div>
    `;return this.inline?a:g`
      <sl-dropdown
        class="color-dropdown"
        aria-disabled=${this.disabled?"true":"false"}
        .containingElement=${this}
        ?disabled=${this.disabled}
        ?hoist=${this.hoist}
        @sl-after-hide=${this.handleAfterHide}
      >
        <button
          part="trigger"
          slot="trigger"
          class=${$({"color-dropdown__trigger":!0,"color-dropdown__trigger--disabled":this.disabled,"color-dropdown__trigger--small":this.size==="small","color-dropdown__trigger--medium":this.size==="medium","color-dropdown__trigger--large":this.size==="large","color-dropdown__trigger--empty":this.isEmpty,"color-dropdown__trigger--focused":this.hasFocus,"color-picker__transparent-bg":!0})}
          style=${gt({color:this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
          type="button"
        >
          <sl-visually-hidden>
            <slot name="label">${this.label}</slot>
          </sl-visually-hidden>
        </button>
        ${a}
      </sl-dropdown>
    `}};s([k('[part~="base"]')],B.prototype,"base",2),s([k('[part~="input"]')],B.prototype,"input",2),s([k(".color-dropdown")],B.prototype,"dropdown",2),s([k('[part~="preview"]')],B.prototype,"previewButton",2),s([k('[part~="trigger"]')],B.prototype,"trigger",2),s([S()],B.prototype,"hasFocus",2),s([S()],B.prototype,"isDraggingGridHandle",2),s([S()],B.prototype,"isEmpty",2),s([S()],B.prototype,"inputValue",2),s([S()],B.prototype,"hue",2),s([S()],B.prototype,"saturation",2),s([S()],B.prototype,"brightness",2),s([S()],B.prototype,"alpha",2),s([l()],B.prototype,"value",2),s([Xt()],B.prototype,"defaultValue",2),s([l()],B.prototype,"label",2),s([l()],B.prototype,"format",2),s([l({type:Boolean,reflect:!0})],B.prototype,"inline",2),s([l({reflect:!0})],B.prototype,"size",2),s([l({attribute:"no-format-toggle",type:Boolean})],B.prototype,"noFormatToggle",2),s([l()],B.prototype,"name",2),s([l({type:Boolean,reflect:!0})],B.prototype,"disabled",2),s([l({type:Boolean})],B.prototype,"hoist",2),s([l({type:Boolean})],B.prototype,"opacity",2),s([l({type:Boolean})],B.prototype,"uppercase",2),s([l()],B.prototype,"swatches",2),s([l({reflect:!0})],B.prototype,"form",2),s([l({type:Boolean,reflect:!0})],B.prototype,"required",2),s([de({passive:!1})],B.prototype,"handleTouchMove",1),s([v("format",{waitUntilFirstUpdate:!0})],B.prototype,"handleFormatChange",1),s([v("opacity",{waitUntilFirstUpdate:!0})],B.prototype,"handleOpacityChange",1),s([v("value")],B.prototype,"handleValueChange",1);var _d=B;B.define("sl-color-picker");var fa=_`
  :host {
    --max-width: 20rem;
    --hide-delay: 0ms;
    --show-delay: 150ms;

    display: contents;
  }

  .tooltip {
    --arrow-size: var(--sl-tooltip-arrow-size);
    --arrow-color: var(--sl-tooltip-background-color);
  }

  .tooltip::part(popup) {
    z-index: var(--sl-z-index-tooltip);
  }

  .tooltip[placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .tooltip[placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  .tooltip[placement^='left']::part(popup) {
    transform-origin: right;
  }

  .tooltip[placement^='right']::part(popup) {
    transform-origin: left;
  }

  .tooltip__body {
    display: block;
    width: max-content;
    max-width: var(--max-width);
    border-radius: var(--sl-tooltip-border-radius);
    background-color: var(--sl-tooltip-background-color);
    font-family: var(--sl-tooltip-font-family);
    font-size: var(--sl-tooltip-font-size);
    font-weight: var(--sl-tooltip-font-weight);
    line-height: var(--sl-tooltip-line-height);
    text-align: start;
    white-space: normal;
    color: var(--sl-tooltip-color);
    padding: var(--sl-tooltip-padding);
    pointer-events: none;
    user-select: none;
    -webkit-user-select: none;
  }
`;var at=class extends y{constructor(){super();this.localize=new L(this);this.content="";this.placement="top";this.disabled=!1;this.distance=8;this.open=!1;this.skidding=0;this.trigger="hover focus";this.hoist=!1;this.handleBlur=()=>{this.hasTrigger("focus")&&this.hide()};this.handleClick=()=>{this.hasTrigger("click")&&(this.open?this.hide():this.show())};this.handleFocus=()=>{this.hasTrigger("focus")&&this.show()};this.handleDocumentKeyDown=t=>{t.key==="Escape"&&(t.stopPropagation(),this.hide())};this.handleMouseOver=()=>{if(this.hasTrigger("hover")){let t=To(getComputedStyle(this).getPropertyValue("--show-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.show(),t)}};this.handleMouseOut=()=>{if(this.hasTrigger("hover")){let t=To(getComputedStyle(this).getPropertyValue("--hide-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.hide(),t)}};this.addEventListener("blur",this.handleBlur,!0),this.addEventListener("focus",this.handleFocus,!0),this.addEventListener("click",this.handleClick),this.addEventListener("mouseover",this.handleMouseOver),this.addEventListener("mouseout",this.handleMouseOut)}static{this.styles=[C,fa]}static{this.dependencies={"sl-popup":N}}disconnectedCallback(){super.disconnectedCallback(),this.closeWatcher?.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown)}firstUpdated(){this.body.hidden=!this.open,this.open&&(this.popup.active=!0,this.popup.reposition())}hasTrigger(t){return this.trigger.split(" ").includes(t)}async handleOpenChange(){if(this.open){if(this.disabled)return;this.emit("sl-show"),"CloseWatcher"in window?(this.closeWatcher?.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.hide()}):document.addEventListener("keydown",this.handleDocumentKeyDown),await Y(this.body),this.body.hidden=!1,this.popup.active=!0;let{keyframes:t,options:r}=j(this,"tooltip.show",{dir:this.localize.dir()});await X(this.popup.popup,t,r),this.popup.reposition(),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.closeWatcher?.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown),await Y(this.body);let{keyframes:t,options:r}=j(this,"tooltip.hide",{dir:this.localize.dir()});await X(this.popup.popup,t,r),this.popup.active=!1,this.body.hidden=!0,this.emit("sl-after-hide")}}async handleOptionsChange(){this.hasUpdated&&(await this.updateComplete,this.popup.reposition())}handleDisabledChange(){this.disabled&&this.open&&this.hide()}async show(){if(!this.open)return this.open=!0,rt(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,rt(this,"sl-after-hide")}render(){return g`
      <sl-popup
        part="base"
        exportparts="
          popup:base__popup,
          arrow:base__arrow
        "
        class=${$({tooltip:!0,"tooltip--open":this.open})}
        placement=${this.placement}
        distance=${this.distance}
        skidding=${this.skidding}
        strategy=${this.hoist?"fixed":"absolute"}
        flip
        shift
        arrow
        hover-bridge
      >
        ${""}
        <slot slot="anchor" aria-describedby="tooltip"></slot>

        ${""}
        <div part="body" id="tooltip" class="tooltip__body" role="tooltip" aria-live=${this.open?"polite":"off"}>
          <slot name="content">${this.content}</slot>
        </div>
      </sl-popup>
    `}};s([k("slot:not([name])")],at.prototype,"defaultSlot",2),s([k(".tooltip__body")],at.prototype,"body",2),s([k("sl-popup")],at.prototype,"popup",2),s([l()],at.prototype,"content",2),s([l()],at.prototype,"placement",2),s([l({type:Boolean,reflect:!0})],at.prototype,"disabled",2),s([l({type:Number})],at.prototype,"distance",2),s([l({type:Boolean,reflect:!0})],at.prototype,"open",2),s([l({type:Number})],at.prototype,"skidding",2),s([l()],at.prototype,"trigger",2),s([l({type:Boolean})],at.prototype,"hoist",2),s([v("open",{waitUntilFirstUpdate:!0})],at.prototype,"handleOpenChange",1),s([v(["content","distance","hoist","placement","skidding"])],at.prototype,"handleOptionsChange",1),s([v("disabled")],at.prototype,"handleDisabledChange",1);V("tooltip.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:150,easing:"ease"}});V("tooltip.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:150,easing:"ease"}});var ma=_`
  :host {
    --error-color: var(--sl-color-danger-600);
    --success-color: var(--sl-color-success-600);

    display: inline-block;
  }

  .copy-button__button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    background: none;
    border: none;
    border-radius: var(--sl-border-radius-medium);
    font-size: inherit;
    color: inherit;
    padding: var(--sl-spacing-x-small);
    cursor: pointer;
    transition: var(--sl-transition-x-fast) color;
  }

  .copy-button--success .copy-button__button {
    color: var(--success-color);
  }

  .copy-button--error .copy-button__button {
    color: var(--error-color);
  }

  .copy-button__button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .copy-button__button[disabled] {
    opacity: 0.5;
    cursor: not-allowed !important;
  }

  slot {
    display: inline-flex;
  }
`;var lt=class extends y{constructor(){super(...arguments);this.localize=new L(this);this.isCopying=!1;this.status="rest";this.value="";this.from="";this.disabled=!1;this.copyLabel="";this.successLabel="";this.errorLabel="";this.feedbackDuration=1e3;this.tooltipPlacement="top";this.hoist=!1}static{this.styles=[C,ma]}static{this.dependencies={"sl-icon":D,"sl-tooltip":at}}async handleCopy(){if(this.disabled||this.isCopying)return;this.isCopying=!0;let t=this.value;if(this.from){let r=this.getRootNode(),i=this.from.includes("."),a=this.from.includes("[")&&this.from.includes("]"),n=this.from,c="";i?[n,c]=this.from.trim().split("."):a&&([n,c]=this.from.trim().replace(/\]$/,"").split("["));let d="getElementById"in r?r.getElementById(n):null;d?a?t=d.getAttribute(c)||"":i?t=d[c]||"":t=d.textContent||"":(this.showStatus("error"),this.emit("sl-error"))}if(!t)this.showStatus("error"),this.emit("sl-error");else try{await navigator.clipboard.writeText(t),this.showStatus("success"),this.emit("sl-copy",{detail:{value:t}})}catch{this.showStatus("error"),this.emit("sl-error")}}async showStatus(t){let r=this.copyLabel||this.localize.term("copy"),i=this.successLabel||this.localize.term("copied"),a=this.errorLabel||this.localize.term("error"),n=t==="success"?this.successIcon:this.errorIcon,c=j(this,"copy.in",{dir:"ltr"}),d=j(this,"copy.out",{dir:"ltr"});this.tooltip.content=t==="success"?i:a,await this.copyIcon.animate(d.keyframes,d.options).finished,this.copyIcon.hidden=!0,this.status=t,n.hidden=!1,await n.animate(c.keyframes,c.options).finished,setTimeout(async()=>{await n.animate(d.keyframes,d.options).finished,n.hidden=!0,this.status="rest",this.copyIcon.hidden=!1,await this.copyIcon.animate(c.keyframes,c.options).finished,this.tooltip.content=r,this.isCopying=!1},this.feedbackDuration)}render(){let t=this.copyLabel||this.localize.term("copy");return g`
      <sl-tooltip
        class=${$({"copy-button":!0,"copy-button--success":this.status==="success","copy-button--error":this.status==="error"})}
        content=${t}
        placement=${this.tooltipPlacement}
        ?disabled=${this.disabled}
        ?hoist=${this.hoist}
        exportparts="
          base:tooltip__base,
          base__popup:tooltip__base__popup,
          base__arrow:tooltip__base__arrow,
          body:tooltip__body
        "
      >
        <button
          class="copy-button__button"
          part="button"
          type="button"
          ?disabled=${this.disabled}
          @click=${this.handleCopy}
        >
          <slot part="copy-icon" name="copy-icon">
            <sl-icon library="system" name="copy"></sl-icon>
          </slot>
          <slot part="success-icon" name="success-icon" hidden>
            <sl-icon library="system" name="check"></sl-icon>
          </slot>
          <slot part="error-icon" name="error-icon" hidden>
            <sl-icon library="system" name="x-lg"></sl-icon>
          </slot>
        </button>
      </sl-tooltip>
    `}};s([k('slot[name="copy-icon"]')],lt.prototype,"copyIcon",2),s([k('slot[name="success-icon"]')],lt.prototype,"successIcon",2),s([k('slot[name="error-icon"]')],lt.prototype,"errorIcon",2),s([k("sl-tooltip")],lt.prototype,"tooltip",2),s([S()],lt.prototype,"isCopying",2),s([S()],lt.prototype,"status",2),s([l()],lt.prototype,"value",2),s([l()],lt.prototype,"from",2),s([l({type:Boolean,reflect:!0})],lt.prototype,"disabled",2),s([l({attribute:"copy-label"})],lt.prototype,"copyLabel",2),s([l({attribute:"success-label"})],lt.prototype,"successLabel",2),s([l({attribute:"error-label"})],lt.prototype,"errorLabel",2),s([l({attribute:"feedback-duration",type:Number})],lt.prototype,"feedbackDuration",2),s([l({attribute:"tooltip-placement"})],lt.prototype,"tooltipPlacement",2),s([l({type:Boolean})],lt.prototype,"hoist",2);V("copy.in",{keyframes:[{scale:".25",opacity:".25"},{scale:"1",opacity:"1"}],options:{duration:100}});V("copy.out",{keyframes:[{scale:"1",opacity:"1"},{scale:".25",opacity:"0"}],options:{duration:100}});var kd=lt;lt.define("sl-copy-button");var ga=_`
  :host {
    display: block;
  }

  .details {
    border: solid 1px var(--sl-color-neutral-200);
    border-radius: var(--sl-border-radius-medium);
    background-color: var(--sl-color-neutral-0);
    overflow-anchor: none;
  }

  .details--disabled {
    opacity: 0.5;
  }

  .details__header {
    display: flex;
    align-items: center;
    border-radius: inherit;
    padding: var(--sl-spacing-medium);
    user-select: none;
    -webkit-user-select: none;
    cursor: pointer;
  }

  .details__header::-webkit-details-marker {
    display: none;
  }

  .details__header:focus {
    outline: none;
  }

  .details__header:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: calc(1px + var(--sl-focus-ring-offset));
  }

  .details--disabled .details__header {
    cursor: not-allowed;
  }

  .details--disabled .details__header:focus-visible {
    outline: none;
    box-shadow: none;
  }

  .details__summary {
    flex: 1 1 auto;
    display: flex;
    align-items: center;
  }

  .details__summary-icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    transition: var(--sl-transition-medium) rotate ease;
  }

  .details--open .details__summary-icon {
    rotate: 90deg;
  }

  .details--open.details--rtl .details__summary-icon {
    rotate: -90deg;
  }

  .details--open slot[name='expand-icon'],
  .details:not(.details--open) slot[name='collapse-icon'] {
    display: none;
  }

  .details__body {
    overflow: hidden;
  }

  .details__content {
    display: block;
    padding: var(--sl-spacing-medium);
  }
`;var It=class extends y{constructor(){super(...arguments);this.localize=new L(this);this.open=!1;this.disabled=!1}static{this.styles=[C,ga]}static{this.dependencies={"sl-icon":D}}firstUpdated(){this.body.style.height=this.open?"auto":"0",this.open&&(this.details.open=!0),this.detailsObserver=new MutationObserver(t=>{for(let r of t)r.type==="attributes"&&r.attributeName==="open"&&(this.details.open?this.show():this.hide())}),this.detailsObserver.observe(this.details,{attributes:!0})}disconnectedCallback(){super.disconnectedCallback(),this.detailsObserver?.disconnect()}handleSummaryClick(t){t.preventDefault(),this.disabled||(this.open?this.hide():this.show(),this.header.focus())}handleSummaryKeyDown(t){(t.key==="Enter"||t.key===" ")&&(t.preventDefault(),this.open?this.hide():this.show()),(t.key==="ArrowUp"||t.key==="ArrowLeft")&&(t.preventDefault(),this.hide()),(t.key==="ArrowDown"||t.key==="ArrowRight")&&(t.preventDefault(),this.show())}async handleOpenChange(){if(this.open){if(this.details.open=!0,this.emit("sl-show",{cancelable:!0}).defaultPrevented){this.open=!1,this.details.open=!1;return}await Y(this.body);let{keyframes:r,options:i}=j(this,"details.show",{dir:this.localize.dir()});await X(this.body,tr(r,this.body.scrollHeight),i),this.body.style.height="auto",this.emit("sl-after-show")}else{if(this.emit("sl-hide",{cancelable:!0}).defaultPrevented){this.details.open=!0,this.open=!0;return}await Y(this.body);let{keyframes:r,options:i}=j(this,"details.hide",{dir:this.localize.dir()});await X(this.body,tr(r,this.body.scrollHeight),i),this.body.style.height="auto",this.details.open=!1,this.emit("sl-after-hide")}}async show(){if(!(this.open||this.disabled))return this.open=!0,rt(this,"sl-after-show")}async hide(){if(!(!this.open||this.disabled))return this.open=!1,rt(this,"sl-after-hide")}render(){let t=this.localize.dir()==="rtl";return g`
      <details
        part="base"
        class=${$({details:!0,"details--open":this.open,"details--disabled":this.disabled,"details--rtl":t})}
      >
        <summary
          part="header"
          id="header"
          class="details__header"
          role="button"
          aria-expanded=${this.open?"true":"false"}
          aria-controls="content"
          aria-disabled=${this.disabled?"true":"false"}
          tabindex=${this.disabled?"-1":"0"}
          @click=${this.handleSummaryClick}
          @keydown=${this.handleSummaryKeyDown}
        >
          <slot name="summary" part="summary" class="details__summary">${this.summary}</slot>

          <span part="summary-icon" class="details__summary-icon">
            <slot name="expand-icon">
              <sl-icon library="system" name=${t?"chevron-left":"chevron-right"}></sl-icon>
            </slot>
            <slot name="collapse-icon">
              <sl-icon library="system" name=${t?"chevron-left":"chevron-right"}></sl-icon>
            </slot>
          </span>
        </summary>

        <div class="details__body" role="region" aria-labelledby="header">
          <slot part="content" id="content" class="details__content"></slot>
        </div>
      </details>
    `}};s([k(".details")],It.prototype,"details",2),s([k(".details__header")],It.prototype,"header",2),s([k(".details__body")],It.prototype,"body",2),s([k(".details__expand-icon-slot")],It.prototype,"expandIconSlot",2),s([l({type:Boolean,reflect:!0})],It.prototype,"open",2),s([l()],It.prototype,"summary",2),s([l({type:Boolean,reflect:!0})],It.prototype,"disabled",2),s([v("open",{waitUntilFirstUpdate:!0})],It.prototype,"handleOpenChange",1);V("details.show",{keyframes:[{height:"0",opacity:"0"},{height:"auto",opacity:"1"}],options:{duration:250,easing:"linear"}});V("details.hide",{keyframes:[{height:"auto",opacity:"1"},{height:"0",opacity:"0"}],options:{duration:250,easing:"linear"}});var Cd=It;It.define("sl-details");function ba(o,e){return{top:Math.round(o.getBoundingClientRect().top-e.getBoundingClientRect().top),left:Math.round(o.getBoundingClientRect().left-e.getBoundingClientRect().left)}}var ii=new Set;function Ed(){let o=document.documentElement.clientWidth;return Math.abs(window.innerWidth-o)}function Td(){let o=Number(getComputedStyle(document.body).paddingRight.replace(/px/,""));return isNaN(o)||!o?0:o}function Xe(o){if(ii.add(o),!document.documentElement.classList.contains("sl-scroll-lock")){let e=Ed()+Td(),t=getComputedStyle(document.documentElement).scrollbarGutter;(!t||t==="auto")&&(t="stable"),e<2&&(t=""),document.documentElement.style.setProperty("--sl-scroll-lock-gutter",t),document.documentElement.classList.add("sl-scroll-lock"),document.documentElement.style.setProperty("--sl-scroll-lock-size",`${e}px`)}}function Ye(o){ii.delete(o),ii.size===0&&(document.documentElement.classList.remove("sl-scroll-lock"),document.documentElement.style.removeProperty("--sl-scroll-lock-size"))}function Dr(o,e,t="vertical",r="smooth"){let i=ba(o,e),a=i.top+e.scrollTop,n=i.left+e.scrollLeft,c=e.scrollLeft,d=e.scrollLeft+e.offsetWidth,u=e.scrollTop,p=e.scrollTop+e.offsetHeight;(t==="horizontal"||t==="both")&&(n<c?e.scrollTo({left:n,behavior:r}):n+o.clientWidth>d&&e.scrollTo({left:n-e.offsetWidth+o.clientWidth,behavior:r})),(t==="vertical"||t==="both")&&(a<u?e.scrollTo({top:a,behavior:r}):a+o.clientHeight>p&&e.scrollTo({top:a-e.offsetHeight+o.clientHeight,behavior:r}))}var Fr=[],Ze=class{constructor(e){this.tabDirection="forward";this.handleFocusIn=()=>{this.isActive()&&this.checkFocus()};this.handleKeyDown=e=>{if(e.key!=="Tab"||this.isExternalActivated||!this.isActive())return;let t=uo();if(this.previousFocus=t,this.previousFocus&&this.possiblyHasTabbableChildren(this.previousFocus))return;e.shiftKey?this.tabDirection="backward":this.tabDirection="forward";let r=ho(this.element),i=r.findIndex(n=>n===t);this.previousFocus=this.currentFocus;let a=this.tabDirection==="forward"?1:-1;for(;;){i+a>=r.length?i=0:i+a<0?i=r.length-1:i+=a,this.previousFocus=this.currentFocus;let n=r[i];if(this.tabDirection==="backward"&&this.previousFocus&&this.possiblyHasTabbableChildren(this.previousFocus)||n&&this.possiblyHasTabbableChildren(n))return;e.preventDefault(),this.currentFocus=n,this.currentFocus?.focus({preventScroll:!1});let c=[...co()];if(c.includes(this.currentFocus)||!c.includes(this.previousFocus))break}setTimeout(()=>this.checkFocus())};this.handleKeyUp=()=>{this.tabDirection="forward"};this.element=e,this.elementsWithTabbableControls=["iframe"]}activate(){Fr.push(this.element),document.addEventListener("focusin",this.handleFocusIn),document.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keyup",this.handleKeyUp)}deactivate(){Fr=Fr.filter(e=>e!==this.element),this.currentFocus=null,document.removeEventListener("focusin",this.handleFocusIn),document.removeEventListener("keydown",this.handleKeyDown),document.removeEventListener("keyup",this.handleKeyUp)}isActive(){return Fr[Fr.length-1]===this.element}activateExternal(){this.isExternalActivated=!0}deactivateExternal(){this.isExternalActivated=!1}checkFocus(){if(this.isActive()&&!this.isExternalActivated){let e=ho(this.element);if(!this.element.matches(":focus-within")){let t=e[0],r=e[e.length-1],i=this.tabDirection==="forward"?t:r;typeof i?.focus=="function"&&(this.currentFocus=i,i.focus({preventScroll:!1}))}}}possiblyHasTabbableChildren(e){return this.elementsWithTabbableControls.includes(e.tagName.toLowerCase())||e.hasAttribute("controls")}};var va=_`
  :host {
    --width: 31rem;
    --header-spacing: var(--sl-spacing-large);
    --body-spacing: var(--sl-spacing-large);
    --footer-spacing: var(--sl-spacing-large);

    display: contents;
  }

  .dialog {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: var(--sl-z-index-dialog);
  }

  .dialog__panel {
    display: flex;
    flex-direction: column;
    z-index: 2;
    width: var(--width);
    max-width: calc(100% - var(--sl-spacing-2x-large));
    max-height: calc(100% - var(--sl-spacing-2x-large));
    background-color: var(--sl-panel-background-color);
    border-radius: var(--sl-border-radius-medium);
    box-shadow: var(--sl-shadow-x-large);
  }

  .dialog__panel:focus {
    outline: none;
  }

  /* Ensure there's enough vertical padding for phones that don't update vh when chrome appears (e.g. iPhone) */
  @media screen and (max-width: 420px) {
    .dialog__panel {
      max-height: 80vh;
    }
  }

  .dialog--open .dialog__panel {
    display: flex;
    opacity: 1;
  }

  .dialog__header {
    flex: 0 0 auto;
    display: flex;
  }

  .dialog__title {
    flex: 1 1 auto;
    font: inherit;
    font-size: var(--sl-font-size-large);
    line-height: var(--sl-line-height-dense);
    padding: var(--header-spacing);
    margin: 0;
  }

  .dialog__header-actions {
    flex-shrink: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: end;
    gap: var(--sl-spacing-2x-small);
    padding: 0 var(--header-spacing);
  }

  .dialog__header-actions sl-icon-button,
  .dialog__header-actions ::slotted(sl-icon-button) {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-medium);
  }

  .dialog__body {
    flex: 1 1 auto;
    display: block;
    padding: var(--body-spacing);
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }

  .dialog__footer {
    flex: 0 0 auto;
    text-align: right;
    padding: var(--footer-spacing);
  }

  .dialog__footer ::slotted(sl-button:not(:first-of-type)) {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  .dialog:not(.dialog--has-footer) .dialog__footer {
    display: none;
  }

  .dialog__overlay {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: var(--sl-overlay-background-color);
  }

  @media (forced-colors: active) {
    .dialog__panel {
      border: solid 1px var(--sl-color-neutral-0);
    }
  }
`;var Ut=class extends y{constructor(){super(...arguments);this.hasSlotController=new K(this,"footer");this.localize=new L(this);this.modal=new Ze(this);this.open=!1;this.label="";this.noHeader=!1;this.handleDocumentKeyDown=t=>{t.key==="Escape"&&this.modal.isActive()&&this.open&&(t.stopPropagation(),this.requestClose("keyboard"))}}static{this.styles=[C,va]}static{this.dependencies={"sl-icon-button":Q}}firstUpdated(){this.dialog.hidden=!this.open,this.open&&(this.addOpenListeners(),this.modal.activate(),Xe(this))}disconnectedCallback(){super.disconnectedCallback(),this.modal.deactivate(),Ye(this),this.removeOpenListeners()}requestClose(t){if(this.emit("sl-request-close",{cancelable:!0,detail:{source:t}}).defaultPrevented){let i=j(this,"dialog.denyClose",{dir:this.localize.dir()});X(this.panel,i.keyframes,i.options);return}this.hide()}addOpenListeners(){"CloseWatcher"in window?(this.closeWatcher?.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>this.requestClose("keyboard")):document.addEventListener("keydown",this.handleDocumentKeyDown)}removeOpenListeners(){this.closeWatcher?.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown)}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.addOpenListeners(),this.originalTrigger=document.activeElement,this.modal.activate(),Xe(this);let t=this.querySelector("[autofocus]");t&&t.removeAttribute("autofocus"),await Promise.all([Y(this.dialog),Y(this.overlay)]),this.dialog.hidden=!1,requestAnimationFrame(()=>{this.emit("sl-initial-focus",{cancelable:!0}).defaultPrevented||(t?t.focus({preventScroll:!0}):this.panel.focus({preventScroll:!0})),t&&t.setAttribute("autofocus","")});let r=j(this,"dialog.show",{dir:this.localize.dir()}),i=j(this,"dialog.overlay.show",{dir:this.localize.dir()});await Promise.all([X(this.panel,r.keyframes,r.options),X(this.overlay,i.keyframes,i.options)]),this.emit("sl-after-show")}else{er(this),this.emit("sl-hide"),this.removeOpenListeners(),this.modal.deactivate(),await Promise.all([Y(this.dialog),Y(this.overlay)]);let t=j(this,"dialog.hide",{dir:this.localize.dir()}),r=j(this,"dialog.overlay.hide",{dir:this.localize.dir()});await Promise.all([X(this.overlay,r.keyframes,r.options).then(()=>{this.overlay.hidden=!0}),X(this.panel,t.keyframes,t.options).then(()=>{this.panel.hidden=!0})]),this.dialog.hidden=!0,this.overlay.hidden=!1,this.panel.hidden=!1,Ye(this);let i=this.originalTrigger;typeof i?.focus=="function"&&setTimeout(()=>i.focus()),this.emit("sl-after-hide")}}async show(){if(!this.open)return this.open=!0,rt(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,rt(this,"sl-after-hide")}render(){return g`
      <div
        part="base"
        class=${$({dialog:!0,"dialog--open":this.open,"dialog--has-footer":this.hasSlotController.test("footer")})}
      >
        <div part="overlay" class="dialog__overlay" @click=${()=>this.requestClose("overlay")} tabindex="-1"></div>

        <div
          part="panel"
          class="dialog__panel"
          role="dialog"
          aria-modal="true"
          aria-hidden=${this.open?"false":"true"}
          aria-label=${z(this.noHeader?this.label:void 0)}
          aria-labelledby=${z(this.noHeader?void 0:"title")}
          tabindex="-1"
        >
          ${this.noHeader?"":g`
                <header part="header" class="dialog__header">
                  <h2 part="title" class="dialog__title" id="title">
                    <slot name="label"> ${this.label.length>0?this.label:"\uFEFF"} </slot>
                  </h2>
                  <div part="header-actions" class="dialog__header-actions">
                    <slot name="header-actions"></slot>
                    <sl-icon-button
                      part="close-button"
                      exportparts="base:close-button__base"
                      class="dialog__close"
                      name="x-lg"
                      label=${this.localize.term("close")}
                      library="system"
                      @click="${()=>this.requestClose("close-button")}"
                    ></sl-icon-button>
                  </div>
                </header>
              `}
          ${""}
          <div part="body" class="dialog__body" tabindex="-1"><slot></slot></div>

          <footer part="footer" class="dialog__footer">
            <slot name="footer"></slot>
          </footer>
        </div>
      </div>
    `}};s([k(".dialog")],Ut.prototype,"dialog",2),s([k(".dialog__panel")],Ut.prototype,"panel",2),s([k(".dialog__overlay")],Ut.prototype,"overlay",2),s([l({type:Boolean,reflect:!0})],Ut.prototype,"open",2),s([l({reflect:!0})],Ut.prototype,"label",2),s([l({attribute:"no-header",type:Boolean,reflect:!0})],Ut.prototype,"noHeader",2),s([v("open",{waitUntilFirstUpdate:!0})],Ut.prototype,"handleOpenChange",1);V("dialog.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:250,easing:"ease"}});V("dialog.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:250,easing:"ease"}});V("dialog.denyClose",{keyframes:[{scale:1},{scale:1.02},{scale:1}],options:{duration:250}});V("dialog.overlay.show",{keyframes:[{opacity:0},{opacity:1}],options:{duration:250}});V("dialog.overlay.hide",{keyframes:[{opacity:1},{opacity:0}],options:{duration:250}});var $d=Ut;Ut.define("sl-dialog");var ya=_`
  :host {
    --color: var(--sl-panel-border-color);
    --width: var(--sl-panel-border-width);
    --spacing: var(--sl-spacing-medium);
  }

  :host(:not([vertical])) {
    display: block;
    border-top: solid var(--width) var(--color);
    margin: var(--spacing) 0;
  }

  :host([vertical]) {
    display: inline-block;
    height: 100%;
    border-left: solid var(--width) var(--color);
    margin: 0 var(--spacing);
  }
`;var Oe=class extends y{constructor(){super(...arguments);this.vertical=!1}static{this.styles=[C,ya]}connectedCallback(){super.connectedCallback(),this.setAttribute("role","separator")}handleVerticalChange(){this.setAttribute("aria-orientation",this.vertical?"vertical":"horizontal")}};s([l({type:Boolean,reflect:!0})],Oe.prototype,"vertical",2),s([v("vertical")],Oe.prototype,"handleVerticalChange",1);var Sd=Oe;Oe.define("sl-divider");function si(o){return o.charAt(0).toUpperCase()+o.slice(1)}var xa=_`
  :host {
    --size: 25rem;
    --header-spacing: var(--sl-spacing-large);
    --body-spacing: var(--sl-spacing-large);
    --footer-spacing: var(--sl-spacing-large);

    display: contents;
  }

  .drawer {
    top: 0;
    inset-inline-start: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    overflow: hidden;
  }

  .drawer--contained {
    position: absolute;
    z-index: initial;
  }

  .drawer--fixed {
    position: fixed;
    z-index: var(--sl-z-index-drawer);
  }

  .drawer__panel {
    position: absolute;
    display: flex;
    flex-direction: column;
    z-index: 2;
    max-width: 100%;
    max-height: 100%;
    background-color: var(--sl-panel-background-color);
    box-shadow: var(--sl-shadow-x-large);
    overflow: auto;
    pointer-events: all;
  }

  .drawer__panel:focus {
    outline: none;
  }

  .drawer--top .drawer__panel {
    top: 0;
    inset-inline-end: auto;
    bottom: auto;
    inset-inline-start: 0;
    width: 100%;
    height: var(--size);
  }

  .drawer--end .drawer__panel {
    top: 0;
    inset-inline-end: 0;
    bottom: auto;
    inset-inline-start: auto;
    width: var(--size);
    height: 100%;
  }

  .drawer--bottom .drawer__panel {
    top: auto;
    inset-inline-end: auto;
    bottom: 0;
    inset-inline-start: 0;
    width: 100%;
    height: var(--size);
  }

  .drawer--start .drawer__panel {
    top: 0;
    inset-inline-end: auto;
    bottom: auto;
    inset-inline-start: 0;
    width: var(--size);
    height: 100%;
  }

  .drawer__header {
    display: flex;
  }

  .drawer__title {
    flex: 1 1 auto;
    font: inherit;
    font-size: var(--sl-font-size-large);
    line-height: var(--sl-line-height-dense);
    padding: var(--header-spacing);
    margin: 0;
  }

  .drawer__header-actions {
    flex-shrink: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: end;
    gap: var(--sl-spacing-2x-small);
    padding: 0 var(--header-spacing);
  }

  .drawer__header-actions sl-icon-button,
  .drawer__header-actions ::slotted(sl-icon-button) {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-medium);
  }

  .drawer__body {
    flex: 1 1 auto;
    display: block;
    padding: var(--body-spacing);
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }

  .drawer__footer {
    text-align: right;
    padding: var(--footer-spacing);
  }

  .drawer__footer ::slotted(sl-button:not(:last-of-type)) {
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .drawer:not(.drawer--has-footer) .drawer__footer {
    display: none;
  }

  .drawer__overlay {
    display: block;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: var(--sl-overlay-background-color);
    pointer-events: all;
  }

  .drawer--contained .drawer__overlay {
    display: none;
  }

  @media (forced-colors: active) {
    .drawer__panel {
      border: solid 1px var(--sl-color-neutral-0);
    }
  }
`;var Ct=class extends y{constructor(){super(...arguments);this.hasSlotController=new K(this,"footer");this.localize=new L(this);this.modal=new Ze(this);this.open=!1;this.label="";this.placement="end";this.contained=!1;this.noHeader=!1;this.handleDocumentKeyDown=t=>{this.contained||t.key==="Escape"&&this.modal.isActive()&&this.open&&(t.stopImmediatePropagation(),this.requestClose("keyboard"))}}static{this.styles=[C,xa]}static{this.dependencies={"sl-icon-button":Q}}firstUpdated(){this.drawer.hidden=!this.open,this.open&&(this.addOpenListeners(),this.contained||(this.modal.activate(),Xe(this)))}disconnectedCallback(){super.disconnectedCallback(),Ye(this),this.removeOpenListeners()}requestClose(t){if(this.emit("sl-request-close",{cancelable:!0,detail:{source:t}}).defaultPrevented){let i=j(this,"drawer.denyClose",{dir:this.localize.dir()});X(this.panel,i.keyframes,i.options);return}this.hide()}addOpenListeners(){"CloseWatcher"in window?(this.closeWatcher?.destroy(),this.contained||(this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>this.requestClose("keyboard"))):document.addEventListener("keydown",this.handleDocumentKeyDown)}removeOpenListeners(){document.removeEventListener("keydown",this.handleDocumentKeyDown),this.closeWatcher?.destroy()}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.addOpenListeners(),this.originalTrigger=document.activeElement,this.contained||(this.modal.activate(),Xe(this));let t=this.querySelector("[autofocus]");t&&t.removeAttribute("autofocus"),await Promise.all([Y(this.drawer),Y(this.overlay)]),this.drawer.hidden=!1,requestAnimationFrame(()=>{this.emit("sl-initial-focus",{cancelable:!0}).defaultPrevented||(t?t.focus({preventScroll:!0}):this.panel.focus({preventScroll:!0})),t&&t.setAttribute("autofocus","")});let r=j(this,`drawer.show${si(this.placement)}`,{dir:this.localize.dir()}),i=j(this,"drawer.overlay.show",{dir:this.localize.dir()});await Promise.all([X(this.panel,r.keyframes,r.options),X(this.overlay,i.keyframes,i.options)]),this.emit("sl-after-show")}else{er(this),this.emit("sl-hide"),this.removeOpenListeners(),this.contained||(this.modal.deactivate(),Ye(this)),await Promise.all([Y(this.drawer),Y(this.overlay)]);let t=j(this,`drawer.hide${si(this.placement)}`,{dir:this.localize.dir()}),r=j(this,"drawer.overlay.hide",{dir:this.localize.dir()});await Promise.all([X(this.overlay,r.keyframes,r.options).then(()=>{this.overlay.hidden=!0}),X(this.panel,t.keyframes,t.options).then(()=>{this.panel.hidden=!0})]),this.drawer.hidden=!0,this.overlay.hidden=!1,this.panel.hidden=!1;let i=this.originalTrigger;typeof i?.focus=="function"&&setTimeout(()=>i.focus()),this.emit("sl-after-hide")}}handleNoModalChange(){this.open&&!this.contained&&(this.modal.activate(),Xe(this)),this.open&&this.contained&&(this.modal.deactivate(),Ye(this))}async show(){if(!this.open)return this.open=!0,rt(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,rt(this,"sl-after-hide")}render(){return g`
      <div
        part="base"
        class=${$({drawer:!0,"drawer--open":this.open,"drawer--top":this.placement==="top","drawer--end":this.placement==="end","drawer--bottom":this.placement==="bottom","drawer--start":this.placement==="start","drawer--contained":this.contained,"drawer--fixed":!this.contained,"drawer--rtl":this.localize.dir()==="rtl","drawer--has-footer":this.hasSlotController.test("footer")})}
      >
        <div part="overlay" class="drawer__overlay" @click=${()=>this.requestClose("overlay")} tabindex="-1"></div>

        <div
          part="panel"
          class="drawer__panel"
          role="dialog"
          aria-modal="true"
          aria-hidden=${this.open?"false":"true"}
          aria-label=${z(this.noHeader?this.label:void 0)}
          aria-labelledby=${z(this.noHeader?void 0:"title")}
          tabindex="0"
        >
          ${this.noHeader?"":g`
                <header part="header" class="drawer__header">
                  <h2 part="title" class="drawer__title" id="title">
                    <!-- If there's no label, use an invisible character to prevent the header from collapsing -->
                    <slot name="label"> ${this.label.length>0?this.label:"\uFEFF"} </slot>
                  </h2>
                  <div part="header-actions" class="drawer__header-actions">
                    <slot name="header-actions"></slot>
                    <sl-icon-button
                      part="close-button"
                      exportparts="base:close-button__base"
                      class="drawer__close"
                      name="x-lg"
                      label=${this.localize.term("close")}
                      library="system"
                      @click=${()=>this.requestClose("close-button")}
                    ></sl-icon-button>
                  </div>
                </header>
              `}

          <slot part="body" class="drawer__body"></slot>

          <footer part="footer" class="drawer__footer">
            <slot name="footer"></slot>
          </footer>
        </div>
      </div>
    `}};s([k(".drawer")],Ct.prototype,"drawer",2),s([k(".drawer__panel")],Ct.prototype,"panel",2),s([k(".drawer__overlay")],Ct.prototype,"overlay",2),s([l({type:Boolean,reflect:!0})],Ct.prototype,"open",2),s([l({reflect:!0})],Ct.prototype,"label",2),s([l({reflect:!0})],Ct.prototype,"placement",2),s([l({type:Boolean,reflect:!0})],Ct.prototype,"contained",2),s([l({attribute:"no-header",type:Boolean,reflect:!0})],Ct.prototype,"noHeader",2),s([v("open",{waitUntilFirstUpdate:!0})],Ct.prototype,"handleOpenChange",1),s([v("contained",{waitUntilFirstUpdate:!0})],Ct.prototype,"handleNoModalChange",1);V("drawer.showTop",{keyframes:[{opacity:0,translate:"0 -100%"},{opacity:1,translate:"0 0"}],options:{duration:250,easing:"ease"}});V("drawer.hideTop",{keyframes:[{opacity:1,translate:"0 0"},{opacity:0,translate:"0 -100%"}],options:{duration:250,easing:"ease"}});V("drawer.showEnd",{keyframes:[{opacity:0,translate:"100%"},{opacity:1,translate:"0"}],rtlKeyframes:[{opacity:0,translate:"-100%"},{opacity:1,translate:"0"}],options:{duration:250,easing:"ease"}});V("drawer.hideEnd",{keyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"100%"}],rtlKeyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"-100%"}],options:{duration:250,easing:"ease"}});V("drawer.showBottom",{keyframes:[{opacity:0,translate:"0 100%"},{opacity:1,translate:"0 0"}],options:{duration:250,easing:"ease"}});V("drawer.hideBottom",{keyframes:[{opacity:1,translate:"0 0"},{opacity:0,translate:"0 100%"}],options:{duration:250,easing:"ease"}});V("drawer.showStart",{keyframes:[{opacity:0,translate:"-100%"},{opacity:1,translate:"0"}],rtlKeyframes:[{opacity:0,translate:"100%"},{opacity:1,translate:"0"}],options:{duration:250,easing:"ease"}});V("drawer.hideStart",{keyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"-100%"}],rtlKeyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"100%"}],options:{duration:250,easing:"ease"}});V("drawer.denyClose",{keyframes:[{scale:1},{scale:1.01},{scale:1}],options:{duration:250}});V("drawer.overlay.show",{keyframes:[{opacity:0},{opacity:1}],options:{duration:250}});V("drawer.overlay.hide",{keyframes:[{opacity:1},{opacity:0}],options:{duration:250}});var Md=Ct;Ct.define("sl-drawer");var zd=nt;nt.define("sl-dropdown");var ke=class extends y{constructor(){super(...arguments);this.localize=new L(this);this.value=0;this.unit="byte";this.display="short"}render(){if(isNaN(this.value))return"";let t=["","kilo","mega","giga","tera"],r=["","kilo","mega","giga","tera","peta"],i=this.unit==="bit"?t:r,a=Math.max(0,Math.min(Math.floor(Math.log10(this.value)/3),i.length-1)),n=i[a]+this.unit,c=parseFloat((this.value/Math.pow(1e3,a)).toPrecision(3));return this.localize.number(c,{style:"unit",unit:n,unitDisplay:this.display})}};s([l({type:Number})],ke.prototype,"value",2),s([l()],ke.prototype,"unit",2),s([l()],ke.prototype,"display",2);var Ad=ke;ke.define("sl-format-bytes");var wt=class extends y{constructor(){super(...arguments);this.localize=new L(this);this.date=new Date;this.hourFormat="auto"}render(){let t=new Date(this.date),r=this.hourFormat==="auto"?void 0:this.hourFormat==="12";if(!isNaN(t.getMilliseconds()))return g`
      <time datetime=${t.toISOString()}>
        ${this.localize.date(t,{weekday:this.weekday,era:this.era,year:this.year,month:this.month,day:this.day,hour:this.hour,minute:this.minute,second:this.second,timeZoneName:this.timeZoneName,timeZone:this.timeZone,hour12:r})}
      </time>
    `}};s([l()],wt.prototype,"date",2),s([l()],wt.prototype,"weekday",2),s([l()],wt.prototype,"era",2),s([l()],wt.prototype,"year",2),s([l()],wt.prototype,"month",2),s([l()],wt.prototype,"day",2),s([l()],wt.prototype,"hour",2),s([l()],wt.prototype,"minute",2),s([l()],wt.prototype,"second",2),s([l({attribute:"time-zone-name"})],wt.prototype,"timeZoneName",2),s([l({attribute:"time-zone"})],wt.prototype,"timeZone",2),s([l({attribute:"hour-format"})],wt.prototype,"hourFormat",2);var Ld=wt;wt.define("sl-format-date");var Et=class extends y{constructor(){super(...arguments);this.localize=new L(this);this.value=0;this.type="decimal";this.noGrouping=!1;this.currency="USD";this.currencyDisplay="symbol"}render(){return isNaN(this.value)?"":this.localize.number(this.value,{style:this.type,currency:this.currency,currencyDisplay:this.currencyDisplay,useGrouping:!this.noGrouping,minimumIntegerDigits:this.minimumIntegerDigits,minimumFractionDigits:this.minimumFractionDigits,maximumFractionDigits:this.maximumFractionDigits,minimumSignificantDigits:this.minimumSignificantDigits,maximumSignificantDigits:this.maximumSignificantDigits})}};s([l({type:Number})],Et.prototype,"value",2),s([l()],Et.prototype,"type",2),s([l({attribute:"no-grouping",type:Boolean})],Et.prototype,"noGrouping",2),s([l()],Et.prototype,"currency",2),s([l({attribute:"currency-display"})],Et.prototype,"currencyDisplay",2),s([l({attribute:"minimum-integer-digits",type:Number})],Et.prototype,"minimumIntegerDigits",2),s([l({attribute:"minimum-fraction-digits",type:Number})],Et.prototype,"minimumFractionDigits",2),s([l({attribute:"maximum-fraction-digits",type:Number})],Et.prototype,"maximumFractionDigits",2),s([l({attribute:"minimum-significant-digits",type:Number})],Et.prototype,"minimumSignificantDigits",2),s([l({attribute:"maximum-significant-digits",type:Number})],Et.prototype,"maximumSignificantDigits",2);var Hd=Et;Et.define("sl-format-number");var Rd=D;D.define("sl-icon");var Od=Q;Q.define("sl-icon-button");var wa=_`
  :host {
    --divider-width: 2px;
    --handle-size: 2.5rem;

    display: inline-block;
    position: relative;
  }

  .image-comparer {
    max-width: 100%;
    max-height: 100%;
    overflow: hidden;
  }

  .image-comparer__before,
  .image-comparer__after {
    display: block;
    pointer-events: none;
  }

  .image-comparer__before::slotted(img),
  .image-comparer__after::slotted(img),
  .image-comparer__before::slotted(svg),
  .image-comparer__after::slotted(svg) {
    display: block;
    max-width: 100% !important;
    height: auto;
  }

  .image-comparer__after {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
  }

  .image-comparer__divider {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    width: var(--divider-width);
    height: 100%;
    background-color: var(--sl-color-neutral-0);
    translate: calc(var(--divider-width) / -2);
    cursor: ew-resize;
  }

  .image-comparer__handle {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: calc(50% - (var(--handle-size) / 2));
    width: var(--handle-size);
    height: var(--handle-size);
    background-color: var(--sl-color-neutral-0);
    border-radius: var(--sl-border-radius-circle);
    font-size: calc(var(--handle-size) * 0.5);
    color: var(--sl-color-neutral-700);
    cursor: inherit;
    z-index: 10;
  }

  .image-comparer__handle:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }
`;var pe=class extends y{constructor(){super(...arguments);this.localize=new L(this);this.position=50}static{this.styles=[C,wa]}static{this.scopedElement={"sl-icon":D}}handleDrag(t){let{width:r}=this.base.getBoundingClientRect(),i=this.localize.dir()==="rtl";t.preventDefault(),Ae(this.base,{onMove:a=>{this.position=parseFloat(tt(a/r*100,0,100).toFixed(2)),i&&(this.position=100-this.position)},initialEvent:t})}handleKeyDown(t){let r=this.localize.dir()==="ltr",i=this.localize.dir()==="rtl";if(["ArrowLeft","ArrowRight","Home","End"].includes(t.key)){let a=t.shiftKey?10:1,n=this.position;t.preventDefault(),(r&&t.key==="ArrowLeft"||i&&t.key==="ArrowRight")&&(n-=a),(r&&t.key==="ArrowRight"||i&&t.key==="ArrowLeft")&&(n+=a),t.key==="Home"&&(n=0),t.key==="End"&&(n=100),n=tt(n,0,100),this.position=n}}handlePositionChange(){this.emit("sl-change")}render(){let t=this.localize.dir()==="rtl";return g`
      <div
        part="base"
        id="image-comparer"
        class=${$({"image-comparer":!0,"image-comparer--rtl":t})}
        @keydown=${this.handleKeyDown}
      >
        <div class="image-comparer__image">
          <div part="before" class="image-comparer__before">
            <slot name="before"></slot>
          </div>

          <div
            part="after"
            class="image-comparer__after"
            style=${gt({clipPath:t?`inset(0 0 0 ${100-this.position}%)`:`inset(0 ${100-this.position}% 0 0)`})}
          >
            <slot name="after"></slot>
          </div>
        </div>

        <div
          part="divider"
          class="image-comparer__divider"
          style=${gt({left:t?`${100-this.position}%`:`${this.position}%`})}
          @mousedown=${this.handleDrag}
          @touchstart=${this.handleDrag}
        >
          <div
            part="handle"
            class="image-comparer__handle"
            role="scrollbar"
            aria-valuenow=${this.position}
            aria-valuemin="0"
            aria-valuemax="100"
            aria-controls="image-comparer"
            tabindex="0"
          >
            <slot name="handle">
              <sl-icon library="system" name="grip-vertical"></sl-icon>
            </slot>
          </div>
        </div>
      </div>
    `}};s([k(".image-comparer")],pe.prototype,"base",2),s([k(".image-comparer__handle")],pe.prototype,"handle",2),s([l({type:Number,reflect:!0})],pe.prototype,"position",2),s([v("position",{waitUntilFirstUpdate:!0})],pe.prototype,"handlePositionChange",1);var Id=pe;pe.define("sl-image-comparer");var ai=new Map;function _a(o,e="cors"){let t=ai.get(o);if(t!==void 0)return Promise.resolve(t);let r=fetch(o,{mode:e}).then(async i=>{let a={ok:i.ok,status:i.status,html:await i.text()};return ai.set(o,a),a});return ai.set(o,r),r}var ka=_`
  :host {
    display: block;
  }
`;var fe=class extends y{constructor(){super(...arguments);this.mode="cors";this.allowScripts=!1}static{this.styles=[C,ka]}executeScript(t){let r=document.createElement("script");[...t.attributes].forEach(i=>r.setAttribute(i.name,i.value)),r.textContent=t.textContent,t.parentNode.replaceChild(r,t)}async handleSrcChange(){try{let t=this.src,r=await _a(t,this.mode);if(t!==this.src)return;if(!r.ok){this.emit("sl-error",{detail:{status:r.status}});return}this.innerHTML=r.html,this.allowScripts&&[...this.querySelectorAll("script")].forEach(i=>this.executeScript(i)),this.emit("sl-load")}catch{this.emit("sl-error",{detail:{status:-1}})}}render(){return g`<slot></slot>`}};s([l()],fe.prototype,"src",2),s([l()],fe.prototype,"mode",2),s([l({attribute:"allow-scripts",type:Boolean})],fe.prototype,"allowScripts",2),s([v("src")],fe.prototype,"handleSrcChange",1);var Dd=fe;fe.define("sl-include");var Fd=F;F.define("sl-input");var Ca=_`
  :host {
    display: block;
    position: relative;
    background: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-radius: var(--sl-border-radius-medium);
    padding: var(--sl-spacing-x-small) 0;
    overflow: auto;
    overscroll-behavior: none;
  }

  ::slotted(sl-divider) {
    --spacing: var(--sl-spacing-x-small);
  }
`;var Qe=class extends y{static{this.styles=[C,Ca]}connectedCallback(){super.connectedCallback(),this.setAttribute("role","menu")}handleClick(e){let t=["menuitem","menuitemcheckbox"],r=e.composedPath(),i=r.find(d=>t.includes(d?.getAttribute?.("role")||""));if(!i||r.find(d=>d?.getAttribute?.("role")==="menu")!==this)return;let c=i;c.type==="checkbox"&&(c.checked=!c.checked),this.emit("sl-select",{detail:{item:c}})}handleKeyDown(e){if(e.key==="Enter"||e.key===" "){let t=this.getCurrentItem();e.preventDefault(),e.stopPropagation(),t?.click()}else if(["ArrowDown","ArrowUp","Home","End"].includes(e.key)){let t=this.getAllItems(),r=this.getCurrentItem(),i=r?t.indexOf(r):0;t.length>0&&(e.preventDefault(),e.stopPropagation(),e.key==="ArrowDown"?i++:e.key==="ArrowUp"?i--:e.key==="Home"?i=0:e.key==="End"&&(i=t.length-1),i<0&&(i=t.length-1),i>t.length-1&&(i=0),this.setCurrentItem(t[i]),t[i].focus())}}handleMouseDown(e){let t=e.target;this.isMenuItem(t)&&this.setCurrentItem(t)}handleSlotChange(){let e=this.getAllItems();e.length>0&&this.setCurrentItem(e[0])}isMenuItem(e){return e.tagName.toLowerCase()==="sl-menu-item"||["menuitem","menuitemcheckbox","menuitemradio"].includes(e.getAttribute("role")??"")}getAllItems(){return[...this.defaultSlot.assignedElements({flatten:!0})].filter(e=>!(e.inert||!this.isMenuItem(e)))}getCurrentItem(){return this.getAllItems().find(e=>e.getAttribute("tabindex")==="0")}setCurrentItem(e){this.getAllItems().forEach(r=>{r.setAttribute("tabindex",r===e?"0":"-1")})}render(){return g`
      <slot
        @slotchange=${this.handleSlotChange}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        @mousedown=${this.handleMouseDown}
      ></slot>
    `}};s([k("slot")],Qe.prototype,"defaultSlot",2);var Pd=Qe;Qe.define("sl-menu");var Pr=(o,e)=>{let t=o._$AN;if(t===void 0)return!1;for(let r of t)r._$AO?.(e,!1),Pr(r,e);return!0},wo=o=>{let e,t;do{if((e=o._$AM)===void 0)break;t=e._$AN,t.delete(o),o=e}while(t?.size===0)},Ea=o=>{for(let e;e=o._$AM;o=e){let t=e._$AN;if(t===void 0)e._$AN=t=new Set;else if(t.has(o))break;t.add(o),Bd(e)}};function Vd(o){this._$AN!==void 0?(wo(this),this._$AM=o,Ea(this)):this._$AM=o}function Nd(o,e=!1,t=0){let r=this._$AH,i=this._$AN;if(i!==void 0&&i.size!==0)if(e)if(Array.isArray(r))for(let a=t;a<r.length;a++)Pr(r[a],!1),wo(r[a]);else r!=null&&(Pr(r,!1),wo(r));else Pr(this,o)}var Bd=o=>{o.type==$t.CHILD&&(o._$AP??=Nd,o._$AQ??=Vd)},_o=class extends Wt{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,r){super._$AT(e,t,r),Ea(this),this.isConnected=e._$AU}_$AO(e,t=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),t&&(Pr(this,e),wo(this))}setValue(e){if(eo(this._$Ct))this._$Ct._$AI(e,this);else{let t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}};var Ta=()=>new li,li=class{},ni=new WeakMap,$a=oe(class extends _o{render(o){return Z}update(o,[e]){let t=e!==this.G;return t&&this.G!==void 0&&this.rt(void 0),(t||this.lt!==this.ct)&&(this.G=e,this.ht=o.options?.host,this.rt(this.ct=o.element)),Z}rt(o){if(this.isConnected||(o=void 0),typeof this.G=="function"){let e=this.ht??globalThis,t=ni.get(e);t===void 0&&(t=new WeakMap,ni.set(e,t)),t.get(this.G)!==void 0&&this.G.call(this.ht,void 0),t.set(this.G,o),o!==void 0&&this.G.call(this.ht,o)}else this.G.value=o}get lt(){return typeof this.G=="function"?ni.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});var ko=class{constructor(e,t){this.popupRef=Ta();this.enableSubmenuTimer=-1;this.isConnected=!1;this.isPopupConnected=!1;this.skidding=0;this.submenuOpenDelay=100;this.handleMouseMove=e=>{this.host.style.setProperty("--safe-triangle-cursor-x",`${e.clientX}px`),this.host.style.setProperty("--safe-triangle-cursor-y",`${e.clientY}px`)};this.handleMouseOver=()=>{this.hasSlotController.test("submenu")&&this.enableSubmenu()};this.handleKeyDown=e=>{switch(e.key){case"Escape":case"Tab":this.disableSubmenu();break;case"ArrowLeft":e.target!==this.host&&(e.preventDefault(),e.stopPropagation(),this.host.focus(),this.disableSubmenu());break;case"ArrowRight":case"Enter":case" ":this.handleSubmenuEntry(e);break;default:break}};this.handleClick=e=>{e.target===this.host?(e.preventDefault(),e.stopPropagation()):e.target instanceof Element&&(e.target.tagName==="sl-menu-item"||e.target.role?.startsWith("menuitem"))&&this.disableSubmenu()};this.handleFocusOut=e=>{e.relatedTarget&&e.relatedTarget instanceof Element&&this.host.contains(e.relatedTarget)||this.disableSubmenu()};this.handlePopupMouseover=e=>{e.stopPropagation()};this.handlePopupReposition=()=>{let t=this.host.renderRoot.querySelector("slot[name='submenu']")?.assignedElements({flatten:!0}).filter(d=>d.localName==="sl-menu")[0],r=getComputedStyle(this.host).direction==="rtl";if(!t)return;let{left:i,top:a,width:n,height:c}=t.getBoundingClientRect();this.host.style.setProperty("--safe-triangle-submenu-start-x",`${r?i+n:i}px`),this.host.style.setProperty("--safe-triangle-submenu-start-y",`${a}px`),this.host.style.setProperty("--safe-triangle-submenu-end-x",`${r?i+n:i}px`),this.host.style.setProperty("--safe-triangle-submenu-end-y",`${a+c}px`)};(this.host=e).addController(this),this.hasSlotController=t}hostConnected(){this.hasSlotController.test("submenu")&&!this.host.disabled&&this.addListeners()}hostDisconnected(){this.removeListeners()}hostUpdated(){this.hasSlotController.test("submenu")&&!this.host.disabled?(this.addListeners(),this.updateSkidding()):this.removeListeners()}addListeners(){this.isConnected||(this.host.addEventListener("mousemove",this.handleMouseMove),this.host.addEventListener("mouseover",this.handleMouseOver),this.host.addEventListener("keydown",this.handleKeyDown),this.host.addEventListener("click",this.handleClick),this.host.addEventListener("focusout",this.handleFocusOut),this.isConnected=!0),this.isPopupConnected||this.popupRef.value&&(this.popupRef.value.addEventListener("mouseover",this.handlePopupMouseover),this.popupRef.value.addEventListener("sl-reposition",this.handlePopupReposition),this.isPopupConnected=!0)}removeListeners(){this.isConnected&&(this.host.removeEventListener("mousemove",this.handleMouseMove),this.host.removeEventListener("mouseover",this.handleMouseOver),this.host.removeEventListener("keydown",this.handleKeyDown),this.host.removeEventListener("click",this.handleClick),this.host.removeEventListener("focusout",this.handleFocusOut),this.isConnected=!1),this.isPopupConnected&&this.popupRef.value&&(this.popupRef.value.removeEventListener("mouseover",this.handlePopupMouseover),this.popupRef.value.removeEventListener("sl-reposition",this.handlePopupReposition),this.isPopupConnected=!1)}handleSubmenuEntry(e){let t=this.host.renderRoot.querySelector("slot[name='submenu']");if(!t){console.error("Cannot activate a submenu if no corresponding menuitem can be found.",this);return}let r=null;for(let i of t.assignedElements())if(r=i.querySelectorAll("sl-menu-item, [role^='menuitem']"),r.length!==0)break;if(!(!r||r.length===0)){r[0].setAttribute("tabindex","0");for(let i=1;i!==r.length;++i)r[i].setAttribute("tabindex","-1");this.popupRef.value&&(e.preventDefault(),e.stopPropagation(),this.popupRef.value.active?r[0]instanceof HTMLElement&&r[0].focus():(this.enableSubmenu(!1),this.host.updateComplete.then(()=>{r[0]instanceof HTMLElement&&r[0].focus()}),this.host.requestUpdate()))}}setSubmenuState(e){this.popupRef.value&&this.popupRef.value.active!==e&&(this.popupRef.value.active=e,this.host.requestUpdate())}enableSubmenu(e=!0){e?(window.clearTimeout(this.enableSubmenuTimer),this.enableSubmenuTimer=window.setTimeout(()=>{this.setSubmenuState(!0)},this.submenuOpenDelay)):this.setSubmenuState(!0)}disableSubmenu(){window.clearTimeout(this.enableSubmenuTimer),this.setSubmenuState(!1)}updateSkidding(){if(!this.host.parentElement?.computedStyleMap)return;let e=this.host.parentElement.computedStyleMap(),r=["padding-top","border-top-width","margin-top"].reduce((i,a)=>{let n=e.get(a)??new CSSUnitValue(0,"px"),d=(n instanceof CSSUnitValue?n:new CSSUnitValue(0,"px")).to("px");return i-d.value},0);this.skidding=r}isExpanded(){return this.popupRef.value?this.popupRef.value.active:!1}renderSubmenu(){let e=getComputedStyle(this.host).direction==="rtl";return this.isConnected?g`
      <sl-popup
        ${$a(this.popupRef)}
        placement=${e?"left-start":"right-start"}
        anchor="anchor"
        flip
        flip-fallback-strategy="best-fit"
        skidding="${this.skidding}"
        strategy="fixed"
        auto-size="vertical"
        auto-size-padding="10"
      >
        <slot name="submenu"></slot>
      </sl-popup>
    `:g` <slot name="submenu" hidden></slot> `}};var Sa=_`
  :host {
    --submenu-offset: -2px;

    display: block;
  }

  :host([inert]) {
    display: none;
  }

  .menu-item {
    position: relative;
    display: flex;
    align-items: stretch;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    line-height: var(--sl-line-height-normal);
    letter-spacing: var(--sl-letter-spacing-normal);
    color: var(--sl-color-neutral-700);
    padding: var(--sl-spacing-2x-small) var(--sl-spacing-2x-small);
    transition: var(--sl-transition-fast) fill;
    user-select: none;
    -webkit-user-select: none;
    white-space: nowrap;
    cursor: pointer;
  }

  .menu-item.menu-item--disabled {
    outline: none;
    opacity: 0.5;
    cursor: not-allowed;
  }

  .menu-item.menu-item--loading {
    outline: none;
    cursor: wait;
  }

  .menu-item.menu-item--loading *:not(sl-spinner) {
    opacity: 0.5;
  }

  .menu-item--loading sl-spinner {
    --indicator-color: currentColor;
    --track-width: 1px;
    position: absolute;
    font-size: 0.75em;
    top: calc(50% - 0.5em);
    left: 0.65rem;
    opacity: 1;
  }

  .menu-item .menu-item__label {
    flex: 1 1 auto;
    display: inline-block;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  .menu-item .menu-item__prefix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .menu-item .menu-item__prefix::slotted(*) {
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .menu-item .menu-item__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .menu-item .menu-item__suffix::slotted(*) {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  /* Safe triangle */
  .menu-item--submenu-expanded::after {
    content: '';
    position: fixed;
    z-index: calc(var(--sl-z-index-dropdown) - 1);
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    clip-path: polygon(
      var(--safe-triangle-cursor-x, 0) var(--safe-triangle-cursor-y, 0),
      var(--safe-triangle-submenu-start-x, 0) var(--safe-triangle-submenu-start-y, 0),
      var(--safe-triangle-submenu-end-x, 0) var(--safe-triangle-submenu-end-y, 0)
    );
  }

  :host(:focus-visible) {
    outline: none;
  }

  :host(:hover:not([aria-disabled='true'], :focus-visible)) .menu-item,
  .menu-item--submenu-expanded {
    background-color: var(--sl-color-neutral-100);
    color: var(--sl-color-neutral-1000);
  }

  :host(:focus-visible) .menu-item {
    outline: none;
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
    opacity: 1;
  }

  .menu-item .menu-item__check,
  .menu-item .menu-item__chevron {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1.5em;
    visibility: hidden;
  }

  .menu-item--checked .menu-item__check,
  .menu-item--has-submenu .menu-item__chevron {
    visibility: visible;
  }

  /* Add elevation and z-index to submenus */
  sl-popup::part(popup) {
    box-shadow: var(--sl-shadow-large);
    z-index: var(--sl-z-index-dropdown);
    margin-left: var(--submenu-offset);
  }

  .menu-item--rtl sl-popup::part(popup) {
    margin-left: calc(-1 * var(--submenu-offset));
  }

  @media (forced-colors: active) {
    :host(:hover:not([aria-disabled='true'])) .menu-item,
    :host(:focus-visible) .menu-item {
      outline: dashed 1px SelectedItem;
      outline-offset: -1px;
    }
  }

  ::slotted(sl-menu) {
    max-width: var(--auto-size-available-width) !important;
    max-height: var(--auto-size-available-height) !important;
  }
`;var Tt=class extends y{constructor(){super(...arguments);this.localize=new L(this);this.type="normal";this.checked=!1;this.value="";this.loading=!1;this.disabled=!1;this.hasSlotController=new K(this,"submenu");this.submenuController=new ko(this,this.hasSlotController);this.handleHostClick=t=>{this.disabled&&(t.preventDefault(),t.stopImmediatePropagation())};this.handleMouseOver=t=>{this.focus(),t.stopPropagation()}}static{this.styles=[C,Sa]}static{this.dependencies={"sl-icon":D,"sl-popup":N,"sl-spinner":Kt}}connectedCallback(){super.connectedCallback(),this.addEventListener("click",this.handleHostClick),this.addEventListener("mouseover",this.handleMouseOver)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",this.handleHostClick),this.removeEventListener("mouseover",this.handleMouseOver)}handleDefaultSlotChange(){let t=this.getTextLabel();if(typeof this.cachedTextLabel>"u"){this.cachedTextLabel=t;return}t!==this.cachedTextLabel&&(this.cachedTextLabel=t,this.emit("slotchange",{bubbles:!0,composed:!1,cancelable:!1}))}handleCheckedChange(){if(this.checked&&this.type!=="checkbox"){this.checked=!1,console.error('The checked attribute can only be used on menu items with type="checkbox"',this);return}this.type==="checkbox"?this.setAttribute("aria-checked",this.checked?"true":"false"):this.removeAttribute("aria-checked")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleTypeChange(){this.type==="checkbox"?(this.setAttribute("role","menuitemcheckbox"),this.setAttribute("aria-checked",this.checked?"true":"false")):(this.setAttribute("role","menuitem"),this.removeAttribute("aria-checked"))}getTextLabel(){return Si(this.defaultSlot)}isSubmenu(){return this.hasSlotController.test("submenu")}render(){let t=this.localize.dir()==="rtl",r=this.submenuController.isExpanded();return g`
      <div
        id="anchor"
        part="base"
        class=${$({"menu-item":!0,"menu-item--rtl":t,"menu-item--checked":this.checked,"menu-item--disabled":this.disabled,"menu-item--loading":this.loading,"menu-item--has-submenu":this.isSubmenu(),"menu-item--submenu-expanded":r})}
        ?aria-haspopup="${this.isSubmenu()}"
        ?aria-expanded="${!!r}"
      >
        <span part="checked-icon" class="menu-item__check">
          <sl-icon name="check" library="system" aria-hidden="true"></sl-icon>
        </span>

        <slot name="prefix" part="prefix" class="menu-item__prefix"></slot>

        <slot part="label" class="menu-item__label" @slotchange=${this.handleDefaultSlotChange}></slot>

        <slot name="suffix" part="suffix" class="menu-item__suffix"></slot>

        <span part="submenu-icon" class="menu-item__chevron">
          <sl-icon name=${t?"chevron-left":"chevron-right"} library="system" aria-hidden="true"></sl-icon>
        </span>

        ${this.submenuController.renderSubmenu()}
        ${this.loading?g` <sl-spinner part="spinner" exportparts="base:spinner__base"></sl-spinner> `:""}
      </div>
    `}};s([k("slot:not([name])")],Tt.prototype,"defaultSlot",2),s([k(".menu-item")],Tt.prototype,"menuItem",2),s([l()],Tt.prototype,"type",2),s([l({type:Boolean,reflect:!0})],Tt.prototype,"checked",2),s([l()],Tt.prototype,"value",2),s([l({type:Boolean,reflect:!0})],Tt.prototype,"loading",2),s([l({type:Boolean,reflect:!0})],Tt.prototype,"disabled",2),s([v("checked")],Tt.prototype,"handleCheckedChange",1),s([v("disabled")],Tt.prototype,"handleDisabledChange",1),s([v("type")],Tt.prototype,"handleTypeChange",1);var Ud=Tt;Tt.define("sl-menu-item");var Ma=_`
  :host {
    display: block;
  }

  .menu-label {
    display: inline-block;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-semibold);
    line-height: var(--sl-line-height-normal);
    letter-spacing: var(--sl-letter-spacing-normal);
    color: var(--sl-color-neutral-500);
    padding: var(--sl-spacing-2x-small) var(--sl-spacing-x-large);
    user-select: none;
    -webkit-user-select: none;
  }
`;var fr=class extends y{static{this.styles=[C,Ma]}render(){return g` <slot part="base" class="menu-label"></slot> `}};var qd=fr;fr.define("sl-menu-label");var za=_`
  :host {
    display: contents;
  }
`;var Dt=class extends y{constructor(){super(...arguments);this.attrOldValue=!1;this.charData=!1;this.charDataOldValue=!1;this.childList=!1;this.disabled=!1;this.handleMutation=t=>{this.emit("sl-mutation",{detail:{mutationList:t}})}}static{this.styles=[C,za]}connectedCallback(){super.connectedCallback(),this.mutationObserver=new MutationObserver(this.handleMutation),this.disabled||this.startObserver()}disconnectedCallback(){super.disconnectedCallback(),this.stopObserver()}startObserver(){let t=typeof this.attr=="string"&&this.attr.length>0,r=t&&this.attr!=="*"?this.attr.split(" "):void 0;try{this.mutationObserver.observe(this,{subtree:!0,childList:this.childList,attributes:t,attributeFilter:r,attributeOldValue:this.attrOldValue,characterData:this.charData,characterDataOldValue:this.charDataOldValue})}catch{}}stopObserver(){this.mutationObserver.disconnect()}handleDisabledChange(){this.disabled?this.stopObserver():this.startObserver()}handleChange(){this.stopObserver(),this.startObserver()}render(){return g` <slot></slot> `}};s([l({reflect:!0})],Dt.prototype,"attr",2),s([l({attribute:"attr-old-value",type:Boolean,reflect:!0})],Dt.prototype,"attrOldValue",2),s([l({attribute:"char-data",type:Boolean,reflect:!0})],Dt.prototype,"charData",2),s([l({attribute:"char-data-old-value",type:Boolean,reflect:!0})],Dt.prototype,"charDataOldValue",2),s([l({attribute:"child-list",type:Boolean,reflect:!0})],Dt.prototype,"childList",2),s([l({type:Boolean,reflect:!0})],Dt.prototype,"disabled",2),s([v("disabled")],Dt.prototype,"handleDisabledChange",1),s([v("attr",{waitUntilFirstUpdate:!0}),v("attr-old-value",{waitUntilFirstUpdate:!0}),v("char-data",{waitUntilFirstUpdate:!0}),v("char-data-old-value",{waitUntilFirstUpdate:!0}),v("childList",{waitUntilFirstUpdate:!0})],Dt.prototype,"handleChange",1);var Gd=Dt;Dt.define("sl-mutation-observer");var Aa=_`
  :host {
    display: block;
    user-select: none;
    -webkit-user-select: none;
  }

  :host(:focus) {
    outline: none;
  }

  .option {
    position: relative;
    display: flex;
    align-items: center;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    line-height: var(--sl-line-height-normal);
    letter-spacing: var(--sl-letter-spacing-normal);
    color: var(--sl-color-neutral-700);
    padding: var(--sl-spacing-x-small) var(--sl-spacing-medium) var(--sl-spacing-x-small) var(--sl-spacing-x-small);
    transition: var(--sl-transition-fast) fill;
    cursor: pointer;
  }

  .option--hover:not(.option--current):not(.option--disabled) {
    background-color: var(--sl-color-neutral-100);
    color: var(--sl-color-neutral-1000);
  }

  .option--current,
  .option--current.option--disabled {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
    opacity: 1;
  }

  .option--disabled {
    outline: none;
    opacity: 0.5;
    cursor: not-allowed;
  }

  .option__label {
    flex: 1 1 auto;
    display: inline-block;
    line-height: var(--sl-line-height-dense);
  }

  .option .option__check {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    visibility: hidden;
    padding-inline-end: var(--sl-spacing-2x-small);
  }

  .option--selected .option__check {
    visibility: visible;
  }

  .option__prefix,
  .option__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .option__prefix::slotted(*) {
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .option__suffix::slotted(*) {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  @media (forced-colors: active) {
    :host(:hover:not([aria-disabled='true'])) .option {
      outline: dashed 1px SelectedItem;
      outline-offset: -1px;
    }
  }
`;var Mt=class extends y{constructor(){super(...arguments);this.localize=new L(this);this.isInitialized=!1;this.current=!1;this.selected=!1;this.hasHover=!1;this.value="";this.disabled=!1}static{this.styles=[C,Aa]}static{this.dependencies={"sl-icon":D}}connectedCallback(){super.connectedCallback(),this.setAttribute("role","option"),this.setAttribute("aria-selected","false")}handleDefaultSlotChange(){this.isInitialized?customElements.whenDefined("sl-select").then(()=>{let t=this.closest("sl-select");t&&t.handleDefaultSlotChange()}):this.isInitialized=!0}handleMouseEnter(){this.hasHover=!0}handleMouseLeave(){this.hasHover=!1}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleSelectedChange(){this.setAttribute("aria-selected",this.selected?"true":"false")}handleValueChange(){typeof this.value!="string"&&(this.value=String(this.value)),this.value.includes(" ")&&(console.error("Option values cannot include a space. All spaces have been replaced with underscores.",this),this.value=this.value.replace(/ /g,"_"))}getTextLabel(){let t=this.childNodes,r="";return[...t].forEach(i=>{i.nodeType===Node.ELEMENT_NODE&&(i.hasAttribute("slot")||(r+=i.textContent)),i.nodeType===Node.TEXT_NODE&&(r+=i.textContent)}),r.trim()}render(){return g`
      <div
        part="base"
        class=${$({option:!0,"option--current":this.current,"option--disabled":this.disabled,"option--selected":this.selected,"option--hover":this.hasHover})}
        @mouseenter=${this.handleMouseEnter}
        @mouseleave=${this.handleMouseLeave}
      >
        <sl-icon part="checked-icon" class="option__check" name="check" library="system" aria-hidden="true"></sl-icon>
        <slot part="prefix" name="prefix" class="option__prefix"></slot>
        <slot part="label" class="option__label" @slotchange=${this.handleDefaultSlotChange}></slot>
        <slot part="suffix" name="suffix" class="option__suffix"></slot>
      </div>
    `}};s([k(".option__label")],Mt.prototype,"defaultSlot",2),s([S()],Mt.prototype,"current",2),s([S()],Mt.prototype,"selected",2),s([S()],Mt.prototype,"hasHover",2),s([l({reflect:!0})],Mt.prototype,"value",2),s([l({type:Boolean,reflect:!0})],Mt.prototype,"disabled",2),s([v("disabled")],Mt.prototype,"handleDisabledChange",1),s([v("selected")],Mt.prototype,"handleSelectedChange",1),s([v("value")],Mt.prototype,"handleValueChange",1);var Wd=Mt;Mt.define("sl-option");var jd=N;N.define("sl-popup");var La=_`
  :host {
    --height: 1rem;
    --track-color: var(--sl-color-neutral-200);
    --indicator-color: var(--sl-color-primary-600);
    --label-color: var(--sl-color-neutral-0);

    display: block;
  }

  .progress-bar {
    position: relative;
    background-color: var(--track-color);
    height: var(--height);
    border-radius: var(--sl-border-radius-pill);
    box-shadow: inset var(--sl-shadow-small);
    overflow: hidden;
  }

  .progress-bar__indicator {
    height: 100%;
    font-family: var(--sl-font-sans);
    font-size: 12px;
    font-weight: var(--sl-font-weight-normal);
    background-color: var(--indicator-color);
    color: var(--label-color);
    text-align: center;
    line-height: var(--height);
    white-space: nowrap;
    overflow: hidden;
    transition:
      400ms width,
      400ms background-color;
    user-select: none;
    -webkit-user-select: none;
  }

  /* Indeterminate */
  .progress-bar--indeterminate .progress-bar__indicator {
    position: absolute;
    animation: indeterminate 2.5s infinite cubic-bezier(0.37, 0, 0.63, 1);
  }

  .progress-bar--indeterminate.progress-bar--rtl .progress-bar__indicator {
    animation-name: indeterminate-rtl;
  }

  @media (forced-colors: active) {
    .progress-bar {
      outline: solid 1px SelectedItem;
      background-color: var(--sl-color-neutral-0);
    }

    .progress-bar__indicator {
      outline: solid 1px SelectedItem;
      background-color: SelectedItem;
    }
  }

  @keyframes indeterminate {
    0% {
      left: -50%;
      width: 50%;
    }
    75%,
    100% {
      left: 100%;
      width: 50%;
    }
  }

  @keyframes indeterminate-rtl {
    0% {
      right: -50%;
      width: 50%;
    }
    75%,
    100% {
      right: 100%;
      width: 50%;
    }
  }
`;var Ce=class extends y{constructor(){super(...arguments);this.localize=new L(this);this.value=0;this.indeterminate=!1;this.label=""}static{this.styles=[C,La]}render(){return g`
      <div
        part="base"
        class=${$({"progress-bar":!0,"progress-bar--indeterminate":this.indeterminate,"progress-bar--rtl":this.localize.dir()==="rtl"})}
        role="progressbar"
        title=${z(this.title)}
        aria-label=${this.label.length>0?this.label:this.localize.term("progress")}
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow=${this.indeterminate?0:this.value}
      >
        <div part="indicator" class="progress-bar__indicator" style=${gt({width:`${this.value}%`})}>
          ${this.indeterminate?"":g` <slot part="label" class="progress-bar__label"></slot> `}
        </div>
      </div>
    `}};s([l({type:Number,reflect:!0})],Ce.prototype,"value",2),s([l({type:Boolean,reflect:!0})],Ce.prototype,"indeterminate",2),s([l()],Ce.prototype,"label",2);var Kd=Ce;Ce.define("sl-progress-bar");var Ha=_`
  :host {
    --size: 128px;
    --track-width: 4px;
    --track-color: var(--sl-color-neutral-200);
    --indicator-width: var(--track-width);
    --indicator-color: var(--sl-color-primary-600);
    --indicator-transition-duration: 0.35s;

    display: inline-flex;
  }

  .progress-ring {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }

  .progress-ring__image {
    width: var(--size);
    height: var(--size);
    rotate: -90deg;
    transform-origin: 50% 50%;
  }

  .progress-ring__track,
  .progress-ring__indicator {
    --radius: calc(var(--size) / 2 - max(var(--track-width), var(--indicator-width)) * 0.5);
    --circumference: calc(var(--radius) * 2 * 3.141592654);

    fill: none;
    r: var(--radius);
    cx: calc(var(--size) / 2);
    cy: calc(var(--size) / 2);
  }

  .progress-ring__track {
    stroke: var(--track-color);
    stroke-width: var(--track-width);
  }

  .progress-ring__indicator {
    stroke: var(--indicator-color);
    stroke-width: var(--indicator-width);
    stroke-linecap: round;
    transition-property: stroke-dashoffset;
    transition-duration: var(--indicator-transition-duration);
    stroke-dasharray: var(--circumference) var(--circumference);
    stroke-dashoffset: calc(var(--circumference) - var(--percentage) * var(--circumference));
  }

  .progress-ring__label {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    text-align: center;
    user-select: none;
    -webkit-user-select: none;
  }
`;var me=class extends y{constructor(){super(...arguments);this.localize=new L(this);this.value=0;this.label=""}static{this.styles=[C,Ha]}updated(t){if(super.updated(t),t.has("value")){let r=parseFloat(getComputedStyle(this.indicator).getPropertyValue("r")),i=2*Math.PI*r,a=i-this.value/100*i;this.indicatorOffset=`${a}px`}}render(){return g`
      <div
        part="base"
        class="progress-ring"
        role="progressbar"
        aria-label=${this.label.length>0?this.label:this.localize.term("progress")}
        aria-describedby="label"
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow="${this.value}"
        style="--percentage: ${this.value/100}"
      >
        <svg class="progress-ring__image">
          <circle class="progress-ring__track"></circle>
          <circle class="progress-ring__indicator" style="stroke-dashoffset: ${this.indicatorOffset}"></circle>
        </svg>

        <slot id="label" part="label" class="progress-ring__label"></slot>
      </div>
    `}};s([k(".progress-ring__indicator")],me.prototype,"indicator",2),s([S()],me.prototype,"indicatorOffset",2),s([l({type:Number,reflect:!0})],me.prototype,"value",2),s([l()],me.prototype,"label",2);var Xd=me;me.define("sl-progress-ring");var Ra=null,Co=class{};Co.render=function(o,e){Ra(o,e)};self.QrCreator=Co;(function(o){function e(c,d,u,p){var h={},f=o(u,d);f.u(c),f.J(),p=p||0;var m=f.h(),b=f.h()+2*p;return h.text=c,h.level=d,h.version=u,h.O=b,h.a=function(x,M){return x-=p,M-=p,0>x||x>=m||0>M||M>=m?!1:f.a(x,M)},h}function t(c,d,u,p,h,f,m,b,x,M){function H(E,A,w,T,R,P,G){E?(c.lineTo(A+P,w+G),c.arcTo(A,w,T,R,f)):c.lineTo(A,w)}m?c.moveTo(d+f,u):c.moveTo(d,u),H(b,p,u,p,h,-f,0),H(x,p,h,d,h,0,-f),H(M,d,h,d,u,f,0),H(m,d,u,p,u,0,f)}function r(c,d,u,p,h,f,m,b,x,M){function H(E,A,w,T){c.moveTo(E+w,A),c.lineTo(E,A),c.lineTo(E,A+T),c.arcTo(E,A,E+w,A,f)}m&&H(d,u,f,f),b&&H(p,u,-f,f),x&&H(p,h,-f,-f),M&&H(d,h,f,-f)}function i(c,d){var u=d.fill;if(typeof u=="string")c.fillStyle=u;else{var p=u.type,h=u.colorStops;if(u=u.position.map(m=>Math.round(m*d.size)),p==="linear-gradient")var f=c.createLinearGradient.apply(c,u);else if(p==="radial-gradient")f=c.createRadialGradient.apply(c,u);else throw Error("Unsupported fill");h.forEach(([m,b])=>{f.addColorStop(m,b)}),c.fillStyle=f}}function a(c,d){t:{var u=d.text,p=d.v,h=d.N,f=d.K,m=d.P;for(h=Math.max(1,h||1),f=Math.min(40,f||40);h<=f;h+=1)try{var b=e(u,p,h,m);break t}catch{}b=void 0}if(!b)return null;for(u=c.getContext("2d"),d.background&&(u.fillStyle=d.background,u.fillRect(d.left,d.top,d.size,d.size)),p=b.O,f=d.size/p,u.beginPath(),m=0;m<p;m+=1)for(h=0;h<p;h+=1){var x=u,M=d.left+h*f,H=d.top+m*f,E=m,A=h,w=b.a,T=M+f,R=H+f,P=E-1,G=E+1,I=A-1,O=A+1,mt=Math.floor(Math.min(.5,Math.max(0,d.R))*f),ct=w(E,A),kt=w(P,I),dt=w(P,A);P=w(P,O);var Gt=w(E,O);O=w(G,O),A=w(G,A),G=w(G,I),E=w(E,I),M=Math.round(M),H=Math.round(H),T=Math.round(T),R=Math.round(R),ct?t(x,M,H,T,R,mt,!dt&&!E,!dt&&!Gt,!A&&!Gt,!A&&!E):r(x,M,H,T,R,mt,dt&&E&&kt,dt&&Gt&&P,A&&Gt&&O,A&&E&&G)}return i(u,d),u.fill(),c}var n={minVersion:1,maxVersion:40,ecLevel:"L",left:0,top:0,size:200,fill:"#000",background:null,text:"no text",radius:.5,quiet:0};Ra=function(c,d){var u={};Object.assign(u,n,c),u.N=u.minVersion,u.K=u.maxVersion,u.v=u.ecLevel,u.left=u.left,u.top=u.top,u.size=u.size,u.fill=u.fill,u.background=u.background,u.text=u.text,u.R=u.radius,u.P=u.quiet,d instanceof HTMLCanvasElement?((d.width!==u.size||d.height!==u.size)&&(d.width=u.size,d.height=u.size),d.getContext("2d").clearRect(0,0,d.width,d.height),a(d,u)):(c=document.createElement("canvas"),c.width=u.size,c.height=u.size,u=a(c,u),d.appendChild(u))}})(function(){function o(d){var u=t.s(d);return{S:function(){return 4},b:function(){return u.length},write:function(p){for(var h=0;h<u.length;h+=1)p.put(u[h],8)}}}function e(){var d=[],u=0,p={B:function(){return d},c:function(h){return(d[Math.floor(h/8)]>>>7-h%8&1)==1},put:function(h,f){for(var m=0;m<f;m+=1)p.m((h>>>f-m-1&1)==1)},f:function(){return u},m:function(h){var f=Math.floor(u/8);d.length<=f&&d.push(0),h&&(d[f]|=128>>>u%8),u+=1}};return p}function t(d,u){function p(E,A){for(var w=-1;7>=w;w+=1)if(!(-1>=E+w||b<=E+w))for(var T=-1;7>=T;T+=1)-1>=A+T||b<=A+T||(m[E+w][A+T]=0<=w&&6>=w&&(T==0||T==6)||0<=T&&6>=T&&(w==0||w==6)||2<=w&&4>=w&&2<=T&&4>=T)}function h(E,A){for(var w=b=4*d+17,T=Array(w),R=0;R<w;R+=1){T[R]=Array(w);for(var P=0;P<w;P+=1)T[R][P]=null}for(m=T,p(0,0),p(b-7,0),p(0,b-7),w=a.G(d),T=0;T<w.length;T+=1)for(R=0;R<w.length;R+=1){P=w[T];var G=w[R];if(m[P][G]==null)for(var I=-2;2>=I;I+=1)for(var O=-2;2>=O;O+=1)m[P+I][G+O]=I==-2||I==2||O==-2||O==2||I==0&&O==0}for(w=8;w<b-8;w+=1)m[w][6]==null&&(m[w][6]=w%2==0);for(w=8;w<b-8;w+=1)m[6][w]==null&&(m[6][w]=w%2==0);for(w=a.w(f<<3|A),T=0;15>T;T+=1)R=!E&&(w>>T&1)==1,m[6>T?T:8>T?T+1:b-15+T][8]=R,m[8][8>T?b-T-1:9>T?15-T:14-T]=R;if(m[b-8][8]=!E,7<=d){for(w=a.A(d),T=0;18>T;T+=1)R=!E&&(w>>T&1)==1,m[Math.floor(T/3)][T%3+b-8-3]=R;for(T=0;18>T;T+=1)R=!E&&(w>>T&1)==1,m[T%3+b-8-3][Math.floor(T/3)]=R}if(x==null){for(E=c.I(d,f),w=e(),T=0;T<M.length;T+=1)R=M[T],w.put(4,4),w.put(R.b(),a.f(4,d)),R.write(w);for(T=R=0;T<E.length;T+=1)R+=E[T].j;if(w.f()>8*R)throw Error("code length overflow. ("+w.f()+">"+8*R+")");for(w.f()+4<=8*R&&w.put(0,4);w.f()%8!=0;)w.m(!1);for(;!(w.f()>=8*R)&&(w.put(236,8),!(w.f()>=8*R));)w.put(17,8);var mt=0;for(R=T=0,P=Array(E.length),G=Array(E.length),I=0;I<E.length;I+=1){var ct=E[I].j,kt=E[I].o-ct;for(T=Math.max(T,ct),R=Math.max(R,kt),P[I]=Array(ct),O=0;O<P[I].length;O+=1)P[I][O]=255&w.B()[O+mt];for(mt+=ct,O=a.C(kt),ct=r(P[I],O.b()-1).l(O),G[I]=Array(O.b()-1),O=0;O<G[I].length;O+=1)kt=O+ct.b()-G[I].length,G[I][O]=0<=kt?ct.c(kt):0}for(O=w=0;O<E.length;O+=1)w+=E[O].o;for(w=Array(w),O=mt=0;O<T;O+=1)for(I=0;I<E.length;I+=1)O<P[I].length&&(w[mt]=P[I][O],mt+=1);for(O=0;O<R;O+=1)for(I=0;I<E.length;I+=1)O<G[I].length&&(w[mt]=G[I][O],mt+=1);x=w}for(E=x,w=-1,T=b-1,R=7,P=0,A=a.F(A),G=b-1;0<G;G-=2)for(G==6&&--G;;){for(I=0;2>I;I+=1)m[T][G-I]==null&&(O=!1,P<E.length&&(O=(E[P]>>>R&1)==1),A(T,G-I)&&(O=!O),m[T][G-I]=O,--R,R==-1&&(P+=1,R=7));if(T+=w,0>T||b<=T){T-=w,w=-w;break}}}var f=i[u],m=null,b=0,x=null,M=[],H={u:function(E){E=o(E),M.push(E),x=null},a:function(E,A){if(0>E||b<=E||0>A||b<=A)throw Error(E+","+A);return m[E][A]},h:function(){return b},J:function(){for(var E=0,A=0,w=0;8>w;w+=1){h(!0,w);var T=a.D(H);(w==0||E>T)&&(E=T,A=w)}h(!1,A)}};return H}function r(d,u){if(typeof d.length>"u")throw Error(d.length+"/"+u);var p=function(){for(var f=0;f<d.length&&d[f]==0;)f+=1;for(var m=Array(d.length-f+u),b=0;b<d.length-f;b+=1)m[b]=d[b+f];return m}(),h={c:function(f){return p[f]},b:function(){return p.length},multiply:function(f){for(var m=Array(h.b()+f.b()-1),b=0;b<h.b();b+=1)for(var x=0;x<f.b();x+=1)m[b+x]^=n.i(n.g(h.c(b))+n.g(f.c(x)));return r(m,0)},l:function(f){if(0>h.b()-f.b())return h;for(var m=n.g(h.c(0))-n.g(f.c(0)),b=Array(h.b()),x=0;x<h.b();x+=1)b[x]=h.c(x);for(x=0;x<f.b();x+=1)b[x]^=n.i(n.g(f.c(x))+m);return r(b,0).l(f)}};return h}t.s=function(d){for(var u=[],p=0;p<d.length;p++){var h=d.charCodeAt(p);128>h?u.push(h):2048>h?u.push(192|h>>6,128|h&63):55296>h||57344<=h?u.push(224|h>>12,128|h>>6&63,128|h&63):(p++,h=65536+((h&1023)<<10|d.charCodeAt(p)&1023),u.push(240|h>>18,128|h>>12&63,128|h>>6&63,128|h&63))}return u};var i={L:1,M:0,Q:3,H:2},a=function(){function d(h){for(var f=0;h!=0;)f+=1,h>>>=1;return f}var u=[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],p={w:function(h){for(var f=h<<10;0<=d(f)-d(1335);)f^=1335<<d(f)-d(1335);return(h<<10|f)^21522},A:function(h){for(var f=h<<12;0<=d(f)-d(7973);)f^=7973<<d(f)-d(7973);return h<<12|f},G:function(h){return u[h-1]},F:function(h){switch(h){case 0:return function(f,m){return(f+m)%2==0};case 1:return function(f){return f%2==0};case 2:return function(f,m){return m%3==0};case 3:return function(f,m){return(f+m)%3==0};case 4:return function(f,m){return(Math.floor(f/2)+Math.floor(m/3))%2==0};case 5:return function(f,m){return f*m%2+f*m%3==0};case 6:return function(f,m){return(f*m%2+f*m%3)%2==0};case 7:return function(f,m){return(f*m%3+(f+m)%2)%2==0};default:throw Error("bad maskPattern:"+h)}},C:function(h){for(var f=r([1],0),m=0;m<h;m+=1)f=f.multiply(r([1,n.i(m)],0));return f},f:function(h,f){if(h!=4||1>f||40<f)throw Error("mode: "+h+"; type: "+f);return 10>f?8:16},D:function(h){for(var f=h.h(),m=0,b=0;b<f;b+=1)for(var x=0;x<f;x+=1){for(var M=0,H=h.a(b,x),E=-1;1>=E;E+=1)if(!(0>b+E||f<=b+E))for(var A=-1;1>=A;A+=1)0>x+A||f<=x+A||(E!=0||A!=0)&&H==h.a(b+E,x+A)&&(M+=1);5<M&&(m+=3+M-5)}for(b=0;b<f-1;b+=1)for(x=0;x<f-1;x+=1)M=0,h.a(b,x)&&(M+=1),h.a(b+1,x)&&(M+=1),h.a(b,x+1)&&(M+=1),h.a(b+1,x+1)&&(M+=1),(M==0||M==4)&&(m+=3);for(b=0;b<f;b+=1)for(x=0;x<f-6;x+=1)h.a(b,x)&&!h.a(b,x+1)&&h.a(b,x+2)&&h.a(b,x+3)&&h.a(b,x+4)&&!h.a(b,x+5)&&h.a(b,x+6)&&(m+=40);for(x=0;x<f;x+=1)for(b=0;b<f-6;b+=1)h.a(b,x)&&!h.a(b+1,x)&&h.a(b+2,x)&&h.a(b+3,x)&&h.a(b+4,x)&&!h.a(b+5,x)&&h.a(b+6,x)&&(m+=40);for(x=M=0;x<f;x+=1)for(b=0;b<f;b+=1)h.a(b,x)&&(M+=1);return m+=Math.abs(100*M/f/f-50)/5*10}};return p}(),n=function(){for(var d=Array(256),u=Array(256),p=0;8>p;p+=1)d[p]=1<<p;for(p=8;256>p;p+=1)d[p]=d[p-4]^d[p-5]^d[p-6]^d[p-8];for(p=0;255>p;p+=1)u[d[p]]=p;return{g:function(h){if(1>h)throw Error("glog("+h+")");return u[h]},i:function(h){for(;0>h;)h+=255;for(;256<=h;)h-=255;return d[h]}}}(),c=function(){function d(h,f){switch(f){case i.L:return u[4*(h-1)];case i.M:return u[4*(h-1)+1];case i.Q:return u[4*(h-1)+2];case i.H:return u[4*(h-1)+3]}}var u=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12,7,37,13],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],p={I:function(h,f){var m=d(h,f);if(typeof m>"u")throw Error("bad rs block @ typeNumber:"+h+"/errorCorrectLevel:"+f);h=m.length/3,f=[];for(var b=0;b<h;b+=1)for(var x=m[3*b],M=m[3*b+1],H=m[3*b+2],E=0;E<x;E+=1){var A=H,w={};w.o=M,w.j=A,f.push(w)}return f}};return p}();return t}());var Oa=QrCreator;var Ia=_`
  :host {
    display: inline-block;
  }
`;var zt=class extends y{constructor(){super(...arguments);this.value="";this.label="";this.size=128;this.fill="black";this.background="white";this.radius=0;this.errorCorrection="H"}static{this.styles=[C,Ia]}firstUpdated(){this.generate()}generate(){this.hasUpdated&&Oa.render({text:this.value,radius:this.radius,ecLevel:this.errorCorrection,fill:this.fill,background:this.background,size:this.size*2},this.canvas)}render(){return g`
      <canvas
        part="base"
        class="qr-code"
        role="img"
        aria-label=${this.label?.length>0?this.label:this.value}
        style=${gt({width:`${this.size}px`,height:`${this.size}px`})}
      ></canvas>
    `}};s([k("canvas")],zt.prototype,"canvas",2),s([l()],zt.prototype,"value",2),s([l()],zt.prototype,"label",2),s([l({type:Number})],zt.prototype,"size",2),s([l()],zt.prototype,"fill",2),s([l()],zt.prototype,"background",2),s([l({type:Number})],zt.prototype,"radius",2),s([l({attribute:"error-correction"})],zt.prototype,"errorCorrection",2),s([v(["background","errorCorrection","fill","radius","size","value"])],zt.prototype,"generate",1);var Yd=zt;zt.define("sl-qr-code");var Da=_`
  :host {
    display: block;
  }

  :host(:focus-visible) {
    outline: 0px;
  }

  .radio {
    display: inline-flex;
    align-items: top;
    font-family: var(--sl-input-font-family);
    font-size: var(--sl-input-font-size-medium);
    font-weight: var(--sl-input-font-weight);
    color: var(--sl-input-label-color);
    vertical-align: middle;
    cursor: pointer;
  }

  .radio--small {
    --toggle-size: var(--sl-toggle-size-small);
    font-size: var(--sl-input-font-size-small);
  }

  .radio--medium {
    --toggle-size: var(--sl-toggle-size-medium);
    font-size: var(--sl-input-font-size-medium);
  }

  .radio--large {
    --toggle-size: var(--sl-toggle-size-large);
    font-size: var(--sl-input-font-size-large);
  }

  .radio__checked-icon {
    display: inline-flex;
    width: var(--toggle-size);
    height: var(--toggle-size);
  }

  .radio__control {
    flex: 0 0 auto;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--toggle-size);
    height: var(--toggle-size);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
    border-radius: 50%;
    background-color: var(--sl-input-background-color);
    color: transparent;
    transition:
      var(--sl-transition-fast) border-color,
      var(--sl-transition-fast) background-color,
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) box-shadow;
  }

  .radio__input {
    position: absolute;
    opacity: 0;
    padding: 0;
    margin: 0;
    pointer-events: none;
  }

  /* Hover */
  .radio:not(.radio--checked):not(.radio--disabled) .radio__control:hover {
    border-color: var(--sl-input-border-color-hover);
    background-color: var(--sl-input-background-color-hover);
  }

  /* Checked */
  .radio--checked .radio__control {
    color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
    background-color: var(--sl-color-primary-600);
  }

  /* Checked + hover */
  .radio.radio--checked:not(.radio--disabled) .radio__control:hover {
    border-color: var(--sl-color-primary-500);
    background-color: var(--sl-color-primary-500);
  }

  /* Checked + focus */
  :host(:focus-visible) .radio__control {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Disabled */
  .radio--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* When the control isn't checked, hide the circle for Windows High Contrast mode a11y */
  .radio:not(.radio--checked) svg circle {
    opacity: 0;
  }

  .radio__label {
    display: inline-block;
    color: var(--sl-input-label-color);
    line-height: var(--toggle-size);
    margin-inline-start: 0.5em;
    user-select: none;
    -webkit-user-select: none;
  }
`;var qt=class extends y{constructor(){super();this.checked=!1;this.hasFocus=!1;this.size="medium";this.disabled=!1;this.handleBlur=()=>{this.hasFocus=!1,this.emit("sl-blur")};this.handleClick=()=>{this.disabled||(this.checked=!0)};this.handleFocus=()=>{this.hasFocus=!0,this.emit("sl-focus")};this.addEventListener("blur",this.handleBlur),this.addEventListener("click",this.handleClick),this.addEventListener("focus",this.handleFocus)}static{this.styles=[C,Da]}static{this.dependencies={"sl-icon":D}}connectedCallback(){super.connectedCallback(),this.setInitialAttributes()}setInitialAttributes(){this.setAttribute("role","radio"),this.setAttribute("tabindex","-1"),this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleCheckedChange(){this.setAttribute("aria-checked",this.checked?"true":"false"),this.setAttribute("tabindex",this.checked?"0":"-1")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}render(){return g`
      <span
        part="base"
        class=${$({radio:!0,"radio--checked":this.checked,"radio--disabled":this.disabled,"radio--focused":this.hasFocus,"radio--small":this.size==="small","radio--medium":this.size==="medium","radio--large":this.size==="large"})}
      >
        <span part="${`control${this.checked?" control--checked":""}`}" class="radio__control">
          ${this.checked?g` <sl-icon part="checked-icon" class="radio__checked-icon" library="system" name="radio"></sl-icon> `:""}
        </span>

        <slot part="label" class="radio__label"></slot>
      </span>
    `}};s([S()],qt.prototype,"checked",2),s([S()],qt.prototype,"hasFocus",2),s([l()],qt.prototype,"value",2),s([l({reflect:!0})],qt.prototype,"size",2),s([l({type:Boolean,reflect:!0})],qt.prototype,"disabled",2),s([v("checked")],qt.prototype,"handleCheckedChange",1),s([v("disabled",{waitUntilFirstUpdate:!0})],qt.prototype,"handleDisabledChange",1);var Zd=qt;qt.define("sl-radio");var Fa=_`
  ${so}

  .button__prefix,
  .button__suffix,
  .button__label {
    display: inline-flex;
    position: relative;
    align-items: center;
  }

  /* We use a hidden input so constraint validation errors work, since they don't appear to show when used with buttons.
    We can't actually hide it, though, otherwise the messages will be suppressed by the browser. */
  .hidden-input {
    all: unset;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    outline: dotted 1px red;
    opacity: 0;
    z-index: -1;
  }
`;var At=class extends y{constructor(){super(...arguments);this.hasSlotController=new K(this,"[default]","prefix","suffix");this.hasFocus=!1;this.checked=!1;this.disabled=!1;this.size="medium";this.pill=!1}static{this.styles=[C,Fa]}connectedCallback(){super.connectedCallback(),this.setAttribute("role","presentation")}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleClick(t){if(this.disabled){t.preventDefault(),t.stopPropagation();return}this.checked=!0}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}focus(t){this.input.focus(t)}blur(){this.input.blur()}render(){return ze`
      <div part="base" role="presentation">
        <button
          part="${`button${this.checked?" button--checked":""}`}"
          role="radio"
          aria-checked="${this.checked}"
          class=${$({button:!0,"button--default":!0,"button--small":this.size==="small","button--medium":this.size==="medium","button--large":this.size==="large","button--checked":this.checked,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--outline":!0,"button--pill":this.pill,"button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
          aria-disabled=${this.disabled}
          type="button"
          value=${z(this.value)}
          @blur=${this.handleBlur}
          @focus=${this.handleFocus}
          @click=${this.handleClick}
        >
          <slot name="prefix" part="prefix" class="button__prefix"></slot>
          <slot part="label" class="button__label"></slot>
          <slot name="suffix" part="suffix" class="button__suffix"></slot>
        </button>
      </div>
    `}};s([k(".button")],At.prototype,"input",2),s([k(".hidden-input")],At.prototype,"hiddenInput",2),s([S()],At.prototype,"hasFocus",2),s([l({type:Boolean,reflect:!0})],At.prototype,"checked",2),s([l()],At.prototype,"value",2),s([l({type:Boolean,reflect:!0})],At.prototype,"disabled",2),s([l({reflect:!0})],At.prototype,"size",2),s([l({type:Boolean,reflect:!0})],At.prototype,"pill",2),s([v("disabled",{waitUntilFirstUpdate:!0})],At.prototype,"handleDisabledChange",1);var Qd=At;At.define("sl-radio-button");var Pa=_`
  :host {
    display: block;
  }

  .form-control {
    position: relative;
    border: none;
    padding: 0;
    margin: 0;
  }

  .form-control__label {
    padding: 0;
  }

  .radio-group--required .radio-group__label::after {
    content: var(--sl-input-required-content);
    margin-inline-start: var(--sl-input-required-content-offset);
  }

  .visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }
`;var ht=class extends y{constructor(){super(...arguments);this.formControlController=new ut(this);this.hasSlotController=new K(this,"help-text","label");this.customValidityMessage="";this.hasButtonGroup=!1;this.errorMessage="";this.defaultValue="";this.label="";this.helpText="";this.name="option";this.value="";this.size="medium";this.form="";this.required=!1}static{this.styles=[C,Ht,Pa]}static{this.dependencies={"sl-button-group":Vt}}get validity(){let t=this.required&&!this.value;return this.customValidityMessage!==""?ns:t?as:nr}get validationMessage(){let t=this.required&&!this.value;return this.customValidityMessage!==""?this.customValidityMessage:t?this.validationInput.validationMessage:""}connectedCallback(){super.connectedCallback(),this.defaultValue=this.value}firstUpdated(){this.formControlController.updateValidity()}getAllRadios(){return[...this.querySelectorAll("sl-radio, sl-radio-button")]}handleRadioClick(t){let r=t.target.closest("sl-radio, sl-radio-button"),i=this.getAllRadios(),a=this.value;!r||r.disabled||(this.value=r.value,i.forEach(n=>n.checked=n===r),this.value!==a&&(this.emit("sl-change"),this.emit("sl-input")))}handleKeyDown(t){if(!["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"," "].includes(t.key))return;let r=this.getAllRadios().filter(d=>!d.disabled),i=r.find(d=>d.checked)??r[0],a=t.key===" "?0:["ArrowUp","ArrowLeft"].includes(t.key)?-1:1,n=this.value,c=r.indexOf(i)+a;c<0&&(c=r.length-1),c>r.length-1&&(c=0),this.getAllRadios().forEach(d=>{d.checked=!1,this.hasButtonGroup||d.setAttribute("tabindex","-1")}),this.value=r[c].value,r[c].checked=!0,this.hasButtonGroup?r[c].shadowRoot.querySelector("button").focus():(r[c].setAttribute("tabindex","0"),r[c].focus()),this.value!==n&&(this.emit("sl-change"),this.emit("sl-input")),t.preventDefault()}handleLabelClick(){this.focus()}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}async syncRadioElements(){let t=this.getAllRadios();if(await Promise.all(t.map(async r=>{await r.updateComplete,r.checked=r.value===this.value,r.size=this.size})),this.hasButtonGroup=t.some(r=>r.tagName.toLowerCase()==="sl-radio-button"),t.length>0&&!t.some(r=>r.checked))if(this.hasButtonGroup){let r=t[0].shadowRoot?.querySelector("button");r&&r.setAttribute("tabindex","0")}else t[0].setAttribute("tabindex","0");if(this.hasButtonGroup){let r=this.shadowRoot?.querySelector("sl-button-group");r&&(r.disableRole=!0)}}syncRadios(){if(customElements.get("sl-radio")&&customElements.get("sl-radio-button")){this.syncRadioElements();return}customElements.get("sl-radio")?this.syncRadioElements():customElements.whenDefined("sl-radio").then(()=>this.syncRadios()),customElements.get("sl-radio-button")?this.syncRadioElements():customElements.whenDefined("sl-radio-button").then(()=>this.syncRadios())}updateCheckedRadio(){this.getAllRadios().forEach(r=>r.checked=r.value===this.value),this.formControlController.setValidity(this.validity.valid)}handleSizeChange(){this.syncRadios()}handleValueChange(){this.hasUpdated&&this.updateCheckedRadio()}checkValidity(){let t=this.required&&!this.value,r=this.customValidityMessage!=="";return t||r?(this.formControlController.emitInvalidEvent(),!1):!0}getForm(){return this.formControlController.getForm()}reportValidity(){let t=this.validity.valid;return this.errorMessage=this.customValidityMessage||t?"":this.validationInput.validationMessage,this.formControlController.setValidity(t),this.validationInput.hidden=!0,clearTimeout(this.validationTimeout),t||(this.validationInput.hidden=!1,this.validationInput.reportValidity(),this.validationTimeout=setTimeout(()=>this.validationInput.hidden=!0,1e4)),t}setCustomValidity(t=""){this.customValidityMessage=t,this.errorMessage=t,this.validationInput.setCustomValidity(t),this.formControlController.updateValidity()}focus(t){let r=this.getAllRadios(),i=r.find(c=>c.checked),a=r.find(c=>!c.disabled),n=i||a;n&&n.focus(t)}render(){let t=this.hasSlotController.test("label"),r=this.hasSlotController.test("help-text"),i=this.label?!0:!!t,a=this.helpText?!0:!!r,n=g`
      <slot @slotchange=${this.syncRadios} @click=${this.handleRadioClick} @keydown=${this.handleKeyDown}></slot>
    `;return g`
      <fieldset
        part="form-control"
        class=${$({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--radio-group":!0,"form-control--has-label":i,"form-control--has-help-text":a})}
        role="radiogroup"
        aria-labelledby="label"
        aria-describedby="help-text"
        aria-errormessage="error-message"
      >
        <label
          part="form-control-label"
          id="label"
          class="form-control__label"
          aria-hidden=${i?"false":"true"}
          @click=${this.handleLabelClick}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div class="visually-hidden">
            <div id="error-message" aria-live="assertive">${this.errorMessage}</div>
            <label class="radio-group__validation">
              <input
                type="text"
                class="radio-group__validation-input"
                ?required=${this.required}
                tabindex="-1"
                hidden
                @invalid=${this.handleInvalid}
              />
            </label>
          </div>

          ${this.hasButtonGroup?g`
                <sl-button-group part="button-group" exportparts="base:button-group__base" role="presentation">
                  ${n}
                </sl-button-group>
              `:n}
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${a?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </fieldset>
    `}};s([k("slot:not([name])")],ht.prototype,"defaultSlot",2),s([k(".radio-group__validation-input")],ht.prototype,"validationInput",2),s([S()],ht.prototype,"hasButtonGroup",2),s([S()],ht.prototype,"errorMessage",2),s([S()],ht.prototype,"defaultValue",2),s([l()],ht.prototype,"label",2),s([l({attribute:"help-text"})],ht.prototype,"helpText",2),s([l()],ht.prototype,"name",2),s([l({reflect:!0})],ht.prototype,"value",2),s([l({reflect:!0})],ht.prototype,"size",2),s([l({reflect:!0})],ht.prototype,"form",2),s([l({type:Boolean,reflect:!0})],ht.prototype,"required",2),s([v("size",{waitUntilFirstUpdate:!0})],ht.prototype,"handleSizeChange",1),s([v("value")],ht.prototype,"handleValueChange",1);var Jd=ht;ht.define("sl-radio-group");var Va=_`
  :host {
    --thumb-size: 20px;
    --tooltip-offset: 10px;
    --track-color-active: var(--sl-color-neutral-200);
    --track-color-inactive: var(--sl-color-neutral-200);
    --track-active-offset: 0%;
    --track-height: 6px;

    display: block;
  }

  .range {
    position: relative;
  }

  .range__control {
    --percent: 0%;
    -webkit-appearance: none;
    border-radius: 3px;
    width: 100%;
    height: var(--track-height);
    background: transparent;
    line-height: var(--sl-input-height-medium);
    vertical-align: middle;
    margin: 0;

    background-image: linear-gradient(
      to right,
      var(--track-color-inactive) 0%,
      var(--track-color-inactive) min(var(--percent), var(--track-active-offset)),
      var(--track-color-active) min(var(--percent), var(--track-active-offset)),
      var(--track-color-active) max(var(--percent), var(--track-active-offset)),
      var(--track-color-inactive) max(var(--percent), var(--track-active-offset)),
      var(--track-color-inactive) 100%
    );
  }

  .range--rtl .range__control {
    background-image: linear-gradient(
      to left,
      var(--track-color-inactive) 0%,
      var(--track-color-inactive) min(var(--percent), var(--track-active-offset)),
      var(--track-color-active) min(var(--percent), var(--track-active-offset)),
      var(--track-color-active) max(var(--percent), var(--track-active-offset)),
      var(--track-color-inactive) max(var(--percent), var(--track-active-offset)),
      var(--track-color-inactive) 100%
    );
  }

  /* Webkit */
  .range__control::-webkit-slider-runnable-track {
    width: 100%;
    height: var(--track-height);
    border-radius: 3px;
    border: none;
  }

  .range__control::-webkit-slider-thumb {
    border: none;
    width: var(--thumb-size);
    height: var(--thumb-size);
    border-radius: 50%;
    background-color: var(--sl-color-primary-600);
    border: solid var(--sl-input-border-width) var(--sl-color-primary-600);
    -webkit-appearance: none;
    margin-top: calc(var(--thumb-size) / -2 + var(--track-height) / 2);
    cursor: pointer;
  }

  .range__control:enabled::-webkit-slider-thumb:hover {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
  }

  .range__control:enabled:focus-visible::-webkit-slider-thumb {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .range__control:enabled::-webkit-slider-thumb:active {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
    cursor: grabbing;
  }

  /* Firefox */
  .range__control::-moz-focus-outer {
    border: 0;
  }

  .range__control::-moz-range-progress {
    background-color: var(--track-color-active);
    border-radius: 3px;
    height: var(--track-height);
  }

  .range__control::-moz-range-track {
    width: 100%;
    height: var(--track-height);
    background-color: var(--track-color-inactive);
    border-radius: 3px;
    border: none;
  }

  .range__control::-moz-range-thumb {
    border: none;
    height: var(--thumb-size);
    width: var(--thumb-size);
    border-radius: 50%;
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    transition:
      var(--sl-transition-fast) border-color,
      var(--sl-transition-fast) background-color,
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) box-shadow;
    cursor: pointer;
  }

  .range__control:enabled::-moz-range-thumb:hover {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
  }

  .range__control:enabled:focus-visible::-moz-range-thumb {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .range__control:enabled::-moz-range-thumb:active {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
    cursor: grabbing;
  }

  /* States */
  .range__control:focus-visible {
    outline: none;
  }

  .range__control:disabled {
    opacity: 0.5;
  }

  .range__control:disabled::-webkit-slider-thumb {
    cursor: not-allowed;
  }

  .range__control:disabled::-moz-range-thumb {
    cursor: not-allowed;
  }

  /* Tooltip output */
  .range__tooltip {
    position: absolute;
    z-index: var(--sl-z-index-tooltip);
    left: 0;
    border-radius: var(--sl-tooltip-border-radius);
    background-color: var(--sl-tooltip-background-color);
    font-family: var(--sl-tooltip-font-family);
    font-size: var(--sl-tooltip-font-size);
    font-weight: var(--sl-tooltip-font-weight);
    line-height: var(--sl-tooltip-line-height);
    color: var(--sl-tooltip-color);
    opacity: 0;
    padding: var(--sl-tooltip-padding);
    transition: var(--sl-transition-fast) opacity;
    pointer-events: none;
  }

  .range__tooltip:after {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    left: 50%;
    translate: calc(-1 * var(--sl-tooltip-arrow-size));
  }

  .range--tooltip-visible .range__tooltip {
    opacity: 1;
  }

  /* Tooltip on top */
  .range--tooltip-top .range__tooltip {
    top: calc(-1 * var(--thumb-size) - var(--tooltip-offset));
  }

  .range--tooltip-top .range__tooltip:after {
    border-top: var(--sl-tooltip-arrow-size) solid var(--sl-tooltip-background-color);
    border-left: var(--sl-tooltip-arrow-size) solid transparent;
    border-right: var(--sl-tooltip-arrow-size) solid transparent;
    top: 100%;
  }

  /* Tooltip on bottom */
  .range--tooltip-bottom .range__tooltip {
    bottom: calc(-1 * var(--thumb-size) - var(--tooltip-offset));
  }

  .range--tooltip-bottom .range__tooltip:after {
    border-bottom: var(--sl-tooltip-arrow-size) solid var(--sl-tooltip-background-color);
    border-left: var(--sl-tooltip-arrow-size) solid transparent;
    border-right: var(--sl-tooltip-arrow-size) solid transparent;
    bottom: 100%;
  }

  @media (forced-colors: active) {
    .range__control,
    .range__tooltip {
      border: solid 1px transparent;
    }

    .range__control::-webkit-slider-thumb {
      border: solid 1px transparent;
    }

    .range__control::-moz-range-thumb {
      border: solid 1px transparent;
    }

    .range__tooltip:after {
      display: none;
    }
  }
`;var J=class extends y{constructor(){super(...arguments);this.formControlController=new ut(this);this.hasSlotController=new K(this,"help-text","label");this.localize=new L(this);this.hasFocus=!1;this.hasTooltip=!1;this.title="";this.name="";this.value=0;this.label="";this.helpText="";this.disabled=!1;this.min=0;this.max=100;this.step=1;this.tooltip="top";this.tooltipFormatter=t=>t.toString();this.form="";this.defaultValue=0}static{this.styles=[C,Ht,Va]}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>this.syncRange()),this.value<this.min&&(this.value=this.min),this.value>this.max&&(this.value=this.max),this.updateComplete.then(()=>{this.syncRange(),this.resizeObserver.observe(this.input)})}disconnectedCallback(){super.disconnectedCallback(),this.resizeObserver?.unobserve(this.input)}handleChange(){this.emit("sl-change")}handleInput(){this.value=parseFloat(this.input.value),this.emit("sl-input"),this.syncRange()}handleBlur(){this.hasFocus=!1,this.hasTooltip=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.hasTooltip=!0,this.emit("sl-focus")}handleThumbDragStart(){this.hasTooltip=!0}handleThumbDragEnd(){this.hasTooltip=!1}syncProgress(t){this.input.style.setProperty("--percent",`${t*100}%`)}syncTooltip(t){if(this.output!==null){let r=this.input.offsetWidth,i=this.output.offsetWidth,a=getComputedStyle(this.input).getPropertyValue("--thumb-size"),n=this.localize.dir()==="rtl",c=r*t;if(n){let d=`${r-c}px + ${t} * ${a}`;this.output.style.translate=`calc((${d} - ${i/2}px - ${a} / 2))`}else{let d=`${c}px - ${t} * ${a}`;this.output.style.translate=`calc(${d} - ${i/2}px + ${a} / 2)`}}}handleValueChange(){this.formControlController.updateValidity(),this.input.value=this.value.toString(),this.value=parseFloat(this.input.value),this.syncRange()}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}syncRange(){let t=Math.max(0,(this.value-this.min)/(this.max-this.min));this.syncProgress(t),this.tooltip!=="none"&&this.hasTooltip&&this.updateComplete.then(()=>this.syncTooltip(t))}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}focus(t){this.input.focus(t)}blur(){this.input.blur()}stepUp(){this.input.stepUp(),this.value!==Number(this.input.value)&&(this.value=Number(this.input.value))}stepDown(){this.input.stepDown(),this.value!==Number(this.input.value)&&(this.value=Number(this.input.value))}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity()}render(){let t=this.hasSlotController.test("label"),r=this.hasSlotController.test("help-text"),i=this.label?!0:!!t,a=this.helpText?!0:!!r;return g`
      <div
        part="form-control"
        class=${$({"form-control":!0,"form-control--medium":!0,"form-control--has-label":i,"form-control--has-help-text":a})}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${i?"false":"true"}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${$({range:!0,"range--disabled":this.disabled,"range--focused":this.hasFocus,"range--rtl":this.localize.dir()==="rtl","range--tooltip-visible":this.hasTooltip,"range--tooltip-top":this.tooltip==="top","range--tooltip-bottom":this.tooltip==="bottom"})}
            @mousedown=${this.handleThumbDragStart}
            @mouseup=${this.handleThumbDragEnd}
            @touchstart=${this.handleThumbDragStart}
            @touchend=${this.handleThumbDragEnd}
          >
            <input
              part="input"
              id="input"
              class="range__control"
              title=${this.title}
              type="range"
              name=${z(this.name)}
              ?disabled=${this.disabled}
              min=${z(this.min)}
              max=${z(this.max)}
              step=${z(this.step)}
              .value=${Nt(this.value.toString())}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @focus=${this.handleFocus}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @blur=${this.handleBlur}
            />
            ${this.tooltip!=="none"&&!this.disabled?g`
                  <output part="tooltip" class="range__tooltip">
                    ${typeof this.tooltipFormatter=="function"?this.tooltipFormatter(this.value):this.value}
                  </output>
                `:""}
          </div>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${a?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};s([k(".range__control")],J.prototype,"input",2),s([k(".range__tooltip")],J.prototype,"output",2),s([S()],J.prototype,"hasFocus",2),s([S()],J.prototype,"hasTooltip",2),s([l()],J.prototype,"title",2),s([l()],J.prototype,"name",2),s([l({type:Number})],J.prototype,"value",2),s([l()],J.prototype,"label",2),s([l({attribute:"help-text"})],J.prototype,"helpText",2),s([l({type:Boolean,reflect:!0})],J.prototype,"disabled",2),s([l({type:Number})],J.prototype,"min",2),s([l({type:Number})],J.prototype,"max",2),s([l({type:Number})],J.prototype,"step",2),s([l()],J.prototype,"tooltip",2),s([l({attribute:!1})],J.prototype,"tooltipFormatter",2),s([l({reflect:!0})],J.prototype,"form",2),s([Xt()],J.prototype,"defaultValue",2),s([de({passive:!0})],J.prototype,"handleThumbDragStart",1),s([v("value",{waitUntilFirstUpdate:!0})],J.prototype,"handleValueChange",1),s([v("disabled",{waitUntilFirstUpdate:!0})],J.prototype,"handleDisabledChange",1),s([v("hasTooltip",{waitUntilFirstUpdate:!0})],J.prototype,"syncRange",1);var tu=J;J.define("sl-range");var Vr=class extends Wt{constructor(e){if(super(e),this.it=Z,e.type!==$t.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===Z||e==null)return this._t=void 0,this.it=e;if(e===yt)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;let t=[e];return t.raw=t,this._t={_$litType$:this.constructor.resultType,strings:t,values:[]}}};Vr.directiveName="unsafeHTML",Vr.resultType=1;var mr=oe(Vr);var Na=_`
  :host {
    --symbol-color: var(--sl-color-neutral-300);
    --symbol-color-active: var(--sl-color-amber-500);
    --symbol-size: 1.2rem;
    --symbol-spacing: var(--sl-spacing-3x-small);

    display: inline-flex;
  }

  .rating {
    position: relative;
    display: inline-flex;
    border-radius: var(--sl-border-radius-medium);
    vertical-align: middle;
  }

  .rating:focus {
    outline: none;
  }

  .rating:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .rating__symbols {
    display: inline-flex;
    position: relative;
    font-size: var(--symbol-size);
    line-height: 0;
    color: var(--symbol-color);
    white-space: nowrap;
    cursor: pointer;
  }

  .rating__symbols > * {
    padding: var(--symbol-spacing);
  }

  .rating__symbol--active,
  .rating__partial--filled {
    color: var(--symbol-color-active);
  }

  .rating__partial-symbol-container {
    position: relative;
  }

  .rating__partial--filled {
    position: absolute;
    top: var(--symbol-spacing);
    left: var(--symbol-spacing);
  }

  .rating__symbol {
    transition: var(--sl-transition-fast) scale;
    pointer-events: none;
  }

  .rating__symbol--hover {
    scale: 1.2;
  }

  .rating--disabled .rating__symbols,
  .rating--readonly .rating__symbols {
    cursor: default;
  }

  .rating--disabled .rating__symbol--hover,
  .rating--readonly .rating__symbol--hover {
    scale: none;
  }

  .rating--disabled {
    opacity: 0.5;
  }

  .rating--disabled .rating__symbols {
    cursor: not-allowed;
  }

  /* Forced colors mode */
  @media (forced-colors: active) {
    .rating__symbol--active {
      color: SelectedItem;
    }
  }
`;var vt=class extends y{constructor(){super(...arguments);this.localize=new L(this);this.hoverValue=0;this.isHovering=!1;this.label="";this.value=0;this.max=5;this.precision=1;this.readonly=!1;this.disabled=!1;this.getSymbol=()=>'<sl-icon name="star-fill" library="system"></sl-icon>'}static{this.styles=[C,Na]}static{this.dependencies={"sl-icon":D}}getValueFromMousePosition(t){return this.getValueFromXCoordinate(t.clientX)}getValueFromTouchPosition(t){return this.getValueFromXCoordinate(t.touches[0].clientX)}getValueFromXCoordinate(t){let r=this.localize.dir()==="rtl",{left:i,right:a,width:n}=this.rating.getBoundingClientRect(),c=r?this.roundToPrecision((a-t)/n*this.max,this.precision):this.roundToPrecision((t-i)/n*this.max,this.precision);return tt(c,0,this.max)}handleClick(t){this.disabled||(this.setValue(this.getValueFromMousePosition(t)),this.emit("sl-change"))}setValue(t){this.disabled||this.readonly||(this.value=t===this.value?0:t,this.isHovering=!1)}handleKeyDown(t){let r=this.localize.dir()==="ltr",i=this.localize.dir()==="rtl",a=this.value;if(!(this.disabled||this.readonly)){if(t.key==="ArrowDown"||r&&t.key==="ArrowLeft"||i&&t.key==="ArrowRight"){let n=t.shiftKey?1:this.precision;this.value=Math.max(0,this.value-n),t.preventDefault()}if(t.key==="ArrowUp"||r&&t.key==="ArrowRight"||i&&t.key==="ArrowLeft"){let n=t.shiftKey?1:this.precision;this.value=Math.min(this.max,this.value+n),t.preventDefault()}t.key==="Home"&&(this.value=0,t.preventDefault()),t.key==="End"&&(this.value=this.max,t.preventDefault()),this.value!==a&&this.emit("sl-change")}}handleMouseEnter(t){this.isHovering=!0,this.hoverValue=this.getValueFromMousePosition(t)}handleMouseMove(t){this.hoverValue=this.getValueFromMousePosition(t)}handleMouseLeave(){this.isHovering=!1}handleTouchStart(t){this.isHovering=!0,this.hoverValue=this.getValueFromTouchPosition(t),t.preventDefault()}handleTouchMove(t){this.hoverValue=this.getValueFromTouchPosition(t)}handleTouchEnd(t){this.isHovering=!1,this.setValue(this.hoverValue),this.emit("sl-change"),t.preventDefault()}roundToPrecision(t,r=.5){let i=1/r;return Math.ceil(t*i)/i}handleHoverValueChange(){this.emit("sl-hover",{detail:{phase:"move",value:this.hoverValue}})}handleIsHoveringChange(){this.emit("sl-hover",{detail:{phase:this.isHovering?"start":"end",value:this.hoverValue}})}focus(t){this.rating.focus(t)}blur(){this.rating.blur()}render(){let t=this.localize.dir()==="rtl",r=Array.from(Array(this.max).keys()),i=0;return this.disabled||this.readonly?i=this.value:i=this.isHovering?this.hoverValue:this.value,g`
      <div
        part="base"
        class=${$({rating:!0,"rating--readonly":this.readonly,"rating--disabled":this.disabled,"rating--rtl":t})}
        role="slider"
        aria-label=${this.label}
        aria-disabled=${this.disabled?"true":"false"}
        aria-readonly=${this.readonly?"true":"false"}
        aria-valuenow=${this.value}
        aria-valuemin=${0}
        aria-valuemax=${this.max}
        tabindex=${this.disabled||this.readonly?"-1":"0"}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        @mouseenter=${this.handleMouseEnter}
        @touchstart=${this.handleTouchStart}
        @mouseleave=${this.handleMouseLeave}
        @touchend=${this.handleTouchEnd}
        @mousemove=${this.handleMouseMove}
        @touchmove=${this.handleTouchMove}
      >
        <span class="rating__symbols">
          ${r.map(a=>i>a&&i<a+1?g`
                <span
                  class=${$({rating__symbol:!0,"rating__partial-symbol-container":!0,"rating__symbol--hover":this.isHovering&&Math.ceil(i)===a+1})}
                  role="presentation"
                >
                  <div
                    style=${gt({clipPath:t?`inset(0 ${(i-a)*100}% 0 0)`:`inset(0 0 0 ${(i-a)*100}%)`})}
                  >
                    ${mr(this.getSymbol(a+1))}
                  </div>
                  <div
                    class="rating__partial--filled"
                    style=${gt({clipPath:t?`inset(0 0 0 ${100-(i-a)*100}%)`:`inset(0 ${100-(i-a)*100}% 0 0)`})}
                  >
                    ${mr(this.getSymbol(a+1))}
                  </div>
                </span>
              `:g`
              <span
                class=${$({rating__symbol:!0,"rating__symbol--hover":this.isHovering&&Math.ceil(i)===a+1,"rating__symbol--active":i>=a+1})}
                role="presentation"
              >
                ${mr(this.getSymbol(a+1))}
              </span>
            `)}
        </span>
      </div>
    `}};s([k(".rating")],vt.prototype,"rating",2),s([S()],vt.prototype,"hoverValue",2),s([S()],vt.prototype,"isHovering",2),s([l()],vt.prototype,"label",2),s([l({type:Number})],vt.prototype,"value",2),s([l({type:Number})],vt.prototype,"max",2),s([l({type:Number})],vt.prototype,"precision",2),s([l({type:Boolean,reflect:!0})],vt.prototype,"readonly",2),s([l({type:Boolean,reflect:!0})],vt.prototype,"disabled",2),s([l()],vt.prototype,"getSymbol",2),s([de({passive:!0})],vt.prototype,"handleTouchMove",1),s([v("hoverValue")],vt.prototype,"handleHoverValueChange",1),s([v("isHovering")],vt.prototype,"handleIsHoveringChange",1);var eu=vt;vt.define("sl-rating");var ru=[{max:276e4,value:6e4,unit:"minute"},{max:72e6,value:36e5,unit:"hour"},{max:5184e5,value:864e5,unit:"day"},{max:24192e5,value:6048e5,unit:"week"},{max:28512e6,value:2592e6,unit:"month"},{max:1/0,value:31536e6,unit:"year"}],Jt=class extends y{constructor(){super(...arguments);this.localize=new L(this);this.isoTime="";this.relativeTime="";this.date=new Date;this.format="long";this.numeric="auto";this.sync=!1}disconnectedCallback(){super.disconnectedCallback(),clearTimeout(this.updateTimeout)}render(){let t=new Date,r=new Date(this.date);if(isNaN(r.getMilliseconds()))return this.relativeTime="",this.isoTime="","";let i=r.getTime()-t.getTime(),{unit:a,value:n}=ru.find(c=>Math.abs(i)<c.max);if(this.isoTime=r.toISOString(),this.relativeTime=this.localize.relativeTime(Math.round(i/n),a,{numeric:this.numeric,style:this.format}),clearTimeout(this.updateTimeout),this.sync){let c;a==="minute"?c=Eo("second"):a==="hour"?c=Eo("minute"):a==="day"?c=Eo("hour"):c=Eo("day"),this.updateTimeout=window.setTimeout(()=>this.requestUpdate(),c)}return g` <time datetime=${this.isoTime}>${this.relativeTime}</time> `}};s([S()],Jt.prototype,"isoTime",2),s([S()],Jt.prototype,"relativeTime",2),s([l()],Jt.prototype,"date",2),s([l()],Jt.prototype,"format",2),s([l()],Jt.prototype,"numeric",2),s([l({type:Boolean})],Jt.prototype,"sync",2);function Eo(o){let t={second:1e3,minute:6e4,hour:36e5,day:864e5}[o];return t-Date.now()%t}var ou=Jt;Jt.define("sl-relative-time");var Ba=_`
  :host {
    display: contents;
  }
`;var ge=class extends y{constructor(){super(...arguments);this.observedElements=[];this.disabled=!1}static{this.styles=[C,Ba]}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(t=>{this.emit("sl-resize",{detail:{entries:t}})}),this.disabled||this.startObserver()}disconnectedCallback(){super.disconnectedCallback(),this.stopObserver()}handleSlotChange(){this.disabled||this.startObserver()}startObserver(){let t=this.shadowRoot.querySelector("slot");if(t!==null){let r=t.assignedElements({flatten:!0});this.observedElements.forEach(i=>this.resizeObserver.unobserve(i)),this.observedElements=[],r.forEach(i=>{this.resizeObserver.observe(i),this.observedElements.push(i)})}}stopObserver(){this.resizeObserver.disconnect()}handleDisabledChange(){this.disabled?this.stopObserver():this.startObserver()}render(){return g` <slot @slotchange=${this.handleSlotChange}></slot> `}};s([l({type:Boolean,reflect:!0})],ge.prototype,"disabled",2),s([v("disabled",{waitUntilFirstUpdate:!0})],ge.prototype,"handleDisabledChange",1);var iu=ge;ge.define("sl-resize-observer");var Ua=_`
  :host {
    display: inline-block;
  }

  .tag {
    display: flex;
    align-items: center;
    border: solid 1px;
    line-height: 1;
    white-space: nowrap;
    user-select: none;
    -webkit-user-select: none;
  }

  .tag__remove::part(base) {
    color: inherit;
    padding: 0;
  }

  /*
   * Variant modifiers
   */

  .tag--primary {
    background-color: var(--sl-color-primary-50);
    border-color: var(--sl-color-primary-200);
    color: var(--sl-color-primary-800);
  }

  .tag--primary:active > sl-icon-button {
    color: var(--sl-color-primary-600);
  }

  .tag--success {
    background-color: var(--sl-color-success-50);
    border-color: var(--sl-color-success-200);
    color: var(--sl-color-success-800);
  }

  .tag--success:active > sl-icon-button {
    color: var(--sl-color-success-600);
  }

  .tag--neutral {
    background-color: var(--sl-color-neutral-50);
    border-color: var(--sl-color-neutral-200);
    color: var(--sl-color-neutral-800);
  }

  .tag--neutral:active > sl-icon-button {
    color: var(--sl-color-neutral-600);
  }

  .tag--warning {
    background-color: var(--sl-color-warning-50);
    border-color: var(--sl-color-warning-200);
    color: var(--sl-color-warning-800);
  }

  .tag--warning:active > sl-icon-button {
    color: var(--sl-color-warning-600);
  }

  .tag--danger {
    background-color: var(--sl-color-danger-50);
    border-color: var(--sl-color-danger-200);
    color: var(--sl-color-danger-800);
  }

  .tag--danger:active > sl-icon-button {
    color: var(--sl-color-danger-600);
  }

  /*
   * Size modifiers
   */

  .tag--small {
    font-size: var(--sl-button-font-size-small);
    height: calc(var(--sl-input-height-small) * 0.8);
    line-height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-small);
    padding: 0 var(--sl-spacing-x-small);
  }

  .tag--medium {
    font-size: var(--sl-button-font-size-medium);
    height: calc(var(--sl-input-height-medium) * 0.8);
    line-height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-medium);
    padding: 0 var(--sl-spacing-small);
  }

  .tag--large {
    font-size: var(--sl-button-font-size-large);
    height: calc(var(--sl-input-height-large) * 0.8);
    line-height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-large);
    padding: 0 var(--sl-spacing-medium);
  }

  .tag__remove {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  /*
   * Pill modifier
   */

  .tag--pill {
    border-radius: var(--sl-border-radius-pill);
  }
`;var te=class extends y{constructor(){super(...arguments);this.localize=new L(this);this.variant="neutral";this.size="medium";this.pill=!1;this.removable=!1}static{this.styles=[C,Ua]}static{this.dependencies={"sl-icon-button":Q}}handleRemoveClick(){this.emit("sl-remove")}render(){return g`
      <span
        part="base"
        class=${$({tag:!0,"tag--primary":this.variant==="primary","tag--success":this.variant==="success","tag--neutral":this.variant==="neutral","tag--warning":this.variant==="warning","tag--danger":this.variant==="danger","tag--text":this.variant==="text","tag--small":this.size==="small","tag--medium":this.size==="medium","tag--large":this.size==="large","tag--pill":this.pill,"tag--removable":this.removable})}
      >
        <slot part="content" class="tag__content"></slot>

        ${this.removable?g`
              <sl-icon-button
                part="remove-button"
                exportparts="base:remove-button__base"
                name="x-lg"
                library="system"
                label=${this.localize.term("remove")}
                class="tag__remove"
                @click=${this.handleRemoveClick}
                tabindex="-1"
              ></sl-icon-button>
            `:""}
      </span>
    `}};s([l({reflect:!0})],te.prototype,"variant",2),s([l({reflect:!0})],te.prototype,"size",2),s([l({type:Boolean,reflect:!0})],te.prototype,"pill",2),s([l({type:Boolean})],te.prototype,"removable",2);var qa=_`
  :host {
    display: block;
  }

  /** The popup */
  .select {
    flex: 1 1 auto;
    display: inline-flex;
    width: 100%;
    position: relative;
    vertical-align: middle;
  }

  .select::part(popup) {
    z-index: var(--sl-z-index-dropdown);
  }

  .select[data-current-placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .select[data-current-placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  /* Combobox */
  .select__combobox {
    flex: 1;
    display: flex;
    width: 100%;
    min-width: 0;
    position: relative;
    align-items: center;
    justify-content: start;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    letter-spacing: var(--sl-input-letter-spacing);
    vertical-align: middle;
    overflow: hidden;
    cursor: pointer;
    transition:
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) border,
      var(--sl-transition-fast) box-shadow,
      var(--sl-transition-fast) background-color;
  }

  .select__display-input {
    position: relative;
    width: 100%;
    font: inherit;
    border: none;
    background: none;
    color: var(--sl-input-color);
    cursor: inherit;
    overflow: hidden;
    padding: 0;
    margin: 0;
    -webkit-appearance: none;
  }

  .select__display-input::placeholder {
    color: var(--sl-input-placeholder-color);
  }

  .select:not(.select--disabled):hover .select__display-input {
    color: var(--sl-input-color-hover);
  }

  .select__display-input:focus {
    outline: none;
  }

  /* Visually hide the display input when multiple is enabled */
  .select--multiple:not(.select--placeholder-visible) .select__display-input {
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
  }

  .select__value-input {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    opacity: 0;
    z-index: -1;
  }

  .select__tags {
    display: flex;
    flex: 1;
    align-items: center;
    flex-wrap: wrap;
    margin-inline-start: var(--sl-spacing-2x-small);
  }

  .select__tags::slotted(sl-tag) {
    cursor: pointer !important;
  }

  .select--disabled .select__tags,
  .select--disabled .select__tags::slotted(sl-tag) {
    cursor: not-allowed !important;
  }

  /* Standard selects */
  .select--standard .select__combobox {
    background-color: var(--sl-input-background-color);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
  }

  .select--standard.select--disabled .select__combobox {
    background-color: var(--sl-input-background-color-disabled);
    border-color: var(--sl-input-border-color-disabled);
    color: var(--sl-input-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
    outline: none;
  }

  .select--standard:not(.select--disabled).select--open .select__combobox,
  .select--standard:not(.select--disabled).select--focused .select__combobox {
    background-color: var(--sl-input-background-color-focus);
    border-color: var(--sl-input-border-color-focus);
    box-shadow: 0 0 0 var(--sl-focus-ring-width) var(--sl-input-focus-ring-color);
  }

  /* Filled selects */
  .select--filled .select__combobox {
    border: none;
    background-color: var(--sl-input-filled-background-color);
    color: var(--sl-input-color);
  }

  .select--filled:hover:not(.select--disabled) .select__combobox {
    background-color: var(--sl-input-filled-background-color-hover);
  }

  .select--filled.select--disabled .select__combobox {
    background-color: var(--sl-input-filled-background-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .select--filled:not(.select--disabled).select--open .select__combobox,
  .select--filled:not(.select--disabled).select--focused .select__combobox {
    background-color: var(--sl-input-filled-background-color-focus);
    outline: var(--sl-focus-ring);
  }

  /* Sizes */
  .select--small .select__combobox {
    border-radius: var(--sl-input-border-radius-small);
    font-size: var(--sl-input-font-size-small);
    min-height: var(--sl-input-height-small);
    padding-block: 0;
    padding-inline: var(--sl-input-spacing-small);
  }

  .select--small .select__clear {
    margin-inline-start: var(--sl-input-spacing-small);
  }

  .select--small .select__prefix::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-small);
  }

  .select--small.select--multiple:not(.select--placeholder-visible) .select__prefix::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-small);
  }

  .select--small.select--multiple:not(.select--placeholder-visible) .select__combobox {
    padding-block: 2px;
    padding-inline-start: 0;
  }

  .select--small .select__tags {
    gap: 2px;
  }

  .select--medium .select__combobox {
    border-radius: var(--sl-input-border-radius-medium);
    font-size: var(--sl-input-font-size-medium);
    min-height: var(--sl-input-height-medium);
    padding-block: 0;
    padding-inline: var(--sl-input-spacing-medium);
  }

  .select--medium .select__clear {
    margin-inline-start: var(--sl-input-spacing-medium);
  }

  .select--medium .select__prefix::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-medium);
  }

  .select--medium.select--multiple:not(.select--placeholder-visible) .select__prefix::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-medium);
  }

  .select--medium.select--multiple:not(.select--placeholder-visible) .select__combobox {
    padding-inline-start: 0;
    padding-block: 3px;
  }

  .select--medium .select__tags {
    gap: 3px;
  }

  .select--large .select__combobox {
    border-radius: var(--sl-input-border-radius-large);
    font-size: var(--sl-input-font-size-large);
    min-height: var(--sl-input-height-large);
    padding-block: 0;
    padding-inline: var(--sl-input-spacing-large);
  }

  .select--large .select__clear {
    margin-inline-start: var(--sl-input-spacing-large);
  }

  .select--large .select__prefix::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-large);
  }

  .select--large.select--multiple:not(.select--placeholder-visible) .select__prefix::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-large);
  }

  .select--large.select--multiple:not(.select--placeholder-visible) .select__combobox {
    padding-inline-start: 0;
    padding-block: 4px;
  }

  .select--large .select__tags {
    gap: 4px;
  }

  /* Pills */
  .select--pill.select--small .select__combobox {
    border-radius: var(--sl-input-height-small);
  }

  .select--pill.select--medium .select__combobox {
    border-radius: var(--sl-input-height-medium);
  }

  .select--pill.select--large .select__combobox {
    border-radius: var(--sl-input-height-large);
  }

  /* Prefix and Suffix */
  .select__prefix,
  .select__suffix {
    flex: 0;
    display: inline-flex;
    align-items: center;
    color: var(--sl-input-placeholder-color);
  }

  .select__suffix::slotted(*) {
    margin-inline-start: var(--sl-spacing-small);
  }

  /* Clear button */
  .select__clear {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: inherit;
    color: var(--sl-input-icon-color);
    border: none;
    background: none;
    padding: 0;
    transition: var(--sl-transition-fast) color;
    cursor: pointer;
  }

  .select__clear:hover {
    color: var(--sl-input-icon-color-hover);
  }

  .select__clear:focus {
    outline: none;
  }

  /* Expand icon */
  .select__expand-icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    transition: var(--sl-transition-medium) rotate ease;
    rotate: 0;
    margin-inline-start: var(--sl-spacing-small);
  }

  .select--open .select__expand-icon {
    rotate: -180deg;
  }

  /* Listbox */
  .select__listbox {
    display: block;
    position: relative;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    box-shadow: var(--sl-shadow-large);
    background: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-radius: var(--sl-border-radius-medium);
    padding-block: var(--sl-spacing-x-small);
    padding-inline: 0;
    overflow: auto;
    overscroll-behavior: none;

    /* Make sure it adheres to the popup's auto size */
    max-width: var(--auto-size-available-width);
    max-height: var(--auto-size-available-height);
  }

  .select__listbox ::slotted(sl-divider) {
    --spacing: var(--sl-spacing-x-small);
  }

  .select__listbox ::slotted(small) {
    display: block;
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-semibold);
    color: var(--sl-color-neutral-500);
    padding-block: var(--sl-spacing-2x-small);
    padding-inline: var(--sl-spacing-x-large);
  }
`;var U=class extends y{constructor(){super(...arguments);this.formControlController=new ut(this,{assumeInteractionOn:["sl-blur","sl-input"]});this.hasSlotController=new K(this,"help-text","label");this.localize=new L(this);this.typeToSelectString="";this.hasFocus=!1;this.displayLabel="";this.selectedOptions=[];this.valueHasChanged=!1;this.name="";this._value="";this.defaultValue="";this.size="medium";this.placeholder="";this.multiple=!1;this.maxOptionsVisible=3;this.disabled=!1;this.clearable=!1;this.open=!1;this.hoist=!1;this.filled=!1;this.pill=!1;this.label="";this.placement="bottom";this.helpText="";this.form="";this.required=!1;this.getTag=t=>g`
      <sl-tag
        part="tag"
        exportparts="
              base:tag__base,
              content:tag__content,
              remove-button:tag__remove-button,
              remove-button__base:tag__remove-button__base
            "
        ?pill=${this.pill}
        size=${this.size}
        removable
        @sl-remove=${r=>this.handleTagRemove(r,t)}
      >
        ${t.getTextLabel()}
      </sl-tag>
    `;this.handleDocumentFocusIn=t=>{let r=t.composedPath();this&&!r.includes(this)&&this.hide()};this.handleDocumentKeyDown=t=>{let r=t.target,i=r.closest(".select__clear")!==null,a=r.closest("sl-icon-button")!==null;if(!(i||a)){if(t.key==="Escape"&&this.open&&!this.closeWatcher&&(t.preventDefault(),t.stopPropagation(),this.hide(),this.displayInput.focus({preventScroll:!0})),t.key==="Enter"||t.key===" "&&this.typeToSelectString===""){if(t.preventDefault(),t.stopImmediatePropagation(),!this.open){this.show();return}this.currentOption&&!this.currentOption.disabled&&(this.valueHasChanged=!0,this.multiple?this.toggleOptionSelection(this.currentOption):this.setSelectedOptions(this.currentOption),this.updateComplete.then(()=>{this.emit("sl-input"),this.emit("sl-change")}),this.multiple||(this.hide(),this.displayInput.focus({preventScroll:!0})));return}if(["ArrowUp","ArrowDown","Home","End"].includes(t.key)){let n=this.getAllOptions(),c=n.indexOf(this.currentOption),d=Math.max(0,c);if(t.preventDefault(),!this.open&&(this.show(),this.currentOption))return;t.key==="ArrowDown"?(d=c+1,d>n.length-1&&(d=0)):t.key==="ArrowUp"?(d=c-1,d<0&&(d=n.length-1)):t.key==="Home"?d=0:t.key==="End"&&(d=n.length-1),this.setCurrentOption(n[d])}if(t.key&&t.key.length===1||t.key==="Backspace"){let n=this.getAllOptions();if(t.metaKey||t.ctrlKey||t.altKey)return;if(!this.open){if(t.key==="Backspace")return;this.show()}t.stopPropagation(),t.preventDefault(),clearTimeout(this.typeToSelectTimeout),this.typeToSelectTimeout=window.setTimeout(()=>this.typeToSelectString="",1e3),t.key==="Backspace"?this.typeToSelectString=this.typeToSelectString.slice(0,-1):this.typeToSelectString+=t.key.toLowerCase();for(let c of n)if(c.getTextLabel().toLowerCase().startsWith(this.typeToSelectString)){this.setCurrentOption(c);break}}}};this.handleDocumentMouseDown=t=>{let r=t.composedPath();this&&!r.includes(this)&&this.hide()}}static{this.styles=[C,Ht,qa]}static{this.dependencies={"sl-icon":D,"sl-popup":N,"sl-tag":te}}get value(){return this._value}set value(t){this.multiple?t=Array.isArray(t)?t:t.split(" "):t=Array.isArray(t)?t.join(" "):t,this._value!==t&&(this.valueHasChanged=!0,this._value=t)}get validity(){return this.valueInput.validity}get validationMessage(){return this.valueInput.validationMessage}connectedCallback(){super.connectedCallback(),setTimeout(()=>{this.handleDefaultSlotChange()}),this.open=!1}addOpenListeners(){document.addEventListener("focusin",this.handleDocumentFocusIn),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown),this.getRootNode()!==document&&this.getRootNode().addEventListener("focusin",this.handleDocumentFocusIn),"CloseWatcher"in window&&(this.closeWatcher?.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.open&&(this.hide(),this.displayInput.focus({preventScroll:!0}))})}removeOpenListeners(){document.removeEventListener("focusin",this.handleDocumentFocusIn),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown),this.getRootNode()!==document&&this.getRootNode().removeEventListener("focusin",this.handleDocumentFocusIn),this.closeWatcher?.destroy()}handleFocus(){this.hasFocus=!0,this.displayInput.setSelectionRange(0,0),this.emit("sl-focus")}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleLabelClick(){this.displayInput.focus()}handleComboboxMouseDown(t){let i=t.composedPath().some(a=>a instanceof Element&&a.tagName.toLowerCase()==="sl-icon-button");this.disabled||i||(t.preventDefault(),this.displayInput.focus({preventScroll:!0}),this.open=!this.open)}handleComboboxKeyDown(t){t.key!=="Tab"&&(t.stopPropagation(),this.handleDocumentKeyDown(t))}handleClearClick(t){t.stopPropagation(),this.valueHasChanged=!0,this.value!==""&&(this.setSelectedOptions([]),this.displayInput.focus({preventScroll:!0}),this.updateComplete.then(()=>{this.emit("sl-clear"),this.emit("sl-input"),this.emit("sl-change")}))}handleClearMouseDown(t){t.stopPropagation(),t.preventDefault()}handleOptionClick(t){let i=t.target.closest("sl-option"),a=this.value;i&&!i.disabled&&(this.valueHasChanged=!0,this.multiple?this.toggleOptionSelection(i):this.setSelectedOptions(i),this.updateComplete.then(()=>this.displayInput.focus({preventScroll:!0})),this.value!==a&&this.updateComplete.then(()=>{this.emit("sl-input"),this.emit("sl-change")}),this.multiple||(this.hide(),this.displayInput.focus({preventScroll:!0})))}handleDefaultSlotChange(){customElements.get("sl-option")||customElements.whenDefined("sl-option").then(()=>this.handleDefaultSlotChange());let t=this.getAllOptions(),r=this.valueHasChanged?this.value:this.defaultValue,i=Array.isArray(r)?r:[r],a=[];t.forEach(n=>a.push(n.value)),this.setSelectedOptions(t.filter(n=>i.includes(n.value)))}handleTagRemove(t,r){t.stopPropagation(),this.valueHasChanged=!0,this.disabled||(this.toggleOptionSelection(r,!1),this.updateComplete.then(()=>{this.emit("sl-input"),this.emit("sl-change")}))}getAllOptions(){return[...this.querySelectorAll("sl-option")]}getFirstOption(){return this.querySelector("sl-option")}setCurrentOption(t){this.getAllOptions().forEach(i=>{i.current=!1,i.tabIndex=-1}),t&&(this.currentOption=t,t.current=!0,t.tabIndex=0,t.focus())}setSelectedOptions(t){let r=this.getAllOptions(),i=Array.isArray(t)?t:[t];r.forEach(a=>a.selected=!1),i.length&&i.forEach(a=>a.selected=!0),this.selectionChanged()}toggleOptionSelection(t,r){r===!0||r===!1?t.selected=r:t.selected=!t.selected,this.selectionChanged()}selectionChanged(){let t=this.getAllOptions();this.selectedOptions=t.filter(i=>i.selected);let r=this.valueHasChanged;if(this.multiple)this.value=this.selectedOptions.map(i=>i.value),this.placeholder&&this.value.length===0?this.displayLabel="":this.displayLabel=this.localize.term("numOptionsSelected",this.selectedOptions.length);else{let i=this.selectedOptions[0];this.value=i?.value??"",this.displayLabel=i?.getTextLabel?.()??""}this.valueHasChanged=r,this.updateComplete.then(()=>{this.formControlController.updateValidity()})}get tags(){return this.selectedOptions.map((t,r)=>{if(r<this.maxOptionsVisible||this.maxOptionsVisible<=0){let i=this.getTag(t,r);return g`<div @sl-remove=${a=>this.handleTagRemove(a,t)}>
          ${typeof i=="string"?mr(i):i}
        </div>`}else if(r===this.maxOptionsVisible)return g`<sl-tag size=${this.size}>+${this.selectedOptions.length-r}</sl-tag>`;return g``})}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}handleDisabledChange(){this.disabled&&(this.open=!1,this.handleOpenChange())}attributeChangedCallback(t,r,i){if(super.attributeChangedCallback(t,r,i),t==="value"){let a=this.valueHasChanged;this.value=this.defaultValue,this.valueHasChanged=a}}handleValueChange(){if(!this.valueHasChanged){let i=this.valueHasChanged;this.value=this.defaultValue,this.valueHasChanged=i}let t=this.getAllOptions(),r=Array.isArray(this.value)?this.value:[this.value];this.setSelectedOptions(t.filter(i=>r.includes(i.value)))}async handleOpenChange(){if(this.open&&!this.disabled){this.setCurrentOption(this.selectedOptions[0]||this.getFirstOption()),this.emit("sl-show"),this.addOpenListeners(),await Y(this),this.listbox.hidden=!1,this.popup.active=!0,requestAnimationFrame(()=>{this.setCurrentOption(this.currentOption)});let{keyframes:t,options:r}=j(this,"select.show",{dir:this.localize.dir()});await X(this.popup.popup,t,r),this.currentOption&&Dr(this.currentOption,this.listbox,"vertical","auto"),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),await Y(this);let{keyframes:t,options:r}=j(this,"select.hide",{dir:this.localize.dir()});await X(this.popup.popup,t,r),this.listbox.hidden=!0,this.popup.active=!1,this.emit("sl-after-hide")}}async show(){if(this.open||this.disabled){this.open=!1;return}return this.open=!0,rt(this,"sl-after-show")}async hide(){if(!this.open||this.disabled){this.open=!1;return}return this.open=!1,rt(this,"sl-after-hide")}checkValidity(){return this.valueInput.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.valueInput.reportValidity()}setCustomValidity(t){this.valueInput.setCustomValidity(t),this.formControlController.updateValidity()}focus(t){this.displayInput.focus(t)}blur(){this.displayInput.blur()}render(){let t=this.hasSlotController.test("label"),r=this.hasSlotController.test("help-text"),i=this.label?!0:!!t,a=this.helpText?!0:!!r,n=this.clearable&&!this.disabled&&this.value.length>0,c=this.placeholder&&this.value&&this.value.length<=0;return g`
      <div
        part="form-control"
        class=${$({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":i,"form-control--has-help-text":a})}
      >
        <label
          id="label"
          part="form-control-label"
          class="form-control__label"
          aria-hidden=${i?"false":"true"}
          @click=${this.handleLabelClick}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <sl-popup
            class=${$({select:!0,"select--standard":!0,"select--filled":this.filled,"select--pill":this.pill,"select--open":this.open,"select--disabled":this.disabled,"select--multiple":this.multiple,"select--focused":this.hasFocus,"select--placeholder-visible":c,"select--top":this.placement==="top","select--bottom":this.placement==="bottom","select--small":this.size==="small","select--medium":this.size==="medium","select--large":this.size==="large"})}
            placement=${this.placement}
            strategy=${this.hoist?"fixed":"absolute"}
            flip
            shift
            sync="width"
            auto-size="vertical"
            auto-size-padding="10"
          >
            <div
              part="combobox"
              class="select__combobox"
              slot="anchor"
              @keydown=${this.handleComboboxKeyDown}
              @mousedown=${this.handleComboboxMouseDown}
            >
              <slot part="prefix" name="prefix" class="select__prefix"></slot>

              <input
                part="display-input"
                class="select__display-input"
                type="text"
                placeholder=${this.placeholder}
                .disabled=${this.disabled}
                .value=${this.displayLabel}
                autocomplete="off"
                spellcheck="false"
                autocapitalize="off"
                readonly
                aria-controls="listbox"
                aria-expanded=${this.open?"true":"false"}
                aria-haspopup="listbox"
                aria-labelledby="label"
                aria-disabled=${this.disabled?"true":"false"}
                aria-describedby="help-text"
                role="combobox"
                tabindex="0"
                @focus=${this.handleFocus}
                @blur=${this.handleBlur}
              />

              ${this.multiple?g`<div part="tags" class="select__tags">${this.tags}</div>`:""}

              <input
                class="select__value-input"
                type="text"
                ?disabled=${this.disabled}
                ?required=${this.required}
                .value=${Array.isArray(this.value)?this.value.join(", "):this.value}
                tabindex="-1"
                aria-hidden="true"
                @focus=${()=>this.focus()}
                @invalid=${this.handleInvalid}
              />

              ${n?g`
                    <button
                      part="clear-button"
                      class="select__clear"
                      type="button"
                      aria-label=${this.localize.term("clearEntry")}
                      @mousedown=${this.handleClearMouseDown}
                      @click=${this.handleClearClick}
                      tabindex="-1"
                    >
                      <slot name="clear-icon">
                        <sl-icon name="x-circle-fill" library="system"></sl-icon>
                      </slot>
                    </button>
                  `:""}

              <slot name="suffix" part="suffix" class="select__suffix"></slot>

              <slot name="expand-icon" part="expand-icon" class="select__expand-icon">
                <sl-icon library="system" name="chevron-down"></sl-icon>
              </slot>
            </div>

            <div
              id="listbox"
              role="listbox"
              aria-expanded=${this.open?"true":"false"}
              aria-multiselectable=${this.multiple?"true":"false"}
              aria-labelledby="label"
              part="listbox"
              class="select__listbox"
              tabindex="-1"
              @mouseup=${this.handleOptionClick}
              @slotchange=${this.handleDefaultSlotChange}
            >
              <slot></slot>
            </div>
          </sl-popup>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${a?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};s([k(".select")],U.prototype,"popup",2),s([k(".select__combobox")],U.prototype,"combobox",2),s([k(".select__display-input")],U.prototype,"displayInput",2),s([k(".select__value-input")],U.prototype,"valueInput",2),s([k(".select__listbox")],U.prototype,"listbox",2),s([S()],U.prototype,"hasFocus",2),s([S()],U.prototype,"displayLabel",2),s([S()],U.prototype,"currentOption",2),s([S()],U.prototype,"selectedOptions",2),s([S()],U.prototype,"valueHasChanged",2),s([l()],U.prototype,"name",2),s([S()],U.prototype,"value",1),s([l({attribute:"value"})],U.prototype,"defaultValue",2),s([l({reflect:!0})],U.prototype,"size",2),s([l()],U.prototype,"placeholder",2),s([l({type:Boolean,reflect:!0})],U.prototype,"multiple",2),s([l({attribute:"max-options-visible",type:Number})],U.prototype,"maxOptionsVisible",2),s([l({type:Boolean,reflect:!0})],U.prototype,"disabled",2),s([l({type:Boolean})],U.prototype,"clearable",2),s([l({type:Boolean,reflect:!0})],U.prototype,"open",2),s([l({type:Boolean})],U.prototype,"hoist",2),s([l({type:Boolean,reflect:!0})],U.prototype,"filled",2),s([l({type:Boolean,reflect:!0})],U.prototype,"pill",2),s([l()],U.prototype,"label",2),s([l({reflect:!0})],U.prototype,"placement",2),s([l({attribute:"help-text"})],U.prototype,"helpText",2),s([l({reflect:!0})],U.prototype,"form",2),s([l({type:Boolean,reflect:!0})],U.prototype,"required",2),s([l()],U.prototype,"getTag",2),s([v("disabled",{waitUntilFirstUpdate:!0})],U.prototype,"handleDisabledChange",1),s([v(["defaultValue","value"],{waitUntilFirstUpdate:!0})],U.prototype,"handleValueChange",1),s([v("open",{waitUntilFirstUpdate:!0})],U.prototype,"handleOpenChange",1);V("select.show",{keyframes:[{opacity:0,scale:.9},{opacity:1,scale:1}],options:{duration:100,easing:"ease"}});V("select.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.9}],options:{duration:100,easing:"ease"}});var su=U;U.define("sl-select");var Ga=_`
  :host {
    --border-radius: var(--sl-border-radius-pill);
    --color: var(--sl-color-neutral-200);
    --sheen-color: var(--sl-color-neutral-300);

    display: block;
    position: relative;
  }

  .skeleton {
    display: flex;
    width: 100%;
    height: 100%;
    min-height: 1rem;
  }

  .skeleton__indicator {
    flex: 1 1 auto;
    background: var(--color);
    border-radius: var(--border-radius);
  }

  .skeleton--sheen .skeleton__indicator {
    background: linear-gradient(270deg, var(--sheen-color), var(--color), var(--color), var(--sheen-color));
    background-size: 400% 100%;
    animation: sheen 8s ease-in-out infinite;
  }

  .skeleton--pulse .skeleton__indicator {
    animation: pulse 2s ease-in-out 0.5s infinite;
  }

  /* Forced colors mode */
  @media (forced-colors: active) {
    :host {
      --color: GrayText;
    }
  }

  @keyframes sheen {
    0% {
      background-position: 200% 0;
    }
    to {
      background-position: -200% 0;
    }
  }

  @keyframes pulse {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0.4;
    }
    100% {
      opacity: 1;
    }
  }
`;var Je=class extends y{constructor(){super(...arguments);this.effect="none"}static{this.styles=[C,Ga]}render(){return g`
      <div
        part="base"
        class=${$({skeleton:!0,"skeleton--pulse":this.effect==="pulse","skeleton--sheen":this.effect==="sheen"})}
      >
        <div part="indicator" class="skeleton__indicator"></div>
      </div>
    `}};s([l()],Je.prototype,"effect",2);var au=Je;Je.define("sl-skeleton");var nu=Kt;Kt.define("sl-spinner");var Wa=_`
  :host {
    --divider-width: 4px;
    --divider-hit-area: 12px;
    --min: 0%;
    --max: 100%;

    display: grid;
  }

  .start,
  .end {
    overflow: hidden;
  }

  .divider {
    flex: 0 0 var(--divider-width);
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;
    background-color: var(--sl-color-neutral-200);
    color: var(--sl-color-neutral-900);
    z-index: 1;
  }

  .divider:focus {
    outline: none;
  }

  :host(:not([disabled])) .divider:focus-visible {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  :host([disabled]) .divider {
    cursor: not-allowed;
  }

  /* Horizontal */
  :host(:not([vertical], [disabled])) .divider {
    cursor: col-resize;
  }

  :host(:not([vertical])) .divider::after {
    display: flex;
    content: '';
    position: absolute;
    height: 100%;
    left: calc(var(--divider-hit-area) / -2 + var(--divider-width) / 2);
    width: var(--divider-hit-area);
  }

  /* Vertical */
  :host([vertical]) {
    flex-direction: column;
  }

  :host([vertical]:not([disabled])) .divider {
    cursor: row-resize;
  }

  :host([vertical]) .divider::after {
    content: '';
    position: absolute;
    width: 100%;
    top: calc(var(--divider-hit-area) / -2 + var(--divider-width) / 2);
    height: var(--divider-hit-area);
  }

  @media (forced-colors: active) {
    .divider {
      outline: solid 1px transparent;
    }
  }
`;var ja=()=>null,_t=class extends y{constructor(){super(...arguments);this.isCollapsed=!1;this.localize=new L(this);this.positionBeforeCollapsing=0;this.position=50;this.vertical=!1;this.disabled=!1;this.snapValue="";this.snapFunction=ja;this.snapThreshold=12}static{this.styles=[C,Wa]}toSnapFunction(t){let r=t.split(" ");return({pos:i,size:a,snapThreshold:n,isRtl:c,vertical:d})=>{let u=i,p=Number.POSITIVE_INFINITY;return r.forEach(h=>{let f;if(h.startsWith("repeat(")){let b=t.substring(7,t.length-1),x=b.endsWith("%"),M=Number.parseFloat(b),H=x?a*(M/100):M;f=Math.round((c&&!d?a-i:i)/H)*H}else h.endsWith("%")?f=a*(Number.parseFloat(h)/100):f=Number.parseFloat(h);c&&!d&&(f=a-f);let m=Math.abs(i-f);m<=n&&m<p&&(u=f,p=m)}),u}}set snap(t){this.snapValue=t??"",t?this.snapFunction=typeof t=="string"?this.toSnapFunction(t):t:this.snapFunction=ja}get snap(){return this.snapValue}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(t=>this.handleResize(t)),this.updateComplete.then(()=>this.resizeObserver.observe(this)),this.detectSize(),this.cachedPositionInPixels=this.percentageToPixels(this.position)}disconnectedCallback(){super.disconnectedCallback(),this.resizeObserver?.unobserve(this)}detectSize(){let{width:t,height:r}=this.getBoundingClientRect();this.size=this.vertical?r:t}percentageToPixels(t){return this.size*(t/100)}pixelsToPercentage(t){return t/this.size*100}handleDrag(t){let r=this.localize.dir()==="rtl";this.disabled||(t.cancelable&&t.preventDefault(),Ae(this,{onMove:(i,a)=>{let n=this.vertical?a:i;this.primary==="end"&&(n=this.size-n),n=this.snapFunction({pos:n,size:this.size,snapThreshold:this.snapThreshold,isRtl:r,vertical:this.vertical})??n,this.position=tt(this.pixelsToPercentage(n),0,100)},initialEvent:t}))}handleKeyDown(t){if(!this.disabled&&["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End","Enter"].includes(t.key)){let r=this.position,i=(t.shiftKey?10:1)*(this.primary==="end"?-1:1);if(t.preventDefault(),(t.key==="ArrowLeft"&&!this.vertical||t.key==="ArrowUp"&&this.vertical)&&(r-=i),(t.key==="ArrowRight"&&!this.vertical||t.key==="ArrowDown"&&this.vertical)&&(r+=i),t.key==="Home"&&(r=this.primary==="end"?100:0),t.key==="End"&&(r=this.primary==="end"?0:100),t.key==="Enter")if(this.isCollapsed)r=this.positionBeforeCollapsing,this.isCollapsed=!1;else{let a=this.position;r=0,requestAnimationFrame(()=>{this.isCollapsed=!0,this.positionBeforeCollapsing=a})}this.position=tt(r,0,100)}}handleResize(t){let{width:r,height:i}=t[0].contentRect;this.size=this.vertical?i:r,(isNaN(this.cachedPositionInPixels)||this.position===1/0)&&(this.cachedPositionInPixels=Number(this.getAttribute("position-in-pixels")),this.positionInPixels=Number(this.getAttribute("position-in-pixels")),this.position=this.pixelsToPercentage(this.positionInPixels)),this.primary&&(this.position=this.pixelsToPercentage(this.cachedPositionInPixels))}handlePositionChange(){this.cachedPositionInPixels=this.percentageToPixels(this.position),this.isCollapsed=!1,this.positionBeforeCollapsing=0,this.positionInPixels=this.percentageToPixels(this.position),this.emit("sl-reposition")}handlePositionInPixelsChange(){this.position=this.pixelsToPercentage(this.positionInPixels)}handleVerticalChange(){this.detectSize()}render(){let t=this.vertical?"gridTemplateRows":"gridTemplateColumns",r=this.vertical?"gridTemplateColumns":"gridTemplateRows",i=this.localize.dir()==="rtl",a=`
      clamp(
        0%,
        clamp(
          var(--min),
          ${this.position}% - var(--divider-width) / 2,
          var(--max)
        ),
        calc(100% - var(--divider-width))
      )
    `,n="auto";return this.primary==="end"?i&&!this.vertical?this.style[t]=`${a} var(--divider-width) ${n}`:this.style[t]=`${n} var(--divider-width) ${a}`:i&&!this.vertical?this.style[t]=`${n} var(--divider-width) ${a}`:this.style[t]=`${a} var(--divider-width) ${n}`,this.style[r]="",g`
      <slot name="start" part="panel start" class="start"></slot>

      <div
        part="divider"
        class="divider"
        tabindex=${z(this.disabled?void 0:"0")}
        role="separator"
        aria-valuenow=${this.position}
        aria-valuemin="0"
        aria-valuemax="100"
        aria-label=${this.localize.term("resize")}
        @keydown=${this.handleKeyDown}
        @mousedown=${this.handleDrag}
        @touchstart=${this.handleDrag}
      >
        <slot name="divider"></slot>
      </div>

      <slot name="end" part="panel end" class="end"></slot>
    `}};s([k(".divider")],_t.prototype,"divider",2),s([l({type:Number,reflect:!0})],_t.prototype,"position",2),s([l({attribute:"position-in-pixels",type:Number})],_t.prototype,"positionInPixels",2),s([l({type:Boolean,reflect:!0})],_t.prototype,"vertical",2),s([l({type:Boolean,reflect:!0})],_t.prototype,"disabled",2),s([l()],_t.prototype,"primary",2),s([l({reflect:!0})],_t.prototype,"snap",1),s([l({type:Number,attribute:"snap-threshold"})],_t.prototype,"snapThreshold",2),s([v("position")],_t.prototype,"handlePositionChange",1),s([v("positionInPixels")],_t.prototype,"handlePositionInPixelsChange",1),s([v("vertical")],_t.prototype,"handleVerticalChange",1);var lu=_t;_t.define("sl-split-panel");var Ka=_`
  :host {
    display: inline-block;
  }

  :host([size='small']) {
    --height: var(--sl-toggle-size-small);
    --thumb-size: calc(var(--sl-toggle-size-small) + 4px);
    --width: calc(var(--height) * 2);

    font-size: var(--sl-input-font-size-small);
  }

  :host([size='medium']) {
    --height: var(--sl-toggle-size-medium);
    --thumb-size: calc(var(--sl-toggle-size-medium) + 4px);
    --width: calc(var(--height) * 2);

    font-size: var(--sl-input-font-size-medium);
  }

  :host([size='large']) {
    --height: var(--sl-toggle-size-large);
    --thumb-size: calc(var(--sl-toggle-size-large) + 4px);
    --width: calc(var(--height) * 2);

    font-size: var(--sl-input-font-size-large);
  }

  .switch {
    position: relative;
    display: inline-flex;
    align-items: center;
    font-family: var(--sl-input-font-family);
    font-size: inherit;
    font-weight: var(--sl-input-font-weight);
    color: var(--sl-input-label-color);
    vertical-align: middle;
    cursor: pointer;
  }

  .switch__control {
    flex: 0 0 auto;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--width);
    height: var(--height);
    background-color: var(--sl-color-neutral-400);
    border: solid var(--sl-input-border-width) var(--sl-color-neutral-400);
    border-radius: var(--height);
    transition:
      var(--sl-transition-fast) border-color,
      var(--sl-transition-fast) background-color;
  }

  .switch__control .switch__thumb {
    width: var(--thumb-size);
    height: var(--thumb-size);
    background-color: var(--sl-color-neutral-0);
    border-radius: 50%;
    border: solid var(--sl-input-border-width) var(--sl-color-neutral-400);
    translate: calc((var(--width) - var(--height)) / -2);
    transition:
      var(--sl-transition-fast) translate ease,
      var(--sl-transition-fast) background-color,
      var(--sl-transition-fast) border-color,
      var(--sl-transition-fast) box-shadow;
  }

  .switch__input {
    position: absolute;
    opacity: 0;
    padding: 0;
    margin: 0;
    pointer-events: none;
  }

  /* Hover */
  .switch:not(.switch--checked):not(.switch--disabled) .switch__control:hover {
    background-color: var(--sl-color-neutral-400);
    border-color: var(--sl-color-neutral-400);
  }

  .switch:not(.switch--checked):not(.switch--disabled) .switch__control:hover .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-neutral-400);
  }

  /* Focus */
  .switch:not(.switch--checked):not(.switch--disabled) .switch__input:focus-visible ~ .switch__control {
    background-color: var(--sl-color-neutral-400);
    border-color: var(--sl-color-neutral-400);
  }

  .switch:not(.switch--checked):not(.switch--disabled) .switch__input:focus-visible ~ .switch__control .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Checked */
  .switch--checked .switch__control {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
  }

  .switch--checked .switch__control .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
    translate: calc((var(--width) - var(--height)) / 2);
  }

  /* Checked + hover */
  .switch.switch--checked:not(.switch--disabled) .switch__control:hover {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
  }

  .switch.switch--checked:not(.switch--disabled) .switch__control:hover .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
  }

  /* Checked + focus */
  .switch.switch--checked:not(.switch--disabled) .switch__input:focus-visible ~ .switch__control {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
  }

  .switch.switch--checked:not(.switch--disabled) .switch__input:focus-visible ~ .switch__control .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Disabled */
  .switch--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .switch__label {
    display: inline-block;
    line-height: var(--height);
    margin-inline-start: 0.5em;
    user-select: none;
    -webkit-user-select: none;
  }

  :host([required]) .switch__label::after {
    content: var(--sl-input-required-content);
    color: var(--sl-input-required-content-color);
    margin-inline-start: var(--sl-input-required-content-offset);
  }

  @media (forced-colors: active) {
    .switch.switch--checked:not(.switch--disabled) .switch__control:hover .switch__thumb,
    .switch--checked .switch__control .switch__thumb {
      background-color: ButtonText;
    }
  }
`;var pt=class extends y{constructor(){super(...arguments);this.formControlController=new ut(this,{value:t=>t.checked?t.value||"on":void 0,defaultValue:t=>t.defaultChecked,setValue:(t,r)=>t.checked=r});this.hasSlotController=new K(this,"help-text");this.hasFocus=!1;this.title="";this.name="";this.size="medium";this.disabled=!1;this.checked=!1;this.defaultChecked=!1;this.form="";this.required=!1;this.helpText=""}static{this.styles=[C,Ht,Ka]}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleInput(){this.emit("sl-input")}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}handleClick(){this.checked=!this.checked,this.emit("sl-change")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleKeyDown(t){t.key==="ArrowLeft"&&(t.preventDefault(),this.checked=!1,this.emit("sl-change"),this.emit("sl-input")),t.key==="ArrowRight"&&(t.preventDefault(),this.checked=!0,this.emit("sl-change"),this.emit("sl-input"))}handleCheckedChange(){this.input.checked=this.checked,this.formControlController.updateValidity()}handleDisabledChange(){this.formControlController.setValidity(!0)}click(){this.input.click()}focus(t){this.input.focus(t)}blur(){this.input.blur()}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity()}render(){let t=this.hasSlotController.test("help-text"),r=this.helpText?!0:!!t;return g`
      <div
        class=${$({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-help-text":r})}
      >
        <label
          part="base"
          class=${$({switch:!0,"switch--checked":this.checked,"switch--disabled":this.disabled,"switch--focused":this.hasFocus,"switch--small":this.size==="small","switch--medium":this.size==="medium","switch--large":this.size==="large"})}
        >
          <input
            class="switch__input"
            type="checkbox"
            title=${this.title}
            name=${this.name}
            value=${z(this.value)}
            .checked=${Nt(this.checked)}
            .disabled=${this.disabled}
            .required=${this.required}
            role="switch"
            aria-checked=${this.checked?"true":"false"}
            aria-describedby="help-text"
            @click=${this.handleClick}
            @input=${this.handleInput}
            @invalid=${this.handleInvalid}
            @blur=${this.handleBlur}
            @focus=${this.handleFocus}
            @keydown=${this.handleKeyDown}
          />

          <span part="control" class="switch__control">
            <span part="thumb" class="switch__thumb"></span>
          </span>

          <div part="label" class="switch__label">
            <slot></slot>
          </div>
        </label>

        <div
          aria-hidden=${r?"false":"true"}
          class="form-control__help-text"
          id="help-text"
          part="form-control-help-text"
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};s([k('input[type="checkbox"]')],pt.prototype,"input",2),s([S()],pt.prototype,"hasFocus",2),s([l()],pt.prototype,"title",2),s([l()],pt.prototype,"name",2),s([l()],pt.prototype,"value",2),s([l({reflect:!0})],pt.prototype,"size",2),s([l({type:Boolean,reflect:!0})],pt.prototype,"disabled",2),s([l({type:Boolean,reflect:!0})],pt.prototype,"checked",2),s([Xt("checked")],pt.prototype,"defaultChecked",2),s([l({reflect:!0})],pt.prototype,"form",2),s([l({type:Boolean,reflect:!0})],pt.prototype,"required",2),s([l({attribute:"help-text"})],pt.prototype,"helpText",2),s([v("checked",{waitUntilFirstUpdate:!0})],pt.prototype,"handleCheckedChange",1),s([v("disabled",{waitUntilFirstUpdate:!0})],pt.prototype,"handleDisabledChange",1);var cu=pt;pt.define("sl-switch");var Xa=_`
  :host {
    display: inline-block;
  }

  .tab {
    display: inline-flex;
    align-items: center;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-semibold);
    border-radius: var(--sl-border-radius-medium);
    color: var(--sl-color-neutral-600);
    padding: var(--sl-spacing-medium) var(--sl-spacing-large);
    white-space: nowrap;
    user-select: none;
    -webkit-user-select: none;
    cursor: pointer;
    transition:
      var(--transition-speed) box-shadow,
      var(--transition-speed) color;
  }

  .tab:hover:not(.tab--disabled) {
    color: var(--sl-color-primary-600);
  }

  :host(:focus) {
    outline: transparent;
  }

  :host(:focus-visible) {
    color: var(--sl-color-primary-600);
    outline: var(--sl-focus-ring);
    outline-offset: calc(-1 * var(--sl-focus-ring-width) - var(--sl-focus-ring-offset));
  }

  .tab.tab--active:not(.tab--disabled) {
    color: var(--sl-color-primary-600);
  }

  .tab.tab--closable {
    padding-inline-end: var(--sl-spacing-small);
  }

  .tab.tab--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .tab__close-button {
    font-size: var(--sl-font-size-small);
    margin-inline-start: var(--sl-spacing-small);
  }

  .tab__close-button::part(base) {
    padding: var(--sl-spacing-3x-small);
  }

  @media (forced-colors: active) {
    .tab.tab--active:not(.tab--disabled) {
      outline: solid 1px transparent;
      outline-offset: -3px;
    }
  }
`;var du=0,Ft=class extends y{constructor(){super(...arguments);this.localize=new L(this);this.attrId=++du;this.componentId=`sl-tab-${this.attrId}`;this.panel="";this.active=!1;this.closable=!1;this.disabled=!1;this.tabIndex=0}static{this.styles=[C,Xa]}static{this.dependencies={"sl-icon-button":Q}}connectedCallback(){super.connectedCallback(),this.setAttribute("role","tab")}handleCloseClick(t){t.stopPropagation(),this.emit("sl-close")}handleActiveChange(){this.setAttribute("aria-selected",this.active?"true":"false")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false"),this.disabled&&!this.active?this.tabIndex=-1:this.tabIndex=0}render(){return this.id=this.id.length>0?this.id:this.componentId,g`
      <div
        part="base"
        class=${$({tab:!0,"tab--active":this.active,"tab--closable":this.closable,"tab--disabled":this.disabled})}
      >
        <slot></slot>
        ${this.closable?g`
              <sl-icon-button
                part="close-button"
                exportparts="base:close-button__base"
                name="x-lg"
                library="system"
                label=${this.localize.term("close")}
                class="tab__close-button"
                @click=${this.handleCloseClick}
                tabindex="-1"
              ></sl-icon-button>
            `:""}
      </div>
    `}};s([k(".tab")],Ft.prototype,"tab",2),s([l({reflect:!0})],Ft.prototype,"panel",2),s([l({type:Boolean,reflect:!0})],Ft.prototype,"active",2),s([l({type:Boolean,reflect:!0})],Ft.prototype,"closable",2),s([l({type:Boolean,reflect:!0})],Ft.prototype,"disabled",2),s([l({type:Number,reflect:!0})],Ft.prototype,"tabIndex",2),s([v("active")],Ft.prototype,"handleActiveChange",1),s([v("disabled")],Ft.prototype,"handleDisabledChange",1);var uu=Ft;Ft.define("sl-tab");var Ya=_`
  :host {
    --indicator-color: var(--sl-color-primary-600);
    --track-color: var(--sl-color-neutral-200);
    --track-width: 2px;

    display: block;
  }

  .tab-group {
    display: flex;
    border-radius: 0;
  }

  .tab-group__tabs {
    display: flex;
    position: relative;
  }

  .tab-group__indicator {
    position: absolute;
    transition:
      var(--sl-transition-fast) translate ease,
      var(--sl-transition-fast) width ease;
  }

  .tab-group--has-scroll-controls .tab-group__nav-container {
    position: relative;
    padding: 0 var(--sl-spacing-x-large);
  }

  .tab-group--has-scroll-controls .tab-group__scroll-button--start--hidden,
  .tab-group--has-scroll-controls .tab-group__scroll-button--end--hidden {
    visibility: hidden;
  }

  .tab-group__body {
    display: block;
    overflow: auto;
  }

  .tab-group__scroll-button {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    width: var(--sl-spacing-x-large);
  }

  .tab-group__scroll-button--start {
    left: 0;
  }

  .tab-group__scroll-button--end {
    right: 0;
  }

  .tab-group--rtl .tab-group__scroll-button--start {
    left: auto;
    right: 0;
  }

  .tab-group--rtl .tab-group__scroll-button--end {
    left: 0;
    right: auto;
  }

  /*
   * Top
   */

  .tab-group--top {
    flex-direction: column;
  }

  .tab-group--top .tab-group__nav-container {
    order: 1;
  }

  .tab-group--top .tab-group__nav {
    display: flex;
    overflow-x: auto;

    /* Hide scrollbar in Firefox */
    scrollbar-width: none;
  }

  /* Hide scrollbar in Chrome/Safari */
  .tab-group--top .tab-group__nav::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  .tab-group--top .tab-group__tabs {
    flex: 1 1 auto;
    position: relative;
    flex-direction: row;
    border-bottom: solid var(--track-width) var(--track-color);
  }

  .tab-group--top .tab-group__indicator {
    bottom: calc(-1 * var(--track-width));
    border-bottom: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--top .tab-group__body {
    order: 2;
  }

  .tab-group--top ::slotted(sl-tab-panel) {
    --padding: var(--sl-spacing-medium) 0;
  }

  /*
   * Bottom
   */

  .tab-group--bottom {
    flex-direction: column;
  }

  .tab-group--bottom .tab-group__nav-container {
    order: 2;
  }

  .tab-group--bottom .tab-group__nav {
    display: flex;
    overflow-x: auto;

    /* Hide scrollbar in Firefox */
    scrollbar-width: none;
  }

  /* Hide scrollbar in Chrome/Safari */
  .tab-group--bottom .tab-group__nav::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  .tab-group--bottom .tab-group__tabs {
    flex: 1 1 auto;
    position: relative;
    flex-direction: row;
    border-top: solid var(--track-width) var(--track-color);
  }

  .tab-group--bottom .tab-group__indicator {
    top: calc(-1 * var(--track-width));
    border-top: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--bottom .tab-group__body {
    order: 1;
  }

  .tab-group--bottom ::slotted(sl-tab-panel) {
    --padding: var(--sl-spacing-medium) 0;
  }

  /*
   * Start
   */

  .tab-group--start {
    flex-direction: row;
  }

  .tab-group--start .tab-group__nav-container {
    order: 1;
  }

  .tab-group--start .tab-group__tabs {
    flex: 0 0 auto;
    flex-direction: column;
    border-inline-end: solid var(--track-width) var(--track-color);
  }

  .tab-group--start .tab-group__indicator {
    right: calc(-1 * var(--track-width));
    border-right: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--start.tab-group--rtl .tab-group__indicator {
    right: auto;
    left: calc(-1 * var(--track-width));
  }

  .tab-group--start .tab-group__body {
    flex: 1 1 auto;
    order: 2;
  }

  .tab-group--start ::slotted(sl-tab-panel) {
    --padding: 0 var(--sl-spacing-medium);
  }

  /*
   * End
   */

  .tab-group--end {
    flex-direction: row;
  }

  .tab-group--end .tab-group__nav-container {
    order: 2;
  }

  .tab-group--end .tab-group__tabs {
    flex: 0 0 auto;
    flex-direction: column;
    border-left: solid var(--track-width) var(--track-color);
  }

  .tab-group--end .tab-group__indicator {
    left: calc(-1 * var(--track-width));
    border-inline-start: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--end.tab-group--rtl .tab-group__indicator {
    right: calc(-1 * var(--track-width));
    left: auto;
  }

  .tab-group--end .tab-group__body {
    flex: 1 1 auto;
    order: 1;
  }

  .tab-group--end ::slotted(sl-tab-panel) {
    --padding: 0 var(--sl-spacing-medium);
  }
`;var ft=class extends y{constructor(){super(...arguments);this.tabs=[];this.focusableTabs=[];this.panels=[];this.localize=new L(this);this.hasScrollControls=!1;this.shouldHideScrollStartButton=!1;this.shouldHideScrollEndButton=!1;this.placement="top";this.activation="auto";this.noScrollControls=!1;this.fixedScrollControls=!1;this.scrollOffset=1}static{this.styles=[C,Ya]}static{this.dependencies={"sl-icon-button":Q,"sl-resize-observer":ge}}connectedCallback(){let t=Promise.all([customElements.whenDefined("sl-tab"),customElements.whenDefined("sl-tab-panel")]);super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>{this.repositionIndicator(),this.updateScrollControls()}),this.mutationObserver=new MutationObserver(r=>{let i=r.filter(({target:a})=>{if(a===this)return!0;if(a.closest("sl-tab-group")!==this)return!1;let n=a.tagName.toLowerCase();return n==="sl-tab"||n==="sl-tab-panel"});if(i.length!==0){if(i.some(a=>!["aria-labelledby","aria-controls"].includes(a.attributeName))&&setTimeout(()=>this.setAriaLabels()),i.some(a=>a.attributeName==="disabled"))this.syncTabsAndPanels();else if(i.some(a=>a.attributeName==="active")){let n=i.filter(c=>c.attributeName==="active"&&c.target.tagName.toLowerCase()==="sl-tab").map(c=>c.target).find(c=>c.active);n&&this.setActiveTab(n)}}}),this.updateComplete.then(()=>{this.syncTabsAndPanels(),this.mutationObserver.observe(this,{attributes:!0,attributeFilter:["active","disabled","name","panel"],childList:!0,subtree:!0}),this.resizeObserver.observe(this.nav),t.then(()=>{new IntersectionObserver((i,a)=>{i[0].intersectionRatio>0&&(this.setAriaLabels(),this.setActiveTab(this.getActiveTab()??this.tabs[0],{emitEvents:!1}),a.unobserve(i[0].target))}).observe(this.tabGroup)})})}disconnectedCallback(){super.disconnectedCallback(),this.mutationObserver?.disconnect(),this.nav&&this.resizeObserver?.unobserve(this.nav)}getAllTabs(){return this.shadowRoot.querySelector('slot[name="nav"]').assignedElements()}getAllPanels(){return[...this.body.assignedElements()].filter(t=>t.tagName.toLowerCase()==="sl-tab-panel")}getActiveTab(){return this.tabs.find(t=>t.active)}handleClick(t){let i=t.target.closest("sl-tab");i?.closest("sl-tab-group")===this&&i!==null&&this.setActiveTab(i,{scrollBehavior:"smooth"})}handleKeyDown(t){let i=t.target.closest("sl-tab");if(i?.closest("sl-tab-group")===this&&(["Enter"," "].includes(t.key)&&i!==null&&(this.setActiveTab(i,{scrollBehavior:"smooth"}),t.preventDefault()),["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(t.key))){let n=this.tabs.find(u=>u.matches(":focus")),c=this.localize.dir()==="rtl",d=null;if(n?.tagName.toLowerCase()==="sl-tab"){if(t.key==="Home")d=this.focusableTabs[0];else if(t.key==="End")d=this.focusableTabs[this.focusableTabs.length-1];else if(["top","bottom"].includes(this.placement)&&t.key===(c?"ArrowRight":"ArrowLeft")||["start","end"].includes(this.placement)&&t.key==="ArrowUp"){let u=this.tabs.findIndex(p=>p===n);d=this.findNextFocusableTab(u,"backward")}else if(["top","bottom"].includes(this.placement)&&t.key===(c?"ArrowLeft":"ArrowRight")||["start","end"].includes(this.placement)&&t.key==="ArrowDown"){let u=this.tabs.findIndex(p=>p===n);d=this.findNextFocusableTab(u,"forward")}if(!d)return;d.tabIndex=0,d.focus({preventScroll:!0}),this.activation==="auto"?this.setActiveTab(d,{scrollBehavior:"smooth"}):this.tabs.forEach(u=>{u.tabIndex=u===d?0:-1}),["top","bottom"].includes(this.placement)&&Dr(d,this.nav,"horizontal"),t.preventDefault()}}}handleScrollToStart(){this.nav.scroll({left:this.localize.dir()==="rtl"?this.nav.scrollLeft+this.nav.clientWidth:this.nav.scrollLeft-this.nav.clientWidth,behavior:"smooth"})}handleScrollToEnd(){this.nav.scroll({left:this.localize.dir()==="rtl"?this.nav.scrollLeft-this.nav.clientWidth:this.nav.scrollLeft+this.nav.clientWidth,behavior:"smooth"})}setActiveTab(t,r){if(r={emitEvents:!0,scrollBehavior:"auto",...r},t!==this.activeTab&&!t.disabled){let i=this.activeTab;this.activeTab=t,this.tabs.forEach(a=>{a.active=a===this.activeTab,a.tabIndex=a===this.activeTab?0:-1}),this.panels.forEach(a=>a.active=a.name===this.activeTab?.panel),this.syncIndicator(),["top","bottom"].includes(this.placement)&&Dr(this.activeTab,this.nav,"horizontal",r.scrollBehavior),r.emitEvents&&(i&&this.emit("sl-tab-hide",{detail:{name:i.panel}}),this.emit("sl-tab-show",{detail:{name:this.activeTab.panel}}))}}setAriaLabels(){this.tabs.forEach(t=>{let r=this.panels.find(i=>i.name===t.panel);r&&(t.setAttribute("aria-controls",r.getAttribute("id")),r.setAttribute("aria-labelledby",t.getAttribute("id")))})}repositionIndicator(){let t=this.getActiveTab();if(!t)return;let r=t.clientWidth,i=t.clientHeight,a=this.localize.dir()==="rtl",n=this.getAllTabs(),d=n.slice(0,n.indexOf(t)).reduce((u,p)=>({left:u.left+p.clientWidth,top:u.top+p.clientHeight}),{left:0,top:0});switch(this.placement){case"top":case"bottom":this.indicator.style.width=`${r}px`,this.indicator.style.height="auto",this.indicator.style.translate=a?`${-1*d.left}px`:`${d.left}px`;break;case"start":case"end":this.indicator.style.width="auto",this.indicator.style.height=`${i}px`,this.indicator.style.translate=`0 ${d.top}px`;break}}syncTabsAndPanels(){this.tabs=this.getAllTabs(),this.focusableTabs=this.tabs.filter(t=>!t.disabled),this.panels=this.getAllPanels(),this.syncIndicator(),this.updateComplete.then(()=>this.updateScrollControls())}findNextFocusableTab(t,r){let i=null,a=r==="forward"?1:-1,n=t+a;for(;t<this.tabs.length;){if(i=this.tabs[n]||null,i===null){r==="forward"?i=this.focusableTabs[0]:i=this.focusableTabs[this.focusableTabs.length-1];break}if(!i.disabled)break;n+=a}return i}updateScrollButtons(){this.hasScrollControls&&!this.fixedScrollControls&&(this.shouldHideScrollStartButton=this.scrollFromStart()<=this.scrollOffset,this.shouldHideScrollEndButton=this.isScrolledToEnd())}isScrolledToEnd(){return this.scrollFromStart()+this.nav.clientWidth>=this.nav.scrollWidth-this.scrollOffset}scrollFromStart(){return this.localize.dir()==="rtl"?-this.nav.scrollLeft:this.nav.scrollLeft}updateScrollControls(){this.noScrollControls?this.hasScrollControls=!1:this.hasScrollControls=["top","bottom"].includes(this.placement)&&this.nav.scrollWidth>this.nav.clientWidth+1,this.updateScrollButtons()}syncIndicator(){this.getActiveTab()?(this.indicator.style.display="block",this.repositionIndicator()):this.indicator.style.display="none"}show(t){let r=this.tabs.find(i=>i.panel===t);r&&this.setActiveTab(r,{scrollBehavior:"smooth"})}render(){let t=this.localize.dir()==="rtl";return g`
      <div
        part="base"
        class=${$({"tab-group":!0,"tab-group--top":this.placement==="top","tab-group--bottom":this.placement==="bottom","tab-group--start":this.placement==="start","tab-group--end":this.placement==="end","tab-group--rtl":this.localize.dir()==="rtl","tab-group--has-scroll-controls":this.hasScrollControls})}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
      >
        <div class="tab-group__nav-container" part="nav">
          ${this.hasScrollControls?g`
                <sl-icon-button
                  part="scroll-button scroll-button--start"
                  exportparts="base:scroll-button__base"
                  class=${$({"tab-group__scroll-button":!0,"tab-group__scroll-button--start":!0,"tab-group__scroll-button--start--hidden":this.shouldHideScrollStartButton})}
                  name=${t?"chevron-right":"chevron-left"}
                  library="system"
                  tabindex="-1"
                  aria-hidden="true"
                  label=${this.localize.term("scrollToStart")}
                  @click=${this.handleScrollToStart}
                ></sl-icon-button>
              `:""}

          <div class="tab-group__nav" @scrollend=${this.updateScrollButtons}>
            <div part="tabs" class="tab-group__tabs" role="tablist">
              <div part="active-tab-indicator" class="tab-group__indicator"></div>
              <sl-resize-observer @sl-resize=${this.syncIndicator}>
                <slot name="nav" @slotchange=${this.syncTabsAndPanels}></slot>
              </sl-resize-observer>
            </div>
          </div>

          ${this.hasScrollControls?g`
                <sl-icon-button
                  part="scroll-button scroll-button--end"
                  exportparts="base:scroll-button__base"
                  class=${$({"tab-group__scroll-button":!0,"tab-group__scroll-button--end":!0,"tab-group__scroll-button--end--hidden":this.shouldHideScrollEndButton})}
                  name=${t?"chevron-left":"chevron-right"}
                  library="system"
                  tabindex="-1"
                  aria-hidden="true"
                  label=${this.localize.term("scrollToEnd")}
                  @click=${this.handleScrollToEnd}
                ></sl-icon-button>
              `:""}
        </div>

        <slot part="body" class="tab-group__body" @slotchange=${this.syncTabsAndPanels}></slot>
      </div>
    `}};s([k(".tab-group")],ft.prototype,"tabGroup",2),s([k(".tab-group__body")],ft.prototype,"body",2),s([k(".tab-group__nav")],ft.prototype,"nav",2),s([k(".tab-group__indicator")],ft.prototype,"indicator",2),s([S()],ft.prototype,"hasScrollControls",2),s([S()],ft.prototype,"shouldHideScrollStartButton",2),s([S()],ft.prototype,"shouldHideScrollEndButton",2),s([l()],ft.prototype,"placement",2),s([l()],ft.prototype,"activation",2),s([l({attribute:"no-scroll-controls",type:Boolean})],ft.prototype,"noScrollControls",2),s([l({attribute:"fixed-scroll-controls",type:Boolean})],ft.prototype,"fixedScrollControls",2),s([de({passive:!0})],ft.prototype,"updateScrollButtons",1),s([v("noScrollControls",{waitUntilFirstUpdate:!0})],ft.prototype,"updateScrollControls",1),s([v("placement",{waitUntilFirstUpdate:!0})],ft.prototype,"syncIndicator",1);var hu=ft;ft.define("sl-tab-group");var Za=_`
  :host {
    --padding: 0;

    display: none;
  }

  :host([active]) {
    display: block;
  }

  .tab-panel {
    display: block;
    padding: var(--padding);
  }
`;var pu=0,Ee=class extends y{constructor(){super(...arguments);this.attrId=++pu;this.componentId=`sl-tab-panel-${this.attrId}`;this.name="";this.active=!1}static{this.styles=[C,Za]}connectedCallback(){super.connectedCallback(),this.id=this.id.length>0?this.id:this.componentId,this.setAttribute("role","tabpanel")}handleActiveChange(){this.setAttribute("aria-hidden",this.active?"false":"true")}render(){return g`
      <slot
        part="base"
        class=${$({"tab-panel":!0,"tab-panel--active":this.active})}
      ></slot>
    `}};s([l({reflect:!0})],Ee.prototype,"name",2),s([l({type:Boolean,reflect:!0})],Ee.prototype,"active",2),s([v("active")],Ee.prototype,"handleActiveChange",1);var fu=Ee;Ee.define("sl-tab-panel");var mu=te;te.define("sl-tag");var Qa=_`
  :host {
    display: block;
  }

  .textarea {
    display: grid;
    align-items: center;
    position: relative;
    width: 100%;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    line-height: var(--sl-line-height-normal);
    letter-spacing: var(--sl-input-letter-spacing);
    vertical-align: middle;
    transition:
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) border,
      var(--sl-transition-fast) box-shadow,
      var(--sl-transition-fast) background-color;
    cursor: text;
  }

  /* Standard textareas */
  .textarea--standard {
    background-color: var(--sl-input-background-color);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
  }

  .textarea--standard:hover:not(.textarea--disabled) {
    background-color: var(--sl-input-background-color-hover);
    border-color: var(--sl-input-border-color-hover);
  }
  .textarea--standard:hover:not(.textarea--disabled) .textarea__control {
    color: var(--sl-input-color-hover);
  }

  .textarea--standard.textarea--focused:not(.textarea--disabled) {
    background-color: var(--sl-input-background-color-focus);
    border-color: var(--sl-input-border-color-focus);
    color: var(--sl-input-color-focus);
    box-shadow: 0 0 0 var(--sl-focus-ring-width) var(--sl-input-focus-ring-color);
  }

  .textarea--standard.textarea--focused:not(.textarea--disabled) .textarea__control {
    color: var(--sl-input-color-focus);
  }

  .textarea--standard.textarea--disabled {
    background-color: var(--sl-input-background-color-disabled);
    border-color: var(--sl-input-border-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .textarea__control,
  .textarea__size-adjuster {
    grid-area: 1 / 1 / 2 / 2;
  }

  .textarea__size-adjuster {
    visibility: hidden;
    pointer-events: none;
    opacity: 0;
  }

  .textarea--standard.textarea--disabled .textarea__control {
    color: var(--sl-input-color-disabled);
  }

  .textarea--standard.textarea--disabled .textarea__control::placeholder {
    color: var(--sl-input-placeholder-color-disabled);
  }

  /* Filled textareas */
  .textarea--filled {
    border: none;
    background-color: var(--sl-input-filled-background-color);
    color: var(--sl-input-color);
  }

  .textarea--filled:hover:not(.textarea--disabled) {
    background-color: var(--sl-input-filled-background-color-hover);
  }

  .textarea--filled.textarea--focused:not(.textarea--disabled) {
    background-color: var(--sl-input-filled-background-color-focus);
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .textarea--filled.textarea--disabled {
    background-color: var(--sl-input-filled-background-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .textarea__control {
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    line-height: 1.4;
    color: var(--sl-input-color);
    border: none;
    background: none;
    box-shadow: none;
    cursor: inherit;
    -webkit-appearance: none;
  }

  .textarea__control::-webkit-search-decoration,
  .textarea__control::-webkit-search-cancel-button,
  .textarea__control::-webkit-search-results-button,
  .textarea__control::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }

  .textarea__control::placeholder {
    color: var(--sl-input-placeholder-color);
    user-select: none;
    -webkit-user-select: none;
  }

  .textarea__control:focus {
    outline: none;
  }

  /*
   * Size modifiers
   */

  .textarea--small {
    border-radius: var(--sl-input-border-radius-small);
    font-size: var(--sl-input-font-size-small);
  }

  .textarea--small .textarea__control {
    padding: 0.5em var(--sl-input-spacing-small);
  }

  .textarea--medium {
    border-radius: var(--sl-input-border-radius-medium);
    font-size: var(--sl-input-font-size-medium);
  }

  .textarea--medium .textarea__control {
    padding: 0.5em var(--sl-input-spacing-medium);
  }

  .textarea--large {
    border-radius: var(--sl-input-border-radius-large);
    font-size: var(--sl-input-font-size-large);
  }

  .textarea--large .textarea__control {
    padding: 0.5em var(--sl-input-spacing-large);
  }

  /*
   * Resize types
   */

  .textarea--resize-none .textarea__control {
    resize: none;
  }

  .textarea--resize-vertical .textarea__control {
    resize: vertical;
  }

  .textarea--resize-auto .textarea__control {
    height: auto;
    resize: none;
    overflow-y: hidden;
  }
`;var q=class extends y{constructor(){super(...arguments);this.formControlController=new ut(this,{assumeInteractionOn:["sl-blur","sl-input"]});this.hasSlotController=new K(this,"help-text","label");this.hasFocus=!1;this.title="";this.name="";this.value="";this.size="medium";this.filled=!1;this.label="";this.helpText="";this.placeholder="";this.rows=4;this.resize="vertical";this.disabled=!1;this.readonly=!1;this.form="";this.required=!1;this.spellcheck=!0;this.defaultValue=""}static{this.styles=[C,Ht,Qa]}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>this.setTextareaHeight()),this.updateComplete.then(()=>{this.setTextareaHeight(),this.resizeObserver.observe(this.input)})}firstUpdated(){this.formControlController.updateValidity()}disconnectedCallback(){super.disconnectedCallback(),this.input&&this.resizeObserver?.unobserve(this.input)}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleChange(){this.value=this.input.value,this.setTextareaHeight(),this.emit("sl-change")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleInput(){this.value=this.input.value,this.emit("sl-input")}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}setTextareaHeight(){this.resize==="auto"?(this.sizeAdjuster.style.height=`${this.input.clientHeight}px`,this.input.style.height="auto",this.input.style.height=`${this.input.scrollHeight}px`):this.input.style.height=""}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleRowsChange(){this.setTextareaHeight()}async handleValueChange(){await this.updateComplete,this.formControlController.updateValidity(),this.setTextareaHeight()}focus(t){this.input.focus(t)}blur(){this.input.blur()}select(){this.input.select()}scrollPosition(t){if(t){typeof t.top=="number"&&(this.input.scrollTop=t.top),typeof t.left=="number"&&(this.input.scrollLeft=t.left);return}return{top:this.input.scrollTop,left:this.input.scrollTop}}setSelectionRange(t,r,i="none"){this.input.setSelectionRange(t,r,i)}setRangeText(t,r,i,a="preserve"){let n=r??this.input.selectionStart,c=i??this.input.selectionEnd;this.input.setRangeText(t,n,c,a),this.value!==this.input.value&&(this.value=this.input.value,this.setTextareaHeight())}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity()}render(){let t=this.hasSlotController.test("label"),r=this.hasSlotController.test("help-text"),i=this.label?!0:!!t,a=this.helpText?!0:!!r;return g`
      <div
        part="form-control"
        class=${$({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":i,"form-control--has-help-text":a})}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${i?"false":"true"}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${$({textarea:!0,"textarea--small":this.size==="small","textarea--medium":this.size==="medium","textarea--large":this.size==="large","textarea--standard":!this.filled,"textarea--filled":this.filled,"textarea--disabled":this.disabled,"textarea--focused":this.hasFocus,"textarea--empty":!this.value,"textarea--resize-none":this.resize==="none","textarea--resize-vertical":this.resize==="vertical","textarea--resize-auto":this.resize==="auto"})}
          >
            <textarea
              part="textarea"
              id="input"
              class="textarea__control"
              title=${this.title}
              name=${z(this.name)}
              .value=${Nt(this.value)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              ?required=${this.required}
              placeholder=${z(this.placeholder)}
              rows=${z(this.rows)}
              minlength=${z(this.minlength)}
              maxlength=${z(this.maxlength)}
              autocapitalize=${z(this.autocapitalize)}
              autocorrect=${z(this.autocorrect)}
              ?autofocus=${this.autofocus}
              spellcheck=${z(this.spellcheck)}
              enterkeyhint=${z(this.enterkeyhint)}
              inputmode=${z(this.inputmode)}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @focus=${this.handleFocus}
              @blur=${this.handleBlur}
            ></textarea>
            <!-- This "adjuster" exists to prevent layout shifting. https://github.com/shoelace-style/shoelace/issues/2180 -->
            <div part="textarea-adjuster" class="textarea__size-adjuster" ?hidden=${this.resize!=="auto"}></div>
          </div>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${a?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};s([k(".textarea__control")],q.prototype,"input",2),s([k(".textarea__size-adjuster")],q.prototype,"sizeAdjuster",2),s([S()],q.prototype,"hasFocus",2),s([l()],q.prototype,"title",2),s([l()],q.prototype,"name",2),s([l()],q.prototype,"value",2),s([l({reflect:!0})],q.prototype,"size",2),s([l({type:Boolean,reflect:!0})],q.prototype,"filled",2),s([l()],q.prototype,"label",2),s([l({attribute:"help-text"})],q.prototype,"helpText",2),s([l()],q.prototype,"placeholder",2),s([l({type:Number})],q.prototype,"rows",2),s([l()],q.prototype,"resize",2),s([l({type:Boolean,reflect:!0})],q.prototype,"disabled",2),s([l({type:Boolean,reflect:!0})],q.prototype,"readonly",2),s([l({reflect:!0})],q.prototype,"form",2),s([l({type:Boolean,reflect:!0})],q.prototype,"required",2),s([l({type:Number})],q.prototype,"minlength",2),s([l({type:Number})],q.prototype,"maxlength",2),s([l()],q.prototype,"autocapitalize",2),s([l()],q.prototype,"autocorrect",2),s([l()],q.prototype,"autocomplete",2),s([l({type:Boolean})],q.prototype,"autofocus",2),s([l()],q.prototype,"enterkeyhint",2),s([l({type:Boolean,converter:{fromAttribute:t=>!(!t||t==="false"),toAttribute:t=>t?"true":"false"}})],q.prototype,"spellcheck",2),s([l()],q.prototype,"inputmode",2),s([Xt()],q.prototype,"defaultValue",2),s([v("disabled",{waitUntilFirstUpdate:!0})],q.prototype,"handleDisabledChange",1),s([v("rows",{waitUntilFirstUpdate:!0})],q.prototype,"handleRowsChange",1),s([v("value",{waitUntilFirstUpdate:!0})],q.prototype,"handleValueChange",1);var gu=q;q.define("sl-textarea");var bu=at;at.define("sl-tooltip");function ci(o,e,t){return o?e(o):t?.(o)}var Ja=_`
  :host {
    display: block;
    outline: 0;
    z-index: 0;
  }

  :host(:focus) {
    outline: none;
  }

  slot:not([name])::slotted(sl-icon) {
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .tree-item {
    position: relative;
    display: flex;
    align-items: stretch;
    flex-direction: column;
    color: var(--sl-color-neutral-700);
    cursor: pointer;
    user-select: none;
    -webkit-user-select: none;
  }

  .tree-item__checkbox {
    pointer-events: none;
  }

  .tree-item__expand-button,
  .tree-item__checkbox,
  .tree-item__label {
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    line-height: var(--sl-line-height-dense);
    letter-spacing: var(--sl-letter-spacing-normal);
  }

  .tree-item__checkbox::part(base) {
    display: flex;
    align-items: center;
  }

  .tree-item__indentation {
    display: block;
    width: 1em;
    flex-shrink: 0;
  }

  .tree-item__expand-button {
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: content-box;
    color: var(--sl-color-neutral-500);
    padding: var(--sl-spacing-x-small);
    width: 1rem;
    height: 1rem;
    flex-shrink: 0;
    cursor: pointer;
  }

  .tree-item__expand-button {
    transition: var(--sl-transition-medium) rotate ease;
  }

  .tree-item--expanded .tree-item__expand-button {
    rotate: 90deg;
  }

  .tree-item--expanded.tree-item--rtl .tree-item__expand-button {
    rotate: -90deg;
  }

  .tree-item--expanded slot[name='expand-icon'],
  .tree-item:not(.tree-item--expanded) slot[name='collapse-icon'] {
    display: none;
  }

  .tree-item:not(.tree-item--has-expand-button) .tree-item__expand-icon-slot {
    display: none;
  }

  .tree-item__expand-button--visible {
    cursor: pointer;
  }

  .tree-item__item {
    display: flex;
    align-items: center;
    border-inline-start: solid 3px transparent;
  }

  .tree-item--disabled .tree-item__item {
    opacity: 0.5;
    outline: none;
    cursor: not-allowed;
  }

  :host(:focus-visible) .tree-item__item {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
    z-index: 2;
  }

  :host(:not([aria-disabled='true'])) .tree-item--selected .tree-item__item {
    background-color: var(--sl-color-neutral-100);
    border-inline-start-color: var(--sl-color-primary-600);
  }

  :host(:not([aria-disabled='true'])) .tree-item__expand-button {
    color: var(--sl-color-neutral-600);
  }

  .tree-item__label {
    display: flex;
    align-items: center;
    transition: var(--sl-transition-fast) color;
  }

  .tree-item__children {
    display: block;
    font-size: calc(1em + var(--indent-size, var(--sl-spacing-medium)));
  }

  /* Indentation lines */
  .tree-item__children {
    position: relative;
  }

  .tree-item__children::before {
    content: '';
    position: absolute;
    top: var(--indent-guide-offset);
    bottom: var(--indent-guide-offset);
    left: calc(1em - (var(--indent-guide-width) / 2) - 1px);
    border-inline-end: var(--indent-guide-width) var(--indent-guide-style) var(--indent-guide-color);
    z-index: 1;
  }

  .tree-item--rtl .tree-item__children::before {
    left: auto;
    right: 1em;
  }

  @media (forced-colors: active) {
    :host(:not([aria-disabled='true'])) .tree-item--selected .tree-item__item {
      outline: dashed 1px SelectedItem;
    }
  }
`;var it=class it extends y{constructor(){super(...arguments);this.localize=new L(this);this.indeterminate=!1;this.isLeaf=!1;this.loading=!1;this.selectable=!1;this.expanded=!1;this.selected=!1;this.disabled=!1;this.lazy=!1}static{this.styles=[C,Ja]}static{this.dependencies={"sl-checkbox":ot,"sl-icon":D,"sl-spinner":Kt}}static isTreeItem(t){return t instanceof Element&&t.getAttribute("role")==="treeitem"}connectedCallback(){super.connectedCallback(),this.setAttribute("role","treeitem"),this.setAttribute("tabindex","-1"),this.isNestedItem()&&(this.slot="children")}firstUpdated(){this.childrenContainer.hidden=!this.expanded,this.childrenContainer.style.height=this.expanded?"auto":"0",this.isLeaf=!this.lazy&&this.getChildrenItems().length===0,this.handleExpandedChange()}async animateCollapse(){this.emit("sl-collapse"),await Y(this.childrenContainer);let{keyframes:t,options:r}=j(this,"tree-item.collapse",{dir:this.localize.dir()});await X(this.childrenContainer,tr(t,this.childrenContainer.scrollHeight),r),this.childrenContainer.hidden=!0,this.emit("sl-after-collapse")}isNestedItem(){let t=this.parentElement;return!!t&&it.isTreeItem(t)}handleChildrenSlotChange(){this.loading=!1,this.isLeaf=!this.lazy&&this.getChildrenItems().length===0}willUpdate(t){t.has("selected")&&!t.has("indeterminate")&&(this.indeterminate=!1)}async animateExpand(){this.emit("sl-expand"),await Y(this.childrenContainer),this.childrenContainer.hidden=!1;let{keyframes:t,options:r}=j(this,"tree-item.expand",{dir:this.localize.dir()});await X(this.childrenContainer,tr(t,this.childrenContainer.scrollHeight),r),this.childrenContainer.style.height="auto",this.emit("sl-after-expand")}handleLoadingChange(){this.setAttribute("aria-busy",this.loading?"true":"false"),this.loading||this.animateExpand()}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleSelectedChange(){this.setAttribute("aria-selected",this.selected?"true":"false")}handleExpandedChange(){this.isLeaf?this.removeAttribute("aria-expanded"):this.setAttribute("aria-expanded",this.expanded?"true":"false")}handleExpandAnimation(){this.expanded?this.lazy?(this.loading=!0,this.emit("sl-lazy-load")):this.animateExpand():this.animateCollapse()}handleLazyChange(){this.emit("sl-lazy-change")}getChildrenItems({includeDisabled:t=!0}={}){return this.childrenSlot?[...this.childrenSlot.assignedElements({flatten:!0})].filter(r=>it.isTreeItem(r)&&(t||!r.disabled)):[]}render(){let t=this.localize.dir()==="rtl",r=!this.loading&&(!this.isLeaf||this.lazy);return g`
      <div
        part="base"
        class="${$({"tree-item":!0,"tree-item--expanded":this.expanded,"tree-item--selected":this.selected,"tree-item--disabled":this.disabled,"tree-item--leaf":this.isLeaf,"tree-item--has-expand-button":r,"tree-item--rtl":this.localize.dir()==="rtl"})}"
      >
        <div
          class="tree-item__item"
          part="
            item
            ${this.disabled?"item--disabled":""}
            ${this.expanded?"item--expanded":""}
            ${this.indeterminate?"item--indeterminate":""}
            ${this.selected?"item--selected":""}
          "
        >
          <div class="tree-item__indentation" part="indentation"></div>

          <div
            part="expand-button"
            class=${$({"tree-item__expand-button":!0,"tree-item__expand-button--visible":r})}
            aria-hidden="true"
          >
            ${ci(this.loading,()=>g` <sl-spinner part="spinner" exportparts="base:spinner__base"></sl-spinner> `)}
            <slot class="tree-item__expand-icon-slot" name="expand-icon">
              <sl-icon library="system" name=${t?"chevron-left":"chevron-right"}></sl-icon>
            </slot>
            <slot class="tree-item__expand-icon-slot" name="collapse-icon">
              <sl-icon library="system" name=${t?"chevron-left":"chevron-right"}></sl-icon>
            </slot>
          </div>

          ${ci(this.selectable,()=>g`
              <sl-checkbox
                part="checkbox"
                exportparts="
                    base:checkbox__base,
                    control:checkbox__control,
                    control--checked:checkbox__control--checked,
                    control--indeterminate:checkbox__control--indeterminate,
                    checked-icon:checkbox__checked-icon,
                    indeterminate-icon:checkbox__indeterminate-icon,
                    label:checkbox__label
                  "
                class="tree-item__checkbox"
                ?disabled="${this.disabled}"
                ?checked="${Nt(this.selected)}"
                ?indeterminate="${this.indeterminate}"
                tabindex="-1"
              ></sl-checkbox>
            `)}

          <slot class="tree-item__label" part="label"></slot>
        </div>

        <div class="tree-item__children" part="children" role="group">
          <slot name="children" @slotchange="${this.handleChildrenSlotChange}"></slot>
        </div>
      </div>
    `}};s([S()],it.prototype,"indeterminate",2),s([S()],it.prototype,"isLeaf",2),s([S()],it.prototype,"loading",2),s([S()],it.prototype,"selectable",2),s([l({type:Boolean,reflect:!0})],it.prototype,"expanded",2),s([l({type:Boolean,reflect:!0})],it.prototype,"selected",2),s([l({type:Boolean,reflect:!0})],it.prototype,"disabled",2),s([l({type:Boolean,reflect:!0})],it.prototype,"lazy",2),s([k("slot:not([name])")],it.prototype,"defaultSlot",2),s([k("slot[name=children]")],it.prototype,"childrenSlot",2),s([k(".tree-item__item")],it.prototype,"itemElement",2),s([k(".tree-item__children")],it.prototype,"childrenContainer",2),s([k(".tree-item__expand-button slot")],it.prototype,"expandButtonSlot",2),s([v("loading",{waitUntilFirstUpdate:!0})],it.prototype,"handleLoadingChange",1),s([v("disabled")],it.prototype,"handleDisabledChange",1),s([v("selected")],it.prototype,"handleSelectedChange",1),s([v("expanded",{waitUntilFirstUpdate:!0})],it.prototype,"handleExpandedChange",1),s([v("expanded",{waitUntilFirstUpdate:!0})],it.prototype,"handleExpandAnimation",1),s([v("lazy",{waitUntilFirstUpdate:!0})],it.prototype,"handleLazyChange",1);var ne=it;V("tree-item.expand",{keyframes:[{height:"0",opacity:"0",overflow:"hidden"},{height:"auto",opacity:"1",overflow:"hidden"}],options:{duration:250,easing:"cubic-bezier(0.4, 0.0, 0.2, 1)"}});V("tree-item.collapse",{keyframes:[{height:"auto",opacity:"1",overflow:"hidden"},{height:"0",opacity:"0",overflow:"hidden"}],options:{duration:200,easing:"cubic-bezier(0.4, 0.0, 0.2, 1)"}});var tn=_`
  :host {
    /*
     * These are actually used by tree item, but we define them here so they can more easily be set and all tree items
     * stay consistent.
     */
    --indent-guide-color: var(--sl-color-neutral-200);
    --indent-guide-offset: 0;
    --indent-guide-style: solid;
    --indent-guide-width: 0;
    --indent-size: var(--sl-spacing-large);

    display: block;

    /*
     * Tree item indentation uses the "em" unit to increment its width on each level, so setting the font size to zero
     * here removes the indentation for all the nodes on the first level.
     */
    font-size: 0;
  }
`;function en(o,e=!1){function t(a){let n=a.getChildrenItems({includeDisabled:!1});if(n.length){let c=n.every(u=>u.selected),d=n.every(u=>!u.selected&&!u.indeterminate);a.selected=c,a.indeterminate=!c&&!d}}function r(a){let n=a.parentElement;ne.isTreeItem(n)&&(t(n),r(n))}function i(a){for(let n of a.getChildrenItems())n.selected=e?a.selected||n.selected:!n.disabled&&a.selected,i(n);e&&t(a)}i(o),r(o)}var le=class extends y{constructor(){super();this.selection="single";this.clickTarget=null;this.localize=new L(this);this.initTreeItem=t=>{t.selectable=this.selection==="multiple",["expand","collapse"].filter(r=>!!this.querySelector(`[slot="${r}-icon"]`)).forEach(r=>{let i=t.querySelector(`[slot="${r}-icon"]`),a=this.getExpandButtonIcon(r);a&&(i===null?t.append(a):i.hasAttribute("data-default")&&i.replaceWith(a))})};this.handleTreeChanged=t=>{for(let r of t){let i=[...r.addedNodes].filter(ne.isTreeItem),a=[...r.removedNodes].filter(ne.isTreeItem);i.forEach(this.initTreeItem),this.lastFocusedItem&&a.includes(this.lastFocusedItem)&&(this.lastFocusedItem=null)}};this.handleFocusOut=t=>{let r=t.relatedTarget;(!r||!this.contains(r))&&(this.tabIndex=0)};this.handleFocusIn=t=>{let r=t.target;t.target===this&&this.focusItem(this.lastFocusedItem||this.getAllTreeItems()[0]),ne.isTreeItem(r)&&!r.disabled&&(this.lastFocusedItem&&(this.lastFocusedItem.tabIndex=-1),this.lastFocusedItem=r,this.tabIndex=-1,r.tabIndex=0)};this.addEventListener("focusin",this.handleFocusIn),this.addEventListener("focusout",this.handleFocusOut),this.addEventListener("sl-lazy-change",this.handleSlotChange)}static{this.styles=[C,tn]}async connectedCallback(){super.connectedCallback(),this.setAttribute("role","tree"),this.setAttribute("tabindex","0"),await this.updateComplete,this.mutationObserver=new MutationObserver(this.handleTreeChanged),this.mutationObserver.observe(this,{childList:!0,subtree:!0})}disconnectedCallback(){super.disconnectedCallback(),this.mutationObserver?.disconnect()}getExpandButtonIcon(t){let i=(t==="expand"?this.expandedIconSlot:this.collapsedIconSlot).assignedElements({flatten:!0})[0];if(i){let a=i.cloneNode(!0);return[a,...a.querySelectorAll("[id]")].forEach(n=>n.removeAttribute("id")),a.setAttribute("data-default",""),a.slot=`${t}-icon`,a}return null}selectItem(t){let r=[...this.selectedItems];if(this.selection==="multiple")t.selected=!t.selected,t.lazy&&(t.expanded=!0),en(t);else if(this.selection==="single"||t.isLeaf){let a=this.getAllTreeItems();for(let n of a)n.selected=n===t}else this.selection==="leaf"&&(t.expanded=!t.expanded);let i=this.selectedItems;(r.length!==i.length||i.some(a=>!r.includes(a)))&&Promise.all(i.map(a=>a.updateComplete)).then(()=>{this.emit("sl-selection-change",{detail:{selection:i}})})}getAllTreeItems(){return[...this.querySelectorAll("sl-tree-item")]}focusItem(t){t?.focus()}handleKeyDown(t){if(!["ArrowDown","ArrowUp","ArrowRight","ArrowLeft","Home","End","Enter"," "].includes(t.key)||t.composedPath().some(n=>["input","textarea"].includes(n?.tagName?.toLowerCase())))return;let r=this.getFocusableItems(),i=this.localize.dir()==="ltr",a=this.localize.dir()==="rtl";if(r.length>0){t.preventDefault();let n=r.findIndex(p=>p.matches(":focus")),c=r[n],d=p=>{let h=r[tt(p,0,r.length-1)];this.focusItem(h)},u=p=>{c.expanded=p};t.key==="ArrowDown"?d(n+1):t.key==="ArrowUp"?d(n-1):i&&t.key==="ArrowRight"||a&&t.key==="ArrowLeft"?!c||c.disabled||c.expanded||c.isLeaf&&!c.lazy?d(n+1):u(!0):i&&t.key==="ArrowLeft"||a&&t.key==="ArrowRight"?!c||c.disabled||c.isLeaf||!c.expanded?d(n-1):u(!1):t.key==="Home"?d(0):t.key==="End"?d(r.length-1):(t.key==="Enter"||t.key===" ")&&(c.disabled||this.selectItem(c))}}handleClick(t){let r=t.target,i=r.closest("sl-tree-item"),a=t.composedPath().some(n=>n?.classList?.contains("tree-item__expand-button"));!i||i.disabled||r!==this.clickTarget||(a?i.expanded=!i.expanded:this.selectItem(i))}handleMouseDown(t){this.clickTarget=t.target}handleSlotChange(){this.getAllTreeItems().forEach(this.initTreeItem)}async handleSelectionChange(){let t=this.selection==="multiple",r=this.getAllTreeItems();this.setAttribute("aria-multiselectable",t?"true":"false");for(let i of r)i.selectable=t;t&&(await this.updateComplete,[...this.querySelectorAll(":scope > sl-tree-item")].forEach(i=>en(i,!0)))}get selectedItems(){let t=this.getAllTreeItems(),r=i=>i.selected;return t.filter(r)}getFocusableItems(){let t=this.getAllTreeItems(),r=new Set;return t.filter(i=>{if(i.disabled)return!1;let a=i.parentElement?.closest("[role=treeitem]");return a&&(!a.expanded||a.loading||r.has(a))&&r.add(i),!r.has(i)})}render(){return g`
      <div
        part="base"
        class="tree"
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        @mousedown=${this.handleMouseDown}
      >
        <slot @slotchange=${this.handleSlotChange}></slot>
        <span hidden aria-hidden="true"><slot name="expand-icon"></slot></span>
        <span hidden aria-hidden="true"><slot name="collapse-icon"></slot></span>
      </div>
    `}};s([k("slot:not([name])")],le.prototype,"defaultSlot",2),s([k("slot[name=expand-icon]")],le.prototype,"expandedIconSlot",2),s([k("slot[name=collapse-icon]")],le.prototype,"collapsedIconSlot",2),s([l()],le.prototype,"selection",2),s([v("selection")],le.prototype,"handleSelectionChange",1);var vu=le;le.define("sl-tree");var yu=ne;ne.define("sl-tree-item");var xu=Re;Re.define("sl-visually-hidden");function oA(o){let e=new FormData(o),t={};return e.forEach((r,i)=>{if(Reflect.has(t,i)){let a=t[i];Array.isArray(a)?a.push(r):t[i]=[t[i],r]}else t[i]=r}),t}function iA(o){let t=[...o.getRootNode().querySelectorAll("*")],r=[...o.elements],i=Be.get(o),a=i?Array.from(i):[];return[...r,...a].sort((n,c)=>t.indexOf(n)<t.indexOf(c)?-1:t.indexOf(n)>t.indexOf(c)?1:0)}export{Tn as SlAlert,$n as SlAnimatedImage,xc as SlAnimation,wc as SlAvatar,_c as SlBadge,kc as SlBreadcrumb,Cc as SlBreadcrumbItem,Ec as SlButton,Tc as SlButtonGroup,$c as SlCard,Mc as SlCarousel,zc as SlCarouselItem,Ac as SlCheckbox,_d as SlColorPicker,kd as SlCopyButton,Cd as SlDetails,$d as SlDialog,Sd as SlDivider,Md as SlDrawer,zd as SlDropdown,Ad as SlFormatBytes,Ld as SlFormatDate,Hd as SlFormatNumber,Rd as SlIcon,Od as SlIconButton,Id as SlImageComparer,Dd as SlInclude,Fd as SlInput,Pd as SlMenu,Ud as SlMenuItem,qd as SlMenuLabel,Gd as SlMutationObserver,Wd as SlOption,jd as SlPopup,Kd as SlProgressBar,Xd as SlProgressRing,Yd as SlQrCode,Zd as SlRadio,Qd as SlRadioButton,Jd as SlRadioGroup,tu as SlRange,eu as SlRating,ou as SlRelativeTime,iu as SlResizeObserver,su as SlSelect,au as SlSkeleton,nu as SlSpinner,lu as SlSplitPanel,cu as SlSwitch,uu as SlTab,hu as SlTabGroup,fu as SlTabPanel,mu as SlTag,gu as SlTextarea,bu as SlTooltip,vu as SlTree,yu as SlTreeItem,xu as SlVisuallyHidden,vc as getAnimationNames,Bi as getBasePath,yc as getEasingNames,iA as getFormControls,Cn as registerIconLibrary,oA as serialize,Ni as setBasePath,Ki as unregisterIconLibrary};
/*! Bundled license information:

lit-html/lit-html.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directive.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/class-map.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/css-tag.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/reactive-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-element/lit-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/is-server.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/custom-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/property.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/state.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/event-options.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/base.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-all.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-async.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-assigned-elements.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-assigned-nodes.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/static.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/if-defined.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directive-helpers.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/map.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/range.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/live.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/style-map.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/async-directive.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/ref.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/unsafe-html.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/when.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/
//# sourceMappingURL=shoelace.esm.js.map
