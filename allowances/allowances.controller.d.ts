import { Allowance, User } from '@prisma/client';
import { AllowancesService } from './allowances.service';
export declare class AllowancesController {
    private readonly allowancesService;
    constructor(allowancesService: AllowancesService);
    createAllowance(createAllowanceDto: Allowance): Promise<Allowance>;
    findAll(): Promise<{
        id: string;
        userId: string;
        description: string;
        category: import(".prisma/client").$Enums.AllowanceCategory;
        amount: number;
        date: Date;
    }[]>;
    findOne(id: string): Promise<string | {
        id: string;
        userId: string;
        description: string;
        category: import(".prisma/client").$Enums.AllowanceCategory;
        amount: number;
        date: Date;
    }>;
    update(id: string, updateAllowanceDto: Allowance): Promise<any>;
    remove(id: string): Promise<boolean>;
    find(id: string): Promise<User>;
}
