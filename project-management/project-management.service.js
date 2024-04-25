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
exports.ProjectManagementService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let ProjectManagementService = class ProjectManagementService {
    constructor(prisma) {
        this.prisma = prisma;
        let includePosts = false;
        let project;
    }
    async create(createProjectDto) {
        const { usersIds, ...rest } = createProjectDto;
        const usersConnect = usersIds
            ? usersIds.map((userId) => ({ id: userId.toString() }))
            : [];
        return await this.prisma.project.create({
            data: {
                ...rest,
                users: {
                    connect: usersConnect,
                },
            },
            select: {
                id: true,
                users: true,
            },
        });
    }
    async getAllProjects() {
        return await this.prisma.project.findMany();
    }
    async getProjectById(projectId) {
        return await this.prisma.project.findUnique({
            where: {
                id: projectId,
            },
        });
    }
    async update(projectId, updateProjectDto) {
        const { usersIds, ...rest } = updateProjectDto;
        console.log(usersIds);
        const usersConnect = usersIds
            ? usersIds.map((userId) => ({ id: userId.toString() }))
            : [];
        return await this.prisma.project.update({
            where: { id: projectId },
            data: {
                ...rest,
                users: {
                    connect: usersConnect,
                },
            },
            select: {
                id: true,
            },
        });
    }
    remove(id) {
        return `This action removes a #${id} projectManagement`;
    }
};
exports.ProjectManagementService = ProjectManagementService;
exports.ProjectManagementService = ProjectManagementService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ProjectManagementService);
//# sourceMappingURL=project-management.service.js.map