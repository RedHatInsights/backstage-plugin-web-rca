'use strict';

var backendCommon = require('@backstage/backend-common');
var express = require('express');
var Router = require('express-promise-router');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var express__default = /*#__PURE__*/_interopDefaultLegacy(express);
var Router__default = /*#__PURE__*/_interopDefaultLegacy(Router);

async function createRouter(options) {
  const { logger } = options;
  const router = Router__default["default"]();
  router.use(express__default["default"].json());
  router.get("/health", (_, response) => {
    logger.info("PONG!");
    response.json({ status: "ok" });
  });
  router.post("/incidents", (req, response) => {
    logger.info("incidents!");
    logger.info(req);
    response.status(200);
    response.json({ status: "not-implemented" });
  });
  router.use(backendCommon.errorHandler());
  return router;
}

exports.createRouter = createRouter;
//# sourceMappingURL=router-6fbbd658.cjs.js.map
