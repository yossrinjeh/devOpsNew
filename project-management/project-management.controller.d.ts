import { ProjectManagementService } from './project-management.service';
import { Project } from '@prisma/client';
export declare class ProjectManagementController {
    private readonly projectManagementService;
    constructor(projectManagementService: ProjectManagementService);
    create(createProjectManagementDto: Project): Promise<{
        id: string;
        users: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            email: string;
            firstname: string;
            lastname: string;
            address: string;
            birthday: string;
            degree: string;
            number: number;
            job: string;
            image: string;
            hash: string;
            hashedAt: string;
            hashedRt: string;
            roleId: string[];
            basicSalary: number;
            offDays: number;
            familySituation: number;
            childrenNumber: number;
            bankrib: string;
            numCnss: string;
            taskId: string[];
            projectIds: string[];
        }[];
    }>;
    findAll(): Promise<{
        id: string;
        name: string;
        description: string;
        usersIds: string[];
        leader: string;
        startDate: string;
        endDate: string;
        projectStatus: import(".prisma/client").$Enums.ProjectStatus;
    }[]>;
    findOne(id: string): Promise<{
        id: string;
        name: string;
        description: string;
        usersIds: string[];
        leader: string;
        startDate: string;
        endDate: string;
        projectStatus: import(".prisma/client").$Enums.ProjectStatus;
    }>;
    update(id: string, updateProjectManagementDto: Project): Promise<{
        id: string;
    }>;
    remove(id: string): string;
}
