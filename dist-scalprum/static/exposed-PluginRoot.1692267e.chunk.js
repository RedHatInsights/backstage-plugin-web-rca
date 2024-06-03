(self.webpackChunkplugin_web_rca=self.webpackChunkplugin_web_rca||[]).push([[879],{15092:(e,t,n)=>{"use strict";n.d(t,{S:()=>g});var r=n(74848),i=(n(28437),n(94066)),o=n(24705),a=n(22097),c=n(54392),s=n(81067);const l=({incidents:e,web_rca_url:t,message:n})=>{if(n)return(0,r.jsx)(i.nO,{title:"Web RCA Incidents",children:(0,r.jsx)(c.A,{variant:"body1",children:"Error fetching incidents: "+n})});if(!e||!e.items||0===e.items.length)return(0,r.jsx)(i.nO,{title:"Web RCA Incidents",children:(0,r.jsx)(c.A,{variant:"body1",children:'"Error fetching incidents: No Incidents"'})});if(!e||!e.items||0===e.items.length)return(0,r.jsx)(i.nO,{title:"Web RCA Incidents",children:(0,r.jsx)(c.A,{variant:"body1",children:"Error fetching incidents: "+n})});const o=e.items.map((e=>({incident_id:(0,r.jsx)("a",{target:"_blank",rel:"noreferrer",href:`${t}/incident/${e.incident_id}/details`,children:e.incident_id}),summary:e.summary,description:e.description})));return(0,r.jsx)(i.XI,{title:"Web RCA Incidents",options:{search:!0,paging:!0,pageSize:10},columns:[{title:"ID",field:"incident_id"},{title:"Summary",field:"summary"},{title:"Description",field:"description"}],data:o})};async function d(e,t,n){return await fetch(`${e}/api/proxy/status-board/products?search=fullname+ilike+'${n}'`,{headers:{Authorization:`Bearer ${t}`}}).catch((e=>e)).then((e=>e.json()))}const g=({product:e})=>{const t=(0,a.useApi)(a.configApiRef),n=(0,a.useApi)(a.identityApiRef),c=(0,s.u)(),{value:g,loading:u,error:h}=(0,o.A)((async()=>{const r=await n.getProfileInfo().then((e=>e));console.log(r);const i=await n.getBackstageIdentity().then((e=>e));console.log(i);const o=await n.getCredentials().then((e=>(console.log(e),console.log(e.token),e.token)));if(void 0===o)return"Invalid token";console.log(o);let a,s=o;try{a=await async function(e,t,n){const r={grant_type:"client_credentials",client_id:t,client_secret:n,scope:"openid api.ocm"},i=[];for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e)){const t=encodeURIComponent(e),n=encodeURIComponent(r[e]);i.push(`${t}=${n}`)}const o=i.join("&");return await fetch(`${e}/api/proxy/sso-redhat/auth/realms/redhat-external/protocol/openid-connect/token`,{method:"POST",body:o,headers:{"Content-Type":"application/x-www-form-urlencoded"}}).catch((e=>e)).then((e=>e.json()))}(t.getString("backend.baseUrl"),t.getString("ocm.clientId"),t.getString("ocm.clientSecret"))}catch(e){return console.log("Error: ",e),"Invalid token"}if(a.error)return a.error_description;let l,g="";if(e){let n;try{n=await d(t.getString("backend.baseUrl"),s,e)}catch{console.log("Error using user token, falling back to default token"),n=await d(t.getString("backend.baseUrl"),a.access_token,e)}n.items&&n.items.length>0&&(g=`?product_id=${n.items[0].id}`)}if(c){let e;try{e=await d(t.getString("backend.baseUrl"),s,c.entity.metadata.name),e.items.length>0&&(g=`?product_id=${e.items[0].id}`)}catch{console.log("Error using user token, falling back to default token"),e=await d(t.getString("backend.baseUrl"),a.access_token,c.entity.metadata.name)}}if(""===g)return"No product based on entity";try{l=fetch(`${t.getString("backend.baseUrl")}/api/proxy/web-rca/incidents${g}`,{headers:{Authorization:`Bearer ${s}`}}).then((e=>e.json())).catch((e=>e))}catch{console.log("Error using user token, falling back to default token"),l=fetch(`${t.getString("backend.baseUrl")}/api/proxy/web-rca/incidents${g}`,{headers:{Authorization:`Bearer ${a.access_token}`}}).then((e=>e.json())).catch((e=>e))}return l}),[]);return u?(0,r.jsx)(i.ke,{}):h?(0,r.jsx)(i._1,{error:h}):g?"string"==typeof g?(0,r.jsx)(l,{message:g,web_rca_url:t.getString("ocm.webRcaUIUrl")}):(0,r.jsx)(l,{incidents:g,web_rca_url:t.getString("ocm.webRcaUIUrl")}):(0,r.jsx)(i._1,{error:{name:"Foo",message:"Foo"}})}},66477:(e,t,n)=>{"use strict";n.r(t),n.d(t,{WebRCAFetchComponent:()=>c.S,WebRcaPage:()=>a,webRcaPlugin:()=>o});var r=n(22097);const i=(0,r.createRouteRef)({id:"web-rca"}),o=(0,r.createPlugin)({id:"web-rca",routes:{root:i}}),a=o.provide((0,r.createRoutableExtension)({name:"WebRcaPage",component:()=>n.e(9623).then(n.bind(n,99623)).then((e=>e.WebRCAComponent)),mountPoint:i}));var c=n(15092)},42634:()=>{}}]);
//# sourceMappingURL=exposed-PluginRoot.1692267e.chunk.js.map