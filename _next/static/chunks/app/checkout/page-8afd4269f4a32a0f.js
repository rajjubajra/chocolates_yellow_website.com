(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[285],{3811:function(t,e,i){Promise.resolve().then(i.bind(i,4952))},4952:function(t,e,i){"use strict";i.r(e);var l=i(3827),o=i(7664),u=i(828);e.default=function(){let{orderData:t}=(0,u.v9)(t=>t.order);console.log("order Data:",t);let{uid:e}=(0,o.a)();return(0,l.jsxs)("div",{children:["Checkout page : ",e]})}},9803:function(t,e,i){"use strict";i.d(e,{g:function(){return l}});let l={url:"https://chocolates.yellow-website.com/drupal/"}},7664:function(t,e,i){"use strict";i.d(e,{a:function(){return d}});var l=i(4090),o=i(9803),u=i(7809);let n=function(){for(var t=arguments.length,e=Array(t),i=0;i<t;i++)e[i]=arguments[i];return fetch(...e).then(t=>t.json())},d=()=>{let t=o.g.url+"jsonapi",{data:e,error:i,isLoading:d}=(0,u.ZP)(t,n),[v,a]=(0,l.useState)("");(0,l.useEffect)(()=>{var t,i,l;e&&a(null==e?void 0:null===(l=e.meta)||void 0===l?void 0:null===(i=l.links)||void 0===i?void 0:null===(t=i.me)||void 0===t?void 0:t.href)},[e]);let{data:r,error:s,isLoading:c}=(0,u.ZP)(v,n),[f,h]=(0,l.useState)(""),[b,m]=(0,l.useState)(""),[S,_]=(0,l.useState)(""),[p,k]=(0,l.useState)(""),[g,E]=(0,l.useState)(""),[w,j]=(0,l.useState)(""),[y,C]=(0,l.useState)(""),[N,P]=(0,l.useState)("");return(0,l.useEffect)(()=>{var t,i,l,o,u,n,d,v,a,s,c,f,b,m,S,p;r&&h(null==r?void 0:null===(i=r.data)||void 0===i?void 0:null===(t=i.attributes)||void 0===t?void 0:t.name),_(null==r?void 0:null===(o=r.data)||void 0===o?void 0:null===(l=o.attributes)||void 0===l?void 0:l.mail),k(null==r?void 0:null===(n=r.data)||void 0===n?void 0:null===(u=n.attributes)||void 0===u?void 0:u.field_phone_number),E(null==r?void 0:null===(v=r.data)||void 0===v?void 0:null===(d=v.attributes)||void 0===d?void 0:d.created),j(null==r?void 0:null===(s=r.data)||void 0===s?void 0:null===(a=s.attributes)||void 0===a?void 0:a.timezone),C(null==r?void 0:null===(f=r.data)||void 0===f?void 0:null===(c=f.attributes)||void 0===c?void 0:c.field_country),P(null==e?void 0:null===(p=e.meta)||void 0===p?void 0:null===(S=p.links)||void 0===S?void 0:null===(m=S.me)||void 0===m?void 0:null===(b=m.meta)||void 0===b?void 0:b.id)},[r,e]),{uid:N,username:f,userEmail:S,userTel:p,userRegisterDate:g,userTimeZone:w,userCountry:y}}}},function(t){t.O(0,[809,828,971,69,744],function(){return t(t.s=3811)}),_N_E=t.O()}]);