import{L as m,x as f,a3 as V,Q as n,S as k,T as s,c as r,av as y,a2 as t,R as c,aw as i,W as _,au as e}from"./index-5f72f9b3.js";import{V as w}from"./VContainer-cb8d1468.js";import{a as p,V as b}from"./VRow-cabc3af4.js";/* empty css              */const g=t("h1",null,"訂單管理",-1),x=t("thead",null,[t("tr",null,[t("th",null,"ID"),t("th",null,"日期"),t("th",null,"使用者"),t("th",null,"金額"),t("th",null,"商品")])],-1),L={__name:"OrdersView",setup(B){const h=m(),d=f([]);return(async()=>{try{const{data:u}=await V.get("/orders/all");d.value.push(...u.result.map(o=>(o.total=o.cart.reduce((a,l)=>a+l.product.price*l.quantity,0),o)))}catch(u){h({text:u.response.data.message,showCloseButton:!1,snackbarProps:{timeout:2e3,color:"red",location:"bottom"}})}})(),(u,o)=>(n(),k(w,null,{default:s(()=>[r(b,null,{default:s(()=>[r(p,{cols:"12"},{default:s(()=>[g]),_:1}),r(p,{cols:"12"},{default:s(()=>[r(y,null,{default:s(()=>[x,t("tbody",null,[(n(!0),c(_,null,i(d.value,a=>(n(),c("tr",{key:a._id},[t("td",null,e(a._id),1),t("td",null,e(new Date(a.date).toLocaleString()),1),t("td",null,e(a.user.account),1),t("td",null,e(a.total),1),t("td",null,[t("ul",null,[(n(!0),c(_,null,i(a.cart,l=>(n(),c("li",{key:l._id},e(l.product.name)+" * "+e(l.quantity),1))),128))])])]))),128))])]),_:1})]),_:1})]),_:1})]),_:1}))}};export{L as default};