(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function t(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerPolicy&&(o.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?o.credentials="include":a.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(a){if(a.ep)return;a.ep=!0;const o=t(a);fetch(a.href,o)}})();let ce,le=Symbol,[ee,vr,Pe,ze,Ne,zr,Nr,$e,_e,$r,_r,qr]=Array.from(Array(12),le),ge=le.toPrimitive,Hr=Object.assign,br=globalThis,Se=()=>{throw Error("dl")},Me=new Map([[_r,/\[\s*(?:(?<ns>\*|[-\w\P{ASCII}]*)\|)?(?<nm>[-\w\P{ASCII}]+)\s*(?:(?<op>\W?=)\s*(?<val>.+?)\s*(\s(?<case>[iIsS]))?\s*)?\]/gu],[zr,/#(?<nm>[-\w\P{ASCII}]+)/gu],[Nr,/\.(?<nm>[-\w\P{ASCII}]+)/gu],[ze,/\s*,\s*/g],[Ne,/\s*[\s>+~]\s*/g],[$e,/::(?<nm>[-\w\P{ASCII}]+)(?:\((?<arg>¶*)\))?/gu],[_e,/:(?<nm>[-\w\P{ASCII}]+)(?:\((?<arg>¶*)\))?/gu],[$r,/(?:(?<ns>\*|[-\w\P{ASCII}]*)\|)?\*/gu],[qr,/(?:(?<ns>\*|[-\w\P{ASCII}]*)\|)?(?<nm>[-\w\P{ASCII}]+)/gu]]),jr=r=>r==_e||r==$e?RegExp(Me.get(r).source.replace("¶","."),"gu"):Me.get(r),Ur=(r,e)=>{let t=0,n="";for(;e<r.length;e++){let a=r[e];if(a=="("?++t:a==")"&&--t,n+=a,t===0)return n}return n},Yr=/(['"])([^\\\n]*?)\1/g,De=r=>{if((r=r.trim())==="")return[];let e=[];r=(r=r.replace(/\\./g,(a,o)=>(e.push({t:a,l:o}),"".repeat(a.length)))).replace(Yr,(a,o,i,l)=>(e.push({t:a,l}),`${o}${"".repeat(i.length)}${o}`));{let a,o=0;for(;(a=r.indexOf("(",o))>-1;){let i=Ur(r,a);e.push({t:i,l:a}),r=`${r.substring(0,a)}(${"¶".repeat(i.length-2)})${r.substring(a+i.length)}`,o=a+i.length}}let t=(a=>{if(!a)return[];let o=[a];for(let[l,c]of Me.entries())for(let u=0;u<o.length;u++){let d=o[u];if(typeof d!="string")continue;c.lastIndex=0;let p=c.exec(d);if(!p)continue;let g=p.index-1,v=[],f=p[0],y=d.slice(0,g+1);y&&v.push(y),v.push({...p.groups,i:l,o:f});let x=d.slice(g+f.length+1);x&&v.push(x),o.splice(u,1,...v)}let i=0;for(let l of o)typeof l=="string"?Se():(l.u=[i,i+=l.o.length],l.i!=Ne&&l.i!=ze||(l.o=l.o.trim()||" "));return o})(r),n=[];for(let a of e.reverse())for(let o of t){let{l:i,t:l}=a;if(o.u[0]>i||i+l.length>o.u[1])continue;let{o:c}=o,u=i-o.u[0];o.o=c.slice(0,u)+l+c.slice(u+l.length),o.o!==c&&n.push(o)}for(let a of n){let o=jr(a.i);o||Se(),o.lastIndex=0;let i=o.exec(a.o);i||Se(),Hr(a,i.groups)}return t},ar=r=>r.map(e=>e.o).join(""),N=(r,...e)=>({_:r,p:e}),fe="dlc",Pr=()=>[...Array(16)].reduce(r=>r+Math.random().toString(36)[2],""),nr=":global(",qe="dlcss-",ue=br.document,ke=br.Node,He=r=>new Text(r),de=r=>new Comment(r),ye=()=>qe+Pr(),or=r=>{ue=r[0],ke=r[1],He=r[2],de=r[3],ye=r[4],ce=r[5]},kr=()=>[ue,ke,He,de,ye,ce],wr=new Map,ir=r=>typeof r=="symbol"&&Ie(r)?new X(r):r,Cr=r=>{let e={h:[],I:r,m:le()};wr.set(e.m,e);let t=new Proxy(r,{get(n,a,o){if(a==ee)return ae?e.m:vr;if(ae){let i=Be({i:0,A:e,m:le(),S:[ir(a)],h:[]});return new Proxy({},{get(l,c,u){return c==ge?()=>i.m:(i.S.push(ir(c)),u)}})}return Reflect.get(n,a,o)},set(n,a,o,i){let l=Reflect.set(n,a,o,i);return e.h.map(c=>c(a)),l}});return e.P=t,t},Kr=(r,e,t)=>{let n=xr(r);n.I[e]=t.value;let a=!1;t.listen(o=>{a=!0,n.P[e]=o}),n.h.push(o=>{o===e&&(a?a=!1:Ye(t.C,r[o])||(a=!0,r[o]=t.value))})},Xr=r=>typeof r=="object"&&r!==null&&r[ee]==vr,ae=!1,xr=r=>{ae=!0;let e=r[ee];return ae=!1,wr.get(e)},je=new Map,Ue=(r,e)=>e.reduce((t,n)=>t[we(n)],r),Sr=r=>{let e;return r.i==0?e=Ue(r.A.I,r.S):r.i==1?e=r.M.map(t=>t.value):r.i==2&&(e=r.j(Sr(r.C))),e},Ye=(r,e)=>{if(e===Pe)return!1;if(r.i==0){let t=r.S;return Ue(r.A.P,t.slice(0,-1))[we(t.at(-1))]=e,!0}return!(r.i!=2||!r.O)&&Ye(r.C,r.O(e))},Le=r=>{r.h.forEach(e=>e())},Be=r=>(je.set(r.m,r),r),Ie=r=>{let e=je.get(r);if(!e)return!1;let t,n=e.S,a=e.A.I,o=()=>t.forEach((i,l)=>{i.A&&(i.A.h=i.A.h.filter(u=>u!==i.T));let c=t.slice(0,l).map(u=>Ue(a,u.k)).find(Xr);i.A=c?xr(c):e.A,i.A.h.push(i.T)});return t=n.map((i,l)=>(Q(i)&&i.listen(o),{k:n.slice(0,l+1),T(c){c===we(i)&&Le(e)}})),o(),!0},Q=r=>r instanceof X,we=r=>Q(r)?r.value:r,J=(r,e,t)=>{Q(r)&&(t?.(),r.listen(e)),e(we(r))};class X{C;N;constructor(e){this.C=je.get(e)}get value(){return Sr(this.C)}set value(e){Ye(this.C,e)}[ee](){let e=this.C;return e.i==1?e.M:null}[ge](){return this.C.m}j(e,t){let n=Be({i:2,m:le(),h:[],j:e,O:t,C:this.C});return this.listen(a=>Le(n)),n.m}listen(e){this.C.h.push(()=>e(this.value))}zip(...e){let t=Be({i:1,m:le(),h:[],M:[new X(this.C.m),...e]});return t.M.map(n=>n.listen(a=>Le(t))),new X(t.m)}andThen(e,t){return this.map(n=>{let a=n?e:t;return typeof a=="function"?a(n):a})}map(e,t){return new X(this.j(e,t))}mapEach(e){return this.map(t=>Array.from(t).map(e))}clone(){return new X(this.C.m)}}let U=null,ve=!1,Ee=(r,e,t,n)=>{if(r==null)return[de()];if(Q(r)){let a=de("["),o=null;return J(r,i=>{let l=Ee(i,e,t,r.N);if(!ve&&o){if(l.length===o.length&&o.every((u,d)=>u===l[d]))return;o.map(u=>e.removeChild(u));let c=a;for(let u of l)e.insertBefore(u,c.nextSibling),c=u}o=l}),[a,...o,de("]")]}if(r instanceof ke){let a,o=i=>{if(a=i.classList){let l=[...a],c=l.find(u=>u.startsWith(qe));if(l.find(u=>u==fe))return;c?n&&c!==n&&(a.remove(c),a.add(n)):a.add(n||t),[...i.childNodes].map(o)}};return(n||t)&&o(r),[r]}return r instanceof Array?r.flatMap(a=>Ee(a,e,t,n)):[He(r)]},sr="createElement",Fe=new Map,m=(r,e,t)=>{let{children:n,...a}=e;t&&(a.key=t),n||=[];let o,i=n instanceof Array?n:[n];if(typeof r=="function"){let l=Cr({});ce?.(r);for(let p in a){let g=a[p];Q(g)?Kr(l,p,g):l[p]=g}for(let p of i)Q(p)&&(p.N||=U);let c=Fe.get(r);if(r.style){let p=r.style,g=ue[sr]("style");if(!c){c={m:ye(),R:[]};let v="";for(let f=0;f<p._.length;f++)if(v+=p._[f],f+1<p._.length){let y=p.p[f];if(typeof y=="string")v+=y;else{let x=ye();v+=`var(--${x})`,c.R.push([x,y])}}g.setAttribute("dl-"+fe,r.name),ve||(ue.head.append(g),((f,y,x)=>{let R=De(`:where(.${x})`),F=`:where(._${Pr()} `,A=(D,E)=>{for(let M=0;M<D.length;M++){let B,z,K,$=D[M];if($.i==_e&&$.arg){let j=$.nm=="global",W=A(De($.arg),j||E);j?(B=M,z=1,K=W):($.arg=ar(W),$.o=`:${$.nm}(${$.arg})`)}else if(!E&&(M===D.length-1||[Ne,ze].includes(D[M+1].i))){for(B=M;B>0&&D[B].i==$e;)B--;B++,z=0,K=R}K&&(D.splice(B,z,...K),M+=K.length)}return D},L=D=>[...D].map(E=>(E.selectorText&&(E.selectorText=ar(A(De(E.selectorText.replaceAll(F,nr)))).replace(/:scope/g,`.${x}.${fe}`)),E.cssRules&&L(E.cssRules),E));f.innerText=y.replaceAll(nr,F),L(f.sheet.cssRules)})(g,v,c.m)),Fe.set(r,c)}}let u={state:l,children:i,id:c?.m},d=U;if(U=c?.m,o=r.call(l,u),U=d,u.root=o,o instanceof ke&&(o.$=u,o.classList.add(fe),c))for(let[p,g]of c.R){let v="--"+p,f=o.style;J(g(u.state),y=>{y===void 0?f.removeProperty(v):f.setProperty(v,y)})}ce?.(r,u),u.init?.(),ce||u.mount?.()}else{let l=a?.xmlns;o=ue[sr+(l?"NS":"")](l||r,l&&r,a,i);let c=(d,p)=>{p===void 0||p===!1?o.removeAttribute(d):o.setAttribute(d,p)};for(let d of i){let p=Ee(d,o,U);ve||p.map(g=>o.appendChild(g))}let u=o.classList;for(let d in a){let p=a[d];if(d==="this")p.value=o;else if(d==="value"||d==="checked")J(p,g=>{c(d,g),o.value=g},()=>{o.addEventListener("change",()=>p.value=o[d])});else if(d==="class"){let g=[];J(p,v=>{let f=v.split(" ").filter(y=>y.length);g.length&&u.remove(...g),f.length&&u.add(...f),g=f})}else if(d.startsWith("on:"))o.addEventListener(d.substring(3),g=>p(g));else if(d.startsWith("class:")){let g=d.substring(6);J(p,v=>{v?u.add(g):u.remove(g)})}else if(d.startsWith("attr:")){let g=d.substring(5);J(p,v=>{o[g]=v})}else if(d!="style"||typeof p!="object"||Q(p))J(p,g=>c(d,g));else for(let g in p)J(p[g],v=>{o.style.setProperty(g,v)})}U&&![...u].find(d=>d.startsWith(qe))&&u.add(U),l&&(o.innerHTML=o.innerHTML)}return o},Ke=()=>{let r=[],e=t=>((n,a)=>a.map(o=>{let i=U;U=o.N,o.J(n),U=i}))(t,r);return e.listen=t=>{r.push({J:t,N:U})},e};Object.defineProperty(globalThis,"use",{get(){let r=ae;return ae=!0,(e,...t)=>{if(ae=r,e instanceof Array&&"raw"in e)return((a,o)=>{let i=Cr({}),l=[];for(let c in a)if(l.push(a[c]),o[c]){let u,d=o[c],p=d[ge]();if(Q(d)?u=d:Ie(p)&&(u=new X(p)),u){let g=l.length;u.listen(v=>{l[g]=v,i.L=l.join("")}),l.push(u.value)}else l.push(d)}return i.L=l.join(""),use(i.L)})(e,t);let n=a=>{let o=a[ge]();return Ie(o),new X(o)};return t=t.map(n),e=n(e),t.length?e.zip(...t):e}},configurable:!0}),m[ee]=r=>ve=r,m[Pe]=()=>Fe=new Map;let lr="dlssr-id",Dr=JSON,Wr=(r,e,t)=>{let n=(i,l)=>{l instanceof Array?i[ee]().forEach((c,u)=>n(c,l[u])):i.value=a(l.v,i.value,!0)},a=(i,l,c)=>{if(typeof i=="number")return Dr.parse(r.v[i]);if(i.t=="p")return n(l,i.v),c?Pe:l;if(i.t=="s")return new Set(i.v.map(u=>a(u)));if(i.t=="m"){let u={};return o(i.v,u),new Map(Object.entries(u))}return i.t=="o"?(o(i.v,l),l):void 0},o=(i,l)=>{for(let[c,u]of i){let d=r.k[c];l[d]=a(u,l[d])}};o(e,t)},Gr=(r,e,t,n)=>{let a=m("textarea",{});a.innerHTML=n.innerText;let o=Dr.parse(a.value),i=[],l=+e.getAttribute(lr),c=-1,u=f=>{let y=`[${lr}="${f}"]`,x=l==f?e:e.querySelector(y)||t.querySelector(y);return x?.$&&i.push([f,x]),x},d=()=>{let[f,y]=o.n[++c];return u(f).childNodes[y]},p=kr(),g=[{createElement:f=>u(++c)||p[0].createElement(f),createElementNS:(f,y)=>u(++c)||p[0].createElement(f,y),head:p[0].head},p[1],f=>d()||p[2](f),f=>d()||p[3](f),()=>o.i[c+1],p[5]];or(g),m[Pe](),m[ee](!0);let v=r();m[ee](!1),or(p);for(let[f,y]of i.filter(x=>x[1].$)){let x=o.n[f];Wr(o,x,y.$.state)}return v},cr=(r,e,t,n)=>{let a=r.t;return a instanceof Function?a(t,n):a},ur=(r,e,t,n,a)=>{if("$"in r){let o=r.$.state;for(let i in n)o[i]=n[i];a&&(o.outlet=a),o["on:routeshown"]?.(t)}},dr=function(r){return{i:this.path,t:this.show,l:r.children}};class Xe{o;u;static h;constructor(e){this.u=e,Xe.h=this}mount(e,t){this.o=e,t||(this.route(),addEventListener("popstate",()=>{this.route()}))}navigate(e){let t=this.route(e);return t&&history.pushState(null,"",e),t}ssgables(){let e=(t,n)=>(n.i&&(t+="/"+n.i),n.l.length?n.l.map(a=>e(t,a)).flat():n.i&&n.i.startsWith(":")?void 0:[[t||"/",n.i?t+".html":t+"/index.html"]]);return e("",this.u)}route(e=location.pathname,t=location.origin){let n=new URL(e,t).pathname,a=n.split("/").slice(1),o=this._(this.u,n,[...a],{});return o&&o!==this.o&&(this.o.replaceWith(o),this.o=o),!!o}_(e,t,n,a){let o=[],i=!1;if(e.i?o=e.i.split("/"):e.l.length||(i=!0),!o.length||n.splice(0,o.length).every((l,c)=>((u,d,p)=>d.startsWith(":")?(p[d.substring(1)]=u,!0):u===d)(l,o[c],a))){if(!n.length||n[0]===""&&i){let l=cr(e,0,t,a);return ur(l,0,t,a),l}{let l,c={...a};for(let u of e.l||[])if(l=this._(u,t,[...n],a),l)break;if(l){let u=cr(e,0,t,c);return u?(ur(u,0,t,a,l),u):l}}}return null}}function q(r){return 0>r?-1:r===0?0:1}function he(r,e,t){return(1-t)*r+t*e}function _(r,e,t){return r>t?r:t>e?e:t}function Jr(r){return 0>(r%=360)&&(r+=360),r}function Ae(r,e){return[r[0]*e[0][0]+r[1]*e[0][1]+r[2]*e[0][2],r[0]*e[1][0]+r[1]*e[1][1]+r[2]*e[1][2],r[0]*e[2][0]+r[1]*e[2][1]+r[2]*e[2][2]]}const Zr=[[.41233895,.35762064,.18051042],[.2126,.7152,.0722],[.01932141,.11916382,.95034478]],Qr=[[3.2413774792388685,-1.5376652402851851,-.49885366846268053],[-.9691452513005321,1.8758853451067872,.04156585616912061],[.05562093689691305,-.20395524564742123,1.0571799111220335]],et=[95.047,100,108.883];function We(r,e,t){return(255<<24|(255&r)<<16|(255&e)<<8|255&t)>>>0}function hr(r){return We(ne(r[0]),ne(r[1]),ne(r[2]))}function rt(r){return r>>16&255}function tt(r){return r>>8&255}function at(r){return 255&r}function nt(r,e,t){const n=Qr,a=n[0][0]*r+n[0][1]*e+n[0][2]*t,o=n[1][0]*r+n[1][1]*e+n[1][2]*t,i=n[2][0]*r+n[2][1]*e+n[2][2]*t;return We(ne(a),ne(o),ne(i))}function mr(r){const e=(t=>Ae([se(rt(t)),se(tt(t)),se(at(t))],Zr))(r)[1];return 116*Tr(e/100)-16}function Z(r){return 100*ot((r+16)/116)}function Ve(r){return 116*Tr(r/100)-16}function se(r){const e=r/255;return e>.040449936?100*Math.pow((e+.055)/1.055,2.4):e/12.92*100}function ne(r){const e=r/100;let t=0;return t=e>.0031308?1.055*Math.pow(e,1/2.4)-.055:12.92*e,0>(n=Math.round(255*t))?0:n>255?255:n;var n}function Tr(r){return r>216/24389?Math.pow(r,1/3):(24389/27*r+16)/116}function ot(r){const e=r*r*r;return e>216/24389?e:(116*r-16)/(24389/27)}class Y{static make(e=et,t=200/Math.PI*Z(50)/100,n=50,a=2,o=!1){const i=e,l=.401288*i[0]+.650173*i[1]+-.051461*i[2],c=-.250268*i[0]+1.204414*i[1]+.045854*i[2],u=-.002079*i[0]+.048952*i[1]+.953127*i[2],d=.8+a/10,p=.9>d?he(.525,.59,10*(d-.8)):he(.59,.69,10*(d-.9));let g=o?1:d*(1-1/3.6*Math.exp((-t-42)/92));g=g>1?1:0>g?0:g;const v=d,f=[g*(100/l)+1-g,g*(100/c)+1-g,g*(100/u)+1-g],y=1/(5*t+1),x=y*y*y*y,R=1-x,F=x*t+.1*R*R*Math.cbrt(5*t),A=Z(n)/e[1],L=1.48+Math.sqrt(A),D=.725/Math.pow(A,.2),E=D,M=[Math.pow(F*f[0]*l/100,.42),Math.pow(F*f[1]*c/100,.42),Math.pow(F*f[2]*u/100,.42)],B=[400*M[0]/(M[0]+27.13),400*M[1]/(M[1]+27.13),400*M[2]/(M[2]+27.13)];return new Y(A,(2*B[0]+B[1]+.05*B[2])*D,D,E,p,v,f,F,Math.pow(F,.25),L)}constructor(e,t,n,a,o,i,l,c,u,d){this.n=e,this.aw=t,this.nbb=n,this.ncb=a,this.c=o,this.nc=i,this.rgbD=l,this.fl=c,this.fLRoot=u,this.z=d}}Y.DEFAULT=Y.make();class H{constructor(e,t,n,a,o,i,l,c,u){this.hue=e,this.chroma=t,this.j=n,this.q=a,this.m=o,this.s=i,this.jstar=l,this.astar=c,this.bstar=u}distance(e){const t=this.jstar-e.jstar,n=this.astar-e.astar,a=this.bstar-e.bstar;return 1.41*Math.pow(Math.sqrt(t*t+n*n+a*a),.63)}static fromInt(e){return H.fromIntInViewingConditions(e,Y.DEFAULT)}static fromIntInViewingConditions(e,t){const n=(65280&e)>>8,a=255&e,o=se((16711680&e)>>16),i=se(n),l=se(a),c=.41233895*o+.35762064*i+.18051042*l,u=.2126*o+.7152*i+.0722*l,d=.01932141*o+.11916382*i+.95034478*l,p=.401288*c+.650173*u-.051461*d,g=-.250268*c+1.204414*u+.045854*d,v=-.002079*c+.048952*u+.953127*d,f=t.rgbD[0]*p,y=t.rgbD[1]*g,x=t.rgbD[2]*v,R=Math.pow(t.fl*Math.abs(f)/100,.42),F=Math.pow(t.fl*Math.abs(y)/100,.42),A=Math.pow(t.fl*Math.abs(x)/100,.42),L=400*q(f)*R/(R+27.13),D=400*q(y)*F/(F+27.13),E=400*q(x)*A/(A+27.13),M=(11*L+-12*D+E)/11,B=(L+D-2*E)/9,z=(20*L+20*D+21*E)/20,K=(40*L+20*D+E)/20,$=180*Math.atan2(B,M)/Math.PI,j=0>$?$+360:360>$?$:$-360,W=j*Math.PI/180,me=K*t.nbb,re=100*Math.pow(me/t.aw,t.c*t.z),xe=4/t.c*Math.sqrt(re/100)*(t.aw+4)*t.fLRoot,pe=5e4/13*.25*(Math.cos((20.14>j?j+360:j)*Math.PI/180+2)+3.8)*t.nc*t.ncb,Qe=Math.pow(pe*Math.sqrt(M*M+B*B)/(z+.305),.9)*Math.pow(1.64-Math.pow(.29,t.n),.73),er=Qe*Math.sqrt(re/100),rr=er*t.fLRoot,Or=50*Math.sqrt(Qe*t.c/(t.aw+4)),Rr=(1+100*.007)*re/(1+.007*re),tr=1/.0228*Math.log(1+.0228*rr);return new H(j,er,re,xe,rr,Or,Rr,tr*Math.cos(W),tr*Math.sin(W))}static fromJch(e,t,n){return H.fromJchInViewingConditions(e,t,n,Y.DEFAULT)}static fromJchInViewingConditions(e,t,n,a){const o=4/a.c*Math.sqrt(e/100)*(a.aw+4)*a.fLRoot,i=t*a.fLRoot,l=50*Math.sqrt(t/Math.sqrt(e/100)*a.c/(a.aw+4)),c=n*Math.PI/180,u=(1+100*.007)*e/(1+.007*e),d=1/.0228*Math.log(1+.0228*i);return new H(n,t,e,o,i,l,u,d*Math.cos(c),d*Math.sin(c))}static fromUcs(e,t,n){return H.fromUcsInViewingConditions(e,t,n,Y.DEFAULT)}static fromUcsInViewingConditions(e,t,n,a){const o=t,i=n,l=(Math.exp(.0228*Math.sqrt(o*o+i*i))-1)/.0228/a.fLRoot;let c=Math.atan2(i,o)*(180/Math.PI);0>c&&(c+=360);const u=e/(1-.007*(e-100));return H.fromJchInViewingConditions(u,l,c,a)}toInt(){return this.viewed(Y.DEFAULT)}viewed(e){const t=this.chroma===0||this.j===0?0:this.chroma/Math.sqrt(this.j/100),n=Math.pow(t/Math.pow(1.64-Math.pow(.29,e.n),.73),1/.9),a=this.hue*Math.PI/180,o=.25*(Math.cos(a+2)+3.8),i=e.aw*Math.pow(this.j/100,1/e.c/e.z),l=o*(5e4/13)*e.nc*e.ncb,c=i/e.nbb,u=Math.sin(a),d=Math.cos(a),p=23*(c+.305)*n/(23*l+11*n*d+108*n*u),g=p*d,v=p*u,f=(460*c+451*g+288*v)/1403,y=(460*c-891*g-261*v)/1403,x=(460*c-220*g-6300*v)/1403,R=Math.max(0,27.13*Math.abs(f)/(400-Math.abs(f))),F=q(f)*(100/e.fl)*Math.pow(R,1/.42),A=Math.max(0,27.13*Math.abs(y)/(400-Math.abs(y))),L=q(y)*(100/e.fl)*Math.pow(A,1/.42),D=Math.max(0,27.13*Math.abs(x)/(400-Math.abs(x))),E=q(x)*(100/e.fl)*Math.pow(D,1/.42),M=F/e.rgbD[0],B=L/e.rgbD[1],z=E/e.rgbD[2];return nt(1.86206786*M-1.01125463*B+.14918677*z,.38752654*M+.62144744*B-.00897398*z,-.0158415*M-.03412294*B+1.04996444*z)}static fromXyzInViewingConditions(e,t,n,a){const o=.401288*e+.650173*t-.051461*n,i=-.250268*e+1.204414*t+.045854*n,l=-.002079*e+.048952*t+.953127*n,c=a.rgbD[0]*o,u=a.rgbD[1]*i,d=a.rgbD[2]*l,p=Math.pow(a.fl*Math.abs(c)/100,.42),g=Math.pow(a.fl*Math.abs(u)/100,.42),v=Math.pow(a.fl*Math.abs(d)/100,.42),f=400*q(c)*p/(p+27.13),y=400*q(u)*g/(g+27.13),x=400*q(d)*v/(v+27.13),R=(11*f+-12*y+x)/11,F=(f+y-2*x)/9,A=(20*f+20*y+21*x)/20,L=(40*f+20*y+x)/20,D=180*Math.atan2(F,R)/Math.PI,E=0>D?D+360:360>D?D:D-360,M=E*Math.PI/180,B=L*a.nbb,z=100*Math.pow(B/a.aw,a.c*a.z),K=4/a.c*Math.sqrt(z/100)*(a.aw+4)*a.fLRoot,$=5e4/13*(1/4)*(Math.cos((20.14>E?E+360:E)*Math.PI/180+2)+3.8)*a.nc*a.ncb,j=Math.pow($*Math.sqrt(R*R+F*F)/(A+.305),.9)*Math.pow(1.64-Math.pow(.29,a.n),.73),W=j*Math.sqrt(z/100),me=W*a.fLRoot,re=50*Math.sqrt(j*a.c/(a.aw+4)),xe=(1+100*.007)*z/(1+.007*z),pe=Math.log(1+.0228*me)/.0228;return new H(E,W,z,K,me,re,xe,pe*Math.cos(M),pe*Math.sin(M))}xyzInViewingConditions(e){const t=this.chroma===0||this.j===0?0:this.chroma/Math.sqrt(this.j/100),n=Math.pow(t/Math.pow(1.64-Math.pow(.29,e.n),.73),1/.9),a=this.hue*Math.PI/180,o=.25*(Math.cos(a+2)+3.8),i=e.aw*Math.pow(this.j/100,1/e.c/e.z),l=o*(5e4/13)*e.nc*e.ncb,c=i/e.nbb,u=Math.sin(a),d=Math.cos(a),p=23*(c+.305)*n/(23*l+11*n*d+108*n*u),g=p*d,v=p*u,f=(460*c+451*g+288*v)/1403,y=(460*c-891*g-261*v)/1403,x=(460*c-220*g-6300*v)/1403,R=Math.max(0,27.13*Math.abs(f)/(400-Math.abs(f))),F=q(f)*(100/e.fl)*Math.pow(R,1/.42),A=Math.max(0,27.13*Math.abs(y)/(400-Math.abs(y))),L=q(y)*(100/e.fl)*Math.pow(A,1/.42),D=Math.max(0,27.13*Math.abs(x)/(400-Math.abs(x))),E=q(x)*(100/e.fl)*Math.pow(D,1/.42),M=F/e.rgbD[0],B=L/e.rgbD[1],z=E/e.rgbD[2];return[1.86206786*M-1.01125463*B+.14918677*z,.38752654*M+.62144744*B-.00897398*z,-.0158415*M-.03412294*B+1.04996444*z]}}class w{static sanitizeRadians(e){return(e+8*Math.PI)%(2*Math.PI)}static trueDelinearized(e){const t=e/100;let n=0;return n=t>.0031308?1.055*Math.pow(t,1/2.4)-.055:12.92*t,255*n}static chromaticAdaptation(e){const t=Math.pow(Math.abs(e),.42);return 400*q(e)*t/(t+27.13)}static hueOf(e){const t=Ae(e,w.SCALED_DISCOUNT_FROM_LINRGB),n=w.chromaticAdaptation(t[0]),a=w.chromaticAdaptation(t[1]),o=w.chromaticAdaptation(t[2]);return Math.atan2((n+a-2*o)/9,(11*n+-12*a+o)/11)}static areInCyclicOrder(e,t,n){const a=w.sanitizeRadians(t-e);return w.sanitizeRadians(n-e)>a}static intercept(e,t,n){return(t-e)/(n-e)}static lerpPoint(e,t,n){return[e[0]+(n[0]-e[0])*t,e[1]+(n[1]-e[1])*t,e[2]+(n[2]-e[2])*t]}static setCoordinate(e,t,n,a){const o=w.intercept(e[a],t,n[a]);return w.lerpPoint(e,o,n)}static isBounded(e){return e>=0&&100>=e}static nthVertex(e,t){const n=w.Y_FROM_LINRGB[0],a=w.Y_FROM_LINRGB[1],o=w.Y_FROM_LINRGB[2],i=t%4>1?100:0,l=t%2==0?0:100;if(4>t){const c=i,u=l,d=(e-c*a-u*o)/n;return w.isBounded(d)?[d,c,u]:[-1,-1,-1]}if(8>t){const c=i,u=l,d=(e-u*n-c*o)/a;return w.isBounded(d)?[u,d,c]:[-1,-1,-1]}{const c=i,u=l,d=(e-c*n-u*a)/o;return w.isBounded(d)?[c,u,d]:[-1,-1,-1]}}static bisectToSegment(e,t){let n=[-1,-1,-1],a=n,o=0,i=0,l=!1,c=!0;for(let u=0;12>u;u++){const d=w.nthVertex(e,u);if(0>d[0])continue;const p=w.hueOf(d);l?(c||w.areInCyclicOrder(o,p,i))&&(c=!1,w.areInCyclicOrder(o,t,p)?(a=d,i=p):(n=d,o=p)):(n=d,a=d,o=p,i=p,l=!0)}return[n,a]}static midpoint(e,t){return[(e[0]+t[0])/2,(e[1]+t[1])/2,(e[2]+t[2])/2]}static criticalPlaneBelow(e){return Math.floor(e-.5)}static criticalPlaneAbove(e){return Math.ceil(e-.5)}static bisectToLimit(e,t){const n=w.bisectToSegment(e,t);let a=n[0],o=w.hueOf(a),i=n[1];for(let l=0;3>l;l++)if(a[l]!==i[l]){let c=-1,u=255;a[l]<i[l]?(c=w.criticalPlaneBelow(w.trueDelinearized(a[l])),u=w.criticalPlaneAbove(w.trueDelinearized(i[l]))):(c=w.criticalPlaneAbove(w.trueDelinearized(a[l])),u=w.criticalPlaneBelow(w.trueDelinearized(i[l])));for(let d=0;8>d&&Math.abs(u-c)>1;d++){const p=Math.floor((c+u)/2),g=w.CRITICAL_PLANES[p],v=w.setCoordinate(a,g,i,l),f=w.hueOf(v);w.areInCyclicOrder(o,t,f)?(i=v,u=p):(a=v,o=f,c=p)}}return w.midpoint(a,i)}static inverseChromaticAdaptation(e){const t=Math.abs(e),n=Math.max(0,27.13*t/(400-t));return q(e)*Math.pow(n,1/.42)}static findResultByJ(e,t,n){let a=11*Math.sqrt(n);const o=Y.DEFAULT,i=1/Math.pow(1.64-Math.pow(.29,o.n),.73),l=.25*(Math.cos(e+2)+3.8)*(5e4/13)*o.nc*o.ncb,c=Math.sin(e),u=Math.cos(e);for(let d=0;5>d;d++){const p=a/100,g=Math.pow((t===0||a===0?0:t/Math.sqrt(p))*i,1/.9),v=o.aw*Math.pow(p,1/o.c/o.z)/o.nbb,f=23*(v+.305)*g/(23*l+11*g*u+108*g*c),y=f*u,x=f*c,R=(460*v+451*y+288*x)/1403,F=(460*v-891*y-261*x)/1403,A=(460*v-220*y-6300*x)/1403,L=Ae([w.inverseChromaticAdaptation(R),w.inverseChromaticAdaptation(F),w.inverseChromaticAdaptation(A)],w.LINRGB_FROM_SCALED_DISCOUNT);if(0>L[0]||0>L[1]||0>L[2])return 0;const D=w.Y_FROM_LINRGB[0],E=w.Y_FROM_LINRGB[1],M=w.Y_FROM_LINRGB[2],B=D*L[0]+E*L[1]+M*L[2];if(0>=B)return 0;if(d===4||.002>Math.abs(B-n))return L[0]>100.01||L[1]>100.01||L[2]>100.01?0:hr(L);a-=(B-n)*a/(2*B)}return 0}static solveToInt(e,t,n){if(1e-4>t||1e-4>n||n>99.9999)return(l=>{const c=ne(Z(l));return We(c,c,c)})(n);const a=(e=Jr(e))/180*Math.PI,o=Z(n),i=w.findResultByJ(a,t,o);return i!==0?i:hr(w.bisectToLimit(o,a))}static solveToCam(e,t,n){return H.fromInt(w.solveToInt(e,t,n))}}w.SCALED_DISCOUNT_FROM_LINRGB=[[.001200833568784504,.002389694492170889,.0002795742885861124],[.0005891086651375999,.0029785502573438758,.0003270666104008398],[.00010146692491640572,.0005364214359186694,.0032979401770712076]],w.LINRGB_FROM_SCALED_DISCOUNT=[[1373.2198709594231,-1100.4251190754821,-7.278681089101213],[-271.815969077903,559.6580465940733,-32.46047482791194],[1.9622899599665666,-57.173814538844006,308.7233197812385]],w.Y_FROM_LINRGB=[.2126,.7152,.0722],w.CRITICAL_PLANES=[.015176349177441876,.045529047532325624,.07588174588720938,.10623444424209313,.13658714259697685,.16693984095186062,.19729253930674434,.2276452376616281,.2579979360165119,.28835063437139563,.3188300904430532,.350925934958123,.3848314933096426,.42057480301049466,.458183274052838,.4976837250274023,.5391024159806381,.5824650784040898,.6277969426914107,.6751227633498623,.7244668422128921,.775853049866786,.829304845476233,.8848452951698498,.942497089126609,1.0022825574869039,1.0642236851973577,1.1283421258858297,1.1946592148522128,1.2631959812511864,1.3339731595349034,1.407011200216447,1.4823302800086415,1.5599503113873272,1.6398909516233677,1.7221716113234105,1.8068114625156377,1.8938294463134073,1.9832442801866852,2.075074464868551,2.1693382909216234,2.2660538449872063,2.36523901573795,2.4669114995532007,2.5710888059345764,2.6777882626779785,2.7870270208169257,2.898822059350997,3.0131901897720907,3.1301480604002863,3.2497121605402226,3.3718988244681087,3.4967242352587946,3.624204428461639,3.754355295633311,3.887192587735158,4.022731918402185,4.160988767090289,4.301978482107941,4.445716283538092,4.592217266055746,4.741496401646282,4.893568542229298,5.048448422192488,5.20615066083972,5.3666897647573375,5.5300801301023865,5.696336044816294,5.865471690767354,6.037501145825082,6.212438385869475,6.390297286737924,6.571091626112461,6.7548350853498045,6.941541251256611,7.131223617812143,7.323895587840543,7.5195704746346665,7.7182615035334345,7.919981813454504,8.124744458384042,8.332562408825165,8.543448553206703,8.757415699253682,8.974476575321063,9.194643831691977,9.417930041841839,9.644347703669503,9.873909240696694,10.106627003236781,10.342513269534024,10.58158024687427,10.8238400726681,11.069304815507364,11.317986476196008,11.569896988756009,11.825048221409341,12.083451977536606,12.345119996613247,12.610063955123938,12.878295467455942,13.149826086772048,13.42466730586372,13.702830557985108,13.984327217668513,14.269168601521828,14.55736596900856,14.848930523210871,15.143873411576273,15.44220572664832,15.743938506781891,16.04908273684337,16.35764934889634,16.66964922287304,16.985093187232053,17.30399201960269,17.62635644741625,17.95219714852476,18.281524751807332,18.614349837764564,18.95068293910138,19.290534541298456,19.633915083172692,19.98083495742689,20.331304511189067,20.685334046541502,21.042933821039977,21.404114048223256,21.76888489811322,22.137256497705877,22.50923893145328,22.884842241736916,23.264076429332462,23.6469514538663,24.033477234264016,24.42366364919083,24.817520537484558,25.21505769858089,25.61628489293138,26.021211842414342,26.429848230738664,26.842203703840827,27.258287870275353,27.678110301598522,28.10168053274597,28.529008062403893,28.96010235337422,29.39497283293396,29.83362889318845,30.276079891419332,30.722335150426627,31.172403958865512,31.62629557157785,32.08401920991837,32.54558406207592,33.010999283389665,33.4802739966603,33.953417292456834,34.430438229418264,34.911345834551085,35.39614910352207,35.88485700094671,36.37747846067349,36.87402238606382,37.37449765026789,37.87891309649659,38.38727753828926,38.89959975977785,39.41588851594697,39.93615253289054,40.460400508064545,40.98864111053629,41.520882981230194,42.05713473317016,42.597404951718396,43.141702194811224,43.6900349931913,44.24241185063697,44.798841244188324,45.35933162437017,45.92389141541209,46.49252901546552,47.065252796817916,47.64207110610409,48.22299226451468,48.808024568002054,49.3971762874833,49.9904556690408,50.587870934119984,51.189430279724725,51.79514187861014,52.40501387947288,53.0190544071392,53.637271562750364,54.259673423945976,54.88626804504493,55.517063457223934,56.15206766869424,56.79128866487574,57.43473440856916,58.08241284012621,58.734331877617365,59.39049941699807,60.05092333227251,60.715611475655585,61.38457167773311,62.057811747619894,62.7353394731159,63.417162620860914,64.10328893648692,64.79372614476921,65.48848194977529,66.18756403501224,66.89098006357258,67.59873767827808,68.31084450182222,69.02730813691093,69.74813616640164,70.47333615344107,71.20291564160104,71.93688215501312,72.67524319850172,73.41800625771542,74.16517879925733,74.9167682708136,75.67278210128072,76.43322770089146,77.1981124613393,77.96744375590167,78.74122893956174,79.51947534912904,80.30219030335869,81.08938110306934,81.88105503125999,82.67721935322541,83.4778813166706,84.28304815182372,85.09272707154808,85.90692527145302,86.72564993000343,87.54890820862819,88.3767072518277,89.2090541872801,90.04595612594655,90.88742016217518,91.73345337380438,92.58406282226491,93.43925555268066,94.29903859396902,95.16341895893969,96.03240364439274,96.9059996312159,97.78421388448044,98.6670533535366,99.55452497210776];class T{static from(e,t,n){return new T(w.solveToInt(e,t,n))}static fromInt(e){return new T(e)}toInt(){return this.argb}get hue(){return this.internalHue}set hue(e){this.setInternalState(w.solveToInt(e,this.internalChroma,this.internalTone))}get chroma(){return this.internalChroma}set chroma(e){this.setInternalState(w.solveToInt(this.internalHue,e,this.internalTone))}get tone(){return this.internalTone}set tone(e){this.setInternalState(w.solveToInt(this.internalHue,this.internalChroma,e))}setValue(e,t){this[e]=t}toString(){return`HCT(${this.hue.toFixed(0)}, ${this.chroma.toFixed(0)}, ${this.tone.toFixed(0)})`}static isBlue(e){return e>=250&&270>e}static isYellow(e){return e>=105&&125>e}static isCyan(e){return e>=170&&207>e}constructor(e){this.argb=e;const t=H.fromInt(e);this.internalHue=t.hue,this.internalChroma=t.chroma,this.internalTone=mr(e),this.argb=e}setInternalState(e){const t=H.fromInt(e);this.internalHue=t.hue,this.internalChroma=t.chroma,this.internalTone=mr(e),this.argb=e}inViewingConditions(e){const t=H.fromInt(this.toInt()).xyzInViewingConditions(e),n=H.fromXyzInViewingConditions(t[0],t[1],t[2],Y.make());return T.from(n.hue,n.chroma,Ve(t[1]))}}class V{static ratioOfTones(e,t){return e=_(0,100,e),t=_(0,100,t),V.ratioOfYs(Z(e),Z(t))}static ratioOfYs(e,t){const n=e>t?e:t;return(n+5)/((n===t?e:t)+5)}static lighter(e,t){if(0>e||e>100)return-1;const n=Z(e),a=t*(n+5)-5,o=V.ratioOfYs(a,n);if(t>o&&Math.abs(o-t)>.04)return-1;const i=Ve(a)+.4;return 0>i||i>100?-1:i}static darker(e,t){if(0>e||e>100)return-1;const n=Z(e),a=(n+5)/t-5,o=V.ratioOfYs(n,a);if(t>o&&Math.abs(o-t)>.04)return-1;const i=Ve(a)-.4;return 0>i||i>100?-1:i}static lighterUnsafe(e,t){const n=V.lighter(e,t);return 0>n?100:n}static darkerUnsafe(e,t){const n=V.darker(e,t);return 0>n?0:n}}class Ge{static isDisliked(e){const t=Math.round(e.hue)>=90&&111>=Math.round(e.hue),n=Math.round(e.chroma)>16,a=65>Math.round(e.tone);return t&&n&&a}static fixIfDisliked(e){return Ge.isDisliked(e)?T.from(e.hue,e.chroma,70):e}}function C(r,e,t){return((n,a,o)=>{if(n.name!==o.name)throw Error(`Attempting to extend color ${n.name} with color ${o.name} of different name for spec version ${a}.`);if(n.isBackground!==o.isBackground)throw Error(`Attempting to extend color ${n.name} as a ${n.isBackground?"background":"foreground"} with color ${o.name} as a ${o.isBackground?"background":"foreground"} for spec version ${a}.`)})(r,e,t),h.fromPalette({name:r.name,palette:n=>n.specVersion===e?t.palette(n):r.palette(n),tone:n=>n.specVersion===e?t.tone(n):r.tone(n),isBackground:r.isBackground,chromaMultiplier(n){const a=n.specVersion===e?t.chromaMultiplier:r.chromaMultiplier;return a!==void 0?a(n):1},background(n){const a=n.specVersion===e?t.background:r.background;return a!==void 0?a(n):void 0},secondBackground(n){const a=n.specVersion===e?t.secondBackground:r.secondBackground;return a!==void 0?a(n):void 0},contrastCurve(n){const a=n.specVersion===e?t.contrastCurve:r.contrastCurve;return a!==void 0?a(n):void 0},toneDeltaPair(n){const a=n.specVersion===e?t.toneDeltaPair:r.toneDeltaPair;return a!==void 0?a(n):void 0}})}class h{static fromPalette(e){return new h(e.name??"",e.palette,e.tone??h.getInitialToneFromBackground(e.background),e.isBackground??!1,e.chromaMultiplier,e.background,e.secondBackground,e.contrastCurve,e.toneDeltaPair)}static getInitialToneFromBackground(e){return e===void 0?t=>50:t=>e(t)?e(t).getTone(t):50}constructor(e,t,n,a,o,i,l,c,u){if(this.name=e,this.palette=t,this.tone=n,this.isBackground=a,this.chromaMultiplier=o,this.background=i,this.secondBackground=l,this.contrastCurve=c,this.toneDeltaPair=u,this.hctCache=new Map,!i&&l)throw Error(`Color ${e} has secondBackgrounddefined, but background is not defined.`);if(!i&&c)throw Error(`Color ${e} has contrastCurvedefined, but background is not defined.`);if(i&&!c)throw Error(`Color ${e} has backgrounddefined, but contrastCurve is not defined.`)}clone(){return h.fromPalette({name:this.name,palette:this.palette,tone:this.tone,isBackground:this.isBackground,chromaMultiplier:this.chromaMultiplier,background:this.background,secondBackground:this.secondBackground,contrastCurve:this.contrastCurve,toneDeltaPair:this.toneDeltaPair})}clearCache(){this.hctCache.clear()}getArgb(e){return this.getHct(e).toInt()}getHct(e){const t=this.hctCache.get(e);if(t!=null)return t;const n=pr(e.specVersion).getHct(e,this);return this.hctCache.size>4&&this.hctCache.clear(),this.hctCache.set(e,n),n}getTone(e){return pr(e.specVersion).getTone(e,this)}static foregroundTone(e,t){const n=V.lighterUnsafe(e,t),a=V.darkerUnsafe(e,t),o=V.ratioOfTones(n,e),i=V.ratioOfTones(a,e);return h.tonePrefersLightForeground(e)?o>=t||o>=i||.1>Math.abs(o-i)&&t>o&&t>i?n:a:t>i&&o>i?n:a}static tonePrefersLightForeground(e){return 60>Math.round(e)}static toneAllowsLightForeground(e){return 49>=Math.round(e)}static enableLightForeground(e){return h.tonePrefersLightForeground(e)&&!h.toneAllowsLightForeground(e)?49:e}}const it=new class{getHct(r,e){const t=e.getTone(r);return e.palette(r).getHct(t)}getTone(r,e){const t=0>r.contrastLevel,n=e.toneDeltaPair?e.toneDeltaPair(r):void 0;if(n){const a=n.roleA,o=n.roleB,i=n.delta,l=n.polarity,c=n.stayTogether,u=l==="nearer"||l==="lighter"&&!r.isDark||l==="darker"&&r.isDark,d=u?a:o,p=u?o:a,g=e.name===d.name,v=r.isDark?1:-1;let f=d.tone(r),y=p.tone(r);if(e.background&&d.contrastCurve&&p.contrastCurve){const x=e.background(r),R=d.contrastCurve(r),F=p.contrastCurve(r);if(x&&R&&F){const A=x.getTone(r),L=R.get(r.contrastLevel),D=F.get(r.contrastLevel);V.ratioOfTones(A,f)<L&&(f=h.foregroundTone(A,L)),V.ratioOfTones(A,y)<D&&(y=h.foregroundTone(A,D)),t&&(f=h.foregroundTone(A,L),y=h.foregroundTone(A,D))}}return i>(y-f)*v&&(y=_(0,100,f+i*v),i>(y-f)*v&&(f=_(0,100,y-i*v))),f>=50&&60>f?v>0?(f=60,y=Math.max(y,f+i*v)):(f=49,y=Math.min(y,f+i*v)):y>=50&&60>y&&(c?v>0?(f=60,y=Math.max(y,f+i*v)):(f=49,y=Math.min(y,f+i*v)):y=v>0?60:49),g?f:y}{let a=e.tone(r);if(e.background==null||e.background(r)===void 0||e.contrastCurve==null||e.contrastCurve(r)===void 0)return a;const o=e.background(r).getTone(r),i=e.contrastCurve(r).get(r.contrastLevel);if(V.ratioOfTones(o,a)<i&&(a=h.foregroundTone(o,i)),t&&(a=h.foregroundTone(o,i)),e.isBackground&&a>=50&&60>a&&(a=V.ratioOfTones(49,o)<i?60:49),e.secondBackground==null||e.secondBackground(r)===void 0)return a;const[l,c]=[e.background,e.secondBackground],[u,d]=[l(r).getTone(r),c(r).getTone(r)],[p,g]=[Math.max(u,d),Math.min(u,d)];if(V.ratioOfTones(p,a)>=i&&V.ratioOfTones(g,a)>=i)return a;const v=V.lighter(p,i),f=V.darker(g,i),y=[];return v!==-1&&y.push(v),f!==-1&&y.push(f),h.tonePrefersLightForeground(u)||h.tonePrefersLightForeground(d)?0>v?100:v:y.length===1?y[0]:0>f?0:f}}},st=new class{getHct(r,e){const t=e.palette(r),n=e.getTone(r),a=t.hue,o=t.chroma*(e.chromaMultiplier?e.chromaMultiplier(r):1);return T.from(a,o,n)}getTone(r,e){const t=e.toneDeltaPair?e.toneDeltaPair(r):void 0;if(t){const n=t.roleA,a=t.roleB,o=t.polarity,i=t.constraint,l=o==="darker"||o==="relative_lighter"&&r.isDark||o==="relative_darker"&&!r.isDark?-t.delta:t.delta,c=e.name===n.name,u=c?a:n;let d=(c?n:a).tone(r),p=u.getTone(r);const g=l*(c?1:-1);if(i==="exact"?d=_(0,100,p+g):i==="nearer"?d=_(0,100,g>0?_(p,p+g,d):_(p+g,p,d)):i==="farther"&&(d=g>0?_(p+g,100,d):_(0,p+g,d)),e.background&&e.contrastCurve){const v=e.background(r),f=e.contrastCurve(r);if(v&&f){const y=v.getTone(r),x=f.get(r.contrastLevel);d=V.ratioOfTones(y,d)<x||0>r.contrastLevel?h.foregroundTone(y,x):d}}return e.isBackground&&!e.name.endsWith("_fixed_dim")&&(d=57>d?_(0,49,d):_(65,100,d)),d}{let n=e.tone(r);if(e.background==null||e.background(r)===void 0||e.contrastCurve==null||e.contrastCurve(r)===void 0)return n;const a=e.background(r).getTone(r),o=e.contrastCurve(r).get(r.contrastLevel);if(n=V.ratioOfTones(a,n)<o||0>r.contrastLevel?h.foregroundTone(a,o):n,e.isBackground&&!e.name.endsWith("_fixed_dim")&&(n=57>n?_(0,49,n):_(65,100,n)),e.secondBackground==null||e.secondBackground(r)===void 0)return n;const[i,l]=[e.background,e.secondBackground],[c,u]=[i(r).getTone(r),l(r).getTone(r)],[d,p]=[Math.max(c,u),Math.min(c,u)];if(V.ratioOfTones(d,n)>=o&&V.ratioOfTones(p,n)>=o)return n;const g=V.lighter(d,o),v=V.darker(p,o),f=[];return g!==-1&&f.push(g),v!==-1&&f.push(v),h.tonePrefersLightForeground(c)||h.tonePrefersLightForeground(u)?0>g?100:g:f.length===1?f[0]:0>v?0:v}}};function pr(r){return r==="2025"?st:it}class P{constructor(e,t,n,a){this.low=e,this.normal=t,this.medium=n,this.high=a}get(e){return e>-1?0>e?he(this.low,this.normal,(e- -1)/1):.5>e?he(this.normal,this.medium,(e-0)/.5):1>e?he(this.medium,this.high,(e-.5)/.5):this.high:this.low}}class I{constructor(e,t,n,a,o,i){this.roleA=e,this.roleB=t,this.delta=n,this.polarity=a,this.stayTogether=o,this.constraint=i,this.constraint=i??"exact"}}var b;function oe(r){return r.variant===b.FIDELITY||r.variant===b.CONTENT}function O(r){return r.variant===b.MONOCHROME}(r=>{r[r.MONOCHROME=0]="MONOCHROME",r[r.NEUTRAL=1]="NEUTRAL",r[r.TONAL_SPOT=2]="TONAL_SPOT",r[r.VIBRANT=3]="VIBRANT",r[r.EXPRESSIVE=4]="EXPRESSIVE",r[r.FIDELITY=5]="FIDELITY",r[r.CONTENT=6]="CONTENT",r[r.RAINBOW=7]="RAINBOW",r[r.FRUIT_SALAD=8]="FRUIT_SALAD"})(b||(b={}));class lt{primaryPaletteKeyColor(){return h.fromPalette({name:"primary_palette_key_color",palette:e=>e.primaryPalette,tone:e=>e.primaryPalette.keyColor.tone})}secondaryPaletteKeyColor(){return h.fromPalette({name:"secondary_palette_key_color",palette:e=>e.secondaryPalette,tone:e=>e.secondaryPalette.keyColor.tone})}tertiaryPaletteKeyColor(){return h.fromPalette({name:"tertiary_palette_key_color",palette:e=>e.tertiaryPalette,tone:e=>e.tertiaryPalette.keyColor.tone})}neutralPaletteKeyColor(){return h.fromPalette({name:"neutral_palette_key_color",palette:e=>e.neutralPalette,tone:e=>e.neutralPalette.keyColor.tone})}neutralVariantPaletteKeyColor(){return h.fromPalette({name:"neutral_variant_palette_key_color",palette:e=>e.neutralVariantPalette,tone:e=>e.neutralVariantPalette.keyColor.tone})}errorPaletteKeyColor(){return h.fromPalette({name:"error_palette_key_color",palette:e=>e.errorPalette,tone:e=>e.errorPalette.keyColor.tone})}background(){return h.fromPalette({name:"background",palette:e=>e.neutralPalette,tone:e=>e.isDark?6:98,isBackground:!0})}onBackground(){return h.fromPalette({name:"on_background",palette:e=>e.neutralPalette,tone:e=>e.isDark?90:10,background:e=>this.background(),contrastCurve:e=>new P(3,3,4.5,7)})}surface(){return h.fromPalette({name:"surface",palette:e=>e.neutralPalette,tone:e=>e.isDark?6:98,isBackground:!0})}surfaceDim(){return h.fromPalette({name:"surface_dim",palette:e=>e.neutralPalette,tone:e=>e.isDark?6:new P(87,87,80,75).get(e.contrastLevel),isBackground:!0})}surfaceBright(){return h.fromPalette({name:"surface_bright",palette:e=>e.neutralPalette,tone:e=>e.isDark?new P(24,24,29,34).get(e.contrastLevel):98,isBackground:!0})}surfaceContainerLowest(){return h.fromPalette({name:"surface_container_lowest",palette:e=>e.neutralPalette,tone:e=>e.isDark?new P(4,4,2,0).get(e.contrastLevel):100,isBackground:!0})}surfaceContainerLow(){return h.fromPalette({name:"surface_container_low",palette:e=>e.neutralPalette,tone:e=>e.isDark?new P(10,10,11,12).get(e.contrastLevel):new P(96,96,96,95).get(e.contrastLevel),isBackground:!0})}surfaceContainer(){return h.fromPalette({name:"surface_container",palette:e=>e.neutralPalette,tone:e=>e.isDark?new P(12,12,16,20).get(e.contrastLevel):new P(94,94,92,90).get(e.contrastLevel),isBackground:!0})}surfaceContainerHigh(){return h.fromPalette({name:"surface_container_high",palette:e=>e.neutralPalette,tone:e=>e.isDark?new P(17,17,21,25).get(e.contrastLevel):new P(92,92,88,85).get(e.contrastLevel),isBackground:!0})}surfaceContainerHighest(){return h.fromPalette({name:"surface_container_highest",palette:e=>e.neutralPalette,tone:e=>e.isDark?new P(22,22,26,30).get(e.contrastLevel):new P(90,90,84,80).get(e.contrastLevel),isBackground:!0})}onSurface(){return h.fromPalette({name:"on_surface",palette:e=>e.neutralPalette,tone:e=>e.isDark?90:10,background:e=>this.highestSurface(e),contrastCurve:e=>new P(4.5,7,11,21)})}surfaceVariant(){return h.fromPalette({name:"surface_variant",palette:e=>e.neutralVariantPalette,tone:e=>e.isDark?30:90,isBackground:!0})}onSurfaceVariant(){return h.fromPalette({name:"on_surface_variant",palette:e=>e.neutralVariantPalette,tone:e=>e.isDark?80:30,background:e=>this.highestSurface(e),contrastCurve:e=>new P(3,4.5,7,11)})}inverseSurface(){return h.fromPalette({name:"inverse_surface",palette:e=>e.neutralPalette,tone:e=>e.isDark?90:20,isBackground:!0})}inverseOnSurface(){return h.fromPalette({name:"inverse_on_surface",palette:e=>e.neutralPalette,tone:e=>e.isDark?20:95,background:e=>this.inverseSurface(),contrastCurve:e=>new P(4.5,7,11,21)})}outline(){return h.fromPalette({name:"outline",palette:e=>e.neutralVariantPalette,tone:e=>e.isDark?60:50,background:e=>this.highestSurface(e),contrastCurve:e=>new P(1.5,3,4.5,7)})}outlineVariant(){return h.fromPalette({name:"outline_variant",palette:e=>e.neutralVariantPalette,tone:e=>e.isDark?30:80,background:e=>this.highestSurface(e),contrastCurve:e=>new P(1,1,3,4.5)})}shadow(){return h.fromPalette({name:"shadow",palette:e=>e.neutralPalette,tone:e=>0})}scrim(){return h.fromPalette({name:"scrim",palette:e=>e.neutralPalette,tone:e=>0})}surfaceTint(){return h.fromPalette({name:"surface_tint",palette:e=>e.primaryPalette,tone:e=>e.isDark?80:40,isBackground:!0})}primary(){return h.fromPalette({name:"primary",palette:e=>e.primaryPalette,tone:e=>O(e)?e.isDark?100:0:e.isDark?80:40,isBackground:!0,background:e=>this.highestSurface(e),contrastCurve:e=>new P(3,4.5,7,7),toneDeltaPair:e=>new I(this.primaryContainer(),this.primary(),10,"nearer",!1)})}primaryDim(){}onPrimary(){return h.fromPalette({name:"on_primary",palette:e=>e.primaryPalette,tone:e=>O(e)?e.isDark?10:90:e.isDark?20:100,background:e=>this.primary(),contrastCurve:e=>new P(4.5,7,11,21)})}primaryContainer(){return h.fromPalette({name:"primary_container",palette:e=>e.primaryPalette,tone:e=>oe(e)?e.sourceColorHct.tone:O(e)?e.isDark?85:25:e.isDark?30:90,isBackground:!0,background:e=>this.highestSurface(e),contrastCurve:e=>new P(1,1,3,4.5),toneDeltaPair:e=>new I(this.primaryContainer(),this.primary(),10,"nearer",!1)})}onPrimaryContainer(){return h.fromPalette({name:"on_primary_container",palette:e=>e.primaryPalette,tone:e=>oe(e)?h.foregroundTone(this.primaryContainer().tone(e),4.5):O(e)?e.isDark?0:100:e.isDark?90:30,background:e=>this.primaryContainer(),contrastCurve:e=>new P(3,4.5,7,11)})}inversePrimary(){return h.fromPalette({name:"inverse_primary",palette:e=>e.primaryPalette,tone:e=>e.isDark?40:80,background:e=>this.inverseSurface(),contrastCurve:e=>new P(3,4.5,7,7)})}secondary(){return h.fromPalette({name:"secondary",palette:e=>e.secondaryPalette,tone:e=>e.isDark?80:40,isBackground:!0,background:e=>this.highestSurface(e),contrastCurve:e=>new P(3,4.5,7,7),toneDeltaPair:e=>new I(this.secondaryContainer(),this.secondary(),10,"nearer",!1)})}secondaryDim(){}onSecondary(){return h.fromPalette({name:"on_secondary",palette:e=>e.secondaryPalette,tone:e=>O(e)?e.isDark?10:100:e.isDark?20:100,background:e=>this.secondary(),contrastCurve:e=>new P(4.5,7,11,21)})}secondaryContainer(){return h.fromPalette({name:"secondary_container",palette:e=>e.secondaryPalette,tone(e){const t=e.isDark?30:90;return O(e)?e.isDark?30:85:oe(e)?((n,a,o,i)=>{let l=o,c=T.from(n,a,o);if(c.chroma<a){let u=c.chroma;for(;c.chroma<a;){l+=i?-1:1;const d=T.from(n,a,l);if(u>d.chroma||.4>Math.abs(d.chroma-a))break;const p=Math.abs(d.chroma-a);Math.abs(c.chroma-a)>p&&(c=d),u=Math.max(u,d.chroma)}}return l})(e.secondaryPalette.hue,e.secondaryPalette.chroma,t,!e.isDark):t},isBackground:!0,background:e=>this.highestSurface(e),contrastCurve:e=>new P(1,1,3,4.5),toneDeltaPair:e=>new I(this.secondaryContainer(),this.secondary(),10,"nearer",!1)})}onSecondaryContainer(){return h.fromPalette({name:"on_secondary_container",palette:e=>e.secondaryPalette,tone:e=>O(e)?e.isDark?90:10:oe(e)?h.foregroundTone(this.secondaryContainer().tone(e),4.5):e.isDark?90:30,background:e=>this.secondaryContainer(),contrastCurve:e=>new P(3,4.5,7,11)})}tertiary(){return h.fromPalette({name:"tertiary",palette:e=>e.tertiaryPalette,tone:e=>O(e)?e.isDark?90:25:e.isDark?80:40,isBackground:!0,background:e=>this.highestSurface(e),contrastCurve:e=>new P(3,4.5,7,7),toneDeltaPair:e=>new I(this.tertiaryContainer(),this.tertiary(),10,"nearer",!1)})}tertiaryDim(){}onTertiary(){return h.fromPalette({name:"on_tertiary",palette:e=>e.tertiaryPalette,tone:e=>O(e)?e.isDark?10:90:e.isDark?20:100,background:e=>this.tertiary(),contrastCurve:e=>new P(4.5,7,11,21)})}tertiaryContainer(){return h.fromPalette({name:"tertiary_container",palette:e=>e.tertiaryPalette,tone(e){if(O(e))return e.isDark?60:49;if(!oe(e))return e.isDark?30:90;const t=e.tertiaryPalette.getHct(e.sourceColorHct.tone);return Ge.fixIfDisliked(t).tone},isBackground:!0,background:e=>this.highestSurface(e),contrastCurve:e=>new P(1,1,3,4.5),toneDeltaPair:e=>new I(this.tertiaryContainer(),this.tertiary(),10,"nearer",!1)})}onTertiaryContainer(){return h.fromPalette({name:"on_tertiary_container",palette:e=>e.tertiaryPalette,tone:e=>O(e)?e.isDark?0:100:oe(e)?h.foregroundTone(this.tertiaryContainer().tone(e),4.5):e.isDark?90:30,background:e=>this.tertiaryContainer(),contrastCurve:e=>new P(3,4.5,7,11)})}error(){return h.fromPalette({name:"error",palette:e=>e.errorPalette,tone:e=>e.isDark?80:40,isBackground:!0,background:e=>this.highestSurface(e),contrastCurve:e=>new P(3,4.5,7,7),toneDeltaPair:e=>new I(this.errorContainer(),this.error(),10,"nearer",!1)})}errorDim(){}onError(){return h.fromPalette({name:"on_error",palette:e=>e.errorPalette,tone:e=>e.isDark?20:100,background:e=>this.error(),contrastCurve:e=>new P(4.5,7,11,21)})}errorContainer(){return h.fromPalette({name:"error_container",palette:e=>e.errorPalette,tone:e=>e.isDark?30:90,isBackground:!0,background:e=>this.highestSurface(e),contrastCurve:e=>new P(1,1,3,4.5),toneDeltaPair:e=>new I(this.errorContainer(),this.error(),10,"nearer",!1)})}onErrorContainer(){return h.fromPalette({name:"on_error_container",palette:e=>e.errorPalette,tone:e=>O(e)?e.isDark?90:10:e.isDark?90:30,background:e=>this.errorContainer(),contrastCurve:e=>new P(3,4.5,7,11)})}primaryFixed(){return h.fromPalette({name:"primary_fixed",palette:e=>e.primaryPalette,tone:e=>O(e)?40:90,isBackground:!0,background:e=>this.highestSurface(e),contrastCurve:e=>new P(1,1,3,4.5),toneDeltaPair:e=>new I(this.primaryFixed(),this.primaryFixedDim(),10,"lighter",!0)})}primaryFixedDim(){return h.fromPalette({name:"primary_fixed_dim",palette:e=>e.primaryPalette,tone:e=>O(e)?30:80,isBackground:!0,background:e=>this.highestSurface(e),contrastCurve:e=>new P(1,1,3,4.5),toneDeltaPair:e=>new I(this.primaryFixed(),this.primaryFixedDim(),10,"lighter",!0)})}onPrimaryFixed(){return h.fromPalette({name:"on_primary_fixed",palette:e=>e.primaryPalette,tone:e=>O(e)?100:10,background:e=>this.primaryFixedDim(),secondBackground:e=>this.primaryFixed(),contrastCurve:e=>new P(4.5,7,11,21)})}onPrimaryFixedVariant(){return h.fromPalette({name:"on_primary_fixed_variant",palette:e=>e.primaryPalette,tone:e=>O(e)?90:30,background:e=>this.primaryFixedDim(),secondBackground:e=>this.primaryFixed(),contrastCurve:e=>new P(3,4.5,7,11)})}secondaryFixed(){return h.fromPalette({name:"secondary_fixed",palette:e=>e.secondaryPalette,tone:e=>O(e)?80:90,isBackground:!0,background:e=>this.highestSurface(e),contrastCurve:e=>new P(1,1,3,4.5),toneDeltaPair:e=>new I(this.secondaryFixed(),this.secondaryFixedDim(),10,"lighter",!0)})}secondaryFixedDim(){return h.fromPalette({name:"secondary_fixed_dim",palette:e=>e.secondaryPalette,tone:e=>O(e)?70:80,isBackground:!0,background:e=>this.highestSurface(e),contrastCurve:e=>new P(1,1,3,4.5),toneDeltaPair:e=>new I(this.secondaryFixed(),this.secondaryFixedDim(),10,"lighter",!0)})}onSecondaryFixed(){return h.fromPalette({name:"on_secondary_fixed",palette:e=>e.secondaryPalette,tone:e=>10,background:e=>this.secondaryFixedDim(),secondBackground:e=>this.secondaryFixed(),contrastCurve:e=>new P(4.5,7,11,21)})}onSecondaryFixedVariant(){return h.fromPalette({name:"on_secondary_fixed_variant",palette:e=>e.secondaryPalette,tone:e=>O(e)?25:30,background:e=>this.secondaryFixedDim(),secondBackground:e=>this.secondaryFixed(),contrastCurve:e=>new P(3,4.5,7,11)})}tertiaryFixed(){return h.fromPalette({name:"tertiary_fixed",palette:e=>e.tertiaryPalette,tone:e=>O(e)?40:90,isBackground:!0,background:e=>this.highestSurface(e),contrastCurve:e=>new P(1,1,3,4.5),toneDeltaPair:e=>new I(this.tertiaryFixed(),this.tertiaryFixedDim(),10,"lighter",!0)})}tertiaryFixedDim(){return h.fromPalette({name:"tertiary_fixed_dim",palette:e=>e.tertiaryPalette,tone:e=>O(e)?30:80,isBackground:!0,background:e=>this.highestSurface(e),contrastCurve:e=>new P(1,1,3,4.5),toneDeltaPair:e=>new I(this.tertiaryFixed(),this.tertiaryFixedDim(),10,"lighter",!0)})}onTertiaryFixed(){return h.fromPalette({name:"on_tertiary_fixed",palette:e=>e.tertiaryPalette,tone:e=>O(e)?100:10,background:e=>this.tertiaryFixedDim(),secondBackground:e=>this.tertiaryFixed(),contrastCurve:e=>new P(4.5,7,11,21)})}onTertiaryFixedVariant(){return h.fromPalette({name:"on_tertiary_fixed_variant",palette:e=>e.tertiaryPalette,tone:e=>O(e)?90:30,background:e=>this.tertiaryFixedDim(),secondBackground:e=>this.tertiaryFixed(),contrastCurve:e=>new P(3,4.5,7,11)})}highestSurface(e){return e.isDark?this.surfaceBright():this.surfaceDim()}}function S(r,e=0,t=100,n=1){return _(e,t,Mr(r.hue,r.chroma*n,100,!0))}function G(r,e=0,t=100){return _(e,t,Mr(r.hue,r.chroma,0,!1))}function Mr(r,e,t,n){let a=t,o=T.from(r,e,a);for(;o.chroma<e&&t>=0&&100>=t;){t+=n?-1:1;const i=T.from(r,e,t);o.chroma<i.chroma&&(o=i,a=t)}return a}function k(r){return r===1.5?new P(1.5,1.5,3,4.5):r===3?new P(3,3,4.5,7):r===4.5?new P(4.5,4.5,7,11):r===6?new P(6,6,7,11):r===7?new P(7,7,11,21):r===9?new P(9,9,11,21):r===11?new P(11,11,21,21):r===21?new P(21,21,21,21):new P(r,r,7,21)}class s{constructor(){this.allColors=[this.background(),this.onBackground(),this.surface(),this.surfaceDim(),this.surfaceBright(),this.surfaceContainerLowest(),this.surfaceContainerLow(),this.surfaceContainer(),this.surfaceContainerHigh(),this.surfaceContainerHighest(),this.onSurface(),this.onSurfaceVariant(),this.outline(),this.outlineVariant(),this.inverseSurface(),this.inverseOnSurface(),this.primary(),this.primaryDim(),this.onPrimary(),this.primaryContainer(),this.onPrimaryContainer(),this.primaryFixed(),this.primaryFixedDim(),this.onPrimaryFixed(),this.onPrimaryFixedVariant(),this.inversePrimary(),this.secondary(),this.secondaryDim(),this.onSecondary(),this.secondaryContainer(),this.onSecondaryContainer(),this.secondaryFixed(),this.secondaryFixedDim(),this.onSecondaryFixed(),this.onSecondaryFixedVariant(),this.tertiary(),this.tertiaryDim(),this.onTertiary(),this.tertiaryContainer(),this.onTertiaryContainer(),this.tertiaryFixed(),this.tertiaryFixedDim(),this.onTertiaryFixed(),this.onTertiaryFixedVariant(),this.error(),this.errorDim(),this.onError(),this.errorContainer(),this.onErrorContainer()].filter(e=>e!==void 0)}highestSurface(e){return s.colorSpec.highestSurface(e)}primaryPaletteKeyColor(){return s.colorSpec.primaryPaletteKeyColor()}secondaryPaletteKeyColor(){return s.colorSpec.secondaryPaletteKeyColor()}tertiaryPaletteKeyColor(){return s.colorSpec.tertiaryPaletteKeyColor()}neutralPaletteKeyColor(){return s.colorSpec.neutralPaletteKeyColor()}neutralVariantPaletteKeyColor(){return s.colorSpec.neutralVariantPaletteKeyColor()}errorPaletteKeyColor(){return s.colorSpec.errorPaletteKeyColor()}background(){return s.colorSpec.background()}onBackground(){return s.colorSpec.onBackground()}surface(){return s.colorSpec.surface()}surfaceDim(){return s.colorSpec.surfaceDim()}surfaceBright(){return s.colorSpec.surfaceBright()}surfaceContainerLowest(){return s.colorSpec.surfaceContainerLowest()}surfaceContainerLow(){return s.colorSpec.surfaceContainerLow()}surfaceContainer(){return s.colorSpec.surfaceContainer()}surfaceContainerHigh(){return s.colorSpec.surfaceContainerHigh()}surfaceContainerHighest(){return s.colorSpec.surfaceContainerHighest()}onSurface(){return s.colorSpec.onSurface()}surfaceVariant(){return s.colorSpec.surfaceVariant()}onSurfaceVariant(){return s.colorSpec.onSurfaceVariant()}outline(){return s.colorSpec.outline()}outlineVariant(){return s.colorSpec.outlineVariant()}inverseSurface(){return s.colorSpec.inverseSurface()}inverseOnSurface(){return s.colorSpec.inverseOnSurface()}shadow(){return s.colorSpec.shadow()}scrim(){return s.colorSpec.scrim()}surfaceTint(){return s.colorSpec.surfaceTint()}primary(){return s.colorSpec.primary()}primaryDim(){return s.colorSpec.primaryDim()}onPrimary(){return s.colorSpec.onPrimary()}primaryContainer(){return s.colorSpec.primaryContainer()}onPrimaryContainer(){return s.colorSpec.onPrimaryContainer()}inversePrimary(){return s.colorSpec.inversePrimary()}primaryFixed(){return s.colorSpec.primaryFixed()}primaryFixedDim(){return s.colorSpec.primaryFixedDim()}onPrimaryFixed(){return s.colorSpec.onPrimaryFixed()}onPrimaryFixedVariant(){return s.colorSpec.onPrimaryFixedVariant()}secondary(){return s.colorSpec.secondary()}secondaryDim(){return s.colorSpec.secondaryDim()}onSecondary(){return s.colorSpec.onSecondary()}secondaryContainer(){return s.colorSpec.secondaryContainer()}onSecondaryContainer(){return s.colorSpec.onSecondaryContainer()}secondaryFixed(){return s.colorSpec.secondaryFixed()}secondaryFixedDim(){return s.colorSpec.secondaryFixedDim()}onSecondaryFixed(){return s.colorSpec.onSecondaryFixed()}onSecondaryFixedVariant(){return s.colorSpec.onSecondaryFixedVariant()}tertiary(){return s.colorSpec.tertiary()}tertiaryDim(){return s.colorSpec.tertiaryDim()}onTertiary(){return s.colorSpec.onTertiary()}tertiaryContainer(){return s.colorSpec.tertiaryContainer()}onTertiaryContainer(){return s.colorSpec.onTertiaryContainer()}tertiaryFixed(){return s.colorSpec.tertiaryFixed()}tertiaryFixedDim(){return s.colorSpec.tertiaryFixedDim()}onTertiaryFixed(){return s.colorSpec.onTertiaryFixed()}onTertiaryFixedVariant(){return s.colorSpec.onTertiaryFixedVariant()}error(){return s.colorSpec.error()}errorDim(){return s.colorSpec.errorDim()}onError(){return s.colorSpec.onError()}errorContainer(){return s.colorSpec.errorContainer()}onErrorContainer(){return s.colorSpec.onErrorContainer()}static highestSurface(e){return s.colorSpec.highestSurface(e)}}s.contentAccentToneDelta=15,s.colorSpec=new class extends lt{surface(){const r=h.fromPalette({name:"surface",palette:e=>e.neutralPalette,tone:e=>(super.surface().tone(e),e.platform==="phone"?e.isDark?4:T.isYellow(e.neutralPalette.hue)?99:e.variant===b.VIBRANT?97:98:0),isBackground:!0});return C(super.surface(),"2025",r)}surfaceDim(){const r=h.fromPalette({name:"surface_dim",palette:e=>e.neutralPalette,tone:e=>e.isDark?4:T.isYellow(e.neutralPalette.hue)?90:e.variant===b.VIBRANT?85:87,isBackground:!0,chromaMultiplier(e){if(!e.isDark){if(e.variant===b.NEUTRAL)return 2.5;if(e.variant===b.TONAL_SPOT)return 1.7;if(e.variant===b.EXPRESSIVE)return T.isYellow(e.neutralPalette.hue)?2.7:1.75;if(e.variant===b.VIBRANT)return 1.36}return 1}});return C(super.surfaceDim(),"2025",r)}surfaceBright(){const r=h.fromPalette({name:"surface_bright",palette:e=>e.neutralPalette,tone:e=>e.isDark?18:T.isYellow(e.neutralPalette.hue)?99:e.variant===b.VIBRANT?97:98,isBackground:!0,chromaMultiplier(e){if(e.isDark){if(e.variant===b.NEUTRAL)return 2.5;if(e.variant===b.TONAL_SPOT)return 1.7;if(e.variant===b.EXPRESSIVE)return T.isYellow(e.neutralPalette.hue)?2.7:1.75;if(e.variant===b.VIBRANT)return 1.36}return 1}});return C(super.surfaceBright(),"2025",r)}surfaceContainerLowest(){const r=h.fromPalette({name:"surface_container_lowest",palette:e=>e.neutralPalette,tone:e=>e.isDark?0:100,isBackground:!0});return C(super.surfaceContainerLowest(),"2025",r)}surfaceContainerLow(){const r=h.fromPalette({name:"surface_container_low",palette:e=>e.neutralPalette,tone:e=>e.platform==="phone"?e.isDark?6:T.isYellow(e.neutralPalette.hue)?98:e.variant===b.VIBRANT?95:96:15,isBackground:!0,chromaMultiplier(e){if(e.platform==="phone"){if(e.variant===b.NEUTRAL)return 1.3;if(e.variant===b.TONAL_SPOT)return 1.25;if(e.variant===b.EXPRESSIVE)return T.isYellow(e.neutralPalette.hue)?1.3:1.15;if(e.variant===b.VIBRANT)return 1.08}return 1}});return C(super.surfaceContainerLow(),"2025",r)}surfaceContainer(){const r=h.fromPalette({name:"surface_container",palette:e=>e.neutralPalette,tone:e=>e.platform==="phone"?e.isDark?9:T.isYellow(e.neutralPalette.hue)?96:e.variant===b.VIBRANT?92:94:20,isBackground:!0,chromaMultiplier(e){if(e.platform==="phone"){if(e.variant===b.NEUTRAL)return 1.6;if(e.variant===b.TONAL_SPOT)return 1.4;if(e.variant===b.EXPRESSIVE)return T.isYellow(e.neutralPalette.hue)?1.6:1.3;if(e.variant===b.VIBRANT)return 1.15}return 1}});return C(super.surfaceContainer(),"2025",r)}surfaceContainerHigh(){const r=h.fromPalette({name:"surface_container_high",palette:e=>e.neutralPalette,tone:e=>e.platform==="phone"?e.isDark?12:T.isYellow(e.neutralPalette.hue)?94:e.variant===b.VIBRANT?90:92:25,isBackground:!0,chromaMultiplier(e){if(e.platform==="phone"){if(e.variant===b.NEUTRAL)return 1.9;if(e.variant===b.TONAL_SPOT)return 1.5;if(e.variant===b.EXPRESSIVE)return T.isYellow(e.neutralPalette.hue)?1.95:1.45;if(e.variant===b.VIBRANT)return 1.22}return 1}});return C(super.surfaceContainerHigh(),"2025",r)}surfaceContainerHighest(){const r=h.fromPalette({name:"surface_container_highest",palette:e=>e.neutralPalette,tone:e=>e.isDark?15:T.isYellow(e.neutralPalette.hue)?92:e.variant===b.VIBRANT?88:90,isBackground:!0,chromaMultiplier:e=>e.variant===b.NEUTRAL?2.2:e.variant===b.TONAL_SPOT?1.7:e.variant===b.EXPRESSIVE?T.isYellow(e.neutralPalette.hue)?2.3:1.6:e.variant===b.VIBRANT?1.29:1});return C(super.surfaceContainerHighest(),"2025",r)}onSurface(){const r=h.fromPalette({name:"on_surface",palette:e=>e.neutralPalette,tone:e=>e.variant===b.VIBRANT?S(e.neutralPalette,0,100,1.1):h.getInitialToneFromBackground(t=>t.platform==="phone"?this.highestSurface(t):this.surfaceContainerHigh())(e),chromaMultiplier(e){if(e.platform==="phone"){if(e.variant===b.NEUTRAL)return 2.2;if(e.variant===b.TONAL_SPOT)return 1.7;if(e.variant===b.EXPRESSIVE)return T.isYellow(e.neutralPalette.hue)?e.isDark?3:2.3:1.6}return 1},background:e=>e.platform==="phone"?this.highestSurface(e):this.surfaceContainerHigh(),contrastCurve:e=>e.isDark?k(11):k(9)});return C(super.onSurface(),"2025",r)}onSurfaceVariant(){const r=h.fromPalette({name:"on_surface_variant",palette:e=>e.neutralPalette,chromaMultiplier(e){if(e.platform==="phone"){if(e.variant===b.NEUTRAL)return 2.2;if(e.variant===b.TONAL_SPOT)return 1.7;if(e.variant===b.EXPRESSIVE)return T.isYellow(e.neutralPalette.hue)?e.isDark?3:2.3:1.6}return 1},background:e=>e.platform==="phone"?this.highestSurface(e):this.surfaceContainerHigh(),contrastCurve:e=>e.platform==="phone"?e.isDark?k(6):k(4.5):k(7)});return C(super.onSurfaceVariant(),"2025",r)}outline(){const r=h.fromPalette({name:"outline",palette:e=>e.neutralPalette,chromaMultiplier(e){if(e.platform==="phone"){if(e.variant===b.NEUTRAL)return 2.2;if(e.variant===b.TONAL_SPOT)return 1.7;if(e.variant===b.EXPRESSIVE)return T.isYellow(e.neutralPalette.hue)?e.isDark?3:2.3:1.6}return 1},background:e=>e.platform==="phone"?this.highestSurface(e):this.surfaceContainerHigh(),contrastCurve:e=>e.platform==="phone"?k(3):k(4.5)});return C(super.outline(),"2025",r)}outlineVariant(){const r=h.fromPalette({name:"outline_variant",palette:e=>e.neutralPalette,chromaMultiplier(e){if(e.platform==="phone"){if(e.variant===b.NEUTRAL)return 2.2;if(e.variant===b.TONAL_SPOT)return 1.7;if(e.variant===b.EXPRESSIVE)return T.isYellow(e.neutralPalette.hue)?e.isDark?3:2.3:1.6}return 1},background:e=>e.platform==="phone"?this.highestSurface(e):this.surfaceContainerHigh(),contrastCurve:e=>e.platform==="phone"?k(1.5):k(3)});return C(super.outlineVariant(),"2025",r)}inverseSurface(){const r=h.fromPalette({name:"inverse_surface",palette:e=>e.neutralPalette,tone:e=>e.isDark?98:4,isBackground:!0});return C(super.inverseSurface(),"2025",r)}inverseOnSurface(){const r=h.fromPalette({name:"inverse_on_surface",palette:e=>e.neutralPalette,background:e=>this.inverseSurface(),contrastCurve:e=>k(7)});return C(super.inverseOnSurface(),"2025",r)}primary(){const r=h.fromPalette({name:"primary",palette:e=>e.primaryPalette,tone:e=>e.variant===b.NEUTRAL?e.platform==="phone"?e.isDark?80:40:90:e.variant===b.TONAL_SPOT?e.platform==="phone"?e.isDark?80:S(e.primaryPalette):S(e.primaryPalette,0,90):e.variant===b.EXPRESSIVE?S(e.primaryPalette,0,T.isYellow(e.primaryPalette.hue)?25:T.isCyan(e.primaryPalette.hue)?88:98):S(e.primaryPalette,0,T.isCyan(e.primaryPalette.hue)?88:98),isBackground:!0,background:e=>e.platform==="phone"?this.highestSurface(e):this.surfaceContainerHigh(),contrastCurve:e=>e.platform==="phone"?k(4.5):k(7),toneDeltaPair:e=>e.platform==="phone"?new I(this.primaryContainer(),this.primary(),5,"relative_lighter",!0,"farther"):void 0});return C(super.primary(),"2025",r)}primaryDim(){return h.fromPalette({name:"primary_dim",palette:r=>r.primaryPalette,tone:r=>r.variant===b.NEUTRAL?85:r.variant===b.TONAL_SPOT?S(r.primaryPalette,0,90):S(r.primaryPalette),isBackground:!0,background:r=>this.surfaceContainerHigh(),contrastCurve:r=>k(4.5),toneDeltaPair:r=>new I(this.primaryDim(),this.primary(),5,"darker",!0,"farther")})}onPrimary(){const r=h.fromPalette({name:"on_primary",palette:e=>e.primaryPalette,background:e=>e.platform==="phone"?this.primary():this.primaryDim(),contrastCurve:e=>e.platform==="phone"?k(6):k(7)});return C(super.onPrimary(),"2025",r)}primaryContainer(){const r=h.fromPalette({name:"primary_container",palette:e=>e.primaryPalette,tone:e=>e.platform==="watch"?30:e.variant===b.NEUTRAL?e.isDark?30:90:e.variant===b.TONAL_SPOT?e.isDark?G(e.primaryPalette,35,93):S(e.primaryPalette,0,90):e.variant===b.EXPRESSIVE?e.isDark?S(e.primaryPalette,30,93):S(e.primaryPalette,78,T.isCyan(e.primaryPalette.hue)?88:90):e.isDark?G(e.primaryPalette,66,93):S(e.primaryPalette,66,T.isCyan(e.primaryPalette.hue)?88:93),isBackground:!0,background:e=>e.platform==="phone"?this.highestSurface(e):void 0,toneDeltaPair:e=>e.platform==="phone"?void 0:new I(this.primaryContainer(),this.primaryDim(),10,"darker",!0,"farther"),contrastCurve:e=>e.platform==="phone"&&e.contrastLevel>0?k(1.5):void 0});return C(super.primaryContainer(),"2025",r)}onPrimaryContainer(){const r=h.fromPalette({name:"on_primary_container",palette:e=>e.primaryPalette,background:e=>this.primaryContainer(),contrastCurve:e=>e.platform==="phone"?k(6):k(7)});return C(super.onPrimaryContainer(),"2025",r)}primaryFixed(){const r=h.fromPalette({name:"primary_fixed",palette:e=>e.primaryPalette,tone:e=>{let t=Object.assign({},e,{isDark:!1,contrastLevel:0});return this.primaryContainer().getTone(t)},isBackground:!0,background:e=>e.platform==="phone"?this.highestSurface(e):void 0,contrastCurve:e=>e.platform==="phone"&&e.contrastLevel>0?k(1.5):void 0});return C(super.primaryFixed(),"2025",r)}primaryFixedDim(){const r=h.fromPalette({name:"primary_fixed_dim",palette:e=>e.primaryPalette,tone:e=>this.primaryFixed().getTone(e),isBackground:!0,toneDeltaPair:e=>new I(this.primaryFixedDim(),this.primaryFixed(),5,"darker",!0,"exact")});return C(super.primaryFixedDim(),"2025",r)}onPrimaryFixed(){const r=h.fromPalette({name:"on_primary_fixed",palette:e=>e.primaryPalette,background:e=>this.primaryFixedDim(),contrastCurve:e=>k(7)});return C(super.onPrimaryFixed(),"2025",r)}onPrimaryFixedVariant(){const r=h.fromPalette({name:"on_primary_fixed_variant",palette:e=>e.primaryPalette,background:e=>this.primaryFixedDim(),contrastCurve:e=>k(4.5)});return C(super.onPrimaryFixedVariant(),"2025",r)}inversePrimary(){const r=h.fromPalette({name:"inverse_primary",palette:e=>e.primaryPalette,tone:e=>S(e.primaryPalette),background:e=>this.inverseSurface(),contrastCurve:e=>e.platform==="phone"?k(6):k(7)});return C(super.inversePrimary(),"2025",r)}secondary(){const r=h.fromPalette({name:"secondary",palette:e=>e.secondaryPalette,tone:e=>e.platform==="watch"?e.variant===b.NEUTRAL?90:S(e.secondaryPalette,0,90):e.variant===b.NEUTRAL?e.isDark?G(e.secondaryPalette,0,98):S(e.secondaryPalette):e.variant===b.VIBRANT?S(e.secondaryPalette,0,e.isDark?90:98):e.isDark?80:S(e.secondaryPalette),isBackground:!0,background:e=>e.platform==="phone"?this.highestSurface(e):this.surfaceContainerHigh(),contrastCurve:e=>e.platform==="phone"?k(4.5):k(7),toneDeltaPair:e=>e.platform==="phone"?new I(this.secondaryContainer(),this.secondary(),5,"relative_lighter",!0,"farther"):void 0});return C(super.secondary(),"2025",r)}secondaryDim(){return h.fromPalette({name:"secondary_dim",palette:r=>r.secondaryPalette,tone:r=>r.variant===b.NEUTRAL?85:S(r.secondaryPalette,0,90),isBackground:!0,background:r=>this.surfaceContainerHigh(),contrastCurve:r=>k(4.5),toneDeltaPair:r=>new I(this.secondaryDim(),this.secondary(),5,"darker",!0,"farther")})}onSecondary(){const r=h.fromPalette({name:"on_secondary",palette:e=>e.secondaryPalette,background:e=>e.platform==="phone"?this.secondary():this.secondaryDim(),contrastCurve:e=>e.platform==="phone"?k(6):k(7)});return C(super.onSecondary(),"2025",r)}secondaryContainer(){const r=h.fromPalette({name:"secondary_container",palette:e=>e.secondaryPalette,tone:e=>e.platform==="watch"?30:e.variant===b.VIBRANT?e.isDark?G(e.secondaryPalette,30,40):S(e.secondaryPalette,84,90):e.variant===b.EXPRESSIVE?e.isDark?15:S(e.secondaryPalette,90,95):e.isDark?25:90,isBackground:!0,background:e=>e.platform==="phone"?this.highestSurface(e):void 0,toneDeltaPair:e=>e.platform==="watch"?new I(this.secondaryContainer(),this.secondaryDim(),10,"darker",!0,"farther"):void 0,contrastCurve:e=>e.platform==="phone"&&e.contrastLevel>0?k(1.5):void 0});return C(super.secondaryContainer(),"2025",r)}onSecondaryContainer(){const r=h.fromPalette({name:"on_secondary_container",palette:e=>e.secondaryPalette,background:e=>this.secondaryContainer(),contrastCurve:e=>e.platform==="phone"?k(6):k(7)});return C(super.onSecondaryContainer(),"2025",r)}secondaryFixed(){const r=h.fromPalette({name:"secondary_fixed",palette:e=>e.secondaryPalette,tone:e=>{let t=Object.assign({},e,{isDark:!1,contrastLevel:0});return this.secondaryContainer().getTone(t)},isBackground:!0,background:e=>e.platform==="phone"?this.highestSurface(e):void 0,contrastCurve:e=>e.platform==="phone"&&e.contrastLevel>0?k(1.5):void 0});return C(super.secondaryFixed(),"2025",r)}secondaryFixedDim(){const r=h.fromPalette({name:"secondary_fixed_dim",palette:e=>e.secondaryPalette,tone:e=>this.secondaryFixed().getTone(e),isBackground:!0,toneDeltaPair:e=>new I(this.secondaryFixedDim(),this.secondaryFixed(),5,"darker",!0,"exact")});return C(super.secondaryFixedDim(),"2025",r)}onSecondaryFixed(){const r=h.fromPalette({name:"on_secondary_fixed",palette:e=>e.secondaryPalette,background:e=>this.secondaryFixedDim(),contrastCurve:e=>k(7)});return C(super.onSecondaryFixed(),"2025",r)}onSecondaryFixedVariant(){const r=h.fromPalette({name:"on_secondary_fixed_variant",palette:e=>e.secondaryPalette,background:e=>this.secondaryFixedDim(),contrastCurve:e=>k(4.5)});return C(super.onSecondaryFixedVariant(),"2025",r)}tertiary(){const r=h.fromPalette({name:"tertiary",palette:e=>e.tertiaryPalette,tone:e=>e.platform==="watch"?e.variant===b.TONAL_SPOT?S(e.tertiaryPalette,0,90):S(e.tertiaryPalette):e.variant===b.EXPRESSIVE||e.variant===b.VIBRANT?S(e.tertiaryPalette,0,T.isCyan(e.tertiaryPalette.hue)?88:e.isDark?98:100):e.isDark?S(e.tertiaryPalette,0,98):S(e.tertiaryPalette),isBackground:!0,background:e=>e.platform==="phone"?this.highestSurface(e):this.surfaceContainerHigh(),contrastCurve:e=>e.platform==="phone"?k(4.5):k(7),toneDeltaPair:e=>e.platform==="phone"?new I(this.tertiaryContainer(),this.tertiary(),5,"relative_lighter",!0,"farther"):void 0});return C(super.tertiary(),"2025",r)}tertiaryDim(){return h.fromPalette({name:"tertiary_dim",palette:r=>r.tertiaryPalette,tone:r=>r.variant===b.TONAL_SPOT?S(r.tertiaryPalette,0,90):S(r.tertiaryPalette),isBackground:!0,background:r=>this.surfaceContainerHigh(),contrastCurve:r=>k(4.5),toneDeltaPair:r=>new I(this.tertiaryDim(),this.tertiary(),5,"darker",!0,"farther")})}onTertiary(){const r=h.fromPalette({name:"on_tertiary",palette:e=>e.tertiaryPalette,background:e=>e.platform==="phone"?this.tertiary():this.tertiaryDim(),contrastCurve:e=>e.platform==="phone"?k(6):k(7)});return C(super.onTertiary(),"2025",r)}tertiaryContainer(){const r=h.fromPalette({name:"tertiary_container",palette:e=>e.tertiaryPalette,tone:e=>e.platform==="watch"?e.variant===b.TONAL_SPOT?S(e.tertiaryPalette,0,90):S(e.tertiaryPalette):e.variant===b.NEUTRAL?e.isDark?S(e.tertiaryPalette,0,93):S(e.tertiaryPalette,0,96):e.variant===b.TONAL_SPOT?S(e.tertiaryPalette,0,e.isDark?93:100):e.variant===b.EXPRESSIVE?S(e.tertiaryPalette,75,T.isCyan(e.tertiaryPalette.hue)?88:e.isDark?93:100):e.isDark?S(e.tertiaryPalette,0,93):S(e.tertiaryPalette,72,100),isBackground:!0,background:e=>e.platform==="phone"?this.highestSurface(e):void 0,toneDeltaPair:e=>e.platform==="watch"?new I(this.tertiaryContainer(),this.tertiaryDim(),10,"darker",!0,"farther"):void 0,contrastCurve:e=>e.platform==="phone"&&e.contrastLevel>0?k(1.5):void 0});return C(super.tertiaryContainer(),"2025",r)}onTertiaryContainer(){const r=h.fromPalette({name:"on_tertiary_container",palette:e=>e.tertiaryPalette,background:e=>this.tertiaryContainer(),contrastCurve:e=>e.platform==="phone"?k(6):k(7)});return C(super.onTertiaryContainer(),"2025",r)}tertiaryFixed(){const r=h.fromPalette({name:"tertiary_fixed",palette:e=>e.tertiaryPalette,tone:e=>{let t=Object.assign({},e,{isDark:!1,contrastLevel:0});return this.tertiaryContainer().getTone(t)},isBackground:!0,background:e=>e.platform==="phone"?this.highestSurface(e):void 0,contrastCurve:e=>e.platform==="phone"&&e.contrastLevel>0?k(1.5):void 0});return C(super.tertiaryFixed(),"2025",r)}tertiaryFixedDim(){const r=h.fromPalette({name:"tertiary_fixed_dim",palette:e=>e.tertiaryPalette,tone:e=>this.tertiaryFixed().getTone(e),isBackground:!0,toneDeltaPair:e=>new I(this.tertiaryFixedDim(),this.tertiaryFixed(),5,"darker",!0,"exact")});return C(super.tertiaryFixedDim(),"2025",r)}onTertiaryFixed(){const r=h.fromPalette({name:"on_tertiary_fixed",palette:e=>e.tertiaryPalette,background:e=>this.tertiaryFixedDim(),contrastCurve:e=>k(7)});return C(super.onTertiaryFixed(),"2025",r)}onTertiaryFixedVariant(){const r=h.fromPalette({name:"on_tertiary_fixed_variant",palette:e=>e.tertiaryPalette,background:e=>this.tertiaryFixedDim(),contrastCurve:e=>k(4.5)});return C(super.onTertiaryFixedVariant(),"2025",r)}error(){const r=h.fromPalette({name:"error",palette:e=>e.errorPalette,tone:e=>e.platform==="phone"?e.isDark?G(e.errorPalette,0,98):S(e.errorPalette):G(e.errorPalette),isBackground:!0,background:e=>e.platform==="phone"?this.highestSurface(e):this.surfaceContainerHigh(),contrastCurve:e=>e.platform==="phone"?k(4.5):k(7),toneDeltaPair:e=>e.platform==="phone"?new I(this.errorContainer(),this.error(),5,"relative_lighter",!0,"farther"):void 0});return C(super.error(),"2025",r)}errorDim(){return h.fromPalette({name:"error_dim",palette:r=>r.errorPalette,tone:r=>G(r.errorPalette),isBackground:!0,background:r=>this.surfaceContainerHigh(),contrastCurve:r=>k(4.5),toneDeltaPair:r=>new I(this.errorDim(),this.error(),5,"darker",!0,"farther")})}onError(){const r=h.fromPalette({name:"on_error",palette:e=>e.errorPalette,background:e=>e.platform==="phone"?this.error():this.errorDim(),contrastCurve:e=>e.platform==="phone"?k(6):k(7)});return C(super.onError(),"2025",r)}errorContainer(){const r=h.fromPalette({name:"error_container",palette:e=>e.errorPalette,tone:e=>e.platform==="watch"?30:e.isDark?G(e.errorPalette,30,93):S(e.errorPalette,0,90),isBackground:!0,background:e=>e.platform==="phone"?this.highestSurface(e):void 0,toneDeltaPair:e=>e.platform==="watch"?new I(this.errorContainer(),this.errorDim(),10,"darker",!0,"farther"):void 0,contrastCurve:e=>e.platform==="phone"&&e.contrastLevel>0?k(1.5):void 0});return C(super.errorContainer(),"2025",r)}onErrorContainer(){const r=h.fromPalette({name:"on_error_container",palette:e=>e.errorPalette,background:e=>this.errorContainer(),contrastCurve:e=>e.platform==="phone"?k(4.5):k(7)});return C(super.onErrorContainer(),"2025",r)}surfaceVariant(){const r=Object.assign(this.surfaceContainerHighest().clone(),{name:"surface_variant"});return C(super.surfaceVariant(),"2025",r)}surfaceTint(){const r=Object.assign(this.primary().clone(),{name:"surface_tint"});return C(super.surfaceTint(),"2025",r)}background(){const r=Object.assign(this.surface().clone(),{name:"background"});return C(super.background(),"2025",r)}onBackground(){const r=Object.assign(this.onSurface().clone(),{name:"on_background"});return C(super.onBackground(),"2025",r)}},s.primaryPaletteKeyColor=s.colorSpec.primaryPaletteKeyColor(),s.secondaryPaletteKeyColor=s.colorSpec.secondaryPaletteKeyColor(),s.tertiaryPaletteKeyColor=s.colorSpec.tertiaryPaletteKeyColor(),s.neutralPaletteKeyColor=s.colorSpec.neutralPaletteKeyColor(),s.neutralVariantPaletteKeyColor=s.colorSpec.neutralVariantPaletteKeyColor(),s.background=s.colorSpec.background(),s.onBackground=s.colorSpec.onBackground(),s.surface=s.colorSpec.surface(),s.surfaceDim=s.colorSpec.surfaceDim(),s.surfaceBright=s.colorSpec.surfaceBright(),s.surfaceContainerLowest=s.colorSpec.surfaceContainerLowest(),s.surfaceContainerLow=s.colorSpec.surfaceContainerLow(),s.surfaceContainer=s.colorSpec.surfaceContainer(),s.surfaceContainerHigh=s.colorSpec.surfaceContainerHigh(),s.surfaceContainerHighest=s.colorSpec.surfaceContainerHighest(),s.onSurface=s.colorSpec.onSurface(),s.surfaceVariant=s.colorSpec.surfaceVariant(),s.onSurfaceVariant=s.colorSpec.onSurfaceVariant(),s.inverseSurface=s.colorSpec.inverseSurface(),s.inverseOnSurface=s.colorSpec.inverseOnSurface(),s.outline=s.colorSpec.outline(),s.outlineVariant=s.colorSpec.outlineVariant(),s.shadow=s.colorSpec.shadow(),s.scrim=s.colorSpec.scrim(),s.surfaceTint=s.colorSpec.surfaceTint(),s.primary=s.colorSpec.primary(),s.onPrimary=s.colorSpec.onPrimary(),s.primaryContainer=s.colorSpec.primaryContainer(),s.onPrimaryContainer=s.colorSpec.onPrimaryContainer(),s.inversePrimary=s.colorSpec.inversePrimary(),s.secondary=s.colorSpec.secondary(),s.onSecondary=s.colorSpec.onSecondary(),s.secondaryContainer=s.colorSpec.secondaryContainer(),s.onSecondaryContainer=s.colorSpec.onSecondaryContainer(),s.tertiary=s.colorSpec.tertiary(),s.onTertiary=s.colorSpec.onTertiary(),s.tertiaryContainer=s.colorSpec.tertiaryContainer(),s.onTertiaryContainer=s.colorSpec.onTertiaryContainer(),s.error=s.colorSpec.error(),s.onError=s.colorSpec.onError(),s.errorContainer=s.colorSpec.errorContainer(),s.onErrorContainer=s.colorSpec.onErrorContainer(),s.primaryFixed=s.colorSpec.primaryFixed(),s.primaryFixedDim=s.colorSpec.primaryFixedDim(),s.onPrimaryFixed=s.colorSpec.onPrimaryFixed(),s.onPrimaryFixedVariant=s.colorSpec.onPrimaryFixedVariant(),s.secondaryFixed=s.colorSpec.secondaryFixed(),s.secondaryFixedDim=s.colorSpec.secondaryFixedDim(),s.onSecondaryFixed=s.colorSpec.onSecondaryFixed(),s.onSecondaryFixedVariant=s.colorSpec.onSecondaryFixedVariant(),s.tertiaryFixed=s.colorSpec.tertiaryFixed(),s.tertiaryFixedDim=s.colorSpec.tertiaryFixedDim(),s.onTertiaryFixed=s.colorSpec.onTertiaryFixed(),s.onTertiaryFixedVariant=s.colorSpec.onTertiaryFixedVariant();let ct=kr()[4],Te=new s;[...Te.allColors,Te.shadow(),Te.scrim()];let Oe=navigator.userAgent,ut=Oe.includes("Firefox"),fr=!(!Oe.includes("Chrome")&&Oe.includes("Safari")||ut),Lr=function(r){let e=ct();return r.mount=()=>{this.cancel.listen(t=>{let n=m("animate",{xmlns:"http://www.w3.org/2000/svg",attributeName:"opacity",from:1,to:0,dur:t+"ms",fill:"freeze",calcMode:"spline",keySplines:"0.4 0, 0.2 1"});r.root.querySelector("circle").appendChild(n),n.beginElement()})},m("svg",{xmlns:"http://www.w3.org/2000/svg",children:[m("radialGradient",{id:"gradient-"+e,children:[m("stop",{offset:"0%","stop-color":"currentColor","stop-opacity":"0.12"}),m("stop",{offset:"70%","stop-color":"currentColor","stop-opacity":"0.12"}),m("stop",{offset:"100%","stop-color":"currentColor","stop-opacity":"0"})]}),fr?m("filter",{id:"filter-"+e,children:[m("feTurbulence",{type:"fractalNoise",baseFrequency:"0.6",seed:Math.random()}),m("feDisplacementMap",{in:"SourceGraphic",in2:"turbulence",scale:this.size**2*1e-4,xChannelSelector:"R",yChannelSelector:"B"})]}):"firefox sucks",m("circle",{cx:this.size/2,cy:this.size/2,r:0,fill:`url(#gradient-${e})`,...fr?{filter:`url(#filter-${e})`}:{},children:m("animate",{attributeName:"r",from:0,to:this.size/2,dur:this.speed+"ms",fill:"freeze",calcMode:"spline",keySplines:"0.4 0, 0.2 1"})})]})};Lr.style=N`
	:scope {
		position: absolute;
		left: ${r=>r.x-r.size/2+"px"};
		top: ${r=>r.y-r.size/2+"px"};
		width: ${r=>r.size+"px"};
		height: ${r=>r.size+"px"};
		pointer-events: none;
		overflow: visible;
	}
`;let Je=function(r){this.ripples=[];let e=[];return r.mount=()=>{this.create.listen(n=>{let a=r.root.getBoundingClientRect(),o=n.clientX-a.left,i=n.clientY-a.top,l=2.5*Math.hypot(Math.max(o,a.width-o),Math.max(i,a.height-i)),c=Math.max(Math.min(50*Math.log(l),600),200),u=Ke(),d=m(Lr,{x:o,y:i,size:l,speed:c,cancel:u});e.push(()=>{u(800),setTimeout(()=>this.ripples=this.ripples.filter(p=>p!==d),800)}),this.ripples=[...this.ripples,d]});let t=()=>{e.map(n=>n()),e=[]};window.addEventListener("pointerup",t),window.addEventListener("dragend",t)},m("div",{children:use(this.ripples)})};Je.style=N`
	:scope {
		position: absolute;
		inset: 0;
		border-radius: inherit;
		pointer-events: none;

		overflow: hidden;
	}

	:global(*):disabled > :scope { opacity: 0; }
`;let Ze=()=>m("div",{});Ze.style=N`
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
`;let dt={xs:"label-large",s:"label-large",m:"title-medium",l:"headline-small",xl:"headline-large"},ie=function(r){this.size??="s",this.shape??="round",this.icon??="left",this.disabled??=!1;let e=Ke(),t=use(this.size).map(n=>dt[n]);return m("button",{class:use`m3dl-container m3dl-button m3dl-font-${t} variant-${this.variant} size-${this.size} shape-${this.shape} icon-${this.icon}`,disabled:use(this.disabled),"on:click":this["on:click"],"on:pointerdown":e,title:use(this.title),children:[m(Je,{create:e}),m(Ze,{}),r.children]})};ie.style=N`
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
`;N`
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
`;const te=function(){return m("svg",{width:use(this.width).map(r=>r||"1em"),height:use(this.height).map(r=>r||"1em"),viewBox:use`0 0 ${this.icon.width} ${this.icon.height}`,xmlns:"http://www.w3.org/2000/svg",...this.class?{class:this.class}:{},"attr:innerHTML":use(this.icon).map(r=>r.body)})};N`
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
`;N`
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
`;N`
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
`;N`
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
`;let be=function(r){if(this["on:click"]){let e=Ke();return m("button",{class:use`m3dl-container m3dl-card variant-${this.variant}`,"on:pointerdown":e,"on:click":this["on:click"],children:[m(Je,{create:e}),m(Ze,{}),r.children]})}return m("div",{class:use`m3dl-container m3dl-card variant-${this.variant}`,children:r.children})};be.style=N`
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
`;N`
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
`;N`
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
`;const Re={width:24,height:24,body:'<path fill="currentColor" d="M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h7v2H5v14h14v-7h2v7q0 .825-.587 1.413T19 21zm4.7-5.3l-1.4-1.4L17.6 5H14V3h7v7h-2V6.4z"/>'},gr={width:24,height:24,body:'<path fill="currentColor" d="m8 18l-6-6l6-6l1.425 1.425l-4.6 4.6L9.4 16.6zm8 0l-1.425-1.425l4.6-4.6L14.6 7.4L16 6l6 6z"/>'};let Br=function(){return m("img",{src:use(this.src)})};Br.style=N`
	:scope {
		height: 1.25em;
		width: 1.25em;
		vertical-align: -0.25em;
	}
`;let Ce=function(r){return m("div",{children:m(be,{variant:"filled",children:[m("div",{class:"image",children:r.children[0]}),m("div",{class:"body",children:[m("div",{class:"m3dl-font-title-large",children:use(this.title)}),m("div",{class:"expand",children:r.children[1]}),this.target?m("div",{class:"buttons",children:m(ie,{variant:"filled",icon:"left","on:click":()=>window.open(`https://isle.a.hackclub.dev/scenes/${this.target}`),children:[m(te,{icon:Re}),"Visit!"]})}):null]})]})})};Ce.style=N`
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
`;let Ir=function(){return m(Ce,{title:"http://island",target:19,children:[m("div",{class:"rich-image",children:m("marquee",{direction:"right",scrollamount:10,children:[m("img",{src:"./stops/island/plane.webp"}),m("div",{children:m("span",{class:"pull-up",children:"terrain! PULL UP!!"})})]})}),m("div",{children:["A small island in the middle of the ocean, home to a small population (currently about 5 people). 500ft",m("sup",{children:"2"})," in size with a tropical climate. Residents are English-speaking and use the Beenz currency and the Internet Time timezone."]})]})};Ir.style=N`
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
`;const ht={width:24,height:24,body:'<path fill="currentColor" d="m18.9 21l-5.475-5.475l2.1-2.1L21 18.9zM5.1 21L3 18.9L9.9 12l-1.7-1.7l-.7.7l-1.275-1.275v2.05l-.7.7L2.5 9.45l.7-.7h2.05L4 7.5l3.55-3.55q.5-.5 1.075-.725T9.8 3t1.175.225t1.075.725l-2.3 2.3L11 7.5l-.7.7L12 9.9l2.25-2.25q-.1-.275-.162-.575t-.063-.6q0-1.475 1.013-2.488t2.487-1.012q.375 0 .713.075t.687.225L16.45 5.75l1.8 1.8l2.475-2.475q.175.35.238.687t.062.713q0 1.475-1.012 2.488t-2.488 1.012q-.3 0-.6-.05t-.575-.175z"/>'};let Er=function(){return m(Ce,{title:"Exhibits Under Construction",children:[m("div",{class:"construction",children:m(te,{icon:ht})}),m("div",{children:["We apologize for the lack of exhibits showcasing ",m("i",{children:"Hacklantis Island"}),". We need to send our employees out to collect fresh information after our databases were... erm... ",m("b",{children:"vitrified"}),"... by the explosion. More exhibits will be coming as soon as possible!"]})]})};Er.style=N`
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
`;const mt={width:24,height:24,body:'<path fill="currentColor" d="M12 22q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2q3.8 0 6.588 2.45t3.312 6.1q-.5-.25-1.037-.387T19.75 10q-.475-1.825-1.713-3.25T15 4.6V5q0 .825-.587 1.413T13 7h-2v2q0 .425-.288.713T10 10H8v2h6q.275 0 .513.138t.362.387q-.425.675-.65 1.425T14 15.5q0 1.575.813 2.925t1.662 2.525q-1.025.5-2.15.775T12 22m-1-2.05V18q-.825 0-1.412-.587T9 16v-1l-4.8-4.8q-.075.45-.137.9T4 12q0 3.025 1.988 5.3T11 19.95M19.5 22q-.175 0-.3-.1t-.175-.25q-.275-.875-.775-1.625t-1.075-1.475q-.525-.65-.85-1.425T16 15.5q0-1.45 1.025-2.475T19.5 12t2.475 1.025T23 15.5q0 .85-.337 1.613t-.838 1.437q-.575.725-1.075 1.475t-.775 1.625q-.05.15-.175.25t-.3.1m0-2.825q.25-.425.55-.787t.575-.738q.35-.475.613-1.012T21.5 15.5q0-.825-.587-1.412T19.5 13.5t-1.412.588T17.5 15.5q0 .6.263 1.138t.612 1.012l.588.738q.287.363.537.787m0-2.425q-.525 0-.888-.363t-.362-.887t.363-.888t.887-.362t.888.363t.362.887t-.363.888t-.887.362"/>'};let Fr=function(){return m(Ce,{title:"Porple Point",target:98,children:[m("div",{class:"construction",children:m(te,{icon:mt})}),m("div",{children:"Porple Point's exhibit is currently being constructed! Our most senior employee is currently out on an expedition collecting data to display here. We aim to provide our visitors with info about Porple Point as soon as possible! For now, you can trek down and visit it yourself; we don't provide any guarantees about what's there, however."})]})};Fr.style=N`
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
`;let pt="./som.webp",ft="./skulk.webp",Ar=function(){return m("div",{children:[m("div",{class:"m3dl-font-display-small title",children:[m("img",{src:pt})," Mount Kablooey Summit"]}),m("div",{class:"m3dl-font-title-large",children:m("b",{children:m("i",{children:"enjoy the view..."})})}),m("p",{children:["Welcome to the official Mount Kablooey Summit visitor center! We're so high up that you can see almost every other exhibit (including all the airplanes failing to land at ",m("b",{children:"http://island"}),"'s airport ",m(Br,{src:ft}),") so we recommend planning your next visits from here with our information. However, we're still reconstructing after that massive ",m("i",{children:"volcano explosion"}),"; please don't mind the lack of exhibits and artifacts as we recover..."]}),m("div",{class:"m3dl-font-headline-medium",children:m("b",{children:"Next Stops"})}),m("div",{class:"stops",children:[m(Ir,{}),m(Fr,{}),m(Er,{})]}),m("div",{class:"m3dl-font-headline-medium about",children:m("b",{children:"About This Center"})}),m("div",{class:"about-content",children:[m("div",{class:"info",children:["This center is built with the ",m("code",{children:"dreamland.js"})," JavaScript framework, which was rewritten from scratch during Journey v1, Journey v2, and Summer of Making. It's been prerendered and hydrated client-side with ",m("code",{children:"dreamland.js"}),"'s ",m("b",{children:"built-in SSR support"})," and Vite integrations (developed during Summer of Making). Components from ",m("code",{children:"m3-dreamland"}),", rewritten during Summer of Making to support ",m("code",{children:"dreamland.js"}),"'s rewrite, were used to give this center a very ",m("i",{children:"expressive"})," (possibly even a little ",m("b",{children:"material"}),"-like) look. Assets and fonts from the Summer of Making website were used as well. Each destination's exhibit uses assets from the location."]}),m("div",{class:"cards",children:[m(be,{variant:"outlined",children:[m("div",{class:"m3dl-font-title-large",children:"dreamland.js"}),m("div",{class:"expand",children:[m("div",{children:"Utilitarian web framework smaller than preact."}),m("div",{children:["This is the first user-accessible project on Summer of Making! It's also used by ",m("a",{href:"https://mail.hackclub.com",target:"_blank",children:"mail.hackclub.com"}),"'s admin UI."]})]}),m("div",{class:"buttons",children:[m(ie,{variant:"tonal",icon:"full","on:click":()=>window.open("https://github.com/MercuryWorkshop/dreamlandjs"),children:m(te,{icon:gr})}),m(ie,{variant:"filled","on:click":()=>window.open("https://summer.hackclub.com/projects/3"),children:[m(te,{icon:Re}),"Visit on SoM!"]})]})]}),m(be,{variant:"outlined",children:[m("div",{class:"m3dl-font-title-large",children:"m3-dreamland"}),m("div",{class:"expand",children:"A Material 3 (Expressive) component library for dreamland.js."}),m("div",{class:"buttons",children:[m(ie,{variant:"tonal",icon:"full","on:click":()=>window.open("https://github.com/r58Playz/m3-dreamland"),children:m(te,{icon:gr})}),m(ie,{variant:"filled","on:click":()=>window.open("https://summer.hackclub.com/projects/8235"),children:[m(te,{icon:Re}),"Visit on SoM!"]})]})]})]})]})]})};Ar.style=N`
	.title img {
		width: 1em;
		height: 1em;
		vertical-align: -0.125em;
	}

	.stops {
		margin: 1rem 0;

		display: grid;
		grid-template-columns: 1fr;
		gap: 1rem;
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
		.stops {
			grid-template-columns: 1fr 1fr;
		}

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
`;let yr,Vr=function(r){return yr=new Xe(m(dr,{children:m(dr,{show:m(Ar,{})})})),r.init=()=>{yr.mount(this.root)},m("div",{id:"app",class:"m3dl-colon3 m3dl-font-body-large",children:m("placeholder",{this:use(this.root)})})};Vr.style=N`
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
`;const gt=r=>m(Vr,{});Gr(gt,document.querySelector("#app"),document.head,document.querySelector("[dlssr-d]"));
