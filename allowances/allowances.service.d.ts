import { PrismaService } from 'src/prisma.service';
import { Allowance } from '@prisma/client';
export declare class AllowancesService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    createAllowance(createAllowanceDto: Allowance): Promise<Allowance>;
    findAll(): Promise<Allowance[]>;
    findOne(id: string): Promise<Allowance | string>;
    update(id: string, updateAllowanceDto: Allowance): Promise<Allowance | any>;
    remove(id: string): Promise<boolean>;
    find(id: string): Promise<any>;
}
