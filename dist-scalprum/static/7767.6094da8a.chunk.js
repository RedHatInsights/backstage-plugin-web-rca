/*! For license information please see 7767.6094da8a.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkplugin_web_rca=self.webpackChunkplugin_web_rca||[]).push([[7767],{47767:(e,t,r)=>{r.r(t),r.d(t,{AbortedDeferredError:()=>a.tH,Await:()=>oe,MemoryRouter:()=>$,Navigate:()=>ee,NavigationType:()=>a.rc,Outlet:()=>te,Route:()=>re,Router:()=>ne,RouterProvider:()=>Q,Routes:()=>ae,UNSAFE_DataRouterContext:()=>i,UNSAFE_DataRouterStateContext:()=>l,UNSAFE_LocationContext:()=>c,UNSAFE_NavigationContext:()=>s,UNSAFE_RouteContext:()=>d,UNSAFE_mapRouteProperties:()=>pe,UNSAFE_useRouteId:()=>M,UNSAFE_useRoutesImpl:()=>P,createMemoryRouter:()=>he,createPath:()=>a.AO,createRoutesFromChildren:()=>ce,createRoutesFromElements:()=>ce,defer:()=>a.v6,generatePath:()=>a.tW,isRouteErrorResponse:()=>a.pX,json:()=>a.Pq,matchPath:()=>a.B6,matchRoutes:()=>a.ue,parsePath:()=>a.Rr,redirect:()=>a.V2,redirectDocument:()=>a.Sk,renderMatches:()=>de,resolvePath:()=>a.o1,useActionData:()=>z,useAsyncError:()=>W,useAsyncValue:()=>V,useBlocker:()=>q,useHref:()=>h,useInRouterContext:()=>v,useLoaderData:()=>T,useLocation:()=>m,useMatch:()=>g,useMatches:()=>w,useNavigate:()=>y,useNavigation:()=>H,useNavigationType:()=>f,useOutlet:()=>x,useOutletContext:()=>b,useParams:()=>R,useResolvedPath:()=>S,useRevalidator:()=>I,useRouteError:()=>G,useRouteLoaderData:()=>J,useRoutes:()=>O});var n=r(28437),a=r(45588);function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o.apply(this,arguments)}const i=n.createContext(null),l=n.createContext(null),u=n.createContext(null),s=n.createContext(null),c=n.createContext(null),d=n.createContext({outlet:null,matches:[],isDataRoute:!1}),p=n.createContext(null);function h(e,t){let{relative:r}=void 0===t?{}:t;v()||(0,a.Oi)(!1);let{basename:o,navigator:i}=n.useContext(s),{hash:l,pathname:u,search:c}=S(e,{relative:r}),d=u;return"/"!==o&&(d="/"===u?o:(0,a.HS)([o,u])),i.createHref({pathname:d,search:c,hash:l})}function v(){return null!=n.useContext(c)}function m(){return v()||(0,a.Oi)(!1),n.useContext(c).location}function f(){return n.useContext(c).navigationType}function g(e){v()||(0,a.Oi)(!1);let{pathname:t}=m();return n.useMemo((()=>(0,a.B6)(e,t)),[t,e])}function E(e){n.useContext(s).static||n.useLayoutEffect(e)}function y(){let{isDataRoute:e}=n.useContext(d);return e?function(){let{router:e}=F(B.UseNavigateStable),t=j(L.UseNavigateStable),r=n.useRef(!1);return E((()=>{r.current=!0})),n.useCallback((function(n,a){void 0===a&&(a={}),r.current&&("number"==typeof n?e.navigate(n):e.navigate(n,o({fromRouteId:t},a)))}),[e,t])}():function(){v()||(0,a.Oi)(!1);let e=n.useContext(i),{basename:t,future:r,navigator:o}=n.useContext(s),{matches:l}=n.useContext(d),{pathname:u}=m(),c=JSON.stringify((0,a.yD)(l,r.v7_relativeSplatPath)),p=n.useRef(!1);return E((()=>{p.current=!0})),n.useCallback((function(r,n){if(void 0===n&&(n={}),!p.current)return;if("number"==typeof r)return void o.go(r);let i=(0,a.Gh)(r,JSON.parse(c),u,"path"===n.relative);null==e&&"/"!==t&&(i.pathname="/"===i.pathname?t:(0,a.HS)([t,i.pathname])),(n.replace?o.replace:o.push)(i,n.state,n)}),[t,o,c,u,e])}()}const C=n.createContext(null);function b(){return n.useContext(C)}function x(e){let t=n.useContext(d).outlet;return t?n.createElement(C.Provider,{value:e},t):t}function R(){let{matches:e}=n.useContext(d),t=e[e.length-1];return t?t.params:{}}function S(e,t){let{relative:r}=void 0===t?{}:t,{future:o}=n.useContext(s),{matches:i}=n.useContext(d),{pathname:l}=m(),u=JSON.stringify((0,a.yD)(i,o.v7_relativeSplatPath));return n.useMemo((()=>(0,a.Gh)(e,JSON.parse(u),l,"path"===r)),[e,u,l,r])}function O(e,t){return P(e,t)}function P(e,t,r,i){v()||(0,a.Oi)(!1);let{navigator:l}=n.useContext(s),{matches:u}=n.useContext(d),p=u[u.length-1],h=p?p.params:{},f=(p&&p.pathname,p?p.pathnameBase:"/");p&&p.route;let g,E=m();if(t){var y;let e="string"==typeof t?(0,a.Rr)(t):t;"/"===f||(null==(y=e.pathname)?void 0:y.startsWith(f))||(0,a.Oi)(!1),g=e}else g=E;let C=g.pathname||"/",b=C;if("/"!==f){let e=f.replace(/^\//,"").split("/");b="/"+C.replace(/^\//,"").split("/").slice(e.length).join("/")}let x=(0,a.ue)(e,{pathname:b}),R=N(x&&x.map((e=>Object.assign({},e,{params:Object.assign({},h,e.params),pathname:(0,a.HS)([f,l.encodeLocation?l.encodeLocation(e.pathname).pathname:e.pathname]),pathnameBase:"/"===e.pathnameBase?f:(0,a.HS)([f,l.encodeLocation?l.encodeLocation(e.pathnameBase).pathname:e.pathnameBase])}))),u,r,i);return t&&R?n.createElement(c.Provider,{value:{location:o({pathname:"/",search:"",hash:"",state:null,key:"default"},g),navigationType:a.rc.Pop}},R):R}function k(){let e=G(),t=(0,a.pX)(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),r=e instanceof Error?e.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return n.createElement(n.Fragment,null,n.createElement("h2",null,"Unexpected Application Error!"),n.createElement("h3",{style:{fontStyle:"italic"}},t),r?n.createElement("pre",{style:o},r):null,null)}const D=n.createElement(k,null);class U extends n.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||"idle"!==t.revalidation&&"idle"===e.revalidation?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:void 0!==e.error?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return void 0!==this.state.error?n.createElement(d.Provider,{value:this.props.routeContext},n.createElement(p.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function _(e){let{routeContext:t,match:r,children:a}=e,o=n.useContext(i);return o&&o.static&&o.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=r.route.id),n.createElement(d.Provider,{value:t},a)}function N(e,t,r,o){var i;if(void 0===t&&(t=[]),void 0===r&&(r=null),void 0===o&&(o=null),null==e){var l;if(null==(l=r)||!l.errors)return null;e=r.matches}let u=e,s=null==(i=r)?void 0:i.errors;if(null!=s){let e=u.findIndex((e=>e.route.id&&(null==s?void 0:s[e.route.id])));e>=0||(0,a.Oi)(!1),u=u.slice(0,Math.min(u.length,e+1))}let c=!1,d=-1;if(r&&o&&o.v7_partialHydration)for(let e=0;e<u.length;e++){let t=u[e];if((t.route.HydrateFallback||t.route.hydrateFallbackElement)&&(d=e),t.route.id){let{loaderData:e,errors:n}=r,a=t.route.loader&&void 0===e[t.route.id]&&(!n||void 0===n[t.route.id]);if(t.route.lazy||a){c=!0,u=d>=0?u.slice(0,d+1):[u[0]];break}}}return u.reduceRight(((e,a,o)=>{let i,l=!1,p=null,h=null;var v;r&&(i=s&&a.route.id?s[a.route.id]:void 0,p=a.route.errorElement||D,c&&(d<0&&0===o?(Y[v="route-fallback"]||(Y[v]=!0),l=!0,h=null):d===o&&(l=!0,h=a.route.hydrateFallbackElement||null)));let m=t.concat(u.slice(0,o+1)),f=()=>{let t;return t=i?p:l?h:a.route.Component?n.createElement(a.route.Component,null):a.route.element?a.route.element:e,n.createElement(_,{match:a,routeContext:{outlet:e,matches:m,isDataRoute:null!=r},children:t})};return r&&(a.route.ErrorBoundary||a.route.errorElement||0===o)?n.createElement(U,{location:r.location,revalidation:r.revalidation,component:p,error:i,children:f(),routeContext:{outlet:null,matches:m,isDataRoute:!0}}):f()}),null)}var B=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(B||{}),L=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(L||{});function F(e){let t=n.useContext(i);return t||(0,a.Oi)(!1),t}function A(e){let t=n.useContext(l);return t||(0,a.Oi)(!1),t}function j(e){let t=function(e){let t=n.useContext(d);return t||(0,a.Oi)(!1),t}(),r=t.matches[t.matches.length-1];return r.route.id||(0,a.Oi)(!1),r.route.id}function M(){return j(L.UseRouteId)}function H(){return A(L.UseNavigation).navigation}function I(){let e=F(B.UseRevalidator),t=A(L.UseRevalidator);return n.useMemo((()=>({revalidate:e.router.revalidate,state:t.revalidation})),[e.router.revalidate,t.revalidation])}function w(){let{matches:e,loaderData:t}=A(L.UseMatches);return n.useMemo((()=>e.map((e=>(0,a.ro)(e,t)))),[e,t])}function T(){let e=A(L.UseLoaderData),t=j(L.UseLoaderData);if(!e.errors||null==e.errors[t])return e.loaderData[t];console.error("You cannot `useLoaderData` in an errorElement (routeId: "+t+")")}function J(e){return A(L.UseRouteLoaderData).loaderData[e]}function z(){let e=A(L.UseActionData),t=j(L.UseLoaderData);return e.actionData?e.actionData[t]:void 0}function G(){var e;let t=n.useContext(p),r=A(L.UseRouteError),a=j(L.UseRouteError);return void 0!==t?t:null==(e=r.errors)?void 0:e[a]}function V(){let e=n.useContext(u);return null==e?void 0:e._data}function W(){let e=n.useContext(u);return null==e?void 0:e._error}let X=0;function q(e){let{router:t,basename:r}=F(B.UseBlocker),i=A(L.UseBlocker),[l,u]=n.useState(""),s=n.useCallback((t=>{if("function"!=typeof e)return!!e;if("/"===r)return e(t);let{currentLocation:n,nextLocation:i,historyAction:l}=t;return e({currentLocation:o({},n,{pathname:(0,a.pb)(n.pathname,r)||n.pathname}),nextLocation:o({},i,{pathname:(0,a.pb)(i.pathname,r)||i.pathname}),historyAction:l})}),[r,e]);return n.useEffect((()=>{let e=String(++X);return u(e),()=>t.deleteBlocker(e)}),[t]),n.useEffect((()=>{""!==l&&t.getBlocker(l,s)}),[t,l,s]),l&&i.blockers.has(l)?i.blockers.get(l):a.G3}const Y={},K=n.startTransition;function Q(e){let{fallbackElement:t,router:r,future:a}=e,[o,u]=n.useState(r.state),{v7_startTransition:s}=a||{},c=n.useCallback((e=>{s&&K?K((()=>u(e))):u(e)}),[u,s]);n.useLayoutEffect((()=>r.subscribe(c)),[r,c]),n.useEffect((()=>{}),[]);let d=n.useMemo((()=>({createHref:r.createHref,encodeLocation:r.encodeLocation,go:e=>r.navigate(e),push:(e,t,n)=>r.navigate(e,{state:t,preventScrollReset:null==n?void 0:n.preventScrollReset}),replace:(e,t,n)=>r.navigate(e,{replace:!0,state:t,preventScrollReset:null==n?void 0:n.preventScrollReset})})),[r]),p=r.basename||"/",h=n.useMemo((()=>({router:r,navigator:d,static:!1,basename:p})),[r,d,p]);return n.createElement(n.Fragment,null,n.createElement(i.Provider,{value:h},n.createElement(l.Provider,{value:o},n.createElement(ne,{basename:p,location:o.location,navigationType:o.historyAction,navigator:d,future:{v7_relativeSplatPath:r.future.v7_relativeSplatPath}},o.initialized||r.future.v7_partialHydration?n.createElement(Z,{routes:r.routes,future:r.future,state:o}):t))),null)}function Z(e){let{routes:t,future:r,state:n}=e;return P(t,void 0,n,r)}function $(e){let{basename:t,children:r,initialEntries:o,initialIndex:i,future:l}=e,u=n.useRef();null==u.current&&(u.current=(0,a.sC)({initialEntries:o,initialIndex:i,v5Compat:!0}));let s=u.current,[c,d]=n.useState({action:s.action,location:s.location}),{v7_startTransition:p}=l||{},h=n.useCallback((e=>{p&&K?K((()=>d(e))):d(e)}),[d,p]);return n.useLayoutEffect((()=>s.listen(h)),[s,h]),n.createElement(ne,{basename:t,children:r,location:c.location,navigationType:c.action,navigator:s,future:l})}function ee(e){let{to:t,replace:r,state:o,relative:i}=e;v()||(0,a.Oi)(!1);let{future:l,static:u}=n.useContext(s),{matches:c}=n.useContext(d),{pathname:p}=m(),h=y(),f=(0,a.Gh)(t,(0,a.yD)(c,l.v7_relativeSplatPath),p,"path"===i),g=JSON.stringify(f);return n.useEffect((()=>h(JSON.parse(g),{replace:r,state:o,relative:i})),[h,g,i,r,o]),null}function te(e){return x(e.context)}function re(e){(0,a.Oi)(!1)}function ne(e){let{basename:t="/",children:r=null,location:i,navigationType:l=a.rc.Pop,navigator:u,static:d=!1,future:p}=e;v()&&(0,a.Oi)(!1);let h=t.replace(/^\/*/,"/"),m=n.useMemo((()=>({basename:h,navigator:u,static:d,future:o({v7_relativeSplatPath:!1},p)})),[h,p,u,d]);"string"==typeof i&&(i=(0,a.Rr)(i));let{pathname:f="/",search:g="",hash:E="",state:y=null,key:C="default"}=i,b=n.useMemo((()=>{let e=(0,a.pb)(f,h);return null==e?null:{location:{pathname:e,search:g,hash:E,state:y,key:C},navigationType:l}}),[h,f,g,E,y,C,l]);return null==b?null:n.createElement(s.Provider,{value:m},n.createElement(c.Provider,{children:r,value:b}))}function ae(e){let{children:t,location:r}=e;return O(ce(t),r)}function oe(e){let{children:t,errorElement:r,resolve:a}=e;return n.createElement(ue,{resolve:a,errorElement:r},n.createElement(se,null,t))}var ie=function(e){return e[e.pending=0]="pending",e[e.success=1]="success",e[e.error=2]="error",e}(ie||{});const le=new Promise((()=>{}));class ue extends n.Component{constructor(e){super(e),this.state={error:null}}static getDerivedStateFromError(e){return{error:e}}componentDidCatch(e,t){console.error("<Await> caught the following error during render",e,t)}render(){let{children:e,errorElement:t,resolve:r}=this.props,o=null,i=ie.pending;if(r instanceof Promise)if(this.state.error){i=ie.error;let e=this.state.error;o=Promise.reject().catch((()=>{})),Object.defineProperty(o,"_tracked",{get:()=>!0}),Object.defineProperty(o,"_error",{get:()=>e})}else r._tracked?(o=r,i=void 0!==o._error?ie.error:void 0!==o._data?ie.success:ie.pending):(i=ie.pending,Object.defineProperty(r,"_tracked",{get:()=>!0}),o=r.then((e=>Object.defineProperty(r,"_data",{get:()=>e})),(e=>Object.defineProperty(r,"_error",{get:()=>e}))));else i=ie.success,o=Promise.resolve(),Object.defineProperty(o,"_tracked",{get:()=>!0}),Object.defineProperty(o,"_data",{get:()=>r});if(i===ie.error&&o._error instanceof a.tH)throw le;if(i===ie.error&&!t)throw o._error;if(i===ie.error)return n.createElement(u.Provider,{value:o,children:t});if(i===ie.success)return n.createElement(u.Provider,{value:o,children:e});throw o}}function se(e){let{children:t}=e,r=V(),a="function"==typeof t?t(r):t;return n.createElement(n.Fragment,null,a)}function ce(e,t){void 0===t&&(t=[]);let r=[];return n.Children.forEach(e,((e,o)=>{if(!n.isValidElement(e))return;let i=[...t,o];if(e.type===n.Fragment)return void r.push.apply(r,ce(e.props.children,i));e.type!==re&&(0,a.Oi)(!1),e.props.index&&e.props.children&&(0,a.Oi)(!1);let l={id:e.props.id||i.join("-"),caseSensitive:e.props.caseSensitive,element:e.props.element,Component:e.props.Component,index:e.props.index,path:e.props.path,loader:e.props.loader,action:e.props.action,errorElement:e.props.errorElement,ErrorBoundary:e.props.ErrorBoundary,hasErrorBoundary:null!=e.props.ErrorBoundary||null!=e.props.errorElement,shouldRevalidate:e.props.shouldRevalidate,handle:e.props.handle,lazy:e.props.lazy};e.props.children&&(l.children=ce(e.props.children,i)),r.push(l)})),r}function de(e){return N(e)}function pe(e){let t={hasErrorBoundary:null!=e.ErrorBoundary||null!=e.errorElement};return e.Component&&Object.assign(t,{element:n.createElement(e.Component),Component:void 0}),e.HydrateFallback&&Object.assign(t,{hydrateFallbackElement:n.createElement(e.HydrateFallback),HydrateFallback:void 0}),e.ErrorBoundary&&Object.assign(t,{errorElement:n.createElement(e.ErrorBoundary),ErrorBoundary:void 0}),t}function he(e,t){return(0,a.aE)({basename:null==t?void 0:t.basename,future:o({},null==t?void 0:t.future,{v7_prependBasename:!0}),history:(0,a.sC)({initialEntries:null==t?void 0:t.initialEntries,initialIndex:null==t?void 0:t.initialIndex}),hydrationData:null==t?void 0:t.hydrationData,routes:e,mapRouteProperties:pe}).initialize()}}}]);
//# sourceMappingURL=7767.6094da8a.chunk.js.map