"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PayrollService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma.service");
let PayrollService = class PayrollService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async createPayroll(createPayrollDto) {
        const { userId, month, taxableSalary, cnssdeduction, irpp, css, netSalary } = createPayrollDto;
        return this.prisma.payroll.create({
            data: {
                userId,
                month,
                taxableSalary,
                cnssdeduction,
                irpp,
                css,
                netSalary,
            },
        });
    }
    async getAllPayrolls() {
        return this.prisma.payroll.findMany();
    }
    async getPayrollsByMonth(month) {
        return this.prisma.payroll.findMany({
            where: {
                month: month,
            },
        });
    }
    async getPayrollsByUserId(userId) {
        return this.prisma.payroll.findMany({
            where: {
                userId: userId,
            },
        });
    }
    findAllUsers() {
        return this.prisma.user.findMany({
            select: {
                id: true,
                firstname: true,
                lastname: true,
                address: true,
                birthday: true,
                basicSalary: true,
                offDays: true,
                payrolls: true,
                allowances: true,
                deductions: true,
                familySituation: true,
                childrenNumber: true,
                bankrib: true,
                numCnss: true,
            },
        });
    }
};
exports.PayrollService = PayrollService;
exports.PayrollService = PayrollService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], PayrollService);
//# sourceMappingURL=payroll.service.js.map