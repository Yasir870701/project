import{L as i,M as m,P as f,Q as n,S as l,T as a,c as t,V as _,ay as g,_ as d,au as y,az as V,aA as C,K as h,a9 as x,a3 as k,x as S,a8 as w,R as B,aw as b,W as P,aB as R,aC as v}from"./index-5f72f9b3.js";import{V as L}from"./VContainer-cb8d1468.js";import{V as T,a as A}from"./VRow-cabc3af4.js";/* empty css              */const z={__name:"ProductCard",props:{_id:{type:String,default:()=>""},category:{type:String,default:()=>""},description:{type:String,default:()=>""},image:{type:String,default:()=>""},name:{type:String,default:()=>""},sell:{type:Boolean,default:()=>!0}},setup(s){const c=s,o=i(),r=m(),u=async()=>{try{const{data:e}=await k.post("/users/cart",{product:c._id,quantity:1});r.cart=e.result}catch(e){o({text:e.response.data.message,showCloseButton:!1,snackbarProps:{timeout:2e3,color:"red",location:"bottom"}})}};return(e,N)=>{const p=f("RouterLink");return n(),l(x,{"max-width":"400"},{default:a(()=>[t(_,{src:s.image,"max-height":"200"},null,8,["src"]),t(g,null,{default:a(()=>[t(p,{to:"/products/"+s._id,class:"text-primary text-decoration-none"},{default:a(()=>[d(y(s.name),1)]),_:1},8,["to"])]),_:1}),t(V),t(C,null,{default:a(()=>[t(h,{color:"red","prepend-icon":"mdi-heart",onClick:u},{default:a(()=>[d("收藏")]),_:1})]),_:1})]),_:1})}}},I={__name:"OrdersView",setup(s){const c=i(),o=S([]);return(async()=>{try{const{data:r}=await w.get("/products");o.value.push(...r.result)}catch(r){c({text:r.response.data.message,showCloseButton:!1,snackbarProps:{timeout:2e3,color:"red",location:"bottom"}})}})(),(r,u)=>(n(),l(L,null,{default:a(()=>[t(T,null,{default:a(()=>[(n(!0),B(P,null,b(o.value,e=>(n(),l(A,{cols:"12",md:"6",lg:"3",key:e._id},{default:a(()=>[t(z,R(v(e)),null,16)]),_:2},1024))),128))]),_:1})]),_:1}))}};export{I as default};