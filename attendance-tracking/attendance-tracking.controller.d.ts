import { AttendanceTrackingService } from './attendance-tracking.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { AttendanceRecord, User } from '@prisma/client';
import { CreateAttendanceTrackingDto } from './dto/create-attendance-tracking.dto';
export declare class AttendanceTrackingController {
    private readonly attendanceTrackingService;
    private readonly prisma;
    constructor(attendanceTrackingService: AttendanceTrackingService, prisma: PrismaService);
    createAttendance(userId: string, createAttendanceDto: CreateAttendanceTrackingDto): Promise<any>;
    create(id: string, createAttendanceTrackingDto: CreateAttendanceTrackingDto): Promise<AttendanceRecord>;
    findAll(): Promise<{
        id: string;
        date: string;
        shiftType: import(".prisma/client").$Enums.ShiftType;
        status: import(".prisma/client").$Enums.Status;
        absent_reason: string;
        userId: string;
    }[]>;
    remove(id: string): Promise<boolean>;
    find(id: string): Promise<User>;
    findAllUsers(): Promise<User>;
    updateAttendance(id: string, updateAttendanceTrackingDto: AttendanceRecord): Promise<AttendanceRecord | any>;
    getUserIdByEmail(email: string): Promise<String | any>;
    getTotalHalfShiftDaysForUserInMonth(userId: string, month: number): Promise<{
        halfShifts: number;
        fullShifts: number;
        quarterShifts: number;
        absences: number;
    }>;
    findAllWithAttendance(): Promise<any[]>;
    findUsersAttendance(month: number, year: number): Promise<any[]>;
    getAttendanceByEmployeeIdAndDate(userId: string, date: string): Promise<AttendanceRecord | null>;
    remindUsers(): Promise<void>;
    private sendReminderMessage;
    getAttendanceByUserAndMonth(userId: string, month: number): Promise<{
        id: string;
        date: string;
        shiftType: import(".prisma/client").$Enums.ShiftType;
        status: import(".prisma/client").$Enums.Status;
        absent_reason: string;
        userId: string;
    }[]>;
    private formatDate;
}
