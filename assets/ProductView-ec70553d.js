import{p as f,d as g,m as y,ap as k,e as V,aq as S,ar as b,f as C,a as P,h as w,b as x,n as B,i as q,t as R,j as T,as as E,k as F,at as N,au as $,l as j,u as D,c as t,av as L,M as U,N as z,a4 as A,y as I,a9 as M,R as O,S as X,U as o,aw as G,X as H,V as J,a3 as n,ax as v,L as K,$ as Q}from"./index-1081590e.js";import{c as W,e as Y,u as Z,d as ee}from"./index.esm-c523d3fc.js";import{V as ae}from"./VContainer-a4263e19.js";import{V as se,a as m}from"./VRow-7bad0243.js";/* empty css              */const te=f({color:String,...g(),...y(),...k(),...V(),...S(),...b(),...C(),...P(),...w()},"VSheet"),oe=x()({name:"VSheet",props:te(),setup(s,c){let{slots:l}=c;const{themeClasses:u}=B(s),{backgroundColorClasses:i,backgroundColorStyles:p}=q(R(s,"color")),{borderClasses:d}=T(s),{dimensionStyles:e}=E(s),{elevationClasses:a}=F(s),{locationStyles:r}=N(s),{positionClasses:h}=$(s),{roundedClasses:_}=j(s);return D(()=>t(s.tag,{class:["v-sheet",u.value,i.value,d.value,a.value,h.value,_.value,s.class],style:[p.value,e.value,r.value,s.style]},l)),{}}}),re={class:"text-h3 font-weight-black mb-8"},le={class:"mb-8 font-weight-bold text-capitalize"},ne={style:{"white-space":"pre-wrap"}},ce=n("h1",{class:"text-red"},"已下架",-1),ve={__name:"ProductView",setup(s){const c=L(),l=U(),u=z(),i=W({quantity:Y().typeError("缺少數量").required("缺少數量").min(1,"最少為 1")}),{isSubmitting:p,handleSubmit:d}=Z({validationSchema:i,initialValues:{quantity:0}});ee("quantity"),d(async a=>{try{const{data:r}=await A.post("/users/cart",{product:e.value._id,quantity:a.quantity});u.cart=r.result}catch(r){l({text:r.response.data.message,showCloseButton:!1,snackbarProps:{timeout:2e3,color:"red",location:"bottom"}})}});const e=I({_id:"",name:"",description:"",image:"",sell:!0,category:""});return(async()=>{try{const{data:a}=await M.get("/products/"+c.params.id);e.value._id=a.result._id,e.value.name=a.result.name,e.value.description=a.result.description,e.value.image=a.result.image,e.value.sell=a.result.sell,e.value.category=a.result.category,document.title="Transform! | "+e.value.name}catch(a){l({text:a.response.data.message,showCloseButton:!1,snackbarProps:{timeout:2e3,color:"red",location:"bottom"}})}})(),(a,r)=>(O(),X(H,null,[t(ae,null,{default:o(()=>[t(se,null,{default:o(()=>[t(m,{cols:"12"}),t(m,{cols:"12",md:"2",class:"text-center d-flex justify-center align-center"},{default:o(()=>[t(J,{src:e.value.image},null,8,["src"])]),_:1}),t(m,{cols:"auto"},{default:o(()=>[t(oe,{rounded:"",elevation:8,class:"pa-8 overflow-auto","max-width":"1800"},{default:o(()=>[n("h4",re,v(e.value.name),1),n("div",le,[n("pre",ne,v(e.value.description),1)])]),_:1})]),_:1})]),_:1})]),_:1}),t(G,{"model-value":!e.value.sell,persistent:"",class:"align-center text-center justify-center"},{default:o(()=>[ce,t(K,{to:"/"},{default:o(()=>[Q("回上頁")]),_:1})]),_:1},8,["model-value"])],64))}};export{ve as default};