import { CreateHolidayManagementDto } from './dto/create-holiday-management.dto';
import { Holiday } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class HolidayManagementService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    createHoliday(createHolidayDto: CreateHolidayManagementDto): Promise<Holiday>;
    findAll(): Promise<Holiday[]>;
    findOne(id: string): Promise<Holiday | string>;
    update(id: string, updateHolidayManagementDto: Holiday): Promise<Holiday | any>;
    remove(id: string): Promise<boolean>;
}
