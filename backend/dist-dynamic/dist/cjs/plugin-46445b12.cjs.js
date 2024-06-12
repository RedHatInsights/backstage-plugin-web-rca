'use strict';

var backendPluginApi = require('@backstage/backend-plugin-api');
var backendCommon = require('@backstage/backend-common');
var express = require('express');
var Router = require('express-promise-router');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var express__default = /*#__PURE__*/_interopDefaultLegacy(express);
var Router__default = /*#__PURE__*/_interopDefaultLegacy(Router);

async function lookupProduct(url, access_token, product_name) {
  return await fetch(
    `${url}/api/proxy/status-board/products?search=fullname+ilike+'${product_name}'`,
    {
      headers: {
        Authorization: `Bearer ${access_token}`
      }
    }
  ).catch((error) => error).then((resp) => resp.json());
}

async function refresh(url, client_id, client_secret) {
  const details = {
    grant_type: "client_credentials",
    client_id,
    client_secret,
    scope: "openid api.ocm"
  };
  const formBody = [];
  for (const property in details) {
    if (Object.prototype.hasOwnProperty.call(details, property)) {
      const encodedKey = encodeURIComponent(property);
      const encodedValue = encodeURIComponent(details[property]);
      formBody.push(`${encodedKey}=${encodedValue}`);
    }
  }
  const formBodyString = formBody.join("&");
  return await fetch(
    `${url}/api/proxy/sso-redhat/auth/realms/redhat-external/protocol/openid-connect/token`,
    {
      method: "POST",
      body: formBodyString,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      }
    }
  ).catch((error) => error).then((resp) => resp.json());
}

async function listIncidents(url, token, product_id) {
  return fetch(
    `${url}/api/proxy/web-rca/incidents?product_id=${product_id}`,
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  ).catch((e) => e).then((resp) => resp.json());
}

async function createRouter(options) {
  const { logger, config } = options;
  const router = Router__default["default"]();
  router.use(express__default["default"].json());
  router.get("/health", (_, response) => {
    logger.info("PONG!");
    response.json({ status: "ok" });
  });
  router.post("/incidents", async (req, response) => {
    logger.info("incidents!");
    logger.info(config.get("ocm"));
    response.setHeader("Content-Type", "application/json");
    logger.info("Body: ", req.body);
    let default_token = await refresh(
      config.getString("backend.baseUrl"),
      config.getString("ocm.clientId"),
      config.getString("ocm.clientSecret")
    ).catch(
      (e) => {
        logger.error("Error: ", e);
        response.status(500);
        response.json({ error: e });
        return "Invalid token";
      }
    ).then((token) => {
      if (token.error) {
        logger.error("Error: ", token.error);
        response.status(400);
        response.json({ error: token.error });
        return "Invalid token";
      } else {
        logger.info("Token: ", token);
        return token.access_token;
      }
    });
    let products = "";
    let product_list = await lookupProduct(config.getString("backend.baseUrl"), default_token, req.body.products);
    if (product_list && product_list.items && product_list.items.length > 0) {
      products = product_list.items[0].id;
    }
    if (products === "") {
      const msg = "No product based on entity";
      response.status(400);
      response.json({ error: msg });
      return;
    }
    let incident_list = await listIncidents(config.getString("backend.baseUrl"), default_token, products);
    response.status(200);
    if (incident_list.errorMsg) {
      logger.error("Unsuccessful parse: " + incident_list.errorMsg);
      response.status(400);
    }
    response.json(incident_list);
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
//# sourceMappingURL=plugin-46445b12.cjs.js.map
