export declare class CreateHolidayManagementDto {
    name: string;
    date: string;
    duration: string;
    shift: Shift;
}
export declare enum Shift {
    DAY_ONLY = "DAY_ONLY",
    NIGHT_ONLY = "NIGHT_ONLY",
    BOTH_SHIFTS = "BOTH_SHIFTS"
}
