(self.webpackChunkplugin_web_rca=self.webpackChunkplugin_web_rca||[]).push([[879],{15092:(e,t,n)=>{"use strict";n.d(t,{S:()=>u});var r=n(74848),i=(n(28437),n(94066)),o=n(24705),c=n(22097),a=n(54392),s=n(81067);const d=({incidents:e,web_rca_url:t,message:n})=>{if(n)return(0,r.jsx)(i.nO,{title:"Error fetching incidents",children:(0,r.jsx)(a.A,{variant:"body1",children:n})});if(!e||!e.items||0===e.items.length)return(0,r.jsx)(i.nO,{title:"Error fetching incidents",children:(0,r.jsx)(a.A,{variant:"body1",children:'"No Incidents"'})});const o=e.items.map((e=>({incident_id:(0,r.jsx)("a",{target:"_blank",rel:"noreferrer",href:`${t}/incident/${e.incident_id}/events`,children:e.incident_id}),summary:e.summary,description:e.description})));return(0,r.jsx)(i.XI,{title:"Incidents",options:{search:!0,paging:!0,pageSize:10},columns:[{title:"ID",field:"incident_id"},{title:"Summary",field:"summary"},{title:"Description",field:"description"}],data:o})};async function l(e,t,n){return await fetch(`${e}/api/proxy/status-board/products?search=fullname+ilike+'${n}'`,{headers:{Authorization:`Bearer ${t}`}}).catch((e=>e)).then((e=>e.json()))}const u=({product:e})=>{const t=(0,c.useApi)(c.configApiRef),n=(0,c.useApi)(c.identityApiRef),a=(0,s.u)(),{value:u,loading:p,error:g}=(0,o.A)((async()=>{const r=await n.getProfileInfo().then((e=>e));console.log(r);const i=await n.getBackstageIdentity().then((e=>e));console.log(i);const o=await n.getCredentials().then((e=>(console.log(e),console.log(e.token),e.token)));if(void 0===o)return"Invalid token";let c;console.log(o);try{c=await async function(e,t){const n={grant_type:"refresh_token",client_id:"cloud-services",refresh_token:`${t}`},r=[];for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e)){const t=encodeURIComponent(e),i=encodeURIComponent(n[e]);r.push(`${t}=${i}`)}const i=r.join("&");return await fetch(`${e}/api/proxy/sso-redhat/auth/realms/redhat-external/protocol/openid-connect/token`,{method:"POST",body:i,headers:{"Content-Type":"application/x-www-form-urlencoded"}}).catch((e=>e)).then((e=>e.json()))}(t.getString("backend.baseUrl"),o)}catch(e){return console.log("Error: ",e),"Invalid token"}if(console.log("Token: ",c),c.error)return c.error_description;let s="";if(e){const n=await l(t.getString("backend.baseUrl"),c.access_token,e);n.items&&n.items.length>0&&(s=`?product_id=${n.items[0].id}`)}if(a){const e=await l(t.getString("backend.baseUrl"),c.access_token,a.entity.metadata.name);e.items.length>0&&(s=`?product_id=${e.items[0].id}`)}return""===s?"No product based on entity":fetch(`${t.getString("backend.baseUrl")}/api/proxy/web-rca/incidents${s}`,{headers:{Authorization:`Bearer ${c.access_token}`}}).then((e=>e.json())).catch((e=>e))}),[]);return p?(0,r.jsx)(i.ke,{}):g?(0,r.jsx)(i._1,{error:g}):u?"string"==typeof u?(0,r.jsx)(d,{message:u,web_rca_url:t.getString("ocm.web-rca-url")}):(0,r.jsx)(d,{incidents:u,web_rca_url:t.getString("ocm.web-rca-url")}):(0,r.jsx)(i._1,{error:{name:"Foo",message:"Foo"}})}},66477:(e,t,n)=>{"use strict";n.r(t),n.d(t,{WebRCAFetchComponent:()=>a.S,WebRcaPage:()=>c,webRcaPlugin:()=>o});var r=n(22097);const i=(0,r.createRouteRef)({id:"web-rca"}),o=(0,r.createPlugin)({id:"web-rca",routes:{root:i}}),c=o.provide((0,r.createRoutableExtension)({name:"WebRcaPage",component:()=>n.e(9623).then(n.bind(n,99623)).then((e=>e.WebRCAComponent)),mountPoint:i}));var a=n(15092)},42634:()=>{}}]);
//# sourceMappingURL=exposed-PluginRoot.71cff91f.chunk.js.map