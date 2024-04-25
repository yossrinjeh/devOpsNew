import { ShiftType } from '@prisma/client';
export declare enum Status {
    PRESENT = "PRESENT",
    ABSENT = "ABSENT"
}
export declare class CreateAttendanceTrackingDto {
    date: string;
    shiftType: ShiftType | null;
    status: Status;
    absent_reason?: string | null;
    userId: string;
}
