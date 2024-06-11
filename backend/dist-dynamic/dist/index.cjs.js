'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var plugin = require('./cjs/plugin-f76bd100.cjs.js');
require('@backstage/backend-plugin-api');
require('@backstage/backend-common');
require('express');
require('express-promise-router');

const dynamicPluginInstaller = {
  kind: "legacy",
  router: {
    pluginID: "web-rca-backend",
    createPlugin: plugin.createRouter
  }
};

exports.createRouter = plugin.createRouter;
exports["default"] = plugin.web_rca_backendPlugin;
exports.dynamicPluginInstaller = dynamicPluginInstaller;
//# sourceMappingURL=index.cjs.js.map
