/// <reference types="node" />
import { Server } from 'http';
import { Logger } from 'winston';
import { Config } from '@backstage/config';
export interface ServerOptions {
    port: number;
    enableCors: boolean;
    logger: Logger;
    config: Config;
}
export declare function startStandaloneServer(options: ServerOptions): Promise<Server>;
