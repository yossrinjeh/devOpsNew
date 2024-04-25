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
exports.ConfigsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma.service");
let ConfigsService = class ConfigsService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async createConfig(createConfigDto) {
        const { companyName, companyLogo, address, cnssAffiliation, payDay, delayBeforePayment, cnssrate, cssrate, } = createConfigDto;
        return this.prisma.config.create({
            data: {
                companyName,
                companyLogo,
                address,
                cnssAffiliation,
                payDay,
                delayBeforePayment,
                cnssrate,
                cssrate,
            },
        });
    }
    async findAll() {
        return this.prisma.config.findMany();
    }
    async findOne(id) {
        try {
            const record = await this.prisma.config.findUnique({
                where: {
                    id: id,
                },
                select: {
                    id: true,
                    companyName: true,
                    companyLogo: true,
                    address: true,
                    cnssAffiliation: true,
                    payDay: true,
                    delayBeforePayment: true,
                    cnssrate: true,
                    cssrate: true,
                },
            });
            if (!record) {
                return `Config with ID ${id} not found`;
            }
            return record;
        }
        catch (error) {
            console.error('Error fetching config:', error);
            throw new Error('Failed to fetch config');
        }
    }
    async update(id, updateConfigDto) {
        try {
            const updatedConfig = await this.prisma.config.update({
                where: { id: id },
                data: {
                    companyName: updateConfigDto.companyName,
                    companyLogo: updateConfigDto.companyLogo,
                    address: updateConfigDto.address,
                    cnssAffiliation: updateConfigDto.cnssAffiliation,
                    payDay: updateConfigDto.payDay,
                    delayBeforePayment: updateConfigDto.delayBeforePayment,
                    cnssrate: updateConfigDto.cnssrate,
                    cssrate: updateConfigDto.cssrate,
                },
                select: {
                    id: true,
                    companyName: true,
                    companyLogo: true,
                    address: true,
                    cnssAffiliation: true,
                    payDay: true,
                    delayBeforePayment: true,
                    cnssrate: true,
                    cssrate: true,
                },
            });
            return updatedConfig;
        }
        catch (error) {
            console.error('Error updating config:', error);
            throw new Error('Failed to update config');
        }
    }
    async remove(id) {
        try {
            await this.prisma.config.delete({
                where: {
                    id: id,
                },
            });
            return true;
        }
        catch (error) {
            console.error('Error deleting config:', error);
            throw new Error('Failed to delete config');
        }
    }
};
exports.ConfigsService = ConfigsService;
exports.ConfigsService = ConfigsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ConfigsService);
//# sourceMappingURL=configs.service.js.map