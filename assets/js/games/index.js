import{a as Zt,b as Fo,c as Oo,d as Go,e as qo,f as Vo,g as Jt,h as Qt,i as Ho,j as er,k as Uo,l as jo,m as tr,n as zo,o as rr,p as Yo,q as Ko,r as Wo,s as Ge,t as Xo,w as qe}from"../chunk-GZLB3E4D.js";import{a as $e,b as Fe,d as Ht,e as Ut,f as jt,h as zt,i as Yt,l as Kt,m as Wt}from"../chunk-P7YIJLB2.js";import{a as Oe,c as No,d as $o,f as Xt}from"../chunk-OI6FFO25.js";import{$f as Vt,Ae as Te,Af as Nt,B as he,Be as Bt,D as mt,E as ye,Ef as $t,Fa as yt,Ff as Ft,Gf as Ot,H as be,Kb as kt,Lf as xe,Nb as Me,Nf as Gt,Of as qt,S as pt,Td as Pt,Vd as Rt,Wd as Dt,Xb as Lt,Xd as ve,Y as ft,Za as Be,_ as gt,bb as O,cb as H,e as st,f as pe,fe as _t,g as fe,i as it,if as Mt,jg as W,k as ge,l as at,na as ht,nc as At,oa as _e,pb as q,q as lt,ua as X,ub as K,v as ct,vb as It,w as dt,wb as Ct,x as ut,xb as G,ye as Ne}from"../chunk-MRBFGLAA.js";import{$ as vt,Aa as Tt,D as k,J as bt,Qa as xt,eb as St,i as I,j as me,k as D,ka as u,la as Y,ma as n,s as S,sb as wt,tb as Et,w as re,z as B}from"../chunk-EPGEAFUN.js";import{a as s,c as g,f as Mo}from"../chunk-3XV6NNL6.js";var Wr=g((Hd,Kr)=>{function ws(e,t){for(var r=-1,o=e==null?0:e.length;++r<o&&t(e[r],r,e)!==!1;);return e}s(ws,"arrayEach");Kr.exports=ws});var Zr=g((jd,Xr)=>{var Es=Oo(),Is=(function(){try{var e=Es(Object,"defineProperty");return e({},"",{}),e}catch{}})();Xr.exports=Is});var We=g((zd,Qr)=>{var Jr=Zr();function Cs(e,t,r){t=="__proto__"&&Jr?Jr(e,t,{configurable:!0,enumerable:!0,value:r,writable:!0}):e[t]=r}s(Cs,"baseAssignValue");Qr.exports=Cs});var Xe=g((Kd,en)=>{var ks=We(),Ls=Fo(),As=Object.prototype,Ps=As.hasOwnProperty;function Rs(e,t,r){var o=e[t];(!(Ps.call(e,t)&&Ls(o,r))||r===void 0&&!(t in e))&&ks(e,t,r)}s(Rs,"assignValue");en.exports=Rs});var ae=g((Xd,tn)=>{var Ds=Xe(),_s=We();function Bs(e,t,r,o){var i=!r;r||(r={});for(var a=-1,l=t.length;++a<l;){var c=t[a],d=o?o(r[c],e[c],c,r,e):void 0;d===void 0&&(d=e[c]),i?_s(r,c,d):Ds(r,c,d)}return r}s(Bs,"copyObject");tn.exports=Bs});var nn=g((Jd,rn)=>{var Ms=ae(),Ns=tr();function $s(e,t){return e&&Ms(t,Ns(t),e)}s($s,"baseAssign");rn.exports=$s});var sn=g((e0,on)=>{function Fs(e){var t=[];if(e!=null)for(var r in Object(e))t.push(r);return t}s(Fs,"nativeKeysIn");on.exports=Fs});var ln=g((r0,an)=>{var Os=Oe(),Gs=er(),qs=sn(),Vs=Object.prototype,Hs=Vs.hasOwnProperty;function Us(e){if(!Os(e))return qs(e);var t=Gs(e),r=[];for(var o in e)o=="constructor"&&(t||!Hs.call(e,o))||r.push(o);return r}s(Us,"baseKeysIn");an.exports=Us});var Le=g((o0,cn)=>{var js=Ho(),zs=ln(),Ys=jo();function Ks(e){return Ys(e)?js(e,!0):zs(e)}s(Ks,"keysIn");cn.exports=Ks});var un=g((i0,dn)=>{var Ws=ae(),Xs=Le();function Zs(e,t){return e&&Ws(t,Xs(t),e)}s(Zs,"baseAssignIn");dn.exports=Zs});var hn=g((le,ee)=>{var Js=No(),gn=typeof le=="object"&&le&&!le.nodeType&&le,mn=gn&&typeof ee=="object"&&ee&&!ee.nodeType&&ee,Qs=mn&&mn.exports===gn,pn=Qs?Js.Buffer:void 0,fn=pn?pn.allocUnsafe:void 0;function ei(e,t){if(t)return e.slice();var r=e.length,o=fn?fn(r):new e.constructor(r);return e.copy(o),o}s(ei,"cloneBuffer");ee.exports=ei});var bn=g((c0,yn)=>{function ti(e,t){var r=-1,o=e.length;for(t||(t=Array(o));++r<o;)t[r]=e[r];return t}s(ti,"copyArray");yn.exports=ti});var Tn=g((u0,vn)=>{var ri=ae(),ni=rr();function oi(e,t){return ri(e,ni(e),t)}s(oi,"copySymbols");vn.exports=oi});var Ze=g((p0,xn)=>{var si=Uo(),ii=si(Object.getPrototypeOf,Object);xn.exports=ii});var Je=g((f0,Sn)=>{var ai=Yo(),li=Ze(),ci=rr(),di=zo(),ui=Object.getOwnPropertySymbols,mi=ui?function(e){for(var t=[];e;)ai(t,ci(e)),e=li(e);return t}:di;Sn.exports=mi});var En=g((g0,wn)=>{var pi=ae(),fi=Je();function gi(e,t){return pi(e,fi(e),t)}s(gi,"copySymbolsIn");wn.exports=gi});var Cn=g((y0,In)=>{var hi=Ko(),yi=Je(),bi=Le();function vi(e){return hi(e,bi,yi)}s(vi,"getAllKeysIn");In.exports=vi});var Ln=g((v0,kn)=>{var Ti=Object.prototype,xi=Ti.hasOwnProperty;function Si(e){var t=e.length,r=new e.constructor(t);return t&&typeof e[0]=="string"&&xi.call(e,"index")&&(r.index=e.index,r.input=e.input),r}s(Si,"initCloneArray");kn.exports=Si});var Ae=g((x0,Pn)=>{var An=Xo();function wi(e){var t=new e.constructor(e.byteLength);return new An(t).set(new An(e)),t}s(wi,"cloneArrayBuffer");Pn.exports=wi});var Dn=g((w0,Rn)=>{var Ei=Ae();function Ii(e,t){var r=t?Ei(e.buffer):e.buffer;return new e.constructor(r,e.byteOffset,e.byteLength)}s(Ii,"cloneDataView");Rn.exports=Ii});var Bn=g((I0,_n)=>{var Ci=/\w*$/;function ki(e){var t=new e.constructor(e.source,Ci.exec(e));return t.lastIndex=e.lastIndex,t}s(ki,"cloneRegExp");_n.exports=ki});var On=g((k0,Fn)=>{var Mn=$o(),Nn=Mn?Mn.prototype:void 0,$n=Nn?Nn.valueOf:void 0;function Li(e){return $n?Object($n.call(e)):{}}s(Li,"cloneSymbol");Fn.exports=Li});var qn=g((A0,Gn)=>{var Ai=Ae();function Pi(e,t){var r=t?Ai(e.buffer):e.buffer;return new e.constructor(r,e.byteOffset,e.length)}s(Pi,"cloneTypedArray");Gn.exports=Pi});var Hn=g((R0,Vn)=>{var Ri=Ae(),Di=Dn(),_i=Bn(),Bi=On(),Mi=qn(),Ni="[object Boolean]",$i="[object Date]",Fi="[object Map]",Oi="[object Number]",Gi="[object RegExp]",qi="[object Set]",Vi="[object String]",Hi="[object Symbol]",Ui="[object ArrayBuffer]",ji="[object DataView]",zi="[object Float32Array]",Yi="[object Float64Array]",Ki="[object Int8Array]",Wi="[object Int16Array]",Xi="[object Int32Array]",Zi="[object Uint8Array]",Ji="[object Uint8ClampedArray]",Qi="[object Uint16Array]",ea="[object Uint32Array]";function ta(e,t,r){var o=e.constructor;switch(t){case Ui:return Ri(e);case Ni:case $i:return new o(+e);case ji:return Di(e,r);case zi:case Yi:case Ki:case Wi:case Xi:case Zi:case Ji:case Qi:case ea:return Mi(e,r);case Fi:return new o;case Oi:case Vi:return new o(e);case Gi:return _i(e);case qi:return new o;case Hi:return Bi(e)}}s(ta,"initCloneByTag");Vn.exports=ta});var zn=g((_0,jn)=>{var ra=Oe(),Un=Object.create,na=(function(){function e(){}return s(e,"object"),function(t){if(!ra(t))return{};if(Un)return Un(t);e.prototype=t;var r=new e;return e.prototype=void 0,r}})();jn.exports=na});var Kn=g((M0,Yn)=>{var oa=zn(),sa=Ze(),ia=er();function aa(e){return typeof e.constructor=="function"&&!ia(e)?oa(sa(e)):{}}s(aa,"initCloneObject");Yn.exports=aa});var Xn=g(($0,Wn)=>{var la=Ge(),ca=Xt(),da="[object Map]";function ua(e){return ca(e)&&la(e)==da}s(ua,"baseIsMap");Wn.exports=ua});var eo=g((O0,Qn)=>{var ma=Xn(),pa=Jt(),Zn=Qt(),Jn=Zn&&Zn.isMap,fa=Jn?pa(Jn):ma;Qn.exports=fa});var ro=g((G0,to)=>{var ga=Ge(),ha=Xt(),ya="[object Set]";function ba(e){return ha(e)&&ga(e)==ya}s(ba,"baseIsSet");to.exports=ba});var io=g((V0,so)=>{var va=ro(),Ta=Jt(),no=Qt(),oo=no&&no.isSet,xa=oo?Ta(oo):va;so.exports=xa});var mo=g((H0,uo)=>{var Sa=Go(),wa=Wr(),Ea=Xe(),Ia=nn(),Ca=un(),ka=hn(),La=bn(),Aa=Tn(),Pa=En(),Ra=Wo(),Da=Cn(),_a=Ge(),Ba=Ln(),Ma=Hn(),Na=Kn(),$a=qo(),Fa=Vo(),Oa=eo(),Ga=Oe(),qa=io(),Va=tr(),Ha=Le(),Ua=1,ja=2,za=4,ao="[object Arguments]",Ya="[object Array]",Ka="[object Boolean]",Wa="[object Date]",Xa="[object Error]",lo="[object Function]",Za="[object GeneratorFunction]",Ja="[object Map]",Qa="[object Number]",co="[object Object]",el="[object RegExp]",tl="[object Set]",rl="[object String]",nl="[object Symbol]",ol="[object WeakMap]",sl="[object ArrayBuffer]",il="[object DataView]",al="[object Float32Array]",ll="[object Float64Array]",cl="[object Int8Array]",dl="[object Int16Array]",ul="[object Int32Array]",ml="[object Uint8Array]",pl="[object Uint8ClampedArray]",fl="[object Uint16Array]",gl="[object Uint32Array]",T={};T[ao]=T[Ya]=T[sl]=T[il]=T[Ka]=T[Wa]=T[al]=T[ll]=T[cl]=T[dl]=T[ul]=T[Ja]=T[Qa]=T[co]=T[el]=T[tl]=T[rl]=T[nl]=T[ml]=T[pl]=T[fl]=T[gl]=!0;T[Xa]=T[lo]=T[ol]=!1;function Pe(e,t,r,o,i,a){var l,c=t&Ua,d=t&ja,h=t&za;if(r&&(l=i?r(e,o,i,a):r(e)),l!==void 0)return l;if(!Ga(e))return e;var m=$a(e);if(m){if(l=Ba(e),!c)return La(e,l)}else{var p=_a(e),y=p==lo||p==Za;if(Fa(e))return ka(e,c);if(p==co||p==ao||y&&!i){if(l=d||y?{}:Na(e),!c)return d?Pa(e,Ca(l,e)):Aa(e,Ia(l,e))}else{if(!T[p])return i?e:{};l=Ma(e,p,c)}}a||(a=new Sa);var E=a.get(e);if(E)return E;a.set(e,l),qa(e)?e.forEach(function(x){l.add(Pe(x,t,r,x,e,a))}):Oa(e)&&e.forEach(function(x,w){l.set(w,Pe(x,t,r,w,e,a))});var L=h?d?Da:Ra:d?Ha:Va,v=m?void 0:L(e);return wa(v||e,function(x,w){v&&(w=x,x=e[w]),Ea(l,w,Pe(x,t,r,w,e,a))}),l}s(Pe,"baseClone");uo.exports=Pe});var fo=g((j0,po)=>{var hl=mo(),yl=1,bl=4;function vl(e){return hl(e,yl|bl)}s(vl,"cloneDeep");po.exports=vl});B();B();B();var nr=lt(`
  mutation start_last_session_game(
    $id: Int,
    $changes: toad_session_games_set_input,
    $objects: [toad_sessions_to_send_insert_input!]!
    ) {
    update_toad_session_games(
      where: {id: {_eq: $id}},
      _set: $changes
    ) {
      affected_rows
    }
    insert_toad_sessions_to_send(
      objects: $objects,
      on_conflict: {
        constraint: sessions_to_send_session_id_key,
        update_columns: []
      }
    ) {
      affected_rows
    }
  }
`);var Zo=s(async(e,t)=>{await Promise.all(t.map(async r=>{r.results.length>0&&await ve.remove(r.id).catch(o=>{throw o.sessionId=e,o.sessionGameId=r.id,o.sessionGameName=r.name,k.error("reset-sessionGame-results",o)}),await ne.update(r.id,{startedAt:null}).catch(o=>{throw o.sessionId=e,o.sessionGameId=r.id,o.sessionGameName=r.name,k.error("reset-sessionGame-startedAt",o)})})),await Z.update(e,{startedAt:null}).catch(r=>{throw r.sessionId=e,k.error("reset-session-startedAt",r)})},"resetAllResults"),Jo=s(async(e,t,r)=>{await Promise.all(r.map(async o=>{if(o.results.length>0&&(await ve.get(o.id)).length===0){let a=o.results.map(l=>({sessionGameId:o.id,...l}));await Se.create(a).catch(l=>{throw l.sessionId=e,l.sessionGameId=o.id,l.sessionGameName=o.name,k.error("restore-sessionGame-results",l)})}await ne.update(o.id,{startedAt:o.startedAt}).catch(i=>{throw i.sessionId=e,i.sessionGameId=o.id,i.sessionGameName=o.name,k.error("restore-sessionGame-startedAt",i)})})),await Z.update(e,{startedAt:t}).catch(o=>{throw o.sessionId=e,k.error("restore-session-startedAt",o)})},"restoreAllResults"),Qo=Rt.useMap(Zt),Z={update:s((e,t)=>Pt.update({id:e,...X(t)}),"update"),watchById:s(e=>Qo({id:e},[e]),"watchById")},ne={update:s((e,t)=>Dt.update({id:e,...X(t)}),"update"),startLast:s((e,t,r)=>nr({id:t,changes:X(r),objects:X([{endedAt:new Date(zt(e,t)).toISOString(),sessionId:e.id}])}),"startLast")},Se={create:s(e=>ve.add(X(e)),"create"),reset:Zo,restore:Jo};B();var sr=S(({instructions:e})=>n(u,{mb9:!0,children:[n(q,{fMono:!0,children:"Instructions"}),n(G,{preWrap:!0,mt7:!0,children:e})]})),es=S(({game:e})=>Fe(e)?n(Mt,{ph5:!0,intent:"success",level:"secondary",ml0_xs:!0,mt3_xs:!0,ml3:!0,children:"Finished"}):n(at,{to:e.name,children:n(O,{intent:"neutral",ml3:!0,ml0_xs:!0,mt4_xs:!0,w6:!0,"data-test":`${e.name}-start`,icon:n(Tt,{}),children:jt(e)?"Resume":"Start"})})),ir=S(({game:e,index:t})=>{let{name:r,duration:o,results:i}=e,a=i.length!==0||i.length===0&&Fe(e);return n(u,{mt7:!0,mb10:!0,children:[n(u,{flexColumn_xs:!0,justifyBetween:!0,alignStart:!0,pb2:!0,pb0_xs:!0,mb3:!0,bb:!0,bb0_xs:!0,children:[n(u,{alignCenter_xs:!0,justifyBetween_xs:!0,w100p:!0,bb_xs:!0,pb2_xs:!0,children:[n(u,{light:!0,children:["Game #",t+1," - ",pt(r)]}),n(u,{pt2:!0,pt0_xs:!0,alignCenter:!0,fMono:!0,fs7:!0,textMinimal:!0,light:!0,ls1:!0,children:[n(xt,{pr1:!0,width:"15px",strokeWidth:"5",color:"var(--neutral)"}),gt(o)]})]}),n(es,{game:e})]}),n(u,{mb3:!0,children:a&&n(Wt,{results:i,game:e,forCandidate:!0})})]})});B();B();var ar="0562d1c81c109b1467a33d07195c45e08aced6d7ae839b3cfeb5119dabc1d308",ts=`.memoryPage-01 {
  margin: 0 auto;
}

.cell-01 {
  height: min((100vw - 30px) / 8, 380px / 8);
  width: min((100vw - 30px) / 8, 380px / 8);
  display: inline-block;
  border: 1px solid black;
}

.cell-01.match-01 {
  background-color: #ee9176;
}

.cell-01.error-01 {
  background-color: red;
}

.gridContainer-01 {
  max-width: 420px;
}

.timerWidth-01 {
  max-width: 200px;
}
`;(function(){if(!(typeof document>"u")&&!document.getElementById(ar)){var e=document.createElement("style");e.id=ar,e.textContent=ts,document.head.appendChild(e)}})();var oe={memoryPage:"memoryPage-01",cell:"cell-01",match:"match-01",error:"error-01",gridContainer:"gridContainer-01",timerWidth:"timerWidth-01"};var lr="0f7adcf43f078d5c8ac6295c710d48382e1bd6d05d8cdc248a163b2b747320f4",rs=`.memoryPage-01 {
  margin: 0 auto;
}

.cell-01 {
  height: min((100vw - 30px) / 8, 380px / 8);
  width: min((100vw - 30px) / 8, 380px / 8);
  display: inline-block;
  border: 1px solid black;
}

.cell-01.match-01 {
  background-color: #ee9176;
}

.cell-01.error-01 {
  background-color: red;
}

.gridContainer-01 {
  max-width: 420px;
}

.timerWidth-01 {
  max-width: 200px;
}
`;(function(){if(!(typeof document>"u")&&!document.getElementById(lr)){var e=document.createElement("style");e.id=lr,e.textContent=rs,document.head.appendChild(e)}})();var cr={memoryPage:"memoryPage-01",cell:"cell-01",match:"match-01",error:"error-01",gridContainer:"gridContainer-01",timerWidth:"timerWidth-01"};var ns=s(({isVisible:e,wrongCell:t,missedCell:r,onMouseDown:o,displayPattern:i,isSelected:a})=>n(u,{className:cr.cell,bgTeal:i,bgRed:t,bgYellow:r,bgBlue:e&&!i,bgNeutral:!r&&!t&&!e,o10:!a&&!r&&!t&&!e,onMouseDown:o,bgPurple:a&&!r&&!t&&!e,o80:a&&!r&&!t&&!e,children:[t&&n(Et,{pa1:!0}),(i||r)&&n(wt,{pa1:!0})]}),"GridCell"),dr=ns;var Ve=s(e=>[...Array(e).keys()],"nArr"),ur=s(e=>e[Math.floor(Math.random()*8)][Math.floor(Math.random()*8)],"getRandomPoint"),fr=s((e,t)=>e+t.filled,"addFilled"),os=s(e=>e.reduce(fr,0),"getLength"),mr=s(e=>e>-1&&e<8,"inRange"),ss={x:1/0,y:1/0,filled:1.1},U=s((e,t,r)=>mr(t)&&mr(r)?e[t][r]:ss,"get"),He=16,gr=s((e,{x:t,y:r},o={})=>[o.right?!1:U(e,t+1,r),o.top?!1:U(e,t,r+1),o.left?!1:U(e,t-1,r),o.bottom?!1:U(e,t,r-1),o.topright?!1:U(e,t+1,r+1),o.bottomright?!1:U(e,t-1,r+1),o.topleft?!1:U(e,t+1,r-1),o.bottomleft?!1:U(e,t-1,r-1)].filter(Boolean),"getNearest"),is=s(e=>e[0].x!==e[1].x||e[0].y!==e[1].y?{}:e[0].y===0?{right:!0,left:!0}:e[0].x===0?{top:!0,bottom:!0}:e[0].x*e[0].y===1?{topright:!0,bottomleft:!0}:{topleft:!0,bottomright:!0},"getConstraints"),pr={topright:!0,bottomright:!0,topleft:!0,bottomleft:!0},we=s((e,t,r)=>gr(e,t,r).reduce(fr,0),"getScore"),se=s(e=>{let t=e>=He?e-Math.ceil(He/2):e,r=Ve(8).map(l=>Ve(8).map(c=>({x:l,y:c,i:l*8+c,filled:0,seed:Math.random()}))),o=r.flat(),i=Ve(5).map(()=>ur(r)).sort((l,c)=>we(r,l)-we(r,c))[0];i.filled=1;let a=[];for(a.push({x:i.x,y:i.y});os(o)<t;){let l=a.length,c=l<3?[]:[{x:a[l-1].x-a[l-2].x,y:a[l-1].y-a[l-2].y},{x:a[l-2].x-a[l-3].x,y:a[l-2].y-a[l-3].y}],d=c.length?{...e<He?pr:{},...is(c)}:{...pr},m=gr(r,i,d).filter(p=>!p.filled).sort((p,y)=>p.seed-y.seed).slice(0,3).sort((p,y)=>we(r,p,d)-we(r,y,d));m.length?i=m[0]:i=ur(r),i.filled=1,a.push({x:i.x,y:i.y})}return{length:e,pattern:o.map(l=>l.filled),nbTiles:t}},"genLevel");var hr=s((e=[])=>({level:e,initialLevelLength:3,initialLevelTimeToPlayInSeconds:0,matchedCells:[],displayDurationInSeconds:1,isDisplayingPattern:!1,isInteractive:!1,isPlaying:!1,time:0,resultsToSend:[],levelEndTime:0,wrongCell:!1}),"init"),yr=hr(),br=s((e,t)=>{switch(t.type){case"SET_CURRENT_LEVEL":return k.debug("memory-set-current-level",{nbTiles:t.level.nbTiles,length:t.level.length}),{...e,level:t.level,displayDurationInSeconds:t.level.length/4,initialLevelTimeToPlayInSeconds:1+t.level.length,time:1+t.level.nbTiles};case"RESET":return{...hr(),level:e.level,resultsToSend:e.resultsToSend,initialLevelTimeToPlayInSeconds:e.initialLevelTimeToPlayInSeconds};case"SET_MATCHED_CELLS":return{...e,matchedCells:[...e.matchedCells,t.index]};case"PLAY":return{...e,isPlaying:!0};case"DISABLE_PLAYING":return{...e,isPlaying:!1};case"DISPLAY_PATTERN":return{...e,isDisplayingPattern:!0};case"HIDE_PATTERN":return{...e,isDisplayingPattern:!1};case"ENABLE_INTERACTIVITY":return{...e,isInteractive:!0};case"DISABLE_INTERACTIVITY":return{...e,isInteractive:!1};case"SET_TIME":return{...e,time:t.seconds};case"SAVE_RESULTS":return{...e,resultsToSend:[...e.resultsToSend,{id:e.resultsToSend.length+1,attempts:t.nbFailMaxLevel+1}]};case"SAVE_INIT_RESULTS":return{...e,resultsToSend:t.results};case"LEVEL_END_TIME":return{...e,levelEndTime:t.countDownDate};case"WRONG_CELL":return{...e,wrongCell:t.wrongCell};default:return e}},"reducer");var as=s(({state:e})=>{let t=ye(),[r,{width:o}]=be(),i=e.levelEndTime>t&&e.isPlaying?(e.levelEndTime-t)/(1e3*e.initialLevelTimeToPlayInSeconds):1;return n(u,{elemRef:r,className:oe.timerWidth,w50p:!0,children:n(Vt,{remainingPerc:i,width:o,timer:`00:${e.time}`,name:e.time!==0?"time-left":"time-over"})})},"MemoryLevelTimer"),ls=S(({gameStarted:e,setErrorToShow:t,game:r,sessionId:o})=>{let[i,a]=me((A,f)=>{let _=br(A,f);return f.type==="SAVE_RESULTS"&&Ee({game:r,nextState:_,setErrorToShow:t}),_},yr),[l,c]=I(0),[d,h]=I([]),[m,p]=I(),[y,E]=I(),[L,v]=I(),[x,w]=I(0),[R,b]=I(),C=64,F=8,N=i.level.length-2,z=i.resultsToSend.length,[te,ue]=I(!1),Ro=s(()=>{a({type:"RESET"}),a({type:"PLAY"}),a({type:"DISABLE_INTERACTIVITY"}),a({type:"DISPLAY_PATTERN"}),setTimeout(()=>{a({type:"HIDE_PATTERN"}),a({type:"ENABLE_INTERACTIVITY"}),Do()},i.displayDurationInSeconds*1e3)},"play");D(()=>{if(r.results){let A=r.results.map(({attempts:f,level:_})=>({id:_,attempts:f}));a({type:"SAVE_INIT_RESULTS",results:A})}a({type:"SET_CURRENT_LEVEL",level:se(i.initialLevelLength)})},[]),D(()=>{e&&!L&&(Ro(),v(!0)),!e&&L&&(a({type:"RESET"}),a({type:"DISABLE_INTERACTIVITY"}),a({type:"DISABLE_PLAYING"}))},[e,L]),i.level.length>l&&c(i.level.length);let nt=s((A,f)=>{if(i.isInteractive)if(A===1){if(i.matchedCells.includes(f))return;a({type:"SET_MATCHED_CELLS",index:f}),i.matchedCells.length+1===i.level.nbTiles&&(p("Correct!"),i.resultsToSend.find(_=>_.id===N)||a({type:"SAVE_RESULTS",nbFailMaxLevel:x}),z+1===N&&w(0),a({type:"DISABLE_INTERACTIVITY"}),h([]),ue(!0),a({type:"DISABLE_PLAYING"}),setTimeout(()=>{a({type:"SET_CURRENT_LEVEL",level:se(i.level.length+1)}),v(!1),ue(!1),p()},1e3),clearInterval(y))}else h(i.level.pattern.map((_,De)=>_===1?De:-1).filter(_=>_!==-1)),z<N&&w(x+1),a({type:"DISABLE_PLAYING"}),a({type:"DISABLE_INTERACTIVITY"}),a({type:"WRONG_CELL",wrongCell:f}),p("You failed!"),setTimeout(()=>{p(),a({type:"SET_CURRENT_LEVEL",level:se(i.level.length===3?3:i.level.length-1)}),v(!1)},1750),clearInterval(y)},"handleCellClick"),Do=s(()=>{let A=i.initialLevelTimeToPlayInSeconds,f=Date.now()+A*1e3;a({type:"LEVEL_END_TIME",countDownDate:f});let _=setInterval(()=>{let De=Date.now(),ot=f-De,Bo=Math.ceil(ot%(1e3*60)/1e3);a({type:"SET_TIME",seconds:Bo}),ot<0&&(clearInterval(_),z<N&&w(x+1),a({type:"RESET"}),a({type:"SET_MESSAGE",message:"TIME EXPIRED"}),a({type:"SET_CURRENT_LEVEL",level:se(i.level.length===3?3:i.level.length-1)}),v(!1))},100);E(_)},"timeProgress"),_o=s(A=>{switch(A.key){case"ArrowUp":b(f=>f-F>=0?f-F:f);break;case"ArrowDown":b(f=>f+F<C?f+F:f);break;case"ArrowLeft":b(f=>f%F!==0?f-1:f);break;case"ArrowRight":b(f=>(f+1)%F!==0&&f+1<C?f+1:f);break;case"Enter":case" ":R!=null&&nt(i.level.pattern[R],R);break;case"Escape":case"Tab":b(void 0);break;default:break}},"handleKeyDown");return i.level.nbTiles<32?n(u,{className:oe.memoryPage,w100p:!0,h100p:!0,alignCenter:!0,flexColumn:!0,children:[n(u,{justifyBetween:!0,w100p:!0,ph5_xs:!0,alignCenter:!0,style:{maxWidth:"380px"},children:[n(u,{w80p:!0,children:[n(K,{children:"Memory"}),n(u,{flex:!0,mt5:!0,children:[n(q,{textNeutral:!0,mb0:!0,mr6:!0,name:"level",children:["Level ",N]}),n(q,{textMinimal:!0,children:[i.resultsToSend.length?Math.round(_t("memory",i.resultsToSend)):0,"\u2605"]})]})]}),n(as,{state:i})]}),n(u,{pv2:!0,textCenter:!0,bgRed:m==="You failed!",bgTeal:m==="Correct!",w100p:!0,fMono:!0,fs6:!0,uppercase:!0,ls1:!0,className:oe.gridContainer,h8px:!0,children:m}),n(u,{className:oe.gridContainer,w100p:!0,children:n(u,{onKeyDown:_o,onMouseDown:A=>{A.preventDefault(),b()},onFocus:()=>b(0),tabIndex:"0",justifyCenter:!0,flexWrap:!0,children:i.level.length&&i.level.pattern.map((A,f)=>n(dr,{missedCell:!i.isPlaying&&!i.isDisplayingPattern&&d.includes(f),wrongCell:i.wrongCell!==!1&&i.wrongCell===f,isVisible:i.isDisplayingPattern&&A===1||i.matchedCells.includes(f),displayPattern:te&&A===1,onMouseDown:()=>nt(A,f),isSelected:R===f},f))})})]}):n(u,{alignCenter:!0,flexColumn:!0,mt10:!0,children:[n(K,{children:"No more levels"}),n(H,{intent:"neutral",level:"secondary",mt8:!0,"data-test":"back",href:`/games/c/sessions/${o}`,children:"Back to menu"})]})}),vr=ls;var Tr=vr;B();B();B();var xr="ecddd39708bd0a5cc4a7b5de995e3d6442241c2ad730e48ed8de1a363826f717",cs=`.block-01 {
  box-shadow: inset 0 0 0 1px #222;
  user-select: none;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  outline: none;
}

.block-01.interactive-01 {
  cursor: pointer;
  background-color: #444;
  border: 2px solid transparent;
}

.block-01.selected-01,
.block-01.interactive-01:active {
  border: 2px solid var(--grey30);
  outline: none;
}

.block-01.interactive-01:hover,
.block-01.interactive-01:focus {
  border: 2px solid var(--grey60);
  outline: none;
}

.block-01.inactive-01 {
  opacity: 0.2;
}

.block-01.color0-01 {
  background-color: #333;
}

.block-01.color1-01 {
  background-color: #6f3de7 !important;
}

.block-01.color2-01 {
  background: repeating-linear-gradient(
    45deg,
    #0a887f,
    #0a887f 3px,
    #59b6b2 3px,
    #59b6b2 15px
  );
}

.block-01.color3-01 {
  background-color: #ffb33c !important;
}
`;(function(){if(!(typeof document>"u")&&!document.getElementById(xr)){var e=document.createElement("style");e.id=xr,e.textContent=cs,document.head.appendChild(e)}})();var ie={block:"block-01",interactive:"interactive-01",selected:"selected-01",inactive:"inactive-01",color0:"color0-01",color1:"color1-01",color2:"color2-01",color3:"color3-01"};var Sr=s((e,t)=>{let r={};for(let o of Object.keys(t))r[o]=e(t[o],o,t);return r},"objMap"),M=29,$={color1:"%236F3DE7",color2:"%2359B6B2",color3:"%23FFB33C",playerFill:"white",playerStroke:"black"},J=s((e,t)=>{let r=e*Math.PI/180;return`${M+t*Math.cos(r)},${M+t*Math.sin(r)}`},"getPoint"),ds=s(({color:e})=>{switch(e){case"%236F3DE7":return`<path d="M48 25.75H34.25V12H25.5V25.75H11.75V34.5H25.5V48.25H34.25V34.5H48V25.75Z" fill="${e}"/><path fill-rule="evenodd" clip-rule="evenodd" d="M24.875 11.375H34.875V25.125H48.625V35.125H34.875V48.875H24.875V35.125H11.125V25.125H24.875V11.375ZM26.125 12.625V26.375H12.375V33.875H26.125V47.625H33.625V33.875H47.375V26.375H33.625V12.625H26.125Z" fill="white"/>`;case"%2359B6B2":return`<path fill="${e}" d="M25.5 11.3h9v14.2h14.3v9H34.5v14.3h-9V34.5H11.3v-9h14.2z"/><path fill="%230A887F" d="m25.5 42.7 6 6h3v-2.1l-9.1-9.1v5.2zM13.3 25.5h-2.1v3.1l6 6h5.1l-9-9.1zm31.9 9h3.6V33l-7.5-7.5h-5.1l9 9zM34.5 18.7 27 11.3h-1.6v3.6l9.1 9.1v-5.3zm0 15.8h2.9L25.5 22.6v2.8h-2.3l11.3 11.3v-2.2z"/><path fill="none" stroke="%23000" stroke-miterlimit="10" d="M25.5 11.3h9v14.2h14.3v9H34.5v14.3h-9V34.5H11.3v-9h14.2z"/>`;case"%23FFB33C":return`<path d="M48.25 25.75H34.5V12H25.75V25.75H12V34.5H25.75V48.25H34.5V34.5H48.25V25.75Z" fill="${e}"/><path fill-rule="evenodd" clip-rule="evenodd" d="M24.5 10.75H35.75V24.5H49.5V35.75H35.75V49.5H24.5V35.75H10.75V24.5H24.5V10.75ZM27 13.25V27H13.25V33.25H27V47H33.25V33.25H47V27H33.25V13.25H27Z" fill="black"/>`;default:return console.warn("color unexpected")}},"drawCross"),Ue=s(({color:e})=>`<g>${ds({color:e})}</g>`,"drawCrossWithBorder"),Q=s(e=>{switch(e){case"2":return'<path stroke="none" fill="white" d="M43.27,50H19V45.53L31.16,34.61a27.56,27.56,0,0,0,4.36-4.92,9.26,9.26,0,0,0,1.72-5.33v-.62a7,7,0,0,0-1.72-5.07,6.7,6.7,0,0,0-5.09-1.79,7.16,7.16,0,0,0-5.12,1.69,10.18,10.18,0,0,0-2.68,4.49l-3.9-1.45a15,15,0,0,1,1.43-3.15,10.58,10.58,0,0,1,5.72-4.65,13.43,13.43,0,0,1,4.65-.73,13.79,13.79,0,0,1,4.81.78A10,10,0,0,1,38.88,16a9.49,9.49,0,0,1,2.18,3.33,11.54,11.54,0,0,1,.76,4.21,12.35,12.35,0,0,1-.6,3.9A15.31,15.31,0,0,1,39.55,31,23.32,23.32,0,0,1,37,34.22a40.16,40.16,0,0,1-3.31,3.14L23.56,46.2H43.27Z"/>';case"1":return'<path stroke="none" fill="white" d="M19.66,49.67v-3.8h10.4V16.59H29.7l-9.15,8.53L18,22.37l9.62-9h6.81v32.5H44v3.8Z"/>';default:return'<path stroke="none" fill="white" d="M30 49.6a11.83 11.83 0 0 1-5.64-1.26 10.49 10.49 0 0 1-3.89-3.61 16.92 16.92 0 0 1-2.25-5.79 38.42 38.42 0 0 1-.72-7.84 38.53 38.53 0 0 1 .72-7.81 17 17 0 0 1 2.25-5.81 10.52 10.52 0 0 1 3.89-3.62A12 12 0 0 1 30 12.61a12 12 0 0 1 5.64 1.25 10.52 10.52 0 0 1 3.89 3.62 17 17 0 0 1 2.25 5.81 38.53 38.53 0 0 1 .72 7.81 38.42 38.42 0 0 1-.72 7.84 16.92 16.92 0 0 1-2.25 5.79 10.49 10.49 0 0 1-3.89 3.61A11.83 11.83 0 0 1 30 49.6zm0-3.74a7.62 7.62 0 0 0 3.69-.86 6.66 6.66 0 0 0 2.48-2.38 11.44 11.44 0 0 0 1.41-3.71A23.59 23.59 0 0 0 38 34v-5.82a23.53 23.53 0 0 0-.46-4.86 11.44 11.44 0 0 0-1.41-3.74 6.68 6.68 0 0 0-2.48-2.39 7.62 7.62 0 0 0-3.65-.84 7.62 7.62 0 0 0-3.69.84 6.68 6.68 0 0 0-2.48 2.39 11.44 11.44 0 0 0-1.41 3.74 23.53 23.53 0 0 0-.42 4.86V34a23.59 23.59 0 0 0 .46 4.9 11.44 11.44 0 0 0 1.41 3.71A6.66 6.66 0 0 0 26.31 45a7.62 7.62 0 0 0 3.69.86zm0-11.73a3.37 3.37 0 0 1-2.48-.72 2.39 2.39 0 0 1-.7-1.74v-1.13a2.39 2.39 0 0 1 .7-1.74 3.37 3.37 0 0 1 2.48-.72 3.37 3.37 0 0 1 2.48.72 2.39 2.39 0 0 1 .7 1.74v1.13a2.39 2.39 0 0 1-.7 1.74 3.37 3.37 0 0 1-2.48.72z"/>'}},"drawNumber"),je=s(({startAngle:e=90,lenRatio:t=.4,radius:r=15,color:o="white",strokeWidth:i=5,arrowRatio:a=.12,arrowFill:l="white",arrowWidth:c=17,arrowStrokeWidth:d=0,arrowEndBonus:h=.25,reverseArrow:m=!1,xOffset:p=0,yOffset:y=0})=>{let E=2*Math.PI*r,L=`fill="none" r="${r}" cx="0" cy="0" stroke="${o}" stroke-linecap="miter" stroke-width="${i}"`,v,x,w,R=`fill="${l}" stroke="${o}" stroke-width="${d}"`,b=`transform="translate(${p},${y})"`;if(m){let N=360*t;v=`stroke-dasharray="${t*E},${1*E}"`,x=`transform="translate(${M+p},${M+y}) rotate(${-e-N})"`;let z=J(-e,r+(d-c)/2),te=J(-e,r+(d+c)/2),ue=J(-e+a*360,(1+h)*r);w=`d="M${z}L${te}L${ue}z"`}else{v=`stroke-dasharray="${t*E},${1*E}"`,x=`transform="translate(${M+p},${M+y}) rotate(${-e})"`;let N=J(-e,r+(d-c)/2),z=J(-e,r+(d+c)/2),te=J(-e-a*360,(1+h)*r);w=`d="M${N}L${z}L${te}z"`}let C=`<circle ${L} ${v} ${x} />`,F=`<path ${R} ${w} ${b} />`;return`${C}${F}`},"drawCurvArrow"),ze=s(({fill:e="none",width:t=M,height:r=20,xOffset:o=0,yOffset:i=0,strokeWidth:a=10,strokeColor:l="white",orientation:c=0,closePath:d=!1})=>{let h=t/2,m=r/2,p=`fill="${e}" stroke="${l}" stroke-width="${a}" stroke-linecap="miter"`,y=`${-h},${m}`,E=`0,${-m}`,L=`${h},${m}`,v=`d="M${y}L${E}L${L}${d?"z":""}"`,x=`transform="translate(${M+o},${M+i}) rotate(${c})"`;return`<path ${p} ${v} ${x} />`},"drawTriangle"),us=s(({len:e=30,xOffset:t=0,yOffset:r=0,strokeWidth:o=5,strokeColor:i="white",arrowFill:a="white",arrowWidth:l=2,arrowHeight:c=1.5})=>{let d=`stroke="${i}" stroke-width="${o}" stroke-linecap="miter"`,h=`d="M0,${e/2}v${-e}"`,m=`transform="translate(${M+t},${M+r+c})"`,p=`<path fill="none" ${d} ${h} ${m} />`,y=ze({fill:a,width:l,height:c,yOffset:2*l-e/2,strokeColor:i,closePath:!0});return`${p}${y}`},"drawStraigthArrow"),ms=s(({strokeWidth:e=6,strokeColor:t="white",margin:r=15,gap:o=15})=>{let i=35-r/2,a=o/2,l=`stroke="${t}" stroke-width="${e}" stroke-linecap="miter"`,c=`d="M${M-a},${r}v${i}"`,d=`<path ${l} ${c} />`,h=`d="M${M+a},${r}v${i}"`,m=`<path ${l} ${h} />`;return`${d} ${m}`},"drawPause"),ps=s(()=>'<path d="M30 8.61804L34.6883 23.0471L34.8006 23.3926H35.1638H50.3355L38.0613 32.3103L37.7675 32.5238L37.8797 32.8693L42.568 47.2984L30.2939 38.3807L30 38.1672L29.7061 38.3807L17.432 47.2984L22.1203 32.8693L22.2325 32.5238L21.9387 32.3103L9.66454 23.3926H24.8362H25.1994L25.3117 23.0471L30 8.61804Z" fill="white" stroke="black"/>',"drawStar"),Ie=s(e=>['<path fill="white" d="M45.79 20.526l-1.755 4.386L30 20l-14.035 4.912-1.754-4.386L30 15l15.79 5.526z"','<path fill="white" d="M43.333 26.667l-1.754 4.386L30 27l-11.58 4.053-1.753-4.386L30 22l13.333 4.667z"','<path fill="white" d="M40.877 32.807l-1.754 4.386L30 34l-9.123 3.193-1.754-4.386L30 29l10.877 3.807z"','<path fill="white" d="M38.42 38.947l-1.753 4.386L30 41l-6.667 2.333-1.754-4.386L30 36l8.42 2.947z"'].map((t,r)=>t+(r<e?' fill-opacity=".2" />':" />")).join(""),"speed"),wr={FW:us({yOffset:2}),TL:je({startAngle:90,radius:20,lenRatio:.25,yOffset:15,xOffset:-2}),TR:je({startAngle:90,reverseArrow:!0,radius:20,lenRatio:.25,yOffset:15,xOffset:2}),P1:Ue({color:$.color1,width:5,margin:15}),P2:Ue({color:$.color2,width:5,margin:15}),P3:Ue({color:$.color3,width:5,margin:15}),F0:Q("0"),F1:Q("1"),F2:Q("2"),F0label:Q("0"),F1label:Q("1"),F2label:Q("2"),player0:`<path fill="${$.playerFill}" stroke = "${$.playerStroke}" stroke-width="1.5" d="M37 43L10 30l27-13 13 13z" />`,player1:`<path fill="${$.playerFill}" stroke = "${$.playerStroke}" stroke-width="1.5" d="M17 37l13-27 13 27-13 13z" />`,player2:`<path fill="${$.playerFill}" stroke = "${$.playerStroke}" stroke-width="1.5" d="M23 17l27 13-27 13-13-13z" />`,player3:`<path fill="${$.playerFill}" stroke = "${$.playerStroke}" stroke-width="1.5" d="M43 23L30 50 17 23l13-13z" />`,star:ps({orientation:-90,radius:40,nbBranch:8,starRatio:.4}),play:ze({fill:"white",closePath:!0,width:15,height:12,orientation:90}),step:ze({orientation:90,strokeWidth:5}),pause:ms({}),restart:je({startAngle:160,lenRatio:.75}),clear:'<path fill="none" stroke="white" stroke-width="5" d="M42 42 16 16m0 26 26-26"/>',X1:Ie(3),X2:Ie(2),X4:Ie(1),X8:Ie(0)},Er=Sr(e=>({backgroundImage:`url('data:image/svg+xml;utf8,<svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">${e}</svg>')`}),wr),fs=Sr(e=>({backgroundImage:`url('data:image/svg+xml;utf8,<svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">${e}</svg>'), repeating-linear-gradient(45deg, #0A887F, #0A887F 3px, #59B6B2 3px, #59B6B2 15px)`}),wr);Er.NO={};var P=s(({type:e="NO",color:t=0,onClick:r,selected:o,className:i="",...a}={})=>{let l=s(d=>{switch(d.key){case"Enter":case" ":r(d);break}},"onKeyDown"),c=t===2;return n("div",{className:[ie.block,e,ie[`color${t}`],i,o?ie.selected:"",r?ie.interactive:""].join(" "),tabIndex:r?"0":"-1",onClick:r,onKeyDown:l,style:c?fs[e]:Er[e],...a})},"Block");var Ir="f138755a239de398e5a4395b71964d768999ac25a97a8f93bfdcd6cad0460d89",gs=`.boardPanel-01 {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  padding: 0.4vh;
  grid-area: board;
}

.boardPanel-01 .row-01 {
  display: flex;
  flex-direction: row;
  flex-grow: 1;
}

.boardPanel-01 .block-01 {
  flex-grow: 1;
  padding-bottom: 6.255%;
}

@media (max-width: 420px) {
  .boardPanel-01 {
    margin-right: 25px;
  }
}
`;(function(){if(!(typeof document>"u")&&!document.getElementById(Ir)){var e=document.createElement("style");e.id=Ir,e.textContent=gs,document.head.appendChild(e)}})();var Ye={boardPanel:"boardPanel-01",row:"row-01",block:"block-01"};var hs=s((e,t,r,o)=>e.y===r&&e.x===t?"player"+e.direction:o>3?"star":"blank","getIcon"),Cr=S(({board:e,player:t,dispatch:r})=>{let o=e.map((i,a)=>n("div",{className:Ye.row,children:i.map((l,c)=>n(P,{color:l%4,type:hs(t,c,a,l)},`${c}-${a}`))},a));return n("div",{className:Ye.boardPanel,onClick:()=>r({type:"DESELECT_FUNCTION_INSTRUCTION"}),children:o})});B();var Ce=s(()=>({type:"RESTART"}),"restart"),kr=s(({functionId:e,instructionId:t})=>({type:"SELECT_FUNCTION_INSTRUCTION",functionId:e,instructionId:t}),"selectFunctionInstruction"),Lr=s(({functionId:e,instructionId:t,instruction:r})=>({type:"SET_FUNCTION_INSTRUCTION",functionId:e,instructionId:t,instruction:r}),"setFunctionInstruction"),Ar=s(()=>({type:"NEXT_INSTRUCTION"}),"next"),Pr=s(()=>({type:"STEP"}),"step"),Rr=s(()=>({type:"PLAY"}),"play"),Dr=s(()=>({type:"PAUSE"}),"pause"),_r=s(()=>({type:"CLEAR"}),"clear"),Br=s(()=>({type:"CHANGE_SPEED"}),"changeSpeed"),Mr=s(e=>({type:"LOAD_LEVEL",level:e}),"loadLevel"),Nr=s(()=>({type:"SAVE_RESULTS"}),"saveResults");var $r="b5389ec5bf9c5b9c08fa72335d556d62b6e90e599a0f80eebef6ad97c344b372",ys=`.controlsPanel-01 {
  width: 9%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding-right: 1%;
}

.controlsPanel-01 .block-01 {
  background-color: transparent;
  box-shadow: none;
  flex-grow: initial;
  padding: 50%;
}

@media (max-width: 420px) {
  .controlsPanel-01 {
    flex-direction: row;
    width: 100%;
    grid-area: controls;
  }
  .controlsPanel-01 .block-01 {
    padding: 0;
    width: 100%;
    height: calc(100vw / 5);
    max-height: 60px;
    max-width: 60px;
  }
}
`;(function(){if(!(typeof document>"u")&&!document.getElementById($r)){var e=document.createElement("style");e.id=$r,e.textContent=ys,document.head.appendChild(e)}})();var Fr={controlsPanel:"controlsPanel-01",block:"block-01"};var Or=S(({paused:e,ended:t,speed:r,isRunning:o,dispatch:i})=>n("div",{className:Fr.controlsPanel,children:[n(P,{type:e?"play":"pause",name:"play-pause",onClick:()=>i(e?Rr():Dr())}),n(P,{type:"step",onClick:()=>!t&&i(Pr())}),n(P,{type:"restart",onClick:()=>i(Ce())}),n(P,{type:"clear",onClick:()=>i(_r())}),n(P,{type:`X${r}`,name:"speed",onClick:()=>i(Br())})]}));B();var V={NO:0,FW:1,TL:2,TR:3,P1:4,P2:5,P3:6,F0:7,F1:8,F2:9,C1:100,C2:200,C3:300};V=Object.entries(V).reduce((e,[t,r])=>({...e,[r]:t}),V);var Gr="12f747588a8a3835864ea51f87be942718645239b66cbd6cfb951355ddf3d01b",bs=`.functionBlock-01 {
  display: flex;
  align-items: center;
  padding: 1vh;
  background: var(--grey85);
}

.functionBlock-01 {
  background-color: transparent;
  box-shadow: none;
}

.functionBlock-01 .block-01 {
  flex-grow: 1;
  padding-top: 9%;
  max-width: 9%;
}

@media (max-width: 420px) {
  .functionBlock-01 {
    /* add some space between buttons */
    gap: 8px;
  }
  .functionBlock-01 .block-01 {
    height: 45px;
  }
}
`;(function(){if(!(typeof document>"u")&&!document.getElementById(Gr)){var e=document.createElement("style");e.id=Gr,e.textContent=bs,document.head.appendChild(e)}})();var ke={functionBlock:"functionBlock-01",block:"block-01"};var vs=S(({id:e,func:t,selectedCell:r,dispatch:o,isRunning:i})=>{let a=t.instructions.map((l,c)=>{let d=Math.floor(l/100),h=V[l%100];return n(P,{color:d,selected:r&&c===r.instructionId&&r.functionId===e,type:h,name:`case-${c}`,onClick:()=>{i&&o(Ce()),o(kr({functionId:e,instructionId:c}))}},c)});return n("div",{className:ke.functionBlock,children:[n(P,{className:ke.functionIdBlock,type:`F${e}label`,color:"4"}),a]})}),qr=S(({selectedCell:e,functions:t,dispatch:r,isRunning:o})=>{let i=t.map((a,l)=>n(vs,{id:l,func:a,selectedCell:e,dispatch:r,isRunning:o},l));return n("div",{className:ke.FunctionsPanel,children:i})});var Vr="b6bce6e5140b0e98844762a02fe75f42d364f9b731bef5a175e3e0507d6e90ad",Ts=`/* FROM App.css */

/*html,
body,
.root,
.App,
.game {
  height: 100%;
  padding: 0;
  margin: auto;
  overflow: hidden;
  touch-action: manipulation;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-tap-highlight-color: transparent;
}*/

.hidden-01 {
  display: none !important;
}

/* END */

.game-01 {
  position: relative;
  margin: 0 auto;
  height: 100%;
  width: 100%;
  max-width: 65vh;
  display: flex;
  flex-direction: column;
  touch-action: manipulation;
}

.panelTop-01,
.panelBottom-01 {
  display: flex;
}

.panelTop-01 {
  position: relative;
  flex-direction: row;
  padding-top: 2rem;
}

@media (max-width: 420px) {
  .panelTop-01 {
    padding-top: 10px;
    display: grid;
    grid-template-areas:
      'controls controls controls'
      'stack board board';
    grid-template-columns: 25px 1fr 25px;
  }
  .message-01 {
    bottom: 0;
  }
}

.panelBottom-01 {
  flex-grow: 1;
  flex-direction: column;
  justify-content: flex-end;
  padding-bottom: 1rem;
}

.panelTop-01.blur-01,
.panelBottom-01.blur-01 {
  filter: blur(5px);
}

.message-01 {
  position: absolute;
  margin: auto;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 5vh;
  background: rgba(0, 0, 0, 0.7);

  text-align: center;
  text-transform: uppercase;
  font-family: 'IBM Plex Mono', monospace;
  font-size: 0.9rem;
  letter-spacing: 0.03em;
}

.fail-01 {
  background-color: var(--red45);
}

.success-01 {
  background-color: var(--teal65);
}
`;(function(){if(!(typeof document>"u")&&!document.getElementById(Vr)){var e=document.createElement("style");e.id=Vr,e.textContent=Ts,document.head.appendChild(e)}})();var j={hidden:"hidden-01",game:"game-01",panelTop:"panelTop-01",panelBottom:"panelBottom-01",message:"message-01",blur:"blur-01",fail:"fail-01",success:"success-01"};B();var Hr="53bb67a004415e44e8f1520c4ef28032a36a55aeba44bf397d489b1814a9508b",xs=`.instructionsPanel-01 {
  width: 100%;
  background: var(--grey85);
  padding: 0.5vh;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
}

.instructionsPanel-01 .block-01 {
  height: 6vh;
  width: 6vh;
  margin: 0.5vh;
}
`;(function(){if(!(typeof document>"u")&&!document.getElementById(Hr)){var e=document.createElement("style");e.id=Hr,e.textContent=xs,document.head.appendChild(e)}})();var Ur={instructionsPanel:"instructionsPanel-01",block:"block-01"};var jr=S(({selectedCell:e,activeInstructions:t,functions:r,dispatch:o})=>{let{functionId:i,instructionId:a}=e||{},l=t.map(c=>{let d=V[c],h=s(()=>o(Lr({functionId:i,instructionId:a,instruction:d})),"onClick"),m=e&&r[i].instructions[a],p=m%100,y=Math.floor(m/100)*100,E=d===p||d===y?"selected":"",L=Math.floor(d/100);return n(P,{className:E,onClick:e&&h,color:L,type:c,name:c},c)});return n("div",{className:Ur.instructionsPanel,children:l})});B();var zr="ec8c022b3c92fc5af240f3167720e6578e20e2a28984e5369cbffe4e3cf70624",Ss=`.stackPanel-01 {
  width: 5%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  overflow: hidden;
  position: relative;
  grid-area: stack;
}

.stackPanel-01 .block-01 {
  padding: 50%;
}

.stackPanel-01 .scrollDiv-01 {
  position: absolute;
  width: 100%;
  top: 0;
}

@media (max-width: 420px) {
  .stackPanel-01 {
    width: 100%;
    /* to align with board */
    margin-top: 0.4vh;
  }
}
`;(function(){if(!(typeof document>"u")&&!document.getElementById(zr)){var e=document.createElement("style");e.id=zr,e.textContent=Ss,document.head.appendChild(e)}})();var Ke={stackPanel:"stackPanel-01",block:"block-01",scrollDiv:"scrollDiv-01"};var Yr=S(({instructions:e})=>{let t=e.map((r,o)=>{let i=V[r%100],a=Math.floor(r/100);return n(P,{type:i,color:a},o)});return n("div",{className:Ke.stackPanel,children:n("div",{className:Ke.scrollDiv,children:t})})});var ce=Mo(fo(),1);var Al={board:[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]],player:{x:-1,y:-1,direction:0},stars:0,functions:[],activeInstructions:[]},Pl=s(e=>e>3,"hasStar"),Rl=s(e=>e-4,"pickupStar"),Dl=s(e=>e.x<0||e.x>15||e.y<0||e.y>15,"isPlayerOutOfBounds"),_l=s((e,t)=>Dl(e)||!t[e.y][e.x],"isPlayerDead"),bo=s(e=>e.map(t=>({...t,instructions:Array(t.length).fill(0)})),"initFunctions"),Re=s((e=Al)=>({level:e,...(0,ce.default)(e),functions:bo(e.functions),speed:1,currentInstruction:void 0,instructionsStack:[],selectedCell:void 0,paused:!0,isRunning:!1,ended:!1,message:"",error:"",resultsToSend:[],attempts:0}),"init"),tt=Re(),ho=s(e=>{let t=e.instructionsStack.slice(0,1)[0],r={...e,currentInstruction:t,instructionsStack:e.instructionsStack.slice(1),selectedCell:void 0};if(t===void 0)return{...r,ended:!0,message:"EMPTY STACK",attempts:e.attempts+1};let o=t%100,i=Math.floor(t/100),a=e.player,c=e.board[a.y][a.x]%4;return i&&i!==c?r:Bl(r,o)},"nextInstruction"),vo=s((e,t=tt)=>{switch(e.type){case"LOAD_LEVEL":return k.debug("zzle-load-level",{level:e.level}),{...Re(e.level),speed:t.speed,resultsToSend:t.resultsToSend};case"PLAY":{if(t.isRunning)return{...t,paused:!1,selectedCell:void 0};let r=t.functions[0];return r?{...t,instructionsStack:[...r.instructions],paused:!1,isRunning:!0,selectedCell:void 0}:t}case"STEP":{if(t.isRunning)return{...ho(t),paused:!0,selectedCell:void 0};let r=t.functions[0];return r?{...t,instructionsStack:[...r.instructions],paused:!0,isRunning:!0,selectedCell:void 0}:t}case"PAUSE":return t.paused?{...t,selectedCell:void 0}:{...t,paused:!0,selectedCell:void 0};case"TOGGLE_PAUSE":return{...t,paused:!t.paused,selectedCell:void 0};case"RESTART":return{...Re(t.level),functions:t.functions,speed:t.speed,attempts:t.attempts,resultsToSend:t.resultsToSend};case"CLEAR":return{...t,functions:bo(t.functions),selectedCell:void 0};case"CHANGE_SPEED":return{...t,speed:t.speed*2>8?1:t.speed*2,selectedCell:void 0};case"NEXT_INSTRUCTION":return ho(t);case"SELECT_FUNCTION_INSTRUCTION":{let{functionId:r,instructionId:o}=e,i=t.selectedCell;if(i&&i.functionId===r&&i.instructionId===o)return{...t,selectedCell:void 0};let a={functionId:r,instructionId:o};return t.ended&&t.isRunning?{...Re(t.level),functions:t.functions,speed:t.speed,attempts:t.attempts,resultsToSend:t.resultsToSend,selectedCell:a}:{...t,selectedCell:a}}case"DESELECT_FUNCTION_INSTRUCTION":return{...t,selectedCell:void 0};case"SET_FUNCTION_INSTRUCTION":{let{functionId:r,instructionId:o,instruction:i}=e,a=(0,ce.default)(t.functions),l=a[r].instructions[o],c=Math.floor(l/100)*100,d=l%100,h=Math.floor(i/100)*100,m=i%100,p=h?c===h?0:h:c,y=m?d===m?0:m:d;return a[r].instructions[o]=y+p,{...t,functions:a}}case"SET_ERROR":return{...t,error:e.error};case"SAVE_RESULTS":return{...t,resultsToSend:[...t.resultsToSend,{id:t.resultsToSend.length+1,attempts:t.attempts}]};case"SAVE_INIT_RESULTS":return{...t,resultsToSend:e.results};case"RESET_MESSAGE":return{...t,message:""};default:return t}},"reducer");var Qe=s((e,t)=>{let r=(0,ce.default)(e.board),o=e.player,i=r[o.y][o.x]%4;return r[o.y][o.x]=r[o.y][o.x]-i+t,{...e,board:r}},"paint"),et=s((e,t)=>{let o=[...e.functions[t].instructions,...e.instructionsStack];return{...e,instructionsStack:o,ended:o.length>100,message:o.length>100?"MAXIMUM CALL STACK REACHED":""}},"repeatFunction"),Bl=s((e,t)=>{switch(t){case 0:return e;case 1:{let r=e.board,o=e.stars,i={...e.player};i.direction===0&&(i.x-=1),i.direction===1&&(i.y-=1),i.direction===2&&(i.x+=1),i.direction===3&&(i.y+=1);let a=_l(i,r);return!a&&Pl(r[i.y][i.x])&&(r=(0,ce.default)(r),r[i.y][i.x]=Rl(r[i.y][i.x]),o-=1),{...e,board:r,player:i,stars:o,ended:!o||a,message:o?a?"YOU DIED!":"":"Correct!",attempts:!o||a?e.attempts+1:e.attempts,resultsToSend:e.resultsToSend}}case 2:return{...e,player:{...e.player,direction:(e.player.direction+3)%4}};case 3:return{...e,player:{...e.player,direction:(e.player.direction+1)%4}};case 4:return Qe(e,1);case 5:return Qe(e,2);case 6:return Qe(e,3);case 7:return et(e,0);case 8:return et(e,1);case 9:return et(e,2);default:return e}},"applyInstruction");var Nl=s(async e=>(await fetch(`/assets/zzle-levels/${e}.json`)).json(),"lazyImportLevel"),$l=typeof window<"u"&&window,To=$l?.document;To&&(To.ontouchmove=e=>e.preventDefault());var Fl=s(e=>e-1+4-(e-1)%4+Math.ceil(Math.random()*4),"inc"),Ol=S(({game:e,sessionId:t,setErrorToShow:r})=>{let[o,i]=I(e.results.length?e.results.length*4+Math.ceil(Math.random()*4):1),[a,l]=me((v,x)=>{let w=vo(x,v),R=s(()=>i(Fl(o)),"callback");return x.type==="SAVE_RESULTS"&&Ee({game:e,nextState:w,setErrorToShow:r,callback:R}),w},tt),[c,d]=I(Date.now()),h=ye(a.isRunning&&!a.paused),m=h-c,p=400/a.speed;!a.ended&&!a.paused&&m>p&&(l(Ar()),d(h));let y=a.ended&&!a.stars;D(()=>{if(!e.results.length)return;let v=e.results.map(({attempts:x,level:w})=>({id:w,attempts:x}));l({type:"SAVE_INIT_RESULTS",results:v})},[]),D(()=>{y&&l(Nr())},[y]),D(()=>{Nl(o).then(v=>l(Mr(v))).catch(k.error.event("game-zzle-lazy-load-level"))},[o]);let E=s(()=>{a.message&&a.message!=="Correct!"&&(l({type:"RESET_MESSAGE"}),l({type:"RESTART"}))},"closeMessage"),L=o===1?o:Math.ceil(o/4);return o<117?n("div",{className:j.game,onClick:E,onKeyPress:E,children:[n(q,{textNeutral:!0,mb0:!0,ml10p:!0,name:`level-${L}`,children:`Level ${L}`}),n(u,{relative:!0,children:[n("div",{className:j.panelTop,children:[n("div",{className:`${j.message} ${a.message?"":j.hidden} ${a.message==="Correct!"?j.success:j.fail}`,name:a.message==="Correct!"?"success-message":"fail-message",children:a.message}),n(Yr,{instructions:a.instructionsStack}),n(Cr,{...a,dispatch:l}),n(Or,{...a,dispatch:l})]}),n("div",{className:j.panelBottom,children:[n(jr,{...a,dispatch:l}),n(qr,{...a,dispatch:l})]})]})]}):n(u,{alignCenter:!0,flexColumn:!0,mt10:!0,children:[n(K,{children:"No more levels"}),n(H,{intent:"neutral",level:"secondary",mt8:!0,"data-test":"back",href:`/games/c/sessions/${t}`,children:"Back to menu"})]})}),xo=Ol;var So=xo;var wo="75b237168c66a31b501d741ee37193197766bea0d7674f0f5a331ca817a3aa43",Gl=`.sessionGame-01 {
  height: 100vh;
  display: flex;
  justify-content: center;
}

.sessionGameBody-01 {
  height: 85%;
  width: 100%;
}
`;(function(){if(!(typeof document>"u")&&!document.getElementById(wo)){var e=document.createElement("style");e.id=wo,e.textContent=Gl,document.head.appendChild(e)}})();var rt={sessionGame:"sessionGame-01",sessionGameBody:"sessionGameBody-01"};var ql={zzle:So,memory:Tr},de=s((e,t,r)=>(t.gameId=r.id,k.error(e,t)),"logGameError"),Vl={zzle:[{keys:"Tab/Shift+Tab:",desc:"Focus next/previous block"},{keys:"Enter/Space:",desc:"Select block"}],memory:[{keys:"Tab:",desc:"Toggles focus on the grid."},{keys:"Arrow Keys:",desc:"Moves the focus between cells within the grid."},{keys:"Enter/Space:",desc:"Selects the currently focused cell."},{keys:"Esc:",desc:"Removes focus from the grid."}]},Hl=S(e=>{let{game:t,session:r,modal:o,errorToShow:i,setErrorToShow:a}=e,{startedAt:l}=r,[c,d]=I(0),[h,m]=I(),[p,{width:y}]=be(),[E,L]=I(),v=s(b=>{m(b),o.open()},"showErrorMessage"),x=s(async()=>{let b=new Date(Date.now()).toISOString();return l||await Z.update(r.id,{startedAt:b}).catch(C=>{throw de("set-startedAt-in-session",C,t)}),Ut(r)&&r.candidateId?ne.startLast(r,t.id,{startedAt:b}).catch(C=>{throw C.candidateId=r.candidateId,C.sessionId=r.id,de("set-startedAt-in-last-session",C,t)}):ne.update(t.id,{startedAt:b}).catch(C=>{throw de("set-startedAt-in-game",C,t)})},"startGame"),w=s(b=>new Date(b.startedAt).getTime()+b.duration*1e3>=Date.now(),"hasFinished"),R={START_GAME:{title:"Start Game",content:n(u,{flexColumn:!0,textCenter:!0,alignCenter:!0,children:[n(It,{children:vt(t.name)}),n(Ct,{children:"Keyboard accessibility"}),n($t,{textLeft:!0,mb7:!0,children:Vl[t.name].map(({keys:b,desc:C})=>n(Ft,{children:n(u,{flex:!0,children:[n(G,{bold:!0,mr1:!0,children:b}),n(G,{children:[" ",C]})]})},b))}),n(G,{size:"large",children:"This game session is about to start, do you want to proceed ?"}),n(O,{"data-test":"start",w6:!0,intent:"neutral",level:"secondary",name:"start-game",onClick:async()=>{m(null);let b=s(async C=>(L(""),await _e(500),L(C),_e(1e3)),"waitAndDisplay");await b(3),await b(2),await b(1),await b("Go"),x().then(o.close,C=>{de("starting-game",C,t),v({title:"Server error",content:n(u,{flexColumn:!0,textCenter:!0,children:[n(Y,{red:!0,children:"Failed to start game. Please retry."}),n(O,{intent:"neutral",onClick:()=>v(R.START_GAME),children:"Retry"})]})})})},children:"Start"})]})},GAME_ENDED:{title:"Ended game",content:n(u,{flexColumn:!0,textCenter:!0,alignCenter:!0,children:[n(G,{children:"Game session is finished, thank you!"}),n(H,{intent:"neutral",level:"secondary","data-test":"back",href:`/games/c/sessions/${r.id}`,children:"Back to menu"})]})},EXPIRED_TIME:{title:"Game session expired",content:n(u,{flexColumn:!0,textCenter:!0,alignCenter:!0,children:[n(G,{children:"This game session has expired"}),n(H,{intent:"neutral",level:"secondary","data-test":"back",href:`/games/c/sessions/${r.id}`,children:"Back to menu"})]})},FAIL_TO_SEND_RESULTS:{title:"Failed to send progression to DB",content:n(u,{flexColumn:!0,textCenter:!0,alignCenter:!0,children:[n(G,{red:!0,children:"Failed to save progression"}),n(G,{children:"Verify your network connection"}),n(O,{intent:"neutral",onClick:()=>{o.close(),a(""),m(null)},children:"Retry"}),n("br",{}),n(O,{intent:"neutral",level:"secondary",onClick:()=>location.reload(),children:"Reload Page"}),n("br",{}),n(H,{"data-test":"back",intent:"neutral",level:"secondary",href:`/games/c/sessions/${r.id}`,onClick:()=>{o.close(),a("")},children:"Back to menu"})]})}};return D(()=>{if(i)return v(R[i])},[i]),D(()=>{if(i)return;if(!t.startedAt)return v(R.START_GAME);if(!w(t))return v(R.EXPIRED_TIME);t.startedAt&&w(t)&&o.close(),m(null);let b=s(()=>clearInterval(C),"stopTimer"),C=setInterval(()=>{let F=Date.now(),N=$e(t)-F;d(N),N<0&&(b(),v(R.GAME_ENDED))},1e3);return b},[r]),n(u,{maAuto:!0,style:{maxWidth:"500px"},children:[n(Me,{ph15p:!0,o90:!0,zi2:!0,closeIcon:!1,...o.props,children:h?n(u,{children:h.content}):n(u,{fs1:!0,children:E})}),n(u,{flexColumn:!0,alignCenter:!0,w100p:!0,mt5:!0,mt2_xs:!0,elemRef:p,children:[n(u,{flex:!0,fMono:!0,id:c?`timer-${t.name}`:"not-started",children:[n(u,{mr2:!0,children:" Time Left:"}),ft(c)]}),n(qt,{width:y,steps:[{value:0,hidden:!0},{value:Yt(t)/100,dotStatus:"spark"},{value:1,status:"disabled",hidden:!0}]})]})]})}),Ul=s(({children:e})=>n("div",{className:rt.sessionGameBody,children:e}),"SessionGameBody"),jl=S(({session:e,gameName:t,...r})=>{let[o,i]=I(""),a=e.games.find(d=>d.name===t),l=ql[t],c=Me.use({initialState:!0});return n("div",{className:rt.sessionGame,children:n(Ul,{children:[n(Hl,{errorToShow:o,setErrorToShow:i,game:a,"data-test":a,session:e,modal:c,...r}),n(l,{setErrorToShow:i,gameStarted:c.isClosed,game:a,"data-test":a,sessionId:e.id})]})})}),Ee=s(({game:e,nextState:t,setErrorToShow:r,callback:o})=>{if(!e.startedAt){k.error("send-game-result",{gameId:e.id,message:"No startedAt"});return}if($e(e)<Date.now())return;let i=Kt(e,t);he.games("/results",{method:"POST",body:JSON.stringify({results:i})}).then(()=>{k.debug("send-game-result",{preparedResults:i,results:e.results,resultsToSend:t.resultsToSend}),o&&o()}).catch(a=>{t.message=null,r("FAIL_TO_SEND_RESULTS"),de("send-game-result",a,e||{})})},"sendGameResultsToDb"),Eo=jl;var zl=s(async(e,t)=>{let o=(await he.games("/steps")).find(i=>i.campaignId===e);return o&&`/intra${o.path}`},"getIntraCampusPath"),Yl=n(Nt,{h7px:!0,alt:"logo",src:"/assets/img/logo.png"}),Io=s(({user:e})=>n(Ot,{brand:Yl,children:n(u,{inlineBlock:!0,alignCenter:!0,children:[e&&n(u,{cursor:!0,alignCenter:!0,children:n(u,{children:ht(e)})}),n(O,{ml4:!0,pointer:!0,iconRight:!0,intent:"neutral",level:"tertiary",icon:n(St,{width:"19px"}),onClick:ct,id:"logOut"})]})}),"Nav"),Kl=S(e=>{let{user:t,games:r,session:o,campaignInstructions:i}=e,[a,l]=mt("",3e3),c=dt(),[d,h]=I(""),m=Ht(o);D(()=>{zl(o.campaignId,c).then(h)},[o,c]);let p=s(async()=>{let y=[...r];await Se.reset(o.id,r).then(()=>l(n(Y,{teal:!0,children:"Session reset in database."}))).catch(async E=>{k.error("games-session-retry-failed",E),await Se.restore(o.id,o.startedAt,y).then(()=>l(n(Y,{red:!0,children:"Failed to reset session."}))).catch(L=>(k.error("games-session-restore-failed",L),l(n(Y,{red:!0,children:"Failed to restore after reset session failed. Your session is corrupted."}))))})},"resetSession");return n(Lt,{scrollY:!0,children:[n(Io,{user:t}),o.candidateId?d&&n(Be,{text:"Back to intra",mb0:!0,href:d}):n(Be,{text:"Campaign",mb0:!0,href:`/games-admin/campaigns/${o.campaignId}/settings`}),n(K,{mv7:!0,children:"Games trail"}),!o.candidateId&&n(re.Fragment,{children:[n(O,{intent:"neutral",level:"secondary",onClick:p,children:"Reset session"}),n(Y,{ml3:!0,children:a})]}),n(Gt,{origin:!0,children:[i&&n(sr,{major:!0,status:"active",instructions:i}),n(u,{major:m,status:m&&"active",children:[n(q,{fMono:!0,children:"Games"}),r?.map((y,E)=>n(ir,{game:y,index:E},y.name))]})]})]})}),Co=s(({sessionId:e,user:t})=>{let r=Z.watchById(e);if(fe(r))return n(xe,{mt20p:!0,text:"Your session is loading"});if(st(r))return n(Ne,{message:pe(r)});if(!r)return n(re.Fragment,{children:[n(Io,{user:t}),n(kt,{}),n(Ne,{message:`Session ${e} not Found`})]});let{instructions:o,games:i}=r;return n(ge,{children:[n(Kl,{user:t,path:"/",games:i,session:r,campaignInstructions:o}),n(Eo,{path:":gameName",session:r}),n(Te,{default:!0})]})},"Session");var ko="760b9ed90cce4f1f228bfd3f96700a0e7e6c6a5f20ab22150d9234086c887816",Wl=`.router-01 {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.router-01.bp3-dark {
  background: #293742;
}
`;(function(){if(!(typeof document>"u")&&!document.getElementById(ko)){var e=document.createElement("style");e.id=ko,e.textContent=Wl,document.head.appendChild(e)}})();var Lo={router:"router-01"};var Xl=bt({classNames:[Lo.router]},e=>n(ge,{...e})),{pathname:Zl,searchParams:Jl}=new URL(window.location),Ao=Zl!=="/games/c/sessions",Po=s(()=>{let e=ut(),t=At(),[r,o]=I(),i=pe(t)||r?.error||yt(t);return D(()=>{if(Ao||!e||e.error||!e.payload)return;let a=Number(e.payload.sub),l=Jl.get("campaign");if(!l)return o({error:Error("Missing campain Id")});qe.existsForCampaignWithCandidate(l,a).then(([c])=>c||qe.create.forCampaignIdWithCandidateId(l,a)).then(c=>{o(c),it(`/games/c/sessions/${c.id}`,{replace:!0})}).catch(c=>o({error:c}))},[e]),i?n(Bt,{error:i}):fe(t)||!Ao&&!r?n(xe,{mt20p:!0,text:"Games are loading"}):n(Xl,{children:[n(Co,{path:"/games/c/sessions/:sessionId/*",user:t}),n(Te,{default:!0})]})},"Games");re.render(n(Po,{}),document.getElementById("root"));
