import{L as v,M as y,aj as V,x as g,o as i,a3 as p,Q as c,S as x,T as l,c as r,aw as k,a2 as e,R as u,ax as C,W as b,U as w,ay as B,V as S,av as q,K as N}from"./index-7a7a13e8.js";import{V as R}from"./VContainer-64669136.js";import{a as _,V as j}from"./VRow-b9a03ddc.js";/* empty css              */const I=e("h1",null,"收藏",-1),L=e("thead",null,[e("tr",null,[e("th",null,"圖片"),e("th",null,"名稱"),e("th",null,"操作")])],-1),P={key:0},T=e("td",{colspan:"6",class:"text-center"},"沒有收藏",-1),U=[T],K={__name:"CartView",setup(z){const d=v(),h=y();V();const a=g([]),m=async(t,o)=>{try{const{data:s}=await p.post("/users/cart",{product:t,quantity:o}),n=a.value.findIndex(f=>f.product._id===t);a.value[n].quantity+=o,a.value[n].quantity<=0&&a.value.splice(n,1),h.cart=s.result}catch(s){d({text:s.response.data.message,showCloseButton:!1,snackbarProps:{timeout:2e3,color:"red",location:"bottom"}})}};return i(()=>a.value.reduce((t,o)=>t+o.quantity*o.product.price,0)),i(()=>a.value.length>0&&!a.value.some(t=>!t.product.sell)),(async()=>{try{const{data:t}=await p.get("/users/cart");a.value.push(...t.result)}catch(t){d({text:t.response.data.message,showCloseButton:!1,snackbarProps:{timeout:2e3,color:"red",location:"bottom"}})}})(),(t,o)=>(c(),x(R,{class:""},{default:l(()=>[r(j,null,{default:l(()=>[r(_,{cols:"12",class:"text-center"},{default:l(()=>[I]),_:1}),r(_,{class:"justify-center align-center",cols:"12"},{default:l(()=>[r(k,null,{default:l(()=>[L,e("tbody",null,[(c(!0),u(b,null,C(a.value,s=>(c(),u("tr",{key:s._id,class:B({"bg-red-lighten-5":!s.product.sell})},[e("td",null,[r(S,{src:s.product.image,cover:"",width:"200","aspect-ratio":"1"},null,8,["src"])]),e("td",null,q(s.product.name),1),e("td",null,[r(N,{color:"red",variant:"text",icon:"mdi-delete",onClick:n=>m(s.product._id,s.quantity*-1)},null,8,["onClick"])])],2))),128)),a.value.length===0?(c(),u("tr",P,U)):w("",!0)])]),_:1})]),_:1})]),_:1})]),_:1}))}};export{K as default};
