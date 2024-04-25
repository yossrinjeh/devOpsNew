import { TasksService } from './tasks.service';
import { Task } from '@prisma/client';
export declare class TasksController {
    private readonly tasksService;
    constructor(tasksService: TasksService);
    createTask(createTaskDto: Task): Promise<Task>;
    findAll(): Promise<{
        id: string;
        title: string;
        description: string;
        priority: import(".prisma/client").$Enums.TaskPriority;
        status: import(".prisma/client").$Enums.TaskStatus;
        createBy: string;
        createdAt: Date;
        updatedAt: Date;
        usersIDs: string[];
    }[]>;
    findOne(id: string): Promise<string | {
        id: string;
        title: string;
        description: string;
        priority: import(".prisma/client").$Enums.TaskPriority;
        status: import(".prisma/client").$Enums.TaskStatus;
        createBy: string;
        createdAt: Date;
        updatedAt: Date;
        usersIDs: string[];
    }>;
    update(id: string, updateTaskDto: Task): Promise<any>;
    remove(id: string): Promise<boolean>;
    assignTaskTo(id: string, id2: string): Promise<{
        id: string;
        title: string;
        description: string;
        priority: import(".prisma/client").$Enums.TaskPriority;
        status: import(".prisma/client").$Enums.TaskStatus;
        createBy: string;
        createdAt: Date;
        updatedAt: Date;
        usersIDs: string[];
    }>;
}
