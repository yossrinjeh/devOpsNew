export declare enum TaskStatus {
    PENDING = "PENDING",
    IN_PROGRESS = "IN_PROGRESS",
    COMPLETED = "COMPLETED"
}
export declare enum TaskPriority {
    LOW = "LOW",
    MEDIUM = "MEDIUM",
    HIGH = "HIGH"
}
export declare class CreateTaskDto {
    title: String;
    description?: string;
    priority: TaskPriority;
    status: TaskStatus;
    createBy: string;
}
