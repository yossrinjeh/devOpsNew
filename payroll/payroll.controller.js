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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PayrollController = void 0;
const prisma_service_1 = require("./../prisma.service");
const common_1 = require("@nestjs/common");
const payroll_service_1 = require("./payroll.service");
const public_decorator_1 = require("../auth/common/decorators/public.decorator");
let PayrollController = class PayrollController {
    constructor(payrollService, prisma) {
        this.payrollService = payrollService;
        this.prisma = prisma;
    }
    async createPayroll(createPayrollDto) {
        return this.payrollService.createPayroll(createPayrollDto);
    }
    async getAllPayrolls() {
        return this.payrollService.getAllPayrolls();
    }
    async getPayrollsByMonth(month) {
        return this.payrollService.getPayrollsByMonth(new Date(month));
    }
    async getPayrollsByUserId(userId) {
        return this.payrollService.getPayrollsByUserId(userId);
    }
    getUserIdByEmail(email) {
        return this.prisma.user.findUnique({
            where: {
                email: email,
            },
            select: {
                id: true,
            },
        });
    }
    find() {
        return this.payrollService.findAllUsers();
    }
};
exports.PayrollController = PayrollController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PayrollController.prototype, "createPayroll", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PayrollController.prototype, "getAllPayrolls", null);
__decorate([
    (0, common_1.Get)('/month/:month'),
    __param(0, (0, common_1.Param)('month')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Date]),
    __metadata("design:returntype", Promise)
], PayrollController.prototype, "getPayrollsByMonth", null);
__decorate([
    (0, common_1.Get)('/user/:userId'),
    __param(0, (0, common_1.Param)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PayrollController.prototype, "getPayrollsByUserId", null);
__decorate([
    (0, common_1.Get)('/getUserByEmail/:email'),
    __param(0, (0, common_1.Param)('email')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PayrollController.prototype, "getUserIdByEmail", null);
__decorate([
    (0, common_1.Get)('/getAllUsers'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PayrollController.prototype, "find", null);
exports.PayrollController = PayrollController = __decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Controller)('payrolls'),
    __metadata("design:paramtypes", [payroll_service_1.PayrollService,
        prisma_service_1.PrismaService])
], PayrollController);
//# sourceMappingURL=payroll.controller.js.map