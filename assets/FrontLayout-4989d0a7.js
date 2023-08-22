import{_ as Q}from"./transform-25e4c28a.js";import{p as R,m as O,a as Y,g as E,u as L,c as a,b as W,d as X,e as Z,f as ee,h as te,t as M,i as ae,j as le,k as oe,l as ne,n as se,s as w,o as g,q as re,V as j,r as D,v as U,w as ue,x as F,y as ie,z as $,A as ce,B as de,C as ve,D as me,E as fe,F as ge,G as pe,H as z,I as he,J as be,K as S,L as ye,M as Ve,N as _e,O as ke,P as Se,Q as u,R as Te,S as d,T as l,U as m,W as xe,X as B,Y as C,Z as P,_ as f,$ as k,a0 as Be,a1 as Ce,a2 as Pe,a3 as we}from"./index-5f72f9b3.js";import{V as Ie,a as Ne}from"./VNavigationDrawer-216417d8.js";import{V as Ae}from"./VContainer-cb8d1468.js";/* empty css              */const G=R({text:String,...O(),...Y()},"VToolbarTitle"),J=E()({name:"VToolbarTitle",props:G(),setup(e,v){let{slots:t}=v;return L(()=>{const n=!!(t.default||t.text||e.text);return a(e.tag,{class:["v-toolbar-title",e.class],style:e.style},{default:()=>{var s;return[n&&a("div",{class:"v-toolbar-title__placeholder"},[t.text?t.text():e.text,(s=t.default)==null?void 0:s.call(t)])]}})}),{}}}),Re=[null,"prominent","default","comfortable","compact"],K=R({absolute:Boolean,collapse:Boolean,color:String,density:{type:String,default:"default",validator:e=>Re.includes(e)},extended:Boolean,extensionHeight:{type:[Number,String],default:48},flat:Boolean,floating:Boolean,height:{type:[Number,String],default:64},image:String,title:String,...W(),...O(),...X(),...Z(),...Y({tag:"header"}),...ee()},"VToolbar"),q=E()({name:"VToolbar",props:K(),setup(e,v){var c;let{slots:t}=v;const{backgroundColorClasses:n,backgroundColorStyles:s}=te(M(e,"color")),{borderClasses:o}=ae(e),{elevationClasses:p}=le(e),{roundedClasses:h}=oe(e),{themeClasses:y}=ne(e),{rtlClasses:b}=se(),i=w(!!(e.extended||(c=t.extension)!=null&&c.call(t))),V=g(()=>parseInt(Number(e.height)+(e.density==="prominent"?Number(e.height):0)-(e.density==="comfortable"?8:0)-(e.density==="compact"?16:0),10)),_=g(()=>i.value?parseInt(Number(e.extensionHeight)+(e.density==="prominent"?Number(e.extensionHeight):0)-(e.density==="comfortable"?4:0)-(e.density==="compact"?8:0),10):0);return re({VBtn:{variant:"text"}}),L(()=>{var r;const T=!!(e.title||t.title),I=!!(t.image||e.image),H=(r=t.extension)==null?void 0:r.call(t);return i.value=!!(e.extended||H),a(e.tag,{class:["v-toolbar",{"v-toolbar--absolute":e.absolute,"v-toolbar--collapse":e.collapse,"v-toolbar--flat":e.flat,"v-toolbar--floating":e.floating,[`v-toolbar--density-${e.density}`]:!0},n.value,o.value,p.value,h.value,y.value,b.value,e.class],style:[s.value,e.style]},{default:()=>[I&&a("div",{key:"image",class:"v-toolbar__image"},[t.image?a(D,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},t.image):a(j,{key:"image-img",cover:!0,src:e.image},null)]),a(D,{defaults:{VTabs:{height:U(V.value)}}},{default:()=>{var x,N,A;return[a("div",{class:"v-toolbar__content",style:{height:U(V.value)}},[t.prepend&&a("div",{class:"v-toolbar__prepend"},[(x=t.prepend)==null?void 0:x.call(t)]),T&&a(J,{key:"title",text:e.title},{text:t.title}),(N=t.default)==null?void 0:N.call(t),t.append&&a("div",{class:"v-toolbar__append"},[(A=t.append)==null?void 0:A.call(t)])])]}}),a(D,{defaults:{VTabs:{height:U(_.value)}}},{default:()=>[a(ue,null,{default:()=>[i.value&&a("div",{class:"v-toolbar__extension",style:{height:U(_.value)}},[H])]})]})]})}),{contentHeight:V,extensionHeight:_}}}),Ee=R({scrollTarget:{type:String},scrollThreshold:{type:[String,Number],default:300}},"scroll");function Le(e){let v=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{canScroll:t}=v;let n=0;const s=F(null),o=w(0),p=w(0),h=w(0),y=w(!1),b=w(!1),i=g(()=>Number(e.scrollThreshold)),V=g(()=>ie((i.value-o.value)/i.value||0)),_=()=>{const c=s.value;!c||t&&!t.value||(n=o.value,o.value="window"in c?c.pageYOffset:c.scrollTop,b.value=o.value<n,h.value=Math.abs(o.value-i.value))};return $(b,()=>{p.value=p.value||o.value}),$(y,()=>{p.value=0}),ce(()=>{$(()=>e.scrollTarget,c=>{var I;const T=c?document.querySelector(c):window;T&&T!==s.value&&((I=s.value)==null||I.removeEventListener("scroll",_),s.value=T,s.value.addEventListener("scroll",_,{passive:!0}))},{immediate:!0})}),de(()=>{var c;(c=s.value)==null||c.removeEventListener("scroll",_)}),t&&$(t,_,{immediate:!0}),{scrollThreshold:i,currentScroll:o,currentThreshold:h,isScrollActive:y,scrollRatio:V,isScrollingUp:b,savedScroll:p}}const He=R({scrollBehavior:String,modelValue:{type:Boolean,default:!0},location:{type:String,default:"top",validator:e=>["top","bottom"].includes(e)},...K(),...ve(),...Ee(),height:{type:[Number,String],default:64}},"VAppBar"),Ue=E()({name:"VAppBar",props:He(),emits:{"update:modelValue":e=>!0},setup(e,v){let{slots:t}=v;const n=F(),s=me(e,"modelValue"),o=g(()=>{var x;const r=new Set(((x=e.scrollBehavior)==null?void 0:x.split(" "))??[]);return{hide:r.has("hide"),inverted:r.has("inverted"),collapse:r.has("collapse"),elevate:r.has("elevate"),fadeImage:r.has("fade-image")}}),p=g(()=>{const r=o.value;return r.hide||r.inverted||r.collapse||r.elevate||r.fadeImage||!s.value}),{currentScroll:h,scrollThreshold:y,isScrollingUp:b,scrollRatio:i}=Le(e,{canScroll:p}),V=g(()=>e.collapse||o.value.collapse&&(o.value.inverted?i.value>0:i.value===0)),_=g(()=>e.flat||o.value.elevate&&(o.value.inverted?h.value>0:h.value===0)),c=g(()=>o.value.fadeImage?o.value.inverted?1-i.value:i.value:void 0),T=g(()=>{var N,A;if(o.value.hide&&o.value.inverted)return 0;const r=((N=n.value)==null?void 0:N.contentHeight)??0,x=((A=n.value)==null?void 0:A.extensionHeight)??0;return r+x});fe(g(()=>!!e.scrollBehavior),()=>{he(()=>{o.value.hide?o.value.inverted?s.value=h.value>y.value:s.value=b.value||h.value<y.value:s.value=!0})});const{ssrBootStyles:I}=ge(),{layoutItemStyles:H}=pe({id:e.name,order:g(()=>parseInt(e.order,10)),position:M(e,"location"),layoutSize:T,elementSize:w(void 0),active:s,absolute:M(e,"absolute")});return L(()=>{const[r]=q.filterProps(e);return a(q,z({ref:n,class:["v-app-bar",{"v-app-bar--bottom":e.location==="bottom"},e.class],style:[{...H.value,"--v-toolbar-image-opacity":c.value,height:void 0,...I.value},e.style]},r,{collapse:V.value,flat:_.value}),t)}),{}}}),$e=R({...be({icon:"$menu",variant:"text"})},"VAppBarNavIcon"),De=E()({name:"VAppBarNavIcon",props:$e(),setup(e,v){let{slots:t}=v;return L(()=>a(S,z(e,{class:["v-app-bar-nav-icon"]}),t)),{}}}),Me=E()({name:"VAppBarTitle",props:G(),setup(e,v){let{slots:t}=v;return L(()=>a(J,z(e,{class:"v-app-bar-title"}),t)),{}}}),Fe=Pe("template",null,null,-1),Ge={__name:"FrontLayout",setup(e){const v=ye(),t=Ve(),{isLogin:n}=_e(t),{mobile:s}=ke(),o=g(()=>s.value),p=F(!1),h=async()=>{try{await we.delete("/users/logout"),t.logout(),v({text:"登出成功",showCloseButton:!1,snackbarProps:{timeout:2e3,color:"green",location:"bottom"}})}catch(y){v({text:y.response.data.message,showCloseButton:!1,snackbarProps:{timeout:2e3,color:"red",location:"bottom"}})}};return(y,b)=>{const i=Se("RouterView");return u(),Te(xe,null,[o.value?(u(),d(Ie,{key:0,modelValue:p.value,"onUpdate:modelValue":b[0]||(b[0]=V=>p.value=V),location:"right",temporary:""},{default:l(()=>[a(Be,{nav:""},{default:l(()=>[a(B,{to:"/"},{prepend:l(()=>[a(C,{icon:"mdi-home"})]),default:l(()=>[a(P,null,{default:l(()=>[f("首頁")]),_:1})]),_:1}),a(B,{to:"/orders"},{prepend:l(()=>[a(C,{icon:"mdi-book-open-page-variant-outline"})]),default:l(()=>[a(P,null,{default:l(()=>[f("文章")]),_:1})]),_:1}),k(n)?m("",!0):(u(),d(B,{key:0,to:"/register"},{prepend:l(()=>[a(C,{icon:"mdi-account-plus"})]),default:l(()=>[a(P,null,{default:l(()=>[f("註冊")]),_:1})]),_:1})),k(n)?m("",!0):(u(),d(B,{key:1,to:"/login"},{prepend:l(()=>[a(C,{icon:"mdi-login"})]),default:l(()=>[a(P,null,{default:l(()=>[f("登入")]),_:1})]),_:1})),k(n)?(u(),d(B,{key:2,to:"/cart"},{prepend:l(()=>[a(C,{icon:"mdi-heart"})]),default:l(()=>[a(P,null,{default:l(()=>[f("收藏")]),_:1})]),_:1})):m("",!0),k(n)?(u(),d(B,{key:3,to:"/admin"},{prepend:l(()=>[a(C,{icon:"mdi-cog"})]),default:l(()=>[a(P,null,{default:l(()=>[f("管理")]),_:1})]),_:1})):m("",!0),k(n)?(u(),d(B,{key:4,onClick:h},{prepend:l(()=>[a(C,{icon:"mdi-logout"})]),default:l(()=>[a(P,null,{default:l(()=>[f("登出")]),_:1})]),_:1})):m("",!0)]),_:1})]),_:1},8,["modelValue"])):m("",!0),a(Ue,{color:""},{default:l(()=>[a(Ae,{class:"d-flex align-center"},{default:l(()=>[a(S,{to:"/",active:!1},{default:l(()=>[a(Me,null,{default:l(()=>[a(j,{"max-height":"40","max-width":270,src:Q})]),_:1})]),_:1}),a(Ce),o.value?(u(),d(De,{key:0,onClick:b[1]||(b[1]=V=>p.value=!0)})):m("",!0),Fe,o.value?m("",!0):(u(),d(S,{key:1,to:"/","prepend-icon":"mdi-home"},{default:l(()=>[f("首頁")]),_:1})),o.value?m("",!0):(u(),d(S,{key:2,to:"/orders","prepend-icon":"mdi-book-open-page-variant-outline"},{default:l(()=>[f("文章")]),_:1})),!o.value&&!k(n)?(u(),d(S,{key:3,to:"/register","prepend-icon":"mdi-account-plus"},{default:l(()=>[f("註冊")]),_:1})):m("",!0),!o.value&&!k(n)?(u(),d(S,{key:4,to:"/login","prepend-icon":"mdi-login"},{default:l(()=>[f("登入")]),_:1})):m("",!0),!o.value&&k(n)?(u(),d(S,{key:5,to:"/cart","prepend-icon":"mdi-heart"},{default:l(()=>[f("收藏")]),_:1})):m("",!0),!o.value&&k(n)?(u(),d(S,{key:6,to:"/admin","prepend-icon":"mdi-cog"},{default:l(()=>[f("管理")]),_:1})):m("",!0),!o.value&&k(n)?(u(),d(S,{key:7,variant:"text","prepend-icon":"mdi-logout",onClick:h},{default:l(()=>[f("登出")]),_:1})):m("",!0)]),_:1})]),_:1}),a(Ne,null,{default:l(()=>[(u(),d(i,{key:y.$route.path}))]),_:1})],64)}}};export{Ge as default};