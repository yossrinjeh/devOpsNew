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
exports.AttendanceTrackingService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let AttendanceTrackingService = class AttendanceTrackingService {
    constructor(prisma) {
        this.prisma = prisma;
        let includePosts = false;
        let attendanceRecord;
        let employe;
    }
    async createAttendance(userId, createAttendanceTrackingDto) {
        const createdRecord = await this.prisma.attendanceRecord.create({
            data: {
                date: createAttendanceTrackingDto.date,
                shiftType: createAttendanceTrackingDto.shiftType,
                status: createAttendanceTrackingDto.status,
                absent_reason: createAttendanceTrackingDto.absent_reason,
                user: {
                    connect: { id: userId },
                },
            },
            select: {
                id: true,
                date: true,
                shiftType: true,
                status: true,
                absent_reason: true,
                userId: true,
            },
        });
        return createdRecord;
    }
    async create(userId, createAttendanceTrackingDto) {
        try {
            const currentDate = new Date().toISOString().split('T')[0];
            const existingRecord = await this.prisma.attendanceRecord.findFirst({
                where: {
                    date: currentDate,
                    userId: userId,
                },
            });
            if (existingRecord) {
                return {
                    message: 'You already created an attendance for today.',
                };
            }
            const createdRecord = await this.prisma.attendanceRecord.create({
                data: {
                    date: currentDate,
                    shiftType: createAttendanceTrackingDto.shiftType,
                    status: createAttendanceTrackingDto.status,
                    absent_reason: createAttendanceTrackingDto.absent_reason,
                    user: {
                        connect: { id: userId },
                    },
                },
                select: {
                    id: true,
                    date: true,
                    shiftType: true,
                    status: true,
                    absent_reason: true,
                },
            });
            return createdRecord;
        }
        catch (error) {
            console.error('Error creating attendance record:', error);
            throw new Error('Failed to create attendance record');
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
                attendanceRecord: true,
                projectIds: true,
            },
        });
    }
    async updateUserWithAttendance(id, UserData) {
        try {
            const existingUser = await this.prisma.user.findUnique({
                where: { id },
                include: { attendanceRecord: true },
            });
            if (!existingUser) {
                throw new Error(`User with ID ${id} not found`);
            }
            const updatedUser = await this.prisma.user.update({
                where: { id },
                data: UserData,
            });
            await Promise.all(existingUser.attendanceRecord.map(async (record) => {
                await this.prisma.attendanceRecord.update({
                    where: { id: record.id },
                    data: {},
                });
            }));
            return updatedUser;
        }
        catch (error) {
            console.error('Error updating User with attendance:', error);
            throw new Error('Failed to update User with attendance');
        }
    }
    async findAll() {
        return this.prisma.attendanceRecord.findMany();
    }
    async findAllUsers() {
        try {
            const Users = await this.prisma.user.findMany({
                include: {
                    attendanceRecord: true,
                },
            });
            return Users;
        }
        catch (error) {
            console.error('Error fetching Users:', error);
            return 'Error fetching Users';
        }
    }
    async getTotalShiftsForUserInMonth(userId, month) {
        try {
            const monthStr = month.toString().padStart(2, '0');
            const records = await this.prisma.attendanceRecord.findMany({
                where: {
                    userId,
                    date: {
                        contains: `2024-${monthStr}-`,
                    },
                },
            });
            console.log('Fetched records:', records);
            const halfShiftRecords = records.filter((record) => record.shiftType === 'HALF_DAY');
            const fullShiftRecords = records.filter((record) => record.shiftType === 'FULL_DAY');
            const quarterShiftRecords = records.filter((record) => record.shiftType === 'QUARTER_SHIFT');
            const AbsentStatus = records.filter((record) => record.status === 'ABSENT');
            console.log('Filtered records:', halfShiftRecords);
            return {
                halfShifts: halfShiftRecords.length,
                fullShifts: fullShiftRecords.length,
                quarterShifts: quarterShiftRecords.length,
                absences: AbsentStatus.length,
            };
        }
        catch (error) {
            console.error('Error fetching shifts:', error);
            throw error;
        }
    }
    async remove(id) {
        try {
            const deletedRecord = await this.prisma.attendanceRecord.delete({
                where: {
                    id: id,
                },
            });
            return true;
        }
        catch (error) {
            console.error('Error deleting attendance record:', error);
            throw new Error('Failed to delete attendance record');
        }
    }
    async findUsersAttendance(month, year) {
        try {
            const startDate = new Date(`${year}-${month}-01`);
            const endDate = new Date(year, month, 0);
            const attendanceRecords = await this.prisma.attendanceRecord.findMany({
                where: {
                    AND: [
                        { date: { gte: startDate.toISOString() } },
                        { date: { lt: endDate.toISOString() } },
                    ],
                },
                include: {
                    user: true,
                },
            });
            const UsersAttendance = attendanceRecords.reduce((acc, record) => {
                const { user } = record;
                if (!acc[user.id]) {
                    acc[user.id] = {
                        UserId: user.id,
                        firstName: user.firstname,
                        lastName: user.lastname,
                        attendanceRecord: [record],
                    };
                }
                else {
                    acc[user.id].attendanceRecord.push(record);
                }
                return acc;
            }, {});
            const result = Object.values(UsersAttendance);
            return result;
        }
        catch (error) {
            throw new Error(`Failed to fetch Users attendance: ${error.message}`);
        }
    }
    async getAttendanceByUserIdAndDate(UserId, date) {
        try {
            const attendanceRecord = await this.prisma.attendanceRecord.findFirst({
                where: {
                    userId: UserId,
                    date: date,
                },
            });
            return attendanceRecord;
        }
        catch (error) {
            console.error('Error fetching attendance record:', error);
            throw new Error('Failed to fetch attendance record');
        }
    }
};
exports.AttendanceTrackingService = AttendanceTrackingService;
exports.AttendanceTrackingService = AttendanceTrackingService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], AttendanceTrackingService);
//# sourceMappingURL=attendance-tracking.service.js.map