import { PrismaService } from 'src/prisma.service';
import { Deduction } from '@prisma/client';
export declare class DeductionsService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    createDeduction(createDeductionDto: Deduction): Promise<Deduction>;
    findAll(): Promise<Deduction[]>;
    findOne(id: string): Promise<Deduction | string>;
    update(id: string, updateDeductionDto: Deduction): Promise<Deduction | any>;
    remove(id: string): Promise<boolean>;
}
