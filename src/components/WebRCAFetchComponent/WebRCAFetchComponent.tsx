import React from 'react';
import {
  Table,
  TableColumn,
  Progress,
  ResponseErrorPanel,
} from '@backstage/core-components';
import useAsync from 'react-use/lib/useAsync';
import { useApi, configApiRef, identityApiRef, OpenIdConnectApi, OAuthApi, ProfileInfoApi, BackstageIdentityApi, SessionApi, createApiRef } from '@backstage/core-plugin-api';
import '@backstage/plugin-user-settings';
import { Typography } from '@material-ui/core';
import { InfoCard } from '@backstage/core-components';
import { useEntity } from '@backstage/plugin-catalog-react';

interface DenseTableProps {
  incidents?: IncidentList;
  web_rca_url?: string;
  message?: string;
}

interface Incident {
  id?: string;
  kind?: string;
  href?: string;
  incident_id?: string;
  summary?: string;
  description?: string;
}
// jq '{kind, page, size, total, items: [.items[] | {id, kind, href, incident_id, summary, description}]}'
interface IncidentList {
  kind: 'IncidentList';
  page?: number;
  size?: number;
  total?: number;
  items?: Incident[];
  errorMsg?: string;
}

interface product {
  id: string;
  kind: string;
  href: string;
  name: string;
  fullname: string;
}

interface productList {
  items: product[];
}

interface FetchProps {
  product?: string;
}

export const DenseTable = ({
  incidents,
  web_rca_url,
  message,
}: DenseTableProps) => {
  if (message) {
    return (
      <InfoCard title="Web RCA Incidents">
        <Typography variant="body1">{"Error fetching incidents: " + message }</Typography>
      </InfoCard>
    );
  }

  if (!incidents || !incidents.items || incidents.items.length === 0) {
    return (
      <InfoCard title="Web RCA Incidents">
        <Typography variant="body1">"Error fetching incidents: No Incidents"</Typography>
      </InfoCard>
    );
  }

  if (!incidents || !incidents.items || incidents.items.length === 0) {
    return (
      <InfoCard title="Web RCA Incidents">
        <Typography variant="body1">{"Error fetching incidents: " + message }</Typography>
      </InfoCard>
    );
  }


  const columns: TableColumn[] = [
    { title: 'ID', field: 'incident_id' },
    { title: 'Summary', field: 'summary' },
    { title: 'Description', field: 'description' },
  ];

  const data = incidents.items.map(inc => {
    return {
      incident_id: (
        <a
          target="_blank"
          rel="noreferrer"
          href={`${web_rca_url}/incident/${inc.incident_id}/details`}
        >
          {inc.incident_id}
        </a>
      ),
      summary: inc.summary,
      description: inc.description,
    };
  });

  return (
    <Table
      title="Web RCA Incidents"
      options={{ search: true, paging: true, pageSize: 10 }}
      columns={columns}
      data={data}
    />
  );
};

async function refresh(url: string, client_id: string, client_secret: string) {
  // @REF [URL Encoded form body](https://stackoverflow.com/questions/35325370/how-do-i-post-a-x-www-form-urlencoded-request-using-fetch/37562814#37562814)
  const details: { [index: string]: string } = {
    grant_type: 'client_credentials',
    client_id: client_id,
    client_secret: client_secret,
    scope: 'openid api.ocm',
  };

  const formBody = [];
  for (const property in details) {
    if (Object.prototype.hasOwnProperty.call(details, property)) {
      const encodedKey: string = encodeURIComponent(property);
      const encodedValue: string = encodeURIComponent(details[property]);
      formBody.push(`${encodedKey}=${encodedValue}`);
    }
  }
  const formBodyString = formBody.join('&');

  return await fetch(
    `${url}/api/proxy/sso-redhat/auth/realms/redhat-external/protocol/openid-connect/token`,
    {
      method: 'POST',
      body: formBodyString,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    },
  )
    .catch(error => error)
    .then(resp => resp.json());
}

async function lookupProduct(
  url: string,
  access_token: string,
  product_name: string,
): Promise<productList> {
  return (await fetch(
    `${url}/api/proxy/status-board/products?search=fullname+ilike+'${product_name}'`,
    {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    },
  )
    .catch(error => error)
    .then(resp => resp.json())) as productList;
}

export const WebRCAFetchComponent = ({ product }: FetchProps) => {
  const config = useApi(configApiRef);
  const user = useApi(identityApiRef);
  const entity = useEntity();
  type CustomAuthApiRefType = OAuthApi & OpenIdConnectApi & ProfileInfoApi & BackstageIdentityApi & SessionApi;
  let f: CustomAuthApiRefType;

  try {
    // @REF [Janus oidc config](https://github.com/janus-idp/backstage-showcase/blob/e1e62157e9b467eed0c6ab446a9df597b46e3333/packages/app/src/api/AuthApiRefs.ts#L2)
     f = useApi(createApiRef({
      id: 'internal.auth.oidc',
    }));
  } catch {
    console.warn("Could not get 'internal.auth.oidc' api ref");
  }
  // const f = useApi(createApiRef<OpenIdConnectApi>({id: 'oidc'}));
  // f.getIdToken({optional: false, instantPopup: false});

  const { value, loading, error } = useAsync(async (): Promise<
    IncidentList | string
  > => {
      // TODO: Should we limit to owner/mine?
      //
      const profile_info = await user.getProfileInfo().then((pi) => {
        return pi;
      })
      console.log("Profile Info: ", profile_info);
      const backstage_identity = await user.getBackstageIdentity().then((bi) => {
        return bi;
      })
      console.log("Backstage Identity: ", backstage_identity);
      const refresh_token = await user.getCredentials().then((creds) => {
        console.log(creds);
        console.log(creds.token);
        return creds.token;
      });
      if (refresh_token === undefined) {
        return 'Invalid token';
      }
      console.log("Refresh Token: ", refresh_token);
      let token = refresh_token;

      if (f) {
        let oidcToken = await f.getIdToken({optional: true, instantPopup: false});
        console.log("OIDC Token: ", oidcToken);

        if (oidcToken) {
          token = oidcToken;
        }
      } else {
        console.log("No OIDC Token");
      }

      let default_token;
      try {
        default_token = await refresh(
          config.getString('backend.baseUrl'),
          config.getString('ocm.clientId'),
          config.getString('ocm.clientSecret'),
        );
      } catch (e) {
        console.log("Error: ", e);
        return 'Invalid token';
      }
      if (default_token.error) {
        return default_token.error_description;
      }

      let products = '';
      if (product) {
        let p;
        try {
          p = await lookupProduct(
            config.getString('backend.baseUrl'),
            // token.access_token,
            token,
            product,
          );
        } catch {
          console.log("Error using user token, falling back to default token");
          p = await lookupProduct(
            config.getString('backend.baseUrl'),
            default_token.access_token,
            product,
          );
        }
        if (p.items && p.items.length > 0) {
          products = `?product_id=${p.items[0].id}`;
        }
      }
      if (entity) {
        let p;
        try {
          p = await lookupProduct(
            config.getString('backend.baseUrl'),
            // token.access_token,
            token,
            entity.entity.metadata.name,
          );
          if (p.items.length > 0) {
            products = `?product_id=${p.items[0].id}`;
          }
        } catch {
          console.log("Error using user token, falling back to default token");
          token = default_token.access_token;
          p = await lookupProduct(
            config.getString('backend.baseUrl'),
            token,
            entity.entity.metadata.name,
          );
          if (p.items && p.items.length > 0) {
            products = `?product_id=${p.items[0].id}`;
          }
          }
      }

      if (products === '') {
        return 'No product based on entity';
      }

      let incidentList;
      // TODO: Filter by status?  Add a toggle?
      incidentList = await fetch(
        `${config.getString('backend.baseUrl')}/api/proxy/web-rca/incidents${products}`,
        {
          headers: {
            // Authorization: `Bearer ${token.access_token}`,
            Authorization: `Bearer ${token}`,
          },
        },
      )
        .then(resp => resp.json())
        .catch(e => e);

      return incidentList as Promise<IncidentList>;
    }, []);

  if (loading) {
    return <Progress />;
  }
  if (error) {
    return <ResponseErrorPanel error={error} />;
  }
  if (!value) {
    return (
      <ResponseErrorPanel
        error={{
          name: 'Foo',
          message: 'Foo',
        }}
      />
    );
  }

  if (typeof value === 'string') {
    return (
      <DenseTable
        message={value}
        web_rca_url={config.getString('ocm.webRcaUIUrl')}
      />
    );
  }

  return (
    <DenseTable
      incidents={value}
      web_rca_url={config.getString('ocm.webRcaUIUrl')}
    />
  );
};
