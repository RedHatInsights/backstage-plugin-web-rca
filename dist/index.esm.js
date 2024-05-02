import { createRouteRef, createPlugin, createRoutableExtension, useApi, configApiRef, identityApiRef } from '@backstage/core-plugin-api';
import React from 'react';
import { Progress, ResponseErrorPanel, InfoCard, Table } from '@backstage/core-components';
import useAsync from 'react-use/lib/useAsync';
import '@backstage/plugin-user-settings';
import { Typography } from '@material-ui/core';
import { useEntity } from '@backstage/plugin-catalog-react';

const rootRouteRef = createRouteRef({
  id: "web-rca"
});

const webRcaPlugin = createPlugin({
  id: "web-rca",
  routes: {
    root: rootRouteRef
  }
});
const WebRcaPage = webRcaPlugin.provide(
  createRoutableExtension({
    name: "WebRcaPage",
    component: () => import('./esm/index-fafe2224.esm.js').then((m) => m.WebRCAComponent),
    // import('./components/WebRCAFetchComponent').then(m => m.WebRCAFetchComponent),
    mountPoint: rootRouteRef
  })
);

const DenseTable = ({
  incidents,
  web_rca_url,
  message
}) => {
  if (message) {
    return /* @__PURE__ */ React.createElement(InfoCard, { title: "Error fetching incidents" }, /* @__PURE__ */ React.createElement(Typography, { variant: "body1" }, message));
  }
  if (!incidents || !incidents.items || incidents.items.length === 0) {
    return /* @__PURE__ */ React.createElement(InfoCard, { title: "Error fetching incidents" }, /* @__PURE__ */ React.createElement(Typography, { variant: "body1" }, '"No Incidents"'));
  }
  const columns = [
    { title: "ID", field: "incident_id" },
    { title: "Summary", field: "summary" },
    { title: "Description", field: "description" }
  ];
  const data = incidents.items.map((inc) => {
    return {
      incident_id: /* @__PURE__ */ React.createElement(
        "a",
        {
          target: "_blank",
          rel: "noreferrer",
          href: `${web_rca_url}/incident/${inc.incident_id}/events`
        },
        inc.incident_id
      ),
      summary: inc.summary,
      description: inc.description
    };
  });
  return /* @__PURE__ */ React.createElement(
    Table,
    {
      title: "Incidents",
      options: { search: true, paging: true, pageSize: 10 },
      columns,
      data
    }
  );
};
async function refresh(url, refresh_token) {
  const details = {
    grant_type: "refresh_token",
    client_id: "cloud-services",
    refresh_token: `${refresh_token}`
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
const WebRCAFetchComponent = ({ product }) => {
  const config = useApi(configApiRef);
  const user = useApi(identityApiRef);
  const entity = useEntity();
  const { value, loading, error } = useAsync(async () => {
    const profile_info = await user.getProfileInfo().then((pi) => {
      return pi;
    });
    console.log(profile_info);
    const backstage_identity = await user.getBackstageIdentity().then((bi) => {
      return bi;
    });
    console.log(backstage_identity);
    const refresh_token = await user.getCredentials().then((creds) => {
      console.log(creds);
      console.log(creds.token);
      return creds.token;
    });
    if (refresh_token === void 0) {
      return "Invalid token";
    }
    console.log(refresh_token);
    let token;
    try {
      token = await refresh(
        config.getString("backend.baseUrl"),
        refresh_token
      );
    } catch (e) {
      console.log("Error: ", e);
      return "Invalid token";
    }
    console.log("Token: ", token);
    if (token.error) {
      return token.error_description;
    }
    let products = "";
    if (product) {
      const p = await lookupProduct(
        config.getString("backend.baseUrl"),
        token.access_token,
        product
      );
      if (p.items && p.items.length > 0) {
        products = `?product_id=${p.items[0].id}`;
      }
    }
    if (entity) {
      const p = await lookupProduct(
        config.getString("backend.baseUrl"),
        token.access_token,
        entity.entity.metadata.name
      );
      if (p.items.length > 0) {
        products = `?product_id=${p.items[0].id}`;
      }
    }
    if (products === "") {
      return "No product based on entity";
    }
    const incidentList = fetch(
      `${config.getString("backend.baseUrl")}/api/proxy/web-rca/incidents${products}`,
      {
        headers: {
          Authorization: `Bearer ${token.access_token}`
        }
      }
    ).then((resp) => resp.json()).catch((e) => e);
    return incidentList;
  }, []);
  if (loading) {
    return /* @__PURE__ */ React.createElement(Progress, null);
  }
  if (error) {
    return /* @__PURE__ */ React.createElement(ResponseErrorPanel, { error });
  }
  if (!value) {
    return /* @__PURE__ */ React.createElement(
      ResponseErrorPanel,
      {
        error: {
          name: "Foo",
          message: "Foo"
        }
      }
    );
  }
  if (typeof value === "string") {
    return /* @__PURE__ */ React.createElement(
      DenseTable,
      {
        message: value,
        web_rca_url: config.getString("ocm.web-rca-url")
      }
    );
  }
  return /* @__PURE__ */ React.createElement(
    DenseTable,
    {
      incidents: value,
      web_rca_url: config.getString("ocm.web-rca-url")
    }
  );
};

export { WebRCAFetchComponent, WebRcaPage, webRcaPlugin };
//# sourceMappingURL=index.esm.js.map
