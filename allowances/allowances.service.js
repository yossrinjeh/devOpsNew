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
exports.AllowancesService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma.service");
let AllowancesService = class AllowancesService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async createAllowance(createAllowanceDto) {
        const { userId, category, description, amount, date } = createAllowanceDto;
        return this.prisma.allowance.create({
            data: {
                userId,
                category,
                description,
                amount,
                date,
            },
        });
    }
    async findAll() {
        return this.prisma.allowance.findMany();
    }
    async findOne(id) {
        try {
            const record = await this.prisma.allowance.findUnique({
                where: {
                    id: id,
                },
                select: {
                    id: true,
                    userId: true,
                    category: true,
                    description: true,
                    amount: true,
                    date: true,
                },
            });
            if (!record) {
                return `Allowance with ID ${id} not found`;
            }
            return record;
        }
        catch (error) {
            console.error('Error fetching allowance:', error);
            throw new Error('Failed to fetch allowance');
        }
    }
    async update(id, updateAllowanceDto) {
        try {
            const updatedAllowance = await this.prisma.allowance.update({
                where: { id: id },
                data: {
                    userId: updateAllowanceDto.userId,
                    category: updateAllowanceDto.category,
                    description: updateAllowanceDto.description,
                    amount: updateAllowanceDto.amount,
                    date: updateAllowanceDto.date,
                },
                select: {
                    id: true,
                    userId: true,
                    category: true,
                    description: true,
                    amount: true,
                    date: true,
                },
            });
            return updatedAllowance;
        }
        catch (error) {
            console.error('Error updating allowance:', error);
            throw new Error('Failed to update allowance');
        }
    }
    async remove(id) {
        try {
            await this.prisma.allowance.delete({
                where: {
                    id: id,
                },
            });
            return true;
        }
        catch (error) {
            console.error('Error deleting allowance:', error);
            throw new Error('Failed to delete allowance');
        }
    }
    find(id) {
        return this.prisma.user.findUnique({
            where: {
                id: id,
            },
            select: {
                id: true,
                firstname: true,
                lastname: true,
                allowances: true,
                projectIds: true,
            },
        });
    }
};
exports.AllowancesService = AllowancesService;
exports.AllowancesService = AllowancesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], AllowancesService);
//# sourceMappingURL=allowances.service.js.map