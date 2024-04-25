import { Config } from '@prisma/client';
import { ConfigsService } from './configs.service';
export declare class ConfigsController {
    private readonly configsService;
    constructor(configsService: ConfigsService);
    createConfig(createConfigDto: Config): Promise<Config>;
    findAll(): Promise<{
        id: string;
        companyName: string;
        companyLogo: string;
        address: string;
        cnssAffiliation: string;
        payDay: number;
        delayBeforePayment: number;
        cnssrate: number;
        cssrate: number;
    }[]>;
    findOne(id: string): Promise<string | {
        id: string;
        companyName: string;
        companyLogo: string;
        address: string;
        cnssAffiliation: string;
        payDay: number;
        delayBeforePayment: number;
        cnssrate: number;
        cssrate: number;
    }>;
    update(id: string, updateConfigDto: Config): Promise<any>;
    remove(id: string): Promise<boolean>;
}
