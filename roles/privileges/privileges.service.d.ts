import { PrismaService } from 'src/prisma/prisma.service';
import { Privilege } from '../dtos/Privilege';
export declare class PrivilegesService {
    private prisma;
    constructor(prisma: PrismaService);
    createPrivileges(Privilege: Privilege): import(".prisma/client").Prisma.Prisma__PrivilegeClient<{
        id: string;
        name: string;
        roleId: string[];
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    getPrivileges(): Promise<Privilege[]>;
}
