import { PrismaService } from 'src/prisma/prisma.service';
import { CreateRoleDto } from './dtos/CreateRole.dto';
import { RoleResponseDto } from './dtos/RoleResponse.dto';
export declare class RolesService {
    private prisma;
    constructor(prisma: PrismaService);
    deteteRole(id: string): import(".prisma/client").Prisma.PrismaPromise<import(".prisma/client").Prisma.BatchPayload>;
    getRoleById(id: string): import(".prisma/client").Prisma.Prisma__RoleClient<{
        privileges: {
            id: string;
            name: string;
        }[];
    } & {
        id: string;
        name: string;
        privilegeId: string[];
        userId: string[];
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
    updateRole(userId: string, updateRoleDto: any): Promise<{
        id: string;
        name: string;
        privilegeId: string[];
        userId: string[];
    }>;
    createRole(createRoleDto: CreateRoleDto): Promise<RoleResponseDto>;
    getRoles(): import(".prisma/client").Prisma.PrismaPromise<({
        privileges: {
            id: string;
            name: string;
        }[];
    } & {
        id: string;
        name: string;
        privilegeId: string[];
        userId: string[];
    })[]>;
}
