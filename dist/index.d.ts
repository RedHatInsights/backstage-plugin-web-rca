/// <reference types="react" />
import * as React from 'react';
import React__default from 'react';
import * as _backstage_core_plugin_api from '@backstage/core-plugin-api';

declare const webRcaPlugin: _backstage_core_plugin_api.BackstagePlugin<{
    root: _backstage_core_plugin_api.RouteRef<undefined>;
}, {}, {}>;
declare const WebRcaPage: () => React.JSX.Element;

interface FetchProps {
    product?: string;
}
declare const WebRCAFetchComponent: ({ product }: FetchProps) => React__default.JSX.Element;

export { WebRCAFetchComponent, WebRcaPage, webRcaPlugin };
