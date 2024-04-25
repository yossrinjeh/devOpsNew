import { Deduction } from '@prisma/client';
import { DeductionsService } from './deductions.service';
export declare class DeductionsController {
    private readonly deductionsService;
    constructor(deductionsService: DeductionsService);
    createDeduction(createDeductionDto: Deduction): Promise<Deduction>;
    findAll(): Promise<{
        id: string;
        userId: string;
        description: string;
        amount: number;
        date: Date;
    }[]>;
    findOne(id: string): Promise<string | {
        id: string;
        userId: string;
        description: string;
        amount: number;
        date: Date;
    }>;
    update(id: string, updateDeductionDto: Deduction): Promise<any>;
    remove(id: string): Promise<boolean>;
}
