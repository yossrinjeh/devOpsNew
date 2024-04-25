"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RolesService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let RolesService = class RolesService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    deteteRole(id) {
        return this.prisma.role.deleteMany({
            where: {
                id: id,
            },
        });
    }
    getRoleById(id) {
        return this.prisma.role.findUnique({
            where: {
                id: id,
            },
            include: {
                privileges: {
                    select: {
                        id: true,
                        name: true,
                    },
                },
            },
        });
    }
    async updateRole(userId, updateRoleDto) {
        return await this.prisma.role.update({
            where: {
                id: userId,
            },
            data: {
                name: updateRoleDto.name,
                privilegeId: updateRoleDto.privilegeId,
            },
        });
    }
    async createRole(createRoleDto) {
        try {
            const createdRole = await this.prisma.role.create({
                data: {
                    name: createRoleDto.name,
                    privileges: {
                        connect: createRoleDto.privileges.map((id) => ({ id })),
                    },
                },
                include: {
                    privileges: true,
                },
            });
            const response = {
                id: createdRole.id,
                name: createdRole.name,
                privileges: createdRole.privileges.map((privilege) => ({
                    id: privilege.id,
                    name: privilege.name,
                })),
            };
            return response;
        }
        catch (error) {
            console.error('Error creating role:', error);
            throw error;
        }
    }
    getRoles() {
        return this.prisma.role.findMany({
            include: {
                privileges: {
                    select: {
                        id: true,
                        name: true,
                    },
                },
            },
        });
    }
};
exports.RolesService = RolesService;
exports.RolesService = RolesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], RolesService);
//# sourceMappingURL=roles.service.js.map