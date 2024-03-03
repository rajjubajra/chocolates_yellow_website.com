(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[382],{7796:function(e,i,t){Promise.resolve().then(t.bind(t,5374))},5374:function(e,i,t){"use strict";t.r(i),t.d(i,{default:function(){return N}});var d=t(3827),r=t(5230),n=t(9803);let l="".concat(n.g.url,"jsonapi/node/products?include=field_product_ingredients,field_product_image,field_product_image.field_media_image"),s=(e,i)=>{let t=e.map(e=>({mediaId:e.id})),d=[],r=[];i.map(e=>{if("file--file"===e.type){var i,t,n;r.push({fileId:e.id,uid:null==e?void 0:null===(n=e.relationships)||void 0===n?void 0:null===(t=n.uid)||void 0===t?void 0:null===(i=t.data)||void 0===i?void 0:i.id,url:e.attributes.uri.url,filesize:e.attributes.filesize})}"media--image"===e.type&&d.push({mediaId:e.id,mediaTypeId:e.relationships.bundle.data.id,name:e.attributes.name,fileId:e.relationships.field_media_image.data.id,width:e.relationships.thumbnail.data.meta.width,heigh:e.relationships.thumbnail.data.meta.height,alt:e.relationships.thumbnail.data.meta.alt})});let n=d.map(e=>{let i=r.find(i=>i.fileId===e.fileId);return i&&{item:e,...i}});return t.map(e=>{let i=n.find(i=>i.item.mediaId===e.mediaId);return i&&{value:e,...i}})},a=(e,i)=>{let t=[];return i.map(e=>{var i,d,r,n,l;(null==e?void 0:null===(r=e.relationships)||void 0===r?void 0:null===(d=r.vid)||void 0===d?void 0:null===(i=d.data)||void 0===i?void 0:i.id)==="585904d9-ece9-4f7f-8ffb-a8899564e19f"&&t.push({id:e.id,name:null==e?void 0:null===(n=e.attributes)||void 0===n?void 0:n.name,created:null===(l=e.attributes)||void 0===l?void 0:l.changed})}),e.map(e=>{let i=t.find(i=>i.id===e.id);return i&&{item:e,...i}})};var o=()=>{let{data:e,isLoading:i,error:t}=(0,r.useQuery)("products",async()=>{let e=await fetch(l),i=await e.json();return i.data.map(e=>({id:e.id,name:e.attributes.field_product_name,description:e.attributes.field_product_description.value,rate:e.attributes.field_product_rate,image:s(e.relationships.field_product_image.data,i.included),type:e.type,ingredients:a(e.relationships.field_product_ingredients.data,i.included)}))});return{data:e,isLoading:i,error:t}},u=t(828),c=t(5104);let v=(e,i)=>{var t;if(!e||!i)return null;let d=null===(t=i.productsArr)||void 0===t?void 0:t.findIndex(i=>i.product_id===e);return -1!==d?"Qty: ".concat(i.productsArr[d].qty):"Qty: 0"};var p=function(e){let{id:i}=e,t=(0,u.I0)(),r=(0,u.v9)(e=>e.shopping),n=(0,u.v9)(e=>e.shopping.productsArr.length);return(0,d.jsx)(d.Fragment,{children:n>0&&r.productsArr.some(e=>e.product_id===i)?(0,d.jsxs)("div",{className:"flex gap-2",children:[(0,d.jsx)("button",{className:"w-8 h-8 border",onClick:()=>t((0,c.xr)({product_id:i,qty:1})),children:"+"}),(0,d.jsx)("div",{children:i&&r&&v(i,r)}),(0,d.jsx)("button",{className:"w-8 h-8 border",onClick:()=>t((0,c.xr)({product_id:i,qty:-1})),children:"-"})]}):(0,d.jsx)("div",{className:"border w-40 text-center py-2 shadow-md hover:shadow-inner cursor-pointer",onClick:()=>t((0,c.xr)({product_id:i,qty:1})),children:"Add To Cart"})})},h=function(e){let{id:i}=e,t=(0,u.I0)(),r=(0,u.v9)(e=>e.shopping.productsArr);return(0,d.jsx)(d.Fragment,{children:r.some(e=>e.product_id===i)&&(0,d.jsx)("div",{onClick:()=>t((0,c.cl)({id:i})),children:"Remove Item"})})},m=function(){let{data:e,isLoading:i,error:t}=o();return i?(0,d.jsx)("p",{children:"Loading..."}):t?(0,d.jsxs)("p",{children:["Error: ",t.message]}):(0,d.jsxs)("div",{children:["Product Listing Component",e.map(e=>(0,d.jsxs)("div",{className:"border p-2 my-2",children:[(0,d.jsxs)("div",{children:[(0,d.jsx)("div",{children:e.id}),(0,d.jsx)("div",{children:e.name}),(0,d.jsx)("div",{children:e.rate})]}),(0,d.jsxs)("div",{className:"flex justify-between",children:[(0,d.jsx)(p,{id:e.id}),(0,d.jsx)(h,{id:e.id})]})]},e.id))]})},f=t(4090),x=t(997),j=function(){let{productsArr:e}=(0,u.v9)(e=>e.shopping);(0,u.v9)(e=>e.shopping.productsArr.length);let[i,t]=(0,f.useState)(0);return(0,f.useEffect)(()=>{t(e.reduce((e,i)=>e+i.qty,0))},[e]),(0,d.jsxs)("div",{className:"w-10 flex flex-col justify-center items-center",children:[(0,d.jsx)("div",{className:"relative top-1 w-6 h-6 border-2 border-slate-800 flex justify-center items-center rounded-full text-xs",children:i}),(0,d.jsx)("div",{className:"text-2xl",children:(0,d.jsx)(x.XV$,{})})]})},_=t(7809);let g=function(){for(var e=arguments.length,i=Array(e),t=0;t<e;t++)i[t]=arguments[t];return fetch(...i).then(e=>e.json())},b=()=>{let e=n.g.url+"jsonapi",{data:i,error:t,isLoading:d}=(0,_.ZP)(e,g),[r,l]=(0,f.useState)("");(0,f.useEffect)(()=>{var e,t,d;i&&l(null==i?void 0:null===(d=i.meta)||void 0===d?void 0:null===(t=d.links)||void 0===t?void 0:null===(e=t.me)||void 0===e?void 0:e.href)},[i]);let{data:s,error:a,isLoading:o}=(0,_.ZP)(r,g),[u,c]=(0,f.useState)(""),[v,p]=(0,f.useState)(""),[h,m]=(0,f.useState)(""),[x,j]=(0,f.useState)(""),[b,y]=(0,f.useState)(""),[w,A]=(0,f.useState)(""),[C,I]=(0,f.useState)(""),[N,S]=(0,f.useState)("");return(0,f.useEffect)(()=>{var e,t,d,r,n,l,a,o,u,v,p,h,f,x,_,g;s&&c(null==s?void 0:null===(t=s.data)||void 0===t?void 0:null===(e=t.attributes)||void 0===e?void 0:e.name),m(null==s?void 0:null===(r=s.data)||void 0===r?void 0:null===(d=r.attributes)||void 0===d?void 0:d.mail),j(null==s?void 0:null===(l=s.data)||void 0===l?void 0:null===(n=l.attributes)||void 0===n?void 0:n.field_phone_number),y(null==s?void 0:null===(o=s.data)||void 0===o?void 0:null===(a=o.attributes)||void 0===a?void 0:a.created),A(null==s?void 0:null===(v=s.data)||void 0===v?void 0:null===(u=v.attributes)||void 0===u?void 0:u.timezone),I(null==s?void 0:null===(h=s.data)||void 0===h?void 0:null===(p=h.attributes)||void 0===p?void 0:p.field_country),S(null==i?void 0:null===(g=i.meta)||void 0===g?void 0:null===(_=g.links)||void 0===_?void 0:null===(x=_.me)||void 0===x?void 0:null===(f=x.meta)||void 0===f?void 0:f.id)},[s,i]),{uid:N,username:u,userEmail:h,userTel:x,userRegisterDate:b,userTimeZone:w,userCountry:C}};var y=t(7908);let w=async e=>{console.log("Form Data",e);let i="".concat(n.g.url,"jsonapi/node/sales_book");try{let t=await y.Z.post(i,{headers:{"Content-Type":"application/vnd.api+json","X-CSRF-Token":"zfCD0UBU1XqVcOpGOowgoGObuLxaCX1E0gHHbGZT0eY"}},{formData:e});if(200===t.statusCode){let e=t.data;console.log("POST Success . :",e)}else throw Error("Error submitting shopping cart data: ".concat(t.statusText))}catch(e){console.log("Error submitting shopping cart",e)}};var A=function(){let{uid:e,username:i,userEmail:t,userTel:r,userRegisterDate:n,userTimeZone:l,userCountry:s}=b(),{data:a,isLoading:c,error:v}=o(),{productsArr:m}=(0,u.v9)(e=>e.shopping),x=m.reduce((e,i)=>{let t=a.findIndex(e=>e.id===i.product_id);return e+a[t].rate*i.qty},0),[j,_]=(0,f.useState)([]),[g,y]=(0,f.useState)();return(0,f.useEffect)(()=>{_(m.map((e,i)=>{let t=a.findIndex(i=>i.id===e.product_id),d=a[t].rate*e.qty;return"{ sn : "+i+"1, name : "+a[t].name+", rate : "+a[t].rate+", amount : "+d+"}"}).join(","))},[a,m]),(0,f.useEffect)(()=>{y({data:{type:"node--sales_book",attributes:{title:"Shopping Cart",field_client_country:s,field_client_email:t,field_client_grand_total:x,field_client_id:e,field_client_name:i,field_client_phone:r,field_client_time_zone:l,field_items:j}}})},[j,x,e,s,t,n,r,l,i]),(0,d.jsxs)("div",{className:"mt-20 ml-2 border min-h-screen w-full p-4",children:[(0,d.jsx)("h3",{children:"Shopping Cart"}),(0,d.jsxs)("div",{children:["Gr Total Amount: ",x]}),(0,d.jsx)("div",{}),(0,d.jsxs)("div",{children:[m&&m.length>0&&m.map((e,i)=>{let t=a.findIndex(i=>i.id===e.product_id),r=a[t].rate*e.qty;return(0,d.jsxs)("div",{className:"w-full p-4 m-2 border",children:[(0,d.jsxs)("div",{children:[i+1," : "]}),(0,d.jsx)("div",{children:a[t].name}),(0,d.jsxs)("div",{children:["Rate: ",a[t].rate]}),(0,d.jsxs)("div",{children:["Amount: ",r," "]}),(0,d.jsxs)("div",{className:"flex justify-between",children:[(0,d.jsx)(p,{id:e.product_id}),(0,d.jsx)(h,{id:e.product_id})]})]},e.product_id)}),x>0&&(0,d.jsx)("button",{onClick:()=>w(g),className:"p-4 m-2 border w-full",type:"submit",children:"Checkout"})]})]})},C=function(){let{username:e,userEmail:i,userTel:t,userRegisterDate:r,userTimeZone:n,userCountry:l}=b();return e&&i?(0,d.jsx)("div",{children:(0,d.jsxs)("div",{children:[(0,d.jsxs)("div",{children:["Name: ",e]}),(0,d.jsxs)("div",{children:["Email: ",i]}),(0,d.jsxs)("div",{children:["Tel:",t]}),(0,d.jsxs)("div",{children:["Country: ",l]}),(0,d.jsxs)("div",{children:["Time Zone: ",n]}),(0,d.jsxs)("div",{children:["Register Date: ",r]})]})}):""};let I=new r.QueryClient;var N=function(){return(0,d.jsx)("div",{className:"mt-20 mx-10 flex",children:(0,d.jsxs)(r.QueryClientProvider,{client:I,children:[(0,d.jsxs)("div",{children:[(0,d.jsx)(j,{}),(0,d.jsx)(C,{}),(0,d.jsx)(m,{})]}),(0,d.jsx)("div",{children:(0,d.jsx)(A,{})})]})})}},9803:function(e,i,t){"use strict";t.d(i,{g:function(){return d}});let d={url:"https://chocolates.yellow-website.com/drupal/"}},5104:function(e,i,t){"use strict";t.d(i,{cl:function(){return n},xr:function(){return r}});let d=(0,t(5972).oM)({name:"shopping",initialState:{productsArr:[]},reducers:{increaseDecreaseQuantity:(e,i)=>{let{product_id:t,qty:d}=i.payload,r=e.productsArr.findIndex(e=>e.product_id===t);if(-1!==r){let i={...e.productsArr[r],qty:Math.max(e.productsArr[r].qty+d,0)};e.productsArr[r]=i}else e.productsArr.push({product_id:t,qty:d});return e.productsArr=e.productsArr.filter(e=>e.qty>0),e},removeItem:(e,i)=>{let{id:t}=i.payload;e.productsArr=e.productsArr.filter(e=>e.product_id!==t)}}}),{increaseDecreaseQuantity:r,removeItem:n}=d.actions;i.ZP=d.reducer}},function(e){e.O(0,[522,135,935,971,69,744],function(){return e(e.s=7796)}),_N_E=e.O()}]);