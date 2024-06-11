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
export declare function listIncidents(url: string, token: string, product_id: string): Promise<IncidentList>;
export {};
