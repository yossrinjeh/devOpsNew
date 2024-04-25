import { CreateAttendanceTrackingDto } from './dto/create-attendance-tracking.dto';
import { AttendanceRecord, User } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class AttendanceTrackingService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    createAttendance(userId: string, createAttendanceTrackingDto: CreateAttendanceTrackingDto): Promise<AttendanceRecord | any>;
    create(userId: string, createAttendanceTrackingDto: CreateAttendanceTrackingDto): Promise<AttendanceRecord | any>;
    find(id: string): Promise<any>;
    updateUserWithAttendance(id: string, UserData: User): Promise<User>;
    findAll(): Promise<AttendanceRecord[]>;
    findAllUsers(): Promise<(User & {
        attendanceRecords: AttendanceRecord[];
    })[] | any>;
    getTotalShiftsForUserInMonth(userId: string, month: number): Promise<{
        halfShifts: number;
        fullShifts: number;
        quarterShifts: number;
        absences: number;
    }>;
    remove(id: string): Promise<boolean>;
    findUsersAttendance(month: number, year: number): Promise<unknown[]>;
    getAttendanceByUserIdAndDate(UserId: string, date: string): Promise<AttendanceRecord | null>;
}
