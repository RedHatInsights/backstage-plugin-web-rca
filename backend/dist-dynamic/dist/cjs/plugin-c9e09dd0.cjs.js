'use strict';

var backendPluginApi = require('@backstage/backend-plugin-api');
var backendCommon = require('@backstage/backend-common');
var express = require('express');
var Router = require('express-promise-router');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var express__default = /*#__PURE__*/_interopDefaultLegacy(express);
var Router__default = /*#__PURE__*/_interopDefaultLegacy(Router);

async function createRouter(options) {
  const { logger, config } = options;
  const router = Router__default["default"]();
  router.use(express__default["default"].json());
  router.get("/health", (_, response) => {
    logger.info("PONG!");
    response.json({ status: "ok" });
  });
  router.post("/incidents", (req, response) => {
    logger.info("incidents!");
    logger.info(config.get("ocm"));
    response.setHeader("Content-Type", "application/json");
    logger.info("Body: ", req.body);
    response.status(200);
    response.json({ status: "not-implemented" });
  });
  router.use(backendCommon.errorHandler());
  return router;
}

const web_rca_backendPlugin = backendPluginApi.createBackendPlugin({
  pluginId: "plugin-web-rca-backend",
  register(env) {
    env.registerInit({
      deps: {
        logger: backendPluginApi.coreServices.logger,
        config: backendPluginApi.coreServices.rootConfig,
        httpRouter: backendPluginApi.coreServices.httpRouter
      },
      async init({ config, logger, httpRouter }) {
        httpRouter.use(
          await createRouter({
            logger,
            config
          })
        );
        httpRouter.addAuthPolicy({
          path: "/health",
          allow: "unauthenticated"
        });
        httpRouter.addAuthPolicy({
          path: "/incidents",
          allow: "unauthenticated"
        });
      }
    });
  }
});

exports.createRouter = createRouter;
exports.web_rca_backendPlugin = web_rca_backendPlugin;
//# sourceMappingURL=plugin-c9e09dd0.cjs.js.map
