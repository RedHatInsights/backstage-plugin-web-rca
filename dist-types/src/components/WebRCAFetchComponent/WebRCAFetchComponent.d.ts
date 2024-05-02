import React from 'react';
import '@backstage/plugin-user-settings';
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
interface IncidentList {
    kind: 'IncidentList';
    page?: number;
    size?: number;
    total?: number;
    items?: Incident[];
    errorMsg?: string;
}
interface FetchProps {
    product?: string;
}
export declare const DenseTable: ({ incidents, web_rca_url, message, }: DenseTableProps) => React.JSX.Element;
export declare const WebRCAFetchComponent: ({ product }: FetchProps) => React.JSX.Element;
export {};
