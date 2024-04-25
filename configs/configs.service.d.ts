import { PrismaService } from 'src/prisma.service';
import { Config } from '@prisma/client';
export declare class ConfigsService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    createConfig(createConfigDto: Config): Promise<Config>;
    findAll(): Promise<Config[]>;
    findOne(id: string): Promise<Config | string>;
    update(id: string, updateConfigDto: Config): Promise<Config | any>;
    remove(id: string): Promise<boolean>;
}
