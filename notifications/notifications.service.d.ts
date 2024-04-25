import { Notification } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import { CreateNotificationDto } from './dto/create-notification.dto';
export declare class NotificationsService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    createNotification(createNotificationDto: CreateNotificationDto): Promise<Notification>;
    readNotification(id: string): Promise<Notification>;
    unreadNotification(id: string): Promise<Notification>;
    cancelNotification(id: string): Promise<Notification>;
    readAllNotifications(): Promise<Notification[]>;
    cancelAllNotifications(): Promise<Notification[]>;
    getNotificationsByRecipientId(recipientId: string): Promise<Notification[]>;
    getReadNotifications(): Promise<Notification[]>;
    private updateNotification;
    private updateAllNotifications;
}
