import { PrismaService } from 'src/prisma.service';
import { Payroll } from '@prisma/client';
export declare class PayrollService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    createPayroll(createPayrollDto: Payroll): Promise<Payroll>;
    getAllPayrolls(): Promise<Payroll[]>;
    getPayrollsByMonth(month: Date): Promise<Payroll[]>;
    getPayrollsByUserId(userId: string): Promise<Payroll[]>;
    findAllUsers(): Promise<any>;
}
