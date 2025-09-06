(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function t(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerPolicy&&(o.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?o.credentials="include":a.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(a){if(a.ep)return;a.ep=!0;const o=t(a);fetch(a.href,o)}})();let ce,se=Symbol,[te,br,ke,Re,$e,_r,Hr,Ne,qe,jr,Ur,Yr]=Array.from(Array(12),se),ye=se.toPrimitive,Kr=Object.assign,Pr=globalThis,Se=()=>{throw Error("dl")},Le=new Map([[Ur,/\[\s*(?:(?<ns>\*|[-\w\P{ASCII}]*)\|)?(?<nm>[-\w\P{ASCII}]+)\s*(?:(?<op>\W?=)\s*(?<val>.+?)\s*(\s(?<case>[iIsS]))?\s*)?\]/gu],[_r,/#(?<nm>[-\w\P{ASCII}]+)/gu],[Hr,/\.(?<nm>[-\w\P{ASCII}]+)/gu],[Re,/\s*,\s*/g],[$e,/\s*[\s>+~]\s*/g],[Ne,/::(?<nm>[-\w\P{ASCII}]+)(?:\((?<arg>¶*)\))?/gu],[qe,/:(?<nm>[-\w\P{ASCII}]+)(?:\((?<arg>¶*)\))?/gu],[jr,/(?:(?<ns>\*|[-\w\P{ASCII}]*)\|)?\*/gu],[Yr,/(?:(?<ns>\*|[-\w\P{ASCII}]*)\|)?(?<nm>[-\w\P{ASCII}]+)/gu]]),Wr=r=>r==qe||r==Ne?RegExp(Le.get(r).source.replace("¶","."),"gu"):Le.get(r),Xr=(r,e)=>{let t=0,n="";for(;e<r.length;e++){let a=r[e];if(a=="("?++t:a==")"&&--t,n+=a,t===0)return n}return n},Gr=/(['"])([^\\\n]*?)\1/g,Te=r=>{if((r=r.trim())==="")return[];let e=[];r=(r=r.replace(/\\./g,(a,o)=>(e.push({t:a,l:o}),"".repeat(a.length)))).replace(Gr,(a,o,i,s)=>(e.push({t:a,l:s}),`${o}${"".repeat(i.length)}${o}`));{let a,o=0;for(;(a=r.indexOf("(",o))>-1;){let i=Xr(r,a);e.push({t:i,l:a}),r=`${r.substring(0,a)}(${"¶".repeat(i.length-2)})${r.substring(a+i.length)}`,o=a+i.length}}let t=(a=>{if(!a)return[];let o=[a];for(let[s,u]of Le.entries())for(let d=0;d<o.length;d++){let h=o[d];if(typeof h!="string")continue;u.lastIndex=0;let p=u.exec(h);if(!p)continue;let g=p.index-1,v=[],f=p[0],y=h.slice(0,g+1);y&&v.push(y),v.push({...p.groups,i:s,o:f});let x=h.slice(g+f.length+1);x&&v.push(x),o.splice(d,1,...v)}let i=0;for(let s of o)typeof s=="string"?Se():(s.u=[i,i+=s.o.length],s.i!=$e&&s.i!=Re||(s.o=s.o.trim()||" "));return o})(r),n=[];for(let a of e.reverse())for(let o of t){let{l:i,t:s}=a;if(o.u[0]>i||i+s.length>o.u[1])continue;let{o:u}=o,d=i-o.u[0];o.o=u.slice(0,d)+s+u.slice(d+s.length),o.o!==u&&n.push(o)}for(let a of n){let o=Wr(a.i);o||Se(),o.lastIndex=0;let i=o.exec(a.o);i||Se(),Kr(a,i.groups)}return t},nr=r=>r.map(e=>e.o).join(""),z=(r,...e)=>({_:r,p:e}),ge="dlc",kr=()=>[...Array(16)].reduce(r=>r+Math.random().toString(36)[2],""),or=":global(",_e="dlcss-",ue=Pr.document,we=Pr.Node,He=r=>new Text(r),de=r=>new Comment(r),ve=()=>_e+kr(),ir=r=>{ue=r[0],we=r[1],He=r[2],de=r[3],ve=r[4],ce=r[5]},wr=()=>[ue,we,He,de,ve,ce],Cr=new Map,lr=r=>typeof r=="symbol"&&Fe(r)?new X(r):r,xr=r=>{let e={h:[],I:r,m:se()};Cr.set(e.m,e);let t=new Proxy(r,{get(n,a,o){if(a==te)return ne?e.m:br;if(ne){let i=Ie({i:0,A:e,m:se(),S:[lr(a)],h:[]});return new Proxy({},{get(s,u,d){return u==ye?()=>i.m:(i.S.push(lr(u)),d)}})}return Reflect.get(n,a,o)},set(n,a,o,i){let s=Reflect.set(n,a,o,i);return e.h.map(u=>u(a)),s}});return e.P=t,t},Jr=(r,e,t)=>{let n=Sr(r);n.I[e]=t.value;let a=!1;t.listen(o=>{a=!0,n.P[e]=o}),n.h.push(o=>{o===e&&(a?a=!1:Ye(t.C,r[o])||(a=!0,r[o]=t.value))})},Zr=r=>typeof r=="object"&&r!==null&&r[te]==br,ne=!1,Sr=r=>{ne=!0;let e=r[te];return ne=!1,Cr.get(e)},je=new Map,Ue=(r,e)=>e.reduce((t,n)=>t[Ce(n)],r),Tr=r=>{let e;return r.i==0?e=Ue(r.A.I,r.S):r.i==1?e=r.M.map(t=>t.value):r.i==2&&(e=r.j(Tr(r.C))),e},Ye=(r,e)=>{if(e===ke)return!1;if(r.i==0){let t=r.S;return Ue(r.A.P,t.slice(0,-1))[Ce(t.at(-1))]=e,!0}return!(r.i!=2||!r.O)&&Ye(r.C,r.O(e))},Be=r=>{r.h.forEach(e=>e())},Ie=r=>(je.set(r.m,r),r),Fe=r=>{let e=je.get(r);if(!e)return!1;let t,n=e.S,a=e.A.I,o=()=>t.forEach((i,s)=>{i.A&&(i.A.h=i.A.h.filter(d=>d!==i.T));let u=t.slice(0,s).map(d=>Ue(a,d.k)).find(Zr);i.A=u?Sr(u):e.A,i.A.h.push(i.T)});return t=n.map((i,s)=>(re(i)&&i.listen(o),{k:n.slice(0,s+1),T(u){u===Ce(i)&&Be(e)}})),o(),!0},re=r=>r instanceof X,Ce=r=>re(r)?r.value:r,Z=(r,e,t)=>{re(r)&&(t?.(),r.listen(e)),e(Ce(r))};class X{C;N;constructor(e){this.C=je.get(e)}get value(){return Tr(this.C)}set value(e){Ye(this.C,e)}[te](){let e=this.C;return e.i==1?e.M:null}[ye](){return this.C.m}j(e,t){let n=Ie({i:2,m:se(),h:[],j:e,O:t,C:this.C});return this.listen(a=>Be(n)),n.m}listen(e){this.C.h.push(()=>e(this.value))}zip(...e){let t=Ie({i:1,m:se(),h:[],M:[new X(this.C.m),...e]});return t.M.map(n=>n.listen(a=>Be(t))),new X(t.m)}andThen(e,t){return this.map(n=>{let a=n?e:t;return typeof a=="function"?a(n):a})}map(e,t){return new X(this.j(e,t))}mapEach(e){return this.map(t=>Array.from(t).map(e))}clone(){return new X(this.C.m)}}let U=null,be=!1,Ee=(r,e,t,n)=>{if(r==null)return[de()];if(re(r)){let a=de("["),o=null;return Z(r,i=>{let s=Ee(i,e,t,r.N);if(!be&&o){if(s.length===o.length&&o.every((d,h)=>d===s[h]))return;o.map(d=>e.removeChild(d));let u=a;for(let d of s)e.insertBefore(d,u.nextSibling),u=d}o=s}),[a,...o,de("]")]}if(r instanceof we){let a,o=i=>{if(a=i.classList){let s=[...a],u=s.find(d=>d.startsWith(_e));if(s.find(d=>d==ge))return;u?n&&u!==n&&(a.remove(u),a.add(n)):a.add(n||t),[...i.childNodes].map(o)}};return(n||t)&&o(r),[r]}return r instanceof Array?r.flatMap(a=>Ee(a,e,t,n)):[He(r)]},sr="createElement",Ae=new Map,c=(r,e,t)=>{let{children:n,...a}=e;t&&(a.key=t),n||=[];let o,i=n instanceof Array?n:[n];if(typeof r=="function"){let s=xr({});ce?.(r);for(let p in a){let g=a[p];re(g)?Jr(s,p,g):s[p]=g}for(let p of i)re(p)&&(p.N||=U);let u=Ae.get(r);if(r.style){let p=r.style,g=ue[sr]("style");if(!u){u={m:ve(),R:[]};let v="";for(let f=0;f<p._.length;f++)if(v+=p._[f],f+1<p._.length){let y=p.p[f];if(typeof y=="string")v+=y;else{let x=ve();v+=`var(--${x})`,u.R.push([x,y])}}g.setAttribute("dl-"+ge,r.name),be||(ue.head.append(g),((f,y,x)=>{let R=Te(`:where(.${x})`),E=`:where(._${kr()} `,A=(T,F)=>{for(let M=0;M<T.length;M++){let B,$,W,N=T[M];if(N.i==qe&&N.arg){let j=N.nm=="global",G=A(Te(N.arg),j||F);j?(B=M,$=1,W=G):(N.arg=nr(G),N.o=`:${N.nm}(${N.arg})`)}else if(!F&&(M===T.length-1||[$e,Re].includes(T[M+1].i))){for(B=M;B>0&&T[B].i==Ne;)B--;B++,$=0,W=R}W&&(T.splice(B,$,...W),M+=W.length)}return T},L=T=>[...T].map(F=>(F.selectorText&&(F.selectorText=nr(A(Te(F.selectorText.replaceAll(E,or)))).replace(/:scope/g,`.${x}.${ge}`)),F.cssRules&&L(F.cssRules),F));f.innerText=y.replaceAll(or,E),L(f.sheet.cssRules)})(g,v,u.m)),Ae.set(r,u)}}let d={state:s,children:i,id:u?.m},h=U;if(U=u?.m,o=r.call(s,d),U=h,d.root=o,o instanceof we&&(o.$=d,o.classList.add(ge),u))for(let[p,g]of u.R){let v="--"+p,f=o.style;Z(g(d.state),y=>{y===void 0?f.removeProperty(v):f.setProperty(v,y)})}ce?.(r,d),d.init?.(),ce||d.mount?.()}else{let s=a?.xmlns;o=ue[sr+(s?"NS":"")](s||r,s&&r,a,i);let u=(h,p)=>{p===void 0||p===!1?o.removeAttribute(h):o.setAttribute(h,p)};for(let h of i){let p=Ee(h,o,U);be||p.map(g=>o.appendChild(g))}let d=o.classList;for(let h in a){let p=a[h];if(h==="this")p.value=o;else if(h==="value"||h==="checked")Z(p,g=>{u(h,g),o.value=g},()=>{o.addEventListener("change",()=>p.value=o[h])});else if(h==="class"){let g=[];Z(p,v=>{let f=v.split(" ").filter(y=>y.length);g.length&&d.remove(...g),f.length&&d.add(...f),g=f})}else if(h.startsWith("on:"))o.addEventListener(h.substring(3),g=>p(g));else if(h.startsWith("class:")){let g=h.substring(6);Z(p,v=>{v?d.add(g):d.remove(g)})}else if(h.startsWith("attr:")){let g=h.substring(5);Z(p,v=>{o[g]=v})}else if(h!="style"||typeof p!="object"||re(p))Z(p,g=>u(h,g));else for(let g in p)Z(p[g],v=>{o.style.setProperty(g,v)})}U&&![...d].find(h=>h.startsWith(_e))&&d.add(U),s&&(o.innerHTML=o.innerHTML)}return o},Ke=()=>{let r=[],e=t=>((n,a)=>a.map(o=>{let i=U;U=o.N,o.J(n),U=i}))(t,r);return e.listen=t=>{r.push({J:t,N:U})},e};Object.defineProperty(globalThis,"use",{get(){let r=ne;return ne=!0,(e,...t)=>{if(ne=r,e instanceof Array&&"raw"in e)return((a,o)=>{let i=xr({}),s=[];for(let u in a)if(s.push(a[u]),o[u]){let d,h=o[u],p=h[ye]();if(re(h)?d=h:Fe(p)&&(d=new X(p)),d){let g=s.length;d.listen(v=>{s[g]=v,i.L=s.join("")}),s.push(d.value)}else s.push(h)}return i.L=s.join(""),use(i.L)})(e,t);let n=a=>{let o=a[ye]();return Fe(o),new X(o)};return t=t.map(n),e=n(e),t.length?e.zip(...t):e}},configurable:!0}),c[te]=r=>be=r,c[ke]=()=>Ae=new Map;let cr="dlssr-id",Dr=JSON,Qr=(r,e,t)=>{let n=(i,s)=>{s instanceof Array?i[te]().forEach((u,d)=>n(u,s[d])):i.value=a(s.v,i.value,!0)},a=(i,s,u)=>{if(typeof i=="number")return Dr.parse(r.v[i]);if(i.t=="p")return n(s,i.v),u?ke:s;if(i.t=="s")return new Set(i.v.map(d=>a(d)));if(i.t=="m"){let d={};return o(i.v,d),new Map(Object.entries(d))}return i.t=="o"?(o(i.v,s),s):void 0},o=(i,s)=>{for(let[u,d]of i){let h=r.k[u];s[h]=a(d,s[h])}};o(e,t)},et=(r,e,t,n)=>{let a=c("textarea",{});a.innerHTML=n.innerText;let o=Dr.parse(a.value),i=[],s=+e.getAttribute(cr),u=-1,d=f=>{let y=`[${cr}="${f}"]`,x=s==f?e:e.querySelector(y)||t.querySelector(y);return x?.$&&i.push([f,x]),x},h=()=>{let[f,y]=o.n[++u];return d(f)?.childNodes?.[y]},p=wr(),g=[{createElement:f=>d(++u)||p[0].createElement(f),createElementNS:(f,y)=>d(++u)||p[0].createElementNS(f,y),head:p[0].head},p[1],f=>h()||p[2](f),f=>h()||p[3](f),()=>o.i[u+1],p[5]];ir(g),c[ke](),c[te](!0);let v=r();c[te](!1),ir(p);for(let[f,y]of i.filter(x=>x[1].$)){let x=o.n[f];Qr(o,x,y.$.state)}return v},ur=(r,e,t,n)=>{let a=r.t;return a instanceof Function?a(t,n):a},dr=(r,e,t,n,a)=>{if("$"in r){let o=r.$.state;for(let i in n)o[i]=n[i];a&&(o.outlet=a),o["on:routeshown"]?.(t)}},De=function(r){return{i:this.path,t:this.show,l:r.children}};class We{o;u;static h;constructor(e){this.u=e,We.h=this}mount(e,t){this.o=e,t||(this.route(),addEventListener("popstate",()=>{this.route()}))}navigate(e){let t=this.route(e);return t&&history.pushState(null,"",e),t}ssgables(){let e=(t,n)=>(n.i&&(t+="/"+n.i),n.l.length?n.l.map(a=>e(t,a)).flat():n.i&&n.i.startsWith(":")?void 0:[[t||"/",n.i?t+".html":t+"/index.html"]]);return e("",this.u)}route(e=location.pathname,t=location.origin){let n=new URL(e,t).pathname,a=n.split("/").slice(1),o=this._(this.u,n,[...a],{});return o&&o!==this.o&&(this.o.replaceWith(o),this.o=o),!!o}_(e,t,n,a){let o=[],i=!1;if(e.i?o=e.i.split("/"):e.l.length||(i=!0),!o.length||n.splice(0,o.length).every((s,u)=>((d,h,p)=>h.startsWith(":")?(p[h.substring(1)]=d,!0):d===h)(s,o[u],a))){if((!n.length||n[0]===""&&i)&&e.t){let s=ur(e,0,t,a);return dr(s,0,t,a),s}{let s,u={...a};for(let d of e.l||[])if(s=this._(d,t,[...n],a),s)break;if(s){let d=ur(e,0,t,u);return d?(dr(d,0,t,a,s),d):s}}}return null}}function _(r){return 0>r?-1:r===0?0:1}function he(r,e,t){return(1-t)*r+t*e}function q(r,e,t){return r>t?r:t>e?e:t}function rt(r){return 0>(r%=360)&&(r+=360),r}function Ve(r,e){return[r[0]*e[0][0]+r[1]*e[0][1]+r[2]*e[0][2],r[0]*e[1][0]+r[1]*e[1][1]+r[2]*e[1][2],r[0]*e[2][0]+r[1]*e[2][1]+r[2]*e[2][2]]}const tt=[[.41233895,.35762064,.18051042],[.2126,.7152,.0722],[.01932141,.11916382,.95034478]],at=[[3.2413774792388685,-1.5376652402851851,-.49885366846268053],[-.9691452513005321,1.8758853451067872,.04156585616912061],[.05562093689691305,-.20395524564742123,1.0571799111220335]],nt=[95.047,100,108.883];function Xe(r,e,t){return(255<<24|(255&r)<<16|(255&e)<<8|255&t)>>>0}function hr(r){return Xe(oe(r[0]),oe(r[1]),oe(r[2]))}function ot(r){return r>>16&255}function it(r){return r>>8&255}function lt(r){return 255&r}function st(r,e,t){const n=at,a=n[0][0]*r+n[0][1]*e+n[0][2]*t,o=n[1][0]*r+n[1][1]*e+n[1][2]*t,i=n[2][0]*r+n[2][1]*e+n[2][2]*t;return Xe(oe(a),oe(o),oe(i))}function mr(r){const e=(t=>Ve([le(ot(t)),le(it(t)),le(lt(t))],tt))(r)[1];return 116*Mr(e/100)-16}function ee(r){return 100*ct((r+16)/116)}function Oe(r){return 116*Mr(r/100)-16}function le(r){const e=r/255;return e>.040449936?100*Math.pow((e+.055)/1.055,2.4):e/12.92*100}function oe(r){const e=r/100;let t=0;return t=e>.0031308?1.055*Math.pow(e,1/2.4)-.055:12.92*e,0>(n=Math.round(255*t))?0:n>255?255:n;var n}function Mr(r){return r>216/24389?Math.pow(r,1/3):(24389/27*r+16)/116}function ct(r){const e=r*r*r;return e>216/24389?e:(116*r-16)/(24389/27)}class K{static make(e=nt,t=200/Math.PI*ee(50)/100,n=50,a=2,o=!1){const i=e,s=.401288*i[0]+.650173*i[1]+-.051461*i[2],u=-.250268*i[0]+1.204414*i[1]+.045854*i[2],d=-.002079*i[0]+.048952*i[1]+.953127*i[2],h=.8+a/10,p=.9>h?he(.525,.59,10*(h-.8)):he(.59,.69,10*(h-.9));let g=o?1:h*(1-1/3.6*Math.exp((-t-42)/92));g=g>1?1:0>g?0:g;const v=h,f=[g*(100/s)+1-g,g*(100/u)+1-g,g*(100/d)+1-g],y=1/(5*t+1),x=y*y*y*y,R=1-x,E=x*t+.1*R*R*Math.cbrt(5*t),A=ee(n)/e[1],L=1.48+Math.sqrt(A),T=.725/Math.pow(A,.2),F=T,M=[Math.pow(E*f[0]*s/100,.42),Math.pow(E*f[1]*u/100,.42),Math.pow(E*f[2]*d/100,.42)],B=[400*M[0]/(M[0]+27.13),400*M[1]/(M[1]+27.13),400*M[2]/(M[2]+27.13)];return new K(A,(2*B[0]+B[1]+.05*B[2])*T,T,F,p,v,f,E,Math.pow(E,.25),L)}constructor(e,t,n,a,o,i,s,u,d,h){this.n=e,this.aw=t,this.nbb=n,this.ncb=a,this.c=o,this.nc=i,this.rgbD=s,this.fl=u,this.fLRoot=d,this.z=h}}K.DEFAULT=K.make();class H{constructor(e,t,n,a,o,i,s,u,d){this.hue=e,this.chroma=t,this.j=n,this.q=a,this.m=o,this.s=i,this.jstar=s,this.astar=u,this.bstar=d}distance(e){const t=this.jstar-e.jstar,n=this.astar-e.astar,a=this.bstar-e.bstar;return 1.41*Math.pow(Math.sqrt(t*t+n*n+a*a),.63)}static fromInt(e){return H.fromIntInViewingConditions(e,K.DEFAULT)}static fromIntInViewingConditions(e,t){const n=(65280&e)>>8,a=255&e,o=le((16711680&e)>>16),i=le(n),s=le(a),u=.41233895*o+.35762064*i+.18051042*s,d=.2126*o+.7152*i+.0722*s,h=.01932141*o+.11916382*i+.95034478*s,p=.401288*u+.650173*d-.051461*h,g=-.250268*u+1.204414*d+.045854*h,v=-.002079*u+.048952*d+.953127*h,f=t.rgbD[0]*p,y=t.rgbD[1]*g,x=t.rgbD[2]*v,R=Math.pow(t.fl*Math.abs(f)/100,.42),E=Math.pow(t.fl*Math.abs(y)/100,.42),A=Math.pow(t.fl*Math.abs(x)/100,.42),L=400*_(f)*R/(R+27.13),T=400*_(y)*E/(E+27.13),F=400*_(x)*A/(A+27.13),M=(11*L+-12*T+F)/11,B=(L+T-2*F)/9,$=(20*L+20*T+21*F)/20,W=(40*L+20*T+F)/20,N=180*Math.atan2(B,M)/Math.PI,j=0>N?N+360:360>N?N:N-360,G=j*Math.PI/180,pe=W*t.nbb,ae=100*Math.pow(pe/t.aw,t.c*t.z),xe=4/t.c*Math.sqrt(ae/100)*(t.aw+4)*t.fLRoot,fe=5e4/13*.25*(Math.cos((20.14>j?j+360:j)*Math.PI/180+2)+3.8)*t.nc*t.ncb,er=Math.pow(fe*Math.sqrt(M*M+B*B)/($+.305),.9)*Math.pow(1.64-Math.pow(.29,t.n),.73),rr=er*Math.sqrt(ae/100),tr=rr*t.fLRoot,Nr=50*Math.sqrt(er*t.c/(t.aw+4)),qr=(1+100*.007)*ae/(1+.007*ae),ar=1/.0228*Math.log(1+.0228*tr);return new H(j,rr,ae,xe,tr,Nr,qr,ar*Math.cos(G),ar*Math.sin(G))}static fromJch(e,t,n){return H.fromJchInViewingConditions(e,t,n,K.DEFAULT)}static fromJchInViewingConditions(e,t,n,a){const o=4/a.c*Math.sqrt(e/100)*(a.aw+4)*a.fLRoot,i=t*a.fLRoot,s=50*Math.sqrt(t/Math.sqrt(e/100)*a.c/(a.aw+4)),u=n*Math.PI/180,d=(1+100*.007)*e/(1+.007*e),h=1/.0228*Math.log(1+.0228*i);return new H(n,t,e,o,i,s,d,h*Math.cos(u),h*Math.sin(u))}static fromUcs(e,t,n){return H.fromUcsInViewingConditions(e,t,n,K.DEFAULT)}static fromUcsInViewingConditions(e,t,n,a){const o=t,i=n,s=(Math.exp(.0228*Math.sqrt(o*o+i*i))-1)/.0228/a.fLRoot;let u=Math.atan2(i,o)*(180/Math.PI);0>u&&(u+=360);const d=e/(1-.007*(e-100));return H.fromJchInViewingConditions(d,s,u,a)}toInt(){return this.viewed(K.DEFAULT)}viewed(e){const t=this.chroma===0||this.j===0?0:this.chroma/Math.sqrt(this.j/100),n=Math.pow(t/Math.pow(1.64-Math.pow(.29,e.n),.73),1/.9),a=this.hue*Math.PI/180,o=.25*(Math.cos(a+2)+3.8),i=e.aw*Math.pow(this.j/100,1/e.c/e.z),s=o*(5e4/13)*e.nc*e.ncb,u=i/e.nbb,d=Math.sin(a),h=Math.cos(a),p=23*(u+.305)*n/(23*s+11*n*h+108*n*d),g=p*h,v=p*d,f=(460*u+451*g+288*v)/1403,y=(460*u-891*g-261*v)/1403,x=(460*u-220*g-6300*v)/1403,R=Math.max(0,27.13*Math.abs(f)/(400-Math.abs(f))),E=_(f)*(100/e.fl)*Math.pow(R,1/.42),A=Math.max(0,27.13*Math.abs(y)/(400-Math.abs(y))),L=_(y)*(100/e.fl)*Math.pow(A,1/.42),T=Math.max(0,27.13*Math.abs(x)/(400-Math.abs(x))),F=_(x)*(100/e.fl)*Math.pow(T,1/.42),M=E/e.rgbD[0],B=L/e.rgbD[1],$=F/e.rgbD[2];return st(1.86206786*M-1.01125463*B+.14918677*$,.38752654*M+.62144744*B-.00897398*$,-.0158415*M-.03412294*B+1.04996444*$)}static fromXyzInViewingConditions(e,t,n,a){const o=.401288*e+.650173*t-.051461*n,i=-.250268*e+1.204414*t+.045854*n,s=-.002079*e+.048952*t+.953127*n,u=a.rgbD[0]*o,d=a.rgbD[1]*i,h=a.rgbD[2]*s,p=Math.pow(a.fl*Math.abs(u)/100,.42),g=Math.pow(a.fl*Math.abs(d)/100,.42),v=Math.pow(a.fl*Math.abs(h)/100,.42),f=400*_(u)*p/(p+27.13),y=400*_(d)*g/(g+27.13),x=400*_(h)*v/(v+27.13),R=(11*f+-12*y+x)/11,E=(f+y-2*x)/9,A=(20*f+20*y+21*x)/20,L=(40*f+20*y+x)/20,T=180*Math.atan2(E,R)/Math.PI,F=0>T?T+360:360>T?T:T-360,M=F*Math.PI/180,B=L*a.nbb,$=100*Math.pow(B/a.aw,a.c*a.z),W=4/a.c*Math.sqrt($/100)*(a.aw+4)*a.fLRoot,N=5e4/13*(1/4)*(Math.cos((20.14>F?F+360:F)*Math.PI/180+2)+3.8)*a.nc*a.ncb,j=Math.pow(N*Math.sqrt(R*R+E*E)/(A+.305),.9)*Math.pow(1.64-Math.pow(.29,a.n),.73),G=j*Math.sqrt($/100),pe=G*a.fLRoot,ae=50*Math.sqrt(j*a.c/(a.aw+4)),xe=(1+100*.007)*$/(1+.007*$),fe=Math.log(1+.0228*pe)/.0228;return new H(F,G,$,W,pe,ae,xe,fe*Math.cos(M),fe*Math.sin(M))}xyzInViewingConditions(e){const t=this.chroma===0||this.j===0?0:this.chroma/Math.sqrt(this.j/100),n=Math.pow(t/Math.pow(1.64-Math.pow(.29,e.n),.73),1/.9),a=this.hue*Math.PI/180,o=.25*(Math.cos(a+2)+3.8),i=e.aw*Math.pow(this.j/100,1/e.c/e.z),s=o*(5e4/13)*e.nc*e.ncb,u=i/e.nbb,d=Math.sin(a),h=Math.cos(a),p=23*(u+.305)*n/(23*s+11*n*h+108*n*d),g=p*h,v=p*d,f=(460*u+451*g+288*v)/1403,y=(460*u-891*g-261*v)/1403,x=(460*u-220*g-6300*v)/1403,R=Math.max(0,27.13*Math.abs(f)/(400-Math.abs(f))),E=_(f)*(100/e.fl)*Math.pow(R,1/.42),A=Math.max(0,27.13*Math.abs(y)/(400-Math.abs(y))),L=_(y)*(100/e.fl)*Math.pow(A,1/.42),T=Math.max(0,27.13*Math.abs(x)/(400-Math.abs(x))),F=_(x)*(100/e.fl)*Math.pow(T,1/.42),M=E/e.rgbD[0],B=L/e.rgbD[1],$=F/e.rgbD[2];return[1.86206786*M-1.01125463*B+.14918677*$,.38752654*M+.62144744*B-.00897398*$,-.0158415*M-.03412294*B+1.04996444*$]}}class w{static sanitizeRadians(e){return(e+8*Math.PI)%(2*Math.PI)}static trueDelinearized(e){const t=e/100;let n=0;return n=t>.0031308?1.055*Math.pow(t,1/2.4)-.055:12.92*t,255*n}static chromaticAdaptation(e){const t=Math.pow(Math.abs(e),.42);return 400*_(e)*t/(t+27.13)}static hueOf(e){const t=Ve(e,w.SCALED_DISCOUNT_FROM_LINRGB),n=w.chromaticAdaptation(t[0]),a=w.chromaticAdaptation(t[1]),o=w.chromaticAdaptation(t[2]);return Math.atan2((n+a-2*o)/9,(11*n+-12*a+o)/11)}static areInCyclicOrder(e,t,n){const a=w.sanitizeRadians(t-e);return w.sanitizeRadians(n-e)>a}static intercept(e,t,n){return(t-e)/(n-e)}static lerpPoint(e,t,n){return[e[0]+(n[0]-e[0])*t,e[1]+(n[1]-e[1])*t,e[2]+(n[2]-e[2])*t]}static setCoordinate(e,t,n,a){const o=w.intercept(e[a],t,n[a]);return w.lerpPoint(e,o,n)}static isBounded(e){return e>=0&&100>=e}static nthVertex(e,t){const n=w.Y_FROM_LINRGB[0],a=w.Y_FROM_LINRGB[1],o=w.Y_FROM_LINRGB[2],i=t%4>1?100:0,s=t%2==0?0:100;if(4>t){const u=i,d=s,h=(e-u*a-d*o)/n;return w.isBounded(h)?[h,u,d]:[-1,-1,-1]}if(8>t){const u=i,d=s,h=(e-d*n-u*o)/a;return w.isBounded(h)?[d,h,u]:[-1,-1,-1]}{const u=i,d=s,h=(e-u*n-d*a)/o;return w.isBounded(h)?[u,d,h]:[-1,-1,-1]}}static bisectToSegment(e,t){let n=[-1,-1,-1],a=n,o=0,i=0,s=!1,u=!0;for(let d=0;12>d;d++){const h=w.nthVertex(e,d);if(0>h[0])continue;const p=w.hueOf(h);s?(u||w.areInCyclicOrder(o,p,i))&&(u=!1,w.areInCyclicOrder(o,t,p)?(a=h,i=p):(n=h,o=p)):(n=h,a=h,o=p,i=p,s=!0)}return[n,a]}static midpoint(e,t){return[(e[0]+t[0])/2,(e[1]+t[1])/2,(e[2]+t[2])/2]}static criticalPlaneBelow(e){return Math.floor(e-.5)}static criticalPlaneAbove(e){return Math.ceil(e-.5)}static bisectToLimit(e,t){const n=w.bisectToSegment(e,t);let a=n[0],o=w.hueOf(a),i=n[1];for(let s=0;3>s;s++)if(a[s]!==i[s]){let u=-1,d=255;a[s]<i[s]?(u=w.criticalPlaneBelow(w.trueDelinearized(a[s])),d=w.criticalPlaneAbove(w.trueDelinearized(i[s]))):(u=w.criticalPlaneAbove(w.trueDelinearized(a[s])),d=w.criticalPlaneBelow(w.trueDelinearized(i[s])));for(let h=0;8>h&&Math.abs(d-u)>1;h++){const p=Math.floor((u+d)/2),g=w.CRITICAL_PLANES[p],v=w.setCoordinate(a,g,i,s),f=w.hueOf(v);w.areInCyclicOrder(o,t,f)?(i=v,d=p):(a=v,o=f,u=p)}}return w.midpoint(a,i)}static inverseChromaticAdaptation(e){const t=Math.abs(e),n=Math.max(0,27.13*t/(400-t));return _(e)*Math.pow(n,1/.42)}static findResultByJ(e,t,n){let a=11*Math.sqrt(n);const o=K.DEFAULT,i=1/Math.pow(1.64-Math.pow(.29,o.n),.73),s=.25*(Math.cos(e+2)+3.8)*(5e4/13)*o.nc*o.ncb,u=Math.sin(e),d=Math.cos(e);for(let h=0;5>h;h++){const p=a/100,g=Math.pow((t===0||a===0?0:t/Math.sqrt(p))*i,1/.9),v=o.aw*Math.pow(p,1/o.c/o.z)/o.nbb,f=23*(v+.305)*g/(23*s+11*g*d+108*g*u),y=f*d,x=f*u,R=(460*v+451*y+288*x)/1403,E=(460*v-891*y-261*x)/1403,A=(460*v-220*y-6300*x)/1403,L=Ve([w.inverseChromaticAdaptation(R),w.inverseChromaticAdaptation(E),w.inverseChromaticAdaptation(A)],w.LINRGB_FROM_SCALED_DISCOUNT);if(0>L[0]||0>L[1]||0>L[2])return 0;const T=w.Y_FROM_LINRGB[0],F=w.Y_FROM_LINRGB[1],M=w.Y_FROM_LINRGB[2],B=T*L[0]+F*L[1]+M*L[2];if(0>=B)return 0;if(h===4||.002>Math.abs(B-n))return L[0]>100.01||L[1]>100.01||L[2]>100.01?0:hr(L);a-=(B-n)*a/(2*B)}return 0}static solveToInt(e,t,n){if(1e-4>t||1e-4>n||n>99.9999)return(s=>{const u=oe(ee(s));return Xe(u,u,u)})(n);const a=(e=rt(e))/180*Math.PI,o=ee(n),i=w.findResultByJ(a,t,o);return i!==0?i:hr(w.bisectToLimit(o,a))}static solveToCam(e,t,n){return H.fromInt(w.solveToInt(e,t,n))}}w.SCALED_DISCOUNT_FROM_LINRGB=[[.001200833568784504,.002389694492170889,.0002795742885861124],[.0005891086651375999,.0029785502573438758,.0003270666104008398],[.00010146692491640572,.0005364214359186694,.0032979401770712076]],w.LINRGB_FROM_SCALED_DISCOUNT=[[1373.2198709594231,-1100.4251190754821,-7.278681089101213],[-271.815969077903,559.6580465940733,-32.46047482791194],[1.9622899599665666,-57.173814538844006,308.7233197812385]],w.Y_FROM_LINRGB=[.2126,.7152,.0722],w.CRITICAL_PLANES=[.015176349177441876,.045529047532325624,.07588174588720938,.10623444424209313,.13658714259697685,.16693984095186062,.19729253930674434,.2276452376616281,.2579979360165119,.28835063437139563,.3188300904430532,.350925934958123,.3848314933096426,.42057480301049466,.458183274052838,.4976837250274023,.5391024159806381,.5824650784040898,.6277969426914107,.6751227633498623,.7244668422128921,.775853049866786,.829304845476233,.8848452951698498,.942497089126609,1.0022825574869039,1.0642236851973577,1.1283421258858297,1.1946592148522128,1.2631959812511864,1.3339731595349034,1.407011200216447,1.4823302800086415,1.5599503113873272,1.6398909516233677,1.7221716113234105,1.8068114625156377,1.8938294463134073,1.9832442801866852,2.075074464868551,2.1693382909216234,2.2660538449872063,2.36523901573795,2.4669114995532007,2.5710888059345764,2.6777882626779785,2.7870270208169257,2.898822059350997,3.0131901897720907,3.1301480604002863,3.2497121605402226,3.3718988244681087,3.4967242352587946,3.624204428461639,3.754355295633311,3.887192587735158,4.022731918402185,4.160988767090289,4.301978482107941,4.445716283538092,4.592217266055746,4.741496401646282,4.893568542229298,5.048448422192488,5.20615066083972,5.3666897647573375,5.5300801301023865,5.696336044816294,5.865471690767354,6.037501145825082,6.212438385869475,6.390297286737924,6.571091626112461,6.7548350853498045,6.941541251256611,7.131223617812143,7.323895587840543,7.5195704746346665,7.7182615035334345,7.919981813454504,8.124744458384042,8.332562408825165,8.543448553206703,8.757415699253682,8.974476575321063,9.194643831691977,9.417930041841839,9.644347703669503,9.873909240696694,10.106627003236781,10.342513269534024,10.58158024687427,10.8238400726681,11.069304815507364,11.317986476196008,11.569896988756009,11.825048221409341,12.083451977536606,12.345119996613247,12.610063955123938,12.878295467455942,13.149826086772048,13.42466730586372,13.702830557985108,13.984327217668513,14.269168601521828,14.55736596900856,14.848930523210871,15.143873411576273,15.44220572664832,15.743938506781891,16.04908273684337,16.35764934889634,16.66964922287304,16.985093187232053,17.30399201960269,17.62635644741625,17.95219714852476,18.281524751807332,18.614349837764564,18.95068293910138,19.290534541298456,19.633915083172692,19.98083495742689,20.331304511189067,20.685334046541502,21.042933821039977,21.404114048223256,21.76888489811322,22.137256497705877,22.50923893145328,22.884842241736916,23.264076429332462,23.6469514538663,24.033477234264016,24.42366364919083,24.817520537484558,25.21505769858089,25.61628489293138,26.021211842414342,26.429848230738664,26.842203703840827,27.258287870275353,27.678110301598522,28.10168053274597,28.529008062403893,28.96010235337422,29.39497283293396,29.83362889318845,30.276079891419332,30.722335150426627,31.172403958865512,31.62629557157785,32.08401920991837,32.54558406207592,33.010999283389665,33.4802739966603,33.953417292456834,34.430438229418264,34.911345834551085,35.39614910352207,35.88485700094671,36.37747846067349,36.87402238606382,37.37449765026789,37.87891309649659,38.38727753828926,38.89959975977785,39.41588851594697,39.93615253289054,40.460400508064545,40.98864111053629,41.520882981230194,42.05713473317016,42.597404951718396,43.141702194811224,43.6900349931913,44.24241185063697,44.798841244188324,45.35933162437017,45.92389141541209,46.49252901546552,47.065252796817916,47.64207110610409,48.22299226451468,48.808024568002054,49.3971762874833,49.9904556690408,50.587870934119984,51.189430279724725,51.79514187861014,52.40501387947288,53.0190544071392,53.637271562750364,54.259673423945976,54.88626804504493,55.517063457223934,56.15206766869424,56.79128866487574,57.43473440856916,58.08241284012621,58.734331877617365,59.39049941699807,60.05092333227251,60.715611475655585,61.38457167773311,62.057811747619894,62.7353394731159,63.417162620860914,64.10328893648692,64.79372614476921,65.48848194977529,66.18756403501224,66.89098006357258,67.59873767827808,68.31084450182222,69.02730813691093,69.74813616640164,70.47333615344107,71.20291564160104,71.93688215501312,72.67524319850172,73.41800625771542,74.16517879925733,74.9167682708136,75.67278210128072,76.43322770089146,77.1981124613393,77.96744375590167,78.74122893956174,79.51947534912904,80.30219030335869,81.08938110306934,81.88105503125999,82.67721935322541,83.4778813166706,84.28304815182372,85.09272707154808,85.90692527145302,86.72564993000343,87.54890820862819,88.3767072518277,89.2090541872801,90.04595612594655,90.88742016217518,91.73345337380438,92.58406282226491,93.43925555268066,94.29903859396902,95.16341895893969,96.03240364439274,96.9059996312159,97.78421388448044,98.6670533535366,99.55452497210776];class D{static from(e,t,n){return new D(w.solveToInt(e,t,n))}static fromInt(e){return new D(e)}toInt(){return this.argb}get hue(){return this.internalHue}set hue(e){this.setInternalState(w.solveToInt(e,this.internalChroma,this.internalTone))}get chroma(){return this.internalChroma}set chroma(e){this.setInternalState(w.solveToInt(this.internalHue,e,this.internalTone))}get tone(){return this.internalTone}set tone(e){this.setInternalState(w.solveToInt(this.internalHue,this.internalChroma,e))}setValue(e,t){this[e]=t}toString(){return`HCT(${this.hue.toFixed(0)}, ${this.chroma.toFixed(0)}, ${this.tone.toFixed(0)})`}static isBlue(e){return e>=250&&270>e}static isYellow(e){return e>=105&&125>e}static isCyan(e){return e>=170&&207>e}constructor(e){this.argb=e;const t=H.fromInt(e);this.internalHue=t.hue,this.internalChroma=t.chroma,this.internalTone=mr(e),this.argb=e}setInternalState(e){const t=H.fromInt(e);this.internalHue=t.hue,this.internalChroma=t.chroma,this.internalTone=mr(e),this.argb=e}inViewingConditions(e){const t=H.fromInt(this.toInt()).xyzInViewingConditions(e),n=H.fromXyzInViewingConditions(t[0],t[1],t[2],K.make());return D.from(n.hue,n.chroma,Oe(t[1]))}}class V{static ratioOfTones(e,t){return e=q(0,100,e),t=q(0,100,t),V.ratioOfYs(ee(e),ee(t))}static ratioOfYs(e,t){const n=e>t?e:t;return(n+5)/((n===t?e:t)+5)}static lighter(e,t){if(0>e||e>100)return-1;const n=ee(e),a=t*(n+5)-5,o=V.ratioOfYs(a,n);if(t>o&&Math.abs(o-t)>.04)return-1;const i=Oe(a)+.4;return 0>i||i>100?-1:i}static darker(e,t){if(0>e||e>100)return-1;const n=ee(e),a=(n+5)/t-5,o=V.ratioOfYs(n,a);if(t>o&&Math.abs(o-t)>.04)return-1;const i=Oe(a)-.4;return 0>i||i>100?-1:i}static lighterUnsafe(e,t){const n=V.lighter(e,t);return 0>n?100:n}static darkerUnsafe(e,t){const n=V.darker(e,t);return 0>n?0:n}}class Ge{static isDisliked(e){const t=Math.round(e.hue)>=90&&111>=Math.round(e.hue),n=Math.round(e.chroma)>16,a=65>Math.round(e.tone);return t&&n&&a}static fixIfDisliked(e){return Ge.isDisliked(e)?D.from(e.hue,e.chroma,70):e}}function C(r,e,t){return((n,a,o)=>{if(n.name!==o.name)throw Error(`Attempting to extend color ${n.name} with color ${o.name} of different name for spec version ${a}.`);if(n.isBackground!==o.isBackground)throw Error(`Attempting to extend color ${n.name} as a ${n.isBackground?"background":"foreground"} with color ${o.name} as a ${o.isBackground?"background":"foreground"} for spec version ${a}.`)})(r,e,t),m.fromPalette({name:r.name,palette:n=>n.specVersion===e?t.palette(n):r.palette(n),tone:n=>n.specVersion===e?t.tone(n):r.tone(n),isBackground:r.isBackground,chromaMultiplier(n){const a=n.specVersion===e?t.chromaMultiplier:r.chromaMultiplier;return a!==void 0?a(n):1},background(n){const a=n.specVersion===e?t.background:r.background;return a!==void 0?a(n):void 0},secondBackground(n){const a=n.specVersion===e?t.secondBackground:r.secondBackground;return a!==void 0?a(n):void 0},contrastCurve(n){const a=n.specVersion===e?t.contrastCurve:r.contrastCurve;return a!==void 0?a(n):void 0},toneDeltaPair(n){const a=n.specVersion===e?t.toneDeltaPair:r.toneDeltaPair;return a!==void 0?a(n):void 0}})}class m{static fromPalette(e){return new m(e.name??"",e.palette,e.tone??m.getInitialToneFromBackground(e.background),e.isBackground??!1,e.chromaMultiplier,e.background,e.secondBackground,e.contrastCurve,e.toneDeltaPair)}static getInitialToneFromBackground(e){return e===void 0?t=>50:t=>e(t)?e(t).getTone(t):50}constructor(e,t,n,a,o,i,s,u,d){if(this.name=e,this.palette=t,this.tone=n,this.isBackground=a,this.chromaMultiplier=o,this.background=i,this.secondBackground=s,this.contrastCurve=u,this.toneDeltaPair=d,this.hctCache=new Map,!i&&s)throw Error(`Color ${e} has secondBackgrounddefined, but background is not defined.`);if(!i&&u)throw Error(`Color ${e} has contrastCurvedefined, but background is not defined.`);if(i&&!u)throw Error(`Color ${e} has backgrounddefined, but contrastCurve is not defined.`)}clone(){return m.fromPalette({name:this.name,palette:this.palette,tone:this.tone,isBackground:this.isBackground,chromaMultiplier:this.chromaMultiplier,background:this.background,secondBackground:this.secondBackground,contrastCurve:this.contrastCurve,toneDeltaPair:this.toneDeltaPair})}clearCache(){this.hctCache.clear()}getArgb(e){return this.getHct(e).toInt()}getHct(e){const t=this.hctCache.get(e);if(t!=null)return t;const n=pr(e.specVersion).getHct(e,this);return this.hctCache.size>4&&this.hctCache.clear(),this.hctCache.set(e,n),n}getTone(e){return pr(e.specVersion).getTone(e,this)}static foregroundTone(e,t){const n=V.lighterUnsafe(e,t),a=V.darkerUnsafe(e,t),o=V.ratioOfTones(n,e),i=V.ratioOfTones(a,e);return m.tonePrefersLightForeground(e)?o>=t||o>=i||.1>Math.abs(o-i)&&t>o&&t>i?n:a:t>i&&o>i?n:a}static tonePrefersLightForeground(e){return 60>Math.round(e)}static toneAllowsLightForeground(e){return 49>=Math.round(e)}static enableLightForeground(e){return m.tonePrefersLightForeground(e)&&!m.toneAllowsLightForeground(e)?49:e}}const ut=new class{getHct(r,e){const t=e.getTone(r);return e.palette(r).getHct(t)}getTone(r,e){const t=0>r.contrastLevel,n=e.toneDeltaPair?e.toneDeltaPair(r):void 0;if(n){const a=n.roleA,o=n.roleB,i=n.delta,s=n.polarity,u=n.stayTogether,d=s==="nearer"||s==="lighter"&&!r.isDark||s==="darker"&&r.isDark,h=d?a:o,p=d?o:a,g=e.name===h.name,v=r.isDark?1:-1;let f=h.tone(r),y=p.tone(r);if(e.background&&h.contrastCurve&&p.contrastCurve){const x=e.background(r),R=h.contrastCurve(r),E=p.contrastCurve(r);if(x&&R&&E){const A=x.getTone(r),L=R.get(r.contrastLevel),T=E.get(r.contrastLevel);V.ratioOfTones(A,f)<L&&(f=m.foregroundTone(A,L)),V.ratioOfTones(A,y)<T&&(y=m.foregroundTone(A,T)),t&&(f=m.foregroundTone(A,L),y=m.foregroundTone(A,T))}}return i>(y-f)*v&&(y=q(0,100,f+i*v),i>(y-f)*v&&(f=q(0,100,y-i*v))),f>=50&&60>f?v>0?(f=60,y=Math.max(y,f+i*v)):(f=49,y=Math.min(y,f+i*v)):y>=50&&60>y&&(u?v>0?(f=60,y=Math.max(y,f+i*v)):(f=49,y=Math.min(y,f+i*v)):y=v>0?60:49),g?f:y}{let a=e.tone(r);if(e.background==null||e.background(r)===void 0||e.contrastCurve==null||e.contrastCurve(r)===void 0)return a;const o=e.background(r).getTone(r),i=e.contrastCurve(r).get(r.contrastLevel);if(V.ratioOfTones(o,a)<i&&(a=m.foregroundTone(o,i)),t&&(a=m.foregroundTone(o,i)),e.isBackground&&a>=50&&60>a&&(a=V.ratioOfTones(49,o)<i?60:49),e.secondBackground==null||e.secondBackground(r)===void 0)return a;const[s,u]=[e.background,e.secondBackground],[d,h]=[s(r).getTone(r),u(r).getTone(r)],[p,g]=[Math.max(d,h),Math.min(d,h)];if(V.ratioOfTones(p,a)>=i&&V.ratioOfTones(g,a)>=i)return a;const v=V.lighter(p,i),f=V.darker(g,i),y=[];return v!==-1&&y.push(v),f!==-1&&y.push(f),m.tonePrefersLightForeground(d)||m.tonePrefersLightForeground(h)?0>v?100:v:y.length===1?y[0]:0>f?0:f}}},dt=new class{getHct(r,e){const t=e.palette(r),n=e.getTone(r),a=t.hue,o=t.chroma*(e.chromaMultiplier?e.chromaMultiplier(r):1);return D.from(a,o,n)}getTone(r,e){const t=e.toneDeltaPair?e.toneDeltaPair(r):void 0;if(t){const n=t.roleA,a=t.roleB,o=t.polarity,i=t.constraint,s=o==="darker"||o==="relative_lighter"&&r.isDark||o==="relative_darker"&&!r.isDark?-t.delta:t.delta,u=e.name===n.name,d=u?a:n;let h=(u?n:a).tone(r),p=d.getTone(r);const g=s*(u?1:-1);if(i==="exact"?h=q(0,100,p+g):i==="nearer"?h=q(0,100,g>0?q(p,p+g,h):q(p+g,p,h)):i==="farther"&&(h=g>0?q(p+g,100,h):q(0,p+g,h)),e.background&&e.contrastCurve){const v=e.background(r),f=e.contrastCurve(r);if(v&&f){const y=v.getTone(r),x=f.get(r.contrastLevel);h=V.ratioOfTones(y,h)<x||0>r.contrastLevel?m.foregroundTone(y,x):h}}return e.isBackground&&!e.name.endsWith("_fixed_dim")&&(h=57>h?q(0,49,h):q(65,100,h)),h}{let n=e.tone(r);if(e.background==null||e.background(r)===void 0||e.contrastCurve==null||e.contrastCurve(r)===void 0)return n;const a=e.background(r).getTone(r),o=e.contrastCurve(r).get(r.contrastLevel);if(n=V.ratioOfTones(a,n)<o||0>r.contrastLevel?m.foregroundTone(a,o):n,e.isBackground&&!e.name.endsWith("_fixed_dim")&&(n=57>n?q(0,49,n):q(65,100,n)),e.secondBackground==null||e.secondBackground(r)===void 0)return n;const[i,s]=[e.background,e.secondBackground],[u,d]=[i(r).getTone(r),s(r).getTone(r)],[h,p]=[Math.max(u,d),Math.min(u,d)];if(V.ratioOfTones(h,n)>=o&&V.ratioOfTones(p,n)>=o)return n;const g=V.lighter(h,o),v=V.darker(p,o),f=[];return g!==-1&&f.push(g),v!==-1&&f.push(v),m.tonePrefersLightForeground(u)||m.tonePrefersLightForeground(d)?0>g?100:g:f.length===1?f[0]:0>v?0:v}}};function pr(r){return r==="2025"?dt:ut}class P{constructor(e,t,n,a){this.low=e,this.normal=t,this.medium=n,this.high=a}get(e){return e>-1?0>e?he(this.low,this.normal,(e- -1)/1):.5>e?he(this.normal,this.medium,(e-0)/.5):1>e?he(this.medium,this.high,(e-.5)/.5):this.high:this.low}}class I{constructor(e,t,n,a,o,i){this.roleA=e,this.roleB=t,this.delta=n,this.polarity=a,this.stayTogether=o,this.constraint=i,this.constraint=i??"exact"}}var b;function ie(r){return r.variant===b.FIDELITY||r.variant===b.CONTENT}function O(r){return r.variant===b.MONOCHROME}(r=>{r[r.MONOCHROME=0]="MONOCHROME",r[r.NEUTRAL=1]="NEUTRAL",r[r.TONAL_SPOT=2]="TONAL_SPOT",r[r.VIBRANT=3]="VIBRANT",r[r.EXPRESSIVE=4]="EXPRESSIVE",r[r.FIDELITY=5]="FIDELITY",r[r.CONTENT=6]="CONTENT",r[r.RAINBOW=7]="RAINBOW",r[r.FRUIT_SALAD=8]="FRUIT_SALAD"})(b||(b={}));class ht{primaryPaletteKeyColor(){return m.fromPalette({name:"primary_palette_key_color",palette:e=>e.primaryPalette,tone:e=>e.primaryPalette.keyColor.tone})}secondaryPaletteKeyColor(){return m.fromPalette({name:"secondary_palette_key_color",palette:e=>e.secondaryPalette,tone:e=>e.secondaryPalette.keyColor.tone})}tertiaryPaletteKeyColor(){return m.fromPalette({name:"tertiary_palette_key_color",palette:e=>e.tertiaryPalette,tone:e=>e.tertiaryPalette.keyColor.tone})}neutralPaletteKeyColor(){return m.fromPalette({name:"neutral_palette_key_color",palette:e=>e.neutralPalette,tone:e=>e.neutralPalette.keyColor.tone})}neutralVariantPaletteKeyColor(){return m.fromPalette({name:"neutral_variant_palette_key_color",palette:e=>e.neutralVariantPalette,tone:e=>e.neutralVariantPalette.keyColor.tone})}errorPaletteKeyColor(){return m.fromPalette({name:"error_palette_key_color",palette:e=>e.errorPalette,tone:e=>e.errorPalette.keyColor.tone})}background(){return m.fromPalette({name:"background",palette:e=>e.neutralPalette,tone:e=>e.isDark?6:98,isBackground:!0})}onBackground(){return m.fromPalette({name:"on_background",palette:e=>e.neutralPalette,tone:e=>e.isDark?90:10,background:e=>this.background(),contrastCurve:e=>new P(3,3,4.5,7)})}surface(){return m.fromPalette({name:"surface",palette:e=>e.neutralPalette,tone:e=>e.isDark?6:98,isBackground:!0})}surfaceDim(){return m.fromPalette({name:"surface_dim",palette:e=>e.neutralPalette,tone:e=>e.isDark?6:new P(87,87,80,75).get(e.contrastLevel),isBackground:!0})}surfaceBright(){return m.fromPalette({name:"surface_bright",palette:e=>e.neutralPalette,tone:e=>e.isDark?new P(24,24,29,34).get(e.contrastLevel):98,isBackground:!0})}surfaceContainerLowest(){return m.fromPalette({name:"surface_container_lowest",palette:e=>e.neutralPalette,tone:e=>e.isDark?new P(4,4,2,0).get(e.contrastLevel):100,isBackground:!0})}surfaceContainerLow(){return m.fromPalette({name:"surface_container_low",palette:e=>e.neutralPalette,tone:e=>e.isDark?new P(10,10,11,12).get(e.contrastLevel):new P(96,96,96,95).get(e.contrastLevel),isBackground:!0})}surfaceContainer(){return m.fromPalette({name:"surface_container",palette:e=>e.neutralPalette,tone:e=>e.isDark?new P(12,12,16,20).get(e.contrastLevel):new P(94,94,92,90).get(e.contrastLevel),isBackground:!0})}surfaceContainerHigh(){return m.fromPalette({name:"surface_container_high",palette:e=>e.neutralPalette,tone:e=>e.isDark?new P(17,17,21,25).get(e.contrastLevel):new P(92,92,88,85).get(e.contrastLevel),isBackground:!0})}surfaceContainerHighest(){return m.fromPalette({name:"surface_container_highest",palette:e=>e.neutralPalette,tone:e=>e.isDark?new P(22,22,26,30).get(e.contrastLevel):new P(90,90,84,80).get(e.contrastLevel),isBackground:!0})}onSurface(){return m.fromPalette({name:"on_surface",palette:e=>e.neutralPalette,tone:e=>e.isDark?90:10,background:e=>this.highestSurface(e),contrastCurve:e=>new P(4.5,7,11,21)})}surfaceVariant(){return m.fromPalette({name:"surface_variant",palette:e=>e.neutralVariantPalette,tone:e=>e.isDark?30:90,isBackground:!0})}onSurfaceVariant(){return m.fromPalette({name:"on_surface_variant",palette:e=>e.neutralVariantPalette,tone:e=>e.isDark?80:30,background:e=>this.highestSurface(e),contrastCurve:e=>new P(3,4.5,7,11)})}inverseSurface(){return m.fromPalette({name:"inverse_surface",palette:e=>e.neutralPalette,tone:e=>e.isDark?90:20,isBackground:!0})}inverseOnSurface(){return m.fromPalette({name:"inverse_on_surface",palette:e=>e.neutralPalette,tone:e=>e.isDark?20:95,background:e=>this.inverseSurface(),contrastCurve:e=>new P(4.5,7,11,21)})}outline(){return m.fromPalette({name:"outline",palette:e=>e.neutralVariantPalette,tone:e=>e.isDark?60:50,background:e=>this.highestSurface(e),contrastCurve:e=>new P(1.5,3,4.5,7)})}outlineVariant(){return m.fromPalette({name:"outline_variant",palette:e=>e.neutralVariantPalette,tone:e=>e.isDark?30:80,background:e=>this.highestSurface(e),contrastCurve:e=>new P(1,1,3,4.5)})}shadow(){return m.fromPalette({name:"shadow",palette:e=>e.neutralPalette,tone:e=>0})}scrim(){return m.fromPalette({name:"scrim",palette:e=>e.neutralPalette,tone:e=>0})}surfaceTint(){return m.fromPalette({name:"surface_tint",palette:e=>e.primaryPalette,tone:e=>e.isDark?80:40,isBackground:!0})}primary(){return m.fromPalette({name:"primary",palette:e=>e.primaryPalette,tone:e=>O(e)?e.isDark?100:0:e.isDark?80:40,isBackground:!0,background:e=>this.highestSurface(e),contrastCurve:e=>new P(3,4.5,7,7),toneDeltaPair:e=>new I(this.primaryContainer(),this.primary(),10,"nearer",!1)})}primaryDim(){}onPrimary(){return m.fromPalette({name:"on_primary",palette:e=>e.primaryPalette,tone:e=>O(e)?e.isDark?10:90:e.isDark?20:100,background:e=>this.primary(),contrastCurve:e=>new P(4.5,7,11,21)})}primaryContainer(){return m.fromPalette({name:"primary_container",palette:e=>e.primaryPalette,tone:e=>ie(e)?e.sourceColorHct.tone:O(e)?e.isDark?85:25:e.isDark?30:90,isBackground:!0,background:e=>this.highestSurface(e),contrastCurve:e=>new P(1,1,3,4.5),toneDeltaPair:e=>new I(this.primaryContainer(),this.primary(),10,"nearer",!1)})}onPrimaryContainer(){return m.fromPalette({name:"on_primary_container",palette:e=>e.primaryPalette,tone:e=>ie(e)?m.foregroundTone(this.primaryContainer().tone(e),4.5):O(e)?e.isDark?0:100:e.isDark?90:30,background:e=>this.primaryContainer(),contrastCurve:e=>new P(3,4.5,7,11)})}inversePrimary(){return m.fromPalette({name:"inverse_primary",palette:e=>e.primaryPalette,tone:e=>e.isDark?40:80,background:e=>this.inverseSurface(),contrastCurve:e=>new P(3,4.5,7,7)})}secondary(){return m.fromPalette({name:"secondary",palette:e=>e.secondaryPalette,tone:e=>e.isDark?80:40,isBackground:!0,background:e=>this.highestSurface(e),contrastCurve:e=>new P(3,4.5,7,7),toneDeltaPair:e=>new I(this.secondaryContainer(),this.secondary(),10,"nearer",!1)})}secondaryDim(){}onSecondary(){return m.fromPalette({name:"on_secondary",palette:e=>e.secondaryPalette,tone:e=>O(e)?e.isDark?10:100:e.isDark?20:100,background:e=>this.secondary(),contrastCurve:e=>new P(4.5,7,11,21)})}secondaryContainer(){return m.fromPalette({name:"secondary_container",palette:e=>e.secondaryPalette,tone(e){const t=e.isDark?30:90;return O(e)?e.isDark?30:85:ie(e)?((n,a,o,i)=>{let s=o,u=D.from(n,a,o);if(u.chroma<a){let d=u.chroma;for(;u.chroma<a;){s+=i?-1:1;const h=D.from(n,a,s);if(d>h.chroma||.4>Math.abs(h.chroma-a))break;const p=Math.abs(h.chroma-a);Math.abs(u.chroma-a)>p&&(u=h),d=Math.max(d,h.chroma)}}return s})(e.secondaryPalette.hue,e.secondaryPalette.chroma,t,!e.isDark):t},isBackground:!0,background:e=>this.highestSurface(e),contrastCurve:e=>new P(1,1,3,4.5),toneDeltaPair:e=>new I(this.secondaryContainer(),this.secondary(),10,"nearer",!1)})}onSecondaryContainer(){return m.fromPalette({name:"on_secondary_container",palette:e=>e.secondaryPalette,tone:e=>O(e)?e.isDark?90:10:ie(e)?m.foregroundTone(this.secondaryContainer().tone(e),4.5):e.isDark?90:30,background:e=>this.secondaryContainer(),contrastCurve:e=>new P(3,4.5,7,11)})}tertiary(){return m.fromPalette({name:"tertiary",palette:e=>e.tertiaryPalette,tone:e=>O(e)?e.isDark?90:25:e.isDark?80:40,isBackground:!0,background:e=>this.highestSurface(e),contrastCurve:e=>new P(3,4.5,7,7),toneDeltaPair:e=>new I(this.tertiaryContainer(),this.tertiary(),10,"nearer",!1)})}tertiaryDim(){}onTertiary(){return m.fromPalette({name:"on_tertiary",palette:e=>e.tertiaryPalette,tone:e=>O(e)?e.isDark?10:90:e.isDark?20:100,background:e=>this.tertiary(),contrastCurve:e=>new P(4.5,7,11,21)})}tertiaryContainer(){return m.fromPalette({name:"tertiary_container",palette:e=>e.tertiaryPalette,tone(e){if(O(e))return e.isDark?60:49;if(!ie(e))return e.isDark?30:90;const t=e.tertiaryPalette.getHct(e.sourceColorHct.tone);return Ge.fixIfDisliked(t).tone},isBackground:!0,background:e=>this.highestSurface(e),contrastCurve:e=>new P(1,1,3,4.5),toneDeltaPair:e=>new I(this.tertiaryContainer(),this.tertiary(),10,"nearer",!1)})}onTertiaryContainer(){return m.fromPalette({name:"on_tertiary_container",palette:e=>e.tertiaryPalette,tone:e=>O(e)?e.isDark?0:100:ie(e)?m.foregroundTone(this.tertiaryContainer().tone(e),4.5):e.isDark?90:30,background:e=>this.tertiaryContainer(),contrastCurve:e=>new P(3,4.5,7,11)})}error(){return m.fromPalette({name:"error",palette:e=>e.errorPalette,tone:e=>e.isDark?80:40,isBackground:!0,background:e=>this.highestSurface(e),contrastCurve:e=>new P(3,4.5,7,7),toneDeltaPair:e=>new I(this.errorContainer(),this.error(),10,"nearer",!1)})}errorDim(){}onError(){return m.fromPalette({name:"on_error",palette:e=>e.errorPalette,tone:e=>e.isDark?20:100,background:e=>this.error(),contrastCurve:e=>new P(4.5,7,11,21)})}errorContainer(){return m.fromPalette({name:"error_container",palette:e=>e.errorPalette,tone:e=>e.isDark?30:90,isBackground:!0,background:e=>this.highestSurface(e),contrastCurve:e=>new P(1,1,3,4.5),toneDeltaPair:e=>new I(this.errorContainer(),this.error(),10,"nearer",!1)})}onErrorContainer(){return m.fromPalette({name:"on_error_container",palette:e=>e.errorPalette,tone:e=>O(e)?e.isDark?90:10:e.isDark?90:30,background:e=>this.errorContainer(),contrastCurve:e=>new P(3,4.5,7,11)})}primaryFixed(){return m.fromPalette({name:"primary_fixed",palette:e=>e.primaryPalette,tone:e=>O(e)?40:90,isBackground:!0,background:e=>this.highestSurface(e),contrastCurve:e=>new P(1,1,3,4.5),toneDeltaPair:e=>new I(this.primaryFixed(),this.primaryFixedDim(),10,"lighter",!0)})}primaryFixedDim(){return m.fromPalette({name:"primary_fixed_dim",palette:e=>e.primaryPalette,tone:e=>O(e)?30:80,isBackground:!0,background:e=>this.highestSurface(e),contrastCurve:e=>new P(1,1,3,4.5),toneDeltaPair:e=>new I(this.primaryFixed(),this.primaryFixedDim(),10,"lighter",!0)})}onPrimaryFixed(){return m.fromPalette({name:"on_primary_fixed",palette:e=>e.primaryPalette,tone:e=>O(e)?100:10,background:e=>this.primaryFixedDim(),secondBackground:e=>this.primaryFixed(),contrastCurve:e=>new P(4.5,7,11,21)})}onPrimaryFixedVariant(){return m.fromPalette({name:"on_primary_fixed_variant",palette:e=>e.primaryPalette,tone:e=>O(e)?90:30,background:e=>this.primaryFixedDim(),secondBackground:e=>this.primaryFixed(),contrastCurve:e=>new P(3,4.5,7,11)})}secondaryFixed(){return m.fromPalette({name:"secondary_fixed",palette:e=>e.secondaryPalette,tone:e=>O(e)?80:90,isBackground:!0,background:e=>this.highestSurface(e),contrastCurve:e=>new P(1,1,3,4.5),toneDeltaPair:e=>new I(this.secondaryFixed(),this.secondaryFixedDim(),10,"lighter",!0)})}secondaryFixedDim(){return m.fromPalette({name:"secondary_fixed_dim",palette:e=>e.secondaryPalette,tone:e=>O(e)?70:80,isBackground:!0,background:e=>this.highestSurface(e),contrastCurve:e=>new P(1,1,3,4.5),toneDeltaPair:e=>new I(this.secondaryFixed(),this.secondaryFixedDim(),10,"lighter",!0)})}onSecondaryFixed(){return m.fromPalette({name:"on_secondary_fixed",palette:e=>e.secondaryPalette,tone:e=>10,background:e=>this.secondaryFixedDim(),secondBackground:e=>this.secondaryFixed(),contrastCurve:e=>new P(4.5,7,11,21)})}onSecondaryFixedVariant(){return m.fromPalette({name:"on_secondary_fixed_variant",palette:e=>e.secondaryPalette,tone:e=>O(e)?25:30,background:e=>this.secondaryFixedDim(),secondBackground:e=>this.secondaryFixed(),contrastCurve:e=>new P(3,4.5,7,11)})}tertiaryFixed(){return m.fromPalette({name:"tertiary_fixed",palette:e=>e.tertiaryPalette,tone:e=>O(e)?40:90,isBackground:!0,background:e=>this.highestSurface(e),contrastCurve:e=>new P(1,1,3,4.5),toneDeltaPair:e=>new I(this.tertiaryFixed(),this.tertiaryFixedDim(),10,"lighter",!0)})}tertiaryFixedDim(){return m.fromPalette({name:"tertiary_fixed_dim",palette:e=>e.tertiaryPalette,tone:e=>O(e)?30:80,isBackground:!0,background:e=>this.highestSurface(e),contrastCurve:e=>new P(1,1,3,4.5),toneDeltaPair:e=>new I(this.tertiaryFixed(),this.tertiaryFixedDim(),10,"lighter",!0)})}onTertiaryFixed(){return m.fromPalette({name:"on_tertiary_fixed",palette:e=>e.tertiaryPalette,tone:e=>O(e)?100:10,background:e=>this.tertiaryFixedDim(),secondBackground:e=>this.tertiaryFixed(),contrastCurve:e=>new P(4.5,7,11,21)})}onTertiaryFixedVariant(){return m.fromPalette({name:"on_tertiary_fixed_variant",palette:e=>e.tertiaryPalette,tone:e=>O(e)?90:30,background:e=>this.tertiaryFixedDim(),secondBackground:e=>this.tertiaryFixed(),contrastCurve:e=>new P(3,4.5,7,11)})}highestSurface(e){return e.isDark?this.surfaceBright():this.surfaceDim()}}function S(r,e=0,t=100,n=1){return q(e,t,Lr(r.hue,r.chroma*n,100,!0))}function J(r,e=0,t=100){return q(e,t,Lr(r.hue,r.chroma,0,!1))}function Lr(r,e,t,n){let a=t,o=D.from(r,e,a);for(;o.chroma<e&&t>=0&&100>=t;){t+=n?-1:1;const i=D.from(r,e,t);o.chroma<i.chroma&&(o=i,a=t)}return a}function k(r){return r===1.5?new P(1.5,1.5,3,4.5):r===3?new P(3,3,4.5,7):r===4.5?new P(4.5,4.5,7,11):r===6?new P(6,6,7,11):r===7?new P(7,7,11,21):r===9?new P(9,9,11,21):r===11?new P(11,11,21,21):r===21?new P(21,21,21,21):new P(r,r,7,21)}class l{constructor(){this.allColors=[this.background(),this.onBackground(),this.surface(),this.surfaceDim(),this.surfaceBright(),this.surfaceContainerLowest(),this.surfaceContainerLow(),this.surfaceContainer(),this.surfaceContainerHigh(),this.surfaceContainerHighest(),this.onSurface(),this.onSurfaceVariant(),this.outline(),this.outlineVariant(),this.inverseSurface(),this.inverseOnSurface(),this.primary(),this.primaryDim(),this.onPrimary(),this.primaryContainer(),this.onPrimaryContainer(),this.primaryFixed(),this.primaryFixedDim(),this.onPrimaryFixed(),this.onPrimaryFixedVariant(),this.inversePrimary(),this.secondary(),this.secondaryDim(),this.onSecondary(),this.secondaryContainer(),this.onSecondaryContainer(),this.secondaryFixed(),this.secondaryFixedDim(),this.onSecondaryFixed(),this.onSecondaryFixedVariant(),this.tertiary(),this.tertiaryDim(),this.onTertiary(),this.tertiaryContainer(),this.onTertiaryContainer(),this.tertiaryFixed(),this.tertiaryFixedDim(),this.onTertiaryFixed(),this.onTertiaryFixedVariant(),this.error(),this.errorDim(),this.onError(),this.errorContainer(),this.onErrorContainer()].filter(e=>e!==void 0)}highestSurface(e){return l.colorSpec.highestSurface(e)}primaryPaletteKeyColor(){return l.colorSpec.primaryPaletteKeyColor()}secondaryPaletteKeyColor(){return l.colorSpec.secondaryPaletteKeyColor()}tertiaryPaletteKeyColor(){return l.colorSpec.tertiaryPaletteKeyColor()}neutralPaletteKeyColor(){return l.colorSpec.neutralPaletteKeyColor()}neutralVariantPaletteKeyColor(){return l.colorSpec.neutralVariantPaletteKeyColor()}errorPaletteKeyColor(){return l.colorSpec.errorPaletteKeyColor()}background(){return l.colorSpec.background()}onBackground(){return l.colorSpec.onBackground()}surface(){return l.colorSpec.surface()}surfaceDim(){return l.colorSpec.surfaceDim()}surfaceBright(){return l.colorSpec.surfaceBright()}surfaceContainerLowest(){return l.colorSpec.surfaceContainerLowest()}surfaceContainerLow(){return l.colorSpec.surfaceContainerLow()}surfaceContainer(){return l.colorSpec.surfaceContainer()}surfaceContainerHigh(){return l.colorSpec.surfaceContainerHigh()}surfaceContainerHighest(){return l.colorSpec.surfaceContainerHighest()}onSurface(){return l.colorSpec.onSurface()}surfaceVariant(){return l.colorSpec.surfaceVariant()}onSurfaceVariant(){return l.colorSpec.onSurfaceVariant()}outline(){return l.colorSpec.outline()}outlineVariant(){return l.colorSpec.outlineVariant()}inverseSurface(){return l.colorSpec.inverseSurface()}inverseOnSurface(){return l.colorSpec.inverseOnSurface()}shadow(){return l.colorSpec.shadow()}scrim(){return l.colorSpec.scrim()}surfaceTint(){return l.colorSpec.surfaceTint()}primary(){return l.colorSpec.primary()}primaryDim(){return l.colorSpec.primaryDim()}onPrimary(){return l.colorSpec.onPrimary()}primaryContainer(){return l.colorSpec.primaryContainer()}onPrimaryContainer(){return l.colorSpec.onPrimaryContainer()}inversePrimary(){return l.colorSpec.inversePrimary()}primaryFixed(){return l.colorSpec.primaryFixed()}primaryFixedDim(){return l.colorSpec.primaryFixedDim()}onPrimaryFixed(){return l.colorSpec.onPrimaryFixed()}onPrimaryFixedVariant(){return l.colorSpec.onPrimaryFixedVariant()}secondary(){return l.colorSpec.secondary()}secondaryDim(){return l.colorSpec.secondaryDim()}onSecondary(){return l.colorSpec.onSecondary()}secondaryContainer(){return l.colorSpec.secondaryContainer()}onSecondaryContainer(){return l.colorSpec.onSecondaryContainer()}secondaryFixed(){return l.colorSpec.secondaryFixed()}secondaryFixedDim(){return l.colorSpec.secondaryFixedDim()}onSecondaryFixed(){return l.colorSpec.onSecondaryFixed()}onSecondaryFixedVariant(){return l.colorSpec.onSecondaryFixedVariant()}tertiary(){return l.colorSpec.tertiary()}tertiaryDim(){return l.colorSpec.tertiaryDim()}onTertiary(){return l.colorSpec.onTertiary()}tertiaryContainer(){return l.colorSpec.tertiaryContainer()}onTertiaryContainer(){return l.colorSpec.onTertiaryContainer()}tertiaryFixed(){return l.colorSpec.tertiaryFixed()}tertiaryFixedDim(){return l.colorSpec.tertiaryFixedDim()}onTertiaryFixed(){return l.colorSpec.onTertiaryFixed()}onTertiaryFixedVariant(){return l.colorSpec.onTertiaryFixedVariant()}error(){return l.colorSpec.error()}errorDim(){return l.colorSpec.errorDim()}onError(){return l.colorSpec.onError()}errorContainer(){return l.colorSpec.errorContainer()}onErrorContainer(){return l.colorSpec.onErrorContainer()}static highestSurface(e){return l.colorSpec.highestSurface(e)}}l.contentAccentToneDelta=15,l.colorSpec=new class extends ht{surface(){const r=m.fromPalette({name:"surface",palette:e=>e.neutralPalette,tone:e=>(super.surface().tone(e),e.platform==="phone"?e.isDark?4:D.isYellow(e.neutralPalette.hue)?99:e.variant===b.VIBRANT?97:98:0),isBackground:!0});return C(super.surface(),"2025",r)}surfaceDim(){const r=m.fromPalette({name:"surface_dim",palette:e=>e.neutralPalette,tone:e=>e.isDark?4:D.isYellow(e.neutralPalette.hue)?90:e.variant===b.VIBRANT?85:87,isBackground:!0,chromaMultiplier(e){if(!e.isDark){if(e.variant===b.NEUTRAL)return 2.5;if(e.variant===b.TONAL_SPOT)return 1.7;if(e.variant===b.EXPRESSIVE)return D.isYellow(e.neutralPalette.hue)?2.7:1.75;if(e.variant===b.VIBRANT)return 1.36}return 1}});return C(super.surfaceDim(),"2025",r)}surfaceBright(){const r=m.fromPalette({name:"surface_bright",palette:e=>e.neutralPalette,tone:e=>e.isDark?18:D.isYellow(e.neutralPalette.hue)?99:e.variant===b.VIBRANT?97:98,isBackground:!0,chromaMultiplier(e){if(e.isDark){if(e.variant===b.NEUTRAL)return 2.5;if(e.variant===b.TONAL_SPOT)return 1.7;if(e.variant===b.EXPRESSIVE)return D.isYellow(e.neutralPalette.hue)?2.7:1.75;if(e.variant===b.VIBRANT)return 1.36}return 1}});return C(super.surfaceBright(),"2025",r)}surfaceContainerLowest(){const r=m.fromPalette({name:"surface_container_lowest",palette:e=>e.neutralPalette,tone:e=>e.isDark?0:100,isBackground:!0});return C(super.surfaceContainerLowest(),"2025",r)}surfaceContainerLow(){const r=m.fromPalette({name:"surface_container_low",palette:e=>e.neutralPalette,tone:e=>e.platform==="phone"?e.isDark?6:D.isYellow(e.neutralPalette.hue)?98:e.variant===b.VIBRANT?95:96:15,isBackground:!0,chromaMultiplier(e){if(e.platform==="phone"){if(e.variant===b.NEUTRAL)return 1.3;if(e.variant===b.TONAL_SPOT)return 1.25;if(e.variant===b.EXPRESSIVE)return D.isYellow(e.neutralPalette.hue)?1.3:1.15;if(e.variant===b.VIBRANT)return 1.08}return 1}});return C(super.surfaceContainerLow(),"2025",r)}surfaceContainer(){const r=m.fromPalette({name:"surface_container",palette:e=>e.neutralPalette,tone:e=>e.platform==="phone"?e.isDark?9:D.isYellow(e.neutralPalette.hue)?96:e.variant===b.VIBRANT?92:94:20,isBackground:!0,chromaMultiplier(e){if(e.platform==="phone"){if(e.variant===b.NEUTRAL)return 1.6;if(e.variant===b.TONAL_SPOT)return 1.4;if(e.variant===b.EXPRESSIVE)return D.isYellow(e.neutralPalette.hue)?1.6:1.3;if(e.variant===b.VIBRANT)return 1.15}return 1}});return C(super.surfaceContainer(),"2025",r)}surfaceContainerHigh(){const r=m.fromPalette({name:"surface_container_high",palette:e=>e.neutralPalette,tone:e=>e.platform==="phone"?e.isDark?12:D.isYellow(e.neutralPalette.hue)?94:e.variant===b.VIBRANT?90:92:25,isBackground:!0,chromaMultiplier(e){if(e.platform==="phone"){if(e.variant===b.NEUTRAL)return 1.9;if(e.variant===b.TONAL_SPOT)return 1.5;if(e.variant===b.EXPRESSIVE)return D.isYellow(e.neutralPalette.hue)?1.95:1.45;if(e.variant===b.VIBRANT)return 1.22}return 1}});return C(super.surfaceContainerHigh(),"2025",r)}surfaceContainerHighest(){const r=m.fromPalette({name:"surface_container_highest",palette:e=>e.neutralPalette,tone:e=>e.isDark?15:D.isYellow(e.neutralPalette.hue)?92:e.variant===b.VIBRANT?88:90,isBackground:!0,chromaMultiplier:e=>e.variant===b.NEUTRAL?2.2:e.variant===b.TONAL_SPOT?1.7:e.variant===b.EXPRESSIVE?D.isYellow(e.neutralPalette.hue)?2.3:1.6:e.variant===b.VIBRANT?1.29:1});return C(super.surfaceContainerHighest(),"2025",r)}onSurface(){const r=m.fromPalette({name:"on_surface",palette:e=>e.neutralPalette,tone:e=>e.variant===b.VIBRANT?S(e.neutralPalette,0,100,1.1):m.getInitialToneFromBackground(t=>t.platform==="phone"?this.highestSurface(t):this.surfaceContainerHigh())(e),chromaMultiplier(e){if(e.platform==="phone"){if(e.variant===b.NEUTRAL)return 2.2;if(e.variant===b.TONAL_SPOT)return 1.7;if(e.variant===b.EXPRESSIVE)return D.isYellow(e.neutralPalette.hue)?e.isDark?3:2.3:1.6}return 1},background:e=>e.platform==="phone"?this.highestSurface(e):this.surfaceContainerHigh(),contrastCurve:e=>e.isDark?k(11):k(9)});return C(super.onSurface(),"2025",r)}onSurfaceVariant(){const r=m.fromPalette({name:"on_surface_variant",palette:e=>e.neutralPalette,chromaMultiplier(e){if(e.platform==="phone"){if(e.variant===b.NEUTRAL)return 2.2;if(e.variant===b.TONAL_SPOT)return 1.7;if(e.variant===b.EXPRESSIVE)return D.isYellow(e.neutralPalette.hue)?e.isDark?3:2.3:1.6}return 1},background:e=>e.platform==="phone"?this.highestSurface(e):this.surfaceContainerHigh(),contrastCurve:e=>e.platform==="phone"?e.isDark?k(6):k(4.5):k(7)});return C(super.onSurfaceVariant(),"2025",r)}outline(){const r=m.fromPalette({name:"outline",palette:e=>e.neutralPalette,chromaMultiplier(e){if(e.platform==="phone"){if(e.variant===b.NEUTRAL)return 2.2;if(e.variant===b.TONAL_SPOT)return 1.7;if(e.variant===b.EXPRESSIVE)return D.isYellow(e.neutralPalette.hue)?e.isDark?3:2.3:1.6}return 1},background:e=>e.platform==="phone"?this.highestSurface(e):this.surfaceContainerHigh(),contrastCurve:e=>e.platform==="phone"?k(3):k(4.5)});return C(super.outline(),"2025",r)}outlineVariant(){const r=m.fromPalette({name:"outline_variant",palette:e=>e.neutralPalette,chromaMultiplier(e){if(e.platform==="phone"){if(e.variant===b.NEUTRAL)return 2.2;if(e.variant===b.TONAL_SPOT)return 1.7;if(e.variant===b.EXPRESSIVE)return D.isYellow(e.neutralPalette.hue)?e.isDark?3:2.3:1.6}return 1},background:e=>e.platform==="phone"?this.highestSurface(e):this.surfaceContainerHigh(),contrastCurve:e=>e.platform==="phone"?k(1.5):k(3)});return C(super.outlineVariant(),"2025",r)}inverseSurface(){const r=m.fromPalette({name:"inverse_surface",palette:e=>e.neutralPalette,tone:e=>e.isDark?98:4,isBackground:!0});return C(super.inverseSurface(),"2025",r)}inverseOnSurface(){const r=m.fromPalette({name:"inverse_on_surface",palette:e=>e.neutralPalette,background:e=>this.inverseSurface(),contrastCurve:e=>k(7)});return C(super.inverseOnSurface(),"2025",r)}primary(){const r=m.fromPalette({name:"primary",palette:e=>e.primaryPalette,tone:e=>e.variant===b.NEUTRAL?e.platform==="phone"?e.isDark?80:40:90:e.variant===b.TONAL_SPOT?e.platform==="phone"?e.isDark?80:S(e.primaryPalette):S(e.primaryPalette,0,90):e.variant===b.EXPRESSIVE?S(e.primaryPalette,0,D.isYellow(e.primaryPalette.hue)?25:D.isCyan(e.primaryPalette.hue)?88:98):S(e.primaryPalette,0,D.isCyan(e.primaryPalette.hue)?88:98),isBackground:!0,background:e=>e.platform==="phone"?this.highestSurface(e):this.surfaceContainerHigh(),contrastCurve:e=>e.platform==="phone"?k(4.5):k(7),toneDeltaPair:e=>e.platform==="phone"?new I(this.primaryContainer(),this.primary(),5,"relative_lighter",!0,"farther"):void 0});return C(super.primary(),"2025",r)}primaryDim(){return m.fromPalette({name:"primary_dim",palette:r=>r.primaryPalette,tone:r=>r.variant===b.NEUTRAL?85:r.variant===b.TONAL_SPOT?S(r.primaryPalette,0,90):S(r.primaryPalette),isBackground:!0,background:r=>this.surfaceContainerHigh(),contrastCurve:r=>k(4.5),toneDeltaPair:r=>new I(this.primaryDim(),this.primary(),5,"darker",!0,"farther")})}onPrimary(){const r=m.fromPalette({name:"on_primary",palette:e=>e.primaryPalette,background:e=>e.platform==="phone"?this.primary():this.primaryDim(),contrastCurve:e=>e.platform==="phone"?k(6):k(7)});return C(super.onPrimary(),"2025",r)}primaryContainer(){const r=m.fromPalette({name:"primary_container",palette:e=>e.primaryPalette,tone:e=>e.platform==="watch"?30:e.variant===b.NEUTRAL?e.isDark?30:90:e.variant===b.TONAL_SPOT?e.isDark?J(e.primaryPalette,35,93):S(e.primaryPalette,0,90):e.variant===b.EXPRESSIVE?e.isDark?S(e.primaryPalette,30,93):S(e.primaryPalette,78,D.isCyan(e.primaryPalette.hue)?88:90):e.isDark?J(e.primaryPalette,66,93):S(e.primaryPalette,66,D.isCyan(e.primaryPalette.hue)?88:93),isBackground:!0,background:e=>e.platform==="phone"?this.highestSurface(e):void 0,toneDeltaPair:e=>e.platform==="phone"?void 0:new I(this.primaryContainer(),this.primaryDim(),10,"darker",!0,"farther"),contrastCurve:e=>e.platform==="phone"&&e.contrastLevel>0?k(1.5):void 0});return C(super.primaryContainer(),"2025",r)}onPrimaryContainer(){const r=m.fromPalette({name:"on_primary_container",palette:e=>e.primaryPalette,background:e=>this.primaryContainer(),contrastCurve:e=>e.platform==="phone"?k(6):k(7)});return C(super.onPrimaryContainer(),"2025",r)}primaryFixed(){const r=m.fromPalette({name:"primary_fixed",palette:e=>e.primaryPalette,tone:e=>{let t=Object.assign({},e,{isDark:!1,contrastLevel:0});return this.primaryContainer().getTone(t)},isBackground:!0,background:e=>e.platform==="phone"?this.highestSurface(e):void 0,contrastCurve:e=>e.platform==="phone"&&e.contrastLevel>0?k(1.5):void 0});return C(super.primaryFixed(),"2025",r)}primaryFixedDim(){const r=m.fromPalette({name:"primary_fixed_dim",palette:e=>e.primaryPalette,tone:e=>this.primaryFixed().getTone(e),isBackground:!0,toneDeltaPair:e=>new I(this.primaryFixedDim(),this.primaryFixed(),5,"darker",!0,"exact")});return C(super.primaryFixedDim(),"2025",r)}onPrimaryFixed(){const r=m.fromPalette({name:"on_primary_fixed",palette:e=>e.primaryPalette,background:e=>this.primaryFixedDim(),contrastCurve:e=>k(7)});return C(super.onPrimaryFixed(),"2025",r)}onPrimaryFixedVariant(){const r=m.fromPalette({name:"on_primary_fixed_variant",palette:e=>e.primaryPalette,background:e=>this.primaryFixedDim(),contrastCurve:e=>k(4.5)});return C(super.onPrimaryFixedVariant(),"2025",r)}inversePrimary(){const r=m.fromPalette({name:"inverse_primary",palette:e=>e.primaryPalette,tone:e=>S(e.primaryPalette),background:e=>this.inverseSurface(),contrastCurve:e=>e.platform==="phone"?k(6):k(7)});return C(super.inversePrimary(),"2025",r)}secondary(){const r=m.fromPalette({name:"secondary",palette:e=>e.secondaryPalette,tone:e=>e.platform==="watch"?e.variant===b.NEUTRAL?90:S(e.secondaryPalette,0,90):e.variant===b.NEUTRAL?e.isDark?J(e.secondaryPalette,0,98):S(e.secondaryPalette):e.variant===b.VIBRANT?S(e.secondaryPalette,0,e.isDark?90:98):e.isDark?80:S(e.secondaryPalette),isBackground:!0,background:e=>e.platform==="phone"?this.highestSurface(e):this.surfaceContainerHigh(),contrastCurve:e=>e.platform==="phone"?k(4.5):k(7),toneDeltaPair:e=>e.platform==="phone"?new I(this.secondaryContainer(),this.secondary(),5,"relative_lighter",!0,"farther"):void 0});return C(super.secondary(),"2025",r)}secondaryDim(){return m.fromPalette({name:"secondary_dim",palette:r=>r.secondaryPalette,tone:r=>r.variant===b.NEUTRAL?85:S(r.secondaryPalette,0,90),isBackground:!0,background:r=>this.surfaceContainerHigh(),contrastCurve:r=>k(4.5),toneDeltaPair:r=>new I(this.secondaryDim(),this.secondary(),5,"darker",!0,"farther")})}onSecondary(){const r=m.fromPalette({name:"on_secondary",palette:e=>e.secondaryPalette,background:e=>e.platform==="phone"?this.secondary():this.secondaryDim(),contrastCurve:e=>e.platform==="phone"?k(6):k(7)});return C(super.onSecondary(),"2025",r)}secondaryContainer(){const r=m.fromPalette({name:"secondary_container",palette:e=>e.secondaryPalette,tone:e=>e.platform==="watch"?30:e.variant===b.VIBRANT?e.isDark?J(e.secondaryPalette,30,40):S(e.secondaryPalette,84,90):e.variant===b.EXPRESSIVE?e.isDark?15:S(e.secondaryPalette,90,95):e.isDark?25:90,isBackground:!0,background:e=>e.platform==="phone"?this.highestSurface(e):void 0,toneDeltaPair:e=>e.platform==="watch"?new I(this.secondaryContainer(),this.secondaryDim(),10,"darker",!0,"farther"):void 0,contrastCurve:e=>e.platform==="phone"&&e.contrastLevel>0?k(1.5):void 0});return C(super.secondaryContainer(),"2025",r)}onSecondaryContainer(){const r=m.fromPalette({name:"on_secondary_container",palette:e=>e.secondaryPalette,background:e=>this.secondaryContainer(),contrastCurve:e=>e.platform==="phone"?k(6):k(7)});return C(super.onSecondaryContainer(),"2025",r)}secondaryFixed(){const r=m.fromPalette({name:"secondary_fixed",palette:e=>e.secondaryPalette,tone:e=>{let t=Object.assign({},e,{isDark:!1,contrastLevel:0});return this.secondaryContainer().getTone(t)},isBackground:!0,background:e=>e.platform==="phone"?this.highestSurface(e):void 0,contrastCurve:e=>e.platform==="phone"&&e.contrastLevel>0?k(1.5):void 0});return C(super.secondaryFixed(),"2025",r)}secondaryFixedDim(){const r=m.fromPalette({name:"secondary_fixed_dim",palette:e=>e.secondaryPalette,tone:e=>this.secondaryFixed().getTone(e),isBackground:!0,toneDeltaPair:e=>new I(this.secondaryFixedDim(),this.secondaryFixed(),5,"darker",!0,"exact")});return C(super.secondaryFixedDim(),"2025",r)}onSecondaryFixed(){const r=m.fromPalette({name:"on_secondary_fixed",palette:e=>e.secondaryPalette,background:e=>this.secondaryFixedDim(),contrastCurve:e=>k(7)});return C(super.onSecondaryFixed(),"2025",r)}onSecondaryFixedVariant(){const r=m.fromPalette({name:"on_secondary_fixed_variant",palette:e=>e.secondaryPalette,background:e=>this.secondaryFixedDim(),contrastCurve:e=>k(4.5)});return C(super.onSecondaryFixedVariant(),"2025",r)}tertiary(){const r=m.fromPalette({name:"tertiary",palette:e=>e.tertiaryPalette,tone:e=>e.platform==="watch"?e.variant===b.TONAL_SPOT?S(e.tertiaryPalette,0,90):S(e.tertiaryPalette):e.variant===b.EXPRESSIVE||e.variant===b.VIBRANT?S(e.tertiaryPalette,0,D.isCyan(e.tertiaryPalette.hue)?88:e.isDark?98:100):e.isDark?S(e.tertiaryPalette,0,98):S(e.tertiaryPalette),isBackground:!0,background:e=>e.platform==="phone"?this.highestSurface(e):this.surfaceContainerHigh(),contrastCurve:e=>e.platform==="phone"?k(4.5):k(7),toneDeltaPair:e=>e.platform==="phone"?new I(this.tertiaryContainer(),this.tertiary(),5,"relative_lighter",!0,"farther"):void 0});return C(super.tertiary(),"2025",r)}tertiaryDim(){return m.fromPalette({name:"tertiary_dim",palette:r=>r.tertiaryPalette,tone:r=>r.variant===b.TONAL_SPOT?S(r.tertiaryPalette,0,90):S(r.tertiaryPalette),isBackground:!0,background:r=>this.surfaceContainerHigh(),contrastCurve:r=>k(4.5),toneDeltaPair:r=>new I(this.tertiaryDim(),this.tertiary(),5,"darker",!0,"farther")})}onTertiary(){const r=m.fromPalette({name:"on_tertiary",palette:e=>e.tertiaryPalette,background:e=>e.platform==="phone"?this.tertiary():this.tertiaryDim(),contrastCurve:e=>e.platform==="phone"?k(6):k(7)});return C(super.onTertiary(),"2025",r)}tertiaryContainer(){const r=m.fromPalette({name:"tertiary_container",palette:e=>e.tertiaryPalette,tone:e=>e.platform==="watch"?e.variant===b.TONAL_SPOT?S(e.tertiaryPalette,0,90):S(e.tertiaryPalette):e.variant===b.NEUTRAL?e.isDark?S(e.tertiaryPalette,0,93):S(e.tertiaryPalette,0,96):e.variant===b.TONAL_SPOT?S(e.tertiaryPalette,0,e.isDark?93:100):e.variant===b.EXPRESSIVE?S(e.tertiaryPalette,75,D.isCyan(e.tertiaryPalette.hue)?88:e.isDark?93:100):e.isDark?S(e.tertiaryPalette,0,93):S(e.tertiaryPalette,72,100),isBackground:!0,background:e=>e.platform==="phone"?this.highestSurface(e):void 0,toneDeltaPair:e=>e.platform==="watch"?new I(this.tertiaryContainer(),this.tertiaryDim(),10,"darker",!0,"farther"):void 0,contrastCurve:e=>e.platform==="phone"&&e.contrastLevel>0?k(1.5):void 0});return C(super.tertiaryContainer(),"2025",r)}onTertiaryContainer(){const r=m.fromPalette({name:"on_tertiary_container",palette:e=>e.tertiaryPalette,background:e=>this.tertiaryContainer(),contrastCurve:e=>e.platform==="phone"?k(6):k(7)});return C(super.onTertiaryContainer(),"2025",r)}tertiaryFixed(){const r=m.fromPalette({name:"tertiary_fixed",palette:e=>e.tertiaryPalette,tone:e=>{let t=Object.assign({},e,{isDark:!1,contrastLevel:0});return this.tertiaryContainer().getTone(t)},isBackground:!0,background:e=>e.platform==="phone"?this.highestSurface(e):void 0,contrastCurve:e=>e.platform==="phone"&&e.contrastLevel>0?k(1.5):void 0});return C(super.tertiaryFixed(),"2025",r)}tertiaryFixedDim(){const r=m.fromPalette({name:"tertiary_fixed_dim",palette:e=>e.tertiaryPalette,tone:e=>this.tertiaryFixed().getTone(e),isBackground:!0,toneDeltaPair:e=>new I(this.tertiaryFixedDim(),this.tertiaryFixed(),5,"darker",!0,"exact")});return C(super.tertiaryFixedDim(),"2025",r)}onTertiaryFixed(){const r=m.fromPalette({name:"on_tertiary_fixed",palette:e=>e.tertiaryPalette,background:e=>this.tertiaryFixedDim(),contrastCurve:e=>k(7)});return C(super.onTertiaryFixed(),"2025",r)}onTertiaryFixedVariant(){const r=m.fromPalette({name:"on_tertiary_fixed_variant",palette:e=>e.tertiaryPalette,background:e=>this.tertiaryFixedDim(),contrastCurve:e=>k(4.5)});return C(super.onTertiaryFixedVariant(),"2025",r)}error(){const r=m.fromPalette({name:"error",palette:e=>e.errorPalette,tone:e=>e.platform==="phone"?e.isDark?J(e.errorPalette,0,98):S(e.errorPalette):J(e.errorPalette),isBackground:!0,background:e=>e.platform==="phone"?this.highestSurface(e):this.surfaceContainerHigh(),contrastCurve:e=>e.platform==="phone"?k(4.5):k(7),toneDeltaPair:e=>e.platform==="phone"?new I(this.errorContainer(),this.error(),5,"relative_lighter",!0,"farther"):void 0});return C(super.error(),"2025",r)}errorDim(){return m.fromPalette({name:"error_dim",palette:r=>r.errorPalette,tone:r=>J(r.errorPalette),isBackground:!0,background:r=>this.surfaceContainerHigh(),contrastCurve:r=>k(4.5),toneDeltaPair:r=>new I(this.errorDim(),this.error(),5,"darker",!0,"farther")})}onError(){const r=m.fromPalette({name:"on_error",palette:e=>e.errorPalette,background:e=>e.platform==="phone"?this.error():this.errorDim(),contrastCurve:e=>e.platform==="phone"?k(6):k(7)});return C(super.onError(),"2025",r)}errorContainer(){const r=m.fromPalette({name:"error_container",palette:e=>e.errorPalette,tone:e=>e.platform==="watch"?30:e.isDark?J(e.errorPalette,30,93):S(e.errorPalette,0,90),isBackground:!0,background:e=>e.platform==="phone"?this.highestSurface(e):void 0,toneDeltaPair:e=>e.platform==="watch"?new I(this.errorContainer(),this.errorDim(),10,"darker",!0,"farther"):void 0,contrastCurve:e=>e.platform==="phone"&&e.contrastLevel>0?k(1.5):void 0});return C(super.errorContainer(),"2025",r)}onErrorContainer(){const r=m.fromPalette({name:"on_error_container",palette:e=>e.errorPalette,background:e=>this.errorContainer(),contrastCurve:e=>e.platform==="phone"?k(4.5):k(7)});return C(super.onErrorContainer(),"2025",r)}surfaceVariant(){const r=Object.assign(this.surfaceContainerHighest().clone(),{name:"surface_variant"});return C(super.surfaceVariant(),"2025",r)}surfaceTint(){const r=Object.assign(this.primary().clone(),{name:"surface_tint"});return C(super.surfaceTint(),"2025",r)}background(){const r=Object.assign(this.surface().clone(),{name:"background"});return C(super.background(),"2025",r)}onBackground(){const r=Object.assign(this.onSurface().clone(),{name:"on_background"});return C(super.onBackground(),"2025",r)}},l.primaryPaletteKeyColor=l.colorSpec.primaryPaletteKeyColor(),l.secondaryPaletteKeyColor=l.colorSpec.secondaryPaletteKeyColor(),l.tertiaryPaletteKeyColor=l.colorSpec.tertiaryPaletteKeyColor(),l.neutralPaletteKeyColor=l.colorSpec.neutralPaletteKeyColor(),l.neutralVariantPaletteKeyColor=l.colorSpec.neutralVariantPaletteKeyColor(),l.background=l.colorSpec.background(),l.onBackground=l.colorSpec.onBackground(),l.surface=l.colorSpec.surface(),l.surfaceDim=l.colorSpec.surfaceDim(),l.surfaceBright=l.colorSpec.surfaceBright(),l.surfaceContainerLowest=l.colorSpec.surfaceContainerLowest(),l.surfaceContainerLow=l.colorSpec.surfaceContainerLow(),l.surfaceContainer=l.colorSpec.surfaceContainer(),l.surfaceContainerHigh=l.colorSpec.surfaceContainerHigh(),l.surfaceContainerHighest=l.colorSpec.surfaceContainerHighest(),l.onSurface=l.colorSpec.onSurface(),l.surfaceVariant=l.colorSpec.surfaceVariant(),l.onSurfaceVariant=l.colorSpec.onSurfaceVariant(),l.inverseSurface=l.colorSpec.inverseSurface(),l.inverseOnSurface=l.colorSpec.inverseOnSurface(),l.outline=l.colorSpec.outline(),l.outlineVariant=l.colorSpec.outlineVariant(),l.shadow=l.colorSpec.shadow(),l.scrim=l.colorSpec.scrim(),l.surfaceTint=l.colorSpec.surfaceTint(),l.primary=l.colorSpec.primary(),l.onPrimary=l.colorSpec.onPrimary(),l.primaryContainer=l.colorSpec.primaryContainer(),l.onPrimaryContainer=l.colorSpec.onPrimaryContainer(),l.inversePrimary=l.colorSpec.inversePrimary(),l.secondary=l.colorSpec.secondary(),l.onSecondary=l.colorSpec.onSecondary(),l.secondaryContainer=l.colorSpec.secondaryContainer(),l.onSecondaryContainer=l.colorSpec.onSecondaryContainer(),l.tertiary=l.colorSpec.tertiary(),l.onTertiary=l.colorSpec.onTertiary(),l.tertiaryContainer=l.colorSpec.tertiaryContainer(),l.onTertiaryContainer=l.colorSpec.onTertiaryContainer(),l.error=l.colorSpec.error(),l.onError=l.colorSpec.onError(),l.errorContainer=l.colorSpec.errorContainer(),l.onErrorContainer=l.colorSpec.onErrorContainer(),l.primaryFixed=l.colorSpec.primaryFixed(),l.primaryFixedDim=l.colorSpec.primaryFixedDim(),l.onPrimaryFixed=l.colorSpec.onPrimaryFixed(),l.onPrimaryFixedVariant=l.colorSpec.onPrimaryFixedVariant(),l.secondaryFixed=l.colorSpec.secondaryFixed(),l.secondaryFixedDim=l.colorSpec.secondaryFixedDim(),l.onSecondaryFixed=l.colorSpec.onSecondaryFixed(),l.onSecondaryFixedVariant=l.colorSpec.onSecondaryFixedVariant(),l.tertiaryFixed=l.colorSpec.tertiaryFixed(),l.tertiaryFixedDim=l.colorSpec.tertiaryFixedDim(),l.onTertiaryFixed=l.colorSpec.onTertiaryFixed(),l.onTertiaryFixedVariant=l.colorSpec.onTertiaryFixedVariant();let mt=wr()[4],Me=new l;[...Me.allColors,Me.shadow(),Me.scrim()];let ze=navigator.userAgent,pt=ze.includes("Firefox"),fr=!(!ze.includes("Chrome")&&ze.includes("Safari")||pt),Br=function(r){let e=mt();return r.mount=()=>{this.cancel.listen(t=>{let n=c("animate",{xmlns:"http://www.w3.org/2000/svg",attributeName:"opacity",from:1,to:0,dur:t+"ms",fill:"freeze",calcMode:"spline",keySplines:"0.4 0, 0.2 1"});r.root.querySelector("circle").appendChild(n),n.beginElement()})},c("svg",{xmlns:"http://www.w3.org/2000/svg",children:[c("radialGradient",{id:"gradient-"+e,children:[c("stop",{offset:"0%","stop-color":"currentColor","stop-opacity":"0.12"}),c("stop",{offset:"70%","stop-color":"currentColor","stop-opacity":"0.12"}),c("stop",{offset:"100%","stop-color":"currentColor","stop-opacity":"0"})]}),fr?c("filter",{id:"filter-"+e,children:[c("feTurbulence",{type:"fractalNoise",baseFrequency:"0.6",seed:Math.random()}),c("feDisplacementMap",{in:"SourceGraphic",in2:"turbulence",scale:this.size**2*1e-4,xChannelSelector:"R",yChannelSelector:"B"})]}):"firefox sucks",c("circle",{cx:this.size/2,cy:this.size/2,r:0,fill:`url(#gradient-${e})`,...fr?{filter:`url(#filter-${e})`}:{},children:c("animate",{attributeName:"r",from:0,to:this.size/2,dur:this.speed+"ms",fill:"freeze",calcMode:"spline",keySplines:"0.4 0, 0.2 1"})})]})};Br.style=z`
	:scope {
		position: absolute;
		left: ${r=>r.x-r.size/2+"px"};
		top: ${r=>r.y-r.size/2+"px"};
		width: ${r=>r.size+"px"};
		height: ${r=>r.size+"px"};
		pointer-events: none;
		overflow: visible;
	}
`;let Je=function(r){this.ripples=[];let e=[];return r.mount=()=>{this.create.listen(n=>{let a=r.root.getBoundingClientRect(),o=n.clientX-a.left,i=n.clientY-a.top,s=2.5*Math.hypot(Math.max(o,a.width-o),Math.max(i,a.height-i)),u=Math.max(Math.min(50*Math.log(s),600),200),d=Ke(),h=c(Br,{x:o,y:i,size:s,speed:u,cancel:d});e.push(()=>{d(800),setTimeout(()=>this.ripples=this.ripples.filter(p=>p!==h),800)}),this.ripples=[...this.ripples,h]});let t=()=>{e.map(n=>n()),e=[]};window.addEventListener("pointerup",t),window.addEventListener("dragend",t)},c("div",{children:use(this.ripples)})};Je.style=z`
	:scope {
		position: absolute;
		inset: 0;
		border-radius: inherit;
		pointer-events: none;

		overflow: hidden;
	}

	:global(*):disabled > :scope { opacity: 0; }
`;let Ze=()=>c("div",{});Ze.style=z`
	:scope {
		position: absolute;
		inset: 0;
		border-radius: inherit;
		pointer-events: none;

		overflow: hidden;

		background: var(--m3dl-state-color, currentColor);
		opacity: 0;
		transition: opacity var(--m3dl-motion-effects-default);
	}

	:global(*):hover:not(:global(:disabled)) > :scope {
		opacity: 0.08;
	}
`;let ft={xs:"label-large",s:"label-large",m:"title-medium",l:"headline-small",xl:"headline-large"},Q=function(r){this.size??="s",this.shape??="round",this.icon??="left",this.disabled??=!1;let e=Ke(),t=use(this.size).map(n=>ft[n]);return c("button",{class:use`m3dl-container m3dl-button m3dl-font-${t} variant-${this.variant} size-${this.size} shape-${this.shape} icon-${this.icon}`,disabled:use(this.disabled),"on:click":this["on:click"],"on:pointerdown":e,title:use(this.title),children:[c(Je,{create:e}),c(Ze,{}),r.children]})};Q.style=z`
	:scope {
		position: relative;

		border: none;
		display: inline-flex;
		align-items: center;
		justify-content: center;

		transition: border-radius var(--m3dl-motion-spatial-fast),
			flex var(--m3dl-motion-spatial-fast),
			color var(--m3dl-motion-effects-default),
			background var(--m3dl-motion-effects-default),
			border-color var(--m3dl-motion-effects-default);

		cursor: pointer;
		user-select: none;

		height: var(--m3dl-shape-full);

		word-spacing: inherit;
		text-align: inherit;
	}
	:scope:disabled {
		cursor: default;
	}

	:scope.variant-elevated {
		background: rgb(var(--m3dl-color-surface-container-low));
		color: rgb(var(--m3dl-color-primary));
		box-shadow: var(--m3dl-elevation-1);
	}
	:scope:has(:global(.m3dl-toggle.selected)).variant-elevated {
		background: rgb(var(--m3dl-color-primary));
		color: rgb(var(--m3dl-color-on-primary));
	}
	:scope:not(:has(:global(.m3dl-toggle:not(.selected)))).variant-filled {
		background: rgb(var(--m3dl-color-primary));
		color: rgb(var(--m3dl-color-on-primary));
	}
	:scope:has(:global(.m3dl-toggle)).variant-filled {
		background: rgb(var(--m3dl-color-surface-container));
		color: rgb(var(--m3dl-color-on-surface-variant));
	}
	:scope.variant-tonal {
		background: rgb(var(--m3dl-color-secondary-container));
		color: rgb(var(--m3dl-color-on-secondary-container));
	}
	:scope:has(:global(.m3dl-toggle.selected)).variant-tonal {
		background: rgb(var(--m3dl-color-secondary));
		color: rgb(var(--m3dl-color-on-secondary));
	}
	:scope.variant-outlined {
		border: var(--m3dl-button-border, 1px) solid rgb(var(--m3dl-color-outline-variant));
		background: transparent;
		color: rgb(var(--m3dl-color-on-surface-variant));
	}
	:scope:has(:global(.m3dl-toggle.selected)).variant-outlined {
		border-color: transparent;
		background: rgb(var(--m3dl-color-inverse-surface));
		color: rgb(var(--m3dl-color-inverse-on-surface));
	}
	:scope.variant-text {
		background: transparent;
		color: rgb(var(--m3dl-color-primary));
	}
	:scope:disabled:disabled:disabled:disabled {
		background: rgb(var(--m3dl-color-on-surface) / 0.1);
		color: rgb(var(--m3dl-color-on-surface) / 0.38);
		box-shadow: var(--m3dl-elevation-0);
	}

	:scope.shape-round {
		border-radius: var(--m3dl-shape-full);
	}

	:scope.shape-square:is(.size-xs, .size-s) {
		border-radius: var(--m3dl-shape-medium);
	}
	:scope.shape-square:is(.size-m) {
		border-radius: var(--m3dl-shape-large);
	}
	:scope.shape-square:is(.size-l, .size-xl) {
		border-radius: var(--m3dl-shape-extra-large);
	}

	:scope:enabled:active:is(.size-xs, .size-s) {
		border-radius: var(--m3dl-shape-small);
	}
	:scope:enabled:active:is(.size-m) {
		border-radius: var(--m3dl-shape-medium);
	}
	:scope:enabled:active:is(.size-l, .size-xl) {
		border-radius: var(--m3dl-shape-large);
	}

	:scope.size-xs {
		--m3dl-shape-full: 2rem;
		padding: 0.75rem;
		gap: 0.25rem;
	}
	:scope.size-s {
		--m3dl-shape-full: 2.5rem;
		padding: 1rem;
		gap: 0.5rem;
	}
	:scope.size-m {
		--m3dl-shape-full: 3.5rem;
		padding: 1.5rem;
		gap: 0.5rem;
	}
	:scope.size-l {
		--m3dl-button-border: 2px;
		--m3dl-shape-full: 6rem;
		padding: 3rem;
		gap: 0.75rem;
	}
	:scope.size-xl {
		--m3dl-button-border: 3px;
		--m3dl-shape-full: 8.5rem;
		padding: 4rem;
		gap: 1rem;
	}
	
	:scope:not(.icon-left).size-xs {
		--m3dl-icon-size: 1.25rem;
	}
	:scope:not(.icon-left):is(.size-s, .size-m) {
		--m3dl-icon-size: 1.5rem;
	}
	:scope:not(.icon-left).size-l {
		--m3dl-icon-size: 2rem;
	}
	:scope:not(.icon-left).size-xl {
		--m3dl-icon-size: 2.5rem;
	}

	:scope.icon-full.size-xs {
		padding: 0.375rem;
	}
	:scope.icon-full.size-s {
		padding: 0.5rem;
	}
	:scope.icon-full.size-m {
		padding: 1rem;
	}
	:scope.icon-full.size-l {
		padding: 2rem;
	}
	:scope.icon-full.size-xl {
		padding: 3rem;
	}

	:scope > :global(svg) {
		width: var(--m3dl-icon-size, 1em);
		height: var(--m3dl-icon-size, 1em);
	}

	:scope > :global(span.m3dl-toggle) {
		display: none;
	}
`;z`
	:scope {
		--m3dl-button-size: 1;
		--m3dl-button-multiplier: 0.15;

		--m3dl-active-size: calc(var(--m3dl-button-size) * (1 + var(--m3dl-button-multiplier)));
		--m3dl-1-sibling-size: calc(var(--m3dl-button-size) * (1 - var(--m3dl-button-multiplier)));
		--m3dl-2-sibling-size: calc(var(--m3dl-button-size) * (1 - var(--m3dl-button-multiplier) / 2));

		display: flex;
	}
	.size-xs {
		gap: 1.125rem;
	}
	.size-s {
		gap: 0.75rem;
	}
	.size-m, .size-l, .size-xl {
		gap: 0.5rem;
	}

	.variant-standard > :global(*) {
		flex: var(--m3dl-button-size) 0 0;
	}

	.variant-standard > :global(*:enabled:active) {
		flex: var(--m3dl-active-size) 0 0;
	}

	.variant-standard > :is(
		:global(*:first-child:enabled:active) + :global(*),
		:global(*:has(+ *:last-child:enabled:active))
	) {
		flex: var(--m3dl-1-sibling-size) 0 0;
	}

	.variant-standard > :is(
		:global(*:has(+ *:not(:first-child, :last-child):enabled:active)),
		:global(*:not(:first-child, :last-child):enabled:active) + :global(*)
	) {
		flex: var(--m3dl-2-sibling-size) 0 0;
	}
`;const Y=function(){return c("svg",{width:use(this.width).map(r=>r||"1em"),height:use(this.height).map(r=>r||"1em"),viewBox:use`0 0 ${this.icon.width} ${this.icon.height}`,xmlns:"http://www.w3.org/2000/svg",...this.class?{class:this.class}:{},"attr:innerHTML":use(this.icon).map(r=>r.body)})};z`
	:scope {
		position: relative;

		display: inline-flex;
		align-items: center;

		height: 2rem;
		padding: 0 1rem;
		gap: 0.5rem;
		border-radius: var(--m3dl-shape-small);

		background: rgb(var(--m3dl-color-surface));
		color: rgb(var(--m3dl-color-on-surface-variant));
		border: 1px solid rgb(var(--m3dl-color-outline));

		cursor: pointer;
		transition: var(--m3dl-motion-effects-default);
	}

	:scope > svg {
		width: 1.125rem;
		height: 1.125rem;
	}

	:scope > :global(.leading) {
		margin-left: -0.5rem;
	}
	:scope.variant-input > :global(.leading) {
		margin-left: -0.25rem;
	}
	:scope:enabled:not(.variant-input):not(.selected) > :global(.leading) {
		color: rgb(var(--m3dl-color-primary));
	}

	:scope > :global(.trailing) {
		margin-right: -0.5rem;
	}
	:scope.variant-input > :global(.trailing) {
		margin-right: -0.25rem;
	}

	:scope.variant-assist {
		color: rgb(var(--m3dl-color-on-surface));
	}
	:scope.variant-input {
		padding: 0 0.75rem;
	}

	:scope:scope.elevated, :scope:scope.selected {
		border-color: transparent;
	}
	:scope.elevated {
		background: rgb(var(--m3dl-color-surface-container-low));
		box-shadow: var(--m3dl-elevation-1);
	}
	:scope.selected {
		background: rgb(var(--m3dl-color-secondary-container));
		color: rgb(var(--m3dl-color-on-secondary-container));
	}

	:scope:disabled {
		cursor: auto;
		box-shadow: none;
		border-color: rgb(var(--m3dl-color-on-surface) / 0.12));
		background: rgb(var(--m3dl-color-surface));
		color: rgb(var(--m3dl-color-on-surface) / 0.38);
	}
	:scope.selected:disabled, :scope.elevated:disabled {
		background: rgb(var(--m3dl-color-on-surface) / 0.12);
	}
`;z`
	:scope {
		position: relative;
		min-width: 10rem;
		height: var(--handle);

		display: flex;
		align-items: center;
	}

	.track, .handle, .stop {
		pointer-events: none;
		user-select: none;
	}

	.track {
		height: var(--track);
		overflow: hidden;

		position: relative;
	}
	.left {
		border-radius: var(--shape) 0.125rem 0.125rem var(--shape);
		flex: 0 0 calc(100% * var(--percent) - 0.5rem);
		margin-right: min(0.375rem, 0.375rem + (var(--percent) * 100%) - 0.5rem);

		background: rgb(var(--m3dl-color-primary));
	}
	input:disabled ~ .left {
		background: rgb(var(--m3dl-color-on-surface) / 0.38);
	}
	.right {
		border-radius: 0.125rem var(--shape) var(--shape) 0.125rem;
		flex: 1;
		margin-left: 0.375rem;

		background: rgb(var(--m3dl-color-secondary-container));
	}
	input:disabled ~ .right {
		background: rgb(var(--m3dl-color-on-surface) / 0.12);
	}

	.handle {
		height: var(--handle);
		flex: 0 0 0.25rem;

		display: flex;
		justify-content: center;

		position: relative;
	}
	.handle-inner {
		flex: 0 0 0.25rem;

		border-radius: var(--m3dl-shape-full);
		background: rgb(var(--m3dl-color-primary));

		transition: flex-basis var(--m3dl-motion-effects-fast);
	}
	input:disabled ~ .handle > .handle-inner {
		background: rgb(var(--m3dl-color-on-surface) / 0.38);
	}
	input:is(:focus-visible, :enabled:active) ~ .handle > .handle-inner {
		flex: 0 0 0.125rem;
	}

	.indicator {
		position: absolute;
		top: -3rem;

		width: 3rem;
		padding: 0.75rem 1rem;

		background: rgb(var(--m3dl-color-inverse-surface));
		color: rgb(var(--m3dl-color-inverse-on-surface));
		border-radius: var(--m3dl-shape-full);

		display: flex;
		align-items: center;
		justify-content: center;

		opacity: 0;
		transition: opacity var(--m3dl-motion-effects-default);
	}
	input:enabled {
		cursor: pointer;
	}
	input:enabled:is(:hover, :focus-visible, :active) ~ .handle > .indicator {
		opacity: 1;
	}

	.stops {
		position: absolute;

		height: 100%;

		display: flex;
		align-items: center;
		justify-content: space-between;
		flex-direction: row-reverse;

		padding: 0 0.25rem;
	}
	.left > .stops { left: 0; width: calc((100% + 0.5rem) / var(--percent)) }
	.right > .stops { right: 0; width: calc((100% + 0.5rem) / var(--inverse-percent)) }
	.stop {
		width: 0.25rem;
		height: 0.25rem;
		border-radius: var(--m3dl-shape-full);

		background: rgb(var(--m3dl-color-on-secondary-container));
	}
	.left .stop {
		background: rgb(var(--m3dl-color-on-primary));
	}
	input:disabled ~ .track .stop {
		background: rgb(var(--m3dl-color-on-surface) / 0.38);
	}
	input:disabled ~ .track.left .stop {
		background: rgb(var(--m3dl-color-inverse-on-surface) / 0.66);
	}

	.stop.end {
		--stops: calc(100% - 0.375rem);
	}

	input {
		position: absolute;
		inset-inline: -0.25rem;
		width: calc(100% + 0.5rem);
		height: 100%;

		appearance: none;
		opacity: 0;
		margin: 0;
	}

	.size-xs {
		--track: 1rem;
		--handle: 2.75rem;
		--shape: var(--m3dl-shape-small);
	}
	.size-s {
		--track: 1.5rem;
		--handle: 2.75rem;
		--shape: var(--m3dl-shape-small);
	}
	.size-m {
		--track: 2.5rem;
		--handle: 2.75rem;
		--shape: var(--m3dl-shape-medium);
	}
	.size-l {
		--track: 3.5rem;
		--handle: 4.25rem;
		--shape: var(--m3dl-shape-large);
	}
	.size-xl {
		--track: 6rem;
		--handle: 6.75rem;
		--shape: var(--m3dl-shape-extra-large);
	}
`;z`
	:scope {
		width: 3.25rem;
		height: 2rem;

		display: inline-flex;
		position: relative;
	}

	input {
		position: absolute;
		inset: 0;

		appearance: none;
		margin: 0;
		border: 2px solid rgb(var(--m3dl-color-outline));
		border-radius: var(--m3dl-shape-full);
		background: rgb(var(--m3dl-color-surface-container-highest));

		transition: var(--m3dl-motion-effects-default);
	}
	input:checked {
		background: rgb(var(--m3dl-color-primary));
		border-color: rgb(var(--m3dl-color-primary));
	}
	input:disabled {
		background: rgb(var(--m3dl-color-surface-container-highest));
		border-color: rgb(var(--m3dl-color-outline) / 0.12);
	}
	input:disabled:checked {
		background: rgb(var(--m3dl-color-on-surface) / 0.12);
		border-color: transparent;
	}

	.layer {
		pointer-events: none;

		width: 2.5rem;
		height: 2.5rem;

		position: absolute;
		left: 1rem;
		top: 50%;
		transform: translateX(-50%) translateY(-50%);
		border-radius: var(--m3dl-shape-full);
		background: rgb(var(--m3dl-color-primary) / 0);

		display: flex;
		align-items: center;
		justify-content: center;

		transition: left var(--m3dl-motion-spatial-fast), background var(--m3dl-motion-effects-default);
	}
	input:checked ~ .layer {
		left: 2.25rem;
	}
	input:enabled:hover ~ .layer {
		background: rgb(var(--m3dl-color-primary) / 0.1);
	}

	.handle {
		width: 1rem;
		height: 1rem;

		background: rgb(var(--m3dl-color-outline));
		color: rgb(var(--m3dl-color-surface-container-highest));
		border-radius: var(--m3dl-shape-full);

		display: flex;
		align-items: center;
		justify-content: center;

		transition: var(--m3dl-motion-spatial-fast);
	}
	.handle :global(svg) {
		opacity: 0;
		transition: var(--m3dl-motion-effects-default);
	}
	input:checked ~ .layer .handle {
		width: 1.5rem;
		height: 1.5rem;

		background: rgb(var(--m3dl-color-on-primary));
		color: rgb(var(--m3dl-color-primary));
	}
	input:checked ~ .layer :global(svg) {
		opacity: 1;
	}
	input:enabled:hover ~ .layer .handle {
		background: rgb(var(--m3dl-color-on-surface-variant));
		color: rgb(var(--m3dl-color-surface-container-highest));
	}
	input:enabled:checked:hover ~ .layer .handle {
		background: rgb(var(--m3dl-color-primary-container));
		color: rgb(var(--m3dl-color-on-primary-container));
	}
	input:enabled:active ~ .layer .handle {
		width: 1.75rem;
		height: 1.75rem;
	}
	input:disabled ~ .layer .handle {
		background: rgb(var(--m3dl-color-on-surface) / 0.38);
		color: rgb(var(--m3dl-color-surface-container-highest) / 0.38);
	}
	input:disabled:checked ~ .layer .handle {
		background: rgb(var(--m3dl-color-surface));
		color: rgb(var(--m3dl-color-on-surface) / 0.38);
	}
`;z`
	:scope {
		display: inline-flex;
		min-width: 15rem;

		flex-direction: column;
		gap: 0.25rem;
	}

	.field {
		position: relative;
		min-height: 3.5rem;

		flex: 1;
		width: 100%;

		background: rgb(var(--m3dl-color-surface-container-highest));
		border-radius: var(--m3dl-shape-extra-small) var(--m3dl-shape-extra-small) 0 0;

		--m3dl-state-color: rgb(var(--m3dl-color-on-surface));
	}
	.field :is(input, textarea) {
		position: absolute;
		inset: 0;

		padding: 1.5rem 1rem 0.5rem 1rem;

		border: none;
		background: transparent;
		color: rgb(var(--m3dl-color-on-surface));
		caret-color: rgb(var(--m3dl-color-primary));

		font: inherit;
		letter-spacing: inherit;
		word-spacing: inherit;
		line-height: inherit;
		text-align: inherit;

		resize: none;
	}
	.field label {
		position: absolute;
		left: 1rem;
		top: 0.5rem;
		color: rgb(var(--m3dl-color-primary));

		font-size: var(--m3dl-font-body-small-size, 0.75rem);
		line-height: var(--m3dl-font-body-small-height, 1.333);
		letter-spacing: var(--m3dl-font-body-small-tracking, 0.025rem);
		font-weight: var(--m3dl-font-body-small-weight, 400);

		transition: var(--m3dl-motion-effects-default);
	}
	.field :is(input, textarea):not(:focus):placeholder-shown ~ label {
		top: 1rem;
		color: rgb(var(--m3dl-color-on-surface-variant));

		font-size: var(--m3dl-font-body-large-size, 1rem);
		line-height: var(--m3dl-font-body-large-height, 1.5);
		letter-spacing: var(--m3dl-font-body-large-tracking, 0);
		font-weight: var(--m3dl-font-body-large-weight, 400);
	}
	.field .focus {
		position: absolute;
		bottom: 0px;
		height: 1px;
		width: 100%;

		background: rgb(var(--m3dl-color-on-surface-variant));
		transition: var(--m3dl-motion-effects-default);
	}
	.field :is(input, textarea):focus ~ .focus {
		background: rgb(var(--m3dl-color-primary));
		height: 2px;
	}
	.field > :global(svg) {
		top: calc(100% / 2 - 0.75rem);
		width: 1.5rem;
		height: 1.5rem;
		color: rgb(var(--m3dl-color-on-surface-variant));
	}
	.field > :global(.leading) {
		position: absolute;
		left: 0.5rem;
	}
	.field > :global(.leading) ~ :is(input, textarea) {
		padding-left: 3rem;
	}
	.field > :global(.leading) ~ label {
		left: 3rem;
	}
	.field :global(:is(label, svg)) {
		pointer-events: none;
	}

	.supporting {
		margin: 0 1rem;

		color: rgb(var(--m3dl-color-on-surface-variant));
	}

	:scope.errored .field .focus {
		background: rgb(var(--m3dl-color-error));
	}
	:scope.errored :is(.field :is(label, .trailing), .supporting) {
		color: rgb(var(--m3dl-color-error));
	}
	:scope.errored .field :is(input, textarea) {
		caret-color: rgb(var(--m3dl-color-error));
	}

	:scope.errored .field:hover .focus {
		background: rgb(var(--m3dl-color-on-error-container));
	}
	:scope.errored .field:hover :is(label, .trailing) {
		color: rgb(var(--m3dl-color-on-error-container));
	}
`;let Pe=function(r){if(this["on:click"]){let e=Ke();return c("button",{class:use`m3dl-container m3dl-card variant-${this.variant}`,"on:pointerdown":e,"on:click":this["on:click"],children:[c(Je,{create:e}),c(Ze,{}),r.children]})}return c("div",{class:use`m3dl-container m3dl-card variant-${this.variant}`,children:r.children})};Pe.style=z`
	:scope {
		padding: 1rem;

		border: none;
		border-radius: var(--m3dl-shape-medium);
		color: rgb(var(--m3dl-color-on-surface));
	}

	button:scope {
		position: relative;
		font: inherit;
		letter-spacing: inherit;
		word-spacing: inherit;
		line-height: inherit;
		text-align: inherit;
		cursor: pointer;
	}

	:scope.variant-elevated {
		background: rgb(var(--m3dl-color-surface-container-low));
		box-shadow: var(--m3dl-elevation-1);
	}

	:scope.variant-filled {
		background: rgb(var(--m3dl-color-surface-container-highest));
	}

	:scope.variant-outlined {
		background: rgb(var(--m3dl-color-surface));
		border: 1px solid rgb(var(--m3dl-color-outline-variant));
	}
`;z`
	:scope {
		--m3dl-progress-height: ${r=>use(r.thickness).map(e=>e/16+"rem")};

		height: var(--m3dl-progress-height);

		overflow: hidden;
		position: relative;

		flex: 0 0 var(--m3dl-progress-height);

		display: flex;
		gap: 0.25rem;
		margin: 0 0.25rem;
	}
	:scope, :scope > * {
		border-radius: var(--m3dl-shape-full);
		transition: var(--m3dl-motion-effects-default);
	}

	.progress {
		background: rgb(var(--m3dl-color-primary));
		flex: 0 0 ${r=>use(r.progress).map(e=>e+"%")};
		min-width: var(--m3dl-progress-height);
	}
	.track {
		flex: 1;
		background: rgb(var(--m3dl-color-secondary-container));
	}
`;z`
	:scope {
		color: rgb(var(--m3dl-color-primary));
		display: block;
	}

	:scope.container {
		background: rgb(var(--m3dl-color-primary-container));
		color: rgb(var(--m3dl-color-on-primary-container));
		border-radius: var(--m3dl-shape-full);
	}

	:scope.center {
		margin: auto;
	}
`;const gr={width:24,height:24,body:'<path fill="currentColor" d="M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h6q.425 0 .713.288T12 4t-.288.713T11 5H5v14h14v-6q0-.425.288-.712T20 12t.713.288T21 13v6q0 .825-.587 1.413T19 21zM19 6.4L10.4 15q-.275.275-.7.275T9 15t-.275-.7t.275-.7L17.6 5H15q-.425 0-.712-.288T14 4t.288-.712T15 3h5q.425 0 .713.288T21 4v5q0 .425-.288.713T20 10t-.712-.288T19 9z"/>'},gt={width:24,height:24,body:'<path fill="currentColor" d="M16.175 13H5q-.425 0-.712-.288T4 12t.288-.712T5 11h11.175l-4.9-4.9q-.3-.3-.288-.7t.313-.7q.3-.275.7-.288t.7.288l6.6 6.6q.15.15.213.325t.062.375t-.062.375t-.213.325l-6.6 6.6q-.275.275-.687.275T11.3 19.3q-.3-.3-.3-.712t.3-.713z"/>'},yr={width:24,height:24,body:'<path fill="currentColor" d="m8 18l-6-6l6-6l1.425 1.425l-4.6 4.6L9.4 16.6zm8 0l-1.425-1.425l4.6-4.6L14.6 7.4L16 6l6 6z"/>'};let Ir=function(){return c("img",{src:use(this.src)})};Ir.style=z`
	:scope {
		height: 1.25em;
		width: 1.25em;
		vertical-align: -0.25em;
	}
`;let Fr=function(r){return c("a",{href:`https://hackclub.slack.com/app_redirect?channel=${this.id}`,target:"_blank",children:r.children})};const yt={width:24,height:24,body:'<path fill="currentColor" d="M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h7v2H5v14h14v-7h2v7q0 .825-.587 1.413T19 21zm4.7-5.3l-1.4-1.4L17.6 5H14V3h7v7h-2V6.4z"/>'};let Qe=function(r){return c("div",{"class:grid":use(this.grid),children:r.children})};Qe.style=z`
	:scope {
		margin: 1rem 0;

		display: grid;
		grid-template-columns: 1fr;
		gap: 1rem;
	}

	.grid {
		grid-template-areas: "a" "b" "c";
	}
	.grid > :global(:nth-child(1)) { grid-area: a; }
	.grid > :global(:nth-child(2)) { grid-area: b; }
	.grid > :global(:nth-child(3)) { grid-area: c; }

	@media (min-width: 550px) and (max-width: 800px) {
		:scope {
			grid-template-columns: 1fr 1fr;
		}

		.grid {
			grid-template-areas:
				"a b"
				"c c";
		}
	}
`;let me=function(r){return c("div",{children:c(Pe,{variant:"filled",children:[c("div",{class:"image",children:r.children[0]}),c("div",{class:"body",children:[c("div",{class:"m3dl-font-title-large",children:use(this.title)}),c("div",{class:"expand",children:r.children[1]}),this.target?c("div",{class:"buttons",children:c(Q,{variant:"filled",icon:"left","on:click":()=>window.open(`https://isle.a.hackclub.dev/scenes/${this.target}`),children:[c(Y,{icon:yt}),"Visit!"]})}):null]})]})})};me.style=z`
	:scope > :global(.m3dl-card) {
		width: 100%;
		height: 100%;
		overflow: hidden;

		display: flex;
		padding: 0;
		align-items: stretch;
	}

	.image {
		background: rgb(var(--m3dl-color-surface-container));
		border-radius: 0 var(--m3dl-shape-medium) var(--m3dl-shape-medium) 0;
		aspect-ratio: 4 / 3;
		flex: 3 0;

		overflow: hidden;
	}
	.body {
		padding: 1rem;
		flex: 5;

		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}
	.expand { flex: 1; }
	.buttons {
		display: flex;
		justify-content: flex-end;
	}

	@media (max-width: 800px) {
		:scope > :global(.m3dl-card) {
			flex-direction: column;
		}

		.image {
			border-radius: 0 0 var(--m3dl-shape-medium) var(--m3dl-shape-medium);
		}
	}
`;const vt={width:24,height:24,body:'<path fill="currentColor" d="M12 22q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2q3.525 0 6.188 2.113T21.675 9.5q.125.4-.088.75t-.612.475t-.75-.1T19.75 10q-.475-1.825-1.713-3.25T15 4.6V5q0 .825-.587 1.413T13 7h-2v2q0 .425-.288.713T10 10H8v2h6q.375 0 .575.338t0 .687q-.3.575-.437 1.2T14 15.5q0 1.325.6 2.488t1.325 2.212q.2.3.125.65t-.425.475q-.85.35-1.763.513T12 22m-1-2.05V18q-.825 0-1.412-.587T9 16v-1l-4.8-4.8q-.075.45-.137.9T4 12q0 3.025 1.988 5.3T11 19.95M19.5 22q-.175 0-.3-.1t-.175-.25q-.275-.875-.775-1.625t-1.075-1.475q-.525-.65-.85-1.425T16 15.5q0-1.45 1.025-2.475T19.5 12t2.475 1.025T23 15.5q0 .85-.337 1.613t-.838 1.437q-.575.725-1.075 1.475t-.775 1.625q-.05.15-.175.25t-.3.1m0-2.825q.25-.425.55-.787t.575-.738q.35-.475.613-1.012T21.5 15.5q0-.825-.587-1.412T19.5 13.5t-1.412.588T17.5 15.5q0 .6.263 1.138t.612 1.012l.588.738q.287.363.537.787m0-2.425q-.525 0-.888-.363t-.362-.887t.363-.888t.887-.362t.888.363t.362.887t-.363.888t-.887.362"/>'};let Er=function(){return c(me,{title:"Porple Point",target:98,children:[c("div",{class:"construction",children:c(Y,{icon:vt})}),c("div",{children:"Porple Point's exhibit is currently being constructed! Our most senior employee is currently out on an expedition collecting data to display here. We aim to provide our visitors with info about Porple Point as soon as possible! For now, you can trek down and visit it yourself; we don't provide any guarantees about what's there, however."})]})};Er.style=z`
	.construction {
		height: 100%;

		background: repeating-linear-gradient(
			45deg,
			rgb(var(--m3dl-color-surface-container-high)),
			rgb(var(--m3dl-color-surface-container-high)) 20px,
			transparent 20px,
			transparent 40px
		);

		display: flex;
		align-items: center;
		justify-content: center;

		font-size: 8rem;
	}
`;const bt={width:24,height:24,body:'<path fill="currentColor" d="M4 20v-9q-.825 0-1.412-.587T2 9V7q0-.825.588-1.412T4 5h3.2q-.125-.225-.162-.475T7 4q0-1.25.875-2.125T10 1q.575 0 1.075.213T12 1.8q.425-.4.925-.6T14 1q1.25 0 2.125.875T17 4q0 .275-.05.513T16.8 5H20q.825 0 1.413.588T22 7v2q0 .825-.587 1.413T20 11v9q0 .825-.587 1.413T18 22H6q-.825 0-1.412-.587T4 20M14 3q-.425 0-.712.288T13 4t.288.713T14 5t.713-.288T15 4t-.288-.712T14 3M9 4q0 .425.288.713T10 5t.713-.288T11 4t-.288-.712T10 3t-.712.288T9 4M4 7v2h7V7zm7 13v-9H6v9zm2 0h5v-9h-5zm7-11V7h-7v2z"/>'};let Ar=function(){return c(me,{title:"Mount Kablooey Gift Shop",target:11,children:[c("div",{class:"construction",children:c(Y,{icon:bt})}),c("div",{children:["The official Mount Kablooey Gift Shop is a great place to get your usual bits and bobs like shirts and mugs (speaking of... why is the branded mug $35??). It's currently going through a rebrand and renovation after the ",c("i",{children:"volcano explosion"})," though, so we haven't built the full exhibit yet; ask ",c(Fr,{id:"U091DE0M4NB",children:"peleg2210"})," for their progress renovating!"]})]})};Ar.style=z`
	.construction {
		height: 100%;

		background: repeating-linear-gradient(
			45deg,
			rgb(var(--m3dl-color-surface-container-high)),
			rgb(var(--m3dl-color-surface-container-high)) 20px,
			transparent 20px,
			transparent 40px
		);

		display: flex;
		align-items: center;
		justify-content: center;

		font-size: 8rem;
	}
`;let Pt="./som.webp",kt="./skulk.webp",Vr=function(){return c("div",{children:[c("div",{class:"m3dl-font-display-small title",children:[c("img",{src:Pt})," Mount Kablooey Summit"]}),c("div",{class:"m3dl-font-title-large",children:c("b",{children:c("i",{children:"enjoy the view..."})})}),c("p",{children:["Welcome to the official Mount Kablooey Summit visitor center! We're so high up that you can see almost the entire island, (including all the airplanes failing to land at ",c("b",{children:"http://island"}),"'s airport ",c(Ir,{src:kt}),") so we recommend planning your next visits from here with our information and featured exhibits. However, we're still reconstructing after that massive ",c("i",{children:"volcano explosion"}),"; please don't mind the lack of exhibits and artifacts as we recover..."]}),c("div",{class:"m3dl-font-headline-medium",children:c("b",{children:"Nearby Stops"})}),c(Qe,{grid:!0,children:[c(Ar,{}),c(Er,{}),c("div",{class:"more",children:[c("div",{children:[c("div",{class:"m3dl-font-title-large",children:c("b",{children:"Featured Stops"})}),"There's a lot more to explore on the island! We've curated a seperate exhibition area to showcase all the cool places to visit."]}),c(Q,{variant:"filled",size:"m","on:click":()=>location.href="./featured.html",children:["View featured ",c(Y,{icon:gt})]})]})]}),c("div",{class:"m3dl-font-headline-medium about",children:c("b",{children:"About This Center"})}),c("div",{class:"about-content",children:[c("div",{class:"info",children:["This center is built with the ",c("code",{children:"dreamland.js"})," JavaScript framework, which was rewritten from scratch during Journey v1, Journey v2, and Summer of Making. It's been prerendered and hydrated client-side with ",c("code",{children:"dreamland.js"}),"'s ",c("b",{children:"built-in SSR support"})," and Vite integrations (developed during Summer of Making). Components from ",c("code",{children:"m3-dreamland"}),", rewritten during Summer of Making to support ",c("code",{children:"dreamland.js"}),"'s rewrite, were used to give this center a very ",c("i",{children:"expressive"})," (possibly even a little ",c("b",{children:"material"}),"-like) look. Assets and fonts from the Summer of Making website were used as well. Each destination's exhibit uses assets from the location."]}),c("div",{class:"cards",children:[c(Pe,{variant:"outlined",children:[c("div",{class:"m3dl-font-title-large",children:"dreamland.js"}),c("div",{class:"expand",children:[c("div",{children:"Utilitarian web framework smaller than preact."}),c("div",{children:["This is the first user-accessible project on Summer of Making! It's also used by ",c("a",{href:"https://mail.hackclub.com",target:"_blank",children:"mail.hackclub.com"}),"'s admin UI."]})]}),c("div",{class:"buttons",children:[c(Q,{variant:"tonal",icon:"full","on:click":()=>window.open("https://github.com/MercuryWorkshop/dreamlandjs"),children:c(Y,{icon:yr})}),c(Q,{variant:"filled","on:click":()=>window.open("https://summer.hackclub.com/projects/3"),children:[c(Y,{icon:gr}),"Visit on SoM!"]})]})]}),c(Pe,{variant:"outlined",children:[c("div",{class:"m3dl-font-title-large",children:"m3-dreamland"}),c("div",{class:"expand",children:"A Material 3 (Expressive) component library for dreamland.js."}),c("div",{class:"buttons",children:[c(Q,{variant:"tonal",icon:"full","on:click":()=>window.open("https://github.com/r58Playz/m3-dreamland"),children:c(Y,{icon:yr})}),c(Q,{variant:"filled","on:click":()=>window.open("https://summer.hackclub.com/projects/8235"),children:[c(Y,{icon:gr}),"Visit on SoM!"]})]})]})]})]})]})};Vr.style=z`
	.title img {
		width: 1em;
		height: 1em;
		vertical-align: -0.125em;
	}

	.more {
		display: flex;
		align-items: center;
		flex-wrap: wrap;
		gap: 0.5rem;
	}
	.more > div {
		flex: 1;
	}

	.about {
		margin-bottom: 1rem;
	}
	.about-content {
		display: grid;
		grid-template-columns: 3fr 5fr;
		gap: 1rem;
	}

	.cards {
		display: flex;
		gap: 0.5rem;
	}
	.cards > :global(.m3dl-card) {
		flex: 1;

		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}
	.cards .buttons {
		display: flex;
		gap: 0.5rem;
		justify-content: flex-end;
	}

	.expand { flex: 1; }

	@media (min-width: 550px) and (max-width: 800px) {
		.about-content {
			grid-template-columns: 1fr;
		}
	}

	@media (max-width: 550px) {
		.about-content {
			grid-template-columns: 1fr;
		}

		.cards {
			flex-direction: column;
		}
	}
`;let Or=function(){return c(me,{title:"http://island",target:19,children:[c("div",{class:"rich-image",children:c("marquee",{direction:"right",scrollamount:10,children:[c("img",{src:"./stops/island/plane.webp"}),c("div",{children:c("span",{class:"pull-up",children:"terrain! PULL UP!!"})})]})}),c("div",{children:["A small island in the middle of the ocean, home to a small population (currently about 5 people). 500ft",c("sup",{children:"2"})," in size with a tropical climate. Residents are English-speaking and use the Beenz currency and the Internet Time timezone."]})]})};Or.style=z`
	.rich-image {
		position: relative;

		height: 100%;
		background: url(./stops/island/island.webp);
		background-size: cover;
		background-position: center;

		overflow: hidden;
	}

	marquee {
		position: absolute;
		top: 25%;
		left: 0;
		width: 100%;
		height: 100%;
		pointer-events: none;
		transform: rotate(2deg);
	}
	
	marquee img {
		width: 25%;
	}

	.pull-up {
		background: rgb(var(--m3dl-color-surface-container) / 0.5);
		padding: 0 0.25rem;
		border-radius: var(--m3dl-shape-extra-small);
	}
`;const wt={width:24,height:24,body:'<path fill="currentColor" d="m18.9 21l-5.475-5.475l2.1-2.1L21 18.9zM5.1 21L3 18.9L9.9 12l-1.7-1.7l-.7.7l-1.275-1.275v2.05l-.7.7L2.5 9.45l.7-.7h2.05L4 7.5l3.55-3.55q.5-.5 1.075-.725T9.8 3t1.175.225t1.075.725l-2.3 2.3L11 7.5l-.7.7L12 9.9l2.25-2.25q-.1-.275-.162-.575t-.063-.6q0-1.475 1.013-2.488t2.487-1.012q.375 0 .713.075t.687.225L16.45 5.75l1.8 1.8l2.475-2.475q.175.35.238.687t.062.713q0 1.475-1.012 2.488t-2.488 1.012q-.3 0-.6-.05t-.575-.175z"/>'};let zr=function(){return c(me,{title:"Exhibits Under Construction",children:[c("div",{class:"construction",children:c(Y,{icon:wt})}),c("div",{children:["We apologize for the lack of exhibits showcasing ",c("i",{children:"Hacklantis Island"}),". We need to send our employees out to collect fresh information after our databases were... erm... ",c("b",{children:"vitrified"}),"... by the explosion. More exhibits will be coming as soon as possible!"]})]})};zr.style=z`
	.construction {
		height: 100%;

		background: repeating-linear-gradient(
			45deg,
			rgb(var(--m3dl-color-surface-container-high)),
			rgb(var(--m3dl-color-surface-container-high)) 20px,
			transparent 20px,
			transparent 40px
		);

		display: flex;
		align-items: center;
		justify-content: center;

		font-size: 8rem;
	}
`;const Ct={width:24,height:24,body:'<path fill="currentColor" d="m7.825 13l4.9 4.9q.3.3.288.7t-.313.7q-.3.275-.7.288t-.7-.288l-6.6-6.6q-.15-.15-.213-.325T4.426 12t.063-.375t.212-.325l6.6-6.6q.275-.275.688-.275t.712.275q.3.3.3.713t-.3.712L7.825 11H19q.425 0 .713.288T20 12t-.288.713T19 13z"/>'};let xt="./som.webp",Rr=function(){return c("div",{children:[c("div",{class:"m3dl-font-display-small title",children:[c("img",{src:xt})," Mount Kablooey Summit"]}),c("div",{class:"m3dl-font-headline-medium",children:c("b",{children:"Featured Stops"})}),c("p",{children:["We've curated a special exhibition area for stops that our lead curator, ",c(Fr,{id:"U07UY5CR7U5",children:"Toshit"}),", finds cool or fun. We urge all our visitors to give these stops a visit! They're guaranteed to be awesome."]}),c(Qe,{grid:!1,children:[c(Or,{}),c(zr,{})]}),c(Q,{variant:"filled",size:"m","on:click":()=>location.href="./",children:[c(Y,{icon:Ct})," Return to lobby"]})]})};Rr.style=z`
	.title img {
		width: 1em;
		height: 1em;
		vertical-align: -0.125em;
	}
`;let vr,$r=function(r){return vr=new We(c(De,{children:[c(De,{path:"featured",show:c(Rr,{})}),c(De,{show:c(Vr,{})})]})),r.init=()=>{vr.mount(this.root)},c("div",{id:"app",class:"m3dl-colon3 m3dl-font-body-large",children:c("placeholder",{this:use(this.root)})})};$r.style=z`
	:scope {
		background: rgb(var(--m3dl-color-background));
		color: rgb(var(--m3dl-color-on-background));
		font-family: var(--m3dl-font);

		overflow-y: auto;
	}
	:scope > :global(*) {
		max-width: 62rem;
		padding: 1rem;
		margin: auto;
	}
`;const St=r=>c($r,{});et(St,document.querySelector("#app"),document.head,document.querySelector("[dlssr-d]"));
