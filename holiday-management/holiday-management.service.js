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
exports.HolidayManagementService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let HolidayManagementService = class HolidayManagementService {
    constructor(prisma) {
        this.prisma = prisma;
        let includePosts = false;
        let holiday;
    }
    async createHoliday(createHolidayDto) {
        const { name, date, duration, shift } = createHolidayDto;
        return this.prisma.holiday.create({
            data: {
                name,
                date,
                duration,
                shift,
            },
        });
    }
    async findAll() {
        return this.prisma.holiday.findMany();
    }
    async findOne(id) {
        try {
            const record = await this.prisma.holiday.findUnique({
                where: {
                    id: id,
                },
                select: {
                    id: true,
                    shift: true,
                    date: true,
                    name: true,
                    duration: true,
                },
            });
            if (!record) {
                return 'this id : ' + id + ' Not found';
            }
            return record;
        }
        catch (error) {
            console.error('Error fetching holiday:', error);
            throw new Error('Failed to fetch holiday');
        }
    }
    async update(id, updateHolidayManagementDto) {
        try {
            const updatedHoliday = await this.prisma.holiday.update({
                where: { id: id },
                data: {
                    name: updateHolidayManagementDto.name,
                    date: updateHolidayManagementDto.date,
                    duration: updateHolidayManagementDto.duration,
                    shift: updateHolidayManagementDto.shift,
                },
                select: {
                    id: true,
                    date: true,
                    duration: true,
                    name: true,
                },
            });
            return updatedHoliday;
        }
        catch (error) {
            console.error('Error updating holiday:', error);
            throw new Error('Failed to update holiday');
        }
    }
    async remove(id) {
        try {
            const deletedRecord = await this.prisma.holiday.delete({
                where: {
                    id: id,
                },
            });
            return true;
        }
        catch (error) {
            console.error('Error deleting holiday:', error);
            throw new Error('Failed to delete holiday');
        }
    }
};
exports.HolidayManagementService = HolidayManagementService;
exports.HolidayManagementService = HolidayManagementService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], HolidayManagementService);
//# sourceMappingURL=holiday-management.service.js.map