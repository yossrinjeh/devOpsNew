import { PrivilegesService } from './privileges.service';
import { Privilege } from '../dtos/Privilege';
export declare class PrivilegesController {
    private privilegesService;
    constructor(privilegesService: PrivilegesService);
    getPrivileges(): Promise<Privilege[]>;
    createPrivileges(Privilege: Privilege): import(".prisma/client").Prisma.Prisma__PrivilegeClient<{
        id: string;
        name: string;
        roleId: string[];
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
}
