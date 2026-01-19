import{$ as je,$a as co,$b as Pp,A as ru,Aa as Wt,Ab as up,Ac as lm,B as qi,Ba as Au,Bb as pp,Bc as vo,C as Ri,Ca as Ut,Cb as mp,Cc as cm,D as G,Da as Eu,Db as hp,Dc as dm,E as eo,Ea as Du,Eb as fp,F as xt,Fa as qu,Fb as cr,Ga as ao,Gb as gp,Ha as Ru,Hb as bp,Ia as Mu,Ib as yp,J as fe,Ja as Tu,Jb as vp,K as nu,Ka as Pu,Kb as xp,L as ou,La as Lu,Lb as wp,M as au,Ma as ju,Mb as Ip,N as iu,Na as Nu,Nb as kp,O as su,Oa as Ou,Ob as Sp,P as lu,Pa as Fu,Pb as Cp,Q as re,Qa as io,Qb as _p,R as to,Ra as Bu,Rb as $p,S as cu,Sa as Wu,Sb as Ap,T as du,Ta as Uu,Tb as Ep,U as uu,Ua as so,Ub as bo,V as ro,Va as zu,Vb as yo,W as pu,Wa as Gu,Wb as Dp,X as g,Xa as Hu,Xb as qp,Y as mu,Ya as Vu,Yb as Rp,Z as M,Za as lo,Zb as Mp,_ as hu,_a as Oe,_b as Tp,aa as fu,ab as Xu,ac as Lp,ba as gu,bb as Ku,bc as jp,ca as bu,cb as Qu,cc as Np,d as oe,da as yu,db as Yu,dc as Op,ea as vu,eb as Ju,ec as Fp,fa as no,fb as Zu,fc as Bp,ga as sr,gb as ep,gc as Wp,ha as A,hb as tp,hc as Up,i as C,ia as xu,ib as rp,ic as zp,ja as w,jb as np,jc as Gp,k as W,ka as p,kb as op,kc as Hp,l as Yn,la as U,lb as uo,lc as Vp,m as xe,ma as a,mb as po,mc as Xp,na as wu,nb as Vr,nc as Kp,o as $i,oa as Iu,ob as mo,oc as Qp,p as Jn,pa as ku,pb as ho,pc as Yp,q as Ai,qa as Su,qb as lr,qc as Jp,ra as Cu,rb as ap,rc as Zp,s as Zn,sa as _u,sb as fo,sc as em,ta as $u,tb as He,tc as tm,ua as oo,ub as ip,uc as rm,va as Bt,vb as sp,vc as nm,w as P,wa as wt,wb as lp,wc as om,x as Ei,xa as It,xb as cp,xc as am,y as Di,ya as kt,yb as dp,yc as im,z as K,za as St,zb as go,zc as sm}from"./chunk-EPGEAFUN.js";import{a as n,c as ir,d as tu,e as B,f as Qn,g as _i}from"./chunk-3XV6NNL6.js";var Ro=ir((Z0,ps)=>{"use strict";var lh=n(function(e,t,r,o,i,s,l,c){if(!e){var d;if(t===void 0)d=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var u=[r,o,i,s,l,c],m=0;d=new Error(t.replace(/%s/g,function(){return u[m++]})),d.name="Invariant Violation"}throw d.framesToPop=1,d}},"invariant");ps.exports=lh});var fs=ir((tw,hs)=>{"use strict";var ms="__global_unique_id__";hs.exports=function(){return global[ms]=(global[ms]||0)+1}});var vs=ir((rw,ys)=>{"use strict";var ch=!1,bs=n(function(){},"warning");ch&&(gs=n(function(t,r){var o=arguments.length;r=new Array(o>1?o-1:0);for(var i=1;i<o;i++)r[i-1]=arguments[i];var s=0,l="Warning: "+t.replace(/%s/g,function(){return r[s++]});typeof console<"u"&&console.error(l);try{throw new Error(l)}catch{}},"printWarning"),bs=n(function(e,t,r){var o=arguments.length;r=new Array(o>2?o-2:0);for(var i=2;i<o;i++)r[i-2]=arguments[i];if(t===void 0)throw new Error("`warning(condition, format, ...args)` requires a warning message argument");e||gs.apply(null,[t].concat(r))},"warning"));var gs;ys.exports=bs});var Ss=ir((rn,ks)=>{"use strict";rn.__esModule=!0;var To=(K(),_i(Di)),ow=tn(To),dh=ru(),xs=tn(dh),uh=fs(),ph=tn(uh),mh=vs(),aw=tn(mh);function tn(e){return e&&e.__esModule?e:{default:e}}n(tn,"_interopRequireDefault");function ws(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}n(ws,"_classCallCheck");function en(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:e}n(en,"_possibleConstructorReturn");function Is(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}n(Is,"_inherits");var Mo=1073741823;function hh(e,t){return e===t?e!==0||1/e===1/t:e!==e&&t!==t}n(hh,"objectIs");function fh(e){var t=[];return{on:n(function(o){t.push(o)},"on"),off:n(function(o){t=t.filter(function(i){return i!==o})},"off"),get:n(function(){return e},"get"),set:n(function(o,i){e=o,t.forEach(function(s){return s(e,i)})},"set")}}n(fh,"createEventEmitter");function gh(e){return Array.isArray(e)?e[0]:e}n(gh,"onlyChild");function bh(e,t){var r,o,i="__create-react-context-"+(0,ph.default)()+"__",s=(function(c){Is(d,c);function d(){var u,m,f;ws(this,d);for(var y=arguments.length,h=Array(y),v=0;v<y;v++)h[v]=arguments[v];return f=(u=(m=en(this,c.call.apply(c,[this].concat(h))),m),m.emitter=fh(m.props.value),u),en(m,f)}return n(d,"Provider"),d.prototype.getChildContext=n(function(){var m;return m={},m[i]=this.emitter,m},"getChildContext"),d.prototype.componentWillReceiveProps=n(function(m){if(this.props.value!==m.value){var f=this.props.value,y=m.value,h=void 0;hh(f,y)?h=0:(h=typeof t=="function"?t(f,y):Mo,h|=0,h!==0&&this.emitter.set(m.value,h))}},"componentWillReceiveProps"),d.prototype.render=n(function(){return this.props.children},"render"),d})(To.Component);s.childContextTypes=(r={},r[i]=xs.default.object.isRequired,r);var l=(function(c){Is(d,c);function d(){var u,m,f;ws(this,d);for(var y=arguments.length,h=Array(y),v=0;v<y;v++)h[v]=arguments[v];return f=(u=(m=en(this,c.call.apply(c,[this].concat(h))),m),m.state={value:m.getValue()},m.onUpdate=function(I,_){var q=m.observedBits|0;(q&_)!==0&&m.setState({value:m.getValue()})},u),en(m,f)}return n(d,"Consumer"),d.prototype.componentWillReceiveProps=n(function(m){var f=m.observedBits;this.observedBits=f??Mo},"componentWillReceiveProps"),d.prototype.componentDidMount=n(function(){this.context[i]&&this.context[i].on(this.onUpdate);var m=this.props.observedBits;this.observedBits=m??Mo},"componentDidMount"),d.prototype.componentWillUnmount=n(function(){this.context[i]&&this.context[i].off(this.onUpdate)},"componentWillUnmount"),d.prototype.getValue=n(function(){return this.context[i]?this.context[i].get():e},"getValue"),d.prototype.render=n(function(){return gh(this.props.children)(this.state.value)},"render"),d})(To.Component);return l.contextTypes=(o={},o[i]=xs.default.object,o),{Provider:s,Consumer:l}}n(bh,"createReactContext");rn.default=bh;ks.exports=rn.default});var $s=ir((nn,_s)=>{"use strict";nn.__esModule=!0;var yh=(K(),_i(Di)),vh=Cs(yh),xh=Ss(),wh=Cs(xh);function Cs(e){return e&&e.__esModule?e:{default:e}}n(Cs,"_interopRequireDefault");nn.default=vh.default.createContext||wh.default;_s.exports=nn.default});Ei();Ei();K();var um=n(e=>Object.values(e)[0],"get"),pm=n(e=>e,"getAll"),mm=n(e=>Object.values(e)[0][0],"getOne"),Mi=n(({runFromString:e,subscribeFromString:t},r)=>{if(typeof r!="string")throw Error(`Query must be a string but was ${typeof r}`);let[o,i,s]=r.split(/^\s*(\w+)(?:\s+(\w+))?\b/);if(!i)i="query";else if(!/^(subscription|mutation|query)$/.test(i))throw Error("Invalid query, type must be query, mutation or subscription");s||(s=`${i}_${r.split(/{\s*(.+?)\b/)[1]}`);let l=JSON.stringify({query:r}),c=l,d=l.slice(0,-1),u=n(y=>{if(!y)return c;if(typeof y=="function")throw Error("variables should not be functions, verify the order of your parameters");let h=JSON.stringify(y);return h==="{}"?c:`${d},"variables":${h}}`},"build"),m=i==="subscription"?y=>(h,v)=>t(I=>h(y(I)),u(v),s):y=>async h=>y(await e(u(h),s)),f=m(um);return f.all=m(pm),f.one=m(mm),f.map=m,f.query=r,f},"prepare");var Ti=n(e=>(t,r="id",o="Int")=>{let i=`${r}_list`,s=e(`
  mutation insert_${t} ($objects: [${t}_insert_input!]!){
    insert_${t} (objects: $objects) { returning { ${r} } }
  }`),l=e(`
  mutation update_${t} ($${r}: ${o}!, $changes: ${t}_set_input!) {
    update_${t} (where: {${r}: {_eq: $${r}}}, _set: $changes) { affected_rows }
  }`),c=e(`
  mutation update_${t} ($${i}: [${o}!], $changes: ${t}_set_input!) {
    update_${t} (where: {${r}: {_in: $${i}}}, _set: $changes) { affected_rows }
  }`),d=e(`
  mutation delete_${t} ($${r}: ${o}!) {
    delete_${t} (where: {${r}: {_eq: $${r}}}) { affected_rows }
  }`),u=e(`
  mutation delete_${t} ($${i}: [${o}!]) {
    delete_${t} (where: {id: {_in: $${i}} }) { affected_rows }
  }`),m=e(`
  query ${t}_count {
    ${t}_aggregate { aggregate { count } }
  }`),f=n(v=>v[r],"getKey"),y=n(({[r]:v,...I})=>l({[r]:v,changes:I}),"updateOne"),h={key:r,list:i,insertQuery:s,deleteQuery:d,updateQuery:l,updateQueryAll:c,deleteQueryAll:u,remove:n(v=>Array.isArray(v)?u({[i]:v}):d({[r]:v}),"remove"),update:n((v,I)=>I?Array.isArray(I)?c({changes:v,[i]:I}):l({changes:v,[r]:I}):y(v),"update"),add:n(async v=>{let I=Array.isArray(v),_=await s.all({objects:I?v:[v]});return I?_[`insert_${t}`].returning.map(f):_[`insert_${t}`].returning[0][r]},"add")};return v=>{let I=`($${r}: ${o}!) {
      ${t} (where: {${r}: {_eq: $${r}}} limit: 1) {${r} ${v}}
    }`,_=`($${i}: [${o}!]) {
      ${t} (where: {${r}: {_in: $${i}}}) {${r} ${v}}
    }`,q=`($where: ${t}_bool_exp!) {
      ${t} (where: $where) {${r} ${v}}
    }`,R=`(
      $where: ${t}_bool_exp!, $orderBy: ${t}_order_by!, $limit: Int!, $offset: Int!,
    ) {
      ${t} ( order_by: [$orderBy] offset: $offset limit: $limit where: $where ) { ${v} }
    }`,E=`(
      $where: ${t}_bool_exp!, $orderBy: ${t}_order_by!, $limit: Int!, $offset: Int!,
    ) {
      ${t} ( order_by: [$orderBy] offset: $offset limit: $limit where: $where ) { ${v} }
      ${t}_aggregate (where: $where) { aggregate { count } } 
    }`,L=e(`query ${I}`),H=e(`query ${_}`),k=e(`query ${q}`),D=e(`query get_${t}_paginate ${R}`),T=e(`query get_${t}_with_count ${E}`),X=e(`subscription ${I}`),V=e(`subscription ${_}`),Q=e(`subscription ${q}`);return{...h,selectQuery:L,selectQueryAll:H,selectQueryWhere:k,subscribeQuery:X,subscribeQueryAll:V,subscribeQueryWhere:Q,get:n(j=>Array.isArray(j)?H({[i]:j}):j&&typeof j=="object"?k({where:j}):L.one(j&&{[r]:j}),"get"),subscribe:n((j,Y)=>Array.isArray(Y)?V(j,{[i]:Y}):Y&&typeof Y=="object"?Q(j,{where:Y}):X.one(j,Y&&{[r]:Y}),"subscribe"),getCount:n(async j=>(await m(j)).aggregate.count,"getCount"),getPaginated:D,getPaginatedWithCount:n(async j=>{let Y=await T.all(j);return{[t]:Y[t],count:Y[`${t}_aggregate`].aggregate.count}},"getPaginatedWithCount")}}},"buildModel");var we=Symbol("error"),De=Symbol("pending"),Ct=Symbol("reloading"),Pi=n(e=>e?Object.values(e):[],"genInputs"),wo=n((e,t,r)=>{if(typeof e!="function")throw Error(`Hooks first arguement must be the prepare query
Hooked query always return all the values, so ensure you didn't pass .all`);if(r&&!Array.isArray(r))throw Error("Hooks inputs must be an array like you would give to useEffect");if(t&&typeof t!="object")throw Error("Hooks variables must be a javascript object")},"assertHookParams"),Li=n((e,t)=>{if(!e||typeof e!="object"||e[De]||e[Ct])return;let r=Array.isArray(e)?[...e]:{...e};r[Ct]=!0,t(r)},"reloadState"),le=n((e,t,r)=>{wo(e,t,r);let[o,i]=C({[De]:!0});return W(()=>{if(Li(o,i),t===null)return;let s=!1;return e(t).then(l=>s||i(l),l=>s||i({[we]:l})),()=>s=!0},r||Pi(t)),o},"useQuery"),Xr=n(e=>{wo(e);let[t,r]=C(!1),o=$i(()=>async i=>{r(!0);try{return await e(i)}finally{r(!1)}},[]);return{pending:t,run:o}},"useMutation"),xo=n((e,t,r)=>{wo(e,t,r);let[o,i]=C({[De]:!0});return W(()=>{if(Li(o,i),t===null)return;let s=e(i,t);return s.execution.catch(l=>i({[we]:l})),s.unsubscribe},r||Pi(t)),o},"useSubscribe"),hm=n(e=>{let t=e.match(/(query|mutation|subscription)/);switch(t&&t[0]){case"mutation":return Xr;case"subscription":return xo;default:return le}},"guessHook"),fm=n((e,t)=>{let r=Mi(e,t),o=hm(t),i=n(s=>(l,c)=>o(s,l,c),"map");return r.use=i(r),r.useAll=i(r.all),r.useOne=i(r.one),r.useMap=s=>i(r.map(s)),r},"prepareWithHooks"),gm=n(e=>t=>fm(e,t),"initPrepareWithHooks"),ji=n(e=>!!(e&&e[we]),"_hasError"),bm=n(e=>e&&e[we],"_getError"),ym=n(e=>e&&e[De],"_isPending"),vm=n(e=>e&&e[Ct],"_isReloading"),Ni=n((...e)=>e.some(ji),"hasError"),Kr=n((...e)=>bm(e.find(ji)),"getError"),Ve=n((...e)=>e.some(ym),"isPending"),o0=n((...e)=>e.some(vm),"isReloading"),xm=n(e=>{let t=Ti(e);return(...r)=>o=>{let i=t(...r)(o);return{...i,useRemove:n(()=>Xr(i.remove),"useRemove"),useUpdate:n(()=>Xr(i.update),"useUpdate"),useAdd:n(()=>Xr(i.add),"useAdd"),useGet:n(s=>Array.isArray(s)?le(i.selectQueryAll,{[i.list]:s},s):le(i.selectQuery.one,s?{[i.key]:s}:null,[s]),"useGet"),useSubscribe:n(s=>Array.isArray(s)?xo(i.subscribeQueryAll,{[i.list]:s},s):xo(i.subscribeQuery.one,s?{[i.key]:s}:null,[s]),"useSubscribe")}}},"buildModelWithHooks"),Oi=n(e=>{let t=gm(e),r=xm(t);return{client:e,prepare:t,model:r}},"initAll");K();var c0=n((e,t)=>{let[r,o]=C({[De]:!0});return W(()=>{!Ve(r)&&o({[Ct]:!0,...r}),e(t).catch(i=>o({[we]:i})).then(o)},[t]),r},"usePromise"),et=n((e="",t=3e3)=>{let[r,o]=C(e),i=xe();return W(()=>()=>clearTimeout(i.current),[]),[r,Jn((s,l=t)=>{s!==r&&(o(s),clearTimeout(i.current),i.current=setTimeout(o,l,e))},[o]),Jn(s=>o(e=s),[o])]},"useTempMessage"),Fi=n((e=!0,t=0)=>{let[r,o]=C(Date.now());return W(()=>{if(!e)return;let i=!1,s=r;return requestAnimationFrame(n(function l(){if(i)return;let c=Date.now();c-s>=t&&(o(c),s=c),requestAnimationFrame(l)},"updateTime")),()=>i=!0},[e]),r},"useTimer"),d0=n(()=>{let[e,t]=C(Date.now());return[e,()=>t(Date.now())]},"useCache"),u0=n(e=>{let[t,r]=C();return W(()=>{let o=0,i=setInterval(()=>r(o++),e);return()=>clearInterval(i)},[e]),t},"useInterval"),_t=n((e=new DOMRectReadOnly)=>{let[t,r]=C(),[o,i]=C(e);return Yn(()=>{if(!t)return;i(t.getBoundingClientRect());let s=new ResizeObserver(l=>{for(let c of l)return i(c.contentRect)});return s.observe(t),()=>s.disconnect()},[t]),[r,o,t]},"useDOMRect"),Bi,dr=new Set,Wi=n(()=>{Bi=requestAnimationFrame(Wi);for(let e of dr)e()},"loop"),wm=n(e=>(dr.size||Wi(),dr.add(e),e(),()=>{dr.delete(e),dr.size||cancelAnimationFrame(Bi)}),"sub"),Io=n((e,t)=>{let[r,o]=C();return Yn(()=>{if(!r||!e)return;let i=Object.keys(e),s=e;return wm(()=>{let l=!0,c={};for(let d of i){let u=c[d]=r[d];l&&(l=u===s[d])}l||t(c)})},[r,t]),o},"useDOMAttributesCallback"),Ui=n((e={})=>{let[t,r]=C(e);return[Io(e,r),t]},"useDOMAttributes");K();var zi="ba57e41261aee1487d8f685283320c92de9ec37e66d4d59b0155b7cb6f8d5ed1",Im=`.loading-01 {
  animation: animation-01 1.5s linear infinite;
  background: linear-gradient(
    to right,
    var(--grey) 0%,
    transparent 48%,
    transparent 52%,
    var(--grey) 100%
  );
  background-size: 500px 640px;
  position: relative;
}

@keyframes animation-01 {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 500px 0;
  }
}

.transparentTxt-01 {
  color: transparent;
}

.focusNuclearButton-01:focus {
  box-shadow: 0 0 0 0.25px var(--redAlt);
}

.focusAction-01:focus {
  color: var(--purple);
}

.hoverToggleBtn-01:hover + .hoverToggleElement-01 {
  opacity: 1;
}

.hoverToggleElement-01 {
  opacity: 0;
}
`;(function(){if(!(typeof document>"u")&&!document.getElementById(zi)){var e=document.createElement("style");e.id=zi,e.textContent=Im,document.head.appendChild(e)}})();var ur={loading:"loading-01",animation:"animation-01",transparentTxt:"transparentTxt-01",focusNuclearButton:"focusNuclearButton-01",focusAction:"focusAction-01",hoverToggleBtn:"hoverToggleBtn-01",hoverToggleElement:"hoverToggleElement-01"};var tt=n(e=>new Date(e).getTime(),"numTime"),Qr=n(e=>e?new Date(e).toISOString():Number.NaN,"numToISOString"),km=n((e,t)=>{let{startAfter:r=0,eventStartDelay:o=0,registrationDuration:i}=t.attrs;return tt(e)+(r-(o+i))*6e4},"getChildRegistrationStartAt"),Sm=n((e,t)=>{let{startAfter:r=0,eventStartDelay:o=0}=t.attrs;return tt(e)+(r-o)*6e4},"getChildRegistrationEndAt"),Cm=n((e,{attrs:t})=>tt(e)+(t.startAfter||0)*6e4,"getChildEventStartAt"),_m=n((e,t)=>{let{startAfter:r=0,eventDuration:o}=t.attrs;return tt(e)+(r+o)*6e4},"getChildEventEndAt"),f0=n((e,t)=>({startAt:Qr(km(e,t)),endAt:Qr(Sm(e,t)),eventJoinedAt:Qr(Cm(e,t)),eventEndAt:Qr(_m(e,t))}),"getChildEventInfo"),g0=n(({eventJoinedAt:e},t)=>tt(e)+t.attrs.eventDuration*6e4,"getEndOfEvent"),ko=n((e,t)=>tt(e)+t.attrs.delay,"getQuestStartAt"),Gi=n((e,t)=>{let{scopeExtraDuration:r,duration:o}=t.attrs;return e+((r||0)+(o||1))*864e5},"getQuestExtraEndAt"),Yr=n(e=>new Date(e).getTime()<Date.now(),"isFinished");var $m=1/0,Am="[object Symbol]",Em=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,Dm="\\u0300-\\u036f\\ufe20-\\ufe23",qm="\\u20d0-\\u20f0",Rm="["+Dm+qm+"]",Mm=RegExp(Rm,"g"),Tm={\u00C0:"A",\u00C1:"A",\u00C2:"A",\u00C3:"A",\u00C4:"A",\u00C5:"A",\u00E0:"a",\u00E1:"a",\u00E2:"a",\u00E3:"a",\u00E4:"a",\u00E5:"a",\u00C7:"C",\u00E7:"c",\u00D0:"D",\u00F0:"d",\u00C8:"E",\u00C9:"E",\u00CA:"E",\u00CB:"E",\u00E8:"e",\u00E9:"e",\u00EA:"e",\u00EB:"e",\u00CC:"I",\u00CD:"I",\u00CE:"I",\u00CF:"I",\u00EC:"i",\u00ED:"i",\u00EE:"i",\u00EF:"i",\u00D1:"N",\u00F1:"n",\u00D2:"O",\u00D3:"O",\u00D4:"O",\u00D5:"O",\u00D6:"O",\u00D8:"O",\u00F2:"o",\u00F3:"o",\u00F4:"o",\u00F5:"o",\u00F6:"o",\u00F8:"o",\u00D9:"U",\u00DA:"U",\u00DB:"U",\u00DC:"U",\u00F9:"u",\u00FA:"u",\u00FB:"u",\u00FC:"u",\u00DD:"Y",\u00FD:"y",\u00FF:"y",\u00C6:"Ae",\u00E6:"ae",\u00DE:"Th",\u00FE:"th",\u00DF:"ss",\u0100:"A",\u0102:"A",\u0104:"A",\u0101:"a",\u0103:"a",\u0105:"a",\u0106:"C",\u0108:"C",\u010A:"C",\u010C:"C",\u0107:"c",\u0109:"c",\u010B:"c",\u010D:"c",\u010E:"D",\u0110:"D",\u010F:"d",\u0111:"d",\u0112:"E",\u0114:"E",\u0116:"E",\u0118:"E",\u011A:"E",\u0113:"e",\u0115:"e",\u0117:"e",\u0119:"e",\u011B:"e",\u011C:"G",\u011E:"G",\u0120:"G",\u0122:"G",\u011D:"g",\u011F:"g",\u0121:"g",\u0123:"g",\u0124:"H",\u0126:"H",\u0125:"h",\u0127:"h",\u0128:"I",\u012A:"I",\u012C:"I",\u012E:"I",\u0130:"I",\u0129:"i",\u012B:"i",\u012D:"i",\u012F:"i",\u0131:"i",\u0134:"J",\u0135:"j",\u0136:"K",\u0137:"k",\u0138:"k",\u0139:"L",\u013B:"L",\u013D:"L",\u013F:"L",\u0141:"L",\u013A:"l",\u013C:"l",\u013E:"l",\u0140:"l",\u0142:"l",\u0143:"N",\u0145:"N",\u0147:"N",\u014A:"N",\u0144:"n",\u0146:"n",\u0148:"n",\u014B:"n",\u014C:"O",\u014E:"O",\u0150:"O",\u014D:"o",\u014F:"o",\u0151:"o",\u0154:"R",\u0156:"R",\u0158:"R",\u0155:"r",\u0157:"r",\u0159:"r",\u015A:"S",\u015C:"S",\u015E:"S",\u0160:"S",\u015B:"s",\u015D:"s",\u015F:"s",\u0161:"s",\u0162:"T",\u0164:"T",\u0166:"T",\u0163:"t",\u0165:"t",\u0167:"t",\u0168:"U",\u016A:"U",\u016C:"U",\u016E:"U",\u0170:"U",\u0172:"U",\u0169:"u",\u016B:"u",\u016D:"u",\u016F:"u",\u0171:"u",\u0173:"u",\u0174:"W",\u0175:"w",\u0176:"Y",\u0177:"y",\u0178:"Y",\u0179:"Z",\u017B:"Z",\u017D:"Z",\u017A:"z",\u017C:"z",\u017E:"z",\u0132:"IJ",\u0133:"ij",\u0152:"Oe",\u0153:"oe",\u0149:"'n",\u017F:"ss"},Pm=typeof global=="object"&&global&&global.Object===Object&&global,Lm=typeof self=="object"&&self&&self.Object===Object&&self,jm=Pm||Lm||Function("return this")();function Nm(e){return function(t){return e?.[t]}}n(Nm,"basePropertyOf");var Om=Nm(Tm),Fm=Object.prototype,Bm=Fm.toString,Hi=jm.Symbol,Vi=Hi?Hi.prototype:void 0,Xi=Vi?Vi.toString:void 0;function Wm(e){if(typeof e=="string")return e;if(zm(e))return Xi?Xi.call(e):"";var t=e+"";return t=="0"&&1/e==-$m?"-0":t}n(Wm,"baseToString");function Um(e){return!!e&&typeof e=="object"}n(Um,"isObjectLike");function zm(e){return typeof e=="symbol"||Um(e)&&Bm.call(e)==Am}n(zm,"isSymbol");function Gm(e){return e==null?"":Wm(e)}n(Gm,"toString");function Ki(e){return e=Gm(e),e&&e.replace(Em,Om).replace(Mm,"")}n(Ki,"deburr");var Hm={13:({save:e,value:t,event:r,allowLineBreak:o})=>r.shiftKey||o?!1:e(t),27:({set:e,originalValue:t})=>e(t),83:({save:e,value:t,event:r})=>r.metaKey||r.ctrlKey?e(t):!1},Vm=new Set(["module","piscine","exam","raid","quest","exercise","project","signup"]),S0=new Set([...Vm,...xt]),C0={campus:["signup","onboarding","piscine","module"],signup:["form-step","sign-step","upload-step","contact-validation-step","avatar-step"],onboarding:["games","administration","interview","piscine-registration","module-registration"],administration:["form-step","sign-step","upload-step","contact-validation-step","avatar-step"],piscine:["quest","exam","raid","project"],exam:["exercise"],quest:["exercise"],module:["project","piscine","exam"]},_0=n(e=>{let t=Hm[e.event.keyCode];t&&t(e)!==!1&&e.event.preventDefault()},"handleKeyDownEvent");var _o=n(e=>e?e[0].toUpperCase()+e.slice(1):"","upperFirst");var at=1e3,$t=60*at,rt=60*$t,Ne=24*rt,So=7*Ne,zt=365*Ne,$0=Object.entries({year:zt,month:2628e6,day:Ne,hour:rt,minute:$t,second:at}),Xm={years:zt,year:zt,yrs:zt,yr:zt,y:zt,weeks:So,week:So,w:So,days:Ne,day:Ne,d:Ne,hours:rt,hour:rt,hrs:rt,hr:rt,h:rt,minutes:$t,minute:$t,mins:$t,min:$t,m:$t,seconds:at,second:at,secs:at,sec:at,s:at,milliseconds:1,millisecond:1,ms:1},A0=new Intl.RelativeTimeFormat("en",{style:"narrow"});var Co=n(e=>e.toString().padStart(2,"0"),"padStart0"),E0=n(e=>{if(typeof e!="string")return 0;e=e.toLowerCase();let t=/(?<value>[0-9.-]+) *(?<type>[a-z]+)/g,r,o=0;for(;r=t.exec(e);){let{type:i,value:s}=r.groups,l=Xm[i];Number(s)&&l&&(o+=s*l)}return Math.round(o)},"timeToMS"),Qi=n((e,{hoursOnly:t}={})=>{let r=!t&&Math.floor(e/86400),o=Math.floor((t?e:e%86400)/3600),i=Math.floor(e%3600/60),s=Math.floor(e%60),l=`${Co(o)}:${Co(i)}:${Co(s)}`;return r?`${r}d ${l}`:l},"formatedDurationColons"),$o=n(e=>Yi(Math.round(e/at)),"formatedMS"),Km=[{label:"y",fullLabel:"year",size:31536e3},{label:"w",fullLabel:"week",size:604800},{label:"d",fullLabel:"day",size:86400},{label:"h",fullLabel:"hour",size:3600},{label:"m",fullLabel:"minute",size:60},{label:"s",fullLabel:"second",size:1}],Yi=n((e,{noSeconds:t,stopFirst:r,useFullLabel:o}={})=>{let i=[];for(let{label:s,size:l,fullLabel:c}of Km){let d=Math.floor(e/l);if(d!==0){if(i.push(`${d}${o?` ${c}`:s}${d>1&&o?"s":""}`),r)return i;e-=d*l}}return!t&&e!==0&&i.push(`${e}s`),i.join(" ")||(t?"0m":"0s")},"formatedDuration"),D0=n((e,t=Date.now())=>{if(!e)return null;let r=Gt(e)-Gt(t);return Yi(Math.floor(Math.abs(r)/1e3),{stopFirst:!0,useFullLabel:!0})},"timeDiff"),Gt=n(e=>e instanceof Date?e:new Date(e),"toDate"),Ji=n((e,t=!0)=>{if(Jr(e))return"\u221E";let r=Gt(e),o=(r.getMonth()+1).toString().padStart(2,"0"),i=r.getDate().toString().padStart(2,"0");return t?`${r.getFullYear()}-${o}-${i}`:`${i}/${o}/${r.getFullYear()}`},"toDateFormat"),q0=n(e=>Gt(e).toISOString(),"toISOStringWithTimeZone"),pr=n((e,t="T")=>{let r=Gt(e),o=String(r.getHours()).padStart(2,"0"),i=String(r.getMinutes()).padStart(2,"0");return`${Ji(r)}${t}${o}:${i}`},"toDateFormatWithTime"),R0=n((e,t="T")=>{let r=Gt(e),o=String(r.getHours()).padStart(2,"0"),i=String(r.getMinutes()).padStart(2,"0"),s=(r.getMonth()+1).toString().padStart(2,"0"),l=r.getDate().toString().padStart(2,"0");return`${r.getFullYear()}-${s}-${l}${t}${o}:${i}`},"toPermanentDateFormatWithTime"),Ao=n(e=>pr(e," | "),"displayDateTime");var Qm=n(e=>Ym[e],"getDayName"),Zi=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],Ym=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],es=n(e=>e===0||e===12?12:e%12,"hour"),ts=n(e=>String(e).padStart(2,"0"),"minPad"),rs=n(e=>e===0?"am":e===12?"pm":e<12?"am":"pm","suffix"),Jr=n(e=>(e instanceof Date&&!Number.isNaN(e.valueOf())?e:new Date(e)).valueOf()>325036836e5,"dateIsPermanent"),ns=n(e=>{let t=new Date(e),r=t.getDay(),o=t.getDate(),i=t.getMonth(),s=t.getFullYear(),l=t.getHours(),c=t.getMinutes();return{day:r,jj:o,mm:i,yyyy:s,hh:l,min:c}},"getDateElems"),M0=n((e,t="at")=>{if(!e)return"-";if(Jr(e))return"\u221E";let{jj:r,mm:o,yyyy:i,hh:s,min:l}=ns(e);return`${Zi[o]} ${r}, ${i} ${t} ${es(s)}:${ts(l)} ${rs(s)}`},"formatedDateTime"),T0=n(e=>{if(!e)return"-";if(Jr(e))return"\u221E";let{day:t,jj:r,mm:o,yyyy:i,hh:s,min:l}=ns(e);return`${Qm(t)}, ${Zi[o]} ${r}, ${i} at ${es(s)}:${ts(l)} ${rs(s)}`},"formatedDateTimeWithDay"),P0=n(e=>e?Jr(e)?"\u221E":Ji(e):"-","formatedDate");var L0=n(e=>Ki(e).trim().toLowerCase().replace(/ /g,"-").replace(/([^a-zA-Z0-9._-]+)/,""),"slugify"),j0=n(({firstName:e,lastName:t})=>`${e||""} ${t||""}`,"fullName");var os=n(e=>new Promise(t=>setTimeout(t,e)),"wait"),Jm=n(e=>e[0].toLowerCase()+e.slice(1),"lowertalize"),Zm=n((e,t)=>t.toUpperCase(),"upperFirstMatch"),mr=n(e=>Jm(e.trim().toLowerCase().replace(/[ _-]+(.?)/g,Zm)),"toCamelCase"),Eo=n(e=>/[ _-]+(.?)/g.test(e),"isNotCamel"),eh=n((e,t,r)=>`${t}_${r}`,"underscoreJoin"),as=n(e=>e.trim().replace(/(.)([A-Z])/g,eh).toLowerCase(),"toSnakeCase");var th=n((e,t,r)=>`${t} ${r}`,"spaceJoin"),Zr=n(e=>e.trim().replace(/(.)([A-Z])/g,th).toLowerCase(),"breath"),Do=n(e=>_o(Zr(e)),"prettyKey"),is=n((e,t,r)=>At(e,([o,i])=>[t(o),r(i)]),"switchKeys"),rh=n(e=>is(e,mr,ls),"toCamelKeys"),nh=n(e=>is(e,as,cs),"toSnakeKeys"),ss=n((e,t,r,o)=>!e||typeof e!="object"?e:Array.isArray(e)?e.map(o):r(e,t,o),"switchAll"),ls=n(e=>ss(e,mr,rh,ls),"toCamelAll"),cs=n(e=>ss(e,as,nh,cs),"toSnakeAll"),Fe=n((e,t=0)=>[...Array(e+t).keys()].slice(t),"arrayOf");var At=n((e,t)=>Object.fromEntries(Object.entries(e).map(t)),"mapEntries"),de=n((e,t)=>At(e,([r,o])=>[r,t(o,r,e)]),"mapValues"),it=n((e,t)=>Object.fromEntries(Object.entries(e).filter(t)),"filterEntries");var oh=n((e,t)=>it(e,([r,o])=>!hr(o,t[r])),"getChanges"),N0=n((e,t)=>Object.keys(oh(e,t)).length!==0,"hasChanged");var ds=n((e,t)=>e&&Object.values(e).find(r=>r.type===t),"getChildByType"),O0=n(e=>{if(!e)return"-";if(e.attrs?.name)return e.attrs.name;let t=e.firstName||"-",r=e.lastName||"-";return`${t} ${r}`},"getUserName"),hr=n((e,t)=>{if(e===t)return!0;if(typeof e!=typeof t)return!1;if(typeof e=="number"&&Number.isNaN(e)&&Number.isNaN(t))return!0;if(typeof e=="object"){if(!e||!t||e.constructor!==t.constructor)return!1;let r=Object.entries(e);if(r.length!==Object.values(t).length)return!1;for(let[o,i]of r)if(!hr(t[o],i))return!1;return!0}return!1},"eq"),F0=n(e=>{if(!(!e||!e.isDone))return e.succeeded?"succeeded":"failed"},"getStatus"),ah=n(e=>!e.type.canAccessPlatform&&(new Date(e.endAt)>Date.now()||e.type.isPermanent||!e.endAt)&&Yr(e.startAt),"isAccessBlocked"),B0=n(e=>{let r=e?.records?.find(ah);if(!r)return;let o=Error("Banned");return o.record=r,o},"isBanned"),us=n(()=>Math.random().toString(36).slice(2,7).padEnd(5,"#").replace(/0/gi,"_").replace(/o/gi,"-").replace(/I/gi,"?").replace(/l/gi,"$"),"generateCode"),W0=n(e=>{let r=new TextEncoder().encode(e);return btoa(String.fromCharCode.apply(null,r))},"base64Encode"),U0=n((e,t)=>new Date(new Date(e).getTime()+t).toISOString(),"timePlusDelay"),z0=n(e=>Yr(e?.startAt)?e?.endAt&&Yr(e?.endAt)?"finished":e?.type.isPermanent?"permanent":e?.endAt?"in progress":"unblock required":"starting soon","getRecordStatus"),G0=n(e=>e.reduce((t,r)=>(t[r]=(t[r]||0)+1,t),{}),"createFrequencyMap");var ih={primary:["disabled","highlight","neutral","danger","success"],secondary:["disabled","neutral","danger","success"],tertiary:["disabled","highlight","neutral","danger","success"]},sh=n((e,t)=>Object.fromEntries(t.map(r=>{let o=e==="primary",i=e==="secondary";if(r==="disabled")return[r,{[o?"white":"grey"]:!0,iconColor:o?"white":"grey",...o?{baTransparent:!0,bgGrey:!0}:{ba:i,borderGrey:i}}];let s=re[r],l=je(s),c=s;return e==="primary"&&(c=r==="neutral"?"neutralOnFill":"white"),[r,{[c]:!0,iconColor:c,...o?{baTransparent:!0,[`bg${l}`]:!0,[`hoverBg${l}`]:!0,[`focusBg${l}`]:!0}:{hoverIcon:`${s}Alt`,[`hover${l}`]:!0,[`focus${l}`]:!0,ba:i,[`border${l}`]:i,[`hoverBorder${l}`]:i,[`focusBorder${l}`]:i,baTransparent:!i}}]})),"getIntentsStyles"),qo=At(ih,([e,t])=>[e,sh(e,t)]);K();var ln=Qn(Ro()),Ws=Qn($s());function As(){var e=this.constructor.getDerivedStateFromProps(this.props,this.state);e!=null&&this.setState(e)}n(As,"componentWillMount");function Es(e){function t(r){var o=this.constructor.getDerivedStateFromProps(e,r);return o??null}n(t,"updater"),this.setState(t.bind(this))}n(Es,"componentWillReceiveProps");function Ds(e,t){try{var r=this.props,o=this.state;this.props=e,this.state=t,this.__reactInternalSnapshotFlag=!0,this.__reactInternalSnapshot=this.getSnapshotBeforeUpdate(r,o)}finally{this.props=r,this.state=o}}n(Ds,"componentWillUpdate");As.__suppressDeprecationWarning=!0;Es.__suppressDeprecationWarning=!0;Ds.__suppressDeprecationWarning=!0;function qs(e){var t=e.prototype;if(!t||!t.isReactComponent)throw new Error("Can only polyfill class components");if(typeof e.getDerivedStateFromProps!="function"&&typeof t.getSnapshotBeforeUpdate!="function")return e;var r=null,o=null,i=null;if(typeof t.componentWillMount=="function"?r="componentWillMount":typeof t.UNSAFE_componentWillMount=="function"&&(r="UNSAFE_componentWillMount"),typeof t.componentWillReceiveProps=="function"?o="componentWillReceiveProps":typeof t.UNSAFE_componentWillReceiveProps=="function"&&(o="UNSAFE_componentWillReceiveProps"),typeof t.componentWillUpdate=="function"?i="componentWillUpdate":typeof t.UNSAFE_componentWillUpdate=="function"&&(i="UNSAFE_componentWillUpdate"),r!==null||o!==null||i!==null){var s=e.displayName||e.name,l=typeof e.getDerivedStateFromProps=="function"?"getDerivedStateFromProps()":"getSnapshotBeforeUpdate()";throw Error(`Unsafe legacy lifecycles will not be called for components using new component APIs.

`+s+" uses "+l+" but also contains the following legacy lifecycles:"+(r!==null?`
  `+r:"")+(o!==null?`
  `+o:"")+(i!==null?`
  `+i:"")+`

The above lifecycles should be removed. Learn more about this warning here:
https://fb.me/react-async-component-lifecycle-hooks`)}if(typeof e.getDerivedStateFromProps=="function"&&(t.componentWillMount=As,t.componentWillReceiveProps=Es),typeof t.getSnapshotBeforeUpdate=="function"){if(typeof t.componentDidUpdate!="function")throw new Error("Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype");t.componentWillUpdate=Ds;var c=t.componentDidUpdate;t.componentDidUpdate=n(function(u,m,f){var y=this.__reactInternalSnapshotFlag?this.__reactInternalSnapshot:f;c.call(this,u,m,y)},"componentDidUpdatePolyfill")}return e}n(qs,"polyfill");var Ms=Qn(Ro());var an=n(function(t,r){return t.substr(0,r.length)===r},"startsWith"),Po=n(function(t,r){for(var o=void 0,i=void 0,s=r.split("?"),l=s[0],c=st(l),d=c[0]==="",u=Ah(t),m=0,f=u.length;m<f;m++){var y=!1,h=u[m].route;if(h.default){i={route:h,params:{},uri:r};continue}for(var v=st(h.path),I={},_=Math.max(c.length,v.length),q=0;q<_;q++){var R=v[q],E=c[q];if(js(R)){var L=R.slice(1)||"*";I[L]=c.slice(q).map(decodeURIComponent).join("/");break}if(E===void 0){y=!0;break}var H=jo.exec(R);if(H&&!d){var k=Eh.indexOf(H[1])===-1;k||(0,Ms.default)(!1);var D=decodeURIComponent(E);I[H[1]]=D}else if(R!==E){y=!0;break}}if(!y){o={route:h,params:I,uri:"/"+c.slice(0,q).join("/")};break}}return o||i||null},"pick"),Ts=n(function(t,r){return Po([{path:t}],r)},"match"),Ht=n(function(t,r){if(an(t,"/"))return t;var o=t.split("?"),i=o[0],s=o[1],l=r.split("?"),c=l[0],d=st(i),u=st(c);if(d[0]==="")return on(c,s);if(!an(d[0],".")){var m=u.concat(d).join("/");return on((c==="/"?"":"/")+m,s)}for(var f=u.concat(d),y=[],h=0,v=f.length;h<v;h++){var I=f[h];I===".."?y.pop():I!=="."&&y.push(I)}return on("/"+y.join("/"),s)},"resolve"),Lo=n(function(t,r){var o=t.split("?"),i=o[0],s=o[1],l=s===void 0?"":s,c=st(i),d="/"+c.map(function(h){var v=jo.exec(h);return v?r[v[1]]:h}).join("/"),u=r.location;u=u===void 0?{}:u;var m=u.search,f=m===void 0?"":m,y=f.split("?")[1]||"";return d=on(d,l,y),d},"insertParams"),Ps=n(function(t,r){var o=n(function(c){return Ls(c)},"filter"),i=st(t).filter(o).sort().join("/"),s=st(r).filter(o).sort().join("/");return i===s},"validateRedirect"),jo=/^:(.+)/,Rs=4,Ih=3,kh=2,Sh=1,Ch=1,_h=n(function(t){return t===""},"isRootSegment"),Ls=n(function(t){return jo.test(t)},"isDynamic"),js=n(function(t){return t&&t[0]==="*"},"isSplat"),$h=n(function(t,r){var o=t.default?0:st(t.path).reduce(function(i,s){return i+=Rs,_h(s)?i+=Ch:Ls(s)?i+=kh:js(s)?i-=Rs+Sh:i+=Ih,i},0);return{route:t,score:o,index:r}},"rankRoute"),Ah=n(function(t){return t.map($h).sort(function(r,o){return r.score<o.score?1:r.score>o.score?-1:r.index-o.index})},"rankRoutes"),st=n(function(t){return t.replace(/(^\/+|\/+$)/g,"").split("/")},"segmentize"),on=n(function(t){for(var r=arguments.length,o=Array(r>1?r-1:0),i=1;i<r;i++)o[i-1]=arguments[i];return o=o.filter(function(s){return s&&s.length>0}),t+(o&&o.length>0?"?"+o.join("&"):"")},"addQuery"),Eh=["uri","path"],Ns=n(function(t,r){var o=Object.keys(t);return o.length===Object.keys(r).length&&o.every(function(i){return r.hasOwnProperty(i)&&t[i]===r[i]})},"shallowCompare");var Dh=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},No=n(function(t){var r=t.location,o=r.search,i=r.hash,s=r.href,l=r.origin,c=r.protocol,d=r.host,u=r.hostname,m=r.port,f=t.location.pathname;if(!f&&s&&Bs){var y=new URL(s);f=y.pathname}return{pathname:encodeURI(decodeURI(f)),search:o,hash:i,href:s,origin:l,protocol:c,host:d,hostname:u,port:m,state:t.history.state,key:t.history.state&&t.history.state.key||"initial"}},"getLocation"),Os=n(function(t,r){var o=[],i=No(t),s=!1,l=n(function(){},"resolveTransition");return{get location(){return i},get transitioning(){return s},_onTransitionComplete:n(function(){s=!1,l()},"_onTransitionComplete"),listen:n(function(d){o.push(d);var u=n(function(){i=No(t),d({location:i,action:"POP"})},"popstateListener");return t.addEventListener("popstate",u),function(){t.removeEventListener("popstate",u),o=o.filter(function(m){return m!==d})}},"listen"),navigate:n(function(d){var u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},m=u.state,f=u.replace,y=f===void 0?!1:f;if(typeof d=="number")t.history.go(d);else{m=Dh({},m,{key:Date.now()+""});try{s||y?t.history.replaceState(m,null,d):t.history.pushState(m,null,d)}catch{t.location[y?"replace":"assign"](d)}}i=No(t),s=!0;var h=new Promise(function(v){return l=v});return o.forEach(function(v){return v({location:i,action:"PUSH"})}),h},"navigate")}},"createHistory"),Fs=n(function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"/",r=t.indexOf("?"),o={pathname:r>-1?t.substr(0,r):t,search:r>-1?t.substr(r):""},i=0,s=[o],l=[null];return{get location(){return s[i]},addEventListener:n(function(d,u){},"addEventListener"),removeEventListener:n(function(d,u){},"removeEventListener"),history:{get entries(){return s},get index(){return i},get state(){return l[i]},pushState:n(function(d,u,m){var f=m.split("?"),y=f[0],h=f[1],v=h===void 0?"":h;i++,s.push({pathname:y,search:v.length?"?"+v:v}),l.push(d)},"pushState"),replaceState:n(function(d,u,m){var f=m.split("?"),y=f[0],h=f[1],v=h===void 0?"":h;s[i]={pathname:y,search:v},l[i]=d},"replaceState"),go:n(function(d){var u=i+d;u<0||u>l.length-1||(i=u)},"go")}}},"createMemorySource"),Bs=!!(typeof window<"u"&&window.document&&window.document.createElement),qh=n(function(){return Bs?window:Fs()},"getSource"),Oo=Os(qh()),fr=Oo.navigate;var qe=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e};function lt(e,t){var r={};for(var o in e)t.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(e,o)&&(r[o]=e[o]);return r}n(lt,"_objectWithoutProperties");function cn(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}n(cn,"_classCallCheck");function Vt(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:e}n(Vt,"_possibleConstructorReturn");function dn(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}n(dn,"_inherits");var zo=n(function(t,r){var o=(0,Ws.default)(r);return o.displayName=t,o},"createNamedContext"),Go=zo("Location"),un=n(function(t){var r=t.children;return P.createElement(Go.Consumer,null,function(o){return o?r(o):P.createElement(Us,null,r)})},"Location"),Us=(function(e){dn(t,e);function t(){var r,o,i;cn(this,t);for(var s=arguments.length,l=Array(s),c=0;c<s;c++)l[c]=arguments[c];return i=(r=(o=Vt(this,e.call.apply(e,[this].concat(l))),o),o.state={context:o.getContext(),refs:{unlisten:null}},r),Vt(o,i)}return n(t,"LocationProvider"),t.prototype.getContext=n(function(){var o=this.props.history,i=o.navigate,s=o.location;return{navigate:i,location:s}},"getContext"),t.prototype.componentDidCatch=n(function(o,i){if(Lh(o)){var s=this.props.history.navigate;s(o.uri,{replace:!0})}else throw o},"componentDidCatch"),t.prototype.componentDidUpdate=n(function(o,i){i.context.location!==this.state.context.location&&this.props.history._onTransitionComplete()},"componentDidUpdate"),t.prototype.componentDidMount=n(function(){var o=this,i=this.state.refs,s=this.props.history;s._onTransitionComplete(),i.unlisten=s.listen(function(){Promise.resolve().then(function(){requestAnimationFrame(function(){o.unmounted||o.setState(function(){return{context:o.getContext()}})})})})},"componentDidMount"),t.prototype.componentWillUnmount=n(function(){var o=this.state.refs;this.unmounted=!0,o.unlisten()},"componentWillUnmount"),t.prototype.render=n(function(){var o=this.state.context,i=this.props.children;return P.createElement(Go.Provider,{value:o},typeof i=="function"?i(o):i||null)},"render"),t})(P.Component);Us.defaultProps={history:Oo};var gr=zo("Base",{baseuri:"/",basepath:"/"}),Rh=n(function(t){return P.createElement(gr.Consumer,null,function(r){return P.createElement(un,null,function(o){return P.createElement(zs,qe({},r,o,t))})})},"Router"),zs=(function(e){dn(t,e);function t(){return cn(this,t),Vt(this,e.apply(this,arguments))}return n(t,"RouterImpl"),t.prototype.render=n(function(){var o=this.props,i=o.location,s=o.navigate,l=o.basepath,c=o.primary,d=o.children,u=o.baseuri,m=o.component,f=m===void 0?"div":m,y=lt(o,["location","navigate","basepath","primary","children","baseuri","component"]),h=P.Children.toArray(d).reduce(function(T,X){var V=Oh(l)(X);return T.concat(V)},[]),v=i.pathname,I=Po(h,v);if(I){var _=I.params,q=I.uri,R=I.route,E=I.route.value;l=R.default?l:R.path.replace(/\*$/,"");var L=qe({},_,{uri:q,location:i,navigate:n(function(X,V){return s(Ht(X,q),V)},"navigate")}),H=P.cloneElement(E,L,E.props.children?P.createElement(Rh,{location:i,primary:c},E.props.children):void 0),k=c?Mh:f,D=c?qe({uri:q,location:i,component:f},y):y;return P.createElement(gr.Provider,{value:{baseuri:q,basepath:l}},P.createElement(k,D,H))}else return null},"render"),t})(P.PureComponent);zs.defaultProps={primary:!0};var Gs=zo("Focus"),Mh=n(function(t){var r=t.uri,o=t.location,i=t.component,s=lt(t,["uri","location","component"]);return P.createElement(Gs.Consumer,null,function(l){return P.createElement(Hs,qe({},s,{component:i,requestFocus:l,uri:r,location:o}))})},"FocusHandler"),Fo=!0,Bo=0,Hs=(function(e){dn(t,e);function t(){var r,o,i;cn(this,t);for(var s=arguments.length,l=Array(s),c=0;c<s;c++)l[c]=arguments[c];return i=(r=(o=Vt(this,e.call.apply(e,[this].concat(l))),o),o.state={},o.requestFocus=function(d){!o.state.shouldFocus&&d&&d.focus()},r),Vt(o,i)}return n(t,"FocusHandlerImpl"),t.getDerivedStateFromProps=n(function(o,i){var s=i.uri==null;if(s)return qe({shouldFocus:!0},o);var l=o.uri!==i.uri,c=i.location.pathname!==o.location.pathname&&o.location.pathname===o.uri;return qe({shouldFocus:l||c},o)},"getDerivedStateFromProps"),t.prototype.componentDidMount=n(function(){Bo++,this.focus()},"componentDidMount"),t.prototype.componentWillUnmount=n(function(){Bo--,Bo===0&&(Fo=!0)},"componentWillUnmount"),t.prototype.componentDidUpdate=n(function(o,i){o.location!==this.props.location&&this.state.shouldFocus&&this.focus()},"componentDidUpdate"),t.prototype.focus=n(function(){var o=this.props.requestFocus;o?o(this.node):Fo?Fo=!1:this.node&&(this.node.contains(document.activeElement)||this.node.focus())},"focus"),t.prototype.render=n(function(){var o=this,i=this.props,s=i.children,l=i.style,c=i.requestFocus,d=i.component,u=d===void 0?"div":d,m=i.uri,f=i.location,y=lt(i,["children","style","requestFocus","component","uri","location"]);return P.createElement(u,qe({style:qe({outline:"none"},l),tabIndex:"-1",ref:n(function(v){return o.node=v},"ref")},y),P.createElement(Gs.Provider,{value:this.requestFocus},this.props.children))},"render"),t})(P.Component);qs(Hs);var Th=n(function(){},"k"),Uo=P.forwardRef;typeof Uo>"u"&&(Uo=n(function(t){return t},"forwardRef"));var Ph=Uo(function(e,t){var r=e.innerRef,o=lt(e,["innerRef"]);return P.createElement(gr.Consumer,null,function(i){var s=i.basepath,l=i.baseuri;return P.createElement(un,null,function(c){var d=c.location,u=c.navigate,m=o.to,f=o.state,y=o.replace,h=o.getProps,v=h===void 0?Th:h,I=lt(o,["to","state","replace","getProps"]),_=Ht(m,l),q=encodeURI(_),R=d.pathname===q,E=an(d.pathname,q);return P.createElement("a",qe({ref:t||r,"aria-current":R?"page":void 0},I,v({isCurrent:R,isPartiallyCurrent:E,href:_,location:d}),{href:_,onClick:n(function(H){if(I.onClick&&I.onClick(H),Fh(H)){H.preventDefault();var k=y;if(typeof y!="boolean"&&R){var D=qe({},d.state),T=D.key,X=lt(D,["key"]);k=Ns(qe({},f),X)}u(_,{state:f,replace:k})}},"onClick")}))})})});Ph.displayName="Link";function Vs(e){this.uri=e}n(Vs,"RedirectRequest");var Lh=n(function(t){return t instanceof Vs},"isRedirect"),jh=n(function(t){throw new Vs(t)},"redirectTo"),Nh=(function(e){dn(t,e);function t(){return cn(this,t),Vt(this,e.apply(this,arguments))}return n(t,"RedirectImpl"),t.prototype.componentDidMount=n(function(){var o=this.props,i=o.navigate,s=o.to,l=o.from,c=o.replace,d=c===void 0?!0:c,u=o.state,m=o.noThrow,f=o.baseuri,y=lt(o,["navigate","to","from","replace","state","noThrow","baseuri"]);Promise.resolve().then(function(){var h=Ht(s,f);i(Lo(h,y),{replace:d,state:u})})},"componentDidMount"),t.prototype.render=n(function(){var o=this.props,i=o.navigate,s=o.to,l=o.from,c=o.replace,d=o.state,u=o.noThrow,m=o.baseuri,f=lt(o,["navigate","to","from","replace","state","noThrow","baseuri"]),y=Ht(s,m);return u||jh(Lo(y,f)),null},"render"),t})(P.Component),sn=n(function(t){return P.createElement(gr.Consumer,null,function(r){var o=r.baseuri;return P.createElement(un,null,function(i){return P.createElement(Nh,qe({},i,{baseuri:o},t))})})},"Redirect"),Xs=n(function(t){var r=t.path,o=t.children;return P.createElement(gr.Consumer,null,function(i){var s=i.baseuri;return P.createElement(un,null,function(l){var c=l.navigate,d=l.location,u=Ht(r,s),m=Ts(u,d.pathname);return o({navigate:c,location:d,match:m?qe({},m.params,{uri:m.uri,path:r}):null})})})},"Match"),yw=n(function(){var t=Ai(Go);if(!t)throw new Error("useLocation hook was used but a LocationContext.Provider was not found in the parent tree. Make sure this is used in a component that is a child of Router");return t.location},"useLocation");var Wo=n(function(t){return t.replace(/(^\/+|\/+$)/g,"")},"stripSlashes"),Oh=n(function e(t){return function(r){if(!r)return null;if(r.type===P.Fragment&&r.props.children)return P.Children.map(r.props.children,e(t));if(r.props.path||r.props.default||r.type===sn||(0,ln.default)(!1),r.type===sn&&(!r.props.from||!r.props.to)&&(0,ln.default)(!1),r.type===sn&&!Ps(r.props.from,r.props.to)&&(0,ln.default)(!1),r.props.default)return{value:r,default:!0};var o=r.type===sn?r.props.from:r.props.path,i=o==="/"?t:Wo(t)+"/"+Wo(o);return{value:r,default:r.props.default,path:r.props.children?Wo(i)+"/*":i}}},"createRoute"),Fh=n(function(t){return!t.defaultPrevented&&t.button===0&&!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)},"shouldNavigate");K();var Xt=new URLSearchParams(window.location.search),Vo=new Set,pn=n(e=>e[1]!==null&&e[1]!==void 0,"isEmptyEntry"),mn=n(()=>Object.fromEntries(Xt),"getParams"),Bh=n(e=>(Vo.add(e),()=>Vo.delete(e)),"onParamsChange"),Sw=n(e=>{let[t,r]=C(mn());if(W(()=>Bh(r),[]),!e)return t;let o={...t};for(let[i,s]of Object.entries(e))switch(s){case Array:{o[i]=t[i]?.split(" ")??[];break}case Number:{o[i]=Number(t[i]);break}case Boolean:o[i]=["true","yes","1"].includes(t[i]?.toLowerCase())}return o},"useParams"),hn=n(e=>{Xt=e;let t=Object.fromEntries(e);for(let r of Vo)r(t)},"updateParams");window.addEventListener("popstate",()=>{let{search:e}=document.location;e===`?${Xt}`||hn(new URLSearchParams(e))});var Ho=document.createElement("a"),Xo=n(({path:e,params:t,hash:r,replace:o})=>{try{let i=o?t:{...mn(),...t},s=i?Object.entries(i).filter(pn):{},l=new URLSearchParams(s);if(t)for(let[m,f]of Object.entries(t).filter(pn))l.set(m,Array.isArray(f)?f.map(encodeURIComponent).join(" "):f);let c=String(l),d=c.length?`?${c}`:"",u=r?`#${r}`:"";return Ho.href=`${e||""}${d}${u}`||`${window.location.origin}${window.location.pathname}`,new URL(Ho.href)}catch(i){return console.log(Ho.href),G.error("failed-to-get-url",i),new URL("https://01.gritlab.ax")}},"getUrl"),Ko=n((e,t)=>Qo(Xo({path:e,...t})),"navigate"),Qo=n(e=>{fr(e.href),e.search===`?${Xt}`||hn(e.searchParams)},"navigateURL"),Wh=n((e={})=>{let t=new URLSearchParams(Object.entries(e).filter(pn)),r=String(t);r!==String(Xt)&&(history.replaceState(null,"",r?`?${r}`:location.pathname),hn(t))},"replaceParams"),Yo=n(e=>Wh({...mn(),...e}),"pushParams"),Cw=n(e=>{for(;e;){if(e.event)return{event:e.event.id};e=e.parent}},"getEventParams"),_w=n(e=>{let t=mn();for(let i of e)delete t[i];let r=new URLSearchParams(Object.entries(t).filter(pn)),o=String(r);o!==String(Xt)&&(history.replaceState(null,"",o?`?${o}`:location.pathname),hn(r))},"removeParams");K();var Ks=n(e=>{let t=re[e];return{iconColor:t,hoverIcon:`${t}Alt`,animate:t,[t]:!0,[`hover${je(t)}`]:!0,[`hoverBorder${je(t)}`]:!0}},"getIntentsStyles"),Jo={neutral:Ks("neutral"),highlight:Ks("highlight")};var Zo=w.a(),Uh=w.animate.pointer.fMono.regular.fs7.ls1.neutral.pbMin.bb.hoverNeutral.focusNeutral.noDecoration.a(),zh=n(e=>!e.defaultPrevented&&e.button===0&&!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey),"shouldNavigate"),Qs=n(e=>e.pathname.split("/")[1],"getRoot"),_e=n(({href:e,params:t,hash:r,replace:o=!0,disabled:i,...s})=>{if(i)return a(U,{...s});!e&&!t&&G.warnDev("Link element need either an href or params");let l=Xo({path:e,params:t,hash:r,replace:o}),c=Qs(l)===Qs(window.location),d=l.origin===window.location.origin;if(!c||!d)return a(Zo,{href:l.href,...s});let u=n(m=>{s.onClick&&s.onClick(m),zh(m)&&(m.preventDefault(),Qo(l))},"onClick");return a(Zo,{href:l.href,...s,onClick:u})},"ComboLink"),Gh=n((e,t,r)=>(["primary","underline"].includes(t)||G.warnDev("Invalid link level",{level:t}),e in Jo||(G.warnDev("Invalid link intent",{intent:e}),e="neutral"),r?{iconColor:"grey",animate:"grey",grey:!0}:Jo[e]),"getLinkStyles"),ke=n(({intent:e="highlight",level:t="primary",icon:r,iconPosition:o="left",iconProps:i={},inline:s,...l})=>{let c=l.disabled,{iconColor:d,hoverIcon:u,...m}=Gh(e,t,c),[f,y]=C(!1),h=it(m,([L,H])=>c?!L.startsWith("hover"):H),v=t==="underline",[I,_]=C(v),q=r?a(r,{color:`var(--${f&&u?u:d})`,width:"14px",mr1:o==="left",ml1:o==="right",...i}):null,R=c?{}:{onFocus:n(()=>{y(!0),_(!v)},"onFocus"),onBlur:n(()=>{y(!1),_(v)},"onBlur"),onMouseEnter:n(()=>{y(!0),_(!v)},"onMouseEnter"),onMouseLeave:n(()=>{y(!1),_(v)},"onMouseLeave")},E=l.href||l.params?_e:p;return a(E,{animate:!0,pointer:!0,fMono:!0,regular:!0,fs7:!0,ls1:!0,cursor:c,inlineBlock:s,mh2:s,alignCenter:!s,...R,...l,children:[o==="left"&&q,a(U,{bbTransparent:!I,bb:I,[`border${je(d)}`]:I,...it(h,([L])=>!L.includes("Border")),children:l.children}),o==="right"&&q]})},"Link"),Hh=n(({text:e,href:t,params:r,replace:o,...i})=>a(ke,{mv3:!0,intent:"neutral",href:t,params:r,replace:o,wFitContent:!0,...i,children:a(p,{inlineFlex:!0,children:[a(U,{role:"img","aria-label":"back",mr3:!0,fs2:!e,children:"\u2190"}),a(p,{fMono:!0,regular:!0,fs5:!0,children:e})]})}),"BackLink"),Vh=n(({text:e="See more",children:t,...r})=>a(ke,{icon:Bt,...r,children:t||e}),"ArrowLink"),Xh=n(({href:e,title:t,disabled:r,Icon:o,target:i,...s})=>a(_e,{href:e,title:t,disabled:r,target:i,children:a(o,{ml3:!0,pa2:!0,width:"17",br1:!1,color:"var(--neutral)",ariaLabel:t,...s})}),"LinkIcon");M(ke,{disabled:{default:!1,description:"Display a disabled link."},intent:{default:"highlight",type:g.oneOf(["highlight","neutral"]),description:"Defines the color of the link (Accepted values: highlight, neutral)"},level:{default:"primary",type:g.oneOf(["primary","underline"]),description:"Shows underline from the start or not (Accepted values: primary, underline)"},icon:{description:"Icon to display in the link."},iconPosition:{default:"left",type:g.oneOf(["left","right"]),description:"Position of the icon in the link. (Accepted values: left, right)"}});var Kh=w.button(),Ys=fe({...ur,consume:!0},w.animate.inlineBlock.fMono.regular.fs6.ls1.uppercase.br1.button()),Js=n((e,t,r)=>{let o=qo[t];return o||(G.warnDev("Invalid button level",{level:t}),o=qo.primary),r?o.disabled:(e in o||(G.warnDev("Invalid button intent",{intent:e}),e="neutral"),o[e])},"getButtonStyle"),ee=n(({type:e="button",intent:t="highlight",level:r="primary",icon:o,iconRight:i,disabled:s,loading:l,loadingMessage:c="Loading",children:d,className:u,onClick:m,noPadding:f=!1,...y})=>{let[h,v]=C(!1),_=typeof m!="function"?null:l===void 0?n(async D=>{v(!0);try{await m(D)}catch(T){G.error("button-component-onclick",T)}finally{v(!1)}},"loadingOnClick"):m,{iconColor:q,hoverIcon:R,...E}=Js(t,r,s),[L,H]=C(!1),k=l!==void 0?l:h;return a(Ys,{type:e,pv2:!f,ph3:!f,role:"button",...E,noEvent:s||k,cursor:s||k,disabled:s||k,loading:k,transparent:c==="",onMouseEnter:()=>H(!0),onMouseLeave:()=>H(!1),onClick:_,...y,children:a(p,{justifyCenter:!0,alignCenter:!0,flexRowReverse:i,children:[o&&a(o.type,{width:"18px",mr2:d&&!i,ml2:d&&i,color:`var(--${L&&R?R:q})`,...o.props}),k&&c!==""?c:d]})})},"Button"),Qh=fe({...ur,consume:!0},w.animate.inlineBlock.fMono.alignCenter.flex.regular.fs6.ls1.uppercase.br1.pv2.ph3(_e)),Kt=n(({children:e,intent:t="highlight",level:r="primary",icon:o,iconRight:i,iconWidth:s="18px",...l})=>{let{iconColor:c,hoverIcon:d,...u}=Js(t,r,l.disabled),[m,f]=C(!1);return a(Qh,{onMouseEnter:()=>f(!0),onMouseLeave:()=>f(!1),flexRowReverse:i,...u,...l,children:[o&&a(o.type,{width:s,mr2:e&&!i,ml2:e&&i,color:`var(--${m&&d?d:c})`,...o.props}),e]})},"ButtonLink"),Yh=w.noWrap.absolute.bgNeutral.neutralOnFill.fs7.ph2.pv1.div(),Jh=n(({handleDelete:e,duration:t=1e4,popover:r,popoverStart:o,popoverEnd:i,popoverMessage:s="Click again to delete",popoverDelay:l=5e3,message:c="OK?",styled:d,icon:u,children:m,iconProps:f,...y})=>{let[h,v]=et("",t),[I,_]=C(!1),[q,R]=C(!1),E=xe(),L=xe(null),H=h!=="";return W(()=>{if(!L)return;let k=n(D=>{D.composedPath().includes(L)||(v(""),_(!1))},"handleClickOutside");return document.addEventListener("click",k,!1),()=>{clearTimeout(E.current),document.removeEventListener("click",k,!1)}},[L,v,_]),a(p,{flexColumn:!0,relative:!0,alignCenter:!0,h100p:!0,children:[a(ee,{h100p:!0,disabled:q||y.disabled,intent:"danger",level:!d&&H?"primary":"tertiary",elemref:L.current,onClick:async k=>{try{k.stopPropagation(),clearTimeout(E.current),v(c),_(!1),E.current=setTimeout(_,l,!0),H&&(R(!0),await e().then(()=>R(!1)))}catch{R(!1)}},...y,children:a(p,{noEvent:!0,fs7:!0,light:!0,uppercase:!0,ls1:!0,fMono:!0,children:H?c:a(p,{justifyCenter:!0,alignCenter:!0,children:[u&&a(mo,{noEvent:!0,color:q||y.disabled?"var(--grey)":"var(--red)",mr2:m,...f}),a(p,{noEvent:!0,children:m})]})})}),r&&H&&I&&a(Yh,{selfStart:o,selfEnd:i,style:{top:"100%"},mt2:!0,children:s})]})},"NuclearButton"),Zh=n(({hoverElement:e,...t})=>a(p,{alignCenter:!0,fMono:!0,textMinimal:!0,fs6:!0,children:[a(ee,{intent:"neutral",level:"tertiary",className:ur.hoverToggleBtn,order2:!0,...t}),a(p,{order1:!0,hidden_s:!0,animate:!0,className:ur.hoverToggleElement,mh4:!0,children:e})]}),"ToggleButton"),ef=n(({text:e,onClick:t,onSuccessFeedback:r,logError:o,intent:i="neutral",level:s="primary",loading:l,loadingMessage:c,...d})=>{let[u,m]=et("",3e3);return u?a(p,{justifyEnd:!0,pv2:!0,pl2:!0,children:u}):a(ee,{loading:l,loadingMessage:c,intent:i,level:s,onClick:async f=>{f.preventDefault();try{await t?.(),m(a(U,{teal:!0,children:"Succeed!"})),await r?.()}catch(y){G.error(o||"message-button",y),m(a(U,{red:!0,children:y.message||"Failed."}))}},...d,children:e||"Ok"})},"MessageButton");M(ee,{disabled:{default:!1,description:"Display a disabled button."},intent:{default:"highlight",type:g.oneOf(["highlight","neutral","danger","success"]),description:"Defines the color of the button (Accepted values: highlight, neutral, danger, success)"},level:{default:"primary",type:g.oneOf(["primary","secondary","tertiary"]),description:"Changes the style of the button (Accepted values: primary, secondary, tertiary)."},icon:{description:"Icon to display in the button."}});var Zs=w.inlineBlock.fMono.regular.fs7.uppercase.ls1.pointer.mr5.button(),fn=n(({active:e,disabled:t,...r})=>a(Zs,{white:e,regular:e,inactive:t,disabled:t,focusPurple:!0,...r}),"Action");var ea=w(e=>a("h1",{...e})),ta=w(e=>a("h2",{...e})),tf=w(e=>a("h3",{...e})),rf=w(e=>a("h4",{...e})),nf=w(e=>a("h5",{...e})),of=w(e=>a("h6",{...e})),el=w.p(),ct=n((e,t)=>r=>{let o=`${e.displayName} will be deprecated. Use the component most suitable based on figma mockups of this page or on the docs texts descriptions. Commonly replaced by ${t}`,i=`deprecated-${e.displayName}`;return G.warnDev(i,{message:o,doc:"https://01.gritlab.ax/docs/components/textstandards"}),a(e,{...r})},"deprecated"),tl=w.hyphens.fMono.light.fs1.mb6.fs2_s.mb5_s.div();tl.displayName="MainTitle";var af=ct(tl,"Title"),rl=w.hyphens.textMinimal.fs3.light.mb4.fs4_s.div();rl.displayName="Subtitle";var dt=ct(rl,"ModalTitle(size=small)"),sf=dt,nl=w.hyphens.fMono.regular.fs7.ls1.lh3.div();nl.displayName="Header";var lf=ct(nl,"Section(size=medium)"),ol=w.hyphens.fMono.regular.fs7.ls1.lh3.div();ol.displayName="InfoText";var cf=ct(ol,"Text(size=small)"),al=w.fs4.fSans.pb2.bb.mb4.textNeutral.light.div();al.displayName="SectionTitle";var df=ct(al,"Section(size=medium) or Section(size=small)"),il=w.textMinimal.fMono.regular.fs7.ls1.lh3.bb.pb1.mb6.div();il.displayName="UnderlinedHeader";var uf=ct(il,"Label(size=large)"),sl=w.fMono.bgBlack.textNeutral.fs6.light.ph1.pbMin.span();sl.displayName="MonoSpan";var pf=ct(sl,"Label(size=medium)"),ll=n(({success:e,fail:t,...r})=>a(p,{alignCenter:!0,fs7:!0,green:e,red:t,ml1:!0,mr1:!0,light:!0,...r}),"FeedbackComp");ll.displayName="Feedback";var mf=ct(ll,"Text(size=small)"),gn={title:{elem:ea,style:{fMono:!0,light:!0,neutral:!0},large:{fs1:!0,fs2_s:!0},medium:{fs2:!0},small:{fs3:!0}},modalTitle:{elem:ea,style:{fMono:!0,light:!0,neutral:!0},small:{fs3:!0},medium:{fs2:!0}},section:{style:{fMono:!0,ls3:!0,inlineBlock:!0,neutral:!0},small:{fs5:!0,regular:!0},medium:{fs4:!0,light:!0}},text:{elem:el,style:{fSans:!0,regular:!0,lhDouble:!0,neutral:!0},small:{fs7:!0,ls2:!0},medium:{fs6:!0,ls3:!0},large:{fs5:!0,ls3:!0}},label:{style:{fMono:!0,ls1:!0,neutral:!0},small:{fs7:!0,medium:!0},medium:{fs6:!0,regular:!0},large:{fs5:!0,regular:!0}}},br=n(e=>({size:t,children:r,...o})=>{let i=e==="title"?"large":"medium",s=t??i,l=gn[e].elem||U;gn[e][s]||(G.warnDev("Invalid size for this text component",{size:s}),s=i);let c={...gn[e].style,...gn[e][s],...o};return a(l,{...c,children:r})},"textComponent"),ra=br("title"),Et=br("modalTitle"),ut=br("section"),ne=br("text"),me=br("label"),hf=n(({emoji:e,label:t="emoji",children:r,...o})=>a(U,{role:"img","aria-label":t,...o,children:e??r}),"Emoji");K();var cl="a1bf1c07b72de2e639ac5b8d4f875d3505b1a2b83eac697e1b025536f292dd6d",ff=`/* INPUTS */

.inputWrapper-01:hover:has(input:not(:disabled)) .labelInput-01,
.inputWrapper-01:focus-within:has(input:not(:disabled)) .labelInput-01,
.inputWrapper-01:hover:has(textarea:not(:disabled)) .labelInput-01,
.inputWrapper-01:focus-within:has(textarea:not(:disabled)) .labelInput-01 {
  font-weight: bold;
}
.radioWrapper-01:hover:has(input:not(:disabled)) .radioLabel-01,
.radioWrapper-01:focus-within:has(input:not(:disabled)) .radioLabel-01 {
  font-weight: bold;
}

input::placeholder,
textarea::placeholder {
  color: var(--textNeutralAlt);
}

input:focus,
input:not(:placeholder-shown),
textarea:focus,
textarea:not(:placeholder-shown) {
  color: var(--textNeutral);
}

input:disabled,
textarea:disabled {
  color: var(--detailMinimal);
}

input:disabled::placeholder,
textarea:disabled::placeholder {
  color: var(--detailMinimal);
}

input[type="datetime-local"]::-webkit-calendar-picker-indicator {
  filter: invert(1);
  opacity: 0.7;
  width: 16px;
  height: 16px;
}

/* SWITCH COMPONENT */

.switchContainer-01 {
  display: inline-flex;
  align-items: center;
}

.switchInput-01:not(:disabled) {
  cursor: pointer;
}

.switchInput-01:disabled + .switch-01 > .switchCursor-01,
.switchInput-01:disabled + .switch-01 {
  cursor: default;
  background-color: var(--detailMinimal);
}
.switchInput-01 + .switch-01 {
  border-radius: 1000px;
  cursor: pointer;
  border: solid 1px transparent;
  transition: background-color 0.2s;
  width: 36px;
  height: 2px;
  background-color: var(--detailNeutralAlt);
}

.switchInput-01 + .switch-01 > .switchCursor-01 {
  border-radius: inherit;
  pointer-events: none;
  transition-timing-function: cubic-bezier(0.5, 0, 0, 0.5);
  transition-duration: 0.2s;
  transition-property: transform background-color;
  cursor: pointer;
  width: 14px;
  height: 14px;
  margin-left: -2px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.95);
  background: var(--detailNeutralAlt);
}

.switchInput-01:hover:not(:disabled) + .switch-01,
.switchInput-01:hover:not(:disabled) + .switch-01 > .switchCursor-01,
.switchInput-01:focus:not(:disabled) + .switch-01,
.switchInput-01:focus:not(:disabled) + .switch-01 > .switchCursor-01 {
  background: var(--detailNeutral);
}

.switchInput-01:checked + .switch-01 {
  background-color: var(--tealFill);
}

.switchInput-01:checked:hover + .switch-01 > .switchCursor-01,
.switchInput-01:checked:hover + .switch-01 {
  background-color: var(--tealFillAlt);
}

.switchInput-01:checked + .switch-01 > .switchCursor-01 {
  transform: translateX(26px);
  background: var(--tealFill);
}

/* CHECKBOX COMPONENT */

.checkInput-01 {
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  width: 24px;
  height: 24px;
  border: solid 1px var(--detailNeutralAlt);
  transition: border 0.15s ease-in-out;
}
.checkInput-01:disabled {
  border: solid 1px var(--detailMinimal);
}

.checkInput-01:hover:not(:disabled):not(:checked),
.checkInput-01:focus:not(:disabled):not(:checked) {
  border: solid 1px var(--detailNeutral);
}

.checkInput-01:hover:checked,
.checkInput-01:focus:checked {
  border: solid 1px var(--tealFillAlt);
}

.checkInput-01:checked {
  border: solid 1px var(--tealFill);
  transition: border 0.15s ease-in-out;
}

.checkedDot-01 {
  background-color: none;
  transition: background-color 0.15s ease-in-out;
  width: 7.5px;
  height: 7.5px;
}

.checkInput-01:checked:hover + .checkedDot-01 {
  background-color: var(--tealFillAlt);
}

.checkInput-01:checked + .checkedDot-01 {
  background-color: var(--tealFill);
  transition: background-color 0.15s ease-in-out;
}

/* RANGE SLIDER */
.rangeSlider-01 {
  -webkit-appearance: none;
  width: 158px;
  height: 4px;
  background: var(--detailNeutral);
  border-radius: 5px;
  background-image: linear-gradient(var(--sliderColor), var(--sliderColor));
  background-size: 0% 100%;
  background-repeat: no-repeat;
  accent-color: var(--sliderColor);
  margin-top: auto;
  margin-bottom: auto;
  cursor: ew-resize;
}

.rangeSlider-01:disabled {
  cursor: default;
  background-image: linear-gradient(var(--detailMinimal), var(--detailMinimal));
  accent-color: var(--detailMinimal);
}

.rangeSlider-01:not(:disabled):active {
  background-image: linear-gradient(var(--sliderFill), var(--sliderFill));
  accent-color: var(--sliderFill);
}

.rangeSlider-01:not(:disabled):hover::-webkit-slider-thumb {
  box-shadow: 0 0 10px 5px var(--sliderColor);
}

.rangeSlider-01:not(:disabled):active::-webkit-slider-thumb {
  background: var(--sliderFill);
  box-shadow: 0 0 10px 5px var(--sliderFill);
}

.rangeSlider-01::-webkit-slider-thumb {
  -webkit-appearance: none;
  height: 7px;
  width: 7px;
  border-radius: 50%;
  background: var(--sliderColor);
  border: solid 1px transparent;
  cursor: ew-resize;
  box-shadow: 0 0 8px 3px var(--sliderColor);
}
.rangeSlider-01:disabled::-webkit-slider-thumb {
  cursor: default;
  background: var(--detailMinimal);
  box-shadow: 0 0 10px 5px var(--detailMinimal);
}

.rangeSlider-01::-moz-range-thumb {
  -webkit-appearance: none;
  height: 7px;
  width: 7px;
  border-radius: 50%;
  background: var(--sliderColor);
  border: solid 1px transparent;
  cursor: ew-resize;
  box-shadow: 0 0 8px 3px var(--sliderColor);
}

.rangeSlider-01:disabled::-moz-range-thumb {
  cursor: default;
  background: var(--detailMinimal);
  box-shadow: 0 0 10px 5px var(--detailMinimal);
}

.rangeSlider-01:not(:disabled):hover::-moz-range-thumb {
  box-shadow: 0 0 10px 5px var(--sliderColor);
}
.rangeSlider-01:not(:disabled):active::-moz-range-thumb {
  box-shadow: 0 0 10px 5px var(--sliderFill);
}

/* SELECT COMPONENT */

.focus-01:focus,
.focus-01:focus-within {
  background-color: var(--bgLevel4);
}

.hiddenSelect-01 {
  border: none;
  -webkit-appearance: none;
  background: none;
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -1;
}

.focusOption-01:focus,
.focusOption-01:focus-within {
  background: var(--black);
}

.ribbonToInput-01 {
  width: 125px;
}
.ribbonToInput-01::placeholder {
  color: var(--textNeutral) !important;
}

.whitePlaceholder-01::placeholder {
  color: var(--textNeutral);
  opacity: 1;
}
`;(function(){if(!(typeof document>"u")&&!document.getElementById(cl)){var e=document.createElement("style");e.id=cl,e.textContent=ff,document.head.appendChild(e)}})();var ie={inputWrapper:"inputWrapper-01",labelInput:"labelInput-01",radioWrapper:"radioWrapper-01",radioLabel:"radioLabel-01",switchContainer:"switchContainer-01",switchInput:"switchInput-01",switch:"switch-01",switchCursor:"switchCursor-01",checkInput:"checkInput-01",checkedDot:"checkedDot-01",rangeSlider:"rangeSlider-01",focus:"focus-01",hiddenSelect:"hiddenSelect-01",focusOption:"focusOption-01",ribbonToInput:"ribbonToInput-01",whitePlaceholder:"whitePlaceholder-01"};var dl={textNeutral:!0,borderDetailNeutral:!0,bgNone:!0,lh3:!0,ol0:!0,animate:!0},gf={hoverBgLevel4:!0,focusBgLevel4:!0,focusTextNeutral:!0,focusBorderDetailNeutral:!0},bf=n(e=>({...dl,...!e&&gf,disabled:e}),"getInputStyle"),bn=n(e=>({disabled:t,...r})=>a(e,{...bf(t),...r}),"withInputStyle"),yf=w.w100p.ph3.ba0.bbTransparent.pv2.fs1.fs2_s.mb5.mr3.ellipsis.fMono.input(),vf=w.w100p.textNeutralAlt.ph3.fs5.pv2.ba0.bb.input(),xf=w.w100p.neutral.ph3.fs5.pv2.ba.borderBox.textarea(),wf=w.relative.minW15px.div(),If=w.flex.bb.relative.minW15px.div(),na=bn(vf),oa=bn(xf),kf=bn(yf),aa=bn(wf),ia=n(({disabled:e,...t})=>a(If,{...dl,borderDetailMinimal:!1,hoverBgLevel4:!e,hoverBorderDetailNeutral:!e,bgNone:!1,...t}),"SearchBarWrapper");K();var ul="541ebc401d1b0caa4bd659e721f831219188e8f32482be23032f1c78ce383c50",Sf=`/* INPUTS */

.inputWrapper-01:hover:has(input:not(:disabled)) .labelInput-01,
.inputWrapper-01:focus-within:has(input:not(:disabled)) .labelInput-01,
.inputWrapper-01:hover:has(textarea:not(:disabled)) .labelInput-01,
.inputWrapper-01:focus-within:has(textarea:not(:disabled)) .labelInput-01 {
  font-weight: bold;
}
.radioWrapper-01:hover:has(input:not(:disabled)) .radioLabel-01,
.radioWrapper-01:focus-within:has(input:not(:disabled)) .radioLabel-01 {
  font-weight: bold;
}

input::placeholder,
textarea::placeholder {
  color: var(--textNeutralAlt);
}

input:focus,
input:not(:placeholder-shown),
textarea:focus,
textarea:not(:placeholder-shown) {
  color: var(--textNeutral);
}

input:disabled,
textarea:disabled {
  color: var(--detailMinimal);
}

input:disabled::placeholder,
textarea:disabled::placeholder {
  color: var(--detailMinimal);
}

input[type="datetime-local"]::-webkit-calendar-picker-indicator {
  filter: invert(1);
  opacity: 0.7;
  width: 16px;
  height: 16px;
}

/* SWITCH COMPONENT */

.switchContainer-01 {
  display: inline-flex;
  align-items: center;
}

.switchInput-01:not(:disabled) {
  cursor: pointer;
}

.switchInput-01:disabled + .switch-01 > .switchCursor-01,
.switchInput-01:disabled + .switch-01 {
  cursor: default;
  background-color: var(--detailMinimal);
}
.switchInput-01 + .switch-01 {
  border-radius: 1000px;
  cursor: pointer;
  border: solid 1px transparent;
  transition: background-color 0.2s;
  width: 36px;
  height: 2px;
  background-color: var(--detailNeutralAlt);
}

.switchInput-01 + .switch-01 > .switchCursor-01 {
  border-radius: inherit;
  pointer-events: none;
  transition-timing-function: cubic-bezier(0.5, 0, 0, 0.5);
  transition-duration: 0.2s;
  transition-property: transform background-color;
  cursor: pointer;
  width: 14px;
  height: 14px;
  margin-left: -2px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.95);
  background: var(--detailNeutralAlt);
}

.switchInput-01:hover:not(:disabled) + .switch-01,
.switchInput-01:hover:not(:disabled) + .switch-01 > .switchCursor-01,
.switchInput-01:focus:not(:disabled) + .switch-01,
.switchInput-01:focus:not(:disabled) + .switch-01 > .switchCursor-01 {
  background: var(--detailNeutral);
}

.switchInput-01:checked + .switch-01 {
  background-color: var(--tealFill);
}

.switchInput-01:checked:hover + .switch-01 > .switchCursor-01,
.switchInput-01:checked:hover + .switch-01 {
  background-color: var(--tealFillAlt);
}

.switchInput-01:checked + .switch-01 > .switchCursor-01 {
  transform: translateX(26px);
  background: var(--tealFill);
}

/* CHECKBOX COMPONENT */

.checkInput-01 {
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  width: 24px;
  height: 24px;
  border: solid 1px var(--detailNeutralAlt);
  transition: border 0.15s ease-in-out;
}
.checkInput-01:disabled {
  border: solid 1px var(--detailMinimal);
}

.checkInput-01:hover:not(:disabled):not(:checked),
.checkInput-01:focus:not(:disabled):not(:checked) {
  border: solid 1px var(--detailNeutral);
}

.checkInput-01:hover:checked,
.checkInput-01:focus:checked {
  border: solid 1px var(--tealFillAlt);
}

.checkInput-01:checked {
  border: solid 1px var(--tealFill);
  transition: border 0.15s ease-in-out;
}

.checkedDot-01 {
  background-color: none;
  transition: background-color 0.15s ease-in-out;
  width: 7.5px;
  height: 7.5px;
}

.checkInput-01:checked:hover + .checkedDot-01 {
  background-color: var(--tealFillAlt);
}

.checkInput-01:checked + .checkedDot-01 {
  background-color: var(--tealFill);
  transition: background-color 0.15s ease-in-out;
}

/* RANGE SLIDER */
.rangeSlider-01 {
  -webkit-appearance: none;
  width: 158px;
  height: 4px;
  background: var(--detailNeutral);
  border-radius: 5px;
  background-image: linear-gradient(var(--sliderColor), var(--sliderColor));
  background-size: 0% 100%;
  background-repeat: no-repeat;
  accent-color: var(--sliderColor);
  margin-top: auto;
  margin-bottom: auto;
  cursor: ew-resize;
}

.rangeSlider-01:disabled {
  cursor: default;
  background-image: linear-gradient(var(--detailMinimal), var(--detailMinimal));
  accent-color: var(--detailMinimal);
}

.rangeSlider-01:not(:disabled):active {
  background-image: linear-gradient(var(--sliderFill), var(--sliderFill));
  accent-color: var(--sliderFill);
}

.rangeSlider-01:not(:disabled):hover::-webkit-slider-thumb {
  box-shadow: 0 0 10px 5px var(--sliderColor);
}

.rangeSlider-01:not(:disabled):active::-webkit-slider-thumb {
  background: var(--sliderFill);
  box-shadow: 0 0 10px 5px var(--sliderFill);
}

.rangeSlider-01::-webkit-slider-thumb {
  -webkit-appearance: none;
  height: 7px;
  width: 7px;
  border-radius: 50%;
  background: var(--sliderColor);
  border: solid 1px transparent;
  cursor: ew-resize;
  box-shadow: 0 0 8px 3px var(--sliderColor);
}
.rangeSlider-01:disabled::-webkit-slider-thumb {
  cursor: default;
  background: var(--detailMinimal);
  box-shadow: 0 0 10px 5px var(--detailMinimal);
}

.rangeSlider-01::-moz-range-thumb {
  -webkit-appearance: none;
  height: 7px;
  width: 7px;
  border-radius: 50%;
  background: var(--sliderColor);
  border: solid 1px transparent;
  cursor: ew-resize;
  box-shadow: 0 0 8px 3px var(--sliderColor);
}

.rangeSlider-01:disabled::-moz-range-thumb {
  cursor: default;
  background: var(--detailMinimal);
  box-shadow: 0 0 10px 5px var(--detailMinimal);
}

.rangeSlider-01:not(:disabled):hover::-moz-range-thumb {
  box-shadow: 0 0 10px 5px var(--sliderColor);
}
.rangeSlider-01:not(:disabled):active::-moz-range-thumb {
  box-shadow: 0 0 10px 5px var(--sliderFill);
}

/* SELECT COMPONENT */

.focus-01:focus,
.focus-01:focus-within {
  background-color: var(--bgLevel4);
}

.hiddenSelect-01 {
  border: none;
  -webkit-appearance: none;
  background: none;
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -1;
}

.focusOption-01:focus,
.focusOption-01:focus-within {
  background: var(--black);
}

.ribbonToInput-01 {
  width: 125px;
}
.ribbonToInput-01::placeholder {
  color: var(--textNeutral) !important;
}

.whitePlaceholder-01::placeholder {
  color: var(--textNeutral);
  opacity: 1;
}
`;(function(){if(!(typeof document>"u")&&!document.getElementById(ul)){var e=document.createElement("style");e.id=ul,e.textContent=Sf,document.head.appendChild(e)}})();var sa={inputWrapper:"inputWrapper-01",labelInput:"labelInput-01",radioWrapper:"radioWrapper-01",radioLabel:"radioLabel-01",switchContainer:"switchContainer-01",switchInput:"switchInput-01",switch:"switch-01",switchCursor:"switchCursor-01",checkInput:"checkInput-01",checkedDot:"checkedDot-01",rangeSlider:"rangeSlider-01",focus:"focus-01",hiddenSelect:"hiddenSelect-01",focusOption:"focusOption-01",ribbonToInput:"ribbonToInput-01",whitePlaceholder:"whitePlaceholder-01"};var yn=w.fs5.fSans.lh2.ls1.regular.textNeutral.ol0.ba0.w100p.ph3.pv2.light.bgNone.input(),Cf=w.neutralAlt.fs7.fMono.lh3.ls1.textNeutral.ol0.ba0.ph3.pv2.regular.uppercase.bgNone.input(),_f=n(({border:e=!0,inputProps:t,elemRef:r,onSearch:o,...i})=>a(p,{alignCenter:!0,w100p:!0,...i,children:a(p,{alignCenter:!0,inactive:t.disabled||i.disabled,bb:e,children:[a(Ut,{"data-test":"search-button",width:"13px",color:"var(--neutral)",onClick:o,pl3:!0}),a(Cf,{className:sa.ribbonToInput,...t,...r&&{elemRef:r},onKeyDown:s=>s.keyCode===13&&o()})]})}),"SearchBarRibbon"),yr=n(({border:e=!0,label:t,block:r,required:o,inputProps:{onFocus:i,onBlur:s,...l},elemRef:c,onSearch:d=n(()=>{},"onSearch"),value:u,...m})=>{let[f,y]=C(!1),h=l.disabled||m.disabled;return a(vn,{label:t,block:r,required:o,disabled:h,w100p:m.w100p,Input:a(ia,{className:sa.whitePlaceholder,alignCenter:!0,w100p:!0,disabled:h,bb:e,bgLevel4:!h&&f,cursor:h,borderDetailMinimal:h||!f,borderDetailNeutral:!h&&f,...m,children:[a(yn,{w100p:!0,...l,...c&&{elemRef:c},detailMinimal:h,onKeyDown:v=>v.keyCode===13&&d(),onFocus:()=>{y(!0),i?.()},onBlur:()=>{y(!1),s?.()}}),a(ee,{pr1:!0,noPadding:!0,width:"13",intent:"neutral",level:"tertiary","data-test":"search-button",disabled:h,onClick:d,icon:a(Ut,{})})]})})},"SearchBar");M(yr,{label:{type:g.string,description:"Displays a label."},block:{type:g.boolean,description:"Controls where the label appears. If true, the label will be displayed on top of the input."},inputProps:{description:"Pass props to the Text input"},props:{description:"Pass props to the Search Bar container."}});var $f=w.ph5.pv3.textMinimal.pointer.hoverBgBlack.animateColor.fMono.fs6.bgLevel3.shadowInset.div();var Af=w.form(),la=w.label(),hl=w.fMono.fs6.regular.noWrap.flex.alignCenter.label(),Dt=n(()=>a(U,{red:!0,ml1:!0,children:"*"}),"Required"),fl=n(({Input:e,label:t,centered:r,disabled:o,block:i,children:s,format:l,unsaved:c,w100p:d,...u})=>{let m=e.name==="TextAreaStyle",f=a(e,{className:`${ie.input} ${o?ie.disableInput:""}`,disabled:o,type:"text",detailMinimal:o,borderDetailMinimal:o,autoColorScheme:u.type==="date"||"datetime-local",...u}),y=a(p,{justifyStart:!r,justifyCenter:r,w100p:d,children:[l?a(p,{w100p:!0,children:[f,a(p,{mt1:!0,textNeutral:!0,fs7:!0,block:!0,children:l})]}):f,s,!t&&u.required&&a(Dt,{}),!t&&u.unsaved&&a(cr,{color:"var(--orange)",width:"18px",ariaLabel:"unsaved-data"})]});return a(p,{alignStart:m&&!i,justifyCenter:r,className:ie.inputWrapper,textNeutralAlt:!0,flex:!i,w100p:d,children:t?a(oe,{children:[a(me,{pv1:!m&&!i,pv2:m&&!i,mr2:!i,mv1:i,block:i,className:ie.labelInput,detailMinimal:o,justifyStart:!0,children:[t,u.required&&a(Dt,{}),c&&a(cr,{ml3:!0,color:"var(--orange)",width:"18px",ariaLabel:"unsaved-data"})]}),y]}):y})},"SharedTextInput"),vn=n(({Input:e,label:t,block:r,disabled:o,required:i,w100p:s})=>{let l=i?a(p,{justifyStart:!0,w100p:!0,children:[e,!t&&a(Dt,{})]}):e;return a(p,{className:ie.inputWrapper,alignCenter:!r,flex:!r,w100p:s,children:t?a(oe,{children:[a(me,{detailMinimal:o,pv1:!r,pv2:!r,mr5:!r,mb2:r,block:r,className:ie.labelInput,children:[t,i&&a(Dt,{})]}),l]}):l})},"SharedSearchInput"),Re=n(({...e})=>a(fl,{Input:na,...e}),"TextInput");M(Re,{label:{type:g.string,description:"Displays a label."},block:{type:g.boolean,description:"Controls where the label appears. If true, the label will be displayed on top of the input."},disabled:{default:!1,description:"Display a disabled text input."},format:{type:g.oneOfType([g.string,g.boolean]),description:"Displays an helper text below the input."}});var xr=n(({...e})=>a(fl,{Input:oa,...e}),"TextArea");M(xr,{label:{type:g.string,description:"Displays a label."},block:{type:g.boolean,description:"Controls where the label appears. If true, the label will be displayed on top of the input."},disabled:{default:!1,description:"Display a disabled text input."},format:{type:g.oneOfType([g.string,g.boolean]),description:"Displays an helper text below the input."}});var pl=fe({...ie,consume:!0},w.block.textLeft.bgLevel3.ellipsis.fSans.shadowInset.fs5.light.ls1.ph5.pv3.w100p.animate.button()),Ef=w.w100p.textLeft.fMono.fs7.pv2.ph3.ls1.button(),vr=n(e=>String(e).toLowerCase().split(" ").join(""),"format"),Df=n(e=>a(p,{children:e},e),"defaultRender"),xn=n((e,t,r)=>{t=vr(t);let o=n(i=>vr(i||"").includes(t),"matchPattern");return r?e.map(i=>({...i,matched:t&&(o(i.label)||o(i.category))})).sort((i,s)=>i.matched&&s.matched?vr(s.label).indexOf(t)-vr(i.label).indexOf(t):s.matched-i.matched):e.filter(i=>o(i.label)||o(i.category))},"defaultFilter"),qf=n((e,t)=>{let r=new Map(e.map(s=>[s.key||s.data||s.label,s])),o=0,i=r.get(t);for(;i?.category;)o++,i=r.get(i.category);return o},"getIndentationPadding"),Rf=[{bgLevel5:!0},{bgLevel4:!0}],pt=n(({items:e,label:t,block:r,emptyItem:o={data:{},label:"Choose..."},clearable:i=!1,onClear:s,minimalist:l,disabled:c,formName:d,searchable:u,sortable:m,selected:f,required:y,filter:h=xn,itemRender:v=Df,onChange:I,clearAfterSelect:_,value:q,itemsRelatives:R=!0,...E})=>{let L=Re.use(q||""),[H,k]=C(),D=L.value===o.label?"":L.value,T=e.filter(({key:J,isCategory:Le},Ft,Ge)=>!Le||Ge.some(ki=>ki.category===J)),X=h(T,D,m),V=u?X:T,[Q,j]=C(!1),Y=(f?T.find(J=>J.label===f):T.find(J=>J.selected))||o,[te,Ce]=C(Y),[be,Te]=C(),[ae,se]=C();if(W(()=>{f&&Ce(T.find(J=>J.data===f||J.label===f)||o)},[f]),W(()=>{if(!ae||!Q)return;let J=n(Le=>{ae.contains(Le.target)||j(!1)},"handleClickOutside");return document.addEventListener("click",J,!1),()=>{document.removeEventListener("click",J,!1)}},[ae,Q]),!te)return"loading";let ze=n(J=>{if(!be)return;let Le=[...be.children].indexOf(document.activeElement),Ft=be.children.length;if(J.keyCode===27&&(j(!1),be.previousElementSibling.children[0].focus()),i&&J.keyCode===8&&(Ce(o),s?.()),J.keyCode===40){if(J.preventDefault(),Le===-1){j(!0),be.children[0].focus();return}be.children[(Le+1)%Ft].focus()}if(J.keyCode===38){if(J.preventDefault(),Le===-1){j(!0),be.children[Ft-1].focus();return}let Ge=Le-1;be.children[Ge<0?Ft-1:Ge].focus()}},"handleKey"),Pe=n(()=>{c||(H===document.activeElement?j(!0):j(!Q))},"openMenu"),Ie=Q?It:wt,Ee=te.label!==o.label,he=i&&Ee,vt={...L.props,value:D},pe=n(()=>{Ce(o),I?.(o),j(!1),L.setValue(o.label),i&&s?.()},"selectEmpty");return a(vn,{label:t,block:r,required:y,disabled:c,w100p:E.w100p,Input:a(aa,{bb:l,borderDetailMinimal:c,ba:!l,onKeyDown:ze,disabled:c,className:`${E.className||""} ${c?"":ie.focus}`,elemRef:se,...E,children:[a(p,{justifyBetween:!0,alignCenter:!0,children:[u?a(oe,{children:[a(yn,{h8px:!0,onClick:Pe,elemRef:k,placeholder:te.label,value:te.value,disabled:c,className:Ee&&ie.whitePlaceholder,autoComplete:`fu-${Math.random().toString(36).slice(2)}`,...vt}),!he&&a(Ut,{"data-test":"search-button",pr1:!0,width:"13px",color:c?"var(--detailMinimal)":"var(--neutral)"})]}):a(Ef,{onClick:Pe,disabled:c,type:"button",children:te.label}),he&&a(He,{onClick:pe,pointer:!0,width:"15",color:"var(--red)"}),a(Ie,{width:"13px",color:c?"var(--detailMinimal)":"var(--neutral)",pl1:!0,pr3:!0,onClick:Pe})]}),a(p,{absolute:!0,bgLevel3:!0,zi5:!0,w100p:R,maxH7:!0,scrollY:!0,hidden:!Q,elemRef:Te,children:[V.map(({key:J,matched:Le,isCategory:Ft,disabled:Ge,category:ki,icon:Kn,...Ze},Zd)=>{let Si=qf(V,J||Ze.data||Ze.label),eu=`${25+Si*20}px`;return a(pl,{bgLevel4:Ft&&Ge,hoverBgLevel4:!Ge,cursor:Ge,purple:Le,focusOption:!0,type:"button","data-test":Ze.label,onClick:Ci=>{if(Ci.stopPropagation(),Ce({...Ze,elem:Ci.target}),L.setValue(Ze.label),I?.(Ze),be.previousElementSibling.children[0].focus(),j(!Q),_)return pe()},alignCenter:!!Kn,disabled:Ge,style:{paddingLeft:eu},...Ge&&Rf[Si],...Ze,children:[Kn&&a(Kn,{mr2:!0,width:"20"}),Ze.label]},`${Ze.label}-${Zd}`)}),u&&V.length===0&&a(pl,{children:"No result found"})]})]})})},"Select"),gl={default:[],type:g.arrayOf(g.shape({label:g.string,data:g.any,disabled:g.boolean,selected:g.boolean,dateInput:Re})).isRequired,description:a("span",{children:"An object of objects, the key is used for the option value, the value is used as the option props, using the label as the option text."})};M(pt,{items:gl,emptyItem:{type:g.object,description:"To set an empty value and a placeholder in the input."},clearable:{type:g.boolean,description:"The selection can be cleared and reinitialized."},minimalist:{type:g.boolean,description:"Give a minimalist style to your search bar."},disabled:{type:g.boolean,description:"The whole select will be disabled."},searchable:{type:g.boolean,description:"Enable to filter items with a searchbar."},filter:{description:"Pass a function to filter your list."},itemRender:{description:"Pass a function to generate your listed components."},props:{description:"Pass props to the Select container."}});var Mf=w.alignCenter.flex.fSans.fs6.regular.textNeutral.noWrap.label(),ca=n(({id:e,data:t,value:r,name:o,disabled:i,onChange:s,...l})=>a(wn,{Input:a(p,{relative:!0,alignCenter:!0,justifyCenter:!0,"data-test":"option",children:[a(da,{id:e,"data-test":t,type:"radio",name:o,checkInput:!0,br50p:!0,pointer:!i,disabled:i,checked:r===t,value:t,onChange:s}),a(bl,{br50p:!0,noEvent:!0,checkedDot:!0})]}),disabled:i,...l}),"RadioButton"),Tf=n(e=>{let{inlineBlock:t,current:r,value:o,onChange:i,off:s,...l}=e,{label:c,data:d,dateInput:u,...m}=l,[f,y]=C(pr(u.value)),[h,v]=C(o===f?d:o);W(()=>{v(o===f?d:o)},[o]);let I=n(()=>{i({target:{value:f}}),y(pr(f)),v(d)},"onChoose");return a(hl,{children:[a(ca,{data:d,value:h,name:r,disabled:s,onChange:I,...m}),a(U,{pl3:!t,pl2:t,pointer:!0,onClick:I,children:c||"Choose date"}),a(Re,{...u,value:f,disabled:s,onChange:_=>{i(_),y(pr(_.target.value)),v(d)}})]})},"RadioInputWithDate"),wr=n(({label:e,name:t,items:r,value:o,disabled:i,required:s,onChange:l,inlineBlock:c,unsaved:d,...u})=>{let{current:m}=xe(t||Math.random().toString(36).slice(2));return a(p,{...u,children:a(p,{className:ie.inputWrapper,children:[e&&a(me,{className:ie.labelInput,mb3:!0,block:!0,justifyStart:!0,children:[e,s&&a(Dt,{}),d&&a(cr,{ml3:!0,color:"orange",width:"18px",ariaLabel:"unsaved-data"})]}),r.map(f=>{let{label:y,data:h,dateInput:v,...I}=f,_=I.disabled||i;return a(p,{mb3:!0,inlineBlock:c,mr8:c,name:h,"data-test":y,children:v?a(Tf,{inlineBlock:c,value:o,current:m,onChange:l,off:_,...f}):a(hl,{className:ie.radioWrapper,pointer:!0,noEvent:_,children:[a(ca,{data:h,value:o,name:m,disabled:_,onChange:l,...I}),a(me,{className:ie.radioLabel,textNeutralAlt:!0,detailMinimal:_,pl3:!c,pl2:c,children:y||h})]})},h)}),u.required&&a(p,{grey:!0,children:[a(U,{red:!0,children:"*"})," You have to select an item"]})]})})},"RadioInput");M(wr,{items:gl,name:{type:g.string,description:"A name for your radio inputs group."},label:{type:g.string,description:"Label to display a describing title for your radio inputs group."},inlineBlock:{type:g.boolean,description:`An 'inlineBlock' property so that your radio inputs will
    be displayed side by side. Otherwise, it will be displayed one below the other.`},onChange:{type:g.func,description:"The event handler when a radio inputs change."}});var wn=n(({Input:e,label:t,disabled:r,left:o,required:i,...s})=>a(p,{flex:!0,alignCenter:!0,...s,children:[a(Mf,{cursor:r,className:ie.inputWrapper,detailMinimal:r,children:[t&&a(me,{className:ie.labelInput,detailMinimal:r,mr3:!o,ml3:o,order2:o,children:[t,s.required&&a(Dt,{})]}),e]}),i&&!t&&a(Dt,{})]}),"SharedOptionsInput"),Pf=fe({...ie,consume:!0},w.o0.inlineFlex.input()),ml=fe({...ie,consume:!0},w.h5px.div()),Lf=fe({...ie,consume:!0},w.alignCenter.span()),In=n(({checked:e,disabled:t,onChange:r,absolute:o=!0,...i})=>a(wn,{Input:a(ml,{pointer:!t,switchContainer:!0,children:[a(Pf,{pointer:!t,disabled:t,type:"checkbox",checked:e,onChange:r,absolute:o,switchInput:!0}),a(Lf,{switch:!0,children:a(ml,{switchCursor:!0})})]}),disabled:t,...i}),"Switch");M(In,{label:{type:g.string,description:"Label to display a describing title for the Switch."},checked:{type:g.boolean,description:"Value to set if the Switch is checked."},disabled:{type:g.boolean,description:"Value to set if the Switch is disabled."},onChange:{type:g.func,description:"The event handler when the Switch changes."},left:{type:g.boolean,description:"Display the Switch at the left of the label."}});var da=fe({...ie,consume:!0},w.input()),bl=fe({...ie,consume:!0},w.absolute.ol0.div()),kn=n(({checked:e,disabled:t,onChange:r,...o})=>a(wn,{Input:a(p,{alignCenter:!0,relative:!0,justifyCenter:!0,children:[a(da,{"data-test":"checkbox",type:"checkbox",checkInput:!0,pointer:!t,disabled:t,checked:e,onChange:r}),a(bl,{noEvent:!0,checkedDot:!0})]}),disabled:t,...o}),"Checkbox");M(kn,{label:{type:g.string,description:"Label to display a describing title for the Checkbox."},checked:{type:g.boolean,description:"Value to set if the Checkbox is checked."},disabled:{type:g.boolean,description:"Value to set if the Checkbox is disabled."},onChange:{type:g.func,description:"The event handler when the Checkbox changes."},left:{type:g.boolean,description:"Display the Checkbox at the left of the label."}});var jf=n(({value:e,min:t,max:r})=>t===0&&r===100?e:Math.round((e-t)/(r-t)*100),"getPercentage"),yl=fe({...ie,consume:!0},w.input()),ua=n(({label:e,disabled:t,disableTextInput:r=!1,onChange:o,valuelabel:i,value:s=0,min:l=0,max:c=100,step:d=1,color:u="purple",...m})=>a(wn,{Input:a(p,{flex:!0,alignCenter:!0,children:[e&&a(me,{className:ie.labelInput,mr4:!0,mb1:!0,children:e}),a(yl,{"data-test":"slider",type:"range",value:Number(s),onChange:o,min:l,max:c,step:d,rangeSlider:!0,className:ie.inputWrapper,disabled:!o||t,style:{backgroundSize:`${jf({value:s,max:c,min:l})}% 100%`,"--sliderColor":`var(--${u})`,"--sliderFill":`var(--${u}Fill)`}}),!r&&a(p,{ml2:!0,alignCenter:!0,children:[a(p,{w11px:!0,children:a(Re,{disabled:!o,type:"number",max:c,min:l,value:Number(s),onChange:o})}),a(p,{ml1:!0,children:i})]})]}),disabled:t,...m}),"Slider");M(ua,{label:{type:g.string,description:"Label to display a describing title for the Slider."},disabled:{type:g.boolean,description:"Value to set if the Slider is disabled."},onChange:{type:g.func,description:"The event handler when the Range Slider changes."},valuelabel:{type:g.string,desciption:"Value label, shown on the right side of the value."},value:{type:g.number,desciption:"Value that will be shown on the right side of the range."},min:{type:g.number,desciption:"Min value that the range will have."},max:{type:g.number,desciption:"Max value that the range will have."},step:{type:g.number,desciption:"Steps that the range will range from."}});var Ir=n((e="")=>{let[t,r]=C(e);return{props:{onChange:n(s=>r(s.target.value),"onChange"),value:t},setValue:r,reset:n(()=>t===e||r(e),"reset"),value:t}},"useValue");xr.use=Ir;Re.use=Ir;pt.use=Ir;wr.use=Ir;ua.use=Ir;var Nf=w.mt10.w100p.pv11.ph12.pv7_s.ph9_s.div(),Qt=n(e=>a(Nf,{...e}),"PageContainer"),Of=w.aShadow.pv5.ph6.mb7.div(),pa=n(({highlighted:e,...t})=>a(Of,{bgLevel2:!e,bgGreyHighlighted:e,...t}),"ContainerShadow"),Ff=w.pv2.ph3.w100p.alignCenter.animateColor.neutralOnFill.justifyStart.bgGreyHighlighted.div(),Bf=n(({children:e,...t})=>a(Ff,{...t,children:a(p,{className:"alt-theme",alignCenter:!0,w100p:!0,children:e})}),"TableHeader"),Wf=w.pv3.ph3.justifyStart.alignCenter.w100p.bgLevel3.fMono.div(),Uf=w.bgLevel2.shadowInset.pv5.ph6.div(),zf=w.ph6.pv4.w100p.alignCenter.animateColor.fMono.neutralOnFill.justifyStart.bgGreyHighlighted.div();var N={};tu(N,{A:()=>Zo,Action:()=>fn,ActionStyle:()=>Zs,Add:()=>po,AlertCircle:()=>co,Alternative:()=>gp,AlternativeFilled:()=>bp,ArrowDoubleDiagonal:()=>Cu,ArrowDoubleHorizontal:()=>ku,ArrowDoubleVertical:()=>Su,ArrowDown:()=>wt,ArrowLeft:()=>kt,ArrowLink:()=>Vh,ArrowRight:()=>St,ArrowTailDown:()=>_u,ArrowTailLeft:()=>oo,ArrowTailRight:()=>Bt,ArrowTailUp:()=>$u,ArrowTypeLeft:()=>Au,ArrowTypeRight:()=>Wt,ArrowUp:()=>It,ArrowsRightLeft:()=>wu,ArrowsUpDown:()=>Iu,Asterisk:()=>Cp,AsteriskFilled:()=>_p,AstronautQuestion:()=>dm,AuditRatio:()=>Hx,Avatar:()=>bo,AvatarCircle:()=>yo,BackLink:()=>Hh,Badge:()=>xp,Banner:()=>An,BarGraph:()=>Il,Bonus:()=>Jp,Branch:()=>Yp,Btn:()=>Kh,Bug:()=>Bu,BulkApply:()=>Ip,Button:()=>ee,ButtonLink:()=>Kt,ButtonStyle:()=>Ys,Calendar:()=>so,Captain:()=>Zu,Card:()=>mt,CardTitle:()=>$l,CardsContainer:()=>El,CardsContainerStyle:()=>Al,Check:()=>fo,CheckCircle:()=>ho,CheckInput:()=>da,Checkbox:()=>kn,Checkpoint:()=>Rp,Circle:()=>Ep,CircleMap:()=>op,Clipboard:()=>go,Clock:()=>io,ClockPast:()=>yp,ClockRush:()=>ip,Close:()=>He,CloseCircle:()=>lr,ClosedFolder:()=>Mp,Code:()=>Yt,CodeIcon:()=>Du,Coins:()=>Vu,Collapsible:()=>kl,ColorDot:()=>Jd,ComboLink:()=>_e,ConicGraph:()=>ql,Container:()=>fd,ContainerInset:()=>Uf,ContainerShadow:()=>pa,Copy:()=>Wu,Delete:()=>mo,Diamond:()=>Pp,Div:()=>p,DoubleColumnDistribution:()=>lv,Drawer:()=>hi,DropDown:()=>$e,Edit:()=>ao,Emoji:()=>hf,Evaluation:()=>jp,EventCalendarStatusRibbon:()=>Pv,EventElement:()=>Fv,EventStatusRibbon:()=>Tv,EventsPanel:()=>Sd,Exceptional:()=>Np,Exercise:()=>nm,ExpectedTimelineRibbon:()=>Lv,Favorite:()=>Ru,Feedback:()=>mf,FileInputLabel:()=>la,Filter:()=>Xn,FilterStyle:()=>$d,Flags:()=>w,Forbidden:()=>uo,Form:()=>Af,GenerateInput:()=>Sn,Git:()=>Xu,GraphArc:()=>zp,GraphCaptions:()=>Rd,GraphCentralPoint:()=>Gp,GraphEntryPoint:()=>Hp,GraphInnerArc:()=>Vp,GraphInnerCircle:()=>Op,GraphLine:()=>Up,GraphMiddleCircle:()=>Fp,GraphOuterArc:()=>Xp,GraphOuterCircle:()=>Bp,GraphSlice:()=>Wp,GroupAndAuditStatusRibbon:()=>vv,H1:()=>ea,H2:()=>ta,H3:()=>tf,H4:()=>rf,H5:()=>nf,H6:()=>of,Hackathon:()=>Zp,Header:()=>lf,Hide:()=>Yu,Hideable:()=>Sr,INTENT_COLORS:()=>re,Idea:()=>up,Img:()=>Wv,InfoText:()=>cf,Information:()=>Oe,Label:()=>me,LabelIcon:()=>Ap,LabelRibbon:()=>qv,Level:()=>im,Li:()=>tx,LightUserContainer:()=>Vx,LineGraph:()=>qd,LineMap:()=>np,Link:()=>ke,LinkIcon:()=>Xh,LinkStyle:()=>Uh,ListCard:()=>Dl,LiveTimer:()=>kd,Locked:()=>mp,LockedFilled:()=>hp,LogOut:()=>Ju,Mail:()=>Fu,MainTitle:()=>af,MatchGenerator:()=>wi,Menu:()=>Lu,MenuDots:()=>fp,MessageButton:()=>ef,MinusCircle:()=>cm,Modal:()=>qt,ModalDelete:()=>Zf,ModalTitle:()=>Et,MonoSpan:()=>pf,Navbar:()=>Pd,NavbarMenu:()=>Ld,NavbarStyle:()=>Td,NewTab:()=>rm,NuclearButton:()=>Jh,OBJECT_TYPE_COLORS:()=>du,OpenFolder:()=>Tp,P:()=>el,PageContainer:()=>Qt,Panel:()=>gd,PanelContainer:()=>wd,PanelTitle:()=>Id,PieGraph:()=>jd,Piscine:()=>Ou,Play:()=>$p,Popup:()=>eg,PopupStyle:()=>$n,ProfileCard:()=>gg,ProgressBar:()=>Nd,Project:()=>Dp,ProjectFilled:()=>qp,PublicRecordRibbon:()=>Cv,Puzzle:()=>Uu,Quest:()=>Kp,Quick:()=>sm,RATIO_STAGES:()=>Yd,RadarChart:()=>Od,RadioButton:()=>ca,RadioInput:()=>wr,Raid:()=>Qp,RangeSlider:()=>yl,ReassignTo:()=>ep,ReassignToMe:()=>tp,RecordRibbon:()=>Sv,RecordStatusRibbon:()=>Iv,RecordTypeRibbon:()=>xv,RegistrationStatusRibbon:()=>Dv,Reset:()=>sp,ResizableContainer:()=>zd,ResultRibbon:()=>Av,Ribbon:()=>ue,RibbonStyle:()=>yd,Rocket:()=>rp,STATUS_COLORS:()=>lu,Save:()=>qu,Search:()=>Ut,SearchBar:()=>yr,SearchBarRibbon:()=>_f,SearchBarWrapper:()=>ia,SearchInput:()=>yn,SearchItem:()=>$f,Section:()=>ut,SectionHeader:()=>zf,SectionTitle:()=>df,SectionTopHeader:()=>ya,Select:()=>pt,SelectWrapper:()=>aa,Settings:()=>Pu,SharedSearchInput:()=>vn,Sharp:()=>Vr,Skills:()=>kp,SkillsFilled:()=>Sp,Slider:()=>ua,Span:()=>U,Spinner:()=>pi,Star:()=>ju,StarFilled:()=>Nu,StatTitle:()=>Sl,Stats:()=>Tu,StepSectionTitle:()=>bx,Steps:()=>kx,StepsBar:()=>Xd,Stopwatch:()=>Lp,Structure:()=>pp,SubItem:()=>cp,SubTitle:()=>sf,Submit:()=>lp,Subtitle:()=>dt,Switch:()=>In,Table:()=>Sx,TableBody:()=>Ax,TableContainer:()=>Wf,TableD:()=>Ex,TableFoot:()=>Dx,TableH:()=>$x,TableHead:()=>Cx,TableHeader:()=>Bf,TableR:()=>_x,Tabs:()=>Lx,TabsCardContent:()=>Px,TabsCardTitle:()=>Tx,TabsCardTitleContainer:()=>Mx,TabsContent:()=>qx,TabsMenu:()=>Rx,Tag:()=>zu,Target:()=>Gu,Teamwork:()=>wp,Text:()=>ne,TextArea:()=>xr,TextAreaStyle:()=>oa,TextInput:()=>Re,TextInputStyle:()=>na,TimerCircle:()=>jx,Title:()=>ra,TitleInputStyle:()=>kf,ToggleButton:()=>Zh,ToggleContainer:()=>Wx,ToggleItem:()=>Kd,TrameBg:()=>ha,TrameQuestBg:()=>Yf,Trophy:()=>Mu,TypeRibbon:()=>gv,Ufo:()=>lm,Ul:()=>yi,UnderlinedHeader:()=>uf,Unlock:()=>tm,UnlockFilled:()=>em,Unsaved:()=>cr,Upload:()=>ap,User:()=>Eu,UserAvatar:()=>Cn,UserClock:()=>Ku,UserEdit:()=>dp,UserFullName:()=>Gx,UserInfo:()=>Ii,UserList:()=>vp,UserLogin:()=>zx,View:()=>Qu,Warning:()=>lo,World:()=>vo,XpCoin:()=>Hu,ZoomIn:()=>om,ZoomOut:()=>am,bannerStyles:()=>ba,calcCoords:()=>no,capitalize:()=>je,classes:()=>xu,darkShortcuts:()=>iu,defaultFilter:()=>xn,describe:()=>M,format:()=>vr,fromEntries:()=>hu,getClassCode:()=>pu,getDefault:()=>yu,getGradeColor:()=>uu,getStatusBgColor:()=>cu,getStatusColor:()=>to,getTypeOf:()=>mu,greyShades:()=>nu,lightShortcuts:()=>su,radialGradientDefs:()=>Dd,referenceColors:()=>ou,setVisibilityProps:()=>sr,sharedShortcuts:()=>au,types:()=>g,useAsyncCallback:()=>vu,useFetch:()=>bu,usePromise:()=>fu,usePromiseCurry:()=>gu,useToggle:()=>ro});K();var Gf=n((e,t)=>{try{return e&&JSON.parse(e)}catch{return{error:e||t.statusText}}},"jsonSafe"),ma=new WeakMap,G1=n(e=>e&&ma.has(e)?Object.fromEntries(ma.get(e)):{},"getHeaders"),Hf=n(async(e,{query:t,...r}={})=>{let o=`${e}${t?`?${new URLSearchParams(t)}`:""}`,i=await fetch(o,r);if(i.statusCode===204)return{};let s=Gf(await i.text(),i);if(s&&typeof s=="object"&&ma.set(s,i.headers),i.ok&&!s?.error)return s;let l=Error(s?.error||i.statusText);throw Object.assign(l,s),l.statusText=i.statusText,l.status=i.status,G.error("fetch",{path:e,query:t}),l},"fetchWrapper"),kr={};for(let e of["administration","audit","avatar","auth","auto-git","reward","runner","stats","storage","games","match","validation","invalidation","requirement","object"])kr[e]=(t="",r=void 0)=>(typeof t=="object"&&(r=t,t=""),Hf(`/api/${e}${t}`,{query:r?.params,...r,headers:{"x-jwt-token":localStorage["hasura-jwt-token"],"x-session-id":qi,...r?.headers}})),kr[e].use=(t,r,o)=>{typeof t=="object"&&(r=t,t="");let[i,s]=C({[De]:!0});return W(n(()=>{if(Ve(i)||s({...i,[Ct]:!0}),r?.pending)return;let c=new AbortController;return kr[e](t,{...r,signal:c.signal}).then(s,d=>c.signal.aborted||s({[we]:d})),()=>c.abort()},"runFetch"),o?[...o,t]:[t]),i};K();K();var Vf="9999-12-31T23:59",Sn=n(({input:e,value:t,onChange:r,name:o,styleProps:i,...s})=>{let{disabled:l,...c}=s,[d,u]=C(),[m,f]=C(!1);if(e.type==="datetime-local"&&!e.max&&(e.max=Vf),e.type==="select"){let{type:y,searchable:h,selected:v,...I}=e,{itemsRelatives:_,...q}=c;return a(p,{...q,...i,children:a(pt,{"data-test":"open-menu",...I,value:t,disabled:l,selected:v||t,sortable:h,searchable:h,itemsRelatives:_,onChange:R=>r({target:{value:R?.label}}),w100p:!0})})}if(e.type==="countries"||e.type==="languages"){let{type:y,...h}=e;return a(p,{...c,children:a(pt,{...h,disabled:l,searchable:!0,sortable:!0,selected:t,onChange:v=>r({target:{value:e.type==="languages"?v.data:v.label}})})})}if(e.type==="radio"){let y=e.items.find(v=>!v.disabled),h=y?y.data:"";return a(p,{...c,children:a(wr,{...e,disabled:l,value:t||h,onChange:r,items:e.items})})}if(e.type==="checkbox"){let{type:y,...h}=e;return a(p,{...c,children:a(kn,{"data-test":"checkbox",...h,disabled:l,checked:!!t,onChange:()=>r({target:{value:!t}}),items:e.items})})}if(e.type==="switch"){let{type:y,...h}=e;return a(p,{...c,children:a(In,{"data-test":"switch",...h,disabled:l,checked:!!t,onChange:()=>r({target:{value:!t}}),items:e.items})})}if(e.type==="textarea"){let{type:y,...h}=e;return a(xr,{...s,...h,...i,value:t||"",onChange:r,"data-test":"textarea"})}if(e.type==="file"){let y=e.defaultImageUrl?e:{type:e.type,accept:e.accept},h=d?URL.createObjectURL(d):e.defaultImageUrl,v=us();return a(p,{alignEnd:!0,...s,children:[a(la,{htmlFor:`file-input-${v}`,mr2:!0,children:[o==="avatar"&&a(Cn,{size:"large",mb3:!0,src:h,pointer:!0}),a(Qf,{hoverBgNeutral:!l,pointer:!l,style:{opacity:l?.8:1},children:"Choose a file"})]}),d&&a(U,{size:"small",mv0:!0,children:d.name}),a(Kf,{...y,id:`file-input-${v}`,"data-test":"file-input",disabled:l,multiple:!1,onChange:I=>{r({target:{value:I.target.files[0]}}),u(I.target.files[0])}})]})}return e.type==="duration"?a(p,{...c,w100p:!0,children:[a(Re,{"data-test":"textinput",w100p:!0,...s,...e,value:t||"",onChange:r,onFocus:()=>f(!0),onBlur:()=>f(!1),...i}),m&&a(Xf,{children:`You can combine a duration short tag with a number to create a duration, for example:
          
          - 3d    -> 3 days
          - 120m  -> 2 hours
          - 2w    -> 2 weeks`})]}):a(Re,{"data-test":"textinput",w100p:!0,...s,...e,value:t||"",onChange:r,...i})},"GenerateInput"),Xf=w.w60p.bgBlack.zi5.pa3.preLine.absolute.shadowInset.fMono.fs7.light.ellipsis.textMinimal.div(),Kf=w.hidden.input(),Qf=w.animate.inlineBlock.fMono.medium.fs6.ls1.uppercase.br1.pv2.ph3.pointer.bgNeutral.neutralOnFill.hoverBgNeutral.div();M(Sn,{input:{type:g.object.isRequired,description:"To set the settings of the input : type indicates the input you want to generate (text, tel, date, select, radio, checkbox, switch, textarea), then you can add any other setting needed by your input as specified in the settings of each type of input (name, placeholder, required, label, id, items, emptyItem, value, etc.)."},value:{type:g.oneOfType([g.string,g.number,g.boolean,g.object]).isRequired,description:"The value that the input element has."},onChange:{type:g.func.isRequired,description:"The event handler when the input changes."},props:{description:"Pass props to the input element (as flags or key)."}});K();K();var ha=n(e=>a(p,{fixed:!0,w100vw:!0,o15:!0,h100vh:!0,t0:!0,l0:!0,style:{zIndex:-1,background:"center / cover url(/assets/img/01-trame.svg)"},...e}),"TrameBg"),Yf=n(e=>a(p,{style:{zIndex:-1,background:"center / cover url(/assets/img/01-trame-quest.svg)"},...e}),"TrameQuestBg");var fa=n(e=>e?typeof e=="string"?e:Array.isArray(e)?e.map(fa).join(""):fa(e.props?.children):"","stringifyJSX"),_n=n(e=>fa(e).toLowerCase().replace(/([^a-z0-9]+)/g," ").trim().replaceAll(" ","-"),"toTestId");var Jf=n(e=>a(He,{zi16:!0,fixed:!0,mt12:!0,mr8:!0,pointer:!0,t0:!0,r0:!0,...e}),"CloseIcon"),qt=n(({hidden:e=!0,closeIcon:t=!0,closeButton:r,buttonText:o,centered:i=!0,closeOnEscape:s=!0,onClose:l,fixed:c=!0,children:d,lightCentered:u=!1,...m})=>{let[f,y]=C(),h=n(v=>{s&&v.keyCode===27&&l(),v.stopPropagation(),v.nativeEvent.stopImmediatePropagation()},"escapeModal");return W(()=>{if(e||!f)return;let v=setTimeout(()=>{let I=document.activeElement;for(;I.parentElement;){if(I===f)return;I=I.parentElement}f.focus()},200);return()=>clearTimeout(v)},[e,f,t]),a(P.Fragment,{children:[t&&!e&&a(ee,{intent:"neutral",level:"tertiary",name:"close-modal",icon:a(Jf,{width:"24"}),onClick:l}),a(p,{elemRef:y,onKeyDown:h,tabIndex:"0",bgLevel1:!0,w100p:!0,h100p:!0,pt10:!0,scrollY:!0,w100vw:c,zi15:!0,absolute:!c,fixed:c,t0:c,l0:c,hidden:e,...m,children:a(p,{justifyCenter:i||u,alignCenter:i||u,visible:!0,flexColumn:!0,h100p:i,children:[d,r?a(ee,{intent:"neutral",level:"secondary",onClick:l,children:o||"OK"}):null]})})]})},"Modal");M(qt,{hidden:{default:!0,description:"Set if the Modal is hidden or not on first render."},closeIcon:{default:!0,description:"Display a close icon on top right of the Modal."},closeButton:{default:!1,description:"Display a default closing button inside the Modal."},buttonText:{default:"OK",description:"Set the text of the default closeButton."},closeOnEscape:{default:!0,description:"Enable or disable closing the modal when Esc key is hit."},onClose:{default:n(()=>{},"default"),description:"Callback fired when the Modal component is closed."},fixed:{default:!0,description:"Make the Modal fixed and fullscreen."},children:{default:null,description:"Pass any children as content of the Modal."},props:{default:null,description:"Pass props to the Modal container."}});var Zf=n(({handleDelete:e,title:t,text:r,message:o,modalRef:i})=>a(qt,{...i.props,closeIcon:!0,fixed:!0,children:[a(ha,{o10:!0,o15:!1}),a(p,{w40p:!0,w50p_m:!0,w70p_s:!0,w100p_xs:!0,pa9:!0,children:[a(dt,{children:t}),a(ne,{mt7:!0,children:r}),a(p,{mt11:!0,children:[a(p,{justifyEnd:!0,alignCenter:!0,children:[a(ee,{intent:"neutral",level:"secondary",w6:!0,onClick:i.close,children:"Cancel"}),a(ee,{intent:"danger",w6:!0,ml6:!0,onClick:e,children:"Delete"})]}),a(p,{mt5:!0,fs6:!0,minH7px:!0,justifyEnd:!0,red:o.type==="error",teal:o.type==="success",children:o.text||o})]})]})]}),"ModalDelete"),$n=n(({children:e,modal:t,centered:r=!0,...o})=>a(p,{zi15:!0,fixed:!0,scroll:!0,t0:!0,b0:!0,l0:!0,w100p:!0,w100vw:!0,h100p:!0,style:{backdropFilter:"blur(10px)"},hidden:!t.isOpen,onClick:t.close,children:a(qt,{...t.props,w100p:!1,w100vw:!1,h100p:!1,centered:r,w50p:!0,t15p:!0,l25p:!0,bgLevel2:!0,pa7:!0,closeIcon:!1,onClick:i=>{i.stopPropagation(),i.nativeEvent.stopImmediatePropagation()},...o,children:e})}),"PopupStyle");qt.use=sr;var eg=n(({modal:e,children:t,title:r,onClose:o=e.close,...i})=>a($n,{modal:e,centered:!1,pt10:!1,"data-test":`${_n(r)||"unknown"}-popup`,...i,children:[a(p,{justifyBetween:!0,alignBaseline:!0,children:[a(Et,{size:"small",mb8:!0,children:r}),o&&a(ee,{zi11:!0,pointer:!0,intent:"neutral",level:"tertiary",onClick:o,icon:a(He,{width:"25"})})]}),t]}),"Popup");var tg=w.block.br50p.ofCover.img(),ga={xsmall:"24px",small:"48px",medium:"80px",large:"96px",xlarge:"184px"},Cn=n(({user:e,src:t,size:r="medium",editable:o=!1,clearCache:i,campus:s,noCircle:l=!1,...c})=>{let d=e?.avatarUrl||t,u=e?.login?.startsWith("anonymous_"),m=ga[r]||ga.medium;ga[r]||G.warn(`Indalid avatar size: ${r}`);let f={width:m,height:m,...c},y=l?bo:yo;if(o){let h=qt.use();return a(p,{...c,children:[a(p,{relative:!0,children:[a(Cn,{size:r,src:e.avatarUrl,onClick:h.open,pointer:!0}),a(p,{absolute:!0,r0:!0,b0:!0,bgNeutral:!0,br50p:!0,ofCover:!0,onClick:h.open,pointer:!0,style:{padding:"3px"},children:a(ao,{color:"var(--neutralOnFill)",width:"24px"})})]}),a(rg,{modal:h,user:e,clearCache:i,campus:s})]})}return d&&!u?a(tg,{src:d,alt:"Avatar",style:{aspectRatio:"1 / 1"},...f}):a(y,{color:u?"var(--grey65)":"var(--purple)",...f})},"UserAvatar"),rg=n(({modal:e,user:t,clearCache:r,campus:o})=>{let[i,s]=et("",3e3),[l,c]=C(),[d,u]=C(!1),[m,f]=C(!0),y=1e6,h=l?.size<y,v=`${(y/1e6).toFixed(0)} Mb`,I=n(q=>{let R=q.target.value;if(R){let E=new Image;E.onload=()=>{let{width:L,height:H}=E;f(L<=400&&H<=400)},E.src=URL.createObjectURL(R),c(R)}},"handleAvatarChange"),_=n(async q=>{q.preventDefault(),u(!0);try{await kr.avatar({method:"POST",params:{userId:t.id,campus:o.name},body:l}),s(a(U,{green:!0,children:"Avatar uploaded."})),c(),r(),await os(2e3),e.close()}catch(R){G.error("upload-avatar",R),s(a(U,{red:!0,children:R.message}))}u(!1)},"onSubmit");return a($n,{modal:e,scrollYAlways:!0,onClose:e.close,pt10:!1,children:a(p,{justifyBetween:!0,alignStart:!0,flexColumn:!0,w100p:!0,fs5:!0,children:[a(Et,{justifyBetween:!0,alignCenter:!0,mb5:!0,w100p:!0,size:"small",children:["Edit ",t.login," avatar",a(ee,{icon:a(He,{}),onClick:e.close,level:"tertiary",intent:"neutral"})]}),a(Sn,{input:{type:"file",accept:"image/png, image/jpeg",defaultImageUrl:t.avatarUrl},name:"avatar",value:l||"",onChange:I,disabled:d,mv3:!0},"avatar"),a(ne,{mv0:!0,size:"small",children:["Accepted files: jpg, png | Max size: ",v," | Max resolution: 400x400"]}),l&&!h&&a(ne,{size:"small",mv1:!0,red:!0,children:"Image exceeded maximum size limit"}),!m&&a(ne,{size:"small",mv1:!0,red:!0,children:"Image exceeded maximum resolution limit"}),a(p,{justifyBetween:!0,alignCenter:!0,w100p:!0,mt7:!0,children:[a(ee,{onClick:e.close,level:"tertiary",intent:"neutral",children:"Cancel"}),a(p,{justifyStart:!0,alignCenter:!0,children:[i,a(ee,{"data-test":"confirmation-button",onClick:_,intent:"highlight",level:"primary",disabled:!l||!h||d||!m,ml3:!0,children:"Update"})]})]})]})})},"EditUserAvatarModal");var vl=["minimal","info","audit","danger","warning","success"],ba=it(re,([e,t])=>vl.includes(e)),ng={minimal:Oe,info:Oe,danger:lo,warning:co,success:fo},og=w.mb5.ph3.pv2.flex.regular.selfStart.wFitContent(p),An=n(({intent:e="warning",level:t="primary",ariaLabel:r,icon:o,children:i,selfStart:s=!0,...l})=>{let c=o||ng[e]||Oe;["primary","secondary"].includes(t)||(G.warnDev("Invalid banner level",{level:t}),t="primary");let d=ba[e];d||(G.warnDev("Invalid banner intent",{intent:e}),d=ba.minimal);let u=je(d),m=t==="primary"?{[`bg${u}`]:!0,textNeutral:!0}:{[`border${u}`]:!0,ba:!0,[d]:!0};return a(og,{...m,...l,children:[o!==!1&&a(c,{mr3:!0,selfStart:s,width:"24px",color:`var(--${t==="primary"?"neutral":d})`,ariaLabel:r}),i]})},"Banner");M(An,{intent:{default:"warning",type:g.oneOf(vl),description:"Defines the color of the banner and the icon it will display by default. (Accepted values:  minimal, info, danger, warning, success)"},icon:{description:"Icon to display in the top left of the banner. Can be set to false to prevent the display of the icon"}});K();var xl="7d017296e7c6960245cbeba3a9e7d3cd492f6f77f692d5e65b8d1f31defc18c0",ag=`.labelBox-01 {
  width: 16px;
  height: 16px;
}
`;(function(){if(!(typeof document>"u")&&!document.getElementById(xl)){var e=document.createElement("style");e.id=xl,e.textContent=ag,document.head.appendChild(e)}})();var wl={labelBox:"labelBox-01"};K();var ig=w.eventAuto.div(),sg=w.ol0.pointer.inlineBlock.div(),$e=P.memo(({trigger:e,content:t=[],open:r=!1,flex:o=!1,pointer:i,center:s,left:l,right:c,block:d,hover:u,click:m=!0,onClick:f,container:y=!0,children:h,dropStyle:v,w100p:I,h100p:_,hasEvent:q,shadow:R=!0,followMouse:E,relative:L=!1,...H})=>{let[k,D]=C(r),[T,X]=C(),[V,Q]=C({x:0,y:0}),[j,Y]=_t(),[te,Ce]=C(!1);E=E===void 0?u:E,W(()=>{if(!T||!k||!E)return;let ae=n(se=>Q({x:se.clientX,y:se.clientY}),"updateMouse");return document.addEventListener("mousemove",ae),()=>document.removeEventListener("mousemove",ae)},[k,T,E]),W(()=>{if(!k||!E)return;let ae=V.x+Y.width+20>window.innerWidth;Ce(ae)},[V,Y.width,k,E]),W(()=>{if(!T||!k)return;let ae=n(se=>{T.contains(se.target)||D(!1)},"handleClickOutside");return document.addEventListener("click",ae,!1),()=>{document.removeEventListener("click",ae,!1)}},[T,k]);let be=n(ae=>{ae.keyCode===27&&D(!1),ae.keyCode===13&&(ae.preventDefault(),D(!k))},"handleKey"),Te=navigator.userAgent.match(/Mobi/)!==null;return u&&!Te&&(m=!1),Te&&(u=!1),a(sg,{flex:o,onClick:ae=>m&&ae.target===T&&D(!k)||f?.(),pointer:i,onMouseEnter:()=>u&&D(!0),onMouseLeave:()=>u&&D(!1),onKeyDown:be,elemRef:X,block:d,relative:L,w100p:I,h100p:_,tabIndex:"0","data-test":"general-drop-down",children:a(p,{noEvent:!q,w100p:!0,h100p:_,justifyCenter:s,justifyStart:l,justifyEnd:c,children:[e,k&&a(lg,{content:t,container:y,shadow:R,elem:T,hover:u,click:m,setIsOpen:D,isOpen:k,dropStyle:v,followMouse:E,mousePos:V,flipLeft:te,contentRef:j,...H,children:h})]})})}),lg=n(({container:e,content:t,elem:r,hover:o,click:i,setIsOpen:s,isOpen:l,shadow:c,dropStyle:d,children:u,followMouse:m,mousePos:f,flipLeft:y,contentRef:h,lightBg:v=!1,...I})=>{let _=n(L=>L.target.parentElement.parentElement===r,"mouseIn"),q=Array.isArray(t),R=10,E=m?{position:"fixed",left:`${y?f.x-R:f.x+R}px`,top:`${f.y+R}px`,pointerEvents:"none",transform:y?"translateX(-100%)":void 0,...d}:d;return a(p,{eventAuto:!0,absolute:!m,zi5:!0,style:E,onMouseLeave:L=>o&&!_(L)&&s(!1),onClick:L=>i&&_(L)&&s(!l),children:a("div",{ref:h,children:a(ig,{bgLevel3:e&&!v,style:e&&v?{backgroundColor:"var(--grey10)"}:{},bShadow:c,ph4:e,pv3:e,flexColumn:q,...I,children:[q?a(cg,{content:t}):t,u]})})})},"Content"),cg=n(({content:e})=>e.map(({text:t,url:r},o)=>a(ke,{mb2:o!==e.length-1,mb1:o===e.length-1,href:r,children:t},t)),"ContentLinkList");M($e,{trigger:{type:"any",description:"Pass any React component to display the element which triggers the drop down."},content:{type:g.oneOfType([g.any,g.string,g.any,g.arrayOf(g.shape({text:g.string,url:g.string}))]),description:"Pass either an array of objects to display a template list of links, or any React component to display the drop down content."},open:{type:"bool",default:!1,description:"Set if the drop down is open or not."},right:{type:"bool",description:"Align the trigger and the drop down to the right."},center:{type:"bool",description:"Align the trigger and the drop down to the center."},left:{type:"bool",description:"Align the trigger and the drop down to the left."},block:{type:"bool",description:"Display the trigger element as a block element."},hover:{type:"bool",description:"The Popover will appear when hovering the trigger."},click:{type:"bool",default:!0,description:"The Popover will appear when clicking on the trigger."},onClick:{type:"function",description:"Pass a function to trigger on click."},followMouse:{type:"bool",description:"If false, dropdown content will not follow the mouse pointer."},props:{description:"Pass props to the drop down container."}});var dg=n(({data:e,step:t,vertical:r,hideLabels:o,...i})=>{let s=e.flatMap(({bars:h})=>h.map(({value:v})=>v)),l=Math.min(...s),c=100,d=c-l,m=t||Math.ceil(d/10),f=[];for(let h=c;h>=l;h-=m)f.push(a(me,{style:{...r?{bottom:"0%"}:{left:"0%"},width:!r&&`${h}%`,height:r&&`${h}%`},flex:!r,justifyEnd:!r,size:"small",absolute:!0,children:[h,"%"]},h));let y="solid 1px var(--grey)";return a(p,{flex:!r,flexColumn:r,...i,children:[!r&&a(p,{style:{minWidth:"120px",maxWidth:r&&"120px"}}),a(p,{w100p:!r,h100p:r,flex:r,children:[a(p,{style:{...r?{borderRight:y}:{borderTop:y},order:r?1:-1}}),a(p,{w6px:r,h6px:!r,style:{flexDirection:r&&"column-reverse"},flex:!r,flexColumn:r,mh2:r,mv2:!r,relative:!0,children:[...f]})]}),r&&a(p,{style:{minHeight:"45px"}})]})},"XAxis"),ug=n(({data:e,step:t,vertical:r,hideLabels:o,ellipsis:i,...s})=>a(p,{flex:r,flexColumn:!r,...s,children:e.map(({label:l,bars:c},d)=>a(oe,{children:[c.length>1&&d!==0&&d!==e.length&&a(p,{flex:!0,style:{flexDirection:r&&"column-reverse"},children:a(p,{bl:r,bb:!r,h2px:r,w2px:!r,style:{marginBottom:r&&"46px",marginLeft:!r&&"119px"},borderDetailNeutral:!0})}),a(pg,{label:l,bars:c,vertical:r,dataSize:e.length,hideLabels:o,ellipsis:i})]},d))}),"YAxis"),pg=n(({label:e,bars:t,vertical:r,dataSize:o,hideLabels:i,ellipsis:s,...l})=>{let c="solid 1px var(--grey)";return a(p,{flex:!r,style:{width:r&&`${100/(o-t.length)}%`},flexColumn:r,...l,children:[a(me,{alignCenter:!r,justifyCenter:r,pa3:!0,style:{...r?{borderTop:c}:{borderRight:c},order:r?1:-1,minWidth:!r&&"120px",maxWidth:!r&&"120px"},size:"small",children:a(p,{inlineBlock:!0,ellipsis:s,textEnd:!0,children:e})}),a(p,{w100p:!r,h100p:r,mv4:!r,mh4:r,flexColumn:!r,justifyCenter:r,style:{alignItems:r?"flex-end":void 0},children:t.map(({value:d,color:u,dropDownContent:m},f)=>a(p,{w100p:!r,h100p:r,flex:r,alignCenter:r,flexColumn:!r,style:{flexDirection:r&&"column-reverse"},mb1:!r&&f+1!==t.length,children:[!i&&a(me,{flex:!0,mb1:!0,size:"small",style:{width:!r&&`${d<2?"18px":`${d}%`}`,order:r?1:-1},w6px:r,justifyCenter:r,justifyEnd:!r,children:[d,"%"]}),a(p,{style:{transition:`${r?"height":"width"} 1s ease-in-out`,height:r?`${d}%`:"8px",width:r?"8px":`${d}%`,background:`linear-gradient(to ${r?"top":"right"}, transparent, var(--${u}))`},flex:!0,children:m&&a($e,{ml4:!0,w100p:!0,hover:!0,pointer:!0,relative:!0,trigger:a(p,{w100p:!0}),content:m})})]},`${e}-${f}`))})]})},"GraphLine"),mg=n(({legends:e,small:t=!1,...r})=>a(p,{flexWrap:!0,children:e.map(({label:o,color:i},s)=>a(p,{flex:!0,alignCenter:!0,flexWrap:!0,ma4:!t,ma2:t,...r,children:[a(p,{className:wl.labelBox,style:{backgroundColor:`var(--${i})`}}),a(me,{ml2:!0,flex:!0,size:"small",children:o})]},s))}),"GraphLegend"),hg={small:"250px",medium:"450px",large:"650px"},Il=n(({vertical:e,step:t,legends:r,data:o=[],size:i="medium",hideLabels:s=!1,ellipsis:l=!0,...c})=>a(p,{...c,children:[a(p,{flexColumn:!e,flex:e,style:{minHeight:e&&hg[i]},scroll:e,children:[a(dg,{data:o,step:t,vertical:e,style:{order:e?-1:1}}),a(ug,{data:o,step:t,vertical:e,hideLabels:s,ellipsis:l})]}),r&&a(mg,{legends:r,small:i==="small"})]}),"BarGraph");M(Il,{size:{type:g.string,description:"small, medium and large. We can define the size of the graph by using one of those",default:"medium"},vertical:{type:g.boolean,description:"Display the bars vertically",default:!1},data:{type:g.array,description:"The data to display on the graph"},legends:{type:g.array,description:"Labels to support and explain each bar"},step:{type:g.int,description:"Step for x axis"},hideLabels:{type:g.boolean,description:"Hide the labels on the bars",default:!1},props:{description:"Pass any props to your component."}});K();var Sr=n(({visible:e=!0,children:t})=>e?t:null,"Hideable");M(Sr,{visible:{default:!0,description:"Set if the collapsible content is visible or not. On first render, the initial default value is true ; its toggling has to be controlled by the outside element."},children:{default:null,description:"Pass the content you want to be hidden as children of the component."}});var kl=n(({open:e,onToggle:t,title:r,menu:o,icon:i=!0,border:s,children:l,restrictiveClick:c,disabled:d=!1,sectionProps:u={mb3:!0},childrenProps:m={mt1:!0},iconProps:f={},...y})=>{let[h,v]=C(e);W(()=>v(e),[e]),o?P.isValidElement(o)||(o=P.createElement(o,{isOpen:h})):o=a(dt,{mb0:!0,children:r});let I={pointer:!0,onClick:n(()=>{v(!h),t?.(!h)},"onClick")};return f=d?{color:"var(--grey)",width:"20px",...f}:{width:"20px",...f},a(p,{...y,"data-test":`collapsible-${_n(r)}`,children:[a(p,{bb:!h&&s,justifyBetween:!0,alignCenter:!0,...c&&i||d?{}:I,...u,children:[o,i&&a(p,{"data-test":`${h?"arrow-up":"arrow-down"}`,noSelect:!0,...c&&!d?I:{},children:h?a(It,{...f}):a(wt,{...f})})]}),a(Sr,{visible:h,children:a(p,{...m,children:l})})]})},"Collapsible");M(kl,{open:{default:!0,description:"Set if the collapsible content is visible or not. On first render, the initial default value is true."},onToggle:{default:null,description:"State function that can manipulate if the collapsible is opened out of the component scope."},title:{default:null,description:"Display a title to your collapsing component. If the menu prop is set, this prop is not considered."},menu:{default:null,description:"Display any React component as your collapsing menu. If this prop is set, it overrides the title prop."},icon:{default:!0,description:"Display a toggling icon at the right of your collapsing menu."},border:{default:!1,description:"Display a border under the menu when the collapsible content is hidden."},children:{default:null,description:"Pass the content you want to be hidden as children of the component."},props:{default:null,description:"Pass props to the Collapsible container."}});var Sl=w.fs4.fSans.pb2.mb3.bbDetailMinimal.div(),ya=n(({title:e,informationContent:t,children:r,global:o,slim:i,...s})=>a(Sl,{alignEnd:!0,justifyBetween:!0,mb2:i,mb3:!i,pb2:!1,style:{position:"relative"},...s,children:[a(p,{alignCenter:!0,pb2:!i,pb1:i,ellipsis:!0,children:[o&&a($e,{hover:!0,relative:!0,trigger:a(vo,{width:"25",pr1:!0}),dropStyle:{width:"300px"},content:a(ne,{size:"small",mv0:!0,children:"Global \u2192 it tracks your activity across every program and event."})}),a(ut,{size:"medium",mr2:!0,ls3:!1,ellipsis:!0,children:e}),t&&a($e,{hover:!0,trigger:a(Oe,{width:"25",pr1:!0}),dropStyle:{width:"300px",whiteSpace:"break-spaces"},content:t})]}),r&&a(p,{absolute:!0,r0:!0,visible:!0,pb1:!0,children:r})]}),"SectionTopHeader");var Cl="11c555cd7e0ae5b61dc74f3fa111b84b30c242d506b0643e0ea05d3d16398dfc",fg=`@media (min-width: 1301px) and (max-width: 1700px) {
  .w22p-01 {
    width: 22%;
  }
}
`;(function(){if(!(typeof document>"u")&&!document.getElementById(Cl)){var e=document.createElement("style");e.id=Cl,e.textContent=fg,document.head.appendChild(e)}})();var _l={w22P:"w22p-01"};var gg=n(({className:e,hover:t,centered:r,children:o,title:i,global:s=!1,minimal:l=!1,justifyBetween:c=!1,sectionTitle:d,informationContent:u,trailingComponent:m,scroll:f=!1,...y})=>{let h=e?.includes("alt-theme")?{bgGreyHighlighted:!0}:{bgLevel3:!0,hoverBgLevel2:t};return a(p,{flexColumn:!0,...y,children:[d&&!l&&a(ya,{title:d,slim:!0,global:s,informationContent:u,children:m}),a(p,{...h,flex1:!0,scrollYAlways:f,aShadow:!l,children:a(p,{className:e,pv5:!l&&!f,ph4:!l,ph3:l,pv2:l&&!f,textMinimal:!0,relative:!0,flexColumn:!0,alignCenter:r,justifyBetween:c,w100p:!0,h100p:!0,children:[i&&(l?a(ne,{size:"small",mb4:!0,textMinimal:!0,children:i}):a($l,{children:i})),o]})})]})},"ProfileCard"),$l=w.light.mb4.fs4.textNeutral.div(),Al=w.flexWrap.justifyBetween.w100p.div(),El=n(({children:e,...t})=>a(Al,{...t,children:[e,a(mt,{h1:!0,pa0:!0,ma0:!0,vHidden:!0}),a(mt,{h1:!0,pa0:!0,ma0:!0,vHidden:!0}),a(mt,{h1:!0,pa0:!0,ma0:!0,vHidden:!0}),a(mt,{h1:!0,pa0:!0,ma0:!0,vHidden:!0}),a(mt,{h1:!0,pa0:!0,ma0:!0,vHidden:!0})]}),"CardsContainer");M(El,{children:{description:"Pass your cards as children of the cards container."}});var mt=n(({clickable:e,title:t,children:r,...o})=>a(pa,{w18p_xl:!0,w30p_m:!0,w45p_s:!0,w100p_xs:!0,bgLevel3:!0,animate:!0,pointer:e,hoverShadow:e,hoverBgLevel2:e,className:_l.w22p,...o,children:[a(Sr,{visible:t!==null,children:a(dt,{fs4:!0,children:t})}),r]}),"Card");M(mt,{title:{default:null,description:"To define a card title."},clickable:{default:!1,description:"Set to true if a card is supposed to trigger an action."},children:{default:null,description:"Pass any children you want in a card."}});var Dl=n(({title:e,links:t,...r})=>a(mt,{title:e,flexColumn:!0,flexWrap:!0,...r,children:a(p,{ml7:!0,ml0_s:!0,alignStart:!0,flexColumn:!0,children:t.map(o=>a(ke,{mb2:!0,children:o.text},o.text))})}),"ListCard");M(Dl,{title:{default:"",description:"To define a list card title."},links:{default:[],description:"Pass an array of strings to generate the list of links."}});var bg=n(e=>{if(typeof e!="string")return e;let t=e.split(`
`);for(;t.length&&t[0].trim()==="";)t.shift();for(;t.length&&t[t.length-1].trim()==="";)t.pop();if(!t.length)return"";let r=t[0].length-t[0].trimStart().length;return t.map(o=>o.slice(r)).join(`
`)},"unindentCode"),yg=w.ls1.pa1.inlineBlock.code(),vg=w.pv3.ph5.block.code(),xg={br2:!0,pre:!0,scroll:!0,bgLevel5:!0,fMono:!0,fs7:!0},Yt=n(({children:e,unindent:t,language:r="jsx",...o})=>{let i=typeof e=="string",s=i&&e.split(`
`).length>1;return a(s||!i?vg:yg,{...xg,mh1:!s,style:s?{lineHeight:"1.2rem",letterSpacing:"0.15em"}:{},language:r||"jsx",...o,children:t?bg(e):e})},"Code");M(Yt,{language:{type:"string",description:"Specifies the programming language passed to the code element"},unindent:{type:"bool",description:"Makes the content of the component be unindented"},children:{type:"any",description:"Pass your code content as children."},props:{type:"any",description:"Pass some props to your Code container."}});K();var wg=w.br50p.flexShrink0.alignCenter.justifyCenter.div(),ql=n(({startColor:e="var(--grey10)",endColor:t="transparent",stroke:r,strokeWidth:o=20,radial:i,radius:s=60,completion:l,...c})=>{let d=Math.round(l)*360/100,u=s-o;return a(p,{justifyCenter:!0,alignCenter:!0,relative:!0,children:[a(wg,{style:{background:`${i?"radial-gradient(transparent 0%, #1e1e1e 70%), ":""}conic-gradient(${t} 0deg, ${e} ${d}deg, ${t} ${d}deg)`,height:`${s}px`,width:`${s}px`},...c}),r&&a(p,{absolute:!0,br50p:!0,style:{background:"#1e1e1e",height:`${u}px`,width:`${u}px`}})]})},"ConicGraph");M(ql,{startColor:{type:g.string,description:"Set the start color of the conic gradient.",default:"var(--grey10)"},endColor:{type:g.string,description:"Set the end color of the conic gradient.",default:"transparent"},stroke:{type:g.boolean,description:"Display the stroke style.",default:!1},strokeWidth:{type:g.number,description:"Set the stroke width.",default:20},radial:{type:g.boolean,description:"Display the radial gradient style.",default:!1},radius:{type:g.number,description:"Set the radius size of the graph.",default:60},completion:{type:g.number.isRequired,description:"Set the percentage of completion of the graph."},props:{description:"Pass any props to your component."}});var Cr=class e extends Error{static{n(this,"HasuraError")}constructor({extensions:t,message:r,...o},i){super(r,i),Object.assign(this,o),Object.assign(this,t),Error.captureStackTrace?.(this,e)}},Rl=n(e=>({debug:t,address:r,log:o,...i})=>{o||(o=t?console.debug:()=>{});let s=new Map,l=new Map,c=n(()=>{let k=Math.random().toString(36).slice(2);return s.has(k)?c():k},"getId"),d=n(k=>{l.clear();for(let[D,{reject:T,noCleanup:X}]of s)X||v.delete(D),s.delete(D),T(k);return k},"rejectAllPending"),u=n((k,D={})=>{D.duration=Date.now()-k.start,D.size=k.size,D.name=k.query,D.id=k.id,o("query",D),s.delete(k.id),k.noCleanup||v.delete(k.id)},"end"),m=n((k,D,T)=>k?(u(k,{payload:D,type:"error"}),s.delete(T),k.reject(new Cr(D.errors[0],t&&{cause:k.cause}))):o("missing-handler",{id:T,type:"error"}),"messageFail"),f=n((k,D,T)=>{if(k==='{"type":"ka"}')return;let{type:X,payload:V,id:Q}=JSON.parse(k),j=s.get(Q);switch(j&&(j.size+=k.length),o("raw",k),X){case"connection_ack":return D(V);case"connection_error":let Y=d(new Cr({errors:[V]}));return T(Y);case"data":if(V.errors)return m(j,V,Q);let te=l.get(Q);if(!te)return j?j.payload=V:o("missing-handler",{id:Q,type:"error"});te(V.data),j&&(u(j,{type:X,payload:V}),j.resolve());return;case"error":return m(j,V,Q);case"complete":return j?(u(j,{type:X,payload:V}),j.resolve(j.payload&&j.payload.data)):void 0}},"handleMessage"),y=n((k,D)=>d(new Cr({message:`WebSocket connection ${D}`,event:k})),"handleFail"),h=e(r),v=new Map,I=n(async(k,D,T,X)=>{await L;let V={id:k,size:0,query:T,start:Date.now(),noCleanup:X},Q=new Promise((j,Y)=>{V.resolve=j,V.reject=Y});return t&&(V.cause=Error("hasuraClient.exec")),s.set(k,V),v.set(k,{payload:D,name:T}),o("start",{id:k,payload:D}),h.send(`{"type":"start","id":"${k}","payload":${D}}`),Q},"exec"),_=n((k,D)=>I(c(),k,D),"runFromString"),q=n((k,D,T)=>{let X=c();return l.set(X,k),{execution:I(X,D,T,!0),unsubscribe:n(()=>{l.delete(X),v.delete(X),o("stop",{id:X}),h.send(`{"type":"stop","id":"${X}"}`)},"unsubscribe")}},"subscribeFromString"),R=n(()=>new Promise((k,D)=>{h.on("error",T=>D(y(T,"failed"))),h.on("close",T=>D(y(T,"close"))),h.on("message",T=>f(T,k,D))}).then(()=>E=!0),"getConnection"),E,L=R(),H=n(async({adminSecret:k,token:D,role:T,headers:X})=>{let V=v,Q=E;Q&&(h.close(),h=e(r),L=R(),v=new Map,E=!1),h.readyState||await new Promise(Y=>h.on("open",Y));let j={headers:k?{"x-hasura-admin-secret":k,...X}:{Authorization:`Bearer ${D}`,...X}};return T&&(j.headers["x-hasura-role"]=T),h.send(JSON.stringify({type:"connection_init",payload:j})),Q&&L.then(()=>{for(let[Y,{payload:te,name:Ce}]of V)I(Y,te,Ce)}),L},"connect");return(i.adminSecret||i.token)&&H(i),{ws:h,connect:H,connection:L,runFromString:_,subscribeFromString:q,run:n((k,D)=>_(JSON.stringify({query:k,variables:D})),"run"),subscribe:n((k,D,T)=>q(k,JSON.stringify({query:D,variables:T})),"subscribe")}},"buildClient");var Ml=Rl(e=>{let t=new WebSocket(e,"graphql-ws");return t.on=(r,o)=>t.addEventListener(r,i=>o(i.data)),t});var{client:Tl,prepare:S,model:z}=Oi(Ml({address:"wss://01.gritlab.ax/api/graphql-engine/v1/graphql",log:n((e,t)=>{e!=="raw"&&(e==="complete"||e==="error")&&Ri(`hasura-${e}`,t)},"log")})),Me=n(e=>(t,r)=>le(e,t,[t?.offset,t?.limit,...r]),"useFilteredQuery");K();var{now:xa}=Date,ce,Be={set:n((e,t)=>t?localStorage[e]=t||"":localStorage.removeItem(e),"set"),del:n(e=>localStorage.removeItem(e),"del"),get:n(e=>localStorage[e],"get")},Ig=n(e=>(e.length%4?`${e}${"=".repeat(4-e.length%4)}`:e).replace(/-/g,"+").replace(/_/g,"/"),"base64urlUnescape"),wa=Number(Be.get("timeOffset"))||0;Date.now=()=>xa()+wa;setTimeout(async()=>{let e=xa(),t=await fetch("/api/auth/now");if(t.status!==200)return;let r=xa();wa=(await t.json()||0)-r+Math.round((r-e)/2),Be.set("timeOffset",wa)},2e3);var Ll=n(e=>{if(!e)throw Error("Missing credentials");try{return JSON.parse(atob(Ig(e.split(".")[1])))}catch{return{error:"token invalid"}}},"decode"),va=Be.get("hasura-jwt-token");va&&(ce={token:va,payload:Ll(va)},eo(ce.payload));var kg=n(e=>e?.["https://hasura.io/jwt/claims"],"getClaims"),Sg=n(e=>kg(e)?.["x-hasura-allowed-roles"]||[],"getRoles"),Cg=n(e=>{let t=Sg(e);return t.includes("admin")?"admin":t.includes("campus_admin")?"campus_admin":"user"},"defineHighestRole"),_g=n((e,t)=>{try{return JSON.parse(e)}catch{return{error:e||t.statusText}}},"parseBody"),Ia=n(async(e,t)=>{let r=await fetch(e,t);return _g(await r.text(),r)},"fetchJson"),jl=n(e=>{for(let t of Object.keys(localStorage))t.startsWith(e)&&Be.del(t)},"cleanStoragePrefix"),$g=n(()=>jl("editor:"),"cleanEditorStorage"),ka=n(async()=>{let e=Be.get("hasura-jwt-token");Be.del("session"),Be.del("token-oauth-state"),Be.del("hasura-jwt-token"),Be.del("admin-jwt-token"),$g(),jl("graphiql:"),e&&await G.catch(Ia("/api/auth/expire",{headers:{"x-jwt-token":e}}),"expire-token"),await Ia("/api/auth/signout",{headers:{"x-jwt-token":e},method:"POST"}),window.location.replace("/")},"signOut"),Nl=n(async e=>{if(!ce||ce.error)throw Be.set("redirect-uri",window.location.pathname),ce?ce.error:Error("Missing credentials");let{token:t,payload:r}=ce,o=ce.payload.exp*1e3-Date.now();if(!e&&o>0)return{token:t,payload:r};let i=await G.async(Ia("/api/auth/refresh",{headers:{"x-jwt-token":t}}),"refresh-token",{token:t});if(!i||i.error){G.error("auth-refresh-failed",{message:i?.error});let l=Error("Refresh token failed");throw l.reason=i?.error,l}Be.set("hasura-jwt-token",i);let s=Ll(i);return{token:i,payload:s}},"getToken"),Ol=n((e,t)=>{let r=window.location.pathname.startsWith("/intra/")?"user":Cg(t);return console.log(`connect ${r} to hasura client`),Tl.connect({token:e,role:r})},"connectDb"),_r=new Set,Sa=n(async()=>{try{let{token:e,payload:t}=await Nl(!0);await Ol(e,t),ce={token:e,payload:t};for(let r of _r)r({token:e,payload:t});Fl(t)}catch(e){ce={...ce,error:e};for(let t of _r)t(ce)}},"refreshToken"),Pl,Fl=n(({exp:e})=>{console.log("token expires in",e*1e3-Date.now()),clearTimeout(Pl),Pl=setTimeout(Sa,e*1e3-Date.now())},"loopRefresh"),lS=n(()=>Ca()?.token,"useToken");var Ca=n(()=>{let[e,t]=C(ce);return W(()=>(_r.add(t),e!==ce&&t(ce),()=>_r.delete(t)),[t]),e},"useAuth"),cS=Nl().then(({token:e,payload:t})=>(Fl(t),Ol(e,t).then(()=>(ce={token:e,payload:t},eo(ce.payload),ce)))).catch(e=>{ce={...ce,error:e};for(let t of _r)t(ce);return ce});K();var Ag="id login email",Eg=`
  id
  login
  discordId
  discordLogin
  profile
  email
  firstName
  lastName
  avatarUrl
  labels {
    labelId
    labelName
  }
  roles {
    id
    slug
    name
  }
  records {
    startAt
    message
    endAt
    type {
      isPermanent
      canAccessPlatform
    }
  }
  createdAt
  updatedAt
  public { campus canAccessPlatform }
  auditRatio
`,gS=S(`
  mutation update_user_attrs($id: Int!, $changes: jsonb!) {
    update_user(where: { id: { _eq: $id } }, _append: { attrs: $changes }) {
      affected_rows
    }
  }
`),Dg="https://hasura.io/jwt/claims",qg=n((e,t)=>{let r=e[Dg],o=r["x-hasura-default-role"]==="admin"||(r["x-hasura-allowed-roles"]||[]).includes("admin");return!t||o?o:(r["x-hasura-allowed-roles"]||[]).includes(`campus_${t}`)},"isAdmin"),Rg=z("user")(Eg),bS=z("user")(Ag),yS=n(e=>{let t=Ca(),r=t?.payload,o=Number(r?.sub)||null,i=Rg.useSubscribe(o),s=!(Ve(i)||Ni(i)),l=r&&qg(r,e),c=i?.roles?.some(({slug:u})=>u===`campus_admin_${e}`||u==="admin"),d=s&&e&&r&&(!l||!c);return W(()=>d&&Sa(),[d]),t?.error?{[we]:t.error}:s?d?{[De]:!0}:e&&!c?{[we]:Error("Unauthorized user")}:i:i},"useUser");var Mg=`
  id name type attrs childrenRelation { id index key child { id name } }
`,Tg=`
  id
  name
  type
  attrs
  campus
  referenceId
  referencedAt
  reference { name id campus updatedAt }
  paths { path }
  author {
    id
    profile
    attrs
    firstName
    lastName
  }
  parents {
    key
    parent {
      id
      name
      type
      childrenRelation { childId key child {type} }
    }
  }
  childrenRelation {
    id
    index
    key
    attrs
    paths { path }
    parent { type }
    child {
      id
      name
      type
      attrs
    }
  }
  authorId
  createdAt
  updatedAt
`,Pg=z("object")(Tg),IS=z("object")(Mg),kS=Me(Pg.getPaginatedWithCount),Lg=`
  id
  parentId
  childId
  attrs
  key
  index
`,SS=z("object_child")(Lg),CS=S(`
  query get_paths($objectId: Int!) {
    path(where: { objectId: {_eq: $objectId}}) {
      path
    }
  }
`),_S=S(`
  query get_children_id($parentId: Int!) {
    object_child(where: { parentId: { _eq: $parentId } }) {
      child {
        id
        children: childrenRelation_aggregate(limit: 1) {
          aggregate {
            count
          }
        }
      }
    }
  }
`),$S=S(`
  query get_path_history($where: path_bool_exp!) {
    path(where: $where) {
      path_archives(order_by: { createdAt: desc }) {
        status
        index
      }
      path
      objectId
      objectChildId
    }
  }
`),AS=S(`
  query get_children_path($childrenIds: [Int!]!) {
    path(where: { parentId: { _in: $childrenIds } }) {
      path
      objectId
      objectChildId
    }
  }
`),{use:ES}=S(`
  query get_reference_children($parentId: Int!) {
    object_child(
      where: { parentId: { _eq: $parentId } }
      order_by: { index: asc }
    ) {
      key
      attrs
      child {
        name
        type
      }
    }
  }
`),DS=S(`
  mutation add_objects_to_duplicate($objects: [object_insert_input!]!) {
    insert_object(objects: $objects) {
      returning {
        id
        referenceId
        attrs
      }
    }
  }
`),jg=S(`
  query all_campuses {
    object(where: { type: { _eq: "campus" } }) {
      name
    }
  }
`),Bl=jg.use,qS=S(`
  query object_for_edit($id: Int!) {
    object(where: { id: { _eq: $id } }) {
      id
      name
      type
      attrs
      campus
      referenceId
      referencedAt
      referencePath
      updatedAt
      paths {
        path
      }
      reference {
        name
        authorId
        campus
        updatedAt
      }
      authorId
      authorLogin
      parents {
        parentId
        parent {
          name
        }
      }
      childrenRelation(order_by: { index: asc }) {
        id
        index
        key
        paths {
          path
        }
        attrs
        childId
        child {
          id
          type
          name
          campus
          authorId
          attrs
          referenceId
          referencedAt
          childrenRelation {
            id
            index
            key
            paths {
              path
            }
            attrs
            childId
            child {
              id
              type
              name
              campus
              attrs
              referenceId
              referencedAt
              childrenRelation {
                id
                index
                key
                attrs
                paths { path }
                parent { type }
                child {
                  id
                  name
                  type
                  attrs
                }
              }
              reference {
                name
                updatedAt
              }
            }
          }
          reference {
            name
            authorId
            updatedAt
          }
        }
      }
    }
  }
`),RS=S(`
  query get_child_for_edit($relationId: Int!, $childId: Int!) {
    object_child(where: { id: { _eq: $relationId } }) {
      attrs
    }
    object(where: { id: { _eq: $childId } }) {
      attrs
    }
  }
`),MS=S(`
  query get_children_relation_attrs($relationIds: [Int!]!) {
    object_child(where: { id: { _in: $relationIds } }) {
      id
      attrs
    }
  }
`),TS=n(({relations:e})=>S(`
mutation update_object_children {
  ${e.map(t=>`update_${t.id}: update_object_child(
    where: {id: {_eq: ${t.id}}},
    _set: {index: ${t.index}}
  ) {
    affected_rows
  }`).join(`
`)}
}`),"updateRelations"),En=`
    update_object(
      where: { id: { _eq: $moduleId } }
      _append: { attrs: $graphAttr }
    ) {
      affected_rows
    }
`,PS=S(`
  mutation update_graph_attr(
    $moduleId: Int!
    $graphAttr: jsonb!
  ) {
    ${En}
  }
`),LS=S(`
  mutation remove_child_relation_and_update_graph_attr(
    $childRelationIds: [Int!]!
    $moduleId: Int!
    $graphAttr: jsonb!
  ) {
    delete_object_child(where: { id: { _in: $childRelationIds } }) {
      affected_rows
    }

    ${En}
  }
`),jS=S(`
  mutation add_child_relation_and_update_graph_attr(
    $childRelation: object_child_insert_input!
    $moduleId: Int!
    $graphAttr: jsonb!
  ) {
    insert_object_child_one(object: $childRelation) {
      id
    }

    ${En}
  }
`),NS=S(`
  mutation update_child_relation_and_update_graph_attr(
    $childId: Int!
    $childKey: String!
    $moduleId: Int!
    $graphAttr: jsonb!
  ) {
    update_object_child(
      where: { id: { _eq: $childId } }
      _set: { key: $childKey }
    ) {
      affected_rows
    }

    ${En}
  }
`),OS=S(`
  subscription subscribeToObject($objectId: Int!) {
    object_by_pk(id: $objectId) {
      updatedAt
      attrs
      type
    }
  }`);var Ng=`
id
userId
login
user {
  firstName
  lastName
  email
}
records: userRecords (
  order_by: { endAt: desc_nulls_first }
  limit: 1
) {
  endAt
  startAt
}
invites {
  groupId
}
`,Og=`
id
userId
login
user: user_view {
  firstName
  lastName
  avatarUrl
}
auditRatio: userAuditRatio
records: userRecords (
  order_by: { endAt: desc_nulls_first }
  limit: 1
) {
  endAt
  startAt
}
recordType: records (
  order_by: { endAt: desc_nulls_first }
  limit: 1
) {
  endAt
  startAt
  typeName
}
event_user {
  level
}
invites {
  groupId
}
`,Fg=z("object_availability")(Og),US=Me(Fg.getPaginatedWithCount),Bg=z("object_availability")(Ng),zS=Me(Bg.getPaginatedWithCount),GS=S(`
query ($userIds: [Int!]!, $eventId: Int!, $path: String!) {
  object_availability_aggregate(where: {
    eventId: { _eq: $eventId }, 
    userId: { _nin: $userIds }, 
    path: { _eq: $path } 
  }) 
  {
    aggregate { count }
  }
}
`);var _a=`
  id
  updatedAt
  createdAt
  type
  attrs
  grade
  isLast
  path
  eventId
`,KS=S(`
query get_archived_progress($eventId:Int!, $userId:Int!) {
  progress(where: {
  	eventId: {_eq: $eventId }
    userId: {_eq: $userId }
    grade:{ _gte: 1 }
    pathByPath: { objectChildId: { _is_null: true } }
  }) {
    path
    grade
    archivedAttrs: pathByPath { path_archives { attrs } }
  }
}`),QS=S(`
  query all_progresses($campus: String!) {
    progress(where: { campus: { _eq: $campus } }) {
      id
      createdAt
      updatedAt
      path
      grade
      isDone
      group {
        captainLogin
      }
      event {
        id
        endAt
        createdAt
      }
    }
  }
`),YS=S(`
  query get_object_progresses($where: progress_bool_exp!) {
    progress(where: $where) {
      id
      path
    }
  }
`),JS=S(`
  query get_object_progresses_light($where: progress_bool_exp!) {
    progress(where: $where, limit: 1) {
      id
      path
    }
  }
`),ZS=S(`
  query last_progress_by_id($id: bigint!) {
    progress(where: { id: { _eq: $id } }) {
      id
      createdAt
      updatedAt
      path
      version
      eventId
      groupId
      grade
      isDone
      group {
        captainLogin
      }
      event {
        id
        endAt
        createdAt
      }
    }
  }
`),$a=z("result")(_a);$a.selection=z("result")(`
  ${_a}
  user { login profile firstName lastName id }
`);$a.version=z("result","version","String")(`
  ${_a}
`);var eC=n((e,t)=>le($a.get,e,t),"useGetResultsWhere"),tC=S(`
  subscription ($id: bigint!) {
    progress(where: { id: { _eq: $id } }) {
      results(limit: 1) {
        attrs
      }
    }
  }
`),rC=S(`
  query get_task($where: task_bool_exp!) {
    task(where: $where, limit: 1) {
      attrs
      output
      status
    }
  }
`);var sC=z("registration_user")(""),lC=S(`
  mutation remove_user_from_registration($userId: Int!, $registrationId: Int!) {
    delete_registration_user(
      where: {
        _and: [
          { userId: { _eq: $userId } }
          { registrationId: { _eq: $registrationId } }
        ]
      }
    ) {
      affected_rows
    }
  }
`),cC=S(`
  mutation remove_user_from_event($userId: Int!, $eventId: Int!) {
    delete_event_user(
      where: {
        _and: [{ userId: { _eq: $userId } }, { eventId: { _eq: $eventId } }]
      }
    ) {
      affected_rows
    }
  }
`),Wg=`
  id
  startAt
  endAt
  attrs
  eventJoinedAt
  objectId
  path
  campus
  event {
    id
    code
    endAt
    createdAt
    users {
      id
      login
      attrs
    }
    parentId
  }
  object {
    type
    name
  }
  parent { id }
  children { id }
  users {
    id
    login
    attrs
    position
  }
`,dC=z("registration")(Wg),Wl=`
id
code
endAt
createdAt
startAt
description
children {
  id
}
users: users_aggregate {
  aggregate {
    count
  }
}
results(where: {type: {_eq: "admin_selection"}}) {
  grade
}
parentId
`,Ul=`
  path
  pathByPath {
    path_archives(order_by: { createdAt: desc }, limit: 1) { status }
  }
  ${Wl}
  registrations {  
    capacity
    labelId
    users: users_aggregate {
      aggregate {
        count
      }
    }
  }
  parent {
    id
    objectId
    object {
      name
    }
  }
`,uC=S(`
  query get_event_by_path($paths: [String!]!) {
    event(where: { path: { _in: $paths } }) {
      id
    }
  }
`),pC=S(`
  query get_event_for_event_page($eventId: Int!) {
    event(where: { id: { _eq: $eventId } }) {
      ${Ul}
    }
  }
`),mC=S(`
  query get_events_for_event_page(
    $eventId: Int!
    $childEventId: Int
  ) {
    event(where: { id: { _eq: $eventId } }) {
      ${Ul}
    }
    childEvent: event(
      where: { id: { _eq: $childEventId } }
    ) {
        id
    }
  }
`),hC=z("event_user","eventId","Int")("userId createdAt userLogin id"),zl=`
id
createdAt
startAt
endAt
path
description
object {
  id
  type
  name
  attrs
}
registrations (order_by: { startAt: asc }) {
  id
  startAt
  endAt
  eventJoinedAt
  capacity
  labelId
  labelName
  users {
    id
    login
    position
    attrs
  }
}
parentId
users: usersRelation {
  id
  userId
  userLogin
  userName
  cohorts { 
    labelName 
    labelId 
  }
}
children {
  id
}
`,Gl=z("event")(zl);Gl.forEventsList=z("event")(`
  id 
  startAt 
  path 
  pathByPath { path_archives { status } }
  object { id name type }
`);Gl.light=S(`
  query ($where: event_bool_exp!) {
    event(where: $where, limit: 1) {
      id
      startAt
      path
    }
  }
`);var fC=S(`
  mutation ($events: [event_insert_input!]!) {
    insert_event(objects: $events) {
      returning {
        id
        path
      }
    }
  }
`),Ug=S(`
  query ($eventId: Int!, $path: String!) {
    event(
      where: { path: { _eq: $path }, id: { _eq: $eventId } }
    ) {
      ${Wl}
    }
  }
`),gC=n((e,t)=>le(Ug.one,e,t),"useGetEventForSubeventGroups"),bC=S(`
  query get_event_dates($path: String!, $now: timestamptz!, $userId: Int!) {
    registration(
      where: {
        _or: [
          { _and: [{ path: { _eq: $path } }, { endAt: { _gt: $now } }] }
          {
            _and: [
              { path: { _eq: $path } }
              { users: { id: { _eq: $userId } } }
            ]
          }
        ]
      }
    ) {
      id
      startAt
      endAt
      eventJoinedAt
      capacity
      object {
        attrs
      }
      users_aggregate {
        aggregate {
          count
        }
      }
      users(where: { id: { _eq: $userId } }) {
        id
        position
        createdAt
        registeredAt
      }
      eventId
      event {
        id
        users(where: { id: { _eq: $userId } }) {
          id
        }
        endAt
        startAt
        description
        progresses(where: { userId: { _eq: $userId } }) {
          grade
          results {
            attrs
          }
        }
      }
    }
  }
`),zg=S(`
query event_for_edit ($eventId: Int!) {
  event (where: {
    _or: [
      { id: { _eq: $eventId } },
      { parentId: { _eq: $eventId } },
    ]
  }) { ${zl} }
}
`),yC=n(({eventId:e},t)=>le(zg,{eventId:e},t),"getEventsForEvent"),vC=S(`
  query get_onboarding_other_campus_ongoing_registrations_with_user(
    $path: String!
    $now: timestamptz!
    $userId: Int!
    $type: String!
  ) {
    registration(
      where: {
        _and: [
          { object: { type: { _eq: $type } } }
          { _not: { event: { endAt: { _lt: $now } } } }
          { _not: { path: { _eq: $path } } }
          { users: { id: { _eq: $userId } } }
        ]
      }
    ) {
      id
      eventJoinedAt
      capacity
      event {
        startAt
        endAt
      }
    }
    user_public_view(where: { id: { _eq: $userId } }) {
      campus
    }
  }
`),xC=S(`
  query ($where: event_bool_exp!) {
    event(where: $where) {
      id
      path
      startAt
      endAt
      registrations {
        startAt
        endAt
        eventJoinedAt
      }
    }
  }
`),wC=S(`
  query ($userId: Int!, $now: timestamptz!) {
    registration(
      where: {
        event: {
          usersRelation: { userId: { _eq: $userId } }
          endAt: { _gt: $now }
          parentId: { _is_null: true }
        }
      }
    ) {
      id
      eventId
      eventJoinedAt
      objectId
    }
  }
`),IC=S(`
  query ($userId: Int!, $parentIds: [Int!]!) {
    registration(
      where: { event: { parentId: { _in: $parentIds } } }
      order_by: { eventJoinedAt: asc }
    ) {
      endAt
      eventJoinedAt
      id
      path
      object {
        name
      }
      eventId
      event {
        endAt
      }
      users(where: { id: { _eq: $userId } }) {
        id
      }
    }
  }
`),Gg=S(`
  query get_user_events($userId: Int!, $campus: String!) {
    user(where: { id: { _eq: $userId } }) {
      id
      login
      firstName
      lastName
      avatarUrl
      attrs
      auditsAttributed: audits_aggregate(
        where: { closureType: { _is_null: true } }
        order_by: { createdAt: desc }
      ) {
        aggregate {
          count
        }
      }
      lastAuditAttributed: audits(order_by: { createdAt: desc }, limit: 1) {
        createdAt
      }
      roles {
        id
        name
        slug
      }
      labels {
        labelId
        labelName
        eventId
      }
      records {
        id
        createdAt
        updatedAt
        startAt
        message
        endAt
        authorId
        authorLogin
        author {
          firstName
          lastName
        }
        type {
          type
          canAccessPlatform
          canBeAuditor
          isPermanent
          label
        }
      }
      createdAt
      updatedAt
      public {
        canAccessPlatform
        canBeAuditor
      }
      auditRatio
      totalUp
      totalUpBonus
      totalDown
      results(where: { object: { type: { _eq: "administration" } } }) {
        path
        attrs
        createdAt
      }
    }
    event(
      where: { users: { id: { _eq: $userId } }, campus: { _eq: $campus } }
    ) {
      id
      path
      parentId
      createdAt
      startAt
      endAt
      object {
        type
        name
        attrs
        children: childrenRelation {
          key
          attrs
          child {
            type
          }
        }
      }
    }
    transaction(
      order_by: [{ type: desc }, { amount: desc }]
      distinct_on: [type]
      where: { userId: { _eq: $userId }, type: { _like: "skill_%" } }
    ) {
      type
      amount
    }
    task_anonymisation: task_aggregate(
      where: { userId: { _eq: $userId }, name: { _eq: "delete_gitea_user" } }
    ) {
      aggregate {
        count
      }
    }
  }
`),Hg=S(`
  query get_user_registrations(
    $userId: Int!
    $campus: String!
    $now: timestamptz!
  ) {
    registration(
      where: {
        users: { id: { _eq: $userId } }
        campus: { _eq: $campus }
        _or: [
          { event: { startAt: { _lt: $now } } }
          { eventJoinedAt: { _lt: $now } }
          { _not: { event: { users: { id: { _eq: $userId } } } } }
        ]
      }
    ) {
      id
      path
      capacity
      eventJoinedAt
      event {
        id
        startAt
        users(where: { id: { _eq: $userId } }) {
          createdAt
        }
      }
      object {
        attrs
        name
        type
      }
      users(where: { id: { _eq: $userId } }) {
        position
      }
    }
  }
`),Vg=S(`
  query progress_event_data(
    $userId: Int!
    $eventId: Int
    $eventIds: [Int!]!
    $campus: String!
  ) {
    event(
      where: {
        users: { id: { _eq: $userId } }
        campus: { _eq: $campus }
        parentId: { _eq: $eventId }
      }
    ) {
      id
      path
      parentId
      createdAt
      startAt
      endAt
      children {
        id
      }
      object {
        type
        name
        attrs
      }
    }
    group(
      where: {
        eventId: { _in: $eventIds }
        members: { userId: { _eq: $userId } }
      }
    ) {
      path
      captainId
      status
      members {
        userId
        userLogin
        accepted
      }
      id
      createdAt
      eventId
      updatedAt
    }
    audit(
      where: {
        group: {
          members: { userId: { _eq: $userId } }
          eventId: { _in: $eventIds }
        }
      }
      order_by: { createdAt: desc }
    ) {
      groupId
      attrs
      closureType
      resultId
      createdAt
    }
    progress(
      order_by: [
        { path: desc }
        { eventId: desc }
        { grade: desc }
        { createdAt: desc }
      ]
      where: {
        userId: { _eq: $userId }
        _or: [
          { event: { parentId: { _eq: $eventId } } }
          { eventId: { _eq: $eventId } }
        ]
      }
    ) {
      id
      path
      grade
      isDone
      version
      eventId
      objectId
      object {
        type
      }
      createdAt
      updatedAt
      archivedAttrs: pathByPath {
        path_archives {
          attrs
        }
      }
    }
    record(where: { userId: { _eq: $userId } }) {
      id
      message
      type {
        label
        type
        isPermanent
      }
      createdAt
      startAt
      endAt
    }
    skills: transaction(
      where: { userId: { _eq: $userId }, type: { _like: "skill_%" } }
    ) {
      amount
      invalidatedAt
      type
    }
    transaction(
      where: {
        userId: { _eq: $userId }
        type: { _eq: "xp" }
        _or: [
          { originEventId: { _in: $eventIds } }
          { eventId: { _in: $eventIds } }
        ]
      }
    ) {
      amount
      isBonus
      objectId
      path
      userId
      user {
        login
      }
      object {
        name
        type
      }
      eventId
      originEventId
      attrs
      createdAt
      invalidatedAt
      invalidationReason
    }
    event_user(
      where: { userId: { _eq: $userId }, eventId: { _eq: $eventId } }
    ) {
      level
      userId
      createdAt
    }
  }
`),Xg=S(`
  query query_events_not_in($userId: Int!, $eventId: Int, $campus: String!) {
    event(
      where: {
        _not: { users: { id: { _eq: $userId } } }
        campus: { _eq: $campus }
        parentId: { _eq: $eventId }
      }
    ) {
      id
      path
      parentId
      createdAt
      startAt
      endAt
      children {
        id
      }
      object {
        type
        name
        attrs
      }
      registrations {
        id
        capacity
        endAt
        eventJoinedAt
        labelId
        labelName
        startAt
        users {
          id
          position
        }
      }
    }
  }
`),kC=S(`
  query getSubEvents($eventId: Int!, $path: String!) {
    event(
      where: { parentId: { _eq: $eventId }, path: { _eq: $path } }
      order_by: { id: asc }
    ) {
      id
      startAt
    }
  }
`),SC=S(`
  query getFutureEvents($userId: Int!) {
    event(
      where: {
        startAt: { _gt: "{{now}}" }
        registrations: { registrationUsers: { userId: { _eq: $userId } } }
        object: { type: { _in: ["module", "piscine"] } }
      }
    ) {
      startAt
      endAt
      object {
        name
        type
      }
      id
      path
      registrations {
        registrationUsers {
          userId
        }
      }
      parent {
        id
      }
    }
  }
`),CC=S(`
  query get_user_data_for_profile_dashboard(
    $userId: Int!
    $campus: String!
    $eventId: Int!
    $fourWeeksAgo: timestamptz!
  ) {
    activeEvents: event(
      where: {
        startAt: { _lt: "now" }
        endAt: { _gt: "now" }
        users: { id: { _eq: $userId } }
        parentId: { _eq: $eventId }
      }
      order_by: { endAt: asc }
    ) {
      id
      path
      parentId
      object {
        name
        type
      }
      endAt
    }
    activeGroups: group(
      where: {
        members: { userId: { _eq: $userId } }
        campus: { _eq: $campus }
        status: { _in: [working, setup] }
        eventId: { _eq: $eventId }
        _not: { pathByPath: { path_archives: { status: { _eq: deleted } } } }
      }
      order_by: { updatedAt: desc }
    ) {
      path
      updatedAt
      eventId
      status
      path
      captainId
      members {
        userId
        accepted
      }
      object {
        name
        attrs
      }
    }
    lastCheckpointLevel: transaction(
      where: { userId: { _eq: $userId }, type: { _eq: "skill_prog" } }
      order_by: { amount: desc }
      limit: 1
    ) {
      amount
      eventId
      type
      originEventId
      originEvent {
        path
      }
    }
    lastSkill: transaction(
      where: {
        userId: { _eq: $userId }
        type: { _ilike: "skill_%", _neq: "skill_prog" }
      }
      order_by: { createdAt: desc }
      limit: 1
    ) {
      amount
      eventId
      type
      createdAt
      originEventId
      originEvent {
        path
      }
    }
    eventsInCalendar: event(
      where: {
        campus: { _eq: $campus }
        _or: [{ startAt: { _gt: "now" } }, { users: { id: { _eq: $userId } } }]
      }
    ) {
      id
      path
      startAt
      endAt
      users(where: { id: { _eq: $userId } }) {
        id
      }
      object {
        id
        type
        name
      }
      parent {
        id
        users(where: { id: { _eq: $userId } }) {
          id
        }
        object {
          id
          name
          type
        }
      }
      results(limit: 1, order_by: { updatedAt: desc }) {
        id
        grade
        updatedAt
        path
      }
      registrations(limit: 1, order_by: { createdAt: asc }) {
        id
        startAt
        endAt
        capacity
        users(where: { id: { _eq: $userId } }) {
          id
          position
        }
        users_aggregate {
          aggregate {
            count
          }
        }
      }
    }
    latestTransactions: transaction(
      where: {
        userId: { _eq: $userId }
        type: { _eq: "xp" }
        _or: [
          { eventId: { _eq: $eventId } }
          {
            event: {
              parentId: { _eq: $eventId }
              object: { type: { _nin: ["module", "piscine"] } }
            }
          }
        ]
      }
      order_by: { createdAt: desc }
      limit: 100
    ) {
      id
      attrs
      amount
      eventId
      path
      objectId
      createdAt
      object {
        name
        type
      }
    }
    groupsAvailability: object_availability(
      where: {
        userId: { _eq: $userId }
        eventId: { _eq: $eventId }
      }
    ) {
      pathByPath {
        groups(where: { status: { _eq: setup }, updatedAt: { _gt: $fourWeeksAgo } }) {
          id
          eventId
          status
          captain {
            id
            login
          }
          updatedAt
          members {
            id
            userId
            userLogin
            accepted
            user { avatarUrl }
          }
          path
          object {
            id
            attrs
          }
        }
      }
    }
  }
`),_C=n(({userId:e,campus:t},r)=>le(Gg.all,{userId:e,campus:t},r),"getUserWithEvents"),$C=n(({userId:e,campus:t,now:r},o)=>le(Hg,{userId:e,campus:t,now:r},o),"getUserRegistrationsForAdmin"),AC=n(({userId:e,eventId:t,eventIds:r,campus:o},i)=>le(Vg.all,{userId:e,eventId:t,eventIds:r,campus:o},i),"getUserEventData"),EC=n(({userId:e,eventId:t,campus:r},o)=>le(Xg.all,{userId:e,eventId:t,campus:r},o),"getEventsUserNotIn");var MC=z("match")(`
  createdAt
  updatedAt
  id
  path
  userId
  matchId
  confirmed
`),TC=S(`
  mutation remove_match ($matchId: Int!){
    delete_match(where: {id: {_eq: $matchId}}) {
      affected_rows
    }
  }
`);var Kg=`
  content
  name
  authorId
  createdAt
  updatedAt
`,Hl=z("markdown","name","String"),NC=S(`
  mutation updatePrivacyPolicy($content: String!) {
    update_markdown(
      where: { name: { _eq: "privacy policy" } }
      _set: { content: $content }
    ) {
      affected_rows
    }
  }
`),OC=Hl("content"),FC=n((e,t)=>le(Hl(Kg).get,e,t),"useGetMarkdownWhere"),BC=S(`
  query privacy_policy {
    markdown(where: { name: { _eq: "privacy policy" } }) {
      content
      name
    }
  }
`),WC=S(`
  query audit_questions {
    markdown(where: { name: { _neq: "privacy policy" } }) {
      content
      name
    }
  }
`);var HC=z("transaction")(`
  id
  type
  userId
  amount
  attrs
  eventId
  objectId
`),VC=S(`
  query($eventId: Int!, $userId: Int!) {
    event_by_pk(id: $eventId) {
      xps(where: { userId: { _eq: $userId } }) {
        amount
        path
      }
    }
  }`),XC=S(`
  query($eventId: Int!, $path: String!, $userId: Int!) {
    event_by_pk(id: $eventId) {
      xps(where: {
        userId: {_eq: $userId}
        path:{_eq:$path}
      }) {
        amount
        path
        userId
        originEventId
      }
    }
  }
`),KC=S(`
  query ($userId: Int!, $startDate: timestamptz!, $endDate: timestamptz!, $eventId: Int!) {
    transaction(where: {
      _and: [
        { userId: { _eq: $userId } },
        { createdAt: { _gte: $startDate } },
        { createdAt: { _lte: $endDate } },
        { type: { _eq: "xp" } }
        { _or: [
          { eventId: { _eq: $eventId } }
          { _and: [
            { event: { parentId: { _eq: $eventId } } }
            { event: { object: { type: { _nin: ["module", "piscine"] } } } }
          ]}
        ]}
      ]
    }, order_by: { createdAt: desc }) {
      id
      amount
      createdAt
    }
  }
`),Vl=`
  userId: {_eq: $userId},
  type: {_eq: "xp"},
  _or: [
    { eventId: { _eq: $eventId } }
    { _and: [
      { event: { parentId: { _eq: $eventId } } }
      { event: { object: { type: { _nin: ["module", "piscine"] } } } }
    ]}
  ]
`,QC=S(`
  query ($userId: Int!, $limit: Int!, $eventId: Int!) {
    transaction(where: {
      ${Vl},
    }, order_by: {createdAt: desc}, limit: $limit) {
      id
      attrs
      amount
      eventId
      path
      objectId
      createdAt
      object { name type }
    }
  }
`),YC=S(`
  query ($userId: Int!, $eventId: Int!) {
    transaction_aggregate(where: {
      ${Vl}
    }) {
      aggregate { count }
    }
  }
`),JC=S(`
  query ($userId: Int!, $eventId: Int!, $path: String!) {
    transaction_aggregate(
      where: {
        user: { id: { _eq: $userId } }
        path: { _eq: $path }
        isBonus: { _eq: true }
        _or:[
          { originEventId: {_eq:$eventId}}
          { eventId: { _eq: $eventId }}
        ]
      }
    ) {
      aggregate {
        sum {
          amount
        }
      }
    }
  }
`),ZC=S(`
  query ($userId: Int!) {
    transaction(where: { 
      userId: { _eq: $userId }
      type: { _like: "skill_%" } 
    }) {
      id
      type
      amount
      path
      createdAt
      attrs
      invalidatedAt
      invalidationReason
      originEventId
      originEvent { 
        path 
        object { type name } 
      }
      object { name }
    }
  }
`),e_=S(`
  query ($eventId: Int!, $path: String!, $userId: Int!) {
    transaction(
      where: {
        eventId: { _eq: $eventId }
        userId: { _eq: $userId }
        path: { _eq: $path }
        type: { _eq: "xp"}
      }, order_by: {createdAt: desc}, limit: 1
    ) {
      id
      type
      amount
      createdAt
      attrs
      invalidatedAt
      invalidationReason
    }
  }
`);var Xl=`
id
campus
status
path
eventId
captainId
captainLogin
members {
  id
  userId
  userLogin
  accepted
  user {
    private {
      email
      lastName
      firstName
      avatarUrl
    }
  }
}
`,Kl=`
${Xl}
event {
  id
  endAt
  object {
    type
  }
  groups_aggregate {
    aggregate {
      count
    }
  }
}
pathByPath {
  path_archives(order_by: { createdAt: desc }, limit: 1) { status }
  parentId
}
createdAt
updatedAt
canceledAt
cancelReason
results {
  id
  grade
  type
  createdAt
  attrs
}
`,Qg=z("group")(Kl),o_=Me(Qg.getPaginatedWithCount),Yg=z("group")(Xl);Yg.member=z("group_user")("");var Aa=n((...e)=>`
  group(
    where: {
      members: { userId: { _eq: $userId } }
      campus: { _eq: $campus }
      status: { _in: [${e}] }
      _not: { pathByPath: { path_archives: { status: { _eq: deleted } } } }
    }
    order_by: { updatedAt: desc }
    limit: 1
  ) {
    path
    updatedAt
    eventId
    ${e.length>1?"status":""}
  }`,"groupFragment"),a_=S(`
query ($userId: Int!, $campus: String!) {
  workingGroup: ${Aa("working")}
  auditGroup: ${Aa("audit")}
  inactiveGroup: ${Aa("setup","finished")}
}`),i_=S(`
query query($groupId: Int!) {
  group(where: {id: {_eq: $groupId}}) {
    ${Kl}
  }
}
`),Ea=`{
  id
  auditorId
  auditorLogin
  auditorRole
  groupId
  code
  grade
  resultId
  createdAt
  updatedAt
  auditedAt
  endAt
  attrs
  closureType
  closureMessage
  closedAt
  auditor {
    private {
      firstName
      lastName
      attrs
      avatarUrl
    }
  }
}`,Jg=S(`
  query ($where: audit_bool_exp!, $orderBy: audit_order_by!, $groupId: Int!) {
    audits: audit(
      order_by: [$orderBy]
      where: $where
    ) ${Ea}
    totalCount: audit_aggregate(
      where: {groupId: {_eq: $groupId}}
    ) {
      aggregate {
        count
      }
    }
    currentCount: audit_aggregate(
      where: {
        groupId: {_eq: $groupId}
        _or: [
          {closureType: {_is_null: true}}
          {closureType: {_in:[succeeded, failed]}}
        ]
      }
    ) {
      aggregate {
        count
      }
    }
    unusedCount: audit_aggregate(
      where: {
        groupId: {_eq: $groupId}
        closureType: {_eq: unused}
      }
    ) {
      aggregate {
        count
      }
    }
    expiredCount: audit_aggregate(
      where: {
        groupId: {_eq: $groupId}
        closureType: {_eq: expired}
      }
    ) {
      aggregate {
        count
      }
    }
  }
`),s_=n((e,t)=>le(Jg.all,e,t),"useGetGroupAudits"),Zg=S(`
  query ($groupId: Int!) {
    audits: audit(
      order_by: {groupId: asc}
      where: { _and: [
        {groupId: {_eq: $groupId}}
        {closureType: {_eq: unused}}
      ]}
    ) ${Ea}
  }
`),l_=n((e,t)=>le(Zg,e,t),"useGetUnusedGroupAudits"),eb=S(`
  query ($groupId: Int!) {
    audits: audit(
      order_by: {groupId: asc}
      where: { _and: [
        {groupId: {_eq: $groupId}}
        {closureType: {_eq: expired}}
      ]}
    ) ${Ea}
  }
`),c_=n((e,t)=>le(eb,e,t),"useGetExpiredGroupAudits"),d_=S(`
query getGroupMembersInfos ($groupMembersIds: [Int!]!, $eventId: Int!, $path: String!, $groupId: Int!) {
  invites: group_user (where: {groupId: {_neq: $groupId} userId: {_in: $groupMembersIds} eventId: {_eq: $eventId} path: {_eq: $path} accepted: {_is_null: true}} distinct_on: userId) {
    userId
    groupId
  }
  records: record_public_view (where: {
    userId: {_in: $groupMembersIds}
  } order_by: { endAt: desc_nulls_first }) {
    userId
    endAt
  }
  levels: event_user(where: { 
    userId: {_in: $groupMembersIds}, 
    eventId: {_eq: $eventId}
  }) {
    level
    userId
  }
}
`);K();var tb=z("audit")(`
  id
  code
  updatedAt
  auditedAt
  endAt
  grade
  version
  auditorId
  auditorLogin
  auditorRole
  attrs
  resultId
  closureType
  closureMessage
  closedAt
  result {
    createdAt
  }
  groupId
  group {
    pathByPath {
      path_archives(order_by: { createdAt: desc }, limit: 1) { status }
      parentId
    }
    members {
      userId
    }
    eventId
    path
    captainLogin
    captainId
    status
  }
`),g_=Me(tb.getPaginatedWithCount),b_=S(`
  query events_for_audits($where: event_bool_exp!) {
    event(where: $where) {
      id
      createdAt
      path
      pathByPath {
        path
      }
      object {
        id
        name
      }
    }
  }
`),rb=S(`
  query ($groupId: Int!) {
    audit(where: { groupId: { _eq: $groupId } }) {
      id
      attrs
      version
      auditorLogin
      closureType
      closureMessage
      closedAt
      auditor {
        id
        canBeAuditor
        avatarUrl
      }
      grade
      groupId
      group {
        path
        eventId
        captain {
          login
          canAccessPlatform
        }
        members {
          userId
        }
        captainLogin
      }
      result {
        grade
      }
      endAt
    }
  }
`),y_=S(`
  query ($groupId: Int!) {
    audit(where: {_and: [
      {groupId: {_eq: $groupId}},
      {resultId: {_is_null:true}},
      {_or:[
        {closureType: {_is_null: true}},
        {closureType: {_in:[succeeded, failed]}}
      ]}
    ]}) {
      id
      auditorId
    }
  }
`),nb=S(`
  subscription group_audits_light_subscribe($groupId: Int) {
    audit(
      where: { groupId: { _eq: $groupId } }
      order_by: { updatedAt: desc }
      limit: 1
    ) {
      updatedAt
    }
  }
`),ob=`{auditorId: { _eq: $userId }},
  {_or: [
    {_and: [
      {resultId: {_is_null: true}},
      {grade: {_is_null: true}}
    ]},
    {grade: {_is_null: false}}
  ]}`,v_=S(`query ($userId: Int!) {
  audit(
    where: {_and: [ ${ob} ]}
    order_by: {grade: asc_nulls_first, endAt: asc_nulls_last, createdAt: asc}
  ) {
    id
    version
    grade
    endAt
    attrs
    closureType
    closureMessage
    closedAt
    group {
      captainLogin
      captain { canAccessPlatform }
      path
    }
    private {
      code
    }
    resultId
    result {
      grade
    }
  }
}`),x_=S(`
  mutation update_many_audit ($updates: [audit_updates!]!) {
    update_audit_many (updates: $updates) { affected_rows }
  }
`),ab=n(e=>e+1,"inc"),w_=n(({group:e})=>{let[t,r]=C(0),[o,i]=C(),s=rb.use({groupId:e.id},[e.id,t]);return W(()=>{let l=nb(()=>r(ab),{groupId:e.id});return l.execution.catch(i),l.unsubscribe},[e.id]),o?{[we]:o}:s},"useGroupAuditsLightSubscribe");var Da=`
  title
  instructions
  attempts
  games (order_by: {position: asc}) {
    id
    position
    overriden_points
    overriden_duration
    ref {
      name
      duration
      points
      id
    }
  }
`,__=z("toad_campaigns","id","uuid")(Da),$_=S(`
  subscription subscribeCampaignsAs($id:Int!) {
    toad_campaigns (where: {user_id: {_in: [$id, 1]}}) {
      id
      created_at
      user_id
      ${Da}
    }
  }
`),A_=S(`
  subscription subscribeCampaign($id:uuid!) {
    toad_campaigns (where: {id: {_eq: $id}}) {
      id
      created_at
      ${Da}
    }
  }
`),E_=z("toad_campaign_games")("id"),Ql=`
  id
  created_at
  campaign_id
  instructions
  started_at
  allowed_attempts
  games (order_by: { position: asc }) {
    id
    game_id
    name
    duration
    position
    points
    started_at
    results  (order_by: { level: asc }) {
      attempts
      level
    }
  }
`,Yl=`
  ${Ql}
  candidate_id
`,ib=`
  ${Ql}
  candidate {
    id
    login
    attrs
  }
`,Jl=z("toad_sessions","id","uuid")(Yl),D_=n((e,t)=>le(Jl.get,e,t),"useGetSessionWhere");Jl.admin=z("toad_sessions","id","uuid")(ib);var q_=S(`
  subscription subscribeSession($id:uuid!) {
    toad_sessions (where: {id: {_eq: $id}}) {
      ${Yl}
    }
  }
`),R_=z("toad_session_games")("id"),M_=z("toad_session_game_results","session_game_id")("id"),T_=S(`
  mutation update_games_allowed_attempts(
    $resultId: Int!
    $sessionId: uuid!
    $allowedAttempts: Int!
  ) {
    update_result(
      where: { id: { _eq: $resultId } }
      _append: { attrs: { allowedAttempts: $allowedAttempts } }
    ) {
      affected_rows
    }
    update_toad_sessions(
      where: { id: { _eq: $sessionId } }
      _set: { allowed_attempts: $allowedAttempts }
    ) {
      affected_rows
    }
  }
`);var sb=z("record")(`
id
userId
userLogin
authorId
authorLogin
message
endAt
startAt
createdAt
updatedAt
user {
    firstName
    lastName
}
author {
    firstName
    lastName
}
type {
    type
    label
    canAccessPlatform
    canBeAuditor
    isPermanent
}
`),N_=Me(sb.getPaginatedWithCount);var Zl=n((e,t)=>typeof e=="object"&&Object.values(e)[0].some(r=>r===t),"isSatteliteObj");var qa=n((e,t)=>{let{key:r,parent:o}=e,i=t||Object.values(o.children),s=o.attrs.graph?.innerCircle?.find(c=>c.type==="slice"&&c.innerArc?.contents.find(d=>Zl(d,r)));if(!s)return;let l=s.innerArc.contents.find(c=>Zl(c,r));return i.filter(c=>c.key===Object.keys(l)[0])},"getCoreOfSattelite"),ec=n(e=>[...e.centralPoint?[e.centralPoint]:[],...(e.innerCircle||[]).flatMap(t=>t.type==="slice"?[...t.entryPoint?[t.entryPoint]:[],...(t.innerArc?.contents||[]).flatMap(r=>typeof r=="string"?r:Object.entries(r)[0].flat()),...(t.outerArcs||[]).flatMap(r=>r.contents||[])]:t.contents),...(e.middleCircle||[]).flatMap(t=>t.contents||[]),...(e.outerCircle||[]).flatMap(t=>t.contents||[])],"flatGraphContents");var Rt={LINE:{maxLinesCount:6,maxContentsCount:7},SLICE:{maxSlicesCount:4,innerCircle:{maxSubContentsCount:5,maxContentsCount:30},outerArc:{maxArcsCount:2,maxContentsCount:10}},MIDDLE_CIRCLE:{maxArcsCount:8,maxContentsCount:70},OUTER_CIRCLE:{maxArcsCount:9,maxContentsCount:90}};var lb=n((e,t)=>{if(e)return t==="."?e:t===".."?e.parent:e.children[t]},"walk"),Jt=n((e,t,r={throwError:!0})=>{let o=t.path;if(cb(e)){if(r.throwError)throw Error("'relativePath' must be a relative path");console.error("'relativePath' must be a relative path");return}e[e.length-1]==="/"&&(e=e.slice(0,-1));let i=e.split("/").reduce(lb,t);if(i)return i;let s=`Incorrect relative path '${e}': no object found \u2014 current path = '${o}'`;if(r.throwError)throw Error(s);console.error(s)},"getObjectFromRelativePath"),cb=n(e=>e.startsWith("/"),"isAbsolutePath");var Zt={memory:{maxLevel:22,minRatio:1,freeAttempts:1e3,maxAttempts:1e3,shouldFailUnderScore:30,shouldFailUnderLevel:7,shouldSucceedFromScore:60,shouldSucceedFromLevel:15},zzle:{maxLevel:18,minRatio:1,freeAttempts:1e3,maxAttempts:1e3,shouldFailUnderScore:20,shouldFailUnderLevel:3,shouldSucceedFromScore:50,shouldSucceedFromLevel:10}};for(let e of Object.values(Zt))e.levels=[...Array(e.maxLevel+50).keys()].map(t=>({maxScore:((t+1)/15+1)*5})),e.maxScore=e.levels.slice(0,e.maxLevel).reduce((t,r)=>t+r.maxScore,0);var db=n((e,t,r,o)=>{let i=1-r,s=t-(e-o);return e<=o||r===1?1:s<1?r:s/t*i+r},"projectValue"),ub=n((e,t)=>{let{minRatio:r,freeAttempts:o,maxAttempts:i}=Zt[e];return db(t,i,r,o)},"getLevelRatio"),pb=n((e,t,r)=>(r/15+1)*5*ub(e,t),"getLevelScore"),z_=n((e,t)=>Zt[t].levels[e].maxScore,"getLevelMaxPoints"),mb=n((e,t)=>t.map((r,o)=>pb(e,r.attempts,o+1)).reduce((r,o)=>r+o,0),"getLevelsScore"),hb=n((e,t,r)=>{let i=mb(e,r)/Zt[e].maxScore;return{ratio:i,percent:i*100,points:t*i}},"getGameScores"),G_=n(e=>e.map(r=>hb(r.name,r.points,r.results).percent).reduce((r,o)=>r+o,0)/e.length,"getGlobalScore");var Ra={prog:{name:"Elementary programming",description:"Basics of computer programming",type:"technical"},algo:{name:"Elementary algorithms",description:"Problem-solving, algorithm design",type:"technical"},"sys-admin":{name:"System administration",description:"System administration, dev ops",type:"technical"},"front-end":{name:"Front-end",description:"Front-end technologies",type:"technical"},"back-end":{name:"Back-end",description:"Back-end technologies",type:"technical"},stats:{name:"Statistics",description:"Data analysis, interpretation",type:"technical"},ai:{name:"AI",description:"Artificial intelligence, machine learning",type:"technical"},game:{name:"Game programming",description:"Game programming",type:"technical"},blockchain:{name:"Blockchain",description:"Blockchain",type:"technical"},mobile:{name:"Mobile development",description:"Mobile development",type:"technical"},tcp:{name:"TCP/IP",description:"TCP/IP",type:"technical"},cybersecurity:{name:"Cybersecurity",description:"Cybersecurity",type:"technical"},ux:{name:"UX/UI",description:"User experience design, user interface design",type:"technical"},cloud:{name:"Cloud",description:"Cloud infra, deployment and scaling",type:"technical"},automation:{name:"Automation",description:"Automate tasks to reduce repetitive tasks and minimize potential errors",type:"technical"},ci:{name:"CI/CD",description:"Set up CI/CD pipelines to maintain a consistent software release process",type:"technical"},testing:{name:"Testing",description:"TDD and other software testing strategies",type:"technical"},"curriculum-objectives-completed":{name:"Curriculum objectives completed",description:"Curriculum objectives completed to unlock the specialization branches",type:"technical"},go:{name:"Go",type:"technology"},js:{name:"JS",type:"technology"},rust:{name:"Rust",type:"technology"},java:{name:"Java",type:"technology"},html:{name:"HTML",type:"technology"},css:{name:"CSS",type:"technology"},unix:{name:"Unix",type:"technology"},docker:{name:"Docker",type:"technology"},sql:{name:"SQL",type:"technology"},"no-sql":{name:"Non-relational Databases",type:"technology"},c:{name:"C",type:"technology"},sh:{name:"Shell",type:"technology"},php:{name:"PHP",type:"technology"},python:{name:"Python",type:"technology"},ruby:{name:"Ruby",type:"technology"},"c-sharp":{name:"C#",type:"technology"},"c-pp":{name:"C++",type:"technology"},graphql:{name:"GraphQL",type:"technology"},rails:{name:"Ruby on Rails",type:"technology"},laravel:{name:"Laravel",type:"technology"},django:{name:"Django",type:"technology"},react:{name:"React",type:"technology"},dotnet:{name:".NET",type:"technology"},electron:{name:"Electron",type:"technology"},git:{name:"Git",type:"technology"},employability:{name:"Employability",type:"employability"}},X_=[{tier:"Beginner",name:"Code Explorer",maxValue:25},{tier:"Intermediate",name:"Bug Squasher",maxValue:50},{tier:"Advanced",name:"Script Wizard",maxValue:75},{tier:"Master",name:"Master Hacker",maxValue:100}],K_=[{type:"technical",name:"Technical skills",description:"Technical skills are based on notions that are taught during the curriculum ; they represent what you learned from a project. They can be acquired when completing piscines, projects & exams."},{type:"technology",name:"Technologies",description:"Technologies gather the different programming languages, frameworks and platforms acquired from projects & piscines."},{type:"employability",name:"Employability",description:"Develops professional readiness through personal branding, digital presence, and job search strategies\u2014including portfolio building, CV writing, and effective networking."}],tc=n((e,t)=>Object.entries(e||{}).every(([r,o])=>(t?.[r]||0)>=o),"hasRequiredSkills");var We=128,Bn=Array(We+1),$r=-1,rc=0,nc=0;for(;++$r<We+1;){let e=$r*.66+1,t=($r+2)*150+50,r=Math.round(e*t);nc+=r,rc+=e,Bn[$r]={level:$r,base:t,cumul:nc,total:r,xpIndex:Math.floor(rc)}}var nr=n(e=>e?.children&&Object.values(e.children)||[],"_children"),Va=n((e,t,r)=>e&&(t(e)?e:Va(e[r],t,r)),"find"),gb=n((e,t)=>Va(e,t,"parent"),"findParent"),kc=n((e,t)=>Va(e,t,"prev"),"findPrev"),bb=n(({event:e})=>e,"hasEvent"),Sc=n(e=>e.type==="quest","isQuest"),Un=n(e=>e.attrs.category==="required","isRequired"),Cc=n(e=>typeof e=="number"&&!Number.isNaN(e)?e:1,"numOrOne"),Xa=n(e=>e.attrs.difficulty*Cc(e.attrs.difficultyMod),"_difficultyXpCoef"),_c=n((e,t)=>e+t,"add"),yb=n(([e,t],[r,o])=>t.index-o.index,"byValueIdx"),oc=n((e,t,r)=>e.attrs[`${r}-${t?.attrs?.language}`]||e.attrs[`${r}-en`]||r,"translate"),$c=n((e,t,r)=>{let{group:o}=e.attrs;return o?r.find(i=>i.attrs.group===o)===e:!0},"firstOfGroup"),Ac=n(e=>{let[t]=qa(e)||[];return t?`${t.name}/${Mc(e)}`:e.name},"getObjectPath"),$=n(e=>({value:Object.values(e)[0],functions:e,functionsByName:Object.fromEntries(Object.values(e).map(t=>[t.name,t]))}),"Functions"),gt={functions:{translate:oc},functionsByName:{translate:oc}},b=n((e,t)=>({type:typeof e,value:e,...t}),"Literal"),Je=n((e,...t)=>{if(e.required)return typeof e.value=="function"?e.value(...t):e.value},"getDefaultValue"),F=n(e=>({value:n((...t)=>de(e.type,r=>Je(r,...t)),"value"),...e}),"TypeObject"),O={},Z={},x={};O.address={"contact-validation-step":b("",{editable:!0,required:!0,label:"Phone validation URL"})};x.allowedFunctions={value:"",type:"string",editable:!0,label:"Function"};var ac={type:[x.allowedFunctions],value:[],label:"Allowed functions",instruction:"Functions authorized to the student",editable:!0,restrictive:!0};O.allowedFunctions={exercise:ac,raid:ac};var Ec="Automatic success",vb=`${Ec} if`,xb="Automatic reject if",Dc=n(e=>({type:"string",restrictive:!0,editable:!0,label:`${e} - number of conditions to fulfil`,...$({all:n(()=>"and","all"),one:n(()=>"or","one")})}),"sharedAutoValidationOperator");O.autoRejectOperator={games:Dc("Reject")};var wb=Object.entries(Zt),Ib=wb.flatMap(([e,t])=>[[`${e}Score`,{shouldFailUnder:t.shouldFailUnderScore,shouldSucceedFrom:t.shouldSucceedFromScore}],[`${e}Level`,{shouldFailUnder:t.shouldFailUnderLevel,shouldSucceedFrom:t.shouldSucceedFromLevel}]]),qc=[["score",{shouldFailUnder:25,shouldSucceedFrom:50}],["level",{shouldFailUnder:10,shouldSucceedFrom:25}],...Ib],Ka=n(e=>Array.isArray(e)||typeof e!="object"||!Object.keys(e).length,"isntObjectOrIsEmpty"),Se=n((e,t,r)=>{if(!e.length){let o=Error("Must be a non empty value");throw o.label=r,o}},"checkNotEmpty"),zn=n((e,t,r)=>{if(e<t||e>r)throw Error(`Expected to be a number range ${t} to ${r}`)},"checkNumberInBetween"),Ae=n((e,t,r)=>{if(e<t||e>r||!Number.isInteger(e))throw Error(`Expected to be an integer range ${t} to ${r}`)},"checkIntegerInBetween"),Gn=n((e,t,r)=>{if(e<t||e>r)throw Error(`Expected to be a duration between ${$o(t)} and ${$o(r)}`)},"checkDurationInBetween"),Fr=n((e,t)=>{if(e.length>t)throw Error(`Max ${t} characters (spaces included).`)},"checkTextLength"),Rc=n(e=>{try{return!!new URL(e)}catch{throw Error("Invalid URL.")}},"checkValidURL"),Wn={editable:!0,options:Fe(100,1),check:n(e=>Ae(e,1,100),"check")};x.autoRejectWhereConditions=Object.fromEntries(qc.map(([e,{shouldFailUnder:t}])=>[e,{value:{},editable:!0,description:`Condition relative to ${Zr(e)} of the candidate.`,type:{"<":b(t,{label:"is lower than",description:"Under this number, condition is fulfilled.",...Wn}),"<=":b(t,{label:"is lower than or equal",description:"Until this number, condition is fulfilled.",...Wn})}}]));O.autoRejectWhere={games:{value:{},editable:!0,restrictive:!0,label:xb,instruction:"List of conditions to automatically reject an application",type:x.autoRejectWhereConditions}};O.autoValidate={administration:b(!1,{label:Ec,instruction:"Validate all applications when they are submitted",restrictive:!0,editable:!0})};O.autoValidateOperator={games:Dc("Success")};x.autoValidateWhereConditions=Object.fromEntries(qc.map(([e,{shouldSucceedFrom:t}])=>[e,{value:{},editable:!0,description:`Condition relative to ${Zr(e)} of the candidate.`,type:{">":b(t,{label:"is bigger than",description:"Above this number, condition is fulfilled.",...Wn}),">=":b(t,{label:"is bigger than or equal",description:"From this number, condition is fulfilled.",...Wn})}}]));O.autoValidateWhere={games:{value:{},editable:!0,restrictive:!0,label:vb,instruction:"List of conditions to automatically accept an application",type:x.autoValidateWhereConditions}};var Qa={value:{},editable:!0,label:"Skills rewarded",type:de(Ra,({name:e,type:t,description:r})=>({label:e,instruction:t,description:r,editable:!0,type:"number",value:1,options:Fe(100,1),check:n(o=>Ae(o,1,100),"check")}))},Mt={...Qa,instruction:"Skills rewarded to users when they succeed in the current content"};Z.baseSkills={exam:{exercise:Mt},quest:{exercise:Mt},module:{piscine:Mt,project:Mt},campus:{piscine:Mt},piscine:{raid:Mt,project:Mt}};var kb=n(e=>{if(Object.keys(e.children||{}).length&&e.type!=="raid")return 0;let t=Bn[e.attrs.level]||Bn[0];return Math.round(t.base*Cc(Xa(e)))},"getBaseXpByLevelAndDifficulty"),Tt={type:"number",required:!0,editable:!0,label:"XP rewards",instruction:"How much experience points the user gets by succeeding on this content",...$({"by level and difficulty":kb}),check:n(e=>{if(!Number.isInteger(e))throw Error("Must be a whole number");if(e<0)throw Error("Must not be negative")},"check")};Z.baseXp={exam:{exercise:Tt},quest:{exercise:Tt},module:{piscine:Tt,project:Tt},piscine:{raid:Tt,project:Tt},campus:{piscine:Tt}};O.blockStartDelay={exam:b(15*6e4,{label:"Time to join the exam",editable:!0})};var ic=b("Save",{label:"Submit button text",editable:!0,...gt});O.buttonText={"sign-step":ic,"form-step":ic};O.campaignId={games:b("",{label:"Games campaign related",instruction:"Id required",required:!0,editable:!0,restrictive:!0})};var Sb=n(e=>e.path.split("/")[1],"getCampus"),ht={label:"Campus",type:"string",required:!0,private:!0,...$({"from campus name":Sb})};O.campus={exercise:ht,module:ht,piscine:ht,project:ht,raid:ht,exam:ht,quest:ht,...Object.fromEntries([...xt].map(e=>[e,ht]))};var Ar=b(400,{label:"Event capacity",instruction:"From 1 to 1000.",editable:!0,required:!0,check:n(e=>{if(!Number.isInteger(e))throw Error("Must be a whole number");if(e>1e3)throw Error("Cannot be more than 1000.");if(e<1)throw Error("Must be one or more")},"check")});O.capacity={exam:Ar,module:Ar,piscine:Ar,raid:Ar,interview:Ar};var Cb=new Set(["required","optional","bonus"]);Z.category={exam:{exercise:b("required",{label:"Category of the exercise",required:!0,private:!0,check:n(e=>{if(!new Set(["required","optional"]).has(e))throw Error('Must be "required" or "optional"')},"check")})},quest:{exercise:b("required",{label:"Category of the exercise",required:!0,editable:!0,options:["required","optional","bonus"],check:n(e=>{if(!Cb.has(e))throw Error('Must be "required", "optional" or "bonus"')},"check")})},piscine:{raid:b("required",{required:!0,private:!0})}};O.checkbox={"sign-step":{label:"Display a checkbox",instruction:'Minimum options: "label" and "required"',value:{},editable:!0,type:"object",check:n(e=>{if(!e.label||typeof e.label!="string")throw Error('"label" must be defined as a text to be displayed on the right of the checkbox.');if(typeof e.required!="boolean")throw Error('"required" must be defined as true or false (if the checkbox is mandatory or not).')},"check"),...gt}};x.codeEditorFile=F({label:"File",editable:!0,type:{giteaPath:b("root/public/README.md",{label:"Gitea file path",instruction:'Example: "{user}/{repo}/{path-to-file}"',editable:!0,check:n(e=>{Fr(e,200),Se(e)},"check")}),editorPath:b("provided/README.md",{label:"Path in Code editor",required:!0,editable:!0,check:n(e=>{Fr(e,200),Se(e)},"check")})}});x.providedFiles={editable:!0,label:"Provided files",type:[x.codeEditorFile]};x.enableCodeEditor=(e,t)=>b(e,{editable:!0,required:!0,label:"Enable",...t});var sc={label:"Code editor settings",editable:!0,check:n((e,{attrs:t})=>{if(t.language==="sh")throw Error("The code editor does not support shell exercises")},"check"),type:{enabled:x.enableCodeEditor(!1),providedFiles:x.providedFiles}};Z.codeEditor={quest:{exercise:F({...sc})},exam:{exercise:F({...sc,required:!0,type:{enabled:x.enableCodeEditor(!0,{editable:!1}),providedFiles:x.providedFiles}})}};var Hn=n(e=>{let t=/^[^a-z](\d+)|[^a-z0-9_]/g,r=e.search(t);if(r!==-1){let o=e[r],i=e.normalize("NFD").toLowerCase().replace(t,""),s=i?`Did you mean ${i}?`:"";throw Error(`Property names should start with a letter, only contain lowercase letters, numbers, and underscores (${r}:"${o}"). ${s}`)}},"checkCRMvalues"),lc="false",_b="hubspot",$b="https://api.hubapi.com",Ab="pat-eu1-cd14c7c3-4ca1-4f21-a86b-c677f12fddbb";x.crmOnValidation=b("event_status",{editable:!0,label:"Validation status",check:n(e=>{Se(e),Hn(e)},"check")});var ft=F({label:"Customer Relationship Management (CRM)",editable:!0,restrictive:!0,private:!(lc&&JSON.parse(lc)&&_b&&$b&&Ab),type:{onValidation:x.crmOnValidation}});x.crmGamesOnAttempts=b("number_of_attempts_remaining",{label:"Remaining attempts",editable:!0,check:n(e=>{Se(e),Hn(e)},"check")});x.crmOnProgress=b("last_progress",{label:"Currently in progress",editable:!0,check:n(e=>{Se(e),Hn(e)},"check")});x.gamesCRM={onAttempts:x.crmGamesOnAttempts};x.crmDueDate=b("audit_due_date",{label:"Due date",editable:!0,check:n(e=>{Se(e),Hn(e)},"check")});var cc={...ft,type:{...ft.type,onProgress:x.crmOnProgress}};O.crm={games:{...ft,type:{...x.gamesCRM,onValidation:ft.type.onValidation}},interview:ft,piscine:cc,module:cc,exam:ft,raid:ft,project:{...ft,type:{dueDate:x.crmDueDate}}};var Dn=n(({type:e,parent:t,index:r,attrs:o})=>t&&e==="exercise"&&o.special?Object.values(t.children).filter(s=>s.index<r).map(({attrs:s})=>s.duration).reduce(_c,0)*864e5:o.startDay?(o.startDay-1)*864e5:0,"getDelay"),Er={type:"number",required:!0,private:!0};Z.delay={piscine:{quest:{...Er,label:"Time before the quest starts",...$({"based on previous content temporal-windows":Dn})},project:{...Er,label:"Time before the project starts",...$({"based on previous content temporal-windows":Dn})}},quest:{exercise:{...Er,label:"Time before the exercise starts",...$({"based on previous exercises temporal-windows":Dn})}},exam:{exercise:{...Er,label:"Time before the exercise starts",...$({"based on previous exercises temporal-windows":Dn})}},module:{project:b(0,Er)}};var Eb=n(({attrs:e,prev:t})=>e.parentType!=="exam"?1:e.group?Math.round(e.group*2):Math.round(((t?.attrs.group||0)+1)*2),"exerciseDifficulty"),Db=n(e=>nr(e).filter($c).filter(Un).map(Xa).reduce(_c,0),"sumOfChildrenDifficulty"),tr=b(1,{required:!0,label:"Difficulty",instruction:"From 0.75 to 2 (in increments of 0.25)"}),Ma={...tr,private:!0,...$({"Sum of required children exercises difficulties":Db})};Z.difficulty={module:{project:{...tr,editable:!0},exam:Ma},piscine:{project:{...tr,editable:!0},raid:{...tr,editable:!0},exam:Ma,quest:Ma},quest:{exercise:b(1,{...tr,editable:!0})},exam:{exercise:{...tr,editable:!0,editableDefaultValue:1,...$({"Based on exercise group or 1":Eb})}}};var qb=n(({parent:e})=>e?.attrs.difficultyMod,"getDifficultyMod"),Xe=b(1,{label:"XP Coefficient",required:!0,editable:!0,editableDefaultValue:1,...$({"from parent":qb}),check:n(e=>zn(e,0,64),"check")});Z.difficultyMod={campus:{piscine:Xe},module:{project:Xe,piscine:Xe,exam:Xe},piscine:{raid:Xe,exam:Xe,quest:Xe,project:Xe},quest:{exercise:Xe},exam:{exercise:Xe}};var Rb=n(({name:e})=>e,"getName"),Mc=n(e=>{let[t]=qa(e)||[];return t&&t.name&&e.name.startsWith(t.name)?e.name.slice(t.name.length+1):e.name},"getProjectName"),Dr=b("",{editable:!0,label:"Displayed name",check:n(e=>Fr(e,60),"check")});O.displayedName={raid:{...Dr,...$({"from name":Rb})},project:{...Dr,...$({"from name (or light version)":Mc}),required:!0},piscine:Dr,exercise:Dr,quest:Dr};var Tc=n(e=>e.attrs.special,"isHackathon"),dc=n(({parent:e})=>Tc(e)?e.attrs.duration/Object.keys(e.children).length:0,"getExerciseDuration"),Mb=n(()=>1,"oneDayDuration"),Tb=n(()=>2,"twoDaysDuration"),Pt=b(1,{label:"Temporal-window duration in the event",required:!0,editable:!0,check:n(e=>Gn(e*864e5,0,50*864e5),"check"),editableDefaultValue:1,...$({"one day":Mb})});Z.duration={module:{exam:{...Pt,hidden:!0}},piscine:{quest:Pt,exam:Pt,raid:{...Pt,...$({"two days":Tb})},project:Pt},quest:{exercise:{...Pt,...$({"proportional to the others (in hackathon mode)":dc})}},exam:{exercise:{...Pt,...$({"proportional to the others (in hackathon mode)":dc})}}};var qr={label:"Event duration",required:!0,editable:!0,check:n(e=>Gn(e*6e4,1*6e4,365*864e5*3),"check")};O.eventDuration={exam:b(4*36e5/6e4,qr),module:b(365*864e5*2/6e4,qr),interview:b(864e5*1/6e4,qr),piscine:b(4*6048e5/6e4,qr),raid:b(864e5*2/6e4,qr)};var Pb=n(({parent:e})=>e?.attrs.eventId,"getParentEventId"),Lb=n(({event:e})=>e?.id,"getEventId"),jt={type:"number",label:"Event id",required:!0,private:!0,...$({"own event":Lb})},Rr={...jt,...$({"parent event":Pb})};Z.eventId={campus:{module:jt,piscine:jt},piscine:{quest:Rr,project:Rr,exam:jt,raid:jt},quest:{exercise:Rr},exam:{exercise:Rr},module:{piscine:jt,project:Rr,exam:jt}};var Mr=b(0,{label:"Time between registration and event",editable:!0});O.eventStartDelay={exam:Mr,module:Mr,interview:Mr,piscine:Mr,raid:Mr};x.filesName=b("",{label:"Expected file name",instruction:'Examples: "main.go", or "exerciseName/main.go"',editable:!0,check:n(e=>{Fr(e,65)},"check")});var uc={type:[x.filesName],value:[],editable:!0,restrictive:!0,label:"Expected files",check:Se};O.expectedFiles={exercise:uc,raid:uc};var jb=n((e,t)=>e+(Un(t)?t.attrs.baseXp:0),"totalRequiredXp"),pc=n(e=>nr(e).filter($c).reduce(jb,0),"getRequiredExpectedXp"),Nb=n((e,t)=>e+(t.attrs.expectedXp||0),"totalExpectedXp"),mc=n(e=>nr(e).reduce(Nb,0),"getTotalExpectedXp"),qn={type:"number",label:"XP",instruction:"Expertise(s) that this content is worth.",required:!0,check:n(e=>{if(!Number.isInteger(e))throw Error("Must be a whole number");if(e<0)throw Error("Must not be negative")},"check")};O.expectedXp={piscine:{...qn,private:!0,label:"XP (for stats)",...$({"Sum of children expected XP":mc})},module:{...qn,...$({"Sum of children expected XP":mc})},quest:{...qn,...$({"Sum of required children XP":pc})},exam:{...qn,...$({"Sum of required children XP":pc})}};var Pc=b("",{primary:!0,editable:!0,required:!0}),or={key:{...Pc,label:"Key (must be unique)",instruction:"Associated keyword in the database and data exports",check:n((e,t)=>{if(Se(e.trim()),Eo(e)){let i=mr(e);throw Error(`Must be written in camelCase. Suggestion: "${i}"`)}if((t.attrs["form-en"]||t.attrs.form||[]).flatMap(i=>i.inputs.map(s=>s.key)).filter(i=>i===e)?.length>1)throw Error(`${e} is already used for another input. Please choose a unique key.`)},"check")},required:b(!0,{label:"Must be fulfilled",editable:!0})},Ob=new Set(["w100p","w18p"]),Nt={...or,styleProps:F({label:"Input style",type:{w100p:b(!1,{label:"Large input style",editable:!0}),w18p:b(!1,{label:"Small input style",editable:!0})},editable:!0,check:n(e=>{let t=Object.keys(e).find(r=>!Ob.has(r));if(t)throw Error(`${t} is not a valid css property`)},"check")})},Ue={name:b("",{label:"Input HTML name",editable:!0,check:Se}),id:b("",{label:"Input HTML id",editable:!0,check:Se})},Br=n((e,t)=>({placeholder:b(t||"Your answer...",{label:"Placeholder",editable:!0}),label:b(e||"",{label:"Label / title",instruction:"Displayed on top of the input",editable:!0})}),"labelAndPLaceholder"),Lc={...Br(),...Ue,minLength:b(1,{label:"Minimum length",editable:!0}),maxLength:b(60,{label:"Maximum length",editable:!0})};x.textInput=F({label:"Text input",type:{type:b("text",{label:"Input type",required:!0}),...Nt,...Lc,size:b(20,{label:"Size",editable:!0})}});x.textareaInput=F({label:"Textarea input",type:{type:b("textarea",{label:"Input type",required:!0}),...Nt,...Lc,rows:b(5,{label:"Rows",editable:!0}),cols:b(20,{label:"Columns",editable:!0})}});x.telInputPattern=b("/^\\s?\\+?[0-9 ()_-]+$/",{label:"Pattern to match",instruction:"Regular expression (in javascript) that the input's value must match.",editable:!0});x.telInput=F({label:"Tel input",type:{type:b("tel",{label:"Input type",required:!0}),...Nt,...Ue,...Br("Telephone number","+333 33 33 33 33"),pattern:x.telInputPattern,format:b("Format: +7 777 123 00 00",{label:"Format to respect",editable:!0})}});x.checkboxInput=F({label:"Checkbox input",type:{type:b("checkbox",{label:"Input type",required:!0}),...or,...Ue,label:b("I agree",{label:"Text associated to the checkbox",instruction:"Displayed on the right of the checkbox",editable:!0,required:!0,check:Se}),value:b(!1,{label:"Is initially checked",editable:!0,required:!0})}});x.switchInput=F({label:"Switch input",type:{type:b("switch",{label:"Input type",required:!0}),...or,...Ue,label:b("I choose...",{label:"Text associated to the switch input",instruction:"Displayed on the left of the checkbox",editable:!0,required:!0,check:Se}),value:b(!1,{label:"Is initially set to true",editable:!0,required:!0})}});x.numberInputsSteps=b(10,{label:"Step value up and down by",editable:!0});x.numberInput=F({label:"Number input",type:{type:b("number",{label:"Input type",required:!0}),...Nt,...Ue,...Br("How many/much...","Multiple of..."),min:b(1,{label:"Minimum",editable:!0}),max:b(100,{label:"Maximum",editable:!0}),step:x.numberInputsSteps}});x.dateInput=F({label:"Date input",type:{type:b("date",{label:"Input type",required:!0}),...Nt,...Ue,...Br("Date","2000-01-01"),value:b("2000-01-01",{label:"Default date value",editable:!0}),min:b("2000-01-01",{label:"Lowest date allowed",editable:!0}),max:b("2000-01-01",{label:"Highest date allowed",editable:!0})}});x.datetimeLocalInput=F({label:"Date with time input",type:{type:b("datetime-local",{label:"Input type",required:!0}),...Nt,...Ue,...Br("Date and time","2000-01-01T00:00"),value:b("2000-01-01T00:00",{label:"Default date and time value",editable:!0}),min:b("2000-01-01T00:00",{label:"Lowest date and time allowed",editable:!0}),max:b("2000-01-01T00:00",{label:"Highest date and time allowed",editable:!0})}});x.countriesInput=F({label:"Countries input",type:{type:b("countries",{label:"Input type",required:!0}),...or,...Ue,label:b("Country",{label:"Label / title",instruction:"Displayed on top of the input",editable:!0}),emptyItem:F({label:"Empty selection text",editable:!0,instruction:"Displayed as a placeholder before selection",type:{label:b("Choose your country...",{label:"Label",editable:!0})}})}});x.languagesInput=F({label:"Languages input",type:{type:b("languages",{label:"Input type",required:!0}),...or,...Ue,label:b("Language",{label:"Label / title",instruction:"Displayed on top of the input",editable:!0}),emptyItem:F({label:"Empty selection text",editable:!0,instruction:"Displayed as a placeholder before selection",type:{label:b("Choose your language...",{label:"Label",editable:!0})}})}});x.radioItems=F({label:"Radio item",type:{label:b("",{label:"Label (text displayed)",editable:!0}),data:b("",{label:"Data (value saved in database)",editable:!0,required:!0,primary:!0,check:Se})}});x.radioInput=F({label:"Radio input",type:{type:b("radio",{label:"Input type",required:!0}),...or,...Ue,label:b("Select one...",{label:"Label / title",instruction:"Displayed on top of the input",editable:!0,required:!0}),inlineBlock:b(!0,{label:"Displays options under the label",instruction:"If set to false, options are right to the label",editable:!0}),items:{value:[],type:[x.radioItems],label:"Items",required:!0,editable:!0}}});x.selectItems=F({label:"Select item",type:{label:b("",{label:"Label",instruction:"Text displayed and saved in database",editable:!0,required:!0,primary:!0,check:Se}),data:b("",{label:"Data",editable:!0})}});x.selectInput=F({label:"Select input",type:{type:b("select",{label:"Input type",required:!0}),...Nt,...Ue,label:b("Select one...",{label:"Label / title",instruction:"Displayed on top of the input",editable:!0}),searchable:b(!0,{label:"Searchable",instruction:"Allow search, and sort the input options",editable:!0}),emptyItem:F({label:"Empty selection text",editable:!0,instruction:"Displayed as a placeholder before selection",type:{label:b("Choose...",{label:"Label",editable:!0})}}),items:{type:[x.selectItems],value:[],label:"Items",required:!0,editable:!0}}});x.formSectionResume=b("",{label:"Resume",editable:!0});x.formSection=F({type:{key:{...Pc,label:"Section id",instruction:"Private info (for admins)",check:n((e,t)=>{if(Se(e.trim()),Eo(e)){let i=mr(e);throw Error(`Must be written in camelCase. Suggestion: "${i}"`)}if((t.attrs["form-en"]||t.attrs.form||[]).map(i=>i.key).filter(i=>i===e)?.length>1)throw Error(`${e} is already used for another section. Please choose a unique key.`)},"check")},title:b("",{label:"Section title",editable:!0}),resume:x.formSectionResume,inputs:{label:"Inputs",instruction:"Questions or instruction to answer to",required:!0,editable:!0,value:[],type:[x.textInput,x.textareaInput,x.telInput,x.checkboxInput,x.switchInput,x.dateInput,x.datetimeLocalInput,x.numberInput,x.countriesInput,x.languagesInput,x.radioInput,x.selectInput]}}});O.form={"form-step":{label:"Form to fill",required:!0,editable:!0,value:[{key:"firstSection",inputs:[]}],type:[x.formSection],...gt}};var Fb=n(e=>{if(!e.children)return;let t=nr(e),r=t.filter(Un).length,o=t.filter(i=>i.attrs.status==="succeeded").length;return o&&o/r},"questGrade");O.grade={quest:b(0,{required:!0,private:!0,label:"Quest grade",...$({"succeeded exercises / required":Fb})})};x.graphArcName=F({label:"Name of the arc",type:{text:b("",{label:"The text name of the arc",type:"string"}),hidden:b(!0,{label:"Display the text name on the graph"})}});var Ga=n((e,t)=>{if(!t.children[e])throw Error(`Invalid object - no object found in the module for the following key name: ${e}`)},"checkGraphArcContentIsValid");x.graphArcContentName=b("",{label:"The text name of a content placed on an arc",check:n((e,t)=>Ga(e,t),"check")});x.graphArcContentWithSubContents={value:{},label:"Content with sub-contents placed on an arc",type:"object",check:n((e,t)=>{if(Ka(e))throw Error("Should be a non empty object.");let r=Object.entries(e);if(r.length>1)throw Error("Should be an object with a single key-value pair; the key being the content's name, and the value being an array of sub-contents's names.");let[o,i]=r[0];if(Ga(o,t),!Array.isArray(i)||!i.length)throw Error("Must be a non empty array");let s=new Set(i);if(i.length!==s.size)throw Error("Duplicates are not allowed.");let l=Rt.SLICE.innerCircle.maxSubContentsCount;if(i.length>l)throw Error("Max sattelites reached");for(let c of i)Ga(c,t)},"check")};var jc=n(e=>{let{name:t,contents:r,type:o,id:i,...s}=e;if(Object.keys(s).length)throw Error(`Unsupported attribute "${Object.keys(s)[0]}"`);if(!Array.isArray(r)||!r?.length)throw Error("Must be a non empty array")},"graphArcBasicChecks");x.graphArc=F({label:"Name & contents of an arc",type:{id:b("",{label:"A randomly-generated id to identify the arc"}),name:x.graphArcName,contents:{label:"The list of contents to be placed on an arc",type:[x.graphArcContentName]}},check:jc});x.innerCircleSlice=F({label:"Slice on the inner circle",type:{id:b("",{label:"A randomly-generated id to identify the slice"}),name:x.graphArcName,type:b("slice",{label:"The slice type"}),entryPoint:x.graphArcContentName,innerArc:F({label:"Inner arc of an inner circle slice",type:{...x.graphArc.type,contents:{label:"The list of contents to be placed on an inner arc of an inner circle slice",type:[x.graphArcContentName,x.graphArcContentWithSubContents]}},check:jc}),outerArcs:{label:"Outer arcs of an inner circle slice",type:[x.graphArc],check:n(e=>{let{maxArcsCount:t,maxContentsCount:r}=Rt.SLICE.outerArc;if(e.length>t)throw Error("Max outerArcs reached");if(e.reduce((o,i)=>o+(i.contents?.length||0),0)>r)throw Error("Max contents spread over outerArcs of slice reached")},"check")}},check:n(e=>{let{name:t,entryPoint:r,type:o,innerArc:i,outerArcs:s,id:l,...c}=e;if(Object.keys(c).length)throw Error(`Unsupported attribute "${Object.keys(c)[0]}"`);if(!t&&!r&&!o&&!i&&!s&&!l)throw Error("Empty inner circle, should be removed")},"check")});x.innerCircleLine={...x.graphArc,label:"Line on the inner circle",type:{...x.graphArc.type,type:b("line",{label:"The line type"})},check:n(e=>{if(e.contents.length>Rt.LINE.maxContentsCount)throw Error("Max contents reached for a line")},"check")};var Bb=F({private:!0,required:!0,editable:!0,value:{innerCircle:[],middleCircle:[],outerCircle:[]},label:"Graph structure",instruction:"Structure of the visual graph",description:"Sets the visual structure & hierarchy of the graph of a module.",type:{centralPoint:x.graphArcContentName,innerCircle:{value:[],required:!0,editable:!0,label:"List of slices and/or lines spread on the inner circle",type:[x.innerCircleSlice,x.innerCircleLine],check:n(e=>{let t=e.filter(s=>s.type==="slice"),r=e.filter(s=>s.type==="line"),{SLICE:o,LINE:i}=Rt;if(t.length>o.maxSlicesCount)throw Error("Max slices sections reached");if(r.length>i.maxLinesCount)throw Error("Max lines sections reached");if(t.flatMap(({innerArc:s})=>s.contents.flatMap(l=>typeof l=="string"?l:Object.keys(l)[0])).length>o.innerCircle.maxContentsCount)throw Error("Max contents spread over innerArcs of slices reached")},"check")},middleCircle:{value:[],required:!0,editable:!0,label:"List of arcs spread on the middle circle",type:[x.graphArc],check:n(e=>{let{maxArcsCount:t,maxContentsCount:r}=Rt.MIDDLE_CIRCLE;if(e.length>t)throw Error("Max arches reach on middleCircle");if(e.reduce((o,i)=>o+(i.contents?.length||0),0)>r)throw Error("Max contents reach on middleCircle")},"check")},outerCircle:{value:[],required:!0,editable:!0,label:"List of arcs spread on the outer circle",type:[x.graphArc],check:n(e=>{let{maxArcsCount:t,maxContentsCount:r}=Rt.OUTER_CIRCLE;if(e.length>t)throw Error("Max arches reach on outerCircle");if(e.reduce((o,i)=>o+(i.contents?.length||0),0)>r)throw Error("Max contents reach on outerCircle")},"check")}},check:n((e,t)=>{let{centralPoint:r,innerCircle:o,middleCircle:i,outerCircle:s,...l}=e;if(Object.keys(l).length)throw Error(`Unsupported attribute "${Object.keys(l)[0]}"`);if(!r&&!o?.length&&!i?.length&&!s?.length)throw Error("Empty graph, should be removed");let c=ec(e),d=new Set(c);if(c.length!==d.size)throw Error("Graph should not contain duplicate contents keys");let u=Object.keys(t.children);d.size!==u.length&&console.error(`Inconsistancy in between graph and children: different size (${d.size} vs ${u.length})`)},"check")});O.graph={module:Bb};Z.group={exam:{exercise:b(1,{label:"Exercise group",editable:!0,required:!0,hidden:!0,options:Fe(100,1),check:n(e=>Ae(e,1,100),"check")})}};var Wb=n(({group:e})=>e?.id,"getGroupId"),hc={label:"Group id of the user",type:"number",required:!0,private:!0,...$({"last confirmed group for this project":Wb})};O.groupId={project:hc,raid:hc};O.groupMax={project:b(1,{label:"Max. group number",required:!0,editable:!0,options:Fe(20,1),check:n((e,t)=>{if(Ae(e,1,20),t.attrs.groupMin>e)throw Error('Must be bigger or equal to "Min. group number"')},"check")})};O.groupMin={project:b(1,{label:"Min. group number",required:!0,editable:!0,options:Fe(20,1),check:n((e,t)=>{if(Ae(e,1,20),t.attrs.groupMax<e)throw Error('Must be smaller or equal to "Max. group number"')},"check")})};O.groupSize={raid:b(3,{label:"Average group size",required:!0,editable:!0,options:[3,1,2,...Fe(17,4)],check:n(e=>Ae(e,1,20),"check")})};var Nc=n(({attrs:e})=>Date.now()>e.start,"getHasStarted"),Ub=n(()=>!0,"always"),zb=n(()=>!1,"never"),er={type:"boolean",required:!0,private:!0,...$({"from beginning of event":Nc})},Tr={label:"Starts when",type:"boolean",hidden:!0,required:!0,...$({"temporal-window has started (in hackathon mode)":Nc,"always started":Ub,"never starts":zb})};Z.hasStarted={campus:{module:er,piscine:er},module:{piscine:er,exam:er,project:Tr},piscine:{exam:er,raid:er,quest:Tr,project:Tr},quest:{exercise:Tr},exam:{exercise:Tr}};O.info={raid:b("Group 1",{editable:!0,label:"Calendar information tag",check:n(e=>Fr(e,50),"check")})};var Oc={label:"Upload input",required:!0,editable:!0,type:"object",value:{},...gt,instruction:'Required option: "type"'},Gb={...Oc,editable:!1,check:n(e=>{let[t]=Object.values(e);if(Ka(t),!t.type||t.type!=="file")throw Error('"type":"file" property must be defined in the upload input.');if(t.accept!==void 0&&typeof t.accept!="string")throw Error('"accept" property (if added) must be a text. Example: "image/png, image/jpeg"');if(t.required!==void 0&&typeof t.required!="boolean")throw Error('"required" property (if added) must be a true or false.')},"check")},Hb=F({label:"Avatar input",required:!0,editable:!1,value:{type:"file",accept:"image/png, image/jpeg",required:!0},type:{type:b("file",{label:"Input type",required:!0,editable:!1}),accept:b("image/png, image/jpeg",{label:"Accepted file types",editable:!1,required:!0}),required:b(!0,{label:"Required",editable:!1,required:!0})}});O.input={"upload-step":Gb,"avatar-step":Hb,"contact-validation-step":{...Oc,check:n(e=>{let[t]=Object.values(e);if(Ka(t),!t.type||t.type!=="tel")throw Error('"type":"tel" property must be defined in the contact validation input.');if(t.required!==void 0&&typeof t.required!="boolean")throw Error('"required" property (if added) must be a true or false.');if(t.label!==void 0&&typeof t.label!="string")throw Error('"label" property (if added) must be a text. Example: "Phone contact"');if(t.placeholder!==void 0&&typeof t.placeholder!="string")throw Error('"placeholder" property (if added) must be a text. Example: "+333 33 33 33 33"');if(t.format!==void 0&&typeof t.format!="string")throw Error('"format" property (if added) must be a text. Example: "Required format: +33 7 17 17 17 17"');if(t.pattern!==void 0){if(typeof t.pattern!="string")throw Error('"pattern" property (if added) must be a text and a valid regex. Example: "[+][0-9]{3}[0-9]{2}[0-9]{2}[0-9]{2}[0-9]{2}"');try{return new RegExp(e)}catch{throw Error("Invalid Regular expression.")}}},"check")}};var Fc=n(({attrs:e})=>{let t=Date.now();return t>e.scopeStart&&t<e.scopeEnd},"getInScope"),fc=n(({attrs:e})=>e.hasStarted,"getProjectInScope"),Vb=n(({parent:e})=>e.attrs.inScope,"getExamExerciseInScope"),Xb=n(({parent:e,attrs:t})=>{if(e.attrs.inScope){if(Tc(e)){let r=Date.now();return r>t.start&&r<t.duration*864e5+t.start}return!0}return e.attrs.hasStarted&&t.category==="bonus"},"getExerciseInScope"),rr={label:"Reward scope",required:!0,type:"boolean"},Ta={...rr,private:!0,label:"Active scope (distinct from temporal-window)",...$({"from start date to end date":Fc})};Z.inScope={piscine:{quest:{...rr,label:"Reward scope (temporal-window with extra duration)",instruction:"Defines whether the content keeps giving the rewards or not.",...$({"from start day to end of extra duration":Fc})},raid:Ta,exam:Ta,project:{...rr,...$({"parent temporal-window":fc})}},quest:{exercise:{...rr,...$({"parent temporal-window (or one by one in hackathon)":Xb}),instruction:"Defines whether the content keeps giving the rewards or not."}},exam:{exercise:{...rr,private:!0,...$({"parent scope":Vb})}},module:{project:{...rr,...$({"parent scope":fc})},exam:Ta}};var Rn=b("",{label:"Programming language",instruction:'Example: "js", "go", "rust"',editable:!0,restrictive:!0});O.language={exam:Rn,exercise:Rn,raid:Rn,project:Rn};var Kb=n(({parent:e,attrs:t})=>{if(e&&e.type==="exam")return e.attrs.level;let r=t.difficulty+t.xpIndex,o=Bn.find(i=>i.xpIndex>r);return o?o.level:0},"getLevel"),Ke=b(1,{label:"Level",required:!0,editable:!0,editableDefaultValue:1,...$({"minimum required":Kb}),options:Fe(We,1),check:n(e=>Ae(e,1,We),"check")});Z.level={module:{piscine:Ke,exam:Ke,project:Ke},piscine:{quest:Ke,raid:Ke,exam:Ke,project:Ke},quest:{exercise:Ke},exam:{exercise:Ke},campus:{piscine:Ke}};x.objectChildRelativePath=b("./",{label:"Content relative path",instruction:"As a child of this content",editable:!0,check:Jt,options:n(e=>Object.entries(e.children||{}).sort(yb).map(([t,r])=>`./${t}`),"options")});var Bc=n((e,t)=>{if(!Array.isArray(e)||!e.length){let i=new Error("Must be a non empty array");throw i.userFeedback="This list cannot be empty! Please add an item or remove the setting.",i}let r=[...new Set(e)];if(e.length!==r.length)throw Error("Duplicates are not allowed.");let o=e.filter(i=>!Jt(i,t,{throwError:!1}));if(o.length){let i=o.map(l=>`'${l}'`).join(", "),s=new Error(`Invalid objects requirements - no object found for the following relative paths: ${i}`);throw s.userFeedback="Some Contents are misconfigured, please update them!",console.error(s.message),s}},"checkRelativePaths");x.objectRootRelativePath=b("../",{label:"Content relative path (Mandatory)",instruction:"In same parent",editable:!0,check:n((e,t)=>{try{Jt(e,t)}catch(r){throw r.userFeedback=`This content relative path (${e}) is invalid, please select a valid content in the list below or remove it.`,r}},"check"),options:n(e=>e?.parent?.children?Object.entries(e.parent.children).filter(([o])=>o!==e.key).map(([o])=>`../${o}`):[],"options")});x.sharedObjectList={label:"Contents required",editable:!0,check:n((e,t)=>{Bc(e.flat(),t)},"check")};var Wc={editable:!0,label:"Access conditions"},Qb={...Wc,instruction:"Conditions to access this content",description:"Sets the requirements that have to be met for a content to be accessible to a student.",check:n((e,t)=>{let{skills:r,objects:o,...i}=e;if(Object.keys(i).length)throw Error(`Unsupported attribute "${Object.keys(i)[0]}"`);if(!r&&!o)throw Error("Empty requirements, should be removed");let s=(o||[]).flat().filter(l=>!Jt(l,t,{throwError:!1}));if(s.length){let l=s.map(d=>`'${d}'`).join(", "),c=new Error(`Invalid objects requirements - no object found for the following relative paths: ${l}`);throw c.userFeedback="You have some misconfigured Contents required, please update them!",console.error(c.message),c}},"check")},Yb={...Wc,instruction:"Conditions to unlock and earn this level",description:"Sets the requirements that have to be met for a level to be unlocked and earned by a student.",check:n(e=>{let{skills:t,objects:r,...o}=e;if(Object.keys(o).length)throw Error(`Unsupported attribute "${Object.keys(o)[0]}"`);if(!t&&!r)throw Error("Empty requirements, should be removed")},"check")};x.levelDefinition=F({label:"Level definition",type:{level:b(We,{label:"Level",editable:!0,required:!0,primary:!0,options:Fe(We,1).reverse(),check:n((e,t)=>{if(Ae(e,1,We),t.attrs.levelsDefinitions?.filter(o=>o.level===e)?.length>1)throw Error(`Level ${e} is set for different levels definitions! A given level can only be defined once.`)},"check")}),requirements:F({...Yb,type:{skills:{...Qa,label:"Skills required",instruction:"Expertises required"},objects:{...x.sharedObjectList,value:n((...e)=>{let t=x.objectChildRelativePath.options(...e)?.[0];return t?[t]:[]},"value"),type:[x.objectChildRelativePath],instruction:"Items to be succeeded"}},instruction:"Conditions to access this level"})}});var Jb={label:"Level requirements",instruction:"Set the requirements and conditions for the user to access specific levels",value:n((...e)=>[de(x.levelDefinition.type,t=>Je(t,...e))],"value"),editable:!0,restrictive:!0,type:[x.levelDefinition],check:n(e=>{if(!e?.length||!Array.isArray(e))throw Error("Must be a non empty array")},"check")};O.levelsDefinitions={module:Jb};O.link={"sign-step":F({label:"Associated link to the document",editable:!0,type:{href:b("",{required:!0,editable:!0,label:"URL",instruction:"Href HTML attribute",check:n(e=>{e.length&&Rc(e)},"check")}),label:b("> Link to the document",{editable:!0,label:"Label / text displayed"}),target:b("_blank",{label:"Target HTML attribute",instruction:"Open the link in a new browser tab"})},...gt}),"avatar-step":F({label:"Link to the legal page",editable:!1,required:!0,value:{href:"/legal",label:"> Privacy policy",target:"_blank"},type:{href:b("/legal",{editable:!1}),label:b("> Privacy policy",{editable:!1}),target:b("_blank",{editable:!1})}})};Z.mandatory={module:{project:{label:"Mandatory content to validate the curriculum",type:"boolean",required:!1,editable:!0}}};var Zb=n((e,t)=>Math.max(t.attrs.group||1,e),"maxGroupReducer"),ey=n(e=>nr(e).reduce(Zb,1),"getMaxExamGroup");O.maxGroup={exam:{type:"number",label:"Max exercise group",private:!0,required:!0,...$({"biggest exercise group of the exam":ey})}};var Uc=b("",{label:"Name",editable:!0,...gt}),zc={};for(let e of xt)e!=="avatar-step"&&(zc[e]=Uc);O.name={signup:Uc,...zc};var ty=n(({parent:e})=>e?.type,"getParentType"),Qe={type:"string",private:!0,required:!0,label:"Upper content type",...$({"from parent":ty})};Z.parentType={campus:{piscine:Qe},module:{piscine:Qe,exam:Qe,project:Qe},piscine:{quest:Qe,exam:Qe,raid:Qe,project:Qe},quest:{exercise:Qe},exam:{exercise:Qe}};x.rankDefinitionName=b("",{label:"Name",editable:!0,required:!0,primary:!0,check:n((e,t)=>{if(t.attrs.ranksDefinitions?.filter(o=>o.name===e)?.length>1)throw Error(`Name "${e}" is already set for a rank definition! A given name can only be attributed once to a rank.`)},"check")});x.rankDefinition=F({label:"Rank requirements",type:{name:x.rankDefinitionName,level:b(We,{label:"Level required",editable:!0,required:!0,check:n((e,t)=>{if(Ae(e,0,We),t.attrs.ranksDefinitions?.filter(o=>o.level===e)?.length>1)throw Error(`Level ${e} is already set for a rank definition! A given level can only be attributed once to a rank.`)},"check")}),milestone:b("",{label:"Milestone description",editable:!0})}});var gc={label:"Rank requirements",instruction:"List of ranks access conditions",editable:!0,restrictive:!0,value:n((...e)=>[de(x.rankDefinition.type,t=>Je(t,...e))],"value"),type:[x.rankDefinition],check:n(e=>{if(!e?.length||!Array.isArray(e))throw Error("Must be a non empty array")},"check")};O.ranksDefinitions={module:gc,piscine:gc};var Pr={label:"Registration duration (to an event)",required:!0,editable:!0,check:n(e=>Gn(e*6e4,1*6e4,365*864e5),"check")};O.registrationDuration={exam:b(1.5*864e5/6e4,Pr),module:b(30*864e5/6e4,Pr),interview:b(2*6048e5/6e4,Pr),piscine:b(30*864e5/6e4,Pr),raid:b(1.5*864e5/6e4,Pr)};var ry="https://01.gritlab.ax/git/",ny=n(({attrs:e})=>`${ry}${e.repositoryPath}`,"getRepositoryURL"),Pa={label:"Repository URL",type:"string",required:!0,private:!0,...$({"from gitea user account":ny})};O.repository={exercise:Pa,project:Pa,raid:Pa};var Gc=n(({group:e,parent:t})=>(e||(e=t?.group),e&&(e.captainLogin||e.captain?.login)),"getCaptainLogin"),oy=n(({name:e,group:t,parent:r},o)=>`${Gc({group:t,parent:r})||o.login}/${e}`,"getRepositoryPath"),ay=n(({attrs:e,parent:t,group:r},o)=>{let i=Gc({parent:t,group:r});return i?`${i}/${t.path.replace(/\/+/g,"-")}`:`${o.login}/${e.rootName}`},"getExerciseRepositoryPath"),La={label:"Repository path",type:"string",required:!0,private:!0,...$({"from captain":oy})};O.repositoryPath={exercise:{...La,...$({"from captain":ay})},project:La,raid:La};O.requiredAuditRatio={project:b(.5,{label:"Audit ratio required to begin the project",instruction:"From 0 to 2 (1 being the perfect balance of audits)",required:!0,editable:!0,options:[...Array(21)].map((e,t)=>Math.round(t*.1*10)/10),check:n(e=>zn(e,0,2),"check")})};x.pathwaysRequirementObjects={label:"Multiple content choices",instruction:"Adding this will create a new path way for the project being edit.",check:n((e,t)=>{Bc(e.flat(),t)},"check"),required:!1,editable:!0,type:[{...x.objectRootRelativePath,label:"Content relative path (optional)"}],value:n((...e)=>{let t=x.objectRootRelativePath.options(...e)?.[0];return t?[t]:[]},"value")};var Mn=F({...Qb,type:{skills:{...Qa,label:"Skills required",instruction:"Necessary skill level to unlock the current content",description:"Define the skills and tier required to unlock the current content. The skill tracker button opens a modal where you can visualize the contents that reward the selected skill"},objects:{...x.sharedObjectList,value:n((...e)=>{let t=x.objectRootRelativePath.options(...e)?.[0],r=x.pathwaysRequirementObjects.value(...e);return t?[t,r]:[]},"value"),type:[x.objectRootRelativePath,x.pathwaysRequirementObjects],instruction:"Content required to unlock the current one"}}});Z.requirements={module:{project:Mn,piscine:Mn},campus:{piscine:{hidden:!0,...Mn},module:{hidden:!0,...Mn}}};var Tn=b("",{label:"Resume",editable:!0,...gt});O.resume={"module-registration":Tn,"piscine-registration":Tn,"form-step":Tn,interview:Tn};var iy=n(({attrs:e})=>e.baseSkills,"getBaseSkills"),ja=n(({attrs:e})=>e.baseXp,"getBaseXp"),sy=n(({attrs:e})=>e.inScope?e.baseXp:0,"getScopedBaseXp");x.skills={...$({"collect skills":iy}),label:"Skills",required:!0};var Fn={required:!0,label:"Reward conditions",instruction:"Conditions to collect xp and skills when succeeded"},Pn=F({type:{skills:x.skills,xp:{...$({"collect xp in scope":sy}),label:"XP",required:!0}},...Fn});Z.rewards={piscine:{raid:F({type:{skills:x.skills,xp:{...$({"collect xp":ja}),label:"XP",required:!0}},...Fn}),project:Pn},module:{piscine:F({type:{skills:x.skills,xp:{...$({"collect xp":ja}),label:"XP",required:!0}},...Fn}),project:Pn},campus:{piscine:F({type:{skills:x.skills,xp:{...$({"collect xp":ja}),label:"XP",required:!0}},...Fn})},quest:{exercise:Pn},exam:{exercise:Pn}};var ly=n(({parent:e})=>{let{attrs:t,name:r,type:o,id:i,path:s}=e;return o!=="campus"?{attrs:{eventId:t.eventId},name:r,type:o,id:i,path:s}:void 0},"rewardParent");Z.rewardsTarget={module:{piscine:{type:"object",label:"Target of the rewards",instruction:"Content to which rewards are attributed",required:!0,...$({"parent event if exists":ly})}}};var cy=n(({parent:e})=>{for(;e;){if(e.type==="module"||e.type==="piscine")return e.key;e=e.parent}return""},"getRootName"),Lr={type:"string",private:!0,...$({"root content key":cy}),required:!0,label:"Root key"};Z.rootName={quest:{exercise:Lr},exam:{exercise:Lr},module:{project:Lr},piscine:{project:Lr,raid:Lr}};var dy=n(({parent:e})=>{for(;e;){if(e.type==="module"||e.type==="piscine")return e.path;e=e.parent}},"getRootPath"),nt={type:"string",required:!0,private:!0,...$({"root content path":dy}),label:"Root path"};Z.rootPath={module:{project:nt,piscine:nt,exam:nt},piscine:{project:nt,raid:nt,exam:nt,quest:nt},quest:{exercise:nt},exam:{exercise:nt}};var uy=n(e=>Gi(e.attrs.scopeStart,e),"questScopeEnd"),py=n(({event:e})=>e&&tt(e.endAt),"getEventScopeEnd"),Hc={type:"number",required:!0,private:!0},Na={...Hc,label:"Active scope end",...$({"when event ends":py})},Oa={...Hc,label:"Reward scope end",...$({"when extra duration ends":uy})};Z.scopeEnd={piscine:{raid:Na,exam:Na,quest:Oa,project:Oa},module:{project:Oa,exam:Na}};var bc=b(0,{label:"Extra duration (for reward scope)",editable:!0,check:n(e=>Gn(e*864e5,0,50*864e5),"check")});Z.scopeExtraDuration={piscine:{quest:bc,project:bc}};var my=n(({attrs:e})=>e.start,"getScopeStart"),Vc={type:"number",required:!0,private:!0,...$({"from start date":my})},Fa={...Vc,label:"Active scope start"},Ba={...Vc,label:"Temporal-window & reward scope start"};Z.scopeStart={piscine:{quest:Ba,project:Ba,raid:Fa,exam:Fa},module:{exam:Fa,project:Ba}};var hy=n(({parent:e})=>e?.attrs.special,"getSpecial");O.special={quest:b(!1,{label:"Activate hackathon mode",editable:!0,restrictive:!0}),exercise:{label:"In hackathon mode",type:"boolean",required:!0,...$({"activated with the quest":hy})}};var Ya=n(e=>{let t=gb(e,bb),r=t?.event;if(r){let o=tt(r.startAt);return t===e?o:ko(o,e)}if(e.parent)return ko(e.parent.attrs.start,e)},"getStart"),ot={label:"Start date",type:"number",required:!0,private:!0,...$({"from start date of event":Ya})},yc={...ot,...$({"starts with module":Ya})},fy=n(({parent:e,attrs:t})=>e?.attrs.start+t.delay,"getExerciseStart"),gy={...ot,...$({"from temporal-window (if in hackathon mode)":fy})};Z.start={campus:{module:ot,piscine:ot},module:{exam:ot,piscine:ot,project:yc},piscine:{raid:ot,exam:ot,quest:{...ot,...$({"from temporal-window":Ya})},project:yc},quest:{exercise:gy}};var jr=b(0,{label:"Starts after a delay of (within the event)",editable:!0,required:!0});Z.startAfter={module:{piscine:jr,exam:jr},piscine:{exam:jr,raid:jr},campus:{piscine:jr}};var Xc=n(({prev:e})=>e?e.attrs.duration+e.attrs.startDay:1,"getStartDay"),by=n(({parent:e,prev:t})=>e.type==="piscine"?Xc({prev:t}):void 0,"getExamStartDay"),Ln=b(1,{label:"Start day n\xB0",...$({"from end of previous content temporal-window":Xc}),required:!0,private:!0});Z.startDay={piscine:{exam:{...Ln,...$({"from end of previous content temporal-window":by})},quest:Ln,raid:Ln,project:Ln}};var bt=n(e=>{if(e?.isDone)return e.grade>=1?"succeeded":"failed"},"getProgressStatus"),yy=n(e=>{let{attrs:t,progress:r,parent:o}=e,i=bt(r);if(i)return i;if(!o)return"available";if(o.attrs.status==="blocked")return"blocked";let{group:s}=t;if(s<=1)return o.attrs.status;let l=nr(o).filter(u=>u.attrs.group<s),c=Math.max(...l.map(u=>u.attrs.group));return l.filter(u=>u.attrs.group===c).some(u=>u.attrs.status==="succeeded")?"available":"blocked"},"examExerciseStatus"),vy=n(e=>{let{prev:t,attrs:r,progress:o,parent:i}=e,s=bt(o);if(s)return s;if(!i)return"available";if(i.attrs.status==="blocked")return"blocked";let l=Date.now();if(r.special)return l<r.start?"blocked":l>r.duration+r.start?"failed":"available";if(t&&t.attrs.status!=="succeeded")return"blocked";let c=Date.now()+864e5;if(i.prev?.type==="project"&&i.prev?.attrs.status!=="succeeded"&&i.prev?.attrs.scopeEnd>c)return"blocked";let d=kc(i.prev,Sc);return d&&d.attrs.status!=="succeeded"&&d.attrs.scopeEnd>c?"blocked":"available"},"questExerciseStatus"),vc=n((e,t)=>{try{return Jt(e,t)?.attrs.status==="succeeded"}catch{return!0}},"isPathStatusSucceeded"),xy=n((e,t)=>{if(!e)return!0;let{objects:r}=e;if(!r||!r.length)return!0;let o=r.filter(c=>!Array.isArray(c)&&!!c),i=r?.filter(c=>Array.isArray(c)&&!!c),s=o.every(c=>vc(c,t)),l=i?.every(c=>c.some(d=>vc(d,t)));return l!==void 0?s&&l:s},"hasSucceededRequiredObjects"),Ja=n(({requirements:e,object:t,user:r,progress:o})=>{if(o&&Object.keys(o).length||!e)return!0;let i=tc(e.skills,r.skills);return xy(e,t)&&i},"meetsRequirements"),wy=n(e=>{let{prev:t,parent:r,attrs:o}=e;return!r.progress||!o.hasStarted||Date.now()<o.scopeEnd&&Kc(t)?"blocked":"available"},"projectInPiscineStatus"),xc=n((e,t)=>{let{attrs:r,progress:o}=e,{requirements:i,parentType:s}=r,l=bt(o);return l||(Ja({object:e,requirements:i,user:t,progress:o})?s==="piscine"?wy(e):"available":"blocked")},"projectStatus"),Kc=n(e=>e?.attrs.inScope&&e?.attrs.status!=="succeeded","notSucceeded"),Iy=n(e=>{for(let t of e){if(!Un(t))continue;if(!t.progress)return"failed";let r=bt(t.progress);if(r&&r!=="succeeded")return r}return"succeeded"},"successStatus"),Wa=n(e=>{let{prev:t,parent:r,attrs:o,progress:i}=e;if(!r||!r.progress||!o.hasStarted||!o.special&&Date.now()>o.scopeEnd&&Kc(kc(t,Sc)))return"blocked";let s=Object.values(e.children||{});return s.length?Iy(s):bt(i)||"available"},"questStatus"),ky=n((e,t)=>{let{progress:r,attrs:o}=e,{requirements:i}=o;return Ja({object:e,requirements:i,user:t,progress:r})},"getMeetsRequirements"),wc=n((e,t)=>{let{progress:r,event:o,attrs:i}=e,{requirements:s}=i,l=bt(r);return l||(!Ja({object:e,requirements:s,user:t,progress:r})&&!o?.registeredPosition?"blocked":"available")},"getPiscineStatus"),Sy=n(e=>{let{progress:t,event:r,attrs:o}=e,i=bt(t);return i||(!r||Date.now()<o.start?"blocked":"available")},"raidStatus"),Cy=n(()=>"available","alwaysOpen"),_y=n((e,t)=>t?.event&&(e==="interview"||e==="piscine-registration")&&new Date(t.event.endAt)>Date.now(),"isWaitingEndOfEvent"),$y=n(e=>{let t=e.type.endsWith("-registration"),r=e.type.split("-")[0],o=t?ds(e.parent.parent.children,r):e;if(!o)return"blocked";let i=o.lastProgress,s=bt(i);return s==="succeeded"&&_y(e.type,o.lastProgress)?"available":s||(!e.prev||e.prev&&e.prev.attrs.status==="succeeded"?"available":"blocked")},"onboardingStatus"),Nr={type:"string",label:"Unlock system",...$({"previous step validated":$y}),options:["blocked","available","succeeded","failed"],required:!0},Ye={type:"string",label:"Unlock system and result status",required:!0,options:["blocked","available","succeeded","failed"]};Z.status={campus:{onboarding:{type:"string",private:!0,required:!0,...$({"always open":Cy})},piscine:{...Ye,...$({"by requirements and event":wc})}},onboarding:{administration:Nr,games:Nr,"piscine-registration":Nr,"module-registration":Nr,interview:Nr},piscine:{exam:{...Ye,...$({"by event":Wa})},quest:{...Ye,...$({"by scope":Wa})},raid:{...Ye,...$({"by event":Sy})},project:{...Ye,editable:!0,editableDefaultValue:"available",...$({"by requirements":xc})}},quest:{exercise:{...Ye,editable:!0,editableDefaultValue:"available",...$({"one by one":vy})}},exam:{exercise:{...Ye,editable:!0,editableDefaultValue:"available",...$({"one by one (grouped by difficulty)":yy})}},module:{project:{...Ye,editable:!0,editableDefaultValue:"available",...$({"by requirements":xc})},piscine:{...Ye,...$({"by requirements and event":wc})},exam:{...Ye,...$({"by event":Wa})}}};x.meetRequirements=b(!1,{label:"User meet requirement",restrictive:!0,required:!0,hidden:!0,...$({"by requirements":ky})});Z.meetsRequirements={module:{piscine:x.meetRequirements,project:x.meetRequirements}};var Ay=n(e=>`/markdown/root/public/${`subjects/${Ac(e)}/README.md`}`,"getSubject"),Ua=b("",{label:"Subject URL",editable:!0,required:!0,...$({"README.md in subject folder":Ay})});O.subject={exercise:Ua,project:Ua,raid:Ua};var jn=b("",{editable:!0,...gt});x.teamworkRankName=b("",{label:"Rank name",type:"string",editable:!0,required:!0,primary:!0,check:n((e,t)=>{let{teamworkRanks:r}=t.attrs;if(r?.filter(i=>i.name===e)?.length>1)throw Error(`Name "${e}" is already set for a teamwork rank definition! A given name can only be attributed once to a rank.`)},"check")});x.teamworkRankParticipations=b(0,{label:"Group Participations",instruction:"The number of users the student has to work with, to unlock this rank.",editable:!0,required:!0,options:Fe(150,0),type:"number",check:n((e,t)=>{if(!Number.isInteger(e))throw Error("Must be a whole number");if(t.attrs.teamworkRanks?.filter(o=>o.groups===e)?.length>1)throw Error(`There is already a rank with ${e} users required for the rank`)},"check")});x.teamworkRanks=F({type:{name:x.teamworkRankName,groups:x.teamworkRankParticipations}});O.teamworkRanks={campus:{label:"Teamwork ranks",instruction:"List of teamwork ranks",type:[x.teamworkRanks],required:!0,editable:!0,value:n((...e)=>[de(x.teamworkRanks.type,t=>Je(t,...e))],"value"),check:n(e=>{if(!e?.length||!Array.isArray(e))throw Error("Must be a non empty array")},"check")}};O.text={"upload-step":{...jn,label:"Resume"},"sign-step":{...jn,label:"Text to agree to",required:!0},"contact-validation-step":{...jn,label:"Resume"},"avatar-step":{...jn,label:"Resume"}};x.timelineChunk=F({label:"Month guideline",type:{month:b(1,{label:"Month",editable:!0,required:!0,primary:!0,check:n((e,t)=>{if(Ae(e,1,120),t.attrs.timeline?.filter(o=>o.month===e)?.length>1)throw Error(`Month ${e} is set for different timeline guidelines! A given month can only be defined once.`)},"check")}),minLevel:b(0,{label:"Minimum level",instruction:"Minimum level to be considered on time",editable:!0,required:!0,check:n(e=>Ae(e,0,We),"check")}),expectedLevel:b(0,{label:"Expected level",editable:!0,required:!0,instruction:"Recommended level the user should achieve",check:n(e=>Ae(e,0,We),"check")}),checkpointLevel:b(0,{label:"Checkpoint level",editable:!0,required:!0,instruction:"Recommended checkpoint level the user should achieve",check:n(e=>Ae(e,0,100),"check")}),rank:b("",{label:"Rank",editable:!0,instruction:"Recommended rank the user should achieve",options:n(e=>e.attrs.ranksDefinitions?.map(t=>t.name),"options"),check:n((e,t)=>{if(!t.attrs.ranksDefinitions?.length)throw Error("Must match an existing rank name, but ranks definitions are not set.");let r=t.attrs.ranksDefinitions?.map(({name:o})=>o);if(!r.includes(e))throw Error(`Must match one of the following existing rank names: ${r.join(", ")}.`)},"check")}),skills:F({label:"Skills",instruction:"Recommended skills the user should get",editable:!0,value:{},type:de(Ra,({name:e,type:t,description:r})=>({label:e,instruction:t,description:r,editable:!0,type:"number",value:1,options:Fe(100,1),check:n(o=>Ae(o,1,100),"check")}))}),notes:b("",{label:"Other notes",instruction:"Write any other notes or expectations the user should aim for",editable:!0})}});var Ic={label:"Timeline of the curriculum",instruction:"Create a timeline with monthly expectations for users to better track their progression over time",value:n((...e)=>[de(x.timelineChunk.type,t=>Je(t,...e))],"value"),editable:!0,restrictive:!0,type:[x.timelineChunk],check:n(e=>{if(!e?.length||!Array.isArray(e))throw Error("Must be a non empty array")},"check")};O.timeline={module:Ic,piscine:Ic};x.adminSelectionValidation=F({type:{type:b("admin_selection",{required:!0,private:!0,primary:!0,label:"Type",options:["admin_selection"]})},label:"Admin selection",description:"Admins manually select which submissions move forward."});var Ey=n(({attrs:e})=>e.language&&`ghcr.io/01-edu/test-${e.language}`,"getTesterImage");x.testerValidation=F({label:"Automatic testing",description:"The solution submitted by the user will be automatically tested and a result will immediately be available.",type:{type:b("tester",{required:!0,private:!0,label:"Type",options:["tester"]}),testImage:{type:"string",label:"Docker image",required:!0,editable:!0,primary:!0,instruction:"used to run the tests",...$({"from language":Ey})},cooldown:b(3*6e4,{required:!0,editable:!0,label:"Delay between two submit"})}});var Za={type:"object",required:!0,label:"Audited by",instruction:"Match groups with auditors"},Dy=n(({attrs:e})=>({campus:{_eq:e.campus}}),"usersOfCampusWithAdmins"),qy=n(({attrs:e})=>({campus:{_eq:e.campus},_not:{roles:{slug:{_in:["admin",`campus_admin_${e.campus}`]}}}}),"userInCampus"),Ry=n(({attrs:e})=>({events:{eventId:{_eq:e.eventId}}}),"usersInEventWithAdmins"),My=n(({attrs:e})=>({_not:{roles:{slug:{_in:["admin",`campus_admin_${e.campus}`]}}},events:{eventId:{_eq:e.eventId}}}),"userInEvent"),ei={id:{_eq:1}},Ty=n(({event:e})=>({_or:[{labels:{label:{name:{_eq:`auditorFor${e?.id}`}}}},ei]}),"userAuditorForEvent"),Py=n(({attrs:e})=>({_or:[{private:{roles:{slug:{_eq:`campus_admin_${e.campus}`}}}},ei]}),"isCampusAdmin"),Ly=n(()=>ei,"noAttribution"),jy=n(e=>`/markdown/raw/root/public/${`subjects/${Ac(e)}/audit/README.md`}`,"getAuditPath"),ti={required:!0,editable:!0,type:"string",label:"Audit form URL",instruction:"List of questions asked by the auditor during the audit. The URL should return raw markdown",...$({"README in audit folder":jy})};x.adminAuditValidationDelay=b(0,{label:"Audit duration",editable:!0,required:!0,instruction:"Time that the admins have to complete an audit before it expires"});x.adminAuditValidationRequired=b(1,{label:"Number required",required:!0,instruction:"Minimum of audits required",check:n(e=>{if(e<1)throw Error("must be at least one")},"check")});x.adminAuditValidationRatio=b(1,{label:"Ratio",required:!0,instruction:"Proportion of extra audits generated",check:n(e=>{if(e<1)throw Error("must be at least one")},"check")});x.adminAuditValidation=F({label:"Admin audit",description:"Only admins can evaluate this content.",type:{type:b("admin_audit",{required:!0,private:!0,primary:!0,label:"Type",options:["admin_audit"]}),delay:x.adminAuditValidationDelay,required:x.adminAuditValidationRequired,ratio:x.adminAuditValidationRatio,matchWhere:{...Za,...$({"an admin of same campus":Py,"manual attribution":Ly})},form:ti}});x.userAuditValidationDelay=b(2*6048e5/6e4,{label:"Audit duration",required:!0,editable:!0,instruction:"Time that the users have to complete an audit before it expires"});x.userAuditValidationRequired=b(5,{label:"Number required",required:!0,editable:!0,instruction:"Minimum of audits required",check:n(e=>{if(e<1)throw Error("must be at least one")},"check")});x.userAuditValidationRatio=b(2,{label:"Ratio",required:!0,editable:!0,instruction:"Proportion of extra audits generated",check:n(e=>{if(e<1)throw Error("must be at least one")},"check")});x.matchInfluence=F({label:"Audit Attribution Influence",editable:!0,required:!0,instruction:"Adjust the weights in the match algorithm to influence how audits are attributed",type:{auditsRatio:b(1,{label:"Current Audit Ratio",editable:!0,required:!0}),auditsAssigned:b(1,{editable:!0,required:!0,label:"Fewest Pending Audits"}),levelProximity:b(1,{editable:!0,required:!0,label:"Level Proximity"}),lastAuditAttributed:b(1,{editable:!0,required:!0,label:"Last Audit Attributed"})}});x.userAuditValidation=F({label:"User audit",description:"Users will be assigned as auditors to peer-review the project submission. You can customise the rules of audit attribution and requirements for the group to succeed.",type:{type:b("user_audit",{required:!0,private:!0,primary:!0,label:"Type",options:["user_audit"]}),delay:x.userAuditValidationDelay,required:x.userAuditValidationRequired,ratio:x.userAuditValidationRatio,matchInfluence:x.matchInfluence,matchWhere:{...Za,...$({"any user in same campus":qy,"any user in same event":My,"any user in same campus (with admins)":Dy,"any user in same event (with admins)":Ry})},form:ti,preQuestions:{editable:!0,type:"array",label:"Pre questions",instruction:"Define a set of questions that appear before the main audit. Go to \u201Cedit & preview\u201D mode to visualize the question content"},postQuestions:{editable:!0,type:"array",label:"Post questions",instruction:"Define a set of questions that appear after the main audit. Go to \u201Cedit & preview\u201D mode to visualize the question content"}}});x.raidAuditorValidation=F({label:"Dedicated auditors for event",description:"Define a list of users that will audit the content. This list is created on each event related to this content, and needs to be available before the event ends.",type:{type:b("dedicated_auditors_for_event",{required:!0,private:!0,primary:!0,label:"Type",options:["dedicated_auditors_for_event"]}),delay:x.adminAuditValidationDelay,required:x.adminAuditValidationRequired,ratio:x.adminAuditValidationRatio,matchWhere:{...Za,...$({"any user labelled as event's auditor ":Ty})},form:ti}});var Or={label:"Evaluations required",instruction:"Define the evaluation methods for this content",check:n(e=>{if(!e.length)throw Error("must have at least one element")},"check"),required:!0,editable:!0};O.validations={project:{...Or,type:[x.userAuditValidation],value:n((...e)=>[de(x.userAuditValidation.type,t=>Je(t,...e))],"value")},raid:{...Or,type:[x.adminAuditValidation,x.raidAuditorValidation],maxElements:1,value:n((...e)=>[de(x.adminAuditValidation.type,t=>Je(t,...e))],"value")},exercise:{...Or,type:[x.testerValidation],value:n((...e)=>[de(x.testerValidation.type,t=>Je(t,...e))],"value")},piscine:{...Or,type:[x.adminSelectionValidation],value:n((...e)=>[de(x.adminSelectionValidation.type,t=>Je(t,...e))],"value")},interview:{...Or,type:[x.adminSelectionValidation],value:n((...e)=>[de(x.adminSelectionValidation.type,t=>Je(t,...e))],"value")}};O.videos={quest:b("https://www.youtube.com/",{type:"string",label:"Videos URL",editable:!0,check:Rc})};O.legalText={"avatar-step":b("Please make sure to upload a photograph that complies with the training center's internal regulations and standards of decency. This photo will be visible to the teaching staff to support essential individual academic monitoring, as well as to other learners to facilitate peer-to-peer collaboration. Any request for deletion or modification must be submitted to the management.",{type:"string",label:"Legal text",editable:!1,required:!0})};var Ny=n(({attrs:e})=>{if(!e.startDay)return;let t=e.startDay/7;return Math.ceil(t)},"getWeek"),Nn=b(1,{label:"Week n\xB0",required:!0,private:!0,...$({"from day n\xB0":Ny})});Z.week={piscine:{exam:Nn,quest:Nn,raid:Nn,project:{...Nn,value:1,functions:void 0,required:!1,private:!1,editable:!0}}};var Oy=n(({object:e,value:t})=>{let r=Object.values(e.parent.children).filter(({type:o,key:i})=>i!==e.key&&o==="raid");for(let{attrs:o}of r)if(o.branch===t)throw Error("Raids should have their unique branch")},"checkRaidLimitation"),Qc=n(({object:e,value:t,limit:r=9})=>{if(Object.values(e.parent.children).filter(({key:i,attrs:s})=>i!==e.key&&s.branch===t).length+1>r)throw Error(`The limit of content in a branch is ${r}`)},"checkBranchLimitation"),Yc={label:"Base Branch",instruction:"From 1 to 4",description:"Changing branch can disrupt the piscine timeline.",required:!0,editable:!0,hidden:!0},Fy=n(e=>{let r={};for(let i of Object.values(e.parent.children||{})){let s=i.attrs.branch;r[s]=(r[s]||0)+1}return[1,2,3,4].filter(i=>(r[i]||0)<9)},"getBranchOptions"),On=b(1,{...Yc,options:Fy,check:n((e,t)=>{zn(e,1,4),Qc({object:t,value:e})},"check")}),By=b(1,{...Yc,options:[1,2,3,4],check:n((e,t)=>{zn(e,1,4),Oy({object:t,value:e}),Qc({object:t,value:e})},"check")});Z.branch={piscine:{quest:On,project:On,raid:By,sharedBranch:On,exam:On}};var za=b(0,{required:!0,private:!0}),Wy=n(({parent:e})=>e.attrs.xpIndex,"parentXpIndex"),Uy=n(({prev:e,parent:t})=>e?(e.attrs.xpIndex||0)+(Xa(e)||1):t?.attrs.xpIndex||0,"getXpIndex"),Lt={required:!0,private:!0,type:"number",...$({"from previous xpIndex and XP coefficient (or parent if exam or no prev)":Uy})};Z.xpIndex={campus:{module:za,piscine:za},module:{piscine:za,project:Lt,exam:Lt},piscine:{exam:Lt,project:Lt,quest:Lt,raid:Lt},quest:{exercise:Lt},exam:{exercise:{required:!0,private:!0,type:"number",...$({"from parent xpIndex":Wy})}}};var ri={ab:"Abkhazian",aa:"Afar",af:"Afrikaans",sq:"Albanian",am:"Amharic",ar:"Arabic",hy:"Armenian",as:"Assamese",ay:"Aymara",az:"Azerbaijani",ba:"Bashkir",eu:"Basque",bn:"Bengali (Bangla)",dz:"Bhutani",bh:"Bihari",bi:"Bislama",br:"Breton",bg:"Bulgarian",my:"Burmese",be:"Byelorussian (Belarusian)",km:"Cambodian",ca:"Catalan",zh:"Chinese (Simplified)",co:"Corsican",hr:"Croatian",cs:"Czech",da:"Danish",nl:"Dutch",en:"English",eo:"Esperanto",et:"Estonian",fo:"Faeroese",fa:"Farsi",fj:"Fiji",fi:"Finnish",fr:"French",fy:"Frisian",gl:"Galician",gd:"Gaelic (Scottish)",gv:"Gaelic (Manx)",ka:"Georgian",de:"German",el:"Greek",kl:"Greenlandic",gn:"Guarani",gu:"Gujarati",ha:"Hausa",he:"Hebrew",hi:"Hindi",hu:"Hungarian",is:"Icelandic",id:"Indonesian",ia:"Interlingua",ie:"Interlingue",iu:"Inuktitut",ik:"Inupiak",ga:"Irish",it:"Italian",ja:"Japanese",kn:"Kannada",ks:"Kashmiri",kk:"Kazakh",rw:"Kinyarwanda (Ruanda)",ky:"Kirghiz",rn:"Kirundi (Rundi)",ko:"Korean",ku:"Kurdish",lo:"Laothian",la:"Latin",lv:"Latvian (Lettish)",li:"Limburgish ( Limburger)",ln:"Lingala",lt:"Lithuanian",mk:"Macedonian",mg:"Malagasy",ms:"Malay",ml:"Malayalam",mt:"Maltese",mi:"Maori",mr:"Marathi",mo:"Moldavian",mn:"Mongolian",na:"Nauru",ne:"Nepali",no:"Norwegian",oc:"Occitan",or:"Oriya",om:"Oromo (Afan, Galla)",ps:"Pashto (Pushto)",pl:"Polish",pt:"Portuguese",pa:"Punjabi",qu:"Quechua",rm:"Rhaeto-Romance",ro:"Romanian",ru:"Russian",sm:"Samoan",sg:"Sangro",sa:"Sanskrit",sr:"Serbian",sh:"Serbo-Croatian",st:"Sesotho",tn:"Setswana",sn:"Shona",sd:"Sindhi",si:"Sinhalese",ss:"Siswati",sk:"Slovak",sl:"Slovenian",so:"Somali",es:"Spanish",su:"Sundanese",sw:"Swahili (Kiswahili)",sv:"Swedish",tl:"Tagalog",tg:"Tajik",ta:"Tamil",tt:"Tatar",te:"Telugu",th:"Thai",bo:"Tibetan",ti:"Tigrinya",to:"Tonga",ts:"Tsonga",tr:"Turkish",tk:"Turkmen",tw:"Twi",ug:"Uighur",uk:"Ukrainian",ur:"Urdu",uz:"Uzbek",vi:"Vietnamese",vo:"Volap\xFCk",cy:"Welsh",wo:"Wolof",xh:"Xhosa",yi:"Yiddish",yo:"Yoruba",zu:"Zulu"},s$=Object.fromEntries(Object.entries(ri).map(([e,t])=>[t,e]));var Jc={boolean:n(e=>typeof e=="boolean","boolean"),number:n(e=>typeof e=="number","number"),string:n(e=>typeof e=="string","string"),object:n(e=>typeof e=="object"&&e!==null,"object"),array:Array.isArray},zy=n(e=>Array.isArray(e)?"array":typeof e=="object"&&e!==null?e.type||"object":typeof e,"determinType"),Vn=n((e,t,r,o)=>{let{type:i,check:s,options:l}=e;if(t==null){if(!e.required||e.value!==void 0)return!0;throw Error(`missing value for required attribute ${o}`)}if(!i)throw Error(`attribute type definition is missing for ${o}`);if(t?.type==="function"){if(e.functionsByName[t.name])return!0;throw Error(`function associated not allowed for ${o}`)}if(s?.(t,r,o),l){let u=typeof l=="function"?l(r,t):l;if(u.length===1){if(u[0]!==t)throw Error(`${o} must be ${u[0]} but was ${t}`)}else if(!u.includes(t))throw Error(`invalid option for ${o}: should be included in ${u.join(", ")}`)}if(Jc[i]){if(!Jc[i](t))throw Error(`Expect ${i} for ${o}`);return!0}if(Array.isArray(i)){if(!Array.isArray(t))throw Error(`invalid attribute value: expects an array for ${o}`);let u=i.length===1&&i[0],m=!u&&Object.fromEntries(i.map(f=>[Array.isArray(f.type)?"array":f.type?.type?.value||f.type,f]));for(let[f,y]of t.entries()){let h=Error("checks failed for all types");h.index=f,h.key=o,h.label=e.label;let v=u||m[zy(y)];if(!v)throw h.details={label:"Unknown structure",err:Error("no type matches the value")},h;try{Vn(v,y,r,o)}catch(I){throw h.details=I.details||{label:v.label||I.label,err:I},h}}return!0}if(typeof i!="object")throw Error("invalid attribute type definition");if(typeof t!="object"||t===null)throw Error("invalid attribute value: expects an object");let c=Object.entries(i),d=Object.keys(t).find(u=>!i[u]);if(d)throw Error(`${d} is invalid.`);for(let[u,m]of c)Vn(m,t[u],r,u);return!0},"typeChecker"),Gy=At(O,([e,t])=>[e,de(t,r=>({...r,check:n((o,i)=>Vn(r,o,i,e),"check")}))]),Hy=At(Z,([e,t])=>[e,de(t,r=>de(r,o=>({...o,check:n((i,s)=>Vn(o,i,s,e),"check")})))]);var oi={},Vy=Object.entries(ri);for(let[e,t]of Object.entries(Gy))for(let[r,o]of Object.entries(t)){let i=oi[r]||(oi[r]={});i[e]=o;let{label:s,...l}=o;if(o.functionsByName?.translate)for(let[c,d]of Vy){let u=`${s} - ${d}`;i[`${e}-${c}`]={...l,label:u,lgCode:c,required:!1}}}var ai={};for(let[e,t]of Object.entries(Hy))for(let[r,o]of Object.entries(t))for(let[i,s]of Object.entries(o)){let l=ai[r]||(ai[r]={}),c=l[i]||(l[i]={});c[e]=s}var Xy=de(oi,Object.entries),Ky=de(ai,e=>de(e,Object.entries)),Zc=n(e=>Xy[e.type]||[],"getDefaultAttrsEntries"),Qy=n((e,t)=>Ky[e]?.[t]||[],"getDefaultRelAttrsEntries");var Yy=n((e,t)=>{if(e==null)return t.required&&t.value;if(e.type==="function")return t.functionsByName?.[e.name]},"findDefaultOrNamedFunction"),Jy=n((e,t,r,o,i)=>{if(t==null)return;let s=Yy(t[e],r);typeof s=="function"&&(i?Object.defineProperty(t,e,{get:n(()=>s(o,i(),e),"get"),enumerable:!0}):s.name==="translate"&&(t[e]=t[`${e}-en`]))},"applyDefs"),ii=n((e,t,r,o,i)=>{let s=t[e]?.type==="function";if(Array.isArray(r.type)&&t[e]&&!s){let l=r.type.length>1&&Object.fromEntries(r.type.map(c=>[c.type.type?.value||c.type,c]));for(let c=0;c<t[e].length;c++){let d;if(l){let u=typeof t[e][c]=="object",m=u&&!!l.object,f=!t[e][c].type||typeof t[e][c].type!="string",y=Object.keys(l).join(",").slice(0,-1);u&&f&&!m&&console.warn(`Type not allowed. Object item for ${e} array (#${c} item) must have one of these "type" property: ${y}.`),d=u?l[t[e][c].type]:l[typeof t[e][c]],!d&&!m&&console.warn(`Missing type definition. Object item for ${e} array (#${c} item) must have one of these "type" property: ${y}.`)}ii(c,t[e],d||r.type[0],o,i)}}else if(typeof r.type=="object"&&t[e]&&!s)for(let[l,c]of Object.entries(r.type))ii(l,t[e],c,o,i);else Jy(e,t,r,o,i)},"expandAttr");var si=n((e,t)=>{if(!e.children)return e.children={};if(!Object.keys(e.children).length)return;let r=Zc(e);ni(r,e,t);let o;for(let i of Object.values(e.children)){i.parent=e,o&&(o.next=i)&&(i.prev=o),o=i;let s=Zc(i),l=Qy(e.type,i.type);ni(s,i,t),ni(l,i,t),si(i,t)}},"expandDynamicAttrs"),ni=n((e,t,r)=>{for(let[o,i]of e)t.attrs[o]===null&&console.warn(`value is null for ${t.name} - ${o} - ${t.id}`),ii(o,t.attrs,i,t,r)},"processAttributes");K();var ui=new Map,b$=n(e=>[...ui.values()].filter(e),"filterObject"),ed=n(e=>[e,...Object.values(e.children||{}).flatMap(ed)],"flattenCampus"),Zy=n(async e=>{let r=await(await fetch(`https://01.gritlab.ax/api/object/${e}`)).json();if(r.error)throw Error("fetch campus failed");r.path=`/${e}`,si(r),ui.clear();for(let o of ed(r))ui.set(o.path,o);return r},"fetchCampus"),li={},y$=n(e=>{let t=li[e]||(li[e]={[De]:!0}),[r,o]=C(t);return W(()=>{e&&(t.pendingFetch||(t.pendingFetch=Zy(e)),t.pendingFetch.catch(i=>({[we]:i})).then(i=>o(li[e]=i)))},[e]),r},"useCampus"),ci,di,v$=n(()=>{let[e,t]=C(di||{[De]:!0});return W(()=>{di||(ci||(ci=(async()=>(await fetch("https://01.gritlab.ax/api/object/")).json())()),ci.catch(r=>({[we]:r})).then(r=>t(di=r.campuses)))},[]),e},"useCampuses");K();var ev=n(()=>window.location.reload(),"reloadPage"),tv=n(()=>window.history.back(),"goBack"),Wr=n(e=>{let{message:t,event:r="error-message",action:o=ev,actionText:i="reload",children:s,...l}=e,c=t instanceof Error,d=c?t.message:t;return G[c?"error":"debug"](r,{message:d,stack:t.stack}),a(Qt,{textCenter:!0,...l,children:[a(ra,{children:d}),a(ee,{intent:"neutral",level:"secondary",onClick:o,children:i}),s]})},"ErrorMessage"),td=n(({admin:e,user:t})=>{let r=Bl();if(Ve(r))return a(pi,{mt20p:!0,text:"Loading"});let o=Kr(r);return e&&t&&!t.roles.some(i=>i.slug==="admin")?a(p,{children:[a(ne,{children:"Got lost? Find back your campus:"}),t.roles.map(({slug:i})=>{let s=i.split("campus_admin_")[1];return a(fn,{"data-test":s,onClick:()=>window.location.href=`/admin/${s}`,children:[a(Wt,{}),s]},s)})]}):!o&&(!e||e&&t&&t.roles.some(i=>i.slug==="admin"))?a(p,{children:[a(ne,{children:"Got lost? Find back your campus:"}),r.map(i=>a(fn,{"data-test":i.name,onClick:()=>window.location.href=`/${e?"admin":"intra"}/${i.name}`,children:[a(Wt,{}),i.name]},i.name))]}):null},"CampusesLinks"),U$=n(({admin:e,user:t,...r})=>a(Wr,{"data-test":"error-message",message:"Access Forbidden",...r,event:"403-forbidden",children:a(td,{admin:e,user:t})}),"Error403"),z$=n(({admin:e,user:t,...r})=>a(Wr,{message:`${r.uri||"404"} Not Found`,event:"404-not-found",action:tv,actionText:"go back",...r,children:a(td,{admin:e,user:t})}),"Error404"),rv=n(({error:e,...t})=>{G.error("invalid-token",e);let r=localStorage["admin-jwt-token"];return a(Qt,{fs60px:!0,...t,children:[a(p,{fMono:!0,textMinimal:!0,children:"Oopsie!"}),a(p,{fMono:!0,children:"Connection problem"}),a(ne,{mt10:!0,children:["Your token is unfortunately invalid. It may be expired, or not properly updated. ",a("br",{}),"To refresh it & have access to the platform, please sign out and sign in again!"]}),e.reason&&a(Yt,{children:["Reason: ",e.reason]}),a(p,{mt12:!0,flex:!0,children:[a(ee,{ph5:!0,icon:a(Bt,{}),onClick:ka,children:"Sign out"}),r?a(oe,{children:a(ee,{ph5:!0,ml5:!0,intent:"neutral",level:"secondary",onClick:()=>{localStorage["admin-jwt-token"]="",localStorage["hasura-jwt-token"]=r,location.reload()},children:"Or sign back as admin"})}):null]})]})},"ErrorInvalidToken"),nv=n(({error:e,...t})=>(G.error("not-authenticated",e),a(Qt,{fs60px:!0,...t,children:[a(p,{fMono:!0,textMinimal:!0,children:"Oopsie!"}),a(p,{fMono:!0,children:"Not authenticated"}),a(ne,{mt10:!0,mb12:!0,children:["You are not signed in. ",a("br",{}),"To have access to the platform, please sign in!"]}),a(Kt,{ph5:!0,icon:a(Bt,{}),href:"/",children:"Go to sign in page"})]})),"ErrorNotAuthenticated"),ov=n(({error:e})=>{let{record:t}=e,r=t.type.type==="ban";return a(Qt,{fs5:!0,children:[a(p,{alignCenter:!0,mb6:!0,children:[a(uo,{color:"var(--red)",strokeWidth:"6px",mr2:!0}),a(p,{fMono:!0,fs2:!0,children:r?"You\u2019re expelled from campus":"Your access is temporarily blocked"})]}),a(p,{mb1:!0,children:r?"You have been permanently banned from using the platform. ":"Your access to the platform has been temporarily blocked."}),a(p,{children:"Check the details below:"}),a(p,{mt7:!0,mb4:!0,alignCenter:!0,children:[a(go,{width:"18px",mr2:!0}),a(p,{children:t.message})]}),!r&&a(p,{alignCenter:!0,children:[a(so,{width:"18px",mr2:!0,strokeWidth:"8px"}),a(p,{mr4:!0,children:["From ",Ao(t.startAt)]}),t.endAt&&a(p,{children:["To ",Ao(t.endAt)]})]}),a(An,{icon:Oe,intent:"minimal",mv7:!0,mb5:!1,children:"Contact the staff for more information or if you think this is an error."}),a(Kt,{ph5:!0,onClick:ka,icon:a(oo,{mr2:!0}),href:"/",uppercase:!0,wFitContent:!0,children:"Back to homepage"})]})},"ErrorBannedUser"),G$=n(e=>{let t=e.error?.message||"Unexpected Error";return t==="Refresh token failed"?a(rv,{...e}):t==="Banned"?a(ov,{...e}):t==="Missing credentials"?a(nv,{...e}):a(Wr,{message:t,...e})},"ErrorPage"),H$=n(e=>{let t=new URLSearchParams({pid:"10005",issuetype:"10005",priority:3,customfield_10062:window.location.href,customfield_10063:e?e.login:"admin",customfield_10078:navigator.oscpu,customfield_10079:navigator.platform,customfield_10080:navigator.userAgent});window.open(`https://01talent.atlassian.net/secure/CreateIssueDetails!init.jspa?${t}`,"_blank")},"reportBug");K();var nd=n(({label:e,orderers:t,orderer:r,desc:o,asc:i="asc",paramScope:s,...l})=>{let c=(r.orderValue||"asc")===i,d=c?o||"desc":i,u=n(m=>({[`sort${s??""}`]:m,[`order${s??""}`]:m===r.param?d:i,page:void 0}),"getParams");return a(p,{...l,children:[a(U,{textMinimal:!0,fs6:!0,fMono:!0,mr5:!0,children:e||"Order by :"}),t.map(({text:m,param:f})=>a(_e,{params:u(f),replace:!1,children:a(Xn,{isActive:f===r.param,inlineFlex:!0,"data-test":m,children:[m," ",f===r.param&&(c?a(It,{width:"15px",ml1:!0}):a(wt,{width:"15px",ml1:!0}))]},m)},f))]})},"Sorters"),aA=n((e,t,r="asc")=>{let o=t?e.find(i=>i.param===t):e[0];return{text:o.text,orderBy:o.orderObj(r),orderValue:r,param:o.param}},"getOrderer");var od=n(({pages:e,currentPage:t,paramScope:r,useUrl:o=!0,setCurrentPage:i,...s})=>{if(!e.length)return a(p,{justifyCenter:!0,alignCenter:!0,mt5:!0,...s,children:a(ee,{intent:"neutral",level:"secondary",disabled:!0,children:"1"})});let l=n(d=>({[`page${r??""}`]:d}),"getNewParams"),c=n(({pageIndex:d,children:u,...m})=>o?a(Kt,{selfStretch:!0,intent:"neutral",level:"secondary",params:l(d),replace:!1,...m,children:u}):a(ee,{intent:"neutral",level:"secondary",onClick:()=>{i?.(d)},...m,children:u}),"DynamicPaginationButton");return a(p,{justifyCenter:!0,alignCenter:!0,mt5:!0,...s,children:[t>=10&&a(P.Fragment,{children:[a(c,{pageIndex:1,inlineFlex:!0,alignCenter:!0,h100p:!0,mr1:!0,children:[a(kt,{width:"15px"}),a(kt,{width:"15px"})]}),a(c,{pageIndex:t-t%10-1,h100p:!0,children:a(kt,{width:"15px"})})]}),e.filter(d=>d>=t-t%10&&d<t+(10-t%10)).map(d=>a(c,{pageIndex:d,ml1:!0,level:t!==d?"secondary":void 0,children:d},d)),t<e.length-e.length%10&&a(P.Fragment,{children:[a(c,{pageIndex:t+(10-t%10),inlineFlex:!0,alignCenter:!0,h100p:!0,ml1:!0,children:a(St,{width:"15px"})}),a(c,{pageIndex:e.length,h100p:!0,ml1:!0,children:[a(St,{width:"15px"}),a(St,{width:"15px"})]})]})]})},"Pagination"),ad=n(({label:e,useUrl:t=!0,limits:r,limit:o,setLimit:i,onSelect:s,paramScope:l,...c})=>a(pt,{minimalist:!0,items:r,emptyItem:{label:o},label:e||"Rows",onChange:d=>{t?Yo({[`limit${l??""}`]:Number(d.label),[`page${l??""}`]:void 0}):i(d.label),s?.()},...c}),"LimitSelector"),iA=n(({limitParam:e,pageParam:t=1,limits:r=[{label:"10"},{label:"20"},{label:"50"},{label:"100"}]})=>{let o=Number(e||r[2].label);return{limit:o,currentPage:Number(t),offset:o*(Number(t)-1),limitSelectorProps:{limits:r,limit:o}}},"getPagination"),sA=n((e=[{label:"10"},{label:"20"},{label:"50"},{label:"100"}],t=2,r=1)=>{let[o,i]=C(Number(e[t].label)),[s,l]=C(r);return{limit:o,setLimit:i,currentPage:s,setCurrentPage:l,offset:o*(s-1),pageButtonProps:{currentPage:s,setCurrentPage:l},limitSelectorProps:{setLimit:i,limits:e,limit:o}}},"useLimitedPagination"),lA=n((e,t)=>e.filter(r=>t.includes(r.param)).map(r=>r.filterBy),"paramToFilter"),id=n(e=>{let{label:t,useUrl:r=!0,paramName:o,filterList:i,filters:s,setFilter:l,selectedParams:c=[],paramScope:d,clearButton:u=!0,...m}=e,f=n(h=>{let v=c.includes(h)?c.filter(I=>I!==h):[...c,h];return{[`${o}${d??""}`]:v?.length>0?v:null,[`page${d??""}`]:void 0}},"getNewParams"),y=n(()=>({[`${o}${d??""}`]:null,[`page${d??""}`]:void 0}),"getEmptyParam");return a(p,{...m,"data-test":t,children:[t&&a(U,{textMinimal:!0,fs6:!0,fMono:!0,mr5:!0,children:t}),i.map(({text:h,filterBy:v,param:I})=>{let _=s.find(q=>hr(q,v));return a(_e,{onClick:()=>!r&&l(_?s.filter(q=>{hr(q,v)}):[...s,v]),params:r&&f(I),replace:!1,children:a(Xn,{"data-test":h,isActive:_,children:h},h)},h)}),u&&a(ke,{"data-test":"clear",pb1:!0,inline:!0,intent:"neutral",uppercase:!0,params:y(),onClick:()=>l?.([]),replace:!1,children:"Clear"})]})},"Filters"),av=n(e=>{if(e.length&&Array.isArray(e[0])){let t=e.filter(r=>r.length);return t.length?t.length===1?mi(t[0]):{_and:t.map(r=>mi(r))}:{}}return mi(e)},"prepareAnyWhereFilters"),mi=n(e=>e.length?e.length===1?e[0]:{_or:e}:{},"prepareWhereFilters"),cA=n(e=>!e||!e.length?null:{where:{_or:[{path:{_in:e}},...e.map(r=>({path:{_ilike:`${r}%`}}))]}},"prepareWherePaths"),dA=n(({filters:e=[],initialWhereCondition:t,search:r={}})=>!e.length&&!Object.keys(r).length?t:{_and:[t,av(e),r]},"prepareWhere"),uA=n(e=>{if(!e)return{};if(e[0]!=='"')return{user:zr(e)};let t=e.slice(1,e.at(-1)==='"'?-1:e.length);return t?{message:{_ilike:`%${t}%`}}:{}},"searchRecordCondition"),pA=n(e=>{if(!e)return{};if(e[0]==="#"){let t=e.slice(1);return t.length<1?{}:/^[0-9]+$/.test(t)?{id:{_eq:Number(t)}}:{login:{_ilike:`${t}%`}}}return/@.*\./.test(e)?{email:{_ilike:e}}:{_or:[{login:{_ilike:`%${e}%`}},{firstName:{_ilike:`%${e}%`}},{lastName:{_ilike:`%${e}%`}}]}},"searchUserCondition"),zr=n(e=>{if(!e)return{};if(e[0]==="#"){let i=e.slice(1);return i.length<1?{}:/^[0-9]+$/.test(i)?{id:{_eq:Number(i)}}:{_or:[{login:{_ilike:`%${i}%`}}]}}if(/@.*\./.test(e))return{email:{_ilike:`%${e}%`}};let t=[{firstName:{_ilike:`%${e}%`}},{lastName:{_ilike:`%${e}%`}}],r=e.split(" "),o=[];for(;r.length>1;)o.unshift(r.pop()),t.push({firstName:{_ilike:`%${r.join(" ")}%`},lastName:{_ilike:`%${o.join(" ")}%`}});return{_or:t}},"searchAdvancedUserCondition"),iv=n(e=>{if(!e)return{};let t={members:{accepted:{_eq:!0},user:{private:zr(e)}}};if(e[0]==="#"&&e.length>1){let r=e.slice(1);if(/^[0-9]+$/.test(r))return{_or:[{id:{_eq:Number(r)}},t]}}return t},"searchGroupCondition"),mA=n(e=>({user:zr(e),group:iv(e)}),"searchGroupEventCondition"),sv=n(e=>e?{auditor:{private:zr(e)}}:{},"searchGroupAuditCondition"),hA=n(e=>{if(!e)return{};let t=[sv(e),{group:{captain:{private:zr(e)}}}],r=e[0]==="#"&&e.length>1?e.slice(1):e;return/^[0-9]+$/.test(r)&&t.push({groupId:{_eq:Number(r)}}),{_or:t}},"searchAuditCondition"),fA=n(e=>{if(!e)return{};if(e[0]==="#"){let t=e.slice(1);return t.length<1?{}:{id:{_eq:Number(t)}}}return{_or:[{name:{_ilike:`%${e}%`}}]}},"searchLabelCondition"),gA=n(e=>({_or:[{object:{name:{_ilike:`%${e}%`}}},{path:{_ilike:`%${e}%`}},Number(e)&&!Number.isNaN(e)&&{id:{_eq:Number(e)}}].filter(Boolean)}),"searchEventCondition"),bA=n(e=>{if(!e)return{};if(e[0]==="#"){let t=e.slice(1);return t.length<1?{}:{id:{_eq:Number(t)}}}return{name:{_ilike:`%${e}%`}}},"searchObjectCondition"),yA=a(oe,{children:[a(p,{children:["by name: ",a(U,{yellow:!0,children:"Piscine Go"})]}),a(p,{children:["by id: ",a(U,{yellow:!0,children:"#4213"})]})]}),sd=a(oe,{children:[a(p,{children:["by login: ",a(U,{yellow:!0,children:"#ppascal"})]}),a(p,{children:["by user id: ",a(U,{yellow:!0,children:"#12312"})]}),a(p,{children:["by full name: ",a(U,{yellow:!0,children:"Pedro Pascal"})]})]}),vA=a(oe,{children:[sd,a(p,{children:["by email: ",a(U,{yellow:!0,children:"pedro@mail.com"})]})]}),xA=a(oe,{children:[a(p,{children:["by group id: ",a(U,{yellow:!0,children:"#1234"})]}),sd]}),wA=a(oe,{children:[a(p,{children:["by auditor login: ",a(U,{yellow:!0,children:"#ppascal"})]}),a(p,{children:["by auditor user id: ",a(U,{yellow:!0,children:"#4321"})]}),a(p,{children:["by auditor full name: ",a(U,{yellow:!0,children:"Pedro Pascal"})]})]}),IA=a(oe,{children:[a(p,{children:["by group id: ",a(U,{yellow:!0,children:"#1234"})]}),a(p,{children:["by captain/auditor login: ",a(U,{yellow:!0,children:"#ppascal"})]}),a(p,{children:["by captain/auditor user id: ",a(U,{yellow:!0,children:"#4321"})]}),a(p,{children:["by captain/auditor full name: ",a(U,{yellow:!0,children:"Pedro Pascal"})]})]}),ld=n(e=>{let{placeholder:t,tooltipContent:r,autocomplete:o,defaultValue:i="",useUrl:s=!0,setSearch:l,searchCondition:c=n(I=>I,"searchCondition"),paramScope:d,params:u={},...m}=e,f=Re.use(i),y=n(()=>{s?Yo({[`search${d??""}`]:f.value||null,[`page${d??""}`]:void 0,...u}):f.value?l(c(f.value)):l({})},"onSearch"),[h,v]=C(!1);return a(p,{w30p:!0,alignCenter:!0,justifyEnd:!0,relative:!0,...m,children:[a(yr,{label:t?"":"Search",inputProps:{placeholder:t,name:m.name||"search-elem",...f.props,autoComplete:o?"on":"off",onFocus:n(()=>v(!0),"onFocus"),onBlur:n(()=>v(!1),"onBlur")},onSearch:y,w100p:!0}),h&&r&&a(Ur,{bgBlack:!0,zi5:!0,absolute:!0,style:{top:"43px"},children:r})]})},"SearchElem"),rd=n(e=>e.roles?.find(t=>t.slug==="admin"),"isAdmin"),kA=n(({searchCondition:e,onValidate:t,onSelect:r,clearOnSelect:o,btnText:i,labelKey:s,dataKey:l="id",tableModel:c,limit:d=10,searchValue:u,searchLabel:m,block:f,disabled:y=!1,placeholder:h="Search...",ribbonToInputVersion:v,searchable:I,tooltipContent:_,...q})=>{let[R,E]=et("",3e3),[L,H]=C(u),[k,D]=C(),[T,X]=C(),[V,Q]=C(!1),[j,Y]=C(!1),te=Re.use(""),Ce=Me(c.getPaginatedWithCount),be={[s||l]:"asc"},Te=L?e(L):{},ae=Object.keys(Te).length===0,se=Ce(L&&j&&!ae?{where:Te,limit:d,orderBy:be,offset:0}:null,[L]);W(()=>{if(!T||!te.value)return;let pe=n(J=>{T.contains(J.target)||Y(!1)},"handleClickOutside");return document.addEventListener("click",pe,!1),()=>{document.removeEventListener("click",pe,!1)}},[T,te.value]),W(()=>{k&&k[s]!==te.value&&(r?.(),D())},[k,te.value]),W(()=>{if(te.value===k?.[s])return;Y(!!te.value);let pe=setTimeout(()=>Ee(),300);return()=>clearTimeout(pe)},[te.value]);let ze=Ve(se)?[]:Object.values(se)[0],Pe=Kr(se);if(Pe)return a(Wr,{message:Pe});let Ie=I?xn(ze.map(pe=>({label:pe[s],...pe})),te.value,!0):ze,Ee=n(()=>H(te.value),"onSearch"),he=n(pe=>{r?.(pe),Y(!1),D(o?void 0:pe),o?te.reset():te.setValue(pe[s]),o&&H()},"onClick"),vt=se.count??0;return a(p,{mb5:!0,...q,elemRef:X,children:a(p,{justifyBetween:!0,alignStart:!0,children:[a(p,{flexColumn:!0,w100p:!0,children:[a(yr,{inputProps:{placeholder:h,name:"search-and-manage",autoComplete:"off",disabled:y,...te.props,textMinimal:!k,textNeutral:!!k,onFocus:n(()=>{Y(!0),Q(!0)},"onFocus"),onBlur:n(()=>Q(!1),"onBlur")},label:m,block:f,"data-test":"searchUser",onSearch:Ee}),a(p,{relative:!0,w100p:!0,children:[L&&j&&(Ie.length?a(p,{maxH7:!0,scrollY:!0,bgLevel2:!0,bbBlack:!0,zi5:!0,absolute:!0,w100p:!0,children:[Ie.map(({matched:pe,...J})=>a(Ur,{"data-test":`result-${J[s]}`,pointer:!0,hoverBgBlack:!0,purple:pe,textMinimal:!pe,onClick:()=>he(J),pv3:!rd(J),children:a(p,{alignCenter:!0,children:[J[s]," (#",J[l],")"," ",rd(J)&&a(ue,{ml2:!0,mv2:!0,intent:"highlight",level:"secondary",children:"Admin"})]})},J.id)),ze.length!==vt&&a(Ur,{"data-test":"resultCount",bgBlack:!0,children:["+ ",vt-Ie.length," results"]})]}):a(Ur,{"data-test":"noResults",bgBlack:!0,zi5:!0,absolute:!0,w100p:!0,children:"No results"})),!L&&_&&V&&a(Ur,{bgBlack:!0,zi5:!0,absolute:!0,wFitContent:!0,children:_})]})]}),t&&(R?a(p,{justifyEnd:!0,pv2:!0,pl2:!0,children:R}):a(ee,{flexShrink0:!0,disabled:!k||y,intent:"neutral",level:"tertiary",onClick:async pe=>{pe.preventDefault();try{await t(k[l]),E(a(U,{teal:!0,children:"Succeed!"})),te.reset()}catch(J){let Le=i||"action";G.error(`${Le}-search-and-manage-component`,J),E(a(U,{red:!0,children:J.customMessage||"Failed."}))}Y(!1),r?.(),D()},children:i||"Go"}))]})})},"SearchAndManage"),Ur=w.ph3.pv3.shadowInset.fMono.uppercase.fs7.light.ellipsis.textMinimal.zi6.div();K();var cd={bgLevel1:!0,h11px_min_m:!0,h13px_s:!0,w100p:!0,ph4:!0,pv5:!0},lv=n(e=>{let[t,r]=et("",3e3),[o,{height:i}]=_t(),[s,{height:l}]=_t(),[c,d]=C(!1),{columns:u,campus:m,onSelect:f,onRemove:y,disabled:h,LineBlock:v,lineBlockProps:I,totalRequired:_,...q}=e,[R,E]=u,{title:L,available:H,search:k,paginate:D,type:T,filterProps:X,sorterProps:V,paramScope:Q}=R,{placeholder:j,tooltipContent:Y,defaultValue:te}=k||{},{pages:Ce,currentPage:be,limitSelectorProps:Te}=D||{},{title:ae,selected:se,emptyMessage:ze,type:Pe}=E,Ie=se.length>=_,Ee=n(async he=>{he.preventDefault();try{d(!0),await E.action.function()}catch(vt){G.error("right-column-action-button",vt),r(a(U,{red:!0,children:vt.message||"Failed."}))}finally{d(!1)}},"rightActionOnClick");return a(p,{justifyBetween_min_s:!0,...q,children:[a(p,{w50p_min_s:!0,mr3:!0,w100p_xs:!0,children:[a(p,{...cd,justifyBetween_min_m:!0,alignCenter_min_m:!0,bgLevel2:!0,children:a(ut,{mb4:!1,children:L||`Available ${T}`})}),a("div",{ref:o,children:[a(dd,{justifyBetween_xl:!0,alignCenter_xl:!0,children:[(X||V)&&a(p,{w70p_xl:!0,children:[X&&a(id,{...X,paramScope:Q,mt3:!1}),V&&a(nd,{...V,paramScope:Q})]}),k&&a(p,{children:a(ld,{w18px_l:!0,w18px_xl:!0,mt3_l:!0,placeholder:j||`Search ${T}...`,tooltipContent:Y,defaultValue:te,disabled:h,paramScope:Q})})]}),a(p,{maxH500px:!0,scroll:!0,children:H.length?H.map(he=>a(v,{campus:m,data:he,onManage:f,toSelect:!0,disabled:h||Ie,...I},he.id)):a(p,{bgLevel3:!0,pa3:!0,w100p:!0,children:a(ne,{children:["No ",T," found."]})})})]}),D&&a(oe,{children:[a(p,{mb3:!0,alignCenter:!0,justifyEnd:!0,mt1:!0,children:a(ad,{...Te,paramScope:Q})}),a(p,{justifyCenter:!0,mt5:!0,children:a(od,{pages:Ce,currentPage:be,paramScope:Q})})]})]}),a(p,{w50p_min_s:!0,w100p_xs:!0,children:[a(p,{...cd,justifyBetween:!0,w100p:!0,bgLevel2:!0,children:a(ut,{alignCenter:!0,mb4:!1,justifyBetween:!0,w100p:!0,children:ae||`Selected ${Pe}`})}),E.action&&a("div",{ref:s,children:a(dd,{alignCenter:!0,children:t?a(p,{justifyEnd:!0,pv2:!0,pl2:!0,children:t}):a(oe,{children:[a(ee,{intent:"neutral",icon:!c&&a(po,{}),onClick:Ee,loading:c,disabled:Ie||E.action.disabled,ml2:!0,children:E.action.text||"Add users"}),E.action.dropdown&&a($e,{left:!0,fs7:!0,hover:!0,maxW17px:!0,trigger:a(Oe,{ml2:!0,mr2:!0,width:"20px"}),content:E.action.dropdown})]})})}),a(p,{style:{maxHeight:`${i-(l||0)}px`},scroll:!0,children:se.length?se.map(he=>a(v,{campus:m,data:he,onManage:y,disabled:h,...I},he.id)):a(p,{bgLevel3:!0,pa3:!0,w100p:!0,children:a(ne,{children:["No ",Pe," selected.",a("br",{}),ze||""]})})}),_?a(p,{children:[a(ud,{children:`${se.length} / ${_} user${_>1?"s":""}${E.extraMention&&` ${E.extraMention}`}`}),Ie?a(pd,{children:"Selection full!"}):a(pd,{children:`Select ${_-se.length} more user${_-se.length>1?"s":""}.`})]}):a(ud,{children:`${se.length} user${se.length>1?"s":""}${E.extraMention?` ${E.extraMention}`:""}`})]})]})},"DoubleColumnDistribution"),dd=w.w100p.bb.borderNeutral.bgLevel3.ph3.pv3.minH13px_xl.div(),ud=n(e=>a(ne,{size:"medium",w100p:!0,justifyEnd:!0,purple:!0,mt5:!0,...e}),"UserCount"),pd=n(e=>a(ne,{size:"small",w100p:!0,justifyEnd:!0,mt2:!0,...e}),"UserCountText");K();var md="a8c0a0fc9a0e10612e338f5578287b715b14f4c6d26f99b0fa18e67cc2dccb96",cv=`.slideLeft-01 {
  animation:
    slideLeft-01 0.4s ease-in-out,
    show-01 0.4s ease-in-out;
}

@keyframes slideLeft-01 {
  0% {
    right: -50vw;
  }

  100% {
    right: 0;
  }
}

.slideRight-01 {
  animation:
    slideRight-01 0.4s ease-in-out,
    show-01 0.4s ease-in-out;
}

@keyframes slideRight-01 {
  0% {
    left: -50vw;
  }

  100% {
    left: 0;
  }
}

.collapsed-01 {
  width: 100px;
}
`;(function(){if(!(typeof document>"u")&&!document.getElementById(md)){var e=document.createElement("style");e.id=md,e.textContent=cv,document.head.appendChild(e)}})();var hd={slideLeft:"slideLeft-01",show:"show-01",slideRight:"slideRight-01",collapsed:"collapsed-01"};var fd=fe({...hd,consume:!0},w.w100p_s.lShadow.bgLevel2.pv9.pl10.pr9.pv7_s.pl8_s.pr7_s.noScrollbar.visibleX.div()),dv=n(e=>a(He,{absolute:!0,pointer:!0,mt5:!0,mr5:!0,t0:!0,r0:!0,...e}),"CloseIcon"),uv={small:"w30p",medium:"w50p",large:"w80p"},pv=n(({position:e,collapsed:t,...r})=>{let o=e==="right",i=o^t?St:kt;return a(ee,{style:{position:"absolute",top:"100px",left:o?"0":void 0,right:o?void 0:"0",transform:o?"translate(-50%, 0)":"translate(50%, 0)"},icon:a(i,{}),...r})},"CollapseButton"),gd=n(({size:e="medium",position:t,collapsible:r,children:o,style:i,...s})=>{let[l,c]=ro(!1),d=uv[e];d||(G.warnDev("Invalid drawer size",{size:e}),d=d.medium);let{minWidth:u,...m}=i||{};return a(fd,{[d]:!0,...s,collapsed:l,style:l?m:i,children:[r&&a(pv,{position:t,collapsed:l,onClick:c}),a(p,{scrollY:!0,w100p:!0,h100p:!0,children:o})]})},"Panel"),mv={fixed:!0,t0:!0,zi10:!0,h100vh:!0},hi=n(({position:e="right",closeURL:t,title:r,size:o="medium",closeOnClickOutside:i=!1,hidden:s=!0,onClose:l,children:c,collapsible:d,...u})=>{let[m,f]=C();return W(()=>{if(s||!m)return;let v=n(({target:_})=>{m.contains(_)||(l(),t&&Ko(t))},"handleClickOutside"),I=n(({keyCode:_})=>{_===27&&(l(),t&&Ko(t))},"handleEscape");return document.addEventListener("keydown",I,!1),i&&document.addEventListener("click",v,!1),()=>{document.removeEventListener("keydown",I,!1),i&&document.removeEventListener("click",v,!1)}},[m,s]),s?null:a(gd,{position:e,r0:e==="right",slideLeft:e==="right",l0:e==="left",slideRight:e==="left",elemRef:f,tabIndex:"0",hidden:s,size:o,collapsible:d,...mv,...u,children:[a(t?_e:p,{name:"close-drawer","data-test":"close-drawer",onClick:l,...t?{href:t}:null,children:a(dv,{})}),a(p,{h100p:!0,scrollY:!0,noScrollbar:!0,pr2:!0,children:[r&&a(Et,{children:r}),c]})]})},"Drawer");M(hi,{position:{type:g.oneOf(["left","right"]),default:"right",description:"Position of the Drawer (left or right)."},closeURL:{default:"",description:"URL to navigate to when closing the Drawer."},size:{type:g.oneOf(["small","medium","large"]),description:"Size of the drawer (small: 30%, medium: 50%, large: 80%)"},title:{default:"",description:"Title of the Drawer."},hidden:{default:!0,description:"Set if the Drawer is hidden or not on first render."},closeOnClickOutside:{default:!1,description:"Set to close the drawer when the user clicks outside of its container."},onClose:{default:n(()=>{},"default"),description:"Callback fired when the Drawer component is closed."},children:{default:null,description:"Pass any children as content of the Drawer."},props:{default:null,description:"Pass props to the Drawer container."}});hi.use=sr;var bd={campusStamp:re.neutral,moduleStamp:re.highlight,examStamp:"pink",projectStamp:re.success,questStamp:re.warning,piscineStamp:re.info,raidStamp:re.audit,exerciseStamp:"green",onboardingStamp:re.minimal,waitingStamp:re.audit,auditStamp:re.audit,succeededStamp:re.success,workingStamp:re.info,failedStamp:re.danger,invalidatedStamp:re.danger,expiredStamp:re.minimal,unusedStamp:re.minimal,autoFailedStamp:re.danger},hv=[...Object.keys(re),...Object.keys(bd)],fi=n(e=>Object.fromEntries(hv.map(t=>{let r=e==="primary",o=e==="secondary",i=t.endsWith("Stamp")?bd[t]:re[t],s=je(i),l=i;r&&(l=t==="neutral"?"neutralOnFill":"white");let c={textColor:l,[`bg${s}`]:r,[`border${s}`]:!r,ba:o,baTransparent:!o};return[t,c]})),"getIntentsStyles"),gi={primary:fi("primary"),secondary:fi("secondary"),tertiary:fi("tertiary")};var yd=w.inlineBlock.wFitContent.alignCenter.justifyCenter.fMono.medium.minH5px.fs7.ls1.uppercase.ba.pv1.ph3.div(),ue=n(({intent:e="neutral",level:t="primary",icon:r,iconPosition:o="left",iconProps:i,children:s,...l})=>{let c=gi[t];c||(G.warnDev("invalid ribbon level",{level:t}),c=gi.primary),e in c||(G.warnDev("invalid ribbon intent",{intent:e}),e="neutral"),["left","right"].includes(o)||(G.warnDev("invalid ribbon icon position",{iconPosition:o}),o="left");let{textColor:d,...u}=c[e];return a(yd,{flexRowReverse:r&&o==="left",[d]:!0,...u,...l,children:[s,r&&a(r,{mr2:o==="left",ml2:o==="right",width:"14px",height:"14px",color:`var(--${d})`,...i})]})},"Ribbon");M(ue,{intent:{default:"neutral",type:g.oneOf(["highlight","neutral","danger","success","warning","info","audit","minimal","exceptional","campusStamp","moduleStamp","examStamp","projectStamp","questStamp","piscineStamp","raidStamp","exerciseStamp","onboardingStamp","waitingStamp","auditStamp","succeededStamp","workingStamp","failedStamp","invalidatedStamp","expiredStamp","unusedStamp","autoFailedStamp"]),description:"Dictates the color of the ribbon"},level:{default:"primary",type:g.oneOf(["primary","secondary","tertiary"]),description:"Changes the style of the ribbon (filled, outline or just text)"},icon:{type:g.elementType,description:"Icon to be displayed inside the ribbon"},iconPosition:{default:"right",type:g.oneOf(["right","left"]),description:"Displays the icon on the left/right of the ribbon's content"}});var fv={module:"moduleStamp",piscine:"piscineStamp",exam:"examStamp",quest:"questStamp",raid:"raidStamp",exercise:"exerciseStamp",project:"projectStamp",signup:"onboardingStamp",...Object.fromEntries([...xt].map(e=>[e,"onboardingStamp"]))},gv=n(({type:e,...t})=>a(ue,{w14px:!0,wFitContent:!1,intent:fv[e],level:"secondary",...t,children:e}),"TypeRibbon"),bv={waiting:"waitingStamp",audit:"auditStamp",succeeded:"succeededStamp",working:"workingStamp",failed:"failedStamp",invalidated:"invalidatedStamp",expired:"expiredStamp",unused:"unusedStamp",autoFailed:"autoFailedStamp"},yv={working:"in progress",autoFailed:"auto failed",waiting:"waiting audit"},vv=n(({status:e,...t})=>a(ue,{w14px:!0,wFitContent:!1,intent:bv[e],...t,children:yv[e]||e}),"GroupAndAuditStatusRibbon"),vd={"blocked-long":"danger",away:"audit",restricted:"warning",notice:"info",ban:"danger","left-school":"audit",observation:"info","temporary-notice":"info"},xv=n(({recordType:e,...t})=>a(ue,{intent:vd[e.type],...t,children:e.label}),"RecordTypeRibbon"),wv={"starting soon":"minimal",finished:"minimal","in progress":"info",permanent:"highlight","unblock required":"danger"},Iv=n(({status:e,...t})=>a(ue,{intent:wv[e],level:"secondary",...t,children:e}),"RecordStatusRibbon"),xd=n(e=>{let t=Math.abs(e);return t<1?" less than 1 day":t<=10?` ${Math.round(t)} day${Math.round(t)>1?"s":""}`:` ${e<0?"over":"more"} than ${t<=31?"10 days":"1 month"}`},"recordsEndDuration"),kv={ban:"expelled",restricted:"restricted","blocked-long":"blocked",away:"away","temporary-notice":"temporary-notice","left-school":"alumni",observation:"observation"},Sv=n(({records:e,actionText:t="participate in the project",...r})=>{let o=["ban","left-school","blocked-long","restricted","away"],s=e?.filter(f=>(!f.endAt||new Date(f.endAt)>new Date)&&o.includes(f.typeName))?.sort(({typeName:f},{typeName:y})=>o.indexOf(f)-o.indexOf(y))[0];if(!s)return null;let l=new Date(s.endAt),c=new Date;if(s.endAt!==null&&l<c)return null;let d=new Date(s.startAt),u=null;l>c&&d<c?u=(l-c)/Ne:d>c&&(u=(c-d)/Ne);let m=s.typeName;return!u&&["left-school","blocked-long","ban","away","restricted"].includes(m)?a(ue,{intent:vd[m],level:"secondary",...r,children:kv[m]}):u&&["away","restricted"].includes(m)&&a($e,{trigger:a(ue,{intent:"warning",level:"secondary",...r,children:[u<0?"Un":"","Available in",xd(u)]}),pointer:!0,hover:!0,content:a(ne,{size:"small",children:`This user will be ${u<0?"un":""}available soon and might ${u<0?"be unable":"take longer"} to ${t}.`})})},"RecordRibbon"),Cv=n(({record:e,...t})=>{let r=new Date(e.endAt),o=new Date,i=e.endAt&&(r-o)/Ne;return e.endAt?a($e,{trigger:a(ue,{intent:"warning",level:"secondary",...t,children:["Available in ",xd(i)]}),pointer:!0,hover:!0,content:a(ne,{size:"small",children:"This user is unavailable for now. He might take longer to accept an invitation to a group or complete audits."})}):a(ue,{intent:"warning",level:"secondary",...t,children:"Unavailable"})},"PublicRecordRibbon"),_v={Success:"success",Fail:"danger","Auto Fail":"danger","Not in event":"warning","Not started":"minimal","In progress":"info"},$v=n(({result:e,...t})=>{switch(e){case"Success":return a(ho,{color:"var(--teal)",...t});case"Auto Fail":return a(lr,{color:"var(--red)",...t});case"Fail":return a(lr,{color:"var(--red)",...t});case"Not in event":return a(lr,{color:"var(--orange)",...t});case"In progress":return a(io,{color:"var(--blue)",...t});default:return null}},"ResultIcon"),Av=n(({result:e,label:t,...r})=>{let o=_v[e];return a(ue,{intent:o,level:"secondary",...r,children:[a($v,{result:e,mr2:!0,width:"20"}),t||e]})},"ResultRibbon"),Ev={"Not started":"minimal","In progress":"info",Completed:"success","Joined event":"highlight","Not admitted":"danger","Registered to event":"success","Waiting list":"warning","Added by admin":"highlight"},Dv=n(({status:e,...t})=>a(ue,{intent:Ev[e],level:"secondary",...t,children:e}),"RegistrationStatusRibbon"),qv=n(({label:e,showLabelName:t,...r})=>{e.labelName&&(e.name=e.labelName);let o=e.name?.startsWith("auditorFor"),i=!!e.eventId;return a(ue,{intent:o&&"audit"||(i?"highlight":"minimal"),level:"secondary",...r,children:t?e.name:o&&"Auditor"||(i?"Module cohort":"Custom label")})},"LabelRibbon"),Rv={"not started":"minimal","starting soon":"neutral","in progress":"info",finished:"neutral",succeeded:"success",failed:"danger",audit:"audit","not registered":"minimal",registered:"neutral","waiting list":"audit",setup:"neutral",invalidated:"danger","event missed":"warning","waiting selection":"audit",unknown:"minimal"},Mv={"registration open":"minimal","registration full":"warning","requirements missing":"warning","waiting list":"warning",registered:"neutral","starting soon":"neutral","future event":"neutral","in progress":"info",succeeded:"success",failed:"danger","waiting selection":"audit"},Tv=n(({status:e,level:t="secondary",...r})=>{let o=Rv[e]||"neutral";return a(ue,{intent:o,level:t,...r,children:e})},"EventStatusRibbon"),Pv=n(({status:e,...t})=>{let r=Mv[e]||"neutral";return a(ue,{intent:r,level:e==="future event"?"secondary":"primary",...t,children:e})},"EventCalendarStatusRibbon"),Lv=n(({value:e,intent:t,icon:r,...o})=>a(ue,{intent:t,level:"tertiary",icon:r,iconPosition:"left",ph0:!0,iconProps:{width:"20px"},...o,children:e}),"ExpectedTimelineRibbon");var wd=w.bShadow.bgLevel3.pv4.ph6.ph10_s.pv6_s.mb8_s.flexColumn.cursor.minW18px.w100p_s.div(),Id=w.fMono.fs6.pb3.bb.flexColumn.div(),jv=w.pv5.flexColumn.alignCenter.textCenter.div(),Nv=w.fMono.fs7.div(),kd=n(({registration:e,type:t,status:r,...o})=>{let{endAt:i,event:s}=e,l=t==="registration"&&i||t==="reminder"&&s.startAt||t==="ongoing"&&s.endAt,c=Fi(!0,1e3),d=new Date(l)-c,u=Qi(d/1e3);return a(Nv,{red:r==="urgent",purple:r==="normal",...o,children:u})},"LiveTimer"),Sd=n(({children:e,...t})=>a(wd,{"data-test":"Upcoming Events",...t,children:[a(Id,{alignCenter:!0,children:"Upcoming events"}),e]}),"EventsPanel"),Ov=n(({registration:e,type:t,object:r})=>{let o=t==="registration",i=t==="reminder",s=t==="ongoing",{position:l,capacity:c,event:d,endAt:u}=e,m=l<=c,f=o?u:d.startAt,y=new Date(f)-Date.now(),h=y<Ne,v=y<rt;return s?{status:"urgent",text:`${r.name} is happening now!`,timeInfo:"before the end",btnText:"Let's go!"}:o?{status:h?"urgent":"normal",text:l&&(m?`You're registered to ${r.name}`:`You're in position #${l} in queue for ${r.name}`)||`Register now to ${r.name}!`,timeInfo:"before closing",btnText:"Check registration"}:i?{status:v?"urgent":"normal",text:`Get ready for ${r.name} soon!`,timeInfo:"before begining",btnText:"Let's go!"}:{status:v?"urgent":"normal",text:`${r.name} is coming!`,timeInfo:"remaining",btnText:"Here we go!"}},"formatEvent"),Fv=n(({registration:e,object:t,type:r,isLast:o})=>{let{status:i,btnText:s,text:l,timeInfo:c}=Ov({registration:e,type:r,object:t});return a(jv,{alignCenter:!0,bb:!o,"data-test":"Upcoming Events",children:[a(ue,{mb3:!0,intent:"audit",level:"secondary",children:r}),l,a(kd,{mt3:!0,mb1:!0,registration:e,type:r,status:i}),a(p,{textMinimal:!0,fMono:!0,fs7:!0,children:c}),a(_e,{href:`/intra${t.path}`,params:{event:e.eventId},children:a(ee,{"data-test":s,intent:"neutral",level:"secondary",icon:a(Wt,{}),mt5:!0,children:s})})]})},"EventElement");M(Sd,{right:{type:"bool",description:"Align the trigger and the drop down to the right."},center:{type:"bool",description:"Align the trigger and the drop down to the center."},left:{type:"bool",description:"Align the trigger and the drop down to the left."},props:{description:"Pass props to the drop down container."}});K();var Cd="04e03434e77b656a0933aee03ef95517be8909c3074d5eb278cc5584bdbb7657",Bv=`.bb2-01 {
  border-bottom: solid 2px var(--grey30);
}

.bb2Off-01 {
  border-bottom: solid 2px transparent;
}
`;(function(){if(!(typeof document>"u")&&!document.getElementById(Cd)){var e=document.createElement("style");e.id=Cd,e.textContent=Bv,document.head.appendChild(e)}})();var _d={bb2:"bb2-01",bb2Off:"bb2Off-01"};var $d=fe({..._d,consume:!0},w.animate.inlineBlock.fMono.regular.fs6.ls1.pointer.mr9.pb1.capitalize.button()),Xn=n(({isActive:e,disabled:t,...r})=>a($d,{hoverNeutral:!t,bb2:e,bb2Off:!e,textMinimal:!e,inactive:t,disabled:t,...r}),"Filter");B(N,A);var Wv=w.img();K();var Ad="d5f78a8ab8d1c4995d919353827e481bbfa6c046ae7ba2a311447060489c6d99",Uv=`.hoverLabel-01:hover text {
  opacity: 1;
}

.hoverLabel-01:hover circle {
  stroke-width: 5;
}

.labelBox-01 {
  width: 16px;
  height: 16px;
}
`;(function(){if(!(typeof document>"u")&&!document.getElementById(Ad)){var e=document.createElement("style");e.id=Ad,e.textContent=Uv,document.head.appendChild(e)}})();var bi={hoverLabel:"hoverLabel-01",labelBox:"labelBox-01"};var zv=["purple","teal","red","green","neutral","yellow","blue","textNeutral","textMinimal","grey60"],Gv=Object.entries({s0:100,s2:95,s25:54,s37:37,s61:13,s74:6,s86:1,s100:0}),Dd=a("defs",{children:zv.map(e=>a("radialGradient",{id:`RadialGradient-${e}`,children:Gv.map(([t,r])=>a("stop",{offset:`${t.slice(1)}%`,stopColor:`var(--${e})`,stopOpacity:`${r}%`},`RadialGradient-${e}-${t}`))},`RadialGradient-${e}`))}),Hv=n((e,t)=>e==="from data"?Math.min(...t):e,"getMinY"),qd=n(({lines:e=[],minY:t=0,size:r="medium",legends:o,maxY:i,median:s,rotateLabels:l,averageScore:c,axisX:d,axisY:u,...m})=>{let[f,{width:y,height:h}]=_t(),v=h!==0&&y!==0,I=Math.max(...e.flatMap(R=>R.data.map(E=>E.x))),_=e.flatMap(({data:R})=>R.map(({y:E})=>E));if(i=i||Math.max(..._)||h,t=Hv(t,_),Number.isNaN(I)||i<t){let R=i<t?"maxY should be greater than minY":"maxX is not a number";return a(Yt,{w80p:!0,selfCenter:!0,preWrap:!0,light:!0,children:["The line graph could not be drawn: unexpected data received (",R,")"]})}let q={width:y,height:h,minY:t,maxY:i,rotateLabels:l,maxX:I};return a(oe,{children:[a(p,{minH10px:!0,elemRef:f,...m,children:v&&a("svg",{style:{overflow:"visible"},width:"100%",height:"100%",fill:"none",children:[a("title",{children:"line graph"}),a("defs",{children:a("radialGradient",{id:"RadialGradient1",children:[a("stop",{offset:"0%",stopColor:"#ffffffaa"}),a("stop",{offset:"40%",stopColor:"#ffffff55"}),a("stop",{offset:"100%",stopColor:"#ffffff00"})]})}),Dd,e.map((R,E)=>Vv({line:R,i:E,...q})),(d||u||s)&&a("g",{strokeWidth:"0.25",stroke:"var(--grey50)",children:[d&&a("line",{x1:"0",y1:h,x2:y,y2:h}),u&&a("line",{x1:"0",y1:"0",x2:"0",y2:h}),s&&a(Jv,{height:h,width:y,averageScore:c})]})]})}),o&&a(Yv,{legends:o,small:r==="small",mt8:!0})]})},"LineGraph"),Vv=n(e=>{let{i:t,width:r,height:o,line:i,minY:s,maxY:l,maxX:c,rotateLabels:d}=e,{data:u,color:m="none",shape:f="line",opacity:y="1"}=i,{strokeColor:h="white",strokeWidth:v="1"}=i,I=u.map(_=>({..._,x:_.x/c*r,y:o-(_.y-s)/(l-s)*o||0}));return a("g",{children:[f.includes("fill")&&Kv({points:I,i:t,color:m,height:o,opacity:y}),f.includes("line")&&Xv({points:I,i:t,color:m,strokeColor:h,strokeWidth:v}),Qv({points:I,rotateLabels:d,height:o,color:h,shape:f})]},`line-graph-${t}`)},"drawLine"),Xv=n(({points:e,i:t,strokeColor:r,strokeWidth:o})=>{let i=e.reduce((s,l,c)=>c===0?`M ${l.x} ${l.y}`:`${s} L ${l.x} ${l.y}`,"");return a("path",{d:i,strokeLinejoin:"round",fill:"none",stroke:`var(--${r})`,strokeWidth:o,style:{transition:"d 0.5s ease-in-out"}},`path-${t}`)},"drawPath"),Kv=n(({points:e,i:t,color:r,height:o,opacity:i})=>{let s=`M ${e[0].x} ${e[0].y}`;return e.forEach((l,c)=>{c!==0&&(s+=` L ${l.x} ${l.y}`)}),s+=` L ${e[e.length-1].x} ${o}`,s+=` L ${e[0].x} ${o} Z`,a("path",{d:s,fill:`var(--${r})`,fillOpacity:i,stroke:"none",style:{transition:"d 0.5s ease-in-out"}},`fill-${t}`)},"drawFill"),Qv=n(({points:e,rotateLabels:t,height:r,color:o,shape:i})=>e.map((s,l)=>a(oe,{children:[a("g",{className:s.labelOnHover?bi.hoverLabel:"",children:[(s.label||s.label===0)&&a(Ed,{opacity:s.labelOnHover?0:1,color:o,textAnchor:s.labelTextAnchor||"middle",x:s.x,y:s.y+(s.labelYAnchor||-15),label:s.label},`label-${l}`),i.includes("dots")&&a("circle",{className:"animate-01",fill:`var(--${o})`,stroke:`var(--${o})`,cx:s.x,cy:s.y,r:s.dotSize||5},`dot-${l}`)]}),(s.xLabel||s.xLabel===0)&&a("g",{children:[a("circle",{className:"animate-01",fill:"var(--grey40)",cx:s.x,cy:r,r:"2"},`axisXLabelDot-${l}`),a(Ed,{textAnchor:t?"end":"middle",x:s.x,y:r+25,transform:t?`rotate(-50, ${s.x}, ${r+25})`:"",label:s.xLabel},`axisXLabel-${l}`)]})]},`labels-${l}`)),"drawLabels"),Ed=n(({label:e,color:t,textAnchor:r,...o})=>{let i=Array.isArray(e)?e:[e];return a("text",{fontSize:"11px",strokeWidth:"0",fill:`var(--${t||"textMinimal"})`,fontFamily:"IBM Plex Mono",textAnchor:r,...o,children:i.map((s,l)=>a("tspan",{textAnchor:r,x:o.x,dy:l*15,children:s},l))})},"LabelGraph"),Yv=n(({legends:e,small:t=!1,...r})=>a(p,{flexWrap:!0,children:e.map(({label:o,color:i},s)=>a(p,{flex:!0,alignCenter:!0,flexWrap:!0,ma4:!t,ma2:t,...r,children:[a(p,{className:bi.labelBox,style:i==="none"?{border:"1px solid var(--grey)"}:{background:`var(--${i})`}}),a(me,{ml2:!0,flex:!0,size:"small",children:o})]},s))}),"GraphLegend"),Jv=n(({height:e,width:t,averageScore:r})=>a("g",{children:[a("line",{x1:"0",y1:e/2,x2:t,y2:e/2}),a("text",{fontSize:"11px",strokeWidth:"0",fill:"var(--grey60)",fontFamily:"IBM Plex Mono",x:t,textAnchor:"end",y:e/2+22,children:[a("tspan",{x:t,dy:"0",children:"Average score"}),a("tspan",{x:t,dy:"1.2rem",children:r})]})]}),"MedianLine");M(qd,{lines:{type:g.arrayOf(g.shape({data:g.arrayOf(g.shape({x:g.number,y:g.number,label:g.oneOfType([g.string,g.number,g.arrayOf(g.string),g.boolean]),xLabel:g.oneOfType([g.string,g.number]),labelTextAnchor:g.oneOf(["start","middle","end"]),labelYAnchor:g.number})),strokeColor:g.string,strokeWidth:g.number,color:g.string,shape:g.oneOf(["line","dots","line dots","dots line","fill","fill line","fill line dots"])})).isRequired,description:"Array containing objects with datas for each line to represent.",default:[]},axisX:{type:g.boolean,description:"Display the X axis on the graph.",default:!1},axisY:{type:g.boolean,description:"Display the Y axis on the graph.",default:!1},median:{type:g.boolean,description:"Display a median line on the graph.",default:!1},averageScore:{type:g.oneOfType([g.string,g.number,g.boolean]),description:"Display the average score under the median line on the graph.",default:!1},rotateLabels:{type:g.boolean,description:"Rotate the axis X labels at -50\xB0 ; use it for long text labels to be readable.",default:!1},props:{description:"Pass any props to your component."}});var Rd=n(({captions:e,...t})=>a(ex,{...t,children:e.map(({label:r,color:o})=>a(Zv,{label:r,color:o},r))}),"GraphCaptions"),Zv=n(({label:e,color:t})=>a(p,{[t]:!0,flex:!0,alignCenter:!0,children:[a(p,{style:{height:"1px",background:`var(--${t})`},w6px:!0,mr2:!0}),e]}),"GraphCaption"),ex=w.lh3.fs7.fMono.div();M(Rd,{captions:{type:g.arrayOf(g.shape({label:g.oneOfType([g.string,g.number]),color:g.string}))}});var yi=w.ul(),tx=w.li();K();var Md="d151631500c495a6c5d802614dda71260e38704b24152ad3198befc7ffcc6177",rx=`.navbarGradient-01 {
  background: linear-gradient(
    to bottom,
    hsl(0, 0%, 5%) 0%,
    rgba(0, 0, 0, 0.35) 59%,
    transparent 100%
  );
}
`;(function(){if(!(typeof document>"u")&&!document.getElementById(Md)){var e=document.createElement("style");e.id=Md,e.textContent=rx,document.head.appendChild(e)}})();var vi={navbarGradient:"navbarGradient-01"};var Td=fe({...vi,consume:!0},w.fixed.w100p.zi10.alignCenter.h5.t0.l0.nav()),nx=fe({...vi,consume:!0},w.noEvent.h12px.fixed.w100p.zi9.t0.l0.div()),Pd=n(({brand:e,items:t,right:r,breadcrumbs:o,solid:i,children:s,activeItem:l,...c})=>a(oe,{children:[!i&&a(nx,{navbarGradient:!0}),a(Td,{bgLevel1:i,aShadow:i,...c,children:[e&&a(ox,{children:e}),t&&a(Ld,{mlAuto:r,right:r,items:t,breadcrumbs:o,activeItem:l}),s&&a(p,{mlAuto:!0,mr6:!0,children:s})]})]}),"Navbar");M(Pd,{brand:{type:"any",description:"Pass any React component to display a brand image on the top left."},items:{type:g.arrayOf(g.shape({text:g.string,url:g.string})),description:"Display menu items ; each item has to have a text prop and an url prop."},right:{default:!1,description:"Display the menu at the right of the Navbar."},breadcrumbs:{default:!1,description:"Display breadcrumbs."},solid:{default:!1,description:"Solid design of the navbar."},children:{default:null,description:"Display children."},props:{default:null,description:"Pass props to the Navbar container."}});var ox=w.ml6.mr8.alignCenter.div(),Ld=n(({brand:e,items:t,right:r,breadcrumbs:o,activeItem:i,...s})=>{let[l,c]=C({text:i});return a(yi,{ma0:!r,pl0:!0,ml6:!e,mr6:r,alignCenter:!0,justifyBetween:!0,hidden_m:!0,ellipsis:!0,...s,children:t.map((d,u)=>a(P.Fragment,{children:[a(ke,{"data-test":d.text,href:d.url,params:d.eventId?{event:d.eventId}:null,replace:!0,children:a(ax,{uppercase:o,textNeutral:l.text===d.text,textMinimal:l.text!==d.text,mr8:u!==t.length-1&&!o,onClick:()=>c(d),children:d.text})}),o?u===t.length-1?null:a(p,{textMinimal:!0,inlineFlex:!0,mh5:!0,children:">"}):null]},`breadcrumb-${d.text}`))})},"NavbarMenu"),ax=w.fs6.pointer.ellipsis.animate.hoverNeutral.fMono.fs5.li();var ix=w.br50p.flexShrink0.alignCenter.justifyCenter.div(),sx=n(({start:e,act:t,end:r,color:o})=>`transparent ${e}deg, var(--${o||to(t)}) ${r}deg`,"gradients"),lx=n(e=>{let t=0;return[0,...e.map(([r,o])=>t+=o)]},"calcAngleRadio"),cx=n((e,t)=>{let r=Object.values(e).reduce((s,l)=>s+(l?.value||l),0),o=Object.entries(e).map(([s,l])=>[s,360*(l?.value||l)/r]);t&&o.sort(([,s],[,l])=>l-s);let i=lx(o);return o.map(([s,l],c)=>({act:s,angle:i[c]||0,color:e[s]?.color}))},"adaptToAngles"),jd=n(({stroke:e,radial:t,strokeWidth:r=20,radius:o=60,completion:i,sort:s=!1,...l})=>{if(!Object.keys(i).length)return null;let c=it(i,([y,h])=>h.value),d=cx(c,s),u=o-r,m=`conic-gradient(${d.map(({act:y,angle:h,color:v},I)=>sx({start:h,act:y,color:v,end:d[I+1]?.angle||360})).toString()})`;return a(p,{justifyCenter:!0,alignCenter:!0,relative:!0,children:[a(ix,{style:{background:`${t?"radial-gradient(transparent 0%, #1e1e1e 70%), ":""}${m}`,height:`${o}px`,width:`${o}px`},...l}),e&&a(p,{absolute:!0,br50p:!0,style:{background:"#1e1e1e",height:`${u}px`,width:`${u}px`}})]})},"PieGraph");M(jd,{stroke:{type:g.boolean,description:"Display the stroke style.",default:!1},sort:{type:g.boolean,description:"Sort the order of the slices.",default:!0},radial:{type:g.boolean,description:"Display the radial gradient style.",default:!1},radius:{type:g.number,description:"Set the radius size of the graph.",default:60},completion:{type:g.object.isRequired,description:"Set the percentage of completion for the graph."},strokeWidth:{type:g.number,description:"Set the stroke width.",default:20},props:{description:"Pass any props to your component."}});K();var Nd=n(({completion:e,color:t="var(--purple)",vertical:r,line:o,lineColor:i="var(--grey80)",data:s,label:l,rotateLabel:c,...d})=>{let u=n(({children:m,...f})=>a(p,{fMono:!0,fs7:!0,textNeutral:!0,inlineBlock:!0,w50p:!r,textCenter:r,...f,children:m}),"LabelText");return a(p,{flexColumn:r,h100p:r,...d,children:[a(p,{flexShrink0:r,order2:r,alignCenter:!0,flexColumn:r,h100p:r,children:[a(p,{style:{background:`linear-gradient(${r?"to top":"to right"}, transparent, ${t})`,width:r?"5px":`${e}%`,height:r?`${e}%`:"5px"},br2:!0,w100p:!r,h100p:r,order2:r}),a(p,{bgNone:!o,style:{height:r?`${100-e}%`:"1px",width:r?"1px":`${100-e}%`,background:i},order1:r})]}),l&&a(u,{rotate300:r&&c,order3:r,textLeft:!r,mt3:r&&c,mh2:r&&c,mt2:!0,children:l}),s&&a(u,{order1:r,textRight:!r&&l,mb3:!0,mt2:!r,textMinimal:!s||s==="0",children:s})]})},"ProgressBar");M(Nd,{completion:{type:g.number.isRequired,description:"Set the percentage of completion of the graph."},color:{type:g.string,description:"Set the color of the completion line.",default:"var(--purple)"},vertical:{type:g.boolean,description:"Display the graph vertically.",default:!1},line:{type:g.boolean,description:"Display the remaining completion line to the end.",default:!1},lineColor:{type:g.string,description:"Set the remaining completion line color.",default:"var(--grey80)"},data:{type:g.string,description:"Display the data corresponding to the completion of the graph."},label:{type:g.string,description:"Display a label linked to the graph."},rotateLabel:{type:g.boolean,description:"Rotate the label for long texts.",default:!1},props:{description:"Pass any props to your component."}});var Od=n(({width:e,height:t,items:r,fontSize:o,stepsCircle:i,strokeWidth:s=.75,...l})=>{let c=r.length<3?Array(3-r.length).fill():[],d=[...r,...c.map(()=>({completion:0}))],u=d.map((y,h)=>({...y,...no({radius:ge,currentPoint:h,total:d.length,cx:ge,cy:ge})})),m=u.map(({completion:y,angle:h})=>Fd(y,h)),f=i?[...Array(i).keys()]:[0];return a(hx,{style:{overflow:"visible"},width:e||Gr,height:t||Gr,viewBox:`0 0 ${Gr} ${Gr}`,...l,children:[f.map(y=>a("circle",{fill:"none",stroke:"rgb(170, 170, 170)",strokeWidth:s,cx:ge,cy:ge,r:(y+1)*(ge/(i||1))},y)),a("path",{strokeWidth:r.length===1?5:0,stroke:r.length===1?"var(--purple)":"none",fill:"var(--purple)",d:mx(m),style:{transition:"d 0.5s ease-in-out"}}),a(ux,{points:u}),u.map(({x:y,y:h,key:v},I)=>a(dx,{x:y,y:h,name:v,fontSize:o},v||I))]})},"RadarChart"),dx=n(({x:e,y:t,name:r,fontSize:o})=>{let i={x:e===ge,y:t===ge},s={x:e>ge,y:t>ge},l={x:e<ge,y:t<ge};return a("text",{textAnchor:i.x&&"middle"||s.x&&"start"||l.x&&"end",alignmentBaseline:i.y&&"central"||s.y&&"before-edge"||l.y&&"after-edge",x:e+(s.x&&45||l.x&&-45),y:t+(i.x&&(l.y&&-40||s.y&&40)),fill:"white",fontFamily:"IBM Plex Mono",className:"capitalize-01",fontSize:o||12,style:{background:"red"},children:r},r)},"Text"),ux=n(({points:e})=>e.map((t,r)=>a("g",{children:[a("line",{x1:t.x,y1:t.y,x2:ge,y2:ge,strokeWidth:.75,stroke:"rgb(170, 170, 170)"}),Wd.map(o=>a(px,{i:o,point:t},o))]},`diagonal-${r+1}`)),"Axes"),px=n(({point:e,i:t})=>{let{angle:r}=e,o=(t+1)*(xi/Bd),{x:i,y:s}=Fd(o,r);return a("circle",{cx:i,cy:s,fill:"rgb(170, 170, 170)",r:t===Wd.length-1&&"0"||1})},"Step"),Fd=n((e,t)=>{let r=e/xi*ge*Math.cos(t)+ge,o=e/xi*ge*Math.sin(t)+ge;return{x:r,y:o}},"getPointCoords"),mx=n(e=>e.reduce((t,{x:r,y:o},i)=>(t+=`${i?"L":"M"} ${r} ${o}`,t),""),"createPath"),xi=100,Gr=400,ge=Gr/2,Bd=10,Wd=[...Array(Bd).keys()],hx=w.mv6.svg();M(Od,{width:{type:g.oneOfType([g.string,g.number]),description:"Width of the radar chart in pixels",default:400},height:{type:g.oneOfType([g.string,g.number]),description:"Height of the radar chart in pixels",default:400},items:{type:g.array,description:"Array of items, each representing an axis on the radar chart, with properties like completion percentage"},fontSize:{type:g.number,description:"Font size for the axis labels",default:12},stepsCircle:{type:g.number,description:"Number of concentric circles to indicate completion steps on the chart",default:10},strokeWidth:{type:g.number,description:"Width of the circles' stroke in pixels",default:.75},props:{description:"Additional props passed to the SVG element of the radar chart"}});K();var Ud="fff8b1a44f4473c5694bfc37bf69fe5e88651d5436b9208851ee1dd0b50eccb1",fx=`@media (max-width: 1300px) {
  .resizableContainer-01 {
    flex-direction: column !important;
    overflow: none;
  }

  .leftPanel-01,
  .rightPanel-01 {
    border-top: solid 2px var(--grey50);
  }

  .leftPanel-01,
  .rightPanel-01 {
    height: 50%;
    width: 100% !important;
    overflow: none;
  }
}

.headerPanel-01 {
  font-size: 0.7rem;
  font-family: "IBM Plex Mono", monospace;
  font-weight: 400;
  letter-spacing: 1px;
}

.resizableContainer-01 {
  display: flex;
  width: 100%;
  height: 100%;
  position: relative;
}

.leftPanel-01 {
  flex: auto;
  overflow: auto;
}

.separator-01 {
  background-color: var(--black70);
  top: 0;
  bottom: 0;
}
.separatorHover-01:hover {
  background-color: var(--detailMinimal);
}

.rightPanel-01 {
  overflow: auto;
}
`;(function(){if(!(typeof document>"u")&&!document.getElementById(Ud)){var e=document.createElement("style");e.id=Ud,e.textContent=fx,document.head.appendChild(e)}})();var yt={resizableContainer:"resizableContainer-01",leftPanel:"leftPanel-01",rightPanel:"rightPanel-01",headerPanel:"headerPanel-01",separator:"separator-01",separatorHover:"separatorHover-01"};var zd=n(({orientation:e="vertical",children:t,disabled:r,...o})=>{let i=xe(null),s=xe(null),l=xe(null),c=xe(null),d=xe(null),u=xe(null),[m,f]=C(!1),[y,h]=C(),[v,I]=C();if(t.length!==2)return null;let _=n(q=>{h(q.clientX),I(q.clientY),f(!m),document.body.style.userSelect="none"},"handleMouseDown");return W(()=>{let q=c.current,R=i.current,E=s.current,L=l.current,H=d.current,k=u.current,D=R.offsetWidth,T=E.offsetWidth,X=L.offsetWidth,V=q.offsetWidth,Q=R.offsetHeight,j=E.offsetHeight,Y=L.offsetHeight,te=q.offsetHeight,Ce=H?.offsetHeight||0,be=k?.offsetHeight||0,Te=n(()=>{f(!1),document.body.style.userSelect="auto"},"handleMouseUp"),ae=n(se=>{if(!m)return;let ze=se.clientX-y,Pe=se.clientY-v;if(e==="horizontal"){let Ie=j+Pe,Ee=Y-Pe,he=te-Q-(Ce+be);if(Ie>=he||Ee>=he)return;E.style.height=`${Ie}px`,L.style.height=`${Ee}px`,R.style.top=`${j+Q/2}px`}else{let Ie=T+ze,Ee=X-ze,he=V-D;if(Ie>=he||Ee>=he)return;E.style.width=`${Ie}px`,L.style.width=`${Ee}px`,R.style.left=`${T+D/2}px`}},"handleMouseMove");return document.addEventListener("mousemove",ae),document.addEventListener("mouseup",Te),()=>{document.removeEventListener("mousemove",ae),document.removeEventListener("mouseup",Te)}}),a(p,{flex:!0,w100p:!0,relative:!0,...o,children:a("div",{ref:c,className:yt.resizableContainer,style:{flexDirection:e==="horizontal"?"column":"row"},children:[t[0].props.header&&a("div",{className:yt.headerPanel,ref:d,children:t[0].props.header}),a("div",{ref:s,className:yt.leftPanel,children:t[0]}),a("div",{ref:i,className:`${yt.separator} ${!r&&yt.separatorHover}`,onMouseDown:q=>r||_(q),style:{cursor:r||(e==="horizontal"?"row-resize":"col-resize"),...e==="horizontal"?{height:"15px"}:{width:"10px"}}}),t[1].props.header&&a("div",{className:yt.headerPanel,ref:u,children:t[1].props.header}),a("div",{ref:l,className:yt.rightPanel,style:{width:e==="horizontal"&&"100%"},children:t[1]})]})})},"ResizableContainer");M(zd,{children:{default:null,description:"The two containers to resize. It is also possible to add headers to the children, those headers will display the header for each container"},orientation:{default:"vertical",description:'Orientation could be either "vertical" or "horizontal" meaning that the children will scale depending on the orientation'},props:{default:null,description:"Pass props to the ResizableContainer container"}});K();var Gd="8775ffe0feae44036eafe9abf5feb040bd30298b1deb73e11f32b1ec3f9f1af2",gx=`.container-01 {
  animation: showUp-01 2s ease-in-out;
}

.spinnerBase-01 {
  margin-top: 50px;
  width: 1px;
  height: 1px;
  background-color: white;
  border-radius: 50%;
  animation: load-01 1s infinite ease-in-out;
}
.spinner-01 {
  box-shadow: 0 0 50px 50px white;
}
.miniSpinner-01 {
  box-shadow: 0 0 15px 15px white;
}

@keyframes load-01 {
  0% {
    transform: scale(0);
    opacity: 1;
  }

  100% {
    transform: scale(0.65);
    opacity: 0;
  }
}
@keyframes showUp-01 {
  0% {
    opacity: 0;
  }

  33% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}
`;(function(){if(!(typeof document>"u")&&!document.getElementById(Gd)){var e=document.createElement("style");e.id=Gd,e.textContent=gx,document.head.appendChild(e)}})();var Hr={container:"container-01",showUp:"showUp-01",spinnerBase:"spinnerBase-01",load:"load-01",spinner:"spinner-01",miniSpinner:"miniSpinner-01"};var pi=n(({text:e,mini:t,...r})=>a(p,{w100p:!0,justifyCenter:!0,alignCenter:!0,className:Hr.container,...r,children:a(p,{flexColumn:!0,alignCenter:!0,children:[a(p,{className:`${Hr.spinnerBase} ${t?Hr.miniSpinner:Hr.spinner}`}),e&&a(p,{mt11:!0,children:e})]})}),"Spinner");K();var bx=n(e=>a(ta,{hyphens:!0,textMinimal:!0,light:!0,mb4:!0,fs4_s:!0,fMono:!0,mt0:!0,...e}),"StepSectionTitle"),yx=Zn(({x:e,y:t,major:r,hidden:o,color:i,dotSize:s})=>a("g",{children:[r&&a("circle",{r:"8",cx:`${e}`,cy:`${t}`,fill:"var(--bgLevel1)",stroke:i}),!o&&a("circle",{r:`${s||(i===Ot.spark?8:5)}`,cx:`${e}`,cy:`${t}`,fill:i})]})),Ot={active:"var(--teal)",disabled:"var(--grey)",warning:"var(--orange)",error:"var(--red)",spark:"url(#RadialGradient1)"},vx=a("defs",{children:a("radialGradient",{id:"RadialGradient1",children:[a("stop",{offset:"20%",stopColor:"white"}),a("stop",{offset:"40%",stopColor:"#ffffff66"}),a("stop",{offset:"100%",stopColor:"#ffffff00"})]})}),Hd=Zn(({width:e,height:t,steps:r})=>a("svg",{width:`${e}px`,height:`${t}px`,children:[a("title",{children:"draw step bar"}),vx,r.slice(1).map((o,i)=>a("path",{stroke:o.color,d:`M${o.x},${o.y}${o.direction}${o.prev}`},i)),r.map((o,i)=>a(yx,{x:o.x,y:o.y,major:o.major,hidden:o.hidden,color:o.dotColor,dotSize:o.dotSize},i))]})),xx=n(({size:e,steps:t})=>a(Hd,{height:e,width:25,steps:t.map(({value:r,status:o,major:i,hidden:s,dotStatus:l,dotSize:c},d)=>({color:Ot[o]||"white",prev:d&&t[d-1].value*e,x:12,y:e*r,direction:"V",major:i,hidden:s,dotColor:Ot[l]||Ot[o]||"white",dotSize:c}))}),"VerticalStepsBar"),wx=n(({size:e,steps:t})=>a(Hd,{height:25,width:e,steps:t.map(({value:r,status:o,major:i,hidden:s,dotStatus:l,dotSize:c},d)=>({color:Ot[o]||"white",prev:d&&t[d-1].value*(e-20)+10,x:(e-20)*r+10,y:12,direction:"H",major:i,hidden:s,dotColor:Ot[l]||Ot[o]||"white",dotSize:c}))}),"HorizontalStepsBar"),Vd={offsetTop:0,clientHeight:0},Ix=n(({setPosition:e,index:t,children:r})=>{let o=Io(Vd,i=>e(t,i));return a("div",{ref:o,children:r})},"WithPosition"),kx=n(({origin:e,mt:t,children:r})=>{let o=P.Children.toArray(r),[i,{offsetTop:s,clientHeight:l}]=Ui(Vd),[c,d]=C([]),u=xe({}),f=c.length===o.length&&l?a(Xd,{height:l,steps:c.map(({attrs:h,index:v})=>{let{status:I,major:_,hidden:q,dotStatus:R}=o[v].props;return{value:e?(h.offsetTop-s+(t||15))/l:(h.offsetTop-s+l/2)/l,status:I,major:_,hidden:q,dotStatus:R}})}):null,y=n((h,v)=>{let I=u.current[h];I&&v.offsetTop===I.attrs.offsetTop&&v.clientHeight===I.attrs.clientHeight||(u.current[h]={attrs:v,index:h},d(Object.values(u.current)))},"setPosition");return a(p,{mv7:!0,justifyStart:!0,children:[a(p,{flexColumn:!0,alignCenter:!0,w5px:!0,children:f}),a(p,{ml3:!0,w100p:!0,children:a("div",{ref:i,children:o.map((h,v)=>a(Ix,{index:v,setPosition:y,children:P.cloneElement(h,{major:null,status:null,hidden:null})},v))})})]})},"Steps"),Xd=n(({height:e,width:t,steps:r})=>e?a(xx,{size:e,steps:r}):a(wx,{size:t,steps:r}),"StepsBar");var Sx=w.table(),Cx=w.textLeft.thead(),_x=w.tr(),$x=w.bb.ph2.pv5.fs7.fMono.textMinimal.regular.th(),Ax=w.tbody(),Ex=w.ph2.pv2.td(),Dx=w.tfoot();K();var ar=n(e=>e[e.length-1]==="/"?ar(e.slice(0,-1)):e,"trimSlashEnd"),wi=n(e=>({path:t,matchProp:r="title",children:o,notFound:i,items:s,fullMatch:l})=>a(Xs,{path:`${ar(t)}/*`,children:({match:c})=>{let d=c&&l?c["*"]:c["*"].split("/")[0];if(s)return s[d]?s[d]({path:ar(t),id:d}):i?i({path:ar(t),id:d}):console.warn("Item not Found!",{path:ar(t),id:d});let u=n((m,f)=>m?m.props[r]?P.cloneElement(m,e({id:d,path:ar(t),child:m,childId:m.props[r],matched:d?d===m.props[r]:f===0,matchProp:r},m.props)):P.cloneElement(m,{children:P.Children.map(m.props.children,u)}):null,"transformChild");return P.Children.map(o,u)}}),"MatchGenerator"),qx=wi(({matched:e})=>({hidden:!e})),Rx=wi(({matched:e,childId:t,path:r},o)=>{let i=e||o.disabled?null:()=>fr(`${r}/${t}`);return{isSelected:e,onMouseDown:i,onClick:i,...o}}),Mx=n(({children:e,...t})=>a(p,{justifyStart:!0,alignStretch:!0,w100p:!0,...t,children:e}),"TabsCardTitleContainer"),Tx=n(({active:e=!1,children:t,name:r,params:o={},...i})=>a(_e,{params:{current_tab:r,...o},replace:!1,ph6:!0,pv4:!0,mt4:!0,bgPurple:e,textNeutral:!0,bgLevel2:!e,hoverBgLevel3:!e,...i,children:t}),"TabsCardTitle"),Px=n(({active:e=!1,children:t,...r})=>e&&a(p,{bgLevel3:!0,pv5:!0,ph6:!0,mb7:!0,w100p:!0,...r,children:t}),"TabsCardContent"),Lx=n(({items:e,minify:t,active:r,evenDistribution:o=!1,setActive:i,...s})=>a(p,{flex:!0,scrollY:!0,...s,children:e.map(({icon:l,key:c})=>{let d=c===r;return a(p,{bbDetailMinimal:!d,pa3:!0,flex:!0,pointer:!0,flex1:o,justifyCenter:t||o,w100p:d||t,bgPurple:d,onClick:()=>i(c),children:!t&&(d||o)?a(p,{flex:!0,children:[a(l,{mr2:!0}),a(ut,{ellipsis:!0,inlineBlock:!1,children:Do(c)})]}):a($e,{hover:!0,content:a(me,{size:"large",children:Do(c)}),trigger:a(l,{"aria-label":c,id:c})})},c)})}),"Tabs");K();var jx=n(({width:e,strokeWidth:t,purple:r,remainingPerc:o,dotRadius:i,timer:s="00:00",textTop:l,textBottom:c,radius:d,fontSize:u=17,textColor:m="white",...f})=>{let y=e/2;return a(Nx,{radius:d,purple:r,width:e,strokeWidth:t,remainingPerc:o,dotRadius:i,...f,children:a("text",{x:y,y,fill:m,alignmentBaseline:"middle",textAnchor:"middle",fontSize:u,fontFamily:"IBM Plex Mono",children:[s,l&&a("tspan",{fontSize:1.75,fill:"var(--neutralFill)",x:y,y:y-6,children:l}),c&&a("tspan",{fontSize:1.75,fill:"var(--neutralFill)",x:y,y:y+6,children:c})]})})},"TimerCircle"),Nx=n(({radius:e,purple:t,width:r=200,strokeWidth:o=1,remainingPerc:i=1,dot:s=!0,dotRadius:l=10,children:c,...d})=>{let u=r/2,m=e||Math.abs(u-Math.max(o,l)),f=2*Math.PI*m;return a("svg",{width:`${r}px`,height:`${r}px`,children:[a("defs",{children:[a("radialGradient",{id:"RadialGradient1",children:[a("stop",{offset:"20%",stopColor:t?"var(--purple)":"white"}),a("stop",{offset:"40%",stopColor:t?"#9966ff66":"#ffffff66"}),a("stop",{offset:"100%",stopColor:t?"#9966ff00":"#ffffff00"})]}),a("radialGradient",{id:"RadialGradientwhite",children:[a("stop",{offset:"20%",stopColor:"white"}),a("stop",{offset:"40%",stopColor:"white"}),a("stop",{offset:"100%",stopColor:"white"})]})]}),a(Ox,{r:m,halfW:u,strokeWidth:o,...d}),a(Fx,{r:m,purple:t,strokeWidth:o,circlePerimeter:f,remainingPerc:i,halfW:u,...d}),s&&a(Bx,{dotRadius:l,halfW:u,r:m,remainingPerc:i}),c]})},"ElapsingCircle"),Ox=n(({r:e,halfW:t,strokeWidth:r,...o})=>a("circle",{fill:"none",r:e,cx:t,cy:t,stroke:"rgba(225,255,255,0.2)",strokeWidth:r,...o}),"FullCircle"),Fx=n(({r:e,purple:t,strokeWidth:r,circlePerimeter:o,remainingPerc:i,halfW:s,...l})=>a("circle",{fill:"none",r:e,cx:"0",cy:"0",stroke:t?"var(--purple)":"white",strokeWidth:r,strokeLinecap:"miter",strokeDasharray:`${o},${o}`,strokeDashoffset:(i-1)*o,transform:`translate(${s},${s}) rotate(-90)`,...l}),"ElapsedCircle"),Bx=n(({dotRadius:e,halfW:t,r,remainingPerc:o})=>a("circle",{fill:"url(#RadialGradient1)",r:e,cx:t+r*Math.cos(2*Math.PI*(.75-o)),cy:t+r*Math.sin(2*Math.PI*(.75-o))}),"StepDot");K();var Wx=n(({children:e,state:t,setState:r,...o})=>a(p,{justifyStart:!0,alignStretch:!0,...o,children:P.Children.map(e,i=>P.cloneElement(i,{state:t,setState:r}))}),"ToggleContainer"),Ux=w.ph3.animate.alignCenter.pointer.button(),Kd=n(({icon:e,name:t,label:r,state:o,setState:i})=>{let s=t===o;return a(Ux,{bgLevel4:!s,bgPurple:s,hoverBgLevel3:!s,onClick:()=>i(t),style:{paddingTop:"7.5px",paddingBottom:"7.5px"},children:[e&&a(e.type,{width:e.props.width||"16px",...e.props,mr2:r}),a(ne,{size:"small",mv0:!0,children:r})]})},"ToggleItem");M(Kd,{name:{default:null,description:"Defines the unique name of the toggle item, used to identify the active state."},label:{default:null,description:"Text label displayed within the toggle item."},icon:{default:null,description:"Optional icon component to be displayed alongside the label."},state:{default:null,description:"Current active state of the toggle group, matching the name to set active."},setState:{default:null,description:"Function to update the active state when the toggle item is clicked."}});var Qd={fs5:!0,mr5_l:!0,intent:"neutral",fs7:!1},zx=n(({href:e,login:t,color:r,iconProps:o={width:22},textProps:i={},...s})=>e?a(ke,{...Qd,breakAll:!0,alignCenter:!0,href:e,"data-test":`${t}-link`,icon:Vr,iconProps:{color:r,ariaLabel:"user login",strokeWidth:0,...o},...s,children:a(Ii,{...i,children:t})}):a(p,{alignCenter:!0,...s,children:[a(Vr,{color:r,ariaLabel:"user login",...o}),a(Ii,{...i,children:t})]}),"UserLogin"),Gx=n(({user:e,campusName:t,...r})=>{let{firstName:o,lastName:i,login:s,id:l}=e;return a(ke,{...Qd,breakWord:!0,href:`/admin/${t}/users/${l}`,"data-test":`${s}-link`,...r,children:a("b",{children:o&&i?`${o} ${i}`:s})})},"UserFullName"),Yd=[{color:"teal",message:"Best ratio ever!",adminMessage:"Best ratio ever!",min:2},{color:"teal",message:"Almost perfect!",adminMessage:"Almost perfect!",min:1.25},{color:"yellow",message:"You can do better!",adminMessage:"It could be better!",min:1},{color:"orange",message:"Make more audits!",adminMessage:"More audits needed!",min:.8},{color:"red",message:"Careful buddy!",adminMessage:"Low ratio...",min:0}],Hx=n(({auditRatio:e,label:t,...r})=>{if(!e)return a(p,{w10p:!0,...r,children:[t||"","-"]});let o=e&&Yd.find(s=>Number(e).toFixed(1)>=s.min),i=e&&`bg${_o(o.color)}`;return a(me,{size:"medium",...r,alignCenter:!0,children:[t||"",a(Jd,{[i]:!0,ml1:t}),Number(e).toFixed(1)]})},"AuditRatio"),Ii=w.fMono.regular.breakAll.pbMin.div(),Vx=w.borderNeutral.bb.bgLevel3.medium.pv4.ph4.div(),Jd=w.mr2.w2.h2.br50p.div();export{we as a,De as b,le as c,Xr as d,Ni as e,Kr as f,Ve as g,o0 as h,fr as i,un as j,Rh as k,Ph as l,sn as m,Xs as n,yw as o,Tl as p,S as q,z as r,Me as s,Ll as t,$g as u,ka as v,lS as w,Ca as x,cS as y,G1 as z,Hf as A,kr as B,c0 as C,et as D,Fi as E,d0 as F,u0 as G,_t as H,tt as I,Qr as J,f0 as K,g0 as L,ko as M,Gi as N,Yr as O,S0 as P,C0 as Q,_0 as R,_o as S,Ne as T,So as U,Xm as V,E0 as W,Qi as X,$o as Y,Km as Z,Yi as _,D0 as $,Ji as aa,q0 as ba,pr as ca,R0 as da,Ao as ea,Qm as fa,Zi as ga,Ym as ha,Jr as ia,M0 as ja,T0 as ka,P0 as la,L0 as ma,j0 as na,os as oa,mr as pa,Eo as qa,Do as ra,rh as sa,ls as ta,cs as ua,Fe as va,At as wa,de as xa,it as ya,oh as za,N0 as Aa,ds as Ba,O0 as Ca,hr as Da,F0 as Ea,B0 as Fa,us as Ga,W0 as Ha,U0 as Ia,z0 as Ja,G0 as Ka,qo as La,mn as Ma,Bh as Na,Sw as Oa,Xo as Pa,Ko as Qa,Wh as Ra,Yo as Sa,Cw as Ta,_w as Ua,Zo as Va,Uh as Wa,_e as Xa,ke as Ya,Hh as Za,Vh as _a,Xh as $a,Kh as ab,ee as bb,Kt as cb,Jh as db,ef as eb,fn as fb,kf as gb,yr as hb,ea as ib,ta as jb,tf as kb,rf as lb,nf as mb,of as nb,af as ob,dt as pb,lf as qb,df as rb,pf as sb,mf as tb,ra as ub,Et as vb,ut as wb,ne as xb,me as yb,hf as zb,Af as Ab,Re as Bb,xr as Cb,pt as Db,ca as Eb,wr as Fb,In as Gb,kn as Hb,ua as Ib,Sn as Jb,ha as Kb,Yf as Lb,_n as Mb,qt as Nb,$n as Ob,eg as Pb,Cn as Qb,ba as Rb,An as Sb,$e as Tb,Il as Ub,Sr as Vb,kl as Wb,Qt as Xb,pa as Yb,Bf as Zb,Wf as _b,Uf as $b,zf as ac,Sl as bc,ya as cc,gg as dc,$l as ec,El as fc,mt as gc,Dl as hc,Yt as ic,ql as jc,gS as kc,Rg as lc,bS as mc,yS as nc,Pg as oc,IS as pc,kS as qc,SS as rc,CS as sc,_S as tc,$S as uc,AS as vc,ES as wc,DS as xc,Bl as yc,qS as zc,RS as Ac,MS as Bc,TS as Cc,PS as Dc,LS as Ec,jS as Fc,NS as Gc,OS as Hc,US as Ic,zS as Jc,GS as Kc,KS as Lc,JS as Mc,$a as Nc,eC as Oc,tC as Pc,rC as Qc,sC as Rc,lC as Sc,cC as Tc,dC as Uc,uC as Vc,pC as Wc,mC as Xc,hC as Yc,Gl as Zc,fC as _c,gC as $c,bC as ad,yC as bd,vC as cd,xC as dd,wC as ed,IC as fd,kC as gd,SC as hd,CC as id,_C as jd,$C as kd,AC as ld,EC as md,MC as nd,TC as od,NC as pd,OC as qd,FC as rd,BC as sd,WC as td,XC as ud,KC as vd,QC as wd,YC as xd,JC as yd,ZC as zd,e_ as Ad,Qg as Bd,o_ as Cd,Yg as Dd,s_ as Ed,l_ as Fd,c_ as Gd,d_ as Hd,tb as Id,g_ as Jd,b_ as Kd,y_ as Ld,v_ as Md,w_ as Nd,__ as Od,$_ as Pd,A_ as Qd,E_ as Rd,ib as Sd,Jl as Td,D_ as Ud,q_ as Vd,R_ as Wd,M_ as Xd,T_ as Yd,sb as Zd,N_ as _d,qa as $d,ec as ae,Rt as be,Jt as ce,pb as de,z_ as ee,mb as fe,hb as ge,G_ as he,Ra as ie,X_ as je,K_ as ke,We as le,Bn as me,O as ne,Z as oe,x as pe,Ja as qe,ri as re,s$ as se,si as te,ui as ue,b$ as ve,y$ as we,v$ as xe,Wr as ye,U$ as ze,z$ as Ae,G$ as Be,H$ as Ce,nd as De,aA as Ee,od as Fe,ad as Ge,iA as He,sA as Ie,lA as Je,id as Ke,cA as Le,dA as Me,uA as Ne,pA as Oe,zr as Pe,iv as Qe,mA as Re,sv as Se,hA as Te,fA as Ue,gA as Ve,bA as We,yA as Xe,sd as Ye,vA as Ze,xA as _e,wA as $e,IA as af,ld as bf,rd as cf,kA as df,lv as ef,gd as ff,hi as gf,gi as hf,ue as if,gv as jf,vv as kf,xv as lf,Iv as mf,Sv as nf,Cv as of,Av as pf,Dv as qf,qv as rf,Tv as sf,Pv as tf,Lv as uf,wd as vf,Id as wf,Sd as xf,Fv as yf,Xn as zf,Wv as Af,Dd as Bf,qd as Cf,Rd as Df,yi as Ef,tx as Ff,Pd as Gf,jd as Hf,Nd as If,Od as Jf,zd as Kf,pi as Lf,bx as Mf,kx as Nf,Xd as Of,Sx as Pf,Cx as Qf,_x as Rf,$x as Sf,Ax as Tf,Ex as Uf,qx as Vf,Rx as Wf,Mx as Xf,Tx as Yf,Px as Zf,Lx as _f,jx as $f,Wx as ag,Kd as bg,zx as cg,Gx as dg,Yd as eg,Hx as fg,Ii as gg,Vx as hg,Jd as ig,N as jg};
