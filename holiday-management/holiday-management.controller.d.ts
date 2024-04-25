import { HolidayManagementService } from './holiday-management.service';
import { CreateHolidayManagementDto } from './dto/create-holiday-management.dto';
import { Holiday } from '@prisma/client';
export declare class HolidayManagementController {
    private readonly holidayManagementService;
    constructor(holidayManagementService: HolidayManagementService);
    createHoliday(createHolidayDto: CreateHolidayManagementDto): Promise<Holiday>;
    findAll(): Promise<{
        id: string;
        name: string;
        date: string;
        duration: string;
        shift: import(".prisma/client").$Enums.Shift;
    }[]>;
    findOne(id: string): Promise<string | {
        id: string;
        name: string;
        date: string;
        duration: string;
        shift: import(".prisma/client").$Enums.Shift;
    }>;
    update(id: string, updateHolidayManagementDto: Holiday): Promise<any>;
    remove(id: string): Promise<boolean>;
}
