import React from 'react';
import { Progress, ResponseErrorPanel, InfoCard, Table } from '@backstage/core-components';
import useAsync from 'react-use/lib/useAsync';
import { useApi, configApiRef } from '@backstage/core-plugin-api';
import '@backstage/plugin-user-settings';
import { Typography } from '@material-ui/core';
import { useEntity } from '@backstage/plugin-catalog-react';

const DenseTable = ({
  incidents,
  web_rca_url,
  message
}) => {
  if (message) {
    return /* @__PURE__ */ React.createElement(InfoCard, { title: "Web RCA Incidents" }, /* @__PURE__ */ React.createElement(Typography, { variant: "body1" }, "Error fetching incidents: " + message));
  }
  if (!incidents || !incidents.items || incidents.items.length === 0) {
    return /* @__PURE__ */ React.createElement(InfoCard, { title: "Web RCA Incidents" }, /* @__PURE__ */ React.createElement(Typography, { variant: "body1" }, '"Error fetching incidents: No Incidents"'));
  }
  if (!incidents || !incidents.items || incidents.items.length === 0) {
    return /* @__PURE__ */ React.createElement(InfoCard, { title: "Web RCA Incidents" }, /* @__PURE__ */ React.createElement(Typography, { variant: "body1" }, "Error fetching incidents: " + message));
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
          href: `${web_rca_url}/incident/${inc.incident_id}/details`
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
      title: "Web RCA Incidents",
      options: { search: true, paging: true, pageSize: 10 },
      columns,
      data
    }
  );
};
const PRODUCT_LABEL_KEY = "rhdh/web-rca/product-name";
const WebRCAFetchComponent = ({ product }) => {
  const config = useApi(configApiRef);
  const entity = useEntity();
  const { value, loading, error } = useAsync(async () => {
    console.log("SMR");
    let products = "";
    if (product) {
      products = product;
    }
    if (entity) {
      products = entity.entity.metadata.name;
      products = "foo";
      console.log("ENTITY: SMR");
      console.log(entity.entity.metadata.name);
      console.log(entity.entity.spec);
      console.log(entity.entity.metadata.labels);
      if (entity.entity.spec && entity.entity.spec.system && typeof entity.entity.spec.system === "string") {
        products = entity.entity.spec.system;
        products = "bar";
      }
      if (entity.entity.metadata.labels) {
        if (PRODUCT_LABEL_KEY in entity.entity.metadata.labels) {
          products = entity.entity.metadata.labels[PRODUCT_LABEL_KEY];
          products = "baz";
        }
      }
    }
    if (products === "") {
      return "No product based on entity";
    }
    let incidentList = await fetch(
      `${config.getString("backend.baseUrl")}/api/plugin-web-rca-backend/incidents`,
      {
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({ products })
      }
    ).catch((e) => e).then((resp) => resp.json());
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
        web_rca_url: config.getString("ocm.webRcaUIUrl")
      }
    );
  }
  return /* @__PURE__ */ React.createElement(
    DenseTable,
    {
      incidents: value,
      web_rca_url: config.getString("ocm.webRcaUIUrl")
    }
  );
};

export { DenseTable, WebRCAFetchComponent };
//# sourceMappingURL=WebRCAFetchComponent.esm.js.map
