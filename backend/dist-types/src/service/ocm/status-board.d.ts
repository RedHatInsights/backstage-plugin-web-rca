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
export declare function lookupProduct(url: string, access_token: string, product_name: string): Promise<productList>;
export {};
