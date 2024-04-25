import { Project } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class ProjectManagementService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createProjectDto: Project): Promise<{
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
    getAllProjects(): Promise<{
        id: string;
        name: string;
        description: string;
        usersIds: string[];
        leader: string;
        startDate: string;
        endDate: string;
        projectStatus: import(".prisma/client").$Enums.ProjectStatus;
    }[]>;
    getProjectById(projectId: string): Promise<{
        id: string;
        name: string;
        description: string;
        usersIds: string[];
        leader: string;
        startDate: string;
        endDate: string;
        projectStatus: import(".prisma/client").$Enums.ProjectStatus;
    }>;
    update(projectId: string, updateProjectDto: Project): Promise<{
        id: string;
    }>;
    remove(id: number): string;
}
