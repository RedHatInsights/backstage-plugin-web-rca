import { LoggerService } from '@backstage/backend-plugin-api';
import { Config } from '@backstage/config';
import express from 'express';
export interface RouterOptions {
    logger: LoggerService;
    config: Config;
}
export declare function createRouter(options: RouterOptions): Promise<express.Router>;
