"use strict";(self.webpackChunkplugin_web_rca=self.webpackChunkplugin_web_rca||[]).push([[9549],{99549:(e,t,n)=>{n.r(t),n.d(t,{AnalyticsContext:()=>_,FeatureFlagState:()=>$,SessionState:()=>d,alertApiRef:()=>A,analyticsApiRef:()=>x,appThemeApiRef:()=>C,atlassianAuthApiRef:()=>E,attachComponentData:()=>q,bitbucketAuthApiRef:()=>b,bitbucketServerAuthApiRef:()=>w,configApiRef:()=>N,createApiFactory:()=>M,createApiRef:()=>p,createComponentExtension:()=>me,createExternalRouteRef:()=>ce,createPlugin:()=>Ee,createReactExtension:()=>ge,createRoutableExtension:()=>he,createRouteRef:()=>Z,createSubRouteRef:()=>oe,discoveryApiRef:()=>S,errorApiRef:()=>k,featureFlagsApiRef:()=>P,fetchApiRef:()=>F,getComponentData:()=>X,githubAuthApiRef:()=>h,gitlabAuthApiRef:()=>g,googleAuthApiRef:()=>f,identityApiRef:()=>O,microsoftAuthApiRef:()=>v,oauthRequestApiRef:()=>G,oktaAuthApiRef:()=>m,oneloginAuthApiRef:()=>R,storageApiRef:()=>I,useAnalytics:()=>H,useApi:()=>c,useApiHolder:()=>s,useApp:()=>W,useElementFilter:()=>be,useRouteRef:()=>ue,useRouteRefParams:()=>le,vmwareCloudAuthApiRef:()=>y,withApis:()=>u});var r=n(15427),o=n(28437),i=n.n(o),a=n(11e3);function s(){const e=(0,r.useVersionedContext)("api-context");if(!e)throw new a.EH("API context is not available");const t=e.atVersion(1);if(!t)throw new a.EH("ApiContext v1 not available");return t}function c(e){const t=s().get(e);if(!t)throw new a.EH(`No implementation available for ${e}`);return t}function u(e){return function(t){const n=n=>{const r=s(),o={};for(const t in e)if(e.hasOwnProperty(t)){const n=e[t],i=r.get(n);if(!i)throw new a.EH(`No implementation available for ${n}`);o[t]=i}return i().createElement(t,{...n,...o})},r=t.displayName||t.name||"Component";return n.displayName=`withApis(${r})`,n}}class l{constructor(e){if(this.config=e,!e.id.split(".").flatMap((e=>e.split("-"))).every((e=>e.match(/^[a-z][a-z0-9]*$/))))throw new Error(`API id must only contain period separated lowercase alphanum tokens with dashes, got '${e.id}'`)}get id(){return this.config.id}get T(){throw new Error(`tried to read ApiRef.T of ${this}`)}toString(){return`apiRef{${this.config.id}}`}}function p(e){return new l(e)}var d=(e=>(e.SignedIn="SignedIn",e.SignedOut="SignedOut",e))(d||{});const f=p({id:"core.auth.google"}),h=p({id:"core.auth.github"}),m=p({id:"core.auth.okta"}),g=p({id:"core.auth.gitlab"}),v=p({id:"core.auth.microsoft"}),R=p({id:"core.auth.onelogin"}),b=p({id:"core.auth.bitbucket"}),w=p({id:"core.auth.bitbucket-server"}),E=p({id:"core.auth.atlassian"}),y=p({id:"core.auth.vmware-cloud"}),A=p({id:"core.alert"}),x=p({id:"core.analytics"}),C=p({id:"core.apptheme"}),N=p({id:"core.config"}),S=p({id:"core.discovery"}),k=p({id:"core.error"});var $=(e=>(e[e.None=0]="None",e[e.Active=1]="Active",e))($||{});const P=p({id:"core.featureflags"}),F=p({id:"core.fetch"}),O=p({id:"core.identity"}),G=p({id:"core.oauthrequest"}),I=p({id:"core.storage"});var V=n(49634);const D=(0,r.createVersionedContext)("analytics-context"),j=()=>{const e=(0,o.useContext)(D);if(void 0===e)return{routeRef:"unknown",pluginId:"root",extension:"App"};const t=e.atVersion(1);if(void 0===t)throw new Error("No context found for version 1.");return t},_=e=>{const{attributes:t,children:n}=e,o={...j(),...t},a=(0,r.createVersionedValueMap)({1:o});return i().createElement(D.Provider,{value:a},n)};function M(e,t){return"id"in e?{api:e,deps:{},factory:()=>t}:e}const z=(0,r.getOrCreateGlobalSingleton)("core-plugin-api:analytics-tracker-events",(()=>({mostRecentGatheredNavigation:void 0,mostRecentRoutableExtensionRender:void 0,beforeUnloadRegistered:!1}))),T="_ROUTABLE-EXTENSION-RENDERED";class B{constructor(e,t={routeRef:"unknown",pluginId:"root",extension:"App"}){this.analyticsApi=e,this.context=t,z.beforeUnloadRegistered||(addEventListener("beforeunload",(()=>{z.mostRecentGatheredNavigation&&(this.analyticsApi.captureEvent({...z.mostRecentGatheredNavigation,...z.mostRecentRoutableExtensionRender}),z.mostRecentGatheredNavigation=void 0,z.mostRecentRoutableExtensionRender=void 0)}),{once:!0,passive:!0}),z.beforeUnloadRegistered=!0)}setContext(e){this.context=e}captureEvent(e,t,{value:n,attributes:r}={}){const{_routeNodeType:o,...i}=this.context;if(e!==T){if(z.mostRecentGatheredNavigation){try{this.analyticsApi.captureEvent({...z.mostRecentGatheredNavigation,...z.mostRecentRoutableExtensionRender})}catch(e){console.warn("Error during analytics event capture. %o",e)}z.mostRecentGatheredNavigation=void 0,z.mostRecentRoutableExtensionRender=void 0}if("navigate"!==e||"gathered"!==o||"root"!==i.pluginId)try{this.analyticsApi.captureEvent({action:e,subject:t,value:n,attributes:r,context:i})}catch(e){console.warn("Error during analytics event capture. %o",e)}else z.mostRecentGatheredNavigation={action:e,subject:t,value:n,attributes:r,context:i}}else z.mostRecentGatheredNavigation&&(z.mostRecentRoutableExtensionRender={context:{...i,extension:"App"}})}}function H(){const e=(0,o.useRef)(null),t=j(),n=function(){try{return c(x)}catch{return{captureEvent:()=>{}}}}(),r=(null===e.current&&(e.current=new B(n)),e.current);return r.setContext(t),r}const W=()=>{const e=(0,r.useVersionedContext)("app-context");if(!e)throw new Error("App context is not available");const t=e.atVersion(1);if(!t)throw new Error("AppContext v1 not available");return t},L=(0,r.getOrCreateGlobalSingleton)("component-data-store",(()=>new WeakMap)),U="__backstage_data";function q(e,t,n){var r;const o=e;let i=null!=(r=o[U])?r:L.get(e);if(i||(i={map:new Map},Object.defineProperty(o,U,{enumerable:!1,configurable:!0,writable:!1,value:i}),L.set(e,i)),i.map.has(t)){const n=e.displayName||e.name;throw new Error(`Attempted to attach duplicate data "${t}" to component "${n}"`)}i.map.set(t,n)}function X(e,t){var n;if(!e)return;const r=e.type;if(!r)return;const o=null!=(n=r[U])?n:L.get(r);return o?o.map.get(t):void 0}const J=(0,r.getOrCreateGlobalSingleton)("route-ref-type",(()=>Symbol("route-ref-type")));var K,Q=Object.defineProperty;class Y{constructor(e,t){var n;this.id=e,this.params=t,((e,t,n)=>{t in e?Q(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n})(this,"symbol"!=typeof(n=K)?n+"":n,"absolute")}get title(){return this.id}toString(){return`routeRef{type=absolute,id=${this.id}}`}}function Z(e){var t;return new Y(e.id,null!=(t=e.params)?t:[])}K=J;var ee,te=Object.defineProperty;const ne=/^\w+$/;class re{constructor(e,t,n,r){var o;this.id=e,this.path=t,this.parent=n,this.params=r,((e,t,n)=>{t in e?te(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n})(this,"symbol"!=typeof(o=ee)?o+"":o,"sub")}toString(){return`routeRef{type=sub,id=${this.id}}`}}function oe(e){const{id:t,path:n,parent:r}=e,o=n.split("/").filter((e=>e.startsWith(":"))).map((e=>e.substring(1))),i=[...r.params,...o];if(r.params.some((e=>o.includes(e))))throw new Error("SubRouteRef may not have params that overlap with its parent");if(!n.startsWith("/"))throw new Error(`SubRouteRef path must start with '/', got '${n}'`);if(n.endsWith("/"))throw new Error(`SubRouteRef path must not end with '/', got '${n}'`);for(const e of o)if(!ne.test(e))throw new Error(`SubRouteRef path has invalid param, got '${e}'`);return new re(t,n,r,i)}ee=J;var ie,ae=Object.defineProperty;class se{constructor(e,t,n){var r;this.id=e,this.params=t,this.optional=n,((e,t,n)=>{t in e?ae(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n})(this,"symbol"!=typeof(r=ie)?r+"":r,"external")}toString(){return`routeRef{type=external,id=${this.id}}`}}function ce(e){var t;return new se(e.id,null!=(t=e.params)?t:[],Boolean(e.optional))}function ue(e){const{pathname:t}=(0,V.useLocation)(),n=(0,r.useVersionedContext)("routing-context");if(!n)throw new Error("Routing context is not available");const i=n.atVersion(1),a=(0,o.useMemo)((()=>i&&i.resolve(e,{pathname:t})),[i,e,t]);if(!n)throw new Error("useRouteRef used outside of routing context");if(!i)throw new Error("RoutingContext v1 not available");const s="optional"in e&&e.optional;if(!a&&!s)throw new Error(`No path for ${e}`);return a}function le(e){return(0,V.useParams)()}ie=J;var pe=Object.defineProperty,de=(e,t,n)=>(((e,t,n)=>{t in e?pe(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n})(e,"symbol"!=typeof t?t+"":t,n),n);class fe extends i().Component{constructor(){super(...arguments),de(this,"state",{error:void 0}),de(this,"handleErrorReset",(()=>{this.setState({error:void 0})}))}static getDerivedStateFromError(e){return{error:e}}render(){const{error:e}=this.state,{app:t,plugin:n}=this.props,{ErrorBoundaryFallback:r}=t.getComponents();return e?i().createElement(r,{error:e,resetError:this.handleErrorReset,plugin:n}):this.props.children}}function he(e){const{component:t,mountPoint:n,name:r}=e;return ge({component:{lazy:()=>t().then((e=>{const t=t=>{const r=H();try{ue(n)}catch(e){if("object"==typeof e&&null!==e){const{message:t}=e;if("string"==typeof t&&t.startsWith("No path for "))throw new Error(`Routable extension component with mount point ${n} was not discovered in the app element tree. Routable extension components may not be rendered by other components and must be directly available as an element within the App provider component.`)}throw e}return(0,o.useEffect)((()=>{r.captureEvent(T,"")}),[r]),i().createElement(e,{...t})},a=r||e.displayName||e.name||"LazyComponent";return t.displayName=`RoutableExtension(${a})`,t}),(e=>t=>{const n=W(),{BootErrorPage:r}=n.getComponents();return i().createElement(r,{step:"load-chunk",error:e})}))},data:{"core.mountPoint":n},name:r})}function me(e){const{component:t,name:n}=e;return ge({component:t,name:n})}function ge(e){const{data:t={},name:n}=e;let r;if(n||console.warn("Declaring extensions without name is DEPRECATED. Make sure that all usages of createReactExtension, createComponentExtension and createRoutableExtension provide a name."),"lazy"in e.component){const t=e.component.lazy;r=(0,o.lazy)((()=>t().then((e=>({default:e})))))}else r=e.component.sync;const a=n||r.displayName||r.name||"Component";return{expose(e){const s=a=>{const s=W(),{Progress:c}=s.getComponents(),u=null==t?void 0:t["core.mountPoint"];return i().createElement(o.Suspense,{fallback:i().createElement(c,null)},i().createElement(fe,{app:s,plugin:e},i().createElement(_,{attributes:{pluginId:e.getId(),...n&&{extension:n},...u&&{routeRef:u.id}}},i().createElement(r,{...a}))))};q(s,"core.plugin",e),q(s,"core.extensionName",n);for(const[e,n]of Object.entries(t))q(s,e,n);return s.displayName=`Extension(${a})`,s}}}function ve(e,t,n,r){return o.Children.toArray(e).flatMap((e=>{if(!(0,o.isValidElement)(e))return[];if(e.type===o.Fragment)return ve(e.props.children,t,n,r);if(X(e,"core.featureFlagged")){const o=e.props;return("with"in o?t.isActive(o.with):!t.isActive(o.without))?ve(e.props.children,t,n,r):[]}if(void 0===n||n(e))return[e];if(r)throw new Error(r);return ve(e.props.children,t,n,r)}))}class Re{constructor(e,t){this.node=e,this.featureFlagsApi=t}selectByComponentData(e){const t=ve(this.node,this.featureFlagsApi,(t=>void 0!==X(t,e.key)),e.withStrictError);return new Re(t,this.featureFlagsApi)}findComponentData(e){return ve(this.node,this.featureFlagsApi,(t=>void 0!==X(t,e.key))).map((t=>X(t,e.key))).filter((e=>void 0!==e))}getElements(){return ve(this.node,this.featureFlagsApi)}}function be(e,t,n=[]){const r=c(P),i=new Re(e,r);return(0,o.useMemo)((()=>t(i)),[e,...n])}class we{constructor(e){this.config=e}getId(){return this.config.id}getApis(){var e;return null!=(e=this.config.apis)?e:[]}getFeatureFlags(){var e,t;return null!=(t=null==(e=this.config.featureFlags)?void 0:e.slice())?t:[]}get routes(){var e;return null!=(e=this.config.routes)?e:{}}get externalRoutes(){var e;return null!=(e=this.config.externalRoutes)?e:{}}provide(e){return e.expose(this)}toString(){return`plugin{${this.config.id}}`}}function Ee(e){return new we(e)}}}]);
//# sourceMappingURL=9549.c3d347f4.chunk.js.map