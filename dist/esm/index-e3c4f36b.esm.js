import React from 'react';
import { Grid, TextField } from '@material-ui/core';
import { Page, Header, HeaderLabel, Content, ContentHeader, SupportButton } from '@backstage/core-components';
import { WebRCAFetchComponent } from '../index.esm.js';
import '@backstage/core-plugin-api';
import 'react-use/lib/useAsync';
import '@backstage/plugin-user-settings';
import '@backstage/plugin-catalog-react';

const WebRCAComponent = () => (
  // const [product, setProduct] = useState('');
  //
  // const handleProductChange = (event) => {
  //   setProduct(event.target.value);
  // }
  /* @__PURE__ */ React.createElement(Page, { themeId: "tool" }, /* @__PURE__ */ React.createElement(Header, { title: "Welcome to web-rca!", subtitle: "This is a work in progress" }, /* @__PURE__ */ React.createElement(HeaderLabel, { label: "Owner", value: "Service Delivery Ops Dev" }), /* @__PURE__ */ React.createElement(HeaderLabel, { label: "Lifecycle", value: "Alpha" })), /* @__PURE__ */ React.createElement(Content, null, /* @__PURE__ */ React.createElement(ContentHeader, { title: "Incidents" }, /* @__PURE__ */ React.createElement(SupportButton, null, "A description of your plugin goes here.")), /* @__PURE__ */ React.createElement(Grid, { container: true, spacing: 3, direction: "column" }, /* @__PURE__ */ React.createElement(Grid, { item: true }, /* @__PURE__ */ React.createElement("form", null, /* @__PURE__ */ React.createElement(TextField, { id: "product", label: "Product", variant: "filled" }))), /* @__PURE__ */ React.createElement(Grid, { item: true }, /* @__PURE__ */ React.createElement(WebRCAFetchComponent, { product: "quay" })))))
);

export { WebRCAComponent };
//# sourceMappingURL=index-e3c4f36b.esm.js.map
