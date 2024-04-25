import { $Enums, User } from '@prisma/client';
export declare class CreateProjectManagementDto {
    users: User[];
    usersIds: String[];
    leader: string;
    startDate: string;
    endDate: string;
    projectStatus: $Enums.ProjectStatus;
}
