import { createPlugin, createRoutableExtension } from '@backstage/core-plugin-api';
import { rootRouteRef } from './routes.esm.js';

const webRcaPlugin = createPlugin({
  id: "web-rca",
  routes: {
    root: rootRouteRef
  }
});
const WebRcaPage = webRcaPlugin.provide(
  createRoutableExtension({
    name: "WebRcaPage",
    component: () => import('./components/WebRCAComponent/index.esm.js').then((m) => m.WebRCAComponent),
    // import('./components/WebRCAFetchComponent').then(m => m.WebRCAFetchComponent),
    mountPoint: rootRouteRef
  })
);

export { WebRcaPage, webRcaPlugin };
//# sourceMappingURL=plugin.esm.js.map
