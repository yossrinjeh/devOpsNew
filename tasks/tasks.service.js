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
exports.TasksService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let TasksService = class TasksService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async createTask(createTaskDto) {
        const { title, description, priority, status, createBy } = createTaskDto;
        return this.prisma.task.create({
            data: {
                title,
                description,
                priority,
                status,
                createBy,
            },
        });
    }
    async findAll() {
        return this.prisma.task.findMany();
    }
    async findOne(id) {
        try {
            const record = await this.prisma.task.findUnique({
                where: { id: id },
                include: { users: true },
            });
            if (!record) {
                return 'Task with this id : ' + id + ' Not found';
            }
            return record;
        }
        catch (error) {
            console.error('Error fetching task:', error);
            throw new Error('Failed to fetch task');
        }
    }
    async update(id, updateTaskDto) {
        try {
            const updatedTask = await this.prisma.task.update({
                where: { id: id },
                data: {
                    title: updateTaskDto.title,
                    description: updateTaskDto.description,
                    priority: updateTaskDto.priority,
                    status: updateTaskDto.status,
                    createBy: updateTaskDto.createBy,
                },
                select: {
                    id: true,
                    title: true,
                    description: true,
                    priority: true,
                    status: true,
                    createBy: true,
                },
            });
            return updatedTask;
        }
        catch (error) {
            console.error('Error updating task:', error);
            throw new Error('Failed to update task');
        }
    }
    async remove(id) {
        try {
            await this.prisma.task.delete({ where: { id: id } });
            return true;
        }
        catch (error) {
            console.error('Error deleting task:', error);
            throw new Error('Failed to delete task');
        }
    }
    async assignTaskTo(id, userId) {
        const task = await this.prisma.task.findUnique({
            where: {
                id,
            },
        });
        if (!task) {
            throw new Error(`La tâche avec l'ID ${id} n'existe pas.`);
        }
        const user = await this.prisma.user.findUnique({
            where: {
                id,
            },
        });
        if (!user) {
            throw new Error(`L'utilisateur avec l'ID ${userId} n'existe pas.`);
        }
        const updatedTask = await this.prisma.task.update({
            where: {
                id,
            },
            data: {
                users: {
                    connect: {
                        id,
                    },
                },
            },
        });
        return updatedTask;
    }
};
exports.TasksService = TasksService;
exports.TasksService = TasksService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], TasksService);
//# sourceMappingURL=tasks.service.js.map