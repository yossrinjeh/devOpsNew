import { Task } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class TasksService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    createTask(createTaskDto: Task): Promise<Task>;
    findAll(): Promise<Task[]>;
    findOne(id: string): Promise<Task | string>;
    update(id: string, updateTaskDto: Task): Promise<Task | any>;
    remove(id: string): Promise<boolean>;
    assignTaskTo(id: string, userId: string): Promise<Task | null>;
}
