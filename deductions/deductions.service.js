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
exports.DeductionsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma.service");
let DeductionsService = class DeductionsService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async createDeduction(createDeductionDto) {
        const { userId, description, amount, date } = createDeductionDto;
        return this.prisma.deduction.create({
            data: {
                userId,
                description,
                amount,
                date
            },
        });
    }
    async findAll() {
        return this.prisma.deduction.findMany();
    }
    async findOne(id) {
        try {
            const record = await this.prisma.deduction.findUnique({
                where: {
                    id: id,
                },
                select: {
                    id: true,
                    userId: true,
                    description: true,
                    amount: true,
                    date: true,
                },
            });
            if (!record) {
                return `Deduction with ID ${id} not found`;
            }
            return record;
        }
        catch (error) {
            console.error('Error fetching deduction:', error);
            throw new Error('Failed to fetch deduction');
        }
    }
    async update(id, updateDeductionDto) {
        try {
            const updatedDeduction = await this.prisma.deduction.update({
                where: { id: id },
                data: {
                    userId: updateDeductionDto.userId,
                    description: updateDeductionDto.description,
                    amount: updateDeductionDto.amount,
                    date: updateDeductionDto.date,
                },
                select: {
                    id: true,
                    userId: true,
                    description: true,
                    amount: true,
                    date: true,
                },
            });
            return updatedDeduction;
        }
        catch (error) {
            console.error('Error updating deduction:', error);
            throw new Error('Failed to update deduction');
        }
    }
    async remove(id) {
        try {
            await this.prisma.deduction.delete({
                where: {
                    id: id,
                },
            });
            return true;
        }
        catch (error) {
            console.error('Error deleting deduction:', error);
            throw new Error('Failed to delete deduction');
        }
    }
};
exports.DeductionsService = DeductionsService;
exports.DeductionsService = DeductionsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], DeductionsService);
//# sourceMappingURL=deductions.service.js.map