import { getVoidLogger } from '@backstage/backend-common';
import express from 'express';
import request from 'supertest';

import { createRouter } from './router';
import { MockConfigApi } from '@backstage/test-utils';

describe('createRouter', () => {
  let app: express.Express;

  const mockConfig = new MockConfigApi({
    app: { baseUrl: 'https://example.com' },
    backend: { baseUrl: 'http://127.0.0.1' },
    ocm: {
      webRcaUrl: 'https://web-rca.stage.devshift.net',
      clientId: 'foo',
      clientSecret: 'bar',
    }
  })

  const quay_incident_list = {
    "kind": "IncidentList",
    "page": 1,
    "size": 3,
    "total": 3,
    "items": [
      { "id": "8ceac8ec-a327-4134-99f1-5e497a51fb84", "kind": "Incident", "href": "/api/web-rca/v1/incidents/8ceac8ec-a327-4134-99f1-5e497a51fb84", "incident_id": "ITN-2023-21523", "summary": "Incident Working Time Quay Test 3", "description": "Testing the incidents_product_working_time metric with a Quay product.", "products": ["Quay"], "incident_type": "internal", "status": "closed", "severity": "3", "creator": { "id": "d8f2c569-8140-4a40-bdd7-9c1a24f21ebb", "kind": "User", "href": "/api/web-rca/v1/users/d8f2c569-8140-4a40-bdd7-9c1a24f21ebb", "name": "Spencer McAvey", "email": "smcavey@redhat.com", "username": "rh-ee-smcavey", "created_at": "2022-09-07T17:15:18.391531Z", "updated_at": "2022-09-07T17:15:18.391531Z" }, "participants": [{ "id": "d8f2c569-8140-4a40-bdd7-9c1a24f21ebb", "kind": "User", "href": "/api/web-rca/v1/users/d8f2c569-8140-4a40-bdd7-9c1a24f21ebb", "name": "Spencer McAvey", "email": "smcavey@redhat.com", "username": "rh-ee-smcavey", "created_at": "2022-09-07T17:15:18.391531Z", "updated_at": "2022-09-07T17:15:18.391531Z" }], "viewers": [{ "id": "d8f2c569-8140-4a40-bdd7-9c1a24f21ebb", "kind": "User", "href": "/api/web-rca/v1/users/d8f2c569-8140-4a40-bdd7-9c1a24f21ebb", "name": "Spencer McAvey", "email": "smcavey@redhat.com", "username": "rh-ee-smcavey", "created_at": "2022-09-07T17:15:18.391531Z", "updated_at": "2022-09-07T17:15:18.391531Z" }], "created_at": "2023-08-30T11:52:34.728765Z", "updated_at": "2023-09-02T12:23:12.955091Z", "resolved_at": "2023-08-30T12:23:12.910368Z", "last_opened_at": "2023-08-30T11:52:34.728747Z", "reopen_counter": 0, "private": false, "invalid": false, "metadata": { "post_create_errors": { "slack": { "Code": 31, "HttpCode": 500, "Reason": "Incident created, user doesn't have set up team. Can't create channel or post a message." } } }, "working_time": 1838 },
      { "id": "587c93df-3715-4a34-a0f3-be76a1335717", "kind": "Incident", "href": "/api/web-rca/v1/incidents/587c93df-3715-4a34-a0f3-be76a1335717", "incident_id": "ITN-2023-21443", "summary": "Incident Working Time Quay Test 2", "description": "Second test for the incident_product_working_time metric by creating test incident.", "products": ["Quay"], "incident_type": "internal", "status": "pending_customer", "severity": "3", "creator": { "id": "d8f2c569-8140-4a40-bdd7-9c1a24f21ebb", "kind": "User", "href": "/api/web-rca/v1/users/d8f2c569-8140-4a40-bdd7-9c1a24f21ebb", "name": "Spencer McAvey", "email": "smcavey@redhat.com", "username": "rh-ee-smcavey", "created_at": "2022-09-07T17:15:18.391531Z", "updated_at": "2022-09-07T17:15:18.391531Z" }, "participants": [{ "id": "d8f2c569-8140-4a40-bdd7-9c1a24f21ebb", "kind": "User", "href": "/api/web-rca/v1/users/d8f2c569-8140-4a40-bdd7-9c1a24f21ebb", "name": "Spencer McAvey", "email": "smcavey@redhat.com", "username": "rh-ee-smcavey", "created_at": "2022-09-07T17:15:18.391531Z", "updated_at": "2022-09-07T17:15:18.391531Z" }], "viewers": [{ "id": "d8f2c569-8140-4a40-bdd7-9c1a24f21ebb", "kind": "User", "href": "/api/web-rca/v1/users/d8f2c569-8140-4a40-bdd7-9c1a24f21ebb", "name": "Spencer McAvey", "email": "smcavey@redhat.com", "username": "rh-ee-smcavey", "created_at": "2022-09-07T17:15:18.391531Z", "updated_at": "2022-09-07T17:15:18.391531Z" }], "created_at": "2023-08-29T17:14:27.696339Z", "updated_at": "2024-07-24T17:29:32.015482Z", "resolved_at": "0001-01-01T00:00:00Z", "last_opened_at": "2023-08-29T17:23:26.76845Z", "reopen_counter": 0, "private": false, "invalid": false, "metadata": { "post_create_errors": { "slack": { "Code": 31, "HttpCode": 500, "Reason": "Incident created, user doesn't have set up team. Can't create channel or post a message." } } }, "working_time": 36 },
      { "id": "52ab70a5-14d7-4516-ad6c-f2923beac9c5", "kind": "Incident", "href": "/api/web-rca/v1/incidents/52ab70a5-14d7-4516-ad6c-f2923beac9c5", "incident_id": "ITN-2023-21440", "summary": "Incident Working Time Quay Test", "description": "Testing the incident_products_working_time metric by creating test incident.", "products": ["Quay"], "incident_type": "internal", "status": "closed", "severity": "3", "creator": { "id": "d8f2c569-8140-4a40-bdd7-9c1a24f21ebb", "kind": "User", "href": "/api/web-rca/v1/users/d8f2c569-8140-4a40-bdd7-9c1a24f21ebb", "name": "Spencer McAvey", "email": "smcavey@redhat.com", "username": "rh-ee-smcavey", "created_at": "2022-09-07T17:15:18.391531Z", "updated_at": "2022-09-07T17:15:18.391531Z" }, "participants": [{ "id": "d8f2c569-8140-4a40-bdd7-9c1a24f21ebb", "kind": "User", "href": "/api/web-rca/v1/users/d8f2c569-8140-4a40-bdd7-9c1a24f21ebb", "name": "Spencer McAvey", "email": "smcavey@redhat.com", "username": "rh-ee-smcavey", "created_at": "2022-09-07T17:15:18.391531Z", "updated_at": "2022-09-07T17:15:18.391531Z" }], "viewers": [{ "id": "d8f2c569-8140-4a40-bdd7-9c1a24f21ebb", "kind": "User", "href": "/api/web-rca/v1/users/d8f2c569-8140-4a40-bdd7-9c1a24f21ebb", "name": "Spencer McAvey", "email": "smcavey@redhat.com", "username": "rh-ee-smcavey", "created_at": "2022-09-07T17:15:18.391531Z", "updated_at": "2022-09-07T17:15:18.391531Z" }], "created_at": "2023-08-29T16:49:51.410736Z", "updated_at": "2024-04-25T13:04:04.356523Z", "resolved_at": "2024-04-22T13:03:59.491576Z", "last_opened_at": "2023-08-29T16:49:51.410727Z", "reopen_counter": 0, "private": false, "invalid": true, "metadata": { "post_create_errors": { "slack": { "Code": 31, "HttpCode": 500, "Reason": "Incident created, user doesn't have set up team. Can't create channel or post a message." } } }, "working_time": 806 }
    ]
  };

  const mock_token = {
    access_token: "foo",
  }

  const mock_products = {
    "kind": "string",
    "page": 0,
    "size": 0,
    "total": 0,
    "items": [
      {
        "href": "string",
        "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        "kind": "string",
        "created_at": "2024-07-24T18:36:42.671Z",
        "fullname": "quay",
        "metadata": {},
        "name": "quay",
        "owners": [
          "string"
        ],
        "updated_at": "2024-07-24T18:36:42.671Z"
      }
    ]
  }

  beforeAll(async () => {
    const router = await createRouter({
      logger: getVoidLogger(),
      config: mockConfig,
    });
    app = express().use(router);
  });

  beforeEach(() => {
    jest.resetAllMocks();

    jest.spyOn(global, "fetch")
      .mockImplementation(
        jest.fn((url: string) => {
          switch (url) {
            // token
            case mockConfig.get("backend.baseUrl") + "/api/proxy/sso-redhat/auth/realms/redhat-external/protocol/openid-connect/token": {
              return Promise.resolve(
                {
                  json: () => mock_token,
                  text: () => JSON.stringify(mock_token)
                }
              )
            }

            // status-board
            case mockConfig.get("backend.baseUrl") + "/api/proxy/status-board/products?search=fullname+ilike+'quay'": {
              return Promise.resolve(
                {
                  json: () => mock_products,
                  text: () => JSON.stringify(mock_products)
                }
              )
            }

            // web-rca
            case mockConfig.get("backend.baseUrl") + "/api/proxy/web-rca/incidents?product_id=3fa85f64-5717-4562-b3fc-2c963f66afa6": {
              return Promise.resolve(
                {
                  json: () => quay_incident_list,
                  text: () => JSON.stringify(quay_incident_list)
                }
              )
            }

            // default = undefined
            default: {
              return Promise.resolve();
            }
          }

        }
        ) as jest.Mock)
  });

  afterEach(() => {
    jest.restoreAllMocks();
  })

  describe('GET /health', () => {
    it('returns ok', async () => {
      const response = await request(app).get('/health');

      expect(response.status).toEqual(200);
      expect(response.body).toEqual({ status: 'ok' });
    });
  });

  describe('POST /incidents', () => {
    it('returns incident_list', async () => {
      const data = { products: "quay" };
      const response = await request(app).post('/incidents').send(data);

      expect(response.status).toEqual(200);
      expect(response.body).toEqual(quay_incident_list);
    });
  });
});
