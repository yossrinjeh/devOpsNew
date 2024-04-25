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
exports.AttendanceTrackingController = void 0;
const common_1 = require("@nestjs/common");
const attendance_tracking_service_1 = require("./attendance-tracking.service");
const public_decorator_1 = require("../auth/common/decorators/public.decorator");
const prisma_service_1 = require("../prisma/prisma.service");
const create_attendance_tracking_dto_1 = require("./dto/create-attendance-tracking.dto");
const schedule_1 = require("@nestjs/schedule");
let AttendanceTrackingController = class AttendanceTrackingController {
    constructor(attendanceTrackingService, prisma) {
        this.attendanceTrackingService = attendanceTrackingService;
        this.prisma = prisma;
    }
    async createAttendance(userId, createAttendanceDto) {
        return this.attendanceTrackingService.createAttendance(userId, createAttendanceDto);
    }
    create(id, createAttendanceTrackingDto) {
        return this.attendanceTrackingService.create(id, createAttendanceTrackingDto);
    }
    findAll() {
        return this.attendanceTrackingService.findAll();
    }
    remove(id) {
        return this.attendanceTrackingService.remove(id);
    }
    find(id) {
        return this.attendanceTrackingService.find(id);
    }
    findAllUsers() {
        return this.attendanceTrackingService.findAllUsers();
    }
    async updateAttendance(id, updateAttendanceTrackingDto) {
        try {
            const updatedRecord = await this.prisma.attendanceRecord.update({
                where: { id: id },
                data: {
                    date: updateAttendanceTrackingDto.date,
                    shiftType: updateAttendanceTrackingDto.shiftType,
                    status: updateAttendanceTrackingDto.status,
                    absent_reason: updateAttendanceTrackingDto.absent_reason,
                    userId: updateAttendanceTrackingDto.userId,
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
            return updatedRecord;
        }
        catch (error) {
            console.error('Error updating attendance record:', error);
            throw new Error('Failed to update attendance record');
        }
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
    async getTotalHalfShiftDaysForUserInMonth(userId, month) {
        return await this.attendanceTrackingService.getTotalShiftsForUserInMonth(userId, month);
    }
    async findAllWithAttendance() {
        return this.prisma.user.findMany({
            include: {
                attendanceRecord: true,
            },
        });
    }
    findUsersAttendance(month, year) {
        return this.attendanceTrackingService.findUsersAttendance(month, year);
    }
    async getAttendanceByEmployeeIdAndDate(userId, date) {
        return this.attendanceTrackingService.getAttendanceByUserIdAndDate(userId, date);
    }
    async remindUsers() {
        const users = await this.findAllWithAttendance();
        console.log('bonjour');
        for (const user of users) {
            console.log(user.number);
            const todayAttendance = await this.attendanceTrackingService.getAttendanceByUserIdAndDate(user.id, new Date().toISOString().split('T')[0]);
            if (!todayAttendance) {
                const number = '+216' + user.number;
                const message = 'Hey ' +
                    user.firstname +
                    "! It seems like you haven't logged your attendance for today yet. Could you please take a moment to do so?";
                console.log('asaa' + number);
                this.sendReminderMessage(number);
            }
        }
    }
    sendReminderMessage(number) {
        console.log('bonjour');
        const accountSid = 'AC656429b580a8994d0cc560a9ae915228';
        const authToken = '1460ba8886e7e2fc6f57b9cd5dd55f8b';
        const client = require('twilio')(accountSid, authToken);
        client.messages
            .create({
            body: "Hey there! It seems like you haven't logged your attendance for today yet. Could you please take a moment to do so?",
            from: '+12512503383',
            to: number,
        })
            .then((message) => console.log(message.sid));
    }
    async getAttendanceByUserAndMonth(userId, month) {
        const startDate = new Date(new Date().getFullYear(), month - 1, 1);
        const endDate = new Date(new Date().getFullYear(), month, 0);
        const startDateFormatted = this.formatDate(startDate);
        const endDateFormatted = this.formatDate(endDate);
        const attendanceRecords = await this.prisma.attendanceRecord.findMany({
            where: {
                userId,
                date: {
                    gte: startDateFormatted,
                    lte: endDateFormatted,
                },
            },
        });
        return attendanceRecords;
    }
    formatDate(date) {
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = String(date.getFullYear()).slice(-2);
        return `${day}-${month}-${year}`;
    }
};
exports.AttendanceTrackingController = AttendanceTrackingController;
__decorate([
    (0, common_1.Post)('create/:userId'),
    __param(0, (0, common_1.Param)('userId')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, create_attendance_tracking_dto_1.CreateAttendanceTrackingDto]),
    __metadata("design:returntype", Promise)
], AttendanceTrackingController.prototype, "createAttendance", null);
__decorate([
    (0, common_1.Post)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, create_attendance_tracking_dto_1.CreateAttendanceTrackingDto]),
    __metadata("design:returntype", Promise)
], AttendanceTrackingController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AttendanceTrackingController.prototype, "findAll", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AttendanceTrackingController.prototype, "remove", null);
__decorate([
    (0, common_1.Get)('/getUser/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AttendanceTrackingController.prototype, "find", null);
__decorate([
    (0, common_1.Get)('/users'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AttendanceTrackingController.prototype, "findAllUsers", null);
__decorate([
    (0, common_1.Put)('/updateAttendance/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], AttendanceTrackingController.prototype, "updateAttendance", null);
__decorate([
    (0, common_1.Get)('/getUserByEmail/:email'),
    __param(0, (0, common_1.Param)('email')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AttendanceTrackingController.prototype, "getUserIdByEmail", null);
__decorate([
    (0, common_1.Get)('total-half-shift-days/:userId'),
    __param(0, (0, common_1.Param)('userId')),
    __param(1, (0, common_1.Query)('month')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number]),
    __metadata("design:returntype", Promise)
], AttendanceTrackingController.prototype, "getTotalHalfShiftDaysForUserInMonth", null);
__decorate([
    (0, common_1.Get)('with-attendance'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AttendanceTrackingController.prototype, "findAllWithAttendance", null);
__decorate([
    (0, common_1.Get)(':month/:year'),
    __param(0, (0, common_1.Param)('month')),
    __param(1, (0, common_1.Param)('year')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], AttendanceTrackingController.prototype, "findUsersAttendance", null);
__decorate([
    (0, common_1.Get)('/:userId'),
    __param(0, (0, common_1.Param)('userId')),
    __param(1, (0, common_1.Query)('date')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], AttendanceTrackingController.prototype, "getAttendanceByEmployeeIdAndDate", null);
__decorate([
    (0, schedule_1.Cron)(schedule_1.CronExpression.EVERY_DAY_AT_5PM),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AttendanceTrackingController.prototype, "remindUsers", null);
__decorate([
    (0, common_1.Get)(':userId/:month'),
    __param(0, (0, common_1.Param)('userId')),
    __param(1, (0, common_1.Param)('month')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number]),
    __metadata("design:returntype", Promise)
], AttendanceTrackingController.prototype, "getAttendanceByUserAndMonth", null);
exports.AttendanceTrackingController = AttendanceTrackingController = __decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Controller)('attendance-tracking'),
    __metadata("design:paramtypes", [attendance_tracking_service_1.AttendanceTrackingService,
        prisma_service_1.PrismaService])
], AttendanceTrackingController);
//# sourceMappingURL=attendance-tracking.controller.js.map