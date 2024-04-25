import { RolesService } from './roles.service';
import { CreateRoleDto } from './dtos/CreateRole.dto';
export declare class RolesController {
    private rolesService;
    constructor(rolesService: RolesService);
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
    createRole(createRoleDto: CreateRoleDto): Promise<import("./dtos/RoleResponse.dto").RoleResponseDto>;
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
}
