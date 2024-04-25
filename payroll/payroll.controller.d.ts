import { PrismaService } from './../prisma.service';
import { PayrollService } from './payroll.service';
import { Payroll, User } from '@prisma/client';
export declare class PayrollController {
    private readonly payrollService;
    private readonly prisma;
    constructor(payrollService: PayrollService, prisma: PrismaService);
    createPayroll(createPayrollDto: Payroll): Promise<Payroll>;
    getAllPayrolls(): Promise<Payroll[]>;
    getPayrollsByMonth(month: Date): Promise<Payroll[]>;
    getPayrollsByUserId(userId: string): Promise<Payroll[]>;
    getUserIdByEmail(email: string): Promise<string | any>;
    find(): Promise<User>;
}
